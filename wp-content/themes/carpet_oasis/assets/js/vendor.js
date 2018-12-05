/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */
! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t);
    } : e(t)
}("undefined" != typeof window ? window : this, function(T, t) {
    var e = [],
        C = T.document,
        c = e.slice,
        g = e.concat,
        a = e.push,
        r = e.indexOf,
        i = {},
        n = i.toString,
        f = i.hasOwnProperty,
        m = {},
        s = "2.2.4",
        S = function(t, e) {
            return new S.fn.init(t, e);
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        l = /^-ms-/,
        u = /-([\da-z])/gi,
        h = function(t, e) {
            return e.toUpperCase();
        };

    function p(t) {
        var e = !!t && "length" in t && t.length,
            i = S.type(t);
        return "function" !== i && !S.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    S.fn = S.prototype = {
        jquery: s,
        constructor: S,
        selector: "",
        length: 0,
        toArray: function() {
            return c.call(this);
        },
        get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : c.call(this);
        },
        pushStack: function(t) {
            var e = S.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return S.each(this, t)
        },
        map: function(i) {
            return this.pushStack(S.map(this, function(t, e) {
                return i.call(t, e, t)
            }))
        },
        slice: function() {
            return this.pushStack(c.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= i && i < e ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: e.sort,
        splice: e.splice
    }, S.extend = S.fn.extend = function() {
        var t, e, i, n, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || S.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = o[e], o !== (n = t[e]) && (u && n && (S.isPlainObject(n) || (r = S.isArray(n))) ? (r ? (r = !1, s = i && S.isArray(i) ? i : []) : s = i && S.isPlainObject(i) ? i : {}, o[e] = S.extend(u, s, n)) : void 0 !== n && (o[e] = n));
        return o
    }, S.extend({
        expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === S.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !S.isArray(t) && 0 <= e - parseFloat(e) + 1
        },
        isPlainObject: function(t) {
            var e;
            if ("object" !== S.type(t) || t.nodeType || S.isWindow(t)) return !1;
            if (t.constructor && !f.call(t, "constructor") && !f.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (e in t);
            return void 0 === e || f.call(t, e)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[n.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, i = eval;
            (t = S.trim(t)) && (1 === t.indexOf("use strict") ? ((e = C.createElement("script")).text = t, C.head.appendChild(e).parentNode.removeChild(e)) : i(t))
        },
        camelCase: function(t) {
            return t.replace(l, "ms-").replace(u, h)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var i, n = 0;
            if (p(t))
                for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(o, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (p(Object(t)) ? S.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)), i
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : r.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, r = t.length; n < i; n++) t[r++] = e[n];
            return t.length = r, t
        },
        grep: function(t, e, i) {
            for (var n = [], r = 0, s = t.length, o = !i; r < s; r++) !e(t[r], r) !== o && n.push(t[r]);
            return n
        },
        map: function(t, e, i) {
            var n, r, s = 0,
                o = [];
            if (p(t))
                for (n = t.length; s < n; s++) null != (r = e(t[s], s, i)) && o.push(r);
            else
                for (s in t) null != (r = e(t[s], s, i)) && o.push(r);
            return g.apply([], o)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, r;
            if ("string" == typeof e && (i = t[e], e = t, t = i), S.isFunction(t)) return n = c.call(arguments, 2), (r = function() {
                return t.apply(e || this, n.concat(c.call(arguments)))
            }).guid = t.guid = t.guid || S.guid++, r
        },
        now: Date.now,
        support: m
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = e[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        i["[object " + e + "]"] = e.toLowerCase()
    });
    var d =
        /*!
         * Sizzle CSS Selector Engine v2.2.1
         * http://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2015-10-17
         */
        function(i) {
            var t, f, x, s, r, g, h, m, b, l, u, w, T, o, C, v, a, c, y, S = "sizzle" + 1 * new Date,
                _ = i.document,
                k = 0,
                n = 0,
                p = rt(),
                d = rt(),
                A = rt(),
                E = function(t, e) {
                    return t === e && (u = !0), 0
                },
                P = {}.hasOwnProperty,
                e = [],
                D = e.pop,
                O = e.push,
                F = e.push,
                M = e.slice,
                N = function(t, e) {
                    for (var i = 0, n = t.length; i < n; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                R = "[\\x20\\t\\r\\n\\f]",
                j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                L = "\\[" + R + "*(" + j + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + R + "*\\]",
                z = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + L + ")*)|.*)\\)|)",
                B = new RegExp(R + "+", "g"),
                q = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
                I = new RegExp("^" + R + "*," + R + "*"),
                H = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                W = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
                X = new RegExp(z),
                U = new RegExp("^" + j + "$"),
                V = {
                    ID: new RegExp("^#(" + j + ")"),
                    CLASS: new RegExp("^\\.(" + j + ")"),
                    TAG: new RegExp("^(" + j + "|[*])"),
                    ATTR: new RegExp("^" + L),
                    PSEUDO: new RegExp("^" + z),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + $ + ")$", "i"),
                    needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
                },
                Y = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                K = /[+~]/,
                J = /'|\\/g,
                tt = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
                et = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                it = function() {
                    w()
                };
            try {
                F.apply(e = M.call(_.childNodes), _.childNodes), e[_.childNodes.length].nodeType
            } catch (t) {
                F = {
                    apply: e.length ? function(t, e) {
                        O.apply(t, M.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }

            function nt(t, e, i, n) {
                var r, s, o, a, l, u, c, h, p = e && e.ownerDocument,
                    d = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return i;
                if (!n && ((e ? e.ownerDocument || e : _) !== T && w(e), e = e || T, C)) {
                    if (11 !== d && (u = Z.exec(t)))
                        if (r = u[1]) {
                            if (9 === d) {
                                if (!(o = e.getElementById(r))) return i;
                                if (o.id === r) return i.push(o), i
                            } else if (p && (o = p.getElementById(r)) && y(e, o) && o.id === r) return i.push(o), i
                        } else {
                            if (u[2]) return F.apply(i, e.getElementsByTagName(t)), i;
                            if ((r = u[3]) && f.getElementsByClassName && e.getElementsByClassName) return F.apply(i, e.getElementsByClassName(r)), i
                        } if (f.qsa && !A[t + " "] && (!v || !v.test(t))) {
                        if (1 !== d) p = e, h = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(J, "\\$&") : e.setAttribute("id", a = S), s = (c = g(t)).length, l = U.test(a) ? "#" + a : "[id='" + a + "']"; s--;) c[s] = l + " " + ft(c[s]);
                            h = c.join(","), p = K.test(t) && pt(e.parentNode) || e
                        }
                        if (h) try {
                            return F.apply(i, p.querySelectorAll(h)), i
                        } catch (t) {} finally {
                            a === S && e.removeAttribute("id")
                        }
                    }
                }
                return m(t.replace(q, "$1"), e, i, n)
            }

            function rt() {
                var n = [];
                return function t(e, i) {
                    return n.push(e + " ") > x.cacheLength && delete t[n.shift()], t[e + " "] = i
                }
            }

            function st(t) {
                return t[S] = !0, t
            }

            function ot(t) {
                var e = T.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function at(t, e) {
                for (var i = t.split("|"), n = i.length; n--;) x.attrHandle[i[n]] = e
            }

            function lt(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || 1 << 31) - (~t.sourceIndex || 1 << 31);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function ut(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function ct(i) {
                return function(t) {
                    var e = t.nodeName.toLowerCase();
                    return ("input" === e || "button" === e) && t.type === i
                }
            }

            function ht(o) {
                return st(function(s) {
                    return s = +s, st(function(t, e) {
                        for (var i, n = o([], t.length, s), r = n.length; r--;) t[i = n[r]] && (t[i] = !(e[i] = t[i]))
                    })
                })
            }

            function pt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (t in f = nt.support = {}, r = nt.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, w = nt.setDocument = function(t) {
                    var e, i, n = t ? t.ownerDocument || t : _;
                    return n !== T && 9 === n.nodeType && n.documentElement && (o = (T = n).documentElement, C = !r(T), (i = T.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", it, !1) : i.attachEvent && i.attachEvent("onunload", it)), f.attributes = ot(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), f.getElementsByTagName = ot(function(t) {
                        return t.appendChild(T.createComment("")), !t.getElementsByTagName("*").length
                    }), f.getElementsByClassName = Q.test(T.getElementsByClassName), f.getById = ot(function(t) {
                        return o.appendChild(t).id = S, !T.getElementsByName || !T.getElementsByName(S).length
                    }), f.getById ? (x.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && C) {
                            var i = e.getElementById(t);
                            return i ? [i] : []
                        }
                    }, x.filter.ID = function(t) {
                        var e = t.replace(tt, et);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete x.find.ID, x.filter.ID = function(t) {
                        var i = t.replace(tt, et);
                        return function(t) {
                            var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return e && e.value === i
                        }
                    }), x.find.TAG = f.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var i, n = [],
                            r = 0,
                            s = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return s
                    }, x.find.CLASS = f.getElementsByClassName && function(t, e) {
                        if (void 0 !== e.getElementsByClassName && C) return e.getElementsByClassName(t)
                    }, a = [], v = [], (f.qsa = Q.test(T.querySelectorAll)) && (ot(function(t) {
                        o.appendChild(t).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + $ + ")"), t.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]")
                    }), ot(function(t) {
                        var e = T.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:")
                    })), (f.matchesSelector = Q.test(c = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ot(function(t) {
                        f.disconnectedMatch = c.call(t, "div"), c.call(t, "[s!='']:x"), a.push("!=", z)
                    }), v = v.length && new RegExp(v.join("|")), a = a.length && new RegExp(a.join("|")), e = Q.test(o.compareDocumentPosition), y = e || Q.test(o.contains) ? function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, E = e ? function(t, e) {
                        if (t === e) return u = !0, 0;
                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === i ? t === T || t.ownerDocument === _ && y(_, t) ? -1 : e === T || e.ownerDocument === _ && y(_, e) ? 1 : l ? N(l, t) - N(l, e) : 0 : 4 & i ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return u = !0, 0;
                        var i, n = 0,
                            r = t.parentNode,
                            s = e.parentNode,
                            o = [t],
                            a = [e];
                        if (!r || !s) return t === T ? -1 : e === T ? 1 : r ? -1 : s ? 1 : l ? N(l, t) - N(l, e) : 0;
                        if (r === s) return lt(t, e);
                        for (i = t; i = i.parentNode;) o.unshift(i);
                        for (i = e; i = i.parentNode;) a.unshift(i);
                        for (; o[n] === a[n];) n++;
                        return n ? lt(o[n], a[n]) : o[n] === _ ? -1 : a[n] === _ ? 1 : 0
                    }), T
                }, nt.matches = function(t, e) {
                    return nt(t, null, null, e)
                }, nt.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== T && w(t), e = e.replace(W, "='$1']"), f.matchesSelector && C && !A[e + " "] && (!a || !a.test(e)) && (!v || !v.test(e))) try {
                        var i = c.call(t, e);
                        if (i || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {}
                    return 0 < nt(e, T, null, [t]).length
                }, nt.contains = function(t, e) {
                    return (t.ownerDocument || t) !== T && w(t), y(t, e)
                }, nt.attr = function(t, e) {
                    (t.ownerDocument || t) !== T && w(t);
                    var i = x.attrHandle[e.toLowerCase()],
                        n = i && P.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !C) : void 0;
                    return void 0 !== n ? n : f.attributes || !C ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                }, nt.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, nt.uniqueSort = function(t) {
                    var e, i = [],
                        n = 0,
                        r = 0;
                    if (u = !f.detectDuplicates, l = !f.sortStable && t.slice(0), t.sort(E), u) {
                        for (; e = t[r++];) e === t[r] && (n = i.push(r));
                        for (; n--;) t.splice(i[n], 1)
                    }
                    return l = null, t
                }, s = nt.getText = function(t) {
                    var e, i = "",
                        n = 0,
                        r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += s(t)
                        } else if (3 === r || 4 === r) return t.nodeValue
                    } else
                        for (; e = t[n++];) i += s(e);
                    return i
                }, (x = nt.selectors = {
                    cacheLength: 50,
                    createPseudo: st,
                    match: V,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(tt, et), t[3] = (t[3] || t[4] || t[5] || "").replace(tt, et), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || nt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && nt.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, i = !t[6] && t[2];
                            return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && X.test(i) && (e = g(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(tt, et).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = p[t + " "];
                            return e || (e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) && p(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(i, n, r) {
                            return function(t) {
                                var e = nt.attr(t, i);
                                return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(B, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                            }
                        },
                        CHILD: function(f, t, e, g, m) {
                            var v = "nth" !== f.slice(0, 3),
                                y = "last" !== f.slice(-4),
                                _ = "of-type" === t;
                            return 1 === g && 0 === m ? function(t) {
                                return !!t.parentNode
                            } : function(t, e, i) {
                                var n, r, s, o, a, l, u = v !== y ? "nextSibling" : "previousSibling",
                                    c = t.parentNode,
                                    h = _ && t.nodeName.toLowerCase(),
                                    p = !i && !_,
                                    d = !1;
                                if (c) {
                                    if (v) {
                                        for (; u;) {
                                            for (o = t; o = o[u];)
                                                if (_ ? o.nodeName.toLowerCase() === h : 1 === o.nodeType) return !1;
                                            l = u = "only" === f && !l && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (l = [y ? c.firstChild : c.lastChild], y && p) {
                                        for (d = (a = (n = (r = (s = (o = c)[S] || (o[S] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] || [])[0] === k && n[1]) && n[2], o = a && c.childNodes[a]; o = ++a && o && o[u] || (d = a = 0) || l.pop();)
                                            if (1 === o.nodeType && ++d && o === t) {
                                                r[f] = [k, a, d];
                                                break
                                            }
                                    } else if (p && (d = a = (n = (r = (s = (o = t)[S] || (o[S] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] || [])[0] === k && n[1]), !1 === d)
                                        for (;
                                            (o = ++a && o && o[u] || (d = a = 0) || l.pop()) && ((_ ? o.nodeName.toLowerCase() !== h : 1 !== o.nodeType) || !++d || (p && ((r = (s = o[S] || (o[S] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] = [k, d]), o !== t)););
                                    return (d -= m) === g || d % g == 0 && 0 <= d / g
                                }
                            }
                        },
                        PSEUDO: function(t, s) {
                            var e, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || nt.error("unsupported pseudo: " + t);
                            return o[S] ? o(s) : 1 < o.length ? (e = [t, t, "", s], x.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function(t, e) {
                                for (var i, n = o(t, s), r = n.length; r--;) t[i = N(t, n[r])] = !(e[i] = n[r])
                            }) : function(t) {
                                return o(t, 0, e)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: st(function(t) {
                            var n = [],
                                r = [],
                                a = h(t.replace(q, "$1"));
                            return a[S] ? st(function(t, e, i, n) {
                                for (var r, s = a(t, null, n, []), o = t.length; o--;)(r = s[o]) && (t[o] = !(e[o] = r))
                            }) : function(t, e, i) {
                                return n[0] = t, a(n, null, i, r), n[0] = null, !r.pop()
                            }
                        }),
                        has: st(function(e) {
                            return function(t) {
                                return 0 < nt(e, t).length
                            }
                        }),
                        contains: st(function(e) {
                            return e = e.replace(tt, et),
                                function(t) {
                                    return -1 < (t.textContent || t.innerText || s(t)).indexOf(e)
                                }
                        }),
                        lang: st(function(i) {
                            return U.test(i || "") || nt.error("unsupported lang: " + i), i = i.replace(tt, et).toLowerCase(),
                                function(t) {
                                    var e;
                                    do {
                                        if (e = C ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var e = i.location && i.location.hash;
                            return e && e.slice(1) === t.id
                        },
                        root: function(t) {
                            return t === o
                        },
                        focus: function(t) {
                            return t === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return !1 === t.disabled
                        },
                        disabled: function(t) {
                            return !0 === t.disabled
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !x.pseudos.empty(t)
                        },
                        header: function(t) {
                            return G.test(t.nodeName)
                        },
                        input: function(t) {
                            return Y.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: ht(function() {
                            return [0]
                        }),
                        last: ht(function(t, e) {
                            return [e - 1]
                        }),
                        eq: ht(function(t, e, i) {
                            return [i < 0 ? i + e : i]
                        }),
                        even: ht(function(t, e) {
                            for (var i = 0; i < e; i += 2) t.push(i);
                            return t
                        }),
                        odd: ht(function(t, e) {
                            for (var i = 1; i < e; i += 2) t.push(i);
                            return t
                        }),
                        lt: ht(function(t, e, i) {
                            for (var n = i < 0 ? i + e : i; 0 <= --n;) t.push(n);
                            return t
                        }),
                        gt: ht(function(t, e, i) {
                            for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                            return t
                        })
                    }
                }).pseudos.nth = x.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[t] = ut(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[t] = ct(t);

            function dt() {}

            function ft(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                return n
            }

            function gt(a, t, e) {
                var l = t.dir,
                    u = e && "parentNode" === l,
                    c = n++;
                return t.first ? function(t, e, i) {
                    for (; t = t[l];)
                        if (1 === t.nodeType || u) return a(t, e, i)
                } : function(t, e, i) {
                    var n, r, s, o = [k, c];
                    if (i) {
                        for (; t = t[l];)
                            if ((1 === t.nodeType || u) && a(t, e, i)) return !0
                    } else
                        for (; t = t[l];)
                            if (1 === t.nodeType || u) {
                                if ((n = (r = (s = t[S] || (t[S] = {}))[t.uniqueID] || (s[t.uniqueID] = {}))[l]) && n[0] === k && n[1] === c) return o[2] = n[2];
                                if ((r[l] = o)[2] = a(t, e, i)) return !0
                            }
                }
            }

            function mt(r) {
                return 1 < r.length ? function(t, e, i) {
                    for (var n = r.length; n--;)
                        if (!r[n](t, e, i)) return !1;
                    return !0
                } : r[0]
            }

            function vt(t, e, i, n, r) {
                for (var s, o = [], a = 0, l = t.length, u = null != e; a < l; a++)(s = t[a]) && (i && !i(s, n, r) || (o.push(s), u && e.push(a)));
                return o
            }

            function yt(d, f, g, m, v, t) {
                return m && !m[S] && (m = yt(m)), v && !v[S] && (v = yt(v, t)), st(function(t, e, i, n) {
                    var r, s, o, a = [],
                        l = [],
                        u = e.length,
                        c = t || function(t, e, i) {
                            for (var n = 0, r = e.length; n < r; n++) nt(t, e[n], i);
                            return i
                        }(f || "*", i.nodeType ? [i] : i, []),
                        h = !d || !t && f ? c : vt(c, a, d, i, n),
                        p = g ? v || (t ? d : u || m) ? [] : e : h;
                    if (g && g(h, p, i, n), m)
                        for (r = vt(p, l), m(r, [], i, n), s = r.length; s--;)(o = r[s]) && (p[l[s]] = !(h[l[s]] = o));
                    if (t) {
                        if (v || d) {
                            if (v) {
                                for (r = [], s = p.length; s--;)(o = p[s]) && r.push(h[s] = o);
                                v(null, p = [], r, n)
                            }
                            for (s = p.length; s--;)(o = p[s]) && -1 < (r = v ? N(t, o) : a[s]) && (t[r] = !(e[r] = o))
                        }
                    } else p = vt(p === e ? p.splice(u, p.length) : p), v ? v(null, e, p, n) : F.apply(e, p)
                })
            }

            function _t(t) {
                for (var r, e, i, n = t.length, s = x.relative[t[0].type], o = s || x.relative[" "], a = s ? 1 : 0, l = gt(function(t) {
                        return t === r
                    }, o, !0), u = gt(function(t) {
                        return -1 < N(r, t)
                    }, o, !0), c = [function(t, e, i) {
                        var n = !s && (i || e !== b) || ((r = e).nodeType ? l(t, e, i) : u(t, e, i));
                        return r = null, n
                    }]; a < n; a++)
                    if (e = x.relative[t[a].type]) c = [gt(mt(c), e)];
                    else {
                        if ((e = x.filter[t[a].type].apply(null, t[a].matches))[S]) {
                            for (i = ++a; i < n && !x.relative[t[i].type]; i++);
                            return yt(1 < a && mt(c), 1 < a && ft(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(q, "$1"), e, a < i && _t(t.slice(a, i)), i < n && _t(t = t.slice(i)), i < n && ft(t))
                        }
                        c.push(e)
                    } return mt(c)
            }
            return dt.prototype = x.filters = x.pseudos, x.setFilters = new dt, g = nt.tokenize = function(t, e) {
                var i, n, r, s, o, a, l, u = d[t + " "];
                if (u) return e ? 0 : u.slice(0);
                for (o = t, a = [], l = x.preFilter; o;) {
                    for (s in i && !(n = I.exec(o)) || (n && (o = o.slice(n[0].length) || o), a.push(r = [])), i = !1, (n = H.exec(o)) && (i = n.shift(), r.push({
                            value: i,
                            type: n[0].replace(q, " ")
                        }), o = o.slice(i.length)), x.filter) !(n = V[s].exec(o)) || l[s] && !(n = l[s](n)) || (i = n.shift(), r.push({
                        value: i,
                        type: s,
                        matches: n
                    }), o = o.slice(i.length));
                    if (!i) break
                }
                return e ? o.length : o ? nt.error(t) : d(t, a).slice(0)
            }, h = nt.compile = function(t, e) {
                var i, m, v, y, _, n, r = [],
                    s = [],
                    o = A[t + " "];
                if (!o) {
                    for (e || (e = g(t)), i = e.length; i--;)(o = _t(e[i]))[S] ? r.push(o) : s.push(o);
                    (o = A(t, (m = s, y = 0 < (v = r).length, _ = 0 < m.length, n = function(t, e, i, n, r) {
                        var s, o, a, l = 0,
                            u = "0",
                            c = t && [],
                            h = [],
                            p = b,
                            d = t || _ && x.find.TAG("*", r),
                            f = k += null == p ? 1 : Math.random() || .1,
                            g = d.length;
                        for (r && (b = e === T || e || r); u !== g && null != (s = d[u]); u++) {
                            if (_ && s) {
                                for (o = 0, e || s.ownerDocument === T || (w(s), i = !C); a = m[o++];)
                                    if (a(s, e || T, i)) {
                                        n.push(s);
                                        break
                                    } r && (k = f)
                            }
                            y && ((s = !a && s) && l--, t && c.push(s))
                        }
                        if (l += u, y && u !== l) {
                            for (o = 0; a = v[o++];) a(c, h, e, i);
                            if (t) {
                                if (0 < l)
                                    for (; u--;) c[u] || h[u] || (h[u] = D.call(n));
                                h = vt(h)
                            }
                            F.apply(n, h), r && !t && 0 < h.length && 1 < l + v.length && nt.uniqueSort(n)
                        }
                        return r && (k = f, b = p), c
                    }, y ? st(n) : n))).selector = t
                }
                return o
            }, m = nt.select = function(t, e, i, n) {
                var r, s, o, a, l, u = "function" == typeof t && t,
                    c = !n && g(t = u.selector || t);
                if (i = i || [], 1 === c.length) {
                    if (2 < (s = c[0] = c[0].slice(0)).length && "ID" === (o = s[0]).type && f.getById && 9 === e.nodeType && C && x.relative[s[1].type]) {
                        if (!(e = (x.find.ID(o.matches[0].replace(tt, et), e) || [])[0])) return i;
                        u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                    }
                    for (r = V.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !x.relative[a = o.type]);)
                        if ((l = x.find[a]) && (n = l(o.matches[0].replace(tt, et), K.test(s[0].type) && pt(e.parentNode) || e))) {
                            if (s.splice(r, 1), !(t = n.length && ft(s))) return F.apply(i, n), i;
                            break
                        }
                }
                return (u || h(t, c))(n, e, !C, i, !e || K.test(t) && pt(e.parentNode) || e), i
            }, f.sortStable = S.split("").sort(E).join("") === S, f.detectDuplicates = !!u, w(), f.sortDetached = ot(function(t) {
                return 1 & t.compareDocumentPosition(T.createElement("div"))
            }), ot(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || at("type|href|height|width", function(t, e, i) {
                if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), f.attributes && ot(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || at("value", function(t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), ot(function(t) {
                return null == t.getAttribute("disabled")
            }) || at($, function(t, e, i) {
                var n;
                if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), nt
        }(T);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains;
    var v = function(t, e, i) {
            for (var n = [], r = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && S(t).is(i)) break;
                    n.push(t)
                } return n
        },
        y = function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        _ = S.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        b = /^.[^:#\[\.,]*$/;

    function w(t, i, n) {
        if (S.isFunction(i)) return S.grep(t, function(t, e) {
            return !!i.call(t, e, t) !== n
        });
        if (i.nodeType) return S.grep(t, function(t) {
            return t === i !== n
        });
        if ("string" == typeof i) {
            if (b.test(i)) return S.filter(i, t, n);
            i = S.filter(i, t)
        }
        return S.grep(t, function(t) {
            return -1 < r.call(i, t) !== n
        })
    }
    S.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? S.find.matchesSelector(n, t) ? [n] : [] : S.find.matches(t, S.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, S.fn.extend({
        find: function(t) {
            var e, i = this.length,
                n = [],
                r = this;
            if ("string" != typeof t) return this.pushStack(S(t).filter(function() {
                for (e = 0; e < i; e++)
                    if (S.contains(r[e], this)) return !0
            }));
            for (e = 0; e < i; e++) S.find(t, r[e], n);
            return (n = this.pushStack(1 < i ? S.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(w(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(w(this, t || [], !0))
        },
        is: function(t) {
            return !!w(this, "string" == typeof t && _.test(t) ? S(t) : t || [], !1).length
        }
    });
    var k, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (S.fn.init = function(t, e, i) {
        var n, r;
        if (!t) return this;
        if (i = i || k, "string" == typeof t) {
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : A.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof S ? e[0] : e, S.merge(this, S.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : C, !0)), x.test(n[1]) && S.isPlainObject(e))
                    for (n in e) S.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return (r = C.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = C, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : S.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(S) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), S.makeArray(t, this))
    }).prototype = S.fn, k = S(C);
    var E = /^(?:parents|prev(?:Until|All))/,
        P = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function D(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    S.fn.extend({
        has: function(t) {
            var e = S(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; t < i; t++)
                    if (S.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, r = this.length, s = [], o = _.test(t) || "string" != typeof t ? S(t, e || this.context) : 0; n < r; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (o ? -1 < o.index(i) : 1 === i.nodeType && S.find.matchesSelector(i, t))) {
                        s.push(i);
                        break
                    } return this.pushStack(1 < s.length ? S.uniqueSort(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? r.call(S(t), this[0]) : r.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), S.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return v(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return v(t, "parentNode", i)
        },
        next: function(t) {
            return D(t, "nextSibling")
        },
        prev: function(t) {
            return D(t, "previousSibling")
        },
        nextAll: function(t) {
            return v(t, "nextSibling")
        },
        prevAll: function(t) {
            return v(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return v(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return v(t, "previousSibling", i)
        },
        siblings: function(t) {
            return y((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return y(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || S.merge([], t.childNodes)
        }
    }, function(n, r) {
        S.fn[n] = function(t, e) {
            var i = S.map(this, r, t);
            return "Until" !== n.slice(-5) && (e = t), e && "string" == typeof e && (i = S.filter(e, i)), 1 < this.length && (P[n] || S.uniqueSort(i), E.test(n) && i.reverse()), this.pushStack(i)
        }
    });
    var O, F = /\S+/g;

    function M() {
        C.removeEventListener("DOMContentLoaded", M), T.removeEventListener("load", M), S.ready()
    }
    S.Callbacks = function(n) {
        var t, i;
        n = "string" == typeof n ? (t = n, i = {}, S.each(t.match(F) || [], function(t, e) {
            i[e] = !0
        }), i) : S.extend({}, n);
        var r, e, s, o, a = [],
            l = [],
            u = -1,
            c = function() {
                for (o = n.once, s = r = !0; l.length; u = -1)
                    for (e = l.shift(); ++u < a.length;) !1 === a[u].apply(e[0], e[1]) && n.stopOnFalse && (u = a.length, e = !1);
                n.memory || (e = !1), r = !1, o && (a = e ? [] : "")
            },
            h = {
                add: function() {
                    return a && (e && !r && (u = a.length - 1, l.push(e)), function i(t) {
                        S.each(t, function(t, e) {
                            S.isFunction(e) ? n.unique && h.has(e) || a.push(e) : e && e.length && "string" !== S.type(e) && i(e)
                        })
                    }(arguments), e && !r && c()), this
                },
                remove: function() {
                    return S.each(arguments, function(t, e) {
                        for (var i; - 1 < (i = S.inArray(e, a, i));) a.splice(i, 1), i <= u && u--
                    }), this
                },
                has: function(t) {
                    return t ? -1 < S.inArray(t, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return o = l = [], a = e = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return o = l = [], e || (a = e = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(t, e) {
                    return o || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), r || c()), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return h
    }, S.extend({
        Deferred: function(t) {
            var s = [
                    ["resolve", "done", S.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", S.Callbacks("memory")]
                ],
                r = "pending",
                o = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var r = arguments;
                        return S.Deferred(function(n) {
                            S.each(s, function(t, e) {
                                var i = S.isFunction(r[t]) && r[t];
                                a[e[1]](function() {
                                    var t = i && i.apply(this, arguments);
                                    t && S.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[e[0] + "With"](this === o ? n.promise() : this, i ? [t] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? S.extend(t, o) : o
                    }
                },
                a = {};
            return o.pipe = o.then, S.each(s, function(t, e) {
                var i = e[2],
                    n = e[3];
                o[e[1]] = i.add, n && i.add(function() {
                    r = n
                }, s[1 ^ t][2].disable, s[2][2].lock), a[e[0]] = function() {
                    return a[e[0] + "With"](this === a ? o : this, arguments), this
                }, a[e[0] + "With"] = i.fireWith
            }), o.promise(a), t && t.call(a, a), a
        },
        when: function(t) {
            var r, e, i, n = 0,
                s = c.call(arguments),
                o = s.length,
                a = 1 !== o || t && S.isFunction(t.promise) ? o : 0,
                l = 1 === a ? t : S.Deferred(),
                u = function(e, i, n) {
                    return function(t) {
                        i[e] = this, n[e] = 1 < arguments.length ? c.call(arguments) : t, n === r ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (1 < o)
                for (r = new Array(o), e = new Array(o), i = new Array(o); n < o; n++) s[n] && S.isFunction(s[n].promise) ? s[n].promise().progress(u(n, e, r)).done(u(n, i, s)).fail(l.reject) : --a;
            return a || l.resolveWith(i, s), l.promise()
        }
    }), S.fn.ready = function(t) {
        return S.ready.promise().done(t), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? S.readyWait++ : S.ready(!0)
        },
        ready: function(t) {
            (!0 === t ? --S.readyWait : S.isReady) || (S.isReady = !0) !== t && 0 < --S.readyWait || (O.resolveWith(C, [S]), S.fn.triggerHandler && (S(C).triggerHandler("ready"), S(C).off("ready")))
        }
    }), S.ready.promise = function(t) {
        return O || (O = S.Deferred(), "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? T.setTimeout(S.ready) : (C.addEventListener("DOMContentLoaded", M), T.addEventListener("load", M))), O.promise(t)
    }, S.ready.promise();
    var N = function(t, e, i, n, r, s, o) {
            var a = 0,
                l = t.length,
                u = null == i;
            if ("object" === S.type(i))
                for (a in r = !0, i) N(t, e, a, i[a], !0, s, o);
            else if (void 0 !== n && (r = !0, S.isFunction(n) || (o = !0), u && (o ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
                    return u.call(S(t), i)
                })), e))
                for (; a < l; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
            return r ? t : u ? e.call(t) : l ? e(t[0], i) : s
        },
        $ = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

    function R() {
        this.expando = S.expando + R.uid++
    }
    R.uid = 1, R.prototype = {
        register: function(t, e) {
            var i = e || {};
            return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                value: i,
                writable: !0,
                configurable: !0
            }), t[this.expando]
        },
        cache: function(t) {
            if (!$(t)) return {};
            var e = t[this.expando];
            return e || (e = {}, $(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, i) {
            var n, r = this.cache(t);
            if ("string" == typeof e) r[e] = i;
            else
                for (n in e) r[n] = e[n];
            return r
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        },
        access: function(t, e, i) {
            var n;
            return void 0 === e || e && "string" == typeof e && void 0 === i ? void 0 !== (n = this.get(t, e)) ? n : this.get(t, S.camelCase(e)) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n, r, s = t[this.expando];
            if (void 0 !== s) {
                if (void 0 === e) this.register(t);
                else {
                    S.isArray(e) ? n = e.concat(e.map(S.camelCase)) : (r = S.camelCase(e), n = e in s ? [e, r] : (n = r) in s ? [n] : n.match(F) || []), i = n.length;
                    for (; i--;) delete s[n[i]]
                }(void 0 === e || S.isEmptyObject(s)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !S.isEmptyObject(e)
        }
    };
    var j = new R,
        L = new R,
        z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        B = /[A-Z]/g;

    function q(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(B, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : z.test(i) ? S.parseJSON(i) : i)
                } catch (t) {}
                L.set(t, e, i)
            } else i = void 0;
        return i
    }
    S.extend({
        hasData: function(t) {
            return L.hasData(t) || j.hasData(t)
        },
        data: function(t, e, i) {
            return L.access(t, e, i)
        },
        removeData: function(t, e) {
            L.remove(t, e)
        },
        _data: function(t, e, i) {
            return j.access(t, e, i)
        },
        _removeData: function(t, e) {
            j.remove(t, e)
        }
    }), S.fn.extend({
        data: function(n, t) {
            var e, i, r, s = this[0],
                o = s && s.attributes;
            if (void 0 === n) {
                if (this.length && (r = L.get(s), 1 === s.nodeType && !j.get(s, "hasDataAttrs"))) {
                    for (e = o.length; e--;) o[e] && 0 === (i = o[e].name).indexOf("data-") && (i = S.camelCase(i.slice(5)), q(s, i, r[i]));
                    j.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof n ? this.each(function() {
                L.set(this, n)
            }) : N(this, function(e) {
                var t, i;
                if (s && void 0 === e) return void 0 !== (t = L.get(s, n) || L.get(s, n.replace(B, "-$&").toLowerCase())) ? t : (i = S.camelCase(n), void 0 !== (t = L.get(s, i)) ? t : void 0 !== (t = q(s, i, void 0)) ? t : void 0);
                i = S.camelCase(n), this.each(function() {
                    var t = L.get(this, i);
                    L.set(this, i, e), -1 < n.indexOf("-") && void 0 !== t && L.set(this, n, e)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                L.remove(this, t)
            })
        }
    }), S.extend({
        queue: function(t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = j.get(t, e), i && (!n || S.isArray(i) ? n = j.access(t, e, S.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = S.queue(t, e),
                n = i.length,
                r = i.shift(),
                s = S._queueHooks(t, e);
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, function() {
                S.dequeue(t, e)
            }, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return j.get(t, i) || j.access(t, i, {
                empty: S.Callbacks("once memory").add(function() {
                    j.remove(t, [e + "queue", i])
                })
            })
        }
    }), S.fn.extend({
        queue: function(e, i) {
            var t = 2;
            return "string" != typeof e && (i = e, e = "fx", t--), arguments.length < t ? S.queue(this[0], e) : void 0 === i ? this : this.each(function() {
                var t = S.queue(this, e, i);
                S._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && S.dequeue(this, e)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                S.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                r = S.Deferred(),
                s = this,
                o = this.length,
                a = function() {
                    --n || r.resolveWith(s, [s])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(i = j.get(s[o], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var I = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        H = new RegExp("^(?:([+-])=|)(" + I + ")([a-z%]*)$", "i"),
        W = ["Top", "Right", "Bottom", "Left"],
        X = function(t, e) {
            return t = e || t, "none" === S.css(t, "display") || !S.contains(t.ownerDocument, t)
        };

    function U(t, e, i, n) {
        var r, s = 1,
            o = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return S.css(t, e, "")
            },
            l = a(),
            u = i && i[3] || (S.cssNumber[e] ? "" : "px"),
            c = (S.cssNumber[e] || "px" !== u && +l) && H.exec(S.css(t, e));
        if (c && c[3] !== u)
            for (u = u || c[3], i = i || [], c = +l || 1; c /= s = s || ".5", S.style(t, e, c + u), s !== (s = a() / l) && 1 !== s && --o;);
        return i && (c = +c || +l || 0, r = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = c, n.end = r)), r
    }
    var V = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        G = /^$|\/(?:java|ecma)script/i,
        Q = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function Z(t, e) {
        var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && S.nodeName(t, e) ? S.merge([t], i) : i
    }

    function K(t, e) {
        for (var i = 0, n = t.length; i < n; i++) j.set(t[i], "globalEval", !e || j.get(e[i], "globalEval"))
    }
    Q.optgroup = Q.option, Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead, Q.th = Q.td;
    var J, tt, et = /<|&#?\w+;/;

    function it(t, e, i, n, r) {
        for (var s, o, a, l, u, c, h = e.createDocumentFragment(), p = [], d = 0, f = t.length; d < f; d++)
            if ((s = t[d]) || 0 === s)
                if ("object" === S.type(s)) S.merge(p, s.nodeType ? [s] : s);
                else if (et.test(s)) {
            for (o = o || h.appendChild(e.createElement("div")), a = (Y.exec(s) || ["", ""])[1].toLowerCase(), l = Q[a] || Q._default, o.innerHTML = l[1] + S.htmlPrefilter(s) + l[2], c = l[0]; c--;) o = o.lastChild;
            S.merge(p, o.childNodes), (o = h.firstChild).textContent = ""
        } else p.push(e.createTextNode(s));
        for (h.textContent = "", d = 0; s = p[d++];)
            if (n && -1 < S.inArray(s, n)) r && r.push(s);
            else if (u = S.contains(s.ownerDocument, s), o = Z(h.appendChild(s), "script"), u && K(o), i)
            for (c = 0; s = o[c++];) G.test(s.type || "") && i.push(s);
        return h
    }
    J = C.createDocumentFragment().appendChild(C.createElement("div")), (tt = C.createElement("input")).setAttribute("type", "radio"), tt.setAttribute("checked", "checked"), tt.setAttribute("name", "t"), J.appendChild(tt), m.checkClone = J.cloneNode(!0).cloneNode(!0).lastChild.checked, J.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!J.cloneNode(!0).lastChild.defaultValue;
    var nt = /^key/,
        rt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        st = /^([^.]*)(?:\.(.+)|)/;

    function ot() {
        return !0
    }

    function at() {
        return !1
    }

    function lt() {
        try {
            return C.activeElement
        } catch (t) {}
    }

    function ut(t, e, i, n, r, s) {
        var o, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), e) ut(t, a, i, n, e[a], s);
            return t
        }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = at;
        else if (!r) return t;
        return 1 === s && (o = r, (r = function(t) {
            return S().off(t), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = S.guid++)), t.each(function() {
            S.event.add(this, e, r, n, i)
        })
    }
    S.event = {
        global: {},
        add: function(e, t, i, n, r) {
            var s, o, a, l, u, c, h, p, d, f, g, m = j.get(e);
            if (m)
                for (i.handler && (i = (s = i).handler, r = s.selector), i.guid || (i.guid = S.guid++), (l = m.events) || (l = m.events = {}), (o = m.handle) || (o = m.handle = function(t) {
                        return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(F) || [""]).length; u--;) d = g = (a = st.exec(t[u]) || [])[1], f = (a[2] || "").split(".").sort(), d && (h = S.event.special[d] || {}, d = (r ? h.delegateType : h.bindType) || d, h = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && S.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, s), (p = l[d]) || ((p = l[d] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(e, n, f, o) || e.addEventListener && e.addEventListener(d, o)), h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
        },
        remove: function(t, e, i, n, r) {
            var s, o, a, l, u, c, h, p, d, f, g, m = j.hasData(t) && j.get(t);
            if (m && (l = m.events)) {
                for (u = (e = (e || "").match(F) || [""]).length; u--;)
                    if (d = g = (a = st.exec(e[u]) || [])[1], f = (a[2] || "").split(".").sort(), d) {
                        for (h = S.event.special[d] || {}, p = l[d = (n ? h.delegateType : h.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = p.length; s--;) c = p[s], !r && g !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (p.splice(s, 1), c.selector && p.delegateCount--, h.remove && h.remove.call(t, c));
                        o && !p.length && (h.teardown && !1 !== h.teardown.call(t, f, m.handle) || S.removeEvent(t, d, m.handle), delete l[d])
                    } else
                        for (d in l) S.event.remove(t, d + e[u], i, n, !0);
                S.isEmptyObject(l) && j.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            t = S.event.fix(t);
            var e, i, n, r, s, o, a = c.call(arguments),
                l = (j.get(this, "events") || {})[t.type] || [],
                u = S.event.special[t.type] || {};
            if ((a[0] = t).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                for (o = S.event.handlers.call(this, t, l), e = 0;
                    (r = o[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, i = 0;
                        (s = r.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s, t.data = s.data, void 0 !== (n = ((S.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, r, s, o = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (n = [], i = 0; i < a; i++) void 0 === n[r = (s = e[i]).selector + " "] && (n[r] = s.needsContext ? -1 < S(r, this).index(l) : S.find(r, this, null, [l]).length), n[r] && n.push(s);
                        n.length && o.push({
                            elem: l,
                            handlers: n
                        })
                    } return a < e.length && o.push({
                elem: this,
                handlers: e.slice(a)
            }), o
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, r, s = e.button;
                return null == t.pageX && null != e.clientX && (n = (i = t.target.ownerDocument || C).documentElement, r = i.body, t.pageX = e.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[S.expando]) return t;
            var e, i, n, r = t.type,
                s = t,
                o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = rt.test(r) ? this.mouseHooks : nt.test(r) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new S.Event(s), e = n.length; e--;) t[i = n[e]] = s[i];
            return t.target || (t.target = C), 3 === t.target.nodeType && (t.target = t.target.parentNode), o.filter ? o.filter(t, s) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== lt() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === lt() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && S.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(t) {
                    return S.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, S.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, S.Event = function(t, e) {
        if (!(this instanceof S.Event)) return new S.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? ot : at) : this.type = t, e && S.extend(this, e), this.timeStamp = t && t.timeStamp || S.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: at,
        isPropagationStopped: at,
        isImmediatePropagationStopped: at,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = ot, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = ot, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = ot, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, r) {
        S.event.special[t] = {
            delegateType: r,
            bindType: r,
            handle: function(t) {
                var e, i = t.relatedTarget,
                    n = t.handleObj;
                return i && (i === this || S.contains(this, i)) || (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = r), e
            }
        }
    }), S.fn.extend({
        on: function(t, e, i, n) {
            return ut(this, t, e, i, n)
        },
        one: function(t, e, i, n) {
            return ut(this, t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, S(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = at), this.each(function() {
                S.event.remove(this, t, i, e)
            })
        }
    });
    var ct = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ht = /<script|<style|<link/i,
        pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        dt = /^true\/(.*)/,
        ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function gt(t, e) {
        return S.nodeName(t, "table") && S.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function mt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function vt(t) {
        var e = dt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function yt(t, e) {
        var i, n, r, s, o, a, l, u;
        if (1 === e.nodeType) {
            if (j.hasData(t) && (s = j.access(t), o = j.set(e, s), u = s.events))
                for (r in delete o.handle, o.events = {}, u)
                    for (i = 0, n = u[r].length; i < n; i++) S.event.add(e, r, u[r][i]);
            L.hasData(t) && (a = L.access(t), l = S.extend({}, a), L.set(e, l))
        }
    }

    function _t(i, n, r, s) {
        n = g.apply([], n);
        var t, e, o, a, l, u, c = 0,
            h = i.length,
            p = h - 1,
            d = n[0],
            f = S.isFunction(d);
        if (f || 1 < h && "string" == typeof d && !m.checkClone && pt.test(d)) return i.each(function(t) {
            var e = i.eq(t);
            f && (n[0] = d.call(this, t, e.html())), _t(e, n, r, s)
        });
        if (h && (e = (t = it(n, i[0].ownerDocument, !1, i, s)).firstChild, 1 === t.childNodes.length && (t = e), e || s)) {
            for (a = (o = S.map(Z(t, "script"), mt)).length; c < h; c++) l = t, c !== p && (l = S.clone(l, !0, !0), a && S.merge(o, Z(l, "script"))), r.call(i[c], l, c);
            if (a)
                for (u = o[o.length - 1].ownerDocument, S.map(o, vt), c = 0; c < a; c++) l = o[c], G.test(l.type || "") && !j.access(l, "globalEval") && S.contains(u, l) && (l.src ? S._evalUrl && S._evalUrl(l.src) : S.globalEval(l.textContent.replace(ft, "")))
        }
        return i
    }

    function xt(t, e, i) {
        for (var n, r = e ? S.filter(e, t) : t, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || S.cleanData(Z(n)), n.parentNode && (i && S.contains(n.ownerDocument, n) && K(Z(n, "script")), n.parentNode.removeChild(n));
        return t
    }
    S.extend({
        htmlPrefilter: function(t) {
            return t.replace(ct, "<$1></$2>")
        },
        clone: function(t, e, i) {
            var n, r, s, o, a, l, u, c = t.cloneNode(!0),
                h = S.contains(t.ownerDocument, t);
            if (!(m.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || S.isXMLDoc(t)))
                for (o = Z(c), n = 0, r = (s = Z(t)).length; n < r; n++) a = s[n], l = o[n], void 0, "input" === (u = l.nodeName.toLowerCase()) && V.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (e)
                if (i)
                    for (s = s || Z(t), o = o || Z(c), n = 0, r = s.length; n < r; n++) yt(s[n], o[n]);
                else yt(t, c);
            return 0 < (o = Z(c, "script")).length && K(o, !h && Z(t, "script")), c
        },
        cleanData: function(t) {
            for (var e, i, n, r = S.event.special, s = 0; void 0 !== (i = t[s]); s++)
                if ($(i)) {
                    if (e = i[j.expando]) {
                        if (e.events)
                            for (n in e.events) r[n] ? S.event.remove(i, n) : S.removeEvent(i, n, e.handle);
                        i[j.expando] = void 0
                    }
                    i[L.expando] && (i[L.expando] = void 0)
                }
        }
    }), S.fn.extend({
        domManip: _t,
        detach: function(t) {
            return xt(this, t, !0)
        },
        remove: function(t) {
            return xt(this, t)
        },
        text: function(t) {
            return N(this, function(t) {
                return void 0 === t ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return _t(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || gt(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return _t(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = gt(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return _t(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return _t(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (S.cleanData(Z(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return S.clone(this, t, e)
            })
        },
        html: function(t) {
            return N(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !ht.test(t) && !Q[(Y.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = S.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (S.cleanData(Z(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var i = [];
            return _t(this, arguments, function(t) {
                var e = this.parentNode;
                S.inArray(this, i) < 0 && (S.cleanData(Z(this)), e && e.replaceChild(t, this))
            }, i)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, o) {
        S.fn[t] = function(t) {
            for (var e, i = [], n = S(t), r = n.length - 1, s = 0; s <= r; s++) e = s === r ? this : this.clone(!0), S(n[s])[o](e), a.apply(i, e.get());
            return this.pushStack(i)
        }
    });
    var bt, wt = {
        HTML: "block",
        BODY: "block"
    };

    function Tt(t, e) {
        var i = S(e.createElement(t)).appendTo(e.body),
            n = S.css(i[0], "display");
        return i.detach(), n
    }

    function Ct(t) {
        var e = C,
            i = wt[t];
        return i || ("none" !== (i = Tt(t, e)) && i || ((e = (bt = (bt || S("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), i = Tt(t, e), bt.detach()), wt[t] = i), i
    }
    var St = /^margin/,
        kt = new RegExp("^(" + I + ")(?!px)[a-z%]+$", "i"),
        At = function(t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = T), e.getComputedStyle(t)
        },
        Et = function(t, e, i, n) {
            var r, s, o = {};
            for (s in e) o[s] = t.style[s], t.style[s] = e[s];
            for (s in r = i.apply(t, n || []), e) t.style[s] = o[s];
            return r
        },
        Pt = C.documentElement;

    function Dt(t, e, i) {
        var n, r, s, o, a = t.style;
        return "" !== (o = (i = i || At(t)) ? i.getPropertyValue(e) || i[e] : void 0) && void 0 !== o || S.contains(t.ownerDocument, t) || (o = S.style(t, e)), i && !m.pixelMarginRight() && kt.test(o) && St.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s), void 0 !== o ? o + "" : o
    }

    function Ot(t, e) {
        return {
            get: function() {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        var e, i, n, r, s = C.createElement("div"),
            o = C.createElement("div");

        function t() {
            o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", o.innerHTML = "", Pt.appendChild(s);
            var t = T.getComputedStyle(o);
            e = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, o.style.marginRight = "50%", n = "4px" === t.marginRight, Pt.removeChild(s)
        }
        o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(o), S.extend(m, {
            pixelPosition: function() {
                return t(), e
            },
            boxSizingReliable: function() {
                return null == i && t(), i
            },
            pixelMarginRight: function() {
                return null == i && t(), n
            },
            reliableMarginLeft: function() {
                return null == i && t(), r
            },
            reliableMarginRight: function() {
                var t, e = o.appendChild(C.createElement("div"));
                return e.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", o.style.width = "1px", Pt.appendChild(s), t = !parseFloat(T.getComputedStyle(e).marginRight), Pt.removeChild(s), o.removeChild(e), t
            }
        }))
    }();
    var Ft = /^(none|table(?!-c[ea]).+)/,
        Mt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Nt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        $t = ["Webkit", "O", "Moz", "ms"],
        Rt = C.createElement("div").style;

    function jt(t) {
        if (t in Rt) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = $t.length; i--;)
            if ((t = $t[i] + e) in Rt) return t
    }

    function Lt(t, e, i) {
        var n = H.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function zt(t, e, i, n, r) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; s < 4; s += 2) "margin" === i && (o += S.css(t, i + W[s], !0, r)), n ? ("content" === i && (o -= S.css(t, "padding" + W[s], !0, r)), "margin" !== i && (o -= S.css(t, "border" + W[s] + "Width", !0, r))) : (o += S.css(t, "padding" + W[s], !0, r), "padding" !== i && (o += S.css(t, "border" + W[s] + "Width", !0, r)));
        return o
    }

    function Bt(t, e, i) {
        var n = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            s = At(t),
            o = "border-box" === S.css(t, "boxSizing", !1, s);
        if (r <= 0 || null == r) {
            if (((r = Dt(t, e, s)) < 0 || null == r) && (r = t.style[e]), kt.test(r)) return r;
            n = o && (m.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + zt(t, e, i || (o ? "border" : "content"), n, s) + "px"
    }

    function qt(t, e) {
        for (var i, n, r, s = [], o = 0, a = t.length; o < a; o++)(n = t[o]).style && (s[o] = j.get(n, "olddisplay"), i = n.style.display, e ? (s[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && X(n) && (s[o] = j.access(n, "olddisplay", Ct(n.nodeName)))) : (r = X(n), "none" === i && r || j.set(n, "olddisplay", r ? i : S.css(n, "display"))));
        for (o = 0; o < a; o++)(n = t[o]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[o] || "" : "none"));
        return t
    }

    function It(t, e, i, n, r) {
        return new It.prototype.init(t, e, i, n, r)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = Dt(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = S.camelCase(e),
                    l = t.style;
                if (e = S.cssProps[a] || (S.cssProps[a] = jt(a) || a), o = S.cssHooks[e] || S.cssHooks[a], void 0 === i) return o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : l[e];
                "string" === (s = typeof i) && (r = H.exec(i)) && r[1] && (i = U(t, e, r), s = "number"), null != i && i == i && ("number" === s && (i += r && r[3] || (S.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, n)) || (l[e] = i))
            }
        },
        css: function(t, e, i, n) {
            var r, s, o, a = S.camelCase(e);
            return e = S.cssProps[a] || (S.cssProps[a] = jt(a) || a), (o = S.cssHooks[e] || S.cssHooks[a]) && "get" in o && (r = o.get(t, !0, i)), void 0 === r && (r = Dt(t, e, n)), "normal" === r && e in Nt && (r = Nt[e]), "" === i || i ? (s = parseFloat(r), !0 === i || isFinite(s) ? s || 0 : r) : r
        }
    }), S.each(["height", "width"], function(t, o) {
        S.cssHooks[o] = {
            get: function(t, e, i) {
                if (e) return Ft.test(S.css(t, "display")) && 0 === t.offsetWidth ? Et(t, Mt, function() {
                    return Bt(t, o, i)
                }) : Bt(t, o, i)
            },
            set: function(t, e, i) {
                var n, r = i && At(t),
                    s = i && zt(t, o, i, "border-box" === S.css(t, "boxSizing", !1, r), r);
                return s && (n = H.exec(e)) && "px" !== (n[3] || "px") && (t.style[o] = e, e = S.css(t, o)), Lt(0, e, s)
            }
        }
    }), S.cssHooks.marginLeft = Ot(m.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(Dt(t, "marginLeft")) || t.getBoundingClientRect().left - Et(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px"
    }), S.cssHooks.marginRight = Ot(m.reliableMarginRight, function(t, e) {
        if (e) return Et(t, {
            display: "inline-block"
        }, Dt, [t, "marginRight"])
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, s) {
        S.cssHooks[r + s] = {
            expand: function(t) {
                for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[r + W[e] + s] = n[e] || n[e - 2] || n[0];
                return i
            }
        }, St.test(r) || (S.cssHooks[r + s].set = Lt)
    }), S.fn.extend({
        css: function(t, e) {
            return N(this, function(t, e, i) {
                var n, r, s = {},
                    o = 0;
                if (S.isArray(e)) {
                    for (n = At(t), r = e.length; o < r; o++) s[e[o]] = S.css(t, e[o], !1, n);
                    return s
                }
                return void 0 !== i ? S.style(t, e, i) : S.css(t, e)
            }, t, e, 1 < arguments.length)
        },
        show: function() {
            return qt(this, !0)
        },
        hide: function() {
            return qt(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                X(this) ? S(this).show() : S(this).hide()
            })
        }
    }), ((S.Tween = It).prototype = {
        constructor: It,
        init: function(t, e, i, n, r, s) {
            this.elem = t, this.prop = i, this.easing = r || S.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (S.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = It.propHooks[this.prop];
            return t && t.get ? t.get(this) : It.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = It.propHooks[this.prop];
            return this.options.duration ? this.pos = e = S.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : It.propHooks._default.set(this), this
        }
    }).init.prototype = It.prototype, (It.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = S.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                S.fx.step[t.prop] ? S.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[S.cssProps[t.prop]] && !S.cssHooks[t.prop] ? t.elem[t.prop] = t.now : S.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = It.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, S.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = It.prototype.init, S.fx.step = {};
    var Ht, Wt, Xt, Ut, Vt, Yt = /^(?:toggle|show|hide)$/,
        Gt = /queueHooks$/;

    function Qt() {
        return T.setTimeout(function() {
            Ht = void 0
        }), Ht = S.now()
    }

    function Zt(t, e) {
        var i, n = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; n < 4; n += 2 - e) r["margin" + (i = W[n])] = r["padding" + i] = t;
        return e && (r.opacity = r.width = t), r
    }

    function Kt(t, e, i) {
        for (var n, r = (Jt.tweeners[e] || []).concat(Jt.tweeners["*"]), s = 0, o = r.length; s < o; s++)
            if (n = r[s].call(i, e, t)) return n
    }

    function Jt(s, t, e) {
        var i, o, n = 0,
            r = Jt.prefilters.length,
            a = S.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = Ht || Qt(), e = Math.max(0, u.startTime + u.duration - t), i = 1 - (e / u.duration || 0), n = 0, r = u.tweens.length; n < r; n++) u.tweens[n].run(i);
                return a.notifyWith(s, [u, i, e]), i < 1 && r ? e : (a.resolveWith(s, [u]), !1)
            },
            u = a.promise({
                elem: s,
                props: S.extend({}, t),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, e),
                originalProperties: t,
                originalOptions: e,
                startTime: Ht || Qt(),
                duration: e.duration,
                tweens: [],
                createTween: function(t, e) {
                    var i = S.Tween(s, u.opts, t, e, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var e = 0,
                        i = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; e < i; e++) u.tweens[e].run(1);
                    return t ? (a.notifyWith(s, [u, 1, 0]), a.resolveWith(s, [u, t])) : a.rejectWith(s, [u, t]), this
                }
            }),
            c = u.props;
        for (! function(t, e) {
                var i, n, r, s, o;
                for (i in t)
                    if (r = e[n = S.camelCase(i)], s = t[i], S.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (o = S.cssHooks[n]) && "expand" in o)
                        for (i in s = o.expand(s), delete t[n], s) i in t || (t[i] = s[i], e[i] = r);
                    else e[n] = r
            }(c, u.opts.specialEasing); n < r; n++)
            if (i = Jt.prefilters[n].call(u, s, c, u.opts)) return S.isFunction(i.stop) && (S._queueHooks(u.elem, u.opts.queue).stop = S.proxy(i.stop, i)), i;
        return S.map(c, Kt, u), S.isFunction(u.opts.start) && u.opts.start.call(s, u), S.fx.timer(S.extend(l, {
            elem: s,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    S.Animation = S.extend(Jt, {
        tweeners: {
            "*": [function(t, e) {
                var i = this.createTween(t, e);
                return U(i.elem, t, H.exec(e), i), i
            }]
        },
        tweener: function(t, e) {
            S.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(F);
            for (var i, n = 0, r = t.length; n < r; n++) i = t[n], Jt.tweeners[i] = Jt.tweeners[i] || [], Jt.tweeners[i].unshift(e)
        },
        prefilters: [function(e, t, i) {
            var n, r, s, o, a, l, u, c = this,
                h = {},
                p = e.style,
                d = e.nodeType && X(e),
                f = j.get(e, "fxshow");
            for (n in i.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, c.always(function() {
                    c.always(function() {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (u = S.css(e, "display")) ? j.get(e, "olddisplay") || Ct(e.nodeName) : u) && "none" === S.css(e, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", c.always(function() {
                    p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
                })), t)
                if (r = t[n], Yt.exec(r)) {
                    if (delete t[n], s = s || "toggle" === r, r === (d ? "hide" : "show")) {
                        if ("show" !== r || !f || void 0 === f[n]) continue;
                        d = !0
                    }
                    h[n] = f && f[n] || S.style(e, n)
                } else u = void 0;
            if (S.isEmptyObject(h)) "inline" === ("none" === u ? Ct(e.nodeName) : u) && (p.display = u);
            else
                for (n in f ? "hidden" in f && (d = f.hidden) : f = j.access(e, "fxshow", {}), s && (f.hidden = !d), d ? S(e).show() : c.done(function() {
                        S(e).hide()
                    }), c.done(function() {
                        var t;
                        for (t in j.remove(e, "fxshow"), h) S.style(e, t, h[t])
                    }), h) o = Kt(d ? f[n] : 0, n, c), n in f || (f[n] = o.start, d && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
        }],
        prefilter: function(t, e) {
            e ? Jt.prefilters.unshift(t) : Jt.prefilters.push(t)
        }
    }), S.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? S.extend({}, t) : {
            complete: i || !i && e || S.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !S.isFunction(e) && e
        };
        return n.duration = S.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in S.fx.speeds ? S.fx.speeds[n.duration] : S.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            S.isFunction(n.old) && n.old.call(this), n.queue && S.dequeue(this, n.queue)
        }, n
    }, S.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(X).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(e, t, i, n) {
            var r = S.isEmptyObject(e),
                s = S.speed(t, i, n),
                o = function() {
                    var t = Jt(this, S.extend({}, e), s);
                    (r || j.get(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(r, t, s) {
            var o = function(t) {
                var e = t.stop;
                delete t.stop, e(s)
            };
            return "string" != typeof r && (s = t, t = r, r = void 0), t && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                var t = !0,
                    e = null != r && r + "queueHooks",
                    i = S.timers,
                    n = j.get(this);
                if (e) n[e] && n[e].stop && o(n[e]);
                else
                    for (e in n) n[e] && n[e].stop && Gt.test(e) && o(n[e]);
                for (e = i.length; e--;) i[e].elem !== this || null != r && i[e].queue !== r || (i[e].anim.stop(s), t = !1, i.splice(e, 1));
                !t && s || S.dequeue(this, r)
            })
        },
        finish: function(o) {
            return !1 !== o && (o = o || "fx"), this.each(function() {
                var t, e = j.get(this),
                    i = e[o + "queue"],
                    n = e[o + "queueHooks"],
                    r = S.timers,
                    s = i ? i.length : 0;
                for (e.finish = !0, S.queue(this, o, []), n && n.stop && n.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === o && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete e.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(t, n) {
        var r = S.fn[n];
        S.fn[n] = function(t, e, i) {
            return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(Zt(n, !0), t, e, i)
        }
    }), S.each({
        slideDown: Zt("show"),
        slideUp: Zt("hide"),
        slideToggle: Zt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, n) {
        S.fn[t] = function(t, e, i) {
            return this.animate(n, t, e, i)
        }
    }), S.timers = [], S.fx.tick = function() {
        var t, e = 0,
            i = S.timers;
        for (Ht = S.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || S.fx.stop(), Ht = void 0
    }, S.fx.timer = function(t) {
        S.timers.push(t), t() ? S.fx.start() : S.timers.pop()
    }, S.fx.interval = 13, S.fx.start = function() {
        Wt || (Wt = T.setInterval(S.fx.tick, S.fx.interval))
    }, S.fx.stop = function() {
        T.clearInterval(Wt), Wt = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(n, t) {
        return n = S.fx && S.fx.speeds[n] || n, t = t || "fx", this.queue(t, function(t, e) {
            var i = T.setTimeout(t, n);
            e.stop = function() {
                T.clearTimeout(i)
            }
        })
    }, Xt = C.createElement("input"), Ut = C.createElement("select"), Vt = Ut.appendChild(C.createElement("option")), Xt.type = "checkbox", m.checkOn = "" !== Xt.value, m.optSelected = Vt.selected, Ut.disabled = !0, m.optDisabled = !Vt.disabled, (Xt = C.createElement("input")).value = "t", Xt.type = "radio", m.radioValue = "t" === Xt.value;
    var te, ee = S.expr.attrHandle;
    S.fn.extend({
        attr: function(t, e) {
            return N(this, S.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                S.removeAttr(this, t)
            })
        }
    }), S.extend({
        attr: function(t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? S.prop(t, e, i) : (1 === s && S.isXMLDoc(t) || (e = e.toLowerCase(), r = S.attrHooks[e] || (S.expr.match.bool.test(e) ? te : void 0)), void 0 !== i ? null === i ? void S.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : null == (n = S.find.attr(t, e)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!m.radioValue && "radio" === e && S.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n, r = 0,
                s = e && e.match(F);
            if (s && 1 === t.nodeType)
                for (; i = s[r++];) n = S.propFix[i] || i, S.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
        }
    }), te = {
        set: function(t, e, i) {
            return !1 === e ? S.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var s = ee[e] || S.find.attr;
        ee[e] = function(t, e, i) {
            var n, r;
            return i || (r = ee[e], ee[e] = n, n = null != s(t, e, i) ? e.toLowerCase() : null, ee[e] = r), n
        }
    });
    var ie = /^(?:input|select|textarea|button)$/i,
        ne = /^(?:a|area)$/i;
    S.fn.extend({
        prop: function(t, e) {
            return N(this, S.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[S.propFix[t] || t]
            })
        }
    }), S.extend({
        prop: function(t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && S.isXMLDoc(t) || (e = S.propFix[e] || e, r = S.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = S.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ie.test(t.nodeName) || ne.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), m.optSelected || (S.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    });
    var re = /[\t\r\n\f]/g;

    function se(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    S.fn.extend({
        addClass: function(e) {
            var t, i, n, r, s, o, a, l = 0;
            if (S.isFunction(e)) return this.each(function(t) {
                S(this).addClass(e.call(this, t, se(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(F) || []; i = this[l++];)
                    if (r = se(i), n = 1 === i.nodeType && (" " + r + " ").replace(re, " ")) {
                        for (o = 0; s = t[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        r !== (a = S.trim(n)) && i.setAttribute("class", a)
                    } return this
        },
        removeClass: function(e) {
            var t, i, n, r, s, o, a, l = 0;
            if (S.isFunction(e)) return this.each(function(t) {
                S(this).removeClass(e.call(this, t, se(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(F) || []; i = this[l++];)
                    if (r = se(i), n = 1 === i.nodeType && (" " + r + " ").replace(re, " ")) {
                        for (o = 0; s = t[o++];)
                            for (; - 1 < n.indexOf(" " + s + " ");) n = n.replace(" " + s + " ", " ");
                        r !== (a = S.trim(n)) && i.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(r, e) {
            var s = typeof r;
            return "boolean" == typeof e && "string" === s ? e ? this.addClass(r) : this.removeClass(r) : S.isFunction(r) ? this.each(function(t) {
                S(this).toggleClass(r.call(this, t, se(this), e), e)
            }) : this.each(function() {
                var t, e, i, n;
                if ("string" === s)
                    for (e = 0, i = S(this), n = r.match(F) || []; t = n[e++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== r && "boolean" !== s || ((t = se(this)) && j.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === r ? "" : j.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && -1 < (" " + se(i) + " ").replace(re, " ").indexOf(e)) return !0;
            return !1
        }
    });
    var oe = /\r/g,
        ae = /[\x20\t\r\n\f]+/g;
    S.fn.extend({
        val: function(i) {
            var n, t, r, e = this[0];
            return arguments.length ? (r = S.isFunction(i), this.each(function(t) {
                var e;
                1 === this.nodeType && (null == (e = r ? i.call(this, t, S(this).val()) : i) ? e = "" : "number" == typeof e ? e += "" : S.isArray(e) && (e = S.map(e, function(t) {
                    return null == t ? "" : t + ""
                })), (n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : e ? (n = S.valHooks[e.type] || S.valHooks[e.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(e, "value")) ? t : "string" == typeof(t = e.value) ? t.replace(oe, "") : null == t ? "" : t : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = S.find.attr(t, "value");
                    return null != e ? e : S.trim(S.text(t)).replace(ae, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type || r < 0, o = s ? null : [], a = s ? r + 1 : n.length, l = r < 0 ? a : s ? r : 0; l < a; l++)
                        if (((i = n[l]).selected || l === r) && (m.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !S.nodeName(i.parentNode, "optgroup"))) {
                            if (e = S(i).val(), s) return e;
                            o.push(e)
                        } return o
                },
                set: function(t, e) {
                    for (var i, n, r = t.options, s = S.makeArray(e), o = r.length; o--;)((n = r[o]).selected = -1 < S.inArray(S.valHooks.option.get(n), s)) && (i = !0);
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(t, e) {
                if (S.isArray(e)) return t.checked = -1 < S.inArray(S(t).val(), e)
            }
        }, m.checkOn || (S.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var le = /^(?:focusinfocus|focusoutblur)$/;
    S.extend(S.event, {
        trigger: function(t, e, i, n) {
            var r, s, o, a, l, u, c, h = [i || C],
                p = f.call(t, "type") ? t.type : t,
                d = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = o = i = i || C, 3 !== i.nodeType && 8 !== i.nodeType && !le.test(p + S.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), l = p.indexOf(":") < 0 && "on" + p, (t = t[S.expando] ? t : new S.Event(p, "object" == typeof t && t)).isTrigger = n ? 2 : 3, t.namespace = d.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : S.makeArray(e, [t]), c = S.event.special[p] || {}, n || !c.trigger || !1 !== c.trigger.apply(i, e))) {
                if (!n && !c.noBubble && !S.isWindow(i)) {
                    for (a = c.delegateType || p, le.test(a + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), o = s;
                    o === (i.ownerDocument || C) && h.push(o.defaultView || o.parentWindow || T)
                }
                for (r = 0;
                    (s = h[r++]) && !t.isPropagationStopped();) t.type = 1 < r ? a : c.bindType || p, (u = (j.get(s, "events") || {})[t.type] && j.get(s, "handle")) && u.apply(s, e), (u = l && s[l]) && u.apply && $(s) && (t.result = u.apply(s, e), !1 === t.result && t.preventDefault());
                return t.type = p, n || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), e) || !$(i) || l && S.isFunction(i[p]) && !S.isWindow(i) && ((o = i[l]) && (i[l] = null), i[S.event.triggered = p](), S.event.triggered = void 0, o && (i[l] = o)), t.result
            }
        },
        simulate: function(t, e, i) {
            var n = S.extend(new S.Event, i, {
                type: t,
                isSimulated: !0
            });
            S.event.trigger(n, null, e)
        }
    }), S.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                S.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            if (i) return S.event.trigger(t, e, i, !0)
        }
    }), S.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, i) {
        S.fn[i] = function(t, e) {
            return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
        }
    }), S.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), m.focusin = "onfocusin" in T, m.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(i, n) {
        var r = function(t) {
            S.event.simulate(n, t.target, S.event.fix(t))
        };
        S.event.special[n] = {
            setup: function() {
                var t = this.ownerDocument || this,
                    e = j.access(t, n);
                e || t.addEventListener(i, r, !0), j.access(t, n, (e || 0) + 1)
            },
            teardown: function() {
                var t = this.ownerDocument || this,
                    e = j.access(t, n) - 1;
                e ? j.access(t, n, e) : (t.removeEventListener(i, r, !0), j.remove(t, n))
            }
        }
    });
    var ue = T.location,
        ce = S.now(),
        he = /\?/;
    S.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, S.parseXML = function(t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            e = (new T.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + t), e
    };
    var pe = /#.*$/,
        de = /([?&])_=[^&]*/,
        fe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ge = /^(?:GET|HEAD)$/,
        me = /^\/\//,
        ve = {},
        ye = {},
        _e = "*/".concat("*"),
        xe = C.createElement("a");

    function be(s) {
        return function(t, e) {
            "string" != typeof t && (e = t, t = "*");
            var i, n = 0,
                r = t.toLowerCase().match(F) || [];
            if (S.isFunction(e))
                for (; i = r[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (s[i] = s[i] || []).unshift(e)) : (s[i] = s[i] || []).push(e)
        }
    }

    function we(e, r, s, o) {
        var a = {},
            l = e === ye;

        function u(t) {
            var n;
            return a[t] = !0, S.each(e[t] || [], function(t, e) {
                var i = e(r, s, o);
                return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (r.dataTypes.unshift(i), u(i), !1)
            }), n
        }
        return u(r.dataTypes[0]) || !a["*"] && u("*")
    }

    function Te(t, e) {
        var i, n, r = S.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && S.extend(!0, t, n), t
    }
    xe.href = ue.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ue.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ue.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _e,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": S.parseJSON,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Te(Te(t, S.ajaxSettings), e) : Te(S.ajaxSettings, t)
        },
        ajaxPrefilter: be(ve),
        ajaxTransport: be(ye),
        ajax: function(t, e) {
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var c, h, p, i, d, n, f, r, g = S.ajaxSetup({}, e),
                m = g.context || g,
                v = g.context && (m.nodeType || m.jquery) ? S(m) : S.event,
                y = S.Deferred(),
                _ = S.Callbacks("once memory"),
                x = g.statusCode || {},
                s = {},
                o = {},
                b = 0,
                a = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!i)
                                for (i = {}; e = fe.exec(p);) i[e[1].toLowerCase()] = e[2];
                            e = i[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? p : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return b || (t = o[i] = o[i] || t, s[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (g.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (b < 2)
                                for (e in t) x[e] = [x[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || a;
                        return c && c.abort(e), l(0, e), this
                    }
                };
            if (y.promise(w).complete = _.add, w.success = w.done, w.error = w.fail, g.url = ((t || g.url || ue.href) + "").replace(pe, "").replace(me, ue.protocol + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = S.trim(g.dataType || "*").toLowerCase().match(F) || [""], null == g.crossDomain) {
                n = C.createElement("a");
                try {
                    n.href = g.url, n.href = n.href, g.crossDomain = xe.protocol + "//" + xe.host != n.protocol + "//" + n.host
                } catch (t) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = S.param(g.data, g.traditional)), we(ve, g, e, w), 2 === b) return w;
            for (r in (f = S.event && g.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !ge.test(g.type), h = g.url, g.hasContent || (g.data && (h = g.url += (he.test(h) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = de.test(h) ? h.replace(de, "$1_=" + ce++) : h + (he.test(h) ? "&" : "?") + "_=" + ce++)), g.ifModified && (S.lastModified[h] && w.setRequestHeader("If-Modified-Since", S.lastModified[h]), S.etag[h] && w.setRequestHeader("If-None-Match", S.etag[h])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && w.setRequestHeader("Content-Type", g.contentType), w.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + _e + "; q=0.01" : "") : g.accepts["*"]), g.headers) w.setRequestHeader(r, g.headers[r]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, w, g) || 2 === b)) return w.abort();
            for (r in a = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[r](g[r]);
            if (c = we(ye, g, e, w)) {
                if (w.readyState = 1, f && v.trigger("ajaxSend", [w, g]), 2 === b) return w;
                g.async && 0 < g.timeout && (d = T.setTimeout(function() {
                    w.abort("timeout")
                }, g.timeout));
                try {
                    b = 1, c.send(s, l)
                } catch (t) {
                    if (!(b < 2)) throw t;
                    l(-1, t)
                }
            } else l(-1, "No Transport");

            function l(t, e, i, n) {
                var r, s, o, a, l, u = e;
                2 !== b && (b = 2, d && T.clearTimeout(d), c = void 0, p = n || "", w.readyState = 0 < t ? 4 : 0, r = 200 <= t && t < 300 || 304 === t, i && (a = function(t, e, i) {
                    for (var n, r, s, o, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                        for (r in a)
                            if (a[r] && a[r].test(n)) {
                                l.unshift(r);
                                break
                            } if (l[0] in i) s = l[0];
                    else {
                        for (r in i) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            o || (o = r)
                        }
                        s = s || o
                    }
                    if (s) return s !== l[0] && l.unshift(s), i[s]
                }(g, w, i)), a = function(t, e, i, n) {
                    var r, s, o, a, l, u = {},
                        c = t.dataTypes.slice();
                    if (c[1])
                        for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
                    for (s = c.shift(); s;)
                        if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                        if (!(o = u[l + " " + s] || u["* " + s]))
                            for (r in u)
                                if ((a = r.split(" "))[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === o ? o = u[r] : !0 !== u[r] && (s = a[0], c.unshift(a[1]));
                                    break
                                } if (!0 !== o)
                            if (o && t.throws) e = o(e);
                            else try {
                                e = o(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: o ? t : "No conversion from " + l + " to " + s
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(g, a, w, r), r ? (g.ifModified && ((l = w.getResponseHeader("Last-Modified")) && (S.lastModified[h] = l), (l = w.getResponseHeader("etag")) && (S.etag[h] = l)), 204 === t || "HEAD" === g.type ? u = "nocontent" : 304 === t ? u = "notmodified" : (u = a.state, s = a.data, r = !(o = a.error))) : (o = u, !t && u || (u = "error", t < 0 && (t = 0))), w.status = t, w.statusText = (e || u) + "", r ? y.resolveWith(m, [s, u, w]) : y.rejectWith(m, [w, u, o]), w.statusCode(x), x = void 0, f && v.trigger(r ? "ajaxSuccess" : "ajaxError", [w, g, r ? s : o]), _.fireWith(m, [w, u]), f && (v.trigger("ajaxComplete", [w, g]), --S.active || S.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(t, e, i) {
            return S.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return S.get(t, void 0, e, "script")
        }
    }), S.each(["get", "post"], function(t, r) {
        S[r] = function(t, e, i, n) {
            return S.isFunction(e) && (n = n || i, i = e, e = void 0), S.ajax(S.extend({
                url: t,
                type: r,
                dataType: n,
                data: e,
                success: i
            }, S.isPlainObject(t) && t))
        }
    }), S._evalUrl = function(t) {
        return S.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, S.fn.extend({
        wrapAll: function(e) {
            var t;
            return S.isFunction(e) ? this.each(function(t) {
                S(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(i) {
            return S.isFunction(i) ? this.each(function(t) {
                S(this).wrapInner(i.call(this, t))
            }) : this.each(function() {
                var t = S(this),
                    e = t.contents();
                e.length ? e.wrapAll(i) : t.append(i)
            })
        },
        wrap: function(e) {
            var i = S.isFunction(e);
            return this.each(function(t) {
                S(this).wrapAll(i ? e.call(this, t) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                S.nodeName(this, "body") || S(this).replaceWith(this.childNodes)
            }).end()
        }
    }), S.expr.filters.hidden = function(t) {
        return !S.expr.filters.visible(t)
    }, S.expr.filters.visible = function(t) {
        return 0 < t.offsetWidth || 0 < t.offsetHeight || 0 < t.getClientRects().length
    };
    var Ce = /%20/g,
        Se = /\[\]$/,
        ke = /\r?\n/g,
        Ae = /^(?:submit|button|image|reset|file)$/i,
        Ee = /^(?:input|select|textarea|keygen)/i;

    function Pe(i, t, n, r) {
        var e;
        if (S.isArray(t)) S.each(t, function(t, e) {
            n || Se.test(i) ? r(i, e) : Pe(i + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, n, r)
        });
        else if (n || "object" !== S.type(t)) r(i, t);
        else
            for (e in t) Pe(i + "[" + e + "]", t[e], n, r)
    }
    S.param = function(t, e) {
        var i, n = [],
            r = function(t, e) {
                e = S.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = S.ajaxSettings && S.ajaxSettings.traditional), S.isArray(t) || t.jquery && !S.isPlainObject(t)) S.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (i in t) Pe(i, t[i], e, r);
        return n.join("&").replace(Ce, "+")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = S.prop(this, "elements");
                return t ? S.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !S(this).is(":disabled") && Ee.test(this.nodeName) && !Ae.test(t) && (this.checked || !V.test(t))
            }).map(function(t, e) {
                var i = S(this).val();
                return null == i ? null : S.isArray(i) ? S.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ke, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(ke, "\r\n")
                }
            }).get()
        }
    }), S.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (t) {}
    };
    var De = {
            0: 200,
            1223: 204
        },
        Oe = S.ajaxSettings.xhr();
    m.cors = !!Oe && "withCredentials" in Oe, m.ajax = Oe = !!Oe, S.ajaxTransport(function(r) {
        var s, o;
        if (m.cors || Oe && !r.crossDomain) return {
            send: function(t, e) {
                var i, n = r.xhr();
                if (n.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (i in r.xhrFields) n[i] = r.xhrFields[i];
                for (i in r.mimeType && n.overrideMimeType && n.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) n.setRequestHeader(i, t[i]);
                s = function(t) {
                    return function() {
                        s && (s = o = n.onload = n.onerror = n.onabort = n.onreadystatechange = null, "abort" === t ? n.abort() : "error" === t ? "number" != typeof n.status ? e(0, "error") : e(n.status, n.statusText) : e(De[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                            binary: n.response
                        } : {
                            text: n.responseText
                        }, n.getAllResponseHeaders()))
                    }
                }, n.onload = s(), o = n.onerror = s("error"), void 0 !== n.onabort ? n.onabort = o : n.onreadystatechange = function() {
                    4 === n.readyState && T.setTimeout(function() {
                        s && o()
                    })
                }, s = s("abort");
                try {
                    n.send(r.hasContent && r.data || null)
                } catch (t) {
                    if (s) throw t
                }
            },
            abort: function() {
                s && s()
            }
        }
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return S.globalEval(t), t
            }
        }
    }), S.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), S.ajaxTransport("script", function(i) {
        var n, r;
        if (i.crossDomain) return {
            send: function(t, e) {
                n = S("<script>").prop({
                    charset: i.scriptCharset,
                    src: i.url
                }).on("load error", r = function(t) {
                    n.remove(), r = null, t && e("error" === t.type ? 404 : 200, t.type)
                }), C.head.appendChild(n[0])
            },
            abort: function() {
                r && r()
            }
        }
    });
    var Fe = [],
        Me = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Fe.pop() || S.expando + "_" + ce++;
            return this[t] = !0, t
        }
    }), S.ajaxPrefilter("json jsonp", function(t, e, i) {
        var n, r, s, o = !1 !== t.jsonp && (Me.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Me.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) return n = t.jsonpCallback = S.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Me, "$1" + n) : !1 !== t.jsonp && (t.url += (he.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function() {
            return s || S.error(n + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = T[n], T[n] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === r ? S(T).removeProp(n) : T[n] = r, t[n] && (t.jsonpCallback = e.jsonpCallback, Fe.push(n)), s && S.isFunction(r) && r(s[0]), s = r = void 0
        }), "script"
    }), S.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || C;
        var n = x.exec(t),
            r = !i && [];
        return n ? [e.createElement(n[1])] : (n = it([t], e, r), r && r.length && S(r).remove(), S.merge([], n.childNodes))
    };
    var Ne = S.fn.load;

    function $e(t) {
        return S.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    S.fn.load = function(t, e, i) {
        if ("string" != typeof t && Ne) return Ne.apply(this, arguments);
        var n, r, s, o = this,
            a = t.indexOf(" ");
        return -1 < a && (n = S.trim(t.slice(a)), t = t.slice(0, a)), S.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < o.length && S.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, o.html(n ? S("<div>").append(S.parseHTML(t)).find(n) : t)
        }).always(i && function(t, e) {
            o.each(function() {
                i.apply(this, s || [t.responseText, e, t])
            })
        }), this
    }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        S.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), S.expr.filters.animated = function(e) {
        return S.grep(S.timers, function(t) {
            return e === t.elem
        }).length
    }, S.offset = {
        setOffset: function(t, e, i) {
            var n, r, s, o, a, l, u = S.css(t, "position"),
                c = S(t),
                h = {};
            "static" === u && (t.style.position = "relative"), a = c.offset(), s = S.css(t, "top"), l = S.css(t, "left"), ("absolute" === u || "fixed" === u) && -1 < (s + l).indexOf("auto") ? (o = (n = c.position()).top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), S.isFunction(e) && (e = e.call(t, i, S.extend({}, a))), null != e.top && (h.top = e.top - a.top + o), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : c.css(h)
        }
    }, S.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                S.offset.setOffset(this, e, t)
            });
            var t, i, n = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                s = n && n.ownerDocument;
            return s ? (t = s.documentElement, S.contains(t, n) ? (r = n.getBoundingClientRect(), i = $e(s), {
                top: r.top + i.pageYOffset - t.clientTop,
                left: r.left + i.pageXOffset - t.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === S.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), S.nodeName(t[0], "html") || (n = t.offset()), n.top += S.css(t[0], "borderTopWidth", !0), n.left += S.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - S.css(i, "marginTop", !0),
                    left: e.left - n.left - S.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === S.css(t, "position");) t = t.offsetParent;
                return t || Pt
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, r) {
        var s = "pageYOffset" === r;
        S.fn[e] = function(t) {
            return N(this, function(t, e, i) {
                var n = $e(t);
                if (void 0 === i) return n ? n[r] : t[e];
                n ? n.scrollTo(s ? n.pageXOffset : i, s ? i : n.pageYOffset) : t[e] = i
            }, e, t, arguments.length)
        }
    }), S.each(["top", "left"], function(t, i) {
        S.cssHooks[i] = Ot(m.pixelPosition, function(t, e) {
            if (e) return e = Dt(t, i), kt.test(e) ? S(t).position()[i] + "px" : e
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(s, o) {
        S.each({
            padding: "inner" + s,
            content: o,
            "": "outer" + s
        }, function(n, t) {
            S.fn[t] = function(t, e) {
                var i = arguments.length && (n || "boolean" != typeof t),
                    r = n || (!0 === t || !0 === e ? "margin" : "border");
                return N(this, function(t, e, i) {
                    var n;
                    return S.isWindow(t) ? t.document.documentElement["client" + s] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + s], n["scroll" + s], t.body["offset" + s], n["offset" + s], n["client" + s])) : void 0 === i ? S.css(t, e, r) : S.style(t, e, i, r)
                }, o, i ? t : void 0, i, null)
            }
        })
    }), S.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        },
        size: function() {
            return this.length
        }
    }), S.fn.andSelf = S.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Re = T.jQuery,
        je = T.$;
    return S.noConflict = function(t) {
        return T.$ === S && (T.$ = je), t && T.jQuery === S && (T.jQuery = Re), S
    }, t || (T.jQuery = T.$ = S), S
}),
/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr = function(n, h, o) {
        var t, r, s, a = {},
            p = h.documentElement,
            d = "modernizr",
            e = h.createElement(d),
            l = e.style,
            u = h.createElement("input"),
            c = ":)",
            i = {}.toString,
            f = " -webkit- -moz- -o- -ms- ".split(" "),
            g = "Webkit Moz O ms",
            m = g.split(" "),
            v = g.toLowerCase().split(" "),
            y = "http://www.w3.org/2000/svg",
            _ = {},
            x = {},
            b = {},
            w = [],
            T = w.slice,
            C = function(t, e, i, n) {
                var r, s, o, a, l = h.createElement("div"),
                    u = h.body,
                    c = u || h.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;)(o = h.createElement("div")).id = n ? n[i] : d + (i + 1), l.appendChild(o);
                return r = ["&#173;", '<style id="s', d, '">', t, "</style>"].join(""), l.id = d, (u ? l : c).innerHTML += r, c.appendChild(l), u || (c.style.background = "", c.style.overflow = "hidden", a = p.style.overflow, p.style.overflow = "hidden", p.appendChild(c)), s = e(l, t), u ? l.parentNode.removeChild(l) : (c.parentNode.removeChild(c), p.style.overflow = a), !!s
            },
            S = (s = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            }, function(t, e) {
                e = e || h.createElement(s[t] || "div");
                var i = (t = "on" + t) in e;
                return i || (e.setAttribute || (e = h.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(t, ""), i = E(e[t], "function"), E(e[t], "undefined") || (e[t] = o), e.removeAttribute(t))), e = null, i
            }),
            k = {}.hasOwnProperty;

        function A(t) {
            l.cssText = t
        }

        function E(t, e) {
            return typeof t === e
        }

        function P(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function D(t, e) {
            for (var i in t) {
                var n = t[i];
                if (!P(n, "-") && l[n] !== o) return "pfx" != e || n
            }
            return !1
        }

        function O(t, e, i) {
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                r = (t + " " + m.join(n + " ") + n).split(" ");
            return E(e, "string") || E(e, "undefined") ? D(r, e) : function(t, e, i) {
                for (var n in t) {
                    var r = e[t[n]];
                    if (r !== o) return !1 === i ? t[n] : E(r, "function") ? r.bind(i || e) : r
                }
                return !1
            }(r = (t + " " + v.join(n + " ") + n).split(" "), e, i)
        }
        for (var F in r = E(k, "undefined") || E(k.call, "undefined") ? function(t, e) {
                return e in t && E(t.constructor.prototype[e], "undefined")
            } : function(t, e) {
                return k.call(t, e)
            }, Function.prototype.bind || (Function.prototype.bind = function(n) {
                var r = this;
                if ("function" != typeof r) throw new TypeError;
                var s = T.call(arguments, 1),
                    o = function() {
                        if (this instanceof o) {
                            var t = function() {};
                            t.prototype = r.prototype;
                            var e = new t,
                                i = r.apply(e, s.concat(T.call(arguments)));
                            return Object(i) === i ? i : e
                        }
                        return r.apply(n, s.concat(T.call(arguments)))
                    };
                return o
            }), _.flexbox = function() {
                return O("flexWrap")
            }, _.flexboxlegacy = function() {
                return O("boxDirection")
            }, _.canvas = function() {
                var t = h.createElement("canvas");
                return !(!t.getContext || !t.getContext("2d"))
            }, _.canvastext = function() {
                return !(!a.canvas || !E(h.createElement("canvas").getContext("2d").fillText, "function"))
            }, _.webgl = function() {
                return !!n.WebGLRenderingContext
            }, _.touch = function() {
                var e;
                return "ontouchstart" in n || n.DocumentTouch && h instanceof DocumentTouch ? e = !0 : C(["@media (", f.join("touch-enabled),("), d, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                    e = 9 === t.offsetTop
                }), e
            }, _.geolocation = function() {
                return "geolocation" in navigator
            }, _.postmessage = function() {
                return !!n.postMessage
            }, _.websqldatabase = function() {
                return !!n.openDatabase
            }, _.indexedDB = function() {
                return !!O("indexedDB", n)
            }, _.hashchange = function() {
                return S("hashchange", n) && (h.documentMode === o || 7 < h.documentMode)
            }, _.history = function() {
                return !(!n.history || !history.pushState)
            }, _.draganddrop = function() {
                var t = h.createElement("div");
                return "draggable" in t || "ondragstart" in t && "ondrop" in t
            }, _.websockets = function() {
                return "WebSocket" in n || "MozWebSocket" in n
            }, _.rgba = function() {
                return A("background-color:rgba(150,255,150,.5)"), P(l.backgroundColor, "rgba")
            }, _.hsla = function() {
                return A("background-color:hsla(120,40%,100%,.5)"), P(l.backgroundColor, "rgba") || P(l.backgroundColor, "hsla")
            }, _.multiplebgs = function() {
                return A("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(l.background)
            }, _.backgroundsize = function() {
                return O("backgroundSize")
            }, _.borderimage = function() {
                return O("borderImage")
            }, _.borderradius = function() {
                return O("borderRadius")
            }, _.boxshadow = function() {
                return O("boxShadow")
            }, _.textshadow = function() {
                return "" === h.createElement("div").style.textShadow
            }, _.opacity = function() {
                var t, e;
                return t = "opacity:.55", A(f.join(t + ";") + (e || "")), /^0.55$/.test(l.opacity)
            }, _.cssanimations = function() {
                return O("animationName")
            }, _.csscolumns = function() {
                return O("columnCount")
            }, _.cssgradients = function() {
                var t = "background-image:";
                return A((t + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + t) + f.join("linear-gradient(left top,#9f9, white);" + t)).slice(0, -t.length)), P(l.backgroundImage, "gradient")
            }, _.cssreflections = function() {
                return O("boxReflect")
            }, _.csstransforms = function() {
                return !!O("transform")
            }, _.csstransforms3d = function() {
                var i = !!O("perspective");
                return i && "webkitPerspective" in p.style && C("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, e) {
                    i = 9 === t.offsetLeft && 3 === t.offsetHeight
                }), i
            }, _.csstransitions = function() {
                return O("transition")
            }, _.fontface = function() {
                var s;
                return C('@font-face {font-family:"font";src:url("https://")}', function(t, e) {
                    var i = h.getElementById("smodernizr"),
                        n = i.sheet || i.styleSheet,
                        r = n ? n.cssRules && n.cssRules[0] ? n.cssRules[0].cssText : n.cssText || "" : "";
                    s = /src/i.test(r) && 0 === r.indexOf(e.split(" ")[0])
                }), s
            }, _.generatedcontent = function() {
                var e;
                return C(["#", d, "{font:0/0 a}#", d, ':after{content:"', c, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
                    e = 3 <= t.offsetHeight
                }), e
            }, _.video = function() {
                var t = h.createElement("video"),
                    e = !1;
                try {
                    (e = !!t.canPlayType) && ((e = new Boolean(e)).ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
                } catch (t) {}
                return e
            }, _.audio = function() {
                var t = h.createElement("audio"),
                    e = !1;
                try {
                    (e = !!t.canPlayType) && ((e = new Boolean(e)).ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), e.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), e.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), e.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
                } catch (t) {}
                return e
            }, _.localstorage = function() {
                try {
                    return localStorage.setItem(d, d), localStorage.removeItem(d), !0
                } catch (t) {
                    return !1
                }
            }, _.sessionstorage = function() {
                try {
                    return sessionStorage.setItem(d, d), sessionStorage.removeItem(d), !0
                } catch (t) {
                    return !1
                }
            }, _.webworkers = function() {
                return !!n.Worker
            }, _.applicationcache = function() {
                return !!n.applicationCache
            }, _.svg = function() {
                return !!h.createElementNS && !!h.createElementNS(y, "svg").createSVGRect
            }, _.inlinesvg = function() {
                var t = h.createElement("div");
                return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == y
            }, _.smil = function() {
                return !!h.createElementNS && /SVGAnimate/.test(i.call(h.createElementNS(y, "animate")))
            }, _.svgclippaths = function() {
                return !!h.createElementNS && /SVGClipPath/.test(i.call(h.createElementNS(y, "clipPath")))
            }, _) r(_, F) && (t = F.toLowerCase(), a[t] = _[F](), w.push((a[t] ? "" : "no-") + t));
        return a.input || (a.input = function(t) {
                for (var e = 0, i = t.length; e < i; e++) b[t[e]] = !!(t[e] in u);
                return b.list && (b.list = !(!h.createElement("datalist") || !n.HTMLDataListElement)), b
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), a.inputtypes = function(t) {
                for (var e, i, n, r = 0, s = t.length; r < s; r++) u.setAttribute("type", i = t[r]), (e = "text" !== u.type) && (u.value = c, u.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && u.style.WebkitAppearance !== o ? (p.appendChild(u), e = (n = h.defaultView).getComputedStyle && "textfield" !== n.getComputedStyle(u, null).WebkitAppearance && 0 !== u.offsetHeight, p.removeChild(u)) : /^(search|tel)$/.test(i) || (e = /^(url|email)$/.test(i) ? u.checkValidity && !1 === u.checkValidity() : u.value != c)), x[t[r]] = !!e;
                return x
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))), a.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var i in t) r(t, i) && a.addTest(i, t[i]);
                else {
                    if (t = t.toLowerCase(), a[t] !== o) return a;
                    e = "function" == typeof e ? e() : e, p.className += " " + (e ? "" : "no-") + t, a[t] = e
                }
                return a
            }, A(""), e = u = null,
            function(t, l) {
                var u, c, e = t.html5 || {},
                    r = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    s = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    i = "_html5shiv",
                    n = 0,
                    o = {};

                function h() {
                    var t = f.items;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function p(t) {
                    var e = o[t[i]];
                    return e || (e = {}, n++, t[i] = n, o[n] = e), e
                }

                function d(t, e, i) {
                    return e || (e = l), c ? e.createElement(t) : (i || (i = p(e)), !(n = i.cache[t] ? i.cache[t].cloneNode() : s.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t)).canHaveChildren || r.test(t) || n.tagUrn ? n : i.frag.appendChild(n));
                    var n
                }

                function a(t) {
                    t || (t = l);
                    var e, i, n, r, s, o, a = p(t);
                    return !f.shivCSS || u || a.hasCSS || (a.hasCSS = (i = "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}", n = (e = t).createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement, n.innerHTML = "x<style>" + i + "</style>", !!r.insertBefore(n.lastChild, r.firstChild))), c || (s = t, (o = a).cache || (o.cache = {}, o.createElem = s.createElement, o.createFrag = s.createDocumentFragment, o.frag = o.createFrag()), s.createElement = function(t) {
                        return f.shivMethods ? d(t, s, o) : o.createElem(t)
                    }, s.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + h().join().replace(/[\w\-]+/g, function(t) {
                        return o.createElem(t), o.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(f, o.frag)), t
                }! function() {
                    try {
                        var t = l.createElement("a");
                        t.innerHTML = "<xyz></xyz>", u = "hidden" in t, c = 1 == t.childNodes.length || function() {
                            l.createElement("a");
                            var t = l.createDocumentFragment();
                            return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                        }()
                    } catch (t) {
                        c = u = !0
                    }
                }();
                var f = {
                    elements: e.items || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: "3.7.0",
                    shivCSS: !1 !== e.shivCSS,
                    supportsUnknownElements: c,
                    shivMethods: !1 !== e.shivMethods,
                    type: "default",
                    shivDocument: a,
                    createElement: d,
                    createDocumentFragment: function(t, e) {
                        if (t || (t = l), c) return t.createDocumentFragment();
                        for (var i = (e = e || p(t)).frag.cloneNode(), n = 0, r = h(), s = r.length; n < s; n++) i.createElement(r[n]);
                        return i
                    }
                };
                t.html5 = f, a(l)
            }(this, h), a._version = "2.8.3", a._prefixes = f, a._domPrefixes = v, a._cssomPrefixes = m, a.mq = function(t) {
                var e, i = n.matchMedia || n.msMatchMedia;
                return i ? i(t) && i(t).matches || !1 : (C("@media " + t + " { #" + d + " { position: absolute; } }", function(t) {
                    e = "absolute" == (n.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
                }), e)
            }, a.hasEvent = S, a.testProp = function(t) {
                return D([t])
            }, a.testAllProps = O, a.testStyles = C, a.prefixed = function(t, e, i) {
                return e ? O(t, e, i) : O(t, "pfx")
            }, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + w.join(" "), a
    }(this, this.document),
    /*!
     * Detectizr v2.2.0
     * http://barisaydinoglu.github.com/Detectizr/
     *
     * Written by Baris Aydinoglu (http://baris.aydinoglu.info) - Copyright 2012
     * Released under the MIT license
     *
     * Date: 2015-09-28T21:37Z
     */
    window.Detectizr = function(l, u, c, e) {
        var t, i, h = {},
            p = l.Modernizr,
            d = ["tv", "tablet", "mobile", "desktop"],
            f = {
                addAllFeaturesAsClass: !1,
                detectDevice: !0,
                detectDeviceModel: !0,
                detectScreen: !0,
                detectOS: !0,
                detectBrowser: !0,
                detectPlugins: !0
            },
            g = [{
                name: "adobereader",
                substrs: ["Adobe", "Acrobat"],
                progIds: ["AcroPDF.PDF", "PDF.PDFCtrl.5"]
            }, {
                name: "flash",
                substrs: ["Shockwave Flash"],
                progIds: ["ShockwaveFlash.ShockwaveFlash.1"]
            }, {
                name: "wmplayer",
                substrs: ["Windows Media"],
                progIds: ["wmplayer.ocx"]
            }, {
                name: "silverlight",
                substrs: ["Silverlight"],
                progIds: ["AgControl.AgControl"]
            }, {
                name: "quicktime",
                substrs: ["QuickTime"],
                progIds: ["QuickTime.QuickTime"]
            }],
            r = /[\t\r\n]/g,
            n = c.documentElement;

        function m(t) {
            return -1 < h.browser.userAgent.indexOf(t)
        }

        function v(t) {
            return t.test(h.browser.userAgent)
        }

        function y(t) {
            return t.exec(h.browser.userAgent)
        }

        function _(t) {
            return null === t || t === e ? "" : String(t).replace(/((\s|\-|\.)+[a-z0-9])/g, function(t) {
                return t.toUpperCase().replace(/(\s|\-|\.)/g, "")
            })
        }

        function x(t, e, i) {
            t && (t = _(t), e && (b(t + (e = _(e)), !0), i && b(t + e + "_" + i, !0)))
        }

        function b(t, e) {
            t && p && (f.addAllFeaturesAsClass ? p.addTest(t, e) : (e = "function" == typeof e ? e() : e) ? p.addTest(t, !0) : (delete p[t], function(t, e) {
                var i = e || "",
                    n = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(r, " ") : "");
                if (n) {
                    for (; 0 <= n.indexOf(" " + i + " ");) n = n.replace(" " + i + " ", " ");
                    t.className = e ? n.replace(/^\s+|\s+$/g, "") : ""
                }
            }(n, t)))
        }

        function w(t, e) {
            var i = (t.version = e).split(".");
            0 < i.length ? (i = i.reverse(), t.major = i.pop(), 0 < i.length ? (t.minor = i.pop(), 0 < i.length ? (i = i.reverse(), t.patch = i.join(".")) : t.patch = "0") : t.minor = "0") : t.major = "0"
        }

        function T() {
            l.clearTimeout(t), t = l.setTimeout(function() {
                i = h.device.orientation, l.innerHeight > l.innerWidth ? h.device.orientation = "portrait" : h.device.orientation = "landscape", b(h.device.orientation, !0), i !== h.device.orientation && b(i, !1)
            }, 10)
        }

        function C(t) {
            var e, i, n, r, s, o = u.plugins;
            for (r = o.length - 1; 0 <= r; r--) {
                for (i = (e = o[r]).name + e.description, n = 0, s = t.length; 0 <= s; s--) - 1 !== i.indexOf(t[s]) && (n += 1);
                if (n === t.length) return !0
            }
            return !1
        }

        function S(t) {
            var e;
            for (e = t.length - 1; 0 <= e; e--) try {
                new ActiveXObject(t[e])
            } catch (t) {}
            return !1
        }

        function s(t) {
            var e, i, n, r, s, o, a;
            if ((f = function t(e, i) {
                    var n, r, s;
                    if (2 < arguments.length)
                        for (n = 1, r = arguments.length; n < r; n += 1) t(e, arguments[n]);
                    else
                        for (s in i) i.hasOwnProperty(s) && (e[s] = i[s]);
                    return e
                }({}, f, t || {})).detectDevice) {
                for (h.device = {
                        type: "",
                        model: "",
                        orientation: ""
                    }, n = h.device, v(/googletv|smarttv|smart-tv|internet.tv|netcast|nettv|appletv|boxee|kylo|roku|dlnadoc|roku|pov_tv|hbbtv|ce\-html/) ? (n.type = d[0], n.model = "smartTv") : v(/xbox|playstation.3|wii/) ? (n.type = d[0], n.model = "gameConsole") : v(/ip(a|ro)d/) ? (n.type = d[1], n.model = "ipad") : v(/tablet/) && !v(/rx-34/) || v(/folio/) ? (n.type = d[1], n.model = String(y(/playbook/) || "")) : v(/linux/) && v(/android/) && !v(/fennec|mobi|htc.magic|htcX06ht|nexus.one|sc-02b|fone.945/) ? (n.type = d[1], n.model = "android") : v(/kindle/) || v(/mac.os/) && v(/silk/) ? (n.type = d[1], n.model = "kindle") : v(/gt-p10|sc-01c|shw-m180s|sgh-t849|sch-i800|shw-m180l|sph-p100|sgh-i987|zt180|htc(.flyer|\_flyer)|sprint.atp51|viewpad7|pandigital(sprnova|nova)|ideos.s7|dell.streak.7|advent.vega|a101it|a70bht|mid7015|next2|nook/) || v(/mb511/) && v(/rutem/) ? (n.type = d[1], n.model = "android") : v(/bb10/) ? (n.type = d[1], n.model = "blackberry") : (n.model = y(/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec|j2me/), null !== n.model ? (n.type = d[2], n.model = String(n.model)) : (n.model = "", v(/bolt|fennec|iris|maemo|minimo|mobi|mowser|netfront|novarra|prism|rx-34|skyfire|tear|xv6875|xv6975|google.wireless.transcoder/) ? n.type = d[2] : v(/opera/) && v(/windows.nt.5/) && v(/htc|xda|mini|vario|samsung\-gt\-i8000|samsung\-sgh\-i9/) ? n.type = d[2] : v(/windows.(nt|xp|me|9)/) && !v(/phone/) || v(/win(9|.9|nt)/) || v(/\(windows 8\)/) ? n.type = d[3] : v(/macintosh|powerpc/) && !v(/silk/) ? (n.type = d[3], n.model = "mac") : v(/linux/) && v(/x11/) ? n.type = d[3] : v(/solaris|sunos|bsd/) ?
                        // Check if user agent is a Solaris, SunOS, BSD Desktop
                        n.type = d[3] : v(/cros/) ? n.type = d[3] : v(/bot|crawler|spider|yahoo|ia_archiver|covario-ids|findlinks|dataparksearch|larbin|mediapartners-google|ng-search|snappy|teoma|jeeves|tineye/) && !v(/mobile/) ? (n.type = d[3], n.model = "crawler") : n.type = d[2])), e = 0, i = d.length; e < i; e += 1) b(d[e], n.type === d[e]);
                f.detectDeviceModel && b(_(n.model), !0)
            }
            if (f.detectScreen && (n.screen = {}, p && p.mq && (p.mq("only screen and (max-width: 240px)") ? (n.screen.size = "veryVerySmall", b("veryVerySmallScreen", !0)) : p.mq("only screen and (max-width: 320px)") ? (n.screen.size = "verySmall", b("verySmallScreen", !0)) : p.mq("only screen and (max-width: 480px)") && (n.screen.size = "small", b("smallScreen", !0)), n.type !== d[1] && n.type !== d[2] || p.mq("only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)") && (n.screen.resolution = "high", b("highresolution", !0))), n.type === d[1] || n.type === d[2] ? (l.onresize = function(t) {
                    T()
                }, T()) : (n.orientation = "landscape", b(n.orientation, !0))), f.detectOS && (h.os = {}, r = h.os, "" !== n.model && ("ipad" === n.model || "iphone" === n.model || "ipod" === n.model ? (r.name = "ios", w(r, (v(/os\s([\d_]+)/) ? RegExp.$1 : "").replace(/_/g, "."))) : "android" === n.model ? (r.name = "android", w(r, v(/android\s([\d\.]+)/) ? RegExp.$1 : "")) : "blackberry" === n.model ? (r.name = "blackberry", w(r, v(/version\/([^\s]+)/) ? RegExp.$1 : "")) : "playbook" === n.model && (r.name = "blackberry", w(r, v(/os ([^\s]+)/) ? RegExp.$1.replace(";", "") : ""))), r.name || (m("win") || m("16bit") ? (r.name = "windows", m("windows nt 10") ? w(r, "10") : m("windows nt 6.3") ? w(r, "8.1") : m("windows nt 6.2") || v(/\(windows 8\)/) ? w(r, "8") : m("windows nt 6.1") ? w(r, "7") : m("windows nt 6.0") ? w(r, "vista") : m("windows nt 5.2") || m("windows nt 5.1") || m("windows xp") ? w(r, "xp") : m("windows nt 5.0") || m("windows 2000") ? w(r, "2k") : m("winnt") || m("windows nt") ? w(r, "nt") : m("win98") || m("windows 98") ? w(r, "98") : (m("win95") || m("windows 95")) && w(r, "95")) : m("mac") || m("darwin") ? (r.name = "mac os", m("68k") || m("68000") ? w(r, "68k") : m("ppc") || m("powerpc") ? w(r, "ppc") : m("os x") && w(r, (v(/os\sx\s([\d_]+)/) ? RegExp.$1 : "os x").replace(/_/g, "."))) : m("webtv") ? r.name = "webtv" : m("x11") || m("inux") ? r.name = "linux" : m("sunos") ? r.name = "sun" : m("irix") ? r.name = "irix" : m("freebsd") ? r.name = "freebsd" : m("bsd") && (r.name = "bsd")), r.name && (b(r.name, !0), r.major && (x(r.name, r.major), r.minor && x(r.name, r.major, r.minor))), v(/\sx64|\sx86|\swin64|\swow64|\samd64/) ? r.addressRegisterSize = "64bit" : r.addressRegisterSize = "32bit", b(r.addressRegisterSize, !0)), f.detectBrowser && (s = h.browser, v(/opera|webtv/) || !v(/msie\s([\d\w\.]+)/) && !m("trident") ? m("firefox") ? (s.engine = "gecko", s.name = "firefox", w(s, v(/firefox\/([\d\w\.]+)/) ? RegExp.$1 : "")) : m("gecko/") ? s.engine = "gecko" : m("opera") ? (s.name = "opera", s.engine = "presto", w(s, v(/version\/([\d\.]+)/) ? RegExp.$1 : v(/opera(\s|\/)([\d\.]+)/) ? RegExp.$2 : "")) : m("konqueror") ? s.name = "konqueror" : m("edge") ? (s.engine = "webkit", s.name = "edge", w(s, v(/edge\/([\d\.]+)/) ? RegExp.$1 : "")) : m("chrome") ? (s.engine = "webkit", s.name = "chrome", w(s, v(/chrome\/([\d\.]+)/) ? RegExp.$1 : "")) : m("iron") ? (s.engine = "webkit", s.name = "iron") : m("crios") ? (s.name = "chrome", s.engine = "webkit", w(s, v(/crios\/([\d\.]+)/) ? RegExp.$1 : "")) : m("applewebkit/") ? (s.name = "safari", s.engine = "webkit", w(s, v(/version\/([\d\.]+)/) ? RegExp.$1 : "")) : m("mozilla/") && (s.engine = "gecko") : (s.engine = "trident", s.name = "ie", !l.addEventListener && c.documentMode && 7 === c.documentMode ? w(s, "8.compat") : v(/trident.*rv[ :](\d+)\./) ? w(s, RegExp.$1) : w(s, v(/trident\/4\.0/) ? "8" : RegExp.$1)), s.name && (b(s.name, !0), s.major && (x(s.name, s.major), s.minor && x(s.name, s.major, s.minor))), b(s.engine, !0), s.language = u.userLanguage || u.language, b(s.language, !0)), f.detectPlugins) {
                for (s.plugins = [], e = g.length - 1; 0 <= e; e--) o = g[e], a = !1, l.ActiveXObject ? a = S(o.progIds) : u.plugins && (a = C(o.substrs)), a && (s.plugins.push(o.name), b(o.name, !0));
                u.javaEnabled() && (s.plugins.push("java"), b("java", !0))
            }
        }
        return h.detect = function(t) {
            return s(t)
        }, h.init = function() {
            h !== e && (h.browser = {
                userAgent: (u.userAgent || u.vendor || l.opera).toLowerCase()
            }, h.detect())
        }, h.init(), h
    }(this, this.navigator, this.document),
    /*!
     * jQuery throttle / debounce - v1.1 - 3/7/2010
     * http://benalman.com/projects/jquery-throttle-debounce-plugin/
     * 
     * Copyright (c) 2010 "Cowboy" Ben Alman
     * Dual licensed under the MIT and GPL licenses.
     * http://benalman.com/about/license/
     */
    // About: License
    // 
    // Copyright (c) 2010 "Cowboy" Ben Alman,
    // Dual licensed under the MIT and GPL licenses.
    // http://benalman.com/about/license/
    // 
    // About: Examples
    // 
    // These working examples, complete with fully commented code, illustrate a few
    // ways in which this plugin can be used.
    // 
    // Throttle - http://benalman.com/code/projects/jquery-throttle-debounce/examples/throttle/
    // Debounce - http://benalman.com/code/projects/jquery-throttle-debounce/examples/debounce/
    // 
    // About: Support and Testing
    // 
    // Information about what version or versions of jQuery this plugin has been
    // tested with, what browsers it has been tested in, and where the unit tests
    // reside (so you can test it yourself).
    // 
    // jQuery Versions - none, 1.3.2, 1.4.2
    // Browsers Tested - Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome 4-5, Opera 9.6-10.1.
    // Unit Tests      - http://benalman.com/code/projects/jquery-throttle-debounce/unit/
    // 
    // About: Release History
    // 
    // 1.1 - (3/7/2010) Fixed a bug in <jQuery.throttle> where trailing callbacks
    //       executed later than they should. Reworked a fair amount of internal
    //       logic as well.
    // 1.0 - (3/6/2010) Initial release as a stand-alone project. Migrated over
    //       from jquery-misc repo v0.4 to jquery-throttle repo v1.0, added the
    //       no_trailing throttle parameter and debounce functionality.
    // 
    // Topic: Note for non-jQuery users
    // 
    // jQuery isn't actually required for this plugin, because nothing internal
    // uses any jQuery methods or properties. jQuery is just used as a namespace
    // under which these methods can exist.
    // 
    // Since jQuery isn't actually required for this plugin, if jQuery doesn't exist
    // when this plugin is loaded, the method described below will be created in
    // the `Cowboy` namespace. Usage will be exactly the same, but instead of
    // $.method() or jQuery.method(), you'll need to use Cowboy.method().
    function(t, c) {
        var n, e = t.jQuery || t.Cowboy || (t.Cowboy = {});
        e.throttle = n = function(r, s, o, a) {
            var l, u = 0;

            function t() {
                var t = this,
                    e = +new Date - u,
                    i = arguments;

                function n() {
                    u = +new Date, o.apply(t, i)
                }
                a && !l && n(), l && clearTimeout(l), a === c && r < e ? n() : !0 !== s && (l = setTimeout(a ? function() {
                    l = c
                } : n, a === c ? r - e : r))
            }
            return "boolean" != typeof s && (a = o, o = s, s = c), e.guid && (t.guid = o.guid = o.guid || e.guid++), t
        }, e.debounce = function(t, e, i) {
            return i === c ? n(t, e, !1) : n(t, i, !1 !== e)
        }
    }(this),
    function(t) {
        var d, f, g = "hasOwnProperty",
            m = /[\.\/]/,
            v = /\s*,\s*/,
            y = function(t, e) {
                return t - e
            },
            _ = {
                n: {}
            },
            x = function() {
                for (var t = 0, e = this.length; t < e; t++)
                    if (void 0 !== this[t]) return this[t]
            },
            b = function() {
                for (var t = this.length; --t;)
                    if (void 0 !== this[t]) return this[t]
            },
            e = Object.prototype.toString,
            w = String,
            T = Array.isArray || function(t) {
                return t instanceof Array || "[object Array]" == e.call(t)
            };
        eve = function(t, e) {
            var i, n = f,
                r = Array.prototype.slice.call(arguments, 2),
                s = eve.listeners(t),
                o = 0,
                a = [],
                l = {},
                u = [],
                c = d;
            u.firstDefined = x, u.lastDefined = b, d = t;
            for (var h = f = 0, p = s.length; h < p; h++) "zIndex" in s[h] && (a.push(s[h].zIndex), s[h].zIndex < 0 && (l[s[h].zIndex] = s[h]));
            for (a.sort(y); a[o] < 0;)
                if (i = l[a[o++]], u.push(i.apply(e, r)), f) return f = n, u;
            for (h = 0; h < p; h++)
                if ("zIndex" in (i = s[h]))
                    if (i.zIndex == a[o]) {
                        if (u.push(i.apply(e, r)), f) break;
                        do {
                            if ((i = l[a[++o]]) && u.push(i.apply(e, r)), f) break
                        } while (i)
                    } else l[i.zIndex] = i;
            else if (u.push(i.apply(e, r)), f) break;
            return f = n, d = c, u
        }, eve._events = _, eve.listeners = function(t) {
            var e, i, n, r, s, o, a, l, u = T(t) ? t : t.split(m),
                c = _,
                h = [c],
                p = [];
            for (r = 0, s = u.length; r < s; r++) {
                for (l = [], o = 0, a = h.length; o < a; o++)
                    for (i = [(c = h[o].n)[u[r]], c["*"]], n = 2; n--;)(e = i[n]) && (l.push(e), p = p.concat(e.f || []));
                h = l
            }
            return p
        }, eve.separator = function(t) {
            t ? (t = "[" + (t = w(t).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]", m = new RegExp(t)) : m = /[\.\/]/
        }, eve.on = function(t, o) {
            if ("function" != typeof o) return function() {};
            for (var e = T(t) ? T(t[0]) ? t : [t] : w(t).split(v), i = 0, n = e.length; i < n; i++) ! function(t) {
                for (var e, i = T(t) ? t : w(t).split(m), n = _, r = 0, s = i.length; r < s; r++) n = (n = n.n).hasOwnProperty(i[r]) && n[i[r]] || (n[i[r]] = {
                    n: {}
                });
                for (n.f = n.f || [], r = 0, s = n.f.length; r < s; r++)
                    if (n.f[r] == o) {
                        e = !0;
                        break
                    }! e && n.f.push(o)
            }(e[i]);
            return function(t) {
                +t == +t && (o.zIndex = +t)
            }
        }, eve.f = function(t) {
            var e = [].slice.call(arguments, 1);
            return function() {
                eve.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
            }
        }, eve.stop = function() {
            f = 1
        }, eve.nt = function(t) {
            var e = T(d) ? d.join(".") : d;
            return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
        }, eve.nts = function() {
            return T(d) ? d : d.split(m)
        }, eve.off = eve.unbind = function(t, e) {
            if (t) {
                var i = T(t) ? T(t[0]) ? t : [t] : w(t).split(v);
                if (1 < i.length)
                    for (var n = 0, r = i.length; n < r; n++) eve.off(i[n], e);
                else {
                    i = T(t) ? t : w(t).split(m);
                    var s, o, a, l, u, c = [_],
                        h = [];
                    for (n = 0, r = i.length; n < r; n++)
                        for (l = 0; l < c.length; l += a.length - 2) {
                            if (a = [l, 1], s = c[l].n, "*" != i[n]) s[i[n]] && (a.push(s[i[n]]), h.unshift({
                                n: s,
                                name: i[n]
                            }));
                            else
                                for (o in s) s[g](o) && (a.push(s[o]), h.unshift({
                                    n: s,
                                    name: o
                                }));
                            c.splice.apply(c, a)
                        }
                    for (n = 0, r = c.length; n < r; n++)
                        for (s = c[n]; s.n;) {
                            if (e) {
                                if (s.f) {
                                    for (l = 0, u = s.f.length; l < u; l++)
                                        if (s.f[l] == e) {
                                            s.f.splice(l, 1);
                                            break
                                        }! s.f.length && delete s.f
                                }
                                for (o in s.n)
                                    if (s.n[g](o) && s.n[o].f) {
                                        var p = s.n[o].f;
                                        for (l = 0, u = p.length; l < u; l++)
                                            if (p[l] == e) {
                                                p.splice(l, 1);
                                                break
                                            }! p.length && delete s.n[o].f
                                    }
                            } else
                                for (o in delete s.f, s.n) s.n[g](o) && s.n[o].f && delete s.n[o].f;
                            s = s.n
                        }
                    t: for (n = 0, r = h.length; n < r; n++) {
                        for (o in (s = h[n]).n[s.name].f) continue t;
                        for (o in s.n[s.name].n) continue t;
                        delete s.n[s.name]
                    }
                }
            } else eve._events = _ = {
                n: {}
            }
        }, eve.once = function(t, e) {
            var i = function() {
                return eve.off(t, i), e.apply(this, arguments)
            };
            return eve.on(t, i)
        }, eve.version = "0.5.0", eve.toString = function() {
            return "You are running Eve 0.5.0"
        }, "undefined" != typeof module && module.exports ? module.exports = eve : "function" == typeof define && define.amd ? define("eve", [], function() {
            return eve
        }) : t.eve = eve
    }(this),
    function(e, i) {
        if ("function" == typeof define && define.amd) define(["eve"], function(t) {
            return i(e, t)
        });
        else if ("undefined" != typeof exports) {
            var t = require("eve");
            module.exports = i(e, t)
        } else i(e, e.eve)
    }(window || this, function(v, Y) {
        var s, o, c, a, r, h, p, t, d, f, m, y, _, x, b, w, T, C = (s = void 0 === Y ? function() {} : Y, c = {}, a = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame || function(t) {
                return setTimeout(t, 16, (new Date).getTime()), !0
            }, r = Array.isArray || function(t) {
                return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
            }, h = 0, p = "M" + (+new Date).toString(36), t = Date.now || function() {
                return +new Date
            }, d = function(t) {
                var e = this;
                if (null == t) return e.s;
                var i = e.s - t;
                e.b += e.dur * i, e.B += e.dur * i, e.s = t
            }, f = function(t) {
                return null == t ? this.spd : void(this.spd = t)
            }, m = function(t) {
                var e = this;
                return null == t ? e.dur : (e.s = e.s * t / e.dur, void(e.dur = t))
            }, y = function() {
                delete c[this.id], this.update(), s("mina.stop." + this.id, this)
            }, _ = function() {
                var t = this;
                t.pdif || (delete c[t.id], t.update(), t.pdif = t.get() - t.b)
            }, x = function() {
                var t = this;
                t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, c[t.id] = t, w())
            }, b = function() {
                var t, e = this;
                if (r(e.start)) {
                    t = [];
                    for (var i = 0, n = e.start.length; i < n; i++) t[i] = +e.start[i] + (e.end[i] - e.start[i]) * e.easing(e.s)
                } else t = +e.start + (e.end - e.start) * e.easing(e.s);
                e.set(t)
            }, w = function(t) {
                if (t) {
                    var e = 0;
                    for (var i in c)
                        if (c.hasOwnProperty(i)) {
                            var n = c[i],
                                r = n.get();
                            e++, n.s = (r - n.b) / (n.dur / n.spd), 1 <= n.s && (delete c[i], n.s = 1, e--, function(t) {
                                setTimeout(function() {
                                    s("mina.finish." + t.id, t)
                                })
                            }(n)), n.update()
                        } o = !!e && a(w)
                } else o || (o = a(w))
            }, (T = function(t, e, i, n, r, s, o) {
                var a = {
                    id: p + (h++).toString(36),
                    start: t,
                    end: e,
                    b: i,
                    s: 0,
                    dur: n - i,
                    spd: 1,
                    get: r,
                    set: s,
                    easing: o || T.linear,
                    status: d,
                    speed: f,
                    duration: m,
                    stop: y,
                    pause: _,
                    resume: x,
                    update: b
                };
                c[a.id] = a;
                var l, u = 0;
                for (l in c)
                    if (c.hasOwnProperty(l) && 2 == ++u) break;
                return 1 == u && w(), a
            }).time = t, T.getById = function(t) {
                return c[t] || null
            }, T.linear = function(t) {
                return t
            }, T.easeout = function(t) {
                return Math.pow(t, 1.7)
            }, T.easein = function(t) {
                return Math.pow(t, .48)
            }, T.easeinout = function(t) {
                if (1 == t) return 1;
                if (0 == t) return 0;
                var e = .48 - t / 1.04,
                    i = Math.sqrt(.1734 + e * e),
                    n = i - e,
                    r = -i - e,
                    s = Math.pow(Math.abs(n), 1 / 3) * (n < 0 ? -1 : 1) + Math.pow(Math.abs(r), 1 / 3) * (r < 0 ? -1 : 1) + .5;
                return 3 * (1 - s) * s * s + s * s * s
            }, T.backin = function(t) {
                return 1 == t ? 1 : t * t * (2.70158 * t - 1.70158)
            }, T.backout = function(t) {
                return 0 == t ? 0 : (t -= 1) * t * (2.70158 * t + 1.70158) + 1
            }, T.elastic = function(t) {
                return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
            }, T.bounce = function(t) {
                var e = 7.5625,
                    i = 2.75;
                return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375
            }, v.mina = T),
            e = function(t) {
                function m(t, e) {
                    if (t) {
                        if (t.nodeType) return f(t);
                        if (c(t, "array") && m.set) return m.set.apply(m, t);
                        if (t instanceof l) return t;
                        if (null == e) try {
                            return f(t = v.doc.querySelector(String(t)))
                        } catch (t) {
                            return null
                        }
                    }
                    return new d(t = null == t ? "100%" : t, e = null == e ? "100%" : e)
                }

                function u(t, e) {
                    if (e) {
                        if ("#text" == t && (t = v.doc.createTextNode(e.text || e["#text"] || "")), "#comment" == t && (t = v.doc.createComment(e.text || e["#text"] || "")), "string" == typeof t && (t = u(t)), "string" == typeof e) return 1 == t.nodeType ? "xlink:" == e.substring(0, 6) ? t.getAttributeNS(j, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(L, e.substring(4)) : t.getAttribute(e) : "text" == e ? t.nodeValue : null;
                        if (1 == t.nodeType) {
                            for (var i in e)
                                if (e[y](i)) {
                                    var n = _(e[i]);
                                    n ? "xlink:" == i.substring(0, 6) ? t.setAttributeNS(j, i.substring(6), n) : "xml:" == i.substring(0, 4) ? t.setAttributeNS(L, i.substring(4), n) : t.setAttribute(i, n) : t.removeAttribute(i)
                                }
                        } else "text" in e && (t.nodeValue = e.text)
                    } else t = v.doc.createElementNS(L, t);
                    return t
                }

                function c(t, e) {
                    return "finite" == (e = _.prototype.toLowerCase.call(e)) ? isFinite(t) : !("array" != e || !(t instanceof Array || Array.isArray && Array.isArray(t))) || ("null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || n.call(t).slice(8, -1).toLowerCase() == e)
                }

                function e(s, o, a) {
                    return function t() {
                        var e = Array.prototype.slice.call(arguments, 0),
                            i = e.join("␀"),
                            n = t.cache = t.cache || {},
                            r = t.count = t.count || [];
                        return n[y](i) ? function(t, e) {
                            for (var i = 0, n = t.length; i < n; i++)
                                if (t[i] === e) return t.push(t.splice(i, 1)[0])
                        }(r, i) : (1e3 <= r.length && delete n[r.shift()], r.push(i), n[i] = s.apply(o, e)), a ? a(n[i]) : n[i]
                    }
                }

                function r(t) {
                    return t % 360 * k / 180
                }

                function h(t) {
                    return t.node.ownerSVGElement && f(t.node.ownerSVGElement) || m.select("svg")
                }

                function s(t) {
                    c(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
                    for (var e = 0, i = 0, n = this.node; this[e];) delete this[e++];
                    for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach(function(t) {
                        n.appendChild(t.node)
                    }) : n.appendChild(t[e].node);
                    var r = n.childNodes;
                    for (e = 0; e < r.length; e++) this[i++] = f(r[e]);
                    return this
                }

                function l(t) {
                    if (t.snap in z) return z[t.snap];
                    var e;
                    try {
                        e = t.ownerSVGElement
                    } catch (t) {}
                    this.node = t, e && (this.paper = new d(e)), this.type = t.tagName || t.nodeName;
                    var i = this.id = R(this);
                    if (this.anims = {}, this._ = {
                            transform: []
                        }, t.snap = i, "g" == (z[i] = this).type && (this.add = s), this.type in {
                            g: 1,
                            mask: 1,
                            pattern: 1,
                            symbol: 1
                        })
                        for (var n in d.prototype) d.prototype[y](n) && (this[n] = d.prototype[n])
                }

                function o(t) {
                    this.node = t
                }

                function p(t, e) {
                    var i = u(t);
                    return e.appendChild(i), f(i)
                }

                function d(t, e) {
                    var i, n, r, s = d.prototype;
                    if (t && t.tagName && "svg" == t.tagName.toLowerCase()) {
                        if (t.snap in z) return z[t.snap];
                        var o = t.ownerDocument;
                        for (var a in i = new l(t), n = t.getElementsByTagName("desc")[0], r = t.getElementsByTagName("defs")[0], n || ((n = u("desc")).appendChild(o.createTextNode("Created with Snap")), i.node.appendChild(n)), r || (r = u("defs"), i.node.appendChild(r)), i.defs = r, s) s[y](a) && (i[a] = s[a]);
                        i.paper = i.root = i
                    } else u((i = p("svg", v.doc.body)).node, {
                        height: e,
                        version: 1.1,
                        width: t,
                        xmlns: L
                    });
                    return i
                }

                function f(t) {
                    return t ? t instanceof l || t instanceof o ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new d(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new d(t.contentDocument.getElementsByTagName("svg")[0]) : new l(t) : t
                }
                m.version = "0.5.1", m.toString = function() {
                    return "Snap v" + this.version
                }, m._ = {};
                var v = {
                    win: t.window,
                    doc: t.window.document
                };
                m._.glob = v;
                var i, a, y = "hasOwnProperty",
                    _ = String,
                    x = parseFloat,
                    b = parseInt,
                    w = Math,
                    T = w.max,
                    C = w.min,
                    S = w.abs,
                    k = (w.pow, w.PI),
                    A = (w.round, ""),
                    n = Object.prototype.toString,
                    E = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                    P = (m._.separator = /[,\s]+/, /[\s]*,[\s]*/),
                    D = {
                        hs: 1,
                        rg: 1
                    },
                    O = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                    F = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
                    M = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,
                    N = 0,
                    $ = "S" + (+new Date).toString(36),
                    R = function(t) {
                        return (t && t.type ? t.type : A) + $ + (N++).toString(36)
                    },
                    j = "http://www.w3.org/1999/xlink",
                    L = "http://www.w3.org/2000/svg",
                    z = {};
                m.url = function(t) {
                    return "url('#" + t + "')"
                }, m._.$ = u, m._.id = R, m.format = (i = /\{([^\}]+)\}/g, a = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, function(t, r) {
                    return _(t).replace(i, function(t, e) {
                        return i = t, s = n = r, e.replace(a, function(t, e, i, n, r) {
                            e = e || n, s && (e in s && (s = s[e]), "function" == typeof s && r && (s = s()))
                        }), s = (null == s || s == n ? i : s) + "";
                        var i, n, s
                    })
                }), m._.clone = function t(e) {
                    if ("function" == typeof e || Object(e) !== e) return e;
                    var i = new e.constructor;
                    for (var n in e) e[y](n) && (i[n] = t(e[n]));
                    return i
                }, m._.cacher = e, m.rad = r, m.deg = function(t) {
                    return 180 * t / k % 360
                }, m.sin = function(t) {
                    return w.sin(m.rad(t))
                }, m.tan = function(t) {
                    return w.tan(m.rad(t))
                }, m.cos = function(t) {
                    return w.cos(m.rad(t))
                }, m.asin = function(t) {
                    return m.deg(w.asin(t))
                }, m.acos = function(t) {
                    return m.deg(w.acos(t))
                }, m.atan = function(t) {
                    return m.deg(w.atan(t))
                }, m.atan2 = function(t) {
                    return m.deg(w.atan2(t))
                }, m.angle = function t(e, i, n, r, s, o) {
                    if (null == s) {
                        var a = e - n,
                            l = i - r;
                        return a || l ? (180 + 180 * w.atan2(-l, -a) / k + 360) % 360 : 0
                    }
                    return t(e, i, s, o) - t(n, r, s, o)
                }, m.len = function(t, e, i, n) {
                    return Math.sqrt(m.len2(t, e, i, n))
                }, m.len2 = function(t, e, i, n) {
                    return (t - i) * (t - i) + (e - n) * (e - n)
                }, m.closestPoint = function(t, n, r) {
                    function e(t) {
                        var e = t.x - n,
                            i = t.y - r;
                        return e * e + i * i
                    }
                    for (var i, s, o, a, l = t.node, u = l.getTotalLength(), c = u / l.pathSegList.numberOfItems * .125, h = 1 / 0, p = 0; p <= u; p += c)(a = e(o = l.getPointAtLength(p))) < h && (i = o, s = p, h = a);
                    for (c *= .5; .5 < c;) {
                        var d, f, g, m, v, y;
                        0 <= (g = s - c) && (v = e(d = l.getPointAtLength(g))) < h ? (i = d, s = g, h = v) : (m = s + c) <= u && (y = e(f = l.getPointAtLength(m))) < h ? (i = f, s = m, h = y) : c *= .5
                    }
                    return {
                        x: i.x,
                        y: i.y,
                        length: s,
                        distance: Math.sqrt(h)
                    }
                }, m.is = c, m.snapTo = function(t, e, i) {
                    if (i = c(i, "finite") ? i : 10, c(t, "array")) {
                        for (var n = t.length; n--;)
                            if (S(t[n] - e) <= i) return t[n]
                    } else {
                        var r = e % (t = +t);
                        if (r < i) return e - r;
                        if (t - i < r) return e - r + t
                    }
                    return e
                }, m.getRGB = e(function(t) {
                    if (!t || (t = _(t)).indexOf("-") + 1) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: H
                    };
                    if ("none" == t) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        toString: H
                    };
                    if (!(D[y](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = B(t)), !t) return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: H
                    };
                    var e, i, n, r, s, o, a = t.match(E);
                    return a ? (a[2] && (n = b(a[2].substring(5), 16), i = b(a[2].substring(3, 5), 16), e = b(a[2].substring(1, 3), 16)), a[3] && (n = b((s = a[3].charAt(3)) + s, 16), i = b((s = a[3].charAt(2)) + s, 16), e = b((s = a[3].charAt(1)) + s, 16)), a[4] && (o = a[4].split(P), e = x(o[0]), "%" == o[0].slice(-1) && (e *= 2.55), i = x(o[1]), "%" == o[1].slice(-1) && (i *= 2.55), n = x(o[2]), "%" == o[2].slice(-1) && (n *= 2.55), "rgba" == a[1].toLowerCase().slice(0, 4) && (r = x(o[3])), o[3] && "%" == o[3].slice(-1) && (r /= 100)), a[5] ? (o = a[5].split(P), e = x(o[0]), "%" == o[0].slice(-1) && (e /= 100), i = x(o[1]), "%" == o[1].slice(-1) && (i /= 100), n = x(o[2]), "%" == o[2].slice(-1) && (n /= 100), ("deg" == o[0].slice(-3) || "°" == o[0].slice(-1)) && (e /= 360), "hsba" == a[1].toLowerCase().slice(0, 4) && (r = x(o[3])), o[3] && "%" == o[3].slice(-1) && (r /= 100), m.hsb2rgb(e, i, n, r)) : a[6] ? (o = a[6].split(P), e = x(o[0]), "%" == o[0].slice(-1) && (e /= 100), i = x(o[1]), "%" == o[1].slice(-1) && (i /= 100), n = x(o[2]), "%" == o[2].slice(-1) && (n /= 100), ("deg" == o[0].slice(-3) || "°" == o[0].slice(-1)) && (e /= 360), "hsla" == a[1].toLowerCase().slice(0, 4) && (r = x(o[3])), o[3] && "%" == o[3].slice(-1) && (r /= 100), m.hsl2rgb(e, i, n, r)) : (e = C(w.round(e), 255), i = C(w.round(i), 255), n = C(w.round(n), 255), r = C(T(r, 0), 1), (a = {
                        r: e,
                        g: i,
                        b: n,
                        toString: H
                    }).hex = "#" + (16777216 | n | i << 8 | e << 16).toString(16).slice(1), a.opacity = c(r, "finite") ? r : 1, a)) : {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: H
                    }
                }, m), m.hsb = e(function(t, e, i) {
                    return m.hsb2rgb(t, e, i).hex
                }), m.hsl = e(function(t, e, i) {
                    return m.hsl2rgb(t, e, i).hex
                }), m.rgb = e(function(t, e, i, n) {
                    if (c(n, "finite")) {
                        var r = w.round;
                        return "rgba(" + [r(t), r(e), r(i), +n.toFixed(2)] + ")"
                    }
                    return "#" + (16777216 | i | e << 8 | t << 16).toString(16).slice(1)
                });
                var B = function(t) {
                        var i = v.doc.getElementsByTagName("head")[0] || v.doc.getElementsByTagName("svg")[0],
                            n = "rgb(255, 0, 0)";
                        return (B = e(function(t) {
                            if ("red" == t.toLowerCase()) return n;
                            i.style.color = n, i.style.color = t;
                            var e = v.doc.defaultView.getComputedStyle(i, A).getPropertyValue("color");
                            return e == n ? null : e
                        }))(t)
                    },
                    q = function() {
                        return "hsb(" + [this.h, this.s, this.b] + ")"
                    },
                    I = function() {
                        return "hsl(" + [this.h, this.s, this.l] + ")"
                    },
                    H = function() {
                        return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                    },
                    W = function(t, e, i) {
                        if (null == e && c(t, "object") && "r" in t && "g" in t && "b" in t && (i = t.b, e = t.g, t = t.r), null == e && c(t, string)) {
                            var n = m.getRGB(t);
                            t = n.r, e = n.g, i = n.b
                        }
                        return (1 < t || 1 < e || 1 < i) && (t /= 255, e /= 255, i /= 255), [t, e, i]
                    },
                    X = function(t, e, i, n) {
                        var r = {
                            r: t = w.round(255 * t),
                            g: e = w.round(255 * e),
                            b: i = w.round(255 * i),
                            opacity: c(n, "finite") ? n : 1,
                            hex: m.rgb(t, e, i),
                            toString: H
                        };
                        return c(n, "finite") && (r.opacity = n), r
                    };
                m.color = function(t) {
                    var e;
                    return c(t, "object") && "h" in t && "s" in t && "b" in t ? (e = m.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : c(t, "object") && "h" in t && "s" in t && "l" in t ? (e = m.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (c(t, "string") && (t = m.getRGB(t)), c(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = m.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = m.rgb2hsb(t), t.v = e.b) : ((t = {
                        hex: "none"
                    }).r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = H, t
                }, m.hsb2rgb = function(t, e, i, n) {
                    var r, s, o, a, l;
                    return c(t, "object") && "h" in t && "s" in t && "b" in t && (i = t.b, e = t.s, n = t.o, t = t.h), a = (l = i * e) * (1 - S((t = (t *= 360) % 360 / 60) % 2 - 1)), r = s = o = i - l, X(r += [l, a, 0, 0, a, l][t = ~~t], s += [a, l, l, a, 0, 0][t], o += [0, 0, a, l, l, a][t], n)
                }, m.hsl2rgb = function(t, e, i, n) {
                    var r, s, o, a, l;
                    return c(t, "object") && "h" in t && "s" in t && "l" in t && (i = t.l, e = t.s, t = t.h), (1 < t || 1 < e || 1 < i) && (t /= 360, e /= 100, i /= 100), a = (l = 2 * e * (i < .5 ? i : 1 - i)) * (1 - S((t = (t *= 360) % 360 / 60) % 2 - 1)), r = s = o = i - l / 2, X(r += [l, a, 0, 0, a, l][t = ~~t], s += [a, l, l, a, 0, 0][t], o += [0, 0, a, l, l, a][t], n)
                }, m.rgb2hsb = function(t, e, i) {
                    var n, r;
                    return t = (i = W(t, e, i))[0], e = i[1], i = i[2], {
                        h: ((0 == (r = (n = T(t, e, i)) - C(t, e, i)) ? null : n == t ? (e - i) / r : n == e ? (i - t) / r + 2 : (t - e) / r + 4) + 360) % 6 * 60 / 360,
                        s: 0 == r ? 0 : r / n,
                        b: n,
                        toString: q
                    }
                }, m.rgb2hsl = function(t, e, i) {
                    var n, r, s, o;
                    return t = (i = W(t, e, i))[0], e = i[1], i = i[2], n = ((r = T(t, e, i)) + (s = C(t, e, i))) / 2, {
                        h: ((0 == (o = r - s) ? null : r == t ? (e - i) / o : r == e ? (i - t) / o + 2 : (t - e) / o + 4) + 360) % 6 * 60 / 360,
                        s: 0 == o ? 0 : n < .5 ? o / (2 * n) : o / (2 - 2 * n),
                        l: n,
                        toString: I
                    }
                }, m.parsePathString = function(t) {
                    if (!t) return null;
                    var e = m.path(t);
                    if (e.arr) return m.path.clone(e.arr);
                    var s = {
                            a: 7,
                            c: 6,
                            o: 2,
                            h: 1,
                            l: 2,
                            m: 2,
                            r: 4,
                            q: 4,
                            s: 4,
                            t: 2,
                            v: 1,
                            u: 3,
                            z: 0
                        },
                        o = [];
                    return c(t, "array") && c(t[0], "array") && (o = m.path.clone(t)), o.length || _(t).replace(O, function(t, e, i) {
                        var n = [],
                            r = e.toLowerCase();
                        if (i.replace(M, function(t, e) {
                                e && n.push(+e)
                            }), "m" == r && 2 < n.length && (o.push([e].concat(n.splice(0, 2))), r = "l", e = "m" == e ? "l" : "L"), "o" == r && 1 == n.length && o.push([e, n[0]]), "r" == r) o.push([e].concat(n));
                        else
                            for (; n.length >= s[r] && (o.push([e].concat(n.splice(0, s[r]))), s[r]););
                    }), o.toString = m.path.toString, e.arr = m.path.clone(o), o
                };
                var U = m.parseTransformString = function(t) {
                    if (!t) return null;
                    var r = [];
                    return c(t, "array") && c(t[0], "array") && (r = m.path.clone(t)), r.length || _(t).replace(F, function(t, e, i) {
                        var n = [];
                        e.toLowerCase(), i.replace(M, function(t, e) {
                            e && n.push(+e)
                        }), r.push([e].concat(n))
                    }), r.toString = m.path.toString, r
                };
                m._.svgTransform2string = function(t) {
                    var n = [];
                    return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(t, e, i) {
                        return i = i.split(/\s*,\s*|\s+/), "rotate" == e && 1 == i.length && i.push(0, 0), "scale" == e && (2 < i.length ? i = i.slice(0, 2) : 2 == i.length && i.push(0, 0), 1 == i.length && i.push(i[0], 0, 0)), "skewX" == e ? n.push(["m", 1, 0, w.tan(r(i[0])), 1, 0, 0]) : "skewY" == e ? n.push(["m", 1, w.tan(r(i[0])), 0, 1, 0, 0]) : n.push([e.charAt(0)].concat(i)), t
                    }), n
                }, m._.rgTransform = /^[a-z][\s]*-?\.?\d/i, m._.transform2matrix = function(t, e) {
                    var i = U(t),
                        n = new m.Matrix;
                    if (i)
                        for (var r = 0, s = i.length; r < s; r++) {
                            var o, a, l, u, c, h = i[r],
                                p = h.length,
                                d = _(h[0]).toLowerCase(),
                                f = h[0] != d,
                                g = f ? n.invert() : 0;
                            "t" == d && 2 == p ? n.translate(h[1], 0) : "t" == d && 3 == p ? f ? (o = g.x(0, 0), a = g.y(0, 0), l = g.x(h[1], h[2]), u = g.y(h[1], h[2]), n.translate(l - o, u - a)) : n.translate(h[1], h[2]) : "r" == d ? 2 == p ? (c = c || e, n.rotate(h[1], c.x + c.width / 2, c.y + c.height / 2)) : 4 == p && (f ? (l = g.x(h[2], h[3]), u = g.y(h[2], h[3]), n.rotate(h[1], l, u)) : n.rotate(h[1], h[2], h[3])) : "s" == d ? 2 == p || 3 == p ? (c = c || e, n.scale(h[1], h[p - 1], c.x + c.width / 2, c.y + c.height / 2)) : 4 == p ? f ? (l = g.x(h[2], h[3]), u = g.y(h[2], h[3]), n.scale(h[1], h[1], l, u)) : n.scale(h[1], h[1], h[2], h[3]) : 5 == p && (f ? (l = g.x(h[3], h[4]), u = g.y(h[3], h[4]), n.scale(h[1], h[2], l, u)) : n.scale(h[1], h[2], h[3], h[4])) : "m" == d && 7 == p && n.add(h[1], h[2], h[3], h[4], h[5], h[6])
                        }
                    return n
                }, m._unit2px = function(i, n, r) {
                    function t(t) {
                        if (null == t) return A;
                        if (t == +t) return t;
                        u(l, {
                            width: t
                        });
                        try {
                            return l.getBBox().width
                        } catch (t) {
                            return 0
                        }
                    }

                    function e(t) {
                        if (null == t) return A;
                        if (t == +t) return t;
                        u(l, {
                            height: t
                        });
                        try {
                            return l.getBBox().height
                        } catch (t) {
                            return 0
                        }
                    }

                    function s(t, e) {
                        null == n ? a[t] = e(i.attr(t) || 0) : t == n && (a = e(null == r ? i.attr(t) || 0 : r))
                    }
                    var o = h(i).node,
                        a = {},
                        l = o.querySelector(".svg---mgr");
                    switch (l || (u(l = u("rect"), {
                        x: -9e9,
                        y: -9e9,
                        width: 10,
                        height: 10,
                        class: "svg---mgr",
                        fill: "none"
                    }), o.appendChild(l)), i.type) {
                        case "rect":
                            s("rx", t), s("ry", e);
                        case "image":
                            s("width", t), s("height", e);
                        case "text":
                            s("x", t), s("y", e);
                            break;
                        case "circle":
                            s("cx", t), s("cy", e), s("r", t);
                            break;
                        case "ellipse":
                            s("cx", t), s("cy", e), s("rx", t), s("ry", e);
                            break;
                        case "line":
                            s("x1", t), s("x2", t), s("y1", e), s("y2", e);
                            break;
                        case "marker":
                            s("refX", t), s("markerWidth", t), s("refY", e), s("markerHeight", e);
                            break;
                        case "radialGradient":
                            s("fx", t), s("fy", e);
                            break;
                        case "tspan":
                            s("dx", t), s("dy", e);
                            break;
                        default:
                            s(n, t)
                    }
                    return o.removeChild(l), a
                }, v.doc.contains || v.doc.compareDocumentPosition, m._.getSomeDefs = function(t) {
                    var e = t.node.ownerSVGElement && f(t.node.ownerSVGElement) || t.node.parentNode && f(t.node.parentNode) || m.select("svg") || m(0, 0),
                        i = e.select("defs"),
                        n = null != i && i.node;
                    return n || (n = p("defs", e.node).node), n
                }, m._.getSomeSVG = h, m.select = function(t) {
                    return t = _(t).replace(/([^\\]):/g, "$1\\:"), f(v.doc.querySelector(t))
                }, m.selectAll = function(t) {
                    for (var e = v.doc.querySelectorAll(t), i = (m.set || Array)(), n = 0; n < e.length; n++) i.push(f(e[n]));
                    return i
                }, setInterval(function() {
                    for (var t in z)
                        if (z[y](t)) {
                            var e = z[t],
                                i = e.node;
                            ("svg" != e.type && !i.ownerSVGElement || "svg" == e.type && (!i.parentNode || "ownerSVGElement" in i.parentNode && !i.ownerSVGElement)) && delete z[t]
                        }
                }, 1e4), l.prototype.attr = function(t, e) {
                    var i = this.node;
                    if (!t) {
                        if (1 != i.nodeType) return {
                            text: i.nodeValue
                        };
                        for (var n = i.attributes, r = {}, s = 0, o = n.length; s < o; s++) r[n[s].nodeName] = n[s].nodeValue;
                        return r
                    }
                    if (c(t, "string")) {
                        if (!(1 < arguments.length)) return Y("snap.util.getattr." + t, this).firstDefined();
                        var a = {};
                        a[t] = e, t = a
                    }
                    for (var l in t) t[y](l) && Y("snap.util.attr." + l, this, t[l]);
                    return this
                }, m.parse = function(t) {
                    var e = v.doc.createDocumentFragment(),
                        i = !0,
                        n = v.doc.createElement("div");
                    if ((t = _(t)).match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", i = !1), n.innerHTML = t, t = n.getElementsByTagName("svg")[0])
                        if (i) e = t;
                        else
                            for (; t.firstChild;) e.appendChild(t.firstChild);
                    return new o(e)
                }, m.fragment = function() {
                    for (var t = Array.prototype.slice.call(arguments, 0), e = v.doc.createDocumentFragment(), i = 0, n = t.length; i < n; i++) {
                        var r = t[i];
                        r.node && r.node.nodeType && e.appendChild(r.node), r.nodeType && e.appendChild(r), "string" == typeof r && e.appendChild(m.parse(r).node)
                    }
                    return new o(e)
                }, m._.make = p, m._.wrap = f, d.prototype.el = function(t, e) {
                    var i = p(t, this.node);
                    return e && i.attr(e), i
                }, l.prototype.children = function() {
                    for (var t = [], e = this.node.childNodes, i = 0, n = e.length; i < n; i++) t[i] = m(e[i]);
                    return t
                }, l.prototype.toJSON = function() {
                    var t = [];
                    return function t(e, i) {
                        for (var n = 0, r = e.length; n < r; n++) {
                            var s = {
                                    type: e[n].type,
                                    attr: e[n].attr()
                                },
                                o = e[n].children();
                            i.push(s), o.length && t(o, s.childNodes = [])
                        }
                    }([this], t), t[0]
                }, Y.on("snap.util.getattr", function() {
                    var t = Y.nt(),
                        e = (t = t.substring(t.lastIndexOf(".") + 1)).replace(/[A-Z]/g, function(t) {
                            return "-" + t.toLowerCase()
                        });
                    return V[y](e) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(e) : u(this.node, t)
                });
                var V = {
                    "alignment-baseline": 0,
                    "baseline-shift": 0,
                    clip: 0,
                    "clip-path": 0,
                    "clip-rule": 0,
                    color: 0,
                    "color-interpolation": 0,
                    "color-interpolation-filters": 0,
                    "color-profile": 0,
                    "color-rendering": 0,
                    cursor: 0,
                    direction: 0,
                    display: 0,
                    "dominant-baseline": 0,
                    "enable-background": 0,
                    fill: 0,
                    "fill-opacity": 0,
                    "fill-rule": 0,
                    filter: 0,
                    "flood-color": 0,
                    "flood-opacity": 0,
                    font: 0,
                    "font-family": 0,
                    "font-size": 0,
                    "font-size-adjust": 0,
                    "font-stretch": 0,
                    "font-style": 0,
                    "font-variant": 0,
                    "font-weight": 0,
                    "glyph-orientation-horizontal": 0,
                    "glyph-orientation-vertical": 0,
                    "image-rendering": 0,
                    kerning: 0,
                    "letter-spacing": 0,
                    "lighting-color": 0,
                    marker: 0,
                    "marker-end": 0,
                    "marker-mid": 0,
                    "marker-start": 0,
                    mask: 0,
                    opacity: 0,
                    overflow: 0,
                    "pointer-events": 0,
                    "shape-rendering": 0,
                    "stop-color": 0,
                    "stop-opacity": 0,
                    stroke: 0,
                    "stroke-dasharray": 0,
                    "stroke-dashoffset": 0,
                    "stroke-linecap": 0,
                    "stroke-linejoin": 0,
                    "stroke-miterlimit": 0,
                    "stroke-opacity": 0,
                    "stroke-width": 0,
                    "text-anchor": 0,
                    "text-decoration": 0,
                    "text-rendering": 0,
                    "unicode-bidi": 0,
                    visibility: 0,
                    "word-spacing": 0,
                    "writing-mode": 0
                };
                Y.on("snap.util.attr", function(t) {
                    var e = Y.nt(),
                        i = {};
                    i[e = e.substring(e.lastIndexOf(".") + 1)] = t;
                    var n = e.replace(/-(\w)/gi, function(t, e) {
                            return e.toUpperCase()
                        }),
                        r = e.replace(/[A-Z]/g, function(t) {
                            return "-" + t.toLowerCase()
                        });
                    V[y](r) ? this.node.style[n] = null == t ? A : t : u(this.node, i)
                }), m.ajax = function(t, e, i, n) {
                    var r = new XMLHttpRequest,
                        s = R();
                    if (r) {
                        if (c(e, "function")) n = i, i = e, e = null;
                        else if (c(e, "object")) {
                            var o = [];
                            for (var a in e) e.hasOwnProperty(a) && o.push(encodeURIComponent(a) + "=" + encodeURIComponent(e[a]));
                            e = o.join("&")
                        }
                        return r.open(e ? "POST" : "GET", t, !0), e && (r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), i && (Y.once("snap.ajax." + s + ".0", i), Y.once("snap.ajax." + s + ".200", i), Y.once("snap.ajax." + s + ".304", i)), r.onreadystatechange = function() {
                            4 == r.readyState && Y("snap.ajax." + s + "." + r.status, n, r)
                        }, 4 == r.readyState || r.send(e), r
                    }
                }, m.load = function(t, i, n) {
                    m.ajax(t, function(t) {
                        var e = m.parse(t.responseText);
                        n ? i.call(n, e) : i(e)
                    })
                };
                return m.getElementByPoint = function(t, e) {
                    var i, n, r, s, o, a, l, u = (this.canvas, v.doc.elementFromPoint(t, e));
                    if (v.win.opera && "svg" == u.tagName) {
                        var c = (n = (i = u).getBoundingClientRect(), r = i.ownerDocument, s = r.body, o = r.documentElement, a = o.clientTop || s.clientTop || 0, l = o.clientLeft || s.clientLeft || 0, {
                                y: n.top + (g.win.pageYOffset || o.scrollTop || s.scrollTop) - a,
                                x: n.left + (g.win.pageXOffset || o.scrollLeft || s.scrollLeft) - l
                            }),
                            h = u.createSVGRect();
                        h.x = t - c.x, h.y = e - c.y, h.width = h.height = 1;
                        var p = u.getIntersectionList(h, null);
                        p.length && (u = p[p.length - 1])
                    }
                    return u ? f(u) : null
                }, m.plugin = function(t) {
                    t(m, l, d, v, o)
                }, v.win.Snap = m
            }(v || this);
        return e.plugin(function(f, t, e, i, n) {
            function c(t, e) {
                if (null == e) {
                    var i = !0;
                    if (!(e = "linearGradient" == t.type || "radialGradient" == t.type ? t.node.getAttribute("gradientTransform") : "pattern" == t.type ? t.node.getAttribute("patternTransform") : t.node.getAttribute("transform"))) return new f.Matrix;
                    e = f._.svgTransform2string(e)
                } else e = f._.rgTransform.test(e) ? h(e).replace(/\.{3}|\u2026/g, t._.transform || "") : f._.svgTransform2string(e), a(e, "array") && (e = f.path ? f.path.toString.call(e) : h(e)), t._.transform = e;
                var n = f._.transform2matrix(e, t.getBBox(1));
                return i ? n : void(t.matrix = n)
            }

            function r(s) {
                return function() {
                    var t = s ? "<" + this.type : "",
                        e = this.node.attributes,
                        i = this.node.childNodes;
                    if (s)
                        for (var n = 0, r = e.length; n < r; n++) t += " " + e[n].name + '="' + e[n].value.replace(/"/g, '\\"') + '"';
                    if (i.length) {
                        for (s && (t += ">"), n = 0, r = i.length; n < r; n++) 3 == i[n].nodeType ? t += i[n].nodeValue : 1 == i[n].nodeType && (t += p(i[n]).toString());
                        s && (t += "</" + this.type + ">")
                    } else s && (t += "/>");
                    return t
                }
            }
            var s = t.prototype,
                a = f.is,
                h = String,
                o = f._unit2px,
                g = f._.$,
                l = f._.make,
                u = f._.getSomeDefs,
                p = f._.wrap;
            s.getBBox = function(t) {
                if ("tspan" == this.type) return f._.box(this.node.getClientRects().item(0));
                if (!f.Matrix || !f.path) return this.node.getBBox();
                var e = this,
                    i = new f.Matrix;
                if (e.removed) return f._.box();
                for (;
                    "use" == e.type;)
                    if (t || (i = i.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original) e = e.original;
                    else {
                        var n = e.attr("xlink:href");
                        e = e.original = e.node.ownerDocument.getElementById(n.substring(n.indexOf("#") + 1))
                    } var r = e._,
                    s = f.path.get[e.type] || f.path.get.deflt;
                try {
                    return t ? (r.bboxwt = s ? f.path.getBBox(e.realPath = s(e)) : f._.box(e.node.getBBox()), f._.box(r.bboxwt)) : (e.realPath = s(e), e.matrix = e.transform().localMatrix, r.bbox = f.path.getBBox(f.path.map(e.realPath, i.add(e.matrix))), f._.box(r.bbox))
                } catch (t) {
                    return f._.box()
                }
            };
            var d = function() {
                return this.string
            };
            s.transform = function(t) {
                var e = this._;
                if (null == t) {
                    for (var i, n = this, r = new f.Matrix(this.node.getCTM()), s = c(this), o = [s], a = new f.Matrix, l = s.toTransformString(), u = h(s) == h(this.matrix) ? h(e.transform) : l;
                        "svg" != n.type && (n = n.parent());) o.push(c(n));
                    for (i = o.length; i--;) a.add(o[i]);
                    return {
                        string: u,
                        globalMatrix: r,
                        totalMatrix: a,
                        localMatrix: s,
                        diffMatrix: r.clone().add(s.invert()),
                        global: r.toTransformString(),
                        total: a.toTransformString(),
                        local: l,
                        toString: d
                    }
                }
                return t instanceof f.Matrix ? (this.matrix = t, this._.transform = t.toTransformString()) : c(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? g(this.node, {
                    gradientTransform: this.matrix
                }) : "pattern" == this.type ? g(this.node, {
                    patternTransform: this.matrix
                }) : g(this.node, {
                    transform: this.matrix
                })), this
            }, s.parent = function() {
                return p(this.node.parentNode)
            }, s.append = s.add = function(t) {
                if (t) {
                    if ("set" == t.type) {
                        var e = this;
                        return t.forEach(function(t) {
                            e.add(t)
                        }), this
                    }
                    t = p(t), this.node.appendChild(t.node), t.paper = this.paper
                }
                return this
            }, s.appendTo = function(t) {
                return t && (t = p(t)).append(this), this
            }, s.prepend = function(t) {
                if (t) {
                    if ("set" == t.type) {
                        var e, i = this;
                        return t.forEach(function(t) {
                            e ? e.after(t) : i.prepend(t), e = t
                        }), this
                    }
                    var n = (t = p(t)).parent();
                    this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), n && n.add()
                }
                return this
            }, s.prependTo = function(t) {
                return (t = p(t)).prepend(this), this
            }, s.before = function(t) {
                if ("set" == t.type) {
                    var i = this;
                    return t.forEach(function(t) {
                        var e = t.parent();
                        i.node.parentNode.insertBefore(t.node, i.node), e && e.add()
                    }), this.parent().add(), this
                }
                var e = (t = p(t)).parent();
                return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
            }, s.after = function(t) {
                var e = (t = p(t)).parent();
                return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
            }, s.insertBefore = function(t) {
                t = p(t);
                var e = this.parent();
                return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
            }, s.insertAfter = function(t) {
                t = p(t);
                var e = this.parent();
                return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
            }, s.remove = function() {
                var t = this.parent();
                return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
            }, s.select = function(t) {
                return p(this.node.querySelector(t))
            }, s.selectAll = function(t) {
                for (var e = this.node.querySelectorAll(t), i = (f.set || Array)(), n = 0; n < e.length; n++) i.push(p(e[n]));
                return i
            }, s.asPX = function(t, e) {
                return null == e && (e = this.attr(t)), +o(this, t, e)
            }, s.use = function() {
                var t, e = this.node.id;
                return e || (e = this.id, g(this.node, {
                    id: e
                })), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? l(this.type, this.node.parentNode) : l("use", this.node.parentNode), g(t.node, {
                    "xlink:href": "#" + e
                }), t.original = this, t
            }, s.clone = function() {
                var t = p(this.node.cloneNode(!0));
                return g(t.node, "id") && g(t.node, {
                        id: t.id
                    }),
                    function(t) {
                        function e(i, n) {
                            var t = g(i.node, n);
                            (t = (t = t && t.match(s)) && t[2]) && "#" == t.charAt() && (t = t.substring(1)) && (a[t] = (a[t] || []).concat(function(t) {
                                var e = {};
                                e[n] = f.url(t), g(i.node, e)
                            }))
                        }

                        function i(e) {
                            var t = g(e.node, "xlink:href");
                            t && "#" == t.charAt() && (t = t.substring(1)) && (a[t] = (a[t] || []).concat(function(t) {
                                e.attr("xlink:href", "#" + t)
                            }))
                        }
                        for (var n, r = t.selectAll("*"), s = /^\s*url\(("|'|)(.*)\1\)\s*$/, o = [], a = {}, l = 0, u = r.length; l < u; l++) {
                            e(n = r[l], "fill"), e(n, "stroke"), e(n, "filter"), e(n, "mask"), e(n, "clip-path"), i(n);
                            var c = g(n.node, "id");
                            c && (g(n.node, {
                                id: n.id
                            }), o.push({
                                old: c,
                                id: n.id
                            }))
                        }
                        for (l = 0, u = o.length; l < u; l++) {
                            var h = a[o[l].old];
                            if (h)
                                for (var p = 0, d = h.length; p < d; p++) h[p](o[l].id)
                        }
                    }(t), t.insertAfter(this), t
            }, s.toDefs = function() {
                return u(this).appendChild(this.node), this
            }, s.pattern = s.toPattern = function(t, e, i, n) {
                var r = l("pattern", u(this));
                return null == t && (t = this.getBBox()), a(t, "object") && "x" in t && (e = t.y, i = t.width, n = t.height, t = t.x), g(r.node, {
                    x: t,
                    y: e,
                    width: i,
                    height: n,
                    patternUnits: "userSpaceOnUse",
                    id: r.id,
                    viewBox: [t, e, i, n].join(" ")
                }), r.node.appendChild(this.node), r
            }, s.marker = function(t, e, i, n, r, s) {
                var o = l("marker", u(this));
                return null == t && (t = this.getBBox()), a(t, "object") && "x" in t && (e = t.y, i = t.width, n = t.height, r = t.refX || t.cx, s = t.refY || t.cy, t = t.x), g(o.node, {
                    viewBox: [t, e, i, n].join(" "),
                    markerWidth: i,
                    markerHeight: n,
                    orient: "auto",
                    refX: r || 0,
                    refY: s || 0,
                    id: o.id
                }), o.node.appendChild(this.node), o
            };
            var m = {};
            s.data = function(t, e) {
                var i = m[this.id] = m[this.id] || {};
                if (0 == arguments.length) return Y("snap.data.get." + this.id, this, i, null), i;
                if (1 == arguments.length) {
                    if (f.is(t, "object")) {
                        for (var n in t) t.hasOwnProperty(n) && this.data(n, t[n]);
                        return this
                    }
                    return Y("snap.data.get." + this.id, this, i[t], t), i[t]
                }
                return i[t] = e, Y("snap.data.set." + this.id, this, e, t), this
            }, s.removeData = function(t) {
                return null == t ? m[this.id] = {} : m[this.id] && delete m[this.id][t], this
            }, s.outerSVG = s.toString = r(1), s.innerSVG = r(), s.toDataURL = function() {
                if (v && v.btoa) {
                    var t = this.getBBox(),
                        e = f.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                            x: +t.x.toFixed(3),
                            y: +t.y.toFixed(3),
                            width: +t.width.toFixed(3),
                            height: +t.height.toFixed(3),
                            contents: this.outerSVG()
                        });
                    return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(e)))
                }
            }, n.prototype.select = s.select, n.prototype.selectAll = s.selectAll
        }), e.plugin(function(t, e, i, n, r) {
            function m(i, n, r) {
                return function(t) {
                    var e = t.slice(i, n);
                    return 1 == e.length && (e = e[0]), r ? r(e) : e
                }
            }
            var s = e.prototype,
                v = t.is,
                y = String,
                _ = "hasOwnProperty",
                x = function(t, e, i, n) {
                    "function" != typeof i || i.length || (n = i, i = C.linear), this.attr = t, this.dur = e, i && (this.easing = i), n && (this.callback = n)
                };
            t._.Animation = x, t.animation = function(t, e, i, n) {
                return new x(t, e, i, n)
            }, s.inAnim = function() {
                var t = [];
                for (var e in this.anims) this.anims[_](e) && function(e) {
                    t.push({
                        anim: new x(e._attrs, e.dur, e.easing, e._callback),
                        mina: e,
                        curStatus: e.status(),
                        status: function(t) {
                            return e.status(t)
                        },
                        stop: function() {
                            e.stop()
                        }
                    })
                }(this.anims[e]);
                return t
            }, t.animate = function(t, e, i, n, r, s) {
                "function" != typeof r || r.length || (s = r, r = C.linear);
                var o = C.time(),
                    a = C(t, e, o, o + n, C.time, i, r);
                return s && Y.once("mina.finish." + a.id, s), a
            }, s.stop = function() {
                for (var t = this.inAnim(), e = 0, i = t.length; e < i; e++) t[e].stop();
                return this
            }, s.animate = function(t, e, i, n) {
                "function" != typeof i || i.length || (n = i, i = C.linear), t instanceof x && (n = t.callback, i = t.easing, e = t.dur, t = t.attr);
                var r, s, o, a, l = [],
                    u = [],
                    c = {},
                    h = this;
                for (var p in t)
                    if (t[_](p)) {
                        h.equal ? (r = (a = h.equal(p, y(t[p]))).from, s = a.to, o = a.f) : (r = +h.attr(p), s = +t[p]);
                        var d = v(r, "array") ? r.length : 1;
                        c[p] = m(l.length, l.length + d, o), l = l.concat(r), u = u.concat(s)
                    } var f = C.time(),
                    g = C(l, u, f, f + e, C.time, function(t) {
                        var e = {};
                        for (var i in c) c[_](i) && (e[i] = c[i](t));
                        h.attr(e)
                    }, i);
                return (h.anims[g.id] = g)._attrs = t, g._callback = n, Y("snap.animcreated." + h.id, g), Y.once("mina.finish." + g.id, function() {
                    Y.off("mina.*." + g.id), delete h.anims[g.id], n && n.call(h)
                }), Y.once("mina.stop." + g.id, function() {
                    Y.off("mina.*." + g.id), delete h.anims[g.id]
                }), h
            }
        }), e.plugin(function(o, t, e, i, n) {
            function u(t, e, i, n, r, s) {
                return null == e && "[object SVGMatrix]" == a.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(null != t ? (this.a = +t, this.b = +e, this.c = +i, this.d = +n, this.e = +r, this.f = +s) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
            }
            var a = Object.prototype.toString,
                l = String,
                c = Math;
            ! function(t) {
                function r(t) {
                    return t[0] * t[0] + t[1] * t[1]
                }

                function s(t) {
                    var e = c.sqrt(r(t));
                    t[0] && (t[0] /= e), t[1] && (t[1] /= e)
                }
                t.add = function(t, e, i, n, r, s) {
                    if (t && t instanceof u) return this.add(t.a, t.b, t.c, t.d, t.e, t.f);
                    var o = t * this.a + e * this.c,
                        a = t * this.b + e * this.d;
                    return this.e += r * this.a + s * this.c, this.f += r * this.b + s * this.d, this.c = i * this.a + n * this.c, this.d = i * this.b + n * this.d, this.a = o, this.b = a, this
                }, u.prototype.multLeft = function(t, e, i, n, r, s) {
                    if (t && t instanceof u) return this.multLeft(t.a, t.b, t.c, t.d, t.e, t.f);
                    var o = t * this.a + i * this.b,
                        a = t * this.c + i * this.d,
                        l = t * this.e + i * this.f + r;
                    return this.b = e * this.a + n * this.b, this.d = e * this.c + n * this.d, this.f = e * this.e + n * this.f + s, this.a = o, this.c = a, this.e = l, this
                }, t.invert = function() {
                    var t = this,
                        e = t.a * t.d - t.b * t.c;
                    return new u(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
                }, t.clone = function() {
                    return new u(this.a, this.b, this.c, this.d, this.e, this.f)
                }, t.translate = function(t, e) {
                    return this.e += t * this.a + e * this.c, this.f += t * this.b + e * this.d, this
                }, t.scale = function(t, e, i, n) {
                    return null == e && (e = t), (i || n) && this.translate(i, n), this.a *= t, this.b *= t, this.c *= e, this.d *= e, (i || n) && this.translate(-i, -n), this
                }, t.rotate = function(t, e, i) {
                    t = o.rad(t), e = e || 0, i = i || 0;
                    var n = +c.cos(t).toFixed(9),
                        r = +c.sin(t).toFixed(9);
                    return this.add(n, r, -r, n, e, i), this.add(1, 0, 0, 1, -e, -i)
                }, t.skewX = function(t) {
                    return this.skew(t, 0)
                }, t.skewY = function(t) {
                    return this.skew(0, t)
                }, t.skew = function(t, e) {
                    t = t || 0, e = e || 0, t = o.rad(t), e = o.rad(e);
                    var i = c.tan(t).toFixed(9),
                        n = c.tan(e).toFixed(9);
                    return this.add(1, n, i, 1, 0, 0)
                }, t.x = function(t, e) {
                    return t * this.a + e * this.c + this.e
                }, t.y = function(t, e) {
                    return t * this.b + e * this.d + this.f
                }, t.get = function(t) {
                    return +this[l.fromCharCode(97 + t)].toFixed(4)
                }, t.toString = function() {
                    return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
                }, t.offset = function() {
                    return [this.e.toFixed(4), this.f.toFixed(4)]
                }, t.determinant = function() {
                    return this.a * this.d - this.b * this.c
                }, t.split = function() {
                    var t = {};
                    t.dx = this.e, t.dy = this.f;
                    var e = [
                        [this.a, this.b],
                        [this.c, this.d]
                    ];
                    t.scalex = c.sqrt(r(e[0])), s(e[0]), t.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * t.shear, e[1][1] - e[0][1] * t.shear], t.scaley = c.sqrt(r(e[1])), s(e[1]), t.shear /= t.scaley, this.determinant() < 0 && (t.scalex = -t.scalex);
                    var i = e[0][1],
                        n = e[1][1];
                    return n < 0 ? (t.rotate = o.deg(c.acos(n)), i < 0 && (t.rotate = 360 - t.rotate)) : t.rotate = o.deg(c.asin(i)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
                }, t.toTransformString = function(t) {
                    var e = t || this.split();
                    return +e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : "") + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : "") + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : ""))
                }
            }(u.prototype), o.Matrix = u, o.matrix = function(t, e, i, n, r, s) {
                return new u(t, e, i, n, r, s)
            }
        }), e.plugin(function(s, o, t, r, a) {
            function e(r) {
                return function(t) {
                    if (Y.stop(), t instanceof a && 1 == t.node.childNodes.length && ("radialGradient" == t.node.firstChild.tagName || "linearGradient" == t.node.firstChild.tagName || "pattern" == t.node.firstChild.tagName) && (t = t.node.firstChild, p(this).appendChild(t), t = c(t)), t instanceof o)
                        if ("radialGradient" == t.type || "linearGradient" == t.type || "pattern" == t.type) {
                            t.node.id || f(t.node, {
                                id: t.id
                            });
                            var e = g(t.node.id)
                        } else e = t.attr(r);
                    else if ((e = s.color(t)).error) {
                        var i = s(p(this).ownerSVGElement).gradient(t);
                        i ? (i.node.id || f(i.node, {
                            id: i.id
                        }), e = g(i.node.id)) : e = t
                    } else e = m(e);
                    var n = {};
                    n[r] = e, f(this.node, n), this.node.style[r] = ""
                }
            }

            function i(t) {
                Y.stop(), t == +t && (t += "px"), this.node.style.fontSize = t
            }

            function n() {
                return Y.stop(), this.node.style.fontSize
            }
            var l, u = s._.make,
                c = s._.wrap,
                h = s.is,
                p = s._.getSomeDefs,
                d = /^url\((['"]?)([^)]+)\1\)$/,
                f = s._.$,
                g = s.url,
                m = String,
                v = s._.separator;
            s.deurl = function(t) {
                var e = String(t).match(d);
                return e ? e[2] : t
            }, Y.on("snap.util.attr.mask", function(t) {
                if (t instanceof o || t instanceof a) {
                    if (Y.stop(), t instanceof a && 1 == t.node.childNodes.length && (t = t.node.firstChild, p(this).appendChild(t), t = c(t)), "mask" == t.type) var e = t;
                    else(e = u("mask", p(this))).node.appendChild(t.node);
                    !e.node.id && f(e.node, {
                        id: e.id
                    }), f(this.node, {
                        mask: g(e.id)
                    })
                }
            }), l = function(t) {
                if (t instanceof o || t instanceof a) {
                    Y.stop();
                    for (var e, i = t.node; i;) {
                        if ("clipPath" === i.nodeName) {
                            e = new o(i);
                            break
                        }
                        if ("svg" === i.nodeName) {
                            e = void 0;
                            break
                        }
                        i = i.parentNode
                    }
                    e || ((e = u("clipPath", p(this))).node.appendChild(t.node), !e.node.id && f(e.node, {
                        id: e.id
                    })), f(this.node, {
                        "clip-path": g(e.node.id || e.id)
                    })
                }
            }, Y.on("snap.util.attr.clip", l), Y.on("snap.util.attr.clip-path", l), Y.on("snap.util.attr.clipPath", l), Y.on("snap.util.attr.fill", e("fill")), Y.on("snap.util.attr.stroke", e("stroke"));
            var y = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
            Y.on("snap.util.grad.parse", function(t) {
                    function e(t, e) {
                        for (var i = (e - a) / (t - l), n = l; n < t; n++) s[n].offset = +(+a + i * (n - l)).toFixed(2);
                        l = t, a = e
                    }
                    var i = (t = m(t)).match(y);
                    if (!i) return null;
                    var n = i[1],
                        r = i[2],
                        s = i[3];
                    1 == (r = r.split(/\s*,\s*/).map(function(t) {
                        return +t == t ? +t : t
                    })).length && 0 == r[0] && (r = []);
                    var o = (s = (s = s.split("-")).map(function(t) {
                            var e = {
                                color: (t = t.split(":"))[0]
                            };
                            return t[1] && (e.offset = parseFloat(t[1])), e
                        })).length,
                        a = 0,
                        l = 0;
                    o--;
                    for (var u = 0; u < o; u++) "offset" in s[u] && e(u, s[u].offset);
                    return s[o].offset = s[o].offset || 100, e(o, s[o].offset), {
                        type: n,
                        params: r,
                        stops: s
                    }
                }), Y.on("snap.util.attr.d", function(t) {
                    Y.stop(), h(t, "array") && h(t[0], "array") && (t = s.path.toString.call(t)), (t = m(t)).match(/[ruo]/i) && (t = s.path.toAbsolute(t)), f(this.node, {
                        d: t
                    })
                })(-1), Y.on("snap.util.attr.#text", function(t) {
                    Y.stop(), t = m(t);
                    for (var e = r.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                    this.node.appendChild(e)
                })(-1), Y.on("snap.util.attr.path", function(t) {
                    Y.stop(), this.attr({
                        d: t
                    })
                })(-1), Y.on("snap.util.attr.class", function(t) {
                    Y.stop(), this.node.className.baseVal = t
                })(-1), Y.on("snap.util.attr.viewBox", function(t) {
                    var e;
                    e = h(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : h(t, "array") ? t.join(" ") : t, f(this.node, {
                        viewBox: e
                    }), Y.stop()
                })(-1), Y.on("snap.util.attr.transform", function(t) {
                    this.transform(t), Y.stop()
                })(-1), Y.on("snap.util.attr.r", function(t) {
                    "rect" == this.type && (Y.stop(), f(this.node, {
                        rx: t,
                        ry: t
                    }))
                })(-1), Y.on("snap.util.attr.textpath", function(t) {
                    if (Y.stop(), "text" == this.type) {
                        var e, i, n;
                        if (!t && this.textPath) {
                            for (i = this.textPath; i.node.firstChild;) this.node.appendChild(i.node.firstChild);
                            return i.remove(), void delete this.textPath
                        }
                        if (h(t, "string")) {
                            var r = p(this),
                                s = c(r.parentNode).path(t);
                            r.appendChild(s.node), e = s.id, s.attr({
                                id: e
                            })
                        } else(t = c(t)) instanceof o && ((e = t.attr("id")) || (e = t.id, t.attr({
                            id: e
                        })));
                        if (e)
                            if (i = this.textPath, n = this.node, i) i.attr({
                                "xlink:href": "#" + e
                            });
                            else {
                                for (i = f("textPath", {
                                        "xlink:href": "#" + e
                                    }); n.firstChild;) i.appendChild(n.firstChild);
                                n.appendChild(i), this.textPath = c(i)
                            }
                    }
                })(-1), Y.on("snap.util.attr.text", function(t) {
                    if ("text" == this.type) {
                        for (var e = this.node, n = function(t) {
                                var e = f("tspan");
                                if (h(t, "array"))
                                    for (var i = 0; i < t.length; i++) e.appendChild(n(t[i]));
                                else e.appendChild(r.doc.createTextNode(t));
                                return e.normalize && e.normalize(), e
                            }; e.firstChild;) e.removeChild(e.firstChild);
                        for (var i = n(t); i.firstChild;) e.appendChild(i.firstChild)
                    }
                    Y.stop()
                })(-1), Y.on("snap.util.attr.fontSize", i)(-1), Y.on("snap.util.attr.font-size", i)(-1), Y.on("snap.util.getattr.transform", function() {
                    return Y.stop(), this.transform()
                })(-1), Y.on("snap.util.getattr.textpath", function() {
                    return Y.stop(), this.textPath
                })(-1),
                function() {
                    function t(e) {
                        return function() {
                            Y.stop();
                            var t = r.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + e);
                            return "none" == t ? t : s(r.doc.getElementById(t.match(d)[1]))
                        }
                    }

                    function e(n) {
                        return function(t) {
                            Y.stop();
                            var e = "marker" + n.charAt(0).toUpperCase() + n.substring(1);
                            if ("" != t && t) {
                                if ("marker" == t.type) {
                                    var i = t.node.id;
                                    return i || f(t.node, {
                                        id: t.id
                                    }), void(this.node.style[e] = g(i))
                                }
                            } else this.node.style[e] = "none"
                        }
                    }
                    Y.on("snap.util.getattr.marker-end", t("end"))(-1), Y.on("snap.util.getattr.markerEnd", t("end"))(-1), Y.on("snap.util.getattr.marker-start", t("start"))(-1), Y.on("snap.util.getattr.markerStart", t("start"))(-1), Y.on("snap.util.getattr.marker-mid", t("mid"))(-1), Y.on("snap.util.getattr.markerMid", t("mid"))(-1), Y.on("snap.util.attr.marker-end", e("end"))(-1), Y.on("snap.util.attr.markerEnd", e("end"))(-1), Y.on("snap.util.attr.marker-start", e("start"))(-1), Y.on("snap.util.attr.markerStart", e("start"))(-1), Y.on("snap.util.attr.marker-mid", e("mid"))(-1), Y.on("snap.util.attr.markerMid", e("mid"))(-1)
                }(), Y.on("snap.util.getattr.r", function() {
                    return "rect" == this.type && f(this.node, "rx") == f(this.node, "ry") ? (Y.stop(), f(this.node, "rx")) : void 0
                })(-1), Y.on("snap.util.getattr.text", function() {
                    if ("text" == this.type || "tspan" == this.type) {
                        Y.stop();
                        var t = function t(e) {
                            for (var i = [], n = e.childNodes, r = 0, s = n.length; r < s; r++) {
                                var o = n[r];
                                3 == o.nodeType && i.push(o.nodeValue), "tspan" == o.tagName && (1 == o.childNodes.length && 3 == o.firstChild.nodeType ? i.push(o.firstChild.nodeValue) : i.push(t(o)))
                            }
                            return i
                        }(this.node);
                        return 1 == t.length ? t[0] : t
                    }
                })(-1), Y.on("snap.util.getattr.#text", function() {
                    return this.node.textContent
                })(-1), Y.on("snap.util.getattr.fill", function(t) {
                    if (!t) {
                        Y.stop();
                        var e = Y("snap.util.getattr.fill", this, !0).firstDefined();
                        return s(s.deurl(e)) || e
                    }
                })(-1), Y.on("snap.util.getattr.stroke", function(t) {
                    if (!t) {
                        Y.stop();
                        var e = Y("snap.util.getattr.stroke", this, !0).firstDefined();
                        return s(s.deurl(e)) || e
                    }
                })(-1), Y.on("snap.util.getattr.viewBox", function() {
                    Y.stop();
                    var t = f(this.node, "viewBox");
                    return t ? (t = t.split(v), s._.box(+t[0], +t[1], +t[2], +t[3])) : void 0
                })(-1), Y.on("snap.util.getattr.points", function() {
                    var t = f(this.node, "points");
                    return Y.stop(), t ? t.split(v) : void 0
                })(-1), Y.on("snap.util.getattr.path", function() {
                    var t = f(this.node, "d");
                    return Y.stop(), t
                })(-1), Y.on("snap.util.getattr.class", function() {
                    return this.node.className.baseVal
                })(-1), Y.on("snap.util.getattr.fontSize", n)(-1), Y.on("snap.util.getattr.font-size", n)(-1)
        }), e.plugin(function(t, e, i, n, r) {
            var c = /\S+/g,
                u = String,
                s = e.prototype;
            s.addClass = function(t) {
                var e, i, n, r = u(t || "").match(c) || [],
                    s = this.node,
                    o = s.className.baseVal,
                    a = o.match(c) || [];
                if (r.length) {
                    for (e = 0; i = r[e++];) ~a.indexOf(i) || a.push(i);
                    o != (n = a.join(" ")) && (s.className.baseVal = n)
                }
                return this
            }, s.removeClass = function(t) {
                var e, i, n, r, s = u(t || "").match(c) || [],
                    o = this.node,
                    a = o.className.baseVal,
                    l = a.match(c) || [];
                if (l.length) {
                    for (e = 0; n = s[e++];) ~(i = l.indexOf(n)) && l.splice(i, 1);
                    a != (r = l.join(" ")) && (o.className.baseVal = r)
                }
                return this
            }, s.hasClass = function(t) {
                return !!~(this.node.className.baseVal.match(c) || []).indexOf(t)
            }, s.toggleClass = function(t, e) {
                if (null != e) return e ? this.addClass(t) : this.removeClass(t);
                var i, n, r, s, o = (t || "").match(c) || [],
                    a = this.node,
                    l = a.className.baseVal,
                    u = l.match(c) || [];
                for (i = 0; r = o[i++];) ~(n = u.indexOf(r)) ? u.splice(n, 1) : u.push(r);
                return l != (s = u.join(" ")) && (a.className.baseVal = s), this
            }
        }), e.plugin(function(t, e, i, n, r) {
            function l(t) {
                return t
            }
            var u = {
                    "+": function(t, e) {
                        return t + e
                    },
                    "-": function(t, e) {
                        return t - e
                    },
                    "/": function(t, e) {
                        return t / e
                    },
                    "*": function(t, e) {
                        return t * e
                    }
                },
                c = String,
                h = /[a-z]+$/i,
                p = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
            Y.on("snap.util.attr", function(t) {
                var e = c(t).match(p);
                if (e) {
                    var i = Y.nt(),
                        n = i.substring(i.lastIndexOf(".") + 1),
                        r = this.attr(n),
                        s = {};
                    Y.stop();
                    var o = e[3] || "",
                        a = r.match(h),
                        l = u[e[1]];
                    if (a && a == o ? t = l(parseFloat(r), +e[2]) : (r = this.asPX(n), t = l(this.asPX(n), this.asPX(n, e[2] + o))), isNaN(r) || isNaN(t)) return;
                    s[n] = t, this.attr(s)
                }
            })(-10), Y.on("snap.util.equal", function(t, e) {
                var i, n = c(this.attr(t) || ""),
                    r = c(e).match(p);
                if (r) {
                    Y.stop();
                    var s = r[3] || "",
                        o = n.match(h),
                        a = u[r[1]];
                    return o && o == s ? {
                        from: parseFloat(n),
                        to: a(parseFloat(n), +r[2]),
                        f: (i = o, function(t) {
                            return +t.toFixed(3) + i
                        })
                    } : {
                        from: n = this.asPX(t),
                        to: a(n, this.asPX(t, r[2] + s)),
                        f: l
                    }
                }
            })(-10)
        }), e.plugin(function(d, e, t, s, i) {
            var n = t.prototype,
                u = d.is;
            n.rect = function(t, e, i, n, r, s) {
                var o;
                return null == s && (s = r), u(t, "object") && "[object Object]" == t ? o = t : null != t && (o = {
                    x: t,
                    y: e,
                    width: i,
                    height: n
                }, null != r && (o.rx = r, o.ry = s)), this.el("rect", o)
            }, n.circle = function(t, e, i) {
                var n;
                return u(t, "object") && "[object Object]" == t ? n = t : null != t && (n = {
                    cx: t,
                    cy: e,
                    r: i
                }), this.el("circle", n)
            };
            var a = function() {
                function r() {
                    this.parentNode.removeChild(this)
                }
                return function(t, e) {
                    var i = s.doc.createElement("img"),
                        n = s.doc.body;
                    i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function() {
                        e.call(i), i.onload = i.onerror = null, n.removeChild(i)
                    }, i.onerror = r, n.appendChild(i), i.src = t
                }
            }();
            n.image = function(t, e, i, n, r) {
                    var s = this.el("image");
                    if (u(t, "object") && "src" in t) s.attr(t);
                    else if (null != t) {
                        var o = {
                            "xlink:href": t,
                            preserveAspectRatio: "none"
                        };
                        null != e && null != i && (o.x = e, o.y = i), null != n && null != r ? (o.width = n, o.height = r) : a(t, function() {
                            d._.$(s.node, {
                                width: this.offsetWidth,
                                height: this.offsetHeight
                            })
                        }), d._.$(s.node, o)
                    }
                    return s
                }, n.ellipse = function(t, e, i, n) {
                    var r;
                    return u(t, "object") && "[object Object]" == t ? r = t : null != t && (r = {
                        cx: t,
                        cy: e,
                        rx: i,
                        ry: n
                    }), this.el("ellipse", r)
                }, n.path = function(t) {
                    var e;
                    return u(t, "object") && !u(t, "array") ? e = t : t && (e = {
                        d: t
                    }), this.el("path", e)
                }, n.group = n.g = function(t) {
                    var e = this.el("g");
                    return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
                }, n.svg = function(t, e, i, n, r, s, o, a) {
                    var l = {};
                    return u(t, "object") && null == e ? l = t : (null != t && (l.x = t), null != e && (l.y = e), null != i && (l.width = i), null != n && (l.height = n), null != r && null != s && null != o && null != a && (l.viewBox = [r, s, o, a])), this.el("svg", l)
                }, n.mask = function(t) {
                    var e = this.el("mask");
                    return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
                }, n.ptrn = function(t, e, i, n, r, s, o, a) {
                    if (u(t, "object")) var l = t;
                    else l = {
                        patternUnits: "userSpaceOnUse"
                    }, t && (l.x = t), e && (l.y = e), null != i && (l.width = i), null != n && (l.height = n), l.viewBox = null != r && null != s && null != o && null != a ? [r, s, o, a] : [t || 0, e || 0, i || 0, n || 0];
                    return this.el("pattern", l)
                }, n.use = function(t) {
                    return null != t ? (t instanceof e && (t.attr("id") || t.attr({
                        id: d._.id(t)
                    }), t = t.attr("id")), "#" == String(t).charAt() && (t = t.substring(1)), this.el("use", {
                        "xlink:href": "#" + t
                    })) : e.prototype.use.call(this)
                }, n.symbol = function(t, e, i, n) {
                    var r = {};
                    return null != t && null != e && null != i && null != n && (r.viewBox = [t, e, i, n]), this.el("symbol", r)
                }, n.text = function(t, e, i) {
                    var n = {};
                    return u(t, "object") ? n = t : null != t && (n = {
                        x: t,
                        y: e,
                        text: i || ""
                    }), this.el("text", n)
                }, n.line = function(t, e, i, n) {
                    var r = {};
                    return u(t, "object") ? r = t : null != t && (r = {
                        x1: t,
                        x2: i,
                        y1: e,
                        y2: n
                    }), this.el("line", r)
                }, n.polyline = function(t) {
                    1 < arguments.length && (t = Array.prototype.slice.call(arguments, 0));
                    var e = {};
                    return u(t, "object") && !u(t, "array") ? e = t : null != t && (e = {
                        points: t
                    }), this.el("polyline", e)
                }, n.polygon = function(t) {
                    1 < arguments.length && (t = Array.prototype.slice.call(arguments, 0));
                    var e = {};
                    return u(t, "object") && !u(t, "array") ? e = t : null != t && (e = {
                        points: t
                    }), this.el("polygon", e)
                },
                function() {
                    function a() {
                        return this.selectAll("stop")
                    }

                    function l(t, e) {
                        var i = p("stop"),
                            n = {
                                offset: +e + "%"
                            };
                        t = d.color(t), n["stop-color"] = t.hex, t.opacity < 1 && (n["stop-opacity"] = t.opacity), p(i, n);
                        for (var r, s = this.stops(), o = 0; o < s.length; o++) {
                            if (e < parseFloat(s[o].attr("offset"))) {
                                this.node.insertBefore(i, s[o].node), r = !0;
                                break
                            }
                        }
                        return r || this.node.appendChild(i), this
                    }

                    function u() {
                        if ("linearGradient" == this.type) {
                            var t = p(this.node, "x1") || 0,
                                e = p(this.node, "x2") || 1,
                                i = p(this.node, "y1") || 0,
                                n = p(this.node, "y2") || 0;
                            return d._.box(t, i, math.abs(e - t), math.abs(n - i))
                        }
                        var r = this.node.cx || .5,
                            s = this.node.cy || .5,
                            o = this.node.r || 0;
                        return d._.box(r - o, s - o, 2 * o, 2 * o)
                    }

                    function o(t) {
                        var e = t,
                            i = this.stops();
                        if ("string" == typeof t && (e = Y("snap.util.grad.parse", null, "l(0,0,0,1)" + t).firstDefined().stops), d.is(e, "array")) {
                            for (var n = 0; n < i.length; n++)
                                if (e[n]) {
                                    var r = d.color(e[n].color),
                                        s = {
                                            offset: e[n].offset + "%"
                                        };
                                    s["stop-color"] = r.hex, r.opacity < 1 && (s["stop-opacity"] = r.opacity), i[n].attr(s)
                                } else i[n].remove();
                            for (n = i.length; n < e.length; n++) this.addStop(e[n].color, e[n].offset);
                            return this
                        }
                    }

                    function c(t, e, i, n, r) {
                        var s = d._.make("linearGradient", t);
                        return s.stops = a, s.addStop = l, s.getBBox = u, s.setStops = o, null != e && p(s.node, {
                            x1: e,
                            y1: i,
                            x2: n,
                            y2: r
                        }), s
                    }

                    function h(t, e, i, n, r, s) {
                        var o = d._.make("radialGradient", t);
                        return o.stops = a, o.addStop = l, o.getBBox = u, null != e && p(o.node, {
                            cx: e,
                            cy: i,
                            r: n
                        }), null != r && null != s && p(o.node, {
                            fx: r,
                            fy: s
                        }), o
                    }
                    var p = d._.$;
                    n.gradient = function(t) {
                        return function(t, e) {
                            var i, n = Y("snap.util.grad.parse", null, e).firstDefined();
                            if (!n) return null;
                            n.params.unshift(t), i = "l" == n.type.toLowerCase() ? c.apply(0, n.params) : h.apply(0, n.params), n.type != n.type.toLowerCase() && p(i.node, {
                                gradientUnits: "userSpaceOnUse"
                            });
                            for (var r = n.stops, s = r.length, o = 0; o < s; o++) {
                                var a = r[o];
                                i.addStop(a.color, a.offset)
                            }
                            return i
                        }(this.defs, t)
                    }, n.gradientLinear = function(t, e, i, n) {
                        return c(this.defs, t, e, i, n)
                    }, n.gradientRadial = function(t, e, i, n, r) {
                        return h(this.defs, t, e, i, n, r)
                    }, n.toString = function() {
                        var t, e = this.node.ownerDocument,
                            i = e.createDocumentFragment(),
                            n = e.createElement("div"),
                            r = this.node.cloneNode(!0);
                        return i.appendChild(n), n.appendChild(r), d._.$(r, {
                            xmlns: "http://www.w3.org/2000/svg"
                        }), t = n.innerHTML, i.removeChild(i.firstChild), t
                    }, n.toDataURL = function() {
                        return v && v.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
                    }, n.clear = function() {
                        for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : n.clear.call({
                            node: e
                        }), e = t
                    }
                }()
        }), e.plugin(function(W, m, t, e) {
            function x(e) {
                var i = x.ps = x.ps || {};
                return i[e] ? i[e].sleep = 100 : i[e] = {
                    sleep: 100
                }, setTimeout(function() {
                    for (var t in i) i[a](t) && t != e && (i[t].sleep--, !i[t].sleep && delete i[t])
                }), i[e]
            }

            function g(t, e, i, n) {
                return null == t && (t = e = i = n = 0), null == e && (e = t.y, i = t.width, n = t.height, t = t.x), {
                    x: t,
                    y: e,
                    width: i,
                    w: i,
                    height: n,
                    h: n,
                    x2: t + i,
                    y2: e + n,
                    cx: t + i / 2,
                    cy: e + n / 2,
                    r1: X.min(i, n) / 2,
                    r2: X.max(i, n) / 2,
                    r0: X.sqrt(i * i + n * n) / 2,
                    path: o(t, e, i, n),
                    vb: [t, e, i, n].join(" ")
                }
            }

            function _() {
                return this.join(",").replace(l, "$1")
            }

            function b(t) {
                var e = f(t);
                return e.toString = _, e
            }

            function v(t, e, i, n, r, s, o, a, l) {
                return null == l ? k(t, e, i, n, r, s, o, a) : w(t, e, i, n, r, s, o, a, function(t, e, i, n, r, s, o, a, l) {
                    if (!(l < 0 || k(t, e, i, n, r, s, o, a) < l)) {
                        var u, c = .5,
                            h = 1 - c;
                        for (u = k(t, e, i, n, r, s, o, a, h); .01 < V(u - l);) u = k(t, e, i, n, r, s, o, a, h += (u < l ? 1 : -1) * (c /= 2));
                        return h
                    }
                }(t, e, i, n, r, s, o, a, l))
            }

            function i(d, f) {
                function g(t) {
                    return +(+t).toFixed(3)
                }
                return W._.cacher(function(t, e, i) {
                    t instanceof m && (t = t.attr("d"));
                    for (var n, r, s, o, a, l = "", u = {}, c = 0, h = 0, p = (t = M(t)).length; h < p; h++) {
                        if ("M" == (s = t[h])[0]) n = +s[1], r = +s[2];
                        else {
                            if (e < c + (o = v(n, r, s[1], s[2], s[3], s[4], s[5], s[6]))) {
                                if (f && !u.start) {
                                    if (l += ["C" + g((a = v(n, r, s[1], s[2], s[3], s[4], s[5], s[6], e - c)).start.x), g(a.start.y), g(a.m.x), g(a.m.y), g(a.x), g(a.y)], i) return l;
                                    u.start = l, l = ["M" + g(a.x), g(a.y) + "C" + g(a.n.x), g(a.n.y), g(a.end.x), g(a.end.y), g(s[5]), g(s[6])].join(), c += o, n = +s[5], r = +s[6];
                                    continue
                                }
                                if (!d && !f) return v(n, r, s[1], s[2], s[3], s[4], s[5], s[6], e - c)
                            }
                            c += o, n = +s[5], r = +s[6]
                        }
                        l += s.shift() + s
                    }
                    return u.end = l, d ? c : f ? u : w(n, r, s[0], s[1], s[2], s[3], s[4], s[5], 1)
                }, null, W._.clone)
            }

            function w(t, e, i, n, r, s, o, a, l) {
                var u = 1 - l,
                    c = z(u, 3),
                    h = z(u, 2),
                    p = l * l,
                    d = p * l,
                    f = t + 2 * l * (i - t) + p * (r - 2 * i + t),
                    g = e + 2 * l * (n - e) + p * (s - 2 * n + e),
                    m = i + 2 * l * (r - i) + p * (o - 2 * r + i),
                    v = n + 2 * l * (s - n) + p * (a - 2 * s + n);
                return {
                    x: c * t + 3 * h * l * i + 3 * u * l * l * r + d * o,
                    y: c * e + 3 * h * l * n + 3 * u * l * l * s + d * a,
                    m: {
                        x: f,
                        y: g
                    },
                    n: {
                        x: m,
                        y: v
                    },
                    start: {
                        x: u * t + l * i,
                        y: u * e + l * n
                    },
                    end: {
                        x: u * r + l * o,
                        y: u * s + l * a
                    },
                    alpha: 90 - 180 * X.atan2(f - m, g - v) / U
                }
            }

            function T(t, e, i, n, r, s, o, a) {
                W.is(t, "array") || (t = [t, e, i, n, r, s, o, a]);
                var l = d.apply(null, t);
                return g(l.min.x, l.min.y, l.max.x - l.min.x, l.max.y - l.min.y)
            }

            function y(t, e, i) {
                return e >= t.x && e <= t.x + t.width && i >= t.y && i <= t.y + t.height
            }

            function C(t, e) {
                return t = g(t), y(e = g(e), t.x, t.y) || y(e, t.x2, t.y) || y(e, t.x, t.y2) || y(e, t.x2, t.y2) || y(t, e.x, e.y) || y(t, e.x2, e.y) || y(t, e.x, e.y2) || y(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
            }

            function S(t, e, i, n, r) {
                return t * (t * (-3 * e + 9 * i - 9 * n + 3 * r) + 6 * e - 12 * i + 6 * n) - 3 * e + 3 * i
            }

            function k(t, e, i, n, r, s, o, a, l) {
                null == l && (l = 1);
                for (var u = (l = 1 < l ? 1 : l < 0 ? 0 : l) / 2, c = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], h = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, d = 0; d < 12; d++) {
                    var f = u * c[d] + u,
                        g = S(f, t, i, r, o),
                        m = S(f, e, n, s, a),
                        v = g * g + m * m;
                    p += h[d] * X.sqrt(v)
                }
                return u * p
            }

            function A(t, e, i, n, r, s, o, a) {
                if (!(L(t, i) < j(r, o) || j(t, i) > L(r, o) || L(e, n) < j(s, a) || j(e, n) > L(s, a))) {
                    var l = (t - i) * (s - a) - (e - n) * (r - o);
                    if (l) {
                        var u = ((t * n - e * i) * (r - o) - (t - i) * (r * a - s * o)) / l,
                            c = ((t * n - e * i) * (s - a) - (e - n) * (r * a - s * o)) / l,
                            h = +u.toFixed(2),
                            p = +c.toFixed(2);
                        if (!(h < +j(t, i).toFixed(2) || h > +L(t, i).toFixed(2) || h < +j(r, o).toFixed(2) || h > +L(r, o).toFixed(2) || p < +j(e, n).toFixed(2) || p > +L(e, n).toFixed(2) || p < +j(s, a).toFixed(2) || p > +L(s, a).toFixed(2))) return {
                            x: u,
                            y: c
                        }
                    }
                }
            }

            function E(t, e, i) {
                if (!C(T(t), T(e))) return i ? 0 : [];
                for (var n = ~~(k.apply(0, t) / 8), r = ~~(k.apply(0, e) / 8), s = [], o = [], a = {}, l = i ? 0 : [], u = 0; u < n + 1; u++) {
                    var c = w.apply(0, t.concat(u / n));
                    s.push({
                        x: c.x,
                        y: c.y,
                        t: u / n
                    })
                }
                for (u = 0; u < r + 1; u++) c = w.apply(0, e.concat(u / r)), o.push({
                    x: c.x,
                    y: c.y,
                    t: u / r
                });
                for (u = 0; u < n; u++)
                    for (var h = 0; h < r; h++) {
                        var p = s[u],
                            d = s[u + 1],
                            f = o[h],
                            g = o[h + 1],
                            m = V(d.x - p.x) < .001 ? "y" : "x",
                            v = V(g.x - f.x) < .001 ? "y" : "x",
                            y = A(p.x, p.y, d.x, d.y, f.x, f.y, g.x, g.y);
                        if (y) {
                            if (a[y.x.toFixed(4)] == y.y.toFixed(4)) continue;
                            a[y.x.toFixed(4)] = y.y.toFixed(4);
                            var _ = p.t + V((y[m] - p[m]) / (d[m] - p[m])) * (d.t - p.t),
                                x = f.t + V((y[v] - f[v]) / (g[v] - f[v])) * (g.t - f.t);
                            0 <= _ && _ <= 1 && 0 <= x && x <= 1 && (i ? l++ : l.push({
                                x: y.x,
                                y: y.y,
                                t1: _,
                                t2: x
                            }))
                        }
                    }
                return l
            }

            function r(t, e, i) {
                t = M(t), e = M(e);
                for (var n, r, s, o, a, l, u, c, h, p, d = i ? 0 : [], f = 0, g = t.length; f < g; f++) {
                    var m = t[f];
                    if ("M" == m[0]) n = a = m[1], r = l = m[2];
                    else {
                        "C" == m[0] ? (n = (h = [n, r].concat(m.slice(1)))[6], r = h[7]) : (h = [n, r, n, r, a, l, a, l], n = a, r = l);
                        for (var v = 0, y = e.length; v < y; v++) {
                            var _ = e[v];
                            if ("M" == _[0]) s = u = _[1], o = c = _[2];
                            else {
                                "C" == _[0] ? (s = (p = [s, o].concat(_.slice(1)))[6], o = p[7]) : (p = [s, o, s, o, u, c, u, c], s = u, o = c);
                                var x = E(h, p, i);
                                if (i) d += x;
                                else {
                                    for (var b = 0, w = x.length; b < w; b++) x[b].segment1 = f, x[b].segment2 = v, x[b].bez1 = h, x[b].bez2 = p;
                                    d = d.concat(x)
                                }
                            }
                        }
                    }
                }
                return d
            }

            function s(t) {
                var e = x(t);
                if (e.bbox) return f(e.bbox);
                if (!t) return g();
                for (var i, n = 0, r = 0, s = [], o = [], a = 0, l = (t = M(t)).length; a < l; a++)
                    if ("M" == (i = t[a])[0]) n = i[1], r = i[2], s.push(n), o.push(r);
                    else {
                        var u = d(n, r, i[1], i[2], i[3], i[4], i[5], i[6]);
                        s = s.concat(u.min.x, u.max.x), o = o.concat(u.min.y, u.max.y), n = i[5], r = i[6]
                    } var c = j.apply(0, s),
                    h = j.apply(0, o),
                    p = g(c, h, L.apply(0, s) - c, L.apply(0, o) - h);
                return e.bbox = f(p), p
            }

            function o(t, e, i, n, r) {
                if (r) return [
                    ["M", +t + +r, e],
                    ["l", i - 2 * r, 0],
                    ["a", r, r, 0, 0, 1, r, r],
                    ["l", 0, n - 2 * r],
                    ["a", r, r, 0, 0, 1, -r, r],
                    ["l", 2 * r - i, 0],
                    ["a", r, r, 0, 0, 1, -r, -r],
                    ["l", 0, 2 * r - n],
                    ["a", r, r, 0, 0, 1, r, -r],
                    ["z"]
                ];
                var s = [
                    ["M", t, e],
                    ["l", i, 0],
                    ["l", 0, n],
                    ["l", -i, 0],
                    ["z"]
                ];
                return s.toString = _, s
            }

            function P(t, e, i, n, r) {
                if (null == r && null == n && (n = i), t = +t, e = +e, i = +i, n = +n, null != r) var s = Math.PI / 180,
                    o = t + i * Math.cos(-n * s),
                    a = t + i * Math.cos(-r * s),
                    l = [
                        ["M", o, e + i * Math.sin(-n * s)],
                        ["A", i, i, 0, +(180 < r - n), 0, a, e + i * Math.sin(-r * s)]
                    ];
                else l = [
                    ["M", t, e],
                    ["m", 0, -n],
                    ["a", i, n, 0, 1, 1, 0, 2 * n],
                    ["a", i, n, 0, 1, 1, 0, -2 * n],
                    ["z"]
                ];
                return l.toString = _, l
            }

            function D(t) {
                var e = x(t);
                if (e.abs) return b(e.abs);
                if ($(t, "array") && $(t && t[0], "array") || (t = W.parsePathString(t)), !t || !t.length) return [
                    ["M", 0, 0]
                ];
                var i, n = [],
                    r = 0,
                    s = 0,
                    o = 0,
                    a = 0,
                    l = 0;
                "M" == t[0][0] && (o = r = +t[0][1], a = s = +t[0][2], l++, n[0] = ["M", r, s]);
                for (var u, c, h = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), p = l, d = t.length; p < d; p++) {
                    if (n.push(u = []), (i = (c = t[p])[0]) != i.toUpperCase()) switch (u[0] = i.toUpperCase(), u[0]) {
                            case "A":
                                u[1] = c[1], u[2] = c[2], u[3] = c[3], u[4] = c[4], u[5] = c[5], u[6] = +c[6] + r, u[7] = +c[7] + s;
                                break;
                            case "V":
                                u[1] = +c[1] + s;
                                break;
                            case "H":
                                u[1] = +c[1] + r;
                                break;
                            case "R":
                                for (var f = [r, s].concat(c.slice(1)), g = 2, m = f.length; g < m; g++) f[g] = +f[g] + r, f[++g] = +f[g] + s;
                                n.pop(), n = n.concat(N(f, h));
                                break;
                            case "O":
                                n.pop(), (f = P(r, s, c[1], c[2])).push(f[0]), n = n.concat(f);
                                break;
                            case "U":
                                n.pop(), n = n.concat(P(r, s, c[1], c[2], c[3])), u = ["U"].concat(n[n.length - 1].slice(-2));
                                break;
                            case "M":
                                o = +c[1] + r, a = +c[2] + s;
                            default:
                                for (g = 1, m = c.length; g < m; g++) u[g] = +c[g] + (g % 2 ? r : s)
                        } else if ("R" == i) f = [r, s].concat(c.slice(1)), n.pop(), n = n.concat(N(f, h)), u = ["R"].concat(c.slice(-2));
                        else if ("O" == i) n.pop(), (f = P(r, s, c[1], c[2])).push(f[0]), n = n.concat(f);
                    else if ("U" == i) n.pop(), n = n.concat(P(r, s, c[1], c[2], c[3])), u = ["U"].concat(n[n.length - 1].slice(-2));
                    else
                        for (var v = 0, y = c.length; v < y; v++) u[v] = c[v];
                    if ("O" != (i = i.toUpperCase())) switch (u[0]) {
                        case "Z":
                            r = +o, s = +a;
                            break;
                        case "H":
                            r = u[1];
                            break;
                        case "V":
                            s = u[1];
                            break;
                        case "M":
                            o = u[u.length - 2], a = u[u.length - 1];
                        default:
                            r = u[u.length - 2], s = u[u.length - 1]
                    }
                }
                return n.toString = _, e.abs = b(n), n
            }

            function O(t, e, i, n) {
                return [t, e, i, n, i, n]
            }

            function F(t, e, i, n, r, s) {
                return [1 / 3 * t + 2 / 3 * i, 1 / 3 * e + 2 / 3 * n, 1 / 3 * r + 2 / 3 * i, 1 / 3 * s + 2 / 3 * n, r, s]
            }

            function d(t, e, i, n, r, s, o, a) {
                for (var l, u, c, h, p, d, f, g, m = [], v = [
                        [],
                        []
                    ], y = 0; y < 2; ++y)
                    if (0 == y ? (u = 6 * t - 12 * i + 6 * r, l = -3 * t + 9 * i - 9 * r + 3 * o, c = 3 * i - 3 * t) : (u = 6 * e - 12 * n + 6 * s, l = -3 * e + 9 * n - 9 * s + 3 * a, c = 3 * n - 3 * e), V(l) < 1e-12) {
                        if (V(u) < 1e-12) continue;
                        0 < (h = -c / u) && h < 1 && m.push(h)
                    } else f = u * u - 4 * c * l, g = X.sqrt(f), f < 0 || (0 < (p = (-u + g) / (2 * l)) && p < 1 && m.push(p), 0 < (d = (-u - g) / (2 * l)) && d < 1 && m.push(d));
                for (var _, x = m.length, b = x; x--;) _ = 1 - (h = m[x]), v[0][x] = _ * _ * _ * t + 3 * _ * _ * h * i + 3 * _ * h * h * r + h * h * h * o, v[1][x] = _ * _ * _ * e + 3 * _ * _ * h * n + 3 * _ * h * h * s + h * h * h * a;
                return v[0][b] = t, v[1][b] = e, v[0][b + 1] = o, v[1][b + 1] = a, v[0].length = v[1].length = b + 2, {
                    min: {
                        x: j.apply(0, v[0]),
                        y: j.apply(0, v[1])
                    },
                    max: {
                        x: L.apply(0, v[0]),
                        y: L.apply(0, v[1])
                    }
                }
            }

            function M(t, e) {
                var i = !e && x(t);
                if (!e && i.curve) return b(i.curve);
                for (var s = D(t), o = e && D(e), n = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null
                    }, r = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null
                    }, a = function(t, e, i) {
                        var n, r;
                        if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                        switch (!(t[0] in {
                            T: 1,
                            Q: 1
                        }) && (e.qx = e.qy = null), t[0]) {
                            case "M":
                                e.X = t[1], e.Y = t[2];
                                break;
                            case "A":
                                t = ["C"].concat(function t(e, i, n, r, s, o, a, l, u, c) {
                                    var h, p = 120 * U / 180,
                                        d = U / 180 * (+s || 0),
                                        f = [],
                                        g = W._.cacher(function(t, e, i) {
                                            return {
                                                x: t * X.cos(i) - e * X.sin(i),
                                                y: t * X.sin(i) + e * X.cos(i)
                                            }
                                        });
                                    if (!n || !r) return [e, i, l, u, l, u];
                                    if (c) C = c[0], S = c[1], w = c[2], T = c[3];
                                    else {
                                        e = (h = g(e, i, -d)).x, i = h.y, l = (h = g(l, u, -d)).x, u = h.y;
                                        var m = (X.cos(U / 180 * s), X.sin(U / 180 * s), (e - l) / 2),
                                            v = (i - u) / 2,
                                            y = m * m / (n * n) + v * v / (r * r);
                                        1 < y && (n *= y = X.sqrt(y), r *= y);
                                        var _ = n * n,
                                            x = r * r,
                                            b = (o == a ? -1 : 1) * X.sqrt(V((_ * x - _ * v * v - x * m * m) / (_ * v * v + x * m * m))),
                                            w = b * n * v / r + (e + l) / 2,
                                            T = b * -r * m / n + (i + u) / 2,
                                            C = X.asin(((i - T) / r).toFixed(9)),
                                            S = X.asin(((u - T) / r).toFixed(9));
                                        (C = e < w ? U - C : C) < 0 && (C = 2 * U + C), (S = l < w ? U - S : S) < 0 && (S = 2 * U + S), a && S < C && (C -= 2 * U), !a && C < S && (S -= 2 * U)
                                    }
                                    var k = S - C;
                                    if (V(k) > p) {
                                        var A = S,
                                            E = l,
                                            P = u;
                                        S = C + p * (a && C < S ? 1 : -1), f = t(l = w + n * X.cos(S), u = T + r * X.sin(S), n, r, s, 0, a, E, P, [S, A, w, T])
                                    }
                                    k = S - C;
                                    var D = X.cos(C),
                                        O = X.sin(C),
                                        F = X.cos(S),
                                        M = X.sin(S),
                                        N = X.tan(k / 4),
                                        $ = 4 / 3 * n * N,
                                        R = 4 / 3 * r * N,
                                        j = [e, i],
                                        L = [e + $ * O, i - R * D],
                                        z = [l + $ * M, u - R * F],
                                        B = [l, u];
                                    if (L[0] = 2 * j[0] - L[0], L[1] = 2 * j[1] - L[1], c) return [L, z, B].concat(f);
                                    for (var q = [], I = 0, H = (f = [L, z, B].concat(f).join().split(",")).length; I < H; I++) q[I] = I % 2 ? g(f[I - 1], f[I], d).y : g(f[I], f[I + 1], d).x;
                                    return q
                                }.apply(0, [e.x, e.y].concat(t.slice(1))));
                                break;
                            case "S":
                                "C" == i || "S" == i ? (n = 2 * e.x - e.bx, r = 2 * e.y - e.by) : (n = e.x, r = e.y), t = ["C", n, r].concat(t.slice(1));
                                break;
                            case "T":
                                "Q" == i || "T" == i ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(F(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                                break;
                            case "Q":
                                e.qx = t[1], e.qy = t[2], t = ["C"].concat(F(e.x, e.y, t[1], t[2], t[3], t[4]));
                                break;
                            case "L":
                                t = ["C"].concat(O(e.x, e.y, t[1], t[2]));
                                break;
                            case "H":
                                t = ["C"].concat(O(e.x, e.y, t[1], e.y));
                                break;
                            case "V":
                                t = ["C"].concat(O(e.x, e.y, e.x, t[1]));
                                break;
                            case "Z":
                                t = ["C"].concat(O(e.x, e.y, e.X, e.Y))
                        }
                        return t
                    }, l = function(t, e) {
                        if (7 < t[e].length) {
                            t[e].shift();
                            for (var i = t[e]; i.length;) c[e] = "A", o && (h[e] = "A"), t.splice(e++, 0, ["C"].concat(i.splice(0, 6)));
                            t.splice(e, 1), g = L(s.length, o && o.length || 0)
                        }
                    }, u = function(t, e, i, n, r) {
                        t && e && "M" == t[r][0] && "M" != e[r][0] && (e.splice(r, 0, ["M", n.x, n.y]), i.bx = 0, i.by = 0, i.x = t[r][1], i.y = t[r][2], g = L(s.length, o && o.length || 0))
                    }, c = [], h = [], p = "", d = "", f = 0, g = L(s.length, o && o.length || 0); f < g; f++) {
                    s[f] && (p = s[f][0]), "C" != p && (c[f] = p, f && (d = c[f - 1])), s[f] = a(s[f], n, d), "A" != c[f] && "C" == p && (c[f] = "C"), l(s, f), o && (o[f] && (p = o[f][0]), "C" != p && (h[f] = p, f && (d = h[f - 1])), o[f] = a(o[f], r, d), "A" != h[f] && "C" == p && (h[f] = "C"), l(o, f)), u(s, o, n, r, f), u(o, s, r, n, f);
                    var m = s[f],
                        v = o && o[f],
                        y = m.length,
                        _ = o && v.length;
                    n.x = m[y - 2], n.y = m[y - 1], n.bx = R(m[y - 4]) || n.x, n.by = R(m[y - 3]) || n.y, r.bx = o && (R(v[_ - 4]) || r.x), r.by = o && (R(v[_ - 3]) || r.y), r.x = o && v[_ - 2], r.y = o && v[_ - 1]
                }
                return o || (i.curve = b(s)), o ? [s, o] : s
            }

            function N(t, e) {
                for (var i = [], n = 0, r = t.length; n < r - 2 * !e; n += 2) {
                    var s = [{
                        x: +t[n - 2],
                        y: +t[n - 1]
                    }, {
                        x: +t[n],
                        y: +t[n + 1]
                    }, {
                        x: +t[n + 2],
                        y: +t[n + 3]
                    }, {
                        x: +t[n + 4],
                        y: +t[n + 5]
                    }];
                    e ? n ? r - 4 == n ? s[3] = {
                        x: +t[0],
                        y: +t[1]
                    } : r - 2 == n && (s[2] = {
                        x: +t[0],
                        y: +t[1]
                    }, s[3] = {
                        x: +t[2],
                        y: +t[3]
                    }) : s[0] = {
                        x: +t[r - 2],
                        y: +t[r - 1]
                    } : r - 4 == n ? s[3] = s[2] : n || (s[0] = {
                        x: +t[n],
                        y: +t[n + 1]
                    }), i.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y])
                }
                return i
            }
            var n = m.prototype,
                $ = W.is,
                f = W._.clone,
                a = "hasOwnProperty",
                l = /,?([a-z]),?/gi,
                R = parseFloat,
                X = Math,
                U = X.PI,
                j = X.min,
                L = X.max,
                z = X.pow,
                V = X.abs,
                u = i(1),
                c = i(),
                h = i(0, 1),
                p = W._unit2px,
                B = {
                    path: function(t) {
                        return t.attr("path")
                    },
                    circle: function(t) {
                        var e = p(t);
                        return P(e.cx, e.cy, e.r)
                    },
                    ellipse: function(t) {
                        var e = p(t);
                        return P(e.cx || 0, e.cy || 0, e.rx, e.ry)
                    },
                    rect: function(t) {
                        var e = p(t);
                        return o(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
                    },
                    image: function(t) {
                        var e = p(t);
                        return o(e.x || 0, e.y || 0, e.width, e.height)
                    },
                    line: function(t) {
                        return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
                    },
                    polyline: function(t) {
                        return "M" + t.attr("points")
                    },
                    polygon: function(t) {
                        return "M" + t.attr("points") + "z"
                    },
                    deflt: function(t) {
                        var e = t.node.getBBox();
                        return o(e.x, e.y, e.width, e.height)
                    }
                };
            W.path = x, W.path.getTotalLength = u, W.path.getPointAtLength = c, W.path.getSubpath = function(t, e, i) {
                if (this.getTotalLength(t) - i < 1e-6) return h(t, e).end;
                var n = h(t, i, 1);
                return e ? h(n, e).end : n
            }, n.getTotalLength = function() {
                return this.node.getTotalLength ? this.node.getTotalLength() : void 0
            }, n.getPointAtLength = function(t) {
                return c(this.attr("d"), t)
            }, n.getSubpath = function(t, e) {
                return W.path.getSubpath(this.attr("d"), t, e)
            }, W._.box = g, W.path.findDotsAtSegment = w, W.path.bezierBBox = T, W.path.isPointInsideBBox = y, W.closest = function(t, e, i, n) {
                for (var r = 100, s = g(t - r / 2, e - r / 2, r, r), o = [], a = i[0].hasOwnProperty("x") ? function(t) {
                        return {
                            x: i[t].x,
                            y: i[t].y
                        }
                    } : function(t) {
                        return {
                            x: i[t],
                            y: n[t]
                        }
                    }, l = 0; r <= 1e6 && !l;) {
                    for (var u = 0, c = i.length; u < c; u++) {
                        var h = a(u);
                        if (y(s, h.x, h.y)) {
                            l++, o.push(h);
                            break
                        }
                    }
                    l || (s = g(t - (r *= 2) / 2, e - r / 2, r, r))
                }
                if (1e6 != r) {
                    var p, d = 1 / 0;
                    for (u = 0, c = o.length; u < c; u++) {
                        var f = W.len(t, e, o[u].x, o[u].y);
                        f < d && (d = f, o[u].len = f, p = o[u])
                    }
                    return p
                }
            }, W.path.isBBoxIntersect = C, W.path.intersection = function(t, e) {
                return r(t, e)
            }, W.path.intersectionNumber = function(t, e) {
                return r(t, e, 1)
            }, W.path.isPointInside = function(t, e, i) {
                var n = s(t);
                return y(n, e, i) && r(t, [
                    ["M", e, i],
                    ["H", n.x2 + 10]
                ], 1) % 2 == 1
            }, W.path.getBBox = s, W.path.get = B, W.path.toRelative = function(t) {
                var e = x(t),
                    i = String.prototype.toLowerCase;
                if (e.rel) return b(e.rel);
                W.is(t, "array") && W.is(t && t[0], "array") || (t = W.parsePathString(t));
                var n = [],
                    r = 0,
                    s = 0,
                    o = 0,
                    a = 0,
                    l = 0;
                "M" == t[0][0] && (o = r = t[0][1], a = s = t[0][2], l++, n.push(["M", r, s]));
                for (var u = l, c = t.length; u < c; u++) {
                    var h = n[u] = [],
                        p = t[u];
                    if (p[0] != i.call(p[0])) switch (h[0] = i.call(p[0]), h[0]) {
                        case "a":
                            h[1] = p[1], h[2] = p[2], h[3] = p[3], h[4] = p[4], h[5] = p[5], h[6] = +(p[6] - r).toFixed(3), h[7] = +(p[7] - s).toFixed(3);
                            break;
                        case "v":
                            h[1] = +(p[1] - s).toFixed(3);
                            break;
                        case "m":
                            o = p[1], a = p[2];
                        default:
                            for (var d = 1, f = p.length; d < f; d++) h[d] = +(p[d] - (d % 2 ? r : s)).toFixed(3)
                    } else {
                        h = n[u] = [], "m" == p[0] && (o = p[1] + r, a = p[2] + s);
                        for (var g = 0, m = p.length; g < m; g++) n[u][g] = p[g]
                    }
                    var v = n[u].length;
                    switch (n[u][0]) {
                        case "z":
                            r = o, s = a;
                            break;
                        case "h":
                            r += +n[u][v - 1];
                            break;
                        case "v":
                            s += +n[u][v - 1];
                            break;
                        default:
                            r += +n[u][v - 2], s += +n[u][v - 1]
                    }
                }
                return n.toString = _, e.rel = b(n), n
            }, W.path.toAbsolute = D, W.path.toCubic = M, W.path.map = function(t, e) {
                if (!e) return t;
                var i, n, r, s, o, a, l;
                for (r = 0, o = (t = M(t)).length; r < o; r++)
                    for (s = 1, a = (l = t[r]).length; s < a; s += 2) i = e.x(l[s], l[s + 1]), n = e.y(l[s], l[s + 1]), l[s] = i, l[s + 1] = n;
                return t
            }, W.path.toString = _, W.path.clone = b
        }), e.plugin(function(h, t, e, i) {
            var l = Math.max,
                u = Math.min,
                c = function(t) {
                    if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t)
                        for (var e = 0, i = t.length; e < i; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
                },
                n = c.prototype;
            n.push = function() {
                for (var t, e, i = 0, n = arguments.length; i < n; i++)(t = arguments[i]) && (this[e = this.items.length] = this.items[e] = t, this.length++);
                return this
            }, n.pop = function() {
                return this.length && delete this[this.length--], this.items.pop()
            }, n.forEach = function(t, e) {
                for (var i = 0, n = this.items.length; i < n; i++)
                    if (!1 === t.call(e, this.items[i], i)) return this;
                return this
            }, n.animate = function(i, n, r, t) {
                "function" != typeof r || r.length || (t = r, r = C.linear), i instanceof h._.Animation && (t = i.callback, r = i.easing, n = r.dur, i = i.attr);
                var s = arguments;
                if (h.is(i, "array") && h.is(s[s.length - 1], "array")) var o = !0;
                var e, a = function() {
                        e ? this.b = e : e = this.b
                    },
                    l = 0,
                    u = this,
                    c = t && function() {
                        ++l == u.length && t.call(this)
                    };
                return this.forEach(function(t, e) {
                    Y.once("snap.animcreated." + t.id, a), o ? s[e] && t.animate.apply(t, s[e]) : t.animate(i, n, r, c)
                })
            }, n.remove = function() {
                for (; this.length;) this.pop().remove();
                return this
            }, n.bind = function(t, e, i) {
                var n = {};
                if ("function" == typeof e) this.bindings[t] = e;
                else {
                    var r = i || t;
                    this.bindings[t] = function(t) {
                        n[r] = t, e.attr(n)
                    }
                }
                return this
            }, n.attr = function(t) {
                var e = {};
                for (var i in t) this.bindings[i] ? this.bindings[i](t[i]) : e[i] = t[i];
                for (var n = 0, r = this.items.length; n < r; n++) this.items[n].attr(e);
                return this
            }, n.clear = function() {
                for (; this.length;) this.pop()
            }, n.splice = function(t, e, i) {
                t = t < 0 ? l(this.length + t, 0) : t, e = l(0, u(this.length - t, e));
                var n, r = [],
                    s = [],
                    o = [];
                for (n = 2; n < arguments.length; n++) o.push(arguments[n]);
                for (n = 0; n < e; n++) s.push(this[t + n]);
                for (; n < this.length - t; n++) r.push(this[t + n]);
                var a = o.length;
                for (n = 0; n < a + r.length; n++) this.items[t + n] = this[t + n] = n < a ? o[n] : r[n - a];
                for (n = this.items.length = this.length -= e - a; this[n];) delete this[n++];
                return new c(s)
            }, n.exclude = function(t) {
                for (var e = 0, i = this.length; e < i; e++)
                    if (this[e] == t) return this.splice(e, 1), !0;
                return !1
            }, n.insertAfter = function(t) {
                for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
                return this
            }, n.getBBox = function() {
                for (var t = [], e = [], i = [], n = [], r = this.items.length; r--;)
                    if (!this.items[r].removed) {
                        var s = this.items[r].getBBox();
                        t.push(s.x), e.push(s.y), i.push(s.x + s.width), n.push(s.y + s.height)
                    } return {
                    x: t = u.apply(0, t),
                    y: e = u.apply(0, e),
                    x2: i = l.apply(0, i),
                    y2: n = l.apply(0, n),
                    width: i - t,
                    height: n - e,
                    cx: t + (i - t) / 2,
                    cy: e + (n - e) / 2
                }
            }, n.clone = function(t) {
                t = new c;
                for (var e = 0, i = this.items.length; e < i; e++) t.push(this.items[e].clone());
                return t
            }, n.toString = function() {
                return "Snap‘s set"
            }, n.type = "set", h.Set = c, h.set = function() {
                var t = new c;
                return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
            }
        }), e.plugin(function(h, t, e, i) {
            function p(t) {
                var e = t[0];
                switch (e.toLowerCase()) {
                    case "t":
                        return [e, 0, 0];
                    case "m":
                        return [e, 1, 0, 0, 1, 0, 0];
                    case "r":
                        return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                    case "s":
                        return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
                }
            }

            function d(t) {
                return t
            }

            function f(t) {
                return t.join(" ")
            }

            function g(t) {
                return h.rgb(t[0], t[1], t[2], t[3])
            }

            function m(t) {
                var e, i, n, r, s, o, a = 0,
                    l = [];
                for (e = 0, i = t.length; e < i; e++) {
                    for (s = "[", o = ['"' + t[e][0] + '"'], n = 1, r = t[e].length; n < r; n++) o[n] = "val[" + a++ + "]";
                    s += o + "]", l[e] = s
                }
                return Function("val", "return Snap.path.toString.call([" + l + "])")
            }

            function v(t) {
                for (var e = [], i = 0, n = t.length; i < n; i++)
                    for (var r = 1, s = t[i].length; r < s; r++) e.push(t[i][r]);
                return e
            }

            function y(t) {
                return isFinite(t)
            }
            var _ = {},
                x = /[%a-z]+$/i,
                b = String;
            _.stroke = _.fill = "colour", t.prototype.equal = function(t, e) {
                return Y("snap.util.equal", this, t, e).firstDefined()
            }, Y.on("snap.util.equal", function(t, e) {
                var i, n, r = b(this.attr(t) || ""),
                    s = this;
                if ("colour" == _[t]) return i = h.color(r), n = h.color(e), {
                    from: [i.r, i.g, i.b, i.opacity],
                    to: [n.r, n.g, n.b, n.opacity],
                    f: g
                };
                if ("viewBox" == t) return {
                    from: i = this.attr(t).vb.split(" ").map(Number),
                    to: n = e.split(" ").map(Number),
                    f: f
                };
                if ("transform" == t || "gradientTransform" == t || "patternTransform" == t) return "string" == typeof e && (e = b(e).replace(/\.{3}|\u2026/g, r)),
                    function(t, e, i) {
                        t = t || new h.Matrix, e = e || new h.Matrix, t = h.parseTransformString(t.toTransformString()) || [], e = h.parseTransformString(e.toTransformString()) || [];
                        for (var n, r, s, o, a = Math.max(t.length, e.length), l = [], u = [], c = 0; c < a; c++) {
                            if (s = t[c] || p(e[c]), o = e[c] || p(s), s[0] != o[0] || "r" == s[0].toLowerCase() && (s[2] != o[2] || s[3] != o[3]) || "s" == s[0].toLowerCase() && (s[3] != o[3] || s[4] != o[4])) {
                                t = h._.transform2matrix(t, i()), e = h._.transform2matrix(e, i()), l = [
                                    ["m", t.a, t.b, t.c, t.d, t.e, t.f]
                                ], u = [
                                    ["m", e.a, e.b, e.c, e.d, e.e, e.f]
                                ];
                                break
                            }
                            for (l[c] = [], u[c] = [], n = 0, r = Math.max(s.length, o.length); n < r; n++) n in s && (l[c][n] = s[n]), n in o && (u[c][n] = o[n])
                        }
                        return {
                            from: v(l),
                            to: v(u),
                            f: m(l)
                        }
                    }(r = this.matrix, e = h._.rgTransform.test(e) ? h._.transform2matrix(e, this.getBBox()) : h._.transform2matrix(h._.svgTransform2string(e), this.getBBox()), function() {
                        return s.getBBox(1)
                    });
                if ("d" == t || "path" == t) return {
                    from: v((i = h.path.toCubic(r, e))[0]),
                    to: v(i[1]),
                    f: m(i[0])
                };
                if ("points" == t) return {
                    from: i = b(r).split(h._.separator),
                    to: n = b(e).split(h._.separator),
                    f: function(t) {
                        return t
                    }
                };
                if (y(r) && y(e)) return {
                    from: parseFloat(r),
                    to: parseFloat(e),
                    f: d
                };
                var o, a, l, u = r.match(x),
                    c = b(e).match(x);
                return u && (a = u, l = c, h.is(a, "array") && h.is(l, "array") && a.toString() == l.toString()) ? {
                    from: parseFloat(r),
                    to: parseFloat(e),
                    f: (o = u, function(t) {
                        return +t.toFixed(3) + o
                    })
                } : {
                    from: this.asPX(t),
                    to: this.asPX(t, e),
                    f: d
                }
            })
        }), e.plugin(function(p, t, e, r) {
            for (var i = t.prototype, d = ("createTouch" in r.doc), n = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], f = {
                    mousedown: "touchstart",
                    mousemove: "touchmove",
                    mouseup: "touchend"
                }, g = function(t, e) {
                    var i = "y" == t ? "scrollTop" : "scrollLeft",
                        n = e && e.node ? e.node.ownerDocument : r.doc;
                    return n[i in n.documentElement ? "documentElement" : "body"][i]
                }, m = function() {
                    return this.originalEvent.preventDefault()
                }, v = function() {
                    return this.originalEvent.stopPropagation()
                }, c = [], h = function(t) {
                    for (var e, i = t.clientX, n = t.clientY, r = g("y"), s = g("x"), o = c.length; o--;) {
                        if (e = c[o], d) {
                            for (var a, l = t.touches && t.touches.length; l--;)
                                if ((a = t.touches[l]).identifier == e.el._drag.id || e.el.node.contains(a.target)) {
                                    i = a.clientX, n = a.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                                    break
                                }
                        } else t.preventDefault();
                        var u = e.el.node;
                        u.nextSibling, u.parentNode, u.style.display, i += s, n += r, Y("snap.drag.move." + e.el.id, e.move_scope || e.el, i - e.el._drag.x, n - e.el._drag.y, i, n, t)
                    }
                }, y = function(t) {
                    p.unmousemove(h).unmouseup(y);
                    for (var e, i = c.length; i--;)(e = c[i]).el._drag = {}, Y("snap.drag.end." + e.el.id, e.end_scope || e.start_scope || e.move_scope || e.el, t), Y.off("snap.drag.*." + e.el.id);
                    c = []
                }, s = n.length; s--;) ! function(o) {
                p[o] = i[o] = function(t, e) {
                    if (p.is(t, "function")) this.events = this.events || [], this.events.push({
                        name: o,
                        f: t,
                        unbind: (l = this.node || document, u = o, c = t, h = e || this, r = d && f[u] ? f[u] : u, s = function(t) {
                            var e = g("y", h),
                                i = g("x", h);
                            if (d && f.hasOwnProperty(u))
                                for (var n = 0, r = t.targetTouches && t.targetTouches.length; n < r; n++)
                                    if (t.targetTouches[n].target == l || l.contains(t.targetTouches[n].target)) {
                                        var s = t;
                                        (t = t.targetTouches[n]).originalEvent = s, t.preventDefault = m, t.stopPropagation = v;
                                        break
                                    } var o = t.clientX + i,
                                a = t.clientY + e;
                            return c.call(h, t, o, a)
                        }, u !== r && l.addEventListener(u, s, !1), l.addEventListener(r, s, !1), function() {
                            return u !== r && l.removeEventListener(u, s, !1), l.removeEventListener(r, s, !1), !0
                        })
                    });
                    else
                        for (var i = 0, n = this.events.length; i < n; i++)
                            if (this.events[i].name == o) try {
                                this.events[i].f.call(this)
                            } catch (t) {}
                    var l, u, c, h, r, s;
                    return this
                }, p["un" + o] = i["un" + o] = function(t) {
                    for (var e = this.events || [], i = e.length; i--;)
                        if (e[i].name == o && (e[i].f == t || !t)) return e[i].unbind(), e.splice(i, 1), !e.length && delete this.events, this;
                    return this
                }
            }(n[s]);
            i.hover = function(t, e, i, n) {
                return this.mouseover(t, i).mouseout(e, n || i)
            }, i.unhover = function(t, e) {
                return this.unmouseover(t).unmouseout(e)
            };
            var _ = [];
            i.drag = function(n, r, s, o, a, l) {
                function t(t, e, i) {
                    (t.originalEvent || t).preventDefault(), u._drag.x = e, u._drag.y = i, u._drag.id = t.identifier, !c.length && p.mousemove(h).mouseup(y), c.push({
                        el: u,
                        move_scope: o,
                        start_scope: a,
                        end_scope: l
                    }), r && Y.on("snap.drag.start." + u.id, r), n && Y.on("snap.drag.move." + u.id, n), s && Y.on("snap.drag.end." + u.id, s), Y("snap.drag.start." + u.id, a || o || u, e, i, t)
                }

                function e(t, e, i) {
                    Y("snap.draginit." + u.id, u, t, e, i)
                }
                var i, u = this;
                return arguments.length ? (Y.on("snap.draginit." + u.id, t), u._drag = {}, _.push({
                    el: u,
                    start: t,
                    init: e
                }), u.mousedown(e), u) : u.drag(function(t, e) {
                    this.attr({
                        transform: i + (i ? "T" : "t") + [t, e]
                    })
                }, function() {
                    i = this.transform().local
                })
            }, i.undrag = function() {
                for (var t = _.length; t--;) _[t].el == this && (this.unmousedown(_[t].init), _.splice(t, 1), Y.unbind("snap.drag.*." + this.id), Y.unbind("snap.draginit." + this.id));
                return !_.length && p.unmousemove(h).unmouseup(y), this
            }
        }), e.plugin(function(s, o, t, e) {
            var i = (o.prototype, t.prototype),
                n = /^\s*url\((.+)\)/,
                a = String,
                l = s._.$;
            s.filter = {}, i.filter = function(t) {
                var e = this;
                "svg" != e.type && (e = e.paper);
                var i = s.parse(a(t)),
                    n = s._.id(),
                    r = (e.node.offsetWidth, e.node.offsetHeight, l("filter"));
                return l(r, {
                    id: n,
                    filterUnits: "userSpaceOnUse"
                }), r.appendChild(i.node), e.defs.appendChild(r), new o(r)
            }, Y.on("snap.util.getattr.filter", function() {
                Y.stop();
                var t = l(this.node, "filter");
                if (t) {
                    var e = a(t).match(n);
                    return e && s.select(e[1])
                }
            }), Y.on("snap.util.attr.filter", function(t) {
                if (t instanceof o && "filter" == t.type) {
                    Y.stop();
                    var e = t.node.id;
                    e || (l(t.node, {
                        id: t.id
                    }), e = t.id), l(this.node, {
                        filter: s.url(e)
                    })
                }
                t && "none" != t || (Y.stop(), this.node.removeAttribute("filter"))
            }), s.filter.blur = function(t, e) {
                null == t && (t = 2);
                var i = null == e ? t : [t, e];
                return s.format('<feGaussianBlur stdDeviation="{def}"/>', {
                    def: i
                })
            }, s.filter.blur.toString = function() {
                return this()
            }, s.filter.shadow = function(t, e, i, n, r) {
                return null == r && (null == n ? (r = i, i = 4, n = "#000") : (r = n, n = i, i = 4)), null == i && (i = 4), null == r && (r = 1), null == t && (t = 0, e = 2), null == e && (e = t), n = s.color(n), s.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                    color: n,
                    dx: t,
                    dy: e,
                    blur: i,
                    opacity: r
                })
            }, s.filter.shadow.toString = function() {
                return this()
            }, s.filter.grayscale = function(t) {
                return null == t && (t = 1), s.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                    a: .2126 + .7874 * (1 - t),
                    b: .7152 - .7152 * (1 - t),
                    c: .0722 - .0722 * (1 - t),
                    d: .2126 - .2126 * (1 - t),
                    e: .7152 + .2848 * (1 - t),
                    f: .0722 - .0722 * (1 - t),
                    g: .2126 - .2126 * (1 - t),
                    h: .0722 + .9278 * (1 - t)
                })
            }, s.filter.grayscale.toString = function() {
                return this()
            }, s.filter.sepia = function(t) {
                return null == t && (t = 1), s.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                    a: .393 + .607 * (1 - t),
                    b: .769 - .769 * (1 - t),
                    c: .189 - .189 * (1 - t),
                    d: .349 - .349 * (1 - t),
                    e: .686 + .314 * (1 - t),
                    f: .168 - .168 * (1 - t),
                    g: .272 - .272 * (1 - t),
                    h: .534 - .534 * (1 - t),
                    i: .131 + .869 * (1 - t)
                })
            }, s.filter.sepia.toString = function() {
                return this()
            }, s.filter.saturate = function(t) {
                return null == t && (t = 1), s.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                    amount: 1 - t
                })
            }, s.filter.saturate.toString = function() {
                return this()
            }, s.filter.hueRotate = function(t) {
                return t = t || 0, s.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                    angle: t
                })
            }, s.filter.hueRotate.toString = function() {
                return this()
            }, s.filter.invert = function(t) {
                return null == t && (t = 1), s.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                    amount: t,
                    amount2: 1 - t
                })
            }, s.filter.invert.toString = function() {
                return this()
            }, s.filter.brightness = function(t) {
                return null == t && (t = 1), s.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                    amount: t
                })
            }, s.filter.brightness.toString = function() {
                return this()
            }, s.filter.contrast = function(t) {
                return null == t && (t = 1), s.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                    amount: t,
                    amount2: .5 - t / 2
                })
            }, s.filter.contrast.toString = function() {
                return this()
            }
        }), e.plugin(function(t, e, i, n, r) {
            var s = t._.box,
                o = t.is,
                a = /^[^a-z]*([tbmlrc])/i,
                l = function() {
                    return "T" + this.dx + "," + this.dy
                };
            e.prototype.getAlign = function(t, e) {
                null == e && o(t, "string") && (e = t, t = null);
                var i = (t = t || this.paper).getBBox ? t.getBBox() : s(t),
                    n = this.getBBox(),
                    r = {};
                switch (e = (e = e && e.match(a)) ? e[1].toLowerCase() : "c") {
                    case "t":
                        r.dx = 0, r.dy = i.y - n.y;
                        break;
                    case "b":
                        r.dx = 0, r.dy = i.y2 - n.y2;
                        break;
                    case "m":
                        r.dx = 0, r.dy = i.cy - n.cy;
                        break;
                    case "l":
                        r.dx = i.x - n.x, r.dy = 0;
                        break;
                    case "r":
                        r.dx = i.x2 - n.x2, r.dy = 0;
                        break;
                    default:
                        r.dx = i.cx - n.cx, r.dy = 0
                }
                return r.toString = l, r
            }, e.prototype.align = function(t, e) {
                return this.transform("..." + this.getAlign(t, e))
            }
        }), e.plugin(function(e, t, i, n) {
            function r(t) {
                t = t.split(/(?=#)/);
                var e = new String(t[5]);
                return e[50] = t[0], e[100] = t[1], e[200] = t[2], e[300] = t[3], e[400] = t[4], e[500] = t[5], e[600] = t[6], e[700] = t[7], e[800] = t[8], e[900] = t[9], t[10] && (e.A100 = t[10], e.A200 = t[11], e.A400 = t[12], e.A700 = t[13]), e
            }
            e.mui = {}, e.flat = {}, e.mui.red = r("#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000"), e.mui.pink = r("#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162"), e.mui.purple = r("#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF"), e.mui.deeppurple = r("#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA"), e.mui.indigo = r("#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE"), e.mui.blue = r("#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF"), e.mui.lightblue = r("#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA"), e.mui.cyan = r("#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4"), e.mui.teal = r("#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5"), e.mui.green = r("#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853"), e.mui.lightgreen = r("#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17"), e.mui.lime = r("#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00"), e.mui.yellow = r("#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600"), e.mui.amber = r("#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00"), e.mui.orange = r("#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00"), e.mui.deeporange = r("#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00"), e.mui.brown = r("#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723"), e.mui.grey = r("#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121"), e.mui.bluegrey = r("#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238"), e.flat.turquoise = "#1abc9c", e.flat.greensea = "#16a085", e.flat.sunflower = "#f1c40f", e.flat.orange = "#f39c12", e.flat.emerland = "#2ecc71", e.flat.nephritis = "#27ae60", e.flat.carrot = "#e67e22", e.flat.pumpkin = "#d35400", e.flat.peterriver = "#3498db", e.flat.belizehole = "#2980b9", e.flat.alizarin = "#e74c3c", e.flat.pomegranate = "#c0392b", e.flat.amethyst = "#9b59b6", e.flat.wisteria = "#8e44ad", e.flat.clouds = "#ecf0f1", e.flat.silver = "#bdc3c7", e.flat.wetasphalt = "#34495e", e.flat.midnightblue = "#2c3e50", e.flat.concrete = "#95a5a6", e.flat.asbestos = "#7f8c8d", e.importMUIColors = function() {
                for (var t in e.mui) e.mui.hasOwnProperty(t) && (v[t] = e.mui[t])
            }
        }), e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define([], function() {
            return t.svg4everybody = e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.svg4everybody = e()
    }(this, function() {
        /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
        function m(t, e, i) {
            if (i) {
                var n = document.createDocumentFragment(),
                    r = !e.hasAttribute("viewBox") && i.getAttribute("viewBox");
                r && e.setAttribute("viewBox", r);
                for (var s = i.cloneNode(!0); s.childNodes.length;) n.appendChild(s.firstChild);
                t.appendChild(n)
            }
        }

        function v(n) {
            n.onreadystatechange = function() {
                if (4 === n.readyState) {
                    var i = n._cachedDocument;
                    i || ((i = n._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = n.responseText, n._cachedTarget = {}), n._embeds.splice(0).map(function(t) {
                        var e = n._cachedTarget[t.id];
                        e || (e = n._cachedTarget[t.id] = i.getElementById(t.id)), m(t.parent, t.svg, e)
                    })
                }
            }, n.onreadystatechange()
        }

        function y(t) {
            for (var e = t;
                "svg" !== e.nodeName.toLowerCase() && (e = e.parentNode););
            return e
        }
        return function(t) {
            var c, h = Object(t),
                e = window.top !== window.self;
            c = "polyfill" in h ? h.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && e;
            var p = {},
                d = window.requestAnimationFrame || setTimeout,
                f = document.getElementsByTagName("use"),
                g = 0;
            c && function t() {
                for (var e = 0; e < f.length;) {
                    var i = f[e],
                        n = i.parentNode,
                        r = y(n),
                        s = i.getAttribute("xlink:href") || i.getAttribute("href");
                    if (!s && h.attributeName && (s = i.getAttribute(h.attributeName)), r && s) {
                        if (c)
                            if (!h.validate || h.validate(s, r, i)) {
                                n.removeChild(i);
                                var o = s.split("#"),
                                    a = o.shift(),
                                    l = o.join("#");
                                if (a.length) {
                                    var u = p[a];
                                    u || ((u = p[a] = new XMLHttpRequest).open("GET", a), u.send(), u._embeds = []), u._embeds.push({
                                        parent: n,
                                        svg: r,
                                        id: l
                                    }), v(u)
                                } else m(n, r, document.getElementById(l))
                            } else ++e, ++g
                    } else ++e
                }(!f.length || 0 < f.length - g) && d(t, 67)
            }()
        }
    }),
    function() {
        "use strict";
        /**
         * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
         *
         * @codingstandard ftlabs-jsv2
         * @copyright The Financial Times Limited [All Rights Reserved]
         * @license MIT License (see LICENSE.txt)
         */
        function a(r, t) {
            var e;
            if (t = t || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = t.touchBoundary || 10, this.layer = r, this.tapDelay = t.tapDelay || 200, this.tapTimeout = t.tapTimeout || 700, !a.notNeeded(r)) {
                for (var i = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], n = 0, s = i.length; n < s; n++) this[i[n]] = o(this[i[n]], this);
                l && (r.addEventListener("mouseover", this.onMouse, !0), r.addEventListener("mousedown", this.onMouse, !0), r.addEventListener("mouseup", this.onMouse, !0)), r.addEventListener("click", this.onClick, !0), r.addEventListener("touchstart", this.onTouchStart, !1), r.addEventListener("touchmove", this.onTouchMove, !1), r.addEventListener("touchend", this.onTouchEnd, !1), r.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (r.removeEventListener = function(t, e, i) {
                    var n = Node.prototype.removeEventListener;
                    "click" === t ? n.call(r, t, e.hijacked || e, i) : n.call(r, t, e, i)
                }, r.addEventListener = function(t, e, i) {
                    var n = Node.prototype.addEventListener;
                    "click" === t ? n.call(r, t, e.hijacked || (e.hijacked = function(t) {
                        t.propagationStopped || e(t)
                    }), i) : n.call(r, t, e, i)
                }), "function" == typeof r.onclick && (e = r.onclick, r.addEventListener("click", function(t) {
                    e(t)
                }, !1), r.onclick = null)
            }

            function o(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
        }
        var t = 0 <= navigator.userAgent.indexOf("Windows Phone"),
            l = 0 < navigator.userAgent.indexOf("Android") && !t,
            u = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
            c = u && /OS 4_\d(_\d)?/.test(navigator.userAgent),
            h = u && /OS [6-7]_\d/.test(navigator.userAgent),
            r = 0 < navigator.userAgent.indexOf("BB10");
        a.prototype.needsClick = function(t) {
            switch (t.nodeName.toLowerCase()) {
                case "button":
                case "select":
                case "textarea":
                    if (t.disabled) return !0;
                    break;
                case "input":
                    if (u && "file" === t.type || t.disabled) return !0;
                    break;
                case "label":
                case "iframe":
                case "video":
                    return !0
            }
            return /\bneedsclick\b/.test(t.className)
        }, a.prototype.needsFocus = function(t) {
            switch (t.nodeName.toLowerCase()) {
                case "textarea":
                    return !0;
                case "select":
                    return !l;
                case "input":
                    switch (t.type) {
                        case "button":
                        case "checkbox":
                        case "file":
                        case "image":
                        case "radio":
                        case "submit":
                            return !1
                    }
                    return !t.disabled && !t.readOnly;
                default:
                    return /\bneedsfocus\b/.test(t.className)
            }
        }, a.prototype.sendClick = function(t, e) {
            var i, n;
            document.activeElement && document.activeElement !== t && document.activeElement.blur(), n = e.changedTouches[0], (i = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, t.dispatchEvent(i)
        }, a.prototype.determineEventType = function(t) {
            return l && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
        }, a.prototype.focus = function(t) {
            var e;
            u && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
        }, a.prototype.updateScrollParent = function(t) {
            var e, i;
            if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
                i = t;
                do {
                    if (i.scrollHeight > i.offsetHeight) {
                        e = i, t.fastClickScrollParent = i;
                        break
                    }
                    i = i.parentElement
                } while (i)
            }
            e && (e.fastClickLastScrollTop = e.scrollTop)
        }, a.prototype.getTargetElementFromEventTarget = function(t) {
            return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
        }, a.prototype.onTouchStart = function(t) {
            var e, i, n;
            if (1 < t.targetTouches.length) return !0;
            if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], u) {
                if ((n = window.getSelection()).rangeCount && !n.isCollapsed) return !0;
                if (!c) {
                    if (i.identifier && i.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                    this.lastTouchIdentifier = i.identifier, this.updateScrollParent(e)
                }
            }
            return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = i.pageX, this.touchStartY = i.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
        }, a.prototype.touchHasMoved = function(t) {
            var e = t.changedTouches[0],
                i = this.touchBoundary;
            return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i
        }, a.prototype.onTouchMove = function(t) {
            return this.trackingClick && (this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0
        }, a.prototype.findControl = function(t) {
            return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }, a.prototype.onTouchEnd = function(t) {
            var e, i, n, r, s, o = this.targetElement;
            if (!this.trackingClick) return !0;
            if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0;
            if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
            if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, i = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, h && (s = t.changedTouches[0], (o = document.elementFromPoint(s.pageX - window.pageXOffset, s.pageY - window.pageYOffset) || o).fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (n = o.tagName.toLowerCase())) {
                if (e = this.findControl(o)) {
                    if (this.focus(o), l) return !1;
                    o = e
                }
            } else if (this.needsFocus(o)) return 100 < t.timeStamp - i || u && window.top !== window && "input" === n ? this.targetElement = null : (this.focus(o), this.sendClick(o, t), u && "select" === n || (this.targetElement = null, t.preventDefault())), !1;
            return !(!u || c || !(r = o.fastClickScrollParent) || r.fastClickLastScrollTop === r.scrollTop) || (this.needsClick(o) || (t.preventDefault(), this.sendClick(o, t)), !1)
        }, a.prototype.onTouchCancel = function() {
            this.trackingClick = !1, this.targetElement = null
        }, a.prototype.onMouse = function(t) {
            return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1))))
        }, a.prototype.onClick = function(t) {
            var e;
            return this.trackingClick ? (this.targetElement = null, !(this.trackingClick = !1)) : "submit" === t.target.type && 0 === t.detail || ((e = this.onMouse(t)) || (this.targetElement = null), e)
        }, a.prototype.destroy = function() {
            var t = this.layer;
            l && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }, a.notNeeded = function(t) {
            var e, i, n;
            if (void 0 === window.ontouchstart) return !0;
            if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!l) return !0;
                if (e = document.querySelector("meta[name=viewport]")) {
                    if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                    if (31 < i && document.documentElement.scrollWidth <= window.outerWidth) return !0
                }
            }
            if (r && 10 <= (n = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] && 3 <= n[2] && (e = document.querySelector("meta[name=viewport]"))) {
                if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
            return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (!!(27 <= +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] && (e = document.querySelector("meta[name=viewport]")) && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
        }, a.attach = function(t, e) {
            return new a(t, e)
        }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
            return a
        }) : "undefined" != typeof module && module.exports ? (module.exports = a.attach, module.exports.FastClick = a) : window.FastClick = a
    }();
/**
 * Generates event when user makes new movement (like a swipe on a touchscreen).
 * @version 1.1.4
 * @link https://github.com/Promo/wheel-indicator
 * @license MIT
 */
var _gsScope, WheelIndicator = function(s, t) {
    var o = "onwheel" in t ? "wheel" : "mousewheel",
        a = {
            callback: function() {},
            elem: t,
            preventMouse: !0
        };

    function e(t) {
        this._options = c(a, t), this._deltaArray = [0, 0, 0], this._isAcceleration = !1, this._isStopped = !0, this._direction = "", this._timer = "", this._isWorking = !0;
        var e, i, n, r = this;
        this._wheelHandler = function(t) {
            var e;
            r._isWorking && (function(t) {
                var e = this,
                    i = u(t);
                if (0 === i) return;
                var n, r = 0 < i ? "down" : "up",
                    s = e._deltaArray.length,
                    o = !1,
                    a = 0;
                for (clearTimeout(e._timer), e._timer = setTimeout(function() {
                        e._deltaArray = [0, 0, 0], e._isStopped = !0, e._direction = r
                    }, 150), n = 0; n < s; n++) 0 !== e._deltaArray[n] && (0 < e._deltaArray[n] ? ++a : --a);
                Math.abs(a) === s && (0 < a ? "down" : "up") !== e._direction && (o = !0, e._direction = r);
                e._isStopped || (o ? (e._isAcceleration = !0, l.call(this, t)) : Math.abs(a) === s && function(t) {
                    var e = Math.abs(this._deltaArray[0]),
                        i = Math.abs(this._deltaArray[1]),
                        n = Math.abs(this._deltaArray[2]),
                        r = Math.abs(u(t));
                    n < r && i < n && e < i && (this._isAcceleration || (l.call(this, t), this._isAcceleration = !0));
                    r < n && n <= i && (this._isAcceleration = !1)
                }.call(this, t));
                e._isStopped && (e._isStopped = !1, e._isAcceleration = !0, e._direction = r, l.call(this, t));
                e._deltaArray.shift(), e._deltaArray.push(i)
            }.call(r, t), r._options.preventMouse && ((e = (e = t) || s.event).preventDefault ? e.preventDefault() : e.returnValue = !1))
        }, e = this._options.elem, i = o, n = this._wheelHandler, e.addEventListener ? e.addEventListener(i, n, !1) : e.attachEvent && e.attachEvent("on" + i, n)
    }

    function l(t) {
        t.direction = this._direction, this._options.callback.call(this, t)
    }
    e.prototype = {
        constructor: e,
        turnOn: function() {
            return this._isWorking = !0, this
        },
        turnOff: function() {
            return this._isWorking = !1, this
        },
        setOptions: function(t) {
            return this._options = c(this._options, t), this
        },
        getOption: function(t) {
            var e = this._options[t];
            if (void 0 !== e) return e;
            throw new Error("Unknown option")
        },
        destroy: function() {
            var t, e, i;
            return t = this._options.elem, e = o, i = this._wheelHandler, t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent && t.detachEvent("on" + e, i), this
        }
    };
    var u = function(t) {
        return (u = t.wheelDelta && !t.deltaY ? function(t) {
            return -1 * t.wheelDelta
        } : function(t) {
            return t.deltaY
        })(t)
    };

    function c(t, e) {
        var i, n = {};
        for (i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        for (i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
        return n
    }
    return e
}(window, document);
"object" == typeof exports && (module.exports = WheelIndicator)
    /*!
     * VERSION: 1.20.4
     * DATE: 2018-02-15
     * UPDATES AND DOCS AT: http://greensock.com
     * 
     * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     **/
    , ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var T, b, w, C, v, i, y, S, _, x, d, f, m, t, e, l, n;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(n, c, y) {
            var m = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                v = function(t, e, i) {
                    var n, r, s = t.cycle;
                    for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                    delete t.cycle
                },
                _ = function(t, e, i) {
                    y.call(this, t, e, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = _.prototype.render
                },
                x = 1e-10,
                b = y._internals,
                w = b.isSelector,
                T = b.isArray,
                t = _.prototype = y.to({}, .1, {}),
                C = [];
            _.version = "1.20.4", t.constructor = _, t.kill()._gc = !1, _.killTweensOf = _.killDelayedCallsTo = y.killTweensOf, _.getTweensOf = y.getTweensOf, _.lagSmoothing = y.lagSmoothing, _.ticker = y.ticker, _.render = y.render, t.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), y.prototype.invalidate.call(this)
            }, t.updateTo = function(t, e) {
                var i, n = this.ratio,
                    r = this.vars.immediateRender || t.immediateRender;
                for (i in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[i] = t[i];
                if (this._initted || r)
                    if (e) this._initted = !1, r && this.render(0, !0, !0);
                    else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && y._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
                    var s = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                } else if (this._initted = !1, this._init(), 0 < this._time || r)
                    for (var o, a = 1 / (1 - n), l = this._firstPT; l;) o = l.s + l.c, l.c *= a, l.s = o - l.c, l = l._next;
                return this
            }, t.render = function(t, e, i) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var n, r, s, o, a, l, u, c, h, p = this._dirty ? this.totalDuration() : this._totalDuration,
                    d = this._time,
                    f = this._totalTime,
                    g = this._cycle,
                    m = this._duration,
                    v = this._rawPrevTime;
                if (p - 1e-7 <= t && 0 <= t ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = m, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === m && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (v < 0 || t <= 0 && -1e-7 <= t || v === x && "isPause" !== this.data) && v !== t && (i = !0, x < v && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || v === t ? t : x)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== f || 0 === m && 0 < v) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === m && (this._initted || !this.vars.lazy || i) && (0 <= v && (i = !0), this._rawPrevTime = c = !e || t || v === t ? t : x)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (o = m + this._repeatDelay, this._cycle = this._totalTime / o >> 0, 0 !== this._cycle && this._cycle === this._totalTime / o && f <= t && this._cycle--, this._time = this._totalTime - this._cycle * o, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time, (h = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== h || this._initted ? this._yoyoEase = h = !0 === h ? this._ease : h instanceof Ease ? h : Ease.map[h] : (h = this.vars.ease, this._yoyoEase = h = h ? h instanceof Ease ? h : "function" == typeof h ? new Ease(h, this.vars.easeParams) : Ease.map[h] || y.defaultEase : y.defaultEase)), this.ratio = h ? 1 - h.getRatio((m - this._time) / m) : 0)), this._time > m ? this._time = m : this._time < 0 && (this._time = 0)), this._easeType && !h ? (a = this._time / m, (1 === (l = this._easeType) || 3 === l && .5 <= a) && (a = 1 - a), 3 === l && (a *= 2), 1 === (u = this._easePower) ? a *= a : 2 === u ? a *= a * a : 3 === u ? a *= a * a * a : 4 === u && (a *= a * a * a * a), 1 === l ? this.ratio = 1 - a : 2 === l ? this.ratio = a : this._time / m < .5 ? this.ratio = a / 2 : this.ratio = 1 - a / 2) : h || (this.ratio = this._ease.getRatio(this._time / m))), d !== this._time || i || g !== this._cycle) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = f, this._rawPrevTime = v, this._cycle = g, b.lazyTweens.push(this), void(this._lazy = [t, e]);
                        !this._time || n || h ? n && this._ease._calcEnd && !h && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / m)
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== d && 0 <= t && (this._active = !0), 0 === f && (2 === this._initted && 0 < t && this._init(), this._startAt && (0 <= t ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== m || e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, i), e || (this._totalTime !== f || r) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === m && this._rawPrevTime === x && c !== x && (this._rawPrevTime = 0)))
                } else f !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, _.to = function(t, e, i) {
                return new _(t, e, i)
            }, _.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new _(t, e, i)
            }, _.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new _(t, e, n)
            }, _.staggerTo = _.allTo = function(t, e, i, n, r, s, o) {
                n = n || 0;
                var a, l, u, c, h = 0,
                    p = [],
                    d = function() {
                        i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments), r.apply(o || i.callbackScope || this, s || C)
                    },
                    f = i.cycle,
                    g = i.startAt && i.startAt.cycle;
                for (T(t) || ("string" == typeof t && (t = y.selector(t) || t), w(t) && (t = m(t))), t = t || [], n < 0 && ((t = m(t)).reverse(), n *= -1), a = t.length - 1, u = 0; u <= a; u++) {
                    for (c in l = {}, i) l[c] = i[c];
                    if (f && (v(l, t, u), null != l.duration && (e = l.duration, delete l.duration)), g) {
                        for (c in g = l.startAt = {}, i.startAt) g[c] = i.startAt[c];
                        v(l.startAt, t, u)
                    }
                    l.delay = h + (l.delay || 0), u === a && r && (l.onComplete = d), p[u] = new _(t[u], e, l), h += n
                }
                return p
            }, _.staggerFrom = _.allFrom = function(t, e, i, n, r, s, o) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, _.staggerTo(t, e, i, n, r, s, o)
            }, _.staggerFromTo = _.allFromTo = function(t, e, i, n, r, s, o, a) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, _.staggerTo(t, e, n, r, s, o, a)
            }, _.delayedCall = function(t, e, i, n, r) {
                return new _(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, _.set = function(t, e) {
                return new _(t, 0, e)
            }, _.isTweening = function(t) {
                return 0 < y.getTweensOf(t, !0).length
            };
            var s = function(t, e) {
                    for (var i = [], n = 0, r = t._first; r;) r instanceof y ? i[n++] = r : (e && (i[n++] = r), n = (i = i.concat(s(r, e))).length), r = r._next;
                    return i
                },
                h = _.getAllTweens = function(t) {
                    return s(n._rootTimeline, t).concat(s(n._rootFramesTimeline, t))
                };
            _.killAll = function(t, e, i, n) {
                null == e && (e = !0), null == i && (i = !0);
                var r, s, o, a = h(0 != n),
                    l = a.length,
                    u = e && i && n;
                for (o = 0; o < l; o++) s = a[o], (u || s instanceof c || (r = s.target === s.vars.onComplete) && i || e && !r) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
            }, _.killChildTweensOf = function(t, e) {
                if (null != t) {
                    var i, n, r, s, o, a = b.tweenLookup;
                    if ("string" == typeof t && (t = y.selector(t) || t), w(t) && (t = m(t)), T(t))
                        for (s = t.length; - 1 < --s;) _.killChildTweensOf(t[s], e);
                    else {
                        for (r in i = [], a)
                            for (n = a[r].target.parentNode; n;) n === t && (i = i.concat(a[r].tweens)), n = n.parentNode;
                        for (o = i.length, s = 0; s < o; s++) e && i[s].totalTime(i[s].totalDuration()), i[s]._enabled(!1, !1)
                    }
                }
            };
            var r = function(t, e, i, n) {
                e = !1 !== e, i = !1 !== i;
                for (var r, s, o = h(n = !1 !== n), a = e && i && n, l = o.length; - 1 < --l;) s = o[l], (a || s instanceof c || (r = s.target === s.vars.onComplete) && i || e && !r) && s.paused(t)
            };
            return _.pauseAll = function(t, e, i) {
                r(!0, t, e, i)
            }, _.resumeAll = function(t, e, i) {
                r(!1, t, e, i)
            }, _.globalTimeScale = function(t) {
                var e = n._rootTimeline,
                    i = y.ticker.time;
                return arguments.length ? (t = t || x, e._startTime = i - (i - e._startTime) * e._timeScale / t, e = n._rootFramesTimeline, i = y.ticker.frame, e._startTime = i - (i - e._startTime) * e._timeScale / t, e._timeScale = n._rootTimeline._timeScale = t, t) : e._timeScale
            }, t.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }, t.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, t.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, t.duration = function(t) {
                return arguments.length ? n.prototype.duration.call(this, t) : this._duration
            }, t.totalDuration = function(t) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, t.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, t.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, t.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, _
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(c, h, p) {
            var d = function(t) {
                    h.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var e, i, n = this.vars;
                    for (i in n) e = n[i], g(e) && -1 !== e.join("").indexOf("{self}") && (n[i] = this._swapSelfInParams(e));
                    g(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                },
                t = p._internals,
                e = d._internals = {},
                f = t.isSelector,
                g = t.isArray,
                m = t.lazyTweens,
                v = t.lazyRender,
                o = _gsScope._gsDefine.globals,
                y = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                },
                _ = function(t, e, i) {
                    var n, r, s = t.cycle;
                    for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                    delete t.cycle
                },
                s = e.pauseCallback = function() {},
                x = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                i = d.prototype = new h;
            return d.version = "1.20.4", i.constructor = d, i.kill()._gc = i._forcingPlayhead = i._hasPause = !1, i.to = function(t, e, i, n) {
                var r = i.repeat && o.TweenMax || p;
                return e ? this.add(new r(t, e, i), n) : this.set(t, i, n)
            }, i.from = function(t, e, i, n) {
                return this.add((i.repeat && o.TweenMax || p).from(t, e, i), n)
            }, i.fromTo = function(t, e, i, n, r) {
                var s = n.repeat && o.TweenMax || p;
                return e ? this.add(s.fromTo(t, e, i, n), r) : this.set(t, n, r)
            }, i.staggerTo = function(t, e, i, n, r, s, o, a) {
                var l, u, c = new d({
                        onComplete: s,
                        onCompleteParams: o,
                        callbackScope: a,
                        smoothChildTiming: this.smoothChildTiming
                    }),
                    h = i.cycle;
                for ("string" == typeof t && (t = p.selector(t) || t), f(t = t || []) && (t = x(t)), (n = n || 0) < 0 && ((t = x(t)).reverse(), n *= -1), u = 0; u < t.length; u++)(l = y(i)).startAt && (l.startAt = y(l.startAt), l.startAt.cycle && _(l.startAt, t, u)), h && (_(l, t, u), null != l.duration && (e = l.duration, delete l.duration)), c.to(t[u], e, l, u * n);
                return this.add(c, r)
            }, i.staggerFrom = function(t, e, i, n, r, s, o, a) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
            }, i.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
            }, i.call = function(t, e, i, n) {
                return this.add(p.delayedCall(0, t, e, i), n)
            }, i.set = function(t, e, i) {
                return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new p(t, 0, e), i)
            }, d.exportRoot = function(t, e) {
                null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                var i, n, r, s, o = new d(t),
                    a = o._timeline;
                for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;) s = r._next, e && r instanceof p && r.target === r.vars.onComplete || ((n = r._startTime - r._delay) < 0 && (i = 1), o.add(r, n)), r = s;
                return a.add(o, 0), i && o.totalDuration(), o
            }, i.add = function(t, e, i, n) {
                var r, s, o, a, l, u;
                if ("number" != typeof e && (e = this._parseTimeOrLabel(e, 0, !0, t)), !(t instanceof c)) {
                    if (t instanceof Array || t && t.push && g(t)) {
                        for (i = i || "normal", n = n || 0, r = e, s = t.length, o = 0; o < s; o++) g(a = t[o]) && (a = new d({
                            tweens: a
                        })), this.add(a, r), "string" != typeof a && "function" != typeof a && ("sequence" === i ? r = a._startTime + a.totalDuration() / a._timeScale : "start" === i && (a._startTime -= a.delay())), r += n;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof t) return this.addLabel(t, e);
                    if ("function" != typeof t) throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                    t = p.delayedCall(0, t)
                }
                if (h.prototype.add.call(this, t, e), t._time && t.render((this.rawTime() - t._startTime) * t._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (u = (l = this).rawTime() > t._startTime; l._timeline;) u && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
                return this
            }, i.remove = function(t) {
                if (t instanceof c) {
                    this._remove(t, !1);
                    var e = t._timeline = t.vars.useFrames ? c._rootFramesTimeline : c._rootTimeline;
                    return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
                }
                if (t instanceof Array || t && t.push && g(t)) {
                    for (var i = t.length; - 1 < --i;) this.remove(t[i]);
                    return this
                }
                return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
            }, i._remove = function(t, e) {
                return h.prototype._remove.call(this, t, e), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, i.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, i.insert = i.insertMultiple = function(t, e, i, n) {
                return this.add(t, e || 0, i, n)
            }, i.appendMultiple = function(t, e, i, n) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
            }, i.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, i.addPause = function(t, e, i, n) {
                var r = p.delayedCall(0, s, i, n || this);
                return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
            }, i.removeLabel = function(t) {
                return delete this._labels[t], this
            }, i.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, i._parseTimeOrLabel = function(t, e, i, n) {
                var r, s;
                if (n instanceof c && n.timeline === this) this.remove(n);
                else if (n && (n instanceof Array || n.push && g(n)))
                    for (s = n.length; - 1 < --s;) n[s] instanceof c && n[s].timeline === this && this.remove(n[s]);
                if (r = "number" != typeof t || e ? 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof e) return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - r : 0, i);
                if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = r);
                else {
                    if (-1 === (s = t.indexOf("="))) return null == this._labels[t] ? i ? this._labels[t] = r + e : e : this._labels[t] + e;
                    e = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = 1 < s ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, i) : r
                }
                return Number(t) + e
            }, i.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
            }, i.stop = function() {
                return this.paused(!0)
            }, i.gotoAndPlay = function(t, e) {
                return this.play(t, e)
            }, i.gotoAndStop = function(t, e) {
                return this.pause(t, e)
            }, i.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var n, r, s, o, a, l, u, c = this._time,
                    h = this._dirty ? this.totalDuration() : this._totalDuration,
                    p = this._startTime,
                    d = this._timeScale,
                    f = this._paused;
                if (c !== this._time && (t += this._time - c), h - 1e-7 <= t && 0 <= t) this._totalTime = this._time = h, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && -1e-7 <= t || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, 1e-10 < this._rawPrevTime && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = h + 1e-4;
                else if (t < 1e-7)
                    if (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && 1e-10 !== this._rawPrevTime && (0 < this._rawPrevTime || t < 0 && 0 <= this._rawPrevTime)) && (o = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, o = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (a = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                            for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                        t = 0, this._initted || (a = !0)
                    }
                else {
                    if (this._hasPause && !this._forcingPlayhead && !e) {
                        if (c <= t)
                            for (n = this._first; n && n._startTime <= t && !l;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (l = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !l;) n._duration || "isPause" === n.data && 0 < n._rawPrevTime && (l = n), n = n._prev;
                        l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    this._totalTime = this._time = this._rawPrevTime = t
                }
                if (this._time !== c && this._first || i || a || l) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && 0 < t && (this._active = !0), 0 === c && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), c <= (u = this._time))
                        for (n = this._first; n && (s = n._next, u === this._time && (!this._paused || f));)(n._active || n._startTime <= u && !n._paused && !n._gc) && (l === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                    else
                        for (n = this._last; n && (s = n._prev, u === this._time && (!this._paused || f));) {
                            if (n._active || n._startTime <= c && !n._paused && !n._gc) {
                                if (l === n) {
                                    for (l = n._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                    l = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = s
                        }
                    this._onUpdate && (e || (m.length && v(), this._callback("onUpdate"))), o && (this._gc || p !== this._startTime && d === this._timeScale || (0 === this._time || h >= this.totalDuration()) && (r && (m.length && v(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                }
            }, i._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof d && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, i.getChildren = function(t, e, i, n) {
                n = n || -9999999999;
                for (var r = [], s = this._first, o = 0; s;) s._startTime < n || (s instanceof p ? !1 !== e && (r[o++] = s) : (!1 !== i && (r[o++] = s), !1 !== t && (o = (r = r.concat(s.getChildren(!0, e, i))).length))), s = s._next;
                return r
            }, i.getTweensOf = function(t, e) {
                var i, n, r = this._gc,
                    s = [],
                    o = 0;
                for (r && this._enabled(!0, !0), n = (i = p.getTweensOf(t)).length; - 1 < --n;)(i[n].timeline === this || e && this._contains(i[n])) && (s[o++] = i[n]);
                return r && this._enabled(!1, !0), s
            }, i.recent = function() {
                return this._recent
            }, i._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, i.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                if (e)
                    for (n in s) s[n] >= i && (s[n] += t);
                return this._uncache(!0)
            }, i._kill = function(t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; - 1 < --n;) i[n]._kill(t, e) && (r = !0);
                return r
            }, i.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; - 1 < --i;) e[i]._enabled(!1, !1);
                return !1 !== t && (this._labels = {}), this._uncache(!0)
            }, i.invalidate = function() {
                for (var t = this._first; t;) t.invalidate(), t = t._next;
                return c.prototype.invalidate.call(this)
            }, i._enabled = function(t, e) {
                if (t === this._gc)
                    for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
                return h.prototype._enabled.call(this, t, e)
            }, i.totalTime = function(t, e, i) {
                this._forcingPlayhead = !0;
                var n = c.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, n
            }, i.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, i.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(r, r._startTime - r._delay), this._calculatingDuration = 0) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale, this._time -= r._startTime, this._totalTime -= r._startTime, this._rawPrevTime -= r._startTime), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), n < (i = r._startTime + r._totalDuration / r._timeScale) && (n = i), r = e;
                        this._duration = this._totalDuration = n, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
            }, i.paused = function(t) {
                if (!t)
                    for (var e = this._first, i = this._time; e;) e._startTime === i && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next;
                return c.prototype.paused.apply(this, arguments)
            }, i.usesFrames = function() {
                for (var t = this._timeline; t._timeline;) t = t._timeline;
                return t === c._rootFramesTimeline
            }, i.rawTime = function(t) {
                return t && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
            }, d
        }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, a, t) {
            var i = function(t) {
                    e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                },
                n = a._internals,
                k = n.lazyTweens,
                A = n.lazyRender,
                l = _gsScope._gsDefine.globals,
                u = new t(null, null, 1, 0),
                r = i.prototype = new e;
            return r.constructor = i, r.kill()._gc = !1, i.version = "1.20.4", r.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
            }, r.addCallback = function(t, e, i, n) {
                return this.add(a.delayedCall(0, t, i, n), e)
            }, r.removeCallback = function(t, e) {
                if (t)
                    if (null == e) this._kill(null, t);
                    else
                        for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); - 1 < --n;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                return this
            }, r.removePause = function(t) {
                return this.removeCallback(e._internals.pauseCallback, t)
            }, r.tweenTo = function(t, e) {
                e = e || {};
                var i, n, r, s = {
                        ease: u,
                        useFrames: this.usesFrames(),
                        immediateRender: !1,
                        lazy: !1
                    },
                    o = e.repeat && l.TweenMax || a;
                for (n in e) s[n] = e[n];
                return s.time = this._parseTimeOrLabel(t), i = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, r = new o(this, i, s), s.onStart = function() {
                    r.target.paused(!0), r.vars.time === r.target.time() || i !== r.duration() || r.isFromTo || r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale).render(r.time(), !0, !0), e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || r, e.onStartParams || [])
                }, r
            }, r.tweenFromTo = function(t, e, i) {
                i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [t],
                    callbackScope: this
                }, i.immediateRender = !1 !== i.immediateRender;
                var n = this.tweenTo(e, i);
                return n.isFromTo = 1, n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
            }, r.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var n, r, s, o, a, l, u, c, h = this._time,
                    p = this._dirty ? this.totalDuration() : this._totalDuration,
                    d = this._duration,
                    f = this._totalTime,
                    g = this._startTime,
                    m = this._timeScale,
                    v = this._rawPrevTime,
                    y = this._paused,
                    _ = this._cycle;
                if (h !== this._time && (t += this._time - h), p - 1e-7 <= t && 0 <= t) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && -1e-7 <= t || v < 0 || 1e-10 === v) && v !== t && this._first && (a = !0, 1e-10 < v && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : t = (this._time = d) + 1e-4;
                else if (t < 1e-7)
                    if (this._locked || (this._totalTime = this._cycle = 0), ((this._time = 0) !== h || 0 === d && 1e-10 !== v && (0 < v || t < 0 && 0 <= v) && !this._locked) && (o = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, o = "onReverseComplete") : 0 <= v && this._first && (a = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                            for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                        t = 0, this._initted || (a = !0)
                    }
                else if (0 === d && v < 0 && (a = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (l = d + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && f <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time), this._time > d ? t = (this._time = d) + 1e-4 : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                    if (h <= (t = this._time) || this._repeat && _ !== this._cycle)
                        for (n = this._first; n && n._startTime <= t && !u;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n), n = n._next;
                    else
                        for (n = this._last; n && n._startTime >= t && !u;) n._duration || "isPause" === n.data && 0 < n._rawPrevTime && (u = n), n = n._prev;
                    u && u._startTime < d && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                if (this._cycle !== _ && !this._locked) {
                    var x = this._yoyo && 0 != (1 & _),
                        b = x === (this._yoyo && 0 != (1 & this._cycle)),
                        w = this._totalTime,
                        T = this._cycle,
                        C = this._rawPrevTime,
                        S = this._time;
                    if (this._totalTime = _ * d, this._cycle < _ ? x = !x : this._totalTime += d, this._time = h, this._rawPrevTime = 0 === d ? v - 1e-4 : v, this._cycle = _, this._locked = !0, h = x ? 0 : d, this.render(h, e, 0 === d), e || this._gc || this.vars.onRepeat && (this._cycle = T, this._locked = !1, this._callback("onRepeat")), h !== this._time) return;
                    if (b && (this._cycle = _, this._locked = !0, h = x ? d + 1e-4 : -1e-4, this.render(h, !0, !1)), this._locked = !1, this._paused && !y) return;
                    this._time = S, this._totalTime = w, this._cycle = T, this._rawPrevTime = C
                }
                if (this._time !== h && this._first || i || a || u) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && 0 < t && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), h <= (c = this._time))
                        for (n = this._first; n && (s = n._next, c === this._time && (!this._paused || y));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (u === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                    else
                        for (n = this._last; n && (s = n._prev, c === this._time && (!this._paused || y));) {
                            if (n._active || n._startTime <= h && !n._paused && !n._gc) {
                                if (u === n) {
                                    for (u = n._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                    u = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = s
                        }
                    this._onUpdate && (e || (k.length && A(), this._callback("onUpdate"))), o && (this._locked || this._gc || g !== this._startTime && m === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (r && (k.length && A(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                } else f !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, r.getActive = function(t, e, i) {
                null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                var n, r, s = [],
                    o = this.getChildren(t, e, i),
                    a = 0,
                    l = o.length;
                for (n = 0; n < l; n++)(r = o[n]).isActive() && (s[a++] = r);
                return s
            }, r.getLabelAfter = function(t) {
                t || 0 !== t && (t = this._time);
                var e, i = this.getLabelsArray(),
                    n = i.length;
                for (e = 0; e < n; e++)
                    if (i[e].time > t) return i[e].name;
                return null
            }, r.getLabelBefore = function(t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), i = e.length; - 1 < --i;)
                    if (e[i].time < t) return e[i].name;
                return null
            }, r.getLabelsArray = function() {
                var t, e = [],
                    i = 0;
                for (t in this._labels) e[i++] = {
                    time: this._labels[t],
                    name: t
                };
                return e.sort(function(t, e) {
                    return t.time - e.time
                }), e
            }, r.invalidate = function() {
                return this._locked = !1, e.prototype.invalidate.call(this)
            }, r.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
            }, r.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
            }, r.totalDuration = function(t) {
                return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, r.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, r.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, r.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, r.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, r.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
            }, i
        }, !0), T = 180 / Math.PI, b = [], w = [], C = [], v = {}, i = _gsScope._gsDefine.globals, y = function(t, e, i, n) {
            i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
        }, S = function(t, e, i, n) {
            var r = {
                    a: t
                },
                s = {},
                o = {},
                a = {
                    c: n
                },
                l = (t + e) / 2,
                u = (e + i) / 2,
                c = (i + n) / 2,
                h = (l + u) / 2,
                p = (u + c) / 2,
                d = (p - h) / 8;
            return r.b = l + (t - l) / 4, s.b = h + d, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (h + p) / 2, o.b = p - d, a.b = c + (n - c) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
        }, _ = function(t, e, i, n, r) {
            var s, o, a, l, u, c, h, p, d, f, g, m, v, y = t.length - 1,
                _ = 0,
                x = t[0].a;
            for (s = 0; s < y; s++) o = (u = t[_]).a, a = u.d, l = t[_ + 1].d, r ? (g = b[s], v = ((m = w[s]) + g) * e * .25 / (n ? .5 : C[s] || .5), p = a - ((c = a - (a - o) * (n ? .5 * e : 0 !== g ? v / g : 0)) + (((h = a + (l - a) * (n ? .5 * e : 0 !== m ? v / m : 0)) - c) * (3 * g / (g + m) + .5) / 4 || 0))) : p = a - ((c = a - (a - o) * e * .5) + (h = a + (l - a) * e * .5)) / 2, c += p, h += p, u.c = d = c, u.b = 0 !== s ? x : x = u.a + .6 * (u.c - u.a), u.da = a - o, u.ca = d - o, u.ba = x - o, i ? (f = S(o, x, d, a), t.splice(_, 1, f[0], f[1], f[2], f[3]), _ += 4) : _++, x = h;
            (u = t[_]).b = x, u.c = x + .4 * (u.d - x), u.da = u.d - u.a, u.ca = u.c - u.a, u.ba = x - u.a, i && (f = S(u.a, x, u.c, u.d), t.splice(_, 1, f[0], f[1], f[2], f[3]))
        }, x = function(t, e, i, n) {
            var r, s, o, a, l, u, c = [];
            if (n)
                for (s = (t = [n].concat(t)).length; - 1 < --s;) "string" == typeof(u = t[s][e]) && "=" === u.charAt(1) && (t[s][e] = n[e] + Number(u.charAt(0) + u.substr(2)));
            if ((r = t.length - 2) < 0) return c[0] = new y(t[0][e], 0, 0, t[0][e]), c;
            for (s = 0; s < r; s++) o = t[s][e], a = t[s + 1][e], c[s] = new y(o, 0, 0, a), i && (l = t[s + 2][e], b[s] = (b[s] || 0) + (a - o) * (a - o), w[s] = (w[s] || 0) + (l - a) * (l - a));
            return c[s] = new y(t[s][e], 0, 0, t[s + 1][e]), c
        }, d = function(t, e, i, n, r, s) {
            var o, a, l, u, c, h, p, d, f = {},
                g = [],
                m = s || t[0];
            for (a in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) g.push(a);
            if (1 < t.length) {
                for (d = t[t.length - 1], p = !0, o = g.length; - 1 < --o;)
                    if (a = g[o], .05 < Math.abs(m[a] - d[a])) {
                        p = !1;
                        break
                    } p && (t = t.concat(), s && t.unshift(s), t.push(t[1]), s = t[t.length - 3])
            }
            for (b.length = w.length = C.length = 0, o = g.length; - 1 < --o;) a = g[o], v[a] = -1 !== r.indexOf("," + a + ","), f[a] = x(t, a, v[a], s);
            for (o = b.length; - 1 < --o;) b[o] = Math.sqrt(b[o]), w[o] = Math.sqrt(w[o]);
            if (!n) {
                for (o = g.length; - 1 < --o;)
                    if (v[a])
                        for (h = (l = f[g[o]]).length - 1, u = 0; u < h; u++) c = l[u + 1].da / w[u] + l[u].da / b[u] || 0, C[u] = (C[u] || 0) + c * c;
                for (o = C.length; - 1 < --o;) C[o] = Math.sqrt(C[o])
            }
            for (o = g.length, u = i ? 4 : 1; - 1 < --o;) l = f[a = g[o]], _(l, e, i, n, v[a]), p && (l.splice(0, u), l.splice(l.length - u, u));
            return f
        }, f = function(t, e, i) {
            for (var n, r, s, o, a, l, u, c, h, p, d, f = 1 / i, g = t.length; - 1 < --g;)
                for (s = (p = t[g]).a, o = p.d - s, a = p.c - s, l = p.b - s, n = r = 0, c = 1; c <= i; c++) n = r - (r = ((u = f * c) * u * o + 3 * (h = 1 - u) * (u * a + h * l)) * u), e[d = g * i + c - 1] = (e[d] || 0) + n * n
        }, m = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.8",
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t, e instanceof Array && (e = {
                    values: e
                }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var n, r, s, o, a, l = e.values || [],
                    u = {},
                    c = l[0],
                    h = e.autoRotate || i.vars.orientToBezier;
                for (n in this._autoRotate = h ? h instanceof Array ? h : [
                        ["x", "y", "rotation", !0 === h ? 0 : Number(h) || 0]
                    ] : null, c) this._props.push(n);
                for (s = this._props.length; - 1 < --s;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || u[n] !== l[0][n] && (a = u);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? d(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : function(t, e, i) {
                        var n, r, s, o, a, l, u, c, h, p, d, f = {},
                            g = "cubic" === (e = e || "soft") ? 3 : 2,
                            m = "soft" === e,
                            v = [];
                        if (m && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
                        for (h in t[0]) v.push(h);
                        for (l = v.length; - 1 < --l;) {
                            for (f[h = v[l]] = a = [], p = 0, c = t.length, u = 0; u < c; u++) n = null == i ? t[u][h] : "string" == typeof(d = t[u][h]) && "=" === d.charAt(1) ? i[h] + Number(d.charAt(0) + d.substr(2)) : Number(d), m && 1 < u && u < c - 1 && (a[p++] = (n + a[p - 2]) / 2), a[p++] = n;
                            for (c = p - g + 1, u = p = 0; u < c; u += g) n = a[u], r = a[u + 1], s = a[u + 2], o = 2 === g ? 0 : a[u + 3], a[p++] = d = 3 === g ? new y(n, r, s, o) : new y(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                            a.length = p
                        }
                        return f
                    }(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                    var p = function(t, e) {
                        var i, n, r, s, o = [],
                            a = [],
                            l = 0,
                            u = 0,
                            c = (e = e >> 0 || 6) - 1,
                            h = [],
                            p = [];
                        for (i in t) f(t[i], o, e);
                        for (r = o.length, n = 0; n < r; n++) l += Math.sqrt(o[n]), p[s = n % e] = l, s === c && (u += l, h[s = n / e >> 0] = p, a[s] = u, l = 0, p = []);
                        return {
                            length: u,
                            lengths: a,
                            segments: h
                        }
                    }(this._beziers, this._timeRes);
                    this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (h = this._autoRotate)
                    for (this._initialRotations = [], h[0] instanceof Array || (this._autoRotate = h = [h]), s = h.length; - 1 < --s;) {
                        for (o = 0; o < 3; o++) n = h[s][o], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                        n = h[s][2], this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                    }
                return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
            },
            set: function(t) {
                var e, i, n, r, s, o, a, l, u, c, h = this._segCount,
                    p = this._func,
                    d = this._target,
                    f = t !== this._startRatio;
                if (this._timeRes) {
                    if (u = this._lengths, c = this._curSeg, t *= this._length, n = this._li, t > this._l2 && n < h - 1) {
                        for (l = h - 1; n < l && (this._l2 = u[++n]) <= t;);
                        this._l1 = u[n - 1], this._li = n, this._curSeg = c = this._segments[n], this._s2 = c[this._s1 = this._si = 0]
                    } else if (t < this._l1 && 0 < n) {
                        for (; 0 < n && (this._l1 = u[--n]) >= t;);
                        0 === n && t < this._l1 ? this._l1 = 0 : n++, this._l2 = u[n], this._li = n, this._curSeg = c = this._segments[n], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                    }
                    if (e = n, t -= this._l1, n = this._si, t > this._s2 && n < c.length - 1) {
                        for (l = c.length - 1; n < l && (this._s2 = c[++n]) <= t;);
                        this._s1 = c[n - 1], this._si = n
                    } else if (t < this._s1 && 0 < n) {
                        for (; 0 < n && (this._s1 = c[--n]) >= t;);
                        0 === n && t < this._s1 ? this._s1 = 0 : n++, this._s2 = c[n], this._si = n
                    }
                    o = (n + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else o = (t - (e = t < 0 ? 0 : 1 <= t ? h - 1 : h * t >> 0) * (1 / h)) * h;
                for (i = 1 - o, n = this._props.length; - 1 < --n;) r = this._props[n], a = (o * o * (s = this._beziers[r][e]).da + 3 * i * (o * s.ca + i * s.ba)) * o + s.a, this._mod[r] && (a = this._mod[r](a, d)), p[r] ? d[r](a) : d[r] = a;
                if (this._autoRotate) {
                    var g, m, v, y, _, x, b, w = this._autoRotate;
                    for (n = w.length; - 1 < --n;) r = w[n][2], x = w[n][3] || 0, b = !0 === w[n][4] ? 1 : T, s = this._beziers[w[n][0]], g = this._beziers[w[n][1]], s && g && (s = s[e], g = g[e], m = s.a + (s.b - s.a) * o, m += ((y = s.b + (s.c - s.b) * o) - m) * o, y += (s.c + (s.d - s.c) * o - y) * o, v = g.a + (g.b - g.a) * o, v += ((_ = g.b + (g.c - g.b) * o) - v) * o, _ += (g.c + (g.d - g.c) * o - _) * o, a = f ? Math.atan2(_ - v, y - m) * b + x : this._initialRotations[n], this._mod[r] && (a = this._mod[r](a, d)), p[r] ? d[r](a) : d[r] = a)
                }
            }
        }), t = m.prototype, m.bezierThrough = d, m.cubicToQuadratic = S, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
            return new y(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, m._cssRegister = function() {
            var t = i.CSSPlugin;
            if (t) {
                var e = t._internals,
                    d = e._parseToProxy,
                    f = e._setPluginRatio,
                    g = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, i, n, r, s) {
                        e instanceof Array && (e = {
                            values: e
                        }), s = new m;
                        var o, a, l, u = e.values,
                            c = u.length - 1,
                            h = [],
                            p = {};
                        if (c < 0) return r;
                        for (o = 0; o <= c; o++) l = d(t, u[o], n, r, s, c !== o), h[o] = l.end;
                        for (a in e) p[a] = e[a];
                        return p.values = h, (r = new g(t, "bezier", 0, 0, l.pt, 2)).data = l, r.plugin = s, r.setRatio = f, 0 === p.autoRotate && (p.autoRotate = !0), !p.autoRotate || p.autoRotate instanceof Array || (o = !0 === p.autoRotate ? 0 : Number(p.autoRotate), p.autoRotate = null != l.end.left ? [
                            ["left", "top", "rotation", o, !1]
                        ] : null != l.end.x && [
                            ["x", "y", "rotation", o, !1]
                        ]), p.autoRotate && (n._transform || n._enableTransforms(!1), l.autoRotate = n._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, n._overwriteProps.push("rotation")), s._onInitTween(l.proxy, p, n._tween), r
                    }
                })
            }
        }, t._mod = function(t) {
            for (var e, i = this._overwriteProps, n = i.length; - 1 < --n;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
        }, t._kill = function(t) {
            var e, i, n = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e], delete this._func[e], i = n.length; - 1 < --i;) n[i] === e && n.splice(i, 1);
            if (n = this._autoRotate)
                for (i = n.length; - 1 < --i;) t[n[i][2]] && n.splice(i, 1);
            return this._super._kill.call(this, t)
        }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(s, B) {
            var f, C, k, g, q = function() {
                    s.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = q.prototype.setRatio
                },
                u = _gsScope._gsDefine.globals,
                m = {},
                t = q.prototype = new s("css");
            (t.constructor = q).version = "1.20.4", q.API = 2, q.defaultTransformPerspective = 0, q.defaultSkewType = "compensated", q.defaultSmoothOrigin = !0, t = "px", q.suffixMap = {
                top: t,
                right: t,
                bottom: t,
                left: t,
                width: t,
                height: t,
                fontSize: t,
                padding: t,
                margin: t,
                perspective: t,
                lineHeight: ""
            };
            var A, v, y, j, _, S, E, P, e, i, D = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                O = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                c = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                F = /(?:\d|\-|\+|=|#|\.)*/g,
                M = /opacity *= *([^)]*)/i,
                b = /opacity:([^;]*)/i,
                o = /alpha\(opacity *=.+?\)/i,
                w = /^(rgb|hsl)/,
                a = /([A-Z])/g,
                l = /-([a-z])/gi,
                T = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                h = function(t, e) {
                    return e.toUpperCase()
                },
                d = /(?:Left|Right|Width)/i,
                p = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                N = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                $ = /,(?=[^\)]*(?:\(|$))/gi,
                R = /[\s,\(]/i,
                L = Math.PI / 180,
                I = 180 / Math.PI,
                z = {},
                n = {
                    style: {}
                },
                H = _gsScope.document || {
                    createElement: function() {
                        return n
                    }
                },
                W = function(t, e) {
                    return H.createElementNS ? H.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : H.createElement(t)
                },
                X = W("div"),
                U = W("img"),
                r = q._internals = {
                    _specialProps: m
                },
                V = (_gsScope.navigator || {}).userAgent || "",
                Y = (e = V.indexOf("Android"), i = W("a"), y = -1 !== V.indexOf("Safari") && -1 === V.indexOf("Chrome") && (-1 === e || 3 < parseFloat(V.substr(e + 8, 2))), _ = y && parseFloat(V.substr(V.indexOf("Version/") + 8, 2)) < 6, j = -1 !== V.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (S = parseFloat(RegExp.$1)), !!i && (i.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(i.style.opacity))),
                G = function(t) {
                    return M.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                Q = function(t) {
                    _gsScope.console && console.log(t)
                },
                Z = "",
                K = "",
                J = function(t, e) {
                    var i, n, r = (e = e || X).style;
                    if (void 0 !== r[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; - 1 < --n && void 0 === r[i[n] + t];);
                    return 0 <= n ? (Z = "-" + (K = 3 === n ? "ms" : i[n]).toLowerCase() + "-", K + t) : null
                },
                tt = H.defaultView ? H.defaultView.getComputedStyle : function() {},
                et = q.getStyle = function(t, e, i, n, r) {
                    var s;
                    return Y || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || tt(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(a, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : G(t)
                },
                it = r.convertToPixels = function(t, e, i, n, r) {
                    if ("px" === n || !n && "lineHeight" !== e) return i;
                    if ("auto" === n || !i) return 0;
                    var s, o, a, l = d.test(e),
                        u = t,
                        c = X.style,
                        h = i < 0,
                        p = 1 === i;
                    if (h && (i = -i), p && (i *= 100), "lineHeight" !== e || n)
                        if ("%" === n && -1 !== e.indexOf("border")) s = i / 100 * (l ? t.clientWidth : t.clientHeight);
                        else {
                            if (c.cssText = "border:0 solid red;position:" + et(t, "position") + ";line-height:0;", "%" !== n && u.appendChild && "v" !== n.charAt(0) && "rem" !== n) c[l ? "borderLeftWidth" : "borderTopWidth"] = i + n;
                            else {
                                if (u = t.parentNode || H.body, -1 !== et(u, "display").indexOf("flex") && (c.position = "absolute"), o = u._gsCache, a = B.ticker.frame, o && l && o.time === a) return o.width * i / 100;
                                c[l ? "width" : "height"] = i + n
                            }
                            u.appendChild(X), s = parseFloat(X[l ? "offsetWidth" : "offsetHeight"]), u.removeChild(X), l && "%" === n && !1 !== q.cacheWidths && ((o = u._gsCache = u._gsCache || {}).time = a, o.width = s / i * 100), 0 !== s || r || (s = it(t, e, i, n, !0))
                        }
                    else o = tt(t).lineHeight, t.style.lineHeight = i, s = parseFloat(tt(t).lineHeight), t.style.lineHeight = o;
                    return p && (s /= 100), h ? -s : s
                },
                nt = r.calculateOffset = function(t, e, i) {
                    if ("absolute" !== et(t, "position", i)) return 0;
                    var n = "left" === e ? "Left" : "Top",
                        r = et(t, "margin" + n, i);
                    return t["offset" + n] - (it(t, e, parseFloat(r), r.replace(F, "")) || 0)
                },
                rt = function(t, e) {
                    var i, n, r, s = {};
                    if (e = e || tt(t, null))
                        if (i = e.length)
                            for (; - 1 < --i;) - 1 !== (r = e[i]).indexOf("-transform") && $t !== r || (s[r.replace(l, h)] = e.getPropertyValue(r));
                        else
                            for (i in e) - 1 !== i.indexOf("Transform") && Nt !== i || (s[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(l, h)] = e[i]);
                    return Y || (s.opacity = G(t)), n = Yt(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, jt && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                },
                st = function(t, e, i, n, r) {
                    var s, o, a, l = {},
                        u = t.style;
                    for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" != typeof s && "string" != typeof s || (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(c, "") ? s : 0 : nt(t, o), void 0 !== u[o] && (a = new xt(u, o, u[o], a))));
                    if (n)
                        for (o in n) "className" !== o && (l[o] = n[o]);
                    return {
                        difs: l,
                        firstMPT: a
                    }
                },
                ot = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                lt = function(t, e, i) {
                    if ("svg" === (t.nodeName + "").toLowerCase()) return (i || tt(t))[e] || 0;
                    if (t.getCTM && Xt(t)) return t.getBBox()[e] || 0;
                    var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        r = ot[e],
                        s = r.length;
                    for (i = i || tt(t, null); - 1 < --s;) n -= parseFloat(et(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(et(t, "border" + r[s] + "Width", i, !0)) || 0;
                    return n
                },
                ut = function(t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    null != t && "" !== t || (t = "0 0");
                    var i, n = t.split(" "),
                        r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                        s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                    if (3 < n.length && !e) {
                        for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(ut(n[i]));
                        return t.join(",")
                    }
                    return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + s + (2 < n.length ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(c, "")), e.oy = parseFloat(s.replace(c, "")), e.v = t), e || t
                },
                ct = function(t, e) {
                    return "function" == typeof t && (t = t(P, E)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                },
                ht = function(t, e) {
                    return "function" == typeof t && (t = t(P, E)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                },
                pt = function(t, e, i, n) {
                    var r, s, o, a;
                    return "function" == typeof t && (t = t(P, E)), null == t ? o = e : "number" == typeof t ? o = t : (360, r = t.split("_"), s = ((a = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (a ? 0 : e), r.length && (n && (n[i] = e + s), -1 !== t.indexOf("short") && (s %= 360) !== s % 180 && (s = s < 0 ? s + 360 : s - 360), -1 !== t.indexOf("_cw") && s < 0 ? s = (s + 3599999999640) % 360 - 360 * (s / 360 | 0) : -1 !== t.indexOf("ccw") && 0 < s && (s = (s - 3599999999640) % 360 - 360 * (s / 360 | 0))), o = e + s), o < 1e-6 && -1e-6 < o && (o = 0), o
                },
                dt = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                ft = function(t, e, i) {
                    return 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                },
                gt = q.parseColor = function(t, e) {
                    var i, n, r, s, o, a, l, u, c, h, p;
                    if (t)
                        if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                        else {
                            if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), dt[t]) i = dt[t];
                            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (r = t.charAt(2)) + r + (s = t.charAt(3)) + s), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                            else if ("hsl" === t.substr(0, 3))
                                if (i = p = t.match(D), e) {
                                    if (-1 !== t.indexOf("=")) return t.match(O)
                                } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, n = 2 * (l = Number(i[2]) / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), 3 < i.length && (i[3] = Number(i[3])), i[0] = ft(o + 1 / 3, n, r), i[1] = ft(o, n, r), i[2] = ft(o - 1 / 3, n, r);
                            else i = t.match(D) || dt.transparent;
                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), 3 < i.length && (i[3] = Number(i[3]))
                        }
                    else i = dt.black;
                    return e && !p && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, l = ((u = Math.max(n, r, s)) + (c = Math.min(n, r, s))) / 2, u === c ? o = a = 0 : (h = u - c, a = .5 < l ? h / (2 - u - c) : h / (u + c), o = u === n ? (r - s) / h + (r < s ? 6 : 0) : u === r ? (s - n) / h + 2 : (n - r) / h + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                },
                mt = function(t, e) {
                    var i, n, r, s = t.match(vt) || [],
                        o = 0,
                        a = "";
                    if (!s.length) return t;
                    for (i = 0; i < s.length; i++) n = s[i], o += (r = t.substr(o, t.indexOf(n, o) - o)).length + n.length, 3 === (n = gt(n, e)).length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                    return a + t.substr(o)
                },
                vt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in dt) vt += "|" + t + "\\b";
            vt = new RegExp(vt + ")", "gi"), q.colorStringFilter = function(t) {
                var e, i = t[0] + " " + t[1];
                vt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = mt(t[0], e), t[1] = mt(t[1], e)), vt.lastIndex = 0
            }, B.defaultStringFilter || (B.defaultStringFilter = q.colorStringFilter);
            var yt = function(t, e, s, o) {
                    if (null == t) return function(t) {
                        return t
                    };
                    var a, l = e ? (t.match(vt) || [""])[0] : "",
                        u = t.split(l).join("").match(x) || [],
                        c = t.substr(0, t.indexOf(u[0])),
                        h = ")" === t.charAt(t.length - 1) ? ")" : "",
                        p = -1 !== t.indexOf(" ") ? " " : ",",
                        d = u.length,
                        f = 0 < d ? u[0].replace(D, "") : "";
                    return d ? a = e ? function(t) {
                        var e, i, n, r;
                        if ("number" == typeof t) t += f;
                        else if (o && $.test(t)) {
                            for (r = t.replace($, "|").split("|"), n = 0; n < r.length; n++) r[n] = a(r[n]);
                            return r.join(",")
                        }
                        if (e = (t.match(vt) || [l])[0], n = (i = t.split(e).join("").match(x) || []).length, d > n--)
                            for (; ++n < d;) i[n] = s ? i[(n - 1) / 2 | 0] : u[n];
                        return c + i.join(p) + p + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                        var e, i, n;
                        if ("number" == typeof t) t += f;
                        else if (o && $.test(t)) {
                            for (i = t.replace($, "|").split("|"), n = 0; n < i.length; n++) i[n] = a(i[n]);
                            return i.join(",")
                        }
                        if (n = (e = t.match(x) || []).length, d > n--)
                            for (; ++n < d;) e[n] = s ? e[(n - 1) / 2 | 0] : u[n];
                        return c + e.join(p) + h
                    } : function(t) {
                        return t
                    }
                },
                _t = function(u) {
                    return u = u.split(","),
                        function(t, e, i, n, r, s, o) {
                            var a, l = (e + "").split(" ");
                            for (o = {}, a = 0; a < 4; a++) o[u[a]] = l[a] = l[a] || l[(a - 1) / 2 >> 0];
                            return n.parse(t, o, r, s)
                        }
                },
                xt = (r._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT; l;) e = a[l.v], l.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), l.t[l.p] = e, l = l._next;
                    if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                        for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                            if ((i = l.t).type) {
                                if (1 === i.type) {
                                    for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                    i[s] = r
                                }
                            } else i[s] = i.s + i.xs0;
                            l = l._next
                        }
                }, function(t, e, i, n, r) {
                    this.t = t, this.p = e, this.v = i, this.r = r, n && ((n._prev = this)._next = n)
                }),
                bt = (r._parseToProxy = function(t, e, i, n, r, s) {
                    var o, a, l, u, c, h = n,
                        p = {},
                        d = {},
                        f = i._transform,
                        g = z;
                    for (i._transform = null, z = e, n = c = i.parse(t, e, n, r), z = g, s && (i._transform = f, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                        if (n.type <= 1 && (d[a = n.p] = n.s + n.c, p[a] = n.s, s || (u = new xt(n, "s", a, u, n.r), n.c = 0), 1 === n.type))
                            for (o = n.l; 0 < --o;) l = "xn" + o, d[a = n.p + "_" + l] = n.data[l], p[a] = n[l], s || (u = new xt(n, l, a, u, n.rxp[l]));
                        n = n._next
                    }
                    return {
                        proxy: p,
                        end: d,
                        firstMPT: u,
                        pt: c
                    }
                }, r.CSSPropTween = function(t, e, i, n, r, s, o, a, l, u, c) {
                    this.t = t, this.p = e, this.s = i, this.c = n, this.n = o || e, t instanceof bt || g.push(this.n), this.r = a, this.type = s || 0, l && (this.pr = l, f = !0), this.b = void 0 === u ? i : u, this.e = void 0 === c ? i + n : c, r && ((this._next = r)._prev = this)
                }),
                wt = function(t, e, i, n, r, s) {
                    var o = new bt(t, e, i, n - i, r, -1, s);
                    return o.b = i, o.e = o.xs0 = n, o
                },
                Tt = q.parseComplex = function(t, e, i, n, r, s, o, a, l, u) {
                    i = i || s || "", "function" == typeof n && (n = n(P, E)), o = new bt(t, e, 0, 0, o, u ? 2 : 1, null, !1, a, i, n), n += "", r && vt.test(n + i) && (n = [i, n], q.colorStringFilter(n), i = n[0], n = n[1]);
                    var c, h, p, d, f, g, m, v, y, _, x, b, w, T = i.split(", ").join(",").split(" "),
                        C = n.split(", ").join(",").split(" "),
                        S = T.length,
                        k = !1 !== A;
                    for (-1 === n.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (T = T.join(" ").replace($, ", ").split(" "), C = C.join(" ").replace($, ", ").split(" ")) : (T = T.join(" ").split(",").join(", ").split(" "), C = C.join(" ").split(",").join(", ").split(" ")), S = T.length), S !== C.length && (S = (T = (s || "").split(" ")).length), o.plugin = l, o.setRatio = u, c = vt.lastIndex = 0; c < S; c++)
                        if (d = T[c], f = C[c], (v = parseFloat(d)) || 0 === v) o.appendXtra("", v, ct(f, v), f.replace(O, ""), k && -1 !== f.indexOf("px"), !0);
                        else if (r && vt.test(d)) b = ")" + ((b = f.indexOf(")") + 1) ? f.substr(b) : ""), w = -1 !== f.indexOf("hsl") && Y, _ = f, d = gt(d, w), f = gt(f, w), (y = 6 < d.length + f.length) && !Y && 0 === f[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(C[c]).join("transparent")) : (Y || (y = !1), w ? o.appendXtra(_.substr(0, _.indexOf("hsl")) + (y ? "hsla(" : "hsl("), d[0], ct(f[0], d[0]), ",", !1, !0).appendXtra("", d[1], ct(f[1], d[1]), "%,", !1).appendXtra("", d[2], ct(f[2], d[2]), y ? "%," : "%" + b, !1) : o.appendXtra(_.substr(0, _.indexOf("rgb")) + (y ? "rgba(" : "rgb("), d[0], f[0] - d[0], ",", !0, !0).appendXtra("", d[1], f[1] - d[1], ",", !0).appendXtra("", d[2], f[2] - d[2], y ? "," : b, !0), y && (d = d.length < 4 ? 1 : d[3], o.appendXtra("", d, (f.length < 4 ? 1 : f[3]) - d, b, !1))), vt.lastIndex = 0;
                    else if (g = d.match(D)) {
                        if (!(m = f.match(O)) || m.length !== g.length) return o;
                        for (h = p = 0; h < g.length; h++) x = g[h], _ = d.indexOf(x, p), o.appendXtra(d.substr(p, _ - p), Number(x), ct(m[h], x), "", k && "px" === d.substr(_ + x.length, 2), 0 === h), p = _ + x.length;
                        o["xs" + o.l] += d.substr(p)
                    } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + f : f;
                    if (-1 !== n.indexOf("=") && o.data) {
                        for (b = o.xs0 + o.data.s, c = 1; c < o.l; c++) b += o["xs" + c] + o.data["xn" + c];
                        o.e = b + o["xs" + c]
                    }
                    return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                },
                Ct = 9;
            for ((t = bt.prototype).l = t.pr = 0; 0 < --Ct;) t["xn" + Ct] = 0, t["xs" + Ct] = "";
            t.xs0 = "", t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null, t.appendXtra = function(t, e, i, n, r, s) {
                var o = this,
                    a = o.l;
                return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", 0 < a ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new bt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0)) : (o.data = {
                    s: e + i
                }, o.rxp = {}, o.s = e, o.c = i, o.r = r), o) : (o["xs" + a] += e + (n || ""), o)
            };
            var St = function(t, e) {
                    e = e || {}, this.p = e.prefix && J(t) || t, m[t] = m[this.p] = this, this.format = e.formatter || yt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                },
                kt = r._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var n, r = t.split(","),
                        s = e.defaultValue;
                    for (i = i || [s], n = 0; n < r.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, new St(r[n], e)
                },
                At = r._registerPluginProp = function(t) {
                    if (!m[t]) {
                        var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        kt(t, {
                            parser: function(t, e, i, n, r, s, o) {
                                var a = u.com.greensock.plugins[l];
                                return a ? (a._cssRegister(), m[i].parse(t, e, i, n, r, s, o)) : (Q("Error: " + l + " js file not loaded."), r)
                            }
                        })
                    }
                };
            (t = St.prototype).parseComplex = function(t, e, i, n, r, s) {
                var o, a, l, u, c, h, p = this.keyword;
                if (this.multi && ($.test(i) || $.test(e) ? (a = e.replace($, "|").split("|"), l = i.replace($, "|").split("|")) : p && (a = [e], l = [i])), l) {
                    for (u = l.length > a.length ? l.length : a.length, o = 0; o < u; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, p && (c = e.indexOf(p)) !== (h = i.indexOf(p)) && (-1 === h ? a[o] = a[o].split(p).join("") : -1 === c && (a[o] += " " + p));
                    e = a.join(", "), i = l.join(", ")
                }
                return Tt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
            }, t.parse = function(t, e, i, n, r, s, o) {
                return this.parseComplex(t.style, this.format(et(t, this.p, k, !1, this.dflt)), this.format(e), r, s)
            }, q.registerSpecialProp = function(t, l, u) {
                kt(t, {
                    parser: function(t, e, i, n, r, s, o) {
                        var a = new bt(t, i, 0, 0, r, 2, i, !1, u);
                        return a.plugin = s, a.setRatio = l(t, e, n._tween, i), a
                    },
                    priority: u
                })
            }, q.useSVGTransformAttr = !0;
            var Et, Pt, Dt, Ot, Ft, Mt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Nt = J("transform"),
                $t = Z + "transform",
                Rt = J("transformOrigin"),
                jt = null !== J("perspective"),
                Lt = r.Transform = function() {
                    this.perspective = parseFloat(q.defaultTransformPerspective) || 0, this.force3D = !(!1 === q.defaultForce3D || !jt) && (q.defaultForce3D || "auto")
                },
                zt = _gsScope.SVGElement,
                Bt = function(t, e, i) {
                    var n, r = H.createElementNS("http://www.w3.org/2000/svg", t),
                        s = /([a-z])([A-Z])/g;
                    for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                    return e.appendChild(r), r
                },
                qt = H.documentElement || {},
                It = (Ft = S || /Android/i.test(V) && !_gsScope.chrome, H.createElementNS && !Ft && (Pt = Bt("svg", qt), Ot = (Dt = Bt("rect", Pt, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, Dt.style[Rt] = "50% 50%", Dt.style[Nt] = "scaleX(0.5)", Ft = Ot === Dt.getBoundingClientRect().width && !(j && jt), qt.removeChild(Pt)), Ft),
                Ht = function(t, e, i, n, r, s) {
                    var o, a, l, u, c, h, p, d, f, g, m, v, y, _, x = t._gsTransform,
                        b = Vt(t, !0);
                    x && (y = x.xOrigin, _ = x.yOrigin), (!n || (o = n.split(" ")).length < 2) && (0 === (p = t.getBBox()).x && 0 === p.y && p.width + p.height === 0 && (p = {
                        x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                        y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                        width: 0,
                        height: 0
                    }), o = [(-1 !== (e = ut(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = u = parseFloat(o[0]), i.yOrigin = c = parseFloat(o[1]), n && b !== Ut && (h = b[0], p = b[1], d = b[2], f = b[3], g = b[4], m = b[5], (v = h * f - p * d) && (a = u * (f / v) + c * (-d / v) + (d * m - f * g) / v, l = u * (-p / v) + c * (h / v) - (h * m - p * g) / v, u = i.xOrigin = o[0] = a, c = i.yOrigin = o[1] = l)), x && (s && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), r || !1 !== r && !1 !== q.defaultSmoothOrigin ? (a = u - y, l = c - _, x.xOffset += a * b[0] + l * b[2] - a, x.yOffset += a * b[1] + l * b[3] - l) : x.xOffset = x.yOffset = 0), s || t.setAttribute("data-svg-origin", o.join(" "))
                },
                Wt = function(t) {
                    var e, i = W("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        n = this.parentNode,
                        r = this.nextSibling,
                        s = this.style.cssText;
                    if (qt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                        e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Wt
                    } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                    return r ? n.insertBefore(this, r) : n.appendChild(this), qt.removeChild(i), this.style.cssText = s, e
                },
                Xt = function(t) {
                    return !(!zt || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(e) {
                        try {
                            return e.getBBox()
                        } catch (t) {
                            return Wt.call(e, !0)
                        }
                    }(t))
                },
                Ut = [1, 0, 0, 1, 0, 0],
                Vt = function(t, e) {
                    var i, n, r, s, o, a, l = t._gsTransform || new Lt,
                        u = t.style;
                    if (Nt ? n = et(t, $t, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(p)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Nt || !(a = !tt(t) || "none" === tt(t).display) && t.parentNode || (a && (s = u.display, u.display = "block"), t.parentNode || (o = 1, qt.appendChild(t)), i = !(n = et(t, $t, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, s ? u.display = s : a && Kt(u, "display"), o && qt.removeChild(t)), (l.svg || t.getCTM && Xt(t)) && (i && -1 !== (u[Nt] + "").indexOf("matrix") && (n = u[Nt], i = 0), r = t.getAttribute("transform"), i && r && (n = "matrix(" + (r = t.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")", i = 0)), i) return Ut;
                    for (r = (n || "").match(D) || [], Ct = r.length; - 1 < --Ct;) s = Number(r[Ct]), r[Ct] = (o = s - (s |= 0)) ? (1e5 * o + (o < 0 ? -.5 : .5) | 0) / 1e5 + s : s;
                    return e && 6 < r.length ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                },
                Yt = r.getTransform = function(t, e, i, n) {
                    if (t._gsTransform && i && !n) return t._gsTransform;
                    var r, s, o, a, l, u, c = i && t._gsTransform || new Lt,
                        h = c.scaleX < 0,
                        p = jt && (parseFloat(et(t, Rt, e, !1, "0 0 0").split(" ")[2]) || c.zOrigin) || 0,
                        d = parseFloat(q.defaultTransformPerspective) || 0;
                    if (c.svg = !(!t.getCTM || !Xt(t)), c.svg && (Ht(t, et(t, Rt, e, !1, "50% 50%") + "", c, t.getAttribute("data-svg-origin")), Et = q.useSVGTransformAttr || It), (r = Vt(t)) !== Ut) {
                        if (16 === r.length) {
                            var f, g, m, v, y, _ = r[0],
                                x = r[1],
                                b = r[2],
                                w = r[3],
                                T = r[4],
                                C = r[5],
                                S = r[6],
                                k = r[7],
                                A = r[8],
                                E = r[9],
                                P = r[10],
                                D = r[12],
                                O = r[13],
                                F = r[14],
                                M = r[11],
                                N = Math.atan2(S, P);
                            c.zOrigin && (D = A * (F = -c.zOrigin) - r[12], O = E * F - r[13], F = P * F + c.zOrigin - r[14]), c.rotationX = N * I, N && (f = T * (v = Math.cos(-N)) + A * (y = Math.sin(-N)), g = C * v + E * y, m = S * v + P * y, A = T * -y + A * v, E = C * -y + E * v, P = S * -y + P * v, M = k * -y + M * v, T = f, C = g, S = m), N = Math.atan2(-b, P), c.rotationY = N * I, N && (g = x * (v = Math.cos(-N)) - E * (y = Math.sin(-N)), m = b * v - P * y, E = x * y + E * v, P = b * y + P * v, M = w * y + M * v, _ = f = _ * v - A * y, x = g, b = m), N = Math.atan2(x, _), c.rotation = N * I, N && (f = _ * (v = Math.cos(N)) + x * (y = Math.sin(N)), g = T * v + C * y, m = A * v + E * y, x = x * v - _ * y, C = C * v - T * y, E = E * v - A * y, _ = f, T = g, A = m), c.rotationX && 359.9 < Math.abs(c.rotationX) + Math.abs(c.rotation) && (c.rotationX = c.rotation = 0, c.rotationY = 180 - c.rotationY), N = Math.atan2(T, C), c.scaleX = (1e5 * Math.sqrt(_ * _ + x * x + b * b) + .5 | 0) / 1e5, c.scaleY = (1e5 * Math.sqrt(C * C + S * S) + .5 | 0) / 1e5, c.scaleZ = (1e5 * Math.sqrt(A * A + E * E + P * P) + .5 | 0) / 1e5, _ /= c.scaleX, T /= c.scaleY, x /= c.scaleX, C /= c.scaleY, 2e-5 < Math.abs(N) ? (c.skewX = N * I, T = 0, "simple" !== c.skewType && (c.scaleY *= 1 / Math.cos(N))) : c.skewX = 0, c.perspective = M ? 1 / (M < 0 ? -M : M) : 0, c.x = D, c.y = O, c.z = F, c.svg && (c.x -= c.xOrigin - (c.xOrigin * _ - c.yOrigin * T), c.y -= c.yOrigin - (c.yOrigin * x - c.xOrigin * C))
                        } else if (!jt || n || !r.length || c.x !== r[4] || c.y !== r[5] || !c.rotationX && !c.rotationY) {
                            var $ = 6 <= r.length,
                                R = $ ? r[0] : 1,
                                j = r[1] || 0,
                                L = r[2] || 0,
                                z = $ ? r[3] : 1;
                            c.x = r[4] || 0, c.y = r[5] || 0, o = Math.sqrt(R * R + j * j), a = Math.sqrt(z * z + L * L), l = R || j ? Math.atan2(j, R) * I : c.rotation || 0, u = L || z ? Math.atan2(L, z) * I + l : c.skewX || 0, c.scaleX = o, c.scaleY = a, c.rotation = l, c.skewX = u, jt && (c.rotationX = c.rotationY = c.z = 0, c.perspective = d, c.scaleZ = 1), c.svg && (c.x -= c.xOrigin - (c.xOrigin * R + c.yOrigin * L), c.y -= c.yOrigin - (c.xOrigin * j + c.yOrigin * z))
                        }
                        for (s in 90 < Math.abs(c.skewX) && Math.abs(c.skewX) < 270 && (h ? (c.scaleX *= -1, c.skewX += c.rotation <= 0 ? 180 : -180, c.rotation += c.rotation <= 0 ? 180 : -180) : (c.scaleY *= -1, c.skewX += c.skewX <= 0 ? 180 : -180)), c.zOrigin = p, c) c[s] < 2e-5 && -2e-5 < c[s] && (c[s] = 0)
                    }
                    return i && (t._gsTransform = c).svg && (Et && t.style[Nt] ? B.delayedCall(.001, function() {
                        Kt(t.style, Nt)
                    }) : !Et && t.getAttribute("transform") && B.delayedCall(.001, function() {
                        t.removeAttribute("transform")
                    })), c
                },
                Gt = function(t) {
                    var e, i, n = this.data,
                        r = -n.rotation * L,
                        s = r + n.skewX * L,
                        o = (Math.cos(r) * n.scaleX * 1e5 | 0) / 1e5,
                        a = (Math.sin(r) * n.scaleX * 1e5 | 0) / 1e5,
                        l = (Math.sin(s) * -n.scaleY * 1e5 | 0) / 1e5,
                        u = (Math.cos(s) * n.scaleY * 1e5 | 0) / 1e5,
                        c = this.t.style,
                        h = this.t.currentStyle;
                    if (h) {
                        i = a, a = -l, l = -i, e = h.filter, c.filter = "";
                        var p, d, f = this.t.offsetWidth,
                            g = this.t.offsetHeight,
                            m = "absolute" !== h.position,
                            v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + a + ", M21=" + l + ", M22=" + u,
                            y = n.x + f * n.xPercent / 100,
                            _ = n.y + g * n.yPercent / 100;
                        if (null != n.ox && (y += (p = (n.oxp ? f * n.ox * .01 : n.ox) - f / 2) - (p * o + (d = (n.oyp ? g * n.oy * .01 : n.oy) - g / 2) * a), _ += d - (p * l + d * u)), v += m ? ", Dx=" + ((p = f / 2) - (p * o + (d = g / 2) * a) + y) + ", Dy=" + (d - (p * l + d * u) + _) + ")" : ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(N, v) : c.filter = v + " " + e, 0 !== t && 1 !== t || 1 === o && 0 === a && 0 === l && 1 === u && (m && -1 === v.indexOf("Dx=0, Dy=0") || M.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !m) {
                            var x, b, w, T = S < 8 ? 1 : -1;
                            for (p = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((f - ((o < 0 ? -o : o) * f + (a < 0 ? -a : a) * g)) / 2 + y), n.ieOffsetY = Math.round((g - ((u < 0 ? -u : u) * g + (l < 0 ? -l : l) * f)) / 2 + _), Ct = 0; Ct < 4; Ct++) w = (i = -1 !== (x = h[b = at[Ct]]).indexOf("px") ? parseFloat(x) : it(this.t, b, parseFloat(x), x.replace(F, "")) || 0) !== n[b] ? Ct < 2 ? -n.ieOffsetX : -n.ieOffsetY : Ct < 2 ? p - n.ieOffsetX : d - n.ieOffsetY, c[b] = (n[b] = Math.round(i - w * (0 === Ct || 2 === Ct ? 1 : T))) + "px"
                        }
                    }
                },
                Qt = r.set3DTransformRatio = r.setTransformRatio = function(t) {
                    var e, i, n, r, s, o, a, l, u, c, h, p, d, f, g, m, v, y, _, x, b = this.data,
                        w = this.t.style,
                        T = b.rotation,
                        C = b.rotationX,
                        S = b.rotationY,
                        k = b.scaleX,
                        A = b.scaleY,
                        E = b.scaleZ,
                        P = b.x,
                        D = b.y,
                        O = b.z,
                        F = b.svg,
                        M = b.perspective,
                        N = b.force3D,
                        $ = b.skewY,
                        R = b.skewX;
                    if ($ && (R += $, T += $), !((1 !== t && 0 !== t || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || O || M || S || C || 1 !== E) || Et && F || !jt) T || R || F ? (T *= L, x = R * L, 1e5, i = Math.cos(T) * k, s = Math.sin(T) * k, n = Math.sin(T - x) * -A, o = Math.cos(T - x) * A, x && "simple" === b.skewType && (e = Math.tan(x - $ * L), n *= e = Math.sqrt(1 + e * e), o *= e, $ && (e = Math.tan($ * L), i *= e = Math.sqrt(1 + e * e), s *= e)), F && (P += b.xOrigin - (b.xOrigin * i + b.yOrigin * n) + b.xOffset, D += b.yOrigin - (b.xOrigin * s + b.yOrigin * o) + b.yOffset, Et && (b.xPercent || b.yPercent) && (g = this.t.getBBox(), P += .01 * b.xPercent * g.width, D += .01 * b.yPercent * g.height), P < (g = 1e-6) && -g < P && (P = 0), D < g && -g < D && (D = 0)), _ = (1e5 * i | 0) / 1e5 + "," + (1e5 * s | 0) / 1e5 + "," + (1e5 * n | 0) / 1e5 + "," + (1e5 * o | 0) / 1e5 + "," + P + "," + D + ")", F && Et ? this.t.setAttribute("transform", "matrix(" + _) : w[Nt] = (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix(" : "matrix(") + _) : w[Nt] = (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix(" : "matrix(") + k + ",0,0," + A + "," + P + "," + D + ")";
                    else {
                        if (j && (k < (g = 1e-4) && -g < k && (k = E = 2e-5), A < g && -g < A && (A = E = 2e-5), !M || b.z || b.rotationX || b.rotationY || (M = 0)), T || R) T *= L, m = i = Math.cos(T), v = s = Math.sin(T), R && (T -= R * L, m = Math.cos(T), v = Math.sin(T), "simple" === b.skewType && (e = Math.tan((R - $) * L), m *= e = Math.sqrt(1 + e * e), v *= e, b.skewY && (e = Math.tan($ * L), i *= e = Math.sqrt(1 + e * e), s *= e))), n = -v, o = m;
                        else {
                            if (!(S || C || 1 !== E || M || F)) return void(w[Nt] = (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) translate3d(" : "translate3d(") + P + "px," + D + "px," + O + "px)" + (1 !== k || 1 !== A ? " scale(" + k + "," + A + ")" : ""));
                            i = o = 1, n = s = 0
                        }
                        c = 1, r = a = l = u = h = p = 0, d = M ? -1 / M : 0, f = b.zOrigin, g = 1e-6, ",", "0", (T = S * L) && (m = Math.cos(T), h = d * (l = -(v = Math.sin(T))), r = i * v, a = s * v, d *= c = m, i *= m, s *= m), (T = C * L) && (e = n * (m = Math.cos(T)) + r * (v = Math.sin(T)), y = o * m + a * v, u = c * v, p = d * v, r = n * -v + r * m, a = o * -v + a * m, c *= m, d *= m, n = e, o = y), 1 !== E && (r *= E, a *= E, c *= E, d *= E), 1 !== A && (n *= A, o *= A, u *= A, p *= A), 1 !== k && (i *= k, s *= k, l *= k, h *= k), (f || F) && (f && (P += r * -f, D += a * -f, O += c * -f + f), F && (P += b.xOrigin - (b.xOrigin * i + b.yOrigin * n) + b.xOffset, D += b.yOrigin - (b.xOrigin * s + b.yOrigin * o) + b.yOffset), P < g && -g < P && (P = "0"), D < g && -g < D && (D = "0"), O < g && -g < O && (O = 0)), _ = b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix3d(" : "matrix3d(", _ += (i < g && -g < i ? "0" : i) + "," + (s < g && -g < s ? "0" : s) + "," + (l < g && -g < l ? "0" : l), _ += "," + (h < g && -g < h ? "0" : h) + "," + (n < g && -g < n ? "0" : n) + "," + (o < g && -g < o ? "0" : o), C || S || 1 !== E ? (_ += "," + (u < g && -g < u ? "0" : u) + "," + (p < g && -g < p ? "0" : p) + "," + (r < g && -g < r ? "0" : r), _ += "," + (a < g && -g < a ? "0" : a) + "," + (c < g && -g < c ? "0" : c) + "," + (d < g && -g < d ? "0" : d) + ",") : _ += ",0,0,0,0,1,0,", _ += P + "," + D + "," + O + "," + (M ? 1 + -O / M : 1) + ")", w[Nt] = _
                    }
                };
            (t = Lt.prototype).x = t.y = t.z = t.skewX = t.skewY = t.rotation = t.rotationX = t.rotationY = t.zOrigin = t.xPercent = t.yPercent = t.xOffset = t.yOffset = 0, t.scaleX = t.scaleY = t.scaleZ = 1, kt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(t, e, i, n, r, s, o) {
                    if (n._lastParsedTransform === o) return r;
                    var a, l = (n._lastParsedTransform = o).scale && "function" == typeof o.scale ? o.scale : 0;
                    "function" == typeof o[i] && (a = o[i], o[i] = e), l && (o.scale = l(P, t));
                    var u, c, h, p, d, f, g, m, v, y = t._gsTransform,
                        _ = t.style,
                        x = Mt.length,
                        b = o,
                        w = {},
                        T = "transformOrigin",
                        C = Yt(t, k, !0, b.parseTransform),
                        S = b.transform && ("function" == typeof b.transform ? b.transform(P, E) : b.transform);
                    if (C.skewType = b.skewType || C.skewType || q.defaultSkewType, n._transform = C, S && "string" == typeof S && Nt)(c = X.style)[Nt] = S, c.display = "block", c.position = "absolute", H.body.appendChild(X), u = Yt(X, null, !1), "simple" === C.skewType && (u.scaleY *= Math.cos(u.skewX * L)), C.svg && (f = C.xOrigin, g = C.yOrigin, u.x -= C.xOffset, u.y -= C.yOffset, (b.transformOrigin || b.svgOrigin) && (S = {}, Ht(t, ut(b.transformOrigin), S, b.svgOrigin, b.smoothOrigin, !0), f = S.xOrigin, g = S.yOrigin, u.x -= S.xOffset - C.xOffset, u.y -= S.yOffset - C.yOffset), (f || g) && (m = Vt(X, !0), u.x -= f - (f * m[0] + g * m[2]), u.y -= g - (f * m[1] + g * m[3]))), H.body.removeChild(X), u.perspective || (u.perspective = C.perspective), null != b.xPercent && (u.xPercent = ht(b.xPercent, C.xPercent)), null != b.yPercent && (u.yPercent = ht(b.yPercent, C.yPercent));
                    else if ("object" == typeof b) {
                        if (u = {
                                scaleX: ht(null != b.scaleX ? b.scaleX : b.scale, C.scaleX),
                                scaleY: ht(null != b.scaleY ? b.scaleY : b.scale, C.scaleY),
                                scaleZ: ht(b.scaleZ, C.scaleZ),
                                x: ht(b.x, C.x),
                                y: ht(b.y, C.y),
                                z: ht(b.z, C.z),
                                xPercent: ht(b.xPercent, C.xPercent),
                                yPercent: ht(b.yPercent, C.yPercent),
                                perspective: ht(b.transformPerspective, C.perspective)
                            }, null != (d = b.directionalRotation))
                            if ("object" == typeof d)
                                for (c in d) b[c] = d[c];
                            else b.rotation = d;
                        "string" == typeof b.x && -1 !== b.x.indexOf("%") && (u.x = 0, u.xPercent = ht(b.x, C.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (u.y = 0, u.yPercent = ht(b.y, C.yPercent)), u.rotation = pt("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : C.rotation, C.rotation, "rotation", w), jt && (u.rotationX = pt("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", w), u.rotationY = pt("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", w)), u.skewX = pt(b.skewX, C.skewX), u.skewY = pt(b.skewY, C.skewY)
                    }
                    for (jt && null != b.force3D && (C.force3D = b.force3D, p = !0), (h = C.force3D || C.z || C.rotationX || C.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == b.scale || (u.scaleZ = 1); - 1 < --x;)(1e-6 < (S = u[v = Mt[x]] - C[v]) || S < -1e-6 || null != b[v] || null != z[v]) && (p = !0, r = new bt(C, v, C[v], S, r), v in w && (r.e = w[v]), r.xs0 = 0, r.plugin = s, n._overwriteProps.push(r.n));
                    return S = b.transformOrigin, C.svg && (S || b.svgOrigin) && (f = C.xOffset, g = C.yOffset, Ht(t, ut(S), u, b.svgOrigin, b.smoothOrigin), r = wt(C, "xOrigin", (y ? C : u).xOrigin, u.xOrigin, r, T), r = wt(C, "yOrigin", (y ? C : u).yOrigin, u.yOrigin, r, T), f === C.xOffset && g === C.yOffset || (r = wt(C, "xOffset", y ? f : C.xOffset, C.xOffset, r, T), r = wt(C, "yOffset", y ? g : C.yOffset, C.yOffset, r, T)), S = "0px 0px"), (S || jt && h && C.zOrigin) && (Nt ? (p = !0, v = Rt, S = (S || et(t, v, k, !1, "50% 50%")) + "", (r = new bt(_, v, 0, 0, r, -1, T)).b = _[v], r.plugin = s, jt ? (c = C.zOrigin, S = S.split(" "), C.zOrigin = (2 < S.length && (0 === c || "0px" !== S[2]) ? parseFloat(S[2]) : c) || 0, r.xs0 = r.e = S[0] + " " + (S[1] || "50%") + " 0px", (r = new bt(C, "zOrigin", 0, 0, r, -1, r.n)).b = c, r.xs0 = r.e = C.zOrigin) : r.xs0 = r.e = S) : ut(S + "", C)), p && (n._transformType = C.svg && Et || !h && 3 !== this._transformType ? 2 : 3), a && (o[i] = a), l && (o.scale = l), r
                },
                prefix: !0
            }), kt("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), kt("borderRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, n, r, s) {
                    e = this.format(e);
                    var o, a, l, u, c, h, p, d, f, g, m, v, y, _, x, b, w = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        T = t.style;
                    for (f = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), o = e.split(" "), a = 0; a < w.length; a++) this.p.indexOf("border") && (w[a] = J(w[a])), -1 !== (c = u = et(t, w[a], k, !1, "0px")).indexOf(" ") && (c = (u = c.split(" "))[0], u = u[1]), h = l = o[a], p = parseFloat(c), v = c.substr((p + "").length), (y = "=" === h.charAt(1)) ? (d = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), d *= parseFloat(h), m = h.substr((d + "").length - (d < 0 ? 1 : 0)) || "") : (d = parseFloat(h), m = h.substr((d + "").length)), "" === m && (m = C[i] || v), m !== v && (_ = it(t, "borderLeft", p, v), x = it(t, "borderTop", p, v), "%" === m ? (c = _ / f * 100 + "%", u = x / g * 100 + "%") : "em" === m ? (c = _ / (b = it(t, "borderLeft", 1, "em")) + "em", u = x / b + "em") : (c = _ + "px", u = x + "px"), y && (h = parseFloat(c) + d + m, l = parseFloat(u) + d + m)), r = Tt(T, w[a], c + " " + u, h + " " + l, !1, "0px", r);
                    return r
                },
                prefix: !0,
                formatter: yt("0px 0px 0px 0px", !1, !0)
            }), kt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, n, r, s) {
                    return Tt(t.style, i, this.format(et(t, i, k, !1, "0px 0px")), this.format(e), !1, "0px", r)
                },
                prefix: !0,
                formatter: yt("0px 0px", !1, !0)
            }), kt("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, n, r, s) {
                    var o, a, l, u, c, h, p = "background-position",
                        d = k || tt(t, null),
                        f = this.format((d ? S ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        g = this.format(e);
                    if (-1 !== f.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (h = et(t, "backgroundImage").replace(T, "")) && "none" !== h) {
                        for (o = f.split(" "), a = g.split(" "), U.setAttribute("src", h), l = 2; - 1 < --l;)(u = -1 !== (f = o[l]).indexOf("%")) !== (-1 !== a[l].indexOf("%")) && (c = 0 === l ? t.offsetWidth - U.width : t.offsetHeight - U.height, o[l] = u ? parseFloat(f) / 100 * c + "px" : parseFloat(f) / c * 100 + "%");
                        f = o.join(" ")
                    }
                    return this.parseComplex(t.style, f, g, r, s)
                },
                formatter: ut
            }), kt("backgroundSize", {
                defaultValue: "0 0",
                formatter: function(t) {
                    return ut(-1 === (t += "").indexOf(" ") ? t + " " + t : t)
                }
            }), kt("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), kt("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), kt("transformStyle", {
                prefix: !0
            }), kt("backfaceVisibility", {
                prefix: !0
            }), kt("userSelect", {
                prefix: !0
            }), kt("margin", {
                parser: _t("marginTop,marginRight,marginBottom,marginLeft")
            }), kt("padding", {
                parser: _t("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), kt("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(t, e, i, n, r, s) {
                    var o, a, l;
                    return S < 9 ? (a = t.currentStyle, l = S < 8 ? " " : ",", o = "rect(" + a.clipTop + l + a.clipRight + l + a.clipBottom + l + a.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(et(t, this.p, k, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, r, s)
                }
            }), kt("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), kt("autoRound,strictUnits", {
                parser: function(t, e, i, n, r) {
                    return r
                }
            }), kt("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, n, r, s) {
                    var o = et(t, "borderTopWidth", k, !1, "0px"),
                        a = this.format(e).split(" "),
                        l = a[0].replace(F, "");
                    return "px" !== l && (o = parseFloat(o) / it(t, "borderTopWidth", 1, l) + l), this.parseComplex(t.style, this.format(o + " " + et(t, "borderTopStyle", k, !1, "solid") + " " + et(t, "borderTopColor", k, !1, "#000")), a.join(" "), r, s)
                },
                color: !0,
                formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(vt) || ["#000"])[0]
                }
            }), kt("borderWidth", {
                parser: _t("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), kt("float,cssFloat,styleFloat", {
                parser: function(t, e, i, n, r, s) {
                    var o = t.style,
                        a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                    return new bt(o, a, 0, 0, r, -1, i, !1, 0, o[a], e)
                }
            });
            var Zt = function(t) {
                var e, i = this.t,
                    n = i.filter || et(this.data, "filter") || "",
                    r = this.s + this.c * t | 0;
                100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !et(this.data, "filter")) : (i.filter = n.replace(o, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(M, "opacity=" + r))
            };
            kt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, n, r, s) {
                    var o = parseFloat(et(t, "opacity", k, !1, "1")),
                        a = t.style,
                        l = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === et(t, "visibility", k) && 0 !== e && (o = 0), Y ? r = new bt(a, "opacity", o, e - o, r) : ((r = new bt(a, "opacity", 100 * o, 100 * (e - o), r)).xn1 = l ? 1 : 0, a.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = s, r.setRatio = Zt), l && ((r = new bt(a, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
                }
            });
            var Kt = function(t, e) {
                    e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(a, "-$1").toLowerCase())) : t.removeAttribute(e))
                },
                Jt = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Kt(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            kt("className", {
                parser: function(t, e, i, n, r, s, o) {
                    var a, l, u, c, h, p = t.getAttribute("class") || "",
                        d = t.style.cssText;
                    if ((r = n._classNamePT = new bt(t, i, 0, 0, r, 2)).setRatio = Jt, r.pr = -11, f = !0, r.b = p, l = rt(t, k), u = t._gsClassPT) {
                        for (c = {}, h = u.data; h;) c[h.p] = 1, h = h._next;
                        u.setRatio(1)
                    }
                    return (t._gsClassPT = r).e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", r.e), a = st(t, l, rt(t), o, c), t.setAttribute("class", p), r.data = a.firstMPT, t.style.cssText = d, r = r.xfirst = n.parse(t, a.difs, r, s)
                }
            });
            var te = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, n, r, s, o = this.t.style,
                        a = m.transform.parse;
                    if ("all" === this.e) r = !(o.cssText = "");
                    else
                        for (n = (e = this.e.split(" ").join("").split(",")).length; - 1 < --n;) i = e[n], m[i] && (m[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Rt : m[i].p), Kt(o, i);
                    r && (Kt(o, Nt), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            };
            for (kt("clearProps", {
                    parser: function(t, e, i, n, r) {
                        return (r = new bt(t, i, 0, 0, r, 2)).setRatio = te, r.e = e, r.pr = -10, r.data = n._tween, f = !0, r
                    }
                }), t = "bezier,throwProps,physicsProps,physics2D".split(","), Ct = t.length; Ct--;) At(t[Ct]);
            (t = q.prototype)._firstPT = t._lastParsedTransform = t._transform = null, t._onInitTween = function(t, e, i, n) {
                if (!t.nodeType) return !1;
                this._target = E = t, this._tween = i, this._vars = e, P = n, A = e.autoRound, f = !1, C = e.suffixMap || q.suffixMap, k = tt(t, ""), g = this._overwriteProps;
                var r, s, o, a, l, u, c, h, p, d = t.style;
                if (v && "" === d.zIndex && ("auto" !== (r = et(t, "zIndex", k)) && "" !== r || this._addLazySet(d, "zIndex", 0)), "string" == typeof e && (a = d.cssText, r = rt(t, k), d.cssText = a + ";" + e, r = st(t, r, rt(t)).difs, !Y && b.test(e) && (r.opacity = parseFloat(RegExp.$1)), e = r, d.cssText = a), e.className ? this._firstPT = s = m.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = s = this.parse(t, e, null), this._transformType) {
                    for (p = 3 === this._transformType, Nt ? y && (v = !0, "" === d.zIndex && ("auto" !== (c = et(t, "zIndex", k)) && "" !== c || this._addLazySet(d, "zIndex", 0)), _ && this._addLazySet(d, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (p ? "visible" : "hidden"))) : d.zoom = 1, o = s; o && o._next;) o = o._next;
                    h = new bt(t, "transform", 0, 0, null, 2), this._linkCSSP(h, null, o), h.setRatio = Nt ? Qt : Gt, h.data = this._transform || Yt(t, k, !0), h.tween = i, h.pr = -1, g.pop()
                }
                if (f) {
                    for (; s;) {
                        for (u = s._next, o = a; o && o.pr > s.pr;) o = o._next;
                        (s._prev = o ? o._prev : l) ? s._prev._next = s: a = s, (s._next = o) ? o._prev = s : l = s, s = u
                    }
                    this._firstPT = a
                }
                return !0
            }, t.parse = function(t, e, i, n) {
                var r, s, o, a, l, u, c, h, p, d, f = t.style;
                for (r in e) {
                    if ("function" == typeof(u = e[r]) && (u = u(P, E)), s = m[r]) i = s.parse(t, u, r, this, i, n, e);
                    else {
                        if ("--" === r.substr(0, 2)) {
                            this._tween._propLookup[r] = this._addTween.call(this._tween, t.style, "setProperty", tt(t).getPropertyValue(r) + "", u + "", r, !1, r);
                            continue
                        }
                        l = et(t, r, k) + "", p = "string" == typeof u, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || p && w.test(u) ? (p || (u = (3 < (u = gt(u)).length ? "rgba(" : "rgb(") + u.join(",") + ")"), i = Tt(f, r, l, u, !0, "transparent", i, 0, n)) : p && R.test(u) ? i = Tt(f, r, l, u, !0, null, i, 0, n) : (c = (o = parseFloat(l)) || 0 === o ? l.substr((o + "").length) : "", "" !== l && "auto" !== l || ("width" === r || "height" === r ? (o = lt(t, r, k), c = "px") : "left" === r || "top" === r ? (o = nt(t, r, k), c = "px") : (o = "opacity" !== r ? 0 : 1, c = "")), (d = p && "=" === u.charAt(1)) ? (a = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), a *= parseFloat(u), h = u.replace(F, "")) : (a = parseFloat(u), h = p ? u.replace(F, "") : ""), "" === h && (h = r in C ? C[r] : c), u = a || 0 === a ? (d ? a + o : a) + h : e[r], c !== h && ("" === h && "lineHeight" !== r || (a || 0 === a) && o && (o = it(t, r, o, c), "%" === h ? (o /= it(t, r, 100, "%") / 100, !0 !== e.strictUnits && (l = o + "%")) : "em" === h || "rem" === h || "vw" === h || "vh" === h ? o /= it(t, r, 1, h) : "px" !== h && (a = it(t, r, a, h), h = "px"), d && (a || 0 === a) && (u = a + o + h))), d && (a += o), !o && 0 !== o || !a && 0 !== a ? void 0 !== f[r] && (u || u + "" != "NaN" && null != u) ? (i = new bt(f, r, a || o || 0, 0, i, -1, r, !1, 0, l, u)).xs0 = "none" !== u || "display" !== r && -1 === r.indexOf("Style") ? u : l : Q("invalid " + r + " tween value: " + e[r]) : (i = new bt(f, r, o, a - o, i, 0, r, !1 !== A && ("px" === h || "zIndex" === r), 0, l, u)).xs0 = h)
                    }
                    n && i && !i.plugin && (i.plugin = n)
                }
                return i
            }, t.setRatio = function(t) {
                var e, i, n, r = this._firstPT;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; r;) {
                            if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), r.type)
                                if (1 === r.type)
                                    if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                    else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                            else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                            else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                            else {
                                for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                r.t[r.p] = i
                            } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                            else r.t[r.p] = e + r.xs0;
                            r = r._next
                        } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                    else
                        for (; r;) {
                            if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (e = Math.round(r.s + r.c), r.type) {
                                        if (1 === r.type) {
                                            for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                            r.t[r.p] = i
                                        }
                                    } else r.t[r.p] = e + r.xs0;
                            else r.t[r.p] = r.e;
                            else r.setRatio(t);
                            r = r._next
                        }
            }, t._enableTransforms = function(t) {
                this._transform = this._transform || Yt(this._target, k, !0), this._transformType = this._transform.svg && Et || !t && 3 !== this._transformType ? 2 : 3
            };
            var ee = function(t) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            t._addLazySet = function(t, e, i) {
                var n = this._firstPT = new bt(t, e, 0, 0, this._firstPT, 2);
                n.e = i, n.setRatio = ee, n.data = this
            }, t._linkCSSP = function(t, e, i, n) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, t._mod = function(t) {
                for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
            }, t._kill = function(t) {
                var e, i, n, r = t;
                if (t.autoAlpha || t.alpha) {
                    for (i in r = {}, t) r[i] = t[i];
                    r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                }
                for (t.className && (e = this._classNamePT) && ((n = e.xfirst) && n._prev ? this._linkCSSP(n._prev, e._next, n._prev._prev) : n === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, n._prev), this._classNamePT = null), e = this._firstPT; e;) e.plugin && e.plugin !== i && e.plugin._kill && (e.plugin._kill(t), i = e.plugin), e = e._next;
                return s.prototype._kill.call(this, r)
            };
            var ie = function(t, e, i) {
                var n, r, s, o;
                if (t.slice)
                    for (r = t.length; - 1 < --r;) ie(t[r], e, i);
                else
                    for (r = (n = t.childNodes).length; - 1 < --r;) o = (s = n[r]).type, s.style && (e.push(rt(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || ie(s, e, i)
            };
            return q.cascadeTo = function(t, e, i) {
                var n, r, s, o, a = B.to(t, e, i),
                    l = [a],
                    u = [],
                    c = [],
                    h = [],
                    p = B._internals.reservedProps;
                for (t = a._targets || a.target, ie(t, u, h), a.render(e, !0, !0), ie(t, c), a.render(0, !0, !0), a._enabled(!0), n = h.length; - 1 < --n;)
                    if ((r = st(h[n], u[n], c[n])).firstMPT) {
                        for (s in r = r.difs, i) p[s] && (r[s] = i[s]);
                        for (s in o = {}, r) o[s] = u[n][s];
                        l.push(B.fromTo(h[n], e, o, r))
                    } return l
            }, s.activate([q]), q
        }, !0), e = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.6.0",
            priority: -1,
            API: 2,
            init: function(t, e, i) {
                return this._tween = i, !0
            }
        }), l = function(t) {
            for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
        }, (n = e.prototype)._onInitAllProps = function() {
            for (var t, e, i, n = this._tween, r = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), s = r.length, o = {}, a = n._propLookup.roundProps; - 1 < --s;) o[r[s]] = Math.round;
            for (s = r.length; - 1 < --s;)
                for (t = r[s], e = n._firstPT; e;) i = e._next, e.pg ? e.t._mod(o) : e.n === t && (2 === e.f && e.t ? l(e.t._firstPT) : (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a)), e = i;
            return !1
        }, n._add = function(t, e, i, n) {
            this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
        }, _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.1",
            init: function(t, e, i, n) {
                var r, s;
                if ("function" != typeof t.setAttribute) return !1;
                for (r in e) "function" == typeof(s = e[r]) && (s = s(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r);
                return !0
            }
        }), _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function(t, e, i, n) {
                "object" != typeof e && (e = {
                    rotation: e
                }), this.finals = {};
                var r, s, o, a, l, u, c = !0 === e.useRadians ? 2 * Math.PI : 360;
                for (r in e) "useRadians" !== r && ("function" == typeof(a = e[r]) && (a = a(n, t)), s = (u = (a + "").split("_"))[0], o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), l = (a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - o, u.length && (-1 !== (s = u.join("_")).indexOf("short") && (l %= c) !== l % (c / 2) && (l = l < 0 ? l + c : l - c), -1 !== s.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== s.indexOf("ccw") && 0 < l && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (1e-6 < l || l < -1e-6) && (this._addTween(t, r, o, o + l, r), this._overwriteProps.push(r)));
                return !0
            },
            set: function(t) {
                var e;
                if (1 !== t) this._super.setRatio.call(this, t);
                else
                    for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
        })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(m) {
            var i, n, e, t, r = _gsScope.GreenSockGlobals || _gsScope,
                s = r.com.greensock,
                o = 2 * Math.PI,
                a = Math.PI / 2,
                l = s._class,
                u = function(t, e) {
                    var i = l("easing." + t, function() {}, !0),
                        n = i.prototype = new m;
                    return n.constructor = i, n.getRatio = e, i
                },
                c = m.register || function() {},
                h = function(t, e, i, n, r) {
                    var s = l("easing." + t, {
                        easeOut: new e,
                        easeIn: new i,
                        easeInOut: new n
                    }, !0);
                    return c(s, t), s
                },
                v = function(t, e, i) {
                    this.t = t, this.v = e, i && (((this.next = i).prev = this).c = i.v - e, this.gap = i.t - t)
                },
                p = function(t, e) {
                    var i = l("easing." + t, function(t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        n = i.prototype = new m;
                    return n.constructor = i, n.getRatio = e, n.config = function(t) {
                        return new i(t)
                    }, i
                },
                d = h("Back", p("BackOut", function(t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                }), p("BackIn", function(t) {
                    return t * t * ((this._p1 + 1) * t - this._p1)
                }), p("BackInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })),
                f = l("easing.SlowMo", function(t, e, i) {
                    e = e || 0 === e ? e : .7, null == t ? t = .7 : 1 < t && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                }, !0),
                g = f.prototype = new m;
            return g.constructor = f, g.getRatio = function(t) {
                var e = t + (.5 - t) * this._p;
                return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, f.ease = new f(.7, .7), g.config = f.config = function(t, e, i) {
                return new f(t, e, i)
            }, (g = (i = l("easing.SteppedEase", function(t, e) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
            }, !0)).prototype = new m).constructor = i, g.getRatio = function(t) {
                return t < 0 ? t = 0 : 1 <= t && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
            }, g.config = i.config = function(t, e) {
                return new i(t, e)
            }, (g = (n = l("easing.ExpoScaleEase", function(t, e, i) {
                this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i
            }, !0)).prototype = new m).constructor = n, g.getRatio = function(t) {
                return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
            }, g.config = n.config = function(t, e, i) {
                return new n(t, e, i)
            }, (g = (e = l("easing.RoughEase", function(t) {
                for (var e, i, n, r, s, o, a = (t = t || {}).taper || "none", l = [], u = 0, c = 0 | (t.points || 20), h = c, p = !1 !== t.randomize, d = !0 === t.clamp, f = t.template instanceof m ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; - 1 < --h;) e = p ? Math.random() : 1 / c * h, i = f ? f.getRatio(e) : e, n = "none" === a ? g : "out" === a ? (r = 1 - e) * r * g : "in" === a ? e * e * g : e < .5 ? (r = 2 * e) * r * .5 * g : (r = 2 * (1 - e)) * r * .5 * g, p ? i += Math.random() * n - .5 * n : h % 2 ? i += .5 * n : i -= .5 * n, d && (1 < i ? i = 1 : i < 0 && (i = 0)), l[u++] = {
                    x: e,
                    y: i
                };
                for (l.sort(function(t, e) {
                        return t.x - e.x
                    }), o = new v(1, 1, null), h = c; - 1 < --h;) s = l[h], o = new v(s.x, s.y, o);
                this._prev = new v(0, 0, 0 !== o.t ? o : o.next)
            }, !0)).prototype = new m).constructor = e, g.getRatio = function(t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && t <= e.t;) e = e.prev;
                return (this._prev = e).v + (t - e.t) / e.gap * e.c
            }, g.config = function(t) {
                return new e(t)
            }, e.ease = new e, h("Bounce", u("BounceOut", function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), u("BounceIn", function(t) {
                return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), u("BounceInOut", function(t) {
                var e = t < .5;
                return (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), h("Circ", u("CircOut", function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), u("CircIn", function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), u("CircInOut", function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), h("Elastic", (t = function(t, e, i) {
                var n = l("easing." + t, function(t, e) {
                        this._p1 = 1 <= t ? t : 1, this._p2 = (e || i) / (t < 1 ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                    }, !0),
                    r = n.prototype = new m;
                return r.constructor = n, r.getRatio = e, r.config = function(t, e) {
                    return new n(t, e)
                }, n
            })("ElasticOut", function(t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
            }, .3), t("ElasticIn", function(t) {
                return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
            }, .3), t("ElasticInOut", function(t) {
                return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
            }, .45)), h("Expo", u("ExpoOut", function(t) {
                return 1 - Math.pow(2, -10 * t)
            }), u("ExpoIn", function(t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), u("ExpoInOut", function(t) {
                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), h("Sine", u("SineOut", function(t) {
                return Math.sin(t * a)
            }), u("SineIn", function(t) {
                return 1 - Math.cos(t * a)
            }), u("SineInOut", function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), l("easing.EaseLookup", {
                find: function(t) {
                    return m.map[t]
                }
            }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(e, "RoughEase", "ease,"), c(i, "SteppedEase", "ease,"), d
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(p, d) {
        "use strict";
        var f = {},
            n = p.document,
            g = p.GreenSockGlobals = p.GreenSockGlobals || p;
        if (!g.TweenLite) {
            var t, e, i, m, v, r, s, y = function(t) {
                    var e, i = t.split("."),
                        n = g;
                    for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                    return n
                },
                h = y("com.greensock"),
                _ = 1e-10,
                l = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                x = function() {},
                b = (r = Object.prototype.toString, s = r.call([]), function(t) {
                    return null != t && (t instanceof Array || "object" == typeof t && !!t.push && r.call(t) === s)
                }),
                w = {},
                T = function(a, l, u, c) {
                    this.sc = w[a] ? w[a].sc : [], (w[a] = this).gsClass = null, this.func = u;
                    var h = [];
                    this.check = function(t) {
                        for (var e, i, n, r, s = l.length, o = s; - 1 < --s;)(e = w[l[s]] || new T(l[s], [])).gsClass ? (h[s] = e.gsClass, o--) : t && e.sc.push(this);
                        if (0 === o && u) {
                            if (n = (i = ("com.greensock." + a).split(".")).pop(), r = y(i.join("."))[n] = this.gsClass = u.apply(u, h), c)
                                if (g[n] = f[n] = r, "undefined" != typeof module && module.exports)
                                    if (a === d)
                                        for (s in module.exports = f[d] = r, f) r[s] = f[s];
                                    else f[d] && (f[d][n] = r);
                            else "function" == typeof define && define.amd && define((p.GreenSockAMDPath ? p.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function() {
                                return r
                            });
                            for (s = 0; s < this.sc.length; s++) this.sc[s].check()
                        }
                    }, this.check(!0)
                },
                o = p._gsDefine = function(t, e, i, n) {
                    return new T(t, e, i, n)
                },
                C = h._class = function(t, e, i) {
                    return e = e || function() {}, o(t, [], function() {
                        return e
                    }, i), e
                };
            o.globals = g;
            var a = [0, 0, 1, 1],
                S = C("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? a.concat(e) : a
                }, !0),
                k = S.map = {},
                u = S.register = function(t, e, i, n) {
                    for (var r, s, o, a, l = e.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); - 1 < --u;)
                        for (s = l[u], r = n ? C("easing." + s, null, !0) : h.easing[s] || {}, o = c.length; - 1 < --o;) a = c[o], k[s + "." + a] = k[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for ((i = S.prototype)._calcEnd = !1, i.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
                }, e = (t = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --e;) i = t[e] + ",Power" + e, u(new S(null, null, 1, e), i, "easeOut", !0), u(new S(null, null, 2, e), i, "easeIn" + (0 === e ? ",easeNone" : "")), u(new S(null, null, 3, e), i, "easeInOut");
            k.linear = h.easing.Linear.easeIn, k.swing = h.easing.Quad.easeInOut;
            var A = C("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            (i = A.prototype).addEventListener = function(t, e, i, n, r) {
                r = r || 0;
                var s, o, a = this._listeners[t],
                    l = 0;
                for (this !== m || v || m.wake(), null == a && (this._listeners[t] = a = []), o = a.length; - 1 < --o;)(s = a[o]).c === e && s.s === i ? a.splice(o, 1) : 0 === l && s.pr < r && (l = o + 1);
                a.splice(l, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                })
            }, i.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; - 1 < --i;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, i.dispatchEvent = function(t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for (1 < (e = r.length) && (r = r.slice(0)), i = this._eventTarget; - 1 < --e;)(n = r[e]) && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var E = p.requestAnimationFrame,
                P = p.cancelAnimationFrame,
                D = Date.now || function() {
                    return (new Date).getTime()
                },
                O = D();
            for (e = (t = ["ms", "moz", "webkit", "o"]).length; - 1 < --e && !E;) E = p[t[e] + "RequestAnimationFrame"], P = p[t[e] + "CancelAnimationFrame"] || p[t[e] + "CancelRequestAnimationFrame"];
            C("Ticker", function(t, e) {
                var r, s, o, a, l, u = this,
                    c = D(),
                    i = !(!1 === e || !E) && "auto",
                    h = 500,
                    p = 33,
                    d = function(t) {
                        var e, i, n = D() - O;
                        h < n && (c += n - p), O += n, u.time = (O - c) / 1e3, e = u.time - l, (!r || 0 < e || !0 === t) && (u.frame++, l += e + (a <= e ? .004 : a - e), i = !0), !0 !== t && (o = s(d)), i && u.dispatchEvent("tick")
                    };
                A.call(u), u.time = u.frame = 0, u.tick = function() {
                    d(!0)
                }, u.lagSmoothing = function(t, e) {
                    if (!arguments.length) return h < 1e10;
                    h = t || 1e10, p = Math.min(e, h, 0)
                }, u.sleep = function() {
                    null != o && (i && P ? P(o) : clearTimeout(o), s = x, o = null, u === m && (v = !1))
                }, u.wake = function(t) {
                    null !== o ? u.sleep() : t ? c += -O + (O = D()) : 10 < u.frame && (O = D() - h + 5), s = 0 === r ? x : i && E ? E : function(t) {
                        return setTimeout(t, 1e3 * (l - u.time) + 1 | 0)
                    }, u === m && (v = !0), d(2)
                }, u.fps = function(t) {
                    if (!arguments.length) return r;
                    a = 1 / ((r = t) || 60), l = this.time + a, u.wake()
                }, u.useRAF = function(t) {
                    if (!arguments.length) return i;
                    u.sleep(), i = t, u.fps(r)
                }, u.fps(t), setTimeout(function() {
                    "auto" === i && u.frame < 5 && "hidden" !== (n || {}).visibilityState && u.useRAF(!1)
                }, 1500)
            }), (i = h.Ticker.prototype = new h.events.EventDispatcher).constructor = h.Ticker;
            var c = C("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Q) {
                    v || m.wake();
                    var i = this.vars.useFrames ? G : Q;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            m = c.ticker = new h.Ticker, (i = c.prototype)._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1;
            var F = function() {
                v && 2e3 < D() - O && ("hidden" !== (n || {}).visibilityState || !m.lagSmoothing()) && m.wake();
                var t = setTimeout(F, 2e3);
                t.unref && t.unref()
            };
            F(), i.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, i.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, i.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, i.seek = function(t, e) {
                return this.totalTime(Number(t), !1 !== e)
            }, i.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }, i.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, i.render = function(t, e, i) {}, i.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
            }, i.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
            }, i._enabled = function(t, e) {
                return v || m.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, i._kill = function(t, e) {
                return this._enabled(!1, !1)
            }, i.kill = function(t, e) {
                return this._kill(t, e), this
            }, i._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, i._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); - 1 < --e;) "{self}" === t[e] && (i[e] = this);
                return i
            }, i._callback = function(t) {
                var e = this.vars,
                    i = e[t],
                    n = e[t + "Params"],
                    r = e[t + "Scope"] || e.callbackScope || this;
                switch (n ? n.length : 0) {
                    case 0:
                        i.call(r);
                        break;
                    case 1:
                        i.call(r, n[0]);
                        break;
                    case 2:
                        i.call(r, n[0], n[1]);
                        break;
                    default:
                        i.apply(r, n)
                }
            }, i.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = b(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, i.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, i.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, i.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, i.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, i.totalTime = function(t, e, i) {
                if (v || m.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (n < t && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (R.length && K(), this.render(t, e, !1), R.length && K())
                }
                return this
            }, i.progress = i.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, i.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, i.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, i.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                var e, i;
                for (t = t || _, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
                return this
            }, i.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, i.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (v || t || m.wake(), i = (e = n.rawTime()) - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var M = C("core.SimpleTimeline", function(t) {
                c.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (i = M.prototype = new c).constructor = M, i.kill()._gc = !1, i._first = i._last = i._recent = null, i._sortChildren = !1, i.add = i.insert = function(t, e, i, n) {
                var r, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (s = t._startTime; r && r._startTime > s;) r = r._prev;
                return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
            }, i._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, i.render = function(t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, i.rawTime = function() {
                return v || m.wake(), this._totalTime
            };
            var N = C("TweenLite", function(t, e, i) {
                    if (c.call(this, e, i), this.render = N.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : N.selector(t) || t;
                    var n, r, s, o = t.jquery || t.length && t !== p && t[0] && (t[0] === p || t[0].nodeType && t[0].style && !t.nodeType),
                        a = this.vars.overwrite;
                    if (this._overwrite = a = null == a ? Y[N.defaultOverwrite] : "number" == typeof a ? a >> 0 : Y[a], (o || t instanceof Array || t.push && b(t)) && "number" != typeof t[0])
                        for (this._targets = s = l(t), this._propLookup = [], this._siblings = [], n = 0; n < s.length; n++)(r = s[n]) ? "string" != typeof r ? r.length && r !== p && r[0] && (r[0] === p || r[0].nodeType && r[0].style && !r.nodeType) ? (s.splice(n--, 1), this._targets = s = s.concat(l(r))) : (this._siblings[n] = J(r, this, !1), 1 === a && 1 < this._siblings[n].length && et(r, this, null, 1, this._siblings[n])) : "string" == typeof(r = s[n--] = N.selector(r)) && s.splice(n + 1, 1) : s.splice(n--, 1);
                    else this._propLookup = {}, this._siblings = J(t, this, !1), 1 === a && 1 < this._siblings.length && et(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -_, this.render(Math.min(0, -this._delay)))
                }, !0),
                $ = function(t) {
                    return t && t.length && t !== p && t[0] && (t[0] === p || t[0].nodeType && t[0].style && !t.nodeType)
                };
            (i = N.prototype = new c).constructor = N, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = i._lazy = !1, N.version = "1.20.4", N.defaultEase = i._ease = new S(null, null, 1, 1), N.defaultOverwrite = "auto", N.ticker = m, N.autoSleep = 120, N.lagSmoothing = function(t, e) {
                m.lagSmoothing(t, e)
            }, N.selector = p.$ || p.jQuery || function(t) {
                var e = p.$ || p.jQuery;
                return e ? (N.selector = e)(t) : void 0 === n ? t : n.querySelectorAll ? n.querySelectorAll(t) : n.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var R = [],
                j = {},
                L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                z = /[\+-]=-?[\.\d]/,
                B = function(t) {
                    for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && -1e-6 < e && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                q = function(t, e, i, n) {
                    var r, s, o, a, l, u, c, h = [],
                        p = 0,
                        d = "",
                        f = 0;
                    for (h.start = t, h.end = e, t = h[0] = t + "", e = h[1] = e + "", i && (i(h), t = h[0], e = h[1]), h.length = 0, r = t.match(L) || [], s = e.match(L) || [], n && (n._next = null, n.blob = 1, h._firstPT = h._applyPT = n), l = s.length, a = 0; a < l; a++) c = s[a], d += (u = e.substr(p, e.indexOf(c, p) - p)) || !a ? u : ",", p += u.length, f ? f = (f + 1) % 5 : "rgba(" === u.substr(-5) && (f = 1), c === r[a] || r.length <= a ? d += c : (d && (h.push(d), d = ""), o = parseFloat(r[a]), h.push(o), h._firstPT = {
                        _next: h._firstPT,
                        t: h,
                        p: h.length - 1,
                        s: o,
                        c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                        f: 0,
                        m: f && f < 4 ? Math.round : 0
                    }), p += c.length;
                    return (d += e.substr(p)) && h.push(d), h.setRatio = B, z.test(e) && (h.end = null), h
                },
                I = function(t, e, i, n, r, s, o, a, l) {
                    "function" == typeof n && (n = n(l || 0, t));
                    var u = typeof t[e],
                        c = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        h = "get" !== i ? i : c ? o ? t[c](o) : t[c]() : t[e],
                        p = "string" == typeof n && "=" === n.charAt(1),
                        d = {
                            t: t,
                            p: e,
                            s: h,
                            f: "function" === u,
                            pg: 0,
                            n: r || e,
                            m: s ? "function" == typeof s ? s : Math.round : 0,
                            pr: 0,
                            c: p ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - h || 0
                        };
                    if (("number" != typeof h || "number" != typeof n && !p) && (o || isNaN(h) || !p && isNaN(n) || "boolean" == typeof h || "boolean" == typeof n ? (d.fp = o, d = {
                            t: q(h, p ? parseFloat(d.s) + d.c + (d.s + "").replace(/[0-9\-\.]/g, "") : n, a || N.defaultStringFilter, d),
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 2,
                            pg: 0,
                            n: r || e,
                            pr: 0,
                            m: 0
                        }) : (d.s = parseFloat(h), p || (d.c = parseFloat(n) - d.s || 0))), d.c) return (d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d
                },
                H = N._internals = {
                    isArray: b,
                    isSelector: $,
                    lazyTweens: R,
                    blobDif: q
                },
                W = N._plugins = {},
                X = H.tweenLookup = {},
                U = 0,
                V = H.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1
                },
                Y = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                G = c._rootFramesTimeline = new M,
                Q = c._rootTimeline = new M,
                Z = 30,
                K = H.lazyRender = function() {
                    var t, e = R.length;
                    for (j = {}; - 1 < --e;)(t = R[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    R.length = 0
                };
            Q._startTime = m.time, G._startTime = m.frame, Q._active = G._active = !0, setTimeout(K, 1), c._updateRoot = N.render = function() {
                var t, e, i;
                if (R.length && K(), Q.render((m.time - Q._startTime) * Q._timeScale, !1, !1), G.render((m.frame - G._startTime) * G._timeScale, !1, !1), R.length && K(), m.frame >= Z) {
                    for (i in Z = m.frame + (parseInt(N.autoSleep, 10) || 120), X) {
                        for (t = (e = X[i].tweens).length; - 1 < --t;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete X[i]
                    }
                    if ((!(i = Q._first) || i._paused) && N.autoSleep && !G._first && 1 === m._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || m.sleep()
                    }
                }
            }, m.addEventListener("tick", c._updateRoot);
            var J = function(t, e, i) {
                    var n, r, s = t._gsTweenID;
                    if (X[s || (t._gsTweenID = s = "t" + U++)] || (X[s] = {
                            target: t,
                            tweens: []
                        }), e && ((n = X[s].tweens)[r = n.length] = e, i))
                        for (; - 1 < --r;) n[r] === e && n.splice(r, 1);
                    return X[s].tweens
                },
                tt = function(t, e, i, n) {
                    var r, s, o = t.vars.onOverwrite;
                    return o && (r = o(t, e, i, n)), (o = N.onOverwrite) && (s = o(t, e, i, n)), !1 !== r && !1 !== s
                },
                et = function(t, e, i, n, r) {
                    var s, o, a, l;
                    if (1 === n || 4 <= n) {
                        for (l = r.length, s = 0; s < l; s++)
                            if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                            else if (5 === n) break;
                        return o
                    }
                    var u, c = e._startTime + _,
                        h = [],
                        p = 0,
                        d = 0 === e._duration;
                    for (s = r.length; - 1 < --s;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || it(e, 0, d), 0 === it(a, u, d) && (h[p++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((d || !a._initted) && c - a._startTime <= 2e-10 || (h[p++] = a)));
                    for (s = p; - 1 < --s;)
                        if (a = h[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !tt(a, e)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        } return o
                },
                it = function(t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                        if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return e < (s /= r) ? s - e : i && s === e || !t._initted && s - e < 2e-10 ? _ : (s += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : s - e - _
                };
            i._init = function() {
                var t, e, i, n, r, s, o = this.vars,
                    a = this._overwrittenProps,
                    l = this._duration,
                    u = !!o.immediateRender,
                    c = o.ease;
                if (o.startAt) {
                    for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}, o.startAt) r[n] = o.startAt[n];
                    if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = u && !1 !== o.lazy, r.startAt = r.delay = null, r.onUpdate = o.onUpdate, r.onUpdateParams = o.onUpdateParams, r.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = N.to(this.target, 0, r), u)
                        if (0 < this._time) this._startAt = null;
                        else if (0 !== l) return
                } else if (o.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        for (n in 0 !== this._time && (u = !1), i = {}, o) V[n] && "autoCSS" !== n || (i[n] = o[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = u && !1 !== o.lazy, i.immediateRender = u, this._startAt = N.to(this.target, 0, i), u) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    } if (this._ease = c = c ? c instanceof S ? c : "function" == typeof c ? new S(c, o.easeParams) : k[c] || N.defaultEase : N.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                if (e && N._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, i._initProps = function(t, e, i, n, r) {
                var s, o, a, l, u, c;
                if (null == t) return !1;
                for (s in j[t._gsTweenID] && K(), this.vars.css || t.style && t !== p && t.nodeType && W.css && !1 !== this.vars.autoCSS && function(t, e) {
                        var i, n = {};
                        for (i in t) V[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!W[i] || W[i] && W[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                        t.css = n
                    }(this.vars, t), this.vars)
                    if (c = this.vars[s], V[s]) c && (c instanceof Array || c.push && b(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
                    else if (W[s] && (l = new W[s])._onInitTween(t, this.vars[s], this, r)) {
                    for (this._firstPT = u = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: s,
                            pg: 1,
                            pr: l._priority,
                            m: 0
                        }, o = l._overwriteProps.length; - 1 < --o;) e[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                } else e[s] = I.call(this, t, s, "get", c, s, 0, null, this.vars.stringFilter, r);
                return n && this._kill(n, t) ? this._initProps(t, e, i, n, r) : 1 < this._overwrite && this._firstPT && 1 < i.length && et(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, n, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (j[t._gsTweenID] = !0), a)
            }, i.render = function(t, e, i) {
                var n, r, s, o, a = this._time,
                    l = this._duration,
                    u = this._rawPrevTime;
                if (l - 1e-7 <= t && 0 <= t) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (u < 0 || t <= 0 && -1e-7 <= t || u === _ && "isPause" !== this.data) && u !== t && (i = !0, _ < u && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || u === t ? t : _);
                else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && 0 < u) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (0 <= u && (u !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || u === t ? t : _)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var c = t / l,
                        h = this._easeType,
                        p = this._easePower;
                    (1 === h || 3 === h && .5 <= c) && (c = 1 - c), 3 === h && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), this.ratio = 1 === h ? 1 - c : 2 === h ? c : t / l < .5 ? c / 2 : 1 - c / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, R.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && 0 <= t && (this._active = !0), 0 === a && (this._startAt && (0 <= t ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === _ && o !== _ && (this._rawPrevTime = 0)))
                }
            }, i._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : N.selector(e) || e;
                var n, r, s, o, a, l, u, c, h, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((b(e) || $(e)) && "number" != typeof e[0])
                    for (n = e.length; - 1 < --n;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; - 1 < --n;)
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (u = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (N.onOverwrite || this.vars.onOverwrite)) {
                            for (s in u) a[s] && (h || (h = []), h.push(s));
                            if ((h || !t) && !tt(this, i, e, h)) return !1
                        }
                        for (s in u)(o = a[s]) && (p && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(u) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, i.invalidate = function() {
                return this._notifyPluginsOfEnabled && N._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], c.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(Math.min(0, -this._delay))), this
            }, i._enabled = function(t, e) {
                if (v || m.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; - 1 < --i;) this._siblings[i] = J(n[i], this, !0);
                    else this._siblings = J(this.target, this, !0)
                }
                return c.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && N._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, N.to = function(t, e, i) {
                return new N(t, e, i)
            }, N.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new N(t, e, i)
            }, N.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new N(t, e, n)
            }, N.delayedCall = function(t, e, i, n, r) {
                return new N(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, N.set = function(t, e) {
                return new N(t, 0, e)
            }, N.getTweensOf = function(t, e) {
                if (null == t) return [];
                var i, n, r, s;
                if (t = "string" != typeof t ? t : N.selector(t) || t, (b(t) || $(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; - 1 < --i;) n = n.concat(N.getTweensOf(t[i], e));
                    for (i = n.length; - 1 < --i;)
                        for (s = n[i], r = i; - 1 < --r;) s === n[r] && n.splice(i, 1)
                } else if (t._gsTweenID)
                    for (i = (n = J(t).concat()).length; - 1 < --i;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n || []
            }, N.killTweensOf = N.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = N.getTweensOf(t, e), r = n.length; - 1 < --r;) n[r]._kill(i, t)
            };
            var nt = C("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = nt.prototype
            }, !0);
            if (i = nt.prototype, nt.version = "1.19.0", nt.API = 2, i._firstPT = null, i._addTween = I, i.setRatio = B, i._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; - 1 < --e;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, i._mod = i._roundProps = function(t) {
                    for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                }, N._onPluginEvent = function(t, e) {
                    var i, n, r, s, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
                        }
                        a = e._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, nt.activate = function(t) {
                    for (var e = t.length; - 1 < --e;) t[e].API === nt.API && (W[(new t[e])._propName] = t[e]);
                    return !0
                }, o.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        r = t.overwriteProps,
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        o = C("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            nt.call(this, i, n), this._overwriteProps = r || []
                        }, !0 === t.global),
                        a = o.prototype = new nt(i);
                    for (e in (a.constructor = o).API = t.API, s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                    return o.version = t.version, nt.activate([o]), o
                }, t = p._gsQueue) {
                for (e = 0; e < t.length; e++) t[e]();
                for (i in w) w[i].func || p.console.log("GSAP encountered missing dependency: " + i)
            }
            v = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(l, i, r, a) {
        function u(t, e) {
            this.settings = null, this.options = l.extend({}, u.Defaults, e), this.$element = l(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, l.each(["onResize", "onThrottledResize"], l.proxy(function(t, e) {
                this._handlers[e] = l.proxy(this[e], this)
            }, this)), l.each(u.Plugins, l.proxy(function(t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
            }, this)), l.each(u.Workers, l.proxy(function(t, e) {
                this._pipe.push({
                    filter: e.filter,
                    run: l.proxy(e.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        u.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            checkVisibility: !0,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: i,
            fallbackEasing: "swing",
            slideTransition: "",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, u.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, u.Type = {
            Event: "event",
            State: "state"
        }, u.Plugins = {}, u.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this.settings.margin || "",
                    i = !this.settings.autoWidth,
                    n = this.settings.rtl,
                    r = {
                        width: "auto",
                        "margin-left": n ? e : "",
                        "margin-right": n ? "" : e
                    };
                !i && this.$stage.children().css(r), t.css = r
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    i = null,
                    n = this._items.length,
                    r = !this.settings.autoWidth,
                    s = [];
                for (t.items = {
                        merge: !1,
                        width: e
                    }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = 1 < i || t.items.merge, s[n] = r ? e * i : this._items[n].width();
                this._widths = s
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var t = [],
                    e = this._items,
                    i = this.settings,
                    n = Math.max(2 * i.items, 4),
                    r = 2 * Math.ceil(e.length / 2),
                    s = i.loop && e.length ? i.rewind ? n : Math.max(n, r) : 0,
                    o = "",
                    a = "";
                for (s /= 2; 0 < s;) t.push(this.normalize(t.length / 2, !0)), o += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), a = e[t[t.length - 1]][0].outerHTML + a, s -= 1;
                this._clones = t, l(o).addClass("cloned").appendTo(this.$stage), l(a).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, r = 0, s = []; ++i < e;) n = s[i - 1] || 0, r = this._widths[this.relative(i)] + this.settings.margin, s.push(n + r * t);
                this._coordinates = s
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t = this.settings.stagePadding,
                    e = this._coordinates,
                    i = {
                        width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                        "padding-left": t || "",
                        "padding-right": t || ""
                    };
                this.$stage.css(i)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this._coordinates.length,
                    i = !this.settings.autoWidth,
                    n = this.$stage.children();
                if (i && t.items.merge)
                    for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
                else i && (t.css.width = t.items.width, n.css(t.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t, e, i, n, r = this.settings.rtl ? 1 : -1,
                    s = 2 * this.settings.stagePadding,
                    o = this.coordinates(this.current()) + s,
                    a = o + this.width() * r,
                    l = [];
                for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + s * r, (this.op(t, "<=", o) && this.op(t, ">", a) || this.op(e, "<", o) && this.op(e, ">", a)) && l.push(i);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
            }
        }], u.prototype.initializeStage = function() {
            this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ">", {
                class: this.settings.stageClass
            }).wrap(l("<div/>", {
                class: this.settings.stageOuterClass
            })), this.$element.append(this.$stage.parent()))
        }, u.prototype.initializeItems = function() {
            var t = this.$element.find(".owl-item");
            if (t.length) return this._items = t.get().map(function(t) {
                return l(t)
            }), this._mergers = this._items.map(function() {
                return 1
            }), void this.refresh();
            this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
        }, u.prototype.initialize = function() {
            var t, e, i;
            (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : a, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
            this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, u.prototype.isVisible = function() {
            return !this.settings.checkVisibility || this.$element.is(":visible")
        }, u.prototype.setup = function() {
            var e = this.viewport(),
                t = this.options.responsive,
                i = -1,
                n = null;
            t ? (l.each(t, function(t) {
                t <= e && i < t && (i = Number(t))
            }), "function" == typeof(n = l.extend({}, this.options, t[i])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : n = l.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: n
                }
            }), this._breakpoint = i, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, u.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, u.prototype.prepare = function(t) {
            var e = this.trigger("prepare", {
                content: t
            });
            return e.data || (e.data = l("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
                content: e.data
            }), e.data
        }, u.prototype.update = function() {
            for (var t = 0, e = this._pipe.length, i = l.proxy(function(t) {
                    return this[t]
                }, this._invalidated), n = {}; t < e;)(this._invalidated.all || 0 < l.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(n), t++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, u.prototype.width = function(t) {
            switch (t = t || u.Width.Default) {
                case u.Width.Inner:
                case u.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, u.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, u.prototype.onThrottledResize = function() {
            i.clearTimeout(this.resizeTimer), this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, u.prototype.onResize = function() {
            return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
        }, u.prototype.registerEventHandlers = function() {
            l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)))
        }, u.prototype.onDragStart = function(t) {
            var e = null;
            3 !== t.which && (l.support.transform ? e = {
                x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4],
                y: e[16 === e.length ? 13 : 5]
            } : (e = this.$stage.position(), e = {
                x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left,
                y: e.top
            }), this.is("animating") && (l.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = l(t.target), this._drag.stage.start = e, this._drag.stage.current = e, this._drag.pointer = this.pointer(t), l(r).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)), l(r).one("mousemove.owl.core touchmove.owl.core", l.proxy(function(t) {
                var e = this.difference(this._drag.pointer, this.pointer(t));
                l(r).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)), Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, u.prototype.onDragMove = function(t) {
            var e = null,
                i = null,
                n = null,
                r = this.difference(this._drag.pointer, this.pointer(t)),
                s = this.difference(this._drag.stage.start, r);
            this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, s.x = ((s.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * r.x / 5 : 0, s.x = Math.max(Math.min(s.x, e + n), i + n)), this._drag.stage.current = s, this.animate(s.x))
        }, u.prototype.onDragEnd = function(t) {
            var e = this.difference(this._drag.pointer, this.pointer(t)),
                i = this._drag.stage.current,
                n = 0 < e.x ^ this.settings.rtl ? "left" : "right";
            l(r).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(i.x, 0 !== e.x ? n : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = n, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, u.prototype.closest = function(i, n) {
            var r = -1,
                s = this.width(),
                o = this.coordinates();
            return this.settings.freeDrag || l.each(o, l.proxy(function(t, e) {
                return "left" === n && e - 30 < i && i < e + 30 ? r = t : "right" === n && e - s - 30 < i && i < e - s + 30 ? r = t + 1 : this.op(i, "<", e) && this.op(i, ">", o[t + 1] !== a ? o[t + 1] : e - s) && (r = "left" === n ? t + 1 : t), -1 === r
            }, this)), this.settings.loop || (this.op(i, ">", o[this.minimum()]) ? r = i = this.minimum() : this.op(i, "<", o[this.maximum()]) && (r = i = this.maximum())), r
        }, u.prototype.animate = function(t) {
            var e = 0 < this.speed();
            this.is("animating") && this.onTransitionEnd(), e && (this.enter("animating"), this.trigger("translate")), l.support.transform3d && l.support.transition ? this.$stage.css({
                transform: "translate3d(" + t + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
            }) : e ? this.$stage.animate({
                left: t + "px"
            }, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: t + "px"
            })
        }, u.prototype.is = function(t) {
            return this._states.current[t] && 0 < this._states.current[t]
        }, u.prototype.current = function(t) {
            if (t === a) return this._current;
            if (0 === this._items.length) return a;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== a && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, u.prototype.invalidate = function(t) {
            return "string" === l.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), l.map(this._invalidated, function(t, e) {
                return e
            })
        }, u.prototype.reset = function(t) {
            (t = this.normalize(t)) !== a && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, u.prototype.normalize = function(t, e) {
            var i = this._items.length,
                n = e ? 0 : this._clones.length;
            return !this.isNumeric(t) || i < 1 ? t = a : (t < 0 || i + n <= t) && (t = ((t - n / 2) % i + i) % i + n / 2), t
        }, u.prototype.relative = function(t) {
            return t -= this._clones.length / 2, this.normalize(t, !0)
        }, u.prototype.maximum = function(t) {
            var e, i, n, r = this.settings,
                s = this._coordinates.length;
            if (r.loop) s = this._clones.length / 2 + this._items.length - 1;
            else if (r.autoWidth || r.merge) {
                if (e = this._items.length)
                    for (i = this._items[--e].width(), n = this.$element.width(); e-- && !(n < (i += this._items[e].width() + this.settings.margin)););
                s = e + 1
            } else s = r.center ? this._items.length - 1 : this._items.length - r.items;
            return t && (s -= this._clones.length / 2), Math.max(s, 0)
        }, u.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2
        }, u.prototype.items = function(t) {
            return t === a ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, u.prototype.mergers = function(t) {
            return t === a ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, u.prototype.clones = function(i) {
            var e = this._clones.length / 2,
                n = e + this._items.length,
                r = function(t) {
                    return t % 2 == 0 ? n + t / 2 : e - (t + 1) / 2
                };
            return i === a ? l.map(this._clones, function(t, e) {
                return r(e)
            }) : l.map(this._clones, function(t, e) {
                return t === i ? r(e) : null
            })
        }, u.prototype.speed = function(t) {
            return t !== a && (this._speed = t), this._speed
        }, u.prototype.coordinates = function(t) {
            var e, i = 1,
                n = t - 1;
            return t === a ? l.map(this._coordinates, l.proxy(function(t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, n = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[n] || 0)) / 2 * i) : e = this._coordinates[n] || 0, e = Math.ceil(e))
        }, u.prototype.duration = function(t, e, i) {
            return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }, u.prototype.to = function(t, e) {
            var i = this.current(),
                n = null,
                r = t - this.relative(i),
                s = (0 < r) - (r < 0),
                o = this._items.length,
                a = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(r) > o / 2 && (r += -1 * s * o), (n = (((t = i + r) - a) % o + o) % o + a) !== t && n - r <= l && 0 < n - r && (i = n - r, t = n, this.reset(i))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
        }, u.prototype.next = function(t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, u.prototype.prev = function(t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, u.prototype.onTransitionEnd = function(t) {
            if (t !== a && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated")
        }, u.prototype.viewport = function() {
            var t;
            return this.options.responsiveBaseElement !== i ? t = l(this.options.responsiveBaseElement).width() : i.innerWidth ? t = i.innerWidth : r.documentElement && r.documentElement.clientWidth ? t = r.documentElement.clientWidth : console.warn("Can not detect viewport width."), t
        }, u.prototype.replace = function(t) {
            this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : l(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
                return 1 === this.nodeType
            }).each(l.proxy(function(t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, u.prototype.add = function(t, e) {
            var i = this.relative(this._current);
            e = e === a ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : l(t), this.trigger("add", {
                content: t,
                position: e
            }), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", {
                content: t,
                position: e
            })
        }, u.prototype.remove = function(t) {
            (t = this.normalize(t, !0)) !== a && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, u.prototype.preloadAutoWidthImages = function(t) {
            t.each(l.proxy(function(t, e) {
                this.enter("pre-loading"), e = l(e), l(new Image).one("load", l.proxy(function(t) {
                    e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
            }, this))
        }, u.prototype.destroy = function() {
            for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(r).off(".owl.core"), !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, u.prototype.op = function(t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case "<":
                    return n ? i < t : t < i;
                case ">":
                    return n ? t < i : i < t;
                case ">=":
                    return n ? t <= i : i <= t;
                case "<=":
                    return n ? i <= t : t <= i
            }
        }, u.prototype.on = function(t, e, i, n) {
            t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
        }, u.prototype.off = function(t, e, i, n) {
            t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
        }, u.prototype.trigger = function(t, e, i, n, r) {
            var s = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                o = l.camelCase(l.grep(["on", t, i], function(t) {
                    return t
                }).join("-").toLowerCase()),
                a = l.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), l.extend({
                    relatedTarget: this
                }, s, e));
            return this._supress[t] || (l.each(this._plugins, function(t, e) {
                e.onTrigger && e.onTrigger(a)
            }), this.register({
                type: u.Type.Event,
                name: t
            }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[o] && this.settings[o].call(this, a)), a
        }, u.prototype.enter = function(t) {
            l.each([t].concat(this._states.tags[t] || []), l.proxy(function(t, e) {
                this._states.current[e] === a && (this._states.current[e] = 0), this._states.current[e]++
            }, this))
        }, u.prototype.leave = function(t) {
            l.each([t].concat(this._states.tags[t] || []), l.proxy(function(t, e) {
                this._states.current[e]--
            }, this))
        }, u.prototype.register = function(i) {
            if (i.type === u.Type.Event) {
                if (l.event.special[i.name] || (l.event.special[i.name] = {}), !l.event.special[i.name].owl) {
                    var e = l.event.special[i.name]._default;
                    l.event.special[i.name]._default = function(t) {
                        return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
                    }, l.event.special[i.name].owl = !0
                }
            } else i.type === u.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags, this._states.tags[i.name] = l.grep(this._states.tags[i.name], l.proxy(function(t, e) {
                return l.inArray(t, this._states.tags[i.name]) === e
            }, this)))
        }, u.prototype.suppress = function(t) {
            l.each(t, l.proxy(function(t, e) {
                this._supress[e] = !0
            }, this))
        }, u.prototype.release = function(t) {
            l.each(t, l.proxy(function(t, e) {
                delete this._supress[e]
            }, this))
        }, u.prototype.pointer = function(t) {
            var e = {
                x: null,
                y: null
            };
            return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
        }, u.prototype.isNumeric = function(t) {
            return !isNaN(parseFloat(t))
        }, u.prototype.difference = function(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }, l.fn.owlCarousel = function(e) {
            var n = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var t = l(this),
                    i = t.data("owl.carousel");
                i || (i = new u(this, "object" == typeof e && e), t.data("owl.carousel", i), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, e) {
                    i.register({
                        type: u.Type.Event,
                        name: e
                    }), i.$element.on(e + ".owl.carousel.core", l.proxy(function(t) {
                        t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
                    }, i))
                })), "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, n)
            })
        }, l.fn.owlCarousel.Constructor = u
    }(window.Zepto || window.jQuery, window, document),
    function(e, i, t, n) {
        var r = function(t) {
            this._core = t, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": e.proxy(function(t) {
                    t.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        r.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, r.prototype.watch = function() {
            this._interval || (this._visible = this._core.isVisible(), this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, r.prototype.refresh = function() {
            this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, r.prototype.destroy = function() {
            var t, e;
            for (t in i.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
    }(window.Zepto || window.jQuery, window, document),
    function(a, s, t, e) {
        var i = function(t) {
            this._core = t, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(t) {
                    if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
                        var e = this._core.settings,
                            i = e.center && Math.ceil(e.items / 2) || e.items,
                            n = e.center && -1 * i || 0,
                            r = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + n,
                            s = this._core.clones().length,
                            o = a.proxy(function(t, e) {
                                this.load(e)
                            }, this);
                        for (0 < e.lazyLoadEager && (i += e.lazyLoadEager, e.loop && (r -= e.lazyLoadEager, i++)); n++ < i;) this.load(s / 2 + this._core.relative(r)), s && a.each(this._core.clones(this._core.relative(r)), o), r++
                    }
                }, this)
            }, this._core.options = a.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        i.Defaults = {
            lazyLoad: !1,
            lazyLoadEager: 0
        }, i.prototype.load = function(t) {
            var e = this._core.$stage.children().eq(t),
                i = e && e.find(".owl-lazy");
            !i || -1 < a.inArray(e.get(0), this._loaded) || (i.each(a.proxy(function(t, e) {
                var i, n = a(e),
                    r = 1 < s.devicePixelRatio && n.attr("data-src-retina") || n.attr("data-src") || n.attr("data-srcset");
                this._core.trigger("load", {
                    element: n,
                    url: r
                }, "lazy"), n.is("img") ? n.one("load.owl.lazy", a.proxy(function() {
                    n.css("opacity", 1), this._core.trigger("loaded", {
                        element: n,
                        url: r
                    }, "lazy")
                }, this)).attr("src", r) : n.is("source") ? n.one("load.owl.lazy", a.proxy(function() {
                    this._core.trigger("loaded", {
                        element: n,
                        url: r
                    }, "lazy")
                }, this)).attr("srcset", r) : ((i = new Image).onload = a.proxy(function() {
                    n.css({
                        "background-image": 'url("' + r + '")',
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: n,
                        url: r
                    }, "lazy")
                }, this), i.src = r)
            }, this)), this._loaded.push(e.get(0)))
        }, i.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Lazy = i
    }(window.Zepto || window.jQuery, window, document),
    function(o, i, t, e) {
        var n = function(t) {
            this._core = t, this._previousHeight = null, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": o.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": o.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": o.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = o.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
            var e = this;
            o(i).on("load", function() {
                e._core.settings.autoHeight && e.update()
            }), o(i).resize(function() {
                e._core.settings.autoHeight && (null != e._intervalId && clearTimeout(e._intervalId), e._intervalId = setTimeout(function() {
                    e.update()
                }, 250))
            })
        };
        n.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, n.prototype.update = function() {
            var t = this._core._current,
                e = t + this._core.settings.items,
                i = this._core.settings.lazyLoad,
                n = this._core.$stage.children().toArray().slice(t, e),
                r = [],
                s = 0;
            o.each(n, function(t, e) {
                r.push(o(e).height())
            }), (s = Math.max.apply(null, r)) <= 1 && i && this._previousHeight && (s = this._previousHeight), this._previousHeight = s, this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)
        }, n.prototype.destroy = function() {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, o.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
    }(window.Zepto || window.jQuery, window, document),
    function(c, t, e, i) {
        var n = function(t) {
            this._core = t, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": c.proxy(function(t) {
                    t.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": c.proxy(function(t) {
                    t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                }, this),
                "refreshed.owl.carousel": c.proxy(function(t) {
                    t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": c.proxy(function(t) {
                    t.namespace && "position" === t.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": c.proxy(function(t) {
                    if (t.namespace) {
                        var e = c(t.content).find(".owl-video");
                        e.length && (e.css("display", "none"), this.fetch(e, c(t.content)))
                    }
                }, this)
            }, this._core.options = c.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", c.proxy(function(t) {
                this.play(t)
            }, this))
        };
        n.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, n.prototype.fetch = function(t, e) {
            var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                r = t.attr("data-width") || this._core.settings.videoWidth,
                s = t.attr("data-height") || this._core.settings.videoHeight,
                o = t.attr("href");
            if (!o) throw new Error("Missing video URL.");
            if (-1 < (n = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube";
            else if (-1 < n[3].indexOf("vimeo")) i = "vimeo";
            else {
                if (!(-1 < n[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
                i = "vzaar"
            }
            n = n[6], this._videos[o] = {
                type: i,
                id: n,
                width: r,
                height: s
            }, e.attr("data-video", o), this.thumbnail(t, this._videos[o])
        }, n.prototype.thumbnail = function(e, t) {
            var i, n, r = t.width && t.height ? "width:" + t.width + "px;height:" + t.height + "px;" : "",
                s = e.find("img"),
                o = "src",
                a = "",
                l = this._core.settings,
                u = function(t) {
                    '<div class="owl-video-play-icon"></div>',
                    i = l.lazyLoad ? c("<div/>", {
                        class: "owl-video-tn " + a,
                        srcType: t
                    }) : c("<div/>", {
                        class: "owl-video-tn",
                        style: "opacity:1;background-image:url(" + t + ")"
                    }),
                    e.after(i),
                    e.after('<div class="owl-video-play-icon"></div>')
                };
            if (e.wrap(c("<div/>", {
                    class: "owl-video-wrapper",
                    style: r
                })), this._core.settings.lazyLoad && (o = "data-src", a = "owl-lazy"), s.length) return u(s.attr(o)), s.remove(), !1;
            "youtube" === t.type ? (n = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg", u(n)) : "vimeo" === t.type ? c.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + t.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    n = t[0].thumbnail_large, u(n)
                }
            }) : "vzaar" === t.type && c.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + t.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    n = t.framegrab_url, u(n)
                }
            })
        }, n.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, n.prototype.play = function(t) {
            var e, i = c(t.target).closest("." + this._core.settings.itemClass),
                n = this._videos[i.attr("data-video")],
                r = n.width || "100%",
                s = n.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), (e = c('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", s), e.attr("width", r), "youtube" === n.type ? e.attr("src", "//www.youtube.com/embed/" + n.id + "?autoplay=1&rel=0&v=" + n.id) : "vimeo" === n.type ? e.attr("src", "//player.vimeo.com/video/" + n.id + "?autoplay=1") : "vzaar" === n.type && e.attr("src", "//view.vzaar.com/" + n.id + "/player?autoplay=true"), c(e).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
        }, n.prototype.isInFullScreen = function() {
            var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
            return t && c(t).parent().hasClass("owl-video-frame")
        }, n.prototype.destroy = function() {
            var t, e;
            for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, c.fn.owlCarousel.Constructor.Plugins.Video = n
    }(window.Zepto || window.jQuery, window, document),
    function(o, t, e, i) {
        var n = function(t) {
            this.core = t, this.core.options = o.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
                "change.owl.carousel": o.proxy(function(t) {
                    t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": o.proxy(function(t) {
                    t.namespace && (this.swapping = "translated" == t.type)
                }, this),
                "translate.owl.carousel": o.proxy(function(t) {
                    t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        n.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, n.prototype.swap = function() {
            if (1 === this.core.settings.items && o.support.animation && o.support.transition) {
                this.core.speed(0);
                var t, e = o.proxy(this.clear, this),
                    i = this.core.$stage.children().eq(this.previous),
                    n = this.core.$stage.children().eq(this.next),
                    r = this.core.settings.animateIn,
                    s = this.core.settings.animateOut;
                this.core.current() !== this.previous && (s && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(o.support.animation.end, e).css({
                    left: t + "px"
                }).addClass("animated owl-animated-out").addClass(s)), r && n.one(o.support.animation.end, e).addClass("animated owl-animated-in").addClass(r))
            }
        }, n.prototype.clear = function(t) {
            o(t.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, n.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, o.fn.owlCarousel.Constructor.Plugins.Animate = n
    }(window.Zepto || window.jQuery, window, document),
    function(n, r, e, t) {
        var i = function(t) {
            this._core = t, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
                "changed.owl.carousel": n.proxy(function(t) {
                    t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
                }, this),
                "initialized.owl.carousel": n.proxy(function(t) {
                    t.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": n.proxy(function(t, e, i) {
                    t.namespace && this.play(e, i)
                }, this),
                "stop.owl.autoplay": n.proxy(function(t) {
                    t.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": n.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": n.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": n.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": n.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = n.extend({}, i.Defaults, this._core.options)
        };
        i.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, i.prototype._next = function(t) {
            this._call = r.setTimeout(n.proxy(this._next, this, t), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || e.hidden || this._core.next(t || this._core.settings.autoplaySpeed)
        }, i.prototype.read = function() {
            return (new Date).getTime() - this._time
        }, i.prototype.play = function(t, e) {
            var i;
            this._core.is("rotating") || this._core.enter("rotating"), t = t || this._core.settings.autoplayTimeout, i = Math.min(this._time % (this._timeout || t), t), this._paused ? (this._time = this.read(), this._paused = !1) : r.clearTimeout(this._call), this._time += this.read() % t - i, this._timeout = t, this._call = r.setTimeout(n.proxy(this._next, this, e), t - i)
        }, i.prototype.stop = function() {
            this._core.is("rotating") && (this._time = 0, this._paused = !0, r.clearTimeout(this._call), this._core.leave("rotating"))
        }, i.prototype.pause = function() {
            this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, r.clearTimeout(this._call))
        }, i.prototype.destroy = function() {
            var t, e;
            for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, n.fn.owlCarousel.Constructor.Plugins.autoplay = i
    }(window.Zepto || window.jQuery, window, document),
    function(s, t, e, i) {
        "use strict";
        var n = function(t) {
            this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": s.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + s(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": s.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": s.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "changed.owl.carousel": s.proxy(function(t) {
                    t.namespace && "position" == t.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": s.proxy(function(t) {
                    t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": s.proxy(function(t) {
                    t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = s.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        n.Defaults = {
            nav: !1,
            navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, n.prototype.initialize = function() {
            var t, i = this._core.settings;
            for (t in this._controls.$relative = (i.navContainer ? s(i.navContainer) : s("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = s("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", s.proxy(function(t) {
                    this.prev(i.navSpeed)
                }, this)), this._controls.$next = s("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", s.proxy(function(t) {
                    this.next(i.navSpeed)
                }, this)), i.dotsData || (this._templates = [s('<button role="button">').addClass(i.dotClass).append(s("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? s(i.dotsContainer) : s("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", s.proxy(function(t) {
                    var e = s(t.target).parent().is(this._controls.$absolute) ? s(t.target).index() : s(t.target).parent().index();
                    t.preventDefault(), this.to(e, i.dotsSpeed)
                }, this)), this._overrides) this._core[t] = s.proxy(this[t], this)
        }, n.prototype.destroy = function() {
            var t, e, i, n, r;
            for (t in r = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) "$relative" === e && r.navContainer ? this._controls[e].html("") : this._controls[e].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, n.prototype.update = function() {
            var t, e, i = this._core.clones().length / 2,
                n = i + this._core.items().length,
                r = this._core.maximum(!0),
                s = this._core.settings,
                o = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
            if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
                for (this._pages = [], t = i, e = 0; t < n; t++) {
                    if (o <= e || 0 === e) {
                        if (this._pages.push({
                                start: Math.min(r, t - i),
                                end: t - i + o - 1
                            }), Math.min(r, t - i) === r) break;
                        e = 0, 0
                    }
                    e += this._core.mergers(this._core.relative(t))
                }
        }, n.prototype.draw = function() {
            var t, e = this._core.settings,
                i = this._core.items().length <= e.items,
                n = this._core.relative(this._core.current()),
                r = e.loop || e.rewind;
            this._controls.$relative.toggleClass("disabled", !e.nav || i), e.nav && (this._controls.$previous.toggleClass("disabled", !r && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !r && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || i), e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(s.inArray(this.current(), this._pages)).addClass("active"))
        }, n.prototype.onTrigger = function(t) {
            var e = this._core.settings;
            t.page = {
                index: s.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
            }
        }, n.prototype.current = function() {
            var i = this._core.relative(this._core.current());
            return s.grep(this._pages, s.proxy(function(t, e) {
                return t.start <= i && t.end >= i
            }, this)).pop()
        }, n.prototype.getPosition = function(t) {
            var e, i, n = this._core.settings;
            return "page" == n.slideBy ? (e = s.inArray(this.current(), this._pages), i = this._pages.length, t ? ++e : --e, e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()), i = this._core.items().length, t ? e += n.slideBy : e -= n.slideBy), e
        }, n.prototype.next = function(t) {
            s.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
        }, n.prototype.prev = function(t) {
            s.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
        }, n.prototype.to = function(t, e, i) {
            var n;
            !i && this._pages.length ? (n = this._pages.length, s.proxy(this._overrides.to, this._core)(this._pages[(t % n + n) % n].start, e)) : s.proxy(this._overrides.to, this._core)(t, e)
        }, s.fn.owlCarousel.Constructor.Plugins.Navigation = n
    }(window.Zepto || window.jQuery, window, document),
    function(n, r, t, e) {
        "use strict";
        var i = function(t) {
            this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": n.proxy(function(t) {
                    t.namespace && "URLHash" === this._core.settings.startPosition && n(r).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": n.proxy(function(t) {
                    if (t.namespace) {
                        var e = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!e) return;
                        this._hashes[e] = t.content
                    }
                }, this),
                "changed.owl.carousel": n.proxy(function(t) {
                    if (t.namespace && "position" === t.property.name) {
                        var i = this._core.items(this._core.relative(this._core.current())),
                            e = n.map(this._hashes, function(t, e) {
                                return t === i ? e : null
                            }).join();
                        if (!e || r.location.hash.slice(1) === e) return;
                        r.location.hash = e
                    }
                }, this)
            }, this._core.options = n.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), n(r).on("hashchange.owl.navigation", n.proxy(function(t) {
                var e = r.location.hash.substring(1),
                    i = this._core.$stage.children(),
                    n = this._hashes[e] && i.index(this._hashes[e]);
                void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
            }, this))
        };
        i.Defaults = {
            URLhashListener: !1
        }, i.prototype.destroy = function() {
            var t, e;
            for (t in n(r).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, n.fn.owlCarousel.Constructor.Plugins.Hash = i
    }(window.Zepto || window.jQuery, window, document),
    function(r, t, e, s) {
        var o = r("<support>").get(0).style,
            a = "Webkit Moz O ms".split(" "),
            i = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            n = function() {
                return !!c("transform")
            },
            l = function() {
                return !!c("perspective")
            },
            u = function() {
                return !!c("animation")
            };

        function c(t, i) {
            var n = !1,
                e = t.charAt(0).toUpperCase() + t.slice(1);
            return r.each((t + " " + a.join(e + " ") + e).split(" "), function(t, e) {
                if (o[e] !== s) return n = !i || e, !1
            }), n
        }

        function h(t) {
            return c(t, !0)
        }(function() {
            return !!c("transition")
        })() && (r.support.transition = new String(h("transition")), r.support.transition.end = i.transition.end[r.support.transition]), u() && (r.support.animation = new String(h("animation")), r.support.animation.end = i.animation.end[r.support.animation]), n() && (r.support.transform = new String(h("transform")), r.support.transform3d = l())
    }(window.Zepto || window.jQuery, window, document),
    /*!
     * Select2 4.0.5
     * https://select2.github.io
     *
     * Released under the MIT license
     * https://github.com/select2/select2/blob/master/LICENSE.md
     */
    function(i) {
        "function" == typeof define && define.amd ? define(["jquery"], i) : "object" == typeof module && module.exports ? module.exports = function(t, e) {
            return void 0 === e && (e = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), i(e), e
        } : i(jQuery)
    }(function(i) {
        var t = function() {
                if (i && i.fn && i.fn.select2 && i.fn.select2.amd) var t = i.fn.select2.amd;
                var e, r, u;
                return t && t.requirejs || (t ? r = t : t = {}, function(d) {
                    var s, o, f, g, m = {},
                        v = {},
                        y = {},
                        _ = {},
                        i = Object.prototype.hasOwnProperty,
                        n = [].slice,
                        x = /\.js$/;

                    function b(t, e) {
                        return i.call(t, e)
                    }

                    function a(t, e) {
                        var i, n, r, s, o, a, l, u, c, h, p, d = e && e.split("/"),
                            f = y.map,
                            g = f && f["*"] || {};
                        if (t) {
                            for (o = (t = t.split("/")).length - 1, y.nodeIdCompat && x.test(t[o]) && (t[o] = t[o].replace(x, "")), "." === t[0].charAt(0) && d && (t = d.slice(0, d.length - 1).concat(t)), c = 0; c < t.length; c++)
                                if ("." === (p = t[c])) t.splice(c, 1), c -= 1;
                                else if (".." === p) {
                                if (0 === c || 1 === c && ".." === t[2] || ".." === t[c - 1]) continue;
                                0 < c && (t.splice(c - 1, 2), c -= 2)
                            }
                            t = t.join("/")
                        }
                        if ((d || g) && f) {
                            for (c = (i = t.split("/")).length; 0 < c; c -= 1) {
                                if (n = i.slice(0, c).join("/"), d)
                                    for (h = d.length; 0 < h; h -= 1)
                                        if ((r = f[d.slice(0, h).join("/")]) && (r = r[n])) {
                                            s = r, a = c;
                                            break
                                        } if (s) break;
                                !l && g && g[n] && (l = g[n], u = c)
                            }!s && l && (s = l, a = u), s && (i.splice(0, a, s), t = i.join("/"))
                        }
                        return t
                    }

                    function w(e, i) {
                        return function() {
                            var t = n.call(arguments, 0);
                            return "string" != typeof t[0] && 1 === t.length && t.push(null), o.apply(d, t.concat([e, i]))
                        }
                    }

                    function T(e) {
                        return function(t) {
                            m[e] = t
                        }
                    }

                    function C(t) {
                        if (b(v, t)) {
                            var e = v[t];
                            delete v[t], _[t] = !0, s.apply(d, e)
                        }
                        if (!b(m, t) && !b(_, t)) throw new Error("No " + t);
                        return m[t]
                    }

                    function l(t) {
                        var e, i = t ? t.indexOf("!") : -1;
                        return -1 < i && (e = t.substring(0, i), t = t.substring(i + 1, t.length)), [e, t]
                    }

                    function S(t) {
                        return t ? l(t) : []
                    }
                    f = function(t, e) {
                        var i, n, r = l(t),
                            s = r[0],
                            o = e[1];
                        return t = r[1], s && (i = C(s = a(s, o))), s ? t = i && i.normalize ? i.normalize(t, (n = o, function(t) {
                            return a(t, n)
                        })) : a(t, o) : (s = (r = l(t = a(t, o)))[0], t = r[1], s && (i = C(s))), {
                            f: s ? s + "!" + t : t,
                            n: t,
                            pr: s,
                            p: i
                        }
                    }, g = {
                        require: function(t) {
                            return w(t)
                        },
                        exports: function(t) {
                            var e = m[t];
                            return void 0 !== e ? e : m[t] = {}
                        },
                        module: function(t) {
                            return {
                                id: t,
                                uri: "",
                                exports: m[t],
                                config: (e = t, function() {
                                    return y && y.config && y.config[e] || {}
                                })
                            };
                            var e
                        }
                    }, s = function(t, e, i, n) {
                        var r, s, o, a, l, u, c, h = [],
                            p = typeof i;
                        if (u = S(n = n || t), "undefined" === p || "function" === p) {
                            for (e = !e.length && i.length ? ["require", "exports", "module"] : e, l = 0; l < e.length; l += 1)
                                if ("require" === (s = (a = f(e[l], u)).f)) h[l] = g.require(t);
                                else if ("exports" === s) h[l] = g.exports(t), c = !0;
                            else if ("module" === s) r = h[l] = g.module(t);
                            else if (b(m, s) || b(v, s) || b(_, s)) h[l] = C(s);
                            else {
                                if (!a.p) throw new Error(t + " missing " + s);
                                a.p.load(a.n, w(n, !0), T(s), {}), h[l] = m[s]
                            }
                            o = i ? i.apply(m[t], h) : void 0, t && (r && r.exports !== d && r.exports !== m[t] ? m[t] = r.exports : o === d && c || (m[t] = o))
                        } else t && (m[t] = i)
                    }, e = r = o = function(t, e, i, n, r) {
                        if ("string" == typeof t) return g[t] ? g[t](e) : C(f(t, S(e)).f);
                        if (!t.splice) {
                            if ((y = t).deps && o(y.deps, y.callback), !e) return;
                            e.splice ? (t = e, e = i, i = null) : t = d
                        }
                        return e = e || function() {}, "function" == typeof i && (i = n, n = r), n ? s(d, t, e, i) : setTimeout(function() {
                            s(d, t, e, i)
                        }, 4), o
                    }, o.config = function(t) {
                        return o(t)
                    }, e._defined = m, (u = function(t, e, i) {
                        if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
                        e.splice || (i = e, e = []), b(m, t) || b(v, t) || (v[t] = [t, e, i])
                    }).amd = {
                        jQuery: !0
                    }
                }(), t.requirejs = e, t.require = r, t.define = u), t.define("almond", function() {}), t.define("jquery", [], function() {
                    var t = i || $;
                    return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
                }), t.define("select2/utils", ["jquery"], function(s) {
                    var t = {};

                    function c(t) {
                        var e = t.prototype,
                            i = [];
                        for (var n in e) {
                            "function" == typeof e[n] && ("constructor" !== n && i.push(n))
                        }
                        return i
                    }
                    t.Extend = function(t, e) {
                        var i = {}.hasOwnProperty;

                        function n() {
                            this.constructor = t
                        }
                        for (var r in e) i.call(e, r) && (t[r] = e[r]);
                        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                    }, t.Decorate = function(n, r) {
                        var t = c(r),
                            e = c(n);

                        function s() {
                            var t = Array.prototype.unshift,
                                e = r.prototype.constructor.length,
                                i = n.prototype.constructor;
                            0 < e && (t.call(arguments, n.prototype.constructor), i = r.prototype.constructor), i.apply(this, arguments)
                        }
                        r.displayName = n.displayName, s.prototype = new function() {
                            this.constructor = s
                        };
                        for (var i = 0; i < e.length; i++) {
                            var o = e[i];
                            s.prototype[o] = n.prototype[o]
                        }
                        for (var a = function(t) {
                                var e = function() {};
                                t in s.prototype && (e = s.prototype[t]);
                                var i = r.prototype[t];
                                return function() {
                                    return Array.prototype.unshift.call(arguments, e), i.apply(this, arguments)
                                }
                            }, l = 0; l < t.length; l++) {
                            var u = t[l];
                            s.prototype[u] = a(u)
                        }
                        return s
                    };
                    var e = function() {
                        this.listeners = {}
                    };
                    return e.prototype.on = function(t, e) {
                        this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e]
                    }, e.prototype.trigger = function(t) {
                        var e = Array.prototype.slice,
                            i = e.call(arguments, 1);
                        this.listeners = this.listeners || {}, null == i && (i = []), 0 === i.length && i.push({}), (i[0]._type = t) in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    }, e.prototype.invoke = function(t, e) {
                        for (var i = 0, n = t.length; i < n; i++) t[i].apply(this, e)
                    }, t.Observable = e, t.generateChars = function(t) {
                        for (var e = "", i = 0; i < t; i++) {
                            e += Math.floor(36 * Math.random()).toString(36)
                        }
                        return e
                    }, t.bind = function(t, e) {
                        return function() {
                            t.apply(e, arguments)
                        }
                    }, t._convertData = function(t) {
                        for (var e in t) {
                            var i = e.split("-"),
                                n = t;
                            if (1 !== i.length) {
                                for (var r = 0; r < i.length; r++) {
                                    var s = i[r];
                                    (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in n || (n[s] = {}), r == i.length - 1 && (n[s] = t[e]), n = n[s]
                                }
                                delete t[e]
                            }
                        }
                        return t
                    }, t.hasScroll = function(t, e) {
                        var i = s(e),
                            n = e.style.overflowX,
                            r = e.style.overflowY;
                        return (n !== r || "hidden" !== r && "visible" !== r) && ("scroll" === n || "scroll" === r || (i.innerHeight() < e.scrollHeight || i.innerWidth() < e.scrollWidth))
                    }, t.escapeMarkup = function(t) {
                        var e = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;"
                        };
                        return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, function(t) {
                            return e[t]
                        })
                    }, t.appendMany = function(t, e) {
                        if ("1.7" === s.fn.jquery.substr(0, 3)) {
                            var i = s();
                            s.map(e, function(t) {
                                i = i.add(t)
                            }), e = i
                        }
                        t.append(e)
                    }, t
                }), t.define("select2/results", ["jquery", "./utils"], function(p, t) {
                    function n(t, e, i) {
                        this.$element = t, this.data = i, this.options = e, n.__super__.constructor.call(this)
                    }
                    return t.Extend(n, t.Observable), n.prototype.render = function() {
                        var t = p('<ul class="select2-results__options" role="tree"></ul>');
                        return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t
                    }, n.prototype.clear = function() {
                        this.$results.empty()
                    }, n.prototype.displayMessage = function(t) {
                        var e = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var i = p('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                            n = this.options.get("translations").get(t.message);
                        i.append(e(n(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
                    }, n.prototype.hideMessages = function() {
                        this.$results.find(".select2-results__message").remove()
                    }, n.prototype.append = function(t) {
                        this.hideLoading();
                        var e = [];
                        if (null != t.results && 0 !== t.results.length) {
                            t.results = this.sort(t.results);
                            for (var i = 0; i < t.results.length; i++) {
                                var n = t.results[i],
                                    r = this.option(n);
                                e.push(r)
                            }
                            this.$results.append(e)
                        } else 0 === this.$results.children().length && this.trigger("results:message", {
                            message: "noResults"
                        })
                    }, n.prototype.position = function(t, e) {
                        e.find(".select2-results").append(t)
                    }, n.prototype.sort = function(t) {
                        return this.options.get("sorter")(t)
                    }, n.prototype.highlightFirstItem = function() {
                        var t = this.$results.find(".select2-results__option[aria-selected]"),
                            e = t.filter("[aria-selected=true]");
                        0 < e.length ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"), this.ensureHighlightVisible()
                    }, n.prototype.setClasses = function() {
                        var e = this;
                        this.data.current(function(t) {
                            var n = p.map(t, function(t) {
                                return t.id.toString()
                            });
                            e.$results.find(".select2-results__option[aria-selected]").each(function() {
                                var t = p(this),
                                    e = p.data(this, "data"),
                                    i = "" + e.id;
                                null != e.element && e.element.selected || null == e.element && -1 < p.inArray(i, n) ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                            })
                        })
                    }, n.prototype.showLoading = function(t) {
                        this.hideLoading();
                        var e = {
                                disabled: !0,
                                loading: !0,
                                text: this.options.get("translations").get("searching")(t)
                            },
                            i = this.option(e);
                        i.className += " loading-results", this.$results.prepend(i)
                    }, n.prototype.hideLoading = function() {
                        this.$results.find(".loading-results").remove()
                    }, n.prototype.option = function(t) {
                        var e = document.createElement("li");
                        e.className = "select2-results__option";
                        var i = {
                            role: "treeitem",
                            "aria-selected": "false"
                        };
                        for (var n in t.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == t.id && delete i["aria-selected"], null != t._resultId && (e.id = t._resultId), t.title && (e.title = t.title), t.children && (i.role = "group", i["aria-label"] = t.text, delete i["aria-selected"]), i) {
                            var r = i[n];
                            e.setAttribute(n, r)
                        }
                        if (t.children) {
                            var s = p(e),
                                o = document.createElement("strong");
                            o.className = "select2-results__group";
                            p(o);
                            this.template(t, o);
                            for (var a = [], l = 0; l < t.children.length; l++) {
                                var u = t.children[l],
                                    c = this.option(u);
                                a.push(c)
                            }
                            var h = p("<ul></ul>", {
                                class: "select2-results__options select2-results__options--nested"
                            });
                            h.append(a), s.append(o), s.append(h)
                        } else this.template(t, e);
                        return p.data(e, "data", t), e
                    }, n.prototype.bind = function(e, t) {
                        var l = this,
                            i = e.id + "-results";
                        this.$results.attr("id", i), e.on("results:all", function(t) {
                            l.clear(), l.append(t.data), e.isOpen() && (l.setClasses(), l.highlightFirstItem())
                        }), e.on("results:append", function(t) {
                            l.append(t.data), e.isOpen() && l.setClasses()
                        }), e.on("query", function(t) {
                            l.hideMessages(), l.showLoading(t)
                        }), e.on("select", function() {
                            e.isOpen() && (l.setClasses(), l.highlightFirstItem())
                        }), e.on("unselect", function() {
                            e.isOpen() && (l.setClasses(), l.highlightFirstItem())
                        }), e.on("open", function() {
                            l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible()
                        }), e.on("close", function() {
                            l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant")
                        }), e.on("results:toggle", function() {
                            var t = l.getHighlightedResults();
                            0 !== t.length && t.trigger("mouseup")
                        }), e.on("results:select", function() {
                            var t = l.getHighlightedResults();
                            if (0 !== t.length) {
                                var e = t.data("data");
                                "true" == t.attr("aria-selected") ? l.trigger("close", {}) : l.trigger("select", {
                                    data: e
                                })
                            }
                        }), e.on("results:previous", function() {
                            var t = l.getHighlightedResults(),
                                e = l.$results.find("[aria-selected]"),
                                i = e.index(t);
                            if (0 !== i) {
                                var n = i - 1;
                                0 === t.length && (n = 0);
                                var r = e.eq(n);
                                r.trigger("mouseenter");
                                var s = l.$results.offset().top,
                                    o = r.offset().top,
                                    a = l.$results.scrollTop() + (o - s);
                                0 === n ? l.$results.scrollTop(0) : o - s < 0 && l.$results.scrollTop(a)
                            }
                        }), e.on("results:next", function() {
                            var t = l.getHighlightedResults(),
                                e = l.$results.find("[aria-selected]"),
                                i = e.index(t) + 1;
                            if (!(i >= e.length)) {
                                var n = e.eq(i);
                                n.trigger("mouseenter");
                                var r = l.$results.offset().top + l.$results.outerHeight(!1),
                                    s = n.offset().top + n.outerHeight(!1),
                                    o = l.$results.scrollTop() + s - r;
                                0 === i ? l.$results.scrollTop(0) : r < s && l.$results.scrollTop(o)
                            }
                        }), e.on("results:focus", function(t) {
                            t.element.addClass("select2-results__option--highlighted")
                        }), e.on("results:message", function(t) {
                            l.displayMessage(t)
                        }), p.fn.mousewheel && this.$results.on("mousewheel", function(t) {
                            var e = l.$results.scrollTop(),
                                i = l.$results.get(0).scrollHeight - e + t.deltaY,
                                n = 0 < t.deltaY && e - t.deltaY <= 0,
                                r = t.deltaY < 0 && i <= l.$results.height();
                            n ? (l.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : r && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), t.preventDefault(), t.stopPropagation())
                        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(t) {
                            var e = p(this),
                                i = e.data("data");
                            "true" !== e.attr("aria-selected") ? l.trigger("select", {
                                originalEvent: t,
                                data: i
                            }) : l.options.get("multiple") ? l.trigger("unselect", {
                                originalEvent: t,
                                data: i
                            }) : l.trigger("close", {})
                        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(t) {
                            var e = p(this).data("data");
                            l.getHighlightedResults().removeClass("select2-results__option--highlighted"), l.trigger("results:focus", {
                                data: e,
                                element: p(this)
                            })
                        })
                    }, n.prototype.getHighlightedResults = function() {
                        return this.$results.find(".select2-results__option--highlighted")
                    }, n.prototype.destroy = function() {
                        this.$results.remove()
                    }, n.prototype.ensureHighlightVisible = function() {
                        var t = this.getHighlightedResults();
                        if (0 !== t.length) {
                            var e = this.$results.find("[aria-selected]").index(t),
                                i = this.$results.offset().top,
                                n = t.offset().top,
                                r = this.$results.scrollTop() + (n - i),
                                s = n - i;
                            r -= 2 * t.outerHeight(!1), e <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(r)
                        }
                    }, n.prototype.template = function(t, e) {
                        var i = this.options.get("templateResult"),
                            n = this.options.get("escapeMarkup"),
                            r = i(t, e);
                        null == r ? e.style.display = "none" : "string" == typeof r ? e.innerHTML = n(r) : p(e).append(r)
                    }, n
                }), t.define("select2/keys", [], function() {
                    return {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        ESC: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46
                    }
                }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(i, t, r) {
                    function n(t, e) {
                        this.$element = t, this.options = e, n.__super__.constructor.call(this)
                    }
                    return t.Extend(n, t.Observable), n.prototype.render = function() {
                        var t = i('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                        return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t
                    }, n.prototype.bind = function(t, e) {
                        var i = this,
                            n = (t.id, t.id + "-results");
                        this.container = t, this.$selection.on("focus", function(t) {
                            i.trigger("focus", t)
                        }), this.$selection.on("blur", function(t) {
                            i._handleBlur(t)
                        }), this.$selection.on("keydown", function(t) {
                            i.trigger("keypress", t), t.which === r.SPACE && t.preventDefault()
                        }), t.on("results:focus", function(t) {
                            i.$selection.attr("aria-activedescendant", t.data._resultId)
                        }), t.on("selection:update", function(t) {
                            i.update(t.data)
                        }), t.on("open", function() {
                            i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", n), i._attachCloseHandler(t)
                        }), t.on("close", function() {
                            i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.focus(), i._detachCloseHandler(t)
                        }), t.on("enable", function() {
                            i.$selection.attr("tabindex", i._tabindex)
                        }), t.on("disable", function() {
                            i.$selection.attr("tabindex", "-1")
                        })
                    }, n.prototype._handleBlur = function(t) {
                        var e = this;
                        window.setTimeout(function() {
                            document.activeElement == e.$selection[0] || i.contains(e.$selection[0], document.activeElement) || e.trigger("blur", t)
                        }, 1)
                    }, n.prototype._attachCloseHandler = function(t) {
                        i(document.body).on("mousedown.select2." + t.id, function(t) {
                            var e = i(t.target).closest(".select2");
                            i(".select2.select2-container--open").each(function() {
                                var t = i(this);
                                this != e[0] && t.data("element").select2("close")
                            })
                        })
                    }, n.prototype._detachCloseHandler = function(t) {
                        i(document.body).off("mousedown.select2." + t.id)
                    }, n.prototype.position = function(t, e) {
                        e.find(".selection").append(t)
                    }, n.prototype.destroy = function() {
                        this._detachCloseHandler(this.container)
                    }, n.prototype.update = function(t) {
                        throw new Error("The `update` method must be defined in child classes.")
                    }, n
                }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(t, e, i, n) {
                    function r() {
                        r.__super__.constructor.apply(this, arguments)
                    }
                    return i.Extend(r, e), r.prototype.render = function() {
                        var t = r.__super__.render.call(this);
                        return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t
                    }, r.prototype.bind = function(e, t) {
                        var i = this;
                        r.__super__.bind.apply(this, arguments);
                        var n = e.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", n), this.$selection.attr("aria-labelledby", n), this.$selection.on("mousedown", function(t) {
                            1 === t.which && i.trigger("toggle", {
                                originalEvent: t
                            })
                        }), this.$selection.on("focus", function(t) {}), this.$selection.on("blur", function(t) {}), e.on("focus", function(t) {
                            e.isOpen() || i.$selection.focus()
                        }), e.on("selection:update", function(t) {
                            i.update(t.data)
                        })
                    }, r.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, r.prototype.display = function(t, e) {
                        var i = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(i(t, e))
                    }, r.prototype.selectionContainer = function() {
                        return t("<span></span>")
                    }, r.prototype.update = function(t) {
                        if (0 !== t.length) {
                            var e = t[0],
                                i = this.$selection.find(".select2-selection__rendered"),
                                n = this.display(e, i);
                            i.empty().append(n), i.prop("title", e.title || e.text)
                        } else this.clear()
                    }, r
                }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(n, t, a) {
                    function r(t, e) {
                        r.__super__.constructor.apply(this, arguments)
                    }
                    return a.Extend(r, t), r.prototype.render = function() {
                        var t = r.__super__.render.call(this);
                        return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t
                    }, r.prototype.bind = function(t, e) {
                        var i = this;
                        r.__super__.bind.apply(this, arguments), this.$selection.on("click", function(t) {
                            i.trigger("toggle", {
                                originalEvent: t
                            })
                        }), this.$selection.on("click", ".select2-selection__choice__remove", function(t) {
                            if (!i.options.get("disabled")) {
                                var e = n(this).parent().data("data");
                                i.trigger("unselect", {
                                    originalEvent: t,
                                    data: e
                                })
                            }
                        })
                    }, r.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, r.prototype.display = function(t, e) {
                        var i = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(i(t, e))
                    }, r.prototype.selectionContainer = function() {
                        return n('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                    }, r.prototype.update = function(t) {
                        if (this.clear(), 0 !== t.length) {
                            for (var e = [], i = 0; i < t.length; i++) {
                                var n = t[i],
                                    r = this.selectionContainer(),
                                    s = this.display(n, r);
                                r.append(s), r.prop("title", n.title || n.text), r.data("data", n), e.push(r)
                            }
                            var o = this.$selection.find(".select2-selection__rendered");
                            a.appendMany(o, e)
                        }
                    }, r
                }), t.define("select2/selection/placeholder", ["../utils"], function(t) {
                    function e(t, e, i) {
                        this.placeholder = this.normalizePlaceholder(i.get("placeholder")), t.call(this, e, i)
                    }
                    return e.prototype.normalizePlaceholder = function(t, e) {
                        return "string" == typeof e && (e = {
                            id: "",
                            text: e
                        }), e
                    }, e.prototype.createPlaceholder = function(t, e) {
                        var i = this.selectionContainer();
                        return i.html(this.display(e)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), i
                    }, e.prototype.update = function(t, e) {
                        var i = 1 == e.length && e[0].id != this.placeholder.id;
                        if (1 < e.length || i) return t.call(this, e);
                        this.clear();
                        var n = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(n)
                    }, e
                }), t.define("select2/selection/allowClear", ["jquery", "../keys"], function(n, r) {
                    function t() {}
                    return t.prototype.bind = function(t, e, i) {
                        var n = this;
                        t.call(this, e, i), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(t) {
                            n._handleClear(t)
                        }), e.on("keypress", function(t) {
                            n._handleKeyboardClear(t, e)
                        })
                    }, t.prototype._handleClear = function(t, e) {
                        if (!this.options.get("disabled")) {
                            var i = this.$selection.find(".select2-selection__clear");
                            if (0 !== i.length) {
                                e.stopPropagation();
                                for (var n = i.data("data"), r = 0; r < n.length; r++) {
                                    var s = {
                                        data: n[r]
                                    };
                                    if (this.trigger("unselect", s), s.prevented) return
                                }
                                this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }, t.prototype._handleKeyboardClear = function(t, e, i) {
                        i.isOpen() || e.which != r.DELETE && e.which != r.BACKSPACE || this._handleClear(e)
                    }, t.prototype.update = function(t, e) {
                        if (t.call(this, e), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === e.length)) {
                            var i = n('<span class="select2-selection__clear">&times;</span>');
                            i.data("data", e), this.$selection.find(".select2-selection__rendered").prepend(i)
                        }
                    }, t
                }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(n, t, o) {
                    function e(t, e, i) {
                        t.call(this, e, i)
                    }
                    return e.prototype.render = function(t) {
                        var e = n('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                        this.$searchContainer = e, this.$search = e.find("input");
                        var i = t.call(this);
                        return this._transferTabIndex(), i
                    }, e.prototype.bind = function(t, e, i) {
                        var n = this;
                        t.call(this, e, i), e.on("open", function() {
                            n.$search.trigger("focus")
                        }), e.on("close", function() {
                            n.$search.val(""), n.$search.removeAttr("aria-activedescendant"), n.$search.trigger("focus")
                        }), e.on("enable", function() {
                            n.$search.prop("disabled", !1), n._transferTabIndex()
                        }), e.on("disable", function() {
                            n.$search.prop("disabled", !0)
                        }), e.on("focus", function(t) {
                            n.$search.trigger("focus")
                        }), e.on("results:focus", function(t) {
                            n.$search.attr("aria-activedescendant", t.id)
                        }), this.$selection.on("focusin", ".select2-search--inline", function(t) {
                            n.trigger("focus", t)
                        }), this.$selection.on("focusout", ".select2-search--inline", function(t) {
                            n._handleBlur(t)
                        }), this.$selection.on("keydown", ".select2-search--inline", function(t) {
                            if (t.stopPropagation(), n.trigger("keypress", t), n._keyUpPrevented = t.isDefaultPrevented(), t.which === o.BACKSPACE && "" === n.$search.val()) {
                                var e = n.$searchContainer.prev(".select2-selection__choice");
                                if (0 < e.length) {
                                    var i = e.data("data");
                                    n.searchRemoveChoice(i), t.preventDefault()
                                }
                            }
                        });
                        var r = document.documentMode,
                            s = r && r <= 11;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function(t) {
                            s ? n.$selection.off("input.search input.searchcheck") : n.$selection.off("keyup.search")
                        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(t) {
                            if (s && "input" === t.type) n.$selection.off("input.search input.searchcheck");
                            else {
                                var e = t.which;
                                e != o.SHIFT && e != o.CTRL && e != o.ALT && e != o.TAB && n.handleSearch(t)
                            }
                        })
                    }, e.prototype._transferTabIndex = function(t) {
                        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                    }, e.prototype.createPlaceholder = function(t, e) {
                        this.$search.attr("placeholder", e.text)
                    }, e.prototype.update = function(t, e) {
                        var i = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), i && this.$search.focus()
                    }, e.prototype.handleSearch = function() {
                        if (this.resizeSearch(), !this._keyUpPrevented) {
                            var t = this.$search.val();
                            this.trigger("query", {
                                term: t
                            })
                        }
                        this._keyUpPrevented = !1
                    }, e.prototype.searchRemoveChoice = function(t, e) {
                        this.trigger("unselect", {
                            data: e
                        }), this.$search.val(e.text), this.handleSearch()
                    }, e.prototype.resizeSearch = function() {
                        this.$search.css("width", "25px");
                        var t = "";
                        "" !== this.$search.attr("placeholder") ? t = this.$selection.find(".select2-selection__rendered").innerWidth() : t = .75 * (this.$search.val().length + 1) + "em";
                        this.$search.css("width", t)
                    }, e
                }), t.define("select2/selection/eventRelay", ["jquery"], function(o) {
                    function t() {}
                    return t.prototype.bind = function(t, e, i) {
                        var n = this,
                            r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                            s = ["opening", "closing", "selecting", "unselecting"];
                        t.call(this, e, i), e.on("*", function(t, e) {
                            if (-1 !== o.inArray(t, r)) {
                                e = e || {};
                                var i = o.Event("select2:" + t, {
                                    params: e
                                });
                                n.$element.trigger(i), -1 !== o.inArray(t, s) && (e.prevented = i.isDefaultPrevented())
                            }
                        })
                    }, t
                }), t.define("select2/translation", ["jquery", "require"], function(e, i) {
                    function n(t) {
                        this.dict = t || {}
                    }
                    return n.prototype.all = function() {
                        return this.dict
                    }, n.prototype.get = function(t) {
                        return this.dict[t]
                    }, n.prototype.extend = function(t) {
                        this.dict = e.extend({}, t.all(), this.dict)
                    }, n._cache = {}, n.loadPath = function(t) {
                        if (!(t in n._cache)) {
                            var e = i(t);
                            n._cache[t] = e
                        }
                        return new n(n._cache[t])
                    }, n
                }), t.define("select2/diacritics", [], function() {
                    return {
                        "Ⓐ": "A",
                        "Ａ": "A",
                        "À": "A",
                        "Á": "A",
                        "Â": "A",
                        "Ầ": "A",
                        "Ấ": "A",
                        "Ẫ": "A",
                        "Ẩ": "A",
                        "Ã": "A",
                        "Ā": "A",
                        "Ă": "A",
                        "Ằ": "A",
                        "Ắ": "A",
                        "Ẵ": "A",
                        "Ẳ": "A",
                        "Ȧ": "A",
                        "Ǡ": "A",
                        "Ä": "A",
                        "Ǟ": "A",
                        "Ả": "A",
                        "Å": "A",
                        "Ǻ": "A",
                        "Ǎ": "A",
                        "Ȁ": "A",
                        "Ȃ": "A",
                        "Ạ": "A",
                        "Ậ": "A",
                        "Ặ": "A",
                        "Ḁ": "A",
                        "Ą": "A",
                        "Ⱥ": "A",
                        "Ɐ": "A",
                        "Ꜳ": "AA",
                        "Æ": "AE",
                        "Ǽ": "AE",
                        "Ǣ": "AE",
                        "Ꜵ": "AO",
                        "Ꜷ": "AU",
                        "Ꜹ": "AV",
                        "Ꜻ": "AV",
                        "Ꜽ": "AY",
                        "Ⓑ": "B",
                        "Ｂ": "B",
                        "Ḃ": "B",
                        "Ḅ": "B",
                        "Ḇ": "B",
                        "Ƀ": "B",
                        "Ƃ": "B",
                        "Ɓ": "B",
                        "Ⓒ": "C",
                        "Ｃ": "C",
                        "Ć": "C",
                        "Ĉ": "C",
                        "Ċ": "C",
                        "Č": "C",
                        "Ç": "C",
                        "Ḉ": "C",
                        "Ƈ": "C",
                        "Ȼ": "C",
                        "Ꜿ": "C",
                        "Ⓓ": "D",
                        "Ｄ": "D",
                        "Ḋ": "D",
                        "Ď": "D",
                        "Ḍ": "D",
                        "Ḑ": "D",
                        "Ḓ": "D",
                        "Ḏ": "D",
                        "Đ": "D",
                        "Ƌ": "D",
                        "Ɗ": "D",
                        "Ɖ": "D",
                        "Ꝺ": "D",
                        "Ǳ": "DZ",
                        "Ǆ": "DZ",
                        "ǲ": "Dz",
                        "ǅ": "Dz",
                        "Ⓔ": "E",
                        "Ｅ": "E",
                        "È": "E",
                        "É": "E",
                        "Ê": "E",
                        "Ề": "E",
                        "Ế": "E",
                        "Ễ": "E",
                        "Ể": "E",
                        "Ẽ": "E",
                        "Ē": "E",
                        "Ḕ": "E",
                        "Ḗ": "E",
                        "Ĕ": "E",
                        "Ė": "E",
                        "Ë": "E",
                        "Ẻ": "E",
                        "Ě": "E",
                        "Ȅ": "E",
                        "Ȇ": "E",
                        "Ẹ": "E",
                        "Ệ": "E",
                        "Ȩ": "E",
                        "Ḝ": "E",
                        "Ę": "E",
                        "Ḙ": "E",
                        "Ḛ": "E",
                        "Ɛ": "E",
                        "Ǝ": "E",
                        "Ⓕ": "F",
                        "Ｆ": "F",
                        "Ḟ": "F",
                        "Ƒ": "F",
                        "Ꝼ": "F",
                        "Ⓖ": "G",
                        "Ｇ": "G",
                        "Ǵ": "G",
                        "Ĝ": "G",
                        "Ḡ": "G",
                        "Ğ": "G",
                        "Ġ": "G",
                        "Ǧ": "G",
                        "Ģ": "G",
                        "Ǥ": "G",
                        "Ɠ": "G",
                        "Ꞡ": "G",
                        "Ᵹ": "G",
                        "Ꝿ": "G",
                        "Ⓗ": "H",
                        "Ｈ": "H",
                        "Ĥ": "H",
                        "Ḣ": "H",
                        "Ḧ": "H",
                        "Ȟ": "H",
                        "Ḥ": "H",
                        "Ḩ": "H",
                        "Ḫ": "H",
                        "Ħ": "H",
                        "Ⱨ": "H",
                        "Ⱶ": "H",
                        "Ɥ": "H",
                        "Ⓘ": "I",
                        "Ｉ": "I",
                        "Ì": "I",
                        "Í": "I",
                        "Î": "I",
                        "Ĩ": "I",
                        "Ī": "I",
                        "Ĭ": "I",
                        "İ": "I",
                        "Ï": "I",
                        "Ḯ": "I",
                        "Ỉ": "I",
                        "Ǐ": "I",
                        "Ȉ": "I",
                        "Ȋ": "I",
                        "Ị": "I",
                        "Į": "I",
                        "Ḭ": "I",
                        "Ɨ": "I",
                        "Ⓙ": "J",
                        "Ｊ": "J",
                        "Ĵ": "J",
                        "Ɉ": "J",
                        "Ⓚ": "K",
                        "Ｋ": "K",
                        "Ḱ": "K",
                        "Ǩ": "K",
                        "Ḳ": "K",
                        "Ķ": "K",
                        "Ḵ": "K",
                        "Ƙ": "K",
                        "Ⱪ": "K",
                        "Ꝁ": "K",
                        "Ꝃ": "K",
                        "Ꝅ": "K",
                        "Ꞣ": "K",
                        "Ⓛ": "L",
                        "Ｌ": "L",
                        "Ŀ": "L",
                        "Ĺ": "L",
                        "Ľ": "L",
                        "Ḷ": "L",
                        "Ḹ": "L",
                        "Ļ": "L",
                        "Ḽ": "L",
                        "Ḻ": "L",
                        "Ł": "L",
                        "Ƚ": "L",
                        "Ɫ": "L",
                        "Ⱡ": "L",
                        "Ꝉ": "L",
                        "Ꝇ": "L",
                        "Ꞁ": "L",
                        "Ǉ": "LJ",
                        "ǈ": "Lj",
                        "Ⓜ": "M",
                        "Ｍ": "M",
                        "Ḿ": "M",
                        "Ṁ": "M",
                        "Ṃ": "M",
                        "Ɱ": "M",
                        "Ɯ": "M",
                        "Ⓝ": "N",
                        "Ｎ": "N",
                        "Ǹ": "N",
                        "Ń": "N",
                        "Ñ": "N",
                        "Ṅ": "N",
                        "Ň": "N",
                        "Ṇ": "N",
                        "Ņ": "N",
                        "Ṋ": "N",
                        "Ṉ": "N",
                        "Ƞ": "N",
                        "Ɲ": "N",
                        "Ꞑ": "N",
                        "Ꞥ": "N",
                        "Ǌ": "NJ",
                        "ǋ": "Nj",
                        "Ⓞ": "O",
                        "Ｏ": "O",
                        "Ò": "O",
                        "Ó": "O",
                        "Ô": "O",
                        "Ồ": "O",
                        "Ố": "O",
                        "Ỗ": "O",
                        "Ổ": "O",
                        "Õ": "O",
                        "Ṍ": "O",
                        "Ȭ": "O",
                        "Ṏ": "O",
                        "Ō": "O",
                        "Ṑ": "O",
                        "Ṓ": "O",
                        "Ŏ": "O",
                        "Ȯ": "O",
                        "Ȱ": "O",
                        "Ö": "O",
                        "Ȫ": "O",
                        "Ỏ": "O",
                        "Ő": "O",
                        "Ǒ": "O",
                        "Ȍ": "O",
                        "Ȏ": "O",
                        "Ơ": "O",
                        "Ờ": "O",
                        "Ớ": "O",
                        "Ỡ": "O",
                        "Ở": "O",
                        "Ợ": "O",
                        "Ọ": "O",
                        "Ộ": "O",
                        "Ǫ": "O",
                        "Ǭ": "O",
                        "Ø": "O",
                        "Ǿ": "O",
                        "Ɔ": "O",
                        "Ɵ": "O",
                        "Ꝋ": "O",
                        "Ꝍ": "O",
                        "Ƣ": "OI",
                        "Ꝏ": "OO",
                        "Ȣ": "OU",
                        "Ⓟ": "P",
                        "Ｐ": "P",
                        "Ṕ": "P",
                        "Ṗ": "P",
                        "Ƥ": "P",
                        "Ᵽ": "P",
                        "Ꝑ": "P",
                        "Ꝓ": "P",
                        "Ꝕ": "P",
                        "Ⓠ": "Q",
                        "Ｑ": "Q",
                        "Ꝗ": "Q",
                        "Ꝙ": "Q",
                        "Ɋ": "Q",
                        "Ⓡ": "R",
                        "Ｒ": "R",
                        "Ŕ": "R",
                        "Ṙ": "R",
                        "Ř": "R",
                        "Ȑ": "R",
                        "Ȓ": "R",
                        "Ṛ": "R",
                        "Ṝ": "R",
                        "Ŗ": "R",
                        "Ṟ": "R",
                        "Ɍ": "R",
                        "Ɽ": "R",
                        "Ꝛ": "R",
                        "Ꞧ": "R",
                        "Ꞃ": "R",
                        "Ⓢ": "S",
                        "Ｓ": "S",
                        "ẞ": "S",
                        "Ś": "S",
                        "Ṥ": "S",
                        "Ŝ": "S",
                        "Ṡ": "S",
                        "Š": "S",
                        "Ṧ": "S",
                        "Ṣ": "S",
                        "Ṩ": "S",
                        "Ș": "S",
                        "Ş": "S",
                        "Ȿ": "S",
                        "Ꞩ": "S",
                        "Ꞅ": "S",
                        "Ⓣ": "T",
                        "Ｔ": "T",
                        "Ṫ": "T",
                        "Ť": "T",
                        "Ṭ": "T",
                        "Ț": "T",
                        "Ţ": "T",
                        "Ṱ": "T",
                        "Ṯ": "T",
                        "Ŧ": "T",
                        "Ƭ": "T",
                        "Ʈ": "T",
                        "Ⱦ": "T",
                        "Ꞇ": "T",
                        "Ꜩ": "TZ",
                        "Ⓤ": "U",
                        "Ｕ": "U",
                        "Ù": "U",
                        "Ú": "U",
                        "Û": "U",
                        "Ũ": "U",
                        "Ṹ": "U",
                        "Ū": "U",
                        "Ṻ": "U",
                        "Ŭ": "U",
                        "Ü": "U",
                        "Ǜ": "U",
                        "Ǘ": "U",
                        "Ǖ": "U",
                        "Ǚ": "U",
                        "Ủ": "U",
                        "Ů": "U",
                        "Ű": "U",
                        "Ǔ": "U",
                        "Ȕ": "U",
                        "Ȗ": "U",
                        "Ư": "U",
                        "Ừ": "U",
                        "Ứ": "U",
                        "Ữ": "U",
                        "Ử": "U",
                        "Ự": "U",
                        "Ụ": "U",
                        "Ṳ": "U",
                        "Ų": "U",
                        "Ṷ": "U",
                        "Ṵ": "U",
                        "Ʉ": "U",
                        "Ⓥ": "V",
                        "Ｖ": "V",
                        "Ṽ": "V",
                        "Ṿ": "V",
                        "Ʋ": "V",
                        "Ꝟ": "V",
                        "Ʌ": "V",
                        "Ꝡ": "VY",
                        "Ⓦ": "W",
                        "Ｗ": "W",
                        "Ẁ": "W",
                        "Ẃ": "W",
                        "Ŵ": "W",
                        "Ẇ": "W",
                        "Ẅ": "W",
                        "Ẉ": "W",
                        "Ⱳ": "W",
                        "Ⓧ": "X",
                        "Ｘ": "X",
                        "Ẋ": "X",
                        "Ẍ": "X",
                        "Ⓨ": "Y",
                        "Ｙ": "Y",
                        "Ỳ": "Y",
                        "Ý": "Y",
                        "Ŷ": "Y",
                        "Ỹ": "Y",
                        "Ȳ": "Y",
                        "Ẏ": "Y",
                        "Ÿ": "Y",
                        "Ỷ": "Y",
                        "Ỵ": "Y",
                        "Ƴ": "Y",
                        "Ɏ": "Y",
                        "Ỿ": "Y",
                        "Ⓩ": "Z",
                        "Ｚ": "Z",
                        "Ź": "Z",
                        "Ẑ": "Z",
                        "Ż": "Z",
                        "Ž": "Z",
                        "Ẓ": "Z",
                        "Ẕ": "Z",
                        "Ƶ": "Z",
                        "Ȥ": "Z",
                        "Ɀ": "Z",
                        "Ⱬ": "Z",
                        "Ꝣ": "Z",
                        "ⓐ": "a",
                        "ａ": "a",
                        "ẚ": "a",
                        "à": "a",
                        "á": "a",
                        "â": "a",
                        "ầ": "a",
                        "ấ": "a",
                        "ẫ": "a",
                        "ẩ": "a",
                        "ã": "a",
                        "ā": "a",
                        "ă": "a",
                        "ằ": "a",
                        "ắ": "a",
                        "ẵ": "a",
                        "ẳ": "a",
                        "ȧ": "a",
                        "ǡ": "a",
                        "ä": "a",
                        "ǟ": "a",
                        "ả": "a",
                        "å": "a",
                        "ǻ": "a",
                        "ǎ": "a",
                        "ȁ": "a",
                        "ȃ": "a",
                        "ạ": "a",
                        "ậ": "a",
                        "ặ": "a",
                        "ḁ": "a",
                        "ą": "a",
                        "ⱥ": "a",
                        "ɐ": "a",
                        "ꜳ": "aa",
                        "æ": "ae",
                        "ǽ": "ae",
                        "ǣ": "ae",
                        "ꜵ": "ao",
                        "ꜷ": "au",
                        "ꜹ": "av",
                        "ꜻ": "av",
                        "ꜽ": "ay",
                        "ⓑ": "b",
                        "ｂ": "b",
                        "ḃ": "b",
                        "ḅ": "b",
                        "ḇ": "b",
                        "ƀ": "b",
                        "ƃ": "b",
                        "ɓ": "b",
                        "ⓒ": "c",
                        "ｃ": "c",
                        "ć": "c",
                        "ĉ": "c",
                        "ċ": "c",
                        "č": "c",
                        "ç": "c",
                        "ḉ": "c",
                        "ƈ": "c",
                        "ȼ": "c",
                        "ꜿ": "c",
                        "ↄ": "c",
                        "ⓓ": "d",
                        "ｄ": "d",
                        "ḋ": "d",
                        "ď": "d",
                        "ḍ": "d",
                        "ḑ": "d",
                        "ḓ": "d",
                        "ḏ": "d",
                        "đ": "d",
                        "ƌ": "d",
                        "ɖ": "d",
                        "ɗ": "d",
                        "ꝺ": "d",
                        "ǳ": "dz",
                        "ǆ": "dz",
                        "ⓔ": "e",
                        "ｅ": "e",
                        "è": "e",
                        "é": "e",
                        "ê": "e",
                        "ề": "e",
                        "ế": "e",
                        "ễ": "e",
                        "ể": "e",
                        "ẽ": "e",
                        "ē": "e",
                        "ḕ": "e",
                        "ḗ": "e",
                        "ĕ": "e",
                        "ė": "e",
                        "ë": "e",
                        "ẻ": "e",
                        "ě": "e",
                        "ȅ": "e",
                        "ȇ": "e",
                        "ẹ": "e",
                        "ệ": "e",
                        "ȩ": "e",
                        "ḝ": "e",
                        "ę": "e",
                        "ḙ": "e",
                        "ḛ": "e",
                        "ɇ": "e",
                        "ɛ": "e",
                        "ǝ": "e",
                        "ⓕ": "f",
                        "ｆ": "f",
                        "ḟ": "f",
                        "ƒ": "f",
                        "ꝼ": "f",
                        "ⓖ": "g",
                        "ｇ": "g",
                        "ǵ": "g",
                        "ĝ": "g",
                        "ḡ": "g",
                        "ğ": "g",
                        "ġ": "g",
                        "ǧ": "g",
                        "ģ": "g",
                        "ǥ": "g",
                        "ɠ": "g",
                        "ꞡ": "g",
                        "ᵹ": "g",
                        "ꝿ": "g",
                        "ⓗ": "h",
                        "ｈ": "h",
                        "ĥ": "h",
                        "ḣ": "h",
                        "ḧ": "h",
                        "ȟ": "h",
                        "ḥ": "h",
                        "ḩ": "h",
                        "ḫ": "h",
                        "ẖ": "h",
                        "ħ": "h",
                        "ⱨ": "h",
                        "ⱶ": "h",
                        "ɥ": "h",
                        "ƕ": "hv",
                        "ⓘ": "i",
                        "ｉ": "i",
                        "ì": "i",
                        "í": "i",
                        "î": "i",
                        "ĩ": "i",
                        "ī": "i",
                        "ĭ": "i",
                        "ï": "i",
                        "ḯ": "i",
                        "ỉ": "i",
                        "ǐ": "i",
                        "ȉ": "i",
                        "ȋ": "i",
                        "ị": "i",
                        "į": "i",
                        "ḭ": "i",
                        "ɨ": "i",
                        "ı": "i",
                        "ⓙ": "j",
                        "ｊ": "j",
                        "ĵ": "j",
                        "ǰ": "j",
                        "ɉ": "j",
                        "ⓚ": "k",
                        "ｋ": "k",
                        "ḱ": "k",
                        "ǩ": "k",
                        "ḳ": "k",
                        "ķ": "k",
                        "ḵ": "k",
                        "ƙ": "k",
                        "ⱪ": "k",
                        "ꝁ": "k",
                        "ꝃ": "k",
                        "ꝅ": "k",
                        "ꞣ": "k",
                        "ⓛ": "l",
                        "ｌ": "l",
                        "ŀ": "l",
                        "ĺ": "l",
                        "ľ": "l",
                        "ḷ": "l",
                        "ḹ": "l",
                        "ļ": "l",
                        "ḽ": "l",
                        "ḻ": "l",
                        "ſ": "l",
                        "ł": "l",
                        "ƚ": "l",
                        "ɫ": "l",
                        "ⱡ": "l",
                        "ꝉ": "l",
                        "ꞁ": "l",
                        "ꝇ": "l",
                        "ǉ": "lj",
                        "ⓜ": "m",
                        "ｍ": "m",
                        "ḿ": "m",
                        "ṁ": "m",
                        "ṃ": "m",
                        "ɱ": "m",
                        "ɯ": "m",
                        "ⓝ": "n",
                        "ｎ": "n",
                        "ǹ": "n",
                        "ń": "n",
                        "ñ": "n",
                        "ṅ": "n",
                        "ň": "n",
                        "ṇ": "n",
                        "ņ": "n",
                        "ṋ": "n",
                        "ṉ": "n",
                        "ƞ": "n",
                        "ɲ": "n",
                        "ŉ": "n",
                        "ꞑ": "n",
                        "ꞥ": "n",
                        "ǌ": "nj",
                        "ⓞ": "o",
                        "ｏ": "o",
                        "ò": "o",
                        "ó": "o",
                        "ô": "o",
                        "ồ": "o",
                        "ố": "o",
                        "ỗ": "o",
                        "ổ": "o",
                        "õ": "o",
                        "ṍ": "o",
                        "ȭ": "o",
                        "ṏ": "o",
                        "ō": "o",
                        "ṑ": "o",
                        "ṓ": "o",
                        "ŏ": "o",
                        "ȯ": "o",
                        "ȱ": "o",
                        "ö": "o",
                        "ȫ": "o",
                        "ỏ": "o",
                        "ő": "o",
                        "ǒ": "o",
                        "ȍ": "o",
                        "ȏ": "o",
                        "ơ": "o",
                        "ờ": "o",
                        "ớ": "o",
                        "ỡ": "o",
                        "ở": "o",
                        "ợ": "o",
                        "ọ": "o",
                        "ộ": "o",
                        "ǫ": "o",
                        "ǭ": "o",
                        "ø": "o",
                        "ǿ": "o",
                        "ɔ": "o",
                        "ꝋ": "o",
                        "ꝍ": "o",
                        "ɵ": "o",
                        "ƣ": "oi",
                        "ȣ": "ou",
                        "ꝏ": "oo",
                        "ⓟ": "p",
                        "ｐ": "p",
                        "ṕ": "p",
                        "ṗ": "p",
                        "ƥ": "p",
                        "ᵽ": "p",
                        "ꝑ": "p",
                        "ꝓ": "p",
                        "ꝕ": "p",
                        "ⓠ": "q",
                        "ｑ": "q",
                        "ɋ": "q",
                        "ꝗ": "q",
                        "ꝙ": "q",
                        "ⓡ": "r",
                        "ｒ": "r",
                        "ŕ": "r",
                        "ṙ": "r",
                        "ř": "r",
                        "ȑ": "r",
                        "ȓ": "r",
                        "ṛ": "r",
                        "ṝ": "r",
                        "ŗ": "r",
                        "ṟ": "r",
                        "ɍ": "r",
                        "ɽ": "r",
                        "ꝛ": "r",
                        "ꞧ": "r",
                        "ꞃ": "r",
                        "ⓢ": "s",
                        "ｓ": "s",
                        "ß": "s",
                        "ś": "s",
                        "ṥ": "s",
                        "ŝ": "s",
                        "ṡ": "s",
                        "š": "s",
                        "ṧ": "s",
                        "ṣ": "s",
                        "ṩ": "s",
                        "ș": "s",
                        "ş": "s",
                        "ȿ": "s",
                        "ꞩ": "s",
                        "ꞅ": "s",
                        "ẛ": "s",
                        "ⓣ": "t",
                        "ｔ": "t",
                        "ṫ": "t",
                        "ẗ": "t",
                        "ť": "t",
                        "ṭ": "t",
                        "ț": "t",
                        "ţ": "t",
                        "ṱ": "t",
                        "ṯ": "t",
                        "ŧ": "t",
                        "ƭ": "t",
                        "ʈ": "t",
                        "ⱦ": "t",
                        "ꞇ": "t",
                        "ꜩ": "tz",
                        "ⓤ": "u",
                        "ｕ": "u",
                        "ù": "u",
                        "ú": "u",
                        "û": "u",
                        "ũ": "u",
                        "ṹ": "u",
                        "ū": "u",
                        "ṻ": "u",
                        "ŭ": "u",
                        "ü": "u",
                        "ǜ": "u",
                        "ǘ": "u",
                        "ǖ": "u",
                        "ǚ": "u",
                        "ủ": "u",
                        "ů": "u",
                        "ű": "u",
                        "ǔ": "u",
                        "ȕ": "u",
                        "ȗ": "u",
                        "ư": "u",
                        "ừ": "u",
                        "ứ": "u",
                        "ữ": "u",
                        "ử": "u",
                        "ự": "u",
                        "ụ": "u",
                        "ṳ": "u",
                        "ų": "u",
                        "ṷ": "u",
                        "ṵ": "u",
                        "ʉ": "u",
                        "ⓥ": "v",
                        "ｖ": "v",
                        "ṽ": "v",
                        "ṿ": "v",
                        "ʋ": "v",
                        "ꝟ": "v",
                        "ʌ": "v",
                        "ꝡ": "vy",
                        "ⓦ": "w",
                        "ｗ": "w",
                        "ẁ": "w",
                        "ẃ": "w",
                        "ŵ": "w",
                        "ẇ": "w",
                        "ẅ": "w",
                        "ẘ": "w",
                        "ẉ": "w",
                        "ⱳ": "w",
                        "ⓧ": "x",
                        "ｘ": "x",
                        "ẋ": "x",
                        "ẍ": "x",
                        "ⓨ": "y",
                        "ｙ": "y",
                        "ỳ": "y",
                        "ý": "y",
                        "ŷ": "y",
                        "ỹ": "y",
                        "ȳ": "y",
                        "ẏ": "y",
                        "ÿ": "y",
                        "ỷ": "y",
                        "ẙ": "y",
                        "ỵ": "y",
                        "ƴ": "y",
                        "ɏ": "y",
                        "ỿ": "y",
                        "ⓩ": "z",
                        "ｚ": "z",
                        "ź": "z",
                        "ẑ": "z",
                        "ż": "z",
                        "ž": "z",
                        "ẓ": "z",
                        "ẕ": "z",
                        "ƶ": "z",
                        "ȥ": "z",
                        "ɀ": "z",
                        "ⱬ": "z",
                        "ꝣ": "z",
                        "Ά": "Α",
                        "Έ": "Ε",
                        "Ή": "Η",
                        "Ί": "Ι",
                        "Ϊ": "Ι",
                        "Ό": "Ο",
                        "Ύ": "Υ",
                        "Ϋ": "Υ",
                        "Ώ": "Ω",
                        "ά": "α",
                        "έ": "ε",
                        "ή": "η",
                        "ί": "ι",
                        "ϊ": "ι",
                        "ΐ": "ι",
                        "ό": "ο",
                        "ύ": "υ",
                        "ϋ": "υ",
                        "ΰ": "υ",
                        "ω": "ω",
                        "ς": "σ"
                    }
                }), t.define("select2/data/base", ["../utils"], function(n) {
                    function i(t, e) {
                        i.__super__.constructor.call(this)
                    }
                    return n.Extend(i, n.Observable), i.prototype.current = function(t) {
                        throw new Error("The `current` method must be defined in child classes.")
                    }, i.prototype.query = function(t, e) {
                        throw new Error("The `query` method must be defined in child classes.")
                    }, i.prototype.bind = function(t, e) {}, i.prototype.destroy = function() {}, i.prototype.generateResultId = function(t, e) {
                        var i = t.id + "-result-";
                        return i += n.generateChars(4), null != e.id ? i += "-" + e.id.toString() : i += "-" + n.generateChars(4), i
                    }, i
                }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function(t, e, a) {
                    function i(t, e) {
                        this.$element = t, this.options = e, i.__super__.constructor.call(this)
                    }
                    return e.Extend(i, t), i.prototype.current = function(t) {
                        var i = [],
                            n = this;
                        this.$element.find(":selected").each(function() {
                            var t = a(this),
                                e = n.item(t);
                            i.push(e)
                        }), t(i)
                    }, i.prototype.select = function(r) {
                        var s = this;
                        if (r.selected = !0, a(r.element).is("option")) return r.element.selected = !0, void this.$element.trigger("change");
                        if (this.$element.prop("multiple")) this.current(function(t) {
                            var e = [];
                            (r = [r]).push.apply(r, t);
                            for (var i = 0; i < r.length; i++) {
                                var n = r[i].id; - 1 === a.inArray(n, e) && e.push(n)
                            }
                            s.$element.val(e), s.$element.trigger("change")
                        });
                        else {
                            var t = r.id;
                            this.$element.val(t), this.$element.trigger("change")
                        }
                    }, i.prototype.unselect = function(r) {
                        var s = this;
                        if (this.$element.prop("multiple")) {
                            if (r.selected = !1, a(r.element).is("option")) return r.element.selected = !1, void this.$element.trigger("change");
                            this.current(function(t) {
                                for (var e = [], i = 0; i < t.length; i++) {
                                    var n = t[i].id;
                                    n !== r.id && -1 === a.inArray(n, e) && e.push(n)
                                }
                                s.$element.val(e), s.$element.trigger("change")
                            })
                        }
                    }, i.prototype.bind = function(t, e) {
                        var i = this;
                        (this.container = t).on("select", function(t) {
                            i.select(t.data)
                        }), t.on("unselect", function(t) {
                            i.unselect(t.data)
                        })
                    }, i.prototype.destroy = function() {
                        this.$element.find("*").each(function() {
                            a.removeData(this, "data")
                        })
                    }, i.prototype.query = function(n, t) {
                        var r = [],
                            s = this;
                        this.$element.children().each(function() {
                            var t = a(this);
                            if (t.is("option") || t.is("optgroup")) {
                                var e = s.item(t),
                                    i = s.matches(n, e);
                                null !== i && r.push(i)
                            }
                        }), t({
                            results: r
                        })
                    }, i.prototype.addOptions = function(t) {
                        e.appendMany(this.$element, t)
                    }, i.prototype.option = function(t) {
                        var e;
                        t.children ? (e = document.createElement("optgroup")).label = t.text : void 0 !== (e = document.createElement("option")).textContent ? e.textContent = t.text : e.innerText = t.text, void 0 !== t.id && (e.value = t.id), t.disabled && (e.disabled = !0), t.selected && (e.selected = !0), t.title && (e.title = t.title);
                        var i = a(e),
                            n = this._normalizeItem(t);
                        return n.element = e, a.data(e, "data", n), i
                    }, i.prototype.item = function(t) {
                        var e = {};
                        if (null != (e = a.data(t[0], "data"))) return e;
                        if (t.is("option")) e = {
                            id: t.val(),
                            text: t.text(),
                            disabled: t.prop("disabled"),
                            selected: t.prop("selected"),
                            title: t.prop("title")
                        };
                        else if (t.is("optgroup")) {
                            e = {
                                text: t.prop("label"),
                                children: [],
                                title: t.prop("title")
                            };
                            for (var i = t.children("option"), n = [], r = 0; r < i.length; r++) {
                                var s = a(i[r]),
                                    o = this.item(s);
                                n.push(o)
                            }
                            e.children = n
                        }
                        return (e = this._normalizeItem(e)).element = t[0], a.data(t[0], "data", e), e
                    }, i.prototype._normalizeItem = function(t) {
                        a.isPlainObject(t) || (t = {
                            id: t,
                            text: t
                        });
                        return null != (t = a.extend({}, {
                            text: ""
                        }, t)).id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), a.extend({}, {
                            selected: !1,
                            disabled: !1
                        }, t)
                    }, i.prototype.matches = function(t, e) {
                        return this.options.get("matcher")(t, e)
                    }, i
                }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function(t, f, g) {
                    function n(t, e) {
                        var i = e.get("data") || [];
                        n.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(i))
                    }
                    return f.Extend(n, t), n.prototype.select = function(i) {
                        var t = this.$element.find("option").filter(function(t, e) {
                            return e.value == i.id.toString()
                        });
                        0 === t.length && (t = this.option(i), this.addOptions(t)), n.__super__.select.call(this, i)
                    }, n.prototype.convertToOptions = function(t) {
                        var e = this,
                            i = this.$element.find("option"),
                            n = i.map(function() {
                                return e.item(g(this)).id
                            }).get(),
                            r = [];

                        function s(t) {
                            return function() {
                                return g(this).val() == t.id
                            }
                        }
                        for (var o = 0; o < t.length; o++) {
                            var a = this._normalizeItem(t[o]);
                            if (0 <= g.inArray(a.id, n)) {
                                var l = i.filter(s(a)),
                                    u = this.item(l),
                                    c = g.extend(!0, {}, a, u),
                                    h = this.option(c);
                                l.replaceWith(h)
                            } else {
                                var p = this.option(a);
                                if (a.children) {
                                    var d = this.convertToOptions(a.children);
                                    f.appendMany(p, d)
                                }
                                r.push(p)
                            }
                        }
                        return r
                    }, n
                }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(t, e, s) {
                    function i(t, e) {
                        this.ajaxOptions = this._applyDefaults(e.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, t, e)
                    }
                    return e.Extend(i, t), i.prototype._applyDefaults = function(t) {
                        var e = {
                            data: function(t) {
                                return s.extend({}, t, {
                                    q: t.term
                                })
                            },
                            transport: function(t, e, i) {
                                var n = s.ajax(t);
                                return n.then(e), n.fail(i), n
                            }
                        };
                        return s.extend({}, e, t, !0)
                    }, i.prototype.processResults = function(t) {
                        return t
                    }, i.prototype.query = function(i, n) {
                        var r = this;
                        null != this._request && (s.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        var e = s.extend({
                            type: "GET"
                        }, this.ajaxOptions);

                        function t() {
                            var t = e.transport(e, function(t) {
                                var e = r.processResults(t, i);
                                r.options.get("debug") && window.console && console.error && (e && e.results && s.isArray(e.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), n(e)
                            }, function() {
                                t.status && "0" === t.status || r.trigger("results:message", {
                                    message: "errorLoading"
                                })
                            });
                            r._request = t
                        }
                        "function" == typeof e.url && (e.url = e.url.call(this.$element, i)), "function" == typeof e.data && (e.data = e.data.call(this.$element, i)), this.ajaxOptions.delay && null != i.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(t, this.ajaxOptions.delay)) : t()
                    }, i
                }), t.define("select2/data/tags", ["jquery"], function(c) {
                    function t(t, e, i) {
                        var n = i.get("tags"),
                            r = i.get("createTag");
                        void 0 !== r && (this.createTag = r);
                        var s = i.get("insertTag");
                        if (void 0 !== s && (this.insertTag = s), t.call(this, e, i), c.isArray(n))
                            for (var o = 0; o < n.length; o++) {
                                var a = n[o],
                                    l = this._normalizeItem(a),
                                    u = this.option(l);
                                this.$element.append(u)
                            }
                    }
                    return t.prototype.query = function(t, u, c) {
                        var h = this;
                        this._removeOldTags(), null != u.term && null == u.page ? t.call(this, u, function t(e, i) {
                            for (var n = e.results, r = 0; r < n.length; r++) {
                                var s = n[r],
                                    o = null != s.children && !t({
                                        results: s.children
                                    }, !0);
                                if ((s.text || "").toUpperCase() === (u.term || "").toUpperCase() || o) return !i && (e.data = n, void c(e))
                            }
                            if (i) return !0;
                            var a = h.createTag(u);
                            if (null != a) {
                                var l = h.option(a);
                                l.attr("data-select2-tag", !0), h.addOptions([l]), h.insertTag(n, a)
                            }
                            e.results = n, c(e)
                        }) : t.call(this, u, c)
                    }, t.prototype.createTag = function(t, e) {
                        var i = c.trim(e.term);
                        return "" === i ? null : {
                            id: i,
                            text: i
                        }
                    }, t.prototype.insertTag = function(t, e, i) {
                        e.unshift(i)
                    }, t.prototype._removeOldTags = function(t) {
                        this._lastTag;
                        this.$element.find("option[data-select2-tag]").each(function() {
                            this.selected || c(this).remove()
                        })
                    }, t
                }), t.define("select2/data/tokenizer", ["jquery"], function(h) {
                    function t(t, e, i) {
                        var n = i.get("tokenizer");
                        void 0 !== n && (this.tokenizer = n), t.call(this, e, i)
                    }
                    return t.prototype.bind = function(t, e, i) {
                        t.call(this, e, i), this.$search = e.dropdown.$search || e.selection.$search || i.find(".select2-search__field")
                    }, t.prototype.query = function(t, e, i) {
                        var r = this;
                        e.term = e.term || "";
                        var n = this.tokenizer(e, this.options, function(t) {
                            var e, i = r._normalizeItem(t);
                            if (!r.$element.find("option").filter(function() {
                                    return h(this).val() === i.id
                                }).length) {
                                var n = r.option(i);
                                n.attr("data-select2-tag", !0), r._removeOldTags(), r.addOptions([n])
                            }
                            e = i, r.trigger("select", {
                                data: e
                            })
                        });
                        n.term !== e.term && (this.$search.length && (this.$search.val(n.term), this.$search.focus()), e.term = n.term), t.call(this, e, i)
                    }, t.prototype.tokenizer = function(t, e, i, n) {
                        for (var r = i.get("tokenSeparators") || [], s = e.term, o = 0, a = this.createTag || function(t) {
                                return {
                                    id: t.term,
                                    text: t.term
                                }
                            }; o < s.length;) {
                            var l = s[o];
                            if (-1 !== h.inArray(l, r)) {
                                var u = s.substr(0, o),
                                    c = a(h.extend({}, e, {
                                        term: u
                                    }));
                                null != c ? (n(c), s = s.substr(o + 1) || "", o = 0) : o++
                            } else o++
                        }
                        return {
                            term: s
                        }
                    }, t
                }), t.define("select2/data/minimumInputLength", [], function() {
                    function t(t, e, i) {
                        this.minimumInputLength = i.get("minimumInputLength"), t.call(this, e, i)
                    }
                    return t.prototype.query = function(t, e, i) {
                        e.term = e.term || "", e.term.length < this.minimumInputLength ? this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {
                                minimum: this.minimumInputLength,
                                input: e.term,
                                params: e
                            }
                        }) : t.call(this, e, i)
                    }, t
                }), t.define("select2/data/maximumInputLength", [], function() {
                    function t(t, e, i) {
                        this.maximumInputLength = i.get("maximumInputLength"), t.call(this, e, i)
                    }
                    return t.prototype.query = function(t, e, i) {
                        e.term = e.term || "", 0 < this.maximumInputLength && e.term.length > this.maximumInputLength ? this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {
                                maximum: this.maximumInputLength,
                                input: e.term,
                                params: e
                            }
                        }) : t.call(this, e, i)
                    }, t
                }), t.define("select2/data/maximumSelectionLength", [], function() {
                    function t(t, e, i) {
                        this.maximumSelectionLength = i.get("maximumSelectionLength"), t.call(this, e, i)
                    }
                    return t.prototype.query = function(i, n, r) {
                        var s = this;
                        this.current(function(t) {
                            var e = null != t ? t.length : 0;
                            0 < s.maximumSelectionLength && e >= s.maximumSelectionLength ? s.trigger("results:message", {
                                message: "maximumSelected",
                                args: {
                                    maximum: s.maximumSelectionLength
                                }
                            }) : i.call(s, n, r)
                        })
                    }, t
                }), t.define("select2/dropdown", ["jquery", "./utils"], function(e, t) {
                    function i(t, e) {
                        this.$element = t, this.options = e, i.__super__.constructor.call(this)
                    }
                    return t.Extend(i, t.Observable), i.prototype.render = function() {
                        var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                        return t.attr("dir", this.options.get("dir")), this.$dropdown = t
                    }, i.prototype.bind = function() {}, i.prototype.position = function(t, e) {}, i.prototype.destroy = function() {
                        this.$dropdown.remove()
                    }, i
                }), t.define("select2/dropdown/search", ["jquery", "../utils"], function(r, t) {
                    function e() {}
                    return e.prototype.render = function(t) {
                        var e = t.call(this),
                            i = r('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
                        return this.$searchContainer = i, this.$search = i.find("input"), e.prepend(i), e
                    }, e.prototype.bind = function(t, e, i) {
                        var n = this;
                        t.call(this, e, i), this.$search.on("keydown", function(t) {
                            n.trigger("keypress", t), n._keyUpPrevented = t.isDefaultPrevented()
                        }), this.$search.on("input", function(t) {
                            r(this).off("keyup")
                        }), this.$search.on("keyup input", function(t) {
                            n.handleSearch(t)
                        }), e.on("open", function() {
                            n.$search.attr("tabindex", 0), n.$search.focus(), window.setTimeout(function() {
                                n.$search.focus()
                            }, 0)
                        }), e.on("close", function() {
                            n.$search.attr("tabindex", -1), n.$search.val("")
                        }), e.on("focus", function() {
                            e.isOpen() || n.$search.focus()
                        }), e.on("results:all", function(t) {
                            null != t.query.term && "" !== t.query.term || (n.showSearch(t) ? n.$searchContainer.removeClass("select2-search--hide") : n.$searchContainer.addClass("select2-search--hide"))
                        })
                    }, e.prototype.handleSearch = function(t) {
                        if (!this._keyUpPrevented) {
                            var e = this.$search.val();
                            this.trigger("query", {
                                term: e
                            })
                        }
                        this._keyUpPrevented = !1
                    }, e.prototype.showSearch = function(t, e) {
                        return !0
                    }, e
                }), t.define("select2/dropdown/hidePlaceholder", [], function() {
                    function t(t, e, i, n) {
                        this.placeholder = this.normalizePlaceholder(i.get("placeholder")), t.call(this, e, i, n)
                    }
                    return t.prototype.append = function(t, e) {
                        e.results = this.removePlaceholder(e.results), t.call(this, e)
                    }, t.prototype.normalizePlaceholder = function(t, e) {
                        return "string" == typeof e && (e = {
                            id: "",
                            text: e
                        }), e
                    }, t.prototype.removePlaceholder = function(t, e) {
                        for (var i = e.slice(0), n = e.length - 1; 0 <= n; n--) {
                            var r = e[n];
                            this.placeholder.id === r.id && i.splice(n, 1)
                        }
                        return i
                    }, t
                }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function(r) {
                    function t(t, e, i, n) {
                        this.lastParams = {}, t.call(this, e, i, n), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                    }
                    return t.prototype.append = function(t, e) {
                        this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && this.$results.append(this.$loadingMore)
                    }, t.prototype.bind = function(t, e, i) {
                        var n = this;
                        t.call(this, e, i), e.on("query", function(t) {
                            n.lastParams = t, n.loading = !0
                        }), e.on("query:append", function(t) {
                            n.lastParams = t, n.loading = !0
                        }), this.$results.on("scroll", function() {
                            var t = r.contains(document.documentElement, n.$loadingMore[0]);
                            if (!n.loading && t) {
                                var e = n.$results.offset().top + n.$results.outerHeight(!1);
                                n.$loadingMore.offset().top + n.$loadingMore.outerHeight(!1) <= e + 50 && n.loadMore()
                            }
                        })
                    }, t.prototype.loadMore = function() {
                        this.loading = !0;
                        var t = r.extend({}, {
                            page: 1
                        }, this.lastParams);
                        t.page++, this.trigger("query:append", t)
                    }, t.prototype.showLoadingMore = function(t, e) {
                        return e.pagination && e.pagination.more
                    }, t.prototype.createLoadingMore = function() {
                        var t = r('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                            e = this.options.get("translations").get("loadingMore");
                        return t.html(e(this.lastParams)), t
                    }, t
                }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(f, a) {
                    function t(t, e, i) {
                        this.$dropdownParent = i.get("dropdownParent") || f(document.body), t.call(this, e, i)
                    }
                    return t.prototype.bind = function(t, e, i) {
                        var n = this,
                            r = !1;
                        t.call(this, e, i), e.on("open", function() {
                            n._showDropdown(), n._attachPositioningHandler(e), r || (r = !0, e.on("results:all", function() {
                                n._positionDropdown(), n._resizeDropdown()
                            }), e.on("results:append", function() {
                                n._positionDropdown(), n._resizeDropdown()
                            }))
                        }), e.on("close", function() {
                            n._hideDropdown(), n._detachPositioningHandler(e)
                        }), this.$dropdownContainer.on("mousedown", function(t) {
                            t.stopPropagation()
                        })
                    }, t.prototype.destroy = function(t) {
                        t.call(this), this.$dropdownContainer.remove()
                    }, t.prototype.position = function(t, e, i) {
                        e.attr("class", i.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({
                            position: "absolute",
                            top: -999999
                        }), this.$container = i
                    }, t.prototype.render = function(t) {
                        var e = f("<span></span>"),
                            i = t.call(this);
                        return e.append(i), this.$dropdownContainer = e
                    }, t.prototype._hideDropdown = function(t) {
                        this.$dropdownContainer.detach()
                    }, t.prototype._attachPositioningHandler = function(t, e) {
                        var i = this,
                            n = "scroll.select2." + e.id,
                            r = "resize.select2." + e.id,
                            s = "orientationchange.select2." + e.id,
                            o = this.$container.parents().filter(a.hasScroll);
                        o.each(function() {
                            f(this).data("select2-scroll-position", {
                                x: f(this).scrollLeft(),
                                y: f(this).scrollTop()
                            })
                        }), o.on(n, function(t) {
                            var e = f(this).data("select2-scroll-position");
                            f(this).scrollTop(e.y)
                        }), f(window).on(n + " " + r + " " + s, function(t) {
                            i._positionDropdown(), i._resizeDropdown()
                        })
                    }, t.prototype._detachPositioningHandler = function(t, e) {
                        var i = "scroll.select2." + e.id,
                            n = "resize.select2." + e.id,
                            r = "orientationchange.select2." + e.id;
                        this.$container.parents().filter(a.hasScroll).off(i), f(window).off(i + " " + n + " " + r)
                    }, t.prototype._positionDropdown = function() {
                        var t = f(window),
                            e = this.$dropdown.hasClass("select2-dropdown--above"),
                            i = this.$dropdown.hasClass("select2-dropdown--below"),
                            n = null,
                            r = this.$container.offset();
                        r.bottom = r.top + this.$container.outerHeight(!1);
                        var s = {
                            height: this.$container.outerHeight(!1)
                        };
                        s.top = r.top, s.bottom = r.top + s.height;
                        var o = this.$dropdown.outerHeight(!1),
                            a = t.scrollTop(),
                            l = t.scrollTop() + t.height(),
                            u = a < r.top - o,
                            c = l > r.bottom + o,
                            h = {
                                left: r.left,
                                top: s.bottom
                            },
                            p = this.$dropdownParent;
                        "static" === p.css("position") && (p = p.offsetParent());
                        var d = p.offset();
                        h.top -= d.top, h.left -= d.left, e || i || (n = "below"), c || !u || e ? !u && c && e && (n = "below") : n = "above", ("above" == n || e && "below" !== n) && (h.top = s.top - d.top - o), null != n && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + n), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + n)), this.$dropdownContainer.css(h)
                    }, t.prototype._resizeDropdown = function() {
                        var t = {
                            width: this.$container.outerWidth(!1) + "px"
                        };
                        this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.position = "relative", t.width = "auto"), this.$dropdown.css(t)
                    }, t.prototype._showDropdown = function(t) {
                        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                    }, t
                }), t.define("select2/dropdown/minimumResultsForSearch", [], function() {
                    function t(t, e, i, n) {
                        this.minimumResultsForSearch = i.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), t.call(this, e, i, n)
                    }
                    return t.prototype.showSearch = function(t, e) {
                        return !(function t(e) {
                            for (var i = 0, n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.children ? i += t(r.children) : i++
                            }
                            return i
                        }(e.data.results) < this.minimumResultsForSearch) && t.call(this, e)
                    }, t
                }), t.define("select2/dropdown/selectOnClose", [], function() {
                    function t() {}
                    return t.prototype.bind = function(t, e, i) {
                        var n = this;
                        t.call(this, e, i), e.on("close", function(t) {
                            n._handleSelectOnClose(t)
                        })
                    }, t.prototype._handleSelectOnClose = function(t, e) {
                        if (e && null != e.originalSelect2Event) {
                            var i = e.originalSelect2Event;
                            if ("select" === i._type || "unselect" === i._type) return
                        }
                        var n = this.getHighlightedResults();
                        if (!(n.length < 1)) {
                            var r = n.data("data");
                            null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
                                data: r
                            })
                        }
                    }, t
                }), t.define("select2/dropdown/closeOnSelect", [], function() {
                    function t() {}
                    return t.prototype.bind = function(t, e, i) {
                        var n = this;
                        t.call(this, e, i), e.on("select", function(t) {
                            n._selectTriggered(t)
                        }), e.on("unselect", function(t) {
                            n._selectTriggered(t)
                        })
                    }, t.prototype._selectTriggered = function(t, e) {
                        var i = e.originalEvent;
                        i && i.ctrlKey || this.trigger("close", {
                            originalEvent: i,
                            originalSelect2Event: e
                        })
                    }, t
                }), t.define("select2/i18n/en", [], function() {
                    return {
                        errorLoading: function() {
                            return "The results could not be loaded."
                        },
                        inputTooLong: function(t) {
                            var e = t.input.length - t.maximum,
                                i = "Please delete " + e + " character";
                            return 1 != e && (i += "s"), i
                        },
                        inputTooShort: function(t) {
                            return "Please enter " + (t.minimum - t.input.length) + " or more characters"
                        },
                        loadingMore: function() {
                            return "Loading more results…"
                        },
                        maximumSelected: function(t) {
                            var e = "You can only select " + t.maximum + " item";
                            return 1 != t.maximum && (e += "s"), e
                        },
                        noResults: function() {
                            return "No results found"
                        },
                        searching: function() {
                            return "Searching…"
                        }
                    }
                }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(f, g, m, v, y, _, x, b, w, T, C, e, S, k, A, E, P, D, O, F, M, N, $, R, j, L, z, B, t) {
                    function i() {
                        this.reset()
                    }
                    return i.prototype.apply = function(e) {
                        if (null == (e = f.extend(!0, {}, this.defaults, e)).dataAdapter) {
                            if (null != e.ajax ? e.dataAdapter = A : null != e.data ? e.dataAdapter = k : e.dataAdapter = S, 0 < e.minimumInputLength && (e.dataAdapter = T.Decorate(e.dataAdapter, D)), 0 < e.maximumInputLength && (e.dataAdapter = T.Decorate(e.dataAdapter, O)), 0 < e.maximumSelectionLength && (e.dataAdapter = T.Decorate(e.dataAdapter, F)), e.tags && (e.dataAdapter = T.Decorate(e.dataAdapter, E)), null == e.tokenSeparators && null == e.tokenizer || (e.dataAdapter = T.Decorate(e.dataAdapter, P)), null != e.query) {
                                var t = g(e.amdBase + "compat/query");
                                e.dataAdapter = T.Decorate(e.dataAdapter, t)
                            }
                            if (null != e.initSelection) {
                                var i = g(e.amdBase + "compat/initSelection");
                                e.dataAdapter = T.Decorate(e.dataAdapter, i)
                            }
                        }
                        if (null == e.resultsAdapter && (e.resultsAdapter = m, null != e.ajax && (e.resultsAdapter = T.Decorate(e.resultsAdapter, R)), null != e.placeholder && (e.resultsAdapter = T.Decorate(e.resultsAdapter, $)), e.selectOnClose && (e.resultsAdapter = T.Decorate(e.resultsAdapter, z))), null == e.dropdownAdapter) {
                            if (e.multiple) e.dropdownAdapter = M;
                            else {
                                var n = T.Decorate(M, N);
                                e.dropdownAdapter = n
                            }
                            if (0 !== e.minimumResultsForSearch && (e.dropdownAdapter = T.Decorate(e.dropdownAdapter, L)), e.closeOnSelect && (e.dropdownAdapter = T.Decorate(e.dropdownAdapter, B)), null != e.dropdownCssClass || null != e.dropdownCss || null != e.adaptDropdownCssClass) {
                                var r = g(e.amdBase + "compat/dropdownCss");
                                e.dropdownAdapter = T.Decorate(e.dropdownAdapter, r)
                            }
                            e.dropdownAdapter = T.Decorate(e.dropdownAdapter, j)
                        }
                        if (null == e.selectionAdapter) {
                            if (e.multiple ? e.selectionAdapter = y : e.selectionAdapter = v, null != e.placeholder && (e.selectionAdapter = T.Decorate(e.selectionAdapter, _)), e.allowClear && (e.selectionAdapter = T.Decorate(e.selectionAdapter, x)), e.multiple && (e.selectionAdapter = T.Decorate(e.selectionAdapter, b)), null != e.containerCssClass || null != e.containerCss || null != e.adaptContainerCssClass) {
                                var s = g(e.amdBase + "compat/containerCss");
                                e.selectionAdapter = T.Decorate(e.selectionAdapter, s)
                            }
                            e.selectionAdapter = T.Decorate(e.selectionAdapter, w)
                        }
                        if ("string" == typeof e.language)
                            if (0 < e.language.indexOf("-")) {
                                var o = e.language.split("-")[0];
                                e.language = [e.language, o]
                            } else e.language = [e.language];
                        if (f.isArray(e.language)) {
                            var a = new C;
                            e.language.push("en");
                            for (var l = e.language, u = 0; u < l.length; u++) {
                                var c = l[u],
                                    h = {};
                                try {
                                    h = C.loadPath(c)
                                } catch (t) {
                                    try {
                                        c = this.defaults.amdLanguageBase + c, h = C.loadPath(c)
                                    } catch (t) {
                                        e.debug && window.console && console.warn && console.warn('Select2: The language file for "' + c + '" could not be automatically loaded. A fallback will be used instead.');
                                        continue
                                    }
                                }
                                a.extend(h)
                            }
                            e.translations = a
                        } else {
                            var p = C.loadPath(this.defaults.amdLanguageBase + "en"),
                                d = new C(e.language);
                            d.extend(p), e.translations = d
                        }
                        return e
                    }, i.prototype.reset = function() {
                        function a(t) {
                            return t.replace(/[^\u0000-\u007E]/g, function(t) {
                                return e[t] || t
                            })
                        }
                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: T.escapeMarkup,
                            language: t,
                            matcher: function t(e, i) {
                                if ("" === f.trim(e.term)) return i;
                                if (i.children && 0 < i.children.length) {
                                    for (var n = f.extend(!0, {}, i), r = i.children.length - 1; 0 <= r; r--) null == t(e, i.children[r]) && n.children.splice(r, 1);
                                    return 0 < n.children.length ? n : t(e, n)
                                }
                                var s = a(i.text).toUpperCase(),
                                    o = a(e.term).toUpperCase();
                                return -1 < s.indexOf(o) ? i : null
                            },
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function(t) {
                                return t
                            },
                            templateResult: function(t) {
                                return t.text
                            },
                            templateSelection: function(t) {
                                return t.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    }, i.prototype.set = function(t, e) {
                        var i = {};
                        i[f.camelCase(t)] = e;
                        var n = T._convertData(i);
                        f.extend(this.defaults, n)
                    }, new i
                }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(n, s, r, o) {
                    function t(t, e) {
                        if (this.options = t, null != e && this.fromElement(e), this.options = r.apply(this.options), e && e.is("input")) {
                            var i = n(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = o.Decorate(this.options.dataAdapter, i)
                        }
                    }
                    return t.prototype.fromElement = function(t) {
                        var e = ["select2"];
                        null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.language && (t.prop("lang") ? this.options.language = t.prop("lang").toLowerCase() : t.closest("[lang]").prop("lang") && (this.options.language = t.closest("[lang]").prop("lang"))), null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), t.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), t.data("data", t.data("select2Tags")), t.data("tags", !0)), t.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", t.data("ajaxUrl")), t.data("ajax--url", t.data("ajaxUrl")));
                        var i = {};
                        i = s.fn.jquery && "1." == s.fn.jquery.substr(0, 2) && t[0].dataset ? s.extend(!0, {}, t[0].dataset, t.data()) : t.data();
                        var n = s.extend(!0, {}, i);
                        for (var r in n = o._convertData(n)) - 1 < s.inArray(r, e) || (s.isPlainObject(this.options[r]) ? s.extend(this.options[r], n[r]) : this.options[r] = n[r]);
                        return this
                    }, t.prototype.get = function(t) {
                        return this.options[t]
                    }, t.prototype.set = function(t, e) {
                        this.options[t] = e
                    }, t
                }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(r, u, i, n) {
                    var c = function(t, e) {
                        null != t.data("select2") && t.data("select2").destroy(), this.$element = t, this.id = this._generateId(t), e = e || {}, this.options = new u(e, t), c.__super__.constructor.call(this);
                        var i = t.attr("tabindex") || 0;
                        t.data("old-tabindex", i), t.attr("tabindex", "-1");
                        var n = this.options.get("dataAdapter");
                        this.dataAdapter = new n(t, this.options);
                        var r = this.render();
                        this._placeContainer(r);
                        var s = this.options.get("selectionAdapter");
                        this.selection = new s(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, r);
                        var o = this.options.get("dropdownAdapter");
                        this.dropdown = new o(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, r);
                        var a = this.options.get("resultsAdapter");
                        this.results = new a(t, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                        var l = this;
                        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(t) {
                            l.trigger("selection:update", {
                                data: t
                            })
                        }), t.addClass("select2-hidden-accessible"), t.attr("aria-hidden", "true"), this._syncAttributes(), t.data("select2", this)
                    };
                    return i.Extend(c, i.Observable), c.prototype._generateId = function(t) {
                        return "select2-" + (null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + i.generateChars(2) : i.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
                    }, c.prototype._placeContainer = function(t) {
                        t.insertAfter(this.$element);
                        var e = this._resolveWidth(this.$element, this.options.get("width"));
                        null != e && t.css("width", e)
                    }, c.prototype._resolveWidth = function(t, e) {
                        var i = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                        if ("resolve" == e) {
                            var n = this._resolveWidth(t, "style");
                            return null != n ? n : this._resolveWidth(t, "element")
                        }
                        if ("element" == e) {
                            var r = t.outerWidth(!1);
                            return r <= 0 ? "auto" : r + "px"
                        }
                        if ("style" == e) {
                            var s = t.attr("style");
                            if ("string" != typeof s) return null;
                            for (var o = s.split(";"), a = 0, l = o.length; a < l; a += 1) {
                                var u = o[a].replace(/\s/g, "").match(i);
                                if (null !== u && 1 <= u.length) return u[1]
                            }
                            return null
                        }
                        return e
                    }, c.prototype._bindAdapters = function() {
                        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                    }, c.prototype._registerDomEvents = function() {
                        var e = this;
                        this.$element.on("change.select2", function() {
                            e.dataAdapter.current(function(t) {
                                e.trigger("selection:update", {
                                    data: t
                                })
                            })
                        }), this.$element.on("focus.select2", function(t) {
                            e.trigger("focus", t)
                        }), this._syncA = i.bind(this._syncAttributes, this), this._syncS = i.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != t ? (this._observer = new t(function(t) {
                            r.each(t, e._syncA), r.each(t, e._syncS)
                        }), this._observer.observe(this.$element[0], {
                            attributes: !0,
                            childList: !0,
                            subtree: !1
                        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1))
                    }, c.prototype._registerDataEvents = function() {
                        var i = this;
                        this.dataAdapter.on("*", function(t, e) {
                            i.trigger(t, e)
                        })
                    }, c.prototype._registerSelectionEvents = function() {
                        var i = this,
                            n = ["toggle", "focus"];
                        this.selection.on("toggle", function() {
                            i.toggleDropdown()
                        }), this.selection.on("focus", function(t) {
                            i.focus(t)
                        }), this.selection.on("*", function(t, e) {
                            -1 === r.inArray(t, n) && i.trigger(t, e)
                        })
                    }, c.prototype._registerDropdownEvents = function() {
                        var i = this;
                        this.dropdown.on("*", function(t, e) {
                            i.trigger(t, e)
                        })
                    }, c.prototype._registerResultsEvents = function() {
                        var i = this;
                        this.results.on("*", function(t, e) {
                            i.trigger(t, e)
                        })
                    }, c.prototype._registerEvents = function() {
                        var i = this;
                        this.on("open", function() {
                            i.$container.addClass("select2-container--open")
                        }), this.on("close", function() {
                            i.$container.removeClass("select2-container--open")
                        }), this.on("enable", function() {
                            i.$container.removeClass("select2-container--disabled")
                        }), this.on("disable", function() {
                            i.$container.addClass("select2-container--disabled")
                        }), this.on("blur", function() {
                            i.$container.removeClass("select2-container--focus")
                        }), this.on("query", function(e) {
                            i.isOpen() || i.trigger("open", {}), this.dataAdapter.query(e, function(t) {
                                i.trigger("results:all", {
                                    data: t,
                                    query: e
                                })
                            })
                        }), this.on("query:append", function(e) {
                            this.dataAdapter.query(e, function(t) {
                                i.trigger("results:append", {
                                    data: t,
                                    query: e
                                })
                            })
                        }), this.on("keypress", function(t) {
                            var e = t.which;
                            i.isOpen() ? e === n.ESC || e === n.TAB || e === n.UP && t.altKey ? (i.close(), t.preventDefault()) : e === n.ENTER ? (i.trigger("results:select", {}), t.preventDefault()) : e === n.SPACE && t.ctrlKey ? (i.trigger("results:toggle", {}), t.preventDefault()) : e === n.UP ? (i.trigger("results:previous", {}), t.preventDefault()) : e === n.DOWN && (i.trigger("results:next", {}), t.preventDefault()) : (e === n.ENTER || e === n.SPACE || e === n.DOWN && t.altKey) && (i.open(), t.preventDefault())
                        })
                    }, c.prototype._syncAttributes = function() {
                        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                    }, c.prototype._syncSubtree = function(t, e) {
                        var i = !1,
                            n = this;
                        if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
                            if (e)
                                if (e.addedNodes && 0 < e.addedNodes.length)
                                    for (var r = 0; r < e.addedNodes.length; r++) {
                                        e.addedNodes[r].selected && (i = !0)
                                    } else e.removedNodes && 0 < e.removedNodes.length && (i = !0);
                                else i = !0;
                            i && this.dataAdapter.current(function(t) {
                                n.trigger("selection:update", {
                                    data: t
                                })
                            })
                        }
                    }, c.prototype.trigger = function(t, e) {
                        var i = c.__super__.trigger,
                            n = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting"
                            };
                        if (void 0 === e && (e = {}), t in n) {
                            var r = n[t],
                                s = {
                                    prevented: !1,
                                    name: t,
                                    args: e
                                };
                            if (i.call(this, r, s), s.prevented) return void(e.prevented = !0)
                        }
                        i.call(this, t, e)
                    }, c.prototype.toggleDropdown = function() {
                        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                    }, c.prototype.open = function() {
                        this.isOpen() || this.trigger("query", {})
                    }, c.prototype.close = function() {
                        this.isOpen() && this.trigger("close", {})
                    }, c.prototype.isOpen = function() {
                        return this.$container.hasClass("select2-container--open")
                    }, c.prototype.hasFocus = function() {
                        return this.$container.hasClass("select2-container--focus")
                    }, c.prototype.focus = function(t) {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                    }, c.prototype.enable = function(t) {
                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != t && 0 !== t.length || (t = [!0]);
                        var e = !t[0];
                        this.$element.prop("disabled", e)
                    }, c.prototype.data = function() {
                        this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var e = [];
                        return this.dataAdapter.current(function(t) {
                            e = t
                        }), e
                    }, c.prototype.val = function(t) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                        var e = t[0];
                        r.isArray(e) && (e = r.map(e, function(t) {
                            return t.toString()
                        })), this.$element.val(e).trigger("change")
                    }, c.prototype.destroy = function() {
                        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                    }, c.prototype.render = function() {
                        var t = r('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                        return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t
                    }, c
                }), t.define("jquery-mousewheel", ["jquery"], function(t) {
                    return t
                }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(r, t, s, e) {
                    if (null == r.fn.select2) {
                        var o = ["open", "close", "destroy"];
                        r.fn.select2 = function(e) {
                            if ("object" == typeof(e = e || {})) return this.each(function() {
                                var t = r.extend(!0, {}, e);
                                new s(r(this), t)
                            }), this;
                            if ("string" == typeof e) {
                                var i, n = Array.prototype.slice.call(arguments, 1);
                                return this.each(function() {
                                    var t = r(this).data("select2");
                                    null == t && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2."), i = t[e].apply(t, n)
                                }), -1 < r.inArray(e, o) ? this : i
                            }
                            throw new Error("Invalid arguments for Select2: " + e)
                        }
                    }
                    return null == r.fn.select2.defaults && (r.fn.select2.defaults = e), s
                }), {
                    define: t.define,
                    require: t.require
                }
            }(),
            e = t.require("jquery.select2");
        return i.fn.select2.amd = t, e
    }),
    function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AOS = e() : t.AOS = e()
    }(this, function() {
        return function(i) {
            function n(t) {
                if (r[t]) return r[t].exports;
                var e = r[t] = {
                    exports: {},
                    id: t,
                    loaded: !1
                };
                return i[t].call(e.exports, e, e.exports, n), e.loaded = !0, e.exports
            }
            var r = {};
            return n.m = i, n.c = r, n.p = "dist/", n(0)
        }([function(t, e, i) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var r = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                    }
                    return t
                },
                s = n((n(i(1)), i(5))),
                o = n(i(6)),
                a = n(i(7)),
                l = n(i(8)),
                u = n(i(9)),
                c = n(i(10)),
                h = n(i(13)),
                p = [],
                d = !1,
                f = document.all && !window.atob,
                g = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded"
                },
                m = function() {
                    return !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0] && (d = !0), d ? (p = (0, c.default)(p, g), (0, u.default)(p, g.once), p) : void 0
                },
                v = function() {
                    p = (0, h.default)(), m()
                };
            t.exports = {
                init: function(t) {
                    return g = r(g, t), p = (0, h.default)(), !0 === (e = g.disable) || "mobile" === e && l.default.mobile() || "phone" === e && l.default.phone() || "tablet" === e && l.default.tablet() || "function" == typeof e && !0 === e() || f ? void p.forEach(function(t, e) {
                        t.node.removeAttribute("data-aos"), t.node.removeAttribute("data-aos-easing"), t.node.removeAttribute("data-aos-duration"), t.node.removeAttribute("data-aos-delay")
                    }) : (document.querySelector("body").setAttribute("data-aos-easing", g.easing), document.querySelector("body").setAttribute("data-aos-duration", g.duration), document.querySelector("body").setAttribute("data-aos-delay", g.delay), "DOMContentLoaded" === g.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState) ? m(!0) : "load" === g.startEvent ? window.addEventListener(g.startEvent, function() {
                        m(!0)
                    }) : document.addEventListener(g.startEvent, function() {
                        m(!0)
                    }), window.addEventListener("resize", (0, o.default)(m, 50, !0)), window.addEventListener("orientationchange", (0, o.default)(m, 50, !0)), window.addEventListener("scroll", (0, s.default)(function() {
                        (0, u.default)(p, g.once)
                    }, 99)), document.addEventListener("DOMNodeRemoved", function(t) {
                        var e = t.target;
                        e && 1 === e.nodeType && e.hasAttribute && e.hasAttribute("data-aos") && (0, o.default)(v, 50, !0)
                    }), (0, a.default)("[data-aos]", v), p);
                    var e
                },
                refresh: m,
                refreshHard: v
            }
        }, function(t, e) {}, , , , function(t, e, i) {
            "use strict";
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
                },
                l = i(6);
            t.exports = function(t, e, i) {
                var n, r, s = !0,
                    o = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                return r = void 0 === (n = i) ? "undefined" : a(n), !!n && ("object" == r || "function" == r) && (s = "leading" in i ? !!i.leading : s, o = "trailing" in i ? !!i.trailing : o), l(t, e, {
                    leading: s,
                    maxWait: e,
                    trailing: o
                })
            }
        }, function(t, e) {
            "use strict";

            function y(t) {
                var e = void 0 === t ? "undefined" : i(t);
                return !!t && ("object" == e || "function" == e)
            }

            function s(t) {
                return "symbol" == (void 0 === t ? "undefined" : i(t)) || !!(e = t) && "object" == (void 0 === e ? "undefined" : i(e)) && f.call(t) == n;
                var e
            }

            function _(t) {
                if ("number" == typeof t) return t;
                if (s(t)) return o;
                if (y(t)) {
                    var e = (i = t.valueOf, (n = y(i) ? f.call(i) : "") == a || n == l ? t.valueOf() : t);
                    t = y(e) ? e + "" : e
                }
                var i, n;
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(u, "");
                var r = h.test(t);
                return r || p.test(t) ? d(t.slice(2), r ? 2 : 8) : c.test(t) ? o : +t
            }
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
                },
                o = NaN,
                a = "[object Function]",
                l = "[object GeneratorFunction]",
                n = "[object Symbol]",
                u = /^\s+|\s+$/g,
                c = /^[-+]0x[0-9a-f]+$/i,
                h = /^0b[01]+$/i,
                p = /^0o[0-7]+$/i,
                d = parseInt,
                f = Object.prototype.toString,
                x = Math.max,
                b = Math.min,
                w = Date.now;
            t.exports = function(n, r, t) {
                function s(t) {
                    var e = u,
                        i = c;
                    return u = c = void 0, g = t, p = n.apply(i, e)
                }

                function o(t) {
                    var e = t - f;
                    return !f || r <= e || e < 0 || v && h <= t - g
                }

                function a() {
                    var t, e, i = w();
                    return o(i) ? l(i) : void(d = setTimeout(a, (e = r - ((t = i) - f), v ? b(e, h - (t - g)) : e)))
                }

                function l(t) {
                    return clearTimeout(d), d = void 0, i && u ? s(t) : (u = c = void 0, p)
                }

                function e() {
                    var t, e = w(),
                        i = o(e);
                    if (u = arguments, c = this, f = e, i) {
                        if (void 0 === d) return g = t = f, d = setTimeout(a, r), m ? s(t) : p;
                        if (v) return clearTimeout(d), d = setTimeout(a, r), s(f)
                    }
                    return void 0 === d && (d = setTimeout(a, r)), p
                }
                var u, c, h, p, d, f = 0,
                    g = 0,
                    m = !1,
                    v = !1,
                    i = !0;
                if ("function" != typeof n) throw new TypeError("Expected a function");
                return r = _(r) || 0, y(t) && (m = !!t.leading, h = (v = "maxWait" in t) ? x(_(t.maxWait) || 0, r) : h, i = "trailing" in t ? !!t.trailing : i), e.cancel = function() {
                    void 0 !== d && clearTimeout(d), f = g = 0, u = c = d = void 0
                }, e.flush = function() {
                    return void 0 === d ? p : l(w())
                }, e
            }
        }, function(t, e) {
            "use strict";

            function i() {
                for (var t, e, i = 0, n = l.length; i < n; i++) {
                    t = l[i];
                    for (var r, s = 0, o = (e = a.querySelectorAll(t.selector)).length; s < o; s++)(r = e[s]).ready || (r.ready = !0, t.fn.call(r, r))
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = window.document,
                n = window.MutationObserver || window.WebKitMutationObserver,
                l = [],
                r = void 0;
            e.default = function(t, e) {
                l.push({
                    selector: t,
                    fn: e
                }), !r && n && (r = new n(i)).observe(a.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                }), i()
            }
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                    function n(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(t, e, i) {
                        return e && n(t.prototype, e), i && n(t, i), t
                    }
                }(),
                n = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    return i(t, [{
                        key: "phone",
                        value: function() {
                            var t, e = !1;
                            return t = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0), e
                        }
                    }, {
                        key: "mobile",
                        value: function() {
                            var t, e = !1;
                            return t = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0), e
                        }
                    }, {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone()
                        }
                    }]), t
                }();
            e.default = new n
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function(t, o) {
                var a = window.pageYOffset,
                    l = window.innerHeight;
                t.forEach(function(t, e) {
                    var i, n, r, s;
                    n = l + a, r = o, s = (i = t).node.getAttribute("data-aos-once"), n > i.position ? i.node.classList.add("aos-animate") : void 0 !== s && ("false" === s || !r && "true" !== s) && i.node.classList.remove("aos-animate")
                })
            }
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n, r = i(11),
                s = (n = r) && n.__esModule ? n : {
                    default: n
                };
            e.default = function(t, i) {
                return t.forEach(function(t, e) {
                    t.node.classList.add("aos-init"), t.position = (0, s.default)(t.node, i.offset)
                }), t
            }
        }, function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n, r = i(12),
                o = (n = r) && n.__esModule ? n : {
                    default: n
                };
            e.default = function(t, e) {
                var i = 0,
                    n = 0,
                    r = window.innerHeight,
                    s = {
                        offset: t.getAttribute("data-aos-offset"),
                        anchor: t.getAttribute("data-aos-anchor"),
                        anchorPlacement: t.getAttribute("data-aos-anchor-placement")
                    };
                switch (s.offset && !isNaN(s.offset) && (n = parseInt(s.offset)), s.anchor && document.querySelectorAll(s.anchor) && (t = document.querySelectorAll(s.anchor)[0]), i = (0, o.default)(t).top, s.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        i += t.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        i += t.offsetHeight;
                        break;
                    case "top-center":
                        i += r / 2;
                        break;
                    case "bottom-center":
                        i += r / 2 + t.offsetHeight;
                        break;
                    case "center-center":
                        i += r / 2 + t.offsetHeight / 2;
                        break;
                    case "top-top":
                        i += r;
                        break;
                    case "bottom-top":
                        i += t.offsetHeight + r;
                        break;
                    case "center-top":
                        i += t.offsetHeight / 2 + r
                }
                return s.anchorPlacement || s.offset || isNaN(e) || (n = e), i + n
            }
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function(t) {
                for (var e = 0, i = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0), i += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0), t = t.offsetParent;
                return {
                    top: i,
                    left: e
                }
            }
        }, function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.default = function(t) {
                t = t || document.querySelectorAll("[data-aos]");
                var i = [];
                return [].forEach.call(t, function(t, e) {
                    i.push({
                        node: t
                    })
                }), i
            }
        }])
    }),
    function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(require("jquery"), require("window")) : "function" == typeof define && define.amd ? define("isInViewport", ["jquery", "window"], e) : e(t.$, t.window)
    }(this, function(f, g) {
        "use strict";

        function m(t, e) {
            var i = t.getBoundingClientRect(),
                n = i.top,
                r = i.bottom,
                s = i.left,
                o = i.right,
                a = f.extend({
                    tolerance: 0,
                    viewport: g
                }, e),
                l = !1,
                u = a.viewport.jquery ? a.viewport : f(a.viewport);
            u.length || (console.warn("isInViewport: The viewport selector you have provided matches no element on page."), console.warn("isInViewport: Defaulting to viewport as window"), u = f(g));
            var c = u.height(),
                h = u.width(),
                p = u[0].toString();
            if (u[0] !== g && "[object Window]" !== p && "[object DOMWindow]" !== p) {
                var d = u[0].getBoundingClientRect();
                n -= d.top, r -= d.top, s -= d.left, o -= d.left, h -= m.scrollBarWidth = m.scrollBarWidth || function(t) {
                    var e = f("<div></div>").css({
                        width: "100%"
                    });
                    t.append(e);
                    var i = t.width() - e.width();
                    return e.remove(), i
                }(u)
            }
            return a.tolerance = ~~Math.round(parseFloat(a.tolerance)), a.tolerance < 0 && (a.tolerance = c + a.tolerance), o <= 0 || h <= s ? l : l = a.tolerance ? n <= a.tolerance && r >= a.tolerance : 0 < r && n <= c
        }

        function n(t) {
            if (t) {
                var e = t.split(",");
                return 1 === e.length && isNaN(e[0]) && (e[1] = e[0], e[0] = void 0), {
                    tolerance: e[0] ? e[0].trim() : void 0,
                    viewport: e[1] ? f(e[1].trim()) : void 0
                }
            }
            return {}
        }
        f = "default" in f ? f.default : f, g = "default" in g ? g.default : g,
            /**
             * @author  Mudit Ameta
             * @license https://github.com/zeusdeux/isInViewport/blob/master/license.md MIT
             */
            f.extend(f.expr[":"], {
                "in-viewport": f.expr.createPseudo ? f.expr.createPseudo(function(e) {
                    return function(t) {
                        return m(t, n(e))
                    }
                }) : function(t, e, i) {
                    return m(t, n(i[3]))
                }
            }), f.fn.isInViewport = function(i) {
                return this.filter(function(t, e) {
                    return m(e, i)
                })
            }, f.fn.run = function(t) {
                var i = this;
                if (1 === arguments.length && "function" == typeof t && (t = [t]), !(t instanceof Array)) throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions");
                return t.forEach(function(e) {
                    "function" != typeof e ? (console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"), console.warn("isInViewport: Ignoring non-function values in array and moving on")) : [].slice.call(i).forEach(function(t) {
                        return e.call(f(t))
                    })
                }), this
            }
    }), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var X = Math.PI / 180,
            U = 180 / Math.PI,
            b = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            S = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            o = /(^[#\.][a-z]|[a-y][a-z])/gi,
            p = /[achlmqstvz]/gi,
            w = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
            d = _gsScope._gsDefine.globals.TweenLite,
            T = function(t) {
                _gsScope.console && console.log(t)
            },
            C = function(t, e, i, n, r, s, o, a, l) {
                if (t !== a || e !== l) {
                    i = Math.abs(i), n = Math.abs(n);
                    var u = r % 360 * X,
                        c = Math.cos(u),
                        h = Math.sin(u),
                        p = (t - a) / 2,
                        d = (e - l) / 2,
                        f = c * p + h * d,
                        g = -h * p + c * d,
                        m = i * i,
                        v = n * n,
                        y = f * f,
                        _ = g * g,
                        x = y / m + _ / v;
                    1 < x && (m = (i = Math.sqrt(x) * i) * i, v = (n = Math.sqrt(x) * n) * n);
                    var b = s === o ? -1 : 1,
                        w = (m * v - m * _ - v * y) / (m * _ + v * y);
                    w < 0 && (w = 0);
                    var T = b * Math.sqrt(w),
                        C = T * (i * g / n),
                        S = T * (-n * f / i),
                        k = (t + a) / 2 + (c * C - h * S),
                        A = (e + l) / 2 + (h * C + c * S),
                        E = (f - C) / i,
                        P = (g - S) / n,
                        D = (-f - C) / i,
                        O = (-g - S) / n,
                        F = Math.sqrt(E * E + P * P),
                        M = E,
                        N = (b = P < 0 ? -1 : 1) * Math.acos(M / F) * U;
                    F = Math.sqrt((E * E + P * P) * (D * D + O * O)), M = E * D + P * O;
                    var $ = (b = E * O - P * D < 0 ? -1 : 1) * Math.acos(M / F) * U;
                    !o && 0 < $ ? $ -= 360 : o && $ < 0 && ($ += 360);
                    var R, j, L, z = function(t, e) {
                            var i, n, r, s, o, a, l = Math.ceil(Math.abs(e) / 90),
                                u = 0,
                                c = [];
                            for (t *= X, i = (e *= X) / l, n = 4 / 3 * Math.sin(i / 2) / (1 + Math.cos(i / 2)), a = 0; a < l; a++) r = t + a * i, s = Math.cos(r), o = Math.sin(r), c[u++] = s - n * o, c[u++] = o + n * s, r += i, s = Math.cos(r), o = Math.sin(r), c[u++] = s + n * o, c[u++] = o - n * s, c[u++] = s, c[u++] = o;
                            return c
                        }(N %= 360, $ %= 360),
                        B = c * i,
                        q = h * i,
                        I = h * -n,
                        H = c * n,
                        W = z.length - 2;
                    for (R = 0; R < W; R += 2) j = z[R], L = z[R + 1], z[R] = j * B + L * I + k, z[R + 1] = j * q + L * H + A;
                    return z[z.length - 2] = a, z[z.length - 1] = l, z
                }
            },
            k = function(t) {
                var e, i, n, r, s, o, a, l, u, c, h, p, d, f = (t + "").replace(w, function(t) {
                        var e = +t;
                        return e < 1e-4 && -1e-4 < e ? 0 : e
                    }).match(b) || [],
                    g = [],
                    m = 0,
                    v = 0,
                    y = f.length,
                    _ = 2,
                    x = 0;
                if (!t || !isNaN(f[0]) || isNaN(f[1])) return T("ERROR: malformed path data: " + t), g;
                for (e = 0; e < y; e++)
                    if (d = s, isNaN(f[e]) ? o = (s = f[e].toUpperCase()) !== f[e] : e--, n = +f[e + 1], r = +f[e + 2], o && (n += m, r += v), 0 === e && (l = n, u = r), "M" === s) a && a.length < 8 && (g.length -= 1, _ = 0), m = l = n, v = u = r, a = [n, r], x += _, _ = 2, g.push(a), e += 2, s = "L";
                    else if ("C" === s) a || (a = [0, 0]), a[_++] = n, a[_++] = r, o || (m = v = 0), a[_++] = m + 1 * f[e + 3], a[_++] = v + 1 * f[e + 4], a[_++] = m += 1 * f[e + 5], a[_++] = v += 1 * f[e + 6], e += 6;
                else if ("S" === s) "C" === d || "S" === d ? (c = m - a[_ - 4], h = v - a[_ - 3], a[_++] = m + c, a[_++] = v + h) : (a[_++] = m, a[_++] = v), a[_++] = n, a[_++] = r, o || (m = v = 0), a[_++] = m += 1 * f[e + 3], a[_++] = v += 1 * f[e + 4], e += 4;
                else if ("Q" === s) c = n - m, h = r - v, a[_++] = m + 2 * c / 3, a[_++] = v + 2 * h / 3, o || (m = v = 0), c = n - (m += 1 * f[e + 3]), h = r - (v += 1 * f[e + 4]), a[_++] = m + 2 * c / 3, a[_++] = v + 2 * h / 3, a[_++] = m, a[_++] = v, e += 4;
                else if ("T" === s) c = m - a[_ - 4], h = v - a[_ - 3], a[_++] = m + c, a[_++] = v + h, c = m + 1.5 * c - n, h = v + 1.5 * h - r, a[_++] = n + 2 * c / 3, a[_++] = r + 2 * h / 3, a[_++] = m = n, a[_++] = v = r, e += 2;
                else if ("H" === s) r = v, a[_++] = m + (n - m) / 3, a[_++] = v + (r - v) / 3, a[_++] = m + 2 * (n - m) / 3, a[_++] = v + 2 * (r - v) / 3, a[_++] = m = n, a[_++] = r, e += 1;
                else if ("V" === s) r = n, n = m, o && (r += v - m), a[_++] = n, a[_++] = v + (r - v) / 3, a[_++] = n, a[_++] = v + 2 * (r - v) / 3, a[_++] = n, a[_++] = v = r, e += 1;
                else if ("L" === s || "Z" === s) "Z" === s && (n = l, r = u, a.closed = !0), ("L" === s || .5 < Math.abs(m - n) || .5 < Math.abs(v - r)) && (a[_++] = m + (n - m) / 3, a[_++] = v + (r - v) / 3, a[_++] = m + 2 * (n - m) / 3, a[_++] = v + 2 * (r - v) / 3, a[_++] = n, a[_++] = r, "L" === s && (e += 2)), m = n, v = r;
                else if ("A" === s) {
                    if (p = C(m, v, 1 * f[e + 1], 1 * f[e + 2], 1 * f[e + 3], 1 * f[e + 4], 1 * f[e + 5], (o ? m : 0) + 1 * f[e + 6], (o ? v : 0) + 1 * f[e + 7]))
                        for (i = 0; i < p.length; i++) a[_++] = p[i];
                    m = a[_ - 2], v = a[_ - 1], e += 7
                } else T("Error: malformed path data: " + t);
                return g.totalPoints = x + _, g
            },
            A = function(t, e) {
                var i, n, r, s, o, a, l, u, c, h, p, d, f, g, m = 0,
                    v = t.length,
                    y = e / ((v - 2) / 6);
                for (f = 2; f < v; f += 6)
                    for (m += y; .999999 < m;) i = t[f - 2], n = t[f - 1], r = t[f], s = t[f + 1], o = t[f + 2], a = t[f + 3], l = t[f + 4], u = t[f + 5], c = i + (r - i) * (g = 1 / (Math.floor(m) + 1)), c += ((p = r + (o - r) * g) - c) * g, p += (o + (l - o) * g - p) * g, h = n + (s - n) * g, h += ((d = s + (a - s) * g) - h) * g, d += (a + (u - a) * g - d) * g, t.splice(f, 4, i + (r - i) * g, n + (s - n) * g, c, h, c + (p - c) * g, h + (d - h) * g, p, d, o + (l - o) * g, a + (u - a) * g), f += 6, v += 6, m--;
                return t
            },
            E = function(t) {
                var e, i, n, r, s = "",
                    o = t.length;
                for (i = 0; i < o; i++) {
                    for (s += "M" + (r = t[i])[0] + "," + r[1] + " C", e = r.length, n = 2; n < e; n++) s += (100 * r[n++] | 0) / 100 + "," + (100 * r[n++] | 0) / 100 + " " + (100 * r[n++] | 0) / 100 + "," + (100 * r[n++] | 0) / 100 + " " + (100 * r[n++] | 0) / 100 + "," + (100 * r[n] | 0) / 100 + " ";
                    r.closed && (s += "z")
                }
                return s
            },
            P = function(t) {
                for (var e = [], i = t.length - 1, n = 0; - 1 < --i;) e[n++] = t[i], e[n++] = t[i + 1], i--;
                for (i = 0; i < n; i++) t[i] = e[i];
                t.reversed = !t.reversed
            },
            f = function(t) {
                var e, i = t.length,
                    n = 0,
                    r = 0;
                for (e = 0; e < i; e++) n += t[e++], r += t[e];
                return [n / (i / 2), r / (i / 2)]
            },
            D = function(t) {
                var e, i, n, r = t.length,
                    s = t[0],
                    o = s,
                    a = t[1],
                    l = a;
                for (n = 6; n < r; n += 6) s < (e = t[n]) ? s = e : e < o && (o = e), a < (i = t[n + 1]) ? a = i : i < l && (l = i);
                return t.centerX = (s + o) / 2, t.centerY = (a + l) / 2, t.size = (s - o) * (a - l)
            },
            O = function(t) {
                for (var e, i, n, r, s, o = t.length, a = t[0][0], l = a, u = t[0][1], c = u; - 1 < --o;)
                    for (e = (s = t[o]).length, r = 6; r < e; r += 6) a < (i = s[r]) ? a = i : i < l && (l = i), u < (n = s[r + 1]) ? u = n : n < c && (c = n);
                return t.centerX = (a + l) / 2, t.centerY = (u + c) / 2, t.size = (a - l) * (u - c)
            },
            F = function(t, e) {
                return e.length - t.length
            },
            M = function(t, e) {
                var i = t.size || D(t),
                    n = e.size || D(e);
                return Math.abs(n - i) < (i + n) / 20 ? e.centerX - t.centerX || e.centerY - t.centerY : n - i
            },
            N = function(t, e) {
                var i, n, r = t.slice(0),
                    s = t.length,
                    o = s - 2;
                for (e |= 0, i = 0; i < s; i++) n = (i + e) % o, t[i++] = r[n], t[i] = r[n + 1]
            },
            g = function(t, e, i, n, r) {
                var s, o, a, l, u = t.length,
                    c = 0,
                    h = u - 2;
                for (i *= 6, o = 0; o < u; o += 6) l = t[s = (o + i) % h] - (e[o] - n), a = t[s + 1] - (e[o + 1] - r), c += Math.sqrt(a * a + l * l);
                return c
            },
            $ = function(t, e, i) {
                var n, r, s, o = t.length,
                    a = f(t),
                    l = f(e),
                    u = l[0] - a[0],
                    c = l[1] - a[1],
                    h = g(t, e, 0, u, c),
                    p = 0;
                for (s = 6; s < o; s += 6)(r = g(t, e, s / 6, u, c)) < h && (h = r, p = s);
                if (i)
                    for (n = t.slice(0), P(n), s = 6; s < o; s += 6)(r = g(n, e, s / 6, u, c)) < h && (h = r, p = -s);
                return p / 6
            },
            R = function(t, e, i) {
                for (var n, r, s, o, a, l, u = t.length, c = 99999999999, h = 0, p = 0; - 1 < --u;)
                    for (l = (n = t[u]).length, a = 0; a < l; a += 6) r = n[a] - e, s = n[a + 1] - i, (o = Math.sqrt(r * r + s * s)) < c && (c = o, h = n[a], p = n[a + 1]);
                return [h, p]
            },
            j = function(t, e, i, n, r, s) {
                var o, a, l, u, c = e.length,
                    h = 0,
                    p = Math.min(t.size || D(t), e[i].size || D(e[i])) * n,
                    d = 999999999999,
                    f = t.centerX + r,
                    g = t.centerY + s;
                for (o = i; o < c && !((e[o].size || D(e[o])) < p); o++) a = e[o].centerX - f, l = e[o].centerY - g, (u = Math.sqrt(a * a + l * l)) < d && (h = o, d = u);
                return u = e[h], e.splice(h, 1), u
            },
            a = function(t, e, i, n) {
                var r, s, o, a, l, u, c, h = e.length - t.length,
                    p = 0 < h ? e : t,
                    d = 0 < h ? t : e,
                    f = 0,
                    g = "complexity" === n ? F : M,
                    m = "position" === n ? 0 : "number" == typeof n ? n : .8,
                    v = d.length,
                    y = "object" == typeof i && i.push ? i.slice(0) : [i],
                    _ = "reverse" === y[0] || y[0] < 0,
                    x = "log" === i;
                if (d[0]) {
                    if (1 < p.length && (t.sort(g), e.sort(g), p.size || O(p), d.size || O(d), u = p.centerX - d.centerX, c = p.centerY - d.centerY, g === M))
                        for (v = 0; v < d.length; v++) p.splice(v, 0, j(d[v], p, v, m, u, c));
                    if (h)
                        for (h < 0 && (h = -h), p[0].length > d[0].length && A(d[0], (p[0].length - d[0].length) / 6 | 0), v = d.length; f < h;) p[v].size || D(p[v]), a = (o = R(d, p[v].centerX, p[v].centerY))[0], l = o[1], d[v++] = [a, l, a, l, a, l, a, l], d.totalPoints += 8, f++;
                    for (v = 0; v < t.length; v++) r = e[v], s = t[v], (h = r.length - s.length) < 0 ? A(r, -h / 6 | 0) : 0 < h && A(s, h / 6 | 0), _ && !s.reversed && P(s), (i = y[v] || 0 === y[v] ? y[v] : "auto") && (s.closed || Math.abs(s[0] - s[s.length - 2]) < .5 && Math.abs(s[1] - s[s.length - 1]) < .5 ? "auto" === i || "log" === i ? (y[v] = i = $(s, r, 0 === v), i < 0 && (_ = !0, P(s), i = -i), N(s, 6 * i)) : "reverse" !== i && (v && i < 0 && P(s), N(s, 6 * (i < 0 ? -i : i))) : !_ && ("auto" === i && Math.abs(r[0] - s[0]) + Math.abs(r[1] - s[1]) + Math.abs(r[r.length - 2] - s[s.length - 2]) + Math.abs(r[r.length - 1] - s[s.length - 1]) > Math.abs(r[0] - s[s.length - 2]) + Math.abs(r[1] - s[s.length - 1]) + Math.abs(r[r.length - 2] - s[0]) + Math.abs(r[r.length - 1] - s[1]) || i % 2) ? (P(s), y[v] = -1, _ = !0) : "auto" === i ? y[v] = 0 : "reverse" === i && (y[v] = -1), s.closed !== r.closed && (s.closed = r.closed = !1));
                    return x && T("shapeIndex:[" + y.join(",") + "]"), y
                }
            },
            m = function(t, e, i, n) {
                var r = k(t[0]),
                    s = k(t[1]);
                a(r, s, e || 0 === e ? e : "auto", i) && (t[0] = E(r), t[1] = E(s), "log" !== n && !0 !== n || T('precompile:["' + t[0] + '","' + t[1] + '"]'))
            },
            r = function(t, e) {
                var i, n, r, s, o, a, l, u = 0,
                    c = parseFloat(t[0]),
                    h = parseFloat(t[1]),
                    p = c + "," + h + " ";
                for (i = .5 * e / (.5 * (r = t.length) - 1), n = 0; n < r - 2; n += 2) {
                    if (u += i, a = parseFloat(t[n + 2]), l = parseFloat(t[n + 3]), .999999 < u)
                        for (o = 1 / (Math.floor(u) + 1), s = 1; .999999 < u;) p += (c + (a - c) * o * s).toFixed(2) + "," + (h + (l - h) * o * s).toFixed(2) + " ", u--, s++;
                    p += a + "," + l + " ", c = a, h = l
                }
                return p
            },
            i = function(t) {
                var e = t[0].match(S) || [],
                    i = t[1].match(S) || [],
                    n = i.length - e.length;
                0 < n ? t[0] = r(e, n) : t[1] = r(i, -n)
            },
            v = function(e) {
                return isNaN(e) ? i : function(t) {
                    i(t), t[1] = function(t, e) {
                        if (!e) return t;
                        var i, n, r, s = t.match(S) || [],
                            o = s.length,
                            a = "";
                        for ("reverse" === e ? (n = o - 1, i = -2) : (n = (2 * (parseInt(e, 10) || 0) + 1 + 100 * o) % o, i = 2), r = 0; r < o; r += 2) a += s[n - 1] + "," + s[n] + " ", n = (n + i) % o;
                        return a
                    }(t[1], parseInt(e, 10))
                }
            },
            l = function(t, e) {
                var i, n, r, s, o, a, l, u, c, h, p, d, f, g, m, v, y, _, x, b, w, T = t.tagName.toLowerCase(),
                    C = .552284749831;
                return "path" !== T && t.getBBox ? (a = function(t, e) {
                    var i, n = _gsScope.document.createElementNS("http://www.w3.org/2000/svg", "path"),
                        r = Array.prototype.slice.call(t.attributes),
                        s = r.length;
                    for (e = "," + e + ","; - 1 < --s;) i = r[s].nodeName.toLowerCase(), -1 === e.indexOf("," + i + ",") && n.setAttributeNS(null, i, r[s].nodeValue);
                    return n
                }(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), "rect" === T ? (s = +t.getAttribute("rx") || 0, o = +t.getAttribute("ry") || 0, n = +t.getAttribute("x") || 0, r = +t.getAttribute("y") || 0, h = (+t.getAttribute("width") || 0) - 2 * s, p = (+t.getAttribute("height") || 0) - 2 * o, i = s || o ? "M" + (v = (g = (f = n + s) + h) + s) + "," + (_ = r + o) + " V" + (x = _ + p) + " C" + [v, b = x + o * C, m = g + s * C, w = x + o, g, w, g - (g - f) / 3, w, f + (g - f) / 3, w, f, w, d = n + s * (1 - C), w, n, b, n, x, n, x - (x - _) / 3, n, _ + (x - _) / 3, n, _, n, y = r + o * (1 - C), d, r, f, r, f + (g - f) / 3, r, g - (g - f) / 3, r, g, r, m, r, v, y, v, _].join(",") + "z" : "M" + (n + h) + "," + r + " v" + p + " h" + -h + " v" + -p + " h" + h + "z") : "circle" === T || "ellipse" === T ? ("circle" === T ? u = (s = o = +t.getAttribute("r") || 0) * C : (s = +t.getAttribute("rx") || 0, u = (o = +t.getAttribute("ry") || 0) * C), i = "M" + ((n = +t.getAttribute("cx") || 0) + s) + "," + (r = +t.getAttribute("cy") || 0) + " C" + [n + s, r + u, n + (l = s * C), r + o, n, r + o, n - l, r + o, n - s, r + u, n - s, r, n - s, r - u, n - l, r - o, n, r - o, n + l, r - o, n + s, r - u, n + s, r].join(",") + "z") : "line" === T ? i = E(k("M" + (t.getAttribute("x1") || 0) + "," + (t.getAttribute("y1") || 0) + " L" + (t.getAttribute("x2") || 0) + "," + (t.getAttribute("y2") || 0))) : "polyline" !== T && "polygon" !== T || (i = "M" + (n = (c = (t.getAttribute("points") + "").match(S) || []).shift()) + "," + (r = c.shift()) + " L" + c.join(","), "polygon" === T && (i += "," + n + "," + r + "z")), a.setAttribute("d", i), e && t.parentNode && (t.parentNode.insertBefore(a, t), t.parentNode.removeChild(t)), a) : t
            },
            y = function(t, e, i) {
                var n, r, s = "string" == typeof t;
                return (!s || o.test(t) || (t.match(S) || []).length < 3) && ((n = s ? d.selector(t) : t && t[0] ? t : [t]) && n[0] ? (r = (n = n[0]).nodeName.toUpperCase(), e && "PATH" !== r && (n = l(n, !1), r = "PATH"), t = n.getAttribute("PATH" === r ? "d" : "points") || "", n === i && (t = n.getAttributeNS(null, "data-original") || t)) : (T("WARNING: invalid morph to: " + t), t = !1)), t
            },
            _ = "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",
            x = _gsScope._gsDefine.plugin({
                propName: "morphSVG",
                API: 2,
                global: !0,
                version: "0.8.11",
                init: function(t, e, i, n) {
                    var r, s, o, a, l, u, c, h;
                    return "function" == typeof t.setAttribute && ("function" == typeof e && (e = e(n, t)), l = "POLYLINE" === (r = t.nodeName.toUpperCase()) || "POLYGON" === r, "PATH" === r || l ? (s = "PATH" === r ? "d" : "points", ("string" == typeof e || e.getBBox || e[0]) && (e = {
                        shape: e
                    }), a = y(e.shape || e.d || e.points || "", "d" === s, t), l && p.test(a) ? (T("WARNING: a <" + r + "> cannot accept path data. " + _), !1) : (a && ((this._target = t).getAttributeNS(null, "data-original") || t.setAttributeNS(null, "data-original", t.getAttribute(s)), (o = this._addTween(t, "setAttribute", t.getAttribute(s) + "", a + "", "morphSVG", !1, s, "object" == typeof e.precompile ? function(t) {
                        t[0] = e.precompile[0], t[1] = e.precompile[1]
                    } : "d" === s ? (u = e.shapeIndex, c = e.map || x.defaultMap, h = e.precompile, c || h || u || 0 === u ? function(t) {
                        m(t, u, c, h)
                    } : m) : v(e.shapeIndex))) && (this._overwriteProps.push("morphSVG"), o.end = a, o.endProp = s)), !0)) : (T("WARNING: cannot morph a <" + r + "> SVG element. " + _), !1))
                },
                set: function(t) {
                    var e;
                    if (this._super.setRatio.call(this, t), 1 === t)
                        for (e = this._firstPT; e;) e.end && this._target.setAttribute(e.endProp, e.end), e = e._next
                }
            });
        x.pathFilter = m, x.pointsFilter = i, x.subdivideRawBezier = A, x.defaultMap = "size", x.pathDataToRawBezier = function(t) {
            return k(y(t, !0))
        }, x.equalizeSegmentQuantity = a, x.convertToPath = function(t, e) {
            "string" == typeof t && (t = d.selector(t));
            for (var i = t && 0 !== t.length ? t.length && t[0] && t[0].nodeType ? Array.prototype.slice.call(t, 0) : [t] : [], n = i.length; - 1 < --n;) i[n] = l(i[n], !1 !== e);
            return i
        }, x.pathDataToBezier = function(t, e) {
            var i, n, r, s, o, a, l, u, c = k(y(t, !0))[0] || [],
                h = 0;
            if (u = (e = e || {}).align || e.relative, s = e.matrix || [1, 0, 0, 1, 0, 0], o = e.offsetX || 0, a = e.offsetY || 0, "relative" === u || !0 === u ? (o -= c[0] * s[0] + c[1] * s[2], a -= c[0] * s[1] + c[1] * s[3], h = "+=") : (o += s[4], a += s[5], u && (u = "string" == typeof u ? d.selector(u) : u && u[0] ? u : [u]) && u[0] && (o -= (l = u[0].getBBox() || {
                    x: 0,
                    y: 0
                }).x, a -= l.y)), i = [], r = c.length, s && "1,0,0,1,0,0" !== s.join(","))
                for (n = 0; n < r; n += 2) i.push({
                    x: h + (c[n] * s[0] + c[n + 1] * s[2] + o),
                    y: h + (c[n] * s[1] + c[n + 1] * s[3] + a)
                });
            else
                for (n = 0; n < r; n += 2) i.push({
                    x: h + (c[n] + o),
                    y: h + (c[n + 1] + a)
                });
            return i
        }
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).MorphSVGPlugin
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.js"), module.exports = e()) : "function" == typeof define && define.amd && define(["TweenLite"], e)
    }(), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var a = (_gsScope.document || {}).documentElement,
            l = _gsScope,
            o = function(t, e) {
                var i = "x" === e ? "Width" : "Height",
                    n = "scroll" + i,
                    r = "client" + i,
                    s = document.body;
                return t === l || t === a || t === s ? Math.max(a[n], s[n]) - (l["inner" + i] || a[r] || s[r]) : t[n] - t["offset" + i]
            },
            u = function(t, e) {
                var i = "scroll" + ("x" === e ? "Left" : "Top");
                return t === l && (null != t.pageXOffset ? i = "page" + e.toUpperCase() + "Offset" : t = null != a[i] ? a : document.body),
                    function() {
                        return t[i]
                    }
            },
            r = function(t, e) {
                var i, n = (i = t, "string" == typeof i && (i = TweenLite.selector(i)), i.length && i !== l && i[0] && i[0].style && !i.nodeType && (i = i[0]), i === l || i.nodeType && i.style ? i : null).getBoundingClientRect(),
                    r = !e || e === l || e === document.body,
                    s = (r ? a : e).getBoundingClientRect(),
                    o = {
                        x: n.left - s.left,
                        y: n.top - s.top
                    };
                return !r && e && (o.x += u(e, "x")(), o.y += u(e, "y")()), o
            },
            n = function(t, e, i) {
                var n = typeof t;
                return isNaN(t) ? "number" === n || "string" === n && "=" === t.charAt(1) ? t : "max" === t ? o(e, i) : Math.min(o(e, i), r(t, e)[i]) : parseFloat(t)
            },
            c = _gsScope._gsDefine.plugin({
                propName: "scrollTo",
                API: 2,
                global: !0,
                version: "1.9.0",
                init: function(t, e, i) {
                    return this._wdw = t === l, this._target = t, this._tween = i, "object" != typeof e ? "string" == typeof(e = {
                        y: e
                    }).y && "max" !== e.y && "=" !== e.y.charAt(1) && (e.x = e.y) : e.nodeType && (e = {
                        y: e,
                        x: e
                    }), this.vars = e, this._autoKill = !1 !== e.autoKill, this.getX = u(t, "x"), this.getY = u(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != e.x ? (this._addTween(this, "x", this.x, n(e.x, t, "x") - (e.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != e.y ? (this._addTween(this, "y", this.y, n(e.y, t, "y") - (e.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                },
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    var e = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        i = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        n = i - this.yPrev,
                        r = e - this.xPrev,
                        s = c.autoKillThreshold;
                    this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (s < r || r < -s) && e < o(this._target, "x") && (this.skipX = !0), !this.skipY && (s < n || n < -s) && i < o(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? l.scrollTo(this.skipX ? e : this.x, this.skipY ? i : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                }
            }),
            t = c.prototype;
        c.max = o, c.getOffset = r, c.buildGetter = u, c.autoKillThreshold = 7, t._kill = function(t) {
            return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
        }
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).ScrollToPlugin
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.js"), module.exports = e()) : "function" == typeof define && define.amd && define(["TweenLite"], e)
    }(),
    function(i) {
        "use strict";
        var r = i.GreenSockGlobals || i,
            t = function(t) {
                var e, i = t.split("."),
                    n = r;
                for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                return n
            }("com.greensock.utils"),
            w = function(t) {
                var e = t.nodeType,
                    i = "";
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += w(t)
                } else if (3 === e || 4 === e) return t.nodeValue;
                return i
            },
            q = document,
            I = q.defaultView ? q.defaultView.getComputedStyle : function() {},
            s = /([A-Z])/g,
            H = function(t, e, i, n) {
                var r;
                return (i = i || I(t, null)) ? r = (t = i.getPropertyValue(e.replace(s, "-$1").toLowerCase())) || i.length ? t : i[e] : t.currentStyle && (r = (i = t.currentStyle)[e]), n ? r : parseInt(r, 10) || 0
            },
            o = function(t) {
                return !!(t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
            },
            T = /(?:\r|\n|\t\t)/g,
            C = /(?:\s\s+)/g,
            S = function(t) {
                return (t.charCodeAt(0) - 55296 << 10) + (t.charCodeAt(1) - 56320) + 65536
            },
            a = " style='position:relative;display:inline-block;" + (q.all && !q.addEventListener ? "*display:inline;*zoom:1;'" : "'"),
            l = function(t, e) {
                var i = -1 !== (t = t || "").indexOf("++"),
                    n = 1;
                return i && (t = t.split("++").join("")),
                    function() {
                        return "<" + e + a + (t ? " class='" + t + (i ? n++ : "") + "'>" : ">")
                    }
            },
            n = t.SplitText = r.SplitText = function(t, e) {
                if ("string" == typeof t && (t = n.selector(t)), !t) throw "cannot split a null element.";
                this.elements = o(t) ? function(t) {
                    var e, i, n, r = [],
                        s = t.length;
                    for (e = 0; e < s; e++)
                        if (i = t[e], o(i))
                            for (n = i.length, n = 0; n < i.length; n++) r.push(i[n]);
                        else r.push(i);
                    return r
                }(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
            },
            W = function(t, e, i) {
                var n = t.nodeType;
                if (1 === n || 9 === n || 11 === n)
                    for (t = t.firstChild; t; t = t.nextSibling) W(t, e, i);
                else 3 !== n && 4 !== n || (t.nodeValue = t.nodeValue.split(e).join(i))
            },
            X = function(t, e) {
                for (var i = e.length; - 1 < --i;) t.push(e[i])
            },
            u = function(t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            U = function(t, e, i) {
                for (var n; t && t !== e;) {
                    if (n = t._next || t.nextSibling) return n.textContent.charAt(0) === i;
                    t = t.parentNode || t._parent
                }
                return !1
            },
            V = function(t) {
                var e, i, n = u(t.childNodes),
                    r = n.length;
                for (e = 0; e < r; e++)(i = n[e])._isSplit ? V(i) : (e && 3 === i.previousSibling.nodeType ? i.previousSibling.nodeValue += 3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue : 3 !== i.nodeType && t.insertBefore(i.firstChild, i), t.removeChild(i))
            },
            c = function(t, e, i, n, r, s, o) {
                var a, l, u, c, h, p, d, f, g, m, v, y, _ = I(t),
                    x = H(t, "paddingLeft", _),
                    b = -999,
                    w = H(t, "borderBottomWidth", _) + H(t, "borderTopWidth", _),
                    T = H(t, "borderLeftWidth", _) + H(t, "borderRightWidth", _),
                    C = H(t, "paddingTop", _) + H(t, "paddingBottom", _),
                    S = H(t, "paddingLeft", _) + H(t, "paddingRight", _),
                    k = .2 * H(t, "fontSize"),
                    A = H(t, "textAlign", _, !0),
                    E = [],
                    P = [],
                    D = [],
                    O = e.wordDelimiter || " ",
                    F = e.span ? "span" : "div",
                    M = e.type || e.split || "chars,words,lines",
                    N = r && -1 !== M.indexOf("lines") ? [] : null,
                    $ = -1 !== M.indexOf("words"),
                    R = -1 !== M.indexOf("chars"),
                    j = "absolute" === e.position || !0 === e.absolute,
                    L = e.linesClass,
                    z = -1 !== (L || "").indexOf("++"),
                    B = [];
                for (N && 1 === t.children.length && t.children[0]._isSplit && (t = t.children[0]), z && (L = L.split("++").join("")), u = (l = t.getElementsByTagName("*")).length, h = [], a = 0; a < u; a++) h[a] = l[a];
                if (N || j)
                    for (a = 0; a < u; a++)((p = (c = h[a]).parentNode === t) || j || R && !$) && (y = c.offsetTop, N && p && Math.abs(y - b) > k && ("BR" !== c.nodeName || 0 === a) && (d = [], N.push(d), b = y), j && (c._x = c.offsetLeft, c._y = y, c._w = c.offsetWidth, c._h = c.offsetHeight), N && ((c._isSplit && p || !R && p || $ && p || !$ && c.parentNode.parentNode === t && !c.parentNode._isSplit) && (d.push(c), c._x -= x, U(c, t, O) && (c._wordEnd = !0)), "BR" === c.nodeName && (c.nextSibling && "BR" === c.nextSibling.nodeName || 0 === a) && N.push([])));
                for (a = 0; a < u; a++) p = (c = h[a]).parentNode === t, "BR" !== c.nodeName ? (j && (g = c.style, $ || p || (c._x += c.parentNode._x, c._y += c.parentNode._y), g.left = c._x + "px", g.top = c._y + "px", g.position = "absolute", g.display = "block", g.width = c._w + 1 + "px", g.height = c._h + "px"), !$ && R ? c._isSplit ? (c._next = c.nextSibling, c.parentNode.appendChild(c)) : c.parentNode._isSplit ? (c._parent = c.parentNode, !c.previousSibling && c.firstChild && (c.firstChild._isFirst = !0), c.nextSibling && " " === c.nextSibling.textContent && !c.nextSibling.nextSibling && B.push(c.nextSibling), c._next = c.nextSibling && c.nextSibling._isFirst ? null : c.nextSibling, c.parentNode.removeChild(c), h.splice(a--, 1), u--) : p || (y = !c.nextSibling && U(c.parentNode, t, O), c.parentNode._parent && c.parentNode._parent.appendChild(c), y && c.parentNode.appendChild(q.createTextNode(" ")), e.span && (c.style.display = "inline"), E.push(c)) : c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML ? P.push(c) : R && !c._isSplit && (e.span && (c.style.display = "inline"), E.push(c))) : N || j ? (c.parentNode && c.parentNode.removeChild(c), h.splice(a--, 1), u--) : $ || t.appendChild(c);
                for (a = B.length; - 1 < --a;) B[a].parentNode.removeChild(B[a]);
                if (N) {
                    for (j && (m = q.createElement(F), t.appendChild(m), v = m.offsetWidth + "px", y = m.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(m)), g = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                    for (f = " " === O && (!j || !$ && !R), a = 0; a < N.length; a++) {
                        for (d = N[a], (m = q.createElement(F)).style.cssText = "display:block;text-align:" + A + ";position:" + (j ? "absolute;" : "relative;"), L && (m.className = L + (z ? a + 1 : "")), D.push(m), u = d.length, l = 0; l < u; l++) "BR" !== d[l].nodeName && (c = d[l], m.appendChild(c), f && c._wordEnd && m.appendChild(q.createTextNode(" ")), j && (0 === l && (m.style.top = c._y + "px", m.style.left = x + y + "px"), c.style.top = "0px", y && (c.style.left = c._x - y + "px")));
                        0 === u ? m.innerHTML = "&nbsp;" : $ || R || (V(m), W(m, String.fromCharCode(160), " ")), j && (m.style.width = v, m.style.height = c._h + "px"), t.appendChild(m)
                    }
                    t.style.cssText = g
                }
                j && (o > t.clientHeight && (t.style.height = o - C + "px", t.clientHeight < o && (t.style.height = o + w + "px")), s > t.clientWidth && (t.style.width = s - S + "px", t.clientWidth < s && (t.style.width = s + T + "px"))), X(i, E), X(n, P), X(r, D)
            },
            h = function(t, e, i, n) {
                var r, s, o = u(t.childNodes),
                    a = o.length,
                    l = "absolute" === e.position || !0 === e.absolute;
                if (3 !== t.nodeType || 1 < a) {
                    for (e.absolute = !1, r = 0; r < a; r++)(3 !== (s = o[r]).nodeType || /\S+/.test(s.nodeValue)) && (l && 3 !== s.nodeType && "inline" === H(s, "display", null, !0) && (s.style.display = "inline-block", s.style.position = "relative"), s._isSplit = !0, h(s, e, i, n));
                    return e.absolute = l, void(t._isSplit = !0)
                }! function(t, e, i, n) {
                    var r, s, o, a, l, u, c, h, p, d = e.span ? "span" : "div",
                        f = -1 !== (e.type || e.split || "chars,words,lines").indexOf("chars"),
                        g = "absolute" === e.position || !0 === e.absolute,
                        m = e.wordDelimiter || " ",
                        v = " " !== m ? "" : g ? "&#173; " : " ",
                        y = e.span ? "</span>" : "</div>",
                        _ = !0,
                        x = q.createElement("div"),
                        b = t.parentNode;
                    for (b.insertBefore(x, t), x.textContent = t.nodeValue, b.removeChild(t), c = -1 !== (r = w(t = x)).indexOf("<"), !1 !== e.reduceWhiteSpace && (r = r.replace(C, " ").replace(T, "")), c && (r = r.split("<").join("{{LT}}")), l = r.length, s = (" " === r.charAt(0) ? v : "") + i(), o = 0; o < l; o++)
                        if ((u = r.charAt(o)) === m && r.charAt(o - 1) !== m && o) {
                            for (s += _ ? y : "", _ = !1; r.charAt(o + 1) === m;) s += v, o++;
                            o === l - 1 ? s += v : ")" !== r.charAt(o + 1) && (s += v + i(), _ = !0)
                        } else "{" === u && "{{LT}}" === r.substr(o, 6) ? (s += f ? n() + "{{LT}}</" + d + ">" : "{{LT}}", o += 5) : 55296 <= u.charCodeAt(0) && u.charCodeAt(0) <= 56319 || 65024 <= r.charCodeAt(o + 1) && r.charCodeAt(o + 1) <= 65039 ? (h = S(r.substr(o, 2)), p = S(r.substr(o + 2, 2)), a = 127462 <= h && h <= 127487 && 127462 <= p && p <= 127487 || 127995 <= p && p <= 127999 ? 4 : 2, s += f && " " !== u ? n() + r.substr(o, a) + "</" + d + ">" : r.substr(o, a), o += a - 1) : s += f && " " !== u ? n() + u + "</" + d + ">" : u;
                    t.outerHTML = s + (_ ? y : ""), c && W(b, "{{LT}}", "<")
                }(t, e, i, n)
            },
            e = n.prototype;
        e.split = function(t) {
            this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            for (var e, i, n, r = this.elements.length, s = t.span ? "span" : "div", o = l(t.wordsClass, s), a = l(t.charsClass, s); - 1 < --r;) n = this.elements[r], this._originals[r] = n.innerHTML, e = n.clientHeight, i = n.clientWidth, h(n, t, o, a), c(n, t, this.chars, this.words, this.lines, i, e);
            return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
        }, e.revert = function() {
            if (!this._originals) throw "revert() call wasn't scoped properly.";
            for (var t = this._originals.length; - 1 < --t;) this.elements[t].innerHTML = this._originals[t];
            return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
        }, n.selector = i.$ || i.jQuery || function(t) {
            var e = i.$ || i.jQuery;
            return e ? (n.selector = e)(t) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
        }, n.version = "0.5.8"
    }(_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).SplitText
        };
        "undefined" != typeof module && module.exports ? module.exports = e() : "function" == typeof define && define.amd && define([], e)
    }();