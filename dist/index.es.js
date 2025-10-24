(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode("._wrapper_16cee_1{font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;border-bottom:1px solid rgba(0,0,0,.1);padding:15px 20px;display:flex;align-items:center;justify-content:space-between}._logo_16cee_10{display:inline-block;vertical-align:top}._title_16cee_15{font-weight:900;font-size:20px;line-height:1;margin:6px 0 6px 10px;display:inline-block;vertical-align:top;padding:0}")),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
var Br = { exports: {} }, Ge = {}, Vr = { exports: {} }, m = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function Yt() {
  if (yt)
    return m;
  yt = 1;
  var $ = Symbol.for("react.element"), v = Symbol.for("react.portal"), Ce = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), de = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), ne = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), ee = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), U = Symbol.iterator;
  function re(n) {
    return n === null || typeof n != "object" ? null : (n = U && n[U] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var G = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, se = Object.assign, Fe = {};
  function ae(n, i, g) {
    this.props = n, this.context = i, this.refs = Fe, this.updater = g || G;
  }
  ae.prototype.isReactComponent = {}, ae.prototype.setState = function(n, i) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, i, "setState");
  }, ae.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function oe() {
  }
  oe.prototype = ae.prototype;
  function x(n, i, g) {
    this.props = n, this.context = i, this.refs = Fe, this.updater = g || G;
  }
  var me = x.prototype = new oe();
  me.constructor = x, se(me, ae.prototype), me.isPureReactComponent = !0;
  var ue = Array.isArray, M = Object.prototype.hasOwnProperty, H = { current: null }, ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function pe(n, i, g) {
    var b, C = {}, k = null, O = null;
    if (i != null)
      for (b in i.ref !== void 0 && (O = i.ref), i.key !== void 0 && (k = "" + i.key), i)
        M.call(i, b) && !ce.hasOwnProperty(b) && (C[b] = i[b]);
    var T = arguments.length - 2;
    if (T === 1)
      C.children = g;
    else if (1 < T) {
      for (var w = Array(T), W = 0; W < T; W++)
        w[W] = arguments[W + 2];
      C.children = w;
    }
    if (n && n.defaultProps)
      for (b in T = n.defaultProps, T)
        C[b] === void 0 && (C[b] = T[b]);
    return { $$typeof: $, type: n, key: k, ref: O, props: C, _owner: H.current };
  }
  function we(n, i) {
    return { $$typeof: $, type: n.type, key: i, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Se(n) {
    return typeof n == "object" && n !== null && n.$$typeof === $;
  }
  function Ye(n) {
    var i = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(g) {
      return i[g];
    });
  }
  var Te = /\/+/g;
  function q(n, i) {
    return typeof n == "object" && n !== null && n.key != null ? Ye("" + n.key) : i.toString(36);
  }
  function J(n, i, g, b, C) {
    var k = typeof n;
    (k === "undefined" || k === "boolean") && (n = null);
    var O = !1;
    if (n === null)
      O = !0;
    else
      switch (k) {
        case "string":
        case "number":
          O = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case $:
            case v:
              O = !0;
          }
      }
    if (O)
      return O = n, C = C(O), n = b === "" ? "." + q(O, 0) : b, ue(C) ? (g = "", n != null && (g = n.replace(Te, "$&/") + "/"), J(C, i, g, "", function(W) {
        return W;
      })) : C != null && (Se(C) && (C = we(C, g + (!C.key || O && O.key === C.key ? "" : ("" + C.key).replace(Te, "$&/") + "/") + n)), i.push(C)), 1;
    if (O = 0, b = b === "" ? "." : b + ":", ue(n))
      for (var T = 0; T < n.length; T++) {
        k = n[T];
        var w = b + q(k, T);
        O += J(k, i, g, w, C);
      }
    else if (w = re(n), typeof w == "function")
      for (n = w.call(n), T = 0; !(k = n.next()).done; )
        k = k.value, w = b + q(k, T++), O += J(k, i, g, w, C);
    else if (k === "object")
      throw i = String(n), Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    return O;
  }
  function Y(n, i, g) {
    if (n == null)
      return n;
    var b = [], C = 0;
    return J(n, b, "", "", function(k) {
      return i.call(g, k, C++);
    }), b;
  }
  function ie(n) {
    if (n._status === -1) {
      var i = n._result;
      i = i(), i.then(function(g) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = g);
      }, function(g) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = g);
      }), n._status === -1 && (n._status = 0, n._result = i);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var l = { current: null }, fe = { transition: null }, Oe = { ReactCurrentDispatcher: l, ReactCurrentBatchConfig: fe, ReactCurrentOwner: H };
  function ve() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return m.Children = { map: Y, forEach: function(n, i, g) {
    Y(n, function() {
      i.apply(this, arguments);
    }, g);
  }, count: function(n) {
    var i = 0;
    return Y(n, function() {
      i++;
    }), i;
  }, toArray: function(n) {
    return Y(n, function(i) {
      return i;
    }) || [];
  }, only: function(n) {
    if (!Se(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, m.Component = ae, m.Fragment = Ce, m.Profiler = de, m.PureComponent = x, m.StrictMode = Q, m.Suspense = L, m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oe, m.act = ve, m.cloneElement = function(n, i, g) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var b = se({}, n.props), C = n.key, k = n.ref, O = n._owner;
    if (i != null) {
      if (i.ref !== void 0 && (k = i.ref, O = H.current), i.key !== void 0 && (C = "" + i.key), n.type && n.type.defaultProps)
        var T = n.type.defaultProps;
      for (w in i)
        M.call(i, w) && !ce.hasOwnProperty(w) && (b[w] = i[w] === void 0 && T !== void 0 ? T[w] : i[w]);
    }
    var w = arguments.length - 2;
    if (w === 1)
      b.children = g;
    else if (1 < w) {
      T = Array(w);
      for (var W = 0; W < w; W++)
        T[W] = arguments[W + 2];
      b.children = T;
    }
    return { $$typeof: $, type: n.type, key: C, ref: k, props: b, _owner: O };
  }, m.createContext = function(n) {
    return n = { $$typeof: ne, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: te, _context: n }, n.Consumer = n;
  }, m.createElement = pe, m.createFactory = function(n) {
    var i = pe.bind(null, n);
    return i.type = n, i;
  }, m.createRef = function() {
    return { current: null };
  }, m.forwardRef = function(n) {
    return { $$typeof: Z, render: n };
  }, m.isValidElement = Se, m.lazy = function(n) {
    return { $$typeof: N, _payload: { _status: -1, _result: n }, _init: ie };
  }, m.memo = function(n, i) {
    return { $$typeof: ee, type: n, compare: i === void 0 ? null : i };
  }, m.startTransition = function(n) {
    var i = fe.transition;
    fe.transition = {};
    try {
      n();
    } finally {
      fe.transition = i;
    }
  }, m.unstable_act = ve, m.useCallback = function(n, i) {
    return l.current.useCallback(n, i);
  }, m.useContext = function(n) {
    return l.current.useContext(n);
  }, m.useDebugValue = function() {
  }, m.useDeferredValue = function(n) {
    return l.current.useDeferredValue(n);
  }, m.useEffect = function(n, i) {
    return l.current.useEffect(n, i);
  }, m.useId = function() {
    return l.current.useId();
  }, m.useImperativeHandle = function(n, i, g) {
    return l.current.useImperativeHandle(n, i, g);
  }, m.useInsertionEffect = function(n, i) {
    return l.current.useInsertionEffect(n, i);
  }, m.useLayoutEffect = function(n, i) {
    return l.current.useLayoutEffect(n, i);
  }, m.useMemo = function(n, i) {
    return l.current.useMemo(n, i);
  }, m.useReducer = function(n, i, g) {
    return l.current.useReducer(n, i, g);
  }, m.useRef = function(n) {
    return l.current.useRef(n);
  }, m.useState = function(n) {
    return l.current.useState(n);
  }, m.useSyncExternalStore = function(n, i, g) {
    return l.current.useSyncExternalStore(n, i, g);
  }, m.useTransition = function() {
    return l.current.useTransition();
  }, m.version = "18.3.1", m;
}
var mr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ht;
function Bt() {
  return ht || (ht = 1, function($, v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Ce = "18.3.1", Q = Symbol.for("react.element"), de = Symbol.for("react.portal"), te = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), ee = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), Fe = Symbol.for("react.offscreen"), ae = Symbol.iterator, oe = "@@iterator";
      function x(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ae && e[ae] || e[oe];
        return typeof r == "function" ? r : null;
      }
      var me = {
        current: null
      }, ue = {
        transition: null
      }, M = {
        current: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, H = {
        current: null
      }, ce = {}, pe = null;
      function we(e) {
        pe = e;
      }
      ce.setExtraStackFrame = function(e) {
        pe = e;
      }, ce.getCurrentStack = null, ce.getStackAddendum = function() {
        var e = "";
        pe && (e += pe);
        var r = ce.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Se = !1, Ye = !1, Te = !1, q = !1, J = !1, Y = {
        ReactCurrentDispatcher: me,
        ReactCurrentBatchConfig: ue,
        ReactCurrentOwner: H
      };
      Y.ReactDebugCurrentFrame = ce, Y.ReactCurrentActQueue = M;
      function ie(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          fe("warn", e, a);
        }
      }
      function l(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          fe("error", e, a);
        }
      }
      function fe(e, r, a) {
        {
          var o = Y.ReactDebugCurrentFrame, c = o.getStackAddendum();
          c !== "" && (r += "%s", a = a.concat([c]));
          var d = a.map(function(f) {
            return String(f);
          });
          d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
        }
      }
      var Oe = {};
      function ve(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", c = o + "." + r;
          if (Oe[c])
            return;
          l("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Oe[c] = !0;
        }
      }
      var n = {
        isMounted: function(e) {
          return !1;
        },
        enqueueForceUpdate: function(e, r, a) {
          ve(e, "forceUpdate");
        },
        enqueueReplaceState: function(e, r, a, o) {
          ve(e, "replaceState");
        },
        enqueueSetState: function(e, r, a, o) {
          ve(e, "setState");
        }
      }, i = Object.assign, g = {};
      Object.freeze(g);
      function b(e, r, a) {
        this.props = e, this.context = r, this.refs = g, this.updater = a || n;
      }
      b.prototype.isReactComponent = {}, b.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var C = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, k = function(e, r) {
          Object.defineProperty(b.prototype, e, {
            get: function() {
              ie("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var O in C)
          C.hasOwnProperty(O) && k(O, C[O]);
      }
      function T() {
      }
      T.prototype = b.prototype;
      function w(e, r, a) {
        this.props = e, this.context = r, this.refs = g, this.updater = a || n;
      }
      var W = w.prototype = new T();
      W.constructor = w, i(W, b.prototype), W.isPureReactComponent = !0;
      function gr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Xe = Array.isArray;
      function $e(e) {
        return Xe(e);
      }
      function _r(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Le(e) {
        try {
          return ge(e), !1;
        } catch {
          return !0;
        }
      }
      function ge(e) {
        return "" + e;
      }
      function Pe(e) {
        if (Le(e))
          return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _r(e)), ge(e);
      }
      function Qe(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var c = r.displayName || r.name || "";
        return c !== "" ? a + "(" + c + ")" : a;
      }
      function ke(e) {
        return e.displayName || "Context";
      }
      function le(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case te:
            return "Fragment";
          case de:
            return "Portal";
          case Z:
            return "Profiler";
          case ne:
            return "StrictMode";
          case U:
            return "Suspense";
          case re:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case ee:
              var r = e;
              return ke(r) + ".Consumer";
            case L:
              var a = e;
              return ke(a._context) + ".Provider";
            case N:
              return Qe(e, e.render, "ForwardRef");
            case G:
              var o = e.displayName || null;
              return o !== null ? o : le(e.type) || "Memo";
            case se: {
              var c = e, d = c._payload, f = c._init;
              try {
                return le(f(d));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var je = Object.prototype.hasOwnProperty, Ne = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ze, er, Me;
      Me = {};
      function Be(e) {
        if (je.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function _e(e) {
        if (je.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function br(e, r) {
        var a = function() {
          Ze || (Ze = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function rr(e, r) {
        var a = function() {
          er || (er = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function tr(e) {
        if (typeof e.ref == "string" && H.current && e.__self && H.current.stateNode !== e.__self) {
          var r = le(H.current.type);
          Me[r] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Me[r] = !0);
        }
      }
      var Ae = function(e, r, a, o, c, d, f) {
        var y = {
          $$typeof: Q,
          type: e,
          key: r,
          ref: a,
          props: f,
          _owner: d
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function Er(e, r, a) {
        var o, c = {}, d = null, f = null, y = null, E = null;
        if (r != null) {
          Be(r) && (f = r.ref, tr(r)), _e(r) && (Pe(r.key), d = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            je.call(r, o) && !Ne.hasOwnProperty(o) && (c[o] = r[o]);
        }
        var P = arguments.length - 2;
        if (P === 1)
          c.children = a;
        else if (P > 1) {
          for (var j = Array(P), A = 0; A < P; A++)
            j[A] = arguments[A + 2];
          Object.freeze && Object.freeze(j), c.children = j;
        }
        if (e && e.defaultProps) {
          var I = e.defaultProps;
          for (o in I)
            c[o] === void 0 && (c[o] = I[o]);
        }
        if (d || f) {
          var V = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && br(c, V), f && rr(c, V);
        }
        return Ae(e, d, f, y, E, H.current, c);
      }
      function Rr(e, r) {
        var a = Ae(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Cr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, c = i({}, e.props), d = e.key, f = e.ref, y = e._self, E = e._source, P = e._owner;
        if (r != null) {
          Be(r) && (f = r.ref, P = H.current), _e(r) && (Pe(r.key), d = "" + r.key);
          var j;
          e.type && e.type.defaultProps && (j = e.type.defaultProps);
          for (o in r)
            je.call(r, o) && !Ne.hasOwnProperty(o) && (r[o] === void 0 && j !== void 0 ? c[o] = j[o] : c[o] = r[o]);
        }
        var A = arguments.length - 2;
        if (A === 1)
          c.children = a;
        else if (A > 1) {
          for (var I = Array(A), V = 0; V < A; V++)
            I[V] = arguments[V + 2];
          c.children = I;
        }
        return Ae(e.type, d, f, y, E, P, c);
      }
      function be(e) {
        return typeof e == "object" && e !== null && e.$$typeof === Q;
      }
      var nr = ".", wr = ":";
      function Sr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(c) {
          return a[c];
        });
        return "$" + o;
      }
      var We = !1, ar = /\/+/g;
      function ye(e) {
        return e.replace(ar, "$&/");
      }
      function xe(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Pe(e.key), Sr("" + e.key)) : r.toString(36);
      }
      function Ee(e, r, a, o, c) {
        var d = typeof e;
        (d === "undefined" || d === "boolean") && (e = null);
        var f = !1;
        if (e === null)
          f = !0;
        else
          switch (d) {
            case "string":
            case "number":
              f = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case Q:
                case de:
                  f = !0;
              }
          }
        if (f) {
          var y = e, E = c(y), P = o === "" ? nr + xe(y, 0) : o;
          if ($e(E)) {
            var j = "";
            P != null && (j = ye(P) + "/"), Ee(E, r, j, "", function(Ut) {
              return Ut;
            });
          } else
            E != null && (be(E) && (E.key && (!y || y.key !== E.key) && Pe(E.key), E = Rr(
              E,
              a + (E.key && (!y || y.key !== E.key) ? ye("" + E.key) + "/" : "") + P
            )), r.push(E));
          return 1;
        }
        var A, I, V = 0, z = o === "" ? nr : o + wr;
        if ($e(e))
          for (var hr = 0; hr < e.length; hr++)
            A = e[hr], I = z + xe(A, hr), V += Ee(A, r, a, I, c);
        else {
          var Wr = x(e);
          if (typeof Wr == "function") {
            var dt = e;
            Wr === dt.entries && (We || ie("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), We = !0);
            for (var Wt = Wr.call(dt), pt, Vt = 0; !(pt = Wt.next()).done; )
              A = pt.value, I = z + xe(A, Vt++), V += Ee(A, r, a, I, c);
          } else if (d === "object") {
            var vt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (vt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : vt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return V;
      }
      function De(e, r, a) {
        if (e == null)
          return e;
        var o = [], c = 0;
        return Ee(e, o, "", "", function(d) {
          return r.call(a, d, c++);
        }), o;
      }
      function Tr(e) {
        var r = 0;
        return De(e, function() {
          r++;
        }), r;
      }
      function or(e, r, a) {
        De(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Or(e) {
        return De(e, function(r) {
          return r;
        }) || [];
      }
      function ur(e) {
        if (!be(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function ir(e) {
        var r = {
          $$typeof: ee,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: L,
          _context: r
        };
        var a = !1, o = !1, c = !1;
        {
          var d = {
            $$typeof: ee,
            _context: r
          };
          Object.defineProperties(d, {
            Provider: {
              get: function() {
                return o || (o = !0, l("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(f) {
                r.Provider = f;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(f) {
                r._currentValue = f;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(f) {
                r._currentValue2 = f;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(f) {
                r._threadCount = f;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, l("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(f) {
                c || (ie("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", f), c = !0);
              }
            }
          }), r.Consumer = d;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Ie = -1, ze = 0, qe = 1, sr = 2;
      function Pr(e) {
        if (e._status === Ie) {
          var r = e._result, a = r();
          if (a.then(function(d) {
            if (e._status === ze || e._status === Ie) {
              var f = e;
              f._status = qe, f._result = d;
            }
          }, function(d) {
            if (e._status === ze || e._status === Ie) {
              var f = e;
              f._status = sr, f._result = d;
            }
          }), e._status === Ie) {
            var o = e;
            o._status = ze, o._result = a;
          }
        }
        if (e._status === qe) {
          var c = e._result;
          return c === void 0 && l(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, c), "default" in c || l(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, c), c.default;
        } else
          throw e._result;
      }
      function kr(e) {
        var r = {
          _status: Ie,
          _result: e
        }, a = {
          $$typeof: se,
          _payload: r,
          _init: Pr
        };
        {
          var o, c;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(d) {
                l("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = d, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return c;
              },
              set: function(d) {
                l("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), c = d, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function jr(e) {
        e != null && e.$$typeof === G ? l("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? l("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && l("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && l("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: N,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var cr;
      cr = Symbol.for("react.module.reference");
      function t(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === te || e === Z || J || e === ne || e === U || e === re || q || e === Fe || Se || Ye || Te || typeof e == "object" && e !== null && (e.$$typeof === se || e.$$typeof === G || e.$$typeof === L || e.$$typeof === ee || e.$$typeof === N || e.$$typeof === cr || e.getModuleId !== void 0));
      }
      function u(e, r) {
        t(e) || l("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: G,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(c) {
              o = c, !e.name && !e.displayName && (e.displayName = c);
            }
          });
        }
        return a;
      }
      function s() {
        var e = me.current;
        return e === null && l(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function p(e) {
        var r = s();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? l("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && l("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function R(e) {
        var r = s();
        return r.useState(e);
      }
      function S(e, r, a) {
        var o = s();
        return o.useReducer(e, r, a);
      }
      function _(e) {
        var r = s();
        return r.useRef(e);
      }
      function h(e, r) {
        var a = s();
        return a.useEffect(e, r);
      }
      function B(e, r) {
        var a = s();
        return a.useInsertionEffect(e, r);
      }
      function D(e, r) {
        var a = s();
        return a.useLayoutEffect(e, r);
      }
      function F(e, r) {
        var a = s();
        return a.useCallback(e, r);
      }
      function X(e, r) {
        var a = s();
        return a.useMemo(e, r);
      }
      function Re(e, r, a) {
        var o = s();
        return o.useImperativeHandle(e, r, a);
      }
      function he(e, r) {
        {
          var a = s();
          return a.useDebugValue(e, r);
        }
      }
      function K() {
        var e = s();
        return e.useTransition();
      }
      function Ke(e) {
        var r = s();
        return r.useDeferredValue(e);
      }
      function Ar() {
        var e = s();
        return e.useId();
      }
      function xr(e, r, a) {
        var o = s();
        return o.useSyncExternalStore(e, r, a);
      }
      var He = 0, zr, qr, Kr, Hr, Gr, Jr, Xr;
      function Qr() {
      }
      Qr.__reactDisabledLog = !0;
      function Rt() {
        {
          if (He === 0) {
            zr = console.log, qr = console.info, Kr = console.warn, Hr = console.error, Gr = console.group, Jr = console.groupCollapsed, Xr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Qr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          He++;
        }
      }
      function Ct() {
        {
          if (He--, He === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: i({}, e, {
                value: zr
              }),
              info: i({}, e, {
                value: qr
              }),
              warn: i({}, e, {
                value: Kr
              }),
              error: i({}, e, {
                value: Hr
              }),
              group: i({}, e, {
                value: Gr
              }),
              groupCollapsed: i({}, e, {
                value: Jr
              }),
              groupEnd: i({}, e, {
                value: Xr
              })
            });
          }
          He < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Dr = Y.ReactCurrentDispatcher, Ir;
      function fr(e, r, a) {
        {
          if (Ir === void 0)
            try {
              throw Error();
            } catch (c) {
              var o = c.stack.trim().match(/\n( *(at )?)/);
              Ir = o && o[1] || "";
            }
          return `
` + Ir + e;
        }
      }
      var Fr = !1, lr;
      {
        var wt = typeof WeakMap == "function" ? WeakMap : Map;
        lr = new wt();
      }
      function Zr(e, r) {
        if (!e || Fr)
          return "";
        {
          var a = lr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Fr = !0;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var d;
        d = Dr.current, Dr.current = null, Rt();
        try {
          if (r) {
            var f = function() {
              throw Error();
            };
            if (Object.defineProperty(f.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(f, []);
              } catch (z) {
                o = z;
              }
              Reflect.construct(e, [], f);
            } else {
              try {
                f.call();
              } catch (z) {
                o = z;
              }
              e.call(f.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (z) {
              o = z;
            }
            e();
          }
        } catch (z) {
          if (z && o && typeof z.stack == "string") {
            for (var y = z.stack.split(`
`), E = o.stack.split(`
`), P = y.length - 1, j = E.length - 1; P >= 1 && j >= 0 && y[P] !== E[j]; )
              j--;
            for (; P >= 1 && j >= 0; P--, j--)
              if (y[P] !== E[j]) {
                if (P !== 1 || j !== 1)
                  do
                    if (P--, j--, j < 0 || y[P] !== E[j]) {
                      var A = `
` + y[P].replace(" at new ", " at ");
                      return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && lr.set(e, A), A;
                    }
                  while (P >= 1 && j >= 0);
                break;
              }
          }
        } finally {
          Fr = !1, Dr.current = d, Ct(), Error.prepareStackTrace = c;
        }
        var I = e ? e.displayName || e.name : "", V = I ? fr(I) : "";
        return typeof e == "function" && lr.set(e, V), V;
      }
      function St(e, r, a) {
        return Zr(e, !1);
      }
      function Tt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function dr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Zr(e, Tt(e));
        if (typeof e == "string")
          return fr(e);
        switch (e) {
          case U:
            return fr("Suspense");
          case re:
            return fr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case N:
              return St(e.render);
            case G:
              return dr(e.type, r, a);
            case se: {
              var o = e, c = o._payload, d = o._init;
              try {
                return dr(d(c), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var et = {}, rt = Y.ReactDebugCurrentFrame;
      function pr(e) {
        if (e) {
          var r = e._owner, a = dr(e.type, e._source, r ? r.type : null);
          rt.setExtraStackFrame(a);
        } else
          rt.setExtraStackFrame(null);
      }
      function Ot(e, r, a, o, c) {
        {
          var d = Function.call.bind(je);
          for (var f in e)
            if (d(e, f)) {
              var y = void 0;
              try {
                if (typeof e[f] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                y = e[f](r, f, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (P) {
                y = P;
              }
              y && !(y instanceof Error) && (pr(c), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, f, typeof y), pr(null)), y instanceof Error && !(y.message in et) && (et[y.message] = !0, pr(c), l("Failed %s type: %s", a, y.message), pr(null));
            }
        }
      }
      function Ve(e) {
        if (e) {
          var r = e._owner, a = dr(e.type, e._source, r ? r.type : null);
          we(a);
        } else
          we(null);
      }
      var $r;
      $r = !1;
      function tt() {
        if (H.current) {
          var e = le(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Pt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function kt(e) {
        return e != null ? Pt(e.__source) : "";
      }
      var nt = {};
      function jt(e) {
        var r = tt();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function at(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = jt(r);
          if (!nt[a]) {
            nt[a] = !0;
            var o = "";
            e && e._owner && e._owner !== H.current && (o = " It was passed a child from " + le(e._owner.type) + "."), Ve(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ve(null);
          }
        }
      }
      function ot(e, r) {
        if (typeof e == "object") {
          if ($e(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              be(o) && at(o, r);
            }
          else if (be(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var c = x(e);
            if (typeof c == "function" && c !== e.entries)
              for (var d = c.call(e), f; !(f = d.next()).done; )
                be(f.value) && at(f.value, r);
          }
        }
      }
      function ut(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === N || r.$$typeof === G))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = le(r);
            Ot(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !$r) {
            $r = !0;
            var c = le(r);
            l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function At(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ve(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ve(null);
              break;
            }
          }
          e.ref !== null && (Ve(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
        }
      }
      function it(e, r, a) {
        var o = t(e);
        if (!o) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = kt(r);
          d ? c += d : c += tt();
          var f;
          e === null ? f = "null" : $e(e) ? f = "array" : e !== void 0 && e.$$typeof === Q ? (f = "<" + (le(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, l("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, c);
        }
        var y = Er.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            ot(arguments[E], e);
        return e === te ? At(y) : ut(y), y;
      }
      var st = !1;
      function xt(e) {
        var r = it.bind(null, e);
        return r.type = e, st || (st = !0, ie("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return ie("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function Dt(e, r, a) {
        for (var o = Cr.apply(this, arguments), c = 2; c < arguments.length; c++)
          ot(arguments[c], o.type);
        return ut(o), o;
      }
      function It(e, r) {
        var a = ue.transition;
        ue.transition = {};
        var o = ue.transition;
        ue.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (ue.transition = a, a === null && o._updatedFibers) {
            var c = o._updatedFibers.size;
            c > 10 && ie("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var ct = !1, vr = null;
      function Ft(e) {
        if (vr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = $ && $[r];
            vr = a.call($, "timers").setImmediate;
          } catch {
            vr = function(c) {
              ct === !1 && (ct = !0, typeof MessageChannel > "u" && l("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var d = new MessageChannel();
              d.port1.onmessage = c, d.port2.postMessage(void 0);
            };
          }
        return vr(e);
      }
      var Ue = 0, ft = !1;
      function lt(e) {
        {
          var r = Ue;
          Ue++, M.current === null && (M.current = []);
          var a = M.isBatchingLegacy, o;
          try {
            if (M.isBatchingLegacy = !0, o = e(), !a && M.didScheduleLegacyUpdate) {
              var c = M.current;
              c !== null && (M.didScheduleLegacyUpdate = !1, Mr(c));
            }
          } catch (I) {
            throw yr(r), I;
          } finally {
            M.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var d = o, f = !1, y = {
              then: function(I, V) {
                f = !0, d.then(function(z) {
                  yr(r), Ue === 0 ? Lr(z, I, V) : I(z);
                }, function(z) {
                  yr(r), V(z);
                });
              }
            };
            return !ft && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              f || (ft = !0, l("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var E = o;
            if (yr(r), Ue === 0) {
              var P = M.current;
              P !== null && (Mr(P), M.current = null);
              var j = {
                then: function(I, V) {
                  M.current === null ? (M.current = [], Lr(E, I, V)) : I(E);
                }
              };
              return j;
            } else {
              var A = {
                then: function(I, V) {
                  I(E);
                }
              };
              return A;
            }
          }
        }
      }
      function yr(e) {
        e !== Ue - 1 && l("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ue = e;
      }
      function Lr(e, r, a) {
        {
          var o = M.current;
          if (o !== null)
            try {
              Mr(o), Ft(function() {
                o.length === 0 ? (M.current = null, r(e)) : Lr(e, r, a);
              });
            } catch (c) {
              a(c);
            }
          else
            r(e);
        }
      }
      var Nr = !1;
      function Mr(e) {
        if (!Nr) {
          Nr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Nr = !1;
          }
        }
      }
      var $t = it, Lt = Dt, Nt = xt, Mt = {
        map: De,
        forEach: or,
        count: Tr,
        toArray: Or,
        only: ur
      };
      v.Children = Mt, v.Component = b, v.Fragment = te, v.Profiler = Z, v.PureComponent = w, v.StrictMode = ne, v.Suspense = U, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, v.act = lt, v.cloneElement = Lt, v.createContext = ir, v.createElement = $t, v.createFactory = Nt, v.createRef = gr, v.forwardRef = jr, v.isValidElement = be, v.lazy = kr, v.memo = u, v.startTransition = It, v.unstable_act = lt, v.useCallback = F, v.useContext = p, v.useDebugValue = he, v.useDeferredValue = Ke, v.useEffect = h, v.useId = Ar, v.useImperativeHandle = Re, v.useInsertionEffect = B, v.useLayoutEffect = D, v.useMemo = X, v.useReducer = S, v.useRef = _, v.useState = R, v.useSyncExternalStore = xr, v.useTransition = K, v.version = Ce, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(mr, mr.exports)), mr.exports;
}
var mt;
function Et() {
  return mt || (mt = 1, function($) {
    process.env.NODE_ENV === "production" ? $.exports = Yt() : $.exports = Bt();
  }(Vr)), Vr.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function zt() {
  if (gt)
    return Ge;
  gt = 1;
  var $ = Et(), v = Symbol.for("react.element"), Ce = Symbol.for("react.fragment"), Q = Object.prototype.hasOwnProperty, de = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(Z, L, ee) {
    var N, U = {}, re = null, G = null;
    ee !== void 0 && (re = "" + ee), L.key !== void 0 && (re = "" + L.key), L.ref !== void 0 && (G = L.ref);
    for (N in L)
      Q.call(L, N) && !te.hasOwnProperty(N) && (U[N] = L[N]);
    if (Z && Z.defaultProps)
      for (N in L = Z.defaultProps, L)
        U[N] === void 0 && (U[N] = L[N]);
    return { $$typeof: v, type: Z, key: re, ref: G, props: U, _owner: de.current };
  }
  return Ge.Fragment = Ce, Ge.jsx = ne, Ge.jsxs = ne, Ge;
}
var Je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function qt() {
  return _t || (_t = 1, process.env.NODE_ENV !== "production" && function() {
    var $ = Et(), v = Symbol.for("react.element"), Ce = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), de = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), Z = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), se = Symbol.iterator, Fe = "@@iterator";
    function ae(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = se && t[se] || t[Fe];
      return typeof u == "function" ? u : null;
    }
    var oe = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var u = arguments.length, s = new Array(u > 1 ? u - 1 : 0), p = 1; p < u; p++)
          s[p - 1] = arguments[p];
        me("error", t, s);
      }
    }
    function me(t, u, s) {
      {
        var p = oe.ReactDebugCurrentFrame, R = p.getStackAddendum();
        R !== "" && (u += "%s", s = s.concat([R]));
        var S = s.map(function(_) {
          return String(_);
        });
        S.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, S);
      }
    }
    var ue = !1, M = !1, H = !1, ce = !1, pe = !1, we;
    we = Symbol.for("react.module.reference");
    function Se(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === Q || t === te || pe || t === de || t === ee || t === N || ce || t === G || ue || M || H || typeof t == "object" && t !== null && (t.$$typeof === re || t.$$typeof === U || t.$$typeof === ne || t.$$typeof === Z || t.$$typeof === L || t.$$typeof === we || t.getModuleId !== void 0));
    }
    function Ye(t, u, s) {
      var p = t.displayName;
      if (p)
        return p;
      var R = u.displayName || u.name || "";
      return R !== "" ? s + "(" + R + ")" : s;
    }
    function Te(t) {
      return t.displayName || "Context";
    }
    function q(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case Q:
          return "Fragment";
        case Ce:
          return "Portal";
        case te:
          return "Profiler";
        case de:
          return "StrictMode";
        case ee:
          return "Suspense";
        case N:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Z:
            var u = t;
            return Te(u) + ".Consumer";
          case ne:
            var s = t;
            return Te(s._context) + ".Provider";
          case L:
            return Ye(t, t.render, "ForwardRef");
          case U:
            var p = t.displayName || null;
            return p !== null ? p : q(t.type) || "Memo";
          case re: {
            var R = t, S = R._payload, _ = R._init;
            try {
              return q(_(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, Y = 0, ie, l, fe, Oe, ve, n, i;
    function g() {
    }
    g.__reactDisabledLog = !0;
    function b() {
      {
        if (Y === 0) {
          ie = console.log, l = console.info, fe = console.warn, Oe = console.error, ve = console.group, n = console.groupCollapsed, i = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: g,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        Y++;
      }
    }
    function C() {
      {
        if (Y--, Y === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, t, {
              value: ie
            }),
            info: J({}, t, {
              value: l
            }),
            warn: J({}, t, {
              value: fe
            }),
            error: J({}, t, {
              value: Oe
            }),
            group: J({}, t, {
              value: ve
            }),
            groupCollapsed: J({}, t, {
              value: n
            }),
            groupEnd: J({}, t, {
              value: i
            })
          });
        }
        Y < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var k = oe.ReactCurrentDispatcher, O;
    function T(t, u, s) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (R) {
            var p = R.stack.trim().match(/\n( *(at )?)/);
            O = p && p[1] || "";
          }
        return `
` + O + t;
      }
    }
    var w = !1, W;
    {
      var gr = typeof WeakMap == "function" ? WeakMap : Map;
      W = new gr();
    }
    function Xe(t, u) {
      if (!t || w)
        return "";
      {
        var s = W.get(t);
        if (s !== void 0)
          return s;
      }
      var p;
      w = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = k.current, k.current = null, b();
      try {
        if (u) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (K) {
              p = K;
            }
            Reflect.construct(t, [], _);
          } else {
            try {
              _.call();
            } catch (K) {
              p = K;
            }
            t.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            p = K;
          }
          t();
        }
      } catch (K) {
        if (K && p && typeof K.stack == "string") {
          for (var h = K.stack.split(`
`), B = p.stack.split(`
`), D = h.length - 1, F = B.length - 1; D >= 1 && F >= 0 && h[D] !== B[F]; )
            F--;
          for (; D >= 1 && F >= 0; D--, F--)
            if (h[D] !== B[F]) {
              if (D !== 1 || F !== 1)
                do
                  if (D--, F--, F < 0 || h[D] !== B[F]) {
                    var X = `
` + h[D].replace(" at new ", " at ");
                    return t.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", t.displayName)), typeof t == "function" && W.set(t, X), X;
                  }
                while (D >= 1 && F >= 0);
              break;
            }
        }
      } finally {
        w = !1, k.current = S, C(), Error.prepareStackTrace = R;
      }
      var Re = t ? t.displayName || t.name : "", he = Re ? T(Re) : "";
      return typeof t == "function" && W.set(t, he), he;
    }
    function $e(t, u, s) {
      return Xe(t, !1);
    }
    function _r(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function Le(t, u, s) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Xe(t, _r(t));
      if (typeof t == "string")
        return T(t);
      switch (t) {
        case ee:
          return T("Suspense");
        case N:
          return T("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case L:
            return $e(t.render);
          case U:
            return Le(t.type, u, s);
          case re: {
            var p = t, R = p._payload, S = p._init;
            try {
              return Le(S(R), u, s);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, Pe = {}, Qe = oe.ReactDebugCurrentFrame;
    function ke(t) {
      if (t) {
        var u = t._owner, s = Le(t.type, t._source, u ? u.type : null);
        Qe.setExtraStackFrame(s);
      } else
        Qe.setExtraStackFrame(null);
    }
    function le(t, u, s, p, R) {
      {
        var S = Function.call.bind(ge);
        for (var _ in t)
          if (S(t, _)) {
            var h = void 0;
            try {
              if (typeof t[_] != "function") {
                var B = Error((p || "React class") + ": " + s + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              h = t[_](u, _, p, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              h = D;
            }
            h && !(h instanceof Error) && (ke(R), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", s, _, typeof h), ke(null)), h instanceof Error && !(h.message in Pe) && (Pe[h.message] = !0, ke(R), x("Failed %s type: %s", s, h.message), ke(null));
          }
      }
    }
    var je = Array.isArray;
    function Ne(t) {
      return je(t);
    }
    function Ze(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, s = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s;
      }
    }
    function er(t) {
      try {
        return Me(t), !1;
      } catch {
        return !0;
      }
    }
    function Me(t) {
      return "" + t;
    }
    function Be(t) {
      if (er(t))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(t)), Me(t);
    }
    var _e = oe.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, tr, Ae;
    Ae = {};
    function Er(t) {
      if (ge.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Rr(t) {
      if (ge.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Cr(t, u) {
      if (typeof t.ref == "string" && _e.current && u && _e.current.stateNode !== u) {
        var s = q(_e.current.type);
        Ae[s] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(_e.current.type), t.ref), Ae[s] = !0);
      }
    }
    function be(t, u) {
      {
        var s = function() {
          rr || (rr = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function nr(t, u) {
      {
        var s = function() {
          tr || (tr = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var wr = function(t, u, s, p, R, S, _) {
      var h = {
        $$typeof: v,
        type: t,
        key: u,
        ref: s,
        props: _,
        _owner: S
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Sr(t, u, s, p, R) {
      {
        var S, _ = {}, h = null, B = null;
        s !== void 0 && (Be(s), h = "" + s), Rr(u) && (Be(u.key), h = "" + u.key), Er(u) && (B = u.ref, Cr(u, R));
        for (S in u)
          ge.call(u, S) && !br.hasOwnProperty(S) && (_[S] = u[S]);
        if (t && t.defaultProps) {
          var D = t.defaultProps;
          for (S in D)
            _[S] === void 0 && (_[S] = D[S]);
        }
        if (h || B) {
          var F = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          h && be(_, F), B && nr(_, F);
        }
        return wr(t, h, B, R, p, _e.current, _);
      }
    }
    var We = oe.ReactCurrentOwner, ar = oe.ReactDebugCurrentFrame;
    function ye(t) {
      if (t) {
        var u = t._owner, s = Le(t.type, t._source, u ? u.type : null);
        ar.setExtraStackFrame(s);
      } else
        ar.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function Ee(t) {
      return typeof t == "object" && t !== null && t.$$typeof === v;
    }
    function De() {
      {
        if (We.current) {
          var t = q(We.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Tr(t) {
      {
        if (t !== void 0) {
          var u = t.fileName.replace(/^.*[\\\/]/, ""), s = t.lineNumber;
          return `

Check your code at ` + u + ":" + s + ".";
        }
        return "";
      }
    }
    var or = {};
    function Or(t) {
      {
        var u = De();
        if (!u) {
          var s = typeof t == "string" ? t : t.displayName || t.name;
          s && (u = `

Check the top-level render call using <` + s + ">.");
        }
        return u;
      }
    }
    function ur(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var s = Or(u);
        if (or[s])
          return;
        or[s] = !0;
        var p = "";
        t && t._owner && t._owner !== We.current && (p = " It was passed a child from " + q(t._owner.type) + "."), ye(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, p), ye(null);
      }
    }
    function ir(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Ne(t))
          for (var s = 0; s < t.length; s++) {
            var p = t[s];
            Ee(p) && ur(p, u);
          }
        else if (Ee(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var R = ae(t);
          if (typeof R == "function" && R !== t.entries)
            for (var S = R.call(t), _; !(_ = S.next()).done; )
              Ee(_.value) && ur(_.value, u);
        }
      }
    }
    function Ie(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var s;
        if (typeof u == "function")
          s = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === L || u.$$typeof === U))
          s = u.propTypes;
        else
          return;
        if (s) {
          var p = q(u);
          le(s, t.props, "prop", p, t);
        } else if (u.PropTypes !== void 0 && !xe) {
          xe = !0;
          var R = q(u);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ze(t) {
      {
        for (var u = Object.keys(t.props), s = 0; s < u.length; s++) {
          var p = u[s];
          if (p !== "children" && p !== "key") {
            ye(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), ye(null);
            break;
          }
        }
        t.ref !== null && (ye(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    var qe = {};
    function sr(t, u, s, p, R, S) {
      {
        var _ = Se(t);
        if (!_) {
          var h = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = Tr(R);
          B ? h += B : h += De();
          var D;
          t === null ? D = "null" : Ne(t) ? D = "array" : t !== void 0 && t.$$typeof === v ? (D = "<" + (q(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : D = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, h);
        }
        var F = Sr(t, u, s, R, S);
        if (F == null)
          return F;
        if (_) {
          var X = u.children;
          if (X !== void 0)
            if (p)
              if (Ne(X)) {
                for (var Re = 0; Re < X.length; Re++)
                  ir(X[Re], t);
                Object.freeze && Object.freeze(X);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ir(X, t);
        }
        if (ge.call(u, "key")) {
          var he = q(t), K = Object.keys(u).filter(function(xr) {
            return xr !== "key";
          }), Ke = K.length > 0 ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!qe[he + Ke]) {
            var Ar = K.length > 0 ? "{" + K.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ke, he, Ar, he), qe[he + Ke] = !0;
          }
        }
        return t === Q ? ze(F) : Ie(F), F;
      }
    }
    function Pr(t, u, s) {
      return sr(t, u, s, !0);
    }
    function kr(t, u, s) {
      return sr(t, u, s, !1);
    }
    var jr = kr, cr = Pr;
    Je.Fragment = Q, Je.jsx = jr, Je.jsxs = cr;
  }()), Je;
}
(function($) {
  process.env.NODE_ENV === "production" ? $.exports = zt() : $.exports = qt();
})(Br);
const Ur = Br.exports.jsx, bt = Br.exports.jsxs, Kt = "_wrapper_16cee_1", Ht = "_logo_16cee_10", Gt = "_title_16cee_15", Yr = {
  wrapper: Kt,
  logo: Ht,
  title: Gt
}, Jt = ({
  text: $,
  onClick: v
}) => Ur("header", {
  children: bt("div", {
    className: Yr.wrapper,
    children: [Ur("div", {
      children: Ur("img", {
        className: Yr.logo,
        src: "https://new.bitovi.com/logos/bitovi-logo-red-1.svg",
        onClick: v
      })
    }), bt("h1", {
      className: Yr.logo,
      children: [$, ", World!!!!"]
    })]
  })
});
export {
  Jt as Header
};
