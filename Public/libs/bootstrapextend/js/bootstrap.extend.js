// 时间插件(jQuery.moment.js)
(function(a) {
    function b(a, b, c) {
        switch (arguments.length) {
            case 2:
                return null != a ? a : b;
            case 3:
                return null != a ? a : null != b ? b : c;
            default:
                throw new Error("Implement me")
        }
    }

    function c(a, b) {
        return Bb.call(a, b)
    }

    function d() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function e(a) {
        vb.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a)
    }

    function f(a, b) {
        var c = !0;
        return o(function() {
            return c && (e(a), c = !1), b.apply(this, arguments)
        }, b)
    }

    function g(a, b) {
        sc[a] || (e(b), sc[a] = !0)
    }

    function h(a, b) {
        return function(c) {
            return r(a.call(this, c), b)
        }
    }

    function i(a, b) {
        return function(c) {
            return this.localeData().ordinal(a.call(this, c), b)
        }
    }

    function j(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
            f = a.clone().add(e, "months");
        return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
    }

    function k(a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
    }

    function l() {}

    function m(a, b) {
        b !== !1 && H(a), p(this, a), this._d = new Date(+a._d), uc === !1 && (uc = !0, vb.updateOffset(this), uc = !1)
    }

    function n(a) {
        var b = A(a),
            c = b.year || 0,
            d = b.quarter || 0,
            e = b.month || 0,
            f = b.week || 0,
            g = b.day || 0,
            h = b.hour || 0,
            i = b.minute || 0,
            j = b.second || 0,
            k = b.millisecond || 0;
        this._milliseconds = +k + 1000 * j + 60000 * i + 3600000 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = vb.localeData(), this._bubble()
    }

    function o(a, b) {
        for (var d in b) {
            c(b, d) && (a[d] = b[d])
        }
        return c(b, "toString") && (a.toString = b.toString), c(b, "valueOf") && (a.valueOf = b.valueOf), a
    }

    function p(a, b) {
        var c, d, e;
        if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = b._pf), "undefined" != typeof b._locale && (a._locale = b._locale), Kb.length > 0) {
            for (c in Kb) {
                d = Kb[c], e = b[d], "undefined" != typeof e && (a[d] = e)
            }
        }
        return a
    }

    function q(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }

    function r(a, b, c) {
        for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) {
            d = "0" + d
        }
        return (e ? c ? "+" : "" : "-") + d
    }

    function s(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
    }

    function t(a, b) {
        var c;
        return b = M(b, a), a.isBefore(b) ? c = s(a, b) : (c = s(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
    }

    function u(a, b) {
        return function(c, d) {
            var e, f;
            return null === d || isNaN(+d) || (g(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = vb.duration(c, d), v(this, e, a), this
        }
    }

    function v(a, b, c, d) {
        var e = b._milliseconds,
            f = b._days,
            g = b._months;
        d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && pb(a, "Date", ob(a, "Date") + f * c), g && nb(a, ob(a, "Month") + g * c), d && vb.updateOffset(a, f || g)
    }

    function w(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function x(a) {
        return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
    }

    function y(a, b, c) {
        var d, e = Math.min(a.length, b.length),
            f = Math.abs(a.length - b.length),
            g = 0;
        for (d = 0; e > d; d++) {
            (c && a[d] !== b[d] || !c && C(a[d]) !== C(b[d])) && g++
        }
        return g + f
    }

    function z(a) {
        if (a) {
            var b = a.toLowerCase().replace(/(.)s$/, "$1");
            a = lc[a] || mc[b] || b
        }
        return a
    }

    function A(a) {
        var b, d, e = {};
        for (d in a) {
            c(a, d) && (b = z(d), b && (e[b] = a[d]))
        }
        return e
    }

    function B(b) {
        var c, d;
        if (0 === b.indexOf("week")) {
            c = 7, d = "day"
        } else {
            if (0 !== b.indexOf("month")) {
                return
            }
            c = 12, d = "month"
        }
        vb[b] = function(e, f) {
            var g, h, i = vb._locale[b],
                j = [];
            if ("number" == typeof e && (f = e, e = a), h = function(a) {
                    var b = vb().utc().set(d, a);
                    return i.call(vb._locale, b, e || "")
                }, null != f) {
                return h(f)
            }
            for (g = 0; c > g; g++) {
                j.push(h(g))
            }
            return j
        }
    }

    function C(a) {
        var b = +a,
            c = 0;
        return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
    }

    function D(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function E(a, b, c) {
        return jb(vb([a, 11, 31 + b - c]), b, c).week
    }

    function F(a) {
        return G(a) ? 366 : 365
    }

    function G(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function H(a) {
        var b;
        a._a && -2 === a._pf.overflow && (b = a._a[Db] < 0 || a._a[Db] > 11 ? Db : a._a[Eb] < 1 || a._a[Eb] > D(a._a[Cb], a._a[Db]) ? Eb : a._a[Fb] < 0 || a._a[Fb] > 24 || 24 === a._a[Fb] && (0 !== a._a[Gb] || 0 !== a._a[Hb] || 0 !== a._a[Ib]) ? Fb : a._a[Gb] < 0 || a._a[Gb] > 59 ? Gb : a._a[Hb] < 0 || a._a[Hb] > 59 ? Hb : a._a[Ib] < 0 || a._a[Ib] > 999 ? Ib : -1, a._pf._overflowDayOfYear && (Cb > b || b > Eb) && (b = Eb), a._pf.overflow = b)
    }

    function I(b) {
        return null == b._isValid && (b._isValid = !isNaN(b._d.getTime()) && b._pf.overflow < 0 && !b._pf.empty && !b._pf.invalidMonth && !b._pf.nullInput && !b._pf.invalidFormat && !b._pf.userInvalidated, b._strict && (b._isValid = b._isValid && 0 === b._pf.charsLeftOver && 0 === b._pf.unusedTokens.length && b._pf.bigHour === a)), b._isValid
    }

    function J(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }

    function K(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = J(a[f]).split("-"), b = e.length, c = J(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = L(e.slice(0, b).join("-"))) {
                    return d
                }
                if (c && c.length >= b && y(e, c, !0) >= b - 1) {
                    break
                }
                b--
            }
            f++
        }
        return null
    }

    function L(a) {
        var b = null;
        if (!Jb[a] && Lb) {
            try {
                b = vb.locale(), require("./locale/" + a), vb.locale(b)
            } catch (c) {}
        }
        return Jb[a]
    }

    function M(a, b) {
        var c, d;
        return b._isUTC ? (c = b.clone(), d = (vb.isMoment(a) || x(a) ? +a : +vb(a)) - +c, c._d.setTime(+c._d + d), vb.updateOffset(c, !1), c) : vb(a).local()
    }

    function N(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function O(a) {
        var b, c, d = a.match(Pb);
        for (b = 0, c = d.length; c > b; b++) {
            d[b] = rc[d[b]] ? rc[d[b]] : N(d[b])
        }
        return function(e) {
            var f = "";
            for (b = 0; c > b; b++) {
                f += d[b] instanceof Function ? d[b].call(e, a) : d[b]
            }
            return f
        }
    }

    function P(a, b) {
        return a.isValid() ? (b = Q(b, a.localeData()), nc[b] || (nc[b] = O(b)), nc[b](a)) : a.localeData().invalidDate()
    }

    function Q(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (Qb.lastIndex = 0; d >= 0 && Qb.test(a);) {
            a = a.replace(Qb, c), Qb.lastIndex = 0, d -= 1
        }
        return a
    }

    function R(a, b) {
        var c, d = b._strict;
        switch (a) {
            case "Q":
                return _b;
            case "DDDD":
                return bc;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return d ? cc : Tb;
            case "Y":
            case "G":
            case "g":
                return ec;
            case "YYYYYY":
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return d ? dc : Ub;
            case "S":
                if (d) {
                    return _b
                }
            case "SS":
                if (d) {
                    return ac
                }
            case "SSS":
                if (d) {
                    return bc
                }
            case "DDD":
                return Sb;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return Wb;
            case "a":
            case "A":
                return b._locale._meridiemParse;
            case "x":
                return Zb;
            case "X":
                return $b;
            case "Z":
            case "ZZ":
                return Xb;
            case "T":
                return Yb;
            case "SSSS":
                return Vb;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "ww":
            case "WW":
                return d ? ac : Rb;
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "W":
            case "e":
            case "E":
                return Rb;
            case "Do":
                return d ? b._locale._ordinalParse : b._locale._ordinalParseLenient;
            default:
                return c = new RegExp($(Z(a.replace("\\", "")), "i"))
        }
    }

    function S(a) {
        a = a || "";
        var b = a.match(Xb) || [],
            c = b[b.length - 1] || [],
            d = (c + "").match(jc) || ["-", 0, 0],
            e = +(60 * d[1]) + C(d[2]);
        return "+" === d[0] ? e : -e
    }

    function T(a, b, c) {
        var d, e = c._a;
        switch (a) {
            case "Q":
                null != b && (e[Db] = 3 * (C(b) - 1));
                break;
            case "M":
            case "MM":
                null != b && (e[Db] = C(b) - 1);
                break;
            case "MMM":
            case "MMMM":
                d = c._locale.monthsParse(b, a, c._strict), null != d ? e[Db] = d : c._pf.invalidMonth = b;
                break;
            case "D":
            case "DD":
                null != b && (e[Eb] = C(b));
                break;
            case "Do":
                null != b && (e[Eb] = C(parseInt(b.match(/\d{1,2}/)[0], 10)));
                break;
            case "DDD":
            case "DDDD":
                null != b && (c._dayOfYear = C(b));
                break;
            case "YY":
                e[Cb] = vb.parseTwoDigitYear(b);
                break;
            case "YYYY":
            case "YYYYY":
            case "YYYYYY":
                e[Cb] = C(b);
                break;
            case "a":
            case "A":
                c._meridiem = b;
                break;
            case "h":
            case "hh":
                c._pf.bigHour = !0;
            case "H":
            case "HH":
                e[Fb] = C(b);
                break;
            case "m":
            case "mm":
                e[Gb] = C(b);
                break;
            case "s":
            case "ss":
                e[Hb] = C(b);
                break;
            case "S":
            case "SS":
            case "SSS":
            case "SSSS":
                e[Ib] = C(1000 * ("0." + b));
                break;
            case "x":
                c._d = new Date(C(b));
                break;
            case "X":
                c._d = new Date(1000 * parseFloat(b));
                break;
            case "Z":
            case "ZZ":
                c._useUTC = !0, c._tzm = S(b);
                break;
            case "dd":
            case "ddd":
            case "dddd":
                d = c._locale.weekdaysParse(b), null != d ? (c._w = c._w || {}, c._w.d = d) : c._pf.invalidWeekday = b;
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "e":
            case "E":
                a = a.substr(0, 1);
            case "gggg":
            case "GGGG":
            case "GGGGG":
                a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = C(b));
                break;
            case "gg":
            case "GG":
                c._w = c._w || {}, c._w[a] = vb.parseTwoDigitYear(b)
        }
    }

    function U(a) {
        var c, d, e, f, g, h, i;
        c = a._w, null != c.GG || null != c.W || null != c.E ? (g = 1, h = 4, d = b(c.GG, a._a[Cb], jb(vb(), 1, 4).year), e = b(c.W, 1), f = b(c.E, 1)) : (g = a._locale._week.dow, h = a._locale._week.doy, d = b(c.gg, a._a[Cb], jb(vb(), g, h).year), e = b(c.w, 1), null != c.d ? (f = c.d, g > f && ++e) : f = null != c.e ? c.e + g : g), i = kb(d, e, f, h, g), a._a[Cb] = i.year, a._dayOfYear = i.dayOfYear
    }

    function V(a) {
        var c, d, e, f, g = [];
        if (!a._d) {
            for (e = X(a), a._w && null == a._a[Eb] && null == a._a[Db] && U(a), a._dayOfYear && (f = b(a._a[Cb], e[Cb]), a._dayOfYear > F(f) && (a._pf._overflowDayOfYear = !0), d = fb(f, 0, a._dayOfYear), a._a[Db] = d.getUTCMonth(), a._a[Eb] = d.getUTCDate()), c = 0; 3 > c && null == a._a[c]; ++c) {
                a._a[c] = g[c] = e[c]
            }
            for (; 7 > c; c++) {
                a._a[c] = g[c] = null == a._a[c] ? 2 === c ? 1 : 0 : a._a[c]
            }
            24 === a._a[Fb] && 0 === a._a[Gb] && 0 === a._a[Hb] && 0 === a._a[Ib] && (a._nextDay = !0, a._a[Fb] = 0), a._d = (a._useUTC ? fb : eb).apply(null, g), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[Fb] = 24)
        }
    }

    function W(a) {
        var b;
        a._d || (b = A(a._i), a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], V(a))
    }

    function X(a) {
        var b = new Date;
        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }

    function Y(b) {
        if (b._f === vb.ISO_8601) {
            return void ab(b)
        }
        b._a = [], b._pf.empty = !0;
        var c, d, e, f, g, h = "" + b._i,
            i = h.length,
            j = 0;
        for (e = Q(b._f, b._locale).match(Pb) || [], c = 0; c < e.length; c++) {
            f = e[c], d = (h.match(R(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && b._pf.unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), rc[f] ? (d ? b._pf.empty = !1 : b._pf.unusedTokens.push(f), T(f, d, b)) : b._strict && !d && b._pf.unusedTokens.push(f)
        }
        b._pf.charsLeftOver = i - j, h.length > 0 && b._pf.unusedInput.push(h), b._pf.bigHour === !0 && b._a[Fb] <= 12 && (b._pf.bigHour = a), b._a[Fb] = k(b._locale, b._a[Fb], b._meridiem), V(b), H(b)
    }

    function Z(a) {
        return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e
        })
    }

    function $(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function _(a) {
        var b, c, e, f, g;
        if (0 === a._f.length) {
            return a._pf.invalidFormat = !0, void(a._d = new Date(0 / 0))
        }
        for (f = 0; f < a._f.length; f++) {
            g = 0, b = p({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._pf = d(), b._f = a._f[f], Y(b), I(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == e || e > g) && (e = g, c = b))
        }
        o(a, c || b)
    }

    function ab(a) {
        var b, c, d = a._i,
            e = fc.exec(d);
        if (e) {
            for (a._pf.iso = !0, b = 0, c = hc.length; c > b; b++) {
                if (hc[b][1].exec(d)) {
                    a._f = hc[b][0] + (e[6] || " ");
                    break
                }
            }
            for (b = 0, c = ic.length; c > b; b++) {
                if (ic[b][1].exec(d)) {
                    a._f += ic[b][0];
                    break
                }
            }
            d.match(Xb) && (a._f += "Z"), Y(a)
        } else {
            a._isValid = !1
        }
    }

    function bb(a) {
        ab(a), a._isValid === !1 && (delete a._isValid, vb.createFromInputFallback(a))
    }

    function cb(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) {
            d.push(b(a[c], c))
        }
        return d
    }

    function db(b) {
        var c, d = b._i;
        d === a ? b._d = new Date : x(d) ? b._d = new Date(+d) : null !== (c = Mb.exec(d)) ? b._d = new Date(+c[1]) : "string" == typeof d ? bb(b) : w(d) ? (b._a = cb(d.slice(0), function(a) {
            return parseInt(a, 10)
        }), V(b)) : "object" == typeof d ? W(b) : "number" == typeof d ? b._d = new Date(d) : vb.createFromInputFallback(b)
    }

    function eb(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 1970 > a && h.setFullYear(a), h
    }

    function fb(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 1970 > a && b.setUTCFullYear(a), b
    }

    function gb(a, b) {
        if ("string" == typeof a) {
            if (isNaN(a)) {
                if (a = b.weekdaysParse(a), "number" != typeof a) {
                    return null
                }
            } else {
                a = parseInt(a, 10)
            }
        }
        return a
    }

    function hb(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function ib(a, b, c) {
        var d = vb.duration(a).abs(),
            e = Ab(d.as("s")),
            f = Ab(d.as("m")),
            g = Ab(d.as("h")),
            h = Ab(d.as("d")),
            i = Ab(d.as("M")),
            j = Ab(d.as("y")),
            k = e < oc.s && ["s", e] || 1 === f && ["m"] || f < oc.m && ["mm", f] || 1 === g && ["h"] || g < oc.h && ["hh", g] || 1 === h && ["d"] || h < oc.d && ["dd", h] || 1 === i && ["M"] || i < oc.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
        return k[2] = b, k[3] = +a > 0, k[4] = c, hb.apply({}, k)
    }

    function jb(a, b, c) {
        var d, e = c - b,
            f = c - a.day();
        return f > e && (f -= 7), e - 7 > f && (f += 7), d = vb(a).add(f, "d"), {
            week: Math.ceil(d.dayOfYear() / 7),
            year: d.year()
        }
    }

    function kb(a, b, c, d, e) {
        var f, g, h = fb(a, 0, 1).getUTCDay();
        return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
            year: g > 0 ? a : a - 1,
            dayOfYear: g > 0 ? g : F(a - 1) + g
        }
    }

    function lb(b) {
        var c, d = b._i,
            e = b._f;
        return b._locale = b._locale || vb.localeData(b._l), null === d || e === a && "" === d ? vb.invalid({
            nullInput: !0
        }) : ("string" == typeof d && (b._i = d = b._locale.preparse(d)), vb.isMoment(d) ? new m(d, !0) : (e ? w(e) ? _(b) : Y(b) : db(b), c = new m(b), c._nextDay && (c.add(1, "d"), c._nextDay = a), c))
    }

    function mb(a, b) {
        var c, d;
        if (1 === b.length && w(b[0]) && (b = b[0]), !b.length) {
            return vb()
        }
        for (c = b[0], d = 1; d < b.length; ++d) {
            b[d][a](c) && (c = b[d])
        }
        return c
    }

    function nb(a, b) {
        var c;
        return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), D(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
    }

    function ob(a, b) {
        return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
    }

    function pb(a, b, c) {
        return "Month" === b ? nb(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function qb(a, b) {
        return function(c) {
            return null != c ? (pb(this, a, c), vb.updateOffset(this, b), this) : ob(this, a)
        }
    }

    function rb(a) {
        return 400 * a / 146097
    }

    function sb(a) {
        return 146097 * a / 400
    }

    function tb(a) {
        vb.duration.fn[a] = function() {
            return this._data[a]
        }
    }

    function ub(a) {
        "undefined" == typeof ender && (wb = zb.moment, zb.moment = a ? f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", vb) : vb)
    }
    for (var vb, wb, xb, yb = "2.9.0", zb = "undefined" == typeof global || "undefined" != typeof window && window !== global.window ? this : global, Ab = Math.round, Bb = Object.prototype.hasOwnProperty, Cb = 0, Db = 1, Eb = 2, Fb = 3, Gb = 4, Hb = 5, Ib = 6, Jb = {}, Kb = [], Lb = "undefined" != typeof module && module && module.exports, Mb = /^\/?Date\((\-?\d+)/i, Nb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ob = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Pb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Qb = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Rb = /\d\d?/, Sb = /\d{1,3}/, Tb = /\d{1,4}/, Ub = /[+\-]?\d{1,6}/, Vb = /\d+/, Wb = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Xb = /Z|[\+\-]\d\d:?\d\d/gi, Yb = /T/i, Zb = /[\+\-]?\d+/, $b = /[\+\-]?\d+(\.\d{1,3})?/, _b = /\d/, ac = /\d\d/, bc = /\d{3}/, cc = /\d{4}/, dc = /[+-]?\d{6}/, ec = /[+-]?\d+/, fc = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, gc = "YYYY-MM-DDTHH:mm:ssZ", hc = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
            ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
            ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d{2}/],
            ["YYYY-DDD", /\d{4}-\d{3}/]
        ], ic = [
            ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ], jc = /([\+\-]|\d\d)/gi, kc = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
            Milliseconds: 1,
            Seconds: 1000,
            Minutes: 60000,
            Hours: 3600000,
            Days: 86400000,
            Months: 2592000000,
            Years: 31536000000
        }), lc = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            D: "date",
            w: "week",
            W: "isoWeek",
            M: "month",
            Q: "quarter",
            y: "year",
            DDD: "dayOfYear",
            e: "weekday",
            E: "isoWeekday",
            gg: "weekYear",
            GG: "isoWeekYear"
        }, mc = {
            dayofyear: "dayOfYear",
            isoweekday: "isoWeekday",
            isoweek: "isoWeek",
            weekyear: "weekYear",
            isoweekyear: "isoWeekYear"
        }, nc = {}, oc = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        }, pc = "DDD w W M D d".split(" "), qc = "M D H h m s w W".split(" "), rc = {
            M: function() {
                return this.month() + 1
            },
            MMM: function(a) {
                return this.localeData().monthsShort(this, a)
            },
            MMMM: function(a) {
                return this.localeData().months(this, a)
            },
            D: function() {
                return this.date()
            },
            DDD: function() {
                return this.dayOfYear()
            },
            d: function() {
                return this.day()
            },
            dd: function(a) {
                return this.localeData().weekdaysMin(this, a)
            },
            ddd: function(a) {
                return this.localeData().weekdaysShort(this, a)
            },
            dddd: function(a) {
                return this.localeData().weekdays(this, a)
            },
            w: function() {
                return this.week()
            },
            W: function() {
                return this.isoWeek()
            },
            YY: function() {
                return r(this.year() % 100, 2)
            },
            YYYY: function() {
                return r(this.year(), 4)
            },
            YYYYY: function() {
                return r(this.year(), 5)
            },
            YYYYYY: function() {
                var a = this.year(),
                    b = a >= 0 ? "+" : "-";
                return b + r(Math.abs(a), 6)
            },
            gg: function() {
                return r(this.weekYear() % 100, 2)
            },
            gggg: function() {
                return r(this.weekYear(), 4)
            },
            ggggg: function() {
                return r(this.weekYear(), 5)
            },
            GG: function() {
                return r(this.isoWeekYear() % 100, 2)
            },
            GGGG: function() {
                return r(this.isoWeekYear(), 4)
            },
            GGGGG: function() {
                return r(this.isoWeekYear(), 5)
            },
            e: function() {
                return this.weekday()
            },
            E: function() {
                return this.isoWeekday()
            },
            a: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function() {
                return this.hours()
            },
            h: function() {
                return this.hours() % 12 || 12
            },
            m: function() {
                return this.minutes()
            },
            s: function() {
                return this.seconds()
            },
            S: function() {
                return C(this.milliseconds() / 100)
            },
            SS: function() {
                return r(C(this.milliseconds() / 10), 2)
            },
            SSS: function() {
                return r(this.milliseconds(), 3)
            },
            SSSS: function() {
                return r(this.milliseconds(), 3)
            },
            Z: function() {
                var a = this.utcOffset(),
                    b = "+";
                return 0 > a && (a = -a, b = "-"), b + r(C(a / 60), 2) + ":" + r(C(a) % 60, 2)
            },
            ZZ: function() {
                var a = this.utcOffset(),
                    b = "+";
                return 0 > a && (a = -a, b = "-"), b + r(C(a / 60), 2) + r(C(a) % 60, 2)
            },
            z: function() {
                return this.zoneAbbr()
            },
            zz: function() {
                return this.zoneName()
            },
            x: function() {
                return this.valueOf()
            },
            X: function() {
                return this.unix()
            },
            Q: function() {
                return this.quarter()
            }
        }, sc = {}, tc = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], uc = !1; pc.length;) {
        xb = pc.pop(), rc[xb + "o"] = i(rc[xb], xb)
    }
    for (; qc.length;) {
        xb = qc.pop(), rc[xb + xb] = h(rc[xb], 2)
    }
    rc.DDDD = h(rc.DDD, 3), o(l.prototype, {
        set: function(a) {
            var b, c;
            for (c in a) {
                b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b
            }
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(a) {
            return this._months[a.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(a) {
            return this._monthsShort[a.month()]
        },
        monthsParse: function(a, b, c) {
            var d, e, f;
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
                if (e = vb.utc([2000, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) {
                    return d
                }
                if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) {
                    return d
                }
                if (!c && this._monthsParse[d].test(a)) {
                    return d
                }
            }
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(a) {
            return this._weekdays[a.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(a) {
            return this._weekdaysShort[a.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(a) {
            return this._weekdaysMin[a.day()]
        },
        weekdaysParse: function(a) {
            var b, c, d;
            for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++) {
                if (this._weekdaysParse[b] || (c = vb([2000, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) {
                    return b
                }
            }
        },
        _longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY LT",
            LLLL: "dddd, MMMM D, YYYY LT"
        },
        longDateFormat: function(a) {
            var b = this._longDateFormat[a];
            return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
                return a.slice(1)
            }), this._longDateFormat[a] = b), b
        },
        isPM: function(a) {
            return "p" === (a + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(a, b, c) {
            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function(a, b, c) {
            var d = this._calendar[a];
            return "function" == typeof d ? d.apply(b, [c]) : d
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function(a, b, c, d) {
            var e = this._relativeTime[c];
            return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
        },
        pastFuture: function(a, b) {
            var c = this._relativeTime[a > 0 ? "future" : "past"];
            return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
        },
        ordinal: function(a) {
            return this._ordinal.replace("%d", a)
        },
        _ordinal: "%d",
        _ordinalParse: /\d{1,2}/,
        preparse: function(a) {
            return a
        },
        postformat: function(a) {
            return a
        },
        week: function(a) {
            return jb(a, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        firstDayOfWeek: function() {
            return this._week.dow
        },
        firstDayOfYear: function() {
            return this._week.doy
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
            return this._invalidDate
        }
    }), vb = function(b, c, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = b, g._f = c, g._l = e, g._strict = f, g._isUTC = !1, g._pf = d(), lb(g)
    }, vb.suppressDeprecationWarnings = !1, vb.createFromInputFallback = f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
    }), vb.min = function() {
        var a = [].slice.call(arguments, 0);
        return mb("isBefore", a)
    }, vb.max = function() {
        var a = [].slice.call(arguments, 0);
        return mb("isAfter", a)
    }, vb.utc = function(b, c, e, f) {
        var g;
        return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = b, g._f = c, g._strict = f, g._pf = d(), lb(g).utc()
    }, vb.unix = function(a) {
        return vb(1000 * a)
    }, vb.duration = function(a, b) {
        var d, e, f, g, h = a,
            i = null;
        return vb.isDuration(a) ? h = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : "number" == typeof a ? (h = {}, b ? h[b] = a : h.milliseconds = a) : (i = Nb.exec(a)) ? (d = "-" === i[1] ? -1 : 1, h = {
            y: 0,
            d: C(i[Eb]) * d,
            h: C(i[Fb]) * d,
            m: C(i[Gb]) * d,
            s: C(i[Hb]) * d,
            ms: C(i[Ib]) * d
        }) : (i = Ob.exec(a)) ? (d = "-" === i[1] ? -1 : 1, f = function(a) {
            var b = a && parseFloat(a.replace(",", "."));
            return (isNaN(b) ? 0 : b) * d
        }, h = {
            y: f(i[2]),
            M: f(i[3]),
            d: f(i[4]),
            h: f(i[5]),
            m: f(i[6]),
            s: f(i[7]),
            w: f(i[8])
        }) : null == h ? h = {} : "object" == typeof h && ("from" in h || "to" in h) && (g = t(vb(h.from), vb(h.to)), h = {}, h.ms = g.milliseconds, h.M = g.months), e = new n(h), vb.isDuration(a) && c(a, "_locale") && (e._locale = a._locale), e
    }, vb.version = yb, vb.defaultFormat = gc, vb.ISO_8601 = function() {}, vb.momentProperties = Kb, vb.updateOffset = function() {}, vb.relativeTimeThreshold = function(b, c) {
        return oc[b] === a ? !1 : c === a ? oc[b] : (oc[b] = c, !0)
    }, vb.lang = f("moment.lang is deprecated. Use moment.locale instead.", function(a, b) {
        return vb.locale(a, b)
    }), vb.locale = function(a, b) {
        var c;
        return a && (c = "undefined" != typeof b ? vb.defineLocale(a, b) : vb.localeData(a), c && (vb.duration._locale = vb._locale = c)), vb._locale._abbr
    }, vb.defineLocale = function(a, b) {
        return null !== b ? (b.abbr = a, Jb[a] || (Jb[a] = new l), Jb[a].set(b), vb.locale(a), Jb[a]) : (delete Jb[a], null)
    }, vb.langData = f("moment.langData is deprecated. Use moment.localeData instead.", function(a) {
        return vb.localeData(a)
    }), vb.localeData = function(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) {
            return vb._locale
        }
        if (!w(a)) {
            if (b = L(a)) {
                return b
            }
            a = [a]
        }
        return K(a)
    }, vb.isMoment = function(a) {
        return a instanceof m || null != a && c(a, "_isAMomentObject")
    }, vb.isDuration = function(a) {
        return a instanceof n
    };
    for (xb = tc.length - 1; xb >= 0; --xb) {
        B(tc[xb])
    }
    vb.normalizeUnits = function(a) {
        return z(a)
    }, vb.invalid = function(a) {
        var b = vb.utc(0 / 0);
        return null != a ? o(b._pf, a) : b._pf.userInvalidated = !0, b
    }, vb.parseZone = function() {
        return vb.apply(null, arguments).parseZone()
    }, vb.parseTwoDigitYear = function(a) {
        return C(a) + (C(a) > 68 ? 1900 : 2000)
    }, vb.isDate = x, o(vb.fn = m.prototype, {
        clone: function() {
            return vb(this)
        },
        valueOf: function() {
            return +this._d - 60000 * (this._offset || 0)
        },
        unix: function() {
            return Math.floor(+this / 1000)
        },
        toString: function() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function() {
            var a = vb(this).utc();
            return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : P(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : P(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function() {
            var a = this;
            return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
        },
        isValid: function() {
            return I(this)
        },
        isDSTShifted: function() {
            return this._a ? this.isValid() && y(this._a, (this._isUTC ? vb.utc(this._a) : vb(this._a)).toArray()) > 0 : !1
        },
        parsingFlags: function() {
            return o({}, this._pf)
        },
        invalidAt: function() {
            return this._pf.overflow
        },
        utc: function(a) {
            return this.utcOffset(0, a)
        },
        local: function(a) {
            return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(this._dateUtcOffset(), "m")), this
        },
        format: function(a) {
            var b = P(this, a || vb.defaultFormat);
            return this.localeData().postformat(b)
        },
        add: u(1, "add"),
        subtract: u(-1, "subtract"),
        diff: function(a, b, c) {
            var d, e, f = M(a, this),
                g = 60000 * (f.utcOffset() - this.utcOffset());
            return b = z(b), "year" === b || "month" === b || "quarter" === b ? (e = j(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1000 : "minute" === b ? d / 60000 : "hour" === b ? d / 3600000 : "day" === b ? (d - g) / 86400000 : "week" === b ? (d - g) / 604800000 : d), c ? e : q(e)
        },
        from: function(a, b) {
            return vb.duration({
                to: this,
                from: a
            }).locale(this.locale()).humanize(!b)
        },
        fromNow: function(a) {
            return this.from(vb(), a)
        },
        calendar: function(a) {
            var b = a || vb(),
                c = M(b, this).startOf("day"),
                d = this.diff(c, "days", !0),
                e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse";
            return this.format(this.localeData().calendar(e, this, vb(b)))
        },
        isLeapYear: function() {
            return G(this.year())
        },
        isDST: function() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        },
        day: function(a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != a ? (a = gb(a, this.localeData()), this.add(a - b, "d")) : b
        },
        month: qb("Month", !0),
        startOf: function(a) {
            switch (a = z(a)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
        },
        endOf: function(b) {
            return b = z(b), b === a || "millisecond" === b ? this : this.startOf(b).add(1, "isoWeek" === b ? "week" : b).subtract(1, "ms")
        },
        isAfter: function(a, b) {
            var c;
            return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +this > +a) : (c = vb.isMoment(a) ? +a : +vb(a), c < +this.clone().startOf(b))
        },
        isBefore: function(a, b) {
            var c;
            return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +a > +this) : (c = vb.isMoment(a) ? +a : +vb(a), +this.clone().endOf(b) < c)
        },
        isBetween: function(a, b, c) {
            return this.isAfter(a, c) && this.isBefore(b, c)
        },
        isSame: function(a, b) {
            var c;
            return b = z(b || "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +this === +a) : (c = +vb(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))
        },
        min: f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(a) {
            return a = vb.apply(null, arguments), this > a ? this : a
        }),
        max: f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(a) {
            return a = vb.apply(null, arguments), a > this ? this : a
        }),
        zone: f("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function(a, b) {
            return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
        }),
        utcOffset: function(a, b) {
            var c, d = this._offset || 0;
            return null != a ? ("string" == typeof a && (a = S(a)), Math.abs(a) < 16 && (a = 60 * a), !this._isUTC && b && (c = this._dateUtcOffset()), this._offset = a, this._isUTC = !0, null != c && this.add(c, "m"), d !== a && (!b || this._changeInProgress ? v(this, vb.duration(a - d, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, vb.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? d : this._dateUtcOffset()
        },
        isLocal: function() {
            return !this._isUTC
        },
        isUtcOffset: function() {
            return this._isUTC
        },
        isUtc: function() {
            return this._isUTC && 0 === this._offset
        },
        zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(S(this._i)), this
        },
        hasAlignedHourOffset: function(a) {
            return a = a ? vb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0
        },
        daysInMonth: function() {
            return D(this.year(), this.month())
        },
        dayOfYear: function(a) {
            var b = Ab((vb(this).startOf("day") - vb(this).startOf("year")) / 86400000) + 1;
            return null == a ? b : this.add(a - b, "d")
        },
        quarter: function(a) {
            return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
        },
        weekYear: function(a) {
            var b = jb(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == a ? b : this.add(a - b, "y")
        },
        isoWeekYear: function(a) {
            var b = jb(this, 1, 4).year;
            return null == a ? b : this.add(a - b, "y")
        },
        week: function(a) {
            var b = this.localeData().week(this);
            return null == a ? b : this.add(7 * (a - b), "d")
        },
        isoWeek: function(a) {
            var b = jb(this, 1, 4).week;
            return null == a ? b : this.add(7 * (a - b), "d")
        },
        weekday: function(a) {
            var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == a ? b : this.add(a - b, "d")
        },
        isoWeekday: function(a) {
            return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
        },
        isoWeeksInYear: function() {
            return E(this.year(), 1, 4)
        },
        weeksInYear: function() {
            var a = this.localeData()._week;
            return E(this.year(), a.dow, a.doy)
        },
        get: function(a) {
            return a = z(a), this[a]()
        },
        set: function(a, b) {
            var c;
            if ("object" == typeof a) {
                for (c in a) {
                    this.set(c, a[c])
                }
            } else {
                a = z(a), "function" == typeof this[a] && this[a](b)
            }
            return this
        },
        locale: function(b) {
            var c;
            return b === a ? this._locale._abbr : (c = vb.localeData(b), null != c && (this._locale = c), this)
        },
        lang: f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(b) {
            return b === a ? this.localeData() : this.locale(b)
        }),
        localeData: function() {
            return this._locale
        },
        _dateUtcOffset: function() {
            return 15 * -Math.round(this._d.getTimezoneOffset() / 15)
        }
    }), vb.fn.millisecond = vb.fn.milliseconds = qb("Milliseconds", !1), vb.fn.second = vb.fn.seconds = qb("Seconds", !1), vb.fn.minute = vb.fn.minutes = qb("Minutes", !1), vb.fn.hour = vb.fn.hours = qb("Hours", !0), vb.fn.date = qb("Date", !0), vb.fn.dates = f("dates accessor is deprecated. Use date instead.", qb("Date", !0)), vb.fn.year = qb("FullYear", !0), vb.fn.years = f("years accessor is deprecated. Use year instead.", qb("FullYear", !0)), vb.fn.days = vb.fn.day, vb.fn.months = vb.fn.month, vb.fn.weeks = vb.fn.week, vb.fn.isoWeeks = vb.fn.isoWeek, vb.fn.quarters = vb.fn.quarter, vb.fn.toJSON = vb.fn.toISOString, vb.fn.isUTC = vb.fn.isUtc, o(vb.duration.fn = n.prototype, {
        _bubble: function() {
            var a, b, c, d = this._milliseconds,
                e = this._days,
                f = this._months,
                g = this._data,
                h = 0;
            g.milliseconds = d % 1000, a = q(d / 1000), g.seconds = a % 60, b = q(a / 60), g.minutes = b % 60, c = q(b / 60), g.hours = c % 24, e += q(c / 24), h = q(rb(e)), e -= q(sb(h)), f += q(e / 30), e %= 30, h += q(f / 12), f %= 12, g.days = e, g.months = f, g.years = h
        },
        abs: function() {
            return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
        },
        weeks: function() {
            return q(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + 86400000 * this._days + this._months % 12 * 2592000000 + 31536000000 * C(this._months / 12)
        },
        humanize: function(a) {
            var b = ib(this, !a, this.localeData());
            return a && (b = this.localeData().pastFuture(+this, b)), this.localeData().postformat(b)
        },
        add: function(a, b) {
            var c = vb.duration(a, b);
            return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
        },
        subtract: function(a, b) {
            var c = vb.duration(a, b);
            return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
        },
        get: function(a) {
            return a = z(a), this[a.toLowerCase() + "s"]()
        },
        as: function(a) {
            var b, c;
            if (a = z(a), "month" === a || "year" === a) {
                return b = this._days + this._milliseconds / 86400000, c = this._months + 12 * rb(b), "month" === a ? c : c / 12
            }
            switch (b = this._days + Math.round(sb(this._months / 12)), a) {
                case "week":
                    return b / 7 + this._milliseconds / 604800000;
                case "day":
                    return b + this._milliseconds / 86400000;
                case "hour":
                    return 24 * b + this._milliseconds / 3600000;
                case "minute":
                    return 24 * b * 60 + this._milliseconds / 60000;
                case "second":
                    return 24 * b * 60 * 60 + this._milliseconds / 1000;
                case "millisecond":
                    return Math.floor(24 * b * 60 * 60 * 1000) + this._milliseconds;
                default:
                    throw new Error("Unknown unit " + a)
            }
        },
        lang: vb.fn.lang,
        locale: vb.fn.locale,
        toIsoString: f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
            return this.toISOString()
        }),
        toISOString: function() {
            var a = Math.abs(this.years()),
                b = Math.abs(this.months()),
                c = Math.abs(this.days()),
                d = Math.abs(this.hours()),
                e = Math.abs(this.minutes()),
                f = Math.abs(this.seconds() + this.milliseconds() / 1000);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
        },
        localeData: function() {
            return this._locale
        },
        toJSON: function() {
            return this.toISOString()
        }
    }), vb.duration.fn.toString = vb.duration.fn.toISOString;
    for (xb in kc) {
        c(kc, xb) && tb(xb.toLowerCase())
    }
    vb.duration.fn.asMilliseconds = function() {
        return this.as("ms")
    }, vb.duration.fn.asSeconds = function() {
        return this.as("s")
    }, vb.duration.fn.asMinutes = function() {
        return this.as("m")
    }, vb.duration.fn.asHours = function() {
        return this.as("h")
    }, vb.duration.fn.asDays = function() {
        return this.as("d")
    }, vb.duration.fn.asWeeks = function() {
        return this.as("weeks")
    }, vb.duration.fn.asMonths = function() {
        return this.as("M")
    }, vb.duration.fn.asYears = function() {
        return this.as("y")
    }, vb.locale("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var b = a % 10,
                c = 1 === C(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }), Lb ? module.exports = vb : "function" == typeof define && define.amd ? (define(function(a, b, c) {
        return c.config && c.config() && c.config().noGlobal === !0 && (zb.moment = wb), vb
    }), ub(!0)) : ub()
}).call(this);

// 日期选择插件(Bootstrap.daterangepicker 依赖时间插件(jQuery moment.js))
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["moment", "jquery", "exports"], function(momentjs, $, exports) {
            root.daterangepicker = factory(root, exports, momentjs, $)
        })
    } else {
        if (typeof exports !== "undefined") {
            var momentjs = require("moment");
            var jQuery;
            try {
                jQuery = require("jquery")
            } catch (err) {
                jQuery = window.jQuery;
                if (!jQuery) {
                    throw new Error("jQuery dependency not found")
                }
            }
            factory(root, exports, momentjs, jQuery)
        } else {
            root.daterangepicker = factory(root, {}, root.moment, (root.jQuery || root.Zepto || root.ender || root.$))
        }
    }
}(this, function(root, daterangepicker, moment, $) {
    var DateRangePicker = function(element, options, cb) {
        this.parentEl = "body";
        this.element = $(element);
        this.isShowing = false;
        var DRPTemplate = '<div class="daterangepicker dropdown-menu">' + '<div class="calendar first left"></div>' + '<div class="calendar second right"></div>' + '<div class="ranges">' + '<div class="range_inputs">' + '<div class="daterangepicker_start_input">' + '<label for="daterangepicker_start"></label>' + '<input class="input-mini" type="text" name="daterangepicker_start" value="" />' + "</div>" + '<div class="daterangepicker_end_input">' + '<label for="daterangepicker_end"></label>' + '<input class="input-mini" type="text" name="daterangepicker_end" value="" />' + "</div>" + '<button class="applyBtn" disabled="disabled"></button>&nbsp;' + '<button class="cancelBtn"></button>' + "</div>" + "</div>" + "</div>";
        if (typeof options !== "object" || options === null) {
            options = {}
        }
        this.parentEl = (typeof options === "object" && options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(DRPTemplate).appendTo(this.parentEl);
        this.setOptions(options, cb);
        this.container.find(".calendar").on("click.daterangepicker", ".prev", $.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", $.proxy(this.clickNext, this)).on("click.daterangepicker", "td.available", $.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", $.proxy(this.hoverDate, this)).on("mouseleave.daterangepicker", "td.available", $.proxy(this.updateFormInputs, this)).on("change.daterangepicker", "select.yearselect", $.proxy(this.updateMonthYear, this)).on("change.daterangepicker", "select.monthselect", $.proxy(this.updateMonthYear, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", $.proxy(this.updateTime, this));
        this.container.find(".ranges").on("click.daterangepicker", "button.applyBtn", $.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", $.proxy(this.clickCancel, this)).on("click.daterangepicker", ".daterangepicker_start_input,.daterangepicker_end_input", $.proxy(this.showCalendars, this)).on("change.daterangepicker", ".daterangepicker_start_input,.daterangepicker_end_input", $.proxy(this.inputsChanged, this)).on("keydown.daterangepicker", ".daterangepicker_start_input,.daterangepicker_end_input", $.proxy(this.inputsKeydown, this)).on("click.daterangepicker", "li", $.proxy(this.clickRange, this)).on("mouseenter.daterangepicker", "li", $.proxy(this.enterRange, this)).on("mouseleave.daterangepicker", "li", $.proxy(this.updateFormInputs, this));
        if (this.element.is("input")) {
            this.element.on({
                "click.daterangepicker": $.proxy(this.show, this),
                "focus.daterangepicker": $.proxy(this.show, this),
                "keyup.daterangepicker": $.proxy(this.updateFromControl, this),
                "keydown.daterangepicker": $.proxy(this.keydown, this)
            })
        } else {
            this.element.on("click.daterangepicker", $.proxy(this.toggle, this))
        }
    };
    DateRangePicker.prototype = {
        constructor: DateRangePicker,
        setOptions: function(options, callback) {
            this.startDate = moment().startOf("day");
            this.endDate = moment().endOf("day");
            this.timeZone = moment().utcOffset();
            this.minDate = false;
            this.maxDate = false;
            this.dateLimit = false;
            this.showDropdowns = false;
            this.showWeekNumbers = false;
            this.timePicker = false;
            this.timePickerSeconds = false;
            this.timePickerIncrement = 30;
            this.timePicker12Hour = true;
            this.singleDatePicker = false;
            this.ranges = {};
            this.opens = "right";
            if (this.element.hasClass("pull-right")) {
                this.opens = "left"
            }
            this.drops = "down";
            if (this.element.hasClass("dropup")) {
                this.drops = "up"
            }
            this.buttonClasses = ["btn", "btn-small btn-sm"];
            this.applyClass = "btn-success";
            this.cancelClass = "btn-default";
            this.format = "MM/DD/YYYY";
            this.separator = " - ";
            this.locale = {
                applyLabel: "Apply",
                cancelLabel: "Cancel",
                fromLabel: "From",
                toLabel: "To",
                weekLabel: "W",
                customRangeLabel: "Custom Range",
                daysOfWeek: moment.weekdaysMin(),
                monthNames: moment.monthsShort(),
                firstDay: moment.localeData()._week.dow
            };
            this.cb = function() {};
            if (typeof options.format === "string") {
                this.format = options.format
            }
            if (typeof options.separator === "string") {
                this.separator = options.separator
            }
            if (typeof options.startDate === "string") {
                this.startDate = moment(options.startDate, this.format)
            }
            if (typeof options.endDate === "string") {
                this.endDate = moment(options.endDate, this.format)
            }
            if (typeof options.minDate === "string") {
                this.minDate = moment(options.minDate, this.format)
            }
            if (typeof options.maxDate === "string") {
                this.maxDate = moment(options.maxDate, this.format)
            }
            if (typeof options.startDate === "object") {
                this.startDate = moment(options.startDate)
            }
            if (typeof options.endDate === "object") {
                this.endDate = moment(options.endDate)
            }
            if (typeof options.minDate === "object") {
                this.minDate = moment(options.minDate)
            }
            if (typeof options.maxDate === "object") {
                this.maxDate = moment(options.maxDate)
            }
            if (typeof options.applyClass === "string") {
                this.applyClass = options.applyClass
            }
            if (typeof options.cancelClass === "string") {
                this.cancelClass = options.cancelClass
            }
            if (typeof options.dateLimit === "object") {
                this.dateLimit = options.dateLimit
            }
            if (typeof options.locale === "object") {
                if (typeof options.locale.daysOfWeek === "object") {
                    this.locale.daysOfWeek = options.locale.daysOfWeek.slice()
                }
                if (typeof options.locale.monthNames === "object") {
                    this.locale.monthNames = options.locale.monthNames.slice()
                }
                if (typeof options.locale.firstDay === "number") {
                    this.locale.firstDay = options.locale.firstDay
                }
                if (typeof options.locale.applyLabel === "string") {
                    this.locale.applyLabel = options.locale.applyLabel
                }
                if (typeof options.locale.cancelLabel === "string") {
                    this.locale.cancelLabel = options.locale.cancelLabel
                }
                if (typeof options.locale.fromLabel === "string") {
                    this.locale.fromLabel = options.locale.fromLabel
                }
                if (typeof options.locale.toLabel === "string") {
                    this.locale.toLabel = options.locale.toLabel
                }
                if (typeof options.locale.weekLabel === "string") {
                    this.locale.weekLabel = options.locale.weekLabel
                }
                if (typeof options.locale.customRangeLabel === "string") {
                    this.locale.customRangeLabel = options.locale.customRangeLabel
                }
            }
            if (typeof options.opens === "string") {
                this.opens = options.opens
            }
            if (typeof options.drops === "string") {
                this.drops = options.drops
            }
            if (typeof options.showWeekNumbers === "boolean") {
                this.showWeekNumbers = options.showWeekNumbers
            }
            if (typeof options.buttonClasses === "string") {
                this.buttonClasses = [options.buttonClasses]
            }
            if (typeof options.buttonClasses === "object") {
                this.buttonClasses = options.buttonClasses
            }
            if (typeof options.showDropdowns === "boolean") {
                this.showDropdowns = options.showDropdowns
            }
            if (typeof options.singleDatePicker === "boolean") {
                this.singleDatePicker = options.singleDatePicker;
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone()
                }
            }
            if (typeof options.timePicker === "boolean") {
                this.timePicker = options.timePicker
            }
            if (typeof options.timePickerSeconds === "boolean") {
                this.timePickerSeconds = options.timePickerSeconds
            }
            if (typeof options.timePickerIncrement === "number") {
                this.timePickerIncrement = options.timePickerIncrement
            }
            if (typeof options.timePicker12Hour === "boolean") {
                this.timePicker12Hour = options.timePicker12Hour
            }
            if (this.locale.firstDay != 0) {
                var iterator = this.locale.firstDay;
                while (iterator > 0) {
                    this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                    iterator--
                }
            }
            var start, end, range;
            if (typeof options.startDate === "undefined" && typeof options.endDate === "undefined") {
                if ($(this.element).is("input[type=text]")) {
                    var val = $(this.element).val(),
                        split = val.split(this.separator);
                    start = end = null;
                    if (split.length == 2) {
                        start = moment(split[0], this.format);
                        end = moment(split[1], this.format)
                    } else {
                        if (this.singleDatePicker && val !== "") {
                            start = moment(val, this.format);
                            end = moment(val, this.format)
                        }
                    }
                    if (start !== null && end !== null) {
                        this.startDate = start;
                        this.endDate = end
                    }
                }
            }
            if (typeof options.timeZone === "string" || typeof options.timeZone === "number") {
                if (typeof options.timeZone === "string" && typeof moment.tz !== "undefined") {
                    this.timeZone = moment.tz.zone(options.timeZone).parse(new Date) * -1
                } else {
                    this.timeZone = options.timeZone
                }
                this.startDate.utcOffset(this.timeZone);
                this.endDate.utcOffset(this.timeZone)
            } else {
                this.timeZone = moment(this.startDate).utcOffset()
            }
            if (typeof options.ranges === "object") {
                for (range in options.ranges) {
                    if (typeof options.ranges[range][0] === "string") {
                        start = moment(options.ranges[range][0], this.format)
                    } else {
                        start = moment(options.ranges[range][0])
                    }
                    if (typeof options.ranges[range][1] === "string") {
                        end = moment(options.ranges[range][1], this.format)
                    } else {
                        end = moment(options.ranges[range][1])
                    }
                    if (this.minDate && start.isBefore(this.minDate)) {
                        start = moment(this.minDate)
                    }
                    if (this.maxDate && end.isAfter(this.maxDate)) {
                        end = moment(this.maxDate)
                    }
                    if ((this.minDate && end.isBefore(this.minDate)) || (this.maxDate && start.isAfter(this.maxDate))) {
                        continue
                    }
                    this.ranges[range] = [start, end]
                }
                var list = "<ul>";
                for (range in this.ranges) {
                    list += "<li>" + range + "</li>"
                }
                list += "<li>" + this.locale.customRangeLabel + "</li>";
                list += "</ul>";
                this.container.find(".ranges ul").remove();
                this.container.find(".ranges").prepend(list)
            }
            if (typeof callback === "function") {
                this.cb = callback
            }
            if (!this.timePicker) {
                this.startDate = this.startDate.startOf("day");
                this.endDate = this.endDate.endOf("day")
            }
            if (this.singleDatePicker) {
                this.opens = "right";
                this.container.addClass("single");
                this.container.find(".calendar.right").show();
                this.container.find(".calendar.left").hide();
                if (!this.timePicker) {
                    this.container.find(".ranges").hide()
                } else {
                    this.container.find(".ranges .daterangepicker_start_input, .ranges .daterangepicker_end_input").hide()
                }
                if (!this.container.find(".calendar.right").hasClass("single")) {
                    this.container.find(".calendar.right").addClass("single")
                }
            } else {
                this.container.removeClass("single");
                this.container.find(".calendar.right").removeClass("single");
                this.container.find(".ranges").show()
            }
            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.oldChosenLabel = this.chosenLabel;
            this.leftCalendar = {
                month: moment([this.startDate.year(), this.startDate.month(), 1, this.startDate.hour(), this.startDate.minute(), this.startDate.second()]),
                calendar: []
            };
            this.rightCalendar = {
                month: moment([this.endDate.year(), this.endDate.month(), 1, this.endDate.hour(), this.endDate.minute(), this.endDate.second()]),
                calendar: []
            };
            if (this.opens == "right" || this.opens == "center") {
                var first = this.container.find(".calendar.first");
                var second = this.container.find(".calendar.second");
                if (second.hasClass("single")) {
                    second.removeClass("single");
                    first.addClass("single")
                }
                first.removeClass("left").addClass("right");
                second.removeClass("right").addClass("left");
                if (this.singleDatePicker) {
                    first.show();
                    second.hide()
                }
            }
            if (typeof options.ranges === "undefined" && !this.singleDatePicker) {
                this.container.addClass("show-calendar")
            }
            this.container.removeClass("opensleft opensright").addClass("opens" + this.opens);
            this.updateView();
            this.updateCalendars();
            var c = this.container;
            $.each(this.buttonClasses, function(idx, val) {
                c.find("button").addClass(val)
            });
            this.container.find(".daterangepicker_start_input label").html(this.locale.fromLabel);
            this.container.find(".daterangepicker_end_input label").html(this.locale.toLabel);
            if (this.applyClass.length) {
                this.container.find(".applyBtn").addClass(this.applyClass)
            }
            if (this.cancelClass.length) {
                this.container.find(".cancelBtn").addClass(this.cancelClass)
            }
            this.container.find(".applyBtn").html(this.locale.applyLabel);
            this.container.find(".cancelBtn").html(this.locale.cancelLabel)
        },
        setStartDate: function(startDate) {
            if (typeof startDate === "string") {
                this.startDate = moment(startDate, this.format).utcOffset(this.timeZone)
            }
            if (typeof startDate === "object") {
                this.startDate = moment(startDate)
            }
            if (!this.timePicker) {
                this.startDate = this.startDate.startOf("day")
            }
            this.oldStartDate = this.startDate.clone();
            this.updateView();
            this.updateCalendars();
            this.updateInputText()
        },
        setEndDate: function(endDate) {
            if (typeof endDate === "string") {
                this.endDate = moment(endDate, this.format).utcOffset(this.timeZone)
            }
            if (typeof endDate === "object") {
                this.endDate = moment(endDate)
            }
            if (!this.timePicker) {
                this.endDate = this.endDate.endOf("day")
            }
            this.oldEndDate = this.endDate.clone();
            this.updateView();
            this.updateCalendars();
            this.updateInputText()
        },
        updateView: function() {
            this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute());
            this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute());
            this.updateFormInputs()
        },
        updateFormInputs: function() {
            this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.format));
            this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.format));
            if (this.startDate.isSame(this.endDate) || this.startDate.isBefore(this.endDate)) {
                this.container.find("button.applyBtn").removeAttr("disabled")
            } else {
                this.container.find("button.applyBtn").attr("disabled", "disabled")
            }
        },
        updateFromControl: function() {
            if (!this.element.is("input")) {
                return
            }
            if (!this.element.val().length) {
                return
            }
            var dateString = this.element.val().split(this.separator),
                start = null,
                end = null;
            if (dateString.length === 2) {
                start = moment(dateString[0], this.format).utcOffset(this.timeZone);
                end = moment(dateString[1], this.format).utcOffset(this.timeZone)
            }
            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.format).utcOffset(this.timeZone);
                end = start
            }
            if (end.isBefore(start)) {
                return
            }
            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.startDate = start;
            this.endDate = end;
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate)) {
                this.notify()
            }
            this.updateCalendars()
        },
        keydown: function(e) {
            if ((e.keyCode === 9) || (e.keyCode === 13)) {
                this.hide()
            }
        },
        notify: function() {
            this.updateView();
            this.cb(this.startDate, this.endDate, this.chosenLabel)
        },
        move: function() {
            var parentOffset = {
                    top: 0,
                    left: 0
                },
                containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is("body")) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left
            }
            if (this.drops == "up") {
                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top
            } else {
                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top
            }
            this.container[this.drops == "up" ? "addClass" : "removeClass"]("dropup");
            if (this.opens == "left") {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: "auto"
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: "auto",
                        left: 9
                    })
                }
            } else {
                if (this.opens == "center") {
                    this.container.css({
                        top: containerTop,
                        left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                        right: "auto"
                    });
                    if (this.container.offset().left < 0) {
                        this.container.css({
                            right: "auto",
                            left: 9
                        })
                    }
                } else {
                    this.container.css({
                        top: containerTop,
                        left: this.element.offset().left - parentOffset.left,
                        right: "auto"
                    });
                    if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                        this.container.css({
                            left: "auto",
                            right: 0
                        })
                    }
                }
            }
        },
        toggle: function(e) {
            if (this.element.hasClass("active")) {
                this.hide()
            } else {
                this.show()
            }
        },
        show: function(e) {
            if (this.isShowing) {
                return
            }
            this.element.addClass("active");
            this.container.show();
            this.move();
            this._outsideClickProxy = $.proxy(function(e) {
                this.outsideClick(e)
            }, this);
            $(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy);
            this.isShowing = true;
            this.element.trigger("show.daterangepicker", this)
        },
        outsideClick: function(e) {
            var target = $(e.target);
            if (e.type == "focusin" || target.closest(this.element).length || target.closest(this.container).length || target.closest(".calendar-date").length) {
                return
            }
            this.hide()
        },
        hide: function(e) {
            if (!this.isShowing) {
                return
            }
            $(document).off(".daterangepicker");
            this.element.removeClass("active");
            this.container.hide();
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate)) {
                this.notify()
            }
            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.isShowing = false;
            this.element.trigger("hide.daterangepicker", this)
        },
        enterRange: function(e) {
            var label = e.target.innerHTML;
            if (label == this.locale.customRangeLabel) {
                this.updateView()
            } else {
                var dates = this.ranges[label];
                this.container.find("input[name=daterangepicker_start]").val(dates[0].format(this.format));
                this.container.find("input[name=daterangepicker_end]").val(dates[1].format(this.format))
            }
        },
        showCalendars: function() {
            this.container.addClass("show-calendar");
            this.move();
            this.element.trigger("showCalendar.daterangepicker", this)
        },
        hideCalendars: function() {
            this.container.removeClass("show-calendar");
            this.element.trigger("hideCalendar.daterangepicker", this)
        },
        inputsChanged: function(e) {
            var el = $(e.target);
            var date = moment(el.val(), this.format);
            if (!date.isValid()) {
                return
            }
            var startDate, endDate;
            if (el.attr("name") === "daterangepicker_start") {
                startDate = (false !== this.minDate && date.isBefore(this.minDate)) ? this.minDate : date;
                endDate = this.endDate
            } else {
                startDate = this.startDate;
                endDate = (false !== this.maxDate && date.isAfter(this.maxDate)) ? this.maxDate : date
            }
            this.setCustomDates(startDate, endDate)
        },
        inputsKeydown: function(e) {
            if (e.keyCode === 13) {
                this.inputsChanged(e);
                this.notify()
            }
        },
        updateInputText: function() {
            if (this.element.is("input") && !this.singleDatePicker) {
                this.element.val(this.startDate.format(this.format) + this.separator + this.endDate.format(this.format));
                this.element.trigger("change")
            } else {
                if (this.element.is("input")) {
                    this.element.val(this.endDate.format(this.format));
                    this.element.trigger("change")
                }
            }
        },
        clickRange: function(e) {
            var label = e.target.innerHTML;
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars()
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];
                if (!this.timePicker) {
                    this.startDate.startOf("day");
                    this.endDate.endOf("day")
                }
                this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute());
                this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute());
                this.updateCalendars();
                this.updateInputText();
                this.hideCalendars();
                this.hide();
                this.element.trigger("apply.daterangepicker", this)
            }
        },
        clickPrev: function(e) {
            var cal = $(e.target).parents(".calendar");
            if (cal.hasClass("left")) {
                this.leftCalendar.month.subtract(1, "month")
            } else {
                this.rightCalendar.month.subtract(1, "month")
            }
            this.updateCalendars()
        },
        clickNext: function(e) {
            var cal = $(e.target).parents(".calendar");
            if (cal.hasClass("left")) {
                this.leftCalendar.month.add(1, "month")
            } else {
                this.rightCalendar.month.add(1, "month")
            }
            this.updateCalendars()
        },
        hoverDate: function(e) {
            var title = $(e.target).attr("data-title");
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents(".calendar");
            if (cal.hasClass("left")) {
                this.container.find("input[name=daterangepicker_start]").val(this.leftCalendar.calendar[row][col].format(this.format))
            } else {
                this.container.find("input[name=daterangepicker_end]").val(this.rightCalendar.calendar[row][col].format(this.format))
            }
        },
        setCustomDates: function(startDate, endDate) {
            this.chosenLabel = this.locale.customRangeLabel;
            if (startDate.isAfter(endDate)) {
                var difference = this.endDate.diff(this.startDate);
                endDate = moment(startDate).add(difference, "ms");
                if (this.maxDate && endDate.isAfter(this.maxDate)) {
                    endDate = this.maxDate.clone()
                }
            }
            this.startDate = startDate;
            this.endDate = endDate;
            this.updateView();
            this.updateCalendars()
        },
        clickDate: function(e) {
            var title = $(e.target).attr("data-title");
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents(".calendar");
            var startDate, endDate;
            if (cal.hasClass("left")) {
                startDate = this.leftCalendar.calendar[row][col];
                endDate = this.endDate;
                if (typeof this.dateLimit === "object") {
                    var maxDate = moment(startDate).add(this.dateLimit).startOf("day");
                    if (endDate.isAfter(maxDate)) {
                        endDate = maxDate
                    }
                }
            } else {
                startDate = this.startDate;
                endDate = this.rightCalendar.calendar[row][col];
                if (typeof this.dateLimit === "object") {
                    var minDate = moment(endDate).subtract(this.dateLimit).startOf("day");
                    if (startDate.isBefore(minDate)) {
                        startDate = minDate
                    }
                }
            }
            if (this.singleDatePicker && cal.hasClass("left")) {
                endDate = startDate.clone()
            } else {
                if (this.singleDatePicker && cal.hasClass("right")) {
                    startDate = endDate.clone()
                }
            }
            cal.find("td").removeClass("active");
            $(e.target).addClass("active");
            this.setCustomDates(startDate, endDate);
            if (!this.timePicker) {
                endDate.endOf("day")
            }
            if (this.singleDatePicker && !this.timePicker) {
                this.clickApply()
            }
        },
        clickApply: function(e) {
            this.updateInputText();
            this.hide();
            this.element.trigger("apply.daterangepicker", this)
        },
        clickCancel: function(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.chosenLabel = this.oldChosenLabel;
            this.updateView();
            this.updateCalendars();
            this.hide();
            this.element.trigger("cancel.daterangepicker", this)
        },
        updateMonthYear: function(e) {
            var isLeft = $(e.target).closest(".calendar").hasClass("left"),
                leftOrRight = isLeft ? "left" : "right",
                cal = this.container.find(".calendar." + leftOrRight);
            var month = parseInt(cal.find(".monthselect").val(), 10);
            var year = cal.find(".yearselect").val();
            if (!isLeft && !this.singleDatePicker) {
                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
                    month = this.startDate.month();
                    year = this.startDate.year()
                }
            }
            if (this.minDate) {
                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
                    month = this.minDate.month();
                    year = this.minDate.year()
                }
            }
            if (this.maxDate) {
                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
                    month = this.maxDate.month();
                    year = this.maxDate.year()
                }
            }
            this[leftOrRight + "Calendar"].month.month(month).year(year);
            this.updateCalendars()
        },
        updateTime: function(e) {
            var cal = $(e.target).closest(".calendar"),
                isLeft = cal.hasClass("left");
            var hour = parseInt(cal.find(".hourselect").val(), 10);
            var minute = parseInt(cal.find(".minuteselect").val(), 10);
            var second = 0;
            if (this.timePickerSeconds) {
                second = parseInt(cal.find(".secondselect").val(), 10)
            }
            if (this.timePicker12Hour) {
                var ampm = cal.find(".ampmselect").val();
                if (ampm === "PM" && hour < 12) {
                    hour += 12
                }
                if (ampm === "AM" && hour === 12) {
                    hour = 0
                }
            }
            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.startDate = start;
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                if (this.singleDatePicker) {
                    this.endDate = start.clone()
                }
            } else {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.endDate = end;
                if (this.singleDatePicker) {
                    this.startDate = end.clone()
                }
                this.rightCalendar.month.hour(hour).minute(minute).second(second)
            }
            this.updateView();
            this.updateCalendars()
        },
        updateCalendars: function() {
            this.leftCalendar.calendar = this.buildCalendar(this.leftCalendar.month.month(), this.leftCalendar.month.year(), this.leftCalendar.month.hour(), this.leftCalendar.month.minute(), this.leftCalendar.month.second(), "left");
            this.rightCalendar.calendar = this.buildCalendar(this.rightCalendar.month.month(), this.rightCalendar.month.year(), this.rightCalendar.month.hour(), this.rightCalendar.month.minute(), this.rightCalendar.month.second(), "right");
            this.container.find(".calendar.left").empty().html(this.renderCalendar(this.leftCalendar.calendar, this.startDate, this.minDate, this.maxDate, "left"));
            this.container.find(".calendar.right").empty().html(this.renderCalendar(this.rightCalendar.calendar, this.endDate, this.singleDatePicker ? this.minDate : this.startDate, this.maxDate, "right"));
            this.container.find(".ranges li").removeClass("active");
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
                if (this.timePicker) {
                    if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
                        customRange = false;
                        this.chosenLabel = this.container.find(".ranges li:eq(" + i + ")").addClass("active").html()
                    }
                } else {
                    if (this.startDate.format("YYYY-MM-DD") == this.ranges[range][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[range][1].format("YYYY-MM-DD")) {
                        customRange = false;
                        this.chosenLabel = this.container.find(".ranges li:eq(" + i + ")").addClass("active").html()
                    }
                }
                i++
            }
            if (customRange) {
                this.chosenLabel = this.container.find(".ranges li:last").addClass("active").html();
                this.showCalendars()
            }
        },
        buildCalendar: function(month, year, hour, minute, second, side) {
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, "month").month();
            var lastYear = moment(firstDay).subtract(1, "month").year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();
            var i;
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;
            for (i = 0; i < 6; i++) {
                calendar[i] = []
            }
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth) {
                startDay -= 7
            }
            if (dayOfWeek == this.locale.firstDay) {
                startDay = daysInLastMonth - 6
            }
            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]).utcOffset(this.timeZone);
            var col, row;
            for (i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, "hour")) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++
                }
                calendar[row][col] = curDate.clone().hour(hour);
                curDate.hour(12);
                if (this.minDate && calendar[row][col].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && calendar[row][col].isBefore(this.minDate) && side == "left") {
                    calendar[row][col] = this.minDate.clone()
                }
                if (this.maxDate && calendar[row][col].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && calendar[row][col].isAfter(this.maxDate) && side == "right") {
                    calendar[row][col] = this.maxDate.clone()
                }
            }
            return calendar
        },
        renderDropdowns: function(selected, minDate, maxDate) {
            var currentMonth = selected.month();
            var currentYear = selected.year();
            var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
            var minYear = (minDate && minDate.year()) || (currentYear - 50);
            var monthHtml = '<select class="monthselect">';
            var inMinYear = currentYear == minYear;
            var inMaxYear = currentYear == maxYear;
            for (var m = 0; m < 12; m++) {
                if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                    monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'" : "") + ">" + this.locale.monthNames[m] + "</option>"
                }
            }
            monthHtml += "</select>";
            var yearHtml = '<select class="yearselect">';
            for (var y = minYear; y <= maxYear; y++) {
                yearHtml += '<option value="' + y + '"' + (y === currentYear ? ' selected="selected"' : "") + ">" + y + "</option>"
            }
            yearHtml += "</select>";
            return monthHtml + yearHtml
        },
        renderCalendar: function(calendar, selected, minDate, maxDate, side) {
            var html = '<div class="calendar-date">';
            html += '<table class="table-condensed">';
            html += "<thead>";
            html += "<tr>";
            if (this.showWeekNumbers) {
                html += "<th></th>"
            }
            if (!minDate || minDate.isBefore(calendar.firstDay)) {
                html += '<th class="prev available"><i class="fa fa-arrow-left icon icon-arrow-left fa fa-arrow-left"></i></th>'
            } else {
                html += "<th></th>"
            }
            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");
            if (this.showDropdowns) {
                dateHtml = this.renderDropdowns(calendar[1][1], minDate, maxDate)
            }
            html += '<th colspan="5" class="month">' + dateHtml + "</th>";
            if (!maxDate || maxDate.isAfter(calendar.lastDay)) {
                html += '<th class="next available"><i class="fa fa-arrow-right icon icon-arrow-right fa fa-arrow-right"></i></th>'
            } else {
                html += "<th></th>"
            }
            html += "</tr>";
            html += "<tr>";
            if (this.showWeekNumbers) {
                html += '<th class="week">' + this.locale.weekLabel + "</th>"
            }
            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
                html += "<th>" + dayOfWeek + "</th>"
            });
            html += "</tr>";
            html += "</thead>";
            html += "<tbody>";
            for (var row = 0; row < 6; row++) {
                html += "<tr>";
                if (this.showWeekNumbers) {
                    html += '<td class="week">' + calendar[row][0].week() + "</td>"
                }
                for (var col = 0; col < 7; col++) {
                    var cname = "available ";
                    cname += (calendar[row][col].month() == calendar[1][1].month()) ? "" : "off";
                    if ((minDate && calendar[row][col].isBefore(minDate, "day")) || (maxDate && calendar[row][col].isAfter(maxDate, "day"))) {
                        cname = " off disabled "
                    } else {
                        if (calendar[row][col].format("YYYY-MM-DD") == selected.format("YYYY-MM-DD")) {
                            cname += " active ";
                            if (calendar[row][col].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD")) {
                                cname += " start-date "
                            }
                            if (calendar[row][col].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD")) {
                                cname += " end-date "
                            }
                        } else {
                            if (calendar[row][col] >= this.startDate && calendar[row][col] <= this.endDate) {
                                cname += " in-range ";
                                if (calendar[row][col].isSame(this.startDate)) {
                                    cname += " start-date "
                                }
                                if (calendar[row][col].isSame(this.endDate)) {
                                    cname += " end-date "
                                }
                            }
                        }
                    }
                    var title = "r" + row + "c" + col;
                    html += '<td class="' + cname.replace(/\s+/g, " ").replace(/^\s?(.*?)\s?$/, "$1") + '" data-title="' + title + '">' + calendar[row][col].date() + "</td>"
                }
                html += "</tr>"
            }
            html += "</tbody>";
            html += "</table>";
            html += "</div>";
            var i;
            if (this.timePicker) {
                html += '<div class="calendar-time">';
                html += '<select class="hourselect">';
                var min_hour = 0;
                var max_hour = 23;
                if (minDate && (side == "left" || this.singleDatePicker) && selected.format("YYYY-MM-DD") == minDate.format("YYYY-MM-DD")) {
                    min_hour = minDate.hour();
                    if (selected.hour() < min_hour) {
                        selected.hour(min_hour)
                    }
                    if (this.timePicker12Hour && min_hour >= 12 && selected.hour() >= 12) {
                        min_hour -= 12
                    }
                    if (this.timePicker12Hour && min_hour == 12) {
                        min_hour = 1
                    }
                }
                if (maxDate && (side == "right" || this.singleDatePicker) && selected.format("YYYY-MM-DD") == maxDate.format("YYYY-MM-DD")) {
                    max_hour = maxDate.hour();
                    if (selected.hour() > max_hour) {
                        selected.hour(max_hour)
                    }
                    if (this.timePicker12Hour && max_hour >= 12 && selected.hour() >= 12) {
                        max_hour -= 12
                    }
                }
                var start = 0;
                var end = 23;
                var selected_hour = selected.hour();
                if (this.timePicker12Hour) {
                    start = 1;
                    end = 12;
                    if (selected_hour >= 12) {
                        selected_hour -= 12
                    }
                    if (selected_hour === 0) {
                        selected_hour = 12
                    }
                }
                for (i = start; i <= end; i++) {
                    if (i == selected_hour) {
                        html += '<option value="' + i + '" selected="selected">' + i + "</option>"
                    } else {
                        if (i < min_hour || i > max_hour) {
                            html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + "</option>"
                        } else {
                            html += '<option value="' + i + '">' + i + "</option>"
                        }
                    }
                }
                html += "</select> : ";
                html += '<select class="minuteselect">';
                var min_minute = 0;
                var max_minute = 59;
                if (minDate && (side == "left" || this.singleDatePicker) && selected.format("YYYY-MM-DD h A") == minDate.format("YYYY-MM-DD h A")) {
                    min_minute = minDate.minute();
                    if (selected.minute() < min_minute) {
                        selected.minute(min_minute)
                    }
                }
                if (maxDate && (side == "right" || this.singleDatePicker) && selected.format("YYYY-MM-DD h A") == maxDate.format("YYYY-MM-DD h A")) {
                    max_minute = maxDate.minute();
                    if (selected.minute() > max_minute) {
                        selected.minute(max_minute)
                    }
                }
                for (i = 0; i < 60; i += this.timePickerIncrement) {
                    var num = i;
                    if (num < 10) {
                        num = "0" + num
                    }
                    if (i == selected.minute()) {
                        html += '<option value="' + i + '" selected="selected">' + num + "</option>"
                    } else {
                        if (i < min_minute || i > max_minute) {
                            html += '<option value="' + i + '" disabled="disabled" class="disabled">' + num + "</option>"
                        } else {
                            html += '<option value="' + i + '">' + num + "</option>"
                        }
                    }
                }
                html += "</select> ";
                if (this.timePickerSeconds) {
                    html += ': <select class="secondselect">';
                    for (i = 0; i < 60; i += this.timePickerIncrement) {
                        var num = i;
                        if (num < 10) {
                            num = "0" + num
                        }
                        if (i == selected.second()) {
                            html += '<option value="' + i + '" selected="selected">' + num + "</option>"
                        } else {
                            html += '<option value="' + i + '">' + num + "</option>"
                        }
                    }
                    html += "</select>"
                }
                if (this.timePicker12Hour) {
                    html += '<select class="ampmselect">';
                    var am_html = "";
                    var pm_html = "";
                    if (minDate && (side == "left" || this.singleDatePicker) && selected.format("YYYY-MM-DD") == minDate.format("YYYY-MM-DD") && minDate.hour() >= 12) {
                        am_html = ' disabled="disabled" class="disabled"'
                    }
                    if (maxDate && (side == "right" || this.singleDatePicker) && selected.format("YYYY-MM-DD") == maxDate.format("YYYY-MM-DD") && maxDate.hour() < 12) {
                        pm_html = ' disabled="disabled" class="disabled"'
                    }
                    if (selected.hour() >= 12) {
                        html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + ">PM</option>"
                    } else {
                        html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + ">PM</option>"
                    }
                    html += "</select>"
                }
                html += "</div>"
            }
            return html
        },
        remove: function() {
            this.container.remove();
            this.element.off(".daterangepicker");
            this.element.removeData("daterangepicker")
        }
    };
    $.fn.daterangepicker = function(options, cb) {
        this.each(function() {
            var el = $(this);
            if (el.data("daterangepicker")) {
                el.data("daterangepicker").remove()
            }
            el.data("daterangepicker", new DateRangePicker(el, options, cb))
        });
        return this
    }
}));

// 文件上传插件(Bootstrap.Huploadify v2.1)
(function($) {
    $.fn.Huploadify = function(opts) {
        var itemTemp = '<div id="${fileID}" class="uploadify-queue-item"><div class="uploadify-progress"><div class="uploadify-progress-bar"></div></div><span class="up_filename">${fileName}</span><span class="uploadbtn">上传</span><span class="delfilebtn">删除</span></div>';
        var defaults = {
            fileTypeExts: "*.*",
            uploader: "",
            auto: true,
            method: "post",
            multi: false,
            formData: {},
            fileObjName: "imgFile",
            fileSizeLimit: 2048,
            showUploadedPercent: true,
            showUploadedSize: false,
            buttonText: "选择文件",
            removeTimeout: 1000,
            itemTemplate: itemTemp,
            breakPoints: false,
            fileSplitSize: 1024 * 1024,
            getUploadedSize: null,
            saveUploadedSize: null,
            saveInfoLocal: false,
            onUploadStart: null,
            onUploadSuccess: null,
            onUploadComplete: null,
            onUploadError: null,
            onInit: null,
            onCancel: null,
            onSelect: null
        };
        var option = $.extend(defaults, opts);
        var formatFileSize = function(size, byKB) {
            if (size > 1024 * 1024 && !byKB) {
                size = (Math.round(size * 100 / (1024 * 1024)) / 100).toString() + "MB"
            } else {
                size = (Math.round(size * 100 / 1024) / 100).toString() + "KB"
            }
            return size
        };
        var getFile = function(index, files) {
            for (var i = 0; i < files.length; i++) {
                if (files[i].index == index) {
                    return files[i]
                }
            }
            return false
        };
        var getFileTypes = function(str) {
            var result = [];
            var arr1 = str.split(";");
            for (var i = 0, len = arr1.length; i < len; i++) {
                result.push(arr1[i].split(".").pop())
            }
            return result
        };
        var mimetypeMap = {
            zip: ["application/x-zip-compressed"],
            jpg: ["image/jpeg"],
            png: ["image/png"],
            gif: ["image/gif"],
            doc: ["application/msword"],
            xls: ["application/msexcel"],
            docx: ["application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
            xlsx: ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
            ppt: ["application/vnd.ms-powerpoint "],
            pptx: ["application/vnd.openxmlformats-officedocument.presentationml.presentation"],
            mp3: ["audio/mp3"],
            mp4: ["video/mp4"],
            pdf: ["application/pdf"]
        };
        var getMimetype = function(name) {
            return mimetypeMap[name]
        };
        var getAcceptString = function(str) {
            var types = getFileTypes(str);
            var result = [];
            for (var i = 0, len = types.length; i < len; i++) {
                var mime = getMimetype(types[i]);
                if (mime) {
                    result.push(mime)
                }
            }
            return result.join(",")
        };
        var sendBlob = function(url, xhr, file, formdata) {
            xhr.open(option.method, url, true);
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            var fd = new FormData();
            fd.append(option.fileObjName, file);
            if (formdata) {
                for (key in formdata) {
                    fd.append(key, formdata[key])
                }
            }
            xhr.send(fd)
        };
        var fileObj = null;
        this.each(function() {
            var _this = $(this);
            var instanceNumber = $(".uploadify").length + 1;
            var inputStr = '<input id="select_btn_' + instanceNumber + '" class="selectbtn" style="display:none;" type="file" name="fileselect[]"';
            inputStr += option.multi ? " multiple" : "";
            inputStr += ' accept="';
            inputStr += getAcceptString(option.fileTypeExts);
            inputStr += '"/>';
            inputStr += '<a id="file_upload_' + instanceNumber + '-button" href="javascript:void(0)" class="uploadify-button btn btn-default">';
            inputStr += option.buttonText;
            inputStr += "</a>";
            var uploadFileListStr = '<div id="file_upload_' + instanceNumber + '-queue" class="uploadify-queue"></div>';
            _this.append(inputStr + uploadFileListStr);
            fileObj = {
                uploadAllowed: true,
                fileInput: _this.find(".selectbtn"),
                uploadFileList: _this.find(".uploadify-queue"),
                container: _this,
                url: option.uploader,
                fileFilter: [],
                uploadOver: false,
                filter: function(files) {
                    var arr = [];
                    var typeArray = getFileTypes(option.fileTypeExts);
                    if (typeArray.length > 0) {
                        for (var i = 0, len = files.length; i < len; i++) {
                            var thisFile = files[i];
                            if (parseInt(formatFileSize(thisFile.size, true)) > option.fileSizeLimit) {
                                alert("文件" + thisFile.name + "大小超出限制！");
                                continue
                            }
                            if ($.inArray(thisFile.name.split(".").pop().toLowerCase(), typeArray) >= 0 || $.inArray("*", typeArray) >= 0) {
                                arr.push(thisFile)
                            } else {
                                alert("文件" + thisFile.name + "类型不允许！")
                            }
                        }
                    }
                    return arr
                },
                funSelect: function(files) {
                    for (var i = 0, len = files.length; i < len; i++) {
                        var file = files[i];
                        var $html = $(option.itemTemplate.replace(/\${fileID}/g, "fileupload_" + instanceNumber + "_" + file.index).replace(/\${fileName}/g, file.name).replace(/\${fileSize}/g, formatFileSize(file.size)).replace(/\${instanceID}/g, _this.attr("id")));
                        if (option.auto) {
                            $html.find(".uploadbtn").remove()
                        }
                        var initWidth = 0,
                            initFileSize = "0KB",
                            initUppercent = "0%";
                        if (option.breakPoints) {
                            var uploadedSize = this.funGetUploadedSize(file);
                            initWidth = (uploadedSize / file.size * 100) + "%";
                            initFileSize = formatFileSize(uploadedSize);
                            initUppercent = (uploadedSize / file.size * 100).toFixed(2) + "%";
                            $html.find(".uploadify-progress-bar").css("width", initWidth)
                        }
                        this.uploadFileList.append($html);
                        if (option.showUploadedSize) {
                            var num = '<span class="progressnum"><span class="uploadedsize">' + initFileSize + '</span>/<span class="totalsize">${fileSize}</span></span>'.replace(/\${fileSize}/g, formatFileSize(file.size));
                            $html.find(".uploadify-progress").after(num)
                        }
                        if (option.showUploadedPercent) {
                            var percentText = '<span class="up_percent">' + initUppercent + "</span>";
                            $html.find(".uploadify-progress").after(percentText)
                        }
                        option.onSelect && option.onSelect(files);
                        if (option.auto) {
                            this.funUploadFile(file)
                        } else {
                            $html.find(".uploadbtn").on("click", (function(file) {
                                return function() {
                                    fileObj.funUploadFile(file)
                                }
                            })(file))
                        }
                        $html.find(".delfilebtn").on("click", (function(file) {
                            return function() {
                                fileObj.funDeleteFile(file.index)
                            }
                        })(file))
                    }
                },
                onProgress: function(file, loaded, total) {
                    var eleProgress = _this.find("#fileupload_" + instanceNumber + "_" + file.index + " .uploadify-progress");
                    var thisLoaded = loaded;
                    var lastLoaded = eleProgress.attr("lastLoaded") || 0;
                    loaded -= parseInt(lastLoaded);
                    var progressBar = eleProgress.children(".uploadify-progress-bar");
                    var oldWidth = option.breakPoints ? parseFloat(progressBar.get(0).style.width || 0) : 0;
                    var percent = (loaded / total * 100 + oldWidth).toFixed(2);
                    var percentText = percent > 100 ? "99.99%" : percent + "%";
                    if (option.showUploadedSize) {
                        eleProgress.nextAll(".progressnum .uploadedsize").text(formatFileSize(loaded));
                        eleProgress.nextAll(".progressnum .totalsize").text(formatFileSize(total))
                    }
                    if (option.showUploadedPercent) {
                        eleProgress.nextAll(".up_percent").text(percentText)
                    }
                    progressBar.css("width", percentText);
                    if (thisLoaded < option.fileSplitSize) {
                        eleProgress.attr("lastLoaded", thisLoaded)
                    } else {
                        eleProgress.removeAttr("lastLoaded")
                    }
                },
                funGetProgressWidth: function(index) {
                    var eleProgressBar = _this.find("#fileupload_" + instanceNumber + "_" + index + " .uploadify-progress-bar");
                    return eleProgressBar.get(0).style.width || ""
                },
                funGetUploadedSize: function(file) {
                    if (option.getUploadedSize) {
                        return option.getUploadedSize(file)
                    } else {
                        if (option.saveInfoLocal) {
                            return parseInt(localStorage.getItem(file.name)) || 0
                        }
                    }
                },
                funSaveUploadedSize: function(file, value) {
                    if (option.saveUploadedSize) {
                        option.saveUploadedSize(file, value)
                    } else {
                        if (option.saveInfoLocal) {
                            localStorage.setItem(file.name, value)
                        }
                    }
                },
                funGetFiles: function(e) {
                    var files = e.target.files;
                    files = this.filter(files);
                    for (var i = 0, len = files.length; i < len; i++) {
                        this.fileFilter.push(files[i])
                    }
                    this.funDealFiles(files);
                    return this
                },
                funDealFiles: function(files) {
                    var fileCount = _this.find(".uploadify-queue .uploadify-queue-item").length;
                    for (var i = 0, len = files.length; i < len; i++) {
                        files[i].index = ++fileCount;
                        files[i].id = "fileupload_" + instanceNumber + "_" + files[i].index
                    }
                    this.funSelect(files);
                    return this
                },
                funDeleteFile: function(index) {
                    for (var i = 0, len = this.fileFilter.length; i < len; i++) {
                        var file = this.fileFilter[i];
                        if (file.index == index) {
                            if (option.breakPoints) {
                                this.uploadAllowed = false
                            }
                            this.fileFilter.splice(i, 1);
                            _this.find("#fileupload_" + instanceNumber + "_" + index).fadeOut();
                            fileObj.fileInput.val("");
                            option.onCancel && option.onCancel(file);
                            break
                        }
                    }
                    return this
                },
                funUploadFile: function(file) {
                    var xhr = false;
                    var originalFile = file;
                    var thisfile = _this.find("#fileupload_" + instanceNumber + "_" + file.index);
                    var regulateView = function() {
                        if (fileObj.uploadOver) {
                            thisfile.find(".uploadify-progress-bar").css("width", "100%");
                            option.showUploadedSize && thisfile.find(".uploadedsize").text(thisfile.find(".totalsize").text());
                            option.showUploadedPercent && thisfile.find(".up_percent").text("100%")
                        }
                    };
                    try {
                        xhr = new XMLHttpRequest()
                    } catch (e) {
                        xhr = ActiveXobject("Msxml12.XMLHTTP")
                    }
                    if (option.breakPoints) {
                        var fileName = file.name,
                            fileId = file.id,
                            fileIndex = file.index,
                            fileSize = file.size;
                        var uploadedSize = parseInt(this.funGetUploadedSize(originalFile));
                        file = originalFile.slice(uploadedSize, uploadedSize + option.fileSplitSize);
                        file.name = fileName;
                        file.id = fileId;
                        file.index = fileIndex
                    }
                    if (xhr.upload && uploadedSize !== false) {
                        xhr.upload.addEventListener("progress", function(e) {
                            fileObj.onProgress(file, e.loaded, originalFile.size)
                        }, false);
                        xhr.onreadystatechange = function(e) {
                            if (xhr.readyState == 4) {
                                fileObj.uploadOver = true;
                                if (xhr.status == 200) {
                                    var returnData = JSON.parse(xhr.responseText);
                                    if (returnData.success) {
                                        if (option.breakPoints) {
                                            uploadedSize += option.fileSplitSize;
                                            fileObj.funSaveUploadedSize(originalFile, uploadedSize);
                                            if (uploadedSize < fileSize) {
                                                fileObj.uploadOver = false;
                                                if (fileObj.uploadAllowed) {
                                                    file = originalFile.slice(uploadedSize, uploadedSize + option.fileSplitSize);
                                                    file.name = fileName;
                                                    file.id = fileId;
                                                    file.index = fileIndex;
                                                    file.size = fileSize;
                                                    sendBlob(fileObj.url, xhr, file, option.formData)
                                                }
                                            } else {
                                                regulateView()
                                            }
                                        } else {
                                            regulateView()
                                        }
                                    }
                                    if (fileObj.uploadOver) {
                                        option.onUploadSuccess && option.onUploadSuccess(originalFile, xhr.responseText);
                                        setTimeout(function() {
                                            _this.find("#fileupload_" + instanceNumber + "_" + originalFile.index).fadeOut()
                                        }, option.removeTimeout)
                                    }
                                } else {
                                    fileObj.uploadOver && option.onUploadError && option.onUploadError(originalFile, xhr.responseText)
                                }
                                if (fileObj.uploadOver) {
                                    option.onUploadComplete && option.onUploadComplete(originalFile, xhr.responseText);
                                    fileObj.fileInput.val("")
                                }
                            }
                        };
                        option.onUploadStart && option.onUploadStart();
                        option.formData.fileName = originalFile.name;
                        option.formData.lastModifiedDate = originalFile.lastModifiedDate.getTime();
                        fileObj.uploadAllowed = true;
                        sendBlob(this.url, xhr, file, option.formData)
                    }
                },
                init: function() {
                    if (this.fileInput.length > 0) {
                        this.fileInput.change(function(e) {
                            fileObj.funGetFiles(e)
                        })
                    }
                    _this.find(".uploadify-button").on("click", function() {
                        _this.find(".selectbtn").trigger("click")
                    });
                    option.onInit && option.onInit()
                }
            };
            fileObj.init()
        });
        var returnObj = {
            stop: function() {
                fileObj.uploadOver = false;
                fileObj.uploadAllowed = false
            },
            upload: function(fileIndex) {
                if (fileIndex === "*") {
                    for (var i = 0, len = fileObj.fileFilter.length; i < len; i++) {
                        fileObj.funUploadFile(fileObj.fileFilter[i])
                    }
                } else {
                    var file = getFile(fileIndex, fileObj.fileFilter);
                    file && fileObj.funUploadFile(file)
                }
            },
            cancel: function(fileIndex) {
                if (fileIndex === "*") {
                    for (var i = 0, len = fileObj.fileFilter.length; i < len; i++) {
                        fileObj.funDeleteFile(++i)
                    }
                } else {
                    fileObj.funDeleteFile(fileIndex)
                }
            },
            disable: function(instanceID) {
                var parent = instanceID ? $("file_upload_" + instanceID + "-button") : $("body");
                parent.find(".uploadify-button").css("background-color", "#888").off("click")
            },
            ennable: function(instanceID) {
                var parent = instanceID ? $("file_upload_" + instanceID + "-button") : $("body");
                parent.find(".uploadify-button").css("background-color", "#707070").on("click", function() {
                    parent.find(".selectbtn").trigger("click")
                })
            },
            destroy: function() {
                fileObj.container.html("")
            },
            settings: function(name, value) {
                if (arguments.length == 1) {
                    return option[name]
                } else {
                    if (name == "formData") {
                        option.formData = $.extend(option.formData, value)
                    } else {
                        option[name] = value
                    }
                }
            },
            Huploadify: function() {
                var method = arguments[0];
                if (method in this) {
                    Array.prototype.splice.call(arguments, 0, 1);
                    this[method].apply(this[method], arguments)
                }
            }
        };
        return returnObj
    }
})(jQuery);

// Markdown语法解析器(markdown.js)
(function(expose) {
    var Markdown = expose.Markdown = function(dialect) {
        switch (typeof dialect) {
            case "undefined":
                this.dialect = Markdown.dialects.Gruber;
                break;
            case "object":
                this.dialect = dialect;
                break;
            default:
                if (dialect in Markdown.dialects) {
                    this.dialect = Markdown.dialects[dialect]
                } else {
                    throw new Error("Unknown Markdown dialect '" + String(dialect) + "'")
                }
                break
        }
        this.em_state = [];
        this.strong_state = [];
        this.debug_indent = ""
    };
    expose.parse = function(source, dialect) {
        var md = new Markdown(dialect);
        return md.toTree(source)
    };
    expose.toHTML = function toHTML(source, dialect, options) {
        var input = expose.toHTMLTree(source, dialect, options);
        return expose.renderJsonML(input)
    };
    expose.toHTMLTree = function toHTMLTree(input, dialect, options) {
        if (typeof input === "string") {
            input = this.parse(input, dialect)
        }
        var attrs = extract_attr(input),
            refs = {};
        if (attrs && attrs.references) {
            refs = attrs.references
        }
        var html = convert_tree_to_html(input, refs, options);
        merge_text_nodes(html);
        return html
    };

    function mk_block_toSource() {
        return "Markdown.mk_block( " + uneval(this.toString()) + ", " + uneval(this.trailing) + ", " + uneval(this.lineNumber) + " )"
    }

    function mk_block_inspect() {
        var util = require("util");
        return "Markdown.mk_block( " + util.inspect(this.toString()) + ", " + util.inspect(this.trailing) + ", " + util.inspect(this.lineNumber) + " )"
    }
    var mk_block = Markdown.mk_block = function(block, trail, line) {
        if (arguments.length === 1) {
            trail = "\n\n"
        }
        var s = new String(block);
        s.trailing = trail;
        s.inspect = mk_block_inspect;
        s.toSource = mk_block_toSource;
        if (line !== undefined) {
            s.lineNumber = line
        }
        return s
    };

    function count_lines(str) {
        var n = 0,
            i = -1;
        while ((i = str.indexOf("\n", i + 1)) !== -1) {
            n++
        }
        return n
    }
    Markdown.prototype.split_blocks = function splitBlocks(input) {
        input = input.replace(/(\r\n|\n|\r)/g, "\n");
        var re = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
            blocks = [],
            m;
        var line_no = 1;
        if ((m = /^(\s*\n)/.exec(input)) !== null) {
            line_no += count_lines(m[0]);
            re.lastIndex = m[0].length
        }
        while ((m = re.exec(input)) !== null) {
            if (m[2] === "\n#") {
                m[2] = "\n";
                re.lastIndex--
            }
            blocks.push(mk_block(m[1], m[2], line_no));
            line_no += count_lines(m[0])
        }
        return blocks
    };
    Markdown.prototype.processBlock = function processBlock(block, next) {
        var cbs = this.dialect.block,
            ord = cbs.__order__;
        if ("__call__" in cbs) {
            return cbs.__call__.call(this, block, next)
        }
        for (var i = 0; i < ord.length; i++) {
            var res = cbs[ord[i]].call(this, block, next);
            if (res) {
                if (!isArray(res) || (res.length > 0 && !(isArray(res[0])))) {
                    this.debug(ord[i], "didn't return a proper array")
                }
                return res
            }
        }
        return []
    };
    Markdown.prototype.processInline = function processInline(block) {
        return this.dialect.inline.__call__.call(this, String(block))
    };
    Markdown.prototype.toTree = function toTree(source, custom_root) {
        var blocks = source instanceof Array ? source : this.split_blocks(source);
        var old_tree = this.tree;
        try {
            this.tree = custom_root || this.tree || ["markdown"];
            blocks_loop: while (blocks.length) {
                var b = this.processBlock(blocks.shift(), blocks);
                if (!b.length) {
                    continue blocks_loop
                }
                this.tree.push.apply(this.tree, b)
            }
            return this.tree
        } finally {
            if (custom_root) {
                this.tree = old_tree
            }
        }
    };
    Markdown.prototype.debug = function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(this.debug_indent);
        if (typeof print !== "undefined") {
            print.apply(print, args)
        }
        if (typeof console !== "undefined" && typeof console.log !== "undefined") {
            console.log.apply(null, args)
        }
    };
    Markdown.prototype.loop_re_over_block = function(re, block, cb) {
        var m, b = block.valueOf();
        while (b.length && (m = re.exec(b)) !== null) {
            b = b.substr(m[0].length);
            cb.call(this, m)
        }
        return b
    };
    Markdown.dialects = {};
    Markdown.dialects.Gruber = {
        block: {
            atxHeader: function atxHeader(block, next) {
                var m = block.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);
                if (!m) {
                    return undefined
                }
                var header = ["header", {
                    level: m[1].length
                }];
                Array.prototype.push.apply(header, this.processInline(m[2]));
                if (m[0].length < block.length) {
                    next.unshift(mk_block(block.substr(m[0].length), block.trailing, block.lineNumber + 2))
                }
                return [header]
            },
            setextHeader: function setextHeader(block, next) {
                var m = block.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);
                if (!m) {
                    return undefined
                }
                var level = (m[2] === "=") ? 1 : 2,
                    header = ["header", {
                        level: level
                    }, m[1]];
                if (m[0].length < block.length) {
                    next.unshift(mk_block(block.substr(m[0].length), block.trailing, block.lineNumber + 2))
                }
                return [header]
            },
            code: function code(block, next) {
                var ret = [],
                    re = /^(?: {0,3}\t| {4})(.*)\n?/;
                if (!block.match(re)) {
                    return undefined
                }
                block_search: do {
                    var b = this.loop_re_over_block(re, block.valueOf(), function(m) {
                        ret.push(m[1])
                    });
                    if (b.length) {
                        next.unshift(mk_block(b, block.trailing));
                        break block_search
                    } else {
                        if (next.length) {
                            if (!next[0].match(re)) {
                                break block_search
                            }
                            ret.push(block.trailing.replace(/[^\n]/g, "").substring(2));
                            block = next.shift()
                        } else {
                            break block_search
                        }
                    }
                } while (true);
                return [
                    ["code_block", ret.join("\n")]
                ]
            },
            horizRule: function horizRule(block, next) {
                var m = block.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);
                if (!m) {
                    return undefined
                }
                var jsonml = [
                    ["hr"]
                ];
                if (m[1]) {
                    var contained = mk_block(m[1], "", block.lineNumber);
                    jsonml.unshift.apply(jsonml, this.toTree(contained, []))
                }
                if (m[3]) {
                    next.unshift(mk_block(m[3], block.trailing, block.lineNumber + 1))
                }
                return jsonml
            },
            lists: (function() {
                var any_list = "[*+-]|\\d+\\.",
                    bullet_list = /[*+-]/,
                    is_list_re = new RegExp("^( {0,3})(" + any_list + ")[ \t]+"),
                    indent_re = "(?: {0,3}\\t| {4})";

                function regex_for_depth(depth) {
                    return new RegExp("(?:^(" + indent_re + "{0," + depth + "} {0,3})(" + any_list + ")\\s+)|" + "(^" + indent_re + "{0," + (depth - 1) + "}[ ]{0,4})")
                }

                function expand_tab(input) {
                    return input.replace(/ {0,3}\t/g, "    ")
                }

                function add(li, loose, inline, nl) {
                    if (loose) {
                        li.push(["para"].concat(inline));
                        return
                    }
                    var add_to = li[li.length - 1] instanceof Array && li[li.length - 1][0] === "para" ? li[li.length - 1] : li;
                    if (nl && li.length > 1) {
                        inline.unshift(nl)
                    }
                    for (var i = 0; i < inline.length; i++) {
                        var what = inline[i],
                            is_str = typeof what === "string";
                        if (is_str && add_to.length > 1 && typeof add_to[add_to.length - 1] === "string") {
                            add_to[add_to.length - 1] += what
                        } else {
                            add_to.push(what)
                        }
                    }
                }

                function get_contained_blocks(depth, blocks) {
                    var re = new RegExp("^(" + indent_re + "{" + depth + "}.*?\\n?)*$"),
                        replace = new RegExp("^" + indent_re + "{" + depth + "}", "gm"),
                        ret = [];
                    while (blocks.length > 0) {
                        if (re.exec(blocks[0])) {
                            var b = blocks.shift(),
                                x = b.replace(replace, "");
                            ret.push(mk_block(x, b.trailing, b.lineNumber))
                        } else {
                            break
                        }
                    }
                    return ret
                }

                function paragraphify(s, i, stack) {
                    var list = s.list;
                    var last_li = list[list.length - 1];
                    if (last_li[1] instanceof Array && last_li[1][0] === "para") {
                        return
                    }
                    if (i + 1 === stack.length) {
                        last_li.push(["para"].concat(last_li.splice(1, last_li.length - 1)))
                    } else {
                        var sublist = last_li.pop();
                        last_li.push(["para"].concat(last_li.splice(1, last_li.length - 1)), sublist)
                    }
                }
                return function(block, next) {
                    var m = block.match(is_list_re);
                    if (!m) {
                        return undefined
                    }

                    function make_list(m) {
                        var list = bullet_list.exec(m[2]) ? ["bulletlist"] : ["numberlist"];
                        stack.push({
                            list: list,
                            indent: m[1]
                        });
                        return list
                    }
                    var stack = [],
                        list = make_list(m),
                        last_li, loose = false,
                        ret = [stack[0].list],
                        i;
                    loose_search: while (true) {
                        var lines = block.split(/(?=\n)/);
                        var li_accumulate = "",
                            nl = "";
                        tight_search: for (var line_no = 0; line_no < lines.length; line_no++) {
                            nl = "";
                            var l = lines[line_no].replace(/^\n/, function(n) {
                                nl = n;
                                return ""
                            });
                            var line_re = regex_for_depth(stack.length);
                            m = l.match(line_re);
                            if (m[1] !== undefined) {
                                if (li_accumulate.length) {
                                    add(last_li, loose, this.processInline(li_accumulate), nl);
                                    loose = false;
                                    li_accumulate = ""
                                }
                                m[1] = expand_tab(m[1]);
                                var wanted_depth = Math.floor(m[1].length / 4) + 1;
                                if (wanted_depth > stack.length) {
                                    list = make_list(m);
                                    last_li.push(list);
                                    last_li = list[1] = ["listitem"]
                                } else {
                                    var found = false;
                                    for (i = 0; i < stack.length; i++) {
                                        if (stack[i].indent !== m[1]) {
                                            continue
                                        }
                                        list = stack[i].list;
                                        stack.splice(i + 1, stack.length - (i + 1));
                                        found = true;
                                        break
                                    }
                                    if (!found) {
                                        wanted_depth++;
                                        if (wanted_depth <= stack.length) {
                                            stack.splice(wanted_depth, stack.length - wanted_depth);
                                            list = stack[wanted_depth - 1].list
                                        } else {
                                            list = make_list(m);
                                            last_li.push(list)
                                        }
                                    }
                                    last_li = ["listitem"];
                                    list.push(last_li)
                                }
                                nl = ""
                            }
                            if (l.length > m[0].length) {
                                li_accumulate += nl + l.substr(m[0].length)
                            }
                        }
                        if (li_accumulate.length) {
                            add(last_li, loose, this.processInline(li_accumulate), nl);
                            loose = false;
                            li_accumulate = ""
                        }
                        var contained = get_contained_blocks(stack.length, next);
                        if (contained.length > 0) {
                            forEach(stack, paragraphify, this);
                            last_li.push.apply(last_li, this.toTree(contained, []))
                        }
                        var next_block = next[0] && next[0].valueOf() || "";
                        if (next_block.match(is_list_re) || next_block.match(/^ /)) {
                            block = next.shift();
                            var hr = this.dialect.block.horizRule(block, next);
                            if (hr) {
                                ret.push.apply(ret, hr);
                                break
                            }
                            forEach(stack, paragraphify, this);
                            loose = true;
                            continue loose_search
                        }
                        break
                    }
                    return ret
                }
            })(),
            blockquote: function blockquote(block, next) {
                if (!block.match(/^>/m)) {
                    return undefined
                }
                var jsonml = [];
                if (block[0] !== ">") {
                    var lines = block.split(/\n/),
                        prev = [],
                        line_no = block.lineNumber;
                    while (lines.length && lines[0][0] !== ">") {
                        prev.push(lines.shift());
                        line_no++
                    }
                    var abutting = mk_block(prev.join("\n"), "\n", block.lineNumber);
                    jsonml.push.apply(jsonml, this.processBlock(abutting, []));
                    block = mk_block(lines.join("\n"), block.trailing, line_no)
                }
                while (next.length && next[0][0] === ">") {
                    var b = next.shift();
                    block = mk_block(block + block.trailing + b, b.trailing, block.lineNumber)
                }
                var input = block.replace(/^> ?/gm, ""),
                    old_tree = this.tree,
                    processedBlock = this.toTree(input, ["blockquote"]),
                    attr = extract_attr(processedBlock);
                if (attr && attr.references) {
                    delete attr.references;
                    if (isEmpty(attr)) {
                        processedBlock.splice(1, 1)
                    }
                }
                jsonml.push(processedBlock);
                return jsonml
            },
            referenceDefn: function referenceDefn(block, next) {
                var re = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
                if (!block.match(re)) {
                    return undefined
                }
                if (!extract_attr(this.tree)) {
                    this.tree.splice(1, 0, {})
                }
                var attrs = extract_attr(this.tree);
                if (attrs.references === undefined) {
                    attrs.references = {}
                }
                var b = this.loop_re_over_block(re, block, function(m) {
                    if (m[2] && m[2][0] === "<" && m[2][m[2].length - 1] === ">") {
                        m[2] = m[2].substring(1, m[2].length - 1)
                    }
                    var ref = attrs.references[m[1].toLowerCase()] = {
                        href: m[2]
                    };
                    if (m[4] !== undefined) {
                        ref.title = m[4]
                    } else {
                        if (m[5] !== undefined) {
                            ref.title = m[5]
                        }
                    }
                });
                if (b.length) {
                    next.unshift(mk_block(b, block.trailing))
                }
                return []
            },
            para: function para(block) {
                return [
                    ["para"].concat(this.processInline(block))
                ]
            }
        }
    };
    Markdown.dialects.Gruber.inline = {
        __oneElement__: function oneElement(text, patterns_or_re, previous_nodes) {
            var m, res;
            patterns_or_re = patterns_or_re || this.dialect.inline.__patterns__;
            var re = new RegExp("([\\s\\S]*?)(" + (patterns_or_re.source || patterns_or_re) + ")");
            m = re.exec(text);
            if (!m) {
                return [text.length, text]
            } else {
                if (m[1]) {
                    return [m[1].length, m[1]]
                }
            }
            var res;
            if (m[2] in this.dialect.inline) {
                res = this.dialect.inline[m[2]].call(this, text.substr(m.index), m, previous_nodes || [])
            }
            res = res || [m[2].length, m[2]];
            return res
        },
        __call__: function inline(text, patterns) {
            var out = [],
                res;

            function add(x) {
                if (typeof x === "string" && typeof out[out.length - 1] === "string") {
                    out[out.length - 1] += x
                } else {
                    out.push(x)
                }
            }
            while (text.length > 0) {
                res = this.dialect.inline.__oneElement__.call(this, text, patterns, out);
                text = text.substr(res.shift());
                forEach(res, add)
            }
            return out
        },
        "]": function() {},
        "}": function() {},
        __escape__: /^\\[\\`\*_{}\[\]()#\+.!\-]/,
        "\\": function escaped(text) {
            if (this.dialect.inline.__escape__.exec(text)) {
                return [2, text.charAt(1)]
            } else {
                return [1, "\\"]
            }
        },
        "![": function image(text) {
            var m = text.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);
            if (m) {
                if (m[2] && m[2][0] === "<" && m[2][m[2].length - 1] === ">") {
                    m[2] = m[2].substring(1, m[2].length - 1)
                }
                m[2] = this.dialect.inline.__call__.call(this, m[2], /\\/)[0];
                var attrs = {
                    alt: m[1],
                    href: m[2] || ""
                };
                if (m[4] !== undefined) {
                    attrs.title = m[4]
                }
                return [m[0].length, ["img", attrs]]
            }
            m = text.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/);
            if (m) {
                return [m[0].length, ["img_ref", {
                    alt: m[1],
                    ref: m[2].toLowerCase(),
                    original: m[0]
                }]]
            }
            return [2, "!["]
        },
        "[": function link(text) {
            var orig = String(text);
            var res = Markdown.DialectHelpers.inline_until_char.call(this, text.substr(1), "]");
            if (!res) {
                return [1, "["]
            }
            var consumed = 1 + res[0],
                children = res[1],
                link, attrs;
            text = text.substr(consumed);
            var m = text.match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);
            if (m) {
                var url = m[1];
                consumed += m[0].length;
                if (url && url[0] === "<" && url[url.length - 1] === ">") {
                    url = url.substring(1, url.length - 1)
                }
                if (!m[3]) {
                    var open_parens = 1;
                    for (var len = 0; len < url.length; len++) {
                        switch (url[len]) {
                            case "(":
                                open_parens++;
                                break;
                            case ")":
                                if (--open_parens === 0) {
                                    consumed -= url.length - len;
                                    url = url.substring(0, len)
                                }
                                break
                        }
                    }
                }
                url = this.dialect.inline.__call__.call(this, url, /\\/)[0];
                attrs = {
                    href: url || ""
                };
                if (m[3] !== undefined) {
                    attrs.title = m[3]
                }
                link = ["link", attrs].concat(children);
                return [consumed, link]
            }
            m = text.match(/^\s*\[(.*?)\]/);
            if (m) {
                consumed += m[0].length;
                attrs = {
                    ref: (m[1] || String(children)).toLowerCase(),
                    original: orig.substr(0, consumed)
                };
                link = ["link_ref", attrs].concat(children);
                return [consumed, link]
            }
            if (children.length === 1 && typeof children[0] === "string") {
                attrs = {
                    ref: children[0].toLowerCase(),
                    original: orig.substr(0, consumed)
                };
                link = ["link_ref", attrs, children[0]];
                return [consumed, link]
            }
            return [1, "["]
        },
        "<": function autoLink(text) {
            var m;
            if ((m = text.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/)) !== null) {
                if (m[3]) {
                    return [m[0].length, ["link", {
                        href: "mailto:" + m[3]
                    }, m[3]]]
                } else {
                    if (m[2] === "mailto") {
                        return [m[0].length, ["link", {
                            href: m[1]
                        }, m[1].substr("mailto:".length)]]
                    } else {
                        return [m[0].length, ["link", {
                            href: m[1]
                        }, m[1]]]
                    }
                }
            }
            return [1, "<"]
        },
        "`": function inlineCode(text) {
            var m = text.match(/(`+)(([\s\S]*?)\1)/);
            if (m && m[2]) {
                return [m[1].length + m[2].length, ["inlinecode", m[3]]]
            } else {
                return [1, "`"]
            }
        },
        "  \n": function lineBreak() {
            return [3, ["linebreak"]]
        }
    };

    function strong_em(tag, md) {
        var state_slot = tag + "_state",
            other_slot = tag === "strong" ? "em_state" : "strong_state";

        function CloseTag(len) {
            this.len_after = len;
            this.name = "close_" + md
        }
        return function(text) {
            if (this[state_slot][0] === md) {
                this[state_slot].shift();
                return [text.length, new CloseTag(text.length - md.length)]
            } else {
                var other = this[other_slot].slice(),
                    state = this[state_slot].slice();
                this[state_slot].unshift(md);
                var res = this.processInline(text.substr(md.length));
                var last = res[res.length - 1];
                var check = this[state_slot].shift();
                if (last instanceof CloseTag) {
                    res.pop();
                    var consumed = text.length - last.len_after;
                    return [consumed, [tag].concat(res)]
                } else {
                    this[other_slot] = other;
                    this[state_slot] = state;
                    return [md.length, md]
                }
            }
        }
    }
    Markdown.dialects.Gruber.inline["**"] = strong_em("strong", "**");
    Markdown.dialects.Gruber.inline["__"] = strong_em("strong", "__");
    Markdown.dialects.Gruber.inline["*"] = strong_em("em", "*");
    Markdown.dialects.Gruber.inline["_"] = strong_em("em", "_");
    Markdown.buildBlockOrder = function(d) {
        var ord = [];
        for (var i in d) {
            if (i === "__order__" || i === "__call__") {
                continue
            }
            ord.push(i)
        }
        d.__order__ = ord
    };
    Markdown.buildInlinePatterns = function(d) {
        var patterns = [];
        for (var i in d) {
            if (i.match(/^__.*__$/)) {
                continue
            }
            var l = i.replace(/([\\.*+?|()\[\]{}])/g, "\\$1").replace(/\n/, "\\n");
            patterns.push(i.length === 1 ? l : "(?:" + l + ")")
        }
        patterns = patterns.join("|");
        d.__patterns__ = patterns;
        var fn = d.__call__;
        d.__call__ = function(text, pattern) {
            if (pattern !== undefined) {
                return fn.call(this, text, pattern)
            } else {
                return fn.call(this, text, patterns)
            }
        }
    };
    Markdown.DialectHelpers = {};
    Markdown.DialectHelpers.inline_until_char = function(text, want) {
        var consumed = 0,
            nodes = [];
        while (true) {
            if (text.charAt(consumed) === want) {
                consumed++;
                return [consumed, nodes]
            }
            if (consumed >= text.length) {
                return null
            }
            var res = this.dialect.inline.__oneElement__.call(this, text.substr(consumed));
            consumed += res[0];
            nodes.push.apply(nodes, res.slice(1))
        }
    };
    Markdown.subclassDialect = function(d) {
        function Block() {}
        Block.prototype = d.block;

        function Inline() {}
        Inline.prototype = d.inline;
        return {
            block: new Block(),
            inline: new Inline()
        }
    };
    Markdown.buildBlockOrder(Markdown.dialects.Gruber.block);
    Markdown.buildInlinePatterns(Markdown.dialects.Gruber.inline);
    Markdown.dialects.Maruku = Markdown.subclassDialect(Markdown.dialects.Gruber);
    Markdown.dialects.Maruku.processMetaHash = function processMetaHash(meta_string) {
        var meta = split_meta_hash(meta_string),
            attr = {};
        for (var i = 0; i < meta.length; ++i) {
            if (/^#/.test(meta[i])) {
                attr.id = meta[i].substring(1)
            } else {
                if (/^\./.test(meta[i])) {
                    if (attr["class"]) {
                        attr["class"] = attr["class"] + meta[i].replace(/./, " ")
                    } else {
                        attr["class"] = meta[i].substring(1)
                    }
                } else {
                    if (/\=/.test(meta[i])) {
                        var s = meta[i].split(/\=/);
                        attr[s[0]] = s[1]
                    }
                }
            }
        }
        return attr
    };

    function split_meta_hash(meta_string) {
        var meta = meta_string.split(""),
            parts = [""],
            in_quotes = false;
        while (meta.length) {
            var letter = meta.shift();
            switch (letter) {
                case " ":
                    if (in_quotes) {
                        parts[parts.length - 1] += letter
                    } else {
                        parts.push("")
                    }
                    break;
                case "'":
                case '"':
                    in_quotes = !in_quotes;
                    break;
                case "\\":
                    letter = meta.shift();
                default:
                    parts[parts.length - 1] += letter;
                    break
            }
        }
        return parts
    }
    Markdown.dialects.Maruku.block.document_meta = function document_meta(block) {
        if (block.lineNumber > 1) {
            return undefined
        }
        if (!block.match(/^(?:\w+:.*\n)*\w+:.*$/)) {
            return undefined
        }
        if (!extract_attr(this.tree)) {
            this.tree.splice(1, 0, {})
        }
        var pairs = block.split(/\n/);
        for (var p in pairs) {
            var m = pairs[p].match(/(\w+):\s*(.*)$/),
                key = m[1].toLowerCase(),
                value = m[2];
            this.tree[1][key] = value
        }
        return []
    };
    Markdown.dialects.Maruku.block.block_meta = function block_meta(block) {
        var m = block.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);
        if (!m) {
            return undefined
        }
        var attr = this.dialect.processMetaHash(m[2]),
            hash;
        if (m[1] === "") {
            var node = this.tree[this.tree.length - 1];
            hash = extract_attr(node);
            if (typeof node === "string") {
                return undefined
            }
            if (!hash) {
                hash = {};
                node.splice(1, 0, hash)
            }
            for (var a in attr) {
                hash[a] = attr[a]
            }
            return []
        }
        var b = block.replace(/\n.*$/, ""),
            result = this.processBlock(b, []);
        hash = extract_attr(result[0]);
        if (!hash) {
            hash = {};
            result[0].splice(1, 0, hash)
        }
        for (var a in attr) {
            hash[a] = attr[a]
        }
        return result
    };
    Markdown.dialects.Maruku.block.definition_list = function definition_list(block, next) {
        var tight = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
            list = ["dl"],
            i, m;
        if ((m = block.match(tight))) {
            var blocks = [block];
            while (next.length && tight.exec(next[0])) {
                blocks.push(next.shift())
            }
            for (var b = 0; b < blocks.length; ++b) {
                var m = blocks[b].match(tight),
                    terms = m[1].replace(/\n$/, "").split(/\n/),
                    defns = m[2].split(/\n:\s+/);
                for (i = 0; i < terms.length; ++i) {
                    list.push(["dt", terms[i]])
                }
                for (i = 0; i < defns.length; ++i) {
                    list.push(["dd"].concat(this.processInline(defns[i].replace(/(\n)\s+/, "$1"))))
                }
            }
        } else {
            return undefined
        }
        return [list]
    };
    Markdown.dialects.Maruku.block.table = function table(block) {
        var _split_on_unescaped = function(s, ch) {
            ch = ch || "\\s";
            if (ch.match(/^[\\|\[\]{}?*.+^$]$/)) {
                ch = "\\" + ch
            }
            var res = [],
                r = new RegExp("^((?:\\\\.|[^\\\\" + ch + "])*)" + ch + "(.*)"),
                m;
            while ((m = s.match(r))) {
                res.push(m[1]);
                s = m[2]
            }
            res.push(s);
            return res
        };
        var leading_pipe = /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,
            no_leading_pipe = /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,
            i, m;
        if ((m = block.match(leading_pipe))) {
            m[3] = m[3].replace(/^\s*\|/gm, "")
        } else {
            if (!(m = block.match(no_leading_pipe))) {
                return undefined
            }
        }
        var table = ["table", ["thead", ["tr"]],
            ["tbody"]
        ];
        m[2] = m[2].replace(/\|\s*$/, "").split("|");
        var html_attrs = [];
        forEach(m[2], function(s) {
            if (s.match(/^\s*-+:\s*$/)) {
                html_attrs.push({
                    align: "right"
                })
            } else {
                if (s.match(/^\s*:-+\s*$/)) {
                    html_attrs.push({
                        align: "left"
                    })
                } else {
                    if (s.match(/^\s*:-+:\s*$/)) {
                        html_attrs.push({
                            align: "center"
                        })
                    } else {
                        html_attrs.push({})
                    }
                }
            }
        });
        m[1] = _split_on_unescaped(m[1].replace(/\|\s*$/, ""), "|");
        for (i = 0; i < m[1].length; i++) {
            table[1][1].push(["th", html_attrs[i] || {}].concat(this.processInline(m[1][i].trim())))
        }
        forEach(m[3].replace(/\|\s*$/mg, "").split("\n"), function(row) {
            var html_row = ["tr"];
            row = _split_on_unescaped(row, "|");
            for (i = 0; i < row.length; i++) {
                html_row.push(["td", html_attrs[i] || {}].concat(this.processInline(row[i].trim())))
            }
            table[2].push(html_row)
        }, this);
        return [table]
    };
    Markdown.dialects.Maruku.inline["{:"] = function inline_meta(text, matches, out) {
        if (!out.length) {
            return [2, "{:"]
        }
        var before = out[out.length - 1];
        if (typeof before === "string") {
            return [2, "{:"]
        }
        var m = text.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);
        if (!m) {
            return [2, "{:"]
        }
        var meta = this.dialect.processMetaHash(m[1]),
            attr = extract_attr(before);
        if (!attr) {
            attr = {};
            before.splice(1, 0, attr)
        }
        for (var k in meta) {
            attr[k] = meta[k]
        }
        return [m[0].length, ""]
    };
    Markdown.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/;
    Markdown.buildBlockOrder(Markdown.dialects.Maruku.block);
    Markdown.buildInlinePatterns(Markdown.dialects.Maruku.inline);
    var isArray = Array.isArray || function(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]"
    };
    var forEach;
    if (Array.prototype.forEach) {
        forEach = function(arr, cb, thisp) {
            return arr.forEach(cb, thisp)
        }
    } else {
        forEach = function(arr, cb, thisp) {
            for (var i = 0; i < arr.length; i++) {
                cb.call(thisp || arr, arr[i], i, arr)
            }
        }
    }
    var isEmpty = function(obj) {
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                return false
            }
        }
        return true
    };

    function extract_attr(jsonml) {
        return isArray(jsonml) && jsonml.length > 1 && typeof jsonml[1] === "object" && !(isArray(jsonml[1])) ? jsonml[1] : undefined
    }
    expose.renderJsonML = function(jsonml, options) {
        options = options || {};
        options.root = options.root || false;
        var content = [];
        if (options.root) {
            content.push(render_tree(jsonml))
        } else {
            jsonml.shift();
            if (jsonml.length && typeof jsonml[0] === "object" && !(jsonml[0] instanceof Array)) {
                jsonml.shift()
            }
            while (jsonml.length) {
                content.push(render_tree(jsonml.shift()))
            }
        }
        return content.join("\n\n")
    };

    function escapeHTML(text) {
        return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }

    function render_tree(jsonml) {
        if (typeof jsonml === "string") {
            return escapeHTML(jsonml)
        }
        var tag = jsonml.shift(),
            attributes = {},
            content = [];
        if (jsonml.length && typeof jsonml[0] === "object" && !(jsonml[0] instanceof Array)) {
            attributes = jsonml.shift()
        }
        while (jsonml.length) {
            content.push(render_tree(jsonml.shift()))
        }
        var tag_attrs = "";
        for (var a in attributes) {
            tag_attrs += " " + a + '="' + escapeHTML(attributes[a]) + '"'
        }
        if (tag === "img" || tag === "br" || tag === "hr") {
            return "<" + tag + tag_attrs + "/>"
        } else {
            return "<" + tag + tag_attrs + ">" + content.join("") + "</" + tag + ">"
        }
    }

    function convert_tree_to_html(tree, references, options) {
        var i;
        options = options || {};
        var jsonml = tree.slice(0);
        if (typeof options.preprocessTreeNode === "function") {
            jsonml = options.preprocessTreeNode(jsonml, references)
        }
        var attrs = extract_attr(jsonml);
        if (attrs) {
            jsonml[1] = {};
            for (i in attrs) {
                jsonml[1][i] = attrs[i]
            }
            attrs = jsonml[1]
        }
        if (typeof jsonml === "string") {
            return jsonml
        }
        switch (jsonml[0]) {
            case "header":
                jsonml[0] = "h" + jsonml[1].level;
                delete jsonml[1].level;
                break;
            case "bulletlist":
                jsonml[0] = "ul";
                break;
            case "numberlist":
                jsonml[0] = "ol";
                break;
            case "listitem":
                jsonml[0] = "li";
                break;
            case "para":
                jsonml[0] = "p";
                break;
            case "markdown":
                jsonml[0] = "html";
                if (attrs) {
                    delete attrs.references
                }
                break;
            case "code_block":
                jsonml[0] = "pre";
                i = attrs ? 2 : 1;
                var code = ["code"];
                code.push.apply(code, jsonml.splice(i, jsonml.length - i));
                jsonml[i] = code;
                break;
            case "inlinecode":
                jsonml[0] = "code";
                break;
            case "img":
                jsonml[1].src = jsonml[1].href;
                delete jsonml[1].href;
                break;
            case "linebreak":
                jsonml[0] = "br";
                break;
            case "link":
                jsonml[0] = "a";
                break;
            case "link_ref":
                jsonml[0] = "a";
                var ref = references[attrs.ref];
                if (ref) {
                    delete attrs.ref;
                    attrs.href = ref.href;
                    if (ref.title) {
                        attrs.title = ref.title
                    }
                    delete attrs.original
                } else {
                    return attrs.original
                }
                break;
            case "img_ref":
                jsonml[0] = "img";
                var ref = references[attrs.ref];
                if (ref) {
                    delete attrs.ref;
                    attrs.src = ref.href;
                    if (ref.title) {
                        attrs.title = ref.title
                    }
                    delete attrs.original
                } else {
                    return attrs.original
                }
                break
        }
        i = 1;
        if (attrs) {
            for (var key in jsonml[1]) {
                i = 2;
                break
            }
            if (i === 1) {
                jsonml.splice(i, 1)
            }
        }
        for (; i < jsonml.length; ++i) {
            jsonml[i] = convert_tree_to_html(jsonml[i], references, options)
        }
        return jsonml
    }

    function merge_text_nodes(jsonml) {
        var i = extract_attr(jsonml) ? 2 : 1;
        while (i < jsonml.length) {
            if (typeof jsonml[i] === "string") {
                if (i + 1 < jsonml.length && typeof jsonml[i + 1] === "string") {
                    jsonml[i] += jsonml.splice(i + 1, 1)[0]
                } else {
                    ++i
                }
            } else {
                merge_text_nodes(jsonml[i]);
                ++i
            }
        }
    }
})((function() {
    if (typeof exports === "undefined") {
        window.markdown = {};
        return window.markdown
    } else {
        return exports
    }
})());

// 自动隐藏顶部导航插件(Bootstrap.autohidingnavbar) v1.0.0
(function($, window, document, undefined) {
    var pluginName = 'autoHidingNavbar',
        $window = $(window),
        $document = $(document),
        _scrollThrottleTimer = null,
        _resizeThrottleTimer = null,
        _throttleDelay = 70,
        _lastScrollHandlerRun = 0,
        _previousScrollTop = null,
        _windowHeight = $window.height(),
        _visible = true,
        _hideOffset, defaults = {
            disableAutohide: false,
            showOnUpscroll: true,
            showOnBottom: true,
            hideOffset: 'auto',
            animationDuration: 200
        };

    function AutoHidingNavbar(element, options) {
        this.element = $(element);
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    function hide(autoHidingNavbar) {
        if (!_visible) {
            return;
        }
        autoHidingNavbar.element.addClass('navbar-hidden').animate({
            top: -autoHidingNavbar.element.height()
        }, {
            queue: false,
            duration: autoHidingNavbar.settings.animationDuration
        });
        $('.dropdown.open .dropdown-toggle', autoHidingNavbar.element).dropdown('toggle');
        _visible = false;
    }

    function show(autoHidingNavbar) {
        if (_visible) {
            return;
        }
        autoHidingNavbar.element.removeClass('navbar-hidden').animate({
            top: 0
        }, {
            queue: false,
            duration: autoHidingNavbar.settings.animationDuration
        });
        _visible = true;
    }

    function detectState(autoHidingNavbar) {
        var scrollTop = $window.scrollTop(),
            scrollDelta = scrollTop - _previousScrollTop;
        _previousScrollTop = scrollTop;
        if (scrollDelta < 0) {
            if (_visible) {
                return;
            }
            if (autoHidingNavbar.settings.showOnUpscroll || scrollTop <= _hideOffset) {
                show(autoHidingNavbar);
            }
        } else if (scrollDelta > 0) {
            if (!_visible) {
                if (autoHidingNavbar.settings.showOnBottom && scrollTop + _windowHeight === $document.height()) {
                    show(autoHidingNavbar);
                }
                return;
            }
            if (scrollTop >= _hideOffset) {
                hide(autoHidingNavbar);
            }
        }
    }

    function scrollHandler(autoHidingNavbar) {
        if (autoHidingNavbar.settings.disableAutohide) {
            return;
        }
        _lastScrollHandlerRun = new Date().getTime();
        detectState(autoHidingNavbar);
    }

    function bindEvents(autoHidingNavbar) {
        $document.on('scroll.' + pluginName, function() {
            if (new Date().getTime() - _lastScrollHandlerRun > _throttleDelay) {
                scrollHandler(autoHidingNavbar);
            } else {
                clearTimeout(_scrollThrottleTimer);
                _scrollThrottleTimer = setTimeout(function() {
                    scrollHandler(autoHidingNavbar);
                }, _throttleDelay);
            }
        });
        $window.on('resize.' + pluginName, function() {
            clearTimeout(_resizeThrottleTimer);
            _resizeThrottleTimer = setTimeout(function() {
                _windowHeight = $window.height();
            }, _throttleDelay);
        });
    }

    function unbindEvents() {
        $document.off('.' + pluginName);
        $window.off('.' + pluginName);
    }
    AutoHidingNavbar.prototype = {
        init: function() {
            this.elements = {
                navbar: this.element
            };
            this.setDisableAutohide(this.settings.disableAutohide);
            this.setShowOnUpscroll(this.settings.showOnUpscroll);
            this.setShowOnBottom(this.settings.showOnBottom);
            this.setHideOffset(this.settings.hideOffset);
            this.setAnimationDuration(this.settings.animationDuration);
            _hideOffset = this.settings.hideOffset === 'auto' ? this.element.height() : this.settings.hideOffset;
            bindEvents(this);
            return this.element;
        },
        setDisableAutohide: function(value) {
            this.settings.disableAutohide = value;
            return this.element;
        },
        setShowOnUpscroll: function(value) {
            this.settings.showOnUpscroll = value;
            return this.element;
        },
        setShowOnBottom: function(value) {
            this.settings.showOnBottom = value;
            return this.element;
        },
        setHideOffset: function(value) {
            this.settings.hideOffset = value;
            return this.element;
        },
        setAnimationDuration: function(value) {
            this.settings.animationDuration = value;
            return this.element;
        },
        show: function() {
            show(this);
            return this.element;
        },
        hide: function() {
            hide(this);
            return this.element;
        },
        destroy: function() {
            unbindEvents(this);
            show(this);
            $.data(this, 'plugin_' + pluginName, null);
            return this.element;
        }
    };
    $.fn[pluginName] = function(options) {
        var args = arguments;
        if (options === undefined || typeof options === 'object') {
            return this.each(function() {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new AutoHidingNavbar(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            var returns;
            this.each(function() {
                var instance = $.data(this, 'plugin_' + pluginName);
                if (instance instanceof AutoHidingNavbar && typeof instance[options] === 'function') {
                    returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }
            });
            return returns !== undefined ? returns : this;
        }
    };
})(jQuery, window, document);

// 标签自动完成插件(jQuery.tokeninput 2014-04-02)
! function(a) {
    function b(a) {
        return String(null === a || void 0 === a ? "" : a)
    }

    function c(a) {
        return b(a).replace(i, function(a) {
            return h[a]
        })
    }
    var d = {
            method: "GET",
            queryParam: "q",
            searchDelay: 300,
            minChars: 1,
            propertyToSearch: "name",
            jsonContainer: null,
            contentType: "json",
            excludeCurrent: !1,
            excludeCurrentParameter: "x",
            prePopulate: null,
            processPrePopulate: !1,
            hintText: "Type in a search term",
            noResultsText: "No results",
            searchingText: "Searching...",
            deleteText: "&#215;",
            animateDropdown: !0,
            placeholder: null,
            theme: null,
            zindex: 999,
            resultsLimit: null,
            enableHTML: !1,
            resultsFormatter: function(a) {
                var b = a[this.propertyToSearch];
                return "<li>" + (this.enableHTML ? b : c(b)) + "</li>"
            },
            tokenFormatter: function(a) {
                var b = a[this.propertyToSearch];
                return "<li><p>" + (this.enableHTML ? b : c(b)) + "</p></li>"
            },
            tokenLimit: null,
            tokenDelimiter: ",",
            preventDuplicates: !1,
            tokenValue: "id",
            allowFreeTagging: !1,
            allowTabOut: !1,
            autoSelectFirstResult: !1,
            onResult: null,
            onCachedResult: null,
            onAdd: null,
            onFreeTaggingAdd: null,
            onDelete: null,
            onReady: null,
            idPrefix: "token-input-",
            disabled: !1
        },
        e = {
            tokenList: "token-input-list",
            token: "token-input-token",
            tokenReadOnly: "token-input-token-readonly",
            tokenDelete: "token-input-delete-token",
            selectedToken: "token-input-selected-token",
            highlightedToken: "token-input-highlighted-token",
            dropdown: "token-input-dropdown",
            dropdownItem: "token-input-dropdown-item",
            dropdownItem2: "token-input-dropdown-item2",
            selectedDropdownItem: "token-input-selected-dropdown-item",
            inputToken: "token-input-input-token",
            focused: "token-input-focused",
            disabled: "token-input-disabled"
        },
        f = {
            BEFORE: 0,
            AFTER: 1,
            END: 2
        },
        g = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESCAPE: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            NUMPAD_ENTER: 108,
            COMMA: 188
        },
        h = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        },
        i = /[&<>"'\/]/g,
        j = {
            init: function(b, c) {
                var e = a.extend({}, d, c || {});
                return this.each(function() {
                    a(this).data("settings", e), a(this).data("tokenInputObject", new a.TokenList(this, b, e))
                })
            },
            clear: function() {
                return this.data("tokenInputObject").clear(), this
            },
            add: function(a) {
                return this.data("tokenInputObject").add(a), this
            },
            remove: function(a) {
                return this.data("tokenInputObject").remove(a), this
            },
            get: function() {
                return this.data("tokenInputObject").getTokens()
            },
            toggleDisabled: function(a) {
                return this.data("tokenInputObject").toggleDisabled(a), this
            },
            setOptions: function(b) {
                return a(this).data("settings", a.extend({}, a(this).data("settings"), b || {})), this
            },
            destroy: function() {
                if (this.data("tokenInputObject")) {
                    this.data("tokenInputObject").clear();
                    var a = this,
                        b = this.parent();
                    return b.empty(), a.show(), b.append(a), a
                }
            }
        };
    a.fn.tokenInput = function(a) {
        return j[a] ? j[a].apply(this, Array.prototype.slice.call(arguments, 1)) : j.init.apply(this, arguments)
    }, a.TokenList = function(b, d, h) {
        function i(d) {
            return a(b).data("settings").enableHTML ? d : c(d)
        }

        function j(c) {
            a(b).data("settings").disabled = "boolean" == typeof c ? c : !a(b).data("settings").disabled, P.attr("disabled", a(b).data("settings").disabled), U.toggleClass(a(b).data("settings").classes.disabled, a(b).data("settings").disabled), R && q(a(R), f.END), Q.attr("disabled", a(b).data("settings").disabled)
        }

        function k() {
            return null !== a(b).data("settings").tokenLimit && N >= a(b).data("settings").tokenLimit ? (P.hide(), void u()) : void 0
        }

        function l() {
            if (L !== (L = P.val())) {
                var a = U.width() - P.offset().left - U.offset().left;
                X.html(c(L) || c(h.placeholder)), P.width(Math.min(U.width(), Math.max(a, X.width() + 30)))
            }
        }

        function m() {
            var c = a.trim(P.val()),
                d = c.split(a(b).data("settings").tokenDelimiter);
            a.each(d, function(c, d) {
                if (d) {
                    a.isFunction(a(b).data("settings").onFreeTaggingAdd) && (d = a(b).data("settings").onFreeTaggingAdd.call(Q, d));
                    var e = {};
                    e[a(b).data("settings").tokenValue] = e[a(b).data("settings").propertyToSearch] = d, o(e)
                }
            })
        }

        function n(c) {
            var d = a(a(b).data("settings").tokenFormatter(c)),
                e = c.readonly === !0 ? !0 : !1;
            e && d.addClass(a(b).data("settings").classes.tokenReadOnly), d.addClass(a(b).data("settings").classes.token).insertBefore(V), e || a("<span>" + a(b).data("settings").deleteText + "</span>").addClass(a(b).data("settings").classes.tokenDelete).appendTo(d).click(function() {
                return a(b).data("settings").disabled ? void 0 : (s(a(this).parent()), Q.change(), !1)
            });
            var f = c;
            return a.data(d.get(0), "tokeninput", c), M = M.slice(0, S).concat([f]).concat(M.slice(S)), S++, t(M, Q), N += 1, null !== a(b).data("settings").tokenLimit && N >= a(b).data("settings").tokenLimit && (P.hide(), u()), d
        }

        function o(c) {
            var d = a(b).data("settings").onAdd;
            if (N > 0 && a(b).data("settings").preventDuplicates) {
                var e = null;
                if (U.children().each(function() {
                        var b = a(this),
                            d = a.data(b.get(0), "tokeninput");
                        return d && d[h.tokenValue] === c[h.tokenValue] ? (e = b, !1) : void 0
                    }), e) return p(e), V.insertAfter(e), void I(P)
            }
            P.width(1), (null == a(b).data("settings").tokenLimit || N < a(b).data("settings").tokenLimit) && (n(c), P.attr("placeholder", null), k()), P.val(""), u(), a.isFunction(d) && d.call(Q, c)
        }

        function p(c) {
            a(b).data("settings").disabled || (c.addClass(a(b).data("settings").classes.selectedToken), R = c.get(0), P.val(""), u())
        }

        function q(c, d) {
            c.removeClass(a(b).data("settings").classes.selectedToken), R = null, d === f.BEFORE ? (V.insertBefore(c), S--) : d === f.AFTER ? (V.insertAfter(c), S++) : (V.appendTo(U), S = N), I(P)
        }

        function r(b) {
            var c = R;
            R && q(a(R), f.END), c === b.get(0) ? q(b, f.END) : p(b)
        }

        function s(c) {
            var d = a.data(c.get(0), "tokeninput"),
                e = a(b).data("settings").onDelete,
                f = c.prevAll().length;
            f > S && f--, c.remove(), R = null, I(P), M = M.slice(0, f).concat(M.slice(f + 1)), 0 == M.length && P.attr("placeholder", h.placeholder), S > f && S--, t(M, Q), N -= 1, null !== a(b).data("settings").tokenLimit && (P.show().val(""), I(P)), a.isFunction(e) && e.call(Q, d)
        }

        function t(c, d) {
            var e = a.map(c, function(c) {
                return "function" == typeof a(b).data("settings").tokenValue ? a(b).data("settings").tokenValue.call(this, c) : c[a(b).data("settings").tokenValue]
            });
            d.val(e.join(a(b).data("settings").tokenDelimiter))
        }

        function u() {
            W.hide().empty(), T = null
        }

        function v() {
            W.css({
                position: "absolute",
                top: U.offset().top + U.outerHeight(!0),
                left: U.offset().left,
                width: U.width(),
                "z-index": a(b).data("settings").zindex
            }).show()
        }

        function w() {
            a(b).data("settings").searchingText && (W.html("<p>" + i(a(b).data("settings").searchingText) + "</p>"), v())
        }

        function x() {
            a(b).data("settings").hintText && (W.html("<p>" + i(a(b).data("settings").hintText) + "</p>"), v())
        }

        function y(a) {
            return a.replace(Z, "\\$&")
        }

        function z(a, b) {
            return a.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + y(b) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), function(a, b) {
                return "<b>" + i(b) + "</b>"
            })
        }

        function A(a, b, c) {
            return a.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + y(b) + ")(?![^<>]*>)(?![^&;]+;)", "g"), z(b, c))
        }

        function B(c) {
            if (a(b).data("settings").excludeCurrent) {
                var d = a(b).data("tokenInputObject").getTokens(),
                    e = [];
                d.length && (a.each(c, function(c, f) {
                    var g = !0;
                    a.each(d, function(c, d) {
                        return f[a(b).data("settings").propertyToSearch] == d[a(b).data("settings").propertyToSearch] ? (g = !1, !1) : void 0
                    }), g && e.push(f)
                }), c = e)
            }
            return c
        }

        function C(c, d) {
            if (d = B(d), d && d.length) {
                W.empty();
                var e = a("<ul/>").appendTo(W).mouseover(function(b) {
                    D(a(b.target).closest("li"))
                }).mousedown(function(b) {
                    return o(a(b.target).closest("li").data("tokeninput")), Q.change(), !1
                }).hide();
                a(b).data("settings").resultsLimit && d.length > a(b).data("settings").resultsLimit && (d = d.slice(0, a(b).data("settings").resultsLimit)), a.each(d, function(d, f) {
                    var g = a(b).data("settings").resultsFormatter(f);
                    g = A(g, f[a(b).data("settings").propertyToSearch], c), g = a(g).appendTo(e), g.addClass(d % 2 ? a(b).data("settings").classes.dropdownItem : a(b).data("settings").classes.dropdownItem2), 0 === d && a(b).data("settings").autoSelectFirstResult && D(g), a.data(g.get(0), "tokeninput", f)
                }), v(), a(b).data("settings").animateDropdown ? e.slideDown("fast") : e.show()
            } else a(b).data("settings").noResultsText && (W.html("<p>" + i(a(b).data("settings").noResultsText) + "</p>"), v())
        }

        function D(c) {
            c && (T && E(a(T)), c.addClass(a(b).data("settings").classes.selectedDropdownItem), T = c.get(0))
        }

        function E(c) {
            c.removeClass(a(b).data("settings").classes.selectedDropdownItem), T = null
        }

        function F() {
            var c = P.val();
            c && c.length && (R && q(a(R), f.AFTER), c.length >= a(b).data("settings").minChars ? (w(), clearTimeout(K), K = setTimeout(function() {
                G(c)
            }, a(b).data("settings").searchDelay)) : u())
        }

        function G(c) {
            var d = c + H(),
                e = O.get(d);
            if (e) a.isFunction(a(b).data("settings").onCachedResult) && (e = a(b).data("settings").onCachedResult.call(Q, e)), C(c, e);
            else if (a(b).data("settings").url) {
                var f = H(),
                    g = {};
                if (g.data = {}, f.indexOf("?") > -1) {
                    var i = f.split("?");
                    g.url = i[0];
                    var j = i[1].split("&");
                    a.each(j, function(a, b) {
                        var c = b.split("=");
                        g.data[c[0]] = c[1]
                    })
                } else g.url = f;
                if (g.data[a(b).data("settings").queryParam] = c, g.type = a(b).data("settings").method, g.dataType = a(b).data("settings").contentType, a(b).data("settings").crossDomain && (g.dataType = "jsonp"), a(b).data("settings").excludeCurrent) {
                    var k = a(b).data("tokenInputObject").getTokens(),
                        l = a.map(k, function(c) {
                            return "function" == typeof a(b).data("settings").tokenValue ? a(b).data("settings").tokenValue.call(this, c) : c[a(b).data("settings").tokenValue]
                        });
                    g.data[a(b).data("settings").excludeCurrentParameter] = l.join(a(b).data("settings").tokenDelimiter)
                }
                g.success = function(e) {
                    O.add(d, a(b).data("settings").jsonContainer ? e[a(b).data("settings").jsonContainer] : e), a.isFunction(a(b).data("settings").onResult) && (e = a(b).data("settings").onResult.call(Q, e)), P.val() === c && C(c, a(b).data("settings").jsonContainer ? e[a(b).data("settings").jsonContainer] : e)
                }, h.onSend && h.onSend(g), a.ajax(g)
            } else if (a(b).data("settings").local_data) {
                var m = a.grep(a(b).data("settings").local_data, function(d) {
                    return d[a(b).data("settings").propertyToSearch].toLowerCase().indexOf(c.toLowerCase()) > -1
                });
                O.add(d, m), a.isFunction(a(b).data("settings").onResult) && (m = a(b).data("settings").onResult.call(Q, m)), C(c, m)
            }
        }

        function H() {
            var c = a(b).data("settings").url;
            return "function" == typeof a(b).data("settings").url && (c = a(b).data("settings").url.call(a(b).data("settings"))), c
        }

        function I(a) {
            setTimeout(function() {
                a.focus()
            }, 50)
        }
        if ("string" == typeof d || "function" == typeof d) {
            a(b).data("settings").url = d;
            var J = H();
            void 0 === a(b).data("settings").crossDomain && "string" == typeof J && (a(b).data("settings").crossDomain = -1 === J.indexOf("://") ? !1 : location.href.split(/\/+/g)[1] !== J.split(/\/+/g)[1])
        } else "object" == typeof d && (a(b).data("settings").local_data = d);
        a(b).data("settings").classes ? a(b).data("settings").classes = a.extend({}, e, a(b).data("settings").classes) : a(b).data("settings").theme ? (a(b).data("settings").classes = {}, a.each(e, function(c, d) {
            a(b).data("settings").classes[c] = d + "-" + a(b).data("settings").theme
        })) : a(b).data("settings").classes = e;
        var K, L, M = [],
            N = 0,
            O = new a.TokenList.Cache,
            P = a('<input type="text" autocomplete="off" autocapitalize="off"/>').css({
                outline: "none"
            }).attr("id", a(b).data("settings").idPrefix + b.id).focus(function() {
                return a(b).data("settings").disabled ? !1 : ((null === a(b).data("settings").tokenLimit || a(b).data("settings").tokenLimit !== N) && x(), void U.addClass(a(b).data("settings").classes.focused))
            }).blur(function() {
                u(), a(b).data("settings").allowFreeTagging && m(), a(this).val(""), U.removeClass(a(b).data("settings").classes.focused)
            }).bind("keyup keydown blur update", l).keydown(function(c) {
                var d, e;
                switch (c.keyCode) {
                    case g.LEFT:
                    case g.RIGHT:
                    case g.UP:
                    case g.DOWN:
                        if (0 === this.value.length) d = V.prev(), e = V.next(), d.length && d.get(0) === R || e.length && e.get(0) === R ? c.keyCode === g.LEFT || c.keyCode === g.UP ? q(a(R), f.BEFORE) : q(a(R), f.AFTER) : c.keyCode !== g.LEFT && c.keyCode !== g.UP || !d.length ? c.keyCode !== g.RIGHT && c.keyCode !== g.DOWN || !e.length || p(a(e.get(0))) : p(a(d.get(0)));
                        else {
                            var h = null;
                            c.keyCode === g.DOWN || c.keyCode === g.RIGHT ? (h = a(W).find("li").first(), T && (h = a(T).next())) : (h = a(W).find("li").last(), T && (h = a(T).prev())), D(h)
                        }
                        break;
                    case g.BACKSPACE:
                        if (d = V.prev(), 0 === this.value.length) return R ? (s(a(R)), Q.change()) : d.length && p(a(d.get(0))), !1;
                        1 === a(this).val().length ? u() : setTimeout(function() {
                            F()
                        }, 5);
                        break;
                    case g.TAB:
                    case g.ENTER:
                    case g.NUMPAD_ENTER:
                    case g.COMMA:
                        if (T) o(a(T).data("tokeninput")), Q.change();
                        else {
                            if (a(b).data("settings").allowFreeTagging) {
                                if (a(b).data("settings").allowTabOut && "" === a(this).val()) return !0;
                                m()
                            } else if (a(this).val(""), a(b).data("settings").allowTabOut) return !0;
                            c.stopPropagation(), c.preventDefault()
                        }
                        return !1;
                    case g.ESCAPE:
                        return u(), !0;
                    default:
                        String.fromCharCode(c.which) && setTimeout(function() {
                            F()
                        }, 5)
                }
            });
        h.placeholder && P.attr("placeholder", h.placeholder);
        var Q = a(b).hide().val("").focus(function() {
                I(P)
            }).blur(function() {
                return P.blur(), Q
            }),
            R = null,
            S = 0,
            T = null,
            U = a("<ul />").addClass(a(b).data("settings").classes.tokenList).click(function(b) {
                var c = a(b.target).closest("li");
                c && c.get(0) && a.data(c.get(0), "tokeninput") ? r(c) : (R && q(a(R), f.END), I(P))
            }).mouseover(function(c) {
                var d = a(c.target).closest("li");
                d && R !== this && d.addClass(a(b).data("settings").classes.highlightedToken)
            }).mouseout(function(c) {
                var d = a(c.target).closest("li");
                d && R !== this && d.removeClass(a(b).data("settings").classes.highlightedToken)
            }).insertBefore(Q),
            V = a("<li />").addClass(a(b).data("settings").classes.inputToken).appendTo(U).append(P),
            W = a("<div/>").addClass(a(b).data("settings").classes.dropdown).appendTo("body").hide(),
            X = a("<tester/>").insertAfter(P).css({
                position: "absolute",
                top: -9999,
                left: -9999,
                width: "auto",
                fontSize: P.css("fontSize"),
                fontFamily: P.css("fontFamily"),
                fontWeight: P.css("fontWeight"),
                letterSpacing: P.css("letterSpacing"),
                whiteSpace: "nowrap"
            });
        Q.val("");
        var Y = a(b).data("settings").prePopulate || Q.data("pre");
        a(b).data("settings").processPrePopulate && a.isFunction(a(b).data("settings").onResult) && (Y = a(b).data("settings").onResult.call(Q, Y)), Y && Y.length && a.each(Y, function(a, b) {
            n(b), k(), P.attr("placeholder", null)
        }), a(b).data("settings").disabled && j(!0), "function" == typeof a(b).data("settings").onReady && a(b).data("settings").onReady.call(), this.clear = function() {
            U.children("li").each(function() {
                0 === a(this).children("input").length && s(a(this))
            })
        }, this.add = function(a) {
            o(a)
        }, this.remove = function(b) {
            U.children("li").each(function() {
                if (0 === a(this).children("input").length) {
                    var c = a(this).data("tokeninput"),
                        d = !0;
                    for (var e in b)
                        if (b[e] !== c[e]) {
                            d = !1;
                            break
                        }
                    d && s(a(this))
                }
            })
        }, this.getTokens = function() {
            return M
        }, this.toggleDisabled = function(a) {
            j(a)
        }, l();
        var Z = new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]", "g")
    }, a.TokenList.Cache = function(b) {
        var c, d, e = {},
            f = 0;
        c = a.extend({
            max_size: 500
        }, b), d = function() {
            e = {}, f = 0
        }, this.add = function(a, b) {
            f > c.max_size && d(), e[a] || (f += 1), e[a] = b
        }, this.get = function(a) {
            return e[a]
        }
    }
}(jQuery);

// 图片延迟加载插件(jQuery.lazyload v1.9.3)
! function(a, b, c, d) {
    var e = a(b);
    a.fn.lazyload = function(f) {
        function g() {
            var b = 0;
            i.each(function() {
                var c = a(this);
                if (!j.skip_invisible || c.is(":visible"))
                    if (a.abovethetop(this, j) || a.leftofbegin(this, j));
                    else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
                    if (++b > j.failure_limit) return !1
                } else c.trigger("appear"), b = 0
            })
        }
        var h, i = this,
            j = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: b,
                data_attribute: "original",
                skip_invisible: !0,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
        return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function() {
            return g()
        }), this.each(function() {
            var b = this,
                c = a(b);
            b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.is("img") && c.attr("src", j.placeholder), c.one("appear", function() {
                if (!this.loaded) {
                    if (j.appear) {
                        var d = i.length;
                        j.appear.call(b, d, j)
                    }
                    a("<img />").bind("load", function() {
                        var d = c.attr("data-" + j.data_attribute);
                        c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0;
                        var e = a.grep(i, function(a) {
                            return !a.loaded
                        });
                        if (i = a(e), j.load) {
                            var f = i.length;
                            j.load.call(b, f, j)
                        }
                    }).attr("src", c.attr("data-" + j.data_attribute))
                }
            }), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function() {
                b.loaded || c.trigger("appear")
            })
        }), e.bind("resize", function() {
            g()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function(b) {
            b.originalEvent && b.originalEvent.persisted && i.each(function() {
                a(this).trigger("appear")
            })
        }), a(c).ready(function() {
            g()
        }), this
    }, a.belowthefold = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold
    }, a.rightoffold = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold
    }, a.abovethetop = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height()
    }, a.leftofbegin = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width()
    }, a.inviewport = function(b, c) {
        return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))
    }, a.extend(a.expr[":"], {
        "below-the-fold": function(b) {
            return a.belowthefold(b, {
                threshold: 0
            })
        },
        "above-the-top": function(b) {
            return !a.belowthefold(b, {
                threshold: 0
            })
        },
        "right-of-screen": function(b) {
            return a.rightoffold(b, {
                threshold: 0
            })
        },
        "left-of-screen": function(b) {
            return !a.rightoffold(b, {
                threshold: 0
            })
        },
        "in-viewport": function(b) {
            return a.inviewport(b, {
                threshold: 0
            })
        },
        "above-the-fold": function(b) {
            return !a.belowthefold(b, {
                threshold: 0
            })
        },
        "right-of-fold": function(b) {
            return a.rightoffold(b, {
                threshold: 0
            })
        },
        "left-of-fold": function(b) {
            return !a.rightoffold(b, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document);

// 排序插件(jQuery.dragSort v0.5.2)
(function(e) {
    e.fn.dragsort = function(t) {
        if (t == "destroy") {
            e(this.selector).trigger("dragsort-uninit");
            return
        }
        var n = e.extend({}, e.fn.dragsort.defaults, t);
        var r = [];
        var i = null,
            s = null;
        this.each(function(t, o) {
            if (e(o).is("table") && e(o).children().size() == 1 && e(o).children().is("tbody")) o = e(o).children().get(0);
            var u = {
                draggedItem: null,
                placeHolderItem: null,
                pos: null,
                offset: null,
                offsetLimit: null,
                scroll: null,
                container: o,
                init: function() {
                    n.tagName = e(this.container).children().size() == 0 ? "li" : e(this.container).children().get(0).tagName.toLowerCase();
                    if (n.itemSelector == "") n.itemSelector = n.tagName;
                    if (n.dragSelector == "") n.dragSelector = n.tagName;
                    if (n.placeHolderTemplate == "") n.placeHolderTemplate = "<" + n.tagName + ">&nbsp;</" + n.tagName + ">";
                    e(this.container).attr("data-listidx", t).mousedown(this.grabItem).bind("dragsort-uninit", this.uninit);
                    this.styleDragHandlers(true)
                },
                uninit: function() {
                    var t = r[e(this).attr("data-listidx")];
                    e(t.container).unbind("mousedown", t.grabItem).unbind("dragsort-uninit");
                    t.styleDragHandlers(false)
                },
                getItems: function() {
                    return e(this.container).children(n.itemSelector)
                },
                styleDragHandlers: function(t) {
                    this.getItems().map(function() {
                        return e(this).is(n.dragSelector) ? this : e(this).find(n.dragSelector).get()
                    }).css("cursor", t ? "pointer" : "")
                },
                grabItem: function(t) {
                    var i = r[e(this).attr("data-listidx")];
                    var s = e(t.target).closest("[data-listidx] > " + n.tagName).get(0);
                    var o = i.getItems().filter(function() {
                        return this == s
                    }).size() > 0;
                    if (t.which != 1 || e(t.target).is(n.dragSelectorExclude) || e(t.target).closest(n.dragSelectorExclude).size() > 0 || !o) return;
                    t.preventDefault();
                    var u = t.target;
                    while (!e(u).is(n.dragSelector)) {
                        if (u == this) return;
                        u = u.parentNode
                    }
                    e(u).attr("data-cursor", e(u).css("cursor"));
                    e(u).css("cursor", "move");
                    var a = this;
                    var f = function() {
                        i.dragStart.call(a, t);
                        e(i.container).unbind("mousemove", f)
                    };
                    e(i.container).mousemove(f).mouseup(function() {
                        e(i.container).unbind("mousemove", f);
                        e(u).css("cursor", e(u).attr("data-cursor"))
                    })
                },
                dragStart: function(t) {
                    if (i != null && i.draggedItem != null) i.dropItem();
                    i = r[e(this).attr("data-listidx")];
                    i.draggedItem = e(t.target).closest("[data-listidx] > " + n.tagName);
                    i.draggedItem.attr("data-origpos", e(this).attr("data-listidx") + "-" + e(i.container).children().index(i.draggedItem));
                    var s = parseInt(i.draggedItem.css("marginTop"));
                    var o = parseInt(i.draggedItem.css("marginLeft"));
                    i.offset = i.draggedItem.offset();
                    i.offset.top = t.pageY - i.offset.top + (isNaN(s) ? 0 : s) - 1;
                    i.offset.left = t.pageX - i.offset.left + (isNaN(o) ? 0 : o) - 1;
                    if (!n.dragBetween) {
                        var u = e(i.container).outerHeight() == 0 ? Math.max(1, Math.round(.5 + i.getItems().size() * i.draggedItem.outerWidth() / e(i.container).outerWidth())) * i.draggedItem.outerHeight() : e(i.container).outerHeight();
                        i.offsetLimit = e(i.container).offset();
                        i.offsetLimit.right = i.offsetLimit.left + e(i.container).outerWidth() - i.draggedItem.outerWidth();
                        i.offsetLimit.bottom = i.offsetLimit.top + u - i.draggedItem.outerHeight()
                    }
                    var a = i.draggedItem.height();
                    var f = i.draggedItem.width();
                    if (n.tagName == "tr") {
                        i.draggedItem.children().each(function() {
                            e(this).width(e(this).width())
                        });
                        i.placeHolderItem = i.draggedItem.clone().attr("data-placeholder", true);
                        i.draggedItem.after(i.placeHolderItem);
                        i.placeHolderItem.children().each(function() {
                            e(this).css({
                                borderWidth: 0,
                                width: e(this).width() + 1,
                                height: e(this).height() + 1
                            }).html("&nbsp;")
                        })
                    } else {
                        i.draggedItem.after(n.placeHolderTemplate);
                        i.placeHolderItem = i.draggedItem.next().css({
                            height: a,
                            width: f
                        }).attr("data-placeholder", true)
                    }
                    if (n.tagName == "td") {
                        var l = i.draggedItem.closest("table").get(0);
                        e("<table id='" + l.id + "' style='border-width: 0px;' class='dragSortItem " + l.className + "'><tr></tr></table>").appendTo("body").children().append(i.draggedItem)
                    }
                    var c = i.draggedItem.attr("style");
                    i.draggedItem.attr("data-origstyle", c ? c : "");
                    i.draggedItem.css({
                        position: "absolute",
                        opacity: .8,
                        "z-index": 999,
                        height: a,
                        width: f
                    });
                    i.scroll = {
                        moveX: 0,
                        moveY: 0,
                        maxX: e(document).width() - e(window).width(),
                        maxY: e(document).height() - e(window).height()
                    };
                    i.scroll.scrollY = window.setInterval(function() {
                        if (n.scrollContainer != window) {
                            e(n.scrollContainer).scrollTop(e(n.scrollContainer).scrollTop() + i.scroll.moveY);
                            return
                        }
                        var t = e(n.scrollContainer).scrollTop();
                        if (i.scroll.moveY > 0 && t < i.scroll.maxY || i.scroll.moveY < 0 && t > 0) {
                            e(n.scrollContainer).scrollTop(t + i.scroll.moveY);
                            i.draggedItem.css("top", i.draggedItem.offset().top + i.scroll.moveY + 1)
                        }
                    }, 10);
                    i.scroll.scrollX = window.setInterval(function() {
                        if (n.scrollContainer != window) {
                            e(n.scrollContainer).scrollLeft(e(n.scrollContainer).scrollLeft() + i.scroll.moveX);
                            return
                        }
                        var t = e(n.scrollContainer).scrollLeft();
                        if (i.scroll.moveX > 0 && t < i.scroll.maxX || i.scroll.moveX < 0 && t > 0) {
                            e(n.scrollContainer).scrollLeft(t + i.scroll.moveX);
                            i.draggedItem.css("left", i.draggedItem.offset().left + i.scroll.moveX + 1)
                        }
                    }, 10);
                    e(r).each(function(e, t) {
                        t.createDropTargets();
                        t.buildPositionTable()
                    });
                    i.setPos(t.pageX, t.pageY);
                    e(document).bind("mousemove", i.swapItems);
                    e(document).bind("mouseup", i.dropItem);
                    if (n.scrollContainer != window) e(window).bind("wheel", i.wheel)
                },
                setPos: function(t, r) {
                    var s = r - this.offset.top;
                    var o = t - this.offset.left;
                    if (!n.dragBetween) {
                        s = Math.min(this.offsetLimit.bottom, Math.max(s, this.offsetLimit.top));
                        o = Math.min(this.offsetLimit.right, Math.max(o, this.offsetLimit.left))
                    }
                    var u = this.draggedItem.offsetParent().not("body").offset();
                    if (u != null) {
                        s -= u.top;
                        o -= u.left
                    }
                    if (n.scrollContainer == window) {
                        r -= e(window).scrollTop();
                        t -= e(window).scrollLeft();
                        r = Math.max(0, r - e(window).height() + 5) + Math.min(0, r - 5);
                        t = Math.max(0, t - e(window).width() + 5) + Math.min(0, t - 5)
                    } else {
                        var a = e(n.scrollContainer);
                        var f = a.offset();
                        r = Math.max(0, r - a.height() - f.top) + Math.min(0, r - f.top);
                        t = Math.max(0, t - a.width() - f.left) + Math.min(0, t - f.left)
                    }
                    i.scroll.moveX = t == 0 ? 0 : t * n.scrollSpeed / Math.abs(t);
                    i.scroll.moveY = r == 0 ? 0 : r * n.scrollSpeed / Math.abs(r);
                    this.draggedItem.css({
                        top: s,
                        left: o
                    })
                },
                wheel: function(t) {
                    if (i && n.scrollContainer != window) {
                        var r = e(n.scrollContainer);
                        var s = r.offset();
                        t = t.originalEvent;
                        if (t.clientX > s.left && t.clientX < s.left + r.width() && t.clientY > s.top && t.clientY < s.top + r.height()) {
                            var o = (t.deltaMode == 0 ? 1 : 10) * t.deltaY;
                            r.scrollTop(r.scrollTop() + o);
                            t.preventDefault()
                        }
                    }
                },
                buildPositionTable: function() {
                    var t = [];
                    this.getItems().not([i.draggedItem[0], i.placeHolderItem[0]]).each(function(n) {
                        var r = e(this).offset();
                        r.right = r.left + e(this).outerWidth();
                        r.bottom = r.top + e(this).outerHeight();
                        r.elm = this;
                        t[n] = r
                    });
                    this.pos = t
                },
                dropItem: function() {
                    if (i.draggedItem == null) return;
                    var t = i.draggedItem.attr("data-origstyle");
                    i.draggedItem.attr("style", t);
                    if (t == "") i.draggedItem.removeAttr("style");
                    i.draggedItem.removeAttr("data-origstyle");
                    i.styleDragHandlers(true);
                    i.placeHolderItem.before(i.draggedItem);
                    i.placeHolderItem.remove();
                    e("[data-droptarget], .dragSortItem").remove();
                    window.clearInterval(i.scroll.scrollY);
                    window.clearInterval(i.scroll.scrollX);
                    if (i.draggedItem.attr("data-origpos") != e(r).index(i) + "-" + e(i.container).children().index(i.draggedItem))
                        if (n.dragEnd.apply(i.draggedItem) == false) {
                            var s = i.draggedItem.attr("data-origpos").split("-");
                            var o = e(r[s[0]].container).children().not(i.draggedItem).eq(s[1]);
                            if (o.size() > 0) o.before(i.draggedItem);
                            else if (s[1] == 0) e(r[s[0]].container).prepend(i.draggedItem);
                            else e(r[s[0]].container).append(i.draggedItem)
                        }
                    i.draggedItem.removeAttr("data-origpos");
                    i.draggedItem = null;
                    e(document).unbind("mousemove", i.swapItems);
                    e(document).unbind("mouseup", i.dropItem);
                    if (n.scrollContainer != window) e(window).unbind("wheel", i.wheel);
                    return false
                },
                swapItems: function(t) {
                    if (i.draggedItem == null) return false;
                    i.setPos(t.pageX, t.pageY);
                    var o = i.findPos(t.pageX, t.pageY);
                    var u = i;
                    for (var a = 0; o == -1 && n.dragBetween && a < r.length; a++) {
                        o = r[a].findPos(t.pageX, t.pageY);
                        u = r[a]
                    }
                    if (o == -1) return false;
                    var f = function() {
                        return e(u.container).children().not(u.draggedItem)
                    };
                    var l = f().not(n.itemSelector).each(function(e) {
                        this.idx = f().index(this)
                    });
                    if (s == null || s.top > i.draggedItem.offset().top || s.left > i.draggedItem.offset().left) e(u.pos[o].elm).before(i.placeHolderItem);
                    else e(u.pos[o].elm).after(i.placeHolderItem);
                    l.each(function() {
                        var t = f().eq(this.idx).get(0);
                        if (this != t && f().index(this) < this.idx) e(this).insertAfter(t);
                        else if (this != t) e(this).insertBefore(t)
                    });
                    e(r).each(function(e, t) {
                        t.createDropTargets();
                        t.buildPositionTable()
                    });
                    s = i.draggedItem.offset();
                    return false
                },
                findPos: function(e, t) {
                    for (var n = 0; n < this.pos.length; n++) {
                        if (this.pos[n].left < e && this.pos[n].right > e && this.pos[n].top < t && this.pos[n].bottom > t) return n
                    }
                    return -1
                },
                createDropTargets: function() {
                    if (!n.dragBetween) return;
                    e(r).each(function() {
                        var t = e(this.container).find("[data-placeholder]");
                        var r = e(this.container).find("[data-droptarget]");
                        if (t.size() > 0 && r.size() > 0) r.remove();
                        else if (t.size() == 0 && r.size() == 0) {
                            if (n.tagName == "td") e(n.placeHolderTemplate).attr("data-droptarget", true).appendTo(this.container);
                            else e(this.container).append(i.placeHolderItem.removeAttr("data-placeholder").clone().attr("data-droptarget", true));
                            i.placeHolderItem.attr("data-placeholder", true)
                        }
                    })
                }
            };
            u.init();
            r.push(u)
        });
        return this
    };
    e.fn.dragsort.defaults = {
        itemSelector: "",
        dragSelector: "",
        dragSelectorExclude: "input, textarea",
        dragEnd: function() {},
        dragBetween: false,
        placeHolderTemplate: "",
        scrollContainer: window,
        scrollSpeed: 5
    }
})(jQuery)

// 评分插件(JQuery.starrating v3.5.3)
! function(t) {
    String.prototype.replaceAll = function(t, e) {
        return this.split(t).join(e)
    };
    var e = 0,
        a = 5,
        n = 0.5,
        r = function(e, a) {
            return null === e || void 0 === e || 0 === e.length || a && "" === t.trim(e)
        },
        i = function(t, e) {
            t.removeClass(e).addClass(e)
        },
        l = function(t, e, a) {
            var n = r(t.data(e)) ? t.attr(e) : t.data(e);
            return n ? n : a[e]
        },
        o = function(t) {
            var e = ("" + t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return e ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0
        },
        s = function(t, e) {
            return parseFloat(t.toFixed(e))
        },
        c = function(e, a) {
            this.$element = t(e), this.init(a)
        };
    c.prototype = {
        constructor: c,
        _parseAttr: function(t, i) {
            var o = this,
                s = o.$element;
            if ("range" === s.attr("type") || "number" === s.attr("type")) {
                var c, u, g = l(s, t, i);
                switch (t) {
                    case "min":
                        c = e;
                        break;
                    case "max":
                        c = a;
                        break;
                    default:
                        c = n
                }
                return u = r(g) ? c : g, parseFloat(u)
            }
            return parseFloat(i[t])
        },
        listenClick: function(t, e) {
            t.on("click touchstart", function(t) {
                return t.stopPropagation(), t.preventDefault(), t.handled === !0 ? !1 : (e(t), void(t.handled = !0))
            })
        },
        setDefault: function(t, e) {
            var a = this;
            r(a[t]) && (a[t] = e)
        },
        getPosition: function(t) {
            var e = t.pageX || t.originalEvent.touches[0].pageX;
            return e - this.$rating.offset().left
        },
        listen: function() {
            var e, a, n = this;
            n.initTouch(), n.listenClick(n.$rating, function(t) {
                return n.inactive ? !1 : (e = n.getPosition(t), n.setStars(e), n.$element.trigger("change").trigger("rating.change", [n.$element.val(), n.$caption.html()]), void(n.starClicked = !0))
            }), n.$rating.on("mousemove", function(t) {
                n.hoverEnabled && !n.inactive && (n.starClicked = !1, e = n.getPosition(t), a = n.calculate(e), n.toggleHover(a), n.$element.trigger("rating.hover", [a.val, a.caption, "stars"]))
            }), n.$rating.on("mouseleave", function() {
                !n.hoverEnabled || n.inactive || n.starClicked || (a = n.cache, n.toggleHover(a), n.$element.trigger("rating.hoverleave", ["stars"]))
            }), n.$clear.on("mousemove", function() {
                if (n.hoverEnabled && !n.inactive && n.hoverOnClear) {
                    n.clearClicked = !1;
                    var t = '<span class="' + n.clearCaptionClass + '">' + n.clearCaption + "</span>",
                        e = n.clearValue,
                        r = n.getWidthFromValue(e);
                    a = {
                        caption: t,
                        width: r,
                        val: e
                    }, n.toggleHover(a), n.$element.trigger("rating.hover", [e, t, "clear"])
                }
            }), n.$clear.on("mouseleave", function() {
                n.hoverEnabled && !n.inactive && !n.clearClicked && n.hoverOnClear && (a = n.cache, n.toggleHover(a), n.$element.trigger("rating.hoverleave", ["clear"]))
            }), n.listenClick(n.$clear, function() {
                n.inactive || (n.clear(), n.clearClicked = !0)
            }), t(n.$element[0].form).on("reset", function() {
                n.inactive || n.reset()
            })
        },
        destroy: function() {
            var e = this,
                a = e.$element;
            r(e.$container) || e.$container.before(a).remove(), t.removeData(a.get(0)), a.off("rating").removeClass("hide")
        },
        create: function(t) {
            var e = this,
                a = e.$element;
            t = t || e.options || {}, e.destroy(), a.rating(t)
        },
        setTouch: function(t, e) {
            var a = this,
                n = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
            if (n && !a.inactive) {
                var r = t.originalEvent,
                    i = r.touches || r.changedTouches,
                    l = a.getPosition(i[0]);
                if (e) {
                    a.setStars(l), a.$element.trigger("change").trigger("rating.change", [a.$element.val(), a.$caption.html()]), a.starClicked = !0
                } else {
                    var o = a.calculate(l),
                        s = o.val <= a.clearValue ? a.fetchCaption(a.clearValue) : o.caption,
                        c = a.getWidthFromValue(a.clearValue),
                        u = o.val <= a.clearValue ? a.rtl ? 100 - c + "%" : c + "%" : o.width;
                    a.$caption.html(s), a.$stars.css("width", u)
                }
            }
        },
        initTouch: function() {
            var t = this;
            t.$rating.on("touchstart touchmove touchend", function(e) {
                var a = "touchend" === e.type;
                t.setTouch(e, a)
            })
        },
        initSlider: function(t) {
            var i = this;
            r(i.$element.val()) && i.$element.val(0), i.initialValue = i.$element.val(), i.setDefault("min", i._parseAttr("min", t)), i.setDefault("max", i._parseAttr("max", t)), i.setDefault("step", i._parseAttr("step", t)), (isNaN(i.min) || r(i.min)) && (i.min = e), (isNaN(i.max) || r(i.max)) && (i.max = a), (isNaN(i.step) || r(i.step) || 0 === i.step) && (i.step = n), i.diff = i.max - i.min
        },
        init: function(e) {
            var a, n, l, o = this,
                s = o.$element;
            o.options = e, t.each(e, function(t, e) {
                o[t] = e
            }), o.starClicked = !1, o.clearClicked = !1, o.initSlider(e), o.checkDisabled(), o.setDefault("rtl", s.attr("dir")), o.rtl && s.attr("dir", "rtl"), a = o.glyphicon ? "" : "★", o.setDefault("symbol", a), o.setDefault("clearButtonBaseClass", "clear-rating"), o.setDefault("clearButtonActiveClass", "clear-rating-active"), o.setDefault("clearValue", o.min), i(s, "form-control hide"), o.$clearElement = r(e.clearElement) ? null : t(e.clearElement), o.$captionElement = r(e.captionElement) ? null : t(e.captionElement), void 0 === o.$rating && void 0 === o.$container && (o.$rating = t(document.createElement("div")).html('<div class="rating-stars"></div>'), o.$container = t(document.createElement("div")), o.$container.before(o.$rating).append(o.$rating), s.before(o.$container).appendTo(o.$rating)), o.$stars = o.$rating.find(".rating-stars"), o.generateRating(), o.$clear = r(o.$clearElement) ? o.$container.find("." + o.clearButtonBaseClass) : o.$clearElement, o.$caption = r(o.$captionElement) ? o.$container.find(".caption") : o.$captionElement, o.setStars(), o.listen(), o.showClear && o.$clear.attr({
                "class": o.getClearClass()
            }), n = s.val(), l = o.getWidthFromValue(n), o.cache = {
                caption: o.$caption.html(),
                width: (o.rtl ? 100 - l : l) + "%",
                val: n
            }, s.removeClass("rating-loading")
        },
        checkDisabled: function() {
            var t = this;
            t.disabled = l(t.$element, "disabled", t.options), t.readonly = l(t.$element, "readonly", t.options), t.inactive = t.disabled || t.readonly
        },
        getClearClass: function() {
            return this.clearButtonBaseClass + " " + (this.inactive ? "" : this.clearButtonActiveClass)
        },
        generateRating: function() {
            var t = this,
                e = t.renderClear(),
                a = t.renderCaption(),
                n = t.rtl ? "rating-container-rtl" : "rating-container",
                l = t.getStars();
            n += t.glyphicon ? ("" === t.symbol ? " rating-gly-star" : " rating-gly") + t.ratingClass : r(t.ratingClass) ? " rating-uni" : " " + t.ratingClass, t.$rating.attr("class", n), t.$rating.attr("data-content", l), t.$stars.attr("data-content", l), n = t.rtl ? "star-rating-rtl" : "star-rating", t.$container.attr("class", n + " rating-" + t.size), t.$container.removeClass("rating-active rating-disabled"), t.$container.addClass(t.inactive ? "rating-disabled" : "rating-active"), r(t.$caption) && (t.rtl ? t.$container.prepend(a) : t.$container.append(a)), r(t.$clear) && (t.rtl ? t.$container.append(e) : t.$container.prepend(e)), r(t.containerClass) || i(t.$container, t.containerClass)
        },
        getStars: function() {
            var t, e = this,
                a = e.stars,
                n = "";
            for (t = 1; a >= t; t++) {
                n += e.symbol
            }
            return n
        },
        renderClear: function() {
            var t, e = this;
            return e.showClear ? (t = e.getClearClass(), r(e.$clearElement) ? '<div class="' + t + '" title="' + e.clearButtonTitle + '">' + e.clearButton + "</div>" : (i(e.$clearElement, t), e.$clearElement.attr({
                title: e.clearButtonTitle
            }).html(e.clearButton), "")) : ""
        },
        renderCaption: function() {
            var t, e = this,
                a = e.$element.val();
            return e.showCaption ? (t = e.fetchCaption(a), r(e.$captionElement) ? '<div class="caption">' + t + "</div>" : (i(e.$captionElement, "caption"), e.$captionElement.html(t), "")) : ""
        },
        fetchCaption: function(t) {
            var e, a, n, i, l, o = this,
                s = parseFloat(t),
                c = o.starCaptions,
                u = o.starCaptionClasses;
            return i = "function" == typeof u ? u(s) : u[s], n = "function" == typeof c ? c(s) : c[s], a = r(n) ? o.defaultCaption.replaceAll("{rating}", s) : n, e = r(i) ? o.clearCaptionClass : i, l = s === o.clearValue ? o.clearCaption : a, '<span class="' + e + '">' + l + "</span>"
        },
        getWidthFromValue: function(t) {
            var e = this,
                a = e.min,
                n = e.max;
            return a >= t || a === n ? 0 : t >= n ? 100 : 100 * (t - a) / (n - a)
        },
        getValueFromPosition: function(t) {
            var e, a, n = this,
                r = o(n.step),
                i = n.$rating.width();
            return a = n.diff * t / (i * n.step), a = n.rtl ? Math.floor(a) : Math.ceil(a), e = s(parseFloat(n.min + a * n.step), r), e = Math.max(Math.min(e, n.max), n.min), n.rtl ? n.max - e : e
        },
        toggleHover: function(t) {
            var e, a, n, r = this;
            r.hoverChangeCaption && (n = t.val <= r.clearValue ? r.fetchCaption(r.clearValue) : t.caption, r.$caption.html(n)), r.hoverChangeStars && (e = r.getWidthFromValue(r.clearValue), a = t.val <= r.clearValue ? r.rtl ? 100 - e + "%" : e + "%" : t.width, r.$stars.css("width", a))
        },
        calculate: function(t) {
            var e = this,
                a = r(e.$element.val()) ? 0 : e.$element.val(),
                n = arguments.length ? e.getValueFromPosition(t) : a,
                i = e.fetchCaption(n),
                l = e.getWidthFromValue(n);
            return e.rtl && (l = 100 - l), l += "%", {
                caption: i,
                width: l,
                val: n
            }
        },
        setStars: function(t) {
            var e = this,
                a = arguments.length ? e.calculate(t) : e.calculate();
            e.$element.val(a.val), e.$stars.css("width", a.width), e.$caption.html(a.caption), e.cache = a
        },
        clear: function() {
            var t = this,
                e = '<span class="' + t.clearCaptionClass + '">' + t.clearCaption + "</span>";
            t.$stars.removeClass("rated"), t.inactive || t.$caption.html(e), t.$element.val(t.clearValue), t.setStars(), t.$element.trigger("rating.clear")
        },
        reset: function() {
            var t = this;
            t.$element.val(t.initialValue), t.setStars(), t.$element.trigger("rating.reset")
        },
        update: function(t) {
            var e = this;
            arguments.length && (e.$element.val(t), e.setStars())
        },
        refresh: function(e) {
            var a = this;
            arguments.length && (a.$rating.off("rating"), void 0 !== a.$clear && a.$clear.off(), a.init(t.extend(a.options, e)), a.showClear ? a.$clear.show() : a.$clear.hide(), a.showCaption ? a.$caption.show() : a.$caption.hide(), a.$element.trigger("rating.refresh"))
        }
    }, t.fn.rating = function(e) {
        var a = Array.apply(null, arguments);
        return a.shift(), this.each(function() {
            var n = t(this),
                r = n.data("rating"),
                i = "object" == typeof e && e;
            r || n.data("rating", r = new c(this, t.extend({}, t.fn.rating.defaults, i, t(this).data()))), "string" == typeof e && r[e].apply(r, a)
        })
    }, t.fn.rating.defaults = {
        stars: 5,
        glyphicon: !0,
        symbol: null,
        ratingClass: "",
        disabled: !1,
        readonly: !1,
        rtl: !1,
        size: "md",
        showClear: !0,
        showCaption: !0,
        defaultCaption: "{rating} Stars",
        starCaptions: {
            0.5: "0.5",
            1: "1",
            1.5: "1.5",
            2: "2",
            2.5: "2.5",
            3: "3",
            3.5: "3.5",
            4: "5",
            4.5: "4.5",
            5: "5"
        },
        starCaptionClasses: {
            0.5: "label label-danger",
            1: "label label-danger",
            1.5: "label label-warning",
            2: "label label-warning",
            2.5: "label label-info",
            3: "label label-info",
            3.5: "label label-primary",
            4: "label label-primary",
            4.5: "label label-success",
            5: "label label-success"
        },
        clearButton: '<i class="fa fa-minus-sign"></i>',
        clearButtonTitle: "Clear",
        clearButtonBaseClass: "clear-rating",
        clearButtonActiveClass: "clear-rating-active",
        clearCaption: "请打分",
        clearCaptionClass: "label label-default",
        clearValue: null,
        captionElement: null,
        clearElement: null,
        containerClass: null,
        hoverEnabled: !0,
        hoverChangeCaption: !0,
        hoverChangeStars: !0,
        hoverOnClear: !0
    }, t.fn.rating.Constructor = c, t("input.rating").addClass("rating-loading"), t(document).ready(function() {
        var e = t("input.rating"),
            a = Object.keys(e).length;
        a > 0 && e.rating()
    })
}(window.jQuery);

// (jQuery.easing v1.3)
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});

// 三级省市联动插件(jQuery.citySelect)
(function($) {
    $.fn.citySelect = function(settings) {
        if (this.length < 1) {
            return
        }
        settings = $.extend({
            url: '{"citylist":[{"p":"北京","c":[{"n":"东城区"},{"n":"西城区"},{"n":"崇文区"},{"n":"宣武区"},{"n":"朝阳区"},{"n":"丰台区"},{"n":"石景山区"},{"n":"海淀区"},{"n":"门头沟区"},{"n":"房山区"},{"n":"通州区"},{"n":"顺义区"},{"n":"昌平区"},{"n":"大兴区"},{"n":"平谷区"},{"n":"怀柔区"},{"n":"密云县"},{"n":"延庆县"}]},{"p":"天津","c":[{"n":"和平区"},{"n":"河东区"},{"n":"河西区"},{"n":"南开区"},{"n":"河北区"},{"n":"红挢区"},{"n":"滨海新区"},{"n":"东丽区"},{"n":"西青区"},{"n":"津南区"},{"n":"北辰区"},{"n":"宁河区"},{"n":"武清区"},{"n":"静海县"},{"n":"宝坻区"},{"n":"蓟县"}]},{"p":"河北","c":[{"n":"石家庄","a":[{"s":"长安区"},{"s":"桥东区"},{"s":"桥西区"},{"s":"新华区"},{"s":"井陉矿区"},{"s":"裕华区"},{"s":"井陉县"},{"s":"正定县"},{"s":"栾城县"},{"s":"行唐县"},{"s":"灵寿县"},{"s":"高邑县"},{"s":"深泽县"},{"s":"赞皇县"},{"s":"无极县"},{"s":"平山县"},{"s":"元氏县"},{"s":"赵县"},{"s":"辛集市"},{"s":"藁城市"},{"s":"晋州市"},{"s":"新乐市"},{"s":"鹿泉市"}]},{"n":"唐山","a":[{"s":"路南区"},{"s":"路北区"},{"s":"古冶区"},{"s":"开平区"},{"s":"丰南区"},{"s":"丰润区"},{"s":"滦县"},{"s":"滦南县"},{"s":"乐亭县"},{"s":"迁西县"},{"s":"玉田县"},{"s":"唐海县"},{"s":"遵化市"},{"s":"迁安市"}]},{"n":"秦皇岛","a":[{"s":"海港区"},{"s":"山海关区"},{"s":"北戴河区"},{"s":"青龙满族自治县"},{"s":"昌黎县"},{"s":"抚宁县"},{"s":"卢龙县"}]},{"n":"邯郸","a":[{"s":"邯山区"},{"s":"丛台区"},{"s":"复兴区"},{"s":"峰峰矿区"},{"s":"邯郸县"},{"s":"临漳县"},{"s":"成安县"},{"s":"大名县"},{"s":"涉县"},{"s":"磁县"},{"s":"肥乡县"},{"s":"永年县"},{"s":"邱县"},{"s":"鸡泽县"},{"s":"广平县"},{"s":"馆陶县"},{"s":"魏县"},{"s":"曲周县"},{"s":"武安市"}]},{"n":"邢台","a":[{"s":"桥东区"},{"s":"桥西区"},{"s":"邢台县"},{"s":"临城县"},{"s":"内丘县"},{"s":"柏乡县"},{"s":"隆尧县"},{"s":"任县"},{"s":"南和县"},{"s":"宁晋县"},{"s":"巨鹿县"},{"s":"新河县"},{"s":"广宗县"},{"s":"平乡县"},{"s":"威县"},{"s":"清河县"},{"s":"临西县"},{"s":"南宫市"},{"s":"沙河市"}]},{"n":"保定","a":[{"s":"新市区"},{"s":"北市区"},{"s":"南市区"},{"s":"满城县"},{"s":"清苑县"},{"s":"涞水县"},{"s":"阜平县"},{"s":"徐水县"},{"s":"定兴县"},{"s":"唐县"},{"s":"高阳县"},{"s":"容城县"},{"s":"涞源县"},{"s":"望都县"},{"s":"安新县"},{"s":"易县"},{"s":"曲阳县"},{"s":"蠡县"},{"s":"顺平县"},{"s":"博野县"},{"s":"雄县"},{"s":"涿州市"},{"s":"定州市"},{"s":"安国市"},{"s":"高碑店市"}]},{"n":"张家口","a":[{"s":"桥东区"},{"s":"桥西区"},{"s":"宣化区"},{"s":"下花园区"},{"s":"宣化县"},{"s":"张北县"},{"s":"康保县"},{"s":"沽源县"},{"s":"尚义县"},{"s":"蔚县"},{"s":"阳原县"},{"s":"怀安县"},{"s":"万全县"},{"s":"怀来县"},{"s":"涿鹿县"},{"s":"赤城县"},{"s":"崇礼县"}]},{"n":"承德","a":[{"s":"双桥区"},{"s":"双滦区"},{"s":"鹰手营子矿区"},{"s":"承德县"},{"s":"兴隆县"},{"s":"平泉县"},{"s":"滦平县"},{"s":"隆化县"},{"s":"丰宁满族自治县"},{"s":"宽城满族自治县"},{"s":"围场满族蒙古族自治县"}]},{"n":"沧州","a":[{"s":"新华区"},{"s":"运河区"},{"s":"沧县"},{"s":"青县"},{"s":"东光县"},{"s":"海兴县"},{"s":"盐山县"},{"s":"肃宁县"},{"s":"南皮县"},{"s":"吴桥县"},{"s":"献县"},{"s":"孟村回族自治县"},{"s":"泊头市"},{"s":"任丘市"},{"s":"黄骅市"},{"s":"河间市"}]},{"n":"廊坊","a":[{"s":"安次区"},{"s":"广阳区"},{"s":"固安县"},{"s":"永清县"},{"s":"香河县"},{"s":"大城县"},{"s":"文安县"},{"s":"大厂回族自治县"},{"s":"霸州市"},{"s":"三河市"}]},{"n":"衡水","a":[{"s":"桃城区"},{"s":"枣强县"},{"s":"武邑县"},{"s":"武强县"},{"s":"饶阳县"},{"s":"安平县"},{"s":"故城县"},{"s":"景县"},{"s":"阜城县"},{"s":"冀州市"},{"s":"深州市"}]}]},{"p":"山西","c":[{"n":"太原","a":[{"s":"小店区"},{"s":"迎泽区"},{"s":"杏花岭区"},{"s":"尖草坪区"},{"s":"万柏林区"},{"s":"晋源区"},{"s":"清徐县"},{"s":"阳曲县"},{"s":"娄烦县"},{"s":"古交市"}]},{"n":"大同","a":[{"s":"城区"},{"s":"矿区"},{"s":"南郊区"},{"s":"新荣区"},{"s":"阳高县"},{"s":"天镇县"},{"s":"广灵县"},{"s":"灵丘县"},{"s":"浑源县"},{"s":"左云县"},{"s":"大同县"}]},{"n":"阳泉","a":[{"s":"城区"},{"s":"矿区"},{"s":"郊区"},{"s":"平定县"},{"s":"盂县"}]},{"n":"长治","a":[{"s":"城区"},{"s":"郊区"},{"s":"长治县"},{"s":"襄垣县"},{"s":"屯留县"},{"s":"平顺县"},{"s":"黎城县"},{"s":"壶关县"},{"s":"长子县"},{"s":"武乡县"},{"s":"沁县"},{"s":"沁源县"},{"s":"潞城市"}]},{"n":"晋城","a":[{"s":"城区"},{"s":"沁水县"},{"s":"阳城县"},{"s":"陵川县"},{"s":"泽州县"},{"s":"高平市"}]},{"n":"朔州","a":[{"s":"朔城区"},{"s":"平鲁区"},{"s":"山阴县"},{"s":"应县"},{"s":"右玉县"},{"s":"怀仁县"}]},{"n":"晋中","a":[{"s":"榆次区"},{"s":"榆社县"},{"s":"左权县"},{"s":"和顺县"},{"s":"昔阳县"},{"s":"寿阳县"},{"s":"太谷县"},{"s":"祁县"},{"s":"平遥县"},{"s":"灵石县"},{"s":"介休市"}]},{"n":"运城","a":[{"s":"盐湖区"},{"s":"临猗县"},{"s":"万荣县"},{"s":"闻喜县"},{"s":"稷山县"},{"s":"新绛县"},{"s":"绛县"},{"s":"垣曲县"},{"s":"夏县"},{"s":"平陆县"},{"s":"芮城县"},{"s":"永济市"},{"s":"河津市"}]},{"n":"忻州","a":[{"s":"忻府区"},{"s":"定襄县"},{"s":"五台县"},{"s":"代县"},{"s":"繁峙县"},{"s":"宁武县"},{"s":"静乐县"},{"s":"神池县"},{"s":"五寨县"},{"s":"岢岚县"},{"s":"河曲县"},{"s":"保德县"},{"s":"偏关县"},{"s":"原平市"}]},{"n":"临汾","a":[{"s":"尧都区"},{"s":"曲沃县"},{"s":"翼城县"},{"s":"襄汾县"},{"s":"洪洞县"},{"s":"古县"},{"s":"安泽县"},{"s":"浮山县"},{"s":"吉县"},{"s":"乡宁县"},{"s":"大宁县"},{"s":"隰县"},{"s":"永和县"},{"s":"蒲县"},{"s":"汾西县"},{"s":"侯马市"},{"s":"霍州市"}]},{"n":"吕梁","a":[{"s":"离石区"},{"s":"文水县"},{"s":"交城县"},{"s":"兴县"},{"s":"临县"},{"s":"柳林县"},{"s":"石楼县"},{"s":"岚县"},{"s":"方山县"},{"s":"中阳县"},{"s":"交口县"},{"s":"孝义市"},{"s":"汾阳市"}]}]},{"p":"内蒙古","c":[{"n":"呼和浩特","a":[{"s":"新城区"},{"s":"回民区"},{"s":"玉泉区"},{"s":"玉泉区"},{"s":"赛罕区"},{"s":"土默特左旗"},{"s":"托克托县"},{"s":"和林格尔县"},{"s":"清水河县"},{"s":"武川县"}]},{"n":"包头","a":[{"s":"东河区"},{"s":"昆都仑区"},{"s":"青山区"},{"s":"石拐区"},{"s":"白云矿区"},{"s":"九原区"},{"s":"土默特右旗"},{"s":"固阳县"},{"s":"达尔罕茂明安联合旗"}]},{"n":"乌海","a":[{"s":"海勃湾区"},{"s":"海南区"},{"s":"乌达区"}]},{"n":"赤峰","a":[{"s":"红山区"},{"s":"元宝山区"},{"s":"松山区"},{"s":"阿鲁科尔沁旗"},{"s":"巴林左旗"},{"s":"巴林右旗"},{"s":"林西县"},{"s":"克什克腾旗"},{"s":"翁牛特旗"},{"s":"喀喇沁旗"},{"s":"宁城县"},{"s":"敖汉旗"}]},{"n":"通辽","a":[{"s":"科尔沁区"},{"s":"科尔沁左翼中旗"},{"s":"科尔沁左翼后旗"},{"s":"开鲁县"},{"s":"库伦旗"},{"s":"奈曼旗"},{"s":"扎鲁特旗"},{"s":"霍林郭勒市"}]},{"n":"鄂尔多斯","a":[{"s":"东胜区"},{"s":"达拉特旗"},{"s":"准格尔旗"},{"s":"鄂托克前旗"},{"s":"鄂托克旗"},{"s":"杭锦旗"},{"s":"乌审旗"},{"s":"伊金霍洛旗"}]},{"n":"呼伦贝尔","a":[{"s":"海拉尔区"},{"s":"阿荣旗"},{"s":"莫力达瓦达斡尔族自治旗"},{"s":"鄂伦春自治旗"},{"s":"鄂温克族自治旗"},{"s":"陈巴尔虎旗"},{"s":"新巴尔虎左旗"},{"s":"新巴尔虎右旗"},{"s":"满洲里市"},{"s":"牙克石市"},{"s":"扎兰屯市"},{"s":"额尔古纳市"},{"s":"根河市"}]},{"n":"巴彦淖尔","a":[{"s":"临河区"},{"s":"五原县"},{"s":"磴口县"},{"s":"乌拉特前旗"},{"s":"乌拉特中旗"},{"s":"乌拉特后旗"},{"s":"杭锦后旗"}]},{"n":"乌兰察布","a":[{"s":"集宁区"},{"s":"卓资县"},{"s":"化德县"},{"s":"商都县"},{"s":"兴和县"},{"s":"凉城县"},{"s":"察哈尔右翼前旗"},{"s":"察哈尔右翼中旗"},{"s":"察哈尔右翼后旗"},{"s":"四子王旗"},{"s":"丰镇市"}]},{"n":"兴安","a":[{"s":"乌兰浩特市"},{"s":"阿尔山市"},{"s":"科尔沁右翼前旗"},{"s":"科尔沁右翼中旗"},{"s":"扎赉特旗"},{"s":"突泉县"}]},{"n":"锡林郭勒","a":[{"s":"二连浩特市"},{"s":"锡林浩特市"},{"s":"阿巴嘎旗"},{"s":"苏尼特左旗"},{"s":"苏尼特右旗"},{"s":"东乌珠穆沁旗"},{"s":"西乌珠穆沁旗"},{"s":"太仆寺旗"},{"s":"镶黄旗"},{"s":"正镶白旗"},{"s":"正蓝旗"},{"s":"多伦县"}]},{"n":"阿拉善","a":[{"s":"阿拉善左旗"},{"s":"阿拉善右旗"},{"s":"额济纳旗"}]}]},{"p":"辽宁","c":[{"n":"沈阳","a":[{"s":"和平区"},{"s":"沈河区"},{"s":"大东区"},{"s":"皇姑区"},{"s":"铁西区"},{"s":"苏家屯区"},{"s":"东陵区"},{"s":"新城子区"},{"s":"于洪区"},{"s":"辽中县"},{"s":"康平县"},{"s":"法库县"},{"s":"新民市"}]},{"n":"大连","a":[{"s":"中山区"},{"s":"西岗区"},{"s":"沙河口区"},{"s":"甘井子区"},{"s":"旅顺口区"},{"s":"金州区"},{"s":"长海县"},{"s":"瓦房店市"},{"s":"普兰店市"},{"s":"庄河市"}]},{"n":"鞍山","a":[{"s":"铁东区"},{"s":"铁西区"},{"s":"立山区"},{"s":"千山区"},{"s":"台安县"},{"s":"210323"},{"s":"海城市"}]},{"n":"抚顺","a":[{"s":"新抚区"},{"s":"东洲区"},{"s":"望花区"},{"s":"顺城区"},{"s":"抚顺县"},{"s":"新宾满族自治县"},{"s":"清原满族自治县"}]},{"n":"本溪","a":[{"s":"平山区"},{"s":"溪湖区"},{"s":"明山区"},{"s":"南芬区"},{"s":"本溪满族自治县"},{"s":"桓仁满族自治县"}]},{"n":"丹东","a":[{"s":"元宝区"},{"s":"振兴区"},{"s":"振安区"},{"s":"宽甸满族自治县"},{"s":"东港市"},{"s":"凤城市"}]},{"n":"锦州","a":[{"s":"古塔区"},{"s":"凌河区"},{"s":"太和区"},{"s":"黑山县"},{"s":"义县"},{"s":"凌海市"},{"s":"北镇市"}]},{"n":"营口","a":[{"s":"站前区"},{"s":"西市区"},{"s":"鲅鱼圈区"},{"s":"老边区"},{"s":"盖州市"},{"s":"大石桥市"}]},{"n":"阜新","a":[{"s":"海州区"},{"s":"新邱区"},{"s":"太平区"},{"s":"清河门区"},{"s":"细河区"},{"s":"阜新蒙古族自治县"},{"s":"彰武县"}]},{"n":"辽阳","a":[{"s":"白塔区"},{"s":"文圣区"},{"s":"宏伟区"},{"s":"弓长岭区"},{"s":"太子河区"},{"s":"辽阳县"},{"s":"灯塔市"}]},{"n":"盘锦","a":[{"s":"双台子区"},{"s":"兴隆台区"},{"s":"大洼县"},{"s":"盘山县"}]},{"n":"铁岭","a":[{"s":"银州区"},{"s":"清河区"},{"s":"铁岭县"},{"s":"西丰县"},{"s":"昌图县"},{"s":"调兵山市"},{"s":"开原市"}]},{"n":"朝阳","a":[{"s":"双塔区"},{"s":"龙城区"},{"s":"朝阳县"},{"s":"建平县"},{"s":"喀喇沁左翼蒙古族自治县"},{"s":"北票市"},{"s":"凌源市"}]},{"n":"葫芦岛","a":[{"s":"连山区"},{"s":"龙港区"},{"s":"南票区"},{"s":"绥中县"},{"s":"建昌县"},{"s":"兴城市"}]}]},{"p":"吉林","c":[{"n":"长春","a":[{"s":"南关区"},{"s":"宽城区"},{"s":"朝阳区"},{"s":"二道区"},{"s":"绿园区"},{"s":"双阳区"},{"s":"农安县"},{"s":"九台市"},{"s":"榆树市"},{"s":"德惠市"}]},{"n":"吉林","a":[{"s":"昌邑区"},{"s":"龙潭区"},{"s":"船营区"},{"s":"丰满区"},{"s":"永吉县"},{"s":"蛟河市"},{"s":"桦甸市"},{"s":"舒兰市"},{"s":"磐石市"}]},{"n":"四平","a":[{"s":"铁西区"},{"s":"铁东区"},{"s":"梨树县"},{"s":"伊通满族自治县"},{"s":"公主岭市"},{"s":"双辽市"}]},{"n":"辽源","a":[{"s":"龙山区"},{"s":"西安区"},{"s":"东丰县"},{"s":"东辽县"}]},{"n":"通化","a":[{"s":"东昌区"},{"s":"二道江区"},{"s":"通化县"},{"s":"辉南县"},{"s":"柳河县"},{"s":"梅河口市"},{"s":"集安市"}]},{"n":"白山","a":[{"s":"八道江区"},{"s":"江源区"},{"s":"抚松县"},{"s":"靖宇县"},{"s":"长白朝鲜族自治县"},{"s":"临江市"}]},{"n":"松原","a":[{"s":"宁江区"},{"s":"前郭尔罗斯蒙古族自治县"},{"s":"长岭县"},{"s":"乾安县"},{"s":"扶余县"}]},{"n":"白城","a":[{"s":"洮北区"},{"s":"镇赉县"},{"s":"通榆县"},{"s":"洮南市"},{"s":"大安市"}]},{"n":"延边","a":[{"s":"延吉市"},{"s":"图们市"},{"s":"敦化市"},{"s":"珲春市"},{"s":"龙井市"},{"s":"和龙市"},{"s":"汪清县"},{"s":"安图县"}]}]},{"p":"黑龙江","c":[{"n":"哈尔滨","a":[{"s":"道里区"},{"s":"南岗区"},{"s":"道外区"},{"s":"平房区"},{"s":"松北区"},{"s":"香坊区"},{"s":"呼兰区"},{"s":"阿城区"},{"s":"依兰县"},{"s":"方正县"},{"s":"宾县"},{"s":"巴彦县"},{"s":"木兰县"},{"s":"通河县"},{"s":"延寿县"},{"s":"双城市"},{"s":"尚志市"},{"s":"五常市"}]},{"n":"齐齐哈尔","a":[{"s":"龙沙区"},{"s":"建华区"},{"s":"铁锋区"},{"s":"昂昂溪区"},{"s":"富拉尔基区"},{"s":"碾子山区"},{"s":"梅里斯达斡尔族区"},{"s":"龙江县"},{"s":"依安县"},{"s":"泰来县"},{"s":"甘南县"},{"s":"富裕县"},{"s":"克山县"},{"s":"克东县"},{"s":"拜泉县"},{"s":"讷河市"}]},{"n":"鸡西","a":[{"s":"鸡冠区"},{"s":"恒山区"},{"s":"滴道区"},{"s":"梨树区"},{"s":"城子河区"},{"s":"麻山区"},{"s":"鸡东县"},{"s":"虎林市"},{"s":"密山市"}]},{"n":"鹤岗","a":[{"s":"向阳区"},{"s":"工农区"},{"s":"南山区"},{"s":"兴安区"},{"s":"东山区"},{"s":"兴山区"},{"s":"萝北县"},{"s":"绥滨县"}]},{"n":"双鸭山","a":[{"s":"尖山区"},{"s":"岭东区"},{"s":"四方台区"},{"s":"宝山区"},{"s":"集贤县"},{"s":"友谊县"},{"s":"宝清县"},{"s":"饶河县"}]},{"n":"大庆","a":[{"s":"萨尔图区"},{"s":"龙凤区"},{"s":"让胡路区"},{"s":"红岗区"},{"s":"大同区"},{"s":"肇州县"},{"s":"肇源县"},{"s":"林甸县"},{"s":"杜尔伯特蒙古族自治县"}]},{"n":"伊春","a":[{"s":"伊春区"},{"s":"南岔区"},{"s":"友好区"},{"s":"西林区"},{"s":"翠峦区"},{"s":"新青区"},{"s":"美溪区"},{"s":"金山屯区"},{"s":"五营区"},{"s":"乌马河区"},{"s":"汤旺河区"},{"s":"带岭区"},{"s":"乌伊岭区"},{"s":"红星区"},{"s":"上甘岭区"},{"s":"嘉荫县"},{"s":"铁力市"}]},{"n":"佳木斯","a":[{"s":"向阳区"},{"s":"前进区"},{"s":"东风区"},{"s":"郊区"},{"s":"桦南县"},{"s":"桦川县"},{"s":"汤原县"},{"s":"抚远县"},{"s":"同江市"},{"s":"富锦市"}]},{"n":"七台河","a":[{"s":"新兴区"},{"s":"桃山区"},{"s":"茄子河区"},{"s":"勃利县"}]},{"n":"牡丹江","a":[{"s":"东安区"},{"s":"阳明区"},{"s":"爱民区"},{"s":"西安区"},{"s":"东宁县"},{"s":"林口县"},{"s":"绥芬河市"},{"s":"海林市"},{"s":"宁安市"},{"s":"穆棱市"}]},{"n":"黑河","a":[{"s":"爱辉区"},{"s":"嫩江县"},{"s":"逊克县"},{"s":"孙吴县"},{"s":"北安市"},{"s":"五大连池市"}]},{"n":"绥化","a":[{"s":"北林区"},{"s":"望奎县"},{"s":"兰西县"},{"s":"青冈县"},{"s":"庆安县"},{"s":"明水县"},{"s":"绥棱县"},{"s":"安达市"},{"s":"肇东市"},{"s":"海伦市"}]},{"n":"大兴安岭","a":[{"s":"加格达奇区"},{"s":"松岭区"},{"s":"新林区"},{"s":"呼中区"},{"s":"呼玛县"},{"s":"塔河县"},{"s":"漠河县"}]}]},{"p":"上海","c":[{"n":"黄浦区"},{"n":"卢湾区"},{"n":"徐汇区"},{"n":"长宁区"},{"n":"静安区"},{"n":"普陀区"},{"n":"闸北区"},{"n":"虹口区"},{"n":"杨浦区"},{"n":"闵行区"},{"n":"宝山区"},{"n":"嘉定区"},{"n":"浦东新区"},{"n":"金山区"},{"n":"松江区"},{"n":"奉贤区"},{"n":"青浦区"},{"n":"崇明县"}]},{"p":"江苏","c":[{"n":"南京","a":[{"s":"玄武区"},{"s":"白下区"},{"s":"秦淮区"},{"s":"建邺区"},{"s":"鼓楼区"},{"s":"下关区"},{"s":"浦口区"},{"s":"栖霞区"},{"s":"雨花台区"},{"s":"江宁区"},{"s":"六合区"},{"s":"溧水县"},{"s":"高淳县"}]},{"n":"无锡","a":[{"s":"崇安区"},{"s":"南长区"},{"s":"北塘区"},{"s":"锡山区"},{"s":"惠山区"},{"s":"滨湖区"},{"s":"江阴市"},{"s":"宜兴市"}]},{"n":"徐州","a":[{"s":"鼓楼区"},{"s":"云龙区"},{"s":"九里区"},{"s":"贾汪区"},{"s":"泉山区"},{"s":"丰县"},{"s":"沛县"},{"s":"铜山县"},{"s":"睢宁县"},{"s":"新沂市"},{"s":"邳州市"}]},{"n":"常州","a":[{"s":"天宁区"},{"s":"钟楼区"},{"s":"戚墅堰区"},{"s":"新北区"},{"s":"武进区"},{"s":"溧阳市"},{"s":"金坛市"}]},{"n":"苏州","a":[{"s":"沧浪区"},{"s":"平江区"},{"s":"金阊区"},{"s":"虎丘区"},{"s":"吴中区"},{"s":"相城区"},{"s":"常熟市"},{"s":"张家港市"},{"s":"昆山市"},{"s":"吴江市"},{"s":"太仓市"}]},{"n":"南通","a":[{"s":"崇川区"},{"s":"港闸区"},{"s":"海安县"},{"s":"如东县"},{"s":"启东市"},{"s":"如皋市"},{"s":"通州市"},{"s":"海门市"}]},{"n":"连云港","a":[{"s":"连云区"},{"s":"新浦区"},{"s":"海州区"},{"s":"赣榆县"},{"s":"东海县"},{"s":"灌云县"},{"s":"灌南县"}]},{"n":"淮安","a":[{"s":"清河区"},{"s":"楚州区"},{"s":"淮阴区"},{"s":"清浦区"},{"s":"涟水县"},{"s":"洪泽县"},{"s":"盱眙县"},{"s":"金湖县"}]},{"n":"盐城","a":[{"s":"亭湖区"},{"s":"盐都区"},{"s":"响水县"},{"s":"滨海县"},{"s":"阜宁县"},{"s":"射阳县"},{"s":"建湖县"},{"s":"东台市"},{"s":"大丰市"}]},{"n":"扬州","a":[{"s":"广陵区"},{"s":"邗江区"},{"s":"维扬区"},{"s":"宝应县"},{"s":"仪征市"},{"s":"高邮市"},{"s":"江都市"}]},{"n":"镇江","a":[{"s":"京口区"},{"s":"润州区"},{"s":"丹徒区"},{"s":"丹阳市"},{"s":"扬中市"},{"s":"句容市"}]},{"n":"泰州","a":[{"s":"海陵区"},{"s":"高港区"},{"s":"兴化市"},{"s":"靖江市"},{"s":"泰兴市"},{"s":"姜堰市"}]},{"n":"宿迁","a":[{"s":"宿城区"},{"s":"宿豫区"},{"s":"沭阳县"},{"s":"泗阳县"},{"s":"泗洪县"}]}]},{"p":"浙江","c":[{"n":"杭州","a":[{"s":"上城区"},{"s":"下城区"},{"s":"江干区"},{"s":"拱墅区"},{"s":"西湖区"},{"s":"滨江区"},{"s":"萧山区"},{"s":"余杭区"},{"s":"桐庐县"},{"s":"淳安县"},{"s":"建德市"},{"s":"富阳市"},{"s":"临安市"}]},{"n":"宁波","a":[{"s":"海曙区"},{"s":"江东区"},{"s":"江北区"},{"s":"北仑区"},{"s":"镇海区"},{"s":"鄞州区"},{"s":"象山县"},{"s":"宁海县"},{"s":"余姚市"},{"s":"慈溪市"},{"s":"奉化市"}]},{"n":"温州","a":[{"s":"鹿城区"},{"s":"龙湾区"},{"s":"瓯海区"},{"s":"洞头县"},{"s":"永嘉县"},{"s":"平阳县"},{"s":"苍南县"},{"s":"文成县"},{"s":"泰顺县"},{"s":"瑞安市"},{"s":"乐清市"}]},{"n":"嘉兴","a":[{"s":"南湖区"},{"s":"秀洲区"},{"s":"嘉善县"},{"s":"海盐县"},{"s":"海宁市"},{"s":"平湖市"},{"s":"桐乡市"}]},{"n":"湖州","a":[{"s":"吴兴区"},{"s":"南浔区"},{"s":"德清县"},{"s":"长兴县"},{"s":"安吉县"}]},{"n":"绍兴","a":[{"s":"越城区"},{"s":"绍兴县"},{"s":"新昌县"},{"s":"诸暨市"},{"s":"上虞市"},{"s":"嵊州市"}]},{"n":"金华","a":[{"s":"婺城区"},{"s":"金东区"},{"s":"武义县"},{"s":"浦江县"},{"s":"磐安县"},{"s":"兰溪市"},{"s":"义乌市"},{"s":"东阳市"},{"s":"永康市"}]},{"n":"衢州","a":[{"s":"柯城区"},{"s":"衢江区"},{"s":"常山县"},{"s":"开化县"},{"s":"龙游县"},{"s":"江山市"}]},{"n":"舟山","a":[{"s":"定海区"},{"s":"普陀区"},{"s":"岱山县"},{"s":"嵊泗县"}]},{"n":"台州","a":[{"s":"椒江区"},{"s":"黄岩区"},{"s":"路桥区"},{"s":"玉环县"},{"s":"三门县"},{"s":"天台县"},{"s":"仙居县"},{"s":"温岭市"},{"s":"临海市"}]},{"n":"丽水","a":[{"s":"莲都区"},{"s":"青田县"},{"s":"缙云县"},{"s":"遂昌县"},{"s":"松阳县"},{"s":"云和县"},{"s":"庆元县"},{"s":"景宁畲族自治县"},{"s":"龙泉市"}]}]},{"p":"安徽","c":[{"n":"合肥","a":[{"s":"瑶海区"},{"s":"庐阳区"},{"s":"蜀山区"},{"s":"包河区"},{"s":"长丰县"},{"s":"肥东县"},{"s":"肥西县"}]},{"n":"芜湖","a":[{"s":"镜湖区"},{"s":"弋江区"},{"s":"鸠江区"},{"s":"三山区"},{"s":"芜湖县"},{"s":"繁昌县"},{"s":"南陵县"}]},{"n":"蚌埠","a":[{"s":"龙子湖区"},{"s":"蚌山区"},{"s":"禹会区"},{"s":"淮上区"},{"s":"怀远县"},{"s":"五河县"},{"s":"固镇县"}]},{"n":"淮南","a":[{"s":"大通区"},{"s":"田家庵区"},{"s":"谢家集区"},{"s":"八公山区"},{"s":"潘集区"},{"s":"凤台县"}]},{"n":"马鞍山","a":[{"s":"金家庄区"},{"s":"花山区"},{"s":"雨山区"},{"s":"当涂县"}]},{"n":"淮北","a":[{"s":"杜集区"},{"s":"相山区"},{"s":"烈山区"},{"s":"濉溪县"}]},{"n":"铜陵","a":[{"s":"铜官山区"},{"s":"狮子山区"},{"s":"郊区"},{"s":"铜陵县"}]},{"n":"安庆","a":[{"s":"迎江区"},{"s":"大观区"},{"s":"宜秀区"},{"s":"怀宁县"},{"s":"枞阳县"},{"s":"潜山县"},{"s":"太湖县"},{"s":"宿松县"},{"s":"望江县"},{"s":"岳西县"},{"s":"桐城市"}]},{"n":"黄山","a":[{"s":"屯溪区"},{"s":"黄山区"},{"s":"徽州区"},{"s":"歙县"},{"s":"休宁县"},{"s":"黟县"},{"s":"祁门县"}]},{"n":"滁州","a":[{"s":"琅琊区"},{"s":"南谯区"},{"s":"来安县"},{"s":"全椒县"},{"s":"定远县"},{"s":"凤阳县"},{"s":"天长市"},{"s":"明光市"}]},{"n":"阜阳","a":[{"s":"颍州区"},{"s":"颍东区"},{"s":"颍泉区"},{"s":"临泉县"},{"s":"太和县"},{"s":"阜南县"},{"s":"颍上县"},{"s":"界首市"}]},{"n":"宿州","a":[{"s":"埇桥区"},{"s":"砀山县"},{"s":"萧县"},{"s":"灵璧县"},{"s":"泗县"}]},{"n":"巢湖","a":[{"s":"居巢区"},{"s":"庐江县"},{"s":"无为县"},{"s":"含山县"},{"s":"和县"}]},{"n":"六安","a":[{"s":"金安区"},{"s":"裕安区"},{"s":"寿县"},{"s":"霍邱县"},{"s":"舒城县"},{"s":"金寨县"},{"s":"霍山县"}]},{"n":"亳州","a":[{"s":"谯城区"},{"s":"涡阳县"},{"s":"蒙城县"},{"s":"利辛县"}]},{"n":"池州","a":[{"s":"贵池区"},{"s":"东至县"},{"s":"石台县"},{"s":"青阳县"}]},{"n":"宣城","a":[{"s":"宣州区"},{"s":"郎溪县"},{"s":"广德县"},{"s":"泾县"},{"s":"绩溪县"},{"s":"旌德县"},{"s":"宁国市"}]}]},{"p":"福建","c":[{"n":"福州","a":[{"s":"鼓楼区"},{"s":"台江区"},{"s":"仓山区"},{"s":"马尾区"},{"s":"晋安区"},{"s":"闽侯县"},{"s":"连江县"},{"s":"罗源县"},{"s":"闽清县"},{"s":"永泰县"},{"s":"平潭县"},{"s":"福清市"},{"s":"长乐市"}]},{"n":"厦门","a":[{"s":"思明区"},{"s":"海沧区"},{"s":"湖里区"},{"s":"集美区"},{"s":"同安区"},{"s":"翔安区"}]},{"n":"莆田","a":[{"s":"城厢区"},{"s":"涵江区"},{"s":"荔城区"},{"s":"秀屿区"},{"s":"仙游县"}]},{"n":"三明","a":[{"s":"梅列区"},{"s":"三元区"},{"s":"明溪县"},{"s":"清流县"},{"s":"宁化县"},{"s":"大田县"},{"s":"尤溪县"},{"s":"沙县"},{"s":"将乐县"},{"s":"泰宁县"},{"s":"建宁县"},{"s":"永安市"}]},{"n":"泉州","a":[{"s":"鲤城区"},{"s":"丰泽区"},{"s":"洛江区"},{"s":"泉港区"},{"s":"惠安县"},{"s":"安溪县"},{"s":"永春县"},{"s":"德化县"},{"s":"金门县"},{"s":"石狮市"},{"s":"晋江市"},{"s":"南安市"}]},{"n":"漳州","a":[{"s":"芗城区"},{"s":"龙文区"},{"s":"云霄县"},{"s":"漳浦县"},{"s":"诏安县"},{"s":"长泰县"},{"s":"东山县"},{"s":"南靖县"},{"s":"平和县"},{"s":"华安县"},{"s":"龙海市"}]},{"n":"南平","a":[{"s":"延平区"},{"s":"顺昌县"},{"s":"浦城县"},{"s":"光泽县"},{"s":"松溪县"},{"s":"政和县"},{"s":"邵武市"},{"s":"武夷山市"},{"s":"建瓯市"},{"s":"建阳市"}]},{"n":"龙岩","a":[{"s":"新罗区"},{"s":"长汀县"},{"s":"永定县"},{"s":"上杭县"},{"s":"武平县"},{"s":"连城县"},{"s":"漳平市"}]},{"n":"宁德","a":[{"s":"蕉城区"},{"s":"霞浦县"},{"s":"古田县"},{"s":"屏南县"},{"s":"寿宁县"},{"s":"周宁县"},{"s":"柘荣县"},{"s":"福安市"},{"s":"福鼎市"}]}]},{"p":"江西","c":[{"n":"南昌","a":[{"s":"东湖区"},{"s":"西湖区"},{"s":"青云谱区"},{"s":"湾里区"},{"s":"青山湖区"},{"s":"南昌县"},{"s":"新建县"},{"s":"安义县"},{"s":"进贤县"}]},{"n":"景德镇","a":[{"s":"昌江区"},{"s":"珠山区"},{"s":"浮梁县"},{"s":"乐平市"}]},{"n":"萍乡","a":[{"s":"安源区"},{"s":"湘东区"},{"s":"莲花县"},{"s":"上栗县"},{"s":"芦溪县"}]},{"n":"九江","a":[{"s":"庐山区"},{"s":"浔阳区"},{"s":"九江县"},{"s":"武宁县"},{"s":"修水县"},{"s":"永修县"},{"s":"德安县"},{"s":"星子县"},{"s":"都昌县"},{"s":"湖口县"},{"s":"彭泽县"},{"s":"瑞昌市"}]},{"n":"新余","a":[{"s":"渝水区"},{"s":"分宜县"}]},{"n":"鹰潭","a":[{"s":"月湖区"},{"s":"余江县"},{"s":"贵溪市"}]},{"n":"赣州","a":[{"s":"章贡区"},{"s":"赣县"},{"s":"信丰县"},{"s":"大余县"},{"s":"上犹县"},{"s":"崇义县"},{"s":"安远县"},{"s":"龙南县"},{"s":"定南县"},{"s":"全南县"},{"s":"宁都县"},{"s":"于都县"},{"s":"兴国县"},{"s":"会昌县"},{"s":"寻乌县"},{"s":"石城县"},{"s":"瑞金市"},{"s":"南康市"}]},{"n":"吉安","a":[{"s":"吉州区"},{"s":"青原区"},{"s":"吉安县"},{"s":"吉水县"},{"s":"峡江县"},{"s":"新干县"},{"s":"永丰县"},{"s":"泰和县"},{"s":"遂川县"},{"s":"万安县"},{"s":"安福县"},{"s":"永新县"},{"s":"井冈山市"}]},{"n":"宜春","a":[{"s":"袁州区"},{"s":"奉新县"},{"s":"万载县"},{"s":"上高县"},{"s":"宜丰县"},{"s":"靖安县"},{"s":"铜鼓县"},{"s":"丰城市"},{"s":"樟树市"},{"s":"高安市"}]},{"n":"抚州","a":[{"s":"临川区"},{"s":"南城县"},{"s":"黎川县"},{"s":"南丰县"},{"s":"崇仁县"},{"s":"乐安县"},{"s":"宜黄县"},{"s":"金溪县"},{"s":"资溪县"},{"s":"东乡县"},{"s":"广昌县"}]},{"n":"上饶","a":[{"s":"信州区"},{"s":"上饶县"},{"s":"广丰县"},{"s":"玉山县"},{"s":"铅山县"},{"s":"横峰县"},{"s":"弋阳县"},{"s":"余干县"},{"s":"鄱阳县"},{"s":"万年县"},{"s":"婺源县"},{"s":"德兴市"}]}]},{"p":"山东","c":[{"n":"济南","a":[{"s":"历下区"},{"s":"市中区"},{"s":"槐荫区"},{"s":"天桥区"},{"s":"历城区"},{"s":"长清区"},{"s":"平阴县"},{"s":"济阳县"},{"s":"商河县"},{"s":"章丘市"}]},{"n":"青岛","a":[{"s":"市南区"},{"s":"市北区"},{"s":"四方区"},{"s":"黄岛区"},{"s":"崂山区"},{"s":"李沧区"},{"s":"城阳区"},{"s":"胶州市"},{"s":"即墨市"},{"s":"平度市"},{"s":"胶南市"},{"s":"莱西市"}]},{"n":"淄博","a":[{"s":"淄川区"},{"s":"张店区"},{"s":"博山区"},{"s":"临淄区"},{"s":"周村区"},{"s":"桓台县"},{"s":"高青县"},{"s":"沂源县"}]},{"n":"枣庄","a":[{"s":"市中区"},{"s":"薛城区"},{"s":"峄城区"},{"s":"台儿庄区"},{"s":"山亭区"},{"s":"滕州市"}]},{"n":"东营","a":[{"s":"东营区"},{"s":"河口区"},{"s":"垦利县"},{"s":"利津县"},{"s":"广饶县"}]},{"n":"烟台","a":[{"s":"芝罘区"},{"s":"福山区"},{"s":"牟平区"},{"s":"莱山区"},{"s":"长岛县"},{"s":"龙口市"},{"s":"莱阳市"},{"s":"莱州市"},{"s":"蓬莱市"},{"s":"招远市"},{"s":"栖霞市"},{"s":"海阳市"}]},{"n":"潍坊","a":[{"s":"潍城区"},{"s":"寒亭区"},{"s":"坊子区"},{"s":"奎文区"},{"s":"临朐县"},{"s":"昌乐县"},{"s":"青州市"},{"s":"诸城市"},{"s":"寿光市"},{"s":"安丘市"},{"s":"高密市"},{"s":"昌邑市"}]},{"n":"济宁","a":[{"s":"市中区"},{"s":"任城区"},{"s":"微山县"},{"s":"鱼台县"},{"s":"金乡县"},{"s":"嘉祥县"},{"s":"汶上县"},{"s":"泗水县"},{"s":"梁山县"},{"s":"曲阜市"},{"s":"兖州市"},{"s":"邹城市"}]},{"n":"泰安","a":[{"s":"泰山区"},{"s":"岱岳区"},{"s":"宁阳县"},{"s":"东平县"},{"s":"新泰市"},{"s":"肥城市"}]},{"n":"威海","a":[{"s":"环翠区"},{"s":"文登市"},{"s":"荣成市"},{"s":"乳山市"}]},{"n":"日照","a":[{"s":"东港区"},{"s":"岚山区"},{"s":"五莲县"},{"s":"莒县"}]},{"n":"莱芜","a":[{"s":"莱城区"},{"s":"钢城区"}]},{"n":"临沂","a":[{"s":"兰山区"},{"s":"罗庄区"},{"s":"河东区"},{"s":"沂南县"},{"s":"郯城县"},{"s":"沂水县"},{"s":"苍山县"},{"s":"费县"},{"s":"平邑县"},{"s":"莒南县"},{"s":"蒙阴县"},{"s":"临沭县"}]},{"n":"德州","a":[{"s":"德城区"},{"s":"陵县"},{"s":"宁津县"},{"s":"庆云县"},{"s":"临邑县"},{"s":"齐河县"},{"s":"平原县"},{"s":"夏津县"},{"s":"武城县"},{"s":"乐陵市"},{"s":"禹城市"}]},{"n":"聊城","a":[{"s":"东昌府区"},{"s":"阳谷县"},{"s":"莘县"},{"s":"茌平县"},{"s":"东阿县"},{"s":"冠县"},{"s":"高唐县"},{"s":"临清市"}]},{"n":"滨州","a":[{"s":"滨城区"},{"s":"惠民县"},{"s":"阳信县"},{"s":"无棣县"},{"s":"沾化县"},{"s":"博兴县"},{"s":"邹平县"}]},{"n":"菏泽","a":[{"s":"牡丹区"},{"s":"曹县"},{"s":"单县"},{"s":"成武县"},{"s":"巨野县"},{"s":"郓城县"},{"s":"鄄城县"},{"s":"定陶县"},{"s":"东明县"}]}]},{"p":"河南","c":[{"n":"郑州","a":[{"s":"中原区"},{"s":"二七区"},{"s":"管城回族区"},{"s":"金水区"},{"s":"上街区"},{"s":"惠济区"},{"s":"中牟县"},{"s":"巩义市"},{"s":"荥阳市"},{"s":"新密市"},{"s":"新郑市"},{"s":"登封市"}]},{"n":"开封","a":[{"s":"龙亭区"},{"s":"顺河回族区"},{"s":"鼓楼区"},{"s":"禹王台区"},{"s":"金明区"},{"s":"杞县"},{"s":"通许县"},{"s":"尉氏县"},{"s":"开封县"},{"s":"兰考县"}]},{"n":"洛阳","a":[{"s":"老城区"},{"s":"西工区"},{"s":"廛河回族区"},{"s":"涧西区"},{"s":"吉利区"},{"s":"洛龙区"},{"s":"孟津县"},{"s":"新安县"},{"s":"栾川县"},{"s":"嵩县"},{"s":"汝阳县"},{"s":"宜阳县"},{"s":"洛宁县"},{"s":"伊川县"},{"s":"偃师市"}]},{"n":"平顶山","a":[{"s":"新华区"},{"s":"卫东区"},{"s":"石龙区"},{"s":"湛河区"},{"s":"宝丰县"},{"s":"叶县"},{"s":"鲁山县"},{"s":"郏县"},{"s":"舞钢市"},{"s":"汝州市"}]},{"n":"安阳","a":[{"s":"文峰区"},{"s":"北关区"},{"s":"殷都区"},{"s":"龙安区"},{"s":"安阳县"},{"s":"汤阴县"},{"s":"滑县"},{"s":"内黄县"},{"s":"林州市"}]},{"n":"鹤壁","a":[{"s":"鹤山区"},{"s":"山城区"},{"s":"淇滨区"},{"s":"浚县"},{"s":"淇县"}]},{"n":"新乡","a":[{"s":"红旗区"},{"s":"卫滨区"},{"s":"凤泉区"},{"s":"牧野区"},{"s":"新乡县"},{"s":"获嘉县"},{"s":"原阳县"},{"s":"延津县"},{"s":"封丘县"},{"s":"长垣县"},{"s":"卫辉市"},{"s":"辉县市"}]},{"n":"焦作","a":[{"s":"解放区"},{"s":"中站区"},{"s":"马村区"},{"s":"山阳区"},{"s":"修武县"},{"s":"博爱县"},{"s":"武陟县"},{"s":"温县"},{"s":"沁阳市"},{"s":"孟州市"}]},{"n":"濮阳","a":[{"s":"华龙区"},{"s":"清丰县"},{"s":"南乐县"},{"s":"范县"},{"s":"台前县"},{"s":"濮阳县"}]},{"n":"许昌","a":[{"s":"魏都区"},{"s":"许昌县"},{"s":"鄢陵县"},{"s":"襄城县"},{"s":"禹州市"},{"s":"长葛市"}]},{"n":"漯河","a":[{"s":"源汇区"},{"s":"郾城区"},{"s":"召陵区"},{"s":"舞阳县"},{"s":"临颍县"}]},{"n":"三门峡","a":[{"s":"湖滨区"},{"s":"渑池县"},{"s":"陕县"},{"s":"卢氏县"},{"s":"义马市"},{"s":"灵宝市"}]},{"n":"南阳","a":[{"s":"宛城区"},{"s":"卧龙区"},{"s":"南召县"},{"s":"方城县"},{"s":"西峡县"},{"s":"镇平县"},{"s":"内乡县"},{"s":"淅川县"},{"s":"社旗县"},{"s":"唐河县"},{"s":"新野县"},{"s":"桐柏县"},{"s":"邓州市"}]},{"n":"商丘","a":[{"s":"梁园区"},{"s":"睢阳区"},{"s":"民权县"},{"s":"睢县"},{"s":"宁陵县"},{"s":"柘城县"},{"s":"虞城县"},{"s":"夏邑县"},{"s":"永城市"}]},{"n":"信阳","a":[{"s":"浉河区"},{"s":"平桥区"},{"s":"罗山县"},{"s":"光山县"},{"s":"新县"},{"s":"商城县"},{"s":"固始县"},{"s":"潢川县"},{"s":"淮滨县"},{"s":"息县"}]},{"n":"周口","a":[{"s":"川汇区"},{"s":"扶沟县"},{"s":"西华县"},{"s":"商水县"},{"s":"沈丘县"},{"s":"郸城县"},{"s":"淮阳县"},{"s":"太康县"},{"s":"鹿邑县"},{"s":"项城市"}]},{"n":"驻马店","a":[{"s":"驿城区"},{"s":"西平县"},{"s":"上蔡县"},{"s":"平舆县"},{"s":"正阳县"},{"s":"确山县"},{"s":"泌阳县"},{"s":"汝南县"},{"s":"遂平县"},{"s":"新蔡县"}]},{"n":"济源","a":[{"s":"济源"}]}]},{"p":"湖北","c":[{"n":"武汉","a":[{"s":"江岸区"},{"s":"江汉区"},{"s":"硚口区"},{"s":"汉阳区"},{"s":"武昌区"},{"s":"青山区"},{"s":"洪山区"},{"s":"东西湖区"},{"s":"汉南区"},{"s":"蔡甸区"},{"s":"江夏区"},{"s":"黄陂区"},{"s":"新洲区"}]},{"n":"黄石","a":[{"s":"黄石港区"},{"s":"西塞山区"},{"s":"下陆区"},{"s":"铁山区"},{"s":"阳新县"},{"s":"大冶市"}]},{"n":"十堰","a":[{"s":"茅箭区"},{"s":"张湾区"},{"s":"郧县"},{"s":"郧西县"},{"s":"竹山县"},{"s":"竹溪县"},{"s":"房县"},{"s":"丹江口市"}]},{"n":"宜昌","a":[{"s":"西陵区"},{"s":"伍家岗区"},{"s":"点军区"},{"s":"猇亭区"},{"s":"夷陵区"},{"s":"远安县"},{"s":"兴山县"},{"s":"秭归县"},{"s":"长阳土家族自治县"},{"s":"五峰土家族自治县"},{"s":"宜都市"},{"s":"当阳市"},{"s":"枝江市"}]},{"n":"襄樊","a":[{"s":"襄城区"},{"s":"樊城区"},{"s":"襄阳区"},{"s":"南漳县"},{"s":"谷城县"},{"s":"保康县"},{"s":"老河口市"},{"s":"枣阳市"},{"s":"宜城市"}]},{"n":"鄂州","a":[{"s":"梁子湖区"},{"s":"华容区"},{"s":"鄂城区"}]},{"n":"荆门","a":[{"s":"东宝区"},{"s":"掇刀区"},{"s":"京山县"},{"s":"沙洋县"},{"s":"钟祥市"}]},{"n":"孝感","a":[{"s":"孝南区"},{"s":"孝昌县"},{"s":"大悟县"},{"s":"云梦县"},{"s":"应城市"},{"s":"安陆市"},{"s":"汉川市"}]},{"n":"荆州","a":[{"s":"沙市区"},{"s":"荆州区"},{"s":"公安县"},{"s":"监利县"},{"s":"江陵县"},{"s":"石首市"},{"s":"洪湖市"},{"s":"松滋市"}]},{"n":"黄冈","a":[{"s":"黄州区"},{"s":"团风县"},{"s":"红安县"},{"s":"罗田县"},{"s":"英山县"},{"s":"浠水县"},{"s":"蕲春县"},{"s":"黄梅县"},{"s":"麻城市"},{"s":"武穴市"}]},{"n":"咸宁","a":[{"s":"咸安区"},{"s":"嘉鱼县"},{"s":"通城县"},{"s":"崇阳县"},{"s":"通山县"},{"s":"赤壁市"}]},{"n":"随州","a":[{"s":"曾都区"},{"s":"随县"},{"s":"广水市"}]},{"n":"恩施","a":[{"s":"恩施市"},{"s":"利川市"},{"s":"建始县"},{"s":"巴东县"},{"s":"宣恩县"},{"s":"咸丰县"},{"s":"来凤县"},{"s":"鹤峰县"}]},{"n":"仙桃","a":[{"s":"仙桃"}]},{"n":"潜江","a":[{"s":"潜江"}]},{"n":"天门","a":[{"s":"天门"}]},{"n":"神农架","a":[{"s":"神农架"}]}]},{"p":"湖南","c":[{"n":"长沙","a":[{"s":"芙蓉区"},{"s":"天心区"},{"s":"岳麓区"},{"s":"开福区"},{"s":"雨花区"},{"s":"长沙县"},{"s":"望城县"},{"s":"宁乡县"},{"s":"浏阳市"}]},{"n":"株洲","a":[{"s":"荷塘区"},{"s":"芦淞区"},{"s":"石峰区"},{"s":"天元区"},{"s":"株洲县"},{"s":"攸县"},{"s":"茶陵县"},{"s":"炎陵县"},{"s":"醴陵市"}]},{"n":"湘潭","a":[{"s":"雨湖区"},{"s":"岳塘区"},{"s":"湘潭县"},{"s":"湘乡市"},{"s":"韶山市"}]},{"n":"衡阳","a":[{"s":"珠晖区"},{"s":"雁峰区"},{"s":"石鼓区"},{"s":"蒸湘区"},{"s":"南岳区"},{"s":"衡阳县"},{"s":"衡南县"},{"s":"衡山县"},{"s":"衡东县"},{"s":"祁东县"},{"s":"耒阳市"},{"s":"常宁市"}]},{"n":"邵阳","a":[{"s":"双清区"},{"s":"大祥区"},{"s":"北塔区"},{"s":"邵东县"},{"s":"新邵县"},{"s":"邵阳县"},{"s":"隆回县"},{"s":"洞口县"},{"s":"绥宁县"},{"s":"新宁县"},{"s":"城步苗族自治县"},{"s":"武冈市"}]},{"n":"岳阳","a":[{"s":"岳阳楼区"},{"s":"云溪区"},{"s":"君山区"},{"s":"岳阳县"},{"s":"华容县"},{"s":"湘阴县"},{"s":"平江县"},{"s":"汨罗市"},{"s":"临湘市"}]},{"n":"常德","a":[{"s":"武陵区"},{"s":"鼎城区"},{"s":"安乡县"},{"s":"汉寿县"},{"s":"澧县"},{"s":"临澧县"},{"s":"桃源县"},{"s":"石门县"},{"s":"津市市"}]},{"n":"张家界","a":[{"s":"永定区"},{"s":"武陵源区"},{"s":"慈利县"},{"s":"桑植县"}]},{"n":"益阳","a":[{"s":"资阳区"},{"s":"赫山区"},{"s":"南县"},{"s":"桃江县"},{"s":"安化县"},{"s":"沅江市"}]},{"n":"郴州","a":[{"s":"北湖区"},{"s":"苏仙区"},{"s":"桂阳县"},{"s":"宜章县"},{"s":"永兴县"},{"s":"嘉禾县"},{"s":"临武县"},{"s":"汝城县"},{"s":"桂东县"},{"s":"安仁县"},{"s":"资兴市"}]},{"n":"永州","a":[{"s":"零陵区"},{"s":"冷水滩区"},{"s":"祁阳县"},{"s":"东安县"},{"s":"双牌县"},{"s":"道县"},{"s":"江永县"},{"s":"宁远县"},{"s":"蓝山县"},{"s":"新田县"},{"s":"江华瑶族自治县"}]},{"n":"怀化","a":[{"s":"鹤城区"},{"s":"中方县"},{"s":"沅陵县"},{"s":"辰溪县"},{"s":"溆浦县"},{"s":"会同县"},{"s":"麻阳苗族自治县"},{"s":"新晃侗族自治县"},{"s":"芷江侗族自治县"},{"s":"靖州苗族侗族自治县"},{"s":"通道侗族自治县"},{"s":"洪江市"}]},{"n":"娄底","a":[{"s":"娄星区"},{"s":"双峰县"},{"s":"新化县"},{"s":"冷水江市"},{"s":"涟源市"}]},{"n":"湘西","a":[{"s":"吉首市"},{"s":"泸溪县"},{"s":"凤凰县"},{"s":"花垣县"},{"s":"保靖县"},{"s":"古丈县"},{"s":"永顺县"},{"s":"龙山县"}]}]},{"p":"广东","c":[{"n":"广州","a":[{"s":"荔湾区"},{"s":"越秀区"},{"s":"海珠区"},{"s":"天河区"},{"s":"白云区"},{"s":"黄埔区"},{"s":"番禺区"},{"s":"花都区"},{"s":"南沙区"},{"s":"萝岗区"},{"s":"增城市"},{"s":"从化市"}]},{"n":"韶关","a":[{"s":"武江区"},{"s":"浈江区"},{"s":"曲江区"},{"s":"始兴县"},{"s":"仁化县"},{"s":"翁源县"},{"s":"乳源瑶族自治县"},{"s":"新丰县"},{"s":"乐昌市"},{"s":"南雄市"}]},{"n":"深圳","a":[{"s":"罗湖区"},{"s":"福田区"},{"s":"南山区"},{"s":"宝安区"},{"s":"龙岗区"},{"s":"盐田区"}]},{"n":"珠海","a":[{"s":"香洲区"},{"s":"斗门区"},{"s":"金湾区"}]},{"n":"汕头","a":[{"s":"龙湖区"},{"s":"金平区"},{"s":"濠江区"},{"s":"潮阳区"},{"s":"潮南区"},{"s":"澄海区"},{"s":"南澳县"}]},{"n":"佛山","a":[{"s":"禅城区"},{"s":"南海区"},{"s":"顺德区"},{"s":"三水区"},{"s":"高明区"}]},{"n":"江门","a":[{"s":"蓬江区"},{"s":"江海区"},{"s":"新会区"},{"s":"台山市"},{"s":"开平市"},{"s":"鹤山市"},{"s":"恩平市"}]},{"n":"湛江","a":[{"s":"赤坎区"},{"s":"霞山区"},{"s":"坡头区"},{"s":"麻章区"},{"s":"遂溪县"},{"s":"徐闻县"},{"s":"廉江市"},{"s":"雷州市"},{"s":"吴川市"}]},{"n":"茂名","a":[{"s":"茂南区"},{"s":"茂港区"},{"s":"电白县"},{"s":"高州市"},{"s":"化州市"},{"s":"信宜市"}]},{"n":"肇庆","a":[{"s":"端州区"},{"s":"鼎湖区"},{"s":"广宁县"},{"s":"怀集县"},{"s":"封开县"},{"s":"德庆县"},{"s":"高要市"},{"s":"四会市"}]},{"n":"惠州","a":[{"s":"惠城区"},{"s":"惠阳区"},{"s":"博罗县"},{"s":"惠东县"},{"s":"龙门县"}]},{"n":"梅州","a":[{"s":"梅江区"},{"s":"梅县"},{"s":"大埔县"},{"s":"丰顺县"},{"s":"五华县"},{"s":"平远县"},{"s":"蕉岭县"},{"s":"兴宁市"}]},{"n":"汕尾","a":[{"s":"城区"},{"s":"海丰县"},{"s":"陆河县"},{"s":"陆丰市"}]},{"n":"河源","a":[{"s":"源城区"},{"s":"紫金县"},{"s":"龙川县"},{"s":"连平县"},{"s":"和平县"},{"s":"东源县"}]},{"n":"阳江","a":[{"s":"江城区"},{"s":"阳西县"},{"s":"阳东县"},{"s":"阳春市"}]},{"n":"清远","a":[{"s":"清城区"},{"s":"佛冈县"},{"s":"阳山县"},{"s":"连山壮族瑶族自治县"},{"s":"连南瑶族自治县"},{"s":"清新县"},{"s":"英德市"},{"s":"连州市"}]},{"n":"东莞","a":[{"s":"东莞市"}]},{"n":"中山","a":[{"s":"中山市"}]},{"n":"潮州","a":[{"s":"湘桥区"},{"s":"潮安县"},{"s":"饶平县"}]},{"n":"揭阳","a":[{"s":"榕城区"},{"s":"揭东县"},{"s":"揭西县"},{"s":"惠来县"},{"s":"普宁市"}]},{"n":"云浮","a":[{"s":"云城区"},{"s":"新兴县"},{"s":"郁南县"},{"s":"云安县"},{"s":"罗定市"}]}]},{"p":"广西","c":[{"n":"南宁","a":[{"s":"兴宁区"},{"s":"青秀区"},{"s":"江南区"},{"s":"西乡塘区"},{"s":"良庆区"},{"s":"邕宁区"},{"s":"武鸣县"},{"s":"隆安县"},{"s":"马山县"},{"s":"上林县"},{"s":"宾阳县"},{"s":"横县"}]},{"n":"柳州","a":[{"s":"城中区"},{"s":"鱼峰区"},{"s":"柳南区"},{"s":"柳北区"},{"s":"柳江县"},{"s":"柳城县"},{"s":"鹿寨县"},{"s":"融安县"},{"s":"融水苗族自治县"},{"s":"三江侗族自治县"}]},{"n":"桂林","a":[{"s":"秀峰区"},{"s":"叠彩区"},{"s":"象山区"},{"s":"七星区"},{"s":"雁山区"},{"s":"阳朔县"},{"s":"临桂县"},{"s":"灵川县"},{"s":"全州县"},{"s":"兴安县"},{"s":"永福县"},{"s":"灌阳县"},{"s":"龙胜各族自治县"},{"s":"资源县"},{"s":"平乐县"},{"s":"荔蒲县"},{"s":"恭城瑶族自治县"}]},{"n":"梧州","a":[{"s":"万秀区"},{"s":"蝶山区"},{"s":"长洲区"},{"s":"苍梧县"},{"s":"藤县"},{"s":"蒙山县"},{"s":"岑溪市"}]},{"n":"北海","a":[{"s":"海城区"},{"s":"银海区"},{"s":"铁山港区"},{"s":"合浦县"}]},{"n":"防城港","a":[{"s":"港口区"},{"s":"防城区"},{"s":"上思县"},{"s":"东兴市"}]},{"n":"钦州","a":[{"s":"钦南区"},{"s":"钦北区"},{"s":"灵山县"},{"s":"浦北县"}]},{"n":"贵港","a":[{"s":"港北区"},{"s":"港南区"},{"s":"覃塘区"},{"s":"平南县"},{"s":"桂平市"}]},{"n":"玉林","a":[{"s":"玉州区"},{"s":"容县"},{"s":"陆川县"},{"s":"博白县"},{"s":"兴业县"},{"s":"北流市"}]},{"n":"百色","a":[{"s":"右江区"},{"s":"田阳县"},{"s":"田东县"},{"s":"平果县"},{"s":"德保县"},{"s":"靖西县"},{"s":"那坡县"},{"s":"凌云县"},{"s":"乐业县"},{"s":"田林县"},{"s":"西林县"},{"s":"隆林各族自治县"}]},{"n":"贺州","a":[{"s":"八步区"},{"s":"昭平县"},{"s":"钟山县"},{"s":"富川瑶族自治县"}]},{"n":"河池","a":[{"s":"金城江区"},{"s":"南丹县"},{"s":"天峨县"},{"s":"凤山县"},{"s":"东兰县"},{"s":"罗城仫佬族自治县"},{"s":"环江毛南族自治县"},{"s":"巴马瑶族自治县"},{"s":"都安瑶族自治县"},{"s":"大化瑶族自治县"},{"s":"宜州市"}]},{"n":"来宾","a":[{"s":"兴宾区"},{"s":"忻城县"},{"s":"象州县"},{"s":"武宣县"},{"s":"金秀瑶族自治县"},{"s":"合山市"}]},{"n":"崇左","a":[{"s":"江洲区"},{"s":"扶绥县"},{"s":"宁明县"},{"s":"龙州县"},{"s":"大新县"},{"s":"天等县"},{"s":"凭祥市"}]}]},{"p":"海南","c":[{"n":"海口","a":[{"s":"秀英区"},{"s":"龙华区"},{"s":"琼山区"},{"s":"美兰区"}]},{"n":"三亚","a":[{"s":"三亚市"}]},{"n":"五指山","a":[{"s":"五指山"}]},{"n":"琼海","a":[{"s":"琼海"}]},{"n":"儋州","a":[{"s":"儋州"}]},{"n":"文昌","a":[{"s":"文昌"}]},{"n":"万宁","a":[{"s":"万宁"}]},{"n":"东方","a":[{"s":"东方"}]}]},{"p":"重庆","c":[{"n":"万州区"},{"n":"涪陵区"},{"n":"渝中区"},{"n":"大渡口区"},{"n":"江北区"},{"n":"沙坪坝区"},{"n":"九龙坡区"},{"n":"南岸区"},{"n":"北碚区"},{"n":"万盛区"},{"n":"双挢区"},{"n":"渝北区"},{"n":"巴南区"},{"n":"长寿区"},{"n":"綦江县"},{"n":"潼南县"},{"n":"铜梁县"},{"n":"大足县"},{"n":"荣昌县"},{"n":"壁山县"},{"n":"梁平县"},{"n":"城口县"},{"n":"丰都县"},{"n":"垫江县"},{"n":"武隆县"},{"n":"忠县"},{"n":"开县"},{"n":"云阳县"},{"n":"奉节县"},{"n":"巫山县"},{"n":"巫溪县"},{"n":"黔江区"},{"n":"石柱土家族自治县"},{"n":"秀山土家族苗族自治县"},{"n":"酉阳土家族苗族自治县"},{"n":"彭水苗族土家族自治县"},{"n":"江津区"},{"n":"合川区"},{"n":"永川区"},{"n":"南川区"}]},{"p":"四川","c":[{"n":"成都","a":[{"s":"锦江区"},{"s":"青羊区"},{"s":"金牛区"},{"s":"武侯区"},{"s":"成华区"},{"s":"龙泉驿区"},{"s":"青白江区"},{"s":"新都区"},{"s":"温江区"},{"s":"金堂县"},{"s":"双流县"},{"s":"郫县"},{"s":"大邑县"},{"s":"蒲江县"},{"s":"新津县"},{"s":"都江堰市"},{"s":"彭州市"},{"s":"邛崃市"},{"s":"崇州市"}]},{"n":"自贡","a":[{"s":"自流井区"},{"s":"贡井区"},{"s":"大安区"},{"s":"沿滩区"},{"s":"荣县"},{"s":"富顺县"}]},{"n":"攀枝花","a":[{"s":"东区"},{"s":"西区"},{"s":"仁和区"},{"s":"米易县"},{"s":"盐边县"}]},{"n":"泸州","a":[{"s":"江阳区"},{"s":"纳溪区"},{"s":"龙马潭区"},{"s":"泸县"},{"s":"合江县"},{"s":"叙永县"},{"s":"古蔺县"}]},{"n":"德阳","a":[{"s":"旌阳区"},{"s":"中江县"},{"s":"罗江县"},{"s":"广汉市"},{"s":"什邡市"},{"s":"绵竹市"}]},{"n":"绵阳","a":[{"s":"涪城区"},{"s":"游仙区"},{"s":"三台县"},{"s":"盐亭县"},{"s":"安县"},{"s":"梓潼县"},{"s":"北川羌族自治县"},{"s":"平武县"},{"s":"江油市"}]},{"n":"广元","a":[{"s":"利州区"},{"s":"元坝区"},{"s":"朝天区"},{"s":"旺苍县"},{"s":"青川县"},{"s":"剑阁县"},{"s":"苍溪县"}]},{"n":"遂宁","a":[{"s":"船山区"},{"s":">安居区"},{"s":">蓬溪县"},{"s":">射洪县"},{"s":">大英县"}]},{"n":"内江","a":[{"s":"市中区"},{"s":"东兴区"},{"s":"威远县"},{"s":"资中县"},{"s":"隆昌县"}]},{"n":"乐山","a":[{"s":"市中区"},{"s":"沙湾区"},{"s":"五通桥区"},{"s":"金口河区"},{"s":"犍为县"},{"s":"井研县"},{"s":"夹江县"},{"s":"沐川县"},{"s":"峨边彝族自治县"},{"s":"马边彝族自治县"},{"s":"峨眉山市"}]},{"n":"南充","a":[{"s":"顺庆区"},{"s":"高坪区"},{"s":"嘉陵区"},{"s":"南部县"},{"s":"营山县"},{"s":"蓬安县"},{"s":"仪陇县"},{"s":"西充县"},{"s":"阆中市"}]},{"n":"眉山","a":[{"s":"东坡区"},{"s":"仁寿县"},{"s":"彭山县"},{"s":"洪雅县"},{"s":"丹棱县"},{"s":"青神县"}]},{"n":"宜宾","a":[{"s":"翠屏区"},{"s":"宜宾县"},{"s":"南溪县"},{"s":"江安县"},{"s":"长宁县"},{"s":"高县"},{"s":"珙县"},{"s":"筠连县"},{"s":"兴文县"},{"s":"屏山县"}]},{"n":"广安","a":[{"s":"广安区"},{"s":"岳池县"},{"s":"武胜县"},{"s":"邻水县"},{"s":"华蓥市"}]},{"n":"达川","a":[{"s":"通川区"},{"s":"达县"},{"s":"宣汉县"},{"s":"开江县"},{"s":"大竹县"},{"s":"渠县"},{"s":"万源市"}]},{"n":"雅安","a":[{"s":"雨城区"},{"s":"名山县"},{"s":"荥经县"},{"s":"汉源县"},{"s":"石棉县"},{"s":"天全县"},{"s":"芦山县"},{"s":"宝兴县"}]},{"n":"巴中","a":[{"s":"巴州区"},{"s":"通江县"},{"s":"南江县"},{"s":"平昌县"}]},{"n":"资阳","a":[{"s":"雁江区"},{"s":"安岳县"},{"s":"乐至县"},{"s":"简阳市"}]},{"n":"阿坝","a":[{"s":"汶川县"},{"s":"理县"},{"s":"茂县"},{"s":"松潘县"},{"s":"九寨沟县"},{"s":"金川县"},{"s":"小金县"},{"s":"黑水县"},{"s":"马尔康县"},{"s":"壤塘县"},{"s":"阿坝县"},{"s":"若尔盖县"},{"s":"红原县"}]},{"n":"甘孜","a":[{"s":"康定县"},{"s":"泸定县"},{"s":"丹巴县"},{"s":"九龙县"},{"s":"雅江县"},{"s":"道孚县"},{"s":"炉霍县"},{"s":"甘孜县"},{"s":"新龙县"},{"s":"德格县"},{"s":"白玉县"},{"s":"石渠县"},{"s":"色达县"},{"s":"理塘县"},{"s":"巴塘县"},{"s":"乡城县"},{"s":"稻城县"},{"s":"得荣县"}]},{"n":"凉山","a":[{"s":"西昌市"},{"s":"木里藏族自治县"},{"s":"盐源县"},{"s":"德昌县"},{"s":"会理县"},{"s":"会东县"},{"s":"宁南县"},{"s":"普格县"},{"s":"布拖县"},{"s":"金阳县"},{"s":"昭觉县"},{"s":"喜德县"},{"s":"冕宁县"},{"s":"越西县"},{"s":"甘洛县"},{"s":"美姑县"},{"s":"雷波县"}]}]},{"p":"贵州","c":[{"n":"贵阳","a":[{"s":"南明区"},{"s":"云岩区"},{"s":"花溪区"},{"s":"乌当区"},{"s":"白云区"},{"s":"小河区"},{"s":"开阳县"},{"s":"息烽县"},{"s":"修文县"},{"s":"清镇市"}]},{"n":"六盘水","a":[{"s":"钟山区"},{"s":"六枝特区"},{"s":"水城县"},{"s":"盘县"}]},{"n":"遵义","a":[{"s":"红花岗区"},{"s":"汇川区"},{"s":"遵义县"},{"s":"桐梓县"},{"s":"绥阳县"},{"s":"正安县"},{"s":"道真仡佬族苗族自治县"},{"s":"务川仡佬族苗族自治县"},{"s":"凤冈县"},{"s":"湄潭县"},{"s":"余庆县"},{"s":"习水县"},{"s":"赤水市"},{"s":"仁怀市"}]},{"n":"安顺","a":[{"s":"西秀区"},{"s":"平坝县"},{"s":"普定县"},{"s":"镇宁布依族苗族自治县"},{"s":"关岭布依族苗族自治县"},{"s":"紫云苗族布依族自治县"}]},{"n":"铜仁","a":[{"s":"铜仁市"},{"s":"江口县"},{"s":"玉屏侗族自治县"},{"s":"石阡县"},{"s":"思南县"},{"s":"印江土家族苗族自治县"},{"s":"德江县"},{"s":"沿河土家族自治县"},{"s":"松桃苗族自治县"},{"s":"万山特区"}]},{"n":"黔西南","a":[{"s":"兴义市"},{"s":"兴仁县"},{"s":"普安县"},{"s":"晴隆县"},{"s":"贞丰县"},{"s":"望谟县"},{"s":"册亨县"},{"s":"安龙县"}]},{"n":"毕节","a":[{"s":"毕节市"},{"s":"大方县"},{"s":"黔西县"},{"s":"金沙县"},{"s":"织金县"},{"s":"纳雍县"},{"s":"威宁彝族回族苗族自治县"},{"s":"赫章县"}]},{"n":"黔东南","a":[{"s":"凯里市"},{"s":"黄平县"},{"s":"施秉县"},{"s":"三穗县"},{"s":"镇远县"},{"s":"岑巩县"},{"s":"天柱县"},{"s":"锦屏县"},{"s":"剑河县"},{"s":"台江县"},{"s":"黎平县"},{"s":"榕江县"},{"s":"从江县"},{"s":"雷山县"},{"s":"麻江县"},{"s":"丹寨县"}]},{"n":"黔南","a":[{"s":"都匀市"},{"s":"福泉市"},{"s":"荔波县"},{"s":"贵定县"},{"s":"瓮安县"},{"s":"独山县"},{"s":"平塘县"},{"s":"罗甸县"},{"s":"长顺县"},{"s":"龙里县"},{"s":"惠水县"},{"s":"三都水族自治县"}]}]},{"p":"云南","c":[{"n":"昆明","a":[{"s":"五华区"},{"s":"盘龙区"},{"s":"官渡区"},{"s":"西山区"},{"s":"东川区"},{"s":"呈贡县"},{"s":"晋宁县"},{"s":"富民县"},{"s":"宜良县"},{"s":"石林彝族自治县"},{"s":"嵩明县"},{"s":"禄劝彝族苗族自治县"},{"s":"寻甸回族彝族自治县"},{"s":"安宁市"}]},{"n":"曲靖","a":[{"s":"麒麟区"},{"s":"马龙县"},{"s":"陆良县"},{"s":"师宗县"},{"s":"罗平县"},{"s":"富源县"},{"s":"会泽县"},{"s":"沾益县"},{"s":"宣威市"}]},{"n":"玉溪","a":[{"s":"红塔区"},{"s":"江川县"},{"s":"澄江县"},{"s":"通海县"},{"s":"华宁县"},{"s":"易门县"},{"s":"峨山彝族自治县"},{"s":"新平彝族傣族自治县"},{"s":"元江哈尼族彝族傣族自治县"}]},{"n":"保山","a":[{"s":"隆阳区"},{"s":"施甸县"},{"s":"腾冲县"},{"s":"龙陵县"},{"s":"昌宁县"}]},{"n":"昭通","a":[{"s":"昭阳区"},{"s":"鲁甸县"},{"s":"巧家县"},{"s":"盐津县"},{"s":"大关县"},{"s":"永善县"},{"s":"绥江县"},{"s":"镇雄县"},{"s":"彝良县"},{"s":"威信县"},{"s":"水富县"}]},{"n":"丽江","a":[{"s":"古城区"},{"s":"玉龙纳西族自治县"},{"s":"永胜县"},{"s":"华坪县"},{"s":"宁蒗彝族自治县"}]},{"n":"普洱","a":[{"s":"思茅区"},{"s":"宁洱镇"},{"s":"墨江哈尼族自治县"},{"s":"景东彝族自治县"},{"s":"景谷傣族彝族自治县"},{"s":"镇沅彝族哈尼族拉祜族自治县"},{"s":"江城哈尼族彝族自治县"},{"s":"孟连傣族拉祜族佤族自治县"},{"s":"澜沧拉祜族自治县"},{"s":"西盟佤族自治县"}]},{"n":"临沧","a":[{"s":"临翔区"},{"s":"凤庆县"},{"s":"云县"},{"s":"永德县"},{"s":"镇康县"},{"s":"双江拉祜族佤族布朗族傣族自治县"},{"s":"耿马傣族佤族自治县"},{"s":"沧源佤族自治县"}]},{"n":"楚雄","a":[{"s":"楚雄市"},{"s":"双柏县"},{"s":"牟定县"},{"s":"南华县"},{"s":"姚安县"},{"s":"大姚县"},{"s":"永仁县"},{"s":"元谋县"},{"s":"武定县"},{"s":"禄丰县"}]},{"n":"红河","a":[{"s":"个旧市"},{"s":"开远市"},{"s":"蒙自县"},{"s":"屏边苗族自治县"},{"s":"建水县"},{"s":"石屏县"},{"s":"弥勒县"},{"s":"泸西县"},{"s":"元阳县"},{"s":"红河县"},{"s":"金平苗族瑶族傣族自治县"},{"s":"绿春县"},{"s":"河口瑶族自治县"}]},{"n":"文山","a":[{"s":"文山县"},{"s":"砚山县"},{"s":"西畴县"},{"s":"麻栗坡县"},{"s":"马关县"},{"s":"丘北县"},{"s":"广南县"},{"s":"富宁县"}]},{"n":"西双版纳","a":[{"s":"景洪市"},{"s":"勐海县"},{"s":"勐腊县"}]},{"n":"大理","a":[{"s":"大理市"},{"s":"漾濞彝族自治县"},{"s":"祥云县"},{"s":"宾川县"},{"s":"弥渡县"},{"s":"南涧彝族自治县"},{"s":"巍山彝族回族自治县"},{"s":"永平县"},{"s":"云龙县"},{"s":"洱源县"},{"s":"剑川县"},{"s":"鹤庆县"}]},{"n":"德宏","a":[{"s":"瑞丽市"},{"s":"潞西市"},{"s":"梁河县"},{"s":"盈江县"},{"s":"陇川县"}]},{"n":"怒江傈","a":[{"s":"泸水县"},{"s":"福贡县"},{"s":"贡山独龙族怒族自治县"},{"s":"兰坪白族普米族自治县"}]},{"n":"迪庆","a":[{"s":"香格里拉县"},{"s":"德钦县"},{"s":"维西傈僳族自治县"}]}]},{"p":"西藏","c":[{"n":"拉萨","a":[{"s":"城关区"},{"s":"林周县"},{"s":"当雄县"},{"s":"尼木县"},{"s":"曲水县"},{"s":"堆龙德庆县"},{"s":"达孜县"},{"s":"墨竹工卡县"}]},{"n":"昌都","a":[{"s":"昌都县"},{"s":"江达县"},{"s":"贡觉县"},{"s":"类乌齐县"},{"s":"丁青县"},{"s":"察雅县"},{"s":"八宿县"},{"s":"左贡县"},{"s":"芒康县"},{"s":"洛隆县"},{"s":"边坝县"}]},{"n":"山南","a":[{"s":"乃东县"},{"s":"扎囊县"},{"s":"贡嘎县"},{"s":"桑日县"},{"s":"琼结县"},{"s":"曲松县"},{"s":"措美县"},{"s":"洛扎县"},{"s":"加查县"},{"s":"隆子县"},{"s":"错那县"},{"s":"浪卡子县"}]},{"n":"日喀则","a":[{"s":"日喀则市"},{"s":"南木林县"},{"s":"江孜县"},{"s":"定日县"},{"s":"萨迦县"},{"s":"拉孜县"},{"s":"昂仁县"},{"s":"谢通门县"},{"s":"白朗县"},{"s":"仁布县"},{"s":"康马县"},{"s":"定结县"},{"s":"仲巴县"},{"s":"亚东县"},{"s":"吉隆县"},{"s":"聂拉木县"},{"s":"萨嘎县"},{"s":"岗巴县"}]},{"n":"那曲","a":[{"s":"那曲县"},{"s":"嘉黎县"},{"s":"比如县"},{"s":"聂荣县"},{"s":"安多县"},{"s":"申扎县"},{"s":"索县"},{"s":"班戈县"},{"s":"巴青县"},{"s":"尼玛县"}]},{"n":"阿里","a":[{"s":"普兰县"},{"s":"札达县"},{"s":"噶尔县"},{"s":"日土县"},{"s":"革吉县"},{"s":"改则县"},{"s":"措勤县"}]},{"n":"林芝","a":[{"s":"林芝县"},{"s":"工布江达县"},{"s":"米林县"},{"s":"墨脱县"},{"s":"波密县"},{"s":"察隅县"},{"s":"朗县"}]}]},{"p":"陕西","c":[{"n":"西安","a":[{"s":"新城区"},{"s":"碑林区"},{"s":"莲湖区"},{"s":"灞桥区"},{"s":"未央区"},{"s":"雁塔区"},{"s":"阎良区"},{"s":"临潼区"},{"s":"长安区"},{"s":"蓝田县"},{"s":"周至县"},{"s":"户县"},{"s":"高陵县"}]},{"n":"铜川","a":[{"s":"王益区"},{"s":"印台区"},{"s":"耀州区"},{"s":"宜君县"}]},{"n":"宝鸡","a":[{"s":"渭滨区"},{"s":"金台区"},{"s":"陈仓区"},{"s":"凤翔县"},{"s":"岐山县"},{"s":"扶风县"},{"s":"眉县"},{"s":"陇县"},{"s":"千阳县"},{"s":"麟游县"},{"s":"凤县"},{"s":"太白县"}]},{"n":"咸阳","a":[{"s":"秦都区"},{"s":"杨凌区"},{"s":"渭城区"},{"s":"三原县"},{"s":"泾阳县"},{"s":"乾县"},{"s":"礼泉县"},{"s":"永寿县"},{"s":"彬县"},{"s":"长武县"},{"s":"旬邑县"},{"s":"淳化县"},{"s":"武功县"},{"s":"兴平市"}]},{"n":"渭南","a":[{"s":"临渭区"},{"s":"华县"},{"s":"潼关县"},{"s":"大荔县"},{"s":"合阳县"},{"s":"澄城县"},{"s":"蒲城县"},{"s":"白水县"},{"s":"富平县"},{"s":"韩城市"},{"s":"华阴市"}]},{"n":"延安","a":[{"s":"宝塔区"},{"s":"延长县"},{"s":"延川县"},{"s":"子长县"},{"s":"安塞县"},{"s":"志丹县"},{"s":"吴起县"},{"s":"甘泉县"},{"s":"富县"},{"s":"洛川县"},{"s":"宜川县"},{"s":"黄龙县"},{"s":"黄陵县"}]},{"n":"汉中","a":[{"s":"汉台区"},{"s":"南郑县"},{"s":"城固县"},{"s":"洋县"},{"s":"西乡县"},{"s":"勉县"},{"s":"宁强县"},{"s":"略阳县"},{"s":"镇巴县"},{"s":"留坝县"},{"s":"佛坪县"}]},{"n":"榆林","a":[{"s":"榆阳区"},{"s":"神木县"},{"s":"府谷县"},{"s":"横山县"},{"s":"靖边县"},{"s":"定边县"},{"s":"绥德县"},{"s":"米脂县"},{"s":"佳县"},{"s":"吴堡县"},{"s":"清涧县"},{"s":"子洲县"}]},{"n":"安康","a":[{"s":"汉滨区"},{"s":"汉阴县"},{"s":"石泉县"},{"s":"宁陕县"},{"s":"紫阳县"},{"s":"岚皋县"},{"s":"平利县"},{"s":"镇坪县"},{"s":"旬阳县"},{"s":"白河县"}]},{"n":"商洛","a":[{"s":"商州区"},{"s":"洛南县"},{"s":"丹凤县"},{"s":"商南县"},{"s":"山阳县"},{"s":"镇安县"},{"s":"柞水县"}]}]},{"p":"甘肃","c":[{"n":"兰州","a":[{"s":"区(县)"},{"s":"城关区"},{"s":"七里河区"},{"s":"西固区"},{"s":"安宁区"},{"s":"红古区"},{"s":"永登县"},{"s":"皋兰县"},{"s":"榆中县"}]},{"n":"嘉峪关","a":[{"s":"嘉峪关市"}]},{"n":"金昌","a":[{"s":"金川区"},{"s":"永昌县"}]},{"n":"白银","a":[{"s":"白银区"},{"s":"平川区"},{"s":"靖远县"},{"s":"会宁县"},{"s":"景泰县"}]},{"n":"天水","a":[{"s":"秦城区"},{"s":"麦积区"},{"s":"清水县"},{"s":"秦安县"},{"s":"甘谷县"},{"s":"武山县"},{"s":"张家川回族自治县"}]},{"n":"武威","a":[{"s":"凉州区"},{"s":"民勤县"},{"s":"古浪县"},{"s":"天祝藏族自治县"}]},{"n":"张掖","a":[{"s":"甘州区"},{"s":"肃南裕固族自治县"},{"s":"民乐县"},{"s":"临泽县"},{"s":"高台县"},{"s":"山丹县"}]},{"n":"平凉","a":[{"s":"崆峒区"},{"s":"泾川县"},{"s":"灵台县"},{"s":"崇信县"},{"s":"华亭县"},{"s":"庄浪县"},{"s":"静宁县"}]},{"n":"酒泉","a":[{"s":"肃州区"},{"s":"金塔县"},{"s":"瓜州县"},{"s":"肃北蒙古族自治县"},{"s":"阿克塞哈萨克族自治县"},{"s":"玉门市"},{"s":"敦煌市"}]},{"n":"庆阳","a":[{"s":"西峰区"},{"s":"庆城县"},{"s":"环县"},{"s":"华池县"},{"s":"合水县"},{"s":"正宁县"},{"s":"宁县"},{"s":"镇原县"}]},{"n":"定西","a":[{"s":"安定区"},{"s":"通渭县"},{"s":"陇西县"},{"s":"渭源县"},{"s":"临洮县"},{"s":"漳县"},{"s":"岷县"}]},{"n":"陇南","a":[{"s":"武都区"},{"s":"成县"},{"s":"文县"},{"s":"宕昌县"},{"s":"康县"},{"s":"西和县"},{"s":"礼县"},{"s":"徽县"},{"s":"两当县"}]},{"n":"临夏","a":[{"s":"临夏市"},{"s":"临夏县"},{"s":"康乐县"},{"s":"永靖县"},{"s":"广河县"},{"s":"和政县"},{"s":"东乡族自治县"},{"s":"积石山保安族东乡族撒拉族自治县"}]},{"n":"甘南","a":[{"s":"合作市"},{"s":"临潭县"},{"s":"卓尼县"},{"s":"舟曲县"},{"s":"迭部县"},{"s":"玛曲县"},{"s":"碌曲县"},{"s":"夏河县"}]}]},{"p":"青海","c":[{"n":"西宁","a":[{"s":"城东区"},{"s":"城中区"},{"s":"城西区"},{"s":"城北区"},{"s":"大通回族土族自治县"},{"s":"湟中县"},{"s":"湟源县"}]},{"n":"海东","a":[{"s":"平安县"},{"s":"民和回族土族自治县"},{"s":"乐都县"},{"s":"互助土族自治县"},{"s":"化隆回族自治县"},{"s":"循化撒拉族自治县"}]},{"n":"海北","a":[{"s":"门源回族自治县"},{"s":"祁连县"},{"s":"海晏县"},{"s":"刚察县"}]},{"n":"黄南","a":[{"s":"同仁县"},{"s":"尖扎县"},{"s":"泽库县"},{"s":"河南蒙古族自治县"}]},{"n":"海南","a":[{"s":"共和县"},{"s":"同德县"},{"s":"贵德县"},{"s":"兴海县"},{"s":"贵南县"}]},{"n":"果洛","a":[{"s":"玛沁县"},{"s":"班玛县"},{"s":"甘德县"},{"s":"达日县"},{"s":"久治县"},{"s":"玛多县"}]},{"n":"玉树","a":[{"s":"玉树县"},{"s":"杂多县"},{"s":"称多县"},{"s":"治多县"},{"s":"囊谦县"},{"s":"曲麻莱县"}]},{"n":"梅西","a":[{"s":"格尔木市"},{"s":"德令哈市"},{"s":"乌兰县"},{"s":"都兰县"},{"s":"天峻县"}]}]},{"p":"宁夏","c":[{"n":"银川","a":[{"s":"兴庆区"},{"s":"西夏区"},{"s":"金凤区"},{"s":"永宁县"},{"s":"贺兰县"},{"s":"灵武市"}]},{"n":"石嘴山","a":[{"s":"大武口区"},{"s":"惠农区"},{"s":"平罗县"}]},{"n":"吴忠","a":[{"s":"利通区"},{"s":"红寺堡区"},{"s":"盐池县"},{"s":"同心县"},{"s":"青铜峡市"}]},{"n":"固原","a":[{"s":"原州区"},{"s":"西吉县"},{"s":"隆德县"},{"s":"泾源县"},{"s":"彭阳县"}]},{"n":"中卫","a":[{"s":"沙坡头区"},{"s":"中宁县"},{"s":"海原县"}]}]},{"p":"新疆","c":[{"n":"乌鲁木齐","a":[{"s":"天山区"},{"s":"沙依巴克区"},{"s":"新市区"},{"s":"水磨沟区"},{"s":"头屯河区"},{"s":"达坂城区"},{"s":"米东区"},{"s":"乌鲁木齐县"}]},{"n":"克拉玛依","a":[{"s":"独山子区"},{"s":"克拉玛依区"},{"s":"白碱滩区"},{"s":"乌尔禾区"}]},{"n":"吐鲁番","a":[{"s":"吐鲁番市"},{"s":"鄯善县"},{"s":"托克逊县"}]},{"n":"哈密","a":[{"s":"哈密市"},{"s":"巴里坤哈萨克自治县"},{"s":"伊吾县"}]},{"n":"昌吉","a":[{"s":"昌吉市"},{"s":"阜康市"},{"s":"呼图壁县"},{"s":"玛纳斯县"},{"s":"奇台县"},{"s":"吉木萨尔县"},{"s":"木垒哈萨克自治县"}]},{"n":"博尔塔拉","a":[{"s":"博乐市"},{"s":"精河县"},{"s":"温泉县"}]},{"n":"巴音郭楞","a":[{"s":"库尔勒市"},{"s":"轮台县"},{"s":"尉犁县"},{"s":"若羌县"},{"s":"且末县"},{"s":"焉耆回族自治县"},{"s":"和静县"},{"s":"和硕县"},{"s":"博湖县"}]},{"n":"阿克苏","a":[{"s":"阿克苏市"},{"s":"温宿县"},{"s":"库车县"},{"s":"沙雅县"},{"s":"新和县"},{"s":"拜城县"},{"s":"乌什县"},{"s":"阿瓦提县"},{"s":"柯坪县"}]},{"n":"克孜勒苏","a":[{"s":"阿图什市"},{"s":"阿克陶县"},{"s":"阿合奇县"},{"s":"乌恰县"}]},{"n":"喀什","a":[{"s":"喀什市"},{"s":"疏附县"},{"s":"疏勒县"},{"s":"英吉沙县"},{"s":"泽普县"},{"s":"莎车县"},{"s":"叶城县"},{"s":"麦盖提县"},{"s":"岳普湖县"},{"s":"伽师县"},{"s":"巴楚县"},{"s":"塔什库尔干县塔吉克自治"}]},{"n":"和田","a":[{"s":"和田市"},{"s":"和田县"},{"s":"墨玉县"},{"s":"皮山县"},{"s":"洛浦县"},{"s":"策勒县"},{"s":"于田县"},{"s":"民丰县"}]},{"n":"伊犁","a":[{"s":"伊宁市"},{"s":"奎屯市"},{"s":"伊宁县"},{"s":"察布查尔锡伯自治县"},{"s":"霍城县"},{"s":"巩留县"},{"s":"新源县"},{"s":"昭苏县"},{"s":"特克斯县"},{"s":"尼勒克县"}]},{"n":"塔城","a":[{"s":"塔城市"},{"s":"乌苏市"},{"s":"额敏县"},{"s":"沙湾县"},{"s":"托里县"},{"s":"裕民县"},{"s":"和布克赛尔蒙古自治县"}]},{"n":"阿勒泰","a":[{"s":"阿勒泰市"},{"s":"布尔津县"},{"s":"富蕴县"},{"s":"福海县"},{"s":"哈巴河县"},{"s":"青河县"},{"s":"吉木乃县"}]},{"n":"石河子","a":[{"s":"石河子"}]},{"n":"阿拉尔","a":[{"s":"阿拉尔"}]},{"n":"图木舒克","a":[{"s":"图木舒克"}]},{"n":"五家渠","a":[{"s":"五家渠"}]}]},{"p":"香港","c":[{"n":"中西区"},{"n":"东区"},{"n":"九龙城区"},{"n":"观塘区"},{"n":"南区"},{"n":"深水区"},{"n":"湾仔区"},{"n":"黄大仙区"},{"n":"油尖旺区"},{"n":"离岛区"},{"n":"葵青区"},{"n":"北区"},{"n":"西贡区"},{"n":"沙田区"},{"n":"屯门区"},{"n":"大埔区"},{"n":"荃湾区"},{"n":"元朗区"}]},{"p":"澳门","c":[{"n":"花地玛堂区"},{"n":"圣安多尼堂区"},{"n":"大堂区"},{"n":"望德堂区"},{"n":"风顺堂区"},{"n":"嘉模堂区"},{"n":"圣方济各堂区"}]},{"p":"台湾","c":[{"n":"台北市"},{"n":"高雄市"},{"n":"基隆市"},{"n":"台中市"},{"n":"台南市"},{"n":"新竹市"},{"n":"嘉义市"},{"n":"台北县"},{"n":"宜兰县"},{"n":"新竹县"},{"n":"桃园县"},{"n":"苗栗县"},{"n":"台中县"},{"n":"彰化县"},{"n":"南投县"},{"n":"嘉义县"},{"n":"云林县"},{"n":"台南县"},{"n":"高雄县"},{"n":"屏东县"},{"n":"台东县"},{"n":"花莲县"},{"n":"澎湖县"}]},{"p":"国外"}]}',
            prov: null,
            city: null,
            dist: null,
            nodata: null,
            required: true
        }, settings);
        var box_obj = this;
        var prov_obj = box_obj.find(".prov");
        var city_obj = box_obj.find(".city");
        var dist_obj = box_obj.find(".dist");
        var prov_val = settings.prov;
        var city_val = settings.city;
        var dist_val = settings.dist;
        var select_prehtml = (settings.required) ? "" : "<option value=''>请选择</option>";
        var city_json;
        var cityStart = function() {
            var prov_id = prov_obj.get(0).selectedIndex;
            if (!settings.required) {
                prov_id--
            }
            city_obj.empty().attr("disabled", true);
            dist_obj.empty().attr("disabled", true);
            if (prov_id < 0 || typeof(city_json.citylist[prov_id].c) == "undefined") {
                if (settings.nodata == "none") {
                    city_obj.css("display", "none");
                    dist_obj.css("display", "none")
                } else {
                    if (settings.nodata == "hidden") {
                        city_obj.css("visibility", "hidden");
                        dist_obj.css("visibility", "hidden")
                    }
                }
                return
            }
            temp_html = select_prehtml;
            $.each(city_json.citylist[prov_id].c, function(i, city) {
                temp_html += "<option value='" + city.n + "'>" + city.n + "</option>"
            });
            city_obj.html(temp_html).attr("disabled", false).css({
                "display": "",
                "visibility": ""
            });
            distStart()
        };
        var distStart = function() {
            var prov_id = prov_obj.get(0).selectedIndex;
            var city_id = city_obj.get(0).selectedIndex;
            if (!settings.required) {
                prov_id--;
                city_id--
            }
            dist_obj.empty().attr("disabled", true);
            if (prov_id < 0 || city_id < 0 || typeof(city_json.citylist[prov_id].c[city_id].a) == "undefined") {
                if (settings.nodata == "none") {
                    dist_obj.css("display", "none")
                } else {
                    if (settings.nodata == "hidden") {
                        dist_obj.css("visibility", "hidden")
                    }
                }
                return
            }
            temp_html = select_prehtml;
            $.each(city_json.citylist[prov_id].c[city_id].a, function(i, dist) {
                temp_html += "<option value='" + dist.s + "'>" + dist.s + "</option>"
            });
            dist_obj.html(temp_html).attr("disabled", false).css({
                "display": "",
                "visibility": ""
            })
        };
        var init = function() {
            temp_html = select_prehtml;
            $.each(city_json.citylist, function(i, prov) {
                temp_html += "<option value='" + prov.p + "'>" + prov.p + "</option>"
            });
            prov_obj.html(temp_html);
            setTimeout(function() {
                if (settings.prov != null) {
                    prov_obj.val(settings.prov);
                    cityStart();
                    setTimeout(function() {
                        if (settings.city != null) {
                            city_obj.val(settings.city);
                            distStart();
                            setTimeout(function() {
                                if (settings.dist != null) {
                                    dist_obj.val(settings.dist)
                                }
                            }, 1)
                        }
                    }, 1)
                }
            }, 1);
            prov_obj.bind("change", function() {
                cityStart()
            });
            city_obj.bind("change", function() {
                distStart()
            })
        };
        city_json = eval("(" + settings.url + ")");
        init()
    }
})(jQuery);

// 单个城市选择插件(jQuery.citySelector v1.0)
var Vcity = {};
Vcity._m = {
    $: function(arg, context) {
        var tagAll, n, eles = [],
            i, sub = arg.substring(1);
        context = context || document;
        if (typeof arg == "string") {
            switch (arg.charAt(0)) {
                case "#":
                    return document.getElementById(sub);
                    break;
                case ".":
                    if (context.getElementsByClassName) {
                        return context.getElementsByClassName(sub)
                    }
                    tagAll = Vcity._m.$("*", context);
                    n = tagAll.length;
                    for (i = 0; i < n; i++) {
                        if (tagAll[i].className.indexOf(sub) > -1) {
                            eles.push(tagAll[i])
                        }
                    }
                    return eles;
                    break;
                default:
                    return context.getElementsByTagName(arg);
                    break
            }
        }
    },
    on: function(node, type, handler) {
        node.addEventListener ? node.addEventListener(type, handler, false) : node.attachEvent("on" + type, handler)
    },
    getEvent: function(event) {
        return event || window.event
    },
    getTarget: function(event) {
        return event.target || event.srcElement
    },
    getPos: function(node) {
        var scrollx = document.documentElement.scrollLeft || document.body.scrollLeft,
            scrollt = document.documentElement.scrollTop || document.body.scrollTop;
        var pos = node.getBoundingClientRect();
        return {
            top: pos.top + scrollt,
            right: pos.right + scrollx,
            bottom: pos.bottom + scrollt,
            left: pos.left + scrollx
        }
    },
    addClass: function(c, node) {
        if (!node) {
            return
        }
        node.className = Vcity._m.hasClass(c, node) ? node.className : node.className + " " + c
    },
    removeClass: function(c, node) {
        var reg = new RegExp("(^|\\s+)" + c + "(\\s+|$)", "g");
        if (!Vcity._m.hasClass(c, node)) {
            return
        }
        node.className = reg.test(node.className) ? node.className.replace(reg, "") : node.className
    },
    hasClass: function(c, node) {
        if (!node || !node.className) {
            return false
        }
        return node.className.indexOf(c) > -1
    },
    stopPropagation: function(event) {
        event = event || window.event;
        event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true
    },
    trim: function(str) {
        return str.replace(/^\s+|\s+$/g, "")
    }
};
Vcity.allCity = ["北京|beijing|bj", "上海|shanghai|sh", "重庆|chongqing|cq", "深圳|shenzhen|sz", "广州|guangzhou|gz", "杭州|hangzhou|hz", "南京|nanjing|nj", "苏州|shuzhou|sz", "天津|tianjin|tj", "成都|chengdu|cd", "南昌|nanchang|nc", "三亚|sanya|sy", "青岛|qingdao|qd", "厦门|xiamen|xm", "西安|xian|xa", "长沙|changsha|cs", "合肥|hefei|hf", "西藏|xizang|xz", "内蒙古|neimenggu|nmg", "安庆|anqing|aq", "阿泰勒|ataile|atl", "安康|ankang|ak", "阿克苏|akesu|aks", "包头|baotou|bt", "北海|beihai|bh", "百色|baise|bs", "保山|baoshan|bs", "长治|changzhi|cz", "长春|changchun|cc", "常州|changzhou|cz", "昌都|changdu|cd", "朝阳|chaoyang|cy", "常德|changde|cd", "长白山|changbaishan|cbs", "赤峰|chifeng|cf", "大同|datong|dt", "大连|dalian|dl", "达县|daxian|dx", "东营|dongying|dy", "大庆|daqing|dq", "丹东|dandong|dd", "大理|dali|dl", "敦煌|dunhuang|dh", "鄂尔多斯|eerduosi|eeds", "恩施|enshi|es", "福州|fuzhou|fz", "阜阳|fuyang|fy", "贵阳|guiyang|gy", "桂林|guilin|gl", "广元|guangyuan|gy", "格尔木|geermu|gem", "呼和浩特|huhehaote|hhht", "哈密|hami|hm", "黑河|heihe|hh", "海拉尔|hailaer|hle", "哈尔滨|haerbin|heb", "海口|haikou|hk", "黄山|huangshan|hs", "邯郸|handan|hd", "汉中|hanzhong|hz", "和田|hetian|ht", "晋江|jinjiang|jj", "锦州|jinzhou|jz", "景德镇|jingdezhen|jdz", "嘉峪关|jiayuguan|jyg", "井冈山|jinggangshan|jgs", "济宁|jining|jn", "九江|jiujiang|jj", "佳木斯|jiamusi|jms", "济南|jinan|jn", "喀什|kashi|ks", "昆明|kunming|km", "康定|kangding|kd", "克拉玛依|kelamayi|klmy", "库尔勒|kuerle|kel", "库车|kuche|kc", "兰州|lanzhou|lz", "洛阳|luoyang|ly", "丽江|lijiang|lj", "林芝|linzhi|lz", "柳州|liuzhou|lz", "泸州|luzhou|lz", "连云港|lianyungang|lyg", "黎平|liping|lp", "连成|liancheng|lc", "拉萨|lasa|ls", "临沧|lincang|lc", "临沂|linyi|ly", "芒市|mangshi|ms", "牡丹江|mudanjiang|mdj", "满洲里|manzhouli|mzl", "绵阳|mianyang|my", "梅县|meixian|mx", "漠河|mohe|mh", "南充|nanchong|nc", "南宁|nanning|nn", "南阳|nanyang|ny", "南通|nantong|nt", "那拉提|nalati|nlt", "宁波|ningbo|nb", "攀枝花|panzhihua|pzh", "衢州|quzhou|qz", "秦皇岛|qinhuangdao|qhd", "庆阳|qingyang|qy", "齐齐哈尔|qiqihaer|qqhe", "石家庄|shijiazhuang|sjz", "沈阳|shenyang|sy", "思茅|simao|sm", "铜仁|tongren|tr", "塔城|tacheng|tc", "腾冲|tengchong|tc", "台州|taizhou|tz", "通辽|tongliao|tl", "太原|taiyuan|ty", "威海|weihai|wh", "梧州|wuzhou|wz", "文山|wenshan|ws", "无锡|wuxi|wx", "潍坊|weifang|wf", "武夷山|wuyishan|wys", "乌兰浩特|wulanhaote|wlht", "温州|wenzhou|wz", "乌鲁木齐|wulumuqi|wlmq", "万州|wanzhou|wz", "乌海|wuhai|wh", "兴义|xingyi|xy", "西昌|xichang|xc", "襄樊|xiangfan|xf", "西宁|xining|xn", "锡林浩特|xilinhaote|xlht", "西双版纳|xishuangbanna|xsbn", "徐州|xuzhou|xz", "义乌|yiwu|yw", "永州|yongzhou|yz", "榆林|yulin|yl", "延安|yanan|ya", "运城|yuncheng|yc", "烟台|yantai|yt", "银川|yinchuan|yc", "宜昌|yichang|yc", "宜宾|yibin|yb", "盐城|yancheng|yc", "延吉|yanji|yj", "玉树|yushu|ys", "伊宁|yining|yn", "珠海|zhuhai|zh", "昭通|zhaotong|zt", "张家界|zhangjiajie|zjj", "舟山|zhoushan|zs", "郑州|zhengzhou|zz", "中卫|zhongwei|zw", "芷江|zhijiang|zj", "湛江|zhanjiang|zj"];
Vcity.regEx = /^([\u4E00-\u9FA5\uf900-\ufa2d]+)\|(\w+)\|(\w)\w*$/i;
Vcity.regExChiese = /([\u4E00-\u9FA5\uf900-\ufa2d]+)/;
(function() {
    var citys = Vcity.allCity,
        match, letter, regEx = Vcity.regEx,
        reg2 = /^[a-h]$/i,
        reg3 = /^[i-p]$/i,
        reg4 = /^[q-z]$/i;
    if (!Vcity.oCity) {
        Vcity.oCity = {
            hot: {},
            ABCDEFGH: {},
            IJKLMNOP: {},
            QRSTUVWXYZ: {}
        };
        for (var i = 0, n = citys.length; i < n; i++) {
            match = regEx.exec(citys[i]);
            letter = match[3].toUpperCase();
            if (reg2.test(letter)) {
                if (!Vcity.oCity.ABCDEFGH[letter]) {
                    Vcity.oCity.ABCDEFGH[letter] = []
                }
                Vcity.oCity.ABCDEFGH[letter].push(match[1])
            } else {
                if (reg3.test(letter)) {
                    if (!Vcity.oCity.IJKLMNOP[letter]) {
                        Vcity.oCity.IJKLMNOP[letter] = []
                    }
                    Vcity.oCity.IJKLMNOP[letter].push(match[1])
                } else {
                    if (reg4.test(letter)) {
                        if (!Vcity.oCity.QRSTUVWXYZ[letter]) {
                            Vcity.oCity.QRSTUVWXYZ[letter] = []
                        }
                        Vcity.oCity.QRSTUVWXYZ[letter].push(match[1])
                    }
                }
            }
            if (i < 16) {
                if (!Vcity.oCity.hot["hot"]) {
                    Vcity.oCity.hot["hot"] = []
                }
                Vcity.oCity.hot["hot"].push(match[1])
            }
        }
    }
})();
Vcity._template = ['<p class="tip">热门城市(支持汉字/拼音)</p>', "<ul>", '<li class="on">热门城市</li>', "<li>ABCDEFGH</li>", "<li>IJKLMNOP</li>", "<li>QRSTUVWXYZ</li>", "</ul>"];
Vcity.CitySelector = function() {
    this.initialize.apply(this, arguments)
};
Vcity.CitySelector.prototype = {
    constructor: Vcity.CitySelector,
    initialize: function(options) {
        var input = options.input;
        this.input = Vcity._m.$("#" + input);
        this.inputEvent()
    },
    createWarp: function() {
        var inputPos = Vcity._m.getPos(this.input);
        var div = this.rootDiv = document.createElement("div");
        var that = this;
        Vcity._m.on(this.rootDiv, "click", function(event) {
            Vcity._m.stopPropagation(event)
        });
        Vcity._m.on(document, "click", function(event) {
            event = Vcity._m.getEvent(event);
            var target = Vcity._m.getTarget(event);
            if (target == that.input) {
                return false
            }
            if (that.cityBox) {
                Vcity._m.addClass("hide", that.cityBox)
            }
            if (that.ul) {
                Vcity._m.addClass("hide", that.ul)
            }
            if (that.myIframe) {
                Vcity._m.addClass("hide", that.myIframe)
            }
        });
        div.className = "citySelector";
        div.style.position = "absolute";
        div.style.left = inputPos.left + "px";
        div.style.top = inputPos.bottom + "px";
        div.style.zIndex = 999999;
        var isIe = (document.all) ? true : false;
        var isIE6 = this.isIE6 = isIe && !window.XMLHttpRequest;
        if (isIE6) {
            var myIframe = this.myIframe = document.createElement("iframe");
            myIframe.frameborder = "0";
            myIframe.src = "about:blank";
            myIframe.style.position = "absolute";
            myIframe.style.zIndex = "-1";
            this.rootDiv.appendChild(this.myIframe)
        }
        var childdiv = this.cityBox = document.createElement("div");
        childdiv.className = "cityBox";
        childdiv.id = "cityBox";
        childdiv.innerHTML = Vcity._template.join("");
        var hotCity = this.hotCity = document.createElement("div");
        hotCity.className = "hotCity";
        childdiv.appendChild(hotCity);
        div.appendChild(childdiv);
        this.createHotCity()
    },
    createHotCity: function() {
        var odiv, odl, odt, odd, odda = [],
            str, key, ckey, sortKey, regEx = Vcity.regEx,
            oCity = Vcity.oCity;
        for (key in oCity) {
            odiv = this[key] = document.createElement("div");
            odiv.className = key + " " + "cityTab hide";
            sortKey = [];
            for (ckey in oCity[key]) {
                sortKey.push(ckey);
                sortKey.sort()
            }
            for (var j = 0, k = sortKey.length; j < k; j++) {
                odl = document.createElement("dl");
                odt = document.createElement("dt");
                odd = document.createElement("dd");
                odt.innerHTML = sortKey[j] == "hot" ? "&nbsp;" : sortKey[j];
                odda = [];
                for (var i = 0, n = oCity[key][sortKey[j]].length; i < n; i++) {
                    str = '<a href="javascript:">' + oCity[key][sortKey[j]][i] + "</a>";
                    odda.push(str)
                }
                odd.innerHTML = odda.join("");
                odl.appendChild(odt);
                odl.appendChild(odd);
                odiv.appendChild(odl)
            }
            Vcity._m.removeClass("hide", this.hot);
            this.hotCity.appendChild(odiv)
        }
        document.body.appendChild(this.rootDiv);
        this.changeIframe();
        this.tabChange();
        this.linkEvent()
    },
    tabChange: function() {
        var lis = Vcity._m.$("li", this.cityBox);
        var divs = Vcity._m.$("div", this.hotCity);
        var that = this;
        for (var i = 0, n = lis.length; i < n; i++) {
            lis[i].index = i;
            lis[i].onclick = function() {
                for (var j = 0; j < n; j++) {
                    Vcity._m.removeClass("on", lis[j]);
                    Vcity._m.addClass("hide", divs[j])
                }
                Vcity._m.addClass("on", this);
                Vcity._m.removeClass("hide", divs[this.index]);
                that.changeIframe()
            }
        }
    },
    linkEvent: function() {
        var links = Vcity._m.$("a", this.hotCity);
        var that = this;
        for (var i = 0, n = links.length; i < n; i++) {
            links[i].onclick = function() {
                that.input.value = this.innerHTML;
                Vcity._m.addClass("hide", that.cityBox);
                Vcity._m.addClass("hide", that.myIframe)
            }
        }
    },
    inputEvent: function() {
        var that = this;
        Vcity._m.on(this.input, "click", function(event) {
            event = event || window.event;
            if (!that.cityBox) {
                that.createWarp()
            } else {
                if (!!that.cityBox && Vcity._m.hasClass("hide", that.cityBox)) {
                    if (!that.ul || (that.ul && Vcity._m.hasClass("hide", that.ul))) {
                        Vcity._m.removeClass("hide", that.cityBox);
                        Vcity._m.removeClass("hide", that.myIframe);
                        that.changeIframe()
                    }
                }
            }
        });
        Vcity._m.on(this.input, "focus", function() {
            that.input.select();
            if (that.input.value == "城市名") {
                that.input.value = ""
            }
        });
        Vcity._m.on(this.input, "blur", function() {
            if (that.input.value == "") {
                that.input.value = "城市名"
            }
        });
        Vcity._m.on(this.input, "keyup", function(event) {
            event = event || window.event;
            var keycode = event.keyCode;
            Vcity._m.addClass("hide", that.cityBox);
            that.createUl();
            Vcity._m.removeClass("hide", that.myIframe);
            if (that.ul && !Vcity._m.hasClass("hide", that.ul) && !that.isEmpty) {
                that.KeyboardEvent(event, keycode)
            }
        })
    },
    createUl: function() {
        var str;
        var value = Vcity._m.trim(this.input.value);
        if (value !== "") {
            var reg = new RegExp("^" + value + "|\\|" + value, "gi");
            var searchResult = [];
            for (var i = 0, n = Vcity.allCity.length; i < n; i++) {
                if (reg.test(Vcity.allCity[i])) {
                    var match = Vcity.regEx.exec(Vcity.allCity[i]);
                    if (searchResult.length !== 0) {
                        str = '<li><b class="cityname">' + match[1] + '</b><b class="cityspell">' + match[2] + "</b></li>"
                    } else {
                        str = '<li class="on"><b class="cityname">' + match[1] + '</b><b class="cityspell">' + match[2] + "</b></li>"
                    }
                    searchResult.push(str)
                }
            }
            this.isEmpty = false;
            if (searchResult.length == 0) {
                this.isEmpty = true;
                str = '<li class="empty">对不起，没有找到数据 "<em>' + value + '</em>"</li>';
                searchResult.push(str)
            }
            if (!this.ul) {
                var ul = this.ul = document.createElement("ul");
                ul.className = "cityslide";
                this.rootDiv && this.rootDiv.appendChild(ul);
                this.count = 0
            } else {
                if (this.ul && Vcity._m.hasClass("hide", this.ul)) {
                    this.count = 0;
                    Vcity._m.removeClass("hide", this.ul)
                }
            }
            this.ul.innerHTML = searchResult.join("");
            this.changeIframe();
            this.liEvent()
        } else {
            Vcity._m.addClass("hide", this.ul);
            Vcity._m.removeClass("hide", this.cityBox);
            Vcity._m.removeClass("hide", this.myIframe);
            this.changeIframe()
        }
    },
    changeIframe: function() {
        if (!this.isIE6) {
            return
        }
        this.myIframe.style.width = this.rootDiv.offsetWidth + "px";
        this.myIframe.style.height = this.rootDiv.offsetHeight + "px"
    },
    KeyboardEvent: function(event, keycode) {
        var lis = Vcity._m.$("li", this.ul);
        var len = lis.length;
        switch (keycode) {
            case 40:
                this.count++;
                if (this.count > len - 1) {
                    this.count = 0
                }
                for (var i = 0; i < len; i++) {
                    Vcity._m.removeClass("on", lis[i])
                }
                Vcity._m.addClass("on", lis[this.count]);
                break;
            case 38:
                this.count--;
                if (this.count < 0) {
                    this.count = len - 1
                }
                for (i = 0; i < len; i++) {
                    Vcity._m.removeClass("on", lis[i])
                }
                Vcity._m.addClass("on", lis[this.count]);
                break;
            case 13:
                this.input.value = Vcity.regExChiese.exec(lis[this.count].innerHTML)[0];
                Vcity._m.addClass("hide", this.ul);
                Vcity._m.addClass("hide", this.ul);
                Vcity._m.addClass("hide", this.myIframe);
                break;
            default:
                break
        }
    },
    liEvent: function() {
        var that = this;
        var lis = Vcity._m.$("li", this.ul);
        for (var i = 0, n = lis.length; i < n; i++) {
            Vcity._m.on(lis[i], "click", function(event) {
                event = Vcity._m.getEvent(event);
                var target = Vcity._m.getTarget(event);
                that.input.value = Vcity.regExChiese.exec(target.innerHTML)[0];
                Vcity._m.addClass("hide", that.ul);
                Vcity._m.addClass("hide", that.myIframe)
            });
            Vcity._m.on(lis[i], "mouseover", function(event) {
                event = Vcity._m.getEvent(event);
                var target = Vcity._m.getTarget(event);
                Vcity._m.addClass("on", target)
            });
            Vcity._m.on(lis[i], "mouseout", function(event) {
                event = Vcity._m.getEvent(event);
                var target = Vcity._m.getTarget(event);
                Vcity._m.removeClass("on", target)
            })
        }
    }
};

// 图表插件(jQuery.chart.js v1.0.2)
(function() {
    "use strict";
    var t = this,
        i = t.Chart,
        e = function(t) {
            this.canvas = t.canvas, this.ctx = t;
            var i = function(t, i) {
                    return t["offset" + i] ? t["offset" + i] : document.defaultView.getComputedStyle(t).getPropertyValue(i)
                },
                e = this.width = i(t.canvas, "Width"),
                n = this.height = i(t.canvas, "Height");
            t.canvas.width = e, t.canvas.height = n;
            var e = this.width = t.canvas.width,
                n = this.height = t.canvas.height;
            return this.aspectRatio = this.width / this.height, s.retinaScale(this), this
        };
    e.defaults = {
        global: {
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            showScale: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleIntegersOnly: !0,
            scaleBeginAtZero: !1,
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            responsive: !1,
            maintainAspectRatio: !0,
            showTooltips: !0,
            customTooltips: !1,
            tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
            tooltipFillColor: "rgba(0,0,0,0.8)",
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipFontSize: 14,
            tooltipFontStyle: "normal",
            tooltipFontColor: "#fff",
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipTitleFontSize: 14,
            tooltipTitleFontStyle: "bold",
            tooltipTitleFontColor: "#fff",
            tooltipYPadding: 6,
            tooltipXPadding: 6,
            tooltipCaretSize: 8,
            tooltipCornerRadius: 6,
            tooltipXOffset: 10,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%= value %>",
            multiTooltipKeyBackground: "#fff",
            onAnimationProgress: function() {},
            onAnimationComplete: function() {}
        }
    }, e.types = {};
    var s = e.helpers = {},
        n = s.each = function(t, i, e) {
            var s = Array.prototype.slice.call(arguments, 3);
            if (t)
                if (t.length === +t.length) {
                    var n;
                    for (n = 0; n < t.length; n++) i.apply(e, [t[n], n].concat(s))
                } else
                    for (var o in t) i.apply(e, [t[o], o].concat(s))
        },
        o = s.clone = function(t) {
            var i = {};
            return n(t, function(e, s) {
                t.hasOwnProperty(s) && (i[s] = e)
            }), i
        },
        a = s.extend = function(t) {
            return n(Array.prototype.slice.call(arguments, 1), function(i) {
                n(i, function(e, s) {
                    i.hasOwnProperty(s) && (t[s] = e)
                })
            }), t
        },
        h = s.merge = function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return t.unshift({}), a.apply(null, t)
        },
        l = s.indexOf = function(t, i) {
            if (Array.prototype.indexOf) return t.indexOf(i);
            for (var e = 0; e < t.length; e++)
                if (t[e] === i) return e;
            return -1
        },
        r = (s.where = function(t, i) {
            var e = [];
            return s.each(t, function(t) {
                i(t) && e.push(t)
            }), e
        }, s.findNextWhere = function(t, i, e) {
            e || (e = -1);
            for (var s = e + 1; s < t.length; s++) {
                var n = t[s];
                if (i(n)) return n
            }
        }, s.findPreviousWhere = function(t, i, e) {
            e || (e = t.length);
            for (var s = e - 1; s >= 0; s--) {
                var n = t[s];
                if (i(n)) return n
            }
        }, s.inherits = function(t) {
            var i = this,
                e = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                    return i.apply(this, arguments)
                },
                s = function() {
                    this.constructor = e
                };
            return s.prototype = i.prototype, e.prototype = new s, e.extend = r, t && a(e.prototype, t), e.__super__ = i.prototype, e
        }),
        c = s.noop = function() {},
        u = s.uid = function() {
            var t = 0;
            return function() {
                return "chart-" + t++
            }
        }(),
        d = s.warn = function(t) {
            window.console && "function" == typeof window.console.warn && console.warn(t)
        },
        p = s.amd = "function" == typeof define && define.amd,
        f = s.isNumber = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        g = s.max = function(t) {
            return Math.max.apply(Math, t)
        },
        m = s.min = function(t) {
            return Math.min.apply(Math, t)
        },
        v = (s.cap = function(t, i, e) {
            if (f(i)) {
                if (t > i) return i
            } else if (f(e) && e > t) return e;
            return t
        }, s.getDecimalPlaces = function(t) {
            return t % 1 !== 0 && f(t) ? t.toString().split(".")[1].length : 0
        }),
        S = s.radians = function(t) {
            return t * (Math.PI / 180)
        },
        x = (s.getAngleFromPoint = function(t, i) {
            var e = i.x - t.x,
                s = i.y - t.y,
                n = Math.sqrt(e * e + s * s),
                o = 2 * Math.PI + Math.atan2(s, e);
            return 0 > e && 0 > s && (o += 2 * Math.PI), {
                angle: o,
                distance: n
            }
        }, s.aliasPixel = function(t) {
            return t % 2 === 0 ? 0 : .5
        }),
        y = (s.splineCurve = function(t, i, e, s) {
            var n = Math.sqrt(Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2)),
                o = Math.sqrt(Math.pow(e.x - i.x, 2) + Math.pow(e.y - i.y, 2)),
                a = s * n / (n + o),
                h = s * o / (n + o);
            return {
                inner: {
                    x: i.x - a * (e.x - t.x),
                    y: i.y - a * (e.y - t.y)
                },
                outer: {
                    x: i.x + h * (e.x - t.x),
                    y: i.y + h * (e.y - t.y)
                }
            }
        }, s.calculateOrderOfMagnitude = function(t) {
            return Math.floor(Math.log(t) / Math.LN10)
        }),
        C = (s.calculateScaleRange = function(t, i, e, s, n) {
            var o = 2,
                a = Math.floor(i / (1.5 * e)),
                h = o >= a,
                l = g(t),
                r = m(t);
            l === r && (l += .5, r >= .5 && !s ? r -= .5 : l += .5);
            for (var c = Math.abs(l - r), u = y(c), d = Math.ceil(l / (1 * Math.pow(10, u))) * Math.pow(10, u), p = s ? 0 : Math.floor(r / (1 * Math.pow(10, u))) * Math.pow(10, u), f = d - p, v = Math.pow(10, u), S = Math.round(f / v);
                (S > a || a > 2 * S) && !h;)
                if (S > a) v *= 2, S = Math.round(f / v), S % 1 !== 0 && (h = !0);
                else if (n && u >= 0) {
                if (v / 2 % 1 !== 0) break;
                v /= 2, S = Math.round(f / v)
            } else v /= 2, S = Math.round(f / v);
            return h && (S = o, v = f / S), {
                steps: S,
                stepValue: v,
                min: p,
                max: p + S * v
            }
        }, s.template = function(t, i) {
            function e(t, i) {
                var e = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : s[t] = s[t];
                return i ? e(i) : e
            }
            if (t instanceof Function) return t(i);
            var s = {};
            return e(t, i)
        }),
        w = (s.generateLabels = function(t, i, e, s) {
            var o = new Array(i);
            return labelTemplateString && n(o, function(i, n) {
                o[n] = C(t, {
                    value: e + s * (n + 1)
                })
            }), o
        }, s.easingEffects = {
            linear: function(t) {
                return t
            },
            easeInQuad: function(t) {
                return t * t
            },
            easeOutQuad: function(t) {
                return -1 * t * (t - 2)
            },
            easeInOutQuad: function(t) {
                return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1)
            },
            easeInCubic: function(t) {
                return t * t * t
            },
            easeOutCubic: function(t) {
                return 1 * ((t = t / 1 - 1) * t * t + 1)
            },
            easeInOutCubic: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            easeInQuart: function(t) {
                return t * t * t * t
            },
            easeOutQuart: function(t) {
                return -1 * ((t = t / 1 - 1) * t * t * t - 1)
            },
            easeInOutQuart: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
            },
            easeInQuint: function(t) {
                return 1 * (t /= 1) * t * t * t * t
            },
            easeOutQuint: function(t) {
                return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
            },
            easeInOutQuint: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            easeInSine: function(t) {
                return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
            },
            easeOutSine: function(t) {
                return 1 * Math.sin(t / 1 * (Math.PI / 2))
            },
            easeInOutSine: function(t) {
                return -0.5 * (Math.cos(Math.PI * t / 1) - 1)
            },
            easeInExpo: function(t) {
                return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
            },
            easeOutExpo: function(t) {
                return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
            },
            easeInOutExpo: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
            },
            easeInCirc: function(t) {
                return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
            },
            easeOutCirc: function(t) {
                return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
            },
            easeInOutCirc: function(t) {
                return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInElastic: function(t) {
                var i = 1.70158,
                    e = 0,
                    s = 1;
                return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (e || (e = .3), s < Math.abs(1) ? (s = 1, i = e / 4) : i = e / (2 * Math.PI) * Math.asin(1 / s), -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - i) * Math.PI / e)))
            },
            easeOutElastic: function(t) {
                var i = 1.70158,
                    e = 0,
                    s = 1;
                return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (e || (e = .3), s < Math.abs(1) ? (s = 1, i = e / 4) : i = e / (2 * Math.PI) * Math.asin(1 / s), s * Math.pow(2, -10 * t) * Math.sin(2 * (1 * t - i) * Math.PI / e) + 1)
            },
            easeInOutElastic: function(t) {
                var i = 1.70158,
                    e = 0,
                    s = 1;
                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (e || (e = .3 * 1.5), s < Math.abs(1) ? (s = 1, i = e / 4) : i = e / (2 * Math.PI) * Math.asin(1 / s), 1 > t ? -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - i) * Math.PI / e) : s * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (1 * t - i) * Math.PI / e) * .5 + 1)
            },
            easeInBack: function(t) {
                var i = 1.70158;
                return 1 * (t /= 1) * t * ((i + 1) * t - i)
            },
            easeOutBack: function(t) {
                var i = 1.70158;
                return 1 * ((t = t / 1 - 1) * t * ((i + 1) * t + i) + 1)
            },
            easeInOutBack: function(t) {
                var i = 1.70158;
                return (t /= .5) < 1 ? .5 * t * t * (((i *= 1.525) + 1) * t - i) : .5 * ((t -= 2) * t * (((i *= 1.525) + 1) * t + i) + 2)
            },
            easeInBounce: function(t) {
                return 1 - w.easeOutBounce(1 - t)
            },
            easeOutBounce: function(t) {
                return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            },
            easeInOutBounce: function(t) {
                return .5 > t ? .5 * w.easeInBounce(2 * t) : .5 * w.easeOutBounce(2 * t - 1) + .5
            }
        }),
        b = s.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                return window.setTimeout(t, 1e3 / 60)
            }
        }(),
        P = s.cancelAnimFrame = function() {
            return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                return window.clearTimeout(t, 1e3 / 60)
            }
        }(),
        L = (s.animationLoop = function(t, i, e, s, n, o) {
            var a = 0,
                h = w[e] || w.linear,
                l = function() {
                    a++;
                    var e = a / i,
                        r = h(e);
                    t.call(o, r, e, a), s.call(o, r, e), i > a ? o.animationFrame = b(l) : n.apply(o)
                };
            b(l)
        }, s.getRelativePosition = function(t) {
            var i, e, s = t.originalEvent || t,
                n = t.currentTarget || t.srcElement,
                o = n.getBoundingClientRect();
            return s.touches ? (i = s.touches[0].clientX - o.left, e = s.touches[0].clientY - o.top) : (i = s.clientX - o.left, e = s.clientY - o.top), {
                x: i,
                y: e
            }
        }, s.addEvent = function(t, i, e) {
            t.addEventListener ? t.addEventListener(i, e) : t.attachEvent ? t.attachEvent("on" + i, e) : t["on" + i] = e
        }),
        k = s.removeEvent = function(t, i, e) {
            t.removeEventListener ? t.removeEventListener(i, e, !1) : t.detachEvent ? t.detachEvent("on" + i, e) : t["on" + i] = c
        },
        F = (s.bindEvents = function(t, i, e) {
            t.events || (t.events = {}), n(i, function(i) {
                t.events[i] = function() {
                    e.apply(t, arguments)
                }, L(t.chart.canvas, i, t.events[i])
            })
        }, s.unbindEvents = function(t, i) {
            n(i, function(i, e) {
                k(t.chart.canvas, e, i)
            })
        }),
        R = s.getMaximumWidth = function(t) {
            var i = t.parentNode;
            return i.clientWidth
        },
        T = s.getMaximumHeight = function(t) {
            var i = t.parentNode;
            return i.clientHeight
        },
        A = (s.getMaximumSize = s.getMaximumWidth, s.retinaScale = function(t) {
            var i = t.ctx,
                e = t.canvas.width,
                s = t.canvas.height;
            window.devicePixelRatio && (i.canvas.style.width = e + "px", i.canvas.style.height = s + "px", i.canvas.height = s * window.devicePixelRatio, i.canvas.width = e * window.devicePixelRatio, i.scale(window.devicePixelRatio, window.devicePixelRatio))
        }),
        M = s.clear = function(t) {
            t.ctx.clearRect(0, 0, t.width, t.height)
        },
        W = s.fontString = function(t, i, e) {
            return i + " " + t + "px " + e
        },
        z = s.longestText = function(t, i, e) {
            t.font = i;
            var s = 0;
            return n(e, function(i) {
                var e = t.measureText(i).width;
                s = e > s ? e : s
            }), s
        },
        B = s.drawRoundedRectangle = function(t, i, e, s, n, o) {
            t.beginPath(), t.moveTo(i + o, e), t.lineTo(i + s - o, e), t.quadraticCurveTo(i + s, e, i + s, e + o), t.lineTo(i + s, e + n - o), t.quadraticCurveTo(i + s, e + n, i + s - o, e + n), t.lineTo(i + o, e + n), t.quadraticCurveTo(i, e + n, i, e + n - o), t.lineTo(i, e + o), t.quadraticCurveTo(i, e, i + o, e), t.closePath()
        };
    e.instances = {}, e.Type = function(t, i, s) {
        this.options = i, this.chart = s, this.id = u(), e.instances[this.id] = this, i.responsive && this.resize(), this.initialize.call(this, t)
    }, a(e.Type.prototype, {
        initialize: function() {
            return this
        },
        clear: function() {
            return M(this.chart), this
        },
        stop: function() {
            return P(this.animationFrame), this
        },
        resize: function(t) {
            this.stop();
            var i = this.chart.canvas,
                e = R(this.chart.canvas),
                s = this.options.maintainAspectRatio ? e / this.chart.aspectRatio : T(this.chart.canvas);
            return i.width = this.chart.width = e, i.height = this.chart.height = s, A(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
        },
        reflow: c,
        render: function(t) {
            return t && this.reflow(), this.options.animation && !t ? s.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
        },
        generateLegend: function() {
            return C(this.options.legendTemplate, this)
        },
        destroy: function() {
            this.clear(), F(this, this.events);
            var t = this.chart.canvas;
            t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete e.instances[this.id]
        },
        showTooltip: function(t, i) {
            "undefined" == typeof this.activeElements && (this.activeElements = []);
            var o = function(t) {
                var i = !1;
                return t.length !== this.activeElements.length ? i = !0 : (n(t, function(t, e) {
                    t !== this.activeElements[e] && (i = !0)
                }, this), i)
            }.call(this, t);
            if (o || i) {
                if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)
                    if (this.datasets && this.datasets.length > 1) {
                        for (var a, h, r = this.datasets.length - 1; r >= 0 && (a = this.datasets[r].points || this.datasets[r].bars || this.datasets[r].segments, h = l(a, t[0]), -1 === h); r--);
                        var c = [],
                            u = [],
                            d = function() {
                                var t, i, e, n, o, a = [],
                                    l = [],
                                    r = [];
                                return s.each(this.datasets, function(i) {
                                    t = i.points || i.bars || i.segments, t[h] && t[h].hasValue() && a.push(t[h])
                                }), s.each(a, function(t) {
                                    l.push(t.x), r.push(t.y), c.push(s.template(this.options.multiTooltipTemplate, t)), u.push({
                                        fill: t._saved.fillColor || t.fillColor,
                                        stroke: t._saved.strokeColor || t.strokeColor
                                    })
                                }, this), o = m(r), e = g(r), n = m(l), i = g(l), {
                                    x: n > this.chart.width / 2 ? n : i,
                                    y: (o + e) / 2
                                }
                            }.call(this, h);
                        new e.MultiTooltip({
                            x: d.x,
                            y: d.y,
                            xPadding: this.options.tooltipXPadding,
                            yPadding: this.options.tooltipYPadding,
                            xOffset: this.options.tooltipXOffset,
                            fillColor: this.options.tooltipFillColor,
                            textColor: this.options.tooltipFontColor,
                            fontFamily: this.options.tooltipFontFamily,
                            fontStyle: this.options.tooltipFontStyle,
                            fontSize: this.options.tooltipFontSize,
                            titleTextColor: this.options.tooltipTitleFontColor,
                            titleFontFamily: this.options.tooltipTitleFontFamily,
                            titleFontStyle: this.options.tooltipTitleFontStyle,
                            titleFontSize: this.options.tooltipTitleFontSize,
                            cornerRadius: this.options.tooltipCornerRadius,
                            labels: c,
                            legendColors: u,
                            legendColorBackground: this.options.multiTooltipKeyBackground,
                            title: t[0].label,
                            chart: this.chart,
                            ctx: this.chart.ctx,
                            custom: this.options.customTooltips
                        }).draw()
                    } else n(t, function(t) {
                        var i = t.tooltipPosition();
                        new e.Tooltip({
                            x: Math.round(i.x),
                            y: Math.round(i.y),
                            xPadding: this.options.tooltipXPadding,
                            yPadding: this.options.tooltipYPadding,
                            fillColor: this.options.tooltipFillColor,
                            textColor: this.options.tooltipFontColor,
                            fontFamily: this.options.tooltipFontFamily,
                            fontStyle: this.options.tooltipFontStyle,
                            fontSize: this.options.tooltipFontSize,
                            caretHeight: this.options.tooltipCaretSize,
                            cornerRadius: this.options.tooltipCornerRadius,
                            text: C(this.options.tooltipTemplate, t),
                            chart: this.chart,
                            custom: this.options.customTooltips
                        }).draw()
                    }, this);
                return this
            }
        },
        toBase64Image: function() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
        }
    }), e.Type.extend = function(t) {
        var i = this,
            s = function() {
                return i.apply(this, arguments)
            };
        if (s.prototype = o(i.prototype), a(s.prototype, t), s.extend = e.Type.extend, t.name || i.prototype.name) {
            var n = t.name || i.prototype.name,
                l = e.defaults[i.prototype.name] ? o(e.defaults[i.prototype.name]) : {};
            e.defaults[n] = a(l, t.defaults), e.types[n] = s, e.prototype[n] = function(t, i) {
                var o = h(e.defaults.global, e.defaults[n], i || {});
                return new s(t, o, this)
            }
        } else d("Name not provided for this chart, so it hasn't been registered");
        return i
    }, e.Element = function(t) {
        a(this, t), this.initialize.apply(this, arguments), this.save()
    }, a(e.Element.prototype, {
        initialize: function() {},
        restore: function(t) {
            return t ? n(t, function(t) {
                this[t] = this._saved[t]
            }, this) : a(this, this._saved), this
        },
        save: function() {
            return this._saved = o(this), delete this._saved._saved, this
        },
        update: function(t) {
            return n(t, function(t, i) {
                this._saved[i] = this[i], this[i] = t
            }, this), this
        },
        transition: function(t, i) {
            return n(t, function(t, e) {
                this[e] = (t - this._saved[e]) * i + this._saved[e]
            }, this), this
        },
        tooltipPosition: function() {
            return {
                x: this.x,
                y: this.y
            }
        },
        hasValue: function() {
            return f(this.value)
        }
    }), e.Element.extend = r, e.Point = e.Element.extend({
        display: !0,
        inRange: function(t, i) {
            var e = this.hitDetectionRadius + this.radius;
            return Math.pow(t - this.x, 2) + Math.pow(i - this.y, 2) < Math.pow(e, 2)
        },
        draw: function() {
            if (this.display) {
                var t = this.ctx;
                t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
            }
        }
    }), e.Arc = e.Element.extend({
        inRange: function(t, i) {
            var e = s.getAngleFromPoint(this, {
                    x: t,
                    y: i
                }),
                n = e.angle >= this.startAngle && e.angle <= this.endAngle,
                o = e.distance >= this.innerRadius && e.distance <= this.outerRadius;
            return n && o
        },
        tooltipPosition: function() {
            var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
                i = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {
                x: this.x + Math.cos(t) * i,
                y: this.y + Math.sin(t) * i
            }
        },
        draw: function(t) {
            var i = this.ctx;
            i.beginPath(), i.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), i.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), i.closePath(), i.strokeStyle = this.strokeColor, i.lineWidth = this.strokeWidth, i.fillStyle = this.fillColor, i.fill(), i.lineJoin = "bevel", this.showStroke && i.stroke()
        }
    }), e.Rectangle = e.Element.extend({
        draw: function() {
            var t = this.ctx,
                i = this.width / 2,
                e = this.x - i,
                s = this.x + i,
                n = this.base - (this.base - this.y),
                o = this.strokeWidth / 2;
            this.showStroke && (e += o, s -= o, n += o), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(e, this.base), t.lineTo(e, n), t.lineTo(s, n), t.lineTo(s, this.base), t.fill(), this.showStroke && t.stroke()
        },
        height: function() {
            return this.base - this.y
        },
        inRange: function(t, i) {
            return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && i >= this.y && i <= this.base
        }
    }), e.Tooltip = e.Element.extend({
        draw: function() {
            var t = this.chart.ctx;
            t.font = W(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
            var i = this.caretPadding = 2,
                e = t.measureText(this.text).width + 2 * this.xPadding,
                s = this.fontSize + 2 * this.yPadding,
                n = s + this.caretHeight + i;
            this.x + e / 2 > this.chart.width ? this.xAlign = "left" : this.x - e / 2 < 0 && (this.xAlign = "right"), this.y - n < 0 && (this.yAlign = "below");
            var o = this.x - e / 2,
                a = this.y - n;
            if (t.fillStyle = this.fillColor, this.custom) this.custom(this);
            else {
                switch (this.yAlign) {
                    case "above":
                        t.beginPath(), t.moveTo(this.x, this.y - i), t.lineTo(this.x + this.caretHeight, this.y - (i + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (i + this.caretHeight)), t.closePath(), t.fill();
                        break;
                    case "below":
                        a = this.y + i + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + i), t.lineTo(this.x + this.caretHeight, this.y + i + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + i + this.caretHeight), t.closePath(), t.fill()
                }
                switch (this.xAlign) {
                    case "left":
                        o = this.x - e + (this.cornerRadius + this.caretHeight);
                        break;
                    case "right":
                        o = this.x - (this.cornerRadius + this.caretHeight)
                }
                B(t, o, a, e, s, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, o + e / 2, a + s / 2)
            }
        }
    }), e.MultiTooltip = e.Element.extend({
        initialize: function() {
            this.font = W(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = W(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
            var t = this.ctx.measureText(this.title).width,
                i = z(this.ctx, this.font, this.labels) + this.fontSize + 3,
                e = g([i, t]);
            this.width = e + 2 * this.xPadding;
            var s = this.height / 2;
            this.y - s < 0 ? this.y = s : this.y + s > this.chart.height && (this.y = this.chart.height - s), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
        },
        getLineHeight: function(t) {
            var i = this.y - this.height / 2 + this.yPadding,
                e = t - 1;
            return 0 === t ? i + this.titleFontSize / 2 : i + (1.5 * this.fontSize * e + this.fontSize / 2) + 1.5 * this.titleFontSize
        },
        draw: function() {
            if (this.custom) this.custom(this);
            else {
                B(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                var t = this.ctx;
                t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, s.each(this.labels, function(i, e) {
                    t.fillStyle = this.textColor, t.fillText(i, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(e + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(e + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[e].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(e + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                }, this)
            }
        }
    }), e.Scale = e.Element.extend({
        initialize: function() {
            this.fit()
        },
        buildYLabels: function() {
            this.yLabels = [];
            for (var t = v(this.stepValue), i = 0; i <= this.steps; i++) this.yLabels.push(C(this.templateString, {
                value: (this.min + i * this.stepValue).toFixed(t)
            }));
            this.yLabelWidth = this.display && this.showLabels ? z(this.ctx, this.font, this.yLabels) : 0
        },
        addXLabel: function(t) {
            this.xLabels.push(t), this.valuesCount++, this.fit()
        },
        removeXLabel: function() {
            this.xLabels.shift(), this.valuesCount--, this.fit()
        },
        fit: function() {
            this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
            var t, i = this.endPoint - this.startPoint;
            for (this.calculateYRange(i), this.buildYLabels(), this.calculateXLabelRotation(); i > this.endPoint - this.startPoint;) i = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(i), this.buildYLabels(), t < this.yLabelWidth && this.calculateXLabelRotation()
        },
        calculateXLabelRotation: function() {
            this.ctx.font = this.font;
            var t, i, e = this.ctx.measureText(this.xLabels[0]).width,
                s = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = s / 2 + 3, this.xScalePaddingLeft = e / 2 > this.yLabelWidth + 10 ? e / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                var n, o = z(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = o;
                for (var a = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > a && 0 === this.xLabelRotation || this.xLabelWidth > a && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) n = Math.cos(S(this.xLabelRotation)), t = n * e, i = n * s, t + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = n * o;
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(S(this.xLabelRotation)) * o + 3)
            } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
        },
        calculateYRange: c,
        drawingArea: function() {
            return this.startPoint - this.endPoint
        },
        calculateY: function(t) {
            var i = this.drawingArea() / (this.min - this.max);
            return this.endPoint - i * (t - this.min)
        },
        calculateX: function(t) {
            var i = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                e = i / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
                s = e * t + this.xScalePaddingLeft;
            return this.offsetGridLines && (s += e / 2), Math.round(s)
        },
        update: function(t) {
            s.extend(this, t), this.fit()
        },
        draw: function() {
            var t = this.ctx,
                i = (this.endPoint - this.startPoint) / this.steps,
                e = Math.round(this.xScalePaddingLeft);
            this.display && (t.fillStyle = this.textColor, t.font = this.font, n(this.yLabels, function(n, o) {
                var a = this.endPoint - i * o,
                    h = Math.round(a),
                    l = this.showHorizontalLines;
                t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(n, e - 10, a), 0 !== o || l || (l = !0), l && t.beginPath(), o > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), h += s.aliasPixel(t.lineWidth), l && (t.moveTo(e, h), t.lineTo(this.width, h), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(e - 5, h), t.lineTo(e, h), t.stroke(), t.closePath()
            }, this), n(this.xLabels, function(i, e) {
                var s = this.calculateX(e) + x(this.lineWidth),
                    n = this.calculateX(e - (this.offsetGridLines ? .5 : 0)) + x(this.lineWidth),
                    o = this.xLabelRotation > 0,
                    a = this.showVerticalLines;
                0 !== e || a || (a = !0), a && t.beginPath(), e > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), a && (t.moveTo(n, this.endPoint), t.lineTo(n, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(n, this.endPoint), t.lineTo(n, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(s, o ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * S(this.xLabelRotation)), t.font = this.font, t.textAlign = o ? "right" : "center", t.textBaseline = o ? "middle" : "top", t.fillText(i, 0, 0), t.restore()
            }, this))
        }
    }), e.RadialScale = e.Element.extend({
        initialize: function() {
            this.size = m([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
        },
        calculateCenterOffset: function(t) {
            var i = this.drawingArea / (this.max - this.min);
            return (t - this.min) * i
        },
        update: function() {
            this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
        },
        buildYLabels: function() {
            this.yLabels = [];
            for (var t = v(this.stepValue), i = 0; i <= this.steps; i++) this.yLabels.push(C(this.templateString, {
                value: (this.min + i * this.stepValue).toFixed(t)
            }))
        },
        getCircumference: function() {
            return 2 * Math.PI / this.valuesCount
        },
        setScaleSize: function() {
            var t, i, e, s, n, o, a, h, l, r, c, u, d = m([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                p = this.width,
                g = 0;
            for (this.ctx.font = W(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), i = 0; i < this.valuesCount; i++) t = this.getPointPosition(i, d), e = this.ctx.measureText(C(this.templateString, {
                value: this.labels[i]
            })).width + 5, 0 === i || i === this.valuesCount / 2 ? (s = e / 2, t.x + s > p && (p = t.x + s, n = i), t.x - s < g && (g = t.x - s, a = i)) : i < this.valuesCount / 2 ? t.x + e > p && (p = t.x + e, n = i) : i > this.valuesCount / 2 && t.x - e < g && (g = t.x - e, a = i);
            l = g, r = Math.ceil(p - this.width), o = this.getIndexAngle(n), h = this.getIndexAngle(a), c = r / Math.sin(o + Math.PI / 2), u = l / Math.sin(h + Math.PI / 2), c = f(c) ? c : 0, u = f(u) ? u : 0, this.drawingArea = d - (u + c) / 2, this.setCenterPoint(u, c)
        },
        setCenterPoint: function(t, i) {
            var e = this.width - i - this.drawingArea,
                s = t + this.drawingArea;
            this.xCenter = (s + e) / 2, this.yCenter = this.height / 2
        },
        getIndexAngle: function(t) {
            var i = 2 * Math.PI / this.valuesCount;
            return t * i - Math.PI / 2
        },
        getPointPosition: function(t, i) {
            var e = this.getIndexAngle(t);
            return {
                x: Math.cos(e) * i + this.xCenter,
                y: Math.sin(e) * i + this.yCenter
            }
        },
        draw: function() {
            if (this.display) {
                var t = this.ctx;
                if (n(this.yLabels, function(i, e) {
                        if (e > 0) {
                            var s, n = e * (this.drawingArea / this.steps),
                                o = this.yCenter - n;
                            if (this.lineWidth > 0)
                                if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, n, 0, 2 * Math.PI), t.closePath(), t.stroke();
                                else {
                                    t.beginPath();
                                    for (var a = 0; a < this.valuesCount; a++) s = this.getPointPosition(a, this.calculateCenterOffset(this.min + e * this.stepValue)), 0 === a ? t.moveTo(s.x, s.y) : t.lineTo(s.x, s.y);
                                    t.closePath(), t.stroke()
                                }
                            if (this.showLabels) {
                                if (t.font = W(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                    var h = t.measureText(i).width;
                                    t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - h / 2 - this.backdropPaddingX, o - this.fontSize / 2 - this.backdropPaddingY, h + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                }
                                t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(i, this.xCenter, o)
                            }
                        }
                    }, this), !this.lineArc) {
                    t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                    for (var i = this.valuesCount - 1; i >= 0; i--) {
                        if (this.angleLineWidth > 0) {
                            var e = this.getPointPosition(i, this.calculateCenterOffset(this.max));
                            t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(e.x, e.y), t.stroke(), t.closePath()
                        }
                        var s = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
                        t.font = W(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                        var o = this.labels.length,
                            a = this.labels.length / 2,
                            h = a / 2,
                            l = h > i || i > o - h,
                            r = i === h || i === o - h;
                        t.textAlign = 0 === i ? "center" : i === a ? "center" : a > i ? "left" : "right", t.textBaseline = r ? "middle" : l ? "bottom" : "top", t.fillText(this.labels[i], s.x, s.y)
                    }
                }
            }
        }
    }), s.addEvent(window, "resize", function() {
        var t;
        return function() {
            clearTimeout(t), t = setTimeout(function() {
                n(e.instances, function(t) {
                    t.options.responsive && t.resize(t.render, !0)
                })
            }, 50)
        }
    }()), p ? define(function() {
        return e
    }) : "object" == typeof module && module.exports && (module.exports = e), t.Chart = e, e.noConflict = function() {
        return t.Chart = i, e
    }
}).call(this),
    function() {
        "use strict";
        var t = this,
            i = t.Chart,
            e = i.helpers,
            s = {
                scaleBeginAtZero: !0,
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                barShowStroke: !0,
                barStrokeWidth: 2,
                barValueSpacing: 5,
                barDatasetSpacing: 1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        i.Type.extend({
            name: "Bar",
            defaults: s,
            initialize: function(t) {
                var s = this.options;
                this.ScaleClass = i.Scale.extend({
                    offsetGridLines: !0,
                    calculateBarX: function(t, i, e) {
                        var n = this.calculateBaseWidth(),
                            o = this.calculateX(e) - n / 2,
                            a = this.calculateBarWidth(t);
                        return o + a * i + i * s.barDatasetSpacing + a / 2
                    },
                    calculateBaseWidth: function() {
                        return this.calculateX(1) - this.calculateX(0) - 2 * s.barValueSpacing
                    },
                    calculateBarWidth: function(t) {
                        var i = this.calculateBaseWidth() - (t - 1) * s.barDatasetSpacing;
                        return i / t
                    }
                }), this.datasets = [], this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var i = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                    this.eachBars(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), e.each(i, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(i)
                }), this.BarClass = i.Rectangle.extend({
                    strokeWidth: this.options.barStrokeWidth,
                    showStroke: this.options.barShowStroke,
                    ctx: this.chart.ctx
                }), e.each(t.datasets, function(i) {
                    var s = {
                        label: i.label || null,
                        fillColor: i.fillColor,
                        strokeColor: i.strokeColor,
                        bars: []
                    };
                    this.datasets.push(s), e.each(i.data, function(e, n) {
                        s.bars.push(new this.BarClass({
                            value: e,
                            label: t.labels[n],
                            datasetLabel: i.label,
                            strokeColor: i.strokeColor,
                            fillColor: i.fillColor,
                            highlightFill: i.highlightFill || i.fillColor,
                            highlightStroke: i.highlightStroke || i.strokeColor
                        }))
                    }, this)
                }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(t, i, s) {
                    e.extend(t, {
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        x: this.scale.calculateBarX(this.datasets.length, s, i),
                        y: this.scale.endPoint
                    }), t.save()
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), e.each(this.activeElements, function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachBars(function(t) {
                    t.save()
                }), this.render()
            },
            eachBars: function(t) {
                e.each(this.datasets, function(i, s) {
                    e.each(i.bars, t, this, s)
                }, this)
            },
            getBarsAtEvent: function(t) {
                for (var i, s = [], n = e.getRelativePosition(t), o = function(t) {
                        s.push(t.bars[i])
                    }, a = 0; a < this.datasets.length; a++)
                    for (i = 0; i < this.datasets[a].bars.length; i++)
                        if (this.datasets[a].bars[i].inRange(n.x, n.y)) return e.each(this.datasets, o), s;
                return s
            },
            buildScale: function(t) {
                var i = this,
                    s = function() {
                        var t = [];
                        return i.eachBars(function(i) {
                            t.push(i.value)
                        }), t
                    },
                    n = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(t) {
                            var i = e.calculateScaleRange(s(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            e.extend(this, i)
                        },
                        xLabels: t,
                        font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && e.extend(n, {
                    calculateYRange: e.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new this.ScaleClass(n)
            },
            addData: function(t, i) {
                e.each(t, function(t, e) {
                    this.datasets[e].bars.push(new this.BarClass({
                        value: t,
                        label: i,
                        x: this.scale.calculateBarX(this.datasets.length, e, this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        base: this.scale.endPoint,
                        strokeColor: this.datasets[e].strokeColor,
                        fillColor: this.datasets[e].fillColor
                    }))
                }, this), this.scale.addXLabel(i), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), e.each(this.datasets, function(t) {
                    t.bars.shift()
                }, this), this.update()
            },
            reflow: function() {
                e.extend(this.BarClass.prototype, {
                    y: this.scale.endPoint,
                    base: this.scale.endPoint
                });
                var t = e.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function(t) {
                var i = t || 1;
                this.clear();
                this.chart.ctx;
                this.scale.draw(i), e.each(this.datasets, function(t, s) {
                    e.each(t.bars, function(t, e) {
                        t.hasValue() && (t.base = this.scale.endPoint, t.transition({
                            x: this.scale.calculateBarX(this.datasets.length, s, e),
                            y: this.scale.calculateY(t.value),
                            width: this.scale.calculateBarWidth(this.datasets.length)
                        }, i).draw())
                    }, this)
                }, this)
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            i = t.Chart,
            e = i.helpers,
            s = {
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 50,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        i.Type.extend({
            name: "Doughnut",
            defaults: s,
            initialize: function(t) {
                this.segments = [], this.outerRadius = (e.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = i.Arc.extend({
                    ctx: this.chart.ctx,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    e.each(this.segments, function(t) {
                        t.restore(["fillColor"])
                    }), e.each(i, function(t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(i)
                }), this.calculateTotal(t), e.each(t, function(t, i) {
                    this.addData(t, i, !0)
                }, this), this.render()
            },
            getSegmentsAtEvent: function(t) {
                var i = [],
                    s = e.getRelativePosition(t);
                return e.each(this.segments, function(t) {
                    t.inRange(s.x, s.y) && i.push(t)
                }, this), i
            },
            addData: function(t, i, e) {
                var s = i || this.segments.length;
                this.segments.splice(s, 0, new this.SegmentArc({
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                    innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    startAngle: 1.5 * Math.PI,
                    circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
                    label: t.label
                })), e || (this.reflow(), this.update())
            },
            calculateCircumference: function(t) {
                return 2 * Math.PI * (Math.abs(t) / this.total)
            },
            calculateTotal: function(t) {
                this.total = 0, e.each(t, function(t) {
                    this.total += Math.abs(t.value)
                }, this)
            },
            update: function() {
                this.calculateTotal(this.segments), e.each(this.activeElements, function(t) {
                    t.restore(["fillColor"])
                }), e.each(this.segments, function(t) {
                    t.save()
                }), this.render()
            },
            removeData: function(t) {
                var i = e.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(i, 1), this.reflow(), this.update()
            },
            reflow: function() {
                e.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.outerRadius = (e.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, e.each(this.segments, function(t) {
                    t.update({
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    })
                }, this)
            },
            draw: function(t) {
                var i = t ? t : 1;
                this.clear(), e.each(this.segments, function(t, e) {
                    t.transition({
                        circumference: this.calculateCircumference(t.value),
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    }, i), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === e && (t.startAngle = 1.5 * Math.PI), e < this.segments.length - 1 && (this.segments[e + 1].startAngle = t.endAngle)
                }, this)
            }
        }), i.types.Doughnut.extend({
            name: "Pie",
            defaults: e.merge(s, {
                percentageInnerCutout: 0
            })
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            i = t.Chart,
            e = i.helpers,
            s = {
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: !0,
                scaleShowVerticalLines: !0,
                bezierCurve: !0,
                bezierCurveTension: .4,
                pointDot: !0,
                pointDotRadius: 4,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        i.Type.extend({
            name: "Line",
            defaults: s,
            initialize: function(t) {
                this.PointClass = i.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx,
                    inRange: function(t) {
                        return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                    }
                }), this.datasets = [], this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), e.each(i, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(i)
                }), e.each(t.datasets, function(i) {
                    var s = {
                        label: i.label || null,
                        fillColor: i.fillColor,
                        strokeColor: i.strokeColor,
                        pointColor: i.pointColor,
                        pointStrokeColor: i.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(s), e.each(i.data, function(e, n) {
                        s.points.push(new this.PointClass({
                            value: e,
                            label: t.labels[n],
                            datasetLabel: i.label,
                            strokeColor: i.pointStrokeColor,
                            fillColor: i.pointColor,
                            highlightFill: i.pointHighlightFill || i.pointColor,
                            highlightStroke: i.pointHighlightStroke || i.pointStrokeColor
                        }))
                    }, this), this.buildScale(t.labels), this.eachPoints(function(t, i) {
                        e.extend(t, {
                            x: this.scale.calculateX(i),
                            y: this.scale.endPoint
                        }), t.save()
                    }, this)
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), e.each(this.activeElements, function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachPoints(function(t) {
                    t.save()
                }), this.render()
            },
            eachPoints: function(t) {
                e.each(this.datasets, function(i) {
                    e.each(i.points, t, this)
                }, this)
            },
            getPointsAtEvent: function(t) {
                var i = [],
                    s = e.getRelativePosition(t);
                return e.each(this.datasets, function(t) {
                    e.each(t.points, function(t) {
                        t.inRange(s.x, s.y) && i.push(t)
                    })
                }, this), i
            },
            buildScale: function(t) {
                var s = this,
                    n = function() {
                        var t = [];
                        return s.eachPoints(function(i) {
                            t.push(i.value)
                        }), t
                    },
                    o = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(t) {
                            var i = e.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            e.extend(this, i)
                        },
                        xLabels: t,
                        font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        showHorizontalLines: this.options.scaleShowHorizontalLines,
                        showVerticalLines: this.options.scaleShowVerticalLines,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && e.extend(o, {
                    calculateYRange: e.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new i.Scale(o)
            },
            addData: function(t, i) {
                e.each(t, function(t, e) {
                    this.datasets[e].points.push(new this.PointClass({
                        value: t,
                        label: i,
                        x: this.scale.calculateX(this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        strokeColor: this.datasets[e].pointStrokeColor,
                        fillColor: this.datasets[e].pointColor
                    }))
                }, this), this.scale.addXLabel(i), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), e.each(this.datasets, function(t) {
                    t.points.shift()
                }, this), this.update()
            },
            reflow: function() {
                var t = e.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function(t) {
                var i = t || 1;
                this.clear();
                var s = this.chart.ctx,
                    n = function(t) {
                        return null !== t.value
                    },
                    o = function(t, i, s) {
                        return e.findNextWhere(i, n, s) || t
                    },
                    a = function(t, i, s) {
                        return e.findPreviousWhere(i, n, s) || t
                    };
                this.scale.draw(i), e.each(this.datasets, function(t) {
                    var h = e.where(t.points, n);
                    e.each(t.points, function(t, e) {
                        t.hasValue() && t.transition({
                            y: this.scale.calculateY(t.value),
                            x: this.scale.calculateX(e)
                        }, i)
                    }, this), this.options.bezierCurve && e.each(h, function(t, i) {
                        var s = i > 0 && i < h.length - 1 ? this.options.bezierCurveTension : 0;
                        t.controlPoints = e.splineCurve(a(t, h, i), t, o(t, h, i), s), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
                    }, this), s.lineWidth = this.options.datasetStrokeWidth, s.strokeStyle = t.strokeColor, s.beginPath(), e.each(h, function(t, i) {
                        if (0 === i) s.moveTo(t.x, t.y);
                        else if (this.options.bezierCurve) {
                            var e = a(t, h, i);
                            s.bezierCurveTo(e.controlPoints.outer.x, e.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
                        } else s.lineTo(t.x, t.y)
                    }, this), s.stroke(), this.options.datasetFill && h.length > 0 && (s.lineTo(h[h.length - 1].x, this.scale.endPoint), s.lineTo(h[0].x, this.scale.endPoint), s.fillStyle = t.fillColor, s.closePath(), s.fill()), e.each(h, function(t) {
                        t.draw()
                    })
                }, this)
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            i = t.Chart,
            e = i.helpers,
            s = {
                scaleShowLabelBackdrop: !0,
                scaleBackdropColor: "rgba(255,255,255,0.75)",
                scaleBeginAtZero: !0,
                scaleBackdropPaddingY: 2,
                scaleBackdropPaddingX: 2,
                scaleShowLine: !0,
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        i.Type.extend({
            name: "PolarArea",
            defaults: s,
            initialize: function(t) {
                this.segments = [], this.SegmentArc = i.Arc.extend({
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    ctx: this.chart.ctx,
                    innerRadius: 0,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.scale = new i.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    lineArc: !0,
                    width: this.chart.width,
                    height: this.chart.height,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    valuesCount: t.length
                }), this.updateScaleRange(t), this.scale.update(), e.each(t, function(t, i) {
                    this.addData(t, i, !0)
                }, this), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    e.each(this.segments, function(t) {
                        t.restore(["fillColor"])
                    }), e.each(i, function(t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(i)
                }), this.render()
            },
            getSegmentsAtEvent: function(t) {
                var i = [],
                    s = e.getRelativePosition(t);
                return e.each(this.segments, function(t) {
                    t.inRange(s.x, s.y) && i.push(t)
                }, this), i
            },
            addData: function(t, i, e) {
                var s = i || this.segments.length;
                this.segments.splice(s, 0, new this.SegmentArc({
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    label: t.label,
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
                    circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                    startAngle: 1.5 * Math.PI
                })), e || (this.reflow(), this.update())
            },
            removeData: function(t) {
                var i = e.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(i, 1), this.reflow(), this.update()
            },
            calculateTotal: function(t) {
                this.total = 0, e.each(t, function(t) {
                    this.total += t.value
                }, this), this.scale.valuesCount = this.segments.length
            },
            updateScaleRange: function(t) {
                var i = [];
                e.each(t, function(t) {
                    i.push(t.value)
                });
                var s = this.options.scaleOverride ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                } : e.calculateScaleRange(i, e.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                e.extend(this.scale, s, {
                    size: e.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                })
            },
            update: function() {
                this.calculateTotal(this.segments), e.each(this.segments, function(t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                e.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.updateScaleRange(this.segments), this.scale.update(), e.extend(this.scale, {
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), e.each(this.segments, function(t) {
                    t.update({
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    })
                }, this)
            },
            draw: function(t) {
                var i = t || 1;
                this.clear(), e.each(this.segments, function(t, e) {
                    t.transition({
                        circumference: this.scale.getCircumference(),
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    }, i), t.endAngle = t.startAngle + t.circumference, 0 === e && (t.startAngle = 1.5 * Math.PI), e < this.segments.length - 1 && (this.segments[e + 1].startAngle = t.endAngle), t.draw()
                }, this), this.scale.draw()
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            i = t.Chart,
            e = i.helpers;
        i.Type.extend({
            name: "Radar",
            defaults: {
                scaleShowLine: !0,
                angleShowLineOut: !0,
                scaleShowLabels: !1,
                scaleBeginAtZero: !0,
                angleLineColor: "rgba(0,0,0,.1)",
                angleLineWidth: 1,
                pointLabelFontFamily: "'Arial'",
                pointLabelFontStyle: "normal",
                pointLabelFontSize: 10,
                pointLabelFontColor: "#666",
                pointDot: !0,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            },
            initialize: function(t) {
                this.PointClass = i.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx
                }), this.datasets = [], this.buildScale(t), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), e.each(i, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(i)
                }), e.each(t.datasets, function(i) {
                    var s = {
                        label: i.label || null,
                        fillColor: i.fillColor,
                        strokeColor: i.strokeColor,
                        pointColor: i.pointColor,
                        pointStrokeColor: i.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(s), e.each(i.data, function(e, n) {
                        var o;
                        this.scale.animation || (o = this.scale.getPointPosition(n, this.scale.calculateCenterOffset(e))), s.points.push(new this.PointClass({
                            value: e,
                            label: t.labels[n],
                            datasetLabel: i.label,
                            x: this.options.animation ? this.scale.xCenter : o.x,
                            y: this.options.animation ? this.scale.yCenter : o.y,
                            strokeColor: i.pointStrokeColor,
                            fillColor: i.pointColor,
                            highlightFill: i.pointHighlightFill || i.pointColor,
                            highlightStroke: i.pointHighlightStroke || i.pointStrokeColor
                        }))
                    }, this)
                }, this), this.render()
            },
            eachPoints: function(t) {
                e.each(this.datasets, function(i) {
                    e.each(i.points, t, this)
                }, this)
            },
            getPointsAtEvent: function(t) {
                var i = e.getRelativePosition(t),
                    s = e.getAngleFromPoint({
                        x: this.scale.xCenter,
                        y: this.scale.yCenter
                    }, i),
                    n = 2 * Math.PI / this.scale.valuesCount,
                    o = Math.round((s.angle - 1.5 * Math.PI) / n),
                    a = [];
                return (o >= this.scale.valuesCount || 0 > o) && (o = 0), s.distance <= this.scale.drawingArea && e.each(this.datasets, function(t) {
                    a.push(t.points[o])
                }), a
            },
            buildScale: function(t) {
                this.scale = new i.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    angleLineColor: this.options.angleLineColor,
                    angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                    pointLabelFontColor: this.options.pointLabelFontColor,
                    pointLabelFontSize: this.options.pointLabelFontSize,
                    pointLabelFontFamily: this.options.pointLabelFontFamily,
                    pointLabelFontStyle: this.options.pointLabelFontStyle,
                    height: this.chart.height,
                    width: this.chart.width,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    labels: t.labels,
                    valuesCount: t.datasets[0].data.length
                }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
            },
            updateScaleRange: function(t) {
                var i = function() {
                        var i = [];
                        return e.each(t, function(t) {
                            t.data ? i = i.concat(t.data) : e.each(t.points, function(t) {
                                i.push(t.value)
                            })
                        }), i
                    }(),
                    s = this.options.scaleOverride ? {
                        steps: this.options.scaleSteps,
                        stepValue: this.options.scaleStepWidth,
                        min: this.options.scaleStartValue,
                        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                    } : e.calculateScaleRange(i, e.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                e.extend(this.scale, s)
            },
            addData: function(t, i) {
                this.scale.valuesCount++, e.each(t, function(t, e) {
                    var s = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                    this.datasets[e].points.push(new this.PointClass({
                        value: t,
                        label: i,
                        x: s.x,
                        y: s.y,
                        strokeColor: this.datasets[e].pointStrokeColor,
                        fillColor: this.datasets[e].pointColor
                    }))
                }, this), this.scale.labels.push(i), this.reflow(), this.update()
            },
            removeData: function() {
                this.scale.valuesCount--, this.scale.labels.shift(), e.each(this.datasets, function(t) {
                    t.points.shift()
                }, this), this.reflow(), this.update()
            },
            update: function() {
                this.eachPoints(function(t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                e.extend(this.scale, {
                    width: this.chart.width,
                    height: this.chart.height,
                    size: e.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
            },
            draw: function(t) {
                var i = t || 1,
                    s = this.chart.ctx;
                this.clear(), this.scale.draw(), e.each(this.datasets, function(t) {
                    e.each(t.points, function(t, e) {
                        t.hasValue() && t.transition(this.scale.getPointPosition(e, this.scale.calculateCenterOffset(t.value)), i)
                    }, this), s.lineWidth = this.options.datasetStrokeWidth, s.strokeStyle = t.strokeColor, s.beginPath(), e.each(t.points, function(t, i) {
                        0 === i ? s.moveTo(t.x, t.y) : s.lineTo(t.x, t.y)
                    }, this), s.closePath(), s.stroke(), s.fillStyle = t.fillColor, s.fill(), e.each(t.points, function(t) {
                        t.hasValue() && t.draw()
                    })
                }, this)
            }
        })
    }.call(this);

// 幻灯插件(jQuery.DrSlider v0.9.4)
(function($) {
    var DrSlider = function(element, options) {
        this.width = undefined, this.height = undefined, this.parent_width = undefined, this.num_slides = 0;
        this.current_slide = undefined;
        this.$sliders = undefined;
        this.$very_current_slide = undefined;
        this.is_pause = false;
        this.play_timer = true;
        this.active_timer = false;
        this.on_transition = false;
        this._$progress_bar = undefined;
        this.all_transitions = ["slide-left", "slide-right", "slide-top", "slide-bottom", "fade", "split", "split3d", "door", "wave-left", "wave-right", "wave-top", "wave-bottom"];
        this.requestFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            return window.setTimeout(callback, 1000 / 60)
        };
        this.options = {
            width: undefined,
            height: undefined,
            userCSS: false,
            transitionSpeed: 1000,
            duration: 4000,
            showNavigation: true,
            classNavigation: undefined,
            navigationColor: "#9F1F22",
            navigationHoverColor: "#D52B2F",
            navigationHighlightColor: "#DFDFDF",
            navigationNumberColor: "#000000",
            positionNavigation: "out-center-bottom",
            navigationType: "number",
            showControl: true,
            classButtonNext: undefined,
            classButtonPrevious: undefined,
            controlColor: "#FFFFFF",
            controlBackgroundColor: "#000000",
            positionControl: "left-right",
            transition: "slide-left",
            showProgress: true,
            progressColor: "#797979",
            pauseOnHover: true,
            onReady: undefined
        };
        var css = '					<style id="devrama-css" type="text/css">					.devrama-slider,					.devrama-slider *,					.devrama-slider *::before,					.devrama-slider *::after{					 -webkit-box-sizing: border-box;					    -moz-box-sizing: border-box;					         box-sizing: border-box;					}					</style>					';
        if ($("#devrama-css").length == 0) {
            if ($("html>head").length > 0) {
                $("html>head").append(css)
            } else {
                $("body").append(css)
            }
        }
        $.extend(this.options, options);
        this.$ele = $(element);
        this.$ele.wrapInner('<div class="inner devrama-slider"><div class="projector"></div></div>');
        this.$ele_in = this.$ele.children(".inner:first");
        this.$ele_projector = this.$ele_in.children(".projector:first")
    };
    DrSlider.prototype = {
        _init: function() {
            var that = this;
            this._stopTimer(function() {
                that._prepare(function() {
                    if (typeof that.options.onReady == "function") {
                        that.options.onReady()
                    }
                    that._playSlide();
                    $(window).on("resize.DrSlider", function() {
                        that._resize()
                    })
                })
            });
            if (this.options.pauseOnHover) {
                this.$ele_in.on("mouseenter", function() {
                    that.is_pause = true;
                    that._showButtons()
                });
                this.$ele_in.on("mouseleave", function() {
                    that.is_pause = false;
                    that._hideButtons()
                })
            }
        },
        _getEndEvent: function(prop) {
            var vendors = "webkit Moz Ms o Khtml".split(" ");
            var len = vendors.length;
            if (prop in document.body.style) {
                return prop + "end"
            }
            prop = prop.charAt(0).toUpperCase() + prop.slice(1);
            for (var i = 0; i < vendors.length; i++) {
                if (vendors[i] + prop in document.body.style) {
                    return vendors[i] + prop + "End"
                }
            }
            return false
        },
        _animate: function(selector, from, to, duration, delay, callback, jQueryAnimation) {
            var $obj;
            if (!delay) {
                delay = 0
            }
            if (selector instanceof jQuery) {
                $obj = selector
            } else {
                $obj = $(selector)
            }
            if ($obj.length == 0) {
                if (typeof callback == "function") {
                    setTimeout(function() {
                        callback()
                    }, delay)
                }
                return
            }
            if (typeof duration != "number") {
                duration = 0
            }
            if (typeof delay != "number") {
                delay = 0
            }
            var event_end;
            if (jQueryAnimation) {
                event_end = false
            } else {
                event_end = this._getEndEvent("transition")
            }
            if (event_end !== false) {
                var from_delay = 0;
                if (from) {
                    $obj.css(from);
                    from_delay = 30
                }
                setTimeout(function() {
                    var transition = {
                        "-webkit-transition": "all " + duration + "ms ease " + delay + "ms",
                        "-moz-transition": "all " + duration + "ms ease " + delay + "ms",
                        "-o-transition": "all " + duration + "ms ease " + delay + "ms",
                        transition: "all " + duration + "ms ease " + delay + "ms"
                    };
                    var css = $.extend({}, transition, to);
                    $obj.css(css);
                    var fired = false;
                    $obj.one(event_end, function() {
                        $obj.css({
                            "-webkit-transition": "",
                            "-moz-transition": "",
                            "-o-transition": "",
                            transition: ""
                        });
                        if (typeof callback == "function") {
                            callback()
                        }
                    })
                }, from_delay)
            } else {
                setTimeout(function() {
                    if (from) {
                        $obj.css(from)
                    }
                    $obj.animate(to, duration, function() {
                        callback()
                    })
                }, delay)
            }
        },
        _prepare: function(callback) {
            var that = this;
            this.parent_width = this.$ele.parent().width();
            if (this.$ele.css("position") == "static") {
                this.$ele.css("position", "relative")
            }
            this.$ele.css({
                visibility: "hidden",
                width: "auto",
                height: "auto"
            });
            this.$ele_in.css({
                position: "relative",
                margin: "0 auto"
            });
            this.$ele_projector.css({
                position: "relative",
                overflow: "hidden"
            });
            var $sliders = this.$ele_projector.children("[class!=slider-progress]");
            $sliders.css({
                display: "none",
                position: "absolute",
                top: "0",
                left: "0"
            });
            this.$sliders = $sliders;
            this.num_slides = this.$sliders.length;
            var arr_all_images = [];
            this.$ele_projector.find("[data-lazy-src], [data-lazy-background]").each(function() {
                var image = $(this).data("lazy-src") || $(this).data("lazy-background");
                arr_all_images.push(image)
            });
            this._preloadImages(arr_all_images, function() {});
            this.$sliders.each(function() {
                var transparent_data = "data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
                if (!$(this).hasClass("slider-progress") && !$(this).hasClass("button-slider")) {
                    var images = [];
                    var has_main_image = true;
                    if ($(this).data("lazy-background")) {
                        $(this).addClass("primary-img background");
                        images.push($(this).data("lazy-background"))
                    } else {
                        if ($(this).data("lazy-src")) {
                            $(this).addClass("primary-img image");
                            $(this).css("vertical-align", "bottom");
                            $(this).attr("src", transparent_data);
                            images.push($(this).data("lazy-src"))
                        } else {
                            if ($(this).children().length == 1 && $(this).children("img").length == 1) {
                                $(this).children("img[data-lazy-src]:first").addClass("primary-img image")
                            } else {
                                has_main_image = false
                            }
                        }
                    }
                    $(this).find("[data-lazy-src]").each(function() {
                        $(this).css("vertical-align", "bottom");
                        $(this).attr("src", transparent_data);
                        images.push($(this).data("lazy-src"))
                    });
                    $(this).find("[data-lazy-background]").each(function() {
                        images.push($(this).data("lazy-background"))
                    });
                    $(this).data({
                        "has-main-image": has_main_image,
                        images: images
                    });
                    $(this).children("[data-pos]").css("display", "none")
                }
            });
            if (this.options.width && this.options.height) {
                var obj = {
                    width: this.options.width,
                    height: this.options.height
                };
                this.width = obj.width;
                this.height = obj.height;
                this.$ele_in.css(obj);
                this.$ele_projector.css(obj);
                if (that.num_slides > 1 && that.options.showControl) {
                    that._attachControl()
                }
                if (that.num_slides > 1 && that.options.showNavigation) {
                    that._attachNavigation()
                }
                if (that.options.classNavigation) {
                    that._attachUserNavigation()
                }
                if (that.options.classButtonPrevious || that.options.classButtonNext) {
                    that._attachUserControlEvent()
                }
                callback()
            } else {
                var first_img = new Image();
                first_img.onload = first_img.onerror = function() {
                    var obj = {
                        width: first_img.width,
                        height: first_img.height
                    };
                    that.width = obj.width;
                    that.height = obj.height;
                    that.$ele_in.css(obj);
                    that.$ele_projector.css(obj);
                    if (that.num_slides > 1 && that.options.showControl) {
                        that._attachControl()
                    }
                    if (that.num_slides > 1 && that.options.showNavigation) {
                        that._attachNavigation()
                    }
                    if (that.options.classNavigation) {
                        that._attachUserNavigation()
                    }
                    if (that.options.classButtonPrevious || that.options.classButtonNext) {
                        that._attachUserControlEvent()
                    }
                    callback()
                };
                first_img.src = this.$sliders.first().data("images")[0]
            }
        },
        _resetSize: function($element, new_width, new_height, callback) {
            var new_size = {
                width: new_width,
                height: new_height
            };
            var $target1, $target2;
            if ($element) {
                $target1 = $element;
                $target2 = $element.find(".primary-img:first");
                $prev_target1 = this.$ele_projector.children(".active.primary-img:first");
                $prev_target2 = this.$ele_projector.children(".active").find(".primary-img:first")
            } else {
                $target1 = this.$ele_projector.children(".active");
                $target2 = this.$ele_projector.children(".active").find(".primary-img:first")
            }
            $target1.css(new_size);
            $target2.css(new_size);
            if ($element) {
                if (this.width != new_width || this.height != new_height) {
                    $prev_target1.animate(new_size);
                    $prev_target2.animate(new_size);
                    this.$ele_in.css(new_size);
                    this.$ele_projector.animate(new_size, function() {
                        if (typeof callback == "function") {
                            callback()
                        }
                    })
                } else {
                    if (typeof callback == "function") {
                        callback()
                    }
                }
            } else {
                if (this.on_transition == true) {
                    this.$very_current_slide.css({
                        display: "block",
                        top: "0",
                        left: "0",
                        "z-index": "5",
                        width: new_width,
                        height: new_height
                    })
                }
                this.$ele_in.css(new_size);
                this.$ele_projector.css(new_size);
                if (typeof callback == "function") {
                    callback()
                }
            }
            this.width = new_width;
            this.height = new_height
        },
        _resize: function($element, callback) {
            var that = this;
            this.parent_width = this.$ele.parent().width();
            var new_width, new_height, original;
            if (this.options.width && this.options.height) {
                original = {
                    width: this.options.width,
                    height: this.options.height
                }
            } else {
                if (!$element) {
                    original = this.$ele_projector.children(".active").data("original")
                } else {
                    original = $element.data("original")
                }
            }
            if (original.width > that.parent_width) {
                new_width = that.parent_width;
                new_height = new_width * original.height / original.width
            } else {
                new_width = original.width;
                new_height = original.height
            }
            this._resetSize($element, new_width, new_height, callback)
        },
        _attachUserControlEvent: function() {
            var that = this;
            if (this.options.classButtonPrevious) {
                $("." + this.options.classButtonPrevious).on("click", function(e) {
                    e && e.preventDefault();
                    if (that.play_timer == false || that.on_transition == true) {
                        return
                    }
                    that._stopTimer(function() {
                        that._startTimer(function() {
                            that._prev()
                        })
                    })
                })
            }
            if (this.options.classButtonNext) {
                $("." + this.options.classButtonNext).on("click", function(e) {
                    e && e.preventDefault();
                    if (that.play_timer == false || that.on_transition == true) {
                        return
                    }
                    that._stopTimer(function() {
                        that._startTimer(function() {
                            that._next()
                        })
                    })
                })
            }
        },
        _attachUserNavigation: function() {
            var that = this;
            var $userNavigation = $("." + this.options.classNavigation).find("[data-index]");
            if ($userNavigation.length == 0) {
                $userNavigation = $("." + this.options.classNavigation).children()
            }
            $userNavigation.on("click", function(e) {
                e && e.preventDefault();
                if (that.play_timer == false || that.on_transition == true) {
                    return
                }
                $userNavigation.removeClass("active");
                $(this).addClass("active");
                var navigation_num;
                if ($(this).data("index") && $(this).data("index") != "") {
                    var slide_num = that.$ele_projector.children("[data-index='" + $(this).data("index") + "']").index();
                    if (slide_num > 0) {
                        navigation_num = slide_num
                    } else {
                        navigation_num = $(this).data("index")
                    }
                } else {
                    navigation_num = $(this).index()
                }
                if (navigation_num == that.current_slide) {
                    return
                }
                if (that.play_timer == false || that.on_transition == true) {
                    return
                }
                that._stopTimer(function() {
                    if (navigation_num > 0) {
                        that.current_slide = navigation_num - 1
                    } else {
                        that.current_slide = that.num_slides - 1
                    }
                    that._startTimer(function() {
                        that._next()
                    })
                })
            })
        },
        _updateNavigation: function() {
            var that = this;
            if (this.options.classNavigation) {
                $("." + this.options.classNavigation).find(".active").removeClass("active");
                var user_index = this.$sliders.eq(this.current_slide).data("index");
                if (typeof user_index != "undefined" && user_index != "") {
                    $("." + this.options.classNavigation).find("[data-index='" + user_index + "']").addClass("active")
                } else {
                    var nav_index = $("." + this.options.classNavigation).children().eq(this.current_slide).data("index");
                    if (!nav_index || nav_index == "") {
                        $("." + this.options.classNavigation).children().eq(this.current_slide).addClass("active")
                    }
                }
            }
            this.$ele_projector.next(".navigation").find(".nav-link").removeClass("active");
            this.$ele_projector.next(".navigation").find(".nav-link.index" + this.current_slide).addClass("active");
            if (!this.options.userCSS) {
                this.$ele_projector.next(".navigation").find(".nav-link").css({
                    "background-color": this.options.navigationColor
                });
                this.$ele_projector.next(".navigation").find(".nav-link.index" + this.current_slide).css({
                    "background-color": this.options.navigationHighlightColor
                })
            }
        },
        _attachNavigation: function() {
            if (this.num_slides < 2) {
                return
            }
            var that = this;
            var navigation_html = "";
            for (var i = 0; i < this.num_slides; i++) {
                navigation_html += '<span class="nav-link index' + i + '" data-num="' + i + '">' + (i + 1) + "</span>"
            }
            this.$ele_projector.after('<div class="navigation devrama-slider"><div class="inner">' + navigation_html + "</div></div>");
            var pos_nav = this.options.positionNavigation;
            var $navigation = this.$ele_projector.next(".navigation");
            var $nav_link = $navigation.find(".nav-link");
            $navigation.css({
                "font-size": "12px",
                "z-index": "3",
                "user-select": "none"
            });
            if (!this.options.userCSS) {
                $nav_link.css({
                    display: "inline-block",
                    width: this.options.navigationType != "number" ? "13px" : "",
                    height: this.options.navigationType != "number" ? "13px" : "",
                    padding: "0.2em",
                    "font-size": "12px",
                    "vertical-align": "bottom",
                    cursor: "pointer",
                    color: this.options.navigationNumberColor,
                    "text-align": "center",
                    "text-indent": this.options.navigationType != "number" ? "-10000em" : "",
                    width: this.options.navigationType == "number" ? $nav_link.innerHeight() + "px" : "13px",
                    border: "0px solid transparent",
                    "border-radius": this.options.navigationType == "circle" ? "50%" : "",
                    "margin-top": (pos_nav == "in-left-middle" || pos_nav == "in-right-middle") ? "5px" : "",
                    "margin-left": (pos_nav != "in-left-middle" && pos_nav != "in-right-middle") ? "5px" : ""
                });
                $navigation.find(".nav-link:first").css({
                    "margin-top": "0",
                    "margin-left": "0"
                });
                $navigation.find(".nav-link:last").css({
                    "margin-bottom": "0",
                    "margin-right": "0"
                });
                if (this.options.positionNavigation == "in-left-middle" || this.options.positionNavigation == "in-right-middle") {
                    $navigation.children(".inner").css({
                        width: $nav_link.outerWidth(true) + "px"
                    })
                } else {
                    var inner_width = 0;
                    $nav_link.each(function() {
                        inner_width += $(this).outerWidth(true)
                    });
                    $navigation.children(".inner").css({
                        width: inner_width + "px"
                    })
                }
                var nav_css_additional = {};
                var nav_height = $navigation.outerHeight();
                switch (this.options.positionNavigation) {
                    case "out-center-top":
                    case "out-left-top":
                    case "out-right-top":
                        $navigation.css("margin", "5px 0");
                        this.$ele.css("padding-top", (nav_height + 10) + "px");
                        nav_css_additional.top = (-1 * (nav_height + 10)) + "px";
                        break;
                    case "out-center-bottom":
                    case "out-left-bottom":
                    case "out-right-bottom":
                        nav_css_additional.top = "100%";
                        $navigation.css("margin", "5px 0");
                        this.$ele.css("padding-bottom", (nav_height + 10) + "px");
                        break;
                    case "in-center-top":
                    case "in-left-top":
                    case "in-right-top":
                        nav_css_additional.top = "20px";
                        break;
                    case "in-center-bottom":
                    case "in-left-bottom":
                    case "in-right-bottom":
                    case "out-right-bottom":
                        nav_css_additional.bottom = "20px";
                        break;
                    case "in-left-middle":
                    case "in-right-middle":
                        nav_css_additional.top = "50%";
                        nav_css_additional["margin-top"] = (-1 * nav_height / 2) + "px";
                        break
                }
                switch (this.options.positionNavigation) {
                    case "out-left-top":
                    case "out-left-bottom":
                    case "in-left-top":
                    case "in-left-bottom":
                    case "in-left-middle":
                        nav_css_additional.left = "20px";
                        break;
                    case "out-center-top":
                    case "out-center-bottom":
                    case "in-center-top":
                    case "in-center-bottom":
                        nav_css_additional.left = "50%";
                        if (inner_width) {
                            nav_css_additional["margin-left"] = (-1 * inner_width / 2) + "px"
                        }
                        break;
                    case "out-right-top":
                    case "out-right-bottom":
                    case "in-right-top":
                    case "in-right-bottom":
                    case "in-right-middle":
                        nav_css_additional.right = "20px";
                        break
                }
                var nav_css = {
                    position: "absolute",
                    "z-index": "3"
                };
                $.extend(nav_css, nav_css_additional);
                $navigation.css(nav_css);
                $nav_link.css({
                    "background-color": that.options.navigationColor
                });
                $navigation.find(".nav-link:first").css({
                    "background-color": that.options.navigationHighlightColor
                });
                $nav_link.hover(function() {
                    $(this).css({
                        "background-color": that.options.navigationHoverColor
                    })
                }, function() {
                    $(this).css({
                        "background-color": $(this).data("num") == that.current_slide ? that.options.navigationHighlightColor : that.options.navigationColor
                    })
                })
            }
            $nav_link.on("click", function(e) {
                e && e.preventDefault();
                var navigation = this;
                var navigation_num = $(navigation).data("num");
                if (navigation_num == that.current_slide) {
                    return
                }
                if (that.play_timer == false || that.on_transition == true) {
                    return
                }
                that._stopTimer(function() {
                    if (navigation_num > 0) {
                        that.current_slide = navigation_num - 1
                    } else {
                        that.current_slide = that.num_slides - 1
                    }
                    that._startTimer(function() {
                        that._next()
                    })
                })
            })
        },
        _attachControl: function() {
            var that = this;
            this.$ele_in.append('<div class="button-previous button-slider">&lsaquo;</div>');
            this.$ele_in.append('<div class="button-next button-slider">&rsaquo;</div>');
            this.$ele_in.children(".button-slider").css({
                display: "none",
                "z-index": "10",
                "user-select": "none"
            });
            if (!this.options.userCSS) {
                this.$ele_in.children(".button-slider").css({
                    position: "absolute",
                    color: this.options.controlColor,
                    "font-size": "50px",
                    "font-family": '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    "line-height": "0.65em",
                    "text-align": "center",
                    "background-color": this.options.controlBackgroundColor,
                    opacity: "0.5",
                    width: "40px",
                    height: "40px",
                    "border-radius": "50%",
                    cursor: "pointer"
                });
                var css_previous, css_next;
                switch (this.options.positionControl) {
                    case "left-right":
                        css_previous = {
                            left: "10px",
                            top: "50%",
                            "margin-top": "-20px"
                        };
                        css_next = {
                            right: "10px",
                            top: "50%",
                            "margin-top": "-20px"
                        };
                        break;
                    case "top-center":
                        css_previous = {
                            left: "50%",
                            top: "10px",
                            "margin-left": "-50px"
                        };
                        css_next = {
                            left: "50%",
                            top: "10px",
                            "margin-left": "10px"
                        };
                        break;
                    case "bottom-center":
                        css_previous = {
                            left: "50%",
                            bottom: "10px",
                            "margin-left": "-50px"
                        };
                        css_next = {
                            left: "50%",
                            bottom: "10px",
                            "margin-left": "10px"
                        };
                        break;
                    case "top-left":
                        css_previous = {
                            left: "10px",
                            top: "10px"
                        };
                        css_next = {
                            left: "70px",
                            top: "10px"
                        };
                        break;
                    case "top-right":
                        css_previous = {
                            right: "70px",
                            top: "10px"
                        };
                        css_next = {
                            right: "10px",
                            top: "10px"
                        };
                        break;
                    case "bottom-left":
                        css_previous = {
                            left: "10px",
                            bottom: "10px"
                        };
                        css_next = {
                            left: "70px",
                            bottom: "10px"
                        };
                        break;
                    case "bottom-right":
                        css_previous = {
                            right: "70px",
                            bottom: "10px"
                        };
                        css_next = {
                            right: "10px",
                            bottom: "10px"
                        };
                        break
                }
                this.$ele_in.children(".button-previous").css(css_previous);
                this.$ele_in.children(".button-next").css(css_next)
            }
            this.$ele_in.children(".button-previous").on("click", function(e) {
                e && e.preventDefault();
                if (that.play_timer == false || that.on_transition == true) {
                    return
                }
                that._stopTimer(function() {
                    that._startTimer(function() {
                        that._prev(function() {
                            that.is_pause = true
                        })
                    })
                })
            });
            this.$ele_in.children(".button-next").on("click", function(e) {
                e && e.preventDefault();
                if (that.play_timer == false || that.on_transition == true) {
                    return
                }
                that._stopTimer(function() {
                    that._startTimer(function() {
                        that._next(function() {
                            that.is_pause = true
                        })
                    })
                })
            })
        },
        _showProgress: function(percent) {
            var that = this;
            if (!this.options.showProgress) {
                return
            }
            if (this.$ele_in.children(".slider-progress").length == 0) {
                this.$ele_in.append('<div class="slider-progress"><div class="bar"></div></div>');
                this._$progress_bar = this.$ele_in.find(".slider-progress:first .bar");
                this.$ele_in.children(".slider-progress").css({
                    "z-index": "4"
                });
                this._$progress_bar.css({
                    height: "100%"
                });
                if (!this.options.userCSS) {
                    this.$ele_in.children(".slider-progress").css({
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        height: "1.5%",
                        width: "100%",
                        "background-color": "transparent",
                        opacity: "0.7"
                    });
                    this._$progress_bar.css({
                        width: "0%",
                        "background-color": this.options.progressColor
                    })
                }
            }
            if (typeof percent != "undefined") {
                this._$progress_bar.css("width", percent + "%")
            }
        },
        _showButtons: function() {
            this.$ele_in.children(".button-slider").fadeIn()
        },
        _hideButtons: function() {
            this.$ele_in.children(".button-slider").fadeOut()
        },
        _playSlide: function() {
            var that = this;
            if (this.num_slides > 1) {
                this._startTimer(function() {
                    that._next()
                })
            } else {
                this._next()
            }
        },
        _stopTimer: function(callback) {
            var that = this;
            this.play_timer = false;
            var timer = setInterval(function() {
                if (that.active_timer == false) {
                    clearInterval(timer);
                    if (typeof callback == "function") {
                        callback()
                    }
                }
            }, 100)
        },
        _startTimer: function(callback) {
            var that = this;
            this.play_timer = true;
            this.active_timer = true;
            var start_time = (new Date()).getTime();
            var end_time = start_time + that.options.duration;
            var elapsed_time = 0;
            this._showProgress(0);
            callback();
            var frame = function() {
                if (that.play_timer == false) {
                    that._showProgress(0);
                    that.active_timer = false;
                    return false
                }
                var current_time = (new Date()).getTime();
                if (that.is_pause == true || that.on_transition) {
                    if (elapsed_time == 0) {
                        elapsed_time = current_time - start_time
                    }
                    that.requestFrame.call(window, frame)
                } else {
                    if (elapsed_time > 0) {
                        start_time = current_time - elapsed_time;
                        end_time = start_time + that.options.duration;
                        elapsed_time = 0
                    }
                    if (current_time > end_time) {
                        that._showProgress(100);
                        start_time = (new Date()).getTime();
                        end_time = start_time + that.options.duration;
                        that._next(function() {
                            that._showProgress(0)
                        })
                    } else {
                        var percent = ((current_time - start_time) / that.options.duration) * 100;
                        that._showProgress(percent)
                    }
                    that.requestFrame.call(window, frame)
                }
            };
            frame()
        },
        _isLoadedImages: function(arr_images, callback, index, arr_size) {
            if (typeof arr_images == "undefined" || arr_images.length < 1) {
                if (typeof callback == "function") {
                    callback()
                }
                return
            }
            if (typeof index == "undefined") {
                index = 0
            }
            if (typeof arr_size == "undefined") {
                arr_size = []
            }
            var that = this;
            var src = arr_images[index];
            var img = new Image();
            img.onload = img.onerror = function() {
                arr_size.push({
                    width: img.width,
                    height: img.height
                });
                if (index == arr_images.length - 1 && typeof callback == "function") {
                    callback(arr_size)
                } else {
                    that._isLoadedImages(arr_images, callback, ++index, arr_size)
                }
            };
            img.src = src
        },
        _preloadImages: function(arr_images, callback) {
            this._isLoadedImages(arr_images, callback)
        },
        _next: function(callback) {
            var that = this;
            this.on_transition = true;
            this.is_pause = true;
            var $element;
            if (typeof this.current_slide == "undefined") {
                this.current_slide = 0;
                $element = this.$sliders.eq(0)
            } else {
                if (this.current_slide < this.num_slides - 1) {
                    this.current_slide++
                } else {
                    this.current_slide = 0
                }
                $element = this.$sliders.eq(this.current_slide)
            }
            that._prev_next_process($element, callback)
        },
        _prev: function(callback) {
            var that = this;
            this.on_transition = true;
            this.is_pause = true;
            var $element;
            if (this.current_slide > 0) {
                this.current_slide--
            } else {
                this.current_slide = this.num_slides - 1
            }
            $element = this.$sliders.eq(this.current_slide);
            that._prev_next_process($element, callback)
        },
        _prev_next_process: function($element, callback) {
            this.$very_current_slide = $element;
            var that = this;
            var first_image_src = $element.data("images")[0];
            this._isLoadedImages($element.data("images"), function(arr_size) {
                that.is_pause = false;
                that.$ele.css("visibility", "visible");
                if ($element.data("has-main-image")) {
                    $element.data("original", {
                        width: arr_size[0].width,
                        height: arr_size[0].height
                    })
                } else {
                    var original_width, original_height;
                    if (that.options.width && that.options.height) {
                        original_width = that.options.width;
                        original_height = that.options.height
                    } else {
                        var $active = that.$ele_projector.children(".active");
                        original_width = $active.outerWidth(true);
                        original_height = $active.outerHeight(true)
                    }
                    $element.data("original", {
                        width: original_width,
                        height: original_height
                    })
                }
                if (typeof callback == "function") {
                    callback()
                }
                that._resize($element, function() {
                    that._updateNavigation();
                    if ($element.find("[data-pos]").length > 0) {
                        that._showAnimation($element, function() {})
                    } else {
                        that._showImage($element, function() {})
                    }
                })
            })
        },
        _showImage: function($element, callback) {
            var that = this;
            var transition = $element.data("transition") ? $element.data("transition") : this.options.transition;
            this._transition($element, transition, function() {
                that.on_transition = false;
                if (typeof callback == "function") {
                    callback()
                }
            })
        },
        _showAnimation: function($element, callback, callback_ani) {
            var that = this;
            var transition = $element.data("transition") ? $element.data("transition") : this.options.transition;
            this._transition($element, transition, function() {
                that.on_transition = false;
                if (typeof callback == "function") {
                    callback()
                }
                var arr_img_element = [];
                $element.children("[data-pos]").each(function() {
                    var pos = $(this).data("pos");
                    if (typeof pos == "string") {
                        pos = $(this).data("pos").replace(/[\s\[\]\']/g, "").split(",")
                    }
                    if (pos.length >= 2) {
                        $(this).css({
                            display: "none",
                            position: "absolute",
                            top: pos[0],
                            left: pos[1]
                        })
                    }
                    arr_img_element.push(this)
                });
                that._playAnimation(arr_img_element, function() {
                    if (typeof callback_ani == "function") {
                        callback_ani()
                    }
                })
            })
        },
        _transition_prepare: function($element) {
            var that = this;
            if ($element.data("lazy-src")) {
                $element.attr("src", $element.data("lazy-src"))
            }
            if ($element.data("lazy-background") && $element.children(".lazy-background").length == 0) {
                var html = '<img src="' + $element.data("lazy-background") + '" class="lazy-background"/>';
                $(html).prependTo($element).css({
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    "z-index": "-1"
                })
            }
            $element.find("[data-lazy-src]").each(function() {
                $(this).attr("src", $(this).data("lazy-src"))
            });
            $element.find("[data-lazy-background]").each(function() {
                $(this).css("background-image", "url(" + $(this).data("lazy-background") + ")")
            })
        },
        _transition: function($element, transition, callback) {
            var that = this;
            var $active = this.$ele_projector.children(".active:first");
            var reset = function() {
                $active.css({
                    display: "none",
                    top: "0%",
                    left: "0%"
                });
                $active.css("z-index", "");
                $active.children("[data-pos]").css("display", "none");
                $active.removeClass("active");
                $element.css({
                    display: "block",
                    top: "0%",
                    left: "0%",
                    "z-index": ""
                });
                $element.addClass("active")
            };
            if (transition == "random") {
                transition = this.all_transitions[Math.floor(Math.random() * this.all_transitions.length)]
            }
            transition = transition.replace(/-/g, "_");
            var transition_func = eval("this._transition_" + transition);
            if (typeof transition_func == "function") {
                this._transition_prepare($element);
                transition_func.call(this, $element, this.options.transitionSpeed, function() {
                    reset();
                    callback()
                })
            } else {
                this._transition_prepare($element);
                this._transition_slide($element, this.options.transitionSpeed, function() {
                    reset();
                    callback()
                })
            }
        },
        _transition_slide_left: function($element, duration, callback) {
            this._transition_slide($element, duration, callback, "left")
        },
        _transition_slide_right: function($element, duration, callback) {
            this._transition_slide($element, duration, callback, "right")
        },
        _transition_slide_top: function($element, duration, callback) {
            this._transition_slide($element, duration, callback, "top")
        },
        _transition_slide_bottom: function($element, duration, callback) {
            this._transition_slide($element, duration, callback, "bottom")
        },
        _transition_slide: function($element, duration, callback, direction) {
            var that = this;
            if (this.$ele_projector.children(".active").length == 0) {
                $element.css({
                    display: "block",
                    top: "0%",
                    left: "0%"
                });
                $element.addClass("active");
                if (typeof callback != "undefined") {
                    callback()
                }
                return
            } else {
                if (typeof direction == "undefined") {
                    direction = "left"
                }
                var pos_from_top, pos_from_left, pos_to_top, pos_to_left;
                switch (direction) {
                    case "left":
                        pos_from_top = "0%";
                        pos_from_left = "100%";
                        pos_to_top = "0%";
                        pos_to_left = "-100%";
                        break;
                    case "right":
                        pos_from_top = "0%";
                        pos_from_left = "-100%";
                        pos_to_top = "0%";
                        pos_to_left = "100%";
                        break;
                    case "top":
                        pos_from_top = "100%";
                        pos_from_left = "0%";
                        pos_to_top = "-100%";
                        pos_to_left = "0%";
                        break;
                    case "bottom":
                        pos_from_top = "-100%";
                        pos_from_left = "0%";
                        pos_to_top = "100%";
                        pos_to_left = "0%";
                        break
                }
                this.$ele_projector.append('<div class="slide-old" style="display: none;"></div>');
                this.$ele_projector.append('<div class="slide-new" style="display: none;"></div>');
                this.$ele_projector.children(".active:first").clone().appendTo(this.$ele_projector.children(".slide-old")).removeClass("active");
                $element.clone().appendTo(this.$ele_projector.children(".slide-new")).removeClass("active");
                var $slide_old = this.$ele_projector.children(".slide-old");
                var $slide_new = this.$ele_projector.children(".slide-new");
                setTimeout(function() {
                    $slide_old.css({
                        display: "block",
                        position: "absolute",
                        overflow: "hidden",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        "z-index": "2"
                    });
                    $slide_new.css({
                        display: "block",
                        position: "absolute",
                        overflow: "hidden",
                        top: pos_from_top,
                        left: pos_from_left,
                        width: "100%",
                        height: "100%",
                        "z-index": "2"
                    });
                    $slide_old.children().show();
                    $slide_new.children().show();
                    that._animate($slide_old, null, {
                        top: pos_to_top,
                        left: pos_to_left
                    }, duration, null, function() {
                        $slide_old.remove()
                    });
                    that._animate($slide_new, null, {
                        top: "0%",
                        left: "0%"
                    }, duration, null, function() {
                        $slide_new.remove();
                        if (typeof callback == "function") {
                            callback()
                        }
                    })
                }, 30)
            }
        },
        _transition_fade: function($element, duration, callback) {
            var that = this;
            if (this.$ele_projector.children(".active").length == 0) {
                $element.css({
                    display: "block",
                    left: "0%"
                });
                $element.addClass("active");
                if (typeof callback != "undefined") {
                    callback()
                }
                return
            } else {
                this.$ele_projector.append('<div class="fade-old" style="display:none;"></div>');
                this.$ele_projector.append('<div class="fade-new" style="display:none;"></div>');
                this.$ele_projector.children(".active:first").clone().appendTo(this.$ele_projector.children(".fade-old")).removeClass("active");
                $element.clone().appendTo(this.$ele_projector.children(".fade-new")).removeClass("active");
                var $fade_old = this.$ele_projector.children(".fade-old");
                var $fade_new = this.$ele_projector.children(".fade-new");
                setTimeout(function() {
                    $fade_old.children().show();
                    $fade_new.children().show();
                    that._animate($fade_old, {
                        display: "block",
                        position: "absolute",
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        "z-index": "2"
                    }, {
                        opacity: "0"
                    }, duration, null, function() {
                        $fade_old.remove()
                    });
                    that._animate($fade_new, {
                        display: "block",
                        position: "absolute",
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        "z-index": "2",
                        opacity: "0"
                    }, {
                        opacity: "1"
                    }, duration, null, function() {
                        $fade_new.remove();
                        if (typeof callback == "function") {
                            callback()
                        }
                    })
                }, 30)
            }
        },
        _transition_split3d: function($element, duration, callback) {
            this._transition_split($element, duration, callback, true)
        },
        _transition_split: function($element, duration, callback, enable3d) {
            var that = this;
            if (this.$ele_projector.children(".active").length == 0) {
                $element.css({
                    display: "block",
                    left: "0%"
                });
                $element.addClass("active");
                if (typeof callback != "undefined") {
                    callback()
                }
                return
            } else {
                this.$ele_projector.append('<div class="split_up" style="display: none;"></div>');
                this.$ele_projector.append('<div class="split_down" style="display: none;"></div>');
                this.$ele_projector.children(".active:first").clone().appendTo(this.$ele_projector.children(".split_up")).removeClass("active");
                this.$ele_projector.children(".active:first").clone().appendTo(this.$ele_projector.children(".split_down")).removeClass("active");
                var $split_up = this.$ele_projector.children(".split_up");
                var $split_down = this.$ele_projector.children(".split_down");
                setTimeout(function() {
                    $split_up.children().css({
                        top: "0",
                        left: "0",
                        height: that.$ele_projector.height() + "px"
                    });
                    $split_down.children().css({
                        top: "auto",
                        bottom: "0",
                        left: "0",
                        height: that.$ele_projector.height() + "px",
                        "background-position": "bottom left"
                    });
                    $element.css({
                        left: "0%",
                        display: "block"
                    });
                    that.$ele_projector.children(".active:first").css("display", "none");
                    $css_split_up = {
                        top: "-50%",
                        opacity: "0"
                    };
                    $css_split_down = {
                        bottom: "-50%",
                        opacity: "0"
                    };
                    if (typeof enable3d != "undefined" && enable3d == true) {
                        var deg = 10;
                        if (that.current_slide % 2 == 0) {
                            deg = -1 * deg
                        }
                        that.$ele_projector.css({
                            perspective: "400px"
                        });
                        $.extend($css_split_up, {
                            transform: "rotateZ(" + deg + "deg) translateZ(238px)"
                        });
                        $.extend($css_split_down, {
                            transform: "rotateZ(" + (-1 * deg) + "deg) translateZ(238px)"
                        })
                    }
                    that._animate($split_up, {
                        display: "block",
                        position: "absolute",
                        overflow: "hidden",
                        "z-index": "2",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: that.$ele_projector.height() / 2 + "px",
                        opacity: "1"
                    }, $css_split_up, duration, null, null);
                    that._animate($split_down, {
                        display: "block",
                        position: "absolute",
                        overflow: "hidden",
                        "z-index": "2",
                        bottom: "0",
                        left: "0",
                        width: "100%",
                        height: that.$ele_projector.height() / 2 + "px",
                        opacity: "1"
                    }, $css_split_down, duration, null, function() {
                        $split_up.remove();
                        $split_down.remove();
                        if (typeof callback == "function") {
                            callback()
                        }
                    })
                }, 30)
            }
        },
        _transition_door: function($element, duration, callback) {
            var that = this;
            if (this.$ele_projector.children(".active").length == 0) {
                $element.css({
                    display: "block",
                    left: "0%"
                });
                $element.addClass("active");
                if (typeof callback != "undefined") {
                    callback()
                }
                return
            } else {
                this.$ele_projector.append('<div class="split_left" style="display: none;"></div>');
                this.$ele_projector.append('<div class="split_right" style="display: none;"></div>');
                this.$ele_projector.children(".active:first").clone().appendTo(this.$ele_projector.children(".split_left")).removeClass("active");
                this.$ele_projector.children(".active:first").clone().appendTo(this.$ele_projector.children(".split_right")).removeClass("active");
                var $split_left = this.$ele_projector.children(".split_left");
                var $split_right = this.$ele_projector.children(".split_right");
                setTimeout(function() {
                    $split_left.children().css({
                        top: "0",
                        left: "0",
                        width: that.$ele_projector.width() + "px"
                    });
                    $split_right.children().css({
                        top: "0",
                        left: "auto",
                        right: "0",
                        width: that.$ele_projector.width() + "px",
                        "background-position": "top right"
                    });
                    $element.css({
                        left: "0%",
                        display: "block"
                    });
                    that.$ele_projector.children(".active:first").css("display", "none");
                    that._animate($split_left, {
                        display: "block",
                        position: "absolute",
                        overflow: "hidden",
                        "z-index": "2",
                        top: "0",
                        left: "0",
                        width: that.$ele_projector.width() / 2 + "px",
                        height: "100%"
                    }, {
                        left: "-50%"
                    }, duration, null, function() {
                        $split_left.remove()
                    });
                    that._animate($split_right, {
                        display: "block",
                        position: "absolute",
                        overflow: "hidden",
                        "z-index": "2",
                        top: "0",
                        right: "0",
                        width: that.$ele_projector.width() / 2 + "px",
                        height: "100%"
                    }, {
                        right: "-50%"
                    }, duration, null, function() {
                        $split_right.remove();
                        if (typeof callback == "function") {
                            callback()
                        }
                    })
                }, 30)
            }
        },
        _transition_wave_left: function($element, duration, callback) {
            this._transition_wave($element, duration, callback, "left")
        },
        _transition_wave_right: function($element, duration, callback) {
            this._transition_wave($element, duration, callback, "right")
        },
        _transition_wave_top: function($element, duration, callback) {
            this._transition_wave($element, duration, callback, "top")
        },
        _transition_wave_bottom: function($element, duration, callback) {
            this._transition_wave($element, duration, callback, "bottom")
        },
        _transition_wave: function($element, duration, callback, direction) {
            var that = this;
            if (this.$ele_projector.children(".active").length == 0) {
                $element.css({
                    display: "block",
                    left: "0%"
                });
                $element.addClass("active");
                if (typeof callback != "undefined") {
                    callback()
                }
                return
            } else {
                this.$ele_projector.append('<div class="split_wave" style="display: none;"></div>');
                $element.clone().appendTo(this.$ele_projector.children(".split_wave")).removeClass("active");
                var $split_wave = this.$ele_projector.children(".split_wave");
                if (typeof direction == "undefined") {
                    direction = "left"
                }
                var to_css;
                switch (direction) {
                    case "left":
                        $split_wave.children().css({
                            left: "0",
                            right: "",
                            top: "",
                            bottom: ""
                        });
                        $split_wave.css({
                            top: "0",
                            left: "0",
                            width: "0%",
                            height: "100%"
                        });
                        to_css = {
                            width: "100%",
                            opacity: "1"
                        };
                        break;
                    case "right":
                        $split_wave.children().css({
                            left: "",
                            right: "0",
                            top: "",
                            bottom: ""
                        });
                        $split_wave.css({
                            top: "0",
                            right: "0",
                            width: "0%",
                            height: "100%"
                        });
                        to_css = {
                            width: "100%",
                            opacity: "1"
                        };
                        break;
                    case "top":
                        $split_wave.children().css({
                            left: "",
                            right: "",
                            top: "0",
                            bottom: ""
                        });
                        $split_wave.css({
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "0%"
                        });
                        to_css = {
                            height: "100%",
                            opacity: "1"
                        };
                        break;
                    case "bottom":
                        $split_wave.children().css({
                            left: "",
                            right: "",
                            top: "",
                            bottom: "0"
                        });
                        $split_wave.css({
                            bottom: "0",
                            left: "0",
                            width: "100%",
                            height: "0%"
                        });
                        to_css = {
                            height: "100%",
                            opacity: "1"
                        };
                        break
                }
                $split_wave.children().show();
                setTimeout(function() {
                    var jQueryAnimation = false;
                    if (direction == "right" || direction == "bottom") {
                        jQueryAnimation = true
                    }
                    that._animate($split_wave, {
                        display: "block",
                        position: "absolute",
                        overflow: "hidden",
                        "z-index": "2",
                        opacity: "0.3"
                    }, to_css, duration, null, function() {
                        $split_wave.remove();
                        if (typeof callback == "function") {
                            callback()
                        }
                    }, jQueryAnimation)
                }, 30)
            }
        },
        _playAnimation: function(arr_img_element, callback) {
            var that = this;
            var $img_element = $(arr_img_element.shift());
            switch ($img_element.data("effect")) {
                case "fadein":
                    this._animate($img_element, {
                        display: "block",
                        opacity: "0"
                    }, {
                        opacity: "1"
                    }, $img_element.data("duration") ? $img_element.data("duration") : 400, $img_element.data("delay") ? $img_element.data("delay") : null, function() {
                        if (arr_img_element.length > 0) {
                            that._playAnimation(arr_img_element, callback)
                        } else {
                            callback()
                        }
                    });
                    break;
                case "move":
                    $img_element.css({
                        display: "block"
                    });
                    var pos = $img_element.data("pos");
                    if (typeof pos == "string") {
                        pos = $img_element.data("pos").replace(/[\s\[\]\']/g, "").split(",")
                    }
                    if (pos.length == 4) {
                        this._animate($img_element, {
                            opacity: "0"
                        }, {
                            top: pos[2],
                            left: pos[3],
                            opacity: 1
                        }, $img_element.data("duration") ? $img_element.data("duration") : 400, $img_element.data("delay") ? $img_element.data("delay") : null, function() {
                            if (arr_img_element.length > 0) {
                                that._playAnimation(arr_img_element, callback)
                            } else {
                                callback()
                            }
                        })
                    }
                    break
            }
        }
    };
    $.fn.DrSlider = function(options) {
        if (typeof options === "string") {
            var data = $this.data("DrSlider");
            if (!data) {
                $this.data("DrSlider", (data = new DrSlider(this, options)))
            }
            return data[options].apply(data, Array.prototype.slice.call(arguments, 1))
        }
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("DrSlider");
            if (!data) {
                $this.data("DrSlider", (data = new DrSlider(this, options)))
            } else {
                data.constructor(this, options)
            }
            data._init()
        })
    };
    $.fn.DrSlider.Constructor = DrSlider
}(jQuery));

// 幻灯插件(jQuery.owl-carousel v1.3.2)
"function" !== typeof Object.create && (Object.create = function(f) {
    function g() {}
    g.prototype = f;
    return new g
});
(function(f, g, k) {
    var l = {
        init: function(a, b) {
            this.$elem = f(b);
            this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
            this.userOptions = a;
            this.loadContent()
        },
        loadContent: function() {
            function a(a) {
                var d, e = "";
                if ("function" === typeof b.options.jsonSuccess) {
                    b.options.jsonSuccess.apply(this, [a])
                } else {
                    for (d in a.owl) {
                        a.owl.hasOwnProperty(d) && (e += a.owl[d].item)
                    }
                    b.$elem.html(e)
                }
                b.logIn()
            }
            var b = this,
                e;
            "function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);
            "string" === typeof b.options.jsonPath ? (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn()
        },
        logIn: function() {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
            this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
            this.$elem.css({
                opacity: 0
            });
            this.orignalItems = this.options.items;
            this.checkBrowser();
            this.wrapperWidth = 0;
            this.checkVisible = null;
            this.setVars()
        },
        setVars: function() {
            if (0 === this.$elem.children().length) {
                return !1
            }
            this.baseClass();
            this.eventTypes();
            this.$userItems = this.$elem.children();
            this.itemsAmount = this.$userItems.length;
            this.wrapItems();
            this.$owlItems = this.$elem.find(".owl-item");
            this.$owlWrapper = this.$elem.find(".owl-wrapper");
            this.playDirection = "next";
            this.prevItem = 0;
            this.prevArr = [0];
            this.currentItem = 0;
            this.customEvents();
            this.onStartup()
        },
        onStartup: function() {
            this.updateItems();
            this.calculateAll();
            this.buildControls();
            this.updateControls();
            this.response();
            this.moveEvents();
            this.stopOnHover();
            this.owlStatus();
            !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
            !0 === this.options.autoPlay && (this.options.autoPlay = 5000);
            this.play();
            this.$elem.find(".owl-wrapper").css("display", "block");
            this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
            this.onstartup = !1;
            this.eachMoveUpdate();
            "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        },
        eachMoveUpdate: function() {
            !0 === this.options.lazyLoad && this.lazyLoad();
            !0 === this.options.autoHeight && this.autoHeight();
            this.onVisibleItems();
            "function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        },
        updateVars: function() {
            "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
            this.watchVisibility();
            this.updateItems();
            this.calculateAll();
            this.updatePosition();
            this.updateControls();
            this.eachMoveUpdate();
            "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        },
        reload: function() {
            var a = this;
            g.setTimeout(function() {
                a.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var a = this;
            if (!1 === a.$elem.is(":visible")) {
                a.$elem.css({
                    opacity: 0
                }), g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible)
            } else {
                return !1
            }
            a.checkVisible = g.setInterval(function() {
                a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
                    opacity: 1
                }, 200), g.clearInterval(a.checkVisible))
            }, 500)
        },
        wrapItems: function() {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
            this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
            this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
            this.$elem.css("display", "block")
        },
        baseClass: function() {
            var a = this.$elem.hasClass(this.options.baseClass),
                b = this.$elem.hasClass(this.options.theme);
            a || this.$elem.addClass(this.options.baseClass);
            b || this.$elem.addClass(this.options.theme)
        },
        updateItems: function() {
            var a, b;
            if (!1 === this.options.responsive) {
                return !1
            }
            if (!0 === this.options.singleItem) {
                return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1
            }
            a = f(this.options.responsiveBaseWidth).width();
            a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
            if (!1 !== this.options.itemsCustom) {
                for (this.options.itemsCustom.sort(function(a, b) {
                        return a[0] - b[0]
                    }), b = 0; b < this.options.itemsCustom.length; b += 1) {
                    this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1])
                }
            } else {
                a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1])
            }
            this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        },
        response: function() {
            var a = this,
                b, e;
            if (!0 !== a.options.responsive) {
                return !1
            }
            e = f(g).width();
            a.resizer = function() {
                f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function() {
                    e = f(g).width();
                    a.updateVars()
                }, a.options.responsiveRefreshRate))
            };
            f(g).resize(a.resizer)
        },
        updatePosition: function() {
            this.jumpTo(this.currentItem);
            !1 !== this.options.autoPlay && this.checkAp()
        },
        appendItemsSizes: function() {
            var a = this,
                b = 0,
                e = a.itemsAmount - a.options.items;
            a.$owlItems.each(function(c) {
                var d = f(this);
                d.css({
                    width: a.itemWidth
                }).data("owl-item", Number(c));
                if (0 === c % a.options.items || c === e) {
                    c > e || (b += 1)
                }
                d.data("owl-roundPages", b)
            })
        },
        appendWrapperSizes: function() {
            this.$owlWrapper.css({
                width: this.$owlItems.length * this.itemWidth * 2,
                left: 0
            });
            this.appendItemsSizes()
        },
        calculateAll: function() {
            this.calculateWidth();
            this.appendWrapperSizes();
            this.loops();
            this.max()
        },
        calculateWidth: function() {
            this.itemWidth = Math.round(this.$elem.width() / this.options.items)
        },
        max: function() {
            var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);
            return a
        },
        min: function() {
            return 0
        },
        loops: function() {
            var a = 0,
                b = 0,
                e, c;
            this.positionsInArray = [0];
            this.pagesInArray = [];
            for (e = 0; e < this.itemsAmount; e += 1) {
                b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]), c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c))
            }
        },
        buildControls: function() {
            if (!0 === this.options.navigation || !0 === this.options.pagination) {
                this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem)
            }!0 === this.options.pagination && this.buildPagination();
            !0 === this.options.navigation && this.buildButtons()
        },
        buildButtons: function() {
            var a = this,
                b = f('<div class="owl-buttons"/>');
            a.owlControls.append(b);
            a.buttonPrev = f("<div/>", {
                "class": "owl-prev",
                html: a.options.navigationText[0] || ""
            });
            a.buttonNext = f("<div/>", {
                "class": "owl-next",
                html: a.options.navigationText[1] || ""
            });
            b.append(a.buttonPrev).append(a.buttonNext);
            b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) {
                a.preventDefault()
            });
            b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(b) {
                b.preventDefault();
                f(this).hasClass("owl-next") ? a.next() : a.prev()
            })
        },
        buildPagination: function() {
            var a = this;
            a.paginationWrapper = f('<div class="owl-pagination"/>');
            a.owlControls.append(a.paginationWrapper);
            a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(b) {
                b.preventDefault();
                Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0)
            })
        },
        updatePagination: function() {
            var a, b, e, c, d, g;
            if (!1 === this.options.pagination) {
                return !1
            }
            this.paginationWrapper.html("");
            a = 0;
            b = this.itemsAmount - this.itemsAmount % this.options.items;
            for (c = 0; c < this.itemsAmount; c += 1) {
                0 === c % this.options.items && (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", {
                    "class": "owl-page"
                }), g = f("<span></span>", {
                    text: !0 === this.options.paginationNumbers ? a : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d))
            }
            this.checkPagination()
        },
        checkPagination: function() {
            var a = this;
            if (!1 === a.options.pagination) {
                return !1
            }
            a.paginationWrapper.find(".owl-page").each(function() {
                f(this).data("owl-roundPages") === f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"))
            })
        },
        checkNavigation: function() {
            if (!1 === this.options.navigation) {
                return !1
            }!1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
        },
        updateControls: function() {
            this.updatePagination();
            this.checkNavigation();
            this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        },
        destroyControls: function() {
            this.owlControls && this.owlControls.remove()
        },
        next: function(a) {
            if (this.isTransition) {
                return !1
            }
            this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
            if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) {
                if (!0 === this.options.rewindNav) {
                    this.currentItem = 0, a = "rewind"
                } else {
                    return this.currentItem = this.maximumItem, !1
                }
            }
            this.goTo(this.currentItem, a)
        },
        prev: function(a) {
            if (this.isTransition) {
                return !1
            }
            this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1);
            if (0 > this.currentItem) {
                if (!0 === this.options.rewindNav) {
                    this.currentItem = this.maximumItem, a = "rewind"
                } else {
                    return this.currentItem = 0, !1
                }
            }
            this.goTo(this.currentItem, a)
        },
        goTo: function(a, b, e) {
            var c = this;
            if (c.isTransition) {
                return !1
            }
            "function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);
            a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);
            c.currentItem = c.owl.currentItem = a;
            if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) {
                return c.swapSpeed(0), !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1
            }
            a = c.positionsInArray[a];
            !0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);
            c.afterGo()
        },
        jumpTo: function(a) {
            "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
            a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
            this.swapSpeed(0);
            !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
            this.currentItem = this.owl.currentItem = a;
            this.afterGo()
        },
        afterGo: function() {
            this.prevArr.push(this.currentItem);
            this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
            this.prevArr.shift(0);
            this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
            "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        },
        stop: function() {
            this.apStatus = "stop";
            g.clearInterval(this.autoPlayInterval)
        },
        checkAp: function() {
            "stop" !== this.apStatus && this.play()
        },
        play: function() {
            var a = this;
            a.apStatus = "play";
            if (!1 === a.options.autoPlay) {
                return !1
            }
            g.clearInterval(a.autoPlayInterval);
            a.autoPlayInterval = g.setInterval(function() {
                a.next(!0)
            }, a.options.autoPlay)
        },
        swapSpeed: function(a) {
            "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
        },
        addCssSpeed: function(a) {
            return {
                "-webkit-transition": "all " + a + "ms ease",
                "-moz-transition": "all " + a + "ms ease",
                "-o-transition": "all " + a + "ms ease",
                transition: "all " + a + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(a) {
            return {
                "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + a + "px, 0px, 0px)",
                transform: "translate3d(" + a + "px, 0px,0px)"
            }
        },
        transition3d: function(a) {
            this.$owlWrapper.css(this.doTranslate(a))
        },
        css2move: function(a) {
            this.$owlWrapper.css({
                left: a
            })
        },
        css2slide: function(a, b) {
            var e = this;
            e.isCssFinish = !1;
            e.$owlWrapper.stop(!0, !0).animate({
                left: a
            }, {
                duration: b || e.options.slideSpeed,
                complete: function() {
                    e.isCssFinish = !0
                }
            })
        },
        checkBrowser: function() {
            var a = k.createElement("div");
            a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
            a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
            this.browser = {
                support3d: null !== a && 1 === a.length,
                isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints
            }
        },
        moveEvents: function() {
            if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) {
                this.gestures(), this.disabledEvents()
            }
        },
        eventTypes: function() {
            var a = ["s", "e", "x"];
            this.ev_types = {};
            !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
            this.ev_types.start = a[0];
            this.ev_types.move = a[1];
            this.ev_types.end = a[2]
        },
        disabledEvents: function() {
            this.$elem.on("dragstart.owl", function(a) {
                a.preventDefault()
            });
            this.$elem.on("mousedown.disableTextSelect", function(a) {
                return f(a.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            function a(a) {
                if (void 0 !== a.touches) {
                    return {
                        x: a.touches[0].pageX,
                        y: a.touches[0].pageY
                    }
                }
                if (void 0 === a.touches) {
                    if (void 0 !== a.pageX) {
                        return {
                            x: a.pageX,
                            y: a.pageY
                        }
                    }
                    if (void 0 === a.pageX) {
                        return {
                            x: a.clientX,
                            y: a.clientY
                        }
                    }
                }
            }

            function b(a) {
                "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end))
            }

            function e(b) {
                b = b.originalEvent || b || g.event;
                d.newPosX = a(b).x - h.offsetX;
                d.newPosY = a(b).y - h.offsetY;
                d.newRelativeX = d.newPosX - h.relativePos;
                "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));
                (8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);
                (10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
                d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);
                !0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX)
            }

            function c(a) {
                a = a.originalEvent || a || g.event;
                var c;
                a.target = a.target || a.srcElement;
                h.dragging = !1;
                !0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
                d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";
                0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function(a) {
                    a.stopImmediatePropagation();
                    a.stopPropagation();
                    a.preventDefault();
                    f(a.target).off("click.disable")
                }), a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));
                b("off")
            }
            var d = this,
                h = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };
            d.isCssFinish = !0;
            d.$elem.on(d.ev_types.start, ".owl-wrapper", function(c) {
                c = c.originalEvent || c || g.event;
                var e;
                if (3 === c.which) {
                    return !1
                }
                if (!(d.itemsAmount <= d.options.items)) {
                    if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) {
                        return !1
                    }!1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);
                    !0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");
                    d.newPosX = 0;
                    d.newRelativeX = 0;
                    f(this).css(d.removeTransition());
                    e = f(this).position();
                    h.relativePos = e.left;
                    h.offsetX = a(c).x - e.left;
                    h.offsetY = a(c).y - e.top;
                    b("on");
                    h.sliding = !1;
                    h.targetElement = c.target || c.srcElement
                }
            })
        },
        getNewPosition: function() {
            var a = this.closestItem();
            a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = a = 0);
            return a
        },
        closestItem: function() {
            var a = this,
                b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
                e = a.newPosX,
                c = null;
            f.each(b, function(d, g) {
                e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) : (c = b[d + 1], a.currentItem = d + 1))
            });
            return a.currentItem
        },
        moveDirection: function() {
            var a;
            0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");
            return a
        },
        customEvents: function() {
            var a = this;
            a.$elem.on("owl.next", function() {
                a.next()
            });
            a.$elem.on("owl.prev", function() {
                a.prev()
            });
            a.$elem.on("owl.play", function(b, e) {
                a.options.autoPlay = e;
                a.play();
                a.hoverStatus = "play"
            });
            a.$elem.on("owl.stop", function() {
                a.stop();
                a.hoverStatus = "stop"
            });
            a.$elem.on("owl.goTo", function(b, e) {
                a.goTo(e)
            });
            a.$elem.on("owl.jumpTo", function(b, e) {
                a.jumpTo(e)
            })
        },
        stopOnHover: function() {
            var a = this;
            !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function() {
                a.stop()
            }), a.$elem.on("mouseout", function() {
                "stop" !== a.hoverStatus && a.play()
            }))
        },
        lazyLoad: function() {
            var a, b, e, c, d;
            if (!1 === this.options.lazyLoad) {
                return !1
            }
            for (a = 0; a < this.itemsAmount; a += 1) {
                b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ? b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)))
            }
        },
        lazyPreload: function(a, b) {
            function e() {
                a.data("owl-loaded", "loaded").removeClass("loading");
                b.removeAttr("data-src");
                "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
                "function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this, [d.$elem])
            }

            function c() {
                f += 1;
                d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e()
            }
            var d = this,
                f = 0,
                k;
            "DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");
            c()
        },
        autoHeight: function() {
            function a() {
                var a = f(e.$owlItems[e.currentItem]).height();
                e.wrapperOuter.css("height", a + "px");
                e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function() {
                    e.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function b() {
                d += 1;
                e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b, 100) : e.wrapperOuter.css("height", "")
            }
            var e = this,
                c = f(e.$owlItems[e.currentItem]).find("img"),
                d;
            void 0 !== c.get(0) ? (d = 0, b()) : a()
        },
        completeImg: function(a) {
            return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
        },
        onVisibleItems: function() {
            var a;
            !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
            this.visibleItems = [];
            for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) {
                this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active")
            }
            this.owl.visibleItems = this.visibleItems
        },
        transitionTypes: function(a) {
            this.outClass = "owl-" + a + "-out";
            this.inClass = "owl-" + a + "-in"
        },
        singleItemTransition: function() {
            var a = this,
                b = a.outClass,
                e = a.inClass,
                c = a.$owlItems.eq(a.currentItem),
                d = a.$owlItems.eq(a.prevItem),
                f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
                g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
            a.isTransition = !0;
            a.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": g + "px",
                "-moz-perspective-origin": g + "px",
                "perspective-origin": g + "px"
            });
            d.css({
                position: "relative",
                left: f + "px"
            }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endPrev = !0;
                d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(d, b)
            });
            c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endCurrent = !0;
                c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(c, e)
            })
        },
        clearTransStyle: function(a, b) {
            a.css({
                position: "",
                left: ""
            }).removeClass(b);
            this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        },
        owlStatus: function() {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        },
        clearEvents: function() {
            this.$elem.off(".owl owl mousedown.disableTextSelect");
            f(k).off(".owl owl");
            f(g).off("resize", this.resizer)
        },
        unWrap: function() {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
            this.clearEvents();
            this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            this.stop();
            g.clearInterval(this.checkVisible);
            this.unWrap();
            this.$elem.removeData()
        },
        reinit: function(a) {
            a = f.extend({}, this.userOptions, a);
            this.unWrap();
            this.init(a, this.$elem)
        },
        addItem: function(a, b) {
            var e;
            if (!a) {
                return !1
            }
            if (0 === this.$elem.children().length) {
                return this.$elem.append(a), this.setVars(), !1
            }
            this.unWrap();
            e = void 0 === b || -1 === b ? -1 : b;
            e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
            this.setVars()
        },
        removeItem: function(a) {
            if (0 === this.$elem.children().length) {
                return !1
            }
            a = void 0 === a || -1 === a ? -1 : a;
            this.unWrap();
            this.$userItems.eq(a).remove();
            this.setVars()
        }
    };
    f.fn.owlCarousel = function(a) {
        return this.each(function() {
            if (!0 === f(this).data("owl-init")) {
                return !1
            }
            f(this).data("owl-init", !0);
            var b = Object.create(l);
            b.init(a, this);
            f.data(this, "owlCarousel", b)
        })
    };
    f.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: g,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
})(jQuery, window, document);

// 粒子插件(jQuery.particles.js v1.0.3)
function launchParticlesJS(a, e) {
    var i = document.querySelector("#" + a + " > canvas");
    pJS = {
        canvas: {
            el: i,
            w: i.offsetWidth,
            h: i.offsetHeight
        },
        particles: {
            color: "#fff",
            shape: "circle",
            opacity: 1,
            size: 2.5,
            size_random: true,
            nb: 200,
            line_linked: {
                enable_auto: true,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1,
                condensed_mode: {
                    enable: true,
                    rotateX: 65000,
                    rotateY: 65000
                }
            },
            anim: {
                enable: true,
                speed: 1
            },
            array: []
        },
        interactivity: {
            enable: true,
            mouse: {
                distance: 100
            },
            detect_on: "canvas",
            mode: "grab",
            line_linked: {
                opacity: 1
            },
            events: {
                onclick: {
                    enable: true,
                    mode: "push",
                    nb: 4
                }
            }
        },
        retina_detect: false,
        fn: {
            vendors: {
                interactivity: {}
            }
        }
    };
    if (e) {
        if (e.particles) {
            var b = e.particles;
            if (b.color) {
                pJS.particles.color = b.color
            }
            if (b.shape) {
                pJS.particles.shape = b.shape
            }
            if (b.opacity) {
                pJS.particles.opacity = b.opacity
            }
            if (b.size) {
                pJS.particles.size = b.size
            }
            if (b.size_random == false) {
                pJS.particles.size_random = b.size_random
            }
            if (b.nb) {
                pJS.particles.nb = b.nb
            }
            if (b.line_linked) {
                var j = b.line_linked;
                if (j.enable_auto == false) {
                    pJS.particles.line_linked.enable_auto = j.enable_auto
                }
                if (j.distance) {
                    pJS.particles.line_linked.distance = j.distance
                }
                if (j.color) {
                    pJS.particles.line_linked.color = j.color
                }
                if (j.opacity) {
                    pJS.particles.line_linked.opacity = j.opacity
                }
                if (j.width) {
                    pJS.particles.line_linked.width = j.width
                }
                if (j.condensed_mode) {
                    var g = j.condensed_mode;
                    if (g.enable == false) {
                        pJS.particles.line_linked.condensed_mode.enable = g.enable
                    }
                    if (g.rotateX) {
                        pJS.particles.line_linked.condensed_mode.rotateX = g.rotateX
                    }
                    if (g.rotateY) {
                        pJS.particles.line_linked.condensed_mode.rotateY = g.rotateY
                    }
                }
            }
            if (b.anim) {
                var k = b.anim;
                if (k.enable == false) {
                    pJS.particles.anim.enable = k.enable
                }
                if (k.speed) {
                    pJS.particles.anim.speed = k.speed
                }
            }
        }
        if (e.interactivity) {
            var c = e.interactivity;
            if (c.enable == false) {
                pJS.interactivity.enable = c.enable
            }
            if (c.mouse) {
                if (c.mouse.distance) {
                    pJS.interactivity.mouse.distance = c.mouse.distance
                }
            }
            if (c.detect_on) {
                pJS.interactivity.detect_on = c.detect_on
            }
            if (c.mode) {
                pJS.interactivity.mode = c.mode
            }
            if (c.line_linked) {
                if (c.line_linked.opacity) {
                    pJS.interactivity.line_linked.opacity = c.line_linked.opacity
                }
            }
            if (c.events) {
                var d = c.events;
                if (d.onclick) {
                    var h = d.onclick;
                    if (h.enable == false) {
                        pJS.interactivity.events.onclick.enable = false
                    }
                    if (h.mode != "push") {
                        pJS.interactivity.events.onclick.mode = h.mode
                    }
                    if (h.nb) {
                        pJS.interactivity.events.onclick.nb = h.nb
                    }
                }
            }
        }
        pJS.retina_detect = e.retina_detect
    }
    pJS.particles.color_rgb = hexToRgb(pJS.particles.color);
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);
    if (pJS.retina_detect && window.devicePixelRatio > 1) {
        pJS.retina = true;
        pJS.canvas.pxratio = window.devicePixelRatio;
        pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
        pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;
        pJS.particles.anim.speed = pJS.particles.anim.speed * pJS.canvas.pxratio;
        pJS.particles.line_linked.distance = pJS.particles.line_linked.distance * pJS.canvas.pxratio;
        pJS.particles.line_linked.width = pJS.particles.line_linked.width * pJS.canvas.pxratio;
        pJS.interactivity.mouse.distance = pJS.interactivity.mouse.distance * pJS.canvas.pxratio
    }
    pJS.fn.canvasInit = function() {
        pJS.canvas.ctx = pJS.canvas.el.getContext("2d")
    };
    pJS.fn.canvasSize = function() {
        pJS.canvas.el.width = pJS.canvas.w;
        pJS.canvas.el.height = pJS.canvas.h;
        window.onresize = function() {
            if (pJS) {
                pJS.canvas.w = pJS.canvas.el.offsetWidth;
                pJS.canvas.h = pJS.canvas.el.offsetHeight;
                if (pJS.retina) {
                    pJS.canvas.w *= pJS.canvas.pxratio;
                    pJS.canvas.h *= pJS.canvas.pxratio
                }
                pJS.canvas.el.width = pJS.canvas.w;
                pJS.canvas.el.height = pJS.canvas.h;
                pJS.fn.canvasPaint();
                if (!pJS.particles.anim.enable) {
                    pJS.fn.particlesRemove();
                    pJS.fn.canvasRemove();
                    f()
                }
            }
        }
    };
    pJS.fn.canvasPaint = function() {
        pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h)
    };
    pJS.fn.canvasRemove = function() {
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h)
    };
    pJS.fn.particle = function(n, o, m) {
        this.x = m ? m.x : Math.random() * pJS.canvas.w;
        this.y = m ? m.y : Math.random() * pJS.canvas.h;
        this.radius = (pJS.particles.size_random ? Math.random() : 1) * pJS.particles.size;
        if (pJS.retina) {
            this.radius *= pJS.canvas.pxratio
        }
        this.color = n;
        this.opacity = o;
        this.vx = -0.5 + Math.random();
        this.vy = -0.5 + Math.random();
        this.draw = function() {
            pJS.canvas.ctx.fillStyle = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.opacity + ")";
            pJS.canvas.ctx.beginPath();
            switch (pJS.particles.shape) {
                case "circle":
                    pJS.canvas.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                    break;
                case "edge":
                    pJS.canvas.ctx.rect(this.x, this.y, this.radius * 2, this.radius * 2);
                    break;
                case "triangle":
                    pJS.canvas.ctx.moveTo(this.x, this.y - this.radius);
                    pJS.canvas.ctx.lineTo(this.x + this.radius, this.y + this.radius);
                    pJS.canvas.ctx.lineTo(this.x - this.radius, this.y + this.radius);
                    pJS.canvas.ctx.closePath();
                    break
            }
            pJS.canvas.ctx.fill()
        }
    };
    pJS.fn.particlesCreate = function() {
        for (var m = 0; m < pJS.particles.nb; m++) {
            pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb, pJS.particles.opacity))
        }
    };
    pJS.fn.particlesAnimate = function() {
        for (var n = 0; n < pJS.particles.array.length; n++) {
            var q = pJS.particles.array[n];
            q.x += q.vx * (pJS.particles.anim.speed / 2);
            q.y += q.vy * (pJS.particles.anim.speed / 2);
            if (q.x - q.radius > pJS.canvas.w) {
                q.x = q.radius
            } else {
                if (q.x + q.radius < 0) {
                    q.x = pJS.canvas.w + q.radius
                }
            }
            if (q.y - q.radius > pJS.canvas.h) {
                q.y = q.radius
            } else {
                if (q.y + q.radius < 0) {
                    q.y = pJS.canvas.h + q.radius
                }
            }
            for (var m = n + 1; m < pJS.particles.array.length; m++) {
                var o = pJS.particles.array[m];
                if (pJS.particles.line_linked.enable_auto) {
                    pJS.fn.vendors.distanceParticles(q, o)
                }
                if (pJS.interactivity.enable) {
                    switch (pJS.interactivity.mode) {
                        case "grab":
                            pJS.fn.vendors.interactivity.grabParticles(q, o);
                            break
                    }
                }
            }
        }
    };
    pJS.fn.particlesDraw = function() {
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
        pJS.fn.particlesAnimate();
        for (var m = 0; m < pJS.particles.array.length; m++) {
            var n = pJS.particles.array[m];
            n.draw("rgba(" + n.color.r + "," + n.color.g + "," + n.color.b + "," + n.opacity + ")")
        }
    };
    pJS.fn.particlesRemove = function() {
        pJS.particles.array = []
    };
    pJS.fn.vendors.distanceParticles = function(t, r) {
        var o = t.x - r.x,
            n = t.y - r.y,
            s = Math.sqrt(o * o + n * n);
        if (s <= pJS.particles.line_linked.distance) {
            var m = pJS.particles.line_linked.color_rgb_line;
            pJS.canvas.ctx.beginPath();
            pJS.canvas.ctx.strokeStyle = "rgba(" + m.r + "," + m.g + "," + m.b + "," + (pJS.particles.line_linked.opacity - s / pJS.particles.line_linked.distance) + ")";
            pJS.canvas.ctx.moveTo(t.x, t.y);
            pJS.canvas.ctx.lineTo(r.x, r.y);
            pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
            pJS.canvas.ctx.stroke();
            pJS.canvas.ctx.closePath();
            if (pJS.particles.line_linked.condensed_mode.enable) {
                var o = t.x - r.x,
                    n = t.y - r.y,
                    q = o / (pJS.particles.line_linked.condensed_mode.rotateX * 1000),
                    p = n / (pJS.particles.line_linked.condensed_mode.rotateY * 1000);
                r.vx += q;
                r.vy += p
            }
        }
    };
    pJS.fn.vendors.interactivity.listeners = function() {
        if (pJS.interactivity.detect_on == "window") {
            var m = window
        } else {
            var m = pJS.canvas.el
        }
        m.onmousemove = function(p) {
            if (m == window) {
                var o = p.clientX,
                    n = p.clientY
            } else {
                var o = p.offsetX || p.clientX,
                    n = p.offsetY || p.clientY
            }
            if (pJS) {
                pJS.interactivity.mouse.pos_x = o;
                pJS.interactivity.mouse.pos_y = n;
                if (pJS.retina) {
                    pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
                    pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio
                }
                pJS.interactivity.status = "mousemove"
            }
        };
        m.onmouseleave = function(n) {
            if (pJS) {
                pJS.interactivity.mouse.pos_x = 0;
                pJS.interactivity.mouse.pos_y = 0;
                pJS.interactivity.status = "mouseleave"
            }
        };
        if (pJS.interactivity.events.onclick.enable) {
            switch (pJS.interactivity.events.onclick.mode) {
                case "push":
                    m.onclick = function(o) {
                        if (pJS) {
                            for (var n = 0; n < pJS.interactivity.events.onclick.nb; n++) {
                                pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb, pJS.particles.opacity, {
                                    x: pJS.interactivity.mouse.pos_x,
                                    y: pJS.interactivity.mouse.pos_y
                                }))
                            }
                        }
                    };
                    break;
                case "remove":
                    m.onclick = function(n) {
                        pJS.particles.array.splice(0, pJS.interactivity.events.onclick.nb)
                    };
                    break
            }
        }
    };
    pJS.fn.vendors.interactivity.grabParticles = function(r, q) {
        var u = r.x - q.x,
            s = r.y - q.y,
            p = Math.sqrt(u * u + s * s);
        var t = r.x - pJS.interactivity.mouse.pos_x,
            n = r.y - pJS.interactivity.mouse.pos_y,
            o = Math.sqrt(t * t + n * n);
        if (p <= pJS.particles.line_linked.distance && o <= pJS.interactivity.mouse.distance && pJS.interactivity.status == "mousemove") {
            var m = pJS.particles.line_linked.color_rgb_line;
            pJS.canvas.ctx.beginPath();
            pJS.canvas.ctx.strokeStyle = "rgba(" + m.r + "," + m.g + "," + m.b + "," + (pJS.interactivity.line_linked.opacity - o / pJS.interactivity.mouse.distance) + ")";
            pJS.canvas.ctx.moveTo(r.x, r.y);
            pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
            pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
            pJS.canvas.ctx.stroke();
            pJS.canvas.ctx.closePath()
        }
    };
    pJS.fn.vendors.destroy = function() {
        cancelAnimationFrame(pJS.fn.requestAnimFrame);
        i.remove();
        delete pJS
    };

    function f() {
        pJS.fn.canvasInit();
        pJS.fn.canvasSize();
        pJS.fn.canvasPaint();
        pJS.fn.particlesCreate();
        pJS.fn.particlesDraw()
    }

    function l() {
        pJS.fn.particlesDraw();
        pJS.fn.requestAnimFrame = requestAnimFrame(l)
    }
    f();
    if (pJS.particles.anim.enable) {
        l()
    }
    if (pJS.interactivity.enable) {
        pJS.fn.vendors.interactivity.listeners()
    }
}
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        window.setTimeout(a, 1000 / 60)
    }
})();
window.cancelRequestAnimFrame = (function() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
})();

function hexToRgb(c) {
    var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    c = c.replace(b, function(e, h, f, d) {
        return h + h + f + f + d + d
    });
    var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
    return a ? {
        r: parseInt(a[1], 16),
        g: parseInt(a[2], 16),
        b: parseInt(a[3], 16)
    } : null
}
window.particlesJS = function(d, c) {
    if (typeof(d) != "string") {
        c = d;
        d = "particles-js"
    }
    if (!d) {
        d = "particles-js"
    }
    var b = document.createElement("canvas");
    b.style.width = "100%";
    b.style.height = "100%";
    var a = document.getElementById(d).appendChild(b);
    if (a != null) {
        launchParticlesJS(d, c)
    }
};

// Cookie插件(jQuery.cookie.js v1.4.1)
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory)
    } else {
        if (typeof exports === "object") {
            module.exports = factory(require("jquery"))
        } else {
            factory(jQuery)
        }
    }
}(function($) {
    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s)
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s)
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value))
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            s = decodeURIComponent(s.replace(pluses, " "));
            return config.json ? JSON.parse(s) : s
        } catch (e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value
    }
    var config = $.cookie = function(key, value, options) {
        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === "number") {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 86400000)
            }
            return (document.cookie = [encode(key), "=", stringifyCookieValue(value), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join(""))
        }
        var result = key ? undefined : {},
            cookies = document.cookie ? document.cookie.split("; ") : [],
            i = 0,
            l = cookies.length;
        for (; i < l; i++) {
            var parts = cookies[i].split("="),
                name = decode(parts.shift()),
                cookie = parts.join("=");
            if (key === name) {
                result = read(cookie, value);
                break
            }
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie
            }
        }
        return result
    };
    config.defaults = {};
    $.removeCookie = function(key, options) {
        $.cookie(key, "", $.extend({}, options, {
            expires: -1
        }));
        return !$.cookie(key)
    }
}));

// Respond.js v1.4.2
! function(a) {
    "use strict";
    a.matchMedia = a.matchMedia || function(a) {
        var b, c = a.documentElement,
            d = c.firstElementChild || c.firstChild,
            e = a.createElement("body"),
            f = a.createElement("div");
        return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f),
            function(a) {
                return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
                    matches: b,
                    media: a
                }
            }
    }(a.document)
}(this),
function(a) {
    "use strict";

    function b() {
        u(!0)
    }
    var c = {};
    a.respond = c, c.update = function() {};
    var d = [],
        e = function() {
            var b = !1;
            try {
                b = new a.XMLHttpRequest
            } catch (c) {
                b = new a.ActiveXObject("Microsoft.XMLHTTP")
            }
            return function() {
                return b
            }
        }(),
        f = function(a, b) {
            var c = e();
            c && (c.open("GET", a, !0), c.onreadystatechange = function() {
                4 !== c.readyState || 200 !== c.status && 304 !== c.status || b(c.responseText)
            }, 4 !== c.readyState && c.send(null))
        };
    if (c.ajax = f, c.queue = d, c.regex = {
            media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
            keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
            urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
            findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
            only: /(only\s+)?([a-zA-Z]+)\s?/,
            minw: /\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
            maxw: /\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/
        }, c.mediaQueriesSupported = a.matchMedia && null !== a.matchMedia("only all") && a.matchMedia("only all").matches, !c.mediaQueriesSupported) {
        var g, h, i, j = a.document,
            k = j.documentElement,
            l = [],
            m = [],
            n = [],
            o = {},
            p = 30,
            q = j.getElementsByTagName("head")[0] || k,
            r = j.getElementsByTagName("base")[0],
            s = q.getElementsByTagName("link"),
            t = function() {
                var a, b = j.createElement("div"),
                    c = j.body,
                    d = k.style.fontSize,
                    e = c && c.style.fontSize,
                    f = !1;
                return b.style.cssText = "position:absolute;font-size:1em;width:1em", c || (c = f = j.createElement("body"), c.style.background = "none"), k.style.fontSize = "100%", c.style.fontSize = "100%", c.appendChild(b), f && k.insertBefore(c, k.firstChild), a = b.offsetWidth, f ? k.removeChild(c) : c.removeChild(b), k.style.fontSize = d, e && (c.style.fontSize = e), a = i = parseFloat(a)
            },
            u = function(b) {
                var c = "clientWidth",
                    d = k[c],
                    e = "CSS1Compat" === j.compatMode && d || j.body[c] || d,
                    f = {},
                    o = s[s.length - 1],
                    r = (new Date).getTime();
                if (b && g && p > r - g) return a.clearTimeout(h), h = a.setTimeout(u, p), void 0;
                g = r;
                for (var v in l)
                    if (l.hasOwnProperty(v)) {
                        var w = l[v],
                            x = w.minw,
                            y = w.maxw,
                            z = null === x,
                            A = null === y,
                            B = "em";
                        x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? i || t() : 1)), y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? i || t() : 1)), w.hasquery && (z && A || !(z || e >= x) || !(A || y >= e)) || (f[w.media] || (f[w.media] = []), f[w.media].push(m[w.rules]))
                    }
                for (var C in n) n.hasOwnProperty(C) && n[C] && n[C].parentNode === q && q.removeChild(n[C]);
                n.length = 0;
                for (var D in f)
                    if (f.hasOwnProperty(D)) {
                        var E = j.createElement("style"),
                            F = f[D].join("\n");
                        E.type = "text/css", E.media = D, q.insertBefore(E, o.nextSibling), E.styleSheet ? E.styleSheet.cssText = F : E.appendChild(j.createTextNode(F)), n.push(E)
                    }
            },
            v = function(a, b, d) {
                var e = a.replace(c.regex.keyframes, "").match(c.regex.media),
                    f = e && e.length || 0;
                b = b.substring(0, b.lastIndexOf("/"));
                var g = function(a) {
                        return a.replace(c.regex.urls, "$1" + b + "$2$3")
                    },
                    h = !f && d;
                b.length && (b += "/"), h && (f = 1);
                for (var i = 0; f > i; i++) {
                    var j, k, n, o;
                    h ? (j = d, m.push(g(a))) : (j = e[i].match(c.regex.findStyles) && RegExp.$1, m.push(RegExp.$2 && g(RegExp.$2))), n = j.split(","), o = n.length;
                    for (var p = 0; o > p; p++) k = n[p], l.push({
                        media: k.split("(")[0].match(c.regex.only) && RegExp.$2 || "all",
                        rules: m.length - 1,
                        hasquery: k.indexOf("(") > -1,
                        minw: k.match(c.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                        maxw: k.match(c.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                    })
                }
                u()
            },
            w = function() {
                if (d.length) {
                    var b = d.shift();
                    f(b.href, function(c) {
                        v(c, b.href, b.media), o[b.href] = !0, a.setTimeout(function() {
                            w()
                        }, 0)
                    })
                }
            },
            x = function() {
                for (var b = 0; b < s.length; b++) {
                    var c = s[b],
                        e = c.href,
                        f = c.media,
                        g = c.rel && "stylesheet" === c.rel.toLowerCase();
                    e && g && !o[e] && (c.styleSheet && c.styleSheet.rawCssText ? (v(c.styleSheet.rawCssText, e, f), o[e] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(e) && !r || e.replace(RegExp.$1, "").split("/")[0] === a.location.host) && ("//" === e.substring(0, 2) && (e = a.location.protocol + e), d.push({
                        href: e,
                        media: f
                    })))
                }
                w()
            };
        x(), c.update = x, c.getEmValue = t, a.addEventListener ? a.addEventListener("resize", b, !1) : a.attachEvent && a.attachEvent("onresize", b)
    }
}(this);

// HTML5 Shiv v3.7.0
(function(l, f) {
    function m() {
        var a = e.elements;
        return "string" == typeof a ? a.split(" ") : a
    }

    function i(a) {
        var b = n[a[o]];
        b || (b = {}, h++, a[o] = h, n[h] = b);
        return b
    }

    function p(a, b, c) {
        b || (b = f);
        if (g) {
            return b.createElement(a)
        }
        c || (c = i(b));
        b = c.cache[a] ? c.cache[a].cloneNode() : r.test(a) ? (c.cache[a] = c.createElem(a)).cloneNode() : c.createElem(a);
        return b.canHaveChildren && !s.test(a) ? c.frag.appendChild(b) : b
    }

    function t(a, b) {
        if (!b.cache) {
            b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()
        }
        a.createElement = function(c) {
            return !e.shivMethods ? b.createElem(c) : p(c, a, b)
        };
        a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
            b.createElem(a);
            b.frag.createElement(a);
            return 'c("' + a + '")'
        }) + ");return n}")(e, b.frag)
    }

    function q(a) {
        a || (a = f);
        var b = i(a);
        if (e.shivCSS && !j && !b.hasCSS) {
            var c, d = a;
            c = d.createElement("p");
            d = d.getElementsByTagName("head")[0] || d.documentElement;
            c.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>";
            c = d.insertBefore(c.lastChild, d.firstChild);
            b.hasCSS = !!c
        }
        g || t(a, b);
        return a
    }
    var k = l.html5 || {},
        s = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        r = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        j, o = "_html5shiv",
        h = 0,
        n = {},
        g;
    (function() {
        try {
            var a = f.createElement("a");
            a.innerHTML = "<xyz></xyz>";
            j = "hidden" in a;
            var b;
            if (!(b = 1 == a.childNodes.length)) {
                f.createElement("a");
                var c = f.createDocumentFragment();
                b = "undefined" == typeof c.cloneNode || "undefined" == typeof c.createDocumentFragment || "undefined" == typeof c.createElement
            }
            g = b
        } catch (d) {
            g = j = !0
        }
    })();
    var e = {
        elements: k.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: "3.7.0",
        shivCSS: !1 !== k.shivCSS,
        supportsUnknownElements: g,
        shivMethods: !1 !== k.shivMethods,
        type: "default",
        shivDocument: q,
        createElement: p,
        createDocumentFragment: function(a, b) {
            a || (a = f);
            if (g) {
                return a.createDocumentFragment()
            }
            for (var b = b || i(a), c = b.frag.cloneNode(), d = 0, e = m(), h = e.length; d < h; d++) {
                c.createElement(e[d])
            }
            return c
        }
    };
    l.html5 = e;
    q(f)
})(this, document);

// excanvas
document.createElement("canvas").getContext || (function() {
    var s = Math,
        j = s.round,
        F = s.sin,
        G = s.cos,
        V = s.abs,
        W = s.sqrt,
        k = 10,
        v = k / 2;

    function X() {
        return this.context_ || (this.context_ = new H(this))
    }
    var L = Array.prototype.slice;

    function Y(b, a) {
        var c = L.call(arguments, 2);
        return function() {
            return b.apply(a, c.concat(L.call(arguments)))
        }
    }
    var M = {
        init: function(b) {
            if (/MSIE/.test(navigator.userAgent) && !window.opera) {
                var a = b || document;
                a.createElement("canvas");
                a.attachEvent("onreadystatechange", Y(this.init_, this, a))
            }
        },
        init_: function(b) {
            b.namespaces.g_vml_ || b.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
            b.namespaces.g_o_ || b.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
            if (!b.styleSheets.ex_canvas_) {
                var a = b.createStyleSheet();
                a.owningElement.id = "ex_canvas_";
                a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"
            }
            var c = b.getElementsByTagName("canvas"),
                d = 0;
            for (; d < c.length; d++) {
                this.initElement(c[d])
            }
        },
        initElement: function(b) {
            if (!b.getContext) {
                b.getContext = X;
                b.innerHTML = "";
                b.attachEvent("onpropertychange", Z);
                b.attachEvent("onresize", $);
                var a = b.attributes;
                if (a.width && a.width.specified) {
                    b.style.width = a.width.nodeValue + "px"
                } else {
                    b.width = b.clientWidth
                }
                if (a.height && a.height.specified) {
                    b.style.height = a.height.nodeValue + "px"
                } else {
                    b.height = b.clientHeight
                }
            }
            return b
        }
    };

    function Z(b) {
        var a = b.srcElement;
        switch (b.propertyName) {
            case "width":
                a.style.width = a.attributes.width.nodeValue + "px";
                a.getContext().clearRect();
                break;
            case "height":
                a.style.height = a.attributes.height.nodeValue + "px";
                a.getContext().clearRect();
                break
        }
    }

    function $(b) {
        var a = b.srcElement;
        if (a.firstChild) {
            a.firstChild.style.width = a.clientWidth + "px";
            a.firstChild.style.height = a.clientHeight + "px"
        }
    }
    M.init();
    var N = [],
        B = 0;
    for (; B < 16; B++) {
        var C = 0;
        for (; C < 16; C++) {
            N[B * 16 + C] = B.toString(16) + C.toString(16)
        }
    }

    function I() {
        return [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
    }

    function y(b, a) {
        var c = I(),
            d = 0;
        for (; d < 3; d++) {
            var f = 0;
            for (; f < 3; f++) {
                var h = 0,
                    g = 0;
                for (; g < 3; g++) {
                    h += b[d][g] * a[g][f]
                }
                c[d][f] = h
            }
        }
        return c
    }

    function O(b, a) {
        a.fillStyle = b.fillStyle;
        a.lineCap = b.lineCap;
        a.lineJoin = b.lineJoin;
        a.lineWidth = b.lineWidth;
        a.miterLimit = b.miterLimit;
        a.shadowBlur = b.shadowBlur;
        a.shadowColor = b.shadowColor;
        a.shadowOffsetX = b.shadowOffsetX;
        a.shadowOffsetY = b.shadowOffsetY;
        a.strokeStyle = b.strokeStyle;
        a.globalAlpha = b.globalAlpha;
        a.arcScaleX_ = b.arcScaleX_;
        a.arcScaleY_ = b.arcScaleY_;
        a.lineScale_ = b.lineScale_
    }

    function P(b) {
        var a, c = 1;
        b = String(b);
        if (b.substring(0, 3) == "rgb") {
            var d = b.indexOf("(", 3),
                f = b.indexOf(")", d + 1),
                h = b.substring(d + 1, f).split(",");
            a = "#";
            var g = 0;
            for (; g < 3; g++) {
                a += N[Number(h[g])]
            }
            if (h.length == 4 && b.substr(3, 1) == "a") {
                c = h[3]
            }
        } else {
            a = b
        }
        return {
            color: a,
            alpha: c
        }
    }

    function aa(b) {
        switch (b) {
            case "butt":
                return "flat";
            case "round":
                return "round";
            case "square":
            default:
                return "square"
        }
    }

    function H(b) {
        this.m_ = I();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = k * 1;
        this.globalAlpha = 1;
        this.canvas = b;
        var a = b.ownerDocument.createElement("div");
        a.style.width = b.clientWidth + "px";
        a.style.height = b.clientHeight + "px";
        a.style.overflow = "hidden";
        a.style.position = "absolute";
        b.appendChild(a);
        this.element_ = a;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    }
    var i = H.prototype;
    i.clearRect = function() {
        this.element_.innerHTML = ""
    };
    i.beginPath = function() {
        this.currentPath_ = []
    };
    i.moveTo = function(b, a) {
        var c = this.getCoords_(b, a);
        this.currentPath_.push({
            type: "moveTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    i.lineTo = function(b, a) {
        var c = this.getCoords_(b, a);
        this.currentPath_.push({
            type: "lineTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    i.bezierCurveTo = function(b, a, c, d, f, h) {
        var g = this.getCoords_(f, h),
            l = this.getCoords_(b, a),
            e = this.getCoords_(c, d);
        Q(this, l, e, g)
    };

    function Q(b, a, c, d) {
        b.currentPath_.push({
            type: "bezierCurveTo",
            cp1x: a.x,
            cp1y: a.y,
            cp2x: c.x,
            cp2y: c.y,
            x: d.x,
            y: d.y
        });
        b.currentX_ = d.x;
        b.currentY_ = d.y
    }
    i.quadraticCurveTo = function(b, a, c, d) {
        var f = this.getCoords_(b, a),
            h = this.getCoords_(c, d),
            g = {
                x: this.currentX_ + 0.6666666666666666 * (f.x - this.currentX_),
                y: this.currentY_ + 0.6666666666666666 * (f.y - this.currentY_)
            };
        Q(this, g, {
            x: g.x + (h.x - this.currentX_) / 3,
            y: g.y + (h.y - this.currentY_) / 3
        }, h)
    };
    i.arc = function(b, a, c, d, f, h) {
        c *= k;
        var g = h ? "at" : "wa",
            l = b + G(d) * c - v,
            e = a + F(d) * c - v,
            m = b + G(f) * c - v,
            r = a + F(f) * c - v;
        if (l == m && !h) {
            l += 0.125
        }
        var n = this.getCoords_(b, a),
            o = this.getCoords_(l, e),
            q = this.getCoords_(m, r);
        this.currentPath_.push({
            type: g,
            x: n.x,
            y: n.y,
            radius: c,
            xStart: o.x,
            yStart: o.y,
            xEnd: q.x,
            yEnd: q.y
        })
    };
    i.rect = function(b, a, c, d) {
        this.moveTo(b, a);
        this.lineTo(b + c, a);
        this.lineTo(b + c, a + d);
        this.lineTo(b, a + d);
        this.closePath()
    };
    i.strokeRect = function(b, a, c, d) {
        var f = this.currentPath_;
        this.beginPath();
        this.moveTo(b, a);
        this.lineTo(b + c, a);
        this.lineTo(b + c, a + d);
        this.lineTo(b, a + d);
        this.closePath();
        this.stroke();
        this.currentPath_ = f
    };
    i.fillRect = function(b, a, c, d) {
        var f = this.currentPath_;
        this.beginPath();
        this.moveTo(b, a);
        this.lineTo(b + c, a);
        this.lineTo(b + c, a + d);
        this.lineTo(b, a + d);
        this.closePath();
        this.fill();
        this.currentPath_ = f
    };
    i.createLinearGradient = function(b, a, c, d) {
        var f = new D("gradient");
        f.x0_ = b;
        f.y0_ = a;
        f.x1_ = c;
        f.y1_ = d;
        return f
    };
    i.createRadialGradient = function(b, a, c, d, f, h) {
        var g = new D("gradientradial");
        g.x0_ = b;
        g.y0_ = a;
        g.r0_ = c;
        g.x1_ = d;
        g.y1_ = f;
        g.r1_ = h;
        return g
    };
    i.drawImage = function(b) {
        var a, c, d, f, h, g, l, e, m = b.runtimeStyle.width,
            r = b.runtimeStyle.height;
        b.runtimeStyle.width = "auto";
        b.runtimeStyle.height = "auto";
        var n = b.width,
            o = b.height;
        b.runtimeStyle.width = m;
        b.runtimeStyle.height = r;
        if (arguments.length == 3) {
            a = arguments[1];
            c = arguments[2];
            h = g = 0;
            l = d = n;
            e = f = o
        } else {
            if (arguments.length == 5) {
                a = arguments[1];
                c = arguments[2];
                d = arguments[3];
                f = arguments[4];
                h = g = 0;
                l = n;
                e = o
            } else {
                if (arguments.length == 9) {
                    h = arguments[1];
                    g = arguments[2];
                    l = arguments[3];
                    e = arguments[4];
                    a = arguments[5];
                    c = arguments[6];
                    d = arguments[7];
                    f = arguments[8]
                } else {
                    throw Error("Invalid number of arguments")
                }
            }
        }
        var q = this.getCoords_(a, c),
            t = [];
        t.push(" <g_vml_:group", ' coordsize="', k * 10, ",", k * 10, '"', ' coordorigin="0,0"', ' style="width:', 10, "px;height:", 10, "px;position:absolute;");
        if (this.m_[0][0] != 1 || this.m_[0][1]) {
            var E = [];
            E.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", j(q.x / k), ",", "Dy=", j(q.y / k), "");
            var p = q,
                z = this.getCoords_(a + d, c),
                w = this.getCoords_(a, c + f),
                x = this.getCoords_(a + d, c + f);
            p.x = s.max(p.x, z.x, w.x, x.x);
            p.y = s.max(p.y, z.y, w.y, x.y);
            t.push("padding:0 ", j(p.x / k), "px ", j(p.y / k), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", E.join(""), ", sizingmethod='clip');")
        } else {
            t.push("top:", j(q.y / k), "px;left:", j(q.x / k), "px;")
        }
        t.push(' ">', '<g_vml_:image src="', b.src, '"', ' style="width:', k * d, "px;", " height:", k * f, 'px;"', ' cropleft="', h / n, '"', ' croptop="', g / o, '"', ' cropright="', (n - h - l) / n, '"', ' cropbottom="', (o - g - e) / o, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", t.join(""))
    };
    i.stroke = function(b) {
        var a = [],
            c = P(b ? this.fillStyle : this.strokeStyle),
            d = c.color,
            f = c.alpha * this.globalAlpha;
        a.push("<g_vml_:shape", ' filled="', !!b, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0 0" coordsize="', k * 10, " ", k * 10, '"', ' stroked="', !b, '"', ' path="');
        var h = {
                x: null,
                y: null
            },
            g = {
                x: null,
                y: null
            },
            l = 0;
        for (; l < this.currentPath_.length; l++) {
            var e = this.currentPath_[l];
            switch (e.type) {
                case "moveTo":
                    a.push(" m ", j(e.x), ",", j(e.y));
                    break;
                case "lineTo":
                    a.push(" l ", j(e.x), ",", j(e.y));
                    break;
                case "close":
                    a.push(" x ");
                    e = null;
                    break;
                case "bezierCurveTo":
                    a.push(" c ", j(e.cp1x), ",", j(e.cp1y), ",", j(e.cp2x), ",", j(e.cp2y), ",", j(e.x), ",", j(e.y));
                    break;
                case "at":
                case "wa":
                    a.push(" ", e.type, " ", j(e.x - this.arcScaleX_ * e.radius), ",", j(e.y - this.arcScaleY_ * e.radius), " ", j(e.x + this.arcScaleX_ * e.radius), ",", j(e.y + this.arcScaleY_ * e.radius), " ", j(e.xStart), ",", j(e.yStart), " ", j(e.xEnd), ",", j(e.yEnd));
                    break
            }
            if (e) {
                if (h.x == null || e.x < h.x) {
                    h.x = e.x
                }
                if (g.x == null || e.x > g.x) {
                    g.x = e.x
                }
                if (h.y == null || e.y < h.y) {
                    h.y = e.y
                }
                if (g.y == null || e.y > g.y) {
                    g.y = e.y
                }
            }
        }
        a.push(' ">');
        if (b) {
            if (typeof this.fillStyle == "object") {
                var m = this.fillStyle,
                    r = 0,
                    n = {
                        x: 0,
                        y: 0
                    },
                    o = 0,
                    q = 1;
                if (m.type_ == "gradient") {
                    var t = m.x1_ / this.arcScaleX_,
                        E = m.y1_ / this.arcScaleY_,
                        p = this.getCoords_(m.x0_ / this.arcScaleX_, m.y0_ / this.arcScaleY_),
                        z = this.getCoords_(t, E);
                    r = Math.atan2(z.x - p.x, z.y - p.y) * 180 / Math.PI;
                    if (r < 0) {
                        r += 360
                    }
                    if (r < 0.000001) {
                        r = 0
                    }
                } else {
                    var p = this.getCoords_(m.x0_, m.y0_),
                        w = g.x - h.x,
                        x = g.y - h.y;
                    n = {
                        x: (p.x - h.x) / w,
                        y: (p.y - h.y) / x
                    };
                    w /= this.arcScaleX_ * k;
                    x /= this.arcScaleY_ * k;
                    var R = s.max(w, x);
                    o = 2 * m.r0_ / R;
                    q = 2 * m.r1_ / R - o
                }
                var u = m.colors_;
                u.sort(function(ba, ca) {
                    return ba.offset - ca.offset
                });
                var J = u.length,
                    da = u[0].color,
                    ea = u[J - 1].color,
                    fa = u[0].alpha * this.globalAlpha,
                    ga = u[J - 1].alpha * this.globalAlpha,
                    S = [],
                    l = 0;
                for (; l < J; l++) {
                    var T = u[l];
                    S.push(T.offset * q + o + " " + T.color)
                }
                a.push('<g_vml_:fill type="', m.type_, '"', ' method="none" focus="100%"', ' color="', da, '"', ' color2="', ea, '"', ' colors="', S.join(","), '"', ' opacity="', ga, '"', ' g_o_:opacity2="', fa, '"', ' angle="', r, '"', ' focusposition="', n.x, ",", n.y, '" />')
            } else {
                a.push('<g_vml_:fill color="', d, '" opacity="', f, '" />')
            }
        } else {
            var K = this.lineScale_ * this.lineWidth;
            if (K < 1) {
                f *= K
            }
            a.push("<g_vml_:stroke", ' opacity="', f, '"', ' joinstyle="', this.lineJoin, '"', ' miterlimit="', this.miterLimit, '"', ' endcap="', aa(this.lineCap), '"', ' weight="', K, 'px"', ' color="', d, '" />')
        }
        a.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", a.join(""))
    };
    i.fill = function() {
        this.stroke(true)
    };
    i.closePath = function() {
        this.currentPath_.push({
            type: "close"
        })
    };
    i.getCoords_ = function(b, a) {
        var c = this.m_;
        return {
            x: k * (b * c[0][0] + a * c[1][0] + c[2][0]) - v,
            y: k * (b * c[0][1] + a * c[1][1] + c[2][1]) - v
        }
    };
    i.save = function() {
        var b = {};
        O(this, b);
        this.aStack_.push(b);
        this.mStack_.push(this.m_);
        this.m_ = y(I(), this.m_)
    };
    i.restore = function() {
        O(this.aStack_.pop(), this);
        this.m_ = this.mStack_.pop()
    };

    function ha(b) {
        var a = 0;
        for (; a < 3; a++) {
            var c = 0;
            for (; c < 2; c++) {
                if (!isFinite(b[a][c]) || isNaN(b[a][c])) {
                    return false
                }
            }
        }
        return true
    }

    function A(b, a, c) {
        if (!!ha(a)) {
            b.m_ = a;
            if (c) {
                b.lineScale_ = W(V(a[0][0] * a[1][1] - a[0][1] * a[1][0]))
            }
        }
    }
    i.translate = function(b, a) {
        A(this, y([
            [1, 0, 0],
            [0, 1, 0],
            [b, a, 1]
        ], this.m_), false)
    };
    i.rotate = function(b) {
        var a = G(b),
            c = F(b);
        A(this, y([
            [a, c, 0],
            [-c, a, 0],
            [0, 0, 1]
        ], this.m_), false)
    };
    i.scale = function(b, a) {
        this.arcScaleX_ *= b;
        this.arcScaleY_ *= a;
        A(this, y([
            [b, 0, 0],
            [0, a, 0],
            [0, 0, 1]
        ], this.m_), true)
    };
    i.transform = function(b, a, c, d, f, h) {
        A(this, y([
            [b, a, 0],
            [c, d, 0],
            [f, h, 1]
        ], this.m_), true)
    };
    i.setTransform = function(b, a, c, d, f, h) {
        A(this, [
            [b, a, 0],
            [c, d, 0],
            [f, h, 1]
        ], true)
    };
    i.clip = function() {};
    i.arcTo = function() {};
    i.createPattern = function() {
        return new U
    };

    function D(b) {
        this.type_ = b;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = []
    }
    D.prototype.addColorStop = function(b, a) {
        a = P(a);
        this.colors_.push({
            offset: b,
            color: a.color,
            alpha: a.alpha
        })
    };

    function U() {}
    G_vmlCanvasManager = M;
    CanvasRenderingContext2D = H;
    CanvasGradient = D;
    CanvasPattern = U
})();


// 图标选择器(Bootstrap.iconChoosen v0.1)
(function($) {
    $.fn.iconChoosen = function() {
        var temp = '<div class="modal fade" id="iconChoosenModal" tabindex="-1" role="dialog" aria-labelledby="iconChoosenModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button><h4 class="modal-title">请选择图标</h4></div><div class="modal-body"><div class="iconChoosen"><ul class="nav nav-tabs"><li class="active"><a href="#iconChoosenTab1" data-toggle="tab">网页图标</a></li><li><a href="#iconChoosenTab2" data-toggle="tab">文件图标</a></li><li><a href="#iconChoosenTab3" data-toggle="tab">旋转图标</a></li><li><a href="#iconChoosenTab4" data-toggle="tab">表单图标</a></li><li><a href="#iconChoosenTab5" data-toggle="tab">支付图标</a></li><li><a href="#iconChoosenTab6" data-toggle="tab">编辑器图标</a></li><li><a href="#iconChoosenTab7" data-toggle="tab">方向图标</a></li><li><a href="#iconChoosenTab8" data-toggle="tab">播放器图标</a></li><li><a href="#iconChoosenTab9" data-toggle="tab">品牌图标</a></li><li><a href="#iconChoosenTab10" data-toggle="tab">医药图标</a></li></ul><div class="tab-content clearfix"><div class="blank"></div><div class="tab-pane fade in active" id="iconChoosenTab1"><a href="#" class="iconChoosenItem" title="fa-adjust"><i class="fa fa-adjust"></i><span>fa-adjust</span></a><a href="#" class="iconChoosenItem" title="fa-anchor"><i class="fa fa-anchor"></i><span>fa-anchor</span></a><a href="#" class="iconChoosenItem" title="fa-archive"><i class="fa fa-archive"></i><span>fa-archive</span></a><a href="#" class="iconChoosenItem" title="fa-arrows"><i class="fa fa-arrows"></i><span>fa-arrows</span></a><a href="#" class="iconChoosenItem" title="fa-arrows-h"><i class="fa fa-arrows-h"></i><span>fa-arrows-h</span></a><a href="#" class="iconChoosenItem" title="fa-arrows-v"><i class="fa fa-arrows-v"></i><span>fa-arrows-v</span></a><a href="#" class="iconChoosenItem" title="fa-asterisk"><i class="fa fa-asterisk"></i><span>fa-asterisk</span></a><a href="#" class="iconChoosenItem" title="fa-automobile"><i class="fa fa-automobile"></i><span>fa-automobile</span></a><a href="#" class="iconChoosenItem" title="fa-ban"><i class="fa fa-ban"></i><span>fa-ban</span></a><a href="#" class="iconChoosenItem" title="fa-bank"><i class="fa fa-bank"></i><span>fa-bank</span></a><a href="#" class="iconChoosenItem" title="fa-bar-chart-o"><i class="fa fa-bar-chart-o"></i><span>fa-bar-chart-o</span></a><a href="#" class="iconChoosenItem" title="fa-barcode"><i class="fa fa-barcode"></i><span>fa-barcode</span></a><a href="#" class="iconChoosenItem" title="fa-bars"><i class="fa fa-bars"></i><span>fa-bars</span></a><a href="#" class="iconChoosenItem" title="fa-beer"><i class="fa fa-beer"></i><span>fa-beer</span></a><a href="#" class="iconChoosenItem" title="fa-bell"><i class="fa fa-bell"></i><span>fa-bell</span></a><a href="#" class="iconChoosenItem" title="fa-bell-o"><i class="fa fa-bell-o"></i><span>fa-bell-o</span></a><a href="#" class="iconChoosenItem" title="fa-bolt"><i class="fa fa-bolt"></i><span>fa-bolt</span></a><a href="#" class="iconChoosenItem" title="fa-bomb"><i class="fa fa-bomb"></i><span>fa-bomb</span></a><a href="#" class="iconChoosenItem" title="fa-book"><i class="fa fa-book"></i><span>fa-book</span></a><a href="#" class="iconChoosenItem" title="fa-bookmark"><i class="fa fa-bookmark"></i><span>fa-bookmark</span></a><a href="#" class="iconChoosenItem" title="fa-bookmark-o"><i class="fa fa-bookmark-o"></i><span>fa-bookmark-o</span></a><a href="#" class="iconChoosenItem" title="fa-briefcase"><i class="fa fa-briefcase"></i><span>fa-briefcase</span></a><a href="#" class="iconChoosenItem" title="fa-bug"><i class="fa fa-bug"></i><span>fa-bug</span></a><a href="#" class="iconChoosenItem" title="fa-building"><i class="fa fa-building"></i><span>fa-building</span></a><a href="#" class="iconChoosenItem" title="fa-building-o"><i class="fa fa-building-o"></i><span>fa-building-o</span></a><a href="#" class="iconChoosenItem" title="fa-bullhorn"><i class="fa fa-bullhorn"></i><span>fa-bullhorn</span></a><a href="#" class="iconChoosenItem" title="fa-bullseye"><i class="fa fa-bullseye"></i><span>fa-bullseye</span></a><a href="#" class="iconChoosenItem" title="fa-cab"><i class="fa fa-cab"></i><span>fa-cab</span></a><a href="#" class="iconChoosenItem" title="fa-calendar"><i class="fa fa-calendar"></i><span>fa-calendar</span></a><a href="#" class="iconChoosenItem" title="fa-calendar-o"><i class="fa fa-calendar-o"></i><span>fa-calendar-o</span></a><a href="#" class="iconChoosenItem" title="fa-camera"><i class="fa fa-camera"></i><span>fa-camera</span></a><a href="#" class="iconChoosenItem" title="fa-camera-retro"><i class="fa fa-camera-retro"></i><span>fa-camera-retro</span></a><a href="#" class="iconChoosenItem" title="fa-car"><i class="fa fa-car"></i><span>fa-car</span></a><a href="#" class="iconChoosenItem" title="fa-caret-square-o-down"><i class="fa fa-caret-square-o-down"></i><span>fa-caret-square-o-down</span></a><a href="#" class="iconChoosenItem" title="fa-caret-square-o-left"><i class="fa fa-caret-square-o-left"></i><span>fa-caret-square-o-left</span></a><a href="#" class="iconChoosenItem" title="fa-caret-square-o-right"><i class="fa fa-caret-square-o-right"></i><span>fa-caret-square-o-right</span></a><a href="#" class="iconChoosenItem" title="fa-caret-square-o-up"><i class="fa fa-caret-square-o-up"></i><span>fa-caret-square-o-up</span></a><a href="#" class="iconChoosenItem" title="fa-certificate"><i class="fa fa-certificate"></i><span>fa-certificate</span></a><a href="#" class="iconChoosenItem" title="fa-check"><i class="fa fa-check"></i><span>fa-check</span></a><a href="#" class="iconChoosenItem" title="fa-check-circle"><i class="fa fa-check-circle"></i><span>fa-check-circle</span></a><a href="#" class="iconChoosenItem" title="fa-check-circle-o"><i class="fa fa-check-circle-o"></i><span>fa-check-circle-o</span></a><a href="#" class="iconChoosenItem" title="fa-check-square"><i class="fa fa-check-square"></i><span>fa-check-square</span></a><a href="#" class="iconChoosenItem" title="fa-check-square-o"><i class="fa fa-check-square-o"></i><span>fa-check-square-o</span></a><a href="#" class="iconChoosenItem" title="fa-child"><i class="fa fa-child"></i><span>fa-child</span></a><a href="#" class="iconChoosenItem" title="fa-circle"><i class="fa fa-circle"></i><span>fa-circle</span></a><a href="#" class="iconChoosenItem" title="fa-circle-o"><i class="fa fa-circle-o"></i><span>fa-circle-o</span></a><a href="#" class="iconChoosenItem" title="fa-circle-o-notch"><i class="fa fa-circle-o-notch"></i><span>fa-circle-o-notch</span></a><a href="#" class="iconChoosenItem" title="fa-circle-thin"><i class="fa fa-circle-thin"></i><span>fa-circle-thin</span></a><a href="#" class="iconChoosenItem" title="fa-clock-o"><i class="fa fa-clock-o"></i><span>fa-clock-o</span></a><a href="#" class="iconChoosenItem" title="fa-cloud"><i class="fa fa-cloud"></i><span>fa-cloud</span></a><a href="#" class="iconChoosenItem" title="fa-cloud-download"><i class="fa fa-cloud-download"></i><span>fa-cloud-download</span></a><a href="#" class="iconChoosenItem" title="fa-cloud-upload"><i class="fa fa-cloud-upload"></i><span>fa-cloud-upload</span></a><a href="#" class="iconChoosenItem" title="fa-code"><i class="fa fa-code"></i><span>fa-code</span></a><a href="#" class="iconChoosenItem" title="fa-code-fork"><i class="fa fa-code-fork"></i><span>fa-code-fork</span></a><a href="#" class="iconChoosenItem" title="fa-coffee"><i class="fa fa-coffee"></i><span>fa-coffee</span></a><a href="#" class="iconChoosenItem" title="fa-cog"><i class="fa fa-cog"></i><span>fa-cog</span></a><a href="#" class="iconChoosenItem" title="fa-cogs"><i class="fa fa-cogs"></i><span>fa-cogs</span></a><a href="#" class="iconChoosenItem" title="fa-comment"><i class="fa fa-comment"></i><span>fa-comment</span></a><a href="#" class="iconChoosenItem" title="fa-comment-o"><i class="fa fa-comment-o"></i><span>fa-comment-o</span></a><a href="#" class="iconChoosenItem" title="fa-comments"><i class="fa fa-comments"></i><span>fa-comments</span></a><a href="#" class="iconChoosenItem" title="fa-comments-o"><i class="fa fa-comments-o"></i><span>fa-comments-o</span></a><a href="#" class="iconChoosenItem" title="fa-compass"><i class="fa fa-compass"></i><span>fa-compass</span></a><a href="#" class="iconChoosenItem" title="fa-credit-card"><i class="fa fa-credit-card"></i><span>fa-credit-card</span></a><a href="#" class="iconChoosenItem" title="fa-crop"><i class="fa fa-crop"></i><span>fa-crop</span></a><a href="#" class="iconChoosenItem" title="fa-crosshairs"><i class="fa fa-crosshairs"></i><span>fa-crosshairs</span></a><a href="#" class="iconChoosenItem" title="fa-cube"><i class="fa fa-cube"></i><span>fa-cube</span></a><a href="#" class="iconChoosenItem" title="fa-cubes"><i class="fa fa-cubes"></i><span>fa-cubes</span></a><a href="#" class="iconChoosenItem" title="fa-cutlery"><i class="fa fa-cutlery"></i><span>fa-cutlery</span></a><a href="#" class="iconChoosenItem" title="fa-dashboard"><i class="fa fa-dashboard"></i><span>fa-dashboard</span></a><a href="#" class="iconChoosenItem" title="fa-database"><i class="fa fa-database"></i><span>fa-database</span></a><a href="#" class="iconChoosenItem" title="fa-desktop"><i class="fa fa-desktop"></i><span>fa-desktop</span></a><a href="#" class="iconChoosenItem" title="fa-dot-circle-o"><i class="fa fa-dot-circle-o"></i><span>fa-dot-circle-o</span></a><a href="#" class="iconChoosenItem" title="fa-download"><i class="fa fa-download"></i><span>fa-download</span></a><a href="#" class="iconChoosenItem" title="fa-edit"><i class="fa fa-edit"></i><span>fa-edit</span></a><a href="#" class="iconChoosenItem" title="fa-ellipsis-h"><i class="fa fa-ellipsis-h"></i><span>fa-ellipsis-h</span></a><a href="#" class="iconChoosenItem" title="fa-ellipsis-v"><i class="fa fa-ellipsis-v"></i><span>fa-ellipsis-v</span></a><a href="#" class="iconChoosenItem" title="fa-envelope"><i class="fa fa-envelope"></i><span>fa-envelope</span></a><a href="#" class="iconChoosenItem" title="fa-envelope-o"><i class="fa fa-envelope-o"></i><span>fa-envelope-o</span></a><a href="#" class="iconChoosenItem" title="fa-envelope-square"><i class="fa fa-envelope-square"></i><span>fa-envelope-square</span></a><a href="#" class="iconChoosenItem" title="fa-eraser"><i class="fa fa-eraser"></i><span>fa-eraser</span></a><a href="#" class="iconChoosenItem" title="fa-exchange"><i class="fa fa-exchange"></i><span>fa-exchange</span></a><a href="#" class="iconChoosenItem" title="fa-exclamation"><i class="fa fa-exclamation"></i><span>fa-exclamation</span></a><a href="#" class="iconChoosenItem" title="fa-exclamation-circle"><i class="fa fa-exclamation-circle"></i><span>fa-exclamation-circle</span></a><a href="#" class="iconChoosenItem" title="fa-exclamation-triangle"><i class="fa fa-exclamation-triangle"></i><span>fa-exclamation-triangle</span></a><a href="#" class="iconChoosenItem" title="fa-external-link"><i class="fa fa-external-link"></i><span>fa-external-link</span></a><a href="#" class="iconChoosenItem" title="fa-external-link-square"><i class="fa fa-external-link-square"></i><span>fa-external-link-square</span></a><a href="#" class="iconChoosenItem" title="fa-eye"><i class="fa fa-eye"></i><span>fa-eye</span></a><a href="#" class="iconChoosenItem" title="fa-eye-slash"><i class="fa fa-eye-slash"></i><span>fa-eye-slash</span></a><a href="#" class="iconChoosenItem" title="fa-fax"><i class="fa fa-fax"></i><span>fa-fax</span></a><a href="#" class="iconChoosenItem" title="fa-female"><i class="fa fa-female"></i><span>fa-female</span></a><a href="#" class="iconChoosenItem" title="fa-fighter-jet"><i class="fa fa-fighter-jet"></i><span>fa-fighter-jet</span></a><a href="#" class="iconChoosenItem" title="fa-file-archive-o"><i class="fa fa-file-archive-o"></i><span>fa-file-archive-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-audio-o"><i class="fa fa-file-audio-o"></i><span>fa-file-audio-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-code-o"><i class="fa fa-file-code-o"></i><span>fa-file-code-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-excel-o"><i class="fa fa-file-excel-o"></i><span>fa-file-excel-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-image-o"><i class="fa fa-file-image-o"></i><span>fa-file-image-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-movie-o"><i class="fa fa-file-movie-o"></i><span>fa-file-movie-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-pdf-o"><i class="fa fa-file-pdf-o"></i><span>fa-file-pdf-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-photo-o"><i class="fa fa-file-photo-o"></i><span>fa-file-photo-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-picture-o"><i class="fa fa-file-picture-o"></i><span>fa-file-picture-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-powerpoint-o"><i class="fa fa-file-powerpoint-o"></i><span>fa-file-powerpoint-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-sound-o"><i class="fa fa-file-sound-o"></i><span>fa-file-sound-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-video-o"><i class="fa fa-file-video-o"></i><span>fa-file-video-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-word-o"><i class="fa fa-file-word-o"></i><span>fa-file-word-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-zip-o"><i class="fa fa-file-zip-o"></i><span>fa-file-zip-o</span></a><a href="#" class="iconChoosenItem" title="fa-film"><i class="fa fa-film"></i><span>fa-film</span></a><a href="#" class="iconChoosenItem" title="fa-filter"><i class="fa fa-filter"></i><span>fa-filter</span></a><a href="#" class="iconChoosenItem" title="fa-fire"><i class="fa fa-fire"></i><span>fa-fire</span></a><a href="#" class="iconChoosenItem" title="fa-fire-extinguisher"><i class="fa fa-fire-extinguisher"></i><span>fa-fire-extinguisher</span></a><a href="#" class="iconChoosenItem" title="fa-flag"><i class="fa fa-flag"></i><span>fa-flag</span></a><a href="#" class="iconChoosenItem" title="fa-flag-checkered"><i class="fa fa-flag-checkered"></i><span>fa-flag-checkered</span></a><a href="#" class="iconChoosenItem" title="fa-flag-o"><i class="fa fa-flag-o"></i><span>fa-flag-o</span></a><a href="#" class="iconChoosenItem" title="fa-flash"><i class="fa fa-flash"></i><span>fa-flash</span></a><a href="#" class="iconChoosenItem" title="fa-flask"><i class="fa fa-flask"></i><span>fa-flask</span></a><a href="#" class="iconChoosenItem" title="fa-folder"><i class="fa fa-folder"></i><span>fa-folder</span></a><a href="#" class="iconChoosenItem" title="fa-folder-o"><i class="fa fa-folder-o"></i><span>fa-folder-o</span></a><a href="#" class="iconChoosenItem" title="fa-folder-open"><i class="fa fa-folder-open"></i><span>fa-folder-open</span></a><a href="#" class="iconChoosenItem" title="fa-folder-open-o"><i class="fa fa-folder-open-o"></i><span>fa-folder-open-o</span></a><a href="#" class="iconChoosenItem" title="fa-frown-o"><i class="fa fa-frown-o"></i><span>fa-frown-o</span></a><a href="#" class="iconChoosenItem" title="fa-gamepad"><i class="fa fa-gamepad"></i><span>fa-gamepad</span></a><a href="#" class="iconChoosenItem" title="fa-gavel"><i class="fa fa-gavel"></i><span>fa-gavel</span></a><a href="#" class="iconChoosenItem" title="fa-gear"><i class="fa fa-gear"></i><span>fa-gear</span></a><a href="#" class="iconChoosenItem" title="fa-gears"><i class="fa fa-gears"></i><span>fa-gears</span></a><a href="#" class="iconChoosenItem" title="fa-gift"><i class="fa fa-gift"></i><span>fa-gift</span></a><a href="#" class="iconChoosenItem" title="fa-glass"><i class="fa fa-glass"></i><span>fa-glass</span></a><a href="#" class="iconChoosenItem" title="fa-globe"><i class="fa fa-globe"></i><span>fa-globe</span></a><a href="#" class="iconChoosenItem" title="fa-graduation-cap"><i class="fa fa-graduation-cap"></i><span>fa-graduation-cap</span></a><a href="#" class="iconChoosenItem" title="fa-group"><i class="fa fa-group"></i><span>fa-group</span></a><a href="#" class="iconChoosenItem" title="fa-hdd-o"><i class="fa fa-hdd-o"></i><span>fa-hdd-o</span></a><a href="#" class="iconChoosenItem" title="fa-headphones"><i class="fa fa-headphones"></i><span>fa-headphones</span></a><a href="#" class="iconChoosenItem" title="fa-heart"><i class="fa fa-heart"></i><span>fa-heart</span></a><a href="#" class="iconChoosenItem" title="fa-heart-o"><i class="fa fa-heart-o"></i><span>fa-heart-o</span></a><a href="#" class="iconChoosenItem" title="fa-history"><i class="fa fa-history"></i><span>fa-history</span></a><a href="#" class="iconChoosenItem" title="fa-home"><i class="fa fa-home"></i><span>fa-home</span></a><a href="#" class="iconChoosenItem" title="fa-image"><i class="fa fa-image"></i><span>fa-image</span></a><a href="#" class="iconChoosenItem" title="fa-inbox"><i class="fa fa-inbox"></i><span>fa-inbox</span></a><a href="#" class="iconChoosenItem" title="fa-info"><i class="fa fa-info"></i><span>fa-info</span></a><a href="#" class="iconChoosenItem" title="fa-info-circle"><i class="fa fa-info-circle"></i><span>fa-info-circle</span></a><a href="#" class="iconChoosenItem" title="fa-institution"><i class="fa fa-institution"></i><span>fa-institution</span></a><a href="#" class="iconChoosenItem" title="fa-key"><i class="fa fa-key"></i><span>fa-key</span></a><a href="#" class="iconChoosenItem" title="fa-keyboard-o"><i class="fa fa-keyboard-o"></i><span>fa-keyboard-o</span></a><a href="#" class="iconChoosenItem" title="fa-language"><i class="fa fa-language"></i><span>fa-language</span></a><a href="#" class="iconChoosenItem" title="fa-laptop"><i class="fa fa-laptop"></i><span>fa-laptop</span></a><a href="#" class="iconChoosenItem" title="fa-leaf"><i class="fa fa-leaf"></i><span>fa-leaf</span></a><a href="#" class="iconChoosenItem" title="fa-legal"><i class="fa fa-legal"></i><span>fa-legal</span></a><a href="#" class="iconChoosenItem" title="fa-lemon-o"><i class="fa fa-lemon-o"></i><span>fa-lemon-o</span></a><a href="#" class="iconChoosenItem" title="fa-level-down"><i class="fa fa-level-down"></i><span>fa-level-down</span></a><a href="#" class="iconChoosenItem" title="fa-level-up"><i class="fa fa-level-up"></i><span>fa-level-up</span></a><a href="#" class="iconChoosenItem" title="fa-life-bouy"><i class="fa fa-life-bouy"></i><span>fa-life-bouy</span></a><a href="#" class="iconChoosenItem" title="fa-life-ring"><i class="fa fa-life-ring"></i><span>fa-life-ring</span></a><a href="#" class="iconChoosenItem" title="fa-life-saver"><i class="fa fa-life-saver"></i><span>fa-life-saver</span></a><a href="#" class="iconChoosenItem" title="fa-lightbulb-o"><i class="fa fa-lightbulb-o"></i><span>fa-lightbulb-o</span></a><a href="#" class="iconChoosenItem" title="fa-location-arrow"><i class="fa fa-location-arrow"></i><span>fa-location-arrow</span></a><a href="#" class="iconChoosenItem" title="fa-lock"><i class="fa fa-lock"></i><span>fa-lock</span></a><a href="#" class="iconChoosenItem" title="fa-magic"><i class="fa fa-magic"></i><span>fa-magic</span></a><a href="#" class="iconChoosenItem" title="fa-magnet"><i class="fa fa-magnet"></i><span>fa-magnet</span></a><a href="#" class="iconChoosenItem" title="fa-mail-forward"><i class="fa fa-mail-forward"></i><span>fa-mail-forward</span></a><a href="#" class="iconChoosenItem" title="fa-mail-reply"><i class="fa fa-mail-reply"></i><span>fa-mail-reply</span></a><a href="#" class="iconChoosenItem" title="fa-mail-reply-all"><i class="fa fa-mail-reply-all"></i><span>fa-mail-reply-all</span></a><a href="#" class="iconChoosenItem" title="fa-male"><i class="fa fa-male"></i><span>fa-male</span></a><a href="#" class="iconChoosenItem" title="fa-map-marker"><i class="fa fa-map-marker"></i><span>fa-map-marker</span></a><a href="#" class="iconChoosenItem" title="fa-meh-o"><i class="fa fa-meh-o"></i><span>fa-meh-o</span></a><a href="#" class="iconChoosenItem" title="fa-microphone"><i class="fa fa-microphone"></i><span>fa-microphone</span></a><a href="#" class="iconChoosenItem" title="fa-microphone-slash"><i class="fa fa-microphone-slash"></i><span>fa-microphone-slash</span></a><a href="#" class="iconChoosenItem" title="fa-minus"><i class="fa fa-minus"></i><span>fa-minus</span></a><a href="#" class="iconChoosenItem" title="fa-minus-circle"><i class="fa fa-minus-circle"></i><span>fa-minus-circle</span></a><a href="#" class="iconChoosenItem" title="fa-minus-square"><i class="fa fa-minus-square"></i><span>fa-minus-square</span></a><a href="#" class="iconChoosenItem" title="fa-minus-square-o"><i class="fa fa-minus-square-o"></i><span>fa-minus-square-o</span></a><a href="#" class="iconChoosenItem" title="fa-mobile"><i class="fa fa-mobile"></i><span>fa-mobile</span></a><a href="#" class="iconChoosenItem" title="fa-mobile-phone"><i class="fa fa-mobile-phone"></i><span>fa-mobile-phone</span></a><a href="#" class="iconChoosenItem" title="fa-money"><i class="fa fa-money"></i><span>fa-money</span></a><a href="#" class="iconChoosenItem" title="fa-moon-o"><i class="fa fa-moon-o"></i><span>fa-moon-o</span></a><a href="#" class="iconChoosenItem" title="fa-mortar-board"><i class="fa fa-mortar-board"></i><span>fa-mortar-board</span></a><a href="#" class="iconChoosenItem" title="fa-music"><i class="fa fa-music"></i><span>fa-music</span></a><a href="#" class="iconChoosenItem" title="fa-navicon"><i class="fa fa-navicon"></i><span>fa-navicon</span></a><a href="#" class="iconChoosenItem" title="fa-paper-plane"><i class="fa fa-paper-plane"></i><span>fa-paper-plane</span></a><a href="#" class="iconChoosenItem" title="fa-paper-plane-o"><i class="fa fa-paper-plane-o"></i><span>fa-paper-plane-o</span></a><a href="#" class="iconChoosenItem" title="fa-paw"><i class="fa fa-paw"></i><span>fa-paw</span></a><a href="#" class="iconChoosenItem" title="fa-pencil"><i class="fa fa-pencil"></i><span>fa-pencil</span></a><a href="#" class="iconChoosenItem" title="fa-pencil-square"><i class="fa fa-pencil-square"></i><span>fa-pencil-square</span></a><a href="#" class="iconChoosenItem" title="fa-pencil-square-o"><i class="fa fa-pencil-square-o"></i><span>fa-pencil-square-o</span></a><a href="#" class="iconChoosenItem" title="fa-phone"><i class="fa fa-phone"></i><span>fa-phone</span></a><a href="#" class="iconChoosenItem" title="fa-phone-square"><i class="fa fa-phone-square"></i><span>fa-phone-square</span></a><a href="#" class="iconChoosenItem" title="fa-photo"><i class="fa fa-photo"></i><span>fa-photo</span></a><a href="#" class="iconChoosenItem" title="fa-picture-o"><i class="fa fa-picture-o"></i><span>fa-picture-o</span></a><a href="#" class="iconChoosenItem" title="fa-plane"><i class="fa fa-plane"></i><span>fa-plane</span></a><a href="#" class="iconChoosenItem" title="fa-plus"><i class="fa fa-plus"></i><span>fa-plus</span></a><a href="#" class="iconChoosenItem" title="fa-plus-circle"><i class="fa fa-plus-circle"></i><span>fa-plus-circle</span></a><a href="#" class="iconChoosenItem" title="fa-plus-square"><i class="fa fa-plus-square"></i><span>fa-plus-square</span></a><a href="#" class="iconChoosenItem" title="fa-plus-square-o"><i class="fa fa-plus-square-o"></i><span>fa-plus-square-o</span></a><a href="#" class="iconChoosenItem" title="fa-power-off"><i class="fa fa-power-off"></i><span>fa-power-off</span></a><a href="#" class="iconChoosenItem" title="fa-print"><i class="fa fa-print"></i><span>fa-print</span></a><a href="#" class="iconChoosenItem" title="fa-puzzle-piece"><i class="fa fa-puzzle-piece"></i><span>fa-puzzle-piece</span></a><a href="#" class="iconChoosenItem" title="fa-qrcode"><i class="fa fa-qrcode"></i><span>fa-qrcode</span></a><a href="#" class="iconChoosenItem" title="fa-question"><i class="fa fa-question"></i><span>fa-question</span></a><a href="#" class="iconChoosenItem" title="fa-question-circle"><i class="fa fa-question-circle"></i><span>fa-question-circle</span></a><a href="#" class="iconChoosenItem" title="fa-quote-left"><i class="fa fa-quote-left"></i><span>fa-quote-left</span></a><a href="#" class="iconChoosenItem" title="fa-quote-right"><i class="fa fa-quote-right"></i><span>fa-quote-right</span></a><a href="#" class="iconChoosenItem" title="fa-random"><i class="fa fa-random"></i><span>fa-random</span></a><a href="#" class="iconChoosenItem" title="fa-recycle"><i class="fa fa-recycle"></i><span>fa-recycle</span></a><a href="#" class="iconChoosenItem" title="fa-refresh"><i class="fa fa-refresh"></i><span>fa-refresh</span></a><a href="#" class="iconChoosenItem" title="fa-reorder"><i class="fa fa-reorder"></i><span>fa-reorder</span></a><a href="#" class="iconChoosenItem" title="fa-reply"><i class="fa fa-reply"></i><span>fa-reply</span></a><a href="#" class="iconChoosenItem" title="fa-reply-all"><i class="fa fa-reply-all"></i><span>fa-reply-all</span></a><a href="#" class="iconChoosenItem" title="fa-retweet"><i class="fa fa-retweet"></i><span>fa-retweet</span></a><a href="#" class="iconChoosenItem" title="fa-road"><i class="fa fa-road"></i><span>fa-road</span></a><a href="#" class="iconChoosenItem" title="fa-rocket"><i class="fa fa-rocket"></i><span>fa-rocket</span></a><a href="#" class="iconChoosenItem" title="fa-rss"><i class="fa fa-rss"></i><span>fa-rss</span></a><a href="#" class="iconChoosenItem" title="fa-rss-square"><i class="fa fa-rss-square"></i><span>fa-rss-square</span></a><a href="#" class="iconChoosenItem" title="fa-search"><i class="fa fa-search"></i><span>fa-search</span></a><a href="#" class="iconChoosenItem" title="fa-search-minus"><i class="fa fa-search-minus"></i><span>fa-search-minus</span></a><a href="#" class="iconChoosenItem" title="fa-search-plus"><i class="fa fa-search-plus"></i><span>fa-search-plus</span></a><a href="#" class="iconChoosenItem" title="fa-send"><i class="fa fa-send"></i><span>fa-send</span></a><a href="#" class="iconChoosenItem" title="fa-send-o"><i class="fa fa-send-o"></i><span>fa-send-o</span></a><a href="#" class="iconChoosenItem" title="fa-share"><i class="fa fa-share"></i><span>fa-share</span></a><a href="#" class="iconChoosenItem" title="fa-share-alt"><i class="fa fa-share-alt"></i><span>fa-share-alt</span></a><a href="#" class="iconChoosenItem" title="fa-share-alt-square"><i class="fa fa-share-alt-square"></i><span>fa-share-alt-square</span></a><a href="#" class="iconChoosenItem" title="fa-share-square"><i class="fa fa-share-square"></i><span>fa-share-square</span></a><a href="#" class="iconChoosenItem" title="fa-share-square-o"><i class="fa fa-share-square-o"></i><span>fa-share-square-o</span></a><a href="#" class="iconChoosenItem" title="fa-shield"><i class="fa fa-shield"></i><span>fa-shield</span></a><a href="#" class="iconChoosenItem" title="fa-shopping-cart"><i class="fa fa-shopping-cart"></i><span>fa-shopping-cart</span></a><a href="#" class="iconChoosenItem" title="fa-sign-in"><i class="fa fa-sign-in"></i><span>fa-sign-in</span></a><a href="#" class="iconChoosenItem" title="fa-sign-out"><i class="fa fa-sign-out"></i><span>fa-sign-out</span></a><a href="#" class="iconChoosenItem" title="fa-signal"><i class="fa fa-signal"></i><span>fa-signal</span></a><a href="#" class="iconChoosenItem" title="fa-sitemap"><i class="fa fa-sitemap"></i><span>fa-sitemap</span></a><a href="#" class="iconChoosenItem" title="fa-sliders"><i class="fa fa-sliders"></i><span>fa-sliders</span></a><a href="#" class="iconChoosenItem" title="fa-smile-o"><i class="fa fa-smile-o"></i><span>fa-smile-o</span></a><a href="#" class="iconChoosenItem" title="fa-sort"><i class="fa fa-sort"></i><span>fa-sort</span></a><a href="#" class="iconChoosenItem" title="fa-sort-alpha-asc"><i class="fa fa-sort-alpha-asc"></i><span>fa-sort-alpha-asc</span></a><a href="#" class="iconChoosenItem" title="fa-sort-alpha-desc"><i class="fa fa-sort-alpha-desc"></i><span>fa-sort-alpha-desc</span></a><a href="#" class="iconChoosenItem" title="fa-sort-amount-asc"><i class="fa fa-sort-amount-asc"></i><span>fa-sort-amount-asc</span></a><a href="#" class="iconChoosenItem" title="fa-sort-amount-desc"><i class="fa fa-sort-amount-desc"></i><span>fa-sort-amount-desc</span></a><a href="#" class="iconChoosenItem" title="fa-sort-asc"><i class="fa fa-sort-asc"></i><span>fa-sort-asc</span></a><a href="#" class="iconChoosenItem" title="fa-sort-desc"><i class="fa fa-sort-desc"></i><span>fa-sort-desc</span></a><a href="#" class="iconChoosenItem" title="fa-sort-down"><i class="fa fa-sort-down"></i><span>fa-sort-down</span></a><a href="#" class="iconChoosenItem" title="fa-sort-numeric-asc"><i class="fa fa-sort-numeric-asc"></i><span>fa-sort-numeric-asc</span></a><a href="#" class="iconChoosenItem" title="fa-sort-numeric-desc"><i class="fa fa-sort-numeric-desc"></i><span>fa-sort-numeric-desc</span></a><a href="#" class="iconChoosenItem" title="fa-sort-up"><i class="fa fa-sort-up"></i><span>fa-sort-up</span></a><a href="#" class="iconChoosenItem" title="fa-space-shuttle"><i class="fa fa-space-shuttle"></i><span>fa-space-shuttle</span></a><a href="#" class="iconChoosenItem" title="fa-spinner"><i class="fa fa-spinner"></i><span>fa-spinner</span></a><a href="#" class="iconChoosenItem" title="fa-spoon"><i class="fa fa-spoon"></i><span>fa-spoon</span></a><a href="#" class="iconChoosenItem" title="fa-square"><i class="fa fa-square"></i><span>fa-square</span></a><a href="#" class="iconChoosenItem" title="fa-square-o"><i class="fa fa-square-o"></i><span>fa-square-o</span></a><a href="#" class="iconChoosenItem" title="fa-star"><i class="fa fa-star"></i><span>fa-star</span></a><a href="#" class="iconChoosenItem" title="fa-star-half"><i class="fa fa-star-half"></i><span>fa-star-half</span></a><a href="#" class="iconChoosenItem" title="fa-star-half-empty"><i class="fa fa-star-half-empty"></i><span>fa-star-half-empty</span></a><a href="#" class="iconChoosenItem" title="fa-star-half-full"><i class="fa fa-star-half-full"></i><span>fa-star-half-full</span></a><a href="#" class="iconChoosenItem" title="fa-star-half-o"><i class="fa fa-star-half-o"></i><span>fa-star-half-o</span></a><a href="#" class="iconChoosenItem" title="fa-star-o"><i class="fa fa-star-o"></i><span>fa-star-o</span></a><a href="#" class="iconChoosenItem" title="fa-suitcase"><i class="fa fa-suitcase"></i><span>fa-suitcase</span></a><a href="#" class="iconChoosenItem" title="fa-sun-o"><i class="fa fa-sun-o"></i><span>fa-sun-o</span></a><a href="#" class="iconChoosenItem" title="fa-support"><i class="fa fa-support"></i><span>fa-support</span></a><a href="#" class="iconChoosenItem" title="fa-tablet"><i class="fa fa-tablet"></i><span>fa-tablet</span></a><a href="#" class="iconChoosenItem" title="fa-tachometer"><i class="fa fa-tachometer"></i><span>fa-tachometer</span></a><a href="#" class="iconChoosenItem" title="fa-tag"><i class="fa fa-tag"></i><span>fa-tag</span></a><a href="#" class="iconChoosenItem" title="fa-tags"><i class="fa fa-tags"></i><span>fa-tags</span></a><a href="#" class="iconChoosenItem" title="fa-tasks"><i class="fa fa-tasks"></i><span>fa-tasks</span></a><a href="#" class="iconChoosenItem" title="fa-taxi"><i class="fa fa-taxi"></i><span>fa-taxi</span></a><a href="#" class="iconChoosenItem" title="fa-terminal"><i class="fa fa-terminal"></i><span>fa-terminal</span></a><a href="#" class="iconChoosenItem" title="fa-thumb-tack"><i class="fa fa-thumb-tack"></i><span>fa-thumb-tack</span></a><a href="#" class="iconChoosenItem" title="fa-thumbs-down"><i class="fa fa-thumbs-down"></i><span>fa-thumbs-down</span></a><a href="#" class="iconChoosenItem" title="fa-thumbs-o-down"><i class="fa fa-thumbs-o-down"></i><span>fa-thumbs-o-down</span></a><a href="#" class="iconChoosenItem" title="fa-thumbs-o-up"><i class="fa fa-thumbs-o-up"></i><span>fa-thumbs-o-up</span></a><a href="#" class="iconChoosenItem" title="fa-thumbs-up"><i class="fa fa-thumbs-up"></i><span>fa-thumbs-up</span></a><a href="#" class="iconChoosenItem" title="fa-ticket"><i class="fa fa-ticket"></i><span>fa-ticket</span></a><a href="#" class="iconChoosenItem" title="fa-times"><i class="fa fa-times"></i><span>fa-times</span></a><a href="#" class="iconChoosenItem" title="fa-times-circle"><i class="fa fa-times-circle"></i><span>fa-times-circle</span></a><a href="#" class="iconChoosenItem" title="fa-times-circle-o"><i class="fa fa-times-circle-o"></i><span>fa-times-circle-o</span></a><a href="#" class="iconChoosenItem" title="fa-tint"><i class="fa fa-tint"></i><span>fa-tint</span></a><a href="#" class="iconChoosenItem" title="fa-toggle-down"><i class="fa fa-toggle-down"></i><span>fa-toggle-down</span></a><a href="#" class="iconChoosenItem" title="fa-toggle-left"><i class="fa fa-toggle-left"></i><span>fa-toggle-left</span></a><a href="#" class="iconChoosenItem" title="fa-toggle-right"><i class="fa fa-toggle-right"></i><span>fa-toggle-right</span></a><a href="#" class="iconChoosenItem" title="fa-toggle-up"><i class="fa fa-toggle-up"></i><span>fa-toggle-up</span></a><a href="#" class="iconChoosenItem" title="fa-trash-o"><i class="fa fa-trash-o"></i><span>fa-trash-o</span></a><a href="#" class="iconChoosenItem" title="fa-tree"><i class="fa fa-tree"></i><span>fa-tree</span></a><a href="#" class="iconChoosenItem" title="fa-trophy"><i class="fa fa-trophy"></i><span>fa-trophy</span></a><a href="#" class="iconChoosenItem" title="fa-truck"><i class="fa fa-truck"></i><span>fa-truck</span></a><a href="#" class="iconChoosenItem" title="fa-umbrella"><i class="fa fa-umbrella"></i><span>fa-umbrella</span></a><a href="#" class="iconChoosenItem" title="fa-university"><i class="fa fa-university"></i><span>fa-university</span></a><a href="#" class="iconChoosenItem" title="fa-unlock"><i class="fa fa-unlock"></i><span>fa-unlock</span></a><a href="#" class="iconChoosenItem" title="fa-unlock-alt"><i class="fa fa-unlock-alt"></i><span>fa-unlock-alt</span></a><a href="#" class="iconChoosenItem" title="fa-unsorted"><i class="fa fa-unsorted"></i><span>fa-unsorted</span></a><a href="#" class="iconChoosenItem" title="fa-upload"><i class="fa fa-upload"></i><span>fa-upload</span></a><a href="#" class="iconChoosenItem" title="fa-user"><i class="fa fa-user"></i><span>fa-user</span></a><a href="#" class="iconChoosenItem" title="fa-users"><i class="fa fa-users"></i><span>fa-users</span></a><a href="#" class="iconChoosenItem" title="fa-video-camera"><i class="fa fa-video-camera"></i><span>fa-video-camera</span></a><a href="#" class="iconChoosenItem" title="fa-volume-down"><i class="fa fa-volume-down"></i><span>fa-volume-down</span></a><a href="#" class="iconChoosenItem" title="fa-volume-off"><i class="fa fa-volume-off"></i><span>fa-volume-off</span></a><a href="#" class="iconChoosenItem" title="fa-volume-up"><i class="fa fa-volume-up"></i><span>fa-volume-up</span></a><a href="#" class="iconChoosenItem" title="fa-warning"><i class="fa fa-warning"></i><span>fa-warning</span></a><a href="#" class="iconChoosenItem" title="fa-wheelchair"><i class="fa fa-wheelchair"></i><span>fa-wheelchair</span></a><a href="#" class="iconChoosenItem" title="fa-wrench"><i class="fa fa-wrench"></i><span>fa-wrench</span></a></div><div class="tab-pane fade" id="iconChoosenTab2"><a href="#" class="iconChoosenItem" title="fa-file"><i class="fa fa-file"></i><span>fa-file</span></a><a href="#" class="iconChoosenItem" title="fa-file-archive-o"><i class="fa fa-file-archive-o"></i><span>fa-file-archive-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-audio-o"><i class="fa fa-file-audio-o"></i><span>fa-file-audio-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-code-o"><i class="fa fa-file-code-o"></i><span>fa-file-code-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-excel-o"><i class="fa fa-file-excel-o"></i><span>fa-file-excel-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-image-o"><i class="fa fa-file-image-o"></i><span>fa-file-image-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-movie-o"><i class="fa fa-file-movie-o"></i><span>fa-file-movie-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-o"><i class="fa fa-file-o"></i><span>fa-file-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-pdf-o"><i class="fa fa-file-pdf-o"></i><span>fa-file-pdf-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-photo-o"><i class="fa fa-file-photo-o"></i><span>fa-file-photo-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-picture-o"><i class="fa fa-file-picture-o"></i><span>fa-file-picture-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-powerpoint-o"><i class="fa fa-file-powerpoint-o"></i><span>fa-file-powerpoint-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-sound-o"><i class="fa fa-file-sound-o"></i><span>fa-file-sound-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-text"><i class="fa fa-file-text"></i><span>fa-file-text</span></a><a href="#" class="iconChoosenItem" title="fa-file-text-o"><i class="fa fa-file-text-o"></i><span>fa-file-text-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-video-o"><i class="fa fa-file-video-o"></i><span>fa-file-video-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-word-o"><i class="fa fa-file-word-o"></i><span>fa-file-word-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-zip-o"><i class="fa fa-file-zip-o"></i><span>fa-file-zip-o</span></a></div><div class="tab-pane fade" id="iconChoosenTab3"><a href="#" class="iconChoosenItem" title="fa-circle-o-notch"><i class="fa fa-circle-o-notch"></i><span>fa-circle-o-notch</span></a><a href="#" class="iconChoosenItem" title="fa-cog"><i class="fa fa-cog"></i><span>fa-cog</span></a><a href="#" class="iconChoosenItem" title="fa-gear"><i class="fa fa-gear"></i><span>fa-gear</span></a><a href="#" class="iconChoosenItem" title="fa-refresh"><i class="fa fa-refresh"></i><span>fa-refresh</span></a><a href="#" class="iconChoosenItem" title="fa-spinner"><i class="fa fa-spinner"></i><span>fa-spinner</span></a></div><div class="tab-pane fade" id="iconChoosenTab4"><a href="#" class="iconChoosenItem" title="fa-check-square"><i class="fa fa-check-square"></i><span>fa-check-square</span></a><a href="#" class="iconChoosenItem" title="fa-check-square-o"><i class="fa fa-check-square-o"></i><span>fa-check-square-o</span></a><a href="#" class="iconChoosenItem" title="fa-circle"><i class="fa fa-circle"></i><span>fa-circle</span></a><a href="#" class="iconChoosenItem" title="fa-circle-o"><i class="fa fa-circle-o"></i><span>fa-circle-o</span></a><a href="#" class="iconChoosenItem" title="fa-dot-circle-o"><i class="fa fa-dot-circle-o"></i><span>fa-dot-circle-o</span></a><a href="#" class="iconChoosenItem" title="fa-minus-square"><i class="fa fa-minus-square"></i><span>fa-minus-square</span></a><a href="#" class="iconChoosenItem" title="fa-minus-square-o"><i class="fa fa-minus-square-o"></i><span>fa-minus-square-o</span></a><a href="#" class="iconChoosenItem" title="fa-plus-square"><i class="fa fa-plus-square"></i><span>fa-plus-square</span></a><a href="#" class="iconChoosenItem" title="fa-plus-square-o"><i class="fa fa-plus-square-o"></i><span>fa-plus-square-o</span></a><a href="#" class="iconChoosenItem" title="fa-square"><i class="fa fa-square"></i><span>fa-square</span></a><a href="#" class="iconChoosenItem" title="fa-square-o"><i class="fa fa-square-o"></i><span>fa-square-o</span></a></div><div class="tab-pane fade" id="iconChoosenTab5"><a href="#" class="iconChoosenItem" title="fa-bitcoin"><i class="fa fa-bitcoin"></i><span>fa-bitcoin</span></a><a href="#" class="iconChoosenItem" title="fa-btc"><i class="fa fa-btc"></i><span>fa-btc</span></a><a href="#" class="iconChoosenItem" title="fa-cny"><i class="fa fa-cny"></i><span>fa-cny</span></a><a href="#" class="iconChoosenItem" title="fa-dollar"><i class="fa fa-dollar"></i><span>fa-dollar</span></a><a href="#" class="iconChoosenItem" title="fa-eur"><i class="fa fa-eur"></i><span>fa-eur</span></a><a href="#" class="iconChoosenItem" title="fa-euro"><i class="fa fa-euro"></i><span>fa-euro</span></a><a href="#" class="iconChoosenItem" title="fa-gbp"><i class="fa fa-gbp"></i><span>fa-gbp</span></a><a href="#" class="iconChoosenItem" title="fa-inr"><i class="fa fa-inr"></i><span>fa-inr</span></a><a href="#" class="iconChoosenItem" title="fa-jpy"><i class="fa fa-jpy"></i><span>fa-jpy</span></a><a href="#" class="iconChoosenItem" title="fa-krw"><i class="fa fa-krw"></i><span>fa-krw</span></a><a href="#" class="iconChoosenItem" title="fa-money"><i class="fa fa-money"></i><span>fa-money</span></a><a href="#" class="iconChoosenItem" title="fa-rmb"><i class="fa fa-rmb"></i><span>fa-rmb</span></a><a href="#" class="iconChoosenItem" title="fa-rouble"><i class="fa fa-rouble"></i><span>fa-rouble</span></a><a href="#" class="iconChoosenItem" title="fa-rub"><i class="fa fa-rub"></i><span>fa-rub</span></a><a href="#" class="iconChoosenItem" title="fa-ruble"><i class="fa fa-ruble"></i><span>fa-ruble</span></a><a href="#" class="iconChoosenItem" title="fa-rupee"><i class="fa fa-rupee"></i><span>fa-rupee</span></a><a href="#" class="iconChoosenItem" title="fa-try"><i class="fa fa-try"></i><span>fa-try</span></a><a href="#" class="iconChoosenItem" title="fa-turkish-lira"><i class="fa fa-turkish-lira"></i><span>fa-turkish-lira</span></a><a href="#" class="iconChoosenItem" title="fa-usd"><i class="fa fa-usd"></i><span>fa-usd</span></a><a href="#" class="iconChoosenItem" title="fa-won"><i class="fa fa-won"></i><span>fa-won</span></a><a href="#" class="iconChoosenItem" title="fa-yen"><i class="fa fa-yen"></i><span>fa-yen</span></a></div><div class="tab-pane fade" id="iconChoosenTab6"><a href="#" class="iconChoosenItem" title="fa-align-center"><i class="fa fa-align-center"></i><span>fa-align-center</span></a><a href="#" class="iconChoosenItem" title="fa-align-justify"><i class="fa fa-align-justify"></i><span>fa-align-justify</span></a><a href="#" class="iconChoosenItem" title="fa-align-left"><i class="fa fa-align-left"></i><span>fa-align-left</span></a><a href="#" class="iconChoosenItem" title="fa-align-right"><i class="fa fa-align-right"></i><span>fa-align-right</span></a><a href="#" class="iconChoosenItem" title="fa-bold"><i class="fa fa-bold"></i><span>fa-bold</span></a><a href="#" class="iconChoosenItem" title="fa-chain"><i class="fa fa-chain"></i><span>fa-chain</span></a><a href="#" class="iconChoosenItem" title="fa-chain-broken"><i class="fa fa-chain-broken"></i><span>fa-chain-broken</span></a><a href="#" class="iconChoosenItem" title="fa-clipboard"><i class="fa fa-clipboard"></i><span>fa-clipboard</span></a><a href="#" class="iconChoosenItem" title="fa-columns"><i class="fa fa-columns"></i><span>fa-columns</span></a><a href="#" class="iconChoosenItem" title="fa-copy"><i class="fa fa-copy"></i><span>fa-copy</span></a><a href="#" class="iconChoosenItem" title="fa-cut"><i class="fa fa-cut"></i><span>fa-cut</span></a><a href="#" class="iconChoosenItem" title="fa-dedent"><i class="fa fa-dedent"></i><span>fa-dedent</span></a><a href="#" class="iconChoosenItem" title="fa-eraser"><i class="fa fa-eraser"></i><span>fa-eraser</span></a><a href="#" class="iconChoosenItem" title="fa-file"><i class="fa fa-file"></i><span>fa-file</span></a><a href="#" class="iconChoosenItem" title="fa-file-o"><i class="fa fa-file-o"></i><span>fa-file-o</span></a><a href="#" class="iconChoosenItem" title="fa-file-text"><i class="fa fa-file-text"></i><span>fa-file-text</span></a><a href="#" class="iconChoosenItem" title="fa-file-text-o"><i class="fa fa-file-text-o"></i><span>fa-file-text-o</span></a><a href="#" class="iconChoosenItem" title="fa-files-o"><i class="fa fa-files-o"></i><span>fa-files-o</span></a><a href="#" class="iconChoosenItem" title="fa-floppy-o"><i class="fa fa-floppy-o"></i><span>fa-floppy-o</span></a><a href="#" class="iconChoosenItem" title="fa-font"><i class="fa fa-font"></i><span>fa-font</span></a><a href="#" class="iconChoosenItem" title="fa-header"><i class="fa fa-header"></i><span>fa-header</span></a><a href="#" class="iconChoosenItem" title="fa-indent"><i class="fa fa-indent"></i><span>fa-indent</span></a><a href="#" class="iconChoosenItem" title="fa-italic"><i class="fa fa-italic"></i><span>fa-italic</span></a><a href="#" class="iconChoosenItem" title="fa-link"><i class="fa fa-link"></i><span>fa-link</span></a><a href="#" class="iconChoosenItem" title="fa-list"><i class="fa fa-list"></i><span>fa-list</span></a><a href="#" class="iconChoosenItem" title="fa-list-alt"><i class="fa fa-list-alt"></i><span>fa-list-alt</span></a><a href="#" class="iconChoosenItem" title="fa-list-ol"><i class="fa fa-list-ol"></i><span>fa-list-ol</span></a><a href="#" class="iconChoosenItem" title="fa-list-ul"><i class="fa fa-list-ul"></i><span>fa-list-ul</span></a><a href="#" class="iconChoosenItem" title="fa-outdent"><i class="fa fa-outdent"></i><span>fa-outdent</span></a><a href="#" class="iconChoosenItem" title="fa-paperclip"><i class="fa fa-paperclip"></i><span>fa-paperclip</span></a><a href="#" class="iconChoosenItem" title="fa-paragraph"><i class="fa fa-paragraph"></i><span>fa-paragraph</span></a><a href="#" class="iconChoosenItem" title="fa-paste"><i class="fa fa-paste"></i><span>fa-paste</span></a><a href="#" class="iconChoosenItem" title="fa-repeat"><i class="fa fa-repeat"></i><span>fa-repeat</span></a><a href="#" class="iconChoosenItem" title="fa-rotate-left"><i class="fa fa-rotate-left"></i><span>fa-rotate-left</span></a><a href="#" class="iconChoosenItem" title="fa-rotate-right"><i class="fa fa-rotate-right"></i><span>fa-rotate-right</span></a><a href="#" class="iconChoosenItem" title="fa-save"><i class="fa fa-save"></i><span>fa-save</span></a><a href="#" class="iconChoosenItem" title="fa-scissors"><i class="fa fa-scissors"></i><span>fa-scissors</span></a><a href="#" class="iconChoosenItem" title="fa-strikethrough"><i class="fa fa-strikethrough"></i><span>fa-strikethrough</span></a><a href="#" class="iconChoosenItem" title="fa-subscript"><i class="fa fa-subscript"></i><span>fa-subscript</span></a><a href="#" class="iconChoosenItem" title="fa-superscript"><i class="fa fa-superscript"></i><span>fa-superscript</span></a><a href="#" class="iconChoosenItem" title="fa-table"><i class="fa fa-table"></i><span>fa-table</span></a><a href="#" class="iconChoosenItem" title="fa-text-height"><i class="fa fa-text-height"></i><span>fa-text-height</span></a><a href="#" class="iconChoosenItem" title="fa-text-width"><i class="fa fa-text-width"></i><span>fa-text-width</span></a><a href="#" class="iconChoosenItem" title="fa-th"><i class="fa fa-th"></i><span>fa-th</span></a><a href="#" class="iconChoosenItem" title="fa-th-large"><i class="fa fa-th-large"></i><span>fa-th-large</span></a><a href="#" class="iconChoosenItem" title="fa-th-list"><i class="fa fa-th-list"></i><span>fa-th-list</span></a><a href="#" class="iconChoosenItem" title="fa-underline"><i class="fa fa-underline"></i><span>fa-underline</span></a><a href="#" class="iconChoosenItem" title="fa-undo"><i class="fa fa-undo"></i><span>fa-undo</span></a><a href="#" class="iconChoosenItem" title="fa-unlink"><i class="fa fa-unlink"></i><span>fa-unlink</span></a></div><div class="tab-pane fade" id="iconChoosenTab7"><a href="#" class="iconChoosenItem" title="fa-angle-double-down"><i class="fa fa-angle-double-down"></i><span>fa-angle-double-down</span></a><a href="#" class="iconChoosenItem" title="fa-angle-double-left"><i class="fa fa-angle-double-left"></i><span>fa-angle-double-left</span></a><a href="#" class="iconChoosenItem" title="fa-angle-double-right"><i class="fa fa-angle-double-right"></i><span>fa-angle-double-right</span></a><a href="#" class="iconChoosenItem" title="fa-angle-double-up"><i class="fa fa-angle-double-up"></i><span>fa-angle-double-up</span></a><a href="#" class="iconChoosenItem" title="fa-angle-down"><i class="fa fa-angle-down"></i><span>fa-angle-down</span></a><a href="#" class="iconChoosenItem" title="fa-angle-left"><i class="fa fa-angle-left"></i><span>fa-angle-left</span></a><a href="#" class="iconChoosenItem" title="fa-angle-right"><i class="fa fa-angle-right"></i><span>fa-angle-right</span></a><a href="#" class="iconChoosenItem" title="fa-angle-up"><i class="fa fa-angle-up"></i><span>fa-angle-up</span></a><a href="#" class="iconChoosenItem" title="fa-arrow-circle-down"><i class="fa fa-arrow-circle-down"></i><span>fa-arrow-circle-down</span></a><a href="#" class="iconChoosenItem" title="fa-arrow-circle-left"><i class="fa fa-arrow-circle-left"></i><span>fa-arrow-circle-left</span></a><a href="#" class="iconChoosenItem" title="fa-arrow-circle-o-down"><i class="fa fa-arrow-circle-o-down"></i><span>fa-arrow-circle-o-down</span></a><a href="#" class="iconChoosenItem" title="fa-arrow-circle-o-left"><i class="fa fa-arrow-circle-o-left"></i><span>fa-arrow-circle-o-left</span></a><a href="#" class="iconChoosenItem" title="fa-arrow-circle-o-right"><i class="fa fa-arrow-circle-o-right"></i><span>fa-arrow-circle-o-right</span></a><a href="#" class="iconChoosenItem" title="fa-arrow-circle-o-up"><i class="fa fa-arrow-circle-o-up"></i><span>fa-arrow-circle-o-up</span></a><a href="#" class="iconChoosenItem" title="fa-arrow-circle-right"><i class="fa fa-arrow-circle-right"></i><span>fa-arrow-circle-right</span></a><a href="#" class="iconChoosenItem" title="fa-arrow-circle-up"><i class="fa fa-arrow-circle-up"></i><span>fa-arrow-circle-up</span></a><a href="#" class="iconChoosenItem" title="fa-arrow-down"><i class="fa fa-arrow-down"></i><span>fa-arrow-down</span></a><a href="#" class="iconChoosenItem" title="fa-arrow-left"><i class="fa fa-arrow-left"></i><span>fa-arrow-left</span></a><a href="#" class="iconChoosenItem" title="fa-arrow-right"><i class="fa fa-arrow-right"></i><span>fa-arrow-right</span></a><a href="#" class="iconChoosenItem" title="fa-arrow-up"><i class="fa fa-arrow-up"></i><span>fa-arrow-up</span></a><a href="#" class="iconChoosenItem" title="fa-arrows"><i class="fa fa-arrows"></i><span>fa-arrows</span></a><a href="#" class="iconChoosenItem" title="fa-arrows-alt"><i class="fa fa-arrows-alt"></i><span>fa-arrows-alt</span></a><a href="#" class="iconChoosenItem" title="fa-arrows-h"><i class="fa fa-arrows-h"></i><span>fa-arrows-h</span></a><a href="#" class="iconChoosenItem" title="fa-arrows-v"><i class="fa fa-arrows-v"></i><span>fa-arrows-v</span></a><a href="#" class="iconChoosenItem" title="fa-caret-down"><i class="fa fa-caret-down"></i><span>fa-caret-down</span></a><a href="#" class="iconChoosenItem" title="fa-caret-left"><i class="fa fa-caret-left"></i><span>fa-caret-left</span></a><a href="#" class="iconChoosenItem" title="fa-caret-right"><i class="fa fa-caret-right"></i><span>fa-caret-right</span></a><a href="#" class="iconChoosenItem" title="fa-caret-square-o-down"><i class="fa fa-caret-square-o-down"></i><span>fa-caret-square-o-down</span></a><a href="#" class="iconChoosenItem" title="fa-caret-square-o-left"><i class="fa fa-caret-square-o-left"></i><span>fa-caret-square-o-left</span></a><a href="#" class="iconChoosenItem" title="fa-caret-square-o-right"><i class="fa fa-caret-square-o-right"></i><span>fa-caret-square-o-right</span></a><a href="#" class="iconChoosenItem" title="fa-caret-square-o-up"><i class="fa fa-caret-square-o-up"></i><span>fa-caret-square-o-up</span></a><a href="#" class="iconChoosenItem" title="fa-caret-up"><i class="fa fa-caret-up"></i><span>fa-caret-up</span></a><a href="#" class="iconChoosenItem" title="fa-chevron-circle-down"><i class="fa fa-chevron-circle-down"></i><span>fa-chevron-circle-down</span></a><a href="#" class="iconChoosenItem" title="fa-chevron-circle-left"><i class="fa fa-chevron-circle-left"></i><span>fa-chevron-circle-left</span></a><a href="#" class="iconChoosenItem" title="fa-chevron-circle-right"><i class="fa fa-chevron-circle-right"></i><span>fa-chevron-circle-right</span></a><a href="#" class="iconChoosenItem" title="fa-chevron-circle-up"><i class="fa fa-chevron-circle-up"></i><span>fa-chevron-circle-up</span></a><a href="#" class="iconChoosenItem" title="fa-chevron-down"><i class="fa fa-chevron-down"></i><span>fa-chevron-down</span></a><a href="#" class="iconChoosenItem" title="fa-chevron-left"><i class="fa fa-chevron-left"></i><span>fa-chevron-left</span></a><a href="#" class="iconChoosenItem" title="fa-chevron-right"><i class="fa fa-chevron-right"></i><span>fa-chevron-right</span></a><a href="#" class="iconChoosenItem" title="fa-chevron-up"><i class="fa fa-chevron-up"></i><span>fa-chevron-up</span></a><a href="#" class="iconChoosenItem" title="fa-hand-o-down"><i class="fa fa-hand-o-down"></i><span>fa-hand-o-down</span></a><a href="#" class="iconChoosenItem" title="fa-hand-o-left"><i class="fa fa-hand-o-left"></i><span>fa-hand-o-left</span></a><a href="#" class="iconChoosenItem" title="fa-hand-o-right"><i class="fa fa-hand-o-right"></i><span>fa-hand-o-right</span></a><a href="#" class="iconChoosenItem" title="fa-hand-o-up"><i class="fa fa-hand-o-up"></i><span>fa-hand-o-up</span></a><a href="#" class="iconChoosenItem" title="fa-long-arrow-down"><i class="fa fa-long-arrow-down"></i><span>fa-long-arrow-down</span></a><a href="#" class="iconChoosenItem" title="fa-long-arrow-left"><i class="fa fa-long-arrow-left"></i><span>fa-long-arrow-left</span></a><a href="#" class="iconChoosenItem" title="fa-long-arrow-right"><i class="fa fa-long-arrow-right"></i><span>fa-long-arrow-right</span></a><a href="#" class="iconChoosenItem" title="fa-long-arrow-up"><i class="fa fa-long-arrow-up"></i><span>fa-long-arrow-up</span></a><a href="#" class="iconChoosenItem" title="fa-toggle-down"><i class="fa fa-toggle-down"></i><span>fa-toggle-down</span></a><a href="#" class="iconChoosenItem" title="fa-toggle-left"><i class="fa fa-toggle-left"></i><span>fa-toggle-left</span></a><a href="#" class="iconChoosenItem" title="fa-toggle-right"><i class="fa fa-toggle-right"></i><span>fa-toggle-right</span></a><a href="#" class="iconChoosenItem" title="fa-toggle-up"><i class="fa fa-toggle-up"></i><span>fa-toggle-up</span></a></div><div class="tab-pane fade" id="iconChoosenTab8"><a href="#" class="iconChoosenItem" title="fa-arrows-alt"><i class="fa fa-arrows-alt"></i><span>fa-arrows-alt</span></a><a href="#" class="iconChoosenItem" title="fa-backward"><i class="fa fa-backward"></i><span>fa-backward</span></a><a href="#" class="iconChoosenItem" title="fa-compress"><i class="fa fa-compress"></i><span>fa-compress</span></a><a href="#" class="iconChoosenItem" title="fa-eject"><i class="fa fa-eject"></i><span>fa-eject</span></a><a href="#" class="iconChoosenItem" title="fa-expand"><i class="fa fa-expand"></i><span>fa-expand</span></a><a href="#" class="iconChoosenItem" title="fa-fast-backward"><i class="fa fa-fast-backward"></i><span>fa-fast-backward</span></a><a href="#" class="iconChoosenItem" title="fa-fast-forward"><i class="fa fa-fast-forward"></i><span>fa-fast-forward</span></a><a href="#" class="iconChoosenItem" title="fa-forward"><i class="fa fa-forward"></i><span>fa-forward</span></a><a href="#" class="iconChoosenItem" title="fa-pause"><i class="fa fa-pause"></i><span>fa-pause</span></a><a href="#" class="iconChoosenItem" title="fa-play"><i class="fa fa-play"></i><span>fa-play</span></a><a href="#" class="iconChoosenItem" title="fa-play-circle"><i class="fa fa-play-circle"></i><span>fa-play-circle</span></a><a href="#" class="iconChoosenItem" title="fa-play-circle-o"><i class="fa fa-play-circle-o"></i><span>fa-play-circle-o</span></a><a href="#" class="iconChoosenItem" title="fa-step-backward"><i class="fa fa-step-backward"></i><span>fa-step-backward</span></a><a href="#" class="iconChoosenItem" title="fa-step-forward"><i class="fa fa-step-forward"></i><span>fa-step-forward</span></a><a href="#" class="iconChoosenItem" title="fa-stop"><i class="fa fa-stop"></i><span>fa-stop</span></a><a href="#" class="iconChoosenItem" title="fa-youtube-play"><i class="fa fa-youtube-play"></i><span>fa-youtube-play</span></a></div><div class="tab-pane fade" id="iconChoosenTab9"><a href="#" class="iconChoosenItem" title="fa-adn"><i class="fa fa-adn"></i><span>fa-adn</span></a><a href="#" class="iconChoosenItem" title="fa-android"><i class="fa fa-android"></i><span>fa-android</span></a><a href="#" class="iconChoosenItem" title="fa-apple"><i class="fa fa-apple"></i><span>fa-apple</span></a><a href="#" class="iconChoosenItem" title="fa-behance"><i class="fa fa-behance"></i><span>fa-behance</span></a><a href="#" class="iconChoosenItem" title="fa-behance-square"><i class="fa fa-behance-square"></i><span>fa-behance-square</span></a><a href="#" class="iconChoosenItem" title="fa-bitbucket"><i class="fa fa-bitbucket"></i><span>fa-bitbucket</span></a><a href="#" class="iconChoosenItem" title="fa-bitbucket-square"><i class="fa fa-bitbucket-square"></i><span>fa-bitbucket-square</span></a><a href="#" class="iconChoosenItem" title="fa-bitcoin"><i class="fa fa-bitcoin"></i><span>fa-bitcoin</span></a><a href="#" class="iconChoosenItem" title="fa-btc"><i class="fa fa-btc"></i><span>fa-btc</span></a><a href="#" class="iconChoosenItem" title="fa-codepen"><i class="fa fa-codepen"></i><span>fa-codepen</span></a><a href="#" class="iconChoosenItem" title="fa-css3"><i class="fa fa-css3"></i><span>fa-css3</span></a><a href="#" class="iconChoosenItem" title="fa-delicious"><i class="fa fa-delicious"></i><span>fa-delicious</span></a><a href="#" class="iconChoosenItem" title="fa-deviantart"><i class="fa fa-deviantart"></i><span>fa-deviantart</span></a><a href="#" class="iconChoosenItem" title="fa-digg"><i class="fa fa-digg"></i><span>fa-digg</span></a><a href="#" class="iconChoosenItem" title="fa-dribbble"><i class="fa fa-dribbble"></i><span>fa-dribbble</span></a><a href="#" class="iconChoosenItem" title="fa-dropbox"><i class="fa fa-dropbox"></i><span>fa-dropbox</span></a><a href="#" class="iconChoosenItem" title="fa-drupal"><i class="fa fa-drupal"></i><span>fa-drupal</span></a><a href="#" class="iconChoosenItem" title="fa-empire"><i class="fa fa-empire"></i><span>fa-empire</span></a><a href="#" class="iconChoosenItem" title="fa-facebook"><i class="fa fa-facebook"></i><span>fa-facebook</span></a><a href="#" class="iconChoosenItem" title="fa-facebook-square"><i class="fa fa-facebook-square"></i><span>fa-facebook-square</span></a><a href="#" class="iconChoosenItem" title="fa-flickr"><i class="fa fa-flickr"></i><span>fa-flickr</span></a><a href="#" class="iconChoosenItem" title="fa-foursquare"><i class="fa fa-foursquare"></i><span>fa-foursquare</span></a><a href="#" class="iconChoosenItem" title="fa-ge"><i class="fa fa-ge"></i><span>fa-ge</span></a><a href="#" class="iconChoosenItem" title="fa-git"><i class="fa fa-git"></i><span>fa-git</span></a><a href="#" class="iconChoosenItem" title="fa-git-square"><i class="fa fa-git-square"></i><span>fa-git-square</span></a><a href="#" class="iconChoosenItem" title="fa-github"><i class="fa fa-github"></i><span>fa-github</span></a><a href="#" class="iconChoosenItem" title="fa-github-alt"><i class="fa fa-github-alt"></i><span>fa-github-alt</span></a><a href="#" class="iconChoosenItem" title="fa-github-square"><i class="fa fa-github-square"></i><span>fa-github-square</span></a><a href="#" class="iconChoosenItem" title="fa-gittip"><i class="fa fa-gittip"></i><span>fa-gittip</span></a><a href="#" class="iconChoosenItem" title="fa-google"><i class="fa fa-google"></i><span>fa-google</span></a><a href="#" class="iconChoosenItem" title="fa-google-plus"><i class="fa fa-google-plus"></i><span>fa-google-plus</span></a><a href="#" class="iconChoosenItem" title="fa-google-plus-square"><i class="fa fa-google-plus-square"></i><span>fa-google-plus-square</span></a><a href="#" class="iconChoosenItem" title="fa-hacker-news"><i class="fa fa-hacker-news"></i><span>fa-hacker-news</span></a><a href="#" class="iconChoosenItem" title="fa-html5"><i class="fa fa-html5"></i><span>fa-html5</span></a><a href="#" class="iconChoosenItem" title="fa-instagram"><i class="fa fa-instagram"></i><span>fa-instagram</span></a><a href="#" class="iconChoosenItem" title="fa-joomla"><i class="fa fa-joomla"></i><span>fa-joomla</span></a><a href="#" class="iconChoosenItem" title="fa-jsfiddle"><i class="fa fa-jsfiddle"></i><span>fa-jsfiddle</span></a><a href="#" class="iconChoosenItem" title="fa-linkedin"><i class="fa fa-linkedin"></i><span>fa-linkedin</span></a><a href="#" class="iconChoosenItem" title="fa-linkedin-square"><i class="fa fa-linkedin-square"></i><span>fa-linkedin-square</span></a><a href="#" class="iconChoosenItem" title="fa-linux"><i class="fa fa-linux"></i><span>fa-linux</span></a><a href="#" class="iconChoosenItem" title="fa-maxcdn"><i class="fa fa-maxcdn"></i><span>fa-maxcdn</span></a><a href="#" class="iconChoosenItem" title="fa-openid"><i class="fa fa-openid"></i><span>fa-openid</span></a><a href="#" class="iconChoosenItem" title="fa-pagelines"><i class="fa fa-pagelines"></i><span>fa-pagelines</span></a><a href="#" class="iconChoosenItem" title="fa-pied-piper"><i class="fa fa-pied-piper"></i><span>fa-pied-piper</span></a><a href="#" class="iconChoosenItem" title="fa-pied-piper-alt"><i class="fa fa-pied-piper-alt"></i><span>fa-pied-piper-alt</span></a><a href="#" class="iconChoosenItem" title="fa-pied-piper-square"><i class="fa fa-pied-piper-square"></i><span>fa-pied-piper-square</span></a><a href="#" class="iconChoosenItem" title="fa-pinterest"><i class="fa fa-pinterest"></i><span>fa-pinterest</span></a><a href="#" class="iconChoosenItem" title="fa-pinterest-square"><i class="fa fa-pinterest-square"></i><span>fa-pinterest-square</span></a><a href="#" class="iconChoosenItem" title="fa-qq"><i class="fa fa-qq"></i><span>fa-qq</span></a><a href="#" class="iconChoosenItem" title="fa-ra"><i class="fa fa-ra"></i><span>fa-ra</span></a><a href="#" class="iconChoosenItem" title="fa-rebel"><i class="fa fa-rebel"></i><span>fa-rebel</span></a><a href="#" class="iconChoosenItem" title="fa-reddit"><i class="fa fa-reddit"></i><span>fa-reddit</span></a><a href="#" class="iconChoosenItem" title="fa-reddit-square"><i class="fa fa-reddit-square"></i><span>fa-reddit-square</span></a><a href="#" class="iconChoosenItem" title="fa-renren"><i class="fa fa-renren"></i><span>fa-renren</span></a><a href="#" class="iconChoosenItem" title="fa-share-alt"><i class="fa fa-share-alt"></i><span>fa-share-alt</span></a><a href="#" class="iconChoosenItem" title="fa-share-alt-square"><i class="fa fa-share-alt-square"></i><span>fa-share-alt-square</span></a><a href="#" class="iconChoosenItem" title="fa-skype"><i class="fa fa-skype"></i><span>fa-skype</span></a><a href="#" class="iconChoosenItem" title="fa-slack"><i class="fa fa-slack"></i><span>fa-slack</span></a><a href="#" class="iconChoosenItem" title="fa-soundcloud"><i class="fa fa-soundcloud"></i><span>fa-soundcloud</span></a><a href="#" class="iconChoosenItem" title="fa-spotify"><i class="fa fa-spotify"></i><span>fa-spotify</span></a><a href="#" class="iconChoosenItem" title="fa-stack-exchange"><i class="fa fa-stack-exchange"></i><span>fa-stack-exchange</span></a><a href="#" class="iconChoosenItem" title="fa-stack-overflow"><i class="fa fa-stack-overflow"></i><span>fa-stack-overflow</span></a><a href="#" class="iconChoosenItem" title="fa-steam"><i class="fa fa-steam"></i><span>fa-steam</span></a><a href="#" class="iconChoosenItem" title="fa-steam-square"><i class="fa fa-steam-square"></i><span>fa-steam-square</span></a><a href="#" class="iconChoosenItem" title="fa-stumbleupon"><i class="fa fa-stumbleupon"></i><span>fa-stumbleupon</span></a><a href="#" class="iconChoosenItem" title="fa-stumbleupon-circle"><i class="fa fa-stumbleupon-circle"></i><span>fa-stumbleupon-circle</span></a><a href="#" class="iconChoosenItem" title="fa-tencent-weibo"><i class="fa fa-tencent-weibo"></i><span>fa-tencent-weibo</span></a><a href="#" class="iconChoosenItem" title="fa-trello"><i class="fa fa-trello"></i><span>fa-trello</span></a><a href="#" class="iconChoosenItem" title="fa-tumblr"><i class="fa fa-tumblr"></i><span>fa-tumblr</span></a><a href="#" class="iconChoosenItem" title="fa-tumblr-square"><i class="fa fa-tumblr-square"></i><span>fa-tumblr-square</span></a><a href="#" class="iconChoosenItem" title="fa-twitter"><i class="fa fa-twitter"></i><span>fa-twitter</span></a><a href="#" class="iconChoosenItem" title="fa-twitter-square"><i class="fa fa-twitter-square"></i><span>fa-twitter-square</span></a><a href="#" class="iconChoosenItem" title="fa-vimeo-square"><i class="fa fa-vimeo-square"></i><span>fa-vimeo-square</span></a><a href="#" class="iconChoosenItem" title="fa-vine"><i class="fa fa-vine"></i><span>fa-vine</span></a><a href="#" class="iconChoosenItem" title="fa-vk"><i class="fa fa-vk"></i><span>fa-vk</span></a><a href="#" class="iconChoosenItem" title="fa-wechat"><i class="fa fa-wechat"></i><span>fa-wechat</span></a><a href="#" class="iconChoosenItem" title="fa-weibo"><i class="fa fa-weibo"></i><span>fa-weibo</span></a><a href="#" class="iconChoosenItem" title="fa-weixin"><i class="fa fa-weixin"></i><span>fa-weixin</span></a><a href="#" class="iconChoosenItem" title="fa-windows"><i class="fa fa-windows"></i><span>fa-windows</span></a><a href="#" class="iconChoosenItem" title="fa-wordpress"><i class="fa fa-wordpress"></i><span>fa-wordpress</span></a><a href="#" class="iconChoosenItem" title="fa-xing"><i class="fa fa-xing"></i><span>fa-xing</span></a><a href="#" class="iconChoosenItem" title="fa-xing-square"><i class="fa fa-xing-square"></i><span>fa-xing-square</span></a><a href="#" class="iconChoosenItem" title="fa-yahoo"><i class="fa fa-yahoo"></i><span>fa-yahoo</span></a><a href="#" class="iconChoosenItem" title="fa-youtube"><i class="fa fa-youtube"></i><span>fa-youtube</span></a><a href="#" class="iconChoosenItem" title="fa-youtube-play"><i class="fa fa-youtube-play"></i><span>fa-youtube-play</span></a><a href="#" class="iconChoosenItem" title="fa-youtube-square"><i class="fa fa-youtube-square"></i><span>fa-youtube-square</span></a></div><div class="tab-pane fade" id="iconChoosenTab10"><a href="#" class="iconChoosenItem" title="fa-ambulance"><i class="fa fa-ambulance"></i><span>fa-ambulance</span></a><a href="#" class="iconChoosenItem" title="fa-h-square"><i class="fa fa-h-square"></i><span>fa-h-square</span></a><a href="#" class="iconChoosenItem" title="fa-hospital-o"><i class="fa fa-hospital-o"></i><span>fa-hospital-o</span></a><a href="#" class="iconChoosenItem" title="fa-medkit"><i class="fa fa-medkit"></i><span>fa-medkit</span></a><a href="#" class="iconChoosenItem" title="fa-plus-square"><i class="fa fa-plus-square"></i><span>fa-plus-square</span></a><a href="#" class="iconChoosenItem" title="fa-stethoscope"><i class="fa fa-stethoscope"></i><span>fa-stethoscope</span></a><a href="#" class="iconChoosenItem" title="fa-user-md"><i class="fa fa-user-md"></i><span>fa-user-md</span></a><a href="#" class="iconChoosenItem" title="fa-wheelchair"><i class="fa fa-wheelchair"></i><span>fa-wheelchair</span></a></div></div></div></div></div></div></div>';
        return this.each(function() {
            var $this = $(this);
            $this.click(function() {
                $('#iconChoosenModal').remove();
                $('body').append(temp);

                //调整样式
                $('a.iconChoosenItem').attr('style', 'display: block;float: left;text-align: center;width: 5em;height: 6em;overflow: hidden;margin: auto .3em;');
                $('a.iconChoosenItem i').attr('style', 'display: block;font-size: 2em;color: #000');
                $('a.iconChoosenItem span').attr('style', 'display: block;height: 5em;overflow: hidden;word-break: break-all;');

                //绑定点击事件
                $('a.iconChoosenItem').click(function() {
                    $this.val('fa ' + $(this).find('span').text());
                    $('#iconChoosenModal').modal('hide');
                });

                //显示弹窗
                $('#iconChoosenModal').modal();
            });
        });
    };
})(jQuery);


$(function() {
    //全选/反选/单选的实现
    $(".check-all").click(function() {
        $(".ids").prop("checked", this.checked);
    });
    $(".ids").click(function() {
        var option = $(".ids");
        option.each(function(i) {
            if (!this.checked) {
                $(".check-all").prop("checked", false);
                return false;
            } else {
                $(".check-all").prop("checked", true);
            }
        });
    });

    //ajax get请求
    $('.ajax-get').click(function() {
        var target;
        var that = this;
        if ($(this).hasClass('confirm')) {
            if (!confirm('确认要执行该操作吗?')) {
                return false;
            }
        }
        if ((target = $(this).attr('href')) || (target = $(this).attr('url'))) {
            $.get(target).success(function(data) {
                if (data.status == 1) {
                    if (data.url) {
                        message = data.info + ' 页面即将自动跳转~';
                    } else {
                        message = data.info;
                    }
                    alertMessager(message, 'success');
                    setTimeout(function() {
                        $(that).removeClass('disabled').prop('disabled', false);
                        if (data.url) {
                            location.href = data.url;
                        } else {
                            location.reload();
                        }
                    }, 2000);
                } else {
                    if (data.login == 1) {
                        $('#login-modal').modal(); //弹出登陆框
                    } else {
                        alertMessager(data.info, 'danger');
                    }
                    setTimeout(function() {
                        $(that).removeClass('disabled').prop('disabled', false);
                    }, 2000);
                }
            });
        }
        return false;
    });

    //ajax post submit请求
    $('.ajax-post').click(function() {
        var target, query, form;
        var target_form = $(this).attr('target-form');
        var that = this;
        var nead_confirm = false;
        if (($(this).attr('type') == 'submit') || (target = $(this).attr('href')) || (target = $(this).attr('url'))) {
            form = $('.' + target_form);
            if ($(this).attr('hide-data') === 'true') { //无数据时也可以使用的功能
                form = $('.hide-data');
                query = form.serialize();
            } else if (form.get(0) == undefined) {
                return false;
            } else if (form.get(0).nodeName == 'FORM') {
                if ($(this).hasClass('confirm')) {
                    if (!confirm('确认要执行该操作吗?')) {
                        return false;
                    }
                }
                if ($(this).attr('url') !== undefined) {
                    target = $(this).attr('url');
                } else {
                    target = form.get(0).action;
                }
                query = form.serialize();
            } else if (form.get(0).nodeName == 'INPUT' || form.get(0).nodeName == 'SELECT' || form.get(0).nodeName == 'TEXTAREA') {
                form.each(function(k, v) {
                    if (v.type == 'checkbox' && v.checked == true) {
                        nead_confirm = true;
                    }
                })
                if (nead_confirm && $(this).hasClass('confirm')) {
                    if (!confirm('确认要执行该操作吗?')) {
                        return false;
                    }
                }
                query = form.serialize();
            } else {
                if ($(this).hasClass('confirm')) {
                    if (!confirm('确认要执行该操作吗?')) {
                        return false;
                    }
                }
                query = form.find('input,select,textarea').serialize();
            }
            $(that).addClass('disabled').attr('autocomplete', 'off').prop('disabled', true);
            $.post(target, query).success(function(data) {
                if (data.status == 1) {
                    if (data.url) {
                        message = data.info + ' 页面即将自动跳转~';
                    } else {
                        message = data.info;
                    }
                    alertMessager(message, 'success');
                    setTimeout(function() {
                        if (data.url) {
                            location.href = data.url;
                        } else {
                            location.reload();
                        }
                    }, 2000);
                } else {
                    alertMessager(data.info, 'danger');
                    setTimeout(function() {
                        $(that).removeClass('disabled').prop('disabled', false);
                    }, 2000);
                }
            });
        }
        return false;
    });

    //给数组增加查找指定的元素索引方法
    Array.prototype.indexOf = function(val) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == val) return i;
        }
        return -1;
    };
    //给数组增加删除方法
    Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    };

    $('img.lazy').lazyload({
        effect: 'fadeIn'
    }); //图片lazyload
    $(".navbar-auto-hiding").autoHidingNavbar(); //自动隐藏顶部导航
});

//弹窗提醒
function alertMessager(message, type, time) {
    type = type ? type : 'danger';
    var messager = '<div style="width:380px;height:auto;margin:0 auto;max-width: 80%;top:52px;left:0;right:0;z-index:99999;"' +
        'class="messager navbar-fixed-top border-none alert alert-' + type + '"><button type="button" class="close" ' +
        'data-dismiss="alert"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>' + message + '</div>';
    $('.messager').remove();
    $('body').prepend(messager);
    setTimeout(function() {
        $('.messager').remove();
    }, time ? time : 2000);
}