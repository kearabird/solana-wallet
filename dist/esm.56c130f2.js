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
})({"1xC6H":[function(require,module,exports) {
var Refresh = require("680f92fef1cc2997");
var ErrorOverlay = require("ea67a31771738ed");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"680f92fef1cc2997":"786KC","ea67a31771738ed":"1dldy"}],"aesiM":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "14f5514656c130f2";
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

},{}],"lldrP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _web = require("./adapters/web");
var _webDefault = parcelHelpers.interopDefault(_web);
var _iframe = require("./adapters/iframe");
var _iframeDefault = parcelHelpers.interopDefault(_iframe);
var _utils = require("./utils");
var Buffer = require("72e990d44ef50e5f").Buffer;
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
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
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __values = undefined && undefined.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Solflare = /** @class */ function(_super) {
    __extends(Solflare, _super);
    // private static IFRAME_URL = 'http://localhost:3090/';
    function Solflare(config) {
        var _this = _super.call(this) || this;
        _this._network = "mainnet-beta";
        _this._provider = null;
        _this._adapterInstance = null;
        _this._element = null;
        _this._iframe = null;
        _this._connectHandler = null;
        _this._flutterHandlerInterval = null;
        _this._handleEvent = function(event) {
            var _a, _b, _c, _d;
            switch(event.type){
                case "connect_native_web":
                    _this._collapseIframe();
                    _this._adapterInstance = new (0, _webDefault.default)(_this._iframe, _this._network, ((_a = event.data) === null || _a === void 0 ? void 0 : _a.provider) || _this._provider || "https://solflare.com/provider");
                    _this._adapterInstance.on("connect", _this._webConnected);
                    _this._adapterInstance.on("disconnect", _this._webDisconnected);
                    _this._adapterInstance.connect();
                    _this._setPreferredAdapter("native_web");
                    return;
                case "connect":
                    _this._collapseIframe();
                    _this._adapterInstance = new (0, _iframeDefault.default)(_this._iframe, ((_b = event.data) === null || _b === void 0 ? void 0 : _b.publicKey) || "");
                    _this._adapterInstance.connect();
                    _this._setPreferredAdapter((_c = event.data) === null || _c === void 0 ? void 0 : _c.adapter);
                    if (_this._connectHandler) {
                        _this._connectHandler.resolve();
                        _this._connectHandler = null;
                    }
                    _this.emit("connect", _this.publicKey);
                    return;
                case "disconnect":
                    if (_this._connectHandler) {
                        _this._connectHandler.reject();
                        _this._connectHandler = null;
                    }
                    _this._disconnected();
                    _this.emit("disconnect");
                    return;
                case "accountChanged":
                    if ((_d = event.data) === null || _d === void 0 ? void 0 : _d.publicKey) {
                        _this._adapterInstance = new (0, _iframeDefault.default)(_this._iframe, event.data.publicKey);
                        _this._adapterInstance.connect();
                        _this.emit("accountChanged", _this.publicKey);
                    } else _this.emit("accountChanged", undefined);
                    return;
                // legacy event, use resize message type instead
                case "collapse":
                    _this._collapseIframe();
                    return;
                default:
                    return;
            }
        };
        _this._handleResize = function(data) {
            if (data.resizeMode === "full") {
                if (data.params.mode === "fullscreen") _this._expandIframe();
                else if (data.params.mode === "hide") _this._collapseIframe();
            } else if (data.resizeMode === "coordinates") {
                if (_this._iframe) {
                    _this._iframe.style.top = isFinite(data.params.top) ? "".concat(data.params.top, "px") : "";
                    _this._iframe.style.bottom = isFinite(data.params.bottom) ? "".concat(data.params.bottom, "px") : "";
                    _this._iframe.style.left = isFinite(data.params.left) ? "".concat(data.params.left, "px") : "";
                    _this._iframe.style.right = isFinite(data.params.right) ? "".concat(data.params.right, "px") : "";
                    _this._iframe.style.width = isFinite(data.params.width) ? "".concat(data.params.width, "px") : data.params.width;
                    _this._iframe.style.height = isFinite(data.params.height) ? "".concat(data.params.height, "px") : data.params.height;
                }
            }
        };
        _this._handleMessage = function(event) {
            var _a;
            if (((_a = event.data) === null || _a === void 0 ? void 0 : _a.channel) !== "solflareIframeToWalletAdapter") return;
            var data = event.data.data || {};
            if (data.type === "event") _this._handleEvent(data.event);
            else if (data.type === "resize") _this._handleResize(data);
            else if (data.type === "response") {
                if (_this._adapterInstance) _this._adapterInstance.handleMessage(data);
            }
        };
        _this._removeElement = function() {
            if (_this._flutterHandlerInterval !== null) {
                clearInterval(_this._flutterHandlerInterval);
                _this._flutterHandlerInterval = null;
            }
            if (_this._element) {
                _this._element.remove();
                _this._element = null;
            }
        };
        _this._removeDanglingElements = function() {
            var e_1, _a;
            var elements = document.getElementsByClassName("solflare-wallet-adapter-iframe");
            try {
                for(var elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()){
                    var element = elements_1_1.value;
                    if (element.parentElement) element.remove();
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        };
        _this._injectElement = function() {
            _this._removeElement();
            _this._removeDanglingElements();
            var iframeUrl = "".concat(Solflare.IFRAME_URL, "?cluster=").concat(encodeURIComponent(_this._network), "&origin=").concat(encodeURIComponent(window.location.origin), "&version=1");
            var preferredAdapter = _this._getPreferredAdapter();
            if (preferredAdapter) iframeUrl += "&adapter=".concat(encodeURIComponent(preferredAdapter));
            if (_this._provider) iframeUrl += "&provider=".concat(encodeURIComponent(_this._provider));
            _this._element = document.createElement("div");
            _this._element.className = "solflare-wallet-adapter-iframe";
            _this._element.innerHTML = "\n      <iframe src='".concat(iframeUrl, "' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    ");
            document.body.appendChild(_this._element);
            _this._iframe = _this._element.querySelector("iframe");
            // @ts-ignore
            window.fromFlutter = _this._handleMobileMessage;
            _this._flutterHandlerInterval = setInterval(function() {
                // @ts-ignore
                window.fromFlutter = _this._handleMobileMessage;
            }, 100);
            window.addEventListener("message", _this._handleMessage, false);
        };
        _this._collapseIframe = function() {
            if (_this._iframe) {
                _this._iframe.style.top = "";
                _this._iframe.style.right = "";
                _this._iframe.style.height = "2px";
                _this._iframe.style.width = "2px";
            }
        };
        _this._expandIframe = function() {
            if (_this._iframe) {
                _this._iframe.style.top = "0px";
                _this._iframe.style.bottom = "0px";
                _this._iframe.style.left = "0px";
                _this._iframe.style.right = "0px";
                _this._iframe.style.width = "100%";
                _this._iframe.style.height = "100%";
            }
        };
        _this._getPreferredAdapter = function() {
            if (localStorage) return localStorage.getItem("solflarePreferredWalletAdapter") || null;
            return null;
        };
        _this._setPreferredAdapter = function(adapter) {
            if (localStorage && adapter) localStorage.setItem("solflarePreferredWalletAdapter", adapter);
        };
        _this._clearPreferredAdapter = function() {
            if (localStorage) localStorage.removeItem("solflarePreferredWalletAdapter");
        };
        _this._webConnected = function() {
            if (_this._connectHandler) {
                _this._connectHandler.resolve();
                _this._connectHandler = null;
            }
            _this.emit("connect", _this.publicKey);
        };
        _this._webDisconnected = function() {
            if (_this._connectHandler) {
                _this._connectHandler.reject();
                _this._connectHandler = null;
            }
            _this._disconnected();
            _this.emit("disconnect");
        };
        _this._disconnected = function() {
            window.removeEventListener("message", _this._handleMessage, false);
            _this._removeElement();
            _this._clearPreferredAdapter();
            _this._adapterInstance = null;
        };
        _this._handleMobileMessage = function(data) {
            var _a, _b;
            (_b = (_a = _this._iframe) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 || _b.postMessage({
                channel: "solflareMobileToIframe",
                data: data
            }, "*");
        };
        if (config === null || config === void 0 ? void 0 : config.network) _this._network = config === null || config === void 0 ? void 0 : config.network;
        if (config === null || config === void 0 ? void 0 : config.provider) _this._provider = config === null || config === void 0 ? void 0 : config.provider;
        return _this;
    }
    Object.defineProperty(Solflare.prototype, "publicKey", {
        get: function() {
            var _a;
            return ((_a = this._adapterInstance) === null || _a === void 0 ? void 0 : _a.publicKey) || null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Solflare.prototype, "isConnected", {
        get: function() {
            var _a;
            return !!((_a = this._adapterInstance) === null || _a === void 0 ? void 0 : _a.connected);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Solflare.prototype, "connected", {
        get: function() {
            return this.isConnected;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Solflare.prototype, "autoApprove", {
        get: function() {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Solflare.prototype.connect = function() {
        return __awaiter(this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (this.connected) return [
                            2 /*return*/ 
                        ];
                        this._injectElement();
                        return [
                            4 /*yield*/ ,
                            new Promise(function(resolve, reject) {
                                _this._connectHandler = {
                                    resolve: resolve,
                                    reject: reject
                                };
                            })
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    Solflare.prototype.disconnect = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this._adapterInstance) return [
                            2 /*return*/ 
                        ];
                        return [
                            4 /*yield*/ ,
                            this._adapterInstance.disconnect()
                        ];
                    case 1:
                        _a.sent();
                        this._disconnected();
                        this.emit("disconnect");
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    Solflare.prototype.signTransaction = function(transaction) {
        return __awaiter(this, void 0, void 0, function() {
            var serializedMessage, signature, signerPubkeys, signerIndex;
            var _this = this;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error("Wallet not connected");
                        serializedMessage = (0, _utils.isLegacyTransactionInstance)(transaction) ? transaction.serializeMessage() : transaction.message.serialize();
                        return [
                            4 /*yield*/ ,
                            this._adapterInstance.signTransaction(serializedMessage)
                        ];
                    case 1:
                        signature = _a.sent();
                        if ((0, _utils.isLegacyTransactionInstance)(transaction)) transaction.addSignature(this.publicKey, Buffer.from(signature));
                        else {
                            signerPubkeys = transaction.message.staticAccountKeys.slice(0, transaction.message.header.numRequiredSignatures);
                            signerIndex = signerPubkeys.findIndex(function(pubkey) {
                                return pubkey.equals(_this.publicKey);
                            });
                            if (signerIndex >= 0) transaction.signatures[signerIndex] = signature;
                        }
                        return [
                            2 /*return*/ ,
                            transaction
                        ];
                }
            });
        });
    };
    Solflare.prototype.signAllTransactions = function(transactions) {
        return __awaiter(this, void 0, void 0, function() {
            var serializedMessages, signatures, i, transaction, signerPubkeys, signerIndex;
            var _this = this;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error("Wallet not connected");
                        serializedMessages = transactions.map(function(transaction) {
                            return (0, _utils.isLegacyTransactionInstance)(transaction) ? transaction.serializeMessage() : transaction.message.serialize();
                        });
                        return [
                            4 /*yield*/ ,
                            this._adapterInstance.signAllTransactions(serializedMessages)
                        ];
                    case 1:
                        signatures = _a.sent();
                        for(i = 0; i < transactions.length; i++){
                            transaction = transactions[i];
                            if ((0, _utils.isLegacyTransactionInstance)(transaction)) transaction.addSignature(this.publicKey, Buffer.from(signatures[i]));
                            else {
                                signerPubkeys = transaction.message.staticAccountKeys.slice(0, transaction.message.header.numRequiredSignatures);
                                signerIndex = signerPubkeys.findIndex(function(pubkey) {
                                    return pubkey.equals(_this.publicKey);
                                });
                                if (signerIndex >= 0) transaction.signatures[signerIndex] = signatures[i];
                            }
                        }
                        return [
                            2 /*return*/ ,
                            transactions
                        ];
                }
            });
        });
    };
    Solflare.prototype.signMessage = function(data, display) {
        if (display === void 0) display = "utf8";
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error("Wallet not connected");
                        return [
                            4 /*yield*/ ,
                            this._adapterInstance.signMessage(data, display)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    Solflare.prototype.sign = function(data, display) {
        if (display === void 0) display = "utf8";
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.signMessage(data, display)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    Solflare.prototype.detectWallet = function(timeout) {
        var _a;
        if (timeout === void 0) timeout = 10;
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_b) {
                if (window.SolflareApp || ((_a = window.solflare) === null || _a === void 0 ? void 0 : _a.isSolflare)) return [
                    2 /*return*/ ,
                    true
                ];
                return [
                    2 /*return*/ ,
                    new Promise(function(resolve) {
                        var pollInterval, pollTimeout;
                        pollInterval = setInterval(function() {
                            var _a;
                            if (window.SolflareApp || ((_a = window.solflare) === null || _a === void 0 ? void 0 : _a.isSolflare)) {
                                clearInterval(pollInterval);
                                clearTimeout(pollTimeout);
                                resolve(true);
                            }
                        }, 500);
                        pollTimeout = setTimeout(function() {
                            clearInterval(pollInterval);
                            resolve(false);
                        }, timeout * 1000);
                    })
                ];
            });
        });
    };
    Solflare.IFRAME_URL = "https://connect.solflare.com/";
    return Solflare;
}((0, _eventemitter3Default.default));
exports.default = Solflare;

},{"72e990d44ef50e5f":"fCgem","eventemitter3":"3fnfh","./adapters/web":"atSeb","./adapters/iframe":"3pWvo","./utils":"lsMQ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"atSeb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _base = require("./base");
var _baseDefault = parcelHelpers.interopDefault(_base);
var _solWalletAdapter = require("@project-serum/sol-wallet-adapter");
var _solWalletAdapterDefault = parcelHelpers.interopDefault(_solWalletAdapter);
var _bs58 = require("bs58");
var _bs58Default = parcelHelpers.interopDefault(_bs58);
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
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
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var WebAdapter = /** @class */ function(_super) {
    __extends(WebAdapter, _super);
    // @ts-ignore
    function WebAdapter(iframe, network, provider) {
        var _this = _super.call(this) || this;
        _this._instance = null;
        // @ts-ignore
        _this.handleMessage = function(data) {
        // nothing to do here
        };
        _this._sendRequest = function(method, params) {
            return __awaiter(_this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            if (!this._instance.sendRequest) return [
                                3 /*break*/ ,
                                2
                            ];
                            return [
                                4 /*yield*/ ,
                                this._instance.sendRequest(method, params)
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                        case 2:
                            if (!this._instance._sendRequest) return [
                                3 /*break*/ ,
                                4
                            ];
                            return [
                                4 /*yield*/ ,
                                this._instance._sendRequest(method, params)
                            ];
                        case 3:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                        case 4:
                            throw new Error("Unsupported version of `@project-serum/sol-wallet-adapter`");
                    }
                });
            });
        };
        _this._handleConnect = function() {
            _this.emit("connect");
        };
        _this._handleDisconnect = function() {
            window.clearInterval(_this._pollTimer);
            _this.emit("disconnect");
        };
        _this._network = network;
        _this._provider = provider;
        return _this;
    }
    Object.defineProperty(WebAdapter.prototype, "publicKey", {
        get: function() {
            return this._instance.publicKey || null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAdapter.prototype, "connected", {
        get: function() {
            return this._instance.connected || false;
        },
        enumerable: false,
        configurable: true
    });
    WebAdapter.prototype.connect = function() {
        return __awaiter(this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        this._instance = new (0, _solWalletAdapterDefault.default)(this._provider, this._network);
                        this._instance.on("connect", this._handleConnect);
                        this._instance.on("disconnect", this._handleDisconnect);
                        this._pollTimer = window.setInterval(function() {
                            var _a, _b;
                            // @ts-ignore
                            if (((_b = (_a = _this._instance) === null || _a === void 0 ? void 0 : _a._popup) === null || _b === void 0 ? void 0 : _b.closed) !== false) _this._handleDisconnect();
                        }, 200);
                        return [
                            4 /*yield*/ ,
                            this._instance.connect()
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    WebAdapter.prototype.disconnect = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error("Wallet not connected");
                        this._instance.removeAllListeners("connect");
                        this._instance.removeAllListeners("disconnect");
                        return [
                            4 /*yield*/ ,
                            this._instance.disconnect()
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    WebAdapter.prototype.signTransaction = function(message) {
        return __awaiter(this, void 0, void 0, function() {
            var response;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error("Wallet not connected");
                        return [
                            4 /*yield*/ ,
                            this._sendRequest("signTransaction", {
                                message: (0, _bs58Default.default).encode(message)
                            })
                        ];
                    case 1:
                        response = _a.sent();
                        return [
                            2 /*return*/ ,
                            (0, _bs58Default.default).decode(response.signature)
                        ];
                }
            });
        });
    };
    WebAdapter.prototype.signAllTransactions = function(messages) {
        return __awaiter(this, void 0, void 0, function() {
            var response;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error("Wallet not connected");
                        return [
                            4 /*yield*/ ,
                            this._sendRequest("signAllTransactions", {
                                messages: messages.map(function(message) {
                                    return (0, _bs58Default.default).encode(message);
                                })
                            })
                        ];
                    case 1:
                        response = _a.sent();
                        return [
                            2 /*return*/ ,
                            response.signatures.map(function(signature) {
                                return (0, _bs58Default.default).decode(signature);
                            })
                        ];
                }
            });
        });
    };
    WebAdapter.prototype.signMessage = function(data, display) {
        if (display === void 0) display = "hex";
        return __awaiter(this, void 0, void 0, function() {
            var signature;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error("Wallet not connected");
                        return [
                            4 /*yield*/ ,
                            this._instance.sign(data, display)
                        ];
                    case 1:
                        signature = _a.sent().signature;
                        return [
                            2 /*return*/ ,
                            Uint8Array.from(signature)
                        ];
                }
            });
        });
    };
    return WebAdapter;
}((0, _baseDefault.default));
exports.default = WebAdapter;

},{"./base":"kVxtd","@project-serum/sol-wallet-adapter":"eRPaq","bs58":"gIKQ8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kVxtd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var WalletAdapter = /** @class */ function(_super) {
    __extends(WalletAdapter, _super);
    function WalletAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WalletAdapter;
}((0, _eventemitter3Default.default));
exports.default = WalletAdapter;

},{"eventemitter3":"3fnfh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRPaq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _web3Js = require("@solana/web3.js");
var _bs58 = require("bs58");
var _bs58Default = parcelHelpers.interopDefault(_bs58);
class Wallet extends (0, _eventemitter3Default.default) {
    constructor(provider, network){
        var _this;
        super();
        _this = this;
        this._handleMessage = (e)=>{
            if (this._injectedProvider && e.source === window || e.origin === this._providerUrl.origin && e.source === this._popup) {
                if (e.data.method === "connected") {
                    const newPublicKey = new (0, _web3Js.PublicKey)(e.data.params.publicKey);
                    if (!this._publicKey || !this._publicKey.equals(newPublicKey)) {
                        if (this._publicKey && !this._publicKey.equals(newPublicKey)) this._handleDisconnect();
                        this._publicKey = newPublicKey;
                        this._autoApprove = !!e.data.params.autoApprove;
                        this.emit("connect", this._publicKey);
                    }
                } else if (e.data.method === "disconnected") this._handleDisconnect();
                else if (e.data.result || e.data.error) {
                    if (this._responsePromises.has(e.data.id)) {
                        const [resolve, reject] = this._responsePromises.get(e.data.id);
                        if (e.data.result) resolve(e.data.result);
                        else reject(new Error(e.data.error));
                    }
                }
            }
        };
        this._handleConnect = ()=>{
            if (!this._handlerAdded) {
                this._handlerAdded = true;
                window.addEventListener("message", this._handleMessage);
                window.addEventListener("beforeunload", this.disconnect);
            }
            if (this._injectedProvider) return new Promise((resolve)=>{
                this._sendRequest("connect", {});
                resolve();
            });
            else {
                window.name = "parent";
                this._popup = window.open(this._providerUrl.toString(), "_blank", "location,resizable,width=460,height=675");
                return new Promise((resolve)=>{
                    this.once("connect", resolve);
                });
            }
        };
        this._handleDisconnect = ()=>{
            if (this._handlerAdded) {
                this._handlerAdded = false;
                window.removeEventListener("message", this._handleMessage);
                window.removeEventListener("beforeunload", this.disconnect);
            }
            if (this._publicKey) {
                this._publicKey = null;
                this.emit("disconnect");
            }
            this._responsePromises.forEach(([resolve, reject], id)=>{
                this._responsePromises.delete(id);
                reject("Wallet disconnected");
            });
        };
        this._sendRequest = async function(method, params) {
            if (method !== "connect" && !_this.connected) throw new Error("Wallet not connected");
            const requestId = _this._nextRequestId;
            ++_this._nextRequestId;
            return new Promise((resolve, reject)=>{
                _this._responsePromises.set(requestId, [
                    resolve,
                    reject
                ]);
                if (_this._injectedProvider) _this._injectedProvider.postMessage({
                    jsonrpc: "2.0",
                    id: requestId,
                    method,
                    params: {
                        network: _this._network,
                        ...params
                    }
                });
                else {
                    _this._popup.postMessage({
                        jsonrpc: "2.0",
                        id: requestId,
                        method,
                        params
                    }, _this._providerUrl.origin);
                    if (!_this.autoApprove) _this._popup.focus();
                }
            });
        };
        this.connect = ()=>{
            if (this._popup) this._popup.close();
            return this._handleConnect();
        };
        this.disconnect = async function() {
            if (_this._injectedProvider) await _this._sendRequest("disconnect", {});
            if (_this._popup) _this._popup.close();
            _this._handleDisconnect();
        };
        this.sign = async function(data, display) {
            if (!(data instanceof Uint8Array)) throw new Error("Data must be an instance of Uint8Array");
            const response = await _this._sendRequest("sign", {
                data,
                display
            });
            const signature = (0, _bs58Default.default).decode(response.signature);
            const publicKey = new (0, _web3Js.PublicKey)(response.publicKey);
            return {
                signature,
                publicKey
            };
        };
        this.signTransaction = async function(transaction) {
            const response = await _this._sendRequest("signTransaction", {
                message: (0, _bs58Default.default).encode(transaction.serializeMessage())
            });
            const signature = (0, _bs58Default.default).decode(response.signature);
            const publicKey = new (0, _web3Js.PublicKey)(response.publicKey);
            transaction.addSignature(publicKey, signature);
            return transaction;
        };
        this.signAllTransactions = async function(transactions) {
            const response = await _this._sendRequest("signAllTransactions", {
                messages: transactions.map((tx)=>(0, _bs58Default.default).encode(tx.serializeMessage()))
            });
            const signatures = response.signatures.map((s)=>(0, _bs58Default.default).decode(s));
            const publicKey = new (0, _web3Js.PublicKey)(response.publicKey);
            transactions = transactions.map((tx, idx)=>{
                tx.addSignature(publicKey, signatures[idx]);
                return tx;
            });
            return transactions;
        };
        if (isInjectedProvider(provider)) this._injectedProvider = provider;
        else if (isString(provider)) {
            this._providerUrl = new URL(provider);
            this._providerUrl.hash = new URLSearchParams({
                origin: window.location.origin,
                network
            }).toString();
        } else throw new Error("provider parameter must be an injected provider or a URL string.");
        this._network = network;
        this._publicKey = null;
        this._autoApprove = false;
        this._popup = null;
        this._handlerAdded = false;
        this._nextRequestId = 1;
        this._responsePromises = new Map();
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
}
function isString(a) {
    return typeof a === "string";
}
function isInjectedProvider(a) {
    return isObject(a) && isFunction(a.postMessage);
}
function isObject(a) {
    return typeof a === "object" && a !== null;
}
function isFunction(a) {
    return typeof a === "function";
}
exports.default = Wallet;

},{"eventemitter3":"3fnfh","@solana/web3.js":"5JBKN","bs58":"gIKQ8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gIKQ8":[function(require,module,exports) {
var basex = require("a1caf132c0d759d9");
var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
module.exports = basex(ALPHABET);

},{"a1caf132c0d759d9":"cnrFG"}],"cnrFG":[function(require,module,exports) {
"use strict";
// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
// @ts-ignore
var _Buffer = require("1ef0965b1bf1cef4").Buffer;
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

},{"1ef0965b1bf1cef4":"eW7r9"}],"3pWvo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _web3Js = require("@solana/web3.js");
var _base = require("./base");
var _baseDefault = parcelHelpers.interopDefault(_base);
var _uuid = require("uuid");
var _bs58 = require("bs58");
var _bs58Default = parcelHelpers.interopDefault(_bs58);
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var IframeAdapter = /** @class */ function(_super) {
    __extends(IframeAdapter, _super);
    function IframeAdapter(iframe, publicKey) {
        var _this = this;
        var _a;
        _this = _super.call(this) || this;
        _this._publicKey = null;
        _this._messageHandlers = {};
        _this.handleMessage = function(data) {
            if (_this._messageHandlers[data.id]) {
                var _a = _this._messageHandlers[data.id], resolve = _a.resolve, reject = _a.reject;
                delete _this._messageHandlers[data.id];
                if (data.error) reject(data.error);
                else resolve(data.result);
            }
        };
        _this._sendMessage = function(data) {
            if (!_this.connected) throw new Error("Wallet not connected");
            return new Promise(function(resolve, reject) {
                var _a, _b;
                var messageId = (0, _uuid.v4)();
                _this._messageHandlers[messageId] = {
                    resolve: resolve,
                    reject: reject
                };
                (_b = (_a = _this._iframe) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 || _b.postMessage({
                    channel: "solflareWalletAdapterToIframe",
                    data: __assign({
                        id: messageId
                    }, data)
                }, "*");
            });
        };
        _this._iframe = iframe;
        _this._publicKey = new (0, _web3Js.PublicKey)((_a = publicKey === null || publicKey === void 0 ? void 0 : publicKey.toString) === null || _a === void 0 ? void 0 : _a.call(publicKey));
        return _this;
    }
    Object.defineProperty(IframeAdapter.prototype, "publicKey", {
        get: function() {
            return this._publicKey || null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IframeAdapter.prototype, "connected", {
        get: function() {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    IframeAdapter.prototype.connect = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                return [
                    2 /*return*/ 
                ];
            });
        });
    };
    IframeAdapter.prototype.disconnect = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this._sendMessage({
                                method: "disconnect"
                            })
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    IframeAdapter.prototype.signTransaction = function(message) {
        return __awaiter(this, void 0, void 0, function() {
            var signature, e_1;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error("Wallet not connected");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4 /*yield*/ ,
                            this._sendMessage({
                                method: "signTransaction",
                                params: {
                                    message: (0, _bs58Default.default).encode(message)
                                }
                            })
                        ];
                    case 2:
                        signature = _a.sent().signature;
                        return [
                            2 /*return*/ ,
                            (0, _bs58Default.default).decode(signature)
                        ];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        throw new Error("Failed to sign transaction");
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    IframeAdapter.prototype.signAllTransactions = function(messages) {
        return __awaiter(this, void 0, void 0, function() {
            var signatures, e_2;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error("Wallet not connected");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4 /*yield*/ ,
                            this._sendMessage({
                                method: "signAllTransactions",
                                params: {
                                    messages: messages.map(function(message) {
                                        return (0, _bs58Default.default).encode(message);
                                    })
                                }
                            })
                        ];
                    case 2:
                        signatures = _a.sent().signatures;
                        return [
                            2 /*return*/ ,
                            signatures.map(function(signature) {
                                return (0, _bs58Default.default).decode(signature);
                            })
                        ];
                    case 3:
                        e_2 = _a.sent();
                        console.log(e_2);
                        throw new Error("Failed to sign transactions");
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    IframeAdapter.prototype.signMessage = function(data, display) {
        if (display === void 0) display = "hex";
        return __awaiter(this, void 0, void 0, function() {
            var result, e_3;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error("Wallet not connected");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4 /*yield*/ ,
                            this._sendMessage({
                                method: "signMessage",
                                params: {
                                    data: data,
                                    display: display
                                }
                            })
                        ];
                    case 2:
                        result = _a.sent();
                        return [
                            2 /*return*/ ,
                            Uint8Array.from((0, _bs58Default.default).decode(result))
                        ];
                    case 3:
                        e_3 = _a.sent();
                        console.log(e_3);
                        throw new Error("Failed to sign message");
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    return IframeAdapter;
}((0, _baseDefault.default));
exports.default = IframeAdapter;

},{"@solana/web3.js":"5JBKN","./base":"kVxtd","uuid":"j4KJi","bs58":"gIKQ8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lsMQ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isLegacyTransactionInstance", ()=>isLegacyTransactionInstance);
function isLegacyTransactionInstance(transaction) {
    return transaction.version === undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1xC6H","aesiM"], null, "parcelRequirebe40")

//# sourceMappingURL=esm.56c130f2.js.map
