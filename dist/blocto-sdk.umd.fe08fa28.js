// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fw5qt":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "81186c6efe08fa28";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8ZZqb":[function(require,module,exports) {
var global = arguments[3];
!function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    var t = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
    function e() {
        throw new Error("setTimeout has not been defined");
    }
    function r() {
        throw new Error("clearTimeout has not been defined");
    }
    var n = e, i = r;
    function o(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === e || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0);
        } catch (e) {
            try {
                return n.call(null, t, 0);
            } catch (e) {
                return n.call(this, t, 0);
            }
        }
    }
    "function" == typeof t.setTimeout && (n = setTimeout), "function" == typeof t.clearTimeout && (i = clearTimeout);
    var s, a = [], h = !1, f = -1;
    function u() {
        h && s && (h = !1, s.length ? a = s.concat(a) : f = -1, a.length && c());
    }
    function c() {
        if (!h) {
            var t = o(u);
            h = !0;
            for(var e = a.length; e;){
                for(s = a, a = []; ++f < e;)s && s[f].run();
                f = -1, e = a.length;
            }
            s = null, h = !1, function(t) {
                if (i === clearTimeout) return clearTimeout(t);
                if ((i === r || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
                try {
                    i(t);
                } catch (e) {
                    try {
                        return i.call(null, t);
                    } catch (e) {
                        return i.call(this, t);
                    }
                }
            }(t);
        }
    }
    function d(t, e) {
        this.fun = t, this.array = e;
    }
    d.prototype.run = function() {
        this.fun.apply(null, this.array);
    };
    function l() {}
    var p = l, b = l, m = l, y = l, g = l, v = l, w = l;
    var M = t.performance || {}, _ = M.now || M.mozNow || M.msNow || M.oNow || M.webkitNow || function() {
        return (new Date).getTime();
    };
    var A = new Date;
    var S = {
        nextTick: function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for(var r = 1; r < arguments.length; r++)e[r - 1] = arguments[r];
            a.push(new d(t, e)), 1 !== a.length || h || o(c);
        },
        title: "browser",
        browser: !0,
        env: {},
        argv: [],
        version: "",
        versions: {},
        on: p,
        addListener: b,
        once: m,
        off: y,
        removeListener: g,
        removeAllListeners: v,
        emit: w,
        binding: function(t) {
            throw new Error("process.binding is not supported");
        },
        cwd: function() {
            return "/";
        },
        chdir: function(t) {
            throw new Error("process.chdir is not supported");
        },
        umask: function() {
            return 0;
        },
        hrtime: function(t) {
            var e = .001 * _.call(M), r = Math.floor(e), n = Math.floor(e % 1 * 1e9);
            return t && (r -= t[0], (n -= t[1]) < 0 && (r--, n += 1e9)), [
                r,
                n
            ];
        },
        platform: "browser",
        release: {},
        config: {},
        uptime: function() {
            return (new Date - A) / 1e3;
        }
    }, E = function(t, e, r, n, i, o, s, a) {
        if ("production" !== S.env.NODE_ENV && void 0 === e) throw new Error("invariant requires an error message argument");
        if (!t) {
            var h;
            if (void 0 === e) h = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var f = [
                    r,
                    n,
                    i,
                    o,
                    s,
                    a
                ], u = 0;
                (h = new Error(e.replace(/%s/g, function() {
                    return f[u++];
                }))).name = "Invariant Violation";
            }
            throw h.framesToPop = 1, h;
        }
    };
    const x = {
        56: "https://bsc-dataseed1.binance.org",
        97: "https://data-seed-prebsc-1-s1.binance.org:8545",
        137: "https://rpc-mainnet.maticvigil.com/",
        80001: "https://rpc-mumbai.matic.today/",
        43114: "https://api.avax.network/ext/bc/C/rpc",
        43113: "https://api.avax-test.network/ext/bc/C/rpc"
    }, I = {
        1: "ethereum",
        4: "ethereum",
        56: "bsc",
        97: "bsc",
        137: "polygon",
        80001: "polygon",
        43114: "avalanche",
        43113: "avalanche"
    }, k = {
        1: "mainnet",
        4: "rinkeby",
        56: "mainnet",
        97: "testnet",
        137: "mainnet",
        80001: "testnet",
        43114: "mainnet",
        43113: "testnet"
    }, R = {
        1: "https://wallet.blocto.app",
        4: "https://wallet-testnet.blocto.app",
        56: "https://wallet.blocto.app",
        97: "https://wallet-testnet.blocto.app",
        137: "https://wallet.blocto.app",
        80001: "https://wallet-testnet.blocto.app",
        43114: "https://wallet.blocto.app",
        43113: "https://wallet-testnet.blocto.app"
    }, B = {
        devnet: "https://wallet-testnet.blocto.app",
        testnet: "https://wallet-testnet.blocto.app",
        "mainnet-beta": "https://wallet.blocto.app"
    }, T = [
        "devnet",
        "testnet",
        "mainnet-beta"
    ], U = [
        "connect",
        "disconnect",
        "message",
        "chainChanged",
        "accountsChanged"
    ], O = 864e5;
    class P {
        constructor(){
            this.isBlocto = !0, this.isConnecting = !1, this.connected = !1, this.eventListeners = {}, this.code = null, this.sessionKey = "sdk.session", this.off = removeEventListener, U.forEach((t)=>{
                this.eventListeners[t] = [];
            });
        }
        async request(t) {}
        on(t, e) {
            U.includes(t) && this.eventListeners[t].push(e);
        }
        once() {}
        removeListener(t, e) {
            const r = this.eventListeners[t].findIndex((t)=>t === e);
            -1 !== r && this.eventListeners[t].splice(r, 1);
        }
    }
    function L(t) {
        const e = document.createElement("iframe");
        return e.setAttribute("src", t), e.setAttribute("style", "width:100vw;height:100%;position:fixed;top:0;left:0;z-index:20000;border:none;"), e;
    }
    function N(t) {
        document.body.appendChild(t);
    }
    function z(t) {
        const e = t && t.parentNode;
        e && e.removeChild instanceof Function && e.removeChild(t);
    }
    var C = (t, e, r = window)=>{
        r.addEventListener(t, function n(i) {
            e(i, ()=>r.removeEventListener(t, n));
        });
    };
    const q = "undefined" != typeof window ? window.memoryStorage : new class {
        constructor(){
            this.storage = {};
        }
        getItem(t) {
            return this[t] || null;
        }
        setItem(t, e) {
            this.storage[t] = e;
        }
        removeItem(t) {
            delete this.storage[t];
        }
    };
    "undefined" != typeof window && (window.memoryStorage = q);
    const j = (()=>{
        if ("undefined" == typeof window) return !1;
        try {
            window.localStorage.setItem("local_storage_supported", "1");
            const t = window.localStorage.getItem("local_storage_supported");
            return window.localStorage.removeItem("local_storage_supported"), "1" === t;
        } catch (t) {
            return !1;
        }
    })() ? window.localStorage : q, D = (t, e = null)=>{
        const r = ((t, e = null)=>{
            const r = j.getItem(t);
            try {
                return JSON.parse(r) || e;
            } catch (t) {
                return r || e;
            }
        })(t, null);
        return r ? (new Date).getTime() > r.expiry ? (Y(t), e) : r.value : e;
    }, F = (t, e)=>j.setItem(t, "string" == typeof e ? e : JSON.stringify(e)), K = (t, e, r)=>F(t, {
            value: e,
            expiry: (new Date).getTime() + r
        }), Y = (t)=>{
        F(t, ""), j.removeItem(t);
    };
    async function V(t, e) {
        if (403 === t.status) throw e.code = null, Y(e.sessionKey), new Error("[Blocto SDK]: Session expired!");
        return t.json();
    }
    class W extends P {
        constructor({ chainId: t = "0x1" , rpc: e , server: r , appId: n  }){
            super(), this.accounts = [], E(t, "'chainId' is required"), "number" == typeof t ? this.chainId = t : t.includes("0x") ? this.chainId = parseInt(t, 16) : this.chainId = parseInt(t, 10), this.networkId = this.chainId, this.chain = I[this.chainId], this.net = k[this.chainId], E(this.chain, `unsupported 'chainId': ${this.chainId}`), this.rpc = e || x[this.chainId] || undefined || "", E(this.rpc, "'rpc' is required for Ethereum"), this.server = r || R[this.chainId] || "https://wallet.blocto.app", this.appId = n || undefined;
        }
        tryRetrieveSessionFromStorage() {
            const t = D(this.sessionKey, {}), e = t && t.code, r = t && t.address && t.address[this.chain];
            this.connected = Boolean(e && r), this.code = e || null, this.accounts = r ? [
                r
            ] : [];
        }
        checkNetworkMatched() {
            const t = window.ethereum;
            if (t && t.isBlocto && parseInt(t.chainId, 16) !== this.chainId) throw new Error("Blocto SDK network mismatched");
        }
        async send(t, e) {
            switch(!0){
                case e instanceof Function:
                    return this.sendAsync(t, e);
                case "string" == typeof t && Array.isArray(e):
                    return this.sendAsync({
                        method: t,
                        params: e
                    });
                default:
                    return this.sendAsync(t);
            }
        }
        async sendAsync(t, e) {
            const r = new Promise((e)=>{
                if (Array.isArray(t)) {
                    const r = t.filter((t)=>"eth_sendTransaction" === t.method).map((t)=>t.params[0]), n = Math.floor(1e4 * Math.random()), i = {
                        method: "blocto_sendBatchTransaction",
                        params: r
                    }, o = this.request(i), s = t.map(({ method: t , params: e  }, r)=>"eth_sendTransaction" === t ? o : this.request({
                            id: n + r + 1,
                            jsonrpc: "2.0",
                            method: t,
                            params: e
                        }));
                    Promise.allSettled(s).then((t)=>e(t.map((t, e)=>({
                                id: n + e + 1,
                                jsonrpc: "2.0",
                                result: "fulfilled" === t.status ? t.value : void 0,
                                error: "fulfilled" !== t.status ? t.reason : void 0
                            }))));
                } else this.request(t).then(e);
            });
            if (!e) return r;
            r.then((t)=>e(null, t)).catch((t)=>e(t));
        }
        async request(t) {
            const e = window.ethereum;
            if (e && e.isBlocto) return e.request(t);
            this.connected || await this.enable();
            try {
                let e = null, r = null;
                switch(t.method){
                    case "eth_requestAccounts":
                        this.accounts = await this.fetchAccounts();
                    case "eth_accounts":
                        r = this.accounts.length ? this.accounts : await this.fetchAccounts();
                        break;
                    case "eth_coinbase":
                        r = this.accounts[0];
                        break;
                    case "eth_chainId":
                        r = this.chainId, r = `0x${r.toString(16)}`;
                        break;
                    case "net_version":
                        r = this.networkId || this.chainId, r = `0x${r.toString(16)}`;
                        break;
                    case "eth_signTypedData_v3":
                    case "eth_signTypedData":
                    case "eth_signTypedData_v4":
                    case "personal_sign":
                    case "eth_sign":
                        r = await this.handleSign(t);
                        break;
                    case "blocto_sendBatchTransaction":
                    case "eth_sendTransaction":
                        r = await this.handleSendTransaction(t);
                        break;
                    case "eth_signTransaction":
                    case "eth_sendRawTransaction":
                        r = null;
                        break;
                    default:
                        e = await this.handleReadRequests(t);
                }
                if (e && !e.result && e.error) {
                    const t = e.error.message ? e.error.message : "Request failed";
                    throw new Error(t);
                }
                return e ? e.result : r;
            } catch (t) {
                throw console.error(t), t;
            }
        }
        async enable() {
            const t = window.ethereum;
            if (t && t.isBlocto) {
                if (parseInt(t.chainId, 16) !== this.chainId) try {
                    await t.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                                chainId: `0x${this.chainId.toString(16)}`
                            }
                        ]
                    }), this.accounts = [
                        t.address
                    ];
                } catch (t) {
                    console.error(t);
                }
                return new Promise((e, r)=>setTimeout(()=>t.enable().then(e).catch(r), 10));
            }
            return this.tryRetrieveSessionFromStorage(), new Promise((t, e)=>{
                if ("undefined" == typeof window && e("Currently only supported in browser"), this.connected) return t(this.accounts);
                const r = encodeURIComponent(window.location.origin), n = L(`${this.server}/authn?l6n=${r}&chain=${this.chain}`);
                N(n), C("message", (r, i)=>{
                    const o = r;
                    if (o.origin === this.server) {
                        if ("FCL::CHALLENGE::RESPONSE" === o.data.type) {
                            i(), z(n), this.code = o.data.code, this.connected = !0, this.eventListeners.connect.forEach((t)=>t(this.chainId));
                            const e = o.data.address;
                            this.accounts = e ? [
                                e[this.chain]
                            ] : [], K(this.sessionKey, {
                                code: this.code,
                                address: e
                            }, O), t(this.accounts);
                        }
                        "FCL::CHALLENGE::CANCEL" === o.data.type && (i(), z(n), e(new Error("User declined the login request")));
                    }
                });
            });
        }
        async fetchAccounts() {
            this.checkNetworkMatched();
            const { accounts: t  } = await fetch(`${this.server}/api/${this.chain}/accounts?code=${this.code}`).then((t)=>V(t, this));
            return this.accounts = t, t;
        }
        async handleReadRequests(t) {
            return this.checkNetworkMatched(), fetch(this.rpc, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: 1,
                    jsonrpc: "2.0",
                    ...t
                })
            }).then((t)=>t.json());
        }
        async handleSign({ method: t , params: e  }) {
            const r = `${this.server}/user-signature/${this.chain}`, n = L(r);
            N(n);
            let i = "";
            return Array.isArray(e) && ("eth_sign" === t ? i = e[1].slice(2) : "personal_sign" === t ? i = e[0].slice(2) : [
                "eth_signTypedData",
                "eth_signTypedData_v3",
                "eth_signTypedData_v4"
            ].includes(t) && (i = e[1])), C("message", (e, o)=>{
                const s = e;
                s.origin === this.server && "ETH:FRAME:READY" === s.data.type && (n.contentWindow && n.contentWindow.postMessage({
                    type: "ETH:FRAME:READY:RESPONSE",
                    method: t,
                    message: i,
                    chain: this.chain
                }, r), o());
            }), new Promise((t, e)=>C("message", (r, i)=>{
                    const o = r;
                    o.origin === this.server && "ETH:FRAME:RESPONSE" === o.data.type && ("APPROVED" === o.data.status && (i(), z(n), t(o.data.signature)), "DECLINED" === o.data.status && (i(), z(n), e(new Error("User declined the signing request"))));
                }));
        }
        async handleSendTransaction(t) {
            this.checkNetworkMatched();
            const { authorizationId: e  } = await fetch(`${this.server}/api/${this.chain}/authz?code=${this.code}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(t.params)
            }).then((t)=>V(t, this));
            if ("undefined" == typeof window) throw new Error("Currently only supported in browser");
            const r = L(`${this.server}/authz/${this.chain}/${e}`);
            return N(r), new Promise((t, e)=>C("message", (n, i)=>{
                    const o = n;
                    o.origin === this.server && "ETH:FRAME:RESPONSE" === o.data.type && ("APPROVED" === o.data.status && (i(), z(r), t(o.data.txHash)), "DECLINED" === o.data.status && (i(), z(r), e(new Error("User declined to send the transaction"))));
                }));
        }
    }
    var H = [], $ = [], G = "undefined" != typeof Uint8Array ? Uint8Array : Array, Z = !1;
    function J() {
        Z = !0;
        for(var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = 0, r = t.length; e < r; ++e)H[e] = t[e], $[t.charCodeAt(e)] = e;
        $["-".charCodeAt(0)] = 62, $["_".charCodeAt(0)] = 63;
    }
    function X(t, e, r) {
        for(var n, i, o = [], s = e; s < r; s += 3)n = (t[s] << 16) + (t[s + 1] << 8) + t[s + 2], o.push(H[(i = n) >> 18 & 63] + H[i >> 12 & 63] + H[i >> 6 & 63] + H[63 & i]);
        return o.join("");
    }
    function Q(t) {
        var e;
        Z || J();
        for(var r = t.length, n = r % 3, i = "", o = [], s = 16383, a = 0, h = r - n; a < h; a += s)o.push(X(t, a, a + s > h ? h : a + s));
        return 1 === n ? (e = t[r - 1], i += H[e >> 2], i += H[e << 4 & 63], i += "==") : 2 === n && (e = (t[r - 2] << 8) + t[r - 1], i += H[e >> 10], i += H[e >> 4 & 63], i += H[e << 2 & 63], i += "="), o.push(i), o.join("");
    }
    function tt(t, e, r, n, i) {
        var o, s, a = 8 * i - n - 1, h = (1 << a) - 1, f = h >> 1, u = -7, c = r ? i - 1 : 0, d = r ? -1 : 1, l = t[e + c];
        for(c += d, o = l & (1 << -u) - 1, l >>= -u, u += a; u > 0; o = 256 * o + t[e + c], c += d, u -= 8);
        for(s = o & (1 << -u) - 1, o >>= -u, u += n; u > 0; s = 256 * s + t[e + c], c += d, u -= 8);
        if (0 === o) o = 1 - f;
        else {
            if (o === h) return s ? NaN : 1 / 0 * (l ? -1 : 1);
            s += Math.pow(2, n), o -= f;
        }
        return (l ? -1 : 1) * s * Math.pow(2, o - n);
    }
    function et(t, e, r, n, i, o) {
        var s, a, h, f = 8 * o - i - 1, u = (1 << f) - 1, c = u >> 1, d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l = n ? 0 : o - 1, p = n ? 1 : -1, b = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for(e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = u) : (s = Math.floor(Math.log(e) / Math.LN2), e * (h = Math.pow(2, -s)) < 1 && (s--, h *= 2), (e += s + c >= 1 ? d / h : d * Math.pow(2, 1 - c)) * h >= 2 && (s++, h /= 2), s + c >= u ? (a = 0, s = u) : s + c >= 1 ? (a = (e * h - 1) * Math.pow(2, i), s += c) : (a = e * Math.pow(2, c - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + l] = 255 & a, l += p, a /= 256, i -= 8);
        for(s = s << i | a, f += i; f > 0; t[r + l] = 255 & s, l += p, s /= 256, f -= 8);
        t[r + l - p] |= 128 * b;
    }
    var rt = {}.toString, nt = Array.isArray || function(t) {
        return "[object Array]" == rt.call(t);
    };
    at.TYPED_ARRAY_SUPPORT = void 0 === t.TYPED_ARRAY_SUPPORT || t.TYPED_ARRAY_SUPPORT;
    var it = ot();
    function ot() {
        return at.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }
    function st(t, e) {
        if (ot() < e) throw new RangeError("Invalid typed array length");
        return at.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = at.prototype : (null === t && (t = new at(e)), t.length = e), t;
    }
    function at(t, e, r) {
        if (!(at.TYPED_ARRAY_SUPPORT || this instanceof at)) return new at(t, e, r);
        if ("number" == typeof t) {
            if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
            return ut(this, t);
        }
        return ht(this, t, e, r);
    }
    function ht(t, e, r, n) {
        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, r, n) {
            if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
            if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
            e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n);
            at.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = at.prototype : t = ct(t, e);
            return t;
        }(t, e, r, n) : "string" == typeof e ? function(t, e, r) {
            "string" == typeof r && "" !== r || (r = "utf8");
            if (!at.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
            var n = 0 | pt(e, r), i = (t = st(t, n)).write(e, r);
            i !== n && (t = t.slice(0, i));
            return t;
        }(t, e, r) : function(t, e) {
            if (lt(e)) {
                var r = 0 | dt(e.length);
                return 0 === (t = st(t, r)).length || e.copy(t, 0, 0, r), t;
            }
            if (e) {
                if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (n = e.length) != n ? st(t, 0) : ct(t, e);
                if ("Buffer" === e.type && nt(e.data)) return ct(t, e.data);
            }
            var n;
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }(t, e);
    }
    function ft(t) {
        if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
        if (t < 0) throw new RangeError('"size" argument must not be negative');
    }
    function ut(t, e) {
        if (ft(e), t = st(t, e < 0 ? 0 : 0 | dt(e)), !at.TYPED_ARRAY_SUPPORT) for(var r = 0; r < e; ++r)t[r] = 0;
        return t;
    }
    function ct(t, e) {
        var r = e.length < 0 ? 0 : 0 | dt(e.length);
        t = st(t, r);
        for(var n = 0; n < r; n += 1)t[n] = 255 & e[n];
        return t;
    }
    function dt(t) {
        if (t >= ot()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + ot().toString(16) + " bytes");
        return 0 | t;
    }
    function lt(t) {
        return !(null == t || !t._isBuffer);
    }
    function pt(t, e) {
        if (lt(t)) return t.length;
        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
        "string" != typeof t && (t = "" + t);
        var r = t.length;
        if (0 === r) return 0;
        for(var n = !1;;)switch(e){
            case "ascii":
            case "latin1":
            case "binary":
                return r;
            case "utf8":
            case "utf-8":
            case void 0:
                return Dt(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * r;
            case "hex":
                return r >>> 1;
            case "base64":
                return Ft(t).length;
            default:
                if (n) return Dt(t).length;
                e = ("" + e).toLowerCase(), n = !0;
        }
    }
    function bt(t, e, r) {
        var n = !1;
        if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
        if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
        if ((r >>>= 0) <= (e >>>= 0)) return "";
        for(t || (t = "utf8");;)switch(t){
            case "hex":
                return Bt(this, e, r);
            case "utf8":
            case "utf-8":
                return xt(this, e, r);
            case "ascii":
                return kt(this, e, r);
            case "latin1":
            case "binary":
                return Rt(this, e, r);
            case "base64":
                return Et(this, e, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Tt(this, e, r);
            default:
                if (n) throw new TypeError("Unknown encoding: " + t);
                t = (t + "").toLowerCase(), n = !0;
        }
    }
    function mt(t, e, r) {
        var n = t[e];
        t[e] = t[r], t[r] = n;
    }
    function yt(t, e, r, n, i) {
        if (0 === t.length) return -1;
        if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
            if (i) return -1;
            r = t.length - 1;
        } else if (r < 0) {
            if (!i) return -1;
            r = 0;
        }
        if ("string" == typeof e && (e = at.from(e, n)), lt(e)) return 0 === e.length ? -1 : gt(t, e, r, n, i);
        if ("number" == typeof e) return e &= 255, at.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : gt(t, [
            e
        ], r, n, i);
        throw new TypeError("val must be string, number or Buffer");
    }
    function gt(t, e, r, n, i) {
        var o, s = 1, a = t.length, h = e.length;
        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
            if (t.length < 2 || e.length < 2) return -1;
            s = 2, a /= 2, h /= 2, r /= 2;
        }
        function f(t, e) {
            return 1 === s ? t[e] : t.readUInt16BE(e * s);
        }
        if (i) {
            var u = -1;
            for(o = r; o < a; o++)if (f(t, o) === f(e, -1 === u ? 0 : o - u)) {
                if (-1 === u && (u = o), o - u + 1 === h) return u * s;
            } else -1 !== u && (o -= o - u), u = -1;
        } else for(r + h > a && (r = a - h), o = r; o >= 0; o--){
            for(var c = !0, d = 0; d < h; d++)if (f(t, o + d) !== f(e, d)) {
                c = !1;
                break;
            }
            if (c) return o;
        }
        return -1;
    }
    function vt(t, e, r, n) {
        r = Number(r) || 0;
        var i = t.length - r;
        n ? (n = Number(n)) > i && (n = i) : n = i;
        var o = e.length;
        if (o % 2 != 0) throw new TypeError("Invalid hex string");
        n > o / 2 && (n = o / 2);
        for(var s = 0; s < n; ++s){
            var a = parseInt(e.substr(2 * s, 2), 16);
            if (isNaN(a)) return s;
            t[r + s] = a;
        }
        return s;
    }
    function wt(t, e, r, n) {
        return Kt(Dt(e, t.length - r), t, r, n);
    }
    function Mt(t, e, r, n) {
        return Kt(function(t) {
            for(var e = [], r = 0; r < t.length; ++r)e.push(255 & t.charCodeAt(r));
            return e;
        }(e), t, r, n);
    }
    function _t(t, e, r, n) {
        return Mt(t, e, r, n);
    }
    function At(t, e, r, n) {
        return Kt(Ft(e), t, r, n);
    }
    function St(t, e, r, n) {
        return Kt(function(t, e) {
            for(var r, n, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s)n = (r = t.charCodeAt(s)) >> 8, i = r % 256, o.push(i), o.push(n);
            return o;
        }(e, t.length - r), t, r, n);
    }
    function Et(t, e, r) {
        return 0 === e && r === t.length ? Q(t) : Q(t.slice(e, r));
    }
    function xt(t, e, r) {
        r = Math.min(t.length, r);
        for(var n = [], i = e; i < r;){
            var o, s, a, h, f = t[i], u = null, c = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
            if (i + c <= r) switch(c){
                case 1:
                    f < 128 && (u = f);
                    break;
                case 2:
                    128 == (192 & (o = t[i + 1])) && (h = (31 & f) << 6 | 63 & o) > 127 && (u = h);
                    break;
                case 3:
                    o = t[i + 1], s = t[i + 2], 128 == (192 & o) && 128 == (192 & s) && (h = (15 & f) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (h < 55296 || h > 57343) && (u = h);
                    break;
                case 4:
                    o = t[i + 1], s = t[i + 2], a = t[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (h = (15 & f) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && h < 1114112 && (u = h);
            }
            null === u ? (u = 65533, c = 1) : u > 65535 && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), n.push(u), i += c;
        }
        return function(t) {
            var e = t.length;
            if (e <= It) return String.fromCharCode.apply(String, t);
            var r = "", n = 0;
            for(; n < e;)r += String.fromCharCode.apply(String, t.slice(n, n += It));
            return r;
        }(n);
    }
    at.poolSize = 8192, at._augment = function(t) {
        return t.__proto__ = at.prototype, t;
    }, at.from = function(t, e, r) {
        return ht(null, t, e, r);
    }, at.TYPED_ARRAY_SUPPORT && (at.prototype.__proto__ = Uint8Array.prototype, at.__proto__ = Uint8Array), at.alloc = function(t, e, r) {
        return function(t, e, r, n) {
            return ft(e), e <= 0 ? st(t, e) : void 0 !== r ? "string" == typeof n ? st(t, e).fill(r, n) : st(t, e).fill(r) : st(t, e);
        }(null, t, e, r);
    }, at.allocUnsafe = function(t) {
        return ut(null, t);
    }, at.allocUnsafeSlow = function(t) {
        return ut(null, t);
    }, at.isBuffer = Yt, at.compare = function(t, e) {
        if (!lt(t) || !lt(e)) throw new TypeError("Arguments must be Buffers");
        if (t === e) return 0;
        for(var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i)if (t[i] !== e[i]) {
            r = t[i], n = e[i];
            break;
        }
        return r < n ? -1 : n < r ? 1 : 0;
    }, at.isEncoding = function(t) {
        switch(String(t).toLowerCase()){
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1;
        }
    }, at.concat = function(t, e) {
        if (!nt(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === t.length) return at.alloc(0);
        var r;
        if (void 0 === e) for(e = 0, r = 0; r < t.length; ++r)e += t[r].length;
        var n = at.allocUnsafe(e), i = 0;
        for(r = 0; r < t.length; ++r){
            var o = t[r];
            if (!lt(o)) throw new TypeError('"list" argument must be an Array of Buffers');
            o.copy(n, i), i += o.length;
        }
        return n;
    }, at.byteLength = pt, at.prototype._isBuffer = !0, at.prototype.swap16 = function() {
        var t = this.length;
        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for(var e = 0; e < t; e += 2)mt(this, e, e + 1);
        return this;
    }, at.prototype.swap32 = function() {
        var t = this.length;
        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for(var e = 0; e < t; e += 4)mt(this, e, e + 3), mt(this, e + 1, e + 2);
        return this;
    }, at.prototype.swap64 = function() {
        var t = this.length;
        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for(var e = 0; e < t; e += 8)mt(this, e, e + 7), mt(this, e + 1, e + 6), mt(this, e + 2, e + 5), mt(this, e + 3, e + 4);
        return this;
    }, at.prototype.toString = function() {
        var t = 0 | this.length;
        return 0 === t ? "" : 0 === arguments.length ? xt(this, 0, t) : bt.apply(this, arguments);
    }, at.prototype.equals = function(t) {
        if (!lt(t)) throw new TypeError("Argument must be a Buffer");
        return this === t || 0 === at.compare(this, t);
    }, at.prototype.inspect = function() {
        var t = "";
        return this.length > 0 && (t = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (t += " ... ")), "<Buffer " + t + ">";
    }, at.prototype.compare = function(t, e, r, n, i) {
        if (!lt(t)) throw new TypeError("Argument must be a Buffer");
        if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
        if (n >= i && e >= r) return 0;
        if (n >= i) return -1;
        if (e >= r) return 1;
        if (this === t) return 0;
        for(var o = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (e >>>= 0), a = Math.min(o, s), h = this.slice(n, i), f = t.slice(e, r), u = 0; u < a; ++u)if (h[u] !== f[u]) {
            o = h[u], s = f[u];
            break;
        }
        return o < s ? -1 : s < o ? 1 : 0;
    }, at.prototype.includes = function(t, e, r) {
        return -1 !== this.indexOf(t, e, r);
    }, at.prototype.indexOf = function(t, e, r) {
        return yt(this, t, e, r, !0);
    }, at.prototype.lastIndexOf = function(t, e, r) {
        return yt(this, t, e, r, !1);
    }, at.prototype.write = function(t, e, r, n) {
        if (void 0 === e) n = "utf8", r = this.length, e = 0;
        else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;
        else {
            if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
        }
        var i = this.length - e;
        if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        for(var o = !1;;)switch(n){
            case "hex":
                return vt(this, t, e, r);
            case "utf8":
            case "utf-8":
                return wt(this, t, e, r);
            case "ascii":
                return Mt(this, t, e, r);
            case "latin1":
            case "binary":
                return _t(this, t, e, r);
            case "base64":
                return At(this, t, e, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return St(this, t, e, r);
            default:
                if (o) throw new TypeError("Unknown encoding: " + n);
                n = ("" + n).toLowerCase(), o = !0;
        }
    }, at.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        };
    };
    var It = 4096;
    function kt(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for(var i = e; i < r; ++i)n += String.fromCharCode(127 & t[i]);
        return n;
    }
    function Rt(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for(var i = e; i < r; ++i)n += String.fromCharCode(t[i]);
        return n;
    }
    function Bt(t, e, r) {
        var n = t.length;
        (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
        for(var i = "", o = e; o < r; ++o)i += jt(t[o]);
        return i;
    }
    function Tt(t, e, r) {
        for(var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2)i += String.fromCharCode(n[o] + 256 * n[o + 1]);
        return i;
    }
    function Ut(t, e, r) {
        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
    }
    function Ot(t, e, r, n, i, o) {
        if (!lt(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw new RangeError("Index out of range");
    }
    function Pt(t, e, r, n) {
        e < 0 && (e = 65535 + e + 1);
        for(var i = 0, o = Math.min(t.length - r, 2); i < o; ++i)t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i);
    }
    function Lt(t, e, r, n) {
        e < 0 && (e = 4294967295 + e + 1);
        for(var i = 0, o = Math.min(t.length - r, 4); i < o; ++i)t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255;
    }
    function Nt(t, e, r, n, i, o) {
        if (r + n > t.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
    }
    function zt(t, e, r, n, i) {
        return i || Nt(t, 0, r, 4), et(t, e, r, n, 23, 4), r + 4;
    }
    function Ct(t, e, r, n, i) {
        return i || Nt(t, 0, r, 8), et(t, e, r, n, 52, 8), r + 8;
    }
    at.prototype.slice = function(t, e) {
        var r, n = this.length;
        if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), at.TYPED_ARRAY_SUPPORT) (r = this.subarray(t, e)).__proto__ = at.prototype;
        else {
            var i = e - t;
            r = new at(i, void 0);
            for(var o = 0; o < i; ++o)r[o] = this[o + t];
        }
        return r;
    }, at.prototype.readUIntLE = function(t, e, r) {
        t |= 0, e |= 0, r || Ut(t, e, this.length);
        for(var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);)n += this[t + o] * i;
        return n;
    }, at.prototype.readUIntBE = function(t, e, r) {
        t |= 0, e |= 0, r || Ut(t, e, this.length);
        for(var n = this[t + --e], i = 1; e > 0 && (i *= 256);)n += this[t + --e] * i;
        return n;
    }, at.prototype.readUInt8 = function(t, e) {
        return e || Ut(t, 1, this.length), this[t];
    }, at.prototype.readUInt16LE = function(t, e) {
        return e || Ut(t, 2, this.length), this[t] | this[t + 1] << 8;
    }, at.prototype.readUInt16BE = function(t, e) {
        return e || Ut(t, 2, this.length), this[t] << 8 | this[t + 1];
    }, at.prototype.readUInt32LE = function(t, e) {
        return e || Ut(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
    }, at.prototype.readUInt32BE = function(t, e) {
        return e || Ut(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    }, at.prototype.readIntLE = function(t, e, r) {
        t |= 0, e |= 0, r || Ut(t, e, this.length);
        for(var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);)n += this[t + o] * i;
        return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
    }, at.prototype.readIntBE = function(t, e, r) {
        t |= 0, e |= 0, r || Ut(t, e, this.length);
        for(var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256);)o += this[t + --n] * i;
        return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
    }, at.prototype.readInt8 = function(t, e) {
        return e || Ut(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
    }, at.prototype.readInt16LE = function(t, e) {
        e || Ut(t, 2, this.length);
        var r = this[t] | this[t + 1] << 8;
        return 32768 & r ? 4294901760 | r : r;
    }, at.prototype.readInt16BE = function(t, e) {
        e || Ut(t, 2, this.length);
        var r = this[t + 1] | this[t] << 8;
        return 32768 & r ? 4294901760 | r : r;
    }, at.prototype.readInt32LE = function(t, e) {
        return e || Ut(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    }, at.prototype.readInt32BE = function(t, e) {
        return e || Ut(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    }, at.prototype.readFloatLE = function(t, e) {
        return e || Ut(t, 4, this.length), tt(this, t, !0, 23, 4);
    }, at.prototype.readFloatBE = function(t, e) {
        return e || Ut(t, 4, this.length), tt(this, t, !1, 23, 4);
    }, at.prototype.readDoubleLE = function(t, e) {
        return e || Ut(t, 8, this.length), tt(this, t, !0, 52, 8);
    }, at.prototype.readDoubleBE = function(t, e) {
        return e || Ut(t, 8, this.length), tt(this, t, !1, 52, 8);
    }, at.prototype.writeUIntLE = function(t, e, r, n) {
        (t = +t, e |= 0, r |= 0, n) || Ot(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
        var i = 1, o = 0;
        for(this[e] = 255 & t; ++o < r && (i *= 256);)this[e + o] = t / i & 255;
        return e + r;
    }, at.prototype.writeUIntBE = function(t, e, r, n) {
        (t = +t, e |= 0, r |= 0, n) || Ot(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
        var i = r - 1, o = 1;
        for(this[e + i] = 255 & t; --i >= 0 && (o *= 256);)this[e + i] = t / o & 255;
        return e + r;
    }, at.prototype.writeUInt8 = function(t, e, r) {
        return t = +t, e |= 0, r || Ot(this, t, e, 1, 255, 0), at.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
    }, at.prototype.writeUInt16LE = function(t, e, r) {
        return t = +t, e |= 0, r || Ot(this, t, e, 2, 65535, 0), at.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : Pt(this, t, e, !0), e + 2;
    }, at.prototype.writeUInt16BE = function(t, e, r) {
        return t = +t, e |= 0, r || Ot(this, t, e, 2, 65535, 0), at.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : Pt(this, t, e, !1), e + 2;
    }, at.prototype.writeUInt32LE = function(t, e, r) {
        return t = +t, e |= 0, r || Ot(this, t, e, 4, 4294967295, 0), at.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : Lt(this, t, e, !0), e + 4;
    }, at.prototype.writeUInt32BE = function(t, e, r) {
        return t = +t, e |= 0, r || Ot(this, t, e, 4, 4294967295, 0), at.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : Lt(this, t, e, !1), e + 4;
    }, at.prototype.writeIntLE = function(t, e, r, n) {
        if (t = +t, e |= 0, !n) {
            var i = Math.pow(2, 8 * r - 1);
            Ot(this, t, e, r, i - 1, -i);
        }
        var o = 0, s = 1, a = 0;
        for(this[e] = 255 & t; ++o < r && (s *= 256);)t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
        return e + r;
    }, at.prototype.writeIntBE = function(t, e, r, n) {
        if (t = +t, e |= 0, !n) {
            var i = Math.pow(2, 8 * r - 1);
            Ot(this, t, e, r, i - 1, -i);
        }
        var o = r - 1, s = 1, a = 0;
        for(this[e + o] = 255 & t; --o >= 0 && (s *= 256);)t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
        return e + r;
    }, at.prototype.writeInt8 = function(t, e, r) {
        return t = +t, e |= 0, r || Ot(this, t, e, 1, 127, -128), at.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
    }, at.prototype.writeInt16LE = function(t, e, r) {
        return t = +t, e |= 0, r || Ot(this, t, e, 2, 32767, -32768), at.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : Pt(this, t, e, !0), e + 2;
    }, at.prototype.writeInt16BE = function(t, e, r) {
        return t = +t, e |= 0, r || Ot(this, t, e, 2, 32767, -32768), at.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : Pt(this, t, e, !1), e + 2;
    }, at.prototype.writeInt32LE = function(t, e, r) {
        return t = +t, e |= 0, r || Ot(this, t, e, 4, 2147483647, -2147483648), at.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : Lt(this, t, e, !0), e + 4;
    }, at.prototype.writeInt32BE = function(t, e, r) {
        return t = +t, e |= 0, r || Ot(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), at.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : Lt(this, t, e, !1), e + 4;
    }, at.prototype.writeFloatLE = function(t, e, r) {
        return zt(this, t, e, !0, r);
    }, at.prototype.writeFloatBE = function(t, e, r) {
        return zt(this, t, e, !1, r);
    }, at.prototype.writeDoubleLE = function(t, e, r) {
        return Ct(this, t, e, !0, r);
    }, at.prototype.writeDoubleBE = function(t, e, r) {
        return Ct(this, t, e, !1, r);
    }, at.prototype.copy = function(t, e, r, n) {
        if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
        if (0 === t.length || 0 === this.length) return 0;
        if (e < 0) throw new RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
        if (n < 0) throw new RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
        var i, o = n - r;
        if (this === t && r < e && e < n) for(i = o - 1; i >= 0; --i)t[i + e] = this[i + r];
        else if (o < 1e3 || !at.TYPED_ARRAY_SUPPORT) for(i = 0; i < o; ++i)t[i + e] = this[i + r];
        else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
        return o;
    }, at.prototype.fill = function(t, e, r, n) {
        if ("string" == typeof t) {
            if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === t.length) {
                var i = t.charCodeAt(0);
                i < 256 && (t = i);
            }
            if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !at.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
        } else "number" == typeof t && (t &= 255);
        if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
        if (r <= e) return this;
        var o;
        if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for(o = e; o < r; ++o)this[o] = t;
        else {
            var s = lt(t) ? t : Dt(new at(t, n).toString()), a = s.length;
            for(o = 0; o < r - e; ++o)this[o + e] = s[o % a];
        }
        return this;
    };
    var qt = /[^+\/0-9A-Za-z-_]/g;
    function jt(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
    }
    function Dt(t, e) {
        var r;
        e = e || 1 / 0;
        for(var n = t.length, i = null, o = [], s = 0; s < n; ++s){
            if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                if (!i) {
                    if (r > 56319) {
                        (e -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                    }
                    if (s + 1 === n) {
                        (e -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                    }
                    i = r;
                    continue;
                }
                if (r < 56320) {
                    (e -= 3) > -1 && o.push(239, 191, 189), i = r;
                    continue;
                }
                r = 65536 + (i - 55296 << 10 | r - 56320);
            } else i && (e -= 3) > -1 && o.push(239, 191, 189);
            if (i = null, r < 128) {
                if ((e -= 1) < 0) break;
                o.push(r);
            } else if (r < 2048) {
                if ((e -= 2) < 0) break;
                o.push(r >> 6 | 192, 63 & r | 128);
            } else if (r < 65536) {
                if ((e -= 3) < 0) break;
                o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
            } else {
                if (!(r < 1114112)) throw new Error("Invalid code point");
                if ((e -= 4) < 0) break;
                o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
            }
        }
        return o;
    }
    function Ft(t) {
        return function(t) {
            var e, r, n, i, o, s;
            Z || J();
            var a = t.length;
            if (a % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            o = "=" === t[a - 2] ? 2 : "=" === t[a - 1] ? 1 : 0, s = new G(3 * a / 4 - o), n = o > 0 ? a - 4 : a;
            var h = 0;
            for(e = 0, r = 0; e < n; e += 4, r += 3)i = $[t.charCodeAt(e)] << 18 | $[t.charCodeAt(e + 1)] << 12 | $[t.charCodeAt(e + 2)] << 6 | $[t.charCodeAt(e + 3)], s[h++] = i >> 16 & 255, s[h++] = i >> 8 & 255, s[h++] = 255 & i;
            return 2 === o ? (i = $[t.charCodeAt(e)] << 2 | $[t.charCodeAt(e + 1)] >> 4, s[h++] = 255 & i) : 1 === o && (i = $[t.charCodeAt(e)] << 10 | $[t.charCodeAt(e + 1)] << 4 | $[t.charCodeAt(e + 2)] >> 2, s[h++] = i >> 8 & 255, s[h++] = 255 & i), s;
        }(function(t) {
            if ((t = (function(t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
            })(t).replace(qt, "")).length < 2) return "";
            for(; t.length % 4 != 0;)t += "=";
            return t;
        }(t));
    }
    function Kt(t, e, r, n) {
        for(var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)e[i + r] = t[i];
        return i;
    }
    function Yt(t) {
        return null != t && (!!t._isBuffer || Vt(t) || function(t) {
            return "function" == typeof t.readFloatLE && "function" == typeof t.slice && Vt(t.slice(0, 0));
        }(t));
    }
    function Vt(t) {
        return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
    }
    var Wt = Object.freeze({
        __proto__: null,
        Buffer: at,
        INSPECT_MAX_BYTES: 50,
        SlowBuffer: function(t) {
            return +t != t && (t = 0), at.alloc(+t);
        },
        isBuffer: Yt,
        kMaxLength: it
    }), Ht = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function $t(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
    }
    function Gt(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports;
    }
    function Zt(t) {
        return t && t.default || t;
    }
    var Jt = Zt(Object.freeze({
        __proto__: null,
        default: {}
    })), Xt = Gt(function(t) {
        !function(t) {
            var e = function(t) {
                var e, r = new Float64Array(16);
                if (t) for(e = 0; e < t.length; e++)r[e] = t[e];
                return r;
            }, r = function() {
                throw new Error("no PRNG");
            }, n = new Uint8Array(16), i = new Uint8Array(32);
            i[0] = 9;
            var o = e(), s = e([
                1
            ]), a = e([
                56129,
                1
            ]), h = e([
                30883,
                4953,
                19914,
                30187,
                55467,
                16705,
                2637,
                112,
                59544,
                30585,
                16505,
                36039,
                65139,
                11119,
                27886,
                20995
            ]), f = e([
                61785,
                9906,
                39828,
                60374,
                45398,
                33411,
                5274,
                224,
                53552,
                61171,
                33010,
                6542,
                64743,
                22239,
                55772,
                9222
            ]), u = e([
                54554,
                36645,
                11616,
                51542,
                42930,
                38181,
                51040,
                26924,
                56412,
                64982,
                57905,
                49316,
                21502,
                52590,
                14035,
                8553
            ]), c = e([
                26200,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214,
                26214
            ]), d = e([
                41136,
                18958,
                6951,
                50414,
                58488,
                44335,
                6150,
                12099,
                55207,
                15867,
                153,
                11085,
                57099,
                20417,
                9344,
                11139
            ]);
            function l(t, e, r, n) {
                t[e] = r >> 24 & 255, t[e + 1] = r >> 16 & 255, t[e + 2] = r >> 8 & 255, t[e + 3] = 255 & r, t[e + 4] = n >> 24 & 255, t[e + 5] = n >> 16 & 255, t[e + 6] = n >> 8 & 255, t[e + 7] = 255 & n;
            }
            function p(t, e, r, n, i) {
                var o, s = 0;
                for(o = 0; o < i; o++)s |= t[e + o] ^ r[n + o];
                return (1 & s - 1 >>> 8) - 1;
            }
            function b(t, e, r, n) {
                return p(t, e, r, n, 16);
            }
            function m(t, e, r, n) {
                return p(t, e, r, n, 32);
            }
            function y(t, e, r, n) {
                !function(t, e, r, n) {
                    for(var i, o = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, s = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, a = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, h = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, f = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, u = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, c = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, d = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, l = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, p = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, b = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, m = 255 & r[16] | (255 & r[17]) << 8 | (255 & r[18]) << 16 | (255 & r[19]) << 24, y = 255 & r[20] | (255 & r[21]) << 8 | (255 & r[22]) << 16 | (255 & r[23]) << 24, g = 255 & r[24] | (255 & r[25]) << 8 | (255 & r[26]) << 16 | (255 & r[27]) << 24, v = 255 & r[28] | (255 & r[29]) << 8 | (255 & r[30]) << 16 | (255 & r[31]) << 24, w = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, M = o, _ = s, A = a, S = h, E = f, x = u, I = c, k = d, R = l, B = p, T = b, U = m, O = y, P = g, L = v, N = w, z = 0; z < 20; z += 2)M ^= (i = (O ^= (i = (R ^= (i = (E ^= (i = M + O | 0) << 7 | i >>> 25) + M | 0) << 9 | i >>> 23) + E | 0) << 13 | i >>> 19) + R | 0) << 18 | i >>> 14, x ^= (i = (_ ^= (i = (P ^= (i = (B ^= (i = x + _ | 0) << 7 | i >>> 25) + x | 0) << 9 | i >>> 23) + B | 0) << 13 | i >>> 19) + P | 0) << 18 | i >>> 14, T ^= (i = (I ^= (i = (A ^= (i = (L ^= (i = T + I | 0) << 7 | i >>> 25) + T | 0) << 9 | i >>> 23) + L | 0) << 13 | i >>> 19) + A | 0) << 18 | i >>> 14, N ^= (i = (U ^= (i = (k ^= (i = (S ^= (i = N + U | 0) << 7 | i >>> 25) + N | 0) << 9 | i >>> 23) + S | 0) << 13 | i >>> 19) + k | 0) << 18 | i >>> 14, M ^= (i = (S ^= (i = (A ^= (i = (_ ^= (i = M + S | 0) << 7 | i >>> 25) + M | 0) << 9 | i >>> 23) + _ | 0) << 13 | i >>> 19) + A | 0) << 18 | i >>> 14, x ^= (i = (E ^= (i = (k ^= (i = (I ^= (i = x + E | 0) << 7 | i >>> 25) + x | 0) << 9 | i >>> 23) + I | 0) << 13 | i >>> 19) + k | 0) << 18 | i >>> 14, T ^= (i = (B ^= (i = (R ^= (i = (U ^= (i = T + B | 0) << 7 | i >>> 25) + T | 0) << 9 | i >>> 23) + U | 0) << 13 | i >>> 19) + R | 0) << 18 | i >>> 14, N ^= (i = (L ^= (i = (P ^= (i = (O ^= (i = N + L | 0) << 7 | i >>> 25) + N | 0) << 9 | i >>> 23) + O | 0) << 13 | i >>> 19) + P | 0) << 18 | i >>> 14;
                    M = M + o | 0, _ = _ + s | 0, A = A + a | 0, S = S + h | 0, E = E + f | 0, x = x + u | 0, I = I + c | 0, k = k + d | 0, R = R + l | 0, B = B + p | 0, T = T + b | 0, U = U + m | 0, O = O + y | 0, P = P + g | 0, L = L + v | 0, N = N + w | 0, t[0] = M >>> 0 & 255, t[1] = M >>> 8 & 255, t[2] = M >>> 16 & 255, t[3] = M >>> 24 & 255, t[4] = _ >>> 0 & 255, t[5] = _ >>> 8 & 255, t[6] = _ >>> 16 & 255, t[7] = _ >>> 24 & 255, t[8] = A >>> 0 & 255, t[9] = A >>> 8 & 255, t[10] = A >>> 16 & 255, t[11] = A >>> 24 & 255, t[12] = S >>> 0 & 255, t[13] = S >>> 8 & 255, t[14] = S >>> 16 & 255, t[15] = S >>> 24 & 255, t[16] = E >>> 0 & 255, t[17] = E >>> 8 & 255, t[18] = E >>> 16 & 255, t[19] = E >>> 24 & 255, t[20] = x >>> 0 & 255, t[21] = x >>> 8 & 255, t[22] = x >>> 16 & 255, t[23] = x >>> 24 & 255, t[24] = I >>> 0 & 255, t[25] = I >>> 8 & 255, t[26] = I >>> 16 & 255, t[27] = I >>> 24 & 255, t[28] = k >>> 0 & 255, t[29] = k >>> 8 & 255, t[30] = k >>> 16 & 255, t[31] = k >>> 24 & 255, t[32] = R >>> 0 & 255, t[33] = R >>> 8 & 255, t[34] = R >>> 16 & 255, t[35] = R >>> 24 & 255, t[36] = B >>> 0 & 255, t[37] = B >>> 8 & 255, t[38] = B >>> 16 & 255, t[39] = B >>> 24 & 255, t[40] = T >>> 0 & 255, t[41] = T >>> 8 & 255, t[42] = T >>> 16 & 255, t[43] = T >>> 24 & 255, t[44] = U >>> 0 & 255, t[45] = U >>> 8 & 255, t[46] = U >>> 16 & 255, t[47] = U >>> 24 & 255, t[48] = O >>> 0 & 255, t[49] = O >>> 8 & 255, t[50] = O >>> 16 & 255, t[51] = O >>> 24 & 255, t[52] = P >>> 0 & 255, t[53] = P >>> 8 & 255, t[54] = P >>> 16 & 255, t[55] = P >>> 24 & 255, t[56] = L >>> 0 & 255, t[57] = L >>> 8 & 255, t[58] = L >>> 16 & 255, t[59] = L >>> 24 & 255, t[60] = N >>> 0 & 255, t[61] = N >>> 8 & 255, t[62] = N >>> 16 & 255, t[63] = N >>> 24 & 255;
                }(t, e, r, n);
            }
            function g(t, e, r, n) {
                !function(t, e, r, n) {
                    for(var i, o = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, s = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, a = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, h = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, f = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, u = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, c = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, d = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, l = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, p = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, b = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, m = 255 & r[16] | (255 & r[17]) << 8 | (255 & r[18]) << 16 | (255 & r[19]) << 24, y = 255 & r[20] | (255 & r[21]) << 8 | (255 & r[22]) << 16 | (255 & r[23]) << 24, g = 255 & r[24] | (255 & r[25]) << 8 | (255 & r[26]) << 16 | (255 & r[27]) << 24, v = 255 & r[28] | (255 & r[29]) << 8 | (255 & r[30]) << 16 | (255 & r[31]) << 24, w = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, M = 0; M < 20; M += 2)o ^= (i = (y ^= (i = (l ^= (i = (f ^= (i = o + y | 0) << 7 | i >>> 25) + o | 0) << 9 | i >>> 23) + f | 0) << 13 | i >>> 19) + l | 0) << 18 | i >>> 14, u ^= (i = (s ^= (i = (g ^= (i = (p ^= (i = u + s | 0) << 7 | i >>> 25) + u | 0) << 9 | i >>> 23) + p | 0) << 13 | i >>> 19) + g | 0) << 18 | i >>> 14, b ^= (i = (c ^= (i = (a ^= (i = (v ^= (i = b + c | 0) << 7 | i >>> 25) + b | 0) << 9 | i >>> 23) + v | 0) << 13 | i >>> 19) + a | 0) << 18 | i >>> 14, w ^= (i = (m ^= (i = (d ^= (i = (h ^= (i = w + m | 0) << 7 | i >>> 25) + w | 0) << 9 | i >>> 23) + h | 0) << 13 | i >>> 19) + d | 0) << 18 | i >>> 14, o ^= (i = (h ^= (i = (a ^= (i = (s ^= (i = o + h | 0) << 7 | i >>> 25) + o | 0) << 9 | i >>> 23) + s | 0) << 13 | i >>> 19) + a | 0) << 18 | i >>> 14, u ^= (i = (f ^= (i = (d ^= (i = (c ^= (i = u + f | 0) << 7 | i >>> 25) + u | 0) << 9 | i >>> 23) + c | 0) << 13 | i >>> 19) + d | 0) << 18 | i >>> 14, b ^= (i = (p ^= (i = (l ^= (i = (m ^= (i = b + p | 0) << 7 | i >>> 25) + b | 0) << 9 | i >>> 23) + m | 0) << 13 | i >>> 19) + l | 0) << 18 | i >>> 14, w ^= (i = (v ^= (i = (g ^= (i = (y ^= (i = w + v | 0) << 7 | i >>> 25) + w | 0) << 9 | i >>> 23) + y | 0) << 13 | i >>> 19) + g | 0) << 18 | i >>> 14;
                    t[0] = o >>> 0 & 255, t[1] = o >>> 8 & 255, t[2] = o >>> 16 & 255, t[3] = o >>> 24 & 255, t[4] = u >>> 0 & 255, t[5] = u >>> 8 & 255, t[6] = u >>> 16 & 255, t[7] = u >>> 24 & 255, t[8] = b >>> 0 & 255, t[9] = b >>> 8 & 255, t[10] = b >>> 16 & 255, t[11] = b >>> 24 & 255, t[12] = w >>> 0 & 255, t[13] = w >>> 8 & 255, t[14] = w >>> 16 & 255, t[15] = w >>> 24 & 255, t[16] = c >>> 0 & 255, t[17] = c >>> 8 & 255, t[18] = c >>> 16 & 255, t[19] = c >>> 24 & 255, t[20] = d >>> 0 & 255, t[21] = d >>> 8 & 255, t[22] = d >>> 16 & 255, t[23] = d >>> 24 & 255, t[24] = l >>> 0 & 255, t[25] = l >>> 8 & 255, t[26] = l >>> 16 & 255, t[27] = l >>> 24 & 255, t[28] = p >>> 0 & 255, t[29] = p >>> 8 & 255, t[30] = p >>> 16 & 255, t[31] = p >>> 24 & 255;
                }(t, e, r, n);
            }
            var v = new Uint8Array([
                101,
                120,
                112,
                97,
                110,
                100,
                32,
                51,
                50,
                45,
                98,
                121,
                116,
                101,
                32,
                107
            ]);
            function w(t, e, r, n, i, o, s) {
                var a, h, f = new Uint8Array(16), u = new Uint8Array(64);
                for(h = 0; h < 16; h++)f[h] = 0;
                for(h = 0; h < 8; h++)f[h] = o[h];
                for(; i >= 64;){
                    for(y(u, f, s, v), h = 0; h < 64; h++)t[e + h] = r[n + h] ^ u[h];
                    for(a = 1, h = 8; h < 16; h++)a = a + (255 & f[h]) | 0, f[h] = 255 & a, a >>>= 8;
                    i -= 64, e += 64, n += 64;
                }
                if (i > 0) for(y(u, f, s, v), h = 0; h < i; h++)t[e + h] = r[n + h] ^ u[h];
                return 0;
            }
            function M(t, e, r, n, i) {
                var o, s, a = new Uint8Array(16), h = new Uint8Array(64);
                for(s = 0; s < 16; s++)a[s] = 0;
                for(s = 0; s < 8; s++)a[s] = n[s];
                for(; r >= 64;){
                    for(y(h, a, i, v), s = 0; s < 64; s++)t[e + s] = h[s];
                    for(o = 1, s = 8; s < 16; s++)o = o + (255 & a[s]) | 0, a[s] = 255 & o, o >>>= 8;
                    r -= 64, e += 64;
                }
                if (r > 0) for(y(h, a, i, v), s = 0; s < r; s++)t[e + s] = h[s];
                return 0;
            }
            function _(t, e, r, n, i) {
                var o = new Uint8Array(32);
                g(o, n, i, v);
                for(var s = new Uint8Array(8), a = 0; a < 8; a++)s[a] = n[a + 16];
                return M(t, e, r, s, o);
            }
            function A(t, e, r, n, i, o, s) {
                var a = new Uint8Array(32);
                g(a, o, s, v);
                for(var h = new Uint8Array(8), f = 0; f < 8; f++)h[f] = o[f + 16];
                return w(t, e, r, n, i, h, a);
            }
            var S = function(t) {
                var e, r, n, i, o, s, a, h;
                this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0, e = 255 & t[0] | (255 & t[1]) << 8, this.r[0] = 8191 & e, r = 255 & t[2] | (255 & t[3]) << 8, this.r[1] = 8191 & (e >>> 13 | r << 3), n = 255 & t[4] | (255 & t[5]) << 8, this.r[2] = 7939 & (r >>> 10 | n << 6), i = 255 & t[6] | (255 & t[7]) << 8, this.r[3] = 8191 & (n >>> 7 | i << 9), o = 255 & t[8] | (255 & t[9]) << 8, this.r[4] = 255 & (i >>> 4 | o << 12), this.r[5] = o >>> 1 & 8190, s = 255 & t[10] | (255 & t[11]) << 8, this.r[6] = 8191 & (o >>> 14 | s << 2), a = 255 & t[12] | (255 & t[13]) << 8, this.r[7] = 8065 & (s >>> 11 | a << 5), h = 255 & t[14] | (255 & t[15]) << 8, this.r[8] = 8191 & (a >>> 8 | h << 8), this.r[9] = h >>> 5 & 127, this.pad[0] = 255 & t[16] | (255 & t[17]) << 8, this.pad[1] = 255 & t[18] | (255 & t[19]) << 8, this.pad[2] = 255 & t[20] | (255 & t[21]) << 8, this.pad[3] = 255 & t[22] | (255 & t[23]) << 8, this.pad[4] = 255 & t[24] | (255 & t[25]) << 8, this.pad[5] = 255 & t[26] | (255 & t[27]) << 8, this.pad[6] = 255 & t[28] | (255 & t[29]) << 8, this.pad[7] = 255 & t[30] | (255 & t[31]) << 8;
            };
            function E(t, e, r, n, i, o) {
                var s = new S(o);
                return s.update(r, n, i), s.finish(t, e), 0;
            }
            function x(t, e, r, n, i, o) {
                var s = new Uint8Array(16);
                return E(s, 0, r, n, i, o), b(t, e, s, 0);
            }
            function I(t, e, r, n, i) {
                var o;
                if (r < 32) return -1;
                for(A(t, 0, e, 0, r, n, i), E(t, 16, t, 32, r - 32, t), o = 0; o < 16; o++)t[o] = 0;
                return 0;
            }
            function k(t, e, r, n, i) {
                var o, s = new Uint8Array(32);
                if (r < 32) return -1;
                if (_(s, 0, 32, n, i), 0 !== x(e, 16, e, 32, r - 32, s)) return -1;
                for(A(t, 0, e, 0, r, n, i), o = 0; o < 32; o++)t[o] = 0;
                return 0;
            }
            function R(t, e) {
                var r;
                for(r = 0; r < 16; r++)t[r] = 0 | e[r];
            }
            function B(t) {
                var e, r, n = 1;
                for(e = 0; e < 16; e++)r = t[e] + n + 65535, n = Math.floor(r / 65536), t[e] = r - 65536 * n;
                t[0] += n - 1 + 37 * (n - 1);
            }
            function T(t, e, r) {
                for(var n, i = ~(r - 1), o = 0; o < 16; o++)n = i & (t[o] ^ e[o]), t[o] ^= n, e[o] ^= n;
            }
            function U(t, r) {
                var n, i, o, s = e(), a = e();
                for(n = 0; n < 16; n++)a[n] = r[n];
                for(B(a), B(a), B(a), i = 0; i < 2; i++){
                    for(s[0] = a[0] - 65517, n = 1; n < 15; n++)s[n] = a[n] - 65535 - (s[n - 1] >> 16 & 1), s[n - 1] &= 65535;
                    s[15] = a[15] - 32767 - (s[14] >> 16 & 1), o = s[15] >> 16 & 1, s[14] &= 65535, T(a, s, 1 - o);
                }
                for(n = 0; n < 16; n++)t[2 * n] = 255 & a[n], t[2 * n + 1] = a[n] >> 8;
            }
            function O(t, e) {
                var r = new Uint8Array(32), n = new Uint8Array(32);
                return U(r, t), U(n, e), m(r, 0, n, 0);
            }
            function P(t) {
                var e = new Uint8Array(32);
                return U(e, t), 1 & e[0];
            }
            function L(t, e) {
                var r;
                for(r = 0; r < 16; r++)t[r] = e[2 * r] + (e[2 * r + 1] << 8);
                t[15] &= 32767;
            }
            function N(t, e, r) {
                for(var n = 0; n < 16; n++)t[n] = e[n] + r[n];
            }
            function z(t, e, r) {
                for(var n = 0; n < 16; n++)t[n] = e[n] - r[n];
            }
            function C(t, e, r) {
                var n, i, o = 0, s = 0, a = 0, h = 0, f = 0, u = 0, c = 0, d = 0, l = 0, p = 0, b = 0, m = 0, y = 0, g = 0, v = 0, w = 0, M = 0, _ = 0, A = 0, S = 0, E = 0, x = 0, I = 0, k = 0, R = 0, B = 0, T = 0, U = 0, O = 0, P = 0, L = 0, N = r[0], z = r[1], C = r[2], q = r[3], j = r[4], D = r[5], F = r[6], K = r[7], Y = r[8], V = r[9], W = r[10], H = r[11], $ = r[12], G = r[13], Z = r[14], J = r[15];
                o += (n = e[0]) * N, s += n * z, a += n * C, h += n * q, f += n * j, u += n * D, c += n * F, d += n * K, l += n * Y, p += n * V, b += n * W, m += n * H, y += n * $, g += n * G, v += n * Z, w += n * J, s += (n = e[1]) * N, a += n * z, h += n * C, f += n * q, u += n * j, c += n * D, d += n * F, l += n * K, p += n * Y, b += n * V, m += n * W, y += n * H, g += n * $, v += n * G, w += n * Z, M += n * J, a += (n = e[2]) * N, h += n * z, f += n * C, u += n * q, c += n * j, d += n * D, l += n * F, p += n * K, b += n * Y, m += n * V, y += n * W, g += n * H, v += n * $, w += n * G, M += n * Z, _ += n * J, h += (n = e[3]) * N, f += n * z, u += n * C, c += n * q, d += n * j, l += n * D, p += n * F, b += n * K, m += n * Y, y += n * V, g += n * W, v += n * H, w += n * $, M += n * G, _ += n * Z, A += n * J, f += (n = e[4]) * N, u += n * z, c += n * C, d += n * q, l += n * j, p += n * D, b += n * F, m += n * K, y += n * Y, g += n * V, v += n * W, w += n * H, M += n * $, _ += n * G, A += n * Z, S += n * J, u += (n = e[5]) * N, c += n * z, d += n * C, l += n * q, p += n * j, b += n * D, m += n * F, y += n * K, g += n * Y, v += n * V, w += n * W, M += n * H, _ += n * $, A += n * G, S += n * Z, E += n * J, c += (n = e[6]) * N, d += n * z, l += n * C, p += n * q, b += n * j, m += n * D, y += n * F, g += n * K, v += n * Y, w += n * V, M += n * W, _ += n * H, A += n * $, S += n * G, E += n * Z, x += n * J, d += (n = e[7]) * N, l += n * z, p += n * C, b += n * q, m += n * j, y += n * D, g += n * F, v += n * K, w += n * Y, M += n * V, _ += n * W, A += n * H, S += n * $, E += n * G, x += n * Z, I += n * J, l += (n = e[8]) * N, p += n * z, b += n * C, m += n * q, y += n * j, g += n * D, v += n * F, w += n * K, M += n * Y, _ += n * V, A += n * W, S += n * H, E += n * $, x += n * G, I += n * Z, k += n * J, p += (n = e[9]) * N, b += n * z, m += n * C, y += n * q, g += n * j, v += n * D, w += n * F, M += n * K, _ += n * Y, A += n * V, S += n * W, E += n * H, x += n * $, I += n * G, k += n * Z, R += n * J, b += (n = e[10]) * N, m += n * z, y += n * C, g += n * q, v += n * j, w += n * D, M += n * F, _ += n * K, A += n * Y, S += n * V, E += n * W, x += n * H, I += n * $, k += n * G, R += n * Z, B += n * J, m += (n = e[11]) * N, y += n * z, g += n * C, v += n * q, w += n * j, M += n * D, _ += n * F, A += n * K, S += n * Y, E += n * V, x += n * W, I += n * H, k += n * $, R += n * G, B += n * Z, T += n * J, y += (n = e[12]) * N, g += n * z, v += n * C, w += n * q, M += n * j, _ += n * D, A += n * F, S += n * K, E += n * Y, x += n * V, I += n * W, k += n * H, R += n * $, B += n * G, T += n * Z, U += n * J, g += (n = e[13]) * N, v += n * z, w += n * C, M += n * q, _ += n * j, A += n * D, S += n * F, E += n * K, x += n * Y, I += n * V, k += n * W, R += n * H, B += n * $, T += n * G, U += n * Z, O += n * J, v += (n = e[14]) * N, w += n * z, M += n * C, _ += n * q, A += n * j, S += n * D, E += n * F, x += n * K, I += n * Y, k += n * V, R += n * W, B += n * H, T += n * $, U += n * G, O += n * Z, P += n * J, w += (n = e[15]) * N, s += 38 * (_ += n * C), a += 38 * (A += n * q), h += 38 * (S += n * j), f += 38 * (E += n * D), u += 38 * (x += n * F), c += 38 * (I += n * K), d += 38 * (k += n * Y), l += 38 * (R += n * V), p += 38 * (B += n * W), b += 38 * (T += n * H), m += 38 * (U += n * $), y += 38 * (O += n * G), g += 38 * (P += n * Z), v += 38 * (L += n * J), o = (n = (o += 38 * (M += n * z)) + (i = 1) + 65535) - 65536 * (i = Math.floor(n / 65536)), s = (n = s + i + 65535) - 65536 * (i = Math.floor(n / 65536)), a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536)), h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536)), f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536)), u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536)), c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536)), d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536)), l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536)), p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536)), b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536)), m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536)), y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536)), g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536)), v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536)), w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536)), o = (n = (o += i - 1 + 37 * (i - 1)) + (i = 1) + 65535) - 65536 * (i = Math.floor(n / 65536)), s = (n = s + i + 65535) - 65536 * (i = Math.floor(n / 65536)), a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536)), h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536)), f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536)), u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536)), c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536)), d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536)), l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536)), p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536)), b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536)), m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536)), y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536)), g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536)), v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536)), w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536)), o += i - 1 + 37 * (i - 1), t[0] = o, t[1] = s, t[2] = a, t[3] = h, t[4] = f, t[5] = u, t[6] = c, t[7] = d, t[8] = l, t[9] = p, t[10] = b, t[11] = m, t[12] = y, t[13] = g, t[14] = v, t[15] = w;
            }
            function q(t, e) {
                C(t, e, e);
            }
            function j(t, r) {
                var n, i = e();
                for(n = 0; n < 16; n++)i[n] = r[n];
                for(n = 253; n >= 0; n--)q(i, i), 2 !== n && 4 !== n && C(i, i, r);
                for(n = 0; n < 16; n++)t[n] = i[n];
            }
            function D(t, r) {
                var n, i = e();
                for(n = 0; n < 16; n++)i[n] = r[n];
                for(n = 250; n >= 0; n--)q(i, i), 1 !== n && C(i, i, r);
                for(n = 0; n < 16; n++)t[n] = i[n];
            }
            function F(t, r, n) {
                var i, o, s = new Uint8Array(32), h = new Float64Array(80), f = e(), u = e(), c = e(), d = e(), l = e(), p = e();
                for(o = 0; o < 31; o++)s[o] = r[o];
                for(s[31] = 127 & r[31] | 64, s[0] &= 248, L(h, n), o = 0; o < 16; o++)u[o] = h[o], d[o] = f[o] = c[o] = 0;
                for(f[0] = d[0] = 1, o = 254; o >= 0; --o)T(f, u, i = s[o >>> 3] >>> (7 & o) & 1), T(c, d, i), N(l, f, c), z(f, f, c), N(c, u, d), z(u, u, d), q(d, l), q(p, f), C(f, c, f), C(c, u, l), N(l, f, c), z(f, f, c), q(u, f), z(c, d, p), C(f, c, a), N(f, f, d), C(c, c, f), C(f, d, p), C(d, u, h), q(u, l), T(f, u, i), T(c, d, i);
                for(o = 0; o < 16; o++)h[o + 16] = f[o], h[o + 32] = c[o], h[o + 48] = u[o], h[o + 64] = d[o];
                var b = h.subarray(32), m = h.subarray(16);
                return j(b, b), C(m, m, b), U(t, m), 0;
            }
            function K(t, e) {
                return F(t, e, i);
            }
            function Y(t, e) {
                return r(e, 32), K(t, e);
            }
            function V(t, e, r) {
                var i = new Uint8Array(32);
                return F(i, r, e), g(t, n, i, v);
            }
            S.prototype.blocks = function(t, e, r) {
                for(var n, i, o, s, a, h, f, u, c, d, l, p, b, m, y, g, v, w, M, _ = this.fin ? 0 : 2048, A = this.h[0], S = this.h[1], E = this.h[2], x = this.h[3], I = this.h[4], k = this.h[5], R = this.h[6], B = this.h[7], T = this.h[8], U = this.h[9], O = this.r[0], P = this.r[1], L = this.r[2], N = this.r[3], z = this.r[4], C = this.r[5], q = this.r[6], j = this.r[7], D = this.r[8], F = this.r[9]; r >= 16;)d = c = 0, d += (A += 8191 & (n = 255 & t[e + 0] | (255 & t[e + 1]) << 8)) * O, d += (S += 8191 & (n >>> 13 | (i = 255 & t[e + 2] | (255 & t[e + 3]) << 8) << 3)) * (5 * F), d += (E += 8191 & (i >>> 10 | (o = 255 & t[e + 4] | (255 & t[e + 5]) << 8) << 6)) * (5 * D), d += (x += 8191 & (o >>> 7 | (s = 255 & t[e + 6] | (255 & t[e + 7]) << 8) << 9)) * (5 * j), c = (d += (I += 8191 & (s >>> 4 | (a = 255 & t[e + 8] | (255 & t[e + 9]) << 8) << 12)) * (5 * q)) >>> 13, d &= 8191, d += (k += a >>> 1 & 8191) * (5 * C), d += (R += 8191 & (a >>> 14 | (h = 255 & t[e + 10] | (255 & t[e + 11]) << 8) << 2)) * (5 * z), d += (B += 8191 & (h >>> 11 | (f = 255 & t[e + 12] | (255 & t[e + 13]) << 8) << 5)) * (5 * N), d += (T += 8191 & (f >>> 8 | (u = 255 & t[e + 14] | (255 & t[e + 15]) << 8) << 8)) * (5 * L), l = c += (d += (U += u >>> 5 | _) * (5 * P)) >>> 13, l += A * P, l += S * O, l += E * (5 * F), l += x * (5 * D), c = (l += I * (5 * j)) >>> 13, l &= 8191, l += k * (5 * q), l += R * (5 * C), l += B * (5 * z), l += T * (5 * N), c += (l += U * (5 * L)) >>> 13, l &= 8191, p = c, p += A * L, p += S * P, p += E * O, p += x * (5 * F), c = (p += I * (5 * D)) >>> 13, p &= 8191, p += k * (5 * j), p += R * (5 * q), p += B * (5 * C), p += T * (5 * z), b = c += (p += U * (5 * N)) >>> 13, b += A * N, b += S * L, b += E * P, b += x * O, c = (b += I * (5 * F)) >>> 13, b &= 8191, b += k * (5 * D), b += R * (5 * j), b += B * (5 * q), b += T * (5 * C), m = c += (b += U * (5 * z)) >>> 13, m += A * z, m += S * N, m += E * L, m += x * P, c = (m += I * O) >>> 13, m &= 8191, m += k * (5 * F), m += R * (5 * D), m += B * (5 * j), m += T * (5 * q), y = c += (m += U * (5 * C)) >>> 13, y += A * C, y += S * z, y += E * N, y += x * L, c = (y += I * P) >>> 13, y &= 8191, y += k * O, y += R * (5 * F), y += B * (5 * D), y += T * (5 * j), g = c += (y += U * (5 * q)) >>> 13, g += A * q, g += S * C, g += E * z, g += x * N, c = (g += I * L) >>> 13, g &= 8191, g += k * P, g += R * O, g += B * (5 * F), g += T * (5 * D), v = c += (g += U * (5 * j)) >>> 13, v += A * j, v += S * q, v += E * C, v += x * z, c = (v += I * N) >>> 13, v &= 8191, v += k * L, v += R * P, v += B * O, v += T * (5 * F), w = c += (v += U * (5 * D)) >>> 13, w += A * D, w += S * j, w += E * q, w += x * C, c = (w += I * z) >>> 13, w &= 8191, w += k * N, w += R * L, w += B * P, w += T * O, M = c += (w += U * (5 * F)) >>> 13, M += A * F, M += S * D, M += E * j, M += x * q, c = (M += I * C) >>> 13, M &= 8191, M += k * z, M += R * N, M += B * L, M += T * P, A = d = 8191 & (c = (c = ((c += (M += U * O) >>> 13) << 2) + c | 0) + (d &= 8191) | 0), S = l += c >>>= 13, E = p &= 8191, x = b &= 8191, I = m &= 8191, k = y &= 8191, R = g &= 8191, B = v &= 8191, T = w &= 8191, U = M &= 8191, e += 16, r -= 16;
                this.h[0] = A, this.h[1] = S, this.h[2] = E, this.h[3] = x, this.h[4] = I, this.h[5] = k, this.h[6] = R, this.h[7] = B, this.h[8] = T, this.h[9] = U;
            }, S.prototype.finish = function(t, e) {
                var r, n, i, o, s = new Uint16Array(10);
                if (this.leftover) {
                    for(o = this.leftover, this.buffer[o++] = 1; o < 16; o++)this.buffer[o] = 0;
                    this.fin = 1, this.blocks(this.buffer, 0, 16);
                }
                for(r = this.h[1] >>> 13, this.h[1] &= 8191, o = 2; o < 10; o++)this.h[o] += r, r = this.h[o] >>> 13, this.h[o] &= 8191;
                for(this.h[0] += 5 * r, r = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += r, r = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += r, s[0] = this.h[0] + 5, r = s[0] >>> 13, s[0] &= 8191, o = 1; o < 10; o++)s[o] = this.h[o] + r, r = s[o] >>> 13, s[o] &= 8191;
                for(s[9] -= 8192, n = (1 ^ r) - 1, o = 0; o < 10; o++)s[o] &= n;
                for(n = ~n, o = 0; o < 10; o++)this.h[o] = this.h[o] & n | s[o];
                for(this.h[0] = 65535 & (this.h[0] | this.h[1] << 13), this.h[1] = 65535 & (this.h[1] >>> 3 | this.h[2] << 10), this.h[2] = 65535 & (this.h[2] >>> 6 | this.h[3] << 7), this.h[3] = 65535 & (this.h[3] >>> 9 | this.h[4] << 4), this.h[4] = 65535 & (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14), this.h[5] = 65535 & (this.h[6] >>> 2 | this.h[7] << 11), this.h[6] = 65535 & (this.h[7] >>> 5 | this.h[8] << 8), this.h[7] = 65535 & (this.h[8] >>> 8 | this.h[9] << 5), i = this.h[0] + this.pad[0], this.h[0] = 65535 & i, o = 1; o < 8; o++)i = (this.h[o] + this.pad[o] | 0) + (i >>> 16) | 0, this.h[o] = 65535 & i;
                t[e + 0] = this.h[0] >>> 0 & 255, t[e + 1] = this.h[0] >>> 8 & 255, t[e + 2] = this.h[1] >>> 0 & 255, t[e + 3] = this.h[1] >>> 8 & 255, t[e + 4] = this.h[2] >>> 0 & 255, t[e + 5] = this.h[2] >>> 8 & 255, t[e + 6] = this.h[3] >>> 0 & 255, t[e + 7] = this.h[3] >>> 8 & 255, t[e + 8] = this.h[4] >>> 0 & 255, t[e + 9] = this.h[4] >>> 8 & 255, t[e + 10] = this.h[5] >>> 0 & 255, t[e + 11] = this.h[5] >>> 8 & 255, t[e + 12] = this.h[6] >>> 0 & 255, t[e + 13] = this.h[6] >>> 8 & 255, t[e + 14] = this.h[7] >>> 0 & 255, t[e + 15] = this.h[7] >>> 8 & 255;
            }, S.prototype.update = function(t, e, r) {
                var n, i;
                if (this.leftover) {
                    for((i = 16 - this.leftover) > r && (i = r), n = 0; n < i; n++)this.buffer[this.leftover + n] = t[e + n];
                    if (r -= i, e += i, this.leftover += i, this.leftover < 16) return;
                    this.blocks(this.buffer, 0, 16), this.leftover = 0;
                }
                if (r >= 16 && (i = r - r % 16, this.blocks(t, e, i), e += i, r -= i), r) {
                    for(n = 0; n < r; n++)this.buffer[this.leftover + n] = t[e + n];
                    this.leftover += r;
                }
            };
            var W = I, H = k;
            var $ = [
                1116352408,
                3609767458,
                1899447441,
                602891725,
                3049323471,
                3964484399,
                3921009573,
                2173295548,
                961987163,
                4081628472,
                1508970993,
                3053834265,
                2453635748,
                2937671579,
                2870763221,
                3664609560,
                3624381080,
                2734883394,
                310598401,
                1164996542,
                607225278,
                1323610764,
                1426881987,
                3590304994,
                1925078388,
                4068182383,
                2162078206,
                991336113,
                2614888103,
                633803317,
                3248222580,
                3479774868,
                3835390401,
                2666613458,
                4022224774,
                944711139,
                264347078,
                2341262773,
                604807628,
                2007800933,
                770255983,
                1495990901,
                1249150122,
                1856431235,
                1555081692,
                3175218132,
                1996064986,
                2198950837,
                2554220882,
                3999719339,
                2821834349,
                766784016,
                2952996808,
                2566594879,
                3210313671,
                3203337956,
                3336571891,
                1034457026,
                3584528711,
                2466948901,
                113926993,
                3758326383,
                338241895,
                168717936,
                666307205,
                1188179964,
                773529912,
                1546045734,
                1294757372,
                1522805485,
                1396182291,
                2643833823,
                1695183700,
                2343527390,
                1986661051,
                1014477480,
                2177026350,
                1206759142,
                2456956037,
                344077627,
                2730485921,
                1290863460,
                2820302411,
                3158454273,
                3259730800,
                3505952657,
                3345764771,
                106217008,
                3516065817,
                3606008344,
                3600352804,
                1432725776,
                4094571909,
                1467031594,
                275423344,
                851169720,
                430227734,
                3100823752,
                506948616,
                1363258195,
                659060556,
                3750685593,
                883997877,
                3785050280,
                958139571,
                3318307427,
                1322822218,
                3812723403,
                1537002063,
                2003034995,
                1747873779,
                3602036899,
                1955562222,
                1575990012,
                2024104815,
                1125592928,
                2227730452,
                2716904306,
                2361852424,
                442776044,
                2428436474,
                593698344,
                2756734187,
                3733110249,
                3204031479,
                2999351573,
                3329325298,
                3815920427,
                3391569614,
                3928383900,
                3515267271,
                566280711,
                3940187606,
                3454069534,
                4118630271,
                4000239992,
                116418474,
                1914138554,
                174292421,
                2731055270,
                289380356,
                3203993006,
                460393269,
                320620315,
                685471733,
                587496836,
                852142971,
                1086792851,
                1017036298,
                365543100,
                1126000580,
                2618297676,
                1288033470,
                3409855158,
                1501505948,
                4234509866,
                1607167915,
                987167468,
                1816402316,
                1246189591
            ];
            function G(t, e, r, n) {
                for(var i, o, s, a, h, f, u, c, d, l, p, b, m, y, g, v, w, M, _, A, S, E, x, I, k, R, B = new Int32Array(16), T = new Int32Array(16), U = t[0], O = t[1], P = t[2], L = t[3], N = t[4], z = t[5], C = t[6], q = t[7], j = e[0], D = e[1], F = e[2], K = e[3], Y = e[4], V = e[5], W = e[6], H = e[7], G = 0; n >= 128;){
                    for(_ = 0; _ < 16; _++)A = 8 * _ + G, B[_] = r[A + 0] << 24 | r[A + 1] << 16 | r[A + 2] << 8 | r[A + 3], T[_] = r[A + 4] << 24 | r[A + 5] << 16 | r[A + 6] << 8 | r[A + 7];
                    for(_ = 0; _ < 80; _++)if (i = U, o = O, s = P, a = L, h = N, f = z, u = C, q, d = j, l = D, p = F, b = K, m = Y, y = V, g = W, H, x = 65535 & (E = H), I = E >>> 16, k = 65535 & (S = q), R = S >>> 16, x += 65535 & (E = (Y >>> 14 | N << 18) ^ (Y >>> 18 | N << 14) ^ (N >>> 9 | Y << 23)), I += E >>> 16, k += 65535 & (S = (N >>> 14 | Y << 18) ^ (N >>> 18 | Y << 14) ^ (Y >>> 9 | N << 23)), R += S >>> 16, x += 65535 & (E = Y & V ^ ~Y & W), I += E >>> 16, k += 65535 & (S = N & z ^ ~N & C), R += S >>> 16, x += 65535 & (E = $[2 * _ + 1]), I += E >>> 16, k += 65535 & (S = $[2 * _]), R += S >>> 16, S = B[_ % 16], I += (E = T[_ % 16]) >>> 16, k += 65535 & S, R += S >>> 16, k += (I += (x += 65535 & E) >>> 16) >>> 16, x = 65535 & (E = M = 65535 & x | I << 16), I = E >>> 16, k = 65535 & (S = w = 65535 & k | (R += k >>> 16) << 16), R = S >>> 16, x += 65535 & (E = (j >>> 28 | U << 4) ^ (U >>> 2 | j << 30) ^ (U >>> 7 | j << 25)), I += E >>> 16, k += 65535 & (S = (U >>> 28 | j << 4) ^ (j >>> 2 | U << 30) ^ (j >>> 7 | U << 25)), R += S >>> 16, I += (E = j & D ^ j & F ^ D & F) >>> 16, k += 65535 & (S = U & O ^ U & P ^ O & P), R += S >>> 16, c = 65535 & (k += (I += (x += 65535 & E) >>> 16) >>> 16) | (R += k >>> 16) << 16, v = 65535 & x | I << 16, x = 65535 & (E = b), I = E >>> 16, k = 65535 & (S = a), R = S >>> 16, I += (E = M) >>> 16, k += 65535 & (S = w), R += S >>> 16, O = i, P = o, L = s, N = a = 65535 & (k += (I += (x += 65535 & E) >>> 16) >>> 16) | (R += k >>> 16) << 16, z = h, C = f, q = u, U = c, D = d, F = l, K = p, Y = b = 65535 & x | I << 16, V = m, W = y, H = g, j = v, _ % 16 == 15) for(A = 0; A < 16; A++)S = B[A], x = 65535 & (E = T[A]), I = E >>> 16, k = 65535 & S, R = S >>> 16, S = B[(A + 9) % 16], x += 65535 & (E = T[(A + 9) % 16]), I += E >>> 16, k += 65535 & S, R += S >>> 16, w = B[(A + 1) % 16], x += 65535 & (E = ((M = T[(A + 1) % 16]) >>> 1 | w << 31) ^ (M >>> 8 | w << 24) ^ (M >>> 7 | w << 25)), I += E >>> 16, k += 65535 & (S = (w >>> 1 | M << 31) ^ (w >>> 8 | M << 24) ^ w >>> 7), R += S >>> 16, w = B[(A + 14) % 16], I += (E = ((M = T[(A + 14) % 16]) >>> 19 | w << 13) ^ (w >>> 29 | M << 3) ^ (M >>> 6 | w << 26)) >>> 16, k += 65535 & (S = (w >>> 19 | M << 13) ^ (M >>> 29 | w << 3) ^ w >>> 6), R += S >>> 16, R += (k += (I += (x += 65535 & E) >>> 16) >>> 16) >>> 16, B[A] = 65535 & k | R << 16, T[A] = 65535 & x | I << 16;
                    x = 65535 & (E = j), I = E >>> 16, k = 65535 & (S = U), R = S >>> 16, S = t[0], I += (E = e[0]) >>> 16, k += 65535 & S, R += S >>> 16, R += (k += (I += (x += 65535 & E) >>> 16) >>> 16) >>> 16, t[0] = U = 65535 & k | R << 16, e[0] = j = 65535 & x | I << 16, x = 65535 & (E = D), I = E >>> 16, k = 65535 & (S = O), R = S >>> 16, S = t[1], I += (E = e[1]) >>> 16, k += 65535 & S, R += S >>> 16, R += (k += (I += (x += 65535 & E) >>> 16) >>> 16) >>> 16, t[1] = O = 65535 & k | R << 16, e[1] = D = 65535 & x | I << 16, x = 65535 & (E = F), I = E >>> 16, k = 65535 & (S = P), R = S >>> 16, S = t[2], I += (E = e[2]) >>> 16, k += 65535 & S, R += S >>> 16, R += (k += (I += (x += 65535 & E) >>> 16) >>> 16) >>> 16, t[2] = P = 65535 & k | R << 16, e[2] = F = 65535 & x | I << 16, x = 65535 & (E = K), I = E >>> 16, k = 65535 & (S = L), R = S >>> 16, S = t[3], I += (E = e[3]) >>> 16, k += 65535 & S, R += S >>> 16, R += (k += (I += (x += 65535 & E) >>> 16) >>> 16) >>> 16, t[3] = L = 65535 & k | R << 16, e[3] = K = 65535 & x | I << 16, x = 65535 & (E = Y), I = E >>> 16, k = 65535 & (S = N), R = S >>> 16, S = t[4], I += (E = e[4]) >>> 16, k += 65535 & S, R += S >>> 16, R += (k += (I += (x += 65535 & E) >>> 16) >>> 16) >>> 16, t[4] = N = 65535 & k | R << 16, e[4] = Y = 65535 & x | I << 16, x = 65535 & (E = V), I = E >>> 16, k = 65535 & (S = z), R = S >>> 16, S = t[5], I += (E = e[5]) >>> 16, k += 65535 & S, R += S >>> 16, R += (k += (I += (x += 65535 & E) >>> 16) >>> 16) >>> 16, t[5] = z = 65535 & k | R << 16, e[5] = V = 65535 & x | I << 16, x = 65535 & (E = W), I = E >>> 16, k = 65535 & (S = C), R = S >>> 16, S = t[6], I += (E = e[6]) >>> 16, k += 65535 & S, R += S >>> 16, R += (k += (I += (x += 65535 & E) >>> 16) >>> 16) >>> 16, t[6] = C = 65535 & k | R << 16, e[6] = W = 65535 & x | I << 16, x = 65535 & (E = H), I = E >>> 16, k = 65535 & (S = q), R = S >>> 16, S = t[7], I += (E = e[7]) >>> 16, k += 65535 & S, R += S >>> 16, R += (k += (I += (x += 65535 & E) >>> 16) >>> 16) >>> 16, t[7] = q = 65535 & k | R << 16, e[7] = H = 65535 & x | I << 16, G += 128, n -= 128;
                }
                return n;
            }
            function Z(t, e, r) {
                var n, i = new Int32Array(8), o = new Int32Array(8), s = new Uint8Array(256), a = r;
                for(i[0] = 1779033703, i[1] = 3144134277, i[2] = 1013904242, i[3] = 2773480762, i[4] = 1359893119, i[5] = 2600822924, i[6] = 528734635, i[7] = 1541459225, o[0] = 4089235720, o[1] = 2227873595, o[2] = 4271175723, o[3] = 1595750129, o[4] = 2917565137, o[5] = 725511199, o[6] = 4215389547, o[7] = 327033209, G(i, o, e, r), r %= 128, n = 0; n < r; n++)s[n] = e[a - r + n];
                for(s[r] = 128, s[(r = 256 - 128 * (r < 112 ? 1 : 0)) - 9] = 0, l(s, r - 8, a / 536870912 | 0, a << 3), G(i, o, s, r), n = 0; n < 8; n++)l(t, 8 * n, i[n], o[n]);
                return 0;
            }
            function J(t, r) {
                var n = e(), i = e(), o = e(), s = e(), a = e(), h = e(), u = e(), c = e(), d = e();
                z(n, t[1], t[0]), z(d, r[1], r[0]), C(n, n, d), N(i, t[0], t[1]), N(d, r[0], r[1]), C(i, i, d), C(o, t[3], r[3]), C(o, o, f), C(s, t[2], r[2]), N(s, s, s), z(a, i, n), z(h, s, o), N(u, s, o), N(c, i, n), C(t[0], a, h), C(t[1], c, u), C(t[2], u, h), C(t[3], a, c);
            }
            function X(t, e, r) {
                var n;
                for(n = 0; n < 4; n++)T(t[n], e[n], r);
            }
            function Q(t, r) {
                var n = e(), i = e(), o = e();
                j(o, r[2]), C(n, r[0], o), C(i, r[1], o), U(t, i), t[31] ^= P(n) << 7;
            }
            function tt(t, e, r) {
                var n, i;
                for(R(t[0], o), R(t[1], s), R(t[2], s), R(t[3], o), i = 255; i >= 0; --i)X(t, e, n = r[i / 8 | 0] >> (7 & i) & 1), J(e, t), J(t, t), X(t, e, n);
            }
            function et(t, r) {
                var n = [
                    e(),
                    e(),
                    e(),
                    e()
                ];
                R(n[0], u), R(n[1], c), R(n[2], s), C(n[3], u, c), tt(t, n, r);
            }
            function rt(t, n, i) {
                var o, s = new Uint8Array(64), a = [
                    e(),
                    e(),
                    e(),
                    e()
                ];
                for(i || r(n, 32), Z(s, n, 32), s[0] &= 248, s[31] &= 127, s[31] |= 64, et(a, s), Q(t, a), o = 0; o < 32; o++)n[o + 32] = t[o];
                return 0;
            }
            var nt = new Float64Array([
                237,
                211,
                245,
                92,
                26,
                99,
                18,
                88,
                214,
                156,
                247,
                162,
                222,
                249,
                222,
                20,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                16
            ]);
            function it(t, e) {
                var r, n, i, o;
                for(n = 63; n >= 32; --n){
                    for(r = 0, i = n - 32, o = n - 12; i < o; ++i)e[i] += r - 16 * e[n] * nt[i - (n - 32)], r = Math.floor((e[i] + 128) / 256), e[i] -= 256 * r;
                    e[i] += r, e[n] = 0;
                }
                for(r = 0, i = 0; i < 32; i++)e[i] += r - (e[31] >> 4) * nt[i], r = e[i] >> 8, e[i] &= 255;
                for(i = 0; i < 32; i++)e[i] -= r * nt[i];
                for(n = 0; n < 32; n++)e[n + 1] += e[n] >> 8, t[n] = 255 & e[n];
            }
            function ot(t) {
                var e, r = new Float64Array(64);
                for(e = 0; e < 64; e++)r[e] = t[e];
                for(e = 0; e < 64; e++)t[e] = 0;
                it(t, r);
            }
            function st(t, r, n, i) {
                var o, s, a = new Uint8Array(64), h = new Uint8Array(64), f = new Uint8Array(64), u = new Float64Array(64), c = [
                    e(),
                    e(),
                    e(),
                    e()
                ];
                Z(a, i, 32), a[0] &= 248, a[31] &= 127, a[31] |= 64;
                var d = n + 64;
                for(o = 0; o < n; o++)t[64 + o] = r[o];
                for(o = 0; o < 32; o++)t[32 + o] = a[32 + o];
                for(Z(f, t.subarray(32), n + 32), ot(f), et(c, f), Q(t, c), o = 32; o < 64; o++)t[o] = i[o];
                for(Z(h, t, n + 64), ot(h), o = 0; o < 64; o++)u[o] = 0;
                for(o = 0; o < 32; o++)u[o] = f[o];
                for(o = 0; o < 32; o++)for(s = 0; s < 32; s++)u[o + s] += h[o] * a[s];
                return it(t.subarray(32), u), d;
            }
            function at(t, r, n, i) {
                var a, f = new Uint8Array(32), u = new Uint8Array(64), c = [
                    e(),
                    e(),
                    e(),
                    e()
                ], l = [
                    e(),
                    e(),
                    e(),
                    e()
                ];
                if (n < 64) return -1;
                if (function(t, r) {
                    var n = e(), i = e(), a = e(), f = e(), u = e(), c = e(), l = e();
                    return R(t[2], s), L(t[1], r), q(a, t[1]), C(f, a, h), z(a, a, t[2]), N(f, t[2], f), q(u, f), q(c, u), C(l, c, u), C(n, l, a), C(n, n, f), D(n, n), C(n, n, a), C(n, n, f), C(n, n, f), C(t[0], n, f), q(i, t[0]), C(i, i, f), O(i, a) && C(t[0], t[0], d), q(i, t[0]), C(i, i, f), O(i, a) ? -1 : (P(t[0]) === r[31] >> 7 && z(t[0], o, t[0]), C(t[3], t[0], t[1]), 0);
                }(l, i)) return -1;
                for(a = 0; a < n; a++)t[a] = r[a];
                for(a = 0; a < 32; a++)t[a + 32] = i[a];
                if (Z(u, t, n), ot(u), tt(c, l, u), et(l, r.subarray(32)), J(c, l), Q(f, c), n -= 64, m(r, 0, f, 0)) {
                    for(a = 0; a < n; a++)t[a] = 0;
                    return -1;
                }
                for(a = 0; a < n; a++)t[a] = r[a + 64];
                return n;
            }
            var ht = 16, ft = 64, ut = 32, ct = 64;
            function dt(t, e) {
                if (32 !== t.length) throw new Error("bad key size");
                if (24 !== e.length) throw new Error("bad nonce size");
            }
            function lt() {
                for(var t = 0; t < arguments.length; t++)if (!(arguments[t] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array");
            }
            function pt(t) {
                for(var e = 0; e < t.length; e++)t[e] = 0;
            }
            t.lowlevel = {
                crypto_core_hsalsa20: g,
                crypto_stream_xor: A,
                crypto_stream: _,
                crypto_stream_salsa20_xor: w,
                crypto_stream_salsa20: M,
                crypto_onetimeauth: E,
                crypto_onetimeauth_verify: x,
                crypto_verify_16: b,
                crypto_verify_32: m,
                crypto_secretbox: I,
                crypto_secretbox_open: k,
                crypto_scalarmult: F,
                crypto_scalarmult_base: K,
                crypto_box_beforenm: V,
                crypto_box_afternm: W,
                crypto_box: function(t, e, r, n, i, o) {
                    var s = new Uint8Array(32);
                    return V(s, i, o), W(t, e, r, n, s);
                },
                crypto_box_open: function(t, e, r, n, i, o) {
                    var s = new Uint8Array(32);
                    return V(s, i, o), H(t, e, r, n, s);
                },
                crypto_box_keypair: Y,
                crypto_hash: Z,
                crypto_sign: st,
                crypto_sign_keypair: rt,
                crypto_sign_open: at,
                crypto_secretbox_KEYBYTES: 32,
                crypto_secretbox_NONCEBYTES: 24,
                crypto_secretbox_ZEROBYTES: 32,
                crypto_secretbox_BOXZEROBYTES: ht,
                crypto_scalarmult_BYTES: 32,
                crypto_scalarmult_SCALARBYTES: 32,
                crypto_box_PUBLICKEYBYTES: 32,
                crypto_box_SECRETKEYBYTES: 32,
                crypto_box_BEFORENMBYTES: 32,
                crypto_box_NONCEBYTES: 24,
                crypto_box_ZEROBYTES: 32,
                crypto_box_BOXZEROBYTES: 16,
                crypto_sign_BYTES: ft,
                crypto_sign_PUBLICKEYBYTES: ut,
                crypto_sign_SECRETKEYBYTES: ct,
                crypto_sign_SEEDBYTES: 32,
                crypto_hash_BYTES: 64,
                gf: e,
                D: h,
                L: nt,
                pack25519: U,
                unpack25519: L,
                M: C,
                A: N,
                S: q,
                Z: z,
                pow2523: D,
                add: J,
                set25519: R,
                modL: it,
                scalarmult: tt,
                scalarbase: et
            }, t.randomBytes = function(t) {
                var e = new Uint8Array(t);
                return r(e, t), e;
            }, t.secretbox = function(t, e, r) {
                lt(t, e, r), dt(r, e);
                for(var n = new Uint8Array(32 + t.length), i = new Uint8Array(n.length), o = 0; o < t.length; o++)n[o + 32] = t[o];
                return I(i, n, n.length, e, r), i.subarray(ht);
            }, t.secretbox.open = function(t, e, r) {
                lt(t, e, r), dt(r, e);
                for(var n = new Uint8Array(ht + t.length), i = new Uint8Array(n.length), o = 0; o < t.length; o++)n[o + ht] = t[o];
                return n.length < 32 || 0 !== k(i, n, n.length, e, r) ? null : i.subarray(32);
            }, t.secretbox.keyLength = 32, t.secretbox.nonceLength = 24, t.secretbox.overheadLength = ht, t.scalarMult = function(t, e) {
                if (lt(t, e), 32 !== t.length) throw new Error("bad n size");
                if (32 !== e.length) throw new Error("bad p size");
                var r = new Uint8Array(32);
                return F(r, t, e), r;
            }, t.scalarMult.base = function(t) {
                if (lt(t), 32 !== t.length) throw new Error("bad n size");
                var e = new Uint8Array(32);
                return K(e, t), e;
            }, t.scalarMult.scalarLength = 32, t.scalarMult.groupElementLength = 32, t.box = function(e, r, n, i) {
                var o = t.box.before(n, i);
                return t.secretbox(e, r, o);
            }, t.box.before = function(t, e) {
                lt(t, e), function(t, e) {
                    if (32 !== t.length) throw new Error("bad public key size");
                    if (32 !== e.length) throw new Error("bad secret key size");
                }(t, e);
                var r = new Uint8Array(32);
                return V(r, t, e), r;
            }, t.box.after = t.secretbox, t.box.open = function(e, r, n, i) {
                var o = t.box.before(n, i);
                return t.secretbox.open(e, r, o);
            }, t.box.open.after = t.secretbox.open, t.box.keyPair = function() {
                var t = new Uint8Array(32), e = new Uint8Array(32);
                return Y(t, e), {
                    publicKey: t,
                    secretKey: e
                };
            }, t.box.keyPair.fromSecretKey = function(t) {
                if (lt(t), 32 !== t.length) throw new Error("bad secret key size");
                var e = new Uint8Array(32);
                return K(e, t), {
                    publicKey: e,
                    secretKey: new Uint8Array(t)
                };
            }, t.box.publicKeyLength = 32, t.box.secretKeyLength = 32, t.box.sharedKeyLength = 32, t.box.nonceLength = 24, t.box.overheadLength = t.secretbox.overheadLength, t.sign = function(t, e) {
                if (lt(t, e), e.length !== ct) throw new Error("bad secret key size");
                var r = new Uint8Array(ft + t.length);
                return st(r, t, t.length, e), r;
            }, t.sign.open = function(t, e) {
                if (lt(t, e), e.length !== ut) throw new Error("bad public key size");
                var r = new Uint8Array(t.length), n = at(r, t, t.length, e);
                if (n < 0) return null;
                for(var i = new Uint8Array(n), o = 0; o < i.length; o++)i[o] = r[o];
                return i;
            }, t.sign.detached = function(e, r) {
                for(var n = t.sign(e, r), i = new Uint8Array(ft), o = 0; o < i.length; o++)i[o] = n[o];
                return i;
            }, t.sign.detached.verify = function(t, e, r) {
                if (lt(t, e, r), e.length !== ft) throw new Error("bad signature size");
                if (r.length !== ut) throw new Error("bad public key size");
                var n, i = new Uint8Array(ft + t.length), o = new Uint8Array(ft + t.length);
                for(n = 0; n < ft; n++)i[n] = e[n];
                for(n = 0; n < t.length; n++)i[n + ft] = t[n];
                return at(o, i, i.length, r) >= 0;
            }, t.sign.keyPair = function() {
                var t = new Uint8Array(ut), e = new Uint8Array(ct);
                return rt(t, e), {
                    publicKey: t,
                    secretKey: e
                };
            }, t.sign.keyPair.fromSecretKey = function(t) {
                if (lt(t), t.length !== ct) throw new Error("bad secret key size");
                for(var e = new Uint8Array(ut), r = 0; r < e.length; r++)e[r] = t[32 + r];
                return {
                    publicKey: e,
                    secretKey: new Uint8Array(t)
                };
            }, t.sign.keyPair.fromSeed = function(t) {
                if (lt(t), 32 !== t.length) throw new Error("bad seed size");
                for(var e = new Uint8Array(ut), r = new Uint8Array(ct), n = 0; n < 32; n++)r[n] = t[n];
                return rt(e, r, !0), {
                    publicKey: e,
                    secretKey: r
                };
            }, t.sign.publicKeyLength = ut, t.sign.secretKeyLength = ct, t.sign.seedLength = 32, t.sign.signatureLength = ft, t.hash = function(t) {
                lt(t);
                var e = new Uint8Array(64);
                return Z(e, t, t.length), e;
            }, t.hash.hashLength = 64, t.verify = function(t, e) {
                return lt(t, e), 0 !== t.length && 0 !== e.length && t.length === e.length && 0 === p(t, 0, e, 0, t.length);
            }, t.setPRNG = function(t) {
                r = t;
            }, function() {
                var e = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
                if (e && e.getRandomValues) t.setPRNG(function(t, r) {
                    var n, i = new Uint8Array(r);
                    for(n = 0; n < r; n += 65536)e.getRandomValues(i.subarray(n, n + Math.min(r - n, 65536)));
                    for(n = 0; n < r; n++)t[n] = i[n];
                    pt(i);
                });
                else (e = Jt) && e.randomBytes && t.setPRNG(function(t, r) {
                    var n, i = e.randomBytes(r);
                    for(n = 0; n < r; n++)t[n] = i[n];
                    pt(i);
                });
            }();
        }(t.exports ? t.exports : self.nacl = self.nacl || {});
    });
    Xt.sign;
    var Qt = Gt(function(t) {
        !function(t, e) {
            function r(t, e) {
                if (!t) throw new Error(e || "Assertion failed");
            }
            function n(t, e) {
                t.super_ = e;
                var r = function() {};
                r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t;
            }
            function i(t, e, r) {
                if (i.isBN(t)) return t;
                this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"));
            }
            var o;
            "object" == typeof t ? t.exports = i : e.BN = i, i.BN = i, i.wordSize = 26;
            try {
                o = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : Jt.Buffer;
            } catch (t) {}
            function s(t, e) {
                var n = t.charCodeAt(e);
                return n >= 48 && n <= 57 ? n - 48 : n >= 65 && n <= 70 ? n - 55 : n >= 97 && n <= 102 ? n - 87 : void r(!1, "Invalid character in " + t);
            }
            function a(t, e, r) {
                var n = s(t, r);
                return r - 1 >= e && (n |= s(t, r - 1) << 4), n;
            }
            function h(t, e, n, i) {
                for(var o = 0, s = 0, a = Math.min(t.length, n), h = e; h < a; h++){
                    var f = t.charCodeAt(h) - 48;
                    o *= i, s = f >= 49 ? f - 49 + 10 : f >= 17 ? f - 17 + 10 : f, r(f >= 0 && s < i, "Invalid character"), o += s;
                }
                return o;
            }
            function f(t, e) {
                t.words = e.words, t.length = e.length, t.negative = e.negative, t.red = e.red;
            }
            if (i.isBN = function(t) {
                return t instanceof i || null !== t && "object" == typeof t && t.constructor.wordSize === i.wordSize && Array.isArray(t.words);
            }, i.max = function(t, e) {
                return t.cmp(e) > 0 ? t : e;
            }, i.min = function(t, e) {
                return t.cmp(e) < 0 ? t : e;
            }, i.prototype._init = function(t, e, n) {
                if ("number" == typeof t) return this._initNumber(t, e, n);
                if ("object" == typeof t) return this._initArray(t, e, n);
                "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
                var i = 0;
                "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, n) : (this._parseBase(t, e, i), "le" === n && this._initArray(this.toArray(), e, n)));
            }, i.prototype._initNumber = function(t, e, n) {
                t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [
                    67108863 & t
                ], this.length = 1) : t < 4503599627370496 ? (this.words = [
                    67108863 & t,
                    t / 67108864 & 67108863
                ], this.length = 2) : (r(t < 9007199254740992), this.words = [
                    67108863 & t,
                    t / 67108864 & 67108863,
                    1
                ], this.length = 3), "le" === n && this._initArray(this.toArray(), e, n);
            }, i.prototype._initArray = function(t, e, n) {
                if (r("number" == typeof t.length), t.length <= 0) return this.words = [
                    0
                ], this.length = 1, this;
                this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                for(var i = 0; i < this.length; i++)this.words[i] = 0;
                var o, s, a = 0;
                if ("be" === n) for(i = t.length - 1, o = 0; i >= 0; i -= 3)s = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                else if ("le" === n) for(i = 0, o = 0; i < t.length; i += 3)s = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                return this._strip();
            }, i.prototype._parseHex = function(t, e, r) {
                this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                for(var n = 0; n < this.length; n++)this.words[n] = 0;
                var i, o = 0, s = 0;
                if ("be" === r) for(n = t.length - 1; n >= e; n -= 2)i = a(t, e, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8;
                else for(n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2)i = a(t, e, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8;
                this._strip();
            }, i.prototype._parseBase = function(t, e, r) {
                this.words = [
                    0
                ], this.length = 1;
                for(var n = 0, i = 1; i <= 67108863; i *= e)n++;
                n--, i = i / e | 0;
                for(var o = t.length - r, s = o % n, a = Math.min(o, o - s) + r, f = 0, u = r; u < a; u += n)f = h(t, u, u + n, e), this.imuln(i), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
                if (0 !== s) {
                    var c = 1;
                    for(f = h(t, u, t.length, e), u = 0; u < s; u++)c *= e;
                    this.imuln(c), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
                }
                this._strip();
            }, i.prototype.copy = function(t) {
                t.words = new Array(this.length);
                for(var e = 0; e < this.length; e++)t.words[e] = this.words[e];
                t.length = this.length, t.negative = this.negative, t.red = this.red;
            }, i.prototype._move = function(t) {
                f(t, this);
            }, i.prototype.clone = function() {
                var t = new i(null);
                return this.copy(t), t;
            }, i.prototype._expand = function(t) {
                for(; this.length < t;)this.words[this.length++] = 0;
                return this;
            }, i.prototype._strip = function() {
                for(; this.length > 1 && 0 === this.words[this.length - 1];)this.length--;
                return this._normSign();
            }, i.prototype._normSign = function() {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
            }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
                i.prototype[Symbol.for("nodejs.util.inspect.custom")] = u;
            } catch (t) {
                i.prototype.inspect = u;
            }
            else i.prototype.inspect = u;
            function u() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
            }
            var c = [
                "",
                "0",
                "00",
                "000",
                "0000",
                "00000",
                "000000",
                "0000000",
                "00000000",
                "000000000",
                "0000000000",
                "00000000000",
                "000000000000",
                "0000000000000",
                "00000000000000",
                "000000000000000",
                "0000000000000000",
                "00000000000000000",
                "000000000000000000",
                "0000000000000000000",
                "00000000000000000000",
                "000000000000000000000",
                "0000000000000000000000",
                "00000000000000000000000",
                "000000000000000000000000",
                "0000000000000000000000000"
            ], d = [
                0,
                0,
                25,
                16,
                12,
                11,
                10,
                9,
                8,
                8,
                7,
                7,
                7,
                7,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5
            ], l = [
                0,
                0,
                33554432,
                43046721,
                16777216,
                48828125,
                60466176,
                40353607,
                16777216,
                43046721,
                1e7,
                19487171,
                35831808,
                62748517,
                7529536,
                11390625,
                16777216,
                24137569,
                34012224,
                47045881,
                64e6,
                4084101,
                5153632,
                6436343,
                7962624,
                9765625,
                11881376,
                14348907,
                17210368,
                20511149,
                243e5,
                28629151,
                33554432,
                39135393,
                45435424,
                52521875,
                60466176
            ];
            i.prototype.toString = function(t, e) {
                var n;
                if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                    n = "";
                    for(var i = 0, o = 0, s = 0; s < this.length; s++){
                        var a = this.words[s], h = (16777215 & (a << i | o)).toString(16);
                        n = 0 !== (o = a >>> 24 - i & 16777215) || s !== this.length - 1 ? c[6 - h.length] + h + n : h + n, (i += 2) >= 26 && (i -= 26, s--);
                    }
                    for(0 !== o && (n = o.toString(16) + n); n.length % e != 0;)n = "0" + n;
                    return 0 !== this.negative && (n = "-" + n), n;
                }
                if (t === (0 | t) && t >= 2 && t <= 36) {
                    var f = d[t], u = l[t];
                    n = "";
                    var p = this.clone();
                    for(p.negative = 0; !p.isZero();){
                        var b = p.modrn(u).toString(t);
                        n = (p = p.idivn(u)).isZero() ? b + n : c[f - b.length] + b + n;
                    }
                    for(this.isZero() && (n = "0" + n); n.length % e != 0;)n = "0" + n;
                    return 0 !== this.negative && (n = "-" + n), n;
                }
                r(!1, "Base should be between 2 and 36");
            }, i.prototype.toNumber = function() {
                var t = this.words[0];
                return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t;
            }, i.prototype.toJSON = function() {
                return this.toString(16, 2);
            }, o && (i.prototype.toBuffer = function(t, e) {
                return this.toArrayLike(o, t, e);
            }), i.prototype.toArray = function(t, e) {
                return this.toArrayLike(Array, t, e);
            };
            function p(t, e, r) {
                r.negative = e.negative ^ t.negative;
                var n = t.length + e.length | 0;
                r.length = n, n = n - 1 | 0;
                var i = 0 | t.words[0], o = 0 | e.words[0], s = i * o, a = 67108863 & s, h = s / 67108864 | 0;
                r.words[0] = a;
                for(var f = 1; f < n; f++){
                    for(var u = h >>> 26, c = 67108863 & h, d = Math.min(f, e.length - 1), l = Math.max(0, f - t.length + 1); l <= d; l++){
                        var p = f - l | 0;
                        u += (s = (i = 0 | t.words[p]) * (o = 0 | e.words[l]) + c) / 67108864 | 0, c = 67108863 & s;
                    }
                    r.words[f] = 0 | c, h = 0 | u;
                }
                return 0 !== h ? r.words[f] = 0 | h : r.length--, r._strip();
            }
            i.prototype.toArrayLike = function(t, e, n) {
                this._strip();
                var i = this.byteLength(), o = n || Math.max(1, i);
                r(i <= o, "byte array longer than desired length"), r(o > 0, "Requested array length <= 0");
                var s = function(t, e) {
                    return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
                }(t, o);
                return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, i), s;
            }, i.prototype._toArrayLikeLE = function(t, e) {
                for(var r = 0, n = 0, i = 0, o = 0; i < this.length; i++){
                    var s = this.words[i] << o | n;
                    t[r++] = 255 & s, r < t.length && (t[r++] = s >> 8 & 255), r < t.length && (t[r++] = s >> 16 & 255), 6 === o ? (r < t.length && (t[r++] = s >> 24 & 255), n = 0, o = 0) : (n = s >>> 24, o += 2);
                }
                if (r < t.length) for(t[r++] = n; r < t.length;)t[r++] = 0;
            }, i.prototype._toArrayLikeBE = function(t, e) {
                for(var r = t.length - 1, n = 0, i = 0, o = 0; i < this.length; i++){
                    var s = this.words[i] << o | n;
                    t[r--] = 255 & s, r >= 0 && (t[r--] = s >> 8 & 255), r >= 0 && (t[r--] = s >> 16 & 255), 6 === o ? (r >= 0 && (t[r--] = s >> 24 & 255), n = 0, o = 0) : (n = s >>> 24, o += 2);
                }
                if (r >= 0) for(t[r--] = n; r >= 0;)t[r--] = 0;
            }, Math.clz32 ? i.prototype._countBits = function(t) {
                return 32 - Math.clz32(t);
            } : i.prototype._countBits = function(t) {
                var e = t, r = 0;
                return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e;
            }, i.prototype._zeroBits = function(t) {
                if (0 === t) return 26;
                var e = t, r = 0;
                return 0 == (8191 & e) && (r += 13, e >>>= 13), 0 == (127 & e) && (r += 7, e >>>= 7), 0 == (15 & e) && (r += 4, e >>>= 4), 0 == (3 & e) && (r += 2, e >>>= 2), 0 == (1 & e) && r++, r;
            }, i.prototype.bitLength = function() {
                var t = this.words[this.length - 1], e = this._countBits(t);
                return 26 * (this.length - 1) + e;
            }, i.prototype.zeroBits = function() {
                if (this.isZero()) return 0;
                for(var t = 0, e = 0; e < this.length; e++){
                    var r = this._zeroBits(this.words[e]);
                    if (t += r, 26 !== r) break;
                }
                return t;
            }, i.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8);
            }, i.prototype.toTwos = function(t) {
                return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone();
            }, i.prototype.fromTwos = function(t) {
                return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
            }, i.prototype.isNeg = function() {
                return 0 !== this.negative;
            }, i.prototype.neg = function() {
                return this.clone().ineg();
            }, i.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1), this;
            }, i.prototype.iuor = function(t) {
                for(; this.length < t.length;)this.words[this.length++] = 0;
                for(var e = 0; e < t.length; e++)this.words[e] = this.words[e] | t.words[e];
                return this._strip();
            }, i.prototype.ior = function(t) {
                return r(0 == (this.negative | t.negative)), this.iuor(t);
            }, i.prototype.or = function(t) {
                return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
            }, i.prototype.uor = function(t) {
                return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
            }, i.prototype.iuand = function(t) {
                var e;
                e = this.length > t.length ? t : this;
                for(var r = 0; r < e.length; r++)this.words[r] = this.words[r] & t.words[r];
                return this.length = e.length, this._strip();
            }, i.prototype.iand = function(t) {
                return r(0 == (this.negative | t.negative)), this.iuand(t);
            }, i.prototype.and = function(t) {
                return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
            }, i.prototype.uand = function(t) {
                return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
            }, i.prototype.iuxor = function(t) {
                var e, r;
                this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                for(var n = 0; n < r.length; n++)this.words[n] = e.words[n] ^ r.words[n];
                if (this !== e) for(; n < e.length; n++)this.words[n] = e.words[n];
                return this.length = e.length, this._strip();
            }, i.prototype.ixor = function(t) {
                return r(0 == (this.negative | t.negative)), this.iuxor(t);
            }, i.prototype.xor = function(t) {
                return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
            }, i.prototype.uxor = function(t) {
                return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
            }, i.prototype.inotn = function(t) {
                r("number" == typeof t && t >= 0);
                var e = 0 | Math.ceil(t / 26), n = t % 26;
                this._expand(e), n > 0 && e--;
                for(var i = 0; i < e; i++)this.words[i] = 67108863 & ~this.words[i];
                return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this._strip();
            }, i.prototype.notn = function(t) {
                return this.clone().inotn(t);
            }, i.prototype.setn = function(t, e) {
                r("number" == typeof t && t >= 0);
                var n = t / 26 | 0, i = t % 26;
                return this._expand(n + 1), this.words[n] = e ? this.words[n] | 1 << i : this.words[n] & ~(1 << i), this._strip();
            }, i.prototype.iadd = function(t) {
                var e, r, n;
                if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                this.length > t.length ? (r = this, n = t) : (r = t, n = this);
                for(var i = 0, o = 0; o < n.length; o++)e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                for(; 0 !== i && o < r.length; o++)e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                else if (r !== this) for(; o < r.length; o++)this.words[o] = r.words[o];
                return this;
            }, i.prototype.add = function(t) {
                var e;
                return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
            }, i.prototype.isub = function(t) {
                if (0 !== t.negative) {
                    t.negative = 0;
                    var e = this.iadd(t);
                    return t.negative = 1, e._normSign();
                }
                if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                var r, n, i = this.cmp(t);
                if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                i > 0 ? (r = this, n = t) : (r = t, n = this);
                for(var o = 0, s = 0; s < n.length; s++)o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                for(; 0 !== o && s < r.length; s++)o = (e = (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                if (0 === o && s < r.length && r !== this) for(; s < r.length; s++)this.words[s] = r.words[s];
                return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this._strip();
            }, i.prototype.sub = function(t) {
                return this.clone().isub(t);
            };
            var b = function(t, e, r) {
                var n, i, o, s = t.words, a = e.words, h = r.words, f = 0, u = 0 | s[0], c = 8191 & u, d = u >>> 13, l = 0 | s[1], p = 8191 & l, b = l >>> 13, m = 0 | s[2], y = 8191 & m, g = m >>> 13, v = 0 | s[3], w = 8191 & v, M = v >>> 13, _ = 0 | s[4], A = 8191 & _, S = _ >>> 13, E = 0 | s[5], x = 8191 & E, I = E >>> 13, k = 0 | s[6], R = 8191 & k, B = k >>> 13, T = 0 | s[7], U = 8191 & T, O = T >>> 13, P = 0 | s[8], L = 8191 & P, N = P >>> 13, z = 0 | s[9], C = 8191 & z, q = z >>> 13, j = 0 | a[0], D = 8191 & j, F = j >>> 13, K = 0 | a[1], Y = 8191 & K, V = K >>> 13, W = 0 | a[2], H = 8191 & W, $ = W >>> 13, G = 0 | a[3], Z = 8191 & G, J = G >>> 13, X = 0 | a[4], Q = 8191 & X, tt = X >>> 13, et = 0 | a[5], rt = 8191 & et, nt = et >>> 13, it = 0 | a[6], ot = 8191 & it, st = it >>> 13, at = 0 | a[7], ht = 8191 & at, ft = at >>> 13, ut = 0 | a[8], ct = 8191 & ut, dt = ut >>> 13, lt = 0 | a[9], pt = 8191 & lt, bt = lt >>> 13;
                r.negative = t.negative ^ e.negative, r.length = 19;
                var mt = (f + (n = Math.imul(c, D)) | 0) + ((8191 & (i = (i = Math.imul(c, F)) + Math.imul(d, D) | 0)) << 13) | 0;
                f = ((o = Math.imul(d, F)) + (i >>> 13) | 0) + (mt >>> 26) | 0, mt &= 67108863, n = Math.imul(p, D), i = (i = Math.imul(p, F)) + Math.imul(b, D) | 0, o = Math.imul(b, F);
                var yt = (f + (n = n + Math.imul(c, Y) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, V) | 0) + Math.imul(d, Y) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, V) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(y, D), i = (i = Math.imul(y, F)) + Math.imul(g, D) | 0, o = Math.imul(g, F), n = n + Math.imul(p, Y) | 0, i = (i = i + Math.imul(p, V) | 0) + Math.imul(b, Y) | 0, o = o + Math.imul(b, V) | 0;
                var gt = (f + (n = n + Math.imul(c, H) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, $) | 0) + Math.imul(d, H) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, $) | 0) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(w, D), i = (i = Math.imul(w, F)) + Math.imul(M, D) | 0, o = Math.imul(M, F), n = n + Math.imul(y, Y) | 0, i = (i = i + Math.imul(y, V) | 0) + Math.imul(g, Y) | 0, o = o + Math.imul(g, V) | 0, n = n + Math.imul(p, H) | 0, i = (i = i + Math.imul(p, $) | 0) + Math.imul(b, H) | 0, o = o + Math.imul(b, $) | 0;
                var vt = (f + (n = n + Math.imul(c, Z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, J) | 0) + Math.imul(d, Z) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, J) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(A, D), i = (i = Math.imul(A, F)) + Math.imul(S, D) | 0, o = Math.imul(S, F), n = n + Math.imul(w, Y) | 0, i = (i = i + Math.imul(w, V) | 0) + Math.imul(M, Y) | 0, o = o + Math.imul(M, V) | 0, n = n + Math.imul(y, H) | 0, i = (i = i + Math.imul(y, $) | 0) + Math.imul(g, H) | 0, o = o + Math.imul(g, $) | 0, n = n + Math.imul(p, Z) | 0, i = (i = i + Math.imul(p, J) | 0) + Math.imul(b, Z) | 0, o = o + Math.imul(b, J) | 0;
                var wt = (f + (n = n + Math.imul(c, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, tt) | 0) + Math.imul(d, Q) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, tt) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(x, D), i = (i = Math.imul(x, F)) + Math.imul(I, D) | 0, o = Math.imul(I, F), n = n + Math.imul(A, Y) | 0, i = (i = i + Math.imul(A, V) | 0) + Math.imul(S, Y) | 0, o = o + Math.imul(S, V) | 0, n = n + Math.imul(w, H) | 0, i = (i = i + Math.imul(w, $) | 0) + Math.imul(M, H) | 0, o = o + Math.imul(M, $) | 0, n = n + Math.imul(y, Z) | 0, i = (i = i + Math.imul(y, J) | 0) + Math.imul(g, Z) | 0, o = o + Math.imul(g, J) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, tt) | 0;
                var Mt = (f + (n = n + Math.imul(c, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, nt) | 0) + Math.imul(d, rt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, nt) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(R, D), i = (i = Math.imul(R, F)) + Math.imul(B, D) | 0, o = Math.imul(B, F), n = n + Math.imul(x, Y) | 0, i = (i = i + Math.imul(x, V) | 0) + Math.imul(I, Y) | 0, o = o + Math.imul(I, V) | 0, n = n + Math.imul(A, H) | 0, i = (i = i + Math.imul(A, $) | 0) + Math.imul(S, H) | 0, o = o + Math.imul(S, $) | 0, n = n + Math.imul(w, Z) | 0, i = (i = i + Math.imul(w, J) | 0) + Math.imul(M, Z) | 0, o = o + Math.imul(M, J) | 0, n = n + Math.imul(y, Q) | 0, i = (i = i + Math.imul(y, tt) | 0) + Math.imul(g, Q) | 0, o = o + Math.imul(g, tt) | 0, n = n + Math.imul(p, rt) | 0, i = (i = i + Math.imul(p, nt) | 0) + Math.imul(b, rt) | 0, o = o + Math.imul(b, nt) | 0;
                var _t = (f + (n = n + Math.imul(c, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, st) | 0) + Math.imul(d, ot) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, st) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(U, D), i = (i = Math.imul(U, F)) + Math.imul(O, D) | 0, o = Math.imul(O, F), n = n + Math.imul(R, Y) | 0, i = (i = i + Math.imul(R, V) | 0) + Math.imul(B, Y) | 0, o = o + Math.imul(B, V) | 0, n = n + Math.imul(x, H) | 0, i = (i = i + Math.imul(x, $) | 0) + Math.imul(I, H) | 0, o = o + Math.imul(I, $) | 0, n = n + Math.imul(A, Z) | 0, i = (i = i + Math.imul(A, J) | 0) + Math.imul(S, Z) | 0, o = o + Math.imul(S, J) | 0, n = n + Math.imul(w, Q) | 0, i = (i = i + Math.imul(w, tt) | 0) + Math.imul(M, Q) | 0, o = o + Math.imul(M, tt) | 0, n = n + Math.imul(y, rt) | 0, i = (i = i + Math.imul(y, nt) | 0) + Math.imul(g, rt) | 0, o = o + Math.imul(g, nt) | 0, n = n + Math.imul(p, ot) | 0, i = (i = i + Math.imul(p, st) | 0) + Math.imul(b, ot) | 0, o = o + Math.imul(b, st) | 0;
                var At = (f + (n = n + Math.imul(c, ht) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, ft) | 0) + Math.imul(d, ht) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, ft) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(L, D), i = (i = Math.imul(L, F)) + Math.imul(N, D) | 0, o = Math.imul(N, F), n = n + Math.imul(U, Y) | 0, i = (i = i + Math.imul(U, V) | 0) + Math.imul(O, Y) | 0, o = o + Math.imul(O, V) | 0, n = n + Math.imul(R, H) | 0, i = (i = i + Math.imul(R, $) | 0) + Math.imul(B, H) | 0, o = o + Math.imul(B, $) | 0, n = n + Math.imul(x, Z) | 0, i = (i = i + Math.imul(x, J) | 0) + Math.imul(I, Z) | 0, o = o + Math.imul(I, J) | 0, n = n + Math.imul(A, Q) | 0, i = (i = i + Math.imul(A, tt) | 0) + Math.imul(S, Q) | 0, o = o + Math.imul(S, tt) | 0, n = n + Math.imul(w, rt) | 0, i = (i = i + Math.imul(w, nt) | 0) + Math.imul(M, rt) | 0, o = o + Math.imul(M, nt) | 0, n = n + Math.imul(y, ot) | 0, i = (i = i + Math.imul(y, st) | 0) + Math.imul(g, ot) | 0, o = o + Math.imul(g, st) | 0, n = n + Math.imul(p, ht) | 0, i = (i = i + Math.imul(p, ft) | 0) + Math.imul(b, ht) | 0, o = o + Math.imul(b, ft) | 0;
                var St = (f + (n = n + Math.imul(c, ct) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, dt) | 0) + Math.imul(d, ct) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, dt) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(C, D), i = (i = Math.imul(C, F)) + Math.imul(q, D) | 0, o = Math.imul(q, F), n = n + Math.imul(L, Y) | 0, i = (i = i + Math.imul(L, V) | 0) + Math.imul(N, Y) | 0, o = o + Math.imul(N, V) | 0, n = n + Math.imul(U, H) | 0, i = (i = i + Math.imul(U, $) | 0) + Math.imul(O, H) | 0, o = o + Math.imul(O, $) | 0, n = n + Math.imul(R, Z) | 0, i = (i = i + Math.imul(R, J) | 0) + Math.imul(B, Z) | 0, o = o + Math.imul(B, J) | 0, n = n + Math.imul(x, Q) | 0, i = (i = i + Math.imul(x, tt) | 0) + Math.imul(I, Q) | 0, o = o + Math.imul(I, tt) | 0, n = n + Math.imul(A, rt) | 0, i = (i = i + Math.imul(A, nt) | 0) + Math.imul(S, rt) | 0, o = o + Math.imul(S, nt) | 0, n = n + Math.imul(w, ot) | 0, i = (i = i + Math.imul(w, st) | 0) + Math.imul(M, ot) | 0, o = o + Math.imul(M, st) | 0, n = n + Math.imul(y, ht) | 0, i = (i = i + Math.imul(y, ft) | 0) + Math.imul(g, ht) | 0, o = o + Math.imul(g, ft) | 0, n = n + Math.imul(p, ct) | 0, i = (i = i + Math.imul(p, dt) | 0) + Math.imul(b, ct) | 0, o = o + Math.imul(b, dt) | 0;
                var Et = (f + (n = n + Math.imul(c, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, bt) | 0) + Math.imul(d, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, bt) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(C, Y), i = (i = Math.imul(C, V)) + Math.imul(q, Y) | 0, o = Math.imul(q, V), n = n + Math.imul(L, H) | 0, i = (i = i + Math.imul(L, $) | 0) + Math.imul(N, H) | 0, o = o + Math.imul(N, $) | 0, n = n + Math.imul(U, Z) | 0, i = (i = i + Math.imul(U, J) | 0) + Math.imul(O, Z) | 0, o = o + Math.imul(O, J) | 0, n = n + Math.imul(R, Q) | 0, i = (i = i + Math.imul(R, tt) | 0) + Math.imul(B, Q) | 0, o = o + Math.imul(B, tt) | 0, n = n + Math.imul(x, rt) | 0, i = (i = i + Math.imul(x, nt) | 0) + Math.imul(I, rt) | 0, o = o + Math.imul(I, nt) | 0, n = n + Math.imul(A, ot) | 0, i = (i = i + Math.imul(A, st) | 0) + Math.imul(S, ot) | 0, o = o + Math.imul(S, st) | 0, n = n + Math.imul(w, ht) | 0, i = (i = i + Math.imul(w, ft) | 0) + Math.imul(M, ht) | 0, o = o + Math.imul(M, ft) | 0, n = n + Math.imul(y, ct) | 0, i = (i = i + Math.imul(y, dt) | 0) + Math.imul(g, ct) | 0, o = o + Math.imul(g, dt) | 0;
                var xt = (f + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, bt) | 0) + Math.imul(b, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(b, bt) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(C, H), i = (i = Math.imul(C, $)) + Math.imul(q, H) | 0, o = Math.imul(q, $), n = n + Math.imul(L, Z) | 0, i = (i = i + Math.imul(L, J) | 0) + Math.imul(N, Z) | 0, o = o + Math.imul(N, J) | 0, n = n + Math.imul(U, Q) | 0, i = (i = i + Math.imul(U, tt) | 0) + Math.imul(O, Q) | 0, o = o + Math.imul(O, tt) | 0, n = n + Math.imul(R, rt) | 0, i = (i = i + Math.imul(R, nt) | 0) + Math.imul(B, rt) | 0, o = o + Math.imul(B, nt) | 0, n = n + Math.imul(x, ot) | 0, i = (i = i + Math.imul(x, st) | 0) + Math.imul(I, ot) | 0, o = o + Math.imul(I, st) | 0, n = n + Math.imul(A, ht) | 0, i = (i = i + Math.imul(A, ft) | 0) + Math.imul(S, ht) | 0, o = o + Math.imul(S, ft) | 0, n = n + Math.imul(w, ct) | 0, i = (i = i + Math.imul(w, dt) | 0) + Math.imul(M, ct) | 0, o = o + Math.imul(M, dt) | 0;
                var It = (f + (n = n + Math.imul(y, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(y, bt) | 0) + Math.imul(g, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(g, bt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(C, Z), i = (i = Math.imul(C, J)) + Math.imul(q, Z) | 0, o = Math.imul(q, J), n = n + Math.imul(L, Q) | 0, i = (i = i + Math.imul(L, tt) | 0) + Math.imul(N, Q) | 0, o = o + Math.imul(N, tt) | 0, n = n + Math.imul(U, rt) | 0, i = (i = i + Math.imul(U, nt) | 0) + Math.imul(O, rt) | 0, o = o + Math.imul(O, nt) | 0, n = n + Math.imul(R, ot) | 0, i = (i = i + Math.imul(R, st) | 0) + Math.imul(B, ot) | 0, o = o + Math.imul(B, st) | 0, n = n + Math.imul(x, ht) | 0, i = (i = i + Math.imul(x, ft) | 0) + Math.imul(I, ht) | 0, o = o + Math.imul(I, ft) | 0, n = n + Math.imul(A, ct) | 0, i = (i = i + Math.imul(A, dt) | 0) + Math.imul(S, ct) | 0, o = o + Math.imul(S, dt) | 0;
                var kt = (f + (n = n + Math.imul(w, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, bt) | 0) + Math.imul(M, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(M, bt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(C, Q), i = (i = Math.imul(C, tt)) + Math.imul(q, Q) | 0, o = Math.imul(q, tt), n = n + Math.imul(L, rt) | 0, i = (i = i + Math.imul(L, nt) | 0) + Math.imul(N, rt) | 0, o = o + Math.imul(N, nt) | 0, n = n + Math.imul(U, ot) | 0, i = (i = i + Math.imul(U, st) | 0) + Math.imul(O, ot) | 0, o = o + Math.imul(O, st) | 0, n = n + Math.imul(R, ht) | 0, i = (i = i + Math.imul(R, ft) | 0) + Math.imul(B, ht) | 0, o = o + Math.imul(B, ft) | 0, n = n + Math.imul(x, ct) | 0, i = (i = i + Math.imul(x, dt) | 0) + Math.imul(I, ct) | 0, o = o + Math.imul(I, dt) | 0;
                var Rt = (f + (n = n + Math.imul(A, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, bt) | 0) + Math.imul(S, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(S, bt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(C, rt), i = (i = Math.imul(C, nt)) + Math.imul(q, rt) | 0, o = Math.imul(q, nt), n = n + Math.imul(L, ot) | 0, i = (i = i + Math.imul(L, st) | 0) + Math.imul(N, ot) | 0, o = o + Math.imul(N, st) | 0, n = n + Math.imul(U, ht) | 0, i = (i = i + Math.imul(U, ft) | 0) + Math.imul(O, ht) | 0, o = o + Math.imul(O, ft) | 0, n = n + Math.imul(R, ct) | 0, i = (i = i + Math.imul(R, dt) | 0) + Math.imul(B, ct) | 0, o = o + Math.imul(B, dt) | 0;
                var Bt = (f + (n = n + Math.imul(x, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, bt) | 0) + Math.imul(I, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(I, bt) | 0) + (i >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, n = Math.imul(C, ot), i = (i = Math.imul(C, st)) + Math.imul(q, ot) | 0, o = Math.imul(q, st), n = n + Math.imul(L, ht) | 0, i = (i = i + Math.imul(L, ft) | 0) + Math.imul(N, ht) | 0, o = o + Math.imul(N, ft) | 0, n = n + Math.imul(U, ct) | 0, i = (i = i + Math.imul(U, dt) | 0) + Math.imul(O, ct) | 0, o = o + Math.imul(O, dt) | 0;
                var Tt = (f + (n = n + Math.imul(R, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, bt) | 0) + Math.imul(B, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(B, bt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(C, ht), i = (i = Math.imul(C, ft)) + Math.imul(q, ht) | 0, o = Math.imul(q, ft), n = n + Math.imul(L, ct) | 0, i = (i = i + Math.imul(L, dt) | 0) + Math.imul(N, ct) | 0, o = o + Math.imul(N, dt) | 0;
                var Ut = (f + (n = n + Math.imul(U, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(U, bt) | 0) + Math.imul(O, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(O, bt) | 0) + (i >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, n = Math.imul(C, ct), i = (i = Math.imul(C, dt)) + Math.imul(q, ct) | 0, o = Math.imul(q, dt);
                var Ot = (f + (n = n + Math.imul(L, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, bt) | 0) + Math.imul(N, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(N, bt) | 0) + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863;
                var Pt = (f + (n = Math.imul(C, pt)) | 0) + ((8191 & (i = (i = Math.imul(C, bt)) + Math.imul(q, pt) | 0)) << 13) | 0;
                return f = ((o = Math.imul(q, bt)) + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, h[0] = mt, h[1] = yt, h[2] = gt, h[3] = vt, h[4] = wt, h[5] = Mt, h[6] = _t, h[7] = At, h[8] = St, h[9] = Et, h[10] = xt, h[11] = It, h[12] = kt, h[13] = Rt, h[14] = Bt, h[15] = Tt, h[16] = Ut, h[17] = Ot, h[18] = Pt, 0 !== f && (h[19] = f, r.length++), r;
            };
            function m(t, e, r) {
                r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                for(var n = 0, i = 0, o = 0; o < r.length - 1; o++){
                    var s = i;
                    i = 0;
                    for(var a = 67108863 & n, h = Math.min(o, e.length - 1), f = Math.max(0, o - t.length + 1); f <= h; f++){
                        var u = o - f, c = (0 | t.words[u]) * (0 | e.words[f]), d = 67108863 & c;
                        a = 67108863 & (d = d + a | 0), i += (s = (s = s + (c / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26, s &= 67108863;
                    }
                    r.words[o] = a, n = s, s = i;
                }
                return 0 !== n ? r.words[o] = n : r.length--, r._strip();
            }
            function y(t, e, r) {
                return m(t, e, r);
            }
            Math.imul || (b = p), i.prototype.mulTo = function(t, e) {
                var r = this.length + t.length;
                return 10 === this.length && 10 === t.length ? b(this, t, e) : r < 63 ? p(this, t, e) : r < 1024 ? m(this, t, e) : y(this, t, e);
            }, i.prototype.mul = function(t) {
                var e = new i(null);
                return e.words = new Array(this.length + t.length), this.mulTo(t, e);
            }, i.prototype.mulf = function(t) {
                var e = new i(null);
                return e.words = new Array(this.length + t.length), y(this, t, e);
            }, i.prototype.imul = function(t) {
                return this.clone().mulTo(t, this);
            }, i.prototype.imuln = function(t) {
                var e = t < 0;
                e && (t = -t), r("number" == typeof t), r(t < 67108864);
                for(var n = 0, i = 0; i < this.length; i++){
                    var o = (0 | this.words[i]) * t, s = (67108863 & o) + (67108863 & n);
                    n >>= 26, n += o / 67108864 | 0, n += s >>> 26, this.words[i] = 67108863 & s;
                }
                return 0 !== n && (this.words[i] = n, this.length++), e ? this.ineg() : this;
            }, i.prototype.muln = function(t) {
                return this.clone().imuln(t);
            }, i.prototype.sqr = function() {
                return this.mul(this);
            }, i.prototype.isqr = function() {
                return this.imul(this.clone());
            }, i.prototype.pow = function(t) {
                var e = function(t) {
                    for(var e = new Array(t.bitLength()), r = 0; r < e.length; r++){
                        var n = r / 26 | 0, i = r % 26;
                        e[r] = t.words[n] >>> i & 1;
                    }
                    return e;
                }(t);
                if (0 === e.length) return new i(1);
                for(var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
                if (++n < e.length) for(var o = r.sqr(); n < e.length; n++, o = o.sqr())0 !== e[n] && (r = r.mul(o));
                return r;
            }, i.prototype.iushln = function(t) {
                r("number" == typeof t && t >= 0);
                var e, n = t % 26, i = (t - n) / 26, o = 67108863 >>> 26 - n << 26 - n;
                if (0 !== n) {
                    var s = 0;
                    for(e = 0; e < this.length; e++){
                        var a = this.words[e] & o, h = (0 | this.words[e]) - a << n;
                        this.words[e] = h | s, s = a >>> 26 - n;
                    }
                    s && (this.words[e] = s, this.length++);
                }
                if (0 !== i) {
                    for(e = this.length - 1; e >= 0; e--)this.words[e + i] = this.words[e];
                    for(e = 0; e < i; e++)this.words[e] = 0;
                    this.length += i;
                }
                return this._strip();
            }, i.prototype.ishln = function(t) {
                return r(0 === this.negative), this.iushln(t);
            }, i.prototype.iushrn = function(t, e, n) {
                var i;
                r("number" == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                var o = t % 26, s = Math.min((t - o) / 26, this.length), a = 67108863 ^ 67108863 >>> o << o, h = n;
                if (i -= s, i = Math.max(0, i), h) {
                    for(var f = 0; f < s; f++)h.words[f] = this.words[f];
                    h.length = s;
                }
                if (0 === s) ;
                else if (this.length > s) for(this.length -= s, f = 0; f < this.length; f++)this.words[f] = this.words[f + s];
                else this.words[0] = 0, this.length = 1;
                var u = 0;
                for(f = this.length - 1; f >= 0 && (0 !== u || f >= i); f--){
                    var c = 0 | this.words[f];
                    this.words[f] = u << 26 - o | c >>> o, u = c & a;
                }
                return h && 0 !== u && (h.words[h.length++] = u), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip();
            }, i.prototype.ishrn = function(t, e, n) {
                return r(0 === this.negative), this.iushrn(t, e, n);
            }, i.prototype.shln = function(t) {
                return this.clone().ishln(t);
            }, i.prototype.ushln = function(t) {
                return this.clone().iushln(t);
            }, i.prototype.shrn = function(t) {
                return this.clone().ishrn(t);
            }, i.prototype.ushrn = function(t) {
                return this.clone().iushrn(t);
            }, i.prototype.testn = function(t) {
                r("number" == typeof t && t >= 0);
                var e = t % 26, n = (t - e) / 26, i = 1 << e;
                return !(this.length <= n) && !!(this.words[n] & i);
            }, i.prototype.imaskn = function(t) {
                r("number" == typeof t && t >= 0);
                var e = t % 26, n = (t - e) / 26;
                if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= n) return this;
                if (0 !== e && n++, this.length = Math.min(n, this.length), 0 !== e) {
                    var i = 67108863 ^ 67108863 >>> e << e;
                    this.words[this.length - 1] &= i;
                }
                return this._strip();
            }, i.prototype.maskn = function(t) {
                return this.clone().imaskn(t);
            }, i.prototype.iaddn = function(t) {
                return r("number" == typeof t), r(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
            }, i.prototype._iaddn = function(t) {
                this.words[0] += t;
                for(var e = 0; e < this.length && this.words[e] >= 67108864; e++)this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                return this.length = Math.max(this.length, e + 1), this;
            }, i.prototype.isubn = function(t) {
                if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
                if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                else for(var e = 0; e < this.length && this.words[e] < 0; e++)this.words[e] += 67108864, this.words[e + 1] -= 1;
                return this._strip();
            }, i.prototype.addn = function(t) {
                return this.clone().iaddn(t);
            }, i.prototype.subn = function(t) {
                return this.clone().isubn(t);
            }, i.prototype.iabs = function() {
                return this.negative = 0, this;
            }, i.prototype.abs = function() {
                return this.clone().iabs();
            }, i.prototype._ishlnsubmul = function(t, e, n) {
                var i, o, s = t.length + n;
                this._expand(s);
                var a = 0;
                for(i = 0; i < t.length; i++){
                    o = (0 | this.words[i + n]) + a;
                    var h = (0 | t.words[i]) * e;
                    a = ((o -= 67108863 & h) >> 26) - (h / 67108864 | 0), this.words[i + n] = 67108863 & o;
                }
                for(; i < this.length - n; i++)a = (o = (0 | this.words[i + n]) + a) >> 26, this.words[i + n] = 67108863 & o;
                if (0 === a) return this._strip();
                for(r(-1 === a), a = 0, i = 0; i < this.length; i++)a = (o = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & o;
                return this.negative = 1, this._strip();
            }, i.prototype._wordDiv = function(t, e) {
                var r = (this.length, t.length), n = this.clone(), o = t, s = 0 | o.words[o.length - 1];
                0 !== (r = 26 - this._countBits(s)) && (o = o.ushln(r), n.iushln(r), s = 0 | o.words[o.length - 1]);
                var a, h = n.length - o.length;
                if ("mod" !== e) {
                    (a = new i(null)).length = h + 1, a.words = new Array(a.length);
                    for(var f = 0; f < a.length; f++)a.words[f] = 0;
                }
                var u = n.clone()._ishlnsubmul(o, 1, h);
                0 === u.negative && (n = u, a && (a.words[h] = 1));
                for(var c = h - 1; c >= 0; c--){
                    var d = 67108864 * (0 | n.words[o.length + c]) + (0 | n.words[o.length + c - 1]);
                    for(d = Math.min(d / s | 0, 67108863), n._ishlnsubmul(o, d, c); 0 !== n.negative;)d--, n.negative = 0, n._ishlnsubmul(o, 1, c), n.isZero() || (n.negative ^= 1);
                    a && (a.words[c] = d);
                }
                return a && a._strip(), n._strip(), "div" !== e && 0 !== r && n.iushrn(r), {
                    div: a || null,
                    mod: n
                };
            }, i.prototype.divmod = function(t, e, n) {
                var o, s, a;
                return r(!t.isZero()), this.isZero() ? {
                    div: new i(0),
                    mod: new i(0)
                } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (o = a.div.neg()), "div" !== e && (s = a.mod.neg(), n && 0 !== s.negative && s.iadd(t)), {
                    div: o,
                    mod: s
                }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), "mod" !== e && (o = a.div.neg()), {
                    div: o,
                    mod: a.mod
                }) : 0 != (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (s = a.mod.neg(), n && 0 !== s.negative && s.isub(t)), {
                    div: a.div,
                    mod: s
                }) : t.length > this.length || this.cmp(t) < 0 ? {
                    div: new i(0),
                    mod: this
                } : 1 === t.length ? "div" === e ? {
                    div: this.divn(t.words[0]),
                    mod: null
                } : "mod" === e ? {
                    div: null,
                    mod: new i(this.modrn(t.words[0]))
                } : {
                    div: this.divn(t.words[0]),
                    mod: new i(this.modrn(t.words[0]))
                } : this._wordDiv(t, e);
            }, i.prototype.div = function(t) {
                return this.divmod(t, "div", !1).div;
            }, i.prototype.mod = function(t) {
                return this.divmod(t, "mod", !1).mod;
            }, i.prototype.umod = function(t) {
                return this.divmod(t, "mod", !0).mod;
            }, i.prototype.divRound = function(t) {
                var e = this.divmod(t);
                if (e.mod.isZero()) return e.div;
                var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod, n = t.ushrn(1), i = t.andln(1), o = r.cmp(n);
                return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1);
            }, i.prototype.modrn = function(t) {
                var e = t < 0;
                e && (t = -t), r(t <= 67108863);
                for(var n = 67108864 % t, i = 0, o = this.length - 1; o >= 0; o--)i = (n * i + (0 | this.words[o])) % t;
                return e ? -i : i;
            }, i.prototype.modn = function(t) {
                return this.modrn(t);
            }, i.prototype.idivn = function(t) {
                var e = t < 0;
                e && (t = -t), r(t <= 67108863);
                for(var n = 0, i = this.length - 1; i >= 0; i--){
                    var o = (0 | this.words[i]) + 67108864 * n;
                    this.words[i] = o / t | 0, n = o % t;
                }
                return this._strip(), e ? this.ineg() : this;
            }, i.prototype.divn = function(t) {
                return this.clone().idivn(t);
            }, i.prototype.egcd = function(t) {
                r(0 === t.negative), r(!t.isZero());
                var e = this, n = t.clone();
                e = 0 !== e.negative ? e.umod(t) : e.clone();
                for(var o = new i(1), s = new i(0), a = new i(0), h = new i(1), f = 0; e.isEven() && n.isEven();)e.iushrn(1), n.iushrn(1), ++f;
                for(var u = n.clone(), c = e.clone(); !e.isZero();){
                    for(var d = 0, l = 1; 0 == (e.words[0] & l) && d < 26; ++d, l <<= 1);
                    if (d > 0) for(e.iushrn(d); d-- > 0;)(o.isOdd() || s.isOdd()) && (o.iadd(u), s.isub(c)), o.iushrn(1), s.iushrn(1);
                    for(var p = 0, b = 1; 0 == (n.words[0] & b) && p < 26; ++p, b <<= 1);
                    if (p > 0) for(n.iushrn(p); p-- > 0;)(a.isOdd() || h.isOdd()) && (a.iadd(u), h.isub(c)), a.iushrn(1), h.iushrn(1);
                    e.cmp(n) >= 0 ? (e.isub(n), o.isub(a), s.isub(h)) : (n.isub(e), a.isub(o), h.isub(s));
                }
                return {
                    a: a,
                    b: h,
                    gcd: n.iushln(f)
                };
            }, i.prototype._invmp = function(t) {
                r(0 === t.negative), r(!t.isZero());
                var e = this, n = t.clone();
                e = 0 !== e.negative ? e.umod(t) : e.clone();
                for(var o, s = new i(1), a = new i(0), h = n.clone(); e.cmpn(1) > 0 && n.cmpn(1) > 0;){
                    for(var f = 0, u = 1; 0 == (e.words[0] & u) && f < 26; ++f, u <<= 1);
                    if (f > 0) for(e.iushrn(f); f-- > 0;)s.isOdd() && s.iadd(h), s.iushrn(1);
                    for(var c = 0, d = 1; 0 == (n.words[0] & d) && c < 26; ++c, d <<= 1);
                    if (c > 0) for(n.iushrn(c); c-- > 0;)a.isOdd() && a.iadd(h), a.iushrn(1);
                    e.cmp(n) >= 0 ? (e.isub(n), s.isub(a)) : (n.isub(e), a.isub(s));
                }
                return (o = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && o.iadd(t), o;
            }, i.prototype.gcd = function(t) {
                if (this.isZero()) return t.abs();
                if (t.isZero()) return this.abs();
                var e = this.clone(), r = t.clone();
                e.negative = 0, r.negative = 0;
                for(var n = 0; e.isEven() && r.isEven(); n++)e.iushrn(1), r.iushrn(1);
                for(;;){
                    for(; e.isEven();)e.iushrn(1);
                    for(; r.isEven();)r.iushrn(1);
                    var i = e.cmp(r);
                    if (i < 0) {
                        var o = e;
                        e = r, r = o;
                    } else if (0 === i || 0 === r.cmpn(1)) break;
                    e.isub(r);
                }
                return r.iushln(n);
            }, i.prototype.invm = function(t) {
                return this.egcd(t).a.umod(t);
            }, i.prototype.isEven = function() {
                return 0 == (1 & this.words[0]);
            }, i.prototype.isOdd = function() {
                return 1 == (1 & this.words[0]);
            }, i.prototype.andln = function(t) {
                return this.words[0] & t;
            }, i.prototype.bincn = function(t) {
                r("number" == typeof t);
                var e = t % 26, n = (t - e) / 26, i = 1 << e;
                if (this.length <= n) return this._expand(n + 1), this.words[n] |= i, this;
                for(var o = i, s = n; 0 !== o && s < this.length; s++){
                    var a = 0 | this.words[s];
                    o = (a += o) >>> 26, a &= 67108863, this.words[s] = a;
                }
                return 0 !== o && (this.words[s] = o, this.length++), this;
            }, i.prototype.isZero = function() {
                return 1 === this.length && 0 === this.words[0];
            }, i.prototype.cmpn = function(t) {
                var e, n = t < 0;
                if (0 !== this.negative && !n) return -1;
                if (0 === this.negative && n) return 1;
                if (this._strip(), this.length > 1) e = 1;
                else {
                    n && (t = -t), r(t <= 67108863, "Number is too big");
                    var i = 0 | this.words[0];
                    e = i === t ? 0 : i < t ? -1 : 1;
                }
                return 0 !== this.negative ? 0 | -e : e;
            }, i.prototype.cmp = function(t) {
                if (0 !== this.negative && 0 === t.negative) return -1;
                if (0 === this.negative && 0 !== t.negative) return 1;
                var e = this.ucmp(t);
                return 0 !== this.negative ? 0 | -e : e;
            }, i.prototype.ucmp = function(t) {
                if (this.length > t.length) return 1;
                if (this.length < t.length) return -1;
                for(var e = 0, r = this.length - 1; r >= 0; r--){
                    var n = 0 | this.words[r], i = 0 | t.words[r];
                    if (n !== i) {
                        n < i ? e = -1 : n > i && (e = 1);
                        break;
                    }
                }
                return e;
            }, i.prototype.gtn = function(t) {
                return 1 === this.cmpn(t);
            }, i.prototype.gt = function(t) {
                return 1 === this.cmp(t);
            }, i.prototype.gten = function(t) {
                return this.cmpn(t) >= 0;
            }, i.prototype.gte = function(t) {
                return this.cmp(t) >= 0;
            }, i.prototype.ltn = function(t) {
                return -1 === this.cmpn(t);
            }, i.prototype.lt = function(t) {
                return -1 === this.cmp(t);
            }, i.prototype.lten = function(t) {
                return this.cmpn(t) <= 0;
            }, i.prototype.lte = function(t) {
                return this.cmp(t) <= 0;
            }, i.prototype.eqn = function(t) {
                return 0 === this.cmpn(t);
            }, i.prototype.eq = function(t) {
                return 0 === this.cmp(t);
            }, i.red = function(t) {
                return new S(t);
            }, i.prototype.toRed = function(t) {
                return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t);
            }, i.prototype.fromRed = function() {
                return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
            }, i.prototype._forceRed = function(t) {
                return this.red = t, this;
            }, i.prototype.forceRed = function(t) {
                return r(!this.red, "Already a number in reduction context"), this._forceRed(t);
            }, i.prototype.redAdd = function(t) {
                return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
            }, i.prototype.redIAdd = function(t) {
                return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
            }, i.prototype.redSub = function(t) {
                return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
            }, i.prototype.redISub = function(t) {
                return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
            }, i.prototype.redShl = function(t) {
                return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
            }, i.prototype.redMul = function(t) {
                return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
            }, i.prototype.redIMul = function(t) {
                return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t);
            }, i.prototype.redSqr = function() {
                return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
            }, i.prototype.redISqr = function() {
                return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
            }, i.prototype.redSqrt = function() {
                return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
            }, i.prototype.redInvm = function() {
                return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
            }, i.prototype.redNeg = function() {
                return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
            }, i.prototype.redPow = function(t) {
                return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
            };
            var g = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };
            function v(t, e) {
                this.name = t, this.p = new i(e, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
            }
            function w() {
                v.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
            }
            function M() {
                v.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
            }
            function _() {
                v.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
            }
            function A() {
                v.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
            }
            function S(t) {
                if ("string" == typeof t) {
                    var e = i._prime(t);
                    this.m = e.p, this.prime = e;
                } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null;
            }
            function E(t) {
                S.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
            }
            v.prototype._tmp = function() {
                var t = new i(null);
                return t.words = new Array(Math.ceil(this.n / 13)), t;
            }, v.prototype.ireduce = function(t) {
                var e, r = t;
                do this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength();
                while (e > this.n);
                var n = e < this.n ? -1 : r.ucmp(this.p);
                return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r;
            }, v.prototype.split = function(t, e) {
                t.iushrn(this.n, 0, e);
            }, v.prototype.imulK = function(t) {
                return t.imul(this.k);
            }, n(w, v), w.prototype.split = function(t, e) {
                for(var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++)e.words[i] = t.words[i];
                if (e.length = n, t.length <= 9) return t.words[0] = 0, void (t.length = 1);
                var o = t.words[9];
                for(e.words[e.length++] = o & r, i = 10; i < t.length; i++){
                    var s = 0 | t.words[i];
                    t.words[i - 10] = (s & r) << 4 | o >>> 22, o = s;
                }
                o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9;
            }, w.prototype.imulK = function(t) {
                t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                for(var e = 0, r = 0; r < t.length; r++){
                    var n = 0 | t.words[r];
                    e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0);
                }
                return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t;
            }, n(M, v), n(_, v), n(A, v), A.prototype.imulK = function(t) {
                for(var e = 0, r = 0; r < t.length; r++){
                    var n = 19 * (0 | t.words[r]) + e, i = 67108863 & n;
                    n >>>= 26, t.words[r] = i, e = n;
                }
                return 0 !== e && (t.words[t.length++] = e), t;
            }, i._prime = function(t) {
                if (g[t]) return g[t];
                var e;
                if ("k256" === t) e = new w;
                else if ("p224" === t) e = new M;
                else if ("p192" === t) e = new _;
                else {
                    if ("p25519" !== t) throw new Error("Unknown prime " + t);
                    e = new A;
                }
                return g[t] = e, e;
            }, S.prototype._verify1 = function(t) {
                r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers");
            }, S.prototype._verify2 = function(t, e) {
                r(0 == (t.negative | e.negative), "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers");
            }, S.prototype.imod = function(t) {
                return this.prime ? this.prime.ireduce(t)._forceRed(this) : (f(t, t.umod(this.m)._forceRed(this)), t);
            }, S.prototype.neg = function(t) {
                return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }, S.prototype.add = function(t, e) {
                this._verify2(t, e);
                var r = t.add(e);
                return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
            }, S.prototype.iadd = function(t, e) {
                this._verify2(t, e);
                var r = t.iadd(e);
                return r.cmp(this.m) >= 0 && r.isub(this.m), r;
            }, S.prototype.sub = function(t, e) {
                this._verify2(t, e);
                var r = t.sub(e);
                return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
            }, S.prototype.isub = function(t, e) {
                this._verify2(t, e);
                var r = t.isub(e);
                return r.cmpn(0) < 0 && r.iadd(this.m), r;
            }, S.prototype.shl = function(t, e) {
                return this._verify1(t), this.imod(t.ushln(e));
            }, S.prototype.imul = function(t, e) {
                return this._verify2(t, e), this.imod(t.imul(e));
            }, S.prototype.mul = function(t, e) {
                return this._verify2(t, e), this.imod(t.mul(e));
            }, S.prototype.isqr = function(t) {
                return this.imul(t, t.clone());
            }, S.prototype.sqr = function(t) {
                return this.mul(t, t);
            }, S.prototype.sqrt = function(t) {
                if (t.isZero()) return t.clone();
                var e = this.m.andln(3);
                if (r(e % 2 == 1), 3 === e) {
                    var n = this.m.add(new i(1)).iushrn(2);
                    return this.pow(t, n);
                }
                for(var o = this.m.subn(1), s = 0; !o.isZero() && 0 === o.andln(1);)s++, o.iushrn(1);
                r(!o.isZero());
                var a = new i(1).toRed(this), h = a.redNeg(), f = this.m.subn(1).iushrn(1), u = this.m.bitLength();
                for(u = new i(2 * u * u).toRed(this); 0 !== this.pow(u, f).cmp(h);)u.redIAdd(h);
                for(var c = this.pow(u, o), d = this.pow(t, o.addn(1).iushrn(1)), l = this.pow(t, o), p = s; 0 !== l.cmp(a);){
                    for(var b = l, m = 0; 0 !== b.cmp(a); m++)b = b.redSqr();
                    r(m < p);
                    var y = this.pow(c, new i(1).iushln(p - m - 1));
                    d = d.redMul(y), c = y.redSqr(), l = l.redMul(c), p = m;
                }
                return d;
            }, S.prototype.invm = function(t) {
                var e = t._invmp(this.m);
                return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e);
            }, S.prototype.pow = function(t, e) {
                if (e.isZero()) return new i(1).toRed(this);
                if (0 === e.cmpn(1)) return t.clone();
                var r = new Array(16);
                r[0] = new i(1).toRed(this), r[1] = t;
                for(var n = 2; n < r.length; n++)r[n] = this.mul(r[n - 1], t);
                var o = r[0], s = 0, a = 0, h = e.bitLength() % 26;
                for(0 === h && (h = 26), n = e.length - 1; n >= 0; n--){
                    for(var f = e.words[n], u = h - 1; u >= 0; u--){
                        var c = f >> u & 1;
                        o !== r[0] && (o = this.sqr(o)), 0 !== c || 0 !== s ? (s <<= 1, s |= c, (4 === ++a || 0 === n && 0 === u) && (o = this.mul(o, r[s]), a = 0, s = 0)) : a = 0;
                    }
                    h = 26;
                }
                return o;
            }, S.prototype.convertTo = function(t) {
                var e = t.umod(this.m);
                return e === t ? e.clone() : e;
            }, S.prototype.convertFrom = function(t) {
                var e = t.clone();
                return e.red = null, e;
            }, i.mont = function(t) {
                return new E(t);
            }, n(E, S), E.prototype.convertTo = function(t) {
                return this.imod(t.ushln(this.shift));
            }, E.prototype.convertFrom = function(t) {
                var e = this.imod(t.mul(this.rinv));
                return e.red = null, e;
            }, E.prototype.imul = function(t, e) {
                if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                var r = t.imul(e), n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), i = r.isub(n).iushrn(this.shift), o = i;
                return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this);
            }, E.prototype.mul = function(t, e) {
                if (t.isZero() || e.isZero()) return new i(0)._forceRed(this);
                var r = t.mul(e), n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), o = r.isub(n).iushrn(this.shift), s = o;
                return o.cmp(this.m) >= 0 ? s = o.isub(this.m) : o.cmpn(0) < 0 && (s = o.iadd(this.m)), s._forceRed(this);
            }, E.prototype.invm = function(t) {
                return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
            };
        }(t, Ht);
    }), te = Gt(function(t, e) {
        /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var r = Wt.Buffer;
        function n(t, e) {
            for(var r in t)e[r] = t[r];
        }
        function i(t, e, n) {
            return r(t, e, n);
        }
        r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? t.exports = Wt : (n(Wt, e), e.Buffer = i), i.prototype = Object.create(r.prototype), n(r, i), i.from = function(t, e, n) {
            if ("number" == typeof t) throw new TypeError("Argument must not be a number");
            return r(t, e, n);
        }, i.alloc = function(t, e, n) {
            if ("number" != typeof t) throw new TypeError("Argument must be a number");
            var i = r(t);
            return void 0 !== e ? "string" == typeof n ? i.fill(e, n) : i.fill(e) : i.fill(0), i;
        }, i.allocUnsafe = function(t) {
            if ("number" != typeof t) throw new TypeError("Argument must be a number");
            return r(t);
        }, i.allocUnsafeSlow = function(t) {
            if ("number" != typeof t) throw new TypeError("Argument must be a number");
            return Wt.SlowBuffer(t);
        };
    });
    te.Buffer;
    var ee = te.Buffer;
    var re = function(t) {
        if (t.length >= 255) throw new TypeError("Alphabet too long");
        for(var e = new Uint8Array(256), r = 0; r < e.length; r++)e[r] = 255;
        for(var n = 0; n < t.length; n++){
            var i = t.charAt(n), o = i.charCodeAt(0);
            if (255 !== e[o]) throw new TypeError(i + " is ambiguous");
            e[o] = n;
        }
        var s = t.length, a = t.charAt(0), h = Math.log(s) / Math.log(256), f = Math.log(256) / Math.log(s);
        function u(t) {
            if ("string" != typeof t) throw new TypeError("Expected String");
            if (0 === t.length) return ee.alloc(0);
            for(var r = 0, n = 0, i = 0; t[r] === a;)n++, r++;
            for(var o = (t.length - r) * h + 1 >>> 0, f = new Uint8Array(o); t[r];){
                var u = e[t.charCodeAt(r)];
                if (255 === u) return;
                for(var c = 0, d = o - 1; (0 !== u || c < i) && -1 !== d; d--, c++)u += s * f[d] >>> 0, f[d] = u % 256 >>> 0, u = u / 256 >>> 0;
                if (0 !== u) throw new Error("Non-zero carry");
                i = c, r++;
            }
            for(var l = o - i; l !== o && 0 === f[l];)l++;
            var p = ee.allocUnsafe(n + (o - l));
            p.fill(0, 0, n);
            for(var b = n; l !== o;)p[b++] = f[l++];
            return p;
        }
        return {
            encode: function(e) {
                if ((Array.isArray(e) || e instanceof Uint8Array) && (e = ee.from(e)), !ee.isBuffer(e)) throw new TypeError("Expected Buffer");
                if (0 === e.length) return "";
                for(var r = 0, n = 0, i = 0, o = e.length; i !== o && 0 === e[i];)i++, r++;
                for(var h = (o - i) * f + 1 >>> 0, u = new Uint8Array(h); i !== o;){
                    for(var c = e[i], d = 0, l = h - 1; (0 !== c || d < n) && -1 !== l; l--, d++)c += 256 * u[l] >>> 0, u[l] = c % s >>> 0, c = c / s >>> 0;
                    if (0 !== c) throw new Error("Non-zero carry");
                    n = d, i++;
                }
                for(var p = h - n; p !== h && 0 === u[p];)p++;
                for(var b = a.repeat(r); p < h; ++p)b += t.charAt(u[p]);
                return b;
            },
            decodeUnsafe: u,
            decode: function(t) {
                var e = u(t);
                if (e) return e;
                throw new Error("Non-base" + s + " character");
            }
        };
    }, ne = re("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
    function ie(t, e, r) {
        return e <= t && t <= r;
    }
    function oe(t) {
        if (void 0 === t) return {};
        if (t === Object(t)) return t;
        throw TypeError("Could not convert argument to dictionary");
    }
    function se(t) {
        this.tokens = [].slice.call(t);
    }
    se.prototype = {
        endOfStream: function() {
            return !this.tokens.length;
        },
        read: function() {
            return this.tokens.length ? this.tokens.shift() : -1;
        },
        prepend: function(t) {
            if (Array.isArray(t)) for(var e = t; e.length;)this.tokens.unshift(e.pop());
            else this.tokens.unshift(t);
        },
        push: function(t) {
            if (Array.isArray(t)) for(var e = t; e.length;)this.tokens.push(e.shift());
            else this.tokens.push(t);
        }
    };
    var ae = -1;
    function he(t, e) {
        if (t) throw TypeError("Decoder error");
        return e || 65533;
    }
    var fe = "utf-8";
    function ue(t, e) {
        if (!(this instanceof ue)) return new ue(t, e);
        if ((t = void 0 !== t ? String(t).toLowerCase() : fe) !== fe) throw new Error("Encoding not supported. Only utf-8 is supported");
        e = oe(e), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = Boolean(e.fatal), this._ignoreBOM = Boolean(e.ignoreBOM), Object.defineProperty(this, "encoding", {
            value: "utf-8"
        }), Object.defineProperty(this, "fatal", {
            value: this._fatal
        }), Object.defineProperty(this, "ignoreBOM", {
            value: this._ignoreBOM
        });
    }
    function ce(t, e) {
        if (!(this instanceof ce)) return new ce(t, e);
        if ((t = void 0 !== t ? String(t).toLowerCase() : fe) !== fe) throw new Error("Encoding not supported. Only utf-8 is supported");
        e = oe(e), this._streaming = !1, this._encoder = null, this._options = {
            fatal: Boolean(e.fatal)
        }, Object.defineProperty(this, "encoding", {
            value: "utf-8"
        });
    }
    function de(t) {
        var e = t.fatal, r = 0, n = 0, i = 0, o = 128, s = 191;
        this.handler = function(t, a) {
            if (-1 === a && 0 !== i) return i = 0, he(e);
            if (-1 === a) return ae;
            if (0 === i) {
                if (ie(a, 0, 127)) return a;
                if (ie(a, 194, 223)) i = 1, r = a - 192;
                else if (ie(a, 224, 239)) 224 === a && (o = 160), 237 === a && (s = 159), i = 2, r = a - 224;
                else {
                    if (!ie(a, 240, 244)) return he(e);
                    240 === a && (o = 144), 244 === a && (s = 143), i = 3, r = a - 240;
                }
                return r <<= 6 * i, null;
            }
            if (!ie(a, o, s)) return r = i = n = 0, o = 128, s = 191, t.prepend(a), he(e);
            if (o = 128, s = 191, r += a - 128 << 6 * (i - (n += 1)), n !== i) return null;
            var h = r;
            return r = i = n = 0, h;
        };
    }
    function le(t) {
        t.fatal, this.handler = function(t, e) {
            if (-1 === e) return ae;
            if (ie(e, 0, 127)) return e;
            var r, n;
            ie(e, 128, 2047) ? (r = 1, n = 192) : ie(e, 2048, 65535) ? (r = 2, n = 224) : ie(e, 65536, 1114111) && (r = 3, n = 240);
            for(var i = [
                (e >> 6 * r) + n
            ]; r > 0;){
                var o = e >> 6 * (r - 1);
                i.push(128 | 63 & o), r -= 1;
            }
            return i;
        };
    }
    ue.prototype = {
        decode: function(t, e) {
            var r;
            r = "object" == typeof t && t instanceof ArrayBuffer ? new Uint8Array(t) : "object" == typeof t && "buffer" in t && t.buffer instanceof ArrayBuffer ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(0), e = oe(e), this._streaming || (this._decoder = new de({
                fatal: this._fatal
            }), this._BOMseen = !1), this._streaming = Boolean(e.stream);
            for(var n, i = new se(r), o = []; !i.endOfStream() && (n = this._decoder.handler(i, i.read())) !== ae;)null !== n && (Array.isArray(n) ? o.push.apply(o, n) : o.push(n));
            if (!this._streaming) {
                do {
                    if ((n = this._decoder.handler(i, i.read())) === ae) break;
                    null !== n && (Array.isArray(n) ? o.push.apply(o, n) : o.push(n));
                }while (!i.endOfStream());
                this._decoder = null;
            }
            return o.length && (-1 === [
                "utf-8"
            ].indexOf(this.encoding) || this._ignoreBOM || this._BOMseen || (65279 === o[0] ? (this._BOMseen = !0, o.shift()) : this._BOMseen = !0)), function(t) {
                for(var e = "", r = 0; r < t.length; ++r){
                    var n = t[r];
                    n <= 65535 ? e += String.fromCharCode(n) : (n -= 65536, e += String.fromCharCode(55296 + (n >> 10), 56320 + (1023 & n)));
                }
                return e;
            }(o);
        }
    }, ce.prototype = {
        encode: function(t, e) {
            t = t ? String(t) : "", e = oe(e), this._streaming || (this._encoder = new le(this._options)), this._streaming = Boolean(e.stream);
            for(var r, n = [], i = new se(function(t) {
                for(var e = String(t), r = e.length, n = 0, i = []; n < r;){
                    var o = e.charCodeAt(n);
                    if (o < 55296 || o > 57343) i.push(o);
                    else if (56320 <= o && o <= 57343) i.push(65533);
                    else if (55296 <= o && o <= 56319) {
                        if (n === r - 1) i.push(65533);
                        else {
                            var s = t.charCodeAt(n + 1);
                            if (56320 <= s && s <= 57343) {
                                var a = 1023 & o, h = 1023 & s;
                                i.push(65536 + (a << 10) + h), n += 1;
                            } else i.push(65533);
                        }
                    }
                    n += 1;
                }
                return i;
            }(t)); !i.endOfStream() && (r = this._encoder.handler(i, i.read())) !== ae;)Array.isArray(r) ? n.push.apply(n, r) : n.push(r);
            if (!this._streaming) {
                for(; (r = this._encoder.handler(i, i.read())) !== ae;)Array.isArray(r) ? n.push.apply(n, r) : n.push(r);
                this._encoder = null;
            }
            return new Uint8Array(n);
        }
    };
    var pe = Zt(Object.freeze({
        __proto__: null,
        TextEncoder: ce,
        TextDecoder: ue
    })), be = Gt(function(t, e) {
        var r = Ht && Ht.__createBinding || (Object.create ? function(t, e, r, n) {
            void 0 === n && (n = r), Object.defineProperty(t, n, {
                enumerable: !0,
                get: function() {
                    return e[r];
                }
            });
        } : function(t, e, r, n) {
            void 0 === n && (n = r), t[n] = e[r];
        }), n = Ht && Ht.__setModuleDefault || (Object.create ? function(t, e) {
            Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            });
        } : function(t, e) {
            t.default = e;
        }), i = Ht && Ht.__decorate || function(t, e, r, n) {
            var i, o = arguments.length, s = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, n);
            else for(var a = t.length - 1; a >= 0; a--)(i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, r, s) : i(e, r)) || s);
            return o > 3 && s && Object.defineProperty(e, r, s), s;
        }, o = Ht && Ht.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for(var i in t)"default" !== i && Object.hasOwnProperty.call(t, i) && r(e, t, i);
            return n(e, t), e;
        }, s = Ht && Ht.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.deserializeUnchecked = e.deserialize = e.serialize = e.BinaryReader = e.BinaryWriter = e.BorshError = e.baseDecode = e.baseEncode = void 0;
        const a = s(Qt), h = s(ne), f = o(pe), u = new ("function" != typeof TextDecoder ? f.TextDecoder : TextDecoder)("utf-8", {
            fatal: !0
        });
        e.baseEncode = function(t) {
            return "string" == typeof t && (t = at.from(t, "utf8")), h.default.encode(at.from(t));
        }, e.baseDecode = function(t) {
            return at.from(h.default.decode(t));
        };
        const c = 1024;
        class d extends Error {
            constructor(t){
                super(t), this.fieldPath = [], this.originalMessage = t;
            }
            addToFieldPath(t) {
                this.fieldPath.splice(0, 0, t), this.message = this.originalMessage + ": " + this.fieldPath.join(".");
            }
        }
        e.BorshError = d;
        class l {
            constructor(){
                this.buf = at.alloc(c), this.length = 0;
            }
            maybeResize() {
                this.buf.length < 16 + this.length && (this.buf = at.concat([
                    this.buf,
                    at.alloc(c)
                ]));
            }
            writeU8(t) {
                this.maybeResize(), this.buf.writeUInt8(t, this.length), this.length += 1;
            }
            writeU16(t) {
                this.maybeResize(), this.buf.writeUInt16LE(t, this.length), this.length += 2;
            }
            writeU32(t) {
                this.maybeResize(), this.buf.writeUInt32LE(t, this.length), this.length += 4;
            }
            writeU64(t) {
                this.maybeResize(), this.writeBuffer(at.from(new a.default(t).toArray("le", 8)));
            }
            writeU128(t) {
                this.maybeResize(), this.writeBuffer(at.from(new a.default(t).toArray("le", 16)));
            }
            writeU256(t) {
                this.maybeResize(), this.writeBuffer(at.from(new a.default(t).toArray("le", 32)));
            }
            writeU512(t) {
                this.maybeResize(), this.writeBuffer(at.from(new a.default(t).toArray("le", 64)));
            }
            writeBuffer(t) {
                this.buf = at.concat([
                    at.from(this.buf.subarray(0, this.length)),
                    t,
                    at.alloc(c)
                ]), this.length += t.length;
            }
            writeString(t) {
                this.maybeResize();
                const e = at.from(t, "utf8");
                this.writeU32(e.length), this.writeBuffer(e);
            }
            writeFixedArray(t) {
                this.writeBuffer(at.from(t));
            }
            writeArray(t, e) {
                this.maybeResize(), this.writeU32(t.length);
                for (const r of t)this.maybeResize(), e(r);
            }
            toArray() {
                return this.buf.subarray(0, this.length);
            }
        }
        function p(t, e, r) {
            const n = r.value;
            r.value = function(...t) {
                try {
                    return n.apply(this, t);
                } catch (t) {
                    if (t instanceof RangeError) {
                        const e = t.code;
                        if ([
                            "ERR_BUFFER_OUT_OF_BOUNDS",
                            "ERR_OUT_OF_RANGE"
                        ].indexOf(e) >= 0) throw new d("Reached the end of buffer when deserializing");
                    }
                    throw t;
                }
            };
        }
        e.BinaryWriter = l;
        class b {
            constructor(t){
                this.buf = t, this.offset = 0;
            }
            readU8() {
                const t = this.buf.readUInt8(this.offset);
                return this.offset += 1, t;
            }
            readU16() {
                const t = this.buf.readUInt16LE(this.offset);
                return this.offset += 2, t;
            }
            readU32() {
                const t = this.buf.readUInt32LE(this.offset);
                return this.offset += 4, t;
            }
            readU64() {
                const t = this.readBuffer(8);
                return new a.default(t, "le");
            }
            readU128() {
                const t = this.readBuffer(16);
                return new a.default(t, "le");
            }
            readU256() {
                const t = this.readBuffer(32);
                return new a.default(t, "le");
            }
            readU512() {
                const t = this.readBuffer(64);
                return new a.default(t, "le");
            }
            readBuffer(t) {
                if (this.offset + t > this.buf.length) throw new d(`Expected buffer length ${t} isn't within bounds`);
                const e = this.buf.slice(this.offset, this.offset + t);
                return this.offset += t, e;
            }
            readString() {
                const t = this.readU32(), e = this.readBuffer(t);
                try {
                    return u.decode(e);
                } catch (t) {
                    throw new d(`Error decoding UTF-8 string: ${t}`);
                }
            }
            readFixedArray(t) {
                return new Uint8Array(this.readBuffer(t));
            }
            readArray(t) {
                const e = this.readU32(), r = Array();
                for(let n = 0; n < e; ++n)r.push(t());
                return r;
            }
        }
        function m(t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
        }
        function y(t, e, r, n, i) {
            try {
                if ("string" == typeof n) i[`write${m(n)}`](r);
                else if (n instanceof Array) {
                    if ("number" == typeof n[0]) {
                        if (r.length !== n[0]) throw new d(`Expecting byte array of length ${n[0]}, but got ${r.length} bytes`);
                        i.writeFixedArray(r);
                    } else if (2 === n.length && "number" == typeof n[1]) {
                        if (r.length !== n[1]) throw new d(`Expecting byte array of length ${n[1]}, but got ${r.length} bytes`);
                        for(let e = 0; e < n[1]; e++)y(t, null, r[e], n[0], i);
                    } else i.writeArray(r, (r)=>{
                        y(t, e, r, n[0], i);
                    });
                } else if (void 0 !== n.kind) switch(n.kind){
                    case "option":
                        null == r ? i.writeU8(0) : (i.writeU8(1), y(t, e, r, n.type, i));
                        break;
                    case "map":
                        i.writeU32(r.size), r.forEach((r, o)=>{
                            y(t, e, o, n.key, i), y(t, e, r, n.value, i);
                        });
                        break;
                    default:
                        throw new d(`FieldType ${n} unrecognized`);
                }
                else g(t, r, i);
            } catch (t) {
                throw t instanceof d && t.addToFieldPath(e), t;
            }
        }
        function g(t, e, r) {
            if ("function" == typeof e.borshSerialize) return void e.borshSerialize(r);
            const n = t.get(e.constructor);
            if (!n) throw new d(`Class ${e.constructor.name} is missing in schema`);
            if ("struct" === n.kind) n.fields.map(([n, i])=>{
                y(t, n, e[n], i, r);
            });
            else {
                if ("enum" !== n.kind) throw new d(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`);
                {
                    const i = e[n.field];
                    for(let o = 0; o < n.values.length; ++o){
                        const [s, a] = n.values[o];
                        if (s === i) {
                            r.writeU8(o), y(t, s, e[s], a, r);
                            break;
                        }
                    }
                }
            }
        }
        function v(t, e, r, n) {
            try {
                if ("string" == typeof r) return n[`read${m(r)}`]();
                if (r instanceof Array) {
                    if ("number" == typeof r[0]) return n.readFixedArray(r[0]);
                    if ("number" == typeof r[1]) {
                        const e = [];
                        for(let i = 0; i < r[1]; i++)e.push(v(t, null, r[0], n));
                        return e;
                    }
                    return n.readArray(()=>v(t, e, r[0], n));
                }
                if ("option" === r.kind) return n.readU8() ? v(t, e, r.type, n) : void 0;
                if ("map" === r.kind) {
                    let i = new Map;
                    const o = n.readU32();
                    for(let s = 0; s < o; s++){
                        const o = v(t, e, r.key, n), s = v(t, e, r.value, n);
                        i.set(o, s);
                    }
                    return i;
                }
                return w(t, r, n);
            } catch (t) {
                throw t instanceof d && t.addToFieldPath(e), t;
            }
        }
        function w(t, e, r) {
            if ("function" == typeof e.borshDeserialize) return e.borshDeserialize(r);
            const n = t.get(e);
            if (!n) throw new d(`Class ${e.name} is missing in schema`);
            if ("struct" === n.kind) {
                const n = {};
                for (const [i, o] of t.get(e).fields)n[i] = v(t, i, o, r);
                return new e(n);
            }
            if ("enum" === n.kind) {
                const i = r.readU8();
                if (i >= n.values.length) throw new d(`Enum index: ${i} is out of range`);
                const [o, s] = n.values[i];
                return new e({
                    [o]: v(t, o, s, r)
                });
            }
            throw new d(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`);
        }
        i([
            p
        ], b.prototype, "readU8", null), i([
            p
        ], b.prototype, "readU16", null), i([
            p
        ], b.prototype, "readU32", null), i([
            p
        ], b.prototype, "readU64", null), i([
            p
        ], b.prototype, "readU128", null), i([
            p
        ], b.prototype, "readU256", null), i([
            p
        ], b.prototype, "readU512", null), i([
            p
        ], b.prototype, "readString", null), i([
            p
        ], b.prototype, "readFixedArray", null), i([
            p
        ], b.prototype, "readArray", null), e.BinaryReader = b, e.serialize = function(t, e, r = l) {
            const n = new r;
            return g(t, e, n), n.toArray();
        }, e.deserialize = function(t, e, r, n = b) {
            const i = new n(r), o = w(t, e, i);
            if (i.offset < r.length) throw new d(`Unexpected ${r.length - i.offset} bytes after deserialized data`);
            return o;
        }, e.deserializeUnchecked = function(t, e, r, n = b) {
            return w(t, e, new n(r));
        };
    });
    $t(be);
    var me = be.deserializeUnchecked, ye = be.deserialize, ge = be.serialize;
    be.BinaryReader, be.BinaryWriter, be.BorshError, be.baseDecode, be.baseEncode;
    var ve = Gt(function(t, e) {
        function r(t) {
            if (!(t instanceof Uint8Array)) throw new TypeError("b must be a Uint8Array");
        }
        function n(t) {
            return r(t), Wt.Buffer.from(t.buffer, t.byteOffset, t.length);
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.s16 = e.s8 = e.nu64be = e.u48be = e.u40be = e.u32be = e.u24be = e.u16be = e.nu64 = e.u48 = e.u40 = e.u32 = e.u24 = e.u16 = e.u8 = e.offset = e.greedy = e.Constant = e.UTF8 = e.CString = e.Blob = e.Boolean = e.BitField = e.BitStructure = e.VariantLayout = e.Union = e.UnionLayoutDiscriminator = e.UnionDiscriminator = e.Structure = e.Sequence = e.DoubleBE = e.Double = e.FloatBE = e.Float = e.NearInt64BE = e.NearInt64 = e.NearUInt64BE = e.NearUInt64 = e.IntBE = e.Int = e.UIntBE = e.UInt = e.OffsetLayout = e.GreedyCount = e.ExternalLayout = e.bindConstructorLayout = e.nameWithProperty = e.Layout = e.uint8ArrayToBuffer = e.checkUint8Array = void 0, e.constant = e.utf8 = e.cstr = e.blob = e.unionLayoutDiscriminator = e.union = e.seq = e.bits = e.struct = e.f64be = e.f64 = e.f32be = e.f32 = e.ns64be = e.s48be = e.s40be = e.s32be = e.s24be = e.s16be = e.ns64 = e.s48 = e.s40 = e.s32 = e.s24 = void 0, e.checkUint8Array = r, e.uint8ArrayToBuffer = n;
        class i {
            constructor(t, e){
                if (!Number.isInteger(t)) throw new TypeError("span must be an integer");
                this.span = t, this.property = e;
            }
            makeDestinationObject() {
                return {};
            }
            getSpan(t, e) {
                if (0 > this.span) throw new RangeError("indeterminate span");
                return this.span;
            }
            replicate(t) {
                const e = Object.create(this.constructor.prototype);
                return Object.assign(e, this), e.property = t, e;
            }
            fromArray(t) {}
        }
        function o(t, e) {
            return e.property ? t + "[" + e.property + "]" : t;
        }
        e.Layout = i, e.nameWithProperty = o, e.bindConstructorLayout = function(t, e) {
            if ("function" != typeof t) throw new TypeError("Class must be constructor");
            if (Object.prototype.hasOwnProperty.call(t, "layout_")) throw new Error("Class is already bound to a layout");
            if (!(e && e instanceof i)) throw new TypeError("layout must be a Layout");
            if (Object.prototype.hasOwnProperty.call(e, "boundConstructor_")) throw new Error("layout is already bound to a constructor");
            t.layout_ = e, e.boundConstructor_ = t, e.makeDestinationObject = ()=>new t, Object.defineProperty(t.prototype, "encode", {
                value (t, r) {
                    return e.encode(this, t, r);
                },
                writable: !0
            }), Object.defineProperty(t, "decode", {
                value: (t, r)=>e.decode(t, r),
                writable: !0
            });
        };
        class s extends i {
            isCount() {
                throw new Error("ExternalLayout is abstract");
            }
        }
        e.ExternalLayout = s;
        class a extends s {
            constructor(t = 1, e){
                if (!Number.isInteger(t) || 0 >= t) throw new TypeError("elementSpan must be a (positive) integer");
                super(-1, e), this.elementSpan = t;
            }
            isCount() {
                return !0;
            }
            decode(t, e = 0) {
                r(t);
                const n = t.length - e;
                return Math.floor(n / this.elementSpan);
            }
            encode(t, e, r) {
                return 0;
            }
        }
        e.GreedyCount = a;
        class h extends s {
            constructor(t, e = 0, r){
                if (!(t instanceof i)) throw new TypeError("layout must be a Layout");
                if (!Number.isInteger(e)) throw new TypeError("offset must be integer or undefined");
                super(t.span, r || t.property), this.layout = t, this.offset = e;
            }
            isCount() {
                return this.layout instanceof f || this.layout instanceof u;
            }
            decode(t, e = 0) {
                return this.layout.decode(t, e + this.offset);
            }
            encode(t, e, r = 0) {
                return this.layout.encode(t, e, r + this.offset);
            }
        }
        e.OffsetLayout = h;
        class f extends i {
            constructor(t, e){
                if (super(t, e), 6 < this.span) throw new RangeError("span must not exceed 6 bytes");
            }
            decode(t, e = 0) {
                return n(t).readUIntLE(e, this.span);
            }
            encode(t, e, r = 0) {
                return n(e).writeUIntLE(t, r, this.span), this.span;
            }
        }
        e.UInt = f;
        class u extends i {
            constructor(t, e){
                if (super(t, e), 6 < this.span) throw new RangeError("span must not exceed 6 bytes");
            }
            decode(t, e = 0) {
                return n(t).readUIntBE(e, this.span);
            }
            encode(t, e, r = 0) {
                return n(e).writeUIntBE(t, r, this.span), this.span;
            }
        }
        e.UIntBE = u;
        class c extends i {
            constructor(t, e){
                if (super(t, e), 6 < this.span) throw new RangeError("span must not exceed 6 bytes");
            }
            decode(t, e = 0) {
                return n(t).readIntLE(e, this.span);
            }
            encode(t, e, r = 0) {
                return n(e).writeIntLE(t, r, this.span), this.span;
            }
        }
        e.Int = c;
        class d extends i {
            constructor(t, e){
                if (super(t, e), 6 < this.span) throw new RangeError("span must not exceed 6 bytes");
            }
            decode(t, e = 0) {
                return n(t).readIntBE(e, this.span);
            }
            encode(t, e, r = 0) {
                return n(e).writeIntBE(t, r, this.span), this.span;
            }
        }
        e.IntBE = d;
        const l = Math.pow(2, 32);
        function p(t) {
            const e = Math.floor(t / l);
            return {
                hi32: e,
                lo32: t - e * l
            };
        }
        function b(t, e) {
            return t * l + e;
        }
        class m extends i {
            constructor(t){
                super(8, t);
            }
            decode(t, e = 0) {
                const r = n(t), i = r.readUInt32LE(e);
                return b(r.readUInt32LE(e + 4), i);
            }
            encode(t, e, r = 0) {
                const i = p(t), o = n(e);
                return o.writeUInt32LE(i.lo32, r), o.writeUInt32LE(i.hi32, r + 4), 8;
            }
        }
        e.NearUInt64 = m;
        class y extends i {
            constructor(t){
                super(8, t);
            }
            decode(t, e = 0) {
                const r = n(t);
                return b(r.readUInt32BE(e), r.readUInt32BE(e + 4));
            }
            encode(t, e, r = 0) {
                const i = p(t), o = n(e);
                return o.writeUInt32BE(i.hi32, r), o.writeUInt32BE(i.lo32, r + 4), 8;
            }
        }
        e.NearUInt64BE = y;
        class g extends i {
            constructor(t){
                super(8, t);
            }
            decode(t, e = 0) {
                const r = n(t), i = r.readUInt32LE(e);
                return b(r.readInt32LE(e + 4), i);
            }
            encode(t, e, r = 0) {
                const i = p(t), o = n(e);
                return o.writeUInt32LE(i.lo32, r), o.writeInt32LE(i.hi32, r + 4), 8;
            }
        }
        e.NearInt64 = g;
        class v extends i {
            constructor(t){
                super(8, t);
            }
            decode(t, e = 0) {
                const r = n(t);
                return b(r.readInt32BE(e), r.readUInt32BE(e + 4));
            }
            encode(t, e, r = 0) {
                const i = p(t), o = n(e);
                return o.writeInt32BE(i.hi32, r), o.writeUInt32BE(i.lo32, r + 4), 8;
            }
        }
        e.NearInt64BE = v;
        class w extends i {
            constructor(t){
                super(4, t);
            }
            decode(t, e = 0) {
                return n(t).readFloatLE(e);
            }
            encode(t, e, r = 0) {
                return n(e).writeFloatLE(t, r), 4;
            }
        }
        e.Float = w;
        class M extends i {
            constructor(t){
                super(4, t);
            }
            decode(t, e = 0) {
                return n(t).readFloatBE(e);
            }
            encode(t, e, r = 0) {
                return n(e).writeFloatBE(t, r), 4;
            }
        }
        e.FloatBE = M;
        class _ extends i {
            constructor(t){
                super(8, t);
            }
            decode(t, e = 0) {
                return n(t).readDoubleLE(e);
            }
            encode(t, e, r = 0) {
                return n(e).writeDoubleLE(t, r), 8;
            }
        }
        e.Double = _;
        class A extends i {
            constructor(t){
                super(8, t);
            }
            decode(t, e = 0) {
                return n(t).readDoubleBE(e);
            }
            encode(t, e, r = 0) {
                return n(e).writeDoubleBE(t, r), 8;
            }
        }
        e.DoubleBE = A;
        class S extends i {
            constructor(t, e, r){
                if (!(t instanceof i)) throw new TypeError("elementLayout must be a Layout");
                if (!(e instanceof s && e.isCount() || Number.isInteger(e) && 0 <= e)) throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
                let n = -1;
                !(e instanceof s) && 0 < t.span && (n = e * t.span), super(n, r), this.elementLayout = t, this.count = e;
            }
            getSpan(t, e = 0) {
                if (0 <= this.span) return this.span;
                let r = 0, n = this.count;
                if (n instanceof s && (n = n.decode(t, e)), 0 < this.elementLayout.span) r = n * this.elementLayout.span;
                else {
                    let i = 0;
                    for(; i < n;)r += this.elementLayout.getSpan(t, e + r), ++i;
                }
                return r;
            }
            decode(t, e = 0) {
                const r = [];
                let n = 0, i = this.count;
                for(i instanceof s && (i = i.decode(t, e)); n < i;)r.push(this.elementLayout.decode(t, e)), e += this.elementLayout.getSpan(t, e), n += 1;
                return r;
            }
            encode(t, e, r = 0) {
                const n = this.elementLayout, i = t.reduce((t, i)=>t + n.encode(i, e, r + t), 0);
                return this.count instanceof s && this.count.encode(t.length, e, r), i;
            }
        }
        e.Sequence = S;
        class E extends i {
            constructor(t, e, r){
                if (!Array.isArray(t) || !t.reduce((t, e)=>t && e instanceof i, !0)) throw new TypeError("fields must be array of Layout instances");
                "boolean" == typeof e && void 0 === r && (r = e, e = void 0);
                for (const e of t)if (0 > e.span && void 0 === e.property) throw new Error("fields cannot contain unnamed variable-length layout");
                let n = -1;
                try {
                    n = t.reduce((t, e)=>t + e.getSpan(), 0);
                } catch (t) {}
                super(n, e), this.fields = t, this.decodePrefixes = !!r;
            }
            getSpan(t, e = 0) {
                if (0 <= this.span) return this.span;
                let r = 0;
                try {
                    r = this.fields.reduce((r, n)=>{
                        const i = n.getSpan(t, e);
                        return e += i, r + i;
                    }, 0);
                } catch (t) {
                    throw new RangeError("indeterminate span");
                }
                return r;
            }
            decode(t, e = 0) {
                r(t);
                const n = this.makeDestinationObject();
                for (const r of this.fields)if (void 0 !== r.property && (n[r.property] = r.decode(t, e)), e += r.getSpan(t, e), this.decodePrefixes && t.length === e) break;
                return n;
            }
            encode(t, e, r = 0) {
                const n = r;
                let i = 0, o = 0;
                for (const n of this.fields){
                    let s = n.span;
                    if (o = 0 < s ? s : 0, void 0 !== n.property) {
                        const i = t[n.property];
                        void 0 !== i && (o = n.encode(i, e, r), 0 > s && (s = n.getSpan(e, r)));
                    }
                    i = r, r += s;
                }
                return i + o - n;
            }
            fromArray(t) {
                const e = this.makeDestinationObject();
                for (const r of this.fields)void 0 !== r.property && 0 < t.length && (e[r.property] = t.shift());
                return e;
            }
            layoutFor(t) {
                if ("string" != typeof t) throw new TypeError("property must be string");
                for (const e of this.fields)if (e.property === t) return e;
            }
            offsetOf(t) {
                if ("string" != typeof t) throw new TypeError("property must be string");
                let e = 0;
                for (const r of this.fields){
                    if (r.property === t) return e;
                    0 > r.span ? e = -1 : 0 <= e && (e += r.span);
                }
            }
        }
        e.Structure = E;
        class x {
            constructor(t){
                this.property = t;
            }
            decode(t, e) {
                throw new Error("UnionDiscriminator is abstract");
            }
            encode(t, e, r) {
                throw new Error("UnionDiscriminator is abstract");
            }
        }
        e.UnionDiscriminator = x;
        class I extends x {
            constructor(t, e){
                if (!(t instanceof s && t.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout");
                super(e || t.property || "variant"), this.layout = t;
            }
            decode(t, e) {
                return this.layout.decode(t, e);
            }
            encode(t, e, r) {
                return this.layout.encode(t, e, r);
            }
        }
        e.UnionLayoutDiscriminator = I;
        class k extends i {
            constructor(t, e, r){
                let n;
                if (t instanceof f || t instanceof u) n = new I(new h(t));
                else if (t instanceof s && t.isCount()) n = new I(t);
                else {
                    if (!(t instanceof x)) throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
                    n = t;
                }
                if (void 0 === e && (e = null), !(null === e || e instanceof i)) throw new TypeError("defaultLayout must be null or a Layout");
                if (null !== e) {
                    if (0 > e.span) throw new Error("defaultLayout must have constant span");
                    void 0 === e.property && (e = e.replicate("content"));
                }
                let o = -1;
                e && (o = e.span, 0 <= o && (t instanceof f || t instanceof u) && (o += n.layout.span)), super(o, r), this.discriminator = n, this.usesPrefixDiscriminator = t instanceof f || t instanceof u, this.defaultLayout = e, this.registry = {};
                let a = this.defaultGetSourceVariant.bind(this);
                this.getSourceVariant = function(t) {
                    return a(t);
                }, this.configGetSourceVariant = function(t) {
                    a = t.bind(this);
                };
            }
            getSpan(t, e = 0) {
                if (0 <= this.span) return this.span;
                const r = this.getVariant(t, e);
                if (!r) throw new Error("unable to determine span for unrecognized variant");
                return r.getSpan(t, e);
            }
            defaultGetSourceVariant(t) {
                if (Object.prototype.hasOwnProperty.call(t, this.discriminator.property)) {
                    if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(t, this.defaultLayout.property)) return;
                    const e = this.registry[t[this.discriminator.property]];
                    if (e && (!e.layout || e.property && Object.prototype.hasOwnProperty.call(t, e.property))) return e;
                } else for(const e in this.registry){
                    const r = this.registry[e];
                    if (r.property && Object.prototype.hasOwnProperty.call(t, r.property)) return r;
                }
                throw new Error("unable to infer src variant");
            }
            decode(t, e = 0) {
                let r;
                const n = this.discriminator, i = n.decode(t, e), o = this.registry[i];
                if (void 0 === o) {
                    const o = this.defaultLayout;
                    let s = 0;
                    this.usesPrefixDiscriminator && (s = n.layout.span), r = this.makeDestinationObject(), r[n.property] = i, r[o.property] = o.decode(t, e + s);
                } else r = o.decode(t, e);
                return r;
            }
            encode(t, e, r = 0) {
                const n = this.getSourceVariant(t);
                if (void 0 === n) {
                    const n = this.discriminator, i = this.defaultLayout;
                    let o = 0;
                    return this.usesPrefixDiscriminator && (o = n.layout.span), n.encode(t[n.property], e, r), o + i.encode(t[i.property], e, r + o);
                }
                return n.encode(t, e, r);
            }
            addVariant(t, e, r) {
                const n = new R(this, t, e, r);
                return this.registry[t] = n, n;
            }
            getVariant(t, e = 0) {
                let r;
                return r = t instanceof Uint8Array ? this.discriminator.decode(t, e) : t, this.registry[r];
            }
        }
        e.Union = k;
        class R extends i {
            constructor(t, e, r, n){
                if (!(t instanceof k)) throw new TypeError("union must be a Union");
                if (!Number.isInteger(e) || 0 > e) throw new TypeError("variant must be a (non-negative) integer");
                if ("string" == typeof r && void 0 === n && (n = r, r = null), r) {
                    if (!(r instanceof i)) throw new TypeError("layout must be a Layout");
                    if (null !== t.defaultLayout && 0 <= r.span && r.span > t.defaultLayout.span) throw new Error("variant span exceeds span of containing union");
                    if ("string" != typeof n) throw new TypeError("variant must have a String property");
                }
                let o = t.span;
                0 > t.span && (o = r ? r.span : 0, 0 <= o && t.usesPrefixDiscriminator && (o += t.discriminator.layout.span)), super(o, n), this.union = t, this.variant = e, this.layout = r || null;
            }
            getSpan(t, e = 0) {
                if (0 <= this.span) return this.span;
                let r = 0;
                this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span);
                let n = 0;
                return this.layout && (n = this.layout.getSpan(t, e + r)), r + n;
            }
            decode(t, e = 0) {
                const r = this.makeDestinationObject();
                if (this !== this.union.getVariant(t, e)) throw new Error("variant mismatch");
                let n = 0;
                return this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout ? r[this.property] = this.layout.decode(t, e + n) : this.property ? r[this.property] = !0 : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant), r;
            }
            encode(t, e, r = 0) {
                let n = 0;
                if (this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span), this.layout && !Object.prototype.hasOwnProperty.call(t, this.property)) throw new TypeError("variant lacks property " + this.property);
                this.union.discriminator.encode(this.variant, e, r);
                let i = n;
                if (this.layout && (this.layout.encode(t[this.property], e, r + n), i += this.layout.getSpan(e, r + n), 0 <= this.union.span && i > this.union.span)) throw new Error("encoded variant overruns containing union");
                return i;
            }
            fromArray(t) {
                if (this.layout) return this.layout.fromArray(t);
            }
        }
        function B(t) {
            return 0 > t && (t += 4294967296), t;
        }
        e.VariantLayout = R;
        class T extends i {
            constructor(t, e, r){
                if (!(t instanceof f || t instanceof u)) throw new TypeError("word must be a UInt or UIntBE layout");
                if ("string" == typeof e && void 0 === r && (r = e, e = !1), 4 < t.span) throw new RangeError("word cannot exceed 32 bits");
                super(t.span, r), this.word = t, this.msb = !!e, this.fields = [];
                let n = 0;
                this._packedSetValue = function(t) {
                    return n = B(t), this;
                }, this._packedGetValue = function() {
                    return n;
                };
            }
            decode(t, e = 0) {
                const r = this.makeDestinationObject(), n = this.word.decode(t, e);
                this._packedSetValue(n);
                for (const e of this.fields)void 0 !== e.property && (r[e.property] = e.decode(t));
                return r;
            }
            encode(t, e, r = 0) {
                const n = this.word.decode(e, r);
                this._packedSetValue(n);
                for (const e of this.fields)if (void 0 !== e.property) {
                    const r = t[e.property];
                    void 0 !== r && e.encode(r);
                }
                return this.word.encode(this._packedGetValue(), e, r);
            }
            addField(t, e) {
                const r = new U(this, t, e);
                return this.fields.push(r), r;
            }
            addBoolean(t) {
                const e = new O(this, t);
                return this.fields.push(e), e;
            }
            fieldFor(t) {
                if ("string" != typeof t) throw new TypeError("property must be string");
                for (const e of this.fields)if (e.property === t) return e;
            }
        }
        e.BitStructure = T;
        class U {
            constructor(t, e, r){
                if (!(t instanceof T)) throw new TypeError("container must be a BitStructure");
                if (!Number.isInteger(e) || 0 >= e) throw new TypeError("bits must be positive integer");
                const n = 8 * t.span, i = t.fields.reduce((t, e)=>t + e.bits, 0);
                if (e + i > n) throw new Error("bits too long for span remainder (" + (n - i) + " of " + n + " remain)");
                this.container = t, this.bits = e, this.valueMask = (1 << e) - 1, 32 === e && (this.valueMask = 4294967295), this.start = i, this.container.msb && (this.start = n - i - e), this.wordMask = B(this.valueMask << this.start), this.property = r;
            }
            decode(t, e) {
                return B(this.container._packedGetValue() & this.wordMask) >>> this.start;
            }
            encode(t) {
                if ("number" != typeof t || !Number.isInteger(t) || t !== B(t & this.valueMask)) throw new TypeError(o("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
                const e = this.container._packedGetValue(), r = B(t << this.start);
                this.container._packedSetValue(B(e & ~this.wordMask) | r);
            }
        }
        e.BitField = U;
        class O extends U {
            constructor(t, e){
                super(t, 1, e);
            }
            decode(t, e) {
                return !!super.decode(t, e);
            }
            encode(t) {
                "boolean" == typeof t && (t = +t), super.encode(t);
            }
        }
        e.Boolean = O;
        class P extends i {
            constructor(t, e){
                if (!(t instanceof s && t.isCount() || Number.isInteger(t) && 0 <= t)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
                let r = -1;
                t instanceof s || (r = t), super(r, e), this.length = t;
            }
            getSpan(t, e) {
                let r = this.span;
                return 0 > r && (r = this.length.decode(t, e)), r;
            }
            decode(t, e = 0) {
                let r = this.span;
                return 0 > r && (r = this.length.decode(t, e)), n(t).slice(e, e + r);
            }
            encode(t, e, r) {
                let i = this.length;
                if (this.length instanceof s && (i = t.length), !(t instanceof Uint8Array && i === t.length)) throw new TypeError(o("Blob.encode", this) + " requires (length " + i + ") Uint8Array as src");
                if (r + i > e.length) throw new RangeError("encoding overruns Uint8Array");
                const a = n(t);
                return n(e).write(a.toString("hex"), r, i, "hex"), this.length instanceof s && this.length.encode(i, e, r), i;
            }
        }
        e.Blob = P;
        class L extends i {
            constructor(t){
                super(-1, t);
            }
            getSpan(t, e = 0) {
                r(t);
                let n = e;
                for(; n < t.length && 0 !== t[n];)n += 1;
                return 1 + n - e;
            }
            decode(t, e = 0) {
                const r = this.getSpan(t, e);
                return n(t).slice(e, e + r - 1).toString("utf-8");
            }
            encode(t, e, r = 0) {
                "string" != typeof t && (t = String(t));
                const i = Wt.Buffer.from(t, "utf8"), o = i.length;
                if (r + o > e.length) throw new RangeError("encoding overruns Buffer");
                const s = n(e);
                return i.copy(s, r), s[r + o] = 0, o + 1;
            }
        }
        e.CString = L;
        class N extends i {
            constructor(t, e){
                if ("string" == typeof t && void 0 === e && (e = t, t = void 0), void 0 === t) t = -1;
                else if (!Number.isInteger(t)) throw new TypeError("maxSpan must be an integer");
                super(-1, e), this.maxSpan = t;
            }
            getSpan(t, e = 0) {
                return r(t), t.length - e;
            }
            decode(t, e = 0) {
                const r = this.getSpan(t, e);
                if (0 <= this.maxSpan && this.maxSpan < r) throw new RangeError("text length exceeds maxSpan");
                return n(t).slice(e, e + r).toString("utf-8");
            }
            encode(t, e, r = 0) {
                "string" != typeof t && (t = String(t));
                const i = Wt.Buffer.from(t, "utf8"), o = i.length;
                if (0 <= this.maxSpan && this.maxSpan < o) throw new RangeError("text length exceeds maxSpan");
                if (r + o > e.length) throw new RangeError("encoding overruns Buffer");
                return i.copy(n(e), r), o;
            }
        }
        e.UTF8 = N;
        class z extends i {
            constructor(t, e){
                super(0, e), this.value = t;
            }
            decode(t, e) {
                return this.value;
            }
            encode(t, e, r) {
                return 0;
            }
        }
        e.Constant = z, e.greedy = (t, e)=>new a(t, e), e.offset = (t, e, r)=>new h(t, e, r), e.u8 = (t)=>new f(1, t), e.u16 = (t)=>new f(2, t), e.u24 = (t)=>new f(3, t), e.u32 = (t)=>new f(4, t), e.u40 = (t)=>new f(5, t), e.u48 = (t)=>new f(6, t), e.nu64 = (t)=>new m(t), e.u16be = (t)=>new u(2, t), e.u24be = (t)=>new u(3, t), e.u32be = (t)=>new u(4, t), e.u40be = (t)=>new u(5, t), e.u48be = (t)=>new u(6, t), e.nu64be = (t)=>new y(t), e.s8 = (t)=>new c(1, t), e.s16 = (t)=>new c(2, t), e.s24 = (t)=>new c(3, t), e.s32 = (t)=>new c(4, t), e.s40 = (t)=>new c(5, t), e.s48 = (t)=>new c(6, t), e.ns64 = (t)=>new g(t), e.s16be = (t)=>new d(2, t), e.s24be = (t)=>new d(3, t), e.s32be = (t)=>new d(4, t), e.s40be = (t)=>new d(5, t), e.s48be = (t)=>new d(6, t), e.ns64be = (t)=>new v(t), e.f32 = (t)=>new w(t), e.f32be = (t)=>new M(t), e.f64 = (t)=>new _(t), e.f64be = (t)=>new A(t), e.struct = (t, e, r)=>new E(t, e, r), e.bits = (t, e, r)=>new T(t, e, r), e.seq = (t, e, r)=>new S(t, e, r), e.union = (t, e, r)=>new k(t, e, r), e.unionLayoutDiscriminator = (t, e)=>new I(t, e), e.blob = (t, e)=>new P(t, e), e.cstr = (t)=>new L(t), e.utf8 = (t, e)=>new N(t, e), e.constant = (t, e)=>new z(t, e);
    });
    $t(ve), ve.s16, ve.s8, ve.nu64be, ve.u48be, ve.u40be, ve.u32be, ve.u24be, ve.u16be;
    var we = ve.nu64;
    ve.u48, ve.u40;
    var Me = ve.u32;
    ve.u24;
    var _e = ve.u16, Ae = ve.u8, Se = ve.offset;
    ve.greedy, ve.Constant, ve.UTF8, ve.CString, ve.Blob, ve.Boolean, ve.BitField, ve.BitStructure, ve.VariantLayout, ve.Union, ve.UnionLayoutDiscriminator, ve.UnionDiscriminator, ve.Structure, ve.Sequence, ve.DoubleBE, ve.Double, ve.FloatBE, ve.Float, ve.NearInt64BE, ve.NearInt64, ve.NearUInt64BE, ve.NearUInt64, ve.IntBE, ve.Int, ve.UIntBE, ve.UInt, ve.OffsetLayout, ve.GreedyCount, ve.ExternalLayout, ve.bindConstructorLayout, ve.nameWithProperty, ve.Layout, ve.uint8ArrayToBuffer, ve.checkUint8Array, ve.constant, ve.utf8, ve.cstr;
    var Ee = ve.blob;
    ve.unionLayoutDiscriminator, ve.union;
    var xe = ve.seq;
    ve.bits;
    var Ie = ve.struct;
    ve.f64be, ve.f64, ve.f32be, ve.f32, ve.ns64be, ve.s48be, ve.s40be, ve.s32be, ve.s24be, ve.s16be;
    var ke = ve.ns64;
    ve.s48, ve.s40, ve.s32, ve.s24;
    class Re extends TypeError {
        constructor(t, e){
            let r;
            const { message: n , ...i } = t, { path: o  } = t;
            super(0 === o.length ? n : "At path: " + o.join(".") + " -- " + n), Object.assign(this, i), this.name = this.constructor.name, this.failures = ()=>{
                var n;
                return null != (n = r) ? n : r = [
                    t,
                    ...e()
                ];
            };
        }
    }
    function Be(t) {
        return "object" == typeof t && null != t;
    }
    function Te(t) {
        return "string" == typeof t ? JSON.stringify(t) : "" + t;
    }
    function Ue(t, e, r, n) {
        if (!0 === t) return;
        !1 === t ? t = {} : "string" == typeof t && (t = {
            message: t
        });
        const { path: i , branch: o  } = e, { type: s  } = r, { refinement: a , message: h = "Expected a value of type `" + s + "`" + (a ? " with refinement `" + a + "`" : "") + ", but received: `" + Te(n) + "`"  } = t;
        return {
            value: n,
            type: s,
            refinement: a,
            key: i[i.length - 1],
            path: i,
            branch: o,
            ...t,
            message: h
        };
    }
    function* Oe(t, e, r, n) {
        var i;
        Be(i = t) && "function" == typeof i[Symbol.iterator] || (t = [
            t
        ]);
        for (const i of t){
            const t = Ue(i, e, r, n);
            t && (yield t);
        }
    }
    function* Pe(t, e, r = {}) {
        const { path: n = [] , branch: i = [
            t
        ] , coerce: o = !1 , mask: s = !1  } = r, a = {
            path: n,
            branch: i
        };
        if (o && (t = e.coercer(t, a), s && "type" !== e.type && Be(e.schema) && Be(t) && !Array.isArray(t))) for(const r in t)void 0 === e.schema[r] && delete t[r];
        let h = !0;
        for (const r of e.validator(t, a))h = !1, yield [
            r,
            void 0
        ];
        for (let [r, f, u] of e.entries(t, a)){
            const e = Pe(f, u, {
                path: void 0 === r ? n : [
                    ...n,
                    r
                ],
                branch: void 0 === r ? i : [
                    ...i,
                    f
                ],
                coerce: o,
                mask: s
            });
            for (const n of e)n[0] ? (h = !1, yield [
                n[0],
                void 0
            ]) : o && (f = n[1], void 0 === r ? t = f : t instanceof Map ? t.set(r, f) : t instanceof Set ? t.add(f) : Be(t) && (t[r] = f));
        }
        if (h) for (const r of e.refiner(t, a))h = !1, yield [
            r,
            void 0
        ];
        h && (yield [
            void 0,
            t
        ]);
    }
    class Le {
        constructor(t){
            const { type: e , schema: r , validator: n , refiner: i , coercer: o = (t)=>t , entries: s = function*() {}  } = t;
            this.type = e, this.schema = r, this.entries = s, this.coercer = o, this.validator = n ? (t, e)=>Oe(n(t, e), e, this, t) : ()=>[], this.refiner = i ? (t, e)=>Oe(i(t, e), e, this, t) : ()=>[];
        }
        assert(t) {
            return function(t, e) {
                const r = Ce(t, e);
                if (r[0]) throw r[0];
            }(t, this);
        }
        create(t) {
            return Ne(t, this);
        }
        is(t) {
            return ze(t, this);
        }
        mask(t) {
            return function(t, e) {
                const r = Ce(t, e, {
                    coerce: !0,
                    mask: !0
                });
                if (r[0]) throw r[0];
                return r[1];
            }(t, this);
        }
        validate(t, e = {}) {
            return Ce(t, this, e);
        }
    }
    function Ne(t, e) {
        const r = Ce(t, e, {
            coerce: !0
        });
        if (r[0]) throw r[0];
        return r[1];
    }
    function ze(t, e) {
        return !Ce(t, e)[0];
    }
    function Ce(t, e, r = {}) {
        const n = Pe(t, e, r), i = function(t) {
            const { done: e , value: r  } = t.next();
            return e ? void 0 : r;
        }(n);
        if (i[0]) return [
            new Re(i[0], function*() {
                for (const t of n)t[0] && (yield t[0]);
            }),
            void 0
        ];
        return [
            void 0,
            i[1]
        ];
    }
    function qe(t, e) {
        return new Le({
            type: t,
            schema: null,
            validator: e
        });
    }
    function je(t) {
        return new Le({
            type: "array",
            schema: t,
            *entries (e) {
                if (t && Array.isArray(e)) for (const [r, n] of e.entries())yield [
                    r,
                    n,
                    t
                ];
            },
            coercer: (t)=>Array.isArray(t) ? t.slice() : t,
            validator: (t)=>Array.isArray(t) || "Expected an array value, but received: " + Te(t)
        });
    }
    function De() {
        return qe("boolean", (t)=>"boolean" == typeof t);
    }
    function Fe(t) {
        return qe("instance", (e)=>e instanceof t || "Expected a `" + t.name + "` instance, but received: " + Te(e));
    }
    function Ke(t) {
        const e = Te(t), r = typeof t;
        return new Le({
            type: "literal",
            schema: "string" === r || "number" === r || "boolean" === r ? t : null,
            validator: (r)=>r === t || "Expected the literal `" + e + "`, but received: " + Te(r)
        });
    }
    function Ye(t) {
        return new Le({
            ...t,
            validator: (e, r)=>null === e || t.validator(e, r),
            refiner: (e, r)=>null === e || t.refiner(e, r)
        });
    }
    function Ve() {
        return qe("number", (t)=>"number" == typeof t && !isNaN(t) || "Expected a number, but received: " + Te(t));
    }
    function We(t) {
        return new Le({
            ...t,
            validator: (e, r)=>void 0 === e || t.validator(e, r),
            refiner: (e, r)=>void 0 === e || t.refiner(e, r)
        });
    }
    function He(t, e) {
        return new Le({
            type: "record",
            schema: null,
            *entries (r) {
                if (Be(r)) for(const n in r){
                    const i = r[n];
                    yield [
                        n,
                        n,
                        t
                    ], yield [
                        n,
                        i,
                        e
                    ];
                }
            },
            validator: (t)=>Be(t) || "Expected an object, but received: " + Te(t)
        });
    }
    function $e() {
        return qe("string", (t)=>"string" == typeof t || "Expected a string, but received: " + Te(t));
    }
    function Ge(t) {
        const e = qe("never", ()=>!1);
        return new Le({
            type: "tuple",
            schema: null,
            *entries (r) {
                if (Array.isArray(r)) {
                    const n = Math.max(t.length, r.length);
                    for(let i = 0; i < n; i++)yield [
                        i,
                        r[i],
                        t[i] || e
                    ];
                }
            },
            validator: (t)=>Array.isArray(t) || "Expected an array, but received: " + Te(t)
        });
    }
    function Ze(t) {
        const e = Object.keys(t);
        return new Le({
            type: "type",
            schema: t,
            *entries (r) {
                if (Be(r)) for (const n of e)yield [
                    n,
                    r[n],
                    t[n]
                ];
            },
            validator: (t)=>Be(t) || "Expected an object, but received: " + Te(t)
        });
    }
    function Je(t) {
        const e = t.map((t)=>t.type).join(" | ");
        return new Le({
            type: "union",
            schema: null,
            validator (r, n) {
                const i = [];
                for (const e of t){
                    const [...t] = Pe(r, e, n), [o] = t;
                    if (!o[0]) return [];
                    for (const [e] of t)e && i.push(e);
                }
                return [
                    "Expected the value to satisfy a union of `" + e + "`, but received: " + Te(r),
                    ...i
                ];
            }
        });
    }
    function Xe() {
        return qe("unknown", ()=>!0);
    }
    function Qe(t, e, r) {
        return new Le({
            ...t,
            coercer: (n, i)=>ze(n, e) ? t.coercer(r(n, i), i) : t.coercer(n, i)
        });
    }
    var tr = Gt(function(t) {
        t.exports = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }, t.exports.__esModule = !0, t.exports.default = t.exports;
    });
    $t(tr);
    var er = Gt(function(t) {
        t.exports = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }, t.exports.__esModule = !0, t.exports.default = t.exports;
    });
    $t(er);
    var rr = Gt(function(t) {
        function e(r, n) {
            return t.exports = e = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t;
            }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r, n);
        }
        t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
    });
    $t(rr);
    var nr = Gt(function(t) {
        t.exports = function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e && rr(t, e);
        }, t.exports.__esModule = !0, t.exports.default = t.exports;
    });
    $t(nr);
    var ir = Gt(function(t) {
        function e(r) {
            return t.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r);
        }
        t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
    });
    $t(ir);
    var or = Gt(function(t) {
        t.exports = function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        }, t.exports.__esModule = !0, t.exports.default = t.exports;
    });
    $t(or);
    var sr = Gt(function(t) {
        var e = ir.default;
        t.exports = function(t, r) {
            if (r && ("object" === e(r) || "function" == typeof r)) return r;
            if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
            return or(t);
        }, t.exports.__esModule = !0, t.exports.default = t.exports;
    });
    $t(sr);
    var ar = Gt(function(t) {
        function e(r) {
            return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
            }, t.exports.__esModule = !0, t.exports.default = t.exports, e(r);
        }
        t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
    });
    $t(ar);
    var hr = Gt(function(t) {
        function e(t, e) {
            for(var r = 0; r < e.length; r++){
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
        }
        t.exports = function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), Object.defineProperty(t, "prototype", {
                writable: !1
            }), t;
        }, t.exports.__esModule = !0, t.exports.default = t.exports;
    });
    $t(hr);
    var fr = Gt(function(t) {
        var e = Object.prototype.hasOwnProperty, r = "~";
        function n() {}
        function i(t, e, r) {
            this.fn = t, this.context = e, this.once = r || !1;
        }
        function o(t, e, n, o, s) {
            if ("function" != typeof n) throw new TypeError("The listener must be a function");
            var a = new i(n, o || t, s), h = r ? r + e : e;
            return t._events[h] ? t._events[h].fn ? t._events[h] = [
                t._events[h],
                a
            ] : t._events[h].push(a) : (t._events[h] = a, t._eventsCount++), t;
        }
        function s(t, e) {
            0 == --t._eventsCount ? t._events = new n : delete t._events[e];
        }
        function a() {
            this._events = new n, this._eventsCount = 0;
        }
        Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (r = !1)), a.prototype.eventNames = function() {
            var t, n, i = [];
            if (0 === this._eventsCount) return i;
            for(n in t = this._events)e.call(t, n) && i.push(r ? n.slice(1) : n);
            return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i;
        }, a.prototype.listeners = function(t) {
            var e = r ? r + t : t, n = this._events[e];
            if (!n) return [];
            if (n.fn) return [
                n.fn
            ];
            for(var i = 0, o = n.length, s = new Array(o); i < o; i++)s[i] = n[i].fn;
            return s;
        }, a.prototype.listenerCount = function(t) {
            var e = r ? r + t : t, n = this._events[e];
            return n ? n.fn ? 1 : n.length : 0;
        }, a.prototype.emit = function(t, e, n, i, o, s) {
            var a = r ? r + t : t;
            if (!this._events[a]) return !1;
            var h, f, u = this._events[a], c = arguments.length;
            if (u.fn) {
                switch(u.once && this.removeListener(t, u.fn, void 0, !0), c){
                    case 1:
                        return u.fn.call(u.context), !0;
                    case 2:
                        return u.fn.call(u.context, e), !0;
                    case 3:
                        return u.fn.call(u.context, e, n), !0;
                    case 4:
                        return u.fn.call(u.context, e, n, i), !0;
                    case 5:
                        return u.fn.call(u.context, e, n, i, o), !0;
                    case 6:
                        return u.fn.call(u.context, e, n, i, o, s), !0;
                }
                for(f = 1, h = new Array(c - 1); f < c; f++)h[f - 1] = arguments[f];
                u.fn.apply(u.context, h);
            } else {
                var d, l = u.length;
                for(f = 0; f < l; f++)switch(u[f].once && this.removeListener(t, u[f].fn, void 0, !0), c){
                    case 1:
                        u[f].fn.call(u[f].context);
                        break;
                    case 2:
                        u[f].fn.call(u[f].context, e);
                        break;
                    case 3:
                        u[f].fn.call(u[f].context, e, n);
                        break;
                    case 4:
                        u[f].fn.call(u[f].context, e, n, i);
                        break;
                    default:
                        if (!h) for(d = 1, h = new Array(c - 1); d < c; d++)h[d - 1] = arguments[d];
                        u[f].fn.apply(u[f].context, h);
                }
            }
            return !0;
        }, a.prototype.on = function(t, e, r) {
            return o(this, t, e, r, !1);
        }, a.prototype.once = function(t, e, r) {
            return o(this, t, e, r, !0);
        }, a.prototype.removeListener = function(t, e, n, i) {
            var o = r ? r + t : t;
            if (!this._events[o]) return this;
            if (!e) return s(this, o), this;
            var a = this._events[o];
            if (a.fn) a.fn !== e || i && !a.once || n && a.context !== n || s(this, o);
            else {
                for(var h = 0, f = [], u = a.length; h < u; h++)(a[h].fn !== e || i && !a[h].once || n && a[h].context !== n) && f.push(a[h]);
                f.length ? this._events[o] = 1 === f.length ? f[0] : f : s(this, o);
            }
            return this;
        }, a.prototype.removeAllListeners = function(t) {
            var e;
            return t ? (e = r ? r + t : t, this._events[e] && s(this, e)) : (this._events = new n, this._eventsCount = 0), this;
        }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = r, a.EventEmitter = a, t.exports = a;
    }), ur = Gt(function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function(t, e) {
            return new h(t, e);
        };
        var r = tr(er), n = tr(hr), i = tr(nr), o = tr(sr), s = tr(ar);
        function a(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                } catch (t) {
                    return !1;
                }
            }();
            return function() {
                var r, n = (0, s.default)(t);
                if (e) {
                    var i = (0, s.default)(this).constructor;
                    r = Reflect.construct(n, arguments, i);
                } else r = n.apply(this, arguments);
                return (0, o.default)(this, r);
            };
        }
        var h = function(t) {
            (0, i.default)(o, t);
            var e = a(o);
            function o(t, n, i) {
                var s;
                return (0, r.default)(this, o), (s = e.call(this)).socket = new window.WebSocket(t, i), s.socket.onopen = function() {
                    return s.emit("open");
                }, s.socket.onmessage = function(t) {
                    return s.emit("message", t.data);
                }, s.socket.onerror = function(t) {
                    return s.emit("error", t);
                }, s.socket.onclose = function(t) {
                    s.emit("close", t.code, t.reason);
                }, s;
            }
            return (0, n.default)(o, [
                {
                    key: "send",
                    value: function(t, e, r) {
                        var n = r || e;
                        try {
                            this.socket.send(t), n();
                        } catch (t) {
                            n(t);
                        }
                    }
                },
                {
                    key: "close",
                    value: function(t, e) {
                        this.socket.close(t, e);
                    }
                },
                {
                    key: "addEventListener",
                    value: function(t, e, r) {
                        this.socket.addEventListener(t, e, r);
                    }
                }
            ]), o;
        }(fr.EventEmitter);
    });
    $t(ur);
    var cr = Gt(function(t) {
        var e = function(t) {
            var e, r = Object.prototype, n = r.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {}, o = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator", a = i.toStringTag || "@@toStringTag";
            function h(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e];
            }
            try {
                h({}, "");
            } catch (t) {
                h = function(t, e, r) {
                    return t[e] = r;
                };
            }
            function f(t, e, r, n) {
                var i = e && e.prototype instanceof m ? e : m, o = Object.create(i.prototype), s = new k(n || []);
                return o._invoke = function(t, e, r) {
                    var n = c;
                    return function(i, o) {
                        if (n === l) throw new Error("Generator is already running");
                        if (n === p) {
                            if ("throw" === i) throw o;
                            return B();
                        }
                        for(r.method = i, r.arg = o;;){
                            var s = r.delegate;
                            if (s) {
                                var a = E(s, r);
                                if (a) {
                                    if (a === b) continue;
                                    return a;
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (n === c) throw n = p, r.arg;
                                r.dispatchException(r.arg);
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = l;
                            var h = u(t, e, r);
                            if ("normal" === h.type) {
                                if (n = r.done ? p : d, h.arg === b) continue;
                                return {
                                    value: h.arg,
                                    done: r.done
                                };
                            }
                            "throw" === h.type && (n = p, r.method = "throw", r.arg = h.arg);
                        }
                    };
                }(t, r, s), o;
            }
            function u(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    };
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    };
                }
            }
            t.wrap = f;
            var c = "suspendedStart", d = "suspendedYield", l = "executing", p = "completed", b = {};
            function m() {}
            function y() {}
            function g() {}
            var v = {};
            v[o] = function() {
                return this;
            };
            var w = Object.getPrototypeOf, M = w && w(w(R([])));
            M && M !== r && n.call(M, o) && (v = M);
            var _ = g.prototype = m.prototype = Object.create(v);
            function A(t) {
                [
                    "next",
                    "throw",
                    "return"
                ].forEach(function(e) {
                    h(t, e, function(t) {
                        return this._invoke(e, t);
                    });
                });
            }
            function S(t, e) {
                function r(i, o, s, a) {
                    var h = u(t[i], t, o);
                    if ("throw" !== h.type) {
                        var f = h.arg, c = f.value;
                        return c && "object" == typeof c && n.call(c, "__await") ? e.resolve(c.__await).then(function(t) {
                            r("next", t, s, a);
                        }, function(t) {
                            r("throw", t, s, a);
                        }) : e.resolve(c).then(function(t) {
                            f.value = t, s(f);
                        }, function(t) {
                            return r("throw", t, s, a);
                        });
                    }
                    a(h.arg);
                }
                var i;
                this._invoke = function(t, n) {
                    function o() {
                        return new e(function(e, i) {
                            r(t, n, e, i);
                        });
                    }
                    return i = i ? i.then(o, o) : o();
                };
            }
            function E(t, r) {
                var n = t.iterator[r.method];
                if (n === e) {
                    if (r.delegate = null, "throw" === r.method) {
                        if (t.iterator.return && (r.method = "return", r.arg = e, E(t, r), "throw" === r.method)) return b;
                        r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }
                    return b;
                }
                var i = u(n, t.iterator, r.arg);
                if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, b;
                var o = i.arg;
                return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, b) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, b);
            }
            function x(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
            }
            function I(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e;
            }
            function k(t) {
                this.tryEntries = [
                    {
                        tryLoc: "root"
                    }
                ], t.forEach(x, this), this.reset(!0);
            }
            function R(t) {
                if (t) {
                    var r = t[o];
                    if (r) return r.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var i = -1, s = function r() {
                            for(; ++i < t.length;)if (n.call(t, i)) return r.value = t[i], r.done = !1, r;
                            return r.value = e, r.done = !0, r;
                        };
                        return s.next = s;
                    }
                }
                return {
                    next: B
                };
            }
            function B() {
                return {
                    value: e,
                    done: !0
                };
            }
            return y.prototype = _.constructor = g, g.constructor = y, y.displayName = h(g, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name));
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, h(t, a, "GeneratorFunction")), t.prototype = Object.create(_), t;
            }, t.awrap = function(t) {
                return {
                    __await: t
                };
            }, A(S.prototype), S.prototype[s] = function() {
                return this;
            }, t.AsyncIterator = S, t.async = function(e, r, n, i, o) {
                void 0 === o && (o = Promise);
                var s = new S(f(e, r, n, i), o);
                return t.isGeneratorFunction(r) ? s : s.next().then(function(t) {
                    return t.done ? t.value : s.next();
                });
            }, A(_), h(_, a, "Generator"), _[o] = function() {
                return this;
            }, _.toString = function() {
                return "[object Generator]";
            }, t.keys = function(t) {
                var e = [];
                for(var r in t)e.push(r);
                return e.reverse(), function r() {
                    for(; e.length;){
                        var n = e.pop();
                        if (n in t) return r.value = n, r.done = !1, r;
                    }
                    return r.done = !0, r;
                };
            }, t.values = R, k.prototype = {
                constructor: k,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(I), !t) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var r = this;
                    function i(n, i) {
                        return a.type = "throw", a.arg = t, r.next = n, i && (r.method = "next", r.arg = e), !!i;
                    }
                    for(var o = this.tryEntries.length - 1; o >= 0; --o){
                        var s = this.tryEntries[o], a = s.completion;
                        if ("root" === s.tryLoc) return i("end");
                        if (s.tryLoc <= this.prev) {
                            var h = n.call(s, "catchLoc"), f = n.call(s, "finallyLoc");
                            if (h && f) {
                                if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                                if (this.prev < s.finallyLoc) return i(s.finallyLoc);
                            } else if (h) {
                                if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                            } else {
                                if (!f) throw new Error("try statement without catch or finally");
                                if (this.prev < s.finallyLoc) return i(s.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for(var r = this.tryEntries.length - 1; r >= 0; --r){
                        var i = this.tryEntries[r];
                        if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break;
                        }
                    }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                    var s = o ? o.completion : {};
                    return s.type = t, s.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, b) : this.complete(s);
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), b;
                },
                finish: function(t) {
                    for(var e = this.tryEntries.length - 1; e >= 0; --e){
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), I(r), b;
                    }
                },
                catch: function(t) {
                    for(var e = this.tryEntries.length - 1; e >= 0; --e){
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var i = n.arg;
                                I(r);
                            }
                            return i;
                        }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function(t, r, n) {
                    return this.delegate = {
                        iterator: R(t),
                        resultName: r,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = e), b;
                }
            }, t;
        }(t.exports);
        try {
            regeneratorRuntime = e;
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(e);
        }
    }), dr = Gt(function(t) {
        function e(t, e, r, n, i, o, s) {
            try {
                var a = t[o](s), h = a.value;
            } catch (t) {
                return void r(t);
            }
            a.done ? e(h) : Promise.resolve(h).then(n, i);
        }
        t.exports = function(t) {
            return function() {
                var r = this, n = arguments;
                return new Promise(function(i, o) {
                    var s = t.apply(r, n);
                    function a(t) {
                        e(s, i, o, a, h, "next", t);
                    }
                    function h(t) {
                        e(s, i, o, a, h, "throw", t);
                    }
                    a(void 0);
                });
            };
        }, t.exports.__esModule = !0, t.exports.default = t.exports;
    });
    $t(dr);
    /*!
  Copyright (C) 2013-2017 by Andrea Giammarchi - @WebReflection

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.

  */ var lr = "~", pr = "\\x" + ("0" + lr.charCodeAt(0).toString(16)).slice(-2), br = "\\" + pr, mr = new RegExp(pr, "g"), yr = new RegExp(br, "g"), gr = new RegExp("(?:^|([^\\\\]))" + br), vr = [].indexOf || function(t) {
        for(var e = this.length; e-- && this[e] !== t;);
        return e;
    }, wr = String;
    function Mr(t, e, r) {
        return e instanceof Array ? function(t, e, r) {
            for(var n = 0, i = e.length; n < i; n++)e[n] = Mr(t, e[n], r);
            return e;
        }(t, e, r) : e instanceof wr ? e.length ? r.hasOwnProperty(e) ? r[e] : r[e] = function(t, e) {
            for(var r = 0, n = e.length; r < n; t = t[e[r++].replace(yr, lr)]);
            return t;
        }(t, e.split(lr)) : t : e instanceof Object ? function(t, e, r) {
            for(var n in e)e.hasOwnProperty(n) && (e[n] = Mr(t, e[n], r));
            return e;
        }(t, e, r) : e;
    }
    var _r = {
        stringify: function(t, e, r, n) {
            return _r.parser.stringify(t, function(t, e, r) {
                var n, i, o = !1, s = !!e, a = [], h = [
                    t
                ], f = [
                    t
                ], u = [
                    r ? lr : "[Circular]"
                ], c = t, d = 1;
                return s && (i = "object" == typeof e ? function(t, r) {
                    return "" !== t && e.indexOf(t) < 0 ? void 0 : r;
                } : e), function(t, e) {
                    return s && (e = i.call(this, t, e)), o ? (c !== this && (n = d - vr.call(h, this) - 1, d -= n, h.splice(d, h.length), a.splice(d - 1, a.length), c = this), "object" == typeof e && e ? (vr.call(h, e) < 0 && h.push(c = e), d = h.length, (n = vr.call(f, e)) < 0 ? (n = f.push(e) - 1, r ? (a.push(("" + t).replace(mr, pr)), u[n] = lr + a.join(lr)) : u[n] = u[0]) : e = u[n]) : "string" == typeof e && r && (e = e.replace(pr, br).replace(lr, pr))) : o = !0, e;
                };
            }(t, e, !n), r);
        },
        parse: function(t, e) {
            return _r.parser.parse(t, function(t) {
                return function(e, r) {
                    var n = "string" == typeof r;
                    return n && r.charAt(0) === lr ? new wr(r.slice(1)) : ("" === e && (r = Mr(r, r, {})), n && (r = r.replace(gr, "$1~").replace(br, pr)), t ? t.call(this, e, r) : r);
                };
            }(e));
        },
        parser: JSON
    }, Ar = _r, Sr = Gt(function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = tr(cr), n = tr(dr), i = tr(ir), o = tr(er), s = tr(hr), a = tr(nr), h = tr(sr), f = tr(ar), u = tr(Ar);
        function c(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                } catch (t) {
                    return !1;
                }
            }();
            return function() {
                var r, n = (0, f.default)(t);
                if (e) {
                    var i = (0, f.default)(this).constructor;
                    r = Reflect.construct(n, arguments, i);
                } else r = n.apply(this, arguments);
                return (0, h.default)(this, r);
            };
        }
        var d = function(t, e) {
            var r = {};
            for(var n in t)Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for(n = Object.getOwnPropertySymbols(t); i < n.length; i++)e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
            }
            return r;
        }, l = function(t) {
            (0, a.default)(b, t);
            var e, h, f, l, p = c(b);
            function b(t) {
                var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ws://localhost:8080", n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = arguments.length > 3 ? arguments[3] : void 0;
                (0, o.default)(this, b);
                var s = n.autoconnect, a = void 0 === s || s, h = n.reconnect, f = void 0 === h || h, u = n.reconnect_interval, c = void 0 === u ? 1e3 : u, l = n.max_reconnects, m = void 0 === l ? 5 : l, y = d(n, [
                    "autoconnect",
                    "reconnect",
                    "reconnect_interval",
                    "max_reconnects"
                ]);
                return (e = p.call(this)).webSocketFactory = t, e.queue = {}, e.rpc_id = 0, e.address = r, e.autoconnect = a, e.ready = !1, e.reconnect = f, e.reconnect_interval = c, e.max_reconnects = m, e.rest_options = y, e.current_reconnects = 0, e.generate_request_id = i || function() {
                    return ++e.rpc_id;
                }, e.autoconnect && e._connect(e.address, Object.assign({
                    autoconnect: e.autoconnect,
                    reconnect: e.reconnect,
                    reconnect_interval: e.reconnect_interval,
                    max_reconnects: e.max_reconnects
                }, e.rest_options)), e;
            }
            return (0, s.default)(b, [
                {
                    key: "connect",
                    value: function() {
                        this.socket || this._connect(this.address, Object.assign({
                            autoconnect: this.autoconnect,
                            reconnect: this.reconnect,
                            reconnect_interval: this.reconnect_interval,
                            max_reconnects: this.max_reconnects
                        }, this.rest_options));
                    }
                },
                {
                    key: "call",
                    value: function(t, e, r, n) {
                        var o = this;
                        return n || "object" !== (0, i.default)(r) || (n = r, r = null), new Promise(function(i, s) {
                            if (!o.ready) return s(new Error("socket not ready"));
                            var a = o.generate_request_id(t, e), h = {
                                jsonrpc: "2.0",
                                method: t,
                                params: e || null,
                                id: a
                            };
                            o.socket.send(JSON.stringify(h), n, function(t) {
                                if (t) return s(t);
                                o.queue[a] = {
                                    promise: [
                                        i,
                                        s
                                    ]
                                }, r && (o.queue[a].timeout = setTimeout(function() {
                                    delete o.queue[a], s(new Error("reply timeout"));
                                }, r));
                            });
                        });
                    }
                },
                {
                    key: "login",
                    value: (l = (0, n.default)(r.default.mark(function t(e) {
                        var n;
                        return r.default.wrap(function(t) {
                            for(;;)switch(t.prev = t.next){
                                case 0:
                                    return t.next = 2, this.call("rpc.login", e);
                                case 2:
                                    if (n = t.sent) {
                                        t.next = 5;
                                        break;
                                    }
                                    throw new Error("authentication failed");
                                case 5:
                                    return t.abrupt("return", n);
                                case 6:
                                case "end":
                                    return t.stop();
                            }
                        }, t, this);
                    })), function(t) {
                        return l.apply(this, arguments);
                    })
                },
                {
                    key: "listMethods",
                    value: (f = (0, n.default)(r.default.mark(function t() {
                        return r.default.wrap(function(t) {
                            for(;;)switch(t.prev = t.next){
                                case 0:
                                    return t.next = 2, this.call("__listMethods");
                                case 2:
                                    return t.abrupt("return", t.sent);
                                case 3:
                                case "end":
                                    return t.stop();
                            }
                        }, t, this);
                    })), function() {
                        return f.apply(this, arguments);
                    })
                },
                {
                    key: "notify",
                    value: function(t, e) {
                        var r = this;
                        return new Promise(function(n, i) {
                            if (!r.ready) return i(new Error("socket not ready"));
                            var o = {
                                jsonrpc: "2.0",
                                method: t,
                                params: e || null
                            };
                            r.socket.send(JSON.stringify(o), function(t) {
                                if (t) return i(t);
                                n();
                            });
                        });
                    }
                },
                {
                    key: "subscribe",
                    value: (h = (0, n.default)(r.default.mark(function t(e) {
                        var n;
                        return r.default.wrap(function(t) {
                            for(;;)switch(t.prev = t.next){
                                case 0:
                                    return "string" == typeof e && (e = [
                                        e
                                    ]), t.next = 3, this.call("rpc.on", e);
                                case 3:
                                    if (n = t.sent, "string" != typeof e || "ok" === n[e]) {
                                        t.next = 6;
                                        break;
                                    }
                                    throw new Error("Failed subscribing to an event '" + e + "' with: " + n[e]);
                                case 6:
                                    return t.abrupt("return", n);
                                case 7:
                                case "end":
                                    return t.stop();
                            }
                        }, t, this);
                    })), function(t) {
                        return h.apply(this, arguments);
                    })
                },
                {
                    key: "unsubscribe",
                    value: (e = (0, n.default)(r.default.mark(function t(e) {
                        var n;
                        return r.default.wrap(function(t) {
                            for(;;)switch(t.prev = t.next){
                                case 0:
                                    return "string" == typeof e && (e = [
                                        e
                                    ]), t.next = 3, this.call("rpc.off", e);
                                case 3:
                                    if (n = t.sent, "string" != typeof e || "ok" === n[e]) {
                                        t.next = 6;
                                        break;
                                    }
                                    throw new Error("Failed unsubscribing from an event with: " + n);
                                case 6:
                                    return t.abrupt("return", n);
                                case 7:
                                case "end":
                                    return t.stop();
                            }
                        }, t, this);
                    })), function(t) {
                        return e.apply(this, arguments);
                    })
                },
                {
                    key: "close",
                    value: function(t, e) {
                        this.socket.close(t || 1e3, e);
                    }
                },
                {
                    key: "_connect",
                    value: function(t, e) {
                        var r = this;
                        this.socket = this.webSocketFactory(t, e), this.socket.addEventListener("open", function() {
                            r.ready = !0, r.emit("open"), r.current_reconnects = 0;
                        }), this.socket.addEventListener("message", function(t) {
                            var e = t.data;
                            e instanceof ArrayBuffer && (e = at.from(e).toString());
                            try {
                                e = u.default.parse(e);
                            } catch (t) {
                                return;
                            }
                            if (e.notification && r.listeners(e.notification).length) {
                                if (!Object.keys(e.params).length) return r.emit(e.notification);
                                var n = [
                                    e.notification
                                ];
                                if (e.params.constructor === Object) n.push(e.params);
                                else for(var i = 0; i < e.params.length; i++)n.push(e.params[i]);
                                return Promise.resolve().then(function() {
                                    r.emit.apply(r, n);
                                });
                            }
                            if (!r.queue[e.id]) return e.method && e.params ? Promise.resolve().then(function() {
                                r.emit(e.method, e.params);
                            }) : void 0;
                            "error" in e == "result" in e && r.queue[e.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')), r.queue[e.id].timeout && clearTimeout(r.queue[e.id].timeout), e.error ? r.queue[e.id].promise[1](e.error) : r.queue[e.id].promise[0](e.result), delete r.queue[e.id];
                        }), this.socket.addEventListener("error", function(t) {
                            return r.emit("error", t);
                        }), this.socket.addEventListener("close", function(n) {
                            var i = n.code, o = n.reason;
                            r.ready && setTimeout(function() {
                                return r.emit("close", i, o);
                            }, 0), r.ready = !1, r.socket = void 0, 1e3 !== i && (r.current_reconnects++, r.reconnect && (r.max_reconnects > r.current_reconnects || 0 === r.max_reconnects) && setTimeout(function() {
                                return r._connect(t, e);
                            }, r.reconnect_interval));
                        });
                    }
                }
            ]), b;
        }(fr.EventEmitter);
        e.default = l;
    });
    $t(Sr);
    var Er, xr = Gt(function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Client = void 0;
        var r = tr(er), n = tr(nr), i = tr(sr), o = tr(ar), s = tr(ur);
        function a(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                } catch (t) {
                    return !1;
                }
            }();
            return function() {
                var r, n = (0, o.default)(t);
                if (e) {
                    var s = (0, o.default)(this).constructor;
                    r = Reflect.construct(n, arguments, s);
                } else r = n.apply(this, arguments);
                return (0, i.default)(this, r);
            };
        }
        var h = function(t) {
            (0, n.default)(i, t);
            var e = a(i);
            function i() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ws://localhost:8080", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = n.autoconnect, a = void 0 === o || o, h = n.reconnect, f = void 0 === h || h, u = n.reconnect_interval, c = void 0 === u ? 1e3 : u, d = n.max_reconnects, l = void 0 === d ? 5 : d, p = arguments.length > 2 ? arguments[2] : void 0;
                return (0, r.default)(this, i), e.call(this, s.default, t, {
                    autoconnect: a,
                    reconnect: f,
                    reconnect_interval: c,
                    max_reconnects: l
                }, p);
            }
            return i;
        }(tr(Sr).default);
        e.Client = h;
    });
    $t(xr), xr.Client;
    var Ir = new Uint8Array(16);
    function kr() {
        if (!Er && !(Er = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return Er(Ir);
    }
    var Rr = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    function Br(t) {
        return "string" == typeof t && Rr.test(t);
    }
    for(var Tr, Ur, Or = [], Pr = 0; Pr < 256; ++Pr)Or.push((Pr + 256).toString(16).substr(1));
    function Lr(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = (Or[t[e + 0]] + Or[t[e + 1]] + Or[t[e + 2]] + Or[t[e + 3]] + "-" + Or[t[e + 4]] + Or[t[e + 5]] + "-" + Or[t[e + 6]] + Or[t[e + 7]] + "-" + Or[t[e + 8]] + Or[t[e + 9]] + "-" + Or[t[e + 10]] + Or[t[e + 11]] + Or[t[e + 12]] + Or[t[e + 13]] + Or[t[e + 14]] + Or[t[e + 15]]).toLowerCase();
        if (!Br(r)) throw TypeError("Stringified UUID is invalid");
        return r;
    }
    var Nr = 0, zr = 0;
    function Cr(t) {
        if (!Br(t)) throw TypeError("Invalid UUID");
        var e, r = new Uint8Array(16);
        return r[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24, r[1] = e >>> 16 & 255, r[2] = e >>> 8 & 255, r[3] = 255 & e, r[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8, r[5] = 255 & e, r[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8, r[7] = 255 & e, r[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8, r[9] = 255 & e, r[10] = (e = parseInt(t.slice(24, 36), 16)) / 1099511627776 & 255, r[11] = e / 4294967296 & 255, r[12] = e >>> 24 & 255, r[13] = e >>> 16 & 255, r[14] = e >>> 8 & 255, r[15] = 255 & e, r;
    }
    function qr(t, e, r) {
        function n(t, n, i, o) {
            if ("string" == typeof t && (t = function(t) {
                t = unescape(encodeURIComponent(t));
                for(var e = [], r = 0; r < t.length; ++r)e.push(t.charCodeAt(r));
                return e;
            }(t)), "string" == typeof n && (n = Cr(n)), 16 !== n.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
            var s = new Uint8Array(16 + t.length);
            if (s.set(n), s.set(t, n.length), (s = r(s))[6] = 15 & s[6] | e, s[8] = 63 & s[8] | 128, i) {
                o = o || 0;
                for(var a = 0; a < 16; ++a)i[o + a] = s[a];
                return i;
            }
            return Lr(s);
        }
        try {
            n.name = t;
        } catch (t) {}
        return n.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", n.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", n;
    }
    function jr(t) {
        return 14 + (t + 64 >>> 9 << 4) + 1;
    }
    function Dr(t, e) {
        var r = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r;
    }
    function Fr(t, e, r, n, i, o) {
        var s, a;
        return Dr((s = Dr(Dr(e, t), Dr(n, o))) << (a = i) | s >>> 32 - a, r);
    }
    function Kr(t, e, r, n, i, o, s) {
        return Fr(e & r | ~e & n, t, e, i, o, s);
    }
    function Yr(t, e, r, n, i, o, s) {
        return Fr(e & n | r & ~n, t, e, i, o, s);
    }
    function Vr(t, e, r, n, i, o, s) {
        return Fr(e ^ r ^ n, t, e, i, o, s);
    }
    function Wr(t, e, r, n, i, o, s) {
        return Fr(r ^ (e | ~n), t, e, i, o, s);
    }
    var Hr = qr("v3", 48, function(t) {
        if ("string" == typeof t) {
            var e = unescape(encodeURIComponent(t));
            t = new Uint8Array(e.length);
            for(var r = 0; r < e.length; ++r)t[r] = e.charCodeAt(r);
        }
        return function(t) {
            for(var e = [], r = 32 * t.length, n = "0123456789abcdef", i = 0; i < r; i += 8){
                var o = t[i >> 5] >>> i % 32 & 255, s = parseInt(n.charAt(o >>> 4 & 15) + n.charAt(15 & o), 16);
                e.push(s);
            }
            return e;
        }(function(t, e) {
            t[e >> 5] |= 128 << e % 32, t[jr(e) - 1] = e;
            for(var r = 1732584193, n = -271733879, i = -1732584194, o = 271733878, s = 0; s < t.length; s += 16){
                var a = r, h = n, f = i, u = o;
                r = Kr(r, n, i, o, t[s], 7, -680876936), o = Kr(o, r, n, i, t[s + 1], 12, -389564586), i = Kr(i, o, r, n, t[s + 2], 17, 606105819), n = Kr(n, i, o, r, t[s + 3], 22, -1044525330), r = Kr(r, n, i, o, t[s + 4], 7, -176418897), o = Kr(o, r, n, i, t[s + 5], 12, 1200080426), i = Kr(i, o, r, n, t[s + 6], 17, -1473231341), n = Kr(n, i, o, r, t[s + 7], 22, -45705983), r = Kr(r, n, i, o, t[s + 8], 7, 1770035416), o = Kr(o, r, n, i, t[s + 9], 12, -1958414417), i = Kr(i, o, r, n, t[s + 10], 17, -42063), n = Kr(n, i, o, r, t[s + 11], 22, -1990404162), r = Kr(r, n, i, o, t[s + 12], 7, 1804603682), o = Kr(o, r, n, i, t[s + 13], 12, -40341101), i = Kr(i, o, r, n, t[s + 14], 17, -1502002290), r = Yr(r, n = Kr(n, i, o, r, t[s + 15], 22, 1236535329), i, o, t[s + 1], 5, -165796510), o = Yr(o, r, n, i, t[s + 6], 9, -1069501632), i = Yr(i, o, r, n, t[s + 11], 14, 643717713), n = Yr(n, i, o, r, t[s], 20, -373897302), r = Yr(r, n, i, o, t[s + 5], 5, -701558691), o = Yr(o, r, n, i, t[s + 10], 9, 38016083), i = Yr(i, o, r, n, t[s + 15], 14, -660478335), n = Yr(n, i, o, r, t[s + 4], 20, -405537848), r = Yr(r, n, i, o, t[s + 9], 5, 568446438), o = Yr(o, r, n, i, t[s + 14], 9, -1019803690), i = Yr(i, o, r, n, t[s + 3], 14, -187363961), n = Yr(n, i, o, r, t[s + 8], 20, 1163531501), r = Yr(r, n, i, o, t[s + 13], 5, -1444681467), o = Yr(o, r, n, i, t[s + 2], 9, -51403784), i = Yr(i, o, r, n, t[s + 7], 14, 1735328473), r = Vr(r, n = Yr(n, i, o, r, t[s + 12], 20, -1926607734), i, o, t[s + 5], 4, -378558), o = Vr(o, r, n, i, t[s + 8], 11, -2022574463), i = Vr(i, o, r, n, t[s + 11], 16, 1839030562), n = Vr(n, i, o, r, t[s + 14], 23, -35309556), r = Vr(r, n, i, o, t[s + 1], 4, -1530992060), o = Vr(o, r, n, i, t[s + 4], 11, 1272893353), i = Vr(i, o, r, n, t[s + 7], 16, -155497632), n = Vr(n, i, o, r, t[s + 10], 23, -1094730640), r = Vr(r, n, i, o, t[s + 13], 4, 681279174), o = Vr(o, r, n, i, t[s], 11, -358537222), i = Vr(i, o, r, n, t[s + 3], 16, -722521979), n = Vr(n, i, o, r, t[s + 6], 23, 76029189), r = Vr(r, n, i, o, t[s + 9], 4, -640364487), o = Vr(o, r, n, i, t[s + 12], 11, -421815835), i = Vr(i, o, r, n, t[s + 15], 16, 530742520), r = Wr(r, n = Vr(n, i, o, r, t[s + 2], 23, -995338651), i, o, t[s], 6, -198630844), o = Wr(o, r, n, i, t[s + 7], 10, 1126891415), i = Wr(i, o, r, n, t[s + 14], 15, -1416354905), n = Wr(n, i, o, r, t[s + 5], 21, -57434055), r = Wr(r, n, i, o, t[s + 12], 6, 1700485571), o = Wr(o, r, n, i, t[s + 3], 10, -1894986606), i = Wr(i, o, r, n, t[s + 10], 15, -1051523), n = Wr(n, i, o, r, t[s + 1], 21, -2054922799), r = Wr(r, n, i, o, t[s + 8], 6, 1873313359), o = Wr(o, r, n, i, t[s + 15], 10, -30611744), i = Wr(i, o, r, n, t[s + 6], 15, -1560198380), n = Wr(n, i, o, r, t[s + 13], 21, 1309151649), r = Wr(r, n, i, o, t[s + 4], 6, -145523070), o = Wr(o, r, n, i, t[s + 11], 10, -1120210379), i = Wr(i, o, r, n, t[s + 2], 15, 718787259), n = Wr(n, i, o, r, t[s + 9], 21, -343485551), r = Dr(r, a), n = Dr(n, h), i = Dr(i, f), o = Dr(o, u);
            }
            return [
                r,
                n,
                i,
                o
            ];
        }(function(t) {
            if (0 === t.length) return [];
            for(var e = 8 * t.length, r = new Uint32Array(jr(e)), n = 0; n < e; n += 8)r[n >> 5] |= (255 & t[n / 8]) << n % 32;
            return r;
        }(t), 8 * t.length));
    });
    function $r(t, e, r, n) {
        switch(t){
            case 0:
                return e & r ^ ~e & n;
            case 1:
                return e ^ r ^ n;
            case 2:
                return e & r ^ e & n ^ r & n;
            case 3:
                return e ^ r ^ n;
        }
    }
    function Gr(t, e) {
        return t << e | t >>> 32 - e;
    }
    var Zr = qr("v5", 80, function(t) {
        var e = [
            1518500249,
            1859775393,
            2400959708,
            3395469782
        ], r = [
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
        ];
        if ("string" == typeof t) {
            var n = unescape(encodeURIComponent(t));
            t = [];
            for(var i = 0; i < n.length; ++i)t.push(n.charCodeAt(i));
        } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
        t.push(128);
        for(var o = t.length / 4 + 2, s = Math.ceil(o / 16), a = new Array(s), h = 0; h < s; ++h){
            for(var f = new Uint32Array(16), u = 0; u < 16; ++u)f[u] = t[64 * h + 4 * u] << 24 | t[64 * h + 4 * u + 1] << 16 | t[64 * h + 4 * u + 2] << 8 | t[64 * h + 4 * u + 3];
            a[h] = f;
        }
        a[s - 1][14] = 8 * (t.length - 1) / Math.pow(2, 32), a[s - 1][14] = Math.floor(a[s - 1][14]), a[s - 1][15] = 8 * (t.length - 1) & 4294967295;
        for(var c = 0; c < s; ++c){
            for(var d = new Uint32Array(80), l = 0; l < 16; ++l)d[l] = a[c][l];
            for(var p = 16; p < 80; ++p)d[p] = Gr(d[p - 3] ^ d[p - 8] ^ d[p - 14] ^ d[p - 16], 1);
            for(var b = r[0], m = r[1], y = r[2], g = r[3], v = r[4], w = 0; w < 80; ++w){
                var M = Math.floor(w / 20), _ = Gr(b, 5) + $r(M, m, y, g) + v + e[M] + d[w] >>> 0;
                v = g, g = y, y = Gr(m, 30) >>> 0, m = b, b = _;
            }
            r[0] = r[0] + b >>> 0, r[1] = r[1] + m >>> 0, r[2] = r[2] + y >>> 0, r[3] = r[3] + g >>> 0, r[4] = r[4] + v >>> 0;
        }
        return [
            r[0] >> 24 & 255,
            r[0] >> 16 & 255,
            r[0] >> 8 & 255,
            255 & r[0],
            r[1] >> 24 & 255,
            r[1] >> 16 & 255,
            r[1] >> 8 & 255,
            255 & r[1],
            r[2] >> 24 & 255,
            r[2] >> 16 & 255,
            r[2] >> 8 & 255,
            255 & r[2],
            r[3] >> 24 & 255,
            r[3] >> 16 & 255,
            r[3] >> 8 & 255,
            255 & r[3],
            r[4] >> 24 & 255,
            r[4] >> 16 & 255,
            r[4] >> 8 & 255,
            255 & r[4]
        ];
    });
    var Jr = Object.freeze({
        __proto__: null,
        v1: function(t, e, r) {
            var n = e && r || 0, i = e || new Array(16), o = (t = t || {}).node || Tr, s = void 0 !== t.clockseq ? t.clockseq : Ur;
            if (null == o || null == s) {
                var a = t.random || (t.rng || kr)();
                null == o && (o = Tr = [
                    1 | a[0],
                    a[1],
                    a[2],
                    a[3],
                    a[4],
                    a[5]
                ]), null == s && (s = Ur = 16383 & (a[6] << 8 | a[7]));
            }
            var h = void 0 !== t.msecs ? t.msecs : Date.now(), f = void 0 !== t.nsecs ? t.nsecs : zr + 1, u = h - Nr + (f - zr) / 1e4;
            if (u < 0 && void 0 === t.clockseq && (s = s + 1 & 16383), (u < 0 || h > Nr) && void 0 === t.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            Nr = h, zr = f, Ur = s;
            var c = (1e4 * (268435455 & (h += 122192928e5)) + f) % 4294967296;
            i[n++] = c >>> 24 & 255, i[n++] = c >>> 16 & 255, i[n++] = c >>> 8 & 255, i[n++] = 255 & c;
            var d = h / 4294967296 * 1e4 & 268435455;
            i[n++] = d >>> 8 & 255, i[n++] = 255 & d, i[n++] = d >>> 24 & 15 | 16, i[n++] = d >>> 16 & 255, i[n++] = s >>> 8 | 128, i[n++] = 255 & s;
            for(var l = 0; l < 6; ++l)i[n + l] = o[l];
            return e || Lr(i);
        },
        v3: Hr,
        v4: function(t, e, r) {
            var n = (t = t || {}).random || (t.rng || kr)();
            if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, e) {
                r = r || 0;
                for(var i = 0; i < 16; ++i)e[r + i] = n[i];
                return e;
            }
            return Lr(n);
        },
        v5: Zr,
        NIL: "00000000-0000-0000-0000-000000000000",
        version: function(t) {
            if (!Br(t)) throw TypeError("Invalid UUID");
            return parseInt(t.substr(14, 1), 16);
        },
        validate: Br,
        stringify: Lr,
        parse: Cr
    });
    Jr.v4, Jr.v4;
    var Xr = "elliptic", Qr = "6.5.4", tn = "EC cryptography", en = "lib/elliptic.js", rn = [
        "lib"
    ], nn = {
        lint: "eslint lib test",
        "lint:fix": "npm run lint -- --fix",
        unit: "istanbul test _mocha --reporter=spec test/index.js",
        test: "npm run lint && npm run unit",
        version: "grunt dist && git add dist/"
    }, on = {
        type: "git",
        url: "git@github.com:indutny/elliptic"
    }, sn = [
        "EC",
        "Elliptic",
        "curve",
        "Cryptography"
    ], an = "Fedor Indutny <fedor@indutny.com>", hn = {
        url: "https://github.com/indutny/elliptic/issues"
    }, fn = "https://github.com/indutny/elliptic", un = {
        brfs: "^2.0.2",
        coveralls: "^3.1.0",
        eslint: "^7.6.0",
        grunt: "^1.2.1",
        "grunt-browserify": "^5.3.0",
        "grunt-cli": "^1.3.2",
        "grunt-contrib-connect": "^3.0.0",
        "grunt-contrib-copy": "^1.0.0",
        "grunt-contrib-uglify": "^5.0.0",
        "grunt-mocha-istanbul": "^5.0.2",
        "grunt-saucelabs": "^9.0.1",
        istanbul: "^0.4.5",
        mocha: "^8.0.1"
    }, cn = {
        "bn.js": "^4.11.9",
        brorand: "^1.1.0",
        "hash.js": "^1.0.0",
        "hmac-drbg": "^1.0.1",
        inherits: "^2.0.4",
        "minimalistic-assert": "^1.0.1",
        "minimalistic-crypto-utils": "^1.0.1"
    }, dn = {
        name: Xr,
        version: Qr,
        description: tn,
        main: en,
        files: rn,
        scripts: nn,
        repository: on,
        keywords: sn,
        author: an,
        license: "MIT",
        bugs: hn,
        homepage: fn,
        devDependencies: un,
        dependencies: cn
    }, ln = Object.freeze({
        __proto__: null,
        name: Xr,
        version: Qr,
        description: tn,
        main: en,
        files: rn,
        scripts: nn,
        repository: on,
        keywords: sn,
        author: an,
        license: "MIT",
        bugs: hn,
        homepage: fn,
        devDependencies: un,
        dependencies: cn,
        default: dn
    }), pn = Gt(function(t) {
        !function(t, e) {
            function r(t, e) {
                if (!t) throw new Error(e || "Assertion failed");
            }
            function n(t, e) {
                t.super_ = e;
                var r = function() {};
                r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t;
            }
            function i(t, e, r) {
                if (i.isBN(t)) return t;
                this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"));
            }
            var o;
            "object" == typeof t ? t.exports = i : e.BN = i, i.BN = i, i.wordSize = 26;
            try {
                o = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : Jt.Buffer;
            } catch (t) {}
            function s(t, e) {
                var r = t.charCodeAt(e);
                return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15;
            }
            function a(t, e, r) {
                var n = s(t, r);
                return r - 1 >= e && (n |= s(t, r - 1) << 4), n;
            }
            function h(t, e, r, n) {
                for(var i = 0, o = Math.min(t.length, r), s = e; s < o; s++){
                    var a = t.charCodeAt(s) - 48;
                    i *= n, i += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a;
                }
                return i;
            }
            i.isBN = function(t) {
                return t instanceof i || null !== t && "object" == typeof t && t.constructor.wordSize === i.wordSize && Array.isArray(t.words);
            }, i.max = function(t, e) {
                return t.cmp(e) > 0 ? t : e;
            }, i.min = function(t, e) {
                return t.cmp(e) < 0 ? t : e;
            }, i.prototype._init = function(t, e, n) {
                if ("number" == typeof t) return this._initNumber(t, e, n);
                if ("object" == typeof t) return this._initArray(t, e, n);
                "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
                var i = 0;
                "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, n) : (this._parseBase(t, e, i), "le" === n && this._initArray(this.toArray(), e, n)));
            }, i.prototype._initNumber = function(t, e, n) {
                t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [
                    67108863 & t
                ], this.length = 1) : t < 4503599627370496 ? (this.words = [
                    67108863 & t,
                    t / 67108864 & 67108863
                ], this.length = 2) : (r(t < 9007199254740992), this.words = [
                    67108863 & t,
                    t / 67108864 & 67108863,
                    1
                ], this.length = 3), "le" === n && this._initArray(this.toArray(), e, n);
            }, i.prototype._initArray = function(t, e, n) {
                if (r("number" == typeof t.length), t.length <= 0) return this.words = [
                    0
                ], this.length = 1, this;
                this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                for(var i = 0; i < this.length; i++)this.words[i] = 0;
                var o, s, a = 0;
                if ("be" === n) for(i = t.length - 1, o = 0; i >= 0; i -= 3)s = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                else if ("le" === n) for(i = 0, o = 0; i < t.length; i += 3)s = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
                return this.strip();
            }, i.prototype._parseHex = function(t, e, r) {
                this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
                for(var n = 0; n < this.length; n++)this.words[n] = 0;
                var i, o = 0, s = 0;
                if ("be" === r) for(n = t.length - 1; n >= e; n -= 2)i = a(t, e, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8;
                else for(n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2)i = a(t, e, n) << o, this.words[s] |= 67108863 & i, o >= 18 ? (o -= 18, s += 1, this.words[s] |= i >>> 26) : o += 8;
                this.strip();
            }, i.prototype._parseBase = function(t, e, r) {
                this.words = [
                    0
                ], this.length = 1;
                for(var n = 0, i = 1; i <= 67108863; i *= e)n++;
                n--, i = i / e | 0;
                for(var o = t.length - r, s = o % n, a = Math.min(o, o - s) + r, f = 0, u = r; u < a; u += n)f = h(t, u, u + n, e), this.imuln(i), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
                if (0 !== s) {
                    var c = 1;
                    for(f = h(t, u, t.length, e), u = 0; u < s; u++)c *= e;
                    this.imuln(c), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
                }
                this.strip();
            }, i.prototype.copy = function(t) {
                t.words = new Array(this.length);
                for(var e = 0; e < this.length; e++)t.words[e] = this.words[e];
                t.length = this.length, t.negative = this.negative, t.red = this.red;
            }, i.prototype.clone = function() {
                var t = new i(null);
                return this.copy(t), t;
            }, i.prototype._expand = function(t) {
                for(; this.length < t;)this.words[this.length++] = 0;
                return this;
            }, i.prototype.strip = function() {
                for(; this.length > 1 && 0 === this.words[this.length - 1];)this.length--;
                return this._normSign();
            }, i.prototype._normSign = function() {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
            }, i.prototype.inspect = function() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
            };
            var f = [
                "",
                "0",
                "00",
                "000",
                "0000",
                "00000",
                "000000",
                "0000000",
                "00000000",
                "000000000",
                "0000000000",
                "00000000000",
                "000000000000",
                "0000000000000",
                "00000000000000",
                "000000000000000",
                "0000000000000000",
                "00000000000000000",
                "000000000000000000",
                "0000000000000000000",
                "00000000000000000000",
                "000000000000000000000",
                "0000000000000000000000",
                "00000000000000000000000",
                "000000000000000000000000",
                "0000000000000000000000000"
            ], u = [
                0,
                0,
                25,
                16,
                12,
                11,
                10,
                9,
                8,
                8,
                7,
                7,
                7,
                7,
                6,
                6,
                6,
                6,
                6,
                6,
                6,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5,
                5
            ], c = [
                0,
                0,
                33554432,
                43046721,
                16777216,
                48828125,
                60466176,
                40353607,
                16777216,
                43046721,
                1e7,
                19487171,
                35831808,
                62748517,
                7529536,
                11390625,
                16777216,
                24137569,
                34012224,
                47045881,
                64e6,
                4084101,
                5153632,
                6436343,
                7962624,
                9765625,
                11881376,
                14348907,
                17210368,
                20511149,
                243e5,
                28629151,
                33554432,
                39135393,
                45435424,
                52521875,
                60466176
            ];
            function d(t, e, r) {
                r.negative = e.negative ^ t.negative;
                var n = t.length + e.length | 0;
                r.length = n, n = n - 1 | 0;
                var i = 0 | t.words[0], o = 0 | e.words[0], s = i * o, a = 67108863 & s, h = s / 67108864 | 0;
                r.words[0] = a;
                for(var f = 1; f < n; f++){
                    for(var u = h >>> 26, c = 67108863 & h, d = Math.min(f, e.length - 1), l = Math.max(0, f - t.length + 1); l <= d; l++){
                        var p = f - l | 0;
                        u += (s = (i = 0 | t.words[p]) * (o = 0 | e.words[l]) + c) / 67108864 | 0, c = 67108863 & s;
                    }
                    r.words[f] = 0 | c, h = 0 | u;
                }
                return 0 !== h ? r.words[f] = 0 | h : r.length--, r.strip();
            }
            i.prototype.toString = function(t, e) {
                var n;
                if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
                    n = "";
                    for(var i = 0, o = 0, s = 0; s < this.length; s++){
                        var a = this.words[s], h = (16777215 & (a << i | o)).toString(16);
                        n = 0 !== (o = a >>> 24 - i & 16777215) || s !== this.length - 1 ? f[6 - h.length] + h + n : h + n, (i += 2) >= 26 && (i -= 26, s--);
                    }
                    for(0 !== o && (n = o.toString(16) + n); n.length % e != 0;)n = "0" + n;
                    return 0 !== this.negative && (n = "-" + n), n;
                }
                if (t === (0 | t) && t >= 2 && t <= 36) {
                    var d = u[t], l = c[t];
                    n = "";
                    var p = this.clone();
                    for(p.negative = 0; !p.isZero();){
                        var b = p.modn(l).toString(t);
                        n = (p = p.idivn(l)).isZero() ? b + n : f[d - b.length] + b + n;
                    }
                    for(this.isZero() && (n = "0" + n); n.length % e != 0;)n = "0" + n;
                    return 0 !== this.negative && (n = "-" + n), n;
                }
                r(!1, "Base should be between 2 and 36");
            }, i.prototype.toNumber = function() {
                var t = this.words[0];
                return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t;
            }, i.prototype.toJSON = function() {
                return this.toString(16);
            }, i.prototype.toBuffer = function(t, e) {
                return r(void 0 !== o), this.toArrayLike(o, t, e);
            }, i.prototype.toArray = function(t, e) {
                return this.toArrayLike(Array, t, e);
            }, i.prototype.toArrayLike = function(t, e, n) {
                var i = this.byteLength(), o = n || Math.max(1, i);
                r(i <= o, "byte array longer than desired length"), r(o > 0, "Requested array length <= 0"), this.strip();
                var s, a, h = "le" === e, f = new t(o), u = this.clone();
                if (h) {
                    for(a = 0; !u.isZero(); a++)s = u.andln(255), u.iushrn(8), f[a] = s;
                    for(; a < o; a++)f[a] = 0;
                } else {
                    for(a = 0; a < o - i; a++)f[a] = 0;
                    for(a = 0; !u.isZero(); a++)s = u.andln(255), u.iushrn(8), f[o - a - 1] = s;
                }
                return f;
            }, Math.clz32 ? i.prototype._countBits = function(t) {
                return 32 - Math.clz32(t);
            } : i.prototype._countBits = function(t) {
                var e = t, r = 0;
                return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e;
            }, i.prototype._zeroBits = function(t) {
                if (0 === t) return 26;
                var e = t, r = 0;
                return 0 == (8191 & e) && (r += 13, e >>>= 13), 0 == (127 & e) && (r += 7, e >>>= 7), 0 == (15 & e) && (r += 4, e >>>= 4), 0 == (3 & e) && (r += 2, e >>>= 2), 0 == (1 & e) && r++, r;
            }, i.prototype.bitLength = function() {
                var t = this.words[this.length - 1], e = this._countBits(t);
                return 26 * (this.length - 1) + e;
            }, i.prototype.zeroBits = function() {
                if (this.isZero()) return 0;
                for(var t = 0, e = 0; e < this.length; e++){
                    var r = this._zeroBits(this.words[e]);
                    if (t += r, 26 !== r) break;
                }
                return t;
            }, i.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8);
            }, i.prototype.toTwos = function(t) {
                return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone();
            }, i.prototype.fromTwos = function(t) {
                return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
            }, i.prototype.isNeg = function() {
                return 0 !== this.negative;
            }, i.prototype.neg = function() {
                return this.clone().ineg();
            }, i.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1), this;
            }, i.prototype.iuor = function(t) {
                for(; this.length < t.length;)this.words[this.length++] = 0;
                for(var e = 0; e < t.length; e++)this.words[e] = this.words[e] | t.words[e];
                return this.strip();
            }, i.prototype.ior = function(t) {
                return r(0 == (this.negative | t.negative)), this.iuor(t);
            }, i.prototype.or = function(t) {
                return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
            }, i.prototype.uor = function(t) {
                return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
            }, i.prototype.iuand = function(t) {
                var e;
                e = this.length > t.length ? t : this;
                for(var r = 0; r < e.length; r++)this.words[r] = this.words[r] & t.words[r];
                return this.length = e.length, this.strip();
            }, i.prototype.iand = function(t) {
                return r(0 == (this.negative | t.negative)), this.iuand(t);
            }, i.prototype.and = function(t) {
                return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
            }, i.prototype.uand = function(t) {
                return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
            }, i.prototype.iuxor = function(t) {
                var e, r;
                this.length > t.length ? (e = this, r = t) : (e = t, r = this);
                for(var n = 0; n < r.length; n++)this.words[n] = e.words[n] ^ r.words[n];
                if (this !== e) for(; n < e.length; n++)this.words[n] = e.words[n];
                return this.length = e.length, this.strip();
            }, i.prototype.ixor = function(t) {
                return r(0 == (this.negative | t.negative)), this.iuxor(t);
            }, i.prototype.xor = function(t) {
                return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
            }, i.prototype.uxor = function(t) {
                return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
            }, i.prototype.inotn = function(t) {
                r("number" == typeof t && t >= 0);
                var e = 0 | Math.ceil(t / 26), n = t % 26;
                this._expand(e), n > 0 && e--;
                for(var i = 0; i < e; i++)this.words[i] = 67108863 & ~this.words[i];
                return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this.strip();
            }, i.prototype.notn = function(t) {
                return this.clone().inotn(t);
            }, i.prototype.setn = function(t, e) {
                r("number" == typeof t && t >= 0);
                var n = t / 26 | 0, i = t % 26;
                return this._expand(n + 1), this.words[n] = e ? this.words[n] | 1 << i : this.words[n] & ~(1 << i), this.strip();
            }, i.prototype.iadd = function(t) {
                var e, r, n;
                if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
                if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
                this.length > t.length ? (r = this, n = t) : (r = t, n = this);
                for(var i = 0, o = 0; o < n.length; o++)e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                for(; 0 !== i && o < r.length; o++)e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
                if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                else if (r !== this) for(; o < r.length; o++)this.words[o] = r.words[o];
                return this;
            }, i.prototype.add = function(t) {
                var e;
                return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
            }, i.prototype.isub = function(t) {
                if (0 !== t.negative) {
                    t.negative = 0;
                    var e = this.iadd(t);
                    return t.negative = 1, e._normSign();
                }
                if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                var r, n, i = this.cmp(t);
                if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                i > 0 ? (r = this, n = t) : (r = t, n = this);
                for(var o = 0, s = 0; s < n.length; s++)o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                for(; 0 !== o && s < r.length; s++)o = (e = (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & e;
                if (0 === o && s < r.length && r !== this) for(; s < r.length; s++)this.words[s] = r.words[s];
                return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this.strip();
            }, i.prototype.sub = function(t) {
                return this.clone().isub(t);
            };
            var l = function(t, e, r) {
                var n, i, o, s = t.words, a = e.words, h = r.words, f = 0, u = 0 | s[0], c = 8191 & u, d = u >>> 13, l = 0 | s[1], p = 8191 & l, b = l >>> 13, m = 0 | s[2], y = 8191 & m, g = m >>> 13, v = 0 | s[3], w = 8191 & v, M = v >>> 13, _ = 0 | s[4], A = 8191 & _, S = _ >>> 13, E = 0 | s[5], x = 8191 & E, I = E >>> 13, k = 0 | s[6], R = 8191 & k, B = k >>> 13, T = 0 | s[7], U = 8191 & T, O = T >>> 13, P = 0 | s[8], L = 8191 & P, N = P >>> 13, z = 0 | s[9], C = 8191 & z, q = z >>> 13, j = 0 | a[0], D = 8191 & j, F = j >>> 13, K = 0 | a[1], Y = 8191 & K, V = K >>> 13, W = 0 | a[2], H = 8191 & W, $ = W >>> 13, G = 0 | a[3], Z = 8191 & G, J = G >>> 13, X = 0 | a[4], Q = 8191 & X, tt = X >>> 13, et = 0 | a[5], rt = 8191 & et, nt = et >>> 13, it = 0 | a[6], ot = 8191 & it, st = it >>> 13, at = 0 | a[7], ht = 8191 & at, ft = at >>> 13, ut = 0 | a[8], ct = 8191 & ut, dt = ut >>> 13, lt = 0 | a[9], pt = 8191 & lt, bt = lt >>> 13;
                r.negative = t.negative ^ e.negative, r.length = 19;
                var mt = (f + (n = Math.imul(c, D)) | 0) + ((8191 & (i = (i = Math.imul(c, F)) + Math.imul(d, D) | 0)) << 13) | 0;
                f = ((o = Math.imul(d, F)) + (i >>> 13) | 0) + (mt >>> 26) | 0, mt &= 67108863, n = Math.imul(p, D), i = (i = Math.imul(p, F)) + Math.imul(b, D) | 0, o = Math.imul(b, F);
                var yt = (f + (n = n + Math.imul(c, Y) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, V) | 0) + Math.imul(d, Y) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, V) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(y, D), i = (i = Math.imul(y, F)) + Math.imul(g, D) | 0, o = Math.imul(g, F), n = n + Math.imul(p, Y) | 0, i = (i = i + Math.imul(p, V) | 0) + Math.imul(b, Y) | 0, o = o + Math.imul(b, V) | 0;
                var gt = (f + (n = n + Math.imul(c, H) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, $) | 0) + Math.imul(d, H) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, $) | 0) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(w, D), i = (i = Math.imul(w, F)) + Math.imul(M, D) | 0, o = Math.imul(M, F), n = n + Math.imul(y, Y) | 0, i = (i = i + Math.imul(y, V) | 0) + Math.imul(g, Y) | 0, o = o + Math.imul(g, V) | 0, n = n + Math.imul(p, H) | 0, i = (i = i + Math.imul(p, $) | 0) + Math.imul(b, H) | 0, o = o + Math.imul(b, $) | 0;
                var vt = (f + (n = n + Math.imul(c, Z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, J) | 0) + Math.imul(d, Z) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, J) | 0) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(A, D), i = (i = Math.imul(A, F)) + Math.imul(S, D) | 0, o = Math.imul(S, F), n = n + Math.imul(w, Y) | 0, i = (i = i + Math.imul(w, V) | 0) + Math.imul(M, Y) | 0, o = o + Math.imul(M, V) | 0, n = n + Math.imul(y, H) | 0, i = (i = i + Math.imul(y, $) | 0) + Math.imul(g, H) | 0, o = o + Math.imul(g, $) | 0, n = n + Math.imul(p, Z) | 0, i = (i = i + Math.imul(p, J) | 0) + Math.imul(b, Z) | 0, o = o + Math.imul(b, J) | 0;
                var wt = (f + (n = n + Math.imul(c, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, tt) | 0) + Math.imul(d, Q) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, tt) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(x, D), i = (i = Math.imul(x, F)) + Math.imul(I, D) | 0, o = Math.imul(I, F), n = n + Math.imul(A, Y) | 0, i = (i = i + Math.imul(A, V) | 0) + Math.imul(S, Y) | 0, o = o + Math.imul(S, V) | 0, n = n + Math.imul(w, H) | 0, i = (i = i + Math.imul(w, $) | 0) + Math.imul(M, H) | 0, o = o + Math.imul(M, $) | 0, n = n + Math.imul(y, Z) | 0, i = (i = i + Math.imul(y, J) | 0) + Math.imul(g, Z) | 0, o = o + Math.imul(g, J) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(b, Q) | 0, o = o + Math.imul(b, tt) | 0;
                var Mt = (f + (n = n + Math.imul(c, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, nt) | 0) + Math.imul(d, rt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, nt) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(R, D), i = (i = Math.imul(R, F)) + Math.imul(B, D) | 0, o = Math.imul(B, F), n = n + Math.imul(x, Y) | 0, i = (i = i + Math.imul(x, V) | 0) + Math.imul(I, Y) | 0, o = o + Math.imul(I, V) | 0, n = n + Math.imul(A, H) | 0, i = (i = i + Math.imul(A, $) | 0) + Math.imul(S, H) | 0, o = o + Math.imul(S, $) | 0, n = n + Math.imul(w, Z) | 0, i = (i = i + Math.imul(w, J) | 0) + Math.imul(M, Z) | 0, o = o + Math.imul(M, J) | 0, n = n + Math.imul(y, Q) | 0, i = (i = i + Math.imul(y, tt) | 0) + Math.imul(g, Q) | 0, o = o + Math.imul(g, tt) | 0, n = n + Math.imul(p, rt) | 0, i = (i = i + Math.imul(p, nt) | 0) + Math.imul(b, rt) | 0, o = o + Math.imul(b, nt) | 0;
                var _t = (f + (n = n + Math.imul(c, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, st) | 0) + Math.imul(d, ot) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, st) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(U, D), i = (i = Math.imul(U, F)) + Math.imul(O, D) | 0, o = Math.imul(O, F), n = n + Math.imul(R, Y) | 0, i = (i = i + Math.imul(R, V) | 0) + Math.imul(B, Y) | 0, o = o + Math.imul(B, V) | 0, n = n + Math.imul(x, H) | 0, i = (i = i + Math.imul(x, $) | 0) + Math.imul(I, H) | 0, o = o + Math.imul(I, $) | 0, n = n + Math.imul(A, Z) | 0, i = (i = i + Math.imul(A, J) | 0) + Math.imul(S, Z) | 0, o = o + Math.imul(S, J) | 0, n = n + Math.imul(w, Q) | 0, i = (i = i + Math.imul(w, tt) | 0) + Math.imul(M, Q) | 0, o = o + Math.imul(M, tt) | 0, n = n + Math.imul(y, rt) | 0, i = (i = i + Math.imul(y, nt) | 0) + Math.imul(g, rt) | 0, o = o + Math.imul(g, nt) | 0, n = n + Math.imul(p, ot) | 0, i = (i = i + Math.imul(p, st) | 0) + Math.imul(b, ot) | 0, o = o + Math.imul(b, st) | 0;
                var At = (f + (n = n + Math.imul(c, ht) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, ft) | 0) + Math.imul(d, ht) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, ft) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(L, D), i = (i = Math.imul(L, F)) + Math.imul(N, D) | 0, o = Math.imul(N, F), n = n + Math.imul(U, Y) | 0, i = (i = i + Math.imul(U, V) | 0) + Math.imul(O, Y) | 0, o = o + Math.imul(O, V) | 0, n = n + Math.imul(R, H) | 0, i = (i = i + Math.imul(R, $) | 0) + Math.imul(B, H) | 0, o = o + Math.imul(B, $) | 0, n = n + Math.imul(x, Z) | 0, i = (i = i + Math.imul(x, J) | 0) + Math.imul(I, Z) | 0, o = o + Math.imul(I, J) | 0, n = n + Math.imul(A, Q) | 0, i = (i = i + Math.imul(A, tt) | 0) + Math.imul(S, Q) | 0, o = o + Math.imul(S, tt) | 0, n = n + Math.imul(w, rt) | 0, i = (i = i + Math.imul(w, nt) | 0) + Math.imul(M, rt) | 0, o = o + Math.imul(M, nt) | 0, n = n + Math.imul(y, ot) | 0, i = (i = i + Math.imul(y, st) | 0) + Math.imul(g, ot) | 0, o = o + Math.imul(g, st) | 0, n = n + Math.imul(p, ht) | 0, i = (i = i + Math.imul(p, ft) | 0) + Math.imul(b, ht) | 0, o = o + Math.imul(b, ft) | 0;
                var St = (f + (n = n + Math.imul(c, ct) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, dt) | 0) + Math.imul(d, ct) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, dt) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(C, D), i = (i = Math.imul(C, F)) + Math.imul(q, D) | 0, o = Math.imul(q, F), n = n + Math.imul(L, Y) | 0, i = (i = i + Math.imul(L, V) | 0) + Math.imul(N, Y) | 0, o = o + Math.imul(N, V) | 0, n = n + Math.imul(U, H) | 0, i = (i = i + Math.imul(U, $) | 0) + Math.imul(O, H) | 0, o = o + Math.imul(O, $) | 0, n = n + Math.imul(R, Z) | 0, i = (i = i + Math.imul(R, J) | 0) + Math.imul(B, Z) | 0, o = o + Math.imul(B, J) | 0, n = n + Math.imul(x, Q) | 0, i = (i = i + Math.imul(x, tt) | 0) + Math.imul(I, Q) | 0, o = o + Math.imul(I, tt) | 0, n = n + Math.imul(A, rt) | 0, i = (i = i + Math.imul(A, nt) | 0) + Math.imul(S, rt) | 0, o = o + Math.imul(S, nt) | 0, n = n + Math.imul(w, ot) | 0, i = (i = i + Math.imul(w, st) | 0) + Math.imul(M, ot) | 0, o = o + Math.imul(M, st) | 0, n = n + Math.imul(y, ht) | 0, i = (i = i + Math.imul(y, ft) | 0) + Math.imul(g, ht) | 0, o = o + Math.imul(g, ft) | 0, n = n + Math.imul(p, ct) | 0, i = (i = i + Math.imul(p, dt) | 0) + Math.imul(b, ct) | 0, o = o + Math.imul(b, dt) | 0;
                var Et = (f + (n = n + Math.imul(c, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(c, bt) | 0) + Math.imul(d, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(d, bt) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(C, Y), i = (i = Math.imul(C, V)) + Math.imul(q, Y) | 0, o = Math.imul(q, V), n = n + Math.imul(L, H) | 0, i = (i = i + Math.imul(L, $) | 0) + Math.imul(N, H) | 0, o = o + Math.imul(N, $) | 0, n = n + Math.imul(U, Z) | 0, i = (i = i + Math.imul(U, J) | 0) + Math.imul(O, Z) | 0, o = o + Math.imul(O, J) | 0, n = n + Math.imul(R, Q) | 0, i = (i = i + Math.imul(R, tt) | 0) + Math.imul(B, Q) | 0, o = o + Math.imul(B, tt) | 0, n = n + Math.imul(x, rt) | 0, i = (i = i + Math.imul(x, nt) | 0) + Math.imul(I, rt) | 0, o = o + Math.imul(I, nt) | 0, n = n + Math.imul(A, ot) | 0, i = (i = i + Math.imul(A, st) | 0) + Math.imul(S, ot) | 0, o = o + Math.imul(S, st) | 0, n = n + Math.imul(w, ht) | 0, i = (i = i + Math.imul(w, ft) | 0) + Math.imul(M, ht) | 0, o = o + Math.imul(M, ft) | 0, n = n + Math.imul(y, ct) | 0, i = (i = i + Math.imul(y, dt) | 0) + Math.imul(g, ct) | 0, o = o + Math.imul(g, dt) | 0;
                var xt = (f + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, bt) | 0) + Math.imul(b, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(b, bt) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(C, H), i = (i = Math.imul(C, $)) + Math.imul(q, H) | 0, o = Math.imul(q, $), n = n + Math.imul(L, Z) | 0, i = (i = i + Math.imul(L, J) | 0) + Math.imul(N, Z) | 0, o = o + Math.imul(N, J) | 0, n = n + Math.imul(U, Q) | 0, i = (i = i + Math.imul(U, tt) | 0) + Math.imul(O, Q) | 0, o = o + Math.imul(O, tt) | 0, n = n + Math.imul(R, rt) | 0, i = (i = i + Math.imul(R, nt) | 0) + Math.imul(B, rt) | 0, o = o + Math.imul(B, nt) | 0, n = n + Math.imul(x, ot) | 0, i = (i = i + Math.imul(x, st) | 0) + Math.imul(I, ot) | 0, o = o + Math.imul(I, st) | 0, n = n + Math.imul(A, ht) | 0, i = (i = i + Math.imul(A, ft) | 0) + Math.imul(S, ht) | 0, o = o + Math.imul(S, ft) | 0, n = n + Math.imul(w, ct) | 0, i = (i = i + Math.imul(w, dt) | 0) + Math.imul(M, ct) | 0, o = o + Math.imul(M, dt) | 0;
                var It = (f + (n = n + Math.imul(y, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(y, bt) | 0) + Math.imul(g, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(g, bt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, n = Math.imul(C, Z), i = (i = Math.imul(C, J)) + Math.imul(q, Z) | 0, o = Math.imul(q, J), n = n + Math.imul(L, Q) | 0, i = (i = i + Math.imul(L, tt) | 0) + Math.imul(N, Q) | 0, o = o + Math.imul(N, tt) | 0, n = n + Math.imul(U, rt) | 0, i = (i = i + Math.imul(U, nt) | 0) + Math.imul(O, rt) | 0, o = o + Math.imul(O, nt) | 0, n = n + Math.imul(R, ot) | 0, i = (i = i + Math.imul(R, st) | 0) + Math.imul(B, ot) | 0, o = o + Math.imul(B, st) | 0, n = n + Math.imul(x, ht) | 0, i = (i = i + Math.imul(x, ft) | 0) + Math.imul(I, ht) | 0, o = o + Math.imul(I, ft) | 0, n = n + Math.imul(A, ct) | 0, i = (i = i + Math.imul(A, dt) | 0) + Math.imul(S, ct) | 0, o = o + Math.imul(S, dt) | 0;
                var kt = (f + (n = n + Math.imul(w, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, bt) | 0) + Math.imul(M, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(M, bt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(C, Q), i = (i = Math.imul(C, tt)) + Math.imul(q, Q) | 0, o = Math.imul(q, tt), n = n + Math.imul(L, rt) | 0, i = (i = i + Math.imul(L, nt) | 0) + Math.imul(N, rt) | 0, o = o + Math.imul(N, nt) | 0, n = n + Math.imul(U, ot) | 0, i = (i = i + Math.imul(U, st) | 0) + Math.imul(O, ot) | 0, o = o + Math.imul(O, st) | 0, n = n + Math.imul(R, ht) | 0, i = (i = i + Math.imul(R, ft) | 0) + Math.imul(B, ht) | 0, o = o + Math.imul(B, ft) | 0, n = n + Math.imul(x, ct) | 0, i = (i = i + Math.imul(x, dt) | 0) + Math.imul(I, ct) | 0, o = o + Math.imul(I, dt) | 0;
                var Rt = (f + (n = n + Math.imul(A, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, bt) | 0) + Math.imul(S, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(S, bt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(C, rt), i = (i = Math.imul(C, nt)) + Math.imul(q, rt) | 0, o = Math.imul(q, nt), n = n + Math.imul(L, ot) | 0, i = (i = i + Math.imul(L, st) | 0) + Math.imul(N, ot) | 0, o = o + Math.imul(N, st) | 0, n = n + Math.imul(U, ht) | 0, i = (i = i + Math.imul(U, ft) | 0) + Math.imul(O, ht) | 0, o = o + Math.imul(O, ft) | 0, n = n + Math.imul(R, ct) | 0, i = (i = i + Math.imul(R, dt) | 0) + Math.imul(B, ct) | 0, o = o + Math.imul(B, dt) | 0;
                var Bt = (f + (n = n + Math.imul(x, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, bt) | 0) + Math.imul(I, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(I, bt) | 0) + (i >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, n = Math.imul(C, ot), i = (i = Math.imul(C, st)) + Math.imul(q, ot) | 0, o = Math.imul(q, st), n = n + Math.imul(L, ht) | 0, i = (i = i + Math.imul(L, ft) | 0) + Math.imul(N, ht) | 0, o = o + Math.imul(N, ft) | 0, n = n + Math.imul(U, ct) | 0, i = (i = i + Math.imul(U, dt) | 0) + Math.imul(O, ct) | 0, o = o + Math.imul(O, dt) | 0;
                var Tt = (f + (n = n + Math.imul(R, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, bt) | 0) + Math.imul(B, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(B, bt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(C, ht), i = (i = Math.imul(C, ft)) + Math.imul(q, ht) | 0, o = Math.imul(q, ft), n = n + Math.imul(L, ct) | 0, i = (i = i + Math.imul(L, dt) | 0) + Math.imul(N, ct) | 0, o = o + Math.imul(N, dt) | 0;
                var Ut = (f + (n = n + Math.imul(U, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(U, bt) | 0) + Math.imul(O, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(O, bt) | 0) + (i >>> 13) | 0) + (Ut >>> 26) | 0, Ut &= 67108863, n = Math.imul(C, ct), i = (i = Math.imul(C, dt)) + Math.imul(q, ct) | 0, o = Math.imul(q, dt);
                var Ot = (f + (n = n + Math.imul(L, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, bt) | 0) + Math.imul(N, pt) | 0)) << 13) | 0;
                f = ((o = o + Math.imul(N, bt) | 0) + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863;
                var Pt = (f + (n = Math.imul(C, pt)) | 0) + ((8191 & (i = (i = Math.imul(C, bt)) + Math.imul(q, pt) | 0)) << 13) | 0;
                return f = ((o = Math.imul(q, bt)) + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, h[0] = mt, h[1] = yt, h[2] = gt, h[3] = vt, h[4] = wt, h[5] = Mt, h[6] = _t, h[7] = At, h[8] = St, h[9] = Et, h[10] = xt, h[11] = It, h[12] = kt, h[13] = Rt, h[14] = Bt, h[15] = Tt, h[16] = Ut, h[17] = Ot, h[18] = Pt, 0 !== f && (h[19] = f, r.length++), r;
            };
            function p(t, e, r) {
                return (new b).mulp(t, e, r);
            }
            function b(t, e) {
                this.x = t, this.y = e;
            }
            Math.imul || (l = d), i.prototype.mulTo = function(t, e) {
                var r = this.length + t.length;
                return 10 === this.length && 10 === t.length ? l(this, t, e) : r < 63 ? d(this, t, e) : r < 1024 ? function(t, e, r) {
                    r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
                    for(var n = 0, i = 0, o = 0; o < r.length - 1; o++){
                        var s = i;
                        i = 0;
                        for(var a = 67108863 & n, h = Math.min(o, e.length - 1), f = Math.max(0, o - t.length + 1); f <= h; f++){
                            var u = o - f, c = (0 | t.words[u]) * (0 | e.words[f]), d = 67108863 & c;
                            a = 67108863 & (d = d + a | 0), i += (s = (s = s + (c / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26, s &= 67108863;
                        }
                        r.words[o] = a, n = s, s = i;
                    }
                    return 0 !== n ? r.words[o] = n : r.length--, r.strip();
                }(this, t, e) : p(this, t, e);
            }, b.prototype.makeRBT = function(t) {
                for(var e = new Array(t), r = i.prototype._countBits(t) - 1, n = 0; n < t; n++)e[n] = this.revBin(n, r, t);
                return e;
            }, b.prototype.revBin = function(t, e, r) {
                if (0 === t || t === r - 1) return t;
                for(var n = 0, i = 0; i < e; i++)n |= (1 & t) << e - i - 1, t >>= 1;
                return n;
            }, b.prototype.permute = function(t, e, r, n, i, o) {
                for(var s = 0; s < o; s++)n[s] = e[t[s]], i[s] = r[t[s]];
            }, b.prototype.transform = function(t, e, r, n, i, o) {
                this.permute(o, t, e, r, n, i);
                for(var s = 1; s < i; s <<= 1)for(var a = s << 1, h = Math.cos(2 * Math.PI / a), f = Math.sin(2 * Math.PI / a), u = 0; u < i; u += a)for(var c = h, d = f, l = 0; l < s; l++){
                    var p = r[u + l], b = n[u + l], m = r[u + l + s], y = n[u + l + s], g = c * m - d * y;
                    y = c * y + d * m, m = g, r[u + l] = p + m, n[u + l] = b + y, r[u + l + s] = p - m, n[u + l + s] = b - y, l !== a && (g = h * c - f * d, d = h * d + f * c, c = g);
                }
            }, b.prototype.guessLen13b = function(t, e) {
                var r = 1 | Math.max(e, t), n = 1 & r, i = 0;
                for(r = r / 2 | 0; r; r >>>= 1)i++;
                return 1 << i + 1 + n;
            }, b.prototype.conjugate = function(t, e, r) {
                if (!(r <= 1)) for(var n = 0; n < r / 2; n++){
                    var i = t[n];
                    t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i;
                }
            }, b.prototype.normalize13b = function(t, e) {
                for(var r = 0, n = 0; n < e / 2; n++){
                    var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                    t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0;
                }
                return t;
            }, b.prototype.convert13b = function(t, e, n, i) {
                for(var o = 0, s = 0; s < e; s++)o += 0 | t[s], n[2 * s] = 8191 & o, o >>>= 13, n[2 * s + 1] = 8191 & o, o >>>= 13;
                for(s = 2 * e; s < i; ++s)n[s] = 0;
                r(0 === o), r(0 == (-8192 & o));
            }, b.prototype.stub = function(t) {
                for(var e = new Array(t), r = 0; r < t; r++)e[r] = 0;
                return e;
            }, b.prototype.mulp = function(t, e, r) {
                var n = 2 * this.guessLen13b(t.length, e.length), i = this.makeRBT(n), o = this.stub(n), s = new Array(n), a = new Array(n), h = new Array(n), f = new Array(n), u = new Array(n), c = new Array(n), d = r.words;
                d.length = n, this.convert13b(t.words, t.length, s, n), this.convert13b(e.words, e.length, f, n), this.transform(s, o, a, h, n, i), this.transform(f, o, u, c, n, i);
                for(var l = 0; l < n; l++){
                    var p = a[l] * u[l] - h[l] * c[l];
                    h[l] = a[l] * c[l] + h[l] * u[l], a[l] = p;
                }
                return this.conjugate(a, h, n), this.transform(a, h, d, o, n, i), this.conjugate(d, o, n), this.normalize13b(d, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r.strip();
            }, i.prototype.mul = function(t) {
                var e = new i(null);
                return e.words = new Array(this.length + t.length), this.mulTo(t, e);
            }, i.prototype.mulf = function(t) {
                var e = new i(null);
                return e.words = new Array(this.length + t.length), p(this, t, e);
            }, i.prototype.imul = function(t) {
                return this.clone().mulTo(t, this);
            }, i.prototype.imuln = function(t) {
                r("number" == typeof t), r(t < 67108864);
                for(var e = 0, n = 0; n < this.length; n++){
                    var i = (0 | this.words[n]) * t, o = (67108863 & i) + (67108863 & e);
                    e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[n] = 67108863 & o;
                }
                return 0 !== e && (this.words[n] = e, this.length++), this;
            }, i.prototype.muln = function(t) {
                return this.clone().imuln(t);
            }, i.prototype.sqr = function() {
                return this.mul(this);
            }, i.prototype.isqr = function() {
                return this.imul(this.clone());
            }, i.prototype.pow = function(t) {
                var e = function(t) {
                    for(var e = new Array(t.bitLength()), r = 0; r < e.length; r++){
                        var n = r / 26 | 0, i = r % 26;
                        e[r] = (t.words[n] & 1 << i) >>> i;
                    }
                    return e;
                }(t);
                if (0 === e.length) return new i(1);
                for(var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
                if (++n < e.length) for(var o = r.sqr(); n < e.length; n++, o = o.sqr())0 !== e[n] && (r = r.mul(o));
                return r;
            }, i.prototype.iushln = function(t) {
                r("number" == typeof t && t >= 0);
                var e, n = t % 26, i = (t - n) / 26, o = 67108863 >>> 26 - n << 26 - n;
                if (0 !== n) {
                    var s = 0;
                    for(e = 0; e < this.length; e++){
                        var a = this.words[e] & o, h = (0 | this.words[e]) - a << n;
                        this.words[e] = h | s, s = a >>> 26 - n;
                    }
                    s && (this.words[e] = s, this.length++);
                }
                if (0 !== i) {
                    for(e = this.length - 1; e >= 0; e--)this.words[e + i] = this.words[e];
                    for(e = 0; e < i; e++)this.words[e] = 0;
                    this.length += i;
                }
                return this.strip();
            }, i.prototype.ishln = function(t) {
                return r(0 === this.negative), this.iushln(t);
            }, i.prototype.iushrn = function(t, e, n) {
                var i;
                r("number" == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
                var o = t % 26, s = Math.min((t - o) / 26, this.length), a = 67108863 ^ 67108863 >>> o << o, h = n;
                if (i -= s, i = Math.max(0, i), h) {
                    for(var f = 0; f < s; f++)h.words[f] = this.words[f];
                    h.length = s;
                }
                if (0 === s) ;
                else if (this.length > s) for(this.length -= s, f = 0; f < this.length; f++)this.words[f] = this.words[f + s];
                else this.words[0] = 0, this.length = 1;
                var u = 0;
                for(f = this.length - 1; f >= 0 && (0 !== u || f >= i); f--){
                    var c = 0 | this.words[f];
                    this.words[f] = u << 26 - o | c >>> o, u = c & a;
                }
                return h && 0 !== u && (h.words[h.length++] = u), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
            }, i.prototype.ishrn = function(t, e, n) {
                return r(0 === this.negative), this.iushrn(t, e, n);
            }, i.prototype.shln = function(t) {
                return this.clone().ishln(t);
            }, i.prototype.ushln = function(t) {
                return this.clone().iushln(t);
            }, i.prototype.shrn = function(t) {
                return this.clone().ishrn(t);
            }, i.prototype.ushrn = function(t) {
                return this.clone().iushrn(t);
            }, i.prototype.testn = function(t) {
                r("number" == typeof t && t >= 0);
                var e = t % 26, n = (t - e) / 26, i = 1 << e;
                return !(this.length <= n) && !!(this.words[n] & i);
            }, i.prototype.imaskn = function(t) {
                r("number" == typeof t && t >= 0);
                var e = t % 26, n = (t - e) / 26;
                if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= n) return this;
                if (0 !== e && n++, this.length = Math.min(n, this.length), 0 !== e) {
                    var i = 67108863 ^ 67108863 >>> e << e;
                    this.words[this.length - 1] &= i;
                }
                return this.strip();
            }, i.prototype.maskn = function(t) {
                return this.clone().imaskn(t);
            }, i.prototype.iaddn = function(t) {
                return r("number" == typeof t), r(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
            }, i.prototype._iaddn = function(t) {
                this.words[0] += t;
                for(var e = 0; e < this.length && this.words[e] >= 67108864; e++)this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                return this.length = Math.max(this.length, e + 1), this;
            }, i.prototype.isubn = function(t) {
                if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
                if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                else for(var e = 0; e < this.length && this.words[e] < 0; e++)this.words[e] += 67108864, this.words[e + 1] -= 1;
                return this.strip();
            }, i.prototype.addn = function(t) {
                return this.clone().iaddn(t);
            }, i.prototype.subn = function(t) {
                return this.clone().isubn(t);
            }, i.prototype.iabs = function() {
                return this.negative = 0, this;
            }, i.prototype.abs = function() {
                return this.clone().iabs();
            }, i.prototype._ishlnsubmul = function(t, e, n) {
                var i, o, s = t.length + n;
                this._expand(s);
                var a = 0;
                for(i = 0; i < t.length; i++){
                    o = (0 | this.words[i + n]) + a;
                    var h = (0 | t.words[i]) * e;
                    a = ((o -= 67108863 & h) >> 26) - (h / 67108864 | 0), this.words[i + n] = 67108863 & o;
                }
                for(; i < this.length - n; i++)a = (o = (0 | this.words[i + n]) + a) >> 26, this.words[i + n] = 67108863 & o;
                if (0 === a) return this.strip();
                for(r(-1 === a), a = 0, i = 0; i < this.length; i++)a = (o = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & o;
                return this.negative = 1, this.strip();
            }, i.prototype._wordDiv = function(t, e) {
                var r = (this.length, t.length), n = this.clone(), o = t, s = 0 | o.words[o.length - 1];
                0 !== (r = 26 - this._countBits(s)) && (o = o.ushln(r), n.iushln(r), s = 0 | o.words[o.length - 1]);
                var a, h = n.length - o.length;
                if ("mod" !== e) {
                    (a = new i(null)).length = h + 1, a.words = new Array(a.length);
                    for(var f = 0; f < a.length; f++)a.words[f] = 0;
                }
                var u = n.clone()._ishlnsubmul(o, 1, h);
                0 === u.negative && (n = u, a && (a.words[h] = 1));
                for(var c = h - 1; c >= 0; c--){
                    var d = 67108864 * (0 | n.words[o.length + c]) + (0 | n.words[o.length + c - 1]);
                    for(d = Math.min(d / s | 0, 67108863), n._ishlnsubmul(o, d, c); 0 !== n.negative;)d--, n.negative = 0, n._ishlnsubmul(o, 1, c), n.isZero() || (n.negative ^= 1);
                    a && (a.words[c] = d);
                }
                return a && a.strip(), n.strip(), "div" !== e && 0 !== r && n.iushrn(r), {
                    div: a || null,
                    mod: n
                };
            }, i.prototype.divmod = function(t, e, n) {
                var o, s, a;
                return r(!t.isZero()), this.isZero() ? {
                    div: new i(0),
                    mod: new i(0)
                } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (o = a.div.neg()), "div" !== e && (s = a.mod.neg(), n && 0 !== s.negative && s.iadd(t)), {
                    div: o,
                    mod: s
                }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), "mod" !== e && (o = a.div.neg()), {
                    div: o,
                    mod: a.mod
                }) : 0 != (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (s = a.mod.neg(), n && 0 !== s.negative && s.isub(t)), {
                    div: a.div,
                    mod: s
                }) : t.length > this.length || this.cmp(t) < 0 ? {
                    div: new i(0),
                    mod: this
                } : 1 === t.length ? "div" === e ? {
                    div: this.divn(t.words[0]),
                    mod: null
                } : "mod" === e ? {
                    div: null,
                    mod: new i(this.modn(t.words[0]))
                } : {
                    div: this.divn(t.words[0]),
                    mod: new i(this.modn(t.words[0]))
                } : this._wordDiv(t, e);
            }, i.prototype.div = function(t) {
                return this.divmod(t, "div", !1).div;
            }, i.prototype.mod = function(t) {
                return this.divmod(t, "mod", !1).mod;
            }, i.prototype.umod = function(t) {
                return this.divmod(t, "mod", !0).mod;
            }, i.prototype.divRound = function(t) {
                var e = this.divmod(t);
                if (e.mod.isZero()) return e.div;
                var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod, n = t.ushrn(1), i = t.andln(1), o = r.cmp(n);
                return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1);
            }, i.prototype.modn = function(t) {
                r(t <= 67108863);
                for(var e = 67108864 % t, n = 0, i = this.length - 1; i >= 0; i--)n = (e * n + (0 | this.words[i])) % t;
                return n;
            }, i.prototype.idivn = function(t) {
                r(t <= 67108863);
                for(var e = 0, n = this.length - 1; n >= 0; n--){
                    var i = (0 | this.words[n]) + 67108864 * e;
                    this.words[n] = i / t | 0, e = i % t;
                }
                return this.strip();
            }, i.prototype.divn = function(t) {
                return this.clone().idivn(t);
            }, i.prototype.egcd = function(t) {
                r(0 === t.negative), r(!t.isZero());
                var e = this, n = t.clone();
                e = 0 !== e.negative ? e.umod(t) : e.clone();
                for(var o = new i(1), s = new i(0), a = new i(0), h = new i(1), f = 0; e.isEven() && n.isEven();)e.iushrn(1), n.iushrn(1), ++f;
                for(var u = n.clone(), c = e.clone(); !e.isZero();){
                    for(var d = 0, l = 1; 0 == (e.words[0] & l) && d < 26; ++d, l <<= 1);
                    if (d > 0) for(e.iushrn(d); d-- > 0;)(o.isOdd() || s.isOdd()) && (o.iadd(u), s.isub(c)), o.iushrn(1), s.iushrn(1);
                    for(var p = 0, b = 1; 0 == (n.words[0] & b) && p < 26; ++p, b <<= 1);
                    if (p > 0) for(n.iushrn(p); p-- > 0;)(a.isOdd() || h.isOdd()) && (a.iadd(u), h.isub(c)), a.iushrn(1), h.iushrn(1);
                    e.cmp(n) >= 0 ? (e.isub(n), o.isub(a), s.isub(h)) : (n.isub(e), a.isub(o), h.isub(s));
                }
                return {
                    a: a,
                    b: h,
                    gcd: n.iushln(f)
                };
            }, i.prototype._invmp = function(t) {
                r(0 === t.negative), r(!t.isZero());
                var e = this, n = t.clone();
                e = 0 !== e.negative ? e.umod(t) : e.clone();
                for(var o, s = new i(1), a = new i(0), h = n.clone(); e.cmpn(1) > 0 && n.cmpn(1) > 0;){
                    for(var f = 0, u = 1; 0 == (e.words[0] & u) && f < 26; ++f, u <<= 1);
                    if (f > 0) for(e.iushrn(f); f-- > 0;)s.isOdd() && s.iadd(h), s.iushrn(1);
                    for(var c = 0, d = 1; 0 == (n.words[0] & d) && c < 26; ++c, d <<= 1);
                    if (c > 0) for(n.iushrn(c); c-- > 0;)a.isOdd() && a.iadd(h), a.iushrn(1);
                    e.cmp(n) >= 0 ? (e.isub(n), s.isub(a)) : (n.isub(e), a.isub(s));
                }
                return (o = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && o.iadd(t), o;
            }, i.prototype.gcd = function(t) {
                if (this.isZero()) return t.abs();
                if (t.isZero()) return this.abs();
                var e = this.clone(), r = t.clone();
                e.negative = 0, r.negative = 0;
                for(var n = 0; e.isEven() && r.isEven(); n++)e.iushrn(1), r.iushrn(1);
                for(;;){
                    for(; e.isEven();)e.iushrn(1);
                    for(; r.isEven();)r.iushrn(1);
                    var i = e.cmp(r);
                    if (i < 0) {
                        var o = e;
                        e = r, r = o;
                    } else if (0 === i || 0 === r.cmpn(1)) break;
                    e.isub(r);
                }
                return r.iushln(n);
            }, i.prototype.invm = function(t) {
                return this.egcd(t).a.umod(t);
            }, i.prototype.isEven = function() {
                return 0 == (1 & this.words[0]);
            }, i.prototype.isOdd = function() {
                return 1 == (1 & this.words[0]);
            }, i.prototype.andln = function(t) {
                return this.words[0] & t;
            }, i.prototype.bincn = function(t) {
                r("number" == typeof t);
                var e = t % 26, n = (t - e) / 26, i = 1 << e;
                if (this.length <= n) return this._expand(n + 1), this.words[n] |= i, this;
                for(var o = i, s = n; 0 !== o && s < this.length; s++){
                    var a = 0 | this.words[s];
                    o = (a += o) >>> 26, a &= 67108863, this.words[s] = a;
                }
                return 0 !== o && (this.words[s] = o, this.length++), this;
            }, i.prototype.isZero = function() {
                return 1 === this.length && 0 === this.words[0];
            }, i.prototype.cmpn = function(t) {
                var e, n = t < 0;
                if (0 !== this.negative && !n) return -1;
                if (0 === this.negative && n) return 1;
                if (this.strip(), this.length > 1) e = 1;
                else {
                    n && (t = -t), r(t <= 67108863, "Number is too big");
                    var i = 0 | this.words[0];
                    e = i === t ? 0 : i < t ? -1 : 1;
                }
                return 0 !== this.negative ? 0 | -e : e;
            }, i.prototype.cmp = function(t) {
                if (0 !== this.negative && 0 === t.negative) return -1;
                if (0 === this.negative && 0 !== t.negative) return 1;
                var e = this.ucmp(t);
                return 0 !== this.negative ? 0 | -e : e;
            }, i.prototype.ucmp = function(t) {
                if (this.length > t.length) return 1;
                if (this.length < t.length) return -1;
                for(var e = 0, r = this.length - 1; r >= 0; r--){
                    var n = 0 | this.words[r], i = 0 | t.words[r];
                    if (n !== i) {
                        n < i ? e = -1 : n > i && (e = 1);
                        break;
                    }
                }
                return e;
            }, i.prototype.gtn = function(t) {
                return 1 === this.cmpn(t);
            }, i.prototype.gt = function(t) {
                return 1 === this.cmp(t);
            }, i.prototype.gten = function(t) {
                return this.cmpn(t) >= 0;
            }, i.prototype.gte = function(t) {
                return this.cmp(t) >= 0;
            }, i.prototype.ltn = function(t) {
                return -1 === this.cmpn(t);
            }, i.prototype.lt = function(t) {
                return -1 === this.cmp(t);
            }, i.prototype.lten = function(t) {
                return this.cmpn(t) <= 0;
            }, i.prototype.lte = function(t) {
                return this.cmp(t) <= 0;
            }, i.prototype.eqn = function(t) {
                return 0 === this.cmpn(t);
            }, i.prototype.eq = function(t) {
                return 0 === this.cmp(t);
            }, i.red = function(t) {
                return new _(t);
            }, i.prototype.toRed = function(t) {
                return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t);
            }, i.prototype.fromRed = function() {
                return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
            }, i.prototype._forceRed = function(t) {
                return this.red = t, this;
            }, i.prototype.forceRed = function(t) {
                return r(!this.red, "Already a number in reduction context"), this._forceRed(t);
            }, i.prototype.redAdd = function(t) {
                return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
            }, i.prototype.redIAdd = function(t) {
                return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
            }, i.prototype.redSub = function(t) {
                return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
            }, i.prototype.redISub = function(t) {
                return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
            }, i.prototype.redShl = function(t) {
                return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
            }, i.prototype.redMul = function(t) {
                return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
            }, i.prototype.redIMul = function(t) {
                return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t);
            }, i.prototype.redSqr = function() {
                return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
            }, i.prototype.redISqr = function() {
                return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
            }, i.prototype.redSqrt = function() {
                return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
            }, i.prototype.redInvm = function() {
                return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
            }, i.prototype.redNeg = function() {
                return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
            }, i.prototype.redPow = function(t) {
                return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
            };
            var m = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };
            function y(t, e) {
                this.name = t, this.p = new i(e, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
            }
            function g() {
                y.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
            }
            function v() {
                y.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
            }
            function w() {
                y.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
            }
            function M() {
                y.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
            }
            function _(t) {
                if ("string" == typeof t) {
                    var e = i._prime(t);
                    this.m = e.p, this.prime = e;
                } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null;
            }
            function A(t) {
                _.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
            }
            y.prototype._tmp = function() {
                var t = new i(null);
                return t.words = new Array(Math.ceil(this.n / 13)), t;
            }, y.prototype.ireduce = function(t) {
                var e, r = t;
                do this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength();
                while (e > this.n);
                var n = e < this.n ? -1 : r.ucmp(this.p);
                return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r;
            }, y.prototype.split = function(t, e) {
                t.iushrn(this.n, 0, e);
            }, y.prototype.imulK = function(t) {
                return t.imul(this.k);
            }, n(g, y), g.prototype.split = function(t, e) {
                for(var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++)e.words[i] = t.words[i];
                if (e.length = n, t.length <= 9) return t.words[0] = 0, void (t.length = 1);
                var o = t.words[9];
                for(e.words[e.length++] = o & r, i = 10; i < t.length; i++){
                    var s = 0 | t.words[i];
                    t.words[i - 10] = (s & r) << 4 | o >>> 22, o = s;
                }
                o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9;
            }, g.prototype.imulK = function(t) {
                t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                for(var e = 0, r = 0; r < t.length; r++){
                    var n = 0 | t.words[r];
                    e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0);
                }
                return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t;
            }, n(v, y), n(w, y), n(M, y), M.prototype.imulK = function(t) {
                for(var e = 0, r = 0; r < t.length; r++){
                    var n = 19 * (0 | t.words[r]) + e, i = 67108863 & n;
                    n >>>= 26, t.words[r] = i, e = n;
                }
                return 0 !== e && (t.words[t.length++] = e), t;
            }, i._prime = function(t) {
                if (m[t]) return m[t];
                var e;
                if ("k256" === t) e = new g;
                else if ("p224" === t) e = new v;
                else if ("p192" === t) e = new w;
                else {
                    if ("p25519" !== t) throw new Error("Unknown prime " + t);
                    e = new M;
                }
                return m[t] = e, e;
            }, _.prototype._verify1 = function(t) {
                r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers");
            }, _.prototype._verify2 = function(t, e) {
                r(0 == (t.negative | e.negative), "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers");
            }, _.prototype.imod = function(t) {
                return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this);
            }, _.prototype.neg = function(t) {
                return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }, _.prototype.add = function(t, e) {
                this._verify2(t, e);
                var r = t.add(e);
                return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
            }, _.prototype.iadd = function(t, e) {
                this._verify2(t, e);
                var r = t.iadd(e);
                return r.cmp(this.m) >= 0 && r.isub(this.m), r;
            }, _.prototype.sub = function(t, e) {
                this._verify2(t, e);
                var r = t.sub(e);
                return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
            }, _.prototype.isub = function(t, e) {
                this._verify2(t, e);
                var r = t.isub(e);
                return r.cmpn(0) < 0 && r.iadd(this.m), r;
            }, _.prototype.shl = function(t, e) {
                return this._verify1(t), this.imod(t.ushln(e));
            }, _.prototype.imul = function(t, e) {
                return this._verify2(t, e), this.imod(t.imul(e));
            }, _.prototype.mul = function(t, e) {
                return this._verify2(t, e), this.imod(t.mul(e));
            }, _.prototype.isqr = function(t) {
                return this.imul(t, t.clone());
            }, _.prototype.sqr = function(t) {
                return this.mul(t, t);
            }, _.prototype.sqrt = function(t) {
                if (t.isZero()) return t.clone();
                var e = this.m.andln(3);
                if (r(e % 2 == 1), 3 === e) {
                    var n = this.m.add(new i(1)).iushrn(2);
                    return this.pow(t, n);
                }
                for(var o = this.m.subn(1), s = 0; !o.isZero() && 0 === o.andln(1);)s++, o.iushrn(1);
                r(!o.isZero());
                var a = new i(1).toRed(this), h = a.redNeg(), f = this.m.subn(1).iushrn(1), u = this.m.bitLength();
                for(u = new i(2 * u * u).toRed(this); 0 !== this.pow(u, f).cmp(h);)u.redIAdd(h);
                for(var c = this.pow(u, o), d = this.pow(t, o.addn(1).iushrn(1)), l = this.pow(t, o), p = s; 0 !== l.cmp(a);){
                    for(var b = l, m = 0; 0 !== b.cmp(a); m++)b = b.redSqr();
                    r(m < p);
                    var y = this.pow(c, new i(1).iushln(p - m - 1));
                    d = d.redMul(y), c = y.redSqr(), l = l.redMul(c), p = m;
                }
                return d;
            }, _.prototype.invm = function(t) {
                var e = t._invmp(this.m);
                return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e);
            }, _.prototype.pow = function(t, e) {
                if (e.isZero()) return new i(1).toRed(this);
                if (0 === e.cmpn(1)) return t.clone();
                var r = new Array(16);
                r[0] = new i(1).toRed(this), r[1] = t;
                for(var n = 2; n < r.length; n++)r[n] = this.mul(r[n - 1], t);
                var o = r[0], s = 0, a = 0, h = e.bitLength() % 26;
                for(0 === h && (h = 26), n = e.length - 1; n >= 0; n--){
                    for(var f = e.words[n], u = h - 1; u >= 0; u--){
                        var c = f >> u & 1;
                        o !== r[0] && (o = this.sqr(o)), 0 !== c || 0 !== s ? (s <<= 1, s |= c, (4 === ++a || 0 === n && 0 === u) && (o = this.mul(o, r[s]), a = 0, s = 0)) : a = 0;
                    }
                    h = 26;
                }
                return o;
            }, _.prototype.convertTo = function(t) {
                var e = t.umod(this.m);
                return e === t ? e.clone() : e;
            }, _.prototype.convertFrom = function(t) {
                var e = t.clone();
                return e.red = null, e;
            }, i.mont = function(t) {
                return new A(t);
            }, n(A, _), A.prototype.convertTo = function(t) {
                return this.imod(t.ushln(this.shift));
            }, A.prototype.convertFrom = function(t) {
                var e = this.imod(t.mul(this.rinv));
                return e.red = null, e;
            }, A.prototype.imul = function(t, e) {
                if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
                var r = t.imul(e), n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), i = r.isub(n).iushrn(this.shift), o = i;
                return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this);
            }, A.prototype.mul = function(t, e) {
                if (t.isZero() || e.isZero()) return new i(0)._forceRed(this);
                var r = t.mul(e), n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), o = r.isub(n).iushrn(this.shift), s = o;
                return o.cmp(this.m) >= 0 ? s = o.isub(this.m) : o.cmpn(0) < 0 && (s = o.iadd(this.m)), s._forceRed(this);
            }, A.prototype.invm = function(t) {
                return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
            };
        }(t, Ht);
    }), bn = mn;
    function mn(t, e) {
        if (!t) throw new Error(e || "Assertion failed");
    }
    mn.equal = function(t, e, r) {
        if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e);
    };
    var yn, gn = Gt(function(t, e) {
        var r = e;
        function n(t) {
            return 1 === t.length ? "0" + t : t;
        }
        function i(t) {
            for(var e = "", r = 0; r < t.length; r++)e += n(t[r].toString(16));
            return e;
        }
        r.toArray = function(t, e) {
            if (Array.isArray(t)) return t.slice();
            if (!t) return [];
            var r = [];
            if ("string" != typeof t) {
                for(var n = 0; n < t.length; n++)r[n] = 0 | t[n];
                return r;
            }
            if ("hex" === e) {
                (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t);
                for(n = 0; n < t.length; n += 2)r.push(parseInt(t[n] + t[n + 1], 16));
            } else for(n = 0; n < t.length; n++){
                var i = t.charCodeAt(n), o = i >> 8, s = 255 & i;
                o ? r.push(o, s) : r.push(s);
            }
            return r;
        }, r.zero2 = n, r.toHex = i, r.encode = function(t, e) {
            return "hex" === e ? i(t) : t;
        };
    }), vn = Gt(function(t, e) {
        var r = e;
        r.assert = bn, r.toArray = gn.toArray, r.zero2 = gn.zero2, r.toHex = gn.toHex, r.encode = gn.encode, r.getNAF = function(t, e, r) {
            var n = new Array(Math.max(t.bitLength(), r) + 1);
            n.fill(0);
            for(var i = 1 << e + 1, o = t.clone(), s = 0; s < n.length; s++){
                var a, h = o.andln(i - 1);
                o.isOdd() ? (a = h > (i >> 1) - 1 ? (i >> 1) - h : h, o.isubn(a)) : a = 0, n[s] = a, o.iushrn(1);
            }
            return n;
        }, r.getJSF = function(t, e) {
            var r = [
                [],
                []
            ];
            t = t.clone(), e = e.clone();
            for(var n, i = 0, o = 0; t.cmpn(-i) > 0 || e.cmpn(-o) > 0;){
                var s, a, h = t.andln(3) + i & 3, f = e.andln(3) + o & 3;
                3 === h && (h = -1), 3 === f && (f = -1), s = 0 == (1 & h) ? 0 : 3 !== (n = t.andln(7) + i & 7) && 5 !== n || 2 !== f ? h : -h, r[0].push(s), a = 0 == (1 & f) ? 0 : 3 !== (n = e.andln(7) + o & 7) && 5 !== n || 2 !== h ? f : -f, r[1].push(a), 2 * i === s + 1 && (i = 1 - i), 2 * o === a + 1 && (o = 1 - o), t.iushrn(1), e.iushrn(1);
            }
            return r;
        }, r.cachedProperty = function(t, e, r) {
            var n = "_" + e;
            t.prototype[e] = function() {
                return void 0 !== this[n] ? this[n] : this[n] = r.call(this);
            };
        }, r.parseBytes = function(t) {
            return "string" == typeof t ? r.toArray(t, "hex") : t;
        }, r.intFromLE = function(t) {
            return new pn(t, "hex", "le");
        };
    }), wn = function(t) {
        return yn || (yn = new Mn(null)), yn.generate(t);
    };
    function Mn(t) {
        this.rand = t;
    }
    var _n = Mn;
    if (Mn.prototype.generate = function(t) {
        return this._rand(t);
    }, Mn.prototype._rand = function(t) {
        if (this.rand.getBytes) return this.rand.getBytes(t);
        for(var e = new Uint8Array(t), r = 0; r < e.length; r++)e[r] = this.rand.getByte();
        return e;
    }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? Mn.prototype._rand = function(t) {
        var e = new Uint8Array(t);
        return self.crypto.getRandomValues(e), e;
    } : self.msCrypto && self.msCrypto.getRandomValues ? Mn.prototype._rand = function(t) {
        var e = new Uint8Array(t);
        return self.msCrypto.getRandomValues(e), e;
    } : "object" == typeof window && (Mn.prototype._rand = function() {
        throw new Error("Not implemented yet");
    });
    else try {
        var An = Jt;
        if ("function" != typeof An.randomBytes) throw new Error("Not supported");
        Mn.prototype._rand = function(t) {
            return An.randomBytes(t);
        };
    } catch (t) {}
    wn.Rand = _n;
    var Sn = vn.getNAF, En = vn.getJSF, xn = vn.assert;
    function In(t, e) {
        this.type = t, this.p = new pn(e.p, 16), this.red = e.prime ? pn.red(e.prime) : pn.mont(this.p), this.zero = new pn(0).toRed(this.red), this.one = new pn(1).toRed(this.red), this.two = new pn(2).toRed(this.red), this.n = e.n && new pn(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
    }
    var kn = In;
    function Rn(t, e) {
        this.curve = t, this.type = e, this.precomputed = null;
    }
    In.prototype.point = function() {
        throw new Error("Not implemented");
    }, In.prototype.validate = function() {
        throw new Error("Not implemented");
    }, In.prototype._fixedNafMul = function(t, e) {
        xn(t.precomputed);
        var r = t._getDoubles(), n = Sn(e, 1, this._bitLength), i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
        i /= 3;
        var o, s, a = [];
        for(o = 0; o < n.length; o += r.step){
            s = 0;
            for(var h = o + r.step - 1; h >= o; h--)s = (s << 1) + n[h];
            a.push(s);
        }
        for(var f = this.jpoint(null, null, null), u = this.jpoint(null, null, null), c = i; c > 0; c--){
            for(o = 0; o < a.length; o++)(s = a[o]) === c ? u = u.mixedAdd(r.points[o]) : s === -c && (u = u.mixedAdd(r.points[o].neg()));
            f = f.add(u);
        }
        return f.toP();
    }, In.prototype._wnafMul = function(t, e) {
        var r = 4, n = t._getNAFPoints(r);
        r = n.wnd;
        for(var i = n.points, o = Sn(e, r, this._bitLength), s = this.jpoint(null, null, null), a = o.length - 1; a >= 0; a--){
            for(var h = 0; a >= 0 && 0 === o[a]; a--)h++;
            if (a >= 0 && h++, s = s.dblp(h), a < 0) break;
            var f = o[a];
            xn(0 !== f), s = "affine" === t.type ? f > 0 ? s.mixedAdd(i[f - 1 >> 1]) : s.mixedAdd(i[-f - 1 >> 1].neg()) : f > 0 ? s.add(i[f - 1 >> 1]) : s.add(i[-f - 1 >> 1].neg());
        }
        return "affine" === t.type ? s.toP() : s;
    }, In.prototype._wnafMulAdd = function(t, e, r, n, i) {
        var o, s, a, h = this._wnafT1, f = this._wnafT2, u = this._wnafT3, c = 0;
        for(o = 0; o < n; o++){
            var d = (a = e[o])._getNAFPoints(t);
            h[o] = d.wnd, f[o] = d.points;
        }
        for(o = n - 1; o >= 1; o -= 2){
            var l = o - 1, p = o;
            if (1 === h[l] && 1 === h[p]) {
                var b = [
                    e[l],
                    null,
                    null,
                    e[p]
                ];
                0 === e[l].y.cmp(e[p].y) ? (b[1] = e[l].add(e[p]), b[2] = e[l].toJ().mixedAdd(e[p].neg())) : 0 === e[l].y.cmp(e[p].y.redNeg()) ? (b[1] = e[l].toJ().mixedAdd(e[p]), b[2] = e[l].add(e[p].neg())) : (b[1] = e[l].toJ().mixedAdd(e[p]), b[2] = e[l].toJ().mixedAdd(e[p].neg()));
                var m = [
                    -3,
                    -1,
                    -5,
                    -7,
                    0,
                    7,
                    5,
                    1,
                    3
                ], y = En(r[l], r[p]);
                for(c = Math.max(y[0].length, c), u[l] = new Array(c), u[p] = new Array(c), s = 0; s < c; s++){
                    var g = 0 | y[0][s], v = 0 | y[1][s];
                    u[l][s] = m[3 * (g + 1) + (v + 1)], u[p][s] = 0, f[l] = b;
                }
            } else u[l] = Sn(r[l], h[l], this._bitLength), u[p] = Sn(r[p], h[p], this._bitLength), c = Math.max(u[l].length, c), c = Math.max(u[p].length, c);
        }
        var w = this.jpoint(null, null, null), M = this._wnafT4;
        for(o = c; o >= 0; o--){
            for(var _ = 0; o >= 0;){
                var A = !0;
                for(s = 0; s < n; s++)M[s] = 0 | u[s][o], 0 !== M[s] && (A = !1);
                if (!A) break;
                _++, o--;
            }
            if (o >= 0 && _++, w = w.dblp(_), o < 0) break;
            for(s = 0; s < n; s++){
                var S = M[s];
                0 !== S && (S > 0 ? a = f[s][S - 1 >> 1] : S < 0 && (a = f[s][-S - 1 >> 1].neg()), w = "affine" === a.type ? w.mixedAdd(a) : w.add(a));
            }
        }
        for(o = 0; o < n; o++)f[o] = null;
        return i ? w : w.toP();
    }, In.BasePoint = Rn, Rn.prototype.eq = function() {
        throw new Error("Not implemented");
    }, Rn.prototype.validate = function() {
        return this.curve.validate(this);
    }, In.prototype.decodePoint = function(t, e) {
        t = vn.toArray(t, e);
        var r = this.p.byteLength();
        if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r) return 6 === t[0] ? xn(t[t.length - 1] % 2 == 0) : 7 === t[0] && xn(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
        if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
        throw new Error("Unknown point format");
    }, Rn.prototype.encodeCompressed = function(t) {
        return this.encode(t, !0);
    }, Rn.prototype._encode = function(t) {
        var e = this.curve.p.byteLength(), r = this.getX().toArray("be", e);
        return t ? [
            this.getY().isEven() ? 2 : 3
        ].concat(r) : [
            4
        ].concat(r, this.getY().toArray("be", e));
    }, Rn.prototype.encode = function(t, e) {
        return vn.encode(this._encode(e), t);
    }, Rn.prototype.precompute = function(t) {
        if (this.precomputed) return this;
        var e = {
            doubles: null,
            naf: null,
            beta: null
        };
        return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this;
    }, Rn.prototype._hasDoubles = function(t) {
        if (!this.precomputed) return !1;
        var e = this.precomputed.doubles;
        return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step);
    }, Rn.prototype._getDoubles = function(t, e) {
        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
        for(var r = [
            this
        ], n = this, i = 0; i < e; i += t){
            for(var o = 0; o < t; o++)n = n.dbl();
            r.push(n);
        }
        return {
            step: t,
            points: r
        };
    }, Rn.prototype._getNAFPoints = function(t) {
        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
        for(var e = [
            this
        ], r = (1 << t) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++)e[i] = e[i - 1].add(n);
        return {
            wnd: t,
            points: e
        };
    }, Rn.prototype._getBeta = function() {
        return null;
    }, Rn.prototype.dblp = function(t) {
        for(var e = this, r = 0; r < t; r++)e = e.dbl();
        return e;
    };
    var Bn = Gt(function(t) {
        "function" == typeof Object.create ? t.exports = function(t, e) {
            e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }));
        } : t.exports = function(t, e) {
            if (e) {
                t.super_ = e;
                var r = function() {};
                r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t;
            }
        };
    }), Tn = vn.assert;
    function Un(t) {
        kn.call(this, "short", t), this.a = new pn(t.a, 16).toRed(this.red), this.b = new pn(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
    }
    Bn(Un, kn);
    var On = Un;
    function Pn(t, e, r, n) {
        kn.BasePoint.call(this, t, "affine"), null === e && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new pn(e, 16), this.y = new pn(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
    }
    function Ln(t, e, r, n) {
        kn.BasePoint.call(this, t, "jacobian"), null === e && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new pn(0)) : (this.x = new pn(e, 16), this.y = new pn(r, 16), this.z = new pn(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
    }
    function Nn(t) {
        kn.call(this, "mont", t), this.a = new pn(t.a, 16).toRed(this.red), this.b = new pn(t.b, 16).toRed(this.red), this.i4 = new pn(4).toRed(this.red).redInvm(), this.two = new pn(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two));
    }
    Un.prototype._getEndomorphism = function(t) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var e, r;
            if (t.beta) e = new pn(t.beta, 16).toRed(this.red);
            else {
                var n = this._getEndoRoots(this.p);
                e = (e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
            }
            if (t.lambda) r = new pn(t.lambda, 16);
            else {
                var i = this._getEndoRoots(this.n);
                0 === this.g.mul(i[0]).x.cmp(this.g.x.redMul(e)) ? r = i[0] : (r = i[1], Tn(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))));
            }
            return {
                beta: e,
                lambda: r,
                basis: t.basis ? t.basis.map(function(t) {
                    return {
                        a: new pn(t.a, 16),
                        b: new pn(t.b, 16)
                    };
                }) : this._getEndoBasis(r)
            };
        }
    }, Un.prototype._getEndoRoots = function(t) {
        var e = t === this.p ? this.red : pn.mont(t), r = new pn(2).toRed(e).redInvm(), n = r.redNeg(), i = new pn(3).toRed(e).redNeg().redSqrt().redMul(r);
        return [
            n.redAdd(i).fromRed(),
            n.redSub(i).fromRed()
        ];
    }, Un.prototype._getEndoBasis = function(t) {
        for(var e, r, n, i, o, s, a, h, f, u = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), c = t, d = this.n.clone(), l = new pn(1), p = new pn(0), b = new pn(0), m = new pn(1), y = 0; 0 !== c.cmpn(0);){
            var g = d.div(c);
            h = d.sub(g.mul(c)), f = b.sub(g.mul(l));
            var v = m.sub(g.mul(p));
            if (!n && h.cmp(u) < 0) e = a.neg(), r = l, n = h.neg(), i = f;
            else if (n && 2 == ++y) break;
            a = h, d = c, c = h, b = l, l = f, m = p, p = v;
        }
        o = h.neg(), s = f;
        var w = n.sqr().add(i.sqr());
        return o.sqr().add(s.sqr()).cmp(w) >= 0 && (o = e, s = r), n.negative && (n = n.neg(), i = i.neg()), o.negative && (o = o.neg(), s = s.neg()), [
            {
                a: n,
                b: i
            },
            {
                a: o,
                b: s
            }
        ];
    }, Un.prototype._endoSplit = function(t) {
        var e = this.endo.basis, r = e[0], n = e[1], i = n.b.mul(t).divRound(this.n), o = r.b.neg().mul(t).divRound(this.n), s = i.mul(r.a), a = o.mul(n.a), h = i.mul(r.b), f = o.mul(n.b);
        return {
            k1: t.sub(s).sub(a),
            k2: h.add(f).neg()
        };
    }, Un.prototype.pointFromX = function(t, e) {
        (t = new pn(t, 16)).red || (t = t.toRed(this.red));
        var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b), n = r.redSqrt();
        if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
        var i = n.fromRed().isOdd();
        return (e && !i || !e && i) && (n = n.redNeg()), this.point(t, n);
    }, Un.prototype.validate = function(t) {
        if (t.inf) return !0;
        var e = t.x, r = t.y, n = this.a.redMul(e), i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
        return 0 === r.redSqr().redISub(i).cmpn(0);
    }, Un.prototype._endoWnafMulAdd = function(t, e, r) {
        for(var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < t.length; o++){
            var s = this._endoSplit(e[o]), a = t[o], h = a._getBeta();
            s.k1.negative && (s.k1.ineg(), a = a.neg(!0)), s.k2.negative && (s.k2.ineg(), h = h.neg(!0)), n[2 * o] = a, n[2 * o + 1] = h, i[2 * o] = s.k1, i[2 * o + 1] = s.k2;
        }
        for(var f = this._wnafMulAdd(1, n, i, 2 * o, r), u = 0; u < 2 * o; u++)n[u] = null, i[u] = null;
        return f;
    }, Bn(Pn, kn.BasePoint), Un.prototype.point = function(t, e, r) {
        return new Pn(this, t, e, r);
    }, Un.prototype.pointFromJSON = function(t, e) {
        return Pn.fromJSON(this, t, e);
    }, Pn.prototype._getBeta = function() {
        if (this.curve.endo) {
            var t = this.precomputed;
            if (t && t.beta) return t.beta;
            var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (t) {
                var r = this.curve, n = function(t) {
                    return r.point(t.x.redMul(r.endo.beta), t.y);
                };
                t.beta = e, e.precomputed = {
                    beta: null,
                    naf: t.naf && {
                        wnd: t.naf.wnd,
                        points: t.naf.points.map(n)
                    },
                    doubles: t.doubles && {
                        step: t.doubles.step,
                        points: t.doubles.points.map(n)
                    }
                };
            }
            return e;
        }
    }, Pn.prototype.toJSON = function() {
        return this.precomputed ? [
            this.x,
            this.y,
            this.precomputed && {
                doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                },
                naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                }
            }
        ] : [
            this.x,
            this.y
        ];
    }, Pn.fromJSON = function(t, e, r) {
        "string" == typeof e && (e = JSON.parse(e));
        var n = t.point(e[0], e[1], r);
        if (!e[2]) return n;
        function i(e) {
            return t.point(e[0], e[1], r);
        }
        var o = e[2];
        return n.precomputed = {
            beta: null,
            doubles: o.doubles && {
                step: o.doubles.step,
                points: [
                    n
                ].concat(o.doubles.points.map(i))
            },
            naf: o.naf && {
                wnd: o.naf.wnd,
                points: [
                    n
                ].concat(o.naf.points.map(i))
            }
        }, n;
    }, Pn.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
    }, Pn.prototype.isInfinity = function() {
        return this.inf;
    }, Pn.prototype.add = function(t) {
        if (this.inf) return t;
        if (t.inf) return this;
        if (this.eq(t)) return this.dbl();
        if (this.neg().eq(t)) return this.curve.point(null, null);
        if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
        var e = this.y.redSub(t.y);
        0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
        var r = e.redSqr().redISub(this.x).redISub(t.x), n = e.redMul(this.x.redSub(r)).redISub(this.y);
        return this.curve.point(r, n);
    }, Pn.prototype.dbl = function() {
        if (this.inf) return this;
        var t = this.y.redAdd(this.y);
        if (0 === t.cmpn(0)) return this.curve.point(null, null);
        var e = this.curve.a, r = this.x.redSqr(), n = t.redInvm(), i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n), o = i.redSqr().redISub(this.x.redAdd(this.x)), s = i.redMul(this.x.redSub(o)).redISub(this.y);
        return this.curve.point(o, s);
    }, Pn.prototype.getX = function() {
        return this.x.fromRed();
    }, Pn.prototype.getY = function() {
        return this.y.fromRed();
    }, Pn.prototype.mul = function(t) {
        return t = new pn(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([
            this
        ], [
            t
        ]) : this.curve._wnafMul(this, t);
    }, Pn.prototype.mulAdd = function(t, e, r) {
        var n = [
            this,
            e
        ], i = [
            t,
            r
        ];
        return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2);
    }, Pn.prototype.jmulAdd = function(t, e, r) {
        var n = [
            this,
            e
        ], i = [
            t,
            r
        ];
        return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0);
    }, Pn.prototype.eq = function(t) {
        return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y));
    }, Pn.prototype.neg = function(t) {
        if (this.inf) return this;
        var e = this.curve.point(this.x, this.y.redNeg());
        if (t && this.precomputed) {
            var r = this.precomputed, n = function(t) {
                return t.neg();
            };
            e.precomputed = {
                naf: r.naf && {
                    wnd: r.naf.wnd,
                    points: r.naf.points.map(n)
                },
                doubles: r.doubles && {
                    step: r.doubles.step,
                    points: r.doubles.points.map(n)
                }
            };
        }
        return e;
    }, Pn.prototype.toJ = function() {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one);
    }, Bn(Ln, kn.BasePoint), Un.prototype.jpoint = function(t, e, r) {
        return new Ln(this, t, e, r);
    }, Ln.prototype.toP = function() {
        if (this.isInfinity()) return this.curve.point(null, null);
        var t = this.z.redInvm(), e = t.redSqr(), r = this.x.redMul(e), n = this.y.redMul(e).redMul(t);
        return this.curve.point(r, n);
    }, Ln.prototype.neg = function() {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
    }, Ln.prototype.add = function(t) {
        if (this.isInfinity()) return t;
        if (t.isInfinity()) return this;
        var e = t.z.redSqr(), r = this.z.redSqr(), n = this.x.redMul(e), i = t.x.redMul(r), o = this.y.redMul(e.redMul(t.z)), s = t.y.redMul(r.redMul(this.z)), a = n.redSub(i), h = o.redSub(s);
        if (0 === a.cmpn(0)) return 0 !== h.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var f = a.redSqr(), u = f.redMul(a), c = n.redMul(f), d = h.redSqr().redIAdd(u).redISub(c).redISub(c), l = h.redMul(c.redISub(d)).redISub(o.redMul(u)), p = this.z.redMul(t.z).redMul(a);
        return this.curve.jpoint(d, l, p);
    }, Ln.prototype.mixedAdd = function(t) {
        if (this.isInfinity()) return t.toJ();
        if (t.isInfinity()) return this;
        var e = this.z.redSqr(), r = this.x, n = t.x.redMul(e), i = this.y, o = t.y.redMul(e).redMul(this.z), s = r.redSub(n), a = i.redSub(o);
        if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var h = s.redSqr(), f = h.redMul(s), u = r.redMul(h), c = a.redSqr().redIAdd(f).redISub(u).redISub(u), d = a.redMul(u.redISub(c)).redISub(i.redMul(f)), l = this.z.redMul(s);
        return this.curve.jpoint(c, d, l);
    }, Ln.prototype.dblp = function(t) {
        if (0 === t) return this;
        if (this.isInfinity()) return this;
        if (!t) return this.dbl();
        var e;
        if (this.curve.zeroA || this.curve.threeA) {
            var r = this;
            for(e = 0; e < t; e++)r = r.dbl();
            return r;
        }
        var n = this.curve.a, i = this.curve.tinv, o = this.x, s = this.y, a = this.z, h = a.redSqr().redSqr(), f = s.redAdd(s);
        for(e = 0; e < t; e++){
            var u = o.redSqr(), c = f.redSqr(), d = c.redSqr(), l = u.redAdd(u).redIAdd(u).redIAdd(n.redMul(h)), p = o.redMul(c), b = l.redSqr().redISub(p.redAdd(p)), m = p.redISub(b), y = l.redMul(m);
            y = y.redIAdd(y).redISub(d);
            var g = f.redMul(a);
            e + 1 < t && (h = h.redMul(d)), o = b, a = g, f = y;
        }
        return this.curve.jpoint(o, f.redMul(i), a);
    }, Ln.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
    }, Ln.prototype._zeroDbl = function() {
        var t, e, r;
        if (this.zOne) {
            var n = this.x.redSqr(), i = this.y.redSqr(), o = i.redSqr(), s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n), h = a.redSqr().redISub(s).redISub(s), f = o.redIAdd(o);
            f = (f = f.redIAdd(f)).redIAdd(f), t = h, e = a.redMul(s.redISub(h)).redISub(f), r = this.y.redAdd(this.y);
        } else {
            var u = this.x.redSqr(), c = this.y.redSqr(), d = c.redSqr(), l = this.x.redAdd(c).redSqr().redISub(u).redISub(d);
            l = l.redIAdd(l);
            var p = u.redAdd(u).redIAdd(u), b = p.redSqr(), m = d.redIAdd(d);
            m = (m = m.redIAdd(m)).redIAdd(m), t = b.redISub(l).redISub(l), e = p.redMul(l.redISub(t)).redISub(m), r = (r = this.y.redMul(this.z)).redIAdd(r);
        }
        return this.curve.jpoint(t, e, r);
    }, Ln.prototype._threeDbl = function() {
        var t, e, r;
        if (this.zOne) {
            var n = this.x.redSqr(), i = this.y.redSqr(), o = i.redSqr(), s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            s = s.redIAdd(s);
            var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a), h = a.redSqr().redISub(s).redISub(s);
            t = h;
            var f = o.redIAdd(o);
            f = (f = f.redIAdd(f)).redIAdd(f), e = a.redMul(s.redISub(h)).redISub(f), r = this.y.redAdd(this.y);
        } else {
            var u = this.z.redSqr(), c = this.y.redSqr(), d = this.x.redMul(c), l = this.x.redSub(u).redMul(this.x.redAdd(u));
            l = l.redAdd(l).redIAdd(l);
            var p = d.redIAdd(d), b = (p = p.redIAdd(p)).redAdd(p);
            t = l.redSqr().redISub(b), r = this.y.redAdd(this.z).redSqr().redISub(c).redISub(u);
            var m = c.redSqr();
            m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m), e = l.redMul(p.redISub(t)).redISub(m);
        }
        return this.curve.jpoint(t, e, r);
    }, Ln.prototype._dbl = function() {
        var t = this.curve.a, e = this.x, r = this.y, n = this.z, i = n.redSqr().redSqr(), o = e.redSqr(), s = r.redSqr(), a = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)), h = e.redAdd(e), f = (h = h.redIAdd(h)).redMul(s), u = a.redSqr().redISub(f.redAdd(f)), c = f.redISub(u), d = s.redSqr();
        d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
        var l = a.redMul(c).redISub(d), p = r.redAdd(r).redMul(n);
        return this.curve.jpoint(u, l, p);
    }, Ln.prototype.trpl = function() {
        if (!this.curve.zeroA) return this.dbl().add(this);
        var t = this.x.redSqr(), e = this.y.redSqr(), r = this.z.redSqr(), n = e.redSqr(), i = t.redAdd(t).redIAdd(t), o = i.redSqr(), s = this.x.redAdd(e).redSqr().redISub(t).redISub(n), a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(), h = n.redIAdd(n);
        h = (h = (h = h.redIAdd(h)).redIAdd(h)).redIAdd(h);
        var f = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(h), u = e.redMul(f);
        u = (u = u.redIAdd(u)).redIAdd(u);
        var c = this.x.redMul(a).redISub(u);
        c = (c = c.redIAdd(c)).redIAdd(c);
        var d = this.y.redMul(f.redMul(h.redISub(f)).redISub(s.redMul(a)));
        d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
        var l = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
        return this.curve.jpoint(c, d, l);
    }, Ln.prototype.mul = function(t, e) {
        return t = new pn(t, e), this.curve._wnafMul(this, t);
    }, Ln.prototype.eq = function(t) {
        if ("affine" === t.type) return this.eq(t.toJ());
        if (this === t) return !0;
        var e = this.z.redSqr(), r = t.z.redSqr();
        if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
        var n = e.redMul(this.z), i = r.redMul(t.z);
        return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0);
    }, Ln.prototype.eqXToP = function(t) {
        var e = this.z.redSqr(), r = t.toRed(this.curve.red).redMul(e);
        if (0 === this.x.cmp(r)) return !0;
        for(var n = t.clone(), i = this.curve.redN.redMul(e);;){
            if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
            if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0;
        }
    }, Ln.prototype.inspect = function() {
        return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
    }, Ln.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0);
    }, Bn(Nn, kn);
    var zn = Nn;
    function Cn(t, e, r) {
        kn.BasePoint.call(this, t, "projective"), null === e && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new pn(e, 16), this.z = new pn(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)));
    }
    Nn.prototype.validate = function(t) {
        var e = t.normalize().x, r = e.redSqr(), n = r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e);
        return 0 === n.redSqrt().redSqr().cmp(n);
    }, Bn(Cn, kn.BasePoint), Nn.prototype.decodePoint = function(t, e) {
        return this.point(vn.toArray(t, e), 1);
    }, Nn.prototype.point = function(t, e) {
        return new Cn(this, t, e);
    }, Nn.prototype.pointFromJSON = function(t) {
        return Cn.fromJSON(this, t);
    }, Cn.prototype.precompute = function() {}, Cn.prototype._encode = function() {
        return this.getX().toArray("be", this.curve.p.byteLength());
    }, Cn.fromJSON = function(t, e) {
        return new Cn(t, e[0], e[1] || t.one);
    }, Cn.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
    }, Cn.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0);
    }, Cn.prototype.dbl = function() {
        var t = this.x.redAdd(this.z).redSqr(), e = this.x.redSub(this.z).redSqr(), r = t.redSub(e), n = t.redMul(e), i = r.redMul(e.redAdd(this.curve.a24.redMul(r)));
        return this.curve.point(n, i);
    }, Cn.prototype.add = function() {
        throw new Error("Not supported on Montgomery curve");
    }, Cn.prototype.diffAdd = function(t, e) {
        var r = this.x.redAdd(this.z), n = this.x.redSub(this.z), i = t.x.redAdd(t.z), o = t.x.redSub(t.z).redMul(r), s = i.redMul(n), a = e.z.redMul(o.redAdd(s).redSqr()), h = e.x.redMul(o.redISub(s).redSqr());
        return this.curve.point(a, h);
    }, Cn.prototype.mul = function(t) {
        for(var e = t.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== e.cmpn(0); e.iushrn(1))i.push(e.andln(1));
        for(var o = i.length - 1; o >= 0; o--)0 === i[o] ? (r = r.diffAdd(n, this), n = n.dbl()) : (n = r.diffAdd(n, this), r = r.dbl());
        return n;
    }, Cn.prototype.mulAdd = function() {
        throw new Error("Not supported on Montgomery curve");
    }, Cn.prototype.jumlAdd = function() {
        throw new Error("Not supported on Montgomery curve");
    }, Cn.prototype.eq = function(t) {
        return 0 === this.getX().cmp(t.getX());
    }, Cn.prototype.normalize = function() {
        return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this;
    }, Cn.prototype.getX = function() {
        return this.normalize(), this.x.fromRed();
    };
    var qn = vn.assert;
    function jn(t) {
        this.twisted = 1 != (0 | t.a), this.mOneA = this.twisted && -1 == (0 | t.a), this.extended = this.mOneA, kn.call(this, "edwards", t), this.a = new pn(t.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new pn(t.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new pn(t.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), qn(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | t.c);
    }
    Bn(jn, kn);
    var Dn = jn;
    function Fn(t, e, r, n, i) {
        kn.BasePoint.call(this, t, "projective"), null === e && null === r && null === n ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new pn(e, 16), this.y = new pn(r, 16), this.z = n ? new pn(n, 16) : this.curve.one, this.t = i && new pn(i, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
    }
    jn.prototype._mulA = function(t) {
        return this.mOneA ? t.redNeg() : this.a.redMul(t);
    }, jn.prototype._mulC = function(t) {
        return this.oneC ? t : this.c.redMul(t);
    }, jn.prototype.jpoint = function(t, e, r, n) {
        return this.point(t, e, r, n);
    }, jn.prototype.pointFromX = function(t, e) {
        (t = new pn(t, 16)).red || (t = t.toRed(this.red));
        var r = t.redSqr(), n = this.c2.redSub(this.a.redMul(r)), i = this.one.redSub(this.c2.redMul(this.d).redMul(r)), o = n.redMul(i.redInvm()), s = o.redSqrt();
        if (0 !== s.redSqr().redSub(o).cmp(this.zero)) throw new Error("invalid point");
        var a = s.fromRed().isOdd();
        return (e && !a || !e && a) && (s = s.redNeg()), this.point(t, s);
    }, jn.prototype.pointFromY = function(t, e) {
        (t = new pn(t, 16)).red || (t = t.toRed(this.red));
        var r = t.redSqr(), n = r.redSub(this.c2), i = r.redMul(this.d).redMul(this.c2).redSub(this.a), o = n.redMul(i.redInvm());
        if (0 === o.cmp(this.zero)) {
            if (e) throw new Error("invalid point");
            return this.point(this.zero, t);
        }
        var s = o.redSqrt();
        if (0 !== s.redSqr().redSub(o).cmp(this.zero)) throw new Error("invalid point");
        return s.fromRed().isOdd() !== e && (s = s.redNeg()), this.point(s, t);
    }, jn.prototype.validate = function(t) {
        if (t.isInfinity()) return !0;
        t.normalize();
        var e = t.x.redSqr(), r = t.y.redSqr(), n = e.redMul(this.a).redAdd(r), i = this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)));
        return 0 === n.cmp(i);
    }, Bn(Fn, kn.BasePoint), jn.prototype.pointFromJSON = function(t) {
        return Fn.fromJSON(this, t);
    }, jn.prototype.point = function(t, e, r, n) {
        return new Fn(this, t, e, r, n);
    }, Fn.fromJSON = function(t, e) {
        return new Fn(t, e[0], e[1], e[2]);
    }, Fn.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
    }, Fn.prototype.isInfinity = function() {
        return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c));
    }, Fn.prototype._extDbl = function() {
        var t = this.x.redSqr(), e = this.y.redSqr(), r = this.z.redSqr();
        r = r.redIAdd(r);
        var n = this.curve._mulA(t), i = this.x.redAdd(this.y).redSqr().redISub(t).redISub(e), o = n.redAdd(e), s = o.redSub(r), a = n.redSub(e), h = i.redMul(s), f = o.redMul(a), u = i.redMul(a), c = s.redMul(o);
        return this.curve.point(h, f, c, u);
    }, Fn.prototype._projDbl = function() {
        var t, e, r, n, i, o, s = this.x.redAdd(this.y).redSqr(), a = this.x.redSqr(), h = this.y.redSqr();
        if (this.curve.twisted) {
            var f = (n = this.curve._mulA(a)).redAdd(h);
            this.zOne ? (t = s.redSub(a).redSub(h).redMul(f.redSub(this.curve.two)), e = f.redMul(n.redSub(h)), r = f.redSqr().redSub(f).redSub(f)) : (i = this.z.redSqr(), o = f.redSub(i).redISub(i), t = s.redSub(a).redISub(h).redMul(o), e = f.redMul(n.redSub(h)), r = f.redMul(o));
        } else n = a.redAdd(h), i = this.curve._mulC(this.z).redSqr(), o = n.redSub(i).redSub(i), t = this.curve._mulC(s.redISub(n)).redMul(o), e = this.curve._mulC(n).redMul(a.redISub(h)), r = n.redMul(o);
        return this.curve.point(t, e, r);
    }, Fn.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
    }, Fn.prototype._extAdd = function(t) {
        var e = this.y.redSub(this.x).redMul(t.y.redSub(t.x)), r = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)), n = this.t.redMul(this.curve.dd).redMul(t.t), i = this.z.redMul(t.z.redAdd(t.z)), o = r.redSub(e), s = i.redSub(n), a = i.redAdd(n), h = r.redAdd(e), f = o.redMul(s), u = a.redMul(h), c = o.redMul(h), d = s.redMul(a);
        return this.curve.point(f, u, d, c);
    }, Fn.prototype._projAdd = function(t) {
        var e, r, n = this.z.redMul(t.z), i = n.redSqr(), o = this.x.redMul(t.x), s = this.y.redMul(t.y), a = this.curve.d.redMul(o).redMul(s), h = i.redSub(a), f = i.redAdd(a), u = this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(o).redISub(s), c = n.redMul(h).redMul(u);
        return this.curve.twisted ? (e = n.redMul(f).redMul(s.redSub(this.curve._mulA(o))), r = h.redMul(f)) : (e = n.redMul(f).redMul(s.redSub(o)), r = this.curve._mulC(h).redMul(f)), this.curve.point(c, e, r);
    }, Fn.prototype.add = function(t) {
        return this.isInfinity() ? t : t.isInfinity() ? this : this.curve.extended ? this._extAdd(t) : this._projAdd(t);
    }, Fn.prototype.mul = function(t) {
        return this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve._wnafMul(this, t);
    }, Fn.prototype.mulAdd = function(t, e, r) {
        return this.curve._wnafMulAdd(1, [
            this,
            e
        ], [
            t,
            r
        ], 2, !1);
    }, Fn.prototype.jmulAdd = function(t, e, r) {
        return this.curve._wnafMulAdd(1, [
            this,
            e
        ], [
            t,
            r
        ], 2, !0);
    }, Fn.prototype.normalize = function() {
        if (this.zOne) return this;
        var t = this.z.redInvm();
        return this.x = this.x.redMul(t), this.y = this.y.redMul(t), this.t && (this.t = this.t.redMul(t)), this.z = this.curve.one, this.zOne = !0, this;
    }, Fn.prototype.neg = function() {
        return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
    }, Fn.prototype.getX = function() {
        return this.normalize(), this.x.fromRed();
    }, Fn.prototype.getY = function() {
        return this.normalize(), this.y.fromRed();
    }, Fn.prototype.eq = function(t) {
        return this === t || 0 === this.getX().cmp(t.getX()) && 0 === this.getY().cmp(t.getY());
    }, Fn.prototype.eqXToP = function(t) {
        var e = t.toRed(this.curve.red).redMul(this.z);
        if (0 === this.x.cmp(e)) return !0;
        for(var r = t.clone(), n = this.curve.redN.redMul(this.z);;){
            if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
            if (e.redIAdd(n), 0 === this.x.cmp(e)) return !0;
        }
    }, Fn.prototype.toP = Fn.prototype.normalize, Fn.prototype.mixedAdd = Fn.prototype.add;
    var Kn = Gt(function(t, e) {
        var r = e;
        r.base = kn, r.short = On, r.mont = zn, r.edwards = Dn;
    });
    function Yn(t, e) {
        return 55296 == (64512 & t.charCodeAt(e)) && !(e < 0 || e + 1 >= t.length) && 56320 == (64512 & t.charCodeAt(e + 1));
    }
    function Vn(t) {
        return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0;
    }
    function Wn(t) {
        return 1 === t.length ? "0" + t : t;
    }
    function Hn(t) {
        return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t;
    }
    var $n = {
        inherits: Bn,
        toArray: function(t, e) {
            if (Array.isArray(t)) return t.slice();
            if (!t) return [];
            var r = [];
            if ("string" == typeof t) {
                if (e) {
                    if ("hex" === e) for((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), i = 0; i < t.length; i += 2)r.push(parseInt(t[i] + t[i + 1], 16));
                } else for(var n = 0, i = 0; i < t.length; i++){
                    var o = t.charCodeAt(i);
                    o < 128 ? r[n++] = o : o < 2048 ? (r[n++] = o >> 6 | 192, r[n++] = 63 & o | 128) : Yn(t, i) ? (o = 65536 + ((1023 & o) << 10) + (1023 & t.charCodeAt(++i)), r[n++] = o >> 18 | 240, r[n++] = o >> 12 & 63 | 128, r[n++] = o >> 6 & 63 | 128, r[n++] = 63 & o | 128) : (r[n++] = o >> 12 | 224, r[n++] = o >> 6 & 63 | 128, r[n++] = 63 & o | 128);
                }
            } else for(i = 0; i < t.length; i++)r[i] = 0 | t[i];
            return r;
        },
        toHex: function(t) {
            for(var e = "", r = 0; r < t.length; r++)e += Wn(t[r].toString(16));
            return e;
        },
        htonl: Vn,
        toHex32: function(t, e) {
            for(var r = "", n = 0; n < t.length; n++){
                var i = t[n];
                "little" === e && (i = Vn(i)), r += Hn(i.toString(16));
            }
            return r;
        },
        zero2: Wn,
        zero8: Hn,
        join32: function(t, e, r, n) {
            var i = r - e;
            bn(i % 4 == 0);
            for(var o = new Array(i / 4), s = 0, a = e; s < o.length; s++, a += 4){
                var h;
                h = "big" === n ? t[a] << 24 | t[a + 1] << 16 | t[a + 2] << 8 | t[a + 3] : t[a + 3] << 24 | t[a + 2] << 16 | t[a + 1] << 8 | t[a], o[s] = h >>> 0;
            }
            return o;
        },
        split32: function(t, e) {
            for(var r = new Array(4 * t.length), n = 0, i = 0; n < t.length; n++, i += 4){
                var o = t[n];
                "big" === e ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o);
            }
            return r;
        },
        rotr32: function(t, e) {
            return t >>> e | t << 32 - e;
        },
        rotl32: function(t, e) {
            return t << e | t >>> 32 - e;
        },
        sum32: function(t, e) {
            return t + e >>> 0;
        },
        sum32_3: function(t, e, r) {
            return t + e + r >>> 0;
        },
        sum32_4: function(t, e, r, n) {
            return t + e + r + n >>> 0;
        },
        sum32_5: function(t, e, r, n, i) {
            return t + e + r + n + i >>> 0;
        },
        sum64: function(t, e, r, n) {
            var i = t[e], o = n + t[e + 1] >>> 0, s = (o < n ? 1 : 0) + r + i;
            t[e] = s >>> 0, t[e + 1] = o;
        },
        sum64_hi: function(t, e, r, n) {
            return (e + n >>> 0 < e ? 1 : 0) + t + r >>> 0;
        },
        sum64_lo: function(t, e, r, n) {
            return e + n >>> 0;
        },
        sum64_4_hi: function(t, e, r, n, i, o, s, a) {
            var h = 0, f = e;
            return h += (f = f + n >>> 0) < e ? 1 : 0, h += (f = f + o >>> 0) < o ? 1 : 0, t + r + i + s + (h += (f = f + a >>> 0) < a ? 1 : 0) >>> 0;
        },
        sum64_4_lo: function(t, e, r, n, i, o, s, a) {
            return e + n + o + a >>> 0;
        },
        sum64_5_hi: function(t, e, r, n, i, o, s, a, h, f) {
            var u = 0, c = e;
            return u += (c = c + n >>> 0) < e ? 1 : 0, u += (c = c + o >>> 0) < o ? 1 : 0, u += (c = c + a >>> 0) < a ? 1 : 0, t + r + i + s + h + (u += (c = c + f >>> 0) < f ? 1 : 0) >>> 0;
        },
        sum64_5_lo: function(t, e, r, n, i, o, s, a, h, f) {
            return e + n + o + a + f >>> 0;
        },
        rotr64_hi: function(t, e, r) {
            return (e << 32 - r | t >>> r) >>> 0;
        },
        rotr64_lo: function(t, e, r) {
            return (t << 32 - r | e >>> r) >>> 0;
        },
        shr64_hi: function(t, e, r) {
            return t >>> r;
        },
        shr64_lo: function(t, e, r) {
            return (t << 32 - r | e >>> r) >>> 0;
        }
    };
    function Gn() {
        this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
    }
    var Zn = Gn;
    Gn.prototype.update = function(t, e) {
        if (t = $n.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
            var r = (t = this.pending).length % this._delta8;
            this.pending = t.slice(t.length - r, t.length), 0 === this.pending.length && (this.pending = null), t = $n.join32(t, 0, t.length - r, this.endian);
            for(var n = 0; n < t.length; n += this._delta32)this._update(t, n, n + this._delta32);
        }
        return this;
    }, Gn.prototype.digest = function(t) {
        return this.update(this._pad()), bn(null === this.pending), this._digest(t);
    }, Gn.prototype._pad = function() {
        var t = this.pendingTotal, e = this._delta8, r = e - (t + this.padLength) % e, n = new Array(r + this.padLength);
        n[0] = 128;
        for(var i = 1; i < r; i++)n[i] = 0;
        if (t <<= 3, "big" === this.endian) {
            for(var o = 8; o < this.padLength; o++)n[i++] = 0;
            n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = t >>> 24 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 8 & 255, n[i++] = 255 & t;
        } else for(n[i++] = 255 & t, n[i++] = t >>> 8 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++)n[i++] = 0;
        return n;
    };
    var Jn = {
        BlockHash: Zn
    }, Xn = $n.rotr32;
    function Qn(t, e, r) {
        return t & e ^ ~t & r;
    }
    function ti(t, e, r) {
        return t & e ^ t & r ^ e & r;
    }
    function ei(t, e, r) {
        return t ^ e ^ r;
    }
    var ri = {
        ft_1: function(t, e, r, n) {
            return 0 === t ? Qn(e, r, n) : 1 === t || 3 === t ? ei(e, r, n) : 2 === t ? ti(e, r, n) : void 0;
        },
        ch32: Qn,
        maj32: ti,
        p32: ei,
        s0_256: function(t) {
            return Xn(t, 2) ^ Xn(t, 13) ^ Xn(t, 22);
        },
        s1_256: function(t) {
            return Xn(t, 6) ^ Xn(t, 11) ^ Xn(t, 25);
        },
        g0_256: function(t) {
            return Xn(t, 7) ^ Xn(t, 18) ^ t >>> 3;
        },
        g1_256: function(t) {
            return Xn(t, 17) ^ Xn(t, 19) ^ t >>> 10;
        }
    }, ni = $n.rotl32, ii = $n.sum32, oi = $n.sum32_5, si = ri.ft_1, ai = Jn.BlockHash, hi = [
        1518500249,
        1859775393,
        2400959708,
        3395469782
    ];
    function fi() {
        if (!(this instanceof fi)) return new fi;
        ai.call(this), this.h = [
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
        ], this.W = new Array(80);
    }
    $n.inherits(fi, ai);
    var ui = fi;
    fi.blockSize = 512, fi.outSize = 160, fi.hmacStrength = 80, fi.padLength = 64, fi.prototype._update = function(t, e) {
        for(var r = this.W, n = 0; n < 16; n++)r[n] = t[e + n];
        for(; n < r.length; n++)r[n] = ni(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
        var i = this.h[0], o = this.h[1], s = this.h[2], a = this.h[3], h = this.h[4];
        for(n = 0; n < r.length; n++){
            var f = ~~(n / 20), u = oi(ni(i, 5), si(f, o, s, a), h, r[n], hi[f]);
            h = a, a = s, s = ni(o, 30), o = i, i = u;
        }
        this.h[0] = ii(this.h[0], i), this.h[1] = ii(this.h[1], o), this.h[2] = ii(this.h[2], s), this.h[3] = ii(this.h[3], a), this.h[4] = ii(this.h[4], h);
    }, fi.prototype._digest = function(t) {
        return "hex" === t ? $n.toHex32(this.h, "big") : $n.split32(this.h, "big");
    };
    var ci = $n.sum32, di = $n.sum32_4, li = $n.sum32_5, pi = ri.ch32, bi = ri.maj32, mi = ri.s0_256, yi = ri.s1_256, gi = ri.g0_256, vi = ri.g1_256, wi = Jn.BlockHash, Mi = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
    ];
    function _i() {
        if (!(this instanceof _i)) return new _i;
        wi.call(this), this.h = [
            1779033703,
            3144134277,
            1013904242,
            2773480762,
            1359893119,
            2600822924,
            528734635,
            1541459225
        ], this.k = Mi, this.W = new Array(64);
    }
    $n.inherits(_i, wi);
    var Ai = _i;
    function Si() {
        if (!(this instanceof Si)) return new Si;
        Ai.call(this), this.h = [
            3238371032,
            914150663,
            812702999,
            4144912697,
            4290775857,
            1750603025,
            1694076839,
            3204075428
        ];
    }
    _i.blockSize = 512, _i.outSize = 256, _i.hmacStrength = 192, _i.padLength = 64, _i.prototype._update = function(t, e) {
        for(var r = this.W, n = 0; n < 16; n++)r[n] = t[e + n];
        for(; n < r.length; n++)r[n] = di(vi(r[n - 2]), r[n - 7], gi(r[n - 15]), r[n - 16]);
        var i = this.h[0], o = this.h[1], s = this.h[2], a = this.h[3], h = this.h[4], f = this.h[5], u = this.h[6], c = this.h[7];
        for(bn(this.k.length === r.length), n = 0; n < r.length; n++){
            var d = li(c, yi(h), pi(h, f, u), this.k[n], r[n]), l = ci(mi(i), bi(i, o, s));
            c = u, u = f, f = h, h = ci(a, d), a = s, s = o, o = i, i = ci(d, l);
        }
        this.h[0] = ci(this.h[0], i), this.h[1] = ci(this.h[1], o), this.h[2] = ci(this.h[2], s), this.h[3] = ci(this.h[3], a), this.h[4] = ci(this.h[4], h), this.h[5] = ci(this.h[5], f), this.h[6] = ci(this.h[6], u), this.h[7] = ci(this.h[7], c);
    }, _i.prototype._digest = function(t) {
        return "hex" === t ? $n.toHex32(this.h, "big") : $n.split32(this.h, "big");
    }, $n.inherits(Si, Ai);
    var Ei = Si;
    Si.blockSize = 512, Si.outSize = 224, Si.hmacStrength = 192, Si.padLength = 64, Si.prototype._digest = function(t) {
        return "hex" === t ? $n.toHex32(this.h.slice(0, 7), "big") : $n.split32(this.h.slice(0, 7), "big");
    };
    var xi = $n.rotr64_hi, Ii = $n.rotr64_lo, ki = $n.shr64_hi, Ri = $n.shr64_lo, Bi = $n.sum64, Ti = $n.sum64_hi, Ui = $n.sum64_lo, Oi = $n.sum64_4_hi, Pi = $n.sum64_4_lo, Li = $n.sum64_5_hi, Ni = $n.sum64_5_lo, zi = Jn.BlockHash, Ci = [
        1116352408,
        3609767458,
        1899447441,
        602891725,
        3049323471,
        3964484399,
        3921009573,
        2173295548,
        961987163,
        4081628472,
        1508970993,
        3053834265,
        2453635748,
        2937671579,
        2870763221,
        3664609560,
        3624381080,
        2734883394,
        310598401,
        1164996542,
        607225278,
        1323610764,
        1426881987,
        3590304994,
        1925078388,
        4068182383,
        2162078206,
        991336113,
        2614888103,
        633803317,
        3248222580,
        3479774868,
        3835390401,
        2666613458,
        4022224774,
        944711139,
        264347078,
        2341262773,
        604807628,
        2007800933,
        770255983,
        1495990901,
        1249150122,
        1856431235,
        1555081692,
        3175218132,
        1996064986,
        2198950837,
        2554220882,
        3999719339,
        2821834349,
        766784016,
        2952996808,
        2566594879,
        3210313671,
        3203337956,
        3336571891,
        1034457026,
        3584528711,
        2466948901,
        113926993,
        3758326383,
        338241895,
        168717936,
        666307205,
        1188179964,
        773529912,
        1546045734,
        1294757372,
        1522805485,
        1396182291,
        2643833823,
        1695183700,
        2343527390,
        1986661051,
        1014477480,
        2177026350,
        1206759142,
        2456956037,
        344077627,
        2730485921,
        1290863460,
        2820302411,
        3158454273,
        3259730800,
        3505952657,
        3345764771,
        106217008,
        3516065817,
        3606008344,
        3600352804,
        1432725776,
        4094571909,
        1467031594,
        275423344,
        851169720,
        430227734,
        3100823752,
        506948616,
        1363258195,
        659060556,
        3750685593,
        883997877,
        3785050280,
        958139571,
        3318307427,
        1322822218,
        3812723403,
        1537002063,
        2003034995,
        1747873779,
        3602036899,
        1955562222,
        1575990012,
        2024104815,
        1125592928,
        2227730452,
        2716904306,
        2361852424,
        442776044,
        2428436474,
        593698344,
        2756734187,
        3733110249,
        3204031479,
        2999351573,
        3329325298,
        3815920427,
        3391569614,
        3928383900,
        3515267271,
        566280711,
        3940187606,
        3454069534,
        4118630271,
        4000239992,
        116418474,
        1914138554,
        174292421,
        2731055270,
        289380356,
        3203993006,
        460393269,
        320620315,
        685471733,
        587496836,
        852142971,
        1086792851,
        1017036298,
        365543100,
        1126000580,
        2618297676,
        1288033470,
        3409855158,
        1501505948,
        4234509866,
        1607167915,
        987167468,
        1816402316,
        1246189591
    ];
    function qi() {
        if (!(this instanceof qi)) return new qi;
        zi.call(this), this.h = [
            1779033703,
            4089235720,
            3144134277,
            2227873595,
            1013904242,
            4271175723,
            2773480762,
            1595750129,
            1359893119,
            2917565137,
            2600822924,
            725511199,
            528734635,
            4215389547,
            1541459225,
            327033209
        ], this.k = Ci, this.W = new Array(160);
    }
    $n.inherits(qi, zi);
    var ji = qi;
    function Di(t, e, r, n, i) {
        var o = t & r ^ ~t & i;
        return o < 0 && (o += 4294967296), o;
    }
    function Fi(t, e, r, n, i, o) {
        var s = e & n ^ ~e & o;
        return s < 0 && (s += 4294967296), s;
    }
    function Ki(t, e, r, n, i) {
        var o = t & r ^ t & i ^ r & i;
        return o < 0 && (o += 4294967296), o;
    }
    function Yi(t, e, r, n, i, o) {
        var s = e & n ^ e & o ^ n & o;
        return s < 0 && (s += 4294967296), s;
    }
    function Vi(t, e) {
        var r = xi(t, e, 28) ^ xi(e, t, 2) ^ xi(e, t, 7);
        return r < 0 && (r += 4294967296), r;
    }
    function Wi(t, e) {
        var r = Ii(t, e, 28) ^ Ii(e, t, 2) ^ Ii(e, t, 7);
        return r < 0 && (r += 4294967296), r;
    }
    function Hi(t, e) {
        var r = xi(t, e, 14) ^ xi(t, e, 18) ^ xi(e, t, 9);
        return r < 0 && (r += 4294967296), r;
    }
    function $i(t, e) {
        var r = Ii(t, e, 14) ^ Ii(t, e, 18) ^ Ii(e, t, 9);
        return r < 0 && (r += 4294967296), r;
    }
    function Gi(t, e) {
        var r = xi(t, e, 1) ^ xi(t, e, 8) ^ ki(t, e, 7);
        return r < 0 && (r += 4294967296), r;
    }
    function Zi(t, e) {
        var r = Ii(t, e, 1) ^ Ii(t, e, 8) ^ Ri(t, e, 7);
        return r < 0 && (r += 4294967296), r;
    }
    function Ji(t, e) {
        var r = xi(t, e, 19) ^ xi(e, t, 29) ^ ki(t, e, 6);
        return r < 0 && (r += 4294967296), r;
    }
    function Xi(t, e) {
        var r = Ii(t, e, 19) ^ Ii(e, t, 29) ^ Ri(t, e, 6);
        return r < 0 && (r += 4294967296), r;
    }
    function Qi() {
        if (!(this instanceof Qi)) return new Qi;
        ji.call(this), this.h = [
            3418070365,
            3238371032,
            1654270250,
            914150663,
            2438529370,
            812702999,
            355462360,
            4144912697,
            1731405415,
            4290775857,
            2394180231,
            1750603025,
            3675008525,
            1694076839,
            1203062813,
            3204075428
        ];
    }
    qi.blockSize = 1024, qi.outSize = 512, qi.hmacStrength = 192, qi.padLength = 128, qi.prototype._prepareBlock = function(t, e) {
        for(var r = this.W, n = 0; n < 32; n++)r[n] = t[e + n];
        for(; n < r.length; n += 2){
            var i = Ji(r[n - 4], r[n - 3]), o = Xi(r[n - 4], r[n - 3]), s = r[n - 14], a = r[n - 13], h = Gi(r[n - 30], r[n - 29]), f = Zi(r[n - 30], r[n - 29]), u = r[n - 32], c = r[n - 31];
            r[n] = Oi(i, o, s, a, h, f, u, c), r[n + 1] = Pi(i, o, s, a, h, f, u, c);
        }
    }, qi.prototype._update = function(t, e) {
        this._prepareBlock(t, e);
        var r = this.W, n = this.h[0], i = this.h[1], o = this.h[2], s = this.h[3], a = this.h[4], h = this.h[5], f = this.h[6], u = this.h[7], c = this.h[8], d = this.h[9], l = this.h[10], p = this.h[11], b = this.h[12], m = this.h[13], y = this.h[14], g = this.h[15];
        bn(this.k.length === r.length);
        for(var v = 0; v < r.length; v += 2){
            var w = y, M = g, _ = Hi(c, d), A = $i(c, d), S = Di(c, d, l, p, b), E = Fi(c, d, l, p, b, m), x = this.k[v], I = this.k[v + 1], k = r[v], R = r[v + 1], B = Li(w, M, _, A, S, E, x, I, k, R), T = Ni(w, M, _, A, S, E, x, I, k, R);
            w = Vi(n, i), M = Wi(n, i), _ = Ki(n, i, o, s, a), A = Yi(n, i, o, s, a, h);
            var U = Ti(w, M, _, A), O = Ui(w, M, _, A);
            y = b, g = m, b = l, m = p, l = c, p = d, c = Ti(f, u, B, T), d = Ui(u, u, B, T), f = a, u = h, a = o, h = s, o = n, s = i, n = Ti(B, T, U, O), i = Ui(B, T, U, O);
        }
        Bi(this.h, 0, n, i), Bi(this.h, 2, o, s), Bi(this.h, 4, a, h), Bi(this.h, 6, f, u), Bi(this.h, 8, c, d), Bi(this.h, 10, l, p), Bi(this.h, 12, b, m), Bi(this.h, 14, y, g);
    }, qi.prototype._digest = function(t) {
        return "hex" === t ? $n.toHex32(this.h, "big") : $n.split32(this.h, "big");
    }, $n.inherits(Qi, ji);
    var to = Qi;
    Qi.blockSize = 1024, Qi.outSize = 384, Qi.hmacStrength = 192, Qi.padLength = 128, Qi.prototype._digest = function(t) {
        return "hex" === t ? $n.toHex32(this.h.slice(0, 12), "big") : $n.split32(this.h.slice(0, 12), "big");
    };
    var eo = {
        sha1: ui,
        sha224: Ei,
        sha256: Ai,
        sha384: to,
        sha512: ji
    }, ro = $n.rotl32, no = $n.sum32, io = $n.sum32_3, oo = $n.sum32_4, so = Jn.BlockHash;
    function ao() {
        if (!(this instanceof ao)) return new ao;
        so.call(this), this.h = [
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
        ], this.endian = "little";
    }
    $n.inherits(ao, so);
    var ho = ao;
    function fo(t, e, r, n) {
        return t <= 15 ? e ^ r ^ n : t <= 31 ? e & r | ~e & n : t <= 47 ? (e | ~r) ^ n : t <= 63 ? e & n | r & ~n : e ^ (r | ~n);
    }
    function uo(t) {
        return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838;
    }
    function co(t) {
        return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0;
    }
    ao.blockSize = 512, ao.outSize = 160, ao.hmacStrength = 192, ao.padLength = 64, ao.prototype._update = function(t, e) {
        for(var r = this.h[0], n = this.h[1], i = this.h[2], o = this.h[3], s = this.h[4], a = r, h = n, f = i, u = o, c = s, d = 0; d < 80; d++){
            var l = no(ro(oo(r, fo(d, n, i, o), t[lo[d] + e], uo(d)), bo[d]), s);
            r = s, s = o, o = ro(i, 10), i = n, n = l, l = no(ro(oo(a, fo(79 - d, h, f, u), t[po[d] + e], co(d)), mo[d]), c), a = c, c = u, u = ro(f, 10), f = h, h = l;
        }
        l = io(this.h[1], i, u), this.h[1] = io(this.h[2], o, c), this.h[2] = io(this.h[3], s, a), this.h[3] = io(this.h[4], r, h), this.h[4] = io(this.h[0], n, f), this.h[0] = l;
    }, ao.prototype._digest = function(t) {
        return "hex" === t ? $n.toHex32(this.h, "little") : $n.split32(this.h, "little");
    };
    var lo = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        7,
        4,
        13,
        1,
        10,
        6,
        15,
        3,
        12,
        0,
        9,
        5,
        2,
        14,
        11,
        8,
        3,
        10,
        14,
        4,
        9,
        15,
        8,
        1,
        2,
        7,
        0,
        6,
        13,
        11,
        5,
        12,
        1,
        9,
        11,
        10,
        0,
        8,
        12,
        4,
        13,
        3,
        7,
        15,
        14,
        5,
        6,
        2,
        4,
        0,
        5,
        9,
        7,
        12,
        2,
        10,
        14,
        1,
        3,
        8,
        11,
        6,
        15,
        13
    ], po = [
        5,
        14,
        7,
        0,
        9,
        2,
        11,
        4,
        13,
        6,
        15,
        8,
        1,
        10,
        3,
        12,
        6,
        11,
        3,
        7,
        0,
        13,
        5,
        10,
        14,
        15,
        8,
        12,
        4,
        9,
        1,
        2,
        15,
        5,
        1,
        3,
        7,
        14,
        6,
        9,
        11,
        8,
        12,
        2,
        10,
        0,
        4,
        13,
        8,
        6,
        4,
        1,
        3,
        11,
        15,
        0,
        5,
        12,
        2,
        13,
        9,
        7,
        10,
        14,
        12,
        15,
        10,
        4,
        1,
        5,
        8,
        7,
        6,
        2,
        13,
        14,
        0,
        3,
        9,
        11
    ], bo = [
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8,
        7,
        6,
        8,
        13,
        11,
        9,
        7,
        15,
        7,
        12,
        15,
        9,
        11,
        7,
        13,
        12,
        11,
        13,
        6,
        7,
        14,
        9,
        13,
        15,
        14,
        8,
        13,
        6,
        5,
        12,
        7,
        5,
        11,
        12,
        14,
        15,
        14,
        15,
        9,
        8,
        9,
        14,
        5,
        6,
        8,
        6,
        5,
        12,
        9,
        15,
        5,
        11,
        6,
        8,
        13,
        12,
        5,
        12,
        13,
        14,
        11,
        8,
        5,
        6
    ], mo = [
        8,
        9,
        9,
        11,
        13,
        15,
        15,
        5,
        7,
        7,
        8,
        11,
        14,
        14,
        12,
        6,
        9,
        13,
        15,
        7,
        12,
        8,
        9,
        11,
        7,
        7,
        12,
        7,
        6,
        15,
        13,
        11,
        9,
        7,
        15,
        11,
        8,
        6,
        6,
        14,
        12,
        13,
        5,
        14,
        13,
        13,
        7,
        5,
        15,
        5,
        8,
        11,
        14,
        14,
        6,
        14,
        6,
        9,
        12,
        9,
        12,
        5,
        15,
        8,
        8,
        5,
        12,
        9,
        12,
        5,
        14,
        6,
        8,
        13,
        6,
        5,
        15,
        13,
        11,
        11
    ], yo = {
        ripemd160: ho
    };
    function go(t, e, r) {
        if (!(this instanceof go)) return new go(t, e, r);
        this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init($n.toArray(e, r));
    }
    var vo = go;
    go.prototype._init = function(t) {
        t.length > this.blockSize && (t = (new this.Hash).update(t).digest()), bn(t.length <= this.blockSize);
        for(var e = t.length; e < this.blockSize; e++)t.push(0);
        for(e = 0; e < t.length; e++)t[e] ^= 54;
        for(this.inner = (new this.Hash).update(t), e = 0; e < t.length; e++)t[e] ^= 106;
        this.outer = (new this.Hash).update(t);
    }, go.prototype.update = function(t, e) {
        return this.inner.update(t, e), this;
    }, go.prototype.digest = function(t) {
        return this.outer.update(this.inner.digest()), this.outer.digest(t);
    };
    var wo = Gt(function(t, e) {
        var r = e;
        r.utils = $n, r.common = Jn, r.sha = eo, r.ripemd = yo, r.hmac = vo, r.sha1 = r.sha.sha1, r.sha256 = r.sha.sha256, r.sha224 = r.sha.sha224, r.sha384 = r.sha.sha384, r.sha512 = r.sha.sha512, r.ripemd160 = r.ripemd.ripemd160;
    }), Mo = {
        doubles: {
            step: 4,
            points: [
                [
                    "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
                    "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"
                ],
                [
                    "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
                    "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"
                ],
                [
                    "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
                    "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"
                ],
                [
                    "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
                    "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"
                ],
                [
                    "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
                    "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"
                ],
                [
                    "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
                    "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"
                ],
                [
                    "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
                    "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"
                ],
                [
                    "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
                    "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"
                ],
                [
                    "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
                    "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"
                ],
                [
                    "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
                    "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"
                ],
                [
                    "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
                    "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"
                ],
                [
                    "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
                    "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"
                ],
                [
                    "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
                    "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"
                ],
                [
                    "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
                    "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"
                ],
                [
                    "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
                    "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"
                ],
                [
                    "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
                    "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"
                ],
                [
                    "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
                    "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"
                ],
                [
                    "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
                    "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"
                ],
                [
                    "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
                    "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"
                ],
                [
                    "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
                    "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"
                ],
                [
                    "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
                    "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"
                ],
                [
                    "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
                    "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"
                ],
                [
                    "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
                    "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"
                ],
                [
                    "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
                    "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"
                ],
                [
                    "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
                    "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"
                ],
                [
                    "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
                    "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"
                ],
                [
                    "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
                    "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"
                ],
                [
                    "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
                    "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"
                ],
                [
                    "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
                    "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"
                ],
                [
                    "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
                    "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"
                ],
                [
                    "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
                    "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"
                ],
                [
                    "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
                    "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"
                ],
                [
                    "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
                    "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"
                ],
                [
                    "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
                    "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"
                ],
                [
                    "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
                    "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"
                ],
                [
                    "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
                    "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"
                ],
                [
                    "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
                    "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"
                ],
                [
                    "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
                    "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"
                ],
                [
                    "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
                    "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"
                ],
                [
                    "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
                    "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"
                ],
                [
                    "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
                    "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"
                ],
                [
                    "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
                    "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"
                ],
                [
                    "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
                    "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"
                ],
                [
                    "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
                    "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"
                ],
                [
                    "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
                    "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"
                ],
                [
                    "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
                    "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"
                ],
                [
                    "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
                    "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"
                ],
                [
                    "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
                    "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"
                ],
                [
                    "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
                    "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"
                ],
                [
                    "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
                    "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"
                ],
                [
                    "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
                    "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"
                ],
                [
                    "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
                    "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"
                ],
                [
                    "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
                    "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"
                ],
                [
                    "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
                    "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"
                ],
                [
                    "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
                    "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"
                ],
                [
                    "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
                    "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"
                ],
                [
                    "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
                    "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"
                ],
                [
                    "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
                    "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"
                ],
                [
                    "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
                    "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"
                ],
                [
                    "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
                    "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"
                ],
                [
                    "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
                    "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"
                ],
                [
                    "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
                    "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"
                ],
                [
                    "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
                    "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"
                ],
                [
                    "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
                    "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"
                ],
                [
                    "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
                    "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"
                ]
            ]
        },
        naf: {
            wnd: 7,
            points: [
                [
                    "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
                    "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"
                ],
                [
                    "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
                    "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"
                ],
                [
                    "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
                    "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"
                ],
                [
                    "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
                    "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"
                ],
                [
                    "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
                    "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"
                ],
                [
                    "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
                    "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"
                ],
                [
                    "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
                    "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"
                ],
                [
                    "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
                    "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"
                ],
                [
                    "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
                    "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"
                ],
                [
                    "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
                    "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"
                ],
                [
                    "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
                    "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"
                ],
                [
                    "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
                    "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"
                ],
                [
                    "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
                    "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"
                ],
                [
                    "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
                    "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"
                ],
                [
                    "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
                    "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"
                ],
                [
                    "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
                    "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"
                ],
                [
                    "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
                    "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"
                ],
                [
                    "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
                    "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"
                ],
                [
                    "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
                    "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"
                ],
                [
                    "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
                    "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"
                ],
                [
                    "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
                    "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"
                ],
                [
                    "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
                    "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"
                ],
                [
                    "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
                    "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"
                ],
                [
                    "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
                    "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"
                ],
                [
                    "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
                    "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"
                ],
                [
                    "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
                    "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"
                ],
                [
                    "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
                    "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"
                ],
                [
                    "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
                    "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"
                ],
                [
                    "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
                    "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"
                ],
                [
                    "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
                    "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"
                ],
                [
                    "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
                    "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"
                ],
                [
                    "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
                    "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"
                ],
                [
                    "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
                    "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"
                ],
                [
                    "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
                    "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"
                ],
                [
                    "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
                    "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"
                ],
                [
                    "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
                    "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"
                ],
                [
                    "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
                    "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"
                ],
                [
                    "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
                    "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"
                ],
                [
                    "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
                    "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"
                ],
                [
                    "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
                    "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"
                ],
                [
                    "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
                    "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"
                ],
                [
                    "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
                    "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"
                ],
                [
                    "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
                    "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"
                ],
                [
                    "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
                    "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"
                ],
                [
                    "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
                    "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"
                ],
                [
                    "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
                    "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"
                ],
                [
                    "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
                    "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"
                ],
                [
                    "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
                    "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"
                ],
                [
                    "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
                    "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"
                ],
                [
                    "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
                    "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"
                ],
                [
                    "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
                    "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"
                ],
                [
                    "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
                    "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"
                ],
                [
                    "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
                    "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"
                ],
                [
                    "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
                    "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"
                ],
                [
                    "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
                    "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"
                ],
                [
                    "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
                    "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"
                ],
                [
                    "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
                    "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"
                ],
                [
                    "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
                    "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"
                ],
                [
                    "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
                    "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"
                ],
                [
                    "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
                    "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"
                ],
                [
                    "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
                    "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"
                ],
                [
                    "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
                    "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"
                ],
                [
                    "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
                    "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"
                ],
                [
                    "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
                    "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"
                ],
                [
                    "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
                    "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"
                ],
                [
                    "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
                    "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"
                ],
                [
                    "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
                    "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"
                ],
                [
                    "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
                    "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"
                ],
                [
                    "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
                    "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"
                ],
                [
                    "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
                    "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"
                ],
                [
                    "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
                    "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"
                ],
                [
                    "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
                    "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"
                ],
                [
                    "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
                    "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"
                ],
                [
                    "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
                    "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"
                ],
                [
                    "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
                    "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"
                ],
                [
                    "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
                    "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"
                ],
                [
                    "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
                    "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"
                ],
                [
                    "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
                    "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"
                ],
                [
                    "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
                    "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"
                ],
                [
                    "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
                    "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"
                ],
                [
                    "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
                    "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"
                ],
                [
                    "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
                    "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"
                ],
                [
                    "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
                    "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"
                ],
                [
                    "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
                    "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"
                ],
                [
                    "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
                    "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"
                ],
                [
                    "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
                    "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"
                ],
                [
                    "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
                    "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"
                ],
                [
                    "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
                    "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"
                ],
                [
                    "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
                    "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"
                ],
                [
                    "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
                    "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"
                ],
                [
                    "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
                    "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"
                ],
                [
                    "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
                    "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"
                ],
                [
                    "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
                    "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"
                ],
                [
                    "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
                    "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"
                ],
                [
                    "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
                    "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"
                ],
                [
                    "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
                    "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"
                ],
                [
                    "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
                    "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"
                ],
                [
                    "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
                    "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"
                ],
                [
                    "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
                    "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"
                ],
                [
                    "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
                    "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"
                ],
                [
                    "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
                    "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"
                ],
                [
                    "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
                    "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"
                ],
                [
                    "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
                    "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"
                ],
                [
                    "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
                    "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"
                ],
                [
                    "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
                    "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"
                ],
                [
                    "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
                    "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"
                ],
                [
                    "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
                    "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"
                ],
                [
                    "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
                    "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"
                ],
                [
                    "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
                    "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"
                ],
                [
                    "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
                    "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"
                ],
                [
                    "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
                    "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"
                ],
                [
                    "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
                    "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"
                ],
                [
                    "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
                    "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"
                ],
                [
                    "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
                    "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"
                ],
                [
                    "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
                    "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"
                ],
                [
                    "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
                    "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"
                ],
                [
                    "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
                    "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"
                ],
                [
                    "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
                    "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"
                ],
                [
                    "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
                    "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"
                ],
                [
                    "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
                    "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"
                ],
                [
                    "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
                    "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"
                ],
                [
                    "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
                    "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"
                ],
                [
                    "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
                    "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"
                ],
                [
                    "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
                    "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"
                ],
                [
                    "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
                    "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"
                ],
                [
                    "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
                    "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"
                ],
                [
                    "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
                    "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"
                ]
            ]
        }
    }, _o = Gt(function(t, e) {
        var r, n = e, i = vn.assert;
        function o(t) {
            "short" === t.type ? this.curve = new Kn.short(t) : "edwards" === t.type ? this.curve = new Kn.edwards(t) : this.curve = new Kn.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
        }
        function s(t, e) {
            Object.defineProperty(n, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    var r = new o(e);
                    return Object.defineProperty(n, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: r
                    }), r;
                }
            });
        }
        n.PresetCurve = o, s("p192", {
            type: "short",
            prime: "p192",
            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
            hash: wo.sha256,
            gRed: !1,
            g: [
                "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
            ]
        }), s("p224", {
            type: "short",
            prime: "p224",
            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
            hash: wo.sha256,
            gRed: !1,
            g: [
                "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
            ]
        }), s("p256", {
            type: "short",
            prime: null,
            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
            hash: wo.sha256,
            gRed: !1,
            g: [
                "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
            ]
        }), s("p384", {
            type: "short",
            prime: null,
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
            hash: wo.sha384,
            gRed: !1,
            g: [
                "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
            ]
        }), s("p521", {
            type: "short",
            prime: null,
            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
            hash: wo.sha512,
            gRed: !1,
            g: [
                "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
            ]
        }), s("curve25519", {
            type: "mont",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "76d06",
            b: "1",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: wo.sha256,
            gRed: !1,
            g: [
                "9"
            ]
        }), s("ed25519", {
            type: "edwards",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "-1",
            c: "1",
            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: wo.sha256,
            gRed: !1,
            g: [
                "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                "6666666666666666666666666666666666666666666666666666666666666658"
            ]
        });
        try {
            r = Mo;
        } catch (t) {
            r = void 0;
        }
        s("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: wo.sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [
                {
                    a: "3086d221a7d46bcde86c90e49284eb15",
                    b: "-e4437ed6010e88286f547fa90abfe4c3"
                },
                {
                    a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                    b: "3086d221a7d46bcde86c90e49284eb15"
                }
            ],
            gRed: !1,
            g: [
                "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
                "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
                r
            ]
        });
    });
    function Ao(t) {
        if (!(this instanceof Ao)) return new Ao(t);
        this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
        var e = gn.toArray(t.entropy, t.entropyEnc || "hex"), r = gn.toArray(t.nonce, t.nonceEnc || "hex"), n = gn.toArray(t.pers, t.persEnc || "hex");
        bn(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, n);
    }
    var So = Ao;
    Ao.prototype._init = function(t, e, r) {
        var n = t.concat(e).concat(r);
        this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
        for(var i = 0; i < this.V.length; i++)this.K[i] = 0, this.V[i] = 1;
        this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656;
    }, Ao.prototype._hmac = function() {
        return new wo.hmac(this.hash, this.K);
    }, Ao.prototype._update = function(t) {
        var e = this._hmac().update(this.V).update([
            0
        ]);
        t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([
            1
        ]).update(t).digest(), this.V = this._hmac().update(this.V).digest());
    }, Ao.prototype.reseed = function(t, e, r, n) {
        "string" != typeof e && (n = r, r = e, e = null), t = gn.toArray(t, e), r = gn.toArray(r, n), bn(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(r || [])), this._reseed = 1;
    }, Ao.prototype.generate = function(t, e, r, n) {
        if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
        "string" != typeof e && (n = r, r = e, e = null), r && (r = gn.toArray(r, n || "hex"), this._update(r));
        for(var i = []; i.length < t;)this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V);
        var o = i.slice(0, t);
        return this._update(r), this._reseed++, gn.encode(o, e);
    };
    var Eo = vn.assert;
    function xo(t, e) {
        this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc);
    }
    var Io = xo;
    xo.fromPublic = function(t, e, r) {
        return e instanceof xo ? e : new xo(t, {
            pub: e,
            pubEnc: r
        });
    }, xo.fromPrivate = function(t, e, r) {
        return e instanceof xo ? e : new xo(t, {
            priv: e,
            privEnc: r
        });
    }, xo.prototype.validate = function() {
        var t = this.getPublic();
        return t.isInfinity() ? {
            result: !1,
            reason: "Invalid public key"
        } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
            result: !0,
            reason: null
        } : {
            result: !1,
            reason: "Public key * N != O"
        } : {
            result: !1,
            reason: "Public key is not a point"
        };
    }, xo.prototype.getPublic = function(t, e) {
        return "string" == typeof t && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub;
    }, xo.prototype.getPrivate = function(t) {
        return "hex" === t ? this.priv.toString(16, 2) : this.priv;
    }, xo.prototype._importPrivate = function(t, e) {
        this.priv = new pn(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n);
    }, xo.prototype._importPublic = function(t, e) {
        if (t.x || t.y) return "mont" === this.ec.curve.type ? Eo(t.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || Eo(t.x && t.y, "Need both x and y coordinate"), void (this.pub = this.ec.curve.point(t.x, t.y));
        this.pub = this.ec.curve.decodePoint(t, e);
    }, xo.prototype.derive = function(t) {
        return t.validate() || Eo(t.validate(), "public point not validated"), t.mul(this.priv).getX();
    }, xo.prototype.sign = function(t, e, r) {
        return this.ec.sign(t, this, e, r);
    }, xo.prototype.verify = function(t, e) {
        return this.ec.verify(t, e, this);
    }, xo.prototype.inspect = function() {
        return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
    };
    var ko = vn.assert;
    function Ro(t, e) {
        if (t instanceof Ro) return t;
        this._importDER(t, e) || (ko(t.r && t.s, "Signature without r or s"), this.r = new pn(t.r, 16), this.s = new pn(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam);
    }
    var Bo = Ro;
    function To() {
        this.place = 0;
    }
    function Uo(t, e) {
        var r = t[e.place++];
        if (!(128 & r)) return r;
        var n = 15 & r;
        if (0 === n || n > 4) return !1;
        for(var i = 0, o = 0, s = e.place; o < n; o++, s++)i <<= 8, i |= t[s], i >>>= 0;
        return !(i <= 127) && (e.place = s, i);
    }
    function Oo(t) {
        for(var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r;)e++;
        return 0 === e ? t : t.slice(e);
    }
    function Po(t, e) {
        if (e < 128) t.push(e);
        else {
            var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
            for(t.push(128 | r); --r;)t.push(e >>> (r << 3) & 255);
            t.push(e);
        }
    }
    Ro.prototype._importDER = function(t, e) {
        t = vn.toArray(t, e);
        var r = new To;
        if (48 !== t[r.place++]) return !1;
        var n = Uo(t, r);
        if (!1 === n) return !1;
        if (n + r.place !== t.length) return !1;
        if (2 !== t[r.place++]) return !1;
        var i = Uo(t, r);
        if (!1 === i) return !1;
        var o = t.slice(r.place, i + r.place);
        if (r.place += i, 2 !== t[r.place++]) return !1;
        var s = Uo(t, r);
        if (!1 === s) return !1;
        if (t.length !== s + r.place) return !1;
        var a = t.slice(r.place, s + r.place);
        if (0 === o[0]) {
            if (!(128 & o[1])) return !1;
            o = o.slice(1);
        }
        if (0 === a[0]) {
            if (!(128 & a[1])) return !1;
            a = a.slice(1);
        }
        return this.r = new pn(o), this.s = new pn(a), this.recoveryParam = null, !0;
    }, Ro.prototype.toDER = function(t) {
        var e = this.r.toArray(), r = this.s.toArray();
        for(128 & e[0] && (e = [
            0
        ].concat(e)), 128 & r[0] && (r = [
            0
        ].concat(r)), e = Oo(e), r = Oo(r); !(r[0] || 128 & r[1]);)r = r.slice(1);
        var n = [
            2
        ];
        Po(n, e.length), (n = n.concat(e)).push(2), Po(n, r.length);
        var i = n.concat(r), o = [
            48
        ];
        return Po(o, i.length), o = o.concat(i), vn.encode(o, t);
    };
    var Lo = vn.assert;
    function No(t) {
        if (!(this instanceof No)) return new No(t);
        "string" == typeof t && (Lo(Object.prototype.hasOwnProperty.call(_o, t), "Unknown curve " + t), t = _o[t]), t instanceof _o.PresetCurve && (t = {
            curve: t
        }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash;
    }
    var zo = No;
    No.prototype.keyPair = function(t) {
        return new Io(this, t);
    }, No.prototype.keyFromPrivate = function(t, e) {
        return Io.fromPrivate(this, t, e);
    }, No.prototype.keyFromPublic = function(t, e) {
        return Io.fromPublic(this, t, e);
    }, No.prototype.genKeyPair = function(t) {
        t || (t = {});
        for(var e = new So({
            hash: this.hash,
            pers: t.pers,
            persEnc: t.persEnc || "utf8",
            entropy: t.entropy || wn(this.hash.hmacStrength),
            entropyEnc: t.entropy && t.entropyEnc || "utf8",
            nonce: this.n.toArray()
        }), r = this.n.byteLength(), n = this.n.sub(new pn(2));;){
            var i = new pn(e.generate(r));
            if (!(i.cmp(n) > 0)) return i.iaddn(1), this.keyFromPrivate(i);
        }
    }, No.prototype._truncateToN = function(t, e) {
        var r = 8 * t.byteLength() - this.n.bitLength();
        return r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
    }, No.prototype.sign = function(t, e, r, n) {
        "object" == typeof r && (n = r, r = null), n || (n = {}), e = this.keyFromPrivate(e, r), t = this._truncateToN(new pn(t, 16));
        for(var i = this.n.byteLength(), o = e.getPrivate().toArray("be", i), s = t.toArray("be", i), a = new So({
            hash: this.hash,
            entropy: o,
            nonce: s,
            pers: n.pers,
            persEnc: n.persEnc || "utf8"
        }), h = this.n.sub(new pn(1)), f = 0;; f++){
            var u = n.k ? n.k(f) : new pn(a.generate(this.n.byteLength()));
            if (!((u = this._truncateToN(u, !0)).cmpn(1) <= 0 || u.cmp(h) >= 0)) {
                var c = this.g.mul(u);
                if (!c.isInfinity()) {
                    var d = c.getX(), l = d.umod(this.n);
                    if (0 !== l.cmpn(0)) {
                        var p = u.invm(this.n).mul(l.mul(e.getPrivate()).iadd(t));
                        if (0 !== (p = p.umod(this.n)).cmpn(0)) {
                            var b = (c.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(l) ? 2 : 0);
                            return n.canonical && p.cmp(this.nh) > 0 && (p = this.n.sub(p), b ^= 1), new Bo({
                                r: l,
                                s: p,
                                recoveryParam: b
                            });
                        }
                    }
                }
            }
        }
    }, No.prototype.verify = function(t, e, r, n) {
        t = this._truncateToN(new pn(t, 16)), r = this.keyFromPublic(r, n);
        var i = (e = new Bo(e, "hex")).r, o = e.s;
        if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0) return !1;
        if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
        var s, a = o.invm(this.n), h = a.mul(t).umod(this.n), f = a.mul(i).umod(this.n);
        return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(h, r.getPublic(), f)).isInfinity() && s.eqXToP(i) : !(s = this.g.mulAdd(h, r.getPublic(), f)).isInfinity() && 0 === s.getX().umod(this.n).cmp(i);
    }, No.prototype.recoverPubKey = function(t, e, r, n) {
        Lo((3 & r) === r, "The recovery param is more than two bits"), e = new Bo(e, n);
        var i = this.n, o = new pn(t), s = e.r, a = e.s, h = 1 & r, f = r >> 1;
        if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && f) throw new Error("Unable to find sencond key candinate");
        s = f ? this.curve.pointFromX(s.add(this.curve.n), h) : this.curve.pointFromX(s, h);
        var u = e.r.invm(i), c = i.sub(o).mul(u).umod(i), d = a.mul(u).umod(i);
        return this.g.mulAdd(c, s, d);
    }, No.prototype.getKeyRecoveryParam = function(t, e, r, n) {
        if (null !== (e = new Bo(e, n)).recoveryParam) return e.recoveryParam;
        for(var i = 0; i < 4; i++){
            var o;
            try {
                o = this.recoverPubKey(t, e, i);
            } catch (t) {
                continue;
            }
            if (o.eq(r)) return i;
        }
        throw new Error("Unable to find valid recovery factor");
    };
    var Co = vn.assert, qo = vn.parseBytes, jo = vn.cachedProperty;
    function Do(t, e) {
        this.eddsa = t, this._secret = qo(e.secret), t.isPoint(e.pub) ? this._pub = e.pub : this._pubBytes = qo(e.pub);
    }
    Do.fromPublic = function(t, e) {
        return e instanceof Do ? e : new Do(t, {
            pub: e
        });
    }, Do.fromSecret = function(t, e) {
        return e instanceof Do ? e : new Do(t, {
            secret: e
        });
    }, Do.prototype.secret = function() {
        return this._secret;
    }, jo(Do, "pubBytes", function() {
        return this.eddsa.encodePoint(this.pub());
    }), jo(Do, "pub", function() {
        return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
    }), jo(Do, "privBytes", function() {
        var t = this.eddsa, e = this.hash(), r = t.encodingLength - 1, n = e.slice(0, t.encodingLength);
        return n[0] &= 248, n[r] &= 127, n[r] |= 64, n;
    }), jo(Do, "priv", function() {
        return this.eddsa.decodeInt(this.privBytes());
    }), jo(Do, "hash", function() {
        return this.eddsa.hash().update(this.secret()).digest();
    }), jo(Do, "messagePrefix", function() {
        return this.hash().slice(this.eddsa.encodingLength);
    }), Do.prototype.sign = function(t) {
        return Co(this._secret, "KeyPair can only verify"), this.eddsa.sign(t, this);
    }, Do.prototype.verify = function(t, e) {
        return this.eddsa.verify(t, e, this);
    }, Do.prototype.getSecret = function(t) {
        return Co(this._secret, "KeyPair is public only"), vn.encode(this.secret(), t);
    }, Do.prototype.getPublic = function(t) {
        return vn.encode(this.pubBytes(), t);
    };
    var Fo = Do, Ko = vn.assert, Yo = vn.cachedProperty, Vo = vn.parseBytes;
    function Wo(t, e) {
        this.eddsa = t, "object" != typeof e && (e = Vo(e)), Array.isArray(e) && (e = {
            R: e.slice(0, t.encodingLength),
            S: e.slice(t.encodingLength)
        }), Ko(e.R && e.S, "Signature without R or S"), t.isPoint(e.R) && (this._R = e.R), e.S instanceof pn && (this._S = e.S), this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded, this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded;
    }
    Yo(Wo, "S", function() {
        return this.eddsa.decodeInt(this.Sencoded());
    }), Yo(Wo, "R", function() {
        return this.eddsa.decodePoint(this.Rencoded());
    }), Yo(Wo, "Rencoded", function() {
        return this.eddsa.encodePoint(this.R());
    }), Yo(Wo, "Sencoded", function() {
        return this.eddsa.encodeInt(this.S());
    }), Wo.prototype.toBytes = function() {
        return this.Rencoded().concat(this.Sencoded());
    }, Wo.prototype.toHex = function() {
        return vn.encode(this.toBytes(), "hex").toUpperCase();
    };
    var Ho = Wo, $o = vn.assert, Go = vn.parseBytes;
    function Zo(t) {
        if ($o("ed25519" === t, "only tested with ed25519 so far"), !(this instanceof Zo)) return new Zo(t);
        t = _o[t].curve, this.curve = t, this.g = t.g, this.g.precompute(t.n.bitLength() + 1), this.pointClass = t.point().constructor, this.encodingLength = Math.ceil(t.n.bitLength() / 8), this.hash = wo.sha512;
    }
    var Jo = Zo;
    Zo.prototype.sign = function(t, e) {
        t = Go(t);
        var r = this.keyFromSecret(e), n = this.hashInt(r.messagePrefix(), t), i = this.g.mul(n), o = this.encodePoint(i), s = this.hashInt(o, r.pubBytes(), t).mul(r.priv()), a = n.add(s).umod(this.curve.n);
        return this.makeSignature({
            R: i,
            S: a,
            Rencoded: o
        });
    }, Zo.prototype.verify = function(t, e, r) {
        t = Go(t), e = this.makeSignature(e);
        var n = this.keyFromPublic(r), i = this.hashInt(e.Rencoded(), n.pubBytes(), t), o = this.g.mul(e.S());
        return e.R().add(n.pub().mul(i)).eq(o);
    }, Zo.prototype.hashInt = function() {
        for(var t = this.hash(), e = 0; e < arguments.length; e++)t.update(arguments[e]);
        return vn.intFromLE(t.digest()).umod(this.curve.n);
    }, Zo.prototype.keyFromPublic = function(t) {
        return Fo.fromPublic(this, t);
    }, Zo.prototype.keyFromSecret = function(t) {
        return Fo.fromSecret(this, t);
    }, Zo.prototype.makeSignature = function(t) {
        return t instanceof Ho ? t : new Ho(this, t);
    }, Zo.prototype.encodePoint = function(t) {
        var e = t.getY().toArray("le", this.encodingLength);
        return e[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0, e;
    }, Zo.prototype.decodePoint = function(t) {
        var e = (t = vn.parseBytes(t)).length - 1, r = t.slice(0, e).concat(-129 & t[e]), n = 0 != (128 & t[e]), i = vn.intFromLE(r);
        return this.curve.pointFromY(i, n);
    }, Zo.prototype.encodeInt = function(t) {
        return t.toArray("le", this.encodingLength);
    }, Zo.prototype.decodeInt = function(t) {
        return vn.intFromLE(t);
    }, Zo.prototype.isPoint = function(t) {
        return t instanceof this.pointClass;
    };
    var Xo = Zt(ln);
    new (Gt(function(t, e) {
        var r = e;
        r.version = Xo.version, r.utils = vn, r.rand = wn, r.curve = Kn, r.curves = _o, r.ec = zo, r.eddsa = Jo;
    })).ec("secp256k1").curve.n.constructor, Gt(function(t) {
        /**
   * [js-sha3]{@link https://github.com/emn178/js-sha3}
   *
   * @version 0.8.0
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2015-2018
   * @license MIT
   */ !function() {
            var e = "input is invalid type", r = "object" == typeof window, n = r ? window : {};
            n.JS_SHA3_NO_WINDOW && (r = !1);
            var i = !r && "object" == typeof self;
            !n.JS_SHA3_NO_NODE_JS && "object" == typeof S && S.versions && S.versions.node ? n = Ht : i && (n = self);
            var o = !n.JS_SHA3_NO_COMMON_JS && t.exports, s = !n.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, a = "0123456789abcdef".split(""), h = [
                4,
                1024,
                262144,
                67108864
            ], f = [
                0,
                8,
                16,
                24
            ], u = [
                1,
                0,
                32898,
                0,
                32906,
                2147483648,
                2147516416,
                2147483648,
                32907,
                0,
                2147483649,
                0,
                2147516545,
                2147483648,
                32777,
                2147483648,
                138,
                0,
                136,
                0,
                2147516425,
                0,
                2147483658,
                0,
                2147516555,
                0,
                139,
                2147483648,
                32905,
                2147483648,
                32771,
                2147483648,
                32770,
                2147483648,
                128,
                2147483648,
                32778,
                0,
                2147483658,
                2147483648,
                2147516545,
                2147483648,
                32896,
                2147483648,
                2147483649,
                0,
                2147516424,
                2147483648
            ], c = [
                224,
                256,
                384,
                512
            ], d = [
                128,
                256
            ], l = [
                "hex",
                "buffer",
                "arrayBuffer",
                "array",
                "digest"
            ], p = {
                128: 168,
                256: 136
            };
            !n.JS_SHA3_NO_NODE_JS && Array.isArray || (Array.isArray = function(t) {
                return "[object Array]" === Object.prototype.toString.call(t);
            }), !s || !n.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(t) {
                return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer;
            });
            for(var b = function(t, e, r) {
                return function(n) {
                    return new T(t, e, t).update(n)[r]();
                };
            }, m = function(t, e, r) {
                return function(n, i) {
                    return new T(t, e, i).update(n)[r]();
                };
            }, y = function(t, e, r) {
                return function(e, n, i, o) {
                    return _["cshake" + t].update(e, n, i, o)[r]();
                };
            }, g = function(t, e, r) {
                return function(e, n, i, o) {
                    return _["kmac" + t].update(e, n, i, o)[r]();
                };
            }, v = function(t, e, r, n) {
                for(var i = 0; i < l.length; ++i){
                    var o = l[i];
                    t[o] = e(r, n, o);
                }
                return t;
            }, w = function(t, e) {
                var r = b(t, e, "hex");
                return r.create = function() {
                    return new T(t, e, t);
                }, r.update = function(t) {
                    return r.create().update(t);
                }, v(r, b, t, e);
            }, M = [
                {
                    name: "keccak",
                    padding: [
                        1,
                        256,
                        65536,
                        16777216
                    ],
                    bits: c,
                    createMethod: w
                },
                {
                    name: "sha3",
                    padding: [
                        6,
                        1536,
                        393216,
                        100663296
                    ],
                    bits: c,
                    createMethod: w
                },
                {
                    name: "shake",
                    padding: [
                        31,
                        7936,
                        2031616,
                        520093696
                    ],
                    bits: d,
                    createMethod: function(t, e) {
                        var r = m(t, e, "hex");
                        return r.create = function(r) {
                            return new T(t, e, r);
                        }, r.update = function(t, e) {
                            return r.create(e).update(t);
                        }, v(r, m, t, e);
                    }
                },
                {
                    name: "cshake",
                    padding: h,
                    bits: d,
                    createMethod: function(t, e) {
                        var r = p[t], n = y(t, 0, "hex");
                        return n.create = function(n, i, o) {
                            return i || o ? new T(t, e, n).bytepad([
                                i,
                                o
                            ], r) : _["shake" + t].create(n);
                        }, n.update = function(t, e, r, i) {
                            return n.create(e, r, i).update(t);
                        }, v(n, y, t, e);
                    }
                },
                {
                    name: "kmac",
                    padding: h,
                    bits: d,
                    createMethod: function(t, e) {
                        var r = p[t], n = g(t, 0, "hex");
                        return n.create = function(n, i, o) {
                            return new U(t, e, i).bytepad([
                                "KMAC",
                                o
                            ], r).bytepad([
                                n
                            ], r);
                        }, n.update = function(t, e, r, i) {
                            return n.create(t, r, i).update(e);
                        }, v(n, g, t, e);
                    }
                }
            ], _ = {}, A = [], E = 0; E < M.length; ++E)for(var x = M[E], I = x.bits, k = 0; k < I.length; ++k){
                var R = x.name + "_" + I[k];
                if (A.push(R), _[R] = x.createMethod(I[k], x.padding), "sha3" !== x.name) {
                    var B = x.name + I[k];
                    A.push(B), _[B] = _[R];
                }
            }
            function T(t, e, r) {
                this.blocks = [], this.s = [], this.padding = e, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
                for(var n = 0; n < 50; ++n)this.s[n] = 0;
            }
            function U(t, e, r) {
                T.call(this, t, e, r);
            }
            T.prototype.update = function(t) {
                if (this.finalized) throw new Error("finalize already called");
                var r, n = typeof t;
                if ("string" !== n) {
                    if ("object" !== n) throw new Error(e);
                    if (null === t) throw new Error(e);
                    if (s && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                    else if (!(Array.isArray(t) || s && ArrayBuffer.isView(t))) throw new Error(e);
                    r = !0;
                }
                for(var i, o, a = this.blocks, h = this.byteCount, u = t.length, c = this.blockCount, d = 0, l = this.s; d < u;){
                    if (this.reset) for(this.reset = !1, a[0] = this.block, i = 1; i < c + 1; ++i)a[i] = 0;
                    if (r) for(i = this.start; d < u && i < h; ++d)a[i >> 2] |= t[d] << f[3 & i++];
                    else for(i = this.start; d < u && i < h; ++d)(o = t.charCodeAt(d)) < 128 ? a[i >> 2] |= o << f[3 & i++] : o < 2048 ? (a[i >> 2] |= (192 | o >> 6) << f[3 & i++], a[i >> 2] |= (128 | 63 & o) << f[3 & i++]) : o < 55296 || o >= 57344 ? (a[i >> 2] |= (224 | o >> 12) << f[3 & i++], a[i >> 2] |= (128 | o >> 6 & 63) << f[3 & i++], a[i >> 2] |= (128 | 63 & o) << f[3 & i++]) : (o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(++d)), a[i >> 2] |= (240 | o >> 18) << f[3 & i++], a[i >> 2] |= (128 | o >> 12 & 63) << f[3 & i++], a[i >> 2] |= (128 | o >> 6 & 63) << f[3 & i++], a[i >> 2] |= (128 | 63 & o) << f[3 & i++]);
                    if (this.lastByteIndex = i, i >= h) {
                        for(this.start = i - h, this.block = a[c], i = 0; i < c; ++i)l[i] ^= a[i];
                        O(l), this.reset = !0;
                    } else this.start = i;
                }
                return this;
            }, T.prototype.encode = function(t, e) {
                var r = 255 & t, n = 1, i = [
                    r
                ];
                for(r = 255 & (t >>= 8); r > 0;)i.unshift(r), r = 255 & (t >>= 8), ++n;
                return e ? i.push(n) : i.unshift(n), this.update(i), i.length;
            }, T.prototype.encodeString = function(t) {
                var r, n = typeof t;
                if ("string" !== n) {
                    if ("object" !== n) throw new Error(e);
                    if (null === t) throw new Error(e);
                    if (s && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                    else if (!(Array.isArray(t) || s && ArrayBuffer.isView(t))) throw new Error(e);
                    r = !0;
                }
                var i = 0, o = t.length;
                if (r) i = o;
                else for(var a = 0; a < t.length; ++a){
                    var h = t.charCodeAt(a);
                    h < 128 ? i += 1 : h < 2048 ? i += 2 : h < 55296 || h >= 57344 ? i += 3 : (h = 65536 + ((1023 & h) << 10 | 1023 & t.charCodeAt(++a)), i += 4);
                }
                return i += this.encode(8 * i), this.update(t), i;
            }, T.prototype.bytepad = function(t, e) {
                for(var r = this.encode(e), n = 0; n < t.length; ++n)r += this.encodeString(t[n]);
                var i = e - r % e, o = [];
                return o.length = i, this.update(o), this;
            }, T.prototype.finalize = function() {
                if (!this.finalized) {
                    this.finalized = !0;
                    var t = this.blocks, e = this.lastByteIndex, r = this.blockCount, n = this.s;
                    if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount) for(t[0] = t[r], e = 1; e < r + 1; ++e)t[e] = 0;
                    for(t[r - 1] |= 2147483648, e = 0; e < r; ++e)n[e] ^= t[e];
                    O(n);
                }
            }, T.prototype.toString = T.prototype.hex = function() {
                this.finalize();
                for(var t, e = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, s = 0, h = ""; s < n;){
                    for(o = 0; o < e && s < n; ++o, ++s)t = r[o], h += a[t >> 4 & 15] + a[15 & t] + a[t >> 12 & 15] + a[t >> 8 & 15] + a[t >> 20 & 15] + a[t >> 16 & 15] + a[t >> 28 & 15] + a[t >> 24 & 15];
                    s % e == 0 && (O(r), o = 0);
                }
                return i && (t = r[o], h += a[t >> 4 & 15] + a[15 & t], i > 1 && (h += a[t >> 12 & 15] + a[t >> 8 & 15]), i > 2 && (h += a[t >> 20 & 15] + a[t >> 16 & 15])), h;
            }, T.prototype.arrayBuffer = function() {
                this.finalize();
                var t, e = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, s = 0, a = this.outputBits >> 3;
                t = i ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(a);
                for(var h = new Uint32Array(t); s < n;){
                    for(o = 0; o < e && s < n; ++o, ++s)h[s] = r[o];
                    s % e == 0 && O(r);
                }
                return i && (h[o] = r[o], t = t.slice(0, a)), t;
            }, T.prototype.buffer = T.prototype.arrayBuffer, T.prototype.digest = T.prototype.array = function() {
                this.finalize();
                for(var t, e, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, s = 0, a = 0, h = []; a < i;){
                    for(s = 0; s < r && a < i; ++s, ++a)t = a << 2, e = n[s], h[t] = 255 & e, h[t + 1] = e >> 8 & 255, h[t + 2] = e >> 16 & 255, h[t + 3] = e >> 24 & 255;
                    a % r == 0 && O(n);
                }
                return o && (t = a << 2, e = n[s], h[t] = 255 & e, o > 1 && (h[t + 1] = e >> 8 & 255), o > 2 && (h[t + 2] = e >> 16 & 255)), h;
            }, U.prototype = new T, U.prototype.finalize = function() {
                return this.encode(this.outputBits, !0), T.prototype.finalize.call(this);
            };
            var O = function(t) {
                var e, r, n, i, o, s, a, h, f, c, d, l, p, b, m, y, g, v, w, M, _, A, S, E, x, I, k, R, B, T, U, O, P, L, N, z, C, q, j, D, F, K, Y, V, W, H, $, G, Z, J, X, Q, tt, et, rt, nt, it, ot, st, at, ht, ft, ut;
                for(n = 0; n < 48; n += 2)i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], h = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], f = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], c = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], d = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], e = (l = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ (s << 1 | a >>> 31), r = (p = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ (a << 1 | s >>> 31), t[0] ^= e, t[1] ^= r, t[10] ^= e, t[11] ^= r, t[20] ^= e, t[21] ^= r, t[30] ^= e, t[31] ^= r, t[40] ^= e, t[41] ^= r, e = i ^ (h << 1 | f >>> 31), r = o ^ (f << 1 | h >>> 31), t[2] ^= e, t[3] ^= r, t[12] ^= e, t[13] ^= r, t[22] ^= e, t[23] ^= r, t[32] ^= e, t[33] ^= r, t[42] ^= e, t[43] ^= r, e = s ^ (c << 1 | d >>> 31), r = a ^ (d << 1 | c >>> 31), t[4] ^= e, t[5] ^= r, t[14] ^= e, t[15] ^= r, t[24] ^= e, t[25] ^= r, t[34] ^= e, t[35] ^= r, t[44] ^= e, t[45] ^= r, e = h ^ (l << 1 | p >>> 31), r = f ^ (p << 1 | l >>> 31), t[6] ^= e, t[7] ^= r, t[16] ^= e, t[17] ^= r, t[26] ^= e, t[27] ^= r, t[36] ^= e, t[37] ^= r, t[46] ^= e, t[47] ^= r, e = c ^ (i << 1 | o >>> 31), r = d ^ (o << 1 | i >>> 31), t[8] ^= e, t[9] ^= r, t[18] ^= e, t[19] ^= r, t[28] ^= e, t[29] ^= r, t[38] ^= e, t[39] ^= r, t[48] ^= e, t[49] ^= r, b = t[0], m = t[1], H = t[11] << 4 | t[10] >>> 28, $ = t[10] << 4 | t[11] >>> 28, R = t[20] << 3 | t[21] >>> 29, B = t[21] << 3 | t[20] >>> 29, at = t[31] << 9 | t[30] >>> 23, ht = t[30] << 9 | t[31] >>> 23, K = t[40] << 18 | t[41] >>> 14, Y = t[41] << 18 | t[40] >>> 14, L = t[2] << 1 | t[3] >>> 31, N = t[3] << 1 | t[2] >>> 31, y = t[13] << 12 | t[12] >>> 20, g = t[12] << 12 | t[13] >>> 20, G = t[22] << 10 | t[23] >>> 22, Z = t[23] << 10 | t[22] >>> 22, T = t[33] << 13 | t[32] >>> 19, U = t[32] << 13 | t[33] >>> 19, ft = t[42] << 2 | t[43] >>> 30, ut = t[43] << 2 | t[42] >>> 30, et = t[5] << 30 | t[4] >>> 2, rt = t[4] << 30 | t[5] >>> 2, z = t[14] << 6 | t[15] >>> 26, C = t[15] << 6 | t[14] >>> 26, v = t[25] << 11 | t[24] >>> 21, w = t[24] << 11 | t[25] >>> 21, J = t[34] << 15 | t[35] >>> 17, X = t[35] << 15 | t[34] >>> 17, O = t[45] << 29 | t[44] >>> 3, P = t[44] << 29 | t[45] >>> 3, E = t[6] << 28 | t[7] >>> 4, x = t[7] << 28 | t[6] >>> 4, nt = t[17] << 23 | t[16] >>> 9, it = t[16] << 23 | t[17] >>> 9, q = t[26] << 25 | t[27] >>> 7, j = t[27] << 25 | t[26] >>> 7, M = t[36] << 21 | t[37] >>> 11, _ = t[37] << 21 | t[36] >>> 11, Q = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, V = t[8] << 27 | t[9] >>> 5, W = t[9] << 27 | t[8] >>> 5, I = t[18] << 20 | t[19] >>> 12, k = t[19] << 20 | t[18] >>> 12, ot = t[29] << 7 | t[28] >>> 25, st = t[28] << 7 | t[29] >>> 25, D = t[38] << 8 | t[39] >>> 24, F = t[39] << 8 | t[38] >>> 24, A = t[48] << 14 | t[49] >>> 18, S = t[49] << 14 | t[48] >>> 18, t[0] = b ^ ~y & v, t[1] = m ^ ~g & w, t[10] = E ^ ~I & R, t[11] = x ^ ~k & B, t[20] = L ^ ~z & q, t[21] = N ^ ~C & j, t[30] = V ^ ~H & G, t[31] = W ^ ~$ & Z, t[40] = et ^ ~nt & ot, t[41] = rt ^ ~it & st, t[2] = y ^ ~v & M, t[3] = g ^ ~w & _, t[12] = I ^ ~R & T, t[13] = k ^ ~B & U, t[22] = z ^ ~q & D, t[23] = C ^ ~j & F, t[32] = H ^ ~G & J, t[33] = $ ^ ~Z & X, t[42] = nt ^ ~ot & at, t[43] = it ^ ~st & ht, t[4] = v ^ ~M & A, t[5] = w ^ ~_ & S, t[14] = R ^ ~T & O, t[15] = B ^ ~U & P, t[24] = q ^ ~D & K, t[25] = j ^ ~F & Y, t[34] = G ^ ~J & Q, t[35] = Z ^ ~X & tt, t[44] = ot ^ ~at & ft, t[45] = st ^ ~ht & ut, t[6] = M ^ ~A & b, t[7] = _ ^ ~S & m, t[16] = T ^ ~O & E, t[17] = U ^ ~P & x, t[26] = D ^ ~K & L, t[27] = F ^ ~Y & N, t[36] = J ^ ~Q & V, t[37] = X ^ ~tt & W, t[46] = at ^ ~ft & et, t[47] = ht ^ ~ut & rt, t[8] = A ^ ~b & y, t[9] = S ^ ~m & g, t[18] = O ^ ~E & I, t[19] = P ^ ~x & k, t[28] = K ^ ~L & z, t[29] = Y ^ ~N & C, t[38] = Q ^ ~V & H, t[39] = tt ^ ~W & $, t[48] = ft ^ ~et & nt, t[49] = ut ^ ~rt & it, t[0] ^= u[n], t[1] ^= u[n + 1];
            };
            if (o) t.exports = _;
            else for(E = 0; E < A.length; ++E)n[A[E]] = _[A[E]];
        }();
    }).keccak_256;
    const Qo = (t)=>at.isBuffer(t) ? t : t instanceof Uint8Array ? at.from(t.buffer, t.byteOffset, t.byteLength) : at.from(t);
    var ts = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, es = {}, rs = {}, ns = is;
    function is(t, e) {
        if (!t) throw new Error(e || "Assertion failed");
    }
    is.equal = function(t, e, r) {
        if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e);
    };
    var os = {
        exports: {}
    };
    "function" == typeof Object.create ? os.exports = function(t, e) {
        e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }));
    } : os.exports = function(t, e) {
        if (e) {
            t.super_ = e;
            var r = function() {};
            r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t;
        }
    };
    var ss = ns, as = os.exports;
    function hs(t, e) {
        return 55296 == (64512 & t.charCodeAt(e)) && !(e < 0 || e + 1 >= t.length) && 56320 == (64512 & t.charCodeAt(e + 1));
    }
    function fs(t) {
        return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0;
    }
    function us(t) {
        return 1 === t.length ? "0" + t : t;
    }
    function cs(t) {
        return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t;
    }
    rs.inherits = as, rs.toArray = function(t, e) {
        if (Array.isArray(t)) return t.slice();
        if (!t) return [];
        var r = [];
        if ("string" == typeof t) {
            if (e) {
                if ("hex" === e) for((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), i = 0; i < t.length; i += 2)r.push(parseInt(t[i] + t[i + 1], 16));
            } else for(var n = 0, i = 0; i < t.length; i++){
                var o = t.charCodeAt(i);
                o < 128 ? r[n++] = o : o < 2048 ? (r[n++] = o >> 6 | 192, r[n++] = 63 & o | 128) : hs(t, i) ? (o = 65536 + ((1023 & o) << 10) + (1023 & t.charCodeAt(++i)), r[n++] = o >> 18 | 240, r[n++] = o >> 12 & 63 | 128, r[n++] = o >> 6 & 63 | 128, r[n++] = 63 & o | 128) : (r[n++] = o >> 12 | 224, r[n++] = o >> 6 & 63 | 128, r[n++] = 63 & o | 128);
            }
        } else for(i = 0; i < t.length; i++)r[i] = 0 | t[i];
        return r;
    }, rs.toHex = function(t) {
        for(var e = "", r = 0; r < t.length; r++)e += us(t[r].toString(16));
        return e;
    }, rs.htonl = fs, rs.toHex32 = function(t, e) {
        for(var r = "", n = 0; n < t.length; n++){
            var i = t[n];
            "little" === e && (i = fs(i)), r += cs(i.toString(16));
        }
        return r;
    }, rs.zero2 = us, rs.zero8 = cs, rs.join32 = function(t, e, r, n) {
        var i = r - e;
        ss(i % 4 == 0);
        for(var o = new Array(i / 4), s = 0, a = e; s < o.length; s++, a += 4){
            var h;
            h = "big" === n ? t[a] << 24 | t[a + 1] << 16 | t[a + 2] << 8 | t[a + 3] : t[a + 3] << 24 | t[a + 2] << 16 | t[a + 1] << 8 | t[a], o[s] = h >>> 0;
        }
        return o;
    }, rs.split32 = function(t, e) {
        for(var r = new Array(4 * t.length), n = 0, i = 0; n < t.length; n++, i += 4){
            var o = t[n];
            "big" === e ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o);
        }
        return r;
    }, rs.rotr32 = function(t, e) {
        return t >>> e | t << 32 - e;
    }, rs.rotl32 = function(t, e) {
        return t << e | t >>> 32 - e;
    }, rs.sum32 = function(t, e) {
        return t + e >>> 0;
    }, rs.sum32_3 = function(t, e, r) {
        return t + e + r >>> 0;
    }, rs.sum32_4 = function(t, e, r, n) {
        return t + e + r + n >>> 0;
    }, rs.sum32_5 = function(t, e, r, n, i) {
        return t + e + r + n + i >>> 0;
    }, rs.sum64 = function(t, e, r, n) {
        var i = t[e], o = n + t[e + 1] >>> 0, s = (o < n ? 1 : 0) + r + i;
        t[e] = s >>> 0, t[e + 1] = o;
    }, rs.sum64_hi = function(t, e, r, n) {
        return (e + n >>> 0 < e ? 1 : 0) + t + r >>> 0;
    }, rs.sum64_lo = function(t, e, r, n) {
        return e + n >>> 0;
    }, rs.sum64_4_hi = function(t, e, r, n, i, o, s, a) {
        var h = 0, f = e;
        return h += (f = f + n >>> 0) < e ? 1 : 0, h += (f = f + o >>> 0) < o ? 1 : 0, t + r + i + s + (h += (f = f + a >>> 0) < a ? 1 : 0) >>> 0;
    }, rs.sum64_4_lo = function(t, e, r, n, i, o, s, a) {
        return e + n + o + a >>> 0;
    }, rs.sum64_5_hi = function(t, e, r, n, i, o, s, a, h, f) {
        var u = 0, c = e;
        return u += (c = c + n >>> 0) < e ? 1 : 0, u += (c = c + o >>> 0) < o ? 1 : 0, u += (c = c + a >>> 0) < a ? 1 : 0, t + r + i + s + h + (u += (c = c + f >>> 0) < f ? 1 : 0) >>> 0;
    }, rs.sum64_5_lo = function(t, e, r, n, i, o, s, a, h, f) {
        return e + n + o + a + f >>> 0;
    }, rs.rotr64_hi = function(t, e, r) {
        return (e << 32 - r | t >>> r) >>> 0;
    }, rs.rotr64_lo = function(t, e, r) {
        return (t << 32 - r | e >>> r) >>> 0;
    }, rs.shr64_hi = function(t, e, r) {
        return t >>> r;
    }, rs.shr64_lo = function(t, e, r) {
        return (t << 32 - r | e >>> r) >>> 0;
    };
    var ds = {}, ls = rs, ps = ns;
    function bs() {
        this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
    }
    ds.BlockHash = bs, bs.prototype.update = function(t, e) {
        if (t = ls.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
            var r = (t = this.pending).length % this._delta8;
            this.pending = t.slice(t.length - r, t.length), 0 === this.pending.length && (this.pending = null), t = ls.join32(t, 0, t.length - r, this.endian);
            for(var n = 0; n < t.length; n += this._delta32)this._update(t, n, n + this._delta32);
        }
        return this;
    }, bs.prototype.digest = function(t) {
        return this.update(this._pad()), ps(null === this.pending), this._digest(t);
    }, bs.prototype._pad = function() {
        var t = this.pendingTotal, e = this._delta8, r = e - (t + this.padLength) % e, n = new Array(r + this.padLength);
        n[0] = 128;
        for(var i = 1; i < r; i++)n[i] = 0;
        if (t <<= 3, "big" === this.endian) {
            for(var o = 8; o < this.padLength; o++)n[i++] = 0;
            n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = t >>> 24 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 8 & 255, n[i++] = 255 & t;
        } else for(n[i++] = 255 & t, n[i++] = t >>> 8 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++)n[i++] = 0;
        return n;
    };
    var ms = {}, ys = {}, gs = rs.rotr32;
    function vs(t, e, r) {
        return t & e ^ ~t & r;
    }
    function ws(t, e, r) {
        return t & e ^ t & r ^ e & r;
    }
    function Ms(t, e, r) {
        return t ^ e ^ r;
    }
    ys.ft_1 = function(t, e, r, n) {
        return 0 === t ? vs(e, r, n) : 1 === t || 3 === t ? Ms(e, r, n) : 2 === t ? ws(e, r, n) : void 0;
    }, ys.ch32 = vs, ys.maj32 = ws, ys.p32 = Ms, ys.s0_256 = function(t) {
        return gs(t, 2) ^ gs(t, 13) ^ gs(t, 22);
    }, ys.s1_256 = function(t) {
        return gs(t, 6) ^ gs(t, 11) ^ gs(t, 25);
    }, ys.g0_256 = function(t) {
        return gs(t, 7) ^ gs(t, 18) ^ t >>> 3;
    }, ys.g1_256 = function(t) {
        return gs(t, 17) ^ gs(t, 19) ^ t >>> 10;
    };
    var _s = rs, As = ds, Ss = ys, Es = _s.rotl32, xs = _s.sum32, Is = _s.sum32_5, ks = Ss.ft_1, Rs = As.BlockHash, Bs = [
        1518500249,
        1859775393,
        2400959708,
        3395469782
    ];
    function Ts() {
        if (!(this instanceof Ts)) return new Ts;
        Rs.call(this), this.h = [
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
        ], this.W = new Array(80);
    }
    _s.inherits(Ts, Rs);
    var Us = Ts;
    Ts.blockSize = 512, Ts.outSize = 160, Ts.hmacStrength = 80, Ts.padLength = 64, Ts.prototype._update = function(t, e) {
        for(var r = this.W, n = 0; n < 16; n++)r[n] = t[e + n];
        for(; n < r.length; n++)r[n] = Es(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
        var i = this.h[0], o = this.h[1], s = this.h[2], a = this.h[3], h = this.h[4];
        for(n = 0; n < r.length; n++){
            var f = ~~(n / 20), u = Is(Es(i, 5), ks(f, o, s, a), h, r[n], Bs[f]);
            h = a, a = s, s = Es(o, 30), o = i, i = u;
        }
        this.h[0] = xs(this.h[0], i), this.h[1] = xs(this.h[1], o), this.h[2] = xs(this.h[2], s), this.h[3] = xs(this.h[3], a), this.h[4] = xs(this.h[4], h);
    }, Ts.prototype._digest = function(t) {
        return "hex" === t ? _s.toHex32(this.h, "big") : _s.split32(this.h, "big");
    };
    var Os = rs, Ps = ds, Ls = ys, Ns = ns, zs = Os.sum32, Cs = Os.sum32_4, qs = Os.sum32_5, js = Ls.ch32, Ds = Ls.maj32, Fs = Ls.s0_256, Ks = Ls.s1_256, Ys = Ls.g0_256, Vs = Ls.g1_256, Ws = Ps.BlockHash, Hs = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
    ];
    function $s() {
        if (!(this instanceof $s)) return new $s;
        Ws.call(this), this.h = [
            1779033703,
            3144134277,
            1013904242,
            2773480762,
            1359893119,
            2600822924,
            528734635,
            1541459225
        ], this.k = Hs, this.W = new Array(64);
    }
    Os.inherits($s, Ws);
    var Gs = $s;
    $s.blockSize = 512, $s.outSize = 256, $s.hmacStrength = 192, $s.padLength = 64, $s.prototype._update = function(t, e) {
        for(var r = this.W, n = 0; n < 16; n++)r[n] = t[e + n];
        for(; n < r.length; n++)r[n] = Cs(Vs(r[n - 2]), r[n - 7], Ys(r[n - 15]), r[n - 16]);
        var i = this.h[0], o = this.h[1], s = this.h[2], a = this.h[3], h = this.h[4], f = this.h[5], u = this.h[6], c = this.h[7];
        for(Ns(this.k.length === r.length), n = 0; n < r.length; n++){
            var d = qs(c, Ks(h), js(h, f, u), this.k[n], r[n]), l = zs(Fs(i), Ds(i, o, s));
            c = u, u = f, f = h, h = zs(a, d), a = s, s = o, o = i, i = zs(d, l);
        }
        this.h[0] = zs(this.h[0], i), this.h[1] = zs(this.h[1], o), this.h[2] = zs(this.h[2], s), this.h[3] = zs(this.h[3], a), this.h[4] = zs(this.h[4], h), this.h[5] = zs(this.h[5], f), this.h[6] = zs(this.h[6], u), this.h[7] = zs(this.h[7], c);
    }, $s.prototype._digest = function(t) {
        return "hex" === t ? Os.toHex32(this.h, "big") : Os.split32(this.h, "big");
    };
    var Zs = rs, Js = Gs;
    function Xs() {
        if (!(this instanceof Xs)) return new Xs;
        Js.call(this), this.h = [
            3238371032,
            914150663,
            812702999,
            4144912697,
            4290775857,
            1750603025,
            1694076839,
            3204075428
        ];
    }
    Zs.inherits(Xs, Js);
    var Qs = Xs;
    Xs.blockSize = 512, Xs.outSize = 224, Xs.hmacStrength = 192, Xs.padLength = 64, Xs.prototype._digest = function(t) {
        return "hex" === t ? Zs.toHex32(this.h.slice(0, 7), "big") : Zs.split32(this.h.slice(0, 7), "big");
    };
    var ta = rs, ea = ds, ra = ns, na = ta.rotr64_hi, ia = ta.rotr64_lo, oa = ta.shr64_hi, sa = ta.shr64_lo, aa = ta.sum64, ha = ta.sum64_hi, fa = ta.sum64_lo, ua = ta.sum64_4_hi, ca = ta.sum64_4_lo, da = ta.sum64_5_hi, la = ta.sum64_5_lo, pa = ea.BlockHash, ba = [
        1116352408,
        3609767458,
        1899447441,
        602891725,
        3049323471,
        3964484399,
        3921009573,
        2173295548,
        961987163,
        4081628472,
        1508970993,
        3053834265,
        2453635748,
        2937671579,
        2870763221,
        3664609560,
        3624381080,
        2734883394,
        310598401,
        1164996542,
        607225278,
        1323610764,
        1426881987,
        3590304994,
        1925078388,
        4068182383,
        2162078206,
        991336113,
        2614888103,
        633803317,
        3248222580,
        3479774868,
        3835390401,
        2666613458,
        4022224774,
        944711139,
        264347078,
        2341262773,
        604807628,
        2007800933,
        770255983,
        1495990901,
        1249150122,
        1856431235,
        1555081692,
        3175218132,
        1996064986,
        2198950837,
        2554220882,
        3999719339,
        2821834349,
        766784016,
        2952996808,
        2566594879,
        3210313671,
        3203337956,
        3336571891,
        1034457026,
        3584528711,
        2466948901,
        113926993,
        3758326383,
        338241895,
        168717936,
        666307205,
        1188179964,
        773529912,
        1546045734,
        1294757372,
        1522805485,
        1396182291,
        2643833823,
        1695183700,
        2343527390,
        1986661051,
        1014477480,
        2177026350,
        1206759142,
        2456956037,
        344077627,
        2730485921,
        1290863460,
        2820302411,
        3158454273,
        3259730800,
        3505952657,
        3345764771,
        106217008,
        3516065817,
        3606008344,
        3600352804,
        1432725776,
        4094571909,
        1467031594,
        275423344,
        851169720,
        430227734,
        3100823752,
        506948616,
        1363258195,
        659060556,
        3750685593,
        883997877,
        3785050280,
        958139571,
        3318307427,
        1322822218,
        3812723403,
        1537002063,
        2003034995,
        1747873779,
        3602036899,
        1955562222,
        1575990012,
        2024104815,
        1125592928,
        2227730452,
        2716904306,
        2361852424,
        442776044,
        2428436474,
        593698344,
        2756734187,
        3733110249,
        3204031479,
        2999351573,
        3329325298,
        3815920427,
        3391569614,
        3928383900,
        3515267271,
        566280711,
        3940187606,
        3454069534,
        4118630271,
        4000239992,
        116418474,
        1914138554,
        174292421,
        2731055270,
        289380356,
        3203993006,
        460393269,
        320620315,
        685471733,
        587496836,
        852142971,
        1086792851,
        1017036298,
        365543100,
        1126000580,
        2618297676,
        1288033470,
        3409855158,
        1501505948,
        4234509866,
        1607167915,
        987167468,
        1816402316,
        1246189591
    ];
    function ma() {
        if (!(this instanceof ma)) return new ma;
        pa.call(this), this.h = [
            1779033703,
            4089235720,
            3144134277,
            2227873595,
            1013904242,
            4271175723,
            2773480762,
            1595750129,
            1359893119,
            2917565137,
            2600822924,
            725511199,
            528734635,
            4215389547,
            1541459225,
            327033209
        ], this.k = ba, this.W = new Array(160);
    }
    ta.inherits(ma, pa);
    var ya = ma;
    function ga(t, e, r, n, i) {
        var o = t & r ^ ~t & i;
        return o < 0 && (o += 4294967296), o;
    }
    function va(t, e, r, n, i, o) {
        var s = e & n ^ ~e & o;
        return s < 0 && (s += 4294967296), s;
    }
    function wa(t, e, r, n, i) {
        var o = t & r ^ t & i ^ r & i;
        return o < 0 && (o += 4294967296), o;
    }
    function Ma(t, e, r, n, i, o) {
        var s = e & n ^ e & o ^ n & o;
        return s < 0 && (s += 4294967296), s;
    }
    function _a(t, e) {
        var r = na(t, e, 28) ^ na(e, t, 2) ^ na(e, t, 7);
        return r < 0 && (r += 4294967296), r;
    }
    function Aa(t, e) {
        var r = ia(t, e, 28) ^ ia(e, t, 2) ^ ia(e, t, 7);
        return r < 0 && (r += 4294967296), r;
    }
    function Sa(t, e) {
        var r = na(t, e, 14) ^ na(t, e, 18) ^ na(e, t, 9);
        return r < 0 && (r += 4294967296), r;
    }
    function Ea(t, e) {
        var r = ia(t, e, 14) ^ ia(t, e, 18) ^ ia(e, t, 9);
        return r < 0 && (r += 4294967296), r;
    }
    function xa(t, e) {
        var r = na(t, e, 1) ^ na(t, e, 8) ^ oa(t, e, 7);
        return r < 0 && (r += 4294967296), r;
    }
    function Ia(t, e) {
        var r = ia(t, e, 1) ^ ia(t, e, 8) ^ sa(t, e, 7);
        return r < 0 && (r += 4294967296), r;
    }
    function ka(t, e) {
        var r = na(t, e, 19) ^ na(e, t, 29) ^ oa(t, e, 6);
        return r < 0 && (r += 4294967296), r;
    }
    function Ra(t, e) {
        var r = ia(t, e, 19) ^ ia(e, t, 29) ^ sa(t, e, 6);
        return r < 0 && (r += 4294967296), r;
    }
    ma.blockSize = 1024, ma.outSize = 512, ma.hmacStrength = 192, ma.padLength = 128, ma.prototype._prepareBlock = function(t, e) {
        for(var r = this.W, n = 0; n < 32; n++)r[n] = t[e + n];
        for(; n < r.length; n += 2){
            var i = ka(r[n - 4], r[n - 3]), o = Ra(r[n - 4], r[n - 3]), s = r[n - 14], a = r[n - 13], h = xa(r[n - 30], r[n - 29]), f = Ia(r[n - 30], r[n - 29]), u = r[n - 32], c = r[n - 31];
            r[n] = ua(i, o, s, a, h, f, u, c), r[n + 1] = ca(i, o, s, a, h, f, u, c);
        }
    }, ma.prototype._update = function(t, e) {
        this._prepareBlock(t, e);
        var r = this.W, n = this.h[0], i = this.h[1], o = this.h[2], s = this.h[3], a = this.h[4], h = this.h[5], f = this.h[6], u = this.h[7], c = this.h[8], d = this.h[9], l = this.h[10], p = this.h[11], b = this.h[12], m = this.h[13], y = this.h[14], g = this.h[15];
        ra(this.k.length === r.length);
        for(var v = 0; v < r.length; v += 2){
            var w = y, M = g, _ = Sa(c, d), A = Ea(c, d), S = ga(c, d, l, p, b), E = va(c, d, l, p, b, m), x = this.k[v], I = this.k[v + 1], k = r[v], R = r[v + 1], B = da(w, M, _, A, S, E, x, I, k, R), T = la(w, M, _, A, S, E, x, I, k, R);
            w = _a(n, i), M = Aa(n, i), _ = wa(n, i, o, s, a), A = Ma(n, i, o, s, a, h);
            var U = ha(w, M, _, A), O = fa(w, M, _, A);
            y = b, g = m, b = l, m = p, l = c, p = d, c = ha(f, u, B, T), d = fa(u, u, B, T), f = a, u = h, a = o, h = s, o = n, s = i, n = ha(B, T, U, O), i = fa(B, T, U, O);
        }
        aa(this.h, 0, n, i), aa(this.h, 2, o, s), aa(this.h, 4, a, h), aa(this.h, 6, f, u), aa(this.h, 8, c, d), aa(this.h, 10, l, p), aa(this.h, 12, b, m), aa(this.h, 14, y, g);
    }, ma.prototype._digest = function(t) {
        return "hex" === t ? ta.toHex32(this.h, "big") : ta.split32(this.h, "big");
    };
    var Ba = rs, Ta = ya;
    function Ua() {
        if (!(this instanceof Ua)) return new Ua;
        Ta.call(this), this.h = [
            3418070365,
            3238371032,
            1654270250,
            914150663,
            2438529370,
            812702999,
            355462360,
            4144912697,
            1731405415,
            4290775857,
            2394180231,
            1750603025,
            3675008525,
            1694076839,
            1203062813,
            3204075428
        ];
    }
    Ba.inherits(Ua, Ta);
    var Oa = Ua;
    Ua.blockSize = 1024, Ua.outSize = 384, Ua.hmacStrength = 192, Ua.padLength = 128, Ua.prototype._digest = function(t) {
        return "hex" === t ? Ba.toHex32(this.h.slice(0, 12), "big") : Ba.split32(this.h.slice(0, 12), "big");
    }, ms.sha1 = Us, ms.sha224 = Qs, ms.sha256 = Gs, ms.sha384 = Oa, ms.sha512 = ya;
    var Pa = {}, La = rs, Na = ds, za = La.rotl32, Ca = La.sum32, qa = La.sum32_3, ja = La.sum32_4, Da = Na.BlockHash;
    function Fa() {
        if (!(this instanceof Fa)) return new Fa;
        Da.call(this), this.h = [
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
        ], this.endian = "little";
    }
    function Ka(t, e, r, n) {
        return t <= 15 ? e ^ r ^ n : t <= 31 ? e & r | ~e & n : t <= 47 ? (e | ~r) ^ n : t <= 63 ? e & n | r & ~n : e ^ (r | ~n);
    }
    function Ya(t) {
        return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838;
    }
    function Va(t) {
        return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0;
    }
    La.inherits(Fa, Da), Pa.ripemd160 = Fa, Fa.blockSize = 512, Fa.outSize = 160, Fa.hmacStrength = 192, Fa.padLength = 64, Fa.prototype._update = function(t, e) {
        for(var r = this.h[0], n = this.h[1], i = this.h[2], o = this.h[3], s = this.h[4], a = r, h = n, f = i, u = o, c = s, d = 0; d < 80; d++){
            var l = Ca(za(ja(r, Ka(d, n, i, o), t[Wa[d] + e], Ya(d)), $a[d]), s);
            r = s, s = o, o = za(i, 10), i = n, n = l, l = Ca(za(ja(a, Ka(79 - d, h, f, u), t[Ha[d] + e], Va(d)), Ga[d]), c), a = c, c = u, u = za(f, 10), f = h, h = l;
        }
        l = qa(this.h[1], i, u), this.h[1] = qa(this.h[2], o, c), this.h[2] = qa(this.h[3], s, a), this.h[3] = qa(this.h[4], r, h), this.h[4] = qa(this.h[0], n, f), this.h[0] = l;
    }, Fa.prototype._digest = function(t) {
        return "hex" === t ? La.toHex32(this.h, "little") : La.split32(this.h, "little");
    };
    var Wa = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        7,
        4,
        13,
        1,
        10,
        6,
        15,
        3,
        12,
        0,
        9,
        5,
        2,
        14,
        11,
        8,
        3,
        10,
        14,
        4,
        9,
        15,
        8,
        1,
        2,
        7,
        0,
        6,
        13,
        11,
        5,
        12,
        1,
        9,
        11,
        10,
        0,
        8,
        12,
        4,
        13,
        3,
        7,
        15,
        14,
        5,
        6,
        2,
        4,
        0,
        5,
        9,
        7,
        12,
        2,
        10,
        14,
        1,
        3,
        8,
        11,
        6,
        15,
        13
    ], Ha = [
        5,
        14,
        7,
        0,
        9,
        2,
        11,
        4,
        13,
        6,
        15,
        8,
        1,
        10,
        3,
        12,
        6,
        11,
        3,
        7,
        0,
        13,
        5,
        10,
        14,
        15,
        8,
        12,
        4,
        9,
        1,
        2,
        15,
        5,
        1,
        3,
        7,
        14,
        6,
        9,
        11,
        8,
        12,
        2,
        10,
        0,
        4,
        13,
        8,
        6,
        4,
        1,
        3,
        11,
        15,
        0,
        5,
        12,
        2,
        13,
        9,
        7,
        10,
        14,
        12,
        15,
        10,
        4,
        1,
        5,
        8,
        7,
        6,
        2,
        13,
        14,
        0,
        3,
        9,
        11
    ], $a = [
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8,
        7,
        6,
        8,
        13,
        11,
        9,
        7,
        15,
        7,
        12,
        15,
        9,
        11,
        7,
        13,
        12,
        11,
        13,
        6,
        7,
        14,
        9,
        13,
        15,
        14,
        8,
        13,
        6,
        5,
        12,
        7,
        5,
        11,
        12,
        14,
        15,
        14,
        15,
        9,
        8,
        9,
        14,
        5,
        6,
        8,
        6,
        5,
        12,
        9,
        15,
        5,
        11,
        6,
        8,
        13,
        12,
        5,
        12,
        13,
        14,
        11,
        8,
        5,
        6
    ], Ga = [
        8,
        9,
        9,
        11,
        13,
        15,
        15,
        5,
        7,
        7,
        8,
        11,
        14,
        14,
        12,
        6,
        9,
        13,
        15,
        7,
        12,
        8,
        9,
        11,
        7,
        7,
        12,
        7,
        6,
        15,
        13,
        11,
        9,
        7,
        15,
        11,
        8,
        6,
        6,
        14,
        12,
        13,
        5,
        14,
        13,
        13,
        7,
        5,
        15,
        5,
        8,
        11,
        14,
        14,
        6,
        14,
        6,
        9,
        12,
        9,
        12,
        5,
        15,
        8,
        8,
        5,
        12,
        9,
        12,
        5,
        14,
        6,
        8,
        13,
        6,
        5,
        15,
        13,
        11,
        11
    ], Za = rs, Ja = ns;
    function Xa(t, e, r) {
        if (!(this instanceof Xa)) return new Xa(t, e, r);
        this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(Za.toArray(e, r));
    }
    var Qa = Xa;
    Xa.prototype._init = function(t) {
        t.length > this.blockSize && (t = (new this.Hash).update(t).digest()), Ja(t.length <= this.blockSize);
        for(var e = t.length; e < this.blockSize; e++)t.push(0);
        for(e = 0; e < t.length; e++)t[e] ^= 54;
        for(this.inner = (new this.Hash).update(t), e = 0; e < t.length; e++)t[e] ^= 106;
        this.outer = (new this.Hash).update(t);
    }, Xa.prototype.update = function(t, e) {
        return this.inner.update(t, e), this;
    }, Xa.prototype.digest = function(t) {
        return this.outer.update(this.inner.digest()), this.outer.digest(t);
    }, function(t) {
        var e = t;
        e.utils = rs, e.common = ds, e.sha = ms, e.ripemd = Pa, e.hmac = Qa, e.sha1 = e.sha.sha1, e.sha256 = e.sha.sha256, e.sha224 = e.sha.sha224, e.sha384 = e.sha.sha384, e.sha512 = e.sha.sha512, e.ripemd160 = e.ripemd.ripemd160;
    }(es);
    var th = es;
    let eh = !1, rh = !1;
    const nh = {
        debug: 1,
        default: 2,
        info: 2,
        warning: 3,
        error: 4,
        off: 5
    };
    let ih = nh.default, oh = null;
    const sh = function() {
        try {
            const t = [];
            if ([
                "NFD",
                "NFC",
                "NFKD",
                "NFKC"
            ].forEach((e)=>{
                try {
                    if ("test" !== "test".normalize(e)) throw new Error("bad normalize");
                } catch (r) {
                    t.push(e);
                }
            }), t.length) throw new Error("missing " + t.join(", "));
            if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation");
        } catch (t) {
            return t.message;
        }
        return null;
    }();
    var ah, hh;
    !function(t) {
        t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR", t.OFF = "OFF";
    }(ah || (ah = {})), function(t) {
        t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", t.NETWORK_ERROR = "NETWORK_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.TIMEOUT = "TIMEOUT", t.BUFFER_OVERRUN = "BUFFER_OVERRUN", t.NUMERIC_FAULT = "NUMERIC_FAULT", t.MISSING_NEW = "MISSING_NEW", t.INVALID_ARGUMENT = "INVALID_ARGUMENT", t.MISSING_ARGUMENT = "MISSING_ARGUMENT", t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", t.CALL_EXCEPTION = "CALL_EXCEPTION", t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", t.NONCE_EXPIRED = "NONCE_EXPIRED", t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED";
    }(hh || (hh = {}));
    const fh = "0123456789abcdef";
    class uh {
        constructor(t){
            Object.defineProperty(this, "version", {
                enumerable: !0,
                value: t,
                writable: !1
            });
        }
        _log(t, e) {
            const r = t.toLowerCase();
            null == nh[r] && this.throwArgumentError("invalid log level name", "logLevel", t), ih > nh[r] || console.log.apply(console, e);
        }
        debug(...t) {
            this._log(uh.levels.DEBUG, t);
        }
        info(...t) {
            this._log(uh.levels.INFO, t);
        }
        warn(...t) {
            this._log(uh.levels.WARNING, t);
        }
        makeError(t, e, r) {
            if (rh) return this.makeError("censored error", e, {});
            e || (e = uh.errors.UNKNOWN_ERROR), r || (r = {});
            const n = [];
            Object.keys(r).forEach((t)=>{
                const e = r[t];
                try {
                    if (e instanceof Uint8Array) {
                        let r = "";
                        for(let t = 0; t < e.length; t++)r += fh[e[t] >> 4], r += fh[15 & e[t]];
                        n.push(t + "=Uint8Array(0x" + r + ")");
                    } else n.push(t + "=" + JSON.stringify(e));
                } catch (e) {
                    n.push(t + "=" + JSON.stringify(r[t].toString()));
                }
            }), n.push(`code=${e}`), n.push(`version=${this.version}`);
            const i = t;
            let o = "";
            switch(e){
                case hh.NUMERIC_FAULT:
                    {
                        o = "NUMERIC_FAULT";
                        const e = t;
                        switch(e){
                            case "overflow":
                            case "underflow":
                            case "division-by-zero":
                                o += "-" + e;
                                break;
                            case "negative-power":
                            case "negative-width":
                                o += "-unsupported";
                                break;
                            case "unbound-bitwise-result":
                                o += "-unbound-result";
                        }
                        break;
                    }
                case hh.CALL_EXCEPTION:
                case hh.INSUFFICIENT_FUNDS:
                case hh.MISSING_NEW:
                case hh.NONCE_EXPIRED:
                case hh.REPLACEMENT_UNDERPRICED:
                case hh.TRANSACTION_REPLACED:
                case hh.UNPREDICTABLE_GAS_LIMIT:
                    o = e;
            }
            o && (t += " [ See: https://links.ethers.org/v5-errors-" + o + " ]"), n.length && (t += " (" + n.join(", ") + ")");
            const s = new Error(t);
            return s.reason = i, s.code = e, Object.keys(r).forEach(function(t) {
                s[t] = r[t];
            }), s;
        }
        throwError(t, e, r) {
            throw this.makeError(t, e, r);
        }
        throwArgumentError(t, e, r) {
            return this.throwError(t, uh.errors.INVALID_ARGUMENT, {
                argument: e,
                value: r
            });
        }
        assert(t, e, r, n) {
            t || this.throwError(e, r, n);
        }
        assertArgument(t, e, r, n) {
            t || this.throwArgumentError(e, r, n);
        }
        checkNormalize(t) {
            sh && this.throwError("platform missing String.prototype.normalize", uh.errors.UNSUPPORTED_OPERATION, {
                operation: "String.prototype.normalize",
                form: sh
            });
        }
        checkSafeUint53(t, e) {
            "number" == typeof t && (null == e && (e = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(e, uh.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t
            }), t % 1 && this.throwError(e, uh.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t
            }));
        }
        checkArgumentCount(t, e, r) {
            r = r ? ": " + r : "", t < e && this.throwError("missing argument" + r, uh.errors.MISSING_ARGUMENT, {
                count: t,
                expectedCount: e
            }), t > e && this.throwError("too many arguments" + r, uh.errors.UNEXPECTED_ARGUMENT, {
                count: t,
                expectedCount: e
            });
        }
        checkNew(t, e) {
            t !== Object && null != t || this.throwError("missing new", uh.errors.MISSING_NEW, {
                name: e.name
            });
        }
        checkAbstract(t, e) {
            t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", uh.errors.UNSUPPORTED_OPERATION, {
                name: t.name,
                operation: "new"
            }) : t !== Object && null != t || this.throwError("missing new", uh.errors.MISSING_NEW, {
                name: e.name
            });
        }
        static globalLogger() {
            return oh || (oh = new uh("logger/5.6.0")), oh;
        }
        static setCensorship(t, e) {
            if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", uh.errors.UNSUPPORTED_OPERATION, {
                operation: "setCensorship"
            }), eh) {
                if (!t) return;
                this.globalLogger().throwError("error censorship permanent", uh.errors.UNSUPPORTED_OPERATION, {
                    operation: "setCensorship"
                });
            }
            rh = !!t, eh = !!e;
        }
        static setLogLevel(t) {
            const e = nh[t.toLowerCase()];
            null != e ? ih = e : uh.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
            return new uh(t);
        }
    }
    uh.errors = hh, uh.levels = ah;
    const ch = new uh("bytes/5.6.0");
    function dh(t) {
        return t.slice || (t.slice = function() {
            const e = Array.prototype.slice.call(arguments);
            return dh(new Uint8Array(Array.prototype.slice.apply(t, e)));
        }), t;
    }
    function lh(t) {
        return "number" == typeof t && t == t && t % 1 == 0;
    }
    function ph(t, e) {
        if (e || (e = {}), "number" == typeof t) {
            ch.checkSafeUint53(t, "invalid arrayify value");
            const e = [];
            for(; t;)e.unshift(255 & t), t = parseInt(String(t / 256));
            return 0 === e.length && e.push(0), dh(new Uint8Array(e));
        }
        if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), function(t) {
            return !!t.toHexString;
        }(t) && (t = t.toHexString()), function(t, e) {
            if ("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) return !1;
            if (e && t.length !== 2 + 2 * e) return !1;
            return !0;
        }(t)) {
            let r = t.substring(2);
            r.length % 2 && ("left" === e.hexPad ? r = "0x0" + r.substring(2) : "right" === e.hexPad ? r += "0" : ch.throwArgumentError("hex data is odd-length", "value", t));
            const n = [];
            for(let t = 0; t < r.length; t += 2)n.push(parseInt(r.substring(t, t + 2), 16));
            return dh(new Uint8Array(n));
        }
        return function(t) {
            if (null == t) return !1;
            if (t.constructor === Uint8Array) return !0;
            if ("string" == typeof t) return !1;
            if (!lh(t.length) || t.length < 0) return !1;
            for(let e = 0; e < t.length; e++){
                const r = t[e];
                if (!lh(r) || r < 0 || r >= 256) return !1;
            }
            return !0;
        }(t) ? dh(new Uint8Array(t)) : ch.throwArgumentError("invalid arrayify value", "value", t);
    }
    function bh(t) {
        return "0x" + th.sha256().update(ph(t)).digest("hex");
    }
    new uh("sha2/5.6.0");
    const mh = new Map;
    class yh extends class {
        constructor(t){
            Object.assign(this, t);
        }
        encode() {
            return at.from(ge(mh, this));
        }
        static decode(t) {
            return ye(mh, this, t);
        }
        static decodeUnchecked(t) {
            return me(mh, this, t);
        }
    } {
        constructor(t){
            if (super({}), this._bn = void 0, function(t) {
                return void 0 !== t._bn;
            }(t)) this._bn = t._bn;
            else {
                if ("string" == typeof t) {
                    const e = ne.decode(t);
                    if (32 != e.length) throw new Error("Invalid public key input");
                    this._bn = new Qt(e);
                } else this._bn = new Qt(t);
                if (this._bn.byteLength() > 32) throw new Error("Invalid public key input");
            }
        }
        equals(t) {
            return this._bn.eq(t._bn);
        }
        toBase58() {
            return ne.encode(this.toBytes());
        }
        toJSON() {
            return this.toBase58();
        }
        toBytes() {
            return this.toBuffer();
        }
        toBuffer() {
            const t = this._bn.toArrayLike(at);
            if (32 === t.length) return t;
            const e = at.alloc(32);
            return t.copy(e, 32 - t.length), e;
        }
        toString() {
            return this.toBase58();
        }
        static async createWithSeed(t, e, r) {
            const n = at.concat([
                t.toBuffer(),
                at.from(e),
                r.toBuffer()
            ]), i = bh(new Uint8Array(n)).slice(2);
            return new yh(at.from(i, "hex"));
        }
        static async createProgramAddress(t, e) {
            let r = at.alloc(0);
            t.forEach(function(t) {
                if (t.length > 32) throw new TypeError("Max seed length exceeded");
                r = at.concat([
                    r,
                    Qo(t)
                ]);
            }), r = at.concat([
                r,
                e.toBuffer(),
                at.from("ProgramDerivedAddress")
            ]);
            let n = bh(new Uint8Array(r)).slice(2), i = new Qt(n, 16).toArray(void 0, 32);
            if (vh(i)) throw new Error("Invalid seeds, address must fall off the curve");
            return new yh(i);
        }
        static async findProgramAddress(t, e) {
            let r, n = 255;
            for(; 0 != n;){
                try {
                    const i = t.concat(at.from([
                        n
                    ]));
                    r = await this.createProgramAddress(i, e);
                } catch (t) {
                    if (t instanceof TypeError) throw t;
                    n--;
                    continue;
                }
                return [
                    r,
                    n
                ];
            }
            throw new Error("Unable to find a viable program address nonce");
        }
        static isOnCurve(t) {
            return 1 == vh(t);
        }
    }
    yh.default = new yh("11111111111111111111111111111111"), mh.set(yh, {
        kind: "struct",
        fields: [
            [
                "_bn",
                "u256"
            ]
        ]
    });
    let gh = Xt.lowlevel;
    function vh(t) {
        var e = [
            gh.gf(),
            gh.gf(),
            gh.gf(),
            gh.gf()
        ], r = gh.gf(), n = gh.gf(), i = gh.gf(), o = gh.gf(), s = gh.gf(), a = gh.gf(), h = gh.gf();
        return gh.set25519(e[2], wh), gh.unpack25519(e[1], t), gh.S(i, e[1]), gh.M(o, i, gh.D), gh.Z(i, i, e[2]), gh.A(o, e[2], o), gh.S(s, o), gh.S(a, s), gh.M(h, a, s), gh.M(r, h, i), gh.M(r, r, o), gh.pow2523(r, r), gh.M(r, r, i), gh.M(r, r, o), gh.M(r, r, o), gh.M(e[0], r, o), gh.S(n, e[0]), gh.M(n, n, o), _h(n, i) && gh.M(e[0], e[0], Mh), gh.S(n, e[0]), gh.M(n, n, o), _h(n, i) ? 0 : 1;
    }
    let wh = gh.gf([
        1
    ]), Mh = gh.gf([
        41136,
        18958,
        6951,
        50414,
        58488,
        44335,
        6150,
        12099,
        55207,
        15867,
        153,
        11085,
        57099,
        20417,
        9344,
        11139
    ]);
    function _h(t, e) {
        var r = new Uint8Array(32), n = new Uint8Array(32);
        return gh.pack25519(r, t), gh.pack25519(n, e), gh.crypto_verify_32(r, 0, n, 0);
    }
    new yh("BPFLoader1111111111111111111111111111111111");
    const Ah = (t = "publicKey")=>Ee(32, t), Sh = (t = "string")=>{
        const e = Ie([
            Me("length"),
            Me("lengthPadding"),
            Ee(Se(Me(), -8), "chars")
        ], t), r = e.decode.bind(e), n = e.encode.bind(e), i = e;
        return i.decode = (t, e)=>r(t, e).chars.toString(), i.encode = (t, e, r)=>{
            const i = {
                chars: at.from(t, "utf8")
            };
            return n(i, e, r);
        }, i.alloc = (t)=>Me().span + Me().span + at.from(t, "utf8").length, i;
    };
    function Eh(t) {
        let e = 0, r = 0;
        for(;;){
            let n = t.shift();
            if (e |= (127 & n) << 7 * r, r += 1, 0 == (128 & n)) break;
        }
        return e;
    }
    function xh(t, e) {
        let r = e;
        for(;;){
            let e = 127 & r;
            if (r >>= 7, 0 == r) {
                t.push(e);
                break;
            }
            e |= 128, t.push(e);
        }
    }
    class Ih {
        constructor(t){
            this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = new Map, this.header = t.header, this.accountKeys = t.accountKeys.map((t)=>new yh(t)), this.recentBlockhash = t.recentBlockhash, this.instructions = t.instructions, this.instructions.forEach((t)=>this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex]));
        }
        isAccountSigner(t) {
            return t < this.header.numRequiredSignatures;
        }
        isAccountWritable(t) {
            return t < this.header.numRequiredSignatures - this.header.numReadonlySignedAccounts || t >= this.header.numRequiredSignatures && t < this.accountKeys.length - this.header.numReadonlyUnsignedAccounts;
        }
        isProgramId(t) {
            return this.indexToProgramIds.has(t);
        }
        programIds() {
            return [
                ...this.indexToProgramIds.values()
            ];
        }
        nonProgramIds() {
            return this.accountKeys.filter((t, e)=>!this.isProgramId(e));
        }
        serialize() {
            const t = this.accountKeys.length;
            let e = [];
            xh(e, t);
            const r = this.instructions.map((t)=>{
                const { accounts: e , programIdIndex: r  } = t, n = Array.from(ne.decode(t.data));
                let i = [];
                xh(i, e.length);
                let o = [];
                return xh(o, n.length), {
                    programIdIndex: r,
                    keyIndicesCount: at.from(i),
                    keyIndices: e,
                    dataLength: at.from(o),
                    data: n
                };
            });
            let n = [];
            xh(n, r.length);
            let i = at.alloc(Bh);
            at.from(n).copy(i);
            let o = n.length;
            r.forEach((t)=>{
                const e = Ie([
                    Ae("programIdIndex"),
                    Ee(t.keyIndicesCount.length, "keyIndicesCount"),
                    xe(Ae("keyIndex"), t.keyIndices.length, "keyIndices"),
                    Ee(t.dataLength.length, "dataLength"),
                    xe(Ae("userdatum"), t.data.length, "data")
                ]).encode(t, i, o);
                o += e;
            }), i = i.slice(0, o);
            const s = Ie([
                Ee(1, "numRequiredSignatures"),
                Ee(1, "numReadonlySignedAccounts"),
                Ee(1, "numReadonlyUnsignedAccounts"),
                Ee(e.length, "keyCount"),
                xe(Ah("key"), t, "keys"),
                Ah("recentBlockhash")
            ]), a = {
                numRequiredSignatures: at.from([
                    this.header.numRequiredSignatures
                ]),
                numReadonlySignedAccounts: at.from([
                    this.header.numReadonlySignedAccounts
                ]),
                numReadonlyUnsignedAccounts: at.from([
                    this.header.numReadonlyUnsignedAccounts
                ]),
                keyCount: at.from(e),
                keys: this.accountKeys.map((t)=>Qo(t.toBytes())),
                recentBlockhash: ne.decode(this.recentBlockhash)
            };
            let h = at.alloc(2048);
            const f = s.encode(a, h);
            return i.copy(h, f), h.slice(0, f + i.length);
        }
        static from(t) {
            let e = [
                ...t
            ];
            const r = e.shift(), n = e.shift(), i = e.shift(), o = Eh(e);
            let s = [];
            for(let t = 0; t < o; t++){
                const t = e.slice(0, 32);
                e = e.slice(32), s.push(ne.encode(at.from(t)));
            }
            const a = e.slice(0, 32);
            e = e.slice(32);
            const h = Eh(e);
            let f = [];
            for(let t = 0; t < h; t++){
                const t = e.shift(), r = Eh(e), n = e.slice(0, r);
                e = e.slice(r);
                const i = Eh(e), o = e.slice(0, i), s = ne.encode(at.from(o));
                e = e.slice(i), f.push({
                    programIdIndex: t,
                    accounts: n,
                    data: s
                });
            }
            const u = {
                header: {
                    numRequiredSignatures: r,
                    numReadonlySignedAccounts: n,
                    numReadonlyUnsignedAccounts: i
                },
                recentBlockhash: ne.encode(at.from(a)),
                accountKeys: s,
                instructions: f
            };
            return new Ih(u);
        }
    }
    function kh(t, e) {
        if (!t) throw new Error(e || "Assertion failed");
    }
    const Rh = at.alloc(64).fill(0), Bh = 1232;
    class Th {
        constructor(t){
            this.keys = void 0, this.programId = void 0, this.data = at.alloc(0), this.programId = t.programId, this.keys = t.keys, t.data && (this.data = t.data);
        }
    }
    class Uh {
        get signature() {
            return this.signatures.length > 0 ? this.signatures[0].signature : null;
        }
        constructor(t){
            this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.nonceInfo = void 0, t && Object.assign(this, t);
        }
        add(...t) {
            if (0 === t.length) throw new Error("No instructions");
            return t.forEach((t)=>{
                "instructions" in t ? this.instructions = this.instructions.concat(t.instructions) : "data" in t && "programId" in t && "keys" in t ? this.instructions.push(t) : this.instructions.push(new Th(t));
            }), this;
        }
        compileMessage() {
            const { nonceInfo: t  } = this;
            t && this.instructions[0] != t.nonceInstruction && (this.recentBlockhash = t.nonce, this.instructions.unshift(t.nonceInstruction));
            const { recentBlockhash: e  } = this;
            if (!e) throw new Error("Transaction recentBlockhash required");
            let r;
            if (this.instructions.length < 1 && console.warn("No instructions provided"), this.feePayer) r = this.feePayer;
            else {
                if (!(this.signatures.length > 0 && this.signatures[0].publicKey)) throw new Error("Transaction fee payer required");
                r = this.signatures[0].publicKey;
            }
            for(let t = 0; t < this.instructions.length; t++)if (void 0 === this.instructions[t].programId) throw new Error(`Transaction instruction index ${t} has undefined program id`);
            const n = [], i = [];
            this.instructions.forEach((t)=>{
                t.keys.forEach((t)=>{
                    i.push({
                        ...t
                    });
                });
                const e = t.programId.toString();
                n.includes(e) || n.push(e);
            }), n.forEach((t)=>{
                i.push({
                    pubkey: new yh(t),
                    isSigner: !1,
                    isWritable: !1
                });
            }), i.sort(function(t, e) {
                const r = t.pubkey.toBase58().localeCompare(e.pubkey.toBase58()), n = t.isSigner === e.isSigner ? 0 : t.isSigner ? -1 : 1, i = t.isWritable === e.isWritable ? r : t.isWritable ? -1 : 1;
                return n || i;
            });
            const o = [];
            i.forEach((t)=>{
                const e = t.pubkey.toString(), r = o.findIndex((t)=>t.pubkey.toString() === e);
                r > -1 ? o[r].isWritable = o[r].isWritable || t.isWritable : o.push(t);
            });
            const s = o.findIndex((t)=>t.pubkey.equals(r));
            if (s > -1) {
                const [t] = o.splice(s, 1);
                t.isSigner = !0, t.isWritable = !0, o.unshift(t);
            } else o.unshift({
                pubkey: r,
                isSigner: !0,
                isWritable: !0
            });
            for (const t of this.signatures){
                const e = o.findIndex((e)=>e.pubkey.equals(t.publicKey));
                if (!(e > -1)) throw new Error(`unknown signer: ${t.publicKey.toString()}`);
                o[e].isSigner || (o[e].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
            }
            let a = 0, h = 0, f = 0;
            const u = [], c = [];
            o.forEach(({ pubkey: t , isSigner: e , isWritable: r  })=>{
                e ? (u.push(t.toString()), a += 1, r || (h += 1)) : (c.push(t.toString()), r || (f += 1));
            });
            const d = u.concat(c), l = this.instructions.map((t)=>{
                const { data: e , programId: r  } = t;
                return {
                    programIdIndex: d.indexOf(r.toString()),
                    accounts: t.keys.map((t)=>d.indexOf(t.pubkey.toString())),
                    data: ne.encode(e)
                };
            });
            return l.forEach((t)=>{
                kh(t.programIdIndex >= 0), t.accounts.forEach((t)=>kh(t >= 0));
            }), new Ih({
                header: {
                    numRequiredSignatures: a,
                    numReadonlySignedAccounts: h,
                    numReadonlyUnsignedAccounts: f
                },
                accountKeys: d,
                recentBlockhash: e,
                instructions: l
            });
        }
        _compile() {
            const t = this.compileMessage(), e = t.accountKeys.slice(0, t.header.numRequiredSignatures);
            if (this.signatures.length === e.length) {
                if (this.signatures.every((t, r)=>e[r].equals(t.publicKey))) return t;
            }
            return this.signatures = e.map((t)=>({
                    signature: null,
                    publicKey: t
                })), t;
        }
        serializeMessage() {
            return this._compile().serialize();
        }
        async getEstimatedFee(t) {
            return (await t.getFeeForMessage(this.compileMessage())).value;
        }
        setSigners(...t) {
            if (0 === t.length) throw new Error("No signers");
            const e = new Set;
            this.signatures = t.filter((t)=>{
                const r = t.toString();
                return !e.has(r) && (e.add(r), !0);
            }).map((t)=>({
                    signature: null,
                    publicKey: t
                }));
        }
        sign(...t) {
            if (0 === t.length) throw new Error("No signers");
            const e = new Set, r = [];
            for (const n of t){
                const t = n.publicKey.toString();
                e.has(t) || (e.add(t), r.push(n));
            }
            this.signatures = r.map((t)=>({
                    signature: null,
                    publicKey: t.publicKey
                }));
            const n = this._compile();
            this._partialSign(n, ...r), this._verifySignatures(n.serialize(), !0);
        }
        partialSign(...t) {
            if (0 === t.length) throw new Error("No signers");
            const e = new Set, r = [];
            for (const n of t){
                const t = n.publicKey.toString();
                e.has(t) || (e.add(t), r.push(n));
            }
            const n = this._compile();
            this._partialSign(n, ...r);
        }
        _partialSign(t, ...e) {
            const r = t.serialize();
            e.forEach((t)=>{
                const e = Xt.sign.detached(r, t.secretKey);
                this._addSignature(t.publicKey, Qo(e));
            });
        }
        addSignature(t, e) {
            this._compile(), this._addSignature(t, e);
        }
        _addSignature(t, e) {
            kh(64 === e.length);
            const r = this.signatures.findIndex((e)=>t.equals(e.publicKey));
            if (r < 0) throw new Error(`unknown signer: ${t.toString()}`);
            this.signatures[r].signature = at.from(e);
        }
        verifySignatures() {
            return this._verifySignatures(this.serializeMessage(), !0);
        }
        _verifySignatures(t, e) {
            for (const { signature: r , publicKey: n  } of this.signatures)if (null === r) {
                if (e) return !1;
            } else if (!Xt.sign.detached.verify(t, r, n.toBuffer())) return !1;
            return !0;
        }
        serialize(t) {
            const { requireAllSignatures: e , verifySignatures: r  } = Object.assign({
                requireAllSignatures: !0,
                verifySignatures: !0
            }, t), n = this.serializeMessage();
            if (r && !this._verifySignatures(n, e)) throw new Error("Signature verification failed");
            return this._serialize(n);
        }
        _serialize(t) {
            const { signatures: e  } = this, r = [];
            xh(r, e.length);
            const n = r.length + 64 * e.length + t.length, i = at.alloc(n);
            return kh(e.length < 256), at.from(r).copy(i, 0), e.forEach(({ signature: t  }, e)=>{
                null !== t && (kh(64 === t.length, "signature has invalid length"), at.from(t).copy(i, r.length + 64 * e));
            }), t.copy(i, r.length + 64 * e.length), kh(i.length <= Bh, `Transaction too large: ${i.length} > ${Bh}`), i;
        }
        get keys() {
            return kh(1 === this.instructions.length), this.instructions[0].keys.map((t)=>t.pubkey);
        }
        get programId() {
            return kh(1 === this.instructions.length), this.instructions[0].programId;
        }
        get data() {
            return kh(1 === this.instructions.length), this.instructions[0].data;
        }
        static from(t) {
            let e = [
                ...t
            ];
            const r = Eh(e);
            let n = [];
            for(let t = 0; t < r; t++){
                const t = e.slice(0, 64);
                e = e.slice(64), n.push(ne.encode(at.from(t)));
            }
            return Uh.populate(Ih.from(e), n);
        }
        static populate(t, e = []) {
            const r = new Uh;
            return r.recentBlockhash = t.recentBlockhash, t.header.numRequiredSignatures > 0 && (r.feePayer = t.accountKeys[0]), e.forEach((e, n)=>{
                const i = {
                    signature: e == ne.encode(Rh) ? null : ne.decode(e),
                    publicKey: t.accountKeys[n]
                };
                r.signatures.push(i);
            }), t.instructions.forEach((e)=>{
                const n = e.accounts.map((e)=>{
                    const n = t.accountKeys[e];
                    return {
                        pubkey: n,
                        isSigner: r.signatures.some((t)=>t.publicKey.toString() === n.toString()) || t.isAccountSigner(e),
                        isWritable: t.isAccountWritable(e)
                    };
                });
                r.instructions.push(new Th({
                    keys: n,
                    programId: t.accountKeys[e.programIdIndex],
                    data: ne.decode(e.data)
                }));
            }), r;
        }
    }
    new yh("SysvarC1ock11111111111111111111111111111111"), new yh("SysvarEpochSchedu1e111111111111111111111111"), new yh("Sysvar1nstructions1111111111111111111111111"), new yh("SysvarRecentB1ockHashes11111111111111111111"), new yh("SysvarRent111111111111111111111111111111111"), new yh("SysvarRewards111111111111111111111111111111"), new yh("SysvarS1otHashes111111111111111111111111111"), new yh("SysvarS1otHistory11111111111111111111111111"), new yh("SysvarStakeHistory1111111111111111111111111");
    const Oh = we("lamportsPerSignature");
    Ie([
        Me("version"),
        Me("state"),
        Ah("authorizedPubkey"),
        Ah("nonce"),
        Ie([
            Oh
        ], "feeCalculator")
    ]).span, Object.freeze({
        Create: {
            index: 0,
            layout: Ie([
                Me("instruction"),
                ke("lamports"),
                ke("space"),
                Ah("programId")
            ])
        },
        Assign: {
            index: 1,
            layout: Ie([
                Me("instruction"),
                Ah("programId")
            ])
        },
        Transfer: {
            index: 2,
            layout: Ie([
                Me("instruction"),
                ke("lamports")
            ])
        },
        CreateWithSeed: {
            index: 3,
            layout: Ie([
                Me("instruction"),
                Ah("base"),
                Sh("seed"),
                ke("lamports"),
                ke("space"),
                Ah("programId")
            ])
        },
        AdvanceNonceAccount: {
            index: 4,
            layout: Ie([
                Me("instruction")
            ])
        },
        WithdrawNonceAccount: {
            index: 5,
            layout: Ie([
                Me("instruction"),
                ke("lamports")
            ])
        },
        InitializeNonceAccount: {
            index: 6,
            layout: Ie([
                Me("instruction"),
                Ah("authorized")
            ])
        },
        AuthorizeNonceAccount: {
            index: 7,
            layout: Ie([
                Me("instruction"),
                Ah("authorized")
            ])
        },
        Allocate: {
            index: 8,
            layout: Ie([
                Me("instruction"),
                ke("space")
            ])
        },
        AllocateWithSeed: {
            index: 9,
            layout: Ie([
                Me("instruction"),
                Ah("base"),
                Sh("seed"),
                ke("space"),
                Ah("programId")
            ])
        },
        AssignWithSeed: {
            index: 10,
            layout: Ie([
                Me("instruction"),
                Ah("base"),
                Sh("seed"),
                Ah("programId")
            ])
        },
        TransferWithSeed: {
            index: 11,
            layout: Ie([
                Me("instruction"),
                ke("lamports"),
                Sh("seed"),
                Ah("programId")
            ])
        }
    }), new yh("11111111111111111111111111111111"), new yh("BPFLoader2111111111111111111111111111111111");
    var Ph = {
        exports: {}
    };
    !function(t, e) {
        var r = "undefined" != typeof self ? self : ts, n = function() {
            function t() {
                this.fetch = !1, this.DOMException = r.DOMException;
            }
            return t.prototype = r, new t;
        }();
        !function(t) {
            !function(e) {
                var r = "URLSearchParams" in t, n = "Symbol" in t && "iterator" in Symbol, i = "FileReader" in t && "Blob" in t && function() {
                    try {
                        return new Blob, !0;
                    } catch (t) {
                        return !1;
                    }
                }(), o = "FormData" in t, s = "ArrayBuffer" in t;
                if (s) var a = [
                    "[object Int8Array]",
                    "[object Uint8Array]",
                    "[object Uint8ClampedArray]",
                    "[object Int16Array]",
                    "[object Uint16Array]",
                    "[object Int32Array]",
                    "[object Uint32Array]",
                    "[object Float32Array]",
                    "[object Float64Array]"
                ], h = ArrayBuffer.isView || function(t) {
                    return t && a.indexOf(Object.prototype.toString.call(t)) > -1;
                };
                function f(t) {
                    if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
                    return t.toLowerCase();
                }
                function u(t) {
                    return "string" != typeof t && (t = String(t)), t;
                }
                function c(t) {
                    var e = {
                        next: function() {
                            var e = t.shift();
                            return {
                                done: void 0 === e,
                                value: e
                            };
                        }
                    };
                    return n && (e[Symbol.iterator] = function() {
                        return e;
                    }), e;
                }
                function d(t) {
                    this.map = {}, t instanceof d ? t.forEach(function(t, e) {
                        this.append(e, t);
                    }, this) : Array.isArray(t) ? t.forEach(function(t) {
                        this.append(t[0], t[1]);
                    }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                        this.append(e, t[e]);
                    }, this);
                }
                function l(t) {
                    if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    t.bodyUsed = !0;
                }
                function p(t) {
                    return new Promise(function(e, r) {
                        t.onload = function() {
                            e(t.result);
                        }, t.onerror = function() {
                            r(t.error);
                        };
                    });
                }
                function b(t) {
                    var e = new FileReader, r = p(e);
                    return e.readAsArrayBuffer(t), r;
                }
                function m(t) {
                    if (t.slice) return t.slice(0);
                    var e = new Uint8Array(t.byteLength);
                    return e.set(new Uint8Array(t)), e.buffer;
                }
                function y() {
                    return this.bodyUsed = !1, this._initBody = function(t) {
                        var e;
                        this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : i && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : o && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : r && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : s && i && (e = t) && DataView.prototype.isPrototypeOf(e) ? (this._bodyArrayBuffer = m(t.buffer), this._bodyInit = new Blob([
                            this._bodyArrayBuffer
                        ])) : s && (ArrayBuffer.prototype.isPrototypeOf(t) || h(t)) ? this._bodyArrayBuffer = m(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
                    }, i && (this.blob = function() {
                        var t = l(this);
                        if (t) return t;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([
                            this._bodyArrayBuffer
                        ]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([
                            this._bodyText
                        ]));
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? l(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(b);
                    }), this.text = function() {
                        var t, e, r, n = l(this);
                        if (n) return n;
                        if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, r = p(e), e.readAsText(t), r;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                            for(var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++)r[n] = String.fromCharCode(e[n]);
                            return r.join("");
                        }(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText);
                    }, o && (this.formData = function() {
                        return this.text().then(w);
                    }), this.json = function() {
                        return this.text().then(JSON.parse);
                    }, this;
                }
                d.prototype.append = function(t, e) {
                    t = f(t), e = u(e);
                    var r = this.map[t];
                    this.map[t] = r ? r + ", " + e : e;
                }, d.prototype.delete = function(t) {
                    delete this.map[f(t)];
                }, d.prototype.get = function(t) {
                    return t = f(t), this.has(t) ? this.map[t] : null;
                }, d.prototype.has = function(t) {
                    return this.map.hasOwnProperty(f(t));
                }, d.prototype.set = function(t, e) {
                    this.map[f(t)] = u(e);
                }, d.prototype.forEach = function(t, e) {
                    for(var r in this.map)this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
                }, d.prototype.keys = function() {
                    var t = [];
                    return this.forEach(function(e, r) {
                        t.push(r);
                    }), c(t);
                }, d.prototype.values = function() {
                    var t = [];
                    return this.forEach(function(e) {
                        t.push(e);
                    }), c(t);
                }, d.prototype.entries = function() {
                    var t = [];
                    return this.forEach(function(e, r) {
                        t.push([
                            r,
                            e
                        ]);
                    }), c(t);
                }, n && (d.prototype[Symbol.iterator] = d.prototype.entries);
                var g = [
                    "DELETE",
                    "GET",
                    "HEAD",
                    "OPTIONS",
                    "POST",
                    "PUT"
                ];
                function v(t, e) {
                    var r, n, i = (e = e || {}).body;
                    if (t instanceof v) {
                        if (t.bodyUsed) throw new TypeError("Already read");
                        this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new d(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, i || null == t._bodyInit || (i = t._bodyInit, t.bodyUsed = !0);
                    } else this.url = String(t);
                    if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new d(e.headers)), this.method = (r = e.method || this.method || "GET", n = r.toUpperCase(), g.indexOf(n) > -1 ? n : r), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(i);
                }
                function w(t) {
                    var e = new FormData;
                    return t.trim().split("&").forEach(function(t) {
                        if (t) {
                            var r = t.split("="), n = r.shift().replace(/\+/g, " "), i = r.join("=").replace(/\+/g, " ");
                            e.append(decodeURIComponent(n), decodeURIComponent(i));
                        }
                    }), e;
                }
                function M(t, e) {
                    e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new d(e.headers), this.url = e.url || "", this._initBody(t);
                }
                v.prototype.clone = function() {
                    return new v(this, {
                        body: this._bodyInit
                    });
                }, y.call(v.prototype), y.call(M.prototype), M.prototype.clone = function() {
                    return new M(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new d(this.headers),
                        url: this.url
                    });
                }, M.error = function() {
                    var t = new M(null, {
                        status: 0,
                        statusText: ""
                    });
                    return t.type = "error", t;
                };
                var _ = [
                    301,
                    302,
                    303,
                    307,
                    308
                ];
                M.redirect = function(t, e) {
                    if (-1 === _.indexOf(e)) throw new RangeError("Invalid status code");
                    return new M(null, {
                        status: e,
                        headers: {
                            location: t
                        }
                    });
                }, e.DOMException = t.DOMException;
                try {
                    new e.DOMException;
                } catch (t) {
                    e.DOMException = function(t, e) {
                        this.message = t, this.name = e;
                        var r = Error(t);
                        this.stack = r.stack;
                    }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException;
                }
                function A(t, r) {
                    return new Promise(function(n, o) {
                        var s = new v(t, r);
                        if (s.signal && s.signal.aborted) return o(new e.DOMException("Aborted", "AbortError"));
                        var a = new XMLHttpRequest;
                        function h() {
                            a.abort();
                        }
                        a.onload = function() {
                            var t, e, r = {
                                status: a.status,
                                statusText: a.statusText,
                                headers: (t = a.getAllResponseHeaders() || "", e = new d, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                                    var r = t.split(":"), n = r.shift().trim();
                                    if (n) {
                                        var i = r.join(":").trim();
                                        e.append(n, i);
                                    }
                                }), e)
                            };
                            r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL");
                            var i = "response" in a ? a.response : a.responseText;
                            n(new M(i, r));
                        }, a.onerror = function() {
                            o(new TypeError("Network request failed"));
                        }, a.ontimeout = function() {
                            o(new TypeError("Network request failed"));
                        }, a.onabort = function() {
                            o(new e.DOMException("Aborted", "AbortError"));
                        }, a.open(s.method, s.url, !0), "include" === s.credentials ? a.withCredentials = !0 : "omit" === s.credentials && (a.withCredentials = !1), "responseType" in a && i && (a.responseType = "blob"), s.headers.forEach(function(t, e) {
                            a.setRequestHeader(e, t);
                        }), s.signal && (s.signal.addEventListener("abort", h), a.onreadystatechange = function() {
                            4 === a.readyState && s.signal.removeEventListener("abort", h);
                        }), a.send(void 0 === s._bodyInit ? null : s._bodyInit);
                    });
                }
                A.polyfill = !0, t.fetch || (t.fetch = A, t.Headers = d, t.Request = v, t.Response = M), e.Headers = d, e.Request = v, e.Response = M, e.fetch = A, Object.defineProperty(e, "__esModule", {
                    value: !0
                });
            }({});
        }(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var i = n;
        (e = i.fetch).default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, t.exports = e;
    }(Ph, Ph.exports);
    const Lh = Qe(Fe(yh), $e(), (t)=>new yh(t)), Nh = Ge([
        $e(),
        Ke("base64")
    ]), zh = Qe(Fe(at), Nh, (t)=>at.from(t[0], "base64"));
    function Ch(t) {
        return Je([
            Ze({
                jsonrpc: Ke("2.0"),
                id: $e(),
                result: t
            }),
            Ze({
                jsonrpc: Ke("2.0"),
                id: $e(),
                error: Ze({
                    code: Xe(),
                    message: $e(),
                    data: We(qe("any", ()=>!0))
                })
            })
        ]);
    }
    const qh = Ch(Xe());
    function jh(t) {
        return Qe(Ch(t), qh, (e)=>"error" in e ? e : {
                ...e,
                result: Ne(e.result, t)
            });
    }
    function Dh(t) {
        return jh(Ze({
            context: Ze({
                slot: Ve()
            }),
            value: t
        }));
    }
    const Fh = Ze({
        foundation: Ve(),
        foundationTerm: Ve(),
        initial: Ve(),
        taper: Ve(),
        terminal: Ve()
    });
    jh(je(Ye(Ze({
        epoch: Ve(),
        effectiveSlot: Ve(),
        amount: Ve(),
        postBalance: Ve()
    }))));
    const Kh = Ze({
        epoch: Ve(),
        slotIndex: Ve(),
        slotsInEpoch: Ve(),
        absoluteSlot: Ve(),
        blockHeight: We(Ve()),
        transactionCount: We(Ve())
    }), Yh = Ze({
        slotsPerEpoch: Ve(),
        leaderScheduleSlotOffset: Ve(),
        warmup: De(),
        firstNormalEpoch: Ve(),
        firstNormalSlot: Ve()
    }), Vh = He($e(), je(Ve())), Wh = Ye(Je([
        Ze({}),
        $e()
    ])), Hh = Ze({
        err: Wh
    }), $h = Ke("receivedSignature");
    Dh(Ze({
        err: Ye(Je([
            Ze({}),
            $e()
        ])),
        logs: Ye(je($e())),
        accounts: We(Ye(je(Ye(Ze({
            executable: De(),
            owner: $e(),
            lamports: Ve(),
            data: je($e()),
            rentEpoch: We(Ve())
        }))))),
        unitsConsumed: We(Ve())
    })), Dh(Ze({
        byIdentity: He($e(), je(Ve())),
        range: Ze({
            firstSlot: Ve(),
            lastSlot: Ve()
        })
    })), jh(Fh), jh(Kh), jh(Yh), jh(Vh), jh(Ve()), Dh(Ze({
        total: Ve(),
        circulating: Ve(),
        nonCirculating: Ve(),
        nonCirculatingAccounts: je(Lh)
    }));
    const Gh = Ze({
        amount: $e(),
        uiAmount: Ye(Ve()),
        decimals: Ve(),
        uiAmountString: We($e())
    });
    Dh(je(Ze({
        address: Lh,
        amount: $e(),
        uiAmount: Ye(Ve()),
        decimals: Ve(),
        uiAmountString: We($e())
    }))), Dh(je(Ze({
        pubkey: Lh,
        account: Ze({
            executable: De(),
            owner: Lh,
            lamports: Ve(),
            data: zh,
            rentEpoch: Ve()
        })
    })));
    const Zh = Ze({
        program: $e(),
        parsed: Xe(),
        space: Ve()
    });
    var Jh;
    Dh(je(Ze({
        pubkey: Lh,
        account: Ze({
            executable: De(),
            owner: Lh,
            lamports: Ve(),
            data: Zh,
            rentEpoch: Ve()
        })
    }))), Dh(je(Ze({
        lamports: Ve(),
        address: Lh
    }))), Qe(Je([
        Fe(at),
        Zh
    ]), Je([
        Nh,
        Zh
    ]), (t)=>Array.isArray(t) ? Ne(t, zh) : t), Ze({
        state: Je([
            Ke("active"),
            Ke("inactive"),
            Ke("activating"),
            Ke("deactivating")
        ]),
        active: Ve(),
        inactive: Ve()
    }), jh(je(Ze({
        signature: $e(),
        slot: Ve(),
        err: Wh,
        memo: Ye($e()),
        blockTime: We(Ye(Ve()))
    }))), jh(je(Ze({
        signature: $e(),
        slot: Ve(),
        err: Wh,
        memo: Ye($e()),
        blockTime: We(Ye(Ve()))
    }))), Je([
        Ze({
            type: Je([
                Ke("firstShredReceived"),
                Ke("completed"),
                Ke("optimisticConfirmation"),
                Ke("root")
            ]),
            slot: Ve(),
            timestamp: Ve()
        }),
        Ze({
            type: Ke("createdBank"),
            parent: Ve(),
            slot: Ve(),
            timestamp: Ve()
        }),
        Ze({
            type: Ke("frozen"),
            slot: Ve(),
            timestamp: Ve(),
            stats: Ze({
                numTransactionEntries: Ve(),
                numSuccessfulTransactions: Ve(),
                numFailedTransactions: Ve(),
                maxTransactionsPerEntry: Ve()
            })
        }),
        Ze({
            type: Ke("dead"),
            slot: Ve(),
            timestamp: Ve(),
            err: $e()
        })
    ]), Ze({
        subscription: Ve(),
        result: (Jh = Je([
            Hh,
            $h
        ]), Ze({
            context: Ze({
                slot: Ve()
            }),
            value: Jh
        }))
    });
    const Xh = Ze({
        votePubkey: $e(),
        nodePubkey: $e(),
        activatedStake: Ve(),
        epochVoteAccount: De(),
        epochCredits: je(Ge([
            Ve(),
            Ve(),
            Ve()
        ])),
        commission: Ve(),
        lastVote: Ve(),
        rootSlot: Ye(Ve())
    });
    jh(Ze({
        current: je(Xh),
        delinquent: je(Xh)
    }));
    const Qh = Je([
        Ke("processed"),
        Ke("confirmed"),
        Ke("finalized")
    ]), tf = Ze({
        slot: Ve(),
        confirmations: Ye(Ve()),
        err: Wh,
        confirmationStatus: We(Qh)
    });
    Dh(je(Ye(tf))), jh(Ve());
    const ef = Ze({
        signatures: je($e()),
        message: Ze({
            accountKeys: je($e()),
            header: Ze({
                numRequiredSignatures: Ve(),
                numReadonlySignedAccounts: Ve(),
                numReadonlyUnsignedAccounts: Ve()
            }),
            instructions: je(Ze({
                accounts: je(Ve()),
                data: $e(),
                programIdIndex: Ve()
            })),
            recentBlockhash: $e()
        })
    }), rf = Ze({
        parsed: Xe(),
        program: $e(),
        programId: Lh
    }), nf = Ze({
        accounts: je(Lh),
        data: $e(),
        programId: Lh
    }), of = Qe(Je([
        nf,
        rf
    ]), Je([
        Ze({
            parsed: Xe(),
            program: $e(),
            programId: $e()
        }),
        Ze({
            accounts: je($e()),
            data: $e(),
            programId: $e()
        })
    ]), (t)=>Ne(t, "accounts" in t ? nf : rf)), sf = Ze({
        signatures: je($e()),
        message: Ze({
            accountKeys: je(Ze({
                pubkey: Lh,
                signer: De(),
                writable: De()
            })),
            instructions: je(of),
            recentBlockhash: $e()
        })
    }), af = Ze({
        accountIndex: Ve(),
        mint: $e(),
        owner: We($e()),
        uiTokenAmount: Gh
    }), hf = Ze({
        err: Wh,
        fee: Ve(),
        innerInstructions: We(Ye(je(Ze({
            index: Ve(),
            instructions: je(Ze({
                accounts: je(Ve()),
                data: $e(),
                programIdIndex: Ve()
            }))
        })))),
        preBalances: je(Ve()),
        postBalances: je(Ve()),
        logMessages: We(Ye(je($e()))),
        preTokenBalances: We(Ye(je(af))),
        postTokenBalances: We(Ye(je(af)))
    }), ff = Ze({
        err: Wh,
        fee: Ve(),
        innerInstructions: We(Ye(je(Ze({
            index: Ve(),
            instructions: je(of)
        })))),
        preBalances: je(Ve()),
        postBalances: je(Ve()),
        logMessages: We(Ye(je($e()))),
        preTokenBalances: We(Ye(je(af))),
        postTokenBalances: We(Ye(je(af)))
    });
    jh(Ye(Ze({
        blockhash: $e(),
        previousBlockhash: $e(),
        parentSlot: Ve(),
        transactions: je(Ze({
            transaction: ef,
            meta: Ye(hf)
        })),
        rewards: We(je(Ze({
            pubkey: $e(),
            lamports: Ve(),
            postBalance: Ye(Ve()),
            rewardType: Ye($e())
        }))),
        blockTime: Ye(Ve()),
        blockHeight: Ye(Ve())
    }))), jh(Ye(Ze({
        blockhash: $e(),
        previousBlockhash: $e(),
        parentSlot: Ve(),
        transactions: je(Ze({
            transaction: ef,
            meta: Ye(hf)
        })),
        rewards: We(je(Ze({
            pubkey: $e(),
            lamports: Ve(),
            postBalance: Ye(Ve()),
            rewardType: Ye($e())
        }))),
        blockTime: Ye(Ve())
    }))), jh(Ye(Ze({
        blockhash: $e(),
        previousBlockhash: $e(),
        parentSlot: Ve(),
        signatures: je($e()),
        blockTime: Ye(Ve())
    }))), jh(Ye(Ze({
        slot: Ve(),
        meta: hf,
        blockTime: We(Ye(Ve())),
        transaction: ef
    }))), jh(Ye(Ze({
        slot: Ve(),
        transaction: sf,
        meta: Ye(ff),
        blockTime: We(Ye(Ve()))
    }))), Dh(Ze({
        blockhash: $e(),
        feeCalculator: Ze({
            lamportsPerSignature: Ve()
        })
    })), Dh(Ze({
        blockhash: $e(),
        lastValidBlockHeight: Ve()
    }));
    jh(je(Ze({
        slot: Ve(),
        numTransactions: Ve(),
        numSlots: Ve(),
        samplePeriodSecs: Ve()
    }))), Dh(Ye(Ze({
        feeCalculator: Ze({
            lamportsPerSignature: Ve()
        })
    }))), jh($e()), jh($e()), Ie([
        Ae("numSignatures"),
        Ae("padding"),
        _e("signatureOffset"),
        _e("signatureInstructionIndex"),
        _e("publicKeyOffset"),
        _e("publicKeyInstructionIndex"),
        _e("messageDataOffset"),
        _e("messageDataSize"),
        _e("messageInstructionIndex")
    ]), new yh("Ed25519SigVerify111111111111111111111111111"), new yh("StakeConfig11111111111111111111111111111111"), Object.freeze({
        Initialize: {
            index: 0,
            layout: Ie([
                Me("instruction"),
                ((t = "authorized")=>Ie([
                        Ah("staker"),
                        Ah("withdrawer")
                    ], t))(),
                ((t = "lockup")=>Ie([
                        ke("unixTimestamp"),
                        ke("epoch"),
                        Ah("custodian")
                    ], t))()
            ])
        },
        Authorize: {
            index: 1,
            layout: Ie([
                Me("instruction"),
                Ah("newAuthorized"),
                Me("stakeAuthorizationType")
            ])
        },
        Delegate: {
            index: 2,
            layout: Ie([
                Me("instruction")
            ])
        },
        Split: {
            index: 3,
            layout: Ie([
                Me("instruction"),
                ke("lamports")
            ])
        },
        Withdraw: {
            index: 4,
            layout: Ie([
                Me("instruction"),
                ke("lamports")
            ])
        },
        Deactivate: {
            index: 5,
            layout: Ie([
                Me("instruction")
            ])
        },
        Merge: {
            index: 7,
            layout: Ie([
                Me("instruction")
            ])
        },
        AuthorizeWithSeed: {
            index: 8,
            layout: Ie([
                Me("instruction"),
                Ah("newAuthorized"),
                Me("stakeAuthorizationType"),
                Sh("authoritySeed"),
                Ah("authorityOwner")
            ])
        }
    }), Object.freeze({
        Staker: {
            index: 0
        },
        Withdrawer: {
            index: 1
        }
    }), new yh("Stake11111111111111111111111111111111111111"), Ie([
        Ae("numSignatures"),
        _e("signatureOffset"),
        Ae("signatureInstructionIndex"),
        _e("ethAddressOffset"),
        Ae("ethAddressInstructionIndex"),
        _e("messageDataOffset"),
        _e("messageDataSize"),
        Ae("messageInstructionIndex"),
        Ee(20, "ethAddress"),
        Ee(64, "signature"),
        Ae("recoveryId")
    ]), new yh("KeccakSecp256k11111111111111111111111111111"), new yh("Va1idator1nfo111111111111111111111111111111"), new yh("Vote111111111111111111111111111111111111111"), Ie([
        Ah("nodePubkey"),
        Ah("authorizedWithdrawer"),
        Ae("commission"),
        we(),
        xe(Ie([
            we("slot"),
            Me("confirmationCount")
        ]), Se(Me(), -8), "votes"),
        Ae("rootSlotValid"),
        we("rootSlot"),
        we(),
        xe(Ie([
            we("epoch"),
            Ah("authorizedVoter")
        ]), Se(Me(), -8), "authorizedVoters"),
        Ie([
            xe(Ie([
                Ah("authorizedPubkey"),
                we("epochOfLastAuthorizedSwitch"),
                we("targetEpoch")
            ]), 32, "buf"),
            we("idx"),
            Ae("isEmpty")
        ], "priorVoters"),
        we(),
        xe(Ie([
            we("epoch"),
            we("credits"),
            we("prevCredits")
        ]), Se(Me(), -8), "epochCredits"),
        Ie([
            we("slot"),
            we("timestamp")
        ], "lastTimestamp")
    ]), Object.freeze({
        InitializeAccount: {
            index: 0,
            layout: Ie([
                Me("instruction"),
                ((t = "voteInit")=>Ie([
                        Ah("nodePubkey"),
                        Ah("authorizedVoter"),
                        Ah("authorizedWithdrawer"),
                        Ae("commission")
                    ], t))()
            ])
        },
        Authorize: {
            index: 1,
            layout: Ie([
                Me("instruction"),
                Ah("newAuthorized"),
                Me("voteAuthorizationType")
            ])
        },
        Withdraw: {
            index: 3,
            layout: Ie([
                Me("instruction"),
                ke("lamports")
            ])
        }
    }), Object.freeze({
        Voter: {
            index: 0
        },
        Withdrawer: {
            index: 1
        }
    }), new yh("Vote111111111111111111111111111111111111111");
    class uf extends P {
        constructor({ net: t = "mainnet-beta" , server: e , appId: r , rpc: n  }){
            super(), this.accounts = [], E(t, "'net' is required"), E(T.includes(t), "unsupported net"), this.net = t, this.rpc = n || ("mainnet-beta" === t ? "https://free.rpcpool.com" : `https://api.${t}.solana.com`), this.server = e || B[this.net] || "https://wallet.blocto.app", this.appId = r || undefined;
        }
        tryRetrieveSessionFromStorage() {
            const t = D(this.sessionKey, {}), e = t && t.code, r = t && t.address && t.address.solana;
            this.connected = Boolean(e && r), this.code = e || null, this.accounts = r ? [
                r
            ] : [];
        }
        async request(t) {
            this.connected || await this.connect();
            try {
                let e = null, r = null;
                switch(t.method){
                    case "connect":
                        r = await this.fetchAccounts();
                        break;
                    case "disconnect":
                        this.disconnect();
                        break;
                    case "getAccounts":
                        r = this.accounts.length ? this.accounts : await this.fetchAccounts();
                        break;
                    case "getAccountInfo":
                        {
                            const e = await this.handleReadRequests(t), [n, i] = e.result.value.data;
                            r = {
                                ...e.result.value,
                                data: at.from(n, i),
                                owner: new yh(e.result.value.owner)
                            };
                            break;
                        }
                    case "convertToProgramWalletTransaction":
                        r = await this.handleConvertTransaction(t);
                        break;
                    case "signAndSendTransaction":
                        r = await this.handleSignAndSendTransaction(t);
                        break;
                    case "signTransaction":
                    case "signAllTransactions":
                        throw new Error(`Blocto is program wallet, which doesn't support ${t.method}. Use signAndSendTransaction instead.`);
                    default:
                        e = await this.handleReadRequests(t);
                }
                if (e && !e.result && e.error) {
                    const t = e.error.message ? e.error.message : "Request failed";
                    throw new Error(t);
                }
                return e ? e.result : r;
            } catch (t) {
                throw console.error(t), t;
            }
        }
        async connect() {
            const t = window.solana;
            return t && t.isBlocto ? new Promise((e)=>{
                t.once("connect", (t)=>{
                    this.accounts = [
                        t.toBase58()
                    ], e();
                }), t.connect();
            }) : (this.tryRetrieveSessionFromStorage(), new Promise((t, e)=>{
                if ("undefined" == typeof window && e("Currently only supported in browser"), this.connected) return t();
                const r = encodeURIComponent(window.location.origin), n = L(`${this.server}/authn?l6n=${r}&chain=solana`);
                N(n), C("message", (r, i)=>{
                    const o = r;
                    if (o.origin === this.server) {
                        if ("FCL::CHALLENGE::RESPONSE" === o.data.type) {
                            i(), z(n), this.code = o.data.code, this.connected = !0, this.eventListeners.connect.forEach((t)=>t(this.net));
                            const e = o.data.address;
                            this.accounts = e ? [
                                e.solana
                            ] : [], K(this.sessionKey, {
                                code: this.code,
                                address: e
                            }, O), t();
                        }
                        "FCL::CHALLENGE::CANCEL" === o.data.type && (i(), z(n), e(new Error("User declined the login request")));
                    }
                });
            }));
        }
        async disconnect() {
            const t = window.solana;
            t && t.isBlocto ? await t.dicconnect() : (this.code = null, this.accounts = [], this.eventListeners.disconnect.forEach((t)=>t()));
        }
        async fetchAccounts() {
            const { accounts: t  } = await fetch(`${this.server}/api/solana/accounts?code=${this.code}`).then((t)=>t.json());
            return this.accounts = t, t;
        }
        async handleReadRequests(t) {
            return fetch(this.rpc, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: 1,
                    jsonrpc: "2.0",
                    ...t
                })
            }).then((t)=>t.json());
        }
        async convertToProgramWalletTransaction(t) {
            const e = window.solana;
            if (e && e.isBlocto) return e.convertToProgramWalletTransaction(t);
            const r = await this.request({
                method: "convertToProgramWalletTransaction",
                params: {
                    message: t.serializeMessage().toString("hex")
                }
            });
            return this.toTransaction(r, []);
        }
        async signAndSendTransaction(t, e) {
            const r = window.solana;
            if (r && r.isBlocto) return r.signAndSendTransaction(t);
            const n = {};
            if (e) {
                e.commitment && (n.commitment = e.commitment);
                const t = e ? e._rpcEndpoint : null;
                t && t !== this.rpc && (this.rpc = t, this.disconnect(), await this.connect());
            }
            return this.request({
                method: "signAndSendTransaction",
                params: {
                    signatures: await this.collectSignatures(t),
                    message: t.serializeMessage().toString("hex"),
                    ...n
                }
            });
        }
        toTransaction(t, e) {
            const r = Ih.from(at.from(t, "hex")), n = new Uh;
            return n.recentBlockhash = r.recentBlockhash, r.header.numRequiredSignatures > 0 && (n.feePayer = r.accountKeys[0]), e.forEach((t, e)=>{
                const i = {
                    signature: t === yh.default.toBase58() ? null : ne.decode(t),
                    publicKey: r.accountKeys[e]
                };
                n.signatures.push(i);
            }), r.instructions.forEach((t)=>{
                const e = t.accounts.map((t)=>({
                        pubkey: r.accountKeys[t],
                        isSigner: t < r.header.numRequiredSignatures,
                        isWritable: r.isAccountWritable(t)
                    }));
                n.instructions.push(new Th({
                    keys: e,
                    programId: r.accountKeys[t.programIdIndex],
                    data: ne.decode(t.data)
                }));
            }), n;
        }
        async collectSignatures(t) {
            return t.signatures.reduce((t, e)=>(e.signature && (t[e.publicKey.toBase58()] = e.signature.toString("hex")), t), {});
        }
        async handleConvertTransaction(t) {
            return fetch(`${this.server}/api/solana/convertToWalletTx?code=${this.code}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    sessionId: this.code,
                    ...t.params
                })
            }).then((t)=>V(t, this));
        }
        async handleSignAndSendTransaction(t) {
            const { authorizationId: e  } = await fetch(`${this.server}/api/solana/authz?code=${this.code}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    sessionId: this.code,
                    ...t.params
                })
            }).then((t)=>V(t, this));
            if ("undefined" == typeof window) throw new Error("Currently only supported in browser");
            const r = L(`${this.server}/authz/solana/${e}`);
            return N(r), new Promise((t, e)=>C("message", (n, i)=>{
                    const o = n;
                    o.origin === this.server && "SOL:FRAME:RESPONSE" === o.data.type && ("APPROVED" === o.data.status && (i(), z(r), t(o.data.txHash)), "DECLINED" === o.data.status && (i(), z(r), e(new Error("User declined to send the transaction"))));
                }));
        }
    }
    var cf = Object.freeze({
        __proto__: null,
        default: {}
    });
    function df(t, e) {
        for(var r = 0, n = t.length - 1; n >= 0; n--){
            var i = t[n];
            "." === i ? t.splice(n, 1) : ".." === i ? (t.splice(n, 1), r++) : r && (t.splice(n, 1), r--);
        }
        if (e) for(; r--; r)t.unshift("..");
        return t;
    }
    var lf = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, pf = function(t) {
        return lf.exec(t).slice(1);
    };
    function bf() {
        for(var t = "", e = !1, r = arguments.length - 1; r >= -1 && !e; r--){
            var n = r >= 0 ? arguments[r] : "/";
            if ("string" != typeof n) throw new TypeError("Arguments to path.resolve must be strings");
            n && (t = n + "/" + t, e = "/" === n.charAt(0));
        }
        return (e ? "/" : "") + (t = df(Sf(t.split("/"), function(t) {
            return !!t;
        }), !e).join("/")) || ".";
    }
    function mf(t) {
        var e = yf(t), r = "/" === xf(t, -1);
        return (t = df(Sf(t.split("/"), function(t) {
            return !!t;
        }), !e).join("/")) || e || (t = "."), t && r && (t += "/"), (e ? "/" : "") + t;
    }
    function yf(t) {
        return "/" === t.charAt(0);
    }
    function gf() {
        var t = Array.prototype.slice.call(arguments, 0);
        return mf(Sf(t, function(t, e) {
            if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
            return t;
        }).join("/"));
    }
    function vf(t, e) {
        function r(t) {
            for(var e = 0; e < t.length && "" === t[e]; e++);
            for(var r = t.length - 1; r >= 0 && "" === t[r]; r--);
            return e > r ? [] : t.slice(e, r - e + 1);
        }
        t = bf(t).substr(1), e = bf(e).substr(1);
        for(var n = r(t.split("/")), i = r(e.split("/")), o = Math.min(n.length, i.length), s = o, a = 0; a < o; a++)if (n[a] !== i[a]) {
            s = a;
            break;
        }
        var h = [];
        for(a = s; a < n.length; a++)h.push("..");
        return (h = h.concat(i.slice(s))).join("/");
    }
    function wf(t) {
        var e = pf(t), r = e[0], n = e[1];
        return r || n ? (n && (n = n.substr(0, n.length - 1)), r + n) : ".";
    }
    function Mf(t, e) {
        var r = pf(t)[2];
        return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r;
    }
    function _f(t) {
        return pf(t)[3];
    }
    var Af = {
        extname: _f,
        basename: Mf,
        dirname: wf,
        sep: "/",
        delimiter: ":",
        relative: vf,
        join: gf,
        isAbsolute: yf,
        normalize: mf,
        resolve: bf
    };
    function Sf(t, e) {
        if (t.filter) return t.filter(e);
        for(var r = [], n = 0; n < t.length; n++)e(t[n], n, t) && r.push(t[n]);
        return r;
    }
    var Ef, xf = "b" === "ab".substr(-1) ? function(t, e, r) {
        return t.substr(e, r);
    } : function(t, e, r) {
        return e < 0 && (e = t.length + e), t.substr(e, r);
    }, If = Object.freeze({
        __proto__: null,
        resolve: bf,
        normalize: mf,
        isAbsolute: yf,
        join: gf,
        relative: vf,
        sep: "/",
        delimiter: ":",
        dirname: wf,
        basename: Mf,
        extname: _f,
        default: Af
    });
    function kf() {
        if (void 0 === Ef) {
            var t = new ArrayBuffer(2), e = new Uint8Array(t), r = new Uint16Array(t);
            if (e[0] = 1, e[1] = 2, 258 === r[0]) Ef = "BE";
            else {
                if (513 !== r[0]) throw new Error("unable to figure out endianess");
                Ef = "LE";
            }
        }
        return Ef;
    }
    function Rf() {
        return void 0 !== t.location ? t.location.hostname : "";
    }
    function Bf() {
        return [];
    }
    function Tf() {
        return 0;
    }
    function Uf() {
        return Number.MAX_VALUE;
    }
    function Of() {
        return Number.MAX_VALUE;
    }
    function Pf() {
        return [];
    }
    function Lf() {
        return "Browser";
    }
    function Nf() {
        return void 0 !== t.navigator ? t.navigator.appVersion : "";
    }
    function zf() {}
    function Cf() {}
    function qf() {
        return "/tmp";
    }
    var jf = qf, Df = {
        EOL: "\n",
        tmpdir: jf,
        tmpDir: qf,
        networkInterfaces: zf,
        getNetworkInterfaces: Cf,
        release: Nf,
        type: Lf,
        cpus: Pf,
        totalmem: Of,
        freemem: Uf,
        uptime: Tf,
        loadavg: Bf,
        hostname: Rf,
        endianness: kf
    }, Ff = Object.freeze({
        __proto__: null,
        endianness: kf,
        hostname: Rf,
        loadavg: Bf,
        uptime: Tf,
        freemem: Uf,
        totalmem: Of,
        cpus: Pf,
        type: Lf,
        release: Nf,
        networkInterfaces: zf,
        getNetworkInterfaces: Cf,
        arch: function() {
            return "javascript";
        },
        platform: function() {
            return "browser";
        },
        tmpDir: qf,
        tmpdir: jf,
        EOL: "\n",
        default: Df
    }), Kf = Zt(cf), Yf = Zt(If), Vf = Zt(Ff);
    function Wf(t) {
        console.log(`[dotenv][DEBUG] ${t}`);
    }
    const Hf = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/, $f = /\\n/g, Gf = /\r\n|\n|\r/;
    function Zf(t, e) {
        const r = Boolean(e && e.debug), n = {};
        return t.toString().split(Gf).forEach(function(t, e) {
            const i = t.match(Hf);
            if (null != i) {
                const t = i[1];
                let e = i[2] || "";
                const r = e.length - 1, o = '"' === e[0] && '"' === e[r];
                "'" === e[0] && "'" === e[r] || o ? (e = e.substring(1, r), o && (e = e.replace($f, "\n"))) : e = e.trim(), n[t] = e;
            } else r && Wf(`did not match key and value when parsing line ${e + 1}: ${t}`);
        }), n;
    }
    ({
        config: function(t) {
            let e = Yf.resolve(S.cwd(), ".env"), r = "utf8", n = !1;
            var i;
            t && (null != t.path && (e = "~" === (i = t.path)[0] ? Yf.join(Vf.homedir(), i.slice(1)) : i), null != t.encoding && (r = t.encoding), null != t.debug && (n = !0));
            try {
                const t = Zf(Kf.readFileSync(e, {
                    encoding: r
                }), {
                    debug: n
                });
                return Object.keys(t).forEach(function(e) {
                    Object.prototype.hasOwnProperty.call(S.env, e) ? n && Wf(`"${e}" is already defined in \`process.env\` and will not be overwritten`) : S.env[e] = t[e];
                }), {
                    parsed: t
                };
            } catch (t) {
                return {
                    error: t
                };
            }
        },
        parse: Zf
    }).config();
    return class {
        constructor({ appId: t , ethereum: e , solana: r  }){
            e && (this.ethereum = new W({
                ...e,
                appId: t
            })), r && (this.solana = new uf({
                ...r,
                appId: t
            }));
        }
    };
});

},{}]},["fw5qt"], null, "parcelRequirebe40")

//# sourceMappingURL=blocto-sdk.umd.fe08fa28.js.map
