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
})({"jYAF2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4edb090d6d8eeb87";
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

},{}],"4wVuB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _web3Js = require("@solana/web3.js");
var _bs58 = require("bs58");
var _bs58Default = parcelHelpers.interopDefault(_bs58);
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Wallet extends (0, _eventemitter3Default.default) {
    constructor(provider, _network){
        super();
        this._network = _network;
        this._publicKey = null;
        this._popup = null;
        this._handlerAdded = false;
        this._nextRequestId = 1;
        this._autoApprove = false;
        this._responsePromises = new Map();
        this.handleMessage = (e)=>{
            var _a;
            if (this._injectedProvider && e.source === window || e.origin === ((_a = this._providerUrl) === null || _a === void 0 ? void 0 : _a.origin) && e.source === this._popup) {
                if (e.data.method === "connected") {
                    const newPublicKey = new (0, _web3Js.PublicKey)(e.data.params.publicKey);
                    if (!this._publicKey || !this._publicKey.equals(newPublicKey)) {
                        if (this._publicKey && !this._publicKey.equals(newPublicKey)) this.handleDisconnect();
                        this._publicKey = newPublicKey;
                        this._autoApprove = !!e.data.params.autoApprove;
                        this.emit("connect", this._publicKey);
                    }
                } else if (e.data.method === "disconnected") this.handleDisconnect();
                else if (e.data.result || e.data.error) {
                    const promises = this._responsePromises.get(e.data.id);
                    if (promises) {
                        const [resolve, reject] = promises;
                        if (e.data.result) resolve(e.data.result);
                        else reject(new Error(e.data.error));
                    }
                }
            }
        };
        this._beforeUnload = ()=>{
            this.disconnect();
        };
        if (isInjectedProvider(provider)) this._injectedProvider = provider;
        else if (isString(provider)) {
            this._providerUrl = new URL(provider);
            this._providerUrl.hash = new URLSearchParams({
                origin: window.location.origin,
                network: this._network
            }).toString();
        } else throw new Error("provider parameter must be an injected provider or a URL string.");
    }
    handleConnect() {
        var _a;
        if (!this._handlerAdded) {
            this._handlerAdded = true;
            window.addEventListener("message", this.handleMessage);
            window.addEventListener("beforeunload", this._beforeUnload);
        }
        if (this._injectedProvider) return new Promise((resolve)=>{
            this.sendRequest("connect", {});
            resolve();
        });
        else {
            window.name = "parent";
            this._popup = window.open((_a = this._providerUrl) === null || _a === void 0 ? void 0 : _a.toString(), "_blank", "location,resizable,width=460,height=675");
            return new Promise((resolve)=>{
                this.once("connect", resolve);
            });
        }
    }
    handleDisconnect() {
        if (this._handlerAdded) {
            this._handlerAdded = false;
            window.removeEventListener("message", this.handleMessage);
            window.removeEventListener("beforeunload", this._beforeUnload);
        }
        if (this._publicKey) {
            this._publicKey = null;
            this.emit("disconnect");
        }
        this._responsePromises.forEach(([, reject], id)=>{
            this._responsePromises.delete(id);
            reject(new Error("Wallet disconnected"));
        });
    }
    sendRequest(method, params) {
        return __awaiter(this, void 0, void 0, function*() {
            if (method !== "connect" && !this.connected) throw new Error("Wallet not connected");
            const requestId = this._nextRequestId;
            ++this._nextRequestId;
            return new Promise((resolve, reject)=>{
                var _a, _b, _c, _d;
                this._responsePromises.set(requestId, [
                    resolve,
                    reject
                ]);
                if (this._injectedProvider) this._injectedProvider.postMessage({
                    jsonrpc: "2.0",
                    id: requestId,
                    method,
                    params: Object.assign({
                        network: this._network
                    }, params)
                });
                else {
                    (_a = this._popup) === null || _a === void 0 || _a.postMessage({
                        jsonrpc: "2.0",
                        id: requestId,
                        method,
                        params
                    }, (_c = (_b = this._providerUrl) === null || _b === void 0 ? void 0 : _b.origin) !== null && _c !== void 0 ? _c : "");
                    if (!this.autoApprove) (_d = this._popup) === null || _d === void 0 || _d.focus();
                }
            });
        });
    }
    get publicKey() {
        return this._publicKey;
    }
    get connected() {
        return this._publicKey !== null;
    }
    get autoApprove() {
        return this._autoApprove;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function*() {
            if (this._popup) this._popup.close();
            yield this.handleConnect();
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function*() {
            if (this._injectedProvider) yield this.sendRequest("disconnect", {});
            if (this._popup) this._popup.close();
            this.handleDisconnect();
        });
    }
    sign(data, display) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!(data instanceof Uint8Array)) throw new Error("Data must be an instance of Uint8Array");
            const response = yield this.sendRequest("sign", {
                data,
                display
            });
            const signature = (0, _bs58Default.default).decode(response.signature);
            const publicKey = new (0, _web3Js.PublicKey)(response.publicKey);
            return {
                signature,
                publicKey
            };
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function*() {
            const response = yield this.sendRequest("signTransaction", {
                message: (0, _bs58Default.default).encode(transaction.serializeMessage())
            });
            const signature = (0, _bs58Default.default).decode(response.signature);
            const publicKey = new (0, _web3Js.PublicKey)(response.publicKey);
            transaction.addSignature(publicKey, signature);
            return transaction;
        });
    }
    signAllTransactions(transactions) {
        return __awaiter(this, void 0, void 0, function*() {
            const response = yield this.sendRequest("signAllTransactions", {
                messages: transactions.map((tx)=>(0, _bs58Default.default).encode(tx.serializeMessage()))
            });
            const signatures = response.signatures.map((s)=>(0, _bs58Default.default).decode(s));
            const publicKey = new (0, _web3Js.PublicKey)(response.publicKey);
            transactions = transactions.map((tx, idx)=>{
                tx.addSignature(publicKey, signatures[idx]);
                return tx;
            });
            return transactions;
        });
    }
    diffieHellman(publicKey) {
        return __awaiter(this, void 0, void 0, function*() {
            if (!(publicKey instanceof Uint8Array)) throw new Error("Data must be an instance of Uint8Array");
            const response = yield this.sendRequest("diffieHellman", {
                publicKey
            });
            return response;
        });
    }
}
exports.default = Wallet;
function isString(a) {
    return typeof a === "string";
}
function isInjectedProvider(a) {
    return isObject(a) && "postMessage" in a && typeof a.postMessage === "function";
}
function isObject(a) {
    return typeof a === "object" && a !== null;
}

},{"eventemitter3":"3fnfh","@solana/web3.js":"5JBKN","bs58":"i04jT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i04jT":[function(require,module,exports) {
var basex = require("f314bcb6b8f0e8f9");
var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
module.exports = basex(ALPHABET);

},{"f314bcb6b8f0e8f9":"l7oeT"}],"l7oeT":[function(require,module,exports) {
"use strict";
// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
// @ts-ignore
var _Buffer = require("214ca096192c1810").Buffer;
function base(ALPHABET) {
    if (ALPHABET.length >= 255) throw new TypeError("Alphabet too long");
    var BASE_MAP = new Uint8Array(256);
    for(var j = 0; j < BASE_MAP.length; j++)BASE_MAP[j] = 255;
    for(var i = 0; i < ALPHABET.length; i++){
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) throw new TypeError(x + " is ambiguous");
        BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    ;
    var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    ;
    function encode(source) {
        if (Array.isArray(source) || source instanceof Uint8Array) source = _Buffer.from(source);
        if (!_Buffer.isBuffer(source)) throw new TypeError("Expected Buffer");
        if (source.length === 0) return "";
        // Skip & count leading zeroes.
        var zeroes = 0;
        var length = 0;
        var pbegin = 0;
        var pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        // Process the bytes.
        while(pbegin !== pend){
            var carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
            var i = 0;
            for(var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) throw new Error("Non-zero carry");
            length = i;
            pbegin++;
        }
        // Skip leading zeroes in base58 result.
        var it2 = size - length;
        while(it2 !== size && b58[it2] === 0)it2++;
        // Translate the result into a string.
        var str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2)str += ALPHABET.charAt(b58[it2]);
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== "string") throw new TypeError("Expected String");
        if (source.length === 0) return _Buffer.alloc(0);
        var psz = 0;
        // Skip and count leading '1's.
        var zeroes = 0;
        var length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        var size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.
        ;
        var b256 = new Uint8Array(size);
        // Process the characters.
        while(source[psz]){
            // Decode character
            var carry = BASE_MAP[source.charCodeAt(psz)];
            // Invalid character
            if (carry === 255) return;
            var i = 0;
            for(var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) throw new Error("Non-zero carry");
            length = i;
            psz++;
        }
        // Skip leading zeroes in b256.
        var it4 = size - length;
        while(it4 !== size && b256[it4] === 0)it4++;
        var vch = _Buffer.allocUnsafe(zeroes + (size - it4));
        vch.fill(0x00, 0, zeroes);
        var j = zeroes;
        while(it4 !== size)vch[j++] = b256[it4++];
        return vch;
    }
    function decode(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) return buffer;
        throw new Error("Non-base" + BASE + " character");
    }
    return {
        encode: encode,
        decodeUnsafe: decodeUnsafe,
        decode: decode
    };
}
module.exports = base;

},{"214ca096192c1810":"eW7r9"}]},["jYAF2"], null, "parcelRequirebe40")

//# sourceMappingURL=esm.6d8eeb87.js.map
