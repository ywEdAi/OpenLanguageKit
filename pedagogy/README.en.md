# Language-learning pedagogy and learning sciences graph

> English translation of [README.md](README.md). The Chinese file is the source; if the two differ, it wins.

This first version helps designers find out which claim a teaching choice depends on, what evidence there is, and under which conditions it cannot be extrapolated. Language content is managed by `content/` in the same workspace. This directory holds only teaching and learning research, and does not merge discourse relations, grammar knowledge and learning theories into one kind of node.

`graph.json` is the data entry point. `evaluation.md` records the scientific boundaries, the schema trade-offs and the independent review. `content-links.json` holds content matches awaiting confirmation. `validate.py` checks the structure with the Python standard library. `decisions.tsv` holds the key decisions of this round of research.

## Coverage of the first version

The graph covers input, attention, noticing, output, interaction, feedback, retrieval practice, spacing, transfer, skill acquisition, as well as explicit and implicit knowledge and the declarative and procedural memory model. Krashen's i+1, Vygotsky's zone of proximal development and scaffolding are modelled separately. The sources are mainly the original authors' publications, publisher pages, university archives and official research indexes. The verification date is 2026-11-07.

This is a selective starting point for research. It did not do a systematic review, pool effect sizes or rank theories. That a source can be verified does not mean that all of that source's conclusions have consensus. `sources[].access` states whether, this time, the relevant passages of the body text, the abstract, or only the bibliographic record was read.

## Data contract

The top level keeps `schemaVersion: 1`, `nodes` and `edges`. Node IDs use the stable `ped:` namespace. Published IDs do not change when the Chinese labels change.

| Field | Meaning |
| --- | --- |
| `kind` | `theory`, `hypothesis`, `effect`, `practice` or `mechanism`. The type does not indicate the strength of the evidence. |
| `subtype` | Keeps finer distinctions such as knowledge construct or outcome construct where necessary, to avoid a construct being misread as a proven causal mechanism. |
| `evidenceStatus` | A limited, editorial evidence status. It is defined in `evidenceStatusDefinitions`, and is not a GRADE rating or an automatic score. |
| `description` | What exactly the node refers to. Theoretical claims use "proposes" or "hypothesises". |
| `evidenceScope` | The tasks, languages, measurements and range of extrapolation covered by the sources actually used in this round. |
| `limitations` | Controversies, measurement limits and conclusions that cannot be derived. |
| `sources` | Title, accessible source URL, year, role of the source and the degree of access this time. |
| `language` | Fixed as `shared`, meaning a research catalogue shared across the content graphs; it does not mean the effect is the same in all languages. |

An edge's `relation` is defined by `relationDefinitions`. `basis` distinguishes `theoretical_claim`, `empirical_finding`, `conceptual_distinction` and `design_inference`. `note` limits the claim that this edge specifically expresses, and `sources` support that limited claim. The sources of a design inference are sources of inspiration, not proof that this product already works. Edges are not a prerequisite order and do not automatically transmit causal relations.

The five fixed `kind` values cannot fully express every object of the learning sciences. The first version puts "the explicit / implicit knowledge distinction" and "transfer" into `mechanism`, while making `subtype` mandatory. The interface should display the subtype. If a strict ontology of mechanisms needs to be queried later, the schema should be upgraded, rather than treating these constructs as causal mechanisms.

## Cross-links to the language content

The content graph uses `kt:` and the research graph uses `ped:`. Cross-graph edges go in `content-links.json`, not in the research graph's internal `edges`.

The current candidate matches have semantic conditions, target languages, related pedagogy IDs and task suggestions. The candidates have no content IDs and no actual `source` and `target` edges. C33 and C59 are external asset codes and must not pass for `kt:` nodes. Only after the real IDs in the content graph have been confirmed may a candidate be turned into an actual link, with the basis of the check saved.

This round does not implement a second website. The original chat can read these two JSON files directly and provide a pedagogy tab and search. Search suggestions include `label`, `aliases`, `description`, `limitations` and the candidate semantics. The detail view should show `kind`, `subtype`, `evidenceStatus`, the sources and the edge's `basis` together, and must not show only an unconditional "scientifically supported" label.

## Entry point for re-checking

Run `python3 pedagogy/validate.py` from the project root. The validator reads the data from its own directory, so it can also be run with an absolute path.

Structural validation cannot judge whether a paper supports a claim, nor prove learning effects. The results of the scientific review and the unfinished items are in [evaluation.md](evaluation.md).
