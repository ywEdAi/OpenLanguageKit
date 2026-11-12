import json
import re
from pathlib import Path
from urllib.parse import urlparse


base = Path(__file__).resolve().parent
graph = json.loads((base / "graph.json").read_text())
cross = json.loads((base / "content-links.json").read_text())
assert graph["schemaVersion"] == cross["schemaVersion"] == 1
assert graph["language"] == "shared"
assert isinstance(graph["nodes"], list) and graph["nodes"]
assert isinstance(graph["edges"], list)

node_fields = {
    "id", "label", "kind", "description", "evidenceStatus", "sources",
    "limitations", "language", "evidenceScope",
}
kinds = {"theory", "hypothesis", "effect", "practice", "mechanism"}
bases = {"theoretical_claim", "empirical_finding", "conceptual_distinction", "design_inference"}
assert set(graph["kindDefinitions"]) == kinds
assert set(graph["basisDefinitions"]) == bases
ids = [node["id"] for node in graph["nodes"]]
assert len(ids) == len(set(ids)), "Duplicate pedagogy node IDs"
assert all(re.fullmatch(r"ped:[a-z0-9]+(?:-[a-z0-9]+)*", value) for value in ids)
source_lists = []
for node in graph["nodes"]:
    assert node_fields <= node.keys(), node["id"]
    assert node["kind"] in kinds, node["id"]
    assert node["evidenceStatus"] in graph["evidenceStatusDefinitions"], node["id"]
    assert node["language"] == "shared", node["id"]
    for key in ("label", "description", "evidenceScope"):
        assert isinstance(node[key], str) and node[key].strip(), (node["id"], key)
    assert isinstance(node["limitations"], list) and node["limitations"], node["id"]
    assert all(isinstance(value, str) and value.strip() for value in node["limitations"])
    source_lists.append(node["sources"])

edge_keys = set()
for edge in graph["edges"]:
    assert {"source", "target", "relation", "note", "basis", "sources"} <= edge.keys()
    assert edge["source"] in ids and edge["target"] in ids, "Dangling internal edge"
    assert edge["relation"] in graph["relationDefinitions"], edge
    assert edge["basis"] in bases, edge
    assert isinstance(edge["note"], str) and edge["note"].strip(), edge
    key = (edge["source"], edge["target"], edge["relation"])
    assert key not in edge_keys, "Duplicate edge"
    edge_keys.add(key)
    source_lists.append(edge["sources"])

assert cross["contentNamespace"] == "kt:" and cross["pedagogyNamespace"] == "ped:"
assert isinstance(cross["links"], list) and not cross["links"], "Actual content IDs need a resolver before promotion"
assert isinstance(cross["candidates"], list)
candidate_ids = set()
for candidate in cross["candidates"]:
    assert candidate["id"] not in candidate_ids, "Duplicate candidate ID"
    candidate_ids.add(candidate["id"])
    assert candidate["status"] == "candidate_pending_content_id"
    assert candidate["basis"] == "design_inference"
    assert candidate["contentReference"] is None
    assert not {"source", "target"} & candidate.keys(), "Candidate is not an actual edge"
    assert candidate["pedagogyNodeIds"] and all(value in ids for value in candidate["pedagogyNodeIds"])
    assert candidate["contentMatch"]["language"] in {"en", "ja"}
    assert candidate["contentMatch"]["semanticCriteria"]
    for key in ("taskSuggestion", "evaluationSuggestion"):
        assert isinstance(candidate[key], str) and candidate[key].strip()

source_urls = set()
source_records = {}
for source_list in source_lists:
    assert isinstance(source_list, list) and source_list, "Every claim needs sources"
    for source in source_list:
        assert {"title", "url", "year", "role", "access", "locator"} <= source.keys()
        assert all(isinstance(source[key], str) and source[key].strip() for key in ("title", "url", "role", "access", "locator"))
        parsed = urlparse(source["url"])
        assert parsed.scheme == "https" and parsed.netloc, source
        assert isinstance(source["year"], int) and 1900 <= source["year"] <= 2026
        assert source["url"] not in source_records or source_records[source["url"]] == source, "Conflicting source metadata"
        source_records[source["url"]] = source
        source_urls.add(source["url"])

by_id = {node["id"]: node for node in graph["nodes"]}
assert by_id["ped:transfer"]["subtype"] == "outcome_construct"
assert by_id["ped:explicit-implicit-knowledge"]["subtype"] == "knowledge_construct_distinction"
assert graph["review"]["systematicReview"] is False
print(f"PASS: {len(ids)} nodes, {len(edge_keys)} internal edges, {len(source_urls)} sources, {len(candidate_ids)} pending candidates, 0 actual cross-graph edges")
