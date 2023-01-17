/**
 * vuex v2.1.1
 * (c) 2016 Evan You
 * @license MIT
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Vuex=e()}(this,function(){"use strict";function t(t){x&&(t._devtoolHook=x,x.emit("vuex:init",t),x.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){x.emit("vuex:mutation",t,e)}))}function e(t){function e(){var t=this.$options;t.store?this.$store=t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}var n=Number(t.version.split(".")[0]);if(n>=2){var o=t.config._lifecycleHooks.indexOf("init")>-1;t.mixin(o?{init:e}:{beforeCreate:e})}else{var r=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,r.call(this,t)}}}function n(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function o(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function r(t,e){console.error("[vuex] module namespace not found in "+t+"(): "+e)}function i(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"==typeof t}function a(t){return t&&"function"==typeof t.then}function u(t,e){if(!t)throw new Error("[vuex] "+e)}function c(t,e){if(t.update(e),e.modules)for(var n in e.modules){if(!t.getChild(n))return void console.warn("[vuex] trying to add a new module '"+n+"' on hot reloading, manual reload is needed");c(t.getChild(n),e.modules[n])}}function l(t){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var e=t.state;p(t,e,[],t._modules.root,!0),f(t,e)}function f(t,e){var n=t._vm;t.getters={};var o=t._wrappedGetters,r={};i(o,function(e,n){r[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=A.config.silent;A.config.silent=!0,t._vm=new A({data:{state:e},computed:r}),A.config.silent=s,t.strict&&_(t),n&&(t._withCommit(function(){n.state=null}),A.nextTick(function(){return n.$destroy()}))}function p(t,e,n,o,r){var i=!n.length,s=t._modules.getNamespace(n);if(s&&(t._modulesNamespaceMap[s]=o),!i&&!r){var a=g(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){A.set(a,u,o.state)})}var c=o.context=h(t,s);o.forEachMutation(function(e,o){var r=s+o;m(t,r,e,n)}),o.forEachAction(function(e,o){var r=s+o;v(t,r,e,c,n)}),o.forEachGetter(function(e,o){var r=s+o;y(t,r,e,c,n)}),o.forEachChild(function(o,i){p(t,e,n.concat(i),o,r)})}function h(t,e){var n=""===e,o={dispatch:n?t.dispatch:function(n,o,r){var i=w(n,o,r),s=i.payload,a=i.options,u=i.type;return a&&a.root||(u=e+u,t._actions[u])?t.dispatch(u,s):void console.error("[vuex] unknown local action type: "+i.type+", global type: "+u)},commit:n?t.commit:function(n,o,r){var i=w(n,o,r),s=i.payload,a=i.options,u=i.type;return a&&a.root||(u=e+u,t._mutations[u])?void t.commit(u,s,a):void console.error("[vuex] unknown local mutation type: "+i.type+", global type: "+u)}};return Object.defineProperty(o,"getters",{get:n?function(){return t.getters}:function(){return d(t,e)}}),o}function d(t,e){var n={},o=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,o)===e){var i=r.slice(o);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),n}function m(t,e,n,o){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(e){n(g(t.state,o),e)})}function v(t,e,n,o,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(e,i){var s=n({dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:g(t.state,r),rootGetters:t.getters,rootState:t.state},e,i);return a(s)||(s=Promise.resolve(s)),t._devtoolHook?s.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):s})}function y(t,e,n,o,r){return t._wrappedGetters[e]?void console.error("[vuex] duplicate getter key: "+e):void(t._wrappedGetters[e]=function(t){return n(g(t.state,r),o.getters,t.state,t.getters)})}function _(t){t._vm.$watch("state",function(){u(t._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:!0,sync:!0})}function g(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function w(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function b(t){return A?void console.error("[vuex] already installed. Vue.use(Vuex) should be called only once."):(A=t,void e(A))}var x="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,O=o(function(t,e){var o={};return n(e).forEach(function(e){var n=e.key,i=e.val;o[n]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=this.$store._modulesNamespaceMap[t];if(!o)return void r("mapState",t);e=o.state,n=o.context.getters}return"function"==typeof i?i.call(this,e,n):e[i]}}),o}),M=o(function(t,e){var o={};return n(e).forEach(function(e){var n=e.key,r=e.val;r=t+r,o[n]=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return this.$store.commit.apply(this.$store,[r].concat(t))}}),o}),k=o(function(t,e){var o={};return n(e).forEach(function(e){var n=e.key,r=e.val;r=t+r,o[n]=function(){return r in this.$store.getters||console.error("[vuex] unknown getter: "+r),this.$store.getters[r]}}),o}),E=o(function(t,e){var o={};return n(e).forEach(function(e){var n=e.key,r=e.val;r=t+r,o[n]=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return this.$store.dispatch.apply(this.$store,[r].concat(t))}}),o}),j=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t},C={state:{},namespaced:{}};C.state.get=function(){return this._rawModule.state||{}},C.namespaced.get=function(){return!!this._rawModule.namespaced},j.prototype.addChild=function(t,e){this._children[t]=e},j.prototype.removeChild=function(t){delete this._children[t]},j.prototype.getChild=function(t){return this._children[t]},j.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},j.prototype.forEachChild=function(t){i(this._children,t)},j.prototype.forEachGetter=function(t){this._rawModule.getters&&i(this._rawModule.getters,t)},j.prototype.forEachAction=function(t){this._rawModule.actions&&i(this._rawModule.actions,t)},j.prototype.forEachMutation=function(t){this._rawModule.mutations&&i(this._rawModule.mutations,t)},Object.defineProperties(j.prototype,C);var $=function(t){var e=this;this.root=new j(t,!1),t.modules&&i(t.modules,function(t,n){e.register([n],t,!1)})};$.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},$.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},$.prototype.update=function(t){c(this.root,t)},$.prototype.register=function(t,e,n){var o=this;void 0===n&&(n=!0);var r=this.get(t.slice(0,-1)),s=new j(e,n);r.addChild(t[t.length-1],s),e.modules&&i(e.modules,function(e,r){o.register(t.concat(r),e,n)})},$.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var A,V=function(e){var n=this;void 0===e&&(e={}),u(A,"must call Vue.use(Vuex) before creating a store instance."),u("undefined"!=typeof Promise,"vuex requires a Promise polyfill in this browser.");var o=e.state;void 0===o&&(o={});var r=e.plugins;void 0===r&&(r=[]);var i=e.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new $(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new A;var s=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(t,e){return c.call(s,t,e)},this.commit=function(t,e,n){return l.call(s,t,e,n)},this.strict=i,p(this,o,[],this._modules.root),f(this,o),r.concat(t).forEach(function(t){return t(n)})},G={state:{}};G.state.get=function(){return this._vm.$data.state},G.state.set=function(t){u(!1,"Use store.replaceState() to explicit replace store state.")},V.prototype.commit=function(t,e,n){var o=this,r=w(t,e,n),i=r.type,s=r.payload,a=r.options,u={type:i,payload:s},c=this._mutations[i];return c?(this._withCommit(function(){c.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(u,o.state)}),void(a&&a.silent&&console.warn("[vuex] mutation type: "+i+". Silent option has been removed. Use the filter functionality in the vue-devtools"))):void console.error("[vuex] unknown mutation type: "+i)},V.prototype.dispatch=function(t,e){var n=w(t,e),o=n.type,r=n.payload,i=this._actions[o];return i?i.length>1?Promise.all(i.map(function(t){return t(r)})):i[0](r):void console.error("[vuex] unknown action type: "+o)},V.prototype.subscribe=function(t){var e=this._subscribers;return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}},V.prototype.watch=function(t,e,n){var o=this;return u("function"==typeof t,"store.watch only accepts a function."),this._watcherVM.$watch(function(){return t(o.state,o.getters)},e,n)},V.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm.state=t})},V.prototype.registerModule=function(t,e){"string"==typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.register(t,e),p(this,this.state,t,this._modules.get(t)),f(this,this.state)},V.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit(function(){var n=g(e.state,t.slice(0,-1));A.delete(n,t[t.length-1])}),l(this)},V.prototype.hotUpdate=function(t){this._modules.update(t),l(this)},V.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(V.prototype,G),"undefined"!=typeof window&&window.Vue&&b(window.Vue);var P={Store:V,install:b,version:"2.1.1",mapState:O,mapMutations:M,mapGetters:k,mapActions:E};return P});