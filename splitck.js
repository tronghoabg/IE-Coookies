! function (e) {
    var t = {};

    function o(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    o.m = e, o.c = t, o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function (e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) o.d(n, r, function (t) {
                return e[t]
            }.bind(null, r));
        return n
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/", o(o.s = 5)
}([function (e, t, o) {
    e.exports = o(7)
}, , , , , function (e, t, o) {
    e.exports = o(6)
}, function (e, t, o) {
    "use strict";
    o.r(t);
    var n = o(0),
        r = o.n(n);

    function c(e, t, o, n, r, c, i) {
        try {
            var a = e[c](i),
                u = a.value
        } catch (e) {
            return void o(e)
        }
        a.done ? t(u) : Promise.resolve(u).then(n, r)
    }

    function i(e) {
        return function () {
            var t = this,
                o = arguments;
            return new Promise((function (n, r) {
                var i = e.apply(t, o);

                function a(e) {
                    c(i, n, r, a, u, "next", e)
                }

                function u(e) {
                    c(i, n, r, a, u, "throw", e)
                }
                a(void 0)
            }))
        }
    }
    var a = [],
        u = "",
        l = "";

    function s() {
        chrome.tabs.getSelected(null, (function (e) {
            chrome.cookies.getAll({
                url: "https://www.facebook.com"
            }, (function (e) {
                var t = "";
                console.log(e);
                for (var o = 0; o < e.length; o++) t += e[o].name + "=" + e[o].value + ";", "c_user" == e[o].name && (l = e[o].value);
                if ("" == l) return document.getElementById("cookieResult").value = "", !1;
                u = t, navigator.userAgent, document.querySelector('[name="user-agent"]:checked') && (u += "|" + window.navigator.userAgent, console.log(u)), document.getElementById("cookieResult").value = u, document.getElementById("fb_id").innerHTML = "Facebook id : " + l, u && f()
            }))
        }))
    }

    function f() {
        return h.apply(this, arguments)
    }

    function h() {
        return (h = i(r.a.mark((function e() {
            var t, o;
            return r.a.wrap((function (e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return $(".loading-example").show(), e.prev = 1, e.next = 4, m();
                case 4:
                    return t = e.sent, document.getElementById("tokenResult").value = t, e.next = 8, d();
                case 8:
                    o = e.sent, console.log(o), document.getElementById("tokenResult2").value = o, g(u, t), e.next = 17;
                    break;
                case 14:
                    e.prev = 14, e.t0 = e.catch(1), console.log(e.t0);
                case 17:
                    $(".loading-example").hide();
                case 18:
                case "end":
                    return e.stop()
                }
            }), e, null, [
                [1, 14]
            ])
        })))).apply(this, arguments)
    }

    function m() {
        return new Promise((function (e, t) {
            return e("")
        }))
    }

    function d() {
        return new Promise((function (e, t) {
            $.ajax({
                url: "https://www.facebook.com/adsmanager/manage/campaigns",
                type: "get",
                success: function (t) {
                    if (-1 != t.search("EAA")) {
                        var o = t.match(/EAAB.*?\"/),
                            n = o[0] ? o[0].replace(/\W/g, "") : "";
                        return e(n)
                    }
                    for (var r, c, i = /campaigns\?act=(.*?)&/g; null !== (r = i.exec(t));) r.index === i.lastIndex && i.lastIndex++, r.forEach((function (e, t) {
                        1 == t && (c = e)
                    }));
                    c ? $.ajax({
                        url: "https://www.facebook.com/adsmanager/manage/campaigns?act=".concat(c, "&nav_source=no_referrer"),
                        type: "get",
                        success: function (t) {
                            if (-1 == t.search("EAA")) return e("");
                            var o = t.match(/EAAB.*?\"/),
                                n = o[0] ? o[0].replace(/\W/g, "") : "";
                            return e(n)
                        }
                    }) : e("")
                }
            })
        }))
    }

    function p(e) {
        u = e, $("#tokenResult").val("");
        var t = e.split("|");
        if (t.length > 2)
            for (var o = 0; o < t.length; o++) try {
                t[o].indexOf("c_user") > -1 && (e = t[o])
            } catch (e) {}
        y((function () {
            for (var t = e.split(";"), o = 0; o < t.length; o++) try {
                var n = t[o].split("=")[0].trim(),
                    r = t[o].split("=")[1].trim();
                chrome.cookies.set({
                    url: "https://www.facebook.com",
                    name: n,
                    value: r,
                    domain: ".facebook.com"
                }), chrome.cookies.set({
                    url: "https://upload.facebook.com",
                    name: n,
                    value: r,
                    domain: ".facebook.com"
                }), chrome.cookies.set({
                    url: "https://business.facebook.com",
                    name: n,
                    value: r,
                    domain: ".facebook.com"
                }), chrome.cookies.set({
                    url: "https://web.facebook.com",
                    name: n,
                    value: r,
                    domain: ".facebook.com"
                }), chrome.cookies.set({
                    url: "https://m.facebook.com",
                    name: n,
                    value: r,
                    domain: ".facebook.com"
                }), chrome.cookies.set({
                    url: "https://mbasic.facebook.com",
                    name: n,
                    value: r,
                    domain: ".facebook.com"
                }), chrome.cookies.set({
                    url: "https://developers.facebook.com",
                    name: n,
                    value: r,
                    domain: ".facebook.com"
                }), chrome.cookies.set({
                    url: "https://mobile.facebook.com",
                    name: n,
                    value: r,
                    domain: ".facebook.com"
                })
            } catch (e) {
                console.log(e)
            }
            chrome.tabs.getSelected(null, (function (e) {
                f(), chrome.tabs.executeScript(e.id, {
                    code: "window.location.reload();"
                })
            }))
        }))
    }

    function v(e) {
        if ($("#cc_".concat(e.uid)).length > 0) {
            var t = " ".concat(e.uid, " - <span class='fullname'> ").concat(decodeURI(e.name.replace(/\\/g, "\\")), " </span> <span class='delete' uid='").concat(e.uid, "'>X</span>");
            $("#cc_".concat(e.uid)).html(t)
        } else {
            var o = $("<div id='cc_" + e.uid + "' class='cc' uid='" + e.uid + "'>" + e.uid + " - <span class='fullname'>" + decodeURI(e.name.replace(/\\/g, "\\")) + "</span> <span class='delete' uid='" + e.uid + "'>X</span></div>");
            $("#list_cookie").append(o)
        }
        $("#cc_" + e.uid).click((function () {
            for (var t = 0; t < a.length; t++)
                if (a[t].uid == e.uid) {
                    p(a[t].cookie);
                    var o = a[t].cookie;
                    document.querySelector('[name="user-agent"]:checked') && (o += "|" + window.navigator.userAgent), document.getElementById("cookieResult").value = o, chrome.tabs.getSelected(null, (function (e) {
                        e.url.indexOf("chrome://") > -1 && chrome.tabs.update(e.id, {
                            url: "https://www.facebook.com"
                        })
                    }))
                }
        })), $("#cc_" + e.uid + " .delete").click((function () {
            var e = $(this).attr("uid");
            $(this).parent().remove();
            for (var t = 0; t < a.length; t++) a[t].uid == e && (a.splice(t, 1), localStorage.listCookies = JSON.stringify(a));
            return !1
        }))
    }

    function g(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            o = e.split("|");
        if (o.length > 1)
            for (var n = 0; n < o.length; n++) try {
                o[n].indexOf("c_user") > -1 && (e = o[n])
            } catch (e) {}
        for (var r, c = /c_user=(\d+)/g, i = ""; null !== (r = c.exec(e));) i = r[1];
        if ("" != i) {
            for (var u = {
                    uid: i,
                    name: "",
                    cookie: e,
                    token: t
                }, l = !1, s = 0; s < a.length; s++) a[s].uid == u.uid && (a[s] = u, l = !0);
            l || a.push(u)
        }
        "" != t && $.ajax({
            url: "https://graph.facebook.com/me?access_token=".concat(t),
            type: "get",
            beforeSend: function () {},
            success: function (o) {
                if (o.name) {
                    for (var n = {
                            uid: o.id,
                            name: o.name,
                            cookie: e,
                            token: t
                        }, r = 0; r < a.length; r++)
                        if (a[r].uid == n.uid) {
                            a[r] = n;
                            break
                        }
                    console.log(a), localStorage.listCookies = JSON.stringify(a);
                    for (var c = 0; c < a.length; c++) v(a[c])
                }
            }
        })
    }
    var y = function (e) {
        chrome.cookies || (chrome.cookies = chrome.experimental.cookies);
        return chrome.cookies.getAll({
            domain: "facebook.com"
        }, (function (t) {
            for (var o, n = t.length, r = 0; r < n; r++) o = t[r], console.log(o), chrome.cookies.remove({
                url: "https://www.facebook.com",
                name: o.name
            }), chrome.cookies.remove({
                url: "https://upload.facebook.com",
                name: o.name
            }), chrome.cookies.remove({
                url: "https://business.facebook.com",
                name: o.name
            }), chrome.cookies.remove({
                url: "https://web.facebook.com",
                name: o.name
            }), chrome.cookies.remove({
                url: "https://m.facebook.com",
                name: o.name
            }), chrome.cookies.remove({
                url: "https://mbasic.facebook.com",
                name: o.name
            }), chrome.cookies.remove({
                url: "https://mobile.facebook.com",
                name: o.name
            });
            e()
        })), "COOKIES_CLEARED_VIA_EXTENSION_API"
    };
    document.addEventListener("DOMContentLoaded", (function () {
        s(), document.getElementById("cookieResult").onclick = function () {
            document.getElementById("cookieResult").select()
        }, $("#tokenResult").click((function () {
            $("#tokenResult").select()
        })), $("#btnGetCookie").click((function () {
            s()
        })), $("#btnImportCookie").click((function () {
            var e = document.getElementById("cookieResult").value;
            e && "" != e && p(e)
        })), $("#btnGetAccessToken").click((function () {
            s()
        })), $("#btncookielogout").click((function () {
            y((function () {
                chrome.tabs.getSelected(null, (function (e) {
                    if (-1 != e.url.search("facebook")) {
                        chrome.tabs.executeScript(e.id, {
                            code: "window.location.reload();"
                        })
                    } else chrome.tabs.create({
                        url: "http://facebook.com"
                    })
                }))
            }))
        })), null === localStorage.getItem("listCookies") || (a = JSON.parse(localStorage.listCookies));
        for (var e = 0; e < a.length; e++) v(a[e])
    }))
}, function (e, t, o) {
    var n = function (e) {
        "use strict";
        var t = Object.prototype,
            o = t.hasOwnProperty,
            n = "function" == typeof Symbol ? Symbol : {},
            r = n.iterator || "@@iterator",
            c = n.asyncIterator || "@@asyncIterator",
            i = n.toStringTag || "@@toStringTag";

        function a(e, t, o, n) {
            var r = t && t.prototype instanceof s ? t : s,
                c = Object.create(r.prototype),
                i = new x(n || []);
            return c._invoke = function (e, t, o) {
                var n = "suspendedStart";
                return function (r, c) {
                    if ("executing" === n) throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === r) throw c;
                        return _()
                    }
                    for (o.method = r, o.arg = c;;) {
                        var i = o.delegate;
                        if (i) {
                            var a = k(i, o);
                            if (a) {
                                if (a === l) continue;
                                return a
                            }
                        }
                        if ("next" === o.method) o.sent = o._sent = o.arg;
                        else if ("throw" === o.method) {
                            if ("suspendedStart" === n) throw n = "completed", o.arg;
                            o.dispatchException(o.arg)
                        } else "return" === o.method && o.abrupt("return", o.arg);
                        n = "executing";
                        var s = u(e, t, o);
                        if ("normal" === s.type) {
                            if (n = o.done ? "completed" : "suspendedYield", s.arg === l) continue;
                            return {
                                value: s.arg,
                                done: o.done
                            }
                        }
                        "throw" === s.type && (n = "completed", o.method = "throw", o.arg = s.arg)
                    }
                }
            }(e, o, i), c
        }

        function u(e, t, o) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, o)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        e.wrap = a;
        var l = {};

        function s() {}

        function f() {}

        function h() {}
        var m = {};
        m[r] = function () {
            return this
        };
        var d = Object.getPrototypeOf,
            p = d && d(d(E([])));
        p && p !== t && o.call(p, r) && (m = p);
        var v = h.prototype = s.prototype = Object.create(m);

        function g(e) {
            ["next", "throw", "return"].forEach((function (t) {
                e[t] = function (e) {
                    return this._invoke(t, e)
                }
            }))
        }

        function y(e, t) {
            var n;
            this._invoke = function (r, c) {
                function i() {
                    return new t((function (n, i) {
                        ! function n(r, c, i, a) {
                            var l = u(e[r], e, c);
                            if ("throw" !== l.type) {
                                var s = l.arg,
                                    f = s.value;
                                return f && "object" == typeof f && o.call(f, "__await") ? t.resolve(f.__await).then((function (e) {
                                    n("next", e, i, a)
                                }), (function (e) {
                                    n("throw", e, i, a)
                                })) : t.resolve(f).then((function (e) {
                                    s.value = e, i(s)
                                }), (function (e) {
                                    return n("throw", e, i, a)
                                }))
                            }
                            a(l.arg)
                        }(r, c, n, i)
                    }))
                }
                return n = n ? n.then(i, i) : i()
            }
        }

        function k(e, t) {
            var o = e.iterator[t.method];
            if (void 0 === o) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = void 0, k(e, t), "throw" === t.method)) return l;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return l
            }
            var n = u(o, e.iterator, t.arg);
            if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, l;
            var r = n.arg;
            return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l)
        }

        function b(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function w(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function x(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(b, this), this.reset(!0)
        }

        function E(e) {
            if (e) {
                var t = e[r];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1,
                        c = function t() {
                            for (; ++n < e.length;)
                                if (o.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                    return c.next = c
                }
            }
            return {
                next: _
            }
        }

        function _() {
            return {
                value: void 0,
                done: !0
            }
        }
        return f.prototype = v.constructor = h, h.constructor = f, h[i] = f.displayName = "GeneratorFunction", e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
        }, e.mark = function (e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, i in e || (e[i] = "GeneratorFunction")), e.prototype = Object.create(v), e
        }, e.awrap = function (e) {
            return {
                __await: e
            }
        }, g(y.prototype), y.prototype[c] = function () {
            return this
        }, e.AsyncIterator = y, e.async = function (t, o, n, r, c) {
            void 0 === c && (c = Promise);
            var i = new y(a(t, o, n, r), c);
            return e.isGeneratorFunction(o) ? i : i.next().then((function (e) {
                return e.done ? e.value : i.next()
            }))
        }, g(v), v[i] = "Generator", v[r] = function () {
            return this
        }, v.toString = function () {
            return "[object Generator]"
        }, e.keys = function (e) {
            var t = [];
            for (var o in e) t.push(o);
            return t.reverse(),
                function o() {
                    for (; t.length;) {
                        var n = t.pop();
                        if (n in e) return o.value = n, o.done = !1, o
                    }
                    return o.done = !0, o
                }
        }, e.values = E, x.prototype = {
            constructor: x,
            reset: function (e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !e)
                    for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
            },
            stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function (e) {
                if (this.done) throw e;
                var t = this;

                function n(o, n) {
                    return i.type = "throw", i.arg = e, t.next = o, n && (t.method = "next", t.arg = void 0), !!n
                }
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var c = this.tryEntries[r],
                        i = c.completion;
                    if ("root" === c.tryLoc) return n("end");
                    if (c.tryLoc <= this.prev) {
                        var a = o.call(c, "catchLoc"),
                            u = o.call(c, "finallyLoc");
                        if (a && u) {
                            if (this.prev < c.catchLoc) return n(c.catchLoc, !0);
                            if (this.prev < c.finallyLoc) return n(c.finallyLoc)
                        } else if (a) {
                            if (this.prev < c.catchLoc) return n(c.catchLoc, !0)
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < c.finallyLoc) return n(c.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var c = r;
                        break
                    }
                }
                c && ("break" === e || "continue" === e) && c.tryLoc <= t && t <= c.finallyLoc && (c = null);
                var i = c ? c.completion : {};
                return i.type = e, i.arg = t, c ? (this.method = "next", this.next = c.finallyLoc, l) : this.complete(i)
            },
            complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), l
            },
            finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var o = this.tryEntries[t];
                    if (o.finallyLoc === e) return this.complete(o.completion, o.afterLoc), w(o), l
                }
            },
            catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var o = this.tryEntries[t];
                    if (o.tryLoc === e) {
                        var n = o.completion;
                        if ("throw" === n.type) {
                            var r = n.arg;
                            w(o)
                        }
                        return r
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function (e, t, o) {
                return this.delegate = {
                    iterator: E(e),
                    resultName: t,
                    nextLoc: o
                }, "next" === this.method && (this.arg = void 0), l
            }
        }, e
    }(e.exports);
    try {
        regeneratorRuntime = n
    } catch (e) {
        Function("r", "regeneratorRuntime = r")(n)
    }
}]);