var toaster = function(t) { "use strict"; var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function n(t) { return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t }

    function i(t, e) { return t(e = { exports: {} }, e.exports), e.exports } var r = function(t) { return t && t.Math == Math && t },
        o = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof e && e) || function() { return this }() || Function("return this")(),
        a = function(t) { try { return !!t() } catch (t) { return !0 } },
        s = !a((function() { return 7 != Object.defineProperty({}, 1, { get: function() { return 7 } })[1] })),
        l = {}.propertyIsEnumerable,
        c = Object.getOwnPropertyDescriptor,
        u = c && !l.call({ 1: 2 }, 1) ? function(t) { var e = c(this, t); return !!e && e.enumerable } : l,
        f = { f: u },
        d = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } },
        h = {}.toString,
        g = function(t) { return h.call(t).slice(8, -1) },
        p = "".split,
        v = a((function() { return !Object("z").propertyIsEnumerable(0) })) ? function(t) { return "String" == g(t) ? p.call(t, "") : Object(t) } : Object,
        m = function(t) { if (null == t) throw TypeError("Can't call method on " + t); return t },
        y = function(t) { return v(m(t)) },
        x = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t },
        b = function(t, e) { if (!x(t)) return t; var n, i; if (e && "function" == typeof(n = t.toString) && !x(i = n.call(t))) return i; if ("function" == typeof(n = t.valueOf) && !x(i = n.call(t))) return i; if (!e && "function" == typeof(n = t.toString) && !x(i = n.call(t))) return i; throw TypeError("Can't convert object to primitive value") },
        $ = {}.hasOwnProperty,
        w = function(t, e) { return $.call(t, e) },
        _ = o.document,
        k = x(_) && x(_.createElement),
        M = function(t) { return k ? _.createElement(t) : {} },
        S = !s && !a((function() { return 7 != Object.defineProperty(M("div"), "a", { get: function() { return 7 } }).a })),
        A = Object.getOwnPropertyDescriptor,
        D = { f: s ? A : function(t, e) { if (t = y(t), e = b(e, !0), S) try { return A(t, e) } catch (t) {}
                if (w(t, e)) return d(!f.f.call(t, e), t[e]) } },
        C = function(t) { if (!x(t)) throw TypeError(String(t) + " is not an object"); return t },
        E = Object.defineProperty,
        O = { f: s ? E : function(t, e, n) { if (C(t), e = b(e, !0), C(n), S) try { return E(t, e, n) } catch (t) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported"); return "value" in n && (t[e] = n.value), t } },
        T = s ? function(t, e, n) { return O.f(t, e, d(1, n)) } : function(t, e, n) { return t[e] = n, t },
        P = function(t, e) { try { T(o, t, e) } catch (n) { o[t] = e } return e },
        B = "__core-js_shared__",
        L = o[B] || P(B, {}),
        z = Function.toString; "function" != typeof L.inspectSource && (L.inspectSource = function(t) { return z.call(t) }); var Y, F, W, R = L.inspectSource,
        N = o.WeakMap,
        H = "function" == typeof N && /native code/.test(R(N)),
        j = i((function(t) {
            (t.exports = function(t, e) { return L[t] || (L[t] = void 0 !== e ? e : {}) })("versions", []).push({ version: "3.7.0", mode: "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" }) })),
        I = 0,
        V = Math.random(),
        U = function(t) { return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++I + V).toString(36) },
        X = j("keys"),
        q = function(t) { return X[t] || (X[t] = U(t)) },
        G = {},
        Z = o.WeakMap; if (H) { var Q = L.state || (L.state = new Z),
            K = Q.get,
            J = Q.has,
            tt = Q.set;
        Y = function(t, e) { return e.facade = t, tt.call(Q, t, e), e }, F = function(t) { return K.call(Q, t) || {} }, W = function(t) { return J.call(Q, t) } } else { var et = q("state");
        G[et] = !0, Y = function(t, e) { return e.facade = t, T(t, et, e), e }, F = function(t) { return w(t, et) ? t[et] : {} }, W = function(t) { return w(t, et) } } var nt = { set: Y, get: F, has: W, enforce: function(t) { return W(t) ? F(t) : Y(t, {}) }, getterFor: function(t) { return function(e) { var n; if (!x(e) || (n = F(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required"); return n } } },
        it = i((function(t) { var e = nt.get,
                n = nt.enforce,
                i = String(String).split("String");
            (t.exports = function(t, e, r, a) { var s, l = !!a && !!a.unsafe,
                    c = !!a && !!a.enumerable,
                    u = !!a && !!a.noTargetGet; "function" == typeof r && ("string" != typeof e || w(r, "name") || T(r, "name", e), (s = n(r)).source || (s.source = i.join("string" == typeof e ? e : ""))), t !== o ? (l ? !u && t[e] && (c = !0) : delete t[e], c ? t[e] = r : T(t, e, r)) : c ? t[e] = r : P(e, r) })(Function.prototype, "toString", (function() { return "function" == typeof this && e(this).source || R(this) })) })),
        rt = o,
        ot = function(t) { return "function" == typeof t ? t : void 0 },
        at = function(t, e) { return arguments.length < 2 ? ot(rt[t]) || ot(o[t]) : rt[t] && rt[t][e] || o[t] && o[t][e] },
        st = Math.ceil,
        lt = Math.floor,
        ct = function(t) { return isNaN(t = +t) ? 0 : (t > 0 ? lt : st)(t) },
        ut = Math.min,
        ft = function(t) { return t > 0 ? ut(ct(t), 9007199254740991) : 0 },
        dt = Math.max,
        ht = Math.min,
        gt = function(t, e) { var n = ct(t); return n < 0 ? dt(n + e, 0) : ht(n, e) },
        pt = function(t) { return function(e, n, i) { var r, o = y(e),
                    a = ft(o.length),
                    s = gt(i, a); if (t && n != n) { for (; a > s;)
                        if ((r = o[s++]) != r) return !0 } else
                    for (; a > s; s++)
                        if ((t || s in o) && o[s] === n) return t || s || 0; return !t && -1 } },
        vt = { includes: pt(!0), indexOf: pt(!1) },
        mt = vt.indexOf,
        yt = function(t, e) { var n, i = y(t),
                r = 0,
                o = []; for (n in i) !w(G, n) && w(i, n) && o.push(n); for (; e.length > r;) w(i, n = e[r++]) && (~mt(o, n) || o.push(n)); return o },
        xt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        bt = xt.concat("length", "prototype"),
        $t = { f: Object.getOwnPropertyNames || function(t) { return yt(t, bt) } },
        wt = { f: Object.getOwnPropertySymbols },
        _t = at("Reflect", "ownKeys") || function(t) { var e = $t.f(C(t)),
                n = wt.f; return n ? e.concat(n(t)) : e },
        kt = function(t, e) { for (var n = _t(e), i = O.f, r = D.f, o = 0; o < n.length; o++) { var a = n[o];
                w(t, a) || i(t, a, r(e, a)) } },
        Mt = /#|\.prototype\./,
        St = function(t, e) { var n = Dt[At(t)]; return n == Et || n != Ct && ("function" == typeof e ? a(e) : !!e) },
        At = St.normalize = function(t) { return String(t).replace(Mt, ".").toLowerCase() },
        Dt = St.data = {},
        Ct = St.NATIVE = "N",
        Et = St.POLYFILL = "P",
        Ot = St,
        Tt = D.f,
        Pt = function(t, e) { var n, i, r, a, s, l = t.target,
                c = t.global,
                u = t.stat; if (n = c ? o : u ? o[l] || P(l, {}) : (o[l] || {}).prototype)
                for (i in e) { if (a = e[i], r = t.noTargetGet ? (s = Tt(n, i)) && s.value : n[i], !Ot(c ? i : l + (u ? "." : "#") + i, t.forced) && void 0 !== r) { if (typeof a == typeof r) continue;
                        kt(a, r) }(t.sham || r && r.sham) && T(a, "sham", !0), it(n, i, a, t) } },
        Bt = function(t) { if ("function" != typeof t) throw TypeError(String(t) + " is not a function"); return t },
        Lt = function(t, e, n) { if (Bt(t), void 0 === e) return t; switch (n) {
                case 0:
                    return function() { return t.call(e) };
                case 1:
                    return function(n) { return t.call(e, n) };
                case 2:
                    return function(n, i) { return t.call(e, n, i) };
                case 3:
                    return function(n, i, r) { return t.call(e, n, i, r) } } return function() { return t.apply(e, arguments) } },
        zt = function(t) { return Object(m(t)) },
        Yt = Array.isArray || function(t) { return "Array" == g(t) },
        Ft = !!Object.getOwnPropertySymbols && !a((function() { return !String(Symbol()) })),
        Wt = Ft && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Rt = j("wks"),
        Nt = o.Symbol,
        Ht = Wt ? Nt : Nt && Nt.withoutSetter || U,
        jt = function(t) { return w(Rt, t) || (Ft && w(Nt, t) ? Rt[t] = Nt[t] : Rt[t] = Ht("Symbol." + t)), Rt[t] },
        It = jt("species"),
        Vt = function(t, e) { var n; return Yt(t) && ("function" != typeof(n = t.constructor) || n !== Array && !Yt(n.prototype) ? x(n) && null === (n = n[It]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === e ? 0 : e) },
        Ut = [].push,
        Xt = function(t) { var e = 1 == t,
                n = 2 == t,
                i = 3 == t,
                r = 4 == t,
                o = 6 == t,
                a = 5 == t || o; return function(s, l, c, u) { for (var f, d, h = zt(s), g = v(h), p = Lt(l, c, 3), m = ft(g.length), y = 0, x = u || Vt, b = e ? x(s, m) : n ? x(s, 0) : void 0; m > y; y++)
                    if ((a || y in g) && (d = p(f = g[y], y, h), t))
                        if (e) b[y] = d;
                        else if (d) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return f;
                    case 6:
                        return y;
                    case 2:
                        Ut.call(b, f) } else if (r) return !1; return o ? -1 : i || r ? r : b } },
        qt = { forEach: Xt(0), map: Xt(1), filter: Xt(2), some: Xt(3), every: Xt(4), find: Xt(5), findIndex: Xt(6) },
        Gt = function(t, e) { var n = [][t]; return !!n && a((function() { n.call(null, e || function() { throw 1 }, 1) })) },
        Zt = Object.defineProperty,
        Qt = {},
        Kt = function(t) { throw t },
        Jt = function(t, e) { if (w(Qt, t)) return Qt[t];
            e || (e = {}); var n = [][t],
                i = !!w(e, "ACCESSORS") && e.ACCESSORS,
                r = w(e, 0) ? e[0] : Kt,
                o = w(e, 1) ? e[1] : void 0; return Qt[t] = !!n && !a((function() { if (i && !s) return !0; var t = { length: -1 };
                i ? Zt(t, 1, { enumerable: !0, get: Kt }) : t[1] = 1, n.call(t, r, o) })) },
        te = qt.forEach,
        ee = Gt("forEach"),
        ne = Jt("forEach"),
        ie = ee && ne ? [].forEach : function(t) { return te(this, t, arguments.length > 1 ? arguments[1] : void 0) };
    Pt({ target: "Array", proto: !0, forced: [].forEach != ie }, { forEach: ie }); var re, oe = jt("match"),
        ae = function(t) { var e; return x(t) && (void 0 !== (e = t[oe]) ? !!e : "RegExp" == g(t)) },
        se = function(t) { if (ae(t)) throw TypeError("The method doesn't accept regular expressions"); return t },
        le = jt("match"),
        ce = function(t) { var e = /./; try { "/./" [t](e) } catch (n) { try { return e[le] = !1, "/./" [t](e) } catch (t) {} } return !1 },
        ue = D.f,
        fe = "".startsWith,
        de = Math.min,
        he = ce("startsWith"),
        ge = !(he || (re = ue(String.prototype, "startsWith"), !re || re.writable));
    Pt({ target: "String", proto: !0, forced: !ge && !he }, { startsWith: function(t) { var e = String(m(this));
            se(t); var n = ft(de(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                i = String(t); return fe ? fe.call(e, i, n) : e.slice(n, n + i.length) === i } }); var pe = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 }; for (var ve in pe) { var me = o[ve],
            ye = me && me.prototype; if (ye && ye.forEach !== ie) try { T(ye, "forEach", ie) } catch (t) { ye.forEach = ie } }

    function xe(t) { return xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, xe(t) }

    function be(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

    function $e(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } }

    function we(t, e, n) { return e && $e(t.prototype, e), n && $e(t, n), t }

    function _e(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

    function ke() { return ke = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t }, ke.apply(this, arguments) }

    function Me(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, i) } return n }

    function Se(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Me(Object(n), !0).forEach((function(e) { _e(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Me(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

    function Ae(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && Ce(t, e) }

    function De(t) { return De = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) }, De(t) }

    function Ce(t, e) { return Ce = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t }, Ce(t, e) }

    function Ee(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

    function Oe(t, e) { return !e || "object" != typeof e && "function" != typeof e ? Ee(t) : e }

    function Te(t) { var e = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, i = De(t); if (e) { var r = De(this).constructor;
                n = Reflect.construct(i, arguments, r) } else n = i.apply(this, arguments); return Oe(this, n) } }

    function Pe(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                i = !0,
                r = !1,
                o = void 0; try { for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0); } catch (t) { r = !0, o = t } finally { try { i || null == s.return || s.return() } finally { if (r) throw o } } return n }(t, e) || Le(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

    function Be(t) { return function(t) { if (Array.isArray(t)) return ze(t) }(t) || function(t) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || Le(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

    function Le(t, e) { if (t) { if ("string" == typeof t) return ze(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ze(t, e) : void 0 } }

    function ze(t, e) {
        (null == e || e > t.length) && (e = t.length); for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n]; return i }

    function Ye(t, e) { var n; if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) { if (Array.isArray(t) || (n = Le(t)) || e && t && "number" == typeof t.length) { n && (t = n); var i = 0,
                    r = function() {}; return { s: r, n: function() { return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] } }, e: function(t) { throw t }, f: r } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var o, a = !0,
            s = !1; return { s: function() { n = t[Symbol.iterator]() }, n: function() { var t = n.next(); return a = t.done, t }, e: function(t) { s = !0, o = t }, f: function() { try { a || null == n.return || n.return() } finally { if (s) throw o } } } } var Fe, We = Object.setPrototypeOf || ("__proto__" in {} ? function() { var t, e = !1,
                n = {}; try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array } catch (t) {} return function(n, i) { return C(n),
                    function(t) { if (!x(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype") }(i), e ? t.call(n, i) : n.__proto__ = i, n } }() : void 0),
        Re = function(t, e, n) { var i, r; return We && "function" == typeof(i = e.constructor) && i !== n && x(r = i.prototype) && r !== n.prototype && We(t, r), t },
        Ne = Object.keys || function(t) { return yt(t, xt) },
        He = s ? Object.defineProperties : function(t, e) { C(t); for (var n, i = Ne(e), r = i.length, o = 0; r > o;) O.f(t, n = i[o++], e[n]); return t },
        je = at("document", "documentElement"),
        Ie = q("IE_PROTO"),
        Ve = function() {},
        Ue = function(t) { return "<script>" + t + "</" + "script>" },
        Xe = function() { try { Fe = document.domain && new ActiveXObject("htmlfile") } catch (t) {} var t, e;
            Xe = Fe ? function(t) { t.write(Ue("")), t.close(); var e = t.parentWindow.Object; return t = null, e }(Fe) : ((e = M("iframe")).style.display = "none", je.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(Ue("document.F=Object")), t.close(), t.F); for (var n = xt.length; n--;) delete Xe.prototype[xt[n]]; return Xe() };
    G[Ie] = !0; var qe = Object.create || function(t, e) { var n; return null !== t ? (Ve.prototype = C(t), n = new Ve, Ve.prototype = null, n[Ie] = t) : n = Xe(), void 0 === e ? n : He(n, e) },
        Ge = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        Ze = "[" + Ge + "]",
        Qe = RegExp("^" + Ze + Ze + "*"),
        Ke = RegExp(Ze + Ze + "*$"),
        Je = function(t) { return function(e) { var n = String(m(e)); return 1 & t && (n = n.replace(Qe, "")), 2 & t && (n = n.replace(Ke, "")), n } },
        tn = { start: Je(1), end: Je(2), trim: Je(3) },
        en = $t.f,
        nn = D.f,
        rn = O.f,
        on = tn.trim,
        an = "Number",
        sn = o.Number,
        ln = sn.prototype,
        cn = g(qe(ln)) == an,
        un = function(t) { var e, n, i, r, o, a, s, l, c = b(t, !1); if ("string" == typeof c && c.length > 2)
                if (43 === (e = (c = on(c)).charCodeAt(0)) || 45 === e) { if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN } else if (48 === e) { switch (c.charCodeAt(1)) {
                    case 66:
                    case 98:
                        i = 2, r = 49; break;
                    case 79:
                    case 111:
                        i = 8, r = 55; break;
                    default:
                        return +c } for (a = (o = c.slice(2)).length, s = 0; s < a; s++)
                    if ((l = o.charCodeAt(s)) < 48 || l > r) return NaN; return parseInt(o, i) } return +c }; if (Ot(an, !sn(" 0o1") || !sn("0b1") || sn("+0x1"))) { for (var fn, dn = function(t) { var e = arguments.length < 1 ? 0 : t,
                    n = this; return n instanceof dn && (cn ? a((function() { ln.valueOf.call(n) })) : g(n) != an) ? Re(new sn(un(e)), n, dn) : un(e) }, hn = s ? en(sn) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), gn = 0; hn.length > gn; gn++) w(sn, fn = hn[gn]) && !w(dn, fn) && rn(dn, fn, nn(sn, fn));
        dn.prototype = ln, ln.constructor = dn, it(o, an, dn) } var pn, vn, mn = at("navigator", "userAgent") || "",
        yn = o.process,
        xn = yn && yn.versions,
        bn = xn && xn.v8;
    bn ? vn = (pn = bn.split("."))[0] + pn[1] : mn && (!(pn = mn.match(/Edge\/(\d+)/)) || pn[1] >= 74) && (pn = mn.match(/Chrome\/(\d+)/)) && (vn = pn[1]); var $n = vn && +vn,
        wn = jt("species"),
        _n = function(t) { return $n >= 51 || !a((function() { var e = []; return (e.constructor = {})[wn] = function() { return { foo: 1 } }, 1 !== e[t](Boolean).foo })) },
        kn = qt.filter,
        Mn = _n("filter"),
        Sn = Jt("filter");
    Pt({ target: "Array", proto: !0, forced: !Mn || !Sn }, { filter: function(t) { return kn(this, t, arguments.length > 1 ? arguments[1] : void 0) } }); var An = function(t) { var e = t.return; if (void 0 !== e) return C(e.call(t)).value },
        Dn = function(t, e, n, i) { try { return i ? e(C(n)[0], n[1]) : e(n) } catch (e) { throw An(t), e } },
        Cn = {},
        En = jt("iterator"),
        On = Array.prototype,
        Tn = function(t) { return void 0 !== t && (Cn.Array === t || On[En] === t) },
        Pn = function(t, e, n) { var i = b(e);
            i in t ? O.f(t, i, d(0, n)) : t[i] = n },
        Bn = {};
    Bn[jt("toStringTag")] = "z"; var Ln = "[object z]" === String(Bn),
        zn = jt("toStringTag"),
        Yn = "Arguments" == g(function() { return arguments }()),
        Fn = Ln ? g : function(t) { var e, n, i; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) { try { return t[e] } catch (t) {} }(e = Object(t), zn)) ? n : Yn ? g(e) : "Object" == (i = g(e)) && "function" == typeof e.callee ? "Arguments" : i },
        Wn = jt("iterator"),
        Rn = function(t) { if (null != t) return t[Wn] || t["@@iterator"] || Cn[Fn(t)] },
        Nn = jt("iterator"),
        Hn = !1; try { var jn = 0,
            In = { next: function() { return { done: !!jn++ } }, return: function() { Hn = !0 } };
        In[Nn] = function() { return this }, Array.from(In, (function() { throw 2 })) } catch (t) {} var Vn = function(t, e) { if (!e && !Hn) return !1; var n = !1; try { var i = {};
                i[Nn] = function() { return { next: function() { return { done: n = !0 } } } }, t(i) } catch (t) {} return n },
        Un = !Vn((function(t) { Array.from(t) }));
    Pt({ target: "Array", stat: !0, forced: Un }, { from: function(t) { var e, n, i, r, o, a, s = zt(t),
                l = "function" == typeof this ? this : Array,
                c = arguments.length,
                u = c > 1 ? arguments[1] : void 0,
                f = void 0 !== u,
                d = Rn(s),
                h = 0; if (f && (u = Lt(u, c > 2 ? arguments[2] : void 0, 2)), null == d || l == Array && Tn(d))
                for (n = new l(e = ft(s.length)); e > h; h++) a = f ? u(s[h], h) : s[h], Pn(n, h, a);
            else
                for (o = (r = d.call(s)).next, n = new l; !(i = o.call(r)).done; h++) a = f ? Dn(r, u, [i.value, h], !0) : i.value, Pn(n, h, a); return n.length = h, n } }); var Xn = vt.indexOf,
        qn = [].indexOf,
        Gn = !!qn && 1 / [1].indexOf(1, -0) < 0,
        Zn = Gt("indexOf"),
        Qn = Jt("indexOf", { ACCESSORS: !0, 1: 0 });
    Pt({ target: "Array", proto: !0, forced: Gn || !Zn || !Qn }, { indexOf: function(t) { return Gn ? qn.apply(this, arguments) || 0 : Xn(this, t, arguments.length > 1 ? arguments[1] : void 0) } }); var Kn = qt.map,
        Jn = _n("map"),
        ti = Jt("map");
    Pt({ target: "Array", proto: !0, forced: !Jn || !ti }, { map: function(t) { return Kn(this, t, arguments.length > 1 ? arguments[1] : void 0) } }); var ei = _n("slice"),
        ni = Jt("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
        ii = jt("species"),
        ri = [].slice,
        oi = Math.max;
    Pt({ target: "Array", proto: !0, forced: !ei || !ni }, { slice: function(t, e) { var n, i, r, o = y(this),
                a = ft(o.length),
                s = gt(t, a),
                l = gt(void 0 === e ? a : e, a); if (Yt(o) && ("function" != typeof(n = o.constructor) || n !== Array && !Yt(n.prototype) ? x(n) && null === (n = n[ii]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return ri.call(o, s, l); for (i = new(void 0 === n ? Array : n)(oi(l - s, 0)), r = 0; s < l; s++, r++) s in o && Pn(i, r, o[s]); return i.length = r, i } }); var ai = O.f,
        si = Function.prototype,
        li = si.toString,
        ci = /^\s*function ([^ (]*)/,
        ui = "name";
    s && !(ui in si) && ai(si, ui, { configurable: !0, get: function() { try { return li.call(this).match(ci)[1] } catch (t) { return "" } } }); var fi = function() { var t = C(this),
            e = ""; return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e };

    function di(t, e) { return RegExp(t, e) } var hi = a((function() { var t = di("a", "y"); return t.lastIndex = 2, null != t.exec("abcd") })),
        gi = a((function() { var t = di("^r", "gy"); return t.lastIndex = 2, null != t.exec("str") })),
        pi = { UNSUPPORTED_Y: hi, BROKEN_CARET: gi },
        vi = RegExp.prototype.exec,
        mi = String.prototype.replace,
        yi = vi,
        xi = function() { var t = /a/,
                e = /b*/g; return vi.call(t, "a"), vi.call(e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex }(),
        bi = pi.UNSUPPORTED_Y || pi.BROKEN_CARET,
        $i = void 0 !== /()??/.exec("")[1];
    (xi || $i || bi) && (yi = function(t) { var e, n, i, r, o = this,
            a = bi && o.sticky,
            s = fi.call(o),
            l = o.source,
            c = 0,
            u = t; return a && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), u = String(t).slice(o.lastIndex), o.lastIndex > 0 && (!o.multiline || o.multiline && "\n" !== t[o.lastIndex - 1]) && (l = "(?: " + l + ")", u = " " + u, c++), n = new RegExp("^(?:" + l + ")", s)), $i && (n = new RegExp("^" + l + "$(?!\\s)", s)), xi && (e = o.lastIndex), i = vi.call(a ? n : o, u), a ? i ? (i.input = i.input.slice(c), i[0] = i[0].slice(c), i.index = o.lastIndex, o.lastIndex += i[0].length) : o.lastIndex = 0 : xi && i && (o.lastIndex = o.global ? i.index + i[0].length : e), $i && i && i.length > 1 && mi.call(i[0], n, (function() { for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (i[r] = void 0) })), i }); var wi = yi;
    Pt({ target: "RegExp", proto: !0, forced: /./.exec !== wi }, { exec: wi }); var _i, ki, Mi, Si = function(t) { return function(e, n) { var i, r, o = String(m(e)),
                    a = ct(n),
                    s = o.length; return a < 0 || a >= s ? t ? "" : void 0 : (i = o.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === s || (r = o.charCodeAt(a + 1)) < 56320 || r > 57343 ? t ? o.charAt(a) : i : t ? o.slice(a, a + 2) : r - 56320 + (i - 55296 << 10) + 65536 } },
        Ai = { codeAt: Si(!1), charAt: Si(!0) },
        Di = !a((function() {
            function t() {} return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype })),
        Ci = q("IE_PROTO"),
        Ei = Object.prototype,
        Oi = Di ? Object.getPrototypeOf : function(t) { return t = zt(t), w(t, Ci) ? t[Ci] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Ei : null },
        Ti = jt("iterator"),
        Pi = !1;
    [].keys && ("next" in (Mi = [].keys()) ? (ki = Oi(Oi(Mi))) !== Object.prototype && (_i = ki) : Pi = !0), null == _i && (_i = {}), w(_i, Ti) || T(_i, Ti, (function() { return this })); var Bi = { IteratorPrototype: _i, BUGGY_SAFARI_ITERATORS: Pi },
        Li = O.f,
        zi = jt("toStringTag"),
        Yi = function(t, e, n) { t && !w(t = n ? t : t.prototype, zi) && Li(t, zi, { configurable: !0, value: e }) },
        Fi = Bi.IteratorPrototype,
        Wi = function() { return this },
        Ri = Bi.IteratorPrototype,
        Ni = Bi.BUGGY_SAFARI_ITERATORS,
        Hi = jt("iterator"),
        ji = "keys",
        Ii = "values",
        Vi = "entries",
        Ui = function() { return this },
        Xi = function(t, e, n, i, r, o, a) {! function(t, e, n) { var i = e + " Iterator";
                t.prototype = qe(Fi, { next: d(1, n) }), Yi(t, i, !1), Cn[i] = Wi }(n, e, i); var s, l, c, u = function(t) { if (t === r && v) return v; if (!Ni && t in g) return g[t]; switch (t) {
                        case ji:
                        case Ii:
                        case Vi:
                            return function() { return new n(this, t) } } return function() { return new n(this) } },
                f = e + " Iterator",
                h = !1,
                g = t.prototype,
                p = g[Hi] || g["@@iterator"] || r && g[r],
                v = !Ni && p || u(r),
                m = "Array" == e && g.entries || p; if (m && (s = Oi(m.call(new t)), Ri !== Object.prototype && s.next && (Oi(s) !== Ri && (We ? We(s, Ri) : "function" != typeof s[Hi] && T(s, Hi, Ui)), Yi(s, f, !0))), r == Ii && p && p.name !== Ii && (h = !0, v = function() { return p.call(this) }), g[Hi] !== v && T(g, Hi, v), Cn[e] = v, r)
                if (l = { values: u(Ii), keys: o ? v : u(ji), entries: u(Vi) }, a)
                    for (c in l)(Ni || h || !(c in g)) && it(g, c, l[c]);
                else Pt({ target: e, proto: !0, forced: Ni || h }, l); return l },
        qi = Ai.charAt,
        Gi = "String Iterator",
        Zi = nt.set,
        Qi = nt.getterFor(Gi);
    Xi(String, "String", (function(t) { Zi(this, { type: Gi, string: String(t), index: 0 }) }), (function() { var t, e = Qi(this),
            n = e.string,
            i = e.index; return i >= n.length ? { value: void 0, done: !0 } : (t = qi(n, i), e.index += t.length, { value: t, done: !1 }) })); var Ki = jt("species"),
        Ji = !a((function() { var t = /./; return t.exec = function() { var t = []; return t.groups = { a: "7" }, t }, "7" !== "".replace(t, "$<a>") })),
        tr = "$0" === "a".replace(/./, "$0"),
        er = jt("replace"),
        nr = !!/./ [er] && "" === /./ [er]("a", "$0"),
        ir = !a((function() { var t = /(?:)/,
                e = t.exec;
            t.exec = function() { return e.apply(this, arguments) }; var n = "ab".split(t); return 2 !== n.length || "a" !== n[0] || "b" !== n[1] })),
        rr = function(t, e, n, i) { var r = jt(t),
                o = !a((function() { var e = {}; return e[r] = function() { return 7 }, 7 != "" [t](e) })),
                s = o && !a((function() { var e = !1,
                        n = /a/; return "split" === t && ((n = {}).constructor = {}, n.constructor[Ki] = function() { return n }, n.flags = "", n[r] = /./ [r]), n.exec = function() { return e = !0, null }, n[r](""), !e })); if (!o || !s || "replace" === t && (!Ji || !tr || nr) || "split" === t && !ir) { var l = /./ [r],
                    c = n(r, "" [t], (function(t, e, n, i, r) { return e.exec === wi ? o && !r ? { done: !0, value: l.call(e, n, i) } : { done: !0, value: t.call(n, e, i) } : { done: !1 } }), { REPLACE_KEEPS_$0: tr, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: nr }),
                    u = c[0],
                    f = c[1];
                it(String.prototype, t, u), it(RegExp.prototype, r, 2 == e ? function(t, e) { return f.call(t, this, e) } : function(t) { return f.call(t, this) }) } i && T(RegExp.prototype[r], "sham", !0) },
        or = jt("species"),
        ar = function(t, e) { var n, i = C(t).constructor; return void 0 === i || null == (n = C(i)[or]) ? e : Bt(n) },
        sr = Ai.charAt,
        lr = function(t, e, n) { return e + (n ? sr(t, e).length : 1) },
        cr = function(t, e) { var n = t.exec; if ("function" == typeof n) { var i = n.call(t, e); if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null"); return i } if ("RegExp" !== g(t)) throw TypeError("RegExp#exec called on incompatible receiver"); return wi.call(t, e) },
        ur = [].push,
        fr = Math.min,
        dr = 4294967295,
        hr = !a((function() { return !RegExp(dr, "y") }));
    rr("split", 2, (function(t, e, n) { var i; return i = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, n) { var i = String(m(this)),
                r = void 0 === n ? dr : n >>> 0; if (0 === r) return []; if (void 0 === t) return [i]; if (!ae(t)) return e.call(i, t, r); for (var o, a, s, l = [], c = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), u = 0, f = new RegExp(t.source, c + "g");
                (o = wi.call(f, i)) && !((a = f.lastIndex) > u && (l.push(i.slice(u, o.index)), o.length > 1 && o.index < i.length && ur.apply(l, o.slice(1)), s = o[0].length, u = a, l.length >= r));) f.lastIndex === o.index && f.lastIndex++; return u === i.length ? !s && f.test("") || l.push("") : l.push(i.slice(u)), l.length > r ? l.slice(0, r) : l } : "0".split(void 0, 0).length ? function(t, n) { return void 0 === t && 0 === n ? [] : e.call(this, t, n) } : e, [function(e, n) { var r = m(this),
                o = null == e ? void 0 : e[t]; return void 0 !== o ? o.call(e, r, n) : i.call(String(r), e, n) }, function(t, r) { var o = n(i, t, this, r, i !== e); if (o.done) return o.value; var a = C(t),
                s = String(this),
                l = ar(a, RegExp),
                c = a.unicode,
                u = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (hr ? "y" : "g"),
                f = new l(hr ? a : "^(?:" + a.source + ")", u),
                d = void 0 === r ? dr : r >>> 0; if (0 === d) return []; if (0 === s.length) return null === cr(f, s) ? [s] : []; for (var h = 0, g = 0, p = []; g < s.length;) { f.lastIndex = hr ? g : 0; var v, m = cr(f, hr ? s : s.slice(g)); if (null === m || (v = fr(ft(f.lastIndex + (hr ? 0 : g)), s.length)) === h) g = lr(s, g, c);
                else { if (p.push(s.slice(h, g)), p.length === d) return p; for (var y = 1; y <= m.length - 1; y++)
                        if (p.push(m[y]), p.length === d) return p;
                    g = h = v } } return p.push(s.slice(h)), p }] }), !hr); var gr = tn.trim;
    Pt({ target: "String", proto: !0, forced: function(t) { return a((function() { return !!Ge[t]() || "​᠎" != "​᠎" [t]() || Ge[t].name !== t })) }("trim") }, { trim: function() { return gr(this) } }); var pr = Math.min,
        vr = [].lastIndexOf,
        mr = !!vr && 1 / [1].lastIndexOf(1, -0) < 0,
        yr = Gt("lastIndexOf"),
        xr = Jt("indexOf", { ACCESSORS: !0, 1: 0 }),
        br = mr || !yr || !xr ? function(t) { if (mr) return vr.apply(this, arguments) || 0; var e = y(this),
                n = ft(e.length),
                i = n - 1; for (arguments.length > 1 && (i = pr(i, ct(arguments[1]))), i < 0 && (i = n + i); i >= 0; i--)
                if (i in e && e[i] === t) return i || 0; return -1 } : vr;
    Pt({ target: "Array", proto: !0, forced: br !== [].lastIndexOf }, { lastIndexOf: br }); var $r = function(t) { return function(e, n, i, r) { Bt(n); var o = zt(e),
                    a = v(o),
                    s = ft(o.length),
                    l = t ? s - 1 : 0,
                    c = t ? -1 : 1; if (i < 2)
                    for (;;) { if (l in a) { r = a[l], l += c; break } if (l += c, t ? l < 0 : s <= l) throw TypeError("Reduce of empty array with no initial value") }
                for (; t ? l >= 0 : s > l; l += c) l in a && (r = n(r, a[l], l, o)); return r } },
        wr = { left: $r(!1), right: $r(!0) },
        _r = "process" == g(o.process),
        kr = wr.left,
        Mr = Gt("reduce"),
        Sr = Jt("reduce", { 1: 0 });
    Pt({ target: "Array", proto: !0, forced: !Mr || !Sr || !_r && $n > 79 && $n < 83 }, { reduce: function(t) { return kr(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0) } }); var Ar = Ln ? {}.toString : function() { return "[object " + Fn(this) + "]" };
    Ln || it(Object.prototype, "toString", Ar, { unsafe: !0 }); var Dr = "toString",
        Cr = RegExp.prototype,
        Er = Cr.toString,
        Or = a((function() { return "/a/b" != Er.call({ source: "a", flags: "b" }) })),
        Tr = Er.name != Dr;
    (Or || Tr) && it(RegExp.prototype, Dr, (function() { var t = C(this),
            e = String(t.source),
            n = t.flags; return "/" + e + "/" + String(void 0 === n && t instanceof RegExp && !("flags" in Cr) ? fi.call(t) : n) }), { unsafe: !0 }); var Pr = Math.max,
        Br = Math.min,
        Lr = Math.floor,
        zr = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        Yr = /\$([$&'`]|\d\d?)/g;

    function Fr(t) { if (null === t) return null; var e = Number(t); return isNaN(e) ? null : e }

    function Wr(t) { return t.replace(/_([a-z])/g, (function(t) { return t[1].toUpperCase() })) }

    function Rr(t) { return null == t || "null" === t || "na" === t || "n/a" === t || "" === t ? null : t }

    function Nr(t, e, n) { for (var i, r, o = e || 0; o < t.length; o++)
            if (null != Rr(t[o])) { i = t[o], r = o; break } return n ? [r, i] : i }

    function Hr(t, e, n) { var i, r; if (0 === e) return [null, null]; for (var o = e || t.length - 1; o >= 0; o--)
            if (null != Rr(t[o])) { i = t[o], r = o; break } return n ? [r, i] : i }

    function jr(t) { return !isNaN(t) && null != t }

    function Ir(t) { var e = t.reduce((function(t, e) { return null == e ? t : e > 0 ? t + e : t }), 0); return 0 === e && (e = t.reduce((function(t, e) { return null == e || e > 0 ? t : t + e }), 0)), e }

    function Vr(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }

    function Ur(t, e, n, i) { var r = Xr(e + "");
        qr(t).forEach((function(t) { r.forEach((function(e) {! function(t, e, n, i) { var r = t.__on; if (r)
                        for (var o = 0; o < r.length; o++) { var a = r[o]; if (a.type === e.type && a.name === e.name) return t.removeEventListener(a.type, a.listener, a.capture), t.addEventListener(a.type, n, i), void ke(a, { listener: n, capture: i }) } t.addEventListener(e.type, n, i); var s = { type: e.type, name: e.name, value: n, listener: n, capture: i };
                    r ? r.push(s) : t.__on = [s] }(t, e, n, i) })) })) }

    function Xr(t) { return t.trim().split(/^|\s+/).map((function(t) { var e = "",
                n = t.indexOf("."); return n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), { type: t, name: e } })) }

    function qr(t) { return t.nodes ? t.nodes() : function(t, e) { return Object.prototype.isPrototypeOf.call(t, e) }(t, window.NodeList) ? Array.from(t) : Array.isArray(t) ? t : [t] } rr("replace", 2, (function(t, e, n, i) { var r = i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            o = i.REPLACE_KEEPS_$0,
            a = r ? "$" : "$0"; return [function(n, i) { var r = m(this),
                o = null == n ? void 0 : n[t]; return void 0 !== o ? o.call(n, r, i) : e.call(String(r), n, i) }, function(t, i) { if (!r && o || "string" == typeof i && -1 === i.indexOf(a)) { var l = n(e, t, this, i); if (l.done) return l.value } var c = C(t),
                u = String(this),
                f = "function" == typeof i;
            f || (i = String(i)); var d = c.global; if (d) { var h = c.unicode;
                c.lastIndex = 0 } for (var g = [];;) { var p = cr(c, u); if (null === p) break; if (g.push(p), !d) break; "" === String(p[0]) && (c.lastIndex = lr(u, ft(c.lastIndex), h)) } for (var v, m = "", y = 0, x = 0; x < g.length; x++) { p = g[x]; for (var b = String(p[0]), $ = Pr(Br(ct(p.index), u.length), 0), w = [], _ = 1; _ < p.length; _++) w.push(void 0 === (v = p[_]) ? v : String(v)); var k = p.groups; if (f) { var M = [b].concat(w, $, u);
                    void 0 !== k && M.push(k); var S = String(i.apply(void 0, M)) } else S = s(b, u, $, w, k, i);
                $ >= y && (m += u.slice(y, $) + S, y = $ + b.length) } return m + u.slice(y) }];

        function s(t, n, i, r, o, a) { var s = i + t.length,
                l = r.length,
                c = Yr; return void 0 !== o && (o = zt(o), c = zr), e.call(a, c, (function(e, a) { var c; switch (a.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return n.slice(0, i);
                    case "'":
                        return n.slice(s);
                    case "<":
                        c = o[a.slice(1, -1)]; break;
                    default:
                        var u = +a; if (0 === u) return e; if (u > l) { var f = Lr(u / 10); return 0 === f ? e : f <= l ? void 0 === r[f - 1] ? a.charAt(1) : r[f - 1] + a.charAt(1) : e } c = r[u - 1] } return void 0 === c ? "" : c })) } })); var Gr = jt("isConcatSpreadable"),
        Zr = 9007199254740991,
        Qr = "Maximum allowed index exceeded",
        Kr = $n >= 51 || !a((function() { var t = []; return t[Gr] = !1, t.concat()[0] !== t })),
        Jr = _n("concat"),
        to = function(t) { if (!x(t)) return !1; var e = t[Gr]; return void 0 !== e ? !!e : Yt(t) };
    Pt({ target: "Array", proto: !0, forced: !Kr || !Jr }, { concat: function(t) { var e, n, i, r, o, a = zt(this),
                s = Vt(a, 0),
                l = 0; for (e = -1, i = arguments.length; e < i; e++)
                if (to(o = -1 === e ? a : arguments[e])) { if (l + (r = ft(o.length)) > Zr) throw TypeError(Qr); for (n = 0; n < r; n++, l++) n in o && Pn(s, l, o[n]) } else { if (l >= Zr) throw TypeError(Qr);
                    Pn(s, l++, o) } return s.length = l, s } }); var eo = jt("unscopables"),
        no = Array.prototype;
    null == no[eo] && O.f(no, eo, { configurable: !0, value: qe(null) }); var io = function(t) { no[eo][t] = !0 },
        ro = qt.find,
        oo = "find",
        ao = !0,
        so = Jt(oo);
    oo in [] && Array(1).find((function() { ao = !1 })), Pt({ target: "Array", proto: !0, forced: ao || !so }, { find: function(t) { return ro(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), io(oo); var lo = vt.includes,
        co = Jt("indexOf", { ACCESSORS: !0, 1: 0 });
    Pt({ target: "Array", proto: !0, forced: !co }, { includes: function(t) { return lo(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), io("includes"); var uo = a((function() { Ne(1) }));
    Pt({ target: "Object", stat: !0, forced: uo }, { keys: function(t) { return Ne(zt(t)) } }); var fo = jt("species"),
        ho = function(t) { var e = at(t),
                n = O.f;
            s && e && !e[fo] && n(e, fo, { configurable: !0, get: function() { return this } }) },
        go = O.f,
        po = $t.f,
        vo = nt.set,
        mo = jt("match"),
        yo = o.RegExp,
        xo = yo.prototype,
        bo = /a/g,
        $o = /a/g,
        wo = new yo(bo) !== bo,
        _o = pi.UNSUPPORTED_Y; if (s && Ot("RegExp", !wo || _o || a((function() { return $o[mo] = !1, yo(bo) != bo || yo($o) == $o || "/a/i" != yo(bo, "i") })))) { for (var ko = function(t, e) { var n, i = this instanceof ko,
                    r = ae(t),
                    o = void 0 === e; if (!i && r && t.constructor === ko && o) return t;
                wo ? r && !o && (t = t.source) : t instanceof ko && (o && (e = fi.call(t)), t = t.source), _o && (n = !!e && e.indexOf("y") > -1) && (e = e.replace(/y/g, "")); var a = Re(wo ? new yo(t, e) : yo(t, e), i ? this : xo, ko); return _o && n && vo(a, { sticky: n }), a }, Mo = function(t) { t in ko || go(ko, t, { configurable: !0, get: function() { return yo[t] }, set: function(e) { yo[t] = e } }) }, So = po(yo), Ao = 0; So.length > Ao;) Mo(So[Ao++]);
        xo.constructor = ko, ko.prototype = xo, it(o, "RegExp", ko) } ho("RegExp"), Pt({ target: "String", proto: !0, forced: !ce("includes") }, { includes: function(t) { return !!~String(m(this)).indexOf(se(t), arguments.length > 1 ? arguments[1] : void 0) } }); var Do = Object.is || function(t, e) { return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e };

    function Co(t, e) { return t === e || t != t && e != e }

    function Eo(t, e) { for (var n = t.length; n--;)
            if (Co(t[n][0], e)) return n; return -1 } rr("search", 1, (function(t, e, n) { return [function(e) { var n = m(this),
                i = null == e ? void 0 : e[t]; return void 0 !== i ? i.call(e, n) : new RegExp(e)[t](String(n)) }, function(t) { var i = n(e, t, this); if (i.done) return i.value; var r = C(t),
                o = String(this),
                a = r.lastIndex;
            Do(a, 0) || (r.lastIndex = 0); var s = cr(r, o); return Do(r.lastIndex, a) || (r.lastIndex = a), null === s ? -1 : s.index }] })); var Oo = Array.prototype.splice;

    function To(t) { var e = -1,
            n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var i = t[e];
            this.set(i[0], i[1]) } } To.prototype.clear = function() { this.__data__ = [], this.size = 0 }, To.prototype.delete = function(t) { var e = this.__data__,
            n = Eo(e, t); return !(n < 0) && (n == e.length - 1 ? e.pop() : Oo.call(e, n, 1), --this.size, !0) }, To.prototype.get = function(t) { var e = this.__data__,
            n = Eo(e, t); return n < 0 ? void 0 : e[n][1] }, To.prototype.has = function(t) { return Eo(this.__data__, t) > -1 }, To.prototype.set = function(t, e) { var n = this.__data__,
            i = Eo(n, t); return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this }; var Po = "object" == typeof global && global && global.Object === Object && global,
        Bo = "object" == typeof self && self && self.Object === Object && self,
        Lo = Po || Bo || Function("return this")(),
        zo = Lo.Symbol,
        Yo = Object.prototype,
        Fo = Yo.hasOwnProperty,
        Wo = Yo.toString,
        Ro = zo ? zo.toStringTag : void 0; var No = Object.prototype.toString; var Ho = zo ? zo.toStringTag : void 0;

    function jo(t) { return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : Ho && Ho in Object(t) ? function(t) { var e = Fo.call(t, Ro),
                n = t[Ro]; try { t[Ro] = void 0; var i = !0 } catch (t) {} var r = Wo.call(t); return i && (e ? t[Ro] = n : delete t[Ro]), r }(t) : function(t) { return No.call(t) }(t) }

    function Io(t) { var e = typeof t; return null != t && ("object" == e || "function" == e) }

    function Vo(t) { if (!Io(t)) return !1; var e = jo(t); return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e } var Uo = Lo["__core-js_shared__"],
        Xo = function() { var t = /[^.]+$/.exec(Uo && Uo.keys && Uo.keys.IE_PROTO || ""); return t ? "Symbol(src)_1." + t : "" }(); var qo = Function.prototype.toString;

    function Go(t) { if (null != t) { try { return qo.call(t) } catch (t) {} try { return t + "" } catch (t) {} } return "" } var Zo = /^\[object .+?Constructor\]$/,
        Qo = Function.prototype,
        Ko = Object.prototype,
        Jo = Qo.toString,
        ta = Ko.hasOwnProperty,
        ea = RegExp("^" + Jo.call(ta).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function na(t) { return !(!Io(t) || (e = t, Xo && Xo in e)) && (Vo(t) ? ea : Zo).test(Go(t)); var e }

    function ia(t, e) { var n = function(t, e) { return null == t ? void 0 : t[e] }(t, e); return na(n) ? n : void 0 } var ra = ia(Lo, "Map"),
        oa = ia(Object, "create"); var aa = Object.prototype.hasOwnProperty; var sa = Object.prototype.hasOwnProperty;

    function la(t) { var e = -1,
            n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var i = t[e];
            this.set(i[0], i[1]) } }

    function ca(t, e) { var n, i, r = t.__data__; return ("string" == (i = typeof(n = e)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? r["string" == typeof e ? "string" : "hash"] : r.map }

    function ua(t) { var e = -1,
            n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var i = t[e];
            this.set(i[0], i[1]) } } la.prototype.clear = function() { this.__data__ = oa ? oa(null) : {}, this.size = 0 }, la.prototype.delete = function(t) { var e = this.has(t) && delete this.__data__[t]; return this.size -= e ? 1 : 0, e }, la.prototype.get = function(t) { var e = this.__data__; if (oa) { var n = e[t]; return "__lodash_hash_undefined__" === n ? void 0 : n } return aa.call(e, t) ? e[t] : void 0 }, la.prototype.has = function(t) { var e = this.__data__; return oa ? void 0 !== e[t] : sa.call(e, t) }, la.prototype.set = function(t, e) { var n = this.__data__; return this.size += this.has(t) ? 0 : 1, n[t] = oa && void 0 === e ? "__lodash_hash_undefined__" : e, this }, ua.prototype.clear = function() { this.size = 0, this.__data__ = { hash: new la, map: new(ra || To), string: new la } }, ua.prototype.delete = function(t) { var e = ca(this, t).delete(t); return this.size -= e ? 1 : 0, e }, ua.prototype.get = function(t) { return ca(this, t).get(t) }, ua.prototype.has = function(t) { return ca(this, t).has(t) }, ua.prototype.set = function(t, e) { var n = ca(this, t),
            i = n.size; return n.set(t, e), this.size += n.size == i ? 0 : 1, this };

    function fa(t) { var e = this.__data__ = new To(t);
        this.size = e.size } fa.prototype.clear = function() { this.__data__ = new To, this.size = 0 }, fa.prototype.delete = function(t) { var e = this.__data__,
            n = e.delete(t); return this.size = e.size, n }, fa.prototype.get = function(t) { return this.__data__.get(t) }, fa.prototype.has = function(t) { return this.__data__.has(t) }, fa.prototype.set = function(t, e) { var n = this.__data__; if (n instanceof To) { var i = n.__data__; if (!ra || i.length < 199) return i.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new ua(i) } return n.set(t, e), this.size = n.size, this }; var da = function() { try { var t = ia(Object, "defineProperty"); return t({}, "", {}), t } catch (t) {} }(),
        ha = da;

    function ga(t, e, n) { "__proto__" == e && ha ? ha(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : t[e] = n } var pa = Object.prototype.hasOwnProperty;

    function va(t, e, n) { var i = t[e];
        pa.call(t, e) && Co(i, n) && (void 0 !== n || e in t) || ga(t, e, n) }

    function ma(t, e, n, i) { var r = !n;
        n || (n = {}); for (var o = -1, a = e.length; ++o < a;) { var s = e[o],
                l = i ? i(n[s], t[s], s, n, t) : void 0;
            void 0 === l && (l = t[s]), r ? ga(n, s, l) : va(n, s, l) } return n }

    function ya(t) { return null != t && "object" == typeof t }

    function xa(t) { return ya(t) && "[object Arguments]" == jo(t) } var ba = Object.prototype,
        $a = ba.hasOwnProperty,
        wa = ba.propertyIsEnumerable,
        _a = xa(function() { return arguments }()) ? xa : function(t) { return ya(t) && $a.call(t, "callee") && !wa.call(t, "callee") },
        ka = _a,
        Ma = Array.isArray; var Sa = "object" == typeof t && t && !t.nodeType && t,
        Aa = Sa && "object" == typeof module && module && !module.nodeType && module,
        Da = Aa && Aa.exports === Sa ? Lo.Buffer : void 0,
        Ca = (Da ? Da.isBuffer : void 0) || function() { return !1 },
        Ea = /^(?:0|[1-9]\d*)$/;

    function Oa(t, e) { var n = typeof t; return !!(e = null == e ? 9007199254740991 : e) && ("number" == n || "symbol" != n && Ea.test(t)) && t > -1 && t % 1 == 0 && t < e }

    function Ta(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991 } var Pa = {};

    function Ba(t) { return function(e) { return t(e) } } Pa["[object Float32Array]"] = Pa["[object Float64Array]"] = Pa["[object Int8Array]"] = Pa["[object Int16Array]"] = Pa["[object Int32Array]"] = Pa["[object Uint8Array]"] = Pa["[object Uint8ClampedArray]"] = Pa["[object Uint16Array]"] = Pa["[object Uint32Array]"] = !0, Pa["[object Arguments]"] = Pa["[object Array]"] = Pa["[object ArrayBuffer]"] = Pa["[object Boolean]"] = Pa["[object DataView]"] = Pa["[object Date]"] = Pa["[object Error]"] = Pa["[object Function]"] = Pa["[object Map]"] = Pa["[object Number]"] = Pa["[object Object]"] = Pa["[object RegExp]"] = Pa["[object Set]"] = Pa["[object String]"] = Pa["[object WeakMap]"] = !1; var La = "object" == typeof t && t && !t.nodeType && t,
        za = La && "object" == typeof module && module && !module.nodeType && module,
        Ya = za && za.exports === La && Po.process,
        Fa = function() { try { var t = za && za.require && za.require("util").types; return t || Ya && Ya.binding && Ya.binding("util") } catch (t) {} }(),
        Wa = Fa && Fa.isTypedArray,
        Ra = Wa ? Ba(Wa) : function(t) { return ya(t) && Ta(t.length) && !!Pa[jo(t)] },
        Na = Object.prototype.hasOwnProperty;

    function Ha(t, e) { var n = Ma(t),
            i = !n && ka(t),
            r = !n && !i && Ca(t),
            o = !n && !i && !r && Ra(t),
            a = n || i || r || o,
            s = a ? function(t, e) { for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n); return i }(t.length, String) : [],
            l = s.length; for (var c in t) !e && !Na.call(t, c) || a && ("length" == c || r && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Oa(c, l)) || s.push(c); return s } var ja = Object.prototype;

    function Ia(t) { var e = t && t.constructor; return t === ("function" == typeof e && e.prototype || ja) }

    function Va(t, e) { return function(n) { return t(e(n)) } } var Ua = Va(Object.keys, Object),
        Xa = Object.prototype.hasOwnProperty;

    function qa(t) { return null != t && Ta(t.length) && !Vo(t) }

    function Ga(t) { return qa(t) ? Ha(t) : function(t) { if (!Ia(t)) return Ua(t); var e = []; for (var n in Object(t)) Xa.call(t, n) && "constructor" != n && e.push(n); return e }(t) } var Za = Object.prototype.hasOwnProperty;

    function Qa(t) { if (!Io(t)) return function(t) { var e = []; if (null != t)
                for (var n in Object(t)) e.push(n); return e }(t); var e = Ia(t),
            n = []; for (var i in t)("constructor" != i || !e && Za.call(t, i)) && n.push(i); return n }

    function Ka(t) { return qa(t) ? Ha(t, !0) : Qa(t) } var Ja = "object" == typeof t && t && !t.nodeType && t,
        ts = Ja && "object" == typeof module && module && !module.nodeType && module,
        es = ts && ts.exports === Ja ? Lo.Buffer : void 0,
        ns = es ? es.allocUnsafe : void 0;

    function is(t, e) { if (e) return t.slice(); var n = t.length,
            i = ns ? ns(n) : new t.constructor(n); return t.copy(i), i }

    function rs(t, e) { var n = -1,
            i = t.length; for (e || (e = Array(i)); ++n < i;) e[n] = t[n]; return e }

    function os() { return [] } var as = Object.prototype.propertyIsEnumerable,
        ss = Object.getOwnPropertySymbols,
        ls = ss ? function(t) { return null == t ? [] : (t = Object(t), function(t, e) { for (var n = -1, i = null == t ? 0 : t.length, r = 0, o = []; ++n < i;) { var a = t[n];
                    e(a, n, t) && (o[r++] = a) } return o }(ss(t), (function(e) { return as.call(t, e) }))) } : os,
        cs = ls;

    function us(t, e) { for (var n = -1, i = e.length, r = t.length; ++n < i;) t[r + n] = e[n]; return t } var fs = Va(Object.getPrototypeOf, Object),
        ds = Object.getOwnPropertySymbols ? function(t) { for (var e = []; t;) us(e, cs(t)), t = fs(t); return e } : os,
        hs = ds;

    function gs(t, e, n) { var i = e(t); return Ma(t) ? i : us(i, n(t)) }

    function ps(t) { return gs(t, Ga, cs) }

    function vs(t) { return gs(t, Ka, hs) } var ms = ia(Lo, "DataView"),
        ys = ia(Lo, "Promise"),
        xs = ia(Lo, "Set"),
        bs = ia(Lo, "WeakMap"),
        $s = "[object Map]",
        ws = "[object Promise]",
        _s = "[object Set]",
        ks = "[object WeakMap]",
        Ms = "[object DataView]",
        Ss = Go(ms),
        As = Go(ra),
        Ds = Go(ys),
        Cs = Go(xs),
        Es = Go(bs),
        Os = jo;
    (ms && Os(new ms(new ArrayBuffer(1))) != Ms || ra && Os(new ra) != $s || ys && Os(ys.resolve()) != ws || xs && Os(new xs) != _s || bs && Os(new bs) != ks) && (Os = function(t) { var e = jo(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            i = n ? Go(n) : ""; if (i) switch (i) {
            case Ss:
                return Ms;
            case As:
                return $s;
            case Ds:
                return ws;
            case Cs:
                return _s;
            case Es:
                return ks }
        return e }); var Ts = Os,
        Ps = Object.prototype.hasOwnProperty; var Bs = Lo.Uint8Array;

    function Ls(t) { var e = new t.constructor(t.byteLength); return new Bs(e).set(new Bs(t)), e } var zs = /\w*$/; var Ys = zo ? zo.prototype : void 0,
        Fs = Ys ? Ys.valueOf : void 0;

    function Ws(t, e) { var n = e ? Ls(t.buffer) : t.buffer; return new t.constructor(n, t.byteOffset, t.length) }

    function Rs(t, e, n) { var i, r, o, a = t.constructor; switch (e) {
            case "[object ArrayBuffer]":
                return Ls(t);
            case "[object Boolean]":
            case "[object Date]":
                return new a(+t);
            case "[object DataView]":
                return function(t, e) { var n = e ? Ls(t.buffer) : t.buffer; return new t.constructor(n, t.byteOffset, t.byteLength) }(t, n);
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
                return Ws(t, n);
            case "[object Map]":
            case "[object Set]":
                return new a;
            case "[object Number]":
            case "[object String]":
                return new a(t);
            case "[object RegExp]":
                return (o = new(r = t).constructor(r.source, zs.exec(r))).lastIndex = r.lastIndex, o;
            case "[object Symbol]":
                return i = t, Fs ? Object(Fs.call(i)) : {} } } var Ns = Object.create,
        Hs = function() {
            function t() {} return function(e) { if (!Io(e)) return {}; if (Ns) return Ns(e);
                t.prototype = e; var n = new t; return t.prototype = void 0, n } }(),
        js = Hs;

    function Is(t) { return "function" != typeof t.constructor || Ia(t) ? {} : js(fs(t)) } var Vs = Fa && Fa.isMap,
        Us = Vs ? Ba(Vs) : function(t) { return ya(t) && "[object Map]" == Ts(t) }; var Xs = Fa && Fa.isSet,
        qs = Xs ? Ba(Xs) : function(t) { return ya(t) && "[object Set]" == Ts(t) },
        Gs = "[object Arguments]",
        Zs = "[object Function]",
        Qs = "[object Object]",
        Ks = {};

    function Js(t, e, n, i, r, o) { var a, s = 1 & e,
            l = 2 & e,
            c = 4 & e; if (n && (a = r ? n(t, i, r, o) : n(t)), void 0 !== a) return a; if (!Io(t)) return t; var u = Ma(t); if (u) { if (a = function(t) { var e = t.length,
                        n = new t.constructor(e); return e && "string" == typeof t[0] && Ps.call(t, "index") && (n.index = t.index, n.input = t.input), n }(t), !s) return rs(t, a) } else { var f = Ts(t),
                d = f == Zs || "[object GeneratorFunction]" == f; if (Ca(t)) return is(t, s); if (f == Qs || f == Gs || d && !r) { if (a = l || d ? {} : Is(t), !s) return l ? function(t, e) { return ma(t, hs(t), e) }(t, function(t, e) { return t && ma(e, Ka(e), t) }(a, t)) : function(t, e) { return ma(t, cs(t), e) }(t, function(t, e) { return t && ma(e, Ga(e), t) }(a, t)) } else { if (!Ks[f]) return r ? t : {};
                a = Rs(t, f, s) } } o || (o = new fa); var h = o.get(t); if (h) return h;
        o.set(t, a), qs(t) ? t.forEach((function(i) { a.add(Js(i, e, n, i, t, o)) })) : Us(t) && t.forEach((function(i, r) { a.set(r, Js(i, e, n, r, t, o)) })); var g = c ? l ? vs : ps : l ? keysIn : Ga,
            p = u ? void 0 : g(t); return function(t, e) { for (var n = -1, i = null == t ? 0 : t.length; ++n < i && !1 !== e(t[n], n, t);); }(p || t, (function(i, r) { p && (i = t[r = i]), va(a, r, Js(i, e, n, r, t, o)) })), a } Ks[Gs] = Ks["[object Array]"] = Ks["[object ArrayBuffer]"] = Ks["[object DataView]"] = Ks["[object Boolean]"] = Ks["[object Date]"] = Ks["[object Float32Array]"] = Ks["[object Float64Array]"] = Ks["[object Int8Array]"] = Ks["[object Int16Array]"] = Ks["[object Int32Array]"] = Ks["[object Map]"] = Ks["[object Number]"] = Ks[Qs] = Ks["[object RegExp]"] = Ks["[object Set]"] = Ks["[object String]"] = Ks["[object Symbol]"] = Ks["[object Uint8Array]"] = Ks["[object Uint8ClampedArray]"] = Ks["[object Uint16Array]"] = Ks["[object Uint32Array]"] = !0, Ks["[object Error]"] = Ks[Zs] = Ks["[object WeakMap]"] = !1;

    function tl() { return window.location.search.includes("IS_EDITOR") }

    function el(t) { return t ? (/^[?#]/.test(t) ? t.slice(1) : t).split("&").reduce((function(t, e) { var n = Pe(e.split("="), 2),
                i = n[0],
                r = n[1]; if (i.includes(".")) { var o = i.split("."),
                    a = t;
                o.forEach((function(t, e) { o[e + 1] ? (a[t] = a[t] || {}, a = a[t]) : a[t] = r })) } else t[i] = r ? function(t) { return "true" === t || "false" === t || "True" === t || "False" === t ? JSON.parse(t.toLowerCase()) : !isNaN(parseFloat(t)) && isFinite(t) ? Number(t) : t }(decodeURIComponent(r.replace(/\+/g, " "))) : ""; return t }), {}) : {} }

    function nl(t) { return t && ("true" === t || !0 === t) }

    function il(t, e) { var n = t || {}; if (n = Js(ke(el(window.location.search), n), 4), e && e.config && e.config.override_options) try { if ("object" === xe(e.config.override_options)) n = ke(e.config.override_options, n);
            else if ("string" == typeof e.config.override_options) { n = ke(JSON.parse(e.config.override_options), n) } } catch (t) {}
        return nl(n.hideTitles) && (n.hideTitle = !0, n.hideFooter = !0), nl(n.widget) && (n.disableScaffold = !0, n.disableGrid = !0, n.disableTooltip = !0, n.disableAxis = !0, n.disableLabels = !0, n.disablePieLabels = !0, n.disableAnnotations = !0, n.forceVerticalColumns = !0, n.noPadding = !0, n.interaction = !1, n.hideTitles = !0, n.hideTitle = !0, n.hideFooter = !0, n.screenshotMinHeight = 0, n.layoutManager = { minHeight: 0 }), n.embedType && "standalone" !== n.embedType && !n.embedAspectRatio && (n.layoutManager = ke({}, n.layoutManager || {}, { fitToContainer: !0 }), n.noResizePropagation = !0), n.screenshotMode && "false" !== n.screenshotMode && (n.layoutManager = ke({}, n.layoutManager || {}, { minHeight: 240 })), n }

    function rl(t, e, n) { return null != n[t] ? n[t] : e.config && null != e.config[t] ? e.config[t] : null }

    function ol() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : window;
        i._globalState || (i._globalState = {}), i._globalState[t] || (i._globalState[t] = {}); var r = i._globalState; return void 0 === n ? r[t][e] : (r[t][e] = n, n) }

    function al() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = window,
            i = n._globalState;
        i && i[t] && null != i[t][e] && delete i[t][e] }

    function sl(t, e) { return isNaN(Number(t)) ? e : Number(t) }

    function ll(t, e, n, i, r) { var o, a, s, l = i.id;
        o = window, a = "resize.toaster-".concat(l), s = Xr(a + ""), qr(o).forEach((function(t) { s.forEach((function(e) { t.__on && t.__on.forEach && (t.__on = t.__on.filter((function(n) { var i = n.type === e.type && n.name === e.name; return i && t.removeEventListener(n.type, n.listener, n.capture), i }))) })) })) }

    function cl() { try { return window.self !== window.top } catch (t) { return !0 } }

    function ul(t) { return t.fields.length > 1 ? t.fields.slice(1) : t.fields }

    function fl(t) { for (; t.firstChild;) t.removeChild(t.lastChild) }

    function dl(t, e, n) { if (null == n) return t.classList.contains(e);
        n ? t.classList.add(e) : t.classList.remove(e) }

    function hl(t, e, n) { var i = "".concat(e, ".").concat(n),
            r = t.querySelector(i); return r || (r = document.createElement(e), t.appendChild(r), r.classList.add(n)), r }

    function gl(t, e, n) { if (null == n) return t.style[e];
        t.style[e] = n }

    function pl(t, e, n) { if (null == t.length) return gl(t, e, n); for (var i = 0, r = Be(t); i < r.length; i++) { gl(r[i], e, n) } }

    function vl(t, e, n) { var i = rl("variant_logo", e, n),
            r = rl("variant_color", e, n);
        void 0 !== e.id && t.hasAttribute("toaster-id") && t.getAttribute("toaster-id") !== e.id && fl(t), t.setAttribute("toaster-id", e.id), t.className = t.className.replace(/variant-/g, "x-"), dl(t, "variant-color-".concat(r), !0), dl(t, "no-titles", n.hideTitle); var o, a = hl(t, "div", "header"); if (dl(a, "hide", n.hideTitle), n.hideTitle || (hl(a, "h1", "title").innerHTML = e.title, hl(a, "h2", "subtitle").innerHTML = e.subtitle), !n.hideLegend) { var s = hl(t, "div", "legend");
            n.legendConfig && n.customLegend ? n.customLegend(s, n.legendConfig) : function(t, e, n) { var i = e.config,
                    r = void 0 === i ? {} : i,
                    o = ul(e).map((function(t, e) { return t.index = e, t })).filter((function(t) { return t.name && "" !== t.name }));
                r.highlight_label && o.push({ name: r.highlight_label, isHighlight: !0 }), r.highlightRanges && r.highlightRanges.label && o.push({ name: r.highlightRanges.label, rangeHighlight: !0 }); var a = hl(t, "ul", "simple-legend");
                fl(a), o.forEach((function(t, e) { var n = document.createElement("li"),
                        i = document.createElement("span"),
                        r = document.createElement("label");
                    a.appendChild(n), n.appendChild(i), n.appendChild(r), r.innerHTML = t.name, i.className = "swatch bg series-".concat(t.index), dl(i, "highlight-legend", t.isHighlight), dl(i, "highlight-range-legend", t.rangeHighlight) })), dl(t, "hidden", 0 === o.length) }(s, e) } hl(t, "div", "chart"), dl(t, "no-padding", n.noPadding || n.hideTitle && n.hideFooter), dl(t, "no-interaction", void 0 !== (o = n.interactive) && (!o || "false" === o)), dl(t, "screenshot-mode", n.screenshotMode && "false" !== n.screenshotMode); var l = hl(t, "div", "footer"); if (dl(l, "hide", n.hideFooter), !n.hideFooter) { hl(l, "p", "source").innerHTML = e.source, hl(l, "p", "footnote").innerHTML = e.footnote, n.hideLogo || hl(l, "div", "logo"); var c = l.querySelector("div.logo");
            c && (c.className = c.className.replace(/variant-/g, "x-"), dl(c, "variant-logo-".concat(i), !0)) }(n.clickThroughURL || n.clickthroughurl) && function(t, e, n) { var i = n.clickThroughURL || n.clickthroughurl;
            dl(t, "embed-click-through", !0), t.onclick = function(t) { t.stopPropagation(), t.preventDefault(), window.self !== window.top ? window.parent.location.href = i : window.location.href = i } }(t, 0, n) } var ml = 880,
        yl = 480;

    function xl(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = e.mobileBreakpoint || yl; return t < n } var bl = "var(--text)",
        $l = "var(--bg)",
        wl = "#00aeff",
        _l = "#ffc400",
        kl = "#ff008c",
        Ml = "#3ef794",
        Sl = "#0037ff",
        Al = "#ff6200",
        Dl = "#00577f",
        Cl = "#0079b2",
        El = "#0094d9",
        Ol = "#44c4ff",
        Tl = "#89d9fe",
        Pl = "#cdeffe",
        Bl = "#7f6200",
        Ll = "#b28900",
        zl = "#d9a700",
        Yl = "#ffd345",
        Fl = "#ffe389",
        Wl = "var(--bg)2ce",
        Rl = "#0078ff",
        Nl = "#ff0000",
        Hl = "#008800",
        jl = "#dca0ff",
        Il = "var(--bg)f00",
        Vl = "#0052d9",
        Ul = "#003eb2",
        Xl = "#002a7f",
        ql = "#4499ff",
        Gl = "#89baff",
        Zl = "#cddcff",
        Ql = "#d90000",
        Kl = "#b20000",
        Jl = "#7f0000",
        tc = "#ff4141",
        ec = "#ff8282",
        nc = "#ffc3c3",
        ic = "#efefef",
        rc = "#cccccc",
        oc = "#999999",
        ac = "#999999",
        sc = "#0073ff",
        lc = "#fa5a28",
        cc = "#c873ff",
        uc = "#ffed66",
        fc = "#00e6ff",
        dc = "#ffa028",
        hc = "#f328bb",
        gc = "#50f06e",
        pc = "#db8922",
        vc = "#bebebe",
        mc = "#0051ba",
        yc = "#b3401d",
        xc = "#8f52b6",
        bc = "#d7be00",
        $c = "#1bbc3c",
        wc = "#14eb1e",
        _c = ["#14eb1e", "var(--text)", "#aaaaaa", "#00b4d2", "#2d82a5", "#ffbe1e", "#ffeb50", "#ff4f00", "#e1a05a"],
        kc = ["#14eb1e", "#14d21e", "#14b919", "#14a014", "#148714", "#147819", "#196919", "#195a19", "#0f4b0f"],
        Mc = "#7f3100",
        Sc = "#b24400",
        Ac = "#d95300",
        Dc = "#ff6200",
        Cc = "#ff8d46",
        Ec = "#feb98d",
        Oc = "#fee4d3",
        Tc = "#cccccc",
        Pc = "#00f3e5",
        Bc = "#00AEFF",
        Lc = ["#00aeff", "#44c4ff", "#89d9fe", "#d4d4d4", "#feb98d", "#ff8d46", "#ff6200"],
        zc = ["#e41443", "#fe456f", "#fe8ca5", "#d4d4d4", "#a1fdac", "#00ff29", "#02b21e"];

    function Yc() { var t = "https://www.bloomberg.com/graphics/toaster/toaster-client-packages/assets"; if ("localhost" === window.location.hostname) { var e = window.location.origin; "http://localhost:4000" === e && (e = "http://localhost:8088"), t = "".concat(e, "/assets") } else "toaster-staging.bloomberg.com" === window.location.hostname && (t = "https://www.bloomberg.com/graphics/toaster/toaster-client-packages/assets"); return t }

    function Fc(t, e) { var n = t.split(" ")[0].replace("url(#", "").replace(")", ""),
            i = n[n.length - 1],
            r = -1 !== n.indexOf("dark"); return { fileName: "".concat(e, "_").concat(r ? "dark" : "light", "_pattern_").concat(i, ".png"), bareKey: n, pIndex: i, isDark: r } } var Wc = { 1: [
                [dc],
                [sc],
                [lc],
                [pc]
            ], 2: [
                [dc, sc],
                [lc, mc],
                [lc, vc],
                [sc, vc]
            ], 3: [
                [dc, vc, mc],
                [dc, mc, yc]
            ], 4: [
                [sc, dc, mc, yc],
                [vc, Yl, zl, Bl]
            ], 5: [
                [sc, dc, mc, yc, $c],
                [vc, Yl, _l, zl, Bl]
            ], 6: [
                [pc, vc, mc, yc, xc, bc],
                [vc, Bl, zl, _l, Yl, Fl, Wl]
            ], all: [
                [pc, vc, mc, yc, xc, bc, "#009eb0", $c, "#ae1d86"],
                [vc, Bl, zl, _l, Yl, Fl, Wl]
            ] },
        Rc = { 1: [
                [dc],
                [lc],
                [sc],
                [$l]
            ], 2: [
                [$l, sc],
                [lc, $l],
                [dc, sc]
            ], 3: [
                [lc, $l, sc],
                [dc, sc, gc]
            ], 4: [
                [dc, sc, hc, $l]
            ], 5: [
                [sc, lc, cc, uc, gc]
            ], 6: [
                [sc, lc, cc, uc, fc, dc]
            ], all: [
                [sc, lc, cc, uc, fc, dc, hc, gc]
            ] },
        Nc = { 1: [
                [bl],
                [{ color: $l, stroke: bl }],
                [wl],
                [_l]
            ], 2: [
                [bl, wl],
                [{ color: bl, stroke: bl }, { color: $l, stroke: bl }],
                [bl, _l],
                [bl, _l],
                [bl, wl]
            ], 3: [
                [bl, kl, _l],
                [bl, Cl, wl],
                [bl, Ll, _l],
                [bl, oc, _l]
            ], 4: [
                [bl, kl, wl, _l],
                [bl, Dl, El, Ol],
                [bl, Bl, zl, Yl]
            ], 5: [
                [bl, kl, wl, _l, Ml],
                [bl, Dl, El, wl, Ol],
                [bl, Bl, zl, _l, Yl]
            ], 6: [
                [bl, kl, rc, wl, _l, Ml],
                [bl, Dl, El, wl, Ol, Tl],
                [bl, Bl, zl, _l, Yl, Fl]
            ], all: [
                [bl, kl, rc, wl, _l, Ml, Sl],
                [bl, Dl, El, wl, Ol, Tl, Pl],
                [bl, Bl, zl, _l, Yl, Fl, Wl]
            ] },
        Hc = { 1: [
                [bl],
                [wl],
                [_l]
            ], 2: [
                [bl, _l],
                [bl, wl]
            ], 3: [
                [bl, kl, _l],
                [bl, Cl, wl],
                [bl, Ll, _l]
            ], 4: [
                [bl, kl, wl, _l],
                [bl, Dl, El, Ol],
                [bl, Bl, zl, Yl]
            ], 5: [
                [bl, kl, wl, _l, Ml],
                [bl, Dl, El, wl, Ol],
                [bl, Bl, zl, _l, Yl]
            ], 6: [
                [bl, kl, rc, wl, _l, Ml],
                [bl, Dl, El, wl, Ol, Tl],
                [bl, Bl, zl, _l, Yl, Fl]
            ], all: [
                [bl, kl, rc, wl, _l, Ml, Sl],
                [bl, Dl, El, wl, Ol, Tl, Pl],
                [bl, Bl, zl, _l, Yl, Fl, Wl]
            ] },
        jc = { 1: [
                [_l],
                [{ color: bl, stroke: $l }],
                [wl],
                [$l]
            ], 2: [
                [ac, _l],
                [{ color: $l, stroke: $l }, { color: bl, stroke: $l }],
                ["#cccccc", wl],
                [$l, _l],
                [$l, wl]
            ], 3: [
                [ac, _l, wl],
                [oc, Tl, wl],
                [oc, Fl, _l],
                [$l, ac, _l]
            ], 4: [
                [$l, kl, wl, _l],
                [$l, Pl, Ol, El],
                [$l, Wl, Yl, zl]
            ], 5: [
                [$l, kl, wl, _l, Ml],
                [$l, Pl, Ol, wl, El],
                [$l, Wl, Yl, _l, zl]
            ], 6: [
                [$l, kl, oc, wl, _l, Ml],
                [$l, Pl, Ol, wl, El, Cl],
                [$l, Wl, Yl, _l, zl, Ll]
            ], all: [
                [$l, kl, oc, wl, _l, Ml, Sl],
                [$l, Pl, Ol, wl, El, Cl, Dl],
                [$l, Wl, Yl, _l, zl, Ll, Bl]
            ] },
        Ic = { 1: [
                [_l],
                [wl],
                [$l]
            ], 2: [
                [_l, $l],
                [wl, $l]
            ], 3: [
                [$l, wl, _l],
                [$l, ac, wl],
                [$l, ac, _l]
            ], 4: [
                [$l, kl, wl, _l],
                [$l, Pl, Ol, El],
                [$l, Wl, Yl, zl]
            ], 5: [
                [$l, kl, wl, _l, Ml],
                [$l, Pl, Ol, wl, El],
                [$l, Wl, Yl, _l, zl]
            ], 6: [
                [$l, kl, ac, wl, _l, Ml],
                [$l, Pl, Ol, wl, El, Cl],
                [$l, Wl, Yl, _l, zl, Ll]
            ], all: [
                [$l, kl, ac, wl, _l, Ml, Sl],
                [$l, Pl, Ol, wl, El, Cl, Dl],
                [$l, Wl, Yl, _l, zl, Ll, Bl]
            ] },
        Vc = Se(Se({}, Nc), {}, { 1: [
                [wl],
                [_l],
                [kl]
            ], 2: [
                [wl, Al],
                [wl, _l],
                [kl, wl],
                [kl, bl],
                [wl, bl]
            ] }),
        Uc = Se(Se({}, Nc), {}, { 1: [
                [wl],
                [_l],
                [kl]
            ], 2: [
                [wl, Al],
                [wl, _l],
                [kl, wl],
                [kl, bl],
                [ac, _l]
            ] }),
        Xc = { 1: [
                [bl],
                [{ color: $l, stroke: bl }],
                [{ color: Rl, stroke: bl }],
                [{ color: Nl, stroke: bl }],
                [{ color: jl, stroke: bl }]
            ], 2: [
                [$l, bl],
                [bl, Rl],
                [bl, Nl]
            ], 3: [
                [bl, Hl, jl],
                [bl, Ul, Rl],
                [bl, Kl, Nl]
            ], 4: [
                [bl, Rl, Nl, Hl],
                [bl, Ul, Rl, Gl],
                [bl, Kl, Nl, ec]
            ], 5: [
                [bl, Rl, Nl, Hl, jl],
                [bl, Xl, Vl, Rl, Gl],
                [bl, Jl, Ql, Nl, ec]
            ], 6: [
                [bl, Rl, Nl, Hl, jl, Il],
                [bl, Xl, Vl, Rl, ql, Zl],
                [bl, Jl, Ql, Nl, tc, nc]
            ], all: [
                [bl, Rl, Nl, Hl, jl, Il, $l],
                [bl, Ul, Vl, Rl, ql, Gl, Zl],
                [bl, Kl, Ql, Nl, tc, ec, nc]
            ] },
        qc = { 1: [
                [$l],
                [{ color: bl, stroke: $l }],
                [{ color: Rl, stroke: $l }],
                [{ color: Nl, stroke: $l }],
                [{ color: jl, stroke: $l }]
            ], 2: [
                [bl, $l],
                [$l, Rl],
                [$l, Nl]
            ], 3: [
                [$l, Hl, jl],
                [$l, Ul, Rl],
                [$l, Kl, Nl]
            ], 4: [
                [$l, Rl, Nl, Hl],
                [$l, Ul, Rl, Gl],
                [$l, Kl, Nl, ec]
            ], 5: [
                [$l, Rl, Nl, Hl, jl],
                [$l, Xl, Vl, Rl, Gl],
                [$l, Jl, Ql, Nl, ec]
            ], 6: [
                [$l, Rl, Nl, Hl, jl, Il],
                [$l, Xl, Vl, Rl, ql, Zl],
                [$l, Jl, Ql, Nl, tc, nc]
            ], all: [
                [$l, Rl, Nl, Hl, jl, Il, bl],
                [$l, Ul, Vl, Rl, ql, Gl, Zl],
                [$l, Kl, Ql, Nl, tc, ec, nc]
            ] },
        Gc = { 1: [
                [wc],
                [{ color: wc, stroke: bl }]
            ], 2: [
                [_c[1], _c[0]],
                [{ color: $l, stroke: bl }, { color: wc, stroke: bl }]
            ], 3: [
                [_c[1], _c[0], _c[2]],
                [{ color: kc[0], stroke: bl }, { color: kc[2], stroke: bl }, { color: kc[4], stroke: bl }]
            ], 4: [
                [_c[0], _c[1], _c[2], _c[3]],
                [{ color: kc[0], stroke: bl }, { color: kc[2], stroke: bl }, { color: kc[4], stroke: bl }, { color: kc[6], stroke: bl }]
            ], 5: [
                [_c[0], _c[1], _c[2], _c[3], _c[4]],
                [{ color: kc[0], stroke: bl }, { color: kc[2], stroke: bl }, { color: kc[4], stroke: bl }, { color: kc[6], stroke: bl }, { color: kc[8], stroke: bl }]
            ], 6: [
                [_c[0], _c[1], _c[2], _c[3], _c[4], _c[5]],
                [{ color: kc[0], stroke: bl }, { color: kc[2], stroke: bl }, { color: kc[3], stroke: bl }, { color: kc[5], stroke: bl }, { color: kc[6], stroke: bl }, { color: kc[8], stroke: bl }]
            ], all: [
                [_c[0], _c[1], _c[2], _c[3], _c[4], _c[5], _c[6], _c[7], _c[8]],
                [{ color: kc[0], stroke: bl }, { color: kc[1], stroke: bl }, { color: kc[2], stroke: bl }, { color: kc[3], stroke: bl }, { color: kc[4], stroke: bl }, { color: kc[5], stroke: bl }, { color: kc[6], stroke: bl }, { color: kc[7], stroke: bl }, { color: kc[8], stroke: bl }]
            ] },
        Zc = { 1: [
                [wc],
                [{ color: wc, stroke: $l }]
            ], 2: [
                [$l, _c[0]],
                [{ color: bl, stroke: $l }, { color: wc, stroke: $l }]
            ], 3: [
                [$l, _c[0], _c[2]],
                [{ color: kc[0], stroke: $l }, { color: kc[2], stroke: $l }, { color: kc[4], stroke: $l }]
            ], 4: [
                [_c[0], $l, _c[2], _c[3]],
                [{ color: kc[0], stroke: $l }, { color: kc[2], stroke: $l }, { color: kc[4], stroke: $l }, { color: kc[6], stroke: $l }]
            ], 5: [
                [_c[0], $l, _c[2], _c[3], _c[4]],
                [{ color: kc[0], stroke: $l }, { color: kc[2], stroke: $l }, { color: kc[4], stroke: $l }, { color: kc[6], stroke: $l }, { color: kc[8], stroke: $l }]
            ], 6: [
                [_c[0], $l, _c[2], _c[3], _c[4], _c[5]],
                [{ color: kc[0], stroke: $l }, { color: kc[2], stroke: $l }, { color: kc[3], stroke: $l }, { color: kc[5], stroke: $l }, { color: kc[6], stroke: $l }, { color: kc[8], stroke: $l }]
            ], all: [
                [_c[0], $l, _c[2], _c[3], _c[4], _c[5], _c[6], _c[7], _c[8]],
                [{ color: kc[0], stroke: $l }, { color: kc[1], stroke: $l }, { color: kc[2], stroke: $l }, { color: kc[3], stroke: $l }, { color: kc[4], stroke: $l }, { color: kc[5], stroke: $l }, { color: kc[6], stroke: $l }, { color: kc[7], stroke: $l }, { color: kc[8], stroke: $l }]
            ] },
        Qc = { 1: [
                [{ color: uu(1), stroke: bl }]
            ], 2: [
                [{ color: uu(1), stroke: bl }, { color: uu(2), stroke: bl }]
            ], 3: [
                [{ color: uu(1), stroke: bl }, { color: uu(2), stroke: bl }, { color: uu(3), stroke: bl }]
            ], 4: [
                [{ color: uu(1), stroke: bl }, { color: uu(2), stroke: bl }, { color: uu(3), stroke: bl }, { color: uu(4), stroke: bl }]
            ], 5: [
                [{ color: uu(1), stroke: bl }, { color: uu(2), stroke: bl }, { color: uu(3), stroke: bl }, { color: uu(4), stroke: bl }, { color: uu(5), stroke: bl }]
            ], 6: [
                [{ color: uu(1), stroke: bl }, { color: uu(2), stroke: bl }, { color: uu(3), stroke: bl }, { color: uu(4), stroke: bl }, { color: uu(5), stroke: bl }, { color: uu(6), stroke: bl }]
            ], all: [
                [{ color: uu(1), stroke: bl }, { color: uu(2), stroke: bl }, { color: uu(3), stroke: bl }, { color: uu(4), stroke: bl }, { color: uu(5), stroke: bl }, { color: uu(6), stroke: bl }, { color: uu(7), stroke: bl }]
            ] },
        Kc = { 1: [
                [{ color: fu(1), stroke: wc }]
            ], 2: [
                [{ color: fu(1), stroke: wc }, { color: fu(2), stroke: wc }]
            ], 3: [
                [{ color: fu(1), stroke: wc }, { color: fu(2), stroke: wc }, { color: fu(3), stroke: wc }]
            ], 4: [
                [{ color: fu(1), stroke: wc }, { color: fu(2), stroke: wc }, { color: fu(3), stroke: wc }, { color: fu(4), stroke: wc }]
            ], 5: [
                [{ color: fu(1), stroke: wc }, { color: fu(2), stroke: wc }, { color: fu(3), stroke: wc }, { color: fu(4), stroke: wc }, { color: fu(5), stroke: wc }]
            ], 6: [
                [{ color: fu(1), stroke: wc }, { color: fu(2), stroke: wc }, { color: fu(3), stroke: wc }, { color: fu(4), stroke: wc }, { color: fu(5), stroke: wc }, { color: fu(6), stroke: wc }]
            ], all: [
                [{ color: fu(1), stroke: wc }, { color: fu(2), stroke: wc }, { color: fu(3), stroke: wc }, { color: fu(4), stroke: wc }, { color: fu(5), stroke: wc }, { color: fu(6), stroke: wc }, { color: fu(7), stroke: wc }]
            ] },
        Jc = { 1: [
                [Dc],
                [bl],
                [{ color: $l, stroke: bl }]
            ], 2: [
                [{ color: bl, stroke: bl }, { color: $l, stroke: bl }],
                [bl, Tc],
                [bl, Ec],
                [Dc, Ec],
                [Dc, Bc],
                [Dc, Pc]
            ], 3: [
                [bl, Sc, Ec],
                [bl, Dc, Bc],
                [bl, Dc, Pc]
            ], 4: [
                [bl, Sc, Dc, Ec],
                [bl, Tc, Dc, Bc],
                [bl, Dc, Ec, Bc],
                [bl, Dc, Ec, Pc]
            ], 5: [
                [bl, Sc, Dc, Ec, Oc],
                [bl, Tc, Dc, Ec, Bc],
                [bl, Tc, Dc, Ec, Pc],
                [Mc, Ac, Oc, Dc, Ec]
            ], 6: [
                [bl, Mc, Sc, Dc, Ec, Oc],
                [bl, Tc, Mc, Dc, Ec, Bc],
                [bl, Tc, Mc, Dc, Ec, Pc]
            ], all: [
                [bl, Sc, Ac, Dc, Cc, Ec, Oc],
                [bl, Tc, Dc, Bc, Cc, Pc, Ec],
                [Mc, Sc, Ac, Dc, Cc, Ec, Oc]
            ] },
        tu = { 1: [
                [Dc],
                [bl]
            ], 2: [
                [bl, Tc],
                [bl, Ec],
                [Dc, Ec],
                [Dc, Bc],
                [Dc, Pc]
            ], 3: [
                [bl, Sc, Ec],
                [bl, Dc, Bc],
                [bl, Dc, Pc]
            ], 4: [
                [bl, Sc, Dc, Ec],
                [bl, Tc, Dc, Bc],
                [bl, Dc, Ec, Bc],
                [bl, Dc, Ec, Pc]
            ], 5: [
                [bl, Sc, Dc, Ec, Oc],
                [bl, Tc, Dc, Ec, Bc],
                [bl, Tc, Dc, Ec, Pc],
                [Mc, Ac, Oc, Dc, Ec]
            ], 6: [
                [bl, Mc, Sc, Dc, Ec, Oc],
                [bl, Tc, Mc, Dc, Ec, Bc],
                [bl, Tc, Mc, Dc, Ec, Pc]
            ], all: [
                [bl, Sc, Ac, Dc, Cc, Ec, Oc],
                [bl, Tc, Dc, Bc, Cc, Pc, Ec],
                [Mc, Sc, Ac, Dc, Cc, Ec, Oc]
            ] },
        eu = { 1: [
                [Dc],
                [{ color: bl, stroke: $l }],
                [$l]
            ], 2: [
                [{ color: bl, stroke: $l }, { color: $l, stroke: $l }],
                [$l, Ec],
                [Ec, Dc],
                [Dc, Bc],
                [Dc, Pc]
            ], 3: [
                [$l, Ec, Sc],
                [$l, Dc, Bc],
                [$l, Dc, Pc]
            ], 4: [
                [$l, Ec, Dc, Sc],
                [$l, Ec, Dc, Bc],
                [$l, Ec, Dc, Pc]
            ], 5: [
                [$l, Oc, Ec, Dc, Sc],
                [$l, Oc, Ec, Dc, Bc],
                [$l, Oc, Ec, Dc, Pc],
                [Mc, Ac, Oc, Dc, Ec]
            ], 6: [
                [$l, Oc, Ec, Dc, Sc, Mc],
                [$l, Oc, Ec, Dc, Mc, Bc],
                [$l, Oc, Ec, Dc, Mc, Pc]
            ], all: [
                [$l, Oc, Ec, Cc, Dc, Ac, Sc],
                [$l, Bc, Cc, Pc, Dc, Ec, Oc],
                [Mc, Sc, Ac, Dc, Cc, Ec, Oc]
            ] },
        nu = { 1: [
                [Dc],
                [$l]
            ], 2: [
                [$l, Ec],
                [Ec, Dc],
                [Dc, Bc],
                [Dc, Pc]
            ], 3: [
                [$l, Ec, Sc],
                [$l, Dc, Bc],
                [$l, Dc, Pc]
            ], 4: [
                [$l, Ec, Dc, Sc],
                [$l, Ec, Dc, Bc],
                [$l, Ec, Dc, Pc]
            ], 5: [
                [$l, Oc, Ec, Dc, Sc],
                [$l, Oc, Ec, Dc, Bc],
                [$l, Oc, Ec, Dc, Pc],
                [Mc, Ac, Oc, Dc, Ec]
            ], 6: [
                [$l, Oc, Ec, Dc, Sc, Mc],
                [$l, Oc, Ec, Dc, Mc, Bc],
                [$l, Oc, Ec, Dc, Mc, Pc]
            ], all: [
                [$l, Oc, Ec, Cc, Dc, Ac, Sc],
                [$l, Bc, Cc, Pc, Dc, Ec, Oc],
                [Mc, Sc, Ac, Dc, Cc, Ec, Oc]
            ] },
        iu = { 1: [
                ["#0D9DDB"],
                ["#00D2B3"],
                ["#8A5DB5"]
            ], 2: [
                ["#0D9DDB", "#00D2B3"],
                ["#0D9DDB", "#C19BE6"],
                ["#0D9DDB", "#8A5DB5"],
                ["#0D9DDB", "#AAE5FF"],
                ["#8A5DB5", "#DDBAFF"],
                ["#00D2B3", "#93FFEF"]
            ], 3: [
                ["#0D9DDB", "#3B3B3B", "#00D2B3"],
                ["#0D9DDB", "#8A5DB5", "#00D2B3"],
                ["#0D9DDB", "#76CDF3", "#AAE5FF"],
                ["#8A5DB5", "#C19BE6", "#DDBAFF"],
                ["#00D2B3", "#62F0DB", "#93FFEF"]
            ], 4: [
                ["#0D9DDB", "#3B3B3B", "#01B69B", "#00D2B3"],
                ["#005174", "#0D9DDB", "#3B3B3B", "#00D2B3"],
                ["#0D9DDB", "#8A5DB5", "#00D2B3", "#ED4436"],
                ["#0D9DDB", "#41B5E7", "#76CDF3", "#AAE5FF"],
                ["#8A5DB5", "#A67CCE", "#C19BE6", "#DDBAFF"],
                ["#00D2B3", "#31E1C7", "#62F0DB", "#93FFEF"]
            ], 5: [
                ["#0D9DDB", "#046A96", "#3B3B3B", "#01B69B", "#00D2B3"],
                ["#0D9DDB", "#005174", "#8A5DB5", "#3C294E", "#00D2B3"],
                ["#0D9DDB", "#8A5DB5", "#00D2B3", "#ED4436", "#FFCC1D"],
                ["#0984B9", "#0D9DDB", "#41B5E7", "#76CDF3", "#AAE5FF"],
                ["#6D4B8D", "#8A5DB5", "#A67CCE", "#C19BE6", "#DDBAFF"],
                ["#01B69B", "#00D2B3", "#31E1C7", "#62F0DB", "#93FFEF"]
            ], 6: [
                ["#0D9DDB", "#046A96", "#3B3B3B", "#029983", "#01B69B", "#00D2B3"],
                ["#0D9DDB", "#005174", "#8A5DB5", "#3C294E", "#00D2B3", "#037D6B"],
                ["#0D9DDB", "#8A5DB5", "#00D2B3", "#ED4436", "#FFCC1D", "#EA60A7"],
                ["#046A96", "#0984B9", "#0D9DDB", "#41B5E7", "#76CDF3", "#AAE5FF"],
                ["#563A70", "#6D4B8D", "#8A5DB5", "#A67CCE", "#C19BE6", "#DDBAFF"],
                ["#029983", "#01B69B", "#00D2B3", "#31E1C7", "#62F0DB", "#93FFEF"]
            ], all: [
                ["#0D9DDB", "#0984B9", "#046A96", "#3B3B3B", "#029983", "#01B69B", "#00D2B3"],
                ["#0D9DDB", "#005174", "#AAE5FF", "#8A5DB5", "#3C294E", "#00D2B3", "#037D6B"],
                ["#0D9DDB", "#8A5DB5", "#00D2B3", "#ED4436", "#FFCC1D", "#EA60A7", "#4DAA50"],
                ["#005174", "#046A96", "#0984B9", "#0D9DDB", "#41B5E7", "#76CDF3", "#AAE5FF"],
                ["#3C294E", "#563A70", "#6D4B8D", "#8A5DB5", "#A67CCE", "#C19BE6", "#DDBAFF"],
                ["#037D6B", "#029983", "#01B69B", "#00D2B3", "#31E1C7", "#62F0DB", "#93FFEF"]
            ] },
        ru = { 1: [
                ["#0D9DDB"],
                ["#00D2B3"],
                ["#8A5DB5"]
            ], 2: [
                ["#0D9DDB", "#00D2B3"],
                ["#0D9DDB", "#8A5DB5"],
                ["#0D9DDB", "#005174"],
                ["#8A5DB5", "#563A70"],
                ["#00D2B3", "#037D6B"]
            ], 3: [
                ["#0D9DDB", "#E5E5E5", "#00D2B3"],
                ["#0D9DDB", "#8A5DB5", "#00D2B3"],
                ["#0D9DDB", "#0984B9", "#005174"],
                ["#8A5DB5", "#563A70", "#3C294E"],
                ["#00D2B3", "#01B69B", "#037D6B"]
            ], 4: [
                ["#0D9DDB", "#76CDF3", "#62F0DB", "#00D2B3"],
                ["#AAE5FF", "#0D9DDB", "#8A5DB5", "#00D2B3"],
                ["#0D9DDB", "#8A5DB5", "#00D2B3", "#ED4436"],
                ["#0D9DDB", "#0984B9", "#046A96", "#005174"],
                ["#8A5DB5", "#704C93", "#563A70", "#3C294E"],
                ["#00D2B3", "#01B69B", "#029983", "#037D6B"]
            ], 5: [
                ["#0D9DDB", "#76CDF3", "#E5E5E5", "#62F0DB", "#00D2B3"],
                ["#0D9DDB", "#AAE5FF", "#8A5DB5", "#C19BE6", "#00D2B3"],
                ["#0D9DDB", "#8A5DB5", "#00D2B3", "#ED4436", "#FFCC1D"],
                ["#41B5E7", "#0D9DDB", "#0984B9", "#046A96", "#005174"],
                ["#A67CCE", "#8A5DB5", "#704C93", "#563A70", "#3C294E"],
                ["#31E1C7", "#00D2B3", "#01B69B", "#029983", "#037D6B"]
            ], 6: [
                ["#0D9DDB", "#1DB8FB", "#AAE5FF", "#93FFEF", "#62F0DB", "#00D2B3"],
                ["#0D9DDB", "#AAE5FF", "#8A5DB5", "#C19BE6", "#00D2B3", "#93FFEF"],
                ["#0D9DDB", "#8A5DB5", "#00D2B3", "#ED4436", "#FFCC1D", "#EA60A7"],
                ["#76CDF3", "#41B5E7", "#0D9DDB", "#0984B9", "#046A96", "#005174"],
                ["#DDBAFF", "#A67CCE", "#8A5DB5", "#704C93", "#563A70", "#3C294E"],
                ["#62F0DB", "#31E1C7", "#00D2B3", "#01B69B", "#029983", "#037D6B"]
            ], all: [
                ["#0D9DDB", "#1DB8FB", "#62D0FF", "#E5E5E5", "#93FFEF", "#62F0DB", "#00D2B3"],
                ["#76CDF3", "#0D9DDB", "#AAE5FF", "#8A5DB5", "#C19BE6", "#00D2B3", "#93FFEF"],
                ["#0D9DDB", "#8A5DB5", "#00D2B3", "#ED4436", "#FFCC1D", "#EA60A7", "#4DAA50"],
                ["#AAE5FF", "#76CDF3", "#41B5E7", "#0D9DDB", "#0984B9", "#046A96", "#005174"],
                ["#DDBAFF", "#DDBAFF", "#A67CCE", "#8A5DB5", "#704C93", "#563A70", "#3C294E"],
                ["#93FFEF", "#62F0DB", "#31E1C7", "#00D2B3", "#01B69B", "#029983", "#037D6B"]
            ] },
        ou = ["#0072FF", "var(--text)", "#999", "#ff6564", "#2800d8", "#c1c1c1", "#a196d0", "#91c7bb", "#b5cec8", "#c5c2d2"],
        au = { business: Nc.all[0], "business-dark": jc.all[0], terminal: Wc.all[0], coth: Wc.all[0], opinion: ou, "opinion-dark": ["#0072FF", "var(--bg)", "#999", "#ff6564", "#2800d8", "#c1c1c1", "#a196d0", "#91c7bb", "#b5cec8", "#c5c2d2"], view: ou, bizweek: Xc.all[0], "bizweek-dark": qc.all[0], green: Gc.all[0], "green-dark": Zc.all[0], citylab: Jc.all[0], "citylab-dark": eu.all[0], bnef: iu.all[0], "bnef-dark": ru.all[0], bi: ["#4ab0ff", "var(--bg)", "#fda315", "#ff00fc", "#ffe273", "#008616", "#ff1e3e", "var(--bg)f00", "#1b84ed", "#bbbbbb", "#999999", "#666666", "#333333"], daybreak: ["#f8f704", "#02bceb", "#f32367", "#8462fa", "#19f4de", "#ff9000", "#91c7bb", "#b5cec8", "#c5c2d2"] },
        su = { colors: ["#8A5DB5", "#0D9DDB", "#00D2B3", "#4DAA50", "#FFCC1D", "#ED4436", "#EA60A7", "#BBBBBB", "#999999", "#666666"], highlightColor: "#FFCC1D" },
        lu = { colors: ["#8A5DB5", "#0D9DDB", "#00D2B3", "#4DAA50", "#FFCC1D", "#ED4436", "#EA60A7", "#BBBBBB", "#999999", "#666666"], highlightColor: "#ED4436" },
        cu = { light: { "politics-us": { colors: ["#199cfc", "#ed203d", "#666", "#333"], highlightColor: "#ed203d" }, "politics-uk": { colors: ["#dc241f", "#0087dc", "#fdbb30", "#ff0", "#008142", "#09b7d0", "#666", "#333"], highlightColor: "#0087dc" }, "politics-germany": { colors: ["#ff0038", "#262626", "#00ff2a", "var(--bg)200", "#00aeff", "#ff008c", "#860000", "#888"], highlightColor: "#fa0033" }, "politics-bgov": { colors: ["#0d9ddb", "#ed4436", "#666", "#333"], highlightColor: "#ed4436" }, bgov: su, market: { colors: ["#00c88a", "#ff415f", "var(--text)", "#aaaaaa", "#888", "#444"], highlightColor: "#ff415f" }, communications: lu }, dark: { "politics-us": { colors: ["#199cfc", "#ed203d", "#999999", "#666"], highlightColor: "#ed203d" }, "politics-uk": { colors: ["#dc241f", "#0087dc", "#fdbb30", "#ff0", "#008142", "#09b7d0", "#666", "#333"], highlightColor: "#0087dc" }, "politics-germany": { colors: ["#ff0038", "#666666", "#00ff2a", "var(--bg)200", "#00aeff", "#ff008c", "#860000", "#888"], highlightColor: "#fa0033" }, "politics-bgov": { colors: ["#0d9ddb", "#ed4436", "#666", "#333"], highlightColor: "#ed4436" }, bgov: su, market: { colors: ["#00c88a", "#ff415f", "var(--bg)", "#aaaaaa", "#888", "#444"], highlightColor: "#ff415f" }, communications: lu } };

    function uu(t) { return "url(#pattern-green-light".concat(t, ") var(--bg)") }

    function fu(t) { return "url(#pattern-green-dark".concat(t, ") var(--bg)") } var du = { business: Nc, "business-dark": jc, bizweek: Xc, "bizweek-dark": qc, green: Gc, "green-dark": Zc, citylab: Jc, "citylab-dark": eu, bnef: iu, "bnef-dark": ru, terminalX: Wc },
        hu = { business: Hc, "business-dark": Ic, citylab: tu, "citylab-dark": nu };

    function gu(t) { var e, n = {}; return ["line", "barline"].forEach((function(e) { n[e] = hu[t] || function(t, e) { if (!e) return null; var n = {};
                Object.keys(e).forEach((function(t) { n[t] = e[t].slice() })), "bizweek" === t ? (delete n[1][1], delete n[2][0], delete n.all[1], delete n.all[2]) : "terminal" === t ? n = Rc : (delete n[1][1], delete n[2][1], delete n[2][2], delete n[5][1], delete n[5][2], delete n[6][1], delete n[6][2], delete n.all[1], delete n.all[2]); return n[1] = n[1].filter((function(t) { return t })), n[2] = n[2].filter((function(t) { return t })), n[5] = n[5].filter((function(t) { return t })), n[6] = n[6].filter((function(t) { return t })), n.all = n.all.filter((function(t) { return t })), n }(t, du[t]) })), ["bar", "hbar", "stackedVbar", "stackedHbar", "area", "dumbbell", "horizontalDumbbell", "comparison"].forEach((function(e) { n[e] = du[t] })), ["pie"].forEach((function(e) { n[e] = function(t, e) { if (!e) return null; var n = {};
                Object.keys(e).forEach((function(t) { n[t] = e[t].slice() })), "green" === t ? Object.keys(Qc).forEach((function(t) { n[t] = n[t].slice(1).concat(Qc[t]) })) : "green-dark" === t && Object.keys(Kc).forEach((function(t) { n[t] = n[t].slice(1).concat(Kc[t]) })); return n }(t, du[t]) })), ["scatterPlot"].forEach((function(e) { n[e] = function(t, e) { if (!e) return null; if ("business" === t) return Vc; if ("business-dark" === t) return Uc; return e }(t, du[t]) })), n.default = null === (e = du[t]) || void 0 === e ? void 0 : e.all, n }

    function pu(t, e) { return au[t] || au.business }

    function vu(t, e, n) {
        (void 0 !== n && !Co(t[e], n) || void 0 === n && !(e in t)) && ga(t, e, n) } var mu, yu = function(t, e, n) { for (var i = -1, r = Object(t), o = n(t), a = o.length; a--;) { var s = o[mu ? a : ++i]; if (!1 === e(r[s], s, r)) break } return t },
        xu = yu; var bu = Function.prototype,
        $u = Object.prototype,
        wu = bu.toString,
        _u = $u.hasOwnProperty,
        ku = wu.call(Object);

    function Mu(t, e) { if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e] }

    function Su(t, e, n, i, r, o, a) { var s = Mu(t, n),
            l = Mu(e, n),
            c = a.get(l); if (c) vu(t, n, c);
        else { var u, f = o ? o(s, l, n + "", t, e, a) : void 0,
                d = void 0 === f; if (d) { var h = Ma(l),
                    g = !h && Ca(l),
                    p = !h && !g && Ra(l);
                f = l, h || g || p ? Ma(s) ? f = s : ya(u = s) && qa(u) ? f = rs(s) : g ? (d = !1, f = is(l, !0)) : p ? (d = !1, f = Ws(l, !0)) : f = [] : function(t) { if (!ya(t) || "[object Object]" != jo(t)) return !1; var e = fs(t); if (null === e) return !0; var n = _u.call(e, "constructor") && e.constructor; return "function" == typeof n && n instanceof n && wu.call(n) == ku }(l) || ka(l) ? (f = s, ka(s) ? f = function(t) { return ma(t, Ka(t)) }(s) : Io(s) && !Vo(s) || (f = Is(l))) : d = !1 } d && (a.set(l, f), r(f, l, i, o, a), a.delete(l)), vu(t, n, f) } }

    function Au(t, e, n, i, r) { t !== e && xu(e, (function(o, a) { if (r || (r = new fa), Io(o)) Su(t, e, a, n, Au, i, r);
            else { var s = i ? i(Mu(t, a), o, a + "", t, e, r) : void 0;
                void 0 === s && (s = o), vu(t, a, s) } }), Ka) }

    function Du(t) { return t }

    function Cu(t, e, n) { switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2]) } return t.apply(e, n) } var Eu = Math.max; var Ou = ha ? function(t, e) { return ha(t, "toString", { configurable: !0, enumerable: !1, value: (n = e, function() { return n }), writable: !0 }); var n } : Du,
        Tu = Ou,
        Pu = Date.now; var Bu, Lu, zu, Yu = (Bu = Tu, Lu = 0, zu = 0, function() { var t = Pu(),
                e = 16 - (t - zu); if (zu = t, e > 0) { if (++Lu >= 800) return arguments[0] } else Lu = 0; return Bu.apply(void 0, arguments) }),
        Fu = Yu;

    function Wu(t, e) { return Fu(function(t, e, n) { return e = Eu(void 0 === e ? t.length - 1 : e, 0),
                function() { for (var i = arguments, r = -1, o = Eu(i.length - e, 0), a = Array(o); ++r < o;) a[r] = i[e + r];
                    r = -1; for (var s = Array(e + 1); ++r < e;) s[r] = i[r]; return s[e] = n(a), Cu(t, this, s) } }(t, e, Du), t + "") }

    function Ru(t, e, n) { if (!Io(n)) return !1; var i = typeof e; return !!("number" == i ? qa(n) && Oa(e, n.length) : "string" == i && e in n) && Co(n[e], t) } var Nu, Hu = (Nu = function(t, e, n) { Au(t, e, n) }, Wu((function(t, e) { var n = -1,
                i = e.length,
                r = i > 1 ? e[i - 1] : void 0,
                o = i > 2 ? e[2] : void 0; for (r = Nu.length > 3 && "function" == typeof r ? (i--, r) : void 0, o && Ru(e[0], e[1], o) && (r = i < 3 ? void 0 : r, i = 1), t = Object(t); ++n < i;) { var a = e[n];
                a && Nu(t, a, n, r) } return t }))),
        ju = Hu,
        Iu = ["terminal", "coth", "opinion-dark", "green-dark", "bizweek-dark", "citylab-dark", "business-dark", "bnef-dark", "daybreak", "bi"],
        Vu = { gadfly: { renderAreaChart: !0 }, bizweek: { linearAxis: { tickLabelAlternate: !1 } }, coth: { columnWidthBreakpointMin: 20, columnWidthLongTextBreakpoint: 50, screenshotMinHeight: 340, ratioHeightOffset: !0 }, bi: { screenshotMinHeight: 385, layoutManager: { aspectDrivenHeight: !0 } }, green: { mobileBreakpoint: 480, linearAxis: { tickStepVertical: 180 }, layoutManager: { aspectRatio: "4:3", maxAspectHeight: 465 } }, "green-dark": { mobileBreakpoint: 480, linearAxis: { tickStepVertical: 180 }, layoutManager: { aspectRatio: "4:3", maxAspectRatioForTerminal: 2.25 } }, citylab: { mobileBreakpoint: 480, linearAxis: { tickStepVertical: 180 }, layoutManager: { aspectRatio: "4:3", maxAspectHeight: 465 } }, "citylab-dark": { mobileBreakpoint: 480, linearAxis: { tickStepVertical: 180 }, layoutManager: { aspectRatio: "4:3", maxAspectRatioForTerminal: 2.25 } } };

    function Uu(t, e) { return (!e.theme || e.theme === t.theme) && ((!t.originalTheme || t.theme === t.originalTheme) && (!t.config.original_theme || t.theme === t.config.original_theme)) }

    function Xu() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = e.theme || t.theme; return Iu.includes(n) } var qu = function(t) { return null },
        Gu = { gadfly: function(t, e) { var n = (parseInt("0x" + e.id) + 3) % 5;
                dl(t, "color-set-0", !1), dl(t, "color-set-1", !1), dl(t, "color-set-2", !1), dl(t, "color-set-3", !1), dl(t, "color-set-4", !1), dl(t, "color-set-".concat(n), !0) } }; var Zu = ["pie", "comparison"];

    function Qu(t, e, n) { var i = gu(e.theme),
            r = e.config.highlight_values,
            o = r && "pie" === e.chartType,
            a = n.colorSeriesKey || function(t, e) { var n = e ? t.data[0].length : t.data[0].length - 1;
                Zu.includes(t.chartType) && (n = t.data.length); return n > 6 ? "all" : n }(e, r),
            s = !1,
            l = null,
            c = null,
            u = 0;
        e.config.series_color_style && (u = Number(e.config.series_color_style)), null != n.colorSeries && (u = Number(n.colorSeries)), !n.colorVariableSet && i && e.data[0] && !o && i[e.chartType] && (s = !0, (l = (c = i[e.chartType])[a] || c.all) && function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]; if (!e) return; var r = {},
                o = function(t, e) { r[t] || (r[t] = e) };
            e.forEach((function(t, e) { "string" == typeof t ? o("color".concat(e + n), t) : (o("color".concat(e + n), t.color), o("stroke".concat(e + n), t.stroke)), i && e + n === 1 && (o("colorh", r.color1), t.stroke && o("strokeh", t.stroke)) })), t.seriesColors = r }(n, l[u], 0, r)); var f = rl("variant_color", e, n); return f && function(t, e, n) { var i = Xu(e, t) ? "dark" : "light",
                r = cu[i][n]; if (!r) return; var o = { fromColorVariantSelection: !0 },
                a = function(t, e) { o[t] || (o[t] = e) };
            r.colors.forEach((function(t, e) { a("color".concat(e), t) })), a("colorh", r.highlightColor), t.seriesColors = o }(n, e, f), n.seriesColorStyleSet = s, n.seriesColorStyles = l, n.editorHooks && n.editorHooks.colorSeries && n.editorHooks.colorSeries(l, u), l ? l[u] : null } var Ku = ["color0", "color1", "color2", "color3", "color4", "color5", "color6", "color7", "color8", "color9", "colorbg", "colorfg", "colorh", "stroke0", "stroke1", "stroke2", "stroke3", "stroke4", "stroke5", "stroke6", "stroke7", "stroke8", "stroke9", "strokeh"];

    function Ju(t) { if (t.seriesColors) return !0; var e = Ku.filter((function(e) { return null != t[e] })); return e.length > 0 }

    function tf(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; return Uu(t, n) || !0 === n.applyColorsOnAllThemes ? e.map((function(t, e) { var i = n["color".concat(e)],
                r = n["stroke".concat(e)]; return "string" == typeof t ? null != r ? { color: null != i ? i : t, stroke: r } : null != i ? i : t : "object" === xe(t) ? { color: null != i ? i : t.color, stroke: null != r ? r : t.stroke } : t })) : e }

    function ef(t) { return t.map((function(t) { return "object" === xe(t) ? t.color : t })) }

    function nf(t) { return t.map((function(t) { if ("object" === xe(t)) return t.stroke })) }

    function rf(t, e, n) { var i = Se(Se({}, n.seriesColors), n); if (!Uu(e, n) && !0 !== i.fromColorVariantSelection && !0 !== n.applyColorsOnAllThemes) return !1;
        Ku.forEach((function(n) { if (i[n]) { var r = i[n],
                    o = function(t) { if (-1 !== t.indexOf("gPattern")) { var e = Fc(t, "green").fileName; return "url(".concat(Yc(), "/patterns/green/").concat(e, ") repeat;") } return { "url(#gGradient1)": "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(20,235,30,1) 66%, rgba(20,235,30,1) 100%);", "url(#gGradient2)": "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(20,235,30,1) 66%, rgba(20,235,30,1) 100%);" } [t] }(n) || r,
                    a = i.theme || e.theme; if ("url(#" === r.substring(0, 5) && function(t, e) { if (function(t) { if (-1 !== t.indexOf("pattern-green")) { var e = Fc(t, "green"),
                                        n = e.fileName,
                                        i = e.bareKey; return '\n      <pattern id="'.concat(i, '" patternUnits="userSpaceOnUse" width="50" height="50">\n        <image xlink:href="').concat(Yc(), "/patterns/green/").concat(n, '" x="0" y="0" width="50" height="50" />\n      </pattern>\n    ') } return { "url(#gGradient1)": '\n    <linearGradient id="gGradient1" x1="0%" y1="0%" x2="0%" y2="100%">\n      <stop offset="0%" stop-color="var(--bg)"></stop>\n      <stop offset="80%" stop-color="#14eb1e"></stop>\n    </linearGradient>\n    <linearGradient id="gGradientHorizontal1" x1="0%" y1="0%" x2="100%" y2="0%">\n      <stop offset="0%" stop-color="var(--bg)"></stop>\n      <stop offset="80%" stop-color="#14eb1e"></stop>\n    </linearGradient>\n    ', "url(#gGradient2)": '\n    <linearGradient id="gGradient2" x1="0%" y1="0%" x2="0%" y2="100%">\n      <stop offset="0%" stop-color="var(--text)"></stop>\n      <stop offset="80%" stop-color="#14eb1e"></stop>\n    </linearGradient>\n    <linearGradient id="gGradientHorizontal2" x1="0%" y1="0%" x2="100%" y2="0%">\n      <stop offset="0%" stop-color="var(--text)"></stop>\n      <stop offset="80%" stop-color="#14eb1e"></stop>\n    </linearGradient>\n    ' } [t] }(e)) { var n = e.replace("url(", "").replace(")", ""); if (t.querySelector(n)) return; var i = hl(t.querySelector("svg"), "defs", "style-defs");
                            i.innerHTML = i(e) } }(t, r), "colorbg" === n) pl(function(t) { return document.querySelectorAll(t) }("body.toaster-iframe, body.framed-viewer"), "background", r), pl(t, "background", r), pl(t.querySelectorAll(".toaster-theme-".concat(a)), "background", r), pl(t.querySelectorAll(".pie-container.highlighted path"), "stroke", r), pl(t.querySelectorAll(".tooltip-label-box, .toaster-iframe, .logo"), "background-color", r), pl(t.querySelectorAll(".tooltip-valueline"), "color", r), pl(t.querySelectorAll(".tooltip-anchor, .axis-label-box > rect"), "fill", r), pl(t.querySelectorAll(".annotations text"), "text-shadow", "-1px -1px 0px ".concat(r, ", \n          -1px 1px 0px ").concat(r, ", \n          1px -1px 0px ").concat(r, ",\n          1px 1px 0px ").concat(r, ",\n          -2px -2px 0px ").concat(r, ",\n          -2px 2px 0px ").concat(r, ",\n          2px -2px 0px ").concat(r, ",\n          2px 2px 0px ").concat(r));
                else if ("colorfg" === n) { pl(t.querySelectorAll("h1, h2, a, th, .source, .logo, label, .tooltip-value, .title, .footnote, .label-bottom, .annotations-footer"), "color", r), pl(t.querySelectorAll(".tooltip-gridline, .tooltip-anchor, .grid line, rect.column"), "stroke", r), pl(t.querySelectorAll("text, text.column-label"), "fill", r), pl(t.querySelectorAll(".axis path.domain, .axis .tick > line, .zero-line, .label line, .annotations line"), "stroke", r); var s = t.querySelectorAll(".tooltip-label-box");
                    pl(s, "border-color", r), pl(s, "color", r), pl(t.querySelectorAll(".swatch"), "border-color", r) } else if ("colorh" === n) pl(t.querySelectorAll(".highlight, .f.highlight"), "fill", r), pl(t.querySelectorAll(".highlight-legend"), "background-color", r);
                else if ("strokeh" === n) pl(t.querySelectorAll(".highlight, .f.highlight"), "stroke", r), pl(t.querySelectorAll(".highlight-legend"), "border-color", r);
                else if (-1 !== n.indexOf("stroke")) { var l = Number(n.replace("stroke", "")),
                        c = t.querySelectorAll(".bg.series-".concat(l));
                    pl(c, "border-style", "solid"), pl(c, "border-width", "1px"), pl(c, "border-color", r), pl(t.querySelectorAll(".f.series-".concat(l, ", .bg.series-").concat(l, ", .s.series-").concat(l, ", .series-").concat(l, "-stroke")), "stroke", r) } else { var u = Number(n.replace("color", ""));
                    pl(t.querySelectorAll(".bg.series-".concat(u)), "background", o), pl(t.querySelectorAll(".c.series-".concat(u)), "color", r), pl(t.querySelectorAll(".s.series-".concat(u, ", .series-").concat(u, "-stroke")), "stroke", r), pl(t.querySelectorAll(".f.series-".concat(u, ", .line-area.series-").concat(u)), "fill", r) } } })) }

    function of (t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        Ju(n) && rf(t, e, n) } var af = "Array Iterator",
        sf = nt.set,
        lf = nt.getterFor(af),
        cf = Xi(Array, "Array", (function(t, e) { sf(this, { type: af, target: y(t), index: 0, kind: e }) }), (function() { var t = lf(this),
                e = t.target,
                n = t.kind,
                i = t.index++; return !e || i >= e.length ? (t.target = void 0, { value: void 0, done: !0 }) : "keys" == n ? { value: i, done: !1 } : "values" == n ? { value: e[i], done: !1 } : { value: [i, e[i]], done: !1 } }), "values");
    Cn.Arguments = Cn.Array, io("keys"), io("values"), io("entries"); var uf = f.f,
        ff = function(t) { return function(e) { for (var n, i = y(e), r = Ne(i), o = r.length, a = 0, l = []; o > a;) n = r[a++], s && !uf.call(i, n) || l.push(t ? [n, i[n]] : i[n]); return l } },
        df = { entries: ff(!0), values: ff(!1) },
        hf = df.entries;
    Pt({ target: "Object", stat: !0 }, { entries: function(t) { return hf(t) } }); var gf = function(t, e) { this.stopped = t, this.result = e },
        pf = function(t, e, n) { var i, r, o, a, s, l, c, u = n && n.that,
                f = !(!n || !n.AS_ENTRIES),
                d = !(!n || !n.IS_ITERATOR),
                h = !(!n || !n.INTERRUPTED),
                g = Lt(e, u, 1 + f + h),
                p = function(t) { return i && An(i), new gf(!0, t) },
                v = function(t) { return f ? (C(t), h ? g(t[0], t[1], p) : g(t[0], t[1])) : h ? g(t, p) : g(t) }; if (d) i = t;
            else { if ("function" != typeof(r = Rn(t))) throw TypeError("Target is not iterable"); if (Tn(r)) { for (o = 0, a = ft(t.length); a > o; o++)
                        if ((s = v(t[o])) && s instanceof gf) return s; return new gf(!1) } i = r.call(t) } for (l = i.next; !(c = l.call(i)).done;) { try { s = v(c.value) } catch (t) { throw An(i), t } if ("object" == typeof s && s && s instanceof gf) return s } return new gf(!1) };
    Pt({ target: "Object", stat: !0 }, { fromEntries: function(t) { var e = {}; return pf(t, (function(t, n) { Pn(e, t, n) }), { AS_ENTRIES: !0 }), e } });

    function vf(t) { return Js(t, 5) } var mf, yf, xf = { precision: ["chartOptions.decimalPlaces", "secondaryAxis.decimal_places"], tooltipPrecision: ["chartOptions.tooltipDecimals", "secondaryAxis.tooltip_decimals"], prefix: ["fields.:valField.unit_before", "!secondaryAxis.unit_before"], postfix: ["fields.:valField.unit_after", "!secondaryAxis.unit_after"], prefixSecondary: ["secondaryAxis.unit_before"], postfixSecondary: ["secondaryAxis.unit_after"], labelSecondary: ["secondaryAxis.label"], prefixPrimary: ["primaryAxis.unit_before"], postfixPrimary: ["primaryAxis.unit_after"], isPercent: ["fields.:valField.display_as", "secondaryAxis.display_as"], title: ["title"], subtitle: ["subtitle"], source: ["source"], footnote: ["footnote"], annotations: ["annotations"], chartType: ["chartType", "type"], bubblePrecision: ["config.bubbleLegend.precision"], bubblePrefix: ["config.bubbleLegend.prefix"], bubblePostfix: ["config.bubbleLegend.postfix"], bubbleLegendText: ["config.bubbleLegend.text"], numberFormat: ["secondaryAxis.display_as"], dateFormat: ["chartOptions.dateOutputFormat"], scaleStart: ["chartOptions.scaleStart"], scaleEnd: ["chartOptions.scaleEnd"], scaleStep: ["chartOptions.scaleStep"], automaticLabelDensity: ["primaryAxis.auto_density"], labelDensity: ["primaryAxis.label_density"], aspectRatio: ["chartOptions.aspectRatio"], userAnnotations: ["config.annotations"] },
        bf = Object.fromEntries(["dateFormat", "prefixPrimary", "postfixPrimary", "prefixSecondary", "postfixSecondary", "labelDensity", "automaticLabelDensity", "userAnnotations"].map((function(t) { return [t, xf[t]] })));

    function $f(t, e, n) { for (var i, r = t, o = e.split("."), a = t.config || {}, s = o.shift(); o.length && r; s = o.shift())
            if (s.startsWith(":")) { if (!a[i = s.substring(1)]) return n ? (r[a[i]] = {}, r[a[i]]) : null;
                r = r[a[i]] } else if (s.startsWith("!")) r[i = s.substring(1)] || (r[i] = {}), r = r[i];
        else { if (!r[s]) return n ? (r[s] = {}, r[s]) : null;
            r = r[s] } return r }

    function wf(t, e) { var n = e.split("."); return n[n.length - 1] }

    function _f() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = xf[e]; return i && i.length ? i.forEach((function(e) { var i = $f(t, e, !0),
                r = wf(0, e);
            i && (i[r] = n) })) : (t.config || (t.config = {}), t.config[e] = n), t }

    function kf(t) { var e = t,
            n = e.config,
            i = void 0 === n ? {} : n; return Object.keys(bf).forEach((function(t) { null != i[t] && _f(e, t, i[t]) })), e = function(t) { var e = t.config,
                n = void 0 === e ? {} : e; if (n.fieldPropertyOverrides) { t.fields = Be(t.fields); for (var i = 0, r = Object.entries(n.fieldPropertyOverrides); i < r.length; i++) { var o = Pe(r[i], 2),
                        a = o[0],
                        s = o[1];
                    t.fields[a] && (t.fields[a] = Se(Se({}, t.fields[a]), s)) } } return t }(e), e }

    function Mf(t, e, n, i) { if (t.config) { var r = t.config[e]; return null == r && (r = t.config[n]), null == r && (r = t.config[i]), r } } var Sf = /^\s*\+\d*\.?\d+\s*$/,
        Af = /^\s*[+-]?\d*\.?\d+([eE][-+]?\d+)?\s*$/,
        Df = "string",
        Cf = "numeric",
        Ef = "percent",
        Of = "year",
        Tf = "change",
        Pf = "date",
        Bf = "jumble";
    _e(mf = {}, Df, "String"), _e(mf, Cf, "Number"), _e(mf, Ef, "Percent"), _e(mf, Of, "Year"), _e(mf, "month", "Month"), _e(mf, "quarter", "Quarter"), _e(mf, Pf, "Date"), _e(mf, "categorical", "Categorical"), _e(mf, Bf, "Unknown"); var Lf = [Of, Pf, Tf, Cf, Ef],
        zf = { "%": Ef, Y: Df, M: Df, D: Df, K: Cf, ML: Cf, B: Cf, T: Cf },
        Yf = ["YYYY-MM-DD", "MM-DD-YYYY", "YYYY/MM/DD", "YYYY/M/D", "MM/DD/YYYY", "MM.DD.YYYY", "M/D/YYYY", "MM/DD/YY", "M/D/YY", "MMM 'YY", "MMM-YY", "MMMM 'YY", "MMM ’YY", "MMMM ’YY", "MMM D, 'YY", "MMM DD, 'YY", "MMM D, YYYY", "MMM DD, YYYY", "MMMM D, 'YY", "MMMM DD, 'YY", "MMMM D, YYYY", "MMMM DD, YYYY", "MMM D", "MMM. D", "MMM-D", "MMM-DD", "MMMM D", "MMM YYYY", "MMM. YYYY", "MMMM YYYY", "YYYY MMM", "YYYY MMM.", "YYYY MMMM", "DD-MMM", "YY-MMM", "DD-MMMM", "YY-MMMM", "MMMM-DD", "MMMM-YY"],
        Ff = ["MMM.", "MMM", "MMMM"],
        Wf = "hours",
        Rf = "days",
        Nf = "weeks",
        Hf = "months",
        jf = "quarters",
        If = "years",
        Vf = "decade",
        Uf = "multidecade",
        Xf = "century",
        qf = { minutes: "H:mm:ss", hours: "M/D H:mm", days: "M/D", weeks: "YYYY/M/D", months: "YYYY/M/D", years: "YYYY/M/D", decade: "YYYY/M/D", multidecade: "YYYY/M/D", century: "YYYY/M/D" },
        Gf = "YYYY",
        Zf = [Nf, Hf, If, Vf, Uf, Xf],
        Qf = "Yearly",
        Kf = "Quarterly",
        Jf = "Monthly",
        td = "Daily",
        ed = "DaysOfWeek",
        nd = "Intraday",
        id = "Categorical",
        rd = (_e(yf = {}, "%", 100), _e(yf, "K", 1e3), _e(yf, "M", 1e6), _e(yf, "B", 1e9), _e(yf, "T", 1e12), yf),
        od = { 10: "Tens", 100: "Hundreds", 1e3: "Thousands", 1e6: "Millions", 1e9: "Billions", 1e12: "Trillions" },
        ad = { 10: "", 100: "", 1e3: "K", 1e6: "M", 1e9: "B", 1e12: "T" },
        sd = 864e5,
        ld = { quarter_year: /Q[1234]\s\d{4}/, quarter_year_alt: /[1234]Q\s\d{4}/, year_quarter: /\d{4}\sQ[1234]/, year_quarter_alt: /\d{4}\s[1234]Q/, year_quarter_nospace: /\d{4}Q[1234]/, quarter_year_nospace: /Q[1234]\d{4}/, quarter_year_nospace2: /[1234]Q\d{4}/, quarter_dash_year: /Q[1234]-\d{4}/, year_dash_nospace: /\d{4}-Q[1234]/ },
        cd = { fy_year: /FY\s\d/ };

    function ud(t) { return ! function(t) { return null == t || "na" === t || "" === t || "-" === t }(t) }

    function fd(t, e) { if (t.forceType) return t.type = t.forceType, t; if (t.type && Lf.indexOf(t.type) >= 0) return t; if (t.displayFormat && zf[t.displayFormat]) return t.type = zf[t.displayFormat], t; var n = {}; if (t.data.filter(ud).forEach((function(t) { var e = function(t) { return Sf.exec(t) ? Tf : Af.exec(t) ? Cf : Df }(t);
                n[e] = n[e] || 0, n[e] += 1 })), 2 === (n = Object.keys(n).sort((function(t, e) { return n[e] - n[t] }))).length && -1 !== n.indexOf(Cf)) { if (-1 !== n.indexOf(Of)) return t.type = Cf, t; if (-1 !== n.indexOf(Tf)) return t.type = Cf, t.displayChange = !0, t } return t.type = n[0], n.length > 1 && (t.type = Bf, t.isJumbled = !0, t.mostCommonType = n[0], e.useCommonTypeOnJumbleField && (t.type = t.mostCommonType)), t }

    function dd(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = e.fieldDataKey,
            i = e.forceRebuild,
            r = void 0 !== i && i; if (t._makeDataExecuted && !r) return !0; if (!t.data || !t.data.length) return !1; if (!t.fields || !t.fields.length) return !1; if (t.fields.length < t.data[0].length)
            for (var o = 0; o <= t.data[0].length - t.fields.length; o++) t.fields.push({ name: "" }); var a, s = Ye(t.fields); try { for (s.s(); !(a = s.n()).done;)
                for (var l = a.value, c = 0, u = Object.keys(l); c < u.length; c++) { var f = u[c];
                    f.indexOf("_") >= 0 && (l[Wr(f)] = l[f]) } } catch (t) { s.e(t) } finally { s.f() } return t.fields.forEach((function(i, r) { if (i.index = r, i.data = n ? t.data.map((function(t) { return t[r] })) : t.data.map((function(t) { return t[n] })), i.data = t.data.map((function(t) { return i.dataKey ? t[i.dataKey] : t[r] })), fd(i, e), i.type !== Df) { var o = i.data.filter((function(t) { return !isNaN(Number(t)) && null !== t }));
                i.min = Math.min.apply(null, o), i.max = Math.max.apply(null, o) } })), t._makeDataExecuted = !0, !0 }

    function hd(t, e, n, i) { var r = ju({}, n),
            o = il(i, r);
        dd(r, Se(Se({}, o), {}, { forceRebuild: !0 })), kf(r); var a = function() { return null }; if (o.forceResize = function() { return a(t, o) }, !e) throw new Error("Chart Type not recognized");
        e.makeOptions && (o = e.makeOptions(o)); var s = r.theme,
            l = r.chartType || o.typeClass;
        o.themeMap && Vr(o.themeMap, r.theme) && (s = o.themeMap[r.theme]), o = function(t, e, n) { n = n || {}; var i = Vu[e] || {}; return ("coth" === t.originalTheme || t.config && "coth" === t.config.original_theme) && (i.ratioHeightOffset = !0), n.isDarkTheme = Iu.includes(e), ju(n, i) }(r, s, o); var c = "toaster-theme-" + s,
            u = "toaster-type-" + l;
        t.classList.forEach((function(e) { e.startsWith("toaster-theme") && t.classList.remove(e) })), t.classList.add("toaster-chart"), t.classList.add(c), t.classList.add(u), t.__data__ = r, (o.customScaffold || vl)(t, r, o); var f, d, h, g = function() { var n, i = e(t, r, o); return (Gu[n = s] ? Gu[n] : qu)(t, r, o),
                    function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        Qu(0, e, n), of (t, e, n) }(t, r, o),
                    function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.largeBreakpoint || ml,
                            i = e.mobileBreakpoint || yl;
                        dl(t, "large", t.offsetWidth > n), dl(t, "large", t.offsetWidth > n), dl(t, "phablet", t.offsetWidth <= n && (t.offsetWidth > i || e.preventMobileFont)), dl(t, "mobile", t.offsetWidth <= i && !e.preventMobileFont) }(t, o), i && i.postRender && !ol(r.id, "awaitingSecondaryRender") && i.postRender(), i },
            p = g();
        f = window._toasterWindowId || "", d = window._toasterIframeUseString || !1, h = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = sl(t.offsetHeight, 0) + sl(t.getBoundingClientRect().top, 0); if (!e.noResizePropagation && window.parent && cl() && (window.parent.postMessage({ sentinel: "amp", type: "embed-size", height: n }, "*"), "" !== f)) { var i = { method: "resize", windowId: f, height: n };
                    window.parent.postMessage(d ? JSON.stringify(i) : i, "*") } return t.setAttribute("phantomheight", n + "px"), f }, h.setWindowId = function(t) { f = t, window._toasterWindowId = t }, h.setUseString = function(t) { d = t, window._toasterIframeUseString = t },
            function(t, e, n) { Ur(window, "message.toaster", (function(i) { var r = i.data; if (r.substring) { e.setUseString(!0); try { r = JSON.parse(r) } catch (t) { return } } "register" === r.method && (e.setWindowId(r.windowId), e(t, n)) })) }(t, a = h, o),
            function(t, e, n, i, r) { var o = null,
                    a = null,
                    s = i.id,
                    l = r.resizeTimout,
                    c = void 0 === l ? 0 : l,
                    u = function(i) { var s = sl(t.offsetHeight, 0) + sl(t.getBoundingClientRect().top, 0),
                            l = window.innerWidth;
                        (i || r.alwaysResize || o !== l || a !== s) && (e(), n(t, r), o = l, a = s) };
                Ur(window, "resize.toaster-".concat(s), (function() { return setTimeout((function() { return u() }), c) })); var f = function() { r.addAfterRenderCallback ? r.addAfterRenderCallback((function() { return u("forceRender") })) : u("forceRender") };
                r.alwaysResize && f(); try { if (ol(s, "fontsHaveLoaded")) return;
                    ol(s, "awaitingSecondaryRender", !0), document.fonts && document.fonts.ready && "loading" === document.fonts.status ? document.fonts.ready.then((function() { ol(s, "fontsHaveLoaded", !0), ol(s, "awaitingSecondaryRender", !1), u("forceRender") })) : setTimeout((function() { ol(s, "fontsHaveLoaded", !0), ol(s, "awaitingSecondaryRender", !1), f() }), 1e3) } catch (t) { setTimeout((function() { ol(s, "fontsHaveLoaded", !0), ol(s, "awaitingSecondaryRender", !1), u("forceRender") }), 1e3) } }(t, g, a, r, o); var v = { render: g, onResize: a, destroy: function() { ll(0, 0, 0, r) } }; return p ? ke(p, v) : v }

    function gd(t) { var e = "localhost" === window.location.hostname;
        (t.options.debug || e) && (window.env = t) } rr("match", 1, (function(t, e, n) { return [function(e) { var n = m(this),
                i = null == e ? void 0 : e[t]; return void 0 !== i ? i.call(e, n) : new RegExp(e)[t](String(n)) }, function(t) { var i = n(e, t, this); if (i.done) return i.value; var r = C(t),
                o = String(this); if (!r.global) return cr(r, o); var a = r.unicode;
            r.lastIndex = 0; for (var s, l = [], c = 0; null !== (s = cr(r, o));) { var u = String(s[0]);
                l[c] = u, "" === u && (r.lastIndex = lr(o, ft(r.lastIndex), a)), c++ } return 0 === c ? null : l }] })); var pd = i((function(t, e) { t.exports = function() { var e, n;

            function i() { return e.apply(null, arguments) }

            function r(t) { return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t) }

            function o(t) { return null != t && "[object Object]" === Object.prototype.toString.call(t) }

            function a(t) { return void 0 === t }

            function s(t) { return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t) }

            function l(t) { return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t) }

            function c(t, e) { var n, i = []; for (n = 0; n < t.length; ++n) i.push(e(t[n], n)); return i }

            function u(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }

            function f(t, e) { for (var n in e) u(e, n) && (t[n] = e[n]); return u(e, "toString") && (t.toString = e.toString), u(e, "valueOf") && (t.valueOf = e.valueOf), t }

            function d(t, e, n, i) { return De(t, e, n, i, !0).utc() }

            function h(t) { return null == t._pf && (t._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), t._pf }

            function g(t) { if (null == t._isValid) { var e = h(t),
                        i = n.call(e.parsedDateParts, (function(t) { return null != t })),
                        r = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i); if (t._strict && (r = r && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return r;
                    t._isValid = r } return t._isValid }

            function p(t) { var e = d(NaN); return null != t ? f(h(e), t) : h(e).userInvalidated = !0, e } n = Array.prototype.some ? Array.prototype.some : function(t) { for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)
                    if (i in e && t.call(this, e[i], i, e)) return !0; return !1 }; var v = i.momentProperties = [];

            function m(t, e) { var n, i, r; if (a(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), a(e._i) || (t._i = e._i), a(e._f) || (t._f = e._f), a(e._l) || (t._l = e._l), a(e._strict) || (t._strict = e._strict), a(e._tzm) || (t._tzm = e._tzm), a(e._isUTC) || (t._isUTC = e._isUTC), a(e._offset) || (t._offset = e._offset), a(e._pf) || (t._pf = h(e)), a(e._locale) || (t._locale = e._locale), 0 < v.length)
                    for (n = 0; n < v.length; n++) a(r = e[i = v[n]]) || (t[i] = r); return t } var y = !1;

            function x(t) { m(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === y && (y = !0, i.updateOffset(this), y = !1) }

            function b(t) { return t instanceof x || null != t && null != t._isAMomentObject }

            function $(t) { return t < 0 ? Math.ceil(t) || 0 : Math.floor(t) }

            function w(t) { var e = +t,
                    n = 0; return 0 !== e && isFinite(e) && (n = $(e)), n }

            function _(t, e, n) { var i, r = Math.min(t.length, e.length),
                    o = Math.abs(t.length - e.length),
                    a = 0; for (i = 0; i < r; i++)(n && t[i] !== e[i] || !n && w(t[i]) !== w(e[i])) && a++; return a + o }

            function k(t) {!1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn }

            function M(t, e) { var n = !0; return f((function() { if (null != i.deprecationHandler && i.deprecationHandler(null, t), n) { for (var r, o = [], a = 0; a < arguments.length; a++) { if (r = "", "object" == typeof arguments[a]) { for (var s in r += "\n[" + a + "] ", arguments[0]) r += s + ": " + arguments[0][s] + ", ";
                                r = r.slice(0, -2) } else r = arguments[a];
                            o.push(r) } k(t + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), n = !1 } return e.apply(this, arguments) }), e) } var S, A = {};

            function D(t, e) { null != i.deprecationHandler && i.deprecationHandler(t, e), A[t] || (k(e), A[t] = !0) }

            function C(t) { return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t) }

            function E(t, e) { var n, i = f({}, t); for (n in e) u(e, n) && (o(t[n]) && o(e[n]) ? (i[n] = {}, f(i[n], t[n]), f(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]); for (n in t) u(t, n) && !u(e, n) && o(t[n]) && (i[n] = f({}, i[n])); return i }

            function O(t) { null != t && this.set(t) } i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, S = Object.keys ? Object.keys : function(t) { var e, n = []; for (e in t) u(t, e) && n.push(e); return n }; var T = {};

            function P(t, e) { var n = t.toLowerCase();
                T[n] = T[n + "s"] = T[e] = t }

            function B(t) { return "string" == typeof t ? T[t] || T[t.toLowerCase()] : void 0 }

            function L(t) { var e, n, i = {}; for (n in t) u(t, n) && (e = B(n)) && (i[e] = t[n]); return i } var z = {};

            function Y(t, e) { z[t] = e }

            function F(t, e, n) { var i = "" + Math.abs(t),
                    r = e - i.length; return (0 <= t ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i } var W = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                R = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                N = {},
                H = {};

            function j(t, e, n, i) { var r = i; "string" == typeof i && (r = function() { return this[i]() }), t && (H[t] = r), e && (H[e[0]] = function() { return F(r.apply(this, arguments), e[1], e[2]) }), n && (H[n] = function() { return this.localeData().ordinal(r.apply(this, arguments), t) }) }

            function I(t, e) { return t.isValid() ? (e = V(e, t.localeData()), N[e] = N[e] || function(t) { var e, n, i, r = t.match(W); for (e = 0, n = r.length; e < n; e++) H[r[e]] ? r[e] = H[r[e]] : r[e] = (i = r[e]).match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, ""); return function(e) { var i, o = ""; for (i = 0; i < n; i++) o += C(r[i]) ? r[i].call(e, t) : r[i]; return o } }(e), N[e](t)) : t.localeData().invalidDate() }

            function V(t, e) { var n = 5;

                function i(t) { return e.longDateFormat(t) || t } for (R.lastIndex = 0; 0 <= n && R.test(t);) t = t.replace(R, i), R.lastIndex = 0, n -= 1; return t } var U = /\d/,
                X = /\d\d/,
                q = /\d{3}/,
                G = /\d{4}/,
                Z = /[+-]?\d{6}/,
                Q = /\d\d?/,
                K = /\d\d\d\d?/,
                J = /\d\d\d\d\d\d?/,
                tt = /\d{1,3}/,
                et = /\d{1,4}/,
                nt = /[+-]?\d{1,6}/,
                it = /\d+/,
                rt = /[+-]?\d+/,
                ot = /Z|[+-]\d\d:?\d\d/gi,
                at = /Z|[+-]\d\d(?::?\d\d)?/gi,
                st = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                lt = {};

            function ct(t, e, n) { lt[t] = C(e) ? e : function(t, i) { return t && n ? n : e } }

            function ut(t, e) { return u(lt, t) ? lt[t](e._strict, e._locale) : new RegExp(ft(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(t, e, n, i, r) { return e || n || i || r })))) }

            function ft(t) { return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } var dt = {};

            function ht(t, e) { var n, i = e; for ("string" == typeof t && (t = [t]), s(e) && (i = function(t, n) { n[e] = w(t) }), n = 0; n < t.length; n++) dt[t[n]] = i }

            function gt(t, e) { ht(t, (function(t, n, i, r) { i._w = i._w || {}, e(t, i._w, i, r) })) } var pt = 0,
                vt = 1,
                mt = 2,
                yt = 3,
                xt = 4,
                bt = 5,
                $t = 6,
                wt = 7,
                _t = 8;

            function kt(t) { return Mt(t) ? 366 : 365 }

            function Mt(t) { return t % 4 == 0 && t % 100 != 0 || t % 400 == 0 } j("Y", 0, 0, (function() { var t = this.year(); return t <= 9999 ? "" + t : "+" + t })), j(0, ["YY", 2], 0, (function() { return this.year() % 100 })), j(0, ["YYYY", 4], 0, "year"), j(0, ["YYYYY", 5], 0, "year"), j(0, ["YYYYYY", 6, !0], 0, "year"), P("year", "y"), Y("year", 1), ct("Y", rt), ct("YY", Q, X), ct("YYYY", et, G), ct("YYYYY", nt, Z), ct("YYYYYY", nt, Z), ht(["YYYYY", "YYYYYY"], pt), ht("YYYY", (function(t, e) { e[pt] = 2 === t.length ? i.parseTwoDigitYear(t) : w(t) })), ht("YY", (function(t, e) { e[pt] = i.parseTwoDigitYear(t) })), ht("Y", (function(t, e) { e[pt] = parseInt(t, 10) })), i.parseTwoDigitYear = function(t) { return w(t) + (68 < w(t) ? 1900 : 2e3) }; var St, At = Dt("FullYear", !0);

            function Dt(t, e) { return function(n) { return null != n ? (Et(this, t, n), i.updateOffset(this, e), this) : Ct(this, t) } }

            function Ct(t, e) { return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN }

            function Et(t, e, n) { t.isValid() && !isNaN(n) && ("FullYear" === e && Mt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), Ot(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n)) }

            function Ot(t, e) { if (isNaN(t) || isNaN(e)) return NaN; var n, i = (e % (n = 12) + n) % n; return t += (e - i) / 12, 1 === i ? Mt(t) ? 29 : 28 : 31 - i % 7 % 2 } St = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) { var e; for (e = 0; e < this.length; ++e)
                    if (this[e] === t) return e; return -1 }, j("M", ["MM", 2], "Mo", (function() { return this.month() + 1 })), j("MMM", 0, 0, (function(t) { return this.localeData().monthsShort(this, t) })), j("MMMM", 0, 0, (function(t) { return this.localeData().months(this, t) })), P("month", "M"), Y("month", 8), ct("M", Q), ct("MM", Q, X), ct("MMM", (function(t, e) { return e.monthsShortRegex(t) })), ct("MMMM", (function(t, e) { return e.monthsRegex(t) })), ht(["M", "MM"], (function(t, e) { e[vt] = w(t) - 1 })), ht(["MMM", "MMMM"], (function(t, e, n, i) { var r = n._locale.monthsParse(t, i, n._strict);
                null != r ? e[vt] = r : h(n).invalidMonth = t })); var Tt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                Pt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                Bt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

            function Lt(t, e) { var n; if (!t.isValid()) return t; if ("string" == typeof e)
                    if (/^\d+$/.test(e)) e = w(e);
                    else if (!s(e = t.localeData().monthsParse(e))) return t; return n = Math.min(t.date(), Ot(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t }

            function zt(t) { return null != t ? (Lt(this, t), i.updateOffset(this, !0), this) : Ct(this, "Month") } var Yt = st,
                Ft = st;

            function Wt() {
                function t(t, e) { return e.length - t.length } var e, n, i = [],
                    r = [],
                    o = []; for (e = 0; e < 12; e++) n = d([2e3, e]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, "")); for (i.sort(t), r.sort(t), o.sort(t), e = 0; e < 12; e++) i[e] = ft(i[e]), r[e] = ft(r[e]); for (e = 0; e < 24; e++) o[e] = ft(o[e]);
                this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i") }

            function Rt(t) { var e; if (t < 100 && 0 <= t) { var n = Array.prototype.slice.call(arguments);
                    n[0] = t + 400, e = new Date(Date.UTC.apply(null, n)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t) } else e = new Date(Date.UTC.apply(null, arguments)); return e }

            function Nt(t, e, n) { var i = 7 + e - n; return -(7 + Rt(t, 0, i).getUTCDay() - e) % 7 + i - 1 }

            function Ht(t, e, n, i, r) { var o, a, s = 1 + 7 * (e - 1) + (7 + n - i) % 7 + Nt(t, i, r); return a = s <= 0 ? kt(o = t - 1) + s : s > kt(t) ? (o = t + 1, s - kt(t)) : (o = t, s), { year: o, dayOfYear: a } }

            function jt(t, e, n) { var i, r, o = Nt(t.year(), e, n),
                    a = Math.floor((t.dayOfYear() - o - 1) / 7) + 1; return a < 1 ? i = a + It(r = t.year() - 1, e, n) : a > It(t.year(), e, n) ? (i = a - It(t.year(), e, n), r = t.year() + 1) : (r = t.year(), i = a), { week: i, year: r } }

            function It(t, e, n) { var i = Nt(t, e, n),
                    r = Nt(t + 1, e, n); return (kt(t) - i + r) / 7 }

            function Vt(t, e) { return t.slice(e, 7).concat(t.slice(0, e)) } j("w", ["ww", 2], "wo", "week"), j("W", ["WW", 2], "Wo", "isoWeek"), P("week", "w"), P("isoWeek", "W"), Y("week", 5), Y("isoWeek", 5), ct("w", Q), ct("ww", Q, X), ct("W", Q), ct("WW", Q, X), gt(["w", "ww", "W", "WW"], (function(t, e, n, i) { e[i.substr(0, 1)] = w(t) })), j("d", 0, "do", "day"), j("dd", 0, 0, (function(t) { return this.localeData().weekdaysMin(this, t) })), j("ddd", 0, 0, (function(t) { return this.localeData().weekdaysShort(this, t) })), j("dddd", 0, 0, (function(t) { return this.localeData().weekdays(this, t) })), j("e", 0, 0, "weekday"), j("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), P("isoWeekday", "E"), Y("day", 11), Y("weekday", 11), Y("isoWeekday", 11), ct("d", Q), ct("e", Q), ct("E", Q), ct("dd", (function(t, e) { return e.weekdaysMinRegex(t) })), ct("ddd", (function(t, e) { return e.weekdaysShortRegex(t) })), ct("dddd", (function(t, e) { return e.weekdaysRegex(t) })), gt(["dd", "ddd", "dddd"], (function(t, e, n, i) { var r = n._locale.weekdaysParse(t, i, n._strict);
                null != r ? e.d = r : h(n).invalidWeekday = t })), gt(["d", "e", "E"], (function(t, e, n, i) { e[i] = w(t) })); var Ut = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                Xt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                qt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                Gt = st,
                Zt = st,
                Qt = st;

            function Kt() {
                function t(t, e) { return e.length - t.length } var e, n, i, r, o, a = [],
                    s = [],
                    l = [],
                    c = []; for (e = 0; e < 7; e++) n = d([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), a.push(i), s.push(r), l.push(o), c.push(i), c.push(r), c.push(o); for (a.sort(t), s.sort(t), l.sort(t), c.sort(t), e = 0; e < 7; e++) s[e] = ft(s[e]), l[e] = ft(l[e]), c[e] = ft(c[e]);
                this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i") }

            function Jt() { return this.hours() % 12 || 12 }

            function te(t, e) { j(t, 0, 0, (function() { return this.localeData().meridiem(this.hours(), this.minutes(), e) })) }

            function ee(t, e) { return e._meridiemParse } j("H", ["HH", 2], 0, "hour"), j("h", ["hh", 2], 0, Jt), j("k", ["kk", 2], 0, (function() { return this.hours() || 24 })), j("hmm", 0, 0, (function() { return "" + Jt.apply(this) + F(this.minutes(), 2) })), j("hmmss", 0, 0, (function() { return "" + Jt.apply(this) + F(this.minutes(), 2) + F(this.seconds(), 2) })), j("Hmm", 0, 0, (function() { return "" + this.hours() + F(this.minutes(), 2) })), j("Hmmss", 0, 0, (function() { return "" + this.hours() + F(this.minutes(), 2) + F(this.seconds(), 2) })), te("a", !0), te("A", !1), P("hour", "h"), Y("hour", 13), ct("a", ee), ct("A", ee), ct("H", Q), ct("h", Q), ct("k", Q), ct("HH", Q, X), ct("hh", Q, X), ct("kk", Q, X), ct("hmm", K), ct("hmmss", J), ct("Hmm", K), ct("Hmmss", J), ht(["H", "HH"], yt), ht(["k", "kk"], (function(t, e, n) { var i = w(t);
                e[yt] = 24 === i ? 0 : i })), ht(["a", "A"], (function(t, e, n) { n._isPm = n._locale.isPM(t), n._meridiem = t })), ht(["h", "hh"], (function(t, e, n) { e[yt] = w(t), h(n).bigHour = !0 })), ht("hmm", (function(t, e, n) { var i = t.length - 2;
                e[yt] = w(t.substr(0, i)), e[xt] = w(t.substr(i)), h(n).bigHour = !0 })), ht("hmmss", (function(t, e, n) { var i = t.length - 4,
                    r = t.length - 2;
                e[yt] = w(t.substr(0, i)), e[xt] = w(t.substr(i, 2)), e[bt] = w(t.substr(r)), h(n).bigHour = !0 })), ht("Hmm", (function(t, e, n) { var i = t.length - 2;
                e[yt] = w(t.substr(0, i)), e[xt] = w(t.substr(i)) })), ht("Hmmss", (function(t, e, n) { var i = t.length - 4,
                    r = t.length - 2;
                e[yt] = w(t.substr(0, i)), e[xt] = w(t.substr(i, 2)), e[bt] = w(t.substr(r)) })); var ne, ie = Dt("Hours", !0),
                re = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Pt, monthsShort: Bt, week: { dow: 0, doy: 6 }, weekdays: Ut, weekdaysMin: qt, weekdaysShort: Xt, meridiemParse: /[ap]\.?m?\.?/i },
                oe = {},
                ae = {};

            function se(t) { return t ? t.toLowerCase().replace("_", "-") : t }

            function le(e) { var n = null; if (!oe[e] && t && t.exports) try { n = ne._abbr,
                        function() { throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs") }(), ce(n) } catch (e) {}
                return oe[e] }

            function ce(t, e) { var n; return t && ((n = a(e) ? fe(t) : ue(t, e)) ? ne = n : "undefined" != typeof console && console.warn), ne._abbr }

            function ue(t, e) { if (null === e) return delete oe[t], null; var n, i = re; if (e.abbr = t, null != oe[t]) D("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = oe[t]._config;
                else if (null != e.parentLocale)
                    if (null != oe[e.parentLocale]) i = oe[e.parentLocale]._config;
                    else { if (null == (n = le(e.parentLocale))) return ae[e.parentLocale] || (ae[e.parentLocale] = []), ae[e.parentLocale].push({ name: t, config: e }), null;
                        i = n._config } return oe[t] = new O(E(i, e)), ae[t] && ae[t].forEach((function(t) { ue(t.name, t.config) })), ce(t), oe[t] }

            function fe(t) { var e; if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ne; if (!r(t)) { if (e = le(t)) return e;
                    t = [t] } return function(t) { for (var e, n, i, r, o = 0; o < t.length;) { for (e = (r = se(t[o]).split("-")).length, n = (n = se(t[o + 1])) ? n.split("-") : null; 0 < e;) { if (i = le(r.slice(0, e).join("-"))) return i; if (n && n.length >= e && _(r, n, !0) >= e - 1) break;
                            e-- } o++ } return ne }(t) }

            function de(t) { var e, n = t._a; return n && -2 === h(t).overflow && (e = n[vt] < 0 || 11 < n[vt] ? vt : n[mt] < 1 || n[mt] > Ot(n[pt], n[vt]) ? mt : n[yt] < 0 || 24 < n[yt] || 24 === n[yt] && (0 !== n[xt] || 0 !== n[bt] || 0 !== n[$t]) ? yt : n[xt] < 0 || 59 < n[xt] ? xt : n[bt] < 0 || 59 < n[bt] ? bt : n[$t] < 0 || 999 < n[$t] ? $t : -1, h(t)._overflowDayOfYear && (e < pt || mt < e) && (e = mt), h(t)._overflowWeeks && -1 === e && (e = wt), h(t)._overflowWeekday && -1 === e && (e = _t), h(t).overflow = e), t }

            function he(t, e, n) { return null != t ? t : null != e ? e : n }

            function ge(t) { var e, n, r, o, a, s = []; if (!t._d) { var l, c; for (l = t, c = new Date(i.now()), r = l._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()], t._w && null == t._a[mt] && null == t._a[vt] && function(t) { var e, n, i, r, o, a, s, l; if (null != (e = t._w).GG || null != e.W || null != e.E) o = 1, a = 4, n = he(e.GG, t._a[pt], jt(Ce(), 1, 4).year), i = he(e.W, 1), ((r = he(e.E, 1)) < 1 || 7 < r) && (l = !0);
                            else { o = t._locale._week.dow, a = t._locale._week.doy; var c = jt(Ce(), o, a);
                                n = he(e.gg, t._a[pt], c.year), i = he(e.w, c.week), null != e.d ? ((r = e.d) < 0 || 6 < r) && (l = !0) : null != e.e ? (r = e.e + o, (e.e < 0 || 6 < e.e) && (l = !0)) : r = o } i < 1 || i > It(n, o, a) ? h(t)._overflowWeeks = !0 : null != l ? h(t)._overflowWeekday = !0 : (s = Ht(n, i, r, o, a), t._a[pt] = s.year, t._dayOfYear = s.dayOfYear) }(t), null != t._dayOfYear && (a = he(t._a[pt], r[pt]), (t._dayOfYear > kt(a) || 0 === t._dayOfYear) && (h(t)._overflowDayOfYear = !0), n = Rt(a, 0, t._dayOfYear), t._a[vt] = n.getUTCMonth(), t._a[mt] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = s[e] = r[e]; for (; e < 7; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                    24 === t._a[yt] && 0 === t._a[xt] && 0 === t._a[bt] && 0 === t._a[$t] && (t._nextDay = !0, t._a[yt] = 0), t._d = (t._useUTC ? Rt : function(t, e, n, i, r, o, a) { var s; return t < 100 && 0 <= t ? (s = new Date(t + 400, e, n, i, r, o, a), isFinite(s.getFullYear()) && s.setFullYear(t)) : s = new Date(t, e, n, i, r, o, a), s }).apply(null, s), o = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[yt] = 24), t._w && void 0 !== t._w.d && t._w.d !== o && (h(t).weekdayMismatch = !0) } } var pe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                ve = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                me = /Z|[+-]\d\d(?::?\d\d)?/,
                ye = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                xe = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                be = /^\/?Date\((\-?\d+)/i;

            function $e(t) { var e, n, i, r, o, a, s = t._i,
                    l = pe.exec(s) || ve.exec(s); if (l) { for (h(t).iso = !0, e = 0, n = ye.length; e < n; e++)
                        if (ye[e][1].exec(l[1])) { r = ye[e][0], i = !1 !== ye[e][2]; break } if (null == r) return void(t._isValid = !1); if (l[3]) { for (e = 0, n = xe.length; e < n; e++)
                            if (xe[e][1].exec(l[3])) { o = (l[2] || " ") + xe[e][0]; break } if (null == o) return void(t._isValid = !1) } if (!i && null != o) return void(t._isValid = !1); if (l[4]) { if (!me.exec(l[4])) return void(t._isValid = !1);
                        a = "Z" } t._f = r + (o || "") + (a || ""), Se(t) } else t._isValid = !1 } var we = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

            function _e(t, e, n, i, r, o) { var a = [function(t) { var e = parseInt(t, 10); return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e }(t), Bt.indexOf(e), parseInt(n, 10), parseInt(i, 10), parseInt(r, 10)]; return o && a.push(parseInt(o, 10)), a } var ke = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };

            function Me(t) { var e, n, i, r = we.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")); if (r) { var o = _e(r[4], r[3], r[2], r[5], r[6], r[7]); if (n = o, i = t, (e = r[1]) && Xt.indexOf(e) !== new Date(n[0], n[1], n[2]).getDay() && (h(i).weekdayMismatch = !0, !(i._isValid = !1))) return;
                    t._a = o, t._tzm = function(t, e, n) { if (t) return ke[t]; if (e) return 0; var i = parseInt(n, 10),
                            r = i % 100; return (i - r) / 100 * 60 + r }(r[8], r[9], r[10]), t._d = Rt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), h(t).rfc2822 = !0 } else t._isValid = !1 }

            function Se(t) { if (t._f !== i.ISO_8601)
                    if (t._f !== i.RFC_2822) { t._a = [], h(t).empty = !0; var e, n, r, o, a, s, l, c, f = "" + t._i,
                            d = f.length,
                            g = 0; for (r = V(t._f, t._locale).match(W) || [], e = 0; e < r.length; e++) o = r[e], (n = (f.match(ut(o, t)) || [])[0]) && (0 < (a = f.substr(0, f.indexOf(n))).length && h(t).unusedInput.push(a), f = f.slice(f.indexOf(n) + n.length), g += n.length), H[o] ? (n ? h(t).empty = !1 : h(t).unusedTokens.push(o), s = o, c = t, null != (l = n) && u(dt, s) && dt[s](l, c._a, c, s)) : t._strict && !n && h(t).unusedTokens.push(o);
                        h(t).charsLeftOver = d - g, 0 < f.length && h(t).unusedInput.push(f), t._a[yt] <= 12 && !0 === h(t).bigHour && 0 < t._a[yt] && (h(t).bigHour = void 0), h(t).parsedDateParts = t._a.slice(0), h(t).meridiem = t._meridiem, t._a[yt] = function(t, e, n) { var i; return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : (null != t.isPM && ((i = t.isPM(n)) && e < 12 && (e += 12), i || 12 !== e || (e = 0)), e) }(t._locale, t._a[yt], t._meridiem), ge(t), de(t) } else Me(t);
                else $e(t) }

            function Ae(t) { var e, n, u, d, v = t._i,
                    y = t._f; return t._locale = t._locale || fe(t._l), null === v || void 0 === y && "" === v ? p({ nullInput: !0 }) : ("string" == typeof v && (t._i = v = t._locale.preparse(v)), b(v) ? new x(de(v)) : (l(v) ? t._d = v : r(y) ? function(t) { var e, n, i, r, o; if (0 === t._f.length) return h(t).invalidFormat = !0, t._d = new Date(NaN); for (r = 0; r < t._f.length; r++) o = 0, e = m({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[r], Se(e), g(e) && (o += h(e).charsLeftOver, o += 10 * h(e).unusedTokens.length, h(e).score = o, (null == i || o < i) && (i = o, n = e));
                    f(t, n || e) }(t) : y ? Se(t) : a(n = (e = t)._i) ? e._d = new Date(i.now()) : l(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? (u = e, null === (d = be.exec(u._i)) ? ($e(u), !1 === u._isValid && (delete u._isValid, Me(u), !1 === u._isValid && (delete u._isValid, i.createFromInputFallback(u)))) : u._d = new Date(+d[1])) : r(n) ? (e._a = c(n.slice(0), (function(t) { return parseInt(t, 10) })), ge(e)) : o(n) ? function(t) { if (!t._d) { var e = L(t._i);
                        t._a = c([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], (function(t) { return t && parseInt(t, 10) })), ge(t) } }(e) : s(n) ? e._d = new Date(n) : i.createFromInputFallback(e), g(t) || (t._d = null), t)) }

            function De(t, e, n, i, a) { var s, l = {}; return !0 !== n && !1 !== n || (i = n, n = void 0), (o(t) && function(t) { if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length; var e; for (e in t)
                        if (t.hasOwnProperty(e)) return !1; return !0 }(t) || r(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = n, l._i = t, l._f = e, l._strict = i, (s = new x(de(Ae(l))))._nextDay && (s.add(1, "d"), s._nextDay = void 0), s }

            function Ce(t, e, n, i) { return De(t, e, n, i, !1) } i.createFromInputFallback = M("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(t) { t._d = new Date(t._i + (t._useUTC ? " UTC" : "")) })), i.ISO_8601 = function() {}, i.RFC_2822 = function() {}; var Ee = M("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() { var t = Ce.apply(null, arguments); return this.isValid() && t.isValid() ? t < this ? this : t : p() })),
                Oe = M("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() { var t = Ce.apply(null, arguments); return this.isValid() && t.isValid() ? this < t ? this : t : p() }));

            function Te(t, e) { var n, i; if (1 === e.length && r(e[0]) && (e = e[0]), !e.length) return Ce(); for (n = e[0], i = 1; i < e.length; ++i) e[i].isValid() && !e[i][t](n) || (n = e[i]); return n } var Pe = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function Be(t) { var e = L(t),
                    n = e.year || 0,
                    i = e.quarter || 0,
                    r = e.month || 0,
                    o = e.week || e.isoWeek || 0,
                    a = e.day || 0,
                    s = e.hour || 0,
                    l = e.minute || 0,
                    c = e.second || 0,
                    u = e.millisecond || 0;
                this._isValid = function(t) { for (var e in t)
                        if (-1 === St.call(Pe, e) || null != t[e] && isNaN(t[e])) return !1; for (var n = !1, i = 0; i < Pe.length; ++i)
                        if (t[Pe[i]]) { if (n) return !1;
                            parseFloat(t[Pe[i]]) !== w(t[Pe[i]]) && (n = !0) } return !0 }(e), this._milliseconds = +u + 1e3 * c + 6e4 * l + 1e3 * s * 60 * 60, this._days = +a + 7 * o, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = fe(), this._bubble() }

            function Le(t) { return t instanceof Be }

            function ze(t) { return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t) }

            function Ye(t, e) { j(t, 0, 0, (function() { var t = this.utcOffset(),
                        n = "+"; return t < 0 && (t = -t, n = "-"), n + F(~~(t / 60), 2) + e + F(~~t % 60, 2) })) } Ye("Z", ":"), Ye("ZZ", ""), ct("Z", at), ct("ZZ", at), ht(["Z", "ZZ"], (function(t, e, n) { n._useUTC = !0, n._tzm = We(at, t) })); var Fe = /([\+\-]|\d\d)/gi;

            function We(t, e) { var n = (e || "").match(t); if (null === n) return null; var i = ((n[n.length - 1] || []) + "").match(Fe) || ["-", 0, 0],
                    r = 60 * i[1] + w(i[2]); return 0 === r ? 0 : "+" === i[0] ? r : -r }

            function Re(t, e) { var n, r; return e._isUTC ? (n = e.clone(), r = (b(t) || l(t) ? t.valueOf() : Ce(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), i.updateOffset(n, !1), n) : Ce(t).local() }

            function Ne(t) { return 15 * -Math.round(t._d.getTimezoneOffset() / 15) }

            function He() { return !!this.isValid() && this._isUTC && 0 === this._offset } i.updateOffset = function() {}; var je = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                Ie = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function Ve(t, e) { var n, i, r, o = t,
                    a = null; return Le(t) ? o = { ms: t._milliseconds, d: t._days, M: t._months } : s(t) ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (a = je.exec(t)) ? (n = "-" === a[1] ? -1 : 1, o = { y: 0, d: w(a[mt]) * n, h: w(a[yt]) * n, m: w(a[xt]) * n, s: w(a[bt]) * n, ms: w(ze(1e3 * a[$t])) * n }) : (a = Ie.exec(t)) ? (n = "-" === a[1] ? -1 : 1, o = { y: Ue(a[2], n), M: Ue(a[3], n), w: Ue(a[4], n), d: Ue(a[5], n), h: Ue(a[6], n), m: Ue(a[7], n), s: Ue(a[8], n) }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (r = function(t, e) { var n; return t.isValid() && e.isValid() ? (e = Re(e, t), t.isBefore(e) ? n = Xe(t, e) : ((n = Xe(e, t)).milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 } }(Ce(o.from), Ce(o.to)), (o = {}).ms = r.milliseconds, o.M = r.months), i = new Be(o), Le(t) && u(t, "_locale") && (i._locale = t._locale), i }

            function Ue(t, e) { var n = t && parseFloat(t.replace(",", ".")); return (isNaN(n) ? 0 : n) * e }

            function Xe(t, e) { var n = {}; return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n }

            function qe(t, e) { return function(n, i) { var r; return null === i || isNaN(+i) || (D(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = i, i = r), Ge(this, Ve(n = "string" == typeof n ? +n : n, i), t), this } }

            function Ge(t, e, n, r) { var o = e._milliseconds,
                    a = ze(e._days),
                    s = ze(e._months);
                t.isValid() && (r = null == r || r, s && Lt(t, Ct(t, "Month") + s * n), a && Et(t, "Date", Ct(t, "Date") + a * n), o && t._d.setTime(t._d.valueOf() + o * n), r && i.updateOffset(t, a || s)) } Ve.fn = Be.prototype, Ve.invalid = function() { return Ve(NaN) }; var Ze = qe(1, "add"),
                Qe = qe(-1, "subtract");

            function Ke(t, e) { var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                    i = t.clone().add(n, "months"); return -(n + (e - i < 0 ? (e - i) / (i - t.clone().add(n - 1, "months")) : (e - i) / (t.clone().add(n + 1, "months") - i))) || 0 }

            function Je(t) { var e; return void 0 === t ? this._locale._abbr : (null != (e = fe(t)) && (this._locale = e), this) } i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]"; var tn = M("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(t) { return void 0 === t ? this.localeData() : this.locale(t) }));

            function en() { return this._locale } var nn = 126227808e5;

            function rn(t, e) { return (t % e + e) % e }

            function on(t, e, n) { return t < 100 && 0 <= t ? new Date(t + 400, e, n) - nn : new Date(t, e, n).valueOf() }

            function an(t, e, n) { return t < 100 && 0 <= t ? Date.UTC(t + 400, e, n) - nn : Date.UTC(t, e, n) }

            function sn(t, e) { j(0, [t, t.length], 0, e) }

            function ln(t, e, n, i, r) { var o; return null == t ? jt(this, i, r).year : ((o = It(t, i, r)) < e && (e = o), function(t, e, n, i, r) { var o = Ht(t, e, n, i, r),
                        a = Rt(o.year, 0, o.dayOfYear); return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this }.call(this, t, e, n, i, r)) } j(0, ["gg", 2], 0, (function() { return this.weekYear() % 100 })), j(0, ["GG", 2], 0, (function() { return this.isoWeekYear() % 100 })), sn("gggg", "weekYear"), sn("ggggg", "weekYear"), sn("GGGG", "isoWeekYear"), sn("GGGGG", "isoWeekYear"), P("weekYear", "gg"), P("isoWeekYear", "GG"), Y("weekYear", 1), Y("isoWeekYear", 1), ct("G", rt), ct("g", rt), ct("GG", Q, X), ct("gg", Q, X), ct("GGGG", et, G), ct("gggg", et, G), ct("GGGGG", nt, Z), ct("ggggg", nt, Z), gt(["gggg", "ggggg", "GGGG", "GGGGG"], (function(t, e, n, i) { e[i.substr(0, 2)] = w(t) })), gt(["gg", "GG"], (function(t, e, n, r) { e[r] = i.parseTwoDigitYear(t) })), j("Q", 0, "Qo", "quarter"), P("quarter", "Q"), Y("quarter", 7), ct("Q", U), ht("Q", (function(t, e) { e[vt] = 3 * (w(t) - 1) })), j("D", ["DD", 2], "Do", "date"), P("date", "D"), Y("date", 9), ct("D", Q), ct("DD", Q, X), ct("Do", (function(t, e) { return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient })), ht(["D", "DD"], mt), ht("Do", (function(t, e) { e[mt] = w(t.match(Q)[0]) })); var cn = Dt("Date", !0);
            j("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), Y("dayOfYear", 4), ct("DDD", tt), ct("DDDD", q), ht(["DDD", "DDDD"], (function(t, e, n) { n._dayOfYear = w(t) })), j("m", ["mm", 2], 0, "minute"), P("minute", "m"), Y("minute", 14), ct("m", Q), ct("mm", Q, X), ht(["m", "mm"], xt); var un = Dt("Minutes", !1);
            j("s", ["ss", 2], 0, "second"), P("second", "s"), Y("second", 15), ct("s", Q), ct("ss", Q, X), ht(["s", "ss"], bt); var fn, dn = Dt("Seconds", !1); for (j("S", 0, 0, (function() { return ~~(this.millisecond() / 100) })), j(0, ["SS", 2], 0, (function() { return ~~(this.millisecond() / 10) })), j(0, ["SSS", 3], 0, "millisecond"), j(0, ["SSSS", 4], 0, (function() { return 10 * this.millisecond() })), j(0, ["SSSSS", 5], 0, (function() { return 100 * this.millisecond() })), j(0, ["SSSSSS", 6], 0, (function() { return 1e3 * this.millisecond() })), j(0, ["SSSSSSS", 7], 0, (function() { return 1e4 * this.millisecond() })), j(0, ["SSSSSSSS", 8], 0, (function() { return 1e5 * this.millisecond() })), j(0, ["SSSSSSSSS", 9], 0, (function() { return 1e6 * this.millisecond() })), P("millisecond", "ms"), Y("millisecond", 16), ct("S", tt, U), ct("SS", tt, X), ct("SSS", tt, q), fn = "SSSS"; fn.length <= 9; fn += "S") ct(fn, it);

            function hn(t, e) { e[$t] = w(1e3 * ("0." + t)) } for (fn = "S"; fn.length <= 9; fn += "S") ht(fn, hn); var gn = Dt("Milliseconds", !1);
            j("z", 0, 0, "zoneAbbr"), j("zz", 0, 0, "zoneName"); var pn = x.prototype;

            function vn(t) { return t } pn.add = Ze, pn.calendar = function(t, e) { var n = t || Ce(),
                    r = Re(n, this).startOf("day"),
                    o = i.calendarFormat(this, r) || "sameElse",
                    a = e && (C(e[o]) ? e[o].call(this, n) : e[o]); return this.format(a || this.localeData().calendar(o, this, Ce(n))) }, pn.clone = function() { return new x(this) }, pn.diff = function(t, e, n) { var i, r, o; if (!this.isValid()) return NaN; if (!(i = Re(t, this)).isValid()) return NaN; switch (r = 6e4 * (i.utcOffset() - this.utcOffset()), e = B(e)) {
                    case "year":
                        o = Ke(this, i) / 12; break;
                    case "month":
                        o = Ke(this, i); break;
                    case "quarter":
                        o = Ke(this, i) / 3; break;
                    case "second":
                        o = (this - i) / 1e3; break;
                    case "minute":
                        o = (this - i) / 6e4; break;
                    case "hour":
                        o = (this - i) / 36e5; break;
                    case "day":
                        o = (this - i - r) / 864e5; break;
                    case "week":
                        o = (this - i - r) / 6048e5; break;
                    default:
                        o = this - i } return n ? o : $(o) }, pn.endOf = function(t) { var e; if (void 0 === (t = B(t)) || "millisecond" === t || !this.isValid()) return this; var n = this._isUTC ? an : on; switch (t) {
                    case "year":
                        e = n(this.year() + 1, 0, 1) - 1; break;
                    case "quarter":
                        e = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1; break;
                    case "month":
                        e = n(this.year(), this.month() + 1, 1) - 1; break;
                    case "week":
                        e = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1; break;
                    case "isoWeek":
                        e = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1; break;
                    case "day":
                    case "date":
                        e = n(this.year(), this.month(), this.date() + 1) - 1; break;
                    case "hour":
                        e = this._d.valueOf(), e += 36e5 - rn(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1; break;
                    case "minute":
                        e = this._d.valueOf(), e += 6e4 - rn(e, 6e4) - 1; break;
                    case "second":
                        e = this._d.valueOf(), e += 1e3 - rn(e, 1e3) - 1 } return this._d.setTime(e), i.updateOffset(this, !0), this }, pn.format = function(t) { t || (t = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat); var e = I(this, t); return this.localeData().postformat(e) }, pn.from = function(t, e) { return this.isValid() && (b(t) && t.isValid() || Ce(t).isValid()) ? Ve({ to: this, from: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }, pn.fromNow = function(t) { return this.from(Ce(), t) }, pn.to = function(t, e) { return this.isValid() && (b(t) && t.isValid() || Ce(t).isValid()) ? Ve({ from: this, to: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }, pn.toNow = function(t) { return this.to(Ce(), t) }, pn.get = function(t) { return C(this[t = B(t)]) ? this[t]() : this }, pn.invalidAt = function() { return h(this).overflow }, pn.isAfter = function(t, e) { var n = b(t) ? t : Ce(t); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = B(e) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf()) }, pn.isBefore = function(t, e) { var n = b(t) ? t : Ce(t); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = B(e) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf()) }, pn.isBetween = function(t, e, n, i) { var r = b(t) ? t : Ce(t),
                    o = b(e) ? e : Ce(e); return !!(this.isValid() && r.isValid() && o.isValid()) && ("(" === (i = i || "()")[0] ? this.isAfter(r, n) : !this.isBefore(r, n)) && (")" === i[1] ? this.isBefore(o, n) : !this.isAfter(o, n)) }, pn.isSame = function(t, e) { var n, i = b(t) ? t : Ce(t); return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = B(e) || "millisecond") ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf())) }, pn.isSameOrAfter = function(t, e) { return this.isSame(t, e) || this.isAfter(t, e) }, pn.isSameOrBefore = function(t, e) { return this.isSame(t, e) || this.isBefore(t, e) }, pn.isValid = function() { return g(this) }, pn.lang = tn, pn.locale = Je, pn.localeData = en, pn.max = Oe, pn.min = Ee, pn.parsingFlags = function() { return f({}, h(this)) }, pn.set = function(t, e) { if ("object" == typeof t)
                    for (var n = function(t) { var e = []; for (var n in t) e.push({ unit: n, priority: z[n] }); return e.sort((function(t, e) { return t.priority - e.priority })), e }(t = L(t)), i = 0; i < n.length; i++) this[n[i].unit](t[n[i].unit]);
                else if (C(this[t = B(t)])) return this[t](e); return this }, pn.startOf = function(t) { var e; if (void 0 === (t = B(t)) || "millisecond" === t || !this.isValid()) return this; var n = this._isUTC ? an : on; switch (t) {
                    case "year":
                        e = n(this.year(), 0, 1); break;
                    case "quarter":
                        e = n(this.year(), this.month() - this.month() % 3, 1); break;
                    case "month":
                        e = n(this.year(), this.month(), 1); break;
                    case "week":
                        e = n(this.year(), this.month(), this.date() - this.weekday()); break;
                    case "isoWeek":
                        e = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1)); break;
                    case "day":
                    case "date":
                        e = n(this.year(), this.month(), this.date()); break;
                    case "hour":
                        e = this._d.valueOf(), e -= rn(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5); break;
                    case "minute":
                        e = this._d.valueOf(), e -= rn(e, 6e4); break;
                    case "second":
                        e = this._d.valueOf(), e -= rn(e, 1e3) } return this._d.setTime(e), i.updateOffset(this, !0), this }, pn.subtract = Qe, pn.toArray = function() { var t = this; return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()] }, pn.toObject = function() { var t = this; return { years: t.year(), months: t.month(), date: t.date(), hours: t.hours(), minutes: t.minutes(), seconds: t.seconds(), milliseconds: t.milliseconds() } }, pn.toDate = function() { return new Date(this.valueOf()) }, pn.toISOString = function(t) { if (!this.isValid()) return null; var e = !0 !== t,
                    n = e ? this.clone().utc() : this; return n.year() < 0 || 9999 < n.year() ? I(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : C(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", I(n, "Z")) : I(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") }, pn.inspect = function() { if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)"; var t = "moment",
                    e = "";
                this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z"); var n = "[" + t + '("]',
                    i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    r = e + '[")]'; return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + r) }, pn.toJSON = function() { return this.isValid() ? this.toISOString() : null }, pn.toString = function() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, pn.unix = function() { return Math.floor(this.valueOf() / 1e3) }, pn.valueOf = function() { return this._d.valueOf() - 6e4 * (this._offset || 0) }, pn.creationData = function() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, pn.year = At, pn.isLeapYear = function() { return Mt(this.year()) }, pn.weekYear = function(t) { return ln.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, pn.isoWeekYear = function(t) { return ln.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4) }, pn.quarter = pn.quarters = function(t) { return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3) }, pn.month = zt, pn.daysInMonth = function() { return Ot(this.year(), this.month()) }, pn.week = pn.weeks = function(t) { var e = this.localeData().week(this); return null == t ? e : this.add(7 * (t - e), "d") }, pn.isoWeek = pn.isoWeeks = function(t) { var e = jt(this, 1, 4).week; return null == t ? e : this.add(7 * (t - e), "d") }, pn.weeksInYear = function() { var t = this.localeData()._week; return It(this.year(), t.dow, t.doy) }, pn.isoWeeksInYear = function() { return It(this.year(), 1, 4) }, pn.date = cn, pn.day = pn.days = function(t) { if (!this.isValid()) return null != t ? this : NaN; var e, n, i = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != t ? (e = t, n = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = n.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - i, "d")) : i }, pn.weekday = function(t) { if (!this.isValid()) return null != t ? this : NaN; var e = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == t ? e : this.add(t - e, "d") }, pn.isoWeekday = function(t) { if (!this.isValid()) return null != t ? this : NaN; if (null == t) return this.day() || 7; var e, n, i = (e = t, n = this.localeData(), "string" == typeof e ? n.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e); return this.day(this.day() % 7 ? i : i - 7) }, pn.dayOfYear = function(t) { var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == t ? e : this.add(t - e, "d") }, pn.hour = pn.hours = ie, pn.minute = pn.minutes = un, pn.second = pn.seconds = dn, pn.millisecond = pn.milliseconds = gn, pn.utcOffset = function(t, e, n) { var r, o = this._offset || 0; if (!this.isValid()) return null != t ? this : NaN; if (null == t) return this._isUTC ? o : Ne(this); if ("string" == typeof t) { if (null === (t = We(at, t))) return this } else Math.abs(t) < 16 && !n && (t *= 60); return !this._isUTC && e && (r = Ne(this)), this._offset = t, this._isUTC = !0, null != r && this.add(r, "m"), o !== t && (!e || this._changeInProgress ? Ge(this, Ve(t - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this }, pn.utc = function(t) { return this.utcOffset(0, t) }, pn.local = function(t) { return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ne(this), "m")), this }, pn.parseZone = function() { if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) { var t = We(ot, this._i);
                    null != t ? this.utcOffset(t) : this.utcOffset(0, !0) } return this }, pn.hasAlignedHourOffset = function(t) { return !!this.isValid() && (t = t ? Ce(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0) }, pn.isDST = function() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, pn.isLocal = function() { return !!this.isValid() && !this._isUTC }, pn.isUtcOffset = function() { return !!this.isValid() && this._isUTC }, pn.isUtc = He, pn.isUTC = He, pn.zoneAbbr = function() { return this._isUTC ? "UTC" : "" }, pn.zoneName = function() { return this._isUTC ? "Coordinated Universal Time" : "" }, pn.dates = M("dates accessor is deprecated. Use date instead.", cn), pn.months = M("months accessor is deprecated. Use month instead", zt), pn.years = M("years accessor is deprecated. Use year instead", At), pn.zone = M("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(t, e) { return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset() })), pn.isDSTShifted = M("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() { if (!a(this._isDSTShifted)) return this._isDSTShifted; var t = {}; if (m(t, this), (t = Ae(t))._a) { var e = t._isUTC ? d(t._a) : Ce(t._a);
                    this._isDSTShifted = this.isValid() && 0 < _(t._a, e.toArray()) } else this._isDSTShifted = !1; return this._isDSTShifted })); var mn = O.prototype;

            function yn(t, e, n, i) { var r = fe(),
                    o = d().set(i, e); return r[n](o, t) }

            function xn(t, e, n) { if (s(t) && (e = t, t = void 0), t = t || "", null != e) return yn(t, e, n, "month"); var i, r = []; for (i = 0; i < 12; i++) r[i] = yn(t, i, n, "month"); return r }

            function bn(t, e, n, i) { "boolean" == typeof t ? s(e) && (n = e, e = void 0) : (e = t, t = !1, s(n = e) && (n = e, e = void 0)), e = e || ""; var r, o = fe(),
                    a = t ? o._week.dow : 0; if (null != n) return yn(e, (n + a) % 7, i, "day"); var l = []; for (r = 0; r < 7; r++) l[r] = yn(e, (r + a) % 7, i, "day"); return l } mn.calendar = function(t, e, n) { var i = this._calendar[t] || this._calendar.sameElse; return C(i) ? i.call(e, n) : i }, mn.longDateFormat = function(t) { var e = this._longDateFormat[t],
                    n = this._longDateFormat[t.toUpperCase()]; return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, (function(t) { return t.slice(1) })), this._longDateFormat[t]) }, mn.invalidDate = function() { return this._invalidDate }, mn.ordinal = function(t) { return this._ordinal.replace("%d", t) }, mn.preparse = vn, mn.postformat = vn, mn.relativeTime = function(t, e, n, i) { var r = this._relativeTime[n]; return C(r) ? r(t, e, n, i) : r.replace(/%d/i, t) }, mn.pastFuture = function(t, e) { var n = this._relativeTime[0 < t ? "future" : "past"]; return C(n) ? n(e) : n.replace(/%s/i, e) }, mn.set = function(t) { var e, n; for (n in t) C(e = t[n]) ? this[n] = e : this["_" + n] = e;
                this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source) }, mn.months = function(t, e) { return t ? r(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Tt).test(e) ? "format" : "standalone"][t.month()] : r(this._months) ? this._months : this._months.standalone }, mn.monthsShort = function(t, e) { return t ? r(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Tt.test(e) ? "format" : "standalone"][t.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, mn.monthsParse = function(t, e, n) { var i, r, o; if (this._monthsParseExact) return function(t, e, n) { var i, r, o, a = t.toLocaleLowerCase(); if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) o = d([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase(); return n ? "MMM" === e ? -1 !== (r = St.call(this._shortMonthsParse, a)) ? r : null : -1 !== (r = St.call(this._longMonthsParse, a)) ? r : null : "MMM" === e ? -1 !== (r = St.call(this._shortMonthsParse, a)) || -1 !== (r = St.call(this._longMonthsParse, a)) ? r : null : -1 !== (r = St.call(this._longMonthsParse, a)) || -1 !== (r = St.call(this._shortMonthsParse, a)) ? r : null }.call(this, t, e, n); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) { if (r = d([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i; if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i; if (!n && this._monthsParse[i].test(t)) return i } }, mn.monthsRegex = function(t) { return this._monthsParseExact ? (u(this, "_monthsRegex") || Wt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = Ft), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex) }, mn.monthsShortRegex = function(t) { return this._monthsParseExact ? (u(this, "_monthsRegex") || Wt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = Yt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex) }, mn.week = function(t) { return jt(t, this._week.dow, this._week.doy).week }, mn.firstDayOfYear = function() { return this._week.doy }, mn.firstDayOfWeek = function() { return this._week.dow }, mn.weekdays = function(t, e) { var n = r(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(e) ? "format" : "standalone"]; return !0 === t ? Vt(n, this._week.dow) : t ? n[t.day()] : n }, mn.weekdaysMin = function(t) { return !0 === t ? Vt(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin }, mn.weekdaysShort = function(t) { return !0 === t ? Vt(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort }, mn.weekdaysParse = function(t, e, n) { var i, r, o; if (this._weekdaysParseExact) return function(t, e, n) { var i, r, o, a = t.toLocaleLowerCase(); if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) o = d([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase(); return n ? "dddd" === e ? -1 !== (r = St.call(this._weekdaysParse, a)) ? r : null : "ddd" === e ? -1 !== (r = St.call(this._shortWeekdaysParse, a)) ? r : null : -1 !== (r = St.call(this._minWeekdaysParse, a)) ? r : null : "dddd" === e ? -1 !== (r = St.call(this._weekdaysParse, a)) || -1 !== (r = St.call(this._shortWeekdaysParse, a)) || -1 !== (r = St.call(this._minWeekdaysParse, a)) ? r : null : "ddd" === e ? -1 !== (r = St.call(this._shortWeekdaysParse, a)) || -1 !== (r = St.call(this._weekdaysParse, a)) || -1 !== (r = St.call(this._minWeekdaysParse, a)) ? r : null : -1 !== (r = St.call(this._minWeekdaysParse, a)) || -1 !== (r = St.call(this._weekdaysParse, a)) || -1 !== (r = St.call(this._shortWeekdaysParse, a)) ? r : null }.call(this, t, e, n); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) { if (r = d([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i; if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i; if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i; if (!n && this._weekdaysParse[i].test(t)) return i } }, mn.weekdaysRegex = function(t) { return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Kt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = Gt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex) }, mn.weekdaysShortRegex = function(t) { return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Kt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Zt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, mn.weekdaysMinRegex = function(t) { return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Kt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, mn.isPM = function(t) { return "p" === (t + "").toLowerCase().charAt(0) }, mn.meridiem = function(t, e, n) { return 11 < t ? n ? "pm" : "PM" : n ? "am" : "AM" }, ce("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(t) { var e = t % 10; return t + (1 === w(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th") } }), i.lang = M("moment.lang is deprecated. Use moment.locale instead.", ce), i.langData = M("moment.langData is deprecated. Use moment.localeData instead.", fe); var $n = Math.abs;

            function wn(t, e, n, i) { var r = Ve(e, n); return t._milliseconds += i * r._milliseconds, t._days += i * r._days, t._months += i * r._months, t._bubble() }

            function _n(t) { return t < 0 ? Math.floor(t) : Math.ceil(t) }

            function kn(t) { return 4800 * t / 146097 }

            function Mn(t) { return 146097 * t / 4800 }

            function Sn(t) { return function() { return this.as(t) } } var An = Sn("ms"),
                Dn = Sn("s"),
                Cn = Sn("m"),
                En = Sn("h"),
                On = Sn("d"),
                Tn = Sn("w"),
                Pn = Sn("M"),
                Bn = Sn("Q"),
                Ln = Sn("y");

            function zn(t) { return function() { return this.isValid() ? this._data[t] : NaN } } var Yn = zn("milliseconds"),
                Fn = zn("seconds"),
                Wn = zn("minutes"),
                Rn = zn("hours"),
                Nn = zn("days"),
                Hn = zn("months"),
                jn = zn("years"),
                In = Math.round,
                Vn = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
                Un = Math.abs;

            function Xn(t) { return (0 < t) - (t < 0) || +t }

            function qn() { if (!this.isValid()) return this.localeData().invalidDate(); var t, e, n = Un(this._milliseconds) / 1e3,
                    i = Un(this._days),
                    r = Un(this._months);
                e = $((t = $(n / 60)) / 60), n %= 60, t %= 60; var o = $(r / 12),
                    a = r %= 12,
                    s = i,
                    l = e,
                    c = t,
                    u = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                    f = this.asSeconds(); if (!f) return "P0D"; var d = f < 0 ? "-" : "",
                    h = Xn(this._months) !== Xn(f) ? "-" : "",
                    g = Xn(this._days) !== Xn(f) ? "-" : "",
                    p = Xn(this._milliseconds) !== Xn(f) ? "-" : ""; return d + "P" + (o ? h + o + "Y" : "") + (a ? h + a + "M" : "") + (s ? g + s + "D" : "") + (l || c || u ? "T" : "") + (l ? p + l + "H" : "") + (c ? p + c + "M" : "") + (u ? p + u + "S" : "") } var Gn = Be.prototype; return Gn.isValid = function() { return this._isValid }, Gn.abs = function() { var t = this._data; return this._milliseconds = $n(this._milliseconds), this._days = $n(this._days), this._months = $n(this._months), t.milliseconds = $n(t.milliseconds), t.seconds = $n(t.seconds), t.minutes = $n(t.minutes), t.hours = $n(t.hours), t.months = $n(t.months), t.years = $n(t.years), this }, Gn.add = function(t, e) { return wn(this, t, e, 1) }, Gn.subtract = function(t, e) { return wn(this, t, e, -1) }, Gn.as = function(t) { if (!this.isValid()) return NaN; var e, n, i = this._milliseconds; if ("month" === (t = B(t)) || "quarter" === t || "year" === t) switch (e = this._days + i / 864e5, n = this._months + kn(e), t) {
                    case "month":
                        return n;
                    case "quarter":
                        return n / 3;
                    case "year":
                        return n / 12 } else switch (e = this._days + Math.round(Mn(this._months)), t) {
                    case "week":
                        return e / 7 + i / 6048e5;
                    case "day":
                        return e + i / 864e5;
                    case "hour":
                        return 24 * e + i / 36e5;
                    case "minute":
                        return 1440 * e + i / 6e4;
                    case "second":
                        return 86400 * e + i / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * e) + i;
                    default:
                        throw new Error("Unknown unit " + t) } }, Gn.asMilliseconds = An, Gn.asSeconds = Dn, Gn.asMinutes = Cn, Gn.asHours = En, Gn.asDays = On, Gn.asWeeks = Tn, Gn.asMonths = Pn, Gn.asQuarters = Bn, Gn.asYears = Ln, Gn.valueOf = function() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12) : NaN }, Gn._bubble = function() { var t, e, n, i, r, o = this._milliseconds,
                    a = this._days,
                    s = this._months,
                    l = this._data; return 0 <= o && 0 <= a && 0 <= s || o <= 0 && a <= 0 && s <= 0 || (o += 864e5 * _n(Mn(s) + a), s = a = 0), l.milliseconds = o % 1e3, t = $(o / 1e3), l.seconds = t % 60, e = $(t / 60), l.minutes = e % 60, n = $(e / 60), l.hours = n % 24, s += r = $(kn(a += $(n / 24))), a -= _n(Mn(r)), i = $(s / 12), s %= 12, l.days = a, l.months = s, l.years = i, this }, Gn.clone = function() { return Ve(this) }, Gn.get = function(t) { return t = B(t), this.isValid() ? this[t + "s"]() : NaN }, Gn.milliseconds = Yn, Gn.seconds = Fn, Gn.minutes = Wn, Gn.hours = Rn, Gn.days = Nn, Gn.weeks = function() { return $(this.days() / 7) }, Gn.months = Hn, Gn.years = jn, Gn.humanize = function(t) { if (!this.isValid()) return this.localeData().invalidDate(); var e, n, i, r, o, a, s, l, c, u, f, d = this.localeData(),
                    h = (n = !t, i = d, r = Ve(e = this).abs(), o = In(r.as("s")), a = In(r.as("m")), s = In(r.as("h")), l = In(r.as("d")), c = In(r.as("M")), u = In(r.as("y")), (f = o <= Vn.ss && ["s", o] || o < Vn.s && ["ss", o] || a <= 1 && ["m"] || a < Vn.m && ["mm", a] || s <= 1 && ["h"] || s < Vn.h && ["hh", s] || l <= 1 && ["d"] || l < Vn.d && ["dd", l] || c <= 1 && ["M"] || c < Vn.M && ["MM", c] || u <= 1 && ["y"] || ["yy", u])[2] = n, f[3] = 0 < +e, f[4] = i, function(t, e, n, i, r) { return r.relativeTime(e || 1, !!n, t, i) }.apply(null, f)); return t && (h = d.pastFuture(+this, h)), d.postformat(h) }, Gn.toISOString = qn, Gn.toString = qn, Gn.toJSON = qn, Gn.locale = Je, Gn.localeData = en, Gn.toIsoString = M("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", qn), Gn.lang = tn, j("X", 0, 0, "unix"), j("x", 0, 0, "valueOf"), ct("x", rt), ct("X", /[+-]?\d+(\.\d{1,3})?/), ht("X", (function(t, e, n) { n._d = new Date(1e3 * parseFloat(t, 10)) })), ht("x", (function(t, e, n) { n._d = new Date(w(t)) })), i.version = "2.24.0", e = Ce, i.fn = pn, i.min = function() { return Te("isBefore", [].slice.call(arguments, 0)) }, i.max = function() { return Te("isAfter", [].slice.call(arguments, 0)) }, i.now = function() { return Date.now ? Date.now() : +new Date }, i.utc = d, i.unix = function(t) { return Ce(1e3 * t) }, i.months = function(t, e) { return xn(t, e, "months") }, i.isDate = l, i.locale = ce, i.invalid = p, i.duration = Ve, i.isMoment = b, i.weekdays = function(t, e, n) { return bn(t, e, n, "weekdays") }, i.parseZone = function() { return Ce.apply(null, arguments).parseZone() }, i.localeData = fe, i.isDuration = Le, i.monthsShort = function(t, e) { return xn(t, e, "monthsShort") }, i.weekdaysMin = function(t, e, n) { return bn(t, e, n, "weekdaysMin") }, i.defineLocale = ue, i.updateLocale = function(t, e) { if (null != e) { var n, i, r = re;
                    null != (i = le(t)) && (r = i._config), (n = new O(e = E(r, e))).parentLocale = oe[t], oe[t] = n, ce(t) } else null != oe[t] && (null != oe[t].parentLocale ? oe[t] = oe[t].parentLocale : null != oe[t] && delete oe[t]); return oe[t] }, i.locales = function() { return S(oe) }, i.weekdaysShort = function(t, e, n) { return bn(t, e, n, "weekdaysShort") }, i.normalizeUnits = B, i.relativeTimeRounding = function(t) { return void 0 === t ? In : "function" == typeof t && (In = t, !0) }, i.relativeTimeThreshold = function(t, e) { return void 0 !== Vn[t] && (void 0 === e ? Vn[t] : (Vn[t] = e, "s" === t && (Vn.ss = e - 1), !0)) }, i.calendarFormat = function(t, e) { var n = t.diff(e, "days", !0); return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse" }, i.prototype = pn, i.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, i }() }));

    function vd(t) { var e = null; return Object.keys(ld).forEach((function(n) { e || ld[n].test(t) && (e = ld[n]) })), e }

    function md(t) { var e = yd(t); return function(t) { var n = Pe(e(t), 2),
                i = n[0],
                r = n[1]; return _d(Date.UTC(i, 1 + 3 * (r - 1), 1)) } }

    function yd(t) { var e = vd(Nr(t.data)); return function(t) { if (null === t) return t; if (!t.split) return t; var n, i; if (e === ld.quarter_year || e === ld.quarter_year_alt) { var r = Pe(t.split(" "), 2);
                i = r[0], n = r[1] } else if (e === ld.quarter_dash_year) { var o = Pe(t.split("-"), 2);
                i = o[0], n = o[1] } else if (e === ld.quarter_year_nospace) i = t.slice(1, 2), n = t.slice(2);
            else if (e === ld.quarter_year_nospace2) { var a = Pe(t.replace(/\s|-|'/g, "").split("Q"), 2);
                i = a[0], n = a[1] } else if (e === ld.year_quarter || e === ld.year_quarter_nospace || e === ld.year_dash_quarter) { var s = Pe(t.replace(/\s|-|'/g, "").split("Q"), 2);
                n = s[0], i = s[1] } return i = i || "", n = (n = n || "").replace("'", ""), i = i.replace("Q", ""), 2 === n.length && (n = Number(n) < 50 ? "20" + n : "19" + n), [Number(n), Number(i)] } }

    function xd(t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; return $d(e ? t.fields[0] : t.fields[1], n) }

    function bd(t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = e ? t.fields[0] : t.fields[1],
            r = $d(i, n); return function(t) { return r(i.data[t]) } }

    function $d(t, e) { return t && t.taxonomy && t.taxonomy.isQuarters ? function(t) { return t } : t && t.taxonomy && t.taxonomy.isDate && !e ? wd(t) : function(t) { return t } }

    function wd(t) { return t && t.taxonomy && t.taxonomy.isQuarters ? md(t) : function(e) { return _d(e, t) } }

    function _d(t, e, n) { var i = 0; if (e && e.taxonomy && (i = e.taxonomy.timeZoneOffset || 0), e && e.taxonomy && e.taxonomy.customFormatter) { var r = pd.utc(t, e.taxonomy.customFormatter).utcOffset(i); if (r.isValid()) return r } var o = pd.utc(t).utcOffset(i); if (o.isValid()) return o; if (t && t.length && 4 === t.length && (o = pd.utc("1/2/" + t).utcOffset(i)).isValid()) return o; var a = new Date(t); return a.getTimezoneOffset() > 0 && (a = new Date(a.getTime() + 6e4 * a.getTimezoneOffset())), isNaN(a.valueOf()) ? n ? null : pd.utc(new Date("1/1/1900")) : pd.utc(a).utcOffset(i) }

    function kd(t, e) { var n = wd(e)(t); return n.isValid() ? n.format() : "" } pd.suppressDeprecationWarnings = !0; var Md = [].join,
        Sd = v != Object,
        Ad = Gt("join", ",");
    Pt({ target: "Array", proto: !0, forced: Sd || !Ad }, { join: function(t) { return Md.call(y(this), void 0 === t ? "," : t) } }); var Dd = "".repeat || function(t) { var e = String(m(this)),
                n = "",
                i = ct(t); if (i < 0 || i == 1 / 0) throw RangeError("Wrong number of repetitions"); for (; i > 0;
                (i >>>= 1) && (e += e)) 1 & i && (n += e); return n },
        Cd = 1..toFixed,
        Ed = Math.floor,
        Od = function(t, e, n) { return 0 === e ? n : e % 2 == 1 ? Od(t, e - 1, n * t) : Od(t * t, e / 2, n) },
        Td = Cd && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !a((function() { Cd.call({}) }));

    function Pd(t, e) { if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null; var n, i = t.slice(0, n); return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(n + 1)] }

    function Bd(t) { return (t = Pd(Math.abs(t))) ? t[1] : NaN } Pt({ target: "Number", proto: !0, forced: Td }, { toFixed: function(t) { var e, n, i, r, o = function(t) { if ("number" != typeof t && "Number" != g(t)) throw TypeError("Incorrect invocation"); return +t }(this),
                a = ct(t),
                s = [0, 0, 0, 0, 0, 0],
                l = "",
                c = "0",
                u = function(t, e) { for (var n = -1, i = e; ++n < 6;) i += t * s[n], s[n] = i % 1e7, i = Ed(i / 1e7) },
                f = function(t) { for (var e = 6, n = 0; --e >= 0;) n += s[e], s[e] = Ed(n / t), n = n % t * 1e7 },
                d = function() { for (var t = 6, e = ""; --t >= 0;)
                        if ("" !== e || 0 === t || 0 !== s[t]) { var n = String(s[t]);
                            e = "" === e ? n : e + Dd.call("0", 7 - n.length) + n } return e }; if (a < 0 || a > 20) throw RangeError("Incorrect fraction digits"); if (o != o) return "NaN"; if (o <= -1e21 || o >= 1e21) return String(o); if (o < 0 && (l = "-", o = -o), o > 1e-21)
                if (e = function(t) { for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096; for (; n >= 2;) e += 1, n /= 2; return e }(o * Od(2, 69, 1)) - 69, n = e < 0 ? o * Od(2, -e, 1) : o / Od(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) { for (u(0, n), i = a; i >= 7;) u(1e7, 0), i -= 7; for (u(Od(10, i, 1), 0), i = e - 1; i >= 23;) f(1 << 23), i -= 23;
                    f(1 << i), u(1, 1), f(2), c = d() } else u(0, n), u(1 << -e, 0), c = d() + Dd.call("0", a); return c = a > 0 ? l + ((r = c.length) <= a ? "0." + Dd.call("0", a - r) + c : c.slice(0, r - a) + "." + c.slice(r - a)) : l + c } }); var Ld, zd = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Yd(t) { if (!(e = zd.exec(t))) throw new Error("invalid format: " + t); var e; return new Fd({ fill: e[1], align: e[2], sign: e[3], symbol: e[4], zero: e[5], width: e[6], comma: e[7], precision: e[8] && e[8].slice(1), trim: e[9], type: e[10] }) }

    function Fd(t) { this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + "" }

    function Wd(t, e) { var n = Pd(t, e); if (!n) return t + ""; var i = n[0],
            r = n[1]; return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0") } Yd.prototype = Fd.prototype, Fd.prototype.toString = function() { return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type }; var Rd = { "%": function(t, e) { return (100 * t).toFixed(e) }, b: function(t) { return Math.round(t).toString(2) }, c: function(t) { return t + "" }, d: function(t) { return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10) }, e: function(t, e) { return t.toExponential(e) }, f: function(t, e) { return t.toFixed(e) }, g: function(t, e) { return t.toPrecision(e) }, o: function(t) { return Math.round(t).toString(8) }, p: function(t, e) { return Wd(100 * t, e) }, r: Wd, s: function(t, e) { var n = Pd(t, e); if (!n) return t + ""; var i = n[0],
                r = n[1],
                o = r - (Ld = 3 * Math.max(-8, Math.min(8, Math.floor(r / 3)))) + 1,
                a = i.length; return o === a ? i : o > a ? i + new Array(o - a + 1).join("0") : o > 0 ? i.slice(0, o) + "." + i.slice(o) : "0." + new Array(1 - o).join("0") + Pd(t, Math.max(0, e + o - 1))[0] }, X: function(t) { return Math.round(t).toString(16).toUpperCase() }, x: function(t) { return Math.round(t).toString(16) } };

    function Nd(t) { return t } var Hd, jd, Id, Vd = Array.prototype.map,
        Ud = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function Xd(t) { var e, n, i = void 0 === t.grouping || void 0 === t.thousands ? Nd : (e = Vd.call(t.grouping, Number), n = t.thousands + "", function(t, i) { for (var r = t.length, o = [], a = 0, s = e[0], l = 0; r > 0 && s > 0 && (l + s + 1 > i && (s = Math.max(1, i - l)), o.push(t.substring(r -= s, r + s)), !((l += s + 1) > i));) s = e[a = (a + 1) % e.length]; return o.reverse().join(n) }),
            r = void 0 === t.currency ? "" : t.currency[0] + "",
            o = void 0 === t.currency ? "" : t.currency[1] + "",
            a = void 0 === t.decimal ? "." : t.decimal + "",
            s = void 0 === t.numerals ? Nd : function(t) { return function(e) { return e.replace(/[0-9]/g, (function(e) { return t[+e] })) } }(Vd.call(t.numerals, String)),
            l = void 0 === t.percent ? "%" : t.percent + "",
            c = void 0 === t.minus ? "-" : t.minus + "",
            u = void 0 === t.nan ? "NaN" : t.nan + "";

        function f(t) { var e = (t = Yd(t)).fill,
                n = t.align,
                f = t.sign,
                d = t.symbol,
                h = t.zero,
                g = t.width,
                p = t.comma,
                v = t.precision,
                m = t.trim,
                y = t.type; "n" === y ? (p = !0, y = "g") : Rd[y] || (void 0 === v && (v = 12), m = !0, y = "g"), (h || "0" === e && "=" === n) && (h = !0, e = "0", n = "="); var x = "$" === d ? r : "#" === d && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "",
                b = "$" === d ? o : /[%p]/.test(y) ? l : "",
                $ = Rd[y],
                w = /[defgprs%]/.test(y);

            function _(t) { var r, o, l, d = x,
                    _ = b; if ("c" === y) _ = $(t) + _, t = "";
                else { var k = (t = +t) < 0 || 1 / t < 0; if (t = isNaN(t) ? u : $(Math.abs(t), v), m && (t = function(t) { t: for (var e, n = t.length, i = 1, r = -1; i < n; ++i) switch (t[i]) {
                                case ".":
                                    r = e = i; break;
                                case "0":
                                    0 === r && (r = i), e = i; break;
                                default:
                                    if (!+t[i]) break t;
                                    r > 0 && (r = 0) }
                            return r > 0 ? t.slice(0, r) + t.slice(e + 1) : t }(t)), k && 0 == +t && "+" !== f && (k = !1), d = (k ? "(" === f ? f : c : "-" === f || "(" === f ? "" : f) + d, _ = ("s" === y ? Ud[8 + Ld / 3] : "") + _ + (k && "(" === f ? ")" : ""), w)
                        for (r = -1, o = t.length; ++r < o;)
                            if (48 > (l = t.charCodeAt(r)) || l > 57) { _ = (46 === l ? a + t.slice(r + 1) : t.slice(r)) + _, t = t.slice(0, r); break } } p && !h && (t = i(t, 1 / 0)); var M = d.length + t.length + _.length,
                    S = M < g ? new Array(g - M + 1).join(e) : ""; switch (p && h && (t = i(S + t, S.length ? g - _.length : 1 / 0), S = ""), n) {
                    case "<":
                        t = d + t + _ + S; break;
                    case "=":
                        t = d + S + t + _; break;
                    case "^":
                        t = S.slice(0, M = S.length >> 1) + d + t + _ + S.slice(M); break;
                    default:
                        t = S + d + t + _ } return s(t) } return v = void 0 === v ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, v)) : Math.max(0, Math.min(20, v)), _.toString = function() { return t + "" }, _ } return { format: f, formatPrefix: function(t, e) { var n = f(((t = Yd(t)).type = "f", t)),
                    i = 3 * Math.max(-8, Math.min(8, Math.floor(Bd(e) / 3))),
                    r = Math.pow(10, -i),
                    o = Ud[8 + i / 3]; return function(t) { return n(r * t) + o } } } } Hd = Xd({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""], minus: "-" }), jd = Hd.format, Id = Hd.formatPrefix; var qd = Array.isArray,
        Gd = "object" == typeof e && e && e.Object === Object && e,
        Zd = "object" == typeof self && self && self.Object === Object && self,
        Qd = Gd || Zd || Function("return this")(),
        Kd = Qd.Symbol,
        Jd = Object.prototype,
        th = Jd.hasOwnProperty,
        eh = Jd.toString,
        nh = Kd ? Kd.toStringTag : void 0; var ih = function(t) { var e = th.call(t, nh),
                n = t[nh]; try { t[nh] = void 0; var i = !0 } catch (t) {} var r = eh.call(t); return i && (e ? t[nh] = n : delete t[nh]), r },
        rh = Object.prototype.toString; var oh = function(t) { return rh.call(t) },
        ah = Kd ? Kd.toStringTag : void 0; var sh = function(t) { return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : ah && ah in Object(t) ? ih(t) : oh(t) }; var lh = function(t) { return null != t && "object" == typeof t }; var ch = function(t) { return "symbol" == typeof t || lh(t) && "[object Symbol]" == sh(t) },
        uh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        fh = /^\w*$/; var dh = function(t, e) { if (qd(t)) return !1; var n = typeof t; return !("number" != n && "symbol" != n && "boolean" != n && null != t && !ch(t)) || (fh.test(t) || !uh.test(t) || null != e && t in Object(e)) }; var hh = function(t) { var e = typeof t; return null != t && ("object" == e || "function" == e) }; var gh = function(t) { if (!hh(t)) return !1; var e = sh(t); return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e },
        ph = Qd["__core-js_shared__"],
        vh = function() { var t = /[^.]+$/.exec(ph && ph.keys && ph.keys.IE_PROTO || ""); return t ? "Symbol(src)_1." + t : "" }(); var mh = function(t) { return !!vh && vh in t },
        yh = Function.prototype.toString; var xh = function(t) { if (null != t) { try { return yh.call(t) } catch (t) {} try { return t + "" } catch (t) {} } return "" },
        bh = /^\[object .+?Constructor\]$/,
        $h = Function.prototype,
        wh = Object.prototype,
        _h = $h.toString,
        kh = wh.hasOwnProperty,
        Mh = RegExp("^" + _h.call(kh).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"); var Sh = function(t) { return !(!hh(t) || mh(t)) && (gh(t) ? Mh : bh).test(xh(t)) }; var Ah = function(t, e) { return null == t ? void 0 : t[e] }; var Dh = function(t, e) { var n = Ah(t, e); return Sh(n) ? n : void 0 },
        Ch = Dh(Object, "create"); var Eh = function() { this.__data__ = Ch ? Ch(null) : {}, this.size = 0 }; var Oh = function(t) { var e = this.has(t) && delete this.__data__[t]; return this.size -= e ? 1 : 0, e },
        Th = Object.prototype.hasOwnProperty; var Ph = function(t) { var e = this.__data__; if (Ch) { var n = e[t]; return "__lodash_hash_undefined__" === n ? void 0 : n } return Th.call(e, t) ? e[t] : void 0 },
        Bh = Object.prototype.hasOwnProperty; var Lh = function(t) { var e = this.__data__; return Ch ? void 0 !== e[t] : Bh.call(e, t) }; var zh = function(t, e) { var n = this.__data__; return this.size += this.has(t) ? 0 : 1, n[t] = Ch && void 0 === e ? "__lodash_hash_undefined__" : e, this };

    function Yh(t) { var e = -1,
            n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var i = t[e];
            this.set(i[0], i[1]) } } Yh.prototype.clear = Eh, Yh.prototype.delete = Oh, Yh.prototype.get = Ph, Yh.prototype.has = Lh, Yh.prototype.set = zh; var Fh = Yh; var Wh = function() { this.__data__ = [], this.size = 0 }; var Rh = function(t, e) { return t === e || t != t && e != e }; var Nh = function(t, e) { for (var n = t.length; n--;)
                if (Rh(t[n][0], e)) return n; return -1 },
        Hh = Array.prototype.splice; var jh = function(t) { var e = this.__data__,
            n = Nh(e, t); return !(n < 0) && (n == e.length - 1 ? e.pop() : Hh.call(e, n, 1), --this.size, !0) }; var Ih = function(t) { var e = this.__data__,
            n = Nh(e, t); return n < 0 ? void 0 : e[n][1] }; var Vh = function(t) { return Nh(this.__data__, t) > -1 }; var Uh = function(t, e) { var n = this.__data__,
            i = Nh(n, t); return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this };

    function Xh(t) { var e = -1,
            n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var i = t[e];
            this.set(i[0], i[1]) } } Xh.prototype.clear = Wh, Xh.prototype.delete = jh, Xh.prototype.get = Ih, Xh.prototype.has = Vh, Xh.prototype.set = Uh; var qh = Xh,
        Gh = Dh(Qd, "Map"); var Zh = function() { this.size = 0, this.__data__ = { hash: new Fh, map: new(Gh || qh), string: new Fh } }; var Qh = function(t) { var e = typeof t; return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t }; var Kh = function(t, e) { var n = t.__data__; return Qh(e) ? n["string" == typeof e ? "string" : "hash"] : n.map }; var Jh = function(t) { var e = Kh(this, t).delete(t); return this.size -= e ? 1 : 0, e }; var tg = function(t) { return Kh(this, t).get(t) }; var eg = function(t) { return Kh(this, t).has(t) }; var ng = function(t, e) { var n = Kh(this, t),
            i = n.size; return n.set(t, e), this.size += n.size == i ? 0 : 1, this };

    function ig(t) { var e = -1,
            n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var i = t[e];
            this.set(i[0], i[1]) } } ig.prototype.clear = Zh, ig.prototype.delete = Jh, ig.prototype.get = tg, ig.prototype.has = eg, ig.prototype.set = ng; var rg = ig;

    function og(t, e) { if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function"); var n = function() { var i = arguments,
                r = e ? e.apply(this, i) : i[0],
                o = n.cache; if (o.has(r)) return o.get(r); var a = t.apply(this, i); return n.cache = o.set(r, a) || o, a }; return n.cache = new(og.Cache || rg), n } og.Cache = rg; var ag = og; var sg = function(t) { var e = ag(t, (function(t) { return 500 === n.size && n.clear(), t })),
                n = e.cache; return e },
        lg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        cg = /\\(\\)?/g,
        ug = sg((function(t) { var e = []; return 46 === t.charCodeAt(0) && e.push(""), t.replace(lg, (function(t, n, i, r) { e.push(i ? r.replace(cg, "$1") : n || t) })), e })),
        fg = ug; var dg = function(t, e) { for (var n = -1, i = null == t ? 0 : t.length, r = Array(i); ++n < i;) r[n] = e(t[n], n, t); return r },
        hg = Kd ? Kd.prototype : void 0,
        gg = hg ? hg.toString : void 0; var pg = function t(e) { if ("string" == typeof e) return e; if (qd(e)) return dg(e, t) + ""; if (ch(e)) return gg ? gg.call(e) : ""; var n = e + ""; return "0" == n && 1 / e == -Infinity ? "-0" : n }; var vg = function(t) { return null == t ? "" : pg(t) }; var mg = function(t, e) { return qd(t) ? t : dh(t, e) ? [t] : fg(vg(t)) }; var yg = function(t) { if ("string" == typeof t || ch(t)) return t; var e = t + ""; return "0" == e && 1 / t == -Infinity ? "-0" : e }; var xg = function(t, e) { for (var n = 0, i = (e = mg(e, t)).length; null != t && n < i;) t = t[yg(e[n++])]; return n && n == i ? t : void 0 }; var bg = function(t, e, n) { var i = null == t ? void 0 : xg(t, e); return void 0 === i ? n : i },
        $g = "http://www.w3.org/1999/xhtml",
        wg = { svg: "http://www.w3.org/2000/svg", xhtml: $g, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };

    function _g(t) { var e = t += "",
            n = e.indexOf(":"); return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), wg.hasOwnProperty(e) ? { space: wg[e], local: t } : t }

    function kg(t) { return function() { var e = this.ownerDocument,
                n = this.namespaceURI; return n === $g && e.documentElement.namespaceURI === $g ? e.createElement(t) : e.createElementNS(n, t) } }

    function Mg(t) { return function() { return this.ownerDocument.createElementNS(t.space, t.local) } }

    function Sg(t) { var e = _g(t); return (e.local ? Mg : kg)(e) }

    function Ag() {}

    function Dg(t) { return null == t ? Ag : function() { return this.querySelector(t) } }

    function Cg() { return [] }

    function Eg(t) { return null == t ? Cg : function() { return this.querySelectorAll(t) } }

    function Og(t) { return function() { return this.matches(t) } }

    function Tg(t) { return new Array(t.length) }

    function Pg(t, e) { this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e } Pg.prototype = { constructor: Pg, appendChild: function(t) { return this._parent.insertBefore(t, this._next) }, insertBefore: function(t, e) { return this._parent.insertBefore(t, e) }, querySelector: function(t) { return this._parent.querySelector(t) }, querySelectorAll: function(t) { return this._parent.querySelectorAll(t) } };

    function Bg(t, e, n, i, r, o) { for (var a, s = 0, l = e.length, c = o.length; s < c; ++s)(a = e[s]) ? (a.__data__ = o[s], i[s] = a) : n[s] = new Pg(t, o[s]); for (; s < l; ++s)(a = e[s]) && (r[s] = a) }

    function Lg(t, e, n, i, r, o, a) { var s, l, c, u = {},
            f = e.length,
            d = o.length,
            h = new Array(f); for (s = 0; s < f; ++s)(l = e[s]) && (h[s] = c = "$" + a.call(l, l.__data__, s, e), c in u ? r[s] = l : u[c] = l); for (s = 0; s < d; ++s)(l = u[c = "$" + a.call(t, o[s], s, o)]) ? (i[s] = l, l.__data__ = o[s], u[c] = null) : n[s] = new Pg(t, o[s]); for (s = 0; s < f; ++s)(l = e[s]) && u[h[s]] === l && (r[s] = l) }

    function zg(t, e) { return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN }

    function Yg(t) { return function() { this.removeAttribute(t) } }

    function Fg(t) { return function() { this.removeAttributeNS(t.space, t.local) } }

    function Wg(t, e) { return function() { this.setAttribute(t, e) } }

    function Rg(t, e) { return function() { this.setAttributeNS(t.space, t.local, e) } }

    function Ng(t, e) { return function() { var n = e.apply(this, arguments);
            null == n ? this.removeAttribute(t) : this.setAttribute(t, n) } }

    function Hg(t, e) { return function() { var n = e.apply(this, arguments);
            null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n) } }

    function jg(t) { return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView }

    function Ig(t) { return function() { this.style.removeProperty(t) } }

    function Vg(t, e, n) { return function() { this.style.setProperty(t, e, n) } }

    function Ug(t, e, n) { return function() { var i = e.apply(this, arguments);
            null == i ? this.style.removeProperty(t) : this.style.setProperty(t, i, n) } }

    function Xg(t, e) { return t.style.getPropertyValue(e) || jg(t).getComputedStyle(t, null).getPropertyValue(e) }

    function qg(t) { return function() { delete this[t] } }

    function Gg(t, e) { return function() { this[t] = e } }

    function Zg(t, e) { return function() { var n = e.apply(this, arguments);
            null == n ? delete this[t] : this[t] = n } }

    function Qg(t) { return t.trim().split(/^|\s+/) }

    function Kg(t) { return t.classList || new Jg(t) }

    function Jg(t) { this._node = t, this._names = Qg(t.getAttribute("class") || "") }

    function tp(t, e) { for (var n = Kg(t), i = -1, r = e.length; ++i < r;) n.add(e[i]) }

    function ep(t, e) { for (var n = Kg(t), i = -1, r = e.length; ++i < r;) n.remove(e[i]) }

    function np(t) { return function() { tp(this, t) } }

    function ip(t) { return function() { ep(this, t) } }

    function rp(t, e) { return function() {
            (e.apply(this, arguments) ? tp : ep)(this, t) } }

    function op() { this.textContent = "" }

    function ap(t) { return function() { this.textContent = t } }

    function sp(t) { return function() { var e = t.apply(this, arguments);
            this.textContent = null == e ? "" : e } }

    function lp() { this.innerHTML = "" }

    function cp(t) { return function() { this.innerHTML = t } }

    function up(t) { return function() { var e = t.apply(this, arguments);
            this.innerHTML = null == e ? "" : e } }

    function fp() { this.nextSibling && this.parentNode.appendChild(this) }

    function dp() { this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild) }

    function hp() { return null }

    function gp() { var t = this.parentNode;
        t && t.removeChild(this) }

    function pp() { var t = this.cloneNode(!1),
            e = this.parentNode; return e ? e.insertBefore(t, this.nextSibling) : t }

    function vp() { var t = this.cloneNode(!0),
            e = this.parentNode; return e ? e.insertBefore(t, this.nextSibling) : t } Jg.prototype = { add: function(t) { this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" "))) }, remove: function(t) { var e = this._names.indexOf(t);
            e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" "))) }, contains: function(t) { return this._names.indexOf(t) >= 0 } }; var mp = {},
        yp = null; "undefined" != typeof document && ("onmouseenter" in document.documentElement || (mp = { mouseenter: "mouseover", mouseleave: "mouseout" }));

    function xp(t, e, n) { return t = bp(t, e, n),
            function(e) { var n = e.relatedTarget;
                n && (n === this || 8 & n.compareDocumentPosition(this)) || t.call(this, e) } }

    function bp(t, e, n) { return function(i) { var r = yp;
            yp = i; try { t.call(this, this.__data__, e, n) } finally { yp = r } } }

    function $p(t) { return t.trim().split(/^|\s+/).map((function(t) { var e = "",
                n = t.indexOf("."); return n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), { type: t, name: e } })) }

    function wp(t) { return function() { var e = this.__on; if (e) { for (var n, i = 0, r = -1, o = e.length; i < o; ++i) n = e[i], t.type && n.type !== t.type || n.name !== t.name ? e[++r] = n : this.removeEventListener(n.type, n.listener, n.capture);++r ? e.length = r : delete this.__on } } }

    function _p(t, e, n) { var i = mp.hasOwnProperty(t.type) ? xp : bp; return function(r, o, a) { var s, l = this.__on,
                c = i(e, o, a); if (l)
                for (var u = 0, f = l.length; u < f; ++u)
                    if ((s = l[u]).type === t.type && s.name === t.name) return this.removeEventListener(s.type, s.listener, s.capture), this.addEventListener(s.type, s.listener = c, s.capture = n), void(s.value = e);
            this.addEventListener(t.type, c, n), s = { type: t.type, name: t.name, value: e, listener: c, capture: n }, l ? l.push(s) : this.__on = [s] } }

    function kp(t, e, n) { var i = jg(t),
            r = i.CustomEvent; "function" == typeof r ? r = new r(e, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r) }

    function Mp(t, e) { return function() { return kp(this, t, e) } }

    function Sp(t, e) { return function() { return kp(this, t, e.apply(this, arguments)) } } var Ap = [null];

    function Dp(t, e) { this._groups = t, this._parents = e }

    function Cp() { return new Dp([
            [document.documentElement]
        ], Ap) }

    function Ep(t) { return "string" == typeof t ? new Dp([
            [document.querySelector(t)]
        ], [document.documentElement]) : new Dp([
            [t]
        ], Ap) }

    function Op() { for (var t, e = yp; t = e.sourceEvent;) e = t; return e }

    function Tp(t, e) { var n = t.ownerSVGElement || t; if (n.createSVGPoint) { var i = n.createSVGPoint(); return i.x = e.clientX, i.y = e.clientY, [(i = i.matrixTransform(t.getScreenCTM().inverse())).x, i.y] } var r = t.getBoundingClientRect(); return [e.clientX - r.left - t.clientLeft, e.clientY - r.top - t.clientTop] }

    function Pp(t) { return "string" == typeof t ? new Dp([document.querySelectorAll(t)], [document.documentElement]) : new Dp([null == t ? [] : t], Ap) }

    function Bp(t) { var e = Dg(t),
            n = zp(t),
            i = Sg(n.tag),
            r = this.select((function() { return e.apply(this, arguments) || this.appendChild(i.apply(this, arguments)) })); for (var o in n.attr) r.attr(o, n.attr[o]); return r }

    function Lp(t) { var e = zp(t),
            n = Sg(e.tag),
            i = this.select((function() { return this.appendChild(n.apply(this, arguments)) })); for (var r in e.attr) i.attr(r, e.attr[r]); return i }

    function zp(t) { if ("string" == typeof t) { var e, n = {},
                i = t.split(/([.#])/g); for (t = i.shift(); e = i.shift();) "." === e ? n.class = n.class ? n.class + " " + i.shift() : i.shift() : "#" === e && (n.id = i.shift()); return { attr: n, tag: t } } return t } Dp.prototype = Cp.prototype = { constructor: Dp, select: function(t) { "function" != typeof t && (t = Dg(t)); for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
                for (var o, a, s = e[r], l = s.length, c = i[r] = new Array(l), u = 0; u < l; ++u)(o = s[u]) && (a = t.call(o, o.__data__, u, s)) && ("__data__" in o && (a.__data__ = o.__data__), c[u] = a); return new Dp(i, this._parents) }, selectAll: function(t) { "function" != typeof t && (t = Eg(t)); for (var e = this._groups, n = e.length, i = [], r = [], o = 0; o < n; ++o)
                for (var a, s = e[o], l = s.length, c = 0; c < l; ++c)(a = s[c]) && (i.push(t.call(a, a.__data__, c, s)), r.push(a)); return new Dp(i, r) }, filter: function(t) { "function" != typeof t && (t = Og(t)); for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
                for (var o, a = e[r], s = a.length, l = i[r] = [], c = 0; c < s; ++c)(o = a[c]) && t.call(o, o.__data__, c, a) && l.push(o); return new Dp(i, this._parents) }, data: function(t, e) { if (!t) return h = new Array(this.size()), c = -1, this.each((function(t) { h[++c] = t })), h; var n = e ? Lg : Bg,
                i = this._parents,
                r = this._groups; "function" != typeof t && (t = function(t) { return function() { return t } }(t)); for (var o = r.length, a = new Array(o), s = new Array(o), l = new Array(o), c = 0; c < o; ++c) { var u = i[c],
                    f = r[c],
                    d = f.length,
                    h = t.call(u, u && u.__data__, c, i),
                    g = h.length,
                    p = s[c] = new Array(g),
                    v = a[c] = new Array(g);
                n(u, f, p, v, l[c] = new Array(d), h, e); for (var m, y, x = 0, b = 0; x < g; ++x)
                    if (m = p[x]) { for (x >= b && (b = x + 1); !(y = v[b]) && ++b < g;);
                        m._next = y || null } } return (a = new Dp(a, i))._enter = s, a._exit = l, a }, enter: function() { return new Dp(this._enter || this._groups.map(Tg), this._parents) }, exit: function() { return new Dp(this._exit || this._groups.map(Tg), this._parents) }, join: function(t, e, n) { var i = this.enter(),
                r = this,
                o = this.exit(); return i = "function" == typeof t ? t(i) : i.append(t + ""), null != e && (r = e(r)), null == n ? o.remove() : n(o), i && r ? i.merge(r).order() : r }, merge: function(t) { for (var e = this._groups, n = t._groups, i = e.length, r = n.length, o = Math.min(i, r), a = new Array(i), s = 0; s < o; ++s)
                for (var l, c = e[s], u = n[s], f = c.length, d = a[s] = new Array(f), h = 0; h < f; ++h)(l = c[h] || u[h]) && (d[h] = l); for (; s < i; ++s) a[s] = e[s]; return new Dp(a, this._parents) }, order: function() { for (var t = this._groups, e = -1, n = t.length; ++e < n;)
                for (var i, r = t[e], o = r.length - 1, a = r[o]; --o >= 0;)(i = r[o]) && (a && 4 ^ i.compareDocumentPosition(a) && a.parentNode.insertBefore(i, a), a = i); return this }, sort: function(t) {
            function e(e, n) { return e && n ? t(e.__data__, n.__data__) : !e - !n } t || (t = zg); for (var n = this._groups, i = n.length, r = new Array(i), o = 0; o < i; ++o) { for (var a, s = n[o], l = s.length, c = r[o] = new Array(l), u = 0; u < l; ++u)(a = s[u]) && (c[u] = a);
                c.sort(e) } return new Dp(r, this._parents).order() }, call: function() { var t = arguments[0]; return arguments[0] = this, t.apply(null, arguments), this }, nodes: function() { var t = new Array(this.size()),
                e = -1; return this.each((function() { t[++e] = this })), t }, node: function() { for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
                for (var i = t[e], r = 0, o = i.length; r < o; ++r) { var a = i[r]; if (a) return a }
            return null }, size: function() { var t = 0; return this.each((function() {++t })), t }, empty: function() { return !this.node() }, each: function(t) { for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
                for (var r, o = e[n], a = 0, s = o.length; a < s; ++a)(r = o[a]) && t.call(r, r.__data__, a, o); return this }, attr: function(t, e) { var n = _g(t); if (arguments.length < 2) { var i = this.node(); return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n) } return this.each((null == e ? n.local ? Fg : Yg : "function" == typeof e ? n.local ? Hg : Ng : n.local ? Rg : Wg)(n, e)) }, style: function(t, e, n) { return arguments.length > 1 ? this.each((null == e ? Ig : "function" == typeof e ? Ug : Vg)(t, e, null == n ? "" : n)) : Xg(this.node(), t) }, property: function(t, e) { return arguments.length > 1 ? this.each((null == e ? qg : "function" == typeof e ? Zg : Gg)(t, e)) : this.node()[t] }, classed: function(t, e) { var n = Qg(t + ""); if (arguments.length < 2) { for (var i = Kg(this.node()), r = -1, o = n.length; ++r < o;)
                    if (!i.contains(n[r])) return !1; return !0 } return this.each(("function" == typeof e ? rp : e ? np : ip)(n, e)) }, text: function(t) { return arguments.length ? this.each(null == t ? op : ("function" == typeof t ? sp : ap)(t)) : this.node().textContent }, html: function(t) { return arguments.length ? this.each(null == t ? lp : ("function" == typeof t ? up : cp)(t)) : this.node().innerHTML }, raise: function() { return this.each(fp) }, lower: function() { return this.each(dp) }, append: function(t) { var e = "function" == typeof t ? t : Sg(t); return this.select((function() { return this.appendChild(e.apply(this, arguments)) })) }, insert: function(t, e) { var n = "function" == typeof t ? t : Sg(t),
                i = null == e ? hp : "function" == typeof e ? e : Dg(e); return this.select((function() { return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null) })) }, remove: function() { return this.each(gp) }, clone: function(t) { return this.select(t ? vp : pp) }, datum: function(t) { return arguments.length ? this.property("__data__", t) : this.node().__data__ }, on: function(t, e, n) { var i, r, o = $p(t + ""),
                a = o.length; if (!(arguments.length < 2)) { for (s = e ? _p : wp, null == n && (n = !1), i = 0; i < a; ++i) this.each(s(o[i], e, n)); return this } var s = this.node().__on; if (s)
                for (var l, c = 0, u = s.length; c < u; ++c)
                    for (i = 0, l = s[c]; i < a; ++i)
                        if ((r = o[i]).type === l.type && r.name === l.name) return l.value }, dispatch: function(t, e) { return this.each(("function" == typeof e ? Sp : Mp)(t, e)) } }; var Yp = 180 / Math.PI,
        Fp = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };

    function Wp(t, e, n, i, r, o) { var a, s, l; return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (l = t * n + e * i) && (n -= t * l, i -= e * l), (s = Math.sqrt(n * n + i * i)) && (n /= s, i /= s, l /= s), t * i < e * n && (t = -t, e = -e, l = -l, a = -a), { translateX: r, translateY: o, rotate: Math.atan2(e, t) * Yp, skewX: Math.atan(l) * Yp, scaleX: a, scaleY: s } }

    function Rp(t, e) { return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN }

    function Np(t) { return 1 === t.length && (t = function(t) { return function(e, n) { return Rp(t(e), n) } }(t)), { left: function(e, n, i, r) { for (null == i && (i = 0), null == r && (r = e.length); i < r;) { var o = i + r >>> 1;
                    t(e[o], n) < 0 ? i = o + 1 : r = o } return i }, right: function(e, n, i, r) { for (null == i && (i = 0), null == r && (r = e.length); i < r;) { var o = i + r >>> 1;
                    t(e[o], n) > 0 ? r = o : i = o + 1 } return i } } } var Hp = Np(Rp).right;

    function jp(t) { return null === t ? NaN : +t }

    function Ip(t, e, n) { t = +t, e = +e, n = (r = arguments.length) < 2 ? (e = t, t = 0, 1) : r < 3 ? 1 : +n; for (var i = -1, r = 0 | Math.max(0, Math.ceil((e - t) / n)), o = new Array(r); ++i < r;) o[i] = t + i * n; return o } var Vp = Math.sqrt(50),
        Up = Math.sqrt(10),
        Xp = Math.sqrt(2);

    function qp(t, e, n) { var i, r, o, a, s = -1; if (n = +n, (t = +t) === (e = +e) && n > 0) return [t]; if ((i = e < t) && (r = t, t = e, e = r), 0 === (a = Gp(t, e, n)) || !isFinite(a)) return []; if (a > 0)
            for (t = Math.ceil(t / a), e = Math.floor(e / a), o = new Array(r = Math.ceil(e - t + 1)); ++s < r;) o[s] = (t + s) * a;
        else
            for (t = Math.floor(t * a), e = Math.ceil(e * a), o = new Array(r = Math.ceil(t - e + 1)); ++s < r;) o[s] = (t - s) / a; return i && o.reverse(), o }

    function Gp(t, e, n) { var i = (e - t) / Math.max(0, n),
            r = Math.floor(Math.log(i) / Math.LN10),
            o = i / Math.pow(10, r); return r >= 0 ? (o >= Vp ? 10 : o >= Up ? 5 : o >= Xp ? 2 : 1) * Math.pow(10, r) : -Math.pow(10, -r) / (o >= Vp ? 10 : o >= Up ? 5 : o >= Xp ? 2 : 1) }

    function Zp(t, e, n) { var i = Math.abs(e - t) / Math.max(0, n),
            r = Math.pow(10, Math.floor(Math.log(i) / Math.LN10)),
            o = i / r; return o >= Vp ? r *= 10 : o >= Up ? r *= 5 : o >= Xp && (r *= 2), e < t ? -r : r }

    function Qp(t, e, n) { if (null == n && (n = jp), i = t.length) { if ((e = +e) <= 0 || i < 2) return +n(t[0], 0, t); if (e >= 1) return +n(t[i - 1], i - 1, t); var i, r = (i - 1) * e,
                o = Math.floor(r),
                a = +n(t[o], o, t); return a + (+n(t[o + 1], o + 1, t) - a) * (r - o) } }

    function Kp(t, e) { var n, i, r = t.length,
            o = -1; if (null == e) { for (; ++o < r;)
                if (null != (n = t[o]) && n >= n)
                    for (i = n; ++o < r;) null != (n = t[o]) && n > i && (i = n) } else
            for (; ++o < r;)
                if (null != (n = e(t[o], o, t)) && n >= n)
                    for (i = n; ++o < r;) null != (n = e(t[o], o, t)) && n > i && (i = n); return i }

    function Jp(t, e) { var n, i, r = t.length,
            o = -1; if (null == e) { for (; ++o < r;)
                if (null != (n = t[o]) && n >= n)
                    for (i = n; ++o < r;) null != (n = t[o]) && i > n && (i = n) } else
            for (; ++o < r;)
                if (null != (n = e(t[o], o, t)) && n >= n)
                    for (i = n; ++o < r;) null != (n = e(t[o], o, t)) && i > n && (i = n); return i } var tv = Array.prototype.slice;

    function ev(t) { return t } var nv = 1e-6;

    function iv(t) { return "translate(" + (t + .5) + ",0)" }

    function rv(t) { return "translate(0," + (t + .5) + ")" }

    function ov(t) { return function(e) { return +t(e) } }

    function av(t) { var e = Math.max(0, t.bandwidth() - 1) / 2; return t.round() && (e = Math.round(e)),
            function(n) { return +t(n) + e } }

    function sv() { return !this.__axis }

    function lv(t, e) { var n = [],
            i = null,
            r = null,
            o = 6,
            a = 6,
            s = 3,
            l = 1 === t || 4 === t ? -1 : 1,
            c = 4 === t || 2 === t ? "x" : "y",
            u = 1 === t || 3 === t ? iv : rv;

        function f(f) { var d = null == i ? e.ticks ? e.ticks.apply(e, n) : e.domain() : i,
                h = null == r ? e.tickFormat ? e.tickFormat.apply(e, n) : ev : r,
                g = Math.max(o, 0) + s,
                p = e.range(),
                v = +p[0] + .5,
                m = +p[p.length - 1] + .5,
                y = (e.bandwidth ? av : ov)(e.copy()),
                x = f.selection ? f.selection() : f,
                b = x.selectAll(".domain").data([null]),
                $ = x.selectAll(".tick").data(d, e).order(),
                w = $.exit(),
                _ = $.enter().append("g").attr("class", "tick"),
                k = $.select("line"),
                M = $.select("text");
            b = b.merge(b.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), $ = $.merge(_), k = k.merge(_.append("line").attr("stroke", "currentColor").attr(c + "2", l * o)), M = M.merge(_.append("text").attr("fill", "currentColor").attr(c, l * g).attr("dy", 1 === t ? "0em" : 3 === t ? "0.71em" : "0.32em")), f !== x && (b = b.transition(f), $ = $.transition(f), k = k.transition(f), M = M.transition(f), w = w.transition(f).attr("opacity", nv).attr("transform", (function(t) { return isFinite(t = y(t)) ? u(t) : this.getAttribute("transform") })), _.attr("opacity", nv).attr("transform", (function(t) { var e = this.parentNode.__axis; return u(e && isFinite(e = e(t)) ? e : y(t)) }))), w.remove(), b.attr("d", 4 === t || 2 == t ? a ? "M" + l * a + "," + v + "H0.5V" + m + "H" + l * a : "M0.5," + v + "V" + m : a ? "M" + v + "," + l * a + "V0.5H" + m + "V" + l * a : "M" + v + ",0.5H" + m), $.attr("opacity", 1).attr("transform", (function(t) { return u(y(t)) })), k.attr(c + "2", l * o), M.attr(c, l * g).text(h), x.filter(sv).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", 2 === t ? "start" : 4 === t ? "end" : "middle"), x.each((function() { this.__axis = y })) } return f.scale = function(t) { return arguments.length ? (e = t, f) : e }, f.ticks = function() { return n = tv.call(arguments), f }, f.tickArguments = function(t) { return arguments.length ? (n = null == t ? [] : tv.call(t), f) : n.slice() }, f.tickValues = function(t) { return arguments.length ? (i = null == t ? null : tv.call(t), f) : i && i.slice() }, f.tickFormat = function(t) { return arguments.length ? (r = t, f) : r }, f.tickSize = function(t) { return arguments.length ? (o = a = +t, f) : o }, f.tickSizeInner = function(t) { return arguments.length ? (o = +t, f) : o }, f.tickSizeOuter = function(t) { return arguments.length ? (a = +t, f) : a }, f.tickPadding = function(t) { return arguments.length ? (s = +t, f) : s }, f }

    function cv(t) { return lv(1, t) }

    function uv(t) { return lv(2, t) }

    function fv(t) { return lv(3, t) }

    function dv(t) { return lv(4, t) } var hv = { value: function() {} };

    function gv() { for (var t, e = 0, n = arguments.length, i = {}; e < n; ++e) { if (!(t = arguments[e] + "") || t in i || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
            i[t] = [] } return new pv(i) }

    function pv(t) { this._ = t }

    function vv(t, e) { return t.trim().split(/^|\s+/).map((function(t) { var n = "",
                i = t.indexOf("."); if (i >= 0 && (n = t.slice(i + 1), t = t.slice(0, i)), t && !e.hasOwnProperty(t)) throw new Error("unknown type: " + t); return { type: t, name: n } })) }

    function mv(t, e) { for (var n, i = 0, r = t.length; i < r; ++i)
            if ((n = t[i]).name === e) return n.value }

    function yv(t, e, n) { for (var i = 0, r = t.length; i < r; ++i)
            if (t[i].name === e) { t[i] = hv, t = t.slice(0, i).concat(t.slice(i + 1)); break } return null != n && t.push({ name: e, value: n }), t }

    function xv(t, e, n) { t.prototype = e.prototype = n, n.constructor = t }

    function bv(t, e) { var n = Object.create(t.prototype); for (var i in e) n[i] = e[i]; return n }

    function $v() {} pv.prototype = gv.prototype = { constructor: pv, on: function(t, e) { var n, i = this._,
                r = vv(t + "", i),
                o = -1,
                a = r.length; if (!(arguments.length < 2)) { if (null != e && "function" != typeof e) throw new Error("invalid callback: " + e); for (; ++o < a;)
                    if (n = (t = r[o]).type) i[n] = yv(i[n], t.name, e);
                    else if (null == e)
                    for (n in i) i[n] = yv(i[n], t.name, null); return this } for (; ++o < a;)
                if ((n = (t = r[o]).type) && (n = mv(i[n], t.name))) return n }, copy: function() { var t = {},
                e = this._; for (var n in e) t[n] = e[n].slice(); return new pv(t) }, call: function(t, e) { if ((n = arguments.length - 2) > 0)
                for (var n, i, r = new Array(n), o = 0; o < n; ++o) r[o] = arguments[o + 2]; if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t); for (o = 0, n = (i = this._[t]).length; o < n; ++o) i[o].value.apply(e, r) }, apply: function(t, e, n) { if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t); for (var i = this._[t], r = 0, o = i.length; r < o; ++r) i[r].value.apply(e, n) } }; var wv = .7,
        _v = 1 / wv,
        kv = "\\s*([+-]?\\d+)\\s*",
        Mv = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        Sv = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        Av = /^#([0-9a-f]{3,8})$/,
        Dv = new RegExp("^rgb\\(" + [kv, kv, kv] + "\\)$"),
        Cv = new RegExp("^rgb\\(" + [Sv, Sv, Sv] + "\\)$"),
        Ev = new RegExp("^rgba\\(" + [kv, kv, kv, Mv] + "\\)$"),
        Ov = new RegExp("^rgba\\(" + [Sv, Sv, Sv, Mv] + "\\)$"),
        Tv = new RegExp("^hsl\\(" + [Mv, Sv, Sv] + "\\)$"),
        Pv = new RegExp("^hsla\\(" + [Mv, Sv, Sv, Mv] + "\\)$"),
        Bv = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };

    function Lv() { return this.rgb().formatHex() }

    function zv() { return this.rgb().formatRgb() }

    function Yv(t) { var e, n; return t = (t + "").trim().toLowerCase(), (e = Av.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), 6 === n ? Fv(e) : 3 === n ? new Hv(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === n ? Wv(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === n ? Wv(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = Dv.exec(t)) ? new Hv(e[1], e[2], e[3], 1) : (e = Cv.exec(t)) ? new Hv(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = Ev.exec(t)) ? Wv(e[1], e[2], e[3], e[4]) : (e = Ov.exec(t)) ? Wv(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = Tv.exec(t)) ? Uv(e[1], e[2] / 100, e[3] / 100, 1) : (e = Pv.exec(t)) ? Uv(e[1], e[2] / 100, e[3] / 100, e[4]) : Bv.hasOwnProperty(t) ? Fv(Bv[t]) : "transparent" === t ? new Hv(NaN, NaN, NaN, 0) : null }

    function Fv(t) { return new Hv(t >> 16 & 255, t >> 8 & 255, 255 & t, 1) }

    function Wv(t, e, n, i) { return i <= 0 && (t = e = n = NaN), new Hv(t, e, n, i) }

    function Rv(t) { return t instanceof $v || (t = Yv(t)), t ? new Hv((t = t.rgb()).r, t.g, t.b, t.opacity) : new Hv }

    function Nv(t, e, n, i) { return 1 === arguments.length ? Rv(t) : new Hv(t, e, n, null == i ? 1 : i) }

    function Hv(t, e, n, i) { this.r = +t, this.g = +e, this.b = +n, this.opacity = +i }

    function jv() { return "#" + Vv(this.r) + Vv(this.g) + Vv(this.b) }

    function Iv() { var t = this.opacity; return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")") }

    function Vv(t) { return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16) }

    function Uv(t, e, n, i) { return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new qv(t, e, n, i) }

    function Xv(t) { if (t instanceof qv) return new qv(t.h, t.s, t.l, t.opacity); if (t instanceof $v || (t = Yv(t)), !t) return new qv; if (t instanceof qv) return t; var e = (t = t.rgb()).r / 255,
            n = t.g / 255,
            i = t.b / 255,
            r = Math.min(e, n, i),
            o = Math.max(e, n, i),
            a = NaN,
            s = o - r,
            l = (o + r) / 2; return s ? (a = e === o ? (n - i) / s + 6 * (n < i) : n === o ? (i - e) / s + 2 : (e - n) / s + 4, s /= l < .5 ? o + r : 2 - o - r, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new qv(a, s, l, t.opacity) }

    function qv(t, e, n, i) { this.h = +t, this.s = +e, this.l = +n, this.opacity = +i }

    function Gv(t, e, n) { return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) }

    function Zv(t) { return function() { return t } }

    function Qv(t) { return 1 == (t = +t) ? Kv : function(e, n) { return n - e ? function(t, e, n) { return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n,
                    function(i) { return Math.pow(t + i * e, n) } }(e, n, t) : Zv(isNaN(e) ? n : e) } }

    function Kv(t, e) { var n = e - t; return n ? function(t, e) { return function(n) { return t + n * e } }(t, n) : Zv(isNaN(t) ? e : t) } xv($v, Yv, { copy: function(t) { return Object.assign(new this.constructor, this, t) }, displayable: function() { return this.rgb().displayable() }, hex: Lv, formatHex: Lv, formatHsl: function() { return Xv(this).formatHsl() }, formatRgb: zv, toString: zv }), xv(Hv, Nv, bv($v, { brighter: function(t) { return t = null == t ? _v : Math.pow(_v, t), new Hv(this.r * t, this.g * t, this.b * t, this.opacity) }, darker: function(t) { return t = null == t ? wv : Math.pow(wv, t), new Hv(this.r * t, this.g * t, this.b * t, this.opacity) }, rgb: function() { return this }, displayable: function() { return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1 }, hex: jv, formatHex: jv, formatRgb: Iv, toString: Iv })), xv(qv, (function(t, e, n, i) { return 1 === arguments.length ? Xv(t) : new qv(t, e, n, null == i ? 1 : i) }), bv($v, { brighter: function(t) { return t = null == t ? _v : Math.pow(_v, t), new qv(this.h, this.s, this.l * t, this.opacity) }, darker: function(t) { return t = null == t ? wv : Math.pow(wv, t), new qv(this.h, this.s, this.l * t, this.opacity) }, rgb: function() { var t = this.h % 360 + 360 * (this.h < 0),
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                i = n + (n < .5 ? n : 1 - n) * e,
                r = 2 * n - i; return new Hv(Gv(t >= 240 ? t - 240 : t + 120, r, i), Gv(t, r, i), Gv(t < 120 ? t + 240 : t - 120, r, i), this.opacity) }, displayable: function() { return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1 }, formatHsl: function() { var t = this.opacity; return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")") } })); var Jv = function t(e) { var n = Qv(e);

        function i(t, e) { var i = n((t = Nv(t)).r, (e = Nv(e)).r),
                r = n(t.g, e.g),
                o = n(t.b, e.b),
                a = Kv(t.opacity, e.opacity); return function(e) { return t.r = i(e), t.g = r(e), t.b = o(e), t.opacity = a(e), t + "" } } return i.gamma = t, i }(1);

    function tm(t, e) { e || (e = []); var n, i = t ? Math.min(e.length, t.length) : 0,
            r = e.slice(); return function(o) { for (n = 0; n < i; ++n) r[n] = t[n] * (1 - o) + e[n] * o; return r } }

    function em(t, e) { var n, i = e ? e.length : 0,
            r = t ? Math.min(i, t.length) : 0,
            o = new Array(r),
            a = new Array(i); for (n = 0; n < r; ++n) o[n] = dm(t[n], e[n]); for (; n < i; ++n) a[n] = e[n]; return function(t) { for (n = 0; n < r; ++n) a[n] = o[n](t); return a } }

    function nm(t, e) { var n = new Date; return t = +t, e = +e,
            function(i) { return n.setTime(t * (1 - i) + e * i), n } }

    function im(t, e) { return t = +t, e = +e,
            function(n) { return t * (1 - n) + e * n } }

    function rm(t, e) { var n, i = {},
            r = {}; for (n in null !== t && "object" == typeof t || (t = {}), null !== e && "object" == typeof e || (e = {}), e) n in t ? i[n] = dm(t[n], e[n]) : r[n] = e[n]; return function(t) { for (n in i) r[n] = i[n](t); return r } } var om, am, sm, lm, cm = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        um = new RegExp(cm.source, "g");

    function fm(t, e) { var n, i, r, o = cm.lastIndex = um.lastIndex = 0,
            a = -1,
            s = [],
            l = []; for (t += "", e += "";
            (n = cm.exec(t)) && (i = um.exec(e));)(r = i.index) > o && (r = e.slice(o, r), s[a] ? s[a] += r : s[++a] = r), (n = n[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: im(n, i) })), o = um.lastIndex; return o < e.length && (r = e.slice(o), s[a] ? s[a] += r : s[++a] = r), s.length < 2 ? l[0] ? function(t) { return function(e) { return t(e) + "" } }(l[0].x) : function(t) { return function() { return t } }(e) : (e = l.length, function(t) { for (var n, i = 0; i < e; ++i) s[(n = l[i]).i] = n.x(t); return s.join("") }) }

    function dm(t, e) { var n, i = typeof e; return null == e || "boolean" === i ? Zv(e) : ("number" === i ? im : "string" === i ? (n = Yv(e)) ? (e = n, Jv) : fm : e instanceof Yv ? Jv : e instanceof Date ? nm : function(t) { return ArrayBuffer.isView(t) && !(t instanceof DataView) }(e) ? tm : Array.isArray(e) ? em : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? rm : im)(t, e) }

    function hm(t, e) { return t = +t, e = +e,
            function(n) { return Math.round(t * (1 - n) + e * n) } }

    function gm(t) { return null == t ? Fp : (lm || (lm = document.createElementNS("http://www.w3.org/2000/svg", "g")), lm.setAttribute("transform", t), (t = lm.transform.baseVal.consolidate()) ? Wp((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : Fp) }

    function pm(t, e, n, i) {
        function r(t) { return t.length ? t.pop() + " " : "" } return function(o, a) { var s = [],
                l = []; return o = t(o), a = t(a),
                function(t, i, r, o, a, s) { if (t !== r || i !== o) { var l = a.push("translate(", null, e, null, n);
                        s.push({ i: l - 4, x: im(t, r) }, { i: l - 2, x: im(i, o) }) } else(r || o) && a.push("translate(" + r + e + o + n) }(o.translateX, o.translateY, a.translateX, a.translateY, s, l),
                function(t, e, n, o) { t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), o.push({ i: n.push(r(n) + "rotate(", null, i) - 2, x: im(t, e) })) : e && n.push(r(n) + "rotate(" + e + i) }(o.rotate, a.rotate, s, l),
                function(t, e, n, o) { t !== e ? o.push({ i: n.push(r(n) + "skewX(", null, i) - 2, x: im(t, e) }) : e && n.push(r(n) + "skewX(" + e + i) }(o.skewX, a.skewX, s, l),
                function(t, e, n, i, o, a) { if (t !== n || e !== i) { var s = o.push(r(o) + "scale(", null, ",", null, ")");
                        a.push({ i: s - 4, x: im(t, n) }, { i: s - 2, x: im(e, i) }) } else 1 === n && 1 === i || o.push(r(o) + "scale(" + n + "," + i + ")") }(o.scaleX, o.scaleY, a.scaleX, a.scaleY, s, l), o = a = null,
                function(t) { for (var e, n = -1, i = l.length; ++n < i;) s[(e = l[n]).i] = e.x(t); return s.join("") } } } var vm, mm, ym = pm((function(t) { return "none" === t ? Fp : (om || (om = document.createElement("DIV"), am = document.documentElement, sm = document.defaultView), om.style.transform = t, t = sm.getComputedStyle(am.appendChild(om), null).getPropertyValue("transform"), am.removeChild(om), Wp(+(t = t.slice(7, -1).split(","))[0], +t[1], +t[2], +t[3], +t[4], +t[5])) }), "px, ", "px)", "deg)"),
        xm = pm(gm, ", ", ")", ")"),
        bm = 0,
        $m = 0,
        wm = 0,
        _m = 0,
        km = 0,
        Mm = 0,
        Sm = "object" == typeof performance && performance.now ? performance : Date,
        Am = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) { setTimeout(t, 17) };

    function Dm() { return km || (Am(Cm), km = Sm.now() + Mm) }

    function Cm() { km = 0 }

    function Em() { this._call = this._time = this._next = null }

    function Om(t, e, n) { var i = new Em; return i.restart(t, e, n), i }

    function Tm() { km = (_m = Sm.now()) + Mm, bm = $m = 0; try {! function() { Dm(), ++bm; for (var t, e = vm; e;)(t = km - e._time) >= 0 && e._call.call(null, t), e = e._next;--bm }() } finally { bm = 0,
                function() { var t, e, n = vm,
                        i = 1 / 0; for (; n;) n._call ? (i > n._time && (i = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : vm = e);
                    mm = t, Bm(i) }(), km = 0 } }

    function Pm() { var t = Sm.now(),
            e = t - _m;
        e > 1e3 && (Mm -= e, _m = t) }

    function Bm(t) { bm || ($m && ($m = clearTimeout($m)), t - km > 24 ? (t < 1 / 0 && ($m = setTimeout(Tm, t - Sm.now() - Mm)), wm && (wm = clearInterval(wm))) : (wm || (_m = Sm.now(), wm = setInterval(Pm, 1e3)), bm = 1, Am(Tm))) }

    function Lm(t, e, n) { var i = new Em; return e = null == e ? 0 : +e, i.restart((function(n) { i.stop(), t(n + e) }), e, n), i } Em.prototype = Om.prototype = { constructor: Em, restart: function(t, e, n) { if ("function" != typeof t) throw new TypeError("callback is not a function");
            n = (null == n ? Dm() : +n) + (null == e ? 0 : +e), this._next || mm === this || (mm ? mm._next = this : vm = this, mm = this), this._call = t, this._time = n, Bm() }, stop: function() { this._call && (this._call = null, this._time = 1 / 0, Bm()) } }; var zm = gv("start", "end", "cancel", "interrupt"),
        Ym = [];

    function Fm(t, e, n, i, r, o) { var a = t.__transition; if (a) { if (n in a) return } else t.__transition = {};! function(t, e, n) { var i, r = t.__transition;

            function o(t) { n.state = 1, n.timer.restart(a, n.delay, n.time), n.delay <= t && a(t - n.delay) }

            function a(o) { var c, u, f, d; if (1 !== n.state) return l(); for (c in r)
                    if ((d = r[c]).name === n.name) { if (3 === d.state) return Lm(a);
                        4 === d.state ? (d.state = 6, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[c]) : +c < e && (d.state = 6, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[c]) } if (Lm((function() { 3 === n.state && (n.state = 4, n.timer.restart(s, n.delay, n.time), s(o)) })), n.state = 2, n.on.call("start", t, t.__data__, n.index, n.group), 2 === n.state) { for (n.state = 3, i = new Array(f = n.tween.length), c = 0, u = -1; c < f; ++c)(d = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++u] = d);
                    i.length = u + 1 } }

            function s(e) { for (var r = e < n.duration ? n.ease.call(null, e / n.duration) : (n.timer.restart(l), n.state = 5, 1), o = -1, a = i.length; ++o < a;) i[o].call(t, r);
                5 === n.state && (n.on.call("end", t, t.__data__, n.index, n.group), l()) }

            function l() { for (var i in n.state = 6, n.timer.stop(), delete r[e], r) return;
                delete t.__transition } r[e] = n, n.timer = Om(o, 0, n.time) }(t, n, { name: e, index: i, group: r, on: zm, tween: Ym, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: 0 }) }

    function Wm(t, e) { var n = Nm(t, e); if (n.state > 0) throw new Error("too late; already scheduled"); return n }

    function Rm(t, e) { var n = Nm(t, e); if (n.state > 3) throw new Error("too late; already running"); return n }

    function Nm(t, e) { var n = t.__transition; if (!n || !(n = n[e])) throw new Error("transition not found"); return n }

    function Hm(t, e) { var n, i, r, o = t.__transition,
            a = !0; if (o) { for (r in e = null == e ? null : e + "", o)(n = o[r]).name === e ? (i = n.state > 2 && n.state < 5, n.state = 6, n.timer.stop(), n.on.call(i ? "interrupt" : "cancel", t, t.__data__, n.index, n.group), delete o[r]) : a = !1;
            a && delete t.__transition } }

    function jm(t, e) { var n, i; return function() { var r = Rm(this, t),
                o = r.tween; if (o !== n)
                for (var a = 0, s = (i = n = o).length; a < s; ++a)
                    if (i[a].name === e) {
                        (i = i.slice()).splice(a, 1); break } r.tween = i } }

    function Im(t, e, n) { var i, r; if ("function" != typeof n) throw new Error; return function() { var o = Rm(this, t),
                a = o.tween; if (a !== i) { r = (i = a).slice(); for (var s = { name: e, value: n }, l = 0, c = r.length; l < c; ++l)
                    if (r[l].name === e) { r[l] = s; break } l === c && r.push(s) } o.tween = r } }

    function Vm(t, e, n) { var i = t._id; return t.each((function() { var t = Rm(this, i);
                (t.value || (t.value = {}))[e] = n.apply(this, arguments) })),
            function(t) { return Nm(t, i).value[e] } }

    function Um(t, e) { var n; return ("number" == typeof e ? im : e instanceof Yv ? Jv : (n = Yv(e)) ? (e = n, Jv) : fm)(t, e) }

    function Xm(t) { return function() { this.removeAttribute(t) } }

    function qm(t) { return function() { this.removeAttributeNS(t.space, t.local) } }

    function Gm(t, e, n) { var i, r, o = n + ""; return function() { var a = this.getAttribute(t); return a === o ? null : a === i ? r : r = e(i = a, n) } }

    function Zm(t, e, n) { var i, r, o = n + ""; return function() { var a = this.getAttributeNS(t.space, t.local); return a === o ? null : a === i ? r : r = e(i = a, n) } }

    function Qm(t, e, n) { var i, r, o; return function() { var a, s, l = n(this); if (null != l) return (a = this.getAttribute(t)) === (s = l + "") ? null : a === i && s === r ? o : (r = s, o = e(i = a, l));
            this.removeAttribute(t) } }

    function Km(t, e, n) { var i, r, o; return function() { var a, s, l = n(this); if (null != l) return (a = this.getAttributeNS(t.space, t.local)) === (s = l + "") ? null : a === i && s === r ? o : (r = s, o = e(i = a, l));
            this.removeAttributeNS(t.space, t.local) } }

    function Jm(t, e) { return function(n) { this.setAttribute(t, e.call(this, n)) } }

    function ty(t, e) { return function(n) { this.setAttributeNS(t.space, t.local, e.call(this, n)) } }

    function ey(t, e) { var n, i;

        function r() { var r = e.apply(this, arguments); return r !== i && (n = (i = r) && ty(t, r)), n } return r._value = e, r }

    function ny(t, e) { var n, i;

        function r() { var r = e.apply(this, arguments); return r !== i && (n = (i = r) && Jm(t, r)), n } return r._value = e, r }

    function iy(t, e) { return function() { Wm(this, t).delay = +e.apply(this, arguments) } }

    function ry(t, e) { return e = +e,
            function() { Wm(this, t).delay = e } }

    function oy(t, e) { return function() { Rm(this, t).duration = +e.apply(this, arguments) } }

    function ay(t, e) { return e = +e,
            function() { Rm(this, t).duration = e } }

    function sy(t, e) { if ("function" != typeof e) throw new Error; return function() { Rm(this, t).ease = e } }

    function ly(t, e, n) { var i, r, o = function(t) { return (t + "").trim().split(/^|\s+/).every((function(t) { var e = t.indexOf("."); return e >= 0 && (t = t.slice(0, e)), !t || "start" === t })) }(e) ? Wm : Rm; return function() { var a = o(this, t),
                s = a.on;
            s !== i && (r = (i = s).copy()).on(e, n), a.on = r } } var cy = Cp.prototype.constructor;

    function uy(t) { return function() { this.style.removeProperty(t) } }

    function fy(t, e, n) { return function(i) { this.style.setProperty(t, e.call(this, i), n) } }

    function dy(t, e, n) { var i, r;

        function o() { var o = e.apply(this, arguments); return o !== r && (i = (r = o) && fy(t, o, n)), i } return o._value = e, o }

    function hy(t) { return function(e) { this.textContent = t.call(this, e) } }

    function gy(t) { var e, n;

        function i() { var i = t.apply(this, arguments); return i !== n && (e = (n = i) && hy(i)), e } return i._value = t, i } var py = 0;

    function vy(t, e, n, i) { this._groups = t, this._parents = e, this._name = n, this._id = i }

    function my(t) { return Cp().transition(t) }

    function yy() { return ++py } var xy = Cp.prototype;

    function by(t) { return +t }

    function $y(t) { return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2 } vy.prototype = my.prototype = { constructor: vy, select: function(t) { var e = this._name,
                n = this._id; "function" != typeof t && (t = Dg(t)); for (var i = this._groups, r = i.length, o = new Array(r), a = 0; a < r; ++a)
                for (var s, l, c = i[a], u = c.length, f = o[a] = new Array(u), d = 0; d < u; ++d)(s = c[d]) && (l = t.call(s, s.__data__, d, c)) && ("__data__" in s && (l.__data__ = s.__data__), f[d] = l, Fm(f[d], e, n, d, f, Nm(s, n))); return new vy(o, this._parents, e, n) }, selectAll: function(t) { var e = this._name,
                n = this._id; "function" != typeof t && (t = Eg(t)); for (var i = this._groups, r = i.length, o = [], a = [], s = 0; s < r; ++s)
                for (var l, c = i[s], u = c.length, f = 0; f < u; ++f)
                    if (l = c[f]) { for (var d, h = t.call(l, l.__data__, f, c), g = Nm(l, n), p = 0, v = h.length; p < v; ++p)(d = h[p]) && Fm(d, e, n, p, h, g);
                        o.push(h), a.push(l) } return new vy(o, a, e, n) }, filter: function(t) { "function" != typeof t && (t = Og(t)); for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
                for (var o, a = e[r], s = a.length, l = i[r] = [], c = 0; c < s; ++c)(o = a[c]) && t.call(o, o.__data__, c, a) && l.push(o); return new vy(i, this._parents, this._name, this._id) }, merge: function(t) { if (t._id !== this._id) throw new Error; for (var e = this._groups, n = t._groups, i = e.length, r = n.length, o = Math.min(i, r), a = new Array(i), s = 0; s < o; ++s)
                for (var l, c = e[s], u = n[s], f = c.length, d = a[s] = new Array(f), h = 0; h < f; ++h)(l = c[h] || u[h]) && (d[h] = l); for (; s < i; ++s) a[s] = e[s]; return new vy(a, this._parents, this._name, this._id) }, selection: function() { return new cy(this._groups, this._parents) }, transition: function() { for (var t = this._name, e = this._id, n = yy(), i = this._groups, r = i.length, o = 0; o < r; ++o)
                for (var a, s = i[o], l = s.length, c = 0; c < l; ++c)
                    if (a = s[c]) { var u = Nm(a, e);
                        Fm(a, t, n, c, s, { time: u.time + u.delay + u.duration, delay: 0, duration: u.duration, ease: u.ease }) } return new vy(i, this._parents, t, n) }, call: xy.call, nodes: xy.nodes, node: xy.node, size: xy.size, empty: xy.empty, each: xy.each, on: function(t, e) { var n = this._id; return arguments.length < 2 ? Nm(this.node(), n).on.on(t) : this.each(ly(n, t, e)) }, attr: function(t, e) { var n = _g(t),
                i = "transform" === n ? xm : Um; return this.attrTween(t, "function" == typeof e ? (n.local ? Km : Qm)(n, i, Vm(this, "attr." + t, e)) : null == e ? (n.local ? qm : Xm)(n) : (n.local ? Zm : Gm)(n, i, e)) }, attrTween: function(t, e) { var n = "attr." + t; if (arguments.length < 2) return (n = this.tween(n)) && n._value; if (null == e) return this.tween(n, null); if ("function" != typeof e) throw new Error; var i = _g(t); return this.tween(n, (i.local ? ey : ny)(i, e)) }, style: function(t, e, n) { var i = "transform" == (t += "") ? ym : Um; return null == e ? this.styleTween(t, function(t, e) { var n, i, r; return function() { var o = Xg(this, t),
                        a = (this.style.removeProperty(t), Xg(this, t)); return o === a ? null : o === n && a === i ? r : r = e(n = o, i = a) } }(t, i)).on("end.style." + t, uy(t)) : "function" == typeof e ? this.styleTween(t, function(t, e, n) { var i, r, o; return function() { var a = Xg(this, t),
                        s = n(this),
                        l = s + ""; return null == s && (this.style.removeProperty(t), l = s = Xg(this, t)), a === l ? null : a === i && l === r ? o : (r = l, o = e(i = a, s)) } }(t, i, Vm(this, "style." + t, e))).each(function(t, e) { var n, i, r, o, a = "style." + e,
                    s = "end." + a; return function() { var l = Rm(this, t),
                        c = l.on,
                        u = null == l.value[a] ? o || (o = uy(e)) : void 0;
                    c === n && r === u || (i = (n = c).copy()).on(s, r = u), l.on = i } }(this._id, t)) : this.styleTween(t, function(t, e, n) { var i, r, o = n + ""; return function() { var a = Xg(this, t); return a === o ? null : a === i ? r : r = e(i = a, n) } }(t, i, e), n).on("end.style." + t, null) }, styleTween: function(t, e, n) { var i = "style." + (t += ""); if (arguments.length < 2) return (i = this.tween(i)) && i._value; if (null == e) return this.tween(i, null); if ("function" != typeof e) throw new Error; return this.tween(i, dy(t, e, null == n ? "" : n)) }, text: function(t) { return this.tween("text", "function" == typeof t ? function(t) { return function() { var e = t(this);
                    this.textContent = null == e ? "" : e } }(Vm(this, "text", t)) : function(t) { return function() { this.textContent = t } }(null == t ? "" : t + "")) }, textTween: function(t) { var e = "text"; if (arguments.length < 1) return (e = this.tween(e)) && e._value; if (null == t) return this.tween(e, null); if ("function" != typeof t) throw new Error; return this.tween(e, gy(t)) }, remove: function() { return this.on("end.remove", function(t) { return function() { var e = this.parentNode; for (var n in this.__transition)
                        if (+n !== t) return;
                    e && e.removeChild(this) } }(this._id)) }, tween: function(t, e) { var n = this._id; if (t += "", arguments.length < 2) { for (var i, r = Nm(this.node(), n).tween, o = 0, a = r.length; o < a; ++o)
                    if ((i = r[o]).name === t) return i.value; return null } return this.each((null == e ? jm : Im)(n, t, e)) }, delay: function(t) { var e = this._id; return arguments.length ? this.each(("function" == typeof t ? iy : ry)(e, t)) : Nm(this.node(), e).delay }, duration: function(t) { var e = this._id; return arguments.length ? this.each(("function" == typeof t ? oy : ay)(e, t)) : Nm(this.node(), e).duration }, ease: function(t) { var e = this._id; return arguments.length ? this.each(sy(e, t)) : Nm(this.node(), e).ease }, end: function() { var t, e, n = this,
                i = n._id,
                r = n.size(); return new Promise((function(o, a) { var s = { value: a },
                    l = { value: function() { 0 == --r && o() } };
                n.each((function() { var n = Rm(this, i),
                        r = n.on;
                    r !== t && ((e = (t = r).copy())._.cancel.push(s), e._.interrupt.push(s), e._.end.push(l)), n.on = e })) })) } }; var wy = 1.70158;! function t(e) {
        function n(t) { return (t = +t) * t * (e * (t - 1) + t) } return e = +e, n.overshoot = t, n }(wy); var _y = function t(e) {
        function n(t) { return --t * t * ((t + 1) * e + t) + 1 } return e = +e, n.overshoot = t, n }(wy);! function t(e) {
        function n(t) { return ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2 } return e = +e, n.overshoot = t, n }(wy); var ky = { time: null, delay: 0, duration: 250, ease: $y };

    function My(t, e) { for (var n; !(n = t.__transition) || !(n = n[e]);)
            if (!(t = t.parentNode)) return ky.time = Dm(), ky; return n } Cp.prototype.interrupt = function(t) { return this.each((function() { Hm(this, t) })) }, Cp.prototype.transition = function(t) { var e, n;
        t instanceof vy ? (e = t._id, t = t._name) : (e = yy(), (n = ky).time = Dm(), t = null == t ? null : t + ""); for (var i = this._groups, r = i.length, o = 0; o < r; ++o)
            for (var a, s = i[o], l = s.length, c = 0; c < l; ++c)(a = s[c]) && Fm(a, t, e, c, s, n || My(a, e)); return new vy(i, this._parents, t, e) }; var Sy = [null]; var Ay = Math.PI,
        Dy = 2 * Ay,
        Cy = 1e-6,
        Ey = Dy - Cy;

    function Oy() { this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "" }

    function Ty() { return new Oy } Oy.prototype = Ty.prototype = { constructor: Oy, moveTo: function(t, e) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) }, closePath: function() { null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z") }, lineTo: function(t, e) { this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e) }, quadraticCurveTo: function(t, e, n, i) { this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +i) }, bezierCurveTo: function(t, e, n, i, r, o) { this._ += "C" + +t + "," + +e + "," + +n + "," + +i + "," + (this._x1 = +r) + "," + (this._y1 = +o) }, arcTo: function(t, e, n, i, r) { t = +t, e = +e, n = +n, i = +i, r = +r; var o = this._x1,
                a = this._y1,
                s = n - t,
                l = i - e,
                c = o - t,
                u = a - e,
                f = c * c + u * u; if (r < 0) throw new Error("negative radius: " + r); if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
            else if (f > Cy)
                if (Math.abs(u * s - l * c) > Cy && r) { var d = n - o,
                        h = i - a,
                        g = s * s + l * l,
                        p = d * d + h * h,
                        v = Math.sqrt(g),
                        m = Math.sqrt(f),
                        y = r * Math.tan((Ay - Math.acos((g + f - p) / (2 * v * m))) / 2),
                        x = y / m,
                        b = y / v;
                    Math.abs(x - 1) > Cy && (this._ += "L" + (t + x * c) + "," + (e + x * u)), this._ += "A" + r + "," + r + ",0,0," + +(u * d > c * h) + "," + (this._x1 = t + b * s) + "," + (this._y1 = e + b * l) } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
            else; }, arc: function(t, e, n, i, r, o) { t = +t, e = +e, o = !!o; var a = (n = +n) * Math.cos(i),
                s = n * Math.sin(i),
                l = t + a,
                c = e + s,
                u = 1 ^ o,
                f = o ? i - r : r - i; if (n < 0) throw new Error("negative radius: " + n);
            null === this._x1 ? this._ += "M" + l + "," + c : (Math.abs(this._x1 - l) > Cy || Math.abs(this._y1 - c) > Cy) && (this._ += "L" + l + "," + c), n && (f < 0 && (f = f % Dy + Dy), f > Ey ? this._ += "A" + n + "," + n + ",0,1," + u + "," + (t - a) + "," + (e - s) + "A" + n + "," + n + ",0,1," + u + "," + (this._x1 = l) + "," + (this._y1 = c) : f > Cy && (this._ += "A" + n + "," + n + ",0," + +(f >= Ay) + "," + u + "," + (this._x1 = t + n * Math.cos(r)) + "," + (this._y1 = e + n * Math.sin(r)))) }, rect: function(t, e, n, i) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +i + "h" + -n + "Z" }, toString: function() { return this._ } }; var Py = "$";

    function By() {}

    function Ly(t, e) { var n = new By; if (t instanceof By) t.each((function(t, e) { n.set(e, t) }));
        else if (Array.isArray(t)) { var i, r = -1,
                o = t.length; if (null == e)
                for (; ++r < o;) n.set(r, t[r]);
            else
                for (; ++r < o;) n.set(e(i = t[r], r, t), i) } else if (t)
            for (var a in t) n.set(a, t[a]); return n }

    function zy() {} By.prototype = Ly.prototype = { constructor: By, has: function(t) { return Py + t in this }, get: function(t) { return this[Py + t] }, set: function(t, e) { return this[Py + t] = e, this }, remove: function(t) { var e = Py + t; return e in this && delete this[e] }, clear: function() { for (var t in this) t[0] === Py && delete this[t] }, keys: function() { var t = []; for (var e in this) e[0] === Py && t.push(e.slice(1)); return t }, values: function() { var t = []; for (var e in this) e[0] === Py && t.push(this[e]); return t }, entries: function() { var t = []; for (var e in this) e[0] === Py && t.push({ key: e.slice(1), value: this[e] }); return t }, size: function() { var t = 0; for (var e in this) e[0] === Py && ++t; return t }, empty: function() { for (var t in this)
                if (t[0] === Py) return !1; return !0 }, each: function(t) { for (var e in this) e[0] === Py && t(this[e], e.slice(1), this) } }; var Yy = Ly.prototype;
    zy.prototype = { constructor: zy, has: Yy.has, add: function(t) { return this[Py + (t += "")] = t, this }, remove: Yy.remove, clear: Yy.clear, values: Yy.keys, size: Yy.size, empty: Yy.empty, each: Yy.each }; var Fy = {},
        Wy = {};

    function Ry(t) { return new Function("d", "return {" + t.map((function(t, e) { return JSON.stringify(t) + ": d[" + e + '] || ""' })).join(",") + "}") }

    function Ny(t) { var e = Object.create(null),
            n = []; return t.forEach((function(t) { for (var i in t) i in e || n.push(e[i] = i) })), n }

    function Hy(t, e) { var n = t + "",
            i = n.length; return i < e ? new Array(e - i + 1).join(0) + n : n }

    function jy(t) { var e = t.getUTCHours(),
            n = t.getUTCMinutes(),
            i = t.getUTCSeconds(),
            r = t.getUTCMilliseconds(); return isNaN(t) ? "Invalid Date" : function(t) { return t < 0 ? "-" + Hy(-t, 6) : t > 9999 ? "+" + Hy(t, 6) : Hy(t, 4) }(t.getUTCFullYear()) + "-" + Hy(t.getUTCMonth() + 1, 2) + "-" + Hy(t.getUTCDate(), 2) + (r ? "T" + Hy(e, 2) + ":" + Hy(n, 2) + ":" + Hy(i, 2) + "." + Hy(r, 3) + "Z" : i ? "T" + Hy(e, 2) + ":" + Hy(n, 2) + ":" + Hy(i, 2) + "Z" : n || e ? "T" + Hy(e, 2) + ":" + Hy(n, 2) + "Z" : "") } var Iy = function(t) { var e = new RegExp('["' + t + "\n\r]"),
                n = t.charCodeAt(0);

            function i(t, e) { var i, r = [],
                    o = t.length,
                    a = 0,
                    s = 0,
                    l = o <= 0,
                    c = !1;

                function u() { if (l) return Wy; if (c) return c = !1, Fy; var e, i, r = a; if (34 === t.charCodeAt(r)) { for (; a++ < o && 34 !== t.charCodeAt(a) || 34 === t.charCodeAt(++a);); return (e = a) >= o ? l = !0 : 10 === (i = t.charCodeAt(a++)) ? c = !0 : 13 === i && (c = !0, 10 === t.charCodeAt(a) && ++a), t.slice(r + 1, e - 1).replace(/""/g, '"') } for (; a < o;) { if (10 === (i = t.charCodeAt(e = a++))) c = !0;
                        else if (13 === i) c = !0, 10 === t.charCodeAt(a) && ++a;
                        else if (i !== n) continue; return t.slice(r, e) } return l = !0, t.slice(r, o) } for (10 === t.charCodeAt(o - 1) && --o, 13 === t.charCodeAt(o - 1) && --o;
                    (i = u()) !== Wy;) { for (var f = []; i !== Fy && i !== Wy;) f.push(i), i = u();
                    e && null == (f = e(f, s++)) || r.push(f) } return r }

            function r(e, n) { return e.map((function(e) { return n.map((function(t) { return a(e[t]) })).join(t) })) }

            function o(e) { return e.map(a).join(t) }

            function a(t) { return null == t ? "" : t instanceof Date ? jy(t) : e.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t } return { parse: function(t, e) { var n, r, o = i(t, (function(t, i) { if (n) return n(t, i - 1);
                        r = t, n = e ? function(t, e) { var n = Ry(t); return function(i, r) { return e(n(i), r, t) } }(t, e) : Ry(t) })); return o.columns = r || [], o }, parseRows: i, format: function(e, n) { return null == n && (n = Ny(e)), [n.map(a).join(t)].concat(r(e, n)).join("\n") }, formatBody: function(t, e) { return null == e && (e = Ny(t)), r(t, e).join("\n") }, formatRows: function(t) { return t.map(o).join("\n") }, formatRow: o, formatValue: a } }(","),
        Vy = Iy.parse;

    function Uy(t) { if (!t.ok) throw new Error(t.status + " " + t.statusText); return t.text() }

    function Xy(t, e) { return fetch(t, e).then(Uy) } var qy, Gy = (qy = Vy, function(t, e, n) { return 2 === arguments.length && "function" == typeof e && (n = e, e = void 0), Xy(t, e).then((function(t) { return qy(t, n) })) });

    function Zy(t) { if (!t.ok) throw new Error(t.status + " " + t.statusText); if (204 !== t.status && 205 !== t.status) return t.json() }

    function Qy() { return Math.random() }! function t(e) {
        function n(t, n) { return t = null == t ? 0 : +t, n = null == n ? 1 : +n, 1 === arguments.length ? (n = t, t = 0) : n -= t,
                function() { return e() * n + t } } return n.source = t, n }(Qy); var Ky = function t(e) {
        function n(t, n) { var i, r; return t = null == t ? 0 : +t, n = null == n ? 1 : +n,
                function() { var o; if (null != i) o = i, i = null;
                    else
                        do { i = 2 * e() - 1, o = 2 * e() - 1, r = i * i + o * o } while (!r || r > 1); return t + n * o * Math.sqrt(-2 * Math.log(r) / r) } } return n.source = t, n }(Qy);! function t(e) {
        function n() { var t = Ky.source(e).apply(this, arguments); return function() { return Math.exp(t()) } } return n.source = t, n }(Qy); var Jy = function t(e) {
        function n(t) { return function() { for (var n = 0, i = 0; i < t; ++i) n += e(); return n } } return n.source = t, n }(Qy);

    function tx(t, e) { switch (arguments.length) {
            case 0:
                break;
            case 1:
                this.range(t); break;
            default:
                this.range(e).domain(t) } return this }! function t(e) {
        function n(t) { var n = Jy.source(e)(t); return function() { return n() / t } } return n.source = t, n }(Qy),
    function t(e) {
        function n(t) { return function() { return -Math.log(1 - e()) / t } } return n.source = t, n }(Qy); var ex = Array.prototype,
        nx = ex.map,
        ix = ex.slice,
        rx = { name: "implicit" };

    function ox() { var t = Ly(),
            e = [],
            n = [],
            i = rx;

        function r(r) { var o = r + "",
                a = t.get(o); if (!a) { if (i !== rx) return i;
                t.set(o, a = e.push(r)) } return n[(a - 1) % n.length] } return r.domain = function(n) { if (!arguments.length) return e.slice();
            e = [], t = Ly(); for (var i, o, a = -1, s = n.length; ++a < s;) t.has(o = (i = n[a]) + "") || t.set(o, e.push(i)); return r }, r.range = function(t) { return arguments.length ? (n = ix.call(t), r) : n.slice() }, r.unknown = function(t) { return arguments.length ? (i = t, r) : i }, r.copy = function() { return ox(e, n).unknown(i) }, tx.apply(r, arguments), r }

    function ax() { var t, e, n = ox().unknown(void 0),
            i = n.domain,
            r = n.range,
            o = [0, 1],
            a = !1,
            s = 0,
            l = 0,
            c = .5;

        function u() { var n = i().length,
                u = o[1] < o[0],
                f = o[u - 0],
                d = o[1 - u];
            t = (d - f) / Math.max(1, n - s + 2 * l), a && (t = Math.floor(t)), f += (d - f - t * (n - s)) * c, e = t * (1 - s), a && (f = Math.round(f), e = Math.round(e)); var h = Ip(n).map((function(e) { return f + t * e })); return r(u ? h.reverse() : h) } return delete n.unknown, n.domain = function(t) { return arguments.length ? (i(t), u()) : i() }, n.range = function(t) { return arguments.length ? (o = [+t[0], +t[1]], u()) : o.slice() }, n.rangeRound = function(t) { return o = [+t[0], +t[1]], a = !0, u() }, n.bandwidth = function() { return e }, n.step = function() { return t }, n.round = function(t) { return arguments.length ? (a = !!t, u()) : a }, n.padding = function(t) { return arguments.length ? (s = Math.min(1, l = +t), u()) : s }, n.paddingInner = function(t) { return arguments.length ? (s = Math.min(1, t), u()) : s }, n.paddingOuter = function(t) { return arguments.length ? (l = +t, u()) : l }, n.align = function(t) { return arguments.length ? (c = Math.max(0, Math.min(1, t)), u()) : c }, n.copy = function() { return ax(i(), o).round(a).paddingInner(s).paddingOuter(l).align(c) }, tx.apply(u(), arguments) }

    function sx(t) { var e = t.copy; return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() { return sx(e()) }, t }

    function lx() { return sx(ax.apply(null, arguments).paddingInner(1)) }

    function cx(t) { return +t } var ux = [0, 1];

    function fx(t) { return t }

    function dx(t, e) { return (e -= t = +t) ? function(n) { return (n - t) / e } : function(t) { return function() { return t } }(isNaN(e) ? NaN : .5) }

    function hx(t) { var e, n = t[0],
            i = t[t.length - 1]; return n > i && (e = n, n = i, i = e),
            function(t) { return Math.max(n, Math.min(i, t)) } }

    function gx(t, e, n) { var i = t[0],
            r = t[1],
            o = e[0],
            a = e[1]; return r < i ? (i = dx(r, i), o = n(a, o)) : (i = dx(i, r), o = n(o, a)),
            function(t) { return o(i(t)) } }

    function px(t, e, n) { var i = Math.min(t.length, e.length) - 1,
            r = new Array(i),
            o = new Array(i),
            a = -1; for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < i;) r[a] = dx(t[a], t[a + 1]), o[a] = n(e[a], e[a + 1]); return function(e) { var n = Hp(t, e, 1, i) - 1; return o[n](r[n](e)) } }

    function vx(t, e) { return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown()) }

    function mx() { var t, e, n, i, r, o, a = ux,
            s = ux,
            l = dm,
            c = fx;

        function u() { return i = Math.min(a.length, s.length) > 2 ? px : gx, r = o = null, f }

        function f(e) { return isNaN(e = +e) ? n : (r || (r = i(a.map(t), s, l)))(t(c(e))) } return f.invert = function(n) { return c(e((o || (o = i(s, a.map(t), im)))(n))) }, f.domain = function(t) { return arguments.length ? (a = nx.call(t, cx), c === fx || (c = hx(a)), u()) : a.slice() }, f.range = function(t) { return arguments.length ? (s = ix.call(t), u()) : s.slice() }, f.rangeRound = function(t) { return s = ix.call(t), l = hm, u() }, f.clamp = function(t) { return arguments.length ? (c = t ? hx(a) : fx, f) : c !== fx }, f.interpolate = function(t) { return arguments.length ? (l = t, u()) : l }, f.unknown = function(t) { return arguments.length ? (n = t, f) : n },
            function(n, i) { return t = n, e = i, u() } }

    function yx(t, e) { return mx()(t, e) }

    function xx(t, e, n, i) { var r, o = Zp(t, e, n); switch ((i = Yd(null == i ? ",f" : i)).type) {
            case "s":
                var a = Math.max(Math.abs(t), Math.abs(e)); return null != i.precision || isNaN(r = function(t, e) { return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Bd(e) / 3))) - Bd(Math.abs(t))) }(o, a)) || (i.precision = r), Id(i, a);
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
                null != i.precision || isNaN(r = function(t, e) { return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Bd(e) - Bd(t)) + 1 }(o, Math.max(Math.abs(t), Math.abs(e)))) || (i.precision = r - ("e" === i.type)); break;
            case "f":
            case "%":
                null != i.precision || isNaN(r = function(t) { return Math.max(0, -Bd(Math.abs(t))) }(o)) || (i.precision = r - 2 * ("%" === i.type)) } return jd(i) }

    function bx(t) { var e = t.domain; return t.ticks = function(t) { var n = e(); return qp(n[0], n[n.length - 1], null == t ? 10 : t) }, t.tickFormat = function(t, n) { var i = e(); return xx(i[0], i[i.length - 1], null == t ? 10 : t, n) }, t.nice = function(n) { null == n && (n = 10); var i, r = e(),
                o = 0,
                a = r.length - 1,
                s = r[o],
                l = r[a]; return l < s && (i = s, s = l, l = i, i = o, o = a, a = i), (i = Gp(s, l, n)) > 0 ? i = Gp(s = Math.floor(s / i) * i, l = Math.ceil(l / i) * i, n) : i < 0 && (i = Gp(s = Math.ceil(s * i) / i, l = Math.floor(l * i) / i, n)), i > 0 ? (r[o] = Math.floor(s / i) * i, r[a] = Math.ceil(l / i) * i, e(r)) : i < 0 && (r[o] = Math.ceil(s * i) / i, r[a] = Math.floor(l * i) / i, e(r)), t }, t }

    function $x() { var t = yx(fx, fx); return t.copy = function() { return vx(t, $x()) }, tx.apply(t, arguments), bx(t) }

    function wx(t, e) { var n, i = 0,
            r = (t = t.slice()).length - 1,
            o = t[i],
            a = t[r]; return a < o && (n = i, i = r, r = n, n = o, o = a, a = n), t[i] = e.floor(o), t[r] = e.ceil(a), t }

    function _x(t) { return Math.log(t) }

    function kx(t) { return Math.exp(t) }

    function Mx(t) { return -Math.log(-t) }

    function Sx(t) { return -Math.exp(-t) }

    function Ax(t) { return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t }

    function Dx(t) { return function(e) { return -t(-e) } }

    function Cx(t) { var e, n, i = t(_x, kx),
            r = i.domain,
            o = 10;

        function a() { return e = function(t) { return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function(e) { return Math.log(e) / t }) }(o), n = function(t) { return 10 === t ? Ax : t === Math.E ? Math.exp : function(e) { return Math.pow(t, e) } }(o), r()[0] < 0 ? (e = Dx(e), n = Dx(n), t(Mx, Sx)) : t(_x, kx), i } return i.base = function(t) { return arguments.length ? (o = +t, a()) : o }, i.domain = function(t) { return arguments.length ? (r(t), a()) : r() }, i.ticks = function(t) { var i, a = r(),
                s = a[0],
                l = a[a.length - 1];
            (i = l < s) && (d = s, s = l, l = d); var c, u, f, d = e(s),
                h = e(l),
                g = null == t ? 10 : +t,
                p = []; if (!(o % 1) && h - d < g) { if (d = Math.round(d) - 1, h = Math.round(h) + 1, s > 0) { for (; d < h; ++d)
                        for (u = 1, c = n(d); u < o; ++u)
                            if (!((f = c * u) < s)) { if (f > l) break;
                                p.push(f) } } else
                    for (; d < h; ++d)
                        for (u = o - 1, c = n(d); u >= 1; --u)
                            if (!((f = c * u) < s)) { if (f > l) break;
                                p.push(f) } } else p = qp(d, h, Math.min(h - d, g)).map(n); return i ? p.reverse() : p }, i.tickFormat = function(t, r) { if (null == r && (r = 10 === o ? ".0e" : ","), "function" != typeof r && (r = jd(r)), t === 1 / 0) return r;
            null == t && (t = 10); var a = Math.max(1, o * t / i.ticks().length); return function(t) { var i = t / n(Math.round(e(t))); return i * o < o - .5 && (i *= o), i <= a ? r(t) : "" } }, i.nice = function() { return r(wx(r(), { floor: function(t) { return n(Math.floor(e(t))) }, ceil: function(t) { return n(Math.ceil(e(t))) } })) }, i }

    function Ex() { var t = Cx(mx()).domain([1, 10]); return t.copy = function() { return vx(t, Ex()).base(t.base()) }, tx.apply(t, arguments), t }

    function Ox(t) { return function(e) { return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t) } }

    function Tx(t) { return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t) }

    function Px(t) { return t < 0 ? -t * t : t * t }

    function Bx(t) { var e = t(fx, fx),
            n = 1;

        function i() { return 1 === n ? t(fx, fx) : .5 === n ? t(Tx, Px) : t(Ox(n), Ox(1 / n)) } return e.exponent = function(t) { return arguments.length ? (n = +t, i()) : n }, bx(e) }

    function Lx() { var t = Bx(mx()); return t.copy = function() { return vx(t, Lx()).exponent(t.exponent()) }, tx.apply(t, arguments), t }

    function zx() { return Lx.apply(null, arguments).exponent(.5) } var Yx = new Date,
        Fx = new Date;

    function Wx(t, e, n, i) {
        function r(e) { return t(e = 0 === arguments.length ? new Date : new Date(+e)), e } return r.floor = function(e) { return t(e = new Date(+e)), e }, r.ceil = function(n) { return t(n = new Date(n - 1)), e(n, 1), t(n), n }, r.round = function(t) { var e = r(t),
                n = r.ceil(t); return t - e < n - t ? e : n }, r.offset = function(t, n) { return e(t = new Date(+t), null == n ? 1 : Math.floor(n)), t }, r.range = function(n, i, o) { var a, s = []; if (n = r.ceil(n), o = null == o ? 1 : Math.floor(o), !(n < i && o > 0)) return s;
            do { s.push(a = new Date(+n)), e(n, o), t(n) } while (a < n && n < i); return s }, r.filter = function(n) { return Wx((function(e) { if (e >= e)
                    for (; t(e), !n(e);) e.setTime(e - 1) }), (function(t, i) { if (t >= t)
                    if (i < 0)
                        for (; ++i <= 0;)
                            for (; e(t, -1), !n(t););
                    else
                        for (; --i >= 0;)
                            for (; e(t, 1), !n(t);); })) }, n && (r.count = function(e, i) { return Yx.setTime(+e), Fx.setTime(+i), t(Yx), t(Fx), Math.floor(n(Yx, Fx)) }, r.every = function(t) { return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? r.filter(i ? function(e) { return i(e) % t == 0 } : function(e) { return r.count(0, e) % t == 0 }) : r : null }), r } var Rx = Wx((function() {}), (function(t, e) { t.setTime(+t + e) }), (function(t, e) { return e - t }));
    Rx.every = function(t) { return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Wx((function(e) { e.setTime(Math.floor(e / t) * t) }), (function(e, n) { e.setTime(+e + n * t) }), (function(e, n) { return (n - e) / t })) : Rx : null }; var Nx = Rx;
    Rx.range; var Hx = 1e3,
        jx = 6e4,
        Ix = 36e5,
        Vx = 864e5,
        Ux = 6048e5,
        Xx = Wx((function(t) { t.setTime(t - t.getMilliseconds()) }), (function(t, e) { t.setTime(+t + e * Hx) }), (function(t, e) { return (e - t) / Hx }), (function(t) { return t.getUTCSeconds() })),
        qx = Xx;
    Xx.range; var Gx = Wx((function(t) { t.setTime(t - t.getMilliseconds() - t.getSeconds() * Hx) }), (function(t, e) { t.setTime(+t + e * jx) }), (function(t, e) { return (e - t) / jx }), (function(t) { return t.getMinutes() })),
        Zx = Gx;
    Gx.range; var Qx = Wx((function(t) { t.setTime(t - t.getMilliseconds() - t.getSeconds() * Hx - t.getMinutes() * jx) }), (function(t, e) { t.setTime(+t + e * Ix) }), (function(t, e) { return (e - t) / Ix }), (function(t) { return t.getHours() })),
        Kx = Qx;
    Qx.range; var Jx = Wx((function(t) { t.setHours(0, 0, 0, 0) }), (function(t, e) { t.setDate(t.getDate() + e) }), (function(t, e) { return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * jx) / Vx }), (function(t) { return t.getDate() - 1 })),
        tb = Jx;

    function eb(t) { return Wx((function(e) { e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0) }), (function(t, e) { t.setDate(t.getDate() + 7 * e) }), (function(t, e) { return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * jx) / Ux })) } Jx.range; var nb = eb(0),
        ib = eb(1),
        rb = eb(2),
        ob = eb(3),
        ab = eb(4),
        sb = eb(5),
        lb = eb(6);
    nb.range, ib.range, rb.range, ob.range, ab.range, sb.range, lb.range; var cb = Wx((function(t) { t.setDate(1), t.setHours(0, 0, 0, 0) }), (function(t, e) { t.setMonth(t.getMonth() + e) }), (function(t, e) { return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear()) }), (function(t) { return t.getMonth() })),
        ub = cb;
    cb.range; var fb = Wx((function(t) { t.setMonth(0, 1), t.setHours(0, 0, 0, 0) }), (function(t, e) { t.setFullYear(t.getFullYear() + e) }), (function(t, e) { return e.getFullYear() - t.getFullYear() }), (function(t) { return t.getFullYear() }));
    fb.every = function(t) { return isFinite(t = Math.floor(t)) && t > 0 ? Wx((function(e) { e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0) }), (function(e, n) { e.setFullYear(e.getFullYear() + n * t) })) : null }; var db = fb;
    fb.range; var hb = Wx((function(t) { t.setUTCSeconds(0, 0) }), (function(t, e) { t.setTime(+t + e * jx) }), (function(t, e) { return (e - t) / jx }), (function(t) { return t.getUTCMinutes() })),
        gb = hb;
    hb.range; var pb = Wx((function(t) { t.setUTCMinutes(0, 0, 0) }), (function(t, e) { t.setTime(+t + e * Ix) }), (function(t, e) { return (e - t) / Ix }), (function(t) { return t.getUTCHours() })),
        vb = pb;
    pb.range; var mb = Wx((function(t) { t.setUTCHours(0, 0, 0, 0) }), (function(t, e) { t.setUTCDate(t.getUTCDate() + e) }), (function(t, e) { return (e - t) / Vx }), (function(t) { return t.getUTCDate() - 1 })),
        yb = mb;

    function xb(t) { return Wx((function(e) { e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0) }), (function(t, e) { t.setUTCDate(t.getUTCDate() + 7 * e) }), (function(t, e) { return (e - t) / Ux })) } mb.range; var bb = xb(0),
        $b = xb(1),
        wb = xb(2),
        _b = xb(3),
        kb = xb(4),
        Mb = xb(5),
        Sb = xb(6);
    bb.range, $b.range, wb.range, _b.range, kb.range, Mb.range, Sb.range; var Ab = Wx((function(t) { t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0) }), (function(t, e) { t.setUTCMonth(t.getUTCMonth() + e) }), (function(t, e) { return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear()) }), (function(t) { return t.getUTCMonth() })),
        Db = Ab;
    Ab.range; var Cb = Wx((function(t) { t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0) }), (function(t, e) { t.setUTCFullYear(t.getUTCFullYear() + e) }), (function(t, e) { return e.getUTCFullYear() - t.getUTCFullYear() }), (function(t) { return t.getUTCFullYear() }));
    Cb.every = function(t) { return isFinite(t = Math.floor(t)) && t > 0 ? Wx((function(e) { e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0) }), (function(e, n) { e.setUTCFullYear(e.getUTCFullYear() + n * t) })) : null }; var Eb = Cb;

    function Ob(t) { if (0 <= t.y && t.y < 100) { var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L); return e.setFullYear(t.y), e } return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L) }

    function Tb(t) { if (0 <= t.y && t.y < 100) { var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L)); return e.setUTCFullYear(t.y), e } return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L)) }

    function Pb(t, e, n) { return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 } } Cb.range; var Bb, Lb, zb, Yb = { "-": "", _: " ", 0: "0" },
        Fb = /^\s*\d+/,
        Wb = /^%/,
        Rb = /[\\^$*+?|[\]().{}]/g;

    function Nb(t, e, n) { var i = t < 0 ? "-" : "",
            r = (i ? -t : t) + "",
            o = r.length; return i + (o < n ? new Array(n - o + 1).join(e) + r : r) }

    function Hb(t) { return t.replace(Rb, "\\$&") }

    function jb(t) { return new RegExp("^(?:" + t.map(Hb).join("|") + ")", "i") }

    function Ib(t) { for (var e = {}, n = -1, i = t.length; ++n < i;) e[t[n].toLowerCase()] = n; return e }

    function Vb(t, e, n) { var i = Fb.exec(e.slice(n, n + 1)); return i ? (t.w = +i[0], n + i[0].length) : -1 }

    function Ub(t, e, n) { var i = Fb.exec(e.slice(n, n + 1)); return i ? (t.u = +i[0], n + i[0].length) : -1 }

    function Xb(t, e, n) { var i = Fb.exec(e.slice(n, n + 2)); return i ? (t.U = +i[0], n + i[0].length) : -1 }

    function qb(t, e, n) { var i = Fb.exec(e.slice(n, n + 2)); return i ? (t.V = +i[0], n + i[0].length) : -1 }

    function Gb(t, e, n) { var i = Fb.exec(e.slice(n, n + 2)); return i ? (t.W = +i[0], n + i[0].length) : -1 }

    function Zb(t, e, n) { var i = Fb.exec(e.slice(n, n + 4)); return i ? (t.y = +i[0], n + i[0].length) : -1 }

    function Qb(t, e, n) { var i = Fb.exec(e.slice(n, n + 2)); return i ? (t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3), n + i[0].length) : -1 }

    function Kb(t, e, n) { var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6)); return i ? (t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")), n + i[0].length) : -1 }

    function Jb(t, e, n) { var i = Fb.exec(e.slice(n, n + 1)); return i ? (t.q = 3 * i[0] - 3, n + i[0].length) : -1 }

    function t$(t, e, n) { var i = Fb.exec(e.slice(n, n + 2)); return i ? (t.m = i[0] - 1, n + i[0].length) : -1 }

    function e$(t, e, n) { var i = Fb.exec(e.slice(n, n + 2)); return i ? (t.d = +i[0], n + i[0].length) : -1 }

    function n$(t, e, n) { var i = Fb.exec(e.slice(n, n + 3)); return i ? (t.m = 0, t.d = +i[0], n + i[0].length) : -1 }

    function i$(t, e, n) { var i = Fb.exec(e.slice(n, n + 2)); return i ? (t.H = +i[0], n + i[0].length) : -1 }

    function r$(t, e, n) { var i = Fb.exec(e.slice(n, n + 2)); return i ? (t.M = +i[0], n + i[0].length) : -1 }

    function o$(t, e, n) { var i = Fb.exec(e.slice(n, n + 2)); return i ? (t.S = +i[0], n + i[0].length) : -1 }

    function a$(t, e, n) { var i = Fb.exec(e.slice(n, n + 3)); return i ? (t.L = +i[0], n + i[0].length) : -1 }

    function s$(t, e, n) { var i = Fb.exec(e.slice(n, n + 6)); return i ? (t.L = Math.floor(i[0] / 1e3), n + i[0].length) : -1 }

    function l$(t, e, n) { var i = Wb.exec(e.slice(n, n + 1)); return i ? n + i[0].length : -1 }

    function c$(t, e, n) { var i = Fb.exec(e.slice(n)); return i ? (t.Q = +i[0], n + i[0].length) : -1 }

    function u$(t, e, n) { var i = Fb.exec(e.slice(n)); return i ? (t.s = +i[0], n + i[0].length) : -1 }

    function f$(t, e) { return Nb(t.getDate(), e, 2) }

    function d$(t, e) { return Nb(t.getHours(), e, 2) }

    function h$(t, e) { return Nb(t.getHours() % 12 || 12, e, 2) }

    function g$(t, e) { return Nb(1 + tb.count(db(t), t), e, 3) }

    function p$(t, e) { return Nb(t.getMilliseconds(), e, 3) }

    function v$(t, e) { return p$(t, e) + "000" }

    function m$(t, e) { return Nb(t.getMonth() + 1, e, 2) }

    function y$(t, e) { return Nb(t.getMinutes(), e, 2) }

    function x$(t, e) { return Nb(t.getSeconds(), e, 2) }

    function b$(t) { var e = t.getDay(); return 0 === e ? 7 : e }

    function $$(t, e) { return Nb(nb.count(db(t) - 1, t), e, 2) }

    function w$(t) { var e = t.getDay(); return e >= 4 || 0 === e ? ab(t) : ab.ceil(t) }

    function _$(t, e) { return t = w$(t), Nb(ab.count(db(t), t) + (4 === db(t).getDay()), e, 2) }

    function k$(t) { return t.getDay() }

    function M$(t, e) { return Nb(ib.count(db(t) - 1, t), e, 2) }

    function S$(t, e) { return Nb(t.getFullYear() % 100, e, 2) }

    function A$(t, e) { return Nb((t = w$(t)).getFullYear() % 100, e, 2) }

    function D$(t, e) { return Nb(t.getFullYear() % 1e4, e, 4) }

    function C$(t, e) { var n = t.getDay(); return Nb((t = n >= 4 || 0 === n ? ab(t) : ab.ceil(t)).getFullYear() % 1e4, e, 4) }

    function E$(t) { var e = t.getTimezoneOffset(); return (e > 0 ? "-" : (e *= -1, "+")) + Nb(e / 60 | 0, "0", 2) + Nb(e % 60, "0", 2) }

    function O$(t, e) { return Nb(t.getUTCDate(), e, 2) }

    function T$(t, e) { return Nb(t.getUTCHours(), e, 2) }

    function P$(t, e) { return Nb(t.getUTCHours() % 12 || 12, e, 2) }

    function B$(t, e) { return Nb(1 + yb.count(Eb(t), t), e, 3) }

    function L$(t, e) { return Nb(t.getUTCMilliseconds(), e, 3) }

    function z$(t, e) { return L$(t, e) + "000" }

    function Y$(t, e) { return Nb(t.getUTCMonth() + 1, e, 2) }

    function F$(t, e) { return Nb(t.getUTCMinutes(), e, 2) }

    function W$(t, e) { return Nb(t.getUTCSeconds(), e, 2) }

    function R$(t) { var e = t.getUTCDay(); return 0 === e ? 7 : e }

    function N$(t, e) { return Nb(bb.count(Eb(t) - 1, t), e, 2) }

    function H$(t) { var e = t.getUTCDay(); return e >= 4 || 0 === e ? kb(t) : kb.ceil(t) }

    function j$(t, e) { return t = H$(t), Nb(kb.count(Eb(t), t) + (4 === Eb(t).getUTCDay()), e, 2) }

    function I$(t) { return t.getUTCDay() }

    function V$(t, e) { return Nb($b.count(Eb(t) - 1, t), e, 2) }

    function U$(t, e) { return Nb(t.getUTCFullYear() % 100, e, 2) }

    function X$(t, e) { return Nb((t = H$(t)).getUTCFullYear() % 100, e, 2) }

    function q$(t, e) { return Nb(t.getUTCFullYear() % 1e4, e, 4) }

    function G$(t, e) { var n = t.getUTCDay(); return Nb((t = n >= 4 || 0 === n ? kb(t) : kb.ceil(t)).getUTCFullYear() % 1e4, e, 4) }

    function Z$() { return "+0000" }

    function Q$() { return "%" }

    function K$(t) { return +t }

    function J$(t) { return Math.floor(+t / 1e3) }! function(t) { Bb = function(t) { var e = t.dateTime,
                n = t.date,
                i = t.time,
                r = t.periods,
                o = t.days,
                a = t.shortDays,
                s = t.months,
                l = t.shortMonths,
                c = jb(r),
                u = Ib(r),
                f = jb(o),
                d = Ib(o),
                h = jb(a),
                g = Ib(a),
                p = jb(s),
                v = Ib(s),
                m = jb(l),
                y = Ib(l),
                x = { a: function(t) { return a[t.getDay()] }, A: function(t) { return o[t.getDay()] }, b: function(t) { return l[t.getMonth()] }, B: function(t) { return s[t.getMonth()] }, c: null, d: f$, e: f$, f: v$, g: A$, G: C$, H: d$, I: h$, j: g$, L: p$, m: m$, M: y$, p: function(t) { return r[+(t.getHours() >= 12)] }, q: function(t) { return 1 + ~~(t.getMonth() / 3) }, Q: K$, s: J$, S: x$, u: b$, U: $$, V: _$, w: k$, W: M$, x: null, X: null, y: S$, Y: D$, Z: E$, "%": Q$ },
                b = { a: function(t) { return a[t.getUTCDay()] }, A: function(t) { return o[t.getUTCDay()] }, b: function(t) { return l[t.getUTCMonth()] }, B: function(t) { return s[t.getUTCMonth()] }, c: null, d: O$, e: O$, f: z$, g: X$, G: G$, H: T$, I: P$, j: B$, L: L$, m: Y$, M: F$, p: function(t) { return r[+(t.getUTCHours() >= 12)] }, q: function(t) { return 1 + ~~(t.getUTCMonth() / 3) }, Q: K$, s: J$, S: W$, u: R$, U: N$, V: j$, w: I$, W: V$, x: null, X: null, y: U$, Y: q$, Z: Z$, "%": Q$ },
                $ = { a: function(t, e, n) { var i = h.exec(e.slice(n)); return i ? (t.w = g[i[0].toLowerCase()], n + i[0].length) : -1 }, A: function(t, e, n) { var i = f.exec(e.slice(n)); return i ? (t.w = d[i[0].toLowerCase()], n + i[0].length) : -1 }, b: function(t, e, n) { var i = m.exec(e.slice(n)); return i ? (t.m = y[i[0].toLowerCase()], n + i[0].length) : -1 }, B: function(t, e, n) { var i = p.exec(e.slice(n)); return i ? (t.m = v[i[0].toLowerCase()], n + i[0].length) : -1 }, c: function(t, n, i) { return k(t, e, n, i) }, d: e$, e: e$, f: s$, g: Qb, G: Zb, H: i$, I: i$, j: n$, L: a$, m: t$, M: r$, p: function(t, e, n) { var i = c.exec(e.slice(n)); return i ? (t.p = u[i[0].toLowerCase()], n + i[0].length) : -1 }, q: Jb, Q: c$, s: u$, S: o$, u: Ub, U: Xb, V: qb, w: Vb, W: Gb, x: function(t, e, i) { return k(t, n, e, i) }, X: function(t, e, n) { return k(t, i, e, n) }, y: Qb, Y: Zb, Z: Kb, "%": l$ };

            function w(t, e) { return function(n) { var i, r, o, a = [],
                        s = -1,
                        l = 0,
                        c = t.length; for (n instanceof Date || (n = new Date(+n)); ++s < c;) 37 === t.charCodeAt(s) && (a.push(t.slice(l, s)), null != (r = Yb[i = t.charAt(++s)]) ? i = t.charAt(++s) : r = "e" === i ? " " : "0", (o = e[i]) && (i = o(n, r)), a.push(i), l = s + 1); return a.push(t.slice(l, s)), a.join("") } }

            function _(t, e) { return function(n) { var i, r, o = Pb(1900, void 0, 1); if (k(o, t, n += "", 0) != n.length) return null; if ("Q" in o) return new Date(o.Q); if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0)); if (e && !("Z" in o) && (o.Z = 0), "p" in o && (o.H = o.H % 12 + 12 * o.p), void 0 === o.m && (o.m = "q" in o ? o.q : 0), "V" in o) { if (o.V < 1 || o.V > 53) return null; "w" in o || (o.w = 1), "Z" in o ? (r = (i = Tb(Pb(o.y, 0, 1))).getUTCDay(), i = r > 4 || 0 === r ? $b.ceil(i) : $b(i), i = yb.offset(i, 7 * (o.V - 1)), o.y = i.getUTCFullYear(), o.m = i.getUTCMonth(), o.d = i.getUTCDate() + (o.w + 6) % 7) : (r = (i = Ob(Pb(o.y, 0, 1))).getDay(), i = r > 4 || 0 === r ? ib.ceil(i) : ib(i), i = tb.offset(i, 7 * (o.V - 1)), o.y = i.getFullYear(), o.m = i.getMonth(), o.d = i.getDate() + (o.w + 6) % 7) } else("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), r = "Z" in o ? Tb(Pb(o.y, 0, 1)).getUTCDay() : Ob(Pb(o.y, 0, 1)).getDay(), o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (r + 5) % 7 : o.w + 7 * o.U - (r + 6) % 7); return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, Tb(o)) : Ob(o) } }

            function k(t, e, n, i) { for (var r, o, a = 0, s = e.length, l = n.length; a < s;) { if (i >= l) return -1; if (37 === (r = e.charCodeAt(a++))) { if (r = e.charAt(a++), !(o = $[r in Yb ? e.charAt(a++) : r]) || (i = o(t, n, i)) < 0) return -1 } else if (r != n.charCodeAt(i++)) return -1 } return i } return x.x = w(n, x), x.X = w(i, x), x.c = w(e, x), b.x = w(n, b), b.X = w(i, b), b.c = w(e, b), { format: function(t) { var e = w(t += "", x); return e.toString = function() { return t }, e }, parse: function(t) { var e = _(t += "", !1); return e.toString = function() { return t }, e }, utcFormat: function(t) { var e = w(t += "", b); return e.toString = function() { return t }, e }, utcParse: function(t) { var e = _(t += "", !0); return e.toString = function() { return t }, e } } }(t), Lb = Bb.format, Bb.parse, zb = Bb.utcFormat, Bb.utcParse }({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] }); var tw = 1e3,
        ew = 6e4,
        nw = 36e5,
        iw = 864e5,
        rw = 2592e6,
        ow = 31536e6;

    function aw(t) { return new Date(t) }

    function sw(t) { return t instanceof Date ? +t : +new Date(+t) }

    function lw(t, e, n, i, r, o, a, s, l) { var c = yx(fx, fx),
            u = c.invert,
            f = c.domain,
            d = l(".%L"),
            h = l(":%S"),
            g = l("%I:%M"),
            p = l("%I %p"),
            v = l("%a %d"),
            m = l("%b %d"),
            y = l("%B"),
            x = l("%Y"),
            b = [
                [a, 1, tw],
                [a, 5, 5e3],
                [a, 15, 15e3],
                [a, 30, 3e4],
                [o, 1, ew],
                [o, 5, 3e5],
                [o, 15, 9e5],
                [o, 30, 18e5],
                [r, 1, nw],
                [r, 3, 108e5],
                [r, 6, 216e5],
                [r, 12, 432e5],
                [i, 1, iw],
                [i, 2, 1728e5],
                [n, 1, 6048e5],
                [e, 1, rw],
                [e, 3, 7776e6],
                [t, 1, ow]
            ];

        function $(s) { return (a(s) < s ? d : o(s) < s ? h : r(s) < s ? g : i(s) < s ? p : e(s) < s ? n(s) < s ? v : m : t(s) < s ? y : x)(s) }

        function w(e, n, i, r) { if (null == e && (e = 10), "number" == typeof e) { var o = Math.abs(i - n) / e,
                    a = Np((function(t) { return t[2] })).right(b, o);
                a === b.length ? (r = Zp(n / ow, i / ow, e), e = t) : a ? (r = (a = b[o / b[a - 1][2] < b[a][2] / o ? a - 1 : a])[1], e = a[0]) : (r = Math.max(Zp(n, i, e), 1), e = s) } return null == r ? e : e.every(r) } return c.invert = function(t) { return new Date(u(t)) }, c.domain = function(t) { return arguments.length ? f(nx.call(t, sw)) : f().map(aw) }, c.ticks = function(t, e) { var n, i = f(),
                r = i[0],
                o = i[i.length - 1],
                a = o < r; return a && (n = r, r = o, o = n), n = (n = w(t, r, o, e)) ? n.range(r, o + 1) : [], a ? n.reverse() : n }, c.tickFormat = function(t, e) { return null == e ? $ : l(e) }, c.nice = function(t, e) { var n = f(); return (t = w(t, n[0], n[n.length - 1], e)) ? f(wx(n, t)) : c }, c.copy = function() { return vx(c, lw(t, e, n, i, r, o, a, s, l)) }, c }

    function cw() { return tx.apply(lw(db, ub, nb, tb, Kx, Zx, qx, Nx, Lb).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments) }

    function uw() { return tx.apply(lw(Eb, Db, bb, yb, vb, gb, qx, Nx, zb).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments) }

    function fw(t) { return function() { return t } } var dw = Math.abs,
        hw = Math.atan2,
        gw = Math.cos,
        pw = Math.max,
        vw = Math.min,
        mw = Math.sin,
        yw = Math.sqrt,
        xw = 1e-12,
        bw = Math.PI,
        $w = bw / 2,
        ww = 2 * bw;

    function _w(t) { return t > 1 ? 0 : t < -1 ? bw : Math.acos(t) }

    function kw(t) { return t >= 1 ? $w : t <= -1 ? -$w : Math.asin(t) }

    function Mw(t) { return t.innerRadius }

    function Sw(t) { return t.outerRadius }

    function Aw(t) { return t.startAngle }

    function Dw(t) { return t.endAngle }

    function Cw(t) { return t && t.padAngle }

    function Ew(t, e, n, i, r, o, a, s) { var l = n - t,
            c = i - e,
            u = a - r,
            f = s - o,
            d = f * l - u * c; if (!(d * d < xw)) return [t + (d = (u * (e - o) - f * (t - r)) / d) * l, e + d * c] }

    function Ow(t, e, n, i, r, o, a) { var s = t - n,
            l = e - i,
            c = (a ? o : -o) / yw(s * s + l * l),
            u = c * l,
            f = -c * s,
            d = t + u,
            h = e + f,
            g = n + u,
            p = i + f,
            v = (d + g) / 2,
            m = (h + p) / 2,
            y = g - d,
            x = p - h,
            b = y * y + x * x,
            $ = r - o,
            w = d * p - g * h,
            _ = (x < 0 ? -1 : 1) * yw(pw(0, $ * $ * b - w * w)),
            k = (w * x - y * _) / b,
            M = (-w * y - x * _) / b,
            S = (w * x + y * _) / b,
            A = (-w * y + x * _) / b,
            D = k - v,
            C = M - m,
            E = S - v,
            O = A - m; return D * D + C * C > E * E + O * O && (k = S, M = A), { cx: k, cy: M, x01: -u, y01: -f, x11: k * (r / $ - 1), y11: M * (r / $ - 1) } }

    function Tw() { var t = Mw,
            e = Sw,
            n = fw(0),
            i = null,
            r = Aw,
            o = Dw,
            a = Cw,
            s = null;

        function l() { var l, c, u = +t.apply(this, arguments),
                f = +e.apply(this, arguments),
                d = r.apply(this, arguments) - $w,
                h = o.apply(this, arguments) - $w,
                g = dw(h - d),
                p = h > d; if (s || (s = l = Ty()), f < u && (c = f, f = u, u = c), f > xw)
                if (g > ww - xw) s.moveTo(f * gw(d), f * mw(d)), s.arc(0, 0, f, d, h, !p), u > xw && (s.moveTo(u * gw(h), u * mw(h)), s.arc(0, 0, u, h, d, p));
                else { var v, m, y = d,
                        x = h,
                        b = d,
                        $ = h,
                        w = g,
                        _ = g,
                        k = a.apply(this, arguments) / 2,
                        M = k > xw && (i ? +i.apply(this, arguments) : yw(u * u + f * f)),
                        S = vw(dw(f - u) / 2, +n.apply(this, arguments)),
                        A = S,
                        D = S; if (M > xw) { var C = kw(M / u * mw(k)),
                            E = kw(M / f * mw(k));
                        (w -= 2 * C) > xw ? (b += C *= p ? 1 : -1, $ -= C) : (w = 0, b = $ = (d + h) / 2), (_ -= 2 * E) > xw ? (y += E *= p ? 1 : -1, x -= E) : (_ = 0, y = x = (d + h) / 2) } var O = f * gw(y),
                        T = f * mw(y),
                        P = u * gw($),
                        B = u * mw($); if (S > xw) { var L, z = f * gw(x),
                            Y = f * mw(x),
                            F = u * gw(b),
                            W = u * mw(b); if (g < bw && (L = Ew(O, T, F, W, z, Y, P, B))) { var R = O - L[0],
                                N = T - L[1],
                                H = z - L[0],
                                j = Y - L[1],
                                I = 1 / mw(_w((R * H + N * j) / (yw(R * R + N * N) * yw(H * H + j * j))) / 2),
                                V = yw(L[0] * L[0] + L[1] * L[1]);
                            A = vw(S, (u - V) / (I - 1)), D = vw(S, (f - V) / (I + 1)) } } _ > xw ? D > xw ? (v = Ow(F, W, O, T, f, D, p), m = Ow(z, Y, P, B, f, D, p), s.moveTo(v.cx + v.x01, v.cy + v.y01), D < S ? s.arc(v.cx, v.cy, D, hw(v.y01, v.x01), hw(m.y01, m.x01), !p) : (s.arc(v.cx, v.cy, D, hw(v.y01, v.x01), hw(v.y11, v.x11), !p), s.arc(0, 0, f, hw(v.cy + v.y11, v.cx + v.x11), hw(m.cy + m.y11, m.cx + m.x11), !p), s.arc(m.cx, m.cy, D, hw(m.y11, m.x11), hw(m.y01, m.x01), !p))) : (s.moveTo(O, T), s.arc(0, 0, f, y, x, !p)) : s.moveTo(O, T), u > xw && w > xw ? A > xw ? (v = Ow(P, B, z, Y, u, -A, p), m = Ow(O, T, F, W, u, -A, p), s.lineTo(v.cx + v.x01, v.cy + v.y01), A < S ? s.arc(v.cx, v.cy, A, hw(v.y01, v.x01), hw(m.y01, m.x01), !p) : (s.arc(v.cx, v.cy, A, hw(v.y01, v.x01), hw(v.y11, v.x11), !p), s.arc(0, 0, u, hw(v.cy + v.y11, v.cx + v.x11), hw(m.cy + m.y11, m.cx + m.x11), p), s.arc(m.cx, m.cy, A, hw(m.y11, m.x11), hw(m.y01, m.x01), !p))) : s.arc(0, 0, u, $, b, p) : s.lineTo(P, B) } else s.moveTo(0, 0); if (s.closePath(), l) return s = null, l + "" || null } return l.centroid = function() { var n = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2,
                i = (+r.apply(this, arguments) + +o.apply(this, arguments)) / 2 - bw / 2; return [gw(i) * n, mw(i) * n] }, l.innerRadius = function(e) { return arguments.length ? (t = "function" == typeof e ? e : fw(+e), l) : t }, l.outerRadius = function(t) { return arguments.length ? (e = "function" == typeof t ? t : fw(+t), l) : e }, l.cornerRadius = function(t) { return arguments.length ? (n = "function" == typeof t ? t : fw(+t), l) : n }, l.padRadius = function(t) { return arguments.length ? (i = null == t ? null : "function" == typeof t ? t : fw(+t), l) : i }, l.startAngle = function(t) { return arguments.length ? (r = "function" == typeof t ? t : fw(+t), l) : r }, l.endAngle = function(t) { return arguments.length ? (o = "function" == typeof t ? t : fw(+t), l) : o }, l.padAngle = function(t) { return arguments.length ? (a = "function" == typeof t ? t : fw(+t), l) : a }, l.context = function(t) { return arguments.length ? (s = null == t ? null : t, l) : s }, l }

    function Pw(t) { this._context = t }

    function Bw(t) { return new Pw(t) }

    function Lw(t) { return t[0] }

    function zw(t) { return t[1] }

    function Yw() { var t = Lw,
            e = zw,
            n = fw(!0),
            i = null,
            r = Bw,
            o = null;

        function a(a) { var s, l, c, u = a.length,
                f = !1; for (null == i && (o = r(c = Ty())), s = 0; s <= u; ++s) !(s < u && n(l = a[s], s, a)) === f && ((f = !f) ? o.lineStart() : o.lineEnd()), f && o.point(+t(l, s, a), +e(l, s, a)); if (c) return o = null, c + "" || null } return a.x = function(e) { return arguments.length ? (t = "function" == typeof e ? e : fw(+e), a) : t }, a.y = function(t) { return arguments.length ? (e = "function" == typeof t ? t : fw(+t), a) : e }, a.defined = function(t) { return arguments.length ? (n = "function" == typeof t ? t : fw(!!t), a) : n }, a.curve = function(t) { return arguments.length ? (r = t, null != i && (o = r(i)), a) : r }, a.context = function(t) { return arguments.length ? (null == t ? i = o = null : o = r(i = t), a) : i }, a }

    function Fw() { var t = Lw,
            e = null,
            n = fw(0),
            i = zw,
            r = fw(!0),
            o = null,
            a = Bw,
            s = null;

        function l(l) { var c, u, f, d, h, g = l.length,
                p = !1,
                v = new Array(g),
                m = new Array(g); for (null == o && (s = a(h = Ty())), c = 0; c <= g; ++c) { if (!(c < g && r(d = l[c], c, l)) === p)
                    if (p = !p) u = c, s.areaStart(), s.lineStart();
                    else { for (s.lineEnd(), s.lineStart(), f = c - 1; f >= u; --f) s.point(v[f], m[f]);
                        s.lineEnd(), s.areaEnd() } p && (v[c] = +t(d, c, l), m[c] = +n(d, c, l), s.point(e ? +e(d, c, l) : v[c], i ? +i(d, c, l) : m[c])) } if (h) return s = null, h + "" || null }

        function c() { return Yw().defined(r).curve(a).context(o) } return l.x = function(n) { return arguments.length ? (t = "function" == typeof n ? n : fw(+n), e = null, l) : t }, l.x0 = function(e) { return arguments.length ? (t = "function" == typeof e ? e : fw(+e), l) : t }, l.x1 = function(t) { return arguments.length ? (e = null == t ? null : "function" == typeof t ? t : fw(+t), l) : e }, l.y = function(t) { return arguments.length ? (n = "function" == typeof t ? t : fw(+t), i = null, l) : n }, l.y0 = function(t) { return arguments.length ? (n = "function" == typeof t ? t : fw(+t), l) : n }, l.y1 = function(t) { return arguments.length ? (i = null == t ? null : "function" == typeof t ? t : fw(+t), l) : i }, l.lineX0 = l.lineY0 = function() { return c().x(t).y(n) }, l.lineY1 = function() { return c().x(t).y(i) }, l.lineX1 = function() { return c().x(e).y(n) }, l.defined = function(t) { return arguments.length ? (r = "function" == typeof t ? t : fw(!!t), l) : r }, l.curve = function(t) { return arguments.length ? (a = t, null != o && (s = a(o)), l) : a }, l.context = function(t) { return arguments.length ? (null == t ? o = s = null : s = a(o = t), l) : o }, l }

    function Ww(t, e) { return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN }

    function Rw(t) { return t }

    function Nw() { var t = Rw,
            e = Ww,
            n = null,
            i = fw(0),
            r = fw(ww),
            o = fw(0);

        function a(a) { var s, l, c, u, f, d = a.length,
                h = 0,
                g = new Array(d),
                p = new Array(d),
                v = +i.apply(this, arguments),
                m = Math.min(ww, Math.max(-ww, r.apply(this, arguments) - v)),
                y = Math.min(Math.abs(m) / d, o.apply(this, arguments)),
                x = y * (m < 0 ? -1 : 1); for (s = 0; s < d; ++s)(f = p[g[s] = s] = +t(a[s], s, a)) > 0 && (h += f); for (null != e ? g.sort((function(t, n) { return e(p[t], p[n]) })) : null != n && g.sort((function(t, e) { return n(a[t], a[e]) })), s = 0, c = h ? (m - d * x) / h : 0; s < d; ++s, v = u) l = g[s], u = v + ((f = p[l]) > 0 ? f * c : 0) + x, p[l] = { data: a[l], index: s, value: f, startAngle: v, endAngle: u, padAngle: y }; return p } return a.value = function(e) { return arguments.length ? (t = "function" == typeof e ? e : fw(+e), a) : t }, a.sortValues = function(t) { return arguments.length ? (e = t, n = null, a) : e }, a.sort = function(t) { return arguments.length ? (n = t, e = null, a) : n }, a.startAngle = function(t) { return arguments.length ? (i = "function" == typeof t ? t : fw(+t), a) : i }, a.endAngle = function(t) { return arguments.length ? (r = "function" == typeof t ? t : fw(+t), a) : r }, a.padAngle = function(t) { return arguments.length ? (o = "function" == typeof t ? t : fw(+t), a) : o }, a } Pw.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._point = 0 }, lineEnd: function() {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, e) { switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e); break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(t, e) } } }; var Hw = Array.prototype.slice;

    function jw(t, e, n) { t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + n) / 6) }

    function Iw(t) { this._context = t }

    function Vw(t) { return new Iw(t) }

    function Uw(t, e) { this._context = t, this._t = e }

    function Xw(t) { return new Uw(t, .5) }

    function qw(t) { return new Uw(t, 0) }

    function Gw(t) { return new Uw(t, 1) }

    function Zw(t, e) { if ((r = t.length) > 1)
            for (var n, i, r, o = 1, a = t[e[0]], s = a.length; o < r; ++o)
                for (i = a, a = t[e[o]], n = 0; n < s; ++n) a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1] }

    function Qw(t) { for (var e = t.length, n = new Array(e); --e >= 0;) n[e] = e; return n }

    function Kw(t, e) { return t[e] }

    function Jw() { var t = fw([]),
            e = Qw,
            n = Zw,
            i = Kw;

        function r(r) { var o, a, s = t.apply(this, arguments),
                l = r.length,
                c = s.length,
                u = new Array(c); for (o = 0; o < c; ++o) { for (var f, d = s[o], h = u[o] = new Array(l), g = 0; g < l; ++g) h[g] = f = [0, +i(r[g], d, g, r)], f.data = r[g];
                h.key = d } for (o = 0, a = e(u); o < c; ++o) u[a[o]].index = o; return n(u, a), u } return r.keys = function(e) { return arguments.length ? (t = "function" == typeof e ? e : fw(Hw.call(e)), r) : t }, r.value = function(t) { return arguments.length ? (i = "function" == typeof t ? t : fw(+t), r) : i }, r.order = function(t) { return arguments.length ? (e = null == t ? Qw : "function" == typeof t ? t : fw(Hw.call(t)), r) : e }, r.offset = function(t) { return arguments.length ? (n = null == t ? Zw : t, r) : n }, r }

    function t_(t, e) { if ((s = t.length) > 0)
            for (var n, i, r, o, a, s, l = 0, c = t[e[0]].length; l < c; ++l)
                for (o = a = 0, n = 0; n < s; ++n)(r = (i = t[e[n]][l])[1] - i[0]) > 0 ? (i[0] = o, i[1] = o += r) : r < 0 ? (i[1] = a, i[0] = a += r) : (i[0] = 0, i[1] = r) }

    function e_() { this._ = null }

    function n_(t) { t.U = t.C = t.L = t.R = t.P = t.N = null }

    function i_(t, e) { var n = e,
            i = e.R,
            r = n.U;
        r ? r.L === n ? r.L = i : r.R = i : t._ = i, i.U = r, n.U = i, n.R = i.L, n.R && (n.R.U = n), i.L = n }

    function r_(t, e) { var n = e,
            i = e.L,
            r = n.U;
        r ? r.L === n ? r.L = i : r.R = i : t._ = i, i.U = r, n.U = i, n.L = i.R, n.L && (n.L.U = n), i.R = n }

    function o_(t) { for (; t.L;) t = t.L; return t }

    function a_(t, e, n, i) { var r = [null, null],
            o = E_.push(r) - 1; return r.left = t, r.right = e, n && l_(r, t, e, n), i && l_(r, e, t, i), D_[t.index].halfedges.push(o), D_[e.index].halfedges.push(o), r }

    function s_(t, e, n) { var i = [e, n]; return i.left = t, i }

    function l_(t, e, n, i) { t[0] || t[1] ? t.left === n ? t[1] = i : t[0] = i : (t[0] = i, t.left = e, t.right = n) }

    function c_(t, e, n, i, r) { var o, a = t[0],
            s = t[1],
            l = a[0],
            c = a[1],
            u = 0,
            f = 1,
            d = s[0] - l,
            h = s[1] - c; if (o = e - l, d || !(o > 0)) { if (o /= d, d < 0) { if (o < u) return;
                o < f && (f = o) } else if (d > 0) { if (o > f) return;
                o > u && (u = o) } if (o = i - l, d || !(o < 0)) { if (o /= d, d < 0) { if (o > f) return;
                    o > u && (u = o) } else if (d > 0) { if (o < u) return;
                    o < f && (f = o) } if (o = n - c, h || !(o > 0)) { if (o /= h, h < 0) { if (o < u) return;
                        o < f && (f = o) } else if (h > 0) { if (o > f) return;
                        o > u && (u = o) } if (o = r - c, h || !(o < 0)) { if (o /= h, h < 0) { if (o > f) return;
                            o > u && (u = o) } else if (h > 0) { if (o < u) return;
                            o < f && (f = o) } return !(u > 0 || f < 1) || (u > 0 && (t[0] = [l + u * d, c + u * h]), f < 1 && (t[1] = [l + f * d, c + f * h]), !0) } } } } }

    function u_(t, e, n, i, r) { var o = t[1]; if (o) return !0; var a, s, l = t[0],
            c = t.left,
            u = t.right,
            f = c[0],
            d = c[1],
            h = u[0],
            g = u[1],
            p = (f + h) / 2,
            v = (d + g) / 2; if (g === d) { if (p < e || p >= i) return; if (f > h) { if (l) { if (l[1] >= r) return } else l = [p, n];
                o = [p, r] } else { if (l) { if (l[1] < n) return } else l = [p, r];
                o = [p, n] } } else if (s = v - (a = (f - h) / (g - d)) * p, a < -1 || a > 1)
            if (f > h) { if (l) { if (l[1] >= r) return } else l = [(n - s) / a, n];
                o = [(r - s) / a, r] } else { if (l) { if (l[1] < n) return } else l = [(r - s) / a, r];
                o = [(n - s) / a, n] } else if (d < g) { if (l) { if (l[0] >= i) return } else l = [e, a * e + s];
            o = [i, a * i + s] } else { if (l) { if (l[0] < e) return } else l = [i, a * i + s];
            o = [e, a * e + s] } return t[0] = l, t[1] = o, !0 }

    function f_(t, e) { var n = t.site,
            i = e.left,
            r = e.right; return n === r && (r = i, i = n), r ? Math.atan2(r[1] - i[1], r[0] - i[0]) : (n === i ? (i = e[1], r = e[0]) : (i = e[0], r = e[1]), Math.atan2(i[0] - r[0], r[1] - i[1])) }

    function d_(t, e) { return e[+(e.left !== t.site)] }

    function h_(t, e) { return e[+(e.left === t.site)] } Iw.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0 }, lineEnd: function() { switch (this._point) {
                case 3:
                    jw(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1) }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, e) { switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e); break;
                case 1:
                    this._point = 2; break;
                case 2:
                    this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default:
                    jw(this, t, e) } this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e } }, Uw.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x = this._y = NaN, this._point = 0 }, lineEnd: function() { 0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line) }, point: function(t, e) { switch (t = +t, e = +e, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e); break;
                case 1:
                    this._point = 2;
                default:
                    if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t, e);
                    else { var n = this._x * (1 - this._t) + t * this._t;
                        this._context.lineTo(n, this._y), this._context.lineTo(n, e) } } this._x = t, this._y = e } }, e_.prototype = { constructor: e_, insert: function(t, e) { var n, i, r; if (t) { if (e.P = t, e.N = t.N, t.N && (t.N.P = e), t.N = e, t.R) { for (t = t.R; t.L;) t = t.L;
                    t.L = e } else t.R = e;
                n = t } else this._ ? (t = o_(this._), e.P = null, e.N = t, t.P = t.L = e, n = t) : (e.P = e.N = null, this._ = e, n = null); for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C;) n === (i = n.U).L ? (r = i.R) && r.C ? (n.C = r.C = !1, i.C = !0, t = i) : (t === n.R && (i_(this, n), n = (t = n).U), n.C = !1, i.C = !0, r_(this, i)) : (r = i.L) && r.C ? (n.C = r.C = !1, i.C = !0, t = i) : (t === n.L && (r_(this, n), n = (t = n).U), n.C = !1, i.C = !0, i_(this, i)), n = t.U;
            this._.C = !1 }, remove: function(t) { t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null; var e, n, i, r = t.U,
                o = t.L,
                a = t.R; if (n = o ? a ? o_(a) : o : a, r ? r.L === t ? r.L = n : r.R = n : this._ = n, o && a ? (i = n.C, n.C = t.C, n.L = o, o.U = n, n !== a ? (r = n.U, n.U = t.U, t = n.R, r.L = t, n.R = a, a.U = n) : (n.U = r, r = n, t = n.R)) : (i = t.C, t = n), t && (t.U = r), !i)
                if (t && t.C) t.C = !1;
                else { do { if (t === this._) break; if (t === r.L) { if ((e = r.R).C && (e.C = !1, r.C = !0, i_(this, r), e = r.R), e.L && e.L.C || e.R && e.R.C) { e.R && e.R.C || (e.L.C = !1, e.C = !0, r_(this, e), e = r.R), e.C = r.C, r.C = e.R.C = !1, i_(this, r), t = this._; break } } else if ((e = r.L).C && (e.C = !1, r.C = !0, r_(this, r), e = r.L), e.L && e.L.C || e.R && e.R.C) { e.L && e.L.C || (e.R.C = !1, e.C = !0, i_(this, e), e = r.L), e.C = r.C, r.C = e.L.C = !1, r_(this, r), t = this._; break } e.C = !0, t = r, r = r.U } while (!t.C);
                    t && (t.C = !1) } } }; var g_, p_ = [];

    function v_() { n_(this), this.x = this.y = this.arc = this.site = this.cy = null }

    function m_(t) { var e = t.P,
            n = t.N; if (e && n) { var i = e.site,
                r = t.site,
                o = n.site; if (i !== o) { var a = r[0],
                    s = r[1],
                    l = i[0] - a,
                    c = i[1] - s,
                    u = o[0] - a,
                    f = o[1] - s,
                    d = 2 * (l * f - c * u); if (!(d >= -P_)) { var h = l * l + c * c,
                        g = u * u + f * f,
                        p = (f * h - c * g) / d,
                        v = (l * g - u * h) / d,
                        m = p_.pop() || new v_;
                    m.arc = t, m.site = r, m.x = p + a, m.y = (m.cy = v + s) + Math.sqrt(p * p + v * v), t.circle = m; for (var y = null, x = C_._; x;)
                        if (m.y < x.y || m.y === x.y && m.x <= x.x) { if (!x.L) { y = x.P; break } x = x.L } else { if (!x.R) { y = x; break } x = x.R } C_.insert(y, m), y || (g_ = m) } } } }

    function y_(t) { var e = t.circle;
        e && (e.P || (g_ = e.N), C_.remove(e), p_.push(e), n_(e), t.circle = null) } var x_ = [];

    function b_() { n_(this), this.edge = this.site = this.circle = null }

    function $_(t) { var e = x_.pop() || new b_; return e.site = t, e }

    function w_(t) { y_(t), A_.remove(t), x_.push(t), n_(t) }

    function __(t) { var e = t.circle,
            n = e.x,
            i = e.cy,
            r = [n, i],
            o = t.P,
            a = t.N,
            s = [t];
        w_(t); for (var l = o; l.circle && Math.abs(n - l.circle.x) < T_ && Math.abs(i - l.circle.cy) < T_;) o = l.P, s.unshift(l), w_(l), l = o;
        s.unshift(l), y_(l); for (var c = a; c.circle && Math.abs(n - c.circle.x) < T_ && Math.abs(i - c.circle.cy) < T_;) a = c.N, s.push(c), w_(c), c = a;
        s.push(c), y_(c); var u, f = s.length; for (u = 1; u < f; ++u) c = s[u], l = s[u - 1], l_(c.edge, l.site, c.site, r);
        l = s[0], (c = s[f - 1]).edge = a_(l.site, c.site, null, r), m_(l), m_(c) }

    function k_(t) { for (var e, n, i, r, o = t[0], a = t[1], s = A_._; s;)
            if ((i = M_(s, a) - o) > T_) s = s.L;
            else { if (!((r = o - S_(s, a)) > T_)) { i > -T_ ? (e = s.P, n = s) : r > -T_ ? (e = s, n = s.N) : e = n = s; break } if (!s.R) { e = s; break } s = s.R }!
        function(t) { D_[t.index] = { site: t, halfedges: [] } }(t); var l = $_(t); if (A_.insert(e, l), e || n) { if (e === n) return y_(e), n = $_(e.site), A_.insert(l, n), l.edge = n.edge = a_(e.site, l.site), m_(e), void m_(n); if (n) { y_(e), y_(n); var c = e.site,
                    u = c[0],
                    f = c[1],
                    d = t[0] - u,
                    h = t[1] - f,
                    g = n.site,
                    p = g[0] - u,
                    v = g[1] - f,
                    m = 2 * (d * v - h * p),
                    y = d * d + h * h,
                    x = p * p + v * v,
                    b = [(v * y - h * x) / m + u, (d * x - p * y) / m + f];
                l_(n.edge, c, g, b), l.edge = a_(c, t, null, b), n.edge = a_(t, g, null, b), m_(e), m_(n) } else l.edge = a_(e.site, l.site) } }

    function M_(t, e) { var n = t.site,
            i = n[0],
            r = n[1],
            o = r - e; if (!o) return i; var a = t.P; if (!a) return -1 / 0; var s = (n = a.site)[0],
            l = n[1],
            c = l - e; if (!c) return s; var u = s - i,
            f = 1 / o - 1 / c,
            d = u / c; return f ? (-d + Math.sqrt(d * d - 2 * f * (u * u / (-2 * c) - l + c / 2 + r - o / 2))) / f + i : (i + s) / 2 }

    function S_(t, e) { var n = t.N; if (n) return M_(n, e); var i = t.site; return i[1] === e ? i[0] : 1 / 0 } var A_, D_, C_, E_, O_, T_ = 1e-6,
        P_ = 1e-12;

    function B_(t, e) { return e[1] - t[1] || e[0] - t[0] }

    function L_(t, e) { var n, i, r, o = t.sort(B_).pop(); for (E_ = [], D_ = new Array(t.length), A_ = new e_, C_ = new e_;;)
            if (r = g_, o && (!r || o[1] < r.y || o[1] === r.y && o[0] < r.x)) o[0] === n && o[1] === i || (k_(o), n = o[0], i = o[1]), o = t.pop();
            else { if (!r) break;
                __(r.arc) } if (function() { for (var t, e, n, i, r = 0, o = D_.length; r < o; ++r)
                    if ((t = D_[r]) && (i = (e = t.halfedges).length)) { var a = new Array(i),
                            s = new Array(i); for (n = 0; n < i; ++n) a[n] = n, s[n] = f_(t, E_[e[n]]); for (a.sort((function(t, e) { return s[e] - s[t] })), n = 0; n < i; ++n) s[n] = e[a[n]]; for (n = 0; n < i; ++n) e[n] = s[n] } }(), e) { var a = +e[0][0],
                s = +e[0][1],
                l = +e[1][0],
                c = +e[1][1];! function(t, e, n, i) { for (var r, o = E_.length; o--;) u_(r = E_[o], t, e, n, i) && c_(r, t, e, n, i) && (Math.abs(r[0][0] - r[1][0]) > T_ || Math.abs(r[0][1] - r[1][1]) > T_) || delete E_[o] }(a, s, l, c),
            function(t, e, n, i) { var r, o, a, s, l, c, u, f, d, h, g, p, v = D_.length,
                    m = !0; for (r = 0; r < v; ++r)
                    if (o = D_[r]) { for (a = o.site, s = (l = o.halfedges).length; s--;) E_[l[s]] || l.splice(s, 1); for (s = 0, c = l.length; s < c;) g = (h = h_(o, E_[l[s]]))[0], p = h[1], f = (u = d_(o, E_[l[++s % c]]))[0], d = u[1], (Math.abs(g - f) > T_ || Math.abs(p - d) > T_) && (l.splice(s, 0, E_.push(s_(a, h, Math.abs(g - t) < T_ && i - p > T_ ? [t, Math.abs(f - t) < T_ ? d : i] : Math.abs(p - i) < T_ && n - g > T_ ? [Math.abs(d - i) < T_ ? f : n, i] : Math.abs(g - n) < T_ && p - e > T_ ? [n, Math.abs(f - n) < T_ ? d : e] : Math.abs(p - e) < T_ && g - t > T_ ? [Math.abs(d - e) < T_ ? f : t, e] : null)) - 1), ++c);
                        c && (m = !1) } if (m) { var y, x, b, $ = 1 / 0; for (r = 0, m = null; r < v; ++r)(o = D_[r]) && (b = (y = (a = o.site)[0] - t) * y + (x = a[1] - e) * x) < $ && ($ = b, m = o); if (m) { var w = [t, e],
                            _ = [t, i],
                            k = [n, i],
                            M = [n, e];
                        m.halfedges.push(E_.push(s_(a = m.site, w, _)) - 1, E_.push(s_(a, _, k)) - 1, E_.push(s_(a, k, M)) - 1, E_.push(s_(a, M, w)) - 1) } } for (r = 0; r < v; ++r)(o = D_[r]) && (o.halfedges.length || delete D_[r]) }(a, s, l, c) } this.edges = E_, this.cells = D_, A_ = C_ = E_ = D_ = null }

    function z_(t, e, n) { this.k = t, this.x = e, this.y = n }

    function Y_(t) { return null == t ? Fp : (O_ || (O_ = document.createElementNS("http://www.w3.org/2000/svg", "g")), O_.setAttribute("transform", t), O_.transform && O_.transform.baseVal && O_.transform.baseVal.consolidate && (t = O_.transform.baseVal.consolidate()) ? Wp((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : Fp) }

    function F_(t, e) { var n = "<N>"; return e = ke({ lineHeight: 16, margin: 10 }, e),
            function(i) { for (var r, o = Ep(this), a = o.text().replace(/\n|<br>/g, " <N> ").split(/\s+/).reverse(), s = e.lineHeight, l = o.attr("y"), c = o.attr("x"), u = e.margin, f = 0, d = o.text(null).append("tspan").attr("x", c).attr("y", l).attr("dy", u + "px"), h = [], g = 0; r = a.pop();) h.push(r), g++, d.text(h.join(" ").trim()), g > 1 && (d.node().getComputedTextLength() > t || r === n) && (r === n && (r = ""), h.pop(), d.text(h.join(" ").trim()), h = [r], d = o.append("tspan").attr("x", c).attr("y", l).attr("dy", ++f * s + u + "px").text(r)) } } L_.prototype = { constructor: L_, polygons: function() { var t = this.edges; return this.cells.map((function(e) { var n = e.halfedges.map((function(n) { return d_(e, t[n]) })); return n.data = e.site.data, n })) }, triangles: function() { var t = [],
                e = this.edges; return this.cells.forEach((function(n, i) { if (o = (r = n.halfedges).length)
                    for (var r, o, a, s, l, c, u = n.site, f = -1, d = e[r[o - 1]], h = d.left === u ? d.right : d.left; ++f < o;) a = h, h = (d = e[r[f]]).left === u ? d.right : d.left, a && h && i < a.index && i < h.index && (l = a, c = h, ((s = u)[0] - c[0]) * (l[1] - s[1]) - (s[0] - l[0]) * (c[1] - s[1]) < 0) && t.push([u.data, a.data, h.data]) })), t }, links: function() { return this.edges.filter((function(t) { return t.right })).map((function(t) { return { source: t.left.data, target: t.right.data } })) }, find: function(t, e, n) { for (var i, r, o = this, a = o._found || 0, s = o.cells.length; !(r = o.cells[a]);)
                if (++a >= s) return null; var l = t - r.site[0],
                c = e - r.site[1],
                u = l * l + c * c;
            do { r = o.cells[i = a], a = null, r.halfedges.forEach((function(n) { var i = o.edges[n],
                        s = i.left; if (s !== r.site && s || (s = i.right)) { var l = t - s[0],
                            c = e - s[1],
                            f = l * l + c * c;
                        f < u && (u = f, a = s.index) } })) } while (null !== a); return o._found = i, null == n || u <= n * n ? r.site : null } }, z_.prototype = { constructor: z_, scale: function(t) { return 1 === t ? this : new z_(this.k * t, this.x, this.y) }, translate: function(t, e) { return 0 === t & 0 === e ? this : new z_(this.k, this.x + this.k * t, this.y + this.k * e) }, apply: function(t) { return [t[0] * this.k + this.x, t[1] * this.k + this.y] }, applyX: function(t) { return t * this.k + this.x }, applyY: function(t) { return t * this.k + this.y }, invert: function(t) { return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k] }, invertX: function(t) { return (t - this.x) / this.k }, invertY: function(t) { return (t - this.y) / this.k }, rescaleX: function(t) { return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t)) }, rescaleY: function(t) { return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t)) }, toString: function() { return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")" } }, new z_(1, 0, 0), z_.prototype, Cp.prototype.selectAppend = Bp, Cp.prototype.append = Lp;

    function W_(t) { return t = ke({ margin: 16, lineHeight: 18, isHorizontalText: !1 }, t),
            function(e) { var n = Ep(this),
                    i = n.text().split("///"),
                    r = n.attr("y"),
                    o = t.margin;
                t.isHorizontalText ? n.text(i.join(" ")) : (n.text(null), i.forEach((function(e, i) { n.append("tspan").attr("x", 0).attr("y", r).attr("dy", o + "px").classed("line" + (i + 1), !0).text(e), o += t.lineHeight }))) } }

    function R_(t) { return N_(t, "\\") }

    function N_(t, e) { return e = e || "", t.split("").map((function(t) { var e = t.charCodeAt(0).toString(16).toUpperCase(); return e.length > 2 ? "\\u" + e : e })).join(e) }

    function H_(t, e) { return null == t && (t = 2),
            function(n) { return e.absoluteValue && (n = Math.abs(n)), Number(Fr(n)).toFixed(t) } }

    function j_(t, e) { return null != t && "" !== t || (t = 0),
            function(n) { if (null == n) return ""; if (n = Number(function(t) { return null === t ? null : t.toString().replace(/\s/g, "").replace(/,/g, "") }(n)), isNaN(n)) return ""; if (0 === n) return 0;
                e.absoluteValue && (n = Math.abs(n)); var i = t; if (e.displayAsMultiplier && Math.abs(n) > 100 && Math.abs(n) < e.displayAsMultiplier && (i = Math.max(0, t - 1)), e.forceCommaDisplay) return jd(",." + i + "f")(n); if (Math.abs(n) < 10) return jd("." + i + "f")(n);
                n = e.forceUnitDisplay ? function(t, e, n) { return "Thousands" === n.forceUnitDisplay ? (t /= 1e3, jd("." + e + "f")(t) + "K") : "Millions" === n.forceUnitDisplay ? (t /= 1e6, jd("." + e + "f")(t) + "M") : "Billions" === n.forceUnitDisplay ? (t /= 1e9, jd("." + e + "f")(t) + "B") : "Trillions" === n.forceUnitDisplay ? (t /= 1e12, jd("." + e + "f")(t) + "T") : void 0 }(n, i, e) : jd("s")(n).replace("G", "B"); var r = (n = e.lowerCaseUnits ? String(n).toLowerCase() : String(n).toUpperCase()).replace(/[^\d.-]/g, ""),
                    o = jd("." + i + "f")(Number(r)); return n.replace(r, o) } }

    function I_(t, e) { return e = e || _d,
            function(n) { return e(n).format(t) } }

    function V_(t) { return function(e) { return t(100 * e) } }

    function U_(t, e) { return function(n) { return t(n * e) } }

    function X_(t) { return t.display_as && rd[t.display_as] ? rd[t.display_as] : 1 }

    function q_(t) { var e = _d(t); return e.valueOf() ? "Q" + (Math.floor((e.format("M") - 1) / 3) + 1) : "" }

    function G_(t) { var e = t.label || t.caption || "",
            n = t.unit_before || t["label-left"] || "",
            i = t.unit_after || t["label-right"] || ""; return e.length + n.length + i.length <= 3 }

    function Z_(t) { return { field: function() { return t }, scale: { domain: function() { return [t.min, t.max] } } } }

    function Q_(t, e, n) { return K_(Z_(t), e, n) }

    function K_(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        (e = e || {}).options = e.options || {}; var i, r = t.field(),
            o = wd(r),
            a = r.taxonomy,
            s = function(t) { return t },
            l = null,
            c = s,
            u = r.unit_before || r.unitBefore || r["label-left"] || "",
            f = r.unit_after || r.unitAfter || r["label-right"] || "",
            d = u.length + f.length; if (n.unitBefore && (u = n.unitBefore), n.unitAfter && (f = n.unitAfter), Vr(n, "defaultDecimals") && (l = n.defaultDecimals), Vr(n, "forceCommaDisplay") || (bg(e, "data.config") && (n.forceCommaDisplay = bg(e, "data.config.force_comma_display")), bg(e, "options.forceCommaDisplay") && (n.forceCommaDisplay = bg(e, "options.forceCommaDisplay"))), !n.voidDecimals && Vr(r, "defaultDecimals") && (!l || r.defaultDecimals >= l) && (l = r.defaultDecimals), null == bg(e, "data.chartOptions.decimalPlaces") || n.ignoreChartOptions || (l = bg(e, "data.chartOptions.decimalPlaces")), null != n.decimalPlaces && (l = n.decimalPlaces), n.isTooltip && null != bg(e, "data.chartOptions.tooltipDecimals")) l = bg(e, "data.chartOptions.tooltipDecimals");
        else if (n.isTooltip) { var h = t.scale.domain();
            Math.abs(h[1] - h[0]) < .05 ? l = 3 : Math.abs(h[1] - h[0]) < .1 && (l = 2) } if (n.isTooltip && (f.length > 4 && (f = ""), u.length > 4 && (u = "")), !n.isTooltip || null == n.customTooltipFormatter && null == e.options.customTooltipFormatter || "string" == typeof(i = n.customTooltipFormatter || e.options.customTooltipFormatter) && (i = I_(i, o)), null == n.lowerCaseUnits && (n.lowerCaseUnits = bg(e, "data.config.lower_case_units")), a && a.isContinuous)
            if (a.isDate) { if (n.isTooltip && bg(e, "data.config.tooltipDateFormat")) { var g = bg(e, "data.config.tooltipDateFormat");
                    c = I_(g, o) } else if (a.duration && qf[a.duration]) { var p = qf[a.duration];
                    bg(e, "data.config.hide_year_display") && -1 !== Zf.indexOf(a.duration) && (p = "M/D"), c = I_(p, o), u = "", f = "", d = 0, a.isYears && (c = I_(Gf, o)) } "year" === r.type && (c = s) } else mk(r, t) < 1 ? r.display_as ? (null == l && (l = 1), c = j_(l, n)) : c = H_(l, n) : mk(r, t) < 10 ? n.forAxis || r.display_as ? (null == l && (l = 0), c = j_(l, n)) : c = H_(l, n) : (mk(r, t) < 1e3 && !n.preventCommaDisplay && (n.forceCommaDisplay = !0), c = j_(l, n));
        c = i || c || s; var v = bg(e, "data.config.preventNumericFormatting") || bg(e, "options.preventNumericFormatting");
        v && (c = s), "%" === r.display_as ? c = V_(c) : r.display_as && (f.toUpperCase() === r.display_as && (f = ""), n.ignoreDisplayAsMultiplier || (n.displayAsMultiplier = X_(r), c = U_(c, n.displayAsMultiplier))); var m = function(t, e, i) { return n.spanWrapPrePost ? '<span class="pre">'.concat(e, "</span>").concat(t, '<span class="post">').concat(i, "</span>") : n.preventLongPrePost ? "".concat(e.length > 3 ? "" : e).concat(t).concat(i.length > 3 ? "" : i) : "".concat(e).concat(t).concat(i) },
            y = function(t) { if (null == t) return ""; if (n.displayStringsInNumericFields && "numeric" === r.type && isNaN(Number(t))) return t; var e = c(t); return n.bareValueSingleChar && 1 === d ? m(e, u, f) : n.bareValue && n.preventUnitDisplay ? String(e).replace(/[^\d.-]/g, "") : n.bareValue || "" === e ? e : m(e, u, f) }; return y.precision = l, y.decimals = l, y }

    function J_(t, e, n, i) { var r = Se({ defaultDecimals: 0, forAxis: !0 }, e),
            o = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = ek(t);
                null == n && e.reductionLooseFit && (n = nk(t)); if (n && 100 === n.divisor && !e.reductionLooseFit) return { divisor: 1e3, short: ad[1e3], long: od[1e3] }; if (n && 10 === n.divisor) return null; return n }(t = t.filter((function(t) { return 0 !== t })), e); if (o) { var a = t.map((function(t) { return t / o.divisor })),
                s = ek(a);
            (1e3 === o.divisor || a.filter((function(t) { return Math.abs(t) >= 1e3 })).length) && (1e3 === o.divisor && Math.abs(a[1]) < 1 ? r.forceCommaDisplay = !0 : r.preventCommaDisplay = !0); var l = 1;
            a.filter((function(t) { return Math.abs(t) >= 1e3 })).length ? (l = 1e3, s && 10 === s.divisor ? r.defaultDecimals = 2 : s && 100 === s.divisor && (r.defaultDecimals = 1)) : a.filter((function(t) { return Math.abs(t) >= 100 })).length ? (l = 100, s && 10 === s.divisor && (r.defaultDecimals = 1)) : a.filter((function(t) { return Math.abs(t) >= 10 })).length && (l = 10), r.forceUnitDisplay = od[o.divisor * l], r.reduced = o, r.multipliers = a, r.multipliersReduced = s } else { var c = n.scale.domain();
            Math.abs(c[1] - c[0]) < .05 ? r.defaultDecimals = 3 : Math.abs(c[1] - c[0]) < .1 && (r.defaultDecimals = 2) } for (var u = !1, f = 0, d = function() { var e = K_(n, i, Se(Se({}, r), {}, { ignoreDisplayAsMultiplier: !0 }));! function(t) { for (var e = Object.create(null), n = 0; n < t.length; ++n) { var i = t[n]; if (i in e) return !0;
                        e[i] = !0 } return !1 }(t.map((function(t) { return e(t) }))) ? u = !0: (r.defaultDecimals = r.defaultDecimals || 0, r.defaultDecimals += 1), f += 1 }; !u && f < 3;) d(); return r }

    function tk(t, e) { var n = !1; return function(i) { return n ? e(i) : ((i = t(i)) && (n = !0), i) } }

    function ek(t) { return (t = t.filter((function(t) { return 0 !== t }))).filter((function(t) { return t % 1e12 == 0 })).length === t.length ? { divisor: 1e12, short: ad[1e12], long: od[1e12] } : t.filter((function(t) { return t % 1e9 == 0 })).length === t.length ? { divisor: 1e9, short: ad[1e9], long: od[1e9] } : t.filter((function(t) { return t % 1e6 == 0 })).length === t.length ? { divisor: 1e6, short: ad[1e6], long: od[1e6] } : t.filter((function(t) { return t % 1e3 == 0 })).length === t.length ? { divisor: 1e3, short: ad[1e3], long: od[1e3] } : t.filter((function(t) { return t % 100 == 0 })).length === t.length ? { divisor: 100, short: ad[100], long: od[100] } : t.filter((function(t) { return t % 10 == 0 })).length === t.length ? { divisor: 10, short: ad[10], long: od[10] } : null }

    function nk(t) { var e; if (t = t.filter((function(t) { return 0 !== t })), Object.keys(ad).map((function(t) { return +t })).reverse().forEach((function(n) { var i = t.filter((function(t) { var e = t % n; return e > 0 && e < t }));
                (null == e || e < n) && i.length && (e = n) })), e && e >= 1e3) return { divisor: e, short: ad[e], long: od[e] } } var ik = _n("splice"),
        rk = Jt("splice", { ACCESSORS: !0, 0: 0, 1: 2 }),
        ok = Math.max,
        ak = Math.min,
        sk = 9007199254740991,
        lk = "Maximum allowed length exceeded";

    function ck(t) { return [].concat.apply([], t) }

    function uk(t, e, n) { return e[n] < t[n] ? -1 : e[n] > t[n] ? 1 : 0 }

    function fk(t, e) { var n, i; if (!t) return [0, 1]; if (void 0 === e) { var r, o = Ye(t); try { for (o.s(); !(r = o.n()).done;) { var a = r.value;
                    null != a && (void 0 === n ? a >= a && (n = i = a) : (n > a && (n = a), i < a && (i = a))) } } catch (t) { o.e(t) } finally { o.f() } } else { var s, l = -1,
                c = Ye(t); try { for (c.s(); !(s = c.n()).done;) { var u = s.value;
                    null != (u = e(u, ++l, t)) && (void 0 === n ? u >= u && (n = i = u) : (n > u && (n = u), i < u && (i = u))) } } catch (t) { c.e(t) } finally { c.f() } } return [n, i] }

    function dk(t) { return t.fields.length > 1 ? t.fields.slice(1) : t.fields }

    function hk(t) { var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; return e ? t.fields[0] : t.fields[1] }

    function gk(t) { return !(!t.taxonomy || !t.taxonomy.forceCategorical) }

    function pk(t, e) { var n; return (null == e || null === (n = e.chartOptions) || void 0 === n ? void 0 : n.dateOutputFormat) === id }

    function vk(t, e) { var n = [t.min, t.max]; return e && e.scale && (n = e.scale.domain()), n.map((function(e) { return e * X_(t) })) }

    function mk(t, e) { var n = vk(t, e); return Math.abs(n[1] - n[0]) }

    function yk(t, e) { if (!t) return [0, 1]; var n = fk(ck(t.map((function(t) { if (void 0 !== t.min && void 0 !== t.max) return [t.min, t.max]; var e = fk(t.data); try { t.min = e[0], t.max = e[1] } catch (t) {} return e })))); return e && (n[0] = Math.min(0, n[0]), n[1] = Math.max(0, n[1])), n[0] = Number(n[0]), n[1] = Number(n[1]), n }

    function xk(t) { var e = [0, 0]; return t[0] && t[0].data ? (t[0].data.map((function(e, n) { return t.map((function(t) { return t.data[n] })) })).forEach((function(t, n) { var i = t.map((function(t) { return Number(t) })),
                r = i.filter((function(t) { return t >= 0 })).reduce((function(t, e) { return t + e }), 0),
                o = i.filter((function(t) { return t < 0 })).reduce((function(t, e) { return t + e }), 0);
            e[0] = Math.min(o, e[0]), e[1] = Math.max(r, e[1]) })), e) : e }

    function bk(t) { var e = [0, 0]; return t.data.forEach((function(t, n) { var i = t.slice(1).map((function(t) { return Number(t) })),
                r = i.filter((function(t) { return t >= 0 })).reduce((function(t, e) { return t + e }), 0),
                o = i.filter((function(t) { return t < 0 })).reduce((function(t, e) { return t + e }), 0);
            e[0] = Math.min(o, e[0]), e[1] = Math.max(r, e[1]) })), e }

    function $k(t, e) { var n = function(t, e) { return e[1] - t[1] }; if ("ascending" === (e = ke({ direction: "descending", sortPrimaryAxisTime: !1, stacked: !1 }, e)).direction && (n = function(t, e) { return t[1] - e[1] }), e.stacked) { var i = function(t, e) { return Math.abs(t) + Math.abs(e) };
            n = function(t, e) { return e.slice(1).reduce(i, 0) - t.slice(1).reduce(i, 0) }, "ascending" === e.direction && (n = function(t, e) { return t.slice(1).reduce(i, 0) - e.slice(1).reduce(i, 0) }) } if (e.sortPrimaryAxisTime)
            if (e.reverse) t.data.reverse(), n = null;
            else { var r = wd(t.fields[0]);
                n = function(t, e) { return r(t[0]).toDate().getTime() - r(e[1]).toDate().getTime() } } e.customSort && (n = e.customSort), n && t.data.sort(n), t.fields.forEach((function(e, n) { e.data = t.data.map((function(t) { return t[n] })) })) }

    function wk(t) { return _k(t, (function(t) { return !1 === t.is_valid })) }

    function _k(t, e) { var n = dk(t),
            i = []; return n.forEach((function(t, n) { for (var r = t.data.length, o = [], a = [], s = !0, l = 0; l < r;) { var c = null != t.data[l];
                c && s ? a.push({ value: t.data[l], index: l }) : !c && s ? a.length > 0 && (o.push({ data: a, is_valid: s }), a = [a[a.length - 1]], s = !1) : c && !s && (a.push({ value: t.data[l], index: l }), o.push({ data: a, is_valid: s }), a = [{ value: t.data[l], index: l }], s = !0), l++ } a.length >= 1 && s && o.push({ data: a, is_valid: s }), e && (o = o.filter(e)), i.push(o) })), 0 === i.reduce((function(t, e) { return t + e.length }), 0) && (i = null), i }

    function kk(t, e, n) { var i = dk(t.data); if (i[n] && i[n].data) { var r = i[n].data,
                o = Pe(Nr(r, e, !0), 2),
                a = o[0],
                s = o[1],
                l = Pe(Hr(r, e, !0), 2),
                c = l[0],
                u = l[1]; return null == Rr(s) || null == Rr(u) ? null : u + (s - u) * ((e - c) / (a - c)) } return null }

    function Mk(t, e) { var n = wd(t),
            i = Nr(t.data),
            r = xe(i),
            o = -1; if (-1 === (o = "string" === r ? t.data.indexOf(String(e)) : "number" === r ? t.data.indexOf(Number(e)) : "object" === r && i.getDate ? t.data.indexOf(n(e)) : t.data.indexOf(e)))
            if (t.taxonomy.isDate) { var a = n(e);
                t.data.forEach((function(t, e) { 0 === n(t).diff(a) && (o = e) })) } else { var s = e.replace(/\s|↵|\n/g, "");
                t.data.forEach((function(t, e) { String(t).replace(/\s|↵|\n/g, "") === s && (o = e) })) } return o }

    function Sk(t, e) { e = e || {}; var n = []; return t.config && t.config.highlight_values && (n = String(t.config.highlight_values).split(",").map((function(t) { return Number(t) - 1 }))), !n.length && e.zeroHighlight && (n = [0]),
            function(t, e) { return -1 !== n.indexOf(e) } }

    function Ak(t) { return t.config && t.config.highlight_values }

    function Dk(t, e) { if (e && e.numericProperties) { var n = e.numericProperties,
                i = n.scaleStart,
                r = n.scaleEnd,
                o = n.scaleStep; return null != i || null != r || null != o } return !(!t.chartOptions || null == t.chartOptions.scaleStart && null == t.chartOptions.scaleEnd && null == t.chartOptions.scaleStep) }

    function Ck(t, e, n) { return e && e.numericProperties ? null != e.numericProperties.scaleStep : !(!t.chartOptions || null == t.chartOptions.scaleStep) }

    function Ek(t) { return t[0] <= t[1] ? t : [t[1], t[0]] }

    function Ok(t) { return null !== vd(t) }

    function Tk(t) { return !gk(t) && Ok(Nr(t.data)) && Ok(Hr(t.data)) }

    function Pk(t) { return !gk(t) && !Yk(t) && !Fk(t) && eM(Nr(t.data)) && eM(Hr(t.data)) }

    function Bk(t) { var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = e || n.forceRebuild; if (!t.taxonomy || i) { t.config = t.config || {}, t.chartOptions = t.chartOptions || {}; var r = 60 * (t.config.time_zone || 0),
                o = n.yearsAsContinuous,
                a = n.dateAnyColumn,
                s = void 0 !== a && a,
                l = { version: "0.1" },
                c = t.fields.map((function(t) { return t.id }));
            n.preventAxisPropertyOverrides || (t.primaryAxis && t.fields[0] && ke(t.fields[0], t.primaryAxis), t.secondaryAxis && t.fields[1] && ke(t.fields[1], t.secondaryAxis)), t.fields.forEach((function(t, e) { t.id = c[e] })), t.fields.forEach((function(e, n) { var a, l = { isContinuous: !0 };
                (e.taxonomy = i ? l : e.taxonomy || l, e.displayFormat && !e.display_as && (e.display_as = e.displayFormat), 0 === n && (l.primaryField = !0), 0 === n && e.type === Cf && Lk(e) && (e.type = Df, l.isYears = !0, Wk(e, t)), 0 !== n && !s || e.type !== Df) || (t.chartOptions.dateInputFormat && (e.taxonomy.customFormatter = t.chartOptions.dateInputFormat), l.isLikelyCategorical = null == t || null === (a = t.chartOptions) || void 0 === a ? void 0 : a.isCategorical, l.forceCategorical = pk(0, t), Pk(e) && !Tk(e) ? (l.isDate = !0, l.customFormatter = nM(Nr(e.data)), l.isContinuous = !0, l.duration = Kk(e), l.timeZoneOffset = r) : Tk(e) ? (l.isQuarters = !0, l.isDate = !0, l.isContinuous = !1, l.duration = Jk(e), l.timeZoneOffset = r) : (l.isContinuous = !1, Yk(e) ? (l.isContinuous = o || !1, l.isDate = l.isYears = !0, l.customFormatter = "YYYY", l.duration = Kk(e), l.timeZoneOffset = r) : Fk(e) && (l.isContinuous = !0, l.isDate = l.isMonths = !0, l.noYears = !0, l.customFormatter = nM(Nr(e.data), Ff), l.duration = Kk(e), l.timeZoneOffset = r)));
                e.type === Cf && (e.defaultDecimals = Rk(e)), e.type === Bf && (l.isContinuous = !1) })); var u = n.disableDateSorting || t.config.disable_date_sorting; if (!u && t.fields[0] && t.fields[0].taxonomy && t.fields[0].taxonomy.dateStart && t.fields[0].taxonomy.dateEnd && t.fields[0].taxonomy.dateEnd < t.fields[0].taxonomy.dateStart) { $k(t, { sortPrimaryAxisTime: !0, reverse: !0 }); var f = t.fields[0].taxonomy.dateEnd;
                t.fields[0].taxonomy.dateEnd = t.fields[0].taxonomy.dateStart, t.fields[0].taxonomy.dateStart = f } t.taxonomy = l } }

    function Lk(t) { return t.min > 1800 && t.max < 2200 }

    function zk(t) { return 4 === t.length && !isNaN(Number(t)) && Number(t) > 1800 && Number(t) < 2200 }

    function Yk(t) { return zk(Nr(t.data)) && zk(Hr(t.data)) }

    function Fk(t) { var e = function(t) { return null !== nM(t, Ff) }; return e(Nr(t.data)) && e(Hr(t.data)) }

    function Wk(t, e) { t.data = t.data.map((function(t) { return null == t ? null : String(t) })), e.data.forEach((function(e, n) { e[0] = t.data[n] })) }

    function Rk(t) { for (var e, n = t.data, i = null, r = 0; r < n.length; r++)
            if (null !== n[r]) { var o = Math.min(((e = n[r]) && e.split || (e = String(e)), (e.split(".")[1] || []).length), 3);
                (null === i || i !== o && o < i && 0 !== o) && (i = o) } return mk(t) > 5 && (i = Math.min(i, 2)), mk(t) > 10 && (i = Math.min(i, 1)), i }

    function Nk(t) { return t.data.length > 1 }

    function Hk(t) { return 2 === t.fields.length }

    function jk(t) { return 3 === t.fields.length }

    function Ik(t) { return t.fields.length <= 5 }

    function Vk(t) { return t.fields[0] && t.fields[0].taxonomy && t.fields[0].taxonomy.isDate }

    function Uk(t) { return t.fields[0] && t.fields[0].taxonomy && t.fields[0].taxonomy.isContinuous && t.fields[0].taxonomy.isDate }

    function Xk(t) { var e = yk(dk(t)); return e[0] >= 0 && e[1] >= 0 }

    function qk(t) { var e = yk(dk(t)); return e[0] < 0 && e[1] < 0 }

    function Gk(t) { return !Xk(t) && !qk(t) }

    function Zk(t) { if (2 === t.fields.length) return !0; for (var e = !0, n = 0; n < t.data.length && e; n++) { for (var i = t.data[n], r = 0, o = 0, a = 1; a < i.length; a++) i[a] && (r += i[a], o = i[a]);
            r !== o && (e = !1) } return e }

    function Qk(t) { if (Vk(t)) { var e = t.fields[0]; if (e.taxonomy.duration === jf) return !0; if (e.taxonomy.isYears) return !0; if ("YYYY" === e.dateFormat || "YYYY" === e.customFormatter || "year" === e.type) return !0; if (t.chartOptions) { if (t.chartOptions.dateOutputFormat === Qf) return !0; if (t.chartOptions.dateOutputFormat === Kf) return !0; if (t.chartOptions.dateOutputFormat === Jf) return !0 } return !1 } return !1 }

    function Kk(t, e) { var n = wd(t),
            i = n(String(Nr(t.data))).toDate(),
            r = n(String(Hr(t.data))).toDate(),
            o = Math.abs(r - i) / sd; return t.taxonomy.dateStart = i, t.taxonomy.dateEnd = r, o < 2 ? Wf : o >= 2 && o < 16 ? Rf : o >= 14 && o < 120 ? Nf : o >= 120 && o < 1460 ? Hf : o >= 730 && o < 2920 ? If : o >= 1825 && o < 5475 ? Vf : o >= 5475 && o < 36500 ? Uf : Xf }

    function Jk(t) { var e = yd(t),
            n = e(String(Nr(t.data))),
            i = e(String(Hr(t.data))); return Math.abs(i - n) / sd >= 1825 ? Vf : jf }

    function tM(t, e) { return t.min && t.max ? Math.abs(t.max - t.min) : Math.abs(e[1].getUTCFullYear() - e[0].getUTCFullYear()) }

    function eM(t) { if (! function(t) { var e = !1; return Object.keys(cd).forEach((function(n) { e || (e = cd[n].test(t)) })), e }(t)) { var e = _d(t, null, !0); return e && e.isValid() ? zk("" + e.year()) : !!Ok(t) || null !== nM(t) } return !1 }

    function nM(t, e) { var n = null; return (e = e || Yf).forEach((function(e) { var i = pd.utc(t, e);!n && i.isValid() && "string" == typeof t && t.toUpperCase().trim() === i.format(e).toUpperCase() && (n = e) })), n } Pt({ target: "Array", proto: !0, forced: !ik || !rk }, { splice: function(t, e) { var n, i, r, o, a, s, l = zt(this),
                c = ft(l.length),
                u = gt(t, c),
                f = arguments.length; if (0 === f ? n = i = 0 : 1 === f ? (n = 0, i = c - u) : (n = f - 2, i = ak(ok(ct(e), 0), c - u)), c + n - i > sk) throw TypeError(lk); for (r = Vt(l, i), o = 0; o < i; o++)(a = u + o) in l && Pn(r, o, l[a]); if (r.length = i, n < i) { for (o = u; o < c - i; o++) s = o + n, (a = o + i) in l ? l[s] = l[a] : delete l[s]; for (o = c; o > c - i + n; o--) delete l[o - 1] } else if (n > i)
                for (o = c - i; o > u; o--) s = o + n - 1, (a = o + i - 1) in l ? l[s] = l[a] : delete l[s]; for (o = 0; o < n; o++) l[o + u] = arguments[o + 2]; return l.length = c - i + n, r } }), pd.suppressDeprecationWarnings = !0; var iM = df.values;

    function rM(t) { return t.map((function(t) { var e = t.node().__transition; return e ? Object.values(e)[0].timer._time : null })) }

    function oM(t, e) { t.forEach((function(t, n) { var i = t.node().__transition; if (i) { var r = Object.values(i)[0],
                    o = r.timer,
                    a = r.time;
                r.time = a - e, o && o.restart(o._call, null, o._time - e) } })) }

    function aM() { return window.performance.now() }

    function sM() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return !(!t.transition || !t.transition.playOnLoad && !t.transition.stageOnLoad) }

    function lM(t, e, n) { return t.selections = function() { return e }, t.getEnv = function() { return e[0] && e[0].env ? e[0].env : null }, t.getEl = function() { return e[0] && e[0].el ? e[0].el : null }, t.postRender = function() { if (n.layers && n.layers.forEach((function(t, i) { e.forEach((function(e, r) { var o = e.env,
                            a = e.el,
                            s = o.layout.draw(),
                            l = ke({ seriesOffset: i, selectIndex: r }, n);
                        t(s, a, o, l) })) })), n.onRenderComplete && n.onRenderComplete(t.getEl(), t.getEnv(), n), n.transition) { var i = function(t, e) { var n, i, r = ju({ delay: 300, duration: 2e3, easing: "linear", playOnLoad: !1, stageOnLoad: !1, stageHandler: void 0, playHandler: void 0, interruptHandler: void 0, cleanupHandler: void 0, type: "default", pauses: void 0, delayUntilFreeCycles: !0, delayUntilFreeCyclesMaxWait: 2e3 }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}),
                        o = function() { return null },
                        a = function() { n && e.options.forceResize(); var i = r.stageHandler;
                            (void 0 === i ? o : i)(t, e, r) },
                        s = function() { var a = r.cleanupHandler,
                                s = void 0 === a ? o : a,
                                l = r.playHandler,
                                c = void 0 === l ? o : l; return t.getEl().classed("transition-stage", !1), n = c(t, e, r), i && (n.startTime -= i.pauseDuration, oM(n.transitions, i.pauseDuration), i = null), n && n.execution && n.execution.then((function() { s(t, e, r), n = null })), n },
                        l = function() { n && n.stop && (i = { times: rM(n.transitions), pauseDuration: aM() - n.startTime }, n.stop()) },
                        c = function() { i = null, a(), s() }; return r.playOnLoad ? (a(), s()) : r.stageOnLoad && a(), { stage: a, play: s, pause: l, replay: c } }(t, t.getEnv(), n.transition);
                ke(t, i) } }, t }

    function cM() {}

    function uM(t, e) { for (const n in e) t[n] = e[n]; return t }

    function fM(t) { return t() }

    function dM() { return Object.create(null) }

    function hM(t) { t.forEach(fM) }

    function gM(t) { return "function" == typeof t }

    function pM(t, e) { return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t }

    function vM(t, e, n) { t.$$.on_destroy.push(function(t, ...e) { if (null == t) return cM; const n = t.subscribe(...e); return n.unsubscribe ? () => n.unsubscribe() : n }(e, n)) }

    function mM(t, e, n, i) { if (t) { const r = yM(t, e, n, i); return t[0](r) } }

    function yM(t, e, n, i) { return t[1] && i ? uM(n.ctx.slice(), t[1](i(e))) : n.ctx }

    function xM(t, e, n, i) { if (t[2] && i) { const r = t[2](i(n)); if (void 0 === e.dirty) return r; if ("object" == typeof r) { const t = [],
                    n = Math.max(e.dirty.length, r.length); for (let i = 0; i < n; i += 1) t[i] = e.dirty[i] | r[i]; return t } return e.dirty | r } return e.dirty }

    function bM(t, e, n, i, r, o) { if (r) { const a = yM(e, n, i, o);
            t.p(a, r) } }

    function $M(t) { if (t.ctx.length > 32) { const e = [],
                n = t.ctx.length / 32; for (let t = 0; t < n; t++) e[t] = -1; return e } return -1 }

    function wM(t) { const e = {}; for (const n in t) "$" !== n[0] && (e[n] = t[n]); return e }

    function _M(t) { return null == t ? "" : t }

    function kM(t) { return t && gM(t.destroy) ? t.destroy : cM }

    function MM(t, e) { t.appendChild(e) }

    function SM(t, e, n) { const i = function(t) { if (!t) return document; const e = t.getRootNode ? t.getRootNode() : t.ownerDocument; if (e && e.host) return e; return t.ownerDocument }(t); if (!i.getElementById(e)) { const t = EM("style");
            t.id = e, t.textContent = n,
                function(t, e) { MM(t.head || t, e), e.sheet }(i, t) } }

    function AM(t, e, n) { t.insertBefore(e, n || null) }

    function DM(t) { t.parentNode && t.parentNode.removeChild(t) }

    function CM(t, e) { for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e) }

    function EM(t) { return document.createElement(t) }

    function OM(t) { return document.createElementNS("http://www.w3.org/2000/svg", t) }

    function TM(t) { return document.createTextNode(t) }

    function PM() { return TM(" ") }

    function BM() { return TM("") }

    function LM(t, e, n, i) { return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i) }

    function zM(t, e, n) { null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n) }

    function YM(t) { return "" === t ? null : +t }

    function FM(t, e) { e = "" + e, t.wholeText !== e && (t.data = e) }

    function WM(t, e) { t.value = null == e ? "" : e }

    function RM(t, e, n, i) { null === n ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "") }

    function NM(t, e) { for (let n = 0; n < t.options.length; n += 1) { const i = t.options[n]; if (i.__value === e) return void(i.selected = !0) } t.selectedIndex = -1 } let HM, jM;

    function IM() { if (void 0 === HM) { HM = !1; try { "undefined" != typeof window && window.parent && window.parent.document } catch (t) { HM = !0 } } return HM }

    function VM(t, e) { "static" === getComputedStyle(t).position && (t.style.position = "relative"); const n = EM("iframe");
        n.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), n.setAttribute("aria-hidden", "true"), n.tabIndex = -1; const i = IM(); let r; return i ? (n.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", r = LM(window, "message", (t => { t.source === n.contentWindow && e() }))) : (n.src = "about:blank", n.onload = () => { r = LM(n.contentWindow, "resize", e) }), MM(t, n), () => {
            (i || r && n.contentWindow) && r(), DM(n) } } Pt({ target: "Object", stat: !0 }, { values: function(t) { return iM(t) } });
    class UM { constructor(t = !1) { this.is_svg = !1, this.is_svg = t, this.e = this.n = null } c(t) { this.h(t) } m(t, e, n = null) { this.e || (this.is_svg ? this.e = OM(e.nodeName) : this.e = EM(e.nodeName), this.t = e, this.c(t)), this.i(n) } h(t) { this.e.innerHTML = t, this.n = Array.from(this.e.childNodes) } i(t) { for (let e = 0; e < this.n.length; e += 1) AM(this.t, this.n[e], t) } p(t) { this.d(), this.h(t), this.i(this.a) } d() { this.n.forEach(DM) } }

    function XM(t, e) { return new t(e) }

    function qM(t) { jM = t }

    function GM() { if (!jM) throw new Error("Function called outside component initialization"); return jM }

    function ZM(t) { GM().$$.after_update.push(t) }

    function QM() { const t = GM(); return (e, n, { cancelable: i = !1 } = {}) => { const r = t.$$.callbacks[e]; if (r) { const o = function(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) { const r = document.createEvent("CustomEvent"); return r.initCustomEvent(t, n, i, e), r }(e, n, { cancelable: i }); return r.slice().forEach((e => { e.call(t, o) })), !o.defaultPrevented } return !0 } }

    function KM(t, e) { const n = t.$$.callbacks[e.type];
        n && n.slice().forEach((t => t.call(this, e))) } const JM = [],
        tS = [],
        eS = [],
        nS = [],
        iS = Promise.resolve(); let rS = !1;

    function oS(t) { eS.push(t) } const aS = new Set; let sS = 0;

    function lS() { const t = jM;
        do { for (; sS < JM.length;) { const t = JM[sS];
                sS++, qM(t), cS(t.$$) } for (qM(null), JM.length = 0, sS = 0; tS.length;) tS.pop()(); for (let t = 0; t < eS.length; t += 1) { const e = eS[t];
                aS.has(e) || (aS.add(e), e()) } eS.length = 0 } while (JM.length); for (; nS.length;) nS.pop()();
        rS = !1, aS.clear(), qM(t) }

    function cS(t) { if (null !== t.fragment) { t.update(), hM(t.before_update); const e = t.dirty;
            t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(oS) } } const uS = new Set; let fS;

    function dS() { fS = { r: 0, c: [], p: fS } }

    function hS() { fS.r || hM(fS.c), fS = fS.p }

    function gS(t, e) { t && t.i && (uS.delete(t), t.i(e)) }

    function pS(t, e, n, i) { if (t && t.o) { if (uS.has(t)) return;
            uS.add(t), fS.c.push((() => { uS.delete(t), i && (n && t.d(1), i()) })), t.o(e) } else i && i() }

    function vS(t, e) { pS(t, 1, 1, (() => { e.delete(t.key) })) }

    function mS(t, e, n, i, r, o, a, s, l, c, u, f) { let d = t.length,
            h = o.length,
            g = d; const p = {}; for (; g--;) p[t[g].key] = g; const v = [],
            m = new Map,
            y = new Map; for (g = h; g--;) { const t = f(r, o, g),
                s = n(t); let l = a.get(s);
            l ? i && l.p(t, e) : (l = c(s, t), l.c()), m.set(s, v[g] = l), s in p && y.set(s, Math.abs(g - p[s])) } const x = new Set,
            b = new Set;

        function $(t) { gS(t, 1), t.m(s, u), a.set(t.key, t), u = t.first, h-- } for (; d && h;) { const e = v[h - 1],
                n = t[d - 1],
                i = e.key,
                r = n.key;
            e === n ? (u = e.first, d--, h--) : m.has(r) ? !a.has(i) || x.has(i) ? $(e) : b.has(r) ? d-- : y.get(i) > y.get(r) ? (b.add(i), $(e)) : (x.add(r), d--) : (l(n, a), d--) } for (; d--;) { const e = t[d];
            m.has(e.key) || l(e, a) } for (; h;) $(v[h - 1]); return v }

    function yS(t) { t && t.c() }

    function xS(t, e, n, i) { const { fragment: r, after_update: o } = t.$$;
        r && r.m(e, n), i || oS((() => { const e = t.$$.on_mount.map(fM).filter(gM);
            t.$$.on_destroy ? t.$$.on_destroy.push(...e) : hM(e), t.$$.on_mount = [] })), o.forEach(oS) }

    function bS(t, e) { const n = t.$$;
        null !== n.fragment && (hM(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []) }

    function $S(t, e) {-1 === t.$$.dirty[0] && (JM.push(t), rS || (rS = !0, iS.then(lS)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31 }

    function wS(t, e, n, i, r, o, a, s = [-1]) { const l = jM;
        qM(t); const c = t.$$ = { fragment: null, ctx: [], props: o, update: cM, not_equal: r, bound: dM(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(e.context || (l ? l.$$.context : [])), callbacks: dM(), dirty: s, skip_bound: !1, root: e.target || l.$$.root };
        a && a(c.root); let u = !1; if (c.ctx = n ? n(t, e.props || {}, ((e, n, ...i) => { const o = i.length ? i[0] : n; return c.ctx && r(c.ctx[e], c.ctx[e] = o) && (!c.skip_bound && c.bound[e] && c.bound[e](o), u && $S(t, e)), n })) : [], c.update(), u = !0, hM(c.before_update), c.fragment = !!i && i(c.ctx), e.target) { if (e.hydrate) { const t = function(t) { return Array.from(t.childNodes) }(e.target);
                c.fragment && c.fragment.l(t), t.forEach(DM) } else c.fragment && c.fragment.c();
            e.intro && gS(t.$$.fragment), xS(t, e.target, e.anchor, e.customElement), lS() } qM(l) } class _S { $destroy() { bS(this, 1), this.$destroy = cM } $on(t, e) { if (!gM(e)) return cM; const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []); return n.push(e), () => { const t = n.indexOf(e); - 1 !== t && n.splice(t, 1) } } $set(t) { var e;
            this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1) } } const kS = [];

    function MS(t, e = cM) { let n; const i = new Set;

        function r(e) { if (pM(t, e) && (t = e, n)) { const e = !kS.length; for (const e of i) e[1](), kS.push(e, t); if (e) { for (let t = 0; t < kS.length; t += 2) kS[t][0](kS[t + 1]);
                    kS.length = 0 } } } return { set: r, update: function(e) { r(e(t)) }, subscribe: function(o, a = cM) { const s = [o, a]; return i.add(s), 1 === i.size && (n = e(r) || cM), o(t), () => { i.delete(s), 0 === i.size && (n(), n = null) } } } } var SS = MS([-1, -1, -1, -1]),
        AS = MS(),
        DS = MS(),
        CS = MS(),
        ES = MS(),
        OS = function() { return null };

    function TS(t, e, n) { var i = null; return Object.keys(t).forEach((function(r) { var o = t[r];
            i || PS(o, e, n, (function() { return null })) && (i = o) })), i }

    function PS(t, e, n, i) { if (t.validateData) { var r = t.validateData(e); return r() || i(r.messages()), r() } return !0 }

    function BS(t, e, n, i) { var r = {};
        Object.keys(t).forEach((function(n) { var i = t[n]; if (i.validateData) { var o = i.validateData(e);
                r[n] = { valid: o(), messages: o.messages() } } else r[n] = "no validation method provided" })), i(r) }

    function LS(t) { var e = { valid: !0, messages: [] },
            n = function(n, i) { if (!n || !i) return e.valid;
                i(t) || (e.valid = !1, e.messages.push(n)) }; return n.messages = function() { return e.messages }, n }

    function zS(t) { var e = 5381,
            n = t.length; if (0 === n) return e; for (var i = 0; i < n; i++) e = (e << 5) - e ^ t.charCodeAt(i), e |= 0; return e } Pt({ target: "Array", proto: !0 }, { fill: function(t) { for (var e = zt(this), n = ft(e.length), i = arguments.length, r = gt(i > 1 ? arguments[1] : void 0, n), o = i > 2 ? arguments[2] : void 0, a = void 0 === o ? n : gt(o, n); a > r;) e[r++] = t; return e } }), io("fill"); var YS = { __proto__: null, getSeries: dk, getField: hk, isForceCategorical: gk, makeForceCategorical: pk, appliedDomain: vk, appliedDomainRange: mk, seriesDomain: yk, stackedDomain: bk, stackedDomainFromFields: xk, sortAllFields: $k, highlightSupported: Ak, getInvalidSegments: wk, getValidSegments: function(t) { return _k(t, (function(t) { return !0 === t.is_valid })) }, getSegments: _k, interpolateBetweenValues: kk, fieldIndexOf: Mk, valueHighlighter: Sk, hasCustomDomain: Dk, hasCustomDomainStep: Ck, sortedDomain: Ek, multilineDateFormatter: function(t, e) { return e = e || _d,
                function(n) { return t.map((function(t) { return t(e(n)) })).join("///") } }, dateFormatter: I_, displayAsMultiplier: X_, formatDateAsQuarter: q_, formatDateAsQuarterYear: function(t) { var e = _d(t); if (e.valueOf()) { var n = Math.floor((e.format("M") - 1) / 3) + 1; return 1 === n ? "Q" + n + " " + e.format("YYYY") : "Q" + n } return "" }, isSingleCharLabel: G_, valueFormatter: K_, prepareTickFormatOptions: J_, singleUseFormatter: tk, reduceNumericValues: ek, getQuarterRegex: vd, getFieldValueParser: xd, getFieldIndexValueParser: bd, fieldValueParser: $d, fieldDateParser: wd, parseDate: _d, quarterlyDateParser: md, convertDisplayToValue: function(t) { return "string" == typeof t ? (t = t.toUpperCase().replace("T", "x1000000000000").replace("B", "x1000000000").replace("M", "x1000000").replace("K", "x1000")).split("x").reduce((function(t, e) { return t * e })) : t }, dateToUTCString: kd, testDate: Pk, buildTaxonomy: Bk, makeData: dd, isFieldNumericYear: Lk, isFieldStringYear: Yk, isFieldStringMonth: Fk, castNumericToString: Wk, readDecimalsFromData: Rk, isMultipleValues: Nk, isSingleSeries: Hk, isDoubleSeries: jk, isQuadSeries: Ik, isManySeries: function(t) { return t.fields.length > 2 }, isTimeSeries: Vk, isContinuousTimeSeries: Uk, isPositiveDomain: Xk, isNegativeDomain: qk, isMixedDomain: Gk, isSingleSeriesStackedDomain: Zk, isStackedBarData: function(t) { if (t.data.length < 50 && t.data[0].length > 2) { var e = 0; return t.data.forEach((function(t) { t.slice(1).filter((function(t) { return null != t })).length > 1 && (e += 1) })), e < t.data.length - 2 } return !1 }, isTimeSeriesShort: function(t) { return !!Vk(t) && t.data.length <= 12 }, isTimeSeriesYearQuarterMonth: Qk, dateRange: Kk, quarterDateRange: Jk, getDurationYears: tM, isDate: eM, getCustomDateFormat: nM, determineType: TS, typeCheck: PS, typeReport: BS, validator: LS, hashString: function(t) { return function(t) { var e, n = "",
                    i = function(t) { return String.fromCharCode(t + (t > 25 ? 39 : 97)) }; for (e = Math.abs(t); e > 52; e = e / 52 | 0) n = i(e % 52) + n; return i(e % 52) + n }(zS(t)) }, hashCode: zS, nonce: function() { var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                e = Math.round(999999 * Math.random()); return t ? Buffer.from(e).toString("base64") : e }, flattenArrays: ck, groupBy: function(t, e) { return t.reduce((function(t, n) { var i = "function" == typeof e ? e(n) : n[e],
                    r = "string" == typeof i ? i.trim() : i; return Array.isArray(n) || (n = [n]), t[r] ? t[r] = [].concat(Be(t[r]), Be(n)) : t[r] = n, t }), {}) }, orderByComparator: function(t, e) { return "desc" === t ? function(t, n) { return uk(t, n, e) } : function(t, n) { return -uk(t, n, e) } }, stableSort: function(t, e) { var n = t.map((function(t, e) { return [t, e] })); return n.sort((function(t, n) { var i = e(t[0], n[0]); return 0 !== i ? i : t[1] - n[1] })), n.map((function(t) { return t[0] })) }, csvArrayToJson: function(t, e) { var n = e ? 1 : 0,
                i = e ? t[0] : null; return t.slice(n).map((function(t) { return t.reduce((function(t, e, n) { return t[i && i[n] ? i[n] : n] = e, t }), {}) })) }, transpose: function(t) { return t ? t.length ? Object.keys(t[0]).map((function(e) { return t.map((function(t) { return t[e] })) })) : [] : null }, reorder: function(t, e, n) { var i = Array.from(t),
                r = Pe(i.splice(e, 1), 1)[0]; return i.splice(n, 0, r), i }, splitPairs: function(t) { return t.reduce((function(t, e, n, i) { return n % 2 == 0 ? [].concat(Be(t), [i.slice(n, n + 2)]) : t }), []) }, splitPairsContiguous: function(t) { return t.reduce((function(t, e, n, i) { return n < i.length - 1 ? [].concat(Be(t), [i.slice(n, n + 2)]) : t }), []) } };

    function FS(t, e, n) { var i = RS(t, e, n),
            r = Vk(e),
            o = Qk(e); return !(e.chartOptions && e.chartOptions.dateOutputFormat && i > 40) && (!gk(e.fields[0]) && (!!r && (!o && !(i > 50)))) }

    function WS(t, e, n) { return RS(t, e, n) < 5 }

    function RS(t, e, n) { var i = n.stackedBand,
            r = e.data.length * (e.fields.length - 1); return i && (r = e.data.length), t.node().offsetWidth / r }

    function NS(t, e) { return e ? t.data.length : t.data.length * dk(t).length } var HS = "bottom",
        jS = "left",
        IS = "right",
        VS = "horizontal",
        US = "vertical",
        XS = "x",
        qS = "y",
        GS = {};

    function ZS(t) { return !t.options.disableGrid && ("no-grid" !== t.data.config.grid_style && ("no-grid-no-domain" !== t.data.config.grid_style && ("force-grid-force-domain" === t.data.config.grid_style || ("force-grid" === t.data.config.grid_style || (!t.data.annotations || !t.data.annotations.length) && (!Gk(t.data) && (!qk(t.data) && (-1 !== ["terminal", "coth", "bizweek", "bizweek-dark"].indexOf(t.data.theme) || ("line" === t.data.chartType || "scatterPlot" === t.data.chartType)))))))) }

    function QS(t) { return "grid-y-only" === t.data.config.grid_style || "grid-x-only" !== t.data.config.grid_style && ZS(t) }

    function KS(t) { return "grid-x-only" === t.data.config.grid_style || "grid-y-only" !== t.data.config.grid_style && ZS(t) }

    function JS(t) { return !t.options.disableDomain && ("no-grid-no-domain" !== t.data.config.grid_style && ("force-grid-force-domain" === t.data.config.grid_style || ("grid-y-only" === t.data.config.grid_style || !Gk(t.data) && !qk(t.data)))) }

    function tA(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            r = e || "5:2"; return t.chartOptions && t.chartOptions.aspectRatio && (r = t.chartOptions.aspectRatio), i.embedAspectRatio && (r = i.embedAspectRatio), i.aspectRatio && (r = i.aspectRatio), "string" == typeof r && (r = r.split(":")[0] / r.split(":")[1]), n.maxAspectRatioForTerminal && i.isDarkTheme && "avmm" === i.screenshotMode && (r = Math.max(r, n.maxAspectRatioForTerminal)), r }

    function eA(t) { var e = Array.prototype.slice.call(arguments, 1),
            n = window.getComputedStyle(t, null); return e.map((function(t) { return n.getPropertyValue(t) })) }

    function nA(t) { return eA(t, "margin-top", "margin-bottom").map((function(t) { return Number(t.replace("px", "")) })).reduce((function(t, e) { return t + e })) }

    function iA(t) { var e = (t = ke({ verticalColumnMinLength: 1, horizontalColumnMinLength: 2 }, t)).xScale,
            n = t.yScale,
            i = t.seriesOffset || 0;

        function r(r) { r.each((function(r) { var o = Ep(this).classed("simple-column", !0);
                o.selectAll(".bounding-rect").remove(), o.append("rect").classed("bounding-rect", !0).attr("x", e.range()[0]).attr("width", e.range()[1]).attr("y", n.range()[1]).attr("height", n.range()[0]).attr("fill", "transparent"); var a = bd(r, !0, !0),
                    s = t.seriesData || dk(r),
                    l = ax().domain(Ip(s.length));
                t.orientation === VS ? l.rangeRound([0, e.bandwidth()]) : l.rangeRound([0, n.bandwidth()]); var c = Sk(r);
                l.bandwidth(); var u = o.selectAll(".series").data(s);
                u.exit().remove(), u = u.enter().append("g").attr("class", (function(t, e) { return "series f series-" + (e + i) })).merge(u), t.orientation === VS ? u.attr("transform", (function(t, e) { return "translate(" + l(e) + ",0)" })) : u.attr("transform", (function(t, e) { return "translate(0, " + l(e) + ")" })); var f = u.selectAll(".column").data((function(t) { return t.data }));
                f.exit().remove(), t.orientation === VS ? f.enter().append("rect").attr("class", "column").merge(f).classed("highlight", c).attr("x", (function(t, n) { return e(a(n)) })).attr("y", (function(t) { return n(Math.max(0, Fr(t))) })).attr("width", Math.max(1, l.bandwidth())).attr("height", (function(e) { return null == e ? 0 : Math.max(Math.abs(n(Fr(e)) - n(0)), t.verticalColumnMinLength) })) : f.enter().append("rect").attr("class", "column").merge(f).classed("highlight", c).attr("y", (function(t, e) { return n(a(e)) })).attr("x", (function(t, n) { return e(Math.min(0, Fr(t))) })).attr("height", l.bandwidth()).attr("width", (function(n) { return null == n ? 0 : Math.max(Math.abs(e(Fr(n)) - e(0)), t.horizontalColumnMinLength) })) })) } return r.xScale = function(t) { return arguments.length ? (e = t, r) : e }, r.yScale = function(t) { return arguments.length ? (n = t.copy(), r) : n }, r }

    function rA(t, e, n) { return { el: t, data: e, x: null, y: null, z: null, r: null, layout: null, layers: [], options: ke({}, n) } }

    function oA(t, e, n) { var i, r = !1;

        function o() { r || (t.selectAll(".tooltip").classed("tooltip-hidden", !1), r = !0) }

        function a() { r && (t.selectAll(".tooltip").classed("tooltip-hidden", !0), r = !1) } Ur(t, "mouseover.tooltip, touchstart.tooltip", o), Ur(t, "mouseout.tooltip, touchend.tooltip", a), Ur(t, "mousemove.tooltip, touchmove.tooltip", (function(n) { var i = function(t, e) { var n = t.ownerSVGElement || t; if (n.createSVGPoint) { var i = n.createSVGPoint(); return i.x = e.clientX, i.y = e.clientY, [(i = i.matrixTransform(t.getScreenCTM().inverse())).x, i.y] } var r = t.getBoundingClientRect(); return [e.clientX - r.left - t.clientLeft, e.clientY - r.top - t.clientTop] }(t.node(), n);
            e(i, o, a) })), (void 0 === (i = n.options.interactive) || i && "false" !== i) && t.style("pointer-events", "all") }

    function aA(t) { t.chart.selectAll(".tooltip").remove(); var e = t.env; if (!e.options.labelCaps) { var n = t.seriesData || dk(t.env.data),
                i = Hk(t.env.data),
                r = t.chart.selectAppend("div.tooltip-container"),
                o = r.append("div").attr("class", "tooltip tooltip-hidden tooltip-label-box"),
                a = o.append("div").attr("class", "tooltip-label"),
                s = o.selectAppend("div.tooltip-values"),
                l = e.layout.margin(),
                c = e.options.stackedBand || e.y.stackedDomain(),
                u = t.isDumbbell,
                f = c || t.barline || u,
                d = t.area.selectAppend("g.tooltip-container"),
                h = d.append("line").attr("class", "tooltip tooltip-hidden tooltip-gridline"),
                g = d.append("circle").attr("class", "tooltip tooltip-hidden tooltip-anchor"); of (r.node(), e.data, e.options); var p = !1;
            oA(t.chart, (function(r, u, d) { var v = t.area.node().getBoundingClientRect(),
                    m = [(r[0] - l.left) / e.x.rangeLength(), 1 - (r[1] - l.top) / e.y.rangeLength()];
                c && null == e.options.singleSeriesStacked && (p = Zk(e.data), e.options.singleSeriesStacked = p); var y = e.layout.orientation() === US,
                    x = y ? e.y : e.x,
                    b = y ? e.x : e.y,
                    $ = { defaultDecimals: 1, isTooltip: !0 },
                    w = K_(x, e, $),
                    _ = K_(b, e, $),
                    k = null,
                    M = null; if (y ? (m[1] = 1 - m[1], k = e.y.getDataAtPosition(m[1])) : k = e.x.getDataAtPosition(m[0]), k && void 0 !== e.data.data[k.dataIndex]) { u(), t.seriesOffset && k.data && (k.data = k.data.slice(t.seriesOffset)), M = y ? e.y.getPositionFromIndex([k.dataIndex, k.seriesIndex], f) : e.x.getPositionFromIndex([k.dataIndex, k.seriesIndex], f), t.barline && (k.seriesIndex = 0); var S = e.data.data[k.dataIndex][0],
                        A = k.data[k.seriesIndex];
                    c && (A = k.data.reduce((function(t, e) { return Math.max(Number(t), 0) + Math.max(Number(e), 0) }), 0), k.seriesIndex = "X"); var D = M * e.x.rangeLength(),
                        C = e.y.scale(A);
                    y && (C = M * e.y.rangeLength(), D = e.x.scale(A)); var E = n.map((function(t) { return t.data[k.dataIndex] })); if (!isNaN(C) && !isNaN(D)) { y ? h.attr("x1", D).attr("x2", D).attr("y1", e.y.scale.range()[0]).attr("y2", e.y.scale.range()[1]) : h.attr("x1", e.x.scale.range()[0]).attr("x2", e.x.scale.range()[1]).attr("y1", C).attr("y2", C), g.attr("r", e.options.tooltipAnchorSize).attr("cx", D || 0).attr("cy", C || 0); var O = e.layout.yAxisInnerPadding(),
                            T = D + O + l.left + e.options.tooltipOffsetX,
                            P = C + l.top + e.options.tooltipOffsetY,
                            B = null,
                            L = e.options.tooltipLineHeight * (n.length + 1),
                            z = e.options.tooltipMaxWidth,
                            Y = !1,
                            F = !1;
                        c && (L = e.options.tooltipLineHeight * (n.length + 2)), T + z > v.width && (T = Math.max(D + O + l.left - e.options.tooltipOffsetX, z), B = "flipHorizontal", Y = !0), P + L > v.height && (P = Math.max(C + l.top - e.options.tooltipOffsetY, L), B = "flipVertical", F = !0), F && Y && (B = "flipVH"), o.style("left", T + "px").style("top", P + "px").classed("flipHorizontal", "flipHorizontal" === B).classed("flipVertical", "flipVertical" === B).classed("flipVH", "flipVH" === B).classed("single-series", i || p), a.text(w(S)); var W = s.selectAll(".tooltip-value").data(E);
                        W.exit().remove(), W.enter().append("div").classed("tooltip-value", !0).merge(W).classed("active", (function(t, e) { return e === k.seriesIndex })).html((function(t, e) { return '\n            <span class="swatch bg series-'.concat(e, '"></span>\n            <span class="val">').concat(_(t), "</span>\n          ") })).style("display", (function(t) { return p ? t ? "flex" : "none" : "flex" })), c && !p && (o.classed("stacked", !0), s.append("div").classed("tooltip-value", !0).classed("total", !0).html((function() { return '\n            <span class="left">Total</span>\n            <span class="val">'.concat(_(A), "</span>\n          ") }))), of (o.node(), e.data, e.options) } } else d() }), e) } } GS.top = cv, GS.bottom = fv, GS.left = dv, GS.right = uv; var sA = "line",
        lA = "hide-on-mobile",
        cA = [{ x: -10, y: -5, alignX: "right", alignY: "bottom" }, { x: -10, y: -30, alignX: "right", alignY: "bottom" }, { x: -10, y: -60, alignX: "right", alignY: "bottom" }, { x: -10, y: -100, alignX: "right", alignY: "bottom" }, { x: -10, y: -180, alignX: "right", alignY: "bottom" }, { x: 10, y: -5, alignX: "left", alignY: "bottom" }, { x: 10, y: -30, alignX: "left", alignY: "bottom" }, { x: 10, y: -60, alignX: "left", alignY: "bottom" }, { x: 10, y: -100, alignX: "left", alignY: "bottom" }, { x: 10, y: -180, alignX: "left", alignY: "bottom" }, { x: -10, y: 5, alignX: "right", alignY: "top" }, { x: -10, y: 30, alignX: "right", alignY: "top" }, { x: -10, y: 60, alignX: "right", alignY: "top" }, { x: -10, y: 100, alignX: "right", alignY: "top" }, { x: -10, y: 180, alignX: "right", alignY: "top" }, { x: 10, y: 5, alignX: "left", alignY: "top" }, { x: 10, y: 30, alignX: "left", alignY: "top" }, { x: 10, y: 60, alignX: "left", alignY: "top" }, { x: 10, y: 100, alignX: "left", alignY: "top" }, { x: 10, y: 180, alignX: "left", alignY: "top" }],
        uA = [{ x: 10, y: -5, alignX: "left", alignY: "bottom" }, { x: 10, y: -30, alignX: "left", alignY: "bottom" }, { x: 10, y: -60, alignX: "left", alignY: "bottom" }, { x: 10, y: -100, alignX: "left", alignY: "bottom" }, { x: 10, y: -180, alignX: "left", alignY: "bottom" }],
        fA = [{ x: -10, y: -5, alignX: "right", alignY: "bottom" }, { x: -10, y: -30, alignX: "right", alignY: "bottom" }, { x: -10, y: -60, alignX: "right", alignY: "bottom" }, { x: -10, y: -100, alignX: "right", alignY: "bottom" }, { x: -10, y: -180, alignX: "right", alignY: "bottom" }],
        dA = { north: [{ x: -10, y: -5, alignX: "right", alignY: "bottom" }, { x: 10, y: -5, alignX: "left", alignY: "bottom" }, { x: -10, y: -30, alignX: "right", alignY: "bottom" }, { x: 10, y: -30, alignX: "left", alignY: "bottom" }, { x: -10, y: -60, alignX: "right", alignY: "bottom" }, { x: 10, y: -60, alignX: "left", alignY: "bottom" }, { x: -10, y: -100, alignX: "right", alignY: "bottom" }, { x: 10, y: -100, alignX: "left", alignY: "bottom" }, { x: -10, y: -180, alignX: "right", alignY: "bottom" }, { x: 10, y: -180, alignX: "left", alignY: "bottom" }], northwest: fA, northeast: uA, east: fA, west: uA, south: [{ x: -10, y: 5, alignX: "right", alignY: "top" }, { x: 10, y: 5, alignX: "left", alignY: "top" }, { x: -10, y: 30, alignX: "right", alignY: "top" }, { x: 10, y: 30, alignX: "left", alignY: "top" }, { x: -10, y: 60, alignX: "right", alignY: "top" }, { x: 10, y: 60, alignX: "left", alignY: "top" }, { x: -10, y: 100, alignX: "right", alignY: "top" }, { x: 10, y: 100, alignX: "left", alignY: "top" }, { x: -10, y: 180, alignX: "right", alignY: "top" }, { x: 10, y: 180, alignX: "left", alignY: "top" }], southwest: [{ x: -10, y: 5, alignX: "right", alignY: "top" }, { x: -10, y: 30, alignX: "right", alignY: "top" }, { x: -10, y: 60, alignX: "right", alignY: "top" }, { x: -10, y: 100, alignX: "right", alignY: "top" }, { x: -10, y: 180, alignX: "right", alignY: "top" }], southeast: [{ x: 10, y: 5, alignX: "left", alignY: "top" }, { x: 10, y: 30, alignX: "left", alignY: "top" }, { x: 10, y: 60, alignX: "left", alignY: "top" }, { x: 10, y: 100, alignX: "left", alignY: "top" }, { x: 10, y: 180, alignX: "left", alignY: "top" }] },
        hA = { north: { x: 0, y: -5, alignX: "middle", alignY: "bottom" }, northwest: { x: -8, y: -5, alignX: "right", alignY: "bottom" }, northeast: { x: 8, y: -5, alignX: "left", alignY: "bottom" }, east: { x: 8, y: 8, alignX: "left", alignY: "bottom" }, west: { x: -8, y: 8, alignX: "right", alignY: "bottom" }, south: { x: 0, y: 9, alignX: "middle", alignY: "top" }, southwest: { x: -8, y: 5, alignX: "right", alignY: "top" }, southeast: { x: 8, y: 5, alignX: "left", alignY: "top" } },
        gA = [{ x: 0, y: -66, alignX: "middle", alignY: "bottom" }, { x: 0, y: -33, alignX: "middle", alignY: "bottom" }, { x: 0, y: -16, alignX: "middle", alignY: "bottom" }],
        pA = [{ x: 46, y: 0, alignX: "left", alignY: "middle" }];

    function vA(t, e) { return t.map((function(t, n) { var i = Se(Se({}, t), e[n]); return null != i.mobile_display && (i.mobileDisplay = i.mobile_display), null != i.categorical_value && (i.categoricalValue = i.categorical_value), null != i.offset_x && (i.offsetX = i.offset_x), null != i.offset_y && (i.offsetY = i.offset_y), i })) }

    function mA(t, e, n) { if (!n.options.disableAnnotations) { var i = n.data.config.textAnnotations,
                r = n.data.config.annotation_options || {},
                o = vA(i && i.length ? i : e || [], r),
                a = t.selectAppend("g.annotations");
            a.selectAll("*").remove(), n.layout.container().selectAll(".annotations-footer *").remove(); var s = t.node().getBoundingClientRect(),
                l = [s.left + n.layout.yAxisInnerPadding(), s.top + n.layout.xAxisInnerPadding()];
            o.forEach((function(t, e) { var i = Mk(n.data.fields[0], t.categoricalValue); if (-1 !== i) { var r = t.type || sA,
                        o = t.mobileDisplay === lA; if (null != n.data.data[i]) { var s, c = n.data.data[i][t.series],
                            u = n.y.scale(c),
                            f = n.x.getPositionFromIndex(i, !0),
                            d = dA[t.direction] || cA,
                            h = n.options.annotationAnchorSize || 4;
                        r === sA && a.append("line").classed("annotation-".concat(e), !0).classed("annotation-hide-on-mobile", o).attr("x1", f * n.x.rangeLength()).attr("x2", f * n.x.rangeLength()).attr("y1", n.y.scale.range()[0]).attr("y2", n.y.scale.range()[1]), "short-line" === r && (s = a.append("line").classed("annotation-".concat(e), !0).classed("annotation-hide-on-mobile", o).attr("x1", f * n.x.rangeLength()).attr("x2", f * n.x.rangeLength()).attr("y1", u).attr("y2", u)), "text-only" !== r && a.append("circle").classed("annotation-".concat(e), !0).classed("annotation-hide-on-mobile", o).classed("f", !0).classed("series-" + (t.series - 1), !0).attr("cx", f * n.x.rangeLength()).attr("cy", u).attr("r", h); var g = a.append("text").classed("annotation-".concat(e), !0).classed("annotation-hide-on-mobile", o).attr("x", f * n.x.scale.range()[1] + d[0].x).attr("y", u + d[0].y).text(t.caption),
                            p = 120;
                        xl(n.layout.width(), n.options) && (p = 100), g.each(F_(p)); var v = null,
                            m = g.node().getBoundingClientRect(),
                            y = !1,
                            x = function(t, e, i) { if (!y && t) { var r = f * n.x.scale.range()[1] + t.x,
                                        o = u + t.y;
                                    i || (o = Math.min(n.y.scale.range()[0] - m.height - 6, o)); var a = o; "bottom" === t.alignY && (a -= m.height), g.attr("x", r).attr("y", a).style("text-anchor", (function() { return "right" === t.alignX ? "end" : "middle" === t.alignX ? "middle" : "start" })), g.selectAll("tspan").attr("x", r).attr("y", a), s && s.attr("y2", o), m = g.node().getBoundingClientRect(), v = [m.left - l[0], m.top - l[1] - 12, m.right - l[0], m.bottom - l[1] + 12], "force" !== i && (function(t, e) { var n = [t[0] / e.x.scale.range()[1], t[2] / e.x.scale.range()[1]]; if (t[0] < 0 - e.layout.xAxisInnerPadding() || t[2] > e.x.scale.range()[1] + e.layout.xAxisInnerPadding() || t[1] < 0 - e.layout.yAxisInnerPadding() || t[1] > e.y.scale.range()[0] + e.layout.yAxisInnerPadding()) return !0; var i = [99999, -99999],
                                            r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; return r.forEach((function(t) { var o = n[0] + t / (r.length - 1) * (n[1] - n[0]),
                                                a = e.x.getDataAtPosition(o);
                                            null != a && a.data.forEach((function(t) { if (t) { var n = e.y.scale(t);
                                                    isNaN(n) || (i[0] = Math.min(i[0], n), i[1] = Math.max(i[1], n)) } })) })), i[0] >= t[1] && i[0] <= t[3] || i[1] >= t[1] && i[1] <= t[3] }(v, n) || (y = t)) } }; if ("auto" === t.direction) d.forEach(x);
                        else { var b = ke({}, hA[t.direction]);
                            t.offsetX && (b.x = Number(t.offsetX)), t.offsetY && (b.y = -1 * Number(t.offsetY)), x(b, 0, "force"), y = b } if (!y && "auto" === t.direction) { var $ = d[d.length - 1];
                            $.alignX = "right", $.x = 10, x() } } } })) } }

    function yA(t, e, n) { if (!n.options.disableAnnotations) { var i = n.data.config.textAnnotations,
                r = n.data.config.annotation_options || {},
                o = vA(i && i.length ? i : e || [], r),
                a = [],
                s = t.selectAppend("g.annotations");
            s.selectAll("*").remove(), n.layout.container().selectAll(".annotations-footer *").remove(); var l = n.layout.orientation() === US,
                c = n.options.stackedBand,
                u = n.options.isDumbbell,
                f = c || n.options.barline || u;
            o.forEach((function(t, e) { var i = Mk(n.data.fields[0], t.categoricalValue); if (null != n.data.data[i]) { var r, o, u, d, h, g, p, v = n.data.data[i][t.series];
                    c && (v = Ir(n.data.data[i].slice(1))); var m = v < 0,
                        y = t.type || sA,
                        x = t.mobileDisplay === lA; if (l) { if (v = Math.max(0, v), o = n.x.scale(v) + 8, r = n.y.getPositionFromIndex([i, t.series - 1], f) * n.y.rangeLength(), h = pA, n.options.labelCaps) { var b = Ep(".label-" + i); if (b.node()) { var $ = b.node().getBoundingClientRect().width;
                                o += $ + 8 } } } else r = n.y.scale(v) - 8, o = n.x.getPositionFromIndex([i, t.series - 1], f) * n.x.rangeLength(), m && (r += 16), h = gA; var w = !1,
                        _ = function(i) { if (!w) { if (l) u = s.append("text").classed("annotation-".concat(e), !0).attr("x", o + i.x).attr("y", r + i.y).style("text-anchor", "start").text(t.caption).classed("annotation-hide-on-mobile", x), y === sA && (d = s.append("line").classed("annotation-".concat(e), !0).attr("x1", o).attr("x2", o + i.x - 8).attr("y1", r).attr("y2", r).classed("annotation-hide-on-mobile", x));
                                else { u = s.append("text").classed("annotation-".concat(e), !0).attr("x", o + i.x).attr("y", r + i.y).style("text-anchor", "middle").text(t.caption).classed("annotation-hide-on-mobile", x), -1 !== t.direction.indexOf("west") ? u.style("text-anchor", "end") : -1 !== t.direction.indexOf("east") && u.style("text-anchor", "start"); var a = i.y + 8;
                                    v < 0 && (a *= -1), y === sA && (d = s.append("line").classed("annotation-".concat(e), !0).attr("x1", o).attr("x2", o).attr("y1", r).attr("y2", r + a).classed("annotation-hide-on-mobile", x)) } var c = 120;
                                xl(n.layout.width(), n.options) && (c = 100), u.each(F_(c)), l ? (g = u.node().getBoundingClientRect(), p = r + i.y - g.height / 2 + 2, u.attr("y", p), u.selectAll("tspan").attr("y", p), o + i.x + g.width > n.x.rangeLength() ? (u && u.remove(), d && d.remove()) : w = !0) : (g = u.node().getBoundingClientRect(), m ? (p = r - i.y, u.attr("y", p), u.selectAll("tspan").attr("y", p), r - i.y + g.height > n.y.rangeLength() ? (u && u.remove(), d && d.remove()) : w = !0) : (p = r + i.y - g.height, u.attr("y", p), u.selectAll("tspan").attr("y", p), r + i.y - g.height < 0 ? (u && u.remove(), d && d.remove()) : w = !0)) } }; if ("auto" === t.direction) h.forEach(_);
                    else { var k = ke({}, hA[t.direction]);
                        t.offsetX && (k.x = Number(t.offsetX)), t.offsetY && (k.y = -1 * Number(t.offsetY)), _(k) } w || a.push(t) } })), n.options.preventCondensedAnnotations || function(t, e, n) { var i = n.data.config.textAnnotations,
                    r = n.data.config.annotation_options || {},
                    o = vA(i && i.length ? i : e || [], r); if (!o.length) return; var a = t.selectAppend("g.annotations"),
                    s = n.layout.container().selectAppend("div.annotations-footer");
                s.selectAll("*").remove(); var l = n.layout.orientation() === US,
                    c = n.options.stackedBand,
                    u = c || n.options.barline;
                o.forEach((function(t, e) { var i = Mk(n.data.fields[0], t.categoricalValue); if (-1 !== i) { var r = n.data.data[i][t.series];
                        c && (r = Ir(n.data.data[i].slice(1))); var o = null,
                            f = null,
                            d = r < 0; if (l) { if (f = n.x.scale(r) + 8, o = n.y.getPositionFromIndex([i, t.series], u) * n.y.rangeLength(), o -= n.y.scale.bandwidth() / 2, o += 4, n.options.labelCaps) { var h = Ep(".label-" + i); if (h.node()) f += h.node().getBoundingClientRect().width + 8 } } else o = n.y.scale(r) - 8 - 8, f = n.x.getPositionFromIndex([i, t.series], u) * n.x.rangeLength(), d && (o += 16); var g = a.append("text").classed("condensed-annotation", !0).classed("horizontal", l).attr("x", f).attr("y", o + 8 + 4).text(Array(e + 2).join("*"));
                        l || g.style("text-anchor", "middle").attr("x", f), s.append("div").html('<span class="star">' + Array(e + 2).join("*") + "</span> " + t.caption) } })) }(t, a, n) } }

    function xA(t, e) { return Math.min(5, Math.max(3, 3 / (t / e / 32))) }

    function bA(t, e, n) { var i = t.append("g.label").attr("index", e.index).attr("orientation", e.orientation).attr("extend", e.extend).classed("highlight", e.highlight).attr("transform", "translate(".concat(e.position[0], ", ").concat(e.position[1], ")")),
            r = [0, 0],
            o = [0, 0],
            a = n.options.labelLineOffset; if ("top" === e.extend || "bottom" === e.extend) { var s = [0, 0],
                l = e.extendLength || n.options.labelExtendLength,
                c = [0, 0]; "top" === e.extend ? (s[1] -= a, (c = s.slice(0))[1] -= l) : "bottom" === e.extend && (s[1] += a, (c = s.slice(0))[1] += l), i.append("line").attr("x1", s[0] + "px").attr("y1", s[1] + "px").attr("x2", c[0] + "px").attr("y2", c[1] + "px"), r = c, a = 0 } "right" === e.orientation ? (r[0] += a, (o = r.slice(0))[0] += n.options.labelLineLength) : "left" === e.orientation && (r[0] -= a, (o = r.slice(0))[0] -= n.options.labelLineLength), i.append("line").attr("x1", r[0] + "px").attr("y1", r[1] + "px").attr("x2", o[0] + "px").attr("y2", o[1] + "px"),
            function(t, e, n) { var i = t.append("g").classed(e.orientation, !0).classed("text-group", !0); if ("right" === e.orientation ? e.position[0] += n.options.labelLineOffset : e.position[0] -= n.options.labelLineOffset, i.append("text").classed("line1", !0).attr("dy", 0).attr("y", 0).text(e.line1), e.line2) { var r = i.append("text").classed("line2", !0).attr("dy", 0).attr("y", n.options.labelLine2Height).text(e.line2);
                    r.each(F_(n.options.labelTextWrapWidth, { margin: 0 })), r.selectAll("tspan").attr("x", 0) } i.attr("transform", "translate(".concat(e.position[0], ", ").concat(e.position[1], ")")) }(i, { orientation: e.orientation, position: o, line1: e.valueText, line2: e.labelText }, n) }

    function $A(t) { return t = ke({ orientation: XS, verticalGridLength: 8, extendAllVerticalTicks: !1, extendVerticalZeroTick: !1, hideBottomValueTick: !0, gridTransform: null, useInnerPadding: !1 }, t),
            function(e, n) { var i = t.orientation === XS,
                    r = i ? n.y : n.x,
                    o = GS[r.position()](r.scale),
                    a = t.gridTransform || [-1 * n.layout.xAxisInnerPadding(), -1 * n.layout.yAxisInnerPadding()],
                    s = t.length; return r.position() === jS && (s *= -1), r.model().tickValues() ? o.tickValues(r.model().tickValues()) : o.ticks(r.numTicks()), o.tickSize(s).tickFormat(""), e.call(o).classed("vertical-grid", !i), t.useInnerPadding ? e.style("transform", "translate(".concat(a[1], "px, ").concat(a[0], "px)")) : i ? e.style("transform", "translate(".concat(a[1], "px, 0px)")) : e.style("transform", "translate(".concat(a[0], "px, 0px)")), e.selectAll("g.tick").filter((function(t) { return 0 === t })).select("line").attr("class", "zero-line"), t.hideBottomValueTick && e.selectAll("g.tick").filter((function(t) { return Math.abs(r.range()[0] - r.scale(t)) < 5 })).select("line").attr("class", "hide-line"), i || t.extendAllVerticalTicks || e.selectAll("g.tick").select("line").attr("y1", (function() { var e = Ep(this); return t.extendVerticalZeroTick && e.classed("zero-line") ? e.attr("y1") : Number(e.attr("y2")) - t.verticalGridLength })), e } }

    function wA(t) { if (t.fields[0] && t.fields[0].taxonomy) { if (t.fields[0].taxonomy.duration === Wf || t.fields[0].taxonomy.duration === Rf || t.fields[0].taxonomy.duration === Nf) return 25; if (t.fields[0].taxonomy.duration === jf) return 0; if (gk(t.fields[0])) return 0 } return 18 }

    function _A(t, e, n) { var i = n || {},
            r = i.checkOnly,
            o = i.ignoreStartEnd,
            a = MA(t); if (!(a.length < 3)) { var s = !1,
                l = null,
                c = null; return a.forEach((function(t, e) { if (!l) return l = t, void(c = t.getBoundingClientRect()); if (!r || !s) { var n = t.getBoundingClientRect(); if (c.right + 4 > n.left) { if (s = !0, r) return; var i = Ep(t);
                        o ? i.classed("hide-tick", !0) : (i.classed("start-tick") || i.classed("end-tick") ? l && Ep(l).classed("hide-tick", !0) : i.classed("hide-tick", !0), i.classed("end-tick") && i.classed("hide-tick", !1)) } else l = t, c = n } })), s } }

    function kA(t, e) { var n = MA(t);
        e.rangeLength() / n.length < 70 && n.forEach((function(t, e) { 0 !== e && e !== n.length - 1 && Ep(t).select("tspan").text((function() { return "'".concat(Ep(this).text().slice(2)) })), 0 === e ? Ep(t).classed("tick-start", !0) : e === n.length - 1 && Ep(t).classed("tick-end", !0) })) }

    function MA(t) { var e = t.selectAll(".tick").nodes().filter((function(t, e) { var n = Ep(t); return !(n.classed("hide-text") || n.classed("hide-tick") || n.classed("start-tick") || n.classed("end-tick")) })),
            n = t.select(".start-tick"),
            i = t.select(".end-tick"); return n.size() && e.unshift(n.node()), i.size() && e.push(i.node()), e }

    function SA(t, e) { if (e.rangeLength() <= 375)
            if (t.select(".start-tick").size()) t.selectAll(".tick").classed("hide-tick", !0), t.select(".start-tick").classed("hide-tick", !1), t.select(".end-tick").classed("hide-tick", !1);
            else { var n = t.selectAll(".tick");
                n.filter((function(t, e) { return 0 !== e && e !== n.size() - 1 })).classed("hide-tick", !0) } }

    function AA(t, e) { var n = MA(t),
            i = null;
        n.forEach((function(t) { t = Ep(t), i && t.text() === i ? t.classed("hide-tick", !0) : i = t.text() })) }

    function DA(t, e) { var n = MA(t),
            i = e.field(); if (i.taxonomy && i.taxonomy.noYears) t.selectAll(".tick").classed("hide-line2", !0);
        else { var r = null;
            n.forEach((function(t) {
                (t = Ep(t)).select(".line2").size() && (r && t.select(".line2").text() === r ? t.classed("hide-line2", !0) : r = t.select(".line2").text()) })) } }

    function CA(t, e) { var n = EA(e); if (1 !== n) { var i = MA(t);
            (i = i.slice(1, i.length - 1)).forEach((function(t, e) { var i = Ep(t);
                i.classed("hide-tick", (e + 1) % n != 0 && !i.classed("do-not-hide")) })), _A(t) } }

    function EA(t) { var e = t.field(); return !e.auto_density && e.label_density ? Math.max(e.label_density, 1) : 1 }

    function OA(t, e) { EA(e) > 1 && (t.selectAll(".tick").nodes().forEach((function(t) {
            (t = Ep(t)).classed("hide-tick", 1 !== Number(t.attr("quarter"))) })), CA(t, e)) }

    function TA(t, e, n) { e.orientation() === US ? t.select(".domain").attr("d", "M" + -1 * n.layout.xAxisInnerPadding() + ",0V0H" + (e.axisScale.range()[0] + n.layout.xAxisInnerPadding()) + "V0").classed("vertical-baseline", !0) : t.select(".domain").attr("d", "M" + -1 * n.layout.yAxisInnerPadding() + ",0L" + (e.axisScale.range()[1] + n.layout.yAxisInnerPadding()) + ",0").classed("horizontal-baseline", !0) }

    function PA(t, e) { return e.data.config && e.data.config.hide_year_display ? [t[0]] : t }

    function BA(t, e, n, i, r) { var o, a, s = Se({ labelGutter: 10, disableStartEndCaps: !1, noStartCap: !1, noEndCap: !0, endCapPriority: !1 }, r),
            l = s.labelGutter,
            c = s.noStartCap,
            u = s.noEndCap,
            f = s.disableStartEndCaps,
            d = !c && !f,
            h = !u && !f,
            g = wd(e.field()),
            p = t.selectAll("g.tick"),
            v = Ep(p.nodes()[0]),
            m = Ep(p.nodes()[p.size() - 1]);
        TA(t, e, i), d && LA(o = t.append("g").classed("start-tick", !0)); var y = "";
        e.dateScale.domain()[0] && e.dateScale.domain()[0].toUTCString && (y = kd(e.dateScale.domain()[0], e.field())); var x = "";
        e.dateScale.domain()[1] && e.dateScale.domain()[1].toUTCString && (x = kd(e.dateScale.domain()[1], e.field())), d && o.select("text").classed("start-text", !0).text(y), h && (LA(a = t.append("g").classed("end-tick", !0).attr("transform", "translate(" + e.dateScale.range()[1] + ",0)")), a.select("text").classed("end-text", !0).text(x)); var b = t.selectAll("g.tick").select("text").each((function(t, i) { var r = Ep(this),
                    o = r.text(),
                    a = r.attr("y"),
                    l = n;
                s.startCapFormatters && r.classed("start-text") && (s.requiresFormatting ? s.requiresFormatting(o) && (l = s.startCapFormatters) : l = s.startCapFormatters), r.text(null), r.append("tspan").attr("x", 0).attr("y", a).attr("dy", e.axisTextMarginHorizontal() + "px").classed("line1", !0).text(l[0](g(o))), l[1] && !s.axisTextSingleLine && r.append("tspan").attr("x", 0).attr("y", a).attr("dy", e.axisTextMarginHorizontal() + e.axisTextLineHeight() + "px").classed("line2", !0).text(l[1](g(o))) })),
            $ = 2 + p.size(); return p.each((function() { d && (o.node().getBoundingClientRect().right > this.getBoundingClientRect().left - l || o.text() === Ep(this).text()) && (Ep(this).classed("hide-tick", !0), $--), h && (this.getBoundingClientRect().right + l > a.node().getBoundingClientRect().left || a.text() === Ep(this).text()) && (s.endCapPriority ? Ep(this).classed("hide-tick", !0) : a.classed("hide-tick", !0), $--) })), { initial: p, all: b, first: v, last: m, start: o, end: a, visibleCount: $ } }

    function LA(t) { t.classed("tick", !0), t.append("line").attr("x1", .5).attr("x2", .5).attr("y2", 6), t.append("text").attr("y", 9).attr("x", .5).attr("dy", "0.71em").attr("text-anchor", "middle") }

    function zA(t, e, n, i) { var r = Math.max(2, Math.floor(e.range()[1] / e.tickStepHorizontal())),
            o = n.options.hourlyFormat,
            a = void 0 === o ? "HH:mm" : o,
            s = [function(t) { return t.format(a) }, function(t) { return t.format("MMM D") }]; return e.range()[1] < 600 && (r *= 1.5), r /= EA(e), e.model().ticks(r).tickFormat((function(t, n) { return kd(t, e.field()) })), t.call(e.model()), BA(t, e, s, n), _A(t), DA(t, e), t }

    function YA(t, e, n, i) { var r = Math.max(2, Math.floor(e.rangeLength() / e.tickStepHorizontal())); return r /= EA(e), e.model().ticks(r).tickFormat((function(t, n) { return kd(t, e.field()) })), t.call(e.model()), BA(t, e, [function(t) { return t.format("ddd") }, function(t) { return t.format("MMM D") }], n, { noEndCap: !1 }), AA(t), _A(t), DA(t, e), t }

    function FA(t, e, n, i) { var r = PA([function(t) { return t.format("MMM D") }, function(t) { return t.format("YYYY") }], n),
            o = Se(Se({}, i), {}, { noEndCap: !1, endCapPriority: !0 });
        e.model().ticks(tb).tickFormat((function(t, n) { return kd(t, e.field()) })), t.call(e.model()); var a = BA(t, e, r, n, o); return a.initial.each((function() { var t = Ep(this);
            t.classed("hide-tick") || function(t) { var e = t.split(" "); return -1 !== ["1", "15"].indexOf(e[e.length - 1]) }(t.select(".line1").text()) || t.classed("hide-tick", !0) })), MA(t).length < 3 && a.initial.each((function(t, e) { Ep(this).classed("hide-tick", (function() { return e % 5 != 0 })) })), AA(t), _A(t), CA(t, e), DA(t, e), t }

    function WA(t, e, n, i) { var r = i || {},
            o = EA(e),
            a = PA([function(t) { return t.format("MMM") }, function(t) { return t.format("YYYY") }], n),
            s = Math.max(2, Math.floor(e.rangeLength() / e.tickStepHorizontal())); return s /= o, o > 2 && (r.noEndCap = !1), n.data.chartOptions && n.data.chartOptions.dateOutputFormat && (n.data.chartOptions.dateOutputFormat === Kf ? a[0] = q_ : n.data.chartOptions.dateOutputFormat === Qf && (a = [function(t) { return t.format("YYYY") }])), e.model().ticks(s).tickFormat((function(t, n) { return kd(t, e.field()) })), t.call(e.model()), BA(t, e, a, n, r), AA(t), _A(t), DA(t, e), t }

    function RA(t, e, n, i) { var r = Math.max(2, Math.floor(e.range()[1] / e.tickStepHorizontal())),
            o = tM(e.field(), e.dateScale.domain()),
            a = Se({ noStartCap: !1, noEndCap: !0, endCapPriority: !1 }, i),
            s = e.rangeLength() <= 375,
            l = e.orientation() === US,
            c = s || gk(e.field()); return r = Math.min(r, o), r /= EA(e), a.noStartCap = ! function(t, e, n) { var i = t.scale.domain(),
                r = t.rangeLength() / e; return Number(_d(i[0]).format("M")) < 7 && r > 80 }(e, r), s && (a.noEndCap = !1, a.noStartCap = !1), e.model().ticks(r).tickFormat((function(t, n) { return kd(t, e.field()) })), t.call(e.model()), BA(t, e, [function(t) { return t.format("YYYY") }], n, a), c || l ? AA(t) : (AA(t), kA(t, e)), s ? SA(t, e) : _A(t), t }

    function NA(t, e, n) { var i = Math.max(2, Math.floor(e.rangeLength() / (2 * e.tickStepHorizontal()))),
            r = tM(e.field(), e.dateScale.domain()); return i = Math.min(i, r), i /= EA(e), e.model().ticks(i).tickFormat((function(t, n) { if (t.toUTCString) return kd(t, e.field()) })), t.call(e.model()), BA(t, e, [function(t) { return t.format("YYYY") }], n, { axisTextSingleLine: !0, labelGutter: 30, noEndCap: !1, endCapPriority: !1 }), SA(t, e), AA(t), CA(t, e), t }

    function HA(t, e) { var n = Ip(Math.floor(Math.min(14, Math.max(2, Math.abs(e[1] - e[0]) / t))) + 1).map((function(n) { return e[0] + n * t })); return [n, [n[0], n[n.length - 1]]] }

    function jA(t, e, n) { var i = function(t) { var e = 1; return t.field().display_as && rd[t.field().display_as] && (e = rd[t.field().display_as]),
                    function(t) { return t * e } }(e),
            r = e.field(),
            o = e.orientation() === US,
            a = o ? e.range()[0] : e.range()[1],
            s = o ? e.tickStepVertical() : e.tickStepHorizontal(),
            l = Dk(n.data, e.field()),
            c = l || n.options.forceTickAtDomainTop,
            u = null == n.options.minimumTicks ? 3 : n.options.minimumTicks,
            f = n.options.forceNoTicks,
            d = (r.numericProperties ? r.numericProperties : n.data.chartOptions).scaleStep,
            h = Se({ bareValue: !0, voidDecimals: !0, forceCommaDisplay: n.options.forceCommaDisplay || n.data.config.force_comma_display }, r.numericProperties);
        h.decimalPlaces = h.decimals; var g, p = K_(e, n, h),
            v = e.axisScale.domain(),
            m = Math.min(8, Math.max(u, Math.floor(a / s))); if (l || (e.axisScale.nice(Math.max(m, u)), v = e.axisScale.domain()), e.numTicks(m), e.model().ticks(m).tickFormat(p), c) { if (m = function(t, e) { for (var n = !1; !n && t < 8;) { var i = qp(e[0], e[1], t);
                        i[i.length - 1] === e[1] ? n = !0 : t++ } return t }(u, v), (g = qp(v[0], v[1], m)).length > m && Gk(n.data)) { var y = Pe(HA(function(t, e) { for (t = Math.abs(t), e = Math.abs(e); e;) { var n = e;
                        e = t % e, t = n } return t }(v[0], v[1]), v), 1)[0];
                y.length < g.length && (m = y.length, g = y) } e.numTicks(m), e.model().tickValues(g) } if (Ck(n.data, e.field())) { var x = Pe(HA(d, v = e.axisScale.domain()), 2),
                b = x[0],
                $ = x[1];
            m = b.length, e.numTicks(m), e.model().tickValues(b), e.axisScale.domain($) } var w = v.map(i);
        g = qp(w[0], w[1], m), f && (g = w, e.model().tickValues(g)), p = K_(e, n, h = J_(g, h, e, n)), e.model().tickFormat(p); var _ = t.call(e.model()).classed(e.position(), !0).classed("vcenter", !!e.val("axisTextCenterVertical")),
            k = e.rangeLength() / g.length > 25;
        o && !k && LS(n.data)("Too many ticks for proper grid display. Please set custom step.", (function() { return !0 })); if (_.classed("no-line", o && k && e.noDomainLine()), _.classed("variant-above", o && k), o && _.classed("no-domain", !0), o && k) { var M = 0,
                S = _.selectAll(".tick text");
            S.each((function(t, e) { var n = Ep(this),
                        i = n.text(),
                        r = i.replace(/[^\d,.-]/g, ""),
                        o = i.split(r);
                    0 === Number(r) && Ep(n.node().parentElement).classed("zero-line", !0), e === S.size() - 1 ? n.html('<tspan class="pre">'.concat(o[0], '</tspan><tspan class="val">').concat(r, '</tspan><tspan class="post">').concat(o[1], "</tspan>")) : n.html('<tspan class="val">'.concat(r, "</tspan>")) })), _.selectAll(".tick tspan.val").each((function(t, e) { this.getComputedTextLength && (M = Math.max(M, this.getComputedTextLength())) })), _.select(".tick").classed("base", !0), _.selectAll(".tick").each((function(t, e) { var n = 0 === e ? -.5 : 0,
                        i = Ep(this),
                        r = Y_(i.attr("transform")).translateY,
                        o = [M - 8, r + n];
                    i.attr("transform", "translate(".concat(o[0], ", ").concat(o[1], ")")) })), _.selectAll(".tick text").attr("dy", "-9px"), _.selectAll(".tick line").style("visibility", "visible").style("display", "block").attr("x1", -1 * M + 8).attr("x2", 8),
                function(t, e, n) { JS(n) && n.layout.addPostLayoutHandler((function(n, i, r) { var o = i.layout.g().select(".axis-x .domain"),
                            a = o.attr("d").split("L"),
                            s = r.outerWidth() - r.yAxisInnerPadding();
                        s += e, o.attr("d", "".concat(a[0], "L").concat(s, ",0")), o.attr("tick-extend-has-executed", !0), t.select("line").style("display", "none") })) }(_.select(".tick.base"), M, n) } if (!o) { var A = e.verticalTickLength() || 6;
            _.selectAll(".tick text").attr("dy", "".concat(A + 8, "px")), _.selectAll(".tick line").attr("y2", A), e.leftAlignStartTick() && _.select(".tick text").classed("left-align", !0).attr("transform", "translate(-5, 0)"), TA(t, e, n) } t.node().getBoundingClientRect(); var D = t.selectAll("g.tick"),
            C = e.axisScale.domain()[0] < 0; if (e.tickLabelAlternate()) { var E = D.size() % 2 == 0 ? 0 : 1,
                O = D.size() > 5;
            D.each((function(t, e) { C ? e % 2 === E && Ep(this).classed("hide-text", !0) : (O && 0 === e || e % 2 === E) && Ep(this).classed("hide-text", !0) })) } return 1 === MA(t).length && Ep(D.nodes()[0]).classed("hide-text", !1), t }

    function IA(t, e, n, i) { var r = e.orientation() === US,
            o = e.axisTextPadding(); if (e.model().tickFormat((function(t) { return n.options.categoricalFormatter ? n.options.categoricalFormatter(t) : t })), t.call(e.model()).classed("no-ticks", !1), t.selectAll("g.tick text").each((function(t, e) { var n = Ep(this),
                    i = n.text();
                Ep(n.node().parentNode).attr("tick-value", i) })), function(t, e) { e.orientation() === VS ? t.selectAppend("line.bounds").attr("y", 0).attr("x1", e.scale.range()[0]).attr("x2", e.scale.range()[1]).style("stroke", "transparent") : t.selectAppend("line.bounds").attr("x", 0).attr("y1", e.scale.range()[0]).attr("y2", e.scale.range()[1]).style("stroke", "transparent") }(t, e), TA(t, e, n), r)
            if (t.selectAll("g.tick line").attr("display", "none"), n.options.multilineFormatter && t.selectAll("g.tick text").each(W_({ margin: e.axisTextMarginHorizontal(), lineHeight: e.axisTextLineHeight(), isHorizontalText: !0 })), n.options.mobileColumnChart) { var a = e.axisScale.bandwidth() / 2 * -1;
                a -= n.options.mobileColumnOffset || 0, t.selectAll("g.tick text").classed("left-align", !0).attr("dy", a + "px") } else e.verticalAxisWrapWidth && t.selectAll("g.tick text").each(VA(e.verticalAxisWrapWidth(), e));
        else n.options.multilineFormatter ? t.selectAll("g.tick text").each(W_({ margin: e.axisTextMarginHorizontal(), lineHeight: e.axisTextLineHeight() })) : e.axisScale.step && t.selectAll("g.tick text").each(VA(e.axisScale.step() - o, e)), JS(n) && ! function(t) { return !!Gk(t.data) || -1 !== ["line", "area", "barline"].indexOf(t.data.chartType) || RS(t.el, t.data, t.options) < 50 || !!FS(t.el, t.data, t.options) }(n) && (t.classed("no-ticks", !0), t.selectAll("g.tick").each((function() { var t = Ep(this),
                e = Y_(t.attr("transform")).translateX;
            t.attr("transform", "translate(".concat(e, ", ").concat(-6, ")")) }))); return r || (AA(t), DA(t, e), 1 === EA(e) ? function(t, e, n) { var i = n || { minDensity: 38 },
                r = MA(t),
                o = t.node().getBBox().width,
                a = r.length / o;!(r.length < 20) && !(a > i.minDensity) && _A(t, 0, i) }(t) : CA(t, e)), t }

    function VA(t, e) { return function(n) { var i, r = "<N>",
                o = Ep(this),
                a = o.text().replace(/\n|<br>/g, " <N> "),
                s = e.orientation() === US,
                l = o.attr("y"),
                c = a.trim().split(/\s+/).reverse(),
                u = 0,
                f = Number(t),
                d = e.axisTextLineHeight(),
                h = e.axisTextMarginHorizontal();
            e.orientation() === US && (h = e.axisTextMarginVertical()); var g = o.text(null).append("tspan").attr("x", 0).attr("y", l).attr("dy", h + "px"),
                p = !1,
                v = [];
            s && (d = e.axisTextLineHeightHorizontal()), 1 === c.length && (f = 9999); for (var m = 0; i = c.pop();) v.push(i), m++, g.text(v.join(" ")), g.classed("line-" + (u + 1)), g.attr("yval", u * d + h), (g.node().getComputedTextLength() > f && m > 1 || i === r) && (i === r && (i = ""), p = !0, v.pop(), g.text(v.join(" ").trim()), v = [i], g = o.append("tspan").attr("x", 0).attr("y", l).attr("dy", ++u * d + h + "px").attr("yval", u * d + h).text(i)); if (p && e.orientation() === US) { var y = o.node().getBoundingClientRect().height;
                o.selectAll("tspan").attr("dy", (function() { return Ep(this).attr("yval") - y / 4 + 4 + "px" })) } } }

    function UA(t, e, n, i) { IA(t, e, n),
            function(t) { var e = t.selectAll(".tick").nodes();
                e[0] && Ep(e[0]).classed("start-tick", !0), e[e.length - 1] && Ep(e[e.length - 1]).classed("end-tick", !0) }(t), SA(t, e),
            function(t, e, n) { var i = Se({ spacing: 40, threshold: 55, minWidth: 135, maxIdealTicks: 10 }, n),
                    r = t.selectAll(".tick").nodes(); if (!(e.rangeLength() / r.length > i.threshold)) { var o = function(t) { return Number(_d(t).format("YYYY")) },
                        a = r.map((function(t) { return Number(Ep(t).attr("tick-value")) })),
                        s = e.scale.domain(),
                        l = [o(s[0]), o(s[s.length - 1])],
                        c = Math.min(i.maxIdealTicks, e.rangeLength() / i.spacing),
                        u = qp(l[0], l[1], c),
                        f = a.filter((function(t) { return u.includes(t) })); if (f.length < u.length - 1 || u.length < 2 || e.rangeLength() < i.minWidth) return _A(t); var d = {};
                    r.forEach((function(t, e) { var n = Ep(t),
                            i = Number(n.attr("tick-value")); - 1 === u.indexOf(i) || d[i] ? n.classed("hide-tick", !0) : (d[i] = !0, n.classed("hide-tick", !1)), n.classed("start-tick", i === u[0]).classed("end-tick", i === u[u.length - 1]) })) } }(t, e); var r = e.orientation() === US; return gk(e.field()) || r || kA(t, e), CA(t, e), t }

    function XA(t, e, n, i) { var r = yd(e.field());
        e.model().tickFormat((function(t) { return t })), t.call(e.model()), TA(t, e, n); var o = t.selectAll("g.tick text"),
            a = Ep(o.nodes()[0]).text(),
            s = r(a)[1] % 2 == 0 ? 0 : 1; return o.each((function(t, n) { var i, o = Ep(this),
                a = o.text(),
                l = o.attr("y"),
                c = Pe(r(a), 2),
                u = c[0],
                f = c[1],
                d = u;
            i = "Q" + f, 0 !== n && e.axisScale.bandwidth() <= 25 && e.axisScale.bandwidth() > 15 ? i = n % 2 === s ? "" : i : 0 !== n && e.axisScale.bandwidth() <= 15 && (i = 1 === f ? i : ""), Ep(this.parentNode).attr("quarter", f), o.text(null), o.append("tspan").attr("x", 0).attr("y", l).attr("dy", e.axisTextMarginHorizontal() + "px").classed("line1", !0).text(i), o.append("tspan").attr("x", 0).attr("y", l).attr("dy", e.axisTextMarginHorizontal() + e.axisTextLineHeight() + "px").classed("line2", !0).text(d), "" === i && Ep(o.node().parentNode).classed("hide-tick", !0) })), _A(t), OA(t, e), DA(t, e), t }

    function qA(t, e, n, i) { var r = i || {},
            o = e.field(),
            a = wd(o),
            s = r.dateOutputFormat || n.data.chartOptions.dateOutputFormat,
            l = function(t, e, n) { return t === Qf ? function(t) { return e(t).format("YYYY") } : t === Jf ? n.data.config && n.data.config.hide_year_display ? function(t) { return e(t).format("MMM") } : function(t) { var n = e(t); return "".concat(n.format("MMM"), "//").concat(n.format("YYYY")) } : t === nd ? function(t) { var n = e(t); return "".concat(n.format("H:mm"), "//").concat(n.format("MMM D")) } : t === td ? function(t) { return e(t).format("MMM D") } : t === ed ? function(t) { var n = e(t); return "".concat(n.format("ddd"), "//").concat(n.format("MMM D")) } : t === Kf ? n.data.config && n.data.config.hide_year_display ? function(t) { return q_(e(t)) } : function(t) { var n = e(t),
                        i = q_(n); return "".concat(i, "//").concat(n.format("YYYY")) } : function(t) { return t } }(s, a, n),
            c = [],
            u = [],
            f = null;
        o.data.forEach((function(t, e) { if (t) { var n = l(t);
                n !== f && (u.push([t, e]), c.push(n), f = n) } })), e.model().ticks(0), t.call(e.model()), TA(t, e, n); var d = t.selectAll(".tick").data(u); return d.exit().remove(), d.enter().append("g").attr("class", "tick").attr("transform", (function(t) { return "translate(".concat(e.dateScale(a(t[0])), ", 0)") })).append("line").attr("stroke", "var(--text)").attr("y2", 6), t.selectAll(".tick").each((function(t, n) { var i = Ep(this);
            i.select("text").remove(); var o = c[n].split("//"),
                a = i.append("text").attr("fill", "var(--text)").attr("y", 9).attr("dy", "0.71em");
            a.append("tspan").attr("x", 0).attr("y", 9).attr("dy", e.axisTextMarginHorizontal() + "px").classed("line1", !0).text(o[0]), o[1] && !r.axisTextSingleLine && a.append("tspan").attr("x", 0).attr("y", 9).attr("dy", e.axisTextMarginHorizontal() + e.axisTextLineHeight() + "px").classed("line2", !0).text(o[1]) })), _A(t), DA(t, e), s === Kf ? (t.selectAll(".tick").each((function(t, e) { var n = Ep(this),
                i = q_(a(u[e])),
                r = Number(i.replace("Q", ""));
            n.attr("quarter", r) })), OA(t, e)) : CA(t, e), t }

    function GA(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = t.data.chartOptions || {},
            r = e ? t.x.field() : t.y.field(),
            o = 15,
            a = 9.5,
            s = 4,
            l = r.display_as,
            c = "",
            u = r.label || r.caption || i.label || "",
            f = r["label-left"] || r.unit_before || i.unitBefore || "",
            d = r["label-right"] || r.unit_after || i.unitAfter || "",
            h = "",
            g = "",
            p = e ? "middle" : "end"; if (!t.options.labelCaps) { var v = t.layout.yAxis(),
                m = G_(r);
            e && (v = t.layout.xAxis()); var y = v.selectAll("g.tick"),
                x = Ep(y.nodes()[y.nodes().length - 1]); if (x.size() && !x.node().dataset.hasExecutedLabelPlacement) { x.select("text .val").size() ? (c = x.select("text .val").text(), x.select("text .pre").size() && (h = x.select("text .pre").text()), x.select("text .post").size() && (g = x.select("text .post").text())) : c = x.select("text").text(), x.classed("hide-text", !1), l && "%" !== l && l === d && (d = ""), f = f.replace(/ /g, "&nbsp;"), d = d.replace(/ /g, "&nbsp;"); var b = ZA(t) ? 1.5 : 0,
                    $ = f + h,
                    w = u ? "&nbsp;".concat(u) : d,
                    _ = '\n    <tspan class="pre">'.concat($, '</tspan>\n    <tspan class="val" dx="').concat(-3, '">').concat(c, '</tspan>\n    <tspan class="post" dx="').concat(-3 - b, '">').concat(g).concat(w, "</tspan>\n  "); if (e) x.select("text").attr("x", 0).html(_);
                else if (m && !e) { var k = x.select("text");
                    k.html(_); var M = Number(k.attr("x")),
                        S = $.length && !(g + d).length ? 0 : 3,
                        A = 0;
                    k.select(".post").node() && (A = k.select(".post").node().getComputedTextLength() + S), k.attr("x", M + A) } else { var D = t.layout.draw().node().getBoundingClientRect(),
                        C = t.layout.extents().node().getBoundingClientRect(),
                        E = v.node().getBoundingClientRect(),
                        O = v.classed("variant-above"),
                        T = x.node().getBoundingClientRect(),
                        P = t.layout.yAxisInnerPadding(),
                        B = t.layout.xAxisInnerPadding(),
                        L = C.top - D.top,
                        z = E.right - D.left,
                        Y = T.bottom - D.top - B - a - L;
                    z -= n.noLabelPadding ? 0 : P; var F = t.layout.draw().selectAppend("g.axis-label-box");
                    $ || (z += 3), O || (Y += 5), F.attr("transform", "translate(".concat(z, ", ").concat(Y, ")")); var W = F.selectAppend("text").attr("text-anchor", p).html(_),
                        R = W.node().getBoundingClientRect().width,
                        N = e ? R / 2 : 0,
                        H = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    H.setAttribute("x", 0 - R - s - N), H.setAttribute("y", 0 - o - s / 2), H.setAttribute("width", R + s), H.setAttribute("height", o + s), F.node().insertBefore(H, W.node()) } x.node().dataset.hasExecutedLabelPlacement = !0 } } }

    function ZA(t) { return -1 !== ["terminal", "coth"].indexOf(t.data.theme) }

    function QA(t, e, n, i) { i = i || {}; var r = e.field(); if (r) { if (e.isPrimaryAxis() && n.data.chartOptions.dateOutputFormat && "line" === n.data.chartType && !i.forceBand) return qA.apply(this, arguments); if (e.isPrimaryAxis() && n.data.chartOptions.dateOutputFormat) { var o = n.data.chartOptions.dateOutputFormat,
                    a = I_; if (o !== id) return o === Qf ? (n.options.categoricalFormatter = a("YYYY"), UA.apply(this, arguments)) : qA.apply(this, arguments) } if (i.forceBand) { if (n.layout.orientation() !== US && r.taxonomy && r.taxonomy.isDate) { if (r.taxonomy.duration === jf) return XA.apply(this, arguments); if (r.taxonomy.isYears) return UA.apply(this, arguments) } return IA.apply(this, arguments) } return r.taxonomy && r.taxonomy.isDate ? r.taxonomy.duration === Hf ? WA.apply(this, arguments) : r.taxonomy.duration === If || r.taxonomy.duration === Vf ? RA.apply(this, arguments) : r.taxonomy.duration === Uf || r.taxonomy.duration === Xf ? NA.apply(this, arguments) : r.taxonomy.duration === Nf ? FA.apply(this, arguments) : r.taxonomy.duration === Rf ? YA.apply(this, arguments) : r.taxonomy.duration === Wf ? zA.apply(this, arguments) : RA.apply(this, arguments) : r.taxonomy.isContinuous ? jA.apply(this, arguments) : IA.apply(this, arguments) } }

    function KA(t, e) { Object.keys(e).forEach((function(n) { t[n] = function(i) { return void 0 === i ? e[n] : (e[n] = i, t) } })), t.val = function(e, n) { return void 0 === n ? t[e] : (t[e] = n, t) } }

    function JA(t, e) { var n = { type: "linear", orientation: US, position: IS, range: [0, 500], rangeMax: null, data: null, model: null, series: null, field: null, customField: null, customSeries: null, isPrimaryAxis: !1, tickStepVertical: 100, tickStepHorizontal: 100, tickLabelAlternate: !1, axisTextMarginHorizontal: 19, axisTextMarginVertical: 2, axisTextLineHeight: 16, axisTextPadding: 6, axisTextCenterVertical: !0, axisLabelPaddingVertical: 16, verticalTickLength: 6, leftAlignStartTick: !1, labelReducer: null, noDomainLine: !0, stackedDomain: !1, customStackedDomain: !1, customStandardFields: [], customStackedFields: [], defaultHeight: 30, lineDensityBreakpoint: 250, lineDensityMultiplier: .75, padLabelLineHeight: 16, numTicks: 1 };
        n = ke(n, t || {}), e = e || {}; var i = function t(e, i) { return e.selectAll("*").remove(), t.rangeLength() < n.lineDensityBreakpoint && (n.tickStepVertical *= n.lineDensityMultiplier, n.tickStepHorizontal *= n.lineDensityMultiplier), i.options.disableAxis || QA(e, t, i), e }; return KA(i, n), i.scale = $x(), i.axisScale = null, i.dateScale = null, i.data = function(t) { if (t) { var r = n.customField ? [n.customField] : dk(t);
                i.series(r), i.field(n.customField || e.field || n.field || hk(t, n.isPrimaryAxis)); var o = null; if (i.customStackedDomain()) { var a = xk(n.customStackedFields),
                        s = yk(n.customStackedFields, n.domainFromZero);
                    o = [Math.min(a[0], s[0]), Math.max(a[1], s[1])] } else o = i.stackedDomain() ? bk(t) : yk(i.series(), n.domainFromZero); return i.scale.domain(o).nice(), o = i.scale.domain(), i.field().numericProperties ? (null != i.field().numericProperties.scaleStart && (o[0] = i.field().numericProperties.scaleStart), null != i.field().numericProperties.scaleEnd && (o[1] = i.field().numericProperties.scaleEnd)) : (t.chartOptions && null != t.chartOptions.scaleStart && (o[0] = t.chartOptions.scaleStart), t.chartOptions && null != t.chartOptions.scaleEnd && (o[1] = t.chartOptions.scaleEnd)), i.scale.domain(o).rangeRound(n.range), i.axisScale = i.scale, i.dateScale = i.scale, i.model(GS[n.position](i.axisScale)), n.data = t, i } return n.data }, n.data && i.data(n.data), i.scaleIndex = function(t) { return i.scale(i.field()[t]) }, i.getDataAtPosition = function(t) {}, i.rangeLength = function() { return Math.abs(i.scale.range()[1] - i.scale.range()[0]) }, i }

    function tD(t) { var e = Se({ type: "band", isPrimaryAxis: !0, orientation: VS, position: HS, range: [0, 500], data: null, model: null, series: null, field: null, domain: [0, 100], padding: .3, outerPadding: 0, tickStep: 30, tickStepHorizontal: 100, tickStepVertical: 60, axisTextMarginHorizontal: 16, axisTextMarginVertical: 4, axisTextLineHeight: 18, axisTextLineHeightMobile: 14, axisTextLineHeightHorizontal: 15, axisTextPadding: 6, horizontalBarHeight: 32, horizontalBarPadding: .2, verticalAxisWrapWidth: 300, tickLabelAlternate: !1, stackedBand: !1, stackedDomain: !1, isDateAxis: !1, isContinuousAxis: !1, numTicks: 1 }, t),
            n = function t(n, i) { return n.selectAll("*").remove(), xl(i.el.node().offsetWidth, i.options) && (t.axisTextMarginHorizontal(10), t.axisTextLineHeight(e.axisTextLineHeightMobile)), i.options.disableAxis || QA(n, t, i, { forceBand: !t.isDateAxis(), disableStartEndCaps: !0 }), n }; return KA(n, e), n.scale = ax(), n.seriesScale = ax(), n.axisScale = null, n.dateScale = null, n.data = function(t) { if (t) { n.series(dk(t)), n.field(hk(t, e.isPrimaryAxis)); var i = n.field(); if (n.scale.domain(i.data).paddingInner(e.padding).paddingOuter(e.outerPadding).range(e.range), e.orientation === US) { var r = e.horizontalBarHeight * n.series().length;
                    n.stackedBand() && (r = e.horizontalBarHeight), e.range[0] = 0, e.range[1] = e.field.data.length * r, n.scale.range(e.range).padding(e.horizontalBarPadding).bandwidth(r) } return n.seriesScale.domain(Ip(n.series().length)).range([0, n.scale.bandwidth()]), n.isDateAxis() && (n.dateScale = cw().domain([i.taxonomy.dateStart, i.taxonomy.dateEnd]).range(n.range()), n.isContinuousAxis() && (n.axisScale = n.dateScale)), n.axisScale = n.axisScale || n.scale, n.model(GS[e.position](n.axisScale)), e.data = t, n } return e.data }, e.data && n.data(e.data), n.scaleIndex = function(t) { return n.scale(n.field()[t]) }, n.getDataAtPosition = function(t) { var e = eD(n.scale, t),
                i = [],
                r = { index: 0 }; return n.series().length > 1 && (r = eD(n.seriesScale, e.position)), -1 === e.index || void 0 === n.data().fields[r.index + 1] ? null : (n.series().forEach((function(t) { i.push(t.data[e.index]) })), { dataIndex: e.index, seriesIndex: r.index, data: i }) }, n.getPositionFromIndex = function(t, e) { var i, r = t,
                o = 0; return 1 === n.series().length && (e = !0), t.length && (r = t[0], o = t[1] || 0), i = n.scale(n.field().data[r]), e ? i += .5 * n.scale.bandwidth() : (i += n.seriesScale(o), i += .5 * n.seriesScale.bandwidth()), i / n.rangeLength() }, n.rangeLength = function() { return Math.abs(n.scale.range()[1] - n.scale.range()[0]) }, n }

    function eD(t, e) { var n = t.step() * t.paddingOuter(),
            i = e * Math.abs(t.range()[1] - t.range()[0]);
        i -= n; var r = Math.floor(i / t.step()),
            o = t.domain()[r],
            a = i - t(o) + n; return a > t.bandwidth() ? { index: -1, position: 0 } : { index: r, position: a / t.bandwidth() } }

    function nD(t) { var e = Se({ type: "date", isPrimaryAxis: !0, orientation: VS, position: HS, data: null, model: null, field: null, series: null, range: [0, 500], domain: [0, 100], padding: 0, tickStep: 30, tickStepHorizontal: 80, axisTextMarginHorizontal: 16, axisTextLineHeight: 18, axisTextPadding: 6, tickLabelAlternate: !1, numTicks: 1 }, t),
            n = function t(e, n) { return e.selectAll("*").remove(), xl(n.el.offsetWidth, n.options) && (t.axisTextMarginHorizontal(10), t.axisTextLineHeight(14)), n.options.disableAxis || QA(e, t, n), e }; return KA(n, e), n.scale = lx(), n.axisScale = null, n.dateScale = null, n.data = function(t) { if (t) { n.series(dk(t)), n.field(hk(t, e.isPrimaryAxis)); var i = n.field();
                n.scale.domain(i.data).range(n.range()); var r = i.taxonomy.isContinuous || i.taxonomy.isYears; if (i.taxonomy && i.taxonomy.isDate && r) { var o = [i.taxonomy.dateStart, i.taxonomy.dateEnd],
                        a = uw().domain(o).range(n.range());
                    t.config.forceDateScale && n.scale.domain(o), n.scale = a } return n.axisScale = n.scale, n.dateScale = n.scale, n.model(GS[e.position](n.axisScale)), e.data = t, n } return e.data }, n.scaleIndex = function(t) { return n.scale(n.field()[t]) }, n.getDataAtPosition = function(e) { var i = [],
                r = e * n.rangeLength(),
                o = $d(n.field(), t.forceCategorical),
                a = 0,
                s = 9999999; return n.field().data.forEach((function(t, e) { var i = o(t);
                Math.abs(n.scale(i) - r) < s && (s = Math.abs(n.scale(i) - r), a = e) })), n.series().forEach((function(t) { i.push(t.data[a]) })), { dataIndex: a, data: i } }, n.getPositionFromIndex = function(t) { var i = bd(e.data, e.isPrimaryAxis); return n.scale(i(t)) / n.rangeLength() }, n.rangeLength = function() { return Math.abs(n.scale.range()[1] - n.scale.range()[0]) }, n }

    function iD(t, e) { var n = { primaryAxis: JA(), secondaryAxis: JA(), orientation: VS, secondaryOrientation: US, xAxisPosition: HS, yAxisPosition: IS, yAxisPadding: 8, yAxisInnerPadding: 10, yAxisInnerPaddingLeft: 0, yAxisInnerPaddingRight: 0, yAxisTickWidth: 0, xAxisInnerPadding: 0, xAxisMinHeight: 30, yAxisForceZeroWidth: !1, xAxisForceZeroWidth: !1, xAxisExtendRight: 0, yAxisMaxWidth: "55%", width: 0, outerWidth: 0, height: 0, minHeight: null, minHeightHorizontal: 240, minHeightVertical: 0, outerHeight: 0, legend: null, xAxis: null, yAxis: null, container: null, svg: null, g: null, draw: null, extents: null, fitToContainer: !1, aspectDrivenHeight: !0, aspectRatio: "5:2", maxAspectHeight: 620, maxAspectRatioForTerminal: 1, isMobile: !1, isMedium: !1, isLarge: !0, chartFrameMarginWidth: 30, verticalAxisShift: 5, padding: 0, verticalBandHeight: 80, expectedFrameHeight: 160, margin: { top: 10, right: 0, bottom: 0, left: 0 }, padBottom: 8, fixedHeightSizing: !1, fixedHeight: 385 };
        n = ke(n, t); var i = [],
            r = function t(e, i) { var r = e,
                    o = t.margin(),
                    a = r.node().offsetWidth,
                    s = a,
                    l = s + n.chartFrameMarginWidth,
                    c = r.node().offsetHeight,
                    u = c,
                    f = t.primaryAxis(),
                    d = t.secondaryAxis(); if (i.layout = t, t.aspectDrivenHeight()) { var h = tA(i.data, t.aspectRatio(), n, i.options),
                        g = 0;
                    i.options.ratioHeightOffset && (g = n.expectedFrameHeight), c = Math.min(t.maxAspectHeight(), Math.round(t.heightOrMin(a / h - g))) } if (t.fixedHeightSizing() || t.fitToContainer()) { var p = t.fitToContainer() ? window.innerHeight : t.fixedHeight(),
                        v = r.node(),
                        m = Ep(v.parentNode),
                        y = m.select(".header").node(),
                        x = m.select(".legend").node(),
                        b = m.select(".footer").node(),
                        $ = function(t) { return eA(t, "padding-top", "padding-bottom").map((function(t) { return Number(t.replace("px", "")) })).reduce((function(t, e) { return t + e })) }(m.node());
                    t.xAxisMinHeight(0), y.offsetHeight && ($ += y.offsetHeight + nA(y)), $ += x.offsetHeight + nA(x), v.offsetTop && ($ = Math.max($, v.offsetTop)), b.offsetHeight && ($ += b.offsetHeight + nA(b)), c = Math.round(p - $), r.style("height", c + "px") } t.orientation() === US && (f = t.secondaryAxis(), d = t.primaryAxis(), c = t.verticalBandHeight() * i.data.data.length, c += o.top + o.bottom, c = Math.round(c)); var w = i.options.mobileBreakpoint || yl;
                l <= (i.options.largeBreakpoint || ml) && l > w ? t.isLarge(!1).isMedium(!0) : l <= w && t.isLarge(!1).isMobile(!0), c = t.heightOrMin(c); var _ = r.selectAppend("svg").style("width", a + "px").style("height", c + "px"),
                    k = _.selectAppend("g.margin");
                c -= o.top + o.bottom + t.padBottom(), t.orientation() === VS && (c -= t.xAxisMinHeight()), d.orientation(US).position(t.yAxisPosition()).range([c, 0]).data(i.data); var M = k.selectAppend("g.axis.axis-y").classed("position-right", t.yAxisPosition() === IS).classed("position-left", t.yAxisPosition() !== IS).call(d, i),
                    S = M.node().getBoundingClientRect().width;
                t.yAxisForceZeroWidth() && (S = 0), t.yAxisPosition() === IS ? (o.right = Math.max(o.right, Math.ceil(S + t.yAxisPadding())), s -= o.right + o.left, M.attr("transform", "translate(" + s + ", 0)")) : (o.left = Math.max(o.left, Math.ceil(S)), s -= o.right + o.left), t.orientation() === US && (u = c = t.heightOrMin(d.rangeLength()), _.style("width", a + "px").style("height", Math.round(c + o.top + o.bottom + t.padBottom()) + "px"), t.yAxisPosition() === jS && M.attr("transform", "translate(".concat(n.verticalAxisShift, ", 0)"))), k.attr("transform", "translate(" + [o.left, o.top] + ")").attr("data-transform-x", o.left).attr("data-transform-y", o.top), a = s - 2 * t.yAxisInnerPadding(), f.orientation(VS).position(t.xAxisPosition()).range([0, a - t.xAxisExtendRight()]).data(i.data), c = Math.round(c); var A = k.selectAppend("g.axis.axis-x").attr("transform", "translate(".concat(t.yAxisInnerPadding(), ", ").concat(c, ")")).call(f, i),
                    D = A.node().getBoundingClientRect().height;
                t.orientation() === VS && D > t.xAxisMinHeight() && (c = Math.round(c - (D - t.xAxisMinHeight())), A.attr("transform", "translate(".concat(t.yAxisInnerPadding(), ", ").concat(c, ")")), d.range([c, 0]).data(i.data), M.call(d, i)), t.orientation() === US && (d.range([0, c]), A.attr("transform", "translate(".concat(t.yAxisInnerPadding(), ", ").concat(c, ")")).classed("axis-secondary", !0)); var C = k.selectAppend("g.draw-container").attr("transform", "translate(".concat(t.yAxisInnerPadding(), ", 0)")),
                    E = C.selectAppend("rect.extents").attr("x", 0).attr("y", 0).attr("width", f.rangeLength()).attr("height", d.rangeLength()); return t.g(k), t.draw(C), t.extents(E), t.container(r), t.xAxis(A), t.yAxis(M), t.svg(_), t.margin(o), t.width(a), t.outerWidth(s), t.height(c), t.outerHeight(u), i.y = d, i.x = f, i.g = k, t.emitPostLayout(e, i), e }; return r.update = function() {}, r.overflowScale = function() { var t = r.svg().node().getBoundingClientRect(),
                e = r.g().node().getBBox(),
                n = r.margin(),
                i = Math.max(t.height, e.height),
                o = Math.max(n.top, -1 * e.y),
                a = 0;
            e.x < 0 && (a += -1 * e.x); var s = "translate(".concat(a, ", ").concat(o, ")"); if (e.width > t.width) { var l = t.width / e.width;
                s = "translate(".concat(a, ", ").concat(o, ") scale(").concat(l, ")") } r.svg().style("height", "".concat(i, "px")), r.g().style("transform-origin", "top left").style("-webkit-transform-origin", "top left").attr("transform", s).style("transform", s).style("-webkit-transform", s) }, r.getMinHeight = function() { return r.fixedHeightSizing() || r.fitToContainer() ? 0 : null !== r.minHeight() ? r.minHeight() : r.orientation() === VS ? r.minHeightHorizontal() : r.minHeightVertical() }, r.heightOrMin = function(t) { return Math.round(Math.max(r.getMinHeight(), t)) }, r.addPostLayoutHandler = function(t) { i.push(t) }, r.emitPostLayout = function(t, e) { i.forEach((function(n) { n(t, e, r) })) }, KA(r, n), r }

    function rD(t) { var e = Se({ orientation: XS, rangeStyle: "existingValues", ranges: [], isColumnType: !1 }, t); return function(t, n) { var i = e.orientation === XS,
                r = i ? n.x : n.y,
                o = i ? n.y : n.x,
                a = e.isColumnType,
                s = xd(n.data, !0, a),
                l = t.selectAll(".range-highlight").data(e.ranges); return l.exit().remove(), l.enter().append("rect").attr("class", "range-highlight").merge(l).attr("x", (function(t, n) { return "percentage" === e.rangeStyle ? r.rangeLength() * Number(t.from / 100) : r.scale(s(t.from)) })).attr("y", (function(t) { return o.range()[1] })).attr("width", (function(t, n) { return "percentage" === e.rangeStyle ? Math.max(r.rangeLength() * (Number(t.to / 100) - Number(t.from / 100)), 2) : Math.max(r.scale(s(t.to)) - r.scale(s(t.from)), 2) })).attr("height", (function(t) { return o.range()[0] })), t } }

    function oD(t) { var e = Se({ orientation: XS, thresholds: [], thresholdColor: null, thresholdBackgroundColor: null, disableThresholdLabelShadow: null }, t),
            n = e.thresholds.filter((function(t) { return "singleThreshold" === t.type || "angledThreshold" === t.type })); return function(t, i) { var r = e.orientation === XS,
                o = r ? i.x : i.y,
                a = r ? i.y : i.x,
                s = i.layout.yAxisInnerPadding(),
                l = t.selectAll(".threshold-line-background").data(n),
                c = t.selectAll(".threshold-line").data(n),
                u = Yw().x((function(t, e) { return t[0] })).y((function(t) { return t[1] }));
            l.exit().remove(), c.exit().remove(), l.enter().append("path").attr("class", "threshold-line-background").merge(l).style("stroke", e.thresholdBackgroundColor).attr("d", (function(t) { var e = t.start,
                    n = t.end,
                    i = t.type,
                    r = Number(e),
                    l = Number("singleThreshold" === i ? e : n),
                    c = [
                        [o.range()[0] - s, a.scale(r)],
                        [o.range()[1] + s, a.scale(l)]
                    ]; return u(c) })), c.enter().append("path").attr("class", "threshold-line").merge(c).style("stroke", e.thresholdColor).attr("d", (function(t) { var e = t.start,
                    n = t.end,
                    i = t.type,
                    r = Number(e),
                    l = Number("singleThreshold" === i ? e : n),
                    c = [
                        [o.range()[0] - s, a.scale(r)],
                        [o.range()[1] + s, a.scale(l)]
                    ]; return u(c) })); var f = t.selectAll(".threshold-label").data(n); return f.exit().remove(), f.enter().append("text").classed("threshold-label", !0).classed("disable-shadow", e.disableThresholdLabelShadow).text((function(t) { return t.label })).style("fill", e.thresholdColor).attr("text-anchor", (function(t) { return "above-end" === t.labelOrientation || "below-end" === t.labelOrientation ? "end" : "start" })).attr("x", (function(t) { return "above-end" === t.labelOrientation || "below-end" === t.labelOrientation ? o.range()[1] : o.range()[0] - s })).attr("y", (function(t) { var e = t.start,
                    n = t.end,
                    i = t.type,
                    r = t.labelOrientation,
                    o = Number(e),
                    s = Number("singleThreshold" === i ? e : n); return "below-start" === r ? a.scale(o) + 5 + 10 : "above-end" === r ? a.scale(s) - 5 : "below-end" === r ? a.scale(s) + 5 + 10 : a.scale(o) - 5 })), t } } var aD, sD, lD, cD = o.Promise,
        uD = function(t, e, n) { for (var i in e) it(t, i, e[i], n); return t },
        fD = function(t, e, n) { if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation"); return t },
        dD = /(iphone|ipod|ipad).*applewebkit/i.test(mn),
        hD = o.location,
        gD = o.setImmediate,
        pD = o.clearImmediate,
        vD = o.process,
        mD = o.MessageChannel,
        yD = o.Dispatch,
        xD = 0,
        bD = {},
        $D = "onreadystatechange",
        wD = function(t) { if (bD.hasOwnProperty(t)) { var e = bD[t];
                delete bD[t], e() } },
        _D = function(t) { return function() { wD(t) } },
        kD = function(t) { wD(t.data) },
        MD = function(t) { o.postMessage(t + "", hD.protocol + "//" + hD.host) };
    gD && pD || (gD = function(t) { for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]); return bD[++xD] = function() {
            ("function" == typeof t ? t : Function(t)).apply(void 0, e) }, aD(xD), xD }, pD = function(t) { delete bD[t] }, _r ? aD = function(t) { vD.nextTick(_D(t)) } : yD && yD.now ? aD = function(t) { yD.now(_D(t)) } : mD && !dD ? (lD = (sD = new mD).port2, sD.port1.onmessage = kD, aD = Lt(lD.postMessage, lD, 1)) : o.addEventListener && "function" == typeof postMessage && !o.importScripts && hD && "file:" !== hD.protocol && !a(MD) ? (aD = MD, o.addEventListener("message", kD, !1)) : aD = $D in M("script") ? function(t) { je.appendChild(M("script")).onreadystatechange = function() { je.removeChild(this), wD(t) } } : function(t) { setTimeout(_D(t), 0) }); var SD, AD, DD, CD, ED, OD, TD, PD, BD = { set: gD, clear: pD },
        LD = D.f,
        zD = BD.set,
        YD = o.MutationObserver || o.WebKitMutationObserver,
        FD = o.document,
        WD = o.process,
        RD = o.Promise,
        ND = LD(o, "queueMicrotask"),
        HD = ND && ND.value;
    HD || (SD = function() { var t, e; for (_r && (t = WD.domain) && t.exit(); AD;) { e = AD.fn, AD = AD.next; try { e() } catch (t) { throw AD ? CD() : DD = void 0, t } } DD = void 0, t && t.enter() }, !dD && !_r && YD && FD ? (ED = !0, OD = FD.createTextNode(""), new YD(SD).observe(OD, { characterData: !0 }), CD = function() { OD.data = ED = !ED }) : RD && RD.resolve ? (TD = RD.resolve(void 0), PD = TD.then, CD = function() { PD.call(TD, SD) }) : CD = _r ? function() { WD.nextTick(SD) } : function() { zD.call(o, SD) }); var jD, ID, VD, UD, XD = HD || function(t) { var e = { fn: t, next: void 0 };
            DD && (DD.next = e), AD || (AD = e, CD()), DD = e },
        qD = function(t) { var e, n;
            this.promise = new t((function(t, i) { if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = i })), this.resolve = Bt(e), this.reject = Bt(n) },
        GD = { f: function(t) { return new qD(t) } },
        ZD = function(t, e) { if (C(t), x(e) && e.constructor === t) return e; var n = GD.f(t); return (0, n.resolve)(e), n.promise },
        QD = function(t) { try { return { error: !1, value: t() } } catch (t) { return { error: !0, value: t } } },
        KD = BD.set,
        JD = jt("species"),
        tC = "Promise",
        eC = nt.get,
        nC = nt.set,
        iC = nt.getterFor(tC),
        rC = cD,
        oC = o.TypeError,
        aC = o.document,
        sC = o.process,
        lC = at("fetch"),
        cC = GD.f,
        uC = cC,
        fC = !!(aC && aC.createEvent && o.dispatchEvent),
        dC = "function" == typeof PromiseRejectionEvent,
        hC = "unhandledrejection",
        gC = Ot(tC, (function() { if (!(R(rC) !== String(rC))) { if (66 === $n) return !0; if (!_r && !dC) return !0 } if ($n >= 51 && /native code/.test(rC)) return !1; var t = rC.resolve(1),
                e = function(t) { t((function() {}), (function() {})) }; return (t.constructor = {})[JD] = e, !(t.then((function() {})) instanceof e) })),
        pC = gC || !Vn((function(t) { rC.all(t).catch((function() {})) })),
        vC = function(t) { var e; return !(!x(t) || "function" != typeof(e = t.then)) && e },
        mC = function(t, e) { if (!t.notified) { t.notified = !0; var n = t.reactions;
                XD((function() { for (var i = t.value, r = 1 == t.state, o = 0; n.length > o;) { var a, s, l, c = n[o++],
                            u = r ? c.ok : c.fail,
                            f = c.resolve,
                            d = c.reject,
                            h = c.domain; try { u ? (r || (2 === t.rejection && $C(t), t.rejection = 1), !0 === u ? a = i : (h && h.enter(), a = u(i), h && (h.exit(), l = !0)), a === c.promise ? d(oC("Promise-chain cycle")) : (s = vC(a)) ? s.call(a, f, d) : f(a)) : d(i) } catch (t) { h && !l && h.exit(), d(t) } } t.reactions = [], t.notified = !1, e && !t.rejection && xC(t) })) } },
        yC = function(t, e, n) { var i, r;
            fC ? ((i = aC.createEvent("Event")).promise = e, i.reason = n, i.initEvent(t, !1, !0), o.dispatchEvent(i)) : i = { promise: e, reason: n }, !dC && (r = o["on" + t]) ? r(i) : t === hC && function(t, e) { var n = o.console;
                n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e)) }("Unhandled promise rejection", n) },
        xC = function(t) { KD.call(o, (function() { var e, n = t.facade,
                    i = t.value; if (bC(t) && (e = QD((function() { _r ? sC.emit("unhandledRejection", i, n) : yC(hC, n, i) })), t.rejection = _r || bC(t) ? 2 : 1, e.error)) throw e.value })) },
        bC = function(t) { return 1 !== t.rejection && !t.parent },
        $C = function(t) { KD.call(o, (function() { var e = t.facade;
                _r ? sC.emit("rejectionHandled", e) : yC("rejectionhandled", e, t.value) })) },
        wC = function(t, e, n) { return function(i) { t(e, i, n) } },
        _C = function(t, e, n) { t.done || (t.done = !0, n && (t = n), t.value = e, t.state = 2, mC(t, !0)) },
        kC = function(t, e, n) { if (!t.done) { t.done = !0, n && (t = n); try { if (t.facade === e) throw oC("Promise can't be resolved itself"); var i = vC(e);
                    i ? XD((function() { var n = { done: !1 }; try { i.call(e, wC(kC, n, t), wC(_C, n, t)) } catch (e) { _C(n, e, t) } })) : (t.value = e, t.state = 1, mC(t, !1)) } catch (e) { _C({ done: !1 }, e, t) } } };
    gC && (rC = function(t) { fD(this, rC, tC), Bt(t), jD.call(this); var e = eC(this); try { t(wC(kC, e), wC(_C, e)) } catch (t) { _C(e, t) } }, (jD = function(t) { nC(this, { type: tC, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0 }) }).prototype = uD(rC.prototype, { then: function(t, e) { var n = iC(this),
                i = cC(ar(this, rC)); return i.ok = "function" != typeof t || t, i.fail = "function" == typeof e && e, i.domain = _r ? sC.domain : void 0, n.parent = !0, n.reactions.push(i), 0 != n.state && mC(n, !1), i.promise }, catch: function(t) { return this.then(void 0, t) } }), ID = function() { var t = new jD,
            e = eC(t);
        this.promise = t, this.resolve = wC(kC, e), this.reject = wC(_C, e) }, GD.f = cC = function(t) { return t === rC || t === VD ? new ID(t) : uC(t) }, "function" == typeof cD && (UD = cD.prototype.then, it(cD.prototype, "then", (function(t, e) { var n = this; return new rC((function(t, e) { UD.call(n, t, e) })).then(t, e) }), { unsafe: !0 }), "function" == typeof lC && Pt({ global: !0, enumerable: !0, forced: !0 }, { fetch: function(t) { return ZD(rC, lC.apply(o, arguments)) } }))), Pt({ global: !0, wrap: !0, forced: gC }, { Promise: rC }), Yi(rC, tC, !1), ho(tC), VD = at(tC), Pt({ target: tC, stat: !0, forced: gC }, { reject: function(t) { var e = cC(this); return e.reject.call(void 0, t), e.promise } }), Pt({ target: tC, stat: !0, forced: gC }, { resolve: function(t) { return ZD(this, t) } }), Pt({ target: tC, stat: !0, forced: pC }, { all: function(t) { var e = this,
                n = cC(e),
                i = n.resolve,
                r = n.reject,
                o = QD((function() { var n = Bt(e.resolve),
                        o = [],
                        a = 0,
                        s = 1;
                    pf(t, (function(t) { var l = a++,
                            c = !1;
                        o.push(void 0), s++, n.call(e, t).then((function(t) { c || (c = !0, o[l] = t, --s || i(o)) }), r) })), --s || i(o) })); return o.error && r(o.value), n.promise }, race: function(t) { var e = this,
                n = cC(e),
                i = n.reject,
                r = QD((function() { var r = Bt(e.resolve);
                    pf(t, (function(t) { r.call(e, t).then(n.resolve, i) })) })); return r.error && i(r.value), n.promise } }); var MC = jt("iterator"),
        SC = jt("toStringTag"),
        AC = cf.values; for (var DC in pe) { var CC = o[DC],
            EC = CC && CC.prototype; if (EC) { if (EC[MC] !== AC) try { T(EC, MC, AC) } catch (t) { EC[MC] = AC }
            if (EC[SC] || T(EC, SC, DC), pe[DC])
                for (var OC in cf)
                    if (EC[OC] !== cf[OC]) try { T(EC, OC, cf[OC]) } catch (t) { EC[OC] = cf[OC] } } }

    function TC(t) { return function(e, n, i) { var r = t(e, n, i),
                o = r.map((function(t) { return t.end() })),
                a = Promise.allSettled(o); return { startTime: aM(), transitions: r, execution: a, stop: function() { r.forEach((function(t) { t.selection().interrupt() })) } } } }

    function PC(t, e, n) { t.selectAll("g.annotations > *").style("opacity", 0) }

    function BC(t, e, n) { var i = e.data.annotations,
            r = n.delay,
            o = n.duration,
            a = n.annotationDelay,
            s = void 0 === a ? 300 : a,
            l = n.annotationDuration,
            c = void 0 === l ? 500 : l,
            u = "vertical" === e.layout.orientation(),
            f = []; if (i) return i.forEach((function(n, i) { var a = Mk(e.data.fields[0], n.categorical_value),
                l = u ? e.y.getPositionFromIndex(a, !0) : e.x.getPositionFromIndex(a, !0),
                d = r + s + o * l,
                h = t.selectAll(".annotation-".concat(i)).transition().duration(c).delay(d).style("opacity", 1);
            f.push(h) })), f }

    function LC(t, e, n) { t.selectAll("g.label-container > text").style("opacity", 0) }

    function zC(t, e, n) { var i = e.data,
            r = n.delay,
            o = n.duration,
            a = n.annotationDelay,
            s = void 0 === a ? 300 : a,
            l = n.annotationDuration,
            c = void 0 === l ? 500 : l,
            u = i.data.length,
            f = []; return t.selectAll("g.label-container > text").each((function(t, e) { var n = Ep(this),
                i = r + s + o * (e / u),
                a = n.transition().duration(c).delay(i).style("opacity", 1);
            f.push(a) })), f }

    function YC(t, e, n) { var i, r, o = n.transition,
            a = void 0 === o ? {} : o,
            s = a.type,
            l = void 0 === s ? "default" : s; return "synced" === l ? Se(Se({}, (i = FC(), r = WC("synced"), { normalizeSpeed: !1, stageHandler: i, playHandler: r })), a) : "chained" === l ? Se(Se({}, function(t, e, n) { var i = FC(),
                r = WC("chained"); return { duration: 2e3, normalizeSpeed: !1, stageHandler: i, playHandler: r, interruptHandler: function() { return null } } }()), a) : "none" !== l ? Se(Se({}, function(t, e, n) { var i = FC(),
                r = WC("staggered"); return { duration: 3e3, normalizeSpeed: !1, stageHandler: i, playHandler: r, interruptHandler: function() { return null } } }()), a) : void 0 }

    function FC(t) { return function(t, e, n) { var i = t.selectAll("rect.column").nodes(),
                r = "vertical" === e.layout.orientation(),
                o = "y",
                a = "height";
            r && (o = "x", a = "width"), i.forEach((function(t, n) { var i = Ep(t),
                    s = Number(i.attr(a)),
                    l = Number(i.attr(o)),
                    c = r ? e.x.scale(0) : e.y.scale(0);
                i.attr(a, 0).attr(o, c).attr("data-transition-".concat(o), l).attr("data-transition-".concat(a), s) })), PC(t), LC(t) } }

    function WC(t) { return TC((function(e, n, i) { var r = n.data,
                o = i.delay,
                a = i.duration,
                s = i.normalizeSpeed,
                l = i.barDuration,
                c = void 0 === l ? 800 : l,
                u = e.selectAll("rect.column").nodes(),
                f = a - c,
                d = "staggered" === t ? f / (r.data.length * (r.fields.length - 1)) : f,
                h = n.y.rangeLength(),
                g = [],
                p = "y",
                v = "height"; return "vertical" === n.layout.orientation() && (p = "x", v = "width"), u.forEach((function(t, e) { var n = Ep(t),
                    i = Number(n.attr("data-transition-".concat(v))),
                    r = Number(n.attr("data-transition-".concat(p))),
                    a = s ? i / h : 1,
                    l = n.transition().duration(d + c * a).delay(o + e * d).attr(v, i).attr(p, r);
                g.push(l) })), g.concat(BC(e, n, i)), g.concat(zC(e, n, i)), g })) } var RC = ["hbar", "horizontalColumn", "horizontalColumnStacked", "horizontalBar", "stackedHbar", "horizontalDumbbell"];

    function NC(t, e, n) { var i = { fontSizeRatio: 1, columnWidthBreakpointMin: 30, columnWidthBreakpointMax: 1250, textLengthBreakpoint: 20, columnWidthLongTextBreakpoint: 80, smallWidthBreakpoint: 500, mobileWidthBreakpoint: 380, mobileColumnOffset: 6, tooltipOffsetX: 7, tooltipOffsetY: 7, tooltipLineHeight: 30, tooltipMaxWidth: 160, tooltipAnchorSize: 4, dateAxisInnerPadding: 15, maxLinesBeforeCondense: 15, maxLinesBeforeCondenseSingle: 15, columnLabelOffset: 8, preventCondensedAnnotations: !0, layoutManager: { yAxisInnerPadding: 0, xAxisExtendRight: 7, margin: { top: 10, right: 0, bottom: 0, left: 0 } }, bandAxis: { horizontalBarHeight: 32, horizontalBarHeightCondensed: 24, horizontalBarPadding: .2, horizontalBarPaddingCondensed: .12, horizontalBarHeightMin: 10, axisTextLineHeight: 18, axisTextLineHeightHorizontal: 18, minHeightHorizontal: 0 }, dateAxis: {}, linearAxis: {}, transition: Se({}, YC(0, 0, n)) },
            r = ju(i, n || {}),
            o = Ep(t).classed("toaster-chart-column", !0).classed("bar-colors", !0).classed("quad-colors", Ik(e)).classed("transition-stage", sM(r));
        jC(e, r); var a = rA(o, e, r),
            s = VS,
            l = IS,
            c = HC(o, e, a.options),
            u = !1,
            f = !1; if (c || (u = FS(o, e, a.options), f = WS(o, e, a.options)), c) { e.config && e.config.sort_by_value && !Vk(e) && (qk(e) ? $k(e, { direction: "ascending" }) : $k(e)), s = US, l = jS, a.options.labelCaps = !0, a.options.tableLabels = !1, a.options.disableGrid = !0, a.options.layoutManager.margin.top = 0, a.options.layoutManager.margin.bottom = 20, a.options.layoutManager.margin.right = 30, a.options.layoutManager.margin.left = 0, a.options.layoutManager.yAxisInnerPadding = 0, a.options.layoutManager.verticalAxisShift = 0; var d = dk(e),
                h = function(t, e) { var n = "5:2";
                    t.data.chartOptions && t.data.chartOptions.aspectRatio && (n = t.data.chartOptions.aspectRatio); "string" == typeof n && (n = n.split(":")[0] / n.split(":")[1]);
                    t.options.ratioHeightOffset && (n += 1); return Math.max(.6, Math.min(3, 2.3 / n)) }(a),
                g = a.options.layoutManager.minHeight,
                p = 0; if (g && (p = g / NS(a.data)), a.options.mobileColumnChart) a.options.bandAxis.horizontalBarHeight = 30 + 25 / d.length, a.options.bandAxis.horizontalBarPadding = .2 + .35 / d.length, a.options.layoutManager.yAxisInnerPadding = 0, a.options.layoutManager.yAxisForceZeroWidth = !0, a.options.layoutManager.verticalAxisShift = 8;
            else { var v = o.node().offsetWidth;
                a.options.bandAxis.verticalAxisWrapWidth = v / 2, a.options.bandAxis.horizontalBarHeight *= h, a.options.screenshotMode && (a.options.bandAxis.horizontalBarHeight = Math.max(p, a.options.bandAxis.horizontalBarHeight)), xl(v, a.options) && (a.options.bandAxis.axisTextLineHeightHorizontal = 12) }!a.options.mobileColumnChart && (d.length > 1 && e.data.length * d.length > a.options.maxLinesBeforeCondense || e.data.length > a.options.maxLinesBeforeCondenseSingle) && (a.options.condensedView = !0, a.options.labelCaps = !1, a.options.disableGrid = !1, a.options.bandAxis.horizontalBarHeight = Math.max(p, a.options.bandAxis.horizontalBarHeightMin, a.options.bandAxis.horizontalBarHeightCondensed * h / d.length), a.options.bandAxis.horizontalBarPadding = a.options.bandAxis.horizontalBarPaddingCondensed), a.options.labelCaps && !a.options.mobileColumnChart ? a.options.layoutManager.yAxisInnerPadding = 8 : a.options.labelCaps || a.options.mobileColumnChart || (a.options.layoutManager.verticalAxisShift = -5), a.options.labelCaps && Gk(e) && (a.options.labelCaps = !1, a.options.tableLabels = !0, a.options.layoutManager.margin.right = 60, a.options.bandAxis.horizontalBarPadding = .4, a.options.bandAxis.horizontalBarHeight *= .8), a.options.labelCaps && qk(e) && (l = IS) } o.classed("vertical-flow", c), o.attr("toaster-flow") && o.attr("toaster-flow") !== s && o.select(".chart").selectAll("*").remove(), o.attr("toaster-flow", s); var m = Se({ isPrimaryAxis: !0, isDateAxis: u, isContinuousAxis: f }, a.options.bandAxis),
            y = Se({ isPrimaryAxis: !1, domainFromZero: !0 }, a.options.linearAxis),
            x = Se({ primaryAxis: tD(m), secondaryAxis: JA(y), orientation: s, yAxisPosition: l }, a.options.layoutManager);
        u && (x.yAxisInnerPadding = a.options.dateAxisInnerPadding); var b = iD(x, a.options),
            $ = o.selectAppend("div.chart");
        $.selectAll("*").remove(), $.call(b, a); var w = b.draw().classed("column", !0),
            _ = a.x.rangeLength() + b.xAxisExtendRight() + 2 * b.yAxisInnerPadding(),
            k = c && !a.options.disableGrid || ZS(a); if (o.classed("no-grid", !k).classed("no-domain", !JS(a)).classed("no-axis", a.options.disableGrid), c ? (_ = a.y.rangeLength() + 2 * b.xAxisInnerPadding(), w.selectAppend("g.grid").call($A({ length: _, orientation: qS }), a)) : w.selectAppend("g.grid").call($A({ length: _ }), a), !c && e.config.highlightRanges) { var M = e.config.highlightRanges,
                S = M.ranges,
                A = M.rangeStyle;
            w.selectAppend("g.highlight-ranges").call(rD({ ranges: S, rangeStyle: A, isColumnType: !0 }), a) } return w.call(iA({ xScale: a.x.scale, yScale: a.y.scale, orientation: s }), a), a.options.labelCaps ? function(t, e) { var n = e.x,
                i = e.y,
                r = t.selectAppend("g.label-container"),
                o = tk(K_(e.x, e, { defaultDecimals: 1 }), K_(e.x, e, { bareValue: !0, defaultDecimals: 1 }));
            r.selectAll("*").remove(), n.field().data.forEach((function(t, a) { n.series().forEach((function(t, s) { var l = e.data.data[a][0],
                        c = i.scale(l);
                    c += i.seriesScale(s); var u = e.data.data[a][1 + s],
                        f = n.scale(Fr(u)),
                        d = n.series().length,
                        h = xA(i.scale.bandwidth(), d),
                        g = r.append("text").classed("column-label", !0).classed("label-" + a, !0).text(o(u)).attr("x", f + e.options.columnLabelOffset).attr("y", c + i.scale.bandwidth() / (2 * d) + h);
                    u < 0 && g.attr("x", f - e.options.columnLabelOffset).style("text-anchor", "end") })) })) }(w, a) : a.options.tableLabels && function(t, e) { var n = e.x,
                i = e.y,
                r = t.selectAppend("g.label-container"),
                o = tk(K_(e.x, e, { defaultDecimals: 1 }), K_(e.x, e, { bareValue: !0, defaultDecimals: 1 }));
            r.selectAll("*").remove(), n.field().data.forEach((function(t, a) { n.series().forEach((function(t, s) { var l = e.data.data[a][0],
                        c = i.scale(l);
                    c += i.seriesScale(s); var u = e.data.data[a][1 + s],
                        f = e.layout.width(),
                        d = n.series().length,
                        h = xA(i.scale.bandwidth(), d);
                    r.append("text").classed("column-label", !0).classed("label-" + a, !0).text(o(u)).style("text-anchor", "start").attr("x", f + e.options.columnLabelOffset).attr("y", c + i.scale.bandwidth() / (2 * d) + h) })) })) }(w, a), GA(a, c), yA(w, e.annotations, a), c || e.config.thresholds && w.selectAppend("g.threshold-lines").call(oD(Se(Se({}, a.options), {}, { thresholds: e.config.thresholds })), a), $.call((function(t, e, n) { if (n.config && !e.options.disableLabels)
                if (t.selectAll(".label-bottom").remove(), void 0 === n.config.labelPrimary) { if (n.primaryAxis) { var i = n.primaryAxis.label || n.primaryAxis.caption;
                        i && t.selectAppend("div.chart-footer").append("div").classed("label-bottom", !0).text(i) } } else n.config.labelPrimary && t.selectAppend("div.chart-footer").append("div").classed("label-bottom", !0).text(n.config.labelPrimary) }), a, e), b.overflowScale(), a.options.disableTooltip || e.config.disableTooltip || aA({ chart: $, area: w, env: a }), gd(a), lM(w, [{ el: o, env: a }], r) }

    function HC(t, e, n) { var i = t.node().offsetWidth,
            r = RC.includes(e.chartType) || n.forceHorizontalColumns; if (i > n.smallWidthBreakpoint) { if (n.forceVerticalColumns) return !1; if (e.config.force_vertical_bars) return !1 } if (n.verticalBarsOnly) return !1; if (r) return r; var o = n.stackedBand,
            a = e.data.length * (e.fields.length - 1);
        o && (a = e.data.length); var s = i / a; if (a <= 2) return !0; if (e.chartOptions.isCategoricalTime) return !1; if (Vk(e)) return !1; if (s < n.columnWidthBreakpointMin || s > n.columnWidthBreakpointMax) return !0; var l = e.fields[0]; if (l.taxonomy && l.taxonomy.isDate) return !1; var c = 0; return e.fields[0].data.forEach((function(t) { null != t && null != t.length && (c = Math.max(c, t.length)) })), c > n.textLengthBreakpoint && s < n.columnWidthLongTextBreakpoint && (r = !0), i < n.smallWidthBreakpoint && (r = !0, (i < n.mobileWidthBreakpoint || c > n.textLengthBreakpoint) && !o && Xk(e) && (n.mobileColumnChart = !0)), r }

    function jC(t, e) { Bk(t, !1, e), t.chartOptions = t.chartOptions || {}, t.chartOptions.isCategorical = !0, null == t.chartOptions.isCategoricalTime && (t.chartOptions.isCategoricalTime = Vk(t)), (Uk(t) && t.data.length >= 5 || Vk(t) && t.data.length >= 12) && (t.chartOptions.isCategorical = !1), Bk(t, !0, e) }

    function IC(t) { var e = (t = t || {}).xScale,
            n = t.yScale,
            i = t.seriesOffset || 0;

        function r(r) { r.each((function(r) { var o = Ep(this).classed("simple-column-stacked", !0),
                    a = bd(r, !0, !0),
                    s = t.seriesData || dk(r),
                    l = s[0].data.map((function(t, e) { var n = {}; return r.data[e].forEach((function(t, e) { n[e - 1 - i] = t })), n })),
                    c = Jw().keys(Ip(0, s.length)).offset(t_)(l),
                    u = o.selectAll(".series").data(c);
                u.exit().remove(); var f = (u = u.enter().append("g").attr("class", (function(t, e) { return "series f series-" + (e + i) })).merge(u)).selectAll(".column").data((function(t) { return t }));
                f.exit().remove(), t.orientation === VS ? f.enter().append("rect").attr("class", "column").merge(f).attr("x", (function(t, n) { return e(a(n)) })).attr("y", (function(t, e) { return n(t[1]) })).attr("width", Math.max(1, e.bandwidth())).attr("height", (function(t) { return n(t[0]) - n(t[1]) })) : f.enter().append("rect").attr("class", "column").merge(f).attr("y", (function(t, e) { return n(a(e)) })).attr("x", (function(t, n) { return e(t[0]) })).attr("height", n.bandwidth()).attr("width", (function(t) { return e(t[1]) - e(t[0]) })) })) } return r.xScale = function(t) { return arguments.length ? (e = t, r) : e }, r.yScale = function(t) { return arguments.length ? (n = t.copy(), r) : n }, r }

    function VC(t, e, n) { var i, r, o = n.transition,
            a = void 0 === o ? {} : o; return Se(Se({}, (i = function(t, e, n) { var i = UC(t, e),
                r = "vertical" === e.layout.orientation(),
                o = r ? e.x.scale(0) : e.y.scale(0),
                a = "y",
                s = "height";
            r && (a = "x", s = "width"), i.forEach((function(t, e) { t.forEach((function(t) { var e = Ep(t),
                        n = Number(e.attr(s)),
                        i = Number(e.attr(a));!r && i >= o || r ? e.attr(s, 0).attr(a, i).attr("data-transition-".concat(a), i).attr("data-transition-".concat(s), n) : e.attr(s, 0).attr(a, i + n).attr("data-transition-".concat(a), i).attr("data-transition-".concat(s), n) })) })) }, r = TC((function(t, e, n) { var i = e.data,
                r = n.duration,
                o = n.normalizeSpeed,
                a = r / (i.data.length * (i.fields.length - 1)),
                s = r / 2,
                l = e.y.rangeLength(),
                c = [],
                u = "y",
                f = "height"; return "vertical" === e.layout.orientation() && (u = "x", f = "width"), UC(t, e).forEach((function(t, e) { var n = 0,
                    i = a * e,
                    r = t.reduce((function(t, e) { return t + Number(Ep(e).attr("data-transition-".concat(f))) }), 0),
                    d = o ? r / l : 1;
                t.forEach((function(t) { var e = Ep(t),
                        o = Number(e.attr("data-transition-".concat(f))),
                        a = Number(e.attr("data-transition-".concat(u))),
                        l = o / r * (s * d),
                        h = e.transition().ease(by).duration(l).delay(i + n).attr(f, o).attr(u, a);
                    n += l, c.push(h) })) })), c })), { duration: 2e3, normalizeSpeed: !1, stageHandler: i, playHandler: r, interruptHandler: function() { return null } })), a) }

    function UC(t, e) { var n = dk(e.data).map((function(e, n) { return t.selectAll(".series-".concat(n, " rect.column")).nodes() })); return n[0].map((function(t, e) { var i = []; return n.forEach((function(t) { i.push(t[e]) })), i })) }

    function XC(t, e, n) { var i = { columnWidthBreakpointMin: 30, columnWidthBreakpointMax: 1250, textLengthBreakpoint: 12, columnWidthLongTextBreakpoint: 110, smallWidthBreakpoint: 500, mobileWidthBreakpoint: 380, tooltipOffsetX: 7, tooltipOffsetY: 7, tooltipLineHeight: 30, tooltipMaxWidth: 160, tooltipAnchorSize: 4, dateAxisInnerPadding: 15, preventCondensedAnnotations: !0, stackedBand: !0, layoutManager: { yAxisInnerPadding: 0, xAxisExtendRight: 7, margin: { top: 10, right: 0, bottom: 0, left: 0 } }, bandAxis: { horizontalBarPadding: .2, horizontalBarPaddingCondensed: .12, horizontalBarHeight: 32, horizontalBarHeightLarge: 50, horizontalBarHeightCondensed: 24, axisTextLineHeightHorizontal: 15, axisTextLineHeight: 18, verticalAxisWrapWidth: 300 }, linearAxis: {}, transition: Se({}, VC(0, 0, n)) },
            r = ju(i, n || {}),
            o = Ep(t).classed("toaster-chart-column", !0).classed("bar-colors", !0).classed("quad-colors", Ik(e)).classed("transition-stage", sM(r));
        jC(e, r); var a = rA(o, e, r),
            s = o.node().offsetWidth,
            l = VS,
            c = IS,
            u = HC(o, e, a.options),
            f = !1,
            d = !1;
        u || (f = FS(o, e, a.options), d = WS(o, e, a.options)); var h = a.options.layoutManager.minHeight,
            g = 0;
        h && (g = h / NS(a.data, !0)), u && (e.config && e.config.sort_by_value && !Vk(e) && (qk(e) ? $k(e, { stacked: !0, direction: "ascending" }) : $k(e, { stacked: !0 })), l = US, c = jS, a.options.labelCaps = !1, a.options.disableGrid = !1, e.data.length <= 5 ? a.options.bandAxis.horizontalBarHeight = a.options.bandAxis.horizontalBarHeightLarge : e.data.length > 15 && (a.options.bandAxis.horizontalBarHeight = a.options.bandAxis.horizontalBarHeightCondensed), a.options.screenshotMode && (a.options.bandAxis.horizontalBarHeight = Math.max(g, a.options.bandAxis.horizontalBarHeight)), a.options.bandAxis.verticalAxisWrapWidth = s / 2, xl(s, a.options) && (a.options.bandAxis.axisTextLineHeightHorizontal = 12), a.options.layoutManager.margin.top = 0, a.options.layoutManager.margin.bottom = 20, a.options.layoutManager.margin.right = 30, a.options.layoutManager.margin.left = 0, a.options.layoutManager.yAxisInnerPadding = 0, a.options.layoutManager.verticalAxisShift = -5), o.classed("vertical-flow", u); var p = Se({ isPrimaryAxis: !0, stackedBand: !0, isDateAxis: f, isContinuousAxis: d }, a.options.bandAxis),
            v = Se({ isPrimaryAxis: !1, domainFromZero: !0, stackedDomain: !0 }, a.options.linearAxis),
            m = Se({ orientation: l, yAxisPosition: c, primaryAxis: tD(p), secondaryAxis: JA(v) }, a.options.layoutManager);
        f && (m.yAxisInnerPadding = a.options.dateAxisInnerPadding); var y = iD(m),
            x = o.selectAppend("div.chart");
        x.selectAll("*").remove(), x.call(y, a); var b = y.draw().classed("column", !0),
            $ = a.x.rangeLength() + y.xAxisExtendRight() + 2 * y.yAxisInnerPadding(),
            w = u && !a.options.disableGrid || ZS(a); if (o.classed("no-grid", !w).classed("no-domain", !JS(a)).classed("no-axis", a.options.disableGrid), l === VS ? b.selectAppend("g.grid").call($A({ length: $ }), a) : ($ = a.y.rangeLength() + 2 * y.xAxisInnerPadding(), b.selectAppend("g.grid").call($A({ length: $, orientation: qS }), a)), !u && e.config.highlightRanges) { var _ = e.config.highlightRanges,
                k = _.ranges,
                M = _.rangeStyle;
            b.selectAppend("g.highlight-ranges").call(rD({ ranges: k, rangeStyle: M, isColumnType: !0 }), a) } return b.call(IC({ xScale: a.x.scale, yScale: a.y.scale, orientation: l }), a), GA(a, u), yA(b, e.annotations, a), u || e.config.thresholds && b.selectAppend("g.threshold-lines").call(oD(Se(Se({}, a.options), {}, { thresholds: e.config.thresholds })), a), x.call((function(t, e, n) { if (n.config && !e.options.disableLabels)
                if (t.selectAll(".label-bottom").remove(), void 0 === n.config.labelPrimary) { if (n.primaryAxis) { var i = n.primaryAxis.label || n.primaryAxis.caption;
                        i && t.selectAppend("div.chart-footer").append("div").classed("label-bottom", !0).text(i) } } else n.config.labelPrimary && t.selectAppend("div.chart-footer").append("div").classed("label-bottom", !0).text(n.config.labelPrimary) }), a, e), y.overflowScale(), a.options.disableTooltip || e.config.disableTooltip || aA({ chart: x, area: b, env: a }), gd(a), lM(b, [{ env: a, el: o }], r) } XC.validateData = function(t) { return LS(t) }; var qC = { step: Xw, stepAfter: Gw, stepBefore: qw, smooth: Vw };

    function GC(t) { var e = t.xScale,
            n = t.yScale,
            i = t.seriesOffset || 0;

        function r(r) { r.each((function(r, o) { var a = Ep(this).classed("simple-line", !0),
                    s = bd(r, !0, t.forceCategorical),
                    l = t.seriesData || dk(r),
                    c = a.selectAppend("g.line-group"),
                    u = c.selectAll(".line").data(l);
                t.xOffset && c.attr("transform", "translate(".concat(t.xOffset, ")")); var f = Yw().x((function(t, n) { return e(s(n)) })).y((function(t, e) { return n(t) })).defined(jr);
                t.curve && qC[t.curve] && f.curve(qC[t.curve]), u.exit().remove(), u.enter().append("path").attr("class", (function(t, e) { return "line s series-" + (e + i) })).merge(u).attr("d", (function(t) { return f(t.data) })) })) } return r.xScale = function(t) { return arguments.length ? (e = t, r) : e }, r.yScale = function(t) { return arguments.length ? (n = t, r) : n }, r } var ZC = { step: Xw, stepAfter: Gw, stepBefore: qw, smooth: Vw };

    function QC(t, e, n) { n.transition || (n.transition = {}); var i, r, o = n.transition,
            a = o.type,
            s = void 0 === a ? "default" : a; return "synced" === s ? Se(Se({}, (i = KC(), r = JC("synced"), { stageHandler: i, playHandler: r })), o) : "chained" === s ? Se(Se({}, function(t, e, n) { var i = KC(),
                r = JC("chained"),
                o = function() { return null }; return { duration: 2e3 * ul(e).length, stageHandler: i, playHandler: r, interruptHandler: o } }(0, e)), o) : "none" !== s ? Se(Se({}, function(t, e, n) { var i = KC(),
                r = JC("staggered"),
                o = function() { return null },
                a = n.transition.staggerDelay,
                s = void 0 === a ? 500 : a; return { duration: 2e3 + s * ul(e).length, staggerDelay: s, stageHandler: i, playHandler: r, interruptHandler: o } }(0, e, n)), o) : void 0 }

    function KC(t) { return function(t, e, n) { t.selectAll(".line-group path").each((function() { var t = this.getTotalLength(); return Ep(this).attr("stroke-dasharray", "".concat(t, " ").concat(t)).attr("stroke-dashoffset", t), t })), PC(t) } }

    function JC(t) { return TC((function(e, n, i) { var r = i.delay,
                o = i.duration,
                a = i.staggerDelay,
                s = e.selectAll("path.line").nodes(),
                l = o; "chained" === t ? l = o / s.length : "staggered" === t && (l = o - s.length * a); var c = []; return s.forEach((function(e, n) { var i = r; "chained" === t ? i = r + n * l : "staggered" === t && (i = r + n * a); var o = Ep(e).transition().delay(i).duration(l).attr("stroke-dashoffset", 0);
                c.push(o) })), c.concat(BC(e, n, i)), c })) }

    function tE(t, e, n) { var i = { tooltipOffsetX: 7, tooltipOffsetY: 7, tooltipLineHeight: 30, tooltipMaxWidth: 160, tooltipAnchorSize: 4, annotationAnchorSize: 4, displayValueTags: !1, yearsAsContinuous: !0, curveType: null, layoutManager: {}, dateAxis: {}, bandAxis: { outerPadding: 0 }, linearAxis: {}, transition: Se({}, QC(0, e, n)) },
            r = ju(i, n),
            o = Ep(t).classed("toaster-chart-line", !0).classed("bar-colors", !1).classed("quad-colors", Ik(e)).classed("transition-stage", sM(r));
        Bk(e, !1, r); var a = rA(o, e, r),
            s = a.options.renderAreaChart,
            l = s && !Hk(e),
            c = e.fields[0],
            u = wk(e),
            f = e.config.fill_empty_segments,
            d = eE(c),
            h = 0,
            g = { orientation: VS, yAxisInnerPadding: wA(e) };
        ke(g, a.options.layoutManager); var p = { isPrimaryAxis: !1, domainFromZero: s, stackedDomain: l }; if (ke(p, a.options.linearAxis), g.secondaryAxis = JA(p), d) { var v = { isPrimaryAxis: !0 };
            ke(v, a.options.bandAxis), g.primaryAxis = tD(v) } else { var m = { isPrimaryAxis: !0 };
            ke(m, a.options.dateAxis), g.primaryAxis = nD(m) } var y = iD(g),
            x = o.selectAppend("div.chart");
        x.selectAll("*").remove(), x.call(y, a); var b = y.draw().classed("line-container", !0),
            $ = n.curveType || e.config.curve_type; if (o.classed("no-grid", !ZS(a)).classed("no-domain", !JS(a)).classed("no-axis", a.options.disableGrid), b.selectAppend("g.grid").call($A({ length: y.outerWidth() }), a), e.config.highlightRanges) { var w = e.config.highlightRanges,
                _ = w.ranges,
                k = w.rangeStyle;
            b.selectAppend("g.highlight-ranges").call(rD({ ranges: _, rangeStyle: k }), a) } return d && (h = a.x.scale.bandwidth() / 2), s && (o.classed("toaster-chart-area", !0), o.classed("toaster-chart-area-stacked", l), o.classed("area-colors", !0), l ? b.call(function(t) { return t = t || {},
                function(e, n) { return e.each((function(e, i) { var r = Ep(this).classed("simple-area", !0),
                            o = n.x.scale,
                            a = bd(e),
                            s = function(t) { return Math.min(n.y.scale(t), Math.floor(n.y.rangeLength())) },
                            l = Ip(1, e.data[0].length),
                            c = Jw().keys(l)(e.data),
                            u = r.selectAppend("g.area-group"),
                            f = u.selectAll(".line-area").data(c);
                        t.xOffset && u.attr("transform", "translate(".concat(t.xOffset, ")")); var d = Fw().x((function(t, e) { return o(a(e)) })).y0((function(t) { return s(t[0]) })).y1((function(t) { return s(t[1]) })).defined((function(t) { return l.forEach((function(e) { return !isNaN(t[e]) && null !== t[e] && void 0 !== t[e] && void 0 })), !0 }));
                        f.exit().remove(), f.enter().append("path").attr("class", (function(t, e) { return "line-area f series-".concat(e) })).merge(f).attr("d", (function(t) { return d(t) })) })), e } }({ xOffset: h }), a) : b.call(function(t) { return t = t || {},
                function(e, n) { return e.each((function(e, i) { var r = Ep(this).classed("simple-area", !0),
                            o = dk(e).slice(0),
                            a = bd(e),
                            s = n.x.scale,
                            l = function(t) { return Math.min(n.y.scale(t), Math.floor(n.y.rangeLength())) },
                            c = n.y.scale.domain()[0],
                            u = Ek(n.y.scale.domain());
                        (0 === u[0] || 0 === u[1] || u[0] < 0 && u[1] > 0) && (c = 0); var f = r.selectAppend("g.area-group"),
                            d = f.selectAll(".line-area").data(o);
                        t.xOffset && f.attr("transform", "translate(".concat(t.xOffset, ")")); var h = Fw().x((function(t, e) { return s(a(e)) })).y1(l(c)).y0((function(t) { return l(t) })).defined(jr);
                        d.exit().remove(), d.enter().append("path").attr("class", (function(t, e) { return "line-area f s series-".concat(e) })).merge(d).attr("d", (function(t) { return h(t.data) })) })), e } }({ xOffset: h }), a)), s || l || (b.call(GC({ xScale: a.x.scale, yScale: a.y.scale, drawArea: a.options.renderSingleSeriesAreaChart, xOffset: h, curve: $ }), a), u && b.call(function(t) { var e = t.xScale,
                n = t.yScale,
                i = t.segments,
                r = t.curve,
                o = t.seriesOffset,
                a = void 0 === o ? 0 : o,
                s = t.isSolid,
                l = void 0 !== s && s; return function(t) { t.each((function(t, o) { var s = Ep(this).classed("simple-line", !0),
                        c = bd(t),
                        u = s.selectAppend("g.line-group").selectAll(".dashed-line").data(i),
                        f = Yw().x((function(t) { return e(c(t.index)) })).y((function(t) { return n(t.value) }));
                    r && ZC[r] && f.curve(ZC[r]), u.exit().remove(), u.enter().append("path").attr("class", (function(t, e) { return "dashed-line s series-".concat(e + a) })).merge(u).classed("show-solid-line", l).attr("d", (function(t) { return t.reduce((function(t, e) { return t + f(e.data) }), "") })) })) } }({ xScale: a.x.scale, yScale: a.y.scale, drawArea: a.options.renderSingleSeriesAreaChart, xOffset: h, segments: u, isSolid: f, curve: $ }), a), n.displayValueTags && b.call(function(t) { var e = t.xScale,
                n = t.yScale,
                i = t.seriesOffset || 0; return function(r) { r.each((function(r, o) { var a = Ep(this).classed("simple-line", !0),
                        s = K_(t.env.y, t.env, { defaultDecimals: 1, bareValue: !0, isTooltip: !0 }),
                        l = bd(r),
                        c = t.seriesData || dk(r),
                        u = a.selectAppend("g.value-tag-group"),
                        f = u.selectAll(".tags").data(c);
                    t.xOffset && u.attr("transform", "translate(".concat(t.xOffset, ")")); var d = function(t) { return "M".concat(t - 1, ",0.8c0,7.5,0,15,0,22.5c-22,0-").concat(t / 2 + 4, ",0-").concat(t - 14, ",0c-4-3.8-8-7.7-12-11.5c4-3.7,8-7.3,12-11C35,0.8,").concat(t - 23, ",0.8,").concat(t - 1, ",0.8z") };
                    f.exit().remove(); var h = f.enter().append("g").attr("class", "tag").merge(f).style("display", (function(t) { return t.data[t.data.length - 1] ? "block" : "none" })).attr("transform", (function(t) { var i = t.data.length - 1,
                            r = t.data[i]; return "translate(".concat(e(l(i)), ", ").concat(n(r), ")") }));
                    h.append("path").attr("class", (function(t, e) { return "f series-" + (e + i) })).style("transform", "translate(-2, -10) scale(0.85)").merge(h).attr("d", d(64)), h.append("text").merge(h).style("fill", "white").attr("x", 13).attr("y", 5).text((function(t) { return s(t.data[t.data.length - 1]) })), u.selectAll("g.tag").each((function() { var t = Ep(this).select("text").node().getComputedTextLength();
                        Ep(this).select("path").attr("d", d(t + 30)) })) })) } }({ env: a, xScale: a.x.scale, yScale: a.y.scale, drawArea: a.options.renderSingleSeriesAreaChart, xOffset: h }), a)), e.config.thresholds && b.selectAppend("g.threshold-lines").call(oD(Se(Se({}, a.options), {}, { thresholds: e.config.thresholds })), a), GA(a), mA(b, e.annotations, a), x.call((function(t, e, n) { if (n.config && !e.options.disableLabels)
                if (t.selectAll(".label-bottom").remove(), void 0 === n.config.labelPrimary) { if (n.primaryAxis) { var i = n.primaryAxis.label || n.primaryAxis.caption;
                        i && t.selectAppend("div.chart-footer").append("div").classed("label-bottom", !0).text(i) } } else n.config.labelPrimary && t.selectAppend("div.chart-footer").append("div").classed("label-bottom", !0).text(n.config.labelPrimary) }), a, e), y.overflowScale(), a.options.disableTooltip || e.config.disableTooltip || function(t) { var e = t.env,
                n = t.chart,
                i = t.area,
                r = e.x,
                o = e.y;
            n.selectAll(".tooltip").remove(); var a = dk(e.data),
                s = Hk(e.data),
                l = n.selectAppend("div.tooltip-container"),
                c = l.append("div").attr("class", "tooltip tooltip-hidden tooltip-label-box"),
                u = c.append("div").attr("class", "tooltip-label"),
                f = c.selectAppend("div.tooltip-values"),
                d = e.layout.margin(),
                h = e.y.stackedDomain(),
                g = i.selectAppend("g.tooltip-container"),
                p = g.append("line").attr("class", "tooltip tooltip-hidden tooltip-gridline"),
                v = [];
            v.push(g.append("circle").attr("class", "tooltip tooltip-hidden tooltip-anchor series-0-stroke")), v.push(g.append("circle").attr("class", "tooltip tooltip-hidden tooltip-anchor series-1-stroke")), v.push(g.append("circle").attr("class", "tooltip tooltip-hidden tooltip-anchor series-2-stroke")), v.push(g.append("circle").attr("class", "tooltip tooltip-hidden tooltip-anchor series-3-stroke")), v.push(g.append("circle").attr("class", "tooltip tooltip-hidden tooltip-anchor series-4-stroke")), v.push(g.append("circle").attr("class", "tooltip tooltip-hidden tooltip-anchor series-5-stroke")); var m = { defaultDecimals: 1, isTooltip: !0 },
                y = K_(e.x, e, m),
                x = K_(e.y, e, m); of (l.node(), e.data, e.options), oA(n, (function(t, n, l) { var g = i.node().getBoundingClientRect(),
                    m = e.layout.yAxisInnerPadding(),
                    b = [(t[0] - m) / r.scale.range()[1], 1 - t[1] / o.scale.range()[0]],
                    $ = r.getDataAtPosition(b[0]); if (n(), $) { null == $.seriesIndex && ($.seriesIndex = 0); var w = r.getPositionFromIndex($.dataIndex, "ignoreSeries"); if (e.data.data[$.dataIndex]) { var _ = e.data.data[$.dataIndex][0],
                            k = $.data.map((function(t, n) { return null == Rr(t) ? kk(e, $.dataIndex, n) : t })); if (k.filter((function(t) { return null != t })).length) { var M = w * r.scale.range()[1],
                                S = k.map((function(t) { return o.scale(t) })); if (h) { var A = 0,
                                    D = 0;
                                S = S.map((function(t, e) { return k[e] < 0 ? D += t : (A += o.rangeLength() - t, o.rangeLength() - A) })) } var C = S.reduce((function(t, e) { return Math.min(t, e) }));
                            p.attr("x1", M).attr("x2", M).attr("y1", o.scale.range()[0]).attr("y2", o.scale.range()[1]), v.forEach((function(t, n) { var i = r.series()[n] && null != k[n];
                                t.attr("r", e.options.tooltipAnchorSize).attr("cx", M || 0).attr("cy", S[n] || 0).style("display", i ? "block" : "none") })); var E = e.layout.yAxisInnerPadding(),
                                O = M + d.left + E + e.options.tooltipOffsetX,
                                T = C + d.top + e.options.tooltipOffsetY,
                                P = null,
                                B = e.options.tooltipLineHeight * (a.length + 1),
                                L = e.options.tooltipMaxWidth,
                                z = !1,
                                Y = !1;
                            O + L > g.width && (O = Math.max(M + E + d.left - e.options.tooltipOffsetX, L), P = "flipHorizontal", z = !0), T + B > g.height && (T = Math.max(C + d.top - e.options.tooltipOffsetY, B), P = "flipVertical", Y = !0), Y && z && (P = "flipVH"), c.style("left", O + "px").style("top", T + "px").classed("flipHorizontal", "flipHorizontal" === P).classed("flipVertical", "flipVertical" === P).classed("flipVH", "flipVH" === P).classed("single-series", s), u.text(y(_)); var F = f.selectAll(".tooltip-value").data(k);
                            F.exit().remove(), F.enter().append("div").classed("tooltip-value", !0).merge(F).style("display", (function(t) { return null == t ? "none" : "block" })).html((function(t, e) { return '\n            <span class="swatch bg series-'.concat(e, '"></span>\n            <span class="val">').concat(x(t), "</span>\n          ") })), of (c.node(), e.data, e.options), e.options.tooltipPostRender && e.options.tooltipPostRender(e, c, k, $.dataIndex) } } } }), e) }({ chart: x, area: b, env: a }), a.options.renderAreaChart || o.selectAll(".simple-legend .swatch:not(.highlight-range-legend)").classed("line", !0), gd(a), lM(b, [{ el: o, env: a }], r) }

    function eE(t) { return !!gk(t) || (t.type === Cf || !(!t.taxonomy || t.taxonomy.isContinuous || t.taxonomy.isYears)) }

    function nE(t, e, n) { return tE(t, e, n = ke({ renderAreaChart: !0, areaChartMultiseries: !0 }, n)) }

    function iE(t, e, n) { var i = ju({ barline: !0, tooltipOffsetX: 7, tooltipOffsetY: 7, tooltipLineHeight: 30, tooltipMaxWidth: 160, tooltipAnchorSize: 4, dateAxisInnerPadding: 8, preventCondensedAnnotations: !0, curveType: null, layoutManager: { yAxisInnerPadding: 0, xAxisExtendRight: 7 }, dateAxis: {}, bandAxis: {}, linearAxis: {} }, n || {}),
            r = Ep(t).classed("toaster-chart-barline", !0).classed("bar-colors", !0).classed("quad-colors", Ik(e));
        jC(e, i); var o = rA(r, e, i),
            a = FS(r, e, o.options),
            s = WS(r, e, o.options),
            l = function(t) { var e = { "bar-then-lines": { linesFirst: !1, lineOffset: 1, barOffset: 0, lineSeriesData: t.fields.slice(2), barSeriesData: [t.fields[1]], isStackedColumns: !1 }, "two-stacked-bars-then-lines": { linesFirst: !1, lineOffset: 2, barOffset: 0, lineSeriesData: t.fields.slice(3), barSeriesData: t.fields.slice(1, 3), isStackedColumns: !0 }, "two-bars-then-lines": { linesFirst: !1, lineOffset: 2, barOffset: 0, lineSeriesData: t.fields.slice(3), barSeriesData: t.fields.slice(1, 3), isStackedColumns: !1 }, "three-stacked-bars-then-lines": { linesFirst: !1, lineOffset: 3, barOffset: 0, lineSeriesData: t.fields.slice(4), barSeriesData: t.fields.slice(1, 4), isStackedColumns: !0 }, "three-bars-then-lines": { linesFirst: !1, lineOffset: 3, barOffset: 0, lineSeriesData: t.fields.slice(4), barSeriesData: t.fields.slice(1, 4), isStackedColumns: !1 }, "line-then-stacked-bars": { linesFirst: !0, lineOffset: 0, barOffset: 1, lineSeriesData: [t.fields[1]], barSeriesData: t.fields.slice(2), isStackedColumns: !0 }, "line-then-bars": { linesFirst: !0, lineOffset: 0, barOffset: 1, lineSeriesData: [t.fields[1]], barSeriesData: t.fields.slice(2), isStackedColumns: !1 }, "two-lines-then-stacked-bars": { linesFirst: !0, lineOffset: 0, barOffset: 2, lineSeriesData: t.fields.slice(1, 3), barSeriesData: t.fields.slice(3), isStackedColumns: !0 }, "two-lines-then-bars": { linesFirst: !0, lineOffset: 0, barOffset: 2, lineSeriesData: t.fields.slice(1, 3), barSeriesData: t.fields.slice(3), isStackedColumns: !1 }, "three-lines-then-stacked-bars": { linesFirst: !0, lineOffset: 0, barOffset: 3, lineSeriesData: t.fields.slice(1, 4), barSeriesData: t.fields.slice(4), isStackedColumns: !0 }, "three-lines-then-bars": { linesFirst: !0, lineOffset: 0, barOffset: 3, lineSeriesData: t.fields.slice(1, 4), barSeriesData: t.fields.slice(4), isStackedColumns: !0 } },
                    n = "bar-then-lines";
                t.config.barline_bar_series && (n = "line-then-bars");
                t.config.barlineType && (n = t.config.barlineType); return e[n] }(e),
            c = l.linesFirst,
            u = l.lineOffset,
            f = l.barOffset,
            d = l.lineSeriesData,
            h = l.barSeriesData,
            g = l.isStackedColumns,
            p = Se({ isPrimaryAxis: !1, domainFromZero: !0, stackedDomain: g, customStackedDomain: g, customStandardFields: d, customStackedFields: h }, o.options.linearAxis),
            v = Se({ isPrimaryAxis: !0, stackedBand: g, isDateAxis: a, isContinuousAxis: s }, o.options.bandAxis),
            m = Se({ orientation: VS, primaryAxis: tD(v), secondaryAxis: JA(p) }, o.options.layoutManager);
        a && (m.yAxisInnerPadding = o.options.dateAxisInnerPadding); var y = iD(m),
            x = r.selectAppend("div.chart");
        x.selectAll("*").remove(), x.call(y, o); var b = y.draw().classed("line-container", !0),
            $ = n.curveType || e.config.curve_type,
            w = o.x.rangeLength() + 2 * y.yAxisInnerPadding(); if (r.classed("no-grid", !ZS(o)).classed("no-domain", !JS(o)).classed("no-axis", o.options.disableGrid), b.selectAppend("g.grid").call($A({ length: w }), o), e.config.highlightRanges) { var _ = e.config.highlightRanges,
                k = _.ranges,
                M = _.rangeStyle;
            b.selectAppend("g.highlight-ranges").call(rD({ ranges: k, rangeStyle: M, isColumnType: !0 }), o) } var S = { xScale: o.x.scale, yScale: o.y.scale, seriesData: h, seriesOffset: f, orientation: VS },
            A = { xScale: o.x.scale, yScale: o.y.scale, seriesData: d, seriesOffset: u, xOffset: o.x.scale.bandwidth() / 2, curve: $, forceCategorical: !0 }; return c ? r.selectAll(".simple-legend .swatch").each((function(t, e) { Ep(this).classed("line", e < f) })) : r.selectAll(".simple-legend .swatch").each((function(t, e) { Ep(this).classed("line", e >= u) })), g ? b.call(IC(S), o) : b.call(iA(S), o), b.call(GC(A), o), GA(o), e.config.thresholds && b.selectAppend("g.threshold-lines").call(oD(Se(Se({}, o.options), {}, { thresholds: e.config.thresholds })), o), yA(b, e.annotations, o), x.call((function(t, e, n) { if (n.config && !e.options.disableLabels)
                if (t.selectAll(".label-bottom").remove(), void 0 === n.config.labelPrimary) { if (n.primaryAxis) { var i = n.primaryAxis.label || n.primaryAxis.caption;
                        i && t.selectAppend("div.chart-footer").append("div").classed("label-bottom", !0).text(i) } } else n.config.labelPrimary && t.selectAppend("div.chart-footer").append("div").classed("label-bottom", !0).text(n.config.labelPrimary) }), o, e), y.overflowScale(), o.options.disableTooltip || e.config.disableTooltip || aA({ chart: x, area: b, env: o, barline: !0, seriesOffset: S.seriesOffset, seriesData: S.seriesData }), gd(o), lM(iE, [{ env: o, el: r }], i) } iE.validateData = function(t) { var e = LS(t); return e("Barline chart must have more than one value.", Nk), e("Barline chart requires a series of 2 fields of data.", jk), e("Barline chart must be time series data", Vk), e }; var rE = qt.some,
        oE = Gt("some"),
        aE = Jt("some");
    Pt({ target: "Array", proto: !0, forced: !oE || !aE }, { some: function(t) { return rE(this, t, arguments.length > 1 ? arguments[1] : void 0) } });

    function sE(t) { return "symbol" == typeof t || ya(t) && "[object Symbol]" == jo(t) } var lE = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        cE = /^\w*$/;

    function uE(t, e) { if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function"); var n = function() { var i = arguments,
                r = e ? e.apply(this, i) : i[0],
                o = n.cache; if (o.has(r)) return o.get(r); var a = t.apply(this, i); return n.cache = o.set(r, a) || o, a }; return n.cache = new(uE.Cache || ua), n } uE.Cache = ua; var fE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        dE = /\\(\\)?/g,
        hE = function(t) { var e = uE(t, (function(t) { return 500 === n.size && n.clear(), t })),
                n = e.cache; return e }((function(t) { var e = []; return 46 === t.charCodeAt(0) && e.push(""), t.replace(fE, (function(t, n, i, r) { e.push(i ? r.replace(dE, "$1") : n || t) })), e })),
        gE = hE;

    function pE(t, e) { for (var n = -1, i = null == t ? 0 : t.length, r = Array(i); ++n < i;) r[n] = e(t[n], n, t); return r } var vE = zo ? zo.prototype : void 0,
        mE = vE ? vE.toString : void 0;

    function yE(t) { if ("string" == typeof t) return t; if (Ma(t)) return pE(t, yE) + ""; if (sE(t)) return mE ? mE.call(t) : ""; var e = t + ""; return "0" == e && 1 / t == -Infinity ? "-0" : e }

    function xE(t, e) { return Ma(t) ? t : function(t, e) { if (Ma(t)) return !1; var n = typeof t; return !("number" != n && "symbol" != n && "boolean" != n && null != t && !sE(t)) || cE.test(t) || !lE.test(t) || null != e && t in Object(e) }(t, e) ? [t] : gE(function(t) { return null == t ? "" : yE(t) }(t)) }

    function bE(t) { if ("string" == typeof t || sE(t)) return t; var e = t + ""; return "0" == e && 1 / t == -Infinity ? "-0" : e }

    function $E(t, e, n) { var i = null == t ? void 0 : function(t, e) { for (var n = 0, i = (e = xE(e, t)).length; null != t && n < i;) t = t[bE(e[n++])]; return n && n == i ? t : void 0 }(t, e); return void 0 === i ? n : i }

    function wE(t) { return t != t } var _E = /^\s+|\s+$/g,
        kE = /^[-+]0x[0-9a-f]+$/i,
        ME = /^0b[01]+$/i,
        SE = /^0o[0-7]+$/i,
        AE = parseInt;

    function DE(t) { if ("number" == typeof t) return t; if (sE(t)) return NaN; if (Io(t)) { var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = Io(e) ? e + "" : e } if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(_E, ""); var n = ME.test(t); return n || SE.test(t) ? AE(t.slice(2), n ? 2 : 8) : kE.test(t) ? NaN : +t } var CE = 1 / 0;

    function EE(t) { return t ? (t = DE(t)) === CE || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0 }

    function OE(t) { return null == t ? [] : function(t, e) { return pE(e, (function(e) { return t[e] })) }(t, Ga(t)) } var TE, PE = Math.max;

    function BE(t, e, n, i) { t = qa(t) ? t : OE(t), n = n && !i ? function(t) { var e = EE(t),
                n = e % 1; return e == e ? n ? e - n : e : 0 }(n) : 0; var r = t.length; return n < 0 && (n = PE(r + n, 0)),
            function(t) { return "string" == typeof t || !Ma(t) && ya(t) && "[object String]" == jo(t) }(t) ? n <= r && t.indexOf(e, n) > -1 : !!r && function(t, e, n) { return e == e ? function(t, e, n) { for (var i = n - 1, r = t.length; ++i < r;)
                        if (t[i] === e) return i; return -1 }(t, e, n) : function(t, e, n, i) { for (var r = t.length, o = n + (i ? 1 : -1); i ? o-- : ++o < r;)
                        if (e(t[o], o, t)) return o; return -1 }(t, wE, n) }(t, e, n) > -1 }

    function LE(t) { return t }

    function zE(t) { return "" }

    function YE(t, e) { return function(n) { switch (t.displayFormat) {
                case "Y":
                case "M":
                case "D":
                    "Y" === t.displayFormat ? n = pd.utc(n).format("YYYY") : "M" === t.displayFormat ? n = pd.utc(n).format("MMM YYYY") : "D" === t.displayFormat && (n = pd.utc(n).format("MMM DD, YYYY")); break;
                case "K":
                    n /= 1e3; break;
                case "ML":
                    n /= 1e6; break;
                case "B":
                    n /= 1e9; break;
                case "T":
                    n /= 1e12 } return e(n) } }

    function FE(t) { var e = function(t, e) { if (null != t) return t; var n = { percent: 2, change: 1, numeric: 0 }; return e in n ? n[e] : 0 }(t.decimalPlaces, t.type); switch ("number" != typeof e && (e = 0), t.type) {
            case Ef:
                return YE(t, jd(",." + e + "%", t));
            case Cf:
                return YE(t, jd(",." + e + "f", t));
            default:
                return YE(t, LE) } }

    function WE(t) { var e = t.type; return t.displayChange && (e += " change"), t.displayAsSymbol && (e += " arrow"),
            function(n) { var i = e; return (t.displayChange || t.displayAsSymbol) && (i += " ", i += 0 === n ? "no-change" : n > 0 ? "positive" : "negative"), i } }

    function RE(t) { var e, n, i, r = t.unitBefore && t.unitBefore.length ? t.unitBefore : void 0,
            o = t.unitAfter && t.unitAfter.length ? t.unitAfter : void 0; return (r || o) && (TE || (i = function() { var t = document.createElement("style"); return t.appendChild(document.createTextNode("")), document.head.appendChild(t), t.sheet }(), TE = { addCSSRule: function(t, e) { for (var n = Math.max(i.cssRules.length - 1, 0), r = n; r > 0; r--) { var o = i.cssRules[r];
                        o.selectorText === t && (e = o.style.cssText + e, i.deleteRule(r), n = r) } return i.insertRule ? i.insertRule(t + "{" + e + "}", n) : i.addRule(t, e, n), i.cssRules[n].cssText } }), r && (e = "prefix-" + N_(r), TE.addCSSRule("." + e + ".top .value::before", 'color: inherit; content: "\\' + R_(r) + '"')), o && (n = "postfix-" + N_(o), TE.addCSSRule("." + n + " .value::after", 'color: transparent; content: "\\' + R_(o) + '"'), TE.addCSSRule("." + n + ".top .value::after", 'color: inherit; content: "\\' + R_(o) + '"'))),
            function() { return r ? e : o ? n : "" } }

    function NE(t) { if (t.displayBar) { var e = $x().domain([t.min, t.max]).range([5, 75]); return function(t) { return e(t) } } return zE }

    function HE(t) { return t = t || {},
            function(e) { e.each((function(e) { Ep(this).selectAppend("div.chart").selectAppend("div.toaster-chart-table").call(function(t) { var e = (t = ke({ hideAfter: null, hideHeaders: !1, sortHeaders: !0, hideMobile: !1 }, t)).hideAfter,
                            n = t.hideHeaders,
                            i = t.sortHeaders,
                            r = t.hideMobile;

                        function o(t) { t.each((function(t) { var e = Ep(this); return r || e.each(c), e.each(l) })) }

                        function a(t, e, n) { var i, r, o;
                            (o = void 0 !== t ? Ep("thead th:nth-child(" + (t + 1) + ")") : Pp("thead th").filter((function() { return Ep(this).classed("ascending") || Ep(this).classed("descending") }))) && o.each((function(o) { i = void 0 !== t ? t : Ep(this).attr("data-index"), r = Ep(this).classed("ascending") ? !n : !Ep(this).classed("descending") || Boolean(n), Pp("th").classed("ascending", !1).classed("descending", !1); var a = function(t) { return t };
                                Ep(this).classed("numeric") && (a = function(t) { return Number(t) }), r ? e.sort((function(t, e) { return a(t[i]) > a(e[i]) ? 1 : -1 })) : e.sort((function(t, e) { return a(e[i]) > a(t[i]) ? 1 : -1 })), Ep(this).classed("ascending", r), Ep(this).classed("descending", !r) })) }

                        function s() { Pp("td").classed("top", !1), Pp("tr:nth-child(1) td").classed("top", !0) }

                        function l(t) { var r = Ep(this),
                                o = t.fields.map(FE),
                                l = t.fields.map(WE),
                                c = t.fields.map(RE),
                                u = t.fields.map(NE),
                                f = $E(t, "chartOptions.table.highlightRows", []),
                                d = r.selectAppend("table.simple-table"),
                                h = d.selectAppend("thead"),
                                g = d.selectAppend("tbody"); if (!n) { var p = h.selectAppend("tr").selectAll("th").data((function(t) { return t.fields }));
                                p.exit().remove(), p.merge(p.enter().append("th")).attr("scope", "col").attr("data-index", (function(t, e) { return e })).attr("class", (function(t) { return t.type + (Ep(this).classed("ascending") ? " ascending" : Ep(this).classed("descending") ? " descending" : "") })).html((function(t) { return "<span " + (i ? 'class="sortable"' : "") + ">" + t.name + "</span>" })).style("cursor", i ? "pointer" : "").on("click", (function(t, e) { i && (a(e, v, !0), s()) })) } var v = g.selectAll("tr").data((function(t) { return t.data })).order();
                            v.exit().remove(); var m = (v = v.enter().append("tr").merge(v).classed("highlight", (function(t, e) { return BE(f, e) })).classed("hidden", (function(t, n) { return e && n > e }))).selectAll("td").data((function(t) { return t }));
                            m.exit().remove(), m.enter().append("td").merge(m).attr("class", (function(t, e) { return l[e](t) + " " + c[e]() })).html((function(t, e) { var n, i = u[e](t),
                                    r = 0; return "" !== i ? (isNaN(t) || (r = 25 * t.toString().length), n = '<div class="bar-container" style="min-width:' + r + 'px"><span class="bar" style="width: ' + i + 'px"></span>') : n = "<div>", n + '<span class="value">' + o[e](t) + "</span></div></div>" })), i && a(void 0, v), s() }

                        function c(t) { var e = Ep(this),
                                n = $E(t, "chartOptions.table.labelFieldIndex", -1),
                                i = function(t) { return t > -1 ? function(e) { return e.splice(t, 1), e } : function(t) { return t } }(n),
                                r = $E(t, "chartOptions.table.highlightRows", []),
                                o = i(t.fields.slice()),
                                a = o.map(FE),
                                s = o.map(WE),
                                l = e.selectAppend("table.simple-table-mobile").selectAll("tbody").data((function(t) { return t.data })).enter().append("tbody");
                            n > -1 && l.append("tr.label-field").append("th").attr("colspan", 2).text((function(t) { return t[n] })), l.classed("highlight", (function(t, e) { return BE(r, e) })); var c = o.some((function(t) { return t.displayInList })),
                                u = l.selectAll("tr.row").data((function(t) { return i(t.slice()) })).enter().append("tr.row").classed("hidden", (function(t, e) { return c && !o[e].displayInList }));
                            u.append("th").text((function(t, e) { return o[e].name })), u.append("td").attr("class", (function(t, e) { return s[e](t) })).text((function(t, e) { return a[e](t) })) } return o.hideHeaders = function(t) { return arguments.length ? (n = t, o) : n }, o }(t)) })) } }

    function jE(t, e, n) { var i, r, o = n.transition,
            a = void 0 === o ? {} : o; return Se(Se({}, (i = function(t, e, n) { var i = e.options.pieOuterRadius,
                r = Tw().innerRadius(0).outerRadius(i);
            e.el.selectAll("path.sector").each((function(t, e) { var n = ke({}, t);
                n.endAngle = n.startAngle, Ep(this).attr("d", r(n)) })), e.el.selectAll("g.label").style("opacity", 0) }, r = TC((function(t, e, n) { var i = e.data,
                r = e.options.pieOuterRadius,
                o = n.duration,
                a = n.delay,
                s = n.sectionDelay,
                l = void 0 === s ? 80 : s,
                c = e.el.selectAll("path.sector"),
                u = o / i.data.length,
                f = [],
                d = Tw().innerRadius(0).outerRadius(r); return c.each((function(t, e) { var n = Ep(this),
                    i = ke({}, t);
                i.endAngle = i.startAngle; var r = function(t) { var e = dm(i, t); return function(t) { return d(e(t)) } },
                    o = n.transition().ease(_y).duration(u).delay(a + e * (u - l)).attrTween("d", r);
                f.push(o) })), e.el.selectAll("g.label").each((function(t, e) { var n = Ep(this).transition().duration(u - 200).delay(a + e * (u + l)).style("opacity", 1);
                f.push(n) })), f })), { duration: 2e3, normalizeSpeed: !1, stageHandler: i, playHandler: r, interruptHandler: function() { return null } })), a) } var IE = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? 5 : 0;

    function VE(t, e, n) { var i = { disablePieLabels: !1, sortPieSeries: !0, labelLineLength: 50, labelExtendLength: 30, labelLineOffset: 2, labelLine1Height: 26, labelLine2Height: 16, labelTextWrapWidth: 200, verticalMargin: 40, pieOuterRadius: 120, pieMaxRadius: 150, pieMinRadius: 60, automaticRadius: !0, phabletOptions: { labelLine1Height: 20, labelLine2Height: 13, labelTextWrapWidth: 130, labelLineLength: 35 }, mobileOptions: { labelLine1Height: 18, labelLine2Height: 13, labelTextWrapWidth: 130, labelLineLength: 35 }, transition: Se({}, jE(0, 0, n)) },
            r = ju(i, n);
        Bk(e, !1, r); var o = Ep(t).classed("toaster-chart-pie", !0).classed("pie-colors", !0).classed("transition-stage", sM(r)),
            a = rA(o, e, r); if (t.offsetWidth <= ml && t.offsetWidth > yl ? ke(a.options, n.phabletOptions) : t.offsetWidth <= yl && ke(a.options, n.mobileOptions), a.options.labelLine2Height += IE, ke(e.fields[1], e.secondaryAxis), e.data.length > 6) throw new Error("Pie chart only supports up to 6 values"); var s = o.selectAppend("div.chart").classed("toaster-chart-pie", !0);
        s.selectAll("*").remove(); var l = s.node().offsetWidth,
            c = s.selectAppend("svg").style("width", l + "px").style("height", "380px"); if (a.options.automaticRadius) { var u = 6 / (3 + tA(e));
            a.options.pieOuterRadius = Math.max(Math.min(l * (1 / 8), a.options.pieMaxRadius), a.options.pieMinRadius) * u } var f = c.selectAppend("g.pie-container"); return f.selectAll("*").remove(), f.call(function(t) { t = ke({ pieInnerRadius: 0, pieOuterRadius: 120, piePadAngle: 0, pieSort: function(t, e) { return e - t } }, t); var e = Tw(),
                    n = Nw(); return function(i) { i.each((function(i) { i.chartOptions && i.chartOptions.pie && ke(t, i.chartOptions.pie); var r = dk(i)[0];
                        n.padAngle(t.piePadAngle), t.sortPieSeries ? n.sort(t.pieSort) : n.sort(null), e.innerRadius(t.pieInnerRadius).outerRadius(t.pieOuterRadius); var o = Sk(i),
                            a = Ep(this).classed("not-highlighted", !Ak(i)).classed("highlighted", Ak(i)).selectAll("path.sector"),
                            s = n(r.data);
                        (a = a.data(s)).exit().remove(), a.enter().append("path").attr("data-outer-radius", t.pieOuterRadius).attr("d", e).merge(a).attr("class", (function(t) { return "sector f series-" + t.index })).classed("highlight", (function(t) { return o(t, t.index) })) })) } }(a.options)), a.options.disablePieLabels || function(t, e) { var n = [],
                    i = dk(e.data)[0],
                    r = Nw()(i.data),
                    o = [];
                e.data.config && e.data.config.highlight_label && (o = e.data.config.highlight_label.split(",").map((function(t) { return Number(t) }))); var a = {},
                    s = Math.max(Math.abs(i.max), Math.abs(i.min));
                s >= 1e3 && s < 1e5 && (a.forceCommaDisplay = !0); var l = K_(function(t) { return { field: function() { return t.fields[1] } } }(e.data), e, a);
                t.selectAll(".label").remove(); var c = Tw().outerRadius(e.options.pieOuterRadius).innerRadius(e.options.pieOuterRadius);
                e.data.data.forEach((function(t, i) { var a = r[i],
                        s = (a.startAngle + a.endAngle) / 2,
                        u = Math.PI / 8,
                        f = { position: c.centroid(a), orientation: "right", extend: null, extendLength: e.options.labelExtendLength, valueText: l(a.value), labelText: t[0], centerAngle: s, pieIndex: a.index, highlight: -1 !== o.indexOf(a.index + 1) };
                    a.value <= 0 || isNaN(a.value) || (s < u ? (f.orientation = "right", f.extend = "top") : s > 2 * Math.PI - u ? (f.orientation = "left", f.extend = "top") : s > Math.PI - u && s <= Math.PI ? (f.orientation = "right", f.extend = "bottom") : s < Math.PI + u && s > Math.PI ? (f.orientation = "left", f.extend = "bottom") : s < Math.PI ? f.orientation = "right" : f.orientation = "left", n.push(f)) })), e.options.sortPieSeries && n.sort((function(t, e) { return t.pieIndex - e.pieIndex })); var u = n.filter((function(t) { return "top" === t.extend })); if (u.length > 1) { var f = e.options.labelLine1Height + e.options.labelLine2Height + 2 * e.options.labelLineOffset;
                    u.forEach((function(t, n) { t.extendLength = e.options.labelExtendLength + f * n })) } n.forEach((function(n) { return bA(t, n, e) })) }(f, a),
            function(t, e, n, i, r) { var o = t.node().getBBox(),
                    a = Math.abs(o.y - r.options.verticalMargin / 2),
                    s = n / 2,
                    l = "scale(1.0)";
                i = o.height, i += r.options.verticalMargin, e.style("width", n + "px").style("height", i + "px"), o.width > n && (l = "scale(".concat(n / o.width, ") "));
                t.attr("transform", "translate(".concat(s, ", ").concat(a, ") ").concat(l)) }(f, c, l, 380, a), gd(a), lM(VE, [{ env: a, el: o }], r) } VE.makeOptions = function(t) { return ke({ hideLegend: !0 }, t) }; var UE = 293,
        XE = 310,
        qE = 200,
        GE = 256;

    function ZE(t, e) { return t = ke({}, t),
            function(n) { n.each((function(n) { n.chartOptions && n.chartOptions.pie && ke(t, n.chartOptions.pie); var i = Ep(this);
                    i.html('<svg id="dial-chart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 310">\n  <defs>\n    <marker id="arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0" \n      markerUnits="userSpaceOnUse" markerWidth="20" markerHeight="20" stroke-width="1" orient="auto">\n      <polyline stroke-linejoin="bevel" points="-6,-4 0,0 -6,4" fill="var(--text)"></polyline>\n    </marker>\n    <style>\n      .cls-1{fill:#00AEFF;}\n      .cls-2{fill:#44C4FF;}\n      .cls-3{fill:#89D9FE;}\n      .cls-4{fill:#d4d4d4;}\n      .cls-5{fill:#feb98d;}\n      .cls-6{fill:#ff8d46;}\n      .cls-7{fill:#ff6200;}\n      .cls-12,.cls-8{fill:var(--bg);}\n      .cls-10,.cls-11,.cls-13,.cls-14,.cls-9{fill:none;}\n      .cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-9{stroke:var(--text);}.cls-10,.cls-11,.cls-12,.cls-9{stroke-linecap:round;stroke-linejoin:round;}.cls-12,.cls-9{stroke-width:2px;}.cls-10,.cls-11,.cls-13,.cls-14{stroke-width:0.75px;}.cls-11{stroke-dasharray:1.01 3.03;}.cls-13,.cls-14{stroke-miterlimit:10;}.cls-14{stroke-dasharray:1.02 4.09;}.cls-15{font-size:15.4px;}.cls-15,.cls-16{font-family:BWHaasText-55Roman, BW Haas Text;}.cls-16{font-size:15.4px;}.cls-30{fill: var(--text);}\n    </style>\n  </defs>\n  <path class="cls-2" d="M309,294.73,86,187.22a250.28,250.28,0,0,1,68.37-86.55Z"/>\n  <path class="cls-3" d="M309,294.73,154.33,100.67a248.64,248.64,0,0,1,99.28-48.78Z"/>\n  <path class="cls-7" d="M560.7,294.73H309L535.63,185.59A248.46,248.46,0,0,1,560.7,294.73Z"/>\n  <path class="cls-6" d="M535.63,185.59,309,294.73,465.43,98.58A250.71,250.71,0,0,1,535.63,185.59Z"/>\n  <path class="cls-5" d="M465.43,98.58,309,294.73,364.65,51A248.55,248.55,0,0,1,465.43,98.58Z"/>\n  <path class="cls-4" d="M364.65,51,309,294.73,253.61,51.89a251.45,251.45,0,0,1,111-.93Z"/>\n  <path class="cls-1" d="M309,294.73H61.67A248.33,248.33,0,0,1,86,187.22Z"/>\n  <path id="dial-pad" class="cls-8" d="M310.43,295.43l-120.76,1v-1c0-66.25,54.51-120.76,120.76-120.76S431.2,229.18,431.2,295.43Z"/>\n  \n  <line id="end-line" class="cls-9" x1="310" y1="293" x2="346.67" y2="110.33"/>\n  <line id="start-line" class="cls-11" x1="310" y1="293" x2="413.66" y2="142.82" />\n\n  <path class="cls-12" d="M310.75,266.25a28.47,28.47,0,0,0-28.47,28.48h56.94A28.47,28.47,0,0,0,310.75,266.25Z"/>\n  <path id="transition-path" class="cls-14" d="M370.13,44.87A247.14,247.14,0,0,1,452.44,80" marker-end="url(#arrowhead)"/>\n\n  <rect id="start-mark" class="cls-30" x="-2.5" y="0" width="5" height="0.75" transform="translate(140.64 420.06) rotate(-57.32)"/>\n\n  <text id="val-1" class="cls-15" transform="translate(45.73 236.73) rotate(-75.59)">1</text>\n  <text id="val-2" class="cls-15" transform="translate(97.12 130.37) rotate(-53.2)">2</text>\n  <text id="val-3" class="cls-16" transform="matrix(0.9, -0.44, 0.44, 0.9, 189.61, 54.57)">3</text>\n  <text id="val-4" class="cls-16" transform="translate(304.16 26.78) rotate(-1.45)">4</text>\n  <text id="val-5" class="cls-16" transform="matrix(0.92, 0.4, -0.4, 0.92, 418.04, 48.77)">5</text>\n  <text id="val-6" class="cls-15" transform="translate(513.14 119.17) rotate(50.3)">6</text>\n  <text id="val-7" class="cls-16" transform="matrix(0.25, 0.97, -0.97, 0.25, 570.66, 230.77)">7</text>\n</svg>'); var r = function(t) { return (7 - t) * (Math.PI / 7) + Math.PI / 14 },
                        o = Number(n.fields[1].data[0]),
                        a = Number(n.fields[1].data[1]),
                        s = (a + o) / 2,
                        l = o === a,
                        c = [XE + Math.cos(r(o)) * GE, UE - Math.sin(r(o)) * GE],
                        u = [XE + Math.cos(r(s)) * GE, UE - Math.sin(r(s)) * GE],
                        f = [XE + Math.cos(r(a)) * GE, UE - Math.sin(r(a)) * GE];
                    i.select("#val-".concat(a)).classed("active", !0), i.select("#end-line").attr("x2", XE + Math.cos(r(a)) * qE).attr("y2", UE - Math.sin(r(a)) * qE), i.select("#start-line").attr("x2", XE + Math.cos(r(o)) * qE).attr("y2", UE - Math.sin(r(o)) * qE), i.select("#transition-path").attr("d", function(t, e, n) { var i = QE(e, n),
                            r = QE(n, t),
                            o = QE(t, e),
                            a = Math.acos((i * i + r * r - o * o) / (2 * i * r)),
                            s = .5 * i * r * Math.sin(a),
                            l = i * r * o / 4 / s;
                        l = Math.round(1e3 * l) / 1e3; var c = +(Math.PI / 2 > a),
                            u = +((e[0] - t[0]) * (n[1] - t[1]) - (e[1] - t[1]) * (n[0] - t[0]) < 0); return ["M", t, "A", l, l, 0, c, u, e].join(" ") }(c, f, u)).style("display", l ? "none" : "block"), i.select("#start-mark").attr("transform", "translate(".concat(c[0], ", ").concat(c[1], ") rotate(").concat(r(o) * (180 / Math.PI) * -1, ")")).attr("d", "M".concat(c[0], ",").concat(c[1], "l.41.28")).style("display", l ? "none" : "block"), (1 === e ? zc : Lc).forEach((function(t, e) { i.select("path.cls-".concat(e + 1)).style("fill", t) })) })) } }

    function QE(t, e) { return Math.sqrt(Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2)) } var KE = Math.ceil,
        JE = Math.max; var tO = function(t) { return function(e, n, i) { return i && "number" != typeof i && Ru(e, n, i) && (n = i = void 0), e = EE(e), void 0 === n ? (n = e, e = 0) : n = EE(n),
                    function(t, e, n, i) { for (var r = -1, o = JE(KE((e - t) / (n || 1)), 0), a = Array(o); o--;) a[i ? o : ++r] = t, t += n; return a }(e, n, i = void 0 === i ? e < n ? 1 : -1 : EE(i), t) } }(),
        eO = tO,
        nO = { line: tE, area: nE, bar: NC, pie: function t(e, n, i) { VE(i = ju({ legendOffsetTop: -15, legendLineHeight: 16, customPieDisableLegend: !1, customPieLegendPercentage: !1, sortPieSeries: !1 }, i)); var r = Ep(e),
                    o = dk(n)[0],
                    a = { data: n, options: ke({}, i) }; if (!a.options.customPieDisableLegend) { var s = K_(function(t) { return { field: function() { return t.fields[1] } } }(a.data), a),
                        l = r.selectAppend("div.legend-container-outer"),
                        c = l.selectAppend("div.legend-container");
                    l.style("height", o.data.length * a.options.legendLineHeight + "px"); var u = c.selectAll(".legend-value").data(o.data),
                        f = o.data.reduce((function(t, e) { return t + e }));
                    u.exit().remove(), u.enter().append("div").classed("legend-value", !0).merge(u).html((function(t, e) { if (0 === t || "0" === t) return ""; var n, i = ""; return a.options.customPieLegendPercentage && (i = "(".concat((n = t / f, jd("3d")(100 * n).replace(/ /g, "")), "%)")), '\n            <span class="swatch bg series-'.concat(e, '"></span>\n            <span class="val">\n              ').concat(s(t), " ").concat(i, "\n            </span>\n          ") })) } return lM(t, [{ el: r, env: a }], i) } };

    function iO(t, e, n) { var i = ju({ defaultBoxType: "line", minimumBoxWidth: 200, minimumBoxHeight: 200, gutterWidth: 25, yearsAsContinuous: !0, disableGrid: !0, disablePieLabels: !0, pieOuterRadius: 120, pieMinRadius: 20, automaticRadius: !1, forceTickAtDomainTop: !0, verticalBarsOnly: !0, layoutManager: { minHeight: 300 } }, n),
            r = [],
            o = { x: null, y: null, r: null, layout: null, layers: [], options: i },
            a = Ep(t).classed("toaster-chart-spread", !0),
            s = e.config.multiples_type || o.options.defaultBoxType,
            l = e.config.multiplesLegend; if (e.config.smallMultiplesGrouping && (l = e.config.smallMultiplesGrouping.legendValues), n.multiplesLegend && (l = n.multiplesLegend), "bar" === s && (i.yearsAsContinuous = !1), Bk(e, !1, i), o.data = e, "area" === s && a.classed("area-colors", !0), "pie" === s) { var c = e.data.map((function(t) { return { name: t[0] } }));
            a.select(".legend").call(rO(c)) } else if (l && l.length) { var u = l.map((function(t) { return { name: t } }));
            a.select(".legend").call(rO(u)) } else a.select(".legend").style("display", "none");
        a.classed("no-grid", !ZS(o)); var f = a.select(".chart"),
            d = f.node().offsetWidth,
            h = nO[s],
            g = function(t, e) { var n = t.fields.slice(1).map((function(t, e) { return [e + 1] })); if (t.config.smallMultiplesGrouping) { var i = t.config.smallMultiplesGrouping.groupBy,
                        r = Math.ceil((t.fields.length - 1) / i);
                    n = eO(r).map((function(e) { var n = eO(i).map((function(t) { return e * i + t + 1 })).filter((function(e) { return e < t.fields.length })); return [n[0], n[n.length - 1]] })) } if (t.config.splitMultiples || e.splitMultiples) { n = (e.splitMultiples || t.config.splitMultiples).split(",").map((function(t) { return t.trim().split("-").map((function(t) { return Number(t) })) })) } return n.map((function(e) { var n = Pe(e, 2),
                        i = n[0],
                        r = n[1];
                    r = r || i; var o = vf(t);
                    t.fields[i].caption = null, o.fields = [t.fields[0]]; for (var a = function(e) { o.fields.push(t.fields[e]), t.annotations && (o.annotations = t.annotations.filter((function(t) { return t.series === e + 1 })).map((function(t) { return t.series = e - i + 1, t }))) }, s = i; s <= r; s++) a(s); return o.data = o.data.map((function(t) { for (var e = [t[0]], n = i; n <= r; n++) e.push(t[n]); return e })), o })).map((function(t, n) { return oO(t, e, n) })) }(e, o.options),
            p = g,
            v = Math.ceil(f.node().offsetWidth / p.length) - 6,
            m = f.node().offsetWidth / tA(e); if (v < o.options.minimumBoxWidth) { var y = Math.ceil(o.options.minimumBoxWidth * p.length / f.node().offsetWidth);
            v = f.node().offsetWidth / Math.ceil(p.length / y) - 6, m /= y } m = Math.max(m, o.options.minimumBoxHeight); var x = Math.floor(d / v),
            b = o.options.gutterWidth * (x - 1) / x;
        o.options.pieOuterRadius = Math.max(o.options.pieMinRadius || 0, Math.min(o.options.pieMaxRadius || 1e3, (v - 50) / 2 - 20)), o.options.layoutManager.minHeight = m, a.selectAll(".chart > svg").remove(); var $ = f.selectAll(".spread").data(g); return $.exit().remove(), $.enter().append("div").attr("class", (function(t, e) { return "spread spread-" + e })).merge($).style("width", v - b + "px").style("padding-right", (function(t, e) { return e % x == x - 1 ? 0 : o.options.gutterWidth + "px" })), f.selectAll(".spread").each((function(t, e) { var n = Ep(this),
                i = Se(Se({}, o.options), {}, { multiplesIndex: e });
            n.selectAppend("div.title").text(g[e].fields[1].name); var a = n.selectAppend("div.toaster-chart"),
                s = h(a.node(), g[e], i);
            r.push({ el: n, env: s.getEnv() }) })), gd(o), lM(iO, r, i) }

    function rO(t) { return function(e) { e.each((function(e) { var n = Ep(this).selectAppend("ul.simple-legend").selectAll("li").data(t);
                n.exit().remove(), (n = n.merge(n.enter().append("li"))).selectAppend("span").attr("class", (function(t, e) { return "swatch bg series-" + e })).classed("highlight-legend", (function(t) { return t.isHighlight })), n.selectAppend("label").text((function(t) { return t.name })), 0 === t.length && Ep(this).classed("hidden", !0) })) } }

    function oO(t, e, n) { var i = null; if (t.config.smallMultiplesAxis && (i = t.config.smallMultiplesAxis[n]), e.multiples && (e.multiples[n + 1] || e.multiples[n + 1 + ""])) { var r = e.multiples[n + 1] || e.multiples[n + 1 + ""];
            i = Se(Se({}, i), {}, { newOptions: r }) } return i ? function(t, e) { return t.secondaryAxis = t.secondaryAxis || {}, Vr(e, "precision") && (t.chartOptions.decimalPlaces = e.precision, t.secondaryAxis.decimal_places = e.precision), Vr(e, "tooltipPrecision") && (t.chartOptions.tooltipDecimals = e.tooltipPrecision, t.secondaryAxis.tooltip_decimals = e.tooltipPrecision), Vr(e, "prefix") && (t.fields[1].unit_before = e.prefix, t.secondaryAxis.unit_before = e.prefix), Vr(e, "postfix") && (t.fields[1].unit_after = e.postfix, t.secondaryAxis.unit_after = e.postfix), Vr(e, "unitBefore") && (t.fields[1].unitBefore = e.unitBefore, t.secondaryAxis.unit_before = e.unitBefore, t.chartOptions.unitBefore = e.unitBefore), Vr(e, "unitAfter") && (t.fields[1].unitAfter = e.unitAfter, t.secondaryAxis.unit_after = e.unitAfter, t.chartOptions.unitAfter = e.unitAfter), Vr(e, "isPercent") && (t.fields[1].display_as = e.isPercent ? "%" : "", t.secondaryAxis.display_as = e.isPercent ? "%" : ""), ["scaleEnd", "scaleStart", "scaleStep", "label"].forEach((function(n) { Vr(e, n) && (t.chartOptions[n] = e[n]) })), t }(t, ju(vf(e), i)) : t }

    function aO(t, e, n) { n = ju({ defaultBoxType: "line", minimumBoxWidth: 170, minimumBoxHeight: 180, disableGrid: !0, disableDomain: !0, gutterWidth: 25, renderStyleBreakpoint: 250, disablePieLabels: !0, pieOuterRadius: 120, pieMinRadius: 20, automaticRadius: !1, forceTickAtDomainTop: !0, minimumTicks: 2, verticalBarsOnly: !0, colorSeriesOptions: [
                [wl, ic, Al],
                ["#ff415f", ic, "#00c88a"]
            ], layoutManager: { minHeight: 300 } }, n); var i = [],
            r = { x: null, y: null, r: null, options: ke({}, n) },
            o = Ep(t).classed("toaster-chart-spread", !0);
        Bk(e, !1, n), r.data = e; var a = 0;
        e.config.series_color_style && (a = Number(e.config.series_color_style)), null != n.colorSeries && (a = Number(n.colorSeries)), n.editorHooks && n.editorHooks.colorSeries && n.editorHooks.colorSeries(n.colorSeriesOptions, a); var s = o.select(".chart"),
            l = s.node().offsetWidth,
            c = tE,
            u = e.fields.slice(1).filter((function(t, e) { return e % 2 == 0 }));
        r.options.widget && (u = [u[0]]); var f = Math.ceil(l / u.length) - 6,
            d = l / tA(e),
            h = 1;
        f < r.options.minimumBoxWidth && (h = Math.ceil(r.options.minimumBoxWidth * u.length / l), f = l / Math.ceil(u.length / h) - 6, d /= h), d = Math.max(d, r.options.minimumBoxHeight); var g = Math.floor(l / f),
            p = r.options.gutterWidth * (g - 1) / g; if (r.options.pieOuterRadius = (f - 50) / 2 - 20, r.options.widget && (r.options.pieOuterRadius = 55), r.options.layoutManager.minHeight = d, o.select(".legend").style("display", "none"), o.classed("no-grid", !ZS(r)).classed("no-domain", !JS(r)), 2 === e.fields.length) s.call(ZE(r.options, a)), i.push({ env: r, el: o });
        else { var v = f < r.options.renderStyleBreakpoint;
            n.layers = [sO(e, v, a)]; var m = function(t, e) { return t.fields.slice(1).filter((function(t, e) { return e % 2 == 0 })).map((function(e, n) { var i = vf(t),
                            r = 2 * n + 1; return e.caption = null, i.fields = [t.fields[0], i.fields[r]], i.data = i.data.map((function(t) { return [t[0], t[r]] })), i.annotations && (i.annotations = i.annotations.filter((function(t) { return t.series === r })).map((function(t) { return t.series = 1, t }))), i })).map((function(t, n) { return oO(t, e, n) })) }(e, r.options),
                y = s.selectAll(".spread").data(m),
                x = {};
            v ? x.forceNoTicks = !0 : (x.curveType = "stepAfter", x.layoutManager = { yAxisInnerPadding: 22, xAxisExtendRight: 50 }); var b = ju(x, r.options);
            y.exit().remove(), y.enter().append("div").attr("class", (function(t, e) { return "spread spread-" + e })).merge(y).style("width", f - p + "px").style("padding-right", (function(t, e) { return e % g == g - 1 ? 0 : r.options.gutterWidth + "px" })), s.selectAll(".spread").each((function(t, n) { var r, o, a = Ep(this),
                    s = ke(b, { tooltipPostRender: (r = e, o = n, function(t, e, n, i) { var a = 1 + 2 * o + 1,
                                s = r.data[i][a];
                            e.select(".tooltip-values").append("div").classed("tooltip-value", !0).style("padding-top", "3px").style("line-height", "1").text("Score: ".concat(s)) }) });
                a.selectAppend("div.title").text((function(t) { return m[n] ? m[n].fields[1].name : "" })), a.selectAppend("div.score-title").html((function(t) { var i = function(t, e) { var n = 2 * e + 2,
                            i = t.data.length - 1; return t.data[i][n] }(e, n); return "<span>Score:</span> ".concat(i) })); var l = a.selectAppend("div.toaster-chart"),
                    u = c(l.node(), m[n], s);
                i.push({ el: a, env: u.getEnv() }) })) } return gd(r), lM(aO, i, n) }

    function sO(t, e, n) { return function(i, r, o, a) { var s = r.select(".draw-container"),
                l = s.select(".line-group .line").attr("d").split("L").map((function(t) { return t.replace("M", "") })),
                c = a.selectIndex;
            s.selectAll(".perf-group").remove(), s.insert("g", ".annotations").classed("perf-group", !0).classed("red-green", 1 === n); var u = s.select("g.perf-group"); if (e) { var f = [],
                    d = bd(t, !0, o.options.forceCategorical);
                t.data.forEach((function(e, n) { f.push({ line: "M".concat(l[2 * n], "L").concat(l[2 * n + 1]), x: o.x.scale(d(n)), y: o.y.scale(e[1 + 2 * c]), value: t.data[n][1 + 2 * c + 1] }) })), u.selectAll(".circle").data(f).enter().append("circle").attr("cx", (function(t) { return t.x })).attr("cy", (function(t) { return t.y })).attr("r", 5).attr("class", (function(t, e) { return "score-" + t.value })) } else { for (var h = [], g = 0; g < l.length / 2; g++)
                    if (l[2 * g + 1] && t.data[g]) h.push({ line: "M".concat(l[2 * g], "L").concat(l[2 * g + 1]), value: t.data[g][1 + 2 * c + 1] });
                    else if (l[2 * g] && t.data[g]) { var p = l[2 * g].split(",").map((function(t) { return Number(t) })),
                        v = h[h.length - 1].line.replace("M", "").split("L").map((function(t) { return t.split(",") })),
                        m = Number(v[1][0]) - Number(v[0][0]),
                        y = "".concat(p[0] + m, ",").concat(p[1]);
                    h.push({ line: "M".concat(l[2 * g], "L").concat(y), value: t.data[g][1 + 2 * c + 1] }) } var x = u.selectAll(".line").data(h);
                x.enter().append("path").attr("stroke-width", "10").attr("class", (function(t, e) { return "score-" + t.value })).merge(x).attr("d", (function(t) { return t.line })) } } }

    function lO(t, e, n) { var i, r, o = n.transition,
            a = void 0 === o ? {} : o,
            s = a.type,
            l = void 0 === s ? "default" : s; return Se(Se({}, "synced" === l ? (i = cO(), r = uO("synced"), { normalizeSpeed: !1, stageHandler: i, playHandler: r }) : "chained" === l ? function(t, e, n) { var i = cO(),
                r = uO("chained"); return { duration: 2e3, normalizeSpeed: !1, stageHandler: i, playHandler: r, interruptHandler: function() { return null } } }() : function(t, e, n) { var i = cO(),
                r = uO("staggered"); return { duration: 3e3, normalizeSpeed: !1, stageHandler: i, playHandler: r, interruptHandler: function() { return null } } }()), a) }

    function cO(t) { return function(t, e, n) { var i = t.selectAll("rect.dumbbell-bar").nodes(),
                r = t.selectAll("circle.dumbbell-value").nodes(),
                o = "vertical" === e.layout.orientation(),
                a = dk(e.data).length > 1,
                s = "y",
                l = "height";
            o && (s = "x", l = "width"), i.forEach((function(t, n) { var i = Ep(t),
                    r = Number(i.attr(l)),
                    c = Number(i.attr(s)),
                    u = o ? e.x.scale(0) : e.y.scale(0),
                    f = u;
                a && (f = c > u ? c : c - r), i.attr(l, 0).attr(s, f).attr("data-transition-".concat(s), c).attr("data-transition-".concat(l), r) })), r.forEach((function(t, n) { var i = Ep(t),
                    r = o ? "cx" : "cy",
                    a = Number(i.attr(r)),
                    s = o ? e.x.scale(0) : e.y.scale(0);
                i.attr(l, 0).attr(r, s).attr("data-transition-".concat(r), a) })), PC(t), LC(t) } }

    function uO(t) { return TC((function(e, n, i) { var r = n.data,
                o = i.delay,
                a = i.duration,
                s = i.normalizeSpeed,
                l = i.barDuration,
                c = void 0 === l ? 800 : l,
                u = e.selectAll("rect.dumbbell-bar").nodes(),
                f = e.selectAll("circle.dumbbell-value").nodes(),
                d = a - c,
                h = "staggered" === t ? d / (r.data.length * (r.fields.length - 1)) : d,
                g = n.y.rangeLength(),
                p = [],
                v = "y",
                m = "height",
                y = "vertical" === n.layout.orientation(); return y && (v = "x", m = "width"), u.forEach((function(t, e) { var n = Ep(t),
                    i = Number(n.attr("data-transition-".concat(m))),
                    r = Number(n.attr("data-transition-".concat(v))),
                    a = s ? i / g : 1,
                    l = n.transition().ease(_y).duration(h + c * a).delay(o + e * h).attr(m, i).attr(v, r);
                p.push(l) })), f.forEach((function(t, e) { var n = Ep(t),
                    i = y ? "cx" : "cy",
                    r = Number(n.attr("data-transition-".concat(i))),
                    a = Math.abs(Number(n.attr(i)) - r),
                    l = s ? a / g : 1,
                    u = n.transition().ease(_y).duration(h + c * l).delay(o + e * h).attr(i, r);
                p.push(u) })), p.concat(BC(e, n, i)), p.concat(zC(e, n, i)), p })) }

    function fO(t, e, n) { var i = { columnWidthBreakpointMin: 30, columnWidthBreakpointMax: 1250, textLengthBreakpoint: 12, columnWidthLongTextBreakpoint: 110, smallWidthBreakpoint: 500, mobileWidthBreakpoint: 380, tooltipOffsetX: 7, tooltipOffsetY: 7, tooltipLineHeight: 30, tooltipMaxWidth: 160, tooltipAnchorSize: 4, dateAxisInnerPadding: 15, preventCondensedAnnotations: !0, isDumbbell: !0, stackedBand: !1, horizontalLayoutPadding: 10, layoutManager: { yAxisInnerPadding: 0, xAxisExtendRight: 3, minHeightHorizontal: 0, margin: { top: 10, right: 0, bottom: 0, left: 8 } }, bandAxis: { horizontalBarPadding: .2, horizontalBarPaddingCondensed: .12, horizontalBarHeight: 32, horizontalBarHeightLarge: 50, horizontalBarHeightCondensed: 24, axisTextLineHeightHorizontal: 15, axisTextLineHeight: 18, verticalAxisWrapWidth: 300 }, linearAxis: {}, transition: Se({}, lO(0, 0, n)) },
            r = ju(i, n),
            o = Ep(t).classed("toaster-chart-dumbbell", !0).classed("transition-stage", sM(r));
        jC(e); var a = rA(o, e, r),
            s = HC(o, e, Se(Se({}, a.options), {}, { stackedBand: !0 })),
            l = o.node().offsetWidth,
            c = VS,
            u = IS,
            f = !1,
            d = !1;
        s || (f = FS(o, e, a.options), d = WS(o, e, a.options)); var h = a.options.layoutManager.minHeight,
            g = 0;
        h && (g = h / NS(a.data, !0)), s && (e.config && e.config.sort_by_value && !Vk(e) && (qk(e) ? $k(e, { stacked: !1, direction: "ascending" }) : $k(e, { stacked: !1 })), e.data.length <= 5 ? a.options.bandAxis.horizontalBarHeight = a.options.bandAxis.horizontalBarHeightLarge : e.data.length > 15 && (a.options.bandAxis.horizontalBarHeight = a.options.bandAxis.horizontalBarHeightCondensed), a.options.screenshotMode && (a.options.bandAxis.horizontalBarHeight = Math.max(g, a.options.bandAxis.horizontalBarHeight)), xl(l, a.options) && (a.options.bandAxis.axisTextLineHeightHorizontal = 12, a.options.bandAxis.verticalAxisWrapWidth = 180), c = US, u = jS, a.options.disableGrid = !1, a.options.layoutManager.margin.top = 0, a.options.layoutManager.margin.bottom = 20, a.options.layoutManager.margin.right = 30, a.options.layoutManager.margin.left = 0, a.options.layoutManager.yAxisInnerPadding = a.options.horizontalLayoutPadding, a.options.layoutManager.verticalAxisShift = -5), o.classed("vertical-flow", s); var p = dk(e).length > 1,
            v = Se({ isPrimaryAxis: !0, stackedBand: !0, isDateAxis: f, isContinuousAxis: d }, a.options.bandAxis),
            m = Se({ isPrimaryAxis: !1, domainFromZero: !p, stackedDomain: !1 }, a.options.linearAxis),
            y = iD(Se({ primaryAxis: tD(v), secondaryAxis: JA(m), orientation: c, yAxisPosition: u, yAxisInnerPadding: f ? a.options.dateAxisInnerPadding : void 0 }, a.options.layoutManager)),
            x = o.selectAppend("div.chart");
        x.selectAll("*").remove(), x.call(y, a); var b = y.draw().classed("dumbbell", !0),
            $ = a.x.rangeLength() + y.xAxisExtendRight() + 2 * y.yAxisInnerPadding(),
            w = s && !a.options.disableGrid || ZS(a); if (o.classed("no-grid", !w).classed("no-domain", !JS(a)).classed("no-axis", a.options.disableGrid), c === VS ? b.selectAppend("g.grid").call($A({ length: $ }), a) : ($ = a.y.rangeLength() + 2 * y.xAxisInnerPadding(), b.selectAppend("g.grid").call($A({ length: $, orientation: qS, hideBottomValueTick: !1, extendVerticalZeroTick: !0, gridTransform: [0, 0] }), a)), !s && e.config.highlightRanges) { var _ = e.config.highlightRanges,
                k = _.ranges,
                M = _.rangeStyle;
            b.selectAppend("g.highlight-ranges").call(rD({ ranges: k, rangeStyle: M, isColumnType: !0 }), a) } return b.call(function(t) { var e = Se({ dumbbellRadius: 6, barWidth: 2, verticalColumnMinLength: 1, horizontalColumnMinLength: 2 }, t),
                n = e.xScale,
                i = e.yScale,
                r = e.seriesOffset || 0;

            function o(t) { t.each((function(t) { var o = Ep(this).classed("dumbbell-column", !0);
                    o.selectAll(".bounding-rect").remove(), o.append("rect").classed("bounding-rect", !0).attr("x", n.range()[0]).attr("width", n.range()[1]).attr("y", i.range()[1]).attr("height", i.range()[0]).attr("fill", "transparent"); var a = e.orientation === VS,
                        s = bd(t, !0, !0),
                        l = e.seriesData || dk(t),
                        c = ax().domain(Ip(1)),
                        u = Sk(t),
                        f = e.barWidth / 2,
                        d = a ? n.bandwidth() / 2 : i.bandwidth() / 2;
                    a ? c.rangeRound([0, n.bandwidth()]) : c.rangeRound([0, i.bandwidth()]); var h = function(t) { return t.map((function(t) { return null == t ? 0 : t })) };
                    c.bandwidth(); var g = o.selectAppend("g.bar-group"),
                        p = o.selectAll(".series").data(l);
                    p.exit().remove(), p = p.enter().append("g").attr("class", (function(t, e) { return "series f series-" + (e + r) })).merge(p); var v = g.selectAll(".dumbbell-bar").data((function(t) { return t.data })),
                        m = p.selectAll(".dumbbell-value").data((function(t) { return t.data }));
                    v.exit().remove(), m.exit().remove(), a ? (v.enter().append("rect").merge(v).attr("class", (function(t, e) { if (l.length > 2) return "dumbbell-bar"; var n = h(t.slice(1)),
                            i = Kp(n),
                            r = n.indexOf(i); return "dumbbell-bar f series-".concat(r) })).classed("highlight", u).attr("x", (function(t, e) { return n(s(e)) + d - f })).attr("y", (function(t, e) { if (1 === l.length) return i(Math.max(0, Fr(t[1]))); var n = Kp(h(t.slice(1))); return i(Fr(n)) })).attr("width", e.barWidth).attr("height", (function(t, e) { if (null == t) return 0; if (1 === l.length) return Math.abs(i(Fr(t[1])) - i(Fr(0))); var n = Kp(h(t.slice(1))),
                            r = Jp(h(t.slice(1))); return null == n ? 0 : Math.abs(i(Fr(n)) - i(Fr(r))) })), m.enter().append("circle").attr("class", "dumbbell-value").merge(m).classed("highlight", u).attr("r", e.dumbbellRadius).attr("cx", (function(t, e) { return n(s(e)) + d })).attr("cy", (function(t) { return i(Fr(t)) }))) : (v.enter().append("rect").merge(v).attr("class", (function(t, e) { if (l.length > 2) return "dumbbell-bar"; var n = h(t.slice(1)),
                            i = Kp(n),
                            r = n.indexOf(i); return "dumbbell-bar f series-".concat(r) })).classed("highlight", u).attr("y", (function(t, e) { return i(s(e)) + d - f })).attr("x", (function(t, e) { if (1 === l.length) return n(Math.min(0, Fr(t[1]))); var i = Jp(h(t.slice(1))); return n(Fr(i)) })).attr("height", e.barWidth).attr("width", (function(t, e) { if (null == t) return 0; if (1 === l.length) return Math.abs(n(Fr(t[1])) - n(Fr(0))); var i = Kp(h(t.slice(1))),
                            r = Jp(h(t.slice(1))); return null == i ? 0 : Math.abs(n(Fr(i)) - n(Fr(r))) })), m.enter().append("circle").attr("class", "dumbbell-value").merge(m).classed("highlight", u).attr("r", e.dumbbellRadius).attr("cy", (function(t, e) { return i(s(e)) + d })).attr("cx", (function(t) { return n(Fr(t)) }))) })) } return o.xScale = function(t) { return arguments.length ? (n = t, o) : n }, o.yScale = function(t) { return arguments.length ? (i = t.copy(), o) : i }, o }(Se(Se({}, a.options), {}, { xScale: a.x.scale, yScale: a.y.scale, orientation: c })), a), GA(a, s), yA(b, e.annotations, a), s || e.config.thresholds && b.selectAppend("g.threshold-lines").call(oD(Se(Se({}, a.options), {}, { thresholds: e.config.thresholds })), a), x.call((function(t, e, n) { if (n.config && !e.options.disableLabels)
                if (t.selectAll(".label-bottom").remove(), void 0 === n.config.labelPrimary) { if (n.primaryAxis) { var i = n.primaryAxis.label || n.primaryAxis.caption;
                        i && t.selectAppend("div.chart-footer").append("div").classed("label-bottom", !0).text(i) } } else n.config.labelPrimary && t.selectAppend("div.chart-footer").append("div").classed("label-bottom", !0).text(n.config.labelPrimary) }), a, e), y.overflowScale(), a.options.disableTooltip || e.config.disableTooltip || aA({ chart: x, area: b, env: a, isDumbbell: !0 }), gd(a), lM(b, [{ env: a, el: o }], r) }

    function dO(t) { SM(t, "svelte-19d7t0l", "table.container.svelte-19d7t0l.svelte-19d7t0l{border-spacing:0;border:none;color:inherit;font-size:14px}.box-outer.svelte-19d7t0l.svelte-19d7t0l{padding-right:4px}.box-inner.svelte-19d7t0l.svelte-19d7t0l{width:100%;bottom:0;height:1px}.value.svelte-19d7t0l.svelte-19d7t0l{font-size:32px;margin-top:7px;line-height:29px}.change.svelte-19d7t0l.svelte-19d7t0l{font-size:14px;margin-bottom:6px}.change.svelte-19d7t0l .num.svelte-19d7t0l{font-size:32px}td.box-cell.svelte-19d7t0l.svelte-19d7t0l{vertical-align:bottom}td.label-cell.svelte-19d7t0l.svelte-19d7t0l{vertical-align:top;padding-right:7px}td:last-child.label-cell.svelte-19d7t0l.svelte-19d7t0l{padding-right:0}@media(max-width: 480px){.value.svelte-19d7t0l.svelte-19d7t0l{font-size:22px;margin-top:9px;line-height:20px}}") }

    function hO(t, e, n) { var i = t.slice(); return i[24] = e[n][0], i[25] = e[n][1], i[27] = n, i }

    function gO(t, e, n) { var i = t.slice(); return i[24] = e[n][0], i[25] = e[n][1], i[27] = n, i }

    function pO(t) { var e, n, i, r, o = t[3](t[1]) + ""; return { c: function() { e = EM("div"), n = EM("span"), i = TM(o), r = TM(" change"), zM(n, "class", "num svelte-19d7t0l"), zM(e, "class", "change svelte-19d7t0l") }, m: function(t, o) { AM(t, e, o), MM(e, n), MM(n, i), MM(e, r) }, p: function(t, e) { 10 & e && o !== (o = t[3](t[1]) + "") && FM(i, o) }, d: function(t) { t && DM(e) } } }

    function vO(t) { var e, n, i, r, o; return { c: function() { e = EM("td"), n = EM("div"), i = EM("div"), o = PM(), zM(i, "class", _M("box-inner bg series-".concat(t[27])) + " svelte-19d7t0l"), zM(i, "style", r = "\n              height: ".concat(t[9] ? t[5](t[25]) : t[7](Math.sqrt(t[25])), "px;\n              width: ").concat(t[9] ? t[6] : t[7](Math.sqrt(t[25])), "px;\n            ")), zM(n, "class", "box-outer svelte-19d7t0l"), zM(e, "class", "box-cell svelte-19d7t0l") }, m: function(t, r) { AM(t, e, r), MM(e, n), MM(n, i), MM(e, o) }, p: function(t, e) { 740 & e && r !== (r = "\n              height: ".concat(t[9] ? t[5](t[25]) : t[7](Math.sqrt(t[25])), "px;\n              width: ").concat(t[9] ? t[6] : t[7](Math.sqrt(t[25])), "px;\n            ")) && zM(i, "style", r) }, d: function(t) { t && DM(e) } } }

    function mO(t) { var e, n, i, r, o, a, s, l, c = t[8](t[25]) + "",
            u = t[24] + ""; return { c: function() { e = EM("td"), n = EM("div"), i = TM(c), r = PM(), o = EM("div"), a = TM(u), s = PM(), zM(n, "class", "value svelte-19d7t0l"), zM(o, "class", "label"), zM(e, "class", "label-cell svelte-19d7t0l"), zM(e, "style", l = "\n          min-width: ".concat(t[9] ? t[6] : t[7](Math.sqrt(t[25])), "px;\n          max-width: ").concat((t[9] ? t[6] : t[7](Math.sqrt(t[25]))) + xO, "px;\n        ")) }, m: function(t, l) { AM(t, e, l), MM(e, n), MM(n, i), MM(e, r), MM(e, o), MM(o, a), MM(e, s) }, p: function(t, n) { 260 & n && c !== (c = t[8](t[25]) + "") && FM(i, c), 4 & n && u !== (u = t[24] + "") && FM(a, u), 708 & n && l !== (l = "\n          min-width: ".concat(t[9] ? t[6] : t[7](Math.sqrt(t[25])), "px;\n          max-width: ").concat((t[9] ? t[6] : t[7](Math.sqrt(t[25]))) + xO, "px;\n        ")) && zM(e, "style", l) }, d: function(t) { t && DM(e) } } }

    function yO(t) { for (var e, n, i, r, o, a = t[4] && pO(t), s = t[2], l = [], c = 0; c < s.length; c += 1) l[c] = vO(gO(t, s, c)); for (var u = t[2], f = [], d = 0; d < u.length; d += 1) f[d] = mO(hO(t, u, d)); return { c: function() { a && a.c(), e = PM(), n = EM("table"), i = EM("tr"); for (var t = 0; t < l.length; t += 1) l[t].c();
                r = PM(), o = EM("tr"); for (var s = 0; s < f.length; s += 1) f[s].c();
                zM(n, "class", "container svelte-19d7t0l") }, m: function(s, c) { a && a.m(s, c), AM(s, e, c), AM(s, n, c), MM(n, i); for (var u = 0; u < l.length; u += 1) l[u].m(i, null);
                MM(n, r), MM(n, o); for (var d = 0; d < f.length; d += 1) f[d].m(o, null);
                t[23](n) }, p: function(t, n) { var r = Pe(n, 1)[0]; if (t[4] ? a ? a.p(t, r) : ((a = pO(t)).c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null), 740 & r) { var c; for (s = t[2], c = 0; c < s.length; c += 1) { var d = gO(t, s, c);
                        l[c] ? l[c].p(d, r) : (l[c] = vO(d), l[c].c(), l[c].m(i, null)) } for (; c < l.length; c += 1) l[c].d(1);
                    l.length = s.length } if (964 & r) { var h; for (u = t[2], h = 0; h < u.length; h += 1) { var g = hO(t, u, h);
                        f[h] ? f[h].p(g, r) : (f[h] = mO(g), f[h].c(), f[h].m(o, null)) } for (; h < f.length; h += 1) f[h].d(1);
                    f.length = u.length } }, i: cM, o: cM, d: function(i) { a && a.d(i), i && DM(e), i && DM(n), CM(l, i), CM(f, i), t[23](null) } } } iO.validateData = function(t, e) { var n = LS(t); return n("Line chart must have more than one value.", Nk), n("Line should be a time series", Vk), n }, aO.validateData = function(t, e) { var n = LS(t); return n("Line chart must have more than one value.", Nk), n("Line should be a time series", Vk), n }; var xO = 35;

    function bO(t, e, n) { var i, r, o, a, s, l, c, u, f, d, h, g, p, v, m, y, x, b, $, w, _ = e.env,
            k = e.options,
            M = void 0 === k ? {} : k,
            S = e.chartData,
            A = void 0 === S ? { fields: [], data: [], config: {}, chartOptions: {} } : S; return t.$$set = function(t) { "env" in t && n(10, _ = t.env), "options" in t && n(11, M = t.options), "chartData" in t && n(12, A = t.chartData) }, t.$$.update = function() { 6144 & t.$$.dirty && n(9, i = !(M.comparisonSquareMode || A.config.comparisonSquareMode)), 4096 & t.$$.dirty && n(2, r = A.data.slice(0, 5)), 1 & t.$$.dirty && n(19, o = w ? w.parentNode.offsetWidth : 300), 524292 & t.$$.dirty && n(6, a = o / r.length), 5120 & t.$$.dirty && n(8, s = Q_(A.fields[1], _, { decimalPlaces: A.chartOptions.decimalPlaces, forceCommaDisplay: A.config.force_comma_display, displayStringsInNumericFields: !0 })), 4 & t.$$.dirty && n(17, l = r.map((function(t) { return Math.sqrt(t[1]) }))), 131072 & t.$$.dirty && n(22, c = l.reduce((function(t, e) { return t + e }), 0)), 131072 & t.$$.dirty && n(21, u = Math.max.apply(Math, Be(l))), 131072 & t.$$.dirty && n(18, f = 12 * (l.length - 1)), 7077888 & t.$$.dirty && n(20, d = Math.min(u / c * (o - f), (o - f) / 2)), 3145728 & t.$$.dirty && n(7, h = $x().domain([0, u]).range([0, d])), 4096 & t.$$.dirty && n(15, g = 1 / tA(A) * 400), 4 & t.$$.dirty && n(16, p = Math.max.apply(Math, Be(r.map((function(t) { return t[1] }))))), 917504 & t.$$.dirty && n(6, a = (o - f) / l.length), 98304 & t.$$.dirty && n(5, v = $x().domain([0, p]).range([0, g])), 4096 & t.$$.dirty && n(4, m = A.config.showPercentageChange || A.chartOptions.showPercentChange), 4 & t.$$.dirty && n(13, y = r[0][1]), 4 & t.$$.dirty && n(14, x = r[r.length - 1][1]), 24576 & t.$$.dirty && n(1, b = (x - y) / y), 2 & t.$$.dirty && n(3, $ = Math.abs(b) < .1 ? jd("+,.1%") : jd("+,.0%")) }, [w, b, r, $, m, v, a, h, s, i, _, M, A, y, x, g, p, l, f, o, d, u, c, function(t) { tS[t ? "unshift" : "push"]((function() { n(0, w = t) })) }] } var $O = function(t) { Ae(n, t); var e = Te(n);

        function n(t) { var i; return be(this, n), wS(Ee(i = e.call(this)), t, bO, yO, pM, { env: 10, options: 11, chartData: 12 }, dO), i } return we(n, [{ key: "env", get: function() { return this.$$.ctx[10] }, set: function(t) { this.$$set({ env: t }), lS() } }, { key: "options", get: function() { return this.$$.ctx[11] }, set: function(t) { this.$$set({ options: t }), lS() } }, { key: "chartData", get: function() { return this.$$.ctx[12] }, set: function(t) { this.$$set({ chartData: t }), lS() } }]), n }(_S);

    function wO(t, e, n) { n = n || {}; var i = t.querySelector(".chart"),
            r = { el: t, data: e, options: n };
        dd(e, n), Bk(e, !0, n), i.innerHTML = ""; var o = new $O({ target: i, props: { env: r, chartData: e, options: n } }); return gd(r), o } var _O = !a((function() { return Object.isExtensible(Object.preventExtensions({})) })),
        kO = i((function(t) { var e = O.f,
                n = U("meta"),
                i = 0,
                r = Object.isExtensible || function() { return !0 },
                o = function(t) { e(t, n, { value: { objectID: "O" + ++i, weakData: {} } }) },
                a = t.exports = { REQUIRED: !1, fastKey: function(t, e) { if (!x(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t; if (!w(t, n)) { if (!r(t)) return "F"; if (!e) return "E";
                            o(t) } return t[n].objectID }, getWeakData: function(t, e) { if (!w(t, n)) { if (!r(t)) return !0; if (!e) return !1;
                            o(t) } return t[n].weakData }, onFreeze: function(t) { return _O && a.REQUIRED && r(t) && !w(t, n) && o(t), t } };
            G[n] = !0 }));
    kO.REQUIRED, kO.fastKey, kO.getWeakData, kO.onFreeze; var MO = O.f,
        SO = kO.fastKey,
        AO = nt.set,
        DO = nt.getterFor,
        CO = { getConstructor: function(t, e, n, i) { var r = t((function(t, o) { fD(t, r, e), AO(t, { type: e, index: qe(null), first: void 0, last: void 0, size: 0 }), s || (t.size = 0), null != o && pf(o, t[i], { that: t, AS_ENTRIES: n }) })),
                    o = DO(e),
                    a = function(t, e, n) { var i, r, a = o(t),
                            c = l(t, e); return c ? c.value = n : (a.last = c = { index: r = SO(e, !0), key: e, value: n, previous: i = a.last, next: void 0, removed: !1 }, a.first || (a.first = c), i && (i.next = c), s ? a.size++ : t.size++, "F" !== r && (a.index[r] = c)), t },
                    l = function(t, e) { var n, i = o(t),
                            r = SO(e); if ("F" !== r) return i.index[r]; for (n = i.first; n; n = n.next)
                            if (n.key == e) return n }; return uD(r.prototype, { clear: function() { for (var t = o(this), e = t.index, n = t.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete e[n.index], n = n.next;
                        t.first = t.last = void 0, s ? t.size = 0 : this.size = 0 }, delete: function(t) { var e = this,
                            n = o(e),
                            i = l(e, t); if (i) { var r = i.next,
                                a = i.previous;
                            delete n.index[i.index], i.removed = !0, a && (a.next = r), r && (r.previous = a), n.first == i && (n.first = r), n.last == i && (n.last = a), s ? n.size-- : e.size-- } return !!i }, forEach: function(t) { for (var e, n = o(this), i = Lt(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.next : n.first;)
                            for (i(e.value, e.key, this); e && e.removed;) e = e.previous }, has: function(t) { return !!l(this, t) } }), uD(r.prototype, n ? { get: function(t) { var e = l(this, t); return e && e.value }, set: function(t, e) { return a(this, 0 === t ? 0 : t, e) } } : { add: function(t) { return a(this, t = 0 === t ? 0 : t, t) } }), s && MO(r.prototype, "size", { get: function() { return o(this).size } }), r }, setStrong: function(t, e, n) { var i = e + " Iterator",
                    r = DO(e),
                    o = DO(i);
                Xi(t, e, (function(t, e) { AO(this, { type: i, target: t, state: r(t), kind: e, last: void 0 }) }), (function() { for (var t = o(this), e = t.kind, n = t.last; n && n.removed;) n = n.previous; return t.target && (t.last = n = n ? n.next : t.state.first) ? "keys" == e ? { value: n.key, done: !1 } : "values" == e ? { value: n.value, done: !1 } : { value: [n.key, n.value], done: !1 } : (t.target = void 0, { value: void 0, done: !0 }) }), n ? "entries" : "values", !n, !0), ho(e) } };

    function EO(t) { SM(t, "svelte-ohsvll", ".standard-legend.svelte-ohsvll{list-style-type:none;padding:0;margin:2px 0}li.svelte-ohsvll{display:inline-block;padding-bottom:2px;margin-right:12px}li.svelte-ohsvll:last-child{margin-right:0}.swatch.svelte-ohsvll{position:relative;top:2px;display:inline-block;width:10px;height:10px;margin-right:5px;margin-bottom:2px;border:solid 1px transparent}.swatch.circle.svelte-ohsvll{border-radius:100%}.swatch.line.svelte-ohsvll{width:16px;height:2.5px;transform:rotate(-45deg) translate(8px, -1px);-webkit-transform:rotate(-45deg) translate(8px, -1px);margin-left:-8px;margin-right:9px;margin-bottom:0}.legend.hidden .standard-legend{display:none}") }

    function OO(t, e, n) { var i = t.slice(); return i[2] = e[n].type, i[3] = e[n].color, i[4] = e[n].stroke, i[5] = e[n].dashed, i[6] = e[n].text, i }

    function TO(t) { var e, n, i, r, o, a, s, l = t[6] + ""; return { c: function() { e = EM("li"), n = EM("span"), r = PM(), o = EM("span"), a = TM(l), s = PM(), zM(n, "class", i = "swatch " + t[2] + " svelte-ohsvll"), RM(n, "background-color", t[3]), RM(n, "border-color", t[4]), zM(o, "class", "label"), zM(e, "class", "svelte-ohsvll") }, m: function(t, i) { AM(t, e, i), MM(e, n), MM(e, r), MM(e, o), MM(o, a), MM(e, s) }, p: function(t, e) { 1 & e && i !== (i = "swatch " + t[2] + " svelte-ohsvll") && zM(n, "class", i), 1 & e && RM(n, "background-color", t[3]), 1 & e && RM(n, "border-color", t[4]), 1 & e && l !== (l = t[6] + "") && FM(a, l) }, d: function(t) { t && DM(e) } } }

    function PO(t) { var e, n, i, r, o, a, s, l = t[6] + ""; return { c: function() { e = EM("li"), n = EM("span"), r = PM(), o = EM("span"), a = TM(l), s = PM(), zM(n, "class", i = "swatch " + t[2] + " svelte-ohsvll"), RM(n, "border-color", t[3]), zM(o, "class", "label"), zM(e, "class", "svelte-ohsvll") }, m: function(t, i) { AM(t, e, i), MM(e, n), MM(e, r), MM(e, o), MM(o, a), MM(e, s) }, p: function(t, e) { 1 & e && i !== (i = "swatch " + t[2] + " svelte-ohsvll") && zM(n, "class", i), 1 & e && RM(n, "border-color", t[3]), 1 & e && l !== (l = t[6] + "") && FM(a, l) }, d: function(t) { t && DM(e) } } }

    function BO(t) { var e;

        function n(t, e) { return "line" === t[2] ? PO : TO } var i = n(t),
            r = i(t); return { c: function() { r.c(), e = BM() }, m: function(t, n) { r.m(t, n), AM(t, e, n) }, p: function(t, o) { i === (i = n(t)) && r ? r.p(t, o) : (r.d(1), (r = i(t)) && (r.c(), r.m(e.parentNode, e))) }, d: function(t) { r.d(t), t && DM(e) } } }

    function LO(t) { for (var e, n = t[0], i = [], r = 0; r < n.length; r += 1) i[r] = BO(OO(t, n, r)); return { c: function() { e = EM("ul"); for (var t = 0; t < i.length; t += 1) i[t].c();
                zM(e, "class", "standard-legend svelte-ohsvll") }, m: function(t, n) { AM(t, e, n); for (var r = 0; r < i.length; r += 1) i[r].m(e, null) }, p: function(t, r) { var o = Pe(r, 1)[0]; if (1 & o) { var a; for (n = t[0], a = 0; a < n.length; a += 1) { var s = OO(t, n, a);
                        i[a] ? i[a].p(s, o) : (i[a] = BO(s), i[a].c(), i[a].m(e, null)) } for (; a < i.length; a += 1) i[a].d(1);
                    i.length = n.length } }, i: cM, o: cM, d: function(t) { t && DM(e), CM(i, t) } } }

    function zO(t, e, n) { var i, r = e.config,
            o = void 0 === r ? {} : r; return t.$$set = function(t) { "config" in t && n(1, o = t.config) }, t.$$.update = function() { 2 & t.$$.dirty && n(0, i = o.items || []) }, [i, o] }! function(t, e, n) { var i = -1 !== t.indexOf("Map"),
            r = -1 !== t.indexOf("Weak"),
            s = i ? "set" : "add",
            l = o[t],
            c = l && l.prototype,
            u = l,
            f = {},
            d = function(t) { var e = c[t];
                it(c, t, "add" == t ? function(t) { return e.call(this, 0 === t ? 0 : t), this } : "delete" == t ? function(t) { return !(r && !x(t)) && e.call(this, 0 === t ? 0 : t) } : "get" == t ? function(t) { return r && !x(t) ? void 0 : e.call(this, 0 === t ? 0 : t) } : "has" == t ? function(t) { return !(r && !x(t)) && e.call(this, 0 === t ? 0 : t) } : function(t, n) { return e.call(this, 0 === t ? 0 : t, n), this }) }; if (Ot(t, "function" != typeof l || !(r || c.forEach && !a((function() {
                (new l).entries().next() }))))) u = n.getConstructor(e, t, i, s), kO.REQUIRED = !0;
        else if (Ot(t, !0)) { var h = new u,
                g = h[s](r ? {} : -0, 1) != h,
                p = a((function() { h.has(1) })),
                v = Vn((function(t) { new l(t) })),
                m = !r && a((function() { for (var t = new l, e = 5; e--;) t[s](e, e); return !t.has(-0) }));
            v || ((u = e((function(e, n) { fD(e, u, t); var r = Re(new l, e, u); return null != n && pf(n, r[s], { that: r, AS_ENTRIES: i }), r }))).prototype = c, c.constructor = u), (p || m) && (d("delete"), d("has"), i && d("get")), (m || g) && d(s), r && c.clear && delete c.clear } f[t] = u, Pt({ global: !0, forced: u != l }, f), Yi(u, t), r || n.setStrong(u, t, i) }("Set", (function(t) { return function() { return t(this, arguments.length ? arguments[0] : void 0) } }), CO); var YO = function(t) { Ae(n, t); var e = Te(n);

        function n(t) { var i; return be(this, n), wS(Ee(i = e.call(this)), t, zO, LO, pM, { config: 1 }, EO), i } return we(n, [{ key: "config", get: function() { return this.$$.ctx[1] }, set: function(t) { this.$$set({ config: t }), lS() } }]), n }(_S);

    function FO(t) { SM(t, "svelte-2wy44n", "ul.svelte-2wy44n.svelte-2wy44n{display:inline-block;list-style-type:none;padding:0;margin:0}ul.svelte-2wy44n li.svelte-2wy44n{display:inline-block;position:relative;margin-right:0}ul.svelte-2wy44n .swatch.svelte-2wy44n,.no-data-swatch.svelte-2wy44n.svelte-2wy44n{width:40px;height:10px;margin-right:0;display:block}ul.svelte-2wy44n .label.svelte-2wy44n,.no-data-label.svelte-2wy44n.svelte-2wy44n{white-space:nowrap;position:absolute;left:100%;top:14px;transform:translateX(-50%);font-size:14px}li.last-label.svelte-2wy44n .label.long.svelte-2wy44n{transform:translateX(-8px)}.gradient-group-nodata.svelte-2wy44n.svelte-2wy44n{position:relative;display:inline-block;margin-left:38px}.no-data-swatch.svelte-2wy44n.svelte-2wy44n{border:1px solid transparent;width:10px;height:8px}.no-data-label.svelte-2wy44n.svelte-2wy44n{left:50%}.mobile.svelte-2wy44n ul .swatch.svelte-2wy44n{width:30px}.mobile.svelte-2wy44n ul .label.svelte-2wy44n,.mobile.svelte-2wy44n .no-data-label.svelte-2wy44n{top:12px;font-size:12px}.mobile.svelte-2wy44n .gradient-group-nodata.svelte-2wy44n{margin-left:22px}") }

    function WO(t, e, n) { var i = t.slice(); return i[10] = e[n].color, i[11] = e[n].label, i[13] = n, i }

    function RO(t) { var e, n, i, r = t[11] + ""; return { c: function() { e = EM("div"), n = TM(r), zM(e, "class", i = "label " + (t[11].length > 3 ? "long" : "") + " svelte-2wy44n") }, m: function(t, i) { AM(t, e, i), MM(e, n) }, p: function(t, o) { 4 & o && r !== (r = t[11] + "") && FM(n, r), 4 & o && i !== (i = "label " + (t[11].length > 3 ? "long" : "") + " svelte-2wy44n") && zM(e, "class", i) }, d: function(t) { t && DM(e) } } }

    function NO(t) { var e, n, i, r, o, a = t[11] && RO(t); return { c: function() { e = EM("li"), n = EM("span"), i = PM(), a && a.c(), r = PM(), zM(n, "class", "swatch bg svelte-2wy44n"), RM(n, "background-color", t[10]), zM(e, "class", o = _M(t[13] === t[2].length - 2 ? "last-label" : "") + " svelte-2wy44n") }, m: function(t, o) { AM(t, e, o), MM(e, n), MM(e, i), a && a.m(e, null), MM(e, r) }, p: function(t, i) { 4 & i && RM(n, "background-color", t[10]), t[11] ? a ? a.p(t, i) : ((a = RO(t)).c(), a.m(e, r)) : a && (a.d(1), a = null), 4 & i && o !== (o = _M(t[13] === t[2].length - 2 ? "last-label" : "") + " svelte-2wy44n") && zM(e, "class", o) }, d: function(t) { t && DM(e), a && a.d() } } }

    function HO(t) { for (var e, n, i, r, o, a = t[2], s = [], l = 0; l < a.length; l += 1) s[l] = NO(WO(t, a, l)); var c = t[3] && function(t) { var e, n, i, r; return { c: function() { e = EM("div"), n = EM("div"), i = PM(), (r = EM("div")).textContent = "".concat(t[6]), zM(n, "class", "no-data-swatch svelte-2wy44n"), RM(n, "background-color", t[4]), RM(n, "border-color", t[5]), zM(r, "class", "no-data-label svelte-2wy44n"), zM(e, "class", "gradient-group-nodata svelte-2wy44n") }, m: function(t, o) { AM(t, e, o), MM(e, n), MM(e, i), MM(e, r) }, p: cM, d: function(t) { t && DM(e) } } }(t); return { c: function() { e = EM("div"), n = EM("div"), i = EM("ul"); for (var a = 0; a < s.length; a += 1) s[a].c();
                r = PM(), c && c.c(), zM(i, "class", "svelte-2wy44n"), zM(n, "class", "wrapper"), zM(e, "class", o = "gradient-legend " + (t[7] ? "dark" : "") + " " + (t[0] ? "mobile" : "") + " svelte-2wy44n") }, m: function(o, a) { AM(o, e, a), MM(e, n), MM(n, i); for (var l = 0; l < s.length; l += 1) s[l].m(i, null);
                MM(n, r), c && c.m(n, null), t[9](e) }, p: function(t, n) { var r = Pe(n, 1)[0]; if (4 & r) { var l; for (a = t[2], l = 0; l < a.length; l += 1) { var u = WO(t, a, l);
                        s[l] ? s[l].p(u, r) : (s[l] = NO(u), s[l].c(), s[l].m(i, null)) } for (; l < s.length; l += 1) s[l].d(1);
                    s.length = a.length } t[3] && c.p(t, r), 1 & r && o !== (o = "gradient-legend " + (t[7] ? "dark" : "") + " " + (t[0] ? "mobile" : "") + " svelte-2wy44n") && zM(e, "class", o) }, i: cM, o: cM, d: function(n) { n && DM(e), CM(s, n), c && c.d(), t[9](null) } } }

    function jO(t, e, n) { var i, r, o = e.config,
            a = void 0 === o ? {} : o,
            s = e.isMobile,
            l = void 0 !== s && s,
            c = a,
            u = c.displayNoData,
            f = void 0 !== u && u,
            d = c.noDataColor,
            h = void 0 === d ? "transparent" : d,
            g = c.noDataStroke,
            p = void 0 === g ? "black" : g,
            v = c.noDataText,
            m = void 0 === v ? "No Data" : v,
            y = c.darkTheme,
            x = void 0 !== y && y; return t.$$set = function(t) { "config" in t && n(8, a = t.config), "isMobile" in t && n(0, l = t.isMobile) }, t.$$.update = function() { 256 & t.$$.dirty && n(2, i = a.items || []) }, [l, r, i, f, h, p, m, x, a, function(t) { tS[t ? "unshift" : "push"]((function() { n(1, r = t) })) }] } var IO = function(t) { Ae(n, t); var e = Te(n);

        function n(t) { var i; return be(this, n), wS(Ee(i = e.call(this)), t, jO, HO, pM, { config: 8, isMobile: 0 }, FO), i } return we(n, [{ key: "config", get: function() { return this.$$.ctx[8] }, set: function(t) { this.$$set({ config: t }), lS() } }, { key: "isMobile", get: function() { return this.$$.ctx[0] }, set: function(t) { this.$$set({ isMobile: t }), lS() } }]), n }(_S);

    function VO(t) { SM(t, "svelte-1yi143h", ".scale-legend.svelte-1yi143h.svelte-1yi143h{margin:0;position:relative;z-index:1;pointer-events:none}.scale-legend.wide.svelte-1yi143h.svelte-1yi143h{min-width:220px}.scale-legend.dark.svelte-1yi143h.svelte-1yi143h{color:var(--bg)}.scale-legend.overlap.svelte-1yi143h.svelte-1yi143h{margin-bottom:-75%}.key.svelte-1yi143h.svelte-1yi143h{position:relative;padding-top:4px;z-index:3;display:block;margin-bottom:-14px;max-width:240px}.text-item.svelte-1yi143h.svelte-1yi143h{font-size:inherit;text-anchor:middle}.key.svelte-1yi143h.svelte-1yi143h,.text-item.svelte-1yi143h.svelte-1yi143h{text-shadow:-1px -1px 1px var(--bg),-1px -0.5px 1px var(--bg),-1px 0px 1px var(--bg),-1px 0.5px 1px var(--bg),-1px 1px 1px var(--bg),-0.5px -1px 1px var(--bg),-0.5px -0.5px 1px var(--bg),-0.5px 0px 1px var(--bg),-0.5px 0.5px 1px var(--bg),-0.5px 1px 1px var(--bg),0px -0.5px 1px var(--bg),0px -0.5px 1px var(--bg),0px 1px 1px var(--bg),0px 1px 1px var(--bg),0.5px -1px 1px var(--bg),0.5px -0.5px 1px var(--bg),0.5px 0px 1px var(--bg),0.5px 0.5px 1px var(--bg),0.5px 1px 1px var(--bg),1px -1px 1px var(--bg),1px -0.5px 1px var(--bg),1px 0px 1px var(--bg),1px 0.5px 1px var(--bg),1px 1px 1px var(--bg)}.wrapper.svelte-1yi143h>svg.svelte-1yi143h{position:relative;display:block}circle.svelte-1yi143h.svelte-1yi143h{fill:var(--bg);stroke:black}.dark.svelte-1yi143h circle.svelte-1yi143h{fill:var(--text);stroke:var(--bg)}.dark.svelte-1yi143h .key.svelte-1yi143h,.dark.svelte-1yi143h .text-item.svelte-1yi143h{text-shadow:-1px -1px 1px var(--text),-1px -0.5px 1px var(--text),-1px 0px 1px var(--text),-1px 0.5px 1px var(--text),-1px 1px 1px var(--text),-0.5px -1px 1px var(--text),-0.5px -0.5px 1px var(--text),-0.5px 0px 1px var(--text),-0.5px 0.5px 1px var(--text),-0.5px 1px 1px var(--text),0px -0.5px 1px var(--text),0px -0.5px 1px var(--text),0px 1px 1px var(--text),0px 1px 1px var(--text),0.5px -1px 1px var(--text),0.5px -0.5px 1px var(--text),0.5px 0px 1px var(--text),0.5px 0.5px 1px var(--text),0.5px 1px 1px var(--text),1px -1px 1px var(--text),1px -0.5px 1px var(--text),1px 0px 1px var(--text),1px 0.5px 1px var(--text),1px 1px 1px var(--text)}.scale-legend.right.svelte-1yi143h.svelte-1yi143h{text-align:right}.scale-legend.right.svelte-1yi143h .key.svelte-1yi143h{margin-bottom:-10px}.scale-legend.right.svelte-1yi143h .wrapper.svelte-1yi143h{display:inline-block}.legend.hidden .scale-legend{display:none}") }

    function UO(t, e, n) { var i = t.slice(); return i[16] = e[n].radius, i[17] = e[n].label, i[19] = n, i }

    function XO(t) { var e, n, i, r, o, a, s = t[17] + ""; return { c: function() { e = OM("g"), n = OM("circle"), o = OM("text"), a = TM(s), zM(n, "r", i = t[16]), zM(n, "cy", r = -1 * t[16]), zM(n, "class", "svelte-1yi143h"), zM(o, "class", "text-item svelte-1yi143h"), zM(o, "y", "16px"), RM(e, "transform", "translate(" + t[10](t[19]) + "px, 5px)") }, m: function(t, i) { AM(t, e, i), MM(e, n), MM(e, o), MM(o, a) }, p: function(t, e) { 8 & e && i !== (i = t[16]) && zM(n, "r", i), 8 & e && r !== (r = -1 * t[16]) && zM(n, "cy", r), 8 & e && s !== (s = t[17] + "") && FM(a, s) }, d: function(t) { t && DM(e) } } }

    function qO(t) { for (var e, n, i, r, o, a = t[9] && function(t) { var e; return { c: function() {
                        (e = EM("div")).textContent = "".concat(t[9]), zM(e, "class", "key svelte-1yi143h") }, m: function(t, n) { AM(t, e, n) }, p: cM, d: function(t) { t && DM(e) } } }(t), s = t[3], l = [], c = 0; c < s.length; c += 1) l[c] = XO(UO(t, s, c)); return { c: function() { e = EM("div"), a && a.c(), n = PM(), i = EM("div"), r = OM("svg"); for (var s = 0; s < l.length; s += 1) l[s].c();
                zM(r, "style", t[6]), zM(r, "width", "100"), zM(r, "height", t[4]), zM(r, "preserveAspectRatio", "none"), zM(r, "class", "svelte-1yi143h"), zM(i, "class", "wrapper svelte-1yi143h"), zM(e, "class", o = "scale-legend " + (t[7] ? "overlap" : "") + " " + (t[8] ? "dark" : "") + " " + (t[1] ? "mobile" : "") + " " + (t[2] ? "wide" : "") + " " + t[0] + " svelte-1yi143h") }, m: function(o, s) { AM(o, e, s), a && a.m(e, null), MM(e, n), MM(e, i), MM(i, r); for (var c = 0; c < l.length; c += 1) l[c].m(r, null);
                t[13](e) }, p: function(t, n) { var i = Pe(n, 1)[0]; if (t[9] && a.p(t, i), 1032 & i) { var c; for (s = t[3], c = 0; c < s.length; c += 1) { var u = UO(t, s, c);
                        l[c] ? l[c].p(u, i) : (l[c] = XO(u), l[c].c(), l[c].m(r, null)) } for (; c < l.length; c += 1) l[c].d(1);
                    l.length = s.length } 64 & i && zM(r, "style", t[6]), 16 & i && zM(r, "height", t[4]), 7 & i && o !== (o = "scale-legend " + (t[7] ? "overlap" : "") + " " + (t[8] ? "dark" : "") + " " + (t[1] ? "mobile" : "") + " " + (t[2] ? "wide" : "") + " " + t[0] + " svelte-1yi143h") && zM(e, "class", o) }, i: cM, o: cM, d: function(n) { n && DM(e), a && a.d(), CM(l, n), t[13](null) } } }

    function GO(t, e, n) { var i, r, o, a, s, l, c = e.config,
            u = void 0 === c ? {} : c,
            f = e.position,
            d = void 0 === f ? "bottom" : f,
            h = e.isMobile,
            g = e.fullWidth,
            p = u,
            v = p.displayWithOverlap,
            m = void 0 === v || v,
            y = p.darkTheme,
            x = void 0 !== y && y,
            b = p.key,
            $ = function(t) { var e = 0; return i.slice(0, t).forEach((function(t) { var n = t.radius;
                    e += n })), e }; return ZM((function() { if (l) { var t = 0;
                Be(l.querySelectorAll("g")).forEach((function(e, n) { var i = e.getBoundingClientRect(),
                        r = Math.max(2 * $(n), t + i.width / 2);
                    e.style.transform = "translate(".concat(r, "px, 5px)"), t += i.width + 7 })), l.querySelector("svg").setAttribute("width", Math.max(o, t - 7)) } })), t.$$set = function(t) { "config" in t && n(11, u = t.config), "position" in t && n(0, d = t.position), "isMobile" in t && n(1, h = t.isMobile), "fullWidth" in t && n(2, g = t.fullWidth) }, t.$$.update = function() { var e;
            (2048 & t.$$.dirty && n(3, i = u.items || []), 8 & t.$$.dirty) && n(12, r = (null === (e = i[2]) || void 0 === e ? void 0 : e.radius) || 50);
            4096 & t.$$.dirty && (o = 2.6 * r), 4096 & t.$$.dirty && n(4, a = 2 * Math.max(r, 20) + 20), 4096 & t.$$.dirty && n(6, s = "\n    top: ".concat(Math.max(25, 2 * r), "px;\n  ")), t.$$.dirty }, [d, h, g, i, a, l, s, m, x, b, $, u, r, function(t) { tS[t ? "unshift" : "push"]((function() { n(5, l = t) })) }] } var ZO = function(t) { Ae(n, t); var e = Te(n);

        function n(t) { var i; return be(this, n), wS(Ee(i = e.call(this)), t, GO, qO, pM, { config: 11, position: 0, isMobile: 1, fullWidth: 2 }, VO), i } return we(n, [{ key: "config", get: function() { return this.$$.ctx[11] }, set: function(t) { this.$$set({ config: t }), lS() } }, { key: "position", get: function() { return this.$$.ctx[0] }, set: function(t) { this.$$set({ position: t }), lS() } }, { key: "isMobile", get: function() { return this.$$.ctx[1] }, set: function(t) { this.$$set({ isMobile: t }), lS() } }, { key: "fullWidth", get: function() { return this.$$.ctx[2] }, set: function(t) { this.$$set({ fullWidth: t }), lS() } }]), n }(_S);

    function QO(t) { SM(t, "svelte-yaxqtr", ".split-legend.svelte-yaxqtr.svelte-yaxqtr{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;padding-bottom:6px}.split-legend.top-bottom.svelte-yaxqtr.svelte-yaxqtr{flex-direction:column}.top-bottom.svelte-yaxqtr .legend-left.svelte-yaxqtr{padding:6px 0 9px;min-height:22px}.left-right.svelte-yaxqtr .legend-right.svelte-yaxqtr{padding-bottom:8px}.single-legend.svelte-yaxqtr.svelte-yaxqtr{display:flex;flex-direction:row;padding-top:6px}") }

    function KO(t) { var e, n, i, r, o = t[6];

        function a(t) { return { props: { config: t[1], fullWidth: t[7], isMobile: t[8] } } } return o && (n = XM(o, a(t))), { c: function() { e = EM("div"), n && yS(n.$$.fragment), zM(e, "class", "single-legend svelte-yaxqtr"), oS((function() { return t[12].call(e) })) }, m: function(o, a) { AM(o, e, a), n && xS(n, e, null), i = VM(e, t[12].bind(e)), r = !0 }, p: function(t, i) { var r = {}; if (2 & i && (r.config = t[1]), 128 & i && (r.fullWidth = t[7]), 256 & i && (r.isMobile = t[8]), o !== (o = t[6])) { if (n) { dS(); var s = n;
                        pS(s.$$.fragment, 1, 0, (function() { bS(s, 1) })), hS() } o ? (yS((n = XM(o, a(t))).$$.fragment), gS(n.$$.fragment, 1), xS(n, e, null)) : n = null } else o && n.$set(r) }, i: function(t) { r || (n && gS(n.$$.fragment, t), r = !0) }, o: function(t) { n && pS(n.$$.fragment, t), r = !1 }, d: function(t) { t && DM(e), n && bS(n), i() } } }

    function JO(t) { var e, n, i, r, o, a, s, l, c, u = t[6];

        function f(t) { return { props: { config: t[1], position: "left-right" === t[0] ? "left" : "top", fullWidth: t[7], isMobile: t[8] } } } u && (i = XM(u, f(t))); var d = t[5];

        function h(t) { return { props: { config: t[2], position: "left-right" === t[0] ? "right" : "bottom", fullWidth: t[7], isMobile: t[8] } } } return d && (a = XM(d, h(t))), { c: function() { e = EM("div"), n = EM("div"), i && yS(i.$$.fragment), r = PM(), o = EM("div"), a && yS(a.$$.fragment), zM(n, "class", "legend-left svelte-yaxqtr"), zM(o, "class", "legend-right svelte-yaxqtr"), zM(e, "class", s = "split-legend " + t[0] + " svelte-yaxqtr"), oS((function() { return t[11].call(e) })) }, m: function(s, u) { AM(s, e, u), MM(e, n), i && xS(i, n, null), MM(e, r), MM(e, o), a && xS(a, o, null), l = VM(e, t[11].bind(e)), c = !0 }, p: function(t, r) { var l = {}; if (2 & r && (l.config = t[1]), 1 & r && (l.position = "left-right" === t[0] ? "left" : "top"), 128 & r && (l.fullWidth = t[7]), 256 & r && (l.isMobile = t[8]), u !== (u = t[6])) { if (i) { dS(); var g = i;
                        pS(g.$$.fragment, 1, 0, (function() { bS(g, 1) })), hS() } u ? (yS((i = XM(u, f(t))).$$.fragment), gS(i.$$.fragment, 1), xS(i, n, null)) : i = null } else u && i.$set(l); var p = {}; if (4 & r && (p.config = t[2]), 1 & r && (p.position = "left-right" === t[0] ? "right" : "bottom"), 128 & r && (p.fullWidth = t[7]), 256 & r && (p.isMobile = t[8]), d !== (d = t[5])) { if (a) { dS(); var v = a;
                        pS(v.$$.fragment, 1, 0, (function() { bS(v, 1) })), hS() } d ? (yS((a = XM(d, h(t))).$$.fragment), gS(a.$$.fragment, 1), xS(a, o, null)) : a = null } else d && a.$set(p);
                (!c || 1 & r && s !== (s = "split-legend " + t[0] + " svelte-yaxqtr")) && zM(e, "class", s) }, i: function(t) { c || (i && gS(i.$$.fragment, t), a && gS(a.$$.fragment, t), c = !0) }, o: function(t) { i && pS(i.$$.fragment, t), a && pS(a.$$.fragment, t), c = !1 }, d: function(t) { t && DM(e), i && bS(i), a && bS(a), l() } } }

    function tT(t) { var e, n, i, r, o = [JO, KO],
            a = [];

        function s(t, e) { return t[4] ? 0 : 1 } return e = s(t), n = a[e] = o[e](t), { c: function() { n.c(), i = BM() }, m: function(t, n) { a[e].m(t, n), AM(t, i, n), r = !0 }, p: function(t, r) { var l = Pe(r, 1)[0],
                    c = e;
                (e = s(t)) === c ? a[e].p(t, l) : (dS(), pS(a[c], 1, 1, (function() { a[c] = null })), hS(), (n = a[e]) ? n.p(t, l) : (n = a[e] = o[e](t)).c(), gS(n, 1), n.m(i.parentNode, i)) }, i: function(t) { r || (gS(n), r = !0) }, o: function(t) { pS(n), r = !1 }, d: function(t) { a[e].d(t), t && DM(i) } } }

    function eT(t, e, n) { var i, r, o, a, s, l, c, u = e.layout,
            f = void 0 === u ? "left-right" : u,
            d = e.primaryLegend,
            h = e.secondaryLegend,
            g = 620,
            p = function(t) { return { standard: YO, gradient: IO, scale: ZO } [t] }; return t.$$set = function(t) { "layout" in t && n(0, f = t.layout), "primaryLegend" in t && n(1, d = t.primaryLegend), "secondaryLegend" in t && n(2, h = t.secondaryLegend) }, t.$$.update = function() { var e, u;
            (8 & t.$$.dirty && n(8, i = xl(g)), 2 & t.$$.dirty) && n(10, r = null === (e = d) || void 0 === e ? void 0 : e.type);
            4 & t.$$.dirty && n(9, o = null === (u = h) || void 0 === u ? void 0 : u.type);
            4 & t.$$.dirty && n(4, a = null != h), 17 & t.$$.dirty && n(7, s = !(a && "left-right" === f)), 1024 & t.$$.dirty && n(6, l = p(r) || YO), 512 & t.$$.dirty && n(5, c = p(o) || YO) }, [f, d, h, g, a, c, l, s, i, o, r, function() { g = this.clientWidth, n(3, g) }, function() { g = this.clientWidth, n(3, g) }] } var nT = function(t) { Ae(n, t); var e = Te(n);

        function n(t) { var i; return be(this, n), wS(Ee(i = e.call(this)), t, eT, tT, pM, { layout: 0, primaryLegend: 1, secondaryLegend: 2 }, QO), i } return we(n, [{ key: "layout", get: function() { return this.$$.ctx[0] }, set: function(t) { this.$$set({ layout: t }), lS() } }, { key: "primaryLegend", get: function() { return this.$$.ctx[1] }, set: function(t) { this.$$set({ primaryLegend: t }), lS() } }, { key: "secondaryLegend", get: function() { return this.$$.ctx[2] }, set: function(t) { this.$$set({ secondaryLegend: t }), lS() } }]), n }(_S);

    function iT(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = e.primaryLegend,
            i = e.secondaryLegend,
            r = e.options; return new nT({ target: t, props: { layout: "top-bottom", primaryLegend: n, secondaryLegend: i, options: r } }) } var rT = qt.every,
        oT = Gt("every"),
        aT = Jt("every");

    function sT(t, e, n) { var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            r = Se(Se(Se({}, t), t.numericProperties || {}), i),
            o = r.decimals,
            a = r.unitBefore,
            s = r.unitAfter,
            l = null != o && "" !== o,
            c = Z_(t),
            u = J_(e, Se({ unitBefore: a, unitAfter: s, forAxis: !0, decimalPlaces: l ? o : void 0, defaultDecimals: o, preventCommaDisplay: !0, ignoreChartOptions: !0, voidDecimals: l, reductionLooseFit: !0 }, i), c, n),
            f = u.reduced,
            d = K_(c, n, Se(Se({}, u), {}, { bareValue: !0 })),
            h = jd(".".concat(d.decimals || 1, "f")),
            g = e.map((function(t) { return t / (f ? f.divisor : 1) })).map((function(t) { return Number(h(t)) })).map((function(t) { return t * (f ? f.divisor : 1) })),
            p = e.filter((function(t) { return 0 !== t })).map((function(t) { return d(t) })).map((function(t) { return String(t).replace(/[\d.-]/g, "") })),
            v = p.every((function(t) { return t === p[0] })); return { roundedValues: g, fullValueFormatter: K_(c, n, u), bareValueFormatter: K_(c, n, Se(Se({}, u), {}, { bareValue: !0, preventUnitDisplay: v })) } } Pt({ target: "Array", proto: !0, forced: !oT || !aT }, { every: function(t) { return rT(this, t, arguments.length > 1 ? arguments[1] : void 0) } });

    function lT(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = e.bubbleSize,
            i = e.minValue,
            r = e.maxValue,
            o = e.minRadius,
            a = e.maxRadius,
            s = t.min,
            l = t.max,
            c = o || +n,
            u = i || (s < 0 || l < 0 ? 100 * s : s),
            f = r || (l < 0 ? 100 * l : l),
            d = a || c * Math.sqrt(Math.abs(f / u)); return zx().domain([s, l]).range([c, d]).nice(5) }

    function cT(t, e, n) { var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}; if (t) { var r = e.config,
                o = r.bubbleLegend,
                a = r.scalePrecision,
                s = r.scaleLegendLabel,
                l = r.scalePreventLegendOverlap,
                c = r.scaleEnableLegendOverlap,
                u = i.overlapByDefault,
                f = { data: e },
                d = u ? !l : Boolean(c),
                h = o ? o.text : s,
                g = n.ticks(5),
                p = 6 === g.length ? [g[1], g[2], g[4]] : [g[1], g[2], g[3]],
                v = p.map((function(t, e) { return { val: t, radius: t > 0 ? n(t) : 0 } })); if (o) { var m = o.prefix,
                    y = o.postfix,
                    x = o.precision,
                    b = o.isPercent;
                ke(t, { unitBefore: m, unitAfter: y, precision: x ? Number(x) : void 0, displayAs: b ? "%" : "" }) } else null != a && (t.precision = Number(a)); var $ = sT(t, p, f, { decimals: t.precision }),
                w = $.fullValueFormatter,
                _ = $.bareValueFormatter; return { type: "scale", displayWithOverlap: d, key: h, darkTheme: Xu(e, i), items: v.map((function(t, e) { var n = t.val,
                        i = t.radius; return { label: (2 === e ? w : _)(n), radius: i } })) } } } var uT = Math.log,
        fT = Math.LOG10E;

    function dT(t, e) { return Math.round(t / e) * e }

    function hT(t, e) { return Math.ceil(t / e) * e }

    function gT(t, e) { var n = e.split(",").map((function(t) { return t.toUpperCase().trim() })),
            i = function(t) { t.toUpperCase || (t = t.toString()); var e = n.indexOf(t.toUpperCase().trim()); return -1 === e ? 9999 : e }; return t.sort((function(t, e) { return i(t) - i(e) })) } Pt({ target: "Math", stat: !0 }, { log10: function(t) { return uT(t) * fT } }); var pT = { minmax: [0, 1], median: [0, .5, 1], quartiles: [0, .25, .5, .75, 1], quintiles: [0, .2, .4, .6, .8, 1], log: [0, 1], linear: [0, 1] };

    function vT(t, e, n, i) { var r = n.gradientType,
            o = n.gradientScale,
            a = n.gradientStops,
            s = n.gradientPositions,
            l = void 0 === s ? pT.quartiles : s,
            c = null == r ? "continuous" : r,
            u = null == o ? "minmax" : o,
            f = null == a ? 4 : a;
        null === l && (l = pT.quartiles); var d = e.map((function(e) { return +e[t] })).filter((function(t) { return !isNaN(t) })).sort((function(t, e) { return t - e })),
            h = "custom" === u && l && l.length > 1,
            g = [],
            p = void 0 !== d[0] && null !== d[0] ? d[0] : 1 / 0,
            v = d[d.length - 1],
            m = p < 0 && v > 0; "discrete" === c ? g = pT.minmax.map((function(t) { return Qp(d, t) })) : "jenks" === u ? g = function(t, e) { if (e > t.length) return null; var n = function(t, e) { var n, i, r = [],
                    o = [],
                    a = 0; for (n = 0; n < t.length + 1; n++) { var s = [],
                        l = []; for (i = 0; i < e + 1; i++) s.push(0), l.push(0);
                    r.push(s), o.push(l) } for (n = 1; n < e + 1; n++)
                    for (r[1][n] = 1, o[1][n] = 0, i = 2; i < t.length + 1; i++) o[i][n] = 1 / 0; for (var c = 2; c < t.length + 1; c++) { for (var u = 0, f = 0, d = 0, h = 0, g = 1; g < c + 1; g++) { var p = c - g + 1,
                            v = t[p - 1]; if (a = (f += v * v) - (u += v) * u / ++d, 0 != (h = p - 1))
                            for (i = 2; i < e + 1; i++) o[c][i] >= a + o[h][i - 1] && (r[c][i] = p, o[c][i] = a + o[h][i - 1]) } r[c][1] = 1, o[c][1] = a } return { lowerClassLimits: r, varianceCombinations: o } }(t = t.slice().sort((function(t, e) { return t - e })), e); return function(t, e, n) { var i = t.length - 1,
                    r = [],
                    o = n; for (r[n] = t[t.length - 1], r[0] = t[0]; o > 1;) r[o - 1] = t[e[i][o] - 2], i = e[i][o] - 1, o--; return r }(t, n.lowerClassLimits, e) }(d, f) : h || (g = pT[u].map((function(t) { return Qp(d, t) }))); var y = "log" !== u && m; if (h) { var x = Array.isArray(l) ? l : l.split(",");
            g = i ? x : x.map((function(t) { return t * (v - p) + p })) } var b, $, w = { min: p, max: v, sortedValues: d, diverging: y, colorStops: g }; if (y) { for (var _ = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [5, 10],
                        n = Math.max(Math.floor(Math.log10(t) - 1), 0),
                        i = Math.floor(t / Math.pow(10, n)),
                        r = e.map((function(t) { return dT(i, t) || hT(i, t) })).reduce((function(t, e) { return Math.abs(i - t) > Math.abs(i - e) ? e : t }), 0); return Math.max(r * Math.pow(10, n), 1) }((v - p) / (f - 1)), k = (b = p, $ = _, Math.floor(b / $) * $), M = hT(v, _), S = 0, A = 0, D = k; D < 0; D += _, S++); for (var C = 0; C < M; C += _, A++); var E = h ? g : [k, M]; return Se(Se({}, w), {}, { min: k, max: M, interval: _, colorStops: E, colorCount: [S, A] }) } return w } var mT = { minmax: [0, 1], median: [0, .5, 1], quartiles: [0, .25, .5, .75, 1], quintiles: [0, .2, .4, .6, .8, 1], log: [0, 1], linear: [0, 1] };

    function yT(t, e, n, i, r) { var o, a = n.colors,
            s = n.neutral,
            l = e.colorStops,
            c = e.min,
            u = e.max,
            f = i.config,
            d = f.gradientIncludeNeutral,
            h = f.gradientScale,
            g = a.length,
            p = h || "minmax"; if ("log" === p) { var v = Ex().domain(l).range(mT.log.map((function(t) { return g * t })));
            o = a.map((function(t, e) { return v.invert(e) })) } else if ("jenks" === p) o = l;
        else if ("linear" === p) { var m = (u - c) / g;
            o = []; for (var y = 0; y <= g; y++) o.push(c + y * m) } else if ("custom" === p) o = l;
        else { var x = $x().range(l).domain(mT[p].map((function(t) { return g * t })));
            o = a.map((function(t, e) { return x(e) })) } var b = { data: i, options: r },
            $ = sT(t, o.slice(1), b),
            w = $.bareValueFormatter,
            _ = $.fullValueFormatter,
            k = $.roundedValues;
        r.preventRounding || (o = o.slice(0, 1).concat(k)); var M = $x().domain(o).range(a).interpolate((function(t) { var e = a[a.length - 1],
                    n = a[a.length - 2]; return function(i) { return t === n && i >= 1 ? e : t } })),
            S = d && "custom" !== p ? ke((function(t) { return 0 == +t ? s : M(t) }), M) : M; return S.stats = e, { scale: S, values: o, fullValueFormatter: _, bareValueFormatter: w } } var xT, bT = function(t) { return [t] },
        $T = function(t) { return Array.from({ length: t }, (function(t, e) { return e })) },
        wT = function(t, e) { return { colors: t.slice(0, 25).concat(e), neutral: t[0], lhs: t, rhs: e } },
        _T = function(t) { return ["l3", "l2", "l1", "base", "d1", "d2", "d3"].map((function(e) { return t[e] })) },
        kT = function(t) { return ["d3", "d2", "d1", "base", "l1", "l2", "l3"].map((function(e) { return t[e] })) },
        MT = { 1: bT(3), 2: [1, 3], 3: [1, 2, 3], 4: [1, 2, 3, 4], 5: [1, 2, 3, 4, 6], 6: [1, 2, 3, 4, 5, 6], 7: [0, 1, 2, 3, 4, 5, 6] },
        ST = { 1: bT(4), 2: [2, 4], 3: [1, 4, 6], 4: [1, 3, 4, 6], 5: [1, 2, 3, 4, 6], 6: [0, 1, 2, 3, 4, 5], 7: [0, 1, 2, 3, 4, 5, 6] },
        AT = { 1: [6], 2: [1, 5], 3: [1, 3, 5], 4: [1, 2, 4, 5], 5: [1, 2, 3, 4, 5], 6: [0, 1, 2, 4, 5, 6], 7: [0, 1, 2, 3, 4, 5, 6] },
        DT = { 1: [0], 2: [1, 5], 3: [1, 3, 5], 4: [1, 2, 4, 5], 5: [1, 2, 3, 4, 5], 6: [0, 1, 2, 4, 5, 6], 7: [0, 1, 2, 3, 4, 5, 6] },
        CT = { 1: [1], 2: [1, 2], 3: [0, 1, 2], 4: [3, 4, 5, 6], 5: [7, 8, 9, 10, 11], 6: [12, 13, 14, 15, 16, 17], 7: [18, 19, 20, 21, 22, 23, 24] },
        ET = { 1: [2], 2: [2, 27], 3: [2, 0, 27], 4: [2, 1, 26, 27], 5: [2, 1, 7, 26, 27], 6: [6, 5, 4, 29, 30, 31], 7: [6, 5, 4, 7, 29, 30, 31] },
        OT = { 1: [2], 2: [2, 27], 3: [2, 0, 27], 4: [2, 1, 26, 27], 5: [2, 1, 7, 26, 27], 6: [6, 5, 4, 29, 30, 31], 7: [6, 5, 4, 7, 29, 30, 31] },
        TT = { 1: [1], 2: [1, 2], 3: [4, 5, 6], 4: [8, 9, 10, 11], 5: [13, 14, 15, 16, 17], 6: [19, 20, 21, 22, 23, 24], 7: [26, 27, 28, 29, 30, 31, 32], 8: [34, 35, 36, 37, 38, 39, 40, 41] },
        PT = { 1: $T(1), 2: $T(2), 3: $T(3), 4: $T(4), 5: $T(5), 6: $T(6), 7: $T(7) },
        BT = { 1: $T(1), 2: $T(2), 3: $T(3), 4: $T(4), 5: $T(4), 6: $T(4), 7: $T(4) },
        LT = { 1: bT(2), 2: $T(2), 3: $T(3), 4: $T(4), 5: $T(4), 6: $T(4), 7: $T(4) },
        zT = { d3: "#00577f", d2: "#0079b2", d1: "#0094d9", base: "#00aeff", l1: "#44c4ff", l2: "#89d9fe", l3: "#cdeffe" },
        YT = { d3: "#7f6200", d2: "#b28900", d1: "#d9a700", base: "#ffc400", l1: "#ffd345", l2: "#ffe389", l3: "var(--bg)2ce" },
        FT = { d3: "#7f3101", d2: "#b24400", d1: "#d95300", base: "#ff6200", l1: "#ff8d46", l2: "#feb98d", l3: "#ffe5d3" },
        WT = { d3: "var(--text)", d2: "#333333", d1: "#666666", base: "#999999", l1: "#cccccc", l2: "#efefef", l3: "var(--bg)" },
        RT = { base: "#ff008c", d2: "#b20062" },
        NT = { base: "#3ef794", d2: "#25a463" },
        HT = { d3: "#007972", d2: "#00aaa0", d1: "#00cfc3", base: "#00f3e5", l1: "#7bf7f0", l2: "#9ff9f4", l3: "#cffdf9" },
        jT = "#cecece",
        IT = { d3: "#003f5d", d2: "#00577f", d1: "#0079b2", base: "#0094d9", l1: "#00aeff", l2: "#2fbdff", l3: "#5fccff" },
        VT = { d3: "#544100", d2: "#7f6200", d1: "#b28900", base: "#d9a700", l1: "#ffc400", l2: "#ffcd2e", l3: "#ffd961" },
        UT = { d3: "#7f3101", d2: "#b24400", d1: "#d95300", base: "#ff6200", l1: "#ff8d46", l2: "#feb98d", l3: "#ffe5d3" },
        XT = { d3: "var(--text)", d2: "#333333", d1: "#666666", base: "#999999", l1: "#cccccc", l2: "#efefef", l3: "var(--bg)" },
        qT = "#333333",
        GT = { d3: "#002a7f", d2: "#003eb2", d1: "#0052d9", base: "#0078ff", l1: "#4499ff", l2: "#89baff", l3: "#cddcff" },
        ZT = { d3: "#7f0000", d2: "#b20000", d1: "#d90000", base: "#ff0000", l1: "#ff4141", l2: "#ff8282", l3: "#ffc3c3" },
        QT = { d3: "var(--text)", d2: "#333333", d1: "#666666", base: "#999999", l1: "#cccccc", l2: "#efefef", l3: "var(--bg)" },
        KT = { base: "#008800" },
        JT = { base: "#dca0ff" },
        tP = { base: "var(--bg)f00" },
        eP = { base: "var(--bg)" },
        nP = { green: { d3: "#148714", d2: "#14A014", d1: "#14D21E", base: "#14eb1e", l1: "#48fb51", l2: "#81ff87", l3: "#bfffc2" }, cyan: { d3: "#00788c", d2: "#00889e", d1: "#00a2bd", base: "#00b4d2", l1: "#00c2e2", l2: "#10ccea", l3: "#62dbef" }, black: { d3: "var(--text)", d2: "#333333", d1: "#666666", base: "#999999", l1: "#cccccc", l2: "#efefef", l3: "var(--bg)" }, discrete: ["#14eb1e", "#00B3D2", "#FFBB1C", "#9F502A", "#505050", "#ffbe1e", "#ffeb50", "#9b5028", "#e1a05a"] },
        iP = { blue: { d3: "#005174", d2: "#046A96", d1: "#0984B9", base: "#0D9DDB", l1: "#41B5E7", l2: "#76CDF3", l3: "#AAE5FF" }, purple: { d3: "#3C294E", d2: "#563A70", d1: "#704C93", base: "#8A5DB5", l1: "#A67CCE", l2: "#C19BE6", l3: "#DDBAFF" }, green: { d3: "#037D6B", d2: "#029983", d1: "#01B69B", base: "#00D2B3", l1: "#31E1C7", l2: "#62F0DB", l3: "#93FFEF" }, discrete: ["#0D9DDB", "#8A5DB5", "#00D2B3", "#ED4436", "#FFCC1D", "#EA60A7", "#4DAA50", "#aaa", "#666"] },
        rP = { d6: "#031023", d5: "#072145", d4: "#0D3169", d3: "#15438C", d2: "#1B53AF", d1: "#2264D2", base: "#0072ff", l1: "#2486ff", l2: "#489aff", l3: "#6daeff", l4: "#91c2ff", l5: "#b6d6ff", l6: "#daeaff" },
        oP = { "bbg-mint": ["#efefef", "#a2e1b5", "#33cc7a", "#efefef", "#bde7c9", "#84daa1", "#33cc7a", "#efefef", "#cbead3", "#a2e1b5", "#70cd91", "#2db96e", "#efefef", "#d3ecd9", "#b3e5c1", "#8fd9a6", "#65c98a", "#2db96e", "#efefef", "#d1ebd7", "#afe3bd", "#8bdaa3", "#6ec88d", "#4fb677", "#28a462", "#efefef", "#d3ecd8", "#b2e5be", "#90dda5", "#71ce8e", "#59b97b", "#40a468", "#239056", "#efefef", "#d1ebd6", "#afe3ba", "#8bda9e", "#61d183", "#50bb74", "#3fa566", "#2f9057", "#1e7b49"], "bbg-red": ["#efefef", "#ff999a", "#f91f4e", "#efefef", "#feb7b6", "#ff7a80", "#f91f4e", "#efefef", "#fcc5c4", "#ff999a", "#ff6973", "#f91f4e", "#efefef", "#f9cccb", "#ffaaaa", "#ff868a", "#ff5d6b", "#f91f4e", "#efefef", "#f6d0cd", "#fcb3af", "#fd9591", "#fc7574", "#f85058", "#f20d3e", "#efefef", "#f8dbda", "#fec6c4", "#ffa6a4", "#ff807f", "#f75b60", "#e93d4c", "#da0b38", "#efefef", "#f9dbda", "#fdc5c2", "#ffa7a6", "#fd7a80", "#f7425d", "#e71f4a", "#d5153e", "#c20a32"], "bbg-orange": ["#efefef", "#ffac81", "#ff6200", "#efefef", "#ffc2a5", "#ff945d", "#ff6200", "#efefef", "#ffcdb7", "#ffac81", "#ff884b", "#ff6200", "#efefef", "#fcd4c2", "#ffb996", "#ff9e6b", "#ff813f", "#ff6200", "#efefef", "#fbd9c9", "#ffc2a5", "#ffac81", "#ff945d", "#ff7c38", "#ff6200", "#efefef", "#f6ded2", "#fdceb8", "#ffb58d", "#ff9658", "#fb7b2d", "#f16a1a", "#e65800", "#efefef", "#f6ddd3", "#fccdb9", "#ffba9a", "#ffa170", "#ff8944", "#f57528", "#e56417", "#d65200"], "bopinion-blue": ["#efefef", "#97bcf2", "#3e87f4", "#efefef", "#b5cdf1", "#7aaaf2", "#3e87f4", "#efefef", "#c3d5f0", "#97bcf2", "#6ba1f3", "#3e87f4", "#efefef", "#c8d8f0", "#9fc0f1", "#77a8f1", "#4f90f2", "#2678f2", "#efefef", "#d0ddf2", "#aec8f2", "#8bb4f1", "#6aa0f1", "#488cf2", "#2678f2", "#efefef", "#d1dff2", "#b1cbf2", "#90b7f2", "#70a4f2", "#4f90f1", "#2e7df1", "#0e69f1", "#efefef", "#d7e3f5", "#bcd3f7", "#a0c3fa", "#83b3fc", "#629cf4", "#4386eb", "#2671e3", "#0b5eda"], "bbg-cyan": ["#efefef", "#a1ccf1", "#0daaf2", "#efefef", "#bdd8f1", "#82c1f2", "#0daaf2", "#efefef", "#c9e1f5", "#9ed2fa", "#69b7f0", "#009de6", "#efefef", "#c5ddf1", "#94cbf2", "#50b8f4", "#19a2e4", "#008bcc", "#efefef", "#cce0f1", "#a6d1f2", "#76c1f3", "#23a8e6", "#1699d8", "#0081bd", "#efefef", "#d2e2f1", "#b1d5f2", "#8cc8f3", "#5cbbf4", "#21aaeb", "#1391cf", "#007ab3", "#efefef", "#dee9f1", "#cbe2f3", "#afd7f4", "#80c4f3", "#3fb0f2", "#0999db", "#0481b9", "#006999"], "bbg-honey": ["#efefef", "#fce679", "#ffc400", "#efefef", "#f8e59b", "#f9d754", "#ffc400", "#efefef", "#f7e8b0", "#f7e06e", "#facf44", "#ffbb00", "#efefef", "#f6e9bd", "#f8e389", "#f8d860", "#fbc843", "#ffb624", "#efefef", "#f3e9c6", "#f4e39d", "#f2dd73", "#f5cb52", "#f9b830", "#ffa200", "#efefef", "#f3eacc", "#f4e4a9", "#f3df86", "#f3d665", "#f6c649", "#fab52b", "#ffa200", "#efefef", "#f4ebd1", "#f5e6b1", "#f5e192", "#f4dc71", "#f6cf59", "#f8c141", "#fbb227", "#ffa200"], "bbg-teal": ["#efefef", "#9ee1d9", "#00cfc3", "#efefef", "#bbe6e1", "#7fdbd2", "#00cfc3", "#efefef", "#c5e8e3", "#96dfd6", "#66d3c9", "#00c7bd", "#efefef", "#cce9e5", "#a6e1da", "#7fd6cd", "#55c7bd", "#00aaa0", "#efefef", "#d1ebe8", "#afe4de", "#89dcd4", "#69cbc1", "#45b9af", "#00a89d"], "bbg-grey": ["#efefef", "#c4c4c4", "#999999", "#efefef", "#d3d3d3", "#b6b6b6", "#999999", "#efefef", "#cbcbcb", "#a8a8a8", "#868686", "#666666", "#efefef", "#d3d3d3", "#b6b6b6", "#9b9b9b", "#808080", "#666666", "#efefef", "#d7d7d7", "#c0c0c0", "#a8a8a8", "#919191", "#7b7b7b", "#666666"], "bbg-mint-dark": ["#333333", "#379663", "#3ef794", "#333333", "#3b7054", "#2ec273", "#3ef794", "#333333", "#3b5f4c", "#379663", "#29d87a", "#3ef794", "#333333", "#3b5547", "#3a7e5a", "#33b06d", "#2ddf80", "#3ef794", "#333333", "#3a4f44", "#3b7054", "#379663", "#2ec273", "#2fe483", "#3ef794"], "bbg-red-dark": ["#333333", "#993349", "#ff335f", "#333333", "#713945", "#c6284a", "#ff335f", "#333333", "#603942", "#993349", "#df2049", "#ff335f", "#333333", "#56393f", "#813747", "#b42d4a", "#e7234d", "#ff335f", "#333333", "#4f393e", "#713945", "#993349", "#c6284a", "#eb2550", "#ff335f"], "bbg-orange-dark": ["#333333", "#86592d", "#ff8000", "#333333", "#664d33", "#aa6622", "#ff8000", "#333333", "#584635", "#86592d", "#be6d1b", "#ff8000", "#333333", "#504235", "#725231", "#9b6127", "#ca7116", "#ff8000", "#333333", "#4a4035", "#664d33", "#86592d", "#aa6622", "#d27313", "#ff8000"], "bopinion-blue-dark": ["#333333", "#3669a3", "#4da0ff", "#333333", "#3c5777", "#2b7ad5", "#4da0ff", "#333333", "#3c4e64", "#3669a3", "#3183e2", "#4da0ff", "#333333", "#3b4959", "#3a5e88", "#3073c0", "#3589e9", "#4da0ff", "#333333", "#3a4552", "#3c5777", "#3669a3", "#2b7ad5", "#398ded", "#4da0ff"], "bbg-cyan-dark": ["#333333", "#337999", "#33beff", "#333333", "#395f71", "#2894c6", "#33beff", "#333333", "#395360", "#337999", "#20a2df", "#33beff", "#333333", "#394d56", "#376981", "#2d89b4", "#23a8e7", "#33beff", "#333333", "#39484f", "#395f71", "#337999", "#2894c6", "#25aceb", "#33beff"], "bbg-honey-dark": ["#333333", "#907930", "#ffc91a", "#333333", "#6c5f36", "#b89625", "#ffc91a", "#333333", "#5c5337", "#907930", "#cfa51e", "#ffc91a", "#333333", "#534c37", "#7a6934", "#a88a2a", "#ddae19", "#ffc91a", "#333333", "#4d4837", "#6c5f36", "#907930", "#b89625", "#e6b515", "#ffc91a"], "bbg-teal-dark": ["#333333", "#2b817c", "#00F3E5", "#333333", "#326360", "#21a39c", "#00F3E5", "#333333", "#335654", "#2b817c", "#1ab6ad", "#00F3E5", "#333333", "#344e4d", "#306f6b", "#25958f", "#15c1b7", "#00F3E5", "#333333", "#344948", "#326360", "#2b817c", "#21a39c", "#12c9bf", "#00F3E5"], "bbg-grey-dark": ["#333333", "#919191", "#cccccc", "#333333", "#7d7d7d", "#a5a5a5", "#cccccc", "#333333", "#747474", "#919191", "#afafaf", "#cccccc", "#333333", "#868686", "#8f8f8f", "#9d9d9d", "#b4b4b4", "#cccccc", "#333333", "#6b6b6b", "#7e7e7e", "#969696", "#a6a6a6", "#b8b8b8", "#cccccc"] },
        aP = { bgreen: ["#efefef", "#a1e491", "#17cf20", "#efefef", "#bde7b1", "#80d970", "#16ca1f", "#efefef", "#c4ecba", "#90e481", "#60ce54", "#14b81d", "#efefef", "#ceedc5", "#a6e798", "#7edb6f", "#55ca4a", "#14b81d", "#efefef", "#d1eec8", "#ade89f", "#85e274", "#66cb57", "#45b539", "#149f14", "#efefef", "#d0edc7", "#ace69b", "#83df6f", "#60ce4e", "#49b63b", "#319e28", "#138613", "#efefef", "#d5edcc", "#b5e8a6", "#93e280", "#6bdb57", "#57c547", "#43b036", "#2e9b25", "#138613"], "bgreen-dark": ["#333333", "#347f37", "#14eb1e", "#333333", "#376239", "#2d9f32", "#14eb1e", "#333333", "#375539", "#347f37", "#28b12e", "#14eb1e", "#333333", "#374d38", "#366d39", "#309234", "#25bc2c", "#14eb1e", "#333333", "#374938", "#376239", "#347f37", "#2d9f32", "#22c32a", "#14eb1e"] },
        sP = ["#efefef", "#ffa5a7", "#ff4d64", "#efefef", "#febebe", "#ff8b90", "#ff4d64", "#efefef", "#fbcbca", "#ffa5a7", "#ff7d85", "#ff4d64", "#efefef", "#fcd0cd", "#ffafab", "#ff8d8b", "#ff676c", "#ff4d64", "#efefef", "#fad5d3", "#ffbab6", "#ff9e9b", "#ff8180", "#ff5f67", "#ff334e"],
        lP = ["#efefef", "#aed8f8", "#4dc1ff", "#efefef", "#c5e0f5", "#94d0fa", "#4dc1ff", "#efefef", "#d0e4f4", "#aed8f8", "#85cdfc", "#4dc1ff", "#efefef", "#d5e4f3", "#b8d9f6", "#97cef9", "#71c3fc", "#4dc1ff", "#efefef", "#d9e6f3", "#c2ddf5", "#a8d3f8", "#8bcafa", "#69c1fd", "#4dc1ff"],
        cP = ["#333333", "#96464b", "#ff4d64", "#333333", "#754143", "#b84a53", "#ff4d64", "#333333", "#653e3f", "#96464b", "#ca4b57", "#ff4d64", "#333333", "#5b3c3c", "#824346", "#ab4950", "#d44c5a", "#ff4d64", "#333333", "#543b3b", "#754143", "#96464b", "#b84a53", "#db4c5b", "#ff4d64"],
        uP = ["#333333", "#4b7692", "#4dc1ff", "#333333", "#455f71", "#4f8eb5", "#4dc1ff", "#333333", "#415361", "#4b7692", "#509bc7", "#4dc1ff", "#333333", "#3f4d57", "#48687e", "#4e84a7", "#50a2d2", "#4dc1ff", "#333333", "#3d4851", "#455f71", "#4b7692", "#4f8eb5", "#50a7da", "#4dc1ff"],
        fP = { singlehue: { cyan: { colors: _T(zT), indices: ke({}, MT), neutral: jT }, honey: { colors: _T(YT), indices: { 1: [3], 2: [1, 3], 3: [1, 2, 3], 4: [1, 2, 3, 4], 5: [0, 1, 2, 3, 4], 6: [0, 1, 2, 3, 4, 5], 7: [0, 1, 2, 3, 4, 5, 6] }, neutral: jT }, teal: { colors: _T(HT), indices: ke({}, MT), neutral: jT }, orange: { colors: _T(FT), indices: ke({}, MT), neutral: jT }, blueBW: { colors: _T(GT), indices: ke({}, MT), neutral: jT }, red: { colors: _T(ZT), indices: ke({}, MT), neutral: jT }, greyscale: { colors: _T(QT), indices: ke({}, MT), neutral: jT }, greenBGreen: { colors: _T(nP.green), indices: ke({}, MT), neutral: jT }, cyanBGreen: { colors: _T(nP.cyan), indices: ke({}, MT), neutral: jT }, blueBNEF: { colors: _T(iP.blue), indices: ke({}, MT), neutral: jT }, purpleBNEF: { colors: _T(iP.purple), indices: ke({}, MT), neutral: jT }, greenBNEF: { colors: _T(iP.green), indices: ke({}, MT), neutral: jT }, blueOP: { colors: (xT = rP, ["l6", "l5", "l4", "l3", "l2", "l1", "base", "d1", "d2", "d3", "d4", "d5", "d6"].map((function(t) { return xT[t] }))), indices: { 1: [6], 2: [2, 6], 3: [2, 6, 8], 4: [2, 4, 6, 8], 5: [2, 4, 6, 8, 9], 6: [1, 2, 4, 6, 8, 9], 7: [1, 2, 4, 6, 8, 9, 10, 11] }, neutral: jT }, "bbg-cyan": { colors: oP["bbg-cyan"], indices: ke({}, CT), neutral: jT }, "bbg-honey": { colors: oP["bbg-honey"], indices: ke({}, CT), neutral: jT }, "bbg-orange": { colors: oP["bbg-orange"], indices: ke({}, CT), neutral: jT }, "bbg-mint": { colors: oP["bbg-mint"], indices: ke({}, CT), neutral: jT }, "bbg-grey": { colors: oP["bbg-grey"], indices: ke({}, CT), neutral: jT }, "bbg-teal": { colors: oP["bbg-teal"], indices: ke({}, CT), neutral: jT }, "bopinion-blue": { colors: oP["bopinion-blue"], indices: ke({}, CT), neutral: jT }, bgreen: { colors: aP.bgreen, indices: ke({}, CT), neutral: jT } }, singlehueDark: { cyan: { colors: kT(IT), indices: ke({}, ST), neutral: qT }, honey: { colors: kT(VT), indices: ke({}, ST), neutral: qT }, greyscale: { colors: kT(XT), indices: ke({}, ST), neutral: qT }, orange: { colors: kT(FT), indices: ke({}, ST), neutral: qT }, teal: { colors: kT(HT), indices: ke({}, ST), neutral: qT }, citylabCyan: { colors: kT(zT), indices: ke({}, ST), neutral: qT }, blueBNEF: { colors: kT(iP.blue), indices: ke({}, ST), neutral: jT }, purpleBNEF: { colors: kT(iP.purple), indices: ke({}, ST), neutral: jT }, greenBNEF: { colors: kT(iP.green), indices: ke({}, ST), neutral: jT }, "bbg-cyan-dark": { colors: oP["bbg-cyan-dark"], indices: ke({}, CT), neutral: qT }, "bbg-honey-dark": { colors: oP["bbg-honey-dark"], indices: ke({}, CT), neutral: qT }, "bbg-grey-dark": { colors: oP["bbg-grey-dark"], indices: ke({}, CT), neutral: qT }, "bbg-orange-dark": { colors: oP["bbg-orange-dark"], indices: ke({}, CT), neutral: qT }, "bbg-mint-dark": { colors: oP["bbg-mint-dark"], indices: ke({}, CT), neutral: qT }, "bgreen-dark": { colors: aP["bgreen-dark"], indices: ke({}, CT), neutral: qT }, "bopinion-blue-dark": { colors: oP["bopinion-blue-dark"], indices: ke({}, CT), neutral: qT }, "bbg-teal-dark": { colors: oP["bbg-teal-dark"], indices: ke({}, CT), neutral: qT } }, categorical: { cyanmint: { colors: [zT.base, NT.base], indices: { 1: [1], 2: [0, 1] }, neutral: jT }, honeymagenta: { colors: [YT.base, RT.base, zT.base, zT.d3, NT.base, NT.d2, RT.d2], indices: ke({}, PT), neutral: jT }, bluegrey: { colors: [GT.base, ZT.base, KT.base, JT.base, tP.base, eP.base, QT.l1], indices: ke({}, PT), neutral: jT }, bluehoney: { colors: [rP.base, FT.base, YT.base, rP.d2, NT.base, NT.d2, YT.d1], indices: ke({}, PT), neutral: jT }, cyangrey: { colors: ["#65c9ff", "#fe8090", "#feedb8", "#e5e5e5"], indices: ke({}, BT), neutral: jT }, blueredyellow: { colors: [GT.base, ZT.base, tP.base], indices: ke({}, LT), neutral: jT }, BGreen: { colors: nP.discrete, indices: ke({}, PT), neutral: jT }, BNEF: { colors: iP.discrete, indices: ke({}, PT), neutral: jT }, citylab: { colors: [WT.l1, FT.base, zT.base, FT.l1, HT.base, FT.l2, zT.l2], indices: ke({}, PT), neutral: jT } }, categoricalDark: { cyanmint: { colors: [zT.base, NT.base], indices: { 1: [1], 2: [0, 1] }, neutral: qT }, honeymagenta: { colors: [YT.base, RT.base, zT.base, zT.d3, NT.base, NT.d2, RT.d2], indices: ke({}, PT), neutral: qT }, bluegrey: { colors: [GT.base, ZT.base, KT.base, JT.base, tP.base, eP.base, QT.l1], indices: ke({}, PT), neutral: qT }, bluehoney: { colors: [rP.base, FT.base, YT.base, rP.d2, NT.base, NT.d2, YT.d1], indices: ke({}, PT), neutral: qT }, cyangrey: { colors: ["#65c9ff", "#fe8090", "#feedb8", "#e5e5e5"], indices: ke({}, BT), neutral: qT }, blueredyellow: { colors: [GT.base, ZT.base, tP.base], indices: ke({}, LT), neutral: qT }, BGreen: { colors: nP.discrete, indices: ke({}, PT), neutral: qT }, BNEF: { colors: iP.discrete, indices: ke({}, PT), neutral: qT } }, diverging: { cyanorange: Se(Se({}, wT(oP["bbg-cyan"], oP["bbg-orange"])), {}, { indices: ke({}, ET) }), tealorange: { colors: [HT.base, HT.l1, HT.l2, jT, FT.l2, FT.l1, FT.base], indices: ke({}, AT), neutral: jT }, blackorange: { colors: [WT.d2, WT.d1, WT.base, jT, FT.l2, FT.l1, FT.base], indices: ke({}, DT), neutral: jT }, blackcyan: { colors: [WT.d2, WT.d1, WT.base, jT, zT.l2, zT.l1, zT.base], indices: ke({}, AT), neutral: jT }, blackteal: { colors: [WT.d2, WT.d1, WT.base, jT, HT.l2, HT.l1, HT.base], indices: ke({}, AT), neutral: jT }, cyanred: { colors: ["#65c9ff", "#ccedff", "#e5e5e5", "#ffe0e4", "#fe8090"], indices: { 1: bT(4), 2: $T(2), 3: $T(3), 4: $T(4), 5: $T(5), 6: $T(6), 7: $T(7) }, neutral: jT }, bluered: { colors: [GT.base, GT.l1, GT.l2, jT, ZT.l2, ZT.l1, ZT.base], indices: ke({}, AT), neutral: jT }, blackred: { colors: [QT.d2, QT.d1, QT.base, jT, ZT.l2, ZT.l1, ZT.base], indices: ke({}, DT), neutral: jT }, blackblue: { colors: [QT.d2, QT.d1, QT.base, jT, GT.base, GT.l1, GT.l2], indices: ke({}, AT), neutral: jT }, blueorange: Se(Se({}, wT(oP["bopinion-blue"], oP["bbg-orange"])), {}, { indices: ke({}, OT) }), bluehoney: { colors: [rP.base, rP.l2, rP.l4, jT, YT.l2, YT.l1, YT.base], indices: ke({}, AT), neutral: jT }, greenblueBGreen: { colors: [rP.base, rP.l2, rP.l4, jT, YT.l2, YT.l1, YT.base], indices: ke({}, AT), neutral: jT }, greengoldBGreen: { colors: [rP.base, rP.l2, rP.l4, jT, YT.l2, YT.l1, YT.base], indices: ke({}, AT), neutral: jT }, bluegreenBNEF: { colors: ["#0D9DDB", "#1DB8FB", "#62D0FF", "#E5E5E5", "#93FFEF", "#62F0DB", "#00D2B3"], indices: ke({}, AT), neutral: jT }, cyanhoney: Se(Se({}, wT(oP["bbg-cyan"], oP["bbg-honey"])), {}, { indices: ke({}, ET) }), greyblue: Se(Se({}, wT(oP["bbg-grey"], oP["bopinion-blue"])), {}, { indices: ke({}, ET) }), honeyBGreen: Se(Se({}, wT(oP["bbg-honey"], aP.bgreen)), {}, { indices: ke({}, ET) }), cyanBGreen: Se(Se({}, wT(oP["bbg-cyan"], aP.bgreen)), {}, { indices: ke({}, ET) }), greyBGreen: Se(Se({}, wT(oP["bbg-grey"], aP.bgreen)), {}, { indices: ke({}, ET) }), orangeteal: Se(Se({}, wT(oP["bbg-orange"], oP["bbg-teal"])), {}, { indices: ke({}, ET) }), cyanorangeCity: Se(Se({}, wT(oP["bbg-cyan"], oP["bbg-orange"])), {}, { indices: ke({}, ET) }), redblue: Se(Se({}, wT(sP, lP)), {}, { indices: ke({}, ET) }) }, divergingDark: { cyanorange: Se(Se({}, wT(oP["bbg-cyan-dark"], oP["bbg-orange-dark"])), {}, { indices: ke({}, ET) }), cyanorangeCity: Se(Se({}, wT(oP["bbg-cyan-dark"], oP["bbg-orange-dark"])), {}, { indices: ke({}, ET) }), citylabCyanOrange: { colors: [zT.base, zT.d1, zT.d2, jT, FT.d2, FT.d1, FT.base], indices: ke({}, AT), neutral: qT }, tealorange: { colors: [HT.base, HT.d1, HT.d2, jT, FT.d2, FT.d1, FT.base], indices: ke({}, AT), neutral: qT }, blackorange: { colors: [XT.l2, XT.l1, XT.base, qT, UT.d2, UT.d1, UT.base], indices: ke({}, DT), neutral: qT }, blackcyan: { colors: [XT.l2, XT.l1, XT.base, qT, IT.d2, IT.d1, IT.base], indices: ke({}, AT), neutral: qT }, cyanred: { colors: ["#2eaaec", "#327294", "#4c4c4c", "#bb4c5a", "#ff5167"], indices: { 1: bT(4), 2: $T(2), 3: $T(3), 4: $T(4), 5: $T(5), 6: $T(6), 7: $T(7) }, neutral: qT }, cyanhoneyDark: Se(Se({}, wT(oP["bbg-cyan-dark"], oP["bbg-honey-dark"])), {}, { indices: ke({}, OT) }), greyblueDark: Se(Se({}, wT(oP["bbg-grey-dark"], oP["bopinion-blue-dark"])), {}, { indices: ke({}, OT) }), honeyBGreenDark: Se(Se({}, wT(oP["bbg-honey-dark"], aP["bgreen-dark"])), {}, { indices: ke({}, OT) }), cyanBGreenDark: Se(Se({}, wT(oP["bbg-cyan-dark"], aP["bgreen-dark"])), {}, { indices: ke({}, OT) }), greyBGreenDark: Se(Se({}, wT(oP["bbg-grey-dark"], aP["bgreen-dark"])), {}, { indices: ke({}, OT) }), bluegreenBNEF: { colors: ["#0D9DDB", "#0984B9", "#046A96", "#3B3B3B", "#029983", "#01B69B", "#00D2B3"], indices: ke({}, AT), neutral: jT }, orangecyanDark: Se(Se({}, wT(oP["bbg-orange-dark"], oP["bbg-cyan-dark"])), {}, { indices: ke({}, OT) }), orangetealDark: Se(Se({}, wT(oP["bbg-orange-dark"], oP["bbg-teal-dark"])), {}, { indices: ke({}, OT) }), redblue: Se(Se({}, wT(cP, uP)), {}, { indices: ke({}, OT) }), blueorange: Se(Se({}, wT(oP["bopinion-blue-dark"], oP["bbg-orange-dark"])), {}, { indices: ke({}, OT) }) } };

    function dP(t) { for (var e = fP, n = t.split("."); n.length;) { e = e[n.shift()] } return e }

    function hP(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            r = t || "singlehue.cyan",
            o = e || 5,
            a = i.diverging,
            s = i.colorCount,
            l = dP(r),
            c = l.colors,
            u = l.indices,
            f = l.neutral,
            d = l.rhs,
            h = l.lhs,
            g = u[Number(o)] || u[7]; if (!g) return null;

        function p() { return g.map((function(t) { return c[t] })) }

        function v() { var t = Pe(s, 2),
                e = t[0],
                i = t[1],
                r = Math.max(e, i),
                o = Array.from({ length: e }, (function(t, e) { return TT[r][e] })),
                a = Array.from({ length: i }, (function(t, e) { return TT[r][e] })),
                l = n ? d : h,
                c = n ? h : d; return [].concat(Be(o.map((function(t, e) { return l[o[e]] })).reverse()), Be(a.map((function(t, e) { return c[a[e]] })))) } var m = a && d && h && i,
            y = m ? v() : p(),
            x = n && !m ? Be(y).reverse() : y; return { colors: x, neutral: f } }

    function gP(t, e) { return function(t, e, n) { var i = Pe(t.split("."), 2),
                r = i[0],
                o = i[1]; if (Xu({ theme: e }, n)) { if (!r.includes("Dark")) { var a = ["".concat(r, "Dark.").concat(o), "".concat(r, "Dark.").concat(o, "-dark"), "".concat(r, "Dark.").concat(o, "Dark")].find((function(t) { return dP(t) ? t : null })); if (a) return a } } else if (r.includes("Dark") || o.includes("dark")) { var s = t.replace(/-dark|Dark/g, ""); if (dP(s)) return s } return t }(t.config.gradient || "singlehue.cyan", t.theme, e) } [
        ["singlehue.bbg-mint", 3],
        ["singlehue.bbg-orange", 3],
        ["singlehue.bbg-cyan", 3],
        ["singlehue.bbg-honey", 3],
        ["singlehue.bbg-teal", 3],
        ["singlehue.bbg-grey", 3],
        ["diverging.redblue", 3],
        ["diverging.redblue", 3, !0]
    ].map((function(t) { var e = Pe(t, 3),
            n = e[0],
            i = e[1],
            r = e[2],
            o = dP(n),
            a = r ? Be(o.indices[i]).reverse() : o.indices[i]; return o.colors[a.slice(-1)] })); var pP = ["color0", "color1", "color2", "color3", "color4", "color5", "color6", "color7", "color8", "color9"];

    function vP(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.data,
            i = t.config,
            r = t.fields,
            o = i.gradientStops,
            a = i.gradientReverse,
            s = i.gradientType,
            l = i.gradientDiscreteOrder,
            c = i.valField,
            u = e.colors,
            f = e.stops,
            d = e.gradientTypeOverride,
            h = e.neutral,
            g = void 0 === h ? WT.base : h; if (!r) return null; if ((!u || !Array.isArray(u) || u.length < 2) && (!f || !Array.isArray(f) || f.length < 2) && (u = pP.reduce((function(t, n, i) { var r = e[n]; return r && (t || (t = []), t.push(r)), t }), null), !u)) return null; var p = gP(t, e),
            v = d || s; if ("discrete" === v) { var m = t.data.map((function(t) { return t[c] })).filter((function(t, e, n) { return n.indexOf(t) === e })).filter((function(t) { return t && "" !== t })); return l && (m = gT(m, l)), { scale: yP(u, m) } } var y = { gradientType: v, gradientScale: "custom", gradientStops: u ? u.length : u, gradientPositions: f && f.join(",") },
            x = vT(c, n, y, !!f),
            b = r[c],
            $ = u; if (!$) { var w = hP(p, o, a, x);
            $ = w.colors, g = w.neutral } var _ = yT(b, x, { colors: $, neutral: g }, t, Se(Se({}, e), {}, { preventRounding: !0 })); return window.colorScale = _.scale, _ }

    function mP(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.data,
            i = t.config,
            r = t.fields,
            o = t.chartOptions,
            a = void 0 === o ? {} : o,
            s = i.gradientType,
            l = i.gradientScale,
            c = i.gradientStops,
            u = i.gradientReverse,
            f = i.gradientIncludeNeutral,
            d = i.gradientDiscreteOrder,
            h = i.includeZeroValues,
            g = i.valField,
            p = e.fieldIndex,
            v = e.gradientTypeOverride,
            m = e.gradientStopsOverride,
            y = gP(t, e),
            x = v || s,
            b = m || c,
            $ = vP(t, e); if ($) return $; var w = null == p ? g : p,
            _ = r[w];
        null != g && null != a.decimalPlaces && "" !== a.decimalPlaces && (_.decimals = a.decimalPlaces); var k = vT(w, n, i),
            M = hP(y, b, u, k),
            S = M.colors,
            A = M.neutral; if (f)
            if ("discrete" === x)(S = S.slice(0, -1)).push(A);
            else if ("custom" === l) { var D = Pe(k.colorCount, 1),
                C = D[0];
            S.splice(C, 0, A) } if ("discrete" === x) { var E = t.data.map((function(t) { return t[w] })).filter((function(t, e, n) { return n.indexOf(t) === e })).filter((function(t) { return t && "" !== t })).filter((function(t) { return !!h || 0 != t })); return d && (E = gT(E, d)), { scale: yP(S, E) } } var O = yT(_, k, { colors: S, neutral: A }, t, e); return window.colorScale = O.scale, O }

    function yP(t, e) { return e.length > t.length && (e = e.slice(0, t.length)), ox().domain(e).range(t) }

    function xP(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (!t.config) return t; if (!t.chartOptions) return t; if (!(t.fields && t.fields[1] && t.fields[2])) return t; var n = e.primaryField,
            i = e.secondaryField,
            r = e.gradientField,
            o = e.scaleField; return n = n || t.fields[1], i = i || t.fields[2], n.unitBefore = t.config.prefixPrimary, n.unit_before = t.config.prefixPrimary, n.unitAfter = t.config.postfixPrimary, n.unit_after = t.config.postfixPrimary, i.unitBefore = t.config.prefixSecondary, i.unit_before = t.config.prefixSecondary, i.unitAfter = t.config.postfixSecondary, i.unit_after = t.config.postfixSecondary, n.numericProperties = { decimals: t.config.decimalsPrimary, tooltipDecimals: t.config.tooltipDecimalsPrimary, scaleStart: t.config.scaleStartPrimary, scaleEnd: t.config.scaleEndPrimary, scaleStep: t.config.scaleStepPrimary }, i.numericProperties = { decimals: t.chartOptions.decimalPlaces, tooltipDecimals: t.chartOptions.tooltipDecimals, scaleStart: t.chartOptions.scaleStart, scaleEnd: t.chartOptions.scaleEnd, scaleStep: t.chartOptions.scaleStep }, r && (r.numericProperties = Se(Se({}, r.numericProperties), {}, { decimals: t.config.gradientDecimals, tooltipDecimals: t.config.gradientTooltipDecimals }), r.unitBefore = t.config.gradientPrefix, r.unitAfter = t.config.gradientPostfix), o && (o.numericProperties = Se(Se({}, o.numericProperties), {}, { decimals: t.config.scalePrecision, tooltipDecimals: t.config.scaleTooltipPrecision }), o.unitBefore = t.config.scalePrefix, o.unitAfter = t.config.scalePostfix), t }

    function bP(t) { var e, n, i, r, o, a, s, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (!t || !t.fields) return null;
        dd(t, l), Bk(t, !1, { preventAxisPropertyOverrides: !0 }); var c = t.config,
            u = c.scatterPlotType,
            f = c.scatterPlotPrimaryField,
            d = c.scatterPlotSecondaryField,
            h = c.scatterPlotScaleField,
            g = c.scatterPlotColorField,
            p = c.scatterPlotColorType,
            v = null != t.fields[3],
            m = v && null != t.fields[4]; if (e = t.fields[1], n = t.fields[2], m ? "numeric" === t.fields[3].type && "numeric" === t.fields[4].type ? (a = t.fields[3], s = t.fields[4]) : "string" === t.fields[3].type ? (i = t.fields[3], a = t.fields[4]) : (a = t.fields[3], i = t.fields[4]) : v && ("string" === t.fields[3].type ? i = t.fields[3] : a = t.fields[3]), null == u || "scale-only" === u || "grouped-scale" === u ? r = a : "gradient-only" === u ? o = a : "gradient-scale" === u ? (o = a, r = s) : "scale-gradient" === u && (r = a, o = s), null != f && "" !== f && (e = "none" === f ? void 0 : t.fields[Number(f)]), null != d && "" !== d && (n = "none" === d ? void 0 : t.fields[Number(d)]), null != h && "" !== h && (r = "none" === h ? void 0 : t.fields[Number(h)]), null != g && "" !== g)
            if ("none" === g) o = void 0, i = void 0;
            else { var y = t.fields[Number(g)];
                null == p ? "numeric" === y.type ? (o = y, i = void 0) : (i = y, o = void 0) : "gradient" === p ? (o = y, i = void 0) : "categorical" === p && (i = y, o = void 0) } return { primaryField: e, secondaryField: n, groupField: i, scaleField: r, gradientField: o } } var $P = { larger: 2, large: 1.5, medium: 1, small: .7, smaller: .4 },
        wP = { dotRadius: 5, displayValueTags: !1, yearsAsContinuous: !0 };

    function _P(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; if (!e) { var i = Se(Se({}, n), {}, { colorSeriesKey: 1 }),
                r = Qu(0, t, i) || pu(t.theme),
                o = tf(t, r, n); return o } var a = Be(new Set(e.data)).slice(0, 7),
            s = a.length,
            l = mP(t, { fieldIndex: e.index, gradientTypeOverride: "discrete", gradientStopsOverride: s }),
            c = l.scale,
            u = tf(t, c.range(), n); return u }

    function kP(t, e) { var n, i, r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = bP(e, o),
            s = a.groupField,
            l = a.scaleField,
            c = a.gradientField,
            u = Xu(e, o),
            f = !e.config.hideScaleLegend; if (l && f) { var d = MP(t, a),
                h = lT(l, Se(Se({}, o), {}, { minRadius: d[0], maxRadius: d[1] }));
            n = cT(l, e, h, Se(Se({}, o), {}, { overlapByDefault: !0 })) } if (c) { var g = mP(e, { fieldIndex: c.index }),
                p = g.scale,
                v = g.bareValueFormatter,
                m = g.fullValueFormatter,
                y = tf(e, p.range(), o),
                x = ef(y),
                b = nf(y),
                $ = p.domain();
            i = { type: "gradient", items: x.map((function(t, e) { return { color: t, stroke: b[e], label: e < x.length - 2 ? v($[e + 1]) : m($[e + 1]) } })) } } if (s) { var w = Be(new Set(s.data)).slice(0, 7),
                _ = _P(e, s, o),
                k = ef(_),
                M = nf(_);
            r = { type: "standard", darkTheme: u, items: w.map((function(t, e) { return { type: "circle", text: t, color: k[e], stroke: M[e] } })) } } return s && l && f ? { primaryLegend: r, secondaryLegend: n } : c && l && f ? { primaryLegend: i, secondaryLegend: n } : s ? { primaryLegend: r } : c ? { primaryLegend: i } : l && f ? { primaryLegend: n } : {} }

    function MP(t, e) { var n = e.scaleField,
            i = t.data.config.scatterPlotSize,
            r = $P[i] || 1,
            o = xl(t.el.offsetWidth, t.options) ? .6 : 1; return n ? [3 * o * r, 30 * o * r] : [10 * o * r, 10 * o * r] }

    function SP(t, e) { var n, i, r, o = e.groupField,
            a = e.scaleField,
            s = e.gradientField,
            l = _P(t.data, o, t.options),
            c = ef(l),
            u = nf(l); if (o && (n = Be(new Set(o.data))), a) { var f = MP(t, e);
            i = lT(a, { minRadius: f[0], maxRadius: f[1] }) } if (s) { var d = mP(t.data, { fieldIndex: s.index });
            r = d.scale } return { colorScale: function(t) { if (o && n) { var e = n.indexOf(o.data[t]); return c[e] } return s ? r(s.data[t]) : c[0] }, radiusScale: function(n) { return i ? i(a.data[n]) : MP(t, e)[0] }, opacityScale: function() { var e = t.data.config.scatterPlotOpacity; return null != e && e >= 0 && e <= 100 ? Number(e) / 100 : 1 }, strokeScale: function(e) { var i = t.data.config.scatterPlotBorder,
                    r = Xu(t.data, t.options),
                    a = 0; return o && n && (a = n.indexOf(o.data[e])), null != u[a] ? u[a] : t.options.scatterPlotStrokeColor ? t.options.scatterPlotStrokeColor : "no-border" === i ? "transparent" : "contrast" === i ? r ? "var(--bg)" : "var(--text)" : r ? "var(--text)" : "var(--bg)" } } }

    function AP(t, e) { var n = t.data.config.scatterPlotTooltipTemplate; return !n || ("only-x" !== n || "x" === e) && (("only-y" !== n || "y" === e) && (("only-gradient" !== n || "gradient" === e) && (("only-scale" !== n || "scale" === e) && (("exclude-x" !== n || "x" !== e) && (("exclude-y" !== n || "y" !== e) && (("exclude-gradient" !== n || "gradient" !== e) && (("exclude-scale" !== n || "scale" !== e) && (("exclude-x-y" !== n || "x" !== e && "y" !== e) && (("exclude-x-gradient" !== n || "x" !== e && "gradient" !== e) && (("exclude-x-scale" !== n || "x" !== e && "scale" !== e) && (("exclude-y-gradient" !== n || "y" !== e && "gradient" !== e) && (("exclude-y-scale" !== n || "y" !== e && "scale" !== e) && ("exclude-gradient-scale" !== n || "gradient" !== e && "scale" !== e))))))))))))) }

    function DP(t) { SM(t, "svelte-1q8rl2h", "path.svelte-1q8rl2h{fill:none;stroke-width:1px}") }

    function CP(t) { var e, n; return { c: function() { e = OM("g"), zM(n = OM("path"), "class", "line s series-0 svelte-1q8rl2h"), zM(n, "d", t[0]), zM(e, "class", "line-graph") }, m: function(t, i) { AM(t, e, i), MM(e, n) }, p: function(t, e) { 1 & Pe(e, 1)[0] && zM(n, "d", t[0]) }, i: cM, o: cM, d: function(t) { t && DM(e) } } }

    function EP(t, e, n) { var i, r = e.env,
            o = e.fields,
            a = e.xScale,
            s = void 0 === a ? function() { return null } : a,
            l = e.yScale,
            c = void 0 === l ? function() { return null } : l,
            u = r.data,
            f = u.config.curve_type,
            d = o,
            h = d.primaryField,
            g = d.secondaryField,
            p = { step: Xw, stepAfter: Gw, stepBefore: qw, smooth: Vw }; return t.$$set = function(t) { "env" in t && n(1, r = t.env), "fields" in t && n(2, o = t.fields), "xScale" in t && n(3, s = t.xScale), "yScale" in t && n(4, c = t.yScale) }, t.$$.update = function() { if (24 & t.$$.dirty) { var e = Yw().x((function(t, e) { return s(u.data[e][h.index]) })).y((function(t, e) { return c(u.data[e][g.index]) }));
                f && e.curve(p[f]), n(0, i = e(u.data)) } }, [i, r, o, s, c] } var OP = function(t) { Ae(n, t); var e = Te(n);

        function n(t) { var i; return be(this, n), wS(Ee(i = e.call(this)), t, EP, CP, pM, { env: 1, fields: 2, xScale: 3, yScale: 4 }, DP), i } return we(n, [{ key: "env", get: function() { return this.$$.ctx[1] }, set: function(t) { this.$$set({ env: t }), lS() } }, { key: "fields", get: function() { return this.$$.ctx[2] }, set: function(t) { this.$$set({ fields: t }), lS() } }, { key: "xScale", get: function() { return this.$$.ctx[3] }, set: function(t) { this.$$set({ xScale: t }), lS() } }, { key: "yScale", get: function() { return this.$$.ctx[4] }, set: function(t) { this.$$set({ yScale: t }), lS() } }]), n }(_S);

    function TP(t, e, n) { var i = t.slice(); return i[15] = e[n], i }

    function PP(t) { var e, n, i, r; return { c: function() { zM(e = OM("circle"), "r", n = t[8](t[15])), zM(e, "cx", i = t[1](t[4].data[t[15]][t[10].index])), zM(e, "cy", r = t[2](t[4].data[t[15]][t[11].index])), RM(e, "fill", t[6](t[15])), RM(e, "stroke", t[0] === t[15] ? t[12]() : t[7](t[15])), RM(e, "opacity", t[9](t[15])) }, m: function(t, n) { AM(t, e, n) }, p: function(t, o) { 8 & o && n !== (n = t[8](t[15])) && zM(e, "r", n), 10 & o && i !== (i = t[1](t[4].data[t[15]][t[10].index])) && zM(e, "cx", i), 12 & o && r !== (r = t[2](t[4].data[t[15]][t[11].index])) && zM(e, "cy", r), 8 & o && RM(e, "fill", t[6](t[15])), 9 & o && RM(e, "stroke", t[0] === t[15] ? t[12]() : t[7](t[15])), 8 & o && RM(e, "opacity", t[9](t[15])) }, d: function(t) { t && DM(e) } } }

    function BP(t) { var e, n, i, r, o; return { c: function() { zM(e = OM("rect"), "x", n = t[1](t[4].data[t[15]][t[10].index]) + t[8](t[15])), zM(e, "y", i = t[2](t[4].data[t[15]][t[11].index]) - t[8](t[15])), zM(e, "width", r = 2 * t[8](t[15])), zM(e, "height", o = 2 * t[8](t[15])), RM(e, "fill", t[6](t[15])), RM(e, "stroke", t[0] === t[15] ? t[12]() : t[7](t[15])), RM(e, "opacity", t[9](t[15])) }, m: function(t, n) { AM(t, e, n) }, p: function(t, a) { 10 & a && n !== (n = t[1](t[4].data[t[15]][t[10].index]) + t[8](t[15])) && zM(e, "x", n), 12 & a && i !== (i = t[2](t[4].data[t[15]][t[11].index]) - t[8](t[15])) && zM(e, "y", i), 8 & a && r !== (r = 2 * t[8](t[15])) && zM(e, "width", r), 8 & a && o !== (o = 2 * t[8](t[15])) && zM(e, "height", o), 8 & a && RM(e, "fill", t[6](t[15])), 9 & a && RM(e, "stroke", t[0] === t[15] ? t[12]() : t[7](t[15])), 8 & a && RM(e, "opacity", t[9](t[15])) }, d: function(t) { t && DM(e) } } }

    function LP(t) { var e; var n = function(t, e) { return "square" === t[5] ? BP : PP }(t),
            i = n(t); return { c: function() { i.c(), e = BM() }, m: function(t, n) { i.m(t, n), AM(t, e, n) }, p: function(t, e) { i.p(t, e) }, d: function(t) { i.d(t), t && DM(e) } } }

    function zP(t) { for (var e, n = t[3], i = [], r = 0; r < n.length; r += 1) i[r] = LP(TP(t, n, r)); return { c: function() { e = OM("g"); for (var t = 0; t < i.length; t += 1) i[t].c();
                zM(e, "class", "scatter-plot") }, m: function(t, n) { AM(t, e, n); for (var r = 0; r < i.length; r += 1) i[r].m(e, null) }, p: function(t, r) { var o = Pe(r, 1)[0]; if (8191 & o) { var a; for (n = t[3], a = 0; a < n.length; a += 1) { var s = TP(t, n, a);
                        i[a] ? i[a].p(s, o) : (i[a] = LP(s), i[a].c(), i[a].m(e, null)) } for (; a < i.length; a += 1) i[a].d(1);
                    i.length = n.length } }, i: cM, o: cM, d: function(t) { t && DM(e), CM(i, t) } } }

    function YP(t, e, n) { var i, r = e.env,
            o = e.fields,
            a = e.activeTooltipIndex,
            s = e.xScale,
            l = void 0 === s ? function() { return null } : s,
            c = e.yScale,
            u = void 0 === c ? function() { return null } : c,
            f = r.data,
            d = f.config.scatterPlotRenderIcon,
            h = void 0 === d ? "circle" : d,
            g = SP(r, o),
            p = g.colorScale,
            v = g.strokeScale,
            m = g.radiusScale,
            y = g.opacityScale,
            x = o,
            b = x.primaryField,
            $ = void 0 === b ? { index: 1 } : b,
            w = x.secondaryField,
            _ = void 0 === w ? { index: 2 } : w; return t.$$set = function(t) { "env" in t && n(13, r = t.env), "fields" in t && n(14, o = t.fields), "activeTooltipIndex" in t && n(0, a = t.activeTooltipIndex), "xScale" in t && n(1, l = t.xScale), "yScale" in t && n(2, u = t.yScale) }, n(3, i = f.data.map((function(t, e) { return e })).sort((function(t, e) { return m(e) - m(t) }))), [a, l, u, i, f, h, p, v, m, y, $, _, function() { return Xu(r.data, r.options) ? "var(--bg)" : "var(--text)" }, r, o] } var FP = function(t) { Ae(n, t); var e = Te(n);

        function n(t) { var i; return be(this, n), wS(Ee(i = e.call(this)), t, YP, zP, pM, { env: 13, fields: 14, activeTooltipIndex: 0, xScale: 1, yScale: 2 }), i } return we(n, [{ key: "env", get: function() { return this.$$.ctx[13] }, set: function(t) { this.$$set({ env: t }), lS() } }, { key: "fields", get: function() { return this.$$.ctx[14] }, set: function(t) { this.$$set({ fields: t }), lS() } }, { key: "activeTooltipIndex", get: function() { return this.$$.ctx[0] }, set: function(t) { this.$$set({ activeTooltipIndex: t }), lS() } }, { key: "xScale", get: function() { return this.$$.ctx[1] }, set: function(t) { this.$$set({ xScale: t }), lS() } }, { key: "yScale", get: function() { return this.$$.ctx[2] }, set: function(t) { this.$$set({ yScale: t }), lS() } }]), n }(_S);

    function WP(t, e) { for (var n = !0, i = 0, r = ["bottom", "height", "left", "right", "top", "width", "x", "y"]; i < r.length; i++) { var o = r[i]; if (t[o] !== e[o]) { n = !1; break } } return n }

    function RP(t, e) { return !e || (t.height !== e.height || t.width !== e.width) } var NP = function(t) { return { width: 16 & t[0], height: 32 & t[0] } },
        HP = function(t) { return { width: t[4], height: t[5] } },
        jP = function(t) { return { xRange: 64 & t[0] } },
        IP = function(t) { return { xRange: t[6], afterRender: t[21] } },
        VP = function(t) { return { yRange: 4096 & t[0] } },
        UP = function(t) { return { yRange: t[12], afterRender: t[20] } };

    function XP(t) { var e, n, i = t[44]["y-axis"],
            r = mM(i, t, t[43], UP); return { c: function() { e = OM("g"), r && r.c(), zM(e, "class", "y-axis-outer"), zM(e, "style", t[15]) }, m: function(i, o) { AM(i, e, o), r && r.m(e, null), t[45](e), n = !0 }, p: function(t, o) { r && r.p && (!n || 4096 & o[0] | 4096 & o[1]) && bM(r, i, t, t[43], n ? xM(i, t[43], o, VP) : $M(t[43]), UP), (!n || 32768 & o[0]) && zM(e, "style", t[15]) }, i: function(t) { n || (gS(r, t), n = !0) }, o: function(t) { pS(r, t), n = !1 }, d: function(n) { n && DM(e), r && r.d(n), t[45](null) } } }

    function qP(t) { var e, n, i = t[44]["x-axis"],
            r = mM(i, t, t[43], IP); return { c: function() { e = OM("g"), r && r.c(), zM(e, "class", "x-axis-outer"), zM(e, "style", t[14]) }, m: function(i, o) { AM(i, e, o), r && r.m(e, null), t[46](e), n = !0 }, p: function(t, o) { r && r.p && (!n || 64 & o[0] | 4096 & o[1]) && bM(r, i, t, t[43], n ? xM(i, t[43], o, jP) : $M(t[43]), IP), (!n || 16384 & o[0]) && zM(e, "style", t[14]) }, i: function(t) { n || (gS(r, t), n = !0) }, o: function(t) { pS(r, t), n = !1 }, d: function(n) { n && DM(e), r && r.d(n), t[46](null) } } }

    function GP(t) { var e, n, i = t[44].renderer,
            r = mM(i, t, t[43], HP); return { c: function() { e = OM("rect"), r && r.c(), zM(e, "class", "extents"), zM(e, "x", "0"), zM(e, "y", "0"), zM(e, "width", t[4]), zM(e, "height", t[5]) }, m: function(t, i) { AM(t, e, i), r && r.m(t, i), n = !0 }, p: function(t, o) {
                (!n || 16 & o[0]) && zM(e, "width", t[4]), (!n || 32 & o[0]) && zM(e, "height", t[5]), r && r.p && (!n || 48 & o[0] | 4096 & o[1]) && bM(r, i, t, t[43], n ? xM(i, t[43], o, NP) : $M(t[43]), HP) }, i: function(t) { n || (gS(r, t), n = !0) }, o: function(t) { pS(r, t), n = !1 }, d: function(t) { t && DM(e), r && r.d(t) } } }

    function ZP(t) { var e, n, i, r, o, a, s, l = t[18] && XP(t),
            c = t[19] && qP(t),
            u = t[7] && GP(t); return { c: function() { e = EM("div"), n = OM("svg"), i = OM("g"), l && l.c(), r = BM(), c && c.c(), o = OM("g"), u && u.c(), zM(o, "class", "draw-container"), zM(o, "style", t[13]), zM(o, "data-width", t[4]), zM(o, "data-height", t[5]), zM(i, "class", "margin"), RM(i, "transform", "translate(" + t[0].left + "px, " + t[0].top + "px)"), zM(n, "class", "svg-wrapper"), zM(n, "style", t[17]), zM(e, "style", t[16]), oS((function() { return t[50].call(e) })) }, m: function(f, d) { AM(f, e, d), MM(e, n), MM(n, i), l && l.m(i, null), MM(i, r), c && c.m(i, null), MM(i, o), u && u.m(o, null), t[47](o), t[48](i), t[49](n), a = VM(e, t[50].bind(e)), s = !0 }, p: function(t, a) { t[18] ? l ? (l.p(t, a), 262144 & a[0] && gS(l, 1)) : ((l = XP(t)).c(), gS(l, 1), l.m(i, r)) : l && (dS(), pS(l, 1, 1, (function() { l = null })), hS()), t[19] ? c ? (c.p(t, a), 524288 & a[0] && gS(c, 1)) : ((c = qP(t)).c(), gS(c, 1), c.m(i, o)) : c && (dS(), pS(c, 1, 1, (function() { c = null })), hS()), t[7] ? u ? (u.p(t, a), 128 & a[0] && gS(u, 1)) : ((u = GP(t)).c(), gS(u, 1), u.m(o, null)) : u && (dS(), pS(u, 1, 1, (function() { u = null })), hS()), (!s || 8192 & a[0]) && zM(o, "style", t[13]), (!s || 16 & a[0]) && zM(o, "data-width", t[4]), (!s || 32 & a[0]) && zM(o, "data-height", t[5]), (!s || 1 & a[0]) && RM(i, "transform", "translate(" + t[0].left + "px, " + t[0].top + "px)"), (!s || 131072 & a[0]) && zM(n, "style", t[17]), (!s || 65536 & a[0]) && zM(e, "style", t[16]) }, i: function(t) { s || (gS(l), gS(c), gS(u), s = !0) }, o: function(t) { pS(l), pS(c), pS(u), s = !1 }, d: function(n) { n && DM(e), l && l.d(), c && c.d(), u && u.d(), t[47](null), t[48](null), t[49](null), a() } } }

    function QP(t, e, n) { var i, r, o, a, s, l, c, u, f, d, h, g, p, v, m, y, x, b, $, w, _, k = e.$$slots,
            M = void 0 === k ? {} : k,
            S = e.$$scope,
            A = e.env,
            D = e.aspectRatio,
            C = void 0 === D ? 2.5 : D,
            E = e.yAxisInnerPadding,
            O = void 0 === E ? 0 : E,
            T = e.yAxisInnerPaddingLeft,
            P = void 0 === T ? 0 : T,
            B = e.yAxisInnerPaddingRight,
            L = void 0 === B ? 25 : B,
            z = e.xAxisInnerPadding,
            Y = void 0 === z ? 0 : z,
            F = e.yAxisPadding,
            W = void 0 === F ? 0 : F,
            R = e.xAxisPadding,
            N = void 0 === R ? 0 : R,
            H = e.yAxisPosition,
            j = void 0 === H ? "right" : H,
            I = e.xAxisPosition,
            V = void 0 === I ? "bottom" : I,
            U = e.minHeight,
            X = void 0 === U ? 160 : U,
            q = e.margin,
            G = void 0 === q ? { top: 0, left: 8, right: 8, bottom: 0 } : q,
            Z = {},
            Q = {},
            K = {},
            J = {},
            tt = {},
            et = 0,
            nt = 20,
            it = 22,
            rt = function(t) { var e = [],
                    n = { addPostLayoutHandler: function(t) { e.push(t) }, emitPostLayout: function(t, i) { e.forEach((function(e) { e(t, i, n) })) }, g: function() { return Ep(t.el.querySelector("g.margin")) }, draw: function() { return Ep(t.el.querySelector("g.draw-container")) }, extents: function() { return Ep(t.el.querySelector(".extents")) }, container: function() { return Ep(t.el.querySelector(".chart")) }, xAxis: function() { return Ep(t.el.querySelector(".axis.axis-x")) }, yAxis: function() { return Ep(t.el.querySelector(".axis.axis-y")) }, svg: function() { return Ep(t.el.querySelector("svg.svg-wrapper")) }, margin: function() { return Ep(t.el.querySelector("g.margin")) } }; return n }(A);
        rt.yAxisInnerPadding = function() { return O }, rt.yAxisInnerPaddingRight = function() { return L }, rt.yAxisInnerPaddingLeft = function() { return P }, rt.xAxisInnerPadding = function() { return Y }, rt.updateBounds = function() { return lt() }, rt.width = function() { return m }, rt.outerWidth = function() { return m + 2 * O + P + L }, rt.height = function() { return y }, rt.outerHeight = function() { return y + 2 * Y }, AS.set(rt); var ot = function(t) { return null != t.top },
            at = function() { var t = v.getBoundingClientRect();
                WP(tt, t) || n(37, tt = v.getBoundingClientRect()) },
            st = function() { var t = p.getBoundingClientRect();
                WP(J, t) || n(36, J = p.getBoundingClientRect()) },
            lt = function() { var t = f.getBoundingClientRect(),
                    e = u.getBoundingClientRect(),
                    i = d.getBoundingClientRect();
                WP(Z, t) || n(33, Z = t), WP(K, e) || n(35, K = u.getBoundingClientRect()), WP(Q, i) || n(34, Q = d.getBoundingClientRect()) }; return rt.updateAllBounds = function() { at(), st(), lt() }, t.$$set = function(t) { "env" in t && n(22, A = t.env), "aspectRatio" in t && n(23, C = t.aspectRatio), "yAxisInnerPadding" in t && n(24, O = t.yAxisInnerPadding), "yAxisInnerPaddingLeft" in t && n(25, P = t.yAxisInnerPaddingLeft), "yAxisInnerPaddingRight" in t && n(26, L = t.yAxisInnerPaddingRight), "xAxisInnerPadding" in t && n(27, Y = t.xAxisInnerPadding), "yAxisPadding" in t && n(28, W = t.yAxisPadding), "xAxisPadding" in t && n(29, N = t.xAxisPadding), "yAxisPosition" in t && n(30, j = t.yAxisPosition), "xAxisPosition" in t && n(31, V = t.xAxisPosition), "minHeight" in t && n(32, X = t.minHeight), "margin" in t && n(0, G = t.margin), "$$scope" in t && n(43, S = t.$$scope) }, t.$$.update = function() { if (96 & t.$$.dirty[1] && n(7, i = null != tt.top && null != J.top), 268435456 & t.$$.dirty[0] | 64 & t.$$.dirty[1] && n(39, nt = ot(tt) ? tt.width + W : 20), 117440512 & t.$$.dirty[0] && n(42, c = 2 * O + P + L), 29 & t.$$.dirty[0] | 2304 & t.$$.dirty[1] && v && (n(4, m = h - nt - G.left - G.right - c), n(6, x = [0, m])), 64 & t.$$.dirty[0] | 64 & t.$$.dirty[1] && n(19, r = null != tt.top && null != x), 536870912 & t.$$.dirty[0] | 32 & t.$$.dirty[1] && n(40, it = ot(J) ? J.height + N : 22), 8388613 & t.$$.dirty[0] | 514 & t.$$.dirty[1] && null != h && n(5, y = Math.max(X, (h - G.left - G.right) / C - it - G.top - G.bottom)), 34 & t.$$.dirty[0] && n(18, o = null != f && null != y), 120 & t.$$.dirty[1] && n(38, et = Math.min(tt.top, J.top, Q.top, K.top)), 8 & t.$$.dirty[1] && n(10, g = Q.height), 132 & t.$$.dirty[1] && n(41, a = Math.max(5, Z.top - et)), 1032 & t.$$.dirty[1] && n(17, s = "width: ".concat(Q.width, "px; height: ").concat(Q.height - a, "px;")), 1024 & t.$$.dirty[1] && n(16, l = "margin-top: ".concat(a, "px;")), 32 & t.$$.dirty[0] && n(12, b = [y, 0]), 1258291377 & t.$$.dirty[0] | 3841 & t.$$.dirty[1] && i) { n(15, _ = "right" === j ? "transform: translate(".concat(m + c, "px, 0)") : "transform: translate(0, 0)"), n(14, w = "bottom" === V ? "transform: translate(".concat(O, "px, ").concat(y, "px)") : "transform: translate(".concat(O, "px, 0)")); var e = "right" === j ? O + P : O + P + nt,
                    u = "bottom" === V ? Y : Y + it;
                n(13, $ = "transform: translate(".concat(e, "px, ").concat(u, "px)")), SS.set({ width: m, height: y, outerWidth: m + c, outerHeight: y + 2 * Y, marginTop: a, top: u + G.top, left: e + G.left }), lt(), A.layout.emitPostLayout(A.el, A) } }, [G, f, h, v, m, y, x, i, u, d, g, p, b, $, w, _, l, s, o, r, at, st, A, C, O, P, L, Y, W, N, j, V, X, Z, Q, K, J, tt, et, nt, it, a, c, S, M, function(t) { tS[t ? "unshift" : "push"]((function() { n(3, v = t) })) }, function(t) { tS[t ? "unshift" : "push"]((function() { n(11, p = t) })) }, function(t) { tS[t ? "unshift" : "push"]((function() { n(8, u = t) })) }, function(t) { tS[t ? "unshift" : "push"]((function() { n(9, d = t) })) }, function(t) { tS[t ? "unshift" : "push"]((function() { n(1, f = t) })) }, function() { h = this.clientWidth, g = this.clientHeight, n(2, h), n(10, g), n(34, Q) }] } var KP = function(t) { Ae(n, t); var e = Te(n);

        function n(t) { var i; return be(this, n), wS(Ee(i = e.call(this)), t, QP, ZP, pM, { env: 22, aspectRatio: 23, yAxisInnerPadding: 24, yAxisInnerPaddingLeft: 25, yAxisInnerPaddingRight: 26, xAxisInnerPadding: 27, yAxisPadding: 28, xAxisPadding: 29, yAxisPosition: 30, xAxisPosition: 31, minHeight: 32, margin: 0 }, null, [-1, -1]), i } return we(n, [{ key: "env", get: function() { return this.$$.ctx[22] }, set: function(t) { this.$$set({ env: t }), lS() } }, { key: "aspectRatio", get: function() { return this.$$.ctx[23] }, set: function(t) { this.$$set({ aspectRatio: t }), lS() } }, { key: "yAxisInnerPadding", get: function() { return this.$$.ctx[24] }, set: function(t) { this.$$set({ yAxisInnerPadding: t }), lS() } }, { key: "yAxisInnerPaddingLeft", get: function() { return this.$$.ctx[25] }, set: function(t) { this.$$set({ yAxisInnerPaddingLeft: t }), lS() } }, { key: "yAxisInnerPaddingRight", get: function() { return this.$$.ctx[26] }, set: function(t) { this.$$set({ yAxisInnerPaddingRight: t }), lS() } }, { key: "xAxisInnerPadding", get: function() { return this.$$.ctx[27] }, set: function(t) { this.$$set({ xAxisInnerPadding: t }), lS() } }, { key: "yAxisPadding", get: function() { return this.$$.ctx[28] }, set: function(t) { this.$$set({ yAxisPadding: t }), lS() } }, { key: "xAxisPadding", get: function() { return this.$$.ctx[29] }, set: function(t) { this.$$set({ xAxisPadding: t }), lS() } }, { key: "yAxisPosition", get: function() { return this.$$.ctx[30] }, set: function(t) { this.$$set({ yAxisPosition: t }), lS() } }, { key: "xAxisPosition", get: function() { return this.$$.ctx[31] }, set: function(t) { this.$$set({ xAxisPosition: t }), lS() } }, { key: "minHeight", get: function() { return this.$$.ctx[32] }, set: function(t) { this.$$set({ minHeight: t }), lS() } }, { key: "margin", get: function() { return this.$$.ctx[0] }, set: function(t) { this.$$set({ margin: t }), lS() } }]), n }(_S);

    function JP(t) { var e, n; return { c: function() { zM(e = OM("g"), "class", n = "axis-wrapper axis axis-" + t[0]) }, m: function(n, i) { AM(n, e, i), t[12](e) }, p: function(t, i) { 1 & Pe(i, 1)[0] && n !== (n = "axis-wrapper axis axis-" + t[0]) && zM(e, "class", n) }, i: cM, o: cM, d: function(n) { n && DM(e), t[12](null) } } }

    function tB(t, e, n) { var i, r, o = e.env,
            a = e.field,
            s = e.series,
            l = e.id,
            c = void 0 === l ? "x" : l,
            u = e.type,
            f = void 0 === u ? "linear" : u,
            d = e.orientation,
            h = void 0 === d ? "vertical" : d,
            g = e.position,
            p = void 0 === g ? "right" : g,
            v = e.range,
            m = void 0 === v ? [0, 100] : v,
            y = e.props,
            x = e.afterRender,
            b = [-1, -1]; return t.$$set = function(t) { "env" in t && n(2, o = t.env), "field" in t && n(3, a = t.field), "series" in t && n(4, s = t.series), "id" in t && n(0, c = t.id), "type" in t && n(5, f = t.type), "orientation" in t && n(6, h = t.orientation), "position" in t && n(7, p = t.position), "range" in t && n(8, m = t.range), "props" in t && n(9, y = t.props), "afterRender" in t && n(10, x = t.afterRender) }, t.$$.update = function() { if (4095 & t.$$.dirty) { var e = Se({ series: s, range: m, orientation: h, position: p, customField: a }, y); "linear" === f ? n(11, r = JA(e)) : "band" === f ? n(11, r = tD(e)) : "date" === f && n(11, r = nD(e)), r.orientation(h).position(p).range(m).data(o.data), !i || m[0] === b[0] && m[1] === b[1] || (r(Ep(i), o), x && x(), b = [m[0], m[1]], "x" === c ? DS.set(r) : CS.set(r)) } }, [c, i, o, a, s, f, h, p, m, y, x, r, function(t) { tS[t ? "unshift" : "push"]((function() { n(1, i = t) })) }] } var eB = function(t) { Ae(n, t); var e = Te(n);

        function n(t) { var i; return be(this, n), wS(Ee(i = e.call(this)), t, tB, JP, pM, { env: 2, field: 3, series: 4, id: 0, type: 5, orientation: 6, position: 7, range: 8, props: 9, afterRender: 10 }), i } return we(n, [{ key: "env", get: function() { return this.$$.ctx[2] }, set: function(t) { this.$$set({ env: t }), lS() } }, { key: "field", get: function() { return this.$$.ctx[3] }, set: function(t) { this.$$set({ field: t }), lS() } }, { key: "series", get: function() { return this.$$.ctx[4] }, set: function(t) { this.$$set({ series: t }), lS() } }, { key: "id", get: function() { return this.$$.ctx[0] }, set: function(t) { this.$$set({ id: t }), lS() } }, { key: "type", get: function() { return this.$$.ctx[5] }, set: function(t) { this.$$set({ type: t }), lS() } }, { key: "orientation", get: function() { return this.$$.ctx[6] }, set: function(t) { this.$$set({ orientation: t }), lS() } }, { key: "position", get: function() { return this.$$.ctx[7] }, set: function(t) { this.$$set({ position: t }), lS() } }, { key: "range", get: function() { return this.$$.ctx[8] }, set: function(t) { this.$$set({ range: t }), lS() } }, { key: "props", get: function() { return this.$$.ctx[9] }, set: function(t) { this.$$set({ props: t }), lS() } }, { key: "afterRender", get: function() { return this.$$.ctx[10] }, set: function(t) { this.$$set({ afterRender: t }), lS() } }]), n }(_S);

    function nB(t) { var e; return { c: function() { zM(e = OM("g"), "class", "grid grid-" + t[2]), zM(e, "data-dimensions", t[0]) }, m: function(n, i) { AM(n, e, i), t[7](e) }, p: function(t, n) { 1 & Pe(n, 1)[0] && zM(e, "data-dimensions", t[0]) }, i: cM, o: cM, d: function(n) { n && DM(e), t[7](null) } } }

    function iB(t, e, n) { var i, r, o = e.env,
            a = e.dimensions,
            s = e.orientation,
            l = void 0 === s ? "horizontal" : s,
            c = e.options,
            u = void 0 === c ? {} : c,
            f = { verticalGridLength: 8, extendAllVerticalTicks: !0, extendVerticalZeroTick: !1, gridTransform: null, hideBottomValueTick: "horizontal" === l, useInnerPadding: !1 },
            d = "horizontal" === l ? "x" : "y"; return t.$$set = function(t) { "env" in t && n(3, o = t.env), "dimensions" in t && n(0, a = t.dimensions), "orientation" in t && n(4, l = t.orientation), "options" in t && n(5, u = t.options) }, t.$$.update = function() { if (107 & t.$$.dirty) { var e = $A(Se(Se({ orientation: d, length: "x" === d ? a.outerWidth : a.outerHeight }, f), u));
                r && RP(a, i) && (e(Ep(r), o), n(6, i = a)) } }, [a, r, d, o, l, u, i, function(t) { tS[t ? "unshift" : "push"]((function() { n(1, r = t) })) }] } var rB = function(t) { Ae(n, t); var e = Te(n);

        function n(t) { var i; return be(this, n), wS(Ee(i = e.call(this)), t, iB, nB, pM, { env: 3, dimensions: 0, orientation: 4, options: 5 }), i } return we(n, [{ key: "env", get: function() { return this.$$.ctx[3] }, set: function(t) { this.$$set({ env: t }), lS() } }, { key: "dimensions", get: function() { return this.$$.ctx[0] }, set: function(t) { this.$$set({ dimensions: t }), lS() } }, { key: "orientation", get: function() { return this.$$.ctx[4] }, set: function(t) { this.$$set({ orientation: t }), lS() } }, { key: "options", get: function() { return this.$$.ctx[5] }, set: function(t) { this.$$set({ options: t }), lS() } }]), n }(_S);

    function oB(t) { SM(t, "svelte-4qjlyl", ".tooltip-hidden-point.svelte-4qjlyl.svelte-4qjlyl{visibility:hidden;position:absolute;pointer-events:none;top:var(--top);left:var(--left);width:10px;height:10px;background-color:rgba(0, 0, 0, 0)}.dvz-tooltip.svelte-4qjlyl.svelte-4qjlyl{position:absolute;z-index:21;top:-1000px;width:auto;min-width:var(--min-width);max-width:400px;padding:7px;border:1px solid var(--text);box-shadow:0 0 10px rgba(140,140,140,0.2);background:var(--bg);pointer-events:none;font-size:10px;line-height:12px;position:absolute;left:var(--left);top:var(--top);transform:var(--transform)}.dvz-tooltip.dark.svelte-4qjlyl.svelte-4qjlyl{border-color:var(--bg);color:var(--bg);background-color:var(--text);box-shadow:0 0 10px rgba(20,20,20,0.2)}svg.arrow.svelte-4qjlyl.svelte-4qjlyl{position:absolute;overflow:visible;top:var(--top);left:var(--left);width:var(--width);height:var(--height)}path.svelte-4qjlyl.svelte-4qjlyl{fill:var(--bg);stroke:var(--text)}.dark.svelte-4qjlyl path.svelte-4qjlyl{fill:var(--text);stroke:var(--bg)}") }

    function aB(t) { var e, n, i, r, o, a, s, l, c, u = t[23].default,
            f = mM(u, t, t[22], null); return { c: function() { e = EM("div"), i = PM(), r = EM("div"), f && f.c(), o = PM(), a = OM("svg"), s = OM("path"), zM(e, "class", "tooltip-hidden-point svelte-4qjlyl"), zM(e, "style", n = "--left: ".concat(t[1], "; --top: ").concat(t[2], ";")), zM(s, "d", t[7]), zM(s, "fill", "white"), zM(s, "stroke", "black"), zM(s, "class", "svelte-4qjlyl"), zM(a, "class", "arrow svelte-4qjlyl"), zM(a, "style", t[5]), zM(r, "class", l = "dvz-tooltip tt-svelte " + (t[0] ? "dark" : "") + " svelte-4qjlyl"), zM(r, "style", t[6]) }, m: function(n, l) { AM(n, e, l), t[24](e), AM(n, i, l), AM(n, r, l), f && f.m(r, null), MM(r, o), MM(r, a), MM(a, s), t[25](r), c = !0 }, p: function(t, i) { var o = Pe(i, 1)[0];
                (!c || 6 & o && n !== (n = "--left: ".concat(t[1], "; --top: ").concat(t[2], ";"))) && zM(e, "style", n), f && f.p && (!c || 4194304 & o) && bM(f, u, t, t[22], c ? xM(u, t[22], o, null) : $M(t[22]), null), (!c || 128 & o) && zM(s, "d", t[7]), (!c || 32 & o) && zM(a, "style", t[5]), (!c || 1 & o && l !== (l = "dvz-tooltip tt-svelte " + (t[0] ? "dark" : "") + " svelte-4qjlyl")) && zM(r, "class", l), (!c || 64 & o) && zM(r, "style", t[6]) }, i: function(t) { c || (gS(f, t), c = !0) }, o: function(t) { pS(f, t), c = !1 }, d: function(n) { n && DM(e), t[24](null), n && DM(i), n && DM(r), f && f.d(n), t[25](null) } } } var sB = "TOP",
        lB = "BOTTOM",
        cB = "LEFT",
        uB = "RIGHT",
        fB = "CENTER";

    function dB(t, e, n) { var i, r, o, a, s, l, c, u, f, d, h, g, p, v, m, y, x = e,
            b = x.$$slots,
            $ = void 0 === b ? {} : b,
            w = x.$$scope,
            _ = e.darkTheme,
            k = void 0 !== _ && _,
            M = e.left,
            S = e.top,
            A = e.arrowWidth,
            D = void 0 === A ? 10 : A,
            C = e.arrowHeight,
            E = void 0 === C ? 10 : C,
            O = e.minWidth,
            T = void 0 === O ? 50 : O,
            P = sB,
            B = fB; return ZM((function() { var t, e;
            n(12, m = null === (t = v) || void 0 === t ? void 0 : t.getBoundingClientRect()), n(13, y = null === (e = p) || void 0 === e ? void 0 : e.getBoundingClientRect()) })), t.$$set = function(t) { n(28, e = uM(uM({}, e), wM(t))), "darkTheme" in t && n(0, k = t.darkTheme), "left" in t && n(1, M = t.left), "top" in t && n(2, S = t.top), "arrowWidth" in t && n(8, D = t.arrowWidth), "arrowHeight" in t && n(9, E = t.arrowHeight), "minWidth" in t && n(10, T = t.minWidth), "$$scope" in t && n(22, w = t.$$scope) }, t.$$.update = function() { var i, p, v, x, b, $, w, _, k, A, C; if (n(20, (p = (i = e).circleRadius, r = void 0 === p ? 4 : p, v = i.circleBuffer, o = void 0 === v ? 3 : v, i), r, (n(19, o), n(28, e))), 12288 & t.$$.dirty && y && m) { var O = m.left,
                    L = y.width,
                    z = O - L / 2;
                O + L / 2 > window.innerWidth ? n(11, B = cB) : n(11, B = z < 0 ? uB : fB) }(2048 & t.$$.dirty && n(21, (x = B, a = (b = {}, _e(b, cB, [
                [_ = .5, 0],
                [_, w = E * (P === lB ? -1 : 1)],
                [-($ = D), 0]
            ]), _e(b, uB, [
                [-_, 0],
                [-_, w],
                [$, 0]
            ]), _e(b, fB, [
                [-$, 0],
                [0, w],
                [$, 0]
            ]), b)[x])), 2097152 & t.$$.dirty && n(7, s = a.map((function(t, e) { return "".concat(0 === e ? "M" : "L").concat(t[0], ",").concat(t[1]) })).join("")), 2048 & t.$$.dirty) && n(18, l = (k = {}, _e(k, cB, "-100%"), _e(k, fB, "-50%"), _e(k, uB, "0"), k)[B]);
            1573376 & t.$$.dirty && n(17, c = (A = {}, _e(A, sB, "calc(-100% - ".concat(E + r + o, "px)")), _e(A, lB, "calc(50% - ".concat(E + r + o, "px)")), A).TOP);
            (393216 & t.$$.dirty && n(16, u = "translate(".concat(l, ", ").concat(c, ")")), 2048 & t.$$.dirty) && n(15, f = (C = {}, _e(C, cB, "100%"), _e(C, fB, "50%"), _e(C, uB, 0), C)[B]);
            66566 & t.$$.dirty && n(6, h = "\n    --left: ".concat(M, ";\n    --top: ").concat(S, ";\n    --min-width: ").concat(T, ";\n    --transform: ").concat(u, ";\n  ")), 49920 & t.$$.dirty && n(5, g = "\n    --width: ".concat(D, "px;\n    --height: ").concat(E, "px;\n    --left: ").concat(f, ";\n    --top: ").concat(d, ";\n  ")) }, n(14, d = (i = {}, _e(i, sB, "100%"), _e(i, "MIDDLE", "50%"), _e(i, lB, 0), i).TOP), e = wM(e), [k, M, S, p, v, g, h, s, D, E, T, B, m, y, d, f, u, c, l, o, r, a, w, $, function(t) { tS[t ? "unshift" : "push"]((function() { n(4, v = t) })) }, function(t) { tS[t ? "unshift" : "push"]((function() { n(3, p = t) })) }] } var hB = function(t) { Ae(n, t); var e = Te(n);

            function n(t) { var i; return be(this, n), wS(Ee(i = e.call(this)), t, dB, aB, pM, { darkTheme: 0, left: 1, top: 2, arrowWidth: 8, arrowHeight: 9, minWidth: 10 }, oB), i } return we(n, [{ key: "darkTheme", get: function() { return this.$$.ctx[0] }, set: function(t) { this.$$set({ darkTheme: t }), lS() } }, { key: "left", get: function() { return this.$$.ctx[1] }, set: function(t) { this.$$set({ left: t }), lS() } }, { key: "top", get: function() { return this.$$.ctx[2] }, set: function(t) { this.$$set({ top: t }), lS() } }, { key: "arrowWidth", get: function() { return this.$$.ctx[8] }, set: function(t) { this.$$set({ arrowWidth: t }), lS() } }, { key: "arrowHeight", get: function() { return this.$$.ctx[9] }, set: function(t) { this.$$set({ arrowHeight: t }), lS() } }, { key: "minWidth", get: function() { return this.$$.ctx[10] }, set: function(t) { this.$$set({ minWidth: t }), lS() } }]), n }(_S),
        gB = /^\s+|\s+$/g,
        pB = /^[-+]0x[0-9a-f]+$/i,
        vB = /^0b[01]+$/i,
        mB = /^0o[0-7]+$/i,
        yB = parseInt,
        xB = "object" == typeof e && e && e.Object === Object && e,
        bB = "object" == typeof self && self && self.Object === Object && self,
        $B = xB || bB || Function("return this")(),
        wB = Object.prototype.toString,
        _B = Math.max,
        kB = Math.min,
        MB = function() { return $B.Date.now() };

    function SB(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) }

    function AB(t) { if ("number" == typeof t) return t; if (function(t) { return "symbol" == typeof t || function(t) { return !!t && "object" == typeof t }(t) && "[object Symbol]" == wB.call(t) }(t)) return NaN; if (SB(t)) { var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = SB(e) ? e + "" : e } if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(gB, ""); var n = vB.test(t); return n || mB.test(t) ? yB(t.slice(2), n ? 2 : 8) : pB.test(t) ? NaN : +t } var DB = function(t, e, n) { var i, r, o, a, s, l, c = 0,
            u = !1,
            f = !1,
            d = !0; if ("function" != typeof t) throw new TypeError("Expected a function");

        function h(e) { var n = i,
                o = r; return i = r = void 0, c = e, a = t.apply(o, n) }

        function g(t) { return c = t, s = setTimeout(v, e), u ? h(t) : a }

        function p(t) { var n = t - l; return void 0 === l || n >= e || n < 0 || f && t - c >= o }

        function v() { var t = MB(); if (p(t)) return m(t);
            s = setTimeout(v, function(t) { var n = e - (t - l); return f ? kB(n, o - (t - c)) : n }(t)) }

        function m(t) { return s = void 0, d && i ? h(t) : (i = r = void 0, a) }

        function y() { var t = MB(),
                n = p(t); if (i = arguments, r = this, l = t, n) { if (void 0 === s) return g(l); if (f) return s = setTimeout(v, e), h(l) } return void 0 === s && (s = setTimeout(v, e)), a } return e = AB(e) || 0, SB(n) && (u = !!n.leading, o = (f = "maxWait" in n) ? _B(AB(n.maxWait) || 0, e) : o, d = "trailing" in n ? !!n.trailing : d), y.cancel = function() { void 0 !== s && clearTimeout(s), c = 0, i = l = r = s = void 0 }, y.flush = function() { return void 0 === s ? a : m(MB()) }, y };

    function CB(t, e) { return Math.sqrt(Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2)) }

    function EB(t = {}) { const e = t.maxWidthMode || !1; const n = (t, n) => { const i = e ? 1 : 1 / 0,
                r = Math.min(i, t / 1); return n.map((t => t * r)) }; return n.invert = (t, n) => { const i = e ? 1 : 0,
                r = Math.max(i, 1 / t); return n.map((t => t * r)) }, n }

    function OB(t, e) { if (e && "function" == typeof e) { const t = (t, n) => e(n); return t.invert = (t, n) => e.invert(n), t } return EB(t) }

    function TB(t) { let e = null; return n => { null == e && (e = t.parentElement.style.width), t.parentElement.style.width = null == n ? e : `${n}px`, window.dispatchEvent(new Event("resize")) } }

    function PB(t, e = [], n = !0) { const i = e.sort(((t, e) => e.size - t.size)); let r = null; return i.forEach((e => { t <= e.size && (r = e) })), n && function(t, e = []) { const n = Math.max.apply(null, e.map((t => t.size))); return t && t.size === n }(r, e) ? null : r }

    function BB(t, e, n) { let i = 0,
            r = 0; return "horizontal" === n ? ("left" === t && (i = 5), "right" === t && (i = -5), "center" === t && (i = 0), "top" === e && (r = -10), "center" === e && (r = 0), "bottom" === e && (r = 10)) : "vertical" === n && ("top" === e && (r = 5), "bottom" === e && (r = -5), "center" === e && (r = 0), "left" === t && (i = -5), "right" === t && (i = 5), "center" === t && (i = 0)), { alignOffsetX: i, alignOffsetY: r } }

    function LB(t, e, n, i, r, o, a, s) { return l => { const c = i.invert(r, [l.x + e, l.y + n]);
            o(t, { x: c[0], y: c[1] }), a && s.calculateBounds() } } const zB = { breakpoints: [{ name: "Default", size: 620 }, { name: "Mobile", size: 400 }] };

    function YB() { return null }

    function FB(t) { return e => function(t, e) { const n = PB(t, e.breakpoints, !1); return n && n.bounds ? n.bounds : { top: 0, left: 0, right: 0, bottom: 0 } }(e, t.options) }

    function WB(t) { const e = t.getBoundingClientRect(); return 0 === e.height ? WB(t.parentElement) : e.height } var RB = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grip-horizontal" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <circle cx="5" cy="9" r="1" />\n  <circle cx="5" cy="15" r="1" />\n  <circle cx="12" cy="9" r="1" />\n  <circle cx="12" cy="15" r="1" />\n  <circle cx="19" cy="9" r="1" />\n  <circle cx="19" cy="15" r="1" />\n</svg>';

    function NB(t) { SM(t, "svelte-j8nqk", ".handle.svelte-j8nqk{z-index:1;cursor:move;position:absolute;display:none;border-radius:20px;border:solid 1px #3a73ff;box-shadow:2px 1px 2px rgba(0,0,0,0.2)}.handle.svelte-j8nqk:hover{box-shadow:2px 1px 2px rgba(0,0,0,0.4);border-color:#ffb702}.handle.active.svelte-j8nqk{display:block}.handle.offset.svelte-j8nqk,.handle.textWidth.svelte-j8nqk{border-radius:0px;border:solid 1px #3a73ff;background:rgb(255 255 255 / 86%);box-shadow:none}.handle.textWidth.svelte-j8nqk{cursor:ew-resize}.handle.offset.svelte-j8nqk:hover,.handle.textWidth.svelte-j8nqk:hover{border-color:#ffb702}.handle.dialog.svelte-j8nqk{box-shadow:none;line-height:10px;font-size:18px;padding:0;background:transparent;text-align:center;border:none}.handle.move.svelte-j8nqk{border-radius:0;border:none;background:#3a73ff;box-shadow:none}.handle.move.svelte-j8nqk:hover{background:#ffb702}.draggable .handle.move > svg{display:block;height:8px;width:8px;color:var(--bg);padding:0}.draggable.dark .handle.move > svg{color:var(--text)}") }

    function HB(t) { let e; return { c() { e = OM("svg") }, m(t, n) { AM(t, e, n) }, p: cM, d(t) { t && DM(e) } } }

    function jB(t) { let e, n; return { c() { e = new UM(!1), n = BM(), e.a = n }, m(t, i) { e.m('<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-maximize" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <polyline points="16 4 20 4 20 8" />\n  <line x1="14" y1="10" x2="20" y2="4" />\n  <polyline points="8 20 4 20 4 16" />\n  <line x1="4" y1="20" x2="10" y2="14" />\n  <polyline points="16 20 20 20 20 16" />\n  <line x1="14" y1="14" x2="20" y2="20" />\n  <polyline points="8 4 4 4 4 8" />\n  <line x1="4" y1="4" x2="10" y2="10" />\n</svg>', t, i), AM(t, n, i) }, p: cM, d(t) { t && DM(n), t && e.d() } } }

    function IB(t) { let e, n, i, r; return { c() { e = new UM(!1), n = PM(), i = new UM(!1), r = BM(), e.a = n, i.a = r }, m(t, o) { e.m(RB, t, o), AM(t, n, o), i.m(RB, t, o), AM(t, r, o) }, p: cM, d(t) { t && e.d(), t && DM(n), t && DM(r), t && i.d() } } }

    function VB(t) { let e, n, i, r;

        function o(t, e) { return "dialog" === t[1] ? IB : "move" === t[1] ? jB : "dummy" === t[1] ? HB : void 0 } let a = o(t),
            s = a && a(t); return { c() { e = EM("div"), s && s.c(), zM(e, "style", t[2]), zM(e, "draggable", "true"), zM(e, "class", n = "handle " + (t[0] || t[3] ? "active" : "") + " " + t[1] + " svelte-j8nqk") }, m(n, o) { AM(n, e, o), s && s.m(e, null), i || (r = [LM(e, "dragstart", t[5]), LM(e, "dragend", t[6]), LM(e, "drag", t[4])], i = !0) }, p(t, [i]) { a === (a = o(t)) && s ? s.p(t, i) : (s && s.d(1), s = a && a(t), s && (s.c(), s.m(e, null))), 4 & i && zM(e, "style", t[2]), 11 & i && n !== (n = "handle " + (t[0] || t[3] ? "active" : "") + " " + t[1] + " svelte-j8nqk") && zM(e, "class", n) }, i: cM, o: cM, d(t) { t && DM(e), s && s.d(), i = !1, hM(r) } } }

    function UB(t, e, n) { let i, r, { active: o = !1 } = e,
            { onChange: a } = e,
            { onComplete: s } = e,
            { color: l } = e,
            { x: c = 0 } = e,
            { y: u = 0 } = e,
            { handleWidth: f = 8 } = e,
            { handleHeight: d = 8 } = e,
            { handleClass: h = "drag" } = e,
            g = "",
            p = !1;

        function v() { n(3, p = !1), i = null, r = null } return t.$$set = t => { "active" in t && n(0, o = t.active), "onChange" in t && n(7, a = t.onChange), "onComplete" in t && n(8, s = t.onComplete), "color" in t && n(9, l = t.color), "x" in t && n(10, c = t.x), "y" in t && n(11, u = t.y), "handleWidth" in t && n(12, f = t.handleWidth), "handleHeight" in t && n(13, d = t.handleHeight), "handleClass" in t && n(1, h = t.handleClass) }, t.$$.update = () => { 15876 & t.$$.dirty && (n(2, g = `\n      left: ${c-f/2}px;\n      top: ${u-d/2}px;\n      width: ${f}px;\n      height: ${d}px;\n    `), l && n(2, g += `background: ${l};`)) }, [o, h, g, p, function(t) { const { screenX: e, screenY: o, offsetX: s, offsetY: l } = t; if (n(3, p = !0), null == i || null == r || !(s - i > 50 || l - r > 50)) { if (e && o) { const t = { x: Number(c) + s - 5, y: Number(u) + l - 5 };
                    isNaN(t.x) || isNaN(t.y) || a(t) } i = s, r = l } }, v, function() { v(), s && s() }, a, s, l, c, u, f, d] } class XB extends _S { constructor(t) { super(), wS(this, t, UB, VB, pM, { active: 0, onChange: 7, onComplete: 8, color: 9, x: 10, y: 11, handleWidth: 12, handleHeight: 13, handleClass: 1 }, NB) } get active() { return this.$$.ctx[0] } set active(t) { this.$$set({ active: t }), lS() } get onChange() { return this.$$.ctx[7] } set onChange(t) { this.$$set({ onChange: t }), lS() } get onComplete() { return this.$$.ctx[8] } set onComplete(t) { this.$$set({ onComplete: t }), lS() } get color() { return this.$$.ctx[9] } set color(t) { this.$$set({ color: t }), lS() } get x() { return this.$$.ctx[10] } set x(t) { this.$$set({ x: t }), lS() } get y() { return this.$$.ctx[11] } set y(t) { this.$$set({ y: t }), lS() } get handleWidth() { return this.$$.ctx[12] } set handleWidth(t) { this.$$set({ handleWidth: t }), lS() } get handleHeight() { return this.$$.ctx[13] } set handleHeight(t) { this.$$set({ handleHeight: t }), lS() } get handleClass() { return this.$$.ctx[1] } set handleClass(t) { this.$$set({ handleClass: t }), lS() } }

    function qB(t) { SM(t, "svelte-zamh9q", "div.svelte-zamh9q>div.svelte-zamh9q{position:relative}div.text.svelte-zamh9q.svelte-zamh9q{border:1px solid transparent}div.text.editing.svelte-zamh9q.svelte-zamh9q{border:1px dashed #0a37ff;cursor:text;outline:none}") }

    function GB(t) { let e, n, i, r = t[3] && ZB(t); return n = new XB({ props: { id: t[0], x: t[11], y: t[9] / 2, handleWidth: "1", handleHeight: t[9], active: "true", color: "rgb(145 145 145 / 50%)", handleClass: "textWidth", onChange: t[18] } }), { c() { r && r.c(), e = PM(), yS(n.$$.fragment) }, m(t, o) { r && r.m(t, o), AM(t, e, o), xS(n, t, o), i = !0 }, p(t, i) { t[3] ? r ? (r.p(t, i), 8 & i[0] && gS(r, 1)) : (r = ZB(t), r.c(), gS(r, 1), r.m(e.parentNode, e)) : r && (dS(), pS(r, 1, 1, (() => { r = null })), hS()); const o = {};
                1 & i[0] && (o.id = t[0]), 2048 & i[0] && (o.x = t[11]), 512 & i[0] && (o.y = t[9] / 2), 512 & i[0] && (o.handleHeight = t[9]), n.$set(o) }, i(t) { i || (gS(r), gS(n.$$.fragment, t), i = !0) }, o(t) { pS(r), pS(n.$$.fragment, t), i = !1 }, d(t) { r && r.d(t), t && DM(e), bS(n, t) } } }

    function ZB(t) { let e, n; return e = new XB({ props: { id: t[0], x: t[12] + t[5], y: t[6], handleWidth: "7", handleHeight: "7", active: "true", color: "rgb(255 255 255 / 56%)", handleClass: "offset", onChange: t[16], onComplete: t[17] } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                1 & n[0] && (i.id = t[0]), 4128 & n[0] && (i.x = t[12] + t[5]), 64 & n[0] && (i.y = t[6]), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function QB(t) { let e, n, i, r, o, a, s, l = t[1] && !t[2] && GB(t); return { c() { e = EM("div"), n = EM("div"), r = PM(), l && l.c(), zM(n, "class", i = "text " + (t[1] & !t[2] ? "editing" : "") + " " + t[4] + " svelte-zamh9q"), zM(n, "style", t[8]), zM(n, "contenteditable", t[1]), zM(e, "style", t[7]), zM(e, "class", "svelte-zamh9q") }, m(i, c) { AM(i, e, c), MM(e, n), n.innerHTML = t[13], t[33](n), MM(e, r), l && l.m(e, null), o = !0, a || (s = [LM(n, "focus", t[14]), LM(n, "blur", t[15])], a = !0) }, p(t, r) {
                (!o || 8192 & r[0]) && (n.innerHTML = t[13]), (!o || 22 & r[0] && i !== (i = "text " + (t[1] & !t[2] ? "editing" : "") + " " + t[4] + " svelte-zamh9q")) && zM(n, "class", i), (!o || 256 & r[0]) && zM(n, "style", t[8]), (!o || 2 & r[0]) && zM(n, "contenteditable", t[1]), t[1] && !t[2] ? l ? (l.p(t, r), 6 & r[0] && gS(l, 1)) : (l = GB(t), l.c(), gS(l, 1), l.m(e, null)) : l && (dS(), pS(l, 1, 1, (() => { l = null })), hS()), (!o || 128 & r[0]) && zM(e, "style", t[7]) }, i(t) { o || (gS(l), o = !0) }, o(t) { pS(l), o = !1 }, d(n) { n && DM(e), t[33](null), l && l.d(), a = !1, hM(s) } } }

    function KB(t, e, n) { let i, r, o, { id: a } = e,
            { isEditorActive: s = !1 } = e,
            { isEditorLocked: l = !1 } = e,
            { showOffsetHandle: c = !0 } = e,
            { updateDraggable: u } = e,
            { setEditingText: f } = e,
            { text: d = "" } = e,
            { extraClasses: h = "" } = e,
            { color: g } = e,
            { visible: p = !0 } = e,
            { align: v = "left" } = e,
            { valign: m = "top" } = e,
            { offsetX: y = 0 } = e,
            { offsetY: x = 0 } = e,
            { textOffsetX: b = 0 } = e,
            { textOffsetY: $ = 0 } = e,
            { textWidth: w = 100 } = e,
            { letterSpacing: _ = 0 } = e,
            { fontSize: k } = e,
            M = "",
            S = "",
            A = 16,
            D = 0,
            C = 0,
            E = 0; return ZM((() => { r && r.offsetHeight && n(9, A = r.offsetHeight - 2) })), t.$$set = t => { "id" in t && n(0, a = t.id), "isEditorActive" in t && n(1, s = t.isEditorActive), "isEditorLocked" in t && n(2, l = t.isEditorLocked), "showOffsetHandle" in t && n(3, c = t.showOffsetHandle), "updateDraggable" in t && n(20, u = t.updateDraggable), "setEditingText" in t && n(21, f = t.setEditingText), "text" in t && n(22, d = t.text), "extraClasses" in t && n(4, h = t.extraClasses), "color" in t && n(23, g = t.color), "visible" in t && n(24, p = t.visible), "align" in t && n(25, v = t.align), "valign" in t && n(26, m = t.valign), "offsetX" in t && n(27, y = t.offsetX), "offsetY" in t && n(28, x = t.offsetY), "textOffsetX" in t && n(29, b = t.textOffsetX), "textOffsetY" in t && n(30, $ = t.textOffsetY), "textWidth" in t && n(19, w = t.textWidth), "letterSpacing" in t && n(31, _ = t.letterSpacing), "fontSize" in t && n(32, k = t.fontSize) }, t.$$.update = () => { if (4194304 & t.$$.dirty[0] && n(13, i = d), 1736966240 & t.$$.dirty[0] | 3 & t.$$.dirty[1]) { let t = "0",
                    e = "0";
                n(11, o = w - 1), n(12, E = 0), "right" === v && (t = "-100%", n(11, o = 1), n(12, E = w)), "center" === v && (t = "-50%"), "bottom" === m && (e = "-100%"), "center" === m && (e = "-50%"), n(8, S = `\n      left: ${D}px;\n      top: ${C}px;\n      ${k?`font-size: ${k}px`:""};\n    `), n(7, M = `\n      position: absolute;\n      visibility: ${p?"visible":"hidden"};\n      text-align: ${v};\n      transform: translate(${t}, ${e});\n      left: ${b}px;\n      top: ${$}px;\n      width: ${w}px;\n      letter-spacing: ${_}px;\n      ${g?`color: ${g};`:""};\n    `) } }, [a, s, l, c, h, D, C, M, S, A, r, o, E, i, function(t) { f && f(!0) }, function(t) { f && f(!1), u(a, { text: r.innerHTML }) }, function({ x: t, y: e }) { n(5, D = t - E), n(6, C = e) }, function() { u(a, { offsetX: y + D, offsetY: x + C }), n(5, D = 0), n(6, C = 0) }, function({ x: t }) { if (0 === t) return; let e = Math.max(0, t); "right" === v && (e = w - t), n(19, w = Math.max(10, Math.abs(e))), u(a, { textWidth: w }) }, w, u, f, d, g, p, v, m, y, x, b, $, _, k, function(t) { tS[t ? "unshift" : "push"]((() => { r = t, n(10, r) })) }] } class JB extends _S { constructor(t) { super(), wS(this, t, KB, QB, pM, { id: 0, isEditorActive: 1, isEditorLocked: 2, showOffsetHandle: 3, updateDraggable: 20, setEditingText: 21, text: 22, extraClasses: 4, color: 23, visible: 24, align: 25, valign: 26, offsetX: 27, offsetY: 28, textOffsetX: 29, textOffsetY: 30, textWidth: 19, letterSpacing: 31, fontSize: 32 }, qB, [-1, -1]) } get id() { return this.$$.ctx[0] } set id(t) { this.$$set({ id: t }), lS() } get isEditorActive() { return this.$$.ctx[1] } set isEditorActive(t) { this.$$set({ isEditorActive: t }), lS() } get isEditorLocked() { return this.$$.ctx[2] } set isEditorLocked(t) { this.$$set({ isEditorLocked: t }), lS() } get showOffsetHandle() { return this.$$.ctx[3] } set showOffsetHandle(t) { this.$$set({ showOffsetHandle: t }), lS() } get updateDraggable() { return this.$$.ctx[20] } set updateDraggable(t) { this.$$set({ updateDraggable: t }), lS() } get setEditingText() { return this.$$.ctx[21] } set setEditingText(t) { this.$$set({ setEditingText: t }), lS() } get text() { return this.$$.ctx[22] } set text(t) { this.$$set({ text: t }), lS() } get extraClasses() { return this.$$.ctx[4] } set extraClasses(t) { this.$$set({ extraClasses: t }), lS() } get color() { return this.$$.ctx[23] } set color(t) { this.$$set({ color: t }), lS() } get visible() { return this.$$.ctx[24] } set visible(t) { this.$$set({ visible: t }), lS() } get align() { return this.$$.ctx[25] } set align(t) { this.$$set({ align: t }), lS() } get valign() { return this.$$.ctx[26] } set valign(t) { this.$$set({ valign: t }), lS() } get offsetX() { return this.$$.ctx[27] } set offsetX(t) { this.$$set({ offsetX: t }), lS() } get offsetY() { return this.$$.ctx[28] } set offsetY(t) { this.$$set({ offsetY: t }), lS() } get textOffsetX() { return this.$$.ctx[29] } set textOffsetX(t) { this.$$set({ textOffsetX: t }), lS() } get textOffsetY() { return this.$$.ctx[30] } set textOffsetY(t) { this.$$set({ textOffsetY: t }), lS() } get textWidth() { return this.$$.ctx[19] } set textWidth(t) { this.$$set({ textWidth: t }), lS() } get letterSpacing() { return this.$$.ctx[31] } set letterSpacing(t) { this.$$set({ letterSpacing: t }), lS() } get fontSize() { return this.$$.ctx[32] } set fontSize(t) { this.$$set({ fontSize: t }), lS() } }

    function tL(t) { let e, n, i, r, o; const a = t[33].default,
            s = mM(a, t, t[32], null); return { c() { e = EM("div"), s && s.c(), zM(e, "id", t[0]), zM(e, "class", t[3]), zM(e, "style", t[4]), zM(e, "draggable", n = !t[1]) }, m(n, a) { var l;
                AM(n, e, a), s && s.m(e, null), t[34](e), i = !0, r || (o = [LM(window, "keydown", t[7]), LM(e, "click", t[8]), LM(e, "dragstart", t[10]), LM(e, "dragend", t[11]), LM(e, "drag", (l = t[9], "undefined" != typeof process && process && process.env && "test" === process.env.NODE_ENV ? l : DB(l))), LM(e, "mouseover", t[5]), LM(e, "mouseout", t[6])], r = !0) }, p(t, r) { s && s.p && (!i || 2 & r[1]) && bM(s, a, t, t[32], i ? xM(a, t[32], r, null) : $M(t[32]), null), (!i || 1 & r[0]) && zM(e, "id", t[0]), (!i || 8 & r[0]) && zM(e, "class", t[3]), (!i || 16 & r[0]) && zM(e, "style", t[4]), (!i || 2 & r[0] && n !== (n = !t[1])) && zM(e, "draggable", n) }, i(t) { i || (gS(s, t), i = !0) }, o(t) { pS(s, t), i = !1 }, d(n) { n && DM(e), s && s.d(n), t[34](null), r = !1, hM(o) } } }

    function eL(t, e, n) { let i, r, o, a, s, l, c, { $$slots: u = {}, $$scope: f } = e,
            { id: d } = e,
            { scale: h } = e,
            { x: g = 0 } = e,
            { y: p = 0 } = e,
            { opacity: v = 1 } = e,
            { visible: m = !0 } = e,
            { isEditor: y = !1 } = e,
            { isEditorActive: x = !1 } = e,
            { preventKeyHandlers: b = !1 } = e,
            { editor: $ } = e,
            { editComponent: w } = e,
            { editProperties: _ } = e,
            { containerWidth: k } = e,
            { updateDraggable: M } = e,
            { finalizeDraggable: S } = e,
            { darkMode: A } = e,
            { extraClasses: D = "" } = e,
            C = !1; const { drag: E, dragStart: O, dragEnd: T } = function(t, e, n) { let i, r, o, a, s; const l = i => { const { x: l, y: c } = t(), u = { x: Number(l) + r - a, y: Number(c) + o - s };
                    isNaN(u.x) || isNaN(u.y) || (i ? n(u) : e(u)) },
                c = function() { i = !1, r = null, o = null, a = null, s = null }; return { drag: function(t) { if (!i) return; const { screenX: e, screenY: n, offsetX: c, offsetY: u } = t; if (!(0 === e && 0 === n || null != r && null != o && (c - r > 50 || u - o > 50))) { if (null == a) { const e = t.target.getBoundingClientRect();
                            a = t.x - e.x, s = t.y - e.y } r = c, o = u, l() } }, dragStart: e => { c(); const n = new Image;
                    n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=", event.dataTransfer.setDragImage(n, 0, 0); const { isEditorActive: r } = t();
                    r || (i = !0) }, dragEnd: t => (l(!0), c(), !0), isDragging: () => i } }((function() { return { x: g, y: p, isEditorActive: x } }), (function(t) { const e = h.invert(k, [t.x, t.y]);
            M(d, { x: e[0], y: e[1] }), y && $.calculateBounds() }), (function(t) { const e = h.invert(k, [t.x, t.y]);
            S(d, { x: e[0], y: e[1] }) })); return t.$$set = t => { "id" in t && n(0, d = t.id), "scale" in t && n(12, h = t.scale), "x" in t && n(13, g = t.x), "y" in t && n(14, p = t.y), "opacity" in t && n(15, v = t.opacity), "visible" in t && n(16, m = t.visible), "isEditor" in t && n(17, y = t.isEditor), "isEditorActive" in t && n(1, x = t.isEditorActive), "preventKeyHandlers" in t && n(18, b = t.preventKeyHandlers), "editor" in t && n(19, $ = t.editor), "editComponent" in t && n(20, w = t.editComponent), "editProperties" in t && n(21, _ = t.editProperties), "containerWidth" in t && n(22, k = t.containerWidth), "updateDraggable" in t && n(23, M = t.updateDraggable), "finalizeDraggable" in t && n(24, S = t.finalizeDraggable), "darkMode" in t && n(25, A = t.darkMode), "extraClasses" in t && n(26, D = t.extraClasses), "$$scope" in t && n(32, f = t.$$scope) }, t.$$.update = () => { 57344 & t.$$.dirty[0] && n(4, i = `transform: translate3d(${g}px, ${p}px, 0); opacity: ${v};`), 131072 & t.$$.dirty[0] && n(31, r = y ? "editor" : ""), 2 & t.$$.dirty[0] && n(30, o = x ? "editorActive" : ""), 65536 & t.$$.dirty[0] && n(29, a = m ? "visible" : "hidden"), 134217728 & t.$$.dirty[0] && n(28, s = C ? "hoverActive" : ""), 1979711488 & t.$$.dirty[0] | 1 & t.$$.dirty[1] && n(3, l = `\n    draggable\n    ${r}\n    ${o}\n    ${a}\n    ${D}\n    ${s}\n    ${A?"dark":""}\n  `) }, [d, x, c, l, i, function() { n(27, C = !0) }, function() { n(27, C = !1) }, function(t) { if (C && !b) { const { key: e } = t; let n = null; if ("ArrowUp" === e ? n = [0, -1] : "ArrowDown" === e ? n = [0, 1] : "ArrowLeft" === e ? n = [-1, 0] : "ArrowRight" === e && (n = [1, 0]), n) { t.preventDefault(); const e = h.invert(k, [g + n[0], p + n[1]]);
                    M(d, { x: e[0], y: e[1] }) } } }, function() { w(c, _) }, E, O, T, h, g, p, v, m, y, b, $, w, _, k, M, S, A, D, C, s, a, o, r, f, u, function(t) { tS[t ? "unshift" : "push"]((() => { c = t, n(2, c) })) }] } class nL extends _S { constructor(t) { super(), wS(this, t, eL, tL, pM, { id: 0, scale: 12, x: 13, y: 14, opacity: 15, visible: 16, isEditor: 17, isEditorActive: 1, preventKeyHandlers: 18, editor: 19, editComponent: 20, editProperties: 21, containerWidth: 22, updateDraggable: 23, finalizeDraggable: 24, darkMode: 25, extraClasses: 26 }, null, [-1, -1]) } get id() { return this.$$.ctx[0] } set id(t) { this.$$set({ id: t }), lS() } get scale() { return this.$$.ctx[12] } set scale(t) { this.$$set({ scale: t }), lS() } get x() { return this.$$.ctx[13] } set x(t) { this.$$set({ x: t }), lS() } get y() { return this.$$.ctx[14] } set y(t) { this.$$set({ y: t }), lS() } get opacity() { return this.$$.ctx[15] } set opacity(t) { this.$$set({ opacity: t }), lS() } get visible() { return this.$$.ctx[16] } set visible(t) { this.$$set({ visible: t }), lS() } get isEditor() { return this.$$.ctx[17] } set isEditor(t) { this.$$set({ isEditor: t }), lS() } get isEditorActive() { return this.$$.ctx[1] } set isEditorActive(t) { this.$$set({ isEditorActive: t }), lS() } get preventKeyHandlers() { return this.$$.ctx[18] } set preventKeyHandlers(t) { this.$$set({ preventKeyHandlers: t }), lS() } get editor() { return this.$$.ctx[19] } set editor(t) { this.$$set({ editor: t }), lS() } get editComponent() { return this.$$.ctx[20] } set editComponent(t) { this.$$set({ editComponent: t }), lS() } get editProperties() { return this.$$.ctx[21] } set editProperties(t) { this.$$set({ editProperties: t }), lS() } get containerWidth() { return this.$$.ctx[22] } set containerWidth(t) { this.$$set({ containerWidth: t }), lS() } get updateDraggable() { return this.$$.ctx[23] } set updateDraggable(t) { this.$$set({ updateDraggable: t }), lS() } get finalizeDraggable() { return this.$$.ctx[24] } set finalizeDraggable(t) { this.$$set({ finalizeDraggable: t }), lS() } get darkMode() { return this.$$.ctx[25] } set darkMode(t) { this.$$set({ darkMode: t }), lS() } get extraClasses() { return this.$$.ctx[26] } set extraClasses(t) { this.$$set({ extraClasses: t }), lS() } }

    function iL(t) { let e, n; return e = new XB({ props: { id: t[4], x: "0", y: "0", active: "true", handleClass: "move", onChange: t[25] } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                16 & n[0] && (i.id = t[4]), 33554432 & n[0] && (i.onChange = t[25]), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function rL(t) { let e, n, i, r;
        e = new JB({ props: { id: t[4], isEditorActive: t[1], setEditingText: t[26], updateDraggable: t[9], finalizeDraggable: t[10], text: t[11], align: t[12], valign: t[13], color: t[5], visible: t[6], textWidth: t[18], letterSpacing: t[19], fontSize: t[20], offsetX: t[16], offsetY: t[17], textOffsetX: t[16], textOffsetY: t[17], showOffsetHandle: !1 } }); let o = t[1] && t[6] && iL(t); return { c() { yS(e.$$.fragment), n = PM(), o && o.c(), i = BM() }, m(t, a) { xS(e, t, a), AM(t, n, a), o && o.m(t, a), AM(t, i, a), r = !0 }, p(t, n) { const r = {};
                16 & n[0] && (r.id = t[4]), 2 & n[0] && (r.isEditorActive = t[1]), 512 & n[0] && (r.updateDraggable = t[9]), 1024 & n[0] && (r.finalizeDraggable = t[10]), 2048 & n[0] && (r.text = t[11]), 4096 & n[0] && (r.align = t[12]), 8192 & n[0] && (r.valign = t[13]), 32 & n[0] && (r.color = t[5]), 64 & n[0] && (r.visible = t[6]), 262144 & n[0] && (r.textWidth = t[18]), 524288 & n[0] && (r.letterSpacing = t[19]), 1048576 & n[0] && (r.fontSize = t[20]), 65536 & n[0] && (r.offsetX = t[16]), 131072 & n[0] && (r.offsetY = t[17]), 65536 & n[0] && (r.textOffsetX = t[16]), 131072 & n[0] && (r.textOffsetY = t[17]), e.$set(r), t[1] && t[6] ? o ? (o.p(t, n), 66 & n[0] && gS(o, 1)) : (o = iL(t), o.c(), gS(o, 1), o.m(i.parentNode, i)) : o && (dS(), pS(o, 1, 1, (() => { o = null })), hS()) }, i(t) { r || (gS(e.$$.fragment, t), gS(o), r = !0) }, o(t) { pS(e.$$.fragment, t), pS(o), r = !1 }, d(t) { bS(e, t), t && DM(n), o && o.d(t), t && DM(i) } } }

    function oL(t) { let e, n; return e = new nL({ props: { id: t[4], x: t[14], y: t[15], visible: t[6], opacity: t[21], scale: t[7], editor: t[2], isEditor: t[0], isEditorActive: t[1], preventKeyHandlers: t[23], editComponent: t[3], containerWidth: t[8], updateDraggable: t[9], finalizeDraggable: t[10], extraClasses: t[24], darkMode: t[22], $$slots: { default: [rL] }, $$scope: { ctx: t } } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                16 & n[0] && (i.id = t[4]), 16384 & n[0] && (i.x = t[14]), 32768 & n[0] && (i.y = t[15]), 64 & n[0] && (i.visible = t[6]), 2097152 & n[0] && (i.opacity = t[21]), 128 & n[0] && (i.scale = t[7]), 4 & n[0] && (i.editor = t[2]), 1 & n[0] && (i.isEditor = t[0]), 2 & n[0] && (i.isEditorActive = t[1]), 8388608 & n[0] && (i.preventKeyHandlers = t[23]), 8 & n[0] && (i.editComponent = t[3]), 256 & n[0] && (i.containerWidth = t[8]), 512 & n[0] && (i.updateDraggable = t[9]), 1024 & n[0] && (i.finalizeDraggable = t[10]), 16777216 & n[0] && (i.extraClasses = t[24]), 4194304 & n[0] && (i.darkMode = t[22]), 35602034 & n[0] | 2 & n[1] && (i.$$scope = { dirty: n, ctx: t }), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function aL(t, e, n) { let i, r, o, a, s, { isEditor: l = !1 } = e,
            { isEditorActive: c = !1 } = e,
            { editor: u } = e,
            { editComponent: f } = e,
            { id: d } = e,
            { color: h } = e,
            { visible: g = !0 } = e,
            { scale: p } = e,
            { containerWidth: v } = e,
            { updateDraggable: m } = e,
            { finalizeDraggable: y } = e,
            { text: x = "" } = e,
            { align: b = "left" } = e,
            { valign: $ = "top" } = e,
            { x: w = 0 } = e,
            { y: _ = 0 } = e,
            { offsetX: k = 0 } = e,
            { offsetY: M = 0 } = e,
            { outline: S } = e,
            { infoBox: A } = e,
            { textWidth: D } = e,
            { letterSpacing: C } = e,
            { fontSize: E } = e,
            { opacity: O } = e,
            { darkMode: T } = e,
            P = !1; return t.$$set = t => { "isEditor" in t && n(0, l = t.isEditor), "isEditorActive" in t && n(1, c = t.isEditorActive), "editor" in t && n(2, u = t.editor), "editComponent" in t && n(3, f = t.editComponent), "id" in t && n(4, d = t.id), "color" in t && n(5, h = t.color), "visible" in t && n(6, g = t.visible), "scale" in t && n(7, p = t.scale), "containerWidth" in t && n(8, v = t.containerWidth), "updateDraggable" in t && n(9, m = t.updateDraggable), "finalizeDraggable" in t && n(10, y = t.finalizeDraggable), "text" in t && n(11, x = t.text), "align" in t && n(12, b = t.align), "valign" in t && n(13, $ = t.valign), "x" in t && n(14, w = t.x), "y" in t && n(15, _ = t.y), "offsetX" in t && n(16, k = t.offsetX), "offsetY" in t && n(17, M = t.offsetY), "outline" in t && n(27, S = t.outline), "infoBox" in t && n(28, A = t.infoBox), "textWidth" in t && n(18, D = t.textWidth), "letterSpacing" in t && n(19, C = t.letterSpacing), "fontSize" in t && n(20, E = t.fontSize), "opacity" in t && n(21, O = t.opacity), "darkMode" in t && n(22, T = t.darkMode) }, t.$$.update = () => { 50069 & t.$$.dirty[0] && n(25, i = LB(d, w, _, p, v, m, l, u)), 256 & t.$$.dirty[0] && n(31, r = v < 500 ? "mobile" : ""), 134217728 & t.$$.dirty[0] && n(30, o = S ? "outline" : ""), 268435456 & t.$$.dirty[0] && n(29, a = A ? "infoBox" : ""), 1610612736 & t.$$.dirty[0] | 1 & t.$$.dirty[1] && n(24, s = `${r} ${o} ${a}`) }, [l, c, u, f, d, h, g, p, v, m, y, x, b, $, w, _, k, M, D, C, E, O, T, P, s, i, function(t) { n(23, P = t) }, S, A, a, o, r] } class sL extends _S { constructor(t) { super(), wS(this, t, aL, oL, pM, { isEditor: 0, isEditorActive: 1, editor: 2, editComponent: 3, id: 4, color: 5, visible: 6, scale: 7, containerWidth: 8, updateDraggable: 9, finalizeDraggable: 10, text: 11, align: 12, valign: 13, x: 14, y: 15, offsetX: 16, offsetY: 17, outline: 27, infoBox: 28, textWidth: 18, letterSpacing: 19, fontSize: 20, opacity: 21, darkMode: 22 }, null, [-1, -1]) } get isEditor() { return this.$$.ctx[0] } set isEditor(t) { this.$$set({ isEditor: t }), lS() } get isEditorActive() { return this.$$.ctx[1] } set isEditorActive(t) { this.$$set({ isEditorActive: t }), lS() } get editor() { return this.$$.ctx[2] } set editor(t) { this.$$set({ editor: t }), lS() } get editComponent() { return this.$$.ctx[3] } set editComponent(t) { this.$$set({ editComponent: t }), lS() } get id() { return this.$$.ctx[4] } set id(t) { this.$$set({ id: t }), lS() } get color() { return this.$$.ctx[5] } set color(t) { this.$$set({ color: t }), lS() } get visible() { return this.$$.ctx[6] } set visible(t) { this.$$set({ visible: t }), lS() } get scale() { return this.$$.ctx[7] } set scale(t) { this.$$set({ scale: t }), lS() } get containerWidth() { return this.$$.ctx[8] } set containerWidth(t) { this.$$set({ containerWidth: t }), lS() } get updateDraggable() { return this.$$.ctx[9] } set updateDraggable(t) { this.$$set({ updateDraggable: t }), lS() } get finalizeDraggable() { return this.$$.ctx[10] } set finalizeDraggable(t) { this.$$set({ finalizeDraggable: t }), lS() } get text() { return this.$$.ctx[11] } set text(t) { this.$$set({ text: t }), lS() } get align() { return this.$$.ctx[12] } set align(t) { this.$$set({ align: t }), lS() } get valign() { return this.$$.ctx[13] } set valign(t) { this.$$set({ valign: t }), lS() } get x() { return this.$$.ctx[14] } set x(t) { this.$$set({ x: t }), lS() } get y() { return this.$$.ctx[15] } set y(t) { this.$$set({ y: t }), lS() } get offsetX() { return this.$$.ctx[16] } set offsetX(t) { this.$$set({ offsetX: t }), lS() } get offsetY() { return this.$$.ctx[17] } set offsetY(t) { this.$$set({ offsetY: t }), lS() } get outline() { return this.$$.ctx[27] } set outline(t) { this.$$set({ outline: t }), lS() } get infoBox() { return this.$$.ctx[28] } set infoBox(t) { this.$$set({ infoBox: t }), lS() } get textWidth() { return this.$$.ctx[18] } set textWidth(t) { this.$$set({ textWidth: t }), lS() } get letterSpacing() { return this.$$.ctx[19] } set letterSpacing(t) { this.$$set({ letterSpacing: t }), lS() } get fontSize() { return this.$$.ctx[20] } set fontSize(t) { this.$$set({ fontSize: t }), lS() } get opacity() { return this.$$.ctx[21] } set opacity(t) { this.$$set({ opacity: t }), lS() } get darkMode() { return this.$$.ctx[22] } set darkMode(t) { this.$$set({ darkMode: t }), lS() } }

    function lL(t) { SM(t, "svelte-3irid9", "svg.svelte-3irid9{position:absolute;overflow:visible}") }

    function cL(t) { let e, n, i, r, o, a, s, l; return e = new JB({ props: { id: t[4], isEditorActive: t[1], setEditingText: t[30], updateDraggable: t[8], finalizeDraggable: t[9], text: t[11], align: t[12], valign: t[13], color: t[5], textWidth: t[20], fontSize: t[21], offsetX: t[18], offsetY: t[19], textOffsetX: t[24], textOffsetY: t[25], visible: t[10] } }), { c() { yS(e.$$.fragment), n = PM(), i = OM("svg"), r = OM("g"), o = OM("path"), zM(o, "d", a = "M 0,0 " + t[16] + "," + t[17]), zM(o, "style", t[27]), zM(r, "transform", s = "translate(" + (t[16] < 0 ? Math.abs(t[16]) : 0) + ", " + (t[17] < 0 ? Math.abs(t[17]) : 0) + ")"), zM(i, "class", "line draw-region svelte-3irid9"), RM(i, "left", t[16] < 0 ? t[16] : 0), RM(i, "top", t[17] < 0 ? t[17] : 0), RM(i, "width", t[31](t[16])), RM(i, "height", t[31](t[17])) }, m(t, a) { xS(e, t, a), AM(t, n, a), AM(t, i, a), MM(i, r), MM(r, o), l = !0 }, p(t, n) { const c = {};
                16 & n[0] && (c.id = t[4]), 2 & n[0] && (c.isEditorActive = t[1]), 256 & n[0] && (c.updateDraggable = t[8]), 512 & n[0] && (c.finalizeDraggable = t[9]), 2048 & n[0] && (c.text = t[11]), 4096 & n[0] && (c.align = t[12]), 8192 & n[0] && (c.valign = t[13]), 32 & n[0] && (c.color = t[5]), 1048576 & n[0] && (c.textWidth = t[20]), 2097152 & n[0] && (c.fontSize = t[21]), 262144 & n[0] && (c.offsetX = t[18]), 524288 & n[0] && (c.offsetY = t[19]), 16777216 & n[0] && (c.textOffsetX = t[24]), 33554432 & n[0] && (c.textOffsetY = t[25]), 1024 & n[0] && (c.visible = t[10]), e.$set(c), (!l || 196608 & n[0] && a !== (a = "M 0,0 " + t[16] + "," + t[17])) && zM(o, "d", a), (!l || 134217728 & n[0]) && zM(o, "style", t[27]), (!l || 196608 & n[0] && s !== (s = "translate(" + (t[16] < 0 ? Math.abs(t[16]) : 0) + ", " + (t[17] < 0 ? Math.abs(t[17]) : 0) + ")")) && zM(r, "transform", s), (!l || 65536 & n[0]) && RM(i, "left", t[16] < 0 ? t[16] : 0), (!l || 131072 & n[0]) && RM(i, "top", t[17] < 0 ? t[17] : 0), (!l || 65536 & n[0]) && RM(i, "width", t[31](t[16])), (!l || 131072 & n[0]) && RM(i, "height", t[31](t[17])) }, i(t) { l || (gS(e.$$.fragment, t), l = !0) }, o(t) { pS(e.$$.fragment, t), l = !1 }, d(t) { bS(e, t), t && DM(n), t && DM(i) } } }

    function uL(t) { let e, n, i, r; return e = new XB({ props: { id: t[4], x: "0", y: "0", active: "true", handleClass: "move", onChange: t[29] } }), i = new XB({ props: { id: t[4], x: t[16], y: t[17], color: "rgb(145 145 145 / 50%)", handleWidth: "8", handleHeight: "8", active: "true", onChange: t[32] } }), { c() { yS(e.$$.fragment), n = PM(), yS(i.$$.fragment) }, m(t, o) { xS(e, t, o), AM(t, n, o), xS(i, t, o), r = !0 }, p(t, n) { const r = {};
                16 & n[0] && (r.id = t[4]), 536870912 & n[0] && (r.onChange = t[29]), e.$set(r); const o = {};
                16 & n[0] && (o.id = t[4]), 65536 & n[0] && (o.x = t[16]), 131072 & n[0] && (o.y = t[17]), i.$set(o) }, i(t) { r || (gS(e.$$.fragment, t), gS(i.$$.fragment, t), r = !0) }, o(t) { pS(e.$$.fragment, t), pS(i.$$.fragment, t), r = !1 }, d(t) { bS(e, t), t && DM(n), bS(i, t) } } }

    function fL(t) { let e, n, i, r = t[10] && cL(t),
            o = t[1] && t[10] && uL(t); return { c() { r && r.c(), e = PM(), o && o.c(), n = BM() }, m(t, a) { r && r.m(t, a), AM(t, e, a), o && o.m(t, a), AM(t, n, a), i = !0 }, p(t, i) { t[10] ? r ? (r.p(t, i), 1024 & i[0] && gS(r, 1)) : (r = cL(t), r.c(), gS(r, 1), r.m(e.parentNode, e)) : r && (dS(), pS(r, 1, 1, (() => { r = null })), hS()), t[1] && t[10] ? o ? (o.p(t, i), 1026 & i[0] && gS(o, 1)) : (o = uL(t), o.c(), gS(o, 1), o.m(n.parentNode, n)) : o && (dS(), pS(o, 1, 1, (() => { o = null })), hS()) }, i(t) { i || (gS(r), gS(o), i = !0) }, o(t) { pS(r), pS(o), i = !1 }, d(t) { r && r.d(t), t && DM(e), o && o.d(t), t && DM(n) } } }

    function dL(t) { let e, n; return e = new nL({ props: { id: t[4], x: t[14], y: t[15], visible: t[10], opacity: t[22], scale: t[6], editor: t[2], isEditor: t[0], isEditorActive: t[1], preventKeyHandlers: t[26], editComponent: t[3], containerWidth: t[7], updateDraggable: t[8], finalizeDraggable: t[9], extraClasses: t[28], darkMode: t[23], $$slots: { default: [fL] }, $$scope: { ctx: t } } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                16 & n[0] && (i.id = t[4]), 16384 & n[0] && (i.x = t[14]), 32768 & n[0] && (i.y = t[15]), 1024 & n[0] && (i.visible = t[10]), 4194304 & n[0] && (i.opacity = t[22]), 64 & n[0] && (i.scale = t[6]), 4 & n[0] && (i.editor = t[2]), 1 & n[0] && (i.isEditor = t[0]), 2 & n[0] && (i.isEditorActive = t[1]), 67108864 & n[0] && (i.preventKeyHandlers = t[26]), 8 & n[0] && (i.editComponent = t[3]), 128 & n[0] && (i.containerWidth = t[7]), 256 & n[0] && (i.updateDraggable = t[8]), 512 & n[0] && (i.finalizeDraggable = t[9]), 268435456 & n[0] && (i.extraClasses = t[28]), 8388608 & n[0] && (i.darkMode = t[23]), 725565234 & n[0] | 1024 & n[1] && (i.$$scope = { dirty: n, ctx: t }), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function hL(t, e, n) { let i, r, o, a, s, l, c, u, { isEditor: f = !1 } = e,
            { isEditorActive: d = !1 } = e,
            { editor: h } = e,
            { editComponent: g } = e,
            { id: p } = e,
            { color: v } = e,
            { scale: m } = e,
            { containerWidth: y } = e,
            { maxWidth: x = 200 } = e,
            { updateDraggable: b } = e,
            { finalizeDraggable: $ } = e,
            { visible: w = !0 } = e,
            { text: _ = "" } = e,
            { align: k = "left" } = e,
            { valign: M = "top" } = e,
            { lineStyle: S = "horizontal" } = e,
            { x: A = 0 } = e,
            { y: D = 0 } = e,
            { x2: C = 50 } = e,
            { y2: E = 0 } = e,
            { offsetX: O = 0 } = e,
            { offsetY: T = 0 } = e,
            { strokeWidth: P = 1 } = e,
            { outline: B } = e,
            { infoBox: L } = e,
            { textWidth: z } = e,
            { fontSize: Y } = e,
            { opacity: F } = e,
            { darkMode: W } = e,
            R = !1; return t.$$set = t => { "isEditor" in t && n(0, f = t.isEditor), "isEditorActive" in t && n(1, d = t.isEditorActive), "editor" in t && n(2, h = t.editor), "editComponent" in t && n(3, g = t.editComponent), "id" in t && n(4, p = t.id), "color" in t && n(5, v = t.color), "scale" in t && n(6, m = t.scale), "containerWidth" in t && n(7, y = t.containerWidth), "maxWidth" in t && n(33, x = t.maxWidth), "updateDraggable" in t && n(8, b = t.updateDraggable), "finalizeDraggable" in t && n(9, $ = t.finalizeDraggable), "visible" in t && n(10, w = t.visible), "text" in t && n(11, _ = t.text), "align" in t && n(12, k = t.align), "valign" in t && n(13, M = t.valign), "lineStyle" in t && n(34, S = t.lineStyle), "x" in t && n(14, A = t.x), "y" in t && n(15, D = t.y), "x2" in t && n(16, C = t.x2), "y2" in t && n(17, E = t.y2), "offsetX" in t && n(18, O = t.offsetX), "offsetY" in t && n(19, T = t.offsetY), "strokeWidth" in t && n(35, P = t.strokeWidth), "outline" in t && n(36, B = t.outline), "infoBox" in t && n(37, L = t.infoBox), "textWidth" in t && n(20, z = t.textWidth), "fontSize" in t && n(21, Y = t.fontSize), "opacity" in t && n(22, F = t.opacity), "darkMode" in t && n(23, W = t.darkMode) }, t.$$.update = () => { if (49621 & t.$$.dirty[0] && n(29, i = LB(p, A, D, m, y, b, f, h)), 128 & t.$$.dirty[0] && n(40, r = y < 500 ? "mobile" : ""), 32 & t.$$.dirty[1] && n(39, o = B ? "outline" : ""), 64 & t.$$.dirty[1] && n(38, a = L ? "infoBox" : ""), 896 & t.$$.dirty[1] && n(28, s = `${r} ${o} ${a}`), 32 & t.$$.dirty[0] | 16 & t.$$.dirty[1] && n(27, l = `stroke: ${v}; stroke-width: ${P}px;`), 995328 & t.$$.dirty[0] | 8 & t.$$.dirty[1]) { const { alignOffsetX: t, alignOffsetY: e } = BB(k, M, S);
                n(24, c = C + O + t), n(25, u = E + T + e) } }, [f, d, h, g, p, v, m, y, b, $, w, _, k, M, A, D, C, E, O, T, z, Y, F, W, c, u, R, l, s, i, function(t) { n(26, R = t) }, t => Math.max(10, Math.abs(t)), function(t) { b(p, "horizontal" === S ? { x2: Math.min(x, t.x), y2: 0 } : "vertical" === S ? { x2: 0, y2: Math.min(x, t.y) } : { x2: Math.min(x, t.x), y2: Math.min(x, t.y) }) }, x, S, P, B, L, a, o, r] } class gL extends _S { constructor(t) { super(), wS(this, t, hL, dL, pM, { isEditor: 0, isEditorActive: 1, editor: 2, editComponent: 3, id: 4, color: 5, scale: 6, containerWidth: 7, maxWidth: 33, updateDraggable: 8, finalizeDraggable: 9, visible: 10, text: 11, align: 12, valign: 13, lineStyle: 34, x: 14, y: 15, x2: 16, y2: 17, offsetX: 18, offsetY: 19, strokeWidth: 35, outline: 36, infoBox: 37, textWidth: 20, fontSize: 21, opacity: 22, darkMode: 23 }, lL, [-1, -1]) } get isEditor() { return this.$$.ctx[0] } set isEditor(t) { this.$$set({ isEditor: t }), lS() } get isEditorActive() { return this.$$.ctx[1] } set isEditorActive(t) { this.$$set({ isEditorActive: t }), lS() } get editor() { return this.$$.ctx[2] } set editor(t) { this.$$set({ editor: t }), lS() } get editComponent() { return this.$$.ctx[3] } set editComponent(t) { this.$$set({ editComponent: t }), lS() } get id() { return this.$$.ctx[4] } set id(t) { this.$$set({ id: t }), lS() } get color() { return this.$$.ctx[5] } set color(t) { this.$$set({ color: t }), lS() } get scale() { return this.$$.ctx[6] } set scale(t) { this.$$set({ scale: t }), lS() } get containerWidth() { return this.$$.ctx[7] } set containerWidth(t) { this.$$set({ containerWidth: t }), lS() } get maxWidth() { return this.$$.ctx[33] } set maxWidth(t) { this.$$set({ maxWidth: t }), lS() } get updateDraggable() { return this.$$.ctx[8] } set updateDraggable(t) { this.$$set({ updateDraggable: t }), lS() } get finalizeDraggable() { return this.$$.ctx[9] } set finalizeDraggable(t) { this.$$set({ finalizeDraggable: t }), lS() } get visible() { return this.$$.ctx[10] } set visible(t) { this.$$set({ visible: t }), lS() } get text() { return this.$$.ctx[11] } set text(t) { this.$$set({ text: t }), lS() } get align() { return this.$$.ctx[12] } set align(t) { this.$$set({ align: t }), lS() } get valign() { return this.$$.ctx[13] } set valign(t) { this.$$set({ valign: t }), lS() } get lineStyle() { return this.$$.ctx[34] } set lineStyle(t) { this.$$set({ lineStyle: t }), lS() } get x() { return this.$$.ctx[14] } set x(t) { this.$$set({ x: t }), lS() } get y() { return this.$$.ctx[15] } set y(t) { this.$$set({ y: t }), lS() } get x2() { return this.$$.ctx[16] } set x2(t) { this.$$set({ x2: t }), lS() } get y2() { return this.$$.ctx[17] } set y2(t) { this.$$set({ y2: t }), lS() } get offsetX() { return this.$$.ctx[18] } set offsetX(t) { this.$$set({ offsetX: t }), lS() } get offsetY() { return this.$$.ctx[19] } set offsetY(t) { this.$$set({ offsetY: t }), lS() } get strokeWidth() { return this.$$.ctx[35] } set strokeWidth(t) { this.$$set({ strokeWidth: t }), lS() } get outline() { return this.$$.ctx[36] } set outline(t) { this.$$set({ outline: t }), lS() } get infoBox() { return this.$$.ctx[37] } set infoBox(t) { this.$$set({ infoBox: t }), lS() } get textWidth() { return this.$$.ctx[20] } set textWidth(t) { this.$$set({ textWidth: t }), lS() } get fontSize() { return this.$$.ctx[21] } set fontSize(t) { this.$$set({ fontSize: t }), lS() } get opacity() { return this.$$.ctx[22] } set opacity(t) { this.$$set({ opacity: t }), lS() } get darkMode() { return this.$$.ctx[23] } set darkMode(t) { this.$$set({ darkMode: t }), lS() } }

    function pL(t) { SM(t, "svelte-svkatf", "svg.svelte-svkatf{overflow:visible;position:absolute}") }

    function vL(t) { let e, n, i, r, o, a, s, l, c, u, f; return e = new JB({ props: { id: t[4], isEditorActive: t[1], setEditingText: t[37], updateDraggable: t[5], finalizeDraggable: t[6], text: t[11], align: t[12], valign: t[13], color: t[7], visible: t[10], textWidth: t[25], fontSize: t[24], offsetX: t[20], offsetY: t[21], textOffsetX: t[27], textOffsetY: t[28] } }), { c() { yS(e.$$.fragment), n = PM(), i = OM("svg"), r = OM("defs"), o = OM("marker"), a = OM("polyline"), l = OM("g"), c = OM("path"), zM(a, "stroke-linejoin", "bevel"), zM(a, "points", s = "-" + t[36] + ",-" + t[36] + " 0,0 -" + t[36] + "," + t[36]), zM(o, "id", "arrowhead"), zM(o, "viewBox", "-10 -10 20 20"), zM(o, "refX", "0"), zM(o, "refY", "0"), zM(o, "markerWidth", "20"), zM(o, "markerHeight", "20"), zM(o, "stroke-width", "1"), zM(o, "orient", "auto"), zM(o, "style", t[34]), zM(c, "d", t[29]), zM(c, "marker-end", "url(#arrowhead)"), zM(c, "style", t[33]), zM(l, "transform", u = "translate(" + (t[18] < 0 ? Math.abs(t[18]) : 0) + ", " + (t[19] < 0 ? Math.abs(t[19]) : 0) + ")"), zM(i, "class", "arrow draw-region svelte-svkatf"), RM(i, "left", t[18] < 0 ? t[18] : 0), RM(i, "top", t[19] < 0 ? t[19] : 0), RM(i, "width", t[30]), RM(i, "height", t[31]) }, m(t, s) { xS(e, t, s), AM(t, n, s), AM(t, i, s), MM(i, r), MM(r, o), MM(o, a), MM(i, l), MM(l, c), f = !0 }, p(t, n) { const r = {};
                16 & n[0] && (r.id = t[4]), 2 & n[0] && (r.isEditorActive = t[1]), 32 & n[0] && (r.updateDraggable = t[5]), 64 & n[0] && (r.finalizeDraggable = t[6]), 2048 & n[0] && (r.text = t[11]), 4096 & n[0] && (r.align = t[12]), 8192 & n[0] && (r.valign = t[13]), 128 & n[0] && (r.color = t[7]), 1024 & n[0] && (r.visible = t[10]), 33554432 & n[0] && (r.textWidth = t[25]), 16777216 & n[0] && (r.fontSize = t[24]), 1048576 & n[0] && (r.offsetX = t[20]), 2097152 & n[0] && (r.offsetY = t[21]), 134217728 & n[0] && (r.textOffsetX = t[27]), 268435456 & n[0] && (r.textOffsetY = t[28]), e.$set(r), (!f || 32 & n[1] && s !== (s = "-" + t[36] + ",-" + t[36] + " 0,0 -" + t[36] + "," + t[36])) && zM(a, "points", s), (!f || 8 & n[1]) && zM(o, "style", t[34]), (!f || 536870912 & n[0]) && zM(c, "d", t[29]), (!f || 4 & n[1]) && zM(c, "style", t[33]), (!f || 786432 & n[0] && u !== (u = "translate(" + (t[18] < 0 ? Math.abs(t[18]) : 0) + ", " + (t[19] < 0 ? Math.abs(t[19]) : 0) + ")")) && zM(l, "transform", u), (!f || 262144 & n[0]) && RM(i, "left", t[18] < 0 ? t[18] : 0), (!f || 524288 & n[0]) && RM(i, "top", t[19] < 0 ? t[19] : 0), (!f || 1073741824 & n[0]) && RM(i, "width", t[30]), (!f || 1 & n[1]) && RM(i, "height", t[31]) }, i(t) { f || (gS(e.$$.fragment, t), f = !0) }, o(t) { pS(e.$$.fragment, t), f = !1 }, d(t) { bS(e, t), t && DM(n), t && DM(i) } } }

    function mL(t) { let e, n, i, r, o;
        e = new XB({ props: { id: t[4], x: "0", y: "0", active: !0, onChange: t[38], handleClass: "move" } }); let a = t[22] === $L && yL(t); return r = new XB({ props: { id: t[4], x: t[18], y: t[19], color: "rgb(145 145 145 / 50%)", handleWidth: 8, handleHeight: 8, active: !0, onChange: t[40] } }), { c() { yS(e.$$.fragment), n = PM(), a && a.c(), i = PM(), yS(r.$$.fragment) }, m(t, s) { xS(e, t, s), AM(t, n, s), a && a.m(t, s), AM(t, i, s), xS(r, t, s), o = !0 }, p(t, n) { const o = {};
                16 & n[0] && (o.id = t[4]), e.$set(o), t[22] === $L ? a ? (a.p(t, n), 4194304 & n[0] && gS(a, 1)) : (a = yL(t), a.c(), gS(a, 1), a.m(i.parentNode, i)) : a && (dS(), pS(a, 1, 1, (() => { a = null })), hS()); const s = {};
                16 & n[0] && (s.id = t[4]), 262144 & n[0] && (s.x = t[18]), 524288 & n[0] && (s.y = t[19]), r.$set(s) }, i(t) { o || (gS(e.$$.fragment, t), gS(a), gS(r.$$.fragment, t), o = !0) }, o(t) { pS(e.$$.fragment, t), pS(a), pS(r.$$.fragment, t), o = !1 }, d(t) { bS(e, t), t && DM(n), a && a.d(t), t && DM(i), bS(r, t) } } }

    function yL(t) { let e, n; return e = new XB({ props: { id: t[4], x: t[16], y: t[17], color: "rgb(145 145 145 / 50%)", handleWidth: 8, handleHeight: 8, active: !0, onChange: t[39] } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                16 & n[0] && (i.id = t[4]), 65536 & n[0] && (i.x = t[16]), 131072 & n[0] && (i.y = t[17]), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function xL(t) { let e, n, i, r = t[10] && vL(t),
            o = t[1] && t[10] && mL(t); return { c() { r && r.c(), e = PM(), o && o.c(), n = BM() }, m(t, a) { r && r.m(t, a), AM(t, e, a), o && o.m(t, a), AM(t, n, a), i = !0 }, p(t, i) { t[10] ? r ? (r.p(t, i), 1024 & i[0] && gS(r, 1)) : (r = vL(t), r.c(), gS(r, 1), r.m(e.parentNode, e)) : r && (dS(), pS(r, 1, 1, (() => { r = null })), hS()), t[1] && t[10] ? o ? (o.p(t, i), 1026 & i[0] && gS(o, 1)) : (o = mL(t), o.c(), gS(o, 1), o.m(n.parentNode, n)) : o && (dS(), pS(o, 1, 1, (() => { o = null })), hS()) }, i(t) { i || (gS(r), gS(o), i = !0) }, o(t) { pS(r), pS(o), i = !1 }, d(t) { r && r.d(t), t && DM(e), o && o.d(t), t && DM(n) } } }

    function bL(t) { let e, n; return e = new nL({ props: { id: t[4], x: t[14], y: t[15], visible: t[10], opacity: t[23], scale: t[8], editor: t[2], isEditor: t[0], isEditorActive: t[1], preventKeyHandlers: t[32], editComponent: t[3], containerWidth: t[9], updateDraggable: t[5], finalizeDraggable: t[6], extraClasses: t[35], darkMode: t[26], $$slots: { default: [xL] }, $$scope: { ctx: t } } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                16 & n[0] && (i.id = t[4]), 16384 & n[0] && (i.x = t[14]), 32768 & n[0] && (i.y = t[15]), 1024 & n[0] && (i.visible = t[10]), 8388608 & n[0] && (i.opacity = t[23]), 256 & n[0] && (i.scale = t[8]), 4 & n[0] && (i.editor = t[2]), 1 & n[0] && (i.isEditor = t[0]), 2 & n[0] && (i.isEditorActive = t[1]), 2 & n[1] && (i.preventKeyHandlers = t[32]), 8 & n[0] && (i.editComponent = t[3]), 512 & n[0] && (i.containerWidth = t[9]), 32 & n[0] && (i.updateDraggable = t[5]), 64 & n[0] && (i.finalizeDraggable = t[6]), 16 & n[1] && (i.extraClasses = t[35]), 67108864 & n[0] && (i.darkMode = t[26]), 2071936242 & n[0] | 262189 & n[1] && (i.$$scope = { dirty: n, ctx: t }), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } } const $L = "threeHandle";

    function wL(t, e, n) { let i, r, o, a, s, l, c, u, f, d, h, g, { isEditor: p = !1 } = e,
            { isEditorActive: v = !1 } = e,
            { editor: m } = e,
            { editComponent: y } = e,
            { id: x } = e,
            { updateDraggable: b } = e,
            { finalizeDraggable: $ } = e,
            { color: w } = e,
            { scale: _ } = e,
            { containerWidth: k } = e,
            { visible: M = !0 } = e,
            { text: S = "" } = e,
            { align: A = "left" } = e,
            { valign: D = "top" } = e,
            { x: C = 0 } = e,
            { y: E = 0 } = e,
            { x2: O = 40 } = e,
            { y2: T = 20 } = e,
            { x3: P = 100 } = e,
            { y3: B = 100 } = e,
            { maxWidth: L = 300 } = e,
            { offsetX: z = 0 } = e,
            { offsetY: Y = 0 } = e,
            { lineStyle: F = "vertical" } = e,
            { arrowStyle: W = $L } = e,
            { strokeWidth: R = 1 } = e,
            { opacity: N } = e,
            { outline: H } = e,
            { infoBox: j } = e,
            { fontSize: I } = e,
            { textWidth: V } = e,
            { darkMode: U } = e,
            X = !1; return t.$$set = t => { "isEditor" in t && n(0, p = t.isEditor), "isEditorActive" in t && n(1, v = t.isEditorActive), "editor" in t && n(2, m = t.editor), "editComponent" in t && n(3, y = t.editComponent), "id" in t && n(4, x = t.id), "updateDraggable" in t && n(5, b = t.updateDraggable), "finalizeDraggable" in t && n(6, $ = t.finalizeDraggable), "color" in t && n(7, w = t.color), "scale" in t && n(8, _ = t.scale), "containerWidth" in t && n(9, k = t.containerWidth), "visible" in t && n(10, M = t.visible), "text" in t && n(11, S = t.text), "align" in t && n(12, A = t.align), "valign" in t && n(13, D = t.valign), "x" in t && n(14, C = t.x), "y" in t && n(15, E = t.y), "x2" in t && n(16, O = t.x2), "y2" in t && n(17, T = t.y2), "x3" in t && n(18, P = t.x3), "y3" in t && n(19, B = t.y3), "maxWidth" in t && n(41, L = t.maxWidth), "offsetX" in t && n(20, z = t.offsetX), "offsetY" in t && n(21, Y = t.offsetY), "lineStyle" in t && n(42, F = t.lineStyle), "arrowStyle" in t && n(22, W = t.arrowStyle), "strokeWidth" in t && n(43, R = t.strokeWidth), "opacity" in t && n(23, N = t.opacity), "outline" in t && n(44, H = t.outline), "infoBox" in t && n(45, j = t.infoBox), "fontSize" in t && n(24, I = t.fontSize), "textWidth" in t && n(25, V = t.textWidth), "darkMode" in t && n(26, U = t.darkMode) }, t.$$.update = () => { if (4096 & t.$$.dirty[1] && n(36, i = 4.5 - R / 2), 512 & t.$$.dirty[0] && n(48, r = k < 500 ? "mobile" : ""), 8192 & t.$$.dirty[1] && n(47, o = H ? "outline" : ""), 16384 & t.$$.dirty[1] && n(46, a = j ? "infoBox" : ""), 229376 & t.$$.dirty[1] && n(35, s = `${r} ${o} ${a}`), 128 & t.$$.dirty[0] && n(34, l = `stroke: ${w};`), 128 & t.$$.dirty[0] | 4096 & t.$$.dirty[1] && n(33, c = `stroke: ${w}; stroke-width: ${R}px;`), 4141056 & t.$$.dirty[0] | 2048 & t.$$.dirty[1]) { const { alignOffsetX: t, alignOffsetY: e } = BB(A, D, F);
                n(27, u = P + z + t), n(28, f = B + Y + e), n(30, h = Math.abs(P - 0)), n(31, g = Math.abs(B - 0)), n(29, d = function(t, e, n) { const i = CB(e, n),
                        r = CB(n, t),
                        o = CB(t, e),
                        a = Math.acos((i * i + r * r - o * o) / (2 * i * r)); let s = i * r * o / 4 / (.5 * i * r * Math.sin(a)); return s = Math.round(1e3 * s) / 1e3, ["M", t, "A", s, s, 0, +(Math.PI / 2 > a), +((e[0] - t[0]) * (n[1] - t[1]) - (e[1] - t[1]) * (n[0] - t[0]) < 0), e].join(" ") }([P, B], [0, 0], [O, T])) } }, [p, v, m, y, x, b, $, w, _, k, M, S, A, D, C, E, O, T, P, B, z, Y, W, N, I, V, U, u, f, d, h, g, X, c, l, s, i, function(t) { n(32, X = t) }, function(t) { const e = _.invert(k, [t.x + C, t.y + E]);
            b(x, { x: e[0], y: e[1] }), p && m.calculateBounds() }, function(t) { b(x, { x2: Math.min(L, t.x), y2: Math.min(L, t.y) }) }, function(t) { const e = Math.min(L, t.x),
                n = Math.min(L, t.y); if ("twoHandle" === W) { const [t, i] = function(t, e, n) { let i = 0,
                        r = 0; return "vertical" === t ? (r = n > 0 ? -10 : 10, i = e > 0 ? -2 : 2) : "horizontal" === t && (i = e > 0 ? -10 : 10, r = n > 0 ? -2 : 2), [i, r] }(F, e, n);
                b(x, { x3: e, y3: n, x2: e + t, y2: n + i }) } else b(x, { x3: e, y3: n }) }, L, F, R, H, j, a, o, r] } class _L extends _S { constructor(t) { super(), wS(this, t, wL, bL, pM, { isEditor: 0, isEditorActive: 1, editor: 2, editComponent: 3, id: 4, updateDraggable: 5, finalizeDraggable: 6, color: 7, scale: 8, containerWidth: 9, visible: 10, text: 11, align: 12, valign: 13, x: 14, y: 15, x2: 16, y2: 17, x3: 18, y3: 19, maxWidth: 41, offsetX: 20, offsetY: 21, lineStyle: 42, arrowStyle: 22, strokeWidth: 43, opacity: 23, outline: 44, infoBox: 45, fontSize: 24, textWidth: 25, darkMode: 26 }, pL, [-1, -1]) } get isEditor() { return this.$$.ctx[0] } set isEditor(t) { this.$$set({ isEditor: t }), lS() } get isEditorActive() { return this.$$.ctx[1] } set isEditorActive(t) { this.$$set({ isEditorActive: t }), lS() } get editor() { return this.$$.ctx[2] } set editor(t) { this.$$set({ editor: t }), lS() } get editComponent() { return this.$$.ctx[3] } set editComponent(t) { this.$$set({ editComponent: t }), lS() } get id() { return this.$$.ctx[4] } set id(t) { this.$$set({ id: t }), lS() } get updateDraggable() { return this.$$.ctx[5] } set updateDraggable(t) { this.$$set({ updateDraggable: t }), lS() } get finalizeDraggable() { return this.$$.ctx[6] } set finalizeDraggable(t) { this.$$set({ finalizeDraggable: t }), lS() } get color() { return this.$$.ctx[7] } set color(t) { this.$$set({ color: t }), lS() } get scale() { return this.$$.ctx[8] } set scale(t) { this.$$set({ scale: t }), lS() } get containerWidth() { return this.$$.ctx[9] } set containerWidth(t) { this.$$set({ containerWidth: t }), lS() } get visible() { return this.$$.ctx[10] } set visible(t) { this.$$set({ visible: t }), lS() } get text() { return this.$$.ctx[11] } set text(t) { this.$$set({ text: t }), lS() } get align() { return this.$$.ctx[12] } set align(t) { this.$$set({ align: t }), lS() } get valign() { return this.$$.ctx[13] } set valign(t) { this.$$set({ valign: t }), lS() } get x() { return this.$$.ctx[14] } set x(t) { this.$$set({ x: t }), lS() } get y() { return this.$$.ctx[15] } set y(t) { this.$$set({ y: t }), lS() } get x2() { return this.$$.ctx[16] } set x2(t) { this.$$set({ x2: t }), lS() } get y2() { return this.$$.ctx[17] } set y2(t) { this.$$set({ y2: t }), lS() } get x3() { return this.$$.ctx[18] } set x3(t) { this.$$set({ x3: t }), lS() } get y3() { return this.$$.ctx[19] } set y3(t) { this.$$set({ y3: t }), lS() } get maxWidth() { return this.$$.ctx[41] } set maxWidth(t) { this.$$set({ maxWidth: t }), lS() } get offsetX() { return this.$$.ctx[20] } set offsetX(t) { this.$$set({ offsetX: t }), lS() } get offsetY() { return this.$$.ctx[21] } set offsetY(t) { this.$$set({ offsetY: t }), lS() } get lineStyle() { return this.$$.ctx[42] } set lineStyle(t) { this.$$set({ lineStyle: t }), lS() } get arrowStyle() { return this.$$.ctx[22] } set arrowStyle(t) { this.$$set({ arrowStyle: t }), lS() } get strokeWidth() { return this.$$.ctx[43] } set strokeWidth(t) { this.$$set({ strokeWidth: t }), lS() } get opacity() { return this.$$.ctx[23] } set opacity(t) { this.$$set({ opacity: t }), lS() } get outline() { return this.$$.ctx[44] } set outline(t) { this.$$set({ outline: t }), lS() } get infoBox() { return this.$$.ctx[45] } set infoBox(t) { this.$$set({ infoBox: t }), lS() } get fontSize() { return this.$$.ctx[24] } set fontSize(t) { this.$$set({ fontSize: t }), lS() } get textWidth() { return this.$$.ctx[25] } set textWidth(t) { this.$$set({ textWidth: t }), lS() } get darkMode() { return this.$$.ctx[26] } set darkMode(t) { this.$$set({ darkMode: t }), lS() } }

    function kL(t) { SM(t, "svelte-1miakub", "svg.svelte-1miakub{position:absolute;overflow:visible;top:0;left:0}") }

    function ML(t) { let e, n, i, r, o, a, s, l; return e = new JB({ props: { id: t[4], isEditorActive: t[1], setEditingText: t[32], updateDraggable: t[8], finalizeDraggable: t[9], text: t[11], align: t[12], valign: t[13], color: t[5], visible: t[10], textWidth: t[22], fontSize: t[23], offsetX: t[20], offsetY: t[21], textOffsetX: t[26], textOffsetY: t[27] } }), { c() { yS(e.$$.fragment), n = PM(), i = OM("svg"), r = OM("g"), o = OM("path"), zM(o, "d", a = "M 0,0 " + t[16] + "," + t[17] + " " + t[18] + "," + t[19]), zM(o, "style", t[29]), zM(r, "transform", s = "translate(" + (t[18] < 0 ? Math.abs(t[18]) : 0) + ", " + (t[19] < 0 ? Math.abs(t[19]) : 0) + ")"), zM(i, "class", "line draw-region svelte-1miakub"), RM(i, "left", t[18] < 0 ? t[18] : 0), RM(i, "top", t[19] < 0 ? t[19] : 0), RM(i, "width", t[33](t[18])), RM(i, "height", t[33](t[19])) }, m(t, a) { xS(e, t, a), AM(t, n, a), AM(t, i, a), MM(i, r), MM(r, o), l = !0 }, p(t, n) { const c = {};
                16 & n[0] && (c.id = t[4]), 2 & n[0] && (c.isEditorActive = t[1]), 256 & n[0] && (c.updateDraggable = t[8]), 512 & n[0] && (c.finalizeDraggable = t[9]), 2048 & n[0] && (c.text = t[11]), 4096 & n[0] && (c.align = t[12]), 8192 & n[0] && (c.valign = t[13]), 32 & n[0] && (c.color = t[5]), 1024 & n[0] && (c.visible = t[10]), 4194304 & n[0] && (c.textWidth = t[22]), 8388608 & n[0] && (c.fontSize = t[23]), 1048576 & n[0] && (c.offsetX = t[20]), 2097152 & n[0] && (c.offsetY = t[21]), 67108864 & n[0] && (c.textOffsetX = t[26]), 134217728 & n[0] && (c.textOffsetY = t[27]), e.$set(c), (!l || 983040 & n[0] && a !== (a = "M 0,0 " + t[16] + "," + t[17] + " " + t[18] + "," + t[19])) && zM(o, "d", a), (!l || 536870912 & n[0]) && zM(o, "style", t[29]), (!l || 786432 & n[0] && s !== (s = "translate(" + (t[18] < 0 ? Math.abs(t[18]) : 0) + ", " + (t[19] < 0 ? Math.abs(t[19]) : 0) + ")")) && zM(r, "transform", s), (!l || 262144 & n[0]) && RM(i, "left", t[18] < 0 ? t[18] : 0), (!l || 524288 & n[0]) && RM(i, "top", t[19] < 0 ? t[19] : 0), (!l || 262144 & n[0]) && RM(i, "width", t[33](t[18])), (!l || 524288 & n[0]) && RM(i, "height", t[33](t[19])) }, i(t) { l || (gS(e.$$.fragment, t), l = !0) }, o(t) { pS(e.$$.fragment, t), l = !1 }, d(t) { bS(e, t), t && DM(n), t && DM(i) } } }

    function SL(t) { let e, n, i, r, o, a; return e = new XB({ props: { id: t[4], active: "true", handleClass: "move", onChange: t[31] } }), i = new XB({ props: { id: t[4], x: t[16], y: t[17], active: "true", color: "rgb(145 145 145 / 50%)", handleWidth: "8", handleHeight: "8", onChange: t[34] } }), o = new XB({ props: { id: t[4], x: t[18], y: t[19], active: "true", color: "rgb(145 145 145 / 50%)", handleWidth: "8", handleHeight: "8", onChange: t[35] } }), { c() { yS(e.$$.fragment), n = PM(), yS(i.$$.fragment), r = PM(), yS(o.$$.fragment) }, m(t, s) { xS(e, t, s), AM(t, n, s), xS(i, t, s), AM(t, r, s), xS(o, t, s), a = !0 }, p(t, n) { const r = {};
                16 & n[0] && (r.id = t[4]), 1 & n[1] && (r.onChange = t[31]), e.$set(r); const a = {};
                16 & n[0] && (a.id = t[4]), 65536 & n[0] && (a.x = t[16]), 131072 & n[0] && (a.y = t[17]), i.$set(a); const s = {};
                16 & n[0] && (s.id = t[4]), 262144 & n[0] && (s.x = t[18]), 524288 & n[0] && (s.y = t[19]), o.$set(s) }, i(t) { a || (gS(e.$$.fragment, t), gS(i.$$.fragment, t), gS(o.$$.fragment, t), a = !0) }, o(t) { pS(e.$$.fragment, t), pS(i.$$.fragment, t), pS(o.$$.fragment, t), a = !1 }, d(t) { bS(e, t), t && DM(n), bS(i, t), t && DM(r), bS(o, t) } } }

    function AL(t) { let e, n, i, r = t[10] && ML(t),
            o = t[1] && t[10] && SL(t); return { c() { r && r.c(), e = PM(), o && o.c(), n = BM() }, m(t, a) { r && r.m(t, a), AM(t, e, a), o && o.m(t, a), AM(t, n, a), i = !0 }, p(t, i) { t[10] ? r ? (r.p(t, i), 1024 & i[0] && gS(r, 1)) : (r = ML(t), r.c(), gS(r, 1), r.m(e.parentNode, e)) : r && (dS(), pS(r, 1, 1, (() => { r = null })), hS()), t[1] && t[10] ? o ? (o.p(t, i), 1026 & i[0] && gS(o, 1)) : (o = SL(t), o.c(), gS(o, 1), o.m(n.parentNode, n)) : o && (dS(), pS(o, 1, 1, (() => { o = null })), hS()) }, i(t) { i || (gS(r), gS(o), i = !0) }, o(t) { pS(r), pS(o), i = !1 }, d(t) { r && r.d(t), t && DM(e), o && o.d(t), t && DM(n) } } }

    function DL(t) { let e, n; return e = new nL({ props: { id: t[4], x: t[14], y: t[15], visible: t[10], opacity: t[24], scale: t[6], editor: t[2], isEditor: t[0], isEditorActive: t[1], preventKeyHandlers: t[28], editComponent: t[3], containerWidth: t[7], updateDraggable: t[8], finalizeDraggable: t[9], extraClasses: t[30], darkMode: t[25], $$slots: { default: [AL] }, $$scope: { ctx: t } } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                16 & n[0] && (i.id = t[4]), 16384 & n[0] && (i.x = t[14]), 32768 & n[0] && (i.y = t[15]), 1024 & n[0] && (i.visible = t[10]), 16777216 & n[0] && (i.opacity = t[24]), 64 & n[0] && (i.scale = t[6]), 4 & n[0] && (i.editor = t[2]), 1 & n[0] && (i.isEditor = t[0]), 2 & n[0] && (i.isEditorActive = t[1]), 268435456 & n[0] && (i.preventKeyHandlers = t[28]), 8 & n[0] && (i.editComponent = t[3]), 128 & n[0] && (i.containerWidth = t[7]), 256 & n[0] && (i.updateDraggable = t[8]), 512 & n[0] && (i.finalizeDraggable = t[9]), 1073741824 & n[0] && (i.extraClasses = t[30]), 33554432 & n[0] && (i.darkMode = t[25]), 754925362 & n[0] | 8193 & n[1] && (i.$$scope = { dirty: n, ctx: t }), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function CL(t, e, n) { let i, r, o, a, s, l, c, u, { isEditor: f = !1 } = e,
            { isEditorActive: d = !1 } = e,
            { editor: h } = e,
            { editComponent: g } = e,
            { id: p } = e,
            { color: v } = e,
            { scale: m } = e,
            { containerWidth: y } = e,
            { maxWidth: x = 200 } = e,
            { updateDraggable: b } = e,
            { finalizeDraggable: $ } = e,
            { visible: w = !0 } = e,
            { text: _ = "" } = e,
            { align: k = "left" } = e,
            { valign: M = "top" } = e,
            { lineStyle: S = "vertical" } = e,
            { x: A = 0 } = e,
            { y: D = 0 } = e,
            { x2: C = 50 } = e,
            { y2: E = 0 } = e,
            { x3: O = 50 } = e,
            { y3: T = 80 } = e,
            { offsetX: P = 0 } = e,
            { offsetY: B = 0 } = e,
            { strokeWidth: L = 1 } = e,
            { outline: z } = e,
            { infoBox: Y } = e,
            { textWidth: F } = e,
            { fontSize: W } = e,
            { opacity: R } = e,
            { darkMode: N } = e,
            H = !1; return t.$$set = t => { "isEditor" in t && n(0, f = t.isEditor), "isEditorActive" in t && n(1, d = t.isEditorActive), "editor" in t && n(2, h = t.editor), "editComponent" in t && n(3, g = t.editComponent), "id" in t && n(4, p = t.id), "color" in t && n(5, v = t.color), "scale" in t && n(6, m = t.scale), "containerWidth" in t && n(7, y = t.containerWidth), "maxWidth" in t && n(36, x = t.maxWidth), "updateDraggable" in t && n(8, b = t.updateDraggable), "finalizeDraggable" in t && n(9, $ = t.finalizeDraggable), "visible" in t && n(10, w = t.visible), "text" in t && n(11, _ = t.text), "align" in t && n(12, k = t.align), "valign" in t && n(13, M = t.valign), "lineStyle" in t && n(37, S = t.lineStyle), "x" in t && n(14, A = t.x), "y" in t && n(15, D = t.y), "x2" in t && n(16, C = t.x2), "y2" in t && n(17, E = t.y2), "x3" in t && n(18, O = t.x3), "y3" in t && n(19, T = t.y3), "offsetX" in t && n(20, P = t.offsetX), "offsetY" in t && n(21, B = t.offsetY), "strokeWidth" in t && n(38, L = t.strokeWidth), "outline" in t && n(39, z = t.outline), "infoBox" in t && n(40, Y = t.infoBox), "textWidth" in t && n(22, F = t.textWidth), "fontSize" in t && n(23, W = t.fontSize), "opacity" in t && n(24, R = t.opacity), "darkMode" in t && n(25, N = t.darkMode) }, t.$$.update = () => { if (49621 & t.$$.dirty[0] && n(31, i = LB(p, A, D, m, y, b, f, h)), 128 & t.$$.dirty[0] && n(43, r = y < 500 ? "mobile" : ""), 256 & t.$$.dirty[1] && n(42, o = z ? "outline" : ""), 512 & t.$$.dirty[1] && n(41, a = Y ? "infoBox" : ""), 7168 & t.$$.dirty[1] && n(30, s = `${r} ${o} ${a}`), 32 & t.$$.dirty[0] | 128 & t.$$.dirty[1] && n(29, l = `stroke: ${v}; stroke-width: ${L}px;`), 3944448 & t.$$.dirty[0] | 64 & t.$$.dirty[1]) { const { alignOffsetX: t, alignOffsetY: e } = BB(k, M, S);
                n(26, c = O + P + t), n(27, u = T + B + e) } }, [f, d, h, g, p, v, m, y, b, $, w, _, k, M, A, D, C, E, O, T, P, B, F, W, R, N, c, u, H, l, s, i, function(t) { n(28, H = t) }, t => Math.max(10, Math.abs(t)), function(t) { if ("vertical" === S) { const e = Math.min(x, t.x);
                b(p, { x2: e, x3: e }) } else { const e = Math.min(x, t.y);
                b(p, { y2: e, y3: e }) } }, function(t) { b(p, "vertical" === S ? { y3: Math.min(x, t.y) } : { x3: Math.min(x, t.x) }) }, x, S, L, z, Y, a, o, r] } class EL extends _S { constructor(t) { super(), wS(this, t, CL, DL, pM, { isEditor: 0, isEditorActive: 1, editor: 2, editComponent: 3, id: 4, color: 5, scale: 6, containerWidth: 7, maxWidth: 36, updateDraggable: 8, finalizeDraggable: 9, visible: 10, text: 11, align: 12, valign: 13, lineStyle: 37, x: 14, y: 15, x2: 16, y2: 17, x3: 18, y3: 19, offsetX: 20, offsetY: 21, strokeWidth: 38, outline: 39, infoBox: 40, textWidth: 22, fontSize: 23, opacity: 24, darkMode: 25 }, kL, [-1, -1]) } get isEditor() { return this.$$.ctx[0] } set isEditor(t) { this.$$set({ isEditor: t }), lS() } get isEditorActive() { return this.$$.ctx[1] } set isEditorActive(t) { this.$$set({ isEditorActive: t }), lS() } get editor() { return this.$$.ctx[2] } set editor(t) { this.$$set({ editor: t }), lS() } get editComponent() { return this.$$.ctx[3] } set editComponent(t) { this.$$set({ editComponent: t }), lS() } get id() { return this.$$.ctx[4] } set id(t) { this.$$set({ id: t }), lS() } get color() { return this.$$.ctx[5] } set color(t) { this.$$set({ color: t }), lS() } get scale() { return this.$$.ctx[6] } set scale(t) { this.$$set({ scale: t }), lS() } get containerWidth() { return this.$$.ctx[7] } set containerWidth(t) { this.$$set({ containerWidth: t }), lS() } get maxWidth() { return this.$$.ctx[36] } set maxWidth(t) { this.$$set({ maxWidth: t }), lS() } get updateDraggable() { return this.$$.ctx[8] } set updateDraggable(t) { this.$$set({ updateDraggable: t }), lS() } get finalizeDraggable() { return this.$$.ctx[9] } set finalizeDraggable(t) { this.$$set({ finalizeDraggable: t }), lS() } get visible() { return this.$$.ctx[10] } set visible(t) { this.$$set({ visible: t }), lS() } get text() { return this.$$.ctx[11] } set text(t) { this.$$set({ text: t }), lS() } get align() { return this.$$.ctx[12] } set align(t) { this.$$set({ align: t }), lS() } get valign() { return this.$$.ctx[13] } set valign(t) { this.$$set({ valign: t }), lS() } get lineStyle() { return this.$$.ctx[37] } set lineStyle(t) { this.$$set({ lineStyle: t }), lS() } get x() { return this.$$.ctx[14] } set x(t) { this.$$set({ x: t }), lS() } get y() { return this.$$.ctx[15] } set y(t) { this.$$set({ y: t }), lS() } get x2() { return this.$$.ctx[16] } set x2(t) { this.$$set({ x2: t }), lS() } get y2() { return this.$$.ctx[17] } set y2(t) { this.$$set({ y2: t }), lS() } get x3() { return this.$$.ctx[18] } set x3(t) { this.$$set({ x3: t }), lS() } get y3() { return this.$$.ctx[19] } set y3(t) { this.$$set({ y3: t }), lS() } get offsetX() { return this.$$.ctx[20] } set offsetX(t) { this.$$set({ offsetX: t }), lS() } get offsetY() { return this.$$.ctx[21] } set offsetY(t) { this.$$set({ offsetY: t }), lS() } get strokeWidth() { return this.$$.ctx[38] } set strokeWidth(t) { this.$$set({ strokeWidth: t }), lS() } get outline() { return this.$$.ctx[39] } set outline(t) { this.$$set({ outline: t }), lS() } get infoBox() { return this.$$.ctx[40] } set infoBox(t) { this.$$set({ infoBox: t }), lS() } get textWidth() { return this.$$.ctx[22] } set textWidth(t) { this.$$set({ textWidth: t }), lS() } get fontSize() { return this.$$.ctx[23] } set fontSize(t) { this.$$set({ fontSize: t }), lS() } get opacity() { return this.$$.ctx[24] } set opacity(t) { this.$$set({ opacity: t }), lS() } get darkMode() { return this.$$.ctx[25] } set darkMode(t) { this.$$set({ darkMode: t }), lS() } }

    function OL(t) { let e, n; return e = new XB({ props: { id: t[0], x: 2 * t[12], y: t[12], handleWidth: "8", handleHeight: "8", active: "true", color: "rgb(145 145 145 / 50%)", onChange: t[34] } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                1 & n[0] && (i.id = t[0]), 4096 & n[0] && (i.x = 2 * t[12]), 4096 & n[0] && (i.y = t[12]), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function TL(t) { let e, n; return e = new JB({ props: { id: t[0], isEditorActive: t[7], setEditingText: t[33], updateDraggable: t[10], finalizeDraggable: t[11], text: t[5], align: t[14], valign: t[15], color: t[13], visible: t[19], textWidth: t[23], letterSpacing: t[24], fontSize: t[22], offsetX: t[20], offsetY: t[21], textOffsetX: t[29], textOffsetY: t[30] } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                1 & n[0] && (i.id = t[0]), 128 & n[0] && (i.isEditorActive = t[7]), 1024 & n[0] && (i.updateDraggable = t[10]), 2048 & n[0] && (i.finalizeDraggable = t[11]), 32 & n[0] && (i.text = t[5]), 16384 & n[0] && (i.align = t[14]), 32768 & n[0] && (i.valign = t[15]), 8192 & n[0] && (i.color = t[13]), 524288 & n[0] && (i.visible = t[19]), 8388608 & n[0] && (i.textWidth = t[23]), 16777216 & n[0] && (i.letterSpacing = t[24]), 4194304 & n[0] && (i.fontSize = t[22]), 1048576 & n[0] && (i.offsetX = t[20]), 2097152 & n[0] && (i.offsetY = t[21]), 536870912 & n[0] && (i.textOffsetX = t[29]), 1073741824 & n[0] && (i.textOffsetY = t[30]), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function PL(t) { let e, n, i, r, o, a, s, l, c = t[7] && t[19] && OL(t),
            u = t[5] && TL(t); return { c() { e = EM("div"), n = OM("svg"), i = OM("circle"), a = PM(), c && c.c(), s = PM(), u && u.c(), zM(i, "cx", t[27]), zM(i, "cy", t[27]), zM(i, "r", t[12]), zM(i, "fill", r = t[16] || "transparent"), zM(i, "stroke", o = t[17] || t[26] ? "white" : "black"), zM(i, "stroke-width", t[18]), zM(n, "class", "circle draw-region"), zM(n, "style", t[32]), zM(e, "style", t[28]) }, m(t, r) { AM(t, e, r), MM(e, n), MM(n, i), MM(e, a), c && c.m(e, null), MM(e, s), u && u.m(e, null), l = !0 }, p(t, a) {
                (!l || 134217728 & a[0]) && zM(i, "cx", t[27]), (!l || 134217728 & a[0]) && zM(i, "cy", t[27]), (!l || 4096 & a[0]) && zM(i, "r", t[12]), (!l || 65536 & a[0] && r !== (r = t[16] || "transparent")) && zM(i, "fill", r), (!l || 67239936 & a[0] && o !== (o = t[17] || t[26] ? "white" : "black")) && zM(i, "stroke", o), (!l || 262144 & a[0]) && zM(i, "stroke-width", t[18]), (!l || 2 & a[1]) && zM(n, "style", t[32]), t[7] && t[19] ? c ? (c.p(t, a), 524416 & a[0] && gS(c, 1)) : (c = OL(t), c.c(), gS(c, 1), c.m(e, s)) : c && (dS(), pS(c, 1, 1, (() => { c = null })), hS()), t[5] ? u ? (u.p(t, a), 32 & a[0] && gS(u, 1)) : (u = TL(t), u.c(), gS(u, 1), u.m(e, null)) : u && (dS(), pS(u, 1, 1, (() => { u = null })), hS()), (!l || 268435456 & a[0]) && zM(e, "style", t[28]) }, i(t) { l || (gS(c), gS(u), l = !0) }, o(t) { pS(c), pS(u), l = !1 }, d(t) { t && DM(e), c && c.d(), u && u.d() } } }

    function BL(t) { let e, n; return e = new nL({ props: { id: t[0], x: t[2], y: t[3], visible: t[19], opacity: t[25], scale: t[1], editor: t[4], isEditor: t[6], isEditorActive: t[7], preventKeyHandlers: t[31], editComponent: t[8], containerWidth: t[9], updateDraggable: t[10], finalizeDraggable: t[11], darkMode: t[26], $$slots: { default: [PL] }, $$scope: { ctx: t } } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                1 & n[0] && (i.id = t[0]), 4 & n[0] && (i.x = t[2]), 8 & n[0] && (i.y = t[3]), 524288 & n[0] && (i.visible = t[19]), 33554432 & n[0] && (i.opacity = t[25]), 2 & n[0] && (i.scale = t[1]), 16 & n[0] && (i.editor = t[4]), 64 & n[0] && (i.isEditor = t[6]), 128 & n[0] && (i.isEditorActive = t[7]), 1 & n[1] && (i.preventKeyHandlers = t[31]), 256 & n[0] && (i.editComponent = t[8]), 512 & n[0] && (i.containerWidth = t[9]), 1024 & n[0] && (i.updateDraggable = t[10]), 2048 & n[0] && (i.finalizeDraggable = t[11]), 67108864 & n[0] && (i.darkMode = t[26]), 2113928353 & n[0] | 18 & n[1] && (i.$$scope = { dirty: n, ctx: t }), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function LL(t, e, n) { let i, r, { id: o } = e,
            { scale: a } = e,
            { x: s = 0 } = e,
            { y: l = 0 } = e,
            { editor: c } = e,
            { text: u = "" } = e,
            { isEditor: f = !1 } = e,
            { isEditorActive: d = !1 } = e,
            { editComponent: h } = e,
            { containerWidth: g } = e,
            { updateDraggable: p } = e,
            { finalizeDraggable: v } = e,
            { radius: m = 15 } = e,
            { color: y } = e,
            { align: x = "center" } = e,
            { valign: b = "bottom" } = e,
            { fill: $ } = e,
            { stroke: w } = e,
            { strokeWidth: _ = 1 } = e,
            { visible: k = !0 } = e,
            { offsetX: M = 0 } = e,
            { offsetY: S = 0 } = e,
            { fontSize: A } = e,
            { textWidth: D } = e,
            { letterSpacing: C } = e,
            { opacity: E } = e,
            { darkMode: O } = e,
            T = "",
            P = 0,
            B = 0,
            L = !1; return t.$$set = t => { "id" in t && n(0, o = t.id), "scale" in t && n(1, a = t.scale), "x" in t && n(2, s = t.x), "y" in t && n(3, l = t.y), "editor" in t && n(4, c = t.editor), "text" in t && n(5, u = t.text), "isEditor" in t && n(6, f = t.isEditor), "isEditorActive" in t && n(7, d = t.isEditorActive), "editComponent" in t && n(8, h = t.editComponent), "containerWidth" in t && n(9, g = t.containerWidth), "updateDraggable" in t && n(10, p = t.updateDraggable), "finalizeDraggable" in t && n(11, v = t.finalizeDraggable), "radius" in t && n(12, m = t.radius), "color" in t && n(13, y = t.color), "align" in t && n(14, x = t.align), "valign" in t && n(15, b = t.valign), "fill" in t && n(16, $ = t.fill), "stroke" in t && n(17, w = t.stroke), "strokeWidth" in t && n(18, _ = t.strokeWidth), "visible" in t && n(19, k = t.visible), "offsetX" in t && n(20, M = t.offsetX), "offsetY" in t && n(21, S = t.offsetY), "fontSize" in t && n(22, A = t.fontSize), "textWidth" in t && n(23, D = t.textWidth), "letterSpacing" in t && n(24, C = t.letterSpacing), "opacity" in t && n(25, E = t.opacity), "darkMode" in t && n(26, O = t.darkMode) }, t.$$.update = () => { if (266240 & t.$$.dirty[0] && n(27, i = m + _), 528384 & t.$$.dirty[0] && n(28, T = `\n    position: absolute;\n    display: ${k?"block":"none"};\n    transform: translate(${-1*m}px, ${-1*m}px);\n  `), 134217728 & t.$$.dirty[0] && n(32, r = `\n    width: ${2*i}px;\n    height: ${2*i}px;\n    overflow: visible;\n  `), 3198976 & t.$$.dirty[0]) { const { alignOffsetX: t, alignOffsetY: e } = function(t, e, n) { let i = 0,
                        r = 0; return "left" === t && (i = 2 * n + 5), "right" === t && (i = -5), r = n, "center" === t && (i = n, "top" === e && (r = 2 * n + 5), "bottom" === e && (r = -5)), { alignOffsetX: i, alignOffsetY: r } }(x, b, m);
                n(29, P = M + t), n(30, B = S + e) } }, [o, a, s, l, c, u, f, d, h, g, p, v, m, y, x, b, $, w, _, k, M, S, A, D, C, E, O, i, T, P, B, L, r, function(t) { n(31, L = t) }, function(t) { p(o, { radius: t.x / 2 }) }] } class zL extends _S { constructor(t) { super(), wS(this, t, LL, BL, pM, { id: 0, scale: 1, x: 2, y: 3, editor: 4, text: 5, isEditor: 6, isEditorActive: 7, editComponent: 8, containerWidth: 9, updateDraggable: 10, finalizeDraggable: 11, radius: 12, color: 13, align: 14, valign: 15, fill: 16, stroke: 17, strokeWidth: 18, visible: 19, offsetX: 20, offsetY: 21, fontSize: 22, textWidth: 23, letterSpacing: 24, opacity: 25, darkMode: 26 }, null, [-1, -1]) } get id() { return this.$$.ctx[0] } set id(t) { this.$$set({ id: t }), lS() } get scale() { return this.$$.ctx[1] } set scale(t) { this.$$set({ scale: t }), lS() } get x() { return this.$$.ctx[2] } set x(t) { this.$$set({ x: t }), lS() } get y() { return this.$$.ctx[3] } set y(t) { this.$$set({ y: t }), lS() } get editor() { return this.$$.ctx[4] } set editor(t) { this.$$set({ editor: t }), lS() } get text() { return this.$$.ctx[5] } set text(t) { this.$$set({ text: t }), lS() } get isEditor() { return this.$$.ctx[6] } set isEditor(t) { this.$$set({ isEditor: t }), lS() } get isEditorActive() { return this.$$.ctx[7] } set isEditorActive(t) { this.$$set({ isEditorActive: t }), lS() } get editComponent() { return this.$$.ctx[8] } set editComponent(t) { this.$$set({ editComponent: t }), lS() } get containerWidth() { return this.$$.ctx[9] } set containerWidth(t) { this.$$set({ containerWidth: t }), lS() } get updateDraggable() { return this.$$.ctx[10] } set updateDraggable(t) { this.$$set({ updateDraggable: t }), lS() } get finalizeDraggable() { return this.$$.ctx[11] } set finalizeDraggable(t) { this.$$set({ finalizeDraggable: t }), lS() } get radius() { return this.$$.ctx[12] } set radius(t) { this.$$set({ radius: t }), lS() } get color() { return this.$$.ctx[13] } set color(t) { this.$$set({ color: t }), lS() } get align() { return this.$$.ctx[14] } set align(t) { this.$$set({ align: t }), lS() } get valign() { return this.$$.ctx[15] } set valign(t) { this.$$set({ valign: t }), lS() } get fill() { return this.$$.ctx[16] } set fill(t) { this.$$set({ fill: t }), lS() } get stroke() { return this.$$.ctx[17] } set stroke(t) { this.$$set({ stroke: t }), lS() } get strokeWidth() { return this.$$.ctx[18] } set strokeWidth(t) { this.$$set({ strokeWidth: t }), lS() } get visible() { return this.$$.ctx[19] } set visible(t) { this.$$set({ visible: t }), lS() } get offsetX() { return this.$$.ctx[20] } set offsetX(t) { this.$$set({ offsetX: t }), lS() } get offsetY() { return this.$$.ctx[21] } set offsetY(t) { this.$$set({ offsetY: t }), lS() } get fontSize() { return this.$$.ctx[22] } set fontSize(t) { this.$$set({ fontSize: t }), lS() } get textWidth() { return this.$$.ctx[23] } set textWidth(t) { this.$$set({ textWidth: t }), lS() } get letterSpacing() { return this.$$.ctx[24] } set letterSpacing(t) { this.$$set({ letterSpacing: t }), lS() } get opacity() { return this.$$.ctx[25] } set opacity(t) { this.$$set({ opacity: t }), lS() } get darkMode() { return this.$$.ctx[26] } set darkMode(t) { this.$$set({ darkMode: t }), lS() } } const YL = { earthquake: '<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- Generator: Adobe Illustrator 24.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">\n<path d="M10,2c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S5.59,2,10,2 M10,0C4.48,0,0,4.48,0,10s4.48,10,10,10s10-4.48,10-10\n\tS15.52,0,10,0L10,0z" fill="{primaryColor}"/>\n<path d="M10,6c2.21,0,4,1.79,4,4s-1.79,4-4,4s-4-1.79-4-4S7.79,6,10,6 M10,4c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6S13.31,4,10,4\n\tL10,4z" fill="{primaryColor}"/>\n<g>\n\t<circle cx="10" cy="10" r="2" fill="{primaryColor}"/>\n</g>\n</svg>', capitol: '<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- Generator: Adobe Illustrator 25.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t width="20px" height="20px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">\n<path d="M10,0c5.5,0,10,4.5,10,10s-4.5,10-10,10S0,15.5,0,10S4.5,0,10,0" fill="{secondaryColor}"/>\n<path d="M10,2.5c4.1,0,7.5,3.4,7.5,7.5s-3.4,7.5-7.5,7.5S2.5,14.1,2.5,10S5.9,2.5,10,2.5 M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10\n\ts10-4.5,10-10S15.5,0,10,0L10,0z" fill="{primaryColor}"/>\n<path d="M10,2.5c4.1,0,7.5,3.4,7.5,7.5s-3.4,7.5-7.5,7.5S2.5,14.1,2.5,10S5.9,2.5,10,2.5" fill="{secondaryColor}"/>\n<path d="M10,7c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S8.3,7,10,7" fill="{primaryColor}"/>\n</svg>' };

    function FL(t, e = "var(--text)", n = "var(--bg)") { return t.replace(/{primaryColor}/g, e).replace(/{secondaryColor}/g, n) }

    function WL(t, e, n) { return FL(YL[t] || "", e, n) }

    function RL(t) { let e, n; return e = new JB({ props: { text: t[12], color: t[33], fontSize: t[15], textWidth: t[15], isEditorLocked: "true", isEditorActive: "false", extraClasses: "icon", align: "center", valign: "center", id: t[4], updateDraggable: t[9], finalizeDraggable: t[10], visible: t[6] } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                4096 & n[0] && (i.text = t[12]), 32768 & n[0] && (i.fontSize = t[15]), 32768 & n[0] && (i.textWidth = t[15]), 16 & n[0] && (i.id = t[4]), 512 & n[0] && (i.updateDraggable = t[9]), 1024 & n[0] && (i.finalizeDraggable = t[10]), 64 & n[0] && (i.visible = t[6]), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function NL(t) { let e, n = FL(t[14], t[33], t[34]) + ""; return { c() { e = EM("div"), zM(e, "class", "svg-icon custom"), zM(e, "style", t[30]) }, m(t, i) { AM(t, e, i), e.innerHTML = n }, p(t, i) { 16384 & i[0] && n !== (n = FL(t[14], t[33], t[34]) + "") && (e.innerHTML = n), 1073741824 & i[0] && zM(e, "style", t[30]) }, i: cM, o: cM, d(t) { t && DM(e) } } }

    function HL(t) { let e, n = WL(t[13], t[33], t[34]) + ""; return { c() { e = EM("div"), zM(e, "class", "svg-icon"), zM(e, "style", t[30]) }, m(t, i) { AM(t, e, i), e.innerHTML = n }, p(t, i) { 8192 & i[0] && n !== (n = WL(t[13], t[33], t[34]) + "") && (e.innerHTML = n), 1073741824 & i[0] && zM(e, "style", t[30]) }, i: cM, o: cM, d(t) { t && DM(e) } } }

    function jL(t) { let e, n; return e = new JB({ props: { id: t[4], isEditorActive: t[1], setEditingText: t[35], updateDraggable: t[9], finalizeDraggable: t[10], text: t[11], align: t[16], valign: t[17], color: t[5], visible: t[6], textWidth: t[23], letterSpacing: t[24], fontSize: t[22], offsetX: t[20], offsetY: t[21], textOffsetX: t[27], textOffsetY: t[28] } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                16 & n[0] && (i.id = t[4]), 2 & n[0] && (i.isEditorActive = t[1]), 512 & n[0] && (i.updateDraggable = t[9]), 1024 & n[0] && (i.finalizeDraggable = t[10]), 2048 & n[0] && (i.text = t[11]), 65536 & n[0] && (i.align = t[16]), 131072 & n[0] && (i.valign = t[17]), 32 & n[0] && (i.color = t[5]), 64 & n[0] && (i.visible = t[6]), 8388608 & n[0] && (i.textWidth = t[23]), 16777216 & n[0] && (i.letterSpacing = t[24]), 4194304 & n[0] && (i.fontSize = t[22]), 1048576 & n[0] && (i.offsetX = t[20]), 2097152 & n[0] && (i.offsetY = t[21]), 134217728 & n[0] && (i.textOffsetX = t[27]), 268435456 & n[0] && (i.textOffsetY = t[28]), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function IL(t) { let e, n; return e = new XB({ props: { id: t[4], x: "0", y: "0", active: "true", handleClass: "move", onChange: t[32] } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                16 & n[0] && (i.id = t[4]), 2 & n[1] && (i.onChange = t[32]), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function VL(t) { let e, n, i, r, o, a; const s = [HL, NL, RL],
            l = [];

        function c(t, e) { return t[13] ? 0 : t[14] ? 1 : 2 } e = c(t), n = l[e] = s[e](t); let u = t[11] && jL(t),
            f = t[1] && t[6] && IL(t); return { c() { n.c(), i = PM(), u && u.c(), r = PM(), f && f.c(), o = BM() }, m(t, n) { l[e].m(t, n), AM(t, i, n), u && u.m(t, n), AM(t, r, n), f && f.m(t, n), AM(t, o, n), a = !0 }, p(t, a) { let d = e;
                e = c(t), e === d ? l[e].p(t, a) : (dS(), pS(l[d], 1, 1, (() => { l[d] = null })), hS(), n = l[e], n ? n.p(t, a) : (n = l[e] = s[e](t), n.c()), gS(n, 1), n.m(i.parentNode, i)), t[11] ? u ? (u.p(t, a), 2048 & a[0] && gS(u, 1)) : (u = jL(t), u.c(), gS(u, 1), u.m(r.parentNode, r)) : u && (dS(), pS(u, 1, 1, (() => { u = null })), hS()), t[1] && t[6] ? f ? (f.p(t, a), 66 & a[0] && gS(f, 1)) : (f = IL(t), f.c(), gS(f, 1), f.m(o.parentNode, o)) : f && (dS(), pS(f, 1, 1, (() => { f = null })), hS()) }, i(t) { a || (gS(n), gS(u), gS(f), a = !0) }, o(t) { pS(n), pS(u), pS(f), a = !1 }, d(t) { l[e].d(t), t && DM(i), u && u.d(t), t && DM(r), f && f.d(t), t && DM(o) } } }

    function UL(t) { let e, n; return e = new nL({ props: { id: t[4], x: t[18], y: t[19], visible: t[6], opacity: t[25], scale: t[7], editor: t[2], isEditor: t[0], isEditorActive: t[1], preventKeyHandlers: t[29], editComponent: t[3], containerWidth: t[8], updateDraggable: t[9], finalizeDraggable: t[10], extraClasses: t[31], darkMode: t[26], $$slots: { default: [VL] }, $$scope: { ctx: t } } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                16 & n[0] && (i.id = t[4]), 262144 & n[0] && (i.x = t[18]), 524288 & n[0] && (i.y = t[19]), 64 & n[0] && (i.visible = t[6]), 33554432 & n[0] && (i.opacity = t[25]), 128 & n[0] && (i.scale = t[7]), 4 & n[0] && (i.editor = t[2]), 1 & n[0] && (i.isEditor = t[0]), 2 & n[0] && (i.isEditorActive = t[1]), 536870912 & n[0] && (i.preventKeyHandlers = t[29]), 8 & n[0] && (i.editComponent = t[3]), 256 & n[0] && (i.containerWidth = t[8]), 512 & n[0] && (i.updateDraggable = t[9]), 1024 & n[0] && (i.finalizeDraggable = t[10]), 1 & n[1] && (i.extraClasses = t[31]), 67108864 & n[0] && (i.darkMode = t[26]), 1509162610 & n[0] | 4098 & n[1] && (i.$$scope = { dirty: n, ctx: t }), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function XL(t, e, n) { let i, r, o, a, s, l, { isEditor: c = !1 } = e,
            { isEditorActive: u = !1 } = e,
            { editor: f } = e,
            { editComponent: d } = e,
            { id: h } = e,
            { color: g } = e,
            { visible: p = !0 } = e,
            { scale: v } = e,
            { containerWidth: m } = e,
            { updateDraggable: y } = e,
            { finalizeDraggable: x } = e,
            { text: b = "" } = e,
            { iconText: $ = "●" } = e,
            { iconNamedSVG: w = null } = e,
            { iconSVG: _ = null } = e,
            { iconColor: k } = e,
            { iconSecondaryColor: M } = e,
            { iconSize: S = 14 } = e,
            { align: A = "left" } = e,
            { valign: D = "top" } = e,
            { x: C = 0 } = e,
            { y: E = 0 } = e,
            { offsetX: O = 20 } = e,
            { offsetY: T = 0 } = e,
            { fontSize: P } = e,
            { outline: B } = e,
            { infoBox: L } = e,
            { textWidth: z } = e,
            { letterSpacing: Y } = e,
            { opacity: F } = e,
            { darkMode: W } = e,
            R = 0,
            N = 0,
            H = k || (W ? "var(--bg)" : "var(--text)"),
            j = M || (W ? "var(--text)" : "var(--bg)"),
            I = !1; return t.$$set = t => { "isEditor" in t && n(0, c = t.isEditor), "isEditorActive" in t && n(1, u = t.isEditorActive), "editor" in t && n(2, f = t.editor), "editComponent" in t && n(3, d = t.editComponent), "id" in t && n(4, h = t.id), "color" in t && n(5, g = t.color), "visible" in t && n(6, p = t.visible), "scale" in t && n(7, v = t.scale), "containerWidth" in t && n(8, m = t.containerWidth), "updateDraggable" in t && n(9, y = t.updateDraggable), "finalizeDraggable" in t && n(10, x = t.finalizeDraggable), "text" in t && n(11, b = t.text), "iconText" in t && n(12, $ = t.iconText), "iconNamedSVG" in t && n(13, w = t.iconNamedSVG), "iconSVG" in t && n(14, _ = t.iconSVG), "iconColor" in t && n(36, k = t.iconColor), "iconSecondaryColor" in t && n(37, M = t.iconSecondaryColor), "iconSize" in t && n(15, S = t.iconSize), "align" in t && n(16, A = t.align), "valign" in t && n(17, D = t.valign), "x" in t && n(18, C = t.x), "y" in t && n(19, E = t.y), "offsetX" in t && n(20, O = t.offsetX), "offsetY" in t && n(21, T = t.offsetY), "fontSize" in t && n(22, P = t.fontSize), "outline" in t && n(38, B = t.outline), "infoBox" in t && n(39, L = t.infoBox), "textWidth" in t && n(23, z = t.textWidth), "letterSpacing" in t && n(24, Y = t.letterSpacing), "opacity" in t && n(25, F = t.opacity), "darkMode" in t && n(26, W = t.darkMode) }, t.$$.update = () => { if (787349 & t.$$.dirty[0] && n(32, i = LB(h, C, E, v, m, y, c, f)), 256 & t.$$.dirty[0] && n(42, r = m < 500 ? "mobile" : ""), 128 & t.$$.dirty[1] && n(41, o = B ? "outline" : ""), 256 & t.$$.dirty[1] && n(40, a = L ? "infoBox" : ""), 3584 & t.$$.dirty[1] && n(31, s = `${r} ${o} ${a}`), 32768 & t.$$.dirty[0] && n(30, l = `\n    width: ${S}px;\n    height: ${S}px;\n    margin-left: ${-1*S/2}px;\n    margin-top: ${-1*S/2}px;\n  `), 7569408 & t.$$.dirty[0]) { const { alignOffsetX: t, alignOffsetY: e } = function(t, e, n, i) { let r = 0,
                        o = 0; return "left" === t && (r = n / 2 + 3), "right" === t && (r = -1 * (n / 2 + 3)), "top" === e && (o = -1), "bottom" === e && (o = 2), "center" === t && ("top" === e && (o = n / 2 + 5), "bottom" === e && (o = -1 * (n / 2 + 5))), { alignOffsetX: r, alignOffsetY: o } }(A, D, S);
                n(27, R = O + t), n(28, N = T + e) } }, [c, u, f, d, h, g, p, v, m, y, x, b, $, w, _, S, A, D, C, E, O, T, P, z, Y, F, W, R, N, I, l, s, i, H, j, function(t) { n(29, I = t) }, k, M, B, L, a, o, r] } class qL extends _S { constructor(t) { super(), wS(this, t, XL, UL, pM, { isEditor: 0, isEditorActive: 1, editor: 2, editComponent: 3, id: 4, color: 5, visible: 6, scale: 7, containerWidth: 8, updateDraggable: 9, finalizeDraggable: 10, text: 11, iconText: 12, iconNamedSVG: 13, iconSVG: 14, iconColor: 36, iconSecondaryColor: 37, iconSize: 15, align: 16, valign: 17, x: 18, y: 19, offsetX: 20, offsetY: 21, fontSize: 22, outline: 38, infoBox: 39, textWidth: 23, letterSpacing: 24, opacity: 25, darkMode: 26 }, null, [-1, -1]) } get isEditor() { return this.$$.ctx[0] } set isEditor(t) { this.$$set({ isEditor: t }), lS() } get isEditorActive() { return this.$$.ctx[1] } set isEditorActive(t) { this.$$set({ isEditorActive: t }), lS() } get editor() { return this.$$.ctx[2] } set editor(t) { this.$$set({ editor: t }), lS() } get editComponent() { return this.$$.ctx[3] } set editComponent(t) { this.$$set({ editComponent: t }), lS() } get id() { return this.$$.ctx[4] } set id(t) { this.$$set({ id: t }), lS() } get color() { return this.$$.ctx[5] } set color(t) { this.$$set({ color: t }), lS() } get visible() { return this.$$.ctx[6] } set visible(t) { this.$$set({ visible: t }), lS() } get scale() { return this.$$.ctx[7] } set scale(t) { this.$$set({ scale: t }), lS() } get containerWidth() { return this.$$.ctx[8] } set containerWidth(t) { this.$$set({ containerWidth: t }), lS() } get updateDraggable() { return this.$$.ctx[9] } set updateDraggable(t) { this.$$set({ updateDraggable: t }), lS() } get finalizeDraggable() { return this.$$.ctx[10] } set finalizeDraggable(t) { this.$$set({ finalizeDraggable: t }), lS() } get text() { return this.$$.ctx[11] } set text(t) { this.$$set({ text: t }), lS() } get iconText() { return this.$$.ctx[12] } set iconText(t) { this.$$set({ iconText: t }), lS() } get iconNamedSVG() { return this.$$.ctx[13] } set iconNamedSVG(t) { this.$$set({ iconNamedSVG: t }), lS() } get iconSVG() { return this.$$.ctx[14] } set iconSVG(t) { this.$$set({ iconSVG: t }), lS() } get iconColor() { return this.$$.ctx[36] } set iconColor(t) { this.$$set({ iconColor: t }), lS() } get iconSecondaryColor() { return this.$$.ctx[37] } set iconSecondaryColor(t) { this.$$set({ iconSecondaryColor: t }), lS() } get iconSize() { return this.$$.ctx[15] } set iconSize(t) { this.$$set({ iconSize: t }), lS() } get align() { return this.$$.ctx[16] } set align(t) { this.$$set({ align: t }), lS() } get valign() { return this.$$.ctx[17] } set valign(t) { this.$$set({ valign: t }), lS() } get x() { return this.$$.ctx[18] } set x(t) { this.$$set({ x: t }), lS() } get y() { return this.$$.ctx[19] } set y(t) { this.$$set({ y: t }), lS() } get offsetX() { return this.$$.ctx[20] } set offsetX(t) { this.$$set({ offsetX: t }), lS() } get offsetY() { return this.$$.ctx[21] } set offsetY(t) { this.$$set({ offsetY: t }), lS() } get fontSize() { return this.$$.ctx[22] } set fontSize(t) { this.$$set({ fontSize: t }), lS() } get outline() { return this.$$.ctx[38] } set outline(t) { this.$$set({ outline: t }), lS() } get infoBox() { return this.$$.ctx[39] } set infoBox(t) { this.$$set({ infoBox: t }), lS() } get textWidth() { return this.$$.ctx[23] } set textWidth(t) { this.$$set({ textWidth: t }), lS() } get letterSpacing() { return this.$$.ctx[24] } set letterSpacing(t) { this.$$set({ letterSpacing: t }), lS() } get opacity() { return this.$$.ctx[25] } set opacity(t) { this.$$set({ opacity: t }), lS() } get darkMode() { return this.$$.ctx[26] } set darkMode(t) { this.$$set({ darkMode: t }), lS() } }

    function GL(t) { let e, n, i; const r = [{ editor: t[1] }, { isEditor: t[0] }, { isEditorActive: t[12] }, { editComponent: t[13] }, { darkMode: t[6] }, { id: t[11] }, { updateDraggable: t[14] }, { finalizeDraggable: t[2] }, { removeDraggable: t[3] }, { scale: t[4] }, { containerWidth: t[5] }, t[7], { x: t[8] }, { y: t[9] }]; var o = t[10];

        function a(t) { let e = {}; for (let t = 0; t < r.length; t += 1) e = uM(e, r[t]); return { props: e } } return o && (e = XM(o, a())), { c() { e && yS(e.$$.fragment), n = BM() }, m(t, r) { e && xS(e, t, r), AM(t, n, r), i = !0 }, p(t, [i]) { const s = 31743 & i ? function(t, e) { const n = {},
                        i = {},
                        r = { $$scope: 1 }; let o = t.length; for (; o--;) { const a = t[o],
                            s = e[o]; if (s) { for (const t in a) t in s || (i[t] = 1); for (const t in s) r[t] || (n[t] = s[t], r[t] = 1);
                            t[o] = s } else
                            for (const t in a) r[t] = 1 } for (const t in i) t in n || (n[t] = void 0); return n }(r, [2 & i && { editor: t[1] }, 1 & i && { isEditor: t[0] }, 4096 & i && { isEditorActive: t[12] }, 8192 & i && { editComponent: t[13] }, 64 & i && { darkMode: t[6] }, 2048 & i && { id: t[11] }, 16384 & i && { updateDraggable: t[14] }, 4 & i && { finalizeDraggable: t[2] }, 8 & i && { removeDraggable: t[3] }, 16 & i && { scale: t[4] }, 32 & i && { containerWidth: t[5] }, 128 & i && (l = t[7], "object" == typeof l && null !== l ? l : {}), 256 & i && { x: t[8] }, 512 & i && { y: t[9] }]) : {}; var l; if (o !== (o = t[10])) { if (e) { dS(); const t = e;
                        pS(t.$$.fragment, 1, 0, (() => { bS(t, 1) })), hS() } o ? (e = XM(o, a()), yS(e.$$.fragment), gS(e.$$.fragment, 1), xS(e, n.parentNode, n)) : e = null } else o && e.$set(s) }, i(t) { i || (e && gS(e.$$.fragment, t), i = !0) }, o(t) { e && pS(e.$$.fragment, t), i = !1 }, d(t) { t && DM(n), e && bS(e, t) } } }

    function ZL(t, e, n) { let i, r, o, a, s, { isEditor: l } = e,
            { editor: c } = e,
            { draggable: u } = e,
            { updateDraggable: f } = e,
            { finalizeDraggable: d } = e,
            { removeDraggable: h } = e,
            { scale: g } = e,
            { breakpoint: p } = e,
            { containerWidth: v } = e,
            { darkMode: m } = e,
            y = !1; const x = { label: sL, line: gL, linebend: EL, arrow: _L, circle: zL, icon: qL }; return t.$$set = t => { "isEditor" in t && n(0, l = t.isEditor), "editor" in t && n(1, c = t.editor), "draggable" in t && n(15, u = t.draggable), "updateDraggable" in t && n(16, f = t.updateDraggable), "finalizeDraggable" in t && n(2, d = t.finalizeDraggable), "removeDraggable" in t && n(3, h = t.removeDraggable), "scale" in t && n(4, g = t.scale), "breakpoint" in t && n(17, p = t.breakpoint), "containerWidth" in t && n(5, v = t.containerWidth), "darkMode" in t && n(6, m = t.darkMode) }, t.$$.update = () => { if (32768 & t.$$.dirty && (n(11, s = u.id), n(10, a = x[u.type] || sL)), 164016 & t.$$.dirty) { p && u.breakpoints && u.breakpoints[p.name] ? n(7, o = Object.assign({}, u, u.breakpoints[p.name])) : n(7, o = u); const t = g(v, [o.x, o.y]);
                n(8, [i, r] = t, i, (n(9, r), n(17, p), n(15, u), n(4, g), n(5, v), n(7, o))) } }, [l, c, d, h, g, v, m, o, i, r, a, s, y, function(t, e) { if (o && !y) { const i = { id: o.id, x: o.x, y: o.y, visible: o.visible, text: o.text, align: o.align, valign: o.valign, color: o.color, outline: o.outline, infoBox: o.infoBox, textWidth: o.textWidth, letterSpacing: o.letterSpacing, offsetX: o.offsetX, offsetY: o.offsetY, opacity: o.opacity },
                    r = () => { n(12, y = !1) };
                n(12, y = !0); const a = !1 !== o.visible,
                    s = a && t.querySelector(".text") || t,
                    l = a && t.querySelector(".draw-region") || t,
                    u = t.getBoundingClientRect(),
                    d = s.getBoundingClientRect(),
                    g = l.getBoundingClientRect(),
                    p = c.domNode.getBoundingClientRect(),
                    v = { x: Math.min(d.x, u.x, g.x), y: Math.min(d.y, u.y, g.y), width: Math.max(d.width, u.width, g.width), height: Math.max(d.height, u.height, g.height) },
                    m = [v.x - p.x + v.width / 2 - 40, v.y - p.y - 12];
                m[1] < 30 && (m[1] = v.y - p.y + v.height + 50), m[0] < 30 && (m[0] = v.x - p.x + v.width + 50), e ? c.mountGenericEditor(e, i, f, h, r, m) : c.mountTextEditor(i, f, h, r, m), c.bindDocumentCloseHandler(t, r) } }, function(t, e) { y && c.updateFields(e), f(t, e) }, u, f, p] } class QL extends _S { constructor(t) { super(), wS(this, t, ZL, GL, pM, { isEditor: 0, editor: 1, draggable: 15, updateDraggable: 16, finalizeDraggable: 2, removeDraggable: 3, scale: 4, breakpoint: 17, containerWidth: 5, darkMode: 6 }) } get isEditor() { return this.$$.ctx[0] } set isEditor(t) { this.$$set({ isEditor: t }), lS() } get editor() { return this.$$.ctx[1] } set editor(t) { this.$$set({ editor: t }), lS() } get draggable() { return this.$$.ctx[15] } set draggable(t) { this.$$set({ draggable: t }), lS() } get updateDraggable() { return this.$$.ctx[16] } set updateDraggable(t) { this.$$set({ updateDraggable: t }), lS() } get finalizeDraggable() { return this.$$.ctx[2] } set finalizeDraggable(t) { this.$$set({ finalizeDraggable: t }), lS() } get removeDraggable() { return this.$$.ctx[3] } set removeDraggable(t) { this.$$set({ removeDraggable: t }), lS() } get scale() { return this.$$.ctx[4] } set scale(t) { this.$$set({ scale: t }), lS() } get breakpoint() { return this.$$.ctx[17] } set breakpoint(t) { this.$$set({ breakpoint: t }), lS() } get containerWidth() { return this.$$.ctx[5] } set containerWidth(t) { this.$$set({ containerWidth: t }), lS() } get darkMode() { return this.$$.ctx[6] } set darkMode(t) { this.$$set({ darkMode: t }), lS() } }

    function KL(t) { SM(t, "svelte-5gc1hn", ".group.svelte-5gc1hn{box-shadow:1px 0 0 grey}") }

    function JL(t, e, n) { const i = t.slice(); return i[12] = e[n], i }

    function tz(t, e) { let n, i, r; return i = new QL({ props: { draggable: e[12], isEditor: e[0], editor: e[1], options: e[5], onChange: e[6], addDraggable: e[9], updateDraggable: e[7], removeDraggable: e[8], containerWidth: e[2], scale: e[3], breakpoint: e[10], darkMode: e[11] } }), { key: t, first: null, c() { n = BM(), yS(i.$$.fragment), this.first = n }, m(t, e) { AM(t, n, e), xS(i, t, e), r = !0 }, p(t, n) { e = t; const r = {};
                16 & n && (r.draggable = e[12]), 1 & n && (r.isEditor = e[0]), 2 & n && (r.editor = e[1]), 32 & n && (r.options = e[5]), 64 & n && (r.onChange = e[6]), 512 & n && (r.addDraggable = e[9]), 128 & n && (r.updateDraggable = e[7]), 256 & n && (r.removeDraggable = e[8]), 4 & n && (r.containerWidth = e[2]), 8 & n && (r.scale = e[3]), 1024 & n && (r.breakpoint = e[10]), 2048 & n && (r.darkMode = e[11]), i.$set(r) }, i(t) { r || (gS(i.$$.fragment, t), r = !0) }, o(t) { pS(i.$$.fragment, t), r = !1 }, d(t) { t && DM(n), bS(i, t) } } }

    function ez(t) { let e, n, i = [],
            r = new Map,
            o = t[4]; const a = t => t[12].id; for (let e = 0; e < o.length; e += 1) { let n = JL(t, o, e),
                s = a(n);
            r.set(s, i[e] = tz(s, n)) } return { c() { e = EM("div"); for (let t = 0; t < i.length; t += 1) i[t].c();
                zM(e, "class", "group svelte-5gc1hn") }, m(t, r) { AM(t, e, r); for (let t = 0; t < i.length; t += 1) i[t].m(e, null);
                n = !0 }, p(t, [n]) { 4095 & n && (o = t[4], dS(), i = mS(i, n, a, 1, t, o, r, e, vS, tz, null, JL), hS()) }, i(t) { if (!n) { for (let t = 0; t < o.length; t += 1) gS(i[t]);
                    n = !0 } }, o(t) { for (let t = 0; t < i.length; t += 1) pS(i[t]);
                n = !1 }, d(t) { t && DM(e); for (let t = 0; t < i.length; t += 1) i[t].d() } } }

    function nz(t, e, n) { let { isEditor: i = !1 } = e, { editor: r } = e, { containerWidth: o = 900 } = e, { scale: a } = e, { items: s } = e, { options: l } = e, { onChange: c } = e, { updateDraggable: u } = e, { removeDraggable: f } = e, { addDraggable: d } = e, { breakpoint: h } = e, { darkMode: g } = e; return t.$$set = t => { "isEditor" in t && n(0, i = t.isEditor), "editor" in t && n(1, r = t.editor), "containerWidth" in t && n(2, o = t.containerWidth), "scale" in t && n(3, a = t.scale), "items" in t && n(4, s = t.items), "options" in t && n(5, l = t.options), "onChange" in t && n(6, c = t.onChange), "updateDraggable" in t && n(7, u = t.updateDraggable), "removeDraggable" in t && n(8, f = t.removeDraggable), "addDraggable" in t && n(9, d = t.addDraggable), "breakpoint" in t && n(10, h = t.breakpoint), "darkMode" in t && n(11, g = t.darkMode) }, [i, r, o, a, s, l, c, u, f, d, h, g] } class iz extends _S { constructor(t) { super(), wS(this, t, nz, ez, pM, { isEditor: 0, editor: 1, containerWidth: 2, scale: 3, items: 4, options: 5, onChange: 6, updateDraggable: 7, removeDraggable: 8, addDraggable: 9, breakpoint: 10, darkMode: 11 }, KL) } get isEditor() { return this.$$.ctx[0] } set isEditor(t) { this.$$set({ isEditor: t }), lS() } get editor() { return this.$$.ctx[1] } set editor(t) { this.$$set({ editor: t }), lS() } get containerWidth() { return this.$$.ctx[2] } set containerWidth(t) { this.$$set({ containerWidth: t }), lS() } get scale() { return this.$$.ctx[3] } set scale(t) { this.$$set({ scale: t }), lS() } get items() { return this.$$.ctx[4] } set items(t) { this.$$set({ items: t }), lS() } get options() { return this.$$.ctx[5] } set options(t) { this.$$set({ options: t }), lS() } get onChange() { return this.$$.ctx[6] } set onChange(t) { this.$$set({ onChange: t }), lS() } get updateDraggable() { return this.$$.ctx[7] } set updateDraggable(t) { this.$$set({ updateDraggable: t }), lS() } get removeDraggable() { return this.$$.ctx[8] } set removeDraggable(t) { this.$$set({ removeDraggable: t }), lS() } get addDraggable() { return this.$$.ctx[9] } set addDraggable(t) { this.$$set({ addDraggable: t }), lS() } get breakpoint() { return this.$$.ctx[10] } set breakpoint(t) { this.$$set({ breakpoint: t }), lS() } get darkMode() { return this.$$.ctx[11] } set darkMode(t) { this.$$set({ darkMode: t }), lS() } }

    function rz(t) { SM(t, "svelte-16oe0bk", '.draggable{z-index:1;position:absolute;color:black;font-family:"BWHaasDingbat", "BWHaasText", "Helvetica Neue", Helvetica,\n      Arial, sans-serif;font-size:14px;line-height:1.2;pointer-events:none}.draggable.dark{color:white}.draggable.editor{pointer-events:all}.draggable.editing{z-index:100}.draggable a{color:black}.draggable.dark a{color:white}.draggable strong{text-transform:uppercase;font-weight:800;letter-spacing:1.5px}.draggable em{color:#777777;font-size:12px}.draggable small{font-size:10px}.draggable h1,.draggable h2,.draggable h3,.draggable h4,.draggable h5,.draggable h6{margin:0;color:inherit}.draggable h1{display:inline-block;font-size:32px}.draggable h2{display:inline-block;font-size:26px;line-height:25px}.draggable h3{display:inline-block;font-size:22px;font-size:22px}.draggable h4{display:inline-block;font-size:18px}.draggable h5{display:inline-block;font-size:16px}.draggable h6{display:inline-block;font-size:16px;font-weight:normal}.draggable table{width:100%;border:none;font-size:14px;border-collapse:collapse}.draggable table.noline{border-collapse:unset}.draggable tr{border:solid;border-width:1px 0}.draggable tr:first-child{border-top:none}.draggable tr:last-child{border-bottom:none}.draggable table td{border:none;padding:4px 0}.draggable table.noline td{padding:1px 0}.draggable td:last-child{text-align:right}.draggable table.lastValueBold td:last-child{font-weight:bold}.draggable.outline{outline-style:none}.draggable.outline .text{text-shadow:-1px -1px 1px var(--bg),-1px -0.5px 1px var(--bg),-1px 0px 1px var(--bg),-1px 0.5px 1px var(--bg),-1px 1px 1px var(--bg),-0.5px -1px 1px var(--bg),-0.5px -0.5px 1px var(--bg),-0.5px 0px 1px var(--bg),-0.5px 0.5px 1px var(--bg),-0.5px 1px 1px var(--bg),0px -0.5px 1px var(--bg),0px -0.5px 1px var(--bg),0px 1px 1px var(--bg),0px 1px 1px var(--bg),0.5px -1px 1px var(--bg),0.5px -0.5px 1px var(--bg),0.5px 0px 1px var(--bg),0.5px 0.5px 1px var(--bg),0.5px 1px 1px var(--bg),1px -1px 1px var(--bg),1px -0.5px 1px var(--bg),1px 0px 1px var(--bg),1px 0.5px 1px var(--bg),1px 1px 1px var(--bg)}.draggable.outline.dark .text{text-shadow:-1px -1px 1px var(--text),-1px -0.5px 1px var(--text),-1px 0px 1px var(--text),-1px 0.5px 1px var(--text),-1px 1px 1px var(--text),-0.5px -1px 1px var(--text),-0.5px -0.5px 1px var(--text),-0.5px 0px 1px var(--text),-0.5px 0.5px 1px var(--text),-0.5px 1px 1px var(--text),0px -0.5px 1px var(--text),0px -0.5px 1px var(--text),0px 1px 1px var(--text),0px 1px 1px var(--text),0.5px -1px 1px var(--text),0.5px -0.5px 1px var(--text),0.5px 0px 1px var(--text),0.5px 0.5px 1px var(--text),0.5px 1px 1px var(--text),1px -1px 1px var(--text),1px -0.5px 1px var(--text),1px 0px 1px var(--text),1px 0.5px 1px var(--text),1px 1px 1px var(--text);color:white}.draggable.outline .text.icon{text-shadow:none}.draggable.infoBox .text{background:white;padding:7px;border:1px solid black}.draggable.infoBox.dark .text{background:black;border-color:white}.draggable svg.line path, .draggable svg.arrow path, .draggable #arrowhead{stroke:black;fill:none}.draggable.dark svg.line path, .draggable.dark svg.arrow path, .draggable.dark #arrowhead{stroke:white}.draggable button, .draggable-editor button{display:inline-block;border-color:black;cursor:pointer;background:white}.draggable.dark button, .draggable-editor.dark button{border-color:white;background:black}.draggable button:hover, .draggable-editor button{background:black;color:white}.draggable.dark button:hover, .draggable-editor.dark button{background:white;color:black}.draggable.hidden svg, .draggable.hidden div{display:none}.draggable div, .draggable button, .draggable textarea{font-family:"BWHaasDingbat", "BWHaasText", "Helvetica Neue", Helvetica,\n      Arial, sans-serif}.draggable.editor{cursor:move}.draggable.editor.editorActive{cursor:default}.draggable.editor.hoverActive .text, .draggable.editor.hoverActive svg{border:1px dashed #3a73ff}.draggable.editor.hidden{min-width:12px;min-height:12px;background:rgba(255, 183, 0, 0.18);border:1px solid #ffb700}.draggable.editor.hidden:hover{background:#ffb700}.draggable.mobile{font-size:12px}.draggable.mobile em{font-size:14px}.draggable.mobile small{font-size:11px}.draggable.mobile h1{font-size:26px}.draggable.mobile h2{font-size:22px}.draggable.mobile h3{font-size:18px}.draggable.mobile h4{font-size:16px}.draggable.mobile h5{font-size:14px}.draggable.mobile h6{font-size:14px}.draggable.mobile table{font-size:12px}.svg-icon svg{width:100%;height:100%;border:1px solid transparent}') }

    function oz(t, e, n) { const i = t.slice(); return i[18] = e[n], i }

    function az(t) { let e, n; return e = new QL({ props: { draggable: t[18], isEditor: t[1], editor: t[2], updateDraggable: t[8], finalizeDraggable: t[9], removeDraggable: t[6], containerWidth: t[3], scale: t[4], breakpoint: t[7], darkMode: t[5] } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                1 & n && (i.draggable = t[18]), 2 & n && (i.isEditor = t[1]), 4 & n && (i.editor = t[2]), 8 & n && (i.containerWidth = t[3]), 16 & n && (i.scale = t[4]), 128 & n && (i.breakpoint = t[7]), 32 & n && (i.darkMode = t[5]), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function sz(t) { let e, n; return e = new iz({ props: { draggable: t[18], isEditor: t[1], editor: t[2], updateDraggable: t[8], finalizeDraggable: t[9], removeDraggable: t[6], containerWidth: t[3], scale: t[4], breakpoint: t[7], darkMode: t[5] } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                1 & n && (i.draggable = t[18]), 2 & n && (i.isEditor = t[1]), 4 & n && (i.editor = t[2]), 8 & n && (i.containerWidth = t[3]), 16 & n && (i.scale = t[4]), 128 & n && (i.breakpoint = t[7]), 32 & n && (i.darkMode = t[5]), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function lz(t, e) { let n, i, r, o, a; const s = [sz, az],
            l = [];

        function c(t, e) { return "group" === t[18].type ? 0 : 1 } return i = c(e), r = l[i] = s[i](e), { key: t, first: null, c() { n = BM(), r.c(), o = BM(), this.first = n }, m(t, e) { AM(t, n, e), l[i].m(t, e), AM(t, o, e), a = !0 }, p(t, n) { let a = i;
                i = c(e = t), i === a ? l[i].p(e, n) : (dS(), pS(l[a], 1, 1, (() => { l[a] = null })), hS(), r = l[i], r ? r.p(e, n) : (r = l[i] = s[i](e), r.c()), gS(r, 1), r.m(o.parentNode, o)) }, i(t) { a || (gS(r), a = !0) }, o(t) { pS(r), a = !1 }, d(t) { t && DM(n), l[i].d(t), t && DM(o) } } }

    function cz(t) { let e, n, i = [],
            r = new Map,
            o = t[0]; const a = t => t[18].id; for (let e = 0; e < o.length; e += 1) { let n = oz(t, o, e),
                s = a(n);
            r.set(s, i[e] = lz(s, n)) } return { c() { for (let t = 0; t < i.length; t += 1) i[t].c();
                e = BM() }, m(t, r) { for (let e = 0; e < i.length; e += 1) i[e].m(t, r);
                AM(t, e, r), n = !0 }, p(t, [n]) { 1023 & n && (o = t[0], dS(), i = mS(i, n, a, 1, t, o, r, e.parentNode, vS, lz, e, oz), hS()) }, i(t) { if (!n) { for (let t = 0; t < o.length; t += 1) gS(i[t]);
                    n = !0 } }, o(t) { for (let t = 0; t < i.length; t += 1) pS(i[t]);
                n = !1 }, d(t) { for (let e = 0; e < i.length; e += 1) i[e].d(t);
                t && DM(e) } } }

    function uz(t, e, n) { let i, { isEditor: r = !1 } = e,
            { editor: o } = e,
            { containerWidth: a = 900 } = e,
            { scale: s } = e,
            { items: l } = e,
            { options: c } = e,
            { onChange: u } = e,
            { onChangeComplete: f } = e,
            { darkMode: d } = e;

        function h(t, e) { const r = l.map((t => t.id)).indexOf(t);
            null != r && l[r] && (i ? (l[r].breakpoints || n(0, l[r].breakpoints = {}, l), l[r].breakpoints[i.name] || n(0, l[r].breakpoints[i.name] = {}, l), Object.keys(e).forEach((t => { n(0, l[r].breakpoints[i.name][t] = e[t], l) }))) : Object.keys(e).forEach((t => { n(0, l[r][t] = e[t], l) }))), u({ id: t, props: e }) } return function(t, e) { GM().$$.context.set(t, e) }("isEditor", r), t.$$set = t => { "isEditor" in t && n(1, r = t.isEditor), "editor" in t && n(2, o = t.editor), "containerWidth" in t && n(3, a = t.containerWidth), "scale" in t && n(4, s = t.scale), "items" in t && n(0, l = t.items), "options" in t && n(10, c = t.options), "onChange" in t && n(11, u = t.onChange), "onChangeComplete" in t && n(12, f = t.onChangeComplete), "darkMode" in t && n(5, d = t.darkMode) }, t.$$.update = () => { 1032 & t.$$.dirty && n(7, i = PB(a, c.breakpoints)) }, [l, r, o, a, s, d, function(t) { const e = l.filter((e => e.id !== t));
            u({ remove: t }), n(0, l = []), setTimeout((() => { n(0, l = e) }), 1) }, i, h, function(t, e) { setTimeout((() => { f({ id: t, props: e }) }), 1) }, c, u, f, function(t) { const e = l.map((t => t.id)).indexOf(t);
            null != e && l[e] && n(0, i ? l[e].breakpoints = { id: t } : l[e] = { id: t }, l) }, function(t) { n(0, l = l.concat(t)), u({ add: t }) }, function(t) { Object.keys(t).forEach((e => { n(10, c[e] = t[e], c) })), u({ options: t }) }, function(t, e, n) { h(t, { x: e, y: n }) }, function(t, e) { h(t, e) }] } class fz extends _S { constructor(t) { super(), wS(this, t, uz, cz, pM, { isEditor: 1, editor: 2, containerWidth: 3, scale: 4, items: 0, options: 10, onChange: 11, onChangeComplete: 12, darkMode: 5, emptyDraggable: 13, removeDraggable: 6, addDraggable: 14, updateOptions: 15, moveDraggable: 16, modifyDraggable: 17 }, rz) } get isEditor() { return this.$$.ctx[1] } set isEditor(t) { this.$$set({ isEditor: t }), lS() } get editor() { return this.$$.ctx[2] } set editor(t) { this.$$set({ editor: t }), lS() } get containerWidth() { return this.$$.ctx[3] } set containerWidth(t) { this.$$set({ containerWidth: t }), lS() } get scale() { return this.$$.ctx[4] } set scale(t) { this.$$set({ scale: t }), lS() } get items() { return this.$$.ctx[0] } set items(t) { this.$$set({ items: t }), lS() } get options() { return this.$$.ctx[10] } set options(t) { this.$$set({ options: t }), lS() } get onChange() { return this.$$.ctx[11] } set onChange(t) { this.$$set({ onChange: t }), lS() } get onChangeComplete() { return this.$$.ctx[12] } set onChangeComplete(t) { this.$$set({ onChangeComplete: t }), lS() } get darkMode() { return this.$$.ctx[5] } set darkMode(t) { this.$$set({ darkMode: t }), lS() } get emptyDraggable() { return this.$$.ctx[13] } get removeDraggable() { return this.$$.ctx[6] } get addDraggable() { return this.$$.ctx[14] } get updateOptions() { return this.$$.ctx[15] } get moveDraggable() { return this.$$.ctx[16] } get modifyDraggable() { return this.$$.ctx[17] } }

    function dz(t) { SM(t, "svelte-12ut3fi", ".button-menu.svelte-12ut3fi.svelte-12ut3fi{padding-top:8px;display:inline-block;min-height:26px}.button-group.svelte-12ut3fi.svelte-12ut3fi{display:inline-block}button.svelte-12ut3fi.svelte-12ut3fi{border:solid 2px transparent;cursor:pointer}button.svelte-12ut3fi.svelte-12ut3fi:hover,button.active.svelte-12ut3fi.svelte-12ut3fi{border-color:#3a73ff}.button-menu.icon.svelte-12ut3fi button.svelte-12ut3fi{padding:0 2px;margin:0 1px;width:23px;height:20px}.button-menu.icon.svelte-12ut3fi .button-group.svelte-12ut3fi{transform:translateY(5px)}.button-menu.color.svelte-12ut3fi button.svelte-12ut3fi{display:inline-block;width:10px;height:15px;margin:0 1px;transform:translateY(1px)}.button-menu.icon-size.svelte-12ut3fi button.svelte-12ut3fi{display:inline-block;color:black}.button-menu.icon-size.svelte-12ut3fi button.svelte-12ut3fi:hover,.button-menu.icon-size.svelte-12ut3fi button.active.svelte-12ut3fi{border-color:#3a73ff}") }

    function hz(t, e, n) { const i = t.slice(); return i[17] = e[n][0], i[5] = e[n][1], i }

    function gz(t, e, n) { const i = t.slice(); return i[14] = e[n], i }

    function pz(t, e, n) { const i = t.slice(); return i[11] = e[n], i }

    function vz(t) { let e, n = t[4],
            i = []; for (let e = 0; e < n.length; e += 1) i[e] = xz(hz(t, n, e)); return { c() { for (let t = 0; t < i.length; t += 1) i[t].c();
                e = BM() }, m(t, n) { for (let e = 0; e < i.length; e += 1) i[e].m(t, n);
                AM(t, e, n) }, p(t, r) { if (83 & r) { let o; for (n = t[4], o = 0; o < n.length; o += 1) { const a = hz(t, n, o);
                        i[o] ? i[o].p(a, r) : (i[o] = xz(a), i[o].c(), i[o].m(e.parentNode, e)) } for (; o < i.length; o += 1) i[o].d(1);
                    i.length = n.length } }, d(t) { CM(i, t), t && DM(e) } } }

    function mz(t) { let e, n = t[4],
            i = []; for (let e = 0; e < n.length; e += 1) i[e] = bz(gz(t, n, e)); return { c() { for (let t = 0; t < i.length; t += 1) i[t].c();
                e = BM() }, m(t, n) { for (let e = 0; e < i.length; e += 1) i[e].m(t, n);
                AM(t, e, n) }, p(t, r) { if (91 & r) { let o; for (n = t[4], o = 0; o < n.length; o += 1) { const a = gz(t, n, o);
                        i[o] ? i[o].p(a, r) : (i[o] = bz(a), i[o].c(), i[o].m(e.parentNode, e)) } for (; o < i.length; o += 1) i[o].d(1);
                    i.length = n.length } }, d(t) { CM(i, t), t && DM(e) } } }

    function yz(t) { let e, n = t[4],
            i = []; for (let e = 0; e < n.length; e += 1) i[e] = $z(pz(t, n, e)); return { c() { for (let t = 0; t < i.length; t += 1) i[t].c();
                e = BM() }, m(t, n) { for (let e = 0; e < i.length; e += 1) i[e].m(t, n);
                AM(t, e, n) }, p(t, r) { if (83 & r) { let o; for (n = t[4], o = 0; o < n.length; o += 1) { const a = pz(t, n, o);
                        i[o] ? i[o].p(a, r) : (i[o] = $z(a), i[o].c(), i[o].m(e.parentNode, e)) } for (; o < i.length; o += 1) i[o].d(1);
                    i.length = n.length } }, d(t) { CM(i, t), t && DM(e) } } }

    function xz(t) { let e, n, i, r, o, a, s = t[5] + "";

        function l() { return t[10](t[17]) } return { c() { e = EM("button"), n = new UM(!1), i = PM(), n.a = i, zM(e, "class", r = t[1] + " " + (t[0] === t[17] ? "active" : "") + " svelte-12ut3fi") }, m(t, r) { AM(t, e, r), n.m(s, e), MM(e, i), o || (a = LM(e, "click", l), o = !0) }, p(i, o) { t = i, 16 & o && s !== (s = t[5] + "") && n.p(s), 19 & o && r !== (r = t[1] + " " + (t[0] === t[17] ? "active" : "") + " svelte-12ut3fi") && zM(e, "class", r) }, d(t) { t && DM(e), o = !1, a() } } }

    function bz(t) { let e, n, i, r, o;

        function a() { return t[9](t[14]) } return { c() { e = EM("button"), n = TM(t[3]), zM(e, "class", i = t[1] + " " + (t[0] === t[14] ? "active" : "") + " svelte-12ut3fi"), RM(e, "font-size", t[14] + "px") }, m(t, i) { AM(t, e, i), MM(e, n), r || (o = LM(e, "click", a), r = !0) }, p(r, o) { t = r, 8 & o && FM(n, t[3]), 19 & o && i !== (i = t[1] + " " + (t[0] === t[14] ? "active" : "") + " svelte-12ut3fi") && zM(e, "class", i), 16 & o && RM(e, "font-size", t[14] + "px") }, d(t) { t && DM(e), r = !1, o() } } }

    function $z(t) { let e, n, i, r;

        function o() { return t[8](t[11]) } return { c() { e = EM("button"), zM(e, "class", n = t[1] + " " + (t[0] === t[11] ? "active" : "") + " svelte-12ut3fi"), RM(e, "background-color", t[11]) }, m(t, n) { AM(t, e, n), i || (r = LM(e, "click", o), i = !0) }, p(i, r) { t = i, 19 & r && n !== (n = t[1] + " " + (t[0] === t[11] ? "active" : "") + " svelte-12ut3fi") && zM(e, "class", n), 16 & r && RM(e, "background-color", t[11]) }, d(t) { t && DM(e), i = !1, r() } } }

    function wz(t) { let e, n, i, r, o;

        function a(t, e) { return "color" === t[2] ? yz : "icon-size" === t[2] ? mz : vz } let s = a(t),
            l = s(t); return { c() { e = EM("div"), n = TM(t[5]), i = PM(), r = EM("div"), l.c(), zM(r, "class", "button-group svelte-12ut3fi"), zM(e, "class", o = "button-menu " + t[2] + " svelte-12ut3fi") }, m(t, o) { AM(t, e, o), MM(e, n), MM(e, i), MM(e, r), l.m(r, null) }, p(t, [i]) { 32 & i && FM(n, t[5]), s === (s = a(t)) && l ? l.p(t, i) : (l.d(1), l = s(t), l && (l.c(), l.m(r, null))), 4 & i && o !== (o = "button-menu " + t[2] + " svelte-12ut3fi") && zM(e, "class", o) }, i: cM, o: cM, d(t) { t && DM(e), l.d() } } }

    function _z(t, e, n) { let { label: i = "" } = e, { extraClasses: r = "flat icon" } = e, { mode: o = "icon" } = e, { iconDisplay: a = "●" } = e, { buttons: s = [
                ["value", "label"]
            ] } = e, { onChange: l = (() => null) } = e, { selected: c } = e;

        function u(t) { n(0, c = t), l(t) } return t.$$set = t => { "label" in t && n(5, i = t.label), "extraClasses" in t && n(1, r = t.extraClasses), "mode" in t && n(2, o = t.mode), "iconDisplay" in t && n(3, a = t.iconDisplay), "buttons" in t && n(4, s = t.buttons), "onChange" in t && n(7, l = t.onChange), "selected" in t && n(0, c = t.selected) }, [c, r, o, a, s, i, u, l, t => u(t), t => u(t), t => u(t)] } class kz extends _S { constructor(t) { super(), wS(this, t, _z, wz, pM, { label: 5, extraClasses: 1, mode: 2, iconDisplay: 3, buttons: 4, onChange: 7, selected: 0 }, dz) } get label() { return this.$$.ctx[5] } set label(t) { this.$$set({ label: t }), lS() } get extraClasses() { return this.$$.ctx[1] } set extraClasses(t) { this.$$set({ extraClasses: t }), lS() } get mode() { return this.$$.ctx[2] } set mode(t) { this.$$set({ mode: t }), lS() } get iconDisplay() { return this.$$.ctx[3] } set iconDisplay(t) { this.$$set({ iconDisplay: t }), lS() } get buttons() { return this.$$.ctx[4] } set buttons(t) { this.$$set({ buttons: t }), lS() } get onChange() { return this.$$.ctx[7] } set onChange(t) { this.$$set({ onChange: t }), lS() } get selected() { return this.$$.ctx[0] } set selected(t) { this.$$set({ selected: t }), lS() } } const Mz = "#aaabac",
        Sz = [{ type: "text", outline: !0, align: "center", x: .5, y: .4, text: "New York City", color: "black", _info: "Default label", _warn: "Use for cities, features, or any single item. All other sizes are just to match the map.", _roles: ["text", "icon", "line", "linebend", "arrow"] }, { type: "text", outline: !0, align: "center", x: .5, y: .4, text: "Port Ridge<br><b>9.5M</b>", color: "black", _info: "Location and Number", _warn: "Convention is to display a number on second line in bold", _roles: ["text", "icon", "line", "linebend"], _replace: "Port Ridge" }, { type: "text", outline: !0, align: "center", x: .5, y: .4, text: "<b>$9.5M</b>", color: "black", _info: "Bold numerical label", _warn: "Only bold use to display numerical values", _roles: ["text", "icon", "line", "linebend"], _replace: "$9.5M" }, { type: "text", outline: !0, align: "center", x: .5, y: .4, text: "Large City", color: Mz, iconColor: Mz, _info: "De-emphasized label", _roles: ["text", "icon"] }],
        Az = { id: "labelCollectionMaps", type: "collection", title: "Basic Text Labels", description: "Single and multi line text variations for labeling large regions or providing additional context.", warning: "<b><i>Please adhere to the style guide:</i></b> <br>These templates have been chosen for specific cases to get a uniform look sitewide so please stick to the intended purpose and don't abuse.", variations: {}, previewItem: { type: "text", text: "Feature Label", outline: !0, align: "center", x: .5, y: .4 }, items: Sz },
        Dz = { id: "typeVariations", type: "collection", title: "Select a type template for your label", description: "Almost there. Set alignment and choose from the available type templates for the scenario that fits the data you are trying to display.", items: Sz.map((t => function(t = {}) { const e = ["x", "y", "align", "valign"],
                    n = {}; return Object.keys(t).filter((t => !e.includes(t))).forEach((e => { n[e] = t[e] })), n }(t))) }; var Cz = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-top" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="4" y1="4" x2="20" y2="4" />\n  <rect x="9" y="8" width="6" height="12" rx="2" />\n</svg>',
        Ez = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-bottom" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="4" y1="20" x2="20" y2="20" />\n  <rect x="9" y="4" width="6" height="12" rx="2" />\n</svg>'; const Oz = [
            ["left", '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="4" y1="6" x2="20" y2="6" />\n  <line x1="4" y1="12" x2="14" y2="12" />\n  <line x1="4" y1="18" x2="18" y2="18" />\n</svg>'],
            ["center", '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-center" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="4" y1="6" x2="20" y2="6" />\n  <line x1="8" y1="12" x2="16" y2="12" />\n  <line x1="6" y1="18" x2="18" y2="18" />\n</svg>'],
            ["right", '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="4" y1="6" x2="20" y2="6" />\n  <line x1="10" y1="12" x2="20" y2="12" />\n  <line x1="6" y1="18" x2="20" y2="18" />\n</svg>']
        ],
        Tz = [
            ["top", Cz],
            ["center", '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-align-center" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="12" y1="4" x2="12" y2="9" />\n  <line x1="12" y1="15" x2="12" y2="20" />\n  <rect x="6" y="9" width="12" height="6" rx="2" />\n</svg>'],
            ["bottom", Ez]
        ],
        Pz = [
            ["top", Cz],
            ["bottom", Ez]
        ];

    function Bz(t) { SM(t, "svelte-1gozp3", ".select.svelte-1gozp3.svelte-1gozp3{color:#3a73ff}.preview.svelte-1gozp3.svelte-1gozp3{position:relative;display:inline-block;width:120px;background:linear-gradient(to bottom, var(--bg) 0%,#c6d7ff 100%);margin:8px 6px;height:100px;cursor:pointer;overflow:hidden}.preview > .draggable{pointer-events:none}.warning.collection.svelte-1gozp3.svelte-1gozp3{background:#ffd382;padding:5px;max-width:340px;margin-left:35px}.warning.item.svelte-1gozp3.svelte-1gozp3{font-size:10px;font-weight:bold;font-style:italic;margin-top:-11px}.collection-row.svelte-1gozp3.svelte-1gozp3{display:flex;background:var(--bg);border-radius:10px;padding:0 0 0 10px;border:solid 1px transparent;cursor:pointer}h2.svelte-1gozp3.svelte-1gozp3,h3.svelte-1gozp3.svelte-1gozp3,p.svelte-1gozp3.svelte-1gozp3{display:block;font-size:1em;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0px;margin-inline-end:0px}h2.svelte-1gozp3.svelte-1gozp3{font-size:1.5em}h3.svelte-1gozp3.svelte-1gozp3{font-size:1.17em;font-weight:bold}.collection-row.svelte-1gozp3.svelte-1gozp3:hover{background:#fafbff;border:solid 1px #3a73ff}.collection-row.svelte-1gozp3 .info.svelte-1gozp3{width:60%}.collection-row.svelte-1gozp3 .preview.svelte-1gozp3{margin-left:30px}.action-icon.svelte-1gozp3.svelte-1gozp3,.variant-icon.svelte-1gozp3.svelte-1gozp3{position:absolute;right:40px;z-index:35;top:50%;transform:translateY(-50%) translateX(-50%);opacity:0;transition:all 0.13s ease-out}.action-icon svg, .variant-icon svg{width:40px;height:40px}.collection-row.svelte-1gozp3:hover .action-icon.svelte-1gozp3{right:25px;opacity:1.0}.collection-item.svelte-1gozp3.svelte-1gozp3{display:inline-block;width:140px;vertical-align:top}.collection-item.svelte-1gozp3 .preview.svelte-1gozp3{padding:0}.collection-item.svelte-1gozp3 .action-icon.svelte-1gozp3{right:auto;left:50%;top:60%}.collection-item.svelte-1gozp3:hover .action-icon.svelte-1gozp3{top:50%;opacity:1.0}.collection-item.svelte-1gozp3:hover .variant-icon.svelte-1gozp3{right:25px;opacity:1.0}.collection-item.svelte-1gozp3 .info.svelte-1gozp3{margin:-22px 8px 8px 8px}.roles.svelte-1gozp3.svelte-1gozp3{margin-top:-10px}.roles.svelte-1gozp3 span.svelte-1gozp3{background:#ffd382;padding:2px 6px;font-size:10px}.menu-footer.svelte-1gozp3.svelte-1gozp3{display:flex;justify-content:center;;}.back.svelte-1gozp3.svelte-1gozp3{cursor:pointer;position:absolute;left:5px}.back.svelte-1gozp3.svelte-1gozp3:hover{color:black}.back.svelte-1gozp3 span.svelte-1gozp3{transform:translateY(-8px);display:inline-block}.variations-menu.svelte-1gozp3.svelte-1gozp3{margin-left:40px}.variations-menu .button-menu{display:inline-block;margin-right:20px;min-width:140px;min-height:26px}") }

    function Lz(t, e, n) { const i = t.slice(); return i[21] = e[n], i }

    function zz(t, e, n) { const i = t.slice(); return i[24] = e[n], i }

    function Yz(t, e, n) { const i = t.slice(); return i[24] = e[n], i }

    function Fz(t) { let e, n = t[0].description + ""; return { c() { e = EM("p"), zM(e, "class", "description svelte-1gozp3") }, m(t, i) { AM(t, e, i), e.innerHTML = n }, p(t, i) { 1 & i && n !== (n = t[0].description + "") && (e.innerHTML = n) }, d(t) { t && DM(e) } } }

    function Wz(t) { let e, n = t[0].warning + ""; return { c() { e = EM("p"), zM(e, "class", "warning collection svelte-1gozp3") }, m(t, i) { AM(t, e, i), e.innerHTML = n }, p(t, i) { 1 & i && n !== (n = t[0].warning + "") && (e.innerHTML = n) }, d(t) { t && DM(e) } } }

    function Rz(t) { let e, n, i, r, o, a, s, l = t[0].variations.iconColor && Nz(t),
            c = t[0].variations.iconSize && Hz(t),
            u = t[0].variations.align && jz(t),
            f = t[0].variations.valign && Iz(t); return { c() { e = EM("div"), l && l.c(), n = PM(), c && c.c(), i = PM(), r = EM("br"), o = PM(), u && u.c(), a = PM(), f && f.c(), zM(e, "class", "variations-menu svelte-1gozp3") }, m(t, d) { AM(t, e, d), l && l.m(e, null), MM(e, n), c && c.m(e, null), MM(e, i), MM(e, r), MM(e, o), u && u.m(e, null), MM(e, a), f && f.m(e, null), s = !0 }, p(t, r) { t[0].variations.iconColor ? l ? (l.p(t, r), 1 & r && gS(l, 1)) : (l = Nz(t), l.c(), gS(l, 1), l.m(e, n)) : l && (dS(), pS(l, 1, 1, (() => { l = null })), hS()), t[0].variations.iconSize ? c ? (c.p(t, r), 1 & r && gS(c, 1)) : (c = Hz(t), c.c(), gS(c, 1), c.m(e, i)) : c && (dS(), pS(c, 1, 1, (() => { c = null })), hS()), t[0].variations.align ? u ? (u.p(t, r), 1 & r && gS(u, 1)) : (u = jz(t), u.c(), gS(u, 1), u.m(e, a)) : u && (dS(), pS(u, 1, 1, (() => { u = null })), hS()), t[0].variations.valign ? f ? (f.p(t, r), 1 & r && gS(f, 1)) : (f = Iz(t), f.c(), gS(f, 1), f.m(e, null)) : f && (dS(), pS(f, 1, 1, (() => { f = null })), hS()) }, i(t) { s || (gS(l), gS(c), gS(u), gS(f), s = !0) }, o(t) { pS(l), pS(c), pS(u), pS(f), s = !1 }, d(t) { t && DM(e), l && l.d(), c && c.d(), u && u.d(), f && f.d() } } }

    function Nz(t) { let e, n; return e = new kz({ props: { label: "Icon color:", mode: "color", selected: t[3][0], onChange: t[8], buttons: t[3] } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p: cM, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function Hz(t) { let e, n; return e = new kz({ props: { label: "Icon size:", mode: "icon-size", selected: t[4][2], onChange: t[9], buttons: t[4] } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p: cM, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function jz(t) { let e, n; return e = new kz({ props: { label: "Align:", selected: "center", onChange: t[10], buttons: Oz } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p: cM, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function Iz(t) { let e, n; return e = new kz({ props: { label: "Vertical Align:", selected: "top", onChange: t[11], buttons: t[0].variations.disableValignCenter ? Pz : Tz } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                1 & n && (i.buttons = t[0].variations.disableValignCenter ? Pz : Tz), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function Vz(t) { let e, n, i, r, o, a, s, l, c, u, f, d;

        function h(t, e) { return t[21]._typeVariations ? qz : Xz } i = new QL({ props: { isEditor: !1, breakpoint: null, draggable: t[21], updateDraggable: YB, finalizeDraggable: YB, removeDraggable: YB, scale: t[5], containerWidth: 120 } }); let g = h(t),
            p = g(t),
            v = t[21].roles && Gz(t),
            m = t[21]._info && Qz(t),
            y = t[21]._warn && Kz(t);

        function x() { return t[16](t[21]) } return { c() { e = EM("div"), n = EM("div"), yS(i.$$.fragment), r = PM(), p.c(), o = PM(), a = EM("div"), v && v.c(), s = PM(), m && m.c(), l = PM(), y && y.c(), c = PM(), zM(n, "class", "preview svelte-1gozp3"), zM(a, "class", "info svelte-1gozp3"), zM(e, "class", "collection-item svelte-1gozp3") }, m(t, h) { AM(t, e, h), MM(e, n), xS(i, n, null), MM(n, r), p.m(n, null), MM(e, o), MM(e, a), v && v.m(a, null), MM(a, s), m && m.m(a, null), MM(a, l), y && y.m(a, null), MM(e, c), u = !0, f || (d = LM(e, "click", x), f = !0) }, p(e, r) { t = e; const o = {};
                1 & r && (o.draggable = t[21]), i.$set(o), g === (g = h(t)) && p ? p.p(t, r) : (p.d(1), p = g(t), p && (p.c(), p.m(n, null))), t[21].roles ? v ? v.p(t, r) : (v = Gz(t), v.c(), v.m(a, s)) : v && (v.d(1), v = null), t[21]._info ? m ? m.p(t, r) : (m = Qz(t), m.c(), m.m(a, l)) : m && (m.d(1), m = null), t[21]._warn ? y ? y.p(t, r) : (y = Kz(t), y.c(), y.m(a, null)) : y && (y.d(1), y = null) }, i(t) { u || (gS(i.$$.fragment, t), u = !0) }, o(t) { pS(i.$$.fragment, t), u = !1 }, d(t) { t && DM(e), bS(i), p.d(), v && v.d(), m && m.d(), y && y.d(), f = !1, d() } } }

    function Uz(t) { let e, n, i, r, o, a, s, l, c, u, f, d, h, g, p, v, m = t[21].title + "",
            y = t[21].description + "",
            x = t[21].roles && Jz(t);

        function b() { return t[15](t[21]) } return u = new QL({ props: { isEditor: !1, breakpoint: null, draggable: t[21].previewItem, updateDraggable: YB, finalizeDraggable: YB, removeDraggable: YB, scale: t[5], containerWidth: 120 } }), { c() { e = EM("div"), n = EM("div"), i = EM("h3"), r = TM(m), o = PM(), x && x.c(), a = PM(), s = EM("p"), l = PM(), c = EM("div"), yS(u.$$.fragment), f = PM(), d = EM("div"), d.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><circle cx="12" cy="12" r="9"></circle><line x1="16" y1="12" x2="8" y2="12"></line><line x1="16" y1="12" x2="12" y2="16"></line><line x1="16" y1="12" x2="12" y2="8"></line></svg>', h = PM(), zM(i, "class", "svelte-1gozp3"), zM(s, "class", "description svelte-1gozp3"), zM(n, "class", "info svelte-1gozp3"), zM(d, "class", "action-icon svelte-1gozp3"), zM(c, "class", "preview svelte-1gozp3"), zM(e, "class", "collection-row svelte-1gozp3") }, m(t, m) { AM(t, e, m), MM(e, n), MM(n, i), MM(i, r), MM(n, o), x && x.m(n, null), MM(n, a), MM(n, s), s.innerHTML = y, MM(e, l), MM(e, c), xS(u, c, null), MM(c, f), MM(c, d), MM(e, h), g = !0, p || (v = LM(e, "click", b), p = !0) }, p(e, i) { t = e, (!g || 1 & i) && m !== (m = t[21].title + "") && FM(r, m), t[21].roles ? x ? x.p(t, i) : (x = Jz(t), x.c(), x.m(n, a)) : x && (x.d(1), x = null), (!g || 1 & i) && y !== (y = t[21].description + "") && (s.innerHTML = y); const o = {};
                1 & i && (o.draggable = t[21].previewItem), u.$set(o) }, i(t) { g || (gS(u.$$.fragment, t), g = !0) }, o(t) { pS(u.$$.fragment, t), g = !1 }, d(t) { t && DM(e), x && x.d(), bS(u), p = !1, v() } } }

    function Xz(t) { let e; return { c() { e = EM("div"), zM(e, "class", "action-icon svelte-1gozp3") }, m(t, n) { AM(t, e, n), e.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <circle cx="12" cy="12" r="9" />\n  <line x1="9" y1="12" x2="15" y2="12" />\n  <line x1="12" y1="9" x2="12" y2="15" />\n</svg>' }, p: cM, d(t) { t && DM(e) } } }

    function qz(t) { let e; return { c() { e = EM("div"), e.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"></path><circle cx="12" cy="12" r="9"></circle><line x1="16" y1="12" x2="8" y2="12"></line><line x1="16" y1="12" x2="12" y2="16"></line><line x1="16" y1="12" x2="12" y2="8"></line></svg>', zM(e, "class", "variant-icon svelte-1gozp3") }, m(t, n) { AM(t, e, n) }, p: cM, d(t) { t && DM(e) } } }

    function Gz(t) { let e, n = t[21].roles,
            i = []; for (let e = 0; e < n.length; e += 1) i[e] = Zz(zz(t, n, e)); return { c() { e = EM("div"); for (let t = 0; t < i.length; t += 1) i[t].c();
                zM(e, "class", "roles svelte-1gozp3") }, m(t, n) { AM(t, e, n); for (let t = 0; t < i.length; t += 1) i[t].m(e, null) }, p(t, r) { if (5 & r) { let o; for (n = t[21].roles, o = 0; o < n.length; o += 1) { const a = zz(t, n, o);
                        i[o] ? i[o].p(a, r) : (i[o] = Zz(a), i[o].c(), i[o].m(e, null)) } for (; o < i.length; o += 1) i[o].d(1);
                    i.length = n.length } }, d(t) { t && DM(e), CM(i, t) } } }

    function Zz(t) { let e, n, i = t[2][t[24]] + ""; return { c() { e = EM("span"), n = TM(i), zM(e, "class", "svelte-1gozp3") }, m(t, i) { AM(t, e, i), MM(e, n) }, p(t, e) { 1 & e && i !== (i = t[2][t[24]] + "") && FM(n, i) }, d(t) { t && DM(e) } } }

    function Qz(t) { let e, n = t[21]._info + ""; return { c() { e = EM("p"), zM(e, "class", "description svelte-1gozp3") }, m(t, i) { AM(t, e, i), e.innerHTML = n }, p(t, i) { 1 & i && n !== (n = t[21]._info + "") && (e.innerHTML = n) }, d(t) { t && DM(e) } } }

    function Kz(t) { let e, n = t[21]._warn + ""; return { c() { e = EM("p"), zM(e, "class", "warning item svelte-1gozp3") }, m(t, i) { AM(t, e, i), e.innerHTML = n }, p(t, i) { 1 & i && n !== (n = t[21]._warn + "") && (e.innerHTML = n) }, d(t) { t && DM(e) } } }

    function Jz(t) { let e, n = t[21].roles,
            i = []; for (let e = 0; e < n.length; e += 1) i[e] = tY(Yz(t, n, e)); return { c() { e = EM("div"); for (let t = 0; t < i.length; t += 1) i[t].c();
                zM(e, "class", "roles svelte-1gozp3") }, m(t, n) { AM(t, e, n); for (let t = 0; t < i.length; t += 1) i[t].m(e, null) }, p(t, r) { if (5 & r) { let o; for (n = t[21].roles, o = 0; o < n.length; o += 1) { const a = Yz(t, n, o);
                        i[o] ? i[o].p(a, r) : (i[o] = tY(a), i[o].c(), i[o].m(e, null)) } for (; o < i.length; o += 1) i[o].d(1);
                    i.length = n.length } }, d(t) { t && DM(e), CM(i, t) } } }

    function tY(t) { let e, n, i = t[2][t[24]] + ""; return { c() { e = EM("span"), n = TM(i), zM(e, "class", "svelte-1gozp3") }, m(t, i) { AM(t, e, i), MM(e, n) }, p(t, e) { 1 & e && i !== (i = t[2][t[24]] + "") && FM(n, i) }, d(t) { t && DM(e) } } }

    function eY(t) { let e, n, i, r; const o = [Uz, Vz],
            a = [];

        function s(t, e) { return "collection" === t[21].type || "singleSelection" === t[21].type ? 0 : 1 } return e = s(t), n = a[e] = o[e](t), { c() { n.c(), i = BM() }, m(t, n) { a[e].m(t, n), AM(t, i, n), r = !0 }, p(t, r) { let l = e;
                e = s(t), e === l ? a[e].p(t, r) : (dS(), pS(a[l], 1, 1, (() => { a[l] = null })), hS(), n = a[e], n ? n.p(t, r) : (n = a[e] = o[e](t), n.c()), gS(n, 1), n.m(i.parentNode, i)) }, i(t) { r || (gS(n), r = !0) }, o(t) { pS(n), r = !1 }, d(t) { a[e].d(t), t && DM(i) } } }

    function nY(t) { let e, n, i, r, o, a; return { c() { e = EM("div"), n = new UM(!1), i = PM(), r = EM("span"), r.textContent = "Back", n.a = i, zM(r, "class", "svelte-1gozp3"), zM(e, "class", "back svelte-1gozp3") }, m(s, l) { AM(s, e, l), n.m('<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-corner-down-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M18 6v6a3 3 0 0 1 -3 3h-10l4 -4m0 8l-4 -4" />\n</svg>', e), MM(e, i), MM(e, r), o || (a = LM(e, "click", t[7]), o = !0) }, p: cM, d(t) { t && DM(e), o = !1, a() } } }

    function iY(t) { let e, n, i, r, o, a, s, l, c, u, f = t[0].title + "",
            d = t[0].description && Fz(t),
            h = t[0].warning && Wz(t),
            g = t[0].variations && Rz(t),
            p = t[0].items,
            v = []; for (let e = 0; e < p.length; e += 1) v[e] = eY(Lz(t, p, e)); const m = t => pS(v[t], 1, 1, (() => { v[t] = null })); let y = t[1].length > 1 && nY(t); return { c() { e = EM("div"), n = EM("h2"), i = TM(f), r = PM(), d && d.c(), o = PM(), h && h.c(), a = PM(), g && g.c(), s = PM(); for (let t = 0; t < v.length; t += 1) v[t].c();
                l = PM(), c = EM("div"), y && y.c(), zM(n, "class", "svelte-1gozp3"), zM(e, "class", "select svelte-1gozp3"), zM(c, "class", "menu menu-footer svelte-1gozp3") }, m(t, f) { AM(t, e, f), MM(e, n), MM(n, i), MM(e, r), d && d.m(e, null), MM(e, o), h && h.m(e, null), MM(e, a), g && g.m(e, null), MM(e, s); for (let t = 0; t < v.length; t += 1) v[t].m(e, null);
                AM(t, l, f), AM(t, c, f), y && y.m(c, null), u = !0 }, p(t, [n]) { if ((!u || 1 & n) && f !== (f = t[0].title + "") && FM(i, f), t[0].description ? d ? d.p(t, n) : (d = Fz(t), d.c(), d.m(e, o)) : d && (d.d(1), d = null), t[0].warning ? h ? h.p(t, n) : (h = Wz(t), h.c(), h.m(e, a)) : h && (h.d(1), h = null), t[0].variations ? g ? (g.p(t, n), 1 & n && gS(g, 1)) : (g = Rz(t), g.c(), gS(g, 1), g.m(e, s)) : g && (dS(), pS(g, 1, 1, (() => { g = null })), hS()), 101 & n) { let i; for (p = t[0].items, i = 0; i < p.length; i += 1) { const r = Lz(t, p, i);
                        v[i] ? (v[i].p(r, n), gS(v[i], 1)) : (v[i] = eY(r), v[i].c(), gS(v[i], 1), v[i].m(e, null)) } for (dS(), i = p.length; i < v.length; i += 1) m(i);
                    hS() } t[1].length > 1 ? y ? y.p(t, n) : (y = nY(t), y.c(), y.m(c, null)) : y && (y.d(1), y = null) }, i(t) { if (!u) { gS(g); for (let t = 0; t < p.length; t += 1) gS(v[t]);
                    u = !0 } }, o(t) { pS(g), v = v.filter(Boolean); for (let t = 0; t < v.length; t += 1) pS(v[t]);
                u = !1 }, d(t) { t && DM(e), d && d.d(), h && h.d(), g && g.d(), CM(v, t), t && DM(l), t && DM(c), y && y.d() } } }

    function rY(t, e, n) { let { options: i } = e, { collection: r } = e, { onComplete: o } = e, a = r, s = [a], l = ["var(--text)", "#00aeff", "#ffc400", "#ff008c"], c = [6, 8, 10, 14]; const u = EB(i);

        function f(t = {}) { if ("collection" === t.type) n(1, s = s.concat([t])), d((() => { n(0, a = t) }));
            else if (t._typeVariations) d((() => { const e = function(t, e) { const n = t.type,
                        i = { ...t, _typeVariations: void 0 },
                        r = Dz.items.filter((t => t._roles.includes(n))).map((t => (e && (t.text = function(t, e) { const n = e.replace(/<[^>]*>/g, ""); return t._replace ? t.text.replace(t._replace, n) : n }(t, e)), { ...i, ...t }))),
                        o = { ...Dz, items: r }; return t._variations && (o.variations = t._variations), o }(t);
                n(1, s = s.concat([e])), n(0, a = e) }));
            else { const e = t.previewItem ? t.previewItem : t;
                o(function(t = {}) { const e = {}; return Object.keys(t).filter((t => "_" !== t[0])).forEach((n => { e[n] = t[n] })), e }(e)) } }

        function d(t) { n(0, a = { ...a, items: [] }), setTimeout(t, 1) }

        function h(t) { n(0, a.items = a.items.map((e => ({ ...e, ...t }))), a) } return t.$$set = t => { "options" in t && n(12, i = t.options), "collection" in t && n(13, r = t.collection), "onComplete" in t && n(14, o = t.onComplete) }, [a, s, { advanced: "Advanced Role Only" }, l, c, u, f, function() { n(1, s = s.slice(0, -1)), d((() => { n(0, a = s[s.length - 1]) })) }, function(t) { h({ iconColor: t }) }, function(t) { h({ iconSize: t }) }, function(t) { var e;
            h({ align: t, x: (e = t, "right" === e ? .9 : "center" === e ? .5 : .1) }) }, function(t) { var e;
            h({ valign: t, y: (e = t, "bottom" === e ? .6 : "center" === e ? .5 : .4) }) }, i, r, o, t => f(t), t => f(t)] } class oY extends _S { constructor(t) { super(), wS(this, t, rY, iY, pM, { options: 12, collection: 13, onComplete: 14 }, Bz) } get options() { return this.$$.ctx[12] } set options(t) { this.$$set({ options: t }), lS() } get collection() { return this.$$.ctx[13] } set collection(t) { this.$$set({ collection: t }), lS() } get onComplete() { return this.$$.ctx[14] } set onComplete(t) { this.$$set({ onComplete: t }), lS() } }

    function aY(t) { SM(t, "svelte-y61xvx", ".dialog.svelte-y61xvx{z-index:100;width:220px;position:absolute;top:0;left:101%;background:var(--bg);box-shadow:3px 3px 4px rgba(58, 115, 254, 0.3);border-radius:3px;border:1px solid #3b73ff;padding:8px}button.closer.svelte-y61xvx{position:absolute;color:#3a73ff;right:0;top:2px;z-index:100;font-size:12px;font-weight:bold;border:none;box-shadow:none}button.closer.svelte-y61xvx:hover{color:#3a73ff;background:transparent}button.closer svg{width:18px;height:18px}.handle.dialog > svg{display:inline-block;max-height:14px;color:#3a73ff;margin:6px -8.5px;padding:0}.dialog > div{position:relative;margin:8px 0;font-size:12px}") } const sY = t => ({}),
        lY = t => ({});

    function cY(t) { let e, n, i, r, o, a, s, l, c;
        r = new XB({ props: { id: t[5], handleWidth: t[3] - 20, handleHeight: "4", color: "transparent", x: (t[3] - 20) / 2, y: "-8", active: "true", handleClass: "dialog", onChange: t[7] } }); const u = t[10].content,
            f = mM(u, t, t[9], lY); return { c() { e = EM("div"), n = EM("button"), i = PM(), yS(r.$$.fragment), o = PM(), f && f.c(), zM(n, "class", "closer svelte-y61xvx"), zM(e, "class", a = "dialog " + t[2] + " svelte-y61xvx"), RM(e, "left", t[0] + "px"), RM(e, "top", t[1] + "px"), RM(e, "width", t[3] + "px") }, m(a, u) { AM(a, e, u), MM(e, n), n.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <circle cx="12" cy="12" r="9" />\n  <path d="M10 10l4 4m0 -4l-4 4" />\n</svg>', MM(e, i), xS(r, e, null), MM(e, o), f && f.m(e, null), t[11](e), s = !0, l || (c = LM(n, "click", t[6]), l = !0) }, p(t, [n]) { const i = {};
                8 & n && (i.handleWidth = t[3] - 20), 8 & n && (i.x = (t[3] - 20) / 2), r.$set(i), f && f.p && (!s || 512 & n) && bM(f, u, t, t[9], s ? xM(u, t[9], n, sY) : $M(t[9]), lY), (!s || 4 & n && a !== (a = "dialog " + t[2] + " svelte-y61xvx")) && zM(e, "class", a), (!s || 1 & n) && RM(e, "left", t[0] + "px"), (!s || 2 & n) && RM(e, "top", t[1] + "px"), (!s || 8 & n) && RM(e, "width", t[3] + "px") }, i(t) { s || (gS(r.$$.fragment, t), gS(f, t), s = !0) }, o(t) { pS(r.$$.fragment, t), pS(f, t), s = !1 }, d(n) { n && DM(e), bS(r), f && f.d(n), t[11](null), l = !1, c() } } }

    function uY(t, e, n) { let i, { $$slots: r = {}, $$scope: o } = e,
            { onClose: a } = e,
            { className: s = "" } = e,
            { width: l = 220 } = e,
            { x: c = 0 } = e,
            { y: u = 0 } = e,
            f = Math.round(99999 * Math.random()); return t.$$set = t => { "onClose" in t && n(8, a = t.onClose), "className" in t && n(2, s = t.className), "width" in t && n(3, l = t.width), "x" in t && n(0, c = t.x), "y" in t && n(1, u = t.y), "$$scope" in t && n(9, o = t.$$scope) }, [c, u, s, l, i, f, function() { a() }, function(t) { n(0, c = c + t.x - (l - 20)), n(1, u += t.y) }, a, o, r, function(t) { tS[t ? "unshift" : "push"]((() => { i = t, n(4, i) })) }] } class fY extends _S { constructor(t) { super(), wS(this, t, uY, cY, pM, { onClose: 8, className: 2, width: 3, x: 0, y: 1 }, aY) } get onClose() { return this.$$.ctx[8] } set onClose(t) { this.$$set({ onClose: t }), lS() } get className() { return this.$$.ctx[2] } set className(t) { this.$$set({ className: t }), lS() } get width() { return this.$$.ctx[3] } set width(t) { this.$$set({ width: t }), lS() } get x() { return this.$$.ctx[0] } set x(t) { this.$$set({ x: t }), lS() } get y() { return this.$$.ctx[1] } set y(t) { this.$$set({ y: t }), lS() } }

    function dY(t) { SM(t, "svelte-x0z9ju", "div.svelte-x0z9ju{max-height:610px;overflow-y:auto;overflow-x:hidden}") }

    function hY(t) { let e, n, i; return n = new oY({ props: { options: t[0], collection: t[1], onComplete: t[2] } }), { c() { e = EM("div"), yS(n.$$.fragment), zM(e, "slot", "content"), zM(e, "class", "svelte-x0z9ju") }, m(t, r) { AM(t, e, r), xS(n, e, null), i = !0 }, p(t, e) { const i = {};
                1 & e && (i.options = t[0]), 2 & e && (i.collection = t[1]), 4 & e && (i.onComplete = t[2]), n.$set(i) }, i(t) { i || (gS(n.$$.fragment, t), i = !0) }, o(t) { pS(n.$$.fragment, t), i = !1 }, d(t) { t && DM(e), bS(n) } } }

    function gY(t) { let e, n; return e = new fY({ props: { className: "dialog", width: "450", x: 5, y: 5, onClose: t[3], $$slots: { content: [hY] }, $$scope: { ctx: t } } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, [n]) { const i = {};
                23 & n && (i.$$scope = { dirty: n, ctx: t }), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function pY(t, e, n) { let { options: i } = e, { collection: r } = e, { onComplete: o } = e; return t.$$set = t => { "options" in t && n(0, i = t.options), "collection" in t && n(1, r = t.collection), "onComplete" in t && n(2, o = t.onComplete) }, [i, r, o, function() { o() }] } class vY extends _S { constructor(t) { super(), wS(this, t, pY, gY, pM, { options: 0, collection: 1, onComplete: 2 }, dY) } get options() { return this.$$.ctx[0] } set options(t) { this.$$set({ options: t }), lS() } get collection() { return this.$$.ctx[1] } set collection(t) { this.$$set({ collection: t }), lS() } get onComplete() { return this.$$.ctx[2] } set onComplete(t) { this.$$set({ onComplete: t }), lS() } }

    function mY(t) { SM(t, "svelte-nycurc", ".placement.svelte-nycurc.svelte-nycurc{z-index:100;position:absolute;top:0;right:0;width:100%;height:100%;overflow:auto;background:linear-gradient(to bottom, var(--bg)00 0%,#c6d7ff80 100%);cursor:cell}.placement.svelte-nycurc h2.svelte-nycurc{font-size:24px;color:#3a73ff;opacity:0.9;font-family:sans-serif;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);pointer-events:none}") }

    function yY(t) { let e, n, i, r, o; return { c() { e = EM("div"), n = EM("h2"), i = TM(t[0]), zM(n, "class", "svelte-nycurc"), zM(e, "class", "placement svelte-nycurc"), zM(e, "style", t[1]) }, m(a, s) { AM(a, e, s), MM(e, n), MM(n, i), r || (o = LM(e, "click", t[2]), r = !0) }, p(t, [n]) { 1 & n && FM(i, t[0]), 2 & n && zM(e, "style", t[1]) }, i: cM, o: cM, d(t) { t && DM(e), r = !1, o() } } }

    function xY(t, e, n) { let i, r, o, a, { draggable: s } = e,
            { scale: l } = e,
            { options: c } = e,
            { editorTarget: u } = e,
            { draggablesTarget: f } = e,
            { onComplete: d } = e,
            { addDraggable: h } = e,
            { containerWidth: g } = e,
            { placementMessage: p = "Place your draggable" } = e; return t.$$set = t => { "draggable" in t && n(3, s = t.draggable), "scale" in t && n(4, l = t.scale), "options" in t && n(5, c = t.options), "editorTarget" in t && n(6, u = t.editorTarget), "draggablesTarget" in t && n(7, f = t.draggablesTarget), "onComplete" in t && n(8, d = t.onComplete), "addDraggable" in t && n(9, h = t.addDraggable), "containerWidth" in t && n(10, g = t.containerWidth), "placementMessage" in t && n(0, p = t.placementMessage) }, t.$$.update = () => { 64 & t.$$.dirty && n(13, i = u.getBoundingClientRect()), 8320 & t.$$.dirty && n(12, r = f ? f.getBoundingClientRect() : i), 128 & t.$$.dirty && n(11, o = WB(f)), 14368 & t.$$.dirty && n(1, a = `\n      top: ${r.y-i.y}px;\n      left: ${r.x-i.x}px;\n      width: ${r.width}px;\n      height: ${Math.max(o,c.minimumCanvasHeight||0)}px;\n    `) }, [p, a, function({ offsetX: t, offsetY: e }) { const [i, r] = l.invert(g, [t, e]);
            n(3, s.id = Math.round(99999 * Math.random()), s), n(3, s.x = i, s), n(3, s.y = r, s), h(s), d(s) }, s, l, c, u, f, d, h, g, o, r, i] } class bY extends _S { constructor(t) { super(), wS(this, t, xY, yY, pM, { draggable: 3, scale: 4, options: 5, editorTarget: 6, draggablesTarget: 7, onComplete: 8, addDraggable: 9, containerWidth: 10, placementMessage: 0 }, mY) } get draggable() { return this.$$.ctx[3] } set draggable(t) { this.$$set({ draggable: t }), lS() } get scale() { return this.$$.ctx[4] } set scale(t) { this.$$set({ scale: t }), lS() } get options() { return this.$$.ctx[5] } set options(t) { this.$$set({ options: t }), lS() } get editorTarget() { return this.$$.ctx[6] } set editorTarget(t) { this.$$set({ editorTarget: t }), lS() } get draggablesTarget() { return this.$$.ctx[7] } set draggablesTarget(t) { this.$$set({ draggablesTarget: t }), lS() } get onComplete() { return this.$$.ctx[8] } set onComplete(t) { this.$$set({ onComplete: t }), lS() } get addDraggable() { return this.$$.ctx[9] } set addDraggable(t) { this.$$set({ addDraggable: t }), lS() } get containerWidth() { return this.$$.ctx[10] } set containerWidth(t) { this.$$set({ containerWidth: t }), lS() } get placementMessage() { return this.$$.ctx[0] } set placementMessage(t) { this.$$set({ placementMessage: t }), lS() } }

    function $Y(t) { SM(t, "svelte-15lutl9", ".dialog.svelte-15lutl9.svelte-15lutl9{font-family:sans-serif;z-index:100;position:absolute;top:0;right:0;background:white;border:1px solid black;padding:8px;width:350px}.dialog.svelte-15lutl9 button.closer.svelte-15lutl9{position:absolute;right:0;top:2px;z-index:100;font-size:10px;border:none}.dialog.svelte-15lutl9 div.svelte-15lutl9{position:relative;margin:6px 0;font-size:12px}") }

    function wY(t, e, n) { const i = t.slice(); return i[11] = e[n], i[12] = e, i[13] = n, i }

    function _Y(t, e, n) { const i = t.slice(); return i[14] = e[n], i }

    function kY(t) { let e, n, i, r = t[14].label + ""; return { c() { e = EM("option"), n = TM(r), e.__value = i = t[14].type, e.value = e.__value }, m(t, i) { AM(t, e, i), MM(e, n) }, p: cM, d(t) { t && DM(e) } } }

    function MY(t) { let e, n, i, r, o, a;

        function s() { t[9].call(n, t[12], t[13]) }

        function l() { t[10].call(r, t[12], t[13]) } return { c() { e = EM("div"), n = EM("input"), i = PM(), r = EM("input"), zM(n, "placeholder", "name"), zM(r, "placeholder", "size"), zM(r, "type", "number"), RM(e, "padding-left", "10px"), zM(e, "class", "svelte-15lutl9") }, m(c, u) { AM(c, e, u), MM(e, n), WM(n, t[11].name), MM(e, i), MM(e, r), WM(r, t[11].size), o || (a = [LM(n, "input", s), LM(r, "input", l)], o = !0) }, p(e, i) { t = e, 5 & i && n.value !== t[11].name && WM(n, t[11].name), 5 & i && YM(r.value) !== t[11].size && WM(r, t[11].size) }, d(t) { t && DM(e), o = !1, hM(a) } } }

    function SY(t) { let e, n, i, r, o, a, s, l, c, u, f, d, h, g, p, v, m, y, x, b, $, w, _, k = t[2],
            M = []; for (let e = 0; e < k.length; e += 1) M[e] = kY(_Y(t, k, e)); let S = t[0].breakpoints,
            A = []; for (let e = 0; e < S.length; e += 1) A[e] = MY(wY(t, S, e)); return { c() { e = EM("div"), n = EM("button"), n.textContent = "X", i = PM(), r = EM("div"), o = TM("Scale:\n    "), a = EM("select"); for (let t = 0; t < M.length; t += 1) M[t].c();
                s = PM(), l = EM("div"), c = TM("Breakpoints (Artboards): "), u = EM("br"), f = PM(); for (let t = 0; t < A.length; t += 1) A[t].c();
                d = PM(), h = EM("button"), h.textContent = "Add Breakpoint", g = PM(), p = EM("button"), p.textContent = "Remove Breakpoint", v = PM(), m = EM("div"), y = EM("div"), x = EM("textarea"), b = PM(), $ = EM("button"), $.textContent = "Copy JSON to clipboard", zM(n, "class", "closer svelte-15lutl9"), void 0 === t[0].scale && oS((() => t[8].call(a))), zM(r, "class", "svelte-15lutl9"), zM(l, "class", "svelte-15lutl9"), RM(x, "min-height", "140px"), RM(x, "min-width", "280px"), x.value = t[1], zM(y, "class", "svelte-15lutl9"), zM(m, "class", "svelte-15lutl9"), zM(e, "class", "dialog svelte-15lutl9") }, m(k, S) { AM(k, e, S), MM(e, n), MM(e, i), MM(e, r), MM(r, o), MM(r, a); for (let t = 0; t < M.length; t += 1) M[t].m(a, null);
                NM(a, t[0].scale), MM(e, s), MM(e, l), MM(l, c), MM(l, u), MM(l, f); for (let t = 0; t < A.length; t += 1) A[t].m(l, null);
                MM(l, d), MM(l, h), MM(l, g), MM(l, p), MM(e, v), MM(e, m), MM(m, y), MM(y, x), MM(m, b), MM(m, $), w || (_ = [LM(n, "click", t[5]), LM(a, "change", t[8]), LM(h, "click", t[3]), LM(p, "click", t[4]), LM($, "click", t[4])], w = !0) }, p(t, [e]) { if (4 & e) { let n; for (k = t[2], n = 0; n < k.length; n += 1) { const i = _Y(t, k, n);
                        M[n] ? M[n].p(i, e) : (M[n] = kY(i), M[n].c(), M[n].m(a, null)) } for (; n < M.length; n += 1) M[n].d(1);
                    M.length = k.length } if (5 & e && NM(a, t[0].scale), 1 & e) { let n; for (S = t[0].breakpoints, n = 0; n < S.length; n += 1) { const i = wY(t, S, n);
                        A[n] ? A[n].p(i, e) : (A[n] = MY(i), A[n].c(), A[n].m(l, d)) } for (; n < A.length; n += 1) A[n].d(1);
                    A.length = S.length } 2 & e && (x.value = t[1]) }, i: cM, o: cM, d(t) { t && DM(e), CM(M, t), CM(A, t), w = !1, hM(_) } } }

    function AY(t, e, n) { let i, { closeOptions: r } = e,
            { options: o = {} } = e,
            { draggablesComponent: a } = e,
            s = [{ type: "linear", label: "Linear Scale (Default)" }, { type: "absolute", label: "Absolute (No Scaling)" }, { type: "uniform", label: "Uniform Scaling (Font sizes scale)" }, { type: "geo", label: "Geo Coordinates (Lat/Lon)" }, { type: "custom", label: "custom" }]; return t.$$set = t => { "closeOptions" in t && n(6, r = t.closeOptions), "options" in t && n(0, o = t.options), "draggablesComponent" in t && n(7, a = t.draggablesComponent) }, t.$$.update = () => { 128 & t.$$.dirty && n(1, i = JSON.stringify(a.items, null, "  ")) }, [o, i, s, function() { n(0, o.breakpoints = o.breakpoints.concat({ name: Math.random().toString(36).substring(2, 6), size: null }), o) }, function() { n(0, o.breakpoints = o.breakpoints.slice(0, -1), o) }, function() { r(o) }, r, a, function() { o.scale = function(t) { const e = t.querySelector(":checked") || t.options[0]; return e && e.__value }(this), n(0, o), n(2, s) }, function(t, e) { t[e].name = this.value, n(0, o), n(2, s) }, function(t, e) { t[e].size = YM(this.value), n(0, o), n(2, s) }] } class DY extends _S { constructor(t) { super(), wS(this, t, AY, SY, pM, { closeOptions: 6, options: 0, draggablesComponent: 7 }, $Y) } get closeOptions() { return this.$$.ctx[6] } set closeOptions(t) { this.$$set({ closeOptions: t }), lS() } get options() { return this.$$.ctx[0] } set options(t) { this.$$set({ options: t }), lS() } get draggablesComponent() { return this.$$.ctx[7] } set draggablesComponent(t) { this.$$set({ draggablesComponent: t }), lS() } }

    function CY(t) { SM(t, "svelte-1mwndj1", ".bar-button.svelte-1mwndj1.svelte-1mwndj1{z-index:100;position:absolute}.example-text.svelte-1mwndj1 button.svelte-1mwndj1{font-size:12px;padding:1px;color:#3a73ff;border:none;box-shadow:none}.example-text.svelte-1mwndj1 button.svelte-1mwndj1:focus{outline:none}.example-text.svelte-1mwndj1 button.svelte-1mwndj1:hover{color:#3a73ff;background:#c7c7c7}.menu-row.svelte-1mwndj1.svelte-1mwndj1{min-height:26px}.menu-start.svelte-1mwndj1.svelte-1mwndj1{margin-top:7px}.menu .button-menu{color:#3a73ff;padding-left:8px}.html-editor, .advanced-options{color:#3a73ff}textarea.svelte-1mwndj1.svelte-1mwndj1{margin-top:12px;width:154px;font-size:13px;background:var(--bg);box-shadow:inset 1px 1px 4px rgba(0,0,0,0.3)}") }

    function EY(t) { let e, n, i, r; return { c() { e = EM("button"), n = TM("..."), zM(e, "class", "bar-button svelte-1mwndj1"), RM(e, "left", t[17][0] + "px"), RM(e, "top", t[17][1] + "px") }, m(o, a) { AM(o, e, a), MM(e, n), i || (r = LM(e, "click", t[27]), i = !0) }, p(t, n) { 131072 & n[0] && RM(e, "left", t[17][0] + "px"), 131072 & n[0] && RM(e, "top", t[17][1] + "px") }, d(t) { t && DM(e), i = !1, r() } } }

    function OY(t) { let e, n; return e = new fY({ props: { className: "menu", width: "160", x: t[17][0], y: t[17][1], onClose: t[6], $$slots: { content: [TY] }, $$scope: { ctx: t } } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                131072 & n[0] && (i.x = t[17][0]), 131072 & n[0] && (i.y = t[17][1]), 64 & n[0] && (i.onClose = t[6]), 1536 & n[0] | 1024 & n[1] && (i.$$scope = { dirty: n, ctx: t }), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function TY(t) { let e, n, i, r, o, a, s, l, c, u, f, d, h, g, p, v; return n = new kz({ props: { label: "Align:", selected: t[9], onChange: t[21], buttons: Oz } }), r = new kz({ props: { label: "Valign:", selected: t[10], onChange: t[22], buttons: Tz } }), { c() { e = EM("div"), yS(n.$$.fragment), i = PM(), yS(r.$$.fragment), o = PM(), a = EM("div"), s = EM("button"), s.textContent = "Edit HTML", l = PM(), c = EM("div"), u = EM("button"), u.textContent = "Advanced Options", f = PM(), d = EM("div"), h = EM("button"), h.textContent = "Delete", zM(s, "class", "flat"), zM(a, "class", "menu-row menu-start svelte-1mwndj1"), zM(u, "class", "flat"), zM(c, "class", "menu-row svelte-1mwndj1"), zM(h, "class", "flat"), zM(d, "class", "menu-row svelte-1mwndj1"), zM(e, "slot", "content") }, m(m, y) { AM(m, e, y), xS(n, e, null), MM(e, i), xS(r, e, null), MM(e, o), MM(e, a), MM(a, s), MM(e, l), MM(e, c), MM(c, u), MM(e, f), MM(e, d), MM(d, h), g = !0, p || (v = [LM(s, "click", t[24]), LM(u, "click", t[20]), LM(h, "click", t[28])], p = !0) }, p(t, e) { const i = {};
                512 & e[0] && (i.selected = t[9]), n.$set(i); const o = {};
                1024 & e[0] && (o.selected = t[10]), r.$set(o) }, i(t) { g || (gS(n.$$.fragment, t), gS(r.$$.fragment, t), g = !0) }, o(t) { pS(n.$$.fragment, t), pS(r.$$.fragment, t), g = !1 }, d(t) { t && DM(e), bS(n), bS(r), p = !1, hM(v) } } }

    function PY(t) { let e, n; return e = new fY({ props: { className: "html-editor", width: "160", x: t[17][0], y: t[17][1], onClose: t[6], $$slots: { content: [BY] }, $$scope: { ctx: t } } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                131072 & n[0] && (i.x = t[17][0]), 131072 & n[0] && (i.y = t[17][1]), 64 & n[0] && (i.onClose = t[6]), 8448 & n[0] | 1024 & n[1] && (i.$$scope = { dirty: n, ctx: t }), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function BY(t) { let e, n, i, r, o, a, s, l, c, u, f, d, h, g, p, v, m, y, x, b, $, w, _, k, M, S, A, D, C; return { c() { e = EM("div"), n = EM("textarea"), i = PM(), r = EM("div"), o = EM("button"), o.innerHTML = "<b>Bold</b>", a = PM(), s = EM("button"), s.innerHTML = "<i>italic</i>", l = PM(), c = EM("button"), c.innerHTML = "<small>small</small>", u = PM(), f = EM("br"), d = PM(), h = EM("button"), h.innerHTML = "<b>h2</b>", g = PM(), p = EM("button"), p.innerHTML = "<b>h3</b>", v = PM(), m = EM("button"), m.innerHTML = "<b>h4</b>", y = PM(), x = EM("button"), x.innerHTML = "<b>h5</b>", b = PM(), $ = EM("button"), $.innerHTML = "<b>h6</b>", w = PM(), _ = EM("br"), k = PM(), M = EM("button"), M.innerHTML = "<span>&lt;a&gt;</span>", S = PM(), A = EM("button"), A.innerHTML = "<span>&lt;br&gt;</span>", zM(n, "rows", "4"), n.value = t[8], zM(n, "class", "svelte-1mwndj1"), zM(o, "data-tag", "b"), zM(o, "class", "svelte-1mwndj1"), zM(s, "data-tag", "i"), zM(s, "class", "svelte-1mwndj1"), zM(c, "data-tag", "small"), zM(c, "class", "svelte-1mwndj1"), zM(h, "data-tag", "h2"), zM(h, "class", "svelte-1mwndj1"), zM(p, "data-tag", "h3"), zM(p, "class", "svelte-1mwndj1"), zM(m, "data-tag", "h4"), zM(m, "class", "svelte-1mwndj1"), zM(x, "data-tag", "h5"), zM(x, "class", "svelte-1mwndj1"), zM($, "data-tag", "h6"), zM($, "class", "svelte-1mwndj1"), zM(M, "data-tag", "a"), zM(M, "class", "svelte-1mwndj1"), zM(A, "data-tag", "br"), zM(A, "class", "svelte-1mwndj1"), zM(r, "class", "example-text svelte-1mwndj1"), zM(e, "slot", "content") }, m(E, O) { AM(E, e, O), MM(e, n), t[35](n), MM(e, i), MM(e, r), MM(r, o), MM(r, a), MM(r, s), MM(r, l), MM(r, c), MM(r, u), MM(r, f), MM(r, d), MM(r, h), MM(r, g), MM(r, p), MM(r, v), MM(r, m), MM(r, y), MM(r, x), MM(r, b), MM(r, $), MM(r, w), MM(r, _), MM(r, k), MM(r, M), MM(r, S), MM(r, A), D || (C = [LM(n, "keyup", t[19]), LM(o, "click", t[23]), LM(s, "click", t[23]), LM(c, "click", t[23]), LM(h, "click", t[23]), LM(p, "click", t[23]), LM(m, "click", t[23]), LM(x, "click", t[23]), LM($, "click", t[23]), LM(M, "click", t[23]), LM(A, "click", t[23])], D = !0) }, p(t, e) { 256 & e[0] && (n.value = t[8]) }, d(n) { n && DM(e), t[35](null), D = !1, hM(C) } } }

    function LY(t) { let e, n; return e = new fY({ props: { className: "advanced-options", width: "160", x: t[17][0], y: t[17][1], onClose: t[6], $$slots: { content: [zY] }, $$scope: { ctx: t } } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                131072 & n[0] && (i.x = t[17][0]), 131072 & n[0] && (i.y = t[17][1]), 64 & n[0] && (i.onClose = t[6]), 6199 & n[0] | 1024 & n[1] && (i.$$scope = { dirty: n, ctx: t }), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function zY(t) { let e, n, i, r, o, a, s, l, c, u, f, d, h, g, p, v, m, y, x, b, $, w, _, k, M, S, A, D, C, E, O, T, P, B, L; return { c() { e = EM("div"), n = EM("div"), i = TM("Width: "), r = EM("input"), o = PM(), a = EM("div"), s = TM("OffsetX: "), l = EM("input"), c = PM(), u = EM("div"), f = TM("OffsetY: "), d = EM("input"), h = PM(), g = EM("div"), p = TM("Color: "), v = EM("input"), m = PM(), y = EM("div"), x = TM("Stroke Width: "), b = EM("input"), $ = PM(), w = EM("div"), _ = EM("input"), k = TM("Enable text outline"), M = EM("br"), S = PM(), A = EM("div"), D = EM("input"), C = TM("Enable infoBox"), E = EM("br"), O = PM(), T = EM("div"), P = EM("button"), P.textContent = "Export", zM(r, "type", "number"), zM(r, "variable", "textWidth"), zM(l, "type", "number"), zM(l, "variable", "offsetX"), zM(d, "type", "number"), zM(d, "variable", "offsetY"), zM(v, "variable", "color"), zM(b, "type", "number"), zM(b, "variable", "strokeWidth"), zM(_, "type", "checkbox"), zM(_, "name", "outline"), _.checked = t[11], zM(D, "type", "checkbox"), zM(D, "name", "infoBox"), D.checked = t[12], zM(P, "class", "export"), RM(T, "float", "right"), zM(e, "slot", "content") }, m(z, Y) { AM(z, e, Y), MM(e, n), MM(n, i), MM(n, r), WM(r, t[5]), MM(e, o), MM(e, a), MM(a, s), MM(a, l), WM(l, t[0]), MM(e, c), MM(e, u), MM(u, f), MM(u, d), WM(d, t[1]), MM(e, h), MM(e, g), MM(g, p), MM(g, v), WM(v, t[4]), MM(e, m), MM(e, y), MM(y, x), MM(y, b), WM(b, t[2]), MM(e, $), MM(e, w), MM(w, _), MM(w, k), MM(w, M), MM(e, S), MM(e, A), MM(A, D), MM(A, C), MM(A, E), MM(e, O), MM(e, T), MM(T, P), B || (L = [LM(r, "input", t[36]), LM(r, "keyup", t[25]), LM(r, "change", t[25]), LM(l, "input", t[37]), LM(l, "keyup", t[25]), LM(l, "change", t[25]), LM(d, "input", t[38]), LM(d, "keyup", t[25]), LM(d, "change", t[25]), LM(v, "input", t[39]), LM(v, "keyup", t[25]), LM(v, "change", t[25]), LM(b, "input", t[40]), LM(b, "keyup", t[25]), LM(b, "change", t[25]), LM(_, "change", t[29]), LM(D, "change", t[29]), LM(P, "click", FY)], B = !0) }, p(t, e) { 32 & e[0] && YM(r.value) !== t[5] && WM(r, t[5]), 1 & e[0] && YM(l.value) !== t[0] && WM(l, t[0]), 2 & e[0] && YM(d.value) !== t[1] && WM(d, t[1]), 16 & e[0] && v.value !== t[4] && WM(v, t[4]), 4 & e[0] && YM(b.value) !== t[2] && WM(b, t[2]), 2048 & e[0] && (_.checked = t[11]), 4096 & e[0] && (D.checked = t[12]) }, d(t) { t && DM(e), B = !1, hM(L) } } }

    function YY(t) { let e, n, i, r, o, a, s, l, c, u, f = t[3] ? "Hide" : "Show",
            d = t[7] && EY(t),
            h = t[16] && OY(t),
            g = t[14] && PY(t),
            p = t[15] && LY(t); return { c() { e = EM("button"), n = TM(f), i = PM(), d && d.c(), r = PM(), h && h.c(), o = PM(), g && g.c(), a = PM(), p && p.c(), s = BM(), zM(e, "class", "bar-button svelte-1mwndj1"), RM(e, "left", t[18][0] + "px"), RM(e, "top", t[18][1] + "px") }, m(f, v) { AM(f, e, v), MM(e, n), AM(f, i, v), d && d.m(f, v), AM(f, r, v), h && h.m(f, v), AM(f, o, v), g && g.m(f, v), AM(f, a, v), p && p.m(f, v), AM(f, s, v), l = !0, c || (u = LM(e, "click", t[26]), c = !0) }, p(t, i) {
                (!l || 8 & i[0]) && f !== (f = t[3] ? "Hide" : "Show") && FM(n, f), (!l || 262144 & i[0]) && RM(e, "left", t[18][0] + "px"), (!l || 262144 & i[0]) && RM(e, "top", t[18][1] + "px"), t[7] ? d ? d.p(t, i) : (d = EY(t), d.c(), d.m(r.parentNode, r)) : d && (d.d(1), d = null), t[16] ? h ? (h.p(t, i), 65536 & i[0] && gS(h, 1)) : (h = OY(t), h.c(), gS(h, 1), h.m(o.parentNode, o)) : h && (dS(), pS(h, 1, 1, (() => { h = null })), hS()), t[14] ? g ? (g.p(t, i), 16384 & i[0] && gS(g, 1)) : (g = PY(t), g.c(), gS(g, 1), g.m(a.parentNode, a)) : g && (dS(), pS(g, 1, 1, (() => { g = null })), hS()), t[15] ? p ? (p.p(t, i), 32768 & i[0] && gS(p, 1)) : (p = LY(t), p.c(), gS(p, 1), p.m(s.parentNode, s)) : p && (dS(), pS(p, 1, 1, (() => { p = null })), hS()) }, i(t) { l || (gS(h), gS(g), gS(p), l = !0) }, o(t) { pS(h), pS(g), pS(p), l = !1 }, d(t) { t && DM(e), t && DM(i), d && d.d(t), t && DM(r), h && h.d(t), t && DM(o), g && g.d(t), t && DM(a), p && p.d(t), t && DM(s), c = !1, u() } } }

    function FY() { window.ANNOTATIONS }

    function WY(t, e, n) { let i, r, o, { id: a } = e,
            { x: s = 0 } = e,
            { y: l = 0 } = e,
            { offsetX: c = 0 } = e,
            { offsetY: u = 0 } = e,
            { strokeWidth: f = 1 } = e,
            { visible: d = !0 } = e,
            { color: h } = e,
            { onClose: g } = e,
            { onChange: p } = e,
            { removeDraggable: v } = e,
            { renderContextMenu: m } = e,
            { text: y } = e,
            { align: x } = e,
            { valign: b } = e,
            { outline: $ } = e,
            { infoBox: w } = e,
            { textWidth: _ = 160 } = e,
            k = !1,
            M = !1,
            S = !1; return t.$$set = t => { "id" in t && n(30, a = t.id), "x" in t && n(31, s = t.x), "y" in t && n(32, l = t.y), "offsetX" in t && n(0, c = t.offsetX), "offsetY" in t && n(1, u = t.offsetY), "strokeWidth" in t && n(2, f = t.strokeWidth), "visible" in t && n(3, d = t.visible), "color" in t && n(4, h = t.color), "onClose" in t && n(6, g = t.onClose), "onChange" in t && n(33, p = t.onChange), "removeDraggable" in t && n(34, v = t.removeDraggable), "renderContextMenu" in t && n(7, m = t.renderContextMenu), "text" in t && n(8, y = t.text), "align" in t && n(9, x = t.align), "valign" in t && n(10, b = t.valign), "outline" in t && n(11, $ = t.outline), "infoBox" in t && n(12, w = t.infoBox), "textWidth" in t && n(5, _ = t.textWidth) }, t.$$.update = () => { 3 & t.$$.dirty[1] && n(18, i = [s, l - 25]), 3 & t.$$.dirty[1] && n(17, r = [s + 46, l - 25]) }, [c, u, f, d, h, _, g, m, y, x, b, $, w, o, k, M, S, r, i, function(t) { p(a, { text: t.target.value }) }, function(t) { n(15, M = !0) }, function(t) { p(a, { align: t }) }, function(t) { p(a, { valign: t }) }, function(t) { const e = t.target.parentElement.dataset.tag;! function(t, e, n) { if (document.selection) t.focus(), document.selection.createRange().text = e + document.selection.createRange().text + n;
                else if (void 0 !== t.selectionStart && void 0 !== t.selectionEnd) { var i = t.selectionStart,
                        r = t.selectionEnd;
                    t.value = t.value.substring(0, i) + e + t.value.substring(i, r) + n + t.value.substring(r, t.value.length) } t.dispatchEvent(new Event("change")), t.dispatchEvent(new Event("keyup")) }(o, `<${e}>`, `</${e}>`) }, function() { n(14, k = !0) }, function(t) { const e = {},
                n = t.target.attributes.variable.value;
            e[n] = t.target.value, t.target.attributes.type && "number" === t.target.attributes.type.value && (e[n] = Number(t.target.value)), p(a, e) }, function(t) { n(3, d = !d), p(a, { visible: d }) }, function() { n(16, S = !0) }, function() { g(), v(a) }, function(t) { const e = {};
            e[t.target.attributes.name.value] = t.target.checked, p(a, e) }, a, s, l, p, v, function(t) { tS[t ? "unshift" : "push"]((() => { o = t, n(13, o) })) }, function() { _ = YM(this.value), n(5, _) }, function() { c = YM(this.value), n(0, c) }, function() { u = YM(this.value), n(1, u) }, function() { h = this.value, n(4, h) }, function() { f = YM(this.value), n(2, f) }] } class RY extends _S { constructor(t) { super(), wS(this, t, WY, YY, pM, { id: 30, x: 31, y: 32, offsetX: 0, offsetY: 1, strokeWidth: 2, visible: 3, color: 4, onClose: 6, onChange: 33, removeDraggable: 34, renderContextMenu: 7, text: 8, align: 9, valign: 10, outline: 11, infoBox: 12, textWidth: 5 }, CY, [-1, -1]) } get id() { return this.$$.ctx[30] } set id(t) { this.$$set({ id: t }), lS() } get x() { return this.$$.ctx[31] } set x(t) { this.$$set({ x: t }), lS() } get y() { return this.$$.ctx[32] } set y(t) { this.$$set({ y: t }), lS() } get offsetX() { return this.$$.ctx[0] } set offsetX(t) { this.$$set({ offsetX: t }), lS() } get offsetY() { return this.$$.ctx[1] } set offsetY(t) { this.$$set({ offsetY: t }), lS() } get strokeWidth() { return this.$$.ctx[2] } set strokeWidth(t) { this.$$set({ strokeWidth: t }), lS() } get visible() { return this.$$.ctx[3] } set visible(t) { this.$$set({ visible: t }), lS() } get color() { return this.$$.ctx[4] } set color(t) { this.$$set({ color: t }), lS() } get onClose() { return this.$$.ctx[6] } set onClose(t) { this.$$set({ onClose: t }), lS() } get onChange() { return this.$$.ctx[33] } set onChange(t) { this.$$set({ onChange: t }), lS() } get removeDraggable() { return this.$$.ctx[34] } set removeDraggable(t) { this.$$set({ removeDraggable: t }), lS() } get renderContextMenu() { return this.$$.ctx[7] } set renderContextMenu(t) { this.$$set({ renderContextMenu: t }), lS() } get text() { return this.$$.ctx[8] } set text(t) { this.$$set({ text: t }), lS() } get align() { return this.$$.ctx[9] } set align(t) { this.$$set({ align: t }), lS() } get valign() { return this.$$.ctx[10] } set valign(t) { this.$$set({ valign: t }), lS() } get outline() { return this.$$.ctx[11] } set outline(t) { this.$$set({ outline: t }), lS() } get infoBox() { return this.$$.ctx[12] } set infoBox(t) { this.$$set({ infoBox: t }), lS() } get textWidth() { return this.$$.ctx[5] } set textWidth(t) { this.$$set({ textWidth: t }), lS() } }

    function NY(t) { SM(t, "svelte-1us80jd", ".dialog.svelte-1us80jd{padding-bottom:30px}button.delete.svelte-1us80jd{position:absolute;right:5px;border-color:red;color:red;box-shadow:1px 1px red}button.delete.svelte-1us80jd:hover{background:red;color:white}") }

    function HY(t, e, n) { const i = t.slice(); return i[16] = e[n], i }

    function jY(t) { let e, n, i, r, o, a, s, l, c, u, f;
        r = new XB({ props: { id: t[2], handleClass: "dialog", color: "transparent", handleHeight: 8, handleWidth: 200, x: 100, y: -6, active: !0, onChange: t[13] } }); let d = t[5],
            h = []; for (let e = 0; e < d.length; e += 1) h[e] = IY(HY(t, d, e)); return { c() { e = EM("div"), n = EM("button"), n.textContent = "X", i = PM(), yS(r.$$.fragment), o = PM(); for (let t = 0; t < h.length; t += 1) h[t].c();
                a = PM(), s = EM("div"), l = EM("button"), l.textContent = "Delete", zM(n, "class", "closer"), zM(l, "class", "delete svelte-1us80jd"), zM(e, "class", "dialog svelte-1us80jd"), RM(e, "top", t[0][1] + "px"), RM(e, "left", t[0][0] + "px") }, m(d, g) { AM(d, e, g), MM(e, n), MM(e, i), xS(r, e, null), MM(e, o); for (let t = 0; t < h.length; t += 1) h[t].m(e, null);
                MM(e, a), MM(e, s), MM(s, l), c = !0, u || (f = [LM(n, "click", (function() { gM(t[7]) && t[7].apply(this, arguments) })), LM(l, "click", t[12])], u = !0) }, p(n, i) { t = n; const o = {}; if (4 & i && (o.id = t[2]), r.$set(o), 608 & i) { let n; for (d = t[5], n = 0; n < d.length; n += 1) { const r = HY(t, d, n);
                        h[n] ? h[n].p(r, i) : (h[n] = IY(r), h[n].c(), h[n].m(e, a)) } for (; n < h.length; n += 1) h[n].d(1);
                    h.length = d.length }(!c || 1 & i) && RM(e, "top", t[0][1] + "px"), (!c || 1 & i) && RM(e, "left", t[0][0] + "px") }, i(t) { c || (gS(r.$$.fragment, t), c = !0) }, o(t) { pS(r.$$.fragment, t), c = !1 }, d(t) { t && DM(e), bS(r), CM(h, t), u = !1, hM(f) } } }

    function IY(t) { let e, n, i, r, o, a, s, l, c, u = t[16].name + ""; return { c() { e = EM("div"), n = TM(u), i = TM(":\n        "), r = EM("input"), zM(r, "type", o = t[16].type), r.value = a = t[6][t[16].name], zM(r, "variable", s = t[16].name) }, m(o, a) { AM(o, e, a), MM(e, n), MM(e, i), MM(e, r), l || (c = [LM(r, "keyup", t[9]), LM(r, "change", t[9])], l = !0) }, p(t, e) { 32 & e && u !== (u = t[16].name + "") && FM(n, u), 32 & e && o !== (o = t[16].type) && zM(r, "type", o), 96 & e && a !== (a = t[6][t[16].name]) && r.value !== a && (r.value = a), 32 & e && s !== (s = t[16].name) && zM(r, "variable", s) }, d(t) { t && DM(e), l = !1, hM(c) } } }

    function VY(t) { let e, n, i, r, o, a, s, l, c, u, f = t[1] ? "Hide" : "Show",
            d = t[8] && jY(t); return { c() { e = EM("button"), n = TM(f), i = PM(), r = EM("button"), o = TM("..."), a = PM(), d && d.c(), s = BM(), zM(e, "class", "bar-button"), RM(e, "top", t[4] - 25 + "px"), RM(e, "left", t[3] + "px"), zM(r, "class", "bar-button"), RM(r, "top", t[4] - 25 + "px"), RM(r, "left", t[3] + 44 + "px") }, m(f, h) { AM(f, e, h), MM(e, n), AM(f, i, h), AM(f, r, h), MM(r, o), AM(f, a, h), d && d.m(f, h), AM(f, s, h), l = !0, c || (u = [LM(e, "click", t[10]), LM(r, "click", t[11])], c = !0) }, p(t, [i]) {
                (!l || 2 & i) && f !== (f = t[1] ? "Hide" : "Show") && FM(n, f), (!l || 16 & i) && RM(e, "top", t[4] - 25 + "px"), (!l || 8 & i) && RM(e, "left", t[3] + "px"), (!l || 16 & i) && RM(r, "top", t[4] - 25 + "px"), (!l || 8 & i) && RM(r, "left", t[3] + 44 + "px"), t[8] ? d ? (d.p(t, i), 256 & i && gS(d, 1)) : (d = jY(t), d.c(), gS(d, 1), d.m(s.parentNode, s)) : d && (dS(), pS(d, 1, 1, (() => { d = null })), hS()) }, i(t) { l || (gS(d), l = !0) }, o(t) { pS(d), l = !1 }, d(t) { t && DM(e), t && DM(i), t && DM(r), t && DM(a), d && d.d(t), t && DM(s), c = !1, hM(u) } } }

    function UY(t, e, n) { let { id: i } = e, { x: r = 0 } = e, { y: o = 0 } = e, { editProperties: a = [] } = e, { editFields: s = {} } = e, { onClose: l } = e, { onChange: c } = e, { removeDraggable: u } = e, { dialogPosition: f } = e, { visible: d = !0 } = e, h = !1; return t.$$set = t => { "id" in t && n(2, i = t.id), "x" in t && n(3, r = t.x), "y" in t && n(4, o = t.y), "editProperties" in t && n(5, a = t.editProperties), "editFields" in t && n(6, s = t.editFields), "onClose" in t && n(7, l = t.onClose), "onChange" in t && n(14, c = t.onChange), "removeDraggable" in t && n(15, u = t.removeDraggable), "dialogPosition" in t && n(0, f = t.dialogPosition), "visible" in t && n(1, d = t.visible) }, [f, d, i, r, o, a, s, l, h, function(t) { const e = {},
                n = t.target.attributes.variable.value;
            e[n] = t.target.value, t.target.attributes.type && "number" === t.target.attributes.type.value && (e[n] = Number(t.target.value)), c(i, e) }, function(t) { n(1, d = !d), c(i, { visible: d }) }, function() { n(8, h = !0) }, function() { l(), u(i) }, function(t) { n(0, f = [f[0] + t.x - 100, f[1] + t.y]) }, c, u] } class XY extends _S { constructor(t) { super(), wS(this, t, UY, VY, pM, { id: 2, x: 3, y: 4, editProperties: 5, editFields: 6, onClose: 7, onChange: 14, removeDraggable: 15, dialogPosition: 0, visible: 1 }, NY) } get id() { return this.$$.ctx[2] } set id(t) { this.$$set({ id: t }), lS() } get x() { return this.$$.ctx[3] } set x(t) { this.$$set({ x: t }), lS() } get y() { return this.$$.ctx[4] } set y(t) { this.$$set({ y: t }), lS() } get editProperties() { return this.$$.ctx[5] } set editProperties(t) { this.$$set({ editProperties: t }), lS() } get editFields() { return this.$$.ctx[6] } set editFields(t) { this.$$set({ editFields: t }), lS() } get onClose() { return this.$$.ctx[7] } set onClose(t) { this.$$set({ onClose: t }), lS() } get onChange() { return this.$$.ctx[14] } set onChange(t) { this.$$set({ onChange: t }), lS() } get removeDraggable() { return this.$$.ctx[15] } set removeDraggable(t) { this.$$set({ removeDraggable: t }), lS() } get dialogPosition() { return this.$$.ctx[0] } set dialogPosition(t) { this.$$set({ dialogPosition: t }), lS() } get visible() { return this.$$.ctx[1] } set visible(t) { this.$$set({ visible: t }), lS() } } const qY = { id: "advancedCollection", type: "collection", title: "Select a Draggable Label Type to Add .", items: [Az, { type: "collection", title: "Icons and Icon Labels", description: "Add an icon to represent a map feature or a labeled place. You can choose icon types and colors.", warning: "<b><i>Please adhere to the style guide:</i></b> <br><b>Only</b> use colors when you need to separate groups of icons into discrete buckets.<br> <b>Only</b> use a larger icon size when you need to highlight one feature out of many.", variations: { iconColor: !0, iconSize: !0 }, previewItem: { type: "icon", text: "Feature Label", iconText: "●", outline: !0, align: "center", offsetX: 0, x: .5, y: .4 }, items: [{ preset: "dot", type: "icon", iconText: "●", align: "left", valign: "top", offsetX: 0, iconSize: 14, x: .5, y: .4, _info: "Base circle icon" }, { preset: "square", type: "icon", iconText: "■", align: "left", valign: "top", offsetX: 0, iconSize: 14, x: .5, y: .4, _info: "Alternate square icon" }, { preset: "dot", type: "icon", text: "Cityname", iconText: "●", align: "center", valign: "top", offsetX: 0, iconSize: 14, outline: !0, x: .5, y: .4, _info: "Base circle icon with label", _typeVariations: "icon" }, { preset: "square", type: "icon", text: "Cityname", iconText: "■", align: "center", valign: "top", offsetX: 0, iconSize: 14, outline: !0, x: .5, y: .4, _info: "Alternate square icon with label", _typeVariations: "icon" }, { preset: "star", type: "icon", text: "Cityname", iconText: "★", align: "center", valign: "top", offsetX: 0, iconSize: 14, outline: !0, x: .5, y: .4, _info: "Alternate star icon with label", _typeVariations: "icon" }, { preset: "city", type: "icon", text: "<b>Albany</b>", iconNamedSVG: "capitol", align: "center", valign: "top", outline: !0, offsetX: 0, iconSize: 14, x: .5, y: .4, _info: "Capitol City Label", _warn: "Please only use to denote a capitol city - please use bold text for capitol cities.", _typeVariations: "bold" }, { preset: "explosion", type: "icon", iconText: "💥", align: "left", valign: "top", offsetX: 0, iconSize: 20, x: .5, y: .4, _info: "Explosion Icon", _warn: "Please only use to denote an explosion" }, { preset: "explosion", type: "icon", iconText: "💥", text: "Location", align: "center", valign: "top", outline: !0, offsetX: 0, iconSize: 20, x: .5, y: .4, _info: "Explosion Icon With Label", _warn: "Please only use to denote an explosion", _typeVariations: "icon" }, { preset: "fire", type: "icon", iconText: "🔥", align: "center", valign: "top", offsetX: 0, iconSize: 20, x: .5, y: .4, _info: "Fire Icon", _warn: "Please only use to denote a fire" }, { preset: "fire", type: "icon", iconText: "🔥", align: "center", valign: "top", text: "Location", outline: !0, offsetX: 0, iconSize: 20, x: .5, y: .4, _info: "Fire Icon With Label", _warn: "Please only use to denote a fire", _typeVariations: "icon" }, { preset: "epicenter", type: "icon", iconNamedSVG: "earthquake", align: "left", valign: "top", offsetX: 0, iconSize: 14, x: .5, y: .4, _info: "Epicenter Icon", _warn: "Please only use to denote an epicenter" }, { preset: "epicenter", type: "icon", iconNamedSVG: "earthquake", align: "center", valign: "top", text: "Location", outline: !0, offsetX: 0, iconSize: 14, x: .5, y: .4, _info: "Epicenter Icon With Label", _warn: "Please only use to denote an epicenter", _typeVariations: "icon" }] }, { id: "lineCollection", type: "collection", title: "Callout Lines", description: "A collection of lines and angled lines for regions that are too small to enclose text or to provide underlying detail or numbers.", warning: "<b><i>Please adhere to the style guide:</i></b> <br><b>Only</b> use these callout lines to display facts or locations, any commentary should be reserved for swoopy arrow labels.", previewItem: { type: "line", text: "Nova<br>Scotia", outline: !0, align: "left", x: .1, y: .2, x2: 30, y2: 0 }, items: [{ preset: "line-left", type: "line", text: "Nova<br>Scotia", outline: !0, align: "left", valign: "top", lineStyle: "horizontal", x: .1, y: .2, x2: 30, y2: 0, _info: "Basic line to the left", _typeVariations: "line", _variations: { valign: !0 } }, { preset: "line-right", type: "line", text: "Nova<br>Scotia", outline: !0, align: "right", valign: "top", lineStyle: "horizontal", x: .8, y: .2, x2: -30, y2: 0, _info: "Basic line to the right", _typeVariations: "line", _variations: { valign: !0 } }, { preset: "line-top", type: "line", text: "Nova<br>Scotia", outline: !0, align: "left", valign: "top", lineStyle: "vertical", x: .4, y: .1, x2: 0, y2: 30, _info: "Basic line above", _typeVariations: "line", _variations: { align: !0 } }, { preset: "line-bottom", type: "line", text: "Nova<br>Scotia", outline: !0, align: "right", valign: "bottom", lineStyle: "vertical", x: .8, y: .8, x2: 0, y2: -30, _info: "Basic line below", _typeVariations: "line", _variations: { align: !0 } }, { preset: "line-top-left", type: "linebend", text: "Nova<br>Scotia", outline: !0, align: "left", lineStyle: "vertical", x: .2, y: .1, x2: 20, y2: 0, x3: 20, y3: 30, _info: "Angled Line Top Left", _typeVariations: "line", _variations: { align: !0 } }, { preset: "line-left-up", type: "linebend", text: "Nova<br>Scotia", outline: !0, align: "left", lineStyle: "horizontal", x: .2, y: .1, x2: 0, y2: 20, x3: 30, y3: 20, _info: "Angled Line Left Top", _typeVariations: "line", _variations: { valign: !0 } }, { preset: "line-top-right", type: "linebend", text: "Nova<br>Scotia", outline: !0, align: "right", lineStyle: "vertical", x: .8, y: .1, x2: -20, y2: 0, x3: -20, y3: 30, _info: "Angled Line Top Right", _typeVariations: "line", _variations: { align: !0 } }, { preset: "line-right-up", type: "linebend", text: "Nova<br>Scotia", outline: !0, align: "right", lineStyle: "horizontal", x: .8, y: .1, x2: 0, y2: 20, x3: -30, y3: 20, _info: "Angled Line Right Top", _typeVariations: "line", _variations: { valign: !0 } }, { preset: "line-bottom-left", type: "linebend", text: "Nova<br>Scotia", outline: !0, align: "left", valign: "bottom", lineStyle: "vertical", x: .1, y: .7, x2: 20, y2: 0, x3: 20, y3: -30, _info: "Angled Line Bottom Left", _typeVariations: "line", _variations: { align: !0 } }, { preset: "line-left-down", type: "linebend", text: "Nova<br>Scotia", outline: !0, align: "left", valign: "bottom", lineStyle: "horizontal", x: .1, y: .7, x2: 0, y2: -20, x3: 30, y3: -20, _info: "Angled Line Left Bottom", _typeVariations: "line", _variations: { valign: !0 } }, { preset: "line-bottom-right", type: "linebend", text: "Nova<br>Scotia", outline: !0, align: "right", valign: "bottom", lineStyle: "vertical", x: .8, y: .6, x2: -20, y2: 0, x3: -20, y3: -30, _info: "Angled Line Bottom Right", _typeVariations: "line", _variations: { align: !0 } }, { preset: "line-right-down", type: "linebend", text: "Nova<br>Scotia", outline: !0, align: "right", valign: "bottom", lineStyle: "horizontal", x: .8, y: .6, x2: 0, y2: -20, x3: -30, y3: -20, _info: "Angled Line Right Bottom", _typeVariations: "line", _variations: { valign: !0 } }, { preset: "line-diagonal-left-top", type: "line", text: "Nova<br>Scotia", outline: !0, align: "left", lineStyle: "diagonal", x: .1, y: .1, x2: 20, y2: 20, _info: "Diagonal Line Left Top", _typeVariations: "line", _variations: {} }, { preset: "line-diagonal-right-top", type: "line", text: "Nova<br>Scotia", outline: !0, align: "right", valign: "top", lineStyle: "diagonal", x: .8, y: .1, x2: -20, y2: 20, _info: "Diagonal Line Right Top", _typeVariations: "line", _variations: {} }, { preset: "line-diagonal-left-bottom", type: "line", text: "Nova<br>Scotia", outline: !0, align: "left", valign: "bottom", lineStyle: "diagonal", x: .1, y: .8, x2: 20, y2: -20, _info: "Diagonal Line Left Bottom", _typeVariations: "line", _variations: {} }, { preset: "line-diagonal-right-bottom", type: "line", text: "Nova<br>Scotia", outline: !0, align: "right", valign: "bottom", lineStyle: "diagonal", x: .8, y: .6, x2: -20, y2: -20, _info: "Diagonal Line Right Bottom", _typeVariations: "line", _variations: {} }] }, { id: "arrowCollection", type: "collection", title: "Context Arrows", description: "A collection of arrows for adding contextual information to a feature or region. Use lines for details and names, and leave the arrows for additional commentary.", warning: "<b><i>Please adhere to the style guide:</i></b> <br><b>Only</b> use these callout lines to display facts or locations, any commentary should be reserved for swoopy arrow labels.", previewItem: { type: "arrow", text: "Honda's Swindon plant will fully close in 2021", outline: !0, textWidth: 125, align: "center", valign: "top", arrowStyle: "twoHandle", lineStyle: "vertical", offsetX: 0, offsetY: 0, x: .7, y: .1, x2: -10, y2: 4, x3: -20, y3: 20 }, items: [{ preset: "arrow-top-left", type: "arrow", text: "Honda's Swindon plant will fully close in 2021", outline: !0, align: "center", valign: "top", lineStyle: "vertical", arrowStyle: "twoHandle", textWidth: 125, offsetX: 0, offsetY: 0, x: .3, y: .1, x2: 18, y2: 10, x3: 20, y3: 20, _info: "Arrow Top Left" }, { preset: "arrow-top-right", type: "arrow", text: "Honda's Swindon plant will fully close in 2021", outline: !0, align: "center", valign: "top", arrowStyle: "twoHandle", lineStyle: "vertical", textWidth: 125, offsetX: 0, offsetY: 0, x: .7, y: .1, x2: -10, y2: 4, x3: -20, y3: 20, _info: "Arrow Top Right" }, { preset: "arrow-bottom-left", type: "arrow", text: "Honda's Swindon plant will fully close in 2021", outline: !0, align: "center", valign: "bottom", arrowStyle: "twoHandle", lineStyle: "vertical", textWidth: 125, offsetX: 0, offsetY: 0, x: .3, y: .8, x2: 10, y2: -4, x3: 20, y3: -20, _info: "Arrow Bottom Left" }, { preset: "arrow-bottom-right", type: "arrow", text: "Honda's Swindon plant will fully close in 2021", outline: !0, align: "center", valign: "bottom", arrowStyle: "twoHandle", lineStyle: "vertical", textWidth: 125, offsetX: 0, offsetY: 0, x: .7, y: .8, x2: -10, y2: -4, x3: -20, y3: -20, _info: "Arrow Bottom Right" }, { preset: "arrow-left", type: "arrow", text: "Honda's Swindon plant will fully close in 2021", outline: !0, align: "center", valign: "center", arrowStyle: "twoHandle", lineStyle: "horizontal", textWidth: 100, offsetX: 48, offsetY: -5, x: .1, y: .3, x2: 20, y2: 14, x3: 30, y3: 16, _info: "Arrow Left Side", _warn: "If using a side arrow manually position so that it is close to the text edge" }, { preset: "arrow-right", type: "arrow", text: "Honda's Swindon plant will fully close in 2021", outline: !0, align: "center", valign: "center", textWidth: 100, arrowStyle: "twoHandle", lineStyle: "horizontal", offsetX: -48, offsetY: -5, x: .9, y: .3, x2: -20, y2: 14, x3: -30, y3: 16, _info: "Arrow Right Side", _warn: "If using a side arrow manually position so that it is close to the text edge" }] }, { type: "collection", title: "Shapes", description: "A collection of arrows for adding contextual information to a feature or region. Use lines for details and names, and leave the arrows for additional commentary.", roles: ["advanced"], previewItem: { type: "circle", color: "var(--text)", fill: "blue", radius: 15, x: .5, y: .4 }, items: [{ type: "circle", radius: 25, x: .5, y: .4, _info: "Basic Circle" }, { type: "circle", text: "Circle With Text", radius: 20, align: "center", valign: "bottom", stroke: "black", x: .5, y: .4, _info: "Circle With Text" }] }, { type: "collection", title: "Custom Media: Images, SVG", description: "A collection of arrows for adding contextual information to a feature or region. Use lines for details and names, and leave the arrows for additional commentary.", roles: ["advanced"], previewItem: { type: "circle", color: "var(--text)", radius: 15, x: .5, y: .4 }, items: [{ type: "text", text: "Single Line label", align: "left", outline: !0, x: 0, y: 0, _type: "text" }] }] };

    function GY(t) { SM(t, "svelte-10olnkm", '.editor-wrapper, .editor-wrapper div, .editor-wrapper button, .editor-wrapper textarea{font-family:"BWHaasDingbat", "BWHaasText", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:12px}.editor-wrapper button{display:inline-block;border:1px solid #eeeeee;cursor:pointer;background:var(--bg);border-radius:3px;box-shadow:1px 1px 3px rgba(58, 115, 254, 0.3  )}.editor-wrapper button.flat{color:#3b73ff;box-shadow:none;border-color:transparent}.editor-wrapper button.icon svg{width:16px;height:16px}.editor-wrapper button:hover, .editor-wrapper button.bar-button:hover{background:#3b73ff;border-color:#3b73ff;color:white}.menu-bar.svelte-10olnkm.svelte-10olnkm{font-size:12px;position:absolute;right:5px;top:5px}.editor-wrapper.svelte-10olnkm.svelte-10olnkm{position:absolute;top:0;left:0;z-index:100;width:100%}div.svelte-10olnkm button.svelte-10olnkm{display:inline-block;font-size:12px}.editor-wrapper button.bar-button{background:var(--bg);border-color:#3a73ff;color:#3a73ff}') } const ZY = t => ({}),
        QY = t => ({});

    function KY(t) { let e, n, i, r, o, a; return { c() { e = EM("div"), n = EM("button"), n.textContent = "Add Draggable", i = PM(), r = EM("button"), r.textContent = "...", zM(n, "class", "bar-button svelte-10olnkm"), zM(r, "class", "bar-button svelte-10olnkm"), zM(e, "class", "menu-bar svelte-10olnkm") }, m(s, l) { AM(s, e, l), MM(e, n), MM(e, i), MM(e, r), o || (a = [LM(n, "click", t[12]), LM(r, "click", t[29])], o = !0) }, p: cM, d(t) { t && DM(e), o = !1, hM(a) } } }

    function JY(t) { let e, n; return e = new vY({ props: { onComplete: t[28], scale: t[6], containerWidth: t[1], collection: t[8], options: t[2] } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                268435456 & n[0] && (i.onComplete = t[28]), 64 & n[0] && (i.scale = t[6]), 2 & n[0] && (i.containerWidth = t[1]), 256 & n[0] && (i.collection = t[8]), 4 & n[0] && (i.options = t[2]), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function tF(t) { let e, n; return e = new bY({ props: { draggable: t[24], placementMode: t[15], editorTarget: t[26], draggablesTarget: t[4], onComplete: t[27], scale: t[6], containerWidth: t[1], placementMessage: t[7], collection: t[8], addDraggable: t[3], options: t[2] } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                16777216 & n[0] && (i.draggable = t[24]), 32768 & n[0] && (i.placementMode = t[15]), 67108864 & n[0] && (i.editorTarget = t[26]), 16 & n[0] && (i.draggablesTarget = t[4]), 134217728 & n[0] && (i.onComplete = t[27]), 64 & n[0] && (i.scale = t[6]), 2 & n[0] && (i.containerWidth = t[1]), 128 & n[0] && (i.placementMessage = t[7]), 256 & n[0] && (i.collection = t[8]), 8 & n[0] && (i.addDraggable = t[3]), 4 & n[0] && (i.options = t[2]), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function eF(t) { let e, n; return e = new DY({ props: { draggablesComponent: t[5], closeOptions: t[30], options: t[2] } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                32 & n[0] && (i.draggablesComponent = t[5]), 4 & n[0] && (i.options = t[2]), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function nF(t) { let e, n; return e = new XY({ props: { id: t[18].id, x: t[19][0], y: t[19][1], dialogPosition: t[21], visible: t[18].visible, onChange: t[22], onClose: t[25], active: "true", editProperties: t[20], editFields: t[18], removeDraggable: t[23], showAdvancedFields: t[9] } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                262144 & n[0] && (i.id = t[18].id), 524288 & n[0] && (i.x = t[19][0]), 524288 & n[0] && (i.y = t[19][1]), 2097152 & n[0] && (i.dialogPosition = t[21]), 262144 & n[0] && (i.visible = t[18].visible), 4194304 & n[0] && (i.onChange = t[22]), 33554432 & n[0] && (i.onClose = t[25]), 1048576 & n[0] && (i.editProperties = t[20]), 262144 & n[0] && (i.editFields = t[18]), 8388608 & n[0] && (i.removeDraggable = t[23]), 512 & n[0] && (i.showAdvancedFields = t[9]), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function iF(t) { let e, n; return e = new RY({ props: { id: t[18].id, x: t[19][0], y: t[19][1], dialogPosition: t[21], visible: t[18].visible, text: t[18].text, align: t[18].align, valign: t[18].valign, color: t[18].color, outline: t[18].outline, infoBox: t[18].infoBox, textWidth: t[18].textWidth, onChange: t[22], onClose: t[25], active: "true", renderContextMenu: t[11], removeDraggable: t[23], showAdvancedFields: t[9] } }), { c() { yS(e.$$.fragment) }, m(t, i) { xS(e, t, i), n = !0 }, p(t, n) { const i = {};
                262144 & n[0] && (i.id = t[18].id), 524288 & n[0] && (i.x = t[19][0]), 524288 & n[0] && (i.y = t[19][1]), 2097152 & n[0] && (i.dialogPosition = t[21]), 262144 & n[0] && (i.visible = t[18].visible), 262144 & n[0] && (i.text = t[18].text), 262144 & n[0] && (i.align = t[18].align), 262144 & n[0] && (i.valign = t[18].valign), 262144 & n[0] && (i.color = t[18].color), 262144 & n[0] && (i.outline = t[18].outline), 262144 & n[0] && (i.infoBox = t[18].infoBox), 262144 & n[0] && (i.textWidth = t[18].textWidth), 4194304 & n[0] && (i.onChange = t[22]), 33554432 & n[0] && (i.onClose = t[25]), 2048 & n[0] && (i.renderContextMenu = t[11]), 8388608 & n[0] && (i.removeDraggable = t[23]), 512 & n[0] && (i.showAdvancedFields = t[9]), e.$set(i) }, i(t) { n || (gS(e.$$.fragment, t), n = !0) }, o(t) { pS(e.$$.fragment, t), n = !1 }, d(t) { bS(e, t) } } }

    function rF(t) { let e, n, i, r, o, a, s, l, c = t[10] && KY(t),
            u = t[14] && JY(t),
            f = t[15] && tF(t),
            d = t[13] && eF(t),
            h = t[17] && nF(t),
            g = t[16] && iF(t); const p = t[43].content,
            v = mM(p, t, t[42], QY); return { c() { e = EM("div"), c && c.c(), n = PM(), u && u.c(), i = PM(), f && f.c(), r = PM(), d && d.c(), o = PM(), h && h.c(), a = PM(), g && g.c(), s = PM(), v && v.c(), zM(e, "class", "editor-wrapper svelte-10olnkm") }, m(p, m) { AM(p, e, m), c && c.m(e, null), MM(e, n), u && u.m(e, null), MM(e, i), f && f.m(e, null), MM(e, r), d && d.m(e, null), MM(e, o), h && h.m(e, null), MM(e, a), g && g.m(e, null), MM(e, s), v && v.m(e, null), t[44](e), l = !0 }, p(t, m) { t[10] ? c ? c.p(t, m) : (c = KY(t), c.c(), c.m(e, n)) : c && (c.d(1), c = null), t[14] ? u ? (u.p(t, m), 16384 & m[0] && gS(u, 1)) : (u = JY(t), u.c(), gS(u, 1), u.m(e, i)) : u && (dS(), pS(u, 1, 1, (() => { u = null })), hS()), t[15] ? f ? (f.p(t, m), 32768 & m[0] && gS(f, 1)) : (f = tF(t), f.c(), gS(f, 1), f.m(e, r)) : f && (dS(), pS(f, 1, 1, (() => { f = null })), hS()), t[13] ? d ? (d.p(t, m), 8192 & m[0] && gS(d, 1)) : (d = eF(t), d.c(), gS(d, 1), d.m(e, o)) : d && (dS(), pS(d, 1, 1, (() => { d = null })), hS()), t[17] ? h ? (h.p(t, m), 131072 & m[0] && gS(h, 1)) : (h = nF(t), h.c(), gS(h, 1), h.m(e, a)) : h && (dS(), pS(h, 1, 1, (() => { h = null })), hS()), t[16] ? g ? (g.p(t, m), 65536 & m[0] && gS(g, 1)) : (g = iF(t), g.c(), gS(g, 1), g.m(e, s)) : g && (dS(), pS(g, 1, 1, (() => { g = null })), hS()), v && v.p && (!l || 2048 & m[1]) && bM(v, p, t, t[42], l ? xM(p, t[42], m, ZY) : $M(t[42]), QY) }, i(t) { l || (gS(u), gS(f), gS(d), gS(h), gS(g), gS(v, t), l = !0) }, o(t) { pS(u), pS(f), pS(d), pS(h), pS(g), pS(v, t), l = !1 }, d(n) { n && DM(e), c && c.d(), u && u.d(), f && f.d(), d && d.d(), h && h.d(), g && g.d(), v && v.d(n), t[44](null) } } }

    function oF(t, e, n) { let i, r, o, a, s, l, c, u, f, d, h, { $$slots: g = {}, $$scope: p } = e,
            { addDraggable: v } = e,
            { updateOptions: m } = e,
            { draggablesTarget: y } = e,
            { draggablesComponent: x } = e,
            { domNode: b } = e,
            { placementTarget: $ } = e,
            { scale: w } = e,
            { containerWidth: _ } = e,
            { placementMessage: k } = e,
            { collection: M = qY } = e,
            { showAdvancedFields: S = !1 } = e,
            { placementAfterSelect: A = !0 } = e,
            { renderEditorBar: D = !0 } = e,
            { renderContextMenu: C = !0 } = e,
            { options: E = {} } = e,
            O = !1,
            T = !1,
            P = !1,
            B = !1,
            L = !1,
            z = () => "yo";

        function Y(t) { n(14, T = !1), t && A && (n(15, P = !0), n(24, d = t)) }

        function F(t) { n(15, P = !1) }

        function W(t) { n(27, r = e => { F(), t && t(e), n(27, r = F) }) } return t.$$set = t => { "addDraggable" in t && n(3, v = t.addDraggable), "updateOptions" in t && n(31, m = t.updateOptions), "draggablesTarget" in t && n(4, y = t.draggablesTarget), "draggablesComponent" in t && n(5, x = t.draggablesComponent), "domNode" in t && n(0, b = t.domNode), "placementTarget" in t && n(32, $ = t.placementTarget), "scale" in t && n(6, w = t.scale), "containerWidth" in t && n(1, _ = t.containerWidth), "placementMessage" in t && n(7, k = t.placementMessage), "collection" in t && n(8, M = t.collection), "showAdvancedFields" in t && n(9, S = t.showAdvancedFields), "placementAfterSelect" in t && n(33, A = t.placementAfterSelect), "renderEditorBar" in t && n(10, D = t.renderEditorBar), "renderContextMenu" in t && n(11, C = t.renderContextMenu), "options" in t && n(2, E = t.options), "$$scope" in t && n(42, p = t.$$scope) }, t.$$.update = () => { 1 & t.$$.dirty[0] | 2 & t.$$.dirty[1] && n(26, o = $ || b) }, n(28, i = Y), n(27, r = F), [b, _, E, v, y, x, w, k, M, S, D, C, function(t) { n(14, T = !0), t && W(t) }, O, T, P, B, L, a, s, l, c, u, f, d, z, o, r, i, function() { n(13, O = !0) }, function(t) { Object.keys(t).forEach((e => { n(2, E[e] = t[e], E) })), n(13, O = !1), m(E) }, m, $, A, function(t, e) { n(14, T = !1), n(15, P = !0), n(24, d = t), e && W(e) }, function() { n(15, P = !1) }, function(t, e) { n(14, T = !0),
                function(t) { n(28, i = e => { Y(e), t && t(e), n(28, i = Y) }) }(e) }, function(t, e, i, r, o) { B && z(), L && z(), n(18, a = t), n(22, u = e), n(23, f = i), n(16, B = !0), n(19, s = o), n(21, c = o), c[1] > window.innerHeight - 300 && n(21, c = [0, 0]), n(25, z = () => { n(16, B = !1), r() }) }, function(t, e, i, r, o, d) { B && z(), L && z(), n(20, l = t), n(18, a = e), n(22, u = i), n(23, f = r), n(17, L = !0), n(19, s = d), n(21, c = d), c[1] > window.innerHeight - 300 && n(21, c = [0, 0]), n(25, z = () => { n(17, L = !1), o() }) }, function(t) { Object.keys(t).forEach((e => { n(18, a[e] = t[e], a) })) }, function(t, e) { document.removeEventListener("click", h), h = e => { 0 === e.path.filter((e => e === b || e === t)).length && z && z() }, document.addEventListener("click", h) }, function() { setTimeout((function() { n(1, _ = y.offsetWidth); const t = y.getBoundingClientRect(),
                    e = { top: 0, left: 0, right: 0, bottom: 0 };
                y.querySelectorAll(".draggable .text").forEach((n => { const i = n.getBoundingClientRect();
                    e.top = Math.min(e.top, i.top - t.top), e.left = Math.min(e.left, i.left - t.left), e.right = Math.max(e.right, i.right - t.left), e.bottom = Math.max(e.bottom, i.bottom - t.top) })); const i = PB(_, E.breakpoints, !1);
                i && (i.bounds = e), m(E) }), 50) }, p, g, function(t) { tS[t ? "unshift" : "push"]((() => { b = t, n(0, b) })) }] } class aF extends _S { constructor(t) { super(), wS(this, t, oF, rF, pM, { addDraggable: 3, updateOptions: 31, draggablesTarget: 4, draggablesComponent: 5, domNode: 0, placementTarget: 32, scale: 6, containerWidth: 1, placementMessage: 7, collection: 8, showAdvancedFields: 9, placementAfterSelect: 33, renderEditorBar: 10, renderContextMenu: 11, options: 2, showAddMenu: 12, showPlacementMode: 34, hidePlacementMode: 35, showTypeVariants: 36, mountTextEditor: 37, mountGenericEditor: 38, updateFields: 39, bindDocumentCloseHandler: 40, calculateBounds: 41 }, GY, [-1, -1]) } get addDraggable() { return this.$$.ctx[3] } set addDraggable(t) { this.$$set({ addDraggable: t }), lS() } get updateOptions() { return this.$$.ctx[31] } set updateOptions(t) { this.$$set({ updateOptions: t }), lS() } get draggablesTarget() { return this.$$.ctx[4] } set draggablesTarget(t) { this.$$set({ draggablesTarget: t }), lS() } get draggablesComponent() { return this.$$.ctx[5] } set draggablesComponent(t) { this.$$set({ draggablesComponent: t }), lS() } get domNode() { return this.$$.ctx[0] } set domNode(t) { this.$$set({ domNode: t }), lS() } get placementTarget() { return this.$$.ctx[32] } set placementTarget(t) { this.$$set({ placementTarget: t }), lS() } get scale() { return this.$$.ctx[6] } set scale(t) { this.$$set({ scale: t }), lS() } get containerWidth() { return this.$$.ctx[1] } set containerWidth(t) { this.$$set({ containerWidth: t }), lS() } get placementMessage() { return this.$$.ctx[7] } set placementMessage(t) { this.$$set({ placementMessage: t }), lS() } get collection() { return this.$$.ctx[8] } set collection(t) { this.$$set({ collection: t }), lS() } get showAdvancedFields() { return this.$$.ctx[9] } set showAdvancedFields(t) { this.$$set({ showAdvancedFields: t }), lS() } get placementAfterSelect() { return this.$$.ctx[33] } set placementAfterSelect(t) { this.$$set({ placementAfterSelect: t }), lS() } get renderEditorBar() { return this.$$.ctx[10] } set renderEditorBar(t) { this.$$set({ renderEditorBar: t }), lS() } get renderContextMenu() { return this.$$.ctx[11] } set renderContextMenu(t) { this.$$set({ renderContextMenu: t }), lS() } get options() { return this.$$.ctx[2] } set options(t) { this.$$set({ options: t }), lS() } get showAddMenu() { return this.$$.ctx[12] } get showPlacementMode() { return this.$$.ctx[34] } get hidePlacementMode() { return this.$$.ctx[35] } get showTypeVariants() { return this.$$.ctx[36] } get mountTextEditor() { return this.$$.ctx[37] } get mountGenericEditor() { return this.$$.ctx[38] } get updateFields() { return this.$$.ctx[39] } get bindDocumentCloseHandler() { return this.$$.ctx[40] } get calculateBounds() { return this.$$.ctx[41] } }

    function sF(t, e, n = {}) { const { isEditor: i = !0, onChange: r, onChangeComplete: o, resizeFrame: a, scale: s, editorTarget: l, editorAnchor: c, renderEditorBar: u, renderContextMenu: f, collection: d, showAdvancedFields: h, staticPreview: g, renderSelectView: p, placementMessage: v, darkMode: m } = n; if (g) return function(t, e, n = {}) { const { containerWidth: i = 120 } = n, r = n.scale ? OB({}, n.scale) : EB(); return new QL({ target: t, props: { draggable: e, isEditor: !1, breakpoint: null, updateDraggable: YB, finalizeDraggable: YB, removeDraggable: YB, scale: r, containerWidth: i } }) }(t, e, n); if (p) return function(t, e, n = {}) { const { onComplete: i } = n; return new oY({ target: t, props: { collection: e, onComplete: i, options: {} } }) }(t, e, n); const y = function(t) { return (t.draggables ? t.draggables : t.annotations).map((t => (t.id = t.id || Math.round(999999 * Math.random()), { visible: !0, text: "", align: "left", valign: "top", lineStyle: "horizontal", x: 0, y: 0, x2: 50, y2: 0, offsetX: 0, offsetY: 0, strokeWidth: 1, ...t }))) }(e),
            x = { defaultOptions: zB, ...e.options },
            b = new fz({ target: t, props: { isEditor: i, items: y, options: x, darkMode: m, containerWidth: t.offsetWidth, onChange: r || YB, onChangeComplete: o || YB, scale: OB(e.options, s), resizeFrame: a || TB(t) } }); let $ = null; if (i) { let e = l;
            e || (e = document.createElement("div"), t.appendChild(e)), $ = new aF({ target: e, anchor: c, props: { options: b.options, draggablesTarget: t, draggablesComponent: b, addDraggable: b.addDraggable, updateOptions: b.updateOptions, containerWidth: b.containerWidth, scale: b.scale, renderEditorBar: u, renderContextMenu: f, collection: d, showAdvancedFields: h, placementMessage: v, darkMode: m } }), b.editor = $, document.addEventListener("dragover", (function(t) { t.preventDefault() })) } const w = function(t, e) { const n = () => { t.containerWidth = e.offsetWidth }; return window.addEventListener("resize", n), () => { window.removeEventListener("resize", n) } }(b, t); return { annotations: b.items, draggables: b.items, component: b, cleanup: w, destroy: () => { b && (b.$destroy(), w()) }, resize: () => { b.containerWidth = t.offsetWidth }, editor: $, getBounds: FB(e) } } var lF = i((function(t, e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.isNode = e.PROMISE_RESOLVED_VOID = e.PROMISE_RESOLVED_TRUE = e.PROMISE_RESOLVED_FALSE = void 0, e.isPromise = function(t) { return !(!t || "function" != typeof t.then) }, e.microSeconds = function() { var t = (new Date).getTime(); return t === o ? (a++, 1e3 * t + a) : (o = t, a = 0, 1e3 * t) }, e.randomInt = function(t, e) { return Math.floor(Math.random() * (e - t + 1) + t) }, e.randomToken = function() { return Math.random().toString(36).substring(2) }, e.sleep = function(t, e) { t || (t = 0); return new Promise((function(n) { return setTimeout((function() { return n(e) }), t) })) }; var n = Promise.resolve(!1);
        e.PROMISE_RESOLVED_FALSE = n; var i = Promise.resolve(!0);
        e.PROMISE_RESOLVED_TRUE = i; var r = Promise.resolve();
        e.PROMISE_RESOLVED_VOID = r; var o = 0,
            a = 0; var s = "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0);
        e.isNode = s }));
    n(lF), lF.isNode, lF.PROMISE_RESOLVED_VOID, lF.PROMISE_RESOLVED_TRUE, lF.PROMISE_RESOLVED_FALSE, lF.isPromise, lF.microSeconds, lF.randomInt, lF.randomToken, lF.sleep; var cF = i((function(t) { t.exports = function(t) { return t && t.__esModule ? t : { default: t } }, t.exports.__esModule = !0, t.exports.default = t.exports }));
    n(cF); var uF = i((function(t) {
        function e(n) { return t.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, t.exports.__esModule = !0, t.exports.default = t.exports, e(n) } t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports }));
    n(uF); var fF = lF,
        dF = i((function(t, e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.averageResponseTime = c, e.canBeUsed = l, e.close = o, e.create = r, e.microSeconds = e.default = void 0, e.onMessage = s, e.postMessage = a, e.type = void 0; var n = fF.microSeconds;
            e.microSeconds = n; var i = "native";

            function r(t) { var e = { messagesCallback: null, bc: new BroadcastChannel(t), subFns: [] }; return e.bc.onmessage = function(t) { e.messagesCallback && e.messagesCallback(t.data) }, e }

            function o(t) { t.bc.close(), t.subFns = [] }

            function a(t, e) { try { return t.bc.postMessage(e, !1), fF.PROMISE_RESOLVED_VOID } catch (t) { return Promise.reject(t) } }

            function s(t, e) { t.messagesCallback = e }

            function l() { if (fF.isNode && "undefined" == typeof window) return !1; if ("function" == typeof BroadcastChannel) { if (BroadcastChannel._pubkey) throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill"); return !0 } return !1 }

            function c() { return 150 } e.type = i; var u = { create: r, close: o, onMessage: s, postMessage: a, canBeUsed: l, type: i, averageResponseTime: c, microSeconds: n };
            e.default = u }));

    function hF(t) { for (var e = gF() - t.ttl, n = t.set[Symbol.iterator]();;) { var i = n.next().value; if (!i) return; if (!(t.timeMap.get(i) < e)) return;
            t.timeMap.delete(i), t.set.delete(i) } }

    function gF() { return (new Date).getTime() } n(dF), dF.averageResponseTime, dF.canBeUsed, dF.close, dF.create, dF.microSeconds, dF.onMessage, dF.postMessage, dF.type; var pF = { __proto__: null, ObliviousSet: function() {
                function t(t) { this.ttl = t, this.set = new Set, this.timeMap = new Map } return t.prototype.has = function(t) { return this.set.has(t) }, t.prototype.add = function(t) { var e = this;
                    this.timeMap.set(t, gF()), this.set.add(t), setTimeout((function() { hF(e) }), 0) }, t.prototype.clear = function() { this.set.clear(), this.timeMap.clear() }, t }(), removeTooOldValues: hF, now: gF },
        vF = i((function(t, e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.fillOptionsWithDefaults = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = JSON.parse(JSON.stringify(t));
                void 0 === e.webWorkerSupport && (e.webWorkerSupport = !0);
                e.idb || (e.idb = {});
                e.idb.ttl || (e.idb.ttl = 45e3);
                e.idb.fallbackInterval || (e.idb.fallbackInterval = 150);
                t.idb && "function" == typeof t.idb.onclose && (e.idb.onclose = t.idb.onclose);
                e.localstorage || (e.localstorage = {});
                e.localstorage.removeTimeout || (e.localstorage.removeTimeout = 6e4);
                t.methods && (e.methods = t.methods);
                e.node || (e.node = {});
                e.node.ttl || (e.node.ttl = 12e4);
                e.node.maxParallelWrites || (e.node.maxParallelWrites = 2048);
                void 0 === e.node.useFastPath && (e.node.useFastPath = !0); return e } }));
    n(vF), vF.fillOptionsWithDefaults; var mF = vF,
        yF = i((function(t, e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.averageResponseTime = y, e.canBeUsed = m, e.cleanOldMessages = u, e.close = g, e.create = f, e.createDatabase = o, e.default = void 0, e.getAllMessages = function(t) { var e = t.transaction(i).objectStore(i),
                    n = []; return new Promise((function(t) { e.openCursor().onsuccess = function(e) { var i = e.target.result;
                        i ? (n.push(i.value), i.continue()) : t(n) } })) }, e.getIdb = r, e.getMessagesHigherThan = s, e.getOldMessages = c, e.microSeconds = void 0, e.onMessage = v, e.postMessage = p, e.removeMessageById = l, e.type = void 0, e.writeMessage = a; var n = fF.microSeconds;
            e.microSeconds = n; var i = "messages";

            function r() { if ("undefined" != typeof indexedDB) return indexedDB; if ("undefined" != typeof window) { if (void 0 !== window.mozIndexedDB) return window.mozIndexedDB; if (void 0 !== window.webkitIndexedDB) return window.webkitIndexedDB; if (void 0 !== window.msIndexedDB) return window.msIndexedDB } return !1 }

            function o(t) { var e = "pubkey.broadcast-channel-0-" + t,
                    n = r().open(e, 1); return n.onupgradeneeded = function(t) { t.target.result.createObjectStore(i, { keyPath: "id", autoIncrement: !0 }) }, new Promise((function(t, e) { n.onerror = function(t) { return e(t) }, n.onsuccess = function() { t(n.result) } })) }

            function a(t, e, n) { var r = { uuid: e, time: (new Date).getTime(), data: n },
                    o = t.transaction([i], "readwrite"); return new Promise((function(t, e) { o.oncomplete = function() { return t() }, o.onerror = function(t) { return e(t) }, o.objectStore(i).add(r) })) }

            function s(t, e) { var n = t.transaction(i).objectStore(i),
                    r = []; return new Promise((function(t) {
                    (function() { try { var t = IDBKeyRange.bound(e + 1, 1 / 0); return n.openCursor(t) } catch (t) { return n.openCursor() } }()).onsuccess = function(n) { var i = n.target.result;
                        i ? i.value.id < e + 1 ? i.continue(e + 1) : (r.push(i.value), i.continue()) : t(r) } })) }

            function l(t, e) { var n = t.transaction([i], "readwrite").objectStore(i).delete(e); return new Promise((function(t) { n.onsuccess = function() { return t() } })) }

            function c(t, e) { var n = (new Date).getTime() - e,
                    r = t.transaction(i).objectStore(i),
                    o = []; return new Promise((function(t) { r.openCursor().onsuccess = function(e) { var i = e.target.result; if (i) { var r = i.value; if (!(r.time < n)) return void t(o);
                            o.push(r), i.continue() } else t(o) } })) }

            function u(t, e) { return c(t, e).then((function(e) { return Promise.all(e.map((function(e) { return l(t, e.id) }))) })) }

            function f(t, e) { return e = (0, mF.fillOptionsWithDefaults)(e), o(t).then((function(n) { var i = { closed: !1, lastCursorId: 0, channelName: t, options: e, uuid: (0, fF.randomToken)(), eMIs: new pF.ObliviousSet(2 * e.idb.ttl), writeBlockPromise: fF.PROMISE_RESOLVED_VOID, messagesCallback: null, readQueuePromises: [], db: n }; return n.onclose = function() { i.closed = !0, e.idb.onclose && e.idb.onclose() }, d(i), i })) }

            function d(t) { t.closed || h(t).then((function() { return (0, fF.sleep)(t.options.idb.fallbackInterval) })).then((function() { return d(t) })) }

            function h(t) { return t.closed ? fF.PROMISE_RESOLVED_VOID : t.messagesCallback ? s(t.db, t.lastCursorId).then((function(e) { var n = e.filter((function(t) { return !!t })).map((function(e) { return e.id > t.lastCursorId && (t.lastCursorId = e.id), e })).filter((function(e) { return function(t, e) { return !(t.uuid === e.uuid || e.eMIs.has(t.id) || t.data.time < e.messagesCallbackTime) }(e, t) })).sort((function(t, e) { return t.time - e.time })); return n.forEach((function(e) { t.messagesCallback && (t.eMIs.add(e.id), t.messagesCallback(e.data)) })), fF.PROMISE_RESOLVED_VOID })) : fF.PROMISE_RESOLVED_VOID }

            function g(t) { t.closed = !0, t.db.close() }

            function p(t, e) { return t.writeBlockPromise = t.writeBlockPromise.then((function() { return a(t.db, t.uuid, e) })).then((function() { 0 === (0, fF.randomInt)(0, 10) && u(t.db, t.options.idb.ttl) })), t.writeBlockPromise }

            function v(t, e, n) { t.messagesCallbackTime = n, t.messagesCallback = e, h(t) }

            function m() { return !fF.isNode && !!r() }

            function y(t) { return 2 * t.idb.fallbackInterval } e.type = "idb"; var x = { create: f, close: g, onMessage: v, postMessage: p, canBeUsed: m, type: "idb", averageResponseTime: y, microSeconds: n };
            e.default = x }));
    n(yF), yF.averageResponseTime, yF.canBeUsed, yF.cleanOldMessages, yF.close, yF.create, yF.createDatabase, yF.getAllMessages, yF.getIdb, yF.getMessagesHigherThan, yF.getOldMessages, yF.microSeconds, yF.onMessage, yF.postMessage, yF.removeMessageById, yF.type, yF.writeMessage; var xF = i((function(t, e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.addStorageEventListener = s, e.averageResponseTime = h, e.canBeUsed = d, e.close = u, e.create = c, e.default = void 0, e.getLocalStorage = r, e.microSeconds = void 0, e.onMessage = f, e.postMessage = a, e.removeStorageEventListener = l, e.storageKey = o, e.type = void 0; var n = fF.microSeconds;
        e.microSeconds = n; var i = "localstorage";

        function r() { var t; if ("undefined" == typeof window) return null; try { t = window.localStorage, t = window["ie8-eventlistener/storage"] || window.localStorage } catch (t) {} return t }

        function o(t) { return "pubkey.broadcastChannel-" + t }

        function a(t, e) { return new Promise((function(n) {
                (0, fF.sleep)().then((function() { var i = o(t.channelName),
                        a = { token: (0, fF.randomToken)(), time: (new Date).getTime(), data: e, uuid: t.uuid },
                        s = JSON.stringify(a);
                    r().setItem(i, s); var l = document.createEvent("Event");
                    l.initEvent("storage", !0, !0), l.key = i, l.newValue = s, window.dispatchEvent(l), n() })) })) }

        function s(t, e) { var n = o(t),
                i = function(t) { t.key === n && e(JSON.parse(t.newValue)) }; return window.addEventListener("storage", i), i }

        function l(t) { window.removeEventListener("storage", t) }

        function c(t, e) { if (e = (0, mF.fillOptionsWithDefaults)(e), !d()) throw new Error("BroadcastChannel: localstorage cannot be used"); var n = (0, fF.randomToken)(),
                i = new pF.ObliviousSet(e.localstorage.removeTimeout),
                r = { channelName: t, uuid: n, eMIs: i }; return r.listener = s(t, (function(t) { r.messagesCallback && t.uuid !== n && t.token && !i.has(t.token) && (t.data.time && t.data.time < r.messagesCallbackTime || (i.add(t.token), r.messagesCallback(t.data))) })), r }

        function u(t) { l(t.listener) }

        function f(t, e, n) { t.messagesCallbackTime = n, t.messagesCallback = e }

        function d() { if (fF.isNode) return !1; var t = r(); if (!t) return !1; try { var e = "__broadcastchannel_check";
                t.setItem(e, "works"), t.removeItem(e) } catch (t) { return !1 } return !0 }

        function h() { var t = navigator.userAgent.toLowerCase(); return t.includes("safari") && !t.includes("chrome") ? 240 : 120 } e.type = i; var g = { create: c, close: u, onMessage: f, postMessage: a, canBeUsed: d, type: i, averageResponseTime: h, microSeconds: n };
        e.default = g }));
    n(xF), xF.addStorageEventListener, xF.averageResponseTime, xF.canBeUsed, xF.close, xF.create, xF.getLocalStorage, xF.microSeconds, xF.onMessage, xF.postMessage, xF.removeStorageEventListener, xF.storageKey, xF.type; var bF = i((function(t, e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.averageResponseTime = u, e.canBeUsed = c, e.close = a, e.create = o, e.microSeconds = e.default = void 0, e.onMessage = l, e.postMessage = s, e.type = void 0; var n = fF.microSeconds;
        e.microSeconds = n; var i = "simulate";
        e.type = i; var r = new Set;

        function o(t) { var e = { name: t, messagesCallback: null }; return r.add(e), e }

        function a(t) { r.delete(t) }

        function s(t, e) { return new Promise((function(n) { return setTimeout((function() { Array.from(r).filter((function(e) { return e.name === t.name })).filter((function(e) { return e !== t })).filter((function(t) { return !!t.messagesCallback })).forEach((function(t) { return t.messagesCallback(e) })), n() }), 5) })) }

        function l(t, e) { t.messagesCallback = e }

        function c() { return !0 }

        function u() { return 5 } var f = { create: o, close: a, onMessage: l, postMessage: s, canBeUsed: c, type: i, averageResponseTime: u, microSeconds: n };
        e.default = f }));
    n(bF), bF.averageResponseTime, bF.canBeUsed, bF.close, bF.create, bF.microSeconds, bF.onMessage, bF.postMessage, bF.type; var $F = dF,
        wF = yF,
        _F = xF,
        kF = bF,
        MF = i((function(t, e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.chooseMethod = function(t) { var e = [].concat(t.methods, a).filter(Boolean); if (t.type) { if ("simulate" === t.type) return o.default; var n = e.find((function(e) { return e.type === t.type })); if (n) return n; throw new Error("method-type " + t.type + " not found") } t.webWorkerSupport || fF.isNode || (e = e.filter((function(t) { return "idb" !== t.type }))); var i = e.find((function(t) { return t.canBeUsed() })); if (i) return i; throw new Error("No useable method found in " + JSON.stringify(a.map((function(t) { return t.type })))) }; var n = cF($F),
                i = cF(wF),
                r = cF(_F),
                o = cF(kF),
                a = [n.default, i.default, r.default] }));
    n(MF), MF.chooseMethod; var SF = MF,
        AF = i((function(t, e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.OPEN_BROADCAST_CHANNELS = e.BroadcastChannel = void 0, e.clearNodeFolder = function(t) { t = (0, mF.fillOptionsWithDefaults)(t); var e = (0, SF.chooseMethod)(t); return "node" === e.type ? e.clearNodeFolder().then((function() { return !0 })) : fF.PROMISE_RESOLVED_FALSE }, e.enforceOptions = function(t) { i = t }; var n = new Set;
            e.OPEN_BROADCAST_CHANNELS = n; var i, r = 0,
                o = function(t, e) { this.id = r++, n.add(this), this.name = t, i && (e = i), this.options = (0, mF.fillOptionsWithDefaults)(e), this.method = (0, SF.chooseMethod)(this.options), this._iL = !1, this._onML = null, this._addEL = { message: [], internal: [] }, this._uMP = new Set, this._befC = [], this._prepP = null,
                        function(t) { var e = t.method.create(t.name, t.options);
                            (0, fF.isPromise)(e) ? (t._prepP = e, e.then((function(e) { t._state = e }))) : t._state = e }(this) };

            function a(t, e, n) { var i = { time: t.method.microSeconds(), type: e, data: n }; return (t._prepP ? t._prepP : fF.PROMISE_RESOLVED_VOID).then((function() { var e = t.method.postMessage(t._state, i); return t._uMP.add(e), e.catch().then((function() { return t._uMP.delete(e) })), e })) }

            function s(t) { return t._addEL.message.length > 0 || t._addEL.internal.length > 0 }

            function l(t, e, n) { t._addEL[e].push(n),
                    function(t) { if (!t._iL && s(t)) { var e = function(e) { t._addEL[e.type].forEach((function(t) { var n = 1e5,
                                            i = t.time - n;
                                        e.time >= i && t.fn(e.data) })) },
                                n = t.method.microSeconds();
                            t._prepP ? t._prepP.then((function() { t._iL = !0, t.method.onMessage(t._state, e, n) })) : (t._iL = !0, t.method.onMessage(t._state, e, n)) } }(t) }

            function c(t, e, n) { t._addEL[e] = t._addEL[e].filter((function(t) { return t !== n })),
                    function(t) { if (t._iL && !s(t)) { t._iL = !1; var e = t.method.microSeconds();
                            t.method.onMessage(t._state, null, e) } }(t) } e.BroadcastChannel = o, o._pubkey = !0, o.prototype = { postMessage: function(t) { if (this.closed) throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed " + JSON.stringify(t)); return a(this, "message", t) }, postInternal: function(t) { return a(this, "internal", t) }, set onmessage(t) { var e = { time: this.method.microSeconds(), fn: t };
                    c(this, "message", this._onML), t && "function" == typeof t ? (this._onML = e, l(this, "message", e)) : this._onML = null }, addEventListener: function(t, e) { l(this, t, { time: this.method.microSeconds(), fn: e }) }, removeEventListener: function(t, e) { c(this, t, this._addEL[t].find((function(t) { return t.fn === e }))) }, close: function() { var t = this; if (!this.closed) { n.delete(this), this.closed = !0; var e = this._prepP ? this._prepP : fF.PROMISE_RESOLVED_VOID; return this._onML = null, this._addEL.message = [], e.then((function() { return Promise.all(Array.from(t._uMP)) })).then((function() { return Promise.all(t._befC.map((function(t) { return t() }))) })).then((function() { return t.method.close(t._state) })) } }, get type() { return this.method.type }, get isClosed() { return this.closed } } }));
    n(AF), AF.OPEN_BROADCAST_CHANNELS, AF.BroadcastChannel, AF.clearNodeFolder, AF.enforceOptions; var DF = { add: function(t) { if ("function" == typeof WorkerGlobalScope && self instanceof WorkerGlobalScope);
                else { if ("function" != typeof window.addEventListener) return;
                    window.addEventListener("beforeunload", (function() { t() }), !0), window.addEventListener("unload", (function() { t() }), !0) } } },
        CF = new Set,
        EF = !1;

    function OF() { var t = []; return CF.forEach((function(e) { t.push(e()), CF.delete(e) })), Promise.all(t) } var TF = function(t) { if (EF || (EF = !0, DF.add(OF)), "function" != typeof t) throw new Error("Listener is no function"); return CF.add(t), { remove: function() { return CF.delete(t) }, run: function() { return CF.delete(t), t() } } },
        PF = i((function(t, e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.beLeader = r, e.createLeaderElection = function(t, e) { if (t._leaderElector) throw new Error("BroadcastChannel already has a leader-elector");
                e = function(t, e) { t || (t = {});
                    (t = JSON.parse(JSON.stringify(t))).fallbackInterval || (t.fallbackInterval = 3e3);
                    t.responseTime || (t.responseTime = e.method.averageResponseTime(e.options)); return t }(e, t); var i = new n(t, e); return t._befC.push((function() { return i.die() })), t._leaderElector = i, i }; var n = function(t, e) { var n = this;
                this.broadcastChannel = t, this._options = e, this.isLeader = !1, this.hasLeader = !1, this.isDead = !1, this.token = (0, fF.randomToken)(), this._aplQ = fF.PROMISE_RESOLVED_VOID, this._aplQC = 0, this._unl = [], this._lstns = [], this._dpL = function() {}, this._dpLC = !1; var i = function(t) { "leader" === t.context && ("death" === t.action && (n.hasLeader = !1), "tell" === t.action && (n.hasLeader = !0)) };
                this.broadcastChannel.addEventListener("internal", i), this._lstns.push(i) };

            function i(t, e) { var n = { context: "leader", action: e, token: t.token }; return t.broadcastChannel.postInternal(n) }

            function r(t) { t.isLeader = !0, t.hasLeader = !0; var e = TF((function() { return t.die() }));
                t._unl.push(e); var n = function(e) { "leader" === e.context && "apply" === e.action && i(t, "tell"), "leader" !== e.context || "tell" !== e.action || t._dpLC || (t._dpLC = !0, t._dpL(), i(t, "tell")) }; return t.broadcastChannel.addEventListener("internal", n), t._lstns.push(n), i(t, "tell") } n.prototype = { applyOnce: function(t) { var e = this; if (this.isLeader) return (0, fF.sleep)(0, !0); if (this.isDead) return (0, fF.sleep)(0, !1); if (this._aplQC > 1) return this._aplQ; return this._aplQC = this._aplQC + 1, this._aplQ = this._aplQ.then((function() { return function() { if (e.isLeader) return fF.PROMISE_RESOLVED_TRUE; var n, o = !1,
                                a = new Promise((function(t) { n = function() { o = !0, t() } })),
                                s = function(t) { "leader" === t.context && t.token != e.token && ("apply" === t.action && t.token > e.token && n(), "tell" === t.action && (n(), e.hasLeader = !0)) };
                            e.broadcastChannel.addEventListener("internal", s); var l = t ? 4 * e._options.responseTime : e._options.responseTime; return i(e, "apply").then((function() { return Promise.race([(0, fF.sleep)(l), a.then((function() { return Promise.reject(new Error) }))]) })).then((function() { return i(e, "apply") })).then((function() { return Promise.race([(0, fF.sleep)(l), a.then((function() { return Promise.reject(new Error) }))]) })).catch((function() {})).then((function() { return e.broadcastChannel.removeEventListener("internal", s), !o && r(e).then((function() { return !0 })) })) }() })).then((function() { e._aplQC = e._aplQC - 1 })), this._aplQ.then((function() { return e.isLeader })) }, awaitLeadership: function() { return this._aLP || (this._aLP = function(t) { if (t.isLeader) return fF.PROMISE_RESOLVED_VOID; return new Promise((function(e) { var n = !1;

                            function i() { n || (n = !0, t.broadcastChannel.removeEventListener("internal", r), e(!0)) } t.applyOnce().then((function() { t.isLeader && i() })),
                                function e() { return (0, fF.sleep)(t._options.fallbackInterval).then((function() { if (!t.isDead && !n) return t.isLeader ? void i() : t.applyOnce(!0).then((function() { t.isLeader ? i() : e() })) })) }(); var r = function(e) { "leader" === e.context && "death" === e.action && (t.hasLeader = !1, t.applyOnce().then((function() { t.isLeader && i() }))) };
                            t.broadcastChannel.addEventListener("internal", r), t._lstns.push(r) })) }(this)), this._aLP }, set onduplicate(t) { this._dpL = t }, die: function() { var t = this; return this._lstns.forEach((function(e) { return t.broadcastChannel.removeEventListener("internal", e) })), this._lstns = [], this._unl.forEach((function(t) { return t.remove() })), this._unl = [], this.isLeader && (this.hasLeader = !1, this.isLeader = !1), this.isDead = !0, i(this, "death") } } }));
    n(PF), PF.beLeader, PF.createLeaderElection; var BF = AF,
        LF = PF,
        zF = i((function(t, e) { Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "BroadcastChannel", { enumerable: !0, get: function() { return BF.BroadcastChannel } }), Object.defineProperty(e, "OPEN_BROADCAST_CHANNELS", { enumerable: !0, get: function() { return BF.OPEN_BROADCAST_CHANNELS } }), Object.defineProperty(e, "beLeader", { enumerable: !0, get: function() { return LF.beLeader } }), Object.defineProperty(e, "clearNodeFolder", { enumerable: !0, get: function() { return BF.clearNodeFolder } }), Object.defineProperty(e, "createLeaderElection", { enumerable: !0, get: function() { return LF.createLeaderElection } }), Object.defineProperty(e, "enforceOptions", { enumerable: !0, get: function() { return BF.enforceOptions } }) }));
    n(zF); var YF = zF,
        FF = { BroadcastChannel: YF.BroadcastChannel, createLeaderElection: YF.createLeaderElection, clearNodeFolder: YF.clearNodeFolder, enforceOptions: YF.enforceOptions, beLeader: YF.beLeader }.BroadcastChannel;

    function WF(t) { var e = t.channel,
            n = void 0 === e ? "default" : e,
            i = t.isRoot,
            r = void 0 !== i && i,
            o = new FF("".concat(n, "-root")),
            a = new FF("".concat(n, "-children")); return { send: function(t) { r ? a.postMessage(t) : o.postMessage(t) }, receive: function(t) { r ? o.onmessage = t : a.onmessage = t }, close: function() { o.close(), a.close() } } }

    function RF(t) { SM(t, "svelte-1nz5vsj", ".draggable-annotations .draggable .text{font-size:14px}.draggable-annotations.mobile .draggable .text{font-size:12px}") }

    function NF(t) { var e, n, i; return { c: function() { zM(e = EM("div"), "class", n = "draggable-annotations " + (t[2] ? "mobile" : "")), oS((function() { return t[9].call(e) })) }, m: function(n, r) { AM(n, e, r), i = VM(e, t[9].bind(e)), t[10](e) }, p: function(t, i) { 4 & Pe(i, 1)[0] && n !== (n = "draggable-annotations " + (t[2] ? "mobile" : "")) && zM(e, "class", n) }, i: cM, o: cM, d: function(n) { n && DM(e), i(), t[10](null) } } }

    function HF(t, e, n) { var i, r, o;
        vM(t, CS, (function(t) { return n(7, r = t) })), vM(t, DS, (function(t) { return n(8, o = t) })); var a, s, l = e.env,
            c = e.annotations,
            u = e.options,
            f = void 0 === u ? {} : u,
            d = !1; return t.$$set = function(t) { "env" in t && n(3, l = t.env), "annotations" in t && n(4, c = t.annotations), "options" in t && n(5, f = t.options) }, t.$$.update = function() { if (33 & t.$$.dirty && n(2, i = xl(a, f)), 511 & t.$$.dirty && s && a && !d) { var e = function(t) { var e = function(e) { return ol(t, "annotations", e) }; return e.destroy = function() { return al(t, "annotations") }, e }(l.data.id || "new"),
                    u = function(t) { return [o.scale(t[0]), r.scale(t[1])] };
                u.invert = function(t) { return [o.scale.invert(t[0]), r.scale.invert(t[1])] }; var h = function() { return null }; if (tl()) { var g = new WF({ channel: "draggables", isRoot: !1 });
                    g.receive((function(t) { var n = t.type,
                            i = t.props,
                            r = e(); if (r) { var o = r.editor; switch (n) {
                                case "showPlacement":
                                    o.showPlacementMode(i); break;
                                case "hidePlacement":
                                    o.hidePlacementMode() } } })), h = function(t) { var e = Object.keys(t)[0]; if ("id" === e) { var n, i = l.data.config,
                                r = (null === (n = (void 0 === i ? {} : i).draggableAnnotations) || void 0 === n ? void 0 : n.options).breakpoints; if (r) { var o = Be(r).reverse().filter((function(t) { return "default" !== t.name })).find((function(t) { var e = t.size; return a <= e }));
                                o && (t = { id: t.id, props: { breakpoints: _e({}, o.name, t.props) } }) } } g.send({ type: e, changes: t }) } } var p = i ? 107 : 125,
                    v = c || { draggables: [], options: { breakpoints: [{ name: "default", size: 620 }, { name: "mobile", size: 375 }] } };
                v.draggables && (v.draggables = v.draggables.map((function(t) { return Se(Se({}, t), {}, { fontSize: void 0, textWidth: t.textWidth ? t.textWidth : p }) })), e(sF(s, v, { editorTarget: s, containerWidth: a, isEditor: tl(), onChange: function(t) { h(t), f.handleAnnotationChanges && f.handleAnnotationChanges(t) }, onChangeComplete: function(t) { h(t), f.handleAnnotationChangesComplete && f.handleAnnotationChangesComplete(t) }, renderEditorBar: !1, renderContextMenu: !1, scale: u, darkMode: Xu(l.data, l.options) }))), n(6, d = !0) } }, [a, s, i, l, c, f, d, r, o, function() { a = this.offsetWidth, n(0, a) }, function(t) { tS[t ? "unshift" : "push"]((function() { n(1, s = t) })) }] } var jF = function(t) { Ae(n, t); var e = Te(n);

            function n(t) { var i; return be(this, n), wS(Ee(i = e.call(this)), t, HF, NF, pM, { env: 3, annotations: 4, options: 5 }, RF), i } return we(n, [{ key: "env", get: function() { return this.$$.ctx[3] }, set: function(t) { this.$$set({ env: t }), lS() } }, { key: "annotations", get: function() { return this.$$.ctx[4] }, set: function(t) { this.$$set({ annotations: t }), lS() } }, { key: "options", get: function() { return this.$$.ctx[5] }, set: function(t) { this.$$set({ options: t }), lS() } }]), n }(_S),
        IF = o.isFinite,
        VF = Number.isFinite || function(t) { return "number" == typeof t && IF(t) };
    Pt({ target: "Number", stat: !0 }, { isFinite: VF }); const UF = Math.pow(2, -52),
        XF = new Uint32Array(512);
    class qF { static from(t, e = nW, n = iW) { const i = t.length,
                r = new Float64Array(2 * i); for (let o = 0; o < i; o++) { const i = t[o];
                r[2 * o] = e(i), r[2 * o + 1] = n(i) } return new qF(r) } constructor(t) { const e = t.length >> 1; if (e > 0 && "number" != typeof t[0]) throw new Error("Expected coords to contain numbers.");
            this.coords = t; const n = Math.max(2 * e - 5, 0);
            this._triangles = new Uint32Array(3 * n), this._halfedges = new Int32Array(3 * n), this._hashSize = Math.ceil(Math.sqrt(e)), this._hullPrev = new Uint32Array(e), this._hullNext = new Uint32Array(e), this._hullTri = new Uint32Array(e), this._hullHash = new Int32Array(this._hashSize).fill(-1), this._ids = new Uint32Array(e), this._dists = new Float64Array(e), this.update() } update() { const { coords: t, _hullPrev: e, _hullNext: n, _hullTri: i, _hullHash: r } = this, o = t.length >> 1; let a = 1 / 0,
                s = 1 / 0,
                l = -1 / 0,
                c = -1 / 0; for (let e = 0; e < o; e++) { const n = t[2 * e],
                    i = t[2 * e + 1];
                n < a && (a = n), i < s && (s = i), n > l && (l = n), i > c && (c = i), this._ids[e] = e } const u = (a + l) / 2,
                f = (s + c) / 2; let d, h, g, p = 1 / 0; for (let e = 0; e < o; e++) { const n = GF(u, f, t[2 * e], t[2 * e + 1]);
                n < p && (d = e, p = n) } const v = t[2 * d],
                m = t[2 * d + 1];
            p = 1 / 0; for (let e = 0; e < o; e++) { if (e === d) continue; const n = GF(v, m, t[2 * e], t[2 * e + 1]);
                n < p && n > 0 && (h = e, p = n) } let y = t[2 * h],
                x = t[2 * h + 1],
                b = 1 / 0; for (let e = 0; e < o; e++) { if (e === d || e === h) continue; const n = JF(v, m, y, x, t[2 * e], t[2 * e + 1]);
                n < b && (g = e, b = n) } let $ = t[2 * g],
                w = t[2 * g + 1]; if (b === 1 / 0) { for (let e = 0; e < o; e++) this._dists[e] = t[2 * e] - t[0] || t[2 * e + 1] - t[1];
                tW(this._ids, this._dists, 0, o - 1); const e = new Uint32Array(o); let n = 0; for (let t = 0, i = -1 / 0; t < o; t++) { const r = this._ids[t];
                    this._dists[r] > i && (e[n++] = r, i = this._dists[r]) } return this.hull = e.subarray(0, n), this.triangles = new Uint32Array(0), void(this.halfedges = new Uint32Array(0)) } if (QF(v, m, y, x, $, w)) { const t = h,
                    e = y,
                    n = x;
                h = g, y = $, x = w, g = t, $ = e, w = n } const _ = function(t, e, n, i, r, o) { const a = n - t,
                    s = i - e,
                    l = r - t,
                    c = o - e,
                    u = a * a + s * s,
                    f = l * l + c * c,
                    d = .5 / (a * c - s * l); return { x: t + (c * u - s * f) * d, y: e + (a * f - l * u) * d } }(v, m, y, x, $, w);
            this._cx = _.x, this._cy = _.y; for (let e = 0; e < o; e++) this._dists[e] = GF(t[2 * e], t[2 * e + 1], _.x, _.y);
            tW(this._ids, this._dists, 0, o - 1), this._hullStart = d; let k = 3;
            n[d] = e[g] = h, n[h] = e[d] = g, n[g] = e[h] = d, i[d] = 0, i[h] = 1, i[g] = 2, r.fill(-1), r[this._hashKey(v, m)] = d, r[this._hashKey(y, x)] = h, r[this._hashKey($, w)] = g, this.trianglesLen = 0, this._addTriangle(d, h, g, -1, -1, -1); for (let o, a, s = 0; s < this._ids.length; s++) { const l = this._ids[s],
                    c = t[2 * l],
                    u = t[2 * l + 1]; if (s > 0 && Math.abs(c - o) <= UF && Math.abs(u - a) <= UF) continue; if (o = c, a = u, l === d || l === h || l === g) continue; let f = 0; for (let t = 0, e = this._hashKey(c, u); t < this._hashSize && (f = r[(e + t) % this._hashSize], -1 === f || f === n[f]); t++);
                f = e[f]; let p, v = f; for (; p = n[v], !QF(c, u, t[2 * v], t[2 * v + 1], t[2 * p], t[2 * p + 1]);)
                    if (v = p, v === f) { v = -1; break } if (-1 === v) continue; let m = this._addTriangle(v, l, n[v], -1, -1, i[v]);
                i[l] = this._legalize(m + 2), i[v] = m, k++; let y = n[v]; for (; p = n[y], QF(c, u, t[2 * y], t[2 * y + 1], t[2 * p], t[2 * p + 1]);) m = this._addTriangle(y, l, p, i[l], -1, i[y]), i[l] = this._legalize(m + 2), n[y] = y, k--, y = p; if (v === f)
                    for (; p = e[v], QF(c, u, t[2 * p], t[2 * p + 1], t[2 * v], t[2 * v + 1]);) m = this._addTriangle(p, l, v, -1, i[v], i[p]), this._legalize(m + 2), i[p] = m, n[v] = v, k--, v = p;
                this._hullStart = e[l] = v, n[v] = e[y] = l, n[l] = y, r[this._hashKey(c, u)] = l, r[this._hashKey(t[2 * v], t[2 * v + 1])] = v } this.hull = new Uint32Array(k); for (let t = 0, e = this._hullStart; t < k; t++) this.hull[t] = e, e = n[e];
            this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen) } _hashKey(t, e) { return Math.floor(function(t, e) { const n = t / (Math.abs(t) + Math.abs(e)); return (e > 0 ? 3 - n : 1 + n) / 4 }(t - this._cx, e - this._cy) * this._hashSize) % this._hashSize } _legalize(t) { const { _triangles: e, _halfedges: n, coords: i } = this; let r = 0,
                o = 0; for (;;) { const a = n[t],
                    s = t - t % 3; if (o = s + (t + 2) % 3, -1 === a) { if (0 === r) break;
                    t = XF[--r]; continue } const l = a - a % 3,
                    c = s + (t + 1) % 3,
                    u = l + (a + 2) % 3,
                    f = e[o],
                    d = e[t],
                    h = e[c],
                    g = e[u]; if (KF(i[2 * f], i[2 * f + 1], i[2 * d], i[2 * d + 1], i[2 * h], i[2 * h + 1], i[2 * g], i[2 * g + 1])) { e[t] = g, e[a] = f; const i = n[u]; if (-1 === i) { let e = this._hullStart;
                        do { if (this._hullTri[e] === u) { this._hullTri[e] = t; break } e = this._hullPrev[e] } while (e !== this._hullStart) } this._link(t, i), this._link(a, n[o]), this._link(o, u); const s = l + (a + 1) % 3;
                    r < XF.length && (XF[r++] = s) } else { if (0 === r) break;
                    t = XF[--r] } } return o } _link(t, e) { this._halfedges[t] = e, -1 !== e && (this._halfedges[e] = t) } _addTriangle(t, e, n, i, r, o) { const a = this.trianglesLen; return this._triangles[a] = t, this._triangles[a + 1] = e, this._triangles[a + 2] = n, this._link(a, i), this._link(a + 1, r), this._link(a + 2, o), this.trianglesLen += 3, a } }

    function GF(t, e, n, i) { const r = t - n,
            o = e - i; return r * r + o * o }

    function ZF(t, e, n, i, r, o) { const a = (i - e) * (r - t),
            s = (n - t) * (o - e); return Math.abs(a - s) >= 33306690738754716e-32 * Math.abs(a + s) ? a - s : 0 }

    function QF(t, e, n, i, r, o) { return (ZF(r, o, t, e, n, i) || ZF(t, e, n, i, r, o) || ZF(n, i, r, o, t, e)) < 0 }

    function KF(t, e, n, i, r, o, a, s) { const l = t - a,
            c = e - s,
            u = n - a,
            f = i - s,
            d = r - a,
            h = o - s,
            g = u * u + f * f,
            p = d * d + h * h; return l * (f * p - g * h) - c * (u * p - g * d) + (l * l + c * c) * (u * h - f * d) < 0 }

    function JF(t, e, n, i, r, o) { const a = n - t,
            s = i - e,
            l = r - t,
            c = o - e,
            u = a * a + s * s,
            f = l * l + c * c,
            d = .5 / (a * c - s * l),
            h = (c * u - s * f) * d,
            g = (a * f - l * u) * d; return h * h + g * g }

    function tW(t, e, n, i) { if (i - n <= 20)
            for (let r = n + 1; r <= i; r++) { const i = t[r],
                    o = e[i]; let a = r - 1; for (; a >= n && e[t[a]] > o;) t[a + 1] = t[a--];
                t[a + 1] = i } else { let r = n + 1,
                    o = i;
                eW(t, n + i >> 1, r), e[t[n]] > e[t[i]] && eW(t, n, i), e[t[r]] > e[t[i]] && eW(t, r, i), e[t[n]] > e[t[r]] && eW(t, n, r); const a = t[r],
                    s = e[a]; for (;;) { do { r++ } while (e[t[r]] < s);
                    do { o-- } while (e[t[o]] > s); if (o < r) break;
                    eW(t, r, o) } t[n + 1] = t[o], t[o] = a, i - r + 1 >= o - n ? (tW(t, e, r, i), tW(t, e, n, o - 1)) : (tW(t, e, n, o - 1), tW(t, e, r, i)) } }

    function eW(t, e, n) { const i = t[e];
        t[e] = t[n], t[n] = i }

    function nW(t) { return t[0] }

    function iW(t) { return t[1] } const rW = 1e-6;
    class oW { constructor() { this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "" } moveTo(t, e) { this._ += `M${this._x0=this._x1=+t},${this._y0=this._y1=+e}` } closePath() { null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z") } lineTo(t, e) { this._ += `L${this._x1=+t},${this._y1=+e}` } arc(t, e, n) { const i = (t = +t) + (n = +n),
                r = e = +e; if (n < 0) throw new Error("negative radius");
            null === this._x1 ? this._ += `M${i},${r}` : (Math.abs(this._x1 - i) > rW || Math.abs(this._y1 - r) > rW) && (this._ += "L" + i + "," + r), n && (this._ += `A${n},${n},0,1,1,${t-n},${e}A${n},${n},0,1,1,${this._x1=i},${this._y1=r}`) } rect(t, e, n, i) { this._ += `M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${+n}v${+i}h${-n}Z` } value() { return this._ || null } } class aW { constructor() { this._ = [] } moveTo(t, e) { this._.push([t, e]) } closePath() { this._.push(this._[0].slice()) } lineTo(t, e) { this._.push([t, e]) } value() { return this._.length ? this._ : null } } class sW { constructor(t, [e, n, i, r] = [0, 0, 960, 500]) { if (!((i = +i) >= (e = +e) && (r = +r) >= (n = +n))) throw new Error("invalid bounds");
            this.delaunay = t, this._circumcenters = new Float64Array(2 * t.points.length), this.vectors = new Float64Array(2 * t.points.length), this.xmax = i, this.xmin = e, this.ymax = r, this.ymin = n, this._init() } update() { return this.delaunay.update(), this._init(), this } _init() { const { delaunay: { points: t, hull: e, triangles: n }, vectors: i } = this, r = this.circumcenters = this._circumcenters.subarray(0, n.length / 3 * 2); for (let e, i, o = 0, a = 0, s = n.length; o < s; o += 3, a += 2) { const s = 2 * n[o],
                    l = 2 * n[o + 1],
                    c = 2 * n[o + 2],
                    u = t[s],
                    f = t[s + 1],
                    d = t[l],
                    h = t[l + 1],
                    g = t[c],
                    p = t[c + 1],
                    v = d - u,
                    m = h - f,
                    y = g - u,
                    x = p - f,
                    b = v * v + m * m,
                    $ = y * y + x * x,
                    w = 2 * (v * x - m * y); if (w)
                    if (Math.abs(w) < 1e-8) e = (u + g) / 2, i = (f + p) / 2;
                    else { const t = 1 / w;
                        e = u + (x * b - m * $) * t, i = f + (v * $ - y * b) * t } else e = (u + g) / 2 - 1e8 * x, i = (f + p) / 2 + 1e8 * y;
                r[a] = e, r[a + 1] = i } let o, a, s, l = e[e.length - 1],
                c = 4 * l,
                u = t[2 * l],
                f = t[2 * l + 1];
            i.fill(0); for (let n = 0; n < e.length; ++n) l = e[n], o = c, a = u, s = f, c = 4 * l, u = t[2 * l], f = t[2 * l + 1], i[o + 2] = i[c] = s - f, i[o + 3] = i[c + 1] = u - a } render(t) { const e = null == t ? t = new oW : void 0,
                { delaunay: { halfedges: n, inedges: i, hull: r }, circumcenters: o, vectors: a } = this; if (r.length <= 1) return null; for (let e = 0, i = n.length; e < i; ++e) { const i = n[e]; if (i < e) continue; const r = 2 * Math.floor(e / 3),
                    a = 2 * Math.floor(i / 3),
                    s = o[r],
                    l = o[r + 1],
                    c = o[a],
                    u = o[a + 1];
                this._renderSegment(s, l, c, u, t) } let s, l = r[r.length - 1]; for (let e = 0; e < r.length; ++e) { s = l, l = r[e]; const n = 2 * Math.floor(i[l] / 3),
                    c = o[n],
                    u = o[n + 1],
                    f = 4 * s,
                    d = this._project(c, u, a[f + 2], a[f + 3]);
                d && this._renderSegment(c, u, d[0], d[1], t) } return e && e.value() } renderBounds(t) { const e = null == t ? t = new oW : void 0; return t.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin), e && e.value() } renderCell(t, e) { const n = null == e ? e = new oW : void 0,
                i = this._clip(t); if (null === i || !i.length) return;
            e.moveTo(i[0], i[1]); let r = i.length; for (; i[0] === i[r - 2] && i[1] === i[r - 1] && r > 1;) r -= 2; for (let t = 2; t < r; t += 2) i[t] === i[t - 2] && i[t + 1] === i[t - 1] || e.lineTo(i[t], i[t + 1]); return e.closePath(), n && n.value() }* cellPolygons() { const { delaunay: { points: t } } = this; for (let e = 0, n = t.length / 2; e < n; ++e) { const t = this.cellPolygon(e);
                t && (t.index = e, yield t) } } cellPolygon(t) { const e = new aW; return this.renderCell(t, e), e.value() } _renderSegment(t, e, n, i, r) { let o; const a = this._regioncode(t, e),
                s = this._regioncode(n, i);
            0 === a && 0 === s ? (r.moveTo(t, e), r.lineTo(n, i)) : (o = this._clipSegment(t, e, n, i, a, s)) && (r.moveTo(o[0], o[1]), r.lineTo(o[2], o[3])) } contains(t, e, n) { return (e = +e) == e && (n = +n) == n && this.delaunay._step(t, e, n) === t }* neighbors(t) { const e = this._clip(t); if (e)
                for (const n of this.delaunay.neighbors(t)) { const t = this._clip(n); if (t) t: for (let i = 0, r = e.length; i < r; i += 2)
                        for (let o = 0, a = t.length; o < a; o += 2)
                            if (e[i] == t[o] && e[i + 1] == t[o + 1] && e[(i + 2) % r] == t[(o + a - 2) % a] && e[(i + 3) % r] == t[(o + a - 1) % a]) { yield n; break t } } } _cell(t) { const { circumcenters: e, delaunay: { inedges: n, halfedges: i, triangles: r } } = this, o = n[t]; if (-1 === o) return null; const a = []; let s = o;
            do { const n = Math.floor(s / 3); if (a.push(e[2 * n], e[2 * n + 1]), s = s % 3 == 2 ? s - 2 : s + 1, r[s] !== t) break;
                s = i[s] } while (s !== o && -1 !== s); return a } _clip(t) { if (0 === t && 1 === this.delaunay.hull.length) return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin]; const e = this._cell(t); if (null === e) return null; const { vectors: n } = this, i = 4 * t; return n[i] || n[i + 1] ? this._clipInfinite(t, e, n[i], n[i + 1], n[i + 2], n[i + 3]) : this._clipFinite(t, e) } _clipFinite(t, e) { const n = e.length; let i, r, o, a, s, l = null,
                c = e[n - 2],
                u = e[n - 1],
                f = this._regioncode(c, u); for (let d = 0; d < n; d += 2)
                if (i = c, r = u, c = e[d], u = e[d + 1], o = f, f = this._regioncode(c, u), 0 === o && 0 === f) a = s, s = 0, l ? l.push(c, u) : l = [c, u];
                else { let e, n, d, h, g; if (0 === o) { if (null === (e = this._clipSegment(i, r, c, u, o, f))) continue;
                        [n, d, h, g] = e } else { if (null === (e = this._clipSegment(c, u, i, r, f, o))) continue;
                        [h, g, n, d] = e, a = s, s = this._edgecode(n, d), a && s && this._edge(t, a, s, l, l.length), l ? l.push(n, d) : l = [n, d] } a = s, s = this._edgecode(h, g), a && s && this._edge(t, a, s, l, l.length), l ? l.push(h, g) : l = [h, g] } if (l) a = s, s = this._edgecode(l[0], l[1]), a && s && this._edge(t, a, s, l, l.length);
            else if (this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin]; return l } _clipSegment(t, e, n, i, r, o) { for (;;) { if (0 === r && 0 === o) return [t, e, n, i]; if (r & o) return null; let a, s, l = r || o;
                8 & l ? (a = t + (n - t) * (this.ymax - e) / (i - e), s = this.ymax) : 4 & l ? (a = t + (n - t) * (this.ymin - e) / (i - e), s = this.ymin) : 2 & l ? (s = e + (i - e) * (this.xmax - t) / (n - t), a = this.xmax) : (s = e + (i - e) * (this.xmin - t) / (n - t), a = this.xmin), r ? (t = a, e = s, r = this._regioncode(t, e)) : (n = a, i = s, o = this._regioncode(n, i)) } } _clipInfinite(t, e, n, i, r, o) { let a, s = Array.from(e); if ((a = this._project(s[0], s[1], n, i)) && s.unshift(a[0], a[1]), (a = this._project(s[s.length - 2], s[s.length - 1], r, o)) && s.push(a[0], a[1]), s = this._clipFinite(t, s))
                for (let e, n = 0, i = s.length, r = this._edgecode(s[i - 2], s[i - 1]); n < i; n += 2) e = r, r = this._edgecode(s[n], s[n + 1]), e && r && (n = this._edge(t, e, r, s, n), i = s.length);
            else this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2) && (s = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax]); return s } _edge(t, e, n, i, r) { for (; e !== n;) { let n, o; switch (e) {
                    case 5:
                        e = 4; continue;
                    case 4:
                        e = 6, n = this.xmax, o = this.ymin; break;
                    case 6:
                        e = 2; continue;
                    case 2:
                        e = 10, n = this.xmax, o = this.ymax; break;
                    case 10:
                        e = 8; continue;
                    case 8:
                        e = 9, n = this.xmin, o = this.ymax; break;
                    case 9:
                        e = 1; continue;
                    case 1:
                        e = 5, n = this.xmin, o = this.ymin } i[r] === n && i[r + 1] === o || !this.contains(t, n, o) || (i.splice(r, 0, n, o), r += 2) } if (i.length > 4)
                for (let t = 0; t < i.length; t += 2) { const e = (t + 2) % i.length,
                        n = (t + 4) % i.length;
                    (i[t] === i[e] && i[e] === i[n] || i[t + 1] === i[e + 1] && i[e + 1] === i[n + 1]) && (i.splice(e, 2), t -= 2) }
            return r } _project(t, e, n, i) { let r, o, a, s = 1 / 0; if (i < 0) { if (e <= this.ymin) return null;
                (r = (this.ymin - e) / i) < s && (a = this.ymin, o = t + (s = r) * n) } else if (i > 0) { if (e >= this.ymax) return null;
                (r = (this.ymax - e) / i) < s && (a = this.ymax, o = t + (s = r) * n) } if (n > 0) { if (t >= this.xmax) return null;
                (r = (this.xmax - t) / n) < s && (o = this.xmax, a = e + (s = r) * i) } else if (n < 0) { if (t <= this.xmin) return null;
                (r = (this.xmin - t) / n) < s && (o = this.xmin, a = e + (s = r) * i) } return [o, a] } _edgecode(t, e) { return (t === this.xmin ? 1 : t === this.xmax ? 2 : 0) | (e === this.ymin ? 4 : e === this.ymax ? 8 : 0) } _regioncode(t, e) { return (t < this.xmin ? 1 : t > this.xmax ? 2 : 0) | (e < this.ymin ? 4 : e > this.ymax ? 8 : 0) } } const lW = 2 * Math.PI,
        cW = Math.pow;

    function uW(t) { return t[0] }

    function fW(t) { return t[1] }

    function dW(t, e, n) { return [t + Math.sin(t + e) * n, e + Math.cos(t - e) * n] } class hW { static from(t, e = uW, n = fW, i) { return new hW("length" in t ? function(t, e, n, i) { const r = t.length,
                    o = new Float64Array(2 * r); for (let a = 0; a < r; ++a) { const r = t[a];
                    o[2 * a] = e.call(i, r, a, t), o[2 * a + 1] = n.call(i, r, a, t) } return o }(t, e, n, i) : Float64Array.from(function*(t, e, n, i) { let r = 0; for (const o of t) yield e.call(i, o, r, t), yield n.call(i, o, r, t), ++r }(t, e, n, i))) } constructor(t) { this._delaunator = new qF(t), this.inedges = new Int32Array(t.length / 2), this._hullIndex = new Int32Array(t.length / 2), this.points = this._delaunator.coords, this._init() } update() { return this._delaunator.update(), this._init(), this } _init() { const t = this._delaunator,
                e = this.points; if (t.hull && t.hull.length > 2 && function(t) { const { triangles: e, coords: n } = t; for (let t = 0; t < e.length; t += 3) { const i = 2 * e[t],
                            r = 2 * e[t + 1],
                            o = 2 * e[t + 2]; if ((n[o] - n[i]) * (n[r + 1] - n[i + 1]) - (n[r] - n[i]) * (n[o + 1] - n[i + 1]) > 1e-10) return !1 } return !0 }(t)) { this.collinear = Int32Array.from({ length: e.length / 2 }, ((t, e) => e)).sort(((t, n) => e[2 * t] - e[2 * n] || e[2 * t + 1] - e[2 * n + 1])); const t = this.collinear[0],
                    n = this.collinear[this.collinear.length - 1],
                    i = [e[2 * t], e[2 * t + 1], e[2 * n], e[2 * n + 1]],
                    r = 1e-8 * Math.hypot(i[3] - i[1], i[2] - i[0]); for (let t = 0, n = e.length / 2; t < n; ++t) { const n = dW(e[2 * t], e[2 * t + 1], r);
                    e[2 * t] = n[0], e[2 * t + 1] = n[1] } this._delaunator = new qF(e) } else delete this.collinear; const n = this.halfedges = this._delaunator.halfedges,
                i = this.hull = this._delaunator.hull,
                r = this.triangles = this._delaunator.triangles,
                o = this.inedges.fill(-1),
                a = this._hullIndex.fill(-1); for (let t = 0, e = n.length; t < e; ++t) { const e = r[t % 3 == 2 ? t - 2 : t + 1]; - 1 !== n[t] && -1 !== o[e] || (o[e] = t) } for (let t = 0, e = i.length; t < e; ++t) a[i[t]] = t;
            i.length <= 2 && i.length > 0 && (this.triangles = new Int32Array(3).fill(-1), this.halfedges = new Int32Array(3).fill(-1), this.triangles[0] = i[0], this.triangles[1] = i[1], this.triangles[2] = i[1], o[i[0]] = 1, 2 === i.length && (o[i[1]] = 0)) } voronoi(t) { return new sW(this, t) }* neighbors(t) { const { inedges: e, hull: n, _hullIndex: i, halfedges: r, triangles: o, collinear: a } = this; if (a) { const e = a.indexOf(t); return e > 0 && (yield a[e - 1]), void(e < a.length - 1 && (yield a[e + 1])) } const s = e[t]; if (-1 === s) return; let l = s,
                c = -1;
            do { if (yield c = o[l], l = l % 3 == 2 ? l - 2 : l + 1, o[l] !== t) return; if (l = r[l], -1 === l) { const e = n[(i[t] + 1) % n.length]; return void(e !== c && (yield e)) } } while (l !== s) } find(t, e, n = 0) { if ((t = +t) != t || (e = +e) != e) return -1; const i = n; let r; for (;
                (r = this._step(n, t, e)) >= 0 && r !== n && r !== i;) n = r; return r } _step(t, e, n) { const { inedges: i, hull: r, _hullIndex: o, halfedges: a, triangles: s, points: l } = this; if (-1 === i[t] || !l.length) return (t + 1) % (l.length >> 1); let c = t,
                u = cW(e - l[2 * t], 2) + cW(n - l[2 * t + 1], 2); const f = i[t]; let d = f;
            do { let i = s[d]; const f = cW(e - l[2 * i], 2) + cW(n - l[2 * i + 1], 2); if (f < u && (u = f, c = i), d = d % 3 == 2 ? d - 2 : d + 1, s[d] !== t) break; if (d = a[d], -1 === d) { if (d = r[(o[t] + 1) % r.length], d !== i && cW(e - l[2 * d], 2) + cW(n - l[2 * d + 1], 2) < u) return d; break } } while (d !== f); return c } render(t) { const e = null == t ? t = new oW : void 0,
                { points: n, halfedges: i, triangles: r } = this; for (let e = 0, o = i.length; e < o; ++e) { const o = i[e]; if (o < e) continue; const a = 2 * r[e],
                    s = 2 * r[o];
                t.moveTo(n[a], n[a + 1]), t.lineTo(n[s], n[s + 1]) } return this.renderHull(t), e && e.value() } renderPoints(t, e = 2) { const n = null == t ? t = new oW : void 0,
                { points: i } = this; for (let n = 0, r = i.length; n < r; n += 2) { const r = i[n],
                    o = i[n + 1];
                t.moveTo(r + e, o), t.arc(r, o, e, 0, lW) } return n && n.value() } renderHull(t) { const e = null == t ? t = new oW : void 0,
                { hull: n, points: i } = this,
                r = 2 * n[0],
                o = n.length;
            t.moveTo(i[r], i[r + 1]); for (let e = 1; e < o; ++e) { const r = 2 * n[e];
                t.lineTo(i[r], i[r + 1]) } return t.closePath(), e && e.value() } hullPolygon() { const t = new aW; return this.renderHull(t), t.value() } renderTriangle(t, e) { const n = null == e ? e = new oW : void 0,
                { points: i, triangles: r } = this,
                o = 2 * r[t *= 3],
                a = 2 * r[t + 1],
                s = 2 * r[t + 2]; return e.moveTo(i[o], i[o + 1]), e.lineTo(i[a], i[a + 1]), e.lineTo(i[s], i[s + 1]), e.closePath(), n && n.value() }* trianglePolygons() { const { triangles: t } = this; for (let e = 0, n = t.length / 3; e < n; ++e) yield this.trianglePolygon(e) } trianglePolygon(t) { const e = new aW; return this.renderTriangle(t, e), e.value() } }

    function gW(t) { SM(t, "svelte-1awo5n0", ".tooltip-screen.svelte-1awo5n0{pointer-events:all;position:absolute;top:0;left:0;width:100%;height:100%}") } var pW = function(t) { return { data: 1 & t, x: 2 & t, y: 4 & t } },
        vW = function(t) { return { data: t[0], x: t[1], y: t[2] } };

    function mW(t) { var e, n = t[12].default,
            i = mM(n, t, t[11], vW); return { c: function() { i && i.c() }, m: function(t, n) { i && i.m(t, n), e = !0 }, p: function(t, r) { i && i.p && (!e || 2055 & r) && bM(i, n, t, t[11], e ? xM(n, t[11], r, pW) : $M(t[11]), vW) }, i: function(t) { e || (gS(i, t), e = !0) }, o: function(t) { pS(i, t), e = !1 }, d: function(t) { i && i.d(t) } } }

    function yW(t) { var e, n, i, r, o, a, s = t[0] && t[1] && t[2] && mW(t); return { c: function() { e = EM("div"), n = PM(), s && s.c(), i = BM(), zM(e, "class", "tooltip-screen svelte-1awo5n0") }, m: function(l, c) { AM(l, e, c), AM(l, n, c), s && s.m(l, c), AM(l, i, c), r = !0, o || (a = [kM(t[4].call(null, e)), kM(t[3].call(null, e)), LM(e, "click", t[13])], o = !0) }, p: function(t, e) { var n = Pe(e, 1)[0];
                t[0] && t[1] && t[2] ? s ? (s.p(t, n), 7 & n && gS(s, 1)) : ((s = mW(t)).c(), gS(s, 1), s.m(i.parentNode, i)) : s && (dS(), pS(s, 1, 1, (function() { s = null })), hS()) }, i: function(t) { r || (gS(s), r = !0) }, o: function(t) { pS(s), r = !1 }, d: function(t) { t && DM(e), t && DM(n), s && s.d(t), t && DM(i), o = !1, hM(a) } } }

    function xW(t, e, n) { var i, r, o, a = e,
            s = a.$$slots,
            l = void 0 === s ? {} : s,
            c = a.$$scope,
            u = e.delaunayPoints,
            f = void 0 === u ? [] : u,
            d = e.data,
            h = e.x,
            g = e.y,
            p = e.debug,
            v = void 0 !== p && p,
            m = QM(); var y = function() { var t = MS(); return { store: t, action: function(e) {
                        function n(e) { t.set(e) }

                        function i(e) { e.preventDefault(), t.set(e) }

                        function r() { t.set(null) } var o = ["mouseover", "mousemove", "touchstart"],
                            a = ["mouseout", "touchend"]; return o.forEach((function(t) { e.addEventListener(t, n, { passive: !0 }) })), a.forEach((function(t) { e.addEventListener(t, r, { passive: !0 }) })), e.addEventListener("touchmove", i, { passive: !1 }), { destroy: function() { o.forEach((function(t) { e.removeEventListener(t, n) })), a.forEach((function(t) { e.removeEventListener(t, r) })), e.removeEventListener("touchmove", i) } } } } }(),
            x = y.action,
            b = y.store; return vM(t, b, (function(t) { return n(10, o = t) })), t.$$set = function(t) { n(17, e = uM(uM({}, e), wM(t))), "delaunayPoints" in t && n(6, f = t.delaunayPoints), "data" in t && n(0, d = t.data), "x" in t && n(1, h = t.x), "y" in t && n(2, g = t.y), "debug" in t && n(7, v = t.debug), "$$scope" in t && n(11, c = t.$$scope) }, t.$$.update = function() { if (64 & t.$$.dirty && n(8, i = hW.from(f, (function(t) { return t.x }), (function(t) { return t.y }))), 1024 & t.$$.dirty && n(9, r = o), t.$$.dirty, 960 & t.$$.dirty)
                if (r) { var e = r,
                        a = e.clientX,
                        s = e.clientY; if (Array.isArray(r.touches)) { var l = r.touches[0];
                        a = l.clientX, s = l.clientY } var c = r.target.getBoundingClientRect() || { left: 0, top: 0 },
                        u = a - c.left,
                        p = s - c.top,
                        v = i.find(u, p);!Number.isFinite(v) && f.length; var y = f[v];
                    y ? (n(0, d = y), n(1, h = y.x), n(2, g = y.y)) : n(0, d = null) } else n(0, d = null);
            1 & t.$$.dirty && m("data", d, { cancelable: !1 }) }, e = wM(e), [d, h, g, function(t) { var e = function() { var e = t.getBoundingClientRect();
                e.width, e.height };
            e(); var n = new window.ResizeObserver((function() { e() })); return n.observe(t), { destroy: function() { n.disconnect() } } }, x, b, f, v, i, r, o, c, l, function(e) { KM.call(this, t, e) }] } var bW = function(t) { Ae(n, t); var e = Te(n);

        function n(t) { var i; return be(this, n), wS(Ee(i = e.call(this)), t, xW, yW, pM, { delaunayPoints: 6, data: 0, x: 1, y: 2, debug: 7 }, gW), i } return we(n, [{ key: "delaunayPoints", get: function() { return this.$$.ctx[6] }, set: function(t) { this.$$set({ delaunayPoints: t }), lS() } }, { key: "data", get: function() { return this.$$.ctx[0] }, set: function(t) { this.$$set({ data: t }), lS() } }, { key: "x", get: function() { return this.$$.ctx[1] }, set: function(t) { this.$$set({ x: t }), lS() } }, { key: "y", get: function() { return this.$$.ctx[2] }, set: function(t) { this.$$set({ y: t }), lS() } }, { key: "debug", get: function() { return this.$$.ctx[7] }, set: function(t) { this.$$set({ debug: t }), lS() } }]), n }(_S);

    function $W(t) { SM(t, "svelte-115b3tm", ".tt-row.svelte-115b3tm.svelte-115b3tm{margin-top:6px}.big-number.svelte-115b3tm.svelte-115b3tm{font-size:30px;line-height:36px}.small-label.svelte-115b3tm.svelte-115b3tm{font-size:14px;line-height:14px;margin-bottom:6px;margin-top:-2px}.tt-row.mobile.svelte-115b3tm .big-number.svelte-115b3tm{font-size:22px;line-height:26px}.tt-row.mobile.svelte-115b3tm .small-label.svelte-115b3tm{font-size:12px;line-height:12px}") }

    function wW(t) { var e, n, i = t[2].trim() + ""; return { c: function() { e = EM("div"), n = TM(i), zM(e, "class", "small-label svelte-115b3tm") }, m: function(t, i) { AM(t, e, i), MM(e, n) }, p: function(t, e) { 4 & e && i !== (i = t[2].trim() + "") && FM(n, i) }, d: function(t) { t && DM(e) } } }

    function _W(t) { var e, n, i, r, o, a = t[3](t[0]) + "",
            s = t[2] && wW(t); return { c: function() { e = EM("div"), n = EM("div"), i = TM(a), r = PM(), s && s.c(), zM(n, "class", "big-number svelte-115b3tm"), zM(e, "class", o = "tt-row " + (t[1] ? "mobile" : "") + " svelte-115b3tm") }, m: function(t, o) { AM(t, e, o), MM(e, n), MM(n, i), MM(e, r), s && s.m(e, null) }, p: function(t, n) { var r = Pe(n, 1)[0];
                9 & r && a !== (a = t[3](t[0]) + "") && FM(i, a), t[2] ? s ? s.p(t, r) : ((s = wW(t)).c(), s.m(e, null)) : s && (s.d(1), s = null), 2 & r && o !== (o = "tt-row " + (t[1] ? "mobile" : "") + " svelte-115b3tm") && zM(e, "class", o) }, i: cM, o: cM, d: function(t) { t && DM(e), s && s.d() } } }

    function kW(t, e, n) { var i, r, o, a, s, l = e.env,
            c = e.field,
            u = void 0 === c ? {} : c,
            f = e.value,
            d = e.label,
            h = e.formatOptions,
            g = void 0 === h ? {} : h,
            p = e.isMobile,
            v = void 0 !== p && p; return t.$$set = function(t) { "env" in t && n(4, l = t.env), "field" in t && n(5, u = t.field), "value" in t && n(0, f = t.value), "label" in t && n(6, d = t.label), "formatOptions" in t && n(7, g = t.formatOptions), "isMobile" in t && n(1, v = t.isMobile) }, t.$$.update = function() { 176 & t.$$.dirty && n(3, i = Q_(u, l, Se({ preventLongPrePost: !0 }, g))), 32 & t.$$.dirty && n(10, r = u.label || u.caption), 32 & t.$$.dirty && n(9, o = u.unitBefore || ""), 32 & t.$$.dirty && n(8, a = u.unitAfter || ""), 1856 & t.$$.dirty && n(2, s = d || r || (o.length > 3 ? o : "") || (a.length > 3 ? a : "")) }, [f, v, s, i, l, u, d, g, a, o, r] } var MW = function(t) { Ae(n, t); var e = Te(n);

        function n(t) { var i; return be(this, n), wS(Ee(i = e.call(this)), t, kW, _W, pM, { env: 4, field: 5, value: 0, label: 6, formatOptions: 7, isMobile: 1 }, $W), i } return we(n, [{ key: "env", get: function() { return this.$$.ctx[4] }, set: function(t) { this.$$set({ env: t }), lS() } }, { key: "field", get: function() { return this.$$.ctx[5] }, set: function(t) { this.$$set({ field: t }), lS() } }, { key: "value", get: function() { return this.$$.ctx[0] }, set: function(t) { this.$$set({ value: t }), lS() } }, { key: "label", get: function() { return this.$$.ctx[6] }, set: function(t) { this.$$set({ label: t }), lS() } }, { key: "formatOptions", get: function() { return this.$$.ctx[7] }, set: function(t) { this.$$set({ formatOptions: t }), lS() } }, { key: "isMobile", get: function() { return this.$$.ctx[1] }, set: function(t) { this.$$set({ isMobile: t }), lS() } }]), n }(_S);

    function SW(t) { var e, n, i; return { c: function() { zM(e = OM("g"), "class", "threshold-lines"), zM(e, "data-dimensions", t[0]) }, m: function(r, o) { AM(r, e, o), n || (i = kM(t[1].call(null, e)), n = !0) }, p: function(t, n) { 1 & Pe(n, 1)[0] && zM(e, "data-dimensions", t[0]) }, i: cM, o: cM, d: function(t) { t && DM(e), n = !1, i() } } }

    function AW(t, e, n) { var i, r = e.env,
            o = e.dimensions; return t.$$set = function(t) { "env" in t && n(2, r = t.env), "dimensions" in t && n(0, o = t.dimensions) }, [o, function(t) { var e = oD(Se(Se({}, r.options), {}, { thresholds: r.data.config.thresholds }));
            o !== i && e(Ep(t), r), i = o }, r] } var DW = function(t) { Ae(n, t); var e = Te(n);

        function n(t) { var i; return be(this, n), wS(Ee(i = e.call(this)), t, AW, SW, pM, { env: 2, dimensions: 0 }), i } return we(n, [{ key: "env", get: function() { return this.$$.ctx[2] }, set: function(t) { this.$$set({ env: t }), lS() } }, { key: "dimensions", get: function() { return this.$$.ctx[0] }, set: function(t) { this.$$set({ dimensions: t }), lS() } }]), n }(_S);

    function CW(t) { SM(t, "svelte-vbbzjk", "b.small-label.svelte-vbbzjk{font-size:14px;display:block;margin:4px 0 0px}.empty-margin.svelte-vbbzjk{display:block;margin-bottom:8px}.label-bottom.svelte-vbbzjk::after{content:'►';margin-left:4px;font-size:12px}") }

    function EW(t) { var e, n, i; return n = new eB({ props: { id: "x", env: t[0], type: "linear", field: t[1].fields[qW], orientation: "horizontal", position: "bottom", range: t[31], afterRender: t[33], props: { isPrimaryAxis: !0, domainFromZero: !1, verticalTickLength: 16, leftAlignStartTick: !0 } } }), { c: function() { e = OM("g"), yS(n.$$.fragment), zM(e, "slot", "x-axis") }, m: function(t, r) { AM(t, e, r), xS(n, e, null), i = !0 }, p: function(t, e) { var i = {};
                1 & e[0] && (i.env = t[0]), 2 & e[0] && (i.field = t[1].fields[qW]), 1 & e[1] && (i.range = t[31]), 4 & e[1] && (i.afterRender = t[33]), n.$set(i) }, i: function(t) { i || (gS(n.$$.fragment, t), i = !0) }, o: function(t) { pS(n.$$.fragment, t), i = !1 }, d: function(t) { t && DM(e), bS(n) } } }

    function OW(t) { var e, n, i; return n = new eB({ props: { id: "y", env: t[0], type: "linear", field: t[1].fields[GW], orientation: "vertical", position: "right", range: t[32], afterRender: t[33], props: { isPrimaryAxis: !1, domainFromZero: !1 } } }), { c: function() { e = OM("g"), yS(n.$$.fragment), zM(e, "slot", "y-axis") }, m: function(t, r) { AM(t, e, r), xS(n, e, null), i = !0 }, p: function(t, e) { var i = {};
                1 & e[0] && (i.env = t[0]), 2 & e[0] && (i.field = t[1].fields[GW]), 2 & e[1] && (i.range = t[32]), 4 & e[1] && (i.afterRender = t[33]), n.$set(i) }, i: function(t) { i || (gS(n.$$.fragment, t), i = !0) }, o: function(t) { pS(n.$$.fragment, t), i = !1 }, d: function(t) { t && DM(e), bS(n) } } }

    function TW(t) { var e, n, i, r, o, a, s, l = QS(t[0]),
            c = KS(t[0]),
            u = l && PW(t),
            f = c && BW(t),
            d = t[1].config.scatterPlotIncludesLineGraph && LW(t);
        o = new FP({ props: { env: t[0], fields: t[15], activeTooltipIndex: null === (e = t[7]) || void 0 === e ? void 0 : e.index, xScale: t[5].scale, yScale: t[4].scale } }); var h = t[1].config.thresholds && zW(t); return { c: function() { u && u.c(), n = BM(), f && f.c(), i = BM(), d && d.c(), r = BM(), yS(o.$$.fragment), h && h.c(), a = BM() }, m: function(t, e) { u && u.m(t, e), AM(t, n, e), f && f.m(t, e), AM(t, i, e), d && d.m(t, e), AM(t, r, e), xS(o, t, e), h && h.m(t, e), AM(t, a, e), s = !0 }, p: function(t, e) { var s;
                1 & e[0] && (l = QS(t[0])), l ? u ? (u.p(t, e), 1 & e[0] && gS(u, 1)) : ((u = PW(t)).c(), gS(u, 1), u.m(n.parentNode, n)) : u && (dS(), pS(u, 1, 1, (function() { u = null })), hS()), 1 & e[0] && (c = KS(t[0])), c ? f ? (f.p(t, e), 1 & e[0] && gS(f, 1)) : ((f = BW(t)).c(), gS(f, 1), f.m(i.parentNode, i)) : f && (dS(), pS(f, 1, 1, (function() { f = null })), hS()), t[1].config.scatterPlotIncludesLineGraph ? d ? (d.p(t, e), 2 & e[0] && gS(d, 1)) : ((d = LW(t)).c(), gS(d, 1), d.m(r.parentNode, r)) : d && (dS(), pS(d, 1, 1, (function() { d = null })), hS()); var g = {};
                1 & e[0] && (g.env = t[0]), 128 & e[0] && (g.activeTooltipIndex = null === (s = t[7]) || void 0 === s ? void 0 : s.index), 32 & e[0] && (g.xScale = t[5].scale), 16 & e[0] && (g.yScale = t[4].scale), o.$set(g), t[1].config.thresholds ? h ? (h.p(t, e), 2 & e[0] && gS(h, 1)) : ((h = zW(t)).c(), gS(h, 1), h.m(a.parentNode, a)) : h && (dS(), pS(h, 1, 1, (function() { h = null })), hS()) }, i: function(t) { s || (gS(u), gS(f), gS(d), gS(o.$$.fragment, t), gS(h), s = !0) }, o: function(t) { pS(u), pS(f), pS(d), pS(o.$$.fragment, t), pS(h), s = !1 }, d: function(t) { u && u.d(t), t && DM(n), f && f.d(t), t && DM(i), d && d.d(t), t && DM(r), bS(o, t), h && h.d(t), t && DM(a) } } }

    function PW(t) { var e, n; return e = new rB({ props: { env: t[0], orientation: "horizontal", dimensions: t[6], options: { hideBottomValueTick: !t[14] } } }), { c: function() { yS(e.$$.fragment) }, m: function(t, i) { xS(e, t, i), n = !0 }, p: function(t, n) { var i = {};
                1 & n[0] && (i.env = t[0]), 64 & n[0] && (i.dimensions = t[6]), e.$set(i) }, i: function(t) { n || (gS(e.$$.fragment, t), n = !0) }, o: function(t) { pS(e.$$.fragment, t), n = !1 }, d: function(t) { bS(e, t) } } }

    function BW(t) { var e, n; return e = new rB({ props: { env: t[0], orientation: "vertical", dimensions: t[6] } }), { c: function() { yS(e.$$.fragment) }, m: function(t, i) { xS(e, t, i), n = !0 }, p: function(t, n) { var i = {};
                1 & n[0] && (i.env = t[0]), 64 & n[0] && (i.dimensions = t[6]), e.$set(i) }, i: function(t) { n || (gS(e.$$.fragment, t), n = !0) }, o: function(t) { pS(e.$$.fragment, t), n = !1 }, d: function(t) { bS(e, t) } } }

    function LW(t) { var e, n; return e = new OP({ props: { env: t[0], fields: t[15], xScale: t[5].scale, yScale: t[4].scale } }), { c: function() { yS(e.$$.fragment) }, m: function(t, i) { xS(e, t, i), n = !0 }, p: function(t, n) { var i = {};
                1 & n[0] && (i.env = t[0]), 32 & n[0] && (i.xScale = t[5].scale), 16 & n[0] && (i.yScale = t[4].scale), e.$set(i) }, i: function(t) { n || (gS(e.$$.fragment, t), n = !0) }, o: function(t) { pS(e.$$.fragment, t), n = !1 }, d: function(t) { bS(e, t) } } }

    function zW(t) { var e, n; return e = new DW({ props: { env: t[0], dimensions: t[6] } }), { c: function() { yS(e.$$.fragment) }, m: function(t, i) { xS(e, t, i), n = !0 }, p: function(t, n) { var i = {};
                1 & n[0] && (i.env = t[0]), 64 & n[0] && (i.dimensions = t[6]), e.$set(i) }, i: function(t) { n || (gS(e.$$.fragment, t), n = !0) }, o: function(t) { pS(e.$$.fragment, t), n = !1 }, d: function(t) { bS(e, t) } } }

    function YW(t) { var e, n, i = t[3] && TW(t); return { c: function() { e = OM("g"), i && i.c(), zM(e, "slot", "renderer") }, m: function(t, r) { AM(t, e, r), i && i.m(e, null), n = !0 }, p: function(t, n) { t[3] ? i ? (i.p(t, n), 8 & n[0] && gS(i, 1)) : ((i = TW(t)).c(), gS(i, 1), i.m(e, null)) : i && (dS(), pS(i, 1, 1, (function() { i = null })), hS()) }, i: function(t) { n || (gS(i), n = !0) }, o: function(t) { pS(i), n = !1 }, d: function(t) { t && DM(e), i && i.d() } } }

    function FW(t) { var e, n, i; return { c: function() { e = EM("div"), n = EM("div"), i = TM(t[11]), zM(n, "class", "label-bottom svelte-vbbzjk"), zM(n, "style", t[10]), zM(e, "class", "chart-footer") }, m: function(t, r) { AM(t, e, r), MM(e, n), MM(n, i) }, p: function(t, e) { 2048 & e[0] && FM(i, t[11]), 1024 & e[0] && zM(n, "style", t[10]) }, d: function(t) { t && DM(e) } } }

    function WW(t) { var e, n, i, r, o;
        e = new jF({ props: { env: t[0], annotations: t[1].config.draggableAnnotations } }); var a = t[12] && RW(t),
            s = t[7] && NW(t); return { c: function() { yS(e.$$.fragment), n = PM(), a && a.c(), i = PM(), s && s.c(), r = BM() }, m: function(t, l) { xS(e, t, l), AM(t, n, l), a && a.m(t, l), AM(t, i, l), s && s.m(t, l), AM(t, r, l), o = !0 }, p: function(t, n) { var o = {};
                1 & n[0] && (o.env = t[0]), 2 & n[0] && (o.annotations = t[1].config.draggableAnnotations), e.$set(o), t[12] ? a ? (a.p(t, n), 4096 & n[0] && gS(a, 1)) : ((a = RW(t)).c(), gS(a, 1), a.m(i.parentNode, i)) : a && (dS(), pS(a, 1, 1, (function() { a = null })), hS()), t[7] ? s ? (s.p(t, n), 128 & n[0] && gS(s, 1)) : ((s = NW(t)).c(), gS(s, 1), s.m(r.parentNode, r)) : s && (dS(), pS(s, 1, 1, (function() { s = null })), hS()) }, i: function(t) { o || (gS(e.$$.fragment, t), gS(a), gS(s), o = !0) }, o: function(t) { pS(e.$$.fragment, t), pS(a), pS(s), o = !1 }, d: function(t) { bS(e, t), t && DM(n), a && a.d(t), t && DM(i), s && s.d(t), t && DM(r) } } }

    function RW(t) { var e, n; return (e = new bW({ props: { delaunayPoints: t[8] || [] } })).$on("data", t[23]), { c: function() { yS(e.$$.fragment) }, m: function(t, i) { xS(e, t, i), n = !0 }, p: function(t, n) { var i = {};
                256 & n[0] && (i.delaunayPoints = t[8] || []), e.$set(i) }, i: function(t) { n || (gS(e.$$.fragment, t), n = !0) }, o: function(t) { pS(e.$$.fragment, t), n = !1 }, d: function(t) { bS(e, t) } } }

    function NW(t) { var e, n; return e = new hB({ props: { darkTheme: Xu(t[0].data, t[0].options), circleRadius: t[7].radius, circleBuffer: 0, left: t[7].x + "px", top: t[7].y + "px", minWidth: t[13] ? "110px" : "140px", $$slots: { default: [UW] }, $$scope: { ctx: t } } }), { c: function() { yS(e.$$.fragment) }, m: function(t, i) { xS(e, t, i), n = !0 }, p: function(t, n) { var i = {};
                1 & n[0] && (i.darkTheme = Xu(t[0].data, t[0].options)), 128 & n[0] && (i.circleRadius = t[7].radius), 128 & n[0] && (i.left = t[7].x + "px"), 128 & n[0] && (i.top = t[7].y + "px"), 8192 & n[0] && (i.minWidth = t[13] ? "110px" : "140px"), 8323 & n[0] | 8 & n[1] && (i.$$scope = { dirty: n, ctx: t }), e.$set(i) }, i: function(t) { n || (gS(e.$$.fragment, t), n = !0) }, o: function(t) { pS(e.$$.fragment, t), n = !1 }, d: function(t) { bS(e, t) } } }

    function HW(t) { var e, n; return e = new MW({ props: { value: t[16].data[t[7].index], label: t[1].config.labelPrimary, field: t[16], env: t[0], isMobile: t[13], formatOptions: { decimalPlaces: Mf(t[1], "tooltipDecimalsPrimary", "decimalsPrimary") } } }), { c: function() { yS(e.$$.fragment) }, m: function(t, i) { xS(e, t, i), n = !0 }, p: function(t, n) { var i = {};
                128 & n[0] && (i.value = t[16].data[t[7].index]), 2 & n[0] && (i.label = t[1].config.labelPrimary), 1 & n[0] && (i.env = t[0]), 8192 & n[0] && (i.isMobile = t[13]), 2 & n[0] && (i.formatOptions = { decimalPlaces: Mf(t[1], "tooltipDecimalsPrimary", "decimalsPrimary") }), e.$set(i) }, i: function(t) { n || (gS(e.$$.fragment, t), n = !0) }, o: function(t) { pS(e.$$.fragment, t), n = !1 }, d: function(t) { bS(e, t) } } }

    function jW(t) { var e, n; return e = new MW({ props: { value: t[17].data[t[7].index], field: t[17], env: t[0], isMobile: t[13], formatOptions: { decimalPlaces: Mf(t[1], "tooltipDecimalsSecondary", "decimalsSecondary") } } }), { c: function() { yS(e.$$.fragment) }, m: function(t, i) { xS(e, t, i), n = !0 }, p: function(t, n) { var i = {};
                128 & n[0] && (i.value = t[17].data[t[7].index]), 1 & n[0] && (i.env = t[0]), 8192 & n[0] && (i.isMobile = t[13]), 2 & n[0] && (i.formatOptions = { decimalPlaces: Mf(t[1], "tooltipDecimalsSecondary", "decimalsSecondary") }), e.$set(i) }, i: function(t) { n || (gS(e.$$.fragment, t), n = !0) }, o: function(t) { pS(e.$$.fragment, t), n = !1 }, d: function(t) { bS(e, t) } } }

    function IW(t) { var e, n; return e = new MW({ props: { value: t[18].data[t[7].index], field: t[18], label: Mf(t[1], "scaleLegendLabel"), env: t[0], isMobile: t[13], formatOptions: { decimalPlaces: Mf(t[1], "scaleTooltipPrecision", "scalePrecision"), unitBefore: Mf(t[1], "scalePrefix"), unitAfter: Mf(t[1], "scalePostfix") } } }), { c: function() { yS(e.$$.fragment) }, m: function(t, i) { xS(e, t, i), n = !0 }, p: function(t, n) { var i = {};
                128 & n[0] && (i.value = t[18].data[t[7].index]), 2 & n[0] && (i.label = Mf(t[1], "scaleLegendLabel")), 1 & n[0] && (i.env = t[0]), 8192 & n[0] && (i.isMobile = t[13]), 2 & n[0] && (i.formatOptions = { decimalPlaces: Mf(t[1], "scaleTooltipPrecision", "scalePrecision"), unitBefore: Mf(t[1], "scalePrefix"), unitAfter: Mf(t[1], "scalePostfix") }), e.$set(i) }, i: function(t) { n || (gS(e.$$.fragment, t), n = !0) }, o: function(t) { pS(e.$$.fragment, t), n = !1 }, d: function(t) { bS(e, t) } } }

    function VW(t) { var e, n; return e = new MW({ props: { value: t[19].data[t[7].index], field: t[19], env: t[0], isMobile: t[13], formatOptions: { decimalPlaces: Mf(t[1], "gradientTooltipDecimals", "gradientDecimals"), unitBefore: Mf(t[1], "gradientPrefix"), unitAfter: Mf(t[1], "gradientPostfix") } } }), { c: function() { yS(e.$$.fragment) }, m: function(t, i) { xS(e, t, i), n = !0 }, p: function(t, n) { var i = {};
                128 & n[0] && (i.value = t[19].data[t[7].index]), 1 & n[0] && (i.env = t[0]), 8192 & n[0] && (i.isMobile = t[13]), 2 & n[0] && (i.formatOptions = { decimalPlaces: Mf(t[1], "gradientTooltipDecimals", "gradientDecimals"), unitBefore: Mf(t[1], "gradientPrefix"), unitAfter: Mf(t[1], "gradientPostfix") }), e.$set(i) }, i: function(t) { n || (gS(e.$$.fragment, t), n = !0) }, o: function(t) { pS(e.$$.fragment, t), n = !1 }, d: function(t) { bS(e, t) } } }

    function UW(t) { var e, n, i, r, o, a, s, l, c = t[7].label + "",
            u = AP(t[0], "x"),
            f = AP(t[0], "y"),
            d = t[18] && AP(t[0], "scale"),
            h = t[19] && AP(t[0], "gradient"),
            g = u && HW(t),
            p = f && jW(t),
            v = d && IW(t),
            m = h && VW(t); return { c: function() { e = EM("b"), n = TM(c), i = PM(), g && g.c(), r = PM(), p && p.c(), o = PM(), v && v.c(), a = PM(), m && m.c(), s = BM(), zM(e, "class", "small-label svelte-vbbzjk") }, m: function(t, c) { AM(t, e, c), MM(e, n), AM(t, i, c), g && g.m(t, c), AM(t, r, c), p && p.m(t, c), AM(t, o, c), v && v.m(t, c), AM(t, a, c), m && m.m(t, c), AM(t, s, c), l = !0 }, p: function(t, e) {
                (!l || 128 & e[0]) && c !== (c = t[7].label + "") && FM(n, c), 1 & e[0] && (u = AP(t[0], "x")), u ? g ? (g.p(t, e), 1 & e[0] && gS(g, 1)) : ((g = HW(t)).c(), gS(g, 1), g.m(r.parentNode, r)) : g && (dS(), pS(g, 1, 1, (function() { g = null })), hS()), 1 & e[0] && (f = AP(t[0], "y")), f ? p ? (p.p(t, e), 1 & e[0] && gS(p, 1)) : ((p = jW(t)).c(), gS(p, 1), p.m(o.parentNode, o)) : p && (dS(), pS(p, 1, 1, (function() { p = null })), hS()), 1 & e[0] && (d = t[18] && AP(t[0], "scale")), d ? v ? (v.p(t, e), 1 & e[0] && gS(v, 1)) : ((v = IW(t)).c(), gS(v, 1), v.m(a.parentNode, a)) : v && (dS(), pS(v, 1, 1, (function() { v = null })), hS()), 1 & e[0] && (h = t[19] && AP(t[0], "gradient")), h ? m ? (m.p(t, e), 1 & e[0] && gS(m, 1)) : ((m = VW(t)).c(), gS(m, 1), m.m(s.parentNode, s)) : m && (dS(), pS(m, 1, 1, (function() { m = null })), hS()) }, i: function(t) { l || (gS(g), gS(p), gS(v), gS(m), l = !0) }, o: function(t) { pS(g), pS(p), pS(v), pS(m), l = !1 }, d: function(t) { t && DM(e), t && DM(i), g && g.d(t), t && DM(r), p && p.d(t), t && DM(o), v && v.d(t), t && DM(a), m && m.d(t), t && DM(s) } } }

    function XW(t) { var e, n, i, r, o, a, s, l;
        e = new KP({ props: { env: t[0], aspectRatio: tA(t[1], "4:3", void 0, t[0].options), yAxisInnerPadding: 0, yAxisPosition: "right", xAxisPosition: "bottom", $$slots: { renderer: [YW, function(t) { return { 31: t.xRange, 32: t.yRange, 33: t.afterRender } }, function(t) { return [0, (t.xRange ? 1 : 0) | (t.yRange ? 2 : 0) | (t.afterRender ? 4 : 0)] }], "y-axis": [OW, function(t) { return { 31: t.xRange, 32: t.yRange, 33: t.afterRender } }, function(t) { return [0, (t.xRange ? 1 : 0) | (t.yRange ? 2 : 0) | (t.afterRender ? 4 : 0)] }], "x-axis": [EW, function(t) { return { 31: t.xRange, 32: t.yRange, 33: t.afterRender } }, function(t) { return [0, (t.xRange ? 1 : 0) | (t.yRange ? 2 : 0) | (t.afterRender ? 4 : 0)] }] }, $$scope: { ctx: t } } }); var c = t[3] && t[11] && FW(t),
            u = t[3] && WW(t); return { c: function() { yS(e.$$.fragment), n = PM(), c && c.c(), i = PM(), r = EM("div"), u && u.c(), o = PM(), a = EM("div"), zM(r, "class", "annotation-layer"), zM(r, "style", t[9]), zM(a, "class", "empty-margin svelte-vbbzjk"), oS((function() { return t[24].call(a) })) }, m: function(f, d) { xS(e, f, d), AM(f, n, d), c && c.m(f, d), AM(f, i, d), AM(f, r, d), u && u.m(r, null), AM(f, o, d), AM(f, a, d), s = VM(a, t[24].bind(a)), l = !0 }, p: function(t, n) { var o = {};
                1 & n[0] && (o.env = t[0]), 3 & n[0] && (o.aspectRatio = tA(t[1], "4:3", void 0, t[0].options)), 251 & n[0] | 15 & n[1] && (o.$$scope = { dirty: n, ctx: t }), e.$set(o), t[3] && t[11] ? c ? c.p(t, n) : ((c = FW(t)).c(), c.m(i.parentNode, i)) : c && (c.d(1), c = null), t[3] ? u ? (u.p(t, n), 8 & n[0] && gS(u, 1)) : ((u = WW(t)).c(), gS(u, 1), u.m(r, null)) : u && (dS(), pS(u, 1, 1, (function() { u = null })), hS()), (!l || 512 & n[0]) && zM(r, "style", t[9]) }, i: function(t) { l || (gS(e.$$.fragment, t), gS(u), l = !0) }, o: function(t) { pS(e.$$.fragment, t), pS(u), l = !1 }, d: function(t) { bS(e, t), t && DM(n), c && c.d(t), t && DM(i), t && DM(r), u && u.d(), t && DM(o), t && DM(a), s() } } } var qW = 1,
        GW = 2;

    function ZW(t, e, n) { var i, r, o, a, s, l, c, u, f, d, h, g;
        vM(t, CS, (function(t) { return n(4, f = t) })), vM(t, DS, (function(t) { return n(5, d = t) })), vM(t, SS, (function(t) { return n(6, h = t) })), vM(t, AS, (function(t) { return n(22, g = t) })); var p, v, m, y = e.env,
            x = e.chartData,
            b = e.onRender,
            $ = JS(y);
        y.options = Se(Se({}, { dotRadius: 5 }), y.options); var w = ["toaster-chart-scatterplot", $ ? void 0 : "no-domain"];
        (i = y.el.classList).add.apply(i, w); var _ = bP(x);
        xP(x, _); var k = SP(y, _).radiusScale,
            M = _.primaryField,
            S = _.secondaryField,
            A = _.scaleField,
            D = _.gradientField; return t.$$set = function(t) { "env" in t && n(0, y = t.env), "chartData" in t && n(1, x = t.chartData), "onRender" in t && n(20, b = t.onRender) }, t.$$.update = function() { 5 & t.$$.dirty[0] && n(13, r = xl(p, y.options)), 3 & t.$$.dirty[0] && n(12, o = !(y.options.disableTooltip || x.config.disableTooltip)), 4194416 & t.$$.dirty[0] && n(3, a = d && f && g && h), 2 & t.$$.dirty[0] && x.fields[0], 2 & t.$$.dirty[0] && x.fields[qW], 2 & t.$$.dirty[0] && x.fields[GW], 2 & t.$$.dirty[0] && n(11, s = x.config.labelPrimary), 4194312 & t.$$.dirty[0] && n(10, l = "\n    text-align: left;\n    margin-left: ".concat(a && g.yAxisInnerPadding() + 4 || 4, "px;\n    max-width: 140px;\n  ")), 7340105 & t.$$.dirty[0] && a && h && (GA(y, !1, { noLabelPadding: !0 }, h), function(t) { GA(t, !0) }(y), function(t) { var e = t.el.querySelector(".axis-y .tick:last-child line").getBoundingClientRect().width,
                    n = t.layout.outerWidth() + e;
                Ep(".grid-x .zero-line").attr("x2", n) }(y), g.updateAllBounds(), RP(h, m) && (n(21, m = { width: h.width, height: h.height }), b && setTimeout(b, 1))), 72 & t.$$.dirty[0] && n(9, c = a && "\n    position: absolute;\n    top: ".concat(h.top, "px;\n    left: ").concat(h.left, "px;\n    width: ").concat(h.width, "px;\n    height: ").concat(h.height, "px;\n  ")), 58 & t.$$.dirty[0] && n(8, u = a && x.data.map((function(t, e) { return { index: e, label: t[0], x: d.scale(t[qW]), y: f.scale(t[GW]), radius: k(e) } }))) }, [y, x, p, a, f, d, h, v, u, c, l, s, o, r, $, _, M, S, A, D, b, m, g, function(t) { t && t.detail ? n(7, v = null == t ? void 0 : t.detail) : n(7, v = null) }, function() { p = this.offsetWidth, n(2, p) }] } var QW = function(t) { Ae(n, t); var e = Te(n);

        function n(t) { var i; return be(this, n), wS(Ee(i = e.call(this)), t, ZW, XW, pM, { env: 0, chartData: 1, onRender: 20 }, CW, [-1, -1]), i } return we(n, [{ key: "env", get: function() { return this.$$.ctx[0] }, set: function(t) { this.$$set({ env: t }), lS() } }, { key: "chartData", get: function() { return this.$$.ctx[1] }, set: function(t) { this.$$set({ chartData: t }), lS() } }, { key: "onRender", get: function() { return this.$$.ctx[20] }, set: function(t) { this.$$set({ onRender: t }), lS() } }]), n }(_S);

    function KW(t, e) { var n = ju({ theme: "business", orientation: VS, forceDiscrete: !1, domainFromZero: !1, yearsAsContinuous: !0, noPadding: !0, showGrid: !1, prefixSecondary: void 0, postfixSecondary: void 0, aspectRatio: "5:2", unitBefore: "asdf", min: 0, onComplete: function() { return null }, x: [], y: [], layoutManager: { yAxisInnerPadding: 10 }, dateAxis: {}, bandAxis: { outerPadding: 0 }, linearAxis: {} }, e),
            i = n.orientation !== VS,
            r = Ep(t).classed("toaster-chart", !0).classed("toaster-theme-".concat(n.theme), !0),
            o = [];
        o = i ? n.y.map((function(t, e) { return [t, n.x[e]] })) : n.x.map((function(t, e) { return [t, n.y[e]] })); var a = { theme: n.theme, fields: [{ name: "" }, { name: "" }], data: o, config: Se({}, n), chartOptions: {} };! function(t) { var e = t.config,
                n = void 0 === e ? {} : e;
            Object.keys(xf).forEach((function(e) { null != n[e] && _f(t, e, n[e]) })) }(a), dd(a, e), n.forceDiscrete ? jC(a) : Bk(a, !1, n); var s = rA(r, a, n),
            l = a.fields[0],
            c = n.forceDiscrete || eE(l),
            u = VS,
            f = IS,
            d = !1,
            h = !1;
        i || (d = FS(r, a, s.options), h = WS(r, a, s.options)), i && (a.data.length <= 5 ? s.options.bandAxis.horizontalBarHeight = s.options.bandAxis.horizontalBarHeightLarge : a.data.length > 15 && (s.options.bandAxis.horizontalBarHeight = s.options.bandAxis.horizontalBarHeightCondensed), u = US, f = jS, s.options.disableGrid = !1, s.options.layoutManager.margin.top = 0, s.options.layoutManager.margin.bottom = 20, s.options.layoutManager.margin.right = 30, s.options.layoutManager.margin.left = 0, s.options.layoutManager.yAxisInnerPadding = s.options.horizontalLayoutPadding, s.options.layoutManager.verticalAxisShift = -5), r.classed("vertical-flow", i); var g = Se({ isPrimaryAxis: !0, stackedBand: !0, isDateAxis: d, isContinuousAxis: h }, s.options.bandAxis),
            p = Se({ isPrimaryAxis: !1, domainFromZero: n.domainFromZero, stackedDomain: !1 }, s.options.linearAxis),
            v = iD(Se({ primaryAxis: c ? tD(g) : nD({ isPrimaryAxis: !0 }), secondaryAxis: JA(p), orientation: u, yAxisPosition: f }, s.options.layoutManager)),
            m = r.selectAppend("div.chart");
        m.selectAll("*").remove(), m.call(v, s); var y = v.draw().classed("dumbbell", !0),
            x = s.x.rangeLength() + v.xAxisExtendRight() + 2 * v.yAxisInnerPadding(); if (r.classed("no-grid", !n.showGrid).classed("no-domain", !JS(s)).classed("no-axis", s.options.disableGrid), u === VS ? y.selectAppend("g.grid").call($A({ length: x }), s) : (x = s.y.rangeLength() + 2 * v.xAxisInnerPadding(), y.selectAppend("g.grid").call($A({ length: x, orientation: qS, hideBottomValueTick: !1, extendVerticalZeroTick: !0, gridTransform: [0, 0] }), s)), !i && a.config.highlightRanges) { var b = a.config.highlightRanges,
                $ = b.ranges,
                w = b.rangeStyle;
            y.selectAppend("g.highlight-ranges").call(rD({ ranges: $, rangeStyle: w, isColumnType: !0 }), s) } return GA(s, i), i || a.config.thresholds && y.selectAppend("g.threshold-lines").call(oD(Se(Se({}, s.options), {}, { thresholds: a.config.thresholds })), s), m.call((function(t, e, n) { if (n.config && !e.options.disableLabels)
                if (t.selectAll(".label-bottom").remove(), void 0 === n.config.labelPrimary) { if (n.primaryAxis) { var i = n.primaryAxis.label || n.primaryAxis.caption;
                        i && t.selectAppend("div.chart-footer").append("div").classed("label-bottom", !0).text(i) } } else n.config.labelPrimary && t.selectAppend("div.chart-footer").append("div").classed("label-bottom", !0).text(n.config.labelPrimary) }), s, a), v.overflowScale(), gd(s), n.onComplete && n.onComplete(s), s }

    function JW(t) { var e = -1,
            n = null == t ? 0 : t.length; for (this.__data__ = new ua; ++e < n;) this.add(t[e]) }

    function tR(t, e) { for (var n = -1, i = null == t ? 0 : t.length; ++n < i;)
            if (e(t[n], n, t)) return !0; return !1 }

    function eR(t, e) { return t.has(e) } JW.prototype.add = JW.prototype.push = function(t) { return this.__data__.set(t, "__lodash_hash_undefined__"), this }, JW.prototype.has = function(t) { return this.__data__.has(t) };

    function nR(t, e, n, i, r, o) { var a = 1 & n,
            s = t.length,
            l = e.length; if (s != l && !(a && l > s)) return !1; var c = o.get(t); if (c && o.get(e)) return c == e; var u = -1,
            f = !0,
            d = 2 & n ? new JW : void 0; for (o.set(t, e), o.set(e, t); ++u < s;) { var h = t[u],
                g = e[u]; if (i) var p = a ? i(g, h, u, e, t, o) : i(h, g, u, t, e, o); if (void 0 !== p) { if (p) continue;
                f = !1; break } if (d) { if (!tR(e, (function(t, e) { if (!eR(d, e) && (h === t || r(h, t, n, i, o))) return d.push(e) }))) { f = !1; break } } else if (h !== g && !r(h, g, n, i, o)) { f = !1; break } } return o.delete(t), o.delete(e), f }

    function iR(t) { var e = -1,
            n = Array(t.size); return t.forEach((function(t, i) { n[++e] = [i, t] })), n }

    function rR(t) { var e = -1,
            n = Array(t.size); return t.forEach((function(t) { n[++e] = t })), n } var oR = zo ? zo.prototype : void 0,
        aR = oR ? oR.valueOf : void 0; var sR = Object.prototype.hasOwnProperty; var lR = "[object Arguments]",
        cR = "[object Array]",
        uR = "[object Object]",
        fR = Object.prototype.hasOwnProperty;

    function dR(t, e, n, i, r, o) { var a = Ma(t),
            s = Ma(e),
            l = a ? cR : Ts(t),
            c = s ? cR : Ts(e),
            u = (l = l == lR ? uR : l) == uR,
            f = (c = c == lR ? uR : c) == uR,
            d = l == c; if (d && Ca(t)) { if (!Ca(e)) return !1;
            a = !0, u = !1 } if (d && !u) return o || (o = new fa), a || Ra(t) ? nR(t, e, n, i, r, o) : function(t, e, n, i, r, o, a) { switch (n) {
                case "[object DataView]":
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                    t = t.buffer, e = e.buffer;
                case "[object ArrayBuffer]":
                    return !(t.byteLength != e.byteLength || !o(new Bs(t), new Bs(e)));
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                    return Co(+t, +e);
                case "[object Error]":
                    return t.name == e.name && t.message == e.message;
                case "[object RegExp]":
                case "[object String]":
                    return t == e + "";
                case "[object Map]":
                    var s = iR;
                case "[object Set]":
                    var l = 1 & i; if (s || (s = rR), t.size != e.size && !l) return !1; var c = a.get(t); if (c) return c == e;
                    i |= 2, a.set(t, e); var u = nR(s(t), s(e), i, r, o, a); return a.delete(t), u;
                case "[object Symbol]":
                    if (aR) return aR.call(t) == aR.call(e) } return !1 }(t, e, l, n, i, r, o); if (!(1 & n)) { var h = u && fR.call(t, "__wrapped__"),
                g = f && fR.call(e, "__wrapped__"); if (h || g) { var p = h ? t.value() : t,
                    v = g ? e.value() : e; return o || (o = new fa), r(p, v, n, i, o) } } return !!d && (o || (o = new fa), function(t, e, n, i, r, o) { var a = 1 & n,
                s = ps(t),
                l = s.length; if (l != ps(e).length && !a) return !1; for (var c = l; c--;) { var u = s[c]; if (!(a ? u in e : sR.call(e, u))) return !1 } var f = o.get(t); if (f && o.get(e)) return f == e; var d = !0;
            o.set(t, e), o.set(e, t); for (var h = a; ++c < l;) { var g = t[u = s[c]],
                    p = e[u]; if (i) var v = a ? i(p, g, u, e, t, o) : i(g, p, u, t, e, o); if (!(void 0 === v ? g === p || r(g, p, n, i, o) : v)) { d = !1; break } h || (h = "constructor" == u) } if (d && !h) { var m = t.constructor,
                    y = e.constructor;
                m == y || !("constructor" in t) || !("constructor" in e) || "function" == typeof m && m instanceof m && "function" == typeof y && y instanceof y || (d = !1) } return o.delete(t), o.delete(e), d }(t, e, n, i, r, o)) }

    function hR(t, e, n, i, r) { return t === e || (null == t || null == e || !ya(t) && !ya(e) ? t != t && e != e : dR(t, e, n, i, hR, r)) } var gR = function() { return Lo.Date.now() },
        pR = Math.max,
        vR = Math.min;

    function mR(t, e, n) { var i, r, o, a, s, l, c = 0,
            u = !1,
            f = !1,
            d = !0; if ("function" != typeof t) throw new TypeError("Expected a function");

        function h(e) { var n = i,
                o = r; return i = r = void 0, c = e, a = t.apply(o, n) }

        function g(t) { return c = t, s = setTimeout(v, e), u ? h(t) : a }

        function p(t) { var n = t - l; return void 0 === l || n >= e || n < 0 || f && t - c >= o }

        function v() { var t = gR(); if (p(t)) return m(t);
            s = setTimeout(v, function(t) { var n = e - (t - l); return f ? vR(n, o - (t - c)) : n }(t)) }

        function m(t) { return s = void 0, d && i ? h(t) : (i = r = void 0, a) }

        function y() { var t = gR(),
                n = p(t); if (i = arguments, r = this, l = t, n) { if (void 0 === s) return g(l); if (f) return clearTimeout(s), s = setTimeout(v, e), h(l) } return void 0 === s && (s = setTimeout(v, e)), a } return e = DE(e) || 0, Io(n) && (u = !!n.leading, o = (f = "maxWait" in n) ? pR(DE(n.maxWait) || 0, e) : o, d = "trailing" in n ? !!n.trailing : d), y.cancel = function() { void 0 !== s && clearTimeout(s), c = 0, i = l = r = s = void 0 }, y.flush = function() { return void 0 === s ? a : m(gR()) }, y }

    function yR(t, e, n) { var i = !0,
            r = !0; if ("function" != typeof t) throw new TypeError("Expected a function"); return Io(n) && (i = "leading" in n ? !!n.leading : i, r = "trailing" in n ? !!n.trailing : r), mR(t, e, { leading: i, maxWait: e, trailing: r }) } var xR = yR(PS, 5e3),
        bR = yR(BS, 5e3);

    function $R(t) { t && cl() && window.parent.postMessage({ type: "type-check", messages: t }, "*") }

    function wR(t) { t && cl() && window.parent.postMessage({ type: "type-report", report: t }, "*") }

    function _R(t, e) { var n = ol("currentColorSeries"); if (!n || !hR(n, t)) { ol("currentColorSeries", t); var i = { type: "color-series", colorSeries: { active: e, colors: t } };
            t && (cl() && window.parent.postMessage(i, "*"), window.postMessage(i, "*")) } }

    function kR(t, e, n, i) { xR(t, n, i, $R), bR(e, n, i, wR) }

    function MR(t, e, n) { n.editorHooks = { colorSeries: _R } } Cp.prototype.selectAppend = Bp, Cp.prototype.append = Lp; var SR = { __proto__: null, version: "5.16.0", select: Ep, selectAll: Pp, selection: Cp, transition: my, active: function(t, e) { var n, i, r = t.__transition; if (r)
                    for (i in e = null == e ? null : e + "", r)
                        if ((n = r[i]).state > 1 && n.name === e) return new vy([
                            [t]
                        ], Sy, e, +i); return null }, interrupt: Hm, interpolate: dm, easeLinear: by, easeCubic: $y, easeBackOut: _y, csv: Gy, json: function(t, e) { return fetch(t, e).then(Zy) }, parseSvg: gm, scalePoint: lx, scaleUtc: uw, timeDay: tb, ticks: qp, get event() { return yp }, scaleBand: ax, scaleTime: cw, scaleLinear: $x, line: Yw, pie: Nw, arc: Tw, mouse: function(t) { var e = Op(); return e.changedTouches && (e = e.changedTouches[0]), Tp(t, e) }, touches: function(t, e) { null == e && (e = Op().touches); for (var n = 0, i = e ? e.length : 0, r = new Array(i); n < i; ++n) r[n] = Tp(t, e[n]); return r }, area: Fw, stack: Jw, curveBasis: Vw, curveStep: Xw, curveStepAfter: Gw, curveStepBefore: qw, stackOffsetDiverging: t_, range: Ip, extent: function(t, e) { var n, i, r, o = t.length,
                    a = -1; if (null == e) { for (; ++a < o;)
                        if (null != (n = t[a]) && n >= n)
                            for (i = r = n; ++a < o;) null != (n = t[a]) && (i > n && (i = n), r < n && (r = n)) } else
                    for (; ++a < o;)
                        if (null != (n = e(t[a], a, t)) && n >= n)
                            for (i = r = n; ++a < o;) null != (n = e(t[a], a, t)) && (i > n && (i = n), r < n && (r = n)); return [i, r] }, merge: function(t) { for (var e, n, i, r = t.length, o = -1, a = 0; ++o < r;) a += t[o].length; for (n = new Array(a); --r >= 0;)
                    for (e = (i = t[r]).length; --e >= 0;) n[--a] = i[e]; return n }, get format() { return jd }, axisTop: cv, axisLeft: dv, axisBottom: fv, axisRight: uv },
        AR = Bk,
        DR = TS,
        CR = dd,
        ER = function(t, e, n) { var i = function(i, r) { var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = { el: i, data: r, options: o, svelteWrapper: !0 },
                    s = i.querySelector(".chart");
                e && e(a, r, o), n && ke(o, n(a, r, o)), dd(r, o), Bk(r, !0, o), AS.subscribe((function(t) { t && ke(a, { layout: t }) })), DS.subscribe((function(t) { ke(a, { x: t }) })), CS.subscribe((function(t) { ke(a, { y: t }) })), ES.subscribe((function(t) { ke(a, { scale: t }) })), SS.subscribe((function(t) { ke(a, { dimensions: t }) })); var l, c = { env: a, chartData: r, options: o, onRender: function() { a.options.afterRenderCallbacks && a.options.afterRenderCallbacks.forEach((function(t) { return t() })) } };
                ol(r.id, "svelteTypeFactory") ? (l = ol(r.id, "svelteTypeFactory")).$$set(c) : (s.innerHTML = "", l = new t({ target: s, props: c }), ol(r.id, "svelteTypeFactory", l)); var u = lM(l, [{ el: a.el, env: a }], o); return gd(a), u }; return i.isSvelteFactory = !0, i.svelteFactorySetup = null != e ? e : OS, i.svelteFactoryOptions = function(t, e, i) { var r; return i.preventAxisPropertyOverrides = !0, i.afterRenderCallbacks = null !== (r = i.afterRenderCallbacks) && void 0 !== r ? r : [], i.addAfterRenderCallback = function(t) { i.afterRenderCallbacks.push(t) }, n ? n(t, e, i) : i }, i }(QW, (function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = bP(e, n),
                r = i.primaryField,
                o = i.secondaryField,
                a = i.groupField,
                s = i.scaleField,
                l = i.gradientField,
                c = e.config,
                u = void 0 === c ? {} : c,
                f = {};
            null == u.scatterPlotPrimaryField && r && (f.scatterPlotPrimaryField = r.index), null == u.scatterPlotSecondaryField && o && (f.scatterPlotSecondaryField = o.index), null == u.scatterPlotScaleField && s && (f.scatterPlotScaleField = s.index), null == u.scatterPlotColorField && a && (f.scatterPlotColorField = a.index, f.scatterPlotUseCategorical = !0), null == u.scatterPlotColorField && l && (f.scatterPlotColorField = l.index, f.scatterPlotUseGradient = !0), Object.keys(f).length && (e.config = Se(Se({}, u), f)), e.chartOptions = e.chartOptions || {}, xP(e, i) }), (function(t, e) { var n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = Se(Se(Se({}, wP), i), {}, { customLegend: iT, legendConfig: kP(t, e, i) }); return r.afterRenderCallbacks = null !== (n = r.afterRenderCallbacks) && void 0 !== n ? n : [], r.addAfterRenderCallback = function(t) { r.afterRenderCallbacks.push(t) }, r })),
        OR = { column: NC, columnStacked: XC, horizontalColumn: NC, horizontalColumnStacked: XC, bar: NC, hbar: NC, horizontalBar: NC, stackedVbar: XC, stackedHbar: XC, line: tE, area: nE, table: HE, barline: iE, pie: VE, performanceChart: aO, multiples: iO, dumbbell: fO, horizontalDumbbell: fO, comparison: wO, scatterPlot: ER }; return t.area = nE, t.barline = iE, t.chartFactory = hd, t.column = NC, t.columnStacked = XC, t.comparison = wO, t.d3 = SR, t.factory = function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = { el: t, data: e, options: n, svelteWrapper: !0 };
        al(e.id, "svelteTypeFactory"), CR(e, n); var r = OR[e.chartType]; return r || (AR(e, !1, n), r = DR(OR, e, n)), r.isSvelteFactory && (r.svelteFactorySetup(i, e, n), n = r.svelteFactoryOptions(i, e, n)), n.isEditor && (MR(0, 0, n), n.suppressTypeCheck || kR(r, OR, e, n)), hd(t, r, e, n) }, t.line = tE, t.performanceChart = aO, t.pie = VE, t.renderAxisFrame = function(t, e) { return KW(t, e) }, t.scatterPlot = ER, t.table = HE, t.tooltip = oA, t.utils = YS, t.version = "0.1.0", Object.defineProperty(t, "__esModule", { value: !0 }), t }({});