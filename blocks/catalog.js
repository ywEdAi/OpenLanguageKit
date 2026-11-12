/* Shared lookup: knowledge points → primitives → runnable learning pages.
 * Used by the course viewer (备课, 学习路径) and the workspace so both pages agree on what is covered.
 *
 *   const cat = KTCatalog({ curriculum: window.CURRICULUM, primitives: window.PRIMITIVES,
 *                           assets: window.ASSET_LIBRARY, registry: window.KT_REGISTRY, root: '../../' });
 *   cat.coverage(kc, 'ja')        // 'block' | 'impl' | 'borrow' | 'spec'
 *   cat.artifactsForKC(kc, 'ja')  // [{key, kind, title, src, why, embeddable, reference?}]
 *
 * Rules (keep them strict; the workspace review depends on them):
 *  - 'block': an artifact in blocks/registry.js lists this KC — the page really practises it.
 *  - 'impl': the KC's PRIMARY primitive has an asset-library page in this language.
 *  - 'borrow': the primary primitive has an implementation somewhere else (another language, or a block
 *    built for other KCs) — usable as a starting point, not as coverage.
 *  - 'spec': the primary primitive is only a contract.
 *  A block that implements the same primitive but does not list the KC is a "reference": it is opened
 *  without the KC id, so its evidence is never attributed to this KC. */
(function (global) {
  'use strict';
  var LANGS = { en: '英语', ja: '日语', zh: '中文', fr: '法语' };
  var COV = {
    block: { label: '有现成的学习页面', short: '现成页面' },
    impl: { label: '主要原语有可直接用的页面', short: '可直接用' },
    borrow: { label: '有别处的实现，可借用改写', short: '可借用' },
    spec: { label: '只有设计契约，还没有页面', short: '只有契约' }
  };

  function KTCatalog(o) {
    var P = o.primitives || { primitives: [], families: {} };
    var AL = o.assets || { assets: [] };
    var R = o.registry || { blocks: {}, packs: {}, artifacts: [] };
    var root = o.root || '';
    var PRIM = {}; P.primitives.forEach(function (p) { PRIM[p.id] = p; });
    var ASSET = {}; AL.assets.forEach(function (a) { ASSET[a.id] = a; });
    var cat = { LANGS: LANGS, COV: COV, PRIM: PRIM, assetLocal: false };

    function blockOf(a) {
      var page = a.href.split('?')[0];
      for (var id in R.blocks) if (R.blocks[id].file === page) return Object.assign({ id: id }, R.blocks[id]);
      return null;
    }
    function fromBlock(a, kcId, why, reference) {
      var b = blockOf(a) || {};
      return { key: 'block:' + a.id, kind: 'block', id: a.id, title: a.title, lang: a.lang, primitive: b.primitive,
        src: root + 'blocks/' + a.href + (kcId ? '&kc=' + encodeURIComponent(kcId) : ''), why: why, note: a.note,
        embeddable: true, reference: !!reference };
    }
    function fromAsset(id, why, primitive) {
      var a = ASSET[id];
      var local = cat.assetLocal && a;
      return { key: 'asset:' + id, kind: 'asset', id: id, title: a ? a.zh + '（' + (a.code || id) + '）' : id, lang: 'en', primitive: primitive,
        src: a ? (local ? '/asset-library/' + a.open : (AL.repo || '') + '/blob/main/' + a.open) : null,
        why: why, embeddable: !!local };
    }

    cat.directArtifacts = function (kcId) { return R.artifacts.filter(function (a) { return a.kcs.indexOf(kcId) >= 0; }); };
    cat.primary = function (k) { var u = (k.primitives || []).find(function (u) { return u.role === 'primary'; }); return u && PRIM[u.primitive]; };
    cat.coverage = function (k, lang) {
      if (cat.directArtifacts(k.id).length) return 'block';
      var p = cat.primary(k);
      if (!p || !p.implementations.length) return 'spec';
      return p.implementations.some(function (i) { return i.asset && i.language === lang; }) ? 'impl' : 'borrow';
    };
    cat.artifactsForKC = function (k, lang) {
      var out = [], seen = {};
      function add(a) { if (!seen[a.key]) { seen[a.key] = 1; out.push(a); } }
      cat.directArtifacts(k.id).forEach(function (a) { add(fromBlock(a, k.id, '专门为这个知识点配置')); });
      (k.primitives || []).forEach(function (u) {
        var p = PRIM[u.primitive]; if (!p) return;
        (p.implementations || []).forEach(function (i) {
          if (i.asset) add(fromAsset(i.asset, (u.role === 'primary' ? '主要' : '辅助') + '原语「' + p.name + '」的英语页面' + (i.note ? '：' + i.note : ''), p.id));
        });
        R.artifacts.forEach(function (a) {
          var b = blockOf(a);
          if (b && b.primitive === u.primitive && a.lang === lang) add(fromBlock(a, null, '复用参考：同一原语（' + p.name + '）的积木，没有覆盖这个知识点，要换数据才能用', true));
        });
      });
      return out;
    };
    cat.artifactsForPrim = function (p) {
      var out = [];
      R.artifacts.forEach(function (a) { var b = blockOf(a); if (b && b.primitive === p.id) out.push(fromBlock(a, null, LANGS[a.lang] || a.lang)); });
      (p.implementations || []).forEach(function (i) { if (i.asset) out.push(fromAsset(i.asset, i.note || '英语页面', p.id)); });
      return out;
    };
    cat.allArtifacts = function () {
      return R.artifacts.map(function (a) { return fromBlock(a, null, LANGS[a.lang] || a.lang); })
        .concat(AL.assets.map(function (a) {
          var p = P.primitives.find(function (p) { return (p.implementations || []).some(function (i) { return i.asset === a.id; }); });
          return fromAsset(a.id, a.group || '', p && p.id);
        }));
    };
    cat.find = function (key, k, lang) {
      return (k && cat.artifactsForKC(k, lang).find(function (a) { return a.key === key; })) ||
        cat.allArtifacts().find(function (a) { return a.key === key; });
    };
    cat.registryArtifact = function (key) { return R.artifacts.find(function (a) { return 'block:' + a.id === key; }); };
    /** Ask the local workspace server (python3 workspace/serve.py) whether the asset library is mounted. */
    cat.detectServer = function () {
      return fetch('/api/config').then(function (r) { return r.ok ? r.json() : null; })
        .then(function (cfg) { if (cfg && cfg.server) cat.assetLocal = !!cfg.assetLibrary; return cfg; })
        .catch(function () { return null; });
    };
    return cat;
  }
  global.KTCatalog = KTCatalog;
})(typeof window !== 'undefined' ? window : globalThis);
