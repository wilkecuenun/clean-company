/*! For license information please see index.bundle.js.LICENSE.txt */
!(function () {
    var e = {
            741: function (e, t, n) {
                var i, r;
                !(function (o, s) {
                    "use strict";
                    void 0 ===
                        (r =
                            "function" == typeof (i = s)
                                ? i.call(t, n, t, e)
                                : i) || (e.exports = r);
                })(window, function () {
                    "use strict";
                    var e = (function () {
                        var e = window.Element.prototype;
                        if (e.matches) return "matches";
                        if (e.matchesSelector) return "matchesSelector";
                        for (
                            var t = ["webkit", "moz", "ms", "o"], n = 0;
                            n < t.length;
                            n++
                        ) {
                            var i = t[n] + "MatchesSelector";
                            if (e[i]) return i;
                        }
                    })();
                    return function (t, n) {
                        return t[e](n);
                    };
                });
            },
            158: function (e, t, n) {
                var i, r;
                "undefined" != typeof window && window,
                    void 0 ===
                        (r =
                            "function" ==
                            typeof (i = function () {
                                "use strict";
                                function e() {}
                                var t = e.prototype;
                                return (
                                    (t.on = function (e, t) {
                                        if (e && t) {
                                            var n = (this._events =
                                                    this._events || {}),
                                                i = (n[e] = n[e] || []);
                                            return (
                                                -1 == i.indexOf(t) && i.push(t),
                                                this
                                            );
                                        }
                                    }),
                                    (t.once = function (e, t) {
                                        if (e && t) {
                                            this.on(e, t);
                                            var n = (this._onceEvents =
                                                this._onceEvents || {});
                                            return (
                                                ((n[e] = n[e] || {})[t] = !0),
                                                this
                                            );
                                        }
                                    }),
                                    (t.off = function (e, t) {
                                        var n = this._events && this._events[e];
                                        if (n && n.length) {
                                            var i = n.indexOf(t);
                                            return (
                                                -1 != i && n.splice(i, 1), this
                                            );
                                        }
                                    }),
                                    (t.emitEvent = function (e, t) {
                                        var n = this._events && this._events[e];
                                        if (n && n.length) {
                                            (n = n.slice(0)), (t = t || []);
                                            for (
                                                var i =
                                                        this._onceEvents &&
                                                        this._onceEvents[e],
                                                    r = 0;
                                                r < n.length;
                                                r++
                                            ) {
                                                var o = n[r];
                                                i &&
                                                    i[o] &&
                                                    (this.off(e, o),
                                                    delete i[o]),
                                                    o.apply(this, t);
                                            }
                                            return this;
                                        }
                                    }),
                                    (t.allOff = function () {
                                        delete this._events,
                                            delete this._onceEvents;
                                    }),
                                    e
                                );
                            })
                                ? i.call(t, n, t, e)
                                : i) || (e.exports = r);
            },
            47: function (e, t, n) {
                var i, r;
                !(function (o, s) {
                    (i = [n(741)]),
                        (r = function (e) {
                            return (function (e, t) {
                                "use strict";
                                var n = {
                                        extend: function (e, t) {
                                            for (var n in t) e[n] = t[n];
                                            return e;
                                        },
                                        modulo: function (e, t) {
                                            return ((e % t) + t) % t;
                                        },
                                    },
                                    i = Array.prototype.slice;
                                (n.makeArray = function (e) {
                                    return Array.isArray(e)
                                        ? e
                                        : null == e
                                        ? []
                                        : "object" == typeof e &&
                                          "number" == typeof e.length
                                        ? i.call(e)
                                        : [e];
                                }),
                                    (n.removeFrom = function (e, t) {
                                        var n = e.indexOf(t);
                                        -1 != n && e.splice(n, 1);
                                    }),
                                    (n.getParent = function (e, n) {
                                        for (
                                            ;
                                            e.parentNode && e != document.body;

                                        )
                                            if (((e = e.parentNode), t(e, n)))
                                                return e;
                                    }),
                                    (n.getQueryElement = function (e) {
                                        return "string" == typeof e
                                            ? document.querySelector(e)
                                            : e;
                                    }),
                                    (n.handleEvent = function (e) {
                                        var t = "on" + e.type;
                                        this[t] && this[t](e);
                                    }),
                                    (n.filterFindElements = function (e, i) {
                                        e = n.makeArray(e);
                                        var r = [];
                                        return (
                                            e.forEach(function (e) {
                                                if (e instanceof HTMLElement)
                                                    if (i) {
                                                        t(e, i) && r.push(e);
                                                        for (
                                                            var n =
                                                                    e.querySelectorAll(
                                                                        i
                                                                    ),
                                                                o = 0;
                                                            o < n.length;
                                                            o++
                                                        )
                                                            r.push(n[o]);
                                                    } else r.push(e);
                                            }),
                                            r
                                        );
                                    }),
                                    (n.debounceMethod = function (e, t, n) {
                                        n = n || 100;
                                        var i = e.prototype[t],
                                            r = t + "Timeout";
                                        e.prototype[t] = function () {
                                            var e = this[r];
                                            clearTimeout(e);
                                            var t = arguments,
                                                o = this;
                                            this[r] = setTimeout(function () {
                                                i.apply(o, t), delete o[r];
                                            }, n);
                                        };
                                    }),
                                    (n.docReady = function (e) {
                                        var t = document.readyState;
                                        "complete" == t || "interactive" == t
                                            ? setTimeout(e)
                                            : document.addEventListener(
                                                  "DOMContentLoaded",
                                                  e
                                              );
                                    }),
                                    (n.toDashed = function (e) {
                                        return e
                                            .replace(
                                                /(.)([A-Z])/g,
                                                function (e, t, n) {
                                                    return t + "-" + n;
                                                }
                                            )
                                            .toLowerCase();
                                    });
                                var r = e.console;
                                return (
                                    (n.htmlInit = function (t, i) {
                                        n.docReady(function () {
                                            var o = n.toDashed(i),
                                                s = "data-" + o,
                                                a = document.querySelectorAll(
                                                    "[" + s + "]"
                                                ),
                                                c = document.querySelectorAll(
                                                    ".js-" + o
                                                ),
                                                u = n
                                                    .makeArray(a)
                                                    .concat(n.makeArray(c)),
                                                l = s + "-options",
                                                d = e.jQuery;
                                            u.forEach(function (e) {
                                                var n,
                                                    o =
                                                        e.getAttribute(s) ||
                                                        e.getAttribute(l);
                                                try {
                                                    n = o && JSON.parse(o);
                                                } catch (t) {
                                                    return void (
                                                        r &&
                                                        r.error(
                                                            "Error parsing " +
                                                                s +
                                                                " on " +
                                                                e.className +
                                                                ": " +
                                                                t
                                                        )
                                                    );
                                                }
                                                var a = new t(e, n);
                                                d && d.data(e, i, a);
                                            });
                                        });
                                    }),
                                    n
                                );
                            })(o, e);
                        }.apply(t, i)),
                        void 0 === r || (e.exports = r);
                })(window);
            },
            131: function (e, t, n) {
                var i, r;
                window,
                    void 0 ===
                        (r =
                            "function" ==
                            typeof (i = function () {
                                "use strict";
                                function e(e) {
                                    var t = parseFloat(e);
                                    return (
                                        -1 == e.indexOf("%") && !isNaN(t) && t
                                    );
                                }
                                var t =
                                        "undefined" == typeof console
                                            ? function () {}
                                            : function (e) {
                                                  console.error(e);
                                              },
                                    n = [
                                        "paddingLeft",
                                        "paddingRight",
                                        "paddingTop",
                                        "paddingBottom",
                                        "marginLeft",
                                        "marginRight",
                                        "marginTop",
                                        "marginBottom",
                                        "borderLeftWidth",
                                        "borderRightWidth",
                                        "borderTopWidth",
                                        "borderBottomWidth",
                                    ],
                                    i = n.length;
                                function r(e) {
                                    var n = getComputedStyle(e);
                                    return (
                                        n ||
                                            t(
                                                "Style returned " +
                                                    n +
                                                    ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
                                            ),
                                        n
                                    );
                                }
                                var o,
                                    s = !1;
                                function a(t) {
                                    if (
                                        ((function () {
                                            if (!s) {
                                                s = !0;
                                                var t =
                                                    document.createElement(
                                                        "div"
                                                    );
                                                (t.style.width = "200px"),
                                                    (t.style.padding =
                                                        "1px 2px 3px 4px"),
                                                    (t.style.borderStyle =
                                                        "solid"),
                                                    (t.style.borderWidth =
                                                        "1px 2px 3px 4px"),
                                                    (t.style.boxSizing =
                                                        "border-box");
                                                var n =
                                                    document.body ||
                                                    document.documentElement;
                                                n.appendChild(t);
                                                var i = r(t);
                                                (o =
                                                    200 ==
                                                    Math.round(e(i.width))),
                                                    (a.isBoxSizeOuter = o),
                                                    n.removeChild(t);
                                            }
                                        })(),
                                        "string" == typeof t &&
                                            (t = document.querySelector(t)),
                                        t && "object" == typeof t && t.nodeType)
                                    ) {
                                        var c = r(t);
                                        if ("none" == c.display)
                                            return (function () {
                                                for (
                                                    var e = {
                                                            width: 0,
                                                            height: 0,
                                                            innerWidth: 0,
                                                            innerHeight: 0,
                                                            outerWidth: 0,
                                                            outerHeight: 0,
                                                        },
                                                        t = 0;
                                                    t < i;
                                                    t++
                                                )
                                                    e[n[t]] = 0;
                                                return e;
                                            })();
                                        var u = {};
                                        (u.width = t.offsetWidth),
                                            (u.height = t.offsetHeight);
                                        for (
                                            var l = (u.isBorderBox =
                                                    "border-box" ==
                                                    c.boxSizing),
                                                d = 0;
                                            d < i;
                                            d++
                                        ) {
                                            var p = n[d],
                                                f = c[p],
                                                h = parseFloat(f);
                                            u[p] = isNaN(h) ? 0 : h;
                                        }
                                        var m = u.paddingLeft + u.paddingRight,
                                            g = u.paddingTop + u.paddingBottom,
                                            y = u.marginLeft + u.marginRight,
                                            v = u.marginTop + u.marginBottom,
                                            x =
                                                u.borderLeftWidth +
                                                u.borderRightWidth,
                                            b =
                                                u.borderTopWidth +
                                                u.borderBottomWidth,
                                            w = l && o,
                                            E = e(c.width);
                                        !1 !== E &&
                                            (u.width = E + (w ? 0 : m + x));
                                        var S = e(c.height);
                                        return (
                                            !1 !== S &&
                                                (u.height =
                                                    S + (w ? 0 : g + b)),
                                            (u.innerWidth = u.width - (m + x)),
                                            (u.innerHeight =
                                                u.height - (g + b)),
                                            (u.outerWidth = u.width + y),
                                            (u.outerHeight = u.height + v),
                                            u
                                        );
                                    }
                                }
                                return a;
                            })
                                ? i.call(t, n, t, e)
                                : i) || (e.exports = r);
            },
            755: function (e, t) {
                var n;
                !(function (t, n) {
                    "use strict";
                    "object" == typeof e.exports
                        ? (e.exports = t.document
                              ? n(t, !0)
                              : function (e) {
                                    if (!e.document)
                                        throw new Error(
                                            "jQuery requires a window with a document"
                                        );
                                    return n(e);
                                })
                        : n(t);
                })(
                    "undefined" != typeof window ? window : this,
                    function (i, r) {
                        "use strict";
                        var o = [],
                            s = Object.getPrototypeOf,
                            a = o.slice,
                            c = o.flat
                                ? function (e) {
                                      return o.flat.call(e);
                                  }
                                : function (e) {
                                      return o.concat.apply([], e);
                                  },
                            u = o.push,
                            l = o.indexOf,
                            d = {},
                            p = d.toString,
                            f = d.hasOwnProperty,
                            h = f.toString,
                            m = h.call(Object),
                            g = {},
                            y = function (e) {
                                return (
                                    "function" == typeof e &&
                                    "number" != typeof e.nodeType &&
                                    "function" != typeof e.item
                                );
                            },
                            v = function (e) {
                                return null != e && e === e.window;
                            },
                            x = i.document,
                            b = { type: !0, src: !0, nonce: !0, noModule: !0 };
                        function w(e, t, n) {
                            var i,
                                r,
                                o = (n = n || x).createElement("script");
                            if (((o.text = e), t))
                                for (i in b)
                                    (r =
                                        t[i] ||
                                        (t.getAttribute &&
                                            t.getAttribute(i))) &&
                                        o.setAttribute(i, r);
                            n.head.appendChild(o).parentNode.removeChild(o);
                        }
                        function E(e) {
                            return null == e
                                ? e + ""
                                : "object" == typeof e || "function" == typeof e
                                ? d[p.call(e)] || "object"
                                : typeof e;
                        }
                        var S = "3.7.1",
                            _ = /HTML$/i,
                            T = function (e, t) {
                                return new T.fn.init(e, t);
                            };
                        function C(e) {
                            var t = !!e && "length" in e && e.length,
                                n = E(e);
                            return (
                                !y(e) &&
                                !v(e) &&
                                ("array" === n ||
                                    0 === t ||
                                    ("number" == typeof t &&
                                        t > 0 &&
                                        t - 1 in e))
                            );
                        }
                        function k(e, t) {
                            return (
                                e.nodeName &&
                                e.nodeName.toLowerCase() === t.toLowerCase()
                            );
                        }
                        (T.fn = T.prototype =
                            {
                                jquery: S,
                                constructor: T,
                                length: 0,
                                toArray: function () {
                                    return a.call(this);
                                },
                                get: function (e) {
                                    return null == e
                                        ? a.call(this)
                                        : e < 0
                                        ? this[e + this.length]
                                        : this[e];
                                },
                                pushStack: function (e) {
                                    var t = T.merge(this.constructor(), e);
                                    return (t.prevObject = this), t;
                                },
                                each: function (e) {
                                    return T.each(this, e);
                                },
                                map: function (e) {
                                    return this.pushStack(
                                        T.map(this, function (t, n) {
                                            return e.call(t, n, t);
                                        })
                                    );
                                },
                                slice: function () {
                                    return this.pushStack(
                                        a.apply(this, arguments)
                                    );
                                },
                                first: function () {
                                    return this.eq(0);
                                },
                                last: function () {
                                    return this.eq(-1);
                                },
                                even: function () {
                                    return this.pushStack(
                                        T.grep(this, function (e, t) {
                                            return (t + 1) % 2;
                                        })
                                    );
                                },
                                odd: function () {
                                    return this.pushStack(
                                        T.grep(this, function (e, t) {
                                            return t % 2;
                                        })
                                    );
                                },
                                eq: function (e) {
                                    var t = this.length,
                                        n = +e + (e < 0 ? t : 0);
                                    return this.pushStack(
                                        n >= 0 && n < t ? [this[n]] : []
                                    );
                                },
                                end: function () {
                                    return (
                                        this.prevObject || this.constructor()
                                    );
                                },
                                push: u,
                                sort: o.sort,
                                splice: o.splice,
                            }),
                            (T.extend = T.fn.extend =
                                function () {
                                    var e,
                                        t,
                                        n,
                                        i,
                                        r,
                                        o,
                                        s = arguments[0] || {},
                                        a = 1,
                                        c = arguments.length,
                                        u = !1;
                                    for (
                                        "boolean" == typeof s &&
                                            ((u = s),
                                            (s = arguments[a] || {}),
                                            a++),
                                            "object" == typeof s ||
                                                y(s) ||
                                                (s = {}),
                                            a === c && ((s = this), a--);
                                        a < c;
                                        a++
                                    )
                                        if (null != (e = arguments[a]))
                                            for (t in e)
                                                (i = e[t]),
                                                    "__proto__" !== t &&
                                                        s !== i &&
                                                        (u &&
                                                        i &&
                                                        (T.isPlainObject(i) ||
                                                            (r =
                                                                Array.isArray(
                                                                    i
                                                                )))
                                                            ? ((n = s[t]),
                                                              (o =
                                                                  r &&
                                                                  !Array.isArray(
                                                                      n
                                                                  )
                                                                      ? []
                                                                      : r ||
                                                                        T.isPlainObject(
                                                                            n
                                                                        )
                                                                      ? n
                                                                      : {}),
                                                              (r = !1),
                                                              (s[t] = T.extend(
                                                                  u,
                                                                  o,
                                                                  i
                                                              )))
                                                            : void 0 !== i &&
                                                              (s[t] = i));
                                    return s;
                                }),
                            T.extend({
                                expando:
                                    "jQuery" +
                                    (S + Math.random()).replace(/\D/g, ""),
                                isReady: !0,
                                error: function (e) {
                                    throw new Error(e);
                                },
                                noop: function () {},
                                isPlainObject: function (e) {
                                    var t, n;
                                    return !(
                                        !e ||
                                        "[object Object]" !== p.call(e) ||
                                        ((t = s(e)) &&
                                            ("function" !=
                                                typeof (n =
                                                    f.call(t, "constructor") &&
                                                    t.constructor) ||
                                                h.call(n) !== m))
                                    );
                                },
                                isEmptyObject: function (e) {
                                    var t;
                                    for (t in e) return !1;
                                    return !0;
                                },
                                globalEval: function (e, t, n) {
                                    w(e, { nonce: t && t.nonce }, n);
                                },
                                each: function (e, t) {
                                    var n,
                                        i = 0;
                                    if (C(e))
                                        for (
                                            n = e.length;
                                            i < n &&
                                            !1 !== t.call(e[i], i, e[i]);
                                            i++
                                        );
                                    else
                                        for (i in e)
                                            if (!1 === t.call(e[i], i, e[i]))
                                                break;
                                    return e;
                                },
                                text: function (e) {
                                    var t,
                                        n = "",
                                        i = 0,
                                        r = e.nodeType;
                                    if (!r)
                                        for (; (t = e[i++]); ) n += T.text(t);
                                    return 1 === r || 11 === r
                                        ? e.textContent
                                        : 9 === r
                                        ? e.documentElement.textContent
                                        : 3 === r || 4 === r
                                        ? e.nodeValue
                                        : n;
                                },
                                makeArray: function (e, t) {
                                    var n = t || [];
                                    return (
                                        null != e &&
                                            (C(Object(e))
                                                ? T.merge(
                                                      n,
                                                      "string" == typeof e
                                                          ? [e]
                                                          : e
                                                  )
                                                : u.call(n, e)),
                                        n
                                    );
                                },
                                inArray: function (e, t, n) {
                                    return null == t ? -1 : l.call(t, e, n);
                                },
                                isXMLDoc: function (e) {
                                    var t = e && e.namespaceURI,
                                        n =
                                            e &&
                                            (e.ownerDocument || e)
                                                .documentElement;
                                    return !_.test(
                                        t || (n && n.nodeName) || "HTML"
                                    );
                                },
                                merge: function (e, t) {
                                    for (
                                        var n = +t.length, i = 0, r = e.length;
                                        i < n;
                                        i++
                                    )
                                        e[r++] = t[i];
                                    return (e.length = r), e;
                                },
                                grep: function (e, t, n) {
                                    for (
                                        var i = [], r = 0, o = e.length, s = !n;
                                        r < o;
                                        r++
                                    )
                                        !t(e[r], r) !== s && i.push(e[r]);
                                    return i;
                                },
                                map: function (e, t, n) {
                                    var i,
                                        r,
                                        o = 0,
                                        s = [];
                                    if (C(e))
                                        for (i = e.length; o < i; o++)
                                            null != (r = t(e[o], o, n)) &&
                                                s.push(r);
                                    else
                                        for (o in e)
                                            null != (r = t(e[o], o, n)) &&
                                                s.push(r);
                                    return c(s);
                                },
                                guid: 1,
                                support: g,
                            }),
                            "function" == typeof Symbol &&
                                (T.fn[Symbol.iterator] = o[Symbol.iterator]),
                            T.each(
                                "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                                    " "
                                ),
                                function (e, t) {
                                    d["[object " + t + "]"] = t.toLowerCase();
                                }
                            );
                        var L = o.pop,
                            q = o.sort,
                            A = o.splice,
                            D = "[\\x20\\t\\r\\n\\f]",
                            N = new RegExp(
                                "^" +
                                    D +
                                    "+|((?:^|[^\\\\])(?:\\\\.)*)" +
                                    D +
                                    "+$",
                                "g"
                            );
                        T.contains = function (e, t) {
                            var n = t && t.parentNode;
                            return (
                                e === n ||
                                !(
                                    !n ||
                                    1 !== n.nodeType ||
                                    !(e.contains
                                        ? e.contains(n)
                                        : e.compareDocumentPosition &&
                                          16 & e.compareDocumentPosition(n))
                                )
                            );
                        };
                        var j = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
                        function O(e, t) {
                            return t
                                ? "\0" === e
                                    ? "�"
                                    : e.slice(0, -1) +
                                      "\\" +
                                      e.charCodeAt(e.length - 1).toString(16) +
                                      " "
                                : "\\" + e;
                        }
                        T.escapeSelector = function (e) {
                            return (e + "").replace(j, O);
                        };
                        var H = x,
                            I = u;
                        !(function () {
                            var e,
                                t,
                                n,
                                r,
                                s,
                                c,
                                u,
                                d,
                                p,
                                h,
                                m = I,
                                y = T.expando,
                                v = 0,
                                x = 0,
                                b = ee(),
                                w = ee(),
                                E = ee(),
                                S = ee(),
                                _ = function (e, t) {
                                    return e === t && (s = !0), 0;
                                },
                                C =
                                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                                j =
                                    "(?:\\\\[\\da-fA-F]{1,6}" +
                                    D +
                                    "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                                O =
                                    "\\[" +
                                    D +
                                    "*(" +
                                    j +
                                    ")(?:" +
                                    D +
                                    "*([*^$|!~]?=)" +
                                    D +
                                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                                    j +
                                    "))|)" +
                                    D +
                                    "*\\]",
                                M =
                                    ":(" +
                                    j +
                                    ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                                    O +
                                    ")*)|.*)\\)|)",
                                R = new RegExp(D + "+", "g"),
                                P = new RegExp("^" + D + "*," + D + "*"),
                                W = new RegExp(
                                    "^" + D + "*([>+~]|" + D + ")" + D + "*"
                                ),
                                $ = new RegExp(D + "|>"),
                                z = new RegExp(M),
                                B = new RegExp("^" + j + "$"),
                                F = {
                                    ID: new RegExp("^#(" + j + ")"),
                                    CLASS: new RegExp("^\\.(" + j + ")"),
                                    TAG: new RegExp("^(" + j + "|[*])"),
                                    ATTR: new RegExp("^" + O),
                                    PSEUDO: new RegExp("^" + M),
                                    CHILD: new RegExp(
                                        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                                            D +
                                            "*(even|odd|(([+-]|)(\\d*)n|)" +
                                            D +
                                            "*(?:([+-]|)" +
                                            D +
                                            "*(\\d+)|))" +
                                            D +
                                            "*\\)|)",
                                        "i"
                                    ),
                                    bool: new RegExp("^(?:" + C + ")$", "i"),
                                    needsContext: new RegExp(
                                        "^" +
                                            D +
                                            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                                            D +
                                            "*((?:-\\d)?\\d*)" +
                                            D +
                                            "*\\)|)(?=[^-]|$)",
                                        "i"
                                    ),
                                },
                                G = /^(?:input|select|textarea|button)$/i,
                                Q = /^h\d$/i,
                                Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                                U = /[+~]/,
                                X = new RegExp(
                                    "\\\\[\\da-fA-F]{1,6}" +
                                        D +
                                        "?|\\\\([^\\r\\n\\f])",
                                    "g"
                                ),
                                V = function (e, t) {
                                    var n = "0x" + e.slice(1) - 65536;
                                    return (
                                        t ||
                                        (n < 0
                                            ? String.fromCharCode(n + 65536)
                                            : String.fromCharCode(
                                                  (n >> 10) | 55296,
                                                  (1023 & n) | 56320
                                              ))
                                    );
                                },
                                K = function () {
                                    ce();
                                },
                                J = pe(
                                    function (e) {
                                        return (
                                            !0 === e.disabled &&
                                            k(e, "fieldset")
                                        );
                                    },
                                    { dir: "parentNode", next: "legend" }
                                );
                            try {
                                m.apply(
                                    (o = a.call(H.childNodes)),
                                    H.childNodes
                                ),
                                    o[H.childNodes.length].nodeType;
                            } catch (e) {
                                m = {
                                    apply: function (e, t) {
                                        I.apply(e, a.call(t));
                                    },
                                    call: function (e) {
                                        I.apply(e, a.call(arguments, 1));
                                    },
                                };
                            }
                            function Z(e, t, n, i) {
                                var r,
                                    o,
                                    s,
                                    a,
                                    u,
                                    l,
                                    f,
                                    h = t && t.ownerDocument,
                                    v = t ? t.nodeType : 9;
                                if (
                                    ((n = n || []),
                                    "string" != typeof e ||
                                        !e ||
                                        (1 !== v && 9 !== v && 11 !== v))
                                )
                                    return n;
                                if (!i && (ce(t), (t = t || c), d)) {
                                    if (11 !== v && (u = Y.exec(e)))
                                        if ((r = u[1])) {
                                            if (9 === v) {
                                                if (!(s = t.getElementById(r)))
                                                    return n;
                                                if (s.id === r)
                                                    return m.call(n, s), n;
                                            } else if (
                                                h &&
                                                (s = h.getElementById(r)) &&
                                                Z.contains(t, s) &&
                                                s.id === r
                                            )
                                                return m.call(n, s), n;
                                        } else {
                                            if (u[2])
                                                return (
                                                    m.apply(
                                                        n,
                                                        t.getElementsByTagName(
                                                            e
                                                        )
                                                    ),
                                                    n
                                                );
                                            if (
                                                (r = u[3]) &&
                                                t.getElementsByClassName
                                            )
                                                return (
                                                    m.apply(
                                                        n,
                                                        t.getElementsByClassName(
                                                            r
                                                        )
                                                    ),
                                                    n
                                                );
                                        }
                                    if (!(S[e + " "] || (p && p.test(e)))) {
                                        if (
                                            ((f = e),
                                            (h = t),
                                            1 === v && ($.test(e) || W.test(e)))
                                        ) {
                                            for (
                                                ((h =
                                                    (U.test(e) &&
                                                        ae(t.parentNode)) ||
                                                    t) == t &&
                                                    g.scope) ||
                                                    ((a = t.getAttribute("id"))
                                                        ? (a =
                                                              T.escapeSelector(
                                                                  a
                                                              ))
                                                        : t.setAttribute(
                                                              "id",
                                                              (a = y)
                                                          )),
                                                    o = (l = le(e)).length;
                                                o--;

                                            )
                                                l[o] =
                                                    (a ? "#" + a : ":scope") +
                                                    " " +
                                                    de(l[o]);
                                            f = l.join(",");
                                        }
                                        try {
                                            return (
                                                m.apply(
                                                    n,
                                                    h.querySelectorAll(f)
                                                ),
                                                n
                                            );
                                        } catch (t) {
                                            S(e, !0);
                                        } finally {
                                            a === y && t.removeAttribute("id");
                                        }
                                    }
                                }
                                return ve(e.replace(N, "$1"), t, n, i);
                            }
                            function ee() {
                                var e = [];
                                return function n(i, r) {
                                    return (
                                        e.push(i + " ") > t.cacheLength &&
                                            delete n[e.shift()],
                                        (n[i + " "] = r)
                                    );
                                };
                            }
                            function te(e) {
                                return (e[y] = !0), e;
                            }
                            function ne(e) {
                                var t = c.createElement("fieldset");
                                try {
                                    return !!e(t);
                                } catch (e) {
                                    return !1;
                                } finally {
                                    t.parentNode && t.parentNode.removeChild(t),
                                        (t = null);
                                }
                            }
                            function ie(e) {
                                return function (t) {
                                    return k(t, "input") && t.type === e;
                                };
                            }
                            function re(e) {
                                return function (t) {
                                    return (
                                        (k(t, "input") || k(t, "button")) &&
                                        t.type === e
                                    );
                                };
                            }
                            function oe(e) {
                                return function (t) {
                                    return "form" in t
                                        ? t.parentNode && !1 === t.disabled
                                            ? "label" in t
                                                ? "label" in t.parentNode
                                                    ? t.parentNode.disabled ===
                                                      e
                                                    : t.disabled === e
                                                : t.isDisabled === e ||
                                                  (t.isDisabled !== !e &&
                                                      J(t) === e)
                                            : t.disabled === e
                                        : "label" in t && t.disabled === e;
                                };
                            }
                            function se(e) {
                                return te(function (t) {
                                    return (
                                        (t = +t),
                                        te(function (n, i) {
                                            for (
                                                var r,
                                                    o = e([], n.length, t),
                                                    s = o.length;
                                                s--;

                                            )
                                                n[(r = o[s])] &&
                                                    (n[r] = !(i[r] = n[r]));
                                        })
                                    );
                                });
                            }
                            function ae(e) {
                                return (
                                    e && void 0 !== e.getElementsByTagName && e
                                );
                            }
                            function ce(e) {
                                var n,
                                    i = e ? e.ownerDocument || e : H;
                                return i != c &&
                                    9 === i.nodeType &&
                                    i.documentElement
                                    ? ((u = (c = i).documentElement),
                                      (d = !T.isXMLDoc(c)),
                                      (h =
                                          u.matches ||
                                          u.webkitMatchesSelector ||
                                          u.msMatchesSelector),
                                      u.msMatchesSelector &&
                                          H != c &&
                                          (n = c.defaultView) &&
                                          n.top !== n &&
                                          n.addEventListener("unload", K),
                                      (g.getById = ne(function (e) {
                                          return (
                                              (u.appendChild(e).id = T.expando),
                                              !c.getElementsByName ||
                                                  !c.getElementsByName(
                                                      T.expando
                                                  ).length
                                          );
                                      })),
                                      (g.disconnectedMatch = ne(function (e) {
                                          return h.call(e, "*");
                                      })),
                                      (g.scope = ne(function () {
                                          return c.querySelectorAll(":scope");
                                      })),
                                      (g.cssHas = ne(function () {
                                          try {
                                              return (
                                                  c.querySelector(
                                                      ":has(*,:jqfake)"
                                                  ),
                                                  !1
                                              );
                                          } catch (e) {
                                              return !0;
                                          }
                                      })),
                                      g.getById
                                          ? ((t.filter.ID = function (e) {
                                                var t = e.replace(X, V);
                                                return function (e) {
                                                    return (
                                                        e.getAttribute("id") ===
                                                        t
                                                    );
                                                };
                                            }),
                                            (t.find.ID = function (e, t) {
                                                if (
                                                    void 0 !==
                                                        t.getElementById &&
                                                    d
                                                ) {
                                                    var n = t.getElementById(e);
                                                    return n ? [n] : [];
                                                }
                                            }))
                                          : ((t.filter.ID = function (e) {
                                                var t = e.replace(X, V);
                                                return function (e) {
                                                    var n =
                                                        void 0 !==
                                                            e.getAttributeNode &&
                                                        e.getAttributeNode(
                                                            "id"
                                                        );
                                                    return n && n.value === t;
                                                };
                                            }),
                                            (t.find.ID = function (e, t) {
                                                if (
                                                    void 0 !==
                                                        t.getElementById &&
                                                    d
                                                ) {
                                                    var n,
                                                        i,
                                                        r,
                                                        o = t.getElementById(e);
                                                    if (o) {
                                                        if (
                                                            (n =
                                                                o.getAttributeNode(
                                                                    "id"
                                                                )) &&
                                                            n.value === e
                                                        )
                                                            return [o];
                                                        for (
                                                            r =
                                                                t.getElementsByName(
                                                                    e
                                                                ),
                                                                i = 0;
                                                            (o = r[i++]);

                                                        )
                                                            if (
                                                                (n =
                                                                    o.getAttributeNode(
                                                                        "id"
                                                                    )) &&
                                                                n.value === e
                                                            )
                                                                return [o];
                                                    }
                                                    return [];
                                                }
                                            })),
                                      (t.find.TAG = function (e, t) {
                                          return void 0 !==
                                              t.getElementsByTagName
                                              ? t.getElementsByTagName(e)
                                              : t.querySelectorAll(e);
                                      }),
                                      (t.find.CLASS = function (e, t) {
                                          if (
                                              void 0 !==
                                                  t.getElementsByClassName &&
                                              d
                                          )
                                              return t.getElementsByClassName(
                                                  e
                                              );
                                      }),
                                      (p = []),
                                      ne(function (e) {
                                          var t;
                                          (u.appendChild(e).innerHTML =
                                              "<a id='" +
                                              y +
                                              "' href='' disabled='disabled'></a><select id='" +
                                              y +
                                              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                                              e.querySelectorAll("[selected]")
                                                  .length ||
                                                  p.push(
                                                      "\\[" +
                                                          D +
                                                          "*(?:value|" +
                                                          C +
                                                          ")"
                                                  ),
                                              e.querySelectorAll(
                                                  "[id~=" + y + "-]"
                                              ).length || p.push("~="),
                                              e.querySelectorAll(
                                                  "a#" + y + "+*"
                                              ).length || p.push(".#.+[+~]"),
                                              e.querySelectorAll(":checked")
                                                  .length || p.push(":checked"),
                                              (t =
                                                  c.createElement(
                                                      "input"
                                                  )).setAttribute(
                                                  "type",
                                                  "hidden"
                                              ),
                                              e
                                                  .appendChild(t)
                                                  .setAttribute("name", "D"),
                                              (u.appendChild(e).disabled = !0),
                                              2 !==
                                                  e.querySelectorAll(
                                                      ":disabled"
                                                  ).length &&
                                                  p.push(
                                                      ":enabled",
                                                      ":disabled"
                                                  ),
                                              (t =
                                                  c.createElement(
                                                      "input"
                                                  )).setAttribute("name", ""),
                                              e.appendChild(t),
                                              e.querySelectorAll("[name='']")
                                                  .length ||
                                                  p.push(
                                                      "\\[" +
                                                          D +
                                                          "*name" +
                                                          D +
                                                          "*=" +
                                                          D +
                                                          "*(?:''|\"\")"
                                                  );
                                      }),
                                      g.cssHas || p.push(":has"),
                                      (p = p.length && new RegExp(p.join("|"))),
                                      (_ = function (e, t) {
                                          if (e === t) return (s = !0), 0;
                                          var n =
                                              !e.compareDocumentPosition -
                                              !t.compareDocumentPosition;
                                          return (
                                              n ||
                                              (1 &
                                                  (n =
                                                      (e.ownerDocument || e) ==
                                                      (t.ownerDocument || t)
                                                          ? e.compareDocumentPosition(
                                                                t
                                                            )
                                                          : 1) ||
                                              (!g.sortDetached &&
                                                  t.compareDocumentPosition(
                                                      e
                                                  ) === n)
                                                  ? e === c ||
                                                    (e.ownerDocument == H &&
                                                        Z.contains(H, e))
                                                      ? -1
                                                      : t === c ||
                                                        (t.ownerDocument == H &&
                                                            Z.contains(H, t))
                                                      ? 1
                                                      : r
                                                      ? l.call(r, e) -
                                                        l.call(r, t)
                                                      : 0
                                                  : 4 & n
                                                  ? -1
                                                  : 1)
                                          );
                                      }),
                                      c)
                                    : c;
                            }
                            for (e in ((Z.matches = function (e, t) {
                                return Z(e, null, null, t);
                            }),
                            (Z.matchesSelector = function (e, t) {
                                if (
                                    (ce(e),
                                    d && !S[t + " "] && (!p || !p.test(t)))
                                )
                                    try {
                                        var n = h.call(e, t);
                                        if (
                                            n ||
                                            g.disconnectedMatch ||
                                            (e.document &&
                                                11 !== e.document.nodeType)
                                        )
                                            return n;
                                    } catch (e) {
                                        S(t, !0);
                                    }
                                return Z(t, c, null, [e]).length > 0;
                            }),
                            (Z.contains = function (e, t) {
                                return (
                                    (e.ownerDocument || e) != c && ce(e),
                                    T.contains(e, t)
                                );
                            }),
                            (Z.attr = function (e, n) {
                                (e.ownerDocument || e) != c && ce(e);
                                var i = t.attrHandle[n.toLowerCase()],
                                    r =
                                        i &&
                                        f.call(t.attrHandle, n.toLowerCase())
                                            ? i(e, n, !d)
                                            : void 0;
                                return void 0 !== r ? r : e.getAttribute(n);
                            }),
                            (Z.error = function (e) {
                                throw new Error(
                                    "Syntax error, unrecognized expression: " +
                                        e
                                );
                            }),
                            (T.uniqueSort = function (e) {
                                var t,
                                    n = [],
                                    i = 0,
                                    o = 0;
                                if (
                                    ((s = !g.sortStable),
                                    (r = !g.sortStable && a.call(e, 0)),
                                    q.call(e, _),
                                    s)
                                ) {
                                    for (; (t = e[o++]); )
                                        t === e[o] && (i = n.push(o));
                                    for (; i--; ) A.call(e, n[i], 1);
                                }
                                return (r = null), e;
                            }),
                            (T.fn.uniqueSort = function () {
                                return this.pushStack(
                                    T.uniqueSort(a.apply(this))
                                );
                            }),
                            (t = T.expr =
                                {
                                    cacheLength: 50,
                                    createPseudo: te,
                                    match: F,
                                    attrHandle: {},
                                    find: {},
                                    relative: {
                                        ">": { dir: "parentNode", first: !0 },
                                        " ": { dir: "parentNode" },
                                        "+": {
                                            dir: "previousSibling",
                                            first: !0,
                                        },
                                        "~": { dir: "previousSibling" },
                                    },
                                    preFilter: {
                                        ATTR: function (e) {
                                            return (
                                                (e[1] = e[1].replace(X, V)),
                                                (e[3] = (
                                                    e[3] ||
                                                    e[4] ||
                                                    e[5] ||
                                                    ""
                                                ).replace(X, V)),
                                                "~=" === e[2] &&
                                                    (e[3] = " " + e[3] + " "),
                                                e.slice(0, 4)
                                            );
                                        },
                                        CHILD: function (e) {
                                            return (
                                                (e[1] = e[1].toLowerCase()),
                                                "nth" === e[1].slice(0, 3)
                                                    ? (e[3] || Z.error(e[0]),
                                                      (e[4] = +(e[4]
                                                          ? e[5] + (e[6] || 1)
                                                          : 2 *
                                                            ("even" === e[3] ||
                                                                "odd" ===
                                                                    e[3]))),
                                                      (e[5] = +(
                                                          e[7] + e[8] ||
                                                          "odd" === e[3]
                                                      )))
                                                    : e[3] && Z.error(e[0]),
                                                e
                                            );
                                        },
                                        PSEUDO: function (e) {
                                            var t,
                                                n = !e[6] && e[2];
                                            return F.CHILD.test(e[0])
                                                ? null
                                                : (e[3]
                                                      ? (e[2] =
                                                            e[4] || e[5] || "")
                                                      : n &&
                                                        z.test(n) &&
                                                        (t = le(n, !0)) &&
                                                        (t =
                                                            n.indexOf(
                                                                ")",
                                                                n.length - t
                                                            ) - n.length) &&
                                                        ((e[0] = e[0].slice(
                                                            0,
                                                            t
                                                        )),
                                                        (e[2] = n.slice(0, t))),
                                                  e.slice(0, 3));
                                        },
                                    },
                                    filter: {
                                        TAG: function (e) {
                                            var t = e
                                                .replace(X, V)
                                                .toLowerCase();
                                            return "*" === e
                                                ? function () {
                                                      return !0;
                                                  }
                                                : function (e) {
                                                      return k(e, t);
                                                  };
                                        },
                                        CLASS: function (e) {
                                            var t = b[e + " "];
                                            return (
                                                t ||
                                                ((t = new RegExp(
                                                    "(^|" +
                                                        D +
                                                        ")" +
                                                        e +
                                                        "(" +
                                                        D +
                                                        "|$)"
                                                )) &&
                                                    b(e, function (e) {
                                                        return t.test(
                                                            ("string" ==
                                                                typeof e.className &&
                                                                e.className) ||
                                                                (void 0 !==
                                                                    e.getAttribute &&
                                                                    e.getAttribute(
                                                                        "class"
                                                                    )) ||
                                                                ""
                                                        );
                                                    }))
                                            );
                                        },
                                        ATTR: function (e, t, n) {
                                            return function (i) {
                                                var r = Z.attr(i, e);
                                                return null == r
                                                    ? "!=" === t
                                                    : !t ||
                                                          ((r += ""),
                                                          "=" === t
                                                              ? r === n
                                                              : "!=" === t
                                                              ? r !== n
                                                              : "^=" === t
                                                              ? n &&
                                                                0 ===
                                                                    r.indexOf(n)
                                                              : "*=" === t
                                                              ? n &&
                                                                r.indexOf(n) >
                                                                    -1
                                                              : "$=" === t
                                                              ? n &&
                                                                r.slice(
                                                                    -n.length
                                                                ) === n
                                                              : "~=" === t
                                                              ? (
                                                                    " " +
                                                                    r.replace(
                                                                        R,
                                                                        " "
                                                                    ) +
                                                                    " "
                                                                ).indexOf(n) >
                                                                -1
                                                              : "|=" === t &&
                                                                (r === n ||
                                                                    r.slice(
                                                                        0,
                                                                        n.length +
                                                                            1
                                                                    ) ===
                                                                        n +
                                                                            "-"));
                                            };
                                        },
                                        CHILD: function (e, t, n, i, r) {
                                            var o = "nth" !== e.slice(0, 3),
                                                s = "last" !== e.slice(-4),
                                                a = "of-type" === t;
                                            return 1 === i && 0 === r
                                                ? function (e) {
                                                      return !!e.parentNode;
                                                  }
                                                : function (t, n, c) {
                                                      var u,
                                                          l,
                                                          d,
                                                          p,
                                                          f,
                                                          h =
                                                              o !== s
                                                                  ? "nextSibling"
                                                                  : "previousSibling",
                                                          m = t.parentNode,
                                                          g =
                                                              a &&
                                                              t.nodeName.toLowerCase(),
                                                          x = !c && !a,
                                                          b = !1;
                                                      if (m) {
                                                          if (o) {
                                                              for (; h; ) {
                                                                  for (
                                                                      d = t;
                                                                      (d =
                                                                          d[h]);

                                                                  )
                                                                      if (
                                                                          a
                                                                              ? k(
                                                                                    d,
                                                                                    g
                                                                                )
                                                                              : 1 ===
                                                                                d.nodeType
                                                                      )
                                                                          return !1;
                                                                  f = h =
                                                                      "only" ===
                                                                          e &&
                                                                      !f &&
                                                                      "nextSibling";
                                                              }
                                                              return !0;
                                                          }
                                                          if (
                                                              ((f = [
                                                                  s
                                                                      ? m.firstChild
                                                                      : m.lastChild,
                                                              ]),
                                                              s && x)
                                                          ) {
                                                              for (
                                                                  b =
                                                                      (p =
                                                                          (u =
                                                                              (l =
                                                                                  m[
                                                                                      y
                                                                                  ] ||
                                                                                  (m[
                                                                                      y
                                                                                  ] =
                                                                                      {}))[
                                                                                  e
                                                                              ] ||
                                                                              [])[0] ===
                                                                              v &&
                                                                          u[1]) &&
                                                                      u[2],
                                                                      d =
                                                                          p &&
                                                                          m
                                                                              .childNodes[
                                                                              p
                                                                          ];
                                                                  (d =
                                                                      (++p &&
                                                                          d &&
                                                                          d[
                                                                              h
                                                                          ]) ||
                                                                      (b = p =
                                                                          0) ||
                                                                      f.pop());

                                                              )
                                                                  if (
                                                                      1 ===
                                                                          d.nodeType &&
                                                                      ++b &&
                                                                      d === t
                                                                  ) {
                                                                      l[e] = [
                                                                          v,
                                                                          p,
                                                                          b,
                                                                      ];
                                                                      break;
                                                                  }
                                                          } else if (
                                                              (x &&
                                                                  (b = p =
                                                                      (u =
                                                                          (l =
                                                                              t[
                                                                                  y
                                                                              ] ||
                                                                              (t[
                                                                                  y
                                                                              ] =
                                                                                  {}))[
                                                                              e
                                                                          ] ||
                                                                          [])[0] ===
                                                                          v &&
                                                                      u[1]),
                                                              !1 === b)
                                                          )
                                                              for (
                                                                  ;
                                                                  (d =
                                                                      (++p &&
                                                                          d &&
                                                                          d[
                                                                              h
                                                                          ]) ||
                                                                      (b = p =
                                                                          0) ||
                                                                      f.pop()) &&
                                                                  (!(a
                                                                      ? k(d, g)
                                                                      : 1 ===
                                                                        d.nodeType) ||
                                                                      !++b ||
                                                                      (x &&
                                                                          ((l =
                                                                              d[
                                                                                  y
                                                                              ] ||
                                                                              (d[
                                                                                  y
                                                                              ] =
                                                                                  {}))[
                                                                              e
                                                                          ] = [
                                                                              v,
                                                                              b,
                                                                          ]),
                                                                      d !== t));

                                                              );
                                                          return (
                                                              (b -= r) === i ||
                                                              (b % i == 0 &&
                                                                  b / i >= 0)
                                                          );
                                                      }
                                                  };
                                        },
                                        PSEUDO: function (e, n) {
                                            var i,
                                                r =
                                                    t.pseudos[e] ||
                                                    t.setFilters[
                                                        e.toLowerCase()
                                                    ] ||
                                                    Z.error(
                                                        "unsupported pseudo: " +
                                                            e
                                                    );
                                            return r[y]
                                                ? r(n)
                                                : r.length > 1
                                                ? ((i = [e, e, "", n]),
                                                  t.setFilters.hasOwnProperty(
                                                      e.toLowerCase()
                                                  )
                                                      ? te(function (e, t) {
                                                            for (
                                                                var i,
                                                                    o = r(e, n),
                                                                    s =
                                                                        o.length;
                                                                s--;

                                                            )
                                                                e[
                                                                    (i = l.call(
                                                                        e,
                                                                        o[s]
                                                                    ))
                                                                ] = !(t[i] =
                                                                    o[s]);
                                                        })
                                                      : function (e) {
                                                            return r(e, 0, i);
                                                        })
                                                : r;
                                        },
                                    },
                                    pseudos: {
                                        not: te(function (e) {
                                            var t = [],
                                                n = [],
                                                i = ye(e.replace(N, "$1"));
                                            return i[y]
                                                ? te(function (e, t, n, r) {
                                                      for (
                                                          var o,
                                                              s = i(
                                                                  e,
                                                                  null,
                                                                  r,
                                                                  []
                                                              ),
                                                              a = e.length;
                                                          a--;

                                                      )
                                                          (o = s[a]) &&
                                                              (e[a] = !(t[a] =
                                                                  o));
                                                  })
                                                : function (e, r, o) {
                                                      return (
                                                          (t[0] = e),
                                                          i(t, null, o, n),
                                                          (t[0] = null),
                                                          !n.pop()
                                                      );
                                                  };
                                        }),
                                        has: te(function (e) {
                                            return function (t) {
                                                return Z(e, t).length > 0;
                                            };
                                        }),
                                        contains: te(function (e) {
                                            return (
                                                (e = e.replace(X, V)),
                                                function (t) {
                                                    return (
                                                        (
                                                            t.textContent ||
                                                            T.text(t)
                                                        ).indexOf(e) > -1
                                                    );
                                                }
                                            );
                                        }),
                                        lang: te(function (e) {
                                            return (
                                                B.test(e || "") ||
                                                    Z.error(
                                                        "unsupported lang: " + e
                                                    ),
                                                (e = e
                                                    .replace(X, V)
                                                    .toLowerCase()),
                                                function (t) {
                                                    var n;
                                                    do {
                                                        if (
                                                            (n = d
                                                                ? t.lang
                                                                : t.getAttribute(
                                                                      "xml:lang"
                                                                  ) ||
                                                                  t.getAttribute(
                                                                      "lang"
                                                                  ))
                                                        )
                                                            return (
                                                                (n =
                                                                    n.toLowerCase()) ===
                                                                    e ||
                                                                0 ===
                                                                    n.indexOf(
                                                                        e + "-"
                                                                    )
                                                            );
                                                    } while (
                                                        (t = t.parentNode) &&
                                                        1 === t.nodeType
                                                    );
                                                    return !1;
                                                }
                                            );
                                        }),
                                        target: function (e) {
                                            var t =
                                                i.location && i.location.hash;
                                            return t && t.slice(1) === e.id;
                                        },
                                        root: function (e) {
                                            return e === u;
                                        },
                                        focus: function (e) {
                                            return (
                                                e ===
                                                    (function () {
                                                        try {
                                                            return c.activeElement;
                                                        } catch (e) {}
                                                    })() &&
                                                c.hasFocus() &&
                                                !!(
                                                    e.type ||
                                                    e.href ||
                                                    ~e.tabIndex
                                                )
                                            );
                                        },
                                        enabled: oe(!1),
                                        disabled: oe(!0),
                                        checked: function (e) {
                                            return (
                                                (k(e, "input") &&
                                                    !!e.checked) ||
                                                (k(e, "option") && !!e.selected)
                                            );
                                        },
                                        selected: function (e) {
                                            return (
                                                e.parentNode &&
                                                    e.parentNode.selectedIndex,
                                                !0 === e.selected
                                            );
                                        },
                                        empty: function (e) {
                                            for (
                                                e = e.firstChild;
                                                e;
                                                e = e.nextSibling
                                            )
                                                if (e.nodeType < 6) return !1;
                                            return !0;
                                        },
                                        parent: function (e) {
                                            return !t.pseudos.empty(e);
                                        },
                                        header: function (e) {
                                            return Q.test(e.nodeName);
                                        },
                                        input: function (e) {
                                            return G.test(e.nodeName);
                                        },
                                        button: function (e) {
                                            return (
                                                (k(e, "input") &&
                                                    "button" === e.type) ||
                                                k(e, "button")
                                            );
                                        },
                                        text: function (e) {
                                            var t;
                                            return (
                                                k(e, "input") &&
                                                "text" === e.type &&
                                                (null ==
                                                    (t =
                                                        e.getAttribute(
                                                            "type"
                                                        )) ||
                                                    "text" === t.toLowerCase())
                                            );
                                        },
                                        first: se(function () {
                                            return [0];
                                        }),
                                        last: se(function (e, t) {
                                            return [t - 1];
                                        }),
                                        eq: se(function (e, t, n) {
                                            return [n < 0 ? n + t : n];
                                        }),
                                        even: se(function (e, t) {
                                            for (var n = 0; n < t; n += 2)
                                                e.push(n);
                                            return e;
                                        }),
                                        odd: se(function (e, t) {
                                            for (var n = 1; n < t; n += 2)
                                                e.push(n);
                                            return e;
                                        }),
                                        lt: se(function (e, t, n) {
                                            var i;
                                            for (
                                                i =
                                                    n < 0
                                                        ? n + t
                                                        : n > t
                                                        ? t
                                                        : n;
                                                --i >= 0;

                                            )
                                                e.push(i);
                                            return e;
                                        }),
                                        gt: se(function (e, t, n) {
                                            for (
                                                var i = n < 0 ? n + t : n;
                                                ++i < t;

                                            )
                                                e.push(i);
                                            return e;
                                        }),
                                    },
                                }),
                            (t.pseudos.nth = t.pseudos.eq),
                            {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0,
                            }))
                                t.pseudos[e] = ie(e);
                            for (e in { submit: !0, reset: !0 })
                                t.pseudos[e] = re(e);
                            function ue() {}
                            function le(e, n) {
                                var i,
                                    r,
                                    o,
                                    s,
                                    a,
                                    c,
                                    u,
                                    l = w[e + " "];
                                if (l) return n ? 0 : l.slice(0);
                                for (a = e, c = [], u = t.preFilter; a; ) {
                                    for (s in ((i && !(r = P.exec(a))) ||
                                        (r && (a = a.slice(r[0].length) || a),
                                        c.push((o = []))),
                                    (i = !1),
                                    (r = W.exec(a)) &&
                                        ((i = r.shift()),
                                        o.push({
                                            value: i,
                                            type: r[0].replace(N, " "),
                                        }),
                                        (a = a.slice(i.length))),
                                    t.filter))
                                        !(r = F[s].exec(a)) ||
                                            (u[s] && !(r = u[s](r))) ||
                                            ((i = r.shift()),
                                            o.push({
                                                value: i,
                                                type: s,
                                                matches: r,
                                            }),
                                            (a = a.slice(i.length)));
                                    if (!i) break;
                                }
                                return n
                                    ? a.length
                                    : a
                                    ? Z.error(e)
                                    : w(e, c).slice(0);
                            }
                            function de(e) {
                                for (
                                    var t = 0, n = e.length, i = "";
                                    t < n;
                                    t++
                                )
                                    i += e[t].value;
                                return i;
                            }
                            function pe(e, t, n) {
                                var i = t.dir,
                                    r = t.next,
                                    o = r || i,
                                    s = n && "parentNode" === o,
                                    a = x++;
                                return t.first
                                    ? function (t, n, r) {
                                          for (; (t = t[i]); )
                                              if (1 === t.nodeType || s)
                                                  return e(t, n, r);
                                          return !1;
                                      }
                                    : function (t, n, c) {
                                          var u,
                                              l,
                                              d = [v, a];
                                          if (c) {
                                              for (; (t = t[i]); )
                                                  if (
                                                      (1 === t.nodeType || s) &&
                                                      e(t, n, c)
                                                  )
                                                      return !0;
                                          } else
                                              for (; (t = t[i]); )
                                                  if (1 === t.nodeType || s)
                                                      if (
                                                          ((l =
                                                              t[y] ||
                                                              (t[y] = {})),
                                                          r && k(t, r))
                                                      )
                                                          t = t[i] || t;
                                                      else {
                                                          if (
                                                              (u = l[o]) &&
                                                              u[0] === v &&
                                                              u[1] === a
                                                          )
                                                              return (d[2] =
                                                                  u[2]);
                                                          if (
                                                              ((l[o] = d),
                                                              (d[2] = e(
                                                                  t,
                                                                  n,
                                                                  c
                                                              )))
                                                          )
                                                              return !0;
                                                      }
                                          return !1;
                                      };
                            }
                            function fe(e) {
                                return e.length > 1
                                    ? function (t, n, i) {
                                          for (var r = e.length; r--; )
                                              if (!e[r](t, n, i)) return !1;
                                          return !0;
                                      }
                                    : e[0];
                            }
                            function he(e, t, n, i, r) {
                                for (
                                    var o,
                                        s = [],
                                        a = 0,
                                        c = e.length,
                                        u = null != t;
                                    a < c;
                                    a++
                                )
                                    (o = e[a]) &&
                                        ((n && !n(o, i, r)) ||
                                            (s.push(o), u && t.push(a)));
                                return s;
                            }
                            function me(e, t, n, i, r, o) {
                                return (
                                    i && !i[y] && (i = me(i)),
                                    r && !r[y] && (r = me(r, o)),
                                    te(function (o, s, a, c) {
                                        var u,
                                            d,
                                            p,
                                            f,
                                            h = [],
                                            g = [],
                                            y = s.length,
                                            v =
                                                o ||
                                                (function (e, t, n) {
                                                    for (
                                                        var i = 0, r = t.length;
                                                        i < r;
                                                        i++
                                                    )
                                                        Z(e, t[i], n);
                                                    return n;
                                                })(
                                                    t || "*",
                                                    a.nodeType ? [a] : a,
                                                    []
                                                ),
                                            x =
                                                !e || (!o && t)
                                                    ? v
                                                    : he(v, h, e, a, c);
                                        if (
                                            (n
                                                ? n(
                                                      x,
                                                      (f =
                                                          r || (o ? e : y || i)
                                                              ? []
                                                              : s),
                                                      a,
                                                      c
                                                  )
                                                : (f = x),
                                            i)
                                        )
                                            for (
                                                u = he(f, g),
                                                    i(u, [], a, c),
                                                    d = u.length;
                                                d--;

                                            )
                                                (p = u[d]) &&
                                                    (f[g[d]] = !(x[g[d]] = p));
                                        if (o) {
                                            if (r || e) {
                                                if (r) {
                                                    for (
                                                        u = [], d = f.length;
                                                        d--;

                                                    )
                                                        (p = f[d]) &&
                                                            u.push((x[d] = p));
                                                    r(null, (f = []), u, c);
                                                }
                                                for (d = f.length; d--; )
                                                    (p = f[d]) &&
                                                        (u = r
                                                            ? l.call(o, p)
                                                            : h[d]) > -1 &&
                                                        (o[u] = !(s[u] = p));
                                            }
                                        } else (f = he(f === s ? f.splice(y, f.length) : f)), r ? r(null, s, f, c) : m.apply(s, f);
                                    })
                                );
                            }
                            function ge(e) {
                                for (
                                    var i,
                                        r,
                                        o,
                                        s = e.length,
                                        a = t.relative[e[0].type],
                                        c = a || t.relative[" "],
                                        u = a ? 1 : 0,
                                        d = pe(
                                            function (e) {
                                                return e === i;
                                            },
                                            c,
                                            !0
                                        ),
                                        p = pe(
                                            function (e) {
                                                return l.call(i, e) > -1;
                                            },
                                            c,
                                            !0
                                        ),
                                        f = [
                                            function (e, t, r) {
                                                var o =
                                                    (!a && (r || t != n)) ||
                                                    ((i = t).nodeType
                                                        ? d(e, t, r)
                                                        : p(e, t, r));
                                                return (i = null), o;
                                            },
                                        ];
                                    u < s;
                                    u++
                                )
                                    if ((r = t.relative[e[u].type]))
                                        f = [pe(fe(f), r)];
                                    else {
                                        if (
                                            (r = t.filter[e[u].type].apply(
                                                null,
                                                e[u].matches
                                            ))[y]
                                        ) {
                                            for (
                                                o = ++u;
                                                o < s && !t.relative[e[o].type];
                                                o++
                                            );
                                            return me(
                                                u > 1 && fe(f),
                                                u > 1 &&
                                                    de(
                                                        e
                                                            .slice(0, u - 1)
                                                            .concat({
                                                                value:
                                                                    " " ===
                                                                    e[u - 2]
                                                                        .type
                                                                        ? "*"
                                                                        : "",
                                                            })
                                                    ).replace(N, "$1"),
                                                r,
                                                u < o && ge(e.slice(u, o)),
                                                o < s && ge((e = e.slice(o))),
                                                o < s && de(e)
                                            );
                                        }
                                        f.push(r);
                                    }
                                return fe(f);
                            }
                            function ye(e, i) {
                                var r,
                                    o = [],
                                    s = [],
                                    a = E[e + " "];
                                if (!a) {
                                    for (i || (i = le(e)), r = i.length; r--; )
                                        (a = ge(i[r]))[y]
                                            ? o.push(a)
                                            : s.push(a);
                                    (a = E(
                                        e,
                                        (function (e, i) {
                                            var r = i.length > 0,
                                                o = e.length > 0,
                                                s = function (s, a, u, l, p) {
                                                    var f,
                                                        h,
                                                        g,
                                                        y = 0,
                                                        x = "0",
                                                        b = s && [],
                                                        w = [],
                                                        E = n,
                                                        S =
                                                            s ||
                                                            (o &&
                                                                t.find.TAG(
                                                                    "*",
                                                                    p
                                                                )),
                                                        _ = (v +=
                                                            null == E
                                                                ? 1
                                                                : Math.random() ||
                                                                  0.1),
                                                        C = S.length;
                                                    for (
                                                        p &&
                                                        (n = a == c || a || p);
                                                        x !== C &&
                                                        null != (f = S[x]);
                                                        x++
                                                    ) {
                                                        if (o && f) {
                                                            for (
                                                                h = 0,
                                                                    a ||
                                                                        f.ownerDocument ==
                                                                            c ||
                                                                        (ce(f),
                                                                        (u =
                                                                            !d));
                                                                (g = e[h++]);

                                                            )
                                                                if (
                                                                    g(
                                                                        f,
                                                                        a || c,
                                                                        u
                                                                    )
                                                                ) {
                                                                    m.call(
                                                                        l,
                                                                        f
                                                                    );
                                                                    break;
                                                                }
                                                            p && (v = _);
                                                        }
                                                        r &&
                                                            ((f = !g && f) &&
                                                                y--,
                                                            s && b.push(f));
                                                    }
                                                    if (
                                                        ((y += x), r && x !== y)
                                                    ) {
                                                        for (
                                                            h = 0;
                                                            (g = i[h++]);

                                                        )
                                                            g(b, w, a, u);
                                                        if (s) {
                                                            if (y > 0)
                                                                for (; x--; )
                                                                    b[x] ||
                                                                        w[x] ||
                                                                        (w[x] =
                                                                            L.call(
                                                                                l
                                                                            ));
                                                            w = he(w);
                                                        }
                                                        m.apply(l, w),
                                                            p &&
                                                                !s &&
                                                                w.length > 0 &&
                                                                y + i.length >
                                                                    1 &&
                                                                T.uniqueSort(l);
                                                    }
                                                    return (
                                                        p && ((v = _), (n = E)),
                                                        b
                                                    );
                                                };
                                            return r ? te(s) : s;
                                        })(s, o)
                                    )),
                                        (a.selector = e);
                                }
                                return a;
                            }
                            function ve(e, n, i, r) {
                                var o,
                                    s,
                                    a,
                                    c,
                                    u,
                                    l = "function" == typeof e && e,
                                    p = !r && le((e = l.selector || e));
                                if (((i = i || []), 1 === p.length)) {
                                    if (
                                        (s = p[0] = p[0].slice(0)).length > 2 &&
                                        "ID" === (a = s[0]).type &&
                                        9 === n.nodeType &&
                                        d &&
                                        t.relative[s[1].type]
                                    ) {
                                        if (
                                            !(n = (t.find.ID(
                                                a.matches[0].replace(X, V),
                                                n
                                            ) || [])[0])
                                        )
                                            return i;
                                        l && (n = n.parentNode),
                                            (e = e.slice(
                                                s.shift().value.length
                                            ));
                                    }
                                    for (
                                        o = F.needsContext.test(e)
                                            ? 0
                                            : s.length;
                                        o-- &&
                                        ((a = s[o]), !t.relative[(c = a.type)]);

                                    )
                                        if (
                                            (u = t.find[c]) &&
                                            (r = u(
                                                a.matches[0].replace(X, V),
                                                (U.test(s[0].type) &&
                                                    ae(n.parentNode)) ||
                                                    n
                                            ))
                                        ) {
                                            if (
                                                (s.splice(o, 1),
                                                !(e = r.length && de(s)))
                                            )
                                                return m.apply(i, r), i;
                                            break;
                                        }
                                }
                                return (
                                    (l || ye(e, p))(
                                        r,
                                        n,
                                        !d,
                                        i,
                                        !n ||
                                            (U.test(e) && ae(n.parentNode)) ||
                                            n
                                    ),
                                    i
                                );
                            }
                            (ue.prototype = t.filters = t.pseudos),
                                (t.setFilters = new ue()),
                                (g.sortStable =
                                    y.split("").sort(_).join("") === y),
                                ce(),
                                (g.sortDetached = ne(function (e) {
                                    return (
                                        1 &
                                        e.compareDocumentPosition(
                                            c.createElement("fieldset")
                                        )
                                    );
                                })),
                                (T.find = Z),
                                (T.expr[":"] = T.expr.pseudos),
                                (T.unique = T.uniqueSort),
                                (Z.compile = ye),
                                (Z.select = ve),
                                (Z.setDocument = ce),
                                (Z.tokenize = le),
                                (Z.escape = T.escapeSelector),
                                (Z.getText = T.text),
                                (Z.isXML = T.isXMLDoc),
                                (Z.selectors = T.expr),
                                (Z.support = T.support),
                                (Z.uniqueSort = T.uniqueSort);
                        })();
                        var M = function (e, t, n) {
                                for (
                                    var i = [], r = void 0 !== n;
                                    (e = e[t]) && 9 !== e.nodeType;

                                )
                                    if (1 === e.nodeType) {
                                        if (r && T(e).is(n)) break;
                                        i.push(e);
                                    }
                                return i;
                            },
                            R = function (e, t) {
                                for (var n = []; e; e = e.nextSibling)
                                    1 === e.nodeType && e !== t && n.push(e);
                                return n;
                            },
                            P = T.expr.match.needsContext,
                            W =
                                /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                        function $(e, t, n) {
                            return y(t)
                                ? T.grep(e, function (e, i) {
                                      return !!t.call(e, i, e) !== n;
                                  })
                                : t.nodeType
                                ? T.grep(e, function (e) {
                                      return (e === t) !== n;
                                  })
                                : "string" != typeof t
                                ? T.grep(e, function (e) {
                                      return l.call(t, e) > -1 !== n;
                                  })
                                : T.filter(t, e, n);
                        }
                        (T.filter = function (e, t, n) {
                            var i = t[0];
                            return (
                                n && (e = ":not(" + e + ")"),
                                1 === t.length && 1 === i.nodeType
                                    ? T.find.matchesSelector(i, e)
                                        ? [i]
                                        : []
                                    : T.find.matches(
                                          e,
                                          T.grep(t, function (e) {
                                              return 1 === e.nodeType;
                                          })
                                      )
                            );
                        }),
                            T.fn.extend({
                                find: function (e) {
                                    var t,
                                        n,
                                        i = this.length,
                                        r = this;
                                    if ("string" != typeof e)
                                        return this.pushStack(
                                            T(e).filter(function () {
                                                for (t = 0; t < i; t++)
                                                    if (T.contains(r[t], this))
                                                        return !0;
                                            })
                                        );
                                    for (
                                        n = this.pushStack([]), t = 0;
                                        t < i;
                                        t++
                                    )
                                        T.find(e, r[t], n);
                                    return i > 1 ? T.uniqueSort(n) : n;
                                },
                                filter: function (e) {
                                    return this.pushStack($(this, e || [], !1));
                                },
                                not: function (e) {
                                    return this.pushStack($(this, e || [], !0));
                                },
                                is: function (e) {
                                    return !!$(
                                        this,
                                        "string" == typeof e && P.test(e)
                                            ? T(e)
                                            : e || [],
                                        !1
                                    ).length;
                                },
                            });
                        var z,
                            B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                        ((T.fn.init = function (e, t, n) {
                            var i, r;
                            if (!e) return this;
                            if (((n = n || z), "string" == typeof e)) {
                                if (
                                    !(i =
                                        "<" === e[0] &&
                                        ">" === e[e.length - 1] &&
                                        e.length >= 3
                                            ? [null, e, null]
                                            : B.exec(e)) ||
                                    (!i[1] && t)
                                )
                                    return !t || t.jquery
                                        ? (t || n).find(e)
                                        : this.constructor(t).find(e);
                                if (i[1]) {
                                    if (
                                        ((t = t instanceof T ? t[0] : t),
                                        T.merge(
                                            this,
                                            T.parseHTML(
                                                i[1],
                                                t && t.nodeType
                                                    ? t.ownerDocument || t
                                                    : x,
                                                !0
                                            )
                                        ),
                                        W.test(i[1]) && T.isPlainObject(t))
                                    )
                                        for (i in t)
                                            y(this[i])
                                                ? this[i](t[i])
                                                : this.attr(i, t[i]);
                                    return this;
                                }
                                return (
                                    (r = x.getElementById(i[2])) &&
                                        ((this[0] = r), (this.length = 1)),
                                    this
                                );
                            }
                            return e.nodeType
                                ? ((this[0] = e), (this.length = 1), this)
                                : y(e)
                                ? void 0 !== n.ready
                                    ? n.ready(e)
                                    : e(T)
                                : T.makeArray(e, this);
                        }).prototype = T.fn),
                            (z = T(x));
                        var F = /^(?:parents|prev(?:Until|All))/,
                            G = {
                                children: !0,
                                contents: !0,
                                next: !0,
                                prev: !0,
                            };
                        function Q(e, t) {
                            for (; (e = e[t]) && 1 !== e.nodeType; );
                            return e;
                        }
                        T.fn.extend({
                            has: function (e) {
                                var t = T(e, this),
                                    n = t.length;
                                return this.filter(function () {
                                    for (var e = 0; e < n; e++)
                                        if (T.contains(this, t[e])) return !0;
                                });
                            },
                            closest: function (e, t) {
                                var n,
                                    i = 0,
                                    r = this.length,
                                    o = [],
                                    s = "string" != typeof e && T(e);
                                if (!P.test(e))
                                    for (; i < r; i++)
                                        for (
                                            n = this[i];
                                            n && n !== t;
                                            n = n.parentNode
                                        )
                                            if (
                                                n.nodeType < 11 &&
                                                (s
                                                    ? s.index(n) > -1
                                                    : 1 === n.nodeType &&
                                                      T.find.matchesSelector(
                                                          n,
                                                          e
                                                      ))
                                            ) {
                                                o.push(n);
                                                break;
                                            }
                                return this.pushStack(
                                    o.length > 1 ? T.uniqueSort(o) : o
                                );
                            },
                            index: function (e) {
                                return e
                                    ? "string" == typeof e
                                        ? l.call(T(e), this[0])
                                        : l.call(this, e.jquery ? e[0] : e)
                                    : this[0] && this[0].parentNode
                                    ? this.first().prevAll().length
                                    : -1;
                            },
                            add: function (e, t) {
                                return this.pushStack(
                                    T.uniqueSort(T.merge(this.get(), T(e, t)))
                                );
                            },
                            addBack: function (e) {
                                return this.add(
                                    null == e
                                        ? this.prevObject
                                        : this.prevObject.filter(e)
                                );
                            },
                        }),
                            T.each(
                                {
                                    parent: function (e) {
                                        var t = e.parentNode;
                                        return t && 11 !== t.nodeType
                                            ? t
                                            : null;
                                    },
                                    parents: function (e) {
                                        return M(e, "parentNode");
                                    },
                                    parentsUntil: function (e, t, n) {
                                        return M(e, "parentNode", n);
                                    },
                                    next: function (e) {
                                        return Q(e, "nextSibling");
                                    },
                                    prev: function (e) {
                                        return Q(e, "previousSibling");
                                    },
                                    nextAll: function (e) {
                                        return M(e, "nextSibling");
                                    },
                                    prevAll: function (e) {
                                        return M(e, "previousSibling");
                                    },
                                    nextUntil: function (e, t, n) {
                                        return M(e, "nextSibling", n);
                                    },
                                    prevUntil: function (e, t, n) {
                                        return M(e, "previousSibling", n);
                                    },
                                    siblings: function (e) {
                                        return R(
                                            (e.parentNode || {}).firstChild,
                                            e
                                        );
                                    },
                                    children: function (e) {
                                        return R(e.firstChild);
                                    },
                                    contents: function (e) {
                                        return null != e.contentDocument &&
                                            s(e.contentDocument)
                                            ? e.contentDocument
                                            : (k(e, "template") &&
                                                  (e = e.content || e),
                                              T.merge([], e.childNodes));
                                    },
                                },
                                function (e, t) {
                                    T.fn[e] = function (n, i) {
                                        var r = T.map(this, t, n);
                                        return (
                                            "Until" !== e.slice(-5) && (i = n),
                                            i &&
                                                "string" == typeof i &&
                                                (r = T.filter(i, r)),
                                            this.length > 1 &&
                                                (G[e] || T.uniqueSort(r),
                                                F.test(e) && r.reverse()),
                                            this.pushStack(r)
                                        );
                                    };
                                }
                            );
                        var Y = /[^\x20\t\r\n\f]+/g;
                        function U(e) {
                            return e;
                        }
                        function X(e) {
                            throw e;
                        }
                        function V(e, t, n, i) {
                            var r;
                            try {
                                e && y((r = e.promise))
                                    ? r.call(e).done(t).fail(n)
                                    : e && y((r = e.then))
                                    ? r.call(e, t, n)
                                    : t.apply(void 0, [e].slice(i));
                            } catch (e) {
                                n.apply(void 0, [e]);
                            }
                        }
                        (T.Callbacks = function (e) {
                            e =
                                "string" == typeof e
                                    ? (function (e) {
                                          var t = {};
                                          return (
                                              T.each(
                                                  e.match(Y) || [],
                                                  function (e, n) {
                                                      t[n] = !0;
                                                  }
                                              ),
                                              t
                                          );
                                      })(e)
                                    : T.extend({}, e);
                            var t,
                                n,
                                i,
                                r,
                                o = [],
                                s = [],
                                a = -1,
                                c = function () {
                                    for (
                                        r = r || e.once, i = t = !0;
                                        s.length;
                                        a = -1
                                    )
                                        for (n = s.shift(); ++a < o.length; )
                                            !1 === o[a].apply(n[0], n[1]) &&
                                                e.stopOnFalse &&
                                                ((a = o.length), (n = !1));
                                    e.memory || (n = !1),
                                        (t = !1),
                                        r && (o = n ? [] : "");
                                },
                                u = {
                                    add: function () {
                                        return (
                                            o &&
                                                (n &&
                                                    !t &&
                                                    ((a = o.length - 1),
                                                    s.push(n)),
                                                (function t(n) {
                                                    T.each(n, function (n, i) {
                                                        y(i)
                                                            ? (e.unique &&
                                                                  u.has(i)) ||
                                                              o.push(i)
                                                            : i &&
                                                              i.length &&
                                                              "string" !==
                                                                  E(i) &&
                                                              t(i);
                                                    });
                                                })(arguments),
                                                n && !t && c()),
                                            this
                                        );
                                    },
                                    remove: function () {
                                        return (
                                            T.each(arguments, function (e, t) {
                                                for (
                                                    var n;
                                                    (n = T.inArray(t, o, n)) >
                                                    -1;

                                                )
                                                    o.splice(n, 1),
                                                        n <= a && a--;
                                            }),
                                            this
                                        );
                                    },
                                    has: function (e) {
                                        return e
                                            ? T.inArray(e, o) > -1
                                            : o.length > 0;
                                    },
                                    empty: function () {
                                        return o && (o = []), this;
                                    },
                                    disable: function () {
                                        return (r = s = []), (o = n = ""), this;
                                    },
                                    disabled: function () {
                                        return !o;
                                    },
                                    lock: function () {
                                        return (
                                            (r = s = []),
                                            n || t || (o = n = ""),
                                            this
                                        );
                                    },
                                    locked: function () {
                                        return !!r;
                                    },
                                    fireWith: function (e, n) {
                                        return (
                                            r ||
                                                ((n = [
                                                    e,
                                                    (n = n || []).slice
                                                        ? n.slice()
                                                        : n,
                                                ]),
                                                s.push(n),
                                                t || c()),
                                            this
                                        );
                                    },
                                    fire: function () {
                                        return (
                                            u.fireWith(this, arguments), this
                                        );
                                    },
                                    fired: function () {
                                        return !!i;
                                    },
                                };
                            return u;
                        }),
                            T.extend({
                                Deferred: function (e) {
                                    var t = [
                                            [
                                                "notify",
                                                "progress",
                                                T.Callbacks("memory"),
                                                T.Callbacks("memory"),
                                                2,
                                            ],
                                            [
                                                "resolve",
                                                "done",
                                                T.Callbacks("once memory"),
                                                T.Callbacks("once memory"),
                                                0,
                                                "resolved",
                                            ],
                                            [
                                                "reject",
                                                "fail",
                                                T.Callbacks("once memory"),
                                                T.Callbacks("once memory"),
                                                1,
                                                "rejected",
                                            ],
                                        ],
                                        n = "pending",
                                        r = {
                                            state: function () {
                                                return n;
                                            },
                                            always: function () {
                                                return (
                                                    o
                                                        .done(arguments)
                                                        .fail(arguments),
                                                    this
                                                );
                                            },
                                            catch: function (e) {
                                                return r.then(null, e);
                                            },
                                            pipe: function () {
                                                var e = arguments;
                                                return T.Deferred(function (n) {
                                                    T.each(t, function (t, i) {
                                                        var r =
                                                            y(e[i[4]]) &&
                                                            e[i[4]];
                                                        o[i[1]](function () {
                                                            var e =
                                                                r &&
                                                                r.apply(
                                                                    this,
                                                                    arguments
                                                                );
                                                            e && y(e.promise)
                                                                ? e
                                                                      .promise()
                                                                      .progress(
                                                                          n.notify
                                                                      )
                                                                      .done(
                                                                          n.resolve
                                                                      )
                                                                      .fail(
                                                                          n.reject
                                                                      )
                                                                : n[
                                                                      i[0] +
                                                                          "With"
                                                                  ](
                                                                      this,
                                                                      r
                                                                          ? [e]
                                                                          : arguments
                                                                  );
                                                        });
                                                    }),
                                                        (e = null);
                                                }).promise();
                                            },
                                            then: function (e, n, r) {
                                                var o = 0;
                                                function s(e, t, n, r) {
                                                    return function () {
                                                        var a = this,
                                                            c = arguments,
                                                            u = function () {
                                                                var i, u;
                                                                if (!(e < o)) {
                                                                    if (
                                                                        (i =
                                                                            n.apply(
                                                                                a,
                                                                                c
                                                                            )) ===
                                                                        t.promise()
                                                                    )
                                                                        throw new TypeError(
                                                                            "Thenable self-resolution"
                                                                        );
                                                                    (u =
                                                                        i &&
                                                                        ("object" ==
                                                                            typeof i ||
                                                                            "function" ==
                                                                                typeof i) &&
                                                                        i.then),
                                                                        y(u)
                                                                            ? r
                                                                                ? u.call(
                                                                                      i,
                                                                                      s(
                                                                                          o,
                                                                                          t,
                                                                                          U,
                                                                                          r
                                                                                      ),
                                                                                      s(
                                                                                          o,
                                                                                          t,
                                                                                          X,
                                                                                          r
                                                                                      )
                                                                                  )
                                                                                : (o++,
                                                                                  u.call(
                                                                                      i,
                                                                                      s(
                                                                                          o,
                                                                                          t,
                                                                                          U,
                                                                                          r
                                                                                      ),
                                                                                      s(
                                                                                          o,
                                                                                          t,
                                                                                          X,
                                                                                          r
                                                                                      ),
                                                                                      s(
                                                                                          o,
                                                                                          t,
                                                                                          U,
                                                                                          t.notifyWith
                                                                                      )
                                                                                  ))
                                                                            : (n !==
                                                                                  U &&
                                                                                  ((a =
                                                                                      void 0),
                                                                                  (c =
                                                                                      [
                                                                                          i,
                                                                                      ])),
                                                                              (
                                                                                  r ||
                                                                                  t.resolveWith
                                                                              )(
                                                                                  a,
                                                                                  c
                                                                              ));
                                                                }
                                                            },
                                                            l = r
                                                                ? u
                                                                : function () {
                                                                      try {
                                                                          u();
                                                                      } catch (i) {
                                                                          T
                                                                              .Deferred
                                                                              .exceptionHook &&
                                                                              T.Deferred.exceptionHook(
                                                                                  i,
                                                                                  l.error
                                                                              ),
                                                                              e +
                                                                                  1 >=
                                                                                  o &&
                                                                                  (n !==
                                                                                      X &&
                                                                                      ((a =
                                                                                          void 0),
                                                                                      (c =
                                                                                          [
                                                                                              i,
                                                                                          ])),
                                                                                  t.rejectWith(
                                                                                      a,
                                                                                      c
                                                                                  ));
                                                                      }
                                                                  };
                                                        e
                                                            ? l()
                                                            : (T.Deferred
                                                                  .getErrorHook
                                                                  ? (l.error =
                                                                        T.Deferred.getErrorHook())
                                                                  : T.Deferred
                                                                        .getStackHook &&
                                                                    (l.error =
                                                                        T.Deferred.getStackHook()),
                                                              i.setTimeout(l));
                                                    };
                                                }
                                                return T.Deferred(function (i) {
                                                    t[0][3].add(
                                                        s(
                                                            0,
                                                            i,
                                                            y(r) ? r : U,
                                                            i.notifyWith
                                                        )
                                                    ),
                                                        t[1][3].add(
                                                            s(
                                                                0,
                                                                i,
                                                                y(e) ? e : U
                                                            )
                                                        ),
                                                        t[2][3].add(
                                                            s(
                                                                0,
                                                                i,
                                                                y(n) ? n : X
                                                            )
                                                        );
                                                }).promise();
                                            },
                                            promise: function (e) {
                                                return null != e
                                                    ? T.extend(e, r)
                                                    : r;
                                            },
                                        },
                                        o = {};
                                    return (
                                        T.each(t, function (e, i) {
                                            var s = i[2],
                                                a = i[5];
                                            (r[i[1]] = s.add),
                                                a &&
                                                    s.add(
                                                        function () {
                                                            n = a;
                                                        },
                                                        t[3 - e][2].disable,
                                                        t[3 - e][3].disable,
                                                        t[0][2].lock,
                                                        t[0][3].lock
                                                    ),
                                                s.add(i[3].fire),
                                                (o[i[0]] = function () {
                                                    return (
                                                        o[i[0] + "With"](
                                                            this === o
                                                                ? void 0
                                                                : this,
                                                            arguments
                                                        ),
                                                        this
                                                    );
                                                }),
                                                (o[i[0] + "With"] = s.fireWith);
                                        }),
                                        r.promise(o),
                                        e && e.call(o, o),
                                        o
                                    );
                                },
                                when: function (e) {
                                    var t = arguments.length,
                                        n = t,
                                        i = Array(n),
                                        r = a.call(arguments),
                                        o = T.Deferred(),
                                        s = function (e) {
                                            return function (n) {
                                                (i[e] = this),
                                                    (r[e] =
                                                        arguments.length > 1
                                                            ? a.call(arguments)
                                                            : n),
                                                    --t || o.resolveWith(i, r);
                                            };
                                        };
                                    if (
                                        t <= 1 &&
                                        (V(
                                            e,
                                            o.done(s(n)).resolve,
                                            o.reject,
                                            !t
                                        ),
                                        "pending" === o.state() ||
                                            y(r[n] && r[n].then))
                                    )
                                        return o.then();
                                    for (; n--; ) V(r[n], s(n), o.reject);
                                    return o.promise();
                                },
                            });
                        var K =
                            /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                        (T.Deferred.exceptionHook = function (e, t) {
                            i.console &&
                                i.console.warn &&
                                e &&
                                K.test(e.name) &&
                                i.console.warn(
                                    "jQuery.Deferred exception: " + e.message,
                                    e.stack,
                                    t
                                );
                        }),
                            (T.readyException = function (e) {
                                i.setTimeout(function () {
                                    throw e;
                                });
                            });
                        var J = T.Deferred();
                        function Z() {
                            x.removeEventListener("DOMContentLoaded", Z),
                                i.removeEventListener("load", Z),
                                T.ready();
                        }
                        (T.fn.ready = function (e) {
                            return (
                                J.then(e).catch(function (e) {
                                    T.readyException(e);
                                }),
                                this
                            );
                        }),
                            T.extend({
                                isReady: !1,
                                readyWait: 1,
                                ready: function (e) {
                                    (!0 === e ? --T.readyWait : T.isReady) ||
                                        ((T.isReady = !0),
                                        (!0 !== e && --T.readyWait > 0) ||
                                            J.resolveWith(x, [T]));
                                },
                            }),
                            (T.ready.then = J.then),
                            "complete" === x.readyState ||
                            ("loading" !== x.readyState &&
                                !x.documentElement.doScroll)
                                ? i.setTimeout(T.ready)
                                : (x.addEventListener("DOMContentLoaded", Z),
                                  i.addEventListener("load", Z));
                        var ee = function (e, t, n, i, r, o, s) {
                                var a = 0,
                                    c = e.length,
                                    u = null == n;
                                if ("object" === E(n))
                                    for (a in ((r = !0), n))
                                        ee(e, t, a, n[a], !0, o, s);
                                else if (
                                    void 0 !== i &&
                                    ((r = !0),
                                    y(i) || (s = !0),
                                    u &&
                                        (s
                                            ? (t.call(e, i), (t = null))
                                            : ((u = t),
                                              (t = function (e, t, n) {
                                                  return u.call(T(e), n);
                                              }))),
                                    t)
                                )
                                    for (; a < c; a++)
                                        t(
                                            e[a],
                                            n,
                                            s ? i : i.call(e[a], a, t(e[a], n))
                                        );
                                return r
                                    ? e
                                    : u
                                    ? t.call(e)
                                    : c
                                    ? t(e[0], n)
                                    : o;
                            },
                            te = /^-ms-/,
                            ne = /-([a-z])/g;
                        function ie(e, t) {
                            return t.toUpperCase();
                        }
                        function re(e) {
                            return e.replace(te, "ms-").replace(ne, ie);
                        }
                        var oe = function (e) {
                            return (
                                1 === e.nodeType ||
                                9 === e.nodeType ||
                                !+e.nodeType
                            );
                        };
                        function se() {
                            this.expando = T.expando + se.uid++;
                        }
                        (se.uid = 1),
                            (se.prototype = {
                                cache: function (e) {
                                    var t = e[this.expando];
                                    return (
                                        t ||
                                            ((t = {}),
                                            oe(e) &&
                                                (e.nodeType
                                                    ? (e[this.expando] = t)
                                                    : Object.defineProperty(
                                                          e,
                                                          this.expando,
                                                          {
                                                              value: t,
                                                              configurable: !0,
                                                          }
                                                      ))),
                                        t
                                    );
                                },
                                set: function (e, t, n) {
                                    var i,
                                        r = this.cache(e);
                                    if ("string" == typeof t) r[re(t)] = n;
                                    else for (i in t) r[re(i)] = t[i];
                                    return r;
                                },
                                get: function (e, t) {
                                    return void 0 === t
                                        ? this.cache(e)
                                        : e[this.expando] &&
                                              e[this.expando][re(t)];
                                },
                                access: function (e, t, n) {
                                    return void 0 === t ||
                                        (t &&
                                            "string" == typeof t &&
                                            void 0 === n)
                                        ? this.get(e, t)
                                        : (this.set(e, t, n),
                                          void 0 !== n ? n : t);
                                },
                                remove: function (e, t) {
                                    var n,
                                        i = e[this.expando];
                                    if (void 0 !== i) {
                                        if (void 0 !== t) {
                                            n = (t = Array.isArray(t)
                                                ? t.map(re)
                                                : (t = re(t)) in i
                                                ? [t]
                                                : t.match(Y) || []).length;
                                            for (; n--; ) delete i[t[n]];
                                        }
                                        (void 0 === t || T.isEmptyObject(i)) &&
                                            (e.nodeType
                                                ? (e[this.expando] = void 0)
                                                : delete e[this.expando]);
                                    }
                                },
                                hasData: function (e) {
                                    var t = e[this.expando];
                                    return void 0 !== t && !T.isEmptyObject(t);
                                },
                            });
                        var ae = new se(),
                            ce = new se(),
                            ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                            le = /[A-Z]/g;
                        function de(e, t, n) {
                            var i;
                            if (void 0 === n && 1 === e.nodeType)
                                if (
                                    ((i =
                                        "data-" +
                                        t.replace(le, "-$&").toLowerCase()),
                                    "string" == typeof (n = e.getAttribute(i)))
                                ) {
                                    try {
                                        n = (function (e) {
                                            return (
                                                "true" === e ||
                                                ("false" !== e &&
                                                    ("null" === e
                                                        ? null
                                                        : e === +e + ""
                                                        ? +e
                                                        : ue.test(e)
                                                        ? JSON.parse(e)
                                                        : e))
                                            );
                                        })(n);
                                    } catch (e) {}
                                    ce.set(e, t, n);
                                } else n = void 0;
                            return n;
                        }
                        T.extend({
                            hasData: function (e) {
                                return ce.hasData(e) || ae.hasData(e);
                            },
                            data: function (e, t, n) {
                                return ce.access(e, t, n);
                            },
                            removeData: function (e, t) {
                                ce.remove(e, t);
                            },
                            _data: function (e, t, n) {
                                return ae.access(e, t, n);
                            },
                            _removeData: function (e, t) {
                                ae.remove(e, t);
                            },
                        }),
                            T.fn.extend({
                                data: function (e, t) {
                                    var n,
                                        i,
                                        r,
                                        o = this[0],
                                        s = o && o.attributes;
                                    if (void 0 === e) {
                                        if (
                                            this.length &&
                                            ((r = ce.get(o)),
                                            1 === o.nodeType &&
                                                !ae.get(o, "hasDataAttrs"))
                                        ) {
                                            for (n = s.length; n--; )
                                                s[n] &&
                                                    0 ===
                                                        (i = s[n].name).indexOf(
                                                            "data-"
                                                        ) &&
                                                    ((i = re(i.slice(5))),
                                                    de(o, i, r[i]));
                                            ae.set(o, "hasDataAttrs", !0);
                                        }
                                        return r;
                                    }
                                    return "object" == typeof e
                                        ? this.each(function () {
                                              ce.set(this, e);
                                          })
                                        : ee(
                                              this,
                                              function (t) {
                                                  var n;
                                                  if (o && void 0 === t)
                                                      return void 0 !==
                                                          (n = ce.get(o, e)) ||
                                                          void 0 !==
                                                              (n = de(o, e))
                                                          ? n
                                                          : void 0;
                                                  this.each(function () {
                                                      ce.set(this, e, t);
                                                  });
                                              },
                                              null,
                                              t,
                                              arguments.length > 1,
                                              null,
                                              !0
                                          );
                                },
                                removeData: function (e) {
                                    return this.each(function () {
                                        ce.remove(this, e);
                                    });
                                },
                            }),
                            T.extend({
                                queue: function (e, t, n) {
                                    var i;
                                    if (e)
                                        return (
                                            (t = (t || "fx") + "queue"),
                                            (i = ae.get(e, t)),
                                            n &&
                                                (!i || Array.isArray(n)
                                                    ? (i = ae.access(
                                                          e,
                                                          t,
                                                          T.makeArray(n)
                                                      ))
                                                    : i.push(n)),
                                            i || []
                                        );
                                },
                                dequeue: function (e, t) {
                                    t = t || "fx";
                                    var n = T.queue(e, t),
                                        i = n.length,
                                        r = n.shift(),
                                        o = T._queueHooks(e, t);
                                    "inprogress" === r &&
                                        ((r = n.shift()), i--),
                                        r &&
                                            ("fx" === t &&
                                                n.unshift("inprogress"),
                                            delete o.stop,
                                            r.call(
                                                e,
                                                function () {
                                                    T.dequeue(e, t);
                                                },
                                                o
                                            )),
                                        !i && o && o.empty.fire();
                                },
                                _queueHooks: function (e, t) {
                                    var n = t + "queueHooks";
                                    return (
                                        ae.get(e, n) ||
                                        ae.access(e, n, {
                                            empty: T.Callbacks(
                                                "once memory"
                                            ).add(function () {
                                                ae.remove(e, [t + "queue", n]);
                                            }),
                                        })
                                    );
                                },
                            }),
                            T.fn.extend({
                                queue: function (e, t) {
                                    var n = 2;
                                    return (
                                        "string" != typeof e &&
                                            ((t = e), (e = "fx"), n--),
                                        arguments.length < n
                                            ? T.queue(this[0], e)
                                            : void 0 === t
                                            ? this
                                            : this.each(function () {
                                                  var n = T.queue(this, e, t);
                                                  T._queueHooks(this, e),
                                                      "fx" === e &&
                                                          "inprogress" !==
                                                              n[0] &&
                                                          T.dequeue(this, e);
                                              })
                                    );
                                },
                                dequeue: function (e) {
                                    return this.each(function () {
                                        T.dequeue(this, e);
                                    });
                                },
                                clearQueue: function (e) {
                                    return this.queue(e || "fx", []);
                                },
                                promise: function (e, t) {
                                    var n,
                                        i = 1,
                                        r = T.Deferred(),
                                        o = this,
                                        s = this.length,
                                        a = function () {
                                            --i || r.resolveWith(o, [o]);
                                        };
                                    for (
                                        "string" != typeof e &&
                                            ((t = e), (e = void 0)),
                                            e = e || "fx";
                                        s--;

                                    )
                                        (n = ae.get(o[s], e + "queueHooks")) &&
                                            n.empty &&
                                            (i++, n.empty.add(a));
                                    return a(), r.promise(t);
                                },
                            });
                        var pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                            fe = new RegExp(
                                "^(?:([+-])=|)(" + pe + ")([a-z%]*)$",
                                "i"
                            ),
                            he = ["Top", "Right", "Bottom", "Left"],
                            me = x.documentElement,
                            ge = function (e) {
                                return T.contains(e.ownerDocument, e);
                            },
                            ye = { composed: !0 };
                        me.getRootNode &&
                            (ge = function (e) {
                                return (
                                    T.contains(e.ownerDocument, e) ||
                                    e.getRootNode(ye) === e.ownerDocument
                                );
                            });
                        var ve = function (e, t) {
                            return (
                                "none" === (e = t || e).style.display ||
                                ("" === e.style.display &&
                                    ge(e) &&
                                    "none" === T.css(e, "display"))
                            );
                        };
                        function xe(e, t, n, i) {
                            var r,
                                o,
                                s = 20,
                                a = i
                                    ? function () {
                                          return i.cur();
                                      }
                                    : function () {
                                          return T.css(e, t, "");
                                      },
                                c = a(),
                                u = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
                                l =
                                    e.nodeType &&
                                    (T.cssNumber[t] || ("px" !== u && +c)) &&
                                    fe.exec(T.css(e, t));
                            if (l && l[3] !== u) {
                                for (c /= 2, u = u || l[3], l = +c || 1; s--; )
                                    T.style(e, t, l + u),
                                        (1 - o) * (1 - (o = a() / c || 0.5)) <=
                                            0 && (s = 0),
                                        (l /= o);
                                (l *= 2), T.style(e, t, l + u), (n = n || []);
                            }
                            return (
                                n &&
                                    ((l = +l || +c || 0),
                                    (r = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
                                    i &&
                                        ((i.unit = u),
                                        (i.start = l),
                                        (i.end = r))),
                                r
                            );
                        }
                        var be = {};
                        function we(e) {
                            var t,
                                n = e.ownerDocument,
                                i = e.nodeName,
                                r = be[i];
                            return (
                                r ||
                                ((t = n.body.appendChild(n.createElement(i))),
                                (r = T.css(t, "display")),
                                t.parentNode.removeChild(t),
                                "none" === r && (r = "block"),
                                (be[i] = r),
                                r)
                            );
                        }
                        function Ee(e, t) {
                            for (
                                var n, i, r = [], o = 0, s = e.length;
                                o < s;
                                o++
                            )
                                (i = e[o]).style &&
                                    ((n = i.style.display),
                                    t
                                        ? ("none" === n &&
                                              ((r[o] =
                                                  ae.get(i, "display") || null),
                                              r[o] || (i.style.display = "")),
                                          "" === i.style.display &&
                                              ve(i) &&
                                              (r[o] = we(i)))
                                        : "none" !== n &&
                                          ((r[o] = "none"),
                                          ae.set(i, "display", n)));
                            for (o = 0; o < s; o++)
                                null != r[o] && (e[o].style.display = r[o]);
                            return e;
                        }
                        T.fn.extend({
                            show: function () {
                                return Ee(this, !0);
                            },
                            hide: function () {
                                return Ee(this);
                            },
                            toggle: function (e) {
                                return "boolean" == typeof e
                                    ? e
                                        ? this.show()
                                        : this.hide()
                                    : this.each(function () {
                                          ve(this)
                                              ? T(this).show()
                                              : T(this).hide();
                                      });
                            },
                        });
                        var Se,
                            _e,
                            Te = /^(?:checkbox|radio)$/i,
                            Ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                            ke = /^$|^module$|\/(?:java|ecma)script/i;
                        (Se = x
                            .createDocumentFragment()
                            .appendChild(x.createElement("div"))),
                            (_e = x.createElement("input")).setAttribute(
                                "type",
                                "radio"
                            ),
                            _e.setAttribute("checked", "checked"),
                            _e.setAttribute("name", "t"),
                            Se.appendChild(_e),
                            (g.checkClone = Se.cloneNode(!0).cloneNode(
                                !0
                            ).lastChild.checked),
                            (Se.innerHTML = "<textarea>x</textarea>"),
                            (g.noCloneChecked = !!Se.cloneNode(!0).lastChild
                                .defaultValue),
                            (Se.innerHTML = "<option></option>"),
                            (g.option = !!Se.lastChild);
                        var Le = {
                            thead: [1, "<table>", "</table>"],
                            col: [
                                2,
                                "<table><colgroup>",
                                "</colgroup></table>",
                            ],
                            tr: [2, "<table><tbody>", "</tbody></table>"],
                            td: [
                                3,
                                "<table><tbody><tr>",
                                "</tr></tbody></table>",
                            ],
                            _default: [0, "", ""],
                        };
                        function qe(e, t) {
                            var n;
                            return (
                                (n =
                                    void 0 !== e.getElementsByTagName
                                        ? e.getElementsByTagName(t || "*")
                                        : void 0 !== e.querySelectorAll
                                        ? e.querySelectorAll(t || "*")
                                        : []),
                                void 0 === t || (t && k(e, t))
                                    ? T.merge([e], n)
                                    : n
                            );
                        }
                        function Ae(e, t) {
                            for (var n = 0, i = e.length; n < i; n++)
                                ae.set(
                                    e[n],
                                    "globalEval",
                                    !t || ae.get(t[n], "globalEval")
                                );
                        }
                        (Le.tbody =
                            Le.tfoot =
                            Le.colgroup =
                            Le.caption =
                                Le.thead),
                            (Le.th = Le.td),
                            g.option ||
                                (Le.optgroup = Le.option =
                                    [
                                        1,
                                        "<select multiple='multiple'>",
                                        "</select>",
                                    ]);
                        var De = /<|&#?\w+;/;
                        function Ne(e, t, n, i, r) {
                            for (
                                var o,
                                    s,
                                    a,
                                    c,
                                    u,
                                    l,
                                    d = t.createDocumentFragment(),
                                    p = [],
                                    f = 0,
                                    h = e.length;
                                f < h;
                                f++
                            )
                                if ((o = e[f]) || 0 === o)
                                    if ("object" === E(o))
                                        T.merge(p, o.nodeType ? [o] : o);
                                    else if (De.test(o)) {
                                        for (
                                            s =
                                                s ||
                                                d.appendChild(
                                                    t.createElement("div")
                                                ),
                                                a = (Ce.exec(o) || [
                                                    "",
                                                    "",
                                                ])[1].toLowerCase(),
                                                c = Le[a] || Le._default,
                                                s.innerHTML =
                                                    c[1] +
                                                    T.htmlPrefilter(o) +
                                                    c[2],
                                                l = c[0];
                                            l--;

                                        )
                                            s = s.lastChild;
                                        T.merge(p, s.childNodes),
                                            ((s = d.firstChild).textContent =
                                                "");
                                    } else p.push(t.createTextNode(o));
                            for (d.textContent = "", f = 0; (o = p[f++]); )
                                if (i && T.inArray(o, i) > -1) r && r.push(o);
                                else if (
                                    ((u = ge(o)),
                                    (s = qe(d.appendChild(o), "script")),
                                    u && Ae(s),
                                    n)
                                )
                                    for (l = 0; (o = s[l++]); )
                                        ke.test(o.type || "") && n.push(o);
                            return d;
                        }
                        var je = /^([^.]*)(?:\.(.+)|)/;
                        function Oe() {
                            return !0;
                        }
                        function He() {
                            return !1;
                        }
                        function Ie(e, t, n, i, r, o) {
                            var s, a;
                            if ("object" == typeof t) {
                                for (a in ("string" != typeof n &&
                                    ((i = i || n), (n = void 0)),
                                t))
                                    Ie(e, a, n, i, t[a], o);
                                return e;
                            }
                            if (
                                (null == i && null == r
                                    ? ((r = n), (i = n = void 0))
                                    : null == r &&
                                      ("string" == typeof n
                                          ? ((r = i), (i = void 0))
                                          : ((r = i), (i = n), (n = void 0))),
                                !1 === r)
                            )
                                r = He;
                            else if (!r) return e;
                            return (
                                1 === o &&
                                    ((s = r),
                                    (r = function (e) {
                                        return (
                                            T().off(e), s.apply(this, arguments)
                                        );
                                    }),
                                    (r.guid = s.guid || (s.guid = T.guid++))),
                                e.each(function () {
                                    T.event.add(this, t, r, i, n);
                                })
                            );
                        }
                        function Me(e, t, n) {
                            n
                                ? (ae.set(e, t, !1),
                                  T.event.add(e, t, {
                                      namespace: !1,
                                      handler: function (e) {
                                          var n,
                                              i = ae.get(this, t);
                                          if (1 & e.isTrigger && this[t]) {
                                              if (i)
                                                  (T.event.special[t] || {})
                                                      .delegateType &&
                                                      e.stopPropagation();
                                              else if (
                                                  ((i = a.call(arguments)),
                                                  ae.set(this, t, i),
                                                  this[t](),
                                                  (n = ae.get(this, t)),
                                                  ae.set(this, t, !1),
                                                  i !== n)
                                              )
                                                  return (
                                                      e.stopImmediatePropagation(),
                                                      e.preventDefault(),
                                                      n
                                                  );
                                          } else
                                              i &&
                                                  (ae.set(
                                                      this,
                                                      t,
                                                      T.event.trigger(
                                                          i[0],
                                                          i.slice(1),
                                                          this
                                                      )
                                                  ),
                                                  e.stopPropagation(),
                                                  (e.isImmediatePropagationStopped =
                                                      Oe));
                                      },
                                  }))
                                : void 0 === ae.get(e, t) &&
                                  T.event.add(e, t, Oe);
                        }
                        (T.event = {
                            global: {},
                            add: function (e, t, n, i, r) {
                                var o,
                                    s,
                                    a,
                                    c,
                                    u,
                                    l,
                                    d,
                                    p,
                                    f,
                                    h,
                                    m,
                                    g = ae.get(e);
                                if (oe(e))
                                    for (
                                        n.handler &&
                                            ((n = (o = n).handler),
                                            (r = o.selector)),
                                            r && T.find.matchesSelector(me, r),
                                            n.guid || (n.guid = T.guid++),
                                            (c = g.events) ||
                                                (c = g.events =
                                                    Object.create(null)),
                                            (s = g.handle) ||
                                                (s = g.handle =
                                                    function (t) {
                                                        return void 0 !== T &&
                                                            T.event
                                                                .triggered !==
                                                                t.type
                                                            ? T.event.dispatch.apply(
                                                                  e,
                                                                  arguments
                                                              )
                                                            : void 0;
                                                    }),
                                            u = (t = (t || "").match(Y) || [""])
                                                .length;
                                        u--;

                                    )
                                        (f = m = (a = je.exec(t[u]) || [])[1]),
                                            (h = (a[2] || "")
                                                .split(".")
                                                .sort()),
                                            f &&
                                                ((d = T.event.special[f] || {}),
                                                (f =
                                                    (r
                                                        ? d.delegateType
                                                        : d.bindType) || f),
                                                (d = T.event.special[f] || {}),
                                                (l = T.extend(
                                                    {
                                                        type: f,
                                                        origType: m,
                                                        data: i,
                                                        handler: n,
                                                        guid: n.guid,
                                                        selector: r,
                                                        needsContext:
                                                            r &&
                                                            T.expr.match.needsContext.test(
                                                                r
                                                            ),
                                                        namespace: h.join("."),
                                                    },
                                                    o
                                                )),
                                                (p = c[f]) ||
                                                    (((p = c[f] =
                                                        []).delegateCount = 0),
                                                    (d.setup &&
                                                        !1 !==
                                                            d.setup.call(
                                                                e,
                                                                i,
                                                                h,
                                                                s
                                                            )) ||
                                                        (e.addEventListener &&
                                                            e.addEventListener(
                                                                f,
                                                                s
                                                            ))),
                                                d.add &&
                                                    (d.add.call(e, l),
                                                    l.handler.guid ||
                                                        (l.handler.guid =
                                                            n.guid)),
                                                r
                                                    ? p.splice(
                                                          p.delegateCount++,
                                                          0,
                                                          l
                                                      )
                                                    : p.push(l),
                                                (T.event.global[f] = !0));
                            },
                            remove: function (e, t, n, i, r) {
                                var o,
                                    s,
                                    a,
                                    c,
                                    u,
                                    l,
                                    d,
                                    p,
                                    f,
                                    h,
                                    m,
                                    g = ae.hasData(e) && ae.get(e);
                                if (g && (c = g.events)) {
                                    for (
                                        u = (t = (t || "").match(Y) || [""])
                                            .length;
                                        u--;

                                    )
                                        if (
                                            ((f = m =
                                                (a = je.exec(t[u]) || [])[1]),
                                            (h = (a[2] || "")
                                                .split(".")
                                                .sort()),
                                            f)
                                        ) {
                                            for (
                                                d = T.event.special[f] || {},
                                                    p =
                                                        c[
                                                            (f =
                                                                (i
                                                                    ? d.delegateType
                                                                    : d.bindType) ||
                                                                f)
                                                        ] || [],
                                                    a =
                                                        a[2] &&
                                                        new RegExp(
                                                            "(^|\\.)" +
                                                                h.join(
                                                                    "\\.(?:.*\\.|)"
                                                                ) +
                                                                "(\\.|$)"
                                                        ),
                                                    s = o = p.length;
                                                o--;

                                            )
                                                (l = p[o]),
                                                    (!r && m !== l.origType) ||
                                                        (n &&
                                                            n.guid !==
                                                                l.guid) ||
                                                        (a &&
                                                            !a.test(
                                                                l.namespace
                                                            )) ||
                                                        (i &&
                                                            i !== l.selector &&
                                                            ("**" !== i ||
                                                                !l.selector)) ||
                                                        (p.splice(o, 1),
                                                        l.selector &&
                                                            p.delegateCount--,
                                                        d.remove &&
                                                            d.remove.call(
                                                                e,
                                                                l
                                                            ));
                                            s &&
                                                !p.length &&
                                                ((d.teardown &&
                                                    !1 !==
                                                        d.teardown.call(
                                                            e,
                                                            h,
                                                            g.handle
                                                        )) ||
                                                    T.removeEvent(
                                                        e,
                                                        f,
                                                        g.handle
                                                    ),
                                                delete c[f]);
                                        } else
                                            for (f in c)
                                                T.event.remove(
                                                    e,
                                                    f + t[u],
                                                    n,
                                                    i,
                                                    !0
                                                );
                                    T.isEmptyObject(c) &&
                                        ae.remove(e, "handle events");
                                }
                            },
                            dispatch: function (e) {
                                var t,
                                    n,
                                    i,
                                    r,
                                    o,
                                    s,
                                    a = new Array(arguments.length),
                                    c = T.event.fix(e),
                                    u =
                                        (ae.get(this, "events") ||
                                            Object.create(null))[c.type] || [],
                                    l = T.event.special[c.type] || {};
                                for (a[0] = c, t = 1; t < arguments.length; t++)
                                    a[t] = arguments[t];
                                if (
                                    ((c.delegateTarget = this),
                                    !l.preDispatch ||
                                        !1 !== l.preDispatch.call(this, c))
                                ) {
                                    for (
                                        s = T.event.handlers.call(this, c, u),
                                            t = 0;
                                        (r = s[t++]) &&
                                        !c.isPropagationStopped();

                                    )
                                        for (
                                            c.currentTarget = r.elem, n = 0;
                                            (o = r.handlers[n++]) &&
                                            !c.isImmediatePropagationStopped();

                                        )
                                            (c.rnamespace &&
                                                !1 !== o.namespace &&
                                                !c.rnamespace.test(
                                                    o.namespace
                                                )) ||
                                                ((c.handleObj = o),
                                                (c.data = o.data),
                                                void 0 !==
                                                    (i = (
                                                        (
                                                            T.event.special[
                                                                o.origType
                                                            ] || {}
                                                        ).handle || o.handler
                                                    ).apply(r.elem, a)) &&
                                                    !1 === (c.result = i) &&
                                                    (c.preventDefault(),
                                                    c.stopPropagation()));
                                    return (
                                        l.postDispatch &&
                                            l.postDispatch.call(this, c),
                                        c.result
                                    );
                                }
                            },
                            handlers: function (e, t) {
                                var n,
                                    i,
                                    r,
                                    o,
                                    s,
                                    a = [],
                                    c = t.delegateCount,
                                    u = e.target;
                                if (
                                    c &&
                                    u.nodeType &&
                                    !("click" === e.type && e.button >= 1)
                                )
                                    for (; u !== this; u = u.parentNode || this)
                                        if (
                                            1 === u.nodeType &&
                                            ("click" !== e.type ||
                                                !0 !== u.disabled)
                                        ) {
                                            for (
                                                o = [], s = {}, n = 0;
                                                n < c;
                                                n++
                                            )
                                                void 0 ===
                                                    s[
                                                        (r =
                                                            (i = t[n])
                                                                .selector + " ")
                                                    ] &&
                                                    (s[r] = i.needsContext
                                                        ? T(r, this).index(u) >
                                                          -1
                                                        : T.find(
                                                              r,
                                                              this,
                                                              null,
                                                              [u]
                                                          ).length),
                                                    s[r] && o.push(i);
                                            o.length &&
                                                a.push({
                                                    elem: u,
                                                    handlers: o,
                                                });
                                        }
                                return (
                                    (u = this),
                                    c < t.length &&
                                        a.push({
                                            elem: u,
                                            handlers: t.slice(c),
                                        }),
                                    a
                                );
                            },
                            addProp: function (e, t) {
                                Object.defineProperty(T.Event.prototype, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: y(t)
                                        ? function () {
                                              if (this.originalEvent)
                                                  return t(this.originalEvent);
                                          }
                                        : function () {
                                              if (this.originalEvent)
                                                  return this.originalEvent[e];
                                          },
                                    set: function (t) {
                                        Object.defineProperty(this, e, {
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                            value: t,
                                        });
                                    },
                                });
                            },
                            fix: function (e) {
                                return e[T.expando] ? e : new T.Event(e);
                            },
                            special: {
                                load: { noBubble: !0 },
                                click: {
                                    setup: function (e) {
                                        var t = this || e;
                                        return (
                                            Te.test(t.type) &&
                                                t.click &&
                                                k(t, "input") &&
                                                Me(t, "click", !0),
                                            !1
                                        );
                                    },
                                    trigger: function (e) {
                                        var t = this || e;
                                        return (
                                            Te.test(t.type) &&
                                                t.click &&
                                                k(t, "input") &&
                                                Me(t, "click"),
                                            !0
                                        );
                                    },
                                    _default: function (e) {
                                        var t = e.target;
                                        return (
                                            (Te.test(t.type) &&
                                                t.click &&
                                                k(t, "input") &&
                                                ae.get(t, "click")) ||
                                            k(t, "a")
                                        );
                                    },
                                },
                                beforeunload: {
                                    postDispatch: function (e) {
                                        void 0 !== e.result &&
                                            e.originalEvent &&
                                            (e.originalEvent.returnValue =
                                                e.result);
                                    },
                                },
                            },
                        }),
                            (T.removeEvent = function (e, t, n) {
                                e.removeEventListener &&
                                    e.removeEventListener(t, n);
                            }),
                            (T.Event = function (e, t) {
                                if (!(this instanceof T.Event))
                                    return new T.Event(e, t);
                                e && e.type
                                    ? ((this.originalEvent = e),
                                      (this.type = e.type),
                                      (this.isDefaultPrevented =
                                          e.defaultPrevented ||
                                          (void 0 === e.defaultPrevented &&
                                              !1 === e.returnValue)
                                              ? Oe
                                              : He),
                                      (this.target =
                                          e.target && 3 === e.target.nodeType
                                              ? e.target.parentNode
                                              : e.target),
                                      (this.currentTarget = e.currentTarget),
                                      (this.relatedTarget = e.relatedTarget))
                                    : (this.type = e),
                                    t && T.extend(this, t),
                                    (this.timeStamp =
                                        (e && e.timeStamp) || Date.now()),
                                    (this[T.expando] = !0);
                            }),
                            (T.Event.prototype = {
                                constructor: T.Event,
                                isDefaultPrevented: He,
                                isPropagationStopped: He,
                                isImmediatePropagationStopped: He,
                                isSimulated: !1,
                                preventDefault: function () {
                                    var e = this.originalEvent;
                                    (this.isDefaultPrevented = Oe),
                                        e &&
                                            !this.isSimulated &&
                                            e.preventDefault();
                                },
                                stopPropagation: function () {
                                    var e = this.originalEvent;
                                    (this.isPropagationStopped = Oe),
                                        e &&
                                            !this.isSimulated &&
                                            e.stopPropagation();
                                },
                                stopImmediatePropagation: function () {
                                    var e = this.originalEvent;
                                    (this.isImmediatePropagationStopped = Oe),
                                        e &&
                                            !this.isSimulated &&
                                            e.stopImmediatePropagation(),
                                        this.stopPropagation();
                                },
                            }),
                            T.each(
                                {
                                    altKey: !0,
                                    bubbles: !0,
                                    cancelable: !0,
                                    changedTouches: !0,
                                    ctrlKey: !0,
                                    detail: !0,
                                    eventPhase: !0,
                                    metaKey: !0,
                                    pageX: !0,
                                    pageY: !0,
                                    shiftKey: !0,
                                    view: !0,
                                    char: !0,
                                    code: !0,
                                    charCode: !0,
                                    key: !0,
                                    keyCode: !0,
                                    button: !0,
                                    buttons: !0,
                                    clientX: !0,
                                    clientY: !0,
                                    offsetX: !0,
                                    offsetY: !0,
                                    pointerId: !0,
                                    pointerType: !0,
                                    screenX: !0,
                                    screenY: !0,
                                    targetTouches: !0,
                                    toElement: !0,
                                    touches: !0,
                                    which: !0,
                                },
                                T.event.addProp
                            ),
                            T.each(
                                { focus: "focusin", blur: "focusout" },
                                function (e, t) {
                                    function n(e) {
                                        if (x.documentMode) {
                                            var n = ae.get(this, "handle"),
                                                i = T.event.fix(e);
                                            (i.type =
                                                "focusin" === e.type
                                                    ? "focus"
                                                    : "blur"),
                                                (i.isSimulated = !0),
                                                n(e),
                                                i.target === i.currentTarget &&
                                                    n(i);
                                        } else
                                            T.event.simulate(
                                                t,
                                                e.target,
                                                T.event.fix(e)
                                            );
                                    }
                                    (T.event.special[e] = {
                                        setup: function () {
                                            var i;
                                            if (
                                                (Me(this, e, !0),
                                                !x.documentMode)
                                            )
                                                return !1;
                                            (i = ae.get(this, t)) ||
                                                this.addEventListener(t, n),
                                                ae.set(this, t, (i || 0) + 1);
                                        },
                                        trigger: function () {
                                            return Me(this, e), !0;
                                        },
                                        teardown: function () {
                                            var e;
                                            if (!x.documentMode) return !1;
                                            (e = ae.get(this, t) - 1)
                                                ? ae.set(this, t, e)
                                                : (this.removeEventListener(
                                                      t,
                                                      n
                                                  ),
                                                  ae.remove(this, t));
                                        },
                                        _default: function (t) {
                                            return ae.get(t.target, e);
                                        },
                                        delegateType: t,
                                    }),
                                        (T.event.special[t] = {
                                            setup: function () {
                                                var i =
                                                        this.ownerDocument ||
                                                        this.document ||
                                                        this,
                                                    r = x.documentMode
                                                        ? this
                                                        : i,
                                                    o = ae.get(r, t);
                                                o ||
                                                    (x.documentMode
                                                        ? this.addEventListener(
                                                              t,
                                                              n
                                                          )
                                                        : i.addEventListener(
                                                              e,
                                                              n,
                                                              !0
                                                          )),
                                                    ae.set(r, t, (o || 0) + 1);
                                            },
                                            teardown: function () {
                                                var i =
                                                        this.ownerDocument ||
                                                        this.document ||
                                                        this,
                                                    r = x.documentMode
                                                        ? this
                                                        : i,
                                                    o = ae.get(r, t) - 1;
                                                o
                                                    ? ae.set(r, t, o)
                                                    : (x.documentMode
                                                          ? this.removeEventListener(
                                                                t,
                                                                n
                                                            )
                                                          : i.removeEventListener(
                                                                e,
                                                                n,
                                                                !0
                                                            ),
                                                      ae.remove(r, t));
                                            },
                                        });
                                }
                            ),
                            T.each(
                                {
                                    mouseenter: "mouseover",
                                    mouseleave: "mouseout",
                                    pointerenter: "pointerover",
                                    pointerleave: "pointerout",
                                },
                                function (e, t) {
                                    T.event.special[e] = {
                                        delegateType: t,
                                        bindType: t,
                                        handle: function (e) {
                                            var n,
                                                i = e.relatedTarget,
                                                r = e.handleObj;
                                            return (
                                                (i &&
                                                    (i === this ||
                                                        T.contains(this, i))) ||
                                                    ((e.type = r.origType),
                                                    (n = r.handler.apply(
                                                        this,
                                                        arguments
                                                    )),
                                                    (e.type = t)),
                                                n
                                            );
                                        },
                                    };
                                }
                            ),
                            T.fn.extend({
                                on: function (e, t, n, i) {
                                    return Ie(this, e, t, n, i);
                                },
                                one: function (e, t, n, i) {
                                    return Ie(this, e, t, n, i, 1);
                                },
                                off: function (e, t, n) {
                                    var i, r;
                                    if (e && e.preventDefault && e.handleObj)
                                        return (
                                            (i = e.handleObj),
                                            T(e.delegateTarget).off(
                                                i.namespace
                                                    ? i.origType +
                                                          "." +
                                                          i.namespace
                                                    : i.origType,
                                                i.selector,
                                                i.handler
                                            ),
                                            this
                                        );
                                    if ("object" == typeof e) {
                                        for (r in e) this.off(r, t, e[r]);
                                        return this;
                                    }
                                    return (
                                        (!1 !== t && "function" != typeof t) ||
                                            ((n = t), (t = void 0)),
                                        !1 === n && (n = He),
                                        this.each(function () {
                                            T.event.remove(this, e, n, t);
                                        })
                                    );
                                },
                            });
                        var Re = /<script|<style|<link/i,
                            Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
                            We = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
                        function $e(e, t) {
                            return (
                                (k(e, "table") &&
                                    k(
                                        11 !== t.nodeType ? t : t.firstChild,
                                        "tr"
                                    ) &&
                                    T(e).children("tbody")[0]) ||
                                e
                            );
                        }
                        function ze(e) {
                            return (
                                (e.type =
                                    (null !== e.getAttribute("type")) +
                                    "/" +
                                    e.type),
                                e
                            );
                        }
                        function Be(e) {
                            return (
                                "true/" === (e.type || "").slice(0, 5)
                                    ? (e.type = e.type.slice(5))
                                    : e.removeAttribute("type"),
                                e
                            );
                        }
                        function Fe(e, t) {
                            var n, i, r, o, s, a;
                            if (1 === t.nodeType) {
                                if (ae.hasData(e) && (a = ae.get(e).events))
                                    for (r in (ae.remove(t, "handle events"),
                                    a))
                                        for (n = 0, i = a[r].length; n < i; n++)
                                            T.event.add(t, r, a[r][n]);
                                ce.hasData(e) &&
                                    ((o = ce.access(e)),
                                    (s = T.extend({}, o)),
                                    ce.set(t, s));
                            }
                        }
                        function Ge(e, t) {
                            var n = t.nodeName.toLowerCase();
                            "input" === n && Te.test(e.type)
                                ? (t.checked = e.checked)
                                : ("input" !== n && "textarea" !== n) ||
                                  (t.defaultValue = e.defaultValue);
                        }
                        function Qe(e, t, n, i) {
                            t = c(t);
                            var r,
                                o,
                                s,
                                a,
                                u,
                                l,
                                d = 0,
                                p = e.length,
                                f = p - 1,
                                h = t[0],
                                m = y(h);
                            if (
                                m ||
                                (p > 1 &&
                                    "string" == typeof h &&
                                    !g.checkClone &&
                                    Pe.test(h))
                            )
                                return e.each(function (r) {
                                    var o = e.eq(r);
                                    m && (t[0] = h.call(this, r, o.html())),
                                        Qe(o, t, n, i);
                                });
                            if (
                                p &&
                                ((o = (r = Ne(t, e[0].ownerDocument, !1, e, i))
                                    .firstChild),
                                1 === r.childNodes.length && (r = o),
                                o || i)
                            ) {
                                for (
                                    a = (s = T.map(qe(r, "script"), ze)).length;
                                    d < p;
                                    d++
                                )
                                    (u = r),
                                        d !== f &&
                                            ((u = T.clone(u, !0, !0)),
                                            a && T.merge(s, qe(u, "script"))),
                                        n.call(e[d], u, d);
                                if (a)
                                    for (
                                        l = s[s.length - 1].ownerDocument,
                                            T.map(s, Be),
                                            d = 0;
                                        d < a;
                                        d++
                                    )
                                        (u = s[d]),
                                            ke.test(u.type || "") &&
                                                !ae.access(u, "globalEval") &&
                                                T.contains(l, u) &&
                                                (u.src &&
                                                "module" !==
                                                    (u.type || "").toLowerCase()
                                                    ? T._evalUrl &&
                                                      !u.noModule &&
                                                      T._evalUrl(
                                                          u.src,
                                                          {
                                                              nonce:
                                                                  u.nonce ||
                                                                  u.getAttribute(
                                                                      "nonce"
                                                                  ),
                                                          },
                                                          l
                                                      )
                                                    : w(
                                                          u.textContent.replace(
                                                              We,
                                                              ""
                                                          ),
                                                          u,
                                                          l
                                                      ));
                            }
                            return e;
                        }
                        function Ye(e, t, n) {
                            for (
                                var i, r = t ? T.filter(t, e) : e, o = 0;
                                null != (i = r[o]);
                                o++
                            )
                                n || 1 !== i.nodeType || T.cleanData(qe(i)),
                                    i.parentNode &&
                                        (n && ge(i) && Ae(qe(i, "script")),
                                        i.parentNode.removeChild(i));
                            return e;
                        }
                        T.extend({
                            htmlPrefilter: function (e) {
                                return e;
                            },
                            clone: function (e, t, n) {
                                var i,
                                    r,
                                    o,
                                    s,
                                    a = e.cloneNode(!0),
                                    c = ge(e);
                                if (
                                    !(
                                        g.noCloneChecked ||
                                        (1 !== e.nodeType &&
                                            11 !== e.nodeType) ||
                                        T.isXMLDoc(e)
                                    )
                                )
                                    for (
                                        s = qe(a),
                                            i = 0,
                                            r = (o = qe(e)).length;
                                        i < r;
                                        i++
                                    )
                                        Ge(o[i], s[i]);
                                if (t)
                                    if (n)
                                        for (
                                            o = o || qe(e),
                                                s = s || qe(a),
                                                i = 0,
                                                r = o.length;
                                            i < r;
                                            i++
                                        )
                                            Fe(o[i], s[i]);
                                    else Fe(e, a);
                                return (
                                    (s = qe(a, "script")).length > 0 &&
                                        Ae(s, !c && qe(e, "script")),
                                    a
                                );
                            },
                            cleanData: function (e) {
                                for (
                                    var t, n, i, r = T.event.special, o = 0;
                                    void 0 !== (n = e[o]);
                                    o++
                                )
                                    if (oe(n)) {
                                        if ((t = n[ae.expando])) {
                                            if (t.events)
                                                for (i in t.events)
                                                    r[i]
                                                        ? T.event.remove(n, i)
                                                        : T.removeEvent(
                                                              n,
                                                              i,
                                                              t.handle
                                                          );
                                            n[ae.expando] = void 0;
                                        }
                                        n[ce.expando] &&
                                            (n[ce.expando] = void 0);
                                    }
                            },
                        }),
                            T.fn.extend({
                                detach: function (e) {
                                    return Ye(this, e, !0);
                                },
                                remove: function (e) {
                                    return Ye(this, e);
                                },
                                text: function (e) {
                                    return ee(
                                        this,
                                        function (e) {
                                            return void 0 === e
                                                ? T.text(this)
                                                : this.empty().each(
                                                      function () {
                                                          (1 !==
                                                              this.nodeType &&
                                                              11 !==
                                                                  this
                                                                      .nodeType &&
                                                              9 !==
                                                                  this
                                                                      .nodeType) ||
                                                              (this.textContent =
                                                                  e);
                                                      }
                                                  );
                                        },
                                        null,
                                        e,
                                        arguments.length
                                    );
                                },
                                append: function () {
                                    return Qe(this, arguments, function (e) {
                                        (1 !== this.nodeType &&
                                            11 !== this.nodeType &&
                                            9 !== this.nodeType) ||
                                            $e(this, e).appendChild(e);
                                    });
                                },
                                prepend: function () {
                                    return Qe(this, arguments, function (e) {
                                        if (
                                            1 === this.nodeType ||
                                            11 === this.nodeType ||
                                            9 === this.nodeType
                                        ) {
                                            var t = $e(this, e);
                                            t.insertBefore(e, t.firstChild);
                                        }
                                    });
                                },
                                before: function () {
                                    return Qe(this, arguments, function (e) {
                                        this.parentNode &&
                                            this.parentNode.insertBefore(
                                                e,
                                                this
                                            );
                                    });
                                },
                                after: function () {
                                    return Qe(this, arguments, function (e) {
                                        this.parentNode &&
                                            this.parentNode.insertBefore(
                                                e,
                                                this.nextSibling
                                            );
                                    });
                                },
                                empty: function () {
                                    for (
                                        var e, t = 0;
                                        null != (e = this[t]);
                                        t++
                                    )
                                        1 === e.nodeType &&
                                            (T.cleanData(qe(e, !1)),
                                            (e.textContent = ""));
                                    return this;
                                },
                                clone: function (e, t) {
                                    return (
                                        (e = null != e && e),
                                        (t = null == t ? e : t),
                                        this.map(function () {
                                            return T.clone(this, e, t);
                                        })
                                    );
                                },
                                html: function (e) {
                                    return ee(
                                        this,
                                        function (e) {
                                            var t = this[0] || {},
                                                n = 0,
                                                i = this.length;
                                            if (
                                                void 0 === e &&
                                                1 === t.nodeType
                                            )
                                                return t.innerHTML;
                                            if (
                                                "string" == typeof e &&
                                                !Re.test(e) &&
                                                !Le[
                                                    (Ce.exec(e) || [
                                                        "",
                                                        "",
                                                    ])[1].toLowerCase()
                                                ]
                                            ) {
                                                e = T.htmlPrefilter(e);
                                                try {
                                                    for (; n < i; n++)
                                                        1 ===
                                                            (t = this[n] || {})
                                                                .nodeType &&
                                                            (T.cleanData(
                                                                qe(t, !1)
                                                            ),
                                                            (t.innerHTML = e));
                                                    t = 0;
                                                } catch (e) {}
                                            }
                                            t && this.empty().append(e);
                                        },
                                        null,
                                        e,
                                        arguments.length
                                    );
                                },
                                replaceWith: function () {
                                    var e = [];
                                    return Qe(
                                        this,
                                        arguments,
                                        function (t) {
                                            var n = this.parentNode;
                                            T.inArray(this, e) < 0 &&
                                                (T.cleanData(qe(this)),
                                                n && n.replaceChild(t, this));
                                        },
                                        e
                                    );
                                },
                            }),
                            T.each(
                                {
                                    appendTo: "append",
                                    prependTo: "prepend",
                                    insertBefore: "before",
                                    insertAfter: "after",
                                    replaceAll: "replaceWith",
                                },
                                function (e, t) {
                                    T.fn[e] = function (e) {
                                        for (
                                            var n,
                                                i = [],
                                                r = T(e),
                                                o = r.length - 1,
                                                s = 0;
                                            s <= o;
                                            s++
                                        )
                                            (n =
                                                s === o
                                                    ? this
                                                    : this.clone(!0)),
                                                T(r[s])[t](n),
                                                u.apply(i, n.get());
                                        return this.pushStack(i);
                                    };
                                }
                            );
                        var Ue = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"),
                            Xe = /^--/,
                            Ve = function (e) {
                                var t = e.ownerDocument.defaultView;
                                return (
                                    (t && t.opener) || (t = i),
                                    t.getComputedStyle(e)
                                );
                            },
                            Ke = function (e, t, n) {
                                var i,
                                    r,
                                    o = {};
                                for (r in t)
                                    (o[r] = e.style[r]), (e.style[r] = t[r]);
                                for (r in ((i = n.call(e)), t))
                                    e.style[r] = o[r];
                                return i;
                            },
                            Je = new RegExp(he.join("|"), "i");
                        function Ze(e, t, n) {
                            var i,
                                r,
                                o,
                                s,
                                a = Xe.test(t),
                                c = e.style;
                            return (
                                (n = n || Ve(e)) &&
                                    ((s = n.getPropertyValue(t) || n[t]),
                                    a &&
                                        s &&
                                        (s = s.replace(N, "$1") || void 0),
                                    "" !== s || ge(e) || (s = T.style(e, t)),
                                    !g.pixelBoxStyles() &&
                                        Ue.test(s) &&
                                        Je.test(t) &&
                                        ((i = c.width),
                                        (r = c.minWidth),
                                        (o = c.maxWidth),
                                        (c.minWidth = c.maxWidth = c.width = s),
                                        (s = n.width),
                                        (c.width = i),
                                        (c.minWidth = r),
                                        (c.maxWidth = o))),
                                void 0 !== s ? s + "" : s
                            );
                        }
                        function et(e, t) {
                            return {
                                get: function () {
                                    if (!e())
                                        return (this.get = t).apply(
                                            this,
                                            arguments
                                        );
                                    delete this.get;
                                },
                            };
                        }
                        !(function () {
                            function e() {
                                if (l) {
                                    (u.style.cssText =
                                        "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                                        (l.style.cssText =
                                            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                                        me.appendChild(u).appendChild(l);
                                    var e = i.getComputedStyle(l);
                                    (n = "1%" !== e.top),
                                        (c = 12 === t(e.marginLeft)),
                                        (l.style.right = "60%"),
                                        (s = 36 === t(e.right)),
                                        (r = 36 === t(e.width)),
                                        (l.style.position = "absolute"),
                                        (o = 12 === t(l.offsetWidth / 3)),
                                        me.removeChild(u),
                                        (l = null);
                                }
                            }
                            function t(e) {
                                return Math.round(parseFloat(e));
                            }
                            var n,
                                r,
                                o,
                                s,
                                a,
                                c,
                                u = x.createElement("div"),
                                l = x.createElement("div");
                            l.style &&
                                ((l.style.backgroundClip = "content-box"),
                                (l.cloneNode(!0).style.backgroundClip = ""),
                                (g.clearCloneStyle =
                                    "content-box" === l.style.backgroundClip),
                                T.extend(g, {
                                    boxSizingReliable: function () {
                                        return e(), r;
                                    },
                                    pixelBoxStyles: function () {
                                        return e(), s;
                                    },
                                    pixelPosition: function () {
                                        return e(), n;
                                    },
                                    reliableMarginLeft: function () {
                                        return e(), c;
                                    },
                                    scrollboxSize: function () {
                                        return e(), o;
                                    },
                                    reliableTrDimensions: function () {
                                        var e, t, n, r;
                                        return (
                                            null == a &&
                                                ((e = x.createElement("table")),
                                                (t = x.createElement("tr")),
                                                (n = x.createElement("div")),
                                                (e.style.cssText =
                                                    "position:absolute;left:-11111px;border-collapse:separate"),
                                                (t.style.cssText =
                                                    "box-sizing:content-box;border:1px solid"),
                                                (t.style.height = "1px"),
                                                (n.style.height = "9px"),
                                                (n.style.display = "block"),
                                                me
                                                    .appendChild(e)
                                                    .appendChild(t)
                                                    .appendChild(n),
                                                (r = i.getComputedStyle(t)),
                                                (a =
                                                    parseInt(r.height, 10) +
                                                        parseInt(
                                                            r.borderTopWidth,
                                                            10
                                                        ) +
                                                        parseInt(
                                                            r.borderBottomWidth,
                                                            10
                                                        ) ===
                                                    t.offsetHeight),
                                                me.removeChild(e)),
                                            a
                                        );
                                    },
                                }));
                        })();
                        var tt = ["Webkit", "Moz", "ms"],
                            nt = x.createElement("div").style,
                            it = {};
                        function rt(e) {
                            return (
                                T.cssProps[e] ||
                                it[e] ||
                                (e in nt
                                    ? e
                                    : (it[e] =
                                          (function (e) {
                                              for (
                                                  var t =
                                                          e[0].toUpperCase() +
                                                          e.slice(1),
                                                      n = tt.length;
                                                  n--;

                                              )
                                                  if ((e = tt[n] + t) in nt)
                                                      return e;
                                          })(e) || e))
                            );
                        }
                        var ot = /^(none|table(?!-c[ea]).+)/,
                            st = {
                                position: "absolute",
                                visibility: "hidden",
                                display: "block",
                            },
                            at = { letterSpacing: "0", fontWeight: "400" };
                        function ct(e, t, n) {
                            var i = fe.exec(t);
                            return i
                                ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px")
                                : t;
                        }
                        function ut(e, t, n, i, r, o) {
                            var s = "width" === t ? 1 : 0,
                                a = 0,
                                c = 0,
                                u = 0;
                            if (n === (i ? "border" : "content")) return 0;
                            for (; s < 4; s += 2)
                                "margin" === n &&
                                    (u += T.css(e, n + he[s], !0, r)),
                                    i
                                        ? ("content" === n &&
                                              (c -= T.css(
                                                  e,
                                                  "padding" + he[s],
                                                  !0,
                                                  r
                                              )),
                                          "margin" !== n &&
                                              (c -= T.css(
                                                  e,
                                                  "border" + he[s] + "Width",
                                                  !0,
                                                  r
                                              )))
                                        : ((c += T.css(
                                              e,
                                              "padding" + he[s],
                                              !0,
                                              r
                                          )),
                                          "padding" !== n
                                              ? (c += T.css(
                                                    e,
                                                    "border" + he[s] + "Width",
                                                    !0,
                                                    r
                                                ))
                                              : (a += T.css(
                                                    e,
                                                    "border" + he[s] + "Width",
                                                    !0,
                                                    r
                                                )));
                            return (
                                !i &&
                                    o >= 0 &&
                                    (c +=
                                        Math.max(
                                            0,
                                            Math.ceil(
                                                e[
                                                    "offset" +
                                                        t[0].toUpperCase() +
                                                        t.slice(1)
                                                ] -
                                                    o -
                                                    c -
                                                    a -
                                                    0.5
                                            )
                                        ) || 0),
                                c + u
                            );
                        }
                        function lt(e, t, n) {
                            var i = Ve(e),
                                r =
                                    (!g.boxSizingReliable() || n) &&
                                    "border-box" ===
                                        T.css(e, "boxSizing", !1, i),
                                o = r,
                                s = Ze(e, t, i),
                                a = "offset" + t[0].toUpperCase() + t.slice(1);
                            if (Ue.test(s)) {
                                if (!n) return s;
                                s = "auto";
                            }
                            return (
                                ((!g.boxSizingReliable() && r) ||
                                    (!g.reliableTrDimensions() && k(e, "tr")) ||
                                    "auto" === s ||
                                    (!parseFloat(s) &&
                                        "inline" ===
                                            T.css(e, "display", !1, i))) &&
                                    e.getClientRects().length &&
                                    ((r =
                                        "border-box" ===
                                        T.css(e, "boxSizing", !1, i)),
                                    (o = a in e) && (s = e[a])),
                                (s = parseFloat(s) || 0) +
                                    ut(
                                        e,
                                        t,
                                        n || (r ? "border" : "content"),
                                        o,
                                        i,
                                        s
                                    ) +
                                    "px"
                            );
                        }
                        function dt(e, t, n, i, r) {
                            return new dt.prototype.init(e, t, n, i, r);
                        }
                        T.extend({
                            cssHooks: {
                                opacity: {
                                    get: function (e, t) {
                                        if (t) {
                                            var n = Ze(e, "opacity");
                                            return "" === n ? "1" : n;
                                        }
                                    },
                                },
                            },
                            cssNumber: {
                                animationIterationCount: !0,
                                aspectRatio: !0,
                                borderImageSlice: !0,
                                columnCount: !0,
                                flexGrow: !0,
                                flexShrink: !0,
                                fontWeight: !0,
                                gridArea: !0,
                                gridColumn: !0,
                                gridColumnEnd: !0,
                                gridColumnStart: !0,
                                gridRow: !0,
                                gridRowEnd: !0,
                                gridRowStart: !0,
                                lineHeight: !0,
                                opacity: !0,
                                order: !0,
                                orphans: !0,
                                scale: !0,
                                widows: !0,
                                zIndex: !0,
                                zoom: !0,
                                fillOpacity: !0,
                                floodOpacity: !0,
                                stopOpacity: !0,
                                strokeMiterlimit: !0,
                                strokeOpacity: !0,
                            },
                            cssProps: {},
                            style: function (e, t, n, i) {
                                if (
                                    e &&
                                    3 !== e.nodeType &&
                                    8 !== e.nodeType &&
                                    e.style
                                ) {
                                    var r,
                                        o,
                                        s,
                                        a = re(t),
                                        c = Xe.test(t),
                                        u = e.style;
                                    if (
                                        (c || (t = rt(a)),
                                        (s = T.cssHooks[t] || T.cssHooks[a]),
                                        void 0 === n)
                                    )
                                        return s &&
                                            "get" in s &&
                                            void 0 !== (r = s.get(e, !1, i))
                                            ? r
                                            : u[t];
                                    "string" == (o = typeof n) &&
                                        (r = fe.exec(n)) &&
                                        r[1] &&
                                        ((n = xe(e, t, r)), (o = "number")),
                                        null != n &&
                                            n == n &&
                                            ("number" !== o ||
                                                c ||
                                                (n +=
                                                    (r && r[3]) ||
                                                    (T.cssNumber[a]
                                                        ? ""
                                                        : "px")),
                                            g.clearCloneStyle ||
                                                "" !== n ||
                                                0 !== t.indexOf("background") ||
                                                (u[t] = "inherit"),
                                            (s &&
                                                "set" in s &&
                                                void 0 ===
                                                    (n = s.set(e, n, i))) ||
                                                (c
                                                    ? u.setProperty(t, n)
                                                    : (u[t] = n)));
                                }
                            },
                            css: function (e, t, n, i) {
                                var r,
                                    o,
                                    s,
                                    a = re(t);
                                return (
                                    Xe.test(t) || (t = rt(a)),
                                    (s = T.cssHooks[t] || T.cssHooks[a]) &&
                                        "get" in s &&
                                        (r = s.get(e, !0, n)),
                                    void 0 === r && (r = Ze(e, t, i)),
                                    "normal" === r && t in at && (r = at[t]),
                                    "" === n || n
                                        ? ((o = parseFloat(r)),
                                          !0 === n || isFinite(o) ? o || 0 : r)
                                        : r
                                );
                            },
                        }),
                            T.each(["height", "width"], function (e, t) {
                                T.cssHooks[t] = {
                                    get: function (e, n, i) {
                                        if (n)
                                            return !ot.test(
                                                T.css(e, "display")
                                            ) ||
                                                (e.getClientRects().length &&
                                                    e.getBoundingClientRect()
                                                        .width)
                                                ? lt(e, t, i)
                                                : Ke(e, st, function () {
                                                      return lt(e, t, i);
                                                  });
                                    },
                                    set: function (e, n, i) {
                                        var r,
                                            o = Ve(e),
                                            s =
                                                !g.scrollboxSize() &&
                                                "absolute" === o.position,
                                            a =
                                                (s || i) &&
                                                "border-box" ===
                                                    T.css(
                                                        e,
                                                        "boxSizing",
                                                        !1,
                                                        o
                                                    ),
                                            c = i ? ut(e, t, i, a, o) : 0;
                                        return (
                                            a &&
                                                s &&
                                                (c -= Math.ceil(
                                                    e[
                                                        "offset" +
                                                            t[0].toUpperCase() +
                                                            t.slice(1)
                                                    ] -
                                                        parseFloat(o[t]) -
                                                        ut(
                                                            e,
                                                            t,
                                                            "border",
                                                            !1,
                                                            o
                                                        ) -
                                                        0.5
                                                )),
                                            c &&
                                                (r = fe.exec(n)) &&
                                                "px" !== (r[3] || "px") &&
                                                ((e.style[t] = n),
                                                (n = T.css(e, t))),
                                            ct(0, n, c)
                                        );
                                    },
                                };
                            }),
                            (T.cssHooks.marginLeft = et(
                                g.reliableMarginLeft,
                                function (e, t) {
                                    if (t)
                                        return (
                                            (parseFloat(Ze(e, "marginLeft")) ||
                                                e.getBoundingClientRect().left -
                                                    Ke(
                                                        e,
                                                        { marginLeft: 0 },
                                                        function () {
                                                            return e.getBoundingClientRect()
                                                                .left;
                                                        }
                                                    )) + "px"
                                        );
                                }
                            )),
                            T.each(
                                { margin: "", padding: "", border: "Width" },
                                function (e, t) {
                                    (T.cssHooks[e + t] = {
                                        expand: function (n) {
                                            for (
                                                var i = 0,
                                                    r = {},
                                                    o =
                                                        "string" == typeof n
                                                            ? n.split(" ")
                                                            : [n];
                                                i < 4;
                                                i++
                                            )
                                                r[e + he[i] + t] =
                                                    o[i] || o[i - 2] || o[0];
                                            return r;
                                        },
                                    }),
                                        "margin" !== e &&
                                            (T.cssHooks[e + t].set = ct);
                                }
                            ),
                            T.fn.extend({
                                css: function (e, t) {
                                    return ee(
                                        this,
                                        function (e, t, n) {
                                            var i,
                                                r,
                                                o = {},
                                                s = 0;
                                            if (Array.isArray(t)) {
                                                for (
                                                    i = Ve(e), r = t.length;
                                                    s < r;
                                                    s++
                                                )
                                                    o[t[s]] = T.css(
                                                        e,
                                                        t[s],
                                                        !1,
                                                        i
                                                    );
                                                return o;
                                            }
                                            return void 0 !== n
                                                ? T.style(e, t, n)
                                                : T.css(e, t);
                                        },
                                        e,
                                        t,
                                        arguments.length > 1
                                    );
                                },
                            }),
                            (T.Tween = dt),
                            (dt.prototype = {
                                constructor: dt,
                                init: function (e, t, n, i, r, o) {
                                    (this.elem = e),
                                        (this.prop = n),
                                        (this.easing = r || T.easing._default),
                                        (this.options = t),
                                        (this.start = this.now = this.cur()),
                                        (this.end = i),
                                        (this.unit =
                                            o || (T.cssNumber[n] ? "" : "px"));
                                },
                                cur: function () {
                                    var e = dt.propHooks[this.prop];
                                    return e && e.get
                                        ? e.get(this)
                                        : dt.propHooks._default.get(this);
                                },
                                run: function (e) {
                                    var t,
                                        n = dt.propHooks[this.prop];
                                    return (
                                        this.options.duration
                                            ? (this.pos = t =
                                                  T.easing[this.easing](
                                                      e,
                                                      this.options.duration * e,
                                                      0,
                                                      1,
                                                      this.options.duration
                                                  ))
                                            : (this.pos = t = e),
                                        (this.now =
                                            (this.end - this.start) * t +
                                            this.start),
                                        this.options.step &&
                                            this.options.step.call(
                                                this.elem,
                                                this.now,
                                                this
                                            ),
                                        n && n.set
                                            ? n.set(this)
                                            : dt.propHooks._default.set(this),
                                        this
                                    );
                                },
                            }),
                            (dt.prototype.init.prototype = dt.prototype),
                            (dt.propHooks = {
                                _default: {
                                    get: function (e) {
                                        var t;
                                        return 1 !== e.elem.nodeType ||
                                            (null != e.elem[e.prop] &&
                                                null == e.elem.style[e.prop])
                                            ? e.elem[e.prop]
                                            : (t = T.css(e.elem, e.prop, "")) &&
                                              "auto" !== t
                                            ? t
                                            : 0;
                                    },
                                    set: function (e) {
                                        T.fx.step[e.prop]
                                            ? T.fx.step[e.prop](e)
                                            : 1 !== e.elem.nodeType ||
                                              (!T.cssHooks[e.prop] &&
                                                  null ==
                                                      e.elem.style[rt(e.prop)])
                                            ? (e.elem[e.prop] = e.now)
                                            : T.style(
                                                  e.elem,
                                                  e.prop,
                                                  e.now + e.unit
                                              );
                                    },
                                },
                            }),
                            (dt.propHooks.scrollTop = dt.propHooks.scrollLeft =
                                {
                                    set: function (e) {
                                        e.elem.nodeType &&
                                            e.elem.parentNode &&
                                            (e.elem[e.prop] = e.now);
                                    },
                                }),
                            (T.easing = {
                                linear: function (e) {
                                    return e;
                                },
                                swing: function (e) {
                                    return 0.5 - Math.cos(e * Math.PI) / 2;
                                },
                                _default: "swing",
                            }),
                            (T.fx = dt.prototype.init),
                            (T.fx.step = {});
                        var pt,
                            ft,
                            ht = /^(?:toggle|show|hide)$/,
                            mt = /queueHooks$/;
                        function gt() {
                            ft &&
                                (!1 === x.hidden && i.requestAnimationFrame
                                    ? i.requestAnimationFrame(gt)
                                    : i.setTimeout(gt, T.fx.interval),
                                T.fx.tick());
                        }
                        function yt() {
                            return (
                                i.setTimeout(function () {
                                    pt = void 0;
                                }),
                                (pt = Date.now())
                            );
                        }
                        function vt(e, t) {
                            var n,
                                i = 0,
                                r = { height: e };
                            for (t = t ? 1 : 0; i < 4; i += 2 - t)
                                r["margin" + (n = he[i])] = r["padding" + n] =
                                    e;
                            return t && (r.opacity = r.width = e), r;
                        }
                        function xt(e, t, n) {
                            for (
                                var i,
                                    r = (bt.tweeners[t] || []).concat(
                                        bt.tweeners["*"]
                                    ),
                                    o = 0,
                                    s = r.length;
                                o < s;
                                o++
                            )
                                if ((i = r[o].call(n, t, e))) return i;
                        }
                        function bt(e, t, n) {
                            var i,
                                r,
                                o = 0,
                                s = bt.prefilters.length,
                                a = T.Deferred().always(function () {
                                    delete c.elem;
                                }),
                                c = function () {
                                    if (r) return !1;
                                    for (
                                        var t = pt || yt(),
                                            n = Math.max(
                                                0,
                                                u.startTime + u.duration - t
                                            ),
                                            i = 1 - (n / u.duration || 0),
                                            o = 0,
                                            s = u.tweens.length;
                                        o < s;
                                        o++
                                    )
                                        u.tweens[o].run(i);
                                    return (
                                        a.notifyWith(e, [u, i, n]),
                                        i < 1 && s
                                            ? n
                                            : (s || a.notifyWith(e, [u, 1, 0]),
                                              a.resolveWith(e, [u]),
                                              !1)
                                    );
                                },
                                u = a.promise({
                                    elem: e,
                                    props: T.extend({}, t),
                                    opts: T.extend(
                                        !0,
                                        {
                                            specialEasing: {},
                                            easing: T.easing._default,
                                        },
                                        n
                                    ),
                                    originalProperties: t,
                                    originalOptions: n,
                                    startTime: pt || yt(),
                                    duration: n.duration,
                                    tweens: [],
                                    createTween: function (t, n) {
                                        var i = T.Tween(
                                            e,
                                            u.opts,
                                            t,
                                            n,
                                            u.opts.specialEasing[t] ||
                                                u.opts.easing
                                        );
                                        return u.tweens.push(i), i;
                                    },
                                    stop: function (t) {
                                        var n = 0,
                                            i = t ? u.tweens.length : 0;
                                        if (r) return this;
                                        for (r = !0; n < i; n++)
                                            u.tweens[n].run(1);
                                        return (
                                            t
                                                ? (a.notifyWith(e, [u, 1, 0]),
                                                  a.resolveWith(e, [u, t]))
                                                : a.rejectWith(e, [u, t]),
                                            this
                                        );
                                    },
                                }),
                                l = u.props;
                            for (
                                (function (e, t) {
                                    var n, i, r, o, s;
                                    for (n in e)
                                        if (
                                            ((r = t[(i = re(n))]),
                                            (o = e[n]),
                                            Array.isArray(o) &&
                                                ((r = o[1]), (o = e[n] = o[0])),
                                            n !== i &&
                                                ((e[i] = o), delete e[n]),
                                            (s = T.cssHooks[i]) &&
                                                ("expand" in s))
                                        )
                                            for (n in ((o = s.expand(o)),
                                            delete e[i],
                                            o))
                                                (n in e) ||
                                                    ((e[n] = o[n]), (t[n] = r));
                                        else t[i] = r;
                                })(l, u.opts.specialEasing);
                                o < s;
                                o++
                            )
                                if (
                                    (i = bt.prefilters[o].call(u, e, l, u.opts))
                                )
                                    return (
                                        y(i.stop) &&
                                            (T._queueHooks(
                                                u.elem,
                                                u.opts.queue
                                            ).stop = i.stop.bind(i)),
                                        i
                                    );
                            return (
                                T.map(l, xt, u),
                                y(u.opts.start) && u.opts.start.call(e, u),
                                u
                                    .progress(u.opts.progress)
                                    .done(u.opts.done, u.opts.complete)
                                    .fail(u.opts.fail)
                                    .always(u.opts.always),
                                T.fx.timer(
                                    T.extend(c, {
                                        elem: e,
                                        anim: u,
                                        queue: u.opts.queue,
                                    })
                                ),
                                u
                            );
                        }
                        (T.Animation = T.extend(bt, {
                            tweeners: {
                                "*": [
                                    function (e, t) {
                                        var n = this.createTween(e, t);
                                        return xe(n.elem, e, fe.exec(t), n), n;
                                    },
                                ],
                            },
                            tweener: function (e, t) {
                                y(e)
                                    ? ((t = e), (e = ["*"]))
                                    : (e = e.match(Y));
                                for (var n, i = 0, r = e.length; i < r; i++)
                                    (n = e[i]),
                                        (bt.tweeners[n] = bt.tweeners[n] || []),
                                        bt.tweeners[n].unshift(t);
                            },
                            prefilters: [
                                function (e, t, n) {
                                    var i,
                                        r,
                                        o,
                                        s,
                                        a,
                                        c,
                                        u,
                                        l,
                                        d = "width" in t || "height" in t,
                                        p = this,
                                        f = {},
                                        h = e.style,
                                        m = e.nodeType && ve(e),
                                        g = ae.get(e, "fxshow");
                                    for (i in (n.queue ||
                                        (null ==
                                            (s = T._queueHooks(e, "fx"))
                                                .unqueued &&
                                            ((s.unqueued = 0),
                                            (a = s.empty.fire),
                                            (s.empty.fire = function () {
                                                s.unqueued || a();
                                            })),
                                        s.unqueued++,
                                        p.always(function () {
                                            p.always(function () {
                                                s.unqueued--,
                                                    T.queue(e, "fx").length ||
                                                        s.empty.fire();
                                            });
                                        })),
                                    t))
                                        if (((r = t[i]), ht.test(r))) {
                                            if (
                                                (delete t[i],
                                                (o = o || "toggle" === r),
                                                r === (m ? "hide" : "show"))
                                            ) {
                                                if (
                                                    "show" !== r ||
                                                    !g ||
                                                    void 0 === g[i]
                                                )
                                                    continue;
                                                m = !0;
                                            }
                                            f[i] = (g && g[i]) || T.style(e, i);
                                        }
                                    if (
                                        (c = !T.isEmptyObject(t)) ||
                                        !T.isEmptyObject(f)
                                    )
                                        for (i in (d &&
                                            1 === e.nodeType &&
                                            ((n.overflow = [
                                                h.overflow,
                                                h.overflowX,
                                                h.overflowY,
                                            ]),
                                            null == (u = g && g.display) &&
                                                (u = ae.get(e, "display")),
                                            "none" ===
                                                (l = T.css(e, "display")) &&
                                                (u
                                                    ? (l = u)
                                                    : (Ee([e], !0),
                                                      (u =
                                                          e.style.display || u),
                                                      (l = T.css(e, "display")),
                                                      Ee([e]))),
                                            ("inline" === l ||
                                                ("inline-block" === l &&
                                                    null != u)) &&
                                                "none" === T.css(e, "float") &&
                                                (c ||
                                                    (p.done(function () {
                                                        h.display = u;
                                                    }),
                                                    null == u &&
                                                        ((l = h.display),
                                                        (u =
                                                            "none" === l
                                                                ? ""
                                                                : l))),
                                                (h.display = "inline-block"))),
                                        n.overflow &&
                                            ((h.overflow = "hidden"),
                                            p.always(function () {
                                                (h.overflow = n.overflow[0]),
                                                    (h.overflowX =
                                                        n.overflow[1]),
                                                    (h.overflowY =
                                                        n.overflow[2]);
                                            })),
                                        (c = !1),
                                        f))
                                            c ||
                                                (g
                                                    ? "hidden" in g &&
                                                      (m = g.hidden)
                                                    : (g = ae.access(
                                                          e,
                                                          "fxshow",
                                                          { display: u }
                                                      )),
                                                o && (g.hidden = !m),
                                                m && Ee([e], !0),
                                                p.done(function () {
                                                    for (i in (m || Ee([e]),
                                                    ae.remove(e, "fxshow"),
                                                    f))
                                                        T.style(e, i, f[i]);
                                                })),
                                                (c = xt(m ? g[i] : 0, i, p)),
                                                i in g ||
                                                    ((g[i] = c.start),
                                                    m &&
                                                        ((c.end = c.start),
                                                        (c.start = 0)));
                                },
                            ],
                            prefilter: function (e, t) {
                                t
                                    ? bt.prefilters.unshift(e)
                                    : bt.prefilters.push(e);
                            },
                        })),
                            (T.speed = function (e, t, n) {
                                var i =
                                    e && "object" == typeof e
                                        ? T.extend({}, e)
                                        : {
                                              complete:
                                                  n || (!n && t) || (y(e) && e),
                                              duration: e,
                                              easing:
                                                  (n && t) || (t && !y(t) && t),
                                          };
                                return (
                                    T.fx.off
                                        ? (i.duration = 0)
                                        : "number" != typeof i.duration &&
                                          (i.duration in T.fx.speeds
                                              ? (i.duration =
                                                    T.fx.speeds[i.duration])
                                              : (i.duration =
                                                    T.fx.speeds._default)),
                                    (null != i.queue && !0 !== i.queue) ||
                                        (i.queue = "fx"),
                                    (i.old = i.complete),
                                    (i.complete = function () {
                                        y(i.old) && i.old.call(this),
                                            i.queue && T.dequeue(this, i.queue);
                                    }),
                                    i
                                );
                            }),
                            T.fn.extend({
                                fadeTo: function (e, t, n, i) {
                                    return this.filter(ve)
                                        .css("opacity", 0)
                                        .show()
                                        .end()
                                        .animate({ opacity: t }, e, n, i);
                                },
                                animate: function (e, t, n, i) {
                                    var r = T.isEmptyObject(e),
                                        o = T.speed(t, n, i),
                                        s = function () {
                                            var t = bt(
                                                this,
                                                T.extend({}, e),
                                                o
                                            );
                                            (r || ae.get(this, "finish")) &&
                                                t.stop(!0);
                                        };
                                    return (
                                        (s.finish = s),
                                        r || !1 === o.queue
                                            ? this.each(s)
                                            : this.queue(o.queue, s)
                                    );
                                },
                                stop: function (e, t, n) {
                                    var i = function (e) {
                                        var t = e.stop;
                                        delete e.stop, t(n);
                                    };
                                    return (
                                        "string" != typeof e &&
                                            ((n = t), (t = e), (e = void 0)),
                                        t && this.queue(e || "fx", []),
                                        this.each(function () {
                                            var t = !0,
                                                r =
                                                    null != e &&
                                                    e + "queueHooks",
                                                o = T.timers,
                                                s = ae.get(this);
                                            if (r) s[r] && s[r].stop && i(s[r]);
                                            else
                                                for (r in s)
                                                    s[r] &&
                                                        s[r].stop &&
                                                        mt.test(r) &&
                                                        i(s[r]);
                                            for (r = o.length; r--; )
                                                o[r].elem !== this ||
                                                    (null != e &&
                                                        o[r].queue !== e) ||
                                                    (o[r].anim.stop(n),
                                                    (t = !1),
                                                    o.splice(r, 1));
                                            (!t && n) || T.dequeue(this, e);
                                        })
                                    );
                                },
                                finish: function (e) {
                                    return (
                                        !1 !== e && (e = e || "fx"),
                                        this.each(function () {
                                            var t,
                                                n = ae.get(this),
                                                i = n[e + "queue"],
                                                r = n[e + "queueHooks"],
                                                o = T.timers,
                                                s = i ? i.length : 0;
                                            for (
                                                n.finish = !0,
                                                    T.queue(this, e, []),
                                                    r &&
                                                        r.stop &&
                                                        r.stop.call(this, !0),
                                                    t = o.length;
                                                t--;

                                            )
                                                o[t].elem === this &&
                                                    o[t].queue === e &&
                                                    (o[t].anim.stop(!0),
                                                    o.splice(t, 1));
                                            for (t = 0; t < s; t++)
                                                i[t] &&
                                                    i[t].finish &&
                                                    i[t].finish.call(this);
                                            delete n.finish;
                                        })
                                    );
                                },
                            }),
                            T.each(["toggle", "show", "hide"], function (e, t) {
                                var n = T.fn[t];
                                T.fn[t] = function (e, i, r) {
                                    return null == e || "boolean" == typeof e
                                        ? n.apply(this, arguments)
                                        : this.animate(vt(t, !0), e, i, r);
                                };
                            }),
                            T.each(
                                {
                                    slideDown: vt("show"),
                                    slideUp: vt("hide"),
                                    slideToggle: vt("toggle"),
                                    fadeIn: { opacity: "show" },
                                    fadeOut: { opacity: "hide" },
                                    fadeToggle: { opacity: "toggle" },
                                },
                                function (e, t) {
                                    T.fn[e] = function (e, n, i) {
                                        return this.animate(t, e, n, i);
                                    };
                                }
                            ),
                            (T.timers = []),
                            (T.fx.tick = function () {
                                var e,
                                    t = 0,
                                    n = T.timers;
                                for (pt = Date.now(); t < n.length; t++)
                                    (e = n[t])() ||
                                        n[t] !== e ||
                                        n.splice(t--, 1);
                                n.length || T.fx.stop(), (pt = void 0);
                            }),
                            (T.fx.timer = function (e) {
                                T.timers.push(e), T.fx.start();
                            }),
                            (T.fx.interval = 13),
                            (T.fx.start = function () {
                                ft || ((ft = !0), gt());
                            }),
                            (T.fx.stop = function () {
                                ft = null;
                            }),
                            (T.fx.speeds = {
                                slow: 600,
                                fast: 200,
                                _default: 400,
                            }),
                            (T.fn.delay = function (e, t) {
                                return (
                                    (e = (T.fx && T.fx.speeds[e]) || e),
                                    (t = t || "fx"),
                                    this.queue(t, function (t, n) {
                                        var r = i.setTimeout(t, e);
                                        n.stop = function () {
                                            i.clearTimeout(r);
                                        };
                                    })
                                );
                            }),
                            (function () {
                                var e = x.createElement("input"),
                                    t = x
                                        .createElement("select")
                                        .appendChild(x.createElement("option"));
                                (e.type = "checkbox"),
                                    (g.checkOn = "" !== e.value),
                                    (g.optSelected = t.selected),
                                    ((e = x.createElement("input")).value =
                                        "t"),
                                    (e.type = "radio"),
                                    (g.radioValue = "t" === e.value);
                            })();
                        var wt,
                            Et = T.expr.attrHandle;
                        T.fn.extend({
                            attr: function (e, t) {
                                return ee(
                                    this,
                                    T.attr,
                                    e,
                                    t,
                                    arguments.length > 1
                                );
                            },
                            removeAttr: function (e) {
                                return this.each(function () {
                                    T.removeAttr(this, e);
                                });
                            },
                        }),
                            T.extend({
                                attr: function (e, t, n) {
                                    var i,
                                        r,
                                        o = e.nodeType;
                                    if (3 !== o && 8 !== o && 2 !== o)
                                        return void 0 === e.getAttribute
                                            ? T.prop(e, t, n)
                                            : ((1 === o && T.isXMLDoc(e)) ||
                                                  (r =
                                                      T.attrHooks[
                                                          t.toLowerCase()
                                                      ] ||
                                                      (T.expr.match.bool.test(t)
                                                          ? wt
                                                          : void 0)),
                                              void 0 !== n
                                                  ? null === n
                                                      ? void T.removeAttr(e, t)
                                                      : r &&
                                                        "set" in r &&
                                                        void 0 !==
                                                            (i = r.set(e, n, t))
                                                      ? i
                                                      : (e.setAttribute(
                                                            t,
                                                            n + ""
                                                        ),
                                                        n)
                                                  : r &&
                                                    "get" in r &&
                                                    null !== (i = r.get(e, t))
                                                  ? i
                                                  : null ==
                                                    (i = T.find.attr(e, t))
                                                  ? void 0
                                                  : i);
                                },
                                attrHooks: {
                                    type: {
                                        set: function (e, t) {
                                            if (
                                                !g.radioValue &&
                                                "radio" === t &&
                                                k(e, "input")
                                            ) {
                                                var n = e.value;
                                                return (
                                                    e.setAttribute("type", t),
                                                    n && (e.value = n),
                                                    t
                                                );
                                            }
                                        },
                                    },
                                },
                                removeAttr: function (e, t) {
                                    var n,
                                        i = 0,
                                        r = t && t.match(Y);
                                    if (r && 1 === e.nodeType)
                                        for (; (n = r[i++]); )
                                            e.removeAttribute(n);
                                },
                            }),
                            (wt = {
                                set: function (e, t, n) {
                                    return (
                                        !1 === t
                                            ? T.removeAttr(e, n)
                                            : e.setAttribute(n, n),
                                        n
                                    );
                                },
                            }),
                            T.each(
                                T.expr.match.bool.source.match(/\w+/g),
                                function (e, t) {
                                    var n = Et[t] || T.find.attr;
                                    Et[t] = function (e, t, i) {
                                        var r,
                                            o,
                                            s = t.toLowerCase();
                                        return (
                                            i ||
                                                ((o = Et[s]),
                                                (Et[s] = r),
                                                (r =
                                                    null != n(e, t, i)
                                                        ? s
                                                        : null),
                                                (Et[s] = o)),
                                            r
                                        );
                                    };
                                }
                            );
                        var St = /^(?:input|select|textarea|button)$/i,
                            _t = /^(?:a|area)$/i;
                        function Tt(e) {
                            return (e.match(Y) || []).join(" ");
                        }
                        function Ct(e) {
                            return (
                                (e.getAttribute && e.getAttribute("class")) ||
                                ""
                            );
                        }
                        function kt(e) {
                            return Array.isArray(e)
                                ? e
                                : ("string" == typeof e && e.match(Y)) || [];
                        }
                        T.fn.extend({
                            prop: function (e, t) {
                                return ee(
                                    this,
                                    T.prop,
                                    e,
                                    t,
                                    arguments.length > 1
                                );
                            },
                            removeProp: function (e) {
                                return this.each(function () {
                                    delete this[T.propFix[e] || e];
                                });
                            },
                        }),
                            T.extend({
                                prop: function (e, t, n) {
                                    var i,
                                        r,
                                        o = e.nodeType;
                                    if (3 !== o && 8 !== o && 2 !== o)
                                        return (
                                            (1 === o && T.isXMLDoc(e)) ||
                                                ((t = T.propFix[t] || t),
                                                (r = T.propHooks[t])),
                                            void 0 !== n
                                                ? r &&
                                                  "set" in r &&
                                                  void 0 !==
                                                      (i = r.set(e, n, t))
                                                    ? i
                                                    : (e[t] = n)
                                                : r &&
                                                  "get" in r &&
                                                  null !== (i = r.get(e, t))
                                                ? i
                                                : e[t]
                                        );
                                },
                                propHooks: {
                                    tabIndex: {
                                        get: function (e) {
                                            var t = T.find.attr(e, "tabindex");
                                            return t
                                                ? parseInt(t, 10)
                                                : St.test(e.nodeName) ||
                                                  (_t.test(e.nodeName) &&
                                                      e.href)
                                                ? 0
                                                : -1;
                                        },
                                    },
                                },
                                propFix: { for: "htmlFor", class: "className" },
                            }),
                            g.optSelected ||
                                (T.propHooks.selected = {
                                    get: function (e) {
                                        var t = e.parentNode;
                                        return (
                                            t &&
                                                t.parentNode &&
                                                t.parentNode.selectedIndex,
                                            null
                                        );
                                    },
                                    set: function (e) {
                                        var t = e.parentNode;
                                        t &&
                                            (t.selectedIndex,
                                            t.parentNode &&
                                                t.parentNode.selectedIndex);
                                    },
                                }),
                            T.each(
                                [
                                    "tabIndex",
                                    "readOnly",
                                    "maxLength",
                                    "cellSpacing",
                                    "cellPadding",
                                    "rowSpan",
                                    "colSpan",
                                    "useMap",
                                    "frameBorder",
                                    "contentEditable",
                                ],
                                function () {
                                    T.propFix[this.toLowerCase()] = this;
                                }
                            ),
                            T.fn.extend({
                                addClass: function (e) {
                                    var t, n, i, r, o, s;
                                    return y(e)
                                        ? this.each(function (t) {
                                              T(this).addClass(
                                                  e.call(this, t, Ct(this))
                                              );
                                          })
                                        : (t = kt(e)).length
                                        ? this.each(function () {
                                              if (
                                                  ((i = Ct(this)),
                                                  (n =
                                                      1 === this.nodeType &&
                                                      " " + Tt(i) + " "))
                                              ) {
                                                  for (o = 0; o < t.length; o++)
                                                      (r = t[o]),
                                                          n.indexOf(
                                                              " " + r + " "
                                                          ) < 0 &&
                                                              (n += r + " ");
                                                  (s = Tt(n)),
                                                      i !== s &&
                                                          this.setAttribute(
                                                              "class",
                                                              s
                                                          );
                                              }
                                          })
                                        : this;
                                },
                                removeClass: function (e) {
                                    var t, n, i, r, o, s;
                                    return y(e)
                                        ? this.each(function (t) {
                                              T(this).removeClass(
                                                  e.call(this, t, Ct(this))
                                              );
                                          })
                                        : arguments.length
                                        ? (t = kt(e)).length
                                            ? this.each(function () {
                                                  if (
                                                      ((i = Ct(this)),
                                                      (n =
                                                          1 === this.nodeType &&
                                                          " " + Tt(i) + " "))
                                                  ) {
                                                      for (
                                                          o = 0;
                                                          o < t.length;
                                                          o++
                                                      )
                                                          for (
                                                              r = t[o];
                                                              n.indexOf(
                                                                  " " + r + " "
                                                              ) > -1;

                                                          )
                                                              n = n.replace(
                                                                  " " + r + " ",
                                                                  " "
                                                              );
                                                      (s = Tt(n)),
                                                          i !== s &&
                                                              this.setAttribute(
                                                                  "class",
                                                                  s
                                                              );
                                                  }
                                              })
                                            : this
                                        : this.attr("class", "");
                                },
                                toggleClass: function (e, t) {
                                    var n,
                                        i,
                                        r,
                                        o,
                                        s = typeof e,
                                        a = "string" === s || Array.isArray(e);
                                    return y(e)
                                        ? this.each(function (n) {
                                              T(this).toggleClass(
                                                  e.call(this, n, Ct(this), t),
                                                  t
                                              );
                                          })
                                        : "boolean" == typeof t && a
                                        ? t
                                            ? this.addClass(e)
                                            : this.removeClass(e)
                                        : ((n = kt(e)),
                                          this.each(function () {
                                              if (a)
                                                  for (
                                                      o = T(this), r = 0;
                                                      r < n.length;
                                                      r++
                                                  )
                                                      (i = n[r]),
                                                          o.hasClass(i)
                                                              ? o.removeClass(i)
                                                              : o.addClass(i);
                                              else
                                                  (void 0 !== e &&
                                                      "boolean" !== s) ||
                                                      ((i = Ct(this)) &&
                                                          ae.set(
                                                              this,
                                                              "__className__",
                                                              i
                                                          ),
                                                      this.setAttribute &&
                                                          this.setAttribute(
                                                              "class",
                                                              i || !1 === e
                                                                  ? ""
                                                                  : ae.get(
                                                                        this,
                                                                        "__className__"
                                                                    ) || ""
                                                          ));
                                          }));
                                },
                                hasClass: function (e) {
                                    var t,
                                        n,
                                        i = 0;
                                    for (t = " " + e + " "; (n = this[i++]); )
                                        if (
                                            1 === n.nodeType &&
                                            (" " + Tt(Ct(n)) + " ").indexOf(t) >
                                                -1
                                        )
                                            return !0;
                                    return !1;
                                },
                            });
                        var Lt = /\r/g;
                        T.fn.extend({
                            val: function (e) {
                                var t,
                                    n,
                                    i,
                                    r = this[0];
                                return arguments.length
                                    ? ((i = y(e)),
                                      this.each(function (n) {
                                          var r;
                                          1 === this.nodeType &&
                                              (null ==
                                              (r = i
                                                  ? e.call(
                                                        this,
                                                        n,
                                                        T(this).val()
                                                    )
                                                  : e)
                                                  ? (r = "")
                                                  : "number" == typeof r
                                                  ? (r += "")
                                                  : Array.isArray(r) &&
                                                    (r = T.map(r, function (e) {
                                                        return null == e
                                                            ? ""
                                                            : e + "";
                                                    })),
                                              ((t =
                                                  T.valHooks[this.type] ||
                                                  T.valHooks[
                                                      this.nodeName.toLowerCase()
                                                  ]) &&
                                                  "set" in t &&
                                                  void 0 !==
                                                      t.set(
                                                          this,
                                                          r,
                                                          "value"
                                                      )) ||
                                                  (this.value = r));
                                      }))
                                    : r
                                    ? (t =
                                          T.valHooks[r.type] ||
                                          T.valHooks[
                                              r.nodeName.toLowerCase()
                                          ]) &&
                                      "get" in t &&
                                      void 0 !== (n = t.get(r, "value"))
                                        ? n
                                        : "string" == typeof (n = r.value)
                                        ? n.replace(Lt, "")
                                        : null == n
                                        ? ""
                                        : n
                                    : void 0;
                            },
                        }),
                            T.extend({
                                valHooks: {
                                    option: {
                                        get: function (e) {
                                            var t = T.find.attr(e, "value");
                                            return null != t
                                                ? t
                                                : Tt(T.text(e));
                                        },
                                    },
                                    select: {
                                        get: function (e) {
                                            var t,
                                                n,
                                                i,
                                                r = e.options,
                                                o = e.selectedIndex,
                                                s = "select-one" === e.type,
                                                a = s ? null : [],
                                                c = s ? o + 1 : r.length;
                                            for (
                                                i = o < 0 ? c : s ? o : 0;
                                                i < c;
                                                i++
                                            )
                                                if (
                                                    ((n = r[i]).selected ||
                                                        i === o) &&
                                                    !n.disabled &&
                                                    (!n.parentNode.disabled ||
                                                        !k(
                                                            n.parentNode,
                                                            "optgroup"
                                                        ))
                                                ) {
                                                    if (((t = T(n).val()), s))
                                                        return t;
                                                    a.push(t);
                                                }
                                            return a;
                                        },
                                        set: function (e, t) {
                                            for (
                                                var n,
                                                    i,
                                                    r = e.options,
                                                    o = T.makeArray(t),
                                                    s = r.length;
                                                s--;

                                            )
                                                ((i = r[s]).selected =
                                                    T.inArray(
                                                        T.valHooks.option.get(
                                                            i
                                                        ),
                                                        o
                                                    ) > -1) && (n = !0);
                                            return (
                                                n || (e.selectedIndex = -1), o
                                            );
                                        },
                                    },
                                },
                            }),
                            T.each(["radio", "checkbox"], function () {
                                (T.valHooks[this] = {
                                    set: function (e, t) {
                                        if (Array.isArray(t))
                                            return (e.checked =
                                                T.inArray(T(e).val(), t) > -1);
                                    },
                                }),
                                    g.checkOn ||
                                        (T.valHooks[this].get = function (e) {
                                            return null ===
                                                e.getAttribute("value")
                                                ? "on"
                                                : e.value;
                                        });
                            });
                        var qt = i.location,
                            At = { guid: Date.now() },
                            Dt = /\?/;
                        T.parseXML = function (e) {
                            var t, n;
                            if (!e || "string" != typeof e) return null;
                            try {
                                t = new i.DOMParser().parseFromString(
                                    e,
                                    "text/xml"
                                );
                            } catch (e) {}
                            return (
                                (n =
                                    t &&
                                    t.getElementsByTagName("parsererror")[0]),
                                (t && !n) ||
                                    T.error(
                                        "Invalid XML: " +
                                            (n
                                                ? T.map(
                                                      n.childNodes,
                                                      function (e) {
                                                          return e.textContent;
                                                      }
                                                  ).join("\n")
                                                : e)
                                    ),
                                t
                            );
                        };
                        var Nt = /^(?:focusinfocus|focusoutblur)$/,
                            jt = function (e) {
                                e.stopPropagation();
                            };
                        T.extend(T.event, {
                            trigger: function (e, t, n, r) {
                                var o,
                                    s,
                                    a,
                                    c,
                                    u,
                                    l,
                                    d,
                                    p,
                                    h = [n || x],
                                    m = f.call(e, "type") ? e.type : e,
                                    g = f.call(e, "namespace")
                                        ? e.namespace.split(".")
                                        : [];
                                if (
                                    ((s = p = a = n = n || x),
                                    3 !== n.nodeType &&
                                        8 !== n.nodeType &&
                                        !Nt.test(m + T.event.triggered) &&
                                        (m.indexOf(".") > -1 &&
                                            ((g = m.split(".")),
                                            (m = g.shift()),
                                            g.sort()),
                                        (u = m.indexOf(":") < 0 && "on" + m),
                                        ((e = e[T.expando]
                                            ? e
                                            : new T.Event(
                                                  m,
                                                  "object" == typeof e && e
                                              )).isTrigger = r ? 2 : 3),
                                        (e.namespace = g.join(".")),
                                        (e.rnamespace = e.namespace
                                            ? new RegExp(
                                                  "(^|\\.)" +
                                                      g.join("\\.(?:.*\\.|)") +
                                                      "(\\.|$)"
                                              )
                                            : null),
                                        (e.result = void 0),
                                        e.target || (e.target = n),
                                        (t =
                                            null == t
                                                ? [e]
                                                : T.makeArray(t, [e])),
                                        (d = T.event.special[m] || {}),
                                        r ||
                                            !d.trigger ||
                                            !1 !== d.trigger.apply(n, t)))
                                ) {
                                    if (!r && !d.noBubble && !v(n)) {
                                        for (
                                            c = d.delegateType || m,
                                                Nt.test(c + m) ||
                                                    (s = s.parentNode);
                                            s;
                                            s = s.parentNode
                                        )
                                            h.push(s), (a = s);
                                        a === (n.ownerDocument || x) &&
                                            h.push(
                                                a.defaultView ||
                                                    a.parentWindow ||
                                                    i
                                            );
                                    }
                                    for (
                                        o = 0;
                                        (s = h[o++]) &&
                                        !e.isPropagationStopped();

                                    )
                                        (p = s),
                                            (e.type =
                                                o > 1 ? c : d.bindType || m),
                                            (l =
                                                (ae.get(s, "events") ||
                                                    Object.create(null))[
                                                    e.type
                                                ] && ae.get(s, "handle")) &&
                                                l.apply(s, t),
                                            (l = u && s[u]) &&
                                                l.apply &&
                                                oe(s) &&
                                                ((e.result = l.apply(s, t)),
                                                !1 === e.result &&
                                                    e.preventDefault());
                                    return (
                                        (e.type = m),
                                        r ||
                                            e.isDefaultPrevented() ||
                                            (d._default &&
                                                !1 !==
                                                    d._default.apply(
                                                        h.pop(),
                                                        t
                                                    )) ||
                                            !oe(n) ||
                                            (u &&
                                                y(n[m]) &&
                                                !v(n) &&
                                                ((a = n[u]) && (n[u] = null),
                                                (T.event.triggered = m),
                                                e.isPropagationStopped() &&
                                                    p.addEventListener(m, jt),
                                                n[m](),
                                                e.isPropagationStopped() &&
                                                    p.removeEventListener(
                                                        m,
                                                        jt
                                                    ),
                                                (T.event.triggered = void 0),
                                                a && (n[u] = a))),
                                        e.result
                                    );
                                }
                            },
                            simulate: function (e, t, n) {
                                var i = T.extend(new T.Event(), n, {
                                    type: e,
                                    isSimulated: !0,
                                });
                                T.event.trigger(i, null, t);
                            },
                        }),
                            T.fn.extend({
                                trigger: function (e, t) {
                                    return this.each(function () {
                                        T.event.trigger(e, t, this);
                                    });
                                },
                                triggerHandler: function (e, t) {
                                    var n = this[0];
                                    if (n) return T.event.trigger(e, t, n, !0);
                                },
                            });
                        var Ot = /\[\]$/,
                            Ht = /\r?\n/g,
                            It = /^(?:submit|button|image|reset|file)$/i,
                            Mt = /^(?:input|select|textarea|keygen)/i;
                        function Rt(e, t, n, i) {
                            var r;
                            if (Array.isArray(t))
                                T.each(t, function (t, r) {
                                    n || Ot.test(e)
                                        ? i(e, r)
                                        : Rt(
                                              e +
                                                  "[" +
                                                  ("object" == typeof r &&
                                                  null != r
                                                      ? t
                                                      : "") +
                                                  "]",
                                              r,
                                              n,
                                              i
                                          );
                                });
                            else if (n || "object" !== E(t)) i(e, t);
                            else for (r in t) Rt(e + "[" + r + "]", t[r], n, i);
                        }
                        (T.param = function (e, t) {
                            var n,
                                i = [],
                                r = function (e, t) {
                                    var n = y(t) ? t() : t;
                                    i[i.length] =
                                        encodeURIComponent(e) +
                                        "=" +
                                        encodeURIComponent(null == n ? "" : n);
                                };
                            if (null == e) return "";
                            if (
                                Array.isArray(e) ||
                                (e.jquery && !T.isPlainObject(e))
                            )
                                T.each(e, function () {
                                    r(this.name, this.value);
                                });
                            else for (n in e) Rt(n, e[n], t, r);
                            return i.join("&");
                        }),
                            T.fn.extend({
                                serialize: function () {
                                    return T.param(this.serializeArray());
                                },
                                serializeArray: function () {
                                    return this.map(function () {
                                        var e = T.prop(this, "elements");
                                        return e ? T.makeArray(e) : this;
                                    })
                                        .filter(function () {
                                            var e = this.type;
                                            return (
                                                this.name &&
                                                !T(this).is(":disabled") &&
                                                Mt.test(this.nodeName) &&
                                                !It.test(e) &&
                                                (this.checked || !Te.test(e))
                                            );
                                        })
                                        .map(function (e, t) {
                                            var n = T(this).val();
                                            return null == n
                                                ? null
                                                : Array.isArray(n)
                                                ? T.map(n, function (e) {
                                                      return {
                                                          name: t.name,
                                                          value: e.replace(
                                                              Ht,
                                                              "\r\n"
                                                          ),
                                                      };
                                                  })
                                                : {
                                                      name: t.name,
                                                      value: n.replace(
                                                          Ht,
                                                          "\r\n"
                                                      ),
                                                  };
                                        })
                                        .get();
                                },
                            });
                        var Pt = /%20/g,
                            Wt = /#.*$/,
                            $t = /([?&])_=[^&]*/,
                            zt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                            Bt = /^(?:GET|HEAD)$/,
                            Ft = /^\/\//,
                            Gt = {},
                            Qt = {},
                            Yt = "*/".concat("*"),
                            Ut = x.createElement("a");
                        function Xt(e) {
                            return function (t, n) {
                                "string" != typeof t && ((n = t), (t = "*"));
                                var i,
                                    r = 0,
                                    o = t.toLowerCase().match(Y) || [];
                                if (y(n))
                                    for (; (i = o[r++]); )
                                        "+" === i[0]
                                            ? ((i = i.slice(1) || "*"),
                                              (e[i] = e[i] || []).unshift(n))
                                            : (e[i] = e[i] || []).push(n);
                            };
                        }
                        function Vt(e, t, n, i) {
                            var r = {},
                                o = e === Qt;
                            function s(a) {
                                var c;
                                return (
                                    (r[a] = !0),
                                    T.each(e[a] || [], function (e, a) {
                                        var u = a(t, n, i);
                                        return "string" != typeof u || o || r[u]
                                            ? o
                                                ? !(c = u)
                                                : void 0
                                            : (t.dataTypes.unshift(u),
                                              s(u),
                                              !1);
                                    }),
                                    c
                                );
                            }
                            return s(t.dataTypes[0]) || (!r["*"] && s("*"));
                        }
                        function Kt(e, t) {
                            var n,
                                i,
                                r = T.ajaxSettings.flatOptions || {};
                            for (n in t)
                                void 0 !== t[n] &&
                                    ((r[n] ? e : i || (i = {}))[n] = t[n]);
                            return i && T.extend(!0, e, i), e;
                        }
                        (Ut.href = qt.href),
                            T.extend({
                                active: 0,
                                lastModified: {},
                                etag: {},
                                ajaxSettings: {
                                    url: qt.href,
                                    type: "GET",
                                    isLocal:
                                        /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                                            qt.protocol
                                        ),
                                    global: !0,
                                    processData: !0,
                                    async: !0,
                                    contentType:
                                        "application/x-www-form-urlencoded; charset=UTF-8",
                                    accepts: {
                                        "*": Yt,
                                        text: "text/plain",
                                        html: "text/html",
                                        xml: "application/xml, text/xml",
                                        json: "application/json, text/javascript",
                                    },
                                    contents: {
                                        xml: /\bxml\b/,
                                        html: /\bhtml/,
                                        json: /\bjson\b/,
                                    },
                                    responseFields: {
                                        xml: "responseXML",
                                        text: "responseText",
                                        json: "responseJSON",
                                    },
                                    converters: {
                                        "* text": String,
                                        "text html": !0,
                                        "text json": JSON.parse,
                                        "text xml": T.parseXML,
                                    },
                                    flatOptions: { url: !0, context: !0 },
                                },
                                ajaxSetup: function (e, t) {
                                    return t
                                        ? Kt(Kt(e, T.ajaxSettings), t)
                                        : Kt(T.ajaxSettings, e);
                                },
                                ajaxPrefilter: Xt(Gt),
                                ajaxTransport: Xt(Qt),
                                ajax: function (e, t) {
                                    "object" == typeof e &&
                                        ((t = e), (e = void 0)),
                                        (t = t || {});
                                    var n,
                                        r,
                                        o,
                                        s,
                                        a,
                                        c,
                                        u,
                                        l,
                                        d,
                                        p,
                                        f = T.ajaxSetup({}, t),
                                        h = f.context || f,
                                        m =
                                            f.context &&
                                            (h.nodeType || h.jquery)
                                                ? T(h)
                                                : T.event,
                                        g = T.Deferred(),
                                        y = T.Callbacks("once memory"),
                                        v = f.statusCode || {},
                                        b = {},
                                        w = {},
                                        E = "canceled",
                                        S = {
                                            readyState: 0,
                                            getResponseHeader: function (e) {
                                                var t;
                                                if (u) {
                                                    if (!s)
                                                        for (
                                                            s = {};
                                                            (t = zt.exec(o));

                                                        )
                                                            s[
                                                                t[1].toLowerCase() +
                                                                    " "
                                                            ] = (
                                                                s[
                                                                    t[1].toLowerCase() +
                                                                        " "
                                                                ] || []
                                                            ).concat(t[2]);
                                                    t =
                                                        s[
                                                            e.toLowerCase() +
                                                                " "
                                                        ];
                                                }
                                                return null == t
                                                    ? null
                                                    : t.join(", ");
                                            },
                                            getAllResponseHeaders: function () {
                                                return u ? o : null;
                                            },
                                            setRequestHeader: function (e, t) {
                                                return (
                                                    null == u &&
                                                        ((e = w[
                                                            e.toLowerCase()
                                                        ] =
                                                            w[
                                                                e.toLowerCase()
                                                            ] || e),
                                                        (b[e] = t)),
                                                    this
                                                );
                                            },
                                            overrideMimeType: function (e) {
                                                return (
                                                    null == u &&
                                                        (f.mimeType = e),
                                                    this
                                                );
                                            },
                                            statusCode: function (e) {
                                                var t;
                                                if (e)
                                                    if (u)
                                                        S.always(e[S.status]);
                                                    else
                                                        for (t in e)
                                                            v[t] = [v[t], e[t]];
                                                return this;
                                            },
                                            abort: function (e) {
                                                var t = e || E;
                                                return (
                                                    n && n.abort(t),
                                                    _(0, t),
                                                    this
                                                );
                                            },
                                        };
                                    if (
                                        (g.promise(S),
                                        (f.url = (
                                            (e || f.url || qt.href) + ""
                                        ).replace(Ft, qt.protocol + "//")),
                                        (f.type =
                                            t.method ||
                                            t.type ||
                                            f.method ||
                                            f.type),
                                        (f.dataTypes = (f.dataType || "*")
                                            .toLowerCase()
                                            .match(Y) || [""]),
                                        null == f.crossDomain)
                                    ) {
                                        c = x.createElement("a");
                                        try {
                                            (c.href = f.url),
                                                (c.href = c.href),
                                                (f.crossDomain =
                                                    Ut.protocol +
                                                        "//" +
                                                        Ut.host !=
                                                    c.protocol + "//" + c.host);
                                        } catch (e) {
                                            f.crossDomain = !0;
                                        }
                                    }
                                    if (
                                        (f.data &&
                                            f.processData &&
                                            "string" != typeof f.data &&
                                            (f.data = T.param(
                                                f.data,
                                                f.traditional
                                            )),
                                        Vt(Gt, f, t, S),
                                        u)
                                    )
                                        return S;
                                    for (d in ((l = T.event && f.global) &&
                                        0 == T.active++ &&
                                        T.event.trigger("ajaxStart"),
                                    (f.type = f.type.toUpperCase()),
                                    (f.hasContent = !Bt.test(f.type)),
                                    (r = f.url.replace(Wt, "")),
                                    f.hasContent
                                        ? f.data &&
                                          f.processData &&
                                          0 ===
                                              (f.contentType || "").indexOf(
                                                  "application/x-www-form-urlencoded"
                                              ) &&
                                          (f.data = f.data.replace(Pt, "+"))
                                        : ((p = f.url.slice(r.length)),
                                          f.data &&
                                              (f.processData ||
                                                  "string" == typeof f.data) &&
                                              ((r +=
                                                  (Dt.test(r) ? "&" : "?") +
                                                  f.data),
                                              delete f.data),
                                          !1 === f.cache &&
                                              ((r = r.replace($t, "$1")),
                                              (p =
                                                  (Dt.test(r) ? "&" : "?") +
                                                  "_=" +
                                                  At.guid++ +
                                                  p)),
                                          (f.url = r + p)),
                                    f.ifModified &&
                                        (T.lastModified[r] &&
                                            S.setRequestHeader(
                                                "If-Modified-Since",
                                                T.lastModified[r]
                                            ),
                                        T.etag[r] &&
                                            S.setRequestHeader(
                                                "If-None-Match",
                                                T.etag[r]
                                            )),
                                    ((f.data &&
                                        f.hasContent &&
                                        !1 !== f.contentType) ||
                                        t.contentType) &&
                                        S.setRequestHeader(
                                            "Content-Type",
                                            f.contentType
                                        ),
                                    S.setRequestHeader(
                                        "Accept",
                                        f.dataTypes[0] &&
                                            f.accepts[f.dataTypes[0]]
                                            ? f.accepts[f.dataTypes[0]] +
                                                  ("*" !== f.dataTypes[0]
                                                      ? ", " + Yt + "; q=0.01"
                                                      : "")
                                            : f.accepts["*"]
                                    ),
                                    f.headers))
                                        S.setRequestHeader(d, f.headers[d]);
                                    if (
                                        f.beforeSend &&
                                        (!1 === f.beforeSend.call(h, S, f) || u)
                                    )
                                        return S.abort();
                                    if (
                                        ((E = "abort"),
                                        y.add(f.complete),
                                        S.done(f.success),
                                        S.fail(f.error),
                                        (n = Vt(Qt, f, t, S)))
                                    ) {
                                        if (
                                            ((S.readyState = 1),
                                            l && m.trigger("ajaxSend", [S, f]),
                                            u)
                                        )
                                            return S;
                                        f.async &&
                                            f.timeout > 0 &&
                                            (a = i.setTimeout(function () {
                                                S.abort("timeout");
                                            }, f.timeout));
                                        try {
                                            (u = !1), n.send(b, _);
                                        } catch (e) {
                                            if (u) throw e;
                                            _(-1, e);
                                        }
                                    } else _(-1, "No Transport");
                                    function _(e, t, s, c) {
                                        var d,
                                            p,
                                            x,
                                            b,
                                            w,
                                            E = t;
                                        u ||
                                            ((u = !0),
                                            a && i.clearTimeout(a),
                                            (n = void 0),
                                            (o = c || ""),
                                            (S.readyState = e > 0 ? 4 : 0),
                                            (d =
                                                (e >= 200 && e < 300) ||
                                                304 === e),
                                            s &&
                                                (b = (function (e, t, n) {
                                                    for (
                                                        var i,
                                                            r,
                                                            o,
                                                            s,
                                                            a = e.contents,
                                                            c = e.dataTypes;
                                                        "*" === c[0];

                                                    )
                                                        c.shift(),
                                                            void 0 === i &&
                                                                (i =
                                                                    e.mimeType ||
                                                                    t.getResponseHeader(
                                                                        "Content-Type"
                                                                    ));
                                                    if (i)
                                                        for (r in a)
                                                            if (
                                                                a[r] &&
                                                                a[r].test(i)
                                                            ) {
                                                                c.unshift(r);
                                                                break;
                                                            }
                                                    if (c[0] in n) o = c[0];
                                                    else {
                                                        for (r in n) {
                                                            if (
                                                                !c[0] ||
                                                                e.converters[
                                                                    r +
                                                                        " " +
                                                                        c[0]
                                                                ]
                                                            ) {
                                                                o = r;
                                                                break;
                                                            }
                                                            s || (s = r);
                                                        }
                                                        o = o || s;
                                                    }
                                                    if (o)
                                                        return (
                                                            o !== c[0] &&
                                                                c.unshift(o),
                                                            n[o]
                                                        );
                                                })(f, S, s)),
                                            !d &&
                                                T.inArray(
                                                    "script",
                                                    f.dataTypes
                                                ) > -1 &&
                                                T.inArray("json", f.dataTypes) <
                                                    0 &&
                                                (f.converters["text script"] =
                                                    function () {}),
                                            (b = (function (e, t, n, i) {
                                                var r,
                                                    o,
                                                    s,
                                                    a,
                                                    c,
                                                    u = {},
                                                    l = e.dataTypes.slice();
                                                if (l[1])
                                                    for (s in e.converters)
                                                        u[s.toLowerCase()] =
                                                            e.converters[s];
                                                for (o = l.shift(); o; )
                                                    if (
                                                        (e.responseFields[o] &&
                                                            (n[
                                                                e.responseFields[
                                                                    o
                                                                ]
                                                            ] = t),
                                                        !c &&
                                                            i &&
                                                            e.dataFilter &&
                                                            (t = e.dataFilter(
                                                                t,
                                                                e.dataType
                                                            )),
                                                        (c = o),
                                                        (o = l.shift()))
                                                    )
                                                        if ("*" === o) o = c;
                                                        else if (
                                                            "*" !== c &&
                                                            c !== o
                                                        ) {
                                                            if (
                                                                !(s =
                                                                    u[
                                                                        c +
                                                                            " " +
                                                                            o
                                                                    ] ||
                                                                    u["* " + o])
                                                            )
                                                                for (r in u)
                                                                    if (
                                                                        (a =
                                                                            r.split(
                                                                                " "
                                                                            ))[1] ===
                                                                            o &&
                                                                        (s =
                                                                            u[
                                                                                c +
                                                                                    " " +
                                                                                    a[0]
                                                                            ] ||
                                                                            u[
                                                                                "* " +
                                                                                    a[0]
                                                                            ])
                                                                    ) {
                                                                        !0 === s
                                                                            ? (s =
                                                                                  u[
                                                                                      r
                                                                                  ])
                                                                            : !0 !==
                                                                                  u[
                                                                                      r
                                                                                  ] &&
                                                                              ((o =
                                                                                  a[0]),
                                                                              l.unshift(
                                                                                  a[1]
                                                                              ));
                                                                        break;
                                                                    }
                                                            if (!0 !== s)
                                                                if (
                                                                    s &&
                                                                    e.throws
                                                                )
                                                                    t = s(t);
                                                                else
                                                                    try {
                                                                        t =
                                                                            s(
                                                                                t
                                                                            );
                                                                    } catch (e) {
                                                                        return {
                                                                            state: "parsererror",
                                                                            error: s
                                                                                ? e
                                                                                : "No conversion from " +
                                                                                  c +
                                                                                  " to " +
                                                                                  o,
                                                                        };
                                                                    }
                                                        }
                                                return {
                                                    state: "success",
                                                    data: t,
                                                };
                                            })(f, b, S, d)),
                                            d
                                                ? (f.ifModified &&
                                                      ((w =
                                                          S.getResponseHeader(
                                                              "Last-Modified"
                                                          )) &&
                                                          (T.lastModified[r] =
                                                              w),
                                                      (w =
                                                          S.getResponseHeader(
                                                              "etag"
                                                          )) &&
                                                          (T.etag[r] = w)),
                                                  204 === e || "HEAD" === f.type
                                                      ? (E = "nocontent")
                                                      : 304 === e
                                                      ? (E = "notmodified")
                                                      : ((E = b.state),
                                                        (p = b.data),
                                                        (d = !(x = b.error))))
                                                : ((x = E),
                                                  (!e && E) ||
                                                      ((E = "error"),
                                                      e < 0 && (e = 0))),
                                            (S.status = e),
                                            (S.statusText = (t || E) + ""),
                                            d
                                                ? g.resolveWith(h, [p, E, S])
                                                : g.rejectWith(h, [S, E, x]),
                                            S.statusCode(v),
                                            (v = void 0),
                                            l &&
                                                m.trigger(
                                                    d
                                                        ? "ajaxSuccess"
                                                        : "ajaxError",
                                                    [S, f, d ? p : x]
                                                ),
                                            y.fireWith(h, [S, E]),
                                            l &&
                                                (m.trigger("ajaxComplete", [
                                                    S,
                                                    f,
                                                ]),
                                                --T.active ||
                                                    T.event.trigger(
                                                        "ajaxStop"
                                                    )));
                                    }
                                    return S;
                                },
                                getJSON: function (e, t, n) {
                                    return T.get(e, t, n, "json");
                                },
                                getScript: function (e, t) {
                                    return T.get(e, void 0, t, "script");
                                },
                            }),
                            T.each(["get", "post"], function (e, t) {
                                T[t] = function (e, n, i, r) {
                                    return (
                                        y(n) &&
                                            ((r = r || i),
                                            (i = n),
                                            (n = void 0)),
                                        T.ajax(
                                            T.extend(
                                                {
                                                    url: e,
                                                    type: t,
                                                    dataType: r,
                                                    data: n,
                                                    success: i,
                                                },
                                                T.isPlainObject(e) && e
                                            )
                                        )
                                    );
                                };
                            }),
                            T.ajaxPrefilter(function (e) {
                                var t;
                                for (t in e.headers)
                                    "content-type" === t.toLowerCase() &&
                                        (e.contentType = e.headers[t] || "");
                            }),
                            (T._evalUrl = function (e, t, n) {
                                return T.ajax({
                                    url: e,
                                    type: "GET",
                                    dataType: "script",
                                    cache: !0,
                                    async: !1,
                                    global: !1,
                                    converters: {
                                        "text script": function () {},
                                    },
                                    dataFilter: function (e) {
                                        T.globalEval(e, t, n);
                                    },
                                });
                            }),
                            T.fn.extend({
                                wrapAll: function (e) {
                                    var t;
                                    return (
                                        this[0] &&
                                            (y(e) && (e = e.call(this[0])),
                                            (t = T(e, this[0].ownerDocument)
                                                .eq(0)
                                                .clone(!0)),
                                            this[0].parentNode &&
                                                t.insertBefore(this[0]),
                                            t
                                                .map(function () {
                                                    for (
                                                        var e = this;
                                                        e.firstElementChild;

                                                    )
                                                        e = e.firstElementChild;
                                                    return e;
                                                })
                                                .append(this)),
                                        this
                                    );
                                },
                                wrapInner: function (e) {
                                    return y(e)
                                        ? this.each(function (t) {
                                              T(this).wrapInner(
                                                  e.call(this, t)
                                              );
                                          })
                                        : this.each(function () {
                                              var t = T(this),
                                                  n = t.contents();
                                              n.length
                                                  ? n.wrapAll(e)
                                                  : t.append(e);
                                          });
                                },
                                wrap: function (e) {
                                    var t = y(e);
                                    return this.each(function (n) {
                                        T(this).wrapAll(
                                            t ? e.call(this, n) : e
                                        );
                                    });
                                },
                                unwrap: function (e) {
                                    return (
                                        this.parent(e)
                                            .not("body")
                                            .each(function () {
                                                T(this).replaceWith(
                                                    this.childNodes
                                                );
                                            }),
                                        this
                                    );
                                },
                            }),
                            (T.expr.pseudos.hidden = function (e) {
                                return !T.expr.pseudos.visible(e);
                            }),
                            (T.expr.pseudos.visible = function (e) {
                                return !!(
                                    e.offsetWidth ||
                                    e.offsetHeight ||
                                    e.getClientRects().length
                                );
                            }),
                            (T.ajaxSettings.xhr = function () {
                                try {
                                    return new i.XMLHttpRequest();
                                } catch (e) {}
                            });
                        var Jt = { 0: 200, 1223: 204 },
                            Zt = T.ajaxSettings.xhr();
                        (g.cors = !!Zt && "withCredentials" in Zt),
                            (g.ajax = Zt = !!Zt),
                            T.ajaxTransport(function (e) {
                                var t, n;
                                if (g.cors || (Zt && !e.crossDomain))
                                    return {
                                        send: function (r, o) {
                                            var s,
                                                a = e.xhr();
                                            if (
                                                (a.open(
                                                    e.type,
                                                    e.url,
                                                    e.async,
                                                    e.username,
                                                    e.password
                                                ),
                                                e.xhrFields)
                                            )
                                                for (s in e.xhrFields)
                                                    a[s] = e.xhrFields[s];
                                            for (s in (e.mimeType &&
                                                a.overrideMimeType &&
                                                a.overrideMimeType(e.mimeType),
                                            e.crossDomain ||
                                                r["X-Requested-With"] ||
                                                (r["X-Requested-With"] =
                                                    "XMLHttpRequest"),
                                            r))
                                                a.setRequestHeader(s, r[s]);
                                            (t = function (e) {
                                                return function () {
                                                    t &&
                                                        ((t =
                                                            n =
                                                            a.onload =
                                                            a.onerror =
                                                            a.onabort =
                                                            a.ontimeout =
                                                            a.onreadystatechange =
                                                                null),
                                                        "abort" === e
                                                            ? a.abort()
                                                            : "error" === e
                                                            ? "number" !=
                                                              typeof a.status
                                                                ? o(0, "error")
                                                                : o(
                                                                      a.status,
                                                                      a.statusText
                                                                  )
                                                            : o(
                                                                  Jt[
                                                                      a.status
                                                                  ] || a.status,
                                                                  a.statusText,
                                                                  "text" !==
                                                                      (a.responseType ||
                                                                          "text") ||
                                                                      "string" !=
                                                                          typeof a.responseText
                                                                      ? {
                                                                            binary: a.response,
                                                                        }
                                                                      : {
                                                                            text: a.responseText,
                                                                        },
                                                                  a.getAllResponseHeaders()
                                                              ));
                                                };
                                            }),
                                                (a.onload = t()),
                                                (n =
                                                    a.onerror =
                                                    a.ontimeout =
                                                        t("error")),
                                                void 0 !== a.onabort
                                                    ? (a.onabort = n)
                                                    : (a.onreadystatechange =
                                                          function () {
                                                              4 ===
                                                                  a.readyState &&
                                                                  i.setTimeout(
                                                                      function () {
                                                                          t &&
                                                                              n();
                                                                      }
                                                                  );
                                                          }),
                                                (t = t("abort"));
                                            try {
                                                a.send(
                                                    (e.hasContent && e.data) ||
                                                        null
                                                );
                                            } catch (e) {
                                                if (t) throw e;
                                            }
                                        },
                                        abort: function () {
                                            t && t();
                                        },
                                    };
                            }),
                            T.ajaxPrefilter(function (e) {
                                e.crossDomain && (e.contents.script = !1);
                            }),
                            T.ajaxSetup({
                                accepts: {
                                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                                },
                                contents: { script: /\b(?:java|ecma)script\b/ },
                                converters: {
                                    "text script": function (e) {
                                        return T.globalEval(e), e;
                                    },
                                },
                            }),
                            T.ajaxPrefilter("script", function (e) {
                                void 0 === e.cache && (e.cache = !1),
                                    e.crossDomain && (e.type = "GET");
                            }),
                            T.ajaxTransport("script", function (e) {
                                var t, n;
                                if (e.crossDomain || e.scriptAttrs)
                                    return {
                                        send: function (i, r) {
                                            (t = T("<script>")
                                                .attr(e.scriptAttrs || {})
                                                .prop({
                                                    charset: e.scriptCharset,
                                                    src: e.url,
                                                })
                                                .on(
                                                    "load error",
                                                    (n = function (e) {
                                                        t.remove(),
                                                            (n = null),
                                                            e &&
                                                                r(
                                                                    "error" ===
                                                                        e.type
                                                                        ? 404
                                                                        : 200,
                                                                    e.type
                                                                );
                                                    })
                                                )),
                                                x.head.appendChild(t[0]);
                                        },
                                        abort: function () {
                                            n && n();
                                        },
                                    };
                            });
                        var en,
                            tn = [],
                            nn = /(=)\?(?=&|$)|\?\?/;
                        T.ajaxSetup({
                            jsonp: "callback",
                            jsonpCallback: function () {
                                var e = tn.pop() || T.expando + "_" + At.guid++;
                                return (this[e] = !0), e;
                            },
                        }),
                            T.ajaxPrefilter("json jsonp", function (e, t, n) {
                                var r,
                                    o,
                                    s,
                                    a =
                                        !1 !== e.jsonp &&
                                        (nn.test(e.url)
                                            ? "url"
                                            : "string" == typeof e.data &&
                                              0 ===
                                                  (e.contentType || "").indexOf(
                                                      "application/x-www-form-urlencoded"
                                                  ) &&
                                              nn.test(e.data) &&
                                              "data");
                                if (a || "jsonp" === e.dataTypes[0])
                                    return (
                                        (r = e.jsonpCallback =
                                            y(e.jsonpCallback)
                                                ? e.jsonpCallback()
                                                : e.jsonpCallback),
                                        a
                                            ? (e[a] = e[a].replace(
                                                  nn,
                                                  "$1" + r
                                              ))
                                            : !1 !== e.jsonp &&
                                              (e.url +=
                                                  (Dt.test(e.url) ? "&" : "?") +
                                                  e.jsonp +
                                                  "=" +
                                                  r),
                                        (e.converters["script json"] =
                                            function () {
                                                return (
                                                    s ||
                                                        T.error(
                                                            r +
                                                                " was not called"
                                                        ),
                                                    s[0]
                                                );
                                            }),
                                        (e.dataTypes[0] = "json"),
                                        (o = i[r]),
                                        (i[r] = function () {
                                            s = arguments;
                                        }),
                                        n.always(function () {
                                            void 0 === o
                                                ? T(i).removeProp(r)
                                                : (i[r] = o),
                                                e[r] &&
                                                    ((e.jsonpCallback =
                                                        t.jsonpCallback),
                                                    tn.push(r)),
                                                s && y(o) && o(s[0]),
                                                (s = o = void 0);
                                        }),
                                        "script"
                                    );
                            }),
                            (g.createHTMLDocument =
                                (((en =
                                    x.implementation.createHTMLDocument(
                                        ""
                                    ).body).innerHTML =
                                    "<form></form><form></form>"),
                                2 === en.childNodes.length)),
                            (T.parseHTML = function (e, t, n) {
                                return "string" != typeof e
                                    ? []
                                    : ("boolean" == typeof t &&
                                          ((n = t), (t = !1)),
                                      t ||
                                          (g.createHTMLDocument
                                              ? (((i = (t =
                                                    x.implementation.createHTMLDocument(
                                                        ""
                                                    )).createElement(
                                                    "base"
                                                )).href = x.location.href),
                                                t.head.appendChild(i))
                                              : (t = x)),
                                      (o = !n && []),
                                      (r = W.exec(e))
                                          ? [t.createElement(r[1])]
                                          : ((r = Ne([e], t, o)),
                                            o && o.length && T(o).remove(),
                                            T.merge([], r.childNodes)));
                                var i, r, o;
                            }),
                            (T.fn.load = function (e, t, n) {
                                var i,
                                    r,
                                    o,
                                    s = this,
                                    a = e.indexOf(" ");
                                return (
                                    a > -1 &&
                                        ((i = Tt(e.slice(a))),
                                        (e = e.slice(0, a))),
                                    y(t)
                                        ? ((n = t), (t = void 0))
                                        : t &&
                                          "object" == typeof t &&
                                          (r = "POST"),
                                    s.length > 0 &&
                                        T.ajax({
                                            url: e,
                                            type: r || "GET",
                                            dataType: "html",
                                            data: t,
                                        })
                                            .done(function (e) {
                                                (o = arguments),
                                                    s.html(
                                                        i
                                                            ? T("<div>")
                                                                  .append(
                                                                      T.parseHTML(
                                                                          e
                                                                      )
                                                                  )
                                                                  .find(i)
                                                            : e
                                                    );
                                            })
                                            .always(
                                                n &&
                                                    function (e, t) {
                                                        s.each(function () {
                                                            n.apply(
                                                                this,
                                                                o || [
                                                                    e.responseText,
                                                                    t,
                                                                    e,
                                                                ]
                                                            );
                                                        });
                                                    }
                                            ),
                                    this
                                );
                            }),
                            (T.expr.pseudos.animated = function (e) {
                                return T.grep(T.timers, function (t) {
                                    return e === t.elem;
                                }).length;
                            }),
                            (T.offset = {
                                setOffset: function (e, t, n) {
                                    var i,
                                        r,
                                        o,
                                        s,
                                        a,
                                        c,
                                        u = T.css(e, "position"),
                                        l = T(e),
                                        d = {};
                                    "static" === u &&
                                        (e.style.position = "relative"),
                                        (a = l.offset()),
                                        (o = T.css(e, "top")),
                                        (c = T.css(e, "left")),
                                        ("absolute" === u || "fixed" === u) &&
                                        (o + c).indexOf("auto") > -1
                                            ? ((s = (i = l.position()).top),
                                              (r = i.left))
                                            : ((s = parseFloat(o) || 0),
                                              (r = parseFloat(c) || 0)),
                                        y(t) &&
                                            (t = t.call(e, n, T.extend({}, a))),
                                        null != t.top &&
                                            (d.top = t.top - a.top + s),
                                        null != t.left &&
                                            (d.left = t.left - a.left + r),
                                        "using" in t
                                            ? t.using.call(e, d)
                                            : l.css(d);
                                },
                            }),
                            T.fn.extend({
                                offset: function (e) {
                                    if (arguments.length)
                                        return void 0 === e
                                            ? this
                                            : this.each(function (t) {
                                                  T.offset.setOffset(
                                                      this,
                                                      e,
                                                      t
                                                  );
                                              });
                                    var t,
                                        n,
                                        i = this[0];
                                    return i
                                        ? i.getClientRects().length
                                            ? ((t = i.getBoundingClientRect()),
                                              (n = i.ownerDocument.defaultView),
                                              {
                                                  top: t.top + n.pageYOffset,
                                                  left: t.left + n.pageXOffset,
                                              })
                                            : { top: 0, left: 0 }
                                        : void 0;
                                },
                                position: function () {
                                    if (this[0]) {
                                        var e,
                                            t,
                                            n,
                                            i = this[0],
                                            r = { top: 0, left: 0 };
                                        if ("fixed" === T.css(i, "position"))
                                            t = i.getBoundingClientRect();
                                        else {
                                            for (
                                                t = this.offset(),
                                                    n = i.ownerDocument,
                                                    e =
                                                        i.offsetParent ||
                                                        n.documentElement;
                                                e &&
                                                (e === n.body ||
                                                    e === n.documentElement) &&
                                                "static" ===
                                                    T.css(e, "position");

                                            )
                                                e = e.parentNode;
                                            e &&
                                                e !== i &&
                                                1 === e.nodeType &&
                                                (((r = T(e).offset()).top +=
                                                    T.css(
                                                        e,
                                                        "borderTopWidth",
                                                        !0
                                                    )),
                                                (r.left += T.css(
                                                    e,
                                                    "borderLeftWidth",
                                                    !0
                                                )));
                                        }
                                        return {
                                            top:
                                                t.top -
                                                r.top -
                                                T.css(i, "marginTop", !0),
                                            left:
                                                t.left -
                                                r.left -
                                                T.css(i, "marginLeft", !0),
                                        };
                                    }
                                },
                                offsetParent: function () {
                                    return this.map(function () {
                                        for (
                                            var e = this.offsetParent;
                                            e &&
                                            "static" === T.css(e, "position");

                                        )
                                            e = e.offsetParent;
                                        return e || me;
                                    });
                                },
                            }),
                            T.each(
                                {
                                    scrollLeft: "pageXOffset",
                                    scrollTop: "pageYOffset",
                                },
                                function (e, t) {
                                    var n = "pageYOffset" === t;
                                    T.fn[e] = function (i) {
                                        return ee(
                                            this,
                                            function (e, i, r) {
                                                var o;
                                                if (
                                                    (v(e)
                                                        ? (o = e)
                                                        : 9 === e.nodeType &&
                                                          (o = e.defaultView),
                                                    void 0 === r)
                                                )
                                                    return o ? o[t] : e[i];
                                                o
                                                    ? o.scrollTo(
                                                          n ? o.pageXOffset : r,
                                                          n ? r : o.pageYOffset
                                                      )
                                                    : (e[i] = r);
                                            },
                                            e,
                                            i,
                                            arguments.length
                                        );
                                    };
                                }
                            ),
                            T.each(["top", "left"], function (e, t) {
                                T.cssHooks[t] = et(
                                    g.pixelPosition,
                                    function (e, n) {
                                        if (n)
                                            return (
                                                (n = Ze(e, t)),
                                                Ue.test(n)
                                                    ? T(e).position()[t] + "px"
                                                    : n
                                            );
                                    }
                                );
                            }),
                            T.each(
                                { Height: "height", Width: "width" },
                                function (e, t) {
                                    T.each(
                                        {
                                            padding: "inner" + e,
                                            content: t,
                                            "": "outer" + e,
                                        },
                                        function (n, i) {
                                            T.fn[i] = function (r, o) {
                                                var s =
                                                        arguments.length &&
                                                        (n ||
                                                            "boolean" !=
                                                                typeof r),
                                                    a =
                                                        n ||
                                                        (!0 === r || !0 === o
                                                            ? "margin"
                                                            : "border");
                                                return ee(
                                                    this,
                                                    function (t, n, r) {
                                                        var o;
                                                        return v(t)
                                                            ? 0 ===
                                                              i.indexOf("outer")
                                                                ? t["inner" + e]
                                                                : t.document
                                                                      .documentElement[
                                                                      "client" +
                                                                          e
                                                                  ]
                                                            : 9 === t.nodeType
                                                            ? ((o =
                                                                  t.documentElement),
                                                              Math.max(
                                                                  t.body[
                                                                      "scroll" +
                                                                          e
                                                                  ],
                                                                  o[
                                                                      "scroll" +
                                                                          e
                                                                  ],
                                                                  t.body[
                                                                      "offset" +
                                                                          e
                                                                  ],
                                                                  o[
                                                                      "offset" +
                                                                          e
                                                                  ],
                                                                  o[
                                                                      "client" +
                                                                          e
                                                                  ]
                                                              ))
                                                            : void 0 === r
                                                            ? T.css(t, n, a)
                                                            : T.style(
                                                                  t,
                                                                  n,
                                                                  r,
                                                                  a
                                                              );
                                                    },
                                                    t,
                                                    s ? r : void 0,
                                                    s
                                                );
                                            };
                                        }
                                    );
                                }
                            ),
                            T.each(
                                [
                                    "ajaxStart",
                                    "ajaxStop",
                                    "ajaxComplete",
                                    "ajaxError",
                                    "ajaxSuccess",
                                    "ajaxSend",
                                ],
                                function (e, t) {
                                    T.fn[t] = function (e) {
                                        return this.on(t, e);
                                    };
                                }
                            ),
                            T.fn.extend({
                                bind: function (e, t, n) {
                                    return this.on(e, null, t, n);
                                },
                                unbind: function (e, t) {
                                    return this.off(e, null, t);
                                },
                                delegate: function (e, t, n, i) {
                                    return this.on(t, e, n, i);
                                },
                                undelegate: function (e, t, n) {
                                    return 1 === arguments.length
                                        ? this.off(e, "**")
                                        : this.off(t, e || "**", n);
                                },
                                hover: function (e, t) {
                                    return this.on("mouseenter", e).on(
                                        "mouseleave",
                                        t || e
                                    );
                                },
                            }),
                            T.each(
                                "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                                    " "
                                ),
                                function (e, t) {
                                    T.fn[t] = function (e, n) {
                                        return arguments.length > 0
                                            ? this.on(t, null, e, n)
                                            : this.trigger(t);
                                    };
                                }
                            );
                        var rn =
                            /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                        (T.proxy = function (e, t) {
                            var n, i, r;
                            if (
                                ("string" == typeof t &&
                                    ((n = e[t]), (t = e), (e = n)),
                                y(e))
                            )
                                return (
                                    (i = a.call(arguments, 2)),
                                    (r = function () {
                                        return e.apply(
                                            t || this,
                                            i.concat(a.call(arguments))
                                        );
                                    }),
                                    (r.guid = e.guid = e.guid || T.guid++),
                                    r
                                );
                        }),
                            (T.holdReady = function (e) {
                                e ? T.readyWait++ : T.ready(!0);
                            }),
                            (T.isArray = Array.isArray),
                            (T.parseJSON = JSON.parse),
                            (T.nodeName = k),
                            (T.isFunction = y),
                            (T.isWindow = v),
                            (T.camelCase = re),
                            (T.type = E),
                            (T.now = Date.now),
                            (T.isNumeric = function (e) {
                                var t = T.type(e);
                                return (
                                    ("number" === t || "string" === t) &&
                                    !isNaN(e - parseFloat(e))
                                );
                            }),
                            (T.trim = function (e) {
                                return null == e
                                    ? ""
                                    : (e + "").replace(rn, "$1");
                            }),
                            void 0 ===
                                (n = function () {
                                    return T;
                                }.apply(t, [])) || (e.exports = n);
                        var on = i.jQuery,
                            sn = i.$;
                        return (
                            (T.noConflict = function (e) {
                                return (
                                    i.$ === T && (i.$ = sn),
                                    e && i.jQuery === T && (i.jQuery = on),
                                    T
                                );
                            }),
                            void 0 === r && (i.jQuery = i.$ = T),
                            T
                        );
                    }
                );
            },
            751: function (e, t, n) {
                var i, r, o;
                window,
                    (r = [n(794), n(131)]),
                    void 0 ===
                        (o =
                            "function" ==
                            typeof (i = function (e, t) {
                                "use strict";
                                var n = e.create("masonry");
                                n.compatOptions.fitWidth = "isFitWidth";
                                var i = n.prototype;
                                return (
                                    (i._resetLayout = function () {
                                        this.getSize(),
                                            this._getMeasurement(
                                                "columnWidth",
                                                "outerWidth"
                                            ),
                                            this._getMeasurement(
                                                "gutter",
                                                "outerWidth"
                                            ),
                                            this.measureColumns(),
                                            (this.colYs = []);
                                        for (var e = 0; e < this.cols; e++)
                                            this.colYs.push(0);
                                        (this.maxY = 0),
                                            (this.horizontalColIndex = 0);
                                    }),
                                    (i.measureColumns = function () {
                                        if (
                                            (this.getContainerWidth(),
                                            !this.columnWidth)
                                        ) {
                                            var e = this.items[0],
                                                n = e && e.element;
                                            this.columnWidth =
                                                (n && t(n).outerWidth) ||
                                                this.containerWidth;
                                        }
                                        var i = (this.columnWidth +=
                                                this.gutter),
                                            r =
                                                this.containerWidth +
                                                this.gutter,
                                            o = r / i,
                                            s = i - (r % i);
                                        (o =
                                            Math[
                                                s && s < 1 ? "round" : "floor"
                                            ](o)),
                                            (this.cols = Math.max(o, 1));
                                    }),
                                    (i.getContainerWidth = function () {
                                        var e = this._getOption("fitWidth")
                                                ? this.element.parentNode
                                                : this.element,
                                            n = t(e);
                                        this.containerWidth = n && n.innerWidth;
                                    }),
                                    (i._getItemLayoutPosition = function (e) {
                                        e.getSize();
                                        var t =
                                                e.size.outerWidth %
                                                this.columnWidth,
                                            n = Math[
                                                t && t < 1 ? "round" : "ceil"
                                            ](
                                                e.size.outerWidth /
                                                    this.columnWidth
                                            );
                                        n = Math.min(n, this.cols);
                                        for (
                                            var i = this[
                                                    this.options.horizontalOrder
                                                        ? "_getHorizontalColPosition"
                                                        : "_getTopColPosition"
                                                ](n, e),
                                                r = {
                                                    x: this.columnWidth * i.col,
                                                    y: i.y,
                                                },
                                                o = i.y + e.size.outerHeight,
                                                s = n + i.col,
                                                a = i.col;
                                            a < s;
                                            a++
                                        )
                                            this.colYs[a] = o;
                                        return r;
                                    }),
                                    (i._getTopColPosition = function (e) {
                                        var t = this._getTopColGroup(e),
                                            n = Math.min.apply(Math, t);
                                        return { col: t.indexOf(n), y: n };
                                    }),
                                    (i._getTopColGroup = function (e) {
                                        if (e < 2) return this.colYs;
                                        for (
                                            var t = [],
                                                n = this.cols + 1 - e,
                                                i = 0;
                                            i < n;
                                            i++
                                        )
                                            t[i] = this._getColGroupY(i, e);
                                        return t;
                                    }),
                                    (i._getColGroupY = function (e, t) {
                                        if (t < 2) return this.colYs[e];
                                        var n = this.colYs.slice(e, e + t);
                                        return Math.max.apply(Math, n);
                                    }),
                                    (i._getHorizontalColPosition = function (
                                        e,
                                        t
                                    ) {
                                        var n =
                                            this.horizontalColIndex % this.cols;
                                        n = e > 1 && n + e > this.cols ? 0 : n;
                                        var i =
                                            t.size.outerWidth &&
                                            t.size.outerHeight;
                                        return (
                                            (this.horizontalColIndex = i
                                                ? n + e
                                                : this.horizontalColIndex),
                                            {
                                                col: n,
                                                y: this._getColGroupY(n, e),
                                            }
                                        );
                                    }),
                                    (i._manageStamp = function (e) {
                                        var n = t(e),
                                            i = this._getElementOffset(e),
                                            r = this._getOption("originLeft")
                                                ? i.left
                                                : i.right,
                                            o = r + n.outerWidth,
                                            s = Math.floor(
                                                r / this.columnWidth
                                            );
                                        s = Math.max(0, s);
                                        var a = Math.floor(
                                            o / this.columnWidth
                                        );
                                        (a -= o % this.columnWidth ? 0 : 1),
                                            (a = Math.min(this.cols - 1, a));
                                        for (
                                            var c =
                                                    (this._getOption(
                                                        "originTop"
                                                    )
                                                        ? i.top
                                                        : i.bottom) +
                                                    n.outerHeight,
                                                u = s;
                                            u <= a;
                                            u++
                                        )
                                            this.colYs[u] = Math.max(
                                                c,
                                                this.colYs[u]
                                            );
                                    }),
                                    (i._getContainerSize = function () {
                                        this.maxY = Math.max.apply(
                                            Math,
                                            this.colYs
                                        );
                                        var e = { height: this.maxY };
                                        return (
                                            this._getOption("fitWidth") &&
                                                (e.width =
                                                    this._getContainerFitWidth()),
                                            e
                                        );
                                    }),
                                    (i._getContainerFitWidth = function () {
                                        for (
                                            var e = 0, t = this.cols;
                                            --t && 0 === this.colYs[t];

                                        )
                                            e++;
                                        return (
                                            (this.cols - e) * this.columnWidth -
                                            this.gutter
                                        );
                                    }),
                                    (i.needsResizeLayout = function () {
                                        var e = this.containerWidth;
                                        return (
                                            this.getContainerWidth(),
                                            e != this.containerWidth
                                        );
                                    }),
                                    n
                                );
                            })
                                ? i.apply(t, r)
                                : i) || (e.exports = o);
            },
            652: function (e, t, n) {
                var i, r, o;
                window,
                    (r = [n(158), n(131)]),
                    void 0 ===
                        (o =
                            "function" ==
                            typeof (i = function (e, t) {
                                "use strict";
                                var n = document.documentElement.style,
                                    i =
                                        "string" == typeof n.transition
                                            ? "transition"
                                            : "WebkitTransition",
                                    r =
                                        "string" == typeof n.transform
                                            ? "transform"
                                            : "WebkitTransform",
                                    o = {
                                        WebkitTransition: "webkitTransitionEnd",
                                        transition: "transitionend",
                                    }[i],
                                    s = {
                                        transform: r,
                                        transition: i,
                                        transitionDuration: i + "Duration",
                                        transitionProperty: i + "Property",
                                        transitionDelay: i + "Delay",
                                    };
                                function a(e, t) {
                                    e &&
                                        ((this.element = e),
                                        (this.layout = t),
                                        (this.position = { x: 0, y: 0 }),
                                        this._create());
                                }
                                var c = (a.prototype = Object.create(
                                    e.prototype
                                ));
                                (c.constructor = a),
                                    (c._create = function () {
                                        (this._transn = {
                                            ingProperties: {},
                                            clean: {},
                                            onEnd: {},
                                        }),
                                            this.css({ position: "absolute" });
                                    }),
                                    (c.handleEvent = function (e) {
                                        var t = "on" + e.type;
                                        this[t] && this[t](e);
                                    }),
                                    (c.getSize = function () {
                                        this.size = t(this.element);
                                    }),
                                    (c.css = function (e) {
                                        var t = this.element.style;
                                        for (var n in e) t[s[n] || n] = e[n];
                                    }),
                                    (c.getPosition = function () {
                                        var e = getComputedStyle(this.element),
                                            t =
                                                this.layout._getOption(
                                                    "originLeft"
                                                ),
                                            n =
                                                this.layout._getOption(
                                                    "originTop"
                                                ),
                                            i = e[t ? "left" : "right"],
                                            r = e[n ? "top" : "bottom"],
                                            o = parseFloat(i),
                                            s = parseFloat(r),
                                            a = this.layout.size;
                                        -1 != i.indexOf("%") &&
                                            (o = (o / 100) * a.width),
                                            -1 != r.indexOf("%") &&
                                                (s = (s / 100) * a.height),
                                            (o = isNaN(o) ? 0 : o),
                                            (s = isNaN(s) ? 0 : s),
                                            (o -= t
                                                ? a.paddingLeft
                                                : a.paddingRight),
                                            (s -= n
                                                ? a.paddingTop
                                                : a.paddingBottom),
                                            (this.position.x = o),
                                            (this.position.y = s);
                                    }),
                                    (c.layoutPosition = function () {
                                        var e = this.layout.size,
                                            t = {},
                                            n =
                                                this.layout._getOption(
                                                    "originLeft"
                                                ),
                                            i =
                                                this.layout._getOption(
                                                    "originTop"
                                                ),
                                            r = n
                                                ? "paddingLeft"
                                                : "paddingRight",
                                            o = n ? "left" : "right",
                                            s = n ? "right" : "left",
                                            a = this.position.x + e[r];
                                        (t[o] = this.getXValue(a)), (t[s] = "");
                                        var c = i
                                                ? "paddingTop"
                                                : "paddingBottom",
                                            u = i ? "top" : "bottom",
                                            l = i ? "bottom" : "top",
                                            d = this.position.y + e[c];
                                        (t[u] = this.getYValue(d)),
                                            (t[l] = ""),
                                            this.css(t),
                                            this.emitEvent("layout", [this]);
                                    }),
                                    (c.getXValue = function (e) {
                                        var t =
                                            this.layout._getOption(
                                                "horizontal"
                                            );
                                        return this.layout.options
                                            .percentPosition && !t
                                            ? (e / this.layout.size.width) *
                                                  100 +
                                                  "%"
                                            : e + "px";
                                    }),
                                    (c.getYValue = function (e) {
                                        var t =
                                            this.layout._getOption(
                                                "horizontal"
                                            );
                                        return this.layout.options
                                            .percentPosition && t
                                            ? (e / this.layout.size.height) *
                                                  100 +
                                                  "%"
                                            : e + "px";
                                    }),
                                    (c._transitionTo = function (e, t) {
                                        this.getPosition();
                                        var n = this.position.x,
                                            i = this.position.y,
                                            r =
                                                e == this.position.x &&
                                                t == this.position.y;
                                        if (
                                            (this.setPosition(e, t),
                                            !r || this.isTransitioning)
                                        ) {
                                            var o = e - n,
                                                s = t - i,
                                                a = {};
                                            (a.transform = this.getTranslate(
                                                o,
                                                s
                                            )),
                                                this.transition({
                                                    to: a,
                                                    onTransitionEnd: {
                                                        transform:
                                                            this.layoutPosition,
                                                    },
                                                    isCleaning: !0,
                                                });
                                        } else this.layoutPosition();
                                    }),
                                    (c.getTranslate = function (e, t) {
                                        return (
                                            "translate3d(" +
                                            (e = this.layout._getOption(
                                                "originLeft"
                                            )
                                                ? e
                                                : -e) +
                                            "px, " +
                                            (t = this.layout._getOption(
                                                "originTop"
                                            )
                                                ? t
                                                : -t) +
                                            "px, 0)"
                                        );
                                    }),
                                    (c.goTo = function (e, t) {
                                        this.setPosition(e, t),
                                            this.layoutPosition();
                                    }),
                                    (c.moveTo = c._transitionTo),
                                    (c.setPosition = function (e, t) {
                                        (this.position.x = parseFloat(e)),
                                            (this.position.y = parseFloat(t));
                                    }),
                                    (c._nonTransition = function (e) {
                                        for (var t in (this.css(e.to),
                                        e.isCleaning &&
                                            this._removeStyles(e.to),
                                        e.onTransitionEnd))
                                            e.onTransitionEnd[t].call(this);
                                    }),
                                    (c.transition = function (e) {
                                        if (
                                            parseFloat(
                                                this.layout.options
                                                    .transitionDuration
                                            )
                                        ) {
                                            var t = this._transn;
                                            for (var n in e.onTransitionEnd)
                                                t.onEnd[n] =
                                                    e.onTransitionEnd[n];
                                            for (n in e.to)
                                                (t.ingProperties[n] = !0),
                                                    e.isCleaning &&
                                                        (t.clean[n] = !0);
                                            e.from &&
                                                (this.css(e.from),
                                                this.element.offsetHeight),
                                                this.enableTransition(e.to),
                                                this.css(e.to),
                                                (this.isTransitioning = !0);
                                        } else this._nonTransition(e);
                                    });
                                var u =
                                    "opacity," +
                                    r.replace(/([A-Z])/g, function (e) {
                                        return "-" + e.toLowerCase();
                                    });
                                (c.enableTransition = function () {
                                    if (!this.isTransitioning) {
                                        var e =
                                            this.layout.options
                                                .transitionDuration;
                                        (e =
                                            "number" == typeof e
                                                ? e + "ms"
                                                : e),
                                            this.css({
                                                transitionProperty: u,
                                                transitionDuration: e,
                                                transitionDelay:
                                                    this.staggerDelay || 0,
                                            }),
                                            this.element.addEventListener(
                                                o,
                                                this,
                                                !1
                                            );
                                    }
                                }),
                                    (c.onwebkitTransitionEnd = function (e) {
                                        this.ontransitionend(e);
                                    }),
                                    (c.onotransitionend = function (e) {
                                        this.ontransitionend(e);
                                    });
                                var l = { "-webkit-transform": "transform" };
                                (c.ontransitionend = function (e) {
                                    if (e.target === this.element) {
                                        var t = this._transn,
                                            n =
                                                l[e.propertyName] ||
                                                e.propertyName;
                                        delete t.ingProperties[n],
                                            (function (e) {
                                                for (var t in e) return !1;
                                                return !0;
                                            })(t.ingProperties) &&
                                                this.disableTransition(),
                                            n in t.clean &&
                                                ((this.element.style[
                                                    e.propertyName
                                                ] = ""),
                                                delete t.clean[n]),
                                            n in t.onEnd &&
                                                (t.onEnd[n].call(this),
                                                delete t.onEnd[n]),
                                            this.emitEvent("transitionEnd", [
                                                this,
                                            ]);
                                    }
                                }),
                                    (c.disableTransition = function () {
                                        this.removeTransitionStyles(),
                                            this.element.removeEventListener(
                                                o,
                                                this,
                                                !1
                                            ),
                                            (this.isTransitioning = !1);
                                    }),
                                    (c._removeStyles = function (e) {
                                        var t = {};
                                        for (var n in e) t[n] = "";
                                        this.css(t);
                                    });
                                var d = {
                                    transitionProperty: "",
                                    transitionDuration: "",
                                    transitionDelay: "",
                                };
                                return (
                                    (c.removeTransitionStyles = function () {
                                        this.css(d);
                                    }),
                                    (c.stagger = function (e) {
                                        (e = isNaN(e) ? 0 : e),
                                            (this.staggerDelay = e + "ms");
                                    }),
                                    (c.removeElem = function () {
                                        this.element.parentNode.removeChild(
                                            this.element
                                        ),
                                            this.css({ display: "" }),
                                            this.emitEvent("remove", [this]);
                                    }),
                                    (c.remove = function () {
                                        i &&
                                        parseFloat(
                                            this.layout.options
                                                .transitionDuration
                                        )
                                            ? (this.once(
                                                  "transitionEnd",
                                                  function () {
                                                      this.removeElem();
                                                  }
                                              ),
                                              this.hide())
                                            : this.removeElem();
                                    }),
                                    (c.reveal = function () {
                                        delete this.isHidden,
                                            this.css({ display: "" });
                                        var e = this.layout.options,
                                            t = {};
                                        (t[
                                            this.getHideRevealTransitionEndProperty(
                                                "visibleStyle"
                                            )
                                        ] = this.onRevealTransitionEnd),
                                            this.transition({
                                                from: e.hiddenStyle,
                                                to: e.visibleStyle,
                                                isCleaning: !0,
                                                onTransitionEnd: t,
                                            });
                                    }),
                                    (c.onRevealTransitionEnd = function () {
                                        this.isHidden ||
                                            this.emitEvent("reveal");
                                    }),
                                    (c.getHideRevealTransitionEndProperty =
                                        function (e) {
                                            var t = this.layout.options[e];
                                            if (t.opacity) return "opacity";
                                            for (var n in t) return n;
                                        }),
                                    (c.hide = function () {
                                        (this.isHidden = !0),
                                            this.css({ display: "" });
                                        var e = this.layout.options,
                                            t = {};
                                        (t[
                                            this.getHideRevealTransitionEndProperty(
                                                "hiddenStyle"
                                            )
                                        ] = this.onHideTransitionEnd),
                                            this.transition({
                                                from: e.visibleStyle,
                                                to: e.hiddenStyle,
                                                isCleaning: !0,
                                                onTransitionEnd: t,
                                            });
                                    }),
                                    (c.onHideTransitionEnd = function () {
                                        this.isHidden &&
                                            (this.css({ display: "none" }),
                                            this.emitEvent("hide"));
                                    }),
                                    (c.destroy = function () {
                                        this.css({
                                            position: "",
                                            left: "",
                                            right: "",
                                            top: "",
                                            bottom: "",
                                            transition: "",
                                            transform: "",
                                        });
                                    }),
                                    a
                                );
                            })
                                ? i.apply(t, r)
                                : i) || (e.exports = o);
            },
            794: function (e, t, n) {
                var i, r;
                !(function (o, s) {
                    "use strict";
                    (i = [n(158), n(131), n(47), n(652)]),
                        (r = function (e, t, n, i) {
                            return (function (e, t, n, i, r) {
                                var o = e.console,
                                    s = e.jQuery,
                                    a = function () {},
                                    c = 0,
                                    u = {};
                                function l(e, t) {
                                    var n = i.getQueryElement(e);
                                    if (n) {
                                        (this.element = n),
                                            s &&
                                                (this.$element = s(
                                                    this.element
                                                )),
                                            (this.options = i.extend(
                                                {},
                                                this.constructor.defaults
                                            )),
                                            this.option(t);
                                        var r = ++c;
                                        (this.element.outlayerGUID = r),
                                            (u[r] = this),
                                            this._create(),
                                            this._getOption("initLayout") &&
                                                this.layout();
                                    } else
                                        o &&
                                            o.error(
                                                "Bad element for " +
                                                    this.constructor.namespace +
                                                    ": " +
                                                    (n || e)
                                            );
                                }
                                (l.namespace = "outlayer"),
                                    (l.Item = r),
                                    (l.defaults = {
                                        containerStyle: {
                                            position: "relative",
                                        },
                                        initLayout: !0,
                                        originLeft: !0,
                                        originTop: !0,
                                        resize: !0,
                                        resizeContainer: !0,
                                        transitionDuration: "0.4s",
                                        hiddenStyle: {
                                            opacity: 0,
                                            transform: "scale(0.001)",
                                        },
                                        visibleStyle: {
                                            opacity: 1,
                                            transform: "scale(1)",
                                        },
                                    });
                                var d = l.prototype;
                                function p(e) {
                                    function t() {
                                        e.apply(this, arguments);
                                    }
                                    return (
                                        (t.prototype = Object.create(
                                            e.prototype
                                        )),
                                        (t.prototype.constructor = t),
                                        t
                                    );
                                }
                                i.extend(d, t.prototype),
                                    (d.option = function (e) {
                                        i.extend(this.options, e);
                                    }),
                                    (d._getOption = function (e) {
                                        var t =
                                            this.constructor.compatOptions[e];
                                        return t && void 0 !== this.options[t]
                                            ? this.options[t]
                                            : this.options[e];
                                    }),
                                    (l.compatOptions = {
                                        initLayout: "isInitLayout",
                                        horizontal: "isHorizontal",
                                        layoutInstant: "isLayoutInstant",
                                        originLeft: "isOriginLeft",
                                        originTop: "isOriginTop",
                                        resize: "isResizeBound",
                                        resizeContainer: "isResizingContainer",
                                    }),
                                    (d._create = function () {
                                        this.reloadItems(),
                                            (this.stamps = []),
                                            this.stamp(this.options.stamp),
                                            i.extend(
                                                this.element.style,
                                                this.options.containerStyle
                                            ),
                                            this._getOption("resize") &&
                                                this.bindResize();
                                    }),
                                    (d.reloadItems = function () {
                                        this.items = this._itemize(
                                            this.element.children
                                        );
                                    }),
                                    (d._itemize = function (e) {
                                        for (
                                            var t =
                                                    this._filterFindItemElements(
                                                        e
                                                    ),
                                                n = this.constructor.Item,
                                                i = [],
                                                r = 0;
                                            r < t.length;
                                            r++
                                        ) {
                                            var o = new n(t[r], this);
                                            i.push(o);
                                        }
                                        return i;
                                    }),
                                    (d._filterFindItemElements = function (e) {
                                        return i.filterFindElements(
                                            e,
                                            this.options.itemSelector
                                        );
                                    }),
                                    (d.getItemElements = function () {
                                        return this.items.map(function (e) {
                                            return e.element;
                                        });
                                    }),
                                    (d.layout = function () {
                                        this._resetLayout(),
                                            this._manageStamps();
                                        var e =
                                                this._getOption(
                                                    "layoutInstant"
                                                ),
                                            t =
                                                void 0 !== e
                                                    ? e
                                                    : !this._isLayoutInited;
                                        this.layoutItems(this.items, t),
                                            (this._isLayoutInited = !0);
                                    }),
                                    (d._init = d.layout),
                                    (d._resetLayout = function () {
                                        this.getSize();
                                    }),
                                    (d.getSize = function () {
                                        this.size = n(this.element);
                                    }),
                                    (d._getMeasurement = function (e, t) {
                                        var i,
                                            r = this.options[e];
                                        r
                                            ? ("string" == typeof r
                                                  ? (i =
                                                        this.element.querySelector(
                                                            r
                                                        ))
                                                  : r instanceof HTMLElement &&
                                                    (i = r),
                                              (this[e] = i ? n(i)[t] : r))
                                            : (this[e] = 0);
                                    }),
                                    (d.layoutItems = function (e, t) {
                                        (e = this._getItemsForLayout(e)),
                                            this._layoutItems(e, t),
                                            this._postLayout();
                                    }),
                                    (d._getItemsForLayout = function (e) {
                                        return e.filter(function (e) {
                                            return !e.isIgnored;
                                        });
                                    }),
                                    (d._layoutItems = function (e, t) {
                                        if (
                                            (this._emitCompleteOnItems(
                                                "layout",
                                                e
                                            ),
                                            e && e.length)
                                        ) {
                                            var n = [];
                                            e.forEach(function (e) {
                                                var i =
                                                    this._getItemLayoutPosition(
                                                        e
                                                    );
                                                (i.item = e),
                                                    (i.isInstant =
                                                        t || e.isLayoutInstant),
                                                    n.push(i);
                                            }, this),
                                                this._processLayoutQueue(n);
                                        }
                                    }),
                                    (d._getItemLayoutPosition = function () {
                                        return { x: 0, y: 0 };
                                    }),
                                    (d._processLayoutQueue = function (e) {
                                        this.updateStagger(),
                                            e.forEach(function (e, t) {
                                                this._positionItem(
                                                    e.item,
                                                    e.x,
                                                    e.y,
                                                    e.isInstant,
                                                    t
                                                );
                                            }, this);
                                    }),
                                    (d.updateStagger = function () {
                                        var e = this.options.stagger;
                                        if (null != e)
                                            return (
                                                (this.stagger = (function (e) {
                                                    if ("number" == typeof e)
                                                        return e;
                                                    var t =
                                                            e.match(
                                                                /(^\d*\.?\d*)(\w*)/
                                                            ),
                                                        n = t && t[1],
                                                        i = t && t[2];
                                                    return n.length
                                                        ? (n = parseFloat(n)) *
                                                              (f[i] || 1)
                                                        : 0;
                                                })(e)),
                                                this.stagger
                                            );
                                        this.stagger = 0;
                                    }),
                                    (d._positionItem = function (
                                        e,
                                        t,
                                        n,
                                        i,
                                        r
                                    ) {
                                        i
                                            ? e.goTo(t, n)
                                            : (e.stagger(r * this.stagger),
                                              e.moveTo(t, n));
                                    }),
                                    (d._postLayout = function () {
                                        this.resizeContainer();
                                    }),
                                    (d.resizeContainer = function () {
                                        if (
                                            this._getOption("resizeContainer")
                                        ) {
                                            var e = this._getContainerSize();
                                            e &&
                                                (this._setContainerMeasure(
                                                    e.width,
                                                    !0
                                                ),
                                                this._setContainerMeasure(
                                                    e.height,
                                                    !1
                                                ));
                                        }
                                    }),
                                    (d._getContainerSize = a),
                                    (d._setContainerMeasure = function (e, t) {
                                        if (void 0 !== e) {
                                            var n = this.size;
                                            n.isBorderBox &&
                                                (e += t
                                                    ? n.paddingLeft +
                                                      n.paddingRight +
                                                      n.borderLeftWidth +
                                                      n.borderRightWidth
                                                    : n.paddingBottom +
                                                      n.paddingTop +
                                                      n.borderTopWidth +
                                                      n.borderBottomWidth),
                                                (e = Math.max(e, 0)),
                                                (this.element.style[
                                                    t ? "width" : "height"
                                                ] = e + "px");
                                        }
                                    }),
                                    (d._emitCompleteOnItems = function (e, t) {
                                        var n = this;
                                        function i() {
                                            n.dispatchEvent(
                                                e + "Complete",
                                                null,
                                                [t]
                                            );
                                        }
                                        var r = t.length;
                                        if (t && r) {
                                            var o = 0;
                                            t.forEach(function (t) {
                                                t.once(e, s);
                                            });
                                        } else i();
                                        function s() {
                                            ++o == r && i();
                                        }
                                    }),
                                    (d.dispatchEvent = function (e, t, n) {
                                        var i = t ? [t].concat(n) : n;
                                        if ((this.emitEvent(e, i), s))
                                            if (
                                                ((this.$element =
                                                    this.$element ||
                                                    s(this.element)),
                                                t)
                                            ) {
                                                var r = s.Event(t);
                                                (r.type = e),
                                                    this.$element.trigger(r, n);
                                            } else this.$element.trigger(e, n);
                                    }),
                                    (d.ignore = function (e) {
                                        var t = this.getItem(e);
                                        t && (t.isIgnored = !0);
                                    }),
                                    (d.unignore = function (e) {
                                        var t = this.getItem(e);
                                        t && delete t.isIgnored;
                                    }),
                                    (d.stamp = function (e) {
                                        (e = this._find(e)) &&
                                            ((this.stamps =
                                                this.stamps.concat(e)),
                                            e.forEach(this.ignore, this));
                                    }),
                                    (d.unstamp = function (e) {
                                        (e = this._find(e)) &&
                                            e.forEach(function (e) {
                                                i.removeFrom(this.stamps, e),
                                                    this.unignore(e);
                                            }, this);
                                    }),
                                    (d._find = function (e) {
                                        if (e)
                                            return (
                                                "string" == typeof e &&
                                                    (e =
                                                        this.element.querySelectorAll(
                                                            e
                                                        )),
                                                i.makeArray(e)
                                            );
                                    }),
                                    (d._manageStamps = function () {
                                        this.stamps &&
                                            this.stamps.length &&
                                            (this._getBoundingRect(),
                                            this.stamps.forEach(
                                                this._manageStamp,
                                                this
                                            ));
                                    }),
                                    (d._getBoundingRect = function () {
                                        var e =
                                                this.element.getBoundingClientRect(),
                                            t = this.size;
                                        this._boundingRect = {
                                            left:
                                                e.left +
                                                t.paddingLeft +
                                                t.borderLeftWidth,
                                            top:
                                                e.top +
                                                t.paddingTop +
                                                t.borderTopWidth,
                                            right:
                                                e.right -
                                                (t.paddingRight +
                                                    t.borderRightWidth),
                                            bottom:
                                                e.bottom -
                                                (t.paddingBottom +
                                                    t.borderBottomWidth),
                                        };
                                    }),
                                    (d._manageStamp = a),
                                    (d._getElementOffset = function (e) {
                                        var t = e.getBoundingClientRect(),
                                            i = this._boundingRect,
                                            r = n(e);
                                        return {
                                            left:
                                                t.left - i.left - r.marginLeft,
                                            top: t.top - i.top - r.marginTop,
                                            right:
                                                i.right -
                                                t.right -
                                                r.marginRight,
                                            bottom:
                                                i.bottom -
                                                t.bottom -
                                                r.marginBottom,
                                        };
                                    }),
                                    (d.handleEvent = i.handleEvent),
                                    (d.bindResize = function () {
                                        e.addEventListener("resize", this),
                                            (this.isResizeBound = !0);
                                    }),
                                    (d.unbindResize = function () {
                                        e.removeEventListener("resize", this),
                                            (this.isResizeBound = !1);
                                    }),
                                    (d.onresize = function () {
                                        this.resize();
                                    }),
                                    i.debounceMethod(l, "onresize", 100),
                                    (d.resize = function () {
                                        this.isResizeBound &&
                                            this.needsResizeLayout() &&
                                            this.layout();
                                    }),
                                    (d.needsResizeLayout = function () {
                                        var e = n(this.element);
                                        return (
                                            this.size &&
                                            e &&
                                            e.innerWidth !==
                                                this.size.innerWidth
                                        );
                                    }),
                                    (d.addItems = function (e) {
                                        var t = this._itemize(e);
                                        return (
                                            t.length &&
                                                (this.items =
                                                    this.items.concat(t)),
                                            t
                                        );
                                    }),
                                    (d.appended = function (e) {
                                        var t = this.addItems(e);
                                        t.length &&
                                            (this.layoutItems(t, !0),
                                            this.reveal(t));
                                    }),
                                    (d.prepended = function (e) {
                                        var t = this._itemize(e);
                                        if (t.length) {
                                            var n = this.items.slice(0);
                                            (this.items = t.concat(n)),
                                                this._resetLayout(),
                                                this._manageStamps(),
                                                this.layoutItems(t, !0),
                                                this.reveal(t),
                                                this.layoutItems(n);
                                        }
                                    }),
                                    (d.reveal = function (e) {
                                        if (
                                            (this._emitCompleteOnItems(
                                                "reveal",
                                                e
                                            ),
                                            e && e.length)
                                        ) {
                                            var t = this.updateStagger();
                                            e.forEach(function (e, n) {
                                                e.stagger(n * t), e.reveal();
                                            });
                                        }
                                    }),
                                    (d.hide = function (e) {
                                        if (
                                            (this._emitCompleteOnItems(
                                                "hide",
                                                e
                                            ),
                                            e && e.length)
                                        ) {
                                            var t = this.updateStagger();
                                            e.forEach(function (e, n) {
                                                e.stagger(n * t), e.hide();
                                            });
                                        }
                                    }),
                                    (d.revealItemElements = function (e) {
                                        var t = this.getItems(e);
                                        this.reveal(t);
                                    }),
                                    (d.hideItemElements = function (e) {
                                        var t = this.getItems(e);
                                        this.hide(t);
                                    }),
                                    (d.getItem = function (e) {
                                        for (
                                            var t = 0;
                                            t < this.items.length;
                                            t++
                                        ) {
                                            var n = this.items[t];
                                            if (n.element == e) return n;
                                        }
                                    }),
                                    (d.getItems = function (e) {
                                        e = i.makeArray(e);
                                        var t = [];
                                        return (
                                            e.forEach(function (e) {
                                                var n = this.getItem(e);
                                                n && t.push(n);
                                            }, this),
                                            t
                                        );
                                    }),
                                    (d.remove = function (e) {
                                        var t = this.getItems(e);
                                        this._emitCompleteOnItems("remove", t),
                                            t &&
                                                t.length &&
                                                t.forEach(function (e) {
                                                    e.remove(),
                                                        i.removeFrom(
                                                            this.items,
                                                            e
                                                        );
                                                }, this);
                                    }),
                                    (d.destroy = function () {
                                        var e = this.element.style;
                                        (e.height = ""),
                                            (e.position = ""),
                                            (e.width = ""),
                                            this.items.forEach(function (e) {
                                                e.destroy();
                                            }),
                                            this.unbindResize();
                                        var t = this.element.outlayerGUID;
                                        delete u[t],
                                            delete this.element.outlayerGUID,
                                            s &&
                                                s.removeData(
                                                    this.element,
                                                    this.constructor.namespace
                                                );
                                    }),
                                    (l.data = function (e) {
                                        var t =
                                            (e = i.getQueryElement(e)) &&
                                            e.outlayerGUID;
                                        return t && u[t];
                                    }),
                                    (l.create = function (e, t) {
                                        var n = p(l);
                                        return (
                                            (n.defaults = i.extend(
                                                {},
                                                l.defaults
                                            )),
                                            i.extend(n.defaults, t),
                                            (n.compatOptions = i.extend(
                                                {},
                                                l.compatOptions
                                            )),
                                            (n.namespace = e),
                                            (n.data = l.data),
                                            (n.Item = p(r)),
                                            i.htmlInit(n, e),
                                            s && s.bridget && s.bridget(e, n),
                                            n
                                        );
                                    });
                                var f = { ms: 1, s: 1e3 };
                                return (l.Item = r), l;
                            })(o, e, t, n, i);
                        }.apply(t, i)),
                        void 0 === r || (e.exports = r);
                })(window);
            },
            963: function () {
                const e = document.querySelector(".backdrop--subscr"),
                    t = document.querySelectorAll(".form__input--location");
                function n(t) {
                    const n = t.target;
                    e &&
                        ("" !== n.value.trim() && document.activeElement === n
                            ? (e.style.overflow = "hidden")
                            : (e.style.overflow = "auto"));
                }
                window.initMap ||
                    (window.initMap = function () {
                        t.forEach(function (e) {
                            const t = new google.maps.places.Autocomplete(e);
                            t.addListener("place_changed", () => {
                                t.getPlace(),
                                    e.setAttribute("data-id", e.value);
                            });
                        });
                    }),
                    t.forEach(function (e) {
                        e.addEventListener("input", n),
                            e.addEventListener("focus", n),
                            e.addEventListener("blur", n),
                            n({ target: e });
                    });
            },
            699: function () {
                const e = document.querySelector(".scroll-to-top-btn");
                window.addEventListener(
                    "scroll",
                    function () {
                        window.scrollY >= 50
                            ? (e.style.display = "flex")
                            : (e.style.display = "none");
                    },
                    { passive: !0 }
                ),
                    e.addEventListener("click", function () {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    });
            },
        },
        t = {};
    function n(i) {
        var r = t[i];
        if (void 0 !== r) return r.exports;
        var o = (t[i] = { exports: {} });
        return e[i].call(o.exports, o, o.exports, n), o.exports;
    }
    (n.n = function (e) {
        var t =
            e && e.__esModule
                ? function () {
                      return e.default;
                  }
                : function () {
                      return e;
                  };
        return n.d(t, { a: t }), t;
    }),
        (n.d = function (e, t) {
            for (var i in t)
                n.o(t, i) &&
                    !n.o(e, i) &&
                    Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (function () {
            "use strict";
            function e(e, t) {
                const n = JSON.stringify(t);
                localStorage.setItem(e, n);
            }
            function t(e) {
                const t = localStorage.getItem(e);
                return JSON.parse(t);
            }
            function i(e) {
                localStorage.removeItem(e);
            }
            function r() {
                return {
                    themeToggler: document.querySelector(".theme-toggler-wrap"),
                    themeCircle: document.querySelector(".theme__circle"),
                    sunRays: document.querySelectorAll(".circle__ray"),
                    sunIcon: document.querySelector(".circle__sun"),
                    moonIcon: document.querySelector(".circle__moon"),
                };
            }
            const o = { LIGHT: "light", DARK: "dark" };
            let s = t("theme") || o.LIGHT;
            function a() {
                const {
                        themeToggler: e,
                        themeCircle: t,
                        sunRays: n,
                        sunIcon: i,
                        moonIcon: a,
                    } = r(),
                    c = document.querySelector("body");
                s === o.DARK
                    ? (c.classList.add("active-dark-theme"),
                      e.classList.add("theme-toggler-wrap--dark"),
                      e.classList.remove("theme-toggler-wrap--light"),
                      t.classList.add("theme__circle--dark"),
                      t.classList.remove("theme__circle--light"),
                      i.classList.add("circle__sun--hidden"),
                      a.classList.remove("circle__moon--hidden"),
                      n.forEach((e) => e.classList.add("circle__ray--hidden")))
                    : (c.classList.remove("active-dark-theme"),
                      e.classList.remove("theme-toggler-wrap--dark"),
                      e.classList.add("theme-toggler-wrap--light"),
                      t.classList.remove("theme__circle--dark"),
                      t.classList.add("theme__circle--light"),
                      i.classList.remove("circle__sun--hidden"),
                      a.classList.add("circle__moon--hidden"),
                      n.forEach((e) =>
                          e.classList.remove("circle__ray--hidden")
                      ));
            }
            const c = {
                    home: [
                        "/comfort-group-cleaning/",
                        "/comfort-group-cleaning/index.html",
                    ],
                    office: ["/comfort-group-cleaning/office.html"],
                    afterRepair: ["/comfort-group-cleaning/after-repair.html"],
                    calcOrder: ["/comfort-group-cleaning/calc-order.html"],
                    contacts: ["/comfort-group-cleaning/contacts.html"],
                    successOr404: [
                        "/comfort-group-cleaning/success-order.html",
                        "/comfort-group-cleaning/404.html",
                    ],
                },
                u = {
                    home: () => {
                        d([".nav__link", ".nav--aside-menu .nav__link"]),
                            l("index.html#order-cleaning-block");
                    },
                    office: () => {
                        d([
                            ".nav__list .nav__item:nth-child(2) .nav__link",
                            ".nav--aside-menu  .nav__list .nav__item:nth-child(2) .nav__link",
                        ]),
                            l("office.html#office-calc-block"),
                            h("calc(100% / 3)"),
                            document
                                .querySelectorAll(".element--office-page")
                                .forEach((e) => e.classList.remove("isHidden")),
                            document
                                .querySelector(".element--calculator-page")
                                .classList.add("isHidden");
                    },
                    afterRepair: () => {
                        !(function () {
                            const e = document.querySelector(
                                ".data-order .data-order__title"
                            );
                            (document.querySelector(
                                ".buildings"
                            ).style.display = "none"),
                                (e.style.display = "none");
                        })(),
                            document
                                .querySelectorAll(
                                    ".add-services-list__item:nth-child(n+3)"
                                )
                                .forEach((e) => e.classList.add("isHidden")),
                            l("after-repair.html#office-calc-block");
                    },
                    calcOrder: () => {
                        document
                            .querySelector(".footer")
                            .classList.add("footer--calc-order"),
                            h("calc(100% / 2)"),
                            document
                                .querySelectorAll(".block")
                                .forEach((e) =>
                                    e.classList.add("block--white")
                                ),
                            document
                                .querySelectorAll(".element--office-page")
                                .forEach((e) => e.classList.add("isHidden")),
                            document
                                .querySelector(".element--calculator-page")
                                .classList.remove("isHidden");
                    },
                    contacts: () => {
                        document
                            .querySelector(".connection")
                            .classList.remove("no-padding-top"),
                            document
                                .querySelector(".connection--second-block")
                                .classList.add("block-with-image"),
                            p();
                    },
                    successOr404: () => {
                        p(),
                            window.addEventListener(
                                "beforeunload",
                                function () {
                                    i("userOrderDataObj");
                                }
                            );
                    },
                };
            function l(e) {
                [...document.querySelectorAll(".dynamic-link")].forEach(
                    (t) => (t.href = e)
                );
            }
            function d(e) {
                e.forEach((e) => {
                    const t = document.querySelector(e);
                    t && t.classList.add("nav__link--current");
                });
            }
            function p() {
                document
                    .querySelector("main")
                    .classList.add("section--dark-background");
            }
            function f(e) {
                e.classList.toggle("isActive");
            }
            function h(e) {
                document
                    .querySelectorAll(".buildings__element")
                    .forEach((t) => (t.style.flexBasis = e));
            }
            function m(e, t) {
                e.appendChild(t);
            }
            function g(e, t) {
                return e.parentElement.previousElementSibling.querySelector(
                    `.${t}`
                );
            }
            function y(e) {
                e.classList.toggle("isHidden");
            }
            function v(e, t) {
                e.addEventListener("blur", (n) => {
                    const i = t(n.target.value);
                    e.value = i;
                });
            }
            function x(e, t, n) {
                y(e), y(t), f(n);
            }
            function b(e, t, n) {
                const i = e.querySelector(".work-shedule"),
                    r = e.querySelector(`.${t}`);
                i.classList.contains("isHidden") || (y(i), y(r), f(g(r, n)));
            }
            document.addEventListener("DOMContentLoaded", function () {
                const t = window.location.pathname,
                    n = document.querySelector("body"),
                    { themeToggler: i } = r();
                i.addEventListener("click", () => {
                    var t;
                    (t = n.classList.contains("active-dark-theme")
                        ? o.LIGHT
                        : o.DARK),
                        (s = t),
                        e("theme", t),
                        a();
                }),
                    a();
                const l = Object.keys(u).find((e) => c[e].includes(t));
                l && u[l]();
            });
            var w = !1;
            if ("undefined" != typeof window) {
                var E = {
                    get passive() {
                        w = !0;
                    },
                };
                window.addEventListener("testPassive", null, E),
                    window.removeEventListener("testPassive", null, E);
            }
            var S =
                    "undefined" != typeof window &&
                    window.navigator &&
                    window.navigator.platform &&
                    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
                        ("MacIntel" === window.navigator.platform &&
                            window.navigator.maxTouchPoints > 1)),
                _ = [],
                T = !1,
                C = -1,
                k = void 0,
                L = void 0,
                q = void 0,
                A = function (e) {
                    return _.some(function (t) {
                        return !(
                            !t.options.allowTouchMove ||
                            !t.options.allowTouchMove(e)
                        );
                    });
                },
                D = function (e) {
                    var t = e || window.event;
                    return (
                        !!A(t.target) ||
                        t.touches.length > 1 ||
                        (t.preventDefault && t.preventDefault(), !1)
                    );
                },
                N = function (e, t) {
                    if (e) {
                        if (
                            !_.some(function (t) {
                                return t.targetElement === e;
                            })
                        ) {
                            var n = { targetElement: e, options: t || {} };
                            (_ = [].concat(
                                (function (e) {
                                    if (Array.isArray(e)) {
                                        for (
                                            var t = 0, n = Array(e.length);
                                            t < e.length;
                                            t++
                                        )
                                            n[t] = e[t];
                                        return n;
                                    }
                                    return Array.from(e);
                                })(_),
                                [n]
                            )),
                                S
                                    ? window.requestAnimationFrame(function () {
                                          if (void 0 === L) {
                                              L = {
                                                  position:
                                                      document.body.style
                                                          .position,
                                                  top: document.body.style.top,
                                                  left: document.body.style
                                                      .left,
                                              };
                                              var e = window,
                                                  t = e.scrollY,
                                                  n = e.scrollX,
                                                  i = e.innerHeight;
                                              (document.body.style.position =
                                                  "fixed"),
                                                  (document.body.style.top =
                                                      -t),
                                                  (document.body.style.left =
                                                      -n),
                                                  setTimeout(function () {
                                                      return window.requestAnimationFrame(
                                                          function () {
                                                              var e =
                                                                  i -
                                                                  window.innerHeight;
                                                              e &&
                                                                  t >= i &&
                                                                  (document.body.style.top =
                                                                      -(t + e));
                                                          }
                                                      );
                                                  }, 300);
                                          }
                                      })
                                    : (function (e) {
                                          if (void 0 === q) {
                                              var t =
                                                      !!e &&
                                                      !0 ===
                                                          e.reserveScrollBarGap,
                                                  n =
                                                      window.innerWidth -
                                                      document.documentElement
                                                          .clientWidth;
                                              if (t && n > 0) {
                                                  var i = parseInt(
                                                      window
                                                          .getComputedStyle(
                                                              document.body
                                                          )
                                                          .getPropertyValue(
                                                              "padding-right"
                                                          ),
                                                      10
                                                  );
                                                  (q =
                                                      document.body.style
                                                          .paddingRight),
                                                      (document.body.style.paddingRight =
                                                          i + n + "px");
                                              }
                                          }
                                          void 0 === k &&
                                              ((k =
                                                  document.body.style.overflow),
                                              (document.body.style.overflow =
                                                  "hidden"));
                                      })(t),
                                S &&
                                    ((e.ontouchstart = function (e) {
                                        1 === e.targetTouches.length &&
                                            (C = e.targetTouches[0].clientY);
                                    }),
                                    (e.ontouchmove = function (t) {
                                        1 === t.targetTouches.length &&
                                            (function (e, t) {
                                                var n =
                                                    e.targetTouches[0].clientY -
                                                    C;
                                                !A(e.target) &&
                                                    ((t &&
                                                        0 === t.scrollTop &&
                                                        n > 0) ||
                                                    ((function (e) {
                                                        return (
                                                            !!e &&
                                                            e.scrollHeight -
                                                                e.scrollTop <=
                                                                e.clientHeight
                                                        );
                                                    })(t) &&
                                                        n < 0)
                                                        ? D(e)
                                                        : e.stopPropagation());
                                            })(t, e);
                                    }),
                                    T ||
                                        (document.addEventListener(
                                            "touchmove",
                                            D,
                                            w ? { passive: !1 } : void 0
                                        ),
                                        (T = !0)));
                        }
                    } else
                        console.error(
                            "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
                        );
                },
                j = function (e) {
                    e
                        ? ((_ = _.filter(function (t) {
                              return t.targetElement !== e;
                          })),
                          S &&
                              ((e.ontouchstart = null),
                              (e.ontouchmove = null),
                              T &&
                                  0 === _.length &&
                                  (document.removeEventListener(
                                      "touchmove",
                                      D,
                                      w ? { passive: !1 } : void 0
                                  ),
                                  (T = !1))),
                          S
                              ? (function () {
                                    if (void 0 !== L) {
                                        var e = -parseInt(
                                                document.body.style.top,
                                                10
                                            ),
                                            t = -parseInt(
                                                document.body.style.left,
                                                10
                                            );
                                        (document.body.style.position =
                                            L.position),
                                            (document.body.style.top = L.top),
                                            (document.body.style.left = L.left),
                                            window.scrollTo(t, e),
                                            (L = void 0);
                                    }
                                })()
                              : (void 0 !== q &&
                                    ((document.body.style.paddingRight = q),
                                    (q = void 0)),
                                void 0 !== k &&
                                    ((document.body.style.overflow = k),
                                    (k = void 0))))
                        : console.error(
                              "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
                          );
                };
            (() => {
                const e = document.querySelector(".aside-menu"),
                    t = document.querySelector(".open-menu-btn"),
                    n = document.querySelector(".close-menu-btn"),
                    i = () => {
                        const n =
                            "true" === t.getAttribute("aria-expanded") || !1;
                        t.setAttribute("aria-expanded", !n),
                            e.classList.toggle("is-open"),
                            (n ? j : N)(document.body);
                    };
                t.addEventListener("click", i),
                    n.addEventListener("click", i),
                    window
                        .matchMedia("(min-width: 768px)")
                        .addEventListener("change", (n) => {
                            n.matches &&
                                (e.classList.remove("is-open"),
                                t.setAttribute("aria-expanded", !1),
                                j(document.body));
                        });
            })(),
                n(699);
            const O = [
                    {
                        description: "I wash the floor",
                        reverse: !1,
                        styles: {
                            base: {
                                width: "77px",
                                height: "49px",
                                bottom: "4px",
                                left: "39px",
                            },
                            mediaQuery768: {
                                width: "114px",
                                height: "70px",
                                bottom: "16px",
                                left: "168px",
                            },
                            mediaQuery1440: {
                                width: "114px",
                                height: "70px",
                                bottom: "66px",
                                left: "334px",
                            },
                        },
                    },
                    {
                        description: "I wipe the tiles",
                        reverse: !1,
                        styles: {
                            base: {
                                width: "99px",
                                height: "49px",
                                bottom: "85px",
                                left: "78px",
                            },
                            mediaQuery768: {
                                width: "146px",
                                height: "70px",
                                bottom: "191px",
                                left: "214px",
                            },
                            mediaQuery1440: {
                                width: "146px",
                                height: "70px",
                                bottom: "344px",
                                left: "429px",
                            },
                        },
                    },
                    {
                        description: "I wash the sink and stove",
                        reverse: !0,
                        styles: {
                            base: {
                                width: "60px",
                                height: "74px",
                                bottom: "31px",
                                left: "173px",
                            },
                            mediaQuery768: {
                                width: "184px",
                                height: "70px",
                                bottom: "144px",
                                left: "326px",
                            },
                            mediaQuery1440: {
                                width: "184px",
                                height: "70px",
                                bottom: "288px",
                                left: "625px",
                            },
                        },
                    },
                    {
                        description: "I wash equipment",
                        reverse: !1,
                        styles: {
                            base: {
                                width: "76px",
                                height: "49px",
                                bottom: "107px",
                                right: "75px",
                            },
                            mediaQuery768: {
                                width: "113px",
                                height: "70px",
                                bottom: "214px",
                                right: "125px",
                            },
                            mediaQuery1440: {
                                width: "113px",
                                height: "70px",
                                bottom: "400px",
                                right: "220px",
                            },
                        },
                    },
                    {
                        description:
                            "I wipe window sills, radiators, baseboards, doors and switches!",
                        reverse: !1,
                        styles: {
                            base: {
                                width: "93px",
                                height: "86px",
                                top: "7px",
                                right: "6px",
                            },
                            mediaQuery768: {
                                width: "239px",
                                height: "88px",
                                top: "62px",
                                right: "5px",
                            },
                            mediaQuery1440: {
                                width: "269px",
                                height: "98px",
                                top: "135px",
                                right: "42px",
                            },
                        },
                    },
                ],
                H = [
                    {
                        description: "I vacuum and wash the floor",
                        reverse: !1,
                        styles: {
                            base: {
                                width: "90px",
                                height: "60px",
                                bottom: "20px",
                                left: "66px",
                            },
                            mediaQuery768: {
                                width: "125px",
                                height: "90px",
                                bottom: "45px",
                                left: "175px",
                            },
                            mediaQuery1440: {
                                width: "125px",
                                height: "90px",
                                bottom: "90px",
                                left: "334px",
                            },
                        },
                    },
                    {
                        description:
                            "Dry cleaning of sofas, mattresses, pillows, chairs and armchairs",
                        styles: {
                            base: {
                                width: "99px",
                                height: "70px",
                                bottom: "80px",
                                left: "90px",
                            },
                            mediaQuery768: {
                                width: "146px",
                                height: "105px",
                                bottom: "180px",
                                left: "214px",
                            },
                            mediaQuery1440: {
                                width: "146px",
                                height: "105px",
                                bottom: "330px",
                                left: "429px",
                            },
                        },
                    },
                    {
                        description:
                            "I wipe dust from all open and closed surfaces",
                        reverse: !0,
                        styles: {
                            base: {
                                width: "120px",
                                height: "74px",
                                bottom: "20px",
                                left: "130px",
                            },
                            mediaQuery768: {
                                width: "184px",
                                height: "100px",
                                bottom: "100px",
                                left: "300px",
                            },
                            mediaQuery1440: {
                                width: "184px",
                                height: "100px",
                                bottom: "198px",
                                left: "600px",
                            },
                        },
                    },
                    {
                        description: "I clean and take our garbage",
                        reverse: !1,
                        styles: {
                            base: {
                                width: "90px",
                                height: "60px",
                                bottom: "70px",
                                left: "25px",
                            },
                            mediaQuery768: {
                                width: "130px",
                                height: "90px",
                                bottom: "140px",
                                left: "75px",
                            },
                            mediaQuery1440: {
                                width: "130px",
                                height: "90px",
                                bottom: "260px",
                                left: "200px",
                            },
                        },
                    },
                    {
                        description:
                            "I clean windows, window sillsm radiators, baseboards, switches, door handles, chandeliers",
                        reverse: !1,
                        styles: {
                            base: {
                                width: "120px",
                                height: "86px",
                                top: "10px",
                                right: "6px",
                            },
                            mediaQuery768: {
                                width: "239px",
                                height: "110px",
                                top: "62px",
                                right: "15px",
                            },
                            mediaQuery1440: {
                                width: "239px",
                                height: "110px",
                                top: "180px",
                                right: "100px",
                            },
                        },
                    },
                    {
                        description: "I arrange shoes and pack your things",
                        reverse: !1,
                        styles: {
                            base: {
                                width: "99px",
                                height: "70px",
                                top: "20px",
                                left: "130px",
                            },
                            mediaQuery768: {
                                width: "146px",
                                height: "105px",
                                top: "50px",
                                left: "290px",
                            },
                            mediaQuery1440: {
                                width: "146px",
                                height: "105px",
                                top: "160px",
                                left: "540px",
                            },
                        },
                    },
                    {
                        description: "I make the beds and change the bed linen",
                        reverse: !1,
                        styles: {
                            base: {
                                width: "120px",
                                height: "75px",
                                bottom: "60px",
                                right: "6px",
                            },
                            mediaQuery768: {
                                width: "190px",
                                height: "90px",
                                bottom: "140px",
                                right: "15px",
                            },
                            mediaQuery1440: {
                                width: "190px",
                                height: "90px",
                                bottom: "230px",
                                right: "40px",
                            },
                        },
                    },
                ],
                I = [
                    {
                        description: "I make the floor and baseboards, vacuum",
                        reverse: !1,
                        styles: {
                            base: {
                                bottom: "10px",
                                left: "10px",
                                width: "120px",
                                height: "60px",
                            },
                            mediaQuery768: {
                                width: "170px",
                                height: "90px",
                                bottom: "30px",
                                left: "30px",
                            },
                            mediaQuery1440: {
                                width: "170px",
                                height: "90px",
                                bottom: "50px",
                                left: "100px",
                            },
                        },
                    },
                    {
                        description: "I clean and disinfect the toilet",
                        reverse: !1,
                        styles: {
                            base: {
                                bottom: "55px",
                                left: "55px",
                                width: "140px",
                                height: "60px",
                            },
                            mediaQuery768: {
                                width: "160px",
                                height: "90px",
                                bottom: "120px",
                                left: "170px",
                            },
                            mediaQuery1440: {
                                width: "160px",
                                height: "90px",
                                bottom: "200px",
                                left: "330px",
                            },
                        },
                    },
                    {
                        description: "I clean all surfaces",
                        reverse: !0,
                        styles: {
                            base: {
                                bottom: "20px",
                                left: "130px",
                                width: "120px",
                                height: "50px",
                            },
                            mediaQuery768: {
                                width: "184px",
                                height: "70px",
                                bottom: "60px",
                                left: "300px",
                            },
                            mediaQuery1440: {
                                width: "184px",
                                height: "70px",
                                bottom: "160px",
                                left: "550px",
                            },
                        },
                    },
                    {
                        description: "I clean the bathtub, faucets and shower",
                        reverse: !1,
                        styles: {
                            base: {
                                top: "10px",
                                left: "75px",
                                width: "90px",
                                height: "60px",
                            },
                            mediaQuery768: {
                                width: "130px",
                                height: "90px",
                                top: "65px",
                                left: "190px",
                            },
                            mediaQuery1440: {
                                width: "130px",
                                height: "90px",
                                top: "145px",
                                left: "370px",
                            },
                        },
                    },
                    {
                        description: "I wash the sink",
                        reverse: !1,
                        styles: {
                            base: {
                                bottom: "55px",
                                right: "6px",
                                width: "100px",
                                height: "50px",
                            },
                            mediaQuery768: {
                                width: "140px",
                                height: "70px",
                                bottom: "120px",
                                right: "35px",
                            },
                            mediaQuery1440: {
                                width: "140px",
                                height: "70px",
                                bottom: "200px",
                                right: "120px",
                            },
                        },
                    },
                    {
                        description: "Let's clean the mirror",
                        reverse: !1,
                        styles: {
                            base: {
                                top: "5px",
                                right: "55px",
                                width: "70px",
                                height: "60px",
                            },
                            mediaQuery768: {
                                width: "146px",
                                height: "70px",
                                top: "50px",
                                right: "120px",
                            },
                            mediaQuery1440: {
                                width: "146px",
                                height: "70px",
                                top: "140px",
                                right: "230px",
                            },
                        },
                    },
                ],
                M = ["Kitchen", "Rooms", "Bathroom"],
                R = document.querySelector(".swiper-wrapper");
            function P(e) {
                return 0 === e ? O : 1 === e ? H : I;
            }
            function W(e) {
                return e.classList.contains("plus-btn")
                    ? e
                    : "use" === e.tagName || "svg" === e.tagName
                    ? e.closest(".toolkit__btn")
                    : null;
            }
            function $(e, t) {
                e.closest(".toolkit__wrapper")
                    .querySelector(".toolkit__desc")
                    .classList.toggle("is-shown", t);
            }
            [".schema--kitchen", ".schema--room", ".schema--bath"].forEach(
                (e, t) => {
                    window.addEventListener("resize", () => {
                        return (
                            (n = P(t)),
                            (i = e),
                            void document
                                .querySelectorAll(`${i} .toolkit__wrapper`)
                                .forEach((e) => {
                                    const t =
                                        e.classList[1].replace("wrapper-", "") -
                                        1;
                                    !(function (e, t) {
                                        const n = window.innerWidth,
                                            i =
                                                n >= 1440
                                                    ? t.mediaQuery1440
                                                    : n >= 768
                                                    ? t.mediaQuery768
                                                    : t.base;
                                        Object.assign(e.style, i);
                                    })(e, n[t].styles);
                                })
                        );
                        var n, i;
                    }),
                        (function (e, t) {
                            const n = document.querySelector(t);
                            e.forEach((e, t) => {
                                const i = (function (e, t) {
                                    const n = document.createElement("div");
                                    n.classList.add("toolkit__wrapper"),
                                        n.classList.add(`wrapper-${t + 1}`),
                                        n.setAttribute(
                                            "data-schema-id",
                                            `schema-${t + 1}`
                                        );
                                    const i = document.createElement("span");
                                    i.classList.add("toolkit__desc"),
                                        e.reverse &&
                                            i.classList.add(
                                                "toolkit__desc--reverse"
                                            ),
                                        (i.textContent = e.description);
                                    const r = `\n    <button type="button" class="${
                                        e.reverse
                                            ? "plus-btn plus-btn--toolkit toolkit__btn toolkit__btn--reverse"
                                            : "plus-btn plus-btn--toolkit toolkit__btn"
                                    }" aria-label="показати повідомлення про вид робіт, що надається">\n      <svg class="toolkit__icon" width="18" height="18">\n        <use href="images/sprite.svg#icon-plus"></use>\n      </svg>\n    </button>\n  `;
                                    n.appendChild(i),
                                        n.insertAdjacentHTML("beforeend", r);
                                    const o = window.innerWidth,
                                        s =
                                            o >= 1440
                                                ? e.styles.mediaQuery1440
                                                : o >= 768
                                                ? e.styles.mediaQuery768
                                                : e.styles.base;
                                    return Object.assign(n.style, s), n;
                                })(e, t);
                                n.appendChild(i);
                            });
                        })(P(t), e);
                }
            ),
                new Swiper(".swiper-container", {
                    effect: "cube",
                    cubeEffect: { slideShadows: !1 },
                    speed: 1e3,
                    grabCursor: !0,
                    pagination: {
                        el: ".swiper-pagination-rooms",
                        clickable: !0,
                        renderBullet: (e, t) => `<li class="${t}">${M[e]}</li>`,
                    },
                    keyboard: { enabled: !0, onlyInViewport: !0 },
                    mousewheel: { invert: !0 },
                }),
                R.addEventListener("mouseover", function (e) {
                    const t = W(e.target);
                    t && $(t, !0);
                }),
                R.addEventListener("mouseout", function (e) {
                    const t = W(e.target);
                    t && $(t, !1);
                }),
                [...document.querySelectorAll(".swiper-slide")].forEach((e) =>
                    e.setAttribute("role", "Слайд")
                );
            var z = n(755),
                B = n.n(z);
            B()(function () {
                const e = B()(".toggle-question-btn"),
                    t = B()(".accordion");
                function n(e) {
                    const t = e.find(".icon--plus"),
                        n = e.find(".icon--minus");
                    t.removeClass("isHidden"), n.addClass("isHidden");
                }
                function i(e) {
                    const t = e.find(".icon--plus"),
                        n = e.find(".icon--minus");
                    t.toggleClass("isHidden"), n.toggleClass("isHidden");
                }
                function r(e) {
                    const t = e.find(".accordion__content");
                    e.removeClass("accordion__active"), t.css("max-height", "");
                }
                e.on("click", function () {
                    const t = B()(this);
                    B()(event.target).is(t) && i(t),
                        e.each(function () {
                            n(B()(this));
                        });
                }),
                    t.each(function () {
                        B()(this)
                            .find(".accordion__intro")
                            .on("click", function () {
                                !(function (o) {
                                    const s = o.find(".toggle-question-btn");
                                    e.each(function () {
                                        n(B()(this));
                                    }),
                                        (function (e) {
                                            "0px" !==
                                            e
                                                .find(".accordion__content")
                                                .css("max-height")
                                                ? r(e)
                                                : (t.each(function () {
                                                      r(B()(this));
                                                  }),
                                                  (function (e) {
                                                      const t = e.find(
                                                          ".accordion__content"
                                                      );
                                                      e.addClass(
                                                          "accordion__active"
                                                      ),
                                                          t.css(
                                                              "max-height",
                                                              t[0]
                                                                  .scrollHeight +
                                                                  "px"
                                                          );
                                                  })(e));
                                        })(o),
                                        i(s);
                                })(B()(this).closest(".accordion"));
                            });
                    });
            });
            const F = [
                {
                    name: "Michael Smith",
                    text: "Outstanding service! Sarah, the cleaner, was friendly and hardworking. She arrived right on time and did an amazing job cleaning my apartment!",
                    rating: 5,
                },
                {
                    name: "Jessica Taylor",
                    text: "I hired a cleaning service after a home renovation, and the team from Sparkling Cleaning Houses was a lifesaver! They cleaned up quickly and meticulously. I’d still be cleaning without their help!",
                    rating: 5,
                },
                {
                    name: "David Johnson",
                    text: "I’m now on my second monthly subscription with Sparkling Cleaning Houses. My home is always sparkling clean and fresh! Thank you for your excellent service!",
                    rating: 5,
                },
                {
                    name: "Emily Davis",
                    text: "The cleaners and service are fantastic. I’m glad I chose you—they were thorough and quick!",
                    rating: 5,
                },
                {
                    name: "Chris Brown",
                    text: "Thanks for the amazing job! You did a great job cleaning our office after the New Year’s party!",
                    rating: 5,
                },
                {
                    name: "Lisa Martinez",
                    text: "I ordered a monthly cleaning subscription for my grandmother. Jenna from Sparkling Cleaning Houses was incredibly pleasant and did an excellent job cleaning!",
                    rating: 5,
                },
            ];
            var G = n(751),
                Q = n.n(G);
            function Y() {
                return (
                    0 ===
                    document
                        .createElement("canvas")
                        .toDataURL("image/webp")
                        .indexOf("data:image/webp")
                );
            }
            function U(e, t) {
                return Y()
                    ? `url(images/${e}/${t}.webp)`
                    : `url('images/${e}/${image}')`;
            }
            let X = 1;
            function V(e, t, n) {
                const i = document.createElement("li");
                i.className = e;
                const r = document.createElement("ul");
                return (
                    (r.className = t),
                    n.forEach((e, t) => {
                        r.appendChild(
                            (function (e, t) {
                                const n = document.createElement("li");
                                n.className = `reviews__item item-${e}`;
                                const i = (function (e) {
                                        const t = document.createElement("h3");
                                        return (
                                            (t.className = "review__title"),
                                            (t.textContent = e),
                                            t
                                        );
                                    })(t.name),
                                    r = (function (e) {
                                        const t = document.createElement("ul");
                                        t.className = "review__rating";
                                        for (let n = 0; n < e; n++)
                                            t.appendChild(K());
                                        return t;
                                    })(t.rating),
                                    o = (function (e) {
                                        const t = document.createElement("p");
                                        return (
                                            (t.className = "review__text"),
                                            (t.innerHTML = e),
                                            t
                                        );
                                    })(t.text);
                                return (
                                    n.appendChild(i),
                                    n.appendChild(r),
                                    n.appendChild(o),
                                    n
                                );
                            })(t + 1, e)
                        );
                    }),
                    i.appendChild(r),
                    i
                );
            }
            function K() {
                const e = document.createElement("li");
                e.className = "rating__item";
                const t = (function ({
                    width: e,
                    srcPrefix: t,
                    media: n,
                    alt: i,
                    className: r,
                }) {
                    const o = document.createElement("picture");
                    (o.className = r),
                        o.appendChild(
                            (function (e, t, n) {
                                const i = document.createElement("source");
                                return (
                                    (i.width = e),
                                    (i.height = e),
                                    (i.srcset = `${t}@1x.png 1x, ${t}@2x.png 2x`),
                                    (i.media = n),
                                    i
                                );
                            })(e, t, n)
                        );
                    const s = {
                        width: 26,
                        height: 26,
                        src: `${t}@1x.png`,
                        alt: i,
                        className: r,
                    };
                    return (
                        o.appendChild(
                            (function ({
                                width: e,
                                height: t,
                                src: n,
                                alt: i,
                                className: r,
                            }) {
                                const o = document.createElement("img");
                                return (
                                    (o.className = r),
                                    (o.width = e),
                                    (o.height = t),
                                    (o.src = n),
                                    (o.alt = i),
                                    o
                                );
                            })(s)
                        ),
                        o
                    );
                })({
                    width: 20,
                    srcPrefix: "images/reviews/tablet/star",
                    media: "(max-width: 1439px)",
                    alt: "Жовта зірка",
                    className: "rating__icon",
                });
                return e.appendChild(t), e;
            }
            document.addEventListener("DOMContentLoaded", function () {
                const e = document.querySelector(".reviews__swiper"),
                    t = document.querySelector(".mobile__reviews-list"),
                    n = document.querySelector(".mobile__show-more-btn"),
                    i = (function (e, t) {
                        const n = [];
                        for (let t = 0; t < e.length; t += 6)
                            n.push(e.slice(t, t + 6));
                        return n;
                    })(F);
                (function (e, t, n) {
                    n.forEach((n) => {
                        e.appendChild(V("swiper-slide", "reviews__list", n)),
                            t.appendChild(
                                V("mobile__swiper-slide", "mobile__reviews", n)
                            );
                    });
                })(e, t, i),
                    document.querySelectorAll(".reviews__list").forEach((e) => {
                        new (Q())(e, {
                            itemSelector: ".reviews__item",
                            gutter: 30,
                        });
                    }),
                    (function (e) {
                        const t = document.querySelector(".gallery");
                        t.addEventListener("mouseleave", () => {
                            (e.params.autoplay.disableOnInteraction = !1),
                                (e.params.autoplay.delay = 2e3),
                                e.autoplay.start();
                        }),
                            t.addEventListener("mouseenter", () => {
                                e.autoplay.stop();
                            });
                    })(
                        new Swiper(".gallery", {
                            direction: "horizontal",
                            effect: "slider",
                            keyboard: { enabled: !0, onlyInViewport: !0 },
                            mousewheel: { invert: !0 },
                            loop: !0,
                            speed: 2e3,
                            autoplay: { delay: 2e3, disableOnInteraction: !1 },
                            navigation: {
                                nextEl: ".gallery__next-btn",
                                prevEl: ".gallery__prev-btn",
                            },
                            pagination: {
                                el: ".gallery__swiper-pagination",
                                clickable: !0,
                                type: "progressbar",
                            },
                        })
                    ),
                    n.addEventListener("click", () =>
                        (function (e, t) {
                            const n = e.querySelectorAll(
                                ".mobile__swiper-slide"
                            );
                            (n[X].style.display = "list-item"),
                                X++,
                                X >= n.length && (t.style.display = "none");
                        })(t, n)
                    );
                [...document.querySelectorAll(".swiper-slide")].forEach((e) =>
                    e.setAttribute("role", "Слайд")
                );
            });
            const J = {
                winter: [
                    {
                        image: "winter-1.jpg",
                        dataName: "Winter Magic Deal",
                        description:
                            "Special winter season offer: Get 20% off cleaning services for any property.",
                        terms: "Valid from December 1, 2025, to January 18, 2026.",
                        promo: "WINTER20",
                    },
                    {
                        image: "winter-2.jpg",
                        dataName: "Snowy Savings",
                        description:
                            "Book our services this winter and get 15% off your second cleaning.",
                        terms: "Valid from January 20 to February 20, 2026.",
                        promo: "SNOW15",
                    },
                    {
                        image: "winter-3.jpg",
                        dataName: "Winter Freshness",
                        description:
                            "Make your home shine this winter! Get a free air freshener with every cleaning order.",
                        terms: "Valid from February 14 to March 1, 2026.",
                        promo: "FRESHSCENT",
                    },
                ],
                spring: [
                    {
                        image: "spring-1.jpg",
                        dataName: "Spring Cleaning Feel",
                        description:
                            "Start the season fresh with a clean, renewed home! Get 10% off kitchen cleaning services.",
                        terms: "Valid from March 1 to April 30, 2026.",
                        promo: "SPRINGCLEAN",
                    },
                    {
                        image: "spring-2.jpg",
                        dataName: "Home Awakening",
                        description:
                            "Wake your home up with the spring sunshine! Book two cleanings and get the third one free.",
                        terms: "Valid from March 15 to April 30, 2026.",
                        promo: "AWAKEN",
                    },
                    {
                        image: "spring-3.jpg",
                        dataName: "Fresh Start",
                        description:
                            "A new season calls for a fresh deal! Get 25% off bathroom cleaning services.",
                        terms: "Valid from April 1 to May 31, 2026.",
                        promo: "FRESHSTART",
                    },
                ],
                summer: [
                    {
                        image: "summer-1.jpg",
                        dataName: "Sunny Season Special",
                        description:
                            "Summer is here! Enjoy 30% off balcony or patio cleaning services.",
                        terms: "Valid from June 1 to June 20, 2026.",
                        promo: "SUNNY30",
                    },
                    {
                        image: "summer-2.jpg",
                        dataName: "Summer Freshness",
                        description:
                            "Summer is the time to refresh your home! Book two cleanings and get 50% off the third.",
                        terms: "Valid from July 15 to July 31, 2026.",
                        promo: "FRESH",
                    },
                    {
                        image: "summer-3.jpg",
                        dataName: "New Home, New Life",
                        description:
                            "Take control of summer cleaning! Get 15% off post-renovation cleaning services.",
                        terms: "Valid from August 1 to August 31, 2026.",
                        promo: "NEWLIFE",
                    },
                ],
                autumn: [
                    {
                        image: "autumn-1.jpg",
                        dataName: "Golden Deals for Fall",
                        description:
                            "Celebrate the golden season with special discounts! Get 30% off general cleaning services.",
                        terms: "Valid from September 15 to November 30, 2025.",
                        promo: "GOLD30",
                    },
                    {
                        image: "autumn-2.jpg",
                        dataName: "Fall Price Drop",
                        description:
                            "Immerse yourself in the cozy fall atmosphere with 15% off furniture cleaning during our 'Fall Price Drop' promotion.",
                        terms: "Valid from October 15 to October 30, 2025.",
                        promo: "FALL20",
                    },
                    {
                        image: "autumn-3.jpg",
                        dataName: "Back-to-School Season",
                        description:
                            "Show appreciation to straight-A students and educators! Get 15% off cleaning services as a token of thanks.",
                        terms: "Valid from September 1 to November 1, 2025.",
                        promo: "SCHOOL15",
                    },
                ],
            };
            function Z(e, t = "") {
                const n = document.createElement("div");
                return (n.className = e), (n.innerHTML = t), n;
            }
            const ee = document.querySelector(".swiper-container-parent"),
                te = (function () {
                    const e = document.createElement("ul");
                    return (
                        (e.className =
                            "swiper-wrapper discounts__swiper-wrapper"),
                        Object.keys(J).forEach((t) => {
                            const n = (function (e) {
                                const t = document.createElement("li");
                                t.className = `swiper-slide swiper-slide--${e}`;
                                const n = (function (e) {
                                    const t = document.createElement("div");
                                    t.className = "swiper-container-nested";
                                    const n = document.createElement("div");
                                    (n.className =
                                        "swiper-wrapper discounts__inner-swiper-wrapper"),
                                        J[e].forEach((t, i) => {
                                            n.appendChild(
                                                (function (e, t) {
                                                    const {
                                                            image: n,
                                                            dataName: i,
                                                            description: r,
                                                            terms: o,
                                                            promo: s,
                                                        } = J[e][t],
                                                        a = U(
                                                            "discounts",
                                                            (function (e) {
                                                                return e.split(
                                                                    "."
                                                                )[0];
                                                            })(n)
                                                        ),
                                                        c = (function (
                                                            e,
                                                            t,
                                                            n
                                                        ) {
                                                            const i =
                                                                document.createElement(
                                                                    "div"
                                                                );
                                                            return (
                                                                (i.className = `swiper-slide discounts__slide discounts__slide--${e}`),
                                                                i.setAttribute(
                                                                    "data-name",
                                                                    t
                                                                ),
                                                                Y()
                                                                    ? (i.style.backgroundImage =
                                                                          n)
                                                                    : (i.style.cssText = `background-image: ${n}`),
                                                                i
                                                            );
                                                        })(e, i, a);
                                                    return (
                                                        c.appendChild(
                                                            (function (
                                                                e,
                                                                t,
                                                                n
                                                            ) {
                                                                const i =
                                                                    document.createElement(
                                                                        "div"
                                                                    );
                                                                i.className =
                                                                    "swiper-slide__glass";
                                                                const r =
                                                                        (function (
                                                                            e,
                                                                            t
                                                                        ) {
                                                                            const n =
                                                                                document.createElement(
                                                                                    "div"
                                                                                );
                                                                            return (
                                                                                (n.className =
                                                                                    "glass__descr"),
                                                                                (function (
                                                                                    e
                                                                                ) {
                                                                                    const t =
                                                                                        e.match(
                                                                                            /[^.!?]+[.!?]+/g
                                                                                        );
                                                                                    return t &&
                                                                                        t.length >=
                                                                                            1
                                                                                        ? t
                                                                                        : [
                                                                                              e,
                                                                                          ];
                                                                                })(
                                                                                    e
                                                                                ).forEach(
                                                                                    (
                                                                                        e
                                                                                    ) => {
                                                                                        const t =
                                                                                            document.createElement(
                                                                                                "p"
                                                                                            );
                                                                                        (t.innerHTML =
                                                                                            (function (
                                                                                                e
                                                                                            ) {
                                                                                                return e.replace(
                                                                                                    /(\d+%)/g,
                                                                                                    '<span class="glass__accent">$1</span>'
                                                                                                );
                                                                                            })(
                                                                                                e
                                                                                            )),
                                                                                            n.appendChild(
                                                                                                t
                                                                                            );
                                                                                    }
                                                                                ),
                                                                                n
                                                                            );
                                                                        })(e),
                                                                    o =
                                                                        (function (
                                                                            e,
                                                                            t
                                                                        ) {
                                                                            const n =
                                                                                document.createElement(
                                                                                    "p"
                                                                                );
                                                                            return (
                                                                                (n.className =
                                                                                    "glass__terms"),
                                                                                (n.innerHTML =
                                                                                    e.replace(
                                                                                        /з (.*?) по (.*?) (\d{4} року)/g,
                                                                                        function (
                                                                                            e,
                                                                                            t,
                                                                                            n,
                                                                                            i
                                                                                        ) {
                                                                                            return `з <span class="glass__accent--term">${t}</span> по <span class="glass__accent--term">${n} ${i}</span> `;
                                                                                        }
                                                                                    )),
                                                                                n
                                                                            );
                                                                        })(t),
                                                                    s =
                                                                        (function (
                                                                            e
                                                                        ) {
                                                                            const t =
                                                                                document.createElement(
                                                                                    "div"
                                                                                );
                                                                            t.className =
                                                                                "promo";
                                                                            const n =
                                                                                    Z(
                                                                                        "glass__promo promo__wrapper promo__wrapper--left",
                                                                                        "PROMO CODE"
                                                                                    ),
                                                                                i =
                                                                                    Z(
                                                                                        "promo__wrapper promo__wrapper--right"
                                                                                    ),
                                                                                r =
                                                                                    document.createElement(
                                                                                        "span"
                                                                                    );
                                                                            return (
                                                                                (r.innerHTML =
                                                                                    e),
                                                                                (r.className =
                                                                                    "promo__text"),
                                                                                i.appendChild(
                                                                                    r
                                                                                ),
                                                                                i.appendChild(
                                                                                    (function () {
                                                                                        const e =
                                                                                            document.createElementNS(
                                                                                                "http://www.w3.org/2000/svg",
                                                                                                "svg"
                                                                                            );
                                                                                        e.setAttribute(
                                                                                            "class",
                                                                                            "promo__copy-icon"
                                                                                        ),
                                                                                            e.setAttribute(
                                                                                                "width",
                                                                                                "30"
                                                                                            ),
                                                                                            e.setAttribute(
                                                                                                "height",
                                                                                                "30"
                                                                                            );
                                                                                        const t =
                                                                                            document.createElementNS(
                                                                                                "http://www.w3.org/2000/svg",
                                                                                                "use"
                                                                                            );
                                                                                        return (
                                                                                            t.setAttribute(
                                                                                                "href",
                                                                                                "images/sprite.svg#icon-copy"
                                                                                            ),
                                                                                            e.appendChild(
                                                                                                t
                                                                                            ),
                                                                                            e
                                                                                        );
                                                                                    })()
                                                                                ),
                                                                                t.appendChild(
                                                                                    n
                                                                                ),
                                                                                t.appendChild(
                                                                                    i
                                                                                ),
                                                                                t
                                                                            );
                                                                        })(n);
                                                                return (
                                                                    i.appendChild(
                                                                        r
                                                                    ),
                                                                    i.appendChild(
                                                                        o
                                                                    ),
                                                                    i.appendChild(
                                                                        s
                                                                    ),
                                                                    i
                                                                );
                                                            })(r, o, s)
                                                        ),
                                                        c
                                                    );
                                                })(e, i)
                                            );
                                        }),
                                        t.appendChild(n);
                                    const i = document.createElement("div");
                                    return (
                                        (i.className =
                                            "swiper-pagination swiper-pagination-nested"),
                                        t.appendChild(i),
                                        t
                                    );
                                })(e);
                                return t.appendChild(n), t;
                            })(t);
                            e.appendChild(n);
                        }),
                        e
                    );
                })();
            ee.appendChild(te);
            const ne = (function () {
                const e = (function () {
                    const e = new Date().getMonth(),
                        t = [2, 5, 8, 11],
                        n = ["spring", "summer", "autumn", "winter"];
                    for (let i = 0; i < t.length; i++)
                        if (e >= t[i] && e < t[i + 1]) return n[i];
                })();
                return (
                    ["spring", "summer", "autumn", "winter"].indexOf(e) + 1 || 0
                );
            })();
            new Swiper(".swiper-container-parent", {
                spaceBetween: 20,
                initialSlide: ne,
                effect: "fade",
                slidesPerView: 1,
                speed: 1500,
                watchOverflow: true,
                keyboard: { enabled: !0, onlyInViewport: !0 },
                mousewheel: { invert: !0 },
                pagination: {
                    el: ".swiper-pagination-parent",
                    clickable: !0,
                    renderBullet: function (e, t) {
                        const n = Object.keys(J)[e],
                            i = `discount__pagination-btn btn--${n}`,
                            r = (function (e) {
                                const t = document.createElement("svg");
                                (t.className = "discount__pagination-icon"),
                                    (t.width = 40),
                                    (t.height = 40);
                                const n = document.createElement("use");
                                return (
                                    n.setAttribute(
                                        "href",
                                        `images/sprite.svg#icon-${e}`
                                    ),
                                    t.appendChild(n),
                                    t
                                );
                            })(n);
                        return (
                            '<span class="' +
                            t +
                            " " +
                            i +
                            '">' +
                            r.outerHTML +
                            "</span>"
                        );
                    },
                },
            }),
                document
                    .querySelectorAll(".swiper-container-nested")
                    .forEach(function (e) {
                        const t = e.children[0].children,
                            n = Array.from(t).map((e) =>
                                e.getAttribute("data-name")
                            );
                        new Swiper(e, {
                            direction: "vertical",
                            effect: "slider",
                            slidesPerView: 1,
                            speed: 1e3,
                            keyboard: { enabled: !0, onlyInViewport: !0 },
                            mousewheel: { invert: !0 },
                            nested: !0,
                            watchOverflow: true,
                            pagination: {
                                el: ".swiper-pagination-nested",
                                clickable: !0,
                                renderBullet: (e, t) =>
                                    '<span class="' +
                                    t +
                                    '">' +
                                    n[e] +
                                    "</span>",
                            },
                        });
                    }),
                ee.addEventListener("click", function (e) {
                    const t = e.target;
                    if (t.classList.contains("promo__copy-icon")) {
                        const e = t.previousElementSibling;
                        !(function (e) {
                            const t = document.createElement("textarea");
                            (t.value = e),
                                document.body.appendChild(t),
                                t.select(),
                                document.execCommand("copy"),
                                document.body.removeChild(t);
                        })(e.textContent),
                            e.classList.add("isCopied"),
                            setTimeout(() => {
                                e.classList.remove("isCopied");
                            }, 1e3);
                    }
                }),
                [...document.querySelectorAll(".swiper-slide")].forEach((e) =>
                    e.setAttribute("role", "Слайд")
                );
            const ie = {
                name: "subscription",
                openModalBtn: document.querySelector(
                    "[data-subscription-modal-open]"
                ),
                closeModalBtn: document.querySelector(
                    "[data-subscription-modal-close]"
                ),
                modal: document.querySelector("[data-subscription-modal]"),
                backdrop: document.querySelector(".backdrop--subscr"),
            };
            Be(ie);
            const re = document.querySelectorAll(".buildings__element"),
                oe = document.querySelector(".control-quantity-btn--plus"),
                se = document.querySelector(".control-quantity-btn--minus"),
                ae = document.querySelectorAll(".service-element .checkbox"),
                ce = document.querySelector(".table__data"),
                ue = document.querySelector("#take-keys-btn"),
                le = document.querySelector("#give-keys-btn"),
                de = document.querySelector(".keys-address-block"),
                pe = document.querySelector(".keys-address-block__take-item"),
                fe = document.querySelector(".keys-address-block__give-item");
            oe?.addEventListener("click", ve),
                se?.addEventListener("click", ve),
                ue?.addEventListener("click", Ce),
                le?.addEventListener("click", Ce),
                re.forEach((e) => {
                    e.addEventListener("click", (e) => {
                        Ie(e.target),
                            (function (e) {
                                const t = e.target;
                                t.classList.contains(
                                    "buildings__element--current"
                                ) ||
                                    [...re].forEach((e) => {
                                        e === t
                                            ? (e.id,
                                              e.classList.add(
                                                  "buildings__element--current"
                                              ))
                                            : e.classList.remove(
                                                  "buildings__element--current"
                                              );
                                    });
                            })(e);
                    });
                }),
                ae.forEach((e) => {
                    e.addEventListener("change", (e) => {
                        !(function (e) {
                            const t = e.currentTarget,
                                n = t.closest("label"),
                                i = n.nextElementSibling,
                                r = t.checked;
                            (function (e, t) {
                                e.classList.toggle("isHidden", !t);
                            })(i, r),
                                (function (e) {
                                    const t = e.querySelector(
                                            ".control-quantity-btn--plus"
                                        ),
                                        n = e.querySelector(
                                            ".control-quantity-btn--minus"
                                        );
                                    t.addEventListener("click", ye),
                                        n.addEventListener("click", ye);
                                })(i);
                            const o = (function (e) {
                                    const t = e.querySelector(
                                            ".service-element__text"
                                        ).textContent,
                                        n = e
                                            .querySelector(
                                                ".service-element__accent"
                                            )
                                            .getAttribute("data-value"),
                                        i = e.getAttribute("data-id"),
                                        r = document.createElement("li");
                                    (r.id = i),
                                        (r.className =
                                            "table__item table__block");
                                    const o = Se("item__name", `${t}`),
                                        s = Se("", "x"),
                                        a = Se("name-wrapper"),
                                        c = Se("quantity-wrapper");
                                    _e(c, [
                                        s,
                                        Se(
                                            "item__quantity service-quantity",
                                            he[i].quantity
                                        ),
                                    ]),
                                        _e(a, [o, c]);
                                    const u = Se("service-value", `${n}`);
                                    return (
                                        u.setAttribute("data-service", i),
                                        _e(r, [a, u]),
                                        r
                                    );
                                })(n),
                                s = n.getAttribute("data-id");
                            (function (e, t) {
                                const n = t.id,
                                    i = (function (e) {
                                        return [
                                            ...ce.querySelectorAll("li"),
                                        ].find((t) => t.id === e);
                                    })(n);
                                e && !i
                                    ? ((function (e) {
                                          ce.insertAdjacentElement(
                                              "beforeend",
                                              e
                                          );
                                      })(t),
                                      we(n))
                                    : !e &&
                                      i &&
                                      (we(n, 0),
                                      (function (e) {
                                          ce.removeChild(e);
                                      })(i));
                            })(r, o),
                                xe(s),
                                Ee(me);
                        })(e);
                    });
                });

            // Initialize with default values
            let he = {
                square: { name: "Area", quantity: 1, price: 2 }, // Default square service
            };

            let me = {
                square: { name: "Area", quantity: 1, price: 2 }, // Default square service
            };

            fetch("/api/services") // Use the correct route with the API prefix
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `HTTP error! status: ${response.status}`
                        );
                    }
                    return response.json();
                })
                .then((services) => {
                    // Merge fetched services into `he` and `me`
                    services.forEach((service) => {
                        // Add or overwrite services in `he`
                        he[service.id] = he[service.id] || {
                            name: service.name,
                            quantity: 1,
                            price: service.price,
                        };

                        // Add or overwrite services in `me`
                        me[service.id] = me[service.id] || {
                            name: service.name,
                            quantity: 0,
                            price: service.price,
                        };
                    });
                })
                .catch((error) => {
                    console.error("Error fetching services:", error);
                });

            function ge(e) {
                const t = Te(e),
                    n = (function (e) {
                        return e.currentTarget.getAttribute("data-type");
                    })(e);
                !(function (e, t) {
                    if ("plus" === t) he[e].quantity += 1;
                    else if ("minus" === t) {
                        if (1 === he[e].quantity) return;
                        he[e].quantity -= 1;
                    }
                })(t, n),
                    (function (e) {
                        const t = [
                                ...document.querySelectorAll(
                                    ".service-element"
                                ),
                            ].find((t) => t.getAttribute("data-id") === e),
                            n = t?.nextElementSibling.querySelector(
                                `[data-name="${e}"]`
                            ),
                            i = document
                                .querySelector(".wrap--square")
                                .querySelector(`[data-name="${e}"]`);
                        n && (n.textContent = he[e].quantity),
                            i &&
                                ((i.textContent = he[e].quantity),
                                (document.querySelector(
                                    ".square-value-total"
                                ).textContent = he[e].quantity));
                    })(t),
                    (function (e) {
                        const t = document
                            .querySelector(`[data-name="${e}"]`)
                            .parentNode?.parentNode?.querySelector(
                                ".control-quantity-btn--minus .icon--minus"
                            );
                        1 === he[e].quantity
                            ? (t.style.fill = "rgba(\t77, 18, 153, 0.3)")
                            : (t.style.fill = "#4D1299");
                    })(t);
            }
            function ye(e) {
                const t = Te(e);
                ge(e), xe(t), Ee(me);
            }
            function ve(e) {
                ge(e),
                    (function () {
                        const e = document.querySelector(
                            '[data-service="square"]'
                        );
                        (me.square.quantity = he.square.quantity),
                            (e.textContent =
                                me.square.quantity * me.square.price + "");
                    })(),
                    Ee(me);
            }
            function xe(e) {
                const t = document.querySelector(`[data-service="${e}"]`),
                    n = document.querySelector(`[id="${e}"] .service-quantity`),
                    i = he[e].price;

                if (t && n) {
                    const r = we(e),
                        o = be(r, i); // Calculate the price based on the quantity
                    t.textContent = o; // Update the price element text
                    n.textContent = r; // Update the quantity element text
                } else {
                    we(e, 0); // Set quantity to 0 if the element isn't found
                }
            }
            function be(e, t) {
                return `${(e * t).toFixed(2)}`;
            }
            function we(e, t) {
                const n = void 0 !== t ? t : he[e].quantity;
                return (me[e].quantity = n), n;
            }
            function Ee(e) {
                const t =
                    ((n = e),
                    Object.keys(n)
                        .reduce((e, t) => {
                            const i = n[t];
                            return e + i.quantity * i.price;
                        }, 0)
                        .toFixed(2));
                var n;
                document.querySelector(
                    ".total-order-value"
                ).textContent = `${t}`;
            }
            function Se(e, t) {
                const n = document.createElement("span");
                return e && (n.className = e), t && (n.textContent = t), n;
            }
            function _e(e, t) {
                t.forEach((t) => {
                    e.appendChild(t);
                });
            }
            function Te(e) {
                const t = e.currentTarget
                        ?.closest(".wrap--service")
                        ?.parentNode.querySelector("label")
                        ?.getAttribute("data-id"),
                    n = e.currentTarget
                        ?.closest(".wrap--square")
                        ?.getAttribute("data-id");
                return t || n;
            }
            function Ce(e) {
                const t = e.currentTarget;
                t.classList.toggle("active"),
                    "take-keys-btn" === t.id
                        ? pe.classList.toggle("isHidden")
                        : fe.classList.toggle("isHidden"),
                    (function () {
                        const e = pe.classList.contains("isHidden"),
                            t = fe.classList.contains("isHidden");
                        e && t
                            ? de.classList.add("isHidden")
                            : de.classList.remove("isHidden");
                    })();
            }
            const ke = document.querySelector(".subscr__form"),
                Le = document.querySelectorAll(".payment__btn"),
                Fq = document.querySelectorAll(".frequency__btn"),
                qe = document.querySelector(".form__payment-error-text"),
                Ae = document.querySelectorAll(".form__input"),
                De = document.querySelector(".calc-btn"),
                Ne = document.querySelector('[name="studio-policy-check"]');
            let je;

            if (Ne) {
                je = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        if (
                            mutation.type === "attributes" &&
                            mutation.attributeName === "data-checked"
                        ) {
                            $e();
                        }
                    });
                });

                je.observe(Ne, {
                    attributes: true,
                    attributeFilter: ["data-checked"],
                });

                Ne.addEventListener("change", () => {
                    Ne.setAttribute("data-checked", Ne.checked);
                });
            }

            ke?.addEventListener("submit", ze);
            De?.addEventListener("click", (e) => {
                e.preventDefault();
                ze(e);
            });

            Le.forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    const selectedButton = e.target.closest("button");
                    updatePaymentType(selectedButton); // This updates the payment type

                    // Highlight the active button
                    Le.forEach((el) => {
                        el.classList.toggle("active", el === selectedButton);
                    });

                    We(); // Clear payment error message if necessary
                });
            });

            Fq.forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    const selectedButton = e.target.closest("button");
                    updateFrequency(selectedButton);

                    Fq.forEach((el) => {
                        el.classList.toggle("active", el === selectedButton);
                    });
                });
            });

            Ae.forEach((input) => {
                input.addEventListener("focus", () => {
                    input.classList.remove("error");
                });
            });

            const Oe = [
                    "userName",
                    "userSurname",
                    "userTel",
                    "userEmail",
                    "userLocation",
                    "userDate",
                    "userTime",
                ],
                He = {
                    userPaymentType: "", // Store selected payment type
                    userFrequency: "", // New field for storing user frequency
                    userBuildingType: "",
                    userTakeKeyAddress: "",
                    userGiveKeyAddress: "",
                    userSquare: { quantity: "", cost: "" },
                    userServices: {},
                };

            function updatePaymentType(button) {
                if (button) {
                    if (button.classList.contains("payment-online")) {
                        He.userPaymentType = "online"; // Correctly assign payment type
                    } else if (button.classList.contains("payment-cash")) {
                        He.userPaymentType = "cash";
                    }
                }
            }

            // Update frequency based on selected button
            function updateFrequency(button) {
                if (button) {
                    if (button.classList.contains("frequency-one-time")) {
                        He.userFrequency = "One-time"; // Correct key and value
                    } else if (button.classList.contains("frequency-weekly")) {
                        He.userFrequency = "Weekly";
                    } else if (
                        button.classList.contains("frequency-biweekly")
                    ) {
                        He.userFrequency = "Bi-weekly";
                    } else if (button.classList.contains("frequency-monthly")) {
                        He.userFrequency = "Monthly";
                    }
                }
            }

            function Ie(e) {
                const t = e.getAttribute("data-type"),
                    n = e.getAttribute("data-id") ?? "";
                He[t] = n;
            }

            function Me(elements) {
                [...elements].forEach((el) => el.classList.remove("error"));
            }

            function Re() {
                return Ne?.checked || false;
            }

            function Pe() {
                qe?.classList.remove("isHidden");
            }

            function We() {
                if (!qe?.classList.contains("isHidden")) {
                    qe?.classList.add("isHidden");
                }
            }

            function $e() {
                document
                    .querySelector(".form__policy-error-text")
                    .classList.add("isHidden");
            }

            function ze(event) {
                event.preventDefault();

                const isButton = event.currentTarget.tagName === "BUTTON";
                const formElements = isButton
                    ? ke.elements
                    : event.currentTarget.elements;

                // Validate form fields
                const emptyFields = Oe.filter(
                    (fieldName) => formElements[fieldName]?.value.trim() === ""
                ).map((fieldName) => formElements[fieldName]);

                Me(formElements);

                emptyFields.forEach((field) => field.classList.add("error"));

                const hasActivePayment = !!He.userPaymentType;
                const hasEmptyFields = emptyFields.length > 0;

                if (!hasActivePayment) {
                    Pe(); // Show payment selection error
                }

                if (!Re()) {
                    document
                        .querySelector(".form__policy-error-text")
                        ?.classList.remove("isHidden");
                }

                if (hasEmptyFields || !hasActivePayment || !Re()) {
                    return; // Stop submission if validation fails
                }

                const userOrderDataObj = {};
                const formSource = isButton ? ke : event.target;

                if (isButton) {
                    // Prepare square data
                    const quantity = me.square?.quantity || 0; // Safely handle missing square
                    const price = me.square?.price || 0; // Safely handle missing square
                    userOrderDataObj.userSquare = {
                        quantity: `${quantity}`,
                        cost: be(quantity, price), // Calculate cost
                    };

                    // Prepare services data
                    const servicesData = (function (data) {
                        const filtered = Object.keys(data)
                            .filter((key) => data[key].quantity > 0)
                            .reduce((result, key) => {
                                result[key] = { ...data[key] };
                                delete result[key].square; // Exclude square-related data
                                return result;
                            }, {});

                        return Object.keys(filtered)
                            .filter((key) => key !== "square")
                            .map((key) => {
                                const { name, quantity, price } = filtered[key];
                                return {
                                    name,
                                    quantity,
                                    cost: be(quantity, price),
                                };
                            });
                    })(me);

                    userOrderDataObj.userServices = servicesData;

                    //calculate total order value
                    const totalOrderValue = servicesData
                        .reduce(
                            (total, service) =>
                                total + parseFloat(service.cost || 0),
                            parseFloat(userOrderDataObj.userSquare.cost || 0)
                        )
                        .toFixed(2);

                    //Add total order value
                    userOrderDataObj.totalOrderValue = totalOrderValue;

                    // Validate addresses
                    const takeKeyAddress = document.querySelector(
                        '[data-type="userTakeKeyAddress"]'
                    );
                    const giveKeyAddress = document.querySelector(
                        '[data-type="userGiveKeyAddress"]'
                    );

                    if (takeKeyAddress) Ie(takeKeyAddress);
                    if (giveKeyAddress) Ie(giveKeyAddress);
                }

                // Collect form data
                new FormData(formSource).forEach((value, key) => {
                    if (key.startsWith("user")) {
                        userOrderDataObj[key] = value;
                    }
                });

                // Add payment type to submission data
                userOrderDataObj.userPaymentType = He.userPaymentType;
                userOrderDataObj.userFrequency = He.userFrequency;

                // Submit the reservatio
                submitReservation(userOrderDataObj);
                // Reset form fields
                [...formElements].forEach((el) => {
                    if (
                        el.type === "text" ||
                        el.type === "email" ||
                        el.type === "tel"
                    ) {
                        el.value = "";
                    } else if (el.type === "checkbox") {
                        el.checked = false;
                    }
                });

                // Reset payment buttons
                Le.forEach((btn) => btn.classList.remove("active"));

                je.disconnect();
            }

            function submitReservation(userOrderDataObj) {
                fetch("/api/reservations/store", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userOrderDataObj),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.success) {
                            if (He.userPaymentType === "online") {
                                // Pre-fill the "Enter Amount" field with the total value
                                const enterAmountField =
                                    document.querySelector("#price");
                                if (enterAmountField) {
                                    enterAmountField.value =
                                        userOrderDataObj.totalOrderValue || "";
                                }

                                // No redirection in case of online payment
                                console.log(
                                    "Order saved successfully. Proceed to payment gateway."
                                );
                            } else {
                                // Redirect for other payment methods
                                window.location.href = "/pass";
                            }
                        } else {
                            console.error(
                                "Reservation submission failed:",
                                data.message
                            );
                        }
                    })
                    .catch((error) => {
                        console.error("Error submitting reservation:", error);
                    });
            }

            function Be(e) {
                e.openModalBtn?.addEventListener("click", () => Fe(e)),
                    e.closeModalBtn?.addEventListener("click", (t) => {
                        t.stopPropagation(), Fe(e);
                    }),
                    e.backdrop?.addEventListener("click", (t) => {
                        t.target === e.backdrop && Fe(e);
                    });
            }

            function Fe(e) {
                document.body.classList.toggle(`${e.name}-modal-open`),
                    e.modal?.classList.toggle("backdrop--hidden"),
                    "subscription" === e.name && (Me(ke?.elements), We(), $e());
            }
            function Ge(e) {
                const t = e.trim().match(/\d{2}\/\d{2}\/\d{4}/);
                return t ? t[0] : null;
            }
            function Qe(e) {
                const t = e.getFullYear();
                return { month: e.getMonth(), year: t };
            }
            function Ye(e, t, n) {
                return {
                    formattedDay: e < 10 ? `0${e}` : e,
                    formattedMonth: 0 === t ? 12 : t,
                    formattedYear: 0 === t ? n - 1 : n,
                };
            }
            Be({
                name: "support",
                openModalBtn: document.querySelector(
                    "[data-support-modal-open]"
                ),
                closeModalBtn: document.querySelector(
                    "[data-support-modal-close]"
                ),
                modal: document.querySelector("[data-support-modal]"),
                backdrop: document.querySelector(".backdrop--support"),
            }),
                document.querySelectorAll(".calendar").forEach(function (e) {
                    const {
                        calendarIcon: t,
                        dateInput: n,
                        sheduleEl: r,
                        calendarBody: o,
                        calendarHeadMonthAndYear: s,
                        prevMonthBtn: a,
                        nextMonthBtn: c,
                    } = (function (e) {
                        const t = g(e, "icon--calendar"),
                            n =
                                e.parentElement.previousElementSibling.querySelector(
                                    '[name="userDate"]'
                                );
                        return (
                            e.parentElement.previousElementSibling.querySelector(
                                ".icon--calendar"
                            ),
                            {
                                calendarIcon: t,
                                dateInput: n,
                                sheduleEl:
                                    e.parentElement.querySelector(
                                        ".work-shedule"
                                    ),
                                calendarBody:
                                    e.querySelector(".calendar__body"),
                                calendarHeadMonthAndYear: e.querySelector(
                                    ".calendar__monthYear"
                                ),
                                prevMonthBtn: e.querySelector(
                                    ".calendar__prevMonth-btn"
                                ),
                                nextMonthBtn: e.querySelector(
                                    ".calendar__nextMonth-btn"
                                ),
                            }
                        );
                    })(e);
                    let u = new Date(),
                        l = new Date(),
                        d = (function () {
                            const e = new Date();
                            return `${e
                                .getDate()
                                .toString()
                                .padStart(2, "0")}/${(e.getMonth() + 1)
                                .toString()
                                .padStart(2, "0")}/${e.getFullYear()}`;
                        })();
                    function p() {
                        x(e, r, t),
                            (function (e) {
                                const t = (function (e) {
                                    return e
                                        .closest("li")
                                        .nextElementSibling.querySelector(
                                            ".shedule-wrap"
                                        );
                                })(e);
                                b(t, "time-picker-wrap", "icon--clock");
                            })(n),
                            (l = new Date(u)),
                            h(u),
                            w(e, n);
                    }
                    function f(o) {
                        const s = (function (e) {
                                const t = e.split("/"),
                                    [n, i, r] = t;
                                return `${i}/${n}/${r}`;
                            })(o.target.dataset.date),
                            a = new Date().toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                            }),
                            c = new Date(s);
                        if (((u = c), c - new Date(a) >= 0)) {
                            const o = (function (e) {
                                const t = e.split("/"),
                                    [n, i, r] = t;
                                return `${i}/${n}/${r}`;
                            })(s);
                            d = o;
                            const a = (function (e) {
                                return e
                                    .closest("li")
                                    .nextElementSibling.querySelector(
                                        '[name="userTime"]'
                                    );
                            })(n);
                            (a.value = ""),
                                i("selectedTimeObj"),
                                w(e, n),
                                x(e, r, t);
                        }
                    }
                    function h(e) {
                        o.innerHTML = "";
                        const { year: t, month: n } = Qe(e);
                        !(function (e) {
                            const t = l.toLocaleDateString("en-US", {
                                    month: "long",
                                }),
                                n = t.charAt(0).toUpperCase() + t.slice(1);
                            s.textContent = `${n} ${e}`;
                        })(t);
                        const { firstDayOfMonth: i, lastDayOfMonthObj: r } =
                                (function (e, t) {
                                    return {
                                        firstDayOfMonth: new Date(e, t, 1),
                                        lastDayOfMonthObj: new Date(
                                            e,
                                            t + 1,
                                            0
                                        ),
                                    };
                                })(t, n),
                            a = (function (e) {
                                let t = e.getDay();
                                return 0 === t && (t = 7), t;
                            })(i),
                            c = (function (e, t) {
                                return new Date(e, t, 0).getDate();
                            })(t, n);
                        let u = 1,
                            d = S();
                        for (let e = a - 1; e >= 1; e--)
                            m(d, y(c - e + 1, "previous-month"));
                        for (; u <= r.getDate(); )
                            m(d, y(u, "current-month")),
                                7 === d.children.length && (m(o, d), (d = S())),
                                u++;
                        if (d.children.length > 0) {
                            for (let e = 1; d.children.length < 7; e++)
                                m(d, y(e, "next-month"));
                            m(o, d);
                        }
                    }
                    function y(e, t) {
                        const { year: n, month: i } = Qe(l),
                            r = new Date();
                        let o;
                        if ("previous-month" === t) {
                            const {
                                formattedDay: t,
                                formattedMonth: r,
                                formattedYear: s,
                            } = Ye(e, i, n);
                            o = new Date(s, r - 1, t);
                        } else if ("current-month" === t) {
                            const { formattedDay: t } = Ye(e);
                            o = new Date(n, i, t);
                        } else if ("next-month" === t) {
                            const { formattedDay: t } = Ye(e, i, n);
                            o = new Date(
                                11 === i ? n + 1 : n,
                                11 === i ? 0 : i + 1,
                                t
                            );
                        }
                        const s = (function (e, t) {
                                return e < t;
                            })(o, r),
                            a = (function (e, t, n) {
                                const i = e.getFullYear() === t.getFullYear(),
                                    r = e.getMonth() === t.getMonth(),
                                    o = n === t.getDate();
                                return i && r && o;
                            })(o, u, e);
                        return (function (e) {
                            const {
                                    day: t,
                                    month: n,
                                    year: i,
                                    isDisabledDate: r,
                                    monthType: o,
                                    isCellSelectedDay: s,
                                } = e,
                                a = document.createElement("td"),
                                c = {
                                    monthType: o,
                                    isCellSelectedDay: s,
                                    isDisabledDate: r,
                                };
                            return (
                                (function (e, t) {
                                    e.textContent = t;
                                })(a, t),
                                (function (e, { day: t, month: n, year: i }) {
                                    e.dataset.date = `${t}/${n < 9 ? "0" : ""}${
                                        n + 1
                                    }/${i}`;
                                })(a, { day: t, month: n, year: i }),
                                (function (e, t) {
                                    t || e.addEventListener("click", f);
                                })(a, r),
                                (function (e, t) {
                                    const {
                                        monthType: n,
                                        isCellSelectedDay: i,
                                        isDisabledDate: r,
                                    } = t;
                                    r && e.classList.add("disabled-day"),
                                        "current-month" === n &&
                                            i &&
                                            e.classList.add("order-day"),
                                        e.classList.add(n);
                                })(a, c),
                                a
                            );
                        })({
                            day: String(o.getDate()).padStart(2, "0"),
                            month: o.getMonth(),
                            year: o.getFullYear(),
                            isDisabledDate: s,
                            monthType: t,
                            isCellSelectedDay: a,
                        });
                    }
                    function w(e, t) {
                        !e.classList.contains("isHidden") && (t.value = `${d}`);
                    }
                    function E(e) {
                        l.setMonth(l.getMonth() + e), h(l);
                    }
                    function S() {
                        return document.createElement("tr");
                    }
                    n.addEventListener("click", p),
                        t.addEventListener("click", p),
                        n.addEventListener("blur", () => {
                            v(n, Ge);
                        }),
                        a?.addEventListener("click", () => {
                            E(-1);
                        }),
                        c?.addEventListener("click", () => {
                            E(1);
                        }),
                        h(u);
                });
            const Ue = [
                { day: "пн", min: "07", max: "21" },
                { day: "вт", min: "07", max: "21" },
                { day: "ср", min: "07", max: "21" },
                { day: "чт", min: "07", max: "21" },
                { day: "пт", min: "07", max: "21" },
                { day: "сб", min: "10", max: "19" },
                { day: "нд", min: "10", max: "19" },
            ];
            document
                .querySelectorAll(".time-picker-wrap")
                .forEach(function (n) {
                    const {
                        clockIcon: i,
                        sheduleEl: r,
                        hourTablo: o,
                        minuteTablo: s,
                        hourPicker: a,
                        minutePicker: c,
                        confirmTimeBtn: u,
                        timeInput: l,
                    } = {
                        clockIcon: g((d = n), "icon--clock"),
                        sheduleEl:
                            d.parentElement.querySelector(".work-shedule"),
                        hourTablo: d.querySelector(".tablo--hours"),
                        minuteTablo: d.querySelector(".tablo--minutes"),
                        hourPicker: d.querySelector(".time-picker__hours"),
                        minutePicker: d.querySelector(".time-picker__minutes"),
                        confirmTimeBtn: d.querySelector(".time-picker__btn"),
                        timeInput:
                            d.parentElement.previousElementSibling.querySelector(
                                '[name="userTime"]'
                            ),
                    };
                    var d;
                    let p = t("selectedTimeObj") || {
                        hours: "15",
                        minutes: "00",
                    };
                    function f() {
                        p = t("selectedTimeObj") || {
                            hours: "15",
                            minutes: "00",
                        };
                        const e = (function (e) {
                                return e
                                    .closest("li")
                                    .previousElementSibling.querySelector(
                                        '[name="userDate"]'
                                    );
                            })(l),
                            o = e.value;
                        if (o) {
                            m(n);
                            const { minHour: e, maxHour: t } = (function (
                                e,
                                t
                            ) {
                                const n = (function (e) {
                                        const t = e.split("/");
                                        var n = parseInt(t[0], 10),
                                            i = parseInt(t[1], 10) - 1,
                                            r = parseInt(t[2], 10);
                                        return new Date(r, i, n);
                                    })(e),
                                    i = n.toLocaleDateString("uk-UA", {
                                        weekday: "short",
                                    }),
                                    r = t.find((e) => e.day === i);
                                return {
                                    minHour: parseInt(r.min),
                                    maxHour: parseInt(r.max),
                                };
                            })(o, Ue);
                            !(function (e, t, n) {
                                [...e.querySelectorAll(".hours")]
                                    .filter((e) => {
                                        const i = parseInt(
                                            e.getAttribute("data-id")
                                        );
                                        return i < t || i > n;
                                    })
                                    .forEach((e) => {
                                        e.classList.contains("disabled") ||
                                            (e.classList.remove("active"),
                                            e.classList.add("disabled"));
                                    });
                            })(n, e, t),
                                (function (e) {
                                    const t = e.hours,
                                        i = e.minutes,
                                        r = n.querySelector(
                                            ".time-picker__hours"
                                        ),
                                        o = n.querySelector(
                                            ".time-picker__minutes"
                                        );
                                    E(r, t), E(o, i);
                                })(p),
                                (function (e) {
                                    const t = e.hours,
                                        i = e.minutes,
                                        r = n.querySelectorAll(".hours"),
                                        o = n.querySelectorAll(".minutes"),
                                        s = [...r].find(
                                            (e) =>
                                                e.getAttribute("data-id") == t
                                        ),
                                        a = [...o].find(
                                            (e) =>
                                                e.getAttribute("data-id") == i
                                        );
                                    w(s, r), w(a, o);
                                })(p),
                                x(n, r, i),
                                (function (e) {
                                    const t = (function (e) {
                                        return e
                                            .closest("li")
                                            .previousElementSibling.querySelector(
                                                ".shedule-wrap"
                                            );
                                    })(e);
                                    b(t, "calendar", "icon--calendar");
                                })(l),
                                y(n, l);
                        } else
                            !(function (e) {
                                e.value = "First select a cleaning date";
                            })(l);
                    }
                    function h(t, i) {
                        const r = t.target;
                        if (r.classList.contains("disabled")) return;
                        if (
                            !(function (e) {
                                return (
                                    e.classList.contains("number") &&
                                    !e.classList.contains("active")
                                );
                            })(r)
                        )
                            return;
                        const o = S(i);
                        w(r, n.querySelectorAll(`.${o}`));
                        const s = n.querySelector(i),
                            a = r.dataset.id;
                        E(s, a),
                            (function (t, i) {
                                const r = S(t);
                                (p[r] = i), e("selectedTimeObj", p), y(n, l);
                            })(i, a);
                    }
                    function m(e) {
                        [...e.querySelectorAll(".hours")].forEach((e) => {
                            e.classList.remove("disabled");
                        });
                    }
                    function y(e, t) {
                        !e.classList.contains("isHidden") &&
                            (t.value = `${p.hours} : ${p.minutes}`);
                    }
                    function w(e, t) {
                        [...t].map((t) =>
                            t === e
                                ? (function (e) {
                                      e.classList.add("active");
                                  })(t)
                                : (function (e) {
                                      e.classList.remove("active");
                                  })(t)
                        );
                    }
                    function E(e, t) {
                        e.innerHTML = t;
                    }
                    function S(e) {
                        return e.split("__")[1];
                    }
                    function _(e) {
                        const t = e.trim().match(/\d{2}\s*:\s*\d{2}/);
                        return t ? t[0] : null;
                    }
                    function T(e, t) {
                        !e.classList.contains("isHidden") ||
                            (e.classList.remove("isHidden"),
                            t.classList.add("isHidden"));
                    }
                    e("selectedTimeObj", p),
                        l.addEventListener("click", f),
                        i.addEventListener("click", f),
                        l.addEventListener("blur", () => {
                            v(l, _);
                        }),
                        o.addEventListener("click", (e) =>
                            h(e, ".time-picker__hours")
                        ),
                        s.addEventListener("click", (e) =>
                            h(e, ".time-picker__minutes")
                        ),
                        c.addEventListener("click", () => T(s, o)),
                        a.addEventListener("click", () => T(o, s)),
                        u.addEventListener("click", () => {
                            m(n), x(n, r, i);
                        });
                }),
                n(963),
                Be({
                    name: "location",
                    openModalBtn: document.querySelector(
                        "[data-location-modal-open]"
                    ),
                    closeModalBtn: document.querySelector(
                        "[data-location-modal-close]"
                    ),
                    modal: document.querySelector("[data-location-modal]"),
                    backdrop: document.querySelector(".backdrop--location"),
                });
        })();
})();
