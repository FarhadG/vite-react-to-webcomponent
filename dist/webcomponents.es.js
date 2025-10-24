(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode("._wrapper_16cee_1{font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;border-bottom:1px solid rgba(0,0,0,.1);padding:15px 20px;display:flex;align-items:center;justify-content:space-between}._logo_16cee_10{display:inline-block;vertical-align:top}._title_16cee_15{font-weight:900;font-size:20px;line-height:1;margin:6px 0 6px 10px;display:inline-block;vertical-align:top;padding:0}")),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
function ik(F, V) {
  for (var k = 0; k < V.length; k++) {
    const Je = V[k];
    if (typeof Je != "string" && !Array.isArray(Je)) {
      for (const yt in Je)
        if (yt !== "default" && !(yt in F)) {
          const Qe = Object.getOwnPropertyDescriptor(Je, yt);
          Qe && Object.defineProperty(F, yt, Qe.get ? Qe : {
            enumerable: !0,
            get: () => Je[yt]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(F, Symbol.toStringTag, { value: "Module" }));
}
function lk(F) {
  return F && F.__esModule && Object.prototype.hasOwnProperty.call(F, "default") ? F.default : F;
}
var Yf = { exports: {} }, wt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aR;
function uk() {
  if (aR)
    return wt;
  aR = 1;
  var F = Symbol.for("react.element"), V = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), Je = Symbol.for("react.strict_mode"), yt = Symbol.for("react.profiler"), Qe = Symbol.for("react.provider"), S = Symbol.for("react.context"), st = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), oe = Symbol.for("react.memo"), We = Symbol.for("react.lazy"), te = Symbol.iterator;
  function ve(_) {
    return _ === null || typeof _ != "object" ? null : (_ = te && _[te] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var Z = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, he = Object.assign, Ze = {};
  function Be(_, B, Ae) {
    this.props = _, this.context = B, this.refs = Ze, this.updater = Ae || Z;
  }
  Be.prototype.isReactComponent = {}, Be.prototype.setState = function(_, B) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, B, "setState");
  }, Be.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function bt() {
  }
  bt.prototype = Be.prototype;
  function Pe(_, B, Ae) {
    this.props = _, this.context = B, this.refs = Ze, this.updater = Ae || Z;
  }
  var Ne = Pe.prototype = new bt();
  Ne.constructor = Pe, he(Ne, Be.prototype), Ne.isPureReactComponent = !0;
  var dt = Array.isArray, Oe = Object.prototype.hasOwnProperty, pt = { current: null }, $e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function rn(_, B, Ae) {
    var Ye, it = {}, at = null, Et = null;
    if (B != null)
      for (Ye in B.ref !== void 0 && (Et = B.ref), B.key !== void 0 && (at = "" + B.key), B)
        Oe.call(B, Ye) && !$e.hasOwnProperty(Ye) && (it[Ye] = B[Ye]);
    var ct = arguments.length - 2;
    if (ct === 1)
      it.children = Ae;
    else if (1 < ct) {
      for (var ft = Array(ct), en = 0; en < ct; en++)
        ft[en] = arguments[en + 2];
      it.children = ft;
    }
    if (_ && _.defaultProps)
      for (Ye in ct = _.defaultProps, ct)
        it[Ye] === void 0 && (it[Ye] = ct[Ye]);
    return { $$typeof: F, type: _, key: at, ref: Et, props: it, _owner: pt.current };
  }
  function xn(_, B) {
    return { $$typeof: F, type: _.type, key: B, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function Wt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === F;
  }
  function Ot(_) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(Ae) {
      return B[Ae];
    });
  }
  var En = /\/+/g;
  function Ue(_, B) {
    return typeof _ == "object" && _ !== null && _.key != null ? Ot("" + _.key) : B.toString(36);
  }
  function nt(_, B, Ae, Ye, it) {
    var at = typeof _;
    (at === "undefined" || at === "boolean") && (_ = null);
    var Et = !1;
    if (_ === null)
      Et = !0;
    else
      switch (at) {
        case "string":
        case "number":
          Et = !0;
          break;
        case "object":
          switch (_.$$typeof) {
            case F:
            case V:
              Et = !0;
          }
      }
    if (Et)
      return Et = _, it = it(Et), _ = Ye === "" ? "." + Ue(Et, 0) : Ye, dt(it) ? (Ae = "", _ != null && (Ae = _.replace(En, "$&/") + "/"), nt(it, B, Ae, "", function(en) {
        return en;
      })) : it != null && (Wt(it) && (it = xn(it, Ae + (!it.key || Et && Et.key === it.key ? "" : ("" + it.key).replace(En, "$&/") + "/") + _)), B.push(it)), 1;
    if (Et = 0, Ye = Ye === "" ? "." : Ye + ":", dt(_))
      for (var ct = 0; ct < _.length; ct++) {
        at = _[ct];
        var ft = Ye + Ue(at, ct);
        Et += nt(at, B, Ae, ft, it);
      }
    else if (ft = ve(_), typeof ft == "function")
      for (_ = ft.call(_), ct = 0; !(at = _.next()).done; )
        at = at.value, ft = Ye + Ue(at, ct++), Et += nt(at, B, Ae, ft, it);
    else if (at === "object")
      throw B = String(_), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return Et;
  }
  function jt(_, B, Ae) {
    if (_ == null)
      return _;
    var Ye = [], it = 0;
    return nt(_, Ye, "", "", function(at) {
      return B.call(Ae, at, it++);
    }), Ye;
  }
  function kt(_) {
    if (_._status === -1) {
      var B = _._result;
      B = B(), B.then(function(Ae) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = Ae);
      }, function(Ae) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = Ae);
      }), _._status === -1 && (_._status = 0, _._result = B);
    }
    if (_._status === 1)
      return _._result.default;
    throw _._result;
  }
  var ye = { current: null }, ee = { transition: null }, _e = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: ee, ReactCurrentOwner: pt };
  function le() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return wt.Children = { map: jt, forEach: function(_, B, Ae) {
    jt(_, function() {
      B.apply(this, arguments);
    }, Ae);
  }, count: function(_) {
    var B = 0;
    return jt(_, function() {
      B++;
    }), B;
  }, toArray: function(_) {
    return jt(_, function(B) {
      return B;
    }) || [];
  }, only: function(_) {
    if (!Wt(_))
      throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, wt.Component = Be, wt.Fragment = k, wt.Profiler = yt, wt.PureComponent = Pe, wt.StrictMode = Je, wt.Suspense = ne, wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _e, wt.act = le, wt.cloneElement = function(_, B, Ae) {
    if (_ == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var Ye = he({}, _.props), it = _.key, at = _.ref, Et = _._owner;
    if (B != null) {
      if (B.ref !== void 0 && (at = B.ref, Et = pt.current), B.key !== void 0 && (it = "" + B.key), _.type && _.type.defaultProps)
        var ct = _.type.defaultProps;
      for (ft in B)
        Oe.call(B, ft) && !$e.hasOwnProperty(ft) && (Ye[ft] = B[ft] === void 0 && ct !== void 0 ? ct[ft] : B[ft]);
    }
    var ft = arguments.length - 2;
    if (ft === 1)
      Ye.children = Ae;
    else if (1 < ft) {
      ct = Array(ft);
      for (var en = 0; en < ft; en++)
        ct[en] = arguments[en + 2];
      Ye.children = ct;
    }
    return { $$typeof: F, type: _.type, key: it, ref: at, props: Ye, _owner: Et };
  }, wt.createContext = function(_) {
    return _ = { $$typeof: S, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: Qe, _context: _ }, _.Consumer = _;
  }, wt.createElement = rn, wt.createFactory = function(_) {
    var B = rn.bind(null, _);
    return B.type = _, B;
  }, wt.createRef = function() {
    return { current: null };
  }, wt.forwardRef = function(_) {
    return { $$typeof: st, render: _ };
  }, wt.isValidElement = Wt, wt.lazy = function(_) {
    return { $$typeof: We, _payload: { _status: -1, _result: _ }, _init: kt };
  }, wt.memo = function(_, B) {
    return { $$typeof: oe, type: _, compare: B === void 0 ? null : B };
  }, wt.startTransition = function(_) {
    var B = ee.transition;
    ee.transition = {};
    try {
      _();
    } finally {
      ee.transition = B;
    }
  }, wt.unstable_act = le, wt.useCallback = function(_, B) {
    return ye.current.useCallback(_, B);
  }, wt.useContext = function(_) {
    return ye.current.useContext(_);
  }, wt.useDebugValue = function() {
  }, wt.useDeferredValue = function(_) {
    return ye.current.useDeferredValue(_);
  }, wt.useEffect = function(_, B) {
    return ye.current.useEffect(_, B);
  }, wt.useId = function() {
    return ye.current.useId();
  }, wt.useImperativeHandle = function(_, B, Ae) {
    return ye.current.useImperativeHandle(_, B, Ae);
  }, wt.useInsertionEffect = function(_, B) {
    return ye.current.useInsertionEffect(_, B);
  }, wt.useLayoutEffect = function(_, B) {
    return ye.current.useLayoutEffect(_, B);
  }, wt.useMemo = function(_, B) {
    return ye.current.useMemo(_, B);
  }, wt.useReducer = function(_, B, Ae) {
    return ye.current.useReducer(_, B, Ae);
  }, wt.useRef = function(_) {
    return ye.current.useRef(_);
  }, wt.useState = function(_) {
    return ye.current.useState(_);
  }, wt.useSyncExternalStore = function(_, B, Ae) {
    return ye.current.useSyncExternalStore(_, B, Ae);
  }, wt.useTransition = function() {
    return ye.current.useTransition();
  }, wt.version = "18.3.1", wt;
}
var Vm = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iR;
function ok() {
  return iR || (iR = 1, function(F, V) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var k = "18.3.1", Je = Symbol.for("react.element"), yt = Symbol.for("react.portal"), Qe = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), st = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), oe = Symbol.for("react.context"), We = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ve = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), Ze = Symbol.for("react.offscreen"), Be = Symbol.iterator, bt = "@@iterator";
      function Pe(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Be && h[Be] || h[bt];
        return typeof C == "function" ? C : null;
      }
      var Ne = {
        current: null
      }, dt = {
        transition: null
      }, Oe = {
        current: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, pt = {
        current: null
      }, $e = {}, rn = null;
      function xn(h) {
        rn = h;
      }
      $e.setExtraStackFrame = function(h) {
        rn = h;
      }, $e.getCurrentStack = null, $e.getStackAddendum = function() {
        var h = "";
        rn && (h += rn);
        var C = $e.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Wt = !1, Ot = !1, En = !1, Ue = !1, nt = !1, jt = {
        ReactCurrentDispatcher: Ne,
        ReactCurrentBatchConfig: dt,
        ReactCurrentOwner: pt
      };
      jt.ReactDebugCurrentFrame = $e, jt.ReactCurrentActQueue = Oe;
      function kt(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            z[j - 1] = arguments[j];
          ee("warn", h, z);
        }
      }
      function ye(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            z[j - 1] = arguments[j];
          ee("error", h, z);
        }
      }
      function ee(h, C, z) {
        {
          var j = jt.ReactDebugCurrentFrame, K = j.getStackAddendum();
          K !== "" && (C += "%s", z = z.concat([K]));
          var je = z.map(function(ue) {
            return String(ue);
          });
          je.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, je);
        }
      }
      var _e = {};
      function le(h, C) {
        {
          var z = h.constructor, j = z && (z.displayName || z.name) || "ReactClass", K = j + "." + C;
          if (_e[K])
            return;
          ye("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), _e[K] = !0;
        }
      }
      var _ = {
        isMounted: function(h) {
          return !1;
        },
        enqueueForceUpdate: function(h, C, z) {
          le(h, "forceUpdate");
        },
        enqueueReplaceState: function(h, C, z, j) {
          le(h, "replaceState");
        },
        enqueueSetState: function(h, C, z, j) {
          le(h, "setState");
        }
      }, B = Object.assign, Ae = {};
      Object.freeze(Ae);
      function Ye(h, C, z) {
        this.props = h, this.context = C, this.refs = Ae, this.updater = z || _;
      }
      Ye.prototype.isReactComponent = {}, Ye.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ye.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var it = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, at = function(h, C) {
          Object.defineProperty(Ye.prototype, h, {
            get: function() {
              kt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Et in it)
          it.hasOwnProperty(Et) && at(Et, it[Et]);
      }
      function ct() {
      }
      ct.prototype = Ye.prototype;
      function ft(h, C, z) {
        this.props = h, this.context = C, this.refs = Ae, this.updater = z || _;
      }
      var en = ft.prototype = new ct();
      en.constructor = ft, B(en, Ye.prototype), en.isPureReactComponent = !0;
      function vr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Vr = Array.isArray;
      function pn(h) {
        return Vr(h);
      }
      function Qn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Hn(h) {
        try {
          return Nn(h), !1;
        } catch {
          return !0;
        }
      }
      function Nn(h) {
        return "" + h;
      }
      function _n(h) {
        if (Hn(h))
          return ye("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qn(h)), Nn(h);
      }
      function Br(h, C, z) {
        var j = h.displayName;
        if (j)
          return j;
        var K = C.displayName || C.name || "";
        return K !== "" ? z + "(" + K + ")" : z;
      }
      function $r(h) {
        return h.displayName || "Context";
      }
      function Wn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && ye("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Qe:
            return "Fragment";
          case yt:
            return "Portal";
          case st:
            return "Profiler";
          case S:
            return "StrictMode";
          case te:
            return "Suspense";
          case ve:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case oe:
              var C = h;
              return $r(C) + ".Consumer";
            case ne:
              var z = h;
              return $r(z._context) + ".Provider";
            case We:
              return Br(h, h.render, "ForwardRef");
            case Z:
              var j = h.displayName || null;
              return j !== null ? j : Wn(h.type) || "Memo";
            case he: {
              var K = h, je = K._payload, ue = K._init;
              try {
                return Wn(ue(je));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var hr = Object.prototype.hasOwnProperty, Yr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, mr, fa, nr;
      nr = {};
      function Ir(h) {
        if (hr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function vn(h) {
        if (hr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function wr(h, C) {
        var z = function() {
          mr || (mr = !0, ye("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function fi(h, C) {
        var z = function() {
          fa || (fa = !0, ye("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function da(h) {
        if (typeof h.ref == "string" && pt.current && h.__self && pt.current.stateNode !== h.__self) {
          var C = Wn(pt.current.type);
          nr[C] || (ye('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), nr[C] = !0);
        }
      }
      var re = function(h, C, z, j, K, je, ue) {
        var ze = {
          $$typeof: Je,
          type: h,
          key: C,
          ref: z,
          props: ue,
          _owner: je
        };
        return ze._store = {}, Object.defineProperty(ze._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ze, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(ze, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: K
        }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
      };
      function ke(h, C, z) {
        var j, K = {}, je = null, ue = null, ze = null, ht = null;
        if (C != null) {
          Ir(C) && (ue = C.ref, da(C)), vn(C) && (_n(C.key), je = "" + C.key), ze = C.__self === void 0 ? null : C.__self, ht = C.__source === void 0 ? null : C.__source;
          for (j in C)
            hr.call(C, j) && !Yr.hasOwnProperty(j) && (K[j] = C[j]);
        }
        var Dt = arguments.length - 2;
        if (Dt === 1)
          K.children = z;
        else if (Dt > 1) {
          for (var Kt = Array(Dt), Qt = 0; Qt < Dt; Qt++)
            Kt[Qt] = arguments[Qt + 2];
          Object.freeze && Object.freeze(Kt), K.children = Kt;
        }
        if (h && h.defaultProps) {
          var Jt = h.defaultProps;
          for (j in Jt)
            K[j] === void 0 && (K[j] = Jt[j]);
        }
        if (je || ue) {
          var tn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          je && wr(K, tn), ue && fi(K, tn);
        }
        return re(h, je, ue, ze, ht, pt.current, K);
      }
      function lt(h, C) {
        var z = re(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function At(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, K = B({}, h.props), je = h.key, ue = h.ref, ze = h._self, ht = h._source, Dt = h._owner;
        if (C != null) {
          Ir(C) && (ue = C.ref, Dt = pt.current), vn(C) && (_n(C.key), je = "" + C.key);
          var Kt;
          h.type && h.type.defaultProps && (Kt = h.type.defaultProps);
          for (j in C)
            hr.call(C, j) && !Yr.hasOwnProperty(j) && (C[j] === void 0 && Kt !== void 0 ? K[j] = Kt[j] : K[j] = C[j]);
        }
        var Qt = arguments.length - 2;
        if (Qt === 1)
          K.children = z;
        else if (Qt > 1) {
          for (var Jt = Array(Qt), tn = 0; tn < Qt; tn++)
            Jt[tn] = arguments[tn + 2];
          K.children = Jt;
        }
        return re(h.type, je, ue, ze, ht, Dt, K);
      }
      function Ht(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Je;
      }
      var kn = ".", hn = ":";
      function yr(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(K) {
          return z[K];
        });
        return "$" + j;
      }
      var It = !1, br = /\/+/g;
      function Pt(h) {
        return h.replace(br, "$&/");
      }
      function Vt(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (_n(h.key), yr("" + h.key)) : C.toString(36);
      }
      function Ja(h, C, z, j, K) {
        var je = typeof h;
        (je === "undefined" || je === "boolean") && (h = null);
        var ue = !1;
        if (h === null)
          ue = !0;
        else
          switch (je) {
            case "string":
            case "number":
              ue = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Je:
                case yt:
                  ue = !0;
              }
          }
        if (ue) {
          var ze = h, ht = K(ze), Dt = j === "" ? kn + Vt(ze, 0) : j;
          if (pn(ht)) {
            var Kt = "";
            Dt != null && (Kt = Pt(Dt) + "/"), Ja(ht, C, Kt, "", function(Wf) {
              return Wf;
            });
          } else
            ht != null && (Ht(ht) && (ht.key && (!ze || ze.key !== ht.key) && _n(ht.key), ht = lt(
              ht,
              z + (ht.key && (!ze || ze.key !== ht.key) ? Pt("" + ht.key) + "/" : "") + Dt
            )), C.push(ht));
          return 1;
        }
        var Qt, Jt, tn = 0, Tt = j === "" ? kn : j + hn;
        if (pn(h))
          for (var Ai = 0; Ai < h.length; Ai++)
            Qt = h[Ai], Jt = Tt + Vt(Qt, Ai), tn += Ja(Qt, C, z, Jt, K);
        else {
          var $u = Pe(h);
          if (typeof $u == "function") {
            var qo = h;
            $u === qo.entries && (It || kt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), It = !0);
            for (var Qf = $u.call(qo), ni, Xo = 0; !(ni = Qf.next()).done; )
              Qt = ni.value, Jt = Tt + Vt(Qt, Xo++), tn += Ja(Qt, C, z, Jt, K);
          } else if (je === "object") {
            var Ko = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Ko === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Ko) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return tn;
      }
      function _a(h, C, z) {
        if (h == null)
          return h;
        var j = [], K = 0;
        return Ja(h, j, "", "", function(je) {
          return C.call(z, je, K++);
        }), j;
      }
      function ol(h) {
        var C = 0;
        return _a(h, function() {
          C++;
        }), C;
      }
      function Ql(h, C, z) {
        _a(h, function() {
          C.apply(this, arguments);
        }, z);
      }
      function Mu(h) {
        return _a(h, function(C) {
          return C;
        }) || [];
      }
      function Mi(h) {
        if (!Ht(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function sl(h) {
        var C = {
          $$typeof: oe,
          _currentValue: h,
          _currentValue2: h,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: ne,
          _context: C
        };
        var z = !1, j = !1, K = !1;
        {
          var je = {
            $$typeof: oe,
            _context: C
          };
          Object.defineProperties(je, {
            Provider: {
              get: function() {
                return j || (j = !0, ye("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ue) {
                C.Provider = ue;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ue) {
                C._currentValue = ue;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ue) {
                C._currentValue2 = ue;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ue) {
                C._threadCount = ue;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, ye("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ue) {
                K || (kt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ue), K = !0);
              }
            }
          }), C.Consumer = je;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var pa = -1, di = 0, va = 1, Za = 2;
      function xr(h) {
        if (h._status === pa) {
          var C = h._result, z = C();
          if (z.then(function(je) {
            if (h._status === di || h._status === pa) {
              var ue = h;
              ue._status = va, ue._result = je;
            }
          }, function(je) {
            if (h._status === di || h._status === pa) {
              var ue = h;
              ue._status = Za, ue._result = je;
            }
          }), h._status === pa) {
            var j = h;
            j._status = di, j._result = z;
          }
        }
        if (h._status === va) {
          var K = h._result;
          return K === void 0 && ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, K), "default" in K || ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, K), K.default;
        } else
          throw h._result;
      }
      function ha(h) {
        var C = {
          _status: pa,
          _result: h
        }, z = {
          $$typeof: he,
          _payload: C,
          _init: xr
        };
        {
          var j, K;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(je) {
                ye("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = je, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return K;
              },
              set: function(je) {
                ye("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), K = je, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function pi(h) {
        h != null && h.$$typeof === Z ? ye("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? ye("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && ye("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && ye("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: We,
          render: h
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(j) {
              z = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var vi;
      vi = Symbol.for("react.module.reference");
      function R(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Qe || h === st || nt || h === S || h === te || h === ve || Ue || h === Ze || Wt || Ot || En || typeof h == "object" && h !== null && (h.$$typeof === he || h.$$typeof === Z || h.$$typeof === ne || h.$$typeof === oe || h.$$typeof === We || h.$$typeof === vi || h.getModuleId !== void 0));
      }
      function I(h, C) {
        R(h) || ye("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: Z,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(K) {
              j = K, !h.name && !h.displayName && (h.displayName = K);
            }
          });
        }
        return z;
      }
      function q() {
        var h = Ne.current;
        return h === null && ye(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function we(h) {
        var C = q();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? ye("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && ye("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function vt(h) {
        var C = q();
        return C.useState(h);
      }
      function Ct(h, C, z) {
        var j = q();
        return j.useReducer(h, C, z);
      }
      function Fe(h) {
        var C = q();
        return C.useRef(h);
      }
      function ut(h, C) {
        var z = q();
        return z.useEffect(h, C);
      }
      function zn(h, C) {
        var z = q();
        return z.useInsertionEffect(h, C);
      }
      function Xt(h, C) {
        var z = q();
        return z.useLayoutEffect(h, C);
      }
      function an(h, C) {
        var z = q();
        return z.useCallback(h, C);
      }
      function gr(h, C) {
        var z = q();
        return z.useMemo(h, C);
      }
      function hi(h, C, z) {
        var j = q();
        return j.useImperativeHandle(h, C, z);
      }
      function Lt(h, C) {
        {
          var z = q();
          return z.useDebugValue(h, C);
        }
      }
      function Gn() {
        var h = q();
        return h.useTransition();
      }
      function _r(h) {
        var C = q();
        return C.useDeferredValue(h);
      }
      function ot() {
        var h = q();
        return h.useId();
      }
      function ka(h, C, z) {
        var j = q();
        return j.useSyncExternalStore(h, C, z);
      }
      var cl = 0, Nu, fl, Qr, Io, kr, Qo, Wo;
      function Js() {
      }
      Js.__reactDisabledLog = !0;
      function zu() {
        {
          if (cl === 0) {
            Nu = console.log, fl = console.info, Qr = console.warn, Io = console.error, kr = console.group, Qo = console.groupCollapsed, Wo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Js,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          cl++;
        }
      }
      function dl() {
        {
          if (cl--, cl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: B({}, h, {
                value: Nu
              }),
              info: B({}, h, {
                value: fl
              }),
              warn: B({}, h, {
                value: Qr
              }),
              error: B({}, h, {
                value: Io
              }),
              group: B({}, h, {
                value: kr
              }),
              groupCollapsed: B({}, h, {
                value: Qo
              }),
              groupEnd: B({}, h, {
                value: Wo
              })
            });
          }
          cl < 0 && ye("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ei = jt.ReactCurrentDispatcher, Dr;
      function pl(h, C, z) {
        {
          if (Dr === void 0)
            try {
              throw Error();
            } catch (K) {
              var j = K.stack.trim().match(/\n( *(at )?)/);
              Dr = j && j[1] || "";
            }
          return `
` + Dr + h;
        }
      }
      var vl = !1, hl;
      {
        var Uu = typeof WeakMap == "function" ? WeakMap : Map;
        hl = new Uu();
      }
      function Au(h, C) {
        if (!h || vl)
          return "";
        {
          var z = hl.get(h);
          if (z !== void 0)
            return z;
        }
        var j;
        vl = !0;
        var K = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var je;
        je = ei.current, ei.current = null, zu();
        try {
          if (C) {
            var ue = function() {
              throw Error();
            };
            if (Object.defineProperty(ue.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ue, []);
              } catch (Tt) {
                j = Tt;
              }
              Reflect.construct(h, [], ue);
            } else {
              try {
                ue.call();
              } catch (Tt) {
                j = Tt;
              }
              h.call(ue.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Tt) {
              j = Tt;
            }
            h();
          }
        } catch (Tt) {
          if (Tt && j && typeof Tt.stack == "string") {
            for (var ze = Tt.stack.split(`
`), ht = j.stack.split(`
`), Dt = ze.length - 1, Kt = ht.length - 1; Dt >= 1 && Kt >= 0 && ze[Dt] !== ht[Kt]; )
              Kt--;
            for (; Dt >= 1 && Kt >= 0; Dt--, Kt--)
              if (ze[Dt] !== ht[Kt]) {
                if (Dt !== 1 || Kt !== 1)
                  do
                    if (Dt--, Kt--, Kt < 0 || ze[Dt] !== ht[Kt]) {
                      var Qt = `
` + ze[Dt].replace(" at new ", " at ");
                      return h.displayName && Qt.includes("<anonymous>") && (Qt = Qt.replace("<anonymous>", h.displayName)), typeof h == "function" && hl.set(h, Qt), Qt;
                    }
                  while (Dt >= 1 && Kt >= 0);
                break;
              }
          }
        } finally {
          vl = !1, ei.current = je, dl(), Error.prepareStackTrace = K;
        }
        var Jt = h ? h.displayName || h.name : "", tn = Jt ? pl(Jt) : "";
        return typeof h == "function" && hl.set(h, tn), tn;
      }
      function Ni(h, C, z) {
        return Au(h, !1);
      }
      function If(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function mi(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Au(h, If(h));
        if (typeof h == "string")
          return pl(h);
        switch (h) {
          case te:
            return pl("Suspense");
          case ve:
            return pl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case We:
              return Ni(h.render);
            case Z:
              return mi(h.type, C, z);
            case he: {
              var j = h, K = j._payload, je = j._init;
              try {
                return mi(je(K), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Mt = {}, Fu = jt.ReactDebugCurrentFrame;
      function Wl(h) {
        if (h) {
          var C = h._owner, z = mi(h.type, h._source, C ? C.type : null);
          Fu.setExtraStackFrame(z);
        } else
          Fu.setExtraStackFrame(null);
      }
      function ju(h, C, z, j, K) {
        {
          var je = Function.call.bind(hr);
          for (var ue in h)
            if (je(h, ue)) {
              var ze = void 0;
              try {
                if (typeof h[ue] != "function") {
                  var ht = Error((j || "React class") + ": " + z + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ht.name = "Invariant Violation", ht;
                }
                ze = h[ue](C, ue, j, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Dt) {
                ze = Dt;
              }
              ze && !(ze instanceof Error) && (Wl(K), ye("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", z, ue, typeof ze), Wl(null)), ze instanceof Error && !(ze.message in Mt) && (Mt[ze.message] = !0, Wl(K), ye("Failed %s type: %s", z, ze.message), Wl(null));
            }
        }
      }
      function Rt(h) {
        if (h) {
          var C = h._owner, z = mi(h.type, h._source, C ? C.type : null);
          xn(z);
        } else
          xn(null);
      }
      var Hu;
      Hu = !1;
      function Pu() {
        if (pt.current) {
          var h = Wn(pt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Xe(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function Gl(h) {
        return h != null ? Xe(h.__source) : "";
      }
      var mn = {};
      function Wr(h) {
        var C = Pu();
        if (!C) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function Or(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = Wr(C);
          if (!mn[z]) {
            mn[z] = !0;
            var j = "";
            h && h._owner && h._owner !== pt.current && (j = " It was passed a child from " + Wn(h._owner.type) + "."), Rt(h), ye('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, j), Rt(null);
          }
        }
      }
      function ml(h, C) {
        if (typeof h == "object") {
          if (pn(h))
            for (var z = 0; z < h.length; z++) {
              var j = h[z];
              Ht(j) && Or(j, C);
            }
          else if (Ht(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var K = Pe(h);
            if (typeof K == "function" && K !== h.entries)
              for (var je = K.call(h), ue; !(ue = je.next()).done; )
                Ht(ue.value) && Or(ue.value, C);
          }
        }
      }
      function Cn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === We || C.$$typeof === Z))
            z = C.propTypes;
          else
            return;
          if (z) {
            var j = Wn(C);
            ju(z, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Hu) {
            Hu = !0;
            var K = Wn(C);
            ye("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && ye("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Bt(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var j = C[z];
            if (j !== "children" && j !== "key") {
              Rt(h), ye("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), Rt(null);
              break;
            }
          }
          h.ref !== null && (Rt(h), ye("Invalid attribute `ref` supplied to `React.Fragment`."), Rt(null));
        }
      }
      function Zs(h, C, z) {
        var j = R(h);
        if (!j) {
          var K = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var je = Gl(C);
          je ? K += je : K += Pu();
          var ue;
          h === null ? ue = "null" : pn(h) ? ue = "array" : h !== void 0 && h.$$typeof === Je ? (ue = "<" + (Wn(h.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof h, ye("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, K);
        }
        var ze = ke.apply(this, arguments);
        if (ze == null)
          return ze;
        if (j)
          for (var ht = 2; ht < arguments.length; ht++)
            ml(arguments[ht], h);
        return h === Qe ? Bt(ze) : Cn(ze), ze;
      }
      var Gr = !1;
      function qn(h) {
        var C = Zs.bind(null, h);
        return C.type = h, Gr || (Gr = !0, kt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return kt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function yi(h, C, z) {
        for (var j = At.apply(this, arguments), K = 2; K < arguments.length; K++)
          ml(arguments[K], j.type);
        return Cn(j), j;
      }
      function ec(h, C) {
        var z = dt.transition;
        dt.transition = {};
        var j = dt.transition;
        dt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (dt.transition = z, z === null && j._updatedFibers) {
            var K = j._updatedFibers.size;
            K > 10 && kt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var zi = !1, yl = null;
      function tc(h) {
        if (yl === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = F && F[C];
            yl = z.call(F, "timers").setImmediate;
          } catch {
            yl = function(K) {
              zi === !1 && (zi = !0, typeof MessageChannel > "u" && ye("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var je = new MessageChannel();
              je.port1.onmessage = K, je.port2.postMessage(void 0);
            };
          }
        return yl(h);
      }
      var Da = 0, gl = !1;
      function Ui(h) {
        {
          var C = Da;
          Da++, Oe.current === null && (Oe.current = []);
          var z = Oe.isBatchingLegacy, j;
          try {
            if (Oe.isBatchingLegacy = !0, j = h(), !z && Oe.didScheduleLegacyUpdate) {
              var K = Oe.current;
              K !== null && (Oe.didScheduleLegacyUpdate = !1, El(K));
            }
          } catch (Jt) {
            throw Oa(C), Jt;
          } finally {
            Oe.isBatchingLegacy = z;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var je = j, ue = !1, ze = {
              then: function(Jt, tn) {
                ue = !0, je.then(function(Tt) {
                  Oa(C), Da === 0 ? Vu(Tt, Jt, tn) : Jt(Tt);
                }, function(Tt) {
                  Oa(C), tn(Tt);
                });
              }
            };
            return !gl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ue || (gl = !0, ye("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ze;
          } else {
            var ht = j;
            if (Oa(C), Da === 0) {
              var Dt = Oe.current;
              Dt !== null && (El(Dt), Oe.current = null);
              var Kt = {
                then: function(Jt, tn) {
                  Oe.current === null ? (Oe.current = [], Vu(ht, Jt, tn)) : Jt(ht);
                }
              };
              return Kt;
            } else {
              var Qt = {
                then: function(Jt, tn) {
                  Jt(ht);
                }
              };
              return Qt;
            }
          }
        }
      }
      function Oa(h) {
        h !== Da - 1 && ye("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Da = h;
      }
      function Vu(h, C, z) {
        {
          var j = Oe.current;
          if (j !== null)
            try {
              El(j), tc(function() {
                j.length === 0 ? (Oe.current = null, C(h)) : Vu(h, C, z);
              });
            } catch (K) {
              z(K);
            }
          else
            C(h);
        }
      }
      var Sl = !1;
      function El(h) {
        if (!Sl) {
          Sl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var z = h[C];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            Sl = !1;
          }
        }
      }
      var ql = Zs, Bu = yi, Go = qn, ti = {
        map: _a,
        forEach: Ql,
        count: ol,
        toArray: Mu,
        only: Mi
      };
      V.Children = ti, V.Component = Ye, V.Fragment = Qe, V.Profiler = st, V.PureComponent = ft, V.StrictMode = S, V.Suspense = te, V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jt, V.act = Ui, V.cloneElement = Bu, V.createContext = sl, V.createElement = ql, V.createFactory = Go, V.createRef = vr, V.forwardRef = pi, V.isValidElement = Ht, V.lazy = ha, V.memo = I, V.startTransition = ec, V.unstable_act = Ui, V.useCallback = an, V.useContext = we, V.useDebugValue = Lt, V.useDeferredValue = _r, V.useEffect = ut, V.useId = ot, V.useImperativeHandle = hi, V.useInsertionEffect = zn, V.useLayoutEffect = Xt, V.useMemo = gr, V.useReducer = Ct, V.useRef = Fe, V.useState = vt, V.useSyncExternalStore = ka, V.useTransition = Gn, V.version = k, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Vm, Vm.exports)), Vm.exports;
}
(function(F) {
  process.env.NODE_ENV === "production" ? F.exports = uk() : F.exports = ok();
})(Yf);
const sk = /* @__PURE__ */ lk(Yf.exports);
var $f = {}, vR = { exports: {} }, Xa = {}, v0 = { exports: {} }, h0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lR;
function ck() {
  return lR || (lR = 1, function(F) {
    function V(ee, _e) {
      var le = ee.length;
      ee.push(_e);
      e:
        for (; 0 < le; ) {
          var _ = le - 1 >>> 1, B = ee[_];
          if (0 < yt(B, _e))
            ee[_] = _e, ee[le] = B, le = _;
          else
            break e;
        }
    }
    function k(ee) {
      return ee.length === 0 ? null : ee[0];
    }
    function Je(ee) {
      if (ee.length === 0)
        return null;
      var _e = ee[0], le = ee.pop();
      if (le !== _e) {
        ee[0] = le;
        e:
          for (var _ = 0, B = ee.length, Ae = B >>> 1; _ < Ae; ) {
            var Ye = 2 * (_ + 1) - 1, it = ee[Ye], at = Ye + 1, Et = ee[at];
            if (0 > yt(it, le))
              at < B && 0 > yt(Et, it) ? (ee[_] = Et, ee[at] = le, _ = at) : (ee[_] = it, ee[Ye] = le, _ = Ye);
            else if (at < B && 0 > yt(Et, le))
              ee[_] = Et, ee[at] = le, _ = at;
            else
              break e;
          }
      }
      return _e;
    }
    function yt(ee, _e) {
      var le = ee.sortIndex - _e.sortIndex;
      return le !== 0 ? le : ee.id - _e.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Qe = performance;
      F.unstable_now = function() {
        return Qe.now();
      };
    } else {
      var S = Date, st = S.now();
      F.unstable_now = function() {
        return S.now() - st;
      };
    }
    var ne = [], oe = [], We = 1, te = null, ve = 3, Z = !1, he = !1, Ze = !1, Be = typeof setTimeout == "function" ? setTimeout : null, bt = typeof clearTimeout == "function" ? clearTimeout : null, Pe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ne(ee) {
      for (var _e = k(oe); _e !== null; ) {
        if (_e.callback === null)
          Je(oe);
        else if (_e.startTime <= ee)
          Je(oe), _e.sortIndex = _e.expirationTime, V(ne, _e);
        else
          break;
        _e = k(oe);
      }
    }
    function dt(ee) {
      if (Ze = !1, Ne(ee), !he)
        if (k(ne) !== null)
          he = !0, kt(Oe);
        else {
          var _e = k(oe);
          _e !== null && ye(dt, _e.startTime - ee);
        }
    }
    function Oe(ee, _e) {
      he = !1, Ze && (Ze = !1, bt(rn), rn = -1), Z = !0;
      var le = ve;
      try {
        for (Ne(_e), te = k(ne); te !== null && (!(te.expirationTime > _e) || ee && !Ot()); ) {
          var _ = te.callback;
          if (typeof _ == "function") {
            te.callback = null, ve = te.priorityLevel;
            var B = _(te.expirationTime <= _e);
            _e = F.unstable_now(), typeof B == "function" ? te.callback = B : te === k(ne) && Je(ne), Ne(_e);
          } else
            Je(ne);
          te = k(ne);
        }
        if (te !== null)
          var Ae = !0;
        else {
          var Ye = k(oe);
          Ye !== null && ye(dt, Ye.startTime - _e), Ae = !1;
        }
        return Ae;
      } finally {
        te = null, ve = le, Z = !1;
      }
    }
    var pt = !1, $e = null, rn = -1, xn = 5, Wt = -1;
    function Ot() {
      return !(F.unstable_now() - Wt < xn);
    }
    function En() {
      if ($e !== null) {
        var ee = F.unstable_now();
        Wt = ee;
        var _e = !0;
        try {
          _e = $e(!0, ee);
        } finally {
          _e ? Ue() : (pt = !1, $e = null);
        }
      } else
        pt = !1;
    }
    var Ue;
    if (typeof Pe == "function")
      Ue = function() {
        Pe(En);
      };
    else if (typeof MessageChannel < "u") {
      var nt = new MessageChannel(), jt = nt.port2;
      nt.port1.onmessage = En, Ue = function() {
        jt.postMessage(null);
      };
    } else
      Ue = function() {
        Be(En, 0);
      };
    function kt(ee) {
      $e = ee, pt || (pt = !0, Ue());
    }
    function ye(ee, _e) {
      rn = Be(function() {
        ee(F.unstable_now());
      }, _e);
    }
    F.unstable_IdlePriority = 5, F.unstable_ImmediatePriority = 1, F.unstable_LowPriority = 4, F.unstable_NormalPriority = 3, F.unstable_Profiling = null, F.unstable_UserBlockingPriority = 2, F.unstable_cancelCallback = function(ee) {
      ee.callback = null;
    }, F.unstable_continueExecution = function() {
      he || Z || (he = !0, kt(Oe));
    }, F.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : xn = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, F.unstable_getCurrentPriorityLevel = function() {
      return ve;
    }, F.unstable_getFirstCallbackNode = function() {
      return k(ne);
    }, F.unstable_next = function(ee) {
      switch (ve) {
        case 1:
        case 2:
        case 3:
          var _e = 3;
          break;
        default:
          _e = ve;
      }
      var le = ve;
      ve = _e;
      try {
        return ee();
      } finally {
        ve = le;
      }
    }, F.unstable_pauseExecution = function() {
    }, F.unstable_requestPaint = function() {
    }, F.unstable_runWithPriority = function(ee, _e) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ee = 3;
      }
      var le = ve;
      ve = ee;
      try {
        return _e();
      } finally {
        ve = le;
      }
    }, F.unstable_scheduleCallback = function(ee, _e, le) {
      var _ = F.unstable_now();
      switch (typeof le == "object" && le !== null ? (le = le.delay, le = typeof le == "number" && 0 < le ? _ + le : _) : le = _, ee) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = le + B, ee = { id: We++, callback: _e, priorityLevel: ee, startTime: le, expirationTime: B, sortIndex: -1 }, le > _ ? (ee.sortIndex = le, V(oe, ee), k(ne) === null && ee === k(oe) && (Ze ? (bt(rn), rn = -1) : Ze = !0, ye(dt, le - _))) : (ee.sortIndex = B, V(ne, ee), he || Z || (he = !0, kt(Oe))), ee;
    }, F.unstable_shouldYield = Ot, F.unstable_wrapCallback = function(ee) {
      var _e = ve;
      return function() {
        var le = ve;
        ve = _e;
        try {
          return ee.apply(this, arguments);
        } finally {
          ve = le;
        }
      };
    };
  }(h0)), h0;
}
var m0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uR;
function fk() {
  return uR || (uR = 1, function(F) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var V = !1, k = !1, Je = 5;
      function yt(re, ke) {
        var lt = re.length;
        re.push(ke), st(re, ke, lt);
      }
      function Qe(re) {
        return re.length === 0 ? null : re[0];
      }
      function S(re) {
        if (re.length === 0)
          return null;
        var ke = re[0], lt = re.pop();
        return lt !== ke && (re[0] = lt, ne(re, lt, 0)), ke;
      }
      function st(re, ke, lt) {
        for (var At = lt; At > 0; ) {
          var Ht = At - 1 >>> 1, kn = re[Ht];
          if (oe(kn, ke) > 0)
            re[Ht] = ke, re[At] = kn, At = Ht;
          else
            return;
        }
      }
      function ne(re, ke, lt) {
        for (var At = lt, Ht = re.length, kn = Ht >>> 1; At < kn; ) {
          var hn = (At + 1) * 2 - 1, yr = re[hn], It = hn + 1, br = re[It];
          if (oe(yr, ke) < 0)
            It < Ht && oe(br, yr) < 0 ? (re[At] = br, re[It] = ke, At = It) : (re[At] = yr, re[hn] = ke, At = hn);
          else if (It < Ht && oe(br, ke) < 0)
            re[At] = br, re[It] = ke, At = It;
          else
            return;
        }
      }
      function oe(re, ke) {
        var lt = re.sortIndex - ke.sortIndex;
        return lt !== 0 ? lt : re.id - ke.id;
      }
      var We = 1, te = 2, ve = 3, Z = 4, he = 5;
      function Ze(re, ke) {
      }
      var Be = typeof performance == "object" && typeof performance.now == "function";
      if (Be) {
        var bt = performance;
        F.unstable_now = function() {
          return bt.now();
        };
      } else {
        var Pe = Date, Ne = Pe.now();
        F.unstable_now = function() {
          return Pe.now() - Ne;
        };
      }
      var dt = 1073741823, Oe = -1, pt = 250, $e = 5e3, rn = 1e4, xn = dt, Wt = [], Ot = [], En = 1, Ue = null, nt = ve, jt = !1, kt = !1, ye = !1, ee = typeof setTimeout == "function" ? setTimeout : null, _e = typeof clearTimeout == "function" ? clearTimeout : null, le = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function _(re) {
        for (var ke = Qe(Ot); ke !== null; ) {
          if (ke.callback === null)
            S(Ot);
          else if (ke.startTime <= re)
            S(Ot), ke.sortIndex = ke.expirationTime, yt(Wt, ke);
          else
            return;
          ke = Qe(Ot);
        }
      }
      function B(re) {
        if (ye = !1, _(re), !kt)
          if (Qe(Wt) !== null)
            kt = !0, Ir(Ae);
          else {
            var ke = Qe(Ot);
            ke !== null && vn(B, ke.startTime - re);
          }
      }
      function Ae(re, ke) {
        kt = !1, ye && (ye = !1, wr()), jt = !0;
        var lt = nt;
        try {
          var At;
          if (!k)
            return Ye(re, ke);
        } finally {
          Ue = null, nt = lt, jt = !1;
        }
      }
      function Ye(re, ke) {
        var lt = ke;
        for (_(lt), Ue = Qe(Wt); Ue !== null && !V && !(Ue.expirationTime > lt && (!re || $r())); ) {
          var At = Ue.callback;
          if (typeof At == "function") {
            Ue.callback = null, nt = Ue.priorityLevel;
            var Ht = Ue.expirationTime <= lt, kn = At(Ht);
            lt = F.unstable_now(), typeof kn == "function" ? Ue.callback = kn : Ue === Qe(Wt) && S(Wt), _(lt);
          } else
            S(Wt);
          Ue = Qe(Wt);
        }
        if (Ue !== null)
          return !0;
        var hn = Qe(Ot);
        return hn !== null && vn(B, hn.startTime - lt), !1;
      }
      function it(re, ke) {
        switch (re) {
          case We:
          case te:
          case ve:
          case Z:
          case he:
            break;
          default:
            re = ve;
        }
        var lt = nt;
        nt = re;
        try {
          return ke();
        } finally {
          nt = lt;
        }
      }
      function at(re) {
        var ke;
        switch (nt) {
          case We:
          case te:
          case ve:
            ke = ve;
            break;
          default:
            ke = nt;
            break;
        }
        var lt = nt;
        nt = ke;
        try {
          return re();
        } finally {
          nt = lt;
        }
      }
      function Et(re) {
        var ke = nt;
        return function() {
          var lt = nt;
          nt = ke;
          try {
            return re.apply(this, arguments);
          } finally {
            nt = lt;
          }
        };
      }
      function ct(re, ke, lt) {
        var At = F.unstable_now(), Ht;
        if (typeof lt == "object" && lt !== null) {
          var kn = lt.delay;
          typeof kn == "number" && kn > 0 ? Ht = At + kn : Ht = At;
        } else
          Ht = At;
        var hn;
        switch (re) {
          case We:
            hn = Oe;
            break;
          case te:
            hn = pt;
            break;
          case he:
            hn = xn;
            break;
          case Z:
            hn = rn;
            break;
          case ve:
          default:
            hn = $e;
            break;
        }
        var yr = Ht + hn, It = {
          id: En++,
          callback: ke,
          priorityLevel: re,
          startTime: Ht,
          expirationTime: yr,
          sortIndex: -1
        };
        return Ht > At ? (It.sortIndex = Ht, yt(Ot, It), Qe(Wt) === null && It === Qe(Ot) && (ye ? wr() : ye = !0, vn(B, Ht - At))) : (It.sortIndex = yr, yt(Wt, It), !kt && !jt && (kt = !0, Ir(Ae))), It;
      }
      function ft() {
      }
      function en() {
        !kt && !jt && (kt = !0, Ir(Ae));
      }
      function vr() {
        return Qe(Wt);
      }
      function Vr(re) {
        re.callback = null;
      }
      function pn() {
        return nt;
      }
      var Qn = !1, Hn = null, Nn = -1, _n = Je, Br = -1;
      function $r() {
        var re = F.unstable_now() - Br;
        return !(re < _n);
      }
      function Wn() {
      }
      function hr(re) {
        if (re < 0 || re > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        re > 0 ? _n = Math.floor(1e3 / re) : _n = Je;
      }
      var Yr = function() {
        if (Hn !== null) {
          var re = F.unstable_now();
          Br = re;
          var ke = !0, lt = !0;
          try {
            lt = Hn(ke, re);
          } finally {
            lt ? mr() : (Qn = !1, Hn = null);
          }
        } else
          Qn = !1;
      }, mr;
      if (typeof le == "function")
        mr = function() {
          le(Yr);
        };
      else if (typeof MessageChannel < "u") {
        var fa = new MessageChannel(), nr = fa.port2;
        fa.port1.onmessage = Yr, mr = function() {
          nr.postMessage(null);
        };
      } else
        mr = function() {
          ee(Yr, 0);
        };
      function Ir(re) {
        Hn = re, Qn || (Qn = !0, mr());
      }
      function vn(re, ke) {
        Nn = ee(function() {
          re(F.unstable_now());
        }, ke);
      }
      function wr() {
        _e(Nn), Nn = -1;
      }
      var fi = Wn, da = null;
      F.unstable_IdlePriority = he, F.unstable_ImmediatePriority = We, F.unstable_LowPriority = Z, F.unstable_NormalPriority = ve, F.unstable_Profiling = da, F.unstable_UserBlockingPriority = te, F.unstable_cancelCallback = Vr, F.unstable_continueExecution = en, F.unstable_forceFrameRate = hr, F.unstable_getCurrentPriorityLevel = pn, F.unstable_getFirstCallbackNode = vr, F.unstable_next = at, F.unstable_pauseExecution = ft, F.unstable_requestPaint = fi, F.unstable_runWithPriority = it, F.unstable_scheduleCallback = ct, F.unstable_shouldYield = $r, F.unstable_wrapCallback = Et, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(m0)), m0;
}
var oR;
function hR() {
  return oR || (oR = 1, function(F) {
    process.env.NODE_ENV === "production" ? F.exports = ck() : F.exports = fk();
  }(v0)), v0.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sR;
function dk() {
  if (sR)
    return Xa;
  sR = 1;
  var F = Yf.exports, V = hR();
  function k(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Je = /* @__PURE__ */ new Set(), yt = {};
  function Qe(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (yt[n] = r, n = 0; n < r.length; n++)
      Je.add(r[n]);
  }
  var st = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ne = Object.prototype.hasOwnProperty, oe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, We = {}, te = {};
  function ve(n) {
    return ne.call(te, n) ? !0 : ne.call(We, n) ? !1 : oe.test(n) ? te[n] = !0 : (We[n] = !0, !1);
  }
  function Z(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function he(n, r, l, o) {
    if (r === null || typeof r > "u" || Z(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function Ze(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Be = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Be[n] = new Ze(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Be[r] = new Ze(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Be[n] = new Ze(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Be[n] = new Ze(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Be[n] = new Ze(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Be[n] = new Ze(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Be[n] = new Ze(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Be[n] = new Ze(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Be[n] = new Ze(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var bt = /[\-:]([a-z])/g;
  function Pe(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      bt,
      Pe
    );
    Be[r] = new Ze(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(bt, Pe);
    Be[r] = new Ze(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(bt, Pe);
    Be[r] = new Ze(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Be[n] = new Ze(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Be.xlinkHref = new Ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Be[n] = new Ze(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ne(n, r, l, o) {
    var c = Be.hasOwnProperty(r) ? Be[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (he(r, l, c, o) && (l = null), o || c === null ? ve(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var dt = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Oe = Symbol.for("react.element"), pt = Symbol.for("react.portal"), $e = Symbol.for("react.fragment"), rn = Symbol.for("react.strict_mode"), xn = Symbol.for("react.profiler"), Wt = Symbol.for("react.provider"), Ot = Symbol.for("react.context"), En = Symbol.for("react.forward_ref"), Ue = Symbol.for("react.suspense"), nt = Symbol.for("react.suspense_list"), jt = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), ee = Symbol.iterator;
  function _e(n) {
    return n === null || typeof n != "object" ? null : (n = ee && n[ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var le = Object.assign, _;
  function B(n) {
    if (_ === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        _ = r && r[1] || "";
      }
    return `
` + _ + n;
  }
  var Ae = !1;
  function Ye(n, r) {
    if (!n || Ae)
      return "";
    Ae = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (U) {
            var o = U;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (U) {
            o = U;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; )
          E--;
        for (; 1 <= m && 0 <= E; m--, E--)
          if (c[m] !== d[E]) {
            if (m !== 1 || E !== 1)
              do
                if (m--, E--, 0 > E || c[m] !== d[E]) {
                  var T = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
                }
              while (1 <= m && 0 <= E);
            break;
          }
      }
    } finally {
      Ae = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? B(n) : "";
  }
  function it(n) {
    switch (n.tag) {
      case 5:
        return B(n.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ye(n.type, !1), n;
      case 11:
        return n = Ye(n.type.render, !1), n;
      case 1:
        return n = Ye(n.type, !0), n;
      default:
        return "";
    }
  }
  function at(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case $e:
        return "Fragment";
      case pt:
        return "Portal";
      case xn:
        return "Profiler";
      case rn:
        return "StrictMode";
      case Ue:
        return "Suspense";
      case nt:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Ot:
          return (n.displayName || "Context") + ".Consumer";
        case Wt:
          return (n._context.displayName || "Context") + ".Provider";
        case En:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case jt:
          return r = n.displayName || null, r !== null ? r : at(n.type) || "Memo";
        case kt:
          r = n._payload, n = n._init;
          try {
            return at(n(r));
          } catch {
          }
      }
    return null;
  }
  function Et(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return at(r);
      case 8:
        return r === rn ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function ct(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function ft(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function en(n) {
    var r = ft(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function vr(n) {
    n._valueTracker || (n._valueTracker = en(n));
  }
  function Vr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = ft(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function pn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Qn(n, r) {
    var l = r.checked;
    return le({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l != null ? l : n._wrapperState.initialChecked });
  }
  function Hn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = ct(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Nn(n, r) {
    r = r.checked, r != null && Ne(n, "checked", r, !1);
  }
  function _n(n, r) {
    Nn(n, r);
    var l = ct(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? $r(n, r.type, l) : r.hasOwnProperty("defaultValue") && $r(n, r.type, ct(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Br(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function $r(n, r, l) {
    (r !== "number" || pn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Wn = Array.isArray;
  function hr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ct(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Yr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(k(91));
    return le({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function mr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(k(92));
        if (Wn(l)) {
          if (1 < l.length)
            throw Error(k(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ct(l) };
  }
  function fa(n, r) {
    var l = ct(r.value), o = ct(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function nr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Ir(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function vn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ir(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var wr, fi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (wr = wr || document.createElement("div"), wr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = wr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function da(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var re = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ke = ["Webkit", "ms", "Moz", "O"];
  Object.keys(re).forEach(function(n) {
    ke.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), re[r] = re[n];
    });
  });
  function lt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || re.hasOwnProperty(n) && re[n] ? ("" + r).trim() : r + "px";
  }
  function At(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = lt(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Ht = le({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function kn(n, r) {
    if (r) {
      if (Ht[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(k(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(k(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(k(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(k(62));
    }
  }
  function hn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var yr = null;
  function It(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var br = null, Pt = null, Vt = null;
  function Ja(n) {
    if (n = os(n)) {
      if (typeof br != "function")
        throw Error(k(280));
      var r = n.stateNode;
      r && (r = Le(r), br(n.stateNode, n.type, r));
    }
  }
  function _a(n) {
    Pt ? Vt ? Vt.push(n) : Vt = [n] : Pt = n;
  }
  function ol() {
    if (Pt) {
      var n = Pt, r = Vt;
      if (Vt = Pt = null, Ja(n), r)
        for (n = 0; n < r.length; n++)
          Ja(r[n]);
    }
  }
  function Ql(n, r) {
    return n(r);
  }
  function Mu() {
  }
  var Mi = !1;
  function sl(n, r, l) {
    if (Mi)
      return n(r, l);
    Mi = !0;
    try {
      return Ql(n, r, l);
    } finally {
      Mi = !1, (Pt !== null || Vt !== null) && (Mu(), ol());
    }
  }
  function pa(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Le(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(k(231, r, typeof l));
    return l;
  }
  var di = !1;
  if (st)
    try {
      var va = {};
      Object.defineProperty(va, "passive", { get: function() {
        di = !0;
      } }), window.addEventListener("test", va, va), window.removeEventListener("test", va, va);
    } catch {
      di = !1;
    }
  function Za(n, r, l, o, c, d, m, E, T) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (W) {
      this.onError(W);
    }
  }
  var xr = !1, ha = null, pi = !1, vi = null, R = { onError: function(n) {
    xr = !0, ha = n;
  } };
  function I(n, r, l, o, c, d, m, E, T) {
    xr = !1, ha = null, Za.apply(R, arguments);
  }
  function q(n, r, l, o, c, d, m, E, T) {
    if (I.apply(this, arguments), xr) {
      if (xr) {
        var U = ha;
        xr = !1, ha = null;
      } else
        throw Error(k(198));
      pi || (pi = !0, vi = U);
    }
  }
  function we(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function vt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Ct(n) {
    if (we(n) !== n)
      throw Error(k(188));
  }
  function Fe(n) {
    var r = n.alternate;
    if (!r) {
      if (r = we(n), r === null)
        throw Error(k(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return Ct(c), n;
          if (d === o)
            return Ct(c), r;
          d = d.sibling;
        }
        throw Error(k(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m)
            throw Error(k(189));
        }
      }
      if (l.alternate !== o)
        throw Error(k(190));
    }
    if (l.tag !== 3)
      throw Error(k(188));
    return l.stateNode.current === l ? n : r;
  }
  function ut(n) {
    return n = Fe(n), n !== null ? zn(n) : null;
  }
  function zn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = zn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Xt = V.unstable_scheduleCallback, an = V.unstable_cancelCallback, gr = V.unstable_shouldYield, hi = V.unstable_requestPaint, Lt = V.unstable_now, Gn = V.unstable_getCurrentPriorityLevel, _r = V.unstable_ImmediatePriority, ot = V.unstable_UserBlockingPriority, ka = V.unstable_NormalPriority, cl = V.unstable_LowPriority, Nu = V.unstable_IdlePriority, fl = null, Qr = null;
  function Io(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function")
      try {
        Qr.onCommitFiberRoot(fl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var kr = Math.clz32 ? Math.clz32 : Js, Qo = Math.log, Wo = Math.LN2;
  function Js(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Qo(n) / Wo | 0) | 0;
  }
  var zu = 64, dl = 4194304;
  function ei(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Dr(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = ei(E) : (d &= m, d !== 0 && (o = ei(d)));
    } else
      m = l & ~c, m !== 0 ? o = ei(m) : d !== 0 && (o = ei(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && (r & c) === 0 && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if ((o & 4) !== 0 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - kr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function pl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function vl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - kr(d), E = 1 << m, T = c[m];
      T === -1 ? ((E & l) === 0 || (E & o) !== 0) && (c[m] = pl(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function hl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Uu() {
    var n = zu;
    return zu <<= 1, (zu & 4194240) === 0 && (zu = 64), n;
  }
  function Au(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Ni(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - kr(r), n[r] = l;
  }
  function If(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - kr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function mi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Mt = 0;
  function Fu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Wl, ju, Rt, Hu, Pu, Xe = !1, Gl = [], mn = null, Wr = null, Or = null, ml = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), Bt = [], Zs = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Gr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        mn = null;
        break;
      case "dragenter":
      case "dragleave":
        Wr = null;
        break;
      case "mouseover":
      case "mouseout":
        Or = null;
        break;
      case "pointerover":
      case "pointerout":
        ml.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(r.pointerId);
    }
  }
  function qn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = os(r), r !== null && ju(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function yi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return mn = qn(mn, n, r, l, o, c), !0;
      case "dragenter":
        return Wr = qn(Wr, n, r, l, o, c), !0;
      case "mouseover":
        return Or = qn(Or, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return ml.set(d, qn(ml.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Cn.set(d, qn(Cn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function ec(n) {
    var r = Ma(n.target);
    if (r !== null) {
      var l = we(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = vt(l), r !== null) {
            n.blockedOn = r, Pu(n.priority, function() {
              Rt(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function zi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Bu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        yr = o, l.target.dispatchEvent(o), yr = null;
      } else
        return r = os(l), r !== null && ju(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function yl(n, r, l) {
    zi(n) && l.delete(r);
  }
  function tc() {
    Xe = !1, mn !== null && zi(mn) && (mn = null), Wr !== null && zi(Wr) && (Wr = null), Or !== null && zi(Or) && (Or = null), ml.forEach(yl), Cn.forEach(yl);
  }
  function Da(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Xe || (Xe = !0, V.unstable_scheduleCallback(V.unstable_NormalPriority, tc)));
  }
  function gl(n) {
    function r(c) {
      return Da(c, n);
    }
    if (0 < Gl.length) {
      Da(Gl[0], n);
      for (var l = 1; l < Gl.length; l++) {
        var o = Gl[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (mn !== null && Da(mn, n), Wr !== null && Da(Wr, n), Or !== null && Da(Or, n), ml.forEach(r), Cn.forEach(r), l = 0; l < Bt.length; l++)
      o = Bt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Bt.length && (l = Bt[0], l.blockedOn === null); )
      ec(l), l.blockedOn === null && Bt.shift();
  }
  var Ui = dt.ReactCurrentBatchConfig, Oa = !0;
  function Vu(n, r, l, o) {
    var c = Mt, d = Ui.transition;
    Ui.transition = null;
    try {
      Mt = 1, El(n, r, l, o);
    } finally {
      Mt = c, Ui.transition = d;
    }
  }
  function Sl(n, r, l, o) {
    var c = Mt, d = Ui.transition;
    Ui.transition = null;
    try {
      Mt = 4, El(n, r, l, o);
    } finally {
      Mt = c, Ui.transition = d;
    }
  }
  function El(n, r, l, o) {
    if (Oa) {
      var c = Bu(n, r, l, o);
      if (c === null)
        cc(n, r, o, ql, l), Gr(n, o);
      else if (yi(c, n, r, l, o))
        o.stopPropagation();
      else if (Gr(n, o), r & 4 && -1 < Zs.indexOf(n)) {
        for (; c !== null; ) {
          var d = os(c);
          if (d !== null && Wl(d), d = Bu(n, r, l, o), d === null && cc(n, r, o, ql, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        cc(n, r, o, null, l);
    }
  }
  var ql = null;
  function Bu(n, r, l, o) {
    if (ql = null, n = It(o), n = Ma(n), n !== null)
      if (r = we(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = vt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return ql = n, null;
  }
  function Go(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Gn()) {
          case _r:
            return 1;
          case ot:
            return 4;
          case ka:
          case cl:
            return 16;
          case Nu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ti = null, h = null, C = null;
  function z() {
    if (C)
      return C;
    var n, r = h, l = r.length, o, c = "value" in ti ? ti.value : ti.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function K() {
    return !0;
  }
  function je() {
    return !1;
  }
  function ue(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n)
        n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? K : je, this.isPropagationStopped = je, this;
    }
    return le(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = K);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = K);
    }, persist: function() {
    }, isPersistent: K }), r;
  }
  var ze = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ht = ue(ze), Dt = le({}, ze, { view: 0, detail: 0 }), Kt = ue(Dt), Qt, Jt, tn, Tt = le({}, Dt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== tn && (tn && n.type === "mousemove" ? (Qt = n.screenX - tn.screenX, Jt = n.screenY - tn.screenY) : Jt = Qt = 0, tn = n), Qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Jt;
  } }), Ai = ue(Tt), $u = le({}, Tt, { dataTransfer: 0 }), qo = ue($u), Qf = le({}, Dt, { relatedTarget: 0 }), ni = ue(Qf), Xo = le({}, ze, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ko = ue(Xo), Wf = le({}, ze, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Im = ue(Wf), Qm = le({}, ze, { data: 0 }), Gf = ue(Qm), qf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Jp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Zp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ev(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Zp[n]) ? !!r[n] : !1;
  }
  function Xf() {
    return ev;
  }
  var Fi = le({}, Dt, { key: function(n) {
    if (n.key) {
      var r = qf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Jp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xf, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Wm = ue(Fi), Kf = le({}, Tt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), nc = ue(Kf), Jf = le({}, Dt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xf }), Gm = ue(Jf), rc = le({}, ze, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), tv = ue(rc), qr = le({}, Tt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ji = ue(qr), Un = [9, 13, 27, 32], ri = st && "CompositionEvent" in window, Xl = null;
  st && "documentMode" in document && (Xl = document.documentMode);
  var ac = st && "TextEvent" in window && !Xl, nv = st && (!ri || Xl && 8 < Xl && 11 >= Xl), Yu = String.fromCharCode(32), rv = !1;
  function av(n, r) {
    switch (n) {
      case "keyup":
        return Un.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ic(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Iu = !1;
  function qm(n, r) {
    switch (n) {
      case "compositionend":
        return ic(r);
      case "keypress":
        return r.which !== 32 ? null : (rv = !0, Yu);
      case "textInput":
        return n = r.data, n === Yu && rv ? null : n;
      default:
        return null;
    }
  }
  function Xm(n, r) {
    if (Iu)
      return n === "compositionend" || !ri && av(n, r) ? (n = z(), C = h = ti = null, Iu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return nv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var iv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function lv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!iv[n.type] : r === "textarea";
  }
  function uv(n, r, l, o) {
    _a(o), r = is(r, "onChange"), 0 < r.length && (l = new ht("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Jo = null, Qu = null;
  function Wu(n) {
    sc(n, 0);
  }
  function Gu(n) {
    var r = Xu(n);
    if (Vr(r))
      return n;
  }
  function ov(n, r) {
    if (n === "change")
      return r;
  }
  var Zf = !1;
  if (st) {
    var ed;
    if (st) {
      var td = "oninput" in document;
      if (!td) {
        var sv = document.createElement("div");
        sv.setAttribute("oninput", "return;"), td = typeof sv.oninput == "function";
      }
      ed = td;
    } else
      ed = !1;
    Zf = ed && (!document.documentMode || 9 < document.documentMode);
  }
  function cv() {
    Jo && (Jo.detachEvent("onpropertychange", fv), Qu = Jo = null);
  }
  function fv(n) {
    if (n.propertyName === "value" && Gu(Qu)) {
      var r = [];
      uv(r, Qu, n, It(n)), sl(Wu, r);
    }
  }
  function Km(n, r, l) {
    n === "focusin" ? (cv(), Jo = r, Qu = l, Jo.attachEvent("onpropertychange", fv)) : n === "focusout" && cv();
  }
  function Jm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Gu(Qu);
  }
  function Zm(n, r) {
    if (n === "click")
      return Gu(r);
  }
  function dv(n, r) {
    if (n === "input" || n === "change")
      return Gu(r);
  }
  function ey(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var La = typeof Object.is == "function" ? Object.is : ey;
  function Zo(n, r) {
    if (La(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!ne.call(r, c) || !La(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function pv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function vv(n, r) {
    var l = pv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = pv(l);
    }
  }
  function hv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? hv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function lc() {
    for (var n = window, r = pn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = pn(n.document);
    }
    return r;
  }
  function Hi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function uc(n) {
    var r = lc(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && hv(l.ownerDocument.documentElement, l)) {
      if (o !== null && Hi(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = vv(l, d);
          var m = vv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var mv = st && "documentMode" in document && 11 >= document.documentMode, ai = null, nd = null, es = null, rd = !1;
  function yv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    rd || ai == null || ai !== pn(o) || (o = ai, "selectionStart" in o && Hi(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), es && Zo(es, o) || (es = o, o = is(nd, "onSelect"), 0 < o.length && (r = new ht("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = ai)));
  }
  function oc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Kl = { animationend: oc("Animation", "AnimationEnd"), animationiteration: oc("Animation", "AnimationIteration"), animationstart: oc("Animation", "AnimationStart"), transitionend: oc("Transition", "TransitionEnd") }, ad = {}, id = {};
  st && (id = document.createElement("div").style, "AnimationEvent" in window || (delete Kl.animationend.animation, delete Kl.animationiteration.animation, delete Kl.animationstart.animation), "TransitionEvent" in window || delete Kl.transitionend.transition);
  function Xn(n) {
    if (ad[n])
      return ad[n];
    if (!Kl[n])
      return n;
    var r = Kl[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in id)
        return ad[n] = r[l];
    return n;
  }
  var ld = Xn("animationend"), gv = Xn("animationiteration"), Sv = Xn("animationstart"), Ev = Xn("transitionend"), Cv = /* @__PURE__ */ new Map(), Rv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Pi(n, r) {
    Cv.set(n, r), Qe(r, [n]);
  }
  for (var ts = 0; ts < Rv.length; ts++) {
    var Jl = Rv[ts], ty = Jl.toLowerCase(), ns = Jl[0].toUpperCase() + Jl.slice(1);
    Pi(ty, "on" + ns);
  }
  Pi(ld, "onAnimationEnd"), Pi(gv, "onAnimationIteration"), Pi(Sv, "onAnimationStart"), Pi("dblclick", "onDoubleClick"), Pi("focusin", "onFocus"), Pi("focusout", "onBlur"), Pi(Ev, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), Qe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Qe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Qe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Qe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Qe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Qe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ny = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function Tv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, q(o, r, void 0, n), n.currentTarget = null;
  }
  function sc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var E = o[m], T = E.instance, U = E.currentTarget;
            if (E = E.listener, T !== d && c.isPropagationStopped())
              break e;
            Tv(c, E, U), d = T;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (E = o[m], T = E.instance, U = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped())
              break e;
            Tv(c, E, U), d = T;
          }
      }
    }
    if (pi)
      throw n = vi, pi = !1, vi = null, n;
  }
  function Zt(n, r) {
    var l = r[pd];
    l === void 0 && (l = r[pd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (wv(r, n, 2, !1), l.add(o));
  }
  function Cl(n, r, l) {
    var o = 0;
    r && (o |= 4), wv(l, n, o, r);
  }
  var Vi = "_reactListening" + Math.random().toString(36).slice(2);
  function qu(n) {
    if (!n[Vi]) {
      n[Vi] = !0, Je.forEach(function(l) {
        l !== "selectionchange" && (ny.has(l) || Cl(l, !1, n), Cl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Vi] || (r[Vi] = !0, Cl("selectionchange", !1, r));
    }
  }
  function wv(n, r, l, o) {
    switch (Go(r)) {
      case 1:
        var c = Vu;
        break;
      case 4:
        c = Sl;
        break;
      default:
        c = El;
    }
    l = c.bind(null, r, l, n), c = void 0, !di || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function cc(n, r, l, o, c) {
    var d = o;
    if ((r & 1) === 0 && (r & 2) === 0 && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var E = o.stateNode.containerInfo;
            if (E === c || E.nodeType === 8 && E.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var T = m.tag;
                if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c))
                  return;
                m = m.return;
              }
            for (; E !== null; ) {
              if (m = Ma(E), m === null)
                return;
              if (T = m.tag, T === 5 || T === 6) {
                o = d = m;
                continue e;
              }
              E = E.parentNode;
            }
          }
          o = o.return;
        }
    sl(function() {
      var U = d, W = It(l), G = [];
      e: {
        var Q = Cv.get(n);
        if (Q !== void 0) {
          var fe = ht, ge = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              fe = Wm;
              break;
            case "focusin":
              ge = "focus", fe = ni;
              break;
            case "focusout":
              ge = "blur", fe = ni;
              break;
            case "beforeblur":
            case "afterblur":
              fe = ni;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              fe = Ai;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              fe = qo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              fe = Gm;
              break;
            case ld:
            case gv:
            case Sv:
              fe = Ko;
              break;
            case Ev:
              fe = tv;
              break;
            case "scroll":
              fe = Kt;
              break;
            case "wheel":
              fe = ji;
              break;
            case "copy":
            case "cut":
            case "paste":
              fe = Im;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              fe = nc;
          }
          var Ce = (r & 4) !== 0, Ln = !Ce && n === "scroll", D = Ce ? Q !== null ? Q + "Capture" : null : Q;
          Ce = [];
          for (var b = U, M; b !== null; ) {
            M = b;
            var J = M.stateNode;
            if (M.tag === 5 && J !== null && (M = J, D !== null && (J = pa(b, D), J != null && Ce.push(as(b, J, M)))), Ln)
              break;
            b = b.return;
          }
          0 < Ce.length && (Q = new fe(Q, ge, null, l, W), G.push({ event: Q, listeners: Ce }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (Q = n === "mouseover" || n === "pointerover", fe = n === "mouseout" || n === "pointerout", Q && l !== yr && (ge = l.relatedTarget || l.fromElement) && (Ma(ge) || ge[Bi]))
            break e;
          if ((fe || Q) && (Q = W.window === W ? W : (Q = W.ownerDocument) ? Q.defaultView || Q.parentWindow : window, fe ? (ge = l.relatedTarget || l.toElement, fe = U, ge = ge ? Ma(ge) : null, ge !== null && (Ln = we(ge), ge !== Ln || ge.tag !== 5 && ge.tag !== 6) && (ge = null)) : (fe = null, ge = U), fe !== ge)) {
            if (Ce = Ai, J = "onMouseLeave", D = "onMouseEnter", b = "mouse", (n === "pointerout" || n === "pointerover") && (Ce = nc, J = "onPointerLeave", D = "onPointerEnter", b = "pointer"), Ln = fe == null ? Q : Xu(fe), M = ge == null ? Q : Xu(ge), Q = new Ce(J, b + "leave", fe, l, W), Q.target = Ln, Q.relatedTarget = M, J = null, Ma(W) === U && (Ce = new Ce(D, b + "enter", ge, l, W), Ce.target = M, Ce.relatedTarget = Ln, J = Ce), Ln = J, fe && ge)
              t: {
                for (Ce = fe, D = ge, b = 0, M = Ce; M; M = Zl(M))
                  b++;
                for (M = 0, J = D; J; J = Zl(J))
                  M++;
                for (; 0 < b - M; )
                  Ce = Zl(Ce), b--;
                for (; 0 < M - b; )
                  D = Zl(D), M--;
                for (; b--; ) {
                  if (Ce === D || D !== null && Ce === D.alternate)
                    break t;
                  Ce = Zl(Ce), D = Zl(D);
                }
                Ce = null;
              }
            else
              Ce = null;
            fe !== null && ud(G, Q, fe, Ce, !1), ge !== null && Ln !== null && ud(G, Ln, ge, Ce, !0);
          }
        }
        e: {
          if (Q = U ? Xu(U) : window, fe = Q.nodeName && Q.nodeName.toLowerCase(), fe === "select" || fe === "input" && Q.type === "file")
            var Te = ov;
          else if (lv(Q))
            if (Zf)
              Te = dv;
            else {
              Te = Jm;
              var He = Km;
            }
          else
            (fe = Q.nodeName) && fe.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (Te = Zm);
          if (Te && (Te = Te(n, U))) {
            uv(G, Te, l, W);
            break e;
          }
          He && He(n, Q, U), n === "focusout" && (He = Q._wrapperState) && He.controlled && Q.type === "number" && $r(Q, "number", Q.value);
        }
        switch (He = U ? Xu(U) : window, n) {
          case "focusin":
            (lv(He) || He.contentEditable === "true") && (ai = He, nd = U, es = null);
            break;
          case "focusout":
            es = nd = ai = null;
            break;
          case "mousedown":
            rd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            rd = !1, yv(G, l, W);
            break;
          case "selectionchange":
            if (mv)
              break;
          case "keydown":
          case "keyup":
            yv(G, l, W);
        }
        var Se;
        if (ri)
          e: {
            switch (n) {
              case "compositionstart":
                var Ve = "onCompositionStart";
                break e;
              case "compositionend":
                Ve = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ve = "onCompositionUpdate";
                break e;
            }
            Ve = void 0;
          }
        else
          Iu ? av(n, l) && (Ve = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ve = "onCompositionStart");
        Ve && (nv && l.locale !== "ko" && (Iu || Ve !== "onCompositionStart" ? Ve === "onCompositionEnd" && Iu && (Se = z()) : (ti = W, h = "value" in ti ? ti.value : ti.textContent, Iu = !0)), He = is(U, Ve), 0 < He.length && (Ve = new Gf(Ve, n, null, l, W), G.push({ event: Ve, listeners: He }), Se ? Ve.data = Se : (Se = ic(l), Se !== null && (Ve.data = Se)))), (Se = ac ? qm(n, l) : Xm(n, l)) && (U = is(U, "onBeforeInput"), 0 < U.length && (W = new Gf("onBeforeInput", "beforeinput", null, l, W), G.push({ event: W, listeners: U }), W.data = Se));
      }
      sc(G, r);
    });
  }
  function as(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function is(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = pa(n, l), d != null && o.unshift(as(n, d, c)), d = pa(n, r), d != null && o.push(as(n, d, c))), n = n.return;
    }
    return o;
  }
  function Zl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function ud(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, U = E.stateNode;
      if (T !== null && T === o)
        break;
      E.tag === 5 && U !== null && (E = U, c ? (T = pa(l, d), T != null && m.unshift(as(l, T, E))) : c || (T = pa(l, d), T != null && m.push(as(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var od = /\r\n?/g, ry = /\u0000|\uFFFD/g;
  function sd(n) {
    return (typeof n == "string" ? n : "" + n).replace(od, `
`).replace(ry, "");
  }
  function fc(n, r, l) {
    if (r = sd(r), sd(n) !== r && l)
      throw Error(k(425));
  }
  function dc() {
  }
  var cd = null, eu = null;
  function ls(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var tu = typeof setTimeout == "function" ? setTimeout : void 0, bv = typeof clearTimeout == "function" ? clearTimeout : void 0, fd = typeof Promise == "function" ? Promise : void 0, dd = typeof queueMicrotask == "function" ? queueMicrotask : typeof fd < "u" ? function(n) {
    return fd.resolve(null).then(n).catch(ay);
  } : tu;
  function ay(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Rl(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), gl(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    gl(r);
  }
  function ii(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function us(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Tl = Math.random().toString(36).slice(2), gi = "__reactFiber$" + Tl, nu = "__reactProps$" + Tl, Bi = "__reactContainer$" + Tl, pd = "__reactEvents$" + Tl, iy = "__reactListeners$" + Tl, vd = "__reactHandles$" + Tl;
  function Ma(n) {
    var r = n[gi];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Bi] || l[gi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = us(n); n !== null; ) {
            if (l = n[gi])
              return l;
            n = us(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function os(n) {
    return n = n[gi] || n[Bi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Xu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(k(33));
  }
  function Le(n) {
    return n[nu] || null;
  }
  var wl = [], ln = -1;
  function rt(n) {
    return { current: n };
  }
  function Ft(n) {
    0 > ln || (n.current = wl[ln], wl[ln] = null, ln--);
  }
  function $t(n, r) {
    ln++, wl[ln] = n.current, n.current = r;
  }
  var Si = {}, Ge = rt(Si), Rn = rt(!1), Xr = Si;
  function Na(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Si;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function cn(n) {
    return n = n.childContextTypes, n != null;
  }
  function za() {
    Ft(Rn), Ft(Ge);
  }
  function bl(n, r, l) {
    if (Ge.current !== Si)
      throw Error(k(168));
    $t(Ge, r), $t(Rn, l);
  }
  function ss(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(k(108, Et(n) || "Unknown", c));
    return le({}, l, o);
  }
  function pc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Si, Xr = Ge.current, $t(Ge, n), $t(Rn, Rn.current), !0;
  }
  function xv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(k(169));
    l ? (n = ss(n, r, Xr), o.__reactInternalMemoizedMergedChildContext = n, Ft(Rn), Ft(Ge), $t(Ge, n)) : Ft(Rn), $t(Rn, l);
  }
  var ma = null, Kn = !1, cs = !1;
  function hd(n) {
    ma === null ? ma = [n] : ma.push(n);
  }
  function md(n) {
    Kn = !0, hd(n);
  }
  function Kr() {
    if (!cs && ma !== null) {
      cs = !0;
      var n = 0, r = Mt;
      try {
        var l = ma;
        for (Mt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ma = null, Kn = !1;
      } catch (c) {
        throw ma !== null && (ma = ma.slice(n + 1)), Xt(_r, Kr), c;
      } finally {
        Mt = r, cs = !1;
      }
    }
    return null;
  }
  var xl = [], Jr = 0, ru = null, Ku = 0, Zr = [], Sr = 0, Ua = null, rr = 1, $i = "";
  function ya(n, r) {
    xl[Jr++] = Ku, xl[Jr++] = ru, ru = n, Ku = r;
  }
  function yd(n, r, l) {
    Zr[Sr++] = rr, Zr[Sr++] = $i, Zr[Sr++] = Ua, Ua = n;
    var o = rr;
    n = $i;
    var c = 32 - kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, rr = 1 << 32 - kr(r) + c | l << c | o, $i = d + n;
    } else
      rr = 1 << d | l << c | o, $i = n;
  }
  function vc(n) {
    n.return !== null && (ya(n, 1), yd(n, 1, 0));
  }
  function gd(n) {
    for (; n === ru; )
      ru = xl[--Jr], xl[Jr] = null, Ku = xl[--Jr], xl[Jr] = null;
    for (; n === Ua; )
      Ua = Zr[--Sr], Zr[Sr] = null, $i = Zr[--Sr], Zr[Sr] = null, rr = Zr[--Sr], Zr[Sr] = null;
  }
  var ga = null, ea = null, un = !1, Aa = null;
  function Sd(n, r) {
    var l = Ya(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function _v(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ga = n, ea = ii(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ga = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Ua !== null ? { id: rr, overflow: $i } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ya(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ga = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function mc(n) {
    if (un) {
      var r = ea;
      if (r) {
        var l = r;
        if (!_v(n, r)) {
          if (hc(n))
            throw Error(k(418));
          r = ii(l.nextSibling);
          var o = ga;
          r && _v(n, r) ? Sd(o, l) : (n.flags = n.flags & -4097 | 2, un = !1, ga = n);
        }
      } else {
        if (hc(n))
          throw Error(k(418));
        n.flags = n.flags & -4097 | 2, un = !1, ga = n;
      }
    }
  }
  function kv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ga = n;
  }
  function yc(n) {
    if (n !== ga)
      return !1;
    if (!un)
      return kv(n), un = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ls(n.type, n.memoizedProps)), r && (r = ea)) {
      if (hc(n))
        throw Dv(), Error(k(418));
      for (; r; )
        Sd(n, r), r = ii(r.nextSibling);
    }
    if (kv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(k(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ea = ii(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ea = null;
      }
    } else
      ea = ga ? ii(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Dv() {
    for (var n = ea; n; )
      n = ii(n.nextSibling);
  }
  function yn() {
    ea = ga = null, un = !1;
  }
  function Ed(n) {
    Aa === null ? Aa = [n] : Aa.push(n);
  }
  var gc = dt.ReactCurrentBatchConfig;
  function au(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(k(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(k(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(k(284));
      if (!l._owner)
        throw Error(k(290, n));
    }
    return n;
  }
  function Ei(n, r) {
    throw n = Object.prototype.toString.call(r), Error(k(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Ov(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Sc(n) {
    function r(D, b) {
      if (n) {
        var M = D.deletions;
        M === null ? (D.deletions = [b], D.flags |= 16) : M.push(b);
      }
    }
    function l(D, b) {
      if (!n)
        return null;
      for (; b !== null; )
        r(D, b), b = b.sibling;
      return null;
    }
    function o(D, b) {
      for (D = /* @__PURE__ */ new Map(); b !== null; )
        b.key !== null ? D.set(b.key, b) : D.set(b.index, b), b = b.sibling;
      return D;
    }
    function c(D, b) {
      return D = zl(D, b), D.index = 0, D.sibling = null, D;
    }
    function d(D, b, M) {
      return D.index = M, n ? (M = D.alternate, M !== null ? (M = M.index, M < b ? (D.flags |= 2, b) : M) : (D.flags |= 2, b)) : (D.flags |= 1048576, b);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, b, M, J) {
      return b === null || b.tag !== 6 ? (b = uf(M, D.mode, J), b.return = D, b) : (b = c(b, M), b.return = D, b);
    }
    function T(D, b, M, J) {
      var Te = M.type;
      return Te === $e ? W(D, b, M.props.children, J, M.key) : b !== null && (b.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === kt && Ov(Te) === b.type) ? (J = c(b, M.props), J.ref = au(D, b, M), J.return = D, J) : (J = af(M.type, M.key, M.props, null, D.mode, J), J.ref = au(D, b, M), J.return = D, J);
    }
    function U(D, b, M, J) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== M.containerInfo || b.stateNode.implementation !== M.implementation ? (b = ks(M, D.mode, J), b.return = D, b) : (b = c(b, M.children || []), b.return = D, b);
    }
    function W(D, b, M, J, Te) {
      return b === null || b.tag !== 7 ? (b = Su(M, D.mode, J, Te), b.return = D, b) : (b = c(b, M), b.return = D, b);
    }
    function G(D, b, M) {
      if (typeof b == "string" && b !== "" || typeof b == "number")
        return b = uf("" + b, D.mode, M), b.return = D, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Oe:
            return M = af(b.type, b.key, b.props, null, D.mode, M), M.ref = au(D, null, b), M.return = D, M;
          case pt:
            return b = ks(b, D.mode, M), b.return = D, b;
          case kt:
            var J = b._init;
            return G(D, J(b._payload), M);
        }
        if (Wn(b) || _e(b))
          return b = Su(b, D.mode, M, null), b.return = D, b;
        Ei(D, b);
      }
      return null;
    }
    function Q(D, b, M, J) {
      var Te = b !== null ? b.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number")
        return Te !== null ? null : E(D, b, "" + M, J);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Oe:
            return M.key === Te ? T(D, b, M, J) : null;
          case pt:
            return M.key === Te ? U(D, b, M, J) : null;
          case kt:
            return Te = M._init, Q(
              D,
              b,
              Te(M._payload),
              J
            );
        }
        if (Wn(M) || _e(M))
          return Te !== null ? null : W(D, b, M, J, null);
        Ei(D, M);
      }
      return null;
    }
    function fe(D, b, M, J, Te) {
      if (typeof J == "string" && J !== "" || typeof J == "number")
        return D = D.get(M) || null, E(b, D, "" + J, Te);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case Oe:
            return D = D.get(J.key === null ? M : J.key) || null, T(b, D, J, Te);
          case pt:
            return D = D.get(J.key === null ? M : J.key) || null, U(b, D, J, Te);
          case kt:
            var He = J._init;
            return fe(D, b, M, He(J._payload), Te);
        }
        if (Wn(J) || _e(J))
          return D = D.get(M) || null, W(b, D, J, Te, null);
        Ei(b, J);
      }
      return null;
    }
    function ge(D, b, M, J) {
      for (var Te = null, He = null, Se = b, Ve = b = 0, Yn = null; Se !== null && Ve < M.length; Ve++) {
        Se.index > Ve ? (Yn = Se, Se = null) : Yn = Se.sibling;
        var Nt = Q(D, Se, M[Ve], J);
        if (Nt === null) {
          Se === null && (Se = Yn);
          break;
        }
        n && Se && Nt.alternate === null && r(D, Se), b = d(Nt, b, Ve), He === null ? Te = Nt : He.sibling = Nt, He = Nt, Se = Yn;
      }
      if (Ve === M.length)
        return l(D, Se), un && ya(D, Ve), Te;
      if (Se === null) {
        for (; Ve < M.length; Ve++)
          Se = G(D, M[Ve], J), Se !== null && (b = d(Se, b, Ve), He === null ? Te = Se : He.sibling = Se, He = Se);
        return un && ya(D, Ve), Te;
      }
      for (Se = o(D, Se); Ve < M.length; Ve++)
        Yn = fe(Se, D, Ve, M[Ve], J), Yn !== null && (n && Yn.alternate !== null && Se.delete(Yn.key === null ? Ve : Yn.key), b = d(Yn, b, Ve), He === null ? Te = Yn : He.sibling = Yn, He = Yn);
      return n && Se.forEach(function(Xi) {
        return r(D, Xi);
      }), un && ya(D, Ve), Te;
    }
    function Ce(D, b, M, J) {
      var Te = _e(M);
      if (typeof Te != "function")
        throw Error(k(150));
      if (M = Te.call(M), M == null)
        throw Error(k(151));
      for (var He = Te = null, Se = b, Ve = b = 0, Yn = null, Nt = M.next(); Se !== null && !Nt.done; Ve++, Nt = M.next()) {
        Se.index > Ve ? (Yn = Se, Se = null) : Yn = Se.sibling;
        var Xi = Q(D, Se, Nt.value, J);
        if (Xi === null) {
          Se === null && (Se = Yn);
          break;
        }
        n && Se && Xi.alternate === null && r(D, Se), b = d(Xi, b, Ve), He === null ? Te = Xi : He.sibling = Xi, He = Xi, Se = Yn;
      }
      if (Nt.done)
        return l(
          D,
          Se
        ), un && ya(D, Ve), Te;
      if (Se === null) {
        for (; !Nt.done; Ve++, Nt = M.next())
          Nt = G(D, Nt.value, J), Nt !== null && (b = d(Nt, b, Ve), He === null ? Te = Nt : He.sibling = Nt, He = Nt);
        return un && ya(D, Ve), Te;
      }
      for (Se = o(D, Se); !Nt.done; Ve++, Nt = M.next())
        Nt = fe(Se, D, Ve, Nt.value, J), Nt !== null && (n && Nt.alternate !== null && Se.delete(Nt.key === null ? Ve : Nt.key), b = d(Nt, b, Ve), He === null ? Te = Nt : He.sibling = Nt, He = Nt);
      return n && Se.forEach(function(Ty) {
        return r(D, Ty);
      }), un && ya(D, Ve), Te;
    }
    function Ln(D, b, M, J) {
      if (typeof M == "object" && M !== null && M.type === $e && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Oe:
            e: {
              for (var Te = M.key, He = b; He !== null; ) {
                if (He.key === Te) {
                  if (Te = M.type, Te === $e) {
                    if (He.tag === 7) {
                      l(D, He.sibling), b = c(He, M.props.children), b.return = D, D = b;
                      break e;
                    }
                  } else if (He.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === kt && Ov(Te) === He.type) {
                    l(D, He.sibling), b = c(He, M.props), b.ref = au(D, He, M), b.return = D, D = b;
                    break e;
                  }
                  l(D, He);
                  break;
                } else
                  r(D, He);
                He = He.sibling;
              }
              M.type === $e ? (b = Su(M.props.children, D.mode, J, M.key), b.return = D, D = b) : (J = af(M.type, M.key, M.props, null, D.mode, J), J.ref = au(D, b, M), J.return = D, D = J);
            }
            return m(D);
          case pt:
            e: {
              for (He = M.key; b !== null; ) {
                if (b.key === He)
                  if (b.tag === 4 && b.stateNode.containerInfo === M.containerInfo && b.stateNode.implementation === M.implementation) {
                    l(D, b.sibling), b = c(b, M.children || []), b.return = D, D = b;
                    break e;
                  } else {
                    l(D, b);
                    break;
                  }
                else
                  r(D, b);
                b = b.sibling;
              }
              b = ks(M, D.mode, J), b.return = D, D = b;
            }
            return m(D);
          case kt:
            return He = M._init, Ln(D, b, He(M._payload), J);
        }
        if (Wn(M))
          return ge(D, b, M, J);
        if (_e(M))
          return Ce(D, b, M, J);
        Ei(D, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, b !== null && b.tag === 6 ? (l(D, b.sibling), b = c(b, M), b.return = D, D = b) : (l(D, b), b = uf(M, D.mode, J), b.return = D, D = b), m(D)) : l(D, b);
    }
    return Ln;
  }
  var Ju = Sc(!0), Lv = Sc(!1), Yi = rt(null), Pn = null, ae = null, Fa = null;
  function Sa() {
    Fa = ae = Pn = null;
  }
  function Cd(n) {
    var r = Yi.current;
    Ft(Yi), n._currentValue = r;
  }
  function Rd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function Zu(n, r) {
    Pn = n, Fa = ae = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (ra = !0), n.firstContext = null);
  }
  function ja(n) {
    var r = n._currentValue;
    if (Fa !== n)
      if (n = { context: n, memoizedValue: r, next: null }, ae === null) {
        if (Pn === null)
          throw Error(k(308));
        ae = n, Pn.dependencies = { lanes: 0, firstContext: n };
      } else
        ae = ae.next = n;
    return r;
  }
  var iu = null;
  function An(n) {
    iu === null ? iu = [n] : iu.push(n);
  }
  function Mv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, An(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ii(n, o);
  }
  function Ii(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var _l = !1;
  function Ec(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function eo(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ta(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function kl(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, (gt & 2) !== 0) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ii(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, An(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ii(n, l);
  }
  function Cc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, mi(n, l);
    }
  }
  function Nv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Rc(n, r, l, o) {
    var c = n.updateQueue;
    _l = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, U = T.next;
      T.next = null, m === null ? d = U : m.next = U, m = T;
      var W = n.alternate;
      W !== null && (W = W.updateQueue, E = W.lastBaseUpdate, E !== m && (E === null ? W.firstBaseUpdate = U : E.next = U, W.lastBaseUpdate = T));
    }
    if (d !== null) {
      var G = c.baseState;
      m = 0, W = U = T = null, E = d;
      do {
        var Q = E.lane, fe = E.eventTime;
        if ((o & Q) === Q) {
          W !== null && (W = W.next = {
            eventTime: fe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ge = n, Ce = E;
            switch (Q = r, fe = l, Ce.tag) {
              case 1:
                if (ge = Ce.payload, typeof ge == "function") {
                  G = ge.call(fe, G, Q);
                  break e;
                }
                G = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = Ce.payload, Q = typeof ge == "function" ? ge.call(fe, G, Q) : ge, Q == null)
                  break e;
                G = le({}, G, Q);
                break e;
              case 2:
                _l = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Q = c.effects, Q === null ? c.effects = [E] : Q.push(E));
        } else
          fe = { eventTime: fe, lane: Q, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, W === null ? (U = W = fe, T = G) : W = W.next = fe, m |= Q;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          Q = E, E = Q.next, Q.next = null, c.lastBaseUpdate = Q, c.shared.pending = null;
        }
      } while (1);
      if (W === null && (T = G), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = W, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      hu |= m, n.lanes = m, n.memoizedState = G;
    }
  }
  function zv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(k(191, c));
          c.call(o);
        }
      }
  }
  var fs = {}, li = rt(fs), to = rt(fs), ds = rt(fs);
  function lu(n) {
    if (n === fs)
      throw Error(k(174));
    return n;
  }
  function Td(n, r) {
    switch ($t(ds, r), $t(to, n), $t(li, fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : vn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = vn(r, n);
    }
    Ft(li), $t(li, r);
  }
  function no() {
    Ft(li), Ft(to), Ft(ds);
  }
  function Uv(n) {
    lu(ds.current);
    var r = lu(li.current), l = vn(r, n.type);
    r !== l && ($t(to, n), $t(li, l));
  }
  function wd(n) {
    to.current === n && (Ft(li), Ft(to));
  }
  var fn = rt(0);
  function Tc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var wc = [];
  function bd() {
    for (var n = 0; n < wc.length; n++)
      wc[n]._workInProgressVersionPrimary = null;
    wc.length = 0;
  }
  var bc = dt.ReactCurrentDispatcher, ps = dt.ReactCurrentBatchConfig, Re = 0, be = null, qe = null, mt = null, Ea = !1, ro = !1, vs = 0, ly = 0;
  function Er() {
    throw Error(k(321));
  }
  function hs(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!La(n[l], r[l]))
        return !1;
    return !0;
  }
  function Y(n, r, l, o, c, d) {
    if (Re = d, be = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, bc.current = n === null || n.memoizedState === null ? uy : nn, n = l(o, c), ro) {
      d = 0;
      do {
        if (ro = !1, vs = 0, 25 <= d)
          throw Error(k(301));
        d += 1, mt = qe = null, r.updateQueue = null, bc.current = Pc, n = l(o, c);
      } while (ro);
    }
    if (bc.current = Cr, r = qe !== null && qe.next !== null, Re = 0, mt = qe = be = null, Ea = !1, r)
      throw Error(k(300));
    return n;
  }
  function Fn() {
    var n = vs !== 0;
    return vs = 0, n;
  }
  function De() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return mt === null ? be.memoizedState = mt = n : mt = mt.next = n, mt;
  }
  function ar() {
    if (qe === null) {
      var n = be.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = qe.next;
    var r = mt === null ? be.memoizedState : mt.next;
    if (r !== null)
      mt = r, qe = n;
    else {
      if (n === null)
        throw Error(k(310));
      qe = n, n = { memoizedState: qe.memoizedState, baseState: qe.baseState, baseQueue: qe.baseQueue, queue: qe.queue, next: null }, mt === null ? be.memoizedState = mt = n : mt = mt.next = n;
    }
    return mt;
  }
  function Ca(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Qi(n) {
    var r = ar(), l = r.queue;
    if (l === null)
      throw Error(k(311));
    l.lastRenderedReducer = n;
    var o = qe, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, U = d;
      do {
        var W = U.lane;
        if ((Re & W) === W)
          T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var G = {
            lane: W,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = G, m = o) : T = T.next = G, be.lanes |= W, hu |= W;
        }
        U = U.next;
      } while (U !== null && U !== d);
      T === null ? m = o : T.next = E, La(o, r.memoizedState) || (ra = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, be.lanes |= d, hu |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ha(n) {
    var r = ar(), l = r.queue;
    if (l === null)
      throw Error(k(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      La(d, r.memoizedState) || (ra = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function ao() {
  }
  function uu(n, r) {
    var l = be, o = ar(), c = r(), d = !La(o.memoizedState, c);
    if (d && (o.memoizedState = c, ra = !0), o = o.queue, ms(_c.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || mt !== null && mt.memoizedState.tag & 1) {
      if (l.flags |= 2048, ou(9, xc.bind(null, l, o, c, r), void 0, null), wn === null)
        throw Error(k(349));
      (Re & 30) !== 0 || io(l, r, c);
    }
    return c;
  }
  function io(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = be.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, be.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function xc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, kc(r) && Dc(n);
  }
  function _c(n, r, l) {
    return l(function() {
      kc(r) && Dc(n);
    });
  }
  function kc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !La(n, l);
    } catch {
      return !0;
    }
  }
  function Dc(n) {
    var r = Ii(n, 1);
    r !== null && gn(r, n, 1, -1);
  }
  function Oc(n) {
    var r = De();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ca, lastRenderedState: n }, r.queue = n, n = n.dispatch = ys.bind(null, be, n), [r.memoizedState, n];
  }
  function ou(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = be.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, be.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Lc() {
    return ar().memoizedState;
  }
  function lo(n, r, l, o) {
    var c = De();
    be.flags |= n, c.memoizedState = ou(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function uo(n, r, l, o) {
    var c = ar();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (qe !== null) {
      var m = qe.memoizedState;
      if (d = m.destroy, o !== null && hs(o, m.deps)) {
        c.memoizedState = ou(r, l, d, o);
        return;
      }
    }
    be.flags |= n, c.memoizedState = ou(1 | r, l, d, o);
  }
  function Mc(n, r) {
    return lo(8390656, 8, n, r);
  }
  function ms(n, r) {
    return uo(2048, 8, n, r);
  }
  function Nc(n, r) {
    return uo(4, 2, n, r);
  }
  function zc(n, r) {
    return uo(4, 4, n, r);
  }
  function Uc(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Ac(n, r, l) {
    return l = l != null ? l.concat([n]) : null, uo(4, 4, Uc.bind(null, r, n), l);
  }
  function oo() {
  }
  function su(n, r) {
    var l = ar();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && hs(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Fc(n, r) {
    var l = ar();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && hs(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function jc(n, r, l) {
    return (Re & 21) === 0 ? (n.baseState && (n.baseState = !1, ra = !0), n.memoizedState = l) : (La(l, r) || (l = Uu(), be.lanes |= l, hu |= l, n.baseState = !0), r);
  }
  function xd(n, r) {
    var l = Mt;
    Mt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = ps.transition;
    ps.transition = {};
    try {
      n(!1), r();
    } finally {
      Mt = l, ps.transition = o;
    }
  }
  function Hc() {
    return ar().memoizedState;
  }
  function Av(n, r, l) {
    var o = qi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, _d(n))
      so(r, l);
    else if (l = Mv(n, r, l, o), l !== null) {
      var c = er();
      gn(l, n, o, c), Dl(l, r, o);
    }
  }
  function ys(n, r, l) {
    var o = qi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (_d(n))
      so(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, E = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = E, La(E, m)) {
            var T = r.interleaved;
            T === null ? (c.next = c, An(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Mv(n, r, c, o), l !== null && (c = er(), gn(l, n, o, c), Dl(l, r, o));
    }
  }
  function _d(n) {
    var r = n.alternate;
    return n === be || r !== null && r === be;
  }
  function so(n, r) {
    ro = Ea = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Dl(n, r, l) {
    if ((l & 4194240) !== 0) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, mi(n, l);
    }
  }
  var Cr = { readContext: ja, useCallback: Er, useContext: Er, useEffect: Er, useImperativeHandle: Er, useInsertionEffect: Er, useLayoutEffect: Er, useMemo: Er, useReducer: Er, useRef: Er, useState: Er, useDebugValue: Er, useDeferredValue: Er, useTransition: Er, useMutableSource: Er, useSyncExternalStore: Er, useId: Er, unstable_isNewReconciler: !1 }, uy = { readContext: ja, useCallback: function(n, r) {
    return De().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: ja, useEffect: Mc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, lo(
      4194308,
      4,
      Uc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return lo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return lo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = De();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = De();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Av.bind(null, be, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = De();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Oc, useDebugValue: oo, useDeferredValue: function(n) {
    return De().memoizedState = n;
  }, useTransition: function() {
    var n = Oc(!1), r = n[0];
    return n = xd.bind(null, n[1]), De().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = be, c = De();
    if (un) {
      if (l === void 0)
        throw Error(k(407));
      l = l();
    } else {
      if (l = r(), wn === null)
        throw Error(k(349));
      (Re & 30) !== 0 || io(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Mc(_c.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, ou(9, xc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = De(), r = wn.identifierPrefix;
    if (un) {
      var l = $i, o = rr;
      l = (o & ~(1 << 32 - kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = vs++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = ly++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, nn = {
    readContext: ja,
    useCallback: su,
    useContext: ja,
    useEffect: ms,
    useImperativeHandle: Ac,
    useInsertionEffect: Nc,
    useLayoutEffect: zc,
    useMemo: Fc,
    useReducer: Qi,
    useRef: Lc,
    useState: function() {
      return Qi(Ca);
    },
    useDebugValue: oo,
    useDeferredValue: function(n) {
      var r = ar();
      return jc(r, qe.memoizedState, n);
    },
    useTransition: function() {
      var n = Qi(Ca)[0], r = ar().memoizedState;
      return [n, r];
    },
    useMutableSource: ao,
    useSyncExternalStore: uu,
    useId: Hc,
    unstable_isNewReconciler: !1
  }, Pc = { readContext: ja, useCallback: su, useContext: ja, useEffect: ms, useImperativeHandle: Ac, useInsertionEffect: Nc, useLayoutEffect: zc, useMemo: Fc, useReducer: Ha, useRef: Lc, useState: function() {
    return Ha(Ca);
  }, useDebugValue: oo, useDeferredValue: function(n) {
    var r = ar();
    return qe === null ? r.memoizedState = n : jc(r, qe.memoizedState, n);
  }, useTransition: function() {
    var n = Ha(Ca)[0], r = ar().memoizedState;
    return [n, r];
  }, useMutableSource: ao, useSyncExternalStore: uu, useId: Hc, unstable_isNewReconciler: !1 };
  function na(n, r) {
    if (n && n.defaultProps) {
      r = le({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function cu(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : le({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var fu = { isMounted: function(n) {
    return (n = n._reactInternals) ? we(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = er(), c = qi(n), d = ta(o, c);
    d.payload = r, l != null && (d.callback = l), r = kl(n, d, c), r !== null && (gn(r, n, c, o), Cc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = er(), c = qi(n), d = ta(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = kl(n, d, c), r !== null && (gn(r, n, c, o), Cc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = er(), o = qi(n), c = ta(l, o);
    c.tag = 2, r != null && (c.callback = r), r = kl(n, c, o), r !== null && (gn(r, n, o, l), Cc(r, n, o));
  } };
  function Fv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Zo(l, o) || !Zo(c, d) : !0;
  }
  function jv(n, r, l) {
    var o = !1, c = Si, d = r.contextType;
    return typeof d == "object" && d !== null ? d = ja(d) : (c = cn(r) ? Xr : Ge.current, o = r.contextTypes, d = (o = o != null) ? Na(n, c) : Si), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = fu, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Hv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && fu.enqueueReplaceState(r, r.state, null);
  }
  function kd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Ec(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = ja(d) : (d = cn(r) ? Xr : Ge.current, c.context = Na(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (cu(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && fu.enqueueReplaceState(c, c.state, null), Rc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ol(n, r) {
    try {
      var l = "", o = r;
      do
        l += it(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Dd(n, r, l) {
    return { value: n, source: null, stack: l != null ? l : null, digest: r != null ? r : null };
  }
  function gs(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Pv = typeof WeakMap == "function" ? WeakMap : Map;
  function Vv(n, r, l) {
    l = ta(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Jc || (Jc = !0, jd = o), gs(n, r);
    }, l;
  }
  function Bv(n, r, l) {
    l = ta(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        gs(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      gs(n, r), typeof o != "function" && (Ba === null ? Ba = /* @__PURE__ */ new Set([this]) : Ba.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Ss(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Pv();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = yy.bind(null, n, r, l), r.then(n, n));
  }
  function $v(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Od(n, r, l, o, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ta(-1, 1), r.tag = 2, kl(l, r, 1))), l.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var Yv = dt.ReactCurrentOwner, ra = !1;
  function Dn(n, r, l, o) {
    r.child = n === null ? Lv(r, null, l, o) : Ju(r, n.child, l, o);
  }
  function co(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return Zu(r, c), o = Y(n, r, l, o, d, c), l = Fn(), n !== null && !ra ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, On(n, r, c)) : (un && l && vc(r), r.flags |= 1, Dn(n, r, o, c), r.child);
  }
  function Ll(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !$d(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Vc(n, r, d, o, c)) : (n = af(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zo, l(m, o) && n.ref === r.ref)
        return On(n, r, c);
    }
    return r.flags |= 1, n = zl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Vc(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Zo(d, o) && n.ref === r.ref)
        if (ra = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          (n.flags & 131072) !== 0 && (ra = !0);
        else
          return r.lanes = n.lanes, On(n, r, c);
    }
    return tt(n, r, l, o, c);
  }
  function aa(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if ((r.mode & 1) === 0)
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $t(Co, ia), ia |= l;
      else {
        if ((l & 1073741824) === 0)
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, $t(Co, ia), ia |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, $t(Co, ia), ia |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, $t(Co, ia), ia |= o;
    return Dn(n, r, c, l), r.child;
  }
  function du(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function tt(n, r, l, o, c) {
    var d = cn(l) ? Xr : Ge.current;
    return d = Na(r, d), Zu(r, c), l = Y(n, r, l, o, d, c), o = Fn(), n !== null && !ra ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, On(n, r, c)) : (un && o && vc(r), r.flags |= 1, Dn(n, r, l, c), r.child);
  }
  function Es(n, r, l, o, c) {
    if (cn(l)) {
      var d = !0;
      pc(r);
    } else
      d = !1;
    if (Zu(r, c), r.stateNode === null)
      Rs(n, r), jv(r, l, o), kd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = ja(U) : (U = cn(l) ? Xr : Ge.current, U = Na(r, U));
      var W = l.getDerivedStateFromProps, G = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      G || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Hv(r, m, o, U), _l = !1;
      var Q = r.memoizedState;
      m.state = Q, Rc(r, o, m, c), T = r.memoizedState, E !== o || Q !== T || Rn.current || _l ? (typeof W == "function" && (cu(r, l, W, o), T = r.memoizedState), (E = _l || Fv(r, l, E, o, Q, T, U)) ? (G || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, eo(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : na(r.type, E), m.props = U, G = r.pendingProps, Q = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = ja(T) : (T = cn(l) ? Xr : Ge.current, T = Na(r, T));
      var fe = l.getDerivedStateFromProps;
      (W = typeof fe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== G || Q !== T) && Hv(r, m, o, T), _l = !1, Q = r.memoizedState, m.state = Q, Rc(r, o, m, c);
      var ge = r.memoizedState;
      E !== G || Q !== ge || Rn.current || _l ? (typeof fe == "function" && (cu(r, l, fe, o), ge = r.memoizedState), (U = _l || Fv(r, l, U, o, Q, ge, T) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ge, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ge, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ge), m.props = o, m.state = ge, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Bc(n, r, l, o, d, c);
  }
  function Bc(n, r, l, o, c, d) {
    du(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && xv(r, l, !1), On(n, r, d);
    o = r.stateNode, Yv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Ju(r, n.child, null, d), r.child = Ju(r, null, E, d)) : Dn(n, r, E, d), r.memoizedState = o.state, c && xv(r, l, !0), r.child;
  }
  function oy(n) {
    var r = n.stateNode;
    r.pendingContext ? bl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && bl(n, r.context, !1), Td(n, r.containerInfo);
  }
  function Iv(n, r, l, o, c) {
    return yn(), Ed(c), r.flags |= 256, Dn(n, r, l, o), r.child;
  }
  var Cs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function pu(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Qv(n, r, l) {
    var o = r.pendingProps, c = fn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), $t(fn, c & 1), n === null)
      return mc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, (o & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = lf(m, o, 0, null), n = Su(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = pu(l), r.memoizedState = Cs, n) : $c(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null))
      return Ld(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return (m & 1) === 0 && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = zl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = zl(E, d) : (d = Su(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? pu(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Cs, o;
    }
    return d = n.child, n = d.sibling, o = zl(d, { mode: "visible", children: o.children }), (r.mode & 1) === 0 && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function $c(n, r) {
    return r = lf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Yc(n, r, l, o) {
    return o !== null && Ed(o), Ju(r, n.child, null, l), n = $c(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Ld(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Dd(Error(k(422))), Yc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = lf({ mode: "visible", children: o.children }, c, 0, null), d = Su(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, (r.mode & 1) !== 0 && Ju(r, n.child, null, m), r.child.memoizedState = pu(m), r.memoizedState = Cs, d);
    if ((r.mode & 1) === 0)
      return Yc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var E = o.dgst;
      return o = E, d = Error(k(419)), o = Dd(d, o, void 0), Yc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, ra || E) {
      if (o = wn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (o.suspendedLanes | m)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ii(n, c), gn(o, n, c, -1));
      }
      return _s(), o = Dd(Error(k(421))), Yc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Bd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ea = ii(c.nextSibling), ga = r, un = !0, Aa = null, n !== null && (Zr[Sr++] = rr, Zr[Sr++] = $i, Zr[Sr++] = Ua, rr = n.id, $i = n.overflow, Ua = r), r = $c(r, o.children), r.flags |= 4096, r);
  }
  function Wv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Rd(n.return, r, l);
  }
  function Ic(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Md(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Dn(n, r, o.children, l), o = fn.current, (o & 2) !== 0)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Wv(n, l, r);
            else if (n.tag === 19)
              Wv(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if ($t(fn, o), (r.mode & 1) === 0)
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && Tc(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Ic(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Tc(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Ic(r, !0, l, null, d);
          break;
        case "together":
          Ic(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Rs(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function On(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), hu |= r.lanes, (l & r.childLanes) === 0)
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(k(153));
    if (r.child !== null) {
      for (n = r.child, l = zl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = zl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Wi(n, r, l) {
    switch (r.tag) {
      case 3:
        oy(r), yn();
        break;
      case 5:
        Uv(r);
        break;
      case 1:
        cn(r.type) && pc(r);
        break;
      case 4:
        Td(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        $t(Yi, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? ($t(fn, fn.current & 1), r.flags |= 128, null) : (l & r.child.childLanes) !== 0 ? Qv(n, r, l) : ($t(fn, fn.current & 1), n = On(n, r, l), n !== null ? n.sibling : null);
        $t(fn, fn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (o)
            return Md(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), $t(fn, fn.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, aa(n, r, l);
    }
    return On(n, r, l);
  }
  var Ci, fo, po, Pa;
  Ci = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, fo = function() {
  }, po = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, lu(li.current);
      var d = null;
      switch (l) {
        case "input":
          c = Qn(n, c), o = Qn(n, o), d = [];
          break;
        case "select":
          c = le({}, c, { value: void 0 }), o = le({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Yr(n, c), o = Yr(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = dc);
      }
      kn(l, o);
      var m;
      l = null;
      for (U in c)
        if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null)
          if (U === "style") {
            var E = c[U];
            for (m in E)
              E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (yt.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null))
          if (U === "style")
            if (E) {
              for (m in E)
                !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in T)
                T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
            } else
              l || (d || (d = []), d.push(
                U,
                l
              )), l = T;
          else
            U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (yt.hasOwnProperty(U) ? (T != null && U === "onScroll" && Zt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Pa = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Tn(n, r) {
    if (!un)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Rr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function sy(n, r, l) {
    var o = r.pendingProps;
    switch (gd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Rr(r), null;
      case 1:
        return cn(r.type) && za(), Rr(r), null;
      case 3:
        return o = r.stateNode, no(), Ft(Rn), Ft(Ge), bd(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (yc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, Aa !== null && (Hd(Aa), Aa = null))), fo(n, r), Rr(r), null;
      case 5:
        wd(r);
        var c = lu(ds.current);
        if (l = r.type, n !== null && r.stateNode != null)
          po(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(k(166));
            return Rr(r), null;
          }
          if (n = lu(li.current), yc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[gi] = r, o[nu] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Zt("cancel", o), Zt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Zt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++)
                  Zt(rs[c], o);
                break;
              case "source":
                Zt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Zt(
                  "error",
                  o
                ), Zt("load", o);
                break;
              case "details":
                Zt("toggle", o);
                break;
              case "input":
                Hn(o, d), Zt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Zt("invalid", o);
                break;
              case "textarea":
                mr(o, d), Zt("invalid", o);
            }
            kn(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var E = d[m];
                m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && fc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && fc(
                  o.textContent,
                  E,
                  n
                ), c = ["children", "" + E]) : yt.hasOwnProperty(m) && E != null && m === "onScroll" && Zt("scroll", o);
              }
            switch (l) {
              case "input":
                vr(o), Br(o, d, !0);
                break;
              case "textarea":
                vr(o), nr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = dc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ir(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[gi] = r, n[nu] = o, Ci(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = hn(l, o), l) {
                case "dialog":
                  Zt("cancel", n), Zt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Zt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++)
                    Zt(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Zt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Zt(
                    "error",
                    n
                  ), Zt("load", n), c = o;
                  break;
                case "details":
                  Zt("toggle", n), c = o;
                  break;
                case "input":
                  Hn(n, o), c = Qn(n, o), Zt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = le({}, o, { value: void 0 }), Zt("invalid", n);
                  break;
                case "textarea":
                  mr(n, o), c = Yr(n, o), Zt("invalid", n);
                  break;
                default:
                  c = o;
              }
              kn(l, c), E = c;
              for (d in E)
                if (E.hasOwnProperty(d)) {
                  var T = E[d];
                  d === "style" ? At(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && fi(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && da(n, T) : typeof T == "number" && da(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (yt.hasOwnProperty(d) ? T != null && d === "onScroll" && Zt("scroll", n) : T != null && Ne(n, d, T, m));
                }
              switch (l) {
                case "input":
                  vr(n), Br(n, o, !1);
                  break;
                case "textarea":
                  vr(n), nr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ct(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? hr(n, !!o.multiple, d, !1) : o.defaultValue != null && hr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = dc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Rr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Pa(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(k(166));
          if (l = lu(ds.current), lu(li.current), yc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[gi] = r, (d = o.nodeValue !== l) && (n = ga, n !== null))
              switch (n.tag) {
                case 3:
                  fc(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && fc(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[gi] = r, r.stateNode = o;
        }
        return Rr(r), null;
      case 13:
        if (Ft(fn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (un && ea !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
            Dv(), yn(), r.flags |= 98560, d = !1;
          else if (d = yc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(k(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(k(317));
              d[gi] = r;
            } else
              yn(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            Rr(r), d = !1;
          } else
            Aa !== null && (Hd(Aa), Aa = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (fn.current & 1) !== 0 ? Bn === 0 && (Bn = 3) : _s())), r.updateQueue !== null && (r.flags |= 4), Rr(r), null);
      case 4:
        return no(), fo(n, r), n === null && qu(r.stateNode.containerInfo), Rr(r), null;
      case 10:
        return Cd(r.type._context), Rr(r), null;
      case 17:
        return cn(r.type) && za(), Rr(r), null;
      case 19:
        if (Ft(fn), d = r.memoizedState, d === null)
          return Rr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            Tn(d, !1);
          else {
            if (Bn !== 0 || n !== null && (n.flags & 128) !== 0)
              for (n = r.child; n !== null; ) {
                if (m = Tc(n), m !== null) {
                  for (r.flags |= 128, Tn(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return $t(fn, fn.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Lt() > To && (r.flags |= 128, o = !0, Tn(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Tc(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Tn(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !un)
                return Rr(r), null;
            } else
              2 * Lt() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, Tn(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Lt(), r.sibling = null, l = fn.current, $t(fn, o ? l & 1 | 2 : l & 1), r) : (Rr(r), null);
      case 22:
      case 23:
        return nf(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && (r.mode & 1) !== 0 ? (ia & 1073741824) !== 0 && (Rr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Rr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(k(156, r.tag));
  }
  function cy(n, r) {
    switch (gd(r), r.tag) {
      case 1:
        return cn(r.type) && za(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return no(), Ft(Rn), Ft(Ge), bd(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return wd(r), null;
      case 13:
        if (Ft(fn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(k(340));
          yn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ft(fn), null;
      case 4:
        return no(), null;
      case 10:
        return Cd(r.type._context), null;
      case 22:
      case 23:
        return nf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var vo = !1, ir = !1, Qc = typeof WeakSet == "function" ? WeakSet : Set, me = null;
  function ho(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          bn(n, r, o);
        }
      else
        l.current = null;
  }
  function Nd(n, r, l) {
    try {
      l();
    } catch (o) {
      bn(n, r, o);
    }
  }
  var Wc = !1;
  function fy(n, r) {
    if (cd = Oa, n = lc(), Hi(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, E = -1, T = -1, U = 0, W = 0, G = n, Q = null;
            t:
              for (; ; ) {
                for (var fe; G !== l || c !== 0 && G.nodeType !== 3 || (E = m + c), G !== d || o !== 0 && G.nodeType !== 3 || (T = m + o), G.nodeType === 3 && (m += G.nodeValue.length), (fe = G.firstChild) !== null; )
                  Q = G, G = fe;
                for (; ; ) {
                  if (G === n)
                    break t;
                  if (Q === l && ++U === c && (E = m), Q === d && ++W === o && (T = m), (fe = G.nextSibling) !== null)
                    break;
                  G = Q, Q = G.parentNode;
                }
                G = fe;
              }
            l = E === -1 || T === -1 ? null : { start: E, end: T };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (eu = { focusedElem: n, selectionRange: l }, Oa = !1, me = r; me !== null; )
      if (r = me, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, me = n;
      else
        for (; me !== null; ) {
          r = me;
          try {
            var ge = r.alternate;
            if ((r.flags & 1024) !== 0)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ge !== null) {
                    var Ce = ge.memoizedProps, Ln = ge.memoizedState, D = r.stateNode, b = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Ce : na(r.type, Ce), Ln);
                    D.__reactInternalSnapshotBeforeUpdate = b;
                  }
                  break;
                case 3:
                  var M = r.stateNode.containerInfo;
                  M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(k(163));
              }
          } catch (J) {
            bn(r, r.return, J);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, me = n;
            break;
          }
          me = r.return;
        }
    return ge = Wc, Wc = !1, ge;
  }
  function mo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Nd(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Gc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function qc(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Gv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Gv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[gi], delete r[nu], delete r[pd], delete r[iy], delete r[vd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function zd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function qv(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || zd(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Ts(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = dc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (Ts(n, r, l), n = n.sibling; n !== null; )
        Ts(n, r, l), n = n.sibling;
  }
  function yo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (yo(n, r, l), n = n.sibling; n !== null; )
        yo(n, r, l), n = n.sibling;
  }
  var dn = null, Jn = !1;
  function Lr(n, r, l) {
    for (l = l.child; l !== null; )
      go(n, r, l), l = l.sibling;
  }
  function go(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function")
      try {
        Qr.onCommitFiberUnmount(fl, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        ir || ho(l, r);
      case 6:
        var o = dn, c = Jn;
        dn = null, Lr(n, r, l), dn = o, Jn = c, dn !== null && (Jn ? (n = dn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : dn.removeChild(l.stateNode));
        break;
      case 18:
        dn !== null && (Jn ? (n = dn, l = l.stateNode, n.nodeType === 8 ? Rl(n.parentNode, l) : n.nodeType === 1 && Rl(n, l), gl(n)) : Rl(dn, l.stateNode));
        break;
      case 4:
        o = dn, c = Jn, dn = l.stateNode.containerInfo, Jn = !0, Lr(n, r, l), dn = o, Jn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ir && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && Nd(l, r, m), c = c.next;
          } while (c !== o);
        }
        Lr(n, r, l);
        break;
      case 1:
        if (!ir && (ho(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (E) {
            bn(l, r, E);
          }
        Lr(n, r, l);
        break;
      case 21:
        Lr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (ir = (o = ir) || l.memoizedState !== null, Lr(n, r, l), ir = o) : Lr(n, r, l);
        break;
      default:
        Lr(n, r, l);
    }
  }
  function So(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Qc()), r.forEach(function(o) {
        var c = gy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function Zn(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, m = r, E = m;
          e:
            for (; E !== null; ) {
              switch (E.tag) {
                case 5:
                  dn = E.stateNode, Jn = !1;
                  break e;
                case 3:
                  dn = E.stateNode.containerInfo, Jn = !0;
                  break e;
                case 4:
                  dn = E.stateNode.containerInfo, Jn = !0;
                  break e;
              }
              E = E.return;
            }
          if (dn === null)
            throw Error(k(160));
          go(d, m, c), dn = null, Jn = !1;
          var T = c.alternate;
          T !== null && (T.return = null), c.return = null;
        } catch (U) {
          bn(c, r, U);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Xv(r, n), r = r.sibling;
  }
  function Xv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Zn(r, n), Ri(n), o & 4) {
          try {
            mo(3, n, n.return), Gc(3, n);
          } catch (Ce) {
            bn(n, n.return, Ce);
          }
          try {
            mo(5, n, n.return);
          } catch (Ce) {
            bn(n, n.return, Ce);
          }
        }
        break;
      case 1:
        Zn(r, n), Ri(n), o & 512 && l !== null && ho(l, l.return);
        break;
      case 5:
        if (Zn(r, n), Ri(n), o & 512 && l !== null && ho(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            da(c, "");
          } catch (Ce) {
            bn(n, n.return, Ce);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null)
            try {
              E === "input" && d.type === "radio" && d.name != null && Nn(c, d), hn(E, m);
              var U = hn(E, d);
              for (m = 0; m < T.length; m += 2) {
                var W = T[m], G = T[m + 1];
                W === "style" ? At(c, G) : W === "dangerouslySetInnerHTML" ? fi(c, G) : W === "children" ? da(c, G) : Ne(c, W, G, U);
              }
              switch (E) {
                case "input":
                  _n(c, d);
                  break;
                case "textarea":
                  fa(c, d);
                  break;
                case "select":
                  var Q = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var fe = d.value;
                  fe != null ? hr(c, !!d.multiple, fe, !1) : Q !== !!d.multiple && (d.defaultValue != null ? hr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : hr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[nu] = d;
            } catch (Ce) {
              bn(n, n.return, Ce);
            }
        }
        break;
      case 6:
        if (Zn(r, n), Ri(n), o & 4) {
          if (n.stateNode === null)
            throw Error(k(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ce) {
            bn(n, n.return, Ce);
          }
        }
        break;
      case 3:
        if (Zn(r, n), Ri(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            gl(r.containerInfo);
          } catch (Ce) {
            bn(n, n.return, Ce);
          }
        break;
      case 4:
        Zn(r, n), Ri(n);
        break;
      case 13:
        Zn(r, n), Ri(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Kc = Lt())), o & 4 && So(n);
        break;
      case 22:
        if (W = l !== null && l.memoizedState !== null, n.mode & 1 ? (ir = (U = ir) || W, Zn(r, n), ir = U) : Zn(r, n), Ri(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !W && (n.mode & 1) !== 0)
            for (me = n, W = n.child; W !== null; ) {
              for (G = me = W; me !== null; ) {
                switch (Q = me, fe = Q.child, Q.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mo(4, Q, Q.return);
                    break;
                  case 1:
                    ho(Q, Q.return);
                    var ge = Q.stateNode;
                    if (typeof ge.componentWillUnmount == "function") {
                      o = Q, l = Q.return;
                      try {
                        r = o, ge.props = r.memoizedProps, ge.state = r.memoizedState, ge.componentWillUnmount();
                      } catch (Ce) {
                        bn(o, l, Ce);
                      }
                    }
                    break;
                  case 5:
                    ho(Q, Q.return);
                    break;
                  case 22:
                    if (Q.memoizedState !== null) {
                      Kv(G);
                      continue;
                    }
                }
                fe !== null ? (fe.return = Q, me = fe) : Kv(G);
              }
              W = W.sibling;
            }
          e:
            for (W = null, G = n; ; ) {
              if (G.tag === 5) {
                if (W === null) {
                  W = G;
                  try {
                    c = G.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = G.stateNode, T = G.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = lt("display", m));
                  } catch (Ce) {
                    bn(n, n.return, Ce);
                  }
                }
              } else if (G.tag === 6) {
                if (W === null)
                  try {
                    G.stateNode.nodeValue = U ? "" : G.memoizedProps;
                  } catch (Ce) {
                    bn(n, n.return, Ce);
                  }
              } else if ((G.tag !== 22 && G.tag !== 23 || G.memoizedState === null || G === n) && G.child !== null) {
                G.child.return = G, G = G.child;
                continue;
              }
              if (G === n)
                break e;
              for (; G.sibling === null; ) {
                if (G.return === null || G.return === n)
                  break e;
                W === G && (W = null), G = G.return;
              }
              W === G && (W = null), G.sibling.return = G.return, G = G.sibling;
            }
        }
        break;
      case 19:
        Zn(r, n), Ri(n), o & 4 && So(n);
        break;
      case 21:
        break;
      default:
        Zn(
          r,
          n
        ), Ri(n);
    }
  }
  function Ri(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (zd(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(k(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (da(c, ""), o.flags &= -33);
            var d = qv(n);
            yo(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = qv(n);
            Ts(n, E, m);
            break;
          default:
            throw Error(k(161));
        }
      } catch (T) {
        bn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function dy(n, r, l) {
    me = n, Ud(n);
  }
  function Ud(n, r, l) {
    for (var o = (n.mode & 1) !== 0; me !== null; ) {
      var c = me, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || vo;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || ir;
          E = vo;
          var U = ir;
          if (vo = m, (ir = T) && !U)
            for (me = c; me !== null; )
              m = me, T = m.child, m.tag === 22 && m.memoizedState !== null ? Ad(c) : T !== null ? (T.return = m, me = T) : Ad(c);
          for (; d !== null; )
            me = d, Ud(d), d = d.sibling;
          me = c, vo = E, ir = U;
        }
        Eo(n);
      } else
        (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, me = d) : Eo(n);
    }
  }
  function Eo(n) {
    for (; me !== null; ) {
      var r = me;
      if ((r.flags & 8772) !== 0) {
        var l = r.alternate;
        try {
          if ((r.flags & 8772) !== 0)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                ir || Gc(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !ir)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : na(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && zv(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  zv(r, m, l);
                }
                break;
              case 5:
                var E = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = E;
                  var T = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      T.autoFocus && l.focus();
                      break;
                    case "img":
                      T.src && (l.src = T.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var U = r.alternate;
                  if (U !== null) {
                    var W = U.memoizedState;
                    if (W !== null) {
                      var G = W.dehydrated;
                      G !== null && gl(G);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(k(163));
            }
          ir || r.flags & 512 && qc(r);
        } catch (Q) {
          bn(r, r.return, Q);
        }
      }
      if (r === n) {
        me = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function Kv(n) {
    for (; me !== null; ) {
      var r = me;
      if (r === n) {
        me = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, me = l;
        break;
      }
      me = r.return;
    }
  }
  function Ad(n) {
    for (; me !== null; ) {
      var r = me;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Gc(4, r);
            } catch (T) {
              bn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                bn(r, c, T);
              }
            }
            var d = r.return;
            try {
              qc(r);
            } catch (T) {
              bn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              qc(r);
            } catch (T) {
              bn(r, m, T);
            }
        }
      } catch (T) {
        bn(r, r.return, T);
      }
      if (r === n) {
        me = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, me = E;
        break;
      }
      me = r.return;
    }
  }
  var py = Math.ceil, vu = dt.ReactCurrentDispatcher, Xc = dt.ReactCurrentOwner, Va = dt.ReactCurrentBatchConfig, gt = 0, wn = null, on = null, Vn = 0, ia = 0, Co = rt(0), Bn = 0, ws = null, hu = 0, Ro = 0, Fd = 0, Ml = null, Tr = null, Kc = 0, To = 1 / 0, Gi = null, Jc = !1, jd = null, Ba = null, wo = !1, $a = null, Zc = 0, bs = 0, ef = null, xs = -1, mu = 0;
  function er() {
    return (gt & 6) !== 0 ? Lt() : xs !== -1 ? xs : xs = Lt();
  }
  function qi(n) {
    return (n.mode & 1) === 0 ? 1 : (gt & 2) !== 0 && Vn !== 0 ? Vn & -Vn : gc.transition !== null ? (mu === 0 && (mu = Uu()), mu) : (n = Mt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Go(n.type)), n);
  }
  function gn(n, r, l, o) {
    if (50 < bs)
      throw bs = 0, ef = null, Error(k(185));
    Ni(n, l, o), ((gt & 2) === 0 || n !== wn) && (n === wn && ((gt & 2) === 0 && (Ro |= l), Bn === 4 && Ti(n, Vn)), $n(n, o), l === 1 && gt === 0 && (r.mode & 1) === 0 && (To = Lt() + 500, Kn && Kr()));
  }
  function $n(n, r) {
    var l = n.callbackNode;
    vl(n, r);
    var o = Dr(n, n === wn ? Vn : 0);
    if (o === 0)
      l !== null && an(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && an(l), r === 1)
        n.tag === 0 ? md(bo.bind(null, n)) : hd(bo.bind(null, n)), dd(function() {
          (gt & 6) === 0 && Kr();
        }), l = null;
      else {
        switch (Fu(o)) {
          case 1:
            l = _r;
            break;
          case 4:
            l = ot;
            break;
          case 16:
            l = ka;
            break;
          case 536870912:
            l = Nu;
            break;
          default:
            l = ka;
        }
        l = ih(l, tf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function tf(n, r) {
    if (xs = -1, mu = 0, (gt & 6) !== 0)
      throw Error(k(327));
    var l = n.callbackNode;
    if (xo() && n.callbackNode !== l)
      return null;
    var o = Dr(n, n === wn ? Vn : 0);
    if (o === 0)
      return null;
    if ((o & 30) !== 0 || (o & n.expiredLanes) !== 0 || r)
      r = rf(n, o);
    else {
      r = o;
      var c = gt;
      gt |= 2;
      var d = Zv();
      (wn !== n || Vn !== r) && (Gi = null, To = Lt() + 500, gu(n, r));
      do
        try {
          hy();
          break;
        } catch (E) {
          Jv(n, E);
        }
      while (1);
      Sa(), vu.current = d, gt = c, on !== null ? r = 0 : (wn = null, Vn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = hl(n), c !== 0 && (o = c, r = yu(n, c))), r === 1)
        throw l = ws, gu(n, 0), Ti(n, o), $n(n, Lt()), l;
      if (r === 6)
        Ti(n, o);
      else {
        if (c = n.current.alternate, (o & 30) === 0 && !Pd(c) && (r = rf(n, o), r === 2 && (d = hl(n), d !== 0 && (o = d, r = yu(n, d))), r === 1))
          throw l = ws, gu(n, 0), Ti(n, o), $n(n, Lt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(k(345));
          case 2:
            Nl(n, Tr, Gi);
            break;
          case 3:
            if (Ti(n, o), (o & 130023424) === o && (r = Kc + 500 - Lt(), 10 < r)) {
              if (Dr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                er(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = tu(Nl.bind(null, n, Tr, Gi), r);
              break;
            }
            Nl(n, Tr, Gi);
            break;
          case 4:
            if (Ti(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - kr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Lt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * py(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = tu(Nl.bind(null, n, Tr, Gi), o);
              break;
            }
            Nl(n, Tr, Gi);
            break;
          case 5:
            Nl(n, Tr, Gi);
            break;
          default:
            throw Error(k(329));
        }
      }
    }
    return $n(n, Lt()), n.callbackNode === l ? tf.bind(null, n) : null;
  }
  function yu(n, r) {
    var l = Ml;
    return n.current.memoizedState.isDehydrated && (gu(n, r).flags |= 256), n = rf(n, r), n !== 2 && (r = Tr, Tr = l, r !== null && Hd(r)), n;
  }
  function Hd(n) {
    Tr === null ? Tr = n : Tr.push.apply(Tr, n);
  }
  function Pd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!La(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ti(n, r) {
    for (r &= ~Fd, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function bo(n) {
    if ((gt & 6) !== 0)
      throw Error(k(327));
    xo();
    var r = Dr(n, 0);
    if ((r & 1) === 0)
      return $n(n, Lt()), null;
    var l = rf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = hl(n);
      o !== 0 && (r = o, l = yu(n, o));
    }
    if (l === 1)
      throw l = ws, gu(n, 0), Ti(n, r), $n(n, Lt()), l;
    if (l === 6)
      throw Error(k(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Nl(n, Tr, Gi), $n(n, Lt()), null;
  }
  function Vd(n, r) {
    var l = gt;
    gt |= 1;
    try {
      return n(r);
    } finally {
      gt = l, gt === 0 && (To = Lt() + 500, Kn && Kr());
    }
  }
  function wi(n) {
    $a !== null && $a.tag === 0 && (gt & 6) === 0 && xo();
    var r = gt;
    gt |= 1;
    var l = Va.transition, o = Mt;
    try {
      if (Va.transition = null, Mt = 1, n)
        return n();
    } finally {
      Mt = o, Va.transition = l, gt = r, (gt & 6) === 0 && Kr();
    }
  }
  function nf() {
    ia = Co.current, Ft(Co);
  }
  function gu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, bv(l)), on !== null)
      for (l = on.return; l !== null; ) {
        var o = l;
        switch (gd(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && za();
            break;
          case 3:
            no(), Ft(Rn), Ft(Ge), bd();
            break;
          case 5:
            wd(o);
            break;
          case 4:
            no();
            break;
          case 13:
            Ft(fn);
            break;
          case 19:
            Ft(fn);
            break;
          case 10:
            Cd(o.type._context);
            break;
          case 22:
          case 23:
            nf();
        }
        l = l.return;
      }
    if (wn = n, on = n = zl(n.current, null), Vn = ia = r, Bn = 0, ws = null, Fd = Ro = hu = 0, Tr = Ml = null, iu !== null) {
      for (r = 0; r < iu.length; r++)
        if (l = iu[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      iu = null;
    }
    return n;
  }
  function Jv(n, r) {
    do {
      var l = on;
      try {
        if (Sa(), bc.current = Cr, Ea) {
          for (var o = be.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Ea = !1;
        }
        if (Re = 0, mt = qe = be = null, ro = !1, vs = 0, Xc.current = null, l === null || l.return === null) {
          Bn = 1, ws = r, on = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = Vn, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, W = E, G = W.tag;
            if ((W.mode & 1) === 0 && (G === 0 || G === 11 || G === 15)) {
              var Q = W.alternate;
              Q ? (W.updateQueue = Q.updateQueue, W.memoizedState = Q.memoizedState, W.lanes = Q.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var fe = $v(m);
            if (fe !== null) {
              fe.flags &= -257, Od(fe, m, E, d, r), fe.mode & 1 && Ss(d, U, r), r = fe, T = U;
              var ge = r.updateQueue;
              if (ge === null) {
                var Ce = /* @__PURE__ */ new Set();
                Ce.add(T), r.updateQueue = Ce;
              } else
                ge.add(T);
              break e;
            } else {
              if ((r & 1) === 0) {
                Ss(d, U, r), _s();
                break e;
              }
              T = Error(k(426));
            }
          } else if (un && E.mode & 1) {
            var Ln = $v(m);
            if (Ln !== null) {
              (Ln.flags & 65536) === 0 && (Ln.flags |= 256), Od(Ln, m, E, d, r), Ed(Ol(T, E));
              break e;
            }
          }
          d = T = Ol(T, E), Bn !== 4 && (Bn = 2), Ml === null ? Ml = [d] : Ml.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Vv(d, T, r);
                Nv(d, D);
                break e;
              case 1:
                E = T;
                var b = d.type, M = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof b.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (Ba === null || !Ba.has(M)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var J = Bv(d, E, r);
                  Nv(d, J);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        th(l);
      } catch (Te) {
        r = Te, on === l && l !== null && (on = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function Zv() {
    var n = vu.current;
    return vu.current = Cr, n === null ? Cr : n;
  }
  function _s() {
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), wn === null || (hu & 268435455) === 0 && (Ro & 268435455) === 0 || Ti(wn, Vn);
  }
  function rf(n, r) {
    var l = gt;
    gt |= 2;
    var o = Zv();
    (wn !== n || Vn !== r) && (Gi = null, gu(n, r));
    do
      try {
        vy();
        break;
      } catch (c) {
        Jv(n, c);
      }
    while (1);
    if (Sa(), gt = l, vu.current = o, on !== null)
      throw Error(k(261));
    return wn = null, Vn = 0, Bn;
  }
  function vy() {
    for (; on !== null; )
      eh(on);
  }
  function hy() {
    for (; on !== null && !gr(); )
      eh(on);
  }
  function eh(n) {
    var r = ah(n.alternate, n, ia);
    n.memoizedProps = n.pendingProps, r === null ? th(n) : on = r, Xc.current = null;
  }
  function th(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (l = sy(l, r, ia), l !== null) {
          on = l;
          return;
        }
      } else {
        if (l = cy(l, r), l !== null) {
          l.flags &= 32767, on = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, on = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        on = r;
        return;
      }
      on = r = n;
    } while (r !== null);
    Bn === 0 && (Bn = 5);
  }
  function Nl(n, r, l) {
    var o = Mt, c = Va.transition;
    try {
      Va.transition = null, Mt = 1, my(n, r, l, o);
    } finally {
      Va.transition = c, Mt = o;
    }
    return null;
  }
  function my(n, r, l, o) {
    do
      xo();
    while ($a !== null);
    if ((gt & 6) !== 0)
      throw Error(k(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(k(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (If(n, d), n === wn && (on = wn = null, Vn = 0), (l.subtreeFlags & 2064) === 0 && (l.flags & 2064) === 0 || wo || (wo = !0, ih(ka, function() {
      return xo(), null;
    })), d = (l.flags & 15990) !== 0, (l.subtreeFlags & 15990) !== 0 || d) {
      d = Va.transition, Va.transition = null;
      var m = Mt;
      Mt = 1;
      var E = gt;
      gt |= 4, Xc.current = null, fy(n, l), Xv(l, n), uc(eu), Oa = !!cd, eu = cd = null, n.current = l, dy(l), hi(), gt = E, Mt = m, Va.transition = d;
    } else
      n.current = l;
    if (wo && (wo = !1, $a = n, Zc = c), d = n.pendingLanes, d === 0 && (Ba = null), Io(l.stateNode), $n(n, Lt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Jc)
      throw Jc = !1, n = jd, jd = null, n;
    return (Zc & 1) !== 0 && n.tag !== 0 && xo(), d = n.pendingLanes, (d & 1) !== 0 ? n === ef ? bs++ : (bs = 0, ef = n) : bs = 0, Kr(), null;
  }
  function xo() {
    if ($a !== null) {
      var n = Fu(Zc), r = Va.transition, l = Mt;
      try {
        if (Va.transition = null, Mt = 16 > n ? 16 : n, $a === null)
          var o = !1;
        else {
          if (n = $a, $a = null, Zc = 0, (gt & 6) !== 0)
            throw Error(k(331));
          var c = gt;
          for (gt |= 4, me = n.current; me !== null; ) {
            var d = me, m = d.child;
            if ((me.flags & 16) !== 0) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (me = U; me !== null; ) {
                    var W = me;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, W, d);
                    }
                    var G = W.child;
                    if (G !== null)
                      G.return = W, me = G;
                    else
                      for (; me !== null; ) {
                        W = me;
                        var Q = W.sibling, fe = W.return;
                        if (Gv(W), W === U) {
                          me = null;
                          break;
                        }
                        if (Q !== null) {
                          Q.return = fe, me = Q;
                          break;
                        }
                        me = fe;
                      }
                  }
                }
                var ge = d.alternate;
                if (ge !== null) {
                  var Ce = ge.child;
                  if (Ce !== null) {
                    ge.child = null;
                    do {
                      var Ln = Ce.sibling;
                      Ce.sibling = null, Ce = Ln;
                    } while (Ce !== null);
                  }
                }
                me = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && m !== null)
              m.return = d, me = m;
            else
              e:
                for (; me !== null; ) {
                  if (d = me, (d.flags & 2048) !== 0)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(9, d, d.return);
                    }
                  var D = d.sibling;
                  if (D !== null) {
                    D.return = d.return, me = D;
                    break e;
                  }
                  me = d.return;
                }
          }
          var b = n.current;
          for (me = b; me !== null; ) {
            m = me;
            var M = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && M !== null)
              M.return = m, me = M;
            else
              e:
                for (m = b; me !== null; ) {
                  if (E = me, (E.flags & 2048) !== 0)
                    try {
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Gc(9, E);
                      }
                    } catch (Te) {
                      bn(E, E.return, Te);
                    }
                  if (E === m) {
                    me = null;
                    break e;
                  }
                  var J = E.sibling;
                  if (J !== null) {
                    J.return = E.return, me = J;
                    break e;
                  }
                  me = E.return;
                }
          }
          if (gt = c, Kr(), Qr && typeof Qr.onPostCommitFiberRoot == "function")
            try {
              Qr.onPostCommitFiberRoot(fl, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Mt = l, Va.transition = r;
      }
    }
    return !1;
  }
  function nh(n, r, l) {
    r = Ol(l, r), r = Vv(n, r, 1), n = kl(n, r, 1), r = er(), n !== null && (Ni(n, 1, r), $n(n, r));
  }
  function bn(n, r, l) {
    if (n.tag === 3)
      nh(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          nh(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ba === null || !Ba.has(o))) {
            n = Ol(l, n), n = Bv(r, n, 1), r = kl(r, n, 1), n = er(), r !== null && (Ni(r, 1, n), $n(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function yy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = er(), n.pingedLanes |= n.suspendedLanes & l, wn === n && (Vn & l) === l && (Bn === 4 || Bn === 3 && (Vn & 130023424) === Vn && 500 > Lt() - Kc ? gu(n, 0) : Fd |= l), $n(n, r);
  }
  function rh(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = dl, dl <<= 1, (dl & 130023424) === 0 && (dl = 4194304)));
    var l = er();
    n = Ii(n, r), n !== null && (Ni(n, r, l), $n(n, l));
  }
  function Bd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), rh(n, l);
  }
  function gy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(k(314));
    }
    o !== null && o.delete(r), rh(n, l);
  }
  var ah;
  ah = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Rn.current)
        ra = !0;
      else {
        if ((n.lanes & l) === 0 && (r.flags & 128) === 0)
          return ra = !1, Wi(n, r, l);
        ra = (n.flags & 131072) !== 0;
      }
    else
      ra = !1, un && (r.flags & 1048576) !== 0 && yd(r, Ku, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Rs(n, r), n = r.pendingProps;
        var c = Na(r, Ge.current);
        Zu(r, l), c = Y(null, r, o, n, c, l);
        var d = Fn();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, cn(o) ? (d = !0, pc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Ec(r), c.updater = fu, r.stateNode = c, c._reactInternals = r, kd(r, o, n, l), r = Bc(null, r, o, !0, d, l)) : (r.tag = 0, un && d && vc(r), Dn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Rs(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Sy(o), n = na(o, n), c) {
            case 0:
              r = tt(null, r, o, n, l);
              break e;
            case 1:
              r = Es(null, r, o, n, l);
              break e;
            case 11:
              r = co(null, r, o, n, l);
              break e;
            case 14:
              r = Ll(null, r, o, na(o.type, n), l);
              break e;
          }
          throw Error(k(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), tt(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), Es(n, r, o, c, l);
      case 3:
        e: {
          if (oy(r), n === null)
            throw Error(k(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, eo(n, r), Rc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = Ol(Error(k(423)), r), r = Iv(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = Ol(Error(k(424)), r), r = Iv(n, r, o, l, c);
              break e;
            } else
              for (ea = ii(r.stateNode.containerInfo.firstChild), ga = r, un = !0, Aa = null, l = Lv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (yn(), o === c) {
              r = On(n, r, l);
              break e;
            }
            Dn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Uv(r), n === null && mc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, ls(o, c) ? m = null : d !== null && ls(o, d) && (r.flags |= 32), du(n, r), Dn(n, r, m, l), r.child;
      case 6:
        return n === null && mc(r), null;
      case 13:
        return Qv(n, r, l);
      case 4:
        return Td(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Ju(r, null, o, l) : Dn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), co(n, r, o, c, l);
      case 7:
        return Dn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Dn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Dn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, $t(Yi, o._currentValue), o._currentValue = m, d !== null)
            if (La(d.value, m)) {
              if (d.children === c.children && !Rn.current) {
                r = On(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var E = d.dependencies;
                if (E !== null) {
                  m = d.child;
                  for (var T = E.firstContext; T !== null; ) {
                    if (T.context === o) {
                      if (d.tag === 1) {
                        T = ta(-1, l & -l), T.tag = 2;
                        var U = d.updateQueue;
                        if (U !== null) {
                          U = U.shared;
                          var W = U.pending;
                          W === null ? T.next = T : (T.next = W.next, W.next = T), U.pending = T;
                        }
                      }
                      d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Rd(
                        d.return,
                        l,
                        r
                      ), E.lanes |= l;
                      break;
                    }
                    T = T.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(k(341));
                  m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Rd(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          Dn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, Zu(r, l), c = ja(c), o = o(c), r.flags |= 1, Dn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = na(o, r.pendingProps), c = na(o.type, c), Ll(n, r, o, c, l);
      case 15:
        return Vc(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), Rs(n, r), r.tag = 1, cn(o) ? (n = !0, pc(r)) : n = !1, Zu(r, l), jv(r, o, c), kd(r, o, c, l), Bc(null, r, o, !0, n, l);
      case 19:
        return Md(n, r, l);
      case 22:
        return aa(n, r, l);
    }
    throw Error(k(156, r.tag));
  };
  function ih(n, r) {
    return Xt(n, r);
  }
  function lh(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ya(n, r, l, o) {
    return new lh(n, r, l, o);
  }
  function $d(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Sy(n) {
    if (typeof n == "function")
      return $d(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === En)
        return 11;
      if (n === jt)
        return 14;
    }
    return 2;
  }
  function zl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ya(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function af(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      $d(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case $e:
            return Su(l.children, c, d, r);
          case rn:
            m = 8, c |= 8;
            break;
          case xn:
            return n = Ya(12, l, r, c | 2), n.elementType = xn, n.lanes = d, n;
          case Ue:
            return n = Ya(13, l, r, c), n.elementType = Ue, n.lanes = d, n;
          case nt:
            return n = Ya(19, l, r, c), n.elementType = nt, n.lanes = d, n;
          case ye:
            return lf(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Wt:
                  m = 10;
                  break e;
                case Ot:
                  m = 9;
                  break e;
                case En:
                  m = 11;
                  break e;
                case jt:
                  m = 14;
                  break e;
                case kt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(k(130, n == null ? n : typeof n, ""));
        }
    return r = Ya(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Su(n, r, l, o) {
    return n = Ya(7, n, o, r), n.lanes = l, n;
  }
  function lf(n, r, l, o) {
    return n = Ya(22, n, o, r), n.elementType = ye, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function uf(n, r, l) {
    return n = Ya(6, n, null, r), n.lanes = l, n;
  }
  function ks(n, r, l) {
    return r = Ya(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ds(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Au(0), this.expirationTimes = Au(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Au(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Yd(n, r, l, o, c, d, m, E, T) {
    return n = new Ds(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ya(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ec(d), n;
  }
  function uh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: pt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Id(n) {
    if (!n)
      return Si;
    n = n._reactInternals;
    e: {
      if (we(n) !== n || n.tag !== 1)
        throw Error(k(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (cn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(k(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (cn(l))
        return ss(n, l, r);
    }
    return r;
  }
  function Qd(n, r, l, o, c, d, m, E, T) {
    return n = Yd(l, o, !0, n, c, d, m, E, T), n.context = Id(null), l = n.current, o = er(), c = qi(l), d = ta(o, c), d.callback = r != null ? r : null, kl(l, d, c), n.current.lanes = c, Ni(n, c, o), $n(n, o), n;
  }
  function of(n, r, l, o) {
    var c = r.current, d = er(), m = qi(c);
    return l = Id(l), r.context === null ? r.context = l : r.pendingContext = l, r = ta(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = kl(c, r, m), n !== null && (gn(n, c, m, d), Cc(n, c, m)), m;
  }
  function Os(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function oh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Wd(n, r) {
    oh(n, r), (n = n.alternate) && oh(n, r);
  }
  function Ey() {
    return null;
  }
  var Gd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function sf(n) {
    this._internalRoot = n;
  }
  Ls.prototype.render = sf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(k(409));
    of(n, r, null, null);
  }, Ls.prototype.unmount = sf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      wi(function() {
        of(null, n, null, null);
      }), r[Bi] = null;
    }
  };
  function Ls(n) {
    this._internalRoot = n;
  }
  Ls.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Hu();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Bt.length && r !== 0 && r < Bt[l].priority; l++)
        ;
      Bt.splice(l, 0, n), l === 0 && ec(n);
    }
  };
  function Ul(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function cf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function sh() {
  }
  function Cy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = Os(m);
          d.call(U);
        };
      }
      var m = Qd(r, o, n, 0, null, !1, !1, "", sh);
      return n._reactRootContainer = m, n[Bi] = m.current, qu(n.nodeType === 8 ? n.parentNode : n), wi(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = Os(T);
        E.call(U);
      };
    }
    var T = Yd(n, 0, !1, null, null, !1, !1, "", sh);
    return n._reactRootContainer = T, n[Bi] = T.current, qu(n.nodeType === 8 ? n.parentNode : n), wi(function() {
      of(r, T, l, o);
    }), T;
  }
  function ff(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = Os(m);
          E.call(T);
        };
      }
      of(r, m, n, c);
    } else
      m = Cy(l, r, n, c, o);
    return Os(m);
  }
  Wl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ei(r.pendingLanes);
          l !== 0 && (mi(r, l | 1), $n(r, Lt()), (gt & 6) === 0 && (To = Lt() + 500, Kr()));
        }
        break;
      case 13:
        wi(function() {
          var o = Ii(n, 1);
          if (o !== null) {
            var c = er();
            gn(o, n, 1, c);
          }
        }), Wd(n, 1);
    }
  }, ju = function(n) {
    if (n.tag === 13) {
      var r = Ii(n, 134217728);
      if (r !== null) {
        var l = er();
        gn(r, n, 134217728, l);
      }
      Wd(n, 134217728);
    }
  }, Rt = function(n) {
    if (n.tag === 13) {
      var r = qi(n), l = Ii(n, r);
      if (l !== null) {
        var o = er();
        gn(l, n, r, o);
      }
      Wd(n, r);
    }
  }, Hu = function() {
    return Mt;
  }, Pu = function(n, r) {
    var l = Mt;
    try {
      return Mt = n, r();
    } finally {
      Mt = l;
    }
  }, br = function(n, r, l) {
    switch (r) {
      case "input":
        if (_n(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Le(o);
              if (!c)
                throw Error(k(90));
              Vr(o), _n(o, c);
            }
          }
        }
        break;
      case "textarea":
        fa(n, l);
        break;
      case "select":
        r = l.value, r != null && hr(n, !!l.multiple, r, !1);
    }
  }, Ql = Vd, Mu = wi;
  var Ry = { usingClientEntryPoint: !1, Events: [os, Xu, Le, _a, ol, Vd] }, Ms = { findFiberByHostInstance: Ma, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ch = { bundleType: Ms.bundleType, version: Ms.version, rendererPackageName: Ms.rendererPackageName, rendererConfig: Ms.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: dt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ut(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ms.findFiberByHostInstance || Ey, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var df = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!df.isDisabled && df.supportsFiber)
      try {
        fl = df.inject(ch), Qr = df;
      } catch {
      }
  }
  return Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ry, Xa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ul(r))
      throw Error(k(200));
    return uh(n, r, null, l);
  }, Xa.createRoot = function(n, r) {
    if (!Ul(n))
      throw Error(k(299));
    var l = !1, o = "", c = Gd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Yd(n, 1, !1, null, null, l, !1, o, c), n[Bi] = r.current, qu(n.nodeType === 8 ? n.parentNode : n), new sf(r);
  }, Xa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(k(188)) : (n = Object.keys(n).join(","), Error(k(268, n)));
    return n = ut(r), n = n === null ? null : n.stateNode, n;
  }, Xa.flushSync = function(n) {
    return wi(n);
  }, Xa.hydrate = function(n, r, l) {
    if (!cf(r))
      throw Error(k(200));
    return ff(null, n, r, !0, l);
  }, Xa.hydrateRoot = function(n, r, l) {
    if (!Ul(n))
      throw Error(k(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Gd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Qd(r, null, n, 1, l != null ? l : null, c, !1, d, m), n[Bi] = r.current, qu(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Ls(r);
  }, Xa.render = function(n, r, l) {
    if (!cf(r))
      throw Error(k(200));
    return ff(null, n, r, !1, l);
  }, Xa.unmountComponentAtNode = function(n) {
    if (!cf(n))
      throw Error(k(40));
    return n._reactRootContainer ? (wi(function() {
      ff(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Bi] = null;
      });
    }), !0) : !1;
  }, Xa.unstable_batchedUpdates = Vd, Xa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!cf(l))
      throw Error(k(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(k(38));
    return ff(n, r, l, !1, o);
  }, Xa.version = "18.3.1-next-f1338f8080-20240426", Xa;
}
var Ka = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cR;
function pk() {
  return cR || (cR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var F = Yf.exports, V = hR(), k = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Je = !1;
    function yt(e) {
      Je = e;
    }
    function Qe(e) {
      if (!Je) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        st("warn", e, a);
      }
    }
    function S(e) {
      if (!Je) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        st("error", e, a);
      }
    }
    function st(e, t, a) {
      {
        var i = k.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ne = 0, oe = 1, We = 2, te = 3, ve = 4, Z = 5, he = 6, Ze = 7, Be = 8, bt = 9, Pe = 10, Ne = 11, dt = 12, Oe = 13, pt = 14, $e = 15, rn = 16, xn = 17, Wt = 18, Ot = 19, En = 21, Ue = 22, nt = 23, jt = 24, kt = 25, ye = !0, ee = !1, _e = !1, le = !1, _ = !1, B = !0, Ae = !1, Ye = !0, it = !0, at = !0, Et = !0, ct = /* @__PURE__ */ new Set(), ft = {}, en = {};
    function vr(e, t) {
      Vr(e, t), Vr(e + "Capture", t);
    }
    function Vr(e, t) {
      ft[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ft[e] = t;
      {
        var a = e.toLowerCase();
        en[a] = e, e === "onDoubleClick" && (en.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ct.add(t[i]);
    }
    var pn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Qn = Object.prototype.hasOwnProperty;
    function Hn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Nn(e) {
      try {
        return _n(e), !1;
      } catch {
        return !0;
      }
    }
    function _n(e) {
      return "" + e;
    }
    function Br(e, t) {
      if (Nn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), _n(e);
    }
    function $r(e) {
      if (Nn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), _n(e);
    }
    function Wn(e, t) {
      if (Nn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), _n(e);
    }
    function hr(e, t) {
      if (Nn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), _n(e);
    }
    function Yr(e) {
      if (Nn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), _n(e);
    }
    function mr(e) {
      if (Nn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Hn(e)), _n(e);
    }
    var fa = 0, nr = 1, Ir = 2, vn = 3, wr = 4, fi = 5, da = 6, re = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ke = re + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", lt = new RegExp("^[" + re + "][" + ke + "]*$"), At = {}, Ht = {};
    function kn(e) {
      return Qn.call(Ht, e) ? !0 : Qn.call(At, e) ? !1 : lt.test(e) ? (Ht[e] = !0, !0) : (At[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function hn(e, t, a) {
      return t !== null ? t.type === fa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function yr(e, t, a, i) {
      if (a !== null && a.type === fa)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function It(e, t, a, i) {
      if (t === null || typeof t > "u" || yr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case vn:
            return !t;
          case wr:
            return t === !1;
          case fi:
            return isNaN(t);
          case da:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function br(e) {
      return Vt.hasOwnProperty(e) ? Vt[e] : null;
    }
    function Pt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ir || t === vn || t === wr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Vt = {}, Ja = [
      "children",
      "dangerouslySetInnerHTML",
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ja.forEach(function(e) {
      Vt[e] = new Pt(
        e,
        fa,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Vt[t] = new Pt(
        t,
        nr,
        !1,
        a,
        null,
        !1,
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        Ir,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        Ir,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      "itemScope"
    ].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        vn,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    }), [
      "checked",
      "multiple",
      "muted",
      "selected"
    ].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        vn,
        !0,
        e,
        null,
        !1,
        !1
      );
    }), [
      "capture",
      "download"
    ].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        wr,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
    ].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        da,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        fi,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    });
    var _a = /[\-\:]([a-z])/g, ol = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
    ].forEach(function(e) {
      var t = e.replace(_a, ol);
      Vt[t] = new Pt(
        t,
        nr,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
    ].forEach(function(e) {
      var t = e.replace(_a, ol);
      Vt[t] = new Pt(
        t,
        nr,
        !1,
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
    ].forEach(function(e) {
      var t = e.replace(_a, ol);
      Vt[t] = new Pt(
        t,
        nr,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        nr,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    });
    var Ql = "xlinkHref";
    Vt[Ql] = new Pt(
      "xlinkHref",
      nr,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Vt[e] = new Pt(
        e,
        nr,
        !1,
        e.toLowerCase(),
        null,
        !0,
        !0
      );
    });
    var Mu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Mi = !1;
    function sl(e) {
      !Mi && Mu.test(e) && (Mi = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function pa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Br(a, t), i.sanitizeURL && sl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === wr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : It(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (It(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === vn)
            return a;
          f = e.getAttribute(s);
        }
        return It(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function di(e, t, a, i) {
      {
        if (!kn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Br(a, t), u === "" + a ? a : u;
      }
    }
    function va(e, t, a, i) {
      var u = br(t);
      if (!hn(t, u, i)) {
        if (It(t, a, u, i) && (a = null), i || u === null) {
          if (kn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Br(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === vn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var x = u.type, w;
          x === vn || x === wr && a === !0 ? w = "" : (Br(a, y), w = "" + a, u.sanitizeURL && sl(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var Za = Symbol.for("react.element"), xr = Symbol.for("react.portal"), ha = Symbol.for("react.fragment"), pi = Symbol.for("react.strict_mode"), vi = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), I = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), we = Symbol.for("react.suspense"), vt = Symbol.for("react.suspense_list"), Ct = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), ut = Symbol.for("react.scope"), zn = Symbol.for("react.debug_trace_mode"), Xt = Symbol.for("react.offscreen"), an = Symbol.for("react.legacy_hidden"), gr = Symbol.for("react.cache"), hi = Symbol.for("react.tracing_marker"), Lt = Symbol.iterator, Gn = "@@iterator";
    function _r(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Lt && e[Lt] || e[Gn];
      return typeof t == "function" ? t : null;
    }
    var ot = Object.assign, ka = 0, cl, Nu, fl, Qr, Io, kr, Qo;
    function Wo() {
    }
    Wo.__reactDisabledLog = !0;
    function Js() {
      {
        if (ka === 0) {
          cl = console.log, Nu = console.info, fl = console.warn, Qr = console.error, Io = console.group, kr = console.groupCollapsed, Qo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Wo,
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
        ka++;
      }
    }
    function zu() {
      {
        if (ka--, ka === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ot({}, e, {
              value: cl
            }),
            info: ot({}, e, {
              value: Nu
            }),
            warn: ot({}, e, {
              value: fl
            }),
            error: ot({}, e, {
              value: Qr
            }),
            group: ot({}, e, {
              value: Io
            }),
            groupCollapsed: ot({}, e, {
              value: kr
            }),
            groupEnd: ot({}, e, {
              value: Qo
            })
          });
        }
        ka < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var dl = k.ReactCurrentDispatcher, ei;
    function Dr(e, t, a) {
      {
        if (ei === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ei = i && i[1] || "";
          }
        return `
` + ei + e;
      }
    }
    var pl = !1, vl;
    {
      var hl = typeof WeakMap == "function" ? WeakMap : Map;
      vl = new hl();
    }
    function Uu(e, t) {
      if (!e || pl)
        return "";
      {
        var a = vl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      pl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = dl.current, dl.current = null, Js();
      try {
        if (t) {
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
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var x = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && vl.set(e, x), x;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        pl = !1, dl.current = s, zu(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", N = w ? Dr(w) : "";
      return typeof e == "function" && vl.set(e, N), N;
    }
    function Au(e, t, a) {
      return Uu(e, !0);
    }
    function Ni(e, t, a) {
      return Uu(e, !1);
    }
    function If(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function mi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Uu(e, If(e));
      if (typeof e == "string")
        return Dr(e);
      switch (e) {
        case we:
          return Dr("Suspense");
        case vt:
          return Dr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case q:
            return Ni(e.render);
          case Ct:
            return mi(e.type, t, a);
          case Fe: {
            var i = e, u = i._payload, s = i._init;
            try {
              return mi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Mt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Z:
          return Dr(e.type);
        case rn:
          return Dr("Lazy");
        case Oe:
          return Dr("Suspense");
        case Ot:
          return Dr("SuspenseList");
        case ne:
        case We:
        case $e:
          return Ni(e.type);
        case Ne:
          return Ni(e.type.render);
        case oe:
          return Au(e.type);
        default:
          return "";
      }
    }
    function Fu(e) {
      try {
        var t = "", a = e;
        do
          t += Mt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Wl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function ju(e) {
      return e.displayName || "Context";
    }
    function Rt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ha:
          return "Fragment";
        case xr:
          return "Portal";
        case vi:
          return "Profiler";
        case pi:
          return "StrictMode";
        case we:
          return "Suspense";
        case vt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            var t = e;
            return ju(t) + ".Consumer";
          case R:
            var a = e;
            return ju(a._context) + ".Provider";
          case q:
            return Wl(e, e.render, "ForwardRef");
          case Ct:
            var i = e.displayName || null;
            return i !== null ? i : Rt(e.type) || "Memo";
          case Fe: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Rt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Hu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Pu(e) {
      return e.displayName || "Context";
    }
    function Xe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case jt:
          return "Cache";
        case bt:
          var i = a;
          return Pu(i) + ".Consumer";
        case Pe:
          var u = a;
          return Pu(u._context) + ".Provider";
        case Wt:
          return "DehydratedFragment";
        case Ne:
          return Hu(a, a.render, "ForwardRef");
        case Ze:
          return "Fragment";
        case Z:
          return a;
        case ve:
          return "Portal";
        case te:
          return "Root";
        case he:
          return "Text";
        case rn:
          return Rt(a);
        case Be:
          return a === pi ? "StrictMode" : "Mode";
        case Ue:
          return "Offscreen";
        case dt:
          return "Profiler";
        case En:
          return "Scope";
        case Oe:
          return "Suspense";
        case Ot:
          return "SuspenseList";
        case kt:
          return "TracingMarker";
        case oe:
        case ne:
        case xn:
        case We:
        case pt:
        case $e:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Gl = k.ReactDebugCurrentFrame, mn = null, Wr = !1;
    function Or() {
      {
        if (mn === null)
          return null;
        var e = mn._debugOwner;
        if (e !== null && typeof e < "u")
          return Xe(e);
      }
      return null;
    }
    function ml() {
      return mn === null ? "" : Fu(mn);
    }
    function Cn() {
      Gl.getCurrentStack = null, mn = null, Wr = !1;
    }
    function Bt(e) {
      Gl.getCurrentStack = e === null ? null : ml, mn = e, Wr = !1;
    }
    function Zs() {
      return mn;
    }
    function Gr(e) {
      Wr = e;
    }
    function qn(e) {
      return "" + e;
    }
    function yi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return mr(e), e;
        default:
          return "";
      }
    }
    var ec = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function zi(e, t) {
      ec[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function yl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function tc(e) {
      return e._valueTracker;
    }
    function Da(e) {
      e._valueTracker = null;
    }
    function gl(e) {
      var t = "";
      return e && (yl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ui(e) {
      var t = yl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      mr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            mr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            mr(p), i = "" + p;
          },
          stopTracking: function() {
            Da(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Oa(e) {
      tc(e) || (e._valueTracker = Ui(e));
    }
    function Vu(e) {
      if (!e)
        return !1;
      var t = tc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = gl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Sl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var El = !1, ql = !1, Bu = !1, Go = !1;
    function ti(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = ot({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i != null ? i : a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      zi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ql && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), ql = !0), t.value !== void 0 && t.defaultValue !== void 0 && !El && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), El = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: yi(t.value != null ? t.value : i),
        controlled: ti(t)
      };
    }
    function z(e, t) {
      var a = e, i = t.checked;
      i != null && va(a, "checked", i, !1);
    }
    function j(e, t) {
      var a = e;
      {
        var i = ti(t);
        !a._wrapperState.controlled && i && !Go && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Go = !0), a._wrapperState.controlled && !i && !Bu && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Bu = !0);
      }
      z(e, t);
      var u = yi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || a.value != u) && (a.value = qn(u)) : a.value !== qn(u) && (a.value = qn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ze(a, t.type, u) : t.hasOwnProperty("defaultValue") && ze(a, t.type, yi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function K(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = qn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function je(e, t) {
      var a = e;
      j(a, t), ue(a, t);
    }
    function ue(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Br(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = _h(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Vu(f), j(f, p);
          }
        }
      }
    }
    function ze(e, t, a) {
      (t !== "number" || Sl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = qn(e._wrapperState.initialValue) : e.defaultValue !== qn(a) && (e.defaultValue = qn(a)));
    }
    var ht = !1, Dt = !1, Kt = !1;
    function Qt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? F.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Dt || (Dt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Kt || (Kt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ht && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ht = !0);
    }
    function Jt(e, t) {
      t.value != null && e.setAttribute("value", qn(yi(t.value)));
    }
    var tn = Array.isArray;
    function Tt(e) {
      return tn(e);
    }
    var Ai;
    Ai = !1;
    function $u() {
      var e = Or();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var qo = ["value", "defaultValue"];
    function Qf(e) {
      {
        zi("select", e);
        for (var t = 0; t < qo.length; t++) {
          var a = qo[t];
          if (e[a] != null) {
            var i = Tt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, $u()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, $u());
          }
        }
      }
    }
    function ni(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = qn(yi(a)), x = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          x === null && !u[w].disabled && (x = u[w]);
        }
        x !== null && (x.selected = !0);
      }
    }
    function Xo(e, t) {
      return ot({}, t, {
        value: void 0
      });
    }
    function Ko(e, t) {
      var a = e;
      Qf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Ai && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ai = !0);
    }
    function Wf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ni(a, !!t.multiple, i, !1) : t.defaultValue != null && ni(a, !!t.multiple, t.defaultValue, !0);
    }
    function Im(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ni(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? ni(a, !!t.multiple, t.defaultValue, !0) : ni(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Qm(e, t) {
      var a = e, i = t.value;
      i != null && ni(a, !!t.multiple, i, !1);
    }
    var Gf = !1;
    function qf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ot({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: qn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Jp(e, t) {
      var a = e;
      zi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Gf && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component"), Gf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Tt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: yi(i)
      };
    }
    function Zp(e, t) {
      var a = e, i = yi(t.value), u = yi(t.defaultValue);
      if (i != null) {
        var s = qn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = qn(u));
    }
    function ev(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Xf(e, t) {
      Zp(e, t);
    }
    var Fi = "http://www.w3.org/1999/xhtml", Wm = "http://www.w3.org/1998/Math/MathML", Kf = "http://www.w3.org/2000/svg";
    function nc(e) {
      switch (e) {
        case "svg":
          return Kf;
        case "math":
          return Wm;
        default:
          return Fi;
      }
    }
    function Jf(e, t) {
      return e == null || e === Fi ? nc(t) : e === Kf && t === "foreignObject" ? Fi : e;
    }
    var Gm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, rc, tv = Gm(function(e, t) {
      if (e.namespaceURI === Kf && !("innerHTML" in e)) {
        rc = rc || document.createElement("div"), rc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = rc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), qr = 1, ji = 3, Un = 8, ri = 9, Xl = 11, ac = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ji) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, nv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Yu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function rv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var av = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Yu).forEach(function(e) {
      av.forEach(function(t) {
        Yu[rv(t, e)] = Yu[e];
      });
    });
    function ic(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Yu.hasOwnProperty(e) && Yu[e]) ? t + "px" : (hr(t, e), ("" + t).trim());
    }
    var Iu = /([A-Z])/g, qm = /^ms-/;
    function Xm(e) {
      return e.replace(Iu, "-$1").toLowerCase().replace(qm, "-ms-");
    }
    var iv = function() {
    };
    {
      var lv = /^(?:webkit|moz|o)[A-Z]/, uv = /^-ms-/, Jo = /-(.)/g, Qu = /;\s*$/, Wu = {}, Gu = {}, ov = !1, Zf = !1, ed = function(e) {
        return e.replace(Jo, function(t, a) {
          return a.toUpperCase();
        });
      }, td = function(e) {
        Wu.hasOwnProperty(e) && Wu[e] || (Wu[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          ed(e.replace(uv, "ms-"))
        ));
      }, sv = function(e) {
        Wu.hasOwnProperty(e) && Wu[e] || (Wu[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, cv = function(e, t) {
        Gu.hasOwnProperty(t) && Gu[t] || (Gu[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Qu, "")));
      }, fv = function(e, t) {
        ov || (ov = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Km = function(e, t) {
        Zf || (Zf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      iv = function(e, t) {
        e.indexOf("-") > -1 ? td(e) : lv.test(e) ? sv(e) : Qu.test(t) && cv(e, t), typeof t == "number" && (isNaN(t) ? fv(e, t) : isFinite(t) || Km(e, t));
      };
    }
    var Jm = iv;
    function Zm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (!!e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Xm(i)) + ":", t += ic(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function dv(e, t) {
      var a = e.style;
      for (var i in t)
        if (!!t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Jm(i, t[i]);
          var s = ic(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ey(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function La(e) {
      var t = {};
      for (var a in e)
        for (var i = nv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Zo(e, t) {
      {
        if (!t)
          return;
        var a = La(e), i = La(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ey(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var pv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
    }, vv = ot({
      menuitem: !0
    }, pv), hv = "__html";
    function lc(e, t) {
      if (!!t) {
        if (vv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(hv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Hi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var uc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, mv = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ai = {}, nd = new RegExp("^(aria)-[" + ke + "]*$"), es = new RegExp("^(aria)[A-Z][" + ke + "]*$");
    function rd(e, t) {
      {
        if (Qn.call(ai, t) && ai[t])
          return !0;
        if (es.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = mv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ai[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ai[t] = !0, !0;
        }
        if (nd.test(t)) {
          var u = t.toLowerCase(), s = mv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return ai[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ai[t] = !0, !0;
        }
      }
      return !0;
    }
    function yv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = rd(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function oc(e, t) {
      Hi(e, t) || yv(e, t);
    }
    var Kl = !1;
    function ad(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Kl && (Kl = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var id = function() {
    };
    {
      var Xn = {}, ld = /^on./, gv = /^on[^A-Z]/, Sv = new RegExp("^(aria)-[" + ke + "]*$"), Ev = new RegExp("^(aria)[A-Z][" + ke + "]*$");
      id = function(e, t, a, i) {
        if (Qn.call(Xn, t) && Xn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Xn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Xn[t] = !0, !0;
          if (ld.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Xn[t] = !0, !0;
        } else if (ld.test(t))
          return gv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Xn[t] = !0, !0;
        if (Sv.test(t) || Ev.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Xn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Xn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Xn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Xn[t] = !0, !0;
        var v = br(t), y = v !== null && v.type === fa;
        if (uc.hasOwnProperty(u)) {
          var g = uc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Xn[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Xn[t] = !0, !0;
        return typeof a == "boolean" && yr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Xn[t] = !0, !0) : y ? !0 : yr(t, a, v, !1) ? (Xn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === vn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Xn[t] = !0), !0);
      };
    }
    var Cv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = id(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Rv(e, t, a) {
      Hi(e, t) || Cv(e, t, a);
    }
    var Pi = 1, ts = 1 << 1, Jl = 1 << 2, ty = Pi | ts | Jl, ns = null;
    function rs(e) {
      ns !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ns = e;
    }
    function ny() {
      ns === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ns = null;
    }
    function Tv(e) {
      return e === ns;
    }
    function sc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ji ? t.parentNode : t;
    }
    var Zt = null, Cl = null, Vi = null;
    function qu(e) {
      var t = Do(e);
      if (!!t) {
        if (typeof Zt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = _h(a);
          Zt(t.stateNode, t.type, i);
        }
      }
    }
    function wv(e) {
      Zt = e;
    }
    function cc(e) {
      Cl ? Vi ? Vi.push(e) : Vi = [e] : Cl = e;
    }
    function as() {
      return Cl !== null || Vi !== null;
    }
    function is() {
      if (!!Cl) {
        var e = Cl, t = Vi;
        if (Cl = null, Vi = null, qu(e), t)
          for (var a = 0; a < t.length; a++)
            qu(t[a]);
      }
    }
    var Zl = function(e, t) {
      return e(t);
    }, ud = function() {
    }, od = !1;
    function ry() {
      var e = as();
      e && (ud(), is());
    }
    function sd(e, t, a) {
      if (od)
        return e(t, a);
      od = !0;
      try {
        return Zl(e, t, a);
      } finally {
        od = !1, ry();
      }
    }
    function fc(e, t, a) {
      Zl = e, ud = a;
    }
    function dc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function cd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && dc(t));
        default:
          return !1;
      }
    }
    function eu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = _h(a);
      if (i === null)
        return null;
      var u = i[t];
      if (cd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ls = !1;
    if (pn)
      try {
        var tu = {};
        Object.defineProperty(tu, "passive", {
          get: function() {
            ls = !0;
          }
        }), window.addEventListener("test", tu, tu), window.removeEventListener("test", tu, tu);
      } catch {
        ls = !1;
      }
    function bv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var fd = bv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var dd = document.createElement("react");
      fd = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), x = !1, w = !0, N = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function H() {
          dd.removeEventListener(P, Me, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = N);
        }
        var se = Array.prototype.slice.call(arguments, 3);
        function Me() {
          x = !0, H(), a.apply(i, se), w = !1;
        }
        var xe, _t = !1, St = !1;
        function O(L) {
          if (xe = L.error, _t = !0, xe === null && L.colno === 0 && L.lineno === 0 && (St = !0), L.defaultPrevented && xe != null && typeof xe == "object")
            try {
              xe._suppressLogging = !0;
            } catch {
            }
        }
        var P = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), dd.addEventListener(P, Me, !1), g.initEvent(P, !1, !1), dd.dispatchEvent(g), A && Object.defineProperty(window, "event", A), x && w && (_t ? St && (xe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : xe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(xe)), window.removeEventListener("error", O), !x)
          return H(), bv.apply(this, arguments);
      };
    }
    var ay = fd, Rl = !1, ii = null, us = !1, Tl = null, gi = {
      onError: function(e) {
        Rl = !0, ii = e;
      }
    };
    function nu(e, t, a, i, u, s, f, p, v) {
      Rl = !1, ii = null, ay.apply(gi, arguments);
    }
    function Bi(e, t, a, i, u, s, f, p, v) {
      if (nu.apply(this, arguments), Rl) {
        var y = vd();
        us || (us = !0, Tl = y);
      }
    }
    function pd() {
      if (us) {
        var e = Tl;
        throw us = !1, Tl = null, e;
      }
    }
    function iy() {
      return Rl;
    }
    function vd() {
      if (Rl) {
        var e = ii;
        return Rl = !1, ii = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ma(e) {
      return e._reactInternals;
    }
    function os(e) {
      return e._reactInternals !== void 0;
    }
    function Xu(e, t) {
      e._reactInternals = t;
    }
    var Le = 0, wl = 1, ln = 2, rt = 4, Ft = 16, $t = 32, Si = 64, Ge = 128, Rn = 256, Xr = 512, Na = 1024, cn = 2048, za = 4096, bl = 8192, ss = 16384, pc = cn | rt | Si | Xr | Na | ss, xv = 32767, ma = 32768, Kn = 65536, cs = 131072, hd = 1048576, md = 2097152, Kr = 4194304, xl = 8388608, Jr = 16777216, ru = 33554432, Ku = rt | Na | 0, Zr = ln | rt | Ft | $t | Xr | za | bl, Sr = rt | Si | Xr | bl, Ua = cn | Ft, rr = Kr | xl | md, $i = k.ReactCurrentOwner;
    function ya(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (ln | za)) !== Le && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === te ? a : null;
    }
    function yd(e) {
      if (e.tag === Oe) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function vc(e) {
      return e.tag === te ? e.stateNode.containerInfo : null;
    }
    function gd(e) {
      return ya(e) === e;
    }
    function ga(e) {
      {
        var t = $i.current;
        if (t !== null && t.tag === oe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Xe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Ma(e);
      return u ? ya(u) === u : !1;
    }
    function ea(e) {
      if (ya(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function un(e) {
      var t = e.alternate;
      if (!t) {
        var a = ya(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return ea(s), e;
            if (v === u)
              return ea(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== te)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Aa(e) {
      var t = un(e);
      return t !== null ? Sd(t) : null;
    }
    function Sd(e) {
      if (e.tag === Z || e.tag === he)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Sd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function _v(e) {
      var t = un(e);
      return t !== null ? hc(t) : null;
    }
    function hc(e) {
      if (e.tag === Z || e.tag === he)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ve) {
          var a = hc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var mc = V.unstable_scheduleCallback, kv = V.unstable_cancelCallback, yc = V.unstable_shouldYield, Dv = V.unstable_requestPaint, yn = V.unstable_now, Ed = V.unstable_getCurrentPriorityLevel, gc = V.unstable_ImmediatePriority, au = V.unstable_UserBlockingPriority, Ei = V.unstable_NormalPriority, Ov = V.unstable_LowPriority, Sc = V.unstable_IdlePriority, Ju = V.unstable_yieldValue, Lv = V.unstable_setDisableYieldValue, Yi = null, Pn = null, ae = null, Fa = !1, Sa = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Cd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        it && (e = ot({}, e, {
          getLaneLabelMap: Ii,
          injectProfilingHooks: Mv
        })), Yi = t.inject(e), Pn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Rd(e, t) {
      if (Pn && typeof Pn.onScheduleFiberRoot == "function")
        try {
          Pn.onScheduleFiberRoot(Yi, e, t);
        } catch (a) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Zu(e, t) {
      if (Pn && typeof Pn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ge) === Ge;
          if (at) {
            var i;
            switch (t) {
              case On:
                i = gc;
                break;
              case Wi:
                i = au;
                break;
              case Ci:
                i = Ei;
                break;
              case fo:
                i = Sc;
                break;
              default:
                i = Ei;
                break;
            }
            Pn.onCommitFiberRoot(Yi, e, i, a);
          }
        } catch (u) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function ja(e) {
      if (Pn && typeof Pn.onPostCommitFiberRoot == "function")
        try {
          Pn.onPostCommitFiberRoot(Yi, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function iu(e) {
      if (Pn && typeof Pn.onCommitFiberUnmount == "function")
        try {
          Pn.onCommitFiberUnmount(Yi, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function An(e) {
      if (typeof Ju == "function" && (Lv(e), yt(e)), Pn && typeof Pn.setStrictMode == "function")
        try {
          Pn.setStrictMode(Yi, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Mv(e) {
      ae = e;
    }
    function Ii() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < hs; a++) {
          var i = uy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function _l(e) {
      ae !== null && typeof ae.markCommitStarted == "function" && ae.markCommitStarted(e);
    }
    function Ec() {
      ae !== null && typeof ae.markCommitStopped == "function" && ae.markCommitStopped();
    }
    function eo(e) {
      ae !== null && typeof ae.markComponentRenderStarted == "function" && ae.markComponentRenderStarted(e);
    }
    function ta() {
      ae !== null && typeof ae.markComponentRenderStopped == "function" && ae.markComponentRenderStopped();
    }
    function kl(e) {
      ae !== null && typeof ae.markComponentPassiveEffectMountStarted == "function" && ae.markComponentPassiveEffectMountStarted(e);
    }
    function Cc() {
      ae !== null && typeof ae.markComponentPassiveEffectMountStopped == "function" && ae.markComponentPassiveEffectMountStopped();
    }
    function Nv(e) {
      ae !== null && typeof ae.markComponentPassiveEffectUnmountStarted == "function" && ae.markComponentPassiveEffectUnmountStarted(e);
    }
    function Rc() {
      ae !== null && typeof ae.markComponentPassiveEffectUnmountStopped == "function" && ae.markComponentPassiveEffectUnmountStopped();
    }
    function zv(e) {
      ae !== null && typeof ae.markComponentLayoutEffectMountStarted == "function" && ae.markComponentLayoutEffectMountStarted(e);
    }
    function fs() {
      ae !== null && typeof ae.markComponentLayoutEffectMountStopped == "function" && ae.markComponentLayoutEffectMountStopped();
    }
    function li(e) {
      ae !== null && typeof ae.markComponentLayoutEffectUnmountStarted == "function" && ae.markComponentLayoutEffectUnmountStarted(e);
    }
    function to() {
      ae !== null && typeof ae.markComponentLayoutEffectUnmountStopped == "function" && ae.markComponentLayoutEffectUnmountStopped();
    }
    function ds(e, t, a) {
      ae !== null && typeof ae.markComponentErrored == "function" && ae.markComponentErrored(e, t, a);
    }
    function lu(e, t, a) {
      ae !== null && typeof ae.markComponentSuspended == "function" && ae.markComponentSuspended(e, t, a);
    }
    function Td(e) {
      ae !== null && typeof ae.markLayoutEffectsStarted == "function" && ae.markLayoutEffectsStarted(e);
    }
    function no() {
      ae !== null && typeof ae.markLayoutEffectsStopped == "function" && ae.markLayoutEffectsStopped();
    }
    function Uv(e) {
      ae !== null && typeof ae.markPassiveEffectsStarted == "function" && ae.markPassiveEffectsStarted(e);
    }
    function wd() {
      ae !== null && typeof ae.markPassiveEffectsStopped == "function" && ae.markPassiveEffectsStopped();
    }
    function fn(e) {
      ae !== null && typeof ae.markRenderStarted == "function" && ae.markRenderStarted(e);
    }
    function Tc() {
      ae !== null && typeof ae.markRenderYielded == "function" && ae.markRenderYielded();
    }
    function wc() {
      ae !== null && typeof ae.markRenderStopped == "function" && ae.markRenderStopped();
    }
    function bd(e) {
      ae !== null && typeof ae.markRenderScheduled == "function" && ae.markRenderScheduled(e);
    }
    function bc(e, t) {
      ae !== null && typeof ae.markForceUpdateScheduled == "function" && ae.markForceUpdateScheduled(e, t);
    }
    function ps(e, t) {
      ae !== null && typeof ae.markStateUpdateScheduled == "function" && ae.markStateUpdateScheduled(e, t);
    }
    var Re = 0, be = 1, qe = 2, mt = 8, Ea = 16, ro = Math.clz32 ? Math.clz32 : Er, vs = Math.log, ly = Math.LN2;
    function Er(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (vs(t) / ly | 0) | 0;
    }
    var hs = 31, Y = 0, Fn = 0, De = 1, ar = 2, Ca = 4, Qi = 8, Ha = 16, ao = 32, uu = 4194240, io = 64, xc = 128, _c = 256, kc = 512, Dc = 1024, Oc = 2048, ou = 4096, Lc = 8192, lo = 16384, uo = 32768, Mc = 65536, ms = 131072, Nc = 262144, zc = 524288, Uc = 1048576, Ac = 2097152, oo = 130023424, su = 4194304, Fc = 8388608, jc = 16777216, xd = 33554432, Hc = 67108864, Av = su, ys = 134217728, _d = 268435455, so = 268435456, Dl = 536870912, Cr = 1073741824;
    function uy(e) {
      {
        if (e & De)
          return "Sync";
        if (e & ar)
          return "InputContinuousHydration";
        if (e & Ca)
          return "InputContinuous";
        if (e & Qi)
          return "DefaultHydration";
        if (e & Ha)
          return "Default";
        if (e & ao)
          return "TransitionHydration";
        if (e & uu)
          return "Transition";
        if (e & oo)
          return "Retry";
        if (e & ys)
          return "SelectiveHydration";
        if (e & so)
          return "IdleHydration";
        if (e & Dl)
          return "Idle";
        if (e & Cr)
          return "Offscreen";
      }
    }
    var nn = -1, Pc = io, na = su;
    function cu(e) {
      switch (Dn(e)) {
        case De:
          return De;
        case ar:
          return ar;
        case Ca:
          return Ca;
        case Qi:
          return Qi;
        case Ha:
          return Ha;
        case ao:
          return ao;
        case io:
        case xc:
        case _c:
        case kc:
        case Dc:
        case Oc:
        case ou:
        case Lc:
        case lo:
        case uo:
        case Mc:
        case ms:
        case Nc:
        case zc:
        case Uc:
        case Ac:
          return e & uu;
        case su:
        case Fc:
        case jc:
        case xd:
        case Hc:
          return e & oo;
        case ys:
          return ys;
        case so:
          return so;
        case Dl:
          return Dl;
        case Cr:
          return Cr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function fu(e, t) {
      var a = e.pendingLanes;
      if (a === Y)
        return Y;
      var i = Y, u = e.suspendedLanes, s = e.pingedLanes, f = a & _d;
      if (f !== Y) {
        var p = f & ~u;
        if (p !== Y)
          i = cu(p);
        else {
          var v = f & s;
          v !== Y && (i = cu(v));
        }
      } else {
        var y = a & ~u;
        y !== Y ? i = cu(y) : s !== Y && (i = cu(s));
      }
      if (i === Y)
        return Y;
      if (t !== Y && t !== i && (t & u) === Y) {
        var g = Dn(i), x = Dn(t);
        if (g >= x || g === Ha && (x & uu) !== Y)
          return t;
      }
      (i & Ca) !== Y && (i |= a & Ha);
      var w = e.entangledLanes;
      if (w !== Y)
        for (var N = e.entanglements, A = i & w; A > 0; ) {
          var H = Ll(A), se = 1 << H;
          i |= N[H], A &= ~se;
        }
      return i;
    }
    function Fv(e, t) {
      for (var a = e.eventTimes, i = nn; t > 0; ) {
        var u = Ll(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function jv(e, t) {
      switch (e) {
        case De:
        case ar:
        case Ca:
          return t + 250;
        case Qi:
        case Ha:
        case ao:
        case io:
        case xc:
        case _c:
        case kc:
        case Dc:
        case Oc:
        case ou:
        case Lc:
        case lo:
        case uo:
        case Mc:
        case ms:
        case Nc:
        case zc:
        case Uc:
        case Ac:
          return t + 5e3;
        case su:
        case Fc:
        case jc:
        case xd:
        case Hc:
          return nn;
        case ys:
        case so:
        case Dl:
        case Cr:
          return nn;
        default:
          return S("Should have found matching lanes. This is a bug in React."), nn;
      }
    }
    function Hv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ll(f), v = 1 << p, y = s[p];
        y === nn ? ((v & i) === Y || (v & u) !== Y) && (s[p] = jv(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function kd(e) {
      return cu(e.pendingLanes);
    }
    function Ol(e) {
      var t = e.pendingLanes & ~Cr;
      return t !== Y ? t : t & Cr ? Cr : Y;
    }
    function Dd(e) {
      return (e & De) !== Y;
    }
    function gs(e) {
      return (e & _d) !== Y;
    }
    function Pv(e) {
      return (e & oo) === e;
    }
    function Vv(e) {
      var t = De | Ca | Ha;
      return (e & t) === Y;
    }
    function Bv(e) {
      return (e & uu) === e;
    }
    function Ss(e, t) {
      var a = ar | Ca | Qi | Ha;
      return (t & a) !== Y;
    }
    function $v(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Od(e) {
      return (e & uu) !== Y;
    }
    function Yv() {
      var e = Pc;
      return Pc <<= 1, (Pc & uu) === Y && (Pc = io), e;
    }
    function ra() {
      var e = na;
      return na <<= 1, (na & oo) === Y && (na = su), e;
    }
    function Dn(e) {
      return e & -e;
    }
    function co(e) {
      return Dn(e);
    }
    function Ll(e) {
      return 31 - ro(e);
    }
    function Vc(e) {
      return Ll(e);
    }
    function aa(e, t) {
      return (e & t) !== Y;
    }
    function du(e, t) {
      return (e & t) === t;
    }
    function tt(e, t) {
      return e | t;
    }
    function Es(e, t) {
      return e & ~t;
    }
    function Bc(e, t) {
      return e & t;
    }
    function oy(e) {
      return e;
    }
    function Iv(e, t) {
      return e !== Fn && e < t ? e : t;
    }
    function Cs(e) {
      for (var t = [], a = 0; a < hs; a++)
        t.push(e);
      return t;
    }
    function pu(e, t, a) {
      e.pendingLanes |= t, t !== Dl && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = Vc(t);
      i[u] = a;
    }
    function Qv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ll(i), s = 1 << u;
        a[u] = nn, i &= ~s;
      }
    }
    function $c(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Yc(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ll(f), v = 1 << p;
        i[p] = Y, u[p] = nn, s[p] = nn, f &= ~v;
      }
    }
    function Ld(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Ll(u), f = 1 << s;
        f & t | i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Wv(e, t) {
      var a = Dn(t), i;
      switch (a) {
        case Ca:
          i = ar;
          break;
        case Ha:
          i = Qi;
          break;
        case io:
        case xc:
        case _c:
        case kc:
        case Dc:
        case Oc:
        case ou:
        case Lc:
        case lo:
        case uo:
        case Mc:
        case ms:
        case Nc:
        case zc:
        case Uc:
        case Ac:
        case su:
        case Fc:
        case jc:
        case xd:
        case Hc:
          i = ao;
          break;
        case Dl:
          i = so;
          break;
        default:
          i = Fn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Fn ? Fn : i;
    }
    function Ic(e, t, a) {
      if (!!Sa)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Vc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Md(e, t) {
      if (!!Sa)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Vc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Rs(e, t) {
      return null;
    }
    var On = De, Wi = Ca, Ci = Ha, fo = Dl, po = Fn;
    function Pa() {
      return po;
    }
    function Tn(e) {
      po = e;
    }
    function Rr(e, t) {
      var a = po;
      try {
        return po = e, t();
      } finally {
        po = a;
      }
    }
    function sy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function cy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function vo(e, t) {
      return e !== 0 && e < t;
    }
    function ir(e) {
      var t = Dn(e);
      return vo(On, t) ? vo(Wi, t) ? gs(t) ? Ci : fo : Wi : On;
    }
    function Qc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var me;
    function ho(e) {
      me = e;
    }
    function Nd(e) {
      me(e);
    }
    var Wc;
    function fy(e) {
      Wc = e;
    }
    var mo;
    function Gc(e) {
      mo = e;
    }
    var qc;
    function Gv(e) {
      qc = e;
    }
    var zd;
    function qv(e) {
      zd = e;
    }
    var Ts = !1, yo = [], dn = null, Jn = null, Lr = null, go = /* @__PURE__ */ new Map(), So = /* @__PURE__ */ new Map(), Zn = [], Xv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ri(e) {
      return Xv.indexOf(e) > -1;
    }
    function dy(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Ud(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          dn = null;
          break;
        case "dragenter":
        case "dragleave":
          Jn = null;
          break;
        case "mouseover":
        case "mouseout":
          Lr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          go.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          So.delete(i);
          break;
        }
      }
    }
    function Eo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = dy(t, a, i, u, s);
        if (t !== null) {
          var p = Do(t);
          p !== null && Wc(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Kv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return dn = Eo(dn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Jn = Eo(Jn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Lr = Eo(Lr, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return go.set(y, Eo(go.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, x = g.pointerId;
          return So.set(x, Eo(So.get(x) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Ad(e) {
      var t = Us(e.target);
      if (t !== null) {
        var a = ya(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Oe) {
            var u = yd(a);
            if (u !== null) {
              e.blockedOn = u, zd(e.priority, function() {
                mo(a);
              });
              return;
            }
          } else if (i === te) {
            var s = a.stateNode;
            if (Qc(s)) {
              e.blockedOn = vc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function py(e) {
      for (var t = qc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Zn.length && vo(t, Zn[i].priority); i++)
        ;
      Zn.splice(i, 0, a), i === 0 && Ad(a);
    }
    function vu(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Tr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          rs(s), u.target.dispatchEvent(s), ny();
        } else {
          var f = Do(i);
          return f !== null && Wc(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Xc(e, t, a) {
      vu(e) && a.delete(t);
    }
    function Va() {
      Ts = !1, dn !== null && vu(dn) && (dn = null), Jn !== null && vu(Jn) && (Jn = null), Lr !== null && vu(Lr) && (Lr = null), go.forEach(Xc), So.forEach(Xc);
    }
    function gt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Ts || (Ts = !0, V.unstable_scheduleCallback(V.unstable_NormalPriority, Va)));
    }
    function wn(e) {
      if (yo.length > 0) {
        gt(yo[0], e);
        for (var t = 1; t < yo.length; t++) {
          var a = yo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      dn !== null && gt(dn, e), Jn !== null && gt(Jn, e), Lr !== null && gt(Lr, e);
      var i = function(p) {
        return gt(p, e);
      };
      go.forEach(i), So.forEach(i);
      for (var u = 0; u < Zn.length; u++) {
        var s = Zn[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Zn.length > 0; ) {
        var f = Zn[0];
        if (f.blockedOn !== null)
          break;
        Ad(f), f.blockedOn === null && Zn.shift();
      }
    }
    var on = k.ReactCurrentBatchConfig, Vn = !0;
    function ia(e) {
      Vn = !!e;
    }
    function Co() {
      return Vn;
    }
    function Bn(e, t, a) {
      var i = Kc(t), u;
      switch (i) {
        case On:
          u = ws;
          break;
        case Wi:
          u = hu;
          break;
        case Ci:
        default:
          u = Ro;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ws(e, t, a, i) {
      var u = Pa(), s = on.transition;
      on.transition = null;
      try {
        Tn(On), Ro(e, t, a, i);
      } finally {
        Tn(u), on.transition = s;
      }
    }
    function hu(e, t, a, i) {
      var u = Pa(), s = on.transition;
      on.transition = null;
      try {
        Tn(Wi), Ro(e, t, a, i);
      } finally {
        Tn(u), on.transition = s;
      }
    }
    function Ro(e, t, a, i) {
      !Vn || Fd(e, t, a, i);
    }
    function Fd(e, t, a, i) {
      var u = Tr(e, t, a, i);
      if (u === null) {
        Oy(e, t, i, Ml, a), Ud(e, i);
        return;
      }
      if (Kv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Ud(e, i), t & Jl && Ri(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && Nd(s);
          var f = Tr(e, t, a, i);
          if (f === null && Oy(e, t, i, Ml, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Oy(e, t, i, null, a);
    }
    var Ml = null;
    function Tr(e, t, a, i) {
      Ml = null;
      var u = sc(i), s = Us(u);
      if (s !== null) {
        var f = ya(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Oe) {
            var v = yd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === te) {
            var y = f.stateNode;
            if (Qc(y))
              return vc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Ml = s, null;
    }
    function Kc(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return On;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Wi;
        case "message": {
          var t = Ed();
          switch (t) {
            case gc:
              return On;
            case au:
              return Wi;
            case Ei:
            case Ov:
              return Ci;
            case Sc:
              return fo;
            default:
              return Ci;
          }
        }
        default:
          return Ci;
      }
    }
    function To(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Gi(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Jc(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function jd(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ba = null, wo = null, $a = null;
    function Zc(e) {
      return Ba = e, wo = xs(), !0;
    }
    function bs() {
      Ba = null, wo = null, $a = null;
    }
    function ef() {
      if ($a)
        return $a;
      var e, t = wo, a = t.length, i, u = xs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return $a = u.slice(e, p), $a;
    }
    function xs() {
      return "value" in Ba ? Ba.value : Ba.textContent;
    }
    function mu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function er() {
      return !0;
    }
    function qi() {
      return !1;
    }
    function gn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (!!e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = er : this.isDefaultPrevented = qi, this.isPropagationStopped = qi, this;
      }
      return ot(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          !a || (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = er);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          !a || (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = er);
        },
        persist: function() {
        },
        isPersistent: er
      }), t;
    }
    var $n = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, tf = gn($n), yu = ot({}, $n, {
      view: 0,
      detail: 0
    }), Hd = gn(yu), Pd, Ti, bo;
    function Vd(e) {
      e !== bo && (bo && e.type === "mousemove" ? (Pd = e.screenX - bo.screenX, Ti = e.screenY - bo.screenY) : (Pd = 0, Ti = 0), bo = e);
    }
    var wi = ot({}, yu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Bd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Vd(e), Pd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ti;
      }
    }), nf = gn(wi), gu = ot({}, wi, {
      dataTransfer: 0
    }), Jv = gn(gu), Zv = ot({}, yu, {
      relatedTarget: 0
    }), _s = gn(Zv), rf = ot({}, $n, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), vy = gn(rf), hy = ot({}, $n, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), eh = gn(hy), th = ot({}, $n, {
      data: 0
    }), Nl = gn(th), my = Nl, xo = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, nh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function bn(e) {
      if (e.key) {
        var t = xo[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = mu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? nh[e.keyCode] || "Unidentified" : "";
    }
    var yy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function rh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = yy[e];
      return i ? !!a[i] : !1;
    }
    function Bd(e) {
      return rh;
    }
    var gy = ot({}, yu, {
      key: bn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Bd,
      charCode: function(e) {
        return e.type === "keypress" ? mu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? mu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), ah = gn(gy), ih = ot({}, wi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), lh = gn(ih), Ya = ot({}, yu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Bd
    }), $d = gn(Ya), Sy = ot({}, $n, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), zl = gn(Sy), af = ot({}, wi, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Su = gn(af), lf = [9, 13, 27, 32], uf = 229, ks = pn && "CompositionEvent" in window, Ds = null;
    pn && "documentMode" in document && (Ds = document.documentMode);
    var Yd = pn && "TextEvent" in window && !Ds, uh = pn && (!ks || Ds && Ds > 8 && Ds <= 11), Id = 32, Qd = String.fromCharCode(Id);
    function of() {
      vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), vr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), vr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), vr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Os = !1;
    function oh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
    }
    function Wd(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Ey(e, t) {
      return e === "keydown" && t.keyCode === uf;
    }
    function Gd(e, t) {
      switch (e) {
        case "keyup":
          return lf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== uf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function sf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Ls(e) {
      return e.locale === "ko";
    }
    var Ul = !1;
    function cf(e, t, a, i, u) {
      var s, f;
      if (ks ? s = Wd(t) : Ul ? Gd(t, i) && (s = "onCompositionEnd") : Ey(t, i) && (s = "onCompositionStart"), !s)
        return null;
      uh && !Ls(i) && (!Ul && s === "onCompositionStart" ? Ul = Zc(u) : s === "onCompositionEnd" && Ul && (f = ef()));
      var p = vh(a, s);
      if (p.length > 0) {
        var v = new Nl(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = sf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function sh(e, t) {
      switch (e) {
        case "compositionend":
          return sf(t);
        case "keypress":
          var a = t.which;
          return a !== Id ? null : (Os = !0, Qd);
        case "textInput":
          var i = t.data;
          return i === Qd && Os ? null : i;
        default:
          return null;
      }
    }
    function Cy(e, t) {
      if (Ul) {
        if (e === "compositionend" || !ks && Gd(e, t)) {
          var a = ef();
          return bs(), Ul = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!oh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return uh && !Ls(t) ? null : t.data;
        default:
          return null;
      }
    }
    function ff(e, t, a, i, u) {
      var s;
      if (Yd ? s = sh(t, i) : s = Cy(t, i), !s)
        return null;
      var f = vh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new my("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Ry(e, t, a, i, u, s, f) {
      cf(e, t, a, i, u), ff(e, t, a, i, u);
    }
    var Ms = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function ch(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ms[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function df(e) {
      if (!pn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      vr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      cc(i);
      var u = vh(t, "onChange");
      if (u.length > 0) {
        var s = new tf("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var l = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, o, e, sc(e)), sd(m, t);
    }
    function m(e) {
      U0(e, 0);
    }
    function E(e) {
      var t = gf(e);
      if (Vu(t))
        return e;
    }
    function T(e, t) {
      if (e === "change")
        return t;
    }
    var U = !1;
    pn && (U = df("input") && (!document.documentMode || document.documentMode > 9));
    function W(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", Q);
    }
    function G() {
      !l || (l.detachEvent("onpropertychange", Q), l = null, o = null);
    }
    function Q(e) {
      e.propertyName === "value" && E(o) && d(e);
    }
    function fe(e, t, a) {
      e === "focusin" ? (G(), W(t, a)) : e === "focusout" && G();
    }
    function ge(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return E(o);
    }
    function Ce(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ln(e, t) {
      if (e === "click")
        return E(t);
    }
    function D(e, t) {
      if (e === "input" || e === "change")
        return E(t);
    }
    function b(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ze(e, "number", e.value);
    }
    function M(e, t, a, i, u, s, f) {
      var p = a ? gf(a) : window, v, y;
      if (c(p) ? v = T : ch(p) ? U ? v = D : (v = ge, y = fe) : Ce(p) && (v = Ln), v) {
        var g = v(t, a);
        if (g) {
          r(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && b(p);
    }
    function J() {
      Vr("onMouseEnter", ["mouseout", "mouseover"]), Vr("onMouseLeave", ["mouseout", "mouseover"]), Vr("onPointerEnter", ["pointerout", "pointerover"]), Vr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Te(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Tv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Us(y) || op(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var x = u.ownerDocument;
          x ? g = x.defaultView || x.parentWindow : g = window;
        }
        var w, N;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (w = a, N = A ? Us(A) : null, N !== null) {
            var H = ya(N);
            (N !== H || N.tag !== Z && N.tag !== he) && (N = null);
          }
        } else
          w = null, N = a;
        if (w !== N) {
          var se = nf, Me = "onMouseLeave", xe = "onMouseEnter", _t = "mouse";
          (t === "pointerout" || t === "pointerover") && (se = lh, Me = "onPointerLeave", xe = "onPointerEnter", _t = "pointer");
          var St = w == null ? g : gf(w), O = N == null ? g : gf(N), P = new se(Me, _t + "leave", w, i, u);
          P.target = St, P.relatedTarget = O;
          var L = null, X = Us(u);
          if (X === a) {
            var pe = new se(xe, _t + "enter", N, i, u);
            pe.target = O, pe.relatedTarget = St, L = pe;
          }
          FR(e, P, L, w, N);
        }
      }
    }
    function He(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Se = typeof Object.is == "function" ? Object.is : He;
    function Ve(e, t) {
      if (Se(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Qn.call(t, s) || !Se(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Yn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Nt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Xi(e, t) {
      for (var a = Yn(e), i = 0, u = 0; a; ) {
        if (a.nodeType === ji) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Yn(Nt(a));
      }
    }
    function Ty(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return yR(e, u, s, f, p);
    }
    function yR(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, x = null;
      e:
        for (; ; ) {
          for (var w = null; g === t && (a === 0 || g.nodeType === ji) && (f = s + a), g === i && (u === 0 || g.nodeType === ji) && (p = s + u), g.nodeType === ji && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
            x = g, g = w;
          for (; ; ) {
            if (g === e)
              break e;
            if (x === t && ++v === a && (f = s), x === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
              break;
            g = x, x = g.parentNode;
          }
          g = w;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function gR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (!!i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Xi(e, f), g = Xi(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var x = a.createRange();
          x.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(x), u.extend(g.node, g.offset)) : (x.setEnd(g.node, g.offset), u.addRange(x));
        }
      }
    }
    function T0(e) {
      return e && e.nodeType === ji;
    }
    function w0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : T0(e) ? !1 : T0(t) ? w0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function SR(e) {
      return e && e.ownerDocument && w0(e.ownerDocument.documentElement, e);
    }
    function ER(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function b0() {
      for (var e = window, t = Sl(); t instanceof e.HTMLIFrameElement; ) {
        if (ER(t))
          e = t.contentWindow;
        else
          return t;
        t = Sl(e.document);
      }
      return t;
    }
    function wy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function CR() {
      var e = b0();
      return {
        focusedElem: e,
        selectionRange: wy(e) ? TR(e) : null
      };
    }
    function RR(e) {
      var t = b0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && SR(a)) {
        i !== null && wy(a) && wR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === qr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function TR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ty(e), t || {
        start: 0,
        end: 0
      };
    }
    function wR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : gR(e, t);
    }
    var bR = pn && "documentMode" in document && document.documentMode <= 11;
    function xR() {
      vr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var pf = null, by = null, qd = null, xy = !1;
    function _R(e) {
      if ("selectionStart" in e && wy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function kR(e) {
      return e.window === e ? e.document : e.nodeType === ri ? e : e.ownerDocument;
    }
    function x0(e, t, a) {
      var i = kR(a);
      if (!(xy || pf == null || pf !== Sl(i))) {
        var u = _R(pf);
        if (!qd || !Ve(qd, u)) {
          qd = u;
          var s = vh(by, "onSelect");
          if (s.length > 0) {
            var f = new tf("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = pf;
          }
        }
      }
    }
    function DR(e, t, a, i, u, s, f) {
      var p = a ? gf(a) : window;
      switch (t) {
        case "focusin":
          (ch(p) || p.contentEditable === "true") && (pf = p, by = a, qd = null);
          break;
        case "focusout":
          pf = null, by = null, qd = null;
          break;
        case "mousedown":
          xy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          xy = !1, x0(e, i, u);
          break;
        case "selectionchange":
          if (bR)
            break;
        case "keydown":
        case "keyup":
          x0(e, i, u);
      }
    }
    function fh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var vf = {
      animationend: fh("Animation", "AnimationEnd"),
      animationiteration: fh("Animation", "AnimationIteration"),
      animationstart: fh("Animation", "AnimationStart"),
      transitionend: fh("Transition", "TransitionEnd")
    }, _y = {}, _0 = {};
    pn && (_0 = document.createElement("div").style, "AnimationEvent" in window || (delete vf.animationend.animation, delete vf.animationiteration.animation, delete vf.animationstart.animation), "TransitionEvent" in window || delete vf.transitionend.transition);
    function dh(e) {
      if (_y[e])
        return _y[e];
      if (!vf[e])
        return e;
      var t = vf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in _0)
          return _y[e] = t[a];
      return e;
    }
    var k0 = dh("animationend"), D0 = dh("animationiteration"), O0 = dh("animationstart"), L0 = dh("transitionend"), M0 = /* @__PURE__ */ new Map(), N0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      M0.set(e, t), vr(t, [e]);
    }
    function OR() {
      for (var e = 0; e < N0.length; e++) {
        var t = N0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(k0, "onAnimationEnd"), _o(D0, "onAnimationIteration"), _o(O0, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(L0, "onTransitionEnd");
    }
    function LR(e, t, a, i, u, s, f) {
      var p = M0.get(t);
      if (p !== void 0) {
        var v = tf, y = t;
        switch (t) {
          case "keypress":
            if (mu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = ah;
            break;
          case "focusin":
            y = "focus", v = _s;
            break;
          case "focusout":
            y = "blur", v = _s;
            break;
          case "beforeblur":
          case "afterblur":
            v = _s;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = nf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Jv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = $d;
            break;
          case k0:
          case D0:
          case O0:
            v = vy;
            break;
          case L0:
            v = zl;
            break;
          case "scroll":
            v = Hd;
            break;
          case "wheel":
            v = Su;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = eh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = lh;
            break;
        }
        var g = (s & Jl) !== 0;
        {
          var x = !g && t === "scroll", w = UR(a, p, i.type, g, x);
          if (w.length > 0) {
            var N = new v(p, y, null, i, u);
            e.push({
              event: N,
              listeners: w
            });
          }
        }
      }
    }
    OR(), J(), n(), xR(), of();
    function MR(e, t, a, i, u, s, f) {
      LR(e, t, a, i, u, s);
      var p = (s & ty) === 0;
      p && (Te(e, t, a, i, u), M(e, t, a, i, u), DR(e, t, a, i, u), Ry(e, t, a, i, u));
    }
    var Xd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ky = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Xd));
    function z0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Bi(i, t, void 0, e), e.currentTarget = null;
    }
    function NR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          z0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], x = g.instance, w = g.currentTarget, N = g.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          z0(e, N, w), i = x;
        }
    }
    function U0(e, t) {
      for (var a = (t & Jl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        NR(s, f, a);
      }
      pd();
    }
    function zR(e, t, a, i, u) {
      var s = sc(a), f = [];
      MR(f, e, i, a, s, t), U0(f, t);
    }
    function Sn(e, t) {
      ky.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = cw(t), u = jR(e, a);
      i.has(u) || (A0(t, e, ts, a), i.add(u));
    }
    function Dy(e, t, a) {
      ky.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Jl), A0(a, e, i, t);
    }
    var ph = "_reactListening" + Math.random().toString(36).slice(2);
    function Kd(e) {
      if (!e[ph]) {
        e[ph] = !0, ct.forEach(function(a) {
          a !== "selectionchange" && (ky.has(a) || Dy(a, !1, e), Dy(a, !0, e));
        });
        var t = e.nodeType === ri ? e : e.ownerDocument;
        t !== null && (t[ph] || (t[ph] = !0, Dy("selectionchange", !1, t)));
      }
    }
    function A0(e, t, a, i, u) {
      var s = Bn(e, t, a), f = void 0;
      ls && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Jc(e, t, s, f) : Gi(e, t, s) : f !== void 0 ? jd(e, t, s, f) : To(e, t, s);
    }
    function F0(e, t) {
      return e === t || e.nodeType === Un && e.parentNode === t;
    }
    function Oy(e, t, a, i, u) {
      var s = i;
      if ((t & Pi) === 0 && (t & ts) === 0) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === te || v === ve) {
                var y = p.stateNode.containerInfo;
                if (F0(y, f))
                  break;
                if (v === ve)
                  for (var g = p.return; g !== null; ) {
                    var x = g.tag;
                    if (x === te || x === ve) {
                      var w = g.stateNode.containerInfo;
                      if (F0(w, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var N = Us(y);
                  if (N === null)
                    return;
                  var A = N.tag;
                  if (A === Z || A === he) {
                    p = s = N;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      sd(function() {
        return zR(e, t, a, s);
      });
    }
    function Jd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function UR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var x = y, w = x.stateNode, N = x.tag;
        if (N === Z && w !== null && (g = w, p !== null)) {
          var A = eu(y, p);
          A != null && v.push(Jd(y, A, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function vh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === Z && f !== null) {
          var v = f, y = eu(u, a);
          y != null && i.unshift(Jd(u, y, v));
          var g = eu(u, t);
          g != null && i.push(Jd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function hf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Z);
      return e || null;
    }
    function AR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = hf(s))
        u++;
      for (var f = 0, p = i; p; p = hf(p))
        f++;
      for (; u - f > 0; )
        a = hf(a), u--;
      for (; f - u > 0; )
        i = hf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = hf(a), i = hf(i);
      }
      return null;
    }
    function j0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, x = v.tag;
        if (y !== null && y === i)
          break;
        if (x === Z && g !== null) {
          var w = g;
          if (u) {
            var N = eu(p, s);
            N != null && f.unshift(Jd(p, N, w));
          } else if (!u) {
            var A = eu(p, s);
            A != null && f.push(Jd(p, A, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function FR(e, t, a, i, u) {
      var s = i && u ? AR(i, u) : null;
      i !== null && j0(e, t, i, s, !1), u !== null && a !== null && j0(e, a, u, s, !0);
    }
    function jR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ia = !1, Zd = "dangerouslySetInnerHTML", hh = "suppressContentEditableWarning", ko = "suppressHydrationWarning", H0 = "autoFocus", Ns = "children", zs = "style", mh = "__html", Ly, yh, ep, P0, gh, V0, B0;
    Ly = {
      dialog: !0,
      webview: !0
    }, yh = function(e, t) {
      oc(e, t), ad(e, t), Rv(e, t, {
        registrationNameDependencies: ft,
        possibleRegistrationNames: en
      });
    }, V0 = pn && !document.documentMode, ep = function(e, t, a) {
      if (!Ia) {
        var i = Sh(a), u = Sh(t);
        u !== i && (Ia = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, P0 = function(e) {
      if (!Ia) {
        Ia = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, gh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, B0 = function(e, t) {
      var a = e.namespaceURI === Fi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var HR = /\r\n?/g, PR = /\u0000|\uFFFD/g;
    function Sh(e) {
      Yr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(HR, `
`).replace(PR, "");
    }
    function Eh(e, t, a, i) {
      var u = Sh(t), s = Sh(e);
      if (s !== u && (i && (Ia || (Ia = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && ye))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function $0(e) {
      return e.nodeType === ri ? e : e.ownerDocument;
    }
    function VR() {
    }
    function Ch(e) {
      e.onclick = VR;
    }
    function BR(e, t, a, i, u) {
      for (var s in i)
        if (!!i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === zs)
            f && Object.freeze(f), dv(t, f);
          else if (s === Zd) {
            var p = f ? f[mh] : void 0;
            p != null && tv(t, p);
          } else if (s === Ns)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ac(t, f);
            } else
              typeof f == "number" && ac(t, "" + f);
          else
            s === hh || s === ko || s === H0 || (ft.hasOwnProperty(s) ? f != null && (typeof f != "function" && gh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && va(t, s, f, u));
        }
    }
    function $R(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === zs ? dv(e, f) : s === Zd ? tv(e, f) : s === Ns ? ac(e, f) : va(e, s, f, i);
      }
    }
    function YR(e, t, a, i) {
      var u, s = $0(a), f, p = i;
      if (p === Fi && (p = nc(e)), p === Fi) {
        if (u = Hi(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Fi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Qn.call(Ly, e) && (Ly[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function IR(e, t) {
      return $0(t).createTextNode(e);
    }
    function QR(e, t, a, i) {
      var u = Hi(t, a);
      yh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Xd.length; f++)
            Sn(Xd[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), Sn("invalid", e);
          break;
        case "option":
          Qt(e, a), s = a;
          break;
        case "select":
          Ko(e, a), s = Xo(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Jp(e, a), s = qf(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (lc(t, s), BR(t, e, i, s, u), t) {
        case "input":
          Oa(e), K(e, a, !1);
          break;
        case "textarea":
          Oa(e), ev(e);
          break;
        case "option":
          Jt(e, a);
          break;
        case "select":
          Wf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Ch(e);
          break;
      }
    }
    function WR(e, t, a, i, u) {
      yh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = Xo(e, a), p = Xo(e, i), s = [];
          break;
        case "textarea":
          f = qf(e, a), p = qf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Ch(e);
          break;
      }
      lc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === zs) {
            var x = f[v];
            for (y in x)
              x.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else
            v === Zd || v === Ns || v === hh || v === ko || v === H0 || (ft.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === N || w == null && N == null))
          if (v === zs)
            if (w && Object.freeze(w), N) {
              for (y in N)
                N.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && N[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === Zd) {
            var A = w ? w[mh] : void 0, H = N ? N[mh] : void 0;
            A != null && H !== A && (s = s || []).push(v, A);
          } else
            v === Ns ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === hh || v === ko || (ft.hasOwnProperty(v) ? (w != null && (typeof w != "function" && gh(v, w), v === "onScroll" && Sn("scroll", e)), !s && N !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Zo(g, p[zs]), (s = s || []).push(zs, g)), s;
    }
    function GR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && z(e, u);
      var s = Hi(a, i), f = Hi(a, u);
      switch ($R(e, t, s, f), a) {
        case "input":
          j(e, u);
          break;
        case "textarea":
          Zp(e, u);
          break;
        case "select":
          Im(e, u);
          break;
      }
    }
    function qR(e) {
      {
        var t = e.toLowerCase();
        return uc.hasOwnProperty(t) && uc[t] || null;
      }
    }
    function XR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Hi(t, a), yh(t, a), t) {
        case "dialog":
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Xd.length; y++)
            Sn(Xd[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          C(e, a), Sn("invalid", e);
          break;
        case "option":
          Qt(e, a);
          break;
        case "select":
          Ko(e, a), Sn("invalid", e);
          break;
        case "textarea":
          Jp(e, a), Sn("invalid", e);
          break;
      }
      lc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, x = 0; x < g.length; x++) {
          var w = g[x].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[x].name);
          }
        }
      }
      var N = null;
      for (var A in a)
        if (!!a.hasOwnProperty(A)) {
          var H = a[A];
          if (A === Ns)
            typeof H == "string" ? e.textContent !== H && (a[ko] !== !0 && Eh(e.textContent, H, s, f), N = [Ns, H]) : typeof H == "number" && e.textContent !== "" + H && (a[ko] !== !0 && Eh(e.textContent, H, s, f), N = [Ns, "" + H]);
          else if (ft.hasOwnProperty(A))
            H != null && (typeof H != "function" && gh(A, H), A === "onScroll" && Sn("scroll", e));
          else if (f && !0 && typeof p == "boolean") {
            var se = void 0, Me = p && Ae ? null : br(A);
            if (a[ko] !== !0) {
              if (!(A === hh || A === ko || A === "value" || A === "checked" || A === "selected")) {
                if (A === Zd) {
                  var xe = e.innerHTML, _t = H ? H[mh] : void 0;
                  if (_t != null) {
                    var St = B0(e, _t);
                    St !== xe && ep(A, xe, St);
                  }
                } else if (A === zs) {
                  if (v.delete(A), V0) {
                    var O = Zm(H);
                    se = e.getAttribute("style"), O !== se && ep(A, se, O);
                  }
                } else if (p && !Ae)
                  v.delete(A.toLowerCase()), se = di(e, A, H), H !== se && ep(A, se, H);
                else if (!hn(A, Me, p) && !It(A, H, Me, p)) {
                  var P = !1;
                  if (Me !== null)
                    v.delete(Me.attributeName), se = pa(e, A, H, Me);
                  else {
                    var L = i;
                    if (L === Fi && (L = nc(t)), L === Fi)
                      v.delete(A.toLowerCase());
                    else {
                      var X = qR(A);
                      X !== null && X !== A && (P = !0, v.delete(X)), v.delete(A);
                    }
                    se = di(e, A, H);
                  }
                  var pe = Ae;
                  !pe && H !== se && !P && ep(A, se, H);
                }
              }
            }
          }
        }
      switch (f && v.size > 0 && a[ko] !== !0 && P0(v), t) {
        case "input":
          Oa(e), K(e, a, !0);
          break;
        case "textarea":
          Oa(e), ev(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Ch(e);
          break;
      }
      return N;
    }
    function KR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function My(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (Ia)
          return;
        Ia = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function zy(e, t, a) {
      {
        if (Ia)
          return;
        Ia = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Uy(e, t) {
      {
        if (t === "" || Ia)
          return;
        Ia = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function JR(e, t, a) {
      switch (t) {
        case "input":
          je(e, a);
          return;
        case "textarea":
          Xf(e, a);
          return;
        case "select":
          Qm(e, a);
          return;
      }
    }
    var tp = function() {
    }, np = function() {
    };
    {
      var ZR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], Y0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        "foreignObject",
        "desc",
        "title"
      ], eT = Y0.concat(["button"]), tT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], I0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      np = function(e, t) {
        var a = ot({}, e || I0), i = {
          tag: t
        };
        return Y0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), eT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), ZR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var nT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return tT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, rT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, Q0 = {};
      tp = function(e, t, a) {
        a = a || I0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = nT(e, u) ? null : i, f = s ? null : rT(e, a), p = s || f;
        if (!!p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!Q0[y]) {
            Q0[y] = !0;
            var g = e, x = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", x = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, x, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var Rh = "suppressHydrationWarning", Th = "$", wh = "/$", rp = "$?", ap = "$!", aT = "style", Ay = null, Fy = null;
    function iT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ri:
        case Xl: {
          t = i === ri ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Jf(null, "");
          break;
        }
        default: {
          var s = i === Un ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Jf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = np(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function lT(e, t, a) {
      {
        var i = e, u = Jf(i.namespace, t), s = np(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Mk(e) {
      return e;
    }
    function uT(e) {
      Ay = Co(), Fy = CR();
      var t = null;
      return ia(!1), t;
    }
    function oT(e) {
      RR(Fy), ia(Ay), Ay = null, Fy = null;
    }
    function sT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (tp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = np(f.ancestorInfo, e);
          tp(null, p, v);
        }
        s = f.namespace;
      }
      var y = YR(e, t, a, s);
      return up(u, y), Iy(y, t), y;
    }
    function cT(e, t) {
      e.appendChild(t);
    }
    function fT(e, t, a, i, u) {
      switch (QR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function dT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = np(f.ancestorInfo, t);
          tp(null, p, v);
        }
      }
      return WR(e, t, a, i);
    }
    function jy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function pT(e, t, a, i) {
      {
        var u = a;
        tp(null, e, u.ancestorInfo);
      }
      var s = IR(e, t);
      return up(i, s), s;
    }
    function vT() {
      var e = window.event;
      return e === void 0 ? Ci : Kc(e.type);
    }
    var Hy = typeof setTimeout == "function" ? setTimeout : void 0, hT = typeof clearTimeout == "function" ? clearTimeout : void 0, Py = -1, W0 = typeof Promise == "function" ? Promise : void 0, mT = typeof queueMicrotask == "function" ? queueMicrotask : typeof W0 < "u" ? function(e) {
      return W0.resolve(null).then(e).catch(yT);
    } : Hy;
    function yT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function gT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function ST(e, t, a, i, u, s) {
      GR(e, t, a, i, u), Iy(e, u);
    }
    function G0(e) {
      ac(e, "");
    }
    function ET(e, t, a) {
      e.nodeValue = a;
    }
    function CT(e, t) {
      e.appendChild(t);
    }
    function RT(e, t) {
      var a;
      e.nodeType === Un ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Ch(a);
    }
    function TT(e, t, a) {
      e.insertBefore(t, a);
    }
    function wT(e, t, a) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function bT(e, t) {
      e.removeChild(t);
    }
    function xT(e, t) {
      e.nodeType === Un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Vy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Un) {
          var s = u.data;
          if (s === wh)
            if (i === 0) {
              e.removeChild(u), wn(t);
              return;
            } else
              i--;
          else
            (s === Th || s === rp || s === ap) && i++;
        }
        a = u;
      } while (a);
      wn(t);
    }
    function _T(e, t) {
      e.nodeType === Un ? Vy(e.parentNode, t) : e.nodeType === qr && Vy(e, t), wn(e);
    }
    function kT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function DT(e) {
      e.nodeValue = "";
    }
    function OT(e, t) {
      e = e;
      var a = t[aT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = ic("display", i);
    }
    function LT(e, t) {
      e.nodeValue = t;
    }
    function MT(e) {
      e.nodeType === qr ? e.textContent = "" : e.nodeType === ri && e.documentElement && e.removeChild(e.documentElement);
    }
    function NT(e, t, a) {
      return e.nodeType !== qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function zT(e, t) {
      return t === "" || e.nodeType !== ji ? null : e;
    }
    function UT(e) {
      return e.nodeType !== Un ? null : e;
    }
    function q0(e) {
      return e.data === rp;
    }
    function By(e) {
      return e.data === ap;
    }
    function AT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function FT(e, t) {
      e._reactRetry = t;
    }
    function bh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === qr || t === ji)
          break;
        if (t === Un) {
          var a = e.data;
          if (a === Th || a === ap || a === rp)
            break;
          if (a === wh)
            return null;
        }
      }
      return e;
    }
    function ip(e) {
      return bh(e.nextSibling);
    }
    function jT(e) {
      return bh(e.firstChild);
    }
    function HT(e) {
      return bh(e.firstChild);
    }
    function PT(e) {
      return bh(e.nextSibling);
    }
    function VT(e, t, a, i, u, s, f) {
      up(s, e), Iy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & be) !== Re;
      return XR(e, t, a, p, i, y, f);
    }
    function BT(e, t, a, i) {
      return up(a, e), a.mode & be, KR(e, t);
    }
    function $T(e, t) {
      up(t, e);
    }
    function YT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === wh) {
            if (a === 0)
              return ip(t);
            a--;
          } else
            (i === Th || i === ap || i === rp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function X0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === Th || i === ap || i === rp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === wh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function IT(e) {
      wn(e);
    }
    function QT(e) {
      wn(e);
    }
    function WT(e) {
      return e !== "head" && e !== "body";
    }
    function GT(e, t, a, i) {
      var u = !0;
      Eh(t.nodeValue, a, i, u);
    }
    function qT(e, t, a, i, u, s) {
      if (t[Rh] !== !0) {
        var f = !0;
        Eh(i.nodeValue, u, s, f);
      }
    }
    function XT(e, t) {
      t.nodeType === qr ? My(e, t) : t.nodeType === Un || Ny(e, t);
    }
    function KT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === qr ? My(a, t) : t.nodeType === Un || Ny(a, t));
      }
    }
    function JT(e, t, a, i, u) {
      (u || t[Rh] !== !0) && (i.nodeType === qr ? My(a, i) : i.nodeType === Un || Ny(a, i));
    }
    function ZT(e, t, a) {
      zy(e, t);
    }
    function ew(e, t) {
      Uy(e, t);
    }
    function tw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && zy(i, t);
      }
    }
    function nw(e, t) {
      {
        var a = e.parentNode;
        a !== null && Uy(a, t);
      }
    }
    function rw(e, t, a, i, u, s) {
      (s || t[Rh] !== !0) && zy(a, i);
    }
    function aw(e, t, a, i, u) {
      (u || t[Rh] !== !0) && Uy(a, i);
    }
    function iw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function lw(e) {
      Kd(e);
    }
    var mf = Math.random().toString(36).slice(2), yf = "__reactFiber$" + mf, $y = "__reactProps$" + mf, lp = "__reactContainer$" + mf, Yy = "__reactEvents$" + mf, uw = "__reactListeners$" + mf, ow = "__reactHandles$" + mf;
    function sw(e) {
      delete e[yf], delete e[$y], delete e[Yy], delete e[uw], delete e[ow];
    }
    function up(e, t) {
      t[yf] = e;
    }
    function xh(e, t) {
      t[lp] = e;
    }
    function K0(e) {
      e[lp] = null;
    }
    function op(e) {
      return !!e[lp];
    }
    function Us(e) {
      var t = e[yf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[lp] || a[yf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = X0(e); u !== null; ) {
              var s = u[yf];
              if (s)
                return s;
              u = X0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[yf] || e[lp];
      return t && (t.tag === Z || t.tag === he || t.tag === Oe || t.tag === te) ? t : null;
    }
    function gf(e) {
      if (e.tag === Z || e.tag === he)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function _h(e) {
      return e[$y] || null;
    }
    function Iy(e, t) {
      e[$y] = t;
    }
    function cw(e) {
      var t = e[Yy];
      return t === void 0 && (t = e[Yy] = /* @__PURE__ */ new Set()), t;
    }
    var J0 = {}, Z0 = k.ReactDebugCurrentFrame;
    function kh(e) {
      if (e) {
        var t = e._owner, a = mi(e.type, e._source, t ? t.type : null);
        Z0.setExtraStackFrame(a);
      } else
        Z0.setExtraStackFrame(null);
    }
    function Ki(e, t, a, i, u) {
      {
        var s = Function.call.bind(Qn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (kh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), kh(null)), p instanceof Error && !(p.message in J0) && (J0[p.message] = !0, kh(u), S("Failed %s type: %s", a, p.message), kh(null));
          }
      }
    }
    var Qy = [], Dh;
    Dh = [];
    var Eu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function la(e, t) {
      if (Eu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Dh[Eu] && S("Unexpected Fiber popped."), e.current = Qy[Eu], Qy[Eu] = null, Dh[Eu] = null, Eu--;
    }
    function ua(e, t, a) {
      Eu++, Qy[Eu] = e.current, Dh[Eu] = a, e.current = t;
    }
    var Wy;
    Wy = {};
    var ui = {};
    Object.freeze(ui);
    var Cu = Oo(ui), Al = Oo(!1), Gy = ui;
    function Sf(e, t, a) {
      return a && Fl(t) ? Gy : Cu.current;
    }
    function eE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Ef(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ui;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Xe(e) || "Unknown";
          Ki(i, s, "context", p);
        }
        return u && eE(e, t, s), s;
      }
    }
    function Oh() {
      return Al.current;
    }
    function Fl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Lh(e) {
      la(Al, e), la(Cu, e);
    }
    function qy(e) {
      la(Al, e), la(Cu, e);
    }
    function tE(e, t, a) {
      {
        if (Cu.current !== ui)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ua(Cu, t, e), ua(Al, a, e);
      }
    }
    function nE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Xe(e) || "Unknown";
            Wy[s] || (Wy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Xe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Xe(e) || "Unknown";
          Ki(u, f, "child context", v);
        }
        return ot({}, a, f);
      }
    }
    function Mh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ui;
        return Gy = Cu.current, ua(Cu, a, e), ua(Al, Al.current, e), !0;
      }
    }
    function rE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = nE(e, t, Gy);
          i.__reactInternalMemoizedMergedChildContext = u, la(Al, e), la(Cu, e), ua(Cu, u, e), ua(Al, a, e);
        } else
          la(Al, e), ua(Al, a, e);
      }
    }
    function fw(e) {
      {
        if (!gd(e) || e.tag !== oe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case te:
              return t.stateNode.context;
            case oe: {
              var a = t.type;
              if (Fl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, Nh = 1, Ru = null, Xy = !1, Ky = !1;
    function aE(e) {
      Ru === null ? Ru = [e] : Ru.push(e);
    }
    function dw(e) {
      Xy = !0, aE(e);
    }
    function iE() {
      Xy && Mo();
    }
    function Mo() {
      if (!Ky && Ru !== null) {
        Ky = !0;
        var e = 0, t = Pa();
        try {
          var a = !0, i = Ru;
          for (Tn(On); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Ru = null, Xy = !1;
        } catch (s) {
          throw Ru !== null && (Ru = Ru.slice(e + 1)), mc(gc, Mo), s;
        } finally {
          Tn(t), Ky = !1;
        }
      }
      return null;
    }
    var Cf = [], Rf = 0, zh = null, Uh = 0, bi = [], xi = 0, As = null, Tu = 1, wu = "";
    function pw(e) {
      return js(), (e.flags & hd) !== Le;
    }
    function vw(e) {
      return js(), Uh;
    }
    function hw() {
      var e = wu, t = Tu, a = t & ~mw(t);
      return a.toString(32) + e;
    }
    function Fs(e, t) {
      js(), Cf[Rf++] = Uh, Cf[Rf++] = zh, zh = e, Uh = t;
    }
    function lE(e, t, a) {
      js(), bi[xi++] = Tu, bi[xi++] = wu, bi[xi++] = As, As = e;
      var i = Tu, u = wu, s = Ah(i) - 1, f = i & ~(1 << s), p = a + 1, v = Ah(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, x = (f & g).toString(32), w = f >> y, N = s - y, A = Ah(t) + N, H = p << N, se = H | w, Me = x + u;
        Tu = 1 << A | se, wu = Me;
      } else {
        var xe = p << s, _t = xe | f, St = u;
        Tu = 1 << v | _t, wu = St;
      }
    }
    function Jy(e) {
      js();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Fs(e, a), lE(e, a, i);
      }
    }
    function Ah(e) {
      return 32 - ro(e);
    }
    function mw(e) {
      return 1 << Ah(e) - 1;
    }
    function Zy(e) {
      for (; e === zh; )
        zh = Cf[--Rf], Cf[Rf] = null, Uh = Cf[--Rf], Cf[Rf] = null;
      for (; e === As; )
        As = bi[--xi], bi[xi] = null, wu = bi[--xi], bi[xi] = null, Tu = bi[--xi], bi[xi] = null;
    }
    function yw() {
      return js(), As !== null ? {
        id: Tu,
        overflow: wu
      } : null;
    }
    function gw(e, t) {
      js(), bi[xi++] = Tu, bi[xi++] = wu, bi[xi++] = As, Tu = t.id, wu = t.overflow, As = e;
    }
    function js() {
      Nr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Mr = null, _i = null, Ji = !1, Hs = !1, No = null;
    function Sw() {
      Ji && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function uE() {
      Hs = !0;
    }
    function Ew() {
      return Hs;
    }
    function Cw(e) {
      var t = e.stateNode.containerInfo;
      return _i = HT(t), Mr = e, Ji = !0, No = null, Hs = !1, !0;
    }
    function Rw(e, t, a) {
      return _i = PT(t), Mr = e, Ji = !0, No = null, Hs = !1, a !== null && gw(e, a), !0;
    }
    function oE(e, t) {
      switch (e.tag) {
        case te: {
          XT(e.stateNode.containerInfo, t);
          break;
        }
        case Z: {
          var a = (e.mode & be) !== Re;
          JT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            a
          );
          break;
        }
        case Oe: {
          var i = e.memoizedState;
          i.dehydrated !== null && KT(i.dehydrated, t);
          break;
        }
      }
    }
    function sE(e, t) {
      oE(e, t);
      var a = x_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ft) : i.push(a);
    }
    function eg(e, t) {
      {
        if (Hs)
          return;
        switch (e.tag) {
          case te: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Z:
                var i = t.type;
                t.pendingProps, ZT(a, i);
                break;
              case he:
                var u = t.pendingProps;
                ew(a, u);
                break;
            }
            break;
          }
          case Z: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case Z: {
                var v = t.type, y = t.pendingProps, g = (e.mode & be) !== Re;
                rw(
                  s,
                  f,
                  p,
                  v,
                  y,
                  g
                );
                break;
              }
              case he: {
                var x = t.pendingProps, w = (e.mode & be) !== Re;
                aw(
                  s,
                  f,
                  p,
                  x,
                  w
                );
                break;
              }
            }
            break;
          }
          case Oe: {
            var N = e.memoizedState, A = N.dehydrated;
            if (A !== null)
              switch (t.tag) {
                case Z:
                  var H = t.type;
                  t.pendingProps, tw(A, H);
                  break;
                case he:
                  var se = t.pendingProps;
                  nw(A, se);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function cE(e, t) {
      t.flags = t.flags & ~za | ln, eg(e, t);
    }
    function fE(e, t) {
      switch (e.tag) {
        case Z: {
          var a = e.type;
          e.pendingProps;
          var i = NT(t, a);
          return i !== null ? (e.stateNode = i, Mr = e, _i = jT(i), !0) : !1;
        }
        case he: {
          var u = e.pendingProps, s = zT(t, u);
          return s !== null ? (e.stateNode = s, Mr = e, _i = null, !0) : !1;
        }
        case Oe: {
          var f = UT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: yw(),
              retryLane: Cr
            };
            e.memoizedState = p;
            var v = __(f);
            return v.return = e, e.child = v, Mr = e, _i = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function tg(e) {
      return (e.mode & be) !== Re && (e.flags & Ge) === Le;
    }
    function ng(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function rg(e) {
      if (!!Ji) {
        var t = _i;
        if (!t) {
          tg(e) && (eg(Mr, e), ng()), cE(Mr, e), Ji = !1, Mr = e;
          return;
        }
        var a = t;
        if (!fE(e, t)) {
          tg(e) && (eg(Mr, e), ng()), t = ip(a);
          var i = Mr;
          if (!t || !fE(e, t)) {
            cE(Mr, e), Ji = !1, Mr = e;
            return;
          }
          sE(i, a);
        }
      }
    }
    function Tw(e, t, a) {
      var i = e.stateNode, u = !Hs, s = VT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function ww(e) {
      var t = e.stateNode, a = e.memoizedProps, i = BT(t, a, e);
      if (i) {
        var u = Mr;
        if (u !== null)
          switch (u.tag) {
            case te: {
              var s = u.stateNode.containerInfo, f = (u.mode & be) !== Re;
              GT(
                s,
                t,
                a,
                f
              );
              break;
            }
            case Z: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & be) !== Re;
              qT(
                p,
                v,
                y,
                t,
                a,
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function bw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      $T(a, e);
    }
    function xw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return YT(a);
    }
    function dE(e) {
      for (var t = e.return; t !== null && t.tag !== Z && t.tag !== te && t.tag !== Oe; )
        t = t.return;
      Mr = t;
    }
    function Fh(e) {
      if (e !== Mr)
        return !1;
      if (!Ji)
        return dE(e), Ji = !0, !1;
      if (e.tag !== te && (e.tag !== Z || WT(e.type) && !jy(e.type, e.memoizedProps))) {
        var t = _i;
        if (t)
          if (tg(e))
            pE(e), ng();
          else
            for (; t; )
              sE(e, t), t = ip(t);
      }
      return dE(e), e.tag === Oe ? _i = xw(e) : _i = Mr ? ip(e.stateNode) : null, !0;
    }
    function _w() {
      return Ji && _i !== null;
    }
    function pE(e) {
      for (var t = _i; t; )
        oE(e, t), t = ip(t);
    }
    function Tf() {
      Mr = null, _i = null, Ji = !1, Hs = !1;
    }
    function vE() {
      No !== null && (u1(No), No = null);
    }
    function Nr() {
      return Ji;
    }
    function ag(e) {
      No === null ? No = [e] : No.push(e);
    }
    var kw = k.ReactCurrentBatchConfig, Dw = null;
    function Ow() {
      return kw.transition;
    }
    var Zi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Lw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & mt && (t = a), a = a.return;
        return t;
      }, Ps = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, sp = [], cp = [], fp = [], dp = [], pp = [], vp = [], Vs = /* @__PURE__ */ new Set();
      Zi.recordUnsafeLifecycleWarnings = function(e, t) {
        Vs.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && sp.push(e), e.mode & mt && typeof t.UNSAFE_componentWillMount == "function" && cp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & mt && typeof t.UNSAFE_componentWillReceiveProps == "function" && dp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & mt && typeof t.UNSAFE_componentWillUpdate == "function" && vp.push(e));
      }, Zi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        sp.length > 0 && (sp.forEach(function(w) {
          e.add(Xe(w) || "Component"), Vs.add(w.type);
        }), sp = []);
        var t = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(w) {
          t.add(Xe(w) || "Component"), Vs.add(w.type);
        }), cp = []);
        var a = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          a.add(Xe(w) || "Component"), Vs.add(w.type);
        }), fp = []);
        var i = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          i.add(Xe(w) || "Component"), Vs.add(w.type);
        }), dp = []);
        var u = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          u.add(Xe(w) || "Component"), Vs.add(w.type);
        }), pp = []);
        var s = /* @__PURE__ */ new Set();
        if (vp.length > 0 && (vp.forEach(function(w) {
          s.add(Xe(w) || "Component"), Vs.add(w.type);
        }), vp = []), t.size > 0) {
          var f = Ps(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ps(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ps(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Ps(e);
          Qe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ps(a);
          Qe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var x = Ps(u);
          Qe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
      };
      var jh = /* @__PURE__ */ new Map(), hE = /* @__PURE__ */ new Set();
      Zi.recordLegacyContextWarning = function(e, t) {
        var a = Lw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!hE.has(e.type)) {
          var i = jh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], jh.set(a, i)), i.push(e));
        }
      }, Zi.flushLegacyContextWarning = function() {
        jh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Xe(s) || "Component"), hE.add(s.type);
            });
            var u = Ps(i);
            try {
              Bt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Cn();
            }
          }
        });
      }, Zi.discardPendingWarnings = function() {
        sp = [], cp = [], fp = [], dp = [], pp = [], vp = [], jh = /* @__PURE__ */ new Map();
      };
    }
    var ig, lg, ug, og, sg, mE = function(e, t) {
    };
    ig = !1, lg = !1, ug = {}, og = {}, sg = {}, mE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Xe(t) || "Component";
        og[a] || (og[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Mw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function hp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & mt || Ye) && !(a._owner && a._self && a._owner.stateNode !== a._self) && !(a._owner && a._owner.tag !== oe) && !(typeof a.type == "function" && !Mw(a.type)) && a._owner) {
          var u = Xe(e) || "Component";
          ug[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ug[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== oe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Wn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(x) {
            var w = v.refs;
            x === null ? delete w[y] : w[y] = x;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Hh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ph(e) {
      {
        var t = Xe(e) || "Component";
        if (sg[t])
          return;
        sg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function yE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function gE(e) {
      function t(O, P) {
        if (!!e) {
          var L = O.deletions;
          L === null ? (O.deletions = [P], O.flags |= Ft) : L.push(P);
        }
      }
      function a(O, P) {
        if (!e)
          return null;
        for (var L = P; L !== null; )
          t(O, L), L = L.sibling;
        return null;
      }
      function i(O, P) {
        for (var L = /* @__PURE__ */ new Map(), X = P; X !== null; )
          X.key !== null ? L.set(X.key, X) : L.set(X.index, X), X = X.sibling;
        return L;
      }
      function u(O, P) {
        var L = Xs(O, P);
        return L.index = 0, L.sibling = null, L;
      }
      function s(O, P, L) {
        if (O.index = L, !e)
          return O.flags |= hd, P;
        var X = O.alternate;
        if (X !== null) {
          var pe = X.index;
          return pe < P ? (O.flags |= ln, P) : pe;
        } else
          return O.flags |= ln, P;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= ln), O;
      }
      function p(O, P, L, X) {
        if (P === null || P.tag !== he) {
          var pe = a0(L, O.mode, X);
          return pe.return = O, pe;
        } else {
          var ce = u(P, L);
          return ce.return = O, ce;
        }
      }
      function v(O, P, L, X) {
        var pe = L.type;
        if (pe === ha)
          return g(O, P, L.props.children, X, L.key);
        if (P !== null && (P.elementType === pe || T1(P, L) || typeof pe == "object" && pe !== null && pe.$$typeof === Fe && yE(pe) === P.type)) {
          var ce = u(P, L.props);
          return ce.ref = hp(O, P, L), ce.return = O, ce._debugSource = L._source, ce._debugOwner = L._owner, ce;
        }
        var Ie = r0(L, O.mode, X);
        return Ie.ref = hp(O, P, L), Ie.return = O, Ie;
      }
      function y(O, P, L, X) {
        if (P === null || P.tag !== ve || P.stateNode.containerInfo !== L.containerInfo || P.stateNode.implementation !== L.implementation) {
          var pe = i0(L, O.mode, X);
          return pe.return = O, pe;
        } else {
          var ce = u(P, L.children || []);
          return ce.return = O, ce;
        }
      }
      function g(O, P, L, X, pe) {
        if (P === null || P.tag !== Ze) {
          var ce = Yo(L, O.mode, X, pe);
          return ce.return = O, ce;
        } else {
          var Ie = u(P, L);
          return Ie.return = O, Ie;
        }
      }
      function x(O, P, L) {
        if (typeof P == "string" && P !== "" || typeof P == "number") {
          var X = a0("" + P, O.mode, L);
          return X.return = O, X;
        }
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case Za: {
              var pe = r0(P, O.mode, L);
              return pe.ref = hp(O, null, P), pe.return = O, pe;
            }
            case xr: {
              var ce = i0(P, O.mode, L);
              return ce.return = O, ce;
            }
            case Fe: {
              var Ie = P._payload, et = P._init;
              return x(O, et(Ie), L);
            }
          }
          if (Tt(P) || _r(P)) {
            var qt = Yo(P, O.mode, L, null);
            return qt.return = O, qt;
          }
          Hh(O, P);
        }
        return typeof P == "function" && Ph(O), null;
      }
      function w(O, P, L, X) {
        var pe = P !== null ? P.key : null;
        if (typeof L == "string" && L !== "" || typeof L == "number")
          return pe !== null ? null : p(O, P, "" + L, X);
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case Za:
              return L.key === pe ? v(O, P, L, X) : null;
            case xr:
              return L.key === pe ? y(O, P, L, X) : null;
            case Fe: {
              var ce = L._payload, Ie = L._init;
              return w(O, P, Ie(ce), X);
            }
          }
          if (Tt(L) || _r(L))
            return pe !== null ? null : g(O, P, L, X, null);
          Hh(O, L);
        }
        return typeof L == "function" && Ph(O), null;
      }
      function N(O, P, L, X, pe) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var ce = O.get(L) || null;
          return p(P, ce, "" + X, pe);
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case Za: {
              var Ie = O.get(X.key === null ? L : X.key) || null;
              return v(P, Ie, X, pe);
            }
            case xr: {
              var et = O.get(X.key === null ? L : X.key) || null;
              return y(P, et, X, pe);
            }
            case Fe:
              var qt = X._payload, zt = X._init;
              return N(O, P, L, zt(qt), pe);
          }
          if (Tt(X) || _r(X)) {
            var In = O.get(L) || null;
            return g(P, In, X, pe, null);
          }
          Hh(P, X);
        }
        return typeof X == "function" && Ph(P), null;
      }
      function A(O, P, L) {
        {
          if (typeof O != "object" || O === null)
            return P;
          switch (O.$$typeof) {
            case Za:
            case xr:
              mE(O, L);
              var X = O.key;
              if (typeof X != "string")
                break;
              if (P === null) {
                P = /* @__PURE__ */ new Set(), P.add(X);
                break;
              }
              if (!P.has(X)) {
                P.add(X);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.", X);
              break;
            case Fe:
              var pe = O._payload, ce = O._init;
              A(ce(pe), P, L);
              break;
          }
        }
        return P;
      }
      function H(O, P, L, X) {
        for (var pe = null, ce = 0; ce < L.length; ce++) {
          var Ie = L[ce];
          pe = A(Ie, pe, O);
        }
        for (var et = null, qt = null, zt = P, In = 0, Ut = 0, jn = null; zt !== null && Ut < L.length; Ut++) {
          zt.index > Ut ? (jn = zt, zt = null) : jn = zt.sibling;
          var sa = w(O, zt, L[Ut], X);
          if (sa === null) {
            zt === null && (zt = jn);
            break;
          }
          e && zt && sa.alternate === null && t(O, zt), In = s(sa, In, Ut), qt === null ? et = sa : qt.sibling = sa, qt = sa, zt = jn;
        }
        if (Ut === L.length) {
          if (a(O, zt), Nr()) {
            var Pr = Ut;
            Fs(O, Pr);
          }
          return et;
        }
        if (zt === null) {
          for (; Ut < L.length; Ut++) {
            var si = x(O, L[Ut], X);
            si !== null && (In = s(si, In, Ut), qt === null ? et = si : qt.sibling = si, qt = si);
          }
          if (Nr()) {
            var ba = Ut;
            Fs(O, ba);
          }
          return et;
        }
        for (var xa = i(O, zt); Ut < L.length; Ut++) {
          var ca = N(xa, O, Ut, L[Ut], X);
          ca !== null && (e && ca.alternate !== null && xa.delete(ca.key === null ? Ut : ca.key), In = s(ca, In, Ut), qt === null ? et = ca : qt.sibling = ca, qt = ca);
        }
        if (e && xa.forEach(function(Bf) {
          return t(O, Bf);
        }), Nr()) {
          var Lu = Ut;
          Fs(O, Lu);
        }
        return et;
      }
      function se(O, P, L, X) {
        var pe = _r(L);
        if (typeof pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && L[Symbol.toStringTag] === "Generator" && (lg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), lg = !0), L.entries === pe && (ig || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ig = !0);
          var ce = pe.call(L);
          if (ce)
            for (var Ie = null, et = ce.next(); !et.done; et = ce.next()) {
              var qt = et.value;
              Ie = A(qt, Ie, O);
            }
        }
        var zt = pe.call(L);
        if (zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var In = null, Ut = null, jn = P, sa = 0, Pr = 0, si = null, ba = zt.next(); jn !== null && !ba.done; Pr++, ba = zt.next()) {
          jn.index > Pr ? (si = jn, jn = null) : si = jn.sibling;
          var xa = w(O, jn, ba.value, X);
          if (xa === null) {
            jn === null && (jn = si);
            break;
          }
          e && jn && xa.alternate === null && t(O, jn), sa = s(xa, sa, Pr), Ut === null ? In = xa : Ut.sibling = xa, Ut = xa, jn = si;
        }
        if (ba.done) {
          if (a(O, jn), Nr()) {
            var ca = Pr;
            Fs(O, ca);
          }
          return In;
        }
        if (jn === null) {
          for (; !ba.done; Pr++, ba = zt.next()) {
            var Lu = x(O, ba.value, X);
            Lu !== null && (sa = s(Lu, sa, Pr), Ut === null ? In = Lu : Ut.sibling = Lu, Ut = Lu);
          }
          if (Nr()) {
            var Bf = Pr;
            Fs(O, Bf);
          }
          return In;
        }
        for (var Wp = i(O, jn); !ba.done; Pr++, ba = zt.next()) {
          var Il = N(Wp, O, Pr, ba.value, X);
          Il !== null && (e && Il.alternate !== null && Wp.delete(Il.key === null ? Pr : Il.key), sa = s(Il, sa, Pr), Ut === null ? In = Il : Ut.sibling = Il, Ut = Il);
        }
        if (e && Wp.forEach(function(ak) {
          return t(O, ak);
        }), Nr()) {
          var rk = Pr;
          Fs(O, rk);
        }
        return In;
      }
      function Me(O, P, L, X) {
        if (P !== null && P.tag === he) {
          a(O, P.sibling);
          var pe = u(P, L);
          return pe.return = O, pe;
        }
        a(O, P);
        var ce = a0(L, O.mode, X);
        return ce.return = O, ce;
      }
      function xe(O, P, L, X) {
        for (var pe = L.key, ce = P; ce !== null; ) {
          if (ce.key === pe) {
            var Ie = L.type;
            if (Ie === ha) {
              if (ce.tag === Ze) {
                a(O, ce.sibling);
                var et = u(ce, L.props.children);
                return et.return = O, et._debugSource = L._source, et._debugOwner = L._owner, et;
              }
            } else if (ce.elementType === Ie || T1(ce, L) || typeof Ie == "object" && Ie !== null && Ie.$$typeof === Fe && yE(Ie) === ce.type) {
              a(O, ce.sibling);
              var qt = u(ce, L.props);
              return qt.ref = hp(O, ce, L), qt.return = O, qt._debugSource = L._source, qt._debugOwner = L._owner, qt;
            }
            a(O, ce);
            break;
          } else
            t(O, ce);
          ce = ce.sibling;
        }
        if (L.type === ha) {
          var zt = Yo(L.props.children, O.mode, X, L.key);
          return zt.return = O, zt;
        } else {
          var In = r0(L, O.mode, X);
          return In.ref = hp(O, P, L), In.return = O, In;
        }
      }
      function _t(O, P, L, X) {
        for (var pe = L.key, ce = P; ce !== null; ) {
          if (ce.key === pe)
            if (ce.tag === ve && ce.stateNode.containerInfo === L.containerInfo && ce.stateNode.implementation === L.implementation) {
              a(O, ce.sibling);
              var Ie = u(ce, L.children || []);
              return Ie.return = O, Ie;
            } else {
              a(O, ce);
              break;
            }
          else
            t(O, ce);
          ce = ce.sibling;
        }
        var et = i0(L, O.mode, X);
        return et.return = O, et;
      }
      function St(O, P, L, X) {
        var pe = typeof L == "object" && L !== null && L.type === ha && L.key === null;
        if (pe && (L = L.props.children), typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case Za:
              return f(xe(O, P, L, X));
            case xr:
              return f(_t(O, P, L, X));
            case Fe:
              var ce = L._payload, Ie = L._init;
              return St(O, P, Ie(ce), X);
          }
          if (Tt(L))
            return H(O, P, L, X);
          if (_r(L))
            return se(O, P, L, X);
          Hh(O, L);
        }
        return typeof L == "string" && L !== "" || typeof L == "number" ? f(Me(O, P, "" + L, X)) : (typeof L == "function" && Ph(O), a(O, P));
      }
      return St;
    }
    var wf = gE(!0), SE = gE(!1);
    function Nw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Xs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Xs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function zw(e, t) {
      for (var a = e.child; a !== null; )
        C_(a, t), a = a.sibling;
    }
    var cg = Oo(null), fg;
    fg = {};
    var Vh = null, bf = null, dg = null, Bh = !1;
    function $h() {
      Vh = null, bf = null, dg = null, Bh = !1;
    }
    function EE() {
      Bh = !0;
    }
    function CE() {
      Bh = !1;
    }
    function RE(e, t, a) {
      ua(cg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== fg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = fg;
    }
    function pg(e, t) {
      var a = cg.current;
      la(cg, t), e._currentValue = a;
    }
    function vg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (du(i.childLanes, t) ? u !== null && !du(u.childLanes, t) && (u.childLanes = tt(u.childLanes, t)) : (i.childLanes = tt(i.childLanes, t), u !== null && (u.childLanes = tt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Uw(e, t, a) {
      Aw(e, t, a);
    }
    function Aw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === oe) {
                var p = co(a), v = bu(nn, p);
                v.tag = Ih;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, x = g.pending;
                  x === null ? v.next = v : (v.next = x.next, x.next = v), g.pending = v;
                }
              }
              i.lanes = tt(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = tt(w.lanes, a)), vg(i.return, a, e), s.lanes = tt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Pe)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Wt) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = tt(N.lanes, a);
          var A = N.alternate;
          A !== null && (A.lanes = tt(A.lanes, a)), vg(N, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var H = u.sibling;
            if (H !== null) {
              H.return = u.return, u = H;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function xf(e, t) {
      Vh = e, bf = null, dg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (aa(a.lanes, t) && Op(), a.firstContext = null);
      }
    }
    function tr(e) {
      Bh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (dg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (bf === null) {
          if (Vh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          bf = a, Vh.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          bf = bf.next = a;
      }
      return t;
    }
    var Bs = null;
    function hg(e) {
      Bs === null ? Bs = [e] : Bs.push(e);
    }
    function Fw() {
      if (Bs !== null) {
        for (var e = 0; e < Bs.length; e++) {
          var t = Bs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Bs = null;
      }
    }
    function TE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Yh(e, i);
    }
    function jw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Hw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Yh(e, i);
    }
    function Qa(e, t) {
      return Yh(e, t);
    }
    var Pw = Yh;
    function Yh(e, t) {
      e.lanes = tt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = tt(a.lanes, t)), a === null && (e.flags & (ln | za)) !== Le && S1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = tt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = tt(a.childLanes, t) : (u.flags & (ln | za)) !== Le && S1(e), i = u, u = u.return;
      if (i.tag === te) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var wE = 0, bE = 1, Ih = 2, mg = 3, Qh = !1, yg, Wh;
    yg = !1, Wh = null;
    function gg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Y
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function xE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function bu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: wE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function zo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Wh === u && !yg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), yg = !0), jx()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Pw(e, a);
      } else
        return Hw(e, u, t, a);
    }
    function Gh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Od(a)) {
          var s = u.lanes;
          s = Bc(s, e.pendingLanes);
          var f = tt(s, a);
          u.lanes = f, Ld(e, f);
        }
      }
    }
    function Sg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Vw(e, t, a, i, u, s) {
      switch (a.tag) {
        case bE: {
          var f = a.payload;
          if (typeof f == "function") {
            EE();
            var p = f.call(s, i, u);
            {
              if (e.mode & mt) {
                An(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  An(!1);
                }
              }
              CE();
            }
            return p;
          }
          return f;
        }
        case mg:
          e.flags = e.flags & ~Kn | Ge;
        case wE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            EE(), y = v.call(s, i, u);
            {
              if (e.mode & mt) {
                An(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  An(!1);
                }
              }
              CE();
            }
          } else
            y = v;
          return y == null ? i : ot({}, i, y);
        }
        case Ih:
          return Qh = !0, i;
      }
      return i;
    }
    function qh(e, t, a, i) {
      var u = e.updateQueue;
      Qh = !1, Wh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var x = g.updateQueue, w = x.lastBaseUpdate;
          w !== f && (w === null ? x.firstBaseUpdate = y : w.next = y, x.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var N = u.baseState, A = Y, H = null, se = null, Me = null, xe = s;
        do {
          var _t = xe.lane, St = xe.eventTime;
          if (du(i, _t)) {
            if (Me !== null) {
              var P = {
                eventTime: St,
                lane: Fn,
                tag: xe.tag,
                payload: xe.payload,
                callback: xe.callback,
                next: null
              };
              Me = Me.next = P;
            }
            N = Vw(e, u, xe, N, t, a);
            var L = xe.callback;
            if (L !== null && xe.lane !== Fn) {
              e.flags |= Si;
              var X = u.effects;
              X === null ? u.effects = [xe] : X.push(xe);
            }
          } else {
            var O = {
              eventTime: St,
              lane: _t,
              tag: xe.tag,
              payload: xe.payload,
              callback: xe.callback,
              next: null
            };
            Me === null ? (se = Me = O, H = N) : Me = Me.next = O, A = tt(A, _t);
          }
          if (xe = xe.next, xe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var pe = p, ce = pe.next;
            pe.next = null, xe = ce, u.lastBaseUpdate = pe, u.shared.pending = null;
          }
        } while (!0);
        Me === null && (H = N), u.baseState = H, u.firstBaseUpdate = se, u.lastBaseUpdate = Me;
        var Ie = u.shared.interleaved;
        if (Ie !== null) {
          var et = Ie;
          do
            A = tt(A, et.lane), et = et.next;
          while (et !== Ie);
        } else
          s === null && (u.shared.lanes = Y);
        Bp(A), e.lanes = A, e.memoizedState = N;
      }
      Wh = null;
    }
    function Bw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function _E() {
      Qh = !1;
    }
    function Xh() {
      return Qh;
    }
    function kE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Bw(f, a));
        }
    }
    var mp = {}, Uo = Oo(mp), yp = Oo(mp), Kh = Oo(mp);
    function Jh(e) {
      if (e === mp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function DE() {
      var e = Jh(Kh.current);
      return e;
    }
    function Eg(e, t) {
      ua(Kh, t, e), ua(yp, e, e), ua(Uo, mp, e);
      var a = iT(t);
      la(Uo, e), ua(Uo, a, e);
    }
    function _f(e) {
      la(Uo, e), la(yp, e), la(Kh, e);
    }
    function Cg() {
      var e = Jh(Uo.current);
      return e;
    }
    function OE(e) {
      Jh(Kh.current);
      var t = Jh(Uo.current), a = lT(t, e.type);
      t !== a && (ua(yp, e, e), ua(Uo, a, e));
    }
    function Rg(e) {
      yp.current === e && (la(Uo, e), la(yp, e));
    }
    var $w = 0, LE = 1, ME = 1, gp = 2, el = Oo($w);
    function Tg(e, t) {
      return (e & t) !== 0;
    }
    function kf(e) {
      return e & LE;
    }
    function wg(e, t) {
      return e & LE | t;
    }
    function Yw(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      ua(el, t, e);
    }
    function Df(e) {
      la(el, e);
    }
    function Iw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Zh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Oe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || q0(i) || By(i))
              return t;
          }
        } else if (t.tag === Ot && t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ge) !== Le;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Wa = 0, lr = 1, jl = 2, ur = 4, zr = 8, bg = [];
    function xg() {
      for (var e = 0; e < bg.length; e++) {
        var t = bg[e];
        t._workInProgressVersionPrimary = null;
      }
      bg.length = 0;
    }
    function Qw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var de = k.ReactCurrentDispatcher, Sp = k.ReactCurrentBatchConfig, _g, Of;
    _g = /* @__PURE__ */ new Set();
    var $s = Y, Gt = null, or = null, sr = null, em = !1, Ep = !1, Cp = 0, Ww = 0, Gw = 25, $ = null, ki = null, Fo = -1, kg = !1;
    function Yt() {
      {
        var e = $;
        ki === null ? ki = [e] : ki.push(e);
      }
    }
    function ie() {
      {
        var e = $;
        ki !== null && (Fo++, ki[Fo] !== e && qw(e));
      }
    }
    function Lf(e) {
      e != null && !Tt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", $, typeof e);
    }
    function qw(e) {
      {
        var t = Xe(Gt);
        if (!_g.has(t) && (_g.add(t), ki !== null)) {
          for (var a = "", i = 30, u = 0; u <= Fo; u++) {
            for (var s = ki[u], f = u === Fo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function oa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Dg(e, t) {
      if (kg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", $), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, $, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Se(e[a], t[a]))
          return !1;
      return !0;
    }
    function Mf(e, t, a, i, u, s) {
      $s = s, Gt = t, ki = e !== null ? e._debugHookTypes : null, Fo = -1, kg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? de.current = eC : ki !== null ? de.current = ZE : de.current = JE;
      var f = a(i, u);
      if (Ep) {
        var p = 0;
        do {
          if (Ep = !1, Cp = 0, p >= Gw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, kg = !1, or = null, sr = null, t.updateQueue = null, Fo = -1, de.current = tC, f = a(i, u);
        } while (Ep);
      }
      de.current = pm, t._debugHookTypes = ki;
      var v = or !== null && or.next !== null;
      if ($s = Y, Gt = null, or = null, sr = null, $ = null, ki = null, Fo = -1, e !== null && (e.flags & rr) !== (t.flags & rr) && (e.mode & be) !== Re && S("Internal React error: Expected static flag was missing. Please notify the React team."), em = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Nf() {
      var e = Cp !== 0;
      return Cp = 0, e;
    }
    function NE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ea) !== Re ? t.flags &= ~(ru | Jr | cn | rt) : t.flags &= ~(cn | rt), e.lanes = Es(e.lanes, a);
    }
    function zE() {
      if (de.current = pm, em) {
        for (var e = Gt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        em = !1;
      }
      $s = Y, Gt = null, or = null, sr = null, ki = null, Fo = -1, $ = null, WE = !1, Ep = !1, Cp = 0;
    }
    function Hl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return sr === null ? Gt.memoizedState = sr = e : sr = sr.next = e, sr;
    }
    function Di() {
      var e;
      if (or === null) {
        var t = Gt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = or.next;
      var a;
      if (sr === null ? a = Gt.memoizedState : a = sr.next, a !== null)
        sr = a, a = sr.next, or = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        or = e;
        var i = {
          memoizedState: or.memoizedState,
          baseState: or.baseState,
          baseQueue: or.baseQueue,
          queue: or.queue,
          next: null
        };
        sr === null ? Gt.memoizedState = sr = i : sr = sr.next = i;
      }
      return sr;
    }
    function UE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Og(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Lg(e, t, a) {
      var i = Hl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Zw.bind(null, Gt, s);
      return [i.memoizedState, f];
    }
    function Mg(e, t, a) {
      var i = Di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = or, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, x = s.baseState, w = null, N = null, A = null, H = g;
        do {
          var se = H.lane;
          if (du($s, se)) {
            if (A !== null) {
              var xe = {
                lane: Fn,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null
              };
              A = A.next = xe;
            }
            if (H.hasEagerState)
              x = H.eagerState;
            else {
              var _t = H.action;
              x = e(x, _t);
            }
          } else {
            var Me = {
              lane: se,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            };
            A === null ? (N = A = Me, w = x) : A = A.next = Me, Gt.lanes = tt(Gt.lanes, se), Bp(se);
          }
          H = H.next;
        } while (H !== null && H !== g);
        A === null ? w = x : A.next = N, Se(x, i.memoizedState) || Op(), i.memoizedState = x, i.baseState = w, i.baseQueue = A, u.lastRenderedState = x;
      }
      var St = u.interleaved;
      if (St !== null) {
        var O = St;
        do {
          var P = O.lane;
          Gt.lanes = tt(Gt.lanes, P), Bp(P), O = O.next;
        } while (O !== St);
      } else
        f === null && (u.lanes = Y);
      var L = u.dispatch;
      return [i.memoizedState, L];
    }
    function Ng(e, t, a) {
      var i = Di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        Se(p, i.memoizedState) || Op(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Nk(e, t, a) {
    }
    function zk(e, t, a) {
    }
    function zg(e, t, a) {
      var i = Gt, u = Hl(), s, f = Nr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Of || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Of = !0);
      } else {
        if (s = t(), !Of) {
          var p = t();
          Se(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Of = !0);
        }
        var v = Mm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ss(v, $s) || AE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, im(jE.bind(null, i, y, e), [e]), i.flags |= cn, Rp(lr | zr, FE.bind(null, i, y, s, t), void 0, null), s;
    }
    function tm(e, t, a) {
      var i = Gt, u = Di(), s = t();
      if (!Of) {
        var f = t();
        Se(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Of = !0);
      }
      var p = u.memoizedState, v = !Se(p, s);
      v && (u.memoizedState = s, Op());
      var y = u.queue;
      if (wp(jE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || sr !== null && sr.memoizedState.tag & lr) {
        i.flags |= cn, Rp(lr | zr, FE.bind(null, i, y, s, t), void 0, null);
        var g = Mm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ss(g, $s) || AE(i, t, s);
      }
      return s;
    }
    function AE(e, t, a) {
      e.flags |= ss;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Gt.updateQueue;
      if (u === null)
        u = UE(), Gt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function FE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, HE(t) && PE(e);
    }
    function jE(e, t, a) {
      var i = function() {
        HE(t) && PE(e);
      };
      return a(i);
    }
    function HE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Se(a, i);
      } catch {
        return !0;
      }
    }
    function PE(e) {
      var t = Qa(e, De);
      t !== null && pr(t, e, De, nn);
    }
    function nm(e) {
      var t = Hl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: Og,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = eb.bind(null, Gt, a);
      return [t.memoizedState, i];
    }
    function Ug(e) {
      return Mg(Og);
    }
    function Ag(e) {
      return Ng(Og);
    }
    function Rp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        next: null
      }, s = Gt.updateQueue;
      if (s === null)
        s = UE(), Gt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Fg(e) {
      var t = Hl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function rm(e) {
      var t = Di();
      return t.memoizedState;
    }
    function Tp(e, t, a, i) {
      var u = Hl(), s = i === void 0 ? null : i;
      Gt.flags |= e, u.memoizedState = Rp(lr | t, a, void 0, s);
    }
    function am(e, t, a, i) {
      var u = Di(), s = i === void 0 ? null : i, f = void 0;
      if (or !== null) {
        var p = or.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Dg(s, v)) {
            u.memoizedState = Rp(t, a, f, s);
            return;
          }
        }
      }
      Gt.flags |= e, u.memoizedState = Rp(lr | t, a, f, s);
    }
    function im(e, t) {
      return (Gt.mode & Ea) !== Re ? Tp(ru | cn | xl, zr, e, t) : Tp(cn | xl, zr, e, t);
    }
    function wp(e, t) {
      return am(cn, zr, e, t);
    }
    function jg(e, t) {
      return Tp(rt, jl, e, t);
    }
    function lm(e, t) {
      return am(rt, jl, e, t);
    }
    function Hg(e, t) {
      var a = rt;
      return a |= Kr, (Gt.mode & Ea) !== Re && (a |= Jr), Tp(a, ur, e, t);
    }
    function um(e, t) {
      return am(rt, ur, e, t);
    }
    function VE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Pg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = rt;
      return u |= Kr, (Gt.mode & Ea) !== Re && (u |= Jr), Tp(u, ur, VE.bind(null, t, e), i);
    }
    function om(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return am(rt, ur, VE.bind(null, t, e), i);
    }
    function Xw(e, t) {
    }
    var sm = Xw;
    function Vg(e, t) {
      var a = Hl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function cm(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Dg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Bg(e, t) {
      var a = Hl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function fm(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Dg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function $g(e) {
      var t = Hl();
      return t.memoizedState = e, e;
    }
    function BE(e) {
      var t = Di(), a = or, i = a.memoizedState;
      return YE(t, i, e);
    }
    function $E(e) {
      var t = Di();
      if (or === null)
        return t.memoizedState = e, e;
      var a = or.memoizedState;
      return YE(t, a, e);
    }
    function YE(e, t, a) {
      var i = !Vv($s);
      if (i) {
        if (!Se(a, t)) {
          var u = Yv();
          Gt.lanes = tt(Gt.lanes, u), Bp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Op()), e.memoizedState = a, a;
    }
    function Kw(e, t, a) {
      var i = Pa();
      Tn(sy(i, Wi)), e(!0);
      var u = Sp.transition;
      Sp.transition = {};
      var s = Sp.transition;
      Sp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Tn(i), Sp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Qe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Yg() {
      var e = nm(!1), t = e[0], a = e[1], i = Kw.bind(null, a), u = Hl();
      return u.memoizedState = i, [t, i];
    }
    function IE() {
      var e = Ug(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    function QE() {
      var e = Ag(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    var WE = !1;
    function Jw() {
      return WE;
    }
    function Ig() {
      var e = Hl(), t = Mm(), a = t.identifierPrefix, i;
      if (Nr()) {
        var u = hw();
        i = ":" + a + "R" + u;
        var s = Cp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Ww++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function dm() {
      var e = Di(), t = e.memoizedState;
      return t;
    }
    function Zw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (GE(e))
        qE(t, u);
      else {
        var s = TE(e, t, u, i);
        if (s !== null) {
          var f = wa();
          pr(s, e, i, f), XE(s, t, i);
        }
      }
      KE(e, i);
    }
    function eb(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (GE(e))
        qE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = de.current, de.current = tl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Se(y, v)) {
                jw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              de.current = p;
            }
          }
        }
        var g = TE(e, t, u, i);
        if (g !== null) {
          var x = wa();
          pr(g, e, i, x), XE(g, t, i);
        }
      }
      KE(e, i);
    }
    function GE(e) {
      var t = e.alternate;
      return e === Gt || t !== null && t === Gt;
    }
    function qE(e, t) {
      Ep = em = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function XE(e, t, a) {
      if (Od(a)) {
        var i = t.lanes;
        i = Bc(i, e.pendingLanes);
        var u = tt(i, a);
        t.lanes = u, Ld(e, u);
      }
    }
    function KE(e, t, a) {
      ps(e, t);
    }
    var pm = {
      readContext: tr,
      useCallback: oa,
      useContext: oa,
      useEffect: oa,
      useImperativeHandle: oa,
      useInsertionEffect: oa,
      useLayoutEffect: oa,
      useMemo: oa,
      useReducer: oa,
      useRef: oa,
      useState: oa,
      useDebugValue: oa,
      useDeferredValue: oa,
      useTransition: oa,
      useMutableSource: oa,
      useSyncExternalStore: oa,
      useId: oa,
      unstable_isNewReconciler: ee
    }, JE = null, ZE = null, eC = null, tC = null, Pl = null, tl = null, vm = null;
    {
      var Qg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ke = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      JE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", Yt(), Lf(t), Vg(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", Yt(), tr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", Yt(), Lf(t), im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", Yt(), Lf(a), Pg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", Yt(), Lf(t), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", Yt(), Lf(t), Hg(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", Yt(), Lf(t);
          var a = de.current;
          de.current = Pl;
          try {
            return Bg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", Yt();
          var i = de.current;
          de.current = Pl;
          try {
            return Lg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", Yt(), Fg(e);
        },
        useState: function(e) {
          $ = "useState", Yt();
          var t = de.current;
          de.current = Pl;
          try {
            return nm(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", Yt(), $g(e);
        },
        useTransition: function() {
          return $ = "useTransition", Yt(), Yg();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", Yt(), zg(e, t, a);
        },
        useId: function() {
          return $ = "useId", Yt(), Ig();
        },
        unstable_isNewReconciler: ee
      }, ZE = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", ie(), Vg(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", ie(), tr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", ie(), im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", ie(), Pg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", ie(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", ie(), Hg(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", ie();
          var a = de.current;
          de.current = Pl;
          try {
            return Bg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", ie();
          var i = de.current;
          de.current = Pl;
          try {
            return Lg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", ie(), Fg(e);
        },
        useState: function(e) {
          $ = "useState", ie();
          var t = de.current;
          de.current = Pl;
          try {
            return nm(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", ie(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", ie(), $g(e);
        },
        useTransition: function() {
          return $ = "useTransition", ie(), Yg();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", ie(), zg(e, t, a);
        },
        useId: function() {
          return $ = "useId", ie(), Ig();
        },
        unstable_isNewReconciler: ee
      }, eC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", ie(), cm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", ie(), tr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", ie(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", ie(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", ie(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", ie(), um(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", ie();
          var a = de.current;
          de.current = tl;
          try {
            return fm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", ie();
          var i = de.current;
          de.current = tl;
          try {
            return Mg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", ie(), rm();
        },
        useState: function(e) {
          $ = "useState", ie();
          var t = de.current;
          de.current = tl;
          try {
            return Ug(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", ie(), sm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", ie(), BE(e);
        },
        useTransition: function() {
          return $ = "useTransition", ie(), IE();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", ie(), tm(e, t);
        },
        useId: function() {
          return $ = "useId", ie(), dm();
        },
        unstable_isNewReconciler: ee
      }, tC = {
        readContext: function(e) {
          return tr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", ie(), cm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", ie(), tr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", ie(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", ie(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", ie(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", ie(), um(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", ie();
          var a = de.current;
          de.current = vm;
          try {
            return fm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", ie();
          var i = de.current;
          de.current = vm;
          try {
            return Ng(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", ie(), rm();
        },
        useState: function(e) {
          $ = "useState", ie();
          var t = de.current;
          de.current = vm;
          try {
            return Ag(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", ie(), sm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", ie(), $E(e);
        },
        useTransition: function() {
          return $ = "useTransition", ie(), QE();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", ie(), tm(e, t);
        },
        useId: function() {
          return $ = "useId", ie(), dm();
        },
        unstable_isNewReconciler: ee
      }, Pl = {
        readContext: function(e) {
          return Qg(), tr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", Ke(), Yt(), Vg(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", Ke(), Yt(), tr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", Ke(), Yt(), im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", Ke(), Yt(), Pg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", Ke(), Yt(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", Ke(), Yt(), Hg(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", Ke(), Yt();
          var a = de.current;
          de.current = Pl;
          try {
            return Bg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", Ke(), Yt();
          var i = de.current;
          de.current = Pl;
          try {
            return Lg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", Ke(), Yt(), Fg(e);
        },
        useState: function(e) {
          $ = "useState", Ke(), Yt();
          var t = de.current;
          de.current = Pl;
          try {
            return nm(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", Ke(), Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", Ke(), Yt(), $g(e);
        },
        useTransition: function() {
          return $ = "useTransition", Ke(), Yt(), Yg();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", Ke(), Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", Ke(), Yt(), zg(e, t, a);
        },
        useId: function() {
          return $ = "useId", Ke(), Yt(), Ig();
        },
        unstable_isNewReconciler: ee
      }, tl = {
        readContext: function(e) {
          return Qg(), tr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", Ke(), ie(), cm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", Ke(), ie(), tr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", Ke(), ie(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", Ke(), ie(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", Ke(), ie(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", Ke(), ie(), um(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", Ke(), ie();
          var a = de.current;
          de.current = tl;
          try {
            return fm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", Ke(), ie();
          var i = de.current;
          de.current = tl;
          try {
            return Mg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", Ke(), ie(), rm();
        },
        useState: function(e) {
          $ = "useState", Ke(), ie();
          var t = de.current;
          de.current = tl;
          try {
            return Ug(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", Ke(), ie(), sm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", Ke(), ie(), BE(e);
        },
        useTransition: function() {
          return $ = "useTransition", Ke(), ie(), IE();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", Ke(), ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", Ke(), ie(), tm(e, t);
        },
        useId: function() {
          return $ = "useId", Ke(), ie(), dm();
        },
        unstable_isNewReconciler: ee
      }, vm = {
        readContext: function(e) {
          return Qg(), tr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", Ke(), ie(), cm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", Ke(), ie(), tr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", Ke(), ie(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", Ke(), ie(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", Ke(), ie(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", Ke(), ie(), um(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", Ke(), ie();
          var a = de.current;
          de.current = tl;
          try {
            return fm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", Ke(), ie();
          var i = de.current;
          de.current = tl;
          try {
            return Ng(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", Ke(), ie(), rm();
        },
        useState: function(e) {
          $ = "useState", Ke(), ie();
          var t = de.current;
          de.current = tl;
          try {
            return Ag(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", Ke(), ie(), sm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", Ke(), ie(), $E(e);
        },
        useTransition: function() {
          return $ = "useTransition", Ke(), ie(), QE();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", Ke(), ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", Ke(), ie(), tm(e, t);
        },
        useId: function() {
          return $ = "useId", Ke(), ie(), dm();
        },
        unstable_isNewReconciler: ee
      };
    }
    var jo = V.unstable_now, nC = 0, hm = -1, bp = -1, mm = -1, Wg = !1, ym = !1;
    function rC() {
      return Wg;
    }
    function tb() {
      ym = !0;
    }
    function nb() {
      Wg = !1, ym = !1;
    }
    function rb() {
      Wg = ym, ym = !1;
    }
    function aC() {
      return nC;
    }
    function iC() {
      nC = jo();
    }
    function Gg(e) {
      bp = jo(), e.actualStartTime < 0 && (e.actualStartTime = jo());
    }
    function lC(e) {
      bp = -1;
    }
    function gm(e, t) {
      if (bp >= 0) {
        var a = jo() - bp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), bp = -1;
      }
    }
    function Vl(e) {
      if (hm >= 0) {
        var t = jo() - hm;
        hm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case dt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function qg(e) {
      if (mm >= 0) {
        var t = jo() - mm;
        mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case dt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Bl() {
      hm = jo();
    }
    function Xg() {
      mm = jo();
    }
    function Kg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function nl(e, t) {
      if (e && e.defaultProps) {
        var a = ot({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Jg = {}, Zg, eS, tS, nS, rS, uC, Sm, aS, iS, lS, xp;
    {
      Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), xp = /* @__PURE__ */ new Set();
      var oC = /* @__PURE__ */ new Set();
      Sm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          oC.has(a) || (oC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, uC = function(e, t) {
        if (t === void 0) {
          var a = Rt(e) || "Component";
          rS.has(a) || (rS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Jg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Jg);
    }
    function uS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & mt) {
          An(!0);
          try {
            s = a(i, u);
          } finally {
            An(!1);
          }
        }
        uC(t, s);
      }
      var f = s == null ? u : ot({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var oS = {
      isMounted: ga,
      enqueueSetState: function(e, t, a) {
        var i = Ma(e), u = wa(), s = Bo(i), f = bu(u, s);
        f.payload = t, a != null && (Sm(a, "setState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (pr(p, i, s, u), Gh(p, i, s)), ps(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ma(e), u = wa(), s = Bo(i), f = bu(u, s);
        f.tag = bE, f.payload = t, a != null && (Sm(a, "replaceState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (pr(p, i, s, u), Gh(p, i, s)), ps(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ma(e), i = wa(), u = Bo(a), s = bu(i, u);
        s.tag = Ih, t != null && (Sm(t, "forceUpdate"), s.callback = t);
        var f = zo(a, s, u);
        f !== null && (pr(f, a, u, i), Gh(f, a, u)), bc(a, u);
      }
    };
    function sC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & mt) {
            An(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              An(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Rt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ve(a, i) || !Ve(u, s) : !0;
    }
    function ab(e, t, a) {
      var i = e.stateNode;
      {
        var u = Rt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !xp.has(t) && (e.mode & mt) === Re && (xp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !xp.has(t) && (e.mode & mt) === Re && (xp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !iS.has(t) && (iS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Rt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !tS.has(t) && (tS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Rt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Tt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function cC(e, t) {
      t.updater = oS, e.stateNode = t, Xu(t, e), t._reactInternalInstance = Jg;
    }
    function fC(e, t, a) {
      var i = !1, u = ui, s = ui, f = t.contextType;
      if ("contextType" in t) {
        var p = f === null || f !== void 0 && f.$$typeof === I && f._context === void 0;
        if (!p && !lS.has(t)) {
          lS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === R ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Rt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = tr(f);
      else {
        u = Sf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Ef(e, u) : ui;
      }
      var g = new t(a, s);
      if (e.mode & mt) {
        An(!0);
        try {
          g = new t(a, s);
        } finally {
          An(!1);
        }
      }
      var x = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      cC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var w = Rt(t) || "Component";
          eS.has(w) || (eS.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var N = null, A = null, H = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), N !== null || A !== null || H !== null) {
            var se = Rt(t) || "Component", Me = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            nS.has(se) || (nS.add(se), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, se, Me, N !== null ? `
  ` + N : "", A !== null ? `
  ` + A : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return i && eE(e, u, s), g;
    }
    function ib(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Xe(e) || "Component"), oS.enqueueReplaceState(t, t.state, null));
    }
    function dC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Xe(e) || "Component";
          Zg.has(s) || (Zg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        oS.enqueueReplaceState(t, t.state, null);
      }
    }
    function sS(e, t, a, i) {
      ab(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, gg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = tr(s);
      else {
        var f = Sf(e, t, !0);
        u.context = Ef(e, f);
      }
      {
        if (u.state === a) {
          var p = Rt(t) || "Component";
          aS.has(p) || (aS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & mt && Zi.recordLegacyContextWarning(e, u), Zi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (uS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (ib(e, u), qh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = rt;
        y |= Kr, (e.mode & Ea) !== Re && (y |= Jr), e.flags |= y;
      }
    }
    function lb(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ui;
      if (typeof p == "object" && p !== null)
        v = tr(p);
      else {
        var y = Sf(e, t, !0);
        v = Ef(e, y);
      }
      var g = t.getDerivedStateFromProps, x = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && dC(e, u, a, v), _E();
      var w = e.memoizedState, N = u.state = w;
      if (qh(e, a, u, i), N = e.memoizedState, s === a && w === N && !Oh() && !Xh()) {
        if (typeof u.componentDidMount == "function") {
          var A = rt;
          A |= Kr, (e.mode & Ea) !== Re && (A |= Jr), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (uS(e, t, g, a), N = e.memoizedState);
      var H = Xh() || sC(e, t, s, a, w, N, v);
      if (H) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var se = rt;
          se |= Kr, (e.mode & Ea) !== Re && (se |= Jr), e.flags |= se;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Me = rt;
          Me |= Kr, (e.mode & Ea) !== Re && (Me |= Jr), e.flags |= Me;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, H;
    }
    function ub(e, t, a, i, u) {
      var s = t.stateNode;
      xE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, x = ui;
      if (typeof g == "object" && g !== null)
        x = tr(g);
      else {
        var w = Sf(t, a, !0);
        x = Ef(t, w);
      }
      var N = a.getDerivedStateFromProps, A = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== x) && dC(t, s, i, x), _E();
      var H = t.memoizedState, se = s.state = H;
      if (qh(t, i, s, u), se = t.memoizedState, f === v && H === se && !Oh() && !Xh() && !_e)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= rt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Na), !1;
      typeof N == "function" && (uS(t, a, N, i), se = t.memoizedState);
      var Me = Xh() || sC(t, a, p, i, H, se, x) || _e;
      return Me ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, se, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, se, x)), typeof s.componentDidUpdate == "function" && (t.flags |= rt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Na)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= rt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Na), t.memoizedProps = i, t.memoizedState = se), s.props = i, s.state = se, s.context = x, Me;
    }
    function Ys(e, t) {
      return {
        value: e,
        source: t,
        stack: Fu(t),
        digest: null
      };
    }
    function cS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a != null ? a : null,
        digest: t != null ? t : null
      };
    }
    function ob(e, t) {
      return !0;
    }
    function fS(e, t) {
      try {
        var a = ob(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === oe)
            return;
          console.error(i);
        }
        var p = u ? Xe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === te)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Xe(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var x = v + `
` + f + `

` + ("" + y);
        console.error(x);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var sb = typeof WeakMap == "function" ? WeakMap : Map;
    function pC(e, t, a) {
      var i = bu(nn, a);
      i.tag = mg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        t_(u), fS(e, t);
      }, i;
    }
    function dS(e, t, a) {
      var i = bu(nn, a);
      i.tag = mg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          w1(e), fS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        w1(e), fS(e, t), typeof u != "function" && Zx(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (aa(e.lanes, De) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Xe(e) || "Unknown"));
      }), i;
    }
    function vC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new sb(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = n_.bind(null, e, t, a);
        Sa && $p(e, a), t.then(s, s);
      }
    }
    function cb(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function fb(e, t) {
      var a = e.tag;
      if ((e.mode & be) === Re && (a === ne || a === Ne || a === $e)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function hC(e) {
      var t = e;
      do {
        if (t.tag === Oe && Iw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function mC(e, t, a, i, u) {
      if ((e.mode & be) === Re) {
        if (e === t)
          e.flags |= Kn;
        else {
          if (e.flags |= Ge, a.flags |= cs, a.flags &= ~(pc | ma), a.tag === oe) {
            var s = a.alternate;
            if (s === null)
              a.tag = xn;
            else {
              var f = bu(nn, De);
              f.tag = Ih, zo(a, f, De);
            }
          }
          a.lanes = tt(a.lanes, De);
        }
        return e;
      }
      return e.flags |= Kn, e.lanes = u, e;
    }
    function db(e, t, a, i, u) {
      if (a.flags |= ma, Sa && $p(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        fb(a), Nr() && a.mode & be && uE();
        var f = hC(t);
        if (f !== null) {
          f.flags &= ~Rn, mC(f, t, a, e, u), f.mode & be && vC(e, s, u), cb(f, e, s);
          return;
        } else {
          if (!Dd(u)) {
            vC(e, s, u), IS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Nr() && a.mode & be) {
        uE();
        var v = hC(t);
        if (v !== null) {
          (v.flags & Kn) === Le && (v.flags |= Rn), mC(v, t, a, e, u), ag(Ys(i, a));
          return;
        }
      }
      i = Ys(i, a), Ix(i);
      var y = t;
      do {
        switch (y.tag) {
          case te: {
            var g = i;
            y.flags |= Kn;
            var x = co(u);
            y.lanes = tt(y.lanes, x);
            var w = pC(y, g, x);
            Sg(y, w);
            return;
          }
          case oe:
            var N = i, A = y.type, H = y.stateNode;
            if ((y.flags & Ge) === Le && (typeof A.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && !h1(H))) {
              y.flags |= Kn;
              var se = co(u);
              y.lanes = tt(y.lanes, se);
              var Me = dS(y, N, se);
              Sg(y, Me);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function pb() {
      return null;
    }
    var _p = k.ReactCurrentOwner, rl = !1, pS, kp, vS, hS, mS, Is, yS, Em, Dp;
    pS = {}, kp = {}, vS = {}, hS = {}, mS = {}, Is = !1, yS = {}, Em = {}, Dp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = SE(t, null, a, i) : t.child = wf(t, e.child, a, i);
    }
    function vb(e, t, a, i) {
      t.child = wf(t, e.child, null, i), t.child = wf(t, null, a, i);
    }
    function yC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          "prop",
          Rt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      xf(t, u), eo(t);
      {
        if (_p.current = t, Gr(!0), v = Mf(e, t, f, i, p, u), y = Nf(), t.mode & mt) {
          An(!0);
          try {
            v = Mf(e, t, f, i, p, u), y = Nf();
          } finally {
            An(!1);
          }
        }
        Gr(!1);
      }
      return ta(), e !== null && !rl ? (NE(e, t, u), xu(e, t, u)) : (Nr() && y && Jy(t), t.flags |= wl, Ra(e, t, v, u), t.child);
    }
    function gC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (S_(s) && a.compare === null && a.defaultProps === void 0) {
          var f = s;
          return f = Vf(s), t.tag = $e, t.type = f, ES(t, s), SC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Ki(
            p,
            i,
            "prop",
            Rt(s)
          ), a.defaultProps !== void 0) {
            var v = Rt(s) || "Unknown";
            Dp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Dp[v] = !0);
          }
        }
        var y = n0(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, x = g.propTypes;
        x && Ki(
          x,
          i,
          "prop",
          Rt(g)
        );
      }
      var w = e.child, N = xS(e, u);
      if (!N) {
        var A = w.memoizedProps, H = a.compare;
        if (H = H !== null ? H : Ve, H(A, i) && e.ref === t.ref)
          return xu(e, t, u);
      }
      t.flags |= wl;
      var se = Xs(w, i);
      return se.ref = t.ref, se.return = t, t.child = se, se;
    }
    function SC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Fe) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Ki(
            y,
            i,
            "prop",
            Rt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Ve(g, i) && e.ref === t.ref && t.type === e.type)
          if (rl = !1, t.pendingProps = i = g, xS(e, u))
            (e.flags & cs) !== Le && (rl = !0);
          else
            return t.lanes = e.lanes, xu(e, t, u);
      }
      return gS(e, t, a, i, u);
    }
    function EC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || le)
        if ((t.mode & be) === Re) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Nm(t, a);
        } else if (aa(a, Cr)) {
          var x = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = x;
          var w = s !== null ? s.baseLanes : a;
          Nm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = tt(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Cr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Nm(t, v), null;
        }
      else {
        var N;
        s !== null ? (N = tt(s.baseLanes, a), t.memoizedState = null) : N = a, Nm(t, N);
      }
      return Ra(e, t, u, a), t.child;
    }
    function hb(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function mb(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function yb(e, t, a) {
      {
        t.flags |= rt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ra(e, t, s, a), t.child;
    }
    function CC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Xr, t.flags |= md);
    }
    function gS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          "prop",
          Rt(a)
        );
      }
      var f;
      {
        var p = Sf(t, a, !0);
        f = Ef(t, p);
      }
      var v, y;
      xf(t, u), eo(t);
      {
        if (_p.current = t, Gr(!0), v = Mf(e, t, a, i, f, u), y = Nf(), t.mode & mt) {
          An(!0);
          try {
            v = Mf(e, t, a, i, f, u), y = Nf();
          } finally {
            An(!1);
          }
        }
        Gr(!1);
      }
      return ta(), e !== null && !rl ? (NE(e, t, u), xu(e, t, u)) : (Nr() && y && Jy(t), t.flags |= wl, Ra(e, t, v, u), t.child);
    }
    function RC(e, t, a, i, u) {
      {
        switch (z_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ge, t.flags |= Kn;
            var y = new Error("Simulated error coming from DevTools"), g = co(u);
            t.lanes = tt(t.lanes, g);
            var x = dS(t, Ys(y, t), g);
            Sg(t, x);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && Ki(
            w,
            i,
            "prop",
            Rt(a)
          );
        }
      }
      var N;
      Fl(a) ? (N = !0, Mh(t)) : N = !1, xf(t, u);
      var A = t.stateNode, H;
      A === null ? (Rm(e, t), fC(t, a, i), sS(t, a, i, u), H = !0) : e === null ? H = lb(t, a, i, u) : H = ub(e, t, a, i, u);
      var se = SS(e, t, a, H, N, u);
      {
        var Me = t.stateNode;
        H && Me.props !== i && (Is || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Xe(t) || "a component"), Is = !0);
      }
      return se;
    }
    function SS(e, t, a, i, u, s) {
      CC(e, t);
      var f = (t.flags & Ge) !== Le;
      if (!i && !f)
        return u && rE(t, a, !1), xu(e, t, s);
      var p = t.stateNode;
      _p.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, lC();
      else {
        eo(t);
        {
          if (Gr(!0), v = p.render(), t.mode & mt) {
            An(!0);
            try {
              p.render();
            } finally {
              An(!1);
            }
          }
          Gr(!1);
        }
        ta();
      }
      return t.flags |= wl, e !== null && f ? vb(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && rE(t, a, !0), t.child;
    }
    function TC(e) {
      var t = e.stateNode;
      t.pendingContext ? tE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && tE(e, t.context, !1), Eg(e, t.containerInfo);
    }
    function gb(e, t, a) {
      if (TC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      xE(e, t), qh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Rn) {
          var g = Ys(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return wC(e, t, p, a, g);
        } else if (p !== s) {
          var x = Ys(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return wC(e, t, p, a, x);
        } else {
          Cw(t);
          var w = SE(t, null, p, a);
          t.child = w;
          for (var N = w; N; )
            N.flags = N.flags & ~ln | za, N = N.sibling;
        }
      } else {
        if (Tf(), p === s)
          return xu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function wC(e, t, a, i, u) {
      return Tf(), ag(u), t.flags |= Rn, Ra(e, t, a, i), t.child;
    }
    function Sb(e, t, a) {
      OE(t), e === null && rg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = jy(i, u);
      return p ? f = null : s !== null && jy(i, s) && (t.flags |= $t), CC(e, t), Ra(e, t, f, a), t.child;
    }
    function Eb(e, t) {
      return e === null && rg(t), null;
    }
    function Cb(e, t, a, i) {
      Rm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = E_(v), g = nl(v, u), x;
      switch (y) {
        case ne:
          return ES(t, v), t.type = v = Vf(v), x = gS(null, t, v, g, i), x;
        case oe:
          return t.type = v = XS(v), x = RC(null, t, v, g, i), x;
        case Ne:
          return t.type = v = KS(v), x = yC(null, t, v, g, i), x;
        case pt: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && Ki(
              w,
              g,
              "prop",
              Rt(v)
            );
          }
          return x = gC(
            null,
            t,
            v,
            nl(v.type, g),
            i
          ), x;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Fe && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function Rb(e, t, a, i, u) {
      Rm(e, t), t.tag = oe;
      var s;
      return Fl(a) ? (s = !0, Mh(t)) : s = !1, xf(t, u), fC(t, a, i), sS(t, a, i, u), SS(null, t, a, !0, s, u);
    }
    function Tb(e, t, a, i) {
      Rm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Sf(t, a, !1);
        s = Ef(t, f);
      }
      xf(t, i);
      var p, v;
      eo(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Rt(a) || "Unknown";
          pS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), pS[y] = !0);
        }
        t.mode & mt && Zi.recordLegacyContextWarning(t, null), Gr(!0), _p.current = t, p = Mf(null, t, a, u, s, i), v = Nf(), Gr(!1);
      }
      if (ta(), t.flags |= wl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Rt(a) || "Unknown";
        kp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), kp[g] = !0);
      }
      if (typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        {
          var x = Rt(a) || "Unknown";
          kp[x] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), kp[x] = !0);
        }
        t.tag = oe, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Fl(a) ? (w = !0, Mh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, gg(t), cC(t, p), sS(t, a, u, i), SS(null, t, a, !0, w, i);
      } else {
        if (t.tag = ne, t.mode & mt) {
          An(!0);
          try {
            p = Mf(null, t, a, u, s, i), v = Nf();
          } finally {
            An(!1);
          }
        }
        return Nr() && v && Jy(t), Ra(null, t, p, i), ES(t, a), t.child;
      }
    }
    function ES(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Or();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), mS[u] || (mS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Rt(t) || "Unknown";
          Dp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Dp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Rt(t) || "Unknown";
          hS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), hS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Rt(t) || "Unknown";
          vS[v] || (S("%s: Function components do not support contextType.", v), vS[v] = !0);
        }
      }
    }
    var CS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Fn
    };
    function RS(e) {
      return {
        baseLanes: e,
        cachePool: pb(),
        transitions: null
      };
    }
    function wb(e, t) {
      var a = null;
      return {
        baseLanes: tt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function bb(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Tg(e, gp);
    }
    function xb(e, t) {
      return Es(e.childLanes, t);
    }
    function bC(e, t, a) {
      var i = t.pendingProps;
      U_(t) && (t.flags |= Ge);
      var u = el.current, s = !1, f = (t.flags & Ge) !== Le;
      if (f || bb(u, e) ? (s = !0, t.flags &= ~Ge) : (e === null || e.memoizedState !== null) && (u = Yw(u, ME)), u = kf(u), Ao(t, u), e === null) {
        rg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Lb(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var x = _b(t, y, g, a), w = t.child;
          return w.memoizedState = RS(a), t.memoizedState = CS, x;
        } else
          return TS(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          var A = N.dehydrated;
          if (A !== null)
            return Mb(e, t, f, i, A, N, a);
        }
        if (s) {
          var H = i.fallback, se = i.children, Me = Db(e, t, se, H, a), xe = t.child, _t = e.child.memoizedState;
          return xe.memoizedState = _t === null ? RS(a) : wb(_t, a), xe.childLanes = xb(e, a), t.memoizedState = CS, Me;
        } else {
          var St = i.children, O = kb(e, t, St, a);
          return t.memoizedState = null, O;
        }
      }
    }
    function TS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = wS(u, i);
      return s.return = e, e.child = s, s;
    }
    function _b(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & be) === Re && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & qe && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Yo(a, u, i, null)) : (p = wS(f, u), v = Yo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function wS(e, t, a) {
      return x1(e, t, Y, null);
    }
    function xC(e, t) {
      return Xs(e, t);
    }
    function kb(e, t, a, i) {
      var u = e.child, s = u.sibling, f = xC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & be) === Re && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ft) : p.push(s);
      }
      return t.child = f, f;
    }
    function Db(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if ((s & be) === Re && t.child !== f) {
        var g = t.child;
        y = g, y.childLanes = Y, y.pendingProps = v, t.mode & qe && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = xC(f, v), y.subtreeFlags = f.subtreeFlags & rr;
      var x;
      return p !== null ? x = Xs(p, i) : (x = Yo(i, s, u, null), x.flags |= ln), x.return = t, y.return = t, y.sibling = x, t.child = y, x;
    }
    function Cm(e, t, a, i) {
      i !== null && ag(i), wf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = TS(t, s);
      return f.flags |= ln, t.memoizedState = null, f;
    }
    function Ob(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = wS(f, s), v = Yo(i, s, u, null);
      return v.flags |= ln, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & be) !== Re && wf(t, e.child, null, u), v;
    }
    function Lb(e, t, a) {
      return (e.mode & be) === Re ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = De) : By(t) ? e.lanes = Qi : e.lanes = Cr, null;
    }
    function Mb(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rn) {
          t.flags &= ~Rn;
          var O = cS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Cm(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ge, null;
          var P = i.children, L = i.fallback, X = Ob(e, t, P, L, f), pe = t.child;
          return pe.memoizedState = RS(f), t.memoizedState = CS, X;
        }
      else {
        if (Sw(), (t.mode & be) === Re)
          return Cm(
            e,
            t,
            f,
            null
          );
        if (By(u)) {
          var p, v, y;
          {
            var g = AT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = cS(x, p, y);
          return Cm(e, t, f, w);
        }
        var N = aa(f, e.childLanes);
        if (rl || N) {
          var A = Mm();
          if (A !== null) {
            var H = Wv(A, f);
            if (H !== Fn && H !== s.retryLane) {
              s.retryLane = H;
              var se = nn;
              Qa(e, H), pr(A, e, H, se);
            }
          }
          IS();
          var Me = cS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Cm(e, t, f, Me);
        } else if (q0(u)) {
          t.flags |= Ge, t.child = e.child;
          var xe = r_.bind(null, e);
          return FT(u, xe), null;
        } else {
          Rw(t, u, s.treeContext);
          var _t = i.children, St = TS(t, _t);
          return St.flags |= za, St;
        }
      }
    }
    function _C(e, t, a) {
      e.lanes = tt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = tt(i.lanes, t)), vg(e.return, t, a);
    }
    function Nb(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Oe) {
          var u = i.memoizedState;
          u !== null && _C(i, a, e);
        } else if (i.tag === Ot)
          _C(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function zb(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Zh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Ub(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !yS[e])
        if (yS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Ab(e, t) {
      e !== void 0 && !Em[e] && (e !== "collapsed" && e !== "hidden" ? (Em[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Em[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function kC(e, t) {
      {
        var a = Tt(e), i = !a && typeof _r(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Fb(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Tt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!kC(e[a], a))
              return;
        } else {
          var i = _r(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!kC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function bS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function DC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Ub(u), Ab(s, u), Fb(f, u), Ra(e, t, f, a);
      var p = el.current, v = Tg(p, gp);
      if (v)
        p = wg(p, gp), t.flags |= Ge;
      else {
        var y = e !== null && (e.flags & Ge) !== Le;
        y && Nb(t, t.child, a), p = kf(p);
      }
      if (Ao(t, p), (t.mode & be) === Re)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = zb(t.child), x;
            g === null ? (x = t.child, t.child = null) : (x = g.sibling, g.sibling = null), bS(
              t,
              !1,
              x,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var A = N.alternate;
              if (A !== null && Zh(A) === null) {
                t.child = N;
                break;
              }
              var H = N.sibling;
              N.sibling = w, w = N, N = H;
            }
            bS(
              t,
              !0,
              w,
              null,
              s
            );
            break;
          }
          case "together": {
            bS(
              t,
              !1,
              null,
              null,
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function jb(e, t, a) {
      Eg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = wf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var OC = !1;
    function Hb(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || OC || (OC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ki(v, s, "prop", "Context.Provider");
      }
      if (RE(t, u, p), f !== null) {
        var y = f.value;
        if (Se(y, p)) {
          if (f.children === s.children && !Oh())
            return xu(e, t, a);
        } else
          Uw(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var LC = !1;
    function Pb(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (LC || (LC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), xf(t, a);
      var f = tr(i);
      eo(t);
      var p;
      return _p.current = t, Gr(!0), p = s(f), Gr(!1), ta(), t.flags |= wl, Ra(e, t, p, a), t.child;
    }
    function Op() {
      rl = !0;
    }
    function Rm(e, t) {
      (t.mode & be) === Re && e !== null && (e.alternate = null, t.alternate = null, t.flags |= ln);
    }
    function xu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), lC(), Bp(t.lanes), aa(a, t.childLanes) ? (Nw(e, t), t.child) : null;
    }
    function Vb(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Ft) : s.push(e), a.flags |= ln, a;
      }
    }
    function xS(e, t) {
      var a = e.lanes;
      return !!aa(a, t);
    }
    function Bb(e, t, a) {
      switch (t.tag) {
        case te:
          TC(t), t.stateNode, Tf();
          break;
        case Z:
          OE(t);
          break;
        case oe: {
          var i = t.type;
          Fl(i) && Mh(t);
          break;
        }
        case ve:
          Eg(t, t.stateNode.containerInfo);
          break;
        case Pe: {
          var u = t.memoizedProps.value, s = t.type._context;
          RE(t, s, u);
          break;
        }
        case dt:
          {
            var f = aa(a, t.childLanes);
            f && (t.flags |= rt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Oe: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ao(t, kf(el.current)), t.flags |= Ge, null;
            var y = t.child, g = y.childLanes;
            if (aa(a, g))
              return bC(e, t, a);
            Ao(t, kf(el.current));
            var x = xu(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            Ao(t, kf(el.current));
          break;
        }
        case Ot: {
          var w = (e.flags & Ge) !== Le, N = aa(a, t.childLanes);
          if (w) {
            if (N)
              return DC(e, t, a);
            t.flags |= Ge;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), Ao(t, el.current), N)
            break;
          return null;
        }
        case Ue:
        case nt:
          return t.lanes = Y, EC(e, t, a);
      }
      return xu(e, t, a);
    }
    function MC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Vb(e, t, n0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Oh() || t.type !== e.type)
          rl = !0;
        else {
          var s = xS(e, a);
          if (!s && (t.flags & Ge) === Le)
            return rl = !1, Bb(e, t, a);
          (e.flags & cs) !== Le ? rl = !0 : rl = !1;
        }
      } else if (rl = !1, Nr() && pw(t)) {
        var f = t.index, p = vw();
        lE(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case We:
          return Tb(e, t, t.type, a);
        case rn: {
          var v = t.elementType;
          return Cb(e, t, v, a);
        }
        case ne: {
          var y = t.type, g = t.pendingProps, x = t.elementType === y ? g : nl(y, g);
          return gS(e, t, y, x, a);
        }
        case oe: {
          var w = t.type, N = t.pendingProps, A = t.elementType === w ? N : nl(w, N);
          return RC(e, t, w, A, a);
        }
        case te:
          return gb(e, t, a);
        case Z:
          return Sb(e, t, a);
        case he:
          return Eb(e, t);
        case Oe:
          return bC(e, t, a);
        case ve:
          return jb(e, t, a);
        case Ne: {
          var H = t.type, se = t.pendingProps, Me = t.elementType === H ? se : nl(H, se);
          return yC(e, t, H, Me, a);
        }
        case Ze:
          return hb(e, t, a);
        case Be:
          return mb(e, t, a);
        case dt:
          return yb(e, t, a);
        case Pe:
          return Hb(e, t, a);
        case bt:
          return Pb(e, t, a);
        case pt: {
          var xe = t.type, _t = t.pendingProps, St = nl(xe, _t);
          if (t.type !== t.elementType) {
            var O = xe.propTypes;
            O && Ki(
              O,
              St,
              "prop",
              Rt(xe)
            );
          }
          return St = nl(xe.type, St), gC(e, t, xe, St, a);
        }
        case $e:
          return SC(e, t, t.type, t.pendingProps, a);
        case xn: {
          var P = t.type, L = t.pendingProps, X = t.elementType === P ? L : nl(P, L);
          return Rb(e, t, P, X, a);
        }
        case Ot:
          return DC(e, t, a);
        case En:
          break;
        case Ue:
          return EC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function zf(e) {
      e.flags |= rt;
    }
    function NC(e) {
      e.flags |= Xr, e.flags |= md;
    }
    var zC, _S, UC, AC;
    zC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === Z || u.tag === he)
          cT(e, u.stateNode);
        else if (u.tag !== ve) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, _S = function(e, t) {
    }, UC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Cg(), v = dT(f, a, s, i, u, p);
        t.updateQueue = v, v && zf(t);
      }
    }, AC = function(e, t, a, i) {
      a !== i && zf(t);
    };
    function Lp(e, t) {
      if (!Nr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Ur(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = Le;
      if (t) {
        if ((e.mode & qe) !== Re) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = tt(a, tt(y.lanes, y.childLanes)), i |= y.subtreeFlags & rr, i |= y.flags & rr, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = tt(a, tt(g.lanes, g.childLanes)), i |= g.subtreeFlags & rr, i |= g.flags & rr, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & qe) !== Re) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = tt(a, tt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = tt(a, tt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function $b(e, t, a) {
      if (_w() && (t.mode & be) !== Re && (t.flags & Ge) === Le)
        return pE(t), Tf(), t.flags |= Rn | ma | Kn, !1;
      var i = Fh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (bw(t), Ur(t), (t.mode & qe) !== Re) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Tf(), (t.flags & Ge) === Le && (t.memoizedState = null), t.flags |= rt, Ur(t), (t.mode & qe) !== Re) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return vE(), !0;
    }
    function FC(e, t, a) {
      var i = t.pendingProps;
      switch (Zy(t), t.tag) {
        case We:
        case rn:
        case $e:
        case ne:
        case Ne:
        case Ze:
        case Be:
        case dt:
        case bt:
        case pt:
          return Ur(t), null;
        case oe: {
          var u = t.type;
          return Fl(u) && Lh(t), Ur(t), null;
        }
        case te: {
          var s = t.stateNode;
          if (_f(t), qy(t), xg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Fh(t);
            if (f)
              zf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              (!p.isDehydrated || (t.flags & Rn) !== Le) && (t.flags |= Na, vE());
            }
          }
          return _S(e, t), Ur(t), null;
        }
        case Z: {
          Rg(t);
          var v = DE(), y = t.type;
          if (e !== null && t.stateNode != null)
            UC(e, t, y, i, v), e.ref !== t.ref && NC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Ur(t), null;
            }
            var g = Cg(), x = Fh(t);
            if (x)
              Tw(t, v, g) && zf(t);
            else {
              var w = sT(y, i, v, g, t);
              zC(w, t, !1, !1), t.stateNode = w, fT(w, y, i, v) && zf(t);
            }
            t.ref !== null && NC(t);
          }
          return Ur(t), null;
        }
        case he: {
          var N = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            AC(e, t, A, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var H = DE(), se = Cg(), Me = Fh(t);
            Me ? ww(t) && zf(t) : t.stateNode = pT(N, H, se, t);
          }
          return Ur(t), null;
        }
        case Oe: {
          Df(t);
          var xe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var _t = $b(e, t, xe);
            if (!_t)
              return t.flags & Kn ? t : null;
          }
          if ((t.flags & Ge) !== Le)
            return t.lanes = a, (t.mode & qe) !== Re && Kg(t), t;
          var St = xe !== null, O = e !== null && e.memoizedState !== null;
          if (St !== O && St) {
            var P = t.child;
            if (P.flags |= bl, (t.mode & be) !== Re) {
              var L = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !_);
              L || Tg(el.current, ME) ? Yx() : IS();
            }
          }
          var X = t.updateQueue;
          if (X !== null && (t.flags |= rt), Ur(t), (t.mode & qe) !== Re && St) {
            var pe = t.child;
            pe !== null && (t.treeBaseDuration -= pe.treeBaseDuration);
          }
          return null;
        }
        case ve:
          return _f(t), _S(e, t), e === null && lw(t.stateNode.containerInfo), Ur(t), null;
        case Pe:
          var ce = t.type._context;
          return pg(ce, t), Ur(t), null;
        case xn: {
          var Ie = t.type;
          return Fl(Ie) && Lh(t), Ur(t), null;
        }
        case Ot: {
          Df(t);
          var et = t.memoizedState;
          if (et === null)
            return Ur(t), null;
          var qt = (t.flags & Ge) !== Le, zt = et.rendering;
          if (zt === null)
            if (qt)
              Lp(et, !1);
            else {
              var In = Qx() && (e === null || (e.flags & Ge) === Le);
              if (!In)
                for (var Ut = t.child; Ut !== null; ) {
                  var jn = Zh(Ut);
                  if (jn !== null) {
                    qt = !0, t.flags |= Ge, Lp(et, !1);
                    var sa = jn.updateQueue;
                    return sa !== null && (t.updateQueue = sa, t.flags |= rt), t.subtreeFlags = Le, zw(t, a), Ao(t, wg(el.current, gp)), t.child;
                  }
                  Ut = Ut.sibling;
                }
              et.tail !== null && yn() > a1() && (t.flags |= Ge, qt = !0, Lp(et, !1), t.lanes = Av);
            }
          else {
            if (!qt) {
              var Pr = Zh(zt);
              if (Pr !== null) {
                t.flags |= Ge, qt = !0;
                var si = Pr.updateQueue;
                if (si !== null && (t.updateQueue = si, t.flags |= rt), Lp(et, !0), et.tail === null && et.tailMode === "hidden" && !zt.alternate && !Nr())
                  return Ur(t), null;
              } else
                yn() * 2 - et.renderingStartTime > a1() && a !== Cr && (t.flags |= Ge, qt = !0, Lp(et, !1), t.lanes = Av);
            }
            if (et.isBackwards)
              zt.sibling = t.child, t.child = zt;
            else {
              var ba = et.last;
              ba !== null ? ba.sibling = zt : t.child = zt, et.last = zt;
            }
          }
          if (et.tail !== null) {
            var xa = et.tail;
            et.rendering = xa, et.tail = xa.sibling, et.renderingStartTime = yn(), xa.sibling = null;
            var ca = el.current;
            return qt ? ca = wg(ca, gp) : ca = kf(ca), Ao(t, ca), xa;
          }
          return Ur(t), null;
        }
        case En:
          break;
        case Ue:
        case nt: {
          YS(t);
          var Lu = t.memoizedState, Bf = Lu !== null;
          if (e !== null) {
            var Wp = e.memoizedState, Il = Wp !== null;
            Il !== Bf && !le && (t.flags |= bl);
          }
          return !Bf || (t.mode & be) === Re ? Ur(t) : aa(Yl, Cr) && (Ur(t), t.subtreeFlags & (ln | rt) && (t.flags |= bl)), null;
        }
        case jt:
          return null;
        case kt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Yb(e, t, a) {
      switch (Zy(t), t.tag) {
        case oe: {
          var i = t.type;
          Fl(i) && Lh(t);
          var u = t.flags;
          return u & Kn ? (t.flags = u & ~Kn | Ge, (t.mode & qe) !== Re && Kg(t), t) : null;
        }
        case te: {
          t.stateNode, _f(t), qy(t), xg();
          var s = t.flags;
          return (s & Kn) !== Le && (s & Ge) === Le ? (t.flags = s & ~Kn | Ge, t) : null;
        }
        case Z:
          return Rg(t), null;
        case Oe: {
          Df(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Tf();
          }
          var p = t.flags;
          return p & Kn ? (t.flags = p & ~Kn | Ge, (t.mode & qe) !== Re && Kg(t), t) : null;
        }
        case Ot:
          return Df(t), null;
        case ve:
          return _f(t), null;
        case Pe:
          var v = t.type._context;
          return pg(v, t), null;
        case Ue:
        case nt:
          return YS(t), null;
        case jt:
          return null;
        default:
          return null;
      }
    }
    function jC(e, t, a) {
      switch (Zy(t), t.tag) {
        case oe: {
          var i = t.type.childContextTypes;
          i != null && Lh(t);
          break;
        }
        case te: {
          t.stateNode, _f(t), qy(t), xg();
          break;
        }
        case Z: {
          Rg(t);
          break;
        }
        case ve:
          _f(t);
          break;
        case Oe:
          Df(t);
          break;
        case Ot:
          Df(t);
          break;
        case Pe:
          var u = t.type._context;
          pg(u, t);
          break;
        case Ue:
        case nt:
          YS(t);
          break;
      }
    }
    var HC = null;
    HC = /* @__PURE__ */ new Set();
    var Tm = !1, Ar = !1, Ib = typeof WeakSet == "function" ? WeakSet : Set, Ee = null, Uf = null, Af = null;
    function Qb(e) {
      nu(null, function() {
        throw e;
      }), vd();
    }
    var Wb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & qe)
        try {
          Bl(), t.componentWillUnmount();
        } finally {
          Vl(e);
        }
      else
        t.componentWillUnmount();
    };
    function PC(e, t) {
      try {
        Ho(ur, e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function kS(e, t, a) {
      try {
        Wb(e, a);
      } catch (i) {
        sn(e, t, i);
      }
    }
    function Gb(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        sn(e, t, i);
      }
    }
    function VC(e, t) {
      try {
        $C(e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function Ff(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (at && Et && e.mode & qe)
              try {
                Bl(), i = a(null);
              } finally {
                Vl(e);
              }
            else
              i = a(null);
          } catch (u) {
            sn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Xe(e));
        } else
          a.current = null;
    }
    function wm(e, t, a) {
      try {
        a();
      } catch (i) {
        sn(e, t, i);
      }
    }
    var BC = !1;
    function qb(e, t) {
      uT(e.containerInfo), Ee = t, Xb();
      var a = BC;
      return BC = !1, a;
    }
    function Xb() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        (e.subtreeFlags & Ku) !== Le && t !== null ? (t.return = e, Ee = t) : Kb();
      }
    }
    function Kb() {
      for (; Ee !== null; ) {
        var e = Ee;
        Bt(e);
        try {
          Jb(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        Cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function Jb(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Na) !== Le) {
        switch (Bt(e), e.tag) {
          case ne:
          case Ne:
          case $e:
            break;
          case oe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Is && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nl(e.type, i), u);
              {
                var p = HC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Xe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case te: {
            {
              var v = e.stateNode;
              MT(v.containerInfo);
            }
            break;
          }
          case Z:
          case he:
          case ve:
          case xn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Cn();
      }
    }
    function al(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & zr) !== Wa ? Nv(t) : (e & ur) !== Wa && li(t), (e & jl) !== Wa && Yp(!0), wm(t, a, p), (e & jl) !== Wa && Yp(!1), (e & zr) !== Wa ? Rc() : (e & ur) !== Wa && to());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ho(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & zr) !== Wa ? kl(t) : (e & ur) !== Wa && zv(t);
            var f = s.create;
            (e & jl) !== Wa && Yp(!0), s.destroy = f(), (e & jl) !== Wa && Yp(!1), (e & zr) !== Wa ? Cc() : (e & ur) !== Wa && fs();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & ur) !== Le ? v = "useLayoutEffect" : (s.tag & jl) !== Le ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Zb(e, t) {
      if ((t.flags & rt) !== Le)
        switch (t.tag) {
          case dt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = aC(), p = t.alternate === null ? "mount" : "update";
            rC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case te:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case dt:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function ex(e, t, a, i) {
      if ((a.flags & Sr) !== Le)
        switch (a.tag) {
          case ne:
          case Ne:
          case $e: {
            if (!Ar)
              if (a.mode & qe)
                try {
                  Bl(), Ho(ur | lr, a);
                } finally {
                  Vl(a);
                }
              else
                Ho(ur | lr, a);
            break;
          }
          case oe: {
            var u = a.stateNode;
            if (a.flags & rt && !Ar)
              if (t === null)
                if (a.type === a.elementType && !Is && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), a.mode & qe)
                  try {
                    Bl(), u.componentDidMount();
                  } finally {
                    Vl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Is && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), a.mode & qe)
                  try {
                    Bl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Vl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Is && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), kE(a, p, u));
            break;
          }
          case te: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Z:
                    y = a.child.stateNode;
                    break;
                  case oe:
                    y = a.child.stateNode;
                    break;
                }
              kE(a, v, y);
            }
            break;
          }
          case Z: {
            var g = a.stateNode;
            if (t === null && a.flags & rt) {
              var x = a.type, w = a.memoizedProps;
              gT(g, x, w);
            }
            break;
          }
          case he:
            break;
          case ve:
            break;
          case dt: {
            {
              var N = a.memoizedProps, A = N.onCommit, H = N.onRender, se = a.stateNode.effectDuration, Me = aC(), xe = t === null ? "mount" : "update";
              rC() && (xe = "nested-update"), typeof H == "function" && H(a.memoizedProps.id, xe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Me);
              {
                typeof A == "function" && A(a.memoizedProps.id, xe, se, Me), Kx(a);
                var _t = a.return;
                e:
                  for (; _t !== null; ) {
                    switch (_t.tag) {
                      case te:
                        var St = _t.stateNode;
                        St.effectDuration += se;
                        break e;
                      case dt:
                        var O = _t.stateNode;
                        O.effectDuration += se;
                        break e;
                    }
                    _t = _t.return;
                  }
              }
            }
            break;
          }
          case Oe: {
            ox(e, a);
            break;
          }
          case Ot:
          case xn:
          case En:
          case Ue:
          case nt:
          case kt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ar || a.flags & Xr && $C(a);
    }
    function tx(e) {
      switch (e.tag) {
        case ne:
        case Ne:
        case $e: {
          if (e.mode & qe)
            try {
              Bl(), PC(e, e.return);
            } finally {
              Vl(e);
            }
          else
            PC(e, e.return);
          break;
        }
        case oe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Gb(e, e.return, t), VC(e, e.return);
          break;
        }
        case Z: {
          VC(e, e.return);
          break;
        }
      }
    }
    function nx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Z) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? kT(u) : OT(i.stateNode, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
          }
        } else if (i.tag === he) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? DT(s) : LT(s, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
        } else if (!((i.tag === Ue || i.tag === nt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function $C(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case Z:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & qe)
            try {
              Bl(), u = t(i);
            } finally {
              Vl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Xe(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Xe(e)), t.current = i;
      }
    }
    function rx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function YC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, YC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Z) {
          var a = e.stateNode;
          a !== null && sw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function ax(e) {
      for (var t = e.return; t !== null; ) {
        if (IC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function IC(e) {
      return e.tag === Z || e.tag === te || e.tag === ve;
    }
    function QC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || IC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== Z && t.tag !== he && t.tag !== Wt; ) {
            if (t.flags & ln || t.child === null || t.tag === ve)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & ln))
            return t.stateNode;
        }
    }
    function ix(e) {
      var t = ax(e);
      switch (t.tag) {
        case Z: {
          var a = t.stateNode;
          t.flags & $t && (G0(a), t.flags &= ~$t);
          var i = QC(e);
          OS(e, i, a);
          break;
        }
        case te:
        case ve: {
          var u = t.stateNode.containerInfo, s = QC(e);
          DS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function DS(e, t, a) {
      var i = e.tag, u = i === Z || i === he;
      if (u) {
        var s = e.stateNode;
        t ? wT(a, s, t) : RT(a, s);
      } else if (i !== ve) {
        var f = e.child;
        if (f !== null) {
          DS(f, t, a);
          for (var p = f.sibling; p !== null; )
            DS(p, t, a), p = p.sibling;
        }
      }
    }
    function OS(e, t, a) {
      var i = e.tag, u = i === Z || i === he;
      if (u) {
        var s = e.stateNode;
        t ? TT(a, s, t) : CT(a, s);
      } else if (i !== ve) {
        var f = e.child;
        if (f !== null) {
          OS(f, t, a);
          for (var p = f.sibling; p !== null; )
            OS(p, t, a), p = p.sibling;
        }
      }
    }
    var Fr = null, il = !1;
    function lx(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case Z: {
                Fr = i.stateNode, il = !1;
                break e;
              }
              case te: {
                Fr = i.stateNode.containerInfo, il = !0;
                break e;
              }
              case ve: {
                Fr = i.stateNode.containerInfo, il = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Fr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        WC(e, t, a), Fr = null, il = !1;
      }
      rx(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        WC(e, t, i), i = i.sibling;
    }
    function WC(e, t, a) {
      switch (iu(a), a.tag) {
        case Z:
          Ar || Ff(a, t);
        case he: {
          {
            var i = Fr, u = il;
            Fr = null, Po(e, t, a), Fr = i, il = u, Fr !== null && (il ? xT(Fr, a.stateNode) : bT(Fr, a.stateNode));
          }
          return;
        }
        case Wt: {
          Fr !== null && (il ? _T(Fr, a.stateNode) : Vy(Fr, a.stateNode));
          return;
        }
        case ve: {
          {
            var s = Fr, f = il;
            Fr = a.stateNode.containerInfo, il = !0, Po(e, t, a), Fr = s, il = f;
          }
          return;
        }
        case ne:
        case Ne:
        case pt:
        case $e: {
          if (!Ar) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var x = g, w = x.destroy, N = x.tag;
                  w !== void 0 && ((N & jl) !== Wa ? wm(a, t, w) : (N & ur) !== Wa && (li(a), a.mode & qe ? (Bl(), wm(a, t, w), Vl(a)) : wm(a, t, w), to())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case oe: {
          if (!Ar) {
            Ff(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && kS(a, t, A);
          }
          Po(e, t, a);
          return;
        }
        case En: {
          Po(e, t, a);
          return;
        }
        case Ue: {
          if (a.mode & be) {
            var H = Ar;
            Ar = H || a.memoizedState !== null, Po(e, t, a), Ar = H;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function ux(e) {
      e.memoizedState;
    }
    function ox(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && QT(s);
          }
        }
      }
    }
    function GC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Ib()), t.forEach(function(i) {
          var u = a_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Sa)
              if (Uf !== null && Af !== null)
                $p(Af, Uf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function sx(e, t, a) {
      Uf = a, Af = e, Bt(t), qC(t, e), Bt(t), Uf = null, Af = null;
    }
    function ll(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            lx(e, t, s);
          } catch (v) {
            sn(s, t, v);
          }
        }
      var f = Zs();
      if (t.subtreeFlags & Zr)
        for (var p = t.child; p !== null; )
          Bt(p), qC(p, e), p = p.sibling;
      Bt(f);
    }
    function qC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ne:
        case Ne:
        case pt:
        case $e: {
          if (ll(t, e), $l(e), u & rt) {
            try {
              al(jl | lr, e, e.return), Ho(jl | lr, e);
            } catch (Ie) {
              sn(e, e.return, Ie);
            }
            if (e.mode & qe) {
              try {
                Bl(), al(ur | lr, e, e.return);
              } catch (Ie) {
                sn(e, e.return, Ie);
              }
              Vl(e);
            } else
              try {
                al(ur | lr, e, e.return);
              } catch (Ie) {
                sn(e, e.return, Ie);
              }
          }
          return;
        }
        case oe: {
          ll(t, e), $l(e), u & Xr && i !== null && Ff(i, i.return);
          return;
        }
        case Z: {
          ll(t, e), $l(e), u & Xr && i !== null && Ff(i, i.return);
          {
            if (e.flags & $t) {
              var s = e.stateNode;
              try {
                G0(s);
              } catch (Ie) {
                sn(e, e.return, Ie);
              }
            }
            if (u & rt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    ST(f, g, y, v, p, e);
                  } catch (Ie) {
                    sn(e, e.return, Ie);
                  }
              }
            }
          }
          return;
        }
        case he: {
          if (ll(t, e), $l(e), u & rt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var x = e.stateNode, w = e.memoizedProps, N = i !== null ? i.memoizedProps : w;
            try {
              ET(x, N, w);
            } catch (Ie) {
              sn(e, e.return, Ie);
            }
          }
          return;
        }
        case te: {
          if (ll(t, e), $l(e), u & rt && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                IT(t.containerInfo);
              } catch (Ie) {
                sn(e, e.return, Ie);
              }
          }
          return;
        }
        case ve: {
          ll(t, e), $l(e);
          return;
        }
        case Oe: {
          ll(t, e), $l(e);
          var H = e.child;
          if (H.flags & bl) {
            var se = H.stateNode, Me = H.memoizedState, xe = Me !== null;
            if (se.isHidden = xe, xe) {
              var _t = H.alternate !== null && H.alternate.memoizedState !== null;
              _t || $x();
            }
          }
          if (u & rt) {
            try {
              ux(e);
            } catch (Ie) {
              sn(e, e.return, Ie);
            }
            GC(e);
          }
          return;
        }
        case Ue: {
          var St = i !== null && i.memoizedState !== null;
          if (e.mode & be) {
            var O = Ar;
            Ar = O || St, ll(t, e), Ar = O;
          } else
            ll(t, e);
          if ($l(e), u & bl) {
            var P = e.stateNode, L = e.memoizedState, X = L !== null, pe = e;
            if (P.isHidden = X, X && !St && (pe.mode & be) !== Re) {
              Ee = pe;
              for (var ce = pe.child; ce !== null; )
                Ee = ce, fx(ce), ce = ce.sibling;
            }
            nx(pe, X);
          }
          return;
        }
        case Ot: {
          ll(t, e), $l(e), u & rt && GC(e);
          return;
        }
        case En:
          return;
        default: {
          ll(t, e), $l(e);
          return;
        }
      }
    }
    function $l(e) {
      var t = e.flags;
      if (t & ln) {
        try {
          ix(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        e.flags &= ~ln;
      }
      t & za && (e.flags &= ~za);
    }
    function cx(e, t, a) {
      Uf = a, Af = t, Ee = e, XC(e, t, a), Uf = null, Af = null;
    }
    function XC(e, t, a) {
      for (var i = (e.mode & be) !== Re; Ee !== null; ) {
        var u = Ee, s = u.child;
        if (u.tag === Ue && i) {
          var f = u.memoizedState !== null, p = f || Tm;
          if (p) {
            LS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Ar, x = Tm, w = Ar;
            Tm = p, Ar = g, Ar && !w && (Ee = u, dx(u));
            for (var N = s; N !== null; )
              Ee = N, XC(
                N,
                t,
                a
              ), N = N.sibling;
            Ee = u, Tm = x, Ar = w, LS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Sr) !== Le && s !== null ? (s.return = u, Ee = s) : LS(e, t, a);
      }
    }
    function LS(e, t, a) {
      for (; Ee !== null; ) {
        var i = Ee;
        if ((i.flags & Sr) !== Le) {
          var u = i.alternate;
          Bt(i);
          try {
            ex(t, u, i, a);
          } catch (f) {
            sn(i, i.return, f);
          }
          Cn();
        }
        if (i === e) {
          Ee = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ee = s;
          return;
        }
        Ee = i.return;
      }
    }
    function fx(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        switch (t.tag) {
          case ne:
          case Ne:
          case pt:
          case $e: {
            if (t.mode & qe)
              try {
                Bl(), al(ur, t, t.return);
              } finally {
                Vl(t);
              }
            else
              al(ur, t, t.return);
            break;
          }
          case oe: {
            Ff(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && kS(t, t.return, i);
            break;
          }
          case Z: {
            Ff(t, t.return);
            break;
          }
          case Ue: {
            var u = t.memoizedState !== null;
            if (u) {
              KC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ee = a) : KC(e);
      }
    }
    function KC(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        if (t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function dx(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        if (t.tag === Ue) {
          var i = t.memoizedState !== null;
          if (i) {
            JC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ee = a) : JC(e);
      }
    }
    function JC(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        Bt(t);
        try {
          tx(t);
        } catch (i) {
          sn(t, t.return, i);
        }
        if (Cn(), t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function px(e, t, a, i) {
      Ee = t, vx(t, e, a, i);
    }
    function vx(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee, s = u.child;
        (u.subtreeFlags & Ua) !== Le && s !== null ? (s.return = u, Ee = s) : hx(e, t, a, i);
      }
    }
    function hx(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee;
        if ((u.flags & cn) !== Le) {
          Bt(u);
          try {
            mx(t, u, a, i);
          } catch (f) {
            sn(u, u.return, f);
          }
          Cn();
        }
        if (u === e) {
          Ee = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ee = s;
          return;
        }
        Ee = u.return;
      }
    }
    function mx(e, t, a, i) {
      switch (t.tag) {
        case ne:
        case Ne:
        case $e: {
          if (t.mode & qe) {
            Xg();
            try {
              Ho(zr | lr, t);
            } finally {
              qg(t);
            }
          } else
            Ho(zr | lr, t);
          break;
        }
      }
    }
    function yx(e) {
      Ee = e, gx();
    }
    function gx() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        if ((Ee.flags & Ft) !== Le) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ee = u, Cx(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ee = e;
          }
        }
        (e.subtreeFlags & Ua) !== Le && t !== null ? (t.return = e, Ee = t) : Sx();
      }
    }
    function Sx() {
      for (; Ee !== null; ) {
        var e = Ee;
        (e.flags & cn) !== Le && (Bt(e), Ex(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function Ex(e) {
      switch (e.tag) {
        case ne:
        case Ne:
        case $e: {
          e.mode & qe ? (Xg(), al(zr | lr, e, e.return), qg(e)) : al(zr | lr, e, e.return);
          break;
        }
      }
    }
    function Cx(e, t) {
      for (; Ee !== null; ) {
        var a = Ee;
        Bt(a), Tx(a, t), Cn();
        var i = a.child;
        i !== null ? (i.return = a, Ee = i) : Rx(e);
      }
    }
    function Rx(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.sibling, i = t.return;
        if (YC(t), t === e) {
          Ee = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ee = a;
          return;
        }
        Ee = i;
      }
    }
    function Tx(e, t) {
      switch (e.tag) {
        case ne:
        case Ne:
        case $e: {
          e.mode & qe ? (Xg(), al(zr, e, t), qg(e)) : al(zr, e, t);
          break;
        }
      }
    }
    function wx(e) {
      switch (e.tag) {
        case ne:
        case Ne:
        case $e: {
          try {
            Ho(ur | lr, e);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case oe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
      }
    }
    function bx(e) {
      switch (e.tag) {
        case ne:
        case Ne:
        case $e: {
          try {
            Ho(zr | lr, e);
          } catch (t) {
            sn(e, e.return, t);
          }
          break;
        }
      }
    }
    function xx(e) {
      switch (e.tag) {
        case ne:
        case Ne:
        case $e: {
          try {
            al(ur | lr, e, e.return);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case oe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && kS(e, e.return, t);
          break;
        }
      }
    }
    function _x(e) {
      switch (e.tag) {
        case ne:
        case Ne:
        case $e:
          try {
            al(zr | lr, e, e.return);
          } catch (t) {
            sn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Mp = Symbol.for;
      Mp("selector.component"), Mp("selector.has_pseudo_class"), Mp("selector.role"), Mp("selector.test_id"), Mp("selector.text");
    }
    var kx = [];
    function Dx() {
      kx.forEach(function(e) {
        return e();
      });
    }
    var Ox = k.ReactCurrentActQueue;
    function Lx(e) {
      {
        var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0, a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function ZC() {
      {
        var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
        return !e && Ox.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Mx = Math.ceil, MS = k.ReactCurrentDispatcher, NS = k.ReactCurrentOwner, jr = k.ReactCurrentBatchConfig, ul = k.ReactCurrentActQueue, cr = 0, e1 = 1, Hr = 2, Oi = 4, _u = 0, Np = 1, Qs = 2, bm = 3, zp = 4, t1 = 5, zS = 6, xt = cr, Ta = null, Mn = null, fr = Y, Yl = Y, US = Oo(Y), dr = _u, Up = null, xm = Y, Ap = Y, _m = Y, Fp = null, Ga = null, AS = 0, n1 = 500, r1 = 1 / 0, Nx = 500, ku = null;
    function jp() {
      r1 = yn() + Nx;
    }
    function a1() {
      return r1;
    }
    var km = !1, FS = null, jf = null, Ws = !1, Vo = null, Hp = Y, jS = [], HS = null, zx = 50, Pp = 0, PS = null, VS = !1, Dm = !1, Ux = 50, Hf = 0, Om = null, Vp = nn, Lm = Y, i1 = !1;
    function Mm() {
      return Ta;
    }
    function wa() {
      return (xt & (Hr | Oi)) !== cr ? yn() : (Vp !== nn || (Vp = yn()), Vp);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & be) === Re)
        return De;
      if ((xt & Hr) !== cr && fr !== Y)
        return co(fr);
      var a = Ow() !== Dw;
      if (a) {
        if (jr.transition !== null) {
          var i = jr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Lm === Fn && (Lm = Yv()), Lm;
      }
      var u = Pa();
      if (u !== Fn)
        return u;
      var s = vT();
      return s;
    }
    function Ax(e) {
      var t = e.mode;
      return (t & be) === Re ? De : ra();
    }
    function pr(e, t, a, i) {
      l_(), i1 && S("useInsertionEffect must not schedule updates."), VS && (Dm = !0), pu(e, a, i), (xt & Hr) !== Y && e === Ta ? s_(t) : (Sa && Ic(e, t, a), c_(t), e === Ta && ((xt & Hr) === cr && (Ap = tt(Ap, a)), dr === zp && $o(e, fr)), qa(e, i), a === De && xt === cr && (t.mode & be) === Re && !ul.isBatchingLegacy && (jp(), iE()));
    }
    function Fx(e, t, a) {
      var i = e.current;
      i.lanes = t, pu(e, t, a), qa(e, a);
    }
    function jx(e) {
      return (xt & Hr) !== cr;
    }
    function qa(e, t) {
      var a = e.callbackNode;
      Hv(e, t);
      var i = fu(e, e === Ta ? fr : Y);
      if (i === Y) {
        a !== null && C1(a), e.callbackNode = null, e.callbackPriority = Fn;
        return;
      }
      var u = Dn(i), s = e.callbackPriority;
      if (s === u && !(ul.current !== null && a !== GS)) {
        a == null && s !== De && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && C1(a);
      var f;
      if (u === De)
        e.tag === Lo ? (ul.isBatchingLegacy !== null && (ul.didScheduleLegacyUpdate = !0), dw(o1.bind(null, e))) : aE(o1.bind(null, e)), ul.current !== null ? ul.current.push(Mo) : mT(function() {
          (xt & (Hr | Oi)) === cr && Mo();
        }), f = null;
      else {
        var p;
        switch (ir(i)) {
          case On:
            p = gc;
            break;
          case Wi:
            p = au;
            break;
          case Ci:
            p = Ei;
            break;
          case fo:
            p = Sc;
            break;
          default:
            p = Ei;
            break;
        }
        f = qS(p, l1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function l1(e, t) {
      if (nb(), Vp = nn, Lm = Y, (xt & (Hr | Oi)) !== cr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Ou();
      if (i && e.callbackNode !== a)
        return null;
      var u = fu(e, e === Ta ? fr : Y);
      if (u === Y)
        return null;
      var s = !Ss(e, u) && !$v(e, u) && !t, f = s ? Gx(e, u) : zm(e, u);
      if (f !== _u) {
        if (f === Qs) {
          var p = Ol(e);
          p !== Y && (u = p, f = BS(e, p));
        }
        if (f === Np) {
          var v = Up;
          throw Gs(e, Y), $o(e, u), qa(e, yn()), v;
        }
        if (f === zS)
          $o(e, u);
        else {
          var y = !Ss(e, u), g = e.current.alternate;
          if (y && !Px(g)) {
            if (f = zm(e, u), f === Qs) {
              var x = Ol(e);
              x !== Y && (u = x, f = BS(e, x));
            }
            if (f === Np) {
              var w = Up;
              throw Gs(e, Y), $o(e, u), qa(e, yn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Hx(e, f, u);
        }
      }
      return qa(e, yn()), e.callbackNode === a ? l1.bind(null, e) : null;
    }
    function BS(e, t) {
      var a = Fp;
      if (Qc(e)) {
        var i = Gs(e, t);
        i.flags |= Rn, iw(e.containerInfo);
      }
      var u = zm(e, t);
      if (u !== Qs) {
        var s = Ga;
        Ga = a, s !== null && u1(s);
      }
      return u;
    }
    function u1(e) {
      Ga === null ? Ga = e : Ga.push.apply(Ga, e);
    }
    function Hx(e, t, a) {
      switch (t) {
        case _u:
        case Np:
          throw new Error("Root did not complete. This is a bug in React.");
        case Qs: {
          qs(e, Ga, ku);
          break;
        }
        case bm: {
          if ($o(e, a), Pv(a) && !R1()) {
            var i = AS + n1 - yn();
            if (i > 10) {
              var u = fu(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!du(s, a)) {
                wa(), $c(e, s);
                break;
              }
              e.timeoutHandle = Hy(qs.bind(null, e, Ga, ku), i);
              break;
            }
          }
          qs(e, Ga, ku);
          break;
        }
        case zp: {
          if ($o(e, a), Bv(a))
            break;
          if (!R1()) {
            var f = Fv(e, a), p = f, v = yn() - p, y = i_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Hy(qs.bind(null, e, Ga, ku), y);
              break;
            }
          }
          qs(e, Ga, ku);
          break;
        }
        case t1: {
          qs(e, Ga, ku);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Px(e) {
      for (var t = e; ; ) {
        if (t.flags & ss) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Se(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & ss && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function $o(e, t) {
      t = Es(t, _m), t = Es(t, Ap), Qv(e, t);
    }
    function o1(e) {
      if (rb(), (xt & (Hr | Oi)) !== cr)
        throw new Error("Should not already be working.");
      Ou();
      var t = fu(e, Y);
      if (!aa(t, De))
        return qa(e, yn()), null;
      var a = zm(e, t);
      if (e.tag !== Lo && a === Qs) {
        var i = Ol(e);
        i !== Y && (t = i, a = BS(e, i));
      }
      if (a === Np) {
        var u = Up;
        throw Gs(e, Y), $o(e, t), qa(e, yn()), u;
      }
      if (a === zS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, qs(e, Ga, ku), qa(e, yn()), null;
    }
    function Vx(e, t) {
      t !== Y && (Ld(e, tt(t, De)), qa(e, yn()), (xt & (Hr | Oi)) === cr && (jp(), Mo()));
    }
    function $S(e, t) {
      var a = xt;
      xt |= e1;
      try {
        return e(t);
      } finally {
        xt = a, xt === cr && !ul.isBatchingLegacy && (jp(), iE());
      }
    }
    function Bx(e, t, a, i, u) {
      var s = Pa(), f = jr.transition;
      try {
        return jr.transition = null, Tn(On), e(t, a, i, u);
      } finally {
        Tn(s), jr.transition = f, xt === cr && jp();
      }
    }
    function Du(e) {
      Vo !== null && Vo.tag === Lo && (xt & (Hr | Oi)) === cr && Ou();
      var t = xt;
      xt |= e1;
      var a = jr.transition, i = Pa();
      try {
        return jr.transition = null, Tn(On), e ? e() : void 0;
      } finally {
        Tn(i), jr.transition = a, xt = t, (xt & (Hr | Oi)) === cr && Mo();
      }
    }
    function s1() {
      return (xt & (Hr | Oi)) !== cr;
    }
    function Nm(e, t) {
      ua(US, Yl, e), Yl = tt(Yl, t);
    }
    function YS(e) {
      Yl = US.current, la(US, e);
    }
    function Gs(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== Py && (e.timeoutHandle = Py, hT(a)), Mn !== null)
        for (var i = Mn.return; i !== null; ) {
          var u = i.alternate;
          jC(u, i), i = i.return;
        }
      Ta = e;
      var s = Xs(e.current, null);
      return Mn = s, fr = Yl = t, dr = _u, Up = null, xm = Y, Ap = Y, _m = Y, Fp = null, Ga = null, Fw(), Zi.discardPendingWarnings(), s;
    }
    function c1(e, t) {
      do {
        var a = Mn;
        try {
          if ($h(), zE(), Cn(), NS.current = null, a === null || a.return === null) {
            dr = Np, Up = t, Mn = null;
            return;
          }
          if (at && a.mode & qe && gm(a, !0), it)
            if (ta(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              lu(a, i, fr);
            } else
              ds(a, t, fr);
          db(e, a.return, a, t, fr), v1(a);
        } catch (u) {
          t = u, Mn === a && a !== null ? (a = a.return, Mn = a) : a = Mn;
          continue;
        }
        return;
      } while (!0);
    }
    function f1() {
      var e = MS.current;
      return MS.current = pm, e === null ? pm : e;
    }
    function d1(e) {
      MS.current = e;
    }
    function $x() {
      AS = yn();
    }
    function Bp(e) {
      xm = tt(e, xm);
    }
    function Yx() {
      dr === _u && (dr = bm);
    }
    function IS() {
      (dr === _u || dr === bm || dr === Qs) && (dr = zp), Ta !== null && (gs(xm) || gs(Ap)) && $o(Ta, fr);
    }
    function Ix(e) {
      dr !== zp && (dr = Qs), Fp === null ? Fp = [e] : Fp.push(e);
    }
    function Qx() {
      return dr === _u;
    }
    function zm(e, t) {
      var a = xt;
      xt |= Hr;
      var i = f1();
      if (Ta !== e || fr !== t) {
        if (Sa) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, fr), u.clear()), Md(e, t);
        }
        ku = Rs(), Gs(e, t);
      }
      fn(t);
      do
        try {
          Wx();
          break;
        } catch (s) {
          c1(e, s);
        }
      while (!0);
      if ($h(), xt = a, d1(i), Mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return wc(), Ta = null, fr = Y, dr;
    }
    function Wx() {
      for (; Mn !== null; )
        p1(Mn);
    }
    function Gx(e, t) {
      var a = xt;
      xt |= Hr;
      var i = f1();
      if (Ta !== e || fr !== t) {
        if (Sa) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, fr), u.clear()), Md(e, t);
        }
        ku = Rs(), jp(), Gs(e, t);
      }
      fn(t);
      do
        try {
          qx();
          break;
        } catch (s) {
          c1(e, s);
        }
      while (!0);
      return $h(), d1(i), xt = a, Mn !== null ? (Tc(), _u) : (wc(), Ta = null, fr = Y, dr);
    }
    function qx() {
      for (; Mn !== null && !yc(); )
        p1(Mn);
    }
    function p1(e) {
      var t = e.alternate;
      Bt(e);
      var a;
      (e.mode & qe) !== Re ? (Gg(e), a = QS(t, e, Yl), gm(e, !0)) : a = QS(t, e, Yl), Cn(), e.memoizedProps = e.pendingProps, a === null ? v1(e) : Mn = a, NS.current = null;
    }
    function v1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ma) === Le) {
          Bt(t);
          var u = void 0;
          if ((t.mode & qe) === Re ? u = FC(a, t, Yl) : (Gg(t), u = FC(a, t, Yl), gm(t, !1)), Cn(), u !== null) {
            Mn = u;
            return;
          }
        } else {
          var s = Yb(a, t);
          if (s !== null) {
            s.flags &= xv, Mn = s;
            return;
          }
          if ((t.mode & qe) !== Re) {
            gm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ma, i.subtreeFlags = Le, i.deletions = null;
          else {
            dr = zS, Mn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Mn = v;
          return;
        }
        t = i, Mn = t;
      } while (t !== null);
      dr === _u && (dr = t1);
    }
    function qs(e, t, a) {
      var i = Pa(), u = jr.transition;
      try {
        jr.transition = null, Tn(On), Xx(e, t, a, i);
      } finally {
        jr.transition = u, Tn(i);
      }
      return null;
    }
    function Xx(e, t, a, i) {
      do
        Ou();
      while (Vo !== null);
      if (u_(), (xt & (Hr | Oi)) !== cr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (_l(s), u === null)
        return Ec(), null;
      if (s === Y && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Fn;
      var f = tt(u.lanes, u.childLanes);
      Yc(e, f), e === Ta && (Ta = null, Mn = null, fr = Y), ((u.subtreeFlags & Ua) !== Le || (u.flags & Ua) !== Le) && (Ws || (Ws = !0, HS = a, qS(Ei, function() {
        return Ou(), null;
      })));
      var p = (u.subtreeFlags & (Ku | Zr | Sr | Ua)) !== Le, v = (u.flags & (Ku | Zr | Sr | Ua)) !== Le;
      if (p || v) {
        var y = jr.transition;
        jr.transition = null;
        var g = Pa();
        Tn(On);
        var x = xt;
        xt |= Oi, NS.current = null, qb(e, u), iC(), sx(e, u, s), oT(e.containerInfo), e.current = u, Td(s), cx(u, e, s), no(), Dv(), xt = x, Tn(g), jr.transition = y;
      } else
        e.current = u, iC();
      var w = Ws;
      if (Ws ? (Ws = !1, Vo = e, Hp = s) : (Hf = 0, Om = null), f = e.pendingLanes, f === Y && (jf = null), w || g1(e.current, !1), Zu(u.stateNode, i), Sa && e.memoizedUpdaters.clear(), Dx(), qa(e, yn()), t !== null)
        for (var N = e.onRecoverableError, A = 0; A < t.length; A++) {
          var H = t[A], se = H.stack, Me = H.digest;
          N(H.value, {
            componentStack: se,
            digest: Me
          });
        }
      if (km) {
        km = !1;
        var xe = FS;
        throw FS = null, xe;
      }
      return aa(Hp, De) && e.tag !== Lo && Ou(), f = e.pendingLanes, aa(f, De) ? (tb(), e === PS ? Pp++ : (Pp = 0, PS = e)) : Pp = 0, Mo(), Ec(), null;
    }
    function Ou() {
      if (Vo !== null) {
        var e = ir(Hp), t = cy(Ci, e), a = jr.transition, i = Pa();
        try {
          return jr.transition = null, Tn(t), Jx();
        } finally {
          Tn(i), jr.transition = a;
        }
      }
      return !1;
    }
    function Kx(e) {
      jS.push(e), Ws || (Ws = !0, qS(Ei, function() {
        return Ou(), null;
      }));
    }
    function Jx() {
      if (Vo === null)
        return !1;
      var e = HS;
      HS = null;
      var t = Vo, a = Hp;
      if (Vo = null, Hp = Y, (xt & (Hr | Oi)) !== cr)
        throw new Error("Cannot flush passive effects while already rendering.");
      VS = !0, Dm = !1, Uv(a);
      var i = xt;
      xt |= Oi, yx(t.current), px(t, t.current, a, e);
      {
        var u = jS;
        jS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Zb(t, f);
        }
      }
      wd(), g1(t.current, !0), xt = i, Mo(), Dm ? t === Om ? Hf++ : (Hf = 0, Om = t) : Hf = 0, VS = !1, Dm = !1, ja(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function h1(e) {
      return jf !== null && jf.has(e);
    }
    function Zx(e) {
      jf === null ? jf = /* @__PURE__ */ new Set([e]) : jf.add(e);
    }
    function e_(e) {
      km || (km = !0, FS = e);
    }
    var t_ = e_;
    function m1(e, t, a) {
      var i = Ys(a, t), u = pC(e, i, De), s = zo(e, u, De), f = wa();
      s !== null && (pu(s, De, f), qa(s, f));
    }
    function sn(e, t, a) {
      if (Qb(a), Yp(!1), e.tag === te) {
        m1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === te) {
          m1(i, e, a);
          return;
        } else if (i.tag === oe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !h1(s)) {
            var f = Ys(a, e), p = dS(i, f, De), v = zo(i, p, De), y = wa();
            v !== null && (pu(v, De, y), qa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function n_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = wa();
      $c(e, a), f_(e), Ta === e && du(fr, a) && (dr === zp || dr === bm && Pv(fr) && yn() - AS < n1 ? Gs(e, Y) : _m = tt(_m, a)), qa(e, u);
    }
    function y1(e, t) {
      t === Fn && (t = Ax(e));
      var a = wa(), i = Qa(e, t);
      i !== null && (pu(i, t, a), qa(i, a));
    }
    function r_(e) {
      var t = e.memoizedState, a = Fn;
      t !== null && (a = t.retryLane), y1(e, a);
    }
    function a_(e, t) {
      var a = Fn, i;
      switch (e.tag) {
        case Oe:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Ot:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), y1(e, a);
    }
    function i_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Mx(e / 1960) * 1960;
    }
    function l_() {
      if (Pp > zx)
        throw Pp = 0, PS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Hf > Ux && (Hf = 0, Om = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function u_() {
      Zi.flushLegacyContextWarning(), Zi.flushPendingUnsafeLifecycleWarnings();
    }
    function g1(e, t) {
      Bt(e), Um(e, Jr, xx), t && Um(e, ru, _x), Um(e, Jr, wx), t && Um(e, ru, bx), Cn();
    }
    function Um(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Le ? i = i.child : ((i.flags & t) !== Le && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Am = null;
    function S1(e) {
      {
        if ((xt & Hr) !== cr || !(e.mode & be))
          return;
        var t = e.tag;
        if (t !== We && t !== te && t !== oe && t !== ne && t !== Ne && t !== pt && t !== $e)
          return;
        var a = Xe(e) || "ReactComponent";
        if (Am !== null) {
          if (Am.has(a))
            return;
          Am.add(a);
        } else
          Am = /* @__PURE__ */ new Set([a]);
        var i = mn;
        try {
          Bt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Bt(e) : Cn();
        }
      }
    }
    var QS;
    {
      var o_ = null;
      QS = function(e, t, a) {
        var i = _1(o_, t);
        try {
          return MC(e, t, a);
        } catch (s) {
          if (Ew() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if ($h(), zE(), jC(e, t), _1(t, i), t.mode & qe && Gg(t), nu(null, MC, null, e, t, a), iy()) {
            var u = vd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var E1 = !1, WS;
    WS = /* @__PURE__ */ new Set();
    function s_(e) {
      if (Wr && !Jw())
        switch (e.tag) {
          case ne:
          case Ne:
          case $e: {
            var t = Mn && Xe(Mn) || "Unknown", a = t;
            if (!WS.has(a)) {
              WS.add(a);
              var i = Xe(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case oe: {
            E1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), E1 = !0);
            break;
          }
        }
    }
    function $p(e, t) {
      if (Sa) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ic(e, i, t);
        });
      }
    }
    var GS = {};
    function qS(e, t) {
      {
        var a = ul.current;
        return a !== null ? (a.push(t), GS) : mc(e, t);
      }
    }
    function C1(e) {
      if (e !== GS)
        return kv(e);
    }
    function R1() {
      return ul.current !== null;
    }
    function c_(e) {
      {
        if (e.mode & be) {
          if (!ZC())
            return;
        } else if (!Lx() || xt !== cr || e.tag !== ne && e.tag !== Ne && e.tag !== $e)
          return;
        if (ul.current === null) {
          var t = mn;
          try {
            Bt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Xe(e));
          } finally {
            t ? Bt(e) : Cn();
          }
        }
      }
    }
    function f_(e) {
      e.tag !== Lo && ZC() && ul.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Yp(e) {
      i1 = e;
    }
    var Li = null, Pf = null, d_ = function(e) {
      Li = e;
    };
    function Vf(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        return t === void 0 ? e : t.current;
      }
    }
    function XS(e) {
      return Vf(e);
    }
    function KS(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Vf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: q,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function T1(e, t) {
      {
        if (Li === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case oe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ne: {
            (typeof i == "function" || s === Fe) && (u = !0);
            break;
          }
          case Ne: {
            (s === q || s === Fe) && (u = !0);
            break;
          }
          case pt:
          case $e: {
            (s === Ct || s === Fe) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Li(a);
          if (f !== void 0 && f === Li(i))
            return !0;
        }
        return !1;
      }
    }
    function w1(e) {
      {
        if (Li === null || typeof WeakSet != "function")
          return;
        Pf === null && (Pf = /* @__PURE__ */ new WeakSet()), Pf.add(e);
      }
    }
    var p_ = function(e, t) {
      {
        if (Li === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Ou(), Du(function() {
          JS(e.current, i, a);
        });
      }
    }, v_ = function(e, t) {
      {
        if (e.context !== ui)
          return;
        Ou(), Du(function() {
          Ip(t, e, null, null);
        });
      }
    };
    function JS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ne:
          case $e:
          case oe:
            v = p;
            break;
          case Ne:
            v = p.render;
            break;
        }
        if (Li === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var x = Li(v);
          x !== void 0 && (a.has(x) ? g = !0 : t.has(x) && (f === oe ? g = !0 : y = !0));
        }
        if (Pf !== null && (Pf.has(e) || i !== null && Pf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Qa(e, De);
          w !== null && pr(w, e, De, nn);
        }
        u !== null && !g && JS(u, t, a), s !== null && JS(s, t, a);
      }
    }
    var h_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return ZS(e.current, i, a), a;
      }
    };
    function ZS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ne:
          case $e:
          case oe:
            p = f;
            break;
          case Ne:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? m_(e, a) : i !== null && ZS(i, t, a), u !== null && ZS(u, t, a);
      }
    }
    function m_(e, t) {
      {
        var a = y_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Z:
              t.add(i.stateNode);
              return;
            case ve:
              t.add(i.stateNode.containerInfo);
              return;
            case te:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function y_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Z)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var e0;
    {
      e0 = !1;
      try {
        var b1 = Object.preventExtensions({});
      } catch {
        e0 = !0;
      }
    }
    function g_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Le, this.subtreeFlags = Le, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !e0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var oi = function(e, t, a, i) {
      return new g_(e, t, a, i);
    };
    function t0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function S_(e) {
      return typeof e == "function" && !t0(e) && e.defaultProps === void 0;
    }
    function E_(e) {
      if (typeof e == "function")
        return t0(e) ? oe : ne;
      if (e != null) {
        var t = e.$$typeof;
        if (t === q)
          return Ne;
        if (t === Ct)
          return pt;
      }
      return We;
    }
    function Xs(e, t) {
      var a = e.alternate;
      a === null ? (a = oi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Le, a.subtreeFlags = Le, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & rr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case We:
        case ne:
        case $e:
          a.type = Vf(e.type);
          break;
        case oe:
          a.type = XS(e.type);
          break;
        case Ne:
          a.type = KS(e.type);
          break;
      }
      return a;
    }
    function C_(e, t) {
      e.flags &= rr | ln;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = Le, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Le, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function R_(e, t, a) {
      var i;
      return e === Nh ? (i = be, t === !0 && (i |= mt, i |= Ea)) : i = Re, Sa && (i |= qe), oi(te, null, null, i);
    }
    function n0(e, t, a, i, u, s) {
      var f = We, p = e;
      if (typeof e == "function")
        t0(e) ? (f = oe, p = XS(p)) : p = Vf(p);
      else if (typeof e == "string")
        f = Z;
      else {
        e:
          switch (e) {
            case ha:
              return Yo(a.children, u, s, t);
            case pi:
              f = Be, u |= mt, (u & be) !== Re && (u |= Ea);
              break;
            case vi:
              return T_(a, u, s, t);
            case we:
              return w_(a, u, s, t);
            case vt:
              return b_(a, u, s, t);
            case Xt:
              return x1(a, u, s, t);
            case an:
            case ut:
            case gr:
            case hi:
            case zn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case R:
                    f = Pe;
                    break e;
                  case I:
                    f = bt;
                    break e;
                  case q:
                    f = Ne, p = KS(p);
                    break e;
                  case Ct:
                    f = pt;
                    break e;
                  case Fe:
                    f = rn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? Xe(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      }
      var g = oi(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function r0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = n0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Yo(e, t, a, i) {
      var u = oi(Ze, e, i, t);
      return u.lanes = a, u;
    }
    function T_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = oi(dt, e, i, t | qe);
      return u.elementType = vi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function w_(e, t, a, i) {
      var u = oi(Oe, e, i, t);
      return u.elementType = we, u.lanes = a, u;
    }
    function b_(e, t, a, i) {
      var u = oi(Ot, e, i, t);
      return u.elementType = vt, u.lanes = a, u;
    }
    function x1(e, t, a, i) {
      var u = oi(Ue, e, i, t);
      u.elementType = Xt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function a0(e, t, a) {
      var i = oi(he, e, null, t);
      return i.lanes = a, i;
    }
    function x_() {
      var e = oi(Z, null, null, Re);
      return e.elementType = "DELETED", e;
    }
    function __(e) {
      var t = oi(Wt, null, null, Re);
      return t.stateNode = e, t;
    }
    function i0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = oi(ve, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, u;
    }
    function _1(e, t) {
      return e === null && (e = oi(We, null, null, Re)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function k_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Py, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Fn, this.eventTimes = Cs(Y), this.expirationTimes = Cs(nn), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = Cs(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < hs; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Nh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function k1(e, t, a, i, u, s, f, p, v, y) {
      var g = new k_(e, t, a, p, v), x = R_(t, s);
      g.current = x, x.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        x.memoizedState = w;
      }
      return gg(x), g;
    }
    var l0 = "18.3.1";
    function D_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return $r(i), {
        $$typeof: xr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var u0, o0;
    u0 = !1, o0 = {};
    function D1(e) {
      if (!e)
        return ui;
      var t = Ma(e), a = fw(t);
      if (t.tag === oe) {
        var i = t.type;
        if (Fl(i))
          return nE(t, i, a);
      }
      return a;
    }
    function O_(e, t) {
      {
        var a = Ma(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Aa(a);
        if (u === null)
          return null;
        if (u.mode & mt) {
          var s = Xe(a) || "Component";
          if (!o0[s]) {
            o0[s] = !0;
            var f = mn;
            try {
              Bt(u), a.mode & mt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Bt(f) : Cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function O1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return k1(e, t, v, y, a, i, u, s, f);
    }
    function L1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, x = k1(a, i, g, e, u, s, f, p, v);
      x.context = D1(null);
      var w = x.current, N = wa(), A = Bo(w), H = bu(N, A);
      return H.callback = t != null ? t : null, zo(w, H, A), Fx(x, A, N), x;
    }
    function Ip(e, t, a, i) {
      Rd(t, e);
      var u = t.current, s = wa(), f = Bo(u);
      bd(f);
      var p = D1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Wr && mn !== null && !u0 && (u0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Xe(mn) || "Unknown"));
      var v = bu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = zo(u, v, f);
      return y !== null && (pr(y, u, f, s), Gh(y, u, f)), f;
    }
    function Fm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Z:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function L_(e) {
      switch (e.tag) {
        case te: {
          var t = e.stateNode;
          if (Qc(t)) {
            var a = kd(t);
            Vx(t, a);
          }
          break;
        }
        case Oe: {
          Du(function() {
            var u = Qa(e, De);
            if (u !== null) {
              var s = wa();
              pr(u, e, De, s);
            }
          });
          var i = De;
          s0(e, i);
          break;
        }
      }
    }
    function M1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Iv(a.retryLane, t));
    }
    function s0(e, t) {
      M1(e, t);
      var a = e.alternate;
      a && M1(a, t);
    }
    function M_(e) {
      if (e.tag === Oe) {
        var t = ys, a = Qa(e, t);
        if (a !== null) {
          var i = wa();
          pr(a, e, t, i);
        }
        s0(e, t);
      }
    }
    function N_(e) {
      if (e.tag === Oe) {
        var t = Bo(e), a = Qa(e, t);
        if (a !== null) {
          var i = wa();
          pr(a, e, t, i);
        }
        s0(e, t);
      }
    }
    function N1(e) {
      var t = _v(e);
      return t === null ? null : t.stateNode;
    }
    var z1 = function(e) {
      return null;
    };
    function z_(e) {
      return z1(e);
    }
    var U1 = function(e) {
      return !1;
    };
    function U_(e) {
      return U1(e);
    }
    var A1 = null, F1 = null, j1 = null, H1 = null, P1 = null, V1 = null, B1 = null, $1 = null, Y1 = null;
    {
      var I1 = function(e, t, a) {
        var i = t[a], u = Tt(e) ? e.slice() : ot({}, e);
        return a + 1 === t.length ? (Tt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = I1(e[i], t, a + 1), u);
      }, Q1 = function(e, t) {
        return I1(e, t, 0);
      }, W1 = function(e, t, a, i) {
        var u = t[i], s = Tt(e) ? e.slice() : ot({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Tt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = W1(
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, G1 = function(e, t, a) {
        if (t.length !== a.length) {
          Qe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Qe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return W1(e, t, a, 0);
      }, q1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Tt(e) ? e.slice() : ot({}, e);
        return s[u] = q1(e[u], t, a + 1, i), s;
      }, X1 = function(e, t, a) {
        return q1(e, t, 0, a);
      }, c0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      A1 = function(e, t, a, i) {
        var u = c0(e, t);
        if (u !== null) {
          var s = X1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = Qa(e, De);
          f !== null && pr(f, e, De, nn);
        }
      }, F1 = function(e, t, a) {
        var i = c0(e, t);
        if (i !== null) {
          var u = Q1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = ot({}, e.memoizedProps);
          var s = Qa(e, De);
          s !== null && pr(s, e, De, nn);
        }
      }, j1 = function(e, t, a, i) {
        var u = c0(e, t);
        if (u !== null) {
          var s = G1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = ot({}, e.memoizedProps);
          var f = Qa(e, De);
          f !== null && pr(f, e, De, nn);
        }
      }, H1 = function(e, t, a) {
        e.pendingProps = X1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qa(e, De);
        i !== null && pr(i, e, De, nn);
      }, P1 = function(e, t) {
        e.pendingProps = Q1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Qa(e, De);
        a !== null && pr(a, e, De, nn);
      }, V1 = function(e, t, a) {
        e.pendingProps = G1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qa(e, De);
        i !== null && pr(i, e, De, nn);
      }, B1 = function(e) {
        var t = Qa(e, De);
        t !== null && pr(t, e, De, nn);
      }, $1 = function(e) {
        z1 = e;
      }, Y1 = function(e) {
        U1 = e;
      };
    }
    function A_(e) {
      var t = Aa(e);
      return t === null ? null : t.stateNode;
    }
    function F_(e) {
      return null;
    }
    function j_() {
      return mn;
    }
    function H_(e) {
      var t = e.findFiberByHostInstance, a = k.ReactCurrentDispatcher;
      return Cd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: A1,
        overrideHookStateDeletePath: F1,
        overrideHookStateRenamePath: j1,
        overrideProps: H1,
        overridePropsDeletePath: P1,
        overridePropsRenamePath: V1,
        setErrorHandler: $1,
        setSuspenseHandler: Y1,
        scheduleUpdate: B1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: A_,
        findFiberByHostInstance: t || F_,
        findHostInstancesForRefresh: h_,
        scheduleRefresh: p_,
        scheduleRoot: v_,
        setRefreshHandler: d_,
        getCurrentFiber: j_,
        reconcilerVersion: l0
      });
    }
    var K1 = typeof reportError == "function" ? reportError : function(e) {
      console.error(e);
    };
    function f0(e) {
      this._internalRoot = e;
    }
    jm.prototype.render = f0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Hm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Un) {
          var i = N1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Ip(e, t, null, null);
    }, jm.prototype.unmount = f0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        s1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Du(function() {
          Ip(null, e, null, null);
        }), K0(t);
      }
    };
    function P_(e, t) {
      if (!Hm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      J1(e);
      var a = !1, i = !1, u = "", s = K1;
      t != null && (t.hydrate ? Qe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Za && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = O1(e, Nh, null, a, i, u, s);
      xh(f.current, e);
      var p = e.nodeType === Un ? e.parentNode : e;
      return Kd(p), new f0(f);
    }
    function jm(e) {
      this._internalRoot = e;
    }
    function V_(e) {
      e && py(e);
    }
    jm.prototype.unstable_scheduleHydration = V_;
    function B_(e, t, a) {
      if (!Hm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      J1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a != null ? a : null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = K1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = L1(t, null, e, Nh, i, s, f, p, v);
      if (xh(y.current, e), Kd(e), u)
        for (var g = 0; g < u.length; g++) {
          var x = u[g];
          Qw(y, x);
        }
      return new jm(y);
    }
    function Hm(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === ri || e.nodeType === Xl || !B));
    }
    function Qp(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === ri || e.nodeType === Xl || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    function J1(e) {
      e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), op(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var $_ = k.ReactCurrentOwner, Z1;
    Z1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = N1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = d0(e), u = !!(i && Do(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function d0(e) {
      return e ? e.nodeType === ri ? e.documentElement : e.firstChild : null;
    }
    function eR() {
    }
    function Y_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Fm(f);
            s.call(w);
          };
        }
        var f = L1(
          t,
          i,
          e,
          Lo,
          null,
          !1,
          !1,
          "",
          eR
        );
        e._reactRootContainer = f, xh(f.current, e);
        var p = e.nodeType === Un ? e.parentNode : e;
        return Kd(p), Du(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Fm(g);
            y.call(w);
          };
        }
        var g = O1(
          e,
          Lo,
          null,
          !1,
          !1,
          "",
          eR
        );
        e._reactRootContainer = g, xh(g.current, e);
        var x = e.nodeType === Un ? e.parentNode : e;
        return Kd(x), Du(function() {
          Ip(t, g, a, i);
        }), g;
      }
    }
    function I_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Pm(e, t, a, i, u) {
      Z1(a), I_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Y_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Fm(f);
            p.call(v);
          };
        }
        Ip(t, f, e, u);
      }
      return Fm(f);
    }
    var tR = !1;
    function Q_(e) {
      {
        tR || (tR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = $_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Rt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === qr ? e : O_(e, "findDOMNode");
    }
    function W_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = op(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Pm(null, e, t, !0, a);
    }
    function G_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = op(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Pm(null, e, t, !1, a);
    }
    function q_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !os(e))
        throw new Error("parentComponent must be a valid React Component");
      return Pm(e, t, a, !1, i);
    }
    var nR = !1;
    function X_(e) {
      if (nR || (nR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Qp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = op(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = d0(e), i = a && !Do(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Du(function() {
          Pm(null, null, e, !1, function() {
            e._reactRootContainer = null, K0(e);
          });
        }), !0;
      } else {
        {
          var u = d0(e), s = !!(u && Do(u)), f = e.nodeType === qr && Qp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ho(L_), fy(M_), Gc(N_), Gv(Pa), qv(Rr), (typeof Map != "function" || Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), wv(JR), fc($S, Bx, Du);
    function K_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Hm(t))
        throw new Error("Target container is not a DOM element.");
      return D_(e, t, null, a);
    }
    function J_(e, t, a, i) {
      return q_(e, t, a, i);
    }
    var p0 = {
      usingClientEntryPoint: !1,
      Events: [Do, gf, _h, cc, is, $S]
    };
    function Z_(e, t) {
      return p0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), P_(e, t);
    }
    function ek(e, t, a) {
      return p0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), B_(e, t, a);
    }
    function tk(e) {
      return s1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Du(e);
    }
    var nk = H_({
      findFiberByHostInstance: Us,
      bundleType: 1,
      version: l0,
      rendererPackageName: "react-dom"
    });
    if (!nk && pn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var rR = window.location.protocol;
      /^(https?|file):$/.test(rR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (rR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = p0, Ka.createPortal = K_, Ka.createRoot = Z_, Ka.findDOMNode = Q_, Ka.flushSync = tk, Ka.hydrate = W_, Ka.hydrateRoot = ek, Ka.render = G_, Ka.unmountComponentAtNode = X_, Ka.unstable_batchedUpdates = $S, Ka.unstable_renderSubtreeIntoContainer = J_, Ka.version = l0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ka;
}
(function(F) {
  function V() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V);
      } catch (k) {
        console.error(k);
      }
    }
  }
  process.env.NODE_ENV === "production" ? (V(), F.exports = dk()) : F.exports = pk();
})(vR);
var E0, C0, Gp = vR.exports;
if (process.env.NODE_ENV === "production")
  C0 = $f.createRoot = Gp.createRoot, E0 = $f.hydrateRoot = Gp.hydrateRoot;
else {
  var Bm = Gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  C0 = $f.createRoot = function(F, V) {
    Bm.usingClientEntryPoint = !0;
    try {
      return Gp.createRoot(F, V);
    } finally {
      Bm.usingClientEntryPoint = !1;
    }
  }, E0 = $f.hydrateRoot = function(F, V, k) {
    Bm.usingClientEntryPoint = !0;
    try {
      return Gp.hydrateRoot(F, V, k);
    } finally {
      Bm.usingClientEntryPoint = !1;
    }
  };
}
const vk = /* @__PURE__ */ ik({
  __proto__: null,
  get createRoot() {
    return C0;
  },
  get hydrateRoot() {
    return E0;
  },
  default: $f
}, [$f]);
var hk = Object.defineProperty, mk = (F, V, k) => V in F ? hk(F, V, { enumerable: !0, configurable: !0, writable: !0, value: k }) : F[V] = k, $m = (F, V, k) => mk(F, typeof V != "symbol" ? V + "" : V, k);
const yk = {
  stringify: (F) => F ? "true" : "false",
  parse: (F) => /^[ty1-9]/i.test(F)
}, gk = {
  stringify: (F) => F.name,
  parse: (F, V, k) => {
    const Je = (() => {
      if (typeof window < "u" && F in window)
        return window[F];
      if (typeof global < "u" && F in global)
        return global[F];
    })();
    return typeof Je == "function" ? Je.bind(k) : void 0;
  }
}, Sk = {
  stringify: (F) => JSON.stringify(F),
  parse: (F) => JSON.parse(F)
};
function Ek(F) {
  return F.replace(
    /([a-z0-9])([A-Z])/g,
    (V, k, Je) => `${k}-${Je.toLowerCase()}`
  );
}
function mR(F) {
  return F.replace(/[-:]([a-z])/g, (V, k) => `${k.toUpperCase()}`);
}
const Ck = {
  stringify: (F) => F.name,
  parse: (F, V, k) => {
    const Je = (() => {
      const yt = mR(V);
      if (typeof k < "u" && yt in k.container)
        return k.container[yt];
    })();
    return typeof Je == "function" ? Je.bind(k) : void 0;
  }
}, Rk = {
  stringify: (F) => `${F}`,
  parse: (F) => parseFloat(F)
}, Tk = {
  stringify: (F) => F,
  parse: (F) => F
}, y0 = {
  string: Tk,
  number: Rk,
  boolean: yk,
  function: gk,
  method: Ck,
  json: Sk
}, qp = Symbol.for("r2wc.render"), Ym = Symbol.for("r2wc.connected"), Ks = Symbol.for("r2wc.context"), ci = Symbol.for("r2wc.props");
function wk(F, V, k) {
  var Je, yt, Qe;
  V.props || (V.props = F.propTypes ? Object.keys(F.propTypes) : []), V.events || (V.events = []);
  const S = Array.isArray(V.props) ? V.props.slice() : Object.keys(V.props), st = Array.isArray(V.events) ? V.events.slice() : Object.keys(V.events), ne = {}, oe = {}, We = {}, te = {};
  for (const Z of S) {
    ne[Z] = Array.isArray(V.props) ? "string" : V.props[Z];
    const he = Ek(Z);
    We[Z] = he, te[he] = Z;
  }
  for (const Z of st)
    oe[Z] = Array.isArray(V.events) ? {} : V.events[Z];
  class ve extends HTMLElement {
    constructor() {
      super(), $m(this, Qe, !0), $m(this, yt), $m(this, Je, {}), $m(this, "container"), V.shadow ? this.container = this.attachShadow({
        mode: V.shadow
      }) : this.container = this, this[ci].container = this.container;
      for (const he of S) {
        const Ze = We[he], Be = this.getAttribute(Ze), bt = ne[he], Pe = bt ? y0[bt] : null;
        if (bt === "method") {
          const Ne = mR(Ze);
          Object.defineProperty(this[ci].container, Ne, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[ci][Ne];
            },
            set(dt) {
              this[ci][Ne] = dt, this[qp]();
            }
          }), this[ci][he] = Pe.parse(Be, Ze, this);
        }
        Pe != null && Pe.parse && Be && (this[ci][he] = Pe.parse(Be, Ze, this));
      }
      for (const he of st)
        this[ci][he] = (Ze) => {
          const Be = he.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(Be, { detail: Ze, ...oe[he] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(te);
    }
    connectedCallback() {
      this[Ym] = !0, this[qp]();
    }
    disconnectedCallback() {
      this[Ym] = !1, this[Ks] && k.unmount(this[Ks]), delete this[Ks];
    }
    attributeChangedCallback(he, Ze, Be) {
      const bt = te[he], Pe = ne[bt], Ne = Pe ? y0[Pe] : null;
      bt in ne && Ne != null && Ne.parse && Be && (this[ci][bt] = Ne.parse(Be, he, this), this[qp]());
    }
    [(Qe = Ym, yt = Ks, Je = ci, qp)]() {
      this[Ym] && (this[Ks] ? k.update(this[Ks], this[ci]) : this[Ks] = k.mount(
        this.container,
        F,
        this[ci]
      ));
    }
  }
  for (const Z of S) {
    const he = We[Z], Ze = ne[Z];
    Object.defineProperty(ve.prototype, Z, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[ci][Z];
      },
      set(Be) {
        this[ci][Z] = Be;
        const bt = Ze ? y0[Ze] : null;
        if (bt != null && bt.stringify) {
          const Pe = bt.stringify(Be, he, this);
          this.getAttribute(he) !== Pe && this.setAttribute(he, Pe);
        } else
          this[qp]();
      }
    });
  }
  return ve;
}
function bk(F, V, k, Je = {}) {
  function yt(st, ne, oe) {
    const We = V.createElement(ne, oe);
    if ("createRoot" in k) {
      const te = k.createRoot(st);
      return te.render(We), {
        container: st,
        root: te,
        ReactComponent: ne
      };
    }
    if ("render" in k)
      return k.render(We, st), {
        container: st,
        ReactComponent: ne
      };
    throw new Error("Invalid ReactDOM instance provided.");
  }
  function Qe({ container: st, root: ne, ReactComponent: oe }, We) {
    const te = V.createElement(oe, We);
    if (ne) {
      ne.render(te);
      return;
    }
    if ("render" in k) {
      k.render(te, st);
      return;
    }
  }
  function S({ container: st, root: ne }) {
    if (ne) {
      ne.unmount();
      return;
    }
    if ("unmountComponentAtNode" in k) {
      k.unmountComponentAtNode(st);
      return;
    }
  }
  return wk(F, Je, { mount: yt, unmount: S, update: Qe });
}
var R0 = { exports: {} }, Xp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fR;
function xk() {
  if (fR)
    return Xp;
  fR = 1;
  var F = Yf.exports, V = Symbol.for("react.element"), k = Symbol.for("react.fragment"), Je = Object.prototype.hasOwnProperty, yt = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Qe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(st, ne, oe) {
    var We, te = {}, ve = null, Z = null;
    oe !== void 0 && (ve = "" + oe), ne.key !== void 0 && (ve = "" + ne.key), ne.ref !== void 0 && (Z = ne.ref);
    for (We in ne)
      Je.call(ne, We) && !Qe.hasOwnProperty(We) && (te[We] = ne[We]);
    if (st && st.defaultProps)
      for (We in ne = st.defaultProps, ne)
        te[We] === void 0 && (te[We] = ne[We]);
    return { $$typeof: V, type: st, key: ve, ref: Z, props: te, _owner: yt.current };
  }
  return Xp.Fragment = k, Xp.jsx = S, Xp.jsxs = S, Xp;
}
var Kp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dR;
function _k() {
  return dR || (dR = 1, process.env.NODE_ENV !== "production" && function() {
    var F = Yf.exports, V = Symbol.for("react.element"), k = Symbol.for("react.portal"), Je = Symbol.for("react.fragment"), yt = Symbol.for("react.strict_mode"), Qe = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), st = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), We = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), he = Symbol.iterator, Ze = "@@iterator";
    function Be(R) {
      if (R === null || typeof R != "object")
        return null;
      var I = he && R[he] || R[Ze];
      return typeof I == "function" ? I : null;
    }
    var bt = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Pe(R) {
      {
        for (var I = arguments.length, q = new Array(I > 1 ? I - 1 : 0), we = 1; we < I; we++)
          q[we - 1] = arguments[we];
        Ne("error", R, q);
      }
    }
    function Ne(R, I, q) {
      {
        var we = bt.ReactDebugCurrentFrame, vt = we.getStackAddendum();
        vt !== "" && (I += "%s", q = q.concat([vt]));
        var Ct = q.map(function(Fe) {
          return String(Fe);
        });
        Ct.unshift("Warning: " + I), Function.prototype.apply.call(console[R], console, Ct);
      }
    }
    var dt = !1, Oe = !1, pt = !1, $e = !1, rn = !1, xn;
    xn = Symbol.for("react.module.reference");
    function Wt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Je || R === Qe || rn || R === yt || R === oe || R === We || $e || R === Z || dt || Oe || pt || typeof R == "object" && R !== null && (R.$$typeof === ve || R.$$typeof === te || R.$$typeof === S || R.$$typeof === st || R.$$typeof === ne || R.$$typeof === xn || R.getModuleId !== void 0));
    }
    function Ot(R, I, q) {
      var we = R.displayName;
      if (we)
        return we;
      var vt = I.displayName || I.name || "";
      return vt !== "" ? q + "(" + vt + ")" : q;
    }
    function En(R) {
      return R.displayName || "Context";
    }
    function Ue(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && Pe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Je:
          return "Fragment";
        case k:
          return "Portal";
        case Qe:
          return "Profiler";
        case yt:
          return "StrictMode";
        case oe:
          return "Suspense";
        case We:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case st:
            var I = R;
            return En(I) + ".Consumer";
          case S:
            var q = R;
            return En(q._context) + ".Provider";
          case ne:
            return Ot(R, R.render, "ForwardRef");
          case te:
            var we = R.displayName || null;
            return we !== null ? we : Ue(R.type) || "Memo";
          case ve: {
            var vt = R, Ct = vt._payload, Fe = vt._init;
            try {
              return Ue(Fe(Ct));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var nt = Object.assign, jt = 0, kt, ye, ee, _e, le, _, B;
    function Ae() {
    }
    Ae.__reactDisabledLog = !0;
    function Ye() {
      {
        if (jt === 0) {
          kt = console.log, ye = console.info, ee = console.warn, _e = console.error, le = console.group, _ = console.groupCollapsed, B = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        jt++;
      }
    }
    function it() {
      {
        if (jt--, jt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: nt({}, R, {
              value: kt
            }),
            info: nt({}, R, {
              value: ye
            }),
            warn: nt({}, R, {
              value: ee
            }),
            error: nt({}, R, {
              value: _e
            }),
            group: nt({}, R, {
              value: le
            }),
            groupCollapsed: nt({}, R, {
              value: _
            }),
            groupEnd: nt({}, R, {
              value: B
            })
          });
        }
        jt < 0 && Pe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var at = bt.ReactCurrentDispatcher, Et;
    function ct(R, I, q) {
      {
        if (Et === void 0)
          try {
            throw Error();
          } catch (vt) {
            var we = vt.stack.trim().match(/\n( *(at )?)/);
            Et = we && we[1] || "";
          }
        return `
` + Et + R;
      }
    }
    var ft = !1, en;
    {
      var vr = typeof WeakMap == "function" ? WeakMap : Map;
      en = new vr();
    }
    function Vr(R, I) {
      if (!R || ft)
        return "";
      {
        var q = en.get(R);
        if (q !== void 0)
          return q;
      }
      var we;
      ft = !0;
      var vt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ct;
      Ct = at.current, at.current = null, Ye();
      try {
        if (I) {
          var Fe = function() {
            throw Error();
          };
          if (Object.defineProperty(Fe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Fe, []);
            } catch (Gn) {
              we = Gn;
            }
            Reflect.construct(R, [], Fe);
          } else {
            try {
              Fe.call();
            } catch (Gn) {
              we = Gn;
            }
            R.call(Fe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Gn) {
            we = Gn;
          }
          R();
        }
      } catch (Gn) {
        if (Gn && we && typeof Gn.stack == "string") {
          for (var ut = Gn.stack.split(`
`), zn = we.stack.split(`
`), Xt = ut.length - 1, an = zn.length - 1; Xt >= 1 && an >= 0 && ut[Xt] !== zn[an]; )
            an--;
          for (; Xt >= 1 && an >= 0; Xt--, an--)
            if (ut[Xt] !== zn[an]) {
              if (Xt !== 1 || an !== 1)
                do
                  if (Xt--, an--, an < 0 || ut[Xt] !== zn[an]) {
                    var gr = `
` + ut[Xt].replace(" at new ", " at ");
                    return R.displayName && gr.includes("<anonymous>") && (gr = gr.replace("<anonymous>", R.displayName)), typeof R == "function" && en.set(R, gr), gr;
                  }
                while (Xt >= 1 && an >= 0);
              break;
            }
        }
      } finally {
        ft = !1, at.current = Ct, it(), Error.prepareStackTrace = vt;
      }
      var hi = R ? R.displayName || R.name : "", Lt = hi ? ct(hi) : "";
      return typeof R == "function" && en.set(R, Lt), Lt;
    }
    function pn(R, I, q) {
      return Vr(R, !1);
    }
    function Qn(R) {
      var I = R.prototype;
      return !!(I && I.isReactComponent);
    }
    function Hn(R, I, q) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Vr(R, Qn(R));
      if (typeof R == "string")
        return ct(R);
      switch (R) {
        case oe:
          return ct("Suspense");
        case We:
          return ct("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ne:
            return pn(R.render);
          case te:
            return Hn(R.type, I, q);
          case ve: {
            var we = R, vt = we._payload, Ct = we._init;
            try {
              return Hn(Ct(vt), I, q);
            } catch {
            }
          }
        }
      return "";
    }
    var Nn = Object.prototype.hasOwnProperty, _n = {}, Br = bt.ReactDebugCurrentFrame;
    function $r(R) {
      if (R) {
        var I = R._owner, q = Hn(R.type, R._source, I ? I.type : null);
        Br.setExtraStackFrame(q);
      } else
        Br.setExtraStackFrame(null);
    }
    function Wn(R, I, q, we, vt) {
      {
        var Ct = Function.call.bind(Nn);
        for (var Fe in R)
          if (Ct(R, Fe)) {
            var ut = void 0;
            try {
              if (typeof R[Fe] != "function") {
                var zn = Error((we || "React class") + ": " + q + " type `" + Fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw zn.name = "Invariant Violation", zn;
              }
              ut = R[Fe](I, Fe, we, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Xt) {
              ut = Xt;
            }
            ut && !(ut instanceof Error) && ($r(vt), Pe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", we || "React class", q, Fe, typeof ut), $r(null)), ut instanceof Error && !(ut.message in _n) && (_n[ut.message] = !0, $r(vt), Pe("Failed %s type: %s", q, ut.message), $r(null));
          }
      }
    }
    var hr = Array.isArray;
    function Yr(R) {
      return hr(R);
    }
    function mr(R) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, q = I && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return q;
      }
    }
    function fa(R) {
      try {
        return nr(R), !1;
      } catch {
        return !0;
      }
    }
    function nr(R) {
      return "" + R;
    }
    function Ir(R) {
      if (fa(R))
        return Pe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(R)), nr(R);
    }
    var vn = bt.ReactCurrentOwner, wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fi, da, re;
    re = {};
    function ke(R) {
      if (Nn.call(R, "ref")) {
        var I = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function lt(R) {
      if (Nn.call(R, "key")) {
        var I = Object.getOwnPropertyDescriptor(R, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function At(R, I) {
      if (typeof R.ref == "string" && vn.current && I && vn.current.stateNode !== I) {
        var q = Ue(vn.current.type);
        re[q] || (Pe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ue(vn.current.type), R.ref), re[q] = !0);
      }
    }
    function Ht(R, I) {
      {
        var q = function() {
          fi || (fi = !0, Pe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        q.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function kn(R, I) {
      {
        var q = function() {
          da || (da = !0, Pe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        q.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var hn = function(R, I, q, we, vt, Ct, Fe) {
      var ut = {
        $$typeof: V,
        type: R,
        key: I,
        ref: q,
        props: Fe,
        _owner: Ct
      };
      return ut._store = {}, Object.defineProperty(ut._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ut, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we
      }), Object.defineProperty(ut, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: vt
      }), Object.freeze && (Object.freeze(ut.props), Object.freeze(ut)), ut;
    };
    function yr(R, I, q, we, vt) {
      {
        var Ct, Fe = {}, ut = null, zn = null;
        q !== void 0 && (Ir(q), ut = "" + q), lt(I) && (Ir(I.key), ut = "" + I.key), ke(I) && (zn = I.ref, At(I, vt));
        for (Ct in I)
          Nn.call(I, Ct) && !wr.hasOwnProperty(Ct) && (Fe[Ct] = I[Ct]);
        if (R && R.defaultProps) {
          var Xt = R.defaultProps;
          for (Ct in Xt)
            Fe[Ct] === void 0 && (Fe[Ct] = Xt[Ct]);
        }
        if (ut || zn) {
          var an = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ut && Ht(Fe, an), zn && kn(Fe, an);
        }
        return hn(R, ut, zn, vt, we, vn.current, Fe);
      }
    }
    var It = bt.ReactCurrentOwner, br = bt.ReactDebugCurrentFrame;
    function Pt(R) {
      if (R) {
        var I = R._owner, q = Hn(R.type, R._source, I ? I.type : null);
        br.setExtraStackFrame(q);
      } else
        br.setExtraStackFrame(null);
    }
    var Vt;
    Vt = !1;
    function Ja(R) {
      return typeof R == "object" && R !== null && R.$$typeof === V;
    }
    function _a() {
      {
        if (It.current) {
          var R = Ue(It.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function ol(R) {
      {
        if (R !== void 0) {
          var I = R.fileName.replace(/^.*[\\\/]/, ""), q = R.lineNumber;
          return `

Check your code at ` + I + ":" + q + ".";
        }
        return "";
      }
    }
    var Ql = {};
    function Mu(R) {
      {
        var I = _a();
        if (!I) {
          var q = typeof R == "string" ? R : R.displayName || R.name;
          q && (I = `

Check the top-level render call using <` + q + ">.");
        }
        return I;
      }
    }
    function Mi(R, I) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var q = Mu(I);
        if (Ql[q])
          return;
        Ql[q] = !0;
        var we = "";
        R && R._owner && R._owner !== It.current && (we = " It was passed a child from " + Ue(R._owner.type) + "."), Pt(R), Pe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, we), Pt(null);
      }
    }
    function sl(R, I) {
      {
        if (typeof R != "object")
          return;
        if (Yr(R))
          for (var q = 0; q < R.length; q++) {
            var we = R[q];
            Ja(we) && Mi(we, I);
          }
        else if (Ja(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var vt = Be(R);
          if (typeof vt == "function" && vt !== R.entries)
            for (var Ct = vt.call(R), Fe; !(Fe = Ct.next()).done; )
              Ja(Fe.value) && Mi(Fe.value, I);
        }
      }
    }
    function pa(R) {
      {
        var I = R.type;
        if (I == null || typeof I == "string")
          return;
        var q;
        if (typeof I == "function")
          q = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === ne || I.$$typeof === te))
          q = I.propTypes;
        else
          return;
        if (q) {
          var we = Ue(I);
          Wn(q, R.props, "prop", we, R);
        } else if (I.PropTypes !== void 0 && !Vt) {
          Vt = !0;
          var vt = Ue(I);
          Pe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", vt || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && Pe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function di(R) {
      {
        for (var I = Object.keys(R.props), q = 0; q < I.length; q++) {
          var we = I[q];
          if (we !== "children" && we !== "key") {
            Pt(R), Pe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", we), Pt(null);
            break;
          }
        }
        R.ref !== null && (Pt(R), Pe("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    var va = {};
    function Za(R, I, q, we, vt, Ct) {
      {
        var Fe = Wt(R);
        if (!Fe) {
          var ut = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ut += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var zn = ol(vt);
          zn ? ut += zn : ut += _a();
          var Xt;
          R === null ? Xt = "null" : Yr(R) ? Xt = "array" : R !== void 0 && R.$$typeof === V ? (Xt = "<" + (Ue(R.type) || "Unknown") + " />", ut = " Did you accidentally export a JSX literal instead of a component?") : Xt = typeof R, Pe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Xt, ut);
        }
        var an = yr(R, I, q, vt, Ct);
        if (an == null)
          return an;
        if (Fe) {
          var gr = I.children;
          if (gr !== void 0)
            if (we)
              if (Yr(gr)) {
                for (var hi = 0; hi < gr.length; hi++)
                  sl(gr[hi], R);
                Object.freeze && Object.freeze(gr);
              } else
                Pe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              sl(gr, R);
        }
        if (Nn.call(I, "key")) {
          var Lt = Ue(R), Gn = Object.keys(I).filter(function(ka) {
            return ka !== "key";
          }), _r = Gn.length > 0 ? "{key: someKey, " + Gn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!va[Lt + _r]) {
            var ot = Gn.length > 0 ? "{" + Gn.join(": ..., ") + ": ...}" : "{}";
            Pe(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _r, Lt, ot, Lt), va[Lt + _r] = !0;
          }
        }
        return R === Je ? di(an) : pa(an), an;
      }
    }
    function xr(R, I, q) {
      return Za(R, I, q, !0);
    }
    function ha(R, I, q) {
      return Za(R, I, q, !1);
    }
    var pi = ha, vi = xr;
    Kp.Fragment = Je, Kp.jsx = pi, Kp.jsxs = vi;
  }()), Kp;
}
(function(F) {
  process.env.NODE_ENV === "production" ? F.exports = xk() : F.exports = _k();
})(R0);
const g0 = R0.exports.jsx, pR = R0.exports.jsxs, kk = "_wrapper_16cee_1", Dk = "_logo_16cee_10", Ok = "_title_16cee_15", S0 = {
  wrapper: kk,
  logo: Dk,
  title: Ok
}, Lk = ({
  text: F,
  onClick: V
}) => g0("header", {
  children: pR("div", {
    className: S0.wrapper,
    children: [g0("div", {
      children: g0("img", {
        className: S0.logo,
        src: "https://new.bitovi.com/logos/bitovi-logo-red-1.svg",
        onClick: V
      })
    }), pR("h1", {
      className: S0.logo,
      children: [F, ", World!!!!"]
    })]
  })
});
customElements.define(
  "rwc-header",
  bk(Lk, sk, vk, {
    props: {
      text: "string",
      onClick: "function"
    }
  })
);
