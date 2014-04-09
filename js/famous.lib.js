//CodePen Evaluation License
//
//Copyright (c) 2013 Famo.us, Inc.
//
// Non-sublicensable permission is hereby granted, free of charge,
// to any person obtaining a copy of this software and associated
// documentation files directly from codepen.io (the "Software"), solely to
// internally make and internally use copies of the Software to test,
// explore, and evaluate the Software solely in such personÃ¢â‚¬â„¢s non-commercial,
// non-production environments, provided that the above copyright
// notice and this permission notice shall be included in all copies or
// substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
// CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

/**
 * almond 0.2.6 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

!function(t, i) {
    if ("function" == typeof define && define.amd)
        define(i);
    else if ("object" == typeof window) {
        var e;
        window.addEventListener("load", function() {
            t.Famous = i(), e && t.Famous(e)
        }), t.Famous = function(t) {
            e = t
        }
    } else 
        t.Famous = i()
}(this, function() {
    var requirejs, require, define;
    return function(t) {
        function i(t, i) {
            return y.call(t, i)
        }
        function e(t, i) {
            var e, s, o, n, r, a, h, u, c, p, l = i && i.split("/"), f = m.map, d = f && f["*"] || {};
            if (t && "." === t.charAt(0))
                if (i) {
                    for (l = l.slice(0, l.length-1), t = l.concat(t.split("/")
                        ), u = 0;
                        u < t.length;
                        u += 1)if (p = t[u], "." === p)
                            t.splice(u, 1), u -= 1;
                        else if (".." === p) {
                            if (1 === u && (".." === t[2] || ".." === t[0]))
                                break;
                                u > 0 && (t.splice(u-1, 2), u -= 2)
                        }
                        t = t.join("/")
                } else 
                    0 === t.indexOf("./") && (t = t.substring(2));
            if ((l || d) && f) {
                for (e = t.split("/"), u = e.length; u > 0; u -= 1) {
                    if (s = e.slice(0, u).join("/"), l)
                        for (c = l.length; c > 0; c -= 1)
                            if (o = f[l.slice(0, c).join("/")], o && (o = o[s])
                                ) {
                        n = o, r = u;
                        break
                    }
                    if (n)
                        break;
                    !a && d && d[s] && (a = d[s], h = u)
                }
                !n && a && (n = a, r = h), n && (e.splice(0, r, n), t = e.join("/"))
            }
            return t
        }
        function s(i, e) {
            return function() {
                return c.apply(t, g.call(arguments, 0).concat([i, e]))
            }
        }
        function o(t) {
            return function(i) {
                return e(i, t)
            }
        }
        function n(t) {
            return function(i) {
                f[t] = i
            }
        }
        function r(e) {
            if (i(d, e)) {
                var s = d[e];
                delete d[e], v[e]=!0, u.apply(t, s)
            }
            if (!i(f, e)&&!i(v, e))
                throw new Error("No " + e);
            return f[e]
        }
        function a(t) {
            var i, e = t ? t.indexOf("!"): -1;
            return e>-1 && (i = t.substring(0, e), t = t.substring(e + 1, t.length)), [i, t]
        }
        function h(t) {
            return function() {
                return m && m.config && m.config[t] || {}
            }
        }
        var u, c, p, l, f = {}, d = {}, m = {}, v = {}, y = Object.prototype.hasOwnProperty, g = [].slice;
        p = function(t, i) {
            var s, n = a(t), h = n[0];
            return t = n[1], h && (h = e(h, i), s = r(h)), h ? t = s && s.normalize ? s.normalize(t, o(i)) : e(t, i) : (t = e(t, i), n = a(t), h = n[0], t = n[1], h && (s = r(h))), {
                f: h ? h + "!" + t : t, n: t, pr: h, p: s
            }
        }, l = {
            require: function(t) {
                return s(t)
            },
            exports: function(t) {
                var i = f[t];
                return "undefined" != typeof i ? i : f[t] = {}
            },
            module: function(t) {
                return {
                    id: t,
                    uri: "",
                    exports: f[t],
                    config: h(t)
                }
            }
        }, u = function(e, o, a, h) {
            var u, c, m, y, g, S, _ = [];
            if (h = h || e, "function" == typeof a) {
                for (o=!o.length && a.length ? ["require", "exports", "module"] : o, g = 0; g < o.length; g += 1)
                    if (y = p(o[g], h), c = y.f, "require" === c)
                        _[g] = l.require(e);
                    else if ("exports" === c)
                        _[g] = l.exports(e), S=!0;
                else if ("module" === c)
                    u = _[g] = l.module(e);
                else if (i(f, c) || i(d, c) || i(v, c))
                    _[g] = r(c);
                else {
                    if (!y.p)
                        throw new Error(e + " missing " + c);
                        y.p.load(y.n, s(h, !0), n(c), {}), _[g] = f[c]
                }
                m = a.apply(f[e], _), e && (u && u.exports !== t && u.exports !== f[e] ? f[e] = u.exports : m === t && S || (f[e] = m))
            } else 
                e && (f[e] = a)
        }, requirejs = require = c = function(i, e, s, o, n) {
            return "string" == typeof i ? l[i] ? l[i](e) : r(p(i, e).f) : (i.splice || (m = i, e.splice ? (i = e, e = s, s = null) : i = t), e = e || function() {}, "function" == typeof s && (s = o, o = n), o ? u(t, i, e, s) : setTimeout(function() {
                u(t, i, e, s)
            }, 4), c)
        }, c.config = function(t) {
            return m = t, m.deps && c(m.deps, m.callback), c
        }, requirejs._defined = f, define = function(t, e, s) {
            e.splice || (s = e, e = []), i(f, t) || i(d, t) || (d[t] = [t, e, s])
        }, define.amd = {
            jQuery: !0
        }
    }(), define("lib/almond", function() {}), "undefined" == typeof document || "classList"in document.createElement("a") || function(t) {
        var i = "classList", e = "prototype", s = (t.HTMLElement || t.Element)[e], o = Object, n = String[e].trim || function() {
            return this.replace(/^\s+|\s+$/g, "")
        }, r = Array[e].indexOf || function(t) {
            for (var i = 0, e = this.length; e > i; i++)
                if (i in this && this[i] === t)
                    return i;
            return -1
        }, a = function(t, i) {
            this.name = t, this.code = DOMException[t], this.message = i
        }, h = function(t, i) {
            if ("" === i)
                throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
            if (/\s/.test(i))
                throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
            return r.call(t, i)
        }, u = function(t) {
            for (var i = n.call(t.className), e = i ? i.split(/\s+/) : [], s = 0, o = e.length; o > s; s++)
                this.push(e[s]);
            this._updateClassName = function() {
                t.className = this.toString()
            }
        }, c = u[e] = [], p = function() {
            return new u(this)
        };
        if (a[e] = Error[e], c.item = function(t) {
            return this[t] || null
        }, c.contains = function(t) {
            return t += "", -1 !== h(this, t)
        }, c.add = function(t) {
            t += "", -1 === h(this, t) && (this.push(t), this._updateClassName())
        }, c.remove = function(t) {
            t += "";
            var i = h(this, t);
            -1 !== i && (this.splice(i, 1), this._updateClassName())
        }, c.toggle = function(t) {
            t += "", -1 === h(this, t) ? this.add(t) : this.remove(t)
        }, c.toString = function() {
            return this.join(" ")
        }, o.defineProperty) {
            var l = {
                get: p,
                enumerable: !0,
                configurable: !0
            };
            try {
                o.defineProperty(s, i, l)
            } catch (f) {
                -2146823252 === f.number && (l.enumerable=!1, o.defineProperty(s, i, l))
            }
        } else 
            o[e].__defineGetter__ && s.__defineGetter__(i, p)
    }(self), define("lib/classList", function() {}), Function.prototype.bind || (Function.prototype.bind = function(t) {
        if ("function" != typeof this)
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var i = Array.prototype.slice.call(arguments, 1), e = this, s = function() {}, o = function() {
            return e.apply(this instanceof s && t ? this : t, i.concat(Array.prototype.slice.call(arguments)))
        };
        return s.prototype = this.prototype, o.prototype = new s, o
    }), define("lib/functionPrototypeBind", function() {}), window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
        return window.setTimeout(function() {
            t( + new Date)
        }, 1e3 / 60)
    }), define("lib/requestAnimationFrame", function() {}), define("famous/Entity", ["require", "exports", "module"], function(t, i, e) {
        function s(t) {
            var i = r.length;
            return n(i, t), i
        }
        function o(t) {
            return r[t]
        }
        function n(t, i) {
            r[t] = i
        }
        var r = [];
        e.exports = {
            register: s,
            get: o,
            set: n
        }
    }), define("famous/EventHandler", ["require", "exports", "module"], function(t, i, e) {
        function s() {
            this.listeners = {}, this.downstream = [], this.downstreamFn = [], this.owner = this
        }
        function o(t, i) {
            for (var e=!1, s = 0; s < this.downstream.length; s++)
                e = this.downstream[s].emit(t, i) || e;
            for (var s = 0; s < this.downstreamFn.length; s++)
                e = this.downstreamFn[s](t, i) || e;
            return e
        }
        s.prototype.emit = function(t, i) {
            i || (i = {});
            var e = this.listeners[t], s=!1;
            if (e)
                for (var n = 0; n < e.length; n++)
                    e[n].call(this.owner, i) && (s=!0);
            return o.call(this, t, i) || s
        }, s.prototype.on = function(t, i) {
            this.listeners[t] || (this.listeners[t] = []);
            var e = this.listeners[t].indexOf(i);
            return 0 > e && this.listeners[t].push(i), this
        }, s.prototype.unbind = function(t, i) {
            var e = this.listeners[t].indexOf(i);
            e >= 0 && this.listeners[t].splice(e, 1)
        }, s.prototype.pipe = function(t) {
            var i = t instanceof Function ? this.downstreamFn: this.downstream, e = i.indexOf(t);
            return 0 > e && i.push(t), t instanceof Function ? t("pipe") : t.emit("pipe"), t
        }, s.prototype.unpipe = function(t) {
            var i = t instanceof Function ? this.downstreamFn: this.downstream, e = i.indexOf(t);
            return e >= 0 ? (i.splice(e, 1), t instanceof Function ? t("unpipe") : t.emit("unpipe"), t) : !1
        }, s.prototype.bindThis = function(t) {
            this.owner = t
        }, s.setInputHandler = function(t, i) {
            t.emit = i.emit.bind(i)
        }, s.setOutputHandler = function(t, i) {
            i instanceof s && i.bindThis(t), t.pipe = i.pipe.bind(i), t.unpipe = i.unpipe.bind(i), t.on = i.on.bind(i), t.unbind = i.unbind.bind(i)
        }, e.exports = s
    }), define("famous/Matrix", ["require", "exports", "module"], function(t, i, e) {
        var s = {};
        s.precision = 1e-6, s.identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], s.multiply4x4 = function o(t, i) {
            var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            return e[0] = t[0] * i[0] + t[1] * i[4] + t[2] * i[8] + t[3] * i[12], e[1] = t[0] * i[1] + t[1] * i[5] + t[2] * i[9] + t[3] * i[13], e[2] = t[0] * i[2] + t[1] * i[6] + t[2] * i[10] + t[3] * i[14], e[3] = t[0] * i[3] + t[1] * i[7] + t[2] * i[11] + t[3] * i[15], e[4] = t[4] * i[0] + t[5] * i[4] + t[6] * i[8] + t[7] * i[12], e[5] = t[4] * i[1] + t[5] * i[5] + t[6] * i[9] + t[7] * i[13], e[6] = t[4] * i[2] + t[5] * i[6] + t[6] * i[10] + t[7] * i[14], e[7] = t[4] * i[3] + t[5] * i[7] + t[6] * i[11] + t[7] * i[15], e[8] = t[8] * i[0] + t[9] * i[4] + t[10] * i[8] + t[11] * i[12], e[9] = t[8] * i[1] + t[9] * i[5] + t[10] * i[9] + t[11] * i[13], e[10] = t[8] * i[2] + t[9] * i[6] + t[10] * i[10] + t[11] * i[14], e[11] = t[8] * i[3] + t[9] * i[7] + t[10] * i[11] + t[11] * i[15], e[12] = t[12] * i[0] + t[13] * i[4] + t[14] * i[8] + t[15] * i[12], e[13] = t[12] * i[1] + t[13] * i[5] + t[14] * i[9] + t[15] * i[13], e[14] = t[12] * i[2] + t[13] * i[6] + t[14] * i[10] + t[15] * i[14], e[15] = t[12] * i[3] + t[13] * i[7] + t[14] * i[11] + t[15] * i[15], arguments.length <= 2 ? e : o.apply(null, [e].concat(Array.prototype.slice.call(arguments, 2)))
        }, s.multiply = function n(t, i) {
            if (!t ||!i)
                return t || i;
            var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            return e[0] = t[0] * i[0] + t[1] * i[4] + t[2] * i[8], e[1] = t[0] * i[1] + t[1] * i[5] + t[2] * i[9], e[2] = t[0] * i[2] + t[1] * i[6] + t[2] * i[10], e[4] = t[4] * i[0] + t[5] * i[4] + t[6] * i[8], e[5] = t[4] * i[1] + t[5] * i[5] + t[6] * i[9], e[6] = t[4] * i[2] + t[5] * i[6] + t[6] * i[10], e[8] = t[8] * i[0] + t[9] * i[4] + t[10] * i[8], e[9] = t[8] * i[1] + t[9] * i[5] + t[10] * i[9], e[10] = t[8] * i[2] + t[9] * i[6] + t[10] * i[10], e[12] = t[12] * i[0] + t[13] * i[4] + t[14] * i[8] + i[12], e[13] = t[12] * i[1] + t[13] * i[5] + t[14] * i[9] + i[13], e[14] = t[12] * i[2] + t[13] * i[6] + t[14] * i[10] + i[14], arguments.length <= 2 ? e : n.apply(null, [e].concat(Array.prototype.slice.call(arguments, 2)))
        }, s.move = function(t, i) {
            return i[2] || (i[2] = 0), [t[0], t[1], t[2], 0, t[4], t[5], t[6], 0, t[8], t[9], t[10], 0, t[12] + i[0], t[13] + i[1], t[14] + i[2], 1]
        }, s.moveThen = function(t, i) {
            t[2] || (t[2] = 0);
            var e = t[0] * i[0] + t[1] * i[4] + t[2] * i[8], o = t[0] * i[1] + t[1] * i[5] + t[2] * i[9], n = t[0] * i[2] + t[1] * i[6] + t[2] * i[10];
            return s.move(i, [e, o, n])
        }, s.translate = function(t, i, e) {
            return void 0 === e && (e = 0), [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, i, e, 1]
        }, s.scale = function(t, i, e) {
            return void 0 === e && (e = 1), [t, 0, 0, 0, 0, i, 0, 0, 0, 0, e, 0, 0, 0, 0, 1]
        }, s.rotateX = function(t) {
            var i = Math.cos(t), e = Math.sin(t);
            return [1, 0, 0, 0, 0, i, e, 0, 0, - e, i, 0, 0, 0, 0, 1]
        }, s.rotateY = function(t) {
            var i = Math.cos(t), e = Math.sin(t);
            return [i, 0, - e, 0, 0, 1, 0, 0, e, 0, i, 0, 0, 0, 0, 1]
        }, s.rotateZ = function(t) {
            var i = Math.cos(t), e = Math.sin(t);
            return [i, e, 0, 0, - e, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }, s.rotate = function(t, i, e) {
            var s = Math.cos(t), o = Math.sin(t), n = Math.cos(i), r = Math.sin(i), a = Math.cos(e), h = Math.sin(e), u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            return u[0] = n * a, u[1] = s * h + o * r * a, u[2] = o * h - s * r * a, u[4] =- n * h, u[5] = s * a - o * r * h, u[6] = o * a + s * r * h, u[8] = r, u[9] =- o * n, u[10] = s * n, u
        }, s.rotateAxis = function(t, i) {
            var e = Math.sin(i), s = Math.cos(i), o = 1 - s, n = t[0] * t[0] * o, r = t[0] * t[1] * o, a = t[0] * t[2] * o, h = t[1] * t[1] * o, u = t[1] * t[2] * o, c = t[2] * t[2] * o, p = t[0] * e, l = t[1] * e, f = t[2] * e, d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            return d[0] = n + s, d[1] = r + f, d[2] = a - l, d[4] = r - f, d[5] = h + s, d[6] = u + p, d[8] = a + l, d[9] = u - p, d[10] = c + s, d
        }, s.aboutOrigin = function(t, i) {
            var e = t[0] - (t[0] * i[0] + t[1] * i[4] + t[2] * i[8]), o = t[1] - (t[0] * i[1] + t[1] * i[5] + t[2] * i[9]), n = t[2] - (t[0] * i[2] + t[1] * i[6] + t[2] * i[10]);
            return s.move(i, [e, o, n])
        }, s.formatCSS = function(t) {
            for (var i = t.slice(0), e = 0; e < i.length; e++)
                i[e] < 1e-6 && i[e]>-1e-6 && (i[e] = 0);
            return "matrix3d(" + i.join() + ")"
        }, s.skew = function(t, i, e) {
            return [1, 0, 0, 0, Math.tan(e), 1, 0, 0, Math.tan(i), Math.tan(t), 1, 0, 0, 0, 0, 1]
        }, s.getTranslate = function(t) {
            return [t[12], t[13], t[14]]
        }, s.inverse = function(t) {
            var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], e = t[5] * t[10] - t[6] * t[9], s = t[4] * t[10] - t[6] * t[8], o = t[4] * t[9] - t[5] * t[8], n = t[1] * t[10] - t[2] * t[9], r = t[0] * t[10] - t[2] * t[8], a = t[0] * t[9] - t[1] * t[8], h = t[1] * t[6] - t[2] * t[5], u = t[0] * t[6] - t[2] * t[4], c = t[0] * t[5] - t[1] * t[4], p = t[0] * e - t[1] * s + t[2] * o, l = 1 / p;
            return i[0] = l * e, i[1] =- l * n, i[2] = l * h, i[4] =- l * s, i[5] = l * r, i[6] =- l * u, i[8] = l * o, i[9] =- l * a, i[10] = l * c, i[12] =- t[12] * i[0] - t[13] * i[4] - t[14] * i[8], i[13] =- t[12] * i[1] - t[13] * i[5] - t[14] * i[9], i[14] =- t[12] * i[2] - t[13] * i[6] - t[14] * i[10], i
        }, s.interpret = function(t) {
            function i(t) {
                return 2 == t.length ? t[0] * t[0] + t[1] * t[1] : t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
            }
            function e(t) {
                return Math.sqrt(i(t))
            }
            function o(t) {
                return 0 > t?-1 : 1
            }
            var n = [t[0], t[1], t[2]], r = o(n[0]), a = e(n), h = [n[0] + r * a, n[1], n[2]], u = 2 / i(h), c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            c[0] = 1 - u * h[0] * h[0], c[5] = 1 - u * h[1] * h[1], c[10] = 1 - u * h[2] * h[2], c[1] =- u * h[0] * h[1], c[2] =- u * h[0] * h[2], c[6] =- u * h[1] * h[2], c[4] = c[1], c[8] = c[2], c[9] = c[6];
            var p = s.multiply(t, c), l = [p[5], p[6]], f = o(l[0]), d = e(l), m = [l[0] + f * d, l[1]], v = 2 / i(m), y = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            y[5] = 1 - v * m[0] * m[0], y[10] = 1 - v * m[1] * m[1], y[6] =- v * m[0] * m[1], y[9] = y[6];
            var g = s.multiply(c, y), S = s.multiply(t, g), _ = s.scale(S[0] < 0?-1 : 1, S[5] < 0?-1 : 1, S[10] < 0?-1 : 1);
            S = s.multiply(_, S), g = s.multiply(g, _);
            var w = {};
            return w.translate = s.getTranslate(t), w.rotate = [Math.atan2( - g[6], g[10]), Math.asin(g[2]), Math.atan2( - g[1], g[0])], w.rotate[0] || (w.rotate[0] = 0, w.rotate[2] = Math.atan2(g[4], g[5])), w.scale = [S[0], S[5], S[10]], w.skew = [Math.atan(S[9] / w.scale[2]), Math.atan(S[8] / w.scale[2]), Math.atan(S[4] / w.scale[0])], Math.abs(w.rotate[0]) + Math.abs(w.rotate[2]) > 1.5 * Math.PI && (w.rotate[1] = Math.PI - w.rotate[1], w.rotate[1] > Math.PI && (w.rotate[1] -= 2 * Math.PI), w.rotate[1]<-Math.PI && (w.rotate[1] += 2 * Math.PI), w.rotate[0] < 0 ? w.rotate[0] += Math.PI : w.rotate[0] -= Math.PI, w.rotate[2] < 0 ? w.rotate[2] += Math.PI : w.rotate[2] -= Math.PI), w
        }, s.build = function(t) {
            var i = s.scale(t.scale[0], t.scale[1], t.scale[2]), e = s.skew(t.skew[0], t.skew[1], t.skew[2]), o = s.rotate(t.rotate[0], t.rotate[1], t.rotate[2]);
            return s.move(s.multiply(i, e, o), t.translate)
        }, s.equals = function(t, i) {
            if (t === i)
                return !0;
            if (!t ||!i)
                return !1;
            for (var e = 0; e < t.length; e++)
                if (t[e] != i[e])
                    return !1;
            return !0
        }, s.normalizeRotation = function(t) {
            var i = t.slice(0);
            for ((i[0] == Math.PI / 2 || i[0]==-Math.PI / 2) && (i[0] =- i[0], i[1] = Math.PI - i[1], i[2] -= Math.PI), i[0] > Math.PI / 2 && (i[0] = i[0] - Math.PI, i[1] = Math.PI - i[1], i[2] -= Math.PI), i[0]<-Math.PI / 2 && (i[0] = i[0] + Math.PI, i[1] =- Math.PI - i[1], i[2] -= Math.PI);
            i[1]<-Math.PI;
            )i[1] += 2 * Math.PI;
            for (; i[1] >= Math.PI;)
                i[1] -= 2 * Math.PI;
            for (; i[2]<-Math.PI;)
                i[2] += 2 * Math.PI;
            for (; i[2] >= Math.PI;)
                i[2] -= 2 * Math.PI;
            return i
        }, s.vecMultiply = function(t, i) {
            return [t[0] * i[0] + t[1] * i[4] + t[2] * i[8] + i[12], t[0] * i[1] + t[1] * i[5] + t[2] * i[9] + i[13], t[0] * i[2] + t[1] * i[6] + t[2] * i[10] + i[14]]
        }, s.applyPerspective = function(t, i) {
            var e = i / (i - t[2]);
            return [e * t[0], e * t[1]]
        }, e.exports = s
    }), define("famous/Surface", ["require", "exports", "module", "./Entity", "./EventHandler", "./Matrix"], function(t, i, e) {
        function s(t) {
            this.options = {}, this.properties = {}, this.content = "", this.classList = [], this.size = void 0, this._classesDirty=!0, this._stylesDirty=!0, this._sizeDirty=!0, this._contentDirty=!0, this._dirtyClasses = [], this._matrix = void 0, this._opacity = 1, this._origin = void 0, this._size = void 0, this.eventForwarder = function(t) {
                this.emit(t.type, t)
            }.bind(this), this.eventHandler = new f, this.eventHandler.bindThis(this), this.id = l.register(this), t && this.setOptions(t), this._currTarget = void 0
        }
        function o(t) {
            for (var i = this.surfaceEvents, e = 0; e < i.length; e++)
                t.addEventListener(i[e], this.eventForwarder)
        }
        function r(t) {
            for (var i = this.surfaceEvents, e = 0; e < i.length; e++)
                t.removeEventListener(i[e], this.eventForwarder)
        }
        function a(t) {
            for (var i = 0; i < this._dirtyClasses.length; i++)
                t.classList.remove(this._dirtyClasses[i]);
            this._dirtyClasses = []
        }
        function h(t) {
            for (var i in this.properties)
                t.style[i] = this.properties[i]
        }
        function u(t) {
            for (var i in this.properties)
                t.style[i] = ""
        }
        function c(t, i) {
            return t || i ? t && i ? t[0] == i[0] && t[1] == i[1] : !1 : !0
        }
        function p(t) {
            return (100 * t[0]).toFixed(6) + "% " + (100 * t[1]).toFixed(6) + "%"
        }
        var l = t("./Entity"), f = t("./EventHandler"), d = t("./Matrix"), m = void 0 !== document.body.style.webkitTransform;
        s.prototype.surfaceEvents = ["touchstart", "touchmove", "touchend", "touchcancel", "click", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave", "mousewheel", "wheel"], s.prototype.elementType = "div", s.prototype.elementClass = "surface", s.prototype.on = function(t, i) {
            this.eventHandler.on(t, i)
        }, s.prototype.unbind = function(t, i) {
            this.eventHandler.unbind(t, i)
        }, s.prototype.emit = function(t, i) {
            i&&!i.origin && (i.origin = this);
            var e = this.eventHandler.emit(t, i);
            return e && i.stopPropagation && i.stopPropagation(), e
        }, s.prototype.pipe = function(t) {
            return this.eventHandler.pipe(t)
        }, s.prototype.pipeEvents = function() {
            return console.warn("pipeEvents is deprecated; use pipe instead"), this.pipe.apply(this, arguments)
        }, s.prototype.unpipe = function(t) {
            return this.eventHandler.unpipe(t)
        }, s.prototype.render = function() {
            return this.id
        }, s.prototype.setProperties = function(t) {
            for (n in t)
                this.properties[n] = t[n];
            this._stylesDirty=!0
        }, s.prototype.getProperties = function() {
            return this.properties
        }, s.prototype.addClass = function(t) {
            this.classList.indexOf(t) < 0 && (this.classList.push(t), this._classesDirty=!0)
        }, s.prototype.removeClass = function(t) {
            var i = this.classList.indexOf(t);
            i >= 0 && (this._dirtyClasses.push(this.classList.splice(i, 1)[0]), this._classesDirty=!0)
        }, s.prototype.setClasses = function(t) {
            for (var i = [], e = 0; e < this.classList.length; e++)
                t.indexOf(this.classList[e]) < 0 && i.push(this.classList[e]);
            for (var e = 0; e < i.length; e++)
                this.removeClass(i[e]);
            for (var e = 0; e < t.length; e++)
                this.addClass(t[e])
        }, s.prototype.getClassList = function() {
            return this.classList
        }, s.prototype.setContent = function(t) {
            this.content != t && (this.content = t, this._contentDirty=!0)
        }, s.prototype.getContent = function() {
            return this.content
        }, s.prototype.setOptions = function(t) {
            t.size && this.setSize(t.size), t.classes && this.setClasses(t.classes), t.properties && this.setProperties(t.properties), t.content && this.setContent(t.content)
        };
        var v, y, g;
        v = m ? function(t, i) {
            t.style.webkitTransform = d.formatCSS(i)
        } : function(t, i) {
            t.style.transform = d.formatCSS(i)
        }, y = m ? function(t, i) {
            t.style.webkitTransformOrigin = p(i)
        } : function(t, i) {
            t.style.transformOrigin = p(i)
        }, g = m ? function(t) {
            t.style.webkitTransform = "scale3d(0.0001,0.0001,1)", t.style.opacity = 0
        } : function(t) {
            t.style.transform = "scale3d(0.0001,0.0001,1)", t.style.opacity = 0
        }, s.prototype.setup = function(t) {
            var i = t.allocate(this.elementType);
            if (this.elementClass)
                if (this.elementClass instanceof Array)
                    for (var e = 0; e < this.elementClass.length; e++)
                        i.classList.add(this.elementClass[e]);
                else 
                    i.classList.add(this.elementClass);
            o.call(this, i), y(i, [0, 0]), this._currTarget = i, this._stylesDirty=!0, this._classesDirty=!0, this._sizeDirty=!0, this._contentDirty=!0, this._matrix = void 0, this._opacity = void 0, this._origin = void 0, this._size = void 0
        }, s.prototype.commit = function(t, i, e, s, o) {
            this._currTarget || this.setup(t.getAllocator());
            var n = this._currTarget;
            if (this.size) {
                var r = o;
                o = this.size.slice(0), void 0 === o[0] && r[0] && (o[0] = r[0]), void 0 === o[1] && r[1] && (o[1] = r[1])
            }
            if (c(this._size, o) || (this._size = o.slice(0), this._sizeDirty=!0), !i && this._matrix)
                return this._matrix = void 0, this._opacity = 0, g(n), void 0;
            if (this._opacity !== e && (this._opacity = e, n.style.opacity = Math.min(e, .999999))
                , !c(this._origin, s) ||!d.equals(this._matrix, i)) {
                i || (i = d.identity), s || (s = [0, 0]), this._origin = s.slice(0), this._matrix = i;
                var u = i;
                s && (u = d.moveThen([ - this._size[0] * s[0], - this._size[1] * s[1]], i)), v(n, u)
            }
            if (this._classesDirty || this._stylesDirty || this._sizeDirty || this._contentDirty) {
                if (this._classesDirty) {
                    a.call(this, n);
                    for (var p = this.getClassList(), l = 0; l < p.length; l++)
                        n.classList.add(p[l]);
                    this._classesDirty=!1
                }
                this._stylesDirty && (h.call(this, n), this._stylesDirty=!1), this._sizeDirty && (this._size && (n.style.width = this._size[0]!==!0 ? this._size[0] + "px" : "", n.style.height = this._size[1]!==!0 ? this._size[1] + "px" : ""), this._sizeDirty=!1), this._contentDirty && (this.deploy(n), this._contentDirty=!1)
            }
        }, s.prototype.cleanup = function(t) {
            var i = this._currTarget;
            this.recall(i), i.style.width = "", i.style.height = "", this._size = void 0, u.call(this, i);
            var e = this.getClassList();
            a.call(this, i);
            for (var s = 0; s < e.length; s++)
                i.classList.remove(e[s]);
            r.call(this, i), this._currTarget = void 0, t.deallocate(i), g(i)
        }, s.prototype.deploy = function(t) {
            var i = this.getContent();
            "string" == typeof i ? t.innerHTML = i : t.appendChild(i)
        }, s.prototype.recall = function(t) {
            for (var i = document.createDocumentFragment(); t.hasChildNodes();)
                i.appendChild(t.firstChild);
            this.setContent(i)
        }, s.prototype.getSize = function(t) {
            return t ? this._size : this.size || this._size
        }, s.prototype.setSize = function(t) {
            this.size = t ? t.slice(0, 2) : void 0, this._sizeDirty=!0
        }, e.exports = s
    }), define("famous/CanvasSurface", ["require", "exports", "module", "./Surface"], function(t, i, e) {
        function s(t) {
            t && t.canvasSize && (this.canvasSize = t.canvasSize), o.call(this, t), this.canvasSize || (this.canvasSize = this.getSize()), this.backBuffer = document.createElement("canvas"), this.canvasSize && (this.backBuffer.width = this.canvasSize[0], this.backBuffer.height = this.canvasSize[1]), this._contextId = void 0
        }
        var o = t("./Surface");
        s.prototype = Object.create(o.prototype), s.prototype.elementType = "canvas", s.prototype.elementClass = "surface", s.prototype.setContent = function() {}, s.prototype.deploy = function(t) {
            this.canvasSize && (t.width = this.canvasSize[0], t.height = this.canvasSize[1]), "2d" == this._contextId && (t.getContext(this._contextId).drawImage(this.backBuffer, 0, 0), this.backBuffer.width = 0, this.backBuffer.height = 0)
        }, s.prototype.recall = function(t) {
            this.getSize(), this.backBuffer.width = t.width, this.backBuffer.height = t.height, "2d" == this._contextId && (this.backBuffer.getContext(this._contextId).drawImage(t, 0, 0), t.width = 0, t.height = 0)
        }, s.prototype.getContext = function(t) {
            return this._contextId = t, this._currTarget ? this._currTarget.getContext(t) : this.backBuffer.getContext(t)
        }, s.prototype.setSize = function(t, i) {
            o.prototype.setSize.apply(this, arguments), i && (this.canvasSize = i.slice(0)), this._currTarget && (this._currTarget.width = this.canvasSize[0], this._currTarget.height = this.canvasSize[1])
        }, e.exports = s
    }), define("famous/SpecParser", ["require", "exports", "module", "./Matrix"], function(t, i, e) {
        function s() {
            this.reset()
        }
        function o(t, i) {
            return [t[0] * i[0] + t[1] * i[4] + t[2] * i[8], t[0] * i[1] + t[1] * i[5] + t[2] * i[9], t[0] * i[2] + t[1] * i[6] + t[2] * i[10]]
        }
        var n = t("./Matrix");
        s.parse = function(t, i) {
            var e = new s, o = e.parse(t);
            return i ? (i(o), void 0) : o
        }, s.prototype.parse = function(t) {
            return this.reset(), this._parseSpec(t, n.identity, 1, [0, 0], void 0, n.identity), this.result
        }, s.prototype.reset = function() {
            this.result = {}
        }, s.prototype._parseSpec = function(t, i, e, s, r, a) {
            if (void 0 == t);
            else if ("number" == typeof t) {
                var h = t, u = r ? [s[0] * r[0], s[1] * r[1], 0]: [0, 0, 0];
                i || (i = n.identity), this.result[h] = [n.move(i, o(u, a)), e, s, r]
            } else if (t instanceof Array)
                for (var c = 0; c < t.length; c++)
                    this._parseSpec(t[c], i, e, s, r, a);
            else if (void 0 !== t.target) {
                var p = t.target, l = i, f = e, d = s, m = r;
                void 0 !== t.opacity && (f = e * t.opacity), t.transform && (l = n.multiply(t.transform, i)), t.origin && (d = t.origin), t.size && (m = t.size, void 0 === m[0] && (m[0] = r[0]), void 0 === m[1] && (m[1] = r[1]), r || (r = m), d || (d = [0, 0]), l || (l = n.identity), l = n.move(l, o([d[0] * r[0], d[1] * r[1], 0], a)), l = n.moveThen([ - d[0] * m[0], - d[1] * m[1], 0], l), a = i ? i : n.identity, d = [0, 0]), this._parseSpec(p, l, f, d, m, a)
            }
        }, e.exports = s
    }), define("famous/RenderNode", ["require", "exports", "module", "./Entity", "./SpecParser", "./Matrix"], function(t, i, e) {
        function s(t) {
            this.modifiers = [], this.object = void 0, t && this.set(t), this._hasCached=!1, this._resultCache = {}, this._prevResults = {}
        }
        function o(t, i, e) {
            var s = r.parse(t);
            for (var a in s) {
                var h = n.get(a), u = s[a];
                u.unshift(i);
                var c = h.commit.apply(h, u);
                c ? o(c, i, e) : e[a] = u
            }
        }
        var n = t("./Entity"), r = t("./SpecParser");
        t("./Matrix"), s.prototype.get = function() {
            return this.object
        }, s.prototype.set = function(t) {
            this.object = t
        }, s.prototype.link = function(t) {
            if (t instanceof Array)
                this.set(t);
            else {
                var i = this.get();
                i ? i instanceof Array ? this.modifiers.unshift(t) : (this.modifiers.unshift(i), this.set(t)) : this.set(t)
            }
            return this
        }, s.prototype.add = function(t) {
            this.get()instanceof Array || this.set([]);
            var i = new s(t);
            return this.get().push(i), i
        }, s.prototype.mod = function(t) {
            return this.modifiers.push(t), this
        }, s.prototype.commit = function(t, i, e, s, r) {
            var a = this.render(void 0, this._hasCached);
            if (a!==!0) {
                for (var h in this._prevResults)
                    if (!(h in this._resultCache)) {
                        var u = n.get(h);
                        u.cleanup && u.cleanup(t.getAllocator())
                    }
                this._prevResults = this._resultCache, this._resultCache = {}, o({
                    transform: i,
                    size: r,
                    origin: s,
                    opacity: e,
                    target: a
                }, t, this._resultCache), this._hasCached=!0
            }
        }, s.prototype.render = function(t) {
            var i = t, e = this.get();
            if (e)
                if (e.render)
                    i = e.render(t);
                else {
                    var s = e.length-1;
                    for (i = new Array(s); s >= 0;)
                        i[s] = e[s].render(), s--
                }
            for (var o = this.modifiers.length, s = 0; o > s; s++)
                i = this.modifiers[s].render(i);
            return i
        }, e.exports = s
    }), define("famous/ElementAllocator", ["require", "exports", "module"], function(t, i, e) {
        function s(t) {
            t || (t = document.createDocumentFragment()), this.container = t, this.detachedNodes = {}, this.nodeCount = 0
        }
        s.prototype.migrate = function(t) {
            var i = this.container;
            if (t !== i) {
                if (i instanceof DocumentFragment)
                    t.appendChild(i);
                else 
                    for (; i.hasChildNodes();)
                        t.appendChild(i.removeChild(i.firstChild));
                this.container = t
            }
        }, s.prototype.allocate = function(t) {
            t = t.toLowerCase(), t in this.detachedNodes || (this.detachedNodes[t] = []);
            var i, e = this.detachedNodes[t];
            return e.length > 0 ? i = e.pop() : (i = document.createElement(t), this.container.appendChild(i)), this.nodeCount++, i
        }, s.prototype.deallocate = function(t) {
            var i = t.nodeName.toLowerCase(), e = this.detachedNodes[i];
            e.push(t), this.nodeCount--
        }, s.prototype.getNodeCount = function() {
            return this.nodeCount
        }, e.exports = s
    }), define("famous/Utility", ["require", "exports", "module"], function(t, i, e) {
        var s = {};
        s.Curve = {
            linear: function(t) {
                return t
            },
            easeIn: function(t) {
                return t * t
            },
            easeOut: function(t) {
                return t * (2 - t)
            },
            easeInOut: function(t) {
                return .5 >= t ? 2 * t * t : -2 * t * t + 4 * t-1
            },
            easeOutBounce: function(t) {
                return t * (3-2 * t)
            },
            spring: function(t) {
                return (1 - t) * Math.sin(6 * Math.PI * t) + t
            }
        }, s.Direction = {
            X: 0,
            Y: 1,
            Z: 2
        }, s.Origin = {
            tl: [0, 0],
            t: [.5, 0],
            tr: [1, 0],
            l: [0, .5],
            c: [.5, .5],
            r: [1, .5],
            bl: [0, 1],
            b: [.5, 1],
            br: [1, 1]
        }, s.after = function(t, i) {
            var e = t;
            return function() {
                e--, 0 === e && i.apply(this, arguments)
            }
        }, s.loadURL = function(t, i) {
            var e = new XMLHttpRequest;
            e.onreadystatechange = function() {
                4 == this.readyState && i && i(this.responseText)
            }, e.open("GET", t), e.send()
        }, s.transformInFrontMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1], s.transformInFront = {
            render: function(t) {
                return {
                    transform: s.transformInFrontMatrix,
                    target: t
                }
            }
        }, s.transformBehindMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1, 1], s.transformBehind = {
            render: function(t) {
                return {
                    transform: s.transformBehindMatrix,
                    target: t
                }
            }
        }, s.customizeComponent = function(t, i, e) {
            var s = function(s) {
                t.call(this, i), s && this.setOptions(s), e && e.call(this)
            };
            return s.prototype = Object.create(t.prototype), s
        }, s.createDocumentFragmentFromHTML = function(t) {
            var i = document.createElement("div");
            i.innerHTML = t;
            for (var e = document.createDocumentFragment(); i.hasChildNodes();)
                e.appendChild(i.firstChild);
            return e
        }, e.exports = s
    }), define("famous/MultipleTransition", ["require", "exports", "module", "./Utility"], function(t, i, e) {
        function s(t) {
            this.method = t, this._instances = [], this.state = []
        }
        var o = t("./Utility");
        s.SUPPORTS_MULTIPLE=!0, s.prototype.get = function() {
            for (var t = 0; t < this._instances.length; t++)
                this.state[t] = this._instances[t].get();
            return this.state
        }, s.prototype.set = function(t, i, e) {
            for (var s = o.after(t.length, e), n = 0; n < t.length; n++)
                this._instances[n] || (this._instances[n] = new this.method), this._instances[n].set(t[n], i, s)
        }, s.prototype.reset = function(t) {
            for (var i = 0; i < t.length; i++)
                this._instances[i] || (this._instances[i] = new this.method), this._instances[i].reset(t[i])
        }, e.exports = s
    }), define("famous/TweenTransition", ["require", "exports", "module", "famous/Utility"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), t && this.setOptions(t), this._startTime = 0, this._startValue = 0, this._updateTime = 0, this._endValue = 0, this._curve = void 0, this._duration = 0, this._active=!1, this._callback = void 0, this.state = 0
        }
        function o(t, i, e) {
            return (1 - e) * t + e * i
        }
        function n(t) {
            return t instanceof Object ? t instanceof Array ? t.slice(0) : Object.create(t) : t
        }
        function r(t, i) {
            var e = {
                curve: i.curve
            };
            return i.duration && (e.duration = i.duration), i.speed && (e.speed = i.speed), t instanceof Object && (void 0 !== t.duration && (e.duration = t.duration), t.curve && (e.curve = t.curve), t.speed && (e.speed = t.speed)), "string" == typeof e.curve && (e.curve = s.getCurve(e.curve)), e
        }
        var a = t("famous/Utility");
        s.SUPPORTS_MULTIPLE=!0, s.DEFAULT_OPTIONS = {
            curve: a.Curve.linear,
            duration: 500,
            speed: 0
        };
        var h = {};
        s.registerCurve = function(t, i) {
            return h[t]?!1 : (h[t] = i, !0)
        }, s.unregisterCurve = function(t) {
            return h[t] ? (delete h[t], !0) : !1
        }, s.getCurve = function(t) {
            return h[t]
        }, s.getCurves = function() {
            return h
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.curve && (this.options.curve = t.curve), void 0 !== t.duration && (this.options.duration = t.duration), void 0 !== t.speed && (this.options.speed = t.speed)
        }, s.prototype.set = function(t, i, e) {
            if (!i)
                return this.reset(t), e && e(), void 0;
            if (this._startValue = n(this.get()), i = r(i, this.options)
                , i.speed) {
                var s = this._startValue;
                if (s instanceof Object) {
                    var o = 0;
                    for (var a in s)
                        o += (t[a] - s[a]) * (t[a] - s[a]);
                    i.duration = Math.sqrt(o) / i.speed
                } else 
                    i.duration = Math.abs(t - s) / i.speed
            }
            this._startTime = Date.now(), this._endValue = n(t), this._duration = i.duration, this._curve = i.curve, this._active=!0, this._callback = e
        }, s.prototype.reset = function(t) {
            if (this._callback) {
                var i = this._callback;
                this._callback = void 0, i()
            }
            this.state = n(t), this._startTime = 0, this._duration = 0, this._updateTime = 0, this._startValue = this.state, this._endValue = this.state, this._active=!1
        }, s.prototype.get = function(t) {
            return this.update(t), this.state
        }, s.prototype.update = function(t) {
            if (this._active) {
                if (t || (t = Date.now()), !(this._updateTime >= t)
                    ) {
                    this._updateTime = t;
                    var i = t - this._startTime;
                    if (i >= this._duration)
                        this.state = this._endValue, this._active=!1;
                    else if (0 > i)
                        this.state = this._startValue;
                    else {
                        var e = i / this._duration;
                        if (this.state instanceof Object)
                            for (var s in this.state)
                                this.state[s] = o(this._startValue[s], this._endValue[s], this._curve(e));
                        else 
                            this.state = o(this._startValue, this._endValue, this._curve(e))
                    }
                }
            } else if (this._callback) {
                var n = this._callback;
                this._callback = void 0, n()
            }
        }, s.prototype.isActive = function() {
            return this._active
        }, s.prototype.halt = function() {
            this.reset(this.get())
        }, s.registerCurve("linear", a.Curve.linear), s.registerCurve("easeIn", a.Curve.easeIn), s.registerCurve("easeOut", a.Curve.easeOut), s.registerCurve("easeInOut", a.Curve.easeInOut), s.registerCurve("easeOutBounce", a.Curve.easeOutBounce), s.registerCurve("spring", a.Curve.spring), e.exports = s
    }), define("famous/Transitionable", ["require", "exports", "module", "./Utility", "./MultipleTransition", "./TweenTransition"], function(t, i, e) {
        function s(t) {
            this.currentAction = null, this.actionQueue = [], this.callbackQueue = [], this.state = 0, this._callback = void 0, this._engineInstance = null, this._currentMethod = null, this.set(t)
        }
        function o() {
            if (this._callback) {
                var t = this._callback;
                this._callback = void 0, t()
            }
            if (this.actionQueue.length <= 0)
                return this.set(this._engineInstance), void 0;
            this.currentAction = this.actionQueue.shift(), this._callback = this.callbackQueue.shift();
            var i = null, e = this.currentAction[0], s = this.currentAction[1];
            s instanceof Object && s.method ? (i = s.method, "string" == typeof i && (i = a[i])) : i = r, this._currentMethod !== i && (this._engineInstance=!(e instanceof Object) || i.SUPPORTS_MULTIPLE===!0 || e.length <= i.SUPPORTS_MULTIPLE ? new i : new n(i), this._currentMethod = i), this._engineInstance.reset(this.state), this._engineInstance.set(e, s, o.bind(this))
        }
        t("./Utility");
        var n = t("./MultipleTransition"), r = t("./TweenTransition"), a = {};
        s.registerMethod = function(t, i) {
            return t in a?!1 : (a[t] = i, !0)
        }, s.unregisterMethod = function(t) {
            return t in a ? (delete a[t], !0) : !1
        }, s.prototype.set = function(t, i, e) {
            if (!i)
                return this.reset(t), e && e(), void 0;
            var s = [t, i];
            this.actionQueue.push(s), this.callbackQueue.push(e), this.currentAction || o.call(this)
        }, s.prototype.reset = function(t) {
            this._currentMethod = null, this._engineInstance = null, this.state = t, this.currentAction = null, this.actionQueue = [], this.callbackQueue = []
        }, s.prototype.delay = function(t, i) {
            this.set(this._engineInstance, {
                duration: t,
                curve: function() {
                    return 0
                }
            }, i)
        }, s.prototype.get = function(t) {
            return this._engineInstance && (this.state = this._engineInstance.get(t)), this.state
        }, s.prototype.isActive = function() {
            return !!this.currentAction
        }, s.prototype.halt = function() {
            this.set(this.get())
        }, e.exports = s
    }), define("famous/Context", ["require", "exports", "module", "./RenderNode", "./EventHandler", "./SpecParser", "./ElementAllocator", "./Matrix", "./Transitionable"], function(t, i, e) {
        function s(t) {
            this.container = t, this.allocator = new a(t), this.srcNode = new n, this.eventHandler = new r, this._size = [window.innerWidth, window.innerHeight], this.perspectiveState = new u(0), this._perspective = void 0, this.eventHandler.on("resize", function() {
                this._size = o(this.container)
            }.bind(this))
        }
        function o(t) {
            return [t.clientWidth, t.clientHeight]
        }
        var n = t("./RenderNode"), r = t("./EventHandler");
        t("./SpecParser");
        var a = t("./ElementAllocator"), h = t("./Matrix"), u = t("./Transitionable");
        s.prototype.getAllocator = function() {
            return this.allocator
        }, s.prototype.link = function(t) {
            return this.srcNode.link(t)
        }, s.prototype.add = function(t) {
            return this.srcNode.add(t)
        }, s.prototype.mod = function(t) {
            return this.srcNode.mod(t)
        }, s.prototype.migrate = function(t) {
            t !== this.container && (this.container = t, this.allocator.migrate(t))
        }, s.prototype.getSize = function() {
            return this._size
        }, s.prototype.setSize = function(t) {
            t || (t = o(this.container)), this._size = t
        }, s.prototype.update = function() {
            var t = this.perspectiveState.get();
            t !== this._perspective && (this.container.style.perspective = t ? t.toFixed() + "px" : "", this.container.style.webkitPerspective = t ? t.toFixed() : "", this._perspective = t), this.srcNode && this.srcNode.commit(this, h.identity, 1, [0, 0], this._size)
        }, s.prototype.getOutputTransform = function(t) {
            var i = this.parsedCache;
            if (i) {
                var e = t.id, s = {
                    transform: i.transforms[e],
                    opacity: i.opacities[e]
                };
                if (i.origins[e] && (s.origin = i.origins[e]), i.groups[e]) {
                    var o = i.groups[e];
                    s.transform = h.multiply(s.transform, i.groupTransforms[o]), i.groupOpacities[o] && (s.opacity*=i.groupOpacities[o])
                }
                return s
            }
        }, s.prototype.getPerspective = function() {
            return this.perspectiveState.get()
        }, s.prototype.setPerspective = function(t, i, e) {
            return this.perspectiveState.set(t, i, e)
        }, s.prototype.emit = function(t, i) {
            return this.eventHandler.emit(t, i)
        }, s.prototype.on = function(t, i) {
            return this.eventHandler.on(t, i)
        }, s.prototype.unbind = function(t, i) {
            return this.eventHandler.unbind(t, i)
        }, s.prototype.pipe = function(t) {
            return this.eventHandler.pipe(t)
        }, s.prototype.unpipe = function(t) {
            return this.eventHandler.unpipe(t)
        }, e.exports = s
    }), define("famous/ContainerSurface", ["require", "exports", "module", "./Surface", "./Context"], function(t, i, e) {
        function s(t) {
            o.call(this, t), this._container = document.createElement("div"), this._container.classList.add("group"), this._container.style.width = "100%", this._container.style.height = "100%", this._container.style.position = "relative", this._shouldRecalculateSize=!1, this.context = new n(this._container), this.setContent(this._container)
        }
        var o = t("./Surface"), n = t("./Context");
        s.prototype = Object.create(o.prototype), s.prototype.elementType = "div", s.prototype.elementClass = "surface", s.prototype.link = function() {
            return this.context.link.apply(this.context, arguments)
        }, s.prototype.add = function() {
            return this.context.add.apply(this.context, arguments)
        }, s.prototype.mod = function() {
            return this.context.mod.apply(this.context, arguments)
        }, s.prototype.render = function() {
            return this._sizeDirty && (this._shouldRecalculateSize=!0), o.prototype.render.call(this)
        }, s.prototype.commit = function() {
            var t = o.prototype.commit.apply(this, arguments);
            return this._shouldRecalculateSize && (this.context.setSize(), this._shouldRecalculateSize=!1), this.context.update(), t
        }, e.exports = s
    }), define("famous/Engine", ["require", "exports", "module", "./Context", "./EventHandler"], function(t, i, e) {
        function s() {
            var t = Date.now();
            if (T && T > t - x)
                return requestAnimationFrame(s), void 0;
            O = t - x, x = t, I.emit("prerender");
            for (var i = 0; i < _.length; i++)
                _[i].call(this);
            for (_ = [];
            w.length && Date.now() - t < b;
            )w.shift().call(this);
            for (var i = 0;
            i < S.length;
            i++)S[i].update(); I.emit("postrender"), requestAnimationFrame(s)
            }
        function o(t) {
            if (document.activeElement && "INPUT" == document.activeElement.nodeName)
                return document.activeElement.addEventListener("blur", function e() {
                    this.removeEventListener("blur", e), o(t)
                }), void 0;
            window.scrollTo(0, 0);
            for (var i = 0; i < S.length; i++)
                S[i].emit("resize");
            I.emit("resize")
        }
        function n(t) {
            return I.pipe(t)
        }
        function r(t) {
            return I.unpipe(t)
        }
        function a(t, i) {
            I.on(t, i)
        }
        function h(t, i) {
            I.emit(t, i)
        }
        function u(t, i) {
            I.unbind(t, i)
        }
        function c() {
            return 1e3 / O
        }
        function p(t) {
            T = Math.floor(1e3 / t)
        }
        function l(t) {
            void 0 === t ? (t = document.createElement("div"), t.classList.add("container"), document.body.appendChild(t)) : t instanceof Element || (t = document.createElement("div"), console.warn("Tried to create context on non-existent element"));
            var i = new y(t);
            return S.push(i), i
        }
        function f(t) {
            _.push(t)
        }
        function d(t) {
            return C[t]
        }
        function m(t) {
            var i = C.length;
            return C[i] = t, i
        }
        function v(t) {
            w.push(t)
        }
        var y = t("./Context"), g = t("./EventHandler"), S = [], _ = [], w = [], x = Date.now(), O = void 0, T = void 0, I = new g, b = 10, C = [];
        requestAnimationFrame(s), window.addEventListener("resize", o, !1), o(), window.addEventListener("touchmove", function(t) {
            t.preventDefault()
        }, !1);
        for (var M = ["touchstart", "touchmove", "touchend", "touchcancel", "click", "keydown", "keyup", "keypress", "mouseup", "mousedown", "mousemove", "mouseover", "mouseout", "mousewheel", "wheel", "resize"], E = 0; E < M.length; E++) {
            var F = M[E];
            document.body.addEventListener(F, function(t) {
                I.emit(t.type, t, !1)
            }, !1)
        }
        e.exports = {
            on: a,
            defer: v,
            emit: h,
            unbind: u,
            pipe: n,
            unpipe: r,
            createContext: l,
            getFPS: c,
            setFPSCap: p,
            nextTick: f,
            getEntity: d,
            registerEntity: m
        }
    }), define("famous/EventArbiter", ["require", "exports", "module", "./EventHandler"], function(t, i, e) {
        function s(t) {
            this.dispatchers = {}, this.currMode = void 0, this.setMode(t)
        }
        var o = t("./EventHandler");
        s.prototype.setMode = function(t) {
            if (t != this.currMode) {
                var i = this.currMode;
                this.dispatchers[this.currMode] && this.dispatchers[this.currMode].emit("unpipe"), this.currMode = t, this.dispatchers[t] && this.dispatchers[t].emit("pipe"), this.emit("change", {
                    from: i,
                    to: t
                })
            }
        }, s.prototype.forMode = function(t) {
            return this.dispatchers[t] || (this.dispatchers[t] = new o), this.dispatchers[t]
        }, s.prototype.emit = function(t, i) {
            if (void 0 == this.currMode)
                return !1;
            i || (i = {});
            var e = this.dispatchers[this.currMode];
            return e ? e.emit(t, i) : void 0
        }, e.exports = s
    }), define("famous/Group", ["require", "exports", "module", "./Context", "./Matrix", "./Surface"], function(t, i, e) {
        function s(t) {
            r.call(this, t), this._shouldRecalculateSize=!1, this._container = document.createDocumentFragment(), this.context = new o(this._container), this.setContent(this._container), this._groupSize = [void 0, void 0], this._origin = void 0, this._originTransfer = {
                render: function(t) {
                    return {
                        origin: this._origin,
                        target: t
                    }
                }.bind(this)
            }
        }
        var o = t("./Context"), n = t("./Matrix"), r = t("./Surface");
        s.SIZE_ZERO = [0, 0], s.prototype = Object.create(r.prototype), s.prototype.elementType = "div", s.prototype.elementClass = "group", s.prototype.link = function() {
            var t = this.context.link(this._originTransfer);
            return t.link.apply(t, arguments)
        }, s.prototype.add = function() {
            return this.context.add.apply(this.context, arguments)
        }, s.prototype.mod = function() {
            return this.context.mod.apply(this.context, arguments)
        }, s.prototype.render = function() {
            return r.prototype.render.call(this)
        }, s.prototype.deploy = function(t) {
            this.context.migrate(t)
        }, s.prototype.recall = function() {
            this._container = document.createDocumentFragment(), this.context.migrate(this._container)
        }, s.prototype.commit = function(t, i, e, o, a) {
            i = n.moveThen([ - o[0] * a[0], - o[1] * a[1], 0], i);
            var h = r.prototype.commit.call(this, t, i, e, o, s.SIZE_ZERO);
            return this._origin = o, (a[0] != this._groupSize[0] || a[1] != this._groupSize[1]) && (this.context.setSize(a), this._groupSize[0] = a[0], this._groupSize[1] = a[1]), this.context.update(), h
        }, e.exports = s
    }), define("famous/ImageSurface", ["require", "exports", "module", "./Surface"], function(t, i, e) {
        function s() {
            this.imageUrl = void 0, o.apply(this, arguments)
        }
        var o = t("./Surface");
        s.prototype = Object.create(o.prototype), s.prototype.surfaceEvents = o.prototype.surfaceEvents.concat(["load"]), s.prototype.elementType = "img", s.prototype.elementClass = "surface", s.prototype.setContent = function(t) {
            this.imageUrl = t, this._contentDirty=!0
        }, s.prototype.deploy = function(t) {
            t.src = this.imageUrl || ""
        }, s.prototype.recall = function(t) {
            t.src = ""
        }, e.exports = s
    }), define("famous/Modifier", ["require", "exports", "module", "./Matrix", "./Transitionable", "./Utility"], function(t, i, e) {
        function s(t) {
            var i = o.identity, e = 1, s = void 0, r = void 0;
            arguments.length > 1 || arguments[0]instanceof Array ? (void 0 !== arguments[0] && (i = arguments[0]), void 0 !== arguments[1] && (e = arguments[1]), s = arguments[2], r = arguments[3]) : t && (t.transform && (i = t.transform), void 0 !== t.opacity && (e = t.opacity), t.origin && (s = t.origin), t.size && (r = t.size)), this.transformTranslateState = new n([0, 0, 0]), this.transformRotateState = new n([0, 0, 0]), this.transformSkewState = new n([0, 0, 0]), this.transformScaleState = new n([1, 1, 1]), this.opacityState = new n(e), this.originState = new n([0, 0]), this.sizeState = new n([0, 0]), this._originEnabled=!1, this._sizeEnabled=!1, this.setTransform(i), this.setOpacity(e), this.setOrigin(s), this.setSize(r)
        }
        var o = t("./Matrix"), n = t("./Transitionable"), r = t("./Utility");
        s.prototype.getTransform = function() {
            return this.isActive() ? o.build({
                translate: this.transformTranslateState.get(),
                rotate: this.transformRotateState.get(),
                skew: this.transformSkewState.get(),
                scale: this.transformScaleState.get()
            }) : this.getFinalTransform()
        }, s.prototype.getFinalTransform = function() {
            return this._finalTransform
        }, s.prototype.setTransform = function(t, i, e) {
            var s = e ? r.after(4, e): void 0;
            if (i) {
                if (this._transformDirty) {
                    var n = o.interpret(this.getFinalTransform());
                    this.transformTranslateState.set(n.translate), this.transformRotateState.set(n.rotate), this.transformSkewState.set(n.skew), this.transformScaleState.set(n.scale), this._transformDirty=!1
                }
                var a = o.interpret(t);
                this.transformTranslateState.set(a.translate, i, s), this.transformRotateState.set(a.rotate, i, s), this.transformSkewState.set(a.skew, i, s), this.transformScaleState.set(a.scale, i, s)
            } else 
                this.transformTranslateState.halt(), this.transformRotateState.halt(), this.transformSkewState.halt(), this.transformScaleState.halt(), this._transformDirty=!0;
            this._finalTransform = t
        }, s.prototype.getOpacity = function() {
            return this.opacityState.get()
        }, s.prototype.setOpacity = function(t, i, e) {
            this.opacityState.set(t, i, e)
        }, s.prototype.getOrigin = function() {
            return this._originEnabled ? this.originState.get() : void 0
        }, s.prototype.setOrigin = function(t, i, e) {
            this._originEnabled=!!t, t || (t = [0, 0]), t instanceof Array || (t = r.origins[t]), this.originState.set(t, i, e)
        }, s.prototype.getSize = function() {
            return this._sizeEnabled ? this.sizeState.get() : void 0
        }, s.prototype.setSize = function(t, i, e) {
            this._sizeEnabled=!!t, t || (t = [0, 0]), this.sizeState.set(t, i, e)
        }, s.prototype.setDefaultTransition = function(t) {
            this.transformTranslateState.setDefault(t), this.transformRotateState.setDefault(t), this.transformSkewState.setDefault(t), this.transformScaleState.setDefault(t), this.opacityState.setDefault(t), this.originState.setDefault(t), this.sizeState.setDefault(t)
        }, s.prototype.halt = function() {
            this.transformTranslateState.halt(), this.transformRotateState.halt(), this.transformSkewState.halt(), this.transformScaleState.halt(), this.opacityState.halt(), this.originState.halt(), this.sizeState.halt()
        }, s.prototype.isActive = function() {
            return this.transformTranslateState.isActive() || this.transformRotateState.isActive() || this.transformSkewState.isActive() || this.transformScaleState.isActive()
        }, s.prototype.render = function(t) {
            return {
                transform: this.getTransform(),
                opacity: this.getOpacity(),
                origin: this.getOrigin(),
                size: this.getSize(),
                target: t
            }
        }, e.exports = s
    }), define("famous/OptionsManager", ["require", "exports", "module", "./EventHandler"], function(t, i, e) {
        function s(t) {
            this._value = t, this.eventOutput = null
        }
        function o() {
            this.eventOutput = new n, this.eventOutput.bindThis(this), n.setOutputHandler(this, this.eventOutput)
        }
        var n = t("./EventHandler");
        s.patch = function(t) {
            for (var i = new s(t), e = 1; e < arguments.length; e++)
                i.patch(arguments[e]);
            return t
        }, s.prototype.patch = function() {
            for (var t = this._value, i = 0; i < arguments.length; i++) {
                var e = arguments[i];
                for (var s in e)
                    !(s in t && "object" == typeof t[s]) || t[s]instanceof Array || "object" != typeof e[s] || e[s]instanceof Array ? this.set(s, e[s]) : (t.hasOwnProperty(s) || (t[s] = Object.create(t[s])), this.key(s).patch(e[s]), this.eventOutput && this.eventOutput.emit("change", {
                    id: s,
                    value: this.key(s).value()
                }))
            }
            return this
        }, s.prototype.setOptions = s.prototype.patch, s.prototype.key = function(t) {
            var i = new s(this._value[t]);
            return (!(i._value instanceof Object) || i._value instanceof Array) && (i._value = {}), i
        }, s.prototype.get = function(t) {
            return this._value[t]
        }, s.prototype.getOptions = s.prototype.get, s.prototype.set = function(t, i) {
            var e = this.get(t);
            return this._value[t] = i, this.eventOutput && i !== e && this.eventOutput.emit("change", {
                id: t,
                value: i
            }), this
        }, s.prototype.value = function() {
            return this._value
        }, s.prototype.on = function() {
            return o.call(this), this.on.apply(this, arguments)
        }, s.prototype.unbind = function() {
            return o.call(this), this.unbind.apply(this, arguments)
        }, s.prototype.pipe = function() {
            return o.call(this), this.pipe.apply(this, arguments)
        }, s.prototype.unpipe = function() {
            return o.call(this), this.unpipe.apply(this, arguments)
        }, e.exports = s
    }), define("famous/SceneCompiler", ["require", "exports", "module", "./Matrix"], function(t, i, e) {
        function s(t) {
            var i = {
                varCounter: 0
            }, e = [], s = h.call(i, t, e);
            return e.push("return " + s + ";"), new Function(["FT", "RenderNode", "RN_link", "RN_include", "id", "transforms"], e.join("\n"))
        }
        function o(t, i) {
            return "var " + t + " = " + i + ";"
        }
        function n(t, i) {
            return "id." + t + " = " + i + ";"
        }
        function r(t) {
            return "transforms.push(" + t + ");"
        }
        function a() {
            return "_" + this.varCounter++
        }
        function h(t, i) {
            var e;
            if (t instanceof Array)
                e = u.call(this, t, i);
            else if (e = a.call(this), t.target) {
                var s = h.call(this, t.target, i), p = c.call(this, t, i);
                i.push(o(e, "new RenderNode(" + p + ")")), i.push("RN_link.call(" + e + ", " + s + ");"), t.id && i.push(n(t.id, p)), i.push(r(p))
            } else 
                t.id && (i.push(o(e, "new RenderNode()")), i.push(n(t.id, e)));
            return e
        }
        function u(t, i) {
            var e = a.call(this);
            i.push(o(e, "new RenderNode()"));
            for (var s = 0; s < t.length; s++) {
                var n = h.call(this, t[s], i);
                n && i.push("RN_include.call(" + e + ", " + n + ");")
            }
            return e
        }
        function c(t, i) {
            var e = t.transform, s = t.opacity, n = t.origin, r = t.size;
            t.target;
            var h = l.identity;
            if (e instanceof Array)
                if (16 == e.length && "number" == typeof e[0])
                    h = e;
                else 
                    for (var u = 0; u < e.length; u++)
                        h = l.multiply(h, p(e[u]));
            else 
                e instanceof Object && (h = p(e));
            var c = a.call(this), f = "[" + h.join(",") + "]", d = n ? "[" + n.join(",") + "]": void 0, m = r ? "[" + r.join(",") + "]" : void 0;
            return i.push(o(c, "new FT(" + f + "," + s + "," + d + "," + m + ")")), c
        }
        function p(t) {
            for (var i in f)
                if (i in t) {
                    var e = t[i];
                    return e instanceof Array || (e = [e]), f[i].apply(this, e)
                }
        }
        var l = t("./Matrix"), f = {
            translate: l.translate,
            rotate: l.rotate,
            rotateX: l.rotateX,
            rotateY: l.rotateY,
            rotateZ: l.rotateZ,
            rotateAxis: l.rotateAxis,
            scale: l.scale,
            skew: l.skew,
            matrix3d: function() {
                return arguments
            }
        };
        e.exports = {
            compile: s
        }
    }), define("famous/Scene", ["require", "exports", "module", "./RenderNode", "./Modifier", "./SceneCompiler"], function(t, i, e) {
        function s(t) {
            this.id = {}, this.transforms = [], this.node = new o, this._def = void 0, t && this.load(t)
        }
        var o = t("./RenderNode"), n = t("./Modifier"), r = t("./SceneCompiler"), a = o.prototype.link, h = o.prototype.add;
        s.prototype.create = function() {
            return new s(this._def)
        }, s.prototype.load = function(t) {
            t instanceof s ? t = t._def : t instanceof Function || (t = r.compile(t)), this.node = t(n, o, a, h, this.id, this.transforms), this._def = t
        }, s.prototype.getTransforms = function() {
            return this.transforms
        }, s.prototype.add = function() {
            return this.node.add.apply(this.node, arguments)
        }, s.prototype.mod = function() {
            return this.node.mod.apply(this.node, arguments)
        }, s.prototype.link = function() {
            return this.node.link.apply(this.node, arguments)
        }, s.prototype.render = function() {
            return this.node.render.apply(this.node, arguments)
        }, e.exports = s
    }), define("famous/Timer", ["require", "exports", "module", "famous/Engine"], function(t, i, e) {
        function s(t) {
            return u.on(c, t), t
        }
        function o(t, i) {
            var e = p(), o = function() {
                var s = p();
                s - e >= i && (t.apply(this, arguments), u.unbind(c, o))
            };
            return s(o)
        }
        function n(t, i) {
            var e = p(), o = function() {
                var s = p();
                s - e >= i && (t.apply(this, arguments), e = p())
            };
            return s(o)
        }
        function r(t, i) {
            if (void 0 !== i) {
                var e = function() {
                    i--, 0 >= i && (t.apply(this, arguments), h(e))
                };
                return s(e)
            }
        }
        function a(t, i) {
            i = i || 1;
            var e = i, o = function() {
                i--, 0 >= i && (t.apply(this, arguments), i = e)
            };
            return s(o)
        }
        function h(t) {
            u.unbind(c, t)
        }
        var u = t("famous/Engine"), c = "prerender", p = window.performance ? function() {
            return performance.now()
        }
        : function() {
            return Date.now()
        };
        e.exports = {
            setTimeout: o,
            setInterval: n,
            after: r,
            every: a,
            clear: h
        }
    }), define("famous/VideoSurface", ["require", "exports", "module", "./Surface"], function(t, i, e) {
        function s(t) {
            this.autoplay = t.autoplay ||!1, this.videoUrl = void 0, o.apply(this, arguments)
        }
        var o = t("./Surface");
        s.prototype = Object.create(o.prototype), s.prototype.elementType = "video", s.prototype.elementClass = "surface", s.prototype.setContent = function(t) {
            this.videoUrl = t, this.contentDirty=!0
        }, s.prototype.deploy = function(t) {
            t.src = this.videoUrl, t.autoplay = this.autoplay
        }, s.prototype.recall = function(t) {
            t.src = ""
        }, e.exports = s
    }), define("famous/View", ["require", "exports", "module", "./RenderNode", "./EventHandler", "./OptionsManager"], function(t, i, e) {
        function s(t) {
            this.node = new o, this.eventInput = new n, this.eventOutput = new n, n.setInputHandler(this, this.eventInput), n.setOutputHandler(this, this.eventOutput), this.options = Object.create(this.constructor.DEFAULT_OPTIONS || s.DEFAULT_OPTIONS), this.optionsManager = new r(this.options), t && this.setOptions(t)
        }
        var o = t("./RenderNode"), n = t("./EventHandler"), r = t("./OptionsManager");
        s.DEFAULT_OPTIONS = {}, s.prototype.getOptions = function() {
            return this.optionsManager.value()
        }, s.prototype.setOptions = function(t) {
            this.optionsManager.patch(t)
        }, s.prototype._add = function() {
            return this.node.add.apply(this.node, arguments)
        }, s.prototype._link = function() {
            return this.node.link.apply(this.node, arguments)
        }, s.prototype.render = function() {
            return this.node.render.apply(this.node, arguments)
        }, s.prototype.getSize = function() {
            var t = this.node.get();
            return t.getSize ? t.getSize.apply(t, arguments) : this.options.size
        }, e.exports = s
    }), define("famous/ViewSequence", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i, e) {
            this.array = t || [], this.index = i || 0, this.loop = e ||!1, this._prev = void 0, this._prevIndex = void 0, this._next = void 0, this._nextIndex = void 0
        }
        function o(t) {
            for (var i = this.index, e = this; e && i < this.array.length;)
                e.index += t, void 0 !== e._prevIndex && (e._prevIndex += t), void 0 !== e._nextIndex && (e._nextIndex += t), e = e._next
        }
        s.prototype._createPrevious = function() {
            var t = new this.constructor(this.array, this._prevIndex, this.loop);
            return t._next = this, t._nextIndex = this.index, t
        }, s.prototype._createNext = function() {
            var t = new this.constructor(this.array, this._nextIndex, this.loop);
            return t._prev = this, t._prevIndex = this.index, t
        }, s.prototype.getPrevious = function() {
            var t = this.index-1;
            if (0 == this.index) {
                if (!this.loop)
                    return void 0;
                t = this.array.length-1
            }
            return this._prev && this._prevIndex == t || (this._prevIndex = t, this._prev = this._createPrevious()), this._prev
        }, s.prototype.getNext = function() {
            var t = this.index + 1;
            if (t >= this.array.length) {
                if (!this.loop)
                    return void 0;
                t = 0
            }
            return this._next && this._nextIndex == t || (this._nextIndex = t, this._next = this._createNext()), this._next
        }, s.prototype.toString = function() {
            return this.index
        }, s.prototype.unshift = function() {
            if (this._prev && 0 !== this.index)
                this._prev.unshift.apply(this._prev, arguments);
            else {
                var t = arguments.length;
                this.array.unshift.apply(this.array, arguments), o.call(this, t)
            }
        }, s.prototype.push = function() {
            this.array.push.apply(this.array, arguments)
        }, s.prototype.splice = function(t, i) {
            if (this._prev && this.index !== t)
                this._prev.splice.apply(this._prev, arguments);
            else {
                var e = this.index >= t ? arguments.length-2 - i: 0;
                this.array.splice.apply(this.array, arguments), e && o.call(this, e)
            }
        }, s.prototype.get = function() {
            return this.array[this.index]
        }, s.prototype.getSize = function() {
            var t = this.get();
            if (t)
                return t.getSize ? t.getSize.apply(t, arguments) : void 0
        }, s.prototype.render = function() {
            var t = this.get();
            if (t)
                return t.render.apply(t, arguments)
        }, e.exports = s
    }), define("famous/WebGLSurface", ["require", "exports", "module", "./Surface"], function(t, i, e) {
        function s(t, i) {
            this.options = i, this._canvas = document.createElement("canvas"), o.call(this, t), this.setContent(this._canvas), this.setSize(t)
        }
        var o = t("./Surface");
        s.prototype = Object.create(o.prototype), s.prototype.getContext = function() {
            return this._canvas.getContext("experimental-webgl", this.options)
        }, s.prototype.setSize = function(t) {
            o.prototype.setSize.apply(this, arguments), this._canvas.style.width = t[0] + "px", this._canvas.style.height = t[1] + "px";
            var i = window.devicePixelRatio ? window.devicePixelRatio: 1;
            this._canvas.width = t[0] * i, this._canvas.height = t[1] * i
        }, e.exports = s
    }), define("famous-modifiers/Camera", ["require", "exports", "module", "famous/Transitionable", "famous/Matrix", "famous/Utility"], function(t, i, e) {
        function s(t) {
            this._renderMatrix = r.identity, this._scaleState = new n([1, 1, 1]), this._skewState = new n([0, 0, 0]), this._rotateState = new n([0, 0, 0]), this._translateState = new n([0, 0, 0]), this._dirty=!1, t && this.lookAt(t)
        }
        function o() {
            var t = r.scale.apply(this, this._scaleState.get()), i = r.skew.apply(this, this._skewState.get()), e = r.rotate.apply(this, this._rotateState.get()), s = r.move(r.multiply(t, i, e), this._translateState.get());
            return r.inverse(s)
        }
        var n = t("famous/Transitionable"), r = t("famous/Matrix"), a = t("famous/Utility");
        s.prototype.halt = function() {
            this._scaleState.halt(), this._skewState.halt(), this._rotateState.halt(), this._translateState.halt()
        }, s.prototype.getScale = function() {
            return this._scaleState.get()
        }, s.prototype.setScale = function(t, i, e) {
            return this._dirty=!0, this._scaleState.set(t, i, e)
        }, s.prototype.getSkew = function() {
            return this._skewState.get()
        }, s.prototype.setSkew = function(t, i, e) {
            return this._dirty=!0, this._skewState.set(t, i, e)
        }, s.prototype.getRotation = function() {
            return this._rotateState.get()
        }, s.prototype.setRotation = function(t, i, e) {
            return this._dirty=!0, this._rotateState.set(t, i, e)
        }, s.prototype.getSpin = s.prototype.getRotation, s.prototype.setSpin = s.prototype.setRotation, s.prototype.getPos = function() {
            return this._translateState.get()
        }, s.prototype.setPos = function(t, i, e) {
            return this._dirty=!0, this._translateState.set(t, i, e)
        }, s.prototype.lookAt = function(t, i, e) {
            var s = void 0;
            e && (s = a.after(4, e)), this.halt();
            var o = r.interpret(t);
            this.setScale(o.scale, i, s), this.setSkew(o.skew, i, s), this.setRotation(o.rotate, i, s), this.setPos(o.translate, i, s)
        }, s.prototype.render = function(t) {
            return this._dirty|=this._scaleState.isActive() || this._skewState.isActive() || this._rotateState.isActive() || this._translateState.isActive(), this._dirty && (this._renderMatrix = o.call(this), this._dirty=!1), {
                transform: this._renderMatrix, group: !0, target: t
            }
        }, e.exports = s
    }), define("famous-sync/MouseSync", ["require", "exports", "module", "famous/EventHandler"], function(t, i, e) {
        function s(t, i) {
            this.targetGet = t, this.options = {
                direction: void 0,
                rails: !1,
                scale: 1,
                stallTime: 50,
                propogate: !0
            }, i ? this.setOptions(i) : this.setOptions(this.options), this.input = new h, this.output = new h, h.setInputHandler(this, this.input), h.setOutputHandler(this, this.output), this._prevCoord = void 0, this._prevTime = void 0, this._prevVel = void 0, this.input.on("mousedown", o.bind(this)), this.input.on("mousemove", n.bind(this)), this.input.on("mouseup", r.bind(this)), this.options.propogate ? this.input.on("mouseleave", a.bind(this)) : this.input.on("mouseleave", r.bind(this))
        }
        function o(t) {
            t.preventDefault(), this._prevCoord = [t.clientX, t.clientY], this._prevTime = Date.now(), this._prevVel = void 0 !== this.options.direction ? 0 : [0, 0], this.output.emit("start")
        }
        function n(t) {
            if (this._prevCoord) {
                var i = this._prevCoord, e = this._prevTime, o = [t.clientX, t.clientY], n = Date.now(), r = o[0] - i[0], a = o[1] - i[1];
                this.options.rails && (Math.abs(r) > Math.abs(a) ? a = 0 : r = 0);
                var h, u, c = Math.max(n - e, 8), p = r / c, l = a / c, f = this.targetGet(), d = this.options.scale;
                this.options.direction == s.DIRECTION_X ? (h = f + d * r, u = d * p) : this.options.direction == s.DIRECTION_Y ? (h = f + d * a, u = d * l) : (h = [f[0] + d * r, f[1] + d * a], u = [d * p, d * l]), this.output.emit("update", {
                    p: h,
                    v: u
                }), this._prevCoord = o, this._prevTime = n, this._prevVel = u
            }
        }
        function r() {
            if (this._prevCoord) {
                var t = this._prevTime, i = Date.now();
                i - t > this.options.stallTime && (this._prevVel = void 0 == this.options.direction ? [0, 0] : 0);
                var e = this.targetGet();
                this.output.emit("end", {
                    p: e,
                    v: this._prevVel
                }), this._prevCoord = void 0, this._prevTime = void 0, this._prevVel = void 0
            }
        }
        function a() {
            if (this._prevCoord) {
                var t = function(t) {
                    n.call(this, t)
                }.bind(this), i = function(e) {
                    r.call(this, e), document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", i)
                }.bind(this);
                document.addEventListener("mousemove", t), document.addEventListener("mouseup", i)
            }
        }
        var h = t("famous/EventHandler");
        s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.scale && (this.options.scale = t.scale), void 0 !== t.stallTime && (this.options.stallTime = t.stallTime), void 0 !== t.propogate && (this.options.propogate = t.propogate)
        }, e.exports = s
    }), define("famous-sync/TouchTracker", ["require", "exports", "module", "famous/EventHandler"], function(t, i, e) {
        function s(t) {
            this.selective = t, this.touchHistory = {}, this.eventHandler = new u(!0)
        }
        function o(t, i, e, s) {
            var o = {};
            for (var n in t)
                o[n] = t[n];
            return {
                touch: o,
                origin: i,
                timestamp: + Date.now(),
                count: s,
                history: e
            }
        }
        function n(t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i], s = o(e, t.origin, void 0, t.touches.length);
                this.eventHandler.emit("trackstart", s), this.selective || this.touchHistory[e.identifier] || this.track(s)
            }
        }
        function r(t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i], s = this.touchHistory[e.identifier];
                if (s) {
                    var n = o(e, t.origin, s, t.touches.length);
                    this.touchHistory[e.identifier].push(n), this.eventHandler.emit("trackmove", n)
                }
            }
        }
        function a(t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i], s = this.touchHistory[e.identifier];
                if (s) {
                    var n = o(e, t.origin, s, t.touches.length);
                    this.eventHandler.emit("trackend", n), delete this.touchHistory[e.identifier]
                }
            }
        }
        function h() {
            for (var t in this.touchHistory) {
                var i = this.touchHistory[t];
                this.eventHandler.emit("trackend", {
                    touch: i[i.length-1].touch,
                    timestamp: + Date.now(),
                    count: 0,
                    history: i
                }), delete this.touchHistory[t]
            }
        }
        var u = t("famous/EventHandler");
        s.prototype.track = function(t) {
            this.touchHistory[t.touch.identifier] = [t]
        }, s.prototype.emit = function(t, i) {
            return "touchstart" == t ? n.call(this, i) : "touchmove" == t ? r.call(this, i) : "touchend" == t ? a.call(this, i) : "touchcancel" == t ? a.call(this, i) : "unpipe" == t ? h.call(this) : void 0
        }, s.prototype.on = function(t, i) {
            return this.eventHandler.on(t, i)
        }, s.prototype.unbind = function(t, i) {
            return this.eventHandler.unbind(t, i)
        }, s.prototype.pipe = function(t) {
            return this.eventHandler.pipe(t)
        }, s.prototype.unpipe = function(t) {
            return this.eventHandler.unpipe(t)
        }, e.exports = s
    }), define("famous-sync/TouchSync", ["require", "exports", "module", "./TouchTracker", "famous/EventHandler"], function(t, i, e) {
        function s(t, i) {
            this.targetGet = t, this.output = new h, this.touchTracker = new a, this.options = {
                direction: void 0,
                rails: !1,
                scale: 1
            }, i ? this.setOptions(i) : this.setOptions(this.options), h.setOutputHandler(this, this.output), h.setInputHandler(this, this.touchTracker), this.touchTracker.on("trackstart", o.bind(this)), this.touchTracker.on("trackmove", n.bind(this)), this.touchTracker.on("trackend", r.bind(this))
        }
        function o(t) {
            this.output.emit("start", {
                count: t.count,
                touch: t.touch.identifier
            })
        }
        function n(t) {
            var i = t.history, e = i[i.length-2].timestamp, o = i[i.length-1].timestamp, n = i[i.length-2].touch, r = i[i.length-1].touch, a = r.pageX - n.pageX, h = r.pageY - n.pageY;
            this.options.rails && (Math.abs(a) > Math.abs(h) ? h = 0 : a = 0);
            var u = Math.max(o - e, 8), c = a / u, p = h / u;
            if (i.length > 2)
                var l = i[i.length-3].touch, f = (r.pageX-2 * n.pageX + l.pageX) / (u * u), d = (r.pageY-2 * n.pageY + l.pageY) / (u * u);
            else 
                var f = 0, d = 0;
            var m, v, y, g = this.targetGet(), S = this.options.scale;
            this.options.direction == s.DIRECTION_X ? (m = g + S * a, v = S * c, y = S * p) : this.options.direction == s.DIRECTION_Y ? (m = g + S * h, v = S * p, y = S * d) : (m = [g[0] + S * a, g[1] + S * h], v = [S * c, S * p], y = [S * f, S * d]), this.output.emit("update", {
                p: m,
                v: v,
                a: y,
                touch: t.touch.identifier
            })
        }
        function r(t) {
            var i = void 0 !== this.options.direction ? 0 : [0, 0], e = t.history, o = t.count, n = this.targetGet();
            if (e.length > 1) {
                var r = e[e.length-2].timestamp, a = e[e.length-1].timestamp, h = e[e.length-2].touch, u = e[e.length-1].touch, c = u.pageX - h.pageX, p = u.pageY - h.pageY;
                this.options.rails && (Math.abs(c) > Math.abs(p) ? p = 0 : c = 0);
                var i, l = Math.max(a - r, 1), f = c / l, d = p / l, m = this.options.scale;
                i = this.options.direction == s.DIRECTION_X ? m * f : this.options.direction == s.DIRECTION_Y ? m * d : [m * f, m * d]
            }
            this.output.emit("end", {
                p: n,
                v: i,
                count: o,
                touch: t.touch.identifier
            })
        }
        var a = t("./TouchTracker"), h = t("famous/EventHandler");
        s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.prototype.setOptions = function(t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.scale && (this.options.scale = t.scale)
        }, s.prototype.getOptions = function() {
            return this.options
        }, e.exports = s
    }), define("famous-sync/ScrollSync", ["require", "exports", "module", "famous/EventHandler", "famous/Engine"], function(t, i, e) {
        function s(t, i) {
            this.targetGet = t, this.options = {
                direction: void 0,
                minimumEndSpeed: 1 / 0,
                rails: !1,
                scale: 1,
                stallTime: 50
            }, i ? this.setOptions(i) : this.setOptions(this.options), this.input = new r, this.output = new r, r.setInputHandler(this, this.input), r.setOutputHandler(this, this.output), this._prevTime = void 0, this._prevVel = void 0, this._lastFrame = void 0, this.input.on("mousewheel", n.bind(this)), this.input.on("wheel", n.bind(this)), this.inProgress=!1, this._loopBound=!1
        }
        function o() {
            var t = Date.now();
            if (this.inProgress && t - this._prevTime > this.options.stallTime) {
                var i = this.targetGet();
                this.inProgress=!1;
                var e = 0;
                Math.abs(this._prevVel) >= this.options.minimumEndSpeed && (e = this._prevVel), this.output.emit("end", {
                    p: i,
                    v: e,
                    slip: !0
                })
            }
        }
        function n(t) {
            t.preventDefault(), this.inProgress || (this.inProgress=!0, this.output.emit("start", {
                slip : !0
            }), this._loopBound || (a.on("prerender", o.bind(this)), this._loopBound=!0));
            var i = this._prevTime, e = void 0 !== t.wheelDeltaX ? t.wheelDeltaX : - t.deltaX, n = void 0 !== t.wheelDeltaY ? t.wheelDeltaY : - t.deltaY, r = Date.now();
            this.options.rails && (Math.abs(e) > Math.abs(n) ? n = 0 : e = 0);
            var h, u, c = Math.max(r - i, 8), p = e / c, l = n / c, f = this.targetGet(), d = this.options.scale;
            this.options.direction == s.DIRECTION_X ? (h = f + d * e, u = d * p) : this.options.direction == s.DIRECTION_Y ? (h = f + d * n, u = d * l) : (h = [f[0] + d * e, f[1] + d * n], u = [d * p, d * l]), this.output.emit("update", {
                p: h,
                v: u,
                slip: !0
            }), this._prevTime = r, this._prevVel = u
        }
        var r = t("famous/EventHandler"), a = t("famous/Engine");
        s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.minimumEndSpeed && (this.options.minimumEndSpeed = t.minimumEndSpeed), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.scale && (this.options.scale = t.scale), void 0 !== t.stallTime && (this.options.stallTime = t.stallTime)
        }, e.exports = s
    }), define("famous-sync/GenericSync", ["require", "exports", "module", "famous/EventHandler", "./TouchSync", "./ScrollSync"], function(t, i, e) {
        function s(t, i) {
            this.targetGet = t, this.eventInput = new n, n.setInputHandler(this, this.eventInput), this.eventOutput = new n, n.setOutputHandler(this, this.eventOutput), this._handlers = void 0, this.options = {
                syncClasses: h
            }, this._handlerOptions = this.options, i && this.setOptions(i), this._handlers || o.call(this)
        }
        function o() {
            if (this._handlers)
                for (var t = 0; t < this._handlers.length; t++)
                    this.eventInput.unpipe(this._handlers[t]), this._handlers[t].unpipe(this.eventOutput);
            this._handlers = [];
            for (var t = 0; t < this.options.syncClasses.length; t++) {
                var i = this.options.syncClasses[t];
                this._handlers[t] = new i(this.targetGet, this._handlerOptions), this.eventInput.pipe(this._handlers[t]), this._handlers[t].pipe(this.eventOutput)
            }
        }
        var n = t("famous/EventHandler"), r = t("./TouchSync"), a = t("./ScrollSync"), h = [r, a];
        s.register = function(t) {
            h.indexOf(t) < 0 && h.push(t)
        }, s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.DIRECTION_Z = 2, s.prototype.setOptions = function(t) {
            if (this._handlerOptions = t, t.syncClasses && (this.options.syncClasses = t.syncClasses, o.call(this)
                ), this._handlers)for (var i = 0; i < this._handlers.length; i++)
                this._handlers[i].setOptions(this._handlerOptions)
        }, e.exports = s
    }), define("famous-modifiers/Draggable", ["require", "exports", "module", "famous/Matrix", "famous-sync/MouseSync", "famous-sync/TouchSync", "famous-sync/GenericSync", "famous/Transitionable", "famous/EventHandler"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), t && this.setOptions(t), this._positionState = new f([0, 0]), this._cursorPos = [0, 0], this._active=!0, this.sync = new l(function() {
                return this._cursorPos
            }.bind(this), {
                scale: this.options.scale, syncClasses: [c, p]
            }), this.eventOutput = new d, d.setInputHandler(this, this.sync), d.setOutputHandler(this, this.eventOutput), a.call(this)
        }
        function o() {
            var t = this.getPosition();
            this._cursorPos = t.slice(), this.eventOutput.emit("dragstart", {
                p: t
            })
        }
        function n(t) {
            this._active && (this.setPosition(h.call(this, t.p), this.options.transition), this._cursorPos = t.p), this.eventOutput.emit("dragmove", {
                p: this.getPosition()
            })
        }
        function r() {
            this.eventOutput.emit("dragend", {
                p: this.getPosition()
            })
        }
        function a() {
            this.sync.on("start", o.bind(this)), this.sync.on("update", n.bind(this)), this.sync.on("end", r.bind(this))
        }
        function h(t) {
            var i = this.options, e = i.projection, s = i.maxX, o = i.maxY, n = i.snapX, r = i.snapY, a = e & m.x ? t[0]: 0, h = e & m.y ? t[1]: 0;
            return n > 0 && (a -= a%n), r > 0 && (h -= h%r), a = Math.max(Math.min(a, s), - s), h = Math.max(Math.min(h, o), - o), [a, h]
        }
        var u = t("famous/Matrix"), c = t("famous-sync/MouseSync"), p = t("famous-sync/TouchSync"), l = t("famous-sync/GenericSync"), f = t("famous/Transitionable"), d = t("famous/EventHandler"), m = {
            x: 1,
            y: 2
        };
        s.DEFAULT_OPTIONS = {
            projection: m.x | m.y,
            scale: 1,
            maxX: 1 / 0,
            maxY: 1 / 0,
            snapX: 0,
            snapY: 0,
            transition: {
                duration: 0
            }
        }, s.prototype.setOptions = function(t) {
            var i = this.options;
            if (void 0 !== t.projection) {
                var e = t.projection;
                this.options.projection = 0, ["x", "y"].forEach(function(t) {
                    -1 != e.indexOf(t) && (i.projection|=m[t])
                })
            }
            void 0 !== t.scale && (i.scale = t.scale), void 0 !== t.maxX && (i.maxX = t.maxX), void 0 !== t.maxY && (i.maxY = t.maxY), void 0 !== t.snapX && (i.snapX = t.snapX), void 0 !== t.snapY && (i.snapY = t.snapY), void 0 !== t.transition && (i.transition = t.transition)
        }, s.prototype.getPosition = function() {
            return this._positionState.get()
        }, s.prototype.setPosition = function(t, i, e) {
            this._positionState.isActive() && this._positionState.halt(), this._positionState.set(t, i, e)
        }, s.prototype.activate = function() {
            this._active=!0
        }, s.prototype.deactivate = function() {
            this._active=!1
        }, s.prototype.toggle = function() {
            this._active=!this._active
        }, s.prototype.render = function(t) {
            var i = this.getPosition();
            return {
                transform: u.translate(i[0], i[1]),
                target: t
            }
        }, e.exports = s
    }), define("famous-modifiers/Swappable", ["require", "exports", "module", "famous/RenderNode", "famous/Matrix", "famous/Modifier"], function(t, i, e) {
        function s(t) {
            this.options = {
                initTransform: h.identity,
                initOpacity: 0,
                finalTransform: h.identity,
                finalOpacity: 0,
                inTransition: {
                    duration: 500,
                    curve: "easeInOut"
                },
                outTransition: {
                    duration: 500,
                    curve: "easeInOut"
                },
                async: !1
            }, this.nodes = {}, this.transforms = [], this.currIndex =- 1, this.prevIndex =- 1, this.setOptions(t)
        }
        function o(t, i, e, s, o, n, r) {
            if (t in this.nodes) {
                var a = this.nodes[t].get();
                a.isMoving() || (i && a.setTransform(i), void 0 !== e && a.setOpacity(e)), a.setTransform(s, n), a.setOpacity(o, n, r)
            }
        }
        function n(t, i) {
            o.call(this, t, this.options.initTransform, this.options.initOpacity, h.identity, 1, this.options.inTransition, i)
        }
        function r(t, i) {
            o.call(this, t, void 0, void 0, this.options.finalTransform, this.options.finalOpacity, this.options.outTransition, i)
        }
        var a = t("famous/RenderNode"), h = t("famous/Matrix"), u = t("famous/Modifier");
        s.prototype.item = function(t) {
            var i = new a(new u(this.options.initTransform, this.options.initOpacity), !0);
            return this.nodes[t] = i, i
        }, s.prototype.select = function(t, i) {
            t != this.currIndex && (this.options.async ? r.call(this, this.currIndex, function() {
                n.call(this, this.currIndex, i)
            }.bind(this)) : (r.call(this, this.currIndex), n.call(this, t, i)), this.currIndex = t)
        }, s.prototype.setOptions = function(t) {
            for (var i in t)
                this.options[i] = t[i]
        }, s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.render = function() {
            var t = [];
            for (var i in this.nodes)
                t.push(this.nodes[i].render());
            return t
        }, e.exports = s
    }), define("famous-physics/math/Vector", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i, e) {
            return 1 === arguments.length ? this.set(t) : (this.x = t || 0, this.y = i || 0, this.z = e || 0), this
        }
        var o = new s(0, 0, 0);
        s.prototype.add = function(t, i) {
            return i = i || o, i.setXYZ(this.x + (t.x || 0), this.y + (t.y || 0), this.z + (t.z || 0))
        }, s.prototype.sub = function(t, i) {
            return i = i || o, i.setXYZ(this.x - t.x, this.y - t.y, this.z - t.z)
        }, s.prototype.mult = function(t, i) {
            return i = i || o, i.setXYZ(t * this.x, t * this.y, t * this.z)
        }, s.prototype.div = function(t, i) {
            return this.mult(1 / t, i)
        }, s.prototype.cross = function(t, i) {
            return i = i || o, i.setXYZ(this.y * t.z - this.z * t.y, this.z * t.x - this.x * t.z, this.x * t.y - this.y * t.x)
        }, s.prototype.equals = function(t) {
            return t.x == this.x && t.y == this.y && t.z == this.z
        }, s.prototype.rotateX = function(t, i) {
            i = i || o;
            var e = this.x, s = this.y, n = this.z, r = Math.cos(t), a = Math.sin(t);
            return i.setXYZ(e, - n * a + s * r, n * r - s * a)
        }, s.prototype.rotateY = function(t, i) {
            i = i || o;
            var e = this.x, s = this.y, n = this.z, r = Math.cos(t), a = Math.sin(t);
            return i.setXYZ( - n * a + e * r, s, n * r + e * a)
        }, s.prototype.rotateZ = function(t, i) {
            i = i || o;
            var e = this.x, s = this.y, n = this.z, r = Math.cos(t), a = Math.sin(t);
            return i.setXYZ( - s * a + e * r, s * r + e * a, n)
        }, s.prototype.dot = function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }, s.prototype.normSquared = function() {
            return this.dot(this)
        }, s.prototype.norm = function() {
            return Math.sqrt(this.normSquared())
        }, s.prototype.normalize = function(t, i) {
            t = void 0 !== t ? t : 1, i = i || o;
            var e = 1e-7, s = this.norm();
            return Math.abs(s) > e ? this.mult(t / s, i) : i.setXYZ(t, 0, 0)
        }, s.prototype.clone = function() {
            return new s(this)
        }, s.prototype.isZero = function() {
            return !(this.x || this.y || this.z)
        }, s.prototype.set = function(t) {
            return t instanceof Array ? (this.x = t[0], this.y = t[1], this.z = t[2] || 0) : (this.x = t.x, this.y = t.y, this.z = t.z || 0), this !== o && o.clear(), this
        }, s.prototype.put = function(t) {
            t.set(o)
        }, s.prototype.setXYZ = function(t, i, e) {
            return o.clear(), this.x = t, this.y = i, this.z = e, this
        }, s.prototype.clear = function() {
            this.x = 0, this.y = 0, this.z = 0
        }, s.prototype.cap = function(t, i) {
            if (i = i || o, 1 / 0 === t)
                return i;
            var e = this.norm();
            return e > t && this.normalize().mult(t, i), i
        }, s.prototype.project = function(t, i) {
            return i = i || o, t.mult(this.dot(t), i)
        }, s.prototype.reflectAcross = function(t, i) {
            return i = i || o, t.normalize(), this.sub(this.project(t).mult(2), i)
        }, s.prototype.toArray = function() {
            return [this.x, this.y, this.z]
        }, s.prototype.get = function() {
            return this.toArray()
        }, e.exports = s
    }), define("famous-physics/bodies/Particle", ["require", "exports", "module", "famous/RenderNode", "famous-physics/math/Vector", "famous/Matrix"], function(t, i, e) {
        function s(t) {
            t = t || {}, this.p = t.p ? new n(t.p) : new n(0, 0, 0), this.v = t.v ? new n(t.v) : new n(0, 0, 0), this.f = t.f ? new n(t.f) : new n(0, 0, 0), this.m = void 0 !== t.m ? t.m : 1, this.restitution = void 0 !== t.restitution ? t.restitution : .5, this.dissipation = void 0 !== t.dissipation ? t.dissipation : 0, this.axis = void 0 !== t.axis ? t.axis : void 0, this.setImmunity(t.immunity || s.IMMUNITIES.NONE), this.mInv = 1 / this.m, this.size = [0, 0, 0], this.node = void 0, this.spec = {
                size: [0, 0],
                target: {
                    origin: [.5, .5],
                    transform: void 0,
                    target: void 0
                }
            }
        }
        var o = t("famous/RenderNode"), n = t("famous-physics/math/Vector"), r = t("famous/Matrix");
        s.AXIS = {
            X: 1,
            Y: 2,
            Z: 4
        }, s.IMMUNITIES = {
            NONE: 0,
            POSITION: 1,
            VELOCITY: 2,
            ROTATION: 4,
            AGENTS: 8,
            UPDATE: 16
        };
        for (var a in s.IMMUNITIES)
            s.IMMUNITIES.ALL|=s.IMMUNITIES[a];
        s.prototype.setPos = function(t) {
            this.p.set(t)
        }, s.prototype.getPos = function() {
            return this.p.get()
        }, s.prototype.setVel = function(t) {
            this.hasImmunity(s.IMMUNITIES.VELOCITY) || this.v.set(t)
        }, s.prototype.getVel = function() {
            return this.v.get()
        }, s.prototype.setMass = function(t) {
            this.m = t, this.mInv = 1 / t
        }, s.prototype.getMass = function() {
            return this.m
        }, s.prototype.addImmunity = function(t) {
            "string" == typeof t && (t = s.IMMUNITIES[t.toUpperCase()]), this.immunity|=t
        }, s.prototype.removeImmunity = function(t) {
            "string" == typeof t && (t = s.IMMUNITIES[t.toUpperCase()]), this.immunity&=~t
        }, s.prototype.setImmunity = function(t) {
            "string" == typeof t && (t = s.IMMUNITIES[t.toUpperCase()]), this.immunity = t
        }, s.prototype.hasImmunity = function(t) {
            return "string" == typeof t && (t = s.IMMUNITIES[t.toUpperCase()]), this.getImmunity() & t
        }, s.prototype.getImmunity = function() {
            return this.immunity
        }, s.prototype.reset = function(t, i) {
            t = t || [0, 0, 0], i = i || [0, 0, 0], this.setPos(t), this.setVel(i)
        }, s.prototype.applyForce = function(t) {
            this.hasImmunity(s.IMMUNITIES.AGENTS) || this.f.add(t, this.f)
        }, s.prototype.applyImpulse = function(t) {
            this.hasImmunity(s.IMMUNITIES.AGENTS) || this.setVel(this.v.add(t.mult(this.mInv)))
        }, s.prototype.getEnergy = function() {
            return .5 * this.m * this.v.normSquared()
        }, s.prototype.getTransform = function() {
            var t = this.p, i = this.axis;
            return void 0 !== i && (i&~s.AXIS.X && (t.x = 0), i&~s.AXIS.Y && (t.y = 0), i&~s.AXIS.Z && (t.z = 0)), r.translate(t.x, t.y, t.z)
        }, s.prototype.link = function(t) {
            return this.node || (this.node = new o), this.node.link(t)
        }, s.prototype.add = function(t) {
            return this.node || (this.node = new o), this.node.add(t)
        }, s.prototype.replace = function(t) {
            this.node.object = t
        }, s.prototype.render = function(t) {
            return t = void 0 !== t ? t : this.node.render(), this.spec.target.transform = this.getTransform(), this.spec.target.target = t, this.spec
        }, e.exports = s
    }), define("famous-physics/math/Quaternion", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i, e, s) {
            return 1 == arguments.length ? this.set(t) : (this.w = void 0 !== t ? t : 1, this.x = i || 0, this.y = e || 0, this.z = s || 0), this
        }
        var o = new s(1, 0, 0, 0);
        s.prototype.add = function(t, i) {
            return i = i || o, i.setWXYZ(this.w + t.w, this.x + t.x, this.y + t.y, this.z + t.z)
        }, s.prototype.sub = function(t, i) {
            return i = i || o, i.setWXYZ(this.w - t.w, this.x - t.x, this.y - t.y, this.z - t.z)
        }, s.prototype.scalarDivide = function(t, i) {
            return i = i || o, this.scalarMult(1 / t, i)
        }, s.prototype.scalarMult = function(t, i) {
            return i = i || o, i.setWXYZ(this.w * t, this.x * t, this.y * t, this.z * t)
        }, s.prototype.multiply = function(t, i) {
            i = i || o;
            var e = this.x, s = this.y, n = this.z, r = this.w, a = t.x, h = t.y, u = t.z, c = t.w;
            return i.setWXYZ(r * c - e * a - s * h - n * u, r * a + e * c + s * u - n * h, r * h - e * u + s * c + n * a, r * u + e * h - s * a + n * c)
        }, s.prototype.inverse = function(t) {
            return t = t || o, this.conj().scalarDivide(this.normSquared(), t)
        }, s.prototype.negate = function(t) {
            return t = t || o, this.scalarMult(-1, t)
        }, s.prototype.conj = function(t) {
            return t = t || o, t.setWXYZ(this.w, - this.x, - this.y, - this.z)
        }, s.prototype.normalize = function(t) {
            t = t || o;
            var i = this.norm();
            return Math.abs(i) < 1e-7 ? t.setWXYZ(1, 0, 0, 0) : this.scalarDivide(i, t)
        }, s.prototype.makeFromAngleAndAxis = function(t, i) {
            i.normalize(1, i);
            var e = .5 * t, s = Math.sin(e);
            return this.x = s * i.x, this.y = s * i.y, this.z = s * i.z, this.w = Math.cos(e), this
        }, s.prototype.getAngle = function() {
            return 2 * Math.acos(this.w)
        }, s.prototype.getAxis = function() {
            var t = this.w;
            if (t >= 1)
                return [0, 0, 0];
            var i = 1 / Math.sqrt(1 - t * t);
            return [i * this.x, i * this.y, this.z]
        }, s.prototype.setWXYZ = function(t, i, e, s) {
            return o.clear(), this.w = t, this.x = i, this.y = e, this.z = s, this
        }, s.prototype.set = function(t) {
            return t instanceof Array ? (this.w = t[0], this.x = t[1], this.y = t[2], this.z = t[3]) : (this.w = t.w, this.x = t.x, this.y = t.y, this.z = t.z), this !== o && o.clear(), this
        }, s.prototype.put = function(t) {
            t.set(o)
        }, s.prototype.clone = function() {
            return new s(this)
        }, s.prototype.clear = function() {
            return this.w = 1, this.x = 0, this.y = 0, this.z = 0, this
        }, s.prototype.isEqual = function(t) {
            return t.w == this.w && t.x == this.x && t.y == this.y && t.z == this.z
        }, s.prototype.dot = function(t) {
            return this.w * t.w + this.x * t.x + this.y * t.y + this.z * t.z
        }, s.prototype.normSquared = function() {
            return this.dot(this)
        }, s.prototype.norm = function() {
            return Math.sqrt(this.normSquared())
        }, s.prototype.isZero = function() {
            return !(this.x || this.y || this.z || 1 != this.w)
        }, s.prototype.zeroRotation = function() {
            return this.x = 0, this.y = 0, this.z = 0, this.w = 1, this
        }, s.prototype.getMatrix = function() {
            var t = 1 / this.norm(), i = this.x * t, e = this.y * t, s = this.z * t, o = this.w * t;
            return [1-2 * e * e-2 * s * s, -2 * i * e-2 * s * o, 2 * i * s-2 * e * o, 0, -2 * i * e + 2 * s * o, 1-2 * i * i-2 * s * s, -2 * e * s-2 * i * o, 0, 2 * i * s + 2 * e * o, -2 * e * s + 2 * i * o, 1-2 * i * i-2 * e * e, 0, 0, 0, 0, 1]
        };
        var n = 1e-5;
        s.prototype.slerp = function(t, i, e) {
            e = e || o;
            var s, r, a, h, u;
            return r = this.dot(t), 0 > r && (r*=-1), 1 - r > n ? (s = Math.acos(r), a = Math.sin(s), h = Math.sin((1 - i) * s) / a, u = Math.sin(i * s) / a) : (h = 1 - i, u = i), this.scalarMult(h / u).add(t).mult(u, e)
        }, e.exports = s
    }), define("famous-physics/bodies/Body", ["require", "exports", "module", "./Particle", "famous-physics/math/Vector", "famous-physics/math/Quaternion", "famous/Matrix"], function(t, i, e) {
        function s(t) {
            o.call(this, t), this.q = t.q ? new r(t.q) : new r, this.w = t.w ? new n(t.w) : new n, this.L = t.L ? new n(t.L) : new n, this.t = t.t ? new n(t.t) : new n, this.I = [1, 0, 0, 1, 0, 0, 1, 0, 0], this.Iinv = [1, 0, 0, 1, 0, 0, 1, 0, 0], this.w.w = 0, this.pWorld = new n
        }
        var o = t("./Particle"), n = t("famous-physics/math/Vector"), r = t("famous-physics/math/Quaternion"), a = t("famous/Matrix");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.IMMUNITIES = o.IMMUNITIES, s.prototype.updateAngularVelocity = function() {
            var t = this.Iinv, i = this.L, e = i.x, s = i.y, o = i.z, n = t[0], r = t[1], a = t[2];
            this.w.setXYZ(n[0] * e + n[1] * s + n[2] * o, r[0] * e + r[1] * s + r[2] * o, a[0] * e + a[1] * s + a[2] * o)
        }, s.prototype.toWorldCoordinates = function(t) {
            var i = this.q;
            return t.w = 0, this.pWorld.set(i.inverse().multiply(t).multiply(i))
        }, s.prototype.getEnergy = function() {
            var t = this.w, i = this.I, e = t.x, s = t.y, o = t.z, n = this.I[0], r = i[1], a = i[2];
            return .5 * (this.m * this.v.normSquared() + n[0] * e * e + n[1] * e * s + n[2] * e * o + r[0] * s * e + r[1] * s * s + r[2] * s * o + a[0] * o * e + a[1] * o * s + a[2] * o * o)
        }, s.prototype.reset = function(t, i, e, s) {
            this.setPos(t || [0, 0, 0]), this.setVel(i || [0, 0, 0]), this.w.clear(), this.setOrientation(e || [1, 0, 0, 0]), this.setAngularMomentum(s || [0, 0, 0])
        }, s.prototype.setOrientation = function(t) {
            this.q.set(t)
        }, s.prototype.setAngularMomentum = function(t) {
            this.L.set(t)
        }, s.prototype.applyForce = function(t, i) {
            this.hasImmunity(s.IMMUNITIES.AGENTS) || (this.f.add(t, this.f), void 0 !== i && this.applyTorque(i.cross(t)))
        }, s.prototype.applyTorque = function(t) {
            this.hasImmunity(s.IMMUNITIES.ROTATION) || this.t.add(t, this.t)
        }, s.prototype.getTransform = function() {
            return a.move(this.q.getMatrix(), this.p.get())
        }, e.exports = s
    }), define("famous-physics/bodies/Circle", ["require", "exports", "module", "./Body"], function(t, i, e) {
        function s(t) {
            o.call(this, t), t = t || {}, this.r = t.r || 0, this.size = [2 * this.r, 2 * this.r];
            var i = this.r, e = this.m;
            this.I = [[.25 * e * i * i, 0, 0], [0, .25 * e * i * i, 0], [0, 0, .5 * e * i * i]], this.Iinv = [[4 / (e * i * i), 0, 0], [0, 4 / (e * i * i), 0], [0, 0, 2 / (e * i * i)]]
        }
        var o = t("./Body");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, e.exports = s
    }), define("famous-physics/bodies/Rectangle", ["require", "exports", "module", "./Body"], function(t, i, e) {
        function s(t) {
            o.call(this, t), t = t || {}, this.size = t.size || [0, 0];
            var i = this.size[0], e = this.size[1];
            this.I = [[e * e / 12, 0, 0], [0, i * i / 12, 0], [0, 0, (i * i + e * e) / 12]], this.Iinv = [[12 / (e * e), 0, 0], [0, 12 / (i * i), 0], [0, 0, 12 / (i * i + e * e)]]
        }
        var o = t("./Body");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = s, e.exports = s
    }), define("famous-physics/constraints/Constraint", ["require", "exports", "module"], function(t, i, e) {
        function s() {}
        s.prototype.setOpts = function(t) {
            for (var i in t)
                this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function() {}, s.prototype.setupSlider = function(t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init && t.init(), t.on("change", function(t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }), define("famous-physics/math/vector", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i, e) {
            return 1 === arguments.length ? this.set(t) : (this.x = t || 0, this.y = i || 0, this.z = e || 0), this
        }
        var o = new s(0, 0, 0);
        s.prototype.add = function(t, i) {
            return i = i || o, i.setXYZ(this.x + (t.x || 0), this.y + (t.y || 0), this.z + (t.z || 0))
        }, s.prototype.sub = function(t, i) {
            return i = i || o, i.setXYZ(this.x - t.x, this.y - t.y, this.z - t.z)
        }, s.prototype.mult = function(t, i) {
            return i = i || o, i.setXYZ(t * this.x, t * this.y, t * this.z)
        }, s.prototype.div = function(t, i) {
            return this.mult(1 / t, i)
        }, s.prototype.cross = function(t, i) {
            return i = i || o, i.setXYZ(this.y * t.z - this.z * t.y, this.z * t.x - this.x * t.z, this.x * t.y - this.y * t.x)
        }, s.prototype.equals = function(t) {
            return t.x == this.x && t.y == this.y && t.z == this.z
        }, s.prototype.rotateX = function(t, i) {
            i = i || o;
            var e = this.x, s = this.y, n = this.z, r = Math.cos(t), a = Math.sin(t);
            return i.setXYZ(e, - n * a + s * r, n * r - s * a)
        }, s.prototype.rotateY = function(t, i) {
            i = i || o;
            var e = this.x, s = this.y, n = this.z, r = Math.cos(t), a = Math.sin(t);
            return i.setXYZ( - n * a + e * r, s, n * r + e * a)
        }, s.prototype.rotateZ = function(t, i) {
            i = i || o;
            var e = this.x, s = this.y, n = this.z, r = Math.cos(t), a = Math.sin(t);
            return i.setXYZ( - s * a + e * r, s * r + e * a, n)
        }, s.prototype.dot = function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }, s.prototype.normSquared = function() {
            return this.dot(this)
        }, s.prototype.norm = function() {
            return Math.sqrt(this.normSquared())
        }, s.prototype.normalize = function(t, i) {
            t = void 0 !== t ? t : 1, i = i || o;
            var e = 1e-7, s = this.norm();
            return Math.abs(s) > e ? this.mult(t / s, i) : i.setXYZ(t, 0, 0)
        }, s.prototype.clone = function() {
            return new s(this)
        }, s.prototype.isZero = function() {
            return !(this.x || this.y || this.z)
        }, s.prototype.set = function(t) {
            return t instanceof Array ? (this.x = t[0], this.y = t[1], this.z = t[2] || 0) : (this.x = t.x, this.y = t.y, this.z = t.z || 0), this !== o && o.clear(), this
        }, s.prototype.put = function(t) {
            t.set(o)
        }, s.prototype.setXYZ = function(t, i, e) {
            return o.clear(), this.x = t, this.y = i, this.z = e, this
        }, s.prototype.clear = function() {
            this.x = 0, this.y = 0, this.z = 0
        }, s.prototype.cap = function(t, i) {
            if (i = i || o, 1 / 0 === t)
                return i;
            var e = this.norm();
            return e > t && this.normalize().mult(t, i), i
        }, s.prototype.project = function(t, i) {
            return i = i || o, t.mult(this.dot(t), i)
        }, s.prototype.reflectAcross = function(t, i) {
            return i = i || o, t.normalize(), this.sub(this.project(t).mult(2), i)
        }, s.prototype.toArray = function() {
            return [this.x, this.y, this.z]
        }, s.prototype.get = function() {
            return this.toArray()
        }, e.exports = s
    }), define("famous-physics/constraints/Collision", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/vector", "famous/EventHandler"], function(t, i, e) {
        function s(t) {
            this.opts = {
                restitution: .5
            }, t && this.setOpts(t), this.eventOutput = new r, r.setOutputHandler(this, this.eventOutput), this.n = new n, this.vRel = new n, this.I = new n, this.disp = new n
        }
        var o = t("famous-physics/constraints/Constraint"), n = t("../math/vector"), r = t("famous/EventHandler");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
            for (var i in t)
                this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function(t, i) {
            if (void 0 !== i)
                for (var e = i.p, s = i.r, o = i.v, n = this.n, r = this.I, a = this.vRel, h = this.disp, u = this.opts.restitution, c = 0; c < t.length; c++) {
                    var p = t[c];
                    if (i != p) {
                        var l = p.p, f = p.r, d = i.mInv;
                        h.set(e.sub(l));
                        var m = h.norm(), v = s + f - m;
                        if (v > 0) {
                            n.set(h.normalize());
                            var y = {
                                target: p,
                                source: i,
                                overlap: v,
                                normal: n
                            };
                            this.eventHandler.emit("preCollision", y), this.eventHandler.emit("collision", y);
                            var g = p.v, S = p.mInv;
                            a.set(o.sub(g)), r.set(n.mult((1 + u) * a.dot(n) / (d + S))), o.sub(r.mult(d), o), e.add(n.mult(v / 2), e), g.add(r.mult(S), g), l.add(n.mult( - v / 2), l), this.eventHandler.emit("postCollision", y)
                        }
                    }
                }
            }, e.exports = s
    }), define("famous-physics/constraints/CollisionJacobian", ["require", "exports", "module", "famous-physics/constraints/Constraint", "famous-physics/math/vector", "famous/EventHandler"], function(t, i, e) {
        function s(t) {
            this.opts = {
                k: .5,
                restitution: .5
            }, t && this.setOpts(t), this.eventOutput = new r, r.setOutputHandler(this, this.eventOutput), this.n = new n, this.pDiff = new n, this.vDiff = new n, this.impulse1 = new n, this.impulse2 = new n, this.slop = 0
        }
        var o = t("famous-physics/constraints/Constraint"), n = t("famous-physics/math/vector"), r = t("famous/EventHandler");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
            for (var i in t)
                this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function(t, i, e) {
            if (void 0 !== i)
                for (var s = i.v, o = i.p, n = i.mInv, r = i.r, a = this.opts.k, h = this.n, u = this.pDiff, c = this.vDiff, p = this.impulse1, l = this.impulse2, f = i.restitution, d = 0; d < t.length; d++) {
                    var m = t[d];
                    if (m != i) {
                        var v = m.v, y = m.p, g = m.mInv, S = m.r, _ = m.restitution, w = void 0 !== this.opts.restitution ? this.opts.restitution : Math.sqrt(f * _);
                        u.set(y.sub(o)), c.set(v.sub(s));
                        var x = u.norm(), O = x - (r + S), T = 1 / (n + g), I = 0;
                        if (0 > O) {
                            h.set(u.normalize());
                            var b = {
                                target: m,
                                source: i,
                                overlap: O,
                                normal: h
                            };
                            this.eventOutput.emit("preCollision", b), this.eventOutput.emit("collision", b);
                            var C = O <= this.slop ? ((1 + w) * h.dot(c) + a / e * (O - this.slop)) / (I + e / T): (1 + w) * h.dot(c) / (I + e / T);
                            h.mult(e * C).put(p), p.mult(-1).put(l), i.applyImpulse(p), m.applyImpulse(l), o.add(h.mult(O / 2), o), y.add(h.mult( - O / 2), y), this.eventOutput.emit("postCollision", b)
                        }
                    }
                }
            }, e.exports = s
    }), define("famous-physics/constraints/Curve", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                f: function(t, i) {
                    return 100 * Math.sin(t / 100) - i
                },
                df: void 0,
                g: function(t,
                i,
                e) {
                    return e
                }, dg: void 0, dampingRatio: 0, period: 0
            }, t && this.setOpts(t), this.J = new n, this.impulse = new n
        }
        var o = t("famous-physics/constraints/Constraint"), n = t("../math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
            for (var i in t)
                this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function(t, i, e) {
            for (var s = this.impulse, o = this.J, n = this.opts.f, r = this.opts.f, a = this.opts.df, h = this.opts.dg, u = 0, c = 0; c < t.length; c++) {
                var p = t[c], l = p.v, f = p.p, d = p.m;
                if (0 == this.opts.period)
                    var m = 0, v = 1;
                else 
                    var y = 4 * d * Math.PI * this.opts.dampingRatio / this.opts.period, g = 4 * d * Math.PI * Math.PI / (this.opts.period * this.opts.period), m = 1 / (y + e * g), v = e * g / (y + e * g);
                if (void 0 === a) {
                    var S = 1e-7, _ = n(f.x, f.y, f.z), w = (n(f.x + S, f.y, f.z) - _) / S, x = (n(f.x, f.y + S, f.z) - _) / S, O = (n(f.x, f.y, f.z + S) - _) / S, T = r(f.x, f.y, f.z), I = (r(f.x + S, f.y, f.z) - T) / S, b = (r(f.x, f.y + S, f.z) - T) / S, C = (r(f.x, f.y, f.z + S) - T) / S;
                    o.setXYZ(w + I, x + b, O + C)
                } else {
                    var M = a(f.x, f.y, f.z), E = h(f.x, f.y, f.z);
                    o.setXYZ(M[0] + E[0], M[1] + E[1], M[2] + E[2])
                }
                var F = v / e * (n(f.x, f.y, f.z) + r(f.x, f.y, f.z)), z =- (o.dot(l) + F) / (m + e * o.normSquared() / d);
                s.set(o.mult(e * z)), p.applyImpulse(s), u += Math.abs(z)
            }
            return u
        }, s.prototype.setupSlider = function(t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init(), t.on("change", function(t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }), define("famous-physics/constraints/Distance", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                length: 0,
                anchor: void 0,
                dampingRatio: 0,
                period: 0
            }, t && this.setOpts(t), this.impulse = new n, this.n = new n, this.diffP = new n, this.diffV = new n
        }
        var o = t("famous-physics/constraints/Constraint"), n = t("../math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
            void 0 !== t.anchor && (t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof n && (this.opts.anchor = t.anchor), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor))), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.period && (this.opts.period = t.period)
        }, s.prototype.applyConstraint = function(t, i, e) {
            var s = this.n, o = this.diffP, n = this.diffV, r = this.impulse;
            if (i)
                var a = i.p, h = i.mInv, u = i.v;
            else 
                var a = this.opts.anchor, h = 0;
            for (var c = this.opts.length, p = 0, l = 0; l < t.length; l++) {
                var f = t[l], d = f.v, m = f.p, v = f.mInv;
                o.set(m.sub(a)), s.set(o.normalize());
                var y = o.norm() - c;
                i ? n.set(d.sub(u)) : n.set(d);
                var g = 1 / (v + h);
                if (0 == this.opts.period)
                    var S = 0, _ = 1;
                else 
                    var w = 4 * g * Math.PI * this.opts.dampingRatio / this.opts.period, x = 4 * g * Math.PI * Math.PI / (this.opts.period * this.opts.period), S = 1 / (w + e * x), _ = e * x / (w + e * x);
                var O = _ / e * y, T =- (s.dot(n) + O) / (S + e / g);
                r.set(s.mult(e * T)), f.applyImpulse(r), i && i.applyImpulse(r.mult(-1)), p += Math.abs(T)
            }
            return p
        }, e.exports = s
    }), define("famous-physics/constraints/Distance1D", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                length: 0,
                anchor: void 0,
                dampingRatio: 0,
                period: 0
            }, t && this.setOpts(t), this.impulse = new n
        }
        var o = t("famous-physics/constraints/Constraint"), n = t("../math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
            for (var i in t)
                this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function(t, i, e) {
            var s, o, n = this.impulse;
            if (i)
                var r = i.p.x, a = i.mInv, h = i.v.x;
            else 
                var r = this.opts.anchor, a = 0;
            for (var u = this.opts.length, c = this.opts.period, p = this.opts.dampingRatio, l = 0, f = 0; f < t.length; f++) {
                var d = t[f], m = d.v.x, v = d.p.x, y = d.mInv;
                s = v - r;
                var g = s - u;
                o = i ? m - h : m;
                var S = 1 / (y + a);
                if (0 == c)
                    var _ = 0, w = 1;
                else 
                    var x = 4 * S * Math.PI * p / c, O = 4 * S * Math.PI * Math.PI / (c * c), _ = 1 / (x + e * O), w = e * O / (x + e * O);
                var T = w / e * g, I =- (o + T) / (_ + e / S);
                n.setXYZ(e * I, 0, 0), d.applyImpulse(n), i && i.applyImpulse(n.mult(-1)), l += Math.abs(I)
            }
            return l
        }, s.prototype.setupSlider = function(t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init instanceof Function && t.init(), t.on("change", function(t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }), define("famous-physics/constraints/Rod", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                length: 0,
                anchor: void 0,
                stiffness: 1
            }, t && this.setOpts(t), this.disp = new n, this.push = new n
        }
        var o = t("famous-physics/constraints/Constraint"), n = t("../math/vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
            void 0 !== t.anchor && (t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor)), delete t.anchor);
            for (var i in t)
                this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function(t, i, e) {
            var s = this.opts, o = this.disp, n = this.push, r = s.length, a = s.stiffness, h = s.anchor || i.p, u = t[0], c = u.p;
            o.set(c.sub(h));
            var p = o.norm(), l = (r - p) / p;
            Math.abs(l) > 0 && (o.mult(.5 * l * a, n), u.immunity || (c.add(n, c), u.v.add(n.div(e), u.v)), i&&!i.immunity && (i.p.sub(n, i.p), i.v.sub(n.div(e), i.v)))
        }, e.exports = s
    }), define("famous-physics/constraints/Rope", ["require", "exports", "module", "famous-physics/constraints/Constraint", "famous-physics/math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                length: 0,
                anchor: void 0,
                dampingRatio: 0,
                period: 0
            }, t && this.setOpts(t), this.impulse = new n, this.n = new n, this.diffP = new n, this.diffV = new n
        }
        var o = t("famous-physics/constraints/Constraint"), n = t("famous-physics/math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
            void 0 !== t.anchor && (t.anchor instanceof n && (this.opts.anchor = t.anchor), t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor))), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.period && (this.opts.period = t.period)
        }, s.prototype.applyConstraint = function(t, i, e) {
            var s = this.n, o = this.diffP, n = this.diffV, r = this.impulse;
            if (i)
                var a = i.p, h = i.mInv, u = i.v;
            else 
                var a = this.opts.anchor, h = 0;
            for (var c = this.opts.length, p = 0, l = 0; l < t.length; l++) {
                var f = t[l], d = f.v, m = f.p, v = f.mInv;
                o.set(m.sub(a));
                var y = o.norm() - c;
                if (0 > y)
                    return;
                s.set(o.normalize()), i ? n.set(d.sub(u)) : n.set(d);
                var g = 1 / (v + h);
                if (0 == this.opts.period)
                    var S = 0, _ = 1;
                else 
                    var w = 4 * g * Math.PI * this.opts.dampingRatio / this.opts.period, x = 4 * g * Math.PI * Math.PI / (this.opts.period * this.opts.period), S = 1 / (w + e * x), _ = e * x / (w + e * x);
                var O = _ / e * y, T =- (s.dot(n) + O) / (S + e / g);
                r.set(s.mult(e * T)), f.applyImpulse(r), i && i.applyImpulse(r.mult(-1)), p += Math.abs(T)
            }
            return p
        }, s.prototype.setupSlider = function(t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init(), t.on("change", function(t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }), define("famous-physics/constraints/StiffSpring", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                length: 0,
                anchor: void 0,
                dampingRatio: 1,
                period: 1e3,
                callback: void 0,
                callbackTolerance: 1e-4
            }, t && this.setOpts(t), this.pDiff = new a, this.vDiff = new a, this.n = new a, this.impulse1 = new a, this.impulse2 = new a, this._canFireCallback=!0
        }
        function o(t, i, e) {
            e < this.opts.callbackTolerance ? this._canFireCallback && (i.call(this, t), this._canFireCallback=!1) : this._canFireCallback=!0
        }
        function n(t, i, e) {
            var s = Math.abs(t.dot(i) / e);
            return s
        }
        var r = t("famous-physics/constraints/Constraint"), a = t("../math/Vector");
        s.prototype = Object.create(r.prototype), s.prototype.constructor = r, s.prototype.setOpts = function(t) {
            void 0 !== t.anchor && (t.anchor instanceof a && (this.opts.anchor = t.anchor), t.anchor.p instanceof a && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new a(t.anchor))), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.period && (this.opts.period = t.period), void 0 !== t.callback && (this.opts.callback = t.callback, this._canFireCallback=!0), void 0 !== t.callbackTolerance && (this.opts.callbackTolerance = t.callbackTolerance)
        }, s.prototype.applyConstraint = function(t, i, e) {
            for (var s = this.opts, r = this.pDiff, a = this.vDiff, h = this.impulse1, u = this.impulse2, c = s.length, p = s.anchor || i.p, l = s.period, f = s.dampingRatio, d = 0; d < t.length; d++) {
                var m = t[d], v = m.p, y = m.v, g = m.m, S = m.mInv;
                r.set(v.sub(p));
                var _ = r.norm() - c;
                if (i) {
                    var w = i.mInv, x = i.v;
                    a.set(y.sub(x));
                    var O = 1 / (S + w)
                } else {
                    a.set(y);
                    var O = g
                }
                if (0 == this.opts.period)
                    var T = 0, I = 1;
                else 
                    var b = 4 * O * Math.PI * Math.PI / (l * l), C = 4 * O * Math.PI * f / l, I = e * b / (C + e * b), T = 1 / (C + e * b);
                var M = I / e * _;
                if (r.normalize( - M).sub(a).mult(e / (T + e / O)).put(h), m.applyImpulse(h)
                    , i && (h.mult(-1).put(u), i.applyImpulse(u)), this.opts.callback) {
                    var E = m.getEnergy() + n(h, r, e);
                    o.call(this, m, this.opts.callback, E)
                }
            }
        }, s.prototype.getEnergy = function(t, i) {
            var e = this.opts, s = e.length, o = e.period, n = e.anchor || i.p;
            if (0 === o)
                return 0;
            var r = 4 * t.m * Math.PI * Math.PI / (o * o), a = n.sub(t.p), h = a.norm() - s;
            return .5 * r * h * h
        }, s.prototype.setupSlider = function(t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init instanceof Function && t.init(), t.on("change", function(t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }), define("famous-physics/constraints/Surface", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                f: void 0,
                df: void 0,
                dampingRatio: 0,
                period: 0
            }, t && this.setOpts(t), this.J = new n, this.impulse = new n, this.eps = 1e-7
        }
        var o = t("famous-physics/constraints/Constraint"), n = t("../math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.prototype.setOpts = function(t) {
            for (var i in t)
                this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function(t, i, e) {
            for (var s = this.impulse, o = this.J, n = this.opts.f, r = this.opts.df, a = 0, h = 0; h < t.length; h++) {
                var u = t[h], c = u.v, p = u.p, l = u.m;
                if (0 == this.opts.period)
                    var f = 0, d = 1;
                else 
                    var m = 4 * l * Math.PI * this.opts.dampingRatio / this.opts.period, v = 4 * l * Math.PI * Math.PI / (this.opts.period * this.opts.period), f = 1 / (m + e * v), d = e * v / (m + e * v);
                if (void 0 === r) {
                    var y = this.eps, g = n(p.x, p.y, p.z), S = (n(p.x + y, p.y, p.z) - g) / y, _ = (n(p.x, p.y + y, p.z) - g) / y, w = (n(p.x, p.y, p.z + y) - g) / y;
                    o.setXYZ(S, _, w)
                } else 
                    o.setXYZ.apply(o, r(p.x, p.y, p.z));
                var x = d / e * n(p.x, p.y, p.z), O =- (o.dot(c) + x) / (f + e * o.normSquared() / l);
                s.set(o.mult(e * O)), u.applyImpulse(s), a += Math.abs(O)
            }
            return a
        }, s.prototype.setupSlider = function(t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init(), t.on("change", function(t) {
                this.opts[i] = t.value
            }.bind(this))
        }, e.exports = s
    }), define("famous-physics/constraints/Wall", ["require", "exports", "module", "famous-physics/constraints/Constraint", "../math/Vector", "famous/EventHandler"], function(t, i, e) {
        function s(t) {
            this.opts = {
                restitution: .7,
                k: 0,
                n: new n,
                d: 0,
                onContact: s.ON_CONTACT.REFLECT
            }, t && this.setOpts(t), this.diff = new n, this.impulse = new n, this.slop =- 1, this.eventHandler = new r, r.setOutputHandler(this, this.eventHandler)
        }
        var o = t("famous-physics/constraints/Constraint"), n = t("../math/Vector"), r = t("famous/EventHandler");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.ON_CONTACT = {
            REFLECT: 0,
            WRAP: 1,
            ABSORB: 2
        }, s.prototype.setOpts = function(t) {
            void 0 !== t.restitution && (this.opts.restitution = t.restitution), void 0 !== t.k && (this.opts.k = t.k), void 0 !== t.d && (this.opts.d = t.d), void 0 !== t.onContact && (this.opts.onContact = t.onContact), void 0 !== t.n && this.opts.n.set(t.n)
        }, s.prototype.getNormalVelocity = function(t) {
            var i = this.opts.n;
            return t.dot(i)
        }, s.prototype.getDistance = function(t) {
            var i = this.opts.n, e = this.opts.d;
            return t.dot(i) + e
        }, s.prototype.onEnter = function(t, i, e) {
            var o = t.p, n = t.v, r = t.m, a = this.opts.n, h = this.opts.onContact, u = this.opts.restitution, c = this.impulse, p = this.opts.k, l = 0, f = {
                particle: t,
                wall: this,
                overlap: i
            };
            switch (this.eventHandler.emit("enter", f), h) {
            case s.ON_CONTACT.REFLECT:
                var d = i < this.slop?-((1 + u) * a.dot(n) + p / e * (i - this.slop)) / (r * e + l) : - ((1 + u) * a.dot(n)) / (r * e + l);
                c.set(a.mult(e * d)), t.applyImpulse(c), o.add(a.mult( - i), o);
                break;
            case s.ON_CONTACT.ABSORB:
                var d = a.dot(n) / (r * e + l);
                c.set(a.mult(e * d)), t.applyImpulse(c), o.add(a.mult( - i), o), n.clear();
                break;
            case s.ON_CONTACT.WRAP:
                i<-t.r && this.eventHandler.emit("wrap", f)
            }
        }, s.prototype.onExit = function(t, i) {
            var e = this.opts.onContact, o = t.p, n = this.opts.n;
            e == s.ON_CONTACT.REFLECT ? o.add(n.mult( - i), o) : e == s.ON_CONTACT.WRAP || e == s.ON_CONTACT.ABSORB, this.eventHandler.emit("exit", {
                particle: t,
                wall: this,
                overlap: i
            })
        }, s.prototype.applyConstraint = function(t, i, e) {
            for (var s = this.opts.n, o = 0; o < t.length; o++) {
                var n = t[o], r = n.p, a = n.v, h = n.r || 0, u = this.getDistance(r.add(s.mult( - h))), c = this.getNormalVelocity(a);
                0 > u && (0 > c ? this.onEnter(n, u, e) : this.onExit(n, u, e))
            }
        }, e.exports = s
    }), define("famous-physics/constraints/Walls", ["require", "exports", "module", "famous-physics/constraints/Constraint", "famous-physics/math/Vector", "famous-physics/constraints/Wall"], function(t, i, e) {
        function s(t) {
            this.opts = {
                sides: [s.SIDES.LEFT, s.SIDES.RIGHT, s.SIDES.TOP, s.SIDES.BOTTOM],
                size: [window.innerWidth, window.innerHeight, 0],
                origin: [.5, .5, .5],
                k: 0,
                restitution: .5,
                onContact: s.ON_CONTACT.REFLECT
            }, this.setSize(this.opts.size, this.opts.origin), this.setOptsForEach({
                restitution: this.opts.restitution,
                k: this.opts.k
            }), t && this.setOpts(t)
        }
        var o = t("famous-physics/constraints/Constraint"), n = t("famous-physics/math/Vector"), r = t("famous-physics/constraints/Wall");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.SIDES = {
            LEFT: new r({
                n: new n(1, 0, 0)
            }),
            RIGHT: new r({
                n: new n(-1, 0, 0)
            }),
            TOP: new r({
                n: new n(0, 1, 0)
            }),
            BOTTOM: new r({
                n: new n(0, -1, 0)
            }),
            FRONT: new r({
                n: new n(0, 0, 1)
            }),
            BACK: new r({
                n: new n(0, 0, -1)
            })
        }, s.ON_CONTACT = r.ON_CONTACT, s.prototype.setOpts = function(t) {
            var i=!1;
            void 0 !== t.restitution && this.setOptsForEach({
                restitution: t.restitution
            }), void 0 !== t.k && this.setOptsForEach({
                k: t.k
            }), void 0 !== t.size && (this.opts.size = t.size, i=!0), void 0 !== t.sides && (this.opts.sides = t.sides), void 0 !== t.onContact && (this.opts.onContact = t.onContact, this.setOnContact(t.onContact)), void 0 !== t.origin && (this.opts.origin = t.origin, i=!0), i && this.setSize(this.opts.size, this.opts.origin)
        }, s.prototype.setSize = function(t, i) {
            i = i || this.opts.origin, i.length < 3 && (i[2] = .5), s.SIDES.LEFT.setOpts({
                d: t[0] * i[0]
            }), s.SIDES.TOP.setOpts({
                d: t[1] * i[1]
            }), s.SIDES.FRONT.setOpts({
                d: t[2] * i[2]
            }), s.SIDES.RIGHT.setOpts({
                d: t[0] * (1 - i[0])
            }), s.SIDES.BOTTOM.setOpts({
                d: t[1] * (1 - i[1])
            }), s.SIDES.BACK.setOpts({
                d: t[2] * (1 - i[2])
            }), this.opts.size = t, this.opts.origin = i
        }, s.prototype.setOptsForEach = function(t) {
            this.forEachWall(function(i) {
                i.setOpts(t)
            });
            for (var i in t)
                this.opts[i] = t[i]
        }, s.prototype.setOnContact = function(t) {
            switch (this.forEachWall(function(i) {
                i.setOpts({
                    onContact: t
                })
            }), t) {
            case s.ON_CONTACT.REFLECT:
                break;
            case s.ON_CONTACT.WRAP:
                this.forEachWall(function(i) {
                    i.setOpts({
                        onContact: t
                    }), i.on("wrap", function(t) {
                        var e = t.particle, o = i.opts.n, n = i.opts.d;
                        switch (i) {
                        case s.SIDES.RIGHT:
                            var r = s.SIDES.LEFT.opts.d;
                            break;
                        case s.SIDES.LEFT:
                            var r = s.SIDES.TOP.opts.d;
                            break;
                        case s.SIDES.TOP:
                            var r = s.SIDES.BOTTOM.opts.d;
                            break;
                        case s.SIDES.BOTTOM:
                            var r = s.SIDES.TOP.opts.d
                        }
                        e.p.add(o.mult(n + r), e.p)
                    })
                });
                break;
            case s.ON_CONTACT.ABSORB:
            }
        }, s.prototype.applyConstraint = function(t, i, e) {
            this.forEachWall(function(s) {
                s.applyConstraint(t, i, e)
            })
        }, s.prototype.forEachWall = function(t) {
            for (var i = 0; i < this.opts.sides.length; i++)
                t(this.opts.sides[i])
        }, s.prototype.rotateZ = function(t) {
            this.forEachWall(function(i) {
                var e = i.opts.n;
                e.rotateZ(t, e)
            })
        }, e.exports = s
    }), define("famous-physics/math/matrix", ["require", "exports", "module"], function(require, exports, module) {
        function Matrix(t, i, e, s) {
            this.nRows = t, this.nCols = i, this.values = e || [[]], s && this.loop(s)
        }
        Matrix.prototype = {
            loop: function(t) {
                for (var i = this.values, e = 0; e < this.nRows; e++) {
                    i[e] = [];
                    for (var s = 0; s < this.nCols; s++)
                        i[e][s] = t(e, s)
                }
                return this
            },
            set: function(t) {
                return this.values = t, this
            },
            create: function(t) {
                return this.loop(t)
            },
            identity: function() {
                return this.loop(function(t, i) {
                    return t == i ? 1 : 0
                })
            },
            print: function() {
                for (var row = 0; row < this.nRows; row++) {
                    for (var str = "console.log(", col = 0; col < this.nCols; col++)
                        str += "this.values[" + row + "][" + col + "].toFixed(1)", col < this.nCols-1 && (str += ",");
                    str += ")", eval(str)
                }
            },
            rightMult: function(t, i) {
                t.nRows != this.nCols && console.warn("cant multiply");
                for (var e = this.values, s = t.values, o = this.nRows, n = t.nCols, r = [], a = 0; o > a; a++) {
                    r[a] = [];
                    for (var h = 0; n > h; h++) {
                        for (var u = 0, c = 0; c < this.nCols; c++)
                            u += e[a][c] * s[c][h];
                        r[a][h] = u
                    }
                }
                return i ? i.set(r) : new Matrix(o, n).set(r)
            },
            vMult: function(t) {
                for (var i = t.length, e = [], s = 0; s < this.nRows; s++) {
                    for (var o = 0, n = 0; i > n; n++)
                        o += this.values[s][n] * t[n];
                    e[s] = o
                }
                return e
            },
            diag: function(t) {
                var i = function(i, e) {
                    return i == e ? t[i] : 0
                };
                return this.loop(i)
            },
            transpose: function(t) {
                var i = function(t, i) {
                    return this.values[i][t]
                }.bind(this);
                return t ? t.loop(i) : new Matrix(this.nCols, this.nRows, [[]], i)
            }
        }, module.exports = Matrix
    }), define("famous-physics/math/GaussSeidel", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i) {
            this.numIterations = t || 10, this.tolerance = i || 1e-7, this.prevX = [], this.x = []
        }
        function o() {
            for (var t = 0, i = this.x.length, e = 0; i > e; e++)
                t += Math.pow(this.prevX[e] - this.x[e], 2) / (this.x[e] * this.x[e]);
            return Math.sqrt(t)
        }
        s.prototype.solve = function(t, i) {
            for (var e, s = this.numIterations, n = i.length, r = this.x, a = this.prevX, h = 0; n > h; h++)
                this.x[h] = 0;
            for (var u = 0, c = 1 / 0; s > u && c > this.tolerance;) {
                for (var h = 0; n > h; h++) {
                    a[h] = r[h], e = 0;
                    for (var p = 0; n > p; p++)
                        p != h && (e += t[h][p] * r[p]);
                    r[h] = (i[h] - e) / t[h][h]
                }
                c = o(), u++
            }
            return r
        }, e.exports = s
    }), define("famous-physics/constraints/joint", ["require", "exports", "module", "../math/matrix", "../math/GaussSeidel", "../math/vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                length: 0
            }, t && this.setOpts(t);
            var i = 10, e = 1e-5;
            this.solver = new n(i, e)
        }
        var o = t("../math/matrix"), n = t("../math/GaussSeidel"), r = t("../math/vector");
        s.prototype.getPosition = function(t, i, e) {
            var s = 2, n = 1, a = [], h = [], u = [], c = [], p = [], l = t;
            a[0] = l.getVel(), h[0] = l.p, u[0] = l.mInv, c[0] = l.f, p[0] = l.m, a[1] = i.v, h[1] = i.p, u[1] = i.mInv, c[1] = i.f, p[1] = i.m;
            for (var f = [], d = 0; n > d; d++) {
                f[d] = [];
                for (var m = 0; s > m; m++) {
                    var v;
                    m == d ? v = h[d].sub(h[d + 1]) : m == d + 1 && (v = h[d + 1].sub(h[d])), f[d][3 * m + 0] = v.x, f[d][3 * m + 1] = v.y, f[d][3 * m + 2] = v.z
                }
            }
            var y = new o(n, 3 * s);
            y.set(f);
            for (var g = [], d = 0; n > d; d++) {
                g[d] = [];
                for (var m = 0; s > m; m++) {
                    var v;
                    m == d ? v = a[d].sub(a[d + 1]) : m == d + 1 && (v = a[d + 1].sub(a[d])), g[d][3 * m + 0] = v.x, g[d][3 * m + 1] = v.y, g[d][3 * m + 2] = v.z
                }
            }
            for (var S = [], _ = [], w = 0; s > w; w++)
                S[3 * w + 0] = u[w], S[3 * w + 1] = u[w], S[3 * w + 2] = u[w], _[3 * w + 0] = a[w].x, _[3 * w + 1] = a[w].y, _[3 * w + 2] = a[w].z;
            var x = new o(3 * s, 3 * s).diag(S), O = new o(n, n);
            y.rightMult(x).rightMult(y.transpose(), O);
            for (var T = y.vMult(_), I = 1, b = [], w = 0; n > w; w++) {
                var C = this.length, M = h[w + 1].sub(h[w]).normSquared();
                b[w] = .5 * (M - C * C)
            }
            for (var E = [], F = 0; n > F; F++)
                E[F] =- T[F] - I / e * b[F];
            for (var z = this.solver.solve(O.values, E), P = y.transpose().vMult(z), R = [], w = 0; s > w; w++)
                R[w] = new r(P[3 * w + 0], P[3 * w + 1], P[3 * w + 2]);
            for (var w = 0; s > w; w++) {
                var _ = a[w], A = p[w], k = R[w];
                (0 != w || 0 != l.id) && (1 == w && 0 == l.id ? _.add(k.sub(R[0]).div(A), _) : _.add(k.div(A), _))
            }
        }, s.prototype.getError = function() {}, e.exports = s
    }), define("famous-physics/forces/Force", ["require", "exports", "module", "famous-physics/math/vector"], function(t, i, e) {
        function s() {
            this.force = new o
        }
        var o = t("famous-physics/math/vector");
        s.prototype.setOpts = function(t) {
            for (var i in t)
                this.opts[i] = t[i]
        }, s.prototype.applyConstraint = function() {}, s.prototype.setupSlider = function(t, i) {
            i = i || t.opts.name, t.setOpts({
                value: this.opts[i]
            }), t.init && t.init(), t.on("change", function(t) {
                this.opts[i] = t.value
            }.bind(this))
        }, s.prototype.getEnergy = function() {
            return 0
        }, e.exports = s
    }), define("famous-physics/forces/Drag", ["require", "exports", "module", "famous-physics/forces/Force"], function(t, i, e) {
        function s(t) {
            this.opts = {
                strength: .01,
                forceFunction: s.FORCE_FUNCTIONS.LINEAR
            }, t && this.setOpts(t), o.call(this)
        }
        var o = t("famous-physics/forces/Force");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.FORCE_FUNCTIONS = {
            LINEAR: function(t) {
                return t
            },
            QUADRATIC: function(t) {
                return t.mult(t.norm())
            }
        }, s.prototype.applyForce = function(t) {
            var i = this.opts.strength, e = this.opts.forceFunction, s = this.force;
            for (var o in t) {
                var n = t[o];
                e(n.v).mult( - i).put(s), n.applyForce(s)
            }
        }, s.prototype.setOpts = function(t) {
            for (var i in t)
                this.opts[i] = t[i]
        }, e.exports = s
    }), define("famous-physics/forces/Repulsion", ["require", "exports", "module", "famous-physics/forces/Force", "famous-physics/math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                strength: 1,
                anchor: void 0,
                radii: {
                    min: 0,
                    max: 1 / 0
                }, cutoff: 0, cap: 1 / 0, decayFunction: s.DECAY_FUNCTIONS.GRAVITY
            }, t && this.setOpts(t), this.setOpts(t), this.disp = new n, o.call(this)
        }
        var o = t("famous-physics/forces/Force"), n = t("famous-physics/math/Vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.DECAY_FUNCTIONS = {
            LINEAR: function(t, i) {
                return Math.max(1-1 / i * t, 0)
            },
            MORSE: function(t, i) {
                var e = 0 == i ? 100: i, s = t + e * (1 - Math.log(2));
                return Math.max(1 - Math.pow(1 - Math.exp(s / e-1), 2), 0)
            },
            INVERSE: function(t, i) {
                return 1 / (1 - i + t)
            },
            GRAVITY: function(t, i) {
                return 1 / (1 - i + t * t)
            }
        }, s.prototype.setOpts = function(t) {
            void 0 !== t.anchor && (t.anchor.p instanceof n && (this.opts.anchor = t.anchor.p), t.anchor instanceof Array && (this.opts.anchor = new n(t.anchor)), delete t.anchor);
            for (var i in t)
                this.opts[i] = t[i]
        }, s.prototype.applyForce = function(t, i) {
            var e = this.opts, s = this.force, o = this.disp, n = e.strength, r = e.anchor || i.p, a = e.cap, h = e.cutoff, u = e.radii.max, c = e.radii.min, p = e.decayFunction;
            if (0 != n)
                for (var l in t) {
                    var f = t[l];
                    if (f != i) {
                        var d = f.m, m = f.p;
                        o.set(m.sub(r));
                        var v = o.norm();
                        u > v && v > c && (o.normalize(n * d * p(v, h)).cap(a).put(s), f.applyForce(s))
                    }
                }
            }, e.exports = s
    }), define("famous-physics/forces/Spring", ["require", "exports", "module", "famous-physics/forces/Force", "famous-physics/math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                period: 300,
                dampingRatio: .1,
                length: 0,
                lMin: 0,
                lMax: 1 / 0,
                anchor: void 0,
                bodyAnchor: new u(0,
                0,
                0),
                forceFunction: s.FORCE_FUNCTIONS.HOOK,
                callback: void 0,
                callbackTolerance: 1e-7
            }, t && this.setOpts(t), this.init(), this._canFireCallback = void 0, h.call(this), this.disp = new u(0, 0, 0)
        }
        function o(t) {
            this.forceFunction = t
        }
        function n(t) {
            t.stiffness = Math.pow(2 * Math.PI / t.period, 2)
        }
        function r(t) {
            t.damping = 4 * Math.PI * t.dampingRatio / t.period
        }
        function a(t, i) {
            return .5 * t * i * i
        }
        var h = t("famous-physics/forces/Force"), u = t("famous-physics/math/Vector");
        s.prototype = Object.create(h.prototype), s.prototype.constructor = h, s.FORCE_FUNCTIONS = {
            FENE: function(t, i) {
                var e = .99 * i, s = Math.max(Math.min(t, e), - e);
                return s / (1 - s * s / (i * i))
            },
            HOOK: function(t) {
                return t
            }
        }, s.prototype.init = function() {
            var t = this.opts;
            o.call(this, t.forceFunction), n.call(this, t), r.call(this, t)
        }, s.prototype.applyForce = function(t, i) {
            for (var e = this.force, s = this.disp, o = this.opts, n = o.stiffness, r = o.damping, h = o.length, u = o.anchor || i.p, c = o.callback, p = 0; p < t.length; p++) {
                var l = t[p];
                s.set(u.sub(l.p));
                var f = s.norm() - h;
                if (0 == f)
                    return;
                var d = l.m;
                if (n*=d, r*=d, e.set(s.normalize(n * this.forceFunction(f, this.opts.lMax)
                    )), r && (i ? e.add(l.v.sub(i.v).mult( - r), e) : e.add(l.v.mult( - r), e)), l.applyForce(e), i && i.applyForce(e.mult(-1)), this.opts.callback) {
                    var m = l.getEnergy() + a(n, f);
                    this.fireCallback(l, c, m)
                }
            }
        }, s.prototype.fireCallback = function(t, i, e) {
            e < this.opts.callbackTolerance ? (this._canFireCallback && i.call(this, t), this._canFireCallback=!1) : this._canFireCallback=!0
        }, s.prototype.getEnergy = function(t, i) {
            var e = this.opts, s = e.length, o = e.anchor || i.p, n = e.stiffness, r = o.sub(t.p), a = r.norm() - s;
            return .5 * n * a * a
        }, s.prototype.setOpts = function(t) {
            void 0 !== t.anchor && (t.anchor.p instanceof u && (this.opts.anchor = t.anchor.p), t.anchor instanceof u && (this.opts.anchor = t.anchor), t.anchor instanceof Array && (this.opts.anchor = new u(t.anchor))), void 0 !== t.bodyAnchor && (t.bodyAnchor instanceof u && (this.opts.bodyAnchor = t.bodyAnchor), t.bodyAnchor instanceof Array && (this.opts.bodyAnchor = new u(t.bodyAnchor))), void 0 !== t.period && (this.opts.period = t.period), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.lMin && (this.opts.lMin = t.lMin), void 0 !== t.lMax && (this.opts.lMax = t.lMax), void 0 !== t.forceFunction && (this.opts.forceFunction = t.forceFunction), void 0 !== t.callback && (this.opts.callback = t.callback), void 0 !== t.callbackTolerance && (this.opts.callbackTolerance = t.callbackTolerance), this.init()
        }, e.exports = s
    }), define("famous-physics/forces/TorqueSpring", ["require", "exports", "module", "famous-physics/forces/Force", "famous-physics/math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                period: 300,
                dampingRatio: 0,
                length: 0,
                lMin: 0,
                lMax: 1 / 0,
                anchor: void 0,
                forceFunction: s.FORCE_FUNCTIONS.HOOK,
                callback: void 0,
                callbackTolerance: 1e-7
            }, t && this.setOpts(t), this.torque = new h, this.init(), this._canFireCallback = void 0, a.call(this), this.disp = new h(0, 0, 0)
        }
        function o(t) {
            this.forceFunction = t
        }
        function n(t) {
            t.stiffness = Math.pow(2 * Math.PI / t.period, 2)
        }
        function r(t) {
            t.damping = 4 * Math.PI * t.dampingRatio / t.period
        }
        var a = t("famous-physics/forces/Force"), h = t("famous-physics/math/Vector");
        s.prototype = Object.create(a.prototype), s.prototype.constructor = a, s.FORCE_FUNCTIONS = {
            FENE: function(t, i) {
                var e = .99 * i, s = Math.max(Math.min(t, e), - e);
                return s / (1 - s * s / (i * i))
            },
            HOOK: function(t) {
                return t
            }
        }, s.prototype.init = function() {
            var t = this.opts;
            o.call(this, t.forceFunction), n.call(this, t), r.call(this, t)
        }, s.prototype.applyForce = function(t) {
            for (var i = this.torque, e = this.opts, s = this.disp, o = e.stiffness, n = e.damping, r = e.length, a = e.anchor, h = 0; h < t.length; h++) {
                var u = t[h];
                s.set(a.sub(u.q));
                var c = s.norm() - r;
                if (0 == c)
                    return;
                var p = u.m;
                o*=p, n*=p, i.set(s.normalize(o * this.forceFunction(c, this.opts.lMax))), n && i.add(u.w.mult( - n), i), u.applyTorque(i)
            }
        }, s.prototype.setOpts = function(t) {
            void 0 !== t.anchor && (t.anchor.p instanceof h && (this.opts.anchor = t.anchor.p), t.anchor instanceof h && (this.opts.anchor = t.anchor), t.anchor instanceof Array && (this.opts.anchor = new h(t.anchor))), void 0 !== t.period && (this.opts.period = t.period), void 0 !== t.dampingRatio && (this.opts.dampingRatio = t.dampingRatio), void 0 !== t.length && (this.opts.length = t.length), void 0 !== t.lMin && (this.opts.lMin = t.lMin), void 0 !== t.lMax && (this.opts.lMax = t.lMax), void 0 !== t.forceFunction && (this.opts.forceFunction = t.forceFunction), void 0 !== t.callback && (this.opts.callback = t.callback), void 0 !== t.callbackTolerance && (this.opts.callbackTolerance = t.callbackTolerance), this.init()
        }, e.exports = s
    }), define("famous-physics/forces/VectorField", ["require", "exports", "module", "famous-physics/forces/Force", "../math/vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                strength: 1,
                field: s.FIELDS.CONSTANT
            }, t && this.setOpts(t), this.setFieldOptions(this.opts.field), this.timeDependent = 3 == this.opts.field.length, this.tOrig = void 0, this.register = new n(0, 0, 0), o.call(this)
        }
        var o = t("famous-physics/forces/Force"), n = t("../math/vector");
        s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.FIELDS = {
            CONSTANT: function(t, i) {
                return t.set(i.direction)
            },
            LINEAR: function(t, i) {
                return t.mult(i.k, t)
            },
            RADIAL_GRAVITY: function(t) {
                return t.mult(-1, t)
            },
            SPHERE_ATTRACTOR: function(t, i) {
                return t.mult((i.radius - t.norm()) / t.norm(), t)
            },
            POINT_ATTRACTOR: function(t, i) {
                return t.set(i.p.sub(t))
            }
        }, s.prototype.setOpts = function(t) {
            for (var i in t)
                this.opts[i] = t[i]
        }, s.prototype.evaluate = function(t, i) {
            return this.register.set(t), this.opts.field(this.register, this.opts, i)
        }, s.prototype.applyForce = function(t) {
            var i, e = this.force;
            this.timeDependent ? (this.tOrig && (this.tOrig = Date.now()), i = .001 * (Date.now() - this.tOrig)) : i = void 0;
            for (var s = 0; s < t.length; s++) {
                var o = t[s];
                e.set(this.evaluate(o.p, i).mult(o.m * this.opts.strength)), o.applyForce(e)
            }
        }, s.prototype.setFieldOptions = function(t) {
            var i = s.FIELDS;
            switch (t) {
            case i.CONSTANT:
                this.opts.direction || (this.opts.direction = new n(0, 1, 0));
                break;
            case i.POINT_ATTRACTOR:
                this.opts.p || (this.opts.p = new n(0, 0, 0));
                break;
            case i.SPHERE_ATTRACTOR:
                this.opts.radius || (this.opts.radius = 1);
                break;
            case i.LINEAR:
                this.opts.k || (this.opts.k = 1)
            }
        }, e.exports = s
    }), define("famous-physics/forces/rotationalDrag", ["require", "exports", "module", "famous-physics/forces/Force", "famous-physics/math/Vector"], function(t, i, e) {
        function s(t) {
            this.opts = {
                strength: .01,
                forceFunction: s.FORCE_FUNCTIONS.LINEAR
            }, t && this.setOpts(t), o.call(this)
        }
        var o = t("famous-physics/forces/Force");
        t("famous-physics/math/Vector"), s.prototype = Object.create(o.prototype), s.prototype.constructor = o, s.FORCE_FUNCTIONS = {
            LINEAR: function(t) {
                return t
            },
            QUADRATIC: function(t) {
                return t.mult(t.norm())
            }
        }, s.prototype.applyForce = function(t) {
            var i = this.opts.strength, e = this.opts.forceFunction, s = this.force;
            for (var o in t) {
                var n = t[o];
                e(n.w).mult(-100 * i).put(s), n.applyTorque(s)
            }
        }, s.prototype.setOpts = function(t) {
            for (var i in t)
                this.opts[i] = t[i]
        }, e.exports = s
    }), define("famous-physics/integrator/SymplecticEuler", ["require", "exports", "module"], function(t, i, e) {
        function s(t) {
            this.opts = {
                velocityCap: 1 / 0,
                angularVelocityCap: 1 / 0
            }, t && this.setOpts(t)
        }
        s.prototype.integrateVelocity = function(t, i) {
            var e = t.v, s = t.m, o = t.f;
            o.isZero() || (t.setVel(e.add(o.mult(i / s))), o.clear())
        }, s.prototype.integratePosition = function(t, i) {
            var e = t.p, s = t.v;
            s.isZero() || (s.cap(this.opts.velocityCap, s), t.setPos(e.add(s.mult(i))))
        }, s.prototype.integrateAngularMomentum = function(t, i) {
            var e = t.L, s = t.t;
            s.isZero() || (s.cap(this.opts.angularVelocityCap, s), e.add(s.mult(i), e), s.clear())
        }, s.prototype.integrateOrientation = function(t, i) {
            var e = t.q, s = t.w;
            s.isZero() || (e.add(e.multiply(s).scalarMult(.5 * i), e), e.set(e.normalize()))
        }, s.prototype.setOpts = function(t) {
            for (var i in t)
                this.opts[i] = t[i]
        }, e.exports = s
    }), define("famous-physics/integrator/verlet", ["require", "exports", "module", "../math/vector"], function(t, i, e) {
        function s(t) {
            t = t || {}, this.vCap = t.vCap || 1 / 0, this.aCap = t.aCap || 1 / 0, this.drag = t.drag || 1, this.diff = new o, this.pOldCopy = new o, this.dragVector = new o
        }
        var o = t("../math/vector");
        s.prototype.integrate = function(t, i, e) {
            var s = t.pOld, o = t.p, n = t.a;
            if (this.diff.set(o.sub(s)), e) {
                var r = t.v;
                t.hasImmunity("velocity") || r.add(n.mult(.5 * i), r), t.hasImmunity("position") || (s.set(o), o.add(r.mult(i), o))
            } else 
                this.pOldCopy.set(s), t.hasImmunity("position") || (this.dragVector.set(this.diff.mult(this.drag)), s.set(o), o.add(n.mult(i * i), o), o.add(this.dragVector, o))
        }, s.prototype.integrateVelocity = function(t, i, e) {
            var s = t.p, o = t.a;
            if (e) {
                var n = t.v;
                n.add(o.mult(.5 * i), n), s.add(n.mult(i), s)
            } else 
                s.add(o.mult(i * i), s)
        }, s.prototype.integratePosition = function(t) {
            var i = t.p, e = t.pOld, s = this.pOldCopy;
            s.set(e), e.set(i), i.add(i.sub(s).mult(this.drag), i)
        }, e.exports = s
    }), define("famous-physics/math/Random", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i) {
            return t + Math.random() * (i - t)
        }
        function o(t, i) {
            return Math.floor(t + Math.random() * (i - t + 1))
        }
        e.exports = {
            integer: function(t, i, e) {
                if (t = void 0 !== t ? t : 0, i = void 0 !== i ? i : 1, void 0 !== e) {
                    for (var s = [], n = 0; e > n; n++)
                        s.push(o(t, i));
                    return s
                }
                return o(t, i)
            },
            range: function(t, i, e) {
                if (t = void 0 !== t ? t : 0, i = void 0 !== i ? i : 1, void 0 !== e) {
                    for (var o = [], n = 0; e > n; n++)
                        o.push(s(t, i));
                    return o
                }
                return s(t, i)
            },
            sign: function(t) {
                return t = void 0 !== t ? t : .5, Math.random() < t ? 1 : -1
            },
            bool: function(t) {
                return t = void 0 !== t ? t : .5, Math.random() < t
            }
        }
    }), define("famous-physics/PhysicsEngine", ["require", "exports", "module", "famous-physics/bodies/Particle", "famous-physics/bodies/Body", "famous-physics/bodies/Circle", "famous-physics/bodies/Rectangle", "famous-physics/forces/Force", "famous-physics/constraints/Constraint", "famous-physics/integrator/SymplecticEuler"], function(t, i, e) {
        function s(t) {
            this.opts = {
                speed: 1,
                steps: 1,
                velocityCap: 1 / 0,
                angularVelocityCap: 1 / 0,
                constraintSteps: 1,
                constraintTolerance: 1e-4
            }, t && this.setOpts(t), this._particles = [], this._agents = {}, this._forces = [], this._constraints = [], this._playing=!0, this._buffer = 0, this._timestep = 1e3 / 60 / this.opts.steps, this._prevTime = void 0, this._currTime = void 0, this._integrator = new E({
                velocityCap: this.opts.velocityCap,
                angularVelocityCap: this.opts.angularVelocityCap
            }), this._currAgentId = 0, this.BODIES = s.BODIES
        }
        function o() {
            return Date.now()
        }
        function n(t, i, e) {
            return void 0 === i && (i = this.getParticles()), i instanceof Array || (i = [i]), this._agents[this._currAgentId] = {
                agent: t,
                targets: i,
                source: e
            }, r.call(this, t).push(this._currAgentId), this._currAgentId++
        }
        function r(t) {
            return t instanceof C ? this._forces : t instanceof M ? this._constraints : void 0
        }
        function a(t) {
            return this._agents[t]
        }
        function h(t) {
            var i = a.call(this, this._forces[t]);
            i.agent.applyForce(i.targets, i.source)
        }
        function u(t, i) {
            var e = this._agents[this._constraints[t]];
            return e.agent.applyConstraint(e.targets, e.source, i)
        }
        function c() {
            for (var t = this._forces.length-1; t>-1; t--)
                h.call(this, t)
        }
        function p(t) {
            var i = 1 / 0, e = 0;
            for (this.opts.constraintTolerance; e < this.opts.constraintSteps;) {
                i = 0;
                for (var s = this._constraints.length-1; s>-1; s--)
                    i += u.call(this, s, t);
                e++
            }
        }
        function l(t, i) {
            t.hasImmunity(O.IMMUNITIES.UPDATE) || this._integrator.integrateVelocity(t, i)
        }
        function f(t) {
            t.hasImmunity(O.IMMUNITIES.ROTATION) || t instanceof T && t.updateAngularVelocity()
        }
        function d(t, i) {
            t.hasImmunity(O.IMMUNITIES.ROTATION) || t instanceof T && this._integrator.integrateAngularMomentum(t, i)
        }
        function m(t, i) {
            t.hasImmunity(O.IMMUNITIES.UPDATE) || this._integrator.integratePosition(t, i)
        }
        function v(t, i) {
            t.hasImmunity(O.IMMUNITIES.ROTATION) || t instanceof T && this._integrator.integrateOrientation(t, i)
        }
        function y(t) {
            this.forEachParticle(l, t)
        }
        function g(t) {
            this.forEachParticle(m, t)
        }
        function S() {
            this.forEachParticle(f)
        }
        function _(t) {
            this.forEachParticle(d, t)
        }
        function w(t) {
            this.forEachParticle(v, t)
        }
        function x(t) {
            c.call(this), y.call(this, t), _.call(this, t), S.call(this, t), p.call(this, t), g.call(this, t), w.call(this, t)
        }
        var O = t("famous-physics/bodies/Particle"), T = t("famous-physics/bodies/Body"), I = t("famous-physics/bodies/Circle"), b = t("famous-physics/bodies/Rectangle"), C = t("famous-physics/forces/Force"), M = t("famous-physics/constraints/Constraint"), E = t("famous-physics/integrator/SymplecticEuler");
        s.BODIES = {
            POINT: O,
            BODY: T,
            CIRCLE: I,
            RECTANGLE: b
        }, s.prototype.setOpts = function(t) {
            for (var i in t)
                this.opts[i] && (this.opts[i] = t[i])
        }, s.prototype.addBody = function(t) {
            return this._particles.push(t), t
        }, s.prototype.createParticle = function(t) {
            return this.addBody(new O(t))
        }, s.prototype.createBody = function(t) {
            var i = t.shape || s.BODIES.POINT;
            return this.addBody(new i(t))
        }, s.prototype.remove = function(t) {
            var i = this._particles.indexOf(t);
            if (i>-1) {
                for (var e = 0; e < Object.keys(this._agents); e++)
                    this.detachFrom(e, t);
                this._particles.splice(i, 1)
            }
        }, s.prototype.attach = function(t, i, e) {
            if (t instanceof Array) {
                for (var s = [], o = 0; o < t.length; o++)
                    s[o] = n.call(this, t[o], i, e);
                return s
            }
            return n.call(this, t, i, e)
        }, s.prototype.attachTo = function(t, i) {
            a.call(this, t).targets.push(i)
        }, s.prototype.detach = function(t) {
            var i = this.getAgent(t), e = r.call(this, i), s = e.indexOf(t);
            e.splice(s, 1), delete this._agents[t]
        }, s.prototype.detachFrom = function(t, i) {
            var e = a.call(this, t);
            if (e.source === i)
                this.detach(t);
            else {
                var s = e.targets, o = s.indexOf(i);
                o>-1 && s.splice(o, 1)
            }
        }, s.prototype.detachAll = function() {
            this._agents = {}, this._forces = [], this._constraints = [], this._currAgentId = 0
        }, s.prototype.getAgent = function(t) {
            return a.call(this, t).agent
        }, s.prototype.getParticles = function() {
            return this._particles
        }, s.prototype.getParticlesExcept = function(t) {
            var i = [];
            return this.forEachParticle(function(e) {
                -1 === t.indexOf(e) && i.push(e)
            }), i
        }, s.prototype.getPos = function(t) {
            return (t || this._particles[0]).getPos()
        }, s.prototype.getVel = function(t) {
            return (t || this._particles[0]).getVel()
        }, s.prototype.getTransform = function(t) {
            return (t || this._particles[0]).getTransform()
        }, s.prototype.setPos = function(t, i) {
            (i || this._particles[0]).setPos(t)
        }, s.prototype.setVel = function(t, i) {
            (i || this._particles[0]).setVel(t)
        }, s.prototype.forEachParticle = function(t, i) {
            for (var e = this.getParticles(), s = 0, o = e.length; o > s; s++)
                t.call(this, e[s], i)
        }, s.prototype.step = function() {
            if (this._playing) {
                this._prevTime || (this._prevTime = o()), this._currTime = o();
                var t = this._currTime - this._prevTime;
                this._prevTime = this._currTime, 0 != t && x.call(this, this.opts.speed * this._timestep)
            }
        }, s.prototype.render = function(t) {
            this.step();
            var i = [];
            return this.forEachParticle(function(e) {
                i.push(e.render(t))
            }), i
        }, s.prototype.play = function() {
            this._prevTime = o(), this._playing=!0
        }, s.prototype.pause = function() {
            this._playing=!1
        }, s.prototype.toggle = function() {
            this._playing ? this.pause() : this.play()
        }, s.prototype.reverseTime = function() {
            this.opts.speed*=-1
        }, s.prototype.reverseVelocities = function() {
            this.forEachParticle(function(t) {
                t.v.mult(-1, t.v)
            })
        }, e.exports = s
    }), define("famous-physics/utils/PhysicsTransition", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/constraints/StiffSpring", "famous-physics/constraints/Wall", "famous-physics/math/Vector"], function(t, i, e) {
        function s(t) {
            this.defaultDefinition = {
                spring: {
                    period: 300,
                    dampingRatio: .5
                },
                v: 0,
                wall: !1
            }, t = t || 0, this._anchor = new g(t, 0, 0), this.endState = t, this.prevState = void 0, this.direction = void 0, this.atRest=!0, this.spring = new v({
                anchor: this._anchor
            }), this.wall = new y({
                restitution: .5,
                k: 0,
                n: new g(-1,
                0,
                0)
            }), this.attachedWall = void 0, this.PE = new m, this.particle = this.PE.createParticle({
                p: [t, 0, 0]
            }), this.attachedSpring = this.PE.attach(this.spring, this.particle)
        }
        function o() {
            if (!this.atRest) {
                this.PE.step();
                var t = n.call(this);
                S > t && (this.atRest=!0, c.call(this, this.endState), this.callback && this.callback())
            }
        }
        function n() {
            return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
        }
        function r(t) {
            this.spring.setOpts(t.spring), p.call(this, t.v), t.wall ? h.call(this) : u.call(this)
        }
        function a(t) {
            this.prevState = this.endState, this.endState = t, this.direction = this.endState - this.prevState > 0 ? 1 : this.endState < 0?-1 : 0, void 0 !== this.attachedSpring && (this._anchor.x = t), void 0 !== this.attachedWall && this.wall.setOpts({
                d: Math.abs(t),
                n: [ - this.direction, 0, 0]
            }), p.call(this, this.direction * f.call(this))
        }
        function h() {
            this.attachedWall = this.PE.attach(this.wall, this.particle)
        }
        function u() {
            void 0 !== this.attachedWall && this.PE.detach(this.attachedWall)
        }
        function c(t) {
            this.particle.p.x = t
        }
        function p(t) {
            this.particle.v.x = t
        }
        function l() {
            return this.particle.p.x
        }
        function f() {
            return this.particle.v.x
        }
        function d(t) {
            this.callback = t
        }
        var m = t("famous-physics/PhysicsEngine"), v = t("famous-physics/constraints/StiffSpring"), y = t("famous-physics/constraints/Wall"), g = t("famous-physics/math/Vector");
        s.forceFunctions = v.forceFunctions;
        var S = 1e-5;
        s.prototype.reset = function(t, i) {
            t = t || 0, i = i || 0, this.prevState = void 0, c.call(this, t), p.call(this, i), a.call(this, t), d.call(this, void 0)
        }, s.prototype.getVelocity = function() {
            return o.call(this), f.call(this)
        }, s.prototype.halt = function() {
            this.set(this.get())
        }, s.prototype.get = function() {
            return o.call(this), l.call(this)
        }, s.prototype.set = function(t, i, e) {
            return i ? (this.atRest=!1, r.call(this, i), a.call(this, t), d.call(this, e), void 0) : (this.reset(t), e && e(), void 0)
        }, e.exports = s
    }), define("famous-physics/utils/PhysicsTransition2", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/constraints/StiffSpring", "famous-physics/forces/VectorField", "famous-physics/constraints/Wall", "famous-physics/math/Vector", "famous/EventHandler"], function(t, i, e) {
        function s(t) {
            t = t || 0, this.endState = t, this.prevState = void 0, this.direction = void 0, this.defaultDefinition = {
                transition: {
                    curve: {
                        v: 1,
                        thrust: 0
                    },
                    duration: 500
                },
                bounce: {
                    period: 0,
                    dampingRatio: 0
                },
                walls: !1
            }, this._anchor = new I(t, 0, 0), this.stageOneActive=!1, this.attachedSpring = void 0, this.attachedWall = void 0, this.attachedThrust = void 0, this.eventHandler = new b, this.eventHandler.on("initStageTwo", v.bind(this)), this.PE = new w, this.particle = this.PE.createBody({
                p: [t, 0, 0],
                v: [0, 0, 0]
            }), this.spring = new x({
                anchor: this._anchor
            }), this.thrust = new O({
                strength: 0,
                field: O.FIELDS.CONSTANT,
                direction: [1, 0, 0]
            }), this.wall = new T({
                restitution: .5,
                k: 0,
                n: new I(-1,
                0,
                0)
            })
        }
        function o() {
            return this.particle.p.x <= this.endState ? 1 : -1
        }
        function n(t) {
            this.direction = t
        }
        function r() {
            1 == this.stageOneActive && this.direction != o.call(this) && this.eventHandler.emit("initStageTwo")
        }
        function a(t) {
            var i, e, o = t.transition.duration, n = t.transition.curve;
            "string" == typeof n && (n = s.TRANSITIONS[n]), e = this.direction * n.v, i = this.direction * n.thrust;
            var r = this.endState - this.particle.p.x;
            if (0 == o)
                this.v = e || 0, this.a = 0;
            else {
                var a;
                0 == i ? a = r / (e * o) : (0 > e * e + 2 * i * r && console.warn("unphysical choices for (v,a), target cannot be reached"), a = r > 0 ? ( - e + Math.sqrt(e * e + 2 * i * r)) / (i * o) : ( - e - Math.sqrt(e * e + 2 * i * r)) / (i * o)), this.v = a * e, this.a = a * a * i
            }
            var h = t.bounce;
            "string" == typeof h && (h = s.BOUNCE[h]), this.spring.setOpts({
                period: h.period,
                dampingRatio: h.dampingRatio
            }), this.wallsActive = t.walls
        }
        function h(t) {
            this.prevState = this.endState, this.endState = t, n.call(this, o.call(this))
        }
        function u(t) {
            void 0 === this.attachedSpring && (this._anchor.x = t, this.attachedSpring = this.PE.attach(this.spring, this.particle))
        }
        function c() {
            void 0 !== this.attachedSpring && (this.PE.detach(this.attachedSpring, this.particle), this.attachedSpring = void 0)
        }
        function p(t, i) {
            this.wallsActive && (this.wall.setOpts({
                d: Math.abs(t),
                n: [ - i, 0, 0]
            }), this.attachedWall = this.PE.attach(this.wall, this.particle))
        }
        function l() {
            void 0 !== this.attachedWall && (this.PE.detach(this.attachedWall, this.particle), this.attachedWall = void 0)
        }
        function f(t) {
            this.thrust.setOpts({
                strength: t
            }), this.attachedThrust = this.PE.attach(this.thrust, this.particle)
        }
        function d() {
            void 0 !== this.attachedThrust && (this.PE.detach(this.attachedThrust), this.attachedThrust = void 0)
        }
        function m() {
            this.stageOneActive=!0, c.call(this), d.call(this), l.call(this), f.call(this, this.a), y.call(this, this.v), C = Date.now()
        }
        function v() {
            console.log("Duration : ", Date.now() - C), this.stageOneActive=!1, d.call(this), g.call(this, this.endState), u.call(this, this.endState), p.call(this, this.endState, this.direction)
        }
        function y(t) {
            this.particle.v.x = t
        }
        function g(t) {
            this.particle.p.x = t
        }
        function S(t) {
            this.spring.setOpts({
                callback: t
            })
        }
        function _() {
            this.PE.step(), r.call(this)
        }
        var w = t("famous-physics/PhysicsEngine"), x = t("famous-physics/constraints/StiffSpring"), O = t("famous-physics/forces/VectorField"), T = t("famous-physics/constraints/Wall"), I = t("famous-physics/math/Vector"), b = t("famous/EventHandler");
        s.TRANSITIONS = {
            linear: {
                v: 1,
                thrust: 0
            },
            easeIn: {
                v: 0,
                thrust: 2
            },
            backIn: {
                v: -1,
                thrust: 2
            }
        }, s.BOUNCE = {
            none: {
                dampingRatio: 0,
                period: 0
            },
            low: {
                dampingRatio: .5,
                period: 300
            },
            medium: {
                dampingRatio: .3,
                period: 600
            },
            high: {
                dampingRatio: .1,
                period: 800
            }
        };
        var C;
        s.forceFunctions = x.forceFunctions, s.prototype.reset = function(t, i) {
            i = i || 0, t = t || 0, this.PE.detachAll(), g.call(this, t), y.call(this, i), S.call(this, void 0)
        }, s.prototype.set = function(t, i, e) {
            return i ? (h.call(this, t), a.call(this, i), S.call(this, e), m.call(this), void 0) : (this.reset(t), e && e(), void 0)
        }, s.prototype.get = function() {
            return _.call(this), this.particle.p.x
        }, s.prototype.getVelocity = function() {
            return _.call(this), this.particle.v.x
        }, s.prototype.getTarget = function() {
            return this.endState
        }, e.exports = s
    }), define("famous-physics/utils/SpringTransition", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/forces/Spring", "famous-physics/math/Vector"], function(t, i, e) {
        function s(t) {
            t = t || 0, this._anchor = new m(t, 0, 0), this.endState = t, this.prevState = void 0, this.atRest=!0, this.spring = new d({
                anchor: this._anchor
            }), this.PE = new f, this.particle = this.PE.createParticle({
                p: [t, 0, 0]
            }), this.PE.attach(this.spring, this.particle)
        }
        function o() {
            if (!this.atRest) {
                this.PE.step();
                var t = n.call(this);
                v > t && (this.atRest=!0, h.call(this, this.endState), this.callback && this.callback())
            }
        }
        function n() {
            return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
        }
        function r(t) {
            var i = s.DEFAULT_OPTIONS;
            void 0 === t.period && (t.period = i.period), void 0 === t.dampingRatio && (t.dampingRatio = i.dampingRatio), void 0 === t.velocity && (t.velocity = i.velocity), t.period < 150 && console.warn("period may be unstable, increase the period or use a stiff transition"), this.spring.setOpts({
                period: t.period,
                dampingRatio: t.dampingRatio
            }), u.call(this, t.velocity)
        }
        function a(t) {
            this.prevState = this.endState, this.endState = t;
            var i;
            i = this.endState - this.prevState > 0 ? 1 : this.endState < 0?-1 : 0, this._anchor.x = t, u.call(this, i * p.call(this))
        }
        function h(t) {
            this.particle.p.x = t
        }
        function u(t) {
            this.particle.v.x = t
        }
        function c() {
            return this.particle.p.x
        }
        function p() {
            return this.particle.v.x
        }
        function l(t) {
            this.callback = t
        }
        var f = t("famous-physics/PhysicsEngine"), d = t("famous-physics/forces/Spring"), m = t("famous-physics/math/Vector");
        s.DEFAULT_OPTIONS = {
            period: 300,
            dampingRatio: .5,
            velocity: 0
        }, s.forceFunctions = d.forceFunctions;
        var v = 1e-5;
        s.prototype.reset = function(t, i) {
            t = t || 0, i = i || 0, this.prevState = void 0, h.call(this, t), u.call(this, i), a.call(this, t), l.call(this, void 0)
        }, s.prototype.getVelocity = function() {
            return o.call(this), p.call(this)
        }, s.prototype.halt = function() {
            this.set(this.get())
        }, s.prototype.get = function() {
            return o.call(this), c.call(this)
        }, s.prototype.set = function(t, i, e) {
            return i ? (this.atRest=!1, r.call(this, i), a.call(this, t), l.call(this, e), void 0) : (this.reset(t), e && e(), void 0)
        }, e.exports = s
    }), define("famous-physics/utils/StiffSpringTransition", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/constraints/StiffSpring", "famous-physics/math/Vector"], function(t, i, e) {
        function s(t) {
            t = t || 0, this._anchor = new m(t, 0, 0), this.endState = t, this.prevState = void 0, this.atRest=!0, this.spring = new d({
                anchor: this._anchor
            }), this.PE = new f, this.particle = this.PE.createParticle({
                p: [t, 0, 0]
            }), this.PE.attach(this.spring, this.particle)
        }
        function o() {
            if (!this.atRest) {
                this.PE.step();
                var t = n.call(this);
                v > t && (this.atRest=!0, h.call(this, this.endState), this.callback && this.callback())
            }
        }
        function n() {
            return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
        }
        function r(t) {
            var i = s.DEFAULT_OPTIONS;
            void 0 === t.period && (t.period = i.period), void 0 === t.dampingRatio && (t.dampingRatio = i.dampingRatio), void 0 === t.velocity && (t.velocity = i.velocity), this.spring.setOpts({
                period: t.period,
                dampingRatio: t.dampingRatio
            }), u.call(this, t.velocity)
        }
        function a(t) {
            this.prevState = this.endState, this.endState = t;
            var i;
            i = this.endState - this.prevState > 0 ? 1 : this.endState < 0?-1 : 0, this._anchor.x = t, u.call(this, i * p.call(this))
        }
        function h(t) {
            this.particle.p.x = t
        }
        function u(t) {
            this.particle.v.x = t
        }
        function c() {
            return this.particle.p.x
        }
        function p() {
            return this.particle.v.x
        }
        function l(t) {
            this.callback = t
        }
        var f = t("famous-physics/PhysicsEngine"), d = t("famous-physics/constraints/StiffSpring"), m = t("famous-physics/math/Vector");
        s.DEFAULT_OPTIONS = {
            period: 300,
            dampingRatio: .5,
            velocity: 0
        }, s.forceFunctions = d.forceFunctions;
        var v = 1e-5;
        s.prototype.reset = function(t, i) {
            t = t || 0, i = i || 0, this.prevState = void 0, h.call(this, t), u.call(this, i), a.call(this, t), l.call(this, void 0)
        }, s.prototype.getVelocity = function() {
            return o.call(this), p.call(this)
        }, s.prototype.halt = function() {
            this.set(this.get())
        }, s.prototype.get = function() {
            return o.call(this), c.call(this)
        }, s.prototype.set = function(t, i, e) {
            return i ? (this.atRest=!1, r.call(this, i), a.call(this, t), l.call(this, e), void 0) : (this.reset(t), e && e(), void 0)
        }, e.exports = s
    }), define("famous-physics/utils/WallTransition", ["require", "exports", "module", "famous-physics/PhysicsEngine", "famous-physics/forces/Spring", "famous-physics/constraints/Wall", "famous-physics/math/Vector"], function(t, i, e) {
        function s(t) {
            t = t || 0, this._anchor = new v(t, 0, 0), this.endState = t, this.prevState = void 0, this.atRest=!0, this.spring = new d({
                anchor: this._anchor
            }), this.wall = new m, this.PE = new f, this.particle = this.PE.createParticle({
                p: [t, 0, 0]
            }), this.PE.attach(this.spring, this.particle), this.PE.attach(this.wall, this.particle)
        }
        function o() {
            if (!this.atRest) {
                this.PE.step();
                var t = n.call(this);
                y > t && (this.atRest=!0, h.call(this, this.endState), this.callback && this.callback())
            }
        }
        function n() {
            return this.particle.getEnergy() + this.spring.getEnergy(this.particle)
        }
        function r(t) {
            var i = s.DEFAULT_OPTIONS;
            void 0 === t.period && (t.period = i.period), void 0 === t.dampingRatio && (t.dampingRatio = i.dampingRatio), void 0 === t.velocity && (t.velocity = i.velocity), void 0 === t.restitution && (t.restitution = i.restitution), this.spring.setOpts({
                period: t.period,
                dampingRatio: t.dampingRatio
            }), this.wall.setOpts({
                restitution: t.restitution
            }), u.call(this, t.velocity)
        }
        function a(t) {
            this.prevState = this.endState, this.endState = t;
            var i;
            i = this.endState - this.prevState > 0 ? 1 : this.endState < 0?-1 : 0, this._anchor.x = t, this.wall.setOpts({
                d: Math.abs(t),
                n: [ - i, 0, 0]
            }), u.call(this, i * p.call(this))
        }
        function h(t) {
            this.particle.p.x = t
        }
        function u(t) {
            this.particle.v.x = t
        }
        function c() {
            return this.particle.p.x
        }
        function p() {
            return this.particle.v.x
        }
        function l(t) {
            this.callback = t
        }
        var f = t("famous-physics/PhysicsEngine"), d = t("famous-physics/forces/Spring"), m = t("famous-physics/constraints/Wall"), v = t("famous-physics/math/Vector");
        s.DEFAULT_OPTIONS = {
            period: 300,
            dampingRatio: 0,
            restitution: .4,
            velocity: 0
        }, s.forceFunctions = d.forceFunctions;
        var y = 1e-5;
        s.prototype.reset = function(t, i) {
            t = t || 0, i = i || 0, this.prevState = void 0, h.call(this, t), u.call(this, i), a.call(this, t), l.call(this, void 0)
        }, s.prototype.getVelocity = function() {
            return o.call(this), p.call(this)
        }, s.prototype.halt = function() {
            this.set(this.get())
        }, s.prototype.get = function() {
            return o.call(this), c.call(this)
        }, s.prototype.set = function(t, i, e) {
            return i ? (this.atRest=!1, r.call(this, i), a.call(this, t), l.call(this, e), void 0) : (this.reset(t), e && e(), void 0)
        }, e.exports = s
    }), define("famous-sync/FastClick", ["require", "exports", "module"], function() {
        if (window.CustomEvent) {
            var t = 300, i = {};
            document.addEventListener("touchstart", function(t) {
                for (var e = Date.now(), s = 0; s < t.changedTouches.length; s++) {
                    var o = t.changedTouches[s];
                    i[o.identifier] = e
                }
            }), window.addEventListener("touchmove", function(t) {
                for (var e = 0; e < t.changedTouches.length; e++) {
                    var s = t.changedTouches[e];
                    delete i[s.identifier]
                }
            }), document.addEventListener("touchend", function(e) {
                for (var s = Date.now(), o = 0; o < e.changedTouches.length; o++) {
                    var n = e.changedTouches[o], r = i[n.identifier];
                    if (r && t > s - r) {
                        e.preventDefault();
                        var a = new CustomEvent("click", {
                            bubbles: !0,
                            details: n
                        });
                        e.target.dispatchEvent(a)
                    }
                    delete i[n.identifier]
                }
            })
        }
    }), define("famous-sync/TwoFingerSync", ["require", "exports", "module", "famous/EventHandler"], function(t, i, e) {
        function s(t, i) {
            this.targetGet = t, this.options = {
                scale: 1
            }, i ? this.setOptions(i) : this.setOptions(this.options), this.input = new o, this.output = new o, o.setInputHandler(this, this.input), o.setOutputHandler(this, this.output), this.touchAId = void 0, this.posA = void 0, this.timestampA = void 0, this.touchBId = void 0, this.posB = void 0, this.timestampB = void 0, this.input.on("touchstart", this.handleStart.bind(this)), this.input.on("touchmove", this.handleMove.bind(this)), this.input.on("touchend", this.handleEnd.bind(this)), this.input.on("touchcancel", this.handleEnd.bind(this))
        }
        var o = t("famous/EventHandler");
        s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.scale && (this.options.scale = t.scale)
        }, s.prototype.handleStart = function(t) {
            for (var i = 0; i < t.changedTouches.length; i++) {
                var e = t.changedTouches[i];
                this.touchAId ? this.touchBId || (this.touchBId = e.identifier, this.posB = [e.pageX, e.pageY], this.timestampB = Date.now(), this._startUpdate()) : (this.touchAId = e.identifier, this.posA = [e.pageX, e.pageY], this.timestampA = Date.now())
            }
        }, s.prototype.handleMove = function(t) {
            if (this.touchAId && this.touchBId) {
                for (var i, e = this.timestampA, s = this.timestampB, o = 0; o < t.changedTouches.length; o++) {
                    var n = t.changedTouches[o];
                    n.identifier == this.touchAId ? (this.posA = [n.pageX, n.pageY], this.timestampA = Date.now(), i = this.timestampA - e) : n.identifier == this.touchBId && (this.posB = [n.pageX, n.pageY], this.timestampB = Date.now(), i = this.timestampB - s)
                }
                i && this._moveUpdate(i)
            }
        }, s.prototype.handleEnd = function(t) {
            for (var i = this.targetGet(), e = this.options.scale, s = 0; s < t.changedTouches.length; s++) {
                var o = t.changedTouches[s];
                (o.identifier == this.touchAId || o.identifier == this.touchBId) && (this.touchAId && this.touchBId && this.output.emit("end", {
                    p: i,
                    v: e * this._vel,
                    touches: [this.touchAId, this.touchBId],
                    angle: this._angle
                }), this.touchAId = void 0, this.touchBId = void 0)
            }
        }, e.exports = s
    }), define("famous-sync/PinchSync", ["require", "exports", "module", "./TwoFingerSync"], function(t, i, e) {
        function s(t, i) {
            n.call(this, t, i), this._dist = void 0
        }
        function o(t, i) {
            var e = i[0] - t[0], s = i[1] - t[1];
            return Math.sqrt(e * e + s * s)
        }
        var n = t("./TwoFingerSync");
        s.prototype = Object.create(n.prototype), s.prototype._startUpdate = function() {
            this._dist = o(this.posA, this.posB), this._vel = 0, this.output.emit("start", {
                count: event.touches.length,
                touches: [this.touchAId, this.touchBId],
                distance: this._dist
            })
        }, s.prototype._moveUpdate = function(t) {
            var i = o(this.posA, this.posB), e = i - this._dist, s = e / t, n = this.targetGet(), r = this.options.scale;
            this.output.emit("update", {
                p: n + r * e,
                v: r * s,
                touches: [this.touchAId, this.touchBId],
                distance: i
            }), this._dist = i, this._vel = s
        }, e.exports = s
    }), define("famous-sync/RotateSync", ["require", "exports", "module", "./TwoFingerSync"], function(t, i, e) {
        function s(t, i) {
            n.call(this, t, i), this._angle = void 0
        }
        function o(t, i) {
            var e = i[0] - t[0], s = i[1] - t[1];
            return Math.atan2(s, e)
        }
        var n = t("./TwoFingerSync");
        s.prototype = Object.create(n.prototype), s.prototype._startUpdate = function() {
            this._angle = o(this.posA, this.posB), this._vel = 0, this.output.emit("start", {
                count: event.touches.length,
                touches: [this.touchAId, this.touchBId],
                angle: this._angle
            })
        }, s.prototype._moveUpdate = function(t) {
            var i = o(this.posA, this.posB), e = i - this._angle, s = e / t, n = this.targetGet(), r = this.options.scale;
            this.output.emit("update", {
                p: n + r * e,
                v: r * s,
                touches: [this.touchAId, this.touchBId],
                angle: i
            }), this._angle = i, this._vel = s
        }, e.exports = s
    }), define("famous-sync/ScaleSync", ["require", "exports", "module", "./TwoFingerSync"], function(t, i, e) {
        function s(t, i) {
            r.call(this, t, i), this._startDist = void 0, this._prevScale = void 0, this.input.on("pipe", n.bind(this))
        }
        function o(t, i) {
            var e = i[0] - t[0], s = i[1] - t[1];
            return Math.sqrt(e * e + s * s)
        }
        function n() {
            this.touchAId = void 0, this.touchBId = void 0
        }
        var r = t("./TwoFingerSync");
        s.prototype = Object.create(r.prototype), s.prototype._startUpdate = function() {
            this._prevScale = 1, this._startDist = o(this.posA, this.posB), this._vel = 0, this.output.emit("start", {
                count: event.touches.length,
                touches: [this.touchAId, this.touchBId],
                distance: this._startDist
            })
        }, s.prototype._moveUpdate = function(t) {
            var i = o(this.posA, this.posB), e = i / this._startDist, s = e - this._prevScale, n = s / t, r = this.targetGet(), a = this.options.scale;
            this.output.emit("update", {
                p: r + a * s,
                v: a * n,
                touches: [this.touchAId, this.touchBId],
                distance: i
            }), this._prevScale = e, this._vel = n
        }, e.exports = s
    }), define("famous-utils/FormatTime", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i) {
            var e = t.toString().match(/(\d+)/g), s = new Date(e[0], e[1]-1, e[2], e[3], e[4], e[5], 0), r = new Date, a = .001 * (r.getTime() - s.getTime()), h = parseInt(a / 60, 10), u = parseInt(h / 60, 10), c = parseInt(u / 24, 10), p = o(s), l = 10, f = "";
            return 720 > h ? 60 > h ? 2 > h ? (f = "just now", l = 1, [f, l]) : 30 > h ? (f = h + " minutes ago", l = 2, [f, l]) : 40 > h ? (f = "about a half hour ago", l = 2, [f, l]) : 50 > h ? (f = "about 45 minutes ago", l = 3, [f, l]) : (f = "about an hour ago", l = 4, [f, l]) : (f = 1 == i ? p[6] + ":" + p[7] + p[8] : "earlier today at " + p[6] + ":" + p[7] + p[8], l = 5, [f, l]) : 1440 > h ? (f = "yesterday at " + p[6] + ":" + p[7] + p[8], l = 6, [f, l]) : c >= 1 && 2 >= c ? (f = "yesterday at " + p[6] + ":" + p[7] + p[8], l = 7, [f, l]) : 6 > c ? (f = p[0] + " at " + p[6] + ":" + p[7] + p[8], l = 8, [f, l]) : 30 > c ? (f = 1 == i ? p[3] + "/" + p[1] + " at " + p[6] + ":" + p[7] + p[8] : p[4] + " " + p[1] + p[2] + " around " + p[6] + p[8], l = 9, [f, l]) : (f = n(p, r), l = 10, [f, l])
        }
        function o(t) {
            var i = t.getDate(), e = t.getDay(), s = t.getMonth() + 1, o = t.getFullYear(), n = t.getHours(), r = t.getMinutes().toString(), a = 12 > n ? "am": "pm";
            r.length < 2 && (r = "0" + r);
            var h = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], u = {
                1: "st",
                2: "nd",
                3: "rd",
                4: "th",
                5: "th",
                6: "th",
                7: "th",
                8: "th",
                9: "th",
                10: "th",
                11: "th",
                12: "th",
                13: "th",
                14: "th",
                15: "th",
                16: "th",
                17: "th",
                18: "th",
                19: "th",
                20: "th",
                21: "st",
                22: "nd",
                23: "rd",
                24: "th",
                25: "th",
                26: "th",
                27: "th",
                28: "th",
                29: "th",
                30: "th",
                31: "st"
            }, c = {
                1: "Jan",
                2: "Feb",
                3: "Mar",
                4: "April",
                5: "May",
                6: "June",
                7: "July",
                8: "Aug",
                9: "Sep",
                10: "Oct",
                11: "Nov",
                12: "Dec"
            };
            return 0 === n && (n = 12), n > 12 && (n -= 12), [h[e], i, u[i], s, c[s], o, n, r, a]
        }
        function n(t, i) {
            i ? i : new Date;
            var e = i.getFullYear() === t[5] ? t[4] + " " + t[1] + t[2]: t[4] + " " + t[1] + t[2] + " " + t[5];
            return e
        }
        e.exports = s
    }), define("famous-utils/KeyCodes", ["require", "exports", "module"], function(t, i, e) {
        var s = {
            0: 48,
            1: 49,
            2: 50,
            3: 51,
            4: 52,
            5: 53,
            6: 54,
            7: 55,
            8: 56,
            9: 57,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            a: 97,
            b: 98,
            c: 99,
            d: 100,
            e: 101,
            f: 102,
            g: 103,
            h: 104,
            i: 105,
            j: 106,
            k: 107,
            l: 108,
            m: 109,
            n: 110,
            o: 111,
            p: 112,
            q: 113,
            r: 114,
            s: 115,
            t: 116,
            u: 117,
            v: 118,
            w: 119,
            x: 120,
            y: 121,
            z: 122,
            ENTER: 13,
            LEFT_ARROW: 37,
            RIGHT_ARROW: 39,
            UP_ARROW: 38,
            DOWN_ARROW: 40,
            SPACE: 32,
            SHIFT: 16,
            TAB: 9
        };
        e.exports = s
    }), define("famous-utils/NoiseImage", ["require", "exports", "module"], function(t, i, e) {
        function s(t, i, e) {
            t || (t = [128, 128]), i || (i = 8), o.width = t[0], o.height = t[1];
            var s = i>>1, r = o.width / i, a = i * i>>1, h = 1 / s;
            u(e), n.fillRect(0, 0, t[0], t[1]), u(e);
            for (var c, p, l = 0; a > l; l++)
                Math.random() + .5>>0 && (p = l * h>>0, c = l - s * p, n.fillRect(c * r, p * r, r, r), n.fillRect((i - (c + 1)) * r, p * r, r, r));
            var f = o.toDataURL("image/png");
            return f
        }
        var o = document.createElement("canvas"), n = o.getContext("2d"), r = function(t) {
            var i = 361 * Math.random()>>0, e = t ? 360 * .125 * t - (46 * Math.random()>>0): i;
            return e
        }, a = function() {
            return 30 + 71 * Math.random()>>0
        }, h = function() {
            return 30 + 71 * Math.random()>>0
        }, u = function(t) {
            n.fillStyle = "hsl(" + r(t) + "," + a() + "%," + h() + "%)"
        };
        e.exports = {
            generate: s
        }
    }), define("famous-utils/Time", ["require", "exports", "module", "famous/Engine"], function(t, i, e) {
        function s(t, i) {
            var e = Date.now(), s = function() {
                var s = Date.now();
                s - e >= i && (t(), e = Date.now())
            };
            return h.on("prerender", s), s
        }
        function o(t) {
            h.unbind("prerender", t)
        }
        function n(t, i, e) {
            var s = Date.now(), o = function() {
                var n = Date.now(), r = (n - s) / t;
                return n - s >= t ? (i(1), h.unbind("prerender", o), e && e(), void 0) : (i(r), void 0)
            };
            h.on("prerender", o)
        }
        function r(t, i) {
            var e = Date.now(), s = function() {
                var o = Date.now();
                return o - e >= i ? (h.unbind("prerender", s), t(), void 0) : void 0
            };
            return h.on("prerender", s), s
        }
        function a(t) {
            h.unbind("prerender", t)
        }
        var h = t("famous/Engine");
        e.exports = {
            setInterval: s,
            removeInterval: o,
            executeOver: n,
            setTimeout: r,
            removeTimeout: a
        }
    }), define("famous-utils/TimeAgo", ["require", "exports", "module"], function(t, i, e) {
        function s(t) {
            var i = Date.now(), e = i - t, s = 6e4, o = 60 * s, n = 24 * o;
            if (s > e)
                return "Just Now";
            if (o > e) {
                var r=~~(e / s);
                return r + "m"
            }
            if (n > e) {
                var a=~~(e / o);
                return a + "h"
            }
            var h=~~(e / n);
            return h + "d"
        }
        e.exports = {
            parse: s
        }
    }), define("famous-utils/Utils", ["require", "exports", "module", "./Time", "famous/Matrix"], function(t, i, e) {
        var s = t("./Time"), o = t("famous/Matrix"), n = {
            rad2deg: function(t) {
                return 57.2957795 * t
            },
            deg2rad: function(t) {
                return .0174532925 * t
            },
            distance: function(t, i, e, s) {
                var o = e - t, n = s - i;
                return Math.sqrt(o * o + n * n)
            },
            distance3D: function(t, i, e, s, o, n) {
                var r = s - t, a = o - i, h = n - e;
                return Math.sqrt(r * r + a * a + h * h)
            },
            map: function(t, i, e, s, o, n) {
                var r = (t - i) / (e - i) * (o - s) + s;
                return n && (o > s ? r > o ? r = o : s > r && (r = s) : o > r ? r = o : r > s && (r = s)), r
            },
            limit: function(t, i, e) {
                return t = Math.min(t, e), t = Math.max(t, i)
            },
            perspective: function(t, i, e, s, o) {
                var n = 1 / Math.tan(i / 2), r = 1 / (s - o);
                return t[0] = n / e, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (o + s) * r, t[11] =- 1, t[12] = 0, t[13] = 0, t[14] = 2 * o * s * r, t[15] = 0, t
            },
            ortho: function(t, i, e, s, o, n, r) {
                var a =- (e + i) / (e - i), h =- (o + s) / (o - s), u =- (r + n) / (r - n);
                return t[0] = 2 / (e - i), t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 / (o - s), t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] =- 2 / (r - n), t[11] =- 1, t[12] = a, t[13] = h, t[14] = u, t[15] = 1, t
            },
            normalFromFM: function(t, i) {
                var e = i[0], s = i[1], o = i[2], n = i[3], r = i[4], a = i[5], h = i[6], u = i[7], c = i[8], p = i[9], l = i[10], f = i[11], d = i[12], m = i[13], v = i[14], y = i[15], g = e * a - s * r, S = e * h - o * r, _ = e * u - n * r, w = s * h - o * a, x = s * u - n * a, O = o * u - n * h, T = c * m - p * d, I = c * v - l * d, b = c * y - f * d, C = p * v - l * m, M = p * y - f * m, E = l * y - f * v, F = g * E - S * M + _ * C + w * b - x * I + O * T;
                return F ? (F = 1 / F, t[0] = (a * E - h * M + u * C) * F, t[1] = (h * b - r * E - u * I) * F, t[2] = (r * M - a * b + u * T) * F, t[3] = (o * M - s * E - n * C) * F, t[4] = (e * E - o * b + n * I) * F, t[5] = (s * b - e * M - n * T) * F, t[6] = (m * O - v * x + y * w) * F, t[7] = (v * _ - d * O - y * S) * F, t[8] = (d * x - m * _ + y * g) * F, t) : null
            },
            clamp: function(t, i, e) {
                return i > t ? i : t > e ? e : t
            },
            color: function(t, i, e, s) {
                return "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
            },
            backgroundTransparent: function() {
                return {
                    backgroundColor: "transparent"
                }
            },
            backgroundColor: function(t, i, e, s) {
                return {
                    backgroundColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                }
            },
            borderRadius: function(t) {
                return {
                    borderRadius: t + "px"
                }
            },
            borderTopWidth: function(t) {
                return {
                    borderTopWidth: t + "px"
                }
            },
            borderBottomWidth: function(t) {
                return {
                    borderBottomWidth: t + "px"
                }
            },
            borderLeftWidth: function(t) {
                return {
                    borderLeftWidth: t + "px"
                }
            },
            borderRightWidth: function(t) {
                return {
                    borderRightWidth: t + "px"
                }
            },
            borderWidth: function(t) {
                return {
                    borderWidth: t + "px"
                }
            },
            borderColor: function(t, i, e, s) {
                return 0 == s ? {
                    borderColor: "transparent"
                } : {
                    borderColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                }
            },
            borderTopColor: function(t, i, e, s) {
                return 0 == s ? {
                    borderTopColor: "transparent"
                } : {
                    borderTopColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                }
            },
            borderBottomColor: function(t, i, e, s) {
                return 0 == s ? {
                    borderBottomColor: "transparent"
                } : {
                    borderBottomColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                }
            },
            borderRightColor: function(t, i, e, s) {
                return 0 == s ? {
                    borderRightColor: "transparent"
                } : {
                    borderRightColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                }
            },
            borderLeftColor: function(t, i, e, s) {
                return 0 == s ? {
                    borderLeftColor: "transparent"
                } : {
                    borderLeftColor: "rgba(" + Math.floor(t) + "," + Math.floor(i) + "," + Math.floor(e) + "," + s + ")"
                }
            },
            borderStyle: function(t) {
                return {
                    borderStyle: t
                }
            },
            borderTopStyle: function(t) {
                return {
                    borderTopStyle: t
                }
            },
            borderBottomStyle: function(t) {
                return {
                    borderBottomStyle: t
                }
            },
            borderRightStyle: function(t) {
                return {
                    borderRightStyle: t
                }
            },
            borderLeftStyle: function(t) {
                return {
                    borderLeftStyle: t
                }
            },
            colorHSL: function(t, i, e, s) {
                return "hsla(" + Math.floor(t) + "," + Math.floor(i) + "%," + Math.floor(e) + "%," + s + ")"
            },
            backgroundTransparent: function() {
                return {
                    backgroundColor: "transparent"
                }
            },
            backgroundColorHSL: function(t, i, e, s) {
                return {
                    backgroundColor: "hsla(" + Math.floor(t) + "," + Math.floor(i) + "%," + Math.floor(e) + "%," + s + ")"
                }
            },
            clipCircle: function(t, i, e) {
                return {
                    "-webkit-clip-path": "circle(" + t + "px," + i + "px," + e + "px)"
                }
            },
            getWidth: function() {
                return window.innerWidth
            },
            getHeight: function() {
                return window.innerHeight
            },
            getCenter: function() {
                return [.5 * n.getWidth(), .5 * n.getHeight()]
            },
            isMobile: function() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)?!0 : !1
            },
            isString: function(t) {
                return "string" == typeof t || t instanceof String
            },
            isArray: function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            },
            extend: function(t, i) {
                for (var e in i)
                    t[e] = i[e];
                return t
            },
            getDevicePixelRatio: function() {
                return window.devicePixelRatio ? window.devicePixelRatio : 1
            },
            getSurfacePosition: function(t) {
                function i(t) {
                    var s = o(t);
                    if ("" !== s && void 0 !== s) {
                        var n = e(s);
                        r[0] += n[0], r[1] += n[1], r[2] += n[2], i(t.parentNode)
                    }
                }
                function e(t) {
                    var i = [];
                    t = s(t), i[0] = parseInt(t[12].replace(" ", "")), i[1] = parseInt(t[13].replace(" ", "")), i[2] = parseInt(t[14].replace(" ", ""));
                    for (var e = 0; e < i.length; e++)
                        "undefined" == typeof i[e] && (i[e] = 0);
                    return i
                }
                function s(t) {
                    return t = t.replace("matrix3d(", ""), t = t.replace(")", ""), t.split(",")
                }
                function o(t) {
                    var i = t.style.webkitTransform || t.style.transform;
                    return i
                }
                var n = t._currTarget, r = [0, 0, 0];
                return n ? (i(n), r) : void 0
            },
            getCenterMatrix: function(t, i, e) {
                return void 0 == e && (e = 0), o.translate(t[0] - .5 * i[0], t[1] - .5 * i[1], e)
            },
            debounce: function(t, i) {
                var e, o, n, r, a;
                return function() {
                    o = this, a = arguments, n = new Date;
                    var h = function() {
                        var u = new Date - n;
                        i > u ? e = s.setTimeout(h, i - u) : (e = null, r = t.apply(o, a))
                    };
                    return e || (e = s.setTimeout(h, i)), r
                }
            },
            hasUserMedia: function() {
                return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
            },
            isWebkit: function() {
                return !!window.webkitURL
            }
        };
        e.exports = n
    }), define("famous-views/CardsLayout", ["require", "exports", "module", "famous/Entity", "famous/EventHandler", "famous/Matrix", "famous/Utility", "famous-sync/GenericSync", "famous-physics/utils/PhysicsTransition"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this._entityId = a.register(this), this._size = [window.innerWidth, window.innerHeight], this._cards = [], this._cardStates = [], this._activeIndex =- 1, this._incomingIndex =- 1, this._removedCards = [], this._removedCardStates = [], this.sync = new p(o.bind(this), {
                direction: c.Direction.X,
                rails: !0
            }), this.eventInput = new h, this.eventInput.pipe(this.sync), h.setInputHandler(this, this.eventInput), this.eventOutput = new h, h.setOutputHandler(this, this.eventOutput), t && this.setOptions(t), this.sync.on("start", function() {
                for (var t = 0; t < this._cardStates.length; t++)
                    this._cardStates[t].reset(this._cardStates[t].getPosition())
            }.bind(this)), this.sync.on("update", function(t) {
                if (!(this._activeIndex < 0)) {
                    this._cardStates[this._activeIndex].reset(t.p);
                    var i = n.call(this, this._cards[this._activeIndex]);
                    t.p > this.getSize()[0] && this.activeIndex > 0 ? this._activeIndex-- : t.p < this.getSize()[0] - i ? this._activeIndex < this._cards.length-1 ? this._activeIndex++ : this.eventOutput.emit("edgepull", {
                        direction: 1,
                        v: t.v
                    }) : !this._activeIndex && t.p > .5 * i && t.v > 0 && this.eventOutput.emit("edgepull", {
                        direction: -1,
                        v: t.v
                    })
                }
            }.bind(this)), this.sync.on("end", function(t) {
                if (!(this._activeIndex < 0)) {
                    t.v > this.options.feel.pageSwitchSpeed && this._activeIndex > 0 ? this._activeIndex-- : t.v<-this.options.feel.pageSwitchSpeed && this._activeIndex < this._cards.length-1 && this._activeIndex++;
                    var i = this._activeIndex, e = this._cards[i], s = this.getSize()[0] - n.call(this, e);
                    this._cardStates[i].setAnchorPosition(s), this._cardStates[i].setVelocity(t.v)
                }
            }.bind(this))
        }
        function o() {
            return this._activeIndex < 0 ? 0 : this._cardStates[this._activeIndex].getPosition()
        }
        function n(t) {
            return t && t.getSize ? (size = t.getSize(), size && size[0] ? size[0] : this.options.look.size[0]) : this.options.look.size[0]
        }
        function r() {
            var t = this.getSize()[0];
            if (this._incomingIndex >= 0) {
                var i = this._cardStates[this._incomingIndex].getPosition(), e = t;
                this._activeIndex >= 0 && (e = Math.min(e, this._cardStates[this._activeIndex].getPosition() + n.call(this, this._cards[this._activeIndex]))), e >= i && (this._activeIndex = this._incomingIndex, this._incomingIndex =- 1)
            }
            var s;
            if (this._cardStates.length) {
                if (s = new Array(this._cards.length), this._activeIndex >= 0) {
                    for (var o = this._cardStates[this._activeIndex].getPosition(), r = o, a = this._activeIndex-1; a >= 0; a--)
                        r -= n.call(this, this._cards[a]), this._cardStates[a].reset(r > 0 ? r : 0);
                    r = o + n.call(this, this._cards[this._activeIndex]);
                    for (var h = this._cardStates.length, a = this._activeIndex + 1; h > a; a++)
                        a != this._incomingIndex && (this._cardStates[a].reset(r), r += n.call(this, this._cards[a]))
                }
                for (var a = 0; a < this._cards.length; a++) {
                    var c = this._cardStates[a].getPosition();
                    s[a] = {
                        transform: u.translate(.125 * (0 | 8 * c),
                        0,
                        .01 * a),
                        size: [n.call(this, this._cards[a]), void 0],
                        target: this._cards[a].render()
                    }
                }
            } else 
                s = [];
            for (var a = 0; a < this._removedCardStates.length;) {
                var c = this._removedCardStates[a].getPosition(), p = this._removedCardStates[a].getVelocity();
                c >= t && Math.abs(p) < .001 ? (this._removedCardStates.splice(a, 1), this._removedCards.splice(a, 1)) : (s.push({
                    transform: u.translate(c, 0, .01 * a),
                    size: [n.call(this, this._removedCards[a]), void 0],
                    target: this._removedCards[a].render()
                }), a++)
            }
            return s
        }
        var a = t("famous/Entity"), h = t("famous/EventHandler"), u = t("famous/Matrix"), c = t("famous/Utility"), p = t("famous-sync/GenericSync"), l = t("famous-physics/utils/PhysicsTransition");
        s.DEFAULT_OPTIONS = {
            look: {
                size: [400, void 0]
            },
            feel: {
                dampingRatio: .8,
                period: 500,
                pageSwitchSpeed: 1
            },
            removalFudge: 10
        }, s.prototype.getSize = function() {
            return this._size
        }, s.prototype.show = function(t) {
            if (!t)
                return this.remove(0);
            if (this._cards.indexOf(t) >= 0)
                return !1;
            t && t.emit && (t.pipe(this.eventInput), this.eventOutput.pipe(t));
            var i, e = this._removedCards.indexOf(t);
            0 > e ? (i = new l({
                dampingRatio: this.options.feel.dampingRatio,
                period: this.options.feel.period
            }), i.reset(this.getSize()[0])) : (i = this._removedCardStates[e], this._removedCardStates.splice(e, 1), this._removedCards.splice(e, 1));
            var s = this.getSize()[0] - n.call(this, t);
            this._cardStates.length && (s = this._cardStates[this._cardStates.length-1].getPosition() + n(this, this._cards[this._cardStates.length-1])), s = Math.min(s, this.getSize()[0] - n.call(this, t)), i.setAnchorPosition(s);
            var o = this._cardStates.length;
            return this._cards[o] = t, this._cardStates[o] = i, this._incomingIndex = o, o
        }, s.prototype.remove = function(t) {
            if (t || (t = 0), !(t >= this._cards.length)
                ) {
                this._activeIndex = t-1;
                for (var i = t; i < this._cards.length; i++)
                    this._cardStates[i].setAnchorPosition(this.getSize()[0] + this.options.removalFudge), this._removedCardStates.push(this._cardStates[i]), this._removedCards.push(this._cards[i]);
                if (this._cards.splice(t), this._cardStates.splice(t)
                    , this._activeIndex >= 0 && this._activeIndex < t) {
                    var e = this.getSize()[0] - n.call(this, this._cards[this._activeIndex]);
                    this._cardStates[this._activeIndex].setAnchorPosition(e)
                }
            }
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.look && (this.options.look = t.look), void 0 !== t.feel && (this.options.feel = t.feel), void 0 !== t.removalFudge && (this.options.removalFudge = t.removalFudge)
        }, s.prototype.render = function() {
            return this._entityId
        }, s.prototype.commit = function(t, i, e, s, o) {
            return this._size = o, {
                transform: i, opacity: e, origin: s, size: o, target: r.call(this)
            }
        }, e.exports = s
    }), define("famous-views/ControlSet", ["require", "exports", "module", "famous/EventHandler", "famous/Matrix"], function(t, i, e) {
        function s() {
            this.eventOutput = new o, o.setOutputHandler(this, this.eventOutput), this.controls = []
        }
        var o = t("famous/EventHandler"), n = t("famous/Matrix");
        s.prototype.include = function(t, i) {
            i.on("change", function(i) {
                this.eventOutput.emit(t, {
                    value: i.value
                })
            }.bind(this)), this.controls.push(i)
        }, s.prototype.render = function() {
            for (var t = [], i = 0, e = 0, s = 0; s < this.controls.length; s++) {
                var o = this.controls[s], r = o.getSize();
                t.push({
                    transform: n.translate(0, i),
                    target: o.render()
                }), i += r[1], e = Math.max(e, r[0])
            }
            return {
                size: [e, i],
                target: t
            }
        }, e.exports = s
    }), define("famous-views/LightBox", ["require", "exports", "module", "famous/Matrix", "famous/Modifier", "famous/RenderNode", "famous/Utility"], function(t, i, e) {
        function s(t) {
            this.options = {
                inTransform: o.scale(.001, .001, .001),
                inOpacity: 0,
                inOrigin: [.5, .5],
                outTransform: o.scale(.001, .001, .001),
                outOpacity: 0,
                outOrigin: [.5, .5],
                showTransform: o.identity,
                showOpacity: 1,
                showOrigin: [.5, .5],
                inTransition: !0,
                outTransition: !0,
                overlap: !1
            }, t && this.setOptions(t), this._showing=!1, this.nodes = [], this.transforms = []
        }
        var o = t("famous/Matrix"), n = t("famous/Modifier"), r = t("famous/RenderNode"), a = t("famous/Utility");
        s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.inTransform && (this.options.inTransform = t.inTransform), void 0 !== t.inOpacity && (this.options.inOpacity = t.inOpacity), void 0 !== t.inOrigin && (this.options.inOrigin = t.inOrigin), void 0 !== t.outTransform && (this.options.outTransform = t.outTransform), void 0 !== t.outOpacity && (this.options.outOpacity = t.outOpacity), void 0 !== t.outOrigin && (this.options.outOrigin = t.outOrigin), void 0 !== t.showTransform && (this.options.showTransform = t.showTransform), void 0 !== t.showOpacity && (this.options.showOpacity = t.showOpacity), void 0 !== t.showOrigin && (this.options.showOrigin = t.showOrigin), void 0 !== t.inTransition && (this.options.inTransition = t.inTransition), void 0 !== t.outTransition && (this.options.outTransition = t.outTransition), void 0 !== t.overlap && (this.options.overlap = t.overlap)
        }, s.prototype.show = function(t, i, e) {
            if (!t)
                return this.hide(e);
            if (i instanceof Function && (e = i, i = void 0), this._showing) {
                if (!this.options.overlap)
                    return this.hide(this.show.bind(this, t, e)), void 0;
                this.hide()
            }
            this._showing=!0;
            var s = new n({
                transform: this.options.inTransform,
                opacity: this.options.inOpacity,
                origin: this.options.inOrigin
            }), o = new r;
            o.link(s).link(t), this.nodes.push(o), this.transforms.push(s);
            var h = e ? a.after(3, e): void 0;
            i || (i = this.options.inTransition), s.setTransform(this.options.showTransform, i, h), s.setOpacity(this.options.showOpacity, i, h), s.setOrigin(this.options.showOrigin, i, h)
        }, s.prototype.hide = function(t, i) {
            if (this._showing) {
                this._showing=!1, t instanceof Function && (i = t, t = void 0);
                var e = this.nodes[this.nodes.length-1], s = this.transforms[this.transforms.length-1], o = a.after(3, function() {
                    this.nodes.splice(this.nodes.indexOf(e), 1), this.transforms.splice(this.transforms.indexOf(s), 1), i && i.call(this)
                }.bind(this));
                t || (t = this.options.outTransition), s.setTransform(this.options.outTransform, t, o), s.setOpacity(this.options.outOpacity, t, o), s.setOrigin(this.options.outOrigin, t, o)
            }
        }, s.prototype.render = function() {
            for (var t = [], i = 0; i < this.nodes.length; i++)
                t.push(this.nodes[i].render());
            return t
        }, e.exports = s
    }), define("famous-views/EdgeSwapper", ["require", "exports", "module", "famous/Entity", "famous/EventHandler", "famous/Matrix", "./LightBox"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this._currTarget = void 0, this._size = [window.innerWidth, window.innerHeight], this.lightbox = new a(this.options), this.eventInput = new n, n.setInputHandler(this, this.eventInput), this.id = o.register(this), t && this.setOptions(t)
        }
        var o = t("famous/Entity"), n = t("famous/EventHandler"), r = t("famous/Matrix"), a = t("./LightBox");
        s.DEFAULT_OPTIONS = {
            inOrigin: [0, 0],
            outOrigin: [0, 0],
            showOrigin: [0, 0],
            inTransform: r.translate(window.innerWidth, 0, 0),
            outTransform: r.translate(window.innerWidth, 0, 0)
        }, s.prototype.show = function(t) {
            this._currTarget && this.eventInput.unpipe(this._currTarget), this._currTarget = t, this._currTarget && (this._currTarget.setSize && this._currTarget.setSize(this._size), this._currTarget.emit && this.eventInput.pipe(this._currTarget)), this.lightbox.show.apply(this.lightbox, arguments)
        }, s.prototype.setOptions = function(t) {
            this.lightbox.setOptions(t)
        }, s.prototype.render = function() {
            return this.id
        }, s.prototype.commit = function(t, i, e, s, o) {
            return (o[0] != this._size[0] || o[1] != this._size[1]) && (this._size = o, this.lightbox.setOptions({
                inTransform : r.translate(this._size[0], 0, 0), outTransform: r.translate(this._size[0], 0, 0)
            }), this._currTarget && this._currTarget.setSize && this._currTarget.setSize(o)), {
                transform: i, opacity: e, origin: s, size: o, target: this.lightbox.render()
            }
        }, e.exports = s
    }), define("famous-views/Fader", ["require", "exports", "module", "famous/Transitionable"], function(t, i, e) {
        function s(t, i) {
            this.options = {
                cull: !1,
                transition: !0,
                pulseInTransition: !0,
                pulseOutTransition: !0,
                visibilityThreshold: 0
            }, t && this.setOptions(t), i || (i = 0), this.transitionHelper = new o(i)
        }
        var o = t("famous/Transitionable");
        s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.cull && (this.options.cull = t.cull), void 0 !== t.transition && (this.options.transition = t.transition), void 0 !== t.pulseInTransition && (this.options.pulseInTransition = t.pulseInTransition), void 0 !== t.pulseOutTransition && (this.options.pulseOutTransition = t.pulseOutTransition), void 0 !== t.visibilityThreshold && (this.options.visibilityThreshold = t.visibilityThreshold)
        }, s.prototype.show = function(t) {
            this.set(1, this.options.transition, t)
        }, s.prototype.hide = function(t) {
            this.set(0, this.options.transition, t)
        }, s.prototype.pulse = function(t, i) {
            void 0 === t && (t = 1);
            var e = this.transitionHelper.get();
            this.transitionHelper.set(t, this.options.pulseInTransition), this.transitionHelper.set(e, this.options.pulseOutTransition, i)
        }, s.prototype.set = function(t, i, e) {
            this.transitionHelper.halt(), this.transitionHelper.set(t, i, e)
        }, s.prototype.render = function(t) {
            var i = this.transitionHelper.get();
            return this.options.cull&&!i ? void 0 : {
                opacity: i,
                target: t
            }
        }, s.prototype.isVisible = function() {
            var t = this.options.visibilityThreshold;
            return t >= 1 ? 1 == this.transitionHelper.get() : this.transitionHelper.get() > t
        }, e.exports = s
    }), define("famous-views/Flip", ["require", "exports", "module", "famous/Matrix", "famous/Transitionable", "famous/RenderNode"], function(t, i, e) {
        function s(t) {
            this.options = {
                transition: !0,
                cull: !0
            }, t && this.setOptions(t), this._side = 0, this.state = new n(0), this.frontNode = new r, this.backNode = new r
        }
        var o = t("famous/Matrix"), n = t("famous/Transitionable"), r = t("famous/RenderNode");
        s.prototype.setDefaultTransition = function(t) {
            this.transition = t
        }, s.prototype.flip = function(t, i) {
            void 0 === t && (t = 1 == this._side ? 0 : 1), this._side = t, this.state.set(t, this.options.transition, i)
        }, s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.transition && (this.options.transition = t.transition), void 0 !== t.cull && (this.options.cull = t.cull)
        }, s.prototype.linkFront = function(t) {
            return this.frontNode.link(t)
        }, s.prototype.linkBack = function(t) {
            return this.backNode.link(t)
        }, s.prototype.render = function(t) {
            var i = this.state.get();
            return void 0 !== t ? {
                transform: o.rotateY(Math.PI * i),
                target: t
            } : this.options.cull&&!this.state.isActive() ? i ? this.backNode.render() : this.frontNode.render() : [{
                transform: o.rotateY(Math.PI * i),
                target: this.frontNode.render()
            }, {
                transform: o.rotateY(Math.PI * (i + 1)),
                target: this.backNode.render()
            }
            ]
        }, e.exports = s
    }), define("famous-views/GridLayout", ["require", "exports", "module", "famous/Entity", "famous/RenderNode", "famous/Matrix", "famous/ViewSequence"], function(t, i, e) {
        function s(t) {
            this.options = {
                size: [1, 1]
            }, t && this.setOptions(t), this.id = o.register(this), this._targetPositionsCache = [], this._targetSizesCache = [], this._contextSizeCache = [0, 0], this._gridSizeCache = [0, 0]
        }
        var o = t("famous/Entity");
        t("famous/RenderNode");
        var n = t("famous/Matrix"), r = t("famous/ViewSequence");
        s.prototype.render = function() {
            return this.id
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.size && (this.options.size = t.size)
        }, s.prototype.sequenceFrom = function(t) {
            t instanceof Array && (t = new r(t)), this.sequence = t
        }, s.prototype.commit = function(t, i, e, s, o) {
            var r = this.options.size[1], a = this.options.size[0];
            if (o[0] != this._contextSizeCache[0] || o[1] !== this._contextSizeCache[1] || r !== this._gridSizeCache[0] || a !== this._gridSizeCache[1])
                for (var h = o[1] / r, u = o[0] / a, c = 0; r > c; c++)
                    for (var p = Math.round(h * c), l = 0; a > l; l++) {
                        var f = Math.round(u * l), d = c * a + l;
                        this._targetPositionsCache[d] = n.translate(f, p), this._targetSizesCache[d] = [Math.round(u * (l + 1)) - f, Math.round(h * (c + 1)) - p]
                    }
            for (var m = this.sequence, v = [], d = 0; m && d <= this._targetPositionsCache.length;) {
                var y = m.get();
                y && (v[d] = {
                    transform: this._targetPositionsCache[d],
                    size: this._targetSizesCache[d],
                    target: y.render()
                }), m = m.getNext(), d++
            }
            o && (i = n.move(i, [ - o[0] * s[0], - o[1] * s[1], 0]));
            var g = {
                transform: i,
                opacity: e,
                origin: s,
                size: o,
                target: v
            };
            return g
        }, e.exports = s
    }), define("famous-views/HeaderFooterLayout", ["require", "exports", "module", "famous/Entity", "famous/RenderNode", "famous/Matrix"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), t && this.setOptions(t), this._entityId = o.register(this), this._header = new n, this._footer = new n, this._content = new n, this.id = {
                header: this._header,
                footer: this._footer,
                content: this._content
            }
        }
        var o = t("famous/Entity"), n = t("famous/RenderNode"), r = t("famous/Matrix");
        s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.DEFAULT_OPTIONS = {
            direction: s.DIRECTION_Y,
            footerSize: 0,
            headerSize: 0
        }, s.prototype.render = function() {
            return this._entityId
        }, s.prototype.setOptions = function(t) {
            for (var i in s.DEFAULT_OPTIONS)
                void 0 !== t[i] && (this.options[i] = t[i])
        }, s.prototype.commit = function(t, i, e, o, n) {
            function a(t, i) {
                var e = t.get();
                if (!e ||!e.getSize)
                    return i;
                var s = e.getSize();
                return s[this.options.direction] || i
            }
            function h(t) {
                return this.options.direction == s.DIRECTION_X ? r.translate(t, 0, 0) : r.translate(0, t, 0)
            }
            function u(t) {
                return this.options.direction == s.DIRECTION_X ? [t, n[1]] : [n[0], t]
            }
            var c = a.call(this, this._header, this.options.headerSize), p = a.call(this, this._footer, this.options.footerSize), l = n[this.options.direction] - c - p, f = [.5, .5], d = [.5, .5];
            f[this.options.direction] = 0, d[this.options.direction] = 1;
            var m = [{
                origin: f,
                size: u.call(this, c),
                target: this._header.render()
            }, {
                transform: h.call(this, c),
                origin: f,
                size: u.call(this, l),
                target: this._content.render()
            }, {
                origin: d,
                size: u.call(this, p),
                target: this._footer.render()
            }
            ];
            i = r.move(i, [ - n[0] * o[0], - n[1] * o[1], 0]);
            var v = {
                transform: i,
                opacity: e,
                origin: o,
                size: n,
                target: m
            };
            return v
        }, e.exports = s
    }), define("famous-views/ImageFader", ["require", "exports", "module", "famous/RenderNode", "./Fader", "famous/Matrix"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.nodes = [], this.faders = [], this.mode =- 1, t && this.setOptions(t)
        }
        var o = t("famous/RenderNode"), n = t("./Fader"), r = t("famous/Matrix");
        s.DEFAULT_OPTIONS = {
            crossfade: !1
        }, s.prototype.getMode = function() {
            return this.mode
        }, s.prototype.setMode = function(t, i, e) {
            if (this.mode = t, this.options.crossfade) {
                for (var s = 0; s < this.faders.length; s++)
                    this.faders[s].set(0, i);
                this.faders[t].set(1, i, e)
            } else 
                this.faders[t].set(1, i, function() {
                    if (this.mode == t) {
                        for (var i = 0; i < this.faders.length; i++)
                            i != t && this.faders[i].set(0);
                            e && e()
                    }
                }.bind(this))
        }, s.prototype.forMode = function(t) {
            return this.nodes[t] || (this.nodes[t] = new o, this.faders[t] = new n(this.options)), this.nodes[t]
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.crossfade && (this.options.crossfade = t.crossfade)
        }, s.behindMatrix = r.translate(0, 0, - .01), s.prototype.render = function() {
            for (var t = [], i = 0; i < this.nodes.length; i++) {
                var e = this.faders[i].render(this.nodes[i].render());
                i != this.mode && (e = {
                    transform: s.behindMatrix,
                    target: e
                }), t[i] = e
            }
            return t
        }, e.exports = s
    }), define("famous-views/Scrollview", ["require", "exports", "module", "famous/Utility", "famous-physics/PhysicsEngine", "famous-physics/bodies/Particle", "famous-physics/forces/Drag", "famous-physics/forces/Spring", "famous/Matrix", "famous/EventHandler", "famous-sync/GenericSync", "famous/ViewSequence", "famous/Group", "famous/Entity"], function(t, i, e) {
        function s(t) {
            this.options = {
                direction: _.Direction.Y,
                rails: !0,
                defaultItemSize: [100, 100],
                itemSpacing: 0,
                clipSize: void 0,
                margin: void 0,
                friction: .001,
                drag: 1e-4,
                edgeGrip: .5,
                edgePeriod: 300,
                edgeDamp: 1,
                paginated: !1,
                pagePeriod: 500,
                pageDamp: .8,
                pageStopSpeed: 1 / 0,
                pageSwitchSpeed: 1,
                speedLimit: 10
            }, this.node = null, this.physicsEngine = new w, this.particle = new x, this.physicsEngine.addBody(this.particle), this.spring = new T({
                anchor: [0, 0, 0]
            }), this.drag = new O({
                forceFunction: O.FORCE_FUNCTIONS.QUADRATIC
            }), this.friction = new O({
                forceFunction: O.FORCE_FUNCTIONS.LINEAR
            }), this.sync = new C(function() {
                return - this.getPosition()
            }.bind(this), {
                direction: this.options.direction == _.Direction.X ? C.DIRECTION_X : C.DIRECTION_Y
            }), this.eventInput = new b, this.eventOutput = new b, this.sync.pipe(this.eventInput), this.sync.pipe(this.eventOutput), b.setOutputHandler(this, this.eventOutput), this._outputFunction = void 0, this._masterOutputFunction = void 0, this.setOutputFunction(), this.touchCount = 0, this._springAttached=!1, this._onEdge = 0, this._springPosition = 0, this._touchVelocity = void 0, this._earlyEnd=!1, this._masterOffset = 0, this._lastFrameNode = void 0, t ? this.setOptions(t) : this.setOptions({}), a.call(this), this.group = new E, this.group.link({
                render: S.bind(this)
            }), this._entityId = F.register(this), this._contextSize = [window.innerWidth, window.innerHeight], this._offsets = {}
        }
        function o(t) {
            this.touchCount = t.count, void 0 === t.count && (this.touchCount = 1), u.call(this), this.setVelocity(0), this._touchVelocity = 0, this._earlyEnd=!1
        }
        function n(t) {
            var i =- t.p, e =- t.v;
            this._onEdge && t.slip && (0 > e && this._onEdge < 0 || e > 0 && this._onEdge > 0 ? this._earlyEnd || (r.call(this, t), this._earlyEnd=!0) : this._earlyEnd && Math.abs(e) > Math.abs(this.particle.getVel()[0]) && o.call(this, t)), this._earlyEnd || (this._touchVelocity = e, this.setPosition(i))
        }
        function r(t) {
            if (this.touchCount = t.count || 0, !this.touchCount) {
                u.call(this), this._onEdge && (this._springAttached=!0), h.call(this);
                var i =- t.v, e = this.options.speedLimit;
                t.slip && (e*=this.options.edgeGrip), - e > i ? i =- e : i > e && (i = e), this.setVelocity(i), this._touchVelocity = void 0
            }
        }
        function a() {
            this.eventInput.on("start", o.bind(this)), this.eventInput.on("update", n.bind(this)), this.eventInput.on("end", r.bind(this))
        }
        function h() {
            this._springAttached ? this.physicsEngine.attach([this.spring], this.particle) : this.physicsEngine.attach([this.drag, this.friction], this.particle)
        }
        function u() {
            this._springAttached=!1, this.physicsEngine.detachAll()
        }
        function c(t) {
            return t || (t = this.options.defaultItemSize), t[this.options.direction == _.Direction.X ? 0: 1]
        }
        function p(t) {
            this._springPosition += t, this.setPosition(this.getPosition() + t), this.spring.setOpts({
                anchor: [this._springPosition, 0, 0]
            })
        }
        function l() {
            for (var t=!1; !t && this.getPosition() < 0;) {
                var i = this.node.getPrevious ? this.node.getPrevious(): void 0;
                if (i) {
                    var e = i.getSize ? i.getSize(): this.options.defaultItemSize, s = c.call(this, e) + this.options.itemSpacing;
                    p.call(this, s), this._masterOffset -= s, this.node = i
                } else 
                    t=!0
            }
            for (var o = this.node && this.node.getSize ? this.node.getSize() : this.options.defaultItemSize; !t && this.getPosition() >= c.call(this, o) + this.options.itemSpacing;) {
                var n = this.node.getNext ? this.node.getNext(): void 0;
                if (n) {
                    var s = c.call(this, o) + this.options.itemSpacing;
                    p.call(this, - s), this._masterOffset += s, this.node = n, o = this.node.getSize ? this.node.getSize() : this.options.defaultItemSize
                } else 
                    t=!0
            }
            Math.abs(this._masterOffset) > g.call(this) + this.options.margin && (this._masterOffset = 0)
        }
        function f(t) {
            !this._onEdge && t ? (this.sync.setOptions({
                scale: this.options.edgeGrip
            }), this.touchCount || this._springAttached || (this._springAttached=!0, this.physicsEngine.attach([this.spring], this.particle))) : this._onEdge&&!t && (this.sync.setOptions({
                scale: 1
            }), this._springAttached && (u.call(this), h.call(this))), this._onEdge = t
        }
        function d() {
            if (0 == this.touchCount&&!this._springAttached&&!this._onEdge && this.options.paginated && Math.abs(this.getVelocity()) < this.options.pageStopSpeed) {
                var t = this.node.getSize ? this.node.getSize(): this.options.defaultItemSize, i = Math.abs(this.getVelocity()) > this.options.pageSwitchSpeed, e = this.getVelocity() > 0, s = this.getPosition() > .5 * c.call(this, t);
                i && e ||!i && s ? this.goToNextPage() : m.call(this)
            }
        }
        function m() {
            v.call(this, 0, {
                period: this.options.pagePeriod,
                damp: this.options.pageDamp
            }), this._springAttached || (this._springAttached=!0, this.physicsEngine.attach([this.spring], this.particle))
        }
        function v(t, i) {
            i || (i = {
                period: this.options.edgePeriod,
                damp: this.options.edgeDamp
            }), this._springPosition = t, this.spring.setOpts({
                anchor: [this._springPosition, 0, 0],
                period: i.period,
                dampingRatio: i.damp
            })
        }
        function y(t, i, e) {
            var s = t.getSize ? t.getSize(): this.options.defaultItemSize;
            s || (s = this.options.defaultItemSize);
            var o = this._outputFunction(i);
            return e.push({
                transform: o,
                target: t.render()
            }), s[this.options.direction == _.Direction.X ? 0: 1]
        }
        function g() {
            return this.options.clipSize ? this.options.clipSize : c.call(this, this._contextSize)
        }
        function S() {
            var t = {}, i = this.getPosition(), e = [], s = 0, o = 0, n = this.node;
            for (t[n] = 0; n && o - i < g.call(this) 
                + this.options.margin;
            )o += y.call(this, n, o + this._masterOffset, e) + this.options.itemSpacing, n = n.getNext ? n.getNext() : void 0, t[n] = o, !n && o - i - this.options.itemSpacing <= g.call(this) && (this._onEdge || v.call(this, o - g.call(this) - this.options.itemSpacing), s = 1);
            if (n = this.node && this.node.getPrevious ? this.node.getPrevious() : void 0, o = 0, n) {
                var r = n.getSize ? n.getSize(): this.options.defaultItemSize;
                o -= c.call(this, r) + this.options.itemSpacing
            } else 
                0 >= i && (this._onEdge || v.call(this, 0), s =- 1);
            for (; n && o - i>-(g.call(this) + this.options.margin);)
                if (t[n] = o, y.call(this, n, o + this._masterOffset, e)
                    , n = n.getPrevious ? n.getPrevious() : void 0) {
                var r = n.getSize ? n.getSize(): this.options.defaultItemSize;
                o -= c.call(this, r) + this.options.itemSpacing
            }
            return this._offsets = t, f.call(this, s), d.call(this), this.options.paginated && this._lastFrameNode !== this.node && (this.eventOutput.emit("pageChange"), this._lastFrameNode = this.node), e
        }
        var _ = t("famous/Utility"), w = t("famous-physics/PhysicsEngine"), x = t("famous-physics/bodies/Particle"), O = t("famous-physics/forces/Drag"), T = t("famous-physics/forces/Spring"), I = t("famous/Matrix"), b = t("famous/EventHandler"), C = t("famous-sync/GenericSync"), M = t("famous/ViewSequence"), E = t("famous/Group"), F = t("famous/Entity");
        s.prototype.emit = function(t, i) {
            "update" == t || "start" == t || "end" == t ? this.eventInput.emit(t, i) : this.sync.emit(t, i)
        }, s.prototype.getPosition = function(t) {
            var i = this.particle.getPos()[0];
            if (t) {
                var e = this._offsets[t];
                return void 0 !== e ? i - e : void 0
            }
            return i
        }, s.prototype.setPosition = function(t) {
            this.particle.setPos([t, 0, 0])
        }, s.prototype.getVelocity = function() {
            return this.touchCount ? this._touchVelocity : this.particle.getVel()[0]
        }, s.prototype.setVelocity = function(t) {
            this.particle.setVel([t, 0, 0])
        }, s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.direction && (this.options.direction = t.direction, "x" === this.options.direction ? this.options.direction = _.Direction.X : "y" === this.options.direction && (this.options.direction = _.Direction.Y)), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.defaultItemSize && (this.options.defaultItemSize = t.defaultItemSize), void 0 !== t.itemSpacing && (this.options.itemSpacing = t.itemSpacing), void 0 !== t.clipSize && (t.clipSize !== this.options.clipSize && (this._onEdge = 0), this.options.clipSize = t.clipSize), void 0 !== t.margin && (this.options.margin = t.margin), void 0 !== t.drag && (this.options.drag = t.drag), void 0 !== t.friction && (this.options.friction = t.friction), void 0 !== t.edgeGrip && (this.options.edgeGrip = t.edgeGrip), void 0 !== t.edgePeriod && (this.options.edgePeriod = t.edgePeriod), void 0 !== t.edgeDamp && (this.options.edgeDamp = t.edgeDamp), void 0 !== t.paginated && (this.options.paginated = t.paginated), void 0 !== t.pageStopSpeed && (this.options.pageStopSpeed = t.pageStopSpeed), void 0 !== t.pageSwitchSpeed && (this.options.pageSwitchSpeed = t.pageSwitchSpeed), void 0 !== t.pagePeriod && (this.options.pagePeriod = t.pagePeriod), void 0 !== t.pageDamp && (this.options.pageDamp = t.pageDamp), void 0 !== t.speedLimit && (this.options.speedLimit = t.speedLimit), void 0 === this.options.margin && (this.options.margin = .5 * Math.max(window.innerWidth, window.innerHeight)), this.drag.setOpts({
                strength: this.options.drag
            }), this.friction.setOpts({
                strength: this.options.friction
            }), this.spring.setOpts({
                period: this.options.edgePeriod,
                dampingRatio: this.options.edgeDamp
            }), this.sync.setOptions({
                rails: this.options.rails,
                direction: this.options.direction == _.Direction.X ? C.DIRECTION_X: C.DIRECTION_Y
            })
        }, s.prototype.setOutputFunction = function(t, i) {
            t || (t = function(t) {
                return this.options.direction == _.Direction.X ? I.translate(t, 0) : I.translate(0, t)
            }.bind(this), i = t), this._outputFunction = t, this._masterOutputFunction = i ? i : function(i) {
                return I.inverse(t( - i))
            }
        }, s.prototype.goToPreviousPage = function() {
            if (this.node) {
                var t = this.node.getPrevious ? this.node.getPrevious(): void 0;
                if (t) {
                    var i = c.call(this, this.node.getSize()) + this.options.itemSpacing;
                    this.setPosition(this.getPosition() + i), this.node = t;
                    for (var e in this._offsets)
                        this._offsets[e] += i;
                    m.call(this)
                }
                return t
            }
        }, s.prototype.goToNextPage = function() {
            if (this.node) {
                var t = this.node.getNext ? this.node.getNext(): void 0;
                if (t) {
                    var i = c.call(this, this.node.getSize()) + this.options.itemSpacing;
                    this.setPosition(this.getPosition() - i), this.node = t;
                    for (var e in this._offsets)
                        this._offsets[e] -= i;
                    m.call(this)
                }
                return t
            }
        }, s.prototype.getCurrentNode = function() {
            return this.node
        }, s.prototype.sequenceFrom = function(t) {
            t instanceof Array && (t = new M(t)), this.node = t, this._lastFrameNode = t
        }, s.prototype.getSize = function() {
            return this.options.direction == _.Direction.X ? [g.call(this), void 0] : [void 0, g.call(this)]
        }, s.prototype.render = function() {
            return this.node ? (this.physicsEngine.step(), this._entityId) : void 0
        }, s.prototype.commit = function(t, i, e, s, o) {
            this.options.clipSize || o[0] == this._contextSize[0] && o[1] == this._contextSize[1] || (this._onEdge = 0, this._contextSize = o), l.call(this);
            var n = this.getPosition(), r = this._masterOutputFunction( - (n + this._masterOffset));
            return {
                transform: I.moveThen([ - s[0] * o[0], - s[1] * o[1], 0], i),
                opacity: e,
                origin: s,
                size: o,
                target: {
                    transform: r,
                    origin: s,
                    target: this.group.render()
                }
            }
        }, e.exports = s
    }), define("famous-views/MediaReader", ["require", "exports", "module", "./Scrollview", "./HeaderFooterLayout", "famous/ImageSurface", "famous/Matrix", "famous/EventHandler", "famous/Utility"], function(t, i, e) {
        function s(t) {
            this.opts = Object.create(s.DEFAULT_OPTS), t ? this.setOpts(t) : this.setOpts(this.opts);
            var i = "y" == this.opts.axis ? n.DIR_X: n.DIR_Y, e = u.Direction[this.opts.axis.toUpperCase()];
            this.layout = new n({
                footerSize: this.opts.menuSize,
                dir: i
            }), this.display = new o({
                direction: e,
                margin: this.opts.displayMargin,
                paginated: !0,
                pageStopSpeed: this.opts.pageStopSpeed,
                clipSize: this.opts.clipSize,
                itemSpacing: this.opts.itemSpacing
            }), this.menu = new o({
                direction: e,
                margin: this.opts.menuMargin,
                paginated: !0,
                pageStopSpeed: this.opts.pageStopSpeed,
                clipSize: this.opts.clipSize,
                itemSpacing: this.opts.itemSpacing
            });
            var r = function(t) {
                var i = this.opts.clipSize>>1, e = this.opts.images[0].width>>2, s = this.opts.images[0].height>>2, o = i - e, n = i - s;
                return function(t) {
                    return this.options.direction == u.Direction.X ? a.translate(t + o, n) : a.translate(o, t + n)
                }.bind(t)
            }.bind(this), c = function(t) {
                var i = this.opts.clipSize>>1, e = i - (this.opts.images[0].width>>2>>this.opts.scale), s = i - (this.opts.images[0].height>>2>>this.opts.scale);
                return function(t) {
                    return this.options.direction == u.Direction.X ? a.translate(t + e, 0) : a.translate(0, t + s)
                }.bind(t)
            }.bind(this);
            this.display.setOutputFunction(r(this.display)), this.menu.setOutputFunction(c(this.menu)), this.layout.id.content.link(this.display), this.layout.id.footer.link(this.menu), this.displayInput = new h, h.setInputHandler(this, this.displayInput), this.display.pipe(this.displayInput), this.displayInput.on("pageChange", function() {
                this.menu.node.index = this.display.node.index
            }.bind(this)), this.load(this.opts.images)
        }
        var o = t("./Scrollview"), n = t("./HeaderFooterLayout"), r = t("famous/ImageSurface"), a = t("famous/Matrix"), h = t("famous/EventHandler"), u = t("famous/Utility");
        s.DEFAULT_OPTS = {
            pageStopSpeed: 3,
            axis: "x",
            scale: 3,
            displayMargin: 1e4,
            images: [],
            menuMargin: 1e4,
            menuSize: 100,
            displayClasses: [],
            menuClasses: [],
            onClasses: [],
            clipSize: void 0,
            itemSpacing: 0
        }, s.prototype.getSize = function() {
            return this.scrollview.getSize()
        }, s.prototype.setSize = function(t) {
            this.scrollview.setOpts({
                clipSize: t[1]
            })
        }, s.prototype.select = function(t, i) {
            var e = this[i].node.index, s = t, o = s - e;
            if (-1 & o)
                for (var n = 0 > o, r = n?-o : o, a = n ? this[i].prevPage.bind(this[i]) 
                    : this[i].nextPage.bind(this[i]), h = 0;
            r > h;
            h++)a()
        }, s.prototype.load = function(t) {
            var i, e, s = [];
            this.display.sequenceFrom(t.map(function(t, o) {
                return i = new r({
                    content: t.url,
                    size: [t.width, t.height],
                    classes: this.opts.displayClasses
                }), i.pipe(this.display), e = new r({
                    content: t.url,
                    size: [t.width>>this.opts.scale, t.height>>this.opts.scale],
                    classes: this.opts.menuClasses
                }), e.on("mousedown", function() {
                    this.notDragging=!0
                }.bind(this)), e.on("mousemove", function() {
                    this.notDragging=!1
                }.bind(this)), e.on("mouseup", function() {
                    this.notDragging && this.select(o, "display")
                }.bind(this)), e.pipe(this.menu), s.push(e), i
            }.bind(this))), this.menu.sequenceFrom(s)
        }, s.prototype.render = function() {
            return this.layout.render()
        }, s.prototype.getOpts = function() {
            return this.opts
        }, s.prototype.setOpts = function(t) {
            for (var i in s.DEFAULT_OPTS)
                void 0 !== t[i] && (this.opts[i] = t[i])
        }, e.exports = s
    }), define("famous-views/RenderArbiter", ["require", "exports", "module", "famous/EventHandler", "famous/RenderNode", "./Fader"], function(t, i, e) {
        function s(t) {
            this.nodes = {}, this.faders = {}, this.mode =- 1, this.cull = t, this.outputEvents = new o, o.setOutputHandler(this, this.outputEvents)
        }
        var o = t("famous/EventHandler"), n = t("famous/RenderNode"), r = t("./Fader");
        s.prototype.getMode = function() {
            return this.mode
        }, s.prototype.setMode = function(t, i, e) {
            for (var s in this.faders)
                s != t ? this.faders[s].set(0, i) : this.faders[s].set(1, i, e);
            var o = this.mode;
            this.mode = t, this.outputEvents.emit("change", {
                from: o,
                to: t
            })
        }, s.prototype.forMode = function(t) {
            return this.nodes[t] || (this.nodes[t] = new n, this.faders[t] = new r({
                cull : this.cull
            })), this.nodes[t]
        }, s.prototype.render = function() {
            var t = [];
            for (var i in this.nodes)
                this.faders[i].isVisible() && t.push(this.faders[i].render(this.nodes[i].render()));
            return t
        }, e.exports = s
    }), define("famous-views/ScrollContainer", ["require", "exports", "module", "famous/ContainerSurface", "famous/EventHandler", "./Scrollview", "famous/Utility"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.surface = new o(this.options.look), this.scrollview = new r(this.options.feel), t && this.setOptions(t), this.surface.link(this.scrollview), n.setInputHandler(this, this.surface), n.setOutputHandler(this, this.surface), this.pipe(this.scrollview)
        }
        var o = t("famous/ContainerSurface"), n = t("famous/EventHandler"), r = t("./Scrollview"), a = t("famous/Utility");
        s.DEFAULT_OPTIONS = {
            look: void 0,
            feel: {
                direction: a.Direction.X
            }
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.look && (this.options.look = t.look, this.surface.setOptions(this.options.look)), void 0 !== t.feel && (this.options.feel = t.feel, this.scrollview.setOptions(this.options.feel))
        }, s.prototype.sequenceFrom = function() {
            return this.scrollview.sequenceFrom.apply(this.scrollview, arguments)
        }, s.prototype.render = function() {
            return this.surface.render.apply(this.surface, arguments)
        }, e.exports = s
    }), define("famous-views/SequentialLayout", ["require", "exports", "module", "famous/Matrix", "famous/Transitionable", "famous/Modifier", "famous/RenderNode", "famous/ViewSequence", "famous/Utility"], function(t, i, e) {
        function s(t) {
            this.items = void 0, this._size = void 0, this.options = Object.create(s.DEFAULT_OPTIONS), t && this.setOptions(t)
        }
        var o = t("famous/Matrix");
        t("famous/Transitionable"), t("famous/Modifier"), t("famous/RenderNode");
        var n = t("famous/ViewSequence"), r = t("famous/Utility");
        s.DEFAULT_OPTIONS = {
            direction: r.Direction.X,
            defaultItemSize: [50, 50],
            itemSpacing: 0
        }, s.prototype.getSize = function() {
            return this._size || this.render(), this._size
        }, s.prototype.sequenceFrom = function(t) {
            t instanceof Array && (t = new n(t)), this.items = t
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.defaultItemSize && (this.options.defaultItemSize = t.defaultItemSize), void 0 !== t.itemSpacing && (this.options.itemSpacing = t.itemSpacing), void 0 !== t.transition && (this.options.transition = t.transition)
        }, s.prototype.render = function() {
            for (var t = 0, i = 0, e = this.options.direction == r.Direction.X ? 0 : 1, s = this.options.direction == r.Direction.X ? 1 : 0, n = this.items, a = []; n;) {
                var h = n.get();
                t && (t += this.options.itemSpacing);
                var u;
                h && h.getSize && (u = h.getSize()), u || (u = this.options.defaultItemSize), i && u[s]!==!0 && (i = Math.max(i, u[s]));
                var c = this.options.direction == r.Direction.X ? o.translate(t, 0): o.translate(0, t);
                a.push({
                    transform: c,
                    target: h.render()
                }), u[e] && u[e]!==!0 && (t += u[e]), n = n.getNext()
            }
            return i || (i = void 0), this._size || (this._size = [0, 0]), this._size[e] = t, this._size[s] = i, {
                group: !0, target: a
            }
        }, e.exports = s
    }), define("famous-views/Shaper", ["require", "exports", "module", "famous/RenderNode", "famous/Matrix", "famous/Modifier", "famous/Utility"], function(t, i, e) {
        function s(t) {
            this.nodes = [], this.transforms = [], this.defaultTransition = {
                duration: 1e3,
                curve: "easeInOut"
            };
            for (var i in t)
                this.side(i).from(t[i])
        }
        var o = t("famous/RenderNode"), n = t("famous/Matrix"), r = t("famous/Modifier"), a = t("famous/Utility");
        s.prototype.side = function(t) {
            return this.nodes[t] || (this.transforms[t] = new r, this.transforms[t].setDefaultTransition(this.defaultTransition), this.nodes[t] = new o(this.transforms[t])), this.nodes[t]
        }, s.prototype.halt = function(t) {
            this.transforms[t].halt()
        }, s.prototype.haltSet = function(t) {
            for (var i = 0; i < t.length; i++)
                this.halt(i)
        }, s.prototype.haltAll = function() {
            this.haltSet(this.all())
        }, s.prototype.set = function(t, i, e, s) {
            return this.transforms[t] ? (this.transforms[t].setTransform(i, e, s), void 0) : (s && s(), void 0)
        }, s.prototype.setShape = function(t, i, e, s) {
            for (var o = "function" == typeof i ? i : function(t) {
                return i[t]
            }, n = s ? a.after(t.length, s) : void 0, r = 0; r < t.length; r++)
                this.set(t[r], o(r), e, n)
        }, s.prototype.setShapeAll = function(t, i, e) {
            this.setShape(this.all(), t, i, e)
        }, s.prototype.modify = function(t, i, e, s) {
            var o = n.multiply(this.transforms[t].getFinalTransform(), i);
            this.set(t, o, e, s)
        }, s.prototype.modifySet = function(t, i, e, s) {
            for (var o = s ? a.after(t.length, s) : void 0, n = 0; n < t.length; n++)
                this.modify(t[n], i, e, o)
        }, s.prototype.modifyAll = function(t, i, e) {
            this.modify(this.all(), t, i, e)
        }, s.prototype.setOpacity = function(t, i, e, s) {
            this.transforms[t].setOpacity(i, e, s)
        }, s.prototype.setOpacitySet = function(t, i, e, s) {
            for (var o = s ? a.after(t.length, s) : void 0, n = 0; n < t.length; n++)
                this.setOpacity(t[n], i, e, o)
        }, s.prototype.setOpacityAll = function(t, i, e) {
            this.setOpacitySet(this.all(), t, i, e)
        }, s.prototype.all = function() {
            var t = [];
            for (var i in this.nodes)
                t.push(i);
            return t
        }, s.prototype.getTransform = function(t) {
            return this.transforms[t].getTransform()
        }, s.prototype.getOpacity = function(t) {
            return this.transforms[t].getOpacity()
        }, s.prototype.isMoving = function(t) {
            return this.transforms[t].isMoving()
        }, s.prototype.render = function() {
            for (var t = [], i = 0; i < this.nodes.length; i++)
                t[i] = this.nodes[i].execute();
            return t
        }, e.exports = s
    }), define("famous-widgets/FeedItem", ["require", "exports", "module", "famous/Surface", "famous/View", "famous-utils/TimeAgo"], function(t, i, e) {
        function s(t) {
            n.apply(this, arguments), this.surface = new o({
                size: this.options.size,
                classes: this.options.classes
            }), this.surface.pipe(this.eventInput), this.optionsManager.on("change", function(t) {
                if ("content" == t.id)
                    this.setContent(t.value);
                else {
                    var i = {};
                    i[t.id] = t.value, this.surface.setOptions(i)
                }
            }.bind(this)), t && this.setOptions(t), this.node.link(this.surface)
        }
        var o = t("famous/Surface"), n = t("famous/View"), r = t("famous-utils/TimeAgo");
        s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            classes: ["feedItem"],
            size: [void 0, 80],
            content: {
                icon: void 0,
                source: void 0,
                time: void 0,
                text: ""
            }
        }, s.prototype.setContent = function(t) {
            this.options.content = t;
            var i = .6 * this.options.size[1], e = t.icon ? '<img src="' + t.icon + '" class="icon" width="' + i + '" height="' + i + '" />' : "", s = '<p class="source">' + t.source + "</p>", o = '<p class="time">' + r.parse(t.time) + "</p>", n = '<p class="text">' + t.text + "</p>";
            this.surface.setContent(e + o + s + n)
        }, e.exports = s
    }), define("famous-widgets/FeedStream", ["require", "exports", "module", "famous/EventHandler", "famous-views/Scrollview", "./FeedItem"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.scrollview = new n({
                direction: "y",
                margin: 0
            }), t && this.setOptions(t), this.eventInput = new o, o.setInputHandler(this, this.eventInput), this.eventInput.pipe(this.scrollview)
        }
        var o = t("famous/EventHandler"), n = t("famous-views/Scrollview"), r = t("./FeedItem");
        s.DEFAULT_OPTIONS = {
            widget: r,
            content: []
        }, s.prototype.setContent = function(t) {
            this.options.content = t;
            var i = this.options.widget;
            this.scrollview.sequenceFrom(t.map(function(t) {
                return new i({
                    content: t
                })
            }))
        }, s.prototype.getSize = function() {
            return this.scrollview.getSize()
        }, s.prototype.setSize = function(t) {
            this.scrollview.setOptions({
                clipSize: t[1]
            })
        }, s.prototype.setOptions = function(t) {
            t.widget && (this.options.widget = t.widget), t.content && this.setContent(t.content)
        }, s.prototype.render = function() {
            return this.scrollview.render()
        }, e.exports = s
    }), define("famous-widgets/IconBar", ["require", "exports", "module", "famous/Utility", "famous/Surface"], function(t, i, e) {
        var s = t("famous/Utility"), o = t("famous/Surface"), n = s.customizeComponent(o, {
            classes: ["iconBar"],
            icons: []
        });
        n.prototype.setOptions = function(t) {
            o.prototype.setOptions.call(this, t), t.icons && (this.options.icons = t.icons)
        }, n.prototype.setContent = function(t) {
            return "string" == typeof t && (t += '<span class="icon">' + this.options.icons.join("") + "</span>"), o.prototype.setContent.call(this, t)
        }, e.exports = n
    }), define("famous-widgets/InfoBox", ["require", "exports", "module", "famous/EventHandler", "famous/Surface"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.surface = new r(this.options.look), t && this.setOptions(t), n.setInputHandler(this, this.surface), n.setOutputHandler(this, this.surface, !0)
        }
        function o(t) {
            for (var i = "<ul>", e = 0; e < t.length; e++) {
                var s = t[e], o = Object.keys(s)[0];
                i += '<li><span class="key">' + o + "</span> " + s[o] + "</li>"
            }
            return i += "</ul>"
        }
        var n = t("famous/EventHandler"), r = t("famous/Surface");
        s.DEFAULT_OPTIONS = {
            look: {
                classes: ["infoBox"],
                size: [void 0, !0]
            },
            content: []
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.content && (this.options.content = t.content, this.surface.setContent(o(this.options.content))), void 0 !== t.look && (this.options.look = t.look, this.surface.setOptions(this.options.look))
        }, s.prototype.render = function() {
            return this.surface.render()
        }, e.exports = s
    }), define("famous-widgets/ToggleButton", ["require", "exports", "module", "famous/Surface", "famous/EventHandler", "famous-views/ImageFader"], function(t, i, e) {
        function s(t) {
            this.options = {
                content: "",
                offClasses: ["off"],
                onClasses: ["on"],
                size: void 0,
                outTransition: {
                    curve: "easeInOut",
                    duration: 300
                }, inTransition: {
                    curve: "easeInOut", duration: 300
                }, toggleMode: s.TOGGLE, crossfade: !1
            }, this.eventOutput = new n, n.setOutputHandler(this, this.eventOutput), this.offSurface = new o, this.offSurface.on("click", function() {
                this.options.toggleMode !== s.OFF && this.select()
            }.bind(this)), this.offSurface.pipe(this.eventOutput), this.onSurface = new o, this.onSurface.on("click", function() {
                this.options.toggleMode !== s.ON && this.deselect()
            }.bind(this)), this.onSurface.pipe(this.eventOutput), this.arbiter = new r({
                crossfade: this.options.crossfade
            }), this.arbiter.forMode(s.OFF).link(this.offSurface), this.arbiter.forMode(s.ON).link(this.onSurface), this.arbiter.setMode(s.OFF), this.selected=!1, t && this.setOptions(t)
        }
        var o = t("famous/Surface"), n = t("famous/EventHandler"), r = t("famous-views/ImageFader");
        s.OFF = 0, s.ON = 1, s.TOGGLE = 2, s.prototype.select = function() {
            this.selected=!0, this.arbiter.setMode(s.ON, this.options.inTransition), this.eventOutput.emit("select")
        }, s.prototype.deselect = function() {
            this.selected=!1, this.arbiter.setMode(s.OFF, this.options.outTransition), this.eventOutput.emit("deselect")
        }, s.prototype.isSelected = function() {
            return this.selected
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.content && (this.options.content = t.content, this.offSurface.setContent(this.options.content), this.onSurface.setContent(this.options.content)), t.offClasses && (this.options.offClasses = t.offClasses, this.offSurface.setClasses(this.options.offClasses)), t.onClasses && (this.options.onClasses = t.onClasses, this.onSurface.setClasses(this.options.onClasses)), void 0 !== t.size && (this.options.size = t.size, this.onSurface.setSize(this.options.size), this.offSurface.setSize(this.options.size)), void 0 !== t.toggleMode && (this.options.toggleMode = t.toggleMode), void 0 !== t.outTransition && (this.options.outTransition = t.outTransition), void 0 !== t.inTransition && (this.options.inTransition = t.inTransition), void 0 !== t.crossfade && (this.options.crossfade = t.crossfade, this.arbiter.setOptions({
                crossfade : this.options.crossfade
            }))
        }, s.prototype.getSize = function() {
            return this.options.size
        }, s.prototype.render = function() {
            return this.arbiter.render()
        }, e.exports = s
    }), define("famous-widgets/NavMenu", ["require", "exports", "module", "famous/Utility", "famous/EventHandler", "famous-views/Scrollview", "./ToggleButton", "famous/ContainerSurface"], function(t, i, e) {
        function s(t) {
            this.buttons = [], this._buttonIds = {}, this.options = Object.create(s.DEFAULT_OPTIONS), t && this.setOptions(t), this.scrollview = new a({
                direction: this.options.look.direction,
                itemSpacing: this.options.look.itemSpacing
            }), this.eventOutput = new r, r.setOutputHandler(this, this.eventOutput), r.setInputHandler(this, this.scrollview), this.scrollview.sequenceFrom(this.buttons), this.surface = new u(this.options.look), this.surface.link(this.scrollview), this.surface.pipe(this.scrollview)
        }
        function o(t) {
            var i = this.options.sections[t], e = this.options.widget, s = new e;
            if (this.options.feel && s.setOptions(this.options.feel), this.options.look) {
                var o = Object.create(this.options.look);
                o.size = this.options.look.itemSize, s.setOptions(o)
            }
            s.setOptions(i), s.on("select", this.select.bind(this, t));
            var n = this.buttons.length;
            this.buttons[n] = s, this._buttonIds[t] = n
        }
        var n = t("famous/Utility"), r = t("famous/EventHandler"), a = t("famous-views/Scrollview"), h = t("./ToggleButton"), u = t("famous/ContainerSurface");
        s.DEFAULT_OPTIONS = {
            sections: [],
            widget: h,
            look: {
                size: [200, void 0],
                direction: n.Direction.X,
                itemSize: [void 0, 50],
                itemSpacing: 10,
                crossfade: !0
            },
            feel: void 0
        }, s.prototype.select = function(t) {
            var i = this._buttonIds[t];
            this.buttons[i] && this.buttons[i].isSelected() ? this.eventOutput.emit("select", {
                id: t
            }) : this.buttons[i] && this.buttons[i].select();
            for (var e = 0; e < this.buttons.length; e++)
                e != i && this.buttons[e].deselect()
        }, s.prototype.setOptions = function(t) {
            if (void 0 !== t.widget && (this.options.widget = t.widget)
                , void 0 !== t.look) {
                this.options.look = t.look, this.surface && this.surface.setOptions(this.options.look);
                var i = Object.create(this.options.look);
                i.size = this.options.look.itemSize;
                for (var e = 0; e < this.buttons.length; e++)
                    this.buttons[e].setOptions(i)
            }
            if (void 0 !== t.feel) {
                this.options.feel = t.feel;
                for (var e = 0; e < this.buttons.length; e++)
                    this.buttons[e].setOptions(this.options.feel)
            }
            if (void 0 !== t.sections) {
                this.options.sections = t.sections;
                for (var s in this.options.sections)
                    s in this._buttonIds || o.call(this, s)
            }
        }, s.prototype.getSize = function() {
            return this.options.look.size
        }, s.prototype.render = function() {
            return this.buttons.length ? this.surface.render() : void 0
        }, e.exports = s
    }), define("famous-widgets/NavigationBar", ["require", "exports", "module", "famous/EventHandler", "famous/Utility", "famous/View", "famous-views/GridLayout", "./ToggleButton"], function(t, i, e) {
        function s() {
            a.apply(this, arguments), this.layout = new h, this.buttons = [], this._buttonIds = {}, this._buttonCallbacks = {}, this.layout.sequenceFrom(this.buttons), this._link(this.layout), this.optionsManager.on("change", o.bind(this))
        }
        function o(t) {
            var i = t.id, e = t.value;
            if ("direction" === i)
                this.layout.setOptions({
                    size: n.call(this.buttons.length, this.options.direction)
                });
            else if ("buttons" === i)
                for (var s in this.buttons)
                    this.buttons[s].setOptions(e);
            else if ("sections" === i)
                for (var i in this.options.sections)
                    this.defineSection(i, this.options.sections[i])
        }
        function n(t, i) {
            return i === r.Direction.X ? [t, 1] : [1, t]
        }
        t("famous/EventHandler");
        var r = t("famous/Utility"), a = t("famous/View"), h = t("famous-views/GridLayout"), u = t("./ToggleButton");
        s.prototype = Object.create(a.prototype), s.prototype.constructor = s, s.DEFAULT_OPTIONS = {
            sections: [],
            widget: u,
            size: [void 0, 50],
            direction: r.Direction.X,
            buttons: {
                toggleMode: u.ON
            }
        }, s.prototype.defineSection = function(t, i) {
            var e, s = this._buttonIds[t];
            if (void 0 === s) {
                s = this.buttons.length, this._buttonIds[t] = s;
                var o = this.options.widget;
                e = new o, this.buttons[s] = e, this.layout.setOptions({
                    size: n(this.buttons.length, this.options.direction)
                })
            } else 
                e = this.buttons[s], e.unbind("select", this._buttonCallbacks[t]);
            this.options.buttons && e.setOptions(this.options.buttons), e.setOptions(i), this._buttonCallbacks[t] = this.select.bind(this, t), e.on("select", this._buttonCallbacks[t])
        }, s.prototype.select = function(t) {
            var i = this._buttonIds[t];
            this.buttons[i] && this.buttons[i].isSelected() ? this.eventOutput.emit("select", {
                id: t
            }) : this.buttons[i] && this.buttons[i].select();
            for (var e = 0; e < this.buttons.length; e++)
                e != i && this.buttons[e].deselect()
        }, e.exports = s
    }), define("famous-widgets/ScrollContainer", ["require", "exports", "module", "famous/ContainerSurface", "famous/EventHandler", "famous-views/Scrollview", "famous/Utility"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.surface = new o(this.options.look), this.scrollview = new r(this.options.feel), t && this.setOptions(t), this.surface.link(this.scrollview), n.setInputHandler(this, this.surface), n.setOutputHandler(this, this.surface), this.pipe(this.scrollview)
        }
        var o = t("famous/ContainerSurface"), n = t("famous/EventHandler"), r = t("famous-views/Scrollview"), a = t("famous/Utility");
        s.DEFAULT_OPTIONS = {
            look: void 0,
            feel: {
                direction: a.Direction.X
            }
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.look && (this.options.look = t.look, this.surface.setOptions(this.options.look)), void 0 !== t.feel && (this.options.feel = t.feel, this.scrollview.setOptions(this.options.feel))
        }, s.prototype.sequenceFrom = function() {
            return this.scrollview.sequenceFrom.apply(this.scrollview, arguments)
        }, s.prototype.render = function() {
            return this.surface.render.apply(this.surface, arguments)
        }, e.exports = s
    }), define("famous-widgets/ShrinkContainer", ["require", "exports", "module", "famous/ContainerSurface", "famous/EventHandler", "famous-views/SequentialLayout", "famous/Utility"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.surface = new n(this.options.look), this.layout = new a(this.options), t && this.setOptions(t), this.surface.link(this.layout), r.setInputHandler(this, this.surface), r.setOutputHandler(this, this.surface, !0)
        }
        function o() {
            var t = this.layout.getSize(), i = this.surface.getSize(), e = this.surface.context.getSize();
            if (t && i && e) {
                var s = [t[0] + (i[0] - e[0]), t[1] + (i[1] - e[1])];
                isNaN(s[0]) && (s[0] = void 0), isNaN(s[1]) && (s[1] = void 0), (s[0] != i[0] || s[1] != i[1]) && this.surface.setSize.call(this.surface, s)
            }
        }
        var n = t("famous/ContainerSurface"), r = t("famous/EventHandler"), a = t("famous-views/SequentialLayout");
        t("famous/Utility"), s.DEFAULT_OPTIONS = {
            look: void 0
        }, s.prototype.getSize = function() {
            return this.surface.getSize()
        }, s.prototype.setOptions = function(t) {
            this.layout.setOptions(t), void 0 !== t.look && (this.options.look = t.look, this.surface.setOptions(this.options.look))
        }, s.prototype.sequenceFrom = function() {
            return this.layout.sequenceFrom.apply(this.layout, arguments)
        }, s.prototype.mod = function() {
            return this.surface.mod.apply(this.surface, arguments)
        }, s.prototype.render = function() {
            return o.call(this), this.surface.render.apply(this.surface, arguments)
        }, e.exports = s
    }), define("famous-widgets/Slider", ["require", "exports", "module", "famous/Surface", "famous/CanvasSurface", "famous-sync/GenericSync", "famous/Matrix", "famous/EventHandler"], function(t, i, e) {
        function s(t) {
            this.options = {
                size: [200, 60],
                indicatorSize: [200, 30],
                labelSize: [200, 30],
                range: [0, 1],
                precision: 2,
                defaultValue: 0,
                label: "",
                fillColor: "rgba(170, 170, 170, 1)"
            }, t && this.setOptions(t), this.value = this.options.defaultValue, this.indicator = new r({
                size: this.options.indicatorSize
            }), this.indicator.addClass("slider-back"), this.label = new n({
                size: this.options.labelSize,
                content: this.options.label,
                classes: ["slider-label"]
            }), this.label.setProperties({
                "pointer-events": "none"
            }), this.eventOutput = new u, this.eventInput = new u, u.setInputHandler(this, this.eventInput), u.setOutputHandler(this, this.eventOutput), this.sync = new a(this.get.bind(this), {
                scale: (this.options.range[1] - this.options.range[0]) / this.options.indicatorSize[0],
                direction: a.DIRECTION_X
            }), this.eventInput.on("update", function(t) {
                this.set(t.p)
            }.bind(this)), this.indicator.pipe(this.sync).pipe(this.eventInput), this._drawPos = 0, o.call(this)
        }
        function o() {
            this.label.setContent(this.options.label + '<span style="float: right">' + this.get().toFixed(this.options.precision) + "</span>")
        }
        var n = t("famous/Surface"), r = t("famous/CanvasSurface"), a = t("famous-sync/GenericSync"), h = t("famous/Matrix"), u = t("famous/EventHandler");
        s.prototype.getOptions = function() {
            return this.options
        }, s.prototype.setOptions = function(t) {
            void 0 !== t.size && (this.options.size = t.size), void 0 !== t.indicatorSize && (this.options.indicatorSize = t.indicatorSize), void 0 !== t.labelSize && (this.options.labelSize = t.labelSize), void 0 !== t.range && (this.options.range = t.range), void 0 !== t.precision && (this.options.precision = t.precision), void 0 !== t.defaultValue && (this.options.defaultValue = t.defaultValue), void 0 !== t.label && (this.options.label = t.label), void 0 !== t.fillColor && (this.options.fillColor = t.fillColor)
        }, s.prototype.get = function() {
            return this.value
        }, s.prototype.set = function(t) {
            this.value = Math.min(Math.max(this.options.range[0], t), this.options.range[1]), o.call(this), this.eventOutput.emit("change", {
                value: this.get(),
                range: this.options.range
            })
        }, s.prototype.getSize = function() {
            return this.options.size
        }, s.prototype.render = function() {
            var t = this.options.range, i = Math.floor((this.get() - t[0]) / (t[1] - t[0]) * this.options.indicatorSize[0]);
            if (i < this._drawPos)
                this.indicator.getContext("2d").clearRect(i, 0, this._drawPos - i + 1, this.options.indicatorSize[1]);
            else if (i > this._drawPos) {
                var e = this.indicator.getContext("2d");
                e.fillStyle = this.options.fillColor, e.fillRect(this._drawPos-1, 0, i - this._drawPos + 1, this.options.indicatorSize[1])
            }
            return this._drawPos = i, {
                size: this.options.size, target: [{
                    origin: [.5, 0],
                    target: this.indicator.render()
                }, {
                    transform: h.translate(0, 0, 1),
                    origin: [.5, 1],
                    target: this.label.render()
                }
                ]
            }
        }, e.exports = s
    }), define("famous-widgets/TitleBar", ["require", "exports", "module", "famous/Matrix", "famous/Surface", "famous-views/LightBox"], function(t, i, e) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this.lightbox = new r, this._surfaces = {}, t && this.setOptions(t)
        }
        var o = t("famous/Matrix"), n = t("famous/Surface"), r = t("famous-views/LightBox");
        s.DEFAULT_OPTIONS = {
            widget: n,
            inOrigin: [.5, 0],
            outOrigin: [.5, 0],
            showOrigin: [.5, 0],
            inTransition: !0,
            outTransition: !0,
            size: [void 0, 50],
            look: void 0
        }, s.prototype.show = function(t) {
            var i = this.options.widget;
            if (!(t in this._surfaces)) {
                var e = new i({
                    size: this.options.size
                });
                e.setOptions(this.options.look), e.setContent(t), this._surfaces[t] = e
            }
            this.lightbox.show(this._surfaces[t])
        }, s.prototype.getSize = function() {
            return this.options.size
        }, s.prototype.setOptions = function(t) {
            if (this.lightbox.setOptions(t), t.widget && (this.options.widget = t.widget, this._surfaces = {})
                , t.look && (this.options.look = t.look), t.size) {
                this.options.size = t.size;
                var i = o.translate(0, - this.options.size[1]);
                this.lightbox.setOptions({
                    inTransform: i,
                    outTransform: i
                })
            }
        }, s.prototype.render = function() {
            return this.lightbox.render()
        }, e.exports = s
    }), define("main", ["require", "exports", "module", "famous/CanvasSurface", "famous/ContainerSurface", "famous/Context", "famous/ElementAllocator", "famous/Engine", "famous/Entity", "famous/EventArbiter", "famous/EventHandler", "famous/Group", "famous/ImageSurface", "famous/Matrix", "famous/Modifier", "famous/MultipleTransition", "famous/OptionsManager", "famous/RenderNode", "famous/Scene", "famous/SceneCompiler", "famous/SpecParser", "famous/Surface", "famous/Timer", "famous/Transitionable", "famous/TweenTransition", "famous/Utility", "famous/VideoSurface", "famous/View", "famous/ViewSequence", "famous/WebGLSurface", "famous-modifiers/Camera", "famous-modifiers/Draggable", "famous-modifiers/Swappable", "famous-physics/bodies/Body", "famous-physics/bodies/Circle", "famous-physics/bodies/Particle", "famous-physics/bodies/Rectangle", "famous-physics/constraints/Collision", "famous-physics/constraints/CollisionJacobian", "famous-physics/constraints/Constraint", "famous-physics/constraints/Curve", "famous-physics/constraints/Distance", "famous-physics/constraints/Distance1D", "famous-physics/constraints/Rod", "famous-physics/constraints/Rope", "famous-physics/constraints/StiffSpring", "famous-physics/constraints/Surface", "famous-physics/constraints/Wall", "famous-physics/constraints/Walls", "famous-physics/constraints/joint", "famous-physics/forces/Drag", "famous-physics/forces/Force", "famous-physics/forces/Repulsion", "famous-physics/forces/Spring", "famous-physics/forces/TorqueSpring", "famous-physics/forces/VectorField", "famous-physics/forces/rotationalDrag", "famous-physics/integrator/SymplecticEuler", "famous-physics/integrator/verlet", "famous-physics/math/GaussSeidel", "famous-physics/math/Quaternion", "famous-physics/math/Random", "famous-physics/math/Vector", "famous-physics/math/matrix", "famous-physics/utils/PhysicsTransition", "famous-physics/utils/PhysicsTransition2", "famous-physics/utils/SpringTransition", "famous-physics/utils/StiffSpringTransition", "famous-physics/utils/WallTransition", "famous-physics/PhysicsEngine", "famous-sync/FastClick", "famous-sync/GenericSync", "famous-sync/MouseSync", "famous-sync/PinchSync", "famous-sync/RotateSync", "famous-sync/ScaleSync", "famous-sync/ScrollSync", "famous-sync/TouchSync", "famous-sync/TouchTracker", "famous-sync/TwoFingerSync", "famous-utils/FormatTime", "famous-utils/KeyCodes", "famous-utils/NoiseImage", "famous-utils/Time", "famous-utils/TimeAgo", "famous-utils/Utils", "famous-views/CardsLayout", "famous-views/ControlSet", "famous-views/EdgeSwapper", "famous-views/Fader", "famous-views/Flip", "famous-views/GridLayout", "famous-views/HeaderFooterLayout", "famous-views/ImageFader", "famous-views/LightBox", "famous-views/MediaReader", "famous-views/RenderArbiter", "famous-views/ScrollContainer", "famous-views/Scrollview", "famous-views/SequentialLayout", "famous-views/Shaper", "famous-widgets/FeedItem", "famous-widgets/FeedStream", "famous-widgets/IconBar", "famous-widgets/InfoBox", "famous-widgets/NavMenu", "famous-widgets/NavigationBar", "famous-widgets/ScrollContainer", "famous-widgets/ShrinkContainer", "famous-widgets/Slider", "famous-widgets/TitleBar", "famous-widgets/ToggleButton"], function(t, i, e) {
        var s = function(i) {
            i.call(this, t)
        };
        s.Famous = {}, s.Famous.CanvasSurface = t("famous/CanvasSurface"), s.Famous.ContainerSurface = t("famous/ContainerSurface"), s.Famous.Context = t("famous/Context"), s.Famous.ElementAllocator = t("famous/ElementAllocator"), s.Famous.Engine = t("famous/Engine"), s.Famous.Entity = t("famous/Entity"), s.Famous.EventArbiter = t("famous/EventArbiter"), s.Famous.EventHandler = t("famous/EventHandler"), s.Famous.Group = t("famous/Group"), s.Famous.ImageSurface = t("famous/ImageSurface"), s.Famous.Matrix = t("famous/Matrix"), s.Famous.Modifier = t("famous/Modifier"), s.Famous.MultipleTransition = t("famous/MultipleTransition"), s.Famous.OptionsManager = t("famous/OptionsManager"), s.Famous.RenderNode = t("famous/RenderNode"), s.Famous.Scene = t("famous/Scene"), s.Famous.SceneCompiler = t("famous/SceneCompiler"), s.Famous.SpecParser = t("famous/SpecParser"), s.Famous.Surface = t("famous/Surface"), s.Famous.Timer = t("famous/Timer"), s.Famous.Transitionable = t("famous/Transitionable"), s.Famous.TweenTransition = t("famous/TweenTransition"), s.Famous.Utility = t("famous/Utility"), s.Famous.VideoSurface = t("famous/VideoSurface"), s.Famous.View = t("famous/View"), s.Famous.ViewSequence = t("famous/ViewSequence"), s.Famous.WebGLSurface = t("famous/WebGLSurface"), s.FamousModifiers = {}, s.FamousModifiers.Camera = t("famous-modifiers/Camera"), s.FamousModifiers.Draggable = t("famous-modifiers/Draggable"), s.FamousModifiers.Swappable = t("famous-modifiers/Swappable"), s.FamousPhysics = {}, s.FamousPhysics.Bodies_Body = t("famous-physics/bodies/Body"), s.FamousPhysics.Bodies_Circle = t("famous-physics/bodies/Circle"), s.FamousPhysics.Bodies_Particle = t("famous-physics/bodies/Particle"), s.FamousPhysics.Bodies_Rectangle = t("famous-physics/bodies/Rectangle"), s.FamousPhysics.Constraints_Collision = t("famous-physics/constraints/Collision"), s.FamousPhysics.Constraints_CollisionJacobian = t("famous-physics/constraints/CollisionJacobian"), s.FamousPhysics.Constraints_Constraint = t("famous-physics/constraints/Constraint"), s.FamousPhysics.Constraints_Curve = t("famous-physics/constraints/Curve"), s.FamousPhysics.Constraints_Distance = t("famous-physics/constraints/Distance"), s.FamousPhysics.Constraints_Distance1D = t("famous-physics/constraints/Distance1D"), s.FamousPhysics.Constraints_Rod = t("famous-physics/constraints/Rod"), s.FamousPhysics.Constraints_Rope = t("famous-physics/constraints/Rope"), s.FamousPhysics.Constraints_StiffSpring = t("famous-physics/constraints/StiffSpring"), s.FamousPhysics.Constraints_Surface = t("famous-physics/constraints/Surface"), s.FamousPhysics.Constraints_Wall = t("famous-physics/constraints/Wall"), s.FamousPhysics.Constraints_Walls = t("famous-physics/constraints/Walls"), s.FamousPhysics.Constraints_joint = t("famous-physics/constraints/joint"), s.FamousPhysics.Forces_Drag = t("famous-physics/forces/Drag"), s.FamousPhysics.Forces_Force = t("famous-physics/forces/Force"), s.FamousPhysics.Forces_Repulsion = t("famous-physics/forces/Repulsion"), s.FamousPhysics.Forces_Spring = t("famous-physics/forces/Spring"), s.FamousPhysics.Forces_TorqueSpring = t("famous-physics/forces/TorqueSpring"), s.FamousPhysics.Forces_VectorField = t("famous-physics/forces/VectorField"), s.FamousPhysics.Forces_rotationalDrag = t("famous-physics/forces/rotationalDrag"), s.FamousPhysics.Integrator_SymplecticEuler = t("famous-physics/integrator/SymplecticEuler"), s.FamousPhysics.Integrator_verlet = t("famous-physics/integrator/verlet"), s.FamousPhysics.Math_GaussSeidel = t("famous-physics/math/GaussSeidel"), s.FamousPhysics.Math_Quaternion = t("famous-physics/math/Quaternion"), s.FamousPhysics.Math_Random = t("famous-physics/math/Random"), s.FamousPhysics.Math_Vector = t("famous-physics/math/Vector"), s.FamousPhysics.Math_matrix = t("famous-physics/math/matrix"), s.FamousPhysics.Utils_PhysicsTransition = t("famous-physics/utils/PhysicsTransition"), s.FamousPhysics.Utils_PhysicsTransition2 = t("famous-physics/utils/PhysicsTransition2"), s.FamousPhysics.Utils_SpringTransition = t("famous-physics/utils/SpringTransition"), s.FamousPhysics.Utils_StiffSpringTransition = t("famous-physics/utils/StiffSpringTransition"), s.FamousPhysics.Utils_WallTransition = t("famous-physics/utils/WallTransition"), s.FamousPhysics.PhysicsEngine = t("famous-physics/PhysicsEngine"), s.FamousSync = {}, s.FamousSync.FastClick = t("famous-sync/FastClick"), s.FamousSync.GenericSync = t("famous-sync/GenericSync"), s.FamousSync.MouseSync = t("famous-sync/MouseSync"), s.FamousSync.PinchSync = t("famous-sync/PinchSync"), s.FamousSync.RotateSync = t("famous-sync/RotateSync"), s.FamousSync.ScaleSync = t("famous-sync/ScaleSync"), s.FamousSync.ScrollSync = t("famous-sync/ScrollSync"), s.FamousSync.TouchSync = t("famous-sync/TouchSync"), s.FamousSync.TouchTracker = t("famous-sync/TouchTracker"), s.FamousSync.TwoFingerSync = t("famous-sync/TwoFingerSync"), s.FamousUtils = {}, s.FamousUtils.FormatTime = t("famous-utils/FormatTime"), s.FamousUtils.KeyCodes = t("famous-utils/KeyCodes"), s.FamousUtils.NoiseImage = t("famous-utils/NoiseImage"), s.FamousUtils.Time = t("famous-utils/Time"), s.FamousUtils.TimeAgo = t("famous-utils/TimeAgo"), s.FamousUtils.Utils = t("famous-utils/Utils"), s.FamousViews = {}, s.FamousViews.CardsLayout = t("famous-views/CardsLayout"), s.FamousViews.ControlSet = t("famous-views/ControlSet"), s.FamousViews.EdgeSwapper = t("famous-views/EdgeSwapper"), s.FamousViews.Fader = t("famous-views/Fader"), s.FamousViews.Flip = t("famous-views/Flip"), s.FamousViews.GridLayout = t("famous-views/GridLayout"), s.FamousViews.HeaderFooterLayout = t("famous-views/HeaderFooterLayout"), s.FamousViews.ImageFader = t("famous-views/ImageFader"), s.FamousViews.LightBox = t("famous-views/LightBox"), s.FamousViews.MediaReader = t("famous-views/MediaReader"), s.FamousViews.RenderArbiter = t("famous-views/RenderArbiter"), s.FamousViews.ScrollContainer = t("famous-views/ScrollContainer"), s.FamousViews.Scrollview = t("famous-views/Scrollview"), s.FamousViews.SequentialLayout = t("famous-views/SequentialLayout"), s.FamousViews.Shaper = t("famous-views/Shaper"), s.FamousWidgets = {}, s.FamousWidgets.FeedItem = t("famous-widgets/FeedItem"), s.FamousWidgets.FeedStream = t("famous-widgets/FeedStream"), s.FamousWidgets.IconBar = t("famous-widgets/IconBar"), s.FamousWidgets.InfoBox = t("famous-widgets/InfoBox"), s.FamousWidgets.NavMenu = t("famous-widgets/NavMenu"), s.FamousWidgets.NavigationBar = t("famous-widgets/NavigationBar"), s.FamousWidgets.ScrollContainer = t("famous-widgets/ScrollContainer"), s.FamousWidgets.ShrinkContainer = t("famous-widgets/ShrinkContainer"), s.FamousWidgets.Slider = t("famous-widgets/Slider"), s.FamousWidgets.TitleBar = t("famous-widgets/TitleBar"), s.FamousWidgets.ToggleButton = t("famous-widgets/ToggleButton"), e.exports = s
    }), require(["lib/classList", "lib/functionPrototypeBind", "lib/requestAnimationFrame", "main"]), require("main")
});

