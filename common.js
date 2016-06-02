/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-borderradius-boxshadow-opacity-textshadow-draganddrop-history-input-inputtypes-localstorage-testprop-testallprops-hasevent-prefixes-domprefixes
 */
; window.Modernizr = function (a, b, c) { function z(a) { i.cssText = a } function A(a, b) { return z(m.join(a + ";") + (b || "")) } function B(a, b) { return typeof a === b } function C(a, b) { return !!~("" + a).indexOf(b) } function D(a, b) { for (var d in a) { var e = a[d]; if (!C(e, "-") && i[e] !== c) return b == "pfx" ? e : !0 } return !1 } function E(a, b, d) { for (var e in a) { var f = b[a[e]]; if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f } return !1 } function F(a, b, c) { var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + o.join(d + " ") + d).split(" "); return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c)) } function G() { e.input = function (c) { for (var d = 0, e = c.length; d < e; d++) s[c[d]] = c[d] in j; return s.list && (s.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), s }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function (a) { for (var d = 0, e, g, h, i = a.length; d < i; d++) j.setAttribute("type", g = a[d]), e = j.type !== "text", e && (j.value = k, j.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(g) && j.style.WebkitAppearance !== c ? (f.appendChild(j), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(j, null).WebkitAppearance !== "textfield" && j.offsetHeight !== 0, f.removeChild(j)) : /^(search|tel)$/.test(g) || (/^(url|email)$/.test(g) ? e = j.checkValidity && j.checkValidity() === !1 : e = j.value != k)), r[a[d]] = !!e; return r }("search tel url email datetime date month week time datetime-local number range color".split(" ")) } var d = "2.6.2", e = {}, f = b.documentElement, g = "modernizr", h = b.createElement(g), i = h.style, j = b.createElement("input"), k = ":)", l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = "Webkit Moz O ms", o = n.split(" "), p = n.toLowerCase().split(" "), q = {}, r = {}, s = {}, t = [], u = t.slice, v, w = function () { function d(d, e) { e = e || b.createElement(a[d] || "div"), d = "on" + d; var f = d in e; return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = B(e[d], "function"), B(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f } var a = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" }; return d }(), x = {}.hasOwnProperty, y; !B(x, "undefined") && !B(x.call, "undefined") ? y = function (a, b) { return x.call(a, b) } : y = function (a, b) { return b in a && B(a.constructor.prototype[b], "undefined") }, Function.prototype.bind || (Function.prototype.bind = function (b) { var c = this; if (typeof c != "function") throw new TypeError; var d = u.call(arguments, 1), e = function () { if (this instanceof e) { var a = function () { }; a.prototype = c.prototype; var f = new a, g = c.apply(f, d.concat(u.call(arguments))); return Object(g) === g ? g : f } return c.apply(b, d.concat(u.call(arguments))) }; return e }), q.history = function () { return !!a.history && !!history.pushState }, q.draganddrop = function () { var a = b.createElement("div"); return "draggable" in a || "ondragstart" in a && "ondrop" in a }, q.borderradius = function () { return F("borderRadius") }, q.boxshadow = function () { return F("boxShadow") }, q.textshadow = function () { return b.createElement("div").style.textShadow === "" }, q.opacity = function () { return A("opacity:.55"), /^0.55$/.test(i.opacity) }, q.localstorage = function () { try { return localStorage.setItem(g, g), localStorage.removeItem(g), !0 } catch (a) { return !1 } }; for (var H in q) y(q, H) && (v = H.toLowerCase(), e[v] = q[H](), t.push((e[v] ? "" : "no-") + v)); return e.input || G(), e.addTest = function (a, b) { if (typeof a == "object") for (var d in a) y(a, d) && e.addTest(d, a[d]); else { a = a.toLowerCase(); if (e[a] !== c) return e; b = typeof b == "function" ? b() : b, typeof enableClasses != "undefined" && enableClasses && (f.className += " " + (b ? "" : "no-") + a), e[a] = b } return e }, z(""), h = j = null, e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.hasEvent = w, e.testProp = function (a) { return D([a]) }, e.testAllProps = F, e }(this, this.document);;/**
* @version: 1.0 Alpha-1
* @author: Coolite Inc. http://www.coolite.com/
* @date: 2008-05-13
* @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
* @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
* @website: http://www.datejs.com/
*/
Date.CultureInfo = { name: "en-US", englishName: "English (United States)", nativeName: "English (United States)", dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"], monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], amDesignator: "AM", pmDesignator: "PM", firstDayOfWeek: 0, twoDigitYearMax: 2029, dateElementOrder: "mdy", formatPatterns: { shortDate: "M/d/yyyy", longDate: "dddd, MMMM dd, yyyy", shortTime: "h:mm tt", longTime: "h:mm:ss tt", fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt", sortableDateTime: "yyyy-MM-ddTHH:mm:ss", universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ", rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT", monthDay: "MMMM dd", yearMonth: "MMMM, yyyy" }, regexPatterns: { jan: /^jan(uary)?/i, feb: /^feb(ruary)?/i, mar: /^mar(ch)?/i, apr: /^apr(il)?/i, may: /^may/i, jun: /^jun(e)?/i, jul: /^jul(y)?/i, aug: /^aug(ust)?/i, sep: /^sep(t(ember)?)?/i, oct: /^oct(ober)?/i, nov: /^nov(ember)?/i, dec: /^dec(ember)?/i, sun: /^su(n(day)?)?/i, mon: /^mo(n(day)?)?/i, tue: /^tu(e(s(day)?)?)?/i, wed: /^we(d(nesday)?)?/i, thu: /^th(u(r(s(day)?)?)?)?/i, fri: /^fr(i(day)?)?/i, sat: /^sa(t(urday)?)?/i, future: /^next/i, past: /^last|past|prev(ious)?/i, add: /^(\+|aft(er)?|from|hence)/i, subtract: /^(\-|bef(ore)?|ago)/i, yesterday: /^yes(terday)?/i, today: /^t(od(ay)?)?/i, tomorrow: /^tom(orrow)?/i, now: /^n(ow)?/i, millisecond: /^ms|milli(second)?s?/i, second: /^sec(ond)?s?/i, minute: /^mn|min(ute)?s?/i, hour: /^h(our)?s?/i, week: /^w(eek)?s?/i, month: /^m(onth)?s?/i, day: /^d(ay)?s?/i, year: /^y(ear)?s?/i, shortMeridian: /^(a|p)/i, longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i, timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i, ordinalSuffix: /^\s*(st|nd|rd|th)/i, timeContext: /^\s*(\:|a(?!u|p)|p)/i }, timezones: [{ name: "UTC", offset: "-000" }, { name: "GMT", offset: "-000" }, { name: "EST", offset: "-0500" }, { name: "EDT", offset: "-0400" }, { name: "CST", offset: "-0600" }, { name: "CDT", offset: "-0500" }, { name: "MST", offset: "-0700" }, { name: "MDT", offset: "-0600" }, { name: "PST", offset: "-0800" }, { name: "PDT", offset: "-0700"}] };
(function () {
    var $D = Date, $P = $D.prototype, $C = $D.CultureInfo, p = function (s, l) {
        if (!l) { l = 2; }
        return ("000" + s).slice(l * -1);
    }; $P.clearTime = function () { this.setHours(0); this.setMinutes(0); this.setSeconds(0); this.setMilliseconds(0); return this; }; $P.setTimeToNow = function () { var n = new Date(); this.setHours(n.getHours()); this.setMinutes(n.getMinutes()); this.setSeconds(n.getSeconds()); this.setMilliseconds(n.getMilliseconds()); return this; }; $D.today = function () { return new Date().clearTime(); }; $D.compare = function (date1, date2) { if (isNaN(date1) || isNaN(date2)) { throw new Error(date1 + " - " + date2); } else if (date1 instanceof Date && date2 instanceof Date) { return (date1 < date2) ? -1 : (date1 > date2) ? 1 : 0; } else { throw new TypeError(date1 + " - " + date2); } }; $D.equals = function (date1, date2) { return (date1.compareTo(date2) === 0); }; $D.getDayNumberFromName = function (name) {
        var n = $C.dayNames, m = $C.abbreviatedDayNames, o = $C.shortestDayNames, s = name.toLowerCase(); for (var i = 0; i < n.length; i++) { if (n[i].toLowerCase() == s || m[i].toLowerCase() == s || o[i].toLowerCase() == s) { return i; } }
        return -1;
    }; $D.getMonthNumberFromName = function (name) {
        var n = $C.monthNames, m = $C.abbreviatedMonthNames, s = name.toLowerCase(); for (var i = 0; i < n.length; i++) { if (n[i].toLowerCase() == s || m[i].toLowerCase() == s) { return i; } }
        return -1;
    }; $D.isLeapYear = function (year) { return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0); }; $D.getDaysInMonth = function (year, month) { return [31, ($D.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]; }; $D.getTimezoneAbbreviation = function (offset) {
        var z = $C.timezones, p; for (var i = 0; i < z.length; i++) { if (z[i].offset === offset) { return z[i].name; } }
        return null;
    }; $D.getTimezoneOffset = function (name) {
        var z = $C.timezones, p; for (var i = 0; i < z.length; i++) { if (z[i].name === name.toUpperCase()) { return z[i].offset; } }
        return null;
    }; $P.clone = function () { return new Date(this.getTime()); }; $P.compareTo = function (date) { return Date.compare(this, date); }; $P.equals = function (date) { return Date.equals(this, date || new Date()); }; $P.between = function (start, end) { return this.getTime() >= start.getTime() && this.getTime() <= end.getTime(); }; $P.isAfter = function (date) { return this.compareTo(date || new Date()) === 1; }; $P.isBefore = function (date) { return (this.compareTo(date || new Date()) === -1); }; $P.isToday = function () { return this.isSameDay(new Date()); }; $P.isSameDay = function (date) { return this.clone().clearTime().equals(date.clone().clearTime()); }; $P.addMilliseconds = function (value) { this.setMilliseconds(this.getMilliseconds() + value); return this; }; $P.addSeconds = function (value) { return this.addMilliseconds(value * 1000); }; $P.addMinutes = function (value) { return this.addMilliseconds(value * 60000); }; $P.addHours = function (value) { return this.addMilliseconds(value * 3600000); }; $P.addDays = function (value) { this.setDate(this.getDate() + value); return this; }; $P.addWeeks = function (value) { return this.addDays(value * 7); }; $P.addMonths = function (value) { var n = this.getDate(); this.setDate(1); this.setMonth(this.getMonth() + value); this.setDate(Math.min(n, $D.getDaysInMonth(this.getFullYear(), this.getMonth()))); return this; }; $P.addYears = function (value) { return this.addMonths(value * 12); }; $P.add = function (config) {
        if (typeof config == "number") { this._orient = config; return this; }
        var x = config; if (x.milliseconds) { this.addMilliseconds(x.milliseconds); }
        if (x.seconds) { this.addSeconds(x.seconds); }
        if (x.minutes) { this.addMinutes(x.minutes); }
        if (x.hours) { this.addHours(x.hours); }
        if (x.weeks) { this.addWeeks(x.weeks); }
        if (x.months) { this.addMonths(x.months); }
        if (x.years) { this.addYears(x.years); }
        if (x.days) { this.addDays(x.days); }
        return this;
    }; var $y, $m, $d; $P.getWeek = function () {
        var a, b, c, d, e, f, g, n, s, w; $y = (!$y) ? this.getFullYear() : $y; $m = (!$m) ? this.getMonth() + 1 : $m; $d = (!$d) ? this.getDate() : $d; if ($m <= 2) { a = $y - 1; b = (a / 4 | 0) - (a / 100 | 0) + (a / 400 | 0); c = ((a - 1) / 4 | 0) - ((a - 1) / 100 | 0) + ((a - 1) / 400 | 0); s = b - c; e = 0; f = $d - 1 + (31 * ($m - 1)); } else { a = $y; b = (a / 4 | 0) - (a / 100 | 0) + (a / 400 | 0); c = ((a - 1) / 4 | 0) - ((a - 1) / 100 | 0) + ((a - 1) / 400 | 0); s = b - c; e = s + 1; f = $d + ((153 * ($m - 3) + 2) / 5) + 58 + s; }
        g = (a + b) % 7; d = (f + g - e) % 7; n = (f + 3 - d) | 0; if (n < 0) { w = 53 - ((g - s) / 5 | 0); } else if (n > 364 + s) { w = 1; } else { w = (n / 7 | 0) + 1; }
        $y = $m = $d = null; return w;
    }; $P.getISOWeek = function () { $y = this.getUTCFullYear(); $m = this.getUTCMonth() + 1; $d = this.getUTCDate(); return p(this.getWeek()); }; $P.setWeek = function (n) { return this.moveToDayOfWeek(1).addWeeks(n - this.getWeek()); }; $D._validate = function (n, min, max, name) {
        if (typeof n == "undefined") { return false; } else if (typeof n != "number") { throw new TypeError(n + " is not a Number."); } else if (n < min || n > max) { throw new RangeError(n + " is not a valid value for " + name + "."); }
        return true;
    }; $D.validateMillisecond = function (value) { return $D._validate(value, 0, 999, "millisecond"); }; $D.validateSecond = function (value) { return $D._validate(value, 0, 59, "second"); }; $D.validateMinute = function (value) { return $D._validate(value, 0, 59, "minute"); }; $D.validateHour = function (value) { return $D._validate(value, 0, 23, "hour"); }; $D.validateDay = function (value, year, month) { return $D._validate(value, 1, $D.getDaysInMonth(year, month), "day"); }; $D.validateMonth = function (value) { return $D._validate(value, 0, 11, "month"); }; $D.validateYear = function (value) { return $D._validate(value, 0, 9999, "year"); }; $P.set = function (config) {
        if ($D.validateMillisecond(config.millisecond)) { this.addMilliseconds(config.millisecond - this.getMilliseconds()); }
        if ($D.validateSecond(config.second)) { this.addSeconds(config.second - this.getSeconds()); }
        if ($D.validateMinute(config.minute)) { this.addMinutes(config.minute - this.getMinutes()); }
        if ($D.validateHour(config.hour)) { this.addHours(config.hour - this.getHours()); }
        if ($D.validateMonth(config.month)) { this.addMonths(config.month - this.getMonth()); }
        if ($D.validateYear(config.year)) { this.addYears(config.year - this.getFullYear()); }
        if ($D.validateDay(config.day, this.getFullYear(), this.getMonth())) { this.addDays(config.day - this.getDate()); }
        if (config.timezone) { this.setTimezone(config.timezone); }
        if (config.timezoneOffset) { this.setTimezoneOffset(config.timezoneOffset); }
        if (config.week && $D._validate(config.week, 0, 53, "week")) { this.setWeek(config.week); }
        return this;
    }; $P.moveToFirstDayOfMonth = function () { return this.set({ day: 1 }); }; $P.moveToLastDayOfMonth = function () { return this.set({ day: $D.getDaysInMonth(this.getFullYear(), this.getMonth()) }); }; $P.moveToNthOccurrence = function (dayOfWeek, occurrence) {
        var shift = 0; if (occurrence > 0) { shift = occurrence - 1; }
        else if (occurrence === -1) {
            this.moveToLastDayOfMonth(); if (this.getDay() !== dayOfWeek) { this.moveToDayOfWeek(dayOfWeek, -1); }
            return this;
        }
        return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(dayOfWeek, +1).addWeeks(shift);
    }; $P.moveToDayOfWeek = function (dayOfWeek, orient) { var diff = (dayOfWeek - this.getDay() + 7 * (orient || +1)) % 7; return this.addDays((diff === 0) ? diff += 7 * (orient || +1) : diff); }; $P.moveToMonth = function (month, orient) { var diff = (month - this.getMonth() + 12 * (orient || +1)) % 12; return this.addMonths((diff === 0) ? diff += 12 * (orient || +1) : diff); }; $P.getOrdinalNumber = function () { return Math.ceil((this.clone().clearTime() - new Date(this.getFullYear(), 0, 1)) / 86400000) + 1; }; $P.getTimezone = function () { return $D.getTimezoneAbbreviation(this.getUTCOffset()); }; $P.setTimezoneOffset = function (offset) { var here = this.getTimezoneOffset(), there = Number(offset) * -6 / 10; return this.addMinutes(there - here); }; $P.setTimezone = function (offset) { return this.setTimezoneOffset($D.getTimezoneOffset(offset)); }; $P.hasDaylightSavingTime = function () { return (Date.today().set({ month: 0, day: 1 }).getTimezoneOffset() !== Date.today().set({ month: 6, day: 1 }).getTimezoneOffset()); }; $P.isDaylightSavingTime = function () { return (this.hasDaylightSavingTime() && new Date().getTimezoneOffset() === Date.today().set({ month: 6, day: 1 }).getTimezoneOffset()); }; $P.getUTCOffset = function () { var n = this.getTimezoneOffset() * -10 / 6, r; if (n < 0) { r = (n - 10000).toString(); return r.charAt(0) + r.substr(2); } else { r = (n + 10000).toString(); return "+" + r.substr(1); } }; $P.getElapsed = function (date) { return (date || new Date()) - this; }; if (!$P.toISOString) {
        $P.toISOString = function () {
            function f(n) { return n < 10 ? '0' + n : n; }
            return '"' + this.getUTCFullYear() + '-' +
f(this.getUTCMonth() + 1) + '-' +
f(this.getUTCDate()) + 'T' +
f(this.getUTCHours()) + ':' +
f(this.getUTCMinutes()) + ':' +
f(this.getUTCSeconds()) + 'Z"';
        };
    }
    $P._toString = $P.toString; $P.toString = function (format) {
        var x = this; if (format && format.length == 1) { var c = $C.formatPatterns; x.t = x.toString; switch (format) { case "d": return x.t(c.shortDate); case "D": return x.t(c.longDate); case "F": return x.t(c.fullDateTime); case "m": return x.t(c.monthDay); case "r": return x.t(c.rfc1123); case "s": return x.t(c.sortableDateTime); case "t": return x.t(c.shortTime); case "T": return x.t(c.longTime); case "u": return x.t(c.universalSortableDateTime); case "y": return x.t(c.yearMonth); } }
        var ord = function (n) { switch (n * 1) { case 1: case 21: case 31: return "st"; case 2: case 22: return "nd"; case 3: case 23: return "rd"; default: return "th"; } }; return format ? format.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g, function (m) {
            if (m.charAt(0) === "\\") { return m.replace("\\", ""); }
            x.h = x.getHours; switch (m) { case "hh": return p(x.h() < 13 ? (x.h() === 0 ? 12 : x.h()) : (x.h() - 12)); case "h": return x.h() < 13 ? (x.h() === 0 ? 12 : x.h()) : (x.h() - 12); case "HH": return p(x.h()); case "H": return x.h(); case "mm": return p(x.getMinutes()); case "m": return x.getMinutes(); case "ss": return p(x.getSeconds()); case "s": return x.getSeconds(); case "yyyy": return p(x.getFullYear(), 4); case "yy": return p(x.getFullYear()); case "dddd": return $C.dayNames[x.getDay()]; case "ddd": return $C.abbreviatedDayNames[x.getDay()]; case "dd": return p(x.getDate()); case "d": return x.getDate(); case "MMMM": return $C.monthNames[x.getMonth()]; case "MMM": return $C.abbreviatedMonthNames[x.getMonth()]; case "MM": return p((x.getMonth() + 1)); case "M": return x.getMonth() + 1; case "t": return x.h() < 12 ? $C.amDesignator.substring(0, 1) : $C.pmDesignator.substring(0, 1); case "tt": return x.h() < 12 ? $C.amDesignator : $C.pmDesignator; case "S": return ord(x.getDate()); default: return m; } 
        }) : this._toString();
    };
} ());
(function () {
    var $D = Date, $P = $D.prototype, $C = $D.CultureInfo, $N = Number.prototype; $P._orient = +1; $P._nth = null; $P._is = false; $P._same = false; $P._isSecond = false; $N._dateElement = "day"; $P.next = function () { this._orient = +1; return this; }; $D.next = function () { return $D.today().next(); }; $P.last = $P.prev = $P.previous = function () { this._orient = -1; return this; }; $D.last = $D.prev = $D.previous = function () { return $D.today().last(); }; $P.is = function () { this._is = true; return this; }; $P.same = function () { this._same = true; this._isSecond = false; return this; }; $P.today = function () { return this.same().day(); }; $P.weekday = function () {
        if (this._is) { this._is = false; return (!this.is().sat() && !this.is().sun()); }
        return false;
    }; $P.at = function (time) { return (typeof time === "string") ? $D.parse(this.toString("d") + " " + time) : this.set(time); }; $N.fromNow = $N.after = function (date) { var c = {}; c[this._dateElement] = this; return ((!date) ? new Date() : date.clone()).add(c); }; $N.ago = $N.before = function (date) { var c = {}; c[this._dateElement] = this * -1; return ((!date) ? new Date() : date.clone()).add(c); }; var dx = ("sunday monday tuesday wednesday thursday friday saturday").split(/\s/), mx = ("january february march april may june july august september october november december").split(/\s/), px = ("Millisecond Second Minute Hour Day Week Month Year").split(/\s/), pxf = ("Milliseconds Seconds Minutes Hours Date Week Month FullYear").split(/\s/), nth = ("final first second third fourth fifth").split(/\s/), de; $P.toObject = function () {
        var o = {}; for (var i = 0; i < px.length; i++) { o[px[i].toLowerCase()] = this["get" + pxf[i]](); }
        return o;
    }; $D.fromObject = function (config) { config.week = null; return Date.today().set(config); }; var df = function (n) {
        return function () {
            if (this._is) { this._is = false; return this.getDay() == n; }
            if (this._nth !== null) {
                if (this._isSecond) { this.addSeconds(this._orient * -1); }
                this._isSecond = false; var ntemp = this._nth; this._nth = null; var temp = this.clone().moveToLastDayOfMonth(); this.moveToNthOccurrence(n, ntemp); if (this > temp) { throw new RangeError($D.getDayName(n) + " does not occur " + ntemp + " times in the month of " + $D.getMonthName(temp.getMonth()) + " " + temp.getFullYear() + "."); }
                return this;
            }
            return this.moveToDayOfWeek(n, this._orient);
        };
    }; var sdf = function (n) {
        return function () {
            var t = $D.today(), shift = n - t.getDay(); if (n === 0 && $C.firstDayOfWeek === 1 && t.getDay() !== 0) { shift = shift + 7; }
            return t.addDays(shift);
        };
    }; for (var i = 0; i < dx.length; i++) { $D[dx[i].toUpperCase()] = $D[dx[i].toUpperCase().substring(0, 3)] = i; $D[dx[i]] = $D[dx[i].substring(0, 3)] = sdf(i); $P[dx[i]] = $P[dx[i].substring(0, 3)] = df(i); }
    var mf = function (n) {
        return function () {
            if (this._is) { this._is = false; return this.getMonth() === n; }
            return this.moveToMonth(n, this._orient);
        };
    }; var smf = function (n) { return function () { return $D.today().set({ month: n, day: 1 }); }; }; for (var j = 0; j < mx.length; j++) { $D[mx[j].toUpperCase()] = $D[mx[j].toUpperCase().substring(0, 3)] = j; $D[mx[j]] = $D[mx[j].substring(0, 3)] = smf(j); $P[mx[j]] = $P[mx[j].substring(0, 3)] = mf(j); }
    var ef = function (j) {
        return function () {
            if (this._isSecond) { this._isSecond = false; return this; }
            if (this._same) {
                this._same = this._is = false; var o1 = this.toObject(), o2 = (arguments[0] || new Date()).toObject(), v = "", k = j.toLowerCase(); for (var m = (px.length - 1); m > -1; m--) {
                    v = px[m].toLowerCase(); if (o1[v] != o2[v]) { return false; }
                    if (k == v) { break; } 
                }
                return true;
            }
            if (j.substring(j.length - 1) != "s") { j += "s"; }
            return this["add" + j](this._orient);
        };
    }; var nf = function (n) { return function () { this._dateElement = n; return this; }; }; for (var k = 0; k < px.length; k++) { de = px[k].toLowerCase(); $P[de] = $P[de + "s"] = ef(px[k]); $N[de] = $N[de + "s"] = nf(de); }
    $P._ss = ef("Second"); var nthfn = function (n) {
        return function (dayOfWeek) {
            if (this._same) { return this._ss(arguments[0]); }
            if (dayOfWeek || dayOfWeek === 0) { return this.moveToNthOccurrence(dayOfWeek, n); }
            this._nth = n; if (n === 2 && (dayOfWeek === undefined || dayOfWeek === null)) { this._isSecond = true; return this.addSeconds(this._orient); }
            return this;
        };
    }; for (var l = 0; l < nth.length; l++) { $P[nth[l]] = (l === 0) ? nthfn(-1) : nthfn(l); } 
} ());
(function () {
    Date.Parsing = { Exception: function (s) { this.message = "Parse error at '" + s.substring(0, 10) + " ...'"; } }; var $P = Date.Parsing; var _ = $P.Operators = { rtoken: function (r) { return function (s) { var mx = s.match(r); if (mx) { return ([mx[0], s.substring(mx[0].length)]); } else { throw new $P.Exception(s); } }; }, token: function (s) { return function (s) { return _.rtoken(new RegExp("^\s*" + s + "\s*"))(s); }; }, stoken: function (s) { return _.rtoken(new RegExp("^" + s)); }, until: function (p) {
        return function (s) {
            var qx = [], rx = null; while (s.length) {
                try { rx = p.call(this, s); } catch (e) { qx.push(rx[0]); s = rx[1]; continue; }
                break;
            }
            return [qx, s];
        };
    }, many: function (p) {
        return function (s) {
            var rx = [], r = null; while (s.length) {
                try { r = p.call(this, s); } catch (e) { return [rx, s]; }
                rx.push(r[0]); s = r[1];
            }
            return [rx, s];
        };
    }, optional: function (p) {
        return function (s) {
            var r = null; try { r = p.call(this, s); } catch (e) { return [null, s]; }
            return [r[0], r[1]];
        };
    }, not: function (p) {
        return function (s) {
            try { p.call(this, s); } catch (e) { return [null, s]; }
            throw new $P.Exception(s);
        };
    }, ignore: function (p) { return p ? function (s) { var r = null; r = p.call(this, s); return [null, r[1]]; } : null; }, product: function () {
        var px = arguments[0], qx = Array.prototype.slice.call(arguments, 1), rx = []; for (var i = 0; i < px.length; i++) { rx.push(_.each(px[i], qx)); }
        return rx;
    }, cache: function (rule) {
        var cache = {}, r = null; return function (s) {
            try { r = cache[s] = (cache[s] || rule.call(this, s)); } catch (e) { r = cache[s] = e; }
            if (r instanceof $P.Exception) { throw r; } else { return r; } 
        };
    }, any: function () {
        var px = arguments; return function (s) {
            var r = null; for (var i = 0; i < px.length; i++) {
                if (px[i] == null) { continue; }
                try { r = (px[i].call(this, s)); } catch (e) { r = null; }
                if (r) { return r; } 
            }
            throw new $P.Exception(s);
        };
    }, each: function () {
        var px = arguments; return function (s) {
            var rx = [], r = null; for (var i = 0; i < px.length; i++) {
                if (px[i] == null) { continue; }
                try { r = (px[i].call(this, s)); } catch (e) { throw new $P.Exception(s); }
                rx.push(r[0]); s = r[1];
            }
            return [rx, s];
        };
    }, all: function () { var px = arguments, _ = _; return _.each(_.optional(px)); }, sequence: function (px, d, c) {
        d = d || _.rtoken(/^\s*/); c = c || null; if (px.length == 1) { return px[0]; }
        return function (s) {
            var r = null, q = null; var rx = []; for (var i = 0; i < px.length; i++) {
                try { r = px[i].call(this, s); } catch (e) { break; }
                rx.push(r[0]); try { q = d.call(this, r[1]); } catch (ex) { q = null; break; }
                s = q[1];
            }
            if (!r) { throw new $P.Exception(s); }
            if (q) { throw new $P.Exception(q[1]); }
            if (c) { try { r = c.call(this, r[1]); } catch (ey) { throw new $P.Exception(r[1]); } }
            return [rx, (r ? r[1] : s)];
        };
    }, between: function (d1, p, d2) { d2 = d2 || d1; var _fn = _.each(_.ignore(d1), p, _.ignore(d2)); return function (s) { var rx = _fn.call(this, s); return [[rx[0][0], r[0][2]], rx[1]]; }; }, list: function (p, d, c) { d = d || _.rtoken(/^\s*/); c = c || null; return (p instanceof Array ? _.each(_.product(p.slice(0, -1), _.ignore(d)), p.slice(-1), _.ignore(c)) : _.each(_.many(_.each(p, _.ignore(d))), px, _.ignore(c))); }, set: function (px, d, c) {
        d = d || _.rtoken(/^\s*/); c = c || null; return function (s) {
            var r = null, p = null, q = null, rx = null, best = [[], s], last = false; for (var i = 0; i < px.length; i++) {
                q = null; p = null; r = null; last = (px.length == 1); try { r = px[i].call(this, s); } catch (e) { continue; }
                rx = [[r[0]], r[1]]; if (r[1].length > 0 && !last) { try { q = d.call(this, r[1]); } catch (ex) { last = true; } } else { last = true; }
                if (!last && q[1].length === 0) { last = true; }
                if (!last) {
                    var qx = []; for (var j = 0; j < px.length; j++) { if (i != j) { qx.push(px[j]); } }
                    p = _.set(qx, d).call(this, q[1]); if (p[0].length > 0) { rx[0] = rx[0].concat(p[0]); rx[1] = p[1]; } 
                }
                if (rx[1].length < best[1].length) { best = rx; }
                if (best[1].length === 0) { break; } 
            }
            if (best[0].length === 0) { return best; }
            if (c) {
                try { q = c.call(this, best[1]); } catch (ey) { throw new $P.Exception(best[1]); }
                best[1] = q[1];
            }
            return best;
        };
    }, forward: function (gr, fname) { return function (s) { return gr[fname].call(this, s); }; }, replace: function (rule, repl) { return function (s) { var r = rule.call(this, s); return [repl, r[1]]; }; }, process: function (rule, fn) { return function (s) { var r = rule.call(this, s); return [fn.call(this, r[0]), r[1]]; }; }, min: function (min, rule) {
        return function (s) {
            var rx = rule.call(this, s); if (rx[0].length < min) { throw new $P.Exception(s); }
            return rx;
        };
    } 
    }; var _generator = function (op) {
        return function () {
            var args = null, rx = []; if (arguments.length > 1) { args = Array.prototype.slice.call(arguments); } else if (arguments[0] instanceof Array) { args = arguments[0]; }
            if (args) { for (var i = 0, px = args.shift(); i < px.length; i++) { args.unshift(px[i]); rx.push(op.apply(null, args)); args.shift(); return rx; } } else { return op.apply(null, arguments); } 
        };
    }; var gx = "optional not ignore cache".split(/\s/); for (var i = 0; i < gx.length; i++) { _[gx[i]] = _generator(_[gx[i]]); }
    var _vector = function (op) { return function () { if (arguments[0] instanceof Array) { return op.apply(null, arguments[0]); } else { return op.apply(null, arguments); } }; }; var vx = "each any all".split(/\s/); for (var j = 0; j < vx.length; j++) { _[vx[j]] = _vector(_[vx[j]]); } 
} ()); (function () {
    var $D = Date, $P = $D.prototype, $C = $D.CultureInfo; var flattenAndCompact = function (ax) {
        var rx = []; for (var i = 0; i < ax.length; i++) { if (ax[i] instanceof Array) { rx = rx.concat(flattenAndCompact(ax[i])); } else { if (ax[i]) { rx.push(ax[i]); } } }
        return rx;
    }; $D.Grammar = {}; $D.Translator = { hour: function (s) { return function () { this.hour = Number(s); }; }, minute: function (s) { return function () { this.minute = Number(s); }; }, second: function (s) { return function () { this.second = Number(s); }; }, meridian: function (s) { return function () { this.meridian = s.slice(0, 1).toLowerCase(); }; }, timezone: function (s) { return function () { var n = s.replace(/[^\d\+\-]/g, ""); if (n.length) { this.timezoneOffset = Number(n); } else { this.timezone = s.toLowerCase(); } }; }, day: function (x) { var s = x[0]; return function () { this.day = Number(s.match(/\d+/)[0]); }; }, month: function (s) { return function () { this.month = (s.length == 3) ? "jan feb mar apr may jun jul aug sep oct nov dec".indexOf(s) / 4 : Number(s) - 1; }; }, year: function (s) { return function () { var n = Number(s); this.year = ((s.length > 2) ? n : (n + (((n + 2000) < $C.twoDigitYearMax) ? 2000 : 1900))); }; }, rday: function (s) { return function () { switch (s) { case "yesterday": this.days = -1; break; case "tomorrow": this.days = 1; break; case "today": this.days = 0; break; case "now": this.days = 0; this.now = true; break; } }; }, finishExact: function (x) {
        x = (x instanceof Array) ? x : [x]; for (var i = 0; i < x.length; i++) { if (x[i]) { x[i].call(this); } }
        var now = new Date(); if ((this.hour || this.minute) && (!this.month && !this.year && !this.day)) { this.day = now.getDate(); }
        if (!this.year) { this.year = now.getFullYear(); }
        if (!this.month && this.month !== 0) { this.month = now.getMonth(); }
        if (!this.day) { this.day = 1; }
        if (!this.hour) { this.hour = 0; }
        if (!this.minute) { this.minute = 0; }
        if (!this.second) { this.second = 0; }
        if (this.meridian && this.hour) { if (this.meridian == "p" && this.hour < 12) { this.hour = this.hour + 12; } else if (this.meridian == "a" && this.hour == 12) { this.hour = 0; } }
        if (this.day > $D.getDaysInMonth(this.year, this.month)) { throw new RangeError(this.day + " is not a valid value for days."); }
        var r = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second); if (this.timezone) { r.set({ timezone: this.timezone }); } else if (this.timezoneOffset) { r.set({ timezoneOffset: this.timezoneOffset }); }
        return r;
    }, finish: function (x) {
        x = (x instanceof Array) ? flattenAndCompact(x) : [x]; if (x.length === 0) { return null; }
        for (var i = 0; i < x.length; i++) { if (typeof x[i] == "function") { x[i].call(this); } }
        var today = $D.today(); if (this.now && !this.unit && !this.operator) { return new Date(); } else if (this.now) { today = new Date(); }
        var expression = !!(this.days && this.days !== null || this.orient || this.operator); var gap, mod, orient; orient = ((this.orient == "past" || this.operator == "subtract") ? -1 : 1); if (!this.now && "hour minute second".indexOf(this.unit) != -1) { today.setTimeToNow(); }
        if (this.month || this.month === 0) { if ("year day hour minute second".indexOf(this.unit) != -1) { this.value = this.month + 1; this.month = null; expression = true; } }
        if (!expression && this.weekday && !this.day && !this.days) {
            var temp = Date[this.weekday](); this.day = temp.getDate(); if (!this.month) { this.month = temp.getMonth(); }
            this.year = temp.getFullYear();
        }
        if (expression && this.weekday && this.unit != "month") { this.unit = "day"; gap = ($D.getDayNumberFromName(this.weekday) - today.getDay()); mod = 7; this.days = gap ? ((gap + (orient * mod)) % mod) : (orient * mod); }
        if (this.month && this.unit == "day" && this.operator) { this.value = (this.month + 1); this.month = null; }
        if (this.value != null && this.month != null && this.year != null) { this.day = this.value * 1; }
        if (this.month && !this.day && this.value) { today.set({ day: this.value * 1 }); if (!expression) { this.day = this.value * 1; } }
        if (!this.month && this.value && this.unit == "month" && !this.now) { this.month = this.value; expression = true; }
        if (expression && (this.month || this.month === 0) && this.unit != "year") { this.unit = "month"; gap = (this.month - today.getMonth()); mod = 12; this.months = gap ? ((gap + (orient * mod)) % mod) : (orient * mod); this.month = null; }
        if (!this.unit) { this.unit = "day"; }
        if (!this.value && this.operator && this.operator !== null && this[this.unit + "s"] && this[this.unit + "s"] !== null) { this[this.unit + "s"] = this[this.unit + "s"] + ((this.operator == "add") ? 1 : -1) + (this.value || 0) * orient; } else if (this[this.unit + "s"] == null || this.operator != null) {
            if (!this.value) { this.value = 1; }
            this[this.unit + "s"] = this.value * orient;
        }
        if (this.meridian && this.hour) { if (this.meridian == "p" && this.hour < 12) { this.hour = this.hour + 12; } else if (this.meridian == "a" && this.hour == 12) { this.hour = 0; } }
        if (this.weekday && !this.day && !this.days) { var temp = Date[this.weekday](); this.day = temp.getDate(); if (temp.getMonth() !== today.getMonth()) { this.month = temp.getMonth(); } }
        if ((this.month || this.month === 0) && !this.day) { this.day = 1; }
        if (!this.orient && !this.operator && this.unit == "week" && this.value && !this.day && !this.month) { return Date.today().setWeek(this.value); }
        if (expression && this.timezone && this.day && this.days) { this.day = this.days; }
        return (expression) ? today.add(this) : today.set(this);
    } 
    }; var _ = $D.Parsing.Operators, g = $D.Grammar, t = $D.Translator, _fn; g.datePartDelimiter = _.rtoken(/^([\s\-\.\,\/\x27]+)/); g.timePartDelimiter = _.stoken(":"); g.whiteSpace = _.rtoken(/^\s*/); g.generalDelimiter = _.rtoken(/^(([\s\,]|at|@|on)+)/); var _C = {}; g.ctoken = function (keys) {
        var fn = _C[keys]; if (!fn) {
            var c = $C.regexPatterns; var kx = keys.split(/\s+/), px = []; for (var i = 0; i < kx.length; i++) { px.push(_.replace(_.rtoken(c[kx[i]]), kx[i])); }
            fn = _C[keys] = _.any.apply(null, px);
        }
        return fn;
    }; g.ctoken2 = function (key) { return _.rtoken($C.regexPatterns[key]); }; g.h = _.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), t.hour)); g.hh = _.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/), t.hour)); g.H = _.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), t.hour)); g.HH = _.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/), t.hour)); g.m = _.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/), t.minute)); g.mm = _.cache(_.process(_.rtoken(/^[0-5][0-9]/), t.minute)); g.s = _.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/), t.second)); g.ss = _.cache(_.process(_.rtoken(/^[0-5][0-9]/), t.second)); g.hms = _.cache(_.sequence([g.H, g.m, g.s], g.timePartDelimiter)); g.t = _.cache(_.process(g.ctoken2("shortMeridian"), t.meridian)); g.tt = _.cache(_.process(g.ctoken2("longMeridian"), t.meridian)); g.z = _.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/), t.timezone)); g.zz = _.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/), t.timezone)); g.zzz = _.cache(_.process(g.ctoken2("timezone"), t.timezone)); g.timeSuffix = _.each(_.ignore(g.whiteSpace), _.set([g.tt, g.zzz])); g.time = _.each(_.optional(_.ignore(_.stoken("T"))), g.hms, g.timeSuffix); g.d = _.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/), _.optional(g.ctoken2("ordinalSuffix"))), t.day)); g.dd = _.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/), _.optional(g.ctoken2("ordinalSuffix"))), t.day)); g.ddd = g.dddd = _.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"), function (s) { return function () { this.weekday = s; }; })); g.M = _.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/), t.month)); g.MM = _.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/), t.month)); g.MMM = g.MMMM = _.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), t.month)); g.y = _.cache(_.process(_.rtoken(/^(\d\d?)/), t.year)); g.yy = _.cache(_.process(_.rtoken(/^(\d\d)/), t.year)); g.yyy = _.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/), t.year)); g.yyyy = _.cache(_.process(_.rtoken(/^(\d\d\d\d)/), t.year)); _fn = function () { return _.each(_.any.apply(null, arguments), _.not(g.ctoken2("timeContext"))); }; g.day = _fn(g.d, g.dd); g.month = _fn(g.M, g.MMM); g.year = _fn(g.yyyy, g.yy); g.orientation = _.process(g.ctoken("past future"), function (s) { return function () { this.orient = s; }; }); g.operator = _.process(g.ctoken("add subtract"), function (s) { return function () { this.operator = s; }; }); g.rday = _.process(g.ctoken("yesterday tomorrow today now"), t.rday); g.unit = _.process(g.ctoken("second minute hour day week month year"), function (s) { return function () { this.unit = s; }; }); g.value = _.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/), function (s) { return function () { this.value = s.replace(/\D/g, ""); }; }); g.expression = _.set([g.rday, g.operator, g.value, g.unit, g.orientation, g.ddd, g.MMM]); _fn = function () { return _.set(arguments, g.datePartDelimiter); }; g.mdy = _fn(g.ddd, g.month, g.day, g.year); g.ymd = _fn(g.ddd, g.year, g.month, g.day); g.dmy = _fn(g.ddd, g.day, g.month, g.year); g.date = function (s) { return ((g[$C.dateElementOrder] || g.mdy).call(this, s)); }; g.format = _.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function (fmt) { if (g[fmt]) { return g[fmt]; } else { throw $D.Parsing.Exception(fmt); } }), _.process(_.rtoken(/^[^dMyhHmstz]+/), function (s) { return _.ignore(_.stoken(s)); }))), function (rules) { return _.process(_.each.apply(null, rules), t.finishExact); }); var _F = {}; var _get = function (f) { return _F[f] = (_F[f] || g.format(f)[0]); }; g.formats = function (fx) {
        if (fx instanceof Array) {
            var rx = []; for (var i = 0; i < fx.length; i++) { rx.push(_get(fx[i])); }
            return _.any.apply(null, rx);
        } else { return _get(fx); } 
    }; g._formats = g.formats(["\"yyyy-MM-ddTHH:mm:ssZ\"", "yyyy-MM-ddTHH:mm:ssZ", "yyyy-MM-ddTHH:mm:ssz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mmZ", "yyyy-MM-ddTHH:mmz", "yyyy-MM-ddTHH:mm", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "MMddyyyy", "ddMMyyyy", "Mddyyyy", "ddMyyyy", "Mdyyyy", "dMyyyy", "yyyy", "Mdyy", "dMyy", "d"]); g._start = _.process(_.set([g.date, g.time, g.expression], g.generalDelimiter, g.whiteSpace), t.finish); g.start = function (s) {
        try { var r = g._formats.call({}, s); if (r[1].length === 0) { return r; } } catch (e) { }
        return g._start.call({}, s);
    }; $D._parse = $D.parse; $D.parse = function (s) {
        var r = null; if (!s) { return null; }
        if (s instanceof Date) { return s; }
        try { r = $D.Grammar.start.call({}, s.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1")); } catch (e) { return null; }
        return ((r[1].length === 0) ? r[0] : null);
    }; $D.getParseFunction = function (fx) {
        var fn = $D.Grammar.formats(fx); return function (s) {
            var r = null; try { r = fn.call({}, s); } catch (e) { return null; }
            return ((r[1].length === 0) ? r[0] : null);
        };
    }; $D.parseExact = function (s, fx) { return $D.getParseFunction(fx)(s); };
} ());
;/*
 * JQuery URL Parser plugin
 * Developed and maintanined by Mark Perkins, mark@allmarkedup.com
 * Source repository: https://github.com/allmarkedup/jQuery-URL-Parser
 * Licensed under an MIT-style license. See https://github.com/allmarkedup/jQuery-URL-Parser/blob/master/LICENSE for details.
 */ 

;(function($, undefined) {
    
    var tag2attr = {
        a       : 'href',
        img     : 'src',
        form    : 'action',
        base    : 'href',
        script  : 'src',
        iframe  : 'src',
        link    : 'href'
    },
    
	key = ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","fragment"], // keys available to query
	
	aliases = { "anchor" : "fragment" }, // aliases for backwards compatability

	parser = {
		strict  : /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,  //less intuitive, more accurate to the specs
		loose   :  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // more intuitive, fails on relative paths and deviates from specs
	},
	
	querystring_parser = /(?:^|&|;)([^&=;]*)=?([^&;]*)/g, // supports both ampersand and semicolon-delimted query string key/value pairs
	
	fragment_parser = /(?:^|&|;)([^&=;]*)=?([^&;]*)/g; // supports both ampersand and semicolon-delimted fragment key/value pairs
	
	function parseUri( url, strictMode )
	{
		var str = decodeURI( url ),
		    res   = parser[ strictMode || false ? "strict" : "loose" ].exec( str ),
		    uri = { attr : {}, param : {}, seg : {} },
		    i   = 14;
		
		while ( i-- )
		{
			uri.attr[ key[i] ] = res[i] || "";
		}
		
		// build query and fragment parameters
		
		uri.param['query'] = {};
		uri.param['fragment'] = {};
		
		uri.attr['query'].replace( querystring_parser, function ( $0, $1, $2 ){
			if ($1)
			{
				uri.param['query'][$1] = $2;
			}
		});
		
		uri.attr['fragment'].replace( fragment_parser, function ( $0, $1, $2 ){
			if ($1)
			{
				uri.param['fragment'][$1] = $2;
			}
		});
				
		// split path and fragement into segments
		
        uri.seg['path'] = uri.attr.path.replace(/^\/+|\/+$/g,'').split('/');
        
        uri.seg['fragment'] = uri.attr.fragment.replace(/^\/+|\/+$/g,'').split('/');
        
        // compile a 'base' domain attribute
        
        uri.attr['base'] = uri.attr.host ? uri.attr.protocol+"://"+uri.attr.host + (uri.attr.port ? ":"+uri.attr.port : '') : '';
        
		return uri;
	};
	
	function getAttrName( elm )
	{
		var tn = elm.tagName;
		if ( tn !== undefined ) return tag2attr[tn.toLowerCase()];
		return tn;
	}
	
	$.fn.url = function( strictMode )
	{
	    var url = '';
	    
	    if ( this.length )
	    {
	        url = $(this).attr( getAttrName(this[0]) ) || '';
	    }
	    
        return $.url( url, strictMode );
	};
	
	$.url = function( url, strictMode )
	{
	    if ( arguments.length === 1 && url === true )
        {
            strictMode = true;
            url = undefined;
        }
        
        strictMode = strictMode || false;
        url = url || window.location.toString();
        	    	            
        return {
            
            data : parseUri(url, strictMode),
            
            // get various attributes from the URI
            attr : function( attr )
            {
                attr = aliases[attr] || attr;
                return attr !== undefined ? this.data.attr[attr] : this.data.attr;
            },
            
            // return query string parameters
            param : function( param )
            {
                return param !== undefined ? this.data.param.query[param] : this.data.param.query;
            },
            
            // return fragment parameters
            fparam : function( param )
            {
                return param !== undefined ? this.data.param.fragment[param] : this.data.param.fragment;
            },
            
            // return path segments
            segment : function( seg )
            {
                if ( seg === undefined )
                {
                    return this.data.seg.path;                    
                }
                else
                {
                    seg = seg < 0 ? this.data.seg.path.length + seg : seg - 1; // negative segments count from the end
                    return this.data.seg.path[seg];                    
                }
            },
            
            // return fragment segments
            fsegment : function( seg )
            {
                if ( seg === undefined )
                {
                    return this.data.seg.fragment;                    
                }
                else
                {
                    seg = seg < 0 ? this.data.seg.fragment.length + seg : seg - 1; // negative segments count from the end
                    return this.data.seg.fragment[seg];                    
                }
            }
            
        };
        
	};
	
})(jQuery);;/* Javascript plotting library for jQuery, v. 0.7.
 *
 * Released under the MIT license by IOLA, December 2007.
 *
 */
(function(b){b.color={};b.color.make=function(d,e,g,f){var c={};c.r=d||0;c.g=e||0;c.b=g||0;c.a=f!=null?f:1;c.add=function(h,j){for(var k=0;k<h.length;++k){c[h.charAt(k)]+=j}return c.normalize()};c.scale=function(h,j){for(var k=0;k<h.length;++k){c[h.charAt(k)]*=j}return c.normalize()};c.toString=function(){if(c.a>=1){return"rgb("+[c.r,c.g,c.b].join(",")+")"}else{return"rgba("+[c.r,c.g,c.b,c.a].join(",")+")"}};c.normalize=function(){function h(k,j,l){return j<k?k:(j>l?l:j)}c.r=h(0,parseInt(c.r),255);c.g=h(0,parseInt(c.g),255);c.b=h(0,parseInt(c.b),255);c.a=h(0,c.a,1);return c};c.clone=function(){return b.color.make(c.r,c.b,c.g,c.a)};return c.normalize()};b.color.extract=function(d,e){var c;do{c=d.css(e).toLowerCase();if(c!=""&&c!="transparent"){break}d=d.parent()}while(!b.nodeName(d.get(0),"body"));if(c=="rgba(0, 0, 0, 0)"){c="transparent"}return b.color.parse(c)};b.color.parse=function(c){var d,f=b.color.make;if(d=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c)){return f(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10))}if(d=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)){return f(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10),parseFloat(d[4]))}if(d=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c)){return f(parseFloat(d[1])*2.55,parseFloat(d[2])*2.55,parseFloat(d[3])*2.55)}if(d=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(c)){return f(parseFloat(d[1])*2.55,parseFloat(d[2])*2.55,parseFloat(d[3])*2.55,parseFloat(d[4]))}if(d=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c)){return f(parseInt(d[1],16),parseInt(d[2],16),parseInt(d[3],16))}if(d=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c)){return f(parseInt(d[1]+d[1],16),parseInt(d[2]+d[2],16),parseInt(d[3]+d[3],16))}var e=b.trim(c).toLowerCase();if(e=="transparent"){return f(255,255,255,0)}else{d=a[e]||[0,0,0];return f(d[0],d[1],d[2])}};var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);(function(c){function b(av,ai,J,af){var Q=[],O={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:true,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:0.85},xaxis:{show:null,position:"bottom",mode:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null,monthNames:null,timeformat:null,twelveHourClock:false},yaxis:{autoscaleMargin:0.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:false,radius:3,lineWidth:2,fill:true,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:false,fillColor:null,steps:false},bars:{show:false,lineWidth:2,barWidth:1,fill:true,fillColor:null,align:"left",horizontal:false},shadowSize:3},grid:{show:true,aboveData:false,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:false,hoverable:false,autoHighlight:true,mouseActiveRadius:10},hooks:{}},az=null,ad=null,y=null,H=null,A=null,p=[],aw=[],q={left:0,right:0,top:0,bottom:0},G=0,I=0,h=0,w=0,ak={processOptions:[],processRawData:[],processDatapoints:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},aq=this;aq.setData=aj;aq.setupGrid=t;aq.draw=W;aq.getPlaceholder=function(){return av};aq.getCanvas=function(){return az};aq.getPlotOffset=function(){return q};aq.width=function(){return h};aq.height=function(){return w};aq.offset=function(){var aB=y.offset();aB.left+=q.left;aB.top+=q.top;return aB};aq.getData=function(){return Q};aq.getAxes=function(){var aC={},aB;c.each(p.concat(aw),function(aD,aE){if(aE){aC[aE.direction+(aE.n!=1?aE.n:"")+"axis"]=aE}});return aC};aq.getXAxes=function(){return p};aq.getYAxes=function(){return aw};aq.c2p=C;aq.p2c=ar;aq.getOptions=function(){return O};aq.highlight=x;aq.unhighlight=T;aq.triggerRedrawOverlay=f;aq.pointOffset=function(aB){return{left:parseInt(p[aA(aB,"x")-1].p2c(+aB.x)+q.left),top:parseInt(aw[aA(aB,"y")-1].p2c(+aB.y)+q.top)}};aq.shutdown=ag;aq.resize=function(){B();g(az);g(ad)};aq.hooks=ak;F(aq);Z(J);X();aj(ai);t();W();ah();function an(aD,aB){aB=[aq].concat(aB);for(var aC=0;aC<aD.length;++aC){aD[aC].apply(this,aB)}}function F(){for(var aB=0;aB<af.length;++aB){var aC=af[aB];aC.init(aq);if(aC.options){c.extend(true,O,aC.options)}}}function Z(aC){var aB;c.extend(true,O,aC);if(O.xaxis.color==null){O.xaxis.color=O.grid.color}if(O.yaxis.color==null){O.yaxis.color=O.grid.color}if(O.xaxis.tickColor==null){O.xaxis.tickColor=O.grid.tickColor}if(O.yaxis.tickColor==null){O.yaxis.tickColor=O.grid.tickColor}if(O.grid.borderColor==null){O.grid.borderColor=O.grid.color}if(O.grid.tickColor==null){O.grid.tickColor=c.color.parse(O.grid.color).scale("a",0.22).toString()}for(aB=0;aB<Math.max(1,O.xaxes.length);++aB){O.xaxes[aB]=c.extend(true,{},O.xaxis,O.xaxes[aB])}for(aB=0;aB<Math.max(1,O.yaxes.length);++aB){O.yaxes[aB]=c.extend(true,{},O.yaxis,O.yaxes[aB])}if(O.xaxis.noTicks&&O.xaxis.ticks==null){O.xaxis.ticks=O.xaxis.noTicks}if(O.yaxis.noTicks&&O.yaxis.ticks==null){O.yaxis.ticks=O.yaxis.noTicks}if(O.x2axis){O.xaxes[1]=c.extend(true,{},O.xaxis,O.x2axis);O.xaxes[1].position="top"}if(O.y2axis){O.yaxes[1]=c.extend(true,{},O.yaxis,O.y2axis);O.yaxes[1].position="right"}if(O.grid.coloredAreas){O.grid.markings=O.grid.coloredAreas}if(O.grid.coloredAreasColor){O.grid.markingsColor=O.grid.coloredAreasColor}if(O.lines){c.extend(true,O.series.lines,O.lines)}if(O.points){c.extend(true,O.series.points,O.points)}if(O.bars){c.extend(true,O.series.bars,O.bars)}if(O.shadowSize!=null){O.series.shadowSize=O.shadowSize}for(aB=0;aB<O.xaxes.length;++aB){V(p,aB+1).options=O.xaxes[aB]}for(aB=0;aB<O.yaxes.length;++aB){V(aw,aB+1).options=O.yaxes[aB]}for(var aD in ak){if(O.hooks[aD]&&O.hooks[aD].length){ak[aD]=ak[aD].concat(O.hooks[aD])}}an(ak.processOptions,[O])}function aj(aB){Q=Y(aB);ax();z()}function Y(aE){var aC=[];for(var aB=0;aB<aE.length;++aB){var aD=c.extend(true,{},O.series);if(aE[aB].data!=null){aD.data=aE[aB].data;delete aE[aB].data;c.extend(true,aD,aE[aB]);aE[aB].data=aD.data}else{aD.data=aE[aB]}aC.push(aD)}return aC}function aA(aC,aD){var aB=aC[aD+"axis"];if(typeof aB=="object"){aB=aB.n}if(typeof aB!="number"){aB=1}return aB}function m(){return c.grep(p.concat(aw),function(aB){return aB})}function C(aE){var aC={},aB,aD;for(aB=0;aB<p.length;++aB){aD=p[aB];if(aD&&aD.used){aC["x"+aD.n]=aD.c2p(aE.left)}}for(aB=0;aB<aw.length;++aB){aD=aw[aB];if(aD&&aD.used){aC["y"+aD.n]=aD.c2p(aE.top)}}if(aC.x1!==undefined){aC.x=aC.x1}if(aC.y1!==undefined){aC.y=aC.y1}return aC}function ar(aF){var aD={},aC,aE,aB;for(aC=0;aC<p.length;++aC){aE=p[aC];if(aE&&aE.used){aB="x"+aE.n;if(aF[aB]==null&&aE.n==1){aB="x"}if(aF[aB]!=null){aD.left=aE.p2c(aF[aB]);break}}}for(aC=0;aC<aw.length;++aC){aE=aw[aC];if(aE&&aE.used){aB="y"+aE.n;if(aF[aB]==null&&aE.n==1){aB="y"}if(aF[aB]!=null){aD.top=aE.p2c(aF[aB]);break}}}return aD}function V(aC,aB){if(!aC[aB-1]){aC[aB-1]={n:aB,direction:aC==p?"x":"y",options:c.extend(true,{},aC==p?O.xaxis:O.yaxis)}}return aC[aB-1]}function ax(){var aG;var aM=Q.length,aB=[],aE=[];for(aG=0;aG<Q.length;++aG){var aJ=Q[aG].color;if(aJ!=null){--aM;if(typeof aJ=="number"){aE.push(aJ)}else{aB.push(c.color.parse(Q[aG].color))}}}for(aG=0;aG<aE.length;++aG){aM=Math.max(aM,aE[aG]+1)}var aC=[],aF=0;aG=0;while(aC.length<aM){var aI;if(O.colors.length==aG){aI=c.color.make(100,100,100)}else{aI=c.color.parse(O.colors[aG])}var aD=aF%2==1?-1:1;aI.scale("rgb",1+aD*Math.ceil(aF/2)*0.2);aC.push(aI);++aG;if(aG>=O.colors.length){aG=0;++aF}}var aH=0,aN;for(aG=0;aG<Q.length;++aG){aN=Q[aG];if(aN.color==null){aN.color=aC[aH].toString();++aH}else{if(typeof aN.color=="number"){aN.color=aC[aN.color].toString()}}if(aN.lines.show==null){var aL,aK=true;for(aL in aN){if(aN[aL]&&aN[aL].show){aK=false;break}}if(aK){aN.lines.show=true}}aN.xaxis=V(p,aA(aN,"x"));aN.yaxis=V(aw,aA(aN,"y"))}}function z(){var aO=Number.POSITIVE_INFINITY,aI=Number.NEGATIVE_INFINITY,aB=Number.MAX_VALUE,aU,aS,aR,aN,aD,aJ,aT,aP,aH,aG,aC,a0,aX,aL;function aF(a3,a2,a1){if(a2<a3.datamin&&a2!=-aB){a3.datamin=a2}if(a1>a3.datamax&&a1!=aB){a3.datamax=a1}}c.each(m(),function(a1,a2){a2.datamin=aO;a2.datamax=aI;a2.used=false});for(aU=0;aU<Q.length;++aU){aJ=Q[aU];aJ.datapoints={points:[]};an(ak.processRawData,[aJ,aJ.data,aJ.datapoints])}for(aU=0;aU<Q.length;++aU){aJ=Q[aU];var aZ=aJ.data,aW=aJ.datapoints.format;if(!aW){aW=[];aW.push({x:true,number:true,required:true});aW.push({y:true,number:true,required:true});if(aJ.bars.show||(aJ.lines.show&&aJ.lines.fill)){aW.push({y:true,number:true,required:false,defaultValue:0});if(aJ.bars.horizontal){delete aW[aW.length-1].y;aW[aW.length-1].x=true}}aJ.datapoints.format=aW}if(aJ.datapoints.pointsize!=null){continue}aJ.datapoints.pointsize=aW.length;aP=aJ.datapoints.pointsize;aT=aJ.datapoints.points;insertSteps=aJ.lines.show&&aJ.lines.steps;aJ.xaxis.used=aJ.yaxis.used=true;for(aS=aR=0;aS<aZ.length;++aS,aR+=aP){aL=aZ[aS];var aE=aL==null;if(!aE){for(aN=0;aN<aP;++aN){a0=aL[aN];aX=aW[aN];if(aX){if(aX.number&&a0!=null){a0=+a0;if(isNaN(a0)){a0=null}else{if(a0==Infinity){a0=aB}else{if(a0==-Infinity){a0=-aB}}}}if(a0==null){if(aX.required){aE=true}if(aX.defaultValue!=null){a0=aX.defaultValue}}}aT[aR+aN]=a0}}if(aE){for(aN=0;aN<aP;++aN){a0=aT[aR+aN];if(a0!=null){aX=aW[aN];if(aX.x){aF(aJ.xaxis,a0,a0)}if(aX.y){aF(aJ.yaxis,a0,a0)}}aT[aR+aN]=null}}else{if(insertSteps&&aR>0&&aT[aR-aP]!=null&&aT[aR-aP]!=aT[aR]&&aT[aR-aP+1]!=aT[aR+1]){for(aN=0;aN<aP;++aN){aT[aR+aP+aN]=aT[aR+aN]}aT[aR+1]=aT[aR-aP+1];aR+=aP}}}}for(aU=0;aU<Q.length;++aU){aJ=Q[aU];an(ak.processDatapoints,[aJ,aJ.datapoints])}for(aU=0;aU<Q.length;++aU){aJ=Q[aU];aT=aJ.datapoints.points,aP=aJ.datapoints.pointsize;var aK=aO,aQ=aO,aM=aI,aV=aI;for(aS=0;aS<aT.length;aS+=aP){if(aT[aS]==null){continue}for(aN=0;aN<aP;++aN){a0=aT[aS+aN];aX=aW[aN];if(!aX||a0==aB||a0==-aB){continue}if(aX.x){if(a0<aK){aK=a0}if(a0>aM){aM=a0}}if(aX.y){if(a0<aQ){aQ=a0}if(a0>aV){aV=a0}}}}if(aJ.bars.show){var aY=aJ.bars.align=="left"?0:-aJ.bars.barWidth/2;if(aJ.bars.horizontal){aQ+=aY;aV+=aY+aJ.bars.barWidth}else{aK+=aY;aM+=aY+aJ.bars.barWidth}}aF(aJ.xaxis,aK,aM);aF(aJ.yaxis,aQ,aV)}c.each(m(),function(a1,a2){if(a2.datamin==aO){a2.datamin=null}if(a2.datamax==aI){a2.datamax=null}})}function j(aB,aC){var aD=document.createElement("canvas");aD.className=aC;aD.width=G;aD.height=I;if(!aB){c(aD).css({position:"absolute",left:0,top:0})}c(aD).appendTo(av);if(!aD.getContext){aD=window.G_vmlCanvasManager.initElement(aD)}aD.getContext("2d").save();return aD}function B(){G=av.width();I=av.height();if(G<=0||I<=0){throw"Invalid dimensions for plot, width = "+G+", height = "+I}}function g(aC){if(aC.width!=G){aC.width=G}if(aC.height!=I){aC.height=I}var aB=aC.getContext("2d");aB.restore();aB.save()}function X(){var aC,aB=av.children("canvas.base"),aD=av.children("canvas.overlay");if(aB.length==0||aD==0){av.html("");av.css({padding:0});if(av.css("position")=="static"){av.css("position","relative")}B();az=j(true,"base");ad=j(false,"overlay");aC=false}else{az=aB.get(0);ad=aD.get(0);aC=true}H=az.getContext("2d");A=ad.getContext("2d");y=c([ad,az]);if(aC){av.data("plot").shutdown();aq.resize();A.clearRect(0,0,G,I);y.unbind();av.children().not([az,ad]).remove()}av.data("plot",aq)}function ah(){if(O.grid.hoverable){y.mousemove(aa);y.mouseleave(l)}if(O.grid.clickable){y.click(R)}an(ak.bindEvents,[y])}function ag(){if(M){clearTimeout(M)}y.unbind("mousemove",aa);y.unbind("mouseleave",l);y.unbind("click",R);an(ak.shutdown,[y])}function r(aG){function aC(aH){return aH}var aF,aB,aD=aG.options.transform||aC,aE=aG.options.inverseTransform;if(aG.direction=="x"){aF=aG.scale=h/Math.abs(aD(aG.max)-aD(aG.min));aB=Math.min(aD(aG.max),aD(aG.min))}else{aF=aG.scale=w/Math.abs(aD(aG.max)-aD(aG.min));aF=-aF;aB=Math.max(aD(aG.max),aD(aG.min))}if(aD==aC){aG.p2c=function(aH){return(aH-aB)*aF}}else{aG.p2c=function(aH){return(aD(aH)-aB)*aF}}if(!aE){aG.c2p=function(aH){return aB+aH/aF}}else{aG.c2p=function(aH){return aE(aB+aH/aF)}}}function L(aD){var aB=aD.options,aF,aJ=aD.ticks||[],aI=[],aE,aK=aB.labelWidth,aG=aB.labelHeight,aC;function aH(aM,aL){return c('<div style="position:absolute;top:-10000px;'+aL+'font-size:smaller"><div class="'+aD.direction+"Axis "+aD.direction+aD.n+'Axis">'+aM.join("")+"</div></div>").appendTo(av)}if(aD.direction=="x"){if(aK==null){aK=Math.floor(G/(aJ.length>0?aJ.length:1))}if(aG==null){aI=[];for(aF=0;aF<aJ.length;++aF){aE=aJ[aF].label;if(aE){aI.push('<div class="tickLabel" style="float:left;width:'+aK+'px">'+aE+"</div>")}}if(aI.length>0){aI.push('<div style="clear:left"></div>');aC=aH(aI,"width:10000px;");aG=aC.height();aC.remove()}}}else{if(aK==null||aG==null){for(aF=0;aF<aJ.length;++aF){aE=aJ[aF].label;if(aE){aI.push('<div class="tickLabel">'+aE+"</div>")}}if(aI.length>0){aC=aH(aI,"");if(aK==null){aK=aC.children().width()}if(aG==null){aG=aC.find("div.tickLabel").height()}aC.remove()}}}if(aK==null){aK=0}if(aG==null){aG=0}aD.labelWidth=aK;aD.labelHeight=aG}function au(aD){var aC=aD.labelWidth,aL=aD.labelHeight,aH=aD.options.position,aF=aD.options.tickLength,aG=O.grid.axisMargin,aJ=O.grid.labelMargin,aK=aD.direction=="x"?p:aw,aE;var aB=c.grep(aK,function(aN){return aN&&aN.options.position==aH&&aN.reserveSpace});if(c.inArray(aD,aB)==aB.length-1){aG=0}if(aF==null){aF="full"}var aI=c.grep(aK,function(aN){return aN&&aN.reserveSpace});var aM=c.inArray(aD,aI)==0;if(!aM&&aF=="full"){aF=5}if(!isNaN(+aF)){aJ+=+aF}if(aD.direction=="x"){aL+=aJ;if(aH=="bottom"){q.bottom+=aL+aG;aD.box={top:I-q.bottom,height:aL}}else{aD.box={top:q.top+aG,height:aL};q.top+=aL+aG}}else{aC+=aJ;if(aH=="left"){aD.box={left:q.left+aG,width:aC};q.left+=aC+aG}else{q.right+=aC+aG;aD.box={left:G-q.right,width:aC}}}aD.position=aH;aD.tickLength=aF;aD.box.padding=aJ;aD.innermost=aM}function U(aB){if(aB.direction=="x"){aB.box.left=q.left;aB.box.width=h}else{aB.box.top=q.top;aB.box.height=w}}function t(){var aC,aE=m();c.each(aE,function(aF,aG){aG.show=aG.options.show;if(aG.show==null){aG.show=aG.used}aG.reserveSpace=aG.show||aG.options.reserveSpace;n(aG)});allocatedAxes=c.grep(aE,function(aF){return aF.reserveSpace});q.left=q.right=q.top=q.bottom=0;if(O.grid.show){c.each(allocatedAxes,function(aF,aG){S(aG);P(aG);ap(aG,aG.ticks);L(aG)});for(aC=allocatedAxes.length-1;aC>=0;--aC){au(allocatedAxes[aC])}var aD=O.grid.minBorderMargin;if(aD==null){aD=0;for(aC=0;aC<Q.length;++aC){aD=Math.max(aD,Q[aC].points.radius+Q[aC].points.lineWidth/2)}}for(var aB in q){q[aB]+=O.grid.borderWidth;q[aB]=Math.max(aD,q[aB])}}h=G-q.left-q.right;w=I-q.bottom-q.top;c.each(aE,function(aF,aG){r(aG)});if(O.grid.show){c.each(allocatedAxes,function(aF,aG){U(aG)});k()}o()}function n(aE){var aF=aE.options,aD=+(aF.min!=null?aF.min:aE.datamin),aB=+(aF.max!=null?aF.max:aE.datamax),aH=aB-aD;if(aH==0){var aC=aB==0?1:0.01;if(aF.min==null){aD-=aC}if(aF.max==null||aF.min!=null){aB+=aC}}else{var aG=aF.autoscaleMargin;if(aG!=null){if(aF.min==null){aD-=aH*aG;if(aD<0&&aE.datamin!=null&&aE.datamin>=0){aD=0}}if(aF.max==null){aB+=aH*aG;if(aB>0&&aE.datamax!=null&&aE.datamax<=0){aB=0}}}}aE.min=aD;aE.max=aB}function S(aG){var aM=aG.options;var aH;if(typeof aM.ticks=="number"&&aM.ticks>0){aH=aM.ticks}else{aH=0.3*Math.sqrt(aG.direction=="x"?G:I)}var aT=(aG.max-aG.min)/aH,aO,aB,aN,aR,aS,aQ,aI;if(aM.mode=="time"){var aJ={second:1000,minute:60*1000,hour:60*60*1000,day:24*60*60*1000,month:30*24*60*60*1000,year:365.2425*24*60*60*1000};var aK=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[0.25,"month"],[0.5,"month"],[1,"month"],[2,"month"],[3,"month"],[6,"month"],[1,"year"]];var aC=0;if(aM.minTickSize!=null){if(typeof aM.tickSize=="number"){aC=aM.tickSize}else{aC=aM.minTickSize[0]*aJ[aM.minTickSize[1]]}}for(var aS=0;aS<aK.length-1;++aS){if(aT<(aK[aS][0]*aJ[aK[aS][1]]+aK[aS+1][0]*aJ[aK[aS+1][1]])/2&&aK[aS][0]*aJ[aK[aS][1]]>=aC){break}}aO=aK[aS][0];aN=aK[aS][1];if(aN=="year"){aQ=Math.pow(10,Math.floor(Math.log(aT/aJ.year)/Math.LN10));aI=(aT/aJ.year)/aQ;if(aI<1.5){aO=1}else{if(aI<3){aO=2}else{if(aI<7.5){aO=5}else{aO=10}}}aO*=aQ}aG.tickSize=aM.tickSize||[aO,aN];aB=function(aX){var a2=[],a0=aX.tickSize[0],a3=aX.tickSize[1],a1=new Date(aX.min);var aW=a0*aJ[a3];if(a3=="second"){a1.setUTCSeconds(a(a1.getUTCSeconds(),a0))}if(a3=="minute"){a1.setUTCMinutes(a(a1.getUTCMinutes(),a0))}if(a3=="hour"){a1.setUTCHours(a(a1.getUTCHours(),a0))}if(a3=="month"){a1.setUTCMonth(a(a1.getUTCMonth(),a0))}if(a3=="year"){a1.setUTCFullYear(a(a1.getUTCFullYear(),a0))}a1.setUTCMilliseconds(0);if(aW>=aJ.minute){a1.setUTCSeconds(0)}if(aW>=aJ.hour){a1.setUTCMinutes(0)}if(aW>=aJ.day){a1.setUTCHours(0)}if(aW>=aJ.day*4){a1.setUTCDate(1)}if(aW>=aJ.year){a1.setUTCMonth(0)}var a5=0,a4=Number.NaN,aY;do{aY=a4;a4=a1.getTime();a2.push(a4);if(a3=="month"){if(a0<1){a1.setUTCDate(1);var aV=a1.getTime();a1.setUTCMonth(a1.getUTCMonth()+1);var aZ=a1.getTime();a1.setTime(a4+a5*aJ.hour+(aZ-aV)*a0);a5=a1.getUTCHours();a1.setUTCHours(0)}else{a1.setUTCMonth(a1.getUTCMonth()+a0)}}else{if(a3=="year"){a1.setUTCFullYear(a1.getUTCFullYear()+a0)}else{a1.setTime(a4+aW)}}}while(a4<aX.max&&a4!=aY);return a2};aR=function(aV,aY){var a0=new Date(aV);if(aM.timeformat!=null){return c.plot.formatDate(a0,aM.timeformat,aM.monthNames)}var aW=aY.tickSize[0]*aJ[aY.tickSize[1]];var aX=aY.max-aY.min;var aZ=(aM.twelveHourClock)?" %p":"";if(aW<aJ.minute){fmt="%h:%M:%S"+aZ}else{if(aW<aJ.day){if(aX<2*aJ.day){fmt="%h:%M"+aZ}else{fmt="%b %d %h:%M"+aZ}}else{if(aW<aJ.month){fmt="%b %d"}else{if(aW<aJ.year){if(aX<aJ.year){fmt="%b"}else{fmt="%b %y"}}else{fmt="%y"}}}}return c.plot.formatDate(a0,fmt,aM.monthNames)}}else{var aU=aM.tickDecimals;var aP=-Math.floor(Math.log(aT)/Math.LN10);if(aU!=null&&aP>aU){aP=aU}aQ=Math.pow(10,-aP);aI=aT/aQ;if(aI<1.5){aO=1}else{if(aI<3){aO=2;if(aI>2.25&&(aU==null||aP+1<=aU)){aO=2.5;++aP}}else{if(aI<7.5){aO=5}else{aO=10}}}aO*=aQ;if(aM.minTickSize!=null&&aO<aM.minTickSize){aO=aM.minTickSize}aG.tickDecimals=Math.max(0,aU!=null?aU:aP);aG.tickSize=aM.tickSize||aO;aB=function(aX){var aZ=[];var a0=a(aX.min,aX.tickSize),aW=0,aV=Number.NaN,aY;do{aY=aV;aV=a0+aW*aX.tickSize;aZ.push(aV);++aW}while(aV<aX.max&&aV!=aY);return aZ};aR=function(aV,aW){return aV.toFixed(aW.tickDecimals)}}if(aM.alignTicksWithAxis!=null){var aF=(aG.direction=="x"?p:aw)[aM.alignTicksWithAxis-1];if(aF&&aF.used&&aF!=aG){var aL=aB(aG);if(aL.length>0){if(aM.min==null){aG.min=Math.min(aG.min,aL[0])}if(aM.max==null&&aL.length>1){aG.max=Math.max(aG.max,aL[aL.length-1])}}aB=function(aX){var aY=[],aV,aW;for(aW=0;aW<aF.ticks.length;++aW){aV=(aF.ticks[aW].v-aF.min)/(aF.max-aF.min);aV=aX.min+aV*(aX.max-aX.min);aY.push(aV)}return aY};if(aG.mode!="time"&&aM.tickDecimals==null){var aE=Math.max(0,-Math.floor(Math.log(aT)/Math.LN10)+1),aD=aB(aG);if(!(aD.length>1&&/\..*0$/.test((aD[1]-aD[0]).toFixed(aE)))){aG.tickDecimals=aE}}}}aG.tickGenerator=aB;if(c.isFunction(aM.tickFormatter)){aG.tickFormatter=function(aV,aW){return""+aM.tickFormatter(aV,aW)}}else{aG.tickFormatter=aR}}function P(aF){var aH=aF.options.ticks,aG=[];if(aH==null||(typeof aH=="number"&&aH>0)){aG=aF.tickGenerator(aF)}else{if(aH){if(c.isFunction(aH)){aG=aH({min:aF.min,max:aF.max})}else{aG=aH}}}var aE,aB;aF.ticks=[];for(aE=0;aE<aG.length;++aE){var aC=null;var aD=aG[aE];if(typeof aD=="object"){aB=+aD[0];if(aD.length>1){aC=aD[1]}}else{aB=+aD}if(aC==null){aC=aF.tickFormatter(aB,aF)}if(!isNaN(aB)){aF.ticks.push({v:aB,label:aC})}}}function ap(aB,aC){if(aB.options.autoscaleMargin&&aC.length>0){if(aB.options.min==null){aB.min=Math.min(aB.min,aC[0].v)}if(aB.options.max==null&&aC.length>1){aB.max=Math.max(aB.max,aC[aC.length-1].v)}}}function W(){H.clearRect(0,0,G,I);var aC=O.grid;if(aC.show&&aC.backgroundColor){N()}if(aC.show&&!aC.aboveData){ac()}for(var aB=0;aB<Q.length;++aB){an(ak.drawSeries,[H,Q[aB]]);d(Q[aB])}an(ak.draw,[H]);if(aC.show&&aC.aboveData){ac()}}function D(aB,aI){var aE,aH,aG,aD,aF=m();for(i=0;i<aF.length;++i){aE=aF[i];if(aE.direction==aI){aD=aI+aE.n+"axis";if(!aB[aD]&&aE.n==1){aD=aI+"axis"}if(aB[aD]){aH=aB[aD].from;aG=aB[aD].to;break}}}if(!aB[aD]){aE=aI=="x"?p[0]:aw[0];aH=aB[aI+"1"];aG=aB[aI+"2"]}if(aH!=null&&aG!=null&&aH>aG){var aC=aH;aH=aG;aG=aC}return{from:aH,to:aG,axis:aE}}function N(){H.save();H.translate(q.left,q.top);H.fillStyle=am(O.grid.backgroundColor,w,0,"rgba(255, 255, 255, 0)");H.fillRect(0,0,h,w);H.restore()}function ac(){var aF;H.save();H.translate(q.left,q.top);var aH=O.grid.markings;if(aH){if(c.isFunction(aH)){var aK=aq.getAxes();aK.xmin=aK.xaxis.min;aK.xmax=aK.xaxis.max;aK.ymin=aK.yaxis.min;aK.ymax=aK.yaxis.max;aH=aH(aK)}for(aF=0;aF<aH.length;++aF){var aD=aH[aF],aC=D(aD,"x"),aI=D(aD,"y");if(aC.from==null){aC.from=aC.axis.min}if(aC.to==null){aC.to=aC.axis.max}if(aI.from==null){aI.from=aI.axis.min}if(aI.to==null){aI.to=aI.axis.max}if(aC.to<aC.axis.min||aC.from>aC.axis.max||aI.to<aI.axis.min||aI.from>aI.axis.max){continue}aC.from=Math.max(aC.from,aC.axis.min);aC.to=Math.min(aC.to,aC.axis.max);aI.from=Math.max(aI.from,aI.axis.min);aI.to=Math.min(aI.to,aI.axis.max);if(aC.from==aC.to&&aI.from==aI.to){continue}aC.from=aC.axis.p2c(aC.from);aC.to=aC.axis.p2c(aC.to);aI.from=aI.axis.p2c(aI.from);aI.to=aI.axis.p2c(aI.to);if(aC.from==aC.to||aI.from==aI.to){H.beginPath();H.strokeStyle=aD.color||O.grid.markingsColor;H.lineWidth=aD.lineWidth||O.grid.markingsLineWidth;H.moveTo(aC.from,aI.from);H.lineTo(aC.to,aI.to);H.stroke()}else{H.fillStyle=aD.color||O.grid.markingsColor;H.fillRect(aC.from,aI.to,aC.to-aC.from,aI.from-aI.to)}}}var aK=m(),aM=O.grid.borderWidth;for(var aE=0;aE<aK.length;++aE){var aB=aK[aE],aG=aB.box,aQ=aB.tickLength,aN,aL,aP,aJ;if(!aB.show||aB.ticks.length==0){continue}H.strokeStyle=aB.options.tickColor||c.color.parse(aB.options.color).scale("a",0.22).toString();H.lineWidth=1;if(aB.direction=="x"){aN=0;if(aQ=="full"){aL=(aB.position=="top"?0:w)}else{aL=aG.top-q.top+(aB.position=="top"?aG.height:0)}}else{aL=0;if(aQ=="full"){aN=(aB.position=="left"?0:h)}else{aN=aG.left-q.left+(aB.position=="left"?aG.width:0)}}if(!aB.innermost){H.beginPath();aP=aJ=0;if(aB.direction=="x"){aP=h}else{aJ=w}if(H.lineWidth==1){aN=Math.floor(aN)+0.5;aL=Math.floor(aL)+0.5}H.moveTo(aN,aL);H.lineTo(aN+aP,aL+aJ);H.stroke()}H.beginPath();for(aF=0;aF<aB.ticks.length;++aF){var aO=aB.ticks[aF].v;aP=aJ=0;if(aO<aB.min||aO>aB.max||(aQ=="full"&&aM>0&&(aO==aB.min||aO==aB.max))){continue}if(aB.direction=="x"){aN=aB.p2c(aO);aJ=aQ=="full"?-w:aQ;if(aB.position=="top"){aJ=-aJ}}else{aL=aB.p2c(aO);aP=aQ=="full"?-h:aQ;if(aB.position=="left"){aP=-aP}}if(H.lineWidth==1){if(aB.direction=="x"){aN=Math.floor(aN)+0.5}else{aL=Math.floor(aL)+0.5}}H.moveTo(aN,aL);H.lineTo(aN+aP,aL+aJ)}H.stroke()}if(aM){H.lineWidth=aM;H.strokeStyle=O.grid.borderColor;H.strokeRect(-aM/2,-aM/2,h+aM,w+aM)}H.restore()}function k(){av.find(".tickLabels").remove();var aG=['<div class="tickLabels" style="font-size:smaller">'];var aJ=m();for(var aD=0;aD<aJ.length;++aD){var aC=aJ[aD],aF=aC.box;if(!aC.show){continue}aG.push('<div class="'+aC.direction+"Axis "+aC.direction+aC.n+'Axis" style="color:'+aC.options.color+'">');for(var aE=0;aE<aC.ticks.length;++aE){var aH=aC.ticks[aE];if(!aH.label||aH.v<aC.min||aH.v>aC.max){continue}var aK={},aI;if(aC.direction=="x"){aI="center";aK.left=Math.round(q.left+aC.p2c(aH.v)-aC.labelWidth/2);if(aC.position=="bottom"){aK.top=aF.top+aF.padding}else{aK.bottom=I-(aF.top+aF.height-aF.padding)}}else{aK.top=Math.round(q.top+aC.p2c(aH.v)-aC.labelHeight/2);if(aC.position=="left"){aK.right=G-(aF.left+aF.width-aF.padding);aI="right"}else{aK.left=aF.left+aF.padding;aI="left"}}aK.width=aC.labelWidth;var aB=["position:absolute","text-align:"+aI];for(var aL in aK){aB.push(aL+":"+aK[aL]+"px")}aG.push('<div class="tickLabel" style="'+aB.join(";")+'">'+aH.label+"</div>")}aG.push("</div>")}aG.push("</div>");av.append(aG.join(""))}function d(aB){if(aB.lines.show){at(aB)}if(aB.bars.show){e(aB)}if(aB.points.show){ao(aB)}}function at(aE){function aD(aP,aQ,aI,aU,aT){var aV=aP.points,aJ=aP.pointsize,aN=null,aM=null;H.beginPath();for(var aO=aJ;aO<aV.length;aO+=aJ){var aL=aV[aO-aJ],aS=aV[aO-aJ+1],aK=aV[aO],aR=aV[aO+1];if(aL==null||aK==null){continue}if(aS<=aR&&aS<aT.min){if(aR<aT.min){continue}aL=(aT.min-aS)/(aR-aS)*(aK-aL)+aL;aS=aT.min}else{if(aR<=aS&&aR<aT.min){if(aS<aT.min){continue}aK=(aT.min-aS)/(aR-aS)*(aK-aL)+aL;aR=aT.min}}if(aS>=aR&&aS>aT.max){if(aR>aT.max){continue}aL=(aT.max-aS)/(aR-aS)*(aK-aL)+aL;aS=aT.max}else{if(aR>=aS&&aR>aT.max){if(aS>aT.max){continue}aK=(aT.max-aS)/(aR-aS)*(aK-aL)+aL;aR=aT.max}}if(aL<=aK&&aL<aU.min){if(aK<aU.min){continue}aS=(aU.min-aL)/(aK-aL)*(aR-aS)+aS;aL=aU.min}else{if(aK<=aL&&aK<aU.min){if(aL<aU.min){continue}aR=(aU.min-aL)/(aK-aL)*(aR-aS)+aS;aK=aU.min}}if(aL>=aK&&aL>aU.max){if(aK>aU.max){continue}aS=(aU.max-aL)/(aK-aL)*(aR-aS)+aS;aL=aU.max}else{if(aK>=aL&&aK>aU.max){if(aL>aU.max){continue}aR=(aU.max-aL)/(aK-aL)*(aR-aS)+aS;aK=aU.max}}if(aL!=aN||aS!=aM){H.moveTo(aU.p2c(aL)+aQ,aT.p2c(aS)+aI)}aN=aK;aM=aR;H.lineTo(aU.p2c(aK)+aQ,aT.p2c(aR)+aI)}H.stroke()}function aF(aI,aQ,aP){var aW=aI.points,aV=aI.pointsize,aN=Math.min(Math.max(0,aP.min),aP.max),aX=0,aU,aT=false,aM=1,aL=0,aR=0;while(true){if(aV>0&&aX>aW.length+aV){break}aX+=aV;var aZ=aW[aX-aV],aK=aW[aX-aV+aM],aY=aW[aX],aJ=aW[aX+aM];if(aT){if(aV>0&&aZ!=null&&aY==null){aR=aX;aV=-aV;aM=2;continue}if(aV<0&&aX==aL+aV){H.fill();aT=false;aV=-aV;aM=1;aX=aL=aR+aV;continue}}if(aZ==null||aY==null){continue}if(aZ<=aY&&aZ<aQ.min){if(aY<aQ.min){continue}aK=(aQ.min-aZ)/(aY-aZ)*(aJ-aK)+aK;aZ=aQ.min}else{if(aY<=aZ&&aY<aQ.min){if(aZ<aQ.min){continue}aJ=(aQ.min-aZ)/(aY-aZ)*(aJ-aK)+aK;aY=aQ.min}}if(aZ>=aY&&aZ>aQ.max){if(aY>aQ.max){continue}aK=(aQ.max-aZ)/(aY-aZ)*(aJ-aK)+aK;aZ=aQ.max}else{if(aY>=aZ&&aY>aQ.max){if(aZ>aQ.max){continue}aJ=(aQ.max-aZ)/(aY-aZ)*(aJ-aK)+aK;aY=aQ.max}}if(!aT){H.beginPath();H.moveTo(aQ.p2c(aZ),aP.p2c(aN));aT=true}if(aK>=aP.max&&aJ>=aP.max){H.lineTo(aQ.p2c(aZ),aP.p2c(aP.max));H.lineTo(aQ.p2c(aY),aP.p2c(aP.max));continue}else{if(aK<=aP.min&&aJ<=aP.min){H.lineTo(aQ.p2c(aZ),aP.p2c(aP.min));H.lineTo(aQ.p2c(aY),aP.p2c(aP.min));continue}}var aO=aZ,aS=aY;if(aK<=aJ&&aK<aP.min&&aJ>=aP.min){aZ=(aP.min-aK)/(aJ-aK)*(aY-aZ)+aZ;aK=aP.min}else{if(aJ<=aK&&aJ<aP.min&&aK>=aP.min){aY=(aP.min-aK)/(aJ-aK)*(aY-aZ)+aZ;aJ=aP.min}}if(aK>=aJ&&aK>aP.max&&aJ<=aP.max){aZ=(aP.max-aK)/(aJ-aK)*(aY-aZ)+aZ;aK=aP.max}else{if(aJ>=aK&&aJ>aP.max&&aK<=aP.max){aY=(aP.max-aK)/(aJ-aK)*(aY-aZ)+aZ;aJ=aP.max}}if(aZ!=aO){H.lineTo(aQ.p2c(aO),aP.p2c(aK))}H.lineTo(aQ.p2c(aZ),aP.p2c(aK));H.lineTo(aQ.p2c(aY),aP.p2c(aJ));if(aY!=aS){H.lineTo(aQ.p2c(aY),aP.p2c(aJ));H.lineTo(aQ.p2c(aS),aP.p2c(aJ))}}}H.save();H.translate(q.left,q.top);H.lineJoin="round";var aG=aE.lines.lineWidth,aB=aE.shadowSize;if(aG>0&&aB>0){H.lineWidth=aB;H.strokeStyle="rgba(0,0,0,0.1)";var aH=Math.PI/18;aD(aE.datapoints,Math.sin(aH)*(aG/2+aB/2),Math.cos(aH)*(aG/2+aB/2),aE.xaxis,aE.yaxis);H.lineWidth=aB/2;aD(aE.datapoints,Math.sin(aH)*(aG/2+aB/4),Math.cos(aH)*(aG/2+aB/4),aE.xaxis,aE.yaxis)}H.lineWidth=aG;H.strokeStyle=aE.color;var aC=ae(aE.lines,aE.color,0,w);if(aC){H.fillStyle=aC;aF(aE.datapoints,aE.xaxis,aE.yaxis)}if(aG>0){aD(aE.datapoints,0,0,aE.xaxis,aE.yaxis)}H.restore()}function ao(aE){function aH(aN,aM,aU,aK,aS,aT,aQ,aJ){var aR=aN.points,aI=aN.pointsize;for(var aL=0;aL<aR.length;aL+=aI){var aP=aR[aL],aO=aR[aL+1];if(aP==null||aP<aT.min||aP>aT.max||aO<aQ.min||aO>aQ.max){continue}H.beginPath();aP=aT.p2c(aP);aO=aQ.p2c(aO)+aK;if(aJ=="circle"){H.arc(aP,aO,aM,0,aS?Math.PI:Math.PI*2,false)}else{aJ(H,aP,aO,aM,aS)}H.closePath();if(aU){H.fillStyle=aU;H.fill()}H.stroke()}}H.save();H.translate(q.left,q.top);var aG=aE.points.lineWidth,aC=aE.shadowSize,aB=aE.points.radius,aF=aE.points.symbol;if(aG>0&&aC>0){var aD=aC/2;H.lineWidth=aD;H.strokeStyle="rgba(0,0,0,0.1)";aH(aE.datapoints,aB,null,aD+aD/2,true,aE.xaxis,aE.yaxis,aF);H.strokeStyle="rgba(0,0,0,0.2)";aH(aE.datapoints,aB,null,aD/2,true,aE.xaxis,aE.yaxis,aF)}H.lineWidth=aG;H.strokeStyle=aE.color;aH(aE.datapoints,aB,ae(aE.points,aE.color),0,false,aE.xaxis,aE.yaxis,aF);H.restore()}function E(aN,aM,aV,aI,aQ,aF,aD,aL,aK,aU,aR,aC){var aE,aT,aJ,aP,aG,aB,aO,aH,aS;if(aR){aH=aB=aO=true;aG=false;aE=aV;aT=aN;aP=aM+aI;aJ=aM+aQ;if(aT<aE){aS=aT;aT=aE;aE=aS;aG=true;aB=false}}else{aG=aB=aO=true;aH=false;aE=aN+aI;aT=aN+aQ;aJ=aV;aP=aM;if(aP<aJ){aS=aP;aP=aJ;aJ=aS;aH=true;aO=false}}if(aT<aL.min||aE>aL.max||aP<aK.min||aJ>aK.max){return}if(aE<aL.min){aE=aL.min;aG=false}if(aT>aL.max){aT=aL.max;aB=false}if(aJ<aK.min){aJ=aK.min;aH=false}if(aP>aK.max){aP=aK.max;aO=false}aE=aL.p2c(aE);aJ=aK.p2c(aJ);aT=aL.p2c(aT);aP=aK.p2c(aP);if(aD){aU.beginPath();aU.moveTo(aE,aJ);aU.lineTo(aE,aP);aU.lineTo(aT,aP);aU.lineTo(aT,aJ);aU.fillStyle=aD(aJ,aP);aU.fill()}if(aC>0&&(aG||aB||aO||aH)){aU.beginPath();aU.moveTo(aE,aJ+aF);if(aG){aU.lineTo(aE,aP+aF)}else{aU.moveTo(aE,aP+aF)}if(aO){aU.lineTo(aT,aP+aF)}else{aU.moveTo(aT,aP+aF)}if(aB){aU.lineTo(aT,aJ+aF)}else{aU.moveTo(aT,aJ+aF)}if(aH){aU.lineTo(aE,aJ+aF)}else{aU.moveTo(aE,aJ+aF)}aU.stroke()}}function e(aD){function aC(aJ,aI,aL,aG,aK,aN,aM){var aO=aJ.points,aF=aJ.pointsize;for(var aH=0;aH<aO.length;aH+=aF){if(aO[aH]==null){continue}E(aO[aH],aO[aH+1],aO[aH+2],aI,aL,aG,aK,aN,aM,H,aD.bars.horizontal,aD.bars.lineWidth)}}H.save();H.translate(q.left,q.top);H.lineWidth=aD.bars.lineWidth;H.strokeStyle=aD.color;var aB=aD.bars.align=="left"?0:-aD.bars.barWidth/2;var aE=aD.bars.fill?function(aF,aG){return ae(aD.bars,aD.color,aF,aG)}:null;aC(aD.datapoints,aB,aB+aD.bars.barWidth,0,aE,aD.xaxis,aD.yaxis);H.restore()}function ae(aD,aB,aC,aF){var aE=aD.fill;if(!aE){return null}if(aD.fillColor){return am(aD.fillColor,aC,aF,aB)}var aG=c.color.parse(aB);aG.a=typeof aE=="number"?aE:0.4;aG.normalize();return aG.toString()}function o(){av.find(".legend").remove();if(!O.legend.show){return}var aH=[],aF=false,aN=O.legend.labelFormatter,aM,aJ;for(var aE=0;aE<Q.length;++aE){aM=Q[aE];aJ=aM.label;if(!aJ){continue}if(aE%O.legend.noColumns==0){if(aF){aH.push("</tr>")}aH.push("<tr>");aF=true}if(aN){aJ=aN(aJ,aM)}aH.push('<td class="legendColorBox"><div style="border:1px solid '+O.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+aM.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+aJ+"</td>")}if(aF){aH.push("</tr>")}if(aH.length==0){return}var aL='<table style="font-size:smaller;color:'+O.grid.color+'">'+aH.join("")+"</table>";if(O.legend.container!=null){c(O.legend.container).html(aL)}else{var aI="",aC=O.legend.position,aD=O.legend.margin;if(aD[0]==null){aD=[aD,aD]}if(aC.charAt(0)=="n"){aI+="top:"+(aD[1]+q.top)+"px;"}else{if(aC.charAt(0)=="s"){aI+="bottom:"+(aD[1]+q.bottom)+"px;"}}if(aC.charAt(1)=="e"){aI+="right:"+(aD[0]+q.right)+"px;"}else{if(aC.charAt(1)=="w"){aI+="left:"+(aD[0]+q.left)+"px;"}}var aK=c('<div class="legend">'+aL.replace('style="','style="position:absolute;'+aI+";")+"</div>").appendTo(av);if(O.legend.backgroundOpacity!=0){var aG=O.legend.backgroundColor;if(aG==null){aG=O.grid.backgroundColor;if(aG&&typeof aG=="string"){aG=c.color.parse(aG)}else{aG=c.color.extract(aK,"background-color")}aG.a=1;aG=aG.toString()}var aB=aK.children();c('<div style="position:absolute;width:'+aB.width()+"px;height:"+aB.height()+"px;"+aI+"background-color:"+aG+';"> </div>').prependTo(aK).css("opacity",O.legend.backgroundOpacity)}}}var ab=[],M=null;function K(aI,aG,aD){var aO=O.grid.mouseActiveRadius,a0=aO*aO+1,aY=null,aR=false,aW,aU;for(aW=Q.length-1;aW>=0;--aW){if(!aD(Q[aW])){continue}var aP=Q[aW],aH=aP.xaxis,aF=aP.yaxis,aV=aP.datapoints.points,aT=aP.datapoints.pointsize,aQ=aH.c2p(aI),aN=aF.c2p(aG),aC=aO/aH.scale,aB=aO/aF.scale;if(aH.options.inverseTransform){aC=Number.MAX_VALUE}if(aF.options.inverseTransform){aB=Number.MAX_VALUE}if(aP.lines.show||aP.points.show){for(aU=0;aU<aV.length;aU+=aT){var aK=aV[aU],aJ=aV[aU+1];if(aK==null){continue}if(aK-aQ>aC||aK-aQ<-aC||aJ-aN>aB||aJ-aN<-aB){continue}var aM=Math.abs(aH.p2c(aK)-aI),aL=Math.abs(aF.p2c(aJ)-aG),aS=aM*aM+aL*aL;if(aS<a0){a0=aS;aY=[aW,aU/aT]}}}if(aP.bars.show&&!aY){var aE=aP.bars.align=="left"?0:-aP.bars.barWidth/2,aX=aE+aP.bars.barWidth;for(aU=0;aU<aV.length;aU+=aT){var aK=aV[aU],aJ=aV[aU+1],aZ=aV[aU+2];if(aK==null){continue}if(Q[aW].bars.horizontal?(aQ<=Math.max(aZ,aK)&&aQ>=Math.min(aZ,aK)&&aN>=aJ+aE&&aN<=aJ+aX):(aQ>=aK+aE&&aQ<=aK+aX&&aN>=Math.min(aZ,aJ)&&aN<=Math.max(aZ,aJ))){aY=[aW,aU/aT]}}}}if(aY){aW=aY[0];aU=aY[1];aT=Q[aW].datapoints.pointsize;return{datapoint:Q[aW].datapoints.points.slice(aU*aT,(aU+1)*aT),dataIndex:aU,series:Q[aW],seriesIndex:aW}}return null}function aa(aB){if(O.grid.hoverable){u("plothover",aB,function(aC){return aC.hoverable!=false})}}function l(aB){if(O.grid.hoverable){u("plothover",aB,function(aC){return false})}}function R(aB){u("plotclick",aB,function(aC){return aC.clickable!=false})}function u(aC,aB,aD){var aE=y.offset(),aH=aB.pageX-aE.left-q.left,aF=aB.pageY-aE.top-q.top,aJ=C({left:aH,top:aF});aJ.pageX=aB.pageX;aJ.pageY=aB.pageY;var aK=K(aH,aF,aD);if(aK){aK.pageX=parseInt(aK.series.xaxis.p2c(aK.datapoint[0])+aE.left+q.left);aK.pageY=parseInt(aK.series.yaxis.p2c(aK.datapoint[1])+aE.top+q.top)}if(O.grid.autoHighlight){for(var aG=0;aG<ab.length;++aG){var aI=ab[aG];if(aI.auto==aC&&!(aK&&aI.series==aK.series&&aI.point[0]==aK.datapoint[0]&&aI.point[1]==aK.datapoint[1])){T(aI.series,aI.point)}}if(aK){x(aK.series,aK.datapoint,aC)}}av.trigger(aC,[aJ,aK])}function f(){if(!M){M=setTimeout(s,30)}}function s(){M=null;A.save();A.clearRect(0,0,G,I);A.translate(q.left,q.top);var aC,aB;for(aC=0;aC<ab.length;++aC){aB=ab[aC];if(aB.series.bars.show){v(aB.series,aB.point)}else{ay(aB.series,aB.point)}}A.restore();an(ak.drawOverlay,[A])}function x(aD,aB,aF){if(typeof aD=="number"){aD=Q[aD]}if(typeof aB=="number"){var aE=aD.datapoints.pointsize;aB=aD.datapoints.points.slice(aE*aB,aE*(aB+1))}var aC=al(aD,aB);if(aC==-1){ab.push({series:aD,point:aB,auto:aF});f()}else{if(!aF){ab[aC].auto=false}}}function T(aD,aB){if(aD==null&&aB==null){ab=[];f()}if(typeof aD=="number"){aD=Q[aD]}if(typeof aB=="number"){aB=aD.data[aB]}var aC=al(aD,aB);if(aC!=-1){ab.splice(aC,1);f()}}function al(aD,aE){for(var aB=0;aB<ab.length;++aB){var aC=ab[aB];if(aC.series==aD&&aC.point[0]==aE[0]&&aC.point[1]==aE[1]){return aB}}return -1}function ay(aE,aD){var aC=aD[0],aI=aD[1],aH=aE.xaxis,aG=aE.yaxis;if(aC<aH.min||aC>aH.max||aI<aG.min||aI>aG.max){return}var aF=aE.points.radius+aE.points.lineWidth/2;A.lineWidth=aF;A.strokeStyle=c.color.parse(aE.color).scale("a",0.5).toString();var aB=1.5*aF,aC=aH.p2c(aC),aI=aG.p2c(aI);A.beginPath();if(aE.points.symbol=="circle"){A.arc(aC,aI,aB,0,2*Math.PI,false)}else{aE.points.symbol(A,aC,aI,aB,false)}A.closePath();A.stroke()}function v(aE,aB){A.lineWidth=aE.bars.lineWidth;A.strokeStyle=c.color.parse(aE.color).scale("a",0.5).toString();var aD=c.color.parse(aE.color).scale("a",0.5).toString();var aC=aE.bars.align=="left"?0:-aE.bars.barWidth/2;E(aB[0],aB[1],aB[2]||0,aC,aC+aE.bars.barWidth,0,function(){return aD},aE.xaxis,aE.yaxis,A,aE.bars.horizontal,aE.bars.lineWidth)}function am(aJ,aB,aH,aC){if(typeof aJ=="string"){return aJ}else{var aI=H.createLinearGradient(0,aH,0,aB);for(var aE=0,aD=aJ.colors.length;aE<aD;++aE){var aF=aJ.colors[aE];if(typeof aF!="string"){var aG=c.color.parse(aC);if(aF.brightness!=null){aG=aG.scale("rgb",aF.brightness)}if(aF.opacity!=null){aG.a*=aF.opacity}aF=aG.toString()}aI.addColorStop(aE/(aD-1),aF)}return aI}}}c.plot=function(g,e,d){var f=new b(c(g),e,d,c.plot.plugins);return f};c.plot.version="0.7";c.plot.plugins=[];c.plot.formatDate=function(l,f,h){var o=function(d){d=""+d;return d.length==1?"0"+d:d};var e=[];var p=false,j=false;var n=l.getUTCHours();var k=n<12;if(h==null){h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}if(f.search(/%p|%P/)!=-1){if(n>12){n=n-12}else{if(n==0){n=12}}}for(var g=0;g<f.length;++g){var m=f.charAt(g);if(p){switch(m){case"h":m=""+n;break;case"H":m=o(n);break;case"M":m=o(l.getUTCMinutes());break;case"S":m=o(l.getUTCSeconds());break;case"d":m=""+l.getUTCDate();break;case"m":m=""+(l.getUTCMonth()+1);break;case"y":m=""+l.getUTCFullYear();break;case"b":m=""+h[l.getUTCMonth()];break;case"p":m=(k)?("am"):("pm");break;case"P":m=(k)?("AM"):("PM");break;case"0":m="";j=true;break}if(m&&j){m=o(m);j=false}e.push(m);if(!j){p=false}}else{if(m=="%"){p=true}else{e.push(m)}}}return e.join("")};function a(e,d){return d*Math.floor(e/d)}})(jQuery);;(function(b){function c(D){var h=null;var L=null;var n=null;var B=null;var p=null;var M=0;var F=true;var o=10;var w=0.95;var A=0;var d=false;var z=false;var j=[];D.hooks.processOptions.push(g);D.hooks.bindEvents.push(e);function g(O,N){if(N.series.pie.show){N.grid.show=false;if(N.series.pie.label.show=="auto"){if(N.legend.show){N.series.pie.label.show=false}else{N.series.pie.label.show=true}}if(N.series.pie.radius=="auto"){if(N.series.pie.label.show){N.series.pie.radius=3/4}else{N.series.pie.radius=1}}if(N.series.pie.tilt>1){N.series.pie.tilt=1}if(N.series.pie.tilt<0){N.series.pie.tilt=0}O.hooks.processDatapoints.push(E);O.hooks.drawOverlay.push(H);O.hooks.draw.push(r)}}function e(P,N){var O=P.getOptions();if(O.series.pie.show&&O.grid.hoverable){N.unbind("mousemove").mousemove(t)}if(O.series.pie.show&&O.grid.clickable){N.unbind("click").click(l)}}function G(O){var P="";function N(S,T){if(!T){T=0}for(var R=0;R<S.length;++R){for(var Q=0;Q<T;Q++){P+="\t"}if(typeof S[R]=="object"){P+=""+R+":\n";N(S[R],T+1)}else{P+=""+R+": "+S[R]+"\n"}}}N(O);alert(P)}function q(P){for(var N=0;N<P.length;++N){var O=parseFloat(P[N].data[0][1]);if(O){M+=O}}}function E(Q,N,O,P){if(!d){d=true;h=Q.getCanvas();L=b(h).parent();a=Q.getOptions();Q.setData(K(Q.getData()))}}function I(){A=L.children().filter(".legend").children().width();n=Math.min(h.width,(h.height/a.series.pie.tilt))/2;p=(h.height/2)+a.series.pie.offset.top;B=(h.width/2);if(a.series.pie.offset.left=="auto"){if(a.legend.position.match("w")){B+=A/2}else{B-=A/2}}else{B+=a.series.pie.offset.left}if(B<n){B=n}else{if(B>h.width-n){B=h.width-n}}}function v(O){for(var N=0;N<O.length;++N){if(typeof(O[N].data)=="number"){O[N].data=[[1,O[N].data]]}else{if(typeof(O[N].data)=="undefined"||typeof(O[N].data[0])=="undefined"){if(typeof(O[N].data)!="undefined"&&typeof(O[N].data.label)!="undefined"){O[N].label=O[N].data.label}O[N].data=[[1,0]]}}}return O}function K(Q){Q=v(Q);q(Q);var P=0;var S=0;var N=a.series.pie.combine.color;var R=[];for(var O=0;O<Q.length;++O){Q[O].data[0][1]=parseFloat(Q[O].data[0][1]);if(!Q[O].data[0][1]){Q[O].data[0][1]=0}if(Q[O].data[0][1]/M<=a.series.pie.combine.threshold){P+=Q[O].data[0][1];S++;if(!N){N=Q[O].color}}else{R.push({data:[[1,Q[O].data[0][1]]],color:Q[O].color,label:Q[O].label,angle:(Q[O].data[0][1]*(Math.PI*2))/M,percent:(Q[O].data[0][1]/M*100)})}}if(S>0){R.push({data:[[1,P]],color:N,label:a.series.pie.combine.label,angle:(P*(Math.PI*2))/M,percent:(P/M*100)})}return R}function r(S,Q){if(!L){return}ctx=Q;I();var T=S.getData();var P=0;while(F&&P<o){F=false;if(P>0){n*=w}P+=1;N();if(a.series.pie.tilt<=0.8){O()}R()}if(P>=o){N();L.prepend('<div class="error">Could not draw pie with labels contained inside canvas</div>')}if(S.setSeries&&S.insertLegend){S.setSeries(T);S.insertLegend()}function N(){ctx.clearRect(0,0,h.width,h.height);L.children().filter(".pieLabel, .pieLabelBackground").remove()}function O(){var Z=5;var Y=15;var W=10;var X=0.02;if(a.series.pie.radius>1){var U=a.series.pie.radius}else{var U=n*a.series.pie.radius}if(U>=(h.width/2)-Z||U*a.series.pie.tilt>=(h.height/2)-Y||U<=W){return}ctx.save();ctx.translate(Z,Y);ctx.globalAlpha=X;ctx.fillStyle="#000";ctx.translate(B,p);ctx.scale(1,a.series.pie.tilt);for(var V=1;V<=W;V++){ctx.beginPath();ctx.arc(0,0,U,0,Math.PI*2,false);ctx.fill();U-=V}ctx.restore()}function R(){startAngle=Math.PI*a.series.pie.startAngle;if(a.series.pie.radius>1){var U=a.series.pie.radius}else{var U=n*a.series.pie.radius}ctx.save();ctx.translate(B,p);ctx.scale(1,a.series.pie.tilt);ctx.save();var Y=startAngle;for(var W=0;W<T.length;++W){T[W].startAngle=Y;X(T[W].angle,T[W].color,true)}ctx.restore();ctx.save();ctx.lineWidth=a.series.pie.stroke.width;Y=startAngle;for(var W=0;W<T.length;++W){X(T[W].angle,a.series.pie.stroke.color,false)}ctx.restore();J(ctx);if(a.series.pie.label.show){V()}ctx.restore();function X(ab,Z,aa){if(ab<=0){return}if(aa){ctx.fillStyle=Z}else{ctx.strokeStyle=Z;ctx.lineJoin="round"}ctx.beginPath();if(Math.abs(ab-Math.PI*2)>1e-9){ctx.moveTo(0,0)}else{if(b.browser.msie){ab-=0.0001}}ctx.arc(0,0,U,Y,Y+ab,false);ctx.closePath();Y+=ab;if(aa){ctx.fill()}else{ctx.stroke()}}function V(){var ac=startAngle;if(a.series.pie.label.radius>1){var Z=a.series.pie.label.radius}else{var Z=n*a.series.pie.label.radius}for(var ab=0;ab<T.length;++ab){if(T[ab].percent>=a.series.pie.label.threshold*100){aa(T[ab],ac,ab)}ac+=T[ab].angle}function aa(ap,ai,ag){if(ap.data[0][1]==0){return}var ar=a.legend.labelFormatter,aq,ae=a.series.pie.label.formatter;if(ar){aq=ar(ap.label,ap)}else{aq=ap.label}if(ae){aq=ae(aq,ap)}var aj=((ai+ap.angle)+ai)/2;var ao=B+Math.round(Math.cos(aj)*Z);var am=p+Math.round(Math.sin(aj)*Z)*a.series.pie.tilt;var af='<span class="pieLabel" id="pieLabel'+ag+'" style="position:absolute;top:'+am+"px;left:"+ao+'px;">'+aq+"</span>";L.append(af);var an=L.children("#pieLabel"+ag);var ad=(am-an.height()/2);var ah=(ao-an.width()/2);an.css("top",ad);an.css("left",ah);if(0-ad>0||0-ah>0||h.height-(ad+an.height())<0||h.width-(ah+an.width())<0){F=true}if(a.series.pie.label.background.opacity!=0){var ak=a.series.pie.label.background.color;if(ak==null){ak=ap.color}var al="top:"+ad+"px;left:"+ah+"px;";b('<div class="pieLabelBackground" style="position:absolute;width:'+an.width()+"px;height:"+an.height()+"px;"+al+"background-color:"+ak+';"> </div>').insertBefore(an).css("opacity",a.series.pie.label.background.opacity)}}}}}function J(N){if(a.series.pie.innerRadius>0){N.save();innerRadius=a.series.pie.innerRadius>1?a.series.pie.innerRadius:n*a.series.pie.innerRadius;N.globalCompositeOperation="destination-out";N.beginPath();N.fillStyle=a.series.pie.stroke.color;N.arc(0,0,innerRadius,0,Math.PI*2,false);N.fill();N.closePath();N.restore();N.save();N.beginPath();N.strokeStyle=a.series.pie.stroke.color;N.arc(0,0,innerRadius,0,Math.PI*2,false);N.stroke();N.closePath();N.restore()}}function s(Q,R){for(var S=false,P=-1,N=Q.length,O=N-1;++P<N;O=P){((Q[P][1]<=R[1]&&R[1]<Q[O][1])||(Q[O][1]<=R[1]&&R[1]<Q[P][1]))&&(R[0]<(Q[O][0]-Q[P][0])*(R[1]-Q[P][1])/(Q[O][1]-Q[P][1])+Q[P][0])&&(S=!S)}return S}function u(R,P){var T=D.getData(),O=D.getOptions(),N=O.series.pie.radius>1?O.series.pie.radius:n*O.series.pie.radius;for(var Q=0;Q<T.length;++Q){var S=T[Q];if(S.pie.show){ctx.save();ctx.beginPath();ctx.moveTo(0,0);ctx.arc(0,0,N,S.startAngle,S.startAngle+S.angle,false);ctx.closePath();x=R-B;y=P-p;if(ctx.isPointInPath){if(ctx.isPointInPath(R-B,P-p)){ctx.restore();return{datapoint:[S.percent,S.data],dataIndex:0,series:S,seriesIndex:Q}}}else{p1X=(N*Math.cos(S.startAngle));p1Y=(N*Math.sin(S.startAngle));p2X=(N*Math.cos(S.startAngle+(S.angle/4)));p2Y=(N*Math.sin(S.startAngle+(S.angle/4)));p3X=(N*Math.cos(S.startAngle+(S.angle/2)));p3Y=(N*Math.sin(S.startAngle+(S.angle/2)));p4X=(N*Math.cos(S.startAngle+(S.angle/1.5)));p4Y=(N*Math.sin(S.startAngle+(S.angle/1.5)));p5X=(N*Math.cos(S.startAngle+S.angle));p5Y=(N*Math.sin(S.startAngle+S.angle));arrPoly=[[0,0],[p1X,p1Y],[p2X,p2Y],[p3X,p3Y],[p4X,p4Y],[p5X,p5Y]];arrPoint=[x,y];if(s(arrPoly,arrPoint)){ctx.restore();return{datapoint:[S.percent,S.data],dataIndex:0,series:S,seriesIndex:Q}}}ctx.restore()}}return null}function t(N){m("plothover",N)}function l(N){m("plotclick",N)}function m(N,T){var O=D.offset(),R=parseInt(T.pageX-O.left),P=parseInt(T.pageY-O.top),V=u(R,P);if(a.grid.autoHighlight){for(var Q=0;Q<j.length;++Q){var S=j[Q];if(S.auto==N&&!(V&&S.series==V.series)){f(S.series)}}}if(V){k(V.series,N)}var U={pageX:T.pageX,pageY:T.pageY};L.trigger(N,[U,V])}function k(O,P){if(typeof O=="number"){O=series[O]}var N=C(O);if(N==-1){j.push({series:O,auto:P});D.triggerRedrawOverlay()}else{if(!P){j[N].auto=false}}}function f(O){if(O==null){j=[];D.triggerRedrawOverlay()}if(typeof O=="number"){O=series[O]}var N=C(O);if(N!=-1){j.splice(N,1);D.triggerRedrawOverlay()}}function C(P){for(var N=0;N<j.length;++N){var O=j[N];if(O.series==P){return N}}return -1}function H(Q,R){var P=Q.getOptions();var N=P.series.pie.radius>1?P.series.pie.radius:n*P.series.pie.radius;R.save();R.translate(B,p);R.scale(1,P.series.pie.tilt);for(i=0;i<j.length;++i){O(j[i].series)}J(R);R.restore();function O(S){if(S.angle<0){return}R.fillStyle="rgba(255, 255, 255, "+P.series.pie.highlight.opacity+")";R.beginPath();if(Math.abs(S.angle-Math.PI*2)>1e-9){R.moveTo(0,0)}R.arc(0,0,N,S.startAngle,S.startAngle+S.angle,false);R.closePath();R.fill()}}}var a={series:{pie:{show:false,radius:"auto",innerRadius:0,startAngle:3/2,tilt:1,offset:{top:0,left:"auto"},stroke:{color:"#FFF",width:1},label:{show:"auto",formatter:function(d,e){return'<div style="font-size:x-small;text-align:center;padding:2px;color:'+e.color+';">'+d+"<br/>"+Math.round(e.percent)+"%</div>"},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:0.5}}}};b.plot.plugins.push({init:c,options:a,name:"pie",version:"1.0"})})(jQuery);;/* The MIT License

 Copyright (c) 2011 by Michael Zinsmaier and nergal.dev
 Copyright (c) 2012 by Thomas Ritou

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

	/*

	 ____________________________________________________

	 what it is:
	 ____________________________________________________

	 curvedLines is a plugin for flot, that tries to display lines in a smoother way.
	 The plugin is based on nergal.dev's work https://code.google.com/p/flot/issues/detail?id=226
	 and further extended with a mode that forces the min/max points of the curves to be on the
	 points. Both modes are achieved through adding of more data points
	 => 1) with large data sets you may get trouble
	 => 2) if you want to display the points too, you have to plot them as 2nd data series over the lines

	 This is version 0.5 of curvedLines so it will probably not work in every case. However
	 the basic form of use descirbed next works (:

	 Feel free to further improve the code

	 ____________________________________________________

	 how to use it:
	 ____________________________________________________

	 var d1 = [[5,5],[7,3],[9,12]];

	 var options = { series: { curvedLines: {  active: true }}};

	 $.plot($("#placeholder"), [{data = d1, lines: { show: true}, curvedLines: {apply: true}}], options);

	 _____________________________________________________

	 options:
	 _____________________________________________________

	 active:           bool true => plugin can be used
	 apply:            bool true => series will be drawn as curved line
	 fit:              bool true => forces the max,mins of the curve to be on the datapoints
	 curvePointFactor  int  defines how many "virtual" points are used per "real" data point to
	 						emulate the curvedLines
	 fitPointDist:     int  defines the x axis distance of the additional two points that are used
	 						to enforce the min max condition. (you will get curvePointFactor * 3 * |datapoints|
	 						"virtual" points if fit is true)
	 						
	 + line options (since v0.5 curved lines use flots line implementation for drawing
	   => line options like fill, show ... are supported out of the box)

	 */

	/*
	 *  v0.1   initial commit
	 *  v0.15  negative values should work now (outcommented a negative -> 0 hook hope it does no harm)
	 *  v0.2   added fill option (thanks to monemihir) and multi axis support (thanks to soewono effendi)
	 *  v0.3   improved saddle handling and added basic handling of Dates
	 *  v0.4   rewritten fill option (thomas ritou) mostly from original flot code (now fill between points rather than to graph bottom), corrected fill Opacity bug
	 *  v0.5   rewritten instead of implementing a own draw function CurvedLines is now based on the processDatapoints flot hook (credits go to thomas ritou).
	 * 		   This change breakes existing code however CurvedLines are now just many tiny straight lines to flot and therefore all flot lines options (like gradient fill,
	 * 	       shadow) are now supported out of the box
	 */

	(function($) {

		var options = {
			series : {
				curvedLines : {
					active : false,
					apply: false,
					fit : false,
					curvePointFactor : 20,
					fitPointDist : 0.0001
				}
			}
		};

		function init(plot) {

			plot.hooks.processOptions.push(processOptions);

			//if the plugin is active register processDatapoints method
			function processOptions(plot, options) {

				if (options.series.curvedLines.active) {
					plot.hooks.processDatapoints.push(processDatapoints);
				}
			}

			//only if the plugin is active
			function processDatapoints(plot, series, datapoints) {
				if (series.curvedLines.apply == true) {
					if (series.lines.fill) {

						var pointsTop = calculateCurvePoints(datapoints, series.curvedLines, 1)
						,pointsBottom = calculateCurvePoints(datapoints, series.curvedLines, 2); //flot makes sur for us that we've got a second y point if fill is true !

						//Merge top and bottom curve
						datapoints.pointsize = 3;
						datapoints.points = [];
						var j = 0;
						var k = 0;
						var i = 0;
						var ps = 2;
						while (i < pointsTop.length || j < pointsBottom.length) {
							if (pointsTop[i] == pointsBottom[j]) {
								datapoints.points[k] = pointsTop[i];
								datapoints.points[k + 1] = pointsTop[i + 1];
								datapoints.points[k + 2] = pointsBottom[j + 1];
								j += ps;
								i += ps;

							} else if (pointsTop[i] < pointsBottom[j]) {
								datapoints.points[k] = pointsTop[i];
								datapoints.points[k + 1] = pointsTop[i + 1];
								datapoints.points[k + 2] = k > 0 ? datapoints.points[k-1] : null;
								i += ps;
							} else {
								datapoints.points[k] = pointsBottom[j];
								datapoints.points[k + 1] = k > 1 ? datapoints.points[k-2] : null;
								datapoints.points[k + 2] = pointsBottom[j + 1];
								j += ps;
							}
							k += 3;
						}

						if (series.lines.lineWidth > 0) {//Let's draw line in separate series
							var newSerie = $.extend({}, series);
							newSerie.lines = $.extend({}, series.lines);
							newSerie.lines.fill = undefined;
							newSerie.label = undefined;
							newSerie.datapoints = {};
							//Redefine datapoints to top only (else it can have null values which will open the cruve !)
							newSerie.datapoints.points = pointsTop;
							newSerie.datapoints.pointsize = 2;
							newSerie.curvedLines.apply = false;
							//Don't redo curve point calculation as datapoint is copied to this new serie
							//We find our series to add the line just after the fill (so other series you wanted above this one will still be)
							var allSeries = plot.getData();
							for ( i = 0; i < allSeries.length; i++) {
								if (allSeries[i] == series) {
									plot.getData().splice(i + 1, 0, newSerie);
									break;
								}
							}

							series.lines.lineWidth = 0;
						}

					} else if (series.lines.lineWidth > 0) {
						datapoints.points = calculateCurvePoints(datapoints, series.curvedLines, 1);
						datapoints.pointsize = 2;
					}
				}
			}

		//no real idea whats going on here code mainly from https://code.google.com/p/flot/issues/detail?id=226
		//if fit option is selected additional datapoints get inserted before the curve calculations in nergal.dev s code.
			function calculateCurvePoints(datapoints, curvedLinesOptions, yPos) {

				var points = datapoints.points, ps = datapoints.pointsize;
				var num = curvedLinesOptions.curvePointFactor * (points.length / ps);

				var xdata = new Array;
				var ydata = new Array;

				var X = 0;
				var Y = yPos;
				
				var curX = -1;
				var curY = -1;
				var j = 0;

				if (curvedLinesOptions.fit) {
					//insert a point before and after the "real" data point to force the line
					//to have a max,min at the data point however only if it is a lowest or highest point of the
					//curve => avoid saddles
					var fpDist = curvedLinesOptions.fitPointDist;

					for (var i = 0; i < points.length; i += ps) {

						var front = new Array;
						var back = new Array;
						curX = i;
						curY = i + yPos;

						//add point to front
						front[X] = points[curX] - fpDist;
						front[Y] = points[curY];
						
						//add point to back
						back[X] = points[curX] + fpDist;
						back[Y] = points[curY];
						
						
						//get points (front and back) Y value for saddle test
						var frontPointY = points[curY];
						var backPointY = points[curY];
						if (i >= ps) {
							frontPointY = points[curY - ps];
						}
						if ((i + ps) < points.length) {
							backPointY = points[curY + ps];
						}

						//test for a saddle
						if ((frontPointY <= points[curY] && backPointY <= points[curY]) || //max or partial horizontal
						(frontPointY >= points[curY] && backPointY >= points[curY])) {//min or partial horizontal

							//add curve points
							xdata[j] = front[X];
							ydata[j] = front[Y];
							j++;

							xdata[j] = points[curX];
							ydata[j] = points[curY];
							j++;

							xdata[j] = back[X];
							ydata[j] = back[Y];
							j++;
						} else {//saddle
							//use original point only
							xdata[j] = points[curX];
							ydata[j] = points[curY];
							j++;
						}

					}
				} else {
					//just use the datapoints
					for (var i = 0; i < points.length; i += ps) {
						curX = i;
						curY = i + yPos;

						xdata[j] = points[curX];
						ydata[j] = points[curY];
						j++;
					}
				}

				var n = xdata.length;

				var y2 = new Array();
				var delta = new Array();
				y2[0] = 0;
				y2[n - 1] = 0;
				delta[0] = 0;

				for (var i = 1; i < n - 1; ++i) {
					var d = (xdata[i + 1] - xdata[i - 1]);
					if (d == 0) {
						return null;
					}

					var s = (xdata[i] - xdata[i - 1]) / d;
					var p = s * y2[i - 1] + 2;
					y2[i] = (s - 1) / p;
					delta[i] = (ydata[i + 1] - ydata[i]) / (xdata[i + 1] - xdata[i]) - (ydata[i] - ydata[i - 1]) / (xdata[i] - xdata[i - 1]);
					delta[i] = (6 * delta[i] / (xdata[i + 1] - xdata[i - 1]) - s * delta[i - 1]) / p;
				}

				for (var j = n - 2; j >= 0; --j) {
					y2[j] = y2[j] * y2[j + 1] + delta[j];
				}

				var step = (xdata[n - 1] - xdata[0]) / (num - 1);

				var xnew = new Array;
				var ynew = new Array;
				var result = new Array;

				xnew[0] = xdata[0];
				ynew[0] = ydata[0];

				result.push(xnew[0]);
				result.push(ynew[0]);

				for ( j = 1; j < num; ++j) {
					xnew[j] = xnew[0] + j * step;

					var max = n - 1;
					var min = 0;

					while (max - min > 1) {
						var k = Math.round((max + min) / 2);
						if (xdata[k] > xnew[j]) {
							max = k;
						} else {
							min = k;
						}
					}

					var h = (xdata[max] - xdata[min]);

					if (h == 0) {
						return null;
					}

					var a = (xdata[max] - xnew[j]) / h;
					var b = (xnew[j] - xdata[min]) / h;

					ynew[j] = a * ydata[min] + b * ydata[max] + ((a * a * a - a) * y2[min] + (b * b * b - b) * y2[max]) * (h * h) / 6;
					
					result.push(xnew[j]);
					result.push(ynew[j]);
				}

				return result;
			}

		}//end init

		$.plot.plugins.push({
			init : init,
			options : options,
			name : 'curvedLines',
			version : '0.5'
		});

	})(jQuery);

;// Knockout JavaScript library v2.1.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function(window,document,navigator,undefined){
function m(w){throw w;}var n=void 0,p=!0,s=null,t=!1;function A(w){return function(){return w}};function E(w){function B(b,c,d){d&&c!==a.k.r(b)&&a.k.S(b,c);c!==a.k.r(b)&&a.a.va(b,"change")}var a="undefined"!==typeof w?w:{};a.b=function(b,c){for(var d=b.split("."),f=a,g=0;g<d.length-1;g++)f=f[d[g]];f[d[d.length-1]]=c};a.B=function(a,c,d){a[c]=d};a.version="2.1.0";a.b("version",a.version);a.a=new function(){function b(b,c){if("input"!==a.a.o(b)||!b.type||"click"!=c.toLowerCase())return t;var e=b.type;return"checkbox"==e||"radio"==e}var c=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,d={},f={};d[/Firefox\/2/i.test(navigator.userAgent)?
"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];d.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");for(var g in d){var e=d[g];if(e.length)for(var h=0,j=e.length;h<j;h++)f[e[h]]=g}var k={propertychange:p},i=function(){for(var a=3,b=document.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="<\!--[if gt IE "+ ++a+"]><i></i><![endif]--\>",c[0];);return 4<a?a:n}();return{Ca:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],
v:function(a,b){for(var c=0,e=a.length;c<e;c++)b(a[c])},j:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var c=0,e=a.length;c<e;c++)if(a[c]===b)return c;return-1},ab:function(a,b,c){for(var e=0,f=a.length;e<f;e++)if(b.call(c,a[e]))return a[e];return s},ba:function(b,c){var e=a.a.j(b,c);0<=e&&b.splice(e,1)},za:function(b){for(var b=b||[],c=[],e=0,f=b.length;e<f;e++)0>a.a.j(c,b[e])&&c.push(b[e]);return c},T:function(a,b){for(var a=a||[],c=[],
e=0,f=a.length;e<f;e++)c.push(b(a[e]));return c},aa:function(a,b){for(var a=a||[],c=[],e=0,f=a.length;e<f;e++)b(a[e])&&c.push(a[e]);return c},N:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,e=b.length;c<e;c++)a.push(b[c]);return a},extend:function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a},ga:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Ab:function(b){for(var b=a.a.L(b),c=document.createElement("div"),e=0,f=b.length;e<f;e++)a.F(b[e]),
c.appendChild(b[e]);return c},X:function(b,c){a.a.ga(b);if(c)for(var e=0,f=c.length;e<f;e++)b.appendChild(c[e])},Na:function(b,c){var e=b.nodeType?[b]:b;if(0<e.length){for(var f=e[0],d=f.parentNode,g=0,h=c.length;g<h;g++)d.insertBefore(c[g],f);g=0;for(h=e.length;g<h;g++)a.removeNode(e[g])}},Pa:function(a,b){0<=navigator.userAgent.indexOf("MSIE 6")?a.setAttribute("selected",b):a.selected=b},w:function(a){return(a||"").replace(c,"")},Ib:function(b,c){for(var e=[],f=(b||"").split(c),g=0,d=f.length;g<
d;g++){var h=a.a.w(f[g]);""!==h&&e.push(h)}return e},Hb:function(a,b){a=a||"";return b.length>a.length?t:a.substring(0,b.length)===b},eb:function(a,b){for(var c="return ("+a+")",e=0;e<b;e++)c="with(sc["+e+"]) { "+c+" } ";return new Function("sc",c)},kb:function(a,b){if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a!=s;){if(a==b)return p;a=a.parentNode}return t},fa:function(b){return a.a.kb(b,b.ownerDocument)},o:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},
n:function(a,c,e){var f=i&&k[c];if(!f&&"undefined"!=typeof jQuery){if(b(a,c))var g=e,e=function(a,b){var c=this.checked;b&&(this.checked=b.fb!==p);g.call(this,a);this.checked=c};jQuery(a).bind(c,e)}else!f&&"function"==typeof a.addEventListener?a.addEventListener(c,e,t):"undefined"!=typeof a.attachEvent?a.attachEvent("on"+c,function(b){e.call(a,b)}):m(Error("Browser doesn't support addEventListener or attachEvent"))},va:function(a,c){(!a||!a.nodeType)&&m(Error("element must be a DOM node when calling triggerEvent"));
if("undefined"!=typeof jQuery){var e=[];b(a,c)&&e.push({fb:a.checked});jQuery(a).trigger(c,e)}else"function"==typeof document.createEvent?"function"==typeof a.dispatchEvent?(e=document.createEvent(f[c]||"HTMLEvents"),e.initEvent(c,p,p,window,0,0,0,0,0,t,t,t,t,0,a),a.dispatchEvent(e)):m(Error("The supplied element doesn't support dispatchEvent")):"undefined"!=typeof a.fireEvent?(b(a,c)&&(a.checked=a.checked!==p),a.fireEvent("on"+c)):m(Error("Browser doesn't support triggering events"))},d:function(b){return a.la(b)?
b():b},Ua:function(b,c,e){var f=(b.className||"").split(/\s+/),g=0<=a.a.j(f,c);if(e&&!g)b.className+=(f[0]?" ":"")+c;else if(g&&!e){e="";for(g=0;g<f.length;g++)f[g]!=c&&(e+=f[g]+" ");b.className=a.a.w(e)}},Qa:function(b,c){var e=a.a.d(c);if(e===s||e===n)e="";"innerText"in b?b.innerText=e:b.textContent=e;9<=i&&(b.style.display=b.style.display)},lb:function(a){if(9<=i){var b=a.style.width;a.style.width=0;a.style.width=b}},Eb:function(b,e){for(var b=a.a.d(b),e=a.a.d(e),c=[],f=b;f<=e;f++)c.push(f);return c},
L:function(a){for(var b=[],e=0,c=a.length;e<c;e++)b.push(a[e]);return b},tb:6===i,ub:7===i,ja:i,Da:function(b,e){for(var c=a.a.L(b.getElementsByTagName("input")).concat(a.a.L(b.getElementsByTagName("textarea"))),f="string"==typeof e?function(a){return a.name===e}:function(a){return e.test(a.name)},g=[],d=c.length-1;0<=d;d--)f(c[d])&&g.push(c[d]);return g},Bb:function(b){return"string"==typeof b&&(b=a.a.w(b))?window.JSON&&window.JSON.parse?window.JSON.parse(b):(new Function("return "+b))():s},sa:function(b,
e,c){("undefined"==typeof JSON||"undefined"==typeof JSON.stringify)&&m(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));return JSON.stringify(a.a.d(b),e,c)},Cb:function(b,e,c){var c=c||{},f=c.params||{},g=c.includeFields||this.Ca,d=b;if("object"==typeof b&&"form"===a.a.o(b))for(var d=b.action,h=g.length-1;0<=h;h--)for(var k=a.a.Da(b,g[h]),
j=k.length-1;0<=j;j--)f[k[j].name]=k[j].value;var e=a.a.d(e),i=document.createElement("form");i.style.display="none";i.action=d;i.method="post";for(var z in e)b=document.createElement("input"),b.name=z,b.value=a.a.sa(a.a.d(e[z])),i.appendChild(b);for(z in f)b=document.createElement("input"),b.name=z,b.value=f[z],i.appendChild(b);document.body.appendChild(i);c.submitter?c.submitter(i):i.submit();setTimeout(function(){i.parentNode.removeChild(i)},0)}}};a.b("utils",a.a);a.b("utils.arrayForEach",a.a.v);
a.b("utils.arrayFirst",a.a.ab);a.b("utils.arrayFilter",a.a.aa);a.b("utils.arrayGetDistinctValues",a.a.za);a.b("utils.arrayIndexOf",a.a.j);a.b("utils.arrayMap",a.a.T);a.b("utils.arrayPushAll",a.a.N);a.b("utils.arrayRemoveItem",a.a.ba);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Ca);a.b("utils.getFormFields",a.a.Da);a.b("utils.postJson",a.a.Cb);a.b("utils.parseJson",a.a.Bb);a.b("utils.registerEventHandler",a.a.n);a.b("utils.stringifyJson",a.a.sa);a.b("utils.range",a.a.Eb);
a.b("utils.toggleDomNodeCssClass",a.a.Ua);a.b("utils.triggerEvent",a.a.va);a.b("utils.unwrapObservable",a.a.d);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this,d=Array.prototype.slice.call(arguments),a=d.shift();return function(){return c.apply(a,d.concat(Array.prototype.slice.call(arguments)))}});a.a.f=new function(){var b=0,c="__ko__"+(new Date).getTime(),d={};return{get:function(b,c){var e=a.a.f.getAll(b,t);return e===n?n:e[c]},set:function(b,c,e){e===n&&a.a.f.getAll(b,
t)===n||(a.a.f.getAll(b,p)[c]=e)},getAll:function(a,g){var e=a[c];if(!(e&&"null"!==e)){if(!g)return;e=a[c]="ko"+b++;d[e]={}}return d[e]},clear:function(a){var b=a[c];b&&(delete d[b],a[c]=s)}}};a.b("utils.domData",a.a.f);a.b("utils.domData.clear",a.a.f.clear);a.a.G=new function(){function b(b,c){var f=a.a.f.get(b,d);f===n&&c&&(f=[],a.a.f.set(b,d,f));return f}function c(e){var f=b(e,t);if(f)for(var f=f.slice(0),d=0;d<f.length;d++)f[d](e);a.a.f.clear(e);"function"==typeof jQuery&&"function"==typeof jQuery.cleanData&&
jQuery.cleanData([e]);if(g[e.nodeType])for(f=e.firstChild;e=f;)f=e.nextSibling,8===e.nodeType&&c(e)}var d="__ko_domNodeDisposal__"+(new Date).getTime(),f={1:p,8:p,9:p},g={1:p,9:p};return{wa:function(a,c){"function"!=typeof c&&m(Error("Callback must be a function"));b(a,p).push(c)},Ma:function(c,f){var g=b(c,t);g&&(a.a.ba(g,f),0==g.length&&a.a.f.set(c,d,n))},F:function(b){if(f[b.nodeType]&&(c(b),g[b.nodeType])){var d=[];a.a.N(d,b.getElementsByTagName("*"));for(var b=0,j=d.length;b<j;b++)c(d[b])}},
removeNode:function(b){a.F(b);b.parentNode&&b.parentNode.removeChild(b)}}};a.F=a.a.G.F;a.removeNode=a.a.G.removeNode;a.b("cleanNode",a.F);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.G);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.G.wa);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.G.Ma);(function(){a.a.pa=function(b){var c;if("undefined"!=typeof jQuery){if((c=jQuery.clean([b]))&&c[0]){for(b=c[0];b.parentNode&&11!==b.parentNode.nodeType;)b=b.parentNode;b.parentNode&&
b.parentNode.removeChild(b)}}else{var d=a.a.w(b).toLowerCase();c=document.createElement("div");d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];b="ignored<div>"+d[1]+b+d[2]+"</div>";for("function"==typeof window.innerShiv?c.appendChild(window.innerShiv(b)):c.innerHTML=b;d[0]--;)c=c.lastChild;c=a.a.L(c.lastChild.childNodes)}return c};
a.a.Y=function(b,c){a.a.ga(b);if(c!==s&&c!==n)if("string"!=typeof c&&(c=c.toString()),"undefined"!=typeof jQuery)jQuery(b).html(c);else for(var d=a.a.pa(c),f=0;f<d.length;f++)b.appendChild(d[f])}})();a.b("utils.parseHtmlFragment",a.a.pa);a.b("utils.setHtml",a.a.Y);a.s=function(){function b(){return(4294967296*(1+Math.random())|0).toString(16).substring(1)}function c(b,g){if(b)if(8==b.nodeType){var e=a.s.Ja(b.nodeValue);e!=s&&g.push({jb:b,yb:e})}else if(1==b.nodeType)for(var e=0,d=b.childNodes,j=d.length;e<
j;e++)c(d[e],g)}var d={};return{na:function(a){"function"!=typeof a&&m(Error("You can only pass a function to ko.memoization.memoize()"));var c=b()+b();d[c]=a;return"<\!--[ko_memo:"+c+"]--\>"},Va:function(a,b){var c=d[a];c===n&&m(Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized."));try{return c.apply(s,b||[]),p}finally{delete d[a]}},Wa:function(b,d){var e=[];c(b,e);for(var h=0,j=e.length;h<j;h++){var k=e[h].jb,i=[k];d&&a.a.N(i,d);a.s.Va(e[h].yb,i);k.nodeValue="";k.parentNode&&
k.parentNode.removeChild(k)}},Ja:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:s}}}();a.b("memoization",a.s);a.b("memoization.memoize",a.s.na);a.b("memoization.unmemoize",a.s.Va);a.b("memoization.parseMemoText",a.s.Ja);a.b("memoization.unmemoizeDomNodeAndDescendants",a.s.Wa);a.Ba={throttle:function(b,c){b.throttleEvaluation=c;var d=s;return a.h({read:b,write:function(a){clearTimeout(d);d=setTimeout(function(){b(a)},c)}})},notify:function(b,c){b.equalityComparer="always"==c?A(t):a.m.fn.equalityComparer;
return b}};a.b("extenders",a.Ba);a.Sa=function(b,c,d){this.target=b;this.ca=c;this.ib=d;a.B(this,"dispose",this.A)};a.Sa.prototype.A=function(){this.sb=p;this.ib()};a.R=function(){this.u={};a.a.extend(this,a.R.fn);a.B(this,"subscribe",this.ta);a.B(this,"extend",this.extend);a.B(this,"getSubscriptionsCount",this.ob)};a.R.fn={ta:function(b,c,d){var d=d||"change",b=c?b.bind(c):b,f=new a.Sa(this,b,function(){a.a.ba(this.u[d],f)}.bind(this));this.u[d]||(this.u[d]=[]);this.u[d].push(f);return f},notifySubscribers:function(b,
c){c=c||"change";this.u[c]&&a.a.v(this.u[c].slice(0),function(a){a&&a.sb!==p&&a.ca(b)})},ob:function(){var a=0,c;for(c in this.u)this.u.hasOwnProperty(c)&&(a+=this.u[c].length);return a},extend:function(b){var c=this;if(b)for(var d in b){var f=a.Ba[d];"function"==typeof f&&(c=f(c,b[d]))}return c}};a.Ga=function(a){return"function"==typeof a.ta&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.R);a.b("isSubscribable",a.Ga);a.U=function(){var b=[];return{bb:function(a){b.push({ca:a,Aa:[]})},
end:function(){b.pop()},La:function(c){a.Ga(c)||m(Error("Only subscribable things can act as dependencies"));if(0<b.length){var d=b[b.length-1];0<=a.a.j(d.Aa,c)||(d.Aa.push(c),d.ca(c))}}}}();var G={undefined:p,"boolean":p,number:p,string:p};a.m=function(b){function c(){if(0<arguments.length){if(!c.equalityComparer||!c.equalityComparer(d,arguments[0]))c.I(),d=arguments[0],c.H();return this}a.U.La(c);return d}var d=b;a.R.call(c);c.H=function(){c.notifySubscribers(d)};c.I=function(){c.notifySubscribers(d,
"beforeChange")};a.a.extend(c,a.m.fn);a.B(c,"valueHasMutated",c.H);a.B(c,"valueWillMutate",c.I);return c};a.m.fn={equalityComparer:function(a,c){return a===s||typeof a in G?a===c:t}};var x=a.m.Db="__ko_proto__";a.m.fn[x]=a.m;a.ia=function(b,c){return b===s||b===n||b[x]===n?t:b[x]===c?p:a.ia(b[x],c)};a.la=function(b){return a.ia(b,a.m)};a.Ha=function(b){return"function"==typeof b&&b[x]===a.m||"function"==typeof b&&b[x]===a.h&&b.pb?p:t};a.b("observable",a.m);a.b("isObservable",a.la);a.b("isWriteableObservable",
a.Ha);a.Q=function(b){0==arguments.length&&(b=[]);b!==s&&(b!==n&&!("length"in b))&&m(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));var c=a.m(b);a.a.extend(c,a.Q.fn);return c};a.Q.fn={remove:function(a){for(var c=this(),d=[],f="function"==typeof a?a:function(c){return c===a},g=0;g<c.length;g++){var e=c[g];f(e)&&(0===d.length&&this.I(),d.push(e),c.splice(g,1),g--)}d.length&&this.H();return d},removeAll:function(b){if(b===n){var c=this(),
d=c.slice(0);this.I();c.splice(0,c.length);this.H();return d}return!b?[]:this.remove(function(c){return 0<=a.a.j(b,c)})},destroy:function(a){var c=this(),d="function"==typeof a?a:function(c){return c===a};this.I();for(var f=c.length-1;0<=f;f--)d(c[f])&&(c[f]._destroy=p);this.H()},destroyAll:function(b){return b===n?this.destroy(A(p)):!b?[]:this.destroy(function(c){return 0<=a.a.j(b,c)})},indexOf:function(b){var c=this();return a.a.j(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.I(),
this()[d]=c,this.H())}};a.a.v("pop push reverse shift sort splice unshift".split(" "),function(b){a.Q.fn[b]=function(){var a=this();this.I();a=a[b].apply(a,arguments);this.H();return a}});a.a.v(["slice"],function(b){a.Q.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b("observableArray",a.Q);a.h=function(b,c,d){function f(){a.a.v(v,function(a){a.A()});v=[]}function g(){var a=h.throttleEvaluation;a&&0<=a?(clearTimeout(x),x=setTimeout(e,a)):e()}function e(){if(!l)if(i&&w())u();else{l=
p;try{var b=a.a.T(v,function(a){return a.target});a.U.bb(function(c){var e;0<=(e=a.a.j(b,c))?b[e]=n:v.push(c.ta(g))});for(var e=q.call(c),f=b.length-1;0<=f;f--)b[f]&&v.splice(f,1)[0].A();i=p;h.notifySubscribers(k,"beforeChange");k=e}finally{a.U.end()}h.notifySubscribers(k);l=t}}function h(){if(0<arguments.length)j.apply(h,arguments);else return i||e(),a.U.La(h),k}function j(){"function"===typeof o?o.apply(c,arguments):m(Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters."))}
var k,i=t,l=t,q=b;q&&"object"==typeof q?(d=q,q=d.read):(d=d||{},q||(q=d.read));"function"!=typeof q&&m(Error("Pass a function that returns the value of the ko.computed"));var o=d.write;c||(c=d.owner);var v=[],u=f,r="object"==typeof d.disposeWhenNodeIsRemoved?d.disposeWhenNodeIsRemoved:s,w=d.disposeWhen||A(t);if(r){u=function(){a.a.G.Ma(r,arguments.callee);f()};a.a.G.wa(r,u);var y=w,w=function(){return!a.a.fa(r)||y()}}var x=s;h.nb=function(){return v.length};h.pb="function"===typeof d.write;h.A=function(){u()};
a.R.call(h);a.a.extend(h,a.h.fn);d.deferEvaluation!==p&&e();a.B(h,"dispose",h.A);a.B(h,"getDependenciesCount",h.nb);return h};a.rb=function(b){return a.ia(b,a.h)};w=a.m.Db;a.h[w]=a.m;a.h.fn={};a.h.fn[w]=a.h;a.b("dependentObservable",a.h);a.b("computed",a.h);a.b("isComputed",a.rb);(function(){function b(a,g,e){e=e||new d;a=g(a);if(!("object"==typeof a&&a!==s&&a!==n&&!(a instanceof Date)))return a;var h=a instanceof Array?[]:{};e.save(a,h);c(a,function(c){var d=g(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":h[c]=
d;break;case "object":case "undefined":var i=e.get(d);h[c]=i!==n?i:b(d,g,e)}});return h}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){var b=[],c=[];this.save=function(e,d){var j=a.a.j(b,e);0<=j?c[j]=d:(b.push(e),c.push(d))};this.get=function(e){e=a.a.j(b,e);return 0<=e?c[e]:n}}a.Ta=function(c){0==arguments.length&&m(Error("When calling ko.toJS, pass the object you want to convert."));return b(c,function(b){for(var c=
0;a.la(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,e){b=a.Ta(b);return a.a.sa(b,c,e)}})();a.b("toJS",a.Ta);a.b("toJSON",a.toJSON);(function(){a.k={r:function(b){switch(a.a.o(b)){case "option":return b.__ko__hasDomDataOptionValue__===p?a.a.f.get(b,a.c.options.oa):b.getAttribute("value");case "select":return 0<=b.selectedIndex?a.k.r(b.options[b.selectedIndex]):n;default:return b.value}},S:function(b,c){switch(a.a.o(b)){case "option":switch(typeof c){case "string":a.a.f.set(b,a.c.options.oa,
n);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.f.set(b,a.c.options.oa,c),b.__ko__hasDomDataOptionValue__=p,b.value="number"===typeof c?c:""}break;case "select":for(var d=b.options.length-1;0<=d;d--)if(a.k.r(b.options[d])==c){b.selectedIndex=d;break}break;default:if(c===s||c===n)c="";b.value=c}}}})();a.b("selectExtensions",a.k);a.b("selectExtensions.readValue",a.k.r);a.b("selectExtensions.writeValue",a.k.S);a.g=function(){function b(a,b){for(var d=
s;a!=d;)d=a,a=a.replace(c,function(a,c){return b[c]});return a}var c=/\@ko_token_(\d+)\@/g,d=/^[\_$a-z][\_$a-z0-9]*(\[.*?\])*(\.[\_$a-z][\_$a-z0-9]*(\[.*?\])*)*$/i,f=["true","false"];return{D:[],W:function(c){var e=a.a.w(c);if(3>e.length)return[];"{"===e.charAt(0)&&(e=e.substring(1,e.length-1));for(var c=[],d=s,f,k=0;k<e.length;k++){var i=e.charAt(k);if(d===s)switch(i){case '"':case "'":case "/":d=k,f=i}else if(i==f&&"\\"!==e.charAt(k-1)){i=e.substring(d,k+1);c.push(i);var l="@ko_token_"+(c.length-
1)+"@",e=e.substring(0,d)+l+e.substring(k+1),k=k-(i.length-l.length),d=s}}f=d=s;for(var q=0,o=s,k=0;k<e.length;k++){i=e.charAt(k);if(d===s)switch(i){case "{":d=k;o=i;f="}";break;case "(":d=k;o=i;f=")";break;case "[":d=k,o=i,f="]"}i===o?q++:i===f&&(q--,0===q&&(i=e.substring(d,k+1),c.push(i),l="@ko_token_"+(c.length-1)+"@",e=e.substring(0,d)+l+e.substring(k+1),k-=i.length-l.length,d=s))}f=[];e=e.split(",");d=0;for(k=e.length;d<k;d++)q=e[d],o=q.indexOf(":"),0<o&&o<q.length-1?(i=q.substring(o+1),f.push({key:b(q.substring(0,
o),c),value:b(i,c)})):f.push({unknown:b(q,c)});return f},ka:function(b){for(var c="string"===typeof b?a.g.W(b):b,h=[],b=[],j,k=0;j=c[k];k++)if(0<h.length&&h.push(","),j.key){var i;a:{i=j.key;var l=a.a.w(i);switch(l.length&&l.charAt(0)){case "'":case '"':break a;default:i="'"+l+"'"}}j=j.value;h.push(i);h.push(":");h.push(j);l=a.a.w(j);if(0<=a.a.j(f,a.a.w(l).toLowerCase())?0:l.match(d)!==s)0<b.length&&b.push(", "),b.push(i+" : function(__ko_value) { "+j+" = __ko_value; }")}else j.unknown&&h.push(j.unknown);
c=h.join("");0<b.length&&(c=c+", '_ko_property_writers' : { "+b.join("")+" } ");return c},wb:function(b,c){for(var d=0;d<b.length;d++)if(a.a.w(b[d].key)==c)return p;return t},$:function(b,c,d,f,k){if(!b||!a.Ha(b)){if((b=c()._ko_property_writers)&&b[d])b[d](f)}else(!k||b()!==f)&&b(f)}}}();a.b("jsonExpressionRewriting",a.g);a.b("jsonExpressionRewriting.bindingRewriteValidators",a.g.D);a.b("jsonExpressionRewriting.parseObjectLiteral",a.g.W);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",
a.g.ka);(function(){function b(a){return 8==a.nodeType&&(g?a.text:a.nodeValue).match(e)}function c(a){return 8==a.nodeType&&(g?a.text:a.nodeValue).match(h)}function d(a,e){for(var d=a,f=1,g=[];d=d.nextSibling;){if(c(d)&&(f--,0===f))return g;g.push(d);b(d)&&f++}e||m(Error("Cannot find closing comment tag to match: "+a.nodeValue));return s}function f(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:s}var g="<\!--test--\>"===document.createComment("test").text,e=g?/^<\!--\s*ko\s+(.*\:.*)\s*--\>$/:
/^\s*ko\s+(.*\:.*)\s*$/,h=g?/^<\!--\s*\/ko\s*--\>$/:/^\s*\/ko\s*$/,j={ul:p,ol:p};a.e={C:{},childNodes:function(a){return b(a)?d(a):a.childNodes},ha:function(c){if(b(c))for(var c=a.e.childNodes(c),e=0,d=c.length;e<d;e++)a.removeNode(c[e]);else a.a.ga(c)},X:function(c,e){if(b(c)){a.e.ha(c);for(var d=c.nextSibling,f=0,g=e.length;f<g;f++)d.parentNode.insertBefore(e[f],d)}else a.a.X(c,e)},Ka:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},
Fa:function(a,c,e){b(a)?a.parentNode.insertBefore(c,e.nextSibling):e.nextSibling?a.insertBefore(c,e.nextSibling):a.appendChild(c)},firstChild:function(a){return!b(a)?a.firstChild:!a.nextSibling||c(a.nextSibling)?s:a.nextSibling},nextSibling:function(a){b(a)&&(a=f(a));return a.nextSibling&&c(a.nextSibling)?s:a.nextSibling},Xa:function(a){return(a=b(a))?a[1]:s},Ia:function(e){if(j[a.a.o(e)]){var d=e.firstChild;if(d){do if(1===d.nodeType){var g;g=d.firstChild;var h=s;if(g){do if(h)h.push(g);else if(b(g)){var o=
f(g,p);o?g=o:h=[g]}else c(g)&&(h=[g]);while(g=g.nextSibling)}if(g=h){h=d.nextSibling;for(o=0;o<g.length;o++)h?e.insertBefore(g[o],h):e.appendChild(g[o])}}while(d=d.nextSibling)}}}}})();a.b("virtualElements",a.e);a.b("virtualElements.allowedBindings",a.e.C);a.b("virtualElements.emptyNode",a.e.ha);a.b("virtualElements.insertAfter",a.e.Fa);a.b("virtualElements.prepend",a.e.Ka);a.b("virtualElements.setDomNodeChildren",a.e.X);(function(){a.J=function(){this.cb={}};a.a.extend(a.J.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind")!=
s;case 8:return a.e.Xa(b)!=s;default:return t}},getBindings:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c):s},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.e.Xa(b);default:return s}},parseBindingsString:function(b,c){try{var d=c.$data,d="object"==typeof d&&d!=s?[d,c]:[c],f=d.length,g=this.cb,e=f+"_"+b,h;if(!(h=g[e])){var j=" { "+a.g.ka(b)+" } ";h=g[e]=a.a.eb(j,f)}return h(d)}catch(k){m(Error("Unable to parse bindings.\nMessage: "+
k+";\nBindings value: "+b))}}});a.J.instance=new a.J})();a.b("bindingProvider",a.J);(function(){function b(b,d,e){for(var h=a.e.firstChild(d);d=h;)h=a.e.nextSibling(d),c(b,d,e)}function c(c,g,e){var h=p,j=1===g.nodeType;j&&a.e.Ia(g);if(j&&e||a.J.instance.nodeHasBindings(g))h=d(g,s,c,e).Gb;h&&b(c,g,!j)}function d(b,c,e,d){function j(a){return function(){return l[a]}}function k(){return l}var i=0,l,q;a.h(function(){var o=e&&e instanceof a.z?e:new a.z(a.a.d(e)),v=o.$data;d&&a.Ra(b,o);if(l=("function"==
typeof c?c():c)||a.J.instance.getBindings(b,o)){if(0===i){i=1;for(var u in l){var r=a.c[u];r&&8===b.nodeType&&!a.e.C[u]&&m(Error("The binding '"+u+"' cannot be used with virtual elements"));if(r&&"function"==typeof r.init&&(r=(0,r.init)(b,j(u),k,v,o))&&r.controlsDescendantBindings)q!==n&&m(Error("Multiple bindings ("+q+" and "+u+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")),q=u}i=2}if(2===i)for(u in l)(r=a.c[u])&&"function"==
typeof r.update&&(0,r.update)(b,j(u),k,v,o)}},s,{disposeWhenNodeIsRemoved:b});return{Gb:q===n}}a.c={};a.z=function(b,c){c?(a.a.extend(this,c),this.$parentContext=c,this.$parent=c.$data,this.$parents=(c.$parents||[]).slice(0),this.$parents.unshift(this.$parent)):(this.$parents=[],this.$root=b);this.$data=b};a.z.prototype.createChildContext=function(b){return new a.z(b,this)};a.z.prototype.extend=function(b){var c=a.a.extend(new a.z,this);return a.a.extend(c,b)};a.Ra=function(b,c){if(2==arguments.length)a.a.f.set(b,
"__ko_bindingContext__",c);else return a.a.f.get(b,"__ko_bindingContext__")};a.ya=function(b,c,e){1===b.nodeType&&a.e.Ia(b);return d(b,c,e,p)};a.Ya=function(a,c){(1===c.nodeType||8===c.nodeType)&&b(a,c,p)};a.xa=function(a,b){b&&(1!==b.nodeType&&8!==b.nodeType)&&m(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"));b=b||window.document.body;c(a,b,p)};a.ea=function(b){switch(b.nodeType){case 1:case 8:var c=a.Ra(b);if(c)return c;if(b.parentNode)return a.ea(b.parentNode)}};
a.hb=function(b){return(b=a.ea(b))?b.$data:n};a.b("bindingHandlers",a.c);a.b("applyBindings",a.xa);a.b("applyBindingsToDescendants",a.Ya);a.b("applyBindingsToNode",a.ya);a.b("contextFor",a.ea);a.b("dataFor",a.hb)})();a.a.v(["click"],function(b){a.c[b]={init:function(c,d,f,g){return a.c.event.init.call(this,c,function(){var a={};a[b]=d();return a},f,g)}}});a.c.event={init:function(b,c,d,f){var g=c()||{},e;for(e in g)(function(){var g=e;"string"==typeof g&&a.a.n(b,g,function(b){var e,i=c()[g];if(i){var l=
d();try{var q=a.a.L(arguments);q.unshift(f);e=i.apply(f,q)}finally{e!==p&&(b.preventDefault?b.preventDefault():b.returnValue=t)}l[g+"Bubble"]===t&&(b.cancelBubble=p,b.stopPropagation&&b.stopPropagation())}})})()}};a.c.submit={init:function(b,c,d,f){"function"!=typeof c()&&m(Error("The value for a submit binding must be a function"));a.a.n(b,"submit",function(a){var e,d=c();try{e=d.call(f,b)}finally{e!==p&&(a.preventDefault?a.preventDefault():a.returnValue=t)}})}};a.c.visible={update:function(b,c){var d=
a.a.d(c()),f="none"!=b.style.display;d&&!f?b.style.display="":!d&&f&&(b.style.display="none")}};a.c.enable={update:function(b,c){var d=a.a.d(c());d&&b.disabled?b.removeAttribute("disabled"):!d&&!b.disabled&&(b.disabled=p)}};a.c.disable={update:function(b,c){a.c.enable.update(b,function(){return!a.a.d(c())})}};a.c.value={init:function(b,c,d){function f(){var e=c(),f=a.k.r(b);a.g.$(e,d,"value",f,p)}var g=["change"],e=d().valueUpdate;e&&("string"==typeof e&&(e=[e]),a.a.N(g,e),g=a.a.za(g));if(a.a.ja&&
("input"==b.tagName.toLowerCase()&&"text"==b.type&&"off"!=b.autocomplete&&(!b.form||"off"!=b.form.autocomplete))&&-1==a.a.j(g,"propertychange")){var h=t;a.a.n(b,"propertychange",function(){h=p});a.a.n(b,"blur",function(){if(h){h=t;f()}})}a.a.v(g,function(c){var e=f;if(a.a.Hb(c,"after")){e=function(){setTimeout(f,0)};c=c.substring(5)}a.a.n(b,c,e)})},update:function(b,c){var d="select"===a.a.o(b),f=a.a.d(c()),g=a.k.r(b),e=f!=g;0===f&&(0!==g&&"0"!==g)&&(e=p);e&&(g=function(){a.k.S(b,f)},g(),d&&setTimeout(g,
0));d&&0<b.length&&B(b,f,t)}};a.c.options={update:function(b,c,d){"select"!==a.a.o(b)&&m(Error("options binding applies only to SELECT elements"));for(var f=0==b.length,g=a.a.T(a.a.aa(b.childNodes,function(b){return b.tagName&&"option"===a.a.o(b)&&b.selected}),function(b){return a.k.r(b)||b.innerText||b.textContent}),e=b.scrollTop,h=a.a.d(c());0<b.length;)a.F(b.options[0]),b.remove(0);if(h){d=d();"number"!=typeof h.length&&(h=[h]);if(d.optionsCaption){var j=document.createElement("option");a.a.Y(j,
d.optionsCaption);a.k.S(j,n);b.appendChild(j)}for(var c=0,k=h.length;c<k;c++){var j=document.createElement("option"),i="string"==typeof d.optionsValue?h[c][d.optionsValue]:h[c],i=a.a.d(i);a.k.S(j,i);var l=d.optionsText,i="function"==typeof l?l(h[c]):"string"==typeof l?h[c][l]:i;if(i===s||i===n)i="";a.a.Qa(j,i);b.appendChild(j)}h=b.getElementsByTagName("option");c=j=0;for(k=h.length;c<k;c++)0<=a.a.j(g,a.k.r(h[c]))&&(a.a.Pa(h[c],p),j++);b.scrollTop=e;f&&"value"in d&&B(b,a.a.d(d.value),p);a.a.lb(b)}}};
a.c.options.oa="__ko.optionValueDomData__";a.c.selectedOptions={Ea:function(b){for(var c=[],b=b.childNodes,d=0,f=b.length;d<f;d++){var g=b[d],e=a.a.o(g);"option"==e&&g.selected?c.push(a.k.r(g)):"optgroup"==e&&(g=a.c.selectedOptions.Ea(g),Array.prototype.splice.apply(c,[c.length,0].concat(g)))}return c},init:function(b,c,d){a.a.n(b,"change",function(){var b=c(),g=a.c.selectedOptions.Ea(this);a.g.$(b,d,"value",g)})},update:function(b,c){"select"!=a.a.o(b)&&m(Error("values binding applies only to SELECT elements"));
var d=a.a.d(c());if(d&&"number"==typeof d.length)for(var f=b.childNodes,g=0,e=f.length;g<e;g++){var h=f[g];"option"===a.a.o(h)&&a.a.Pa(h,0<=a.a.j(d,a.k.r(h)))}}};a.c.text={update:function(b,c){a.a.Qa(b,c())}};a.c.html={init:function(){return{controlsDescendantBindings:p}},update:function(b,c){var d=a.a.d(c());a.a.Y(b,d)}};a.c.css={update:function(b,c){var d=a.a.d(c()||{}),f;for(f in d)if("string"==typeof f){var g=a.a.d(d[f]);a.a.Ua(b,f,g)}}};a.c.style={update:function(b,c){var d=a.a.d(c()||{}),f;
for(f in d)if("string"==typeof f){var g=a.a.d(d[f]);b.style[f]=g||""}}};a.c.uniqueName={init:function(b,c){c()&&(b.name="ko_unique_"+ ++a.c.uniqueName.gb,(a.a.tb||a.a.ub)&&b.mergeAttributes(document.createElement("<input name='"+b.name+"'/>"),t))}};a.c.uniqueName.gb=0;a.c.checked={init:function(b,c,d){a.a.n(b,"click",function(){var f;if("checkbox"==b.type)f=b.checked;else if("radio"==b.type&&b.checked)f=b.value;else return;var g=c();"checkbox"==b.type&&a.a.d(g)instanceof Array?(f=a.a.j(a.a.d(g),b.value),
b.checked&&0>f?g.push(b.value):!b.checked&&0<=f&&g.splice(f,1)):a.g.$(g,d,"checked",f,p)});"radio"==b.type&&!b.name&&a.c.uniqueName.init(b,A(p))},update:function(b,c){var d=a.a.d(c());"checkbox"==b.type?b.checked=d instanceof Array?0<=a.a.j(d,b.value):d:"radio"==b.type&&(b.checked=b.value==d)}};var F={"class":"className","for":"htmlFor"};a.c.attr={update:function(b,c){var d=a.a.d(c())||{},f;for(f in d)if("string"==typeof f){var g=a.a.d(d[f]),e=g===t||g===s||g===n;e&&b.removeAttribute(f);8>=a.a.ja&&
f in F?(f=F[f],e?b.removeAttribute(f):b[f]=g):e||b.setAttribute(f,g.toString())}}};a.c.hasfocus={init:function(b,c,d){function f(b){var e=c();a.g.$(e,d,"hasfocus",b,p)}a.a.n(b,"focus",function(){f(p)});a.a.n(b,"focusin",function(){f(p)});a.a.n(b,"blur",function(){f(t)});a.a.n(b,"focusout",function(){f(t)})},update:function(b,c){var d=a.a.d(c());d?b.focus():b.blur();a.a.va(b,d?"focusin":"focusout")}};a.c["with"]={p:function(b){return function(){var c=b();return{"if":c,data:c,templateEngine:a.q.K}}},
init:function(b,c){return a.c.template.init(b,a.c["with"].p(c))},update:function(b,c,d,f,g){return a.c.template.update(b,a.c["with"].p(c),d,f,g)}};a.g.D["with"]=t;a.e.C["with"]=p;a.c["if"]={p:function(b){return function(){return{"if":b(),templateEngine:a.q.K}}},init:function(b,c){return a.c.template.init(b,a.c["if"].p(c))},update:function(b,c,d,f,g){return a.c.template.update(b,a.c["if"].p(c),d,f,g)}};a.g.D["if"]=t;a.e.C["if"]=p;a.c.ifnot={p:function(b){return function(){return{ifnot:b(),templateEngine:a.q.K}}},
init:function(b,c){return a.c.template.init(b,a.c.ifnot.p(c))},update:function(b,c,d,f,g){return a.c.template.update(b,a.c.ifnot.p(c),d,f,g)}};a.g.D.ifnot=t;a.e.C.ifnot=p;a.c.foreach={p:function(b){return function(){var c=a.a.d(b());return!c||"number"==typeof c.length?{foreach:c,templateEngine:a.q.K}:{foreach:c.data,includeDestroyed:c.includeDestroyed,afterAdd:c.afterAdd,beforeRemove:c.beforeRemove,afterRender:c.afterRender,templateEngine:a.q.K}}},init:function(b,c){return a.c.template.init(b,a.c.foreach.p(c))},
update:function(b,c,d,f,g){return a.c.template.update(b,a.c.foreach.p(c),d,f,g)}};a.g.D.foreach=t;a.e.C.foreach=p;a.t=function(){};a.t.prototype.renderTemplateSource=function(){m(Error("Override renderTemplateSource"))};a.t.prototype.createJavaScriptEvaluatorBlock=function(){m(Error("Override createJavaScriptEvaluatorBlock"))};a.t.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){var c=c||document,d=c.getElementById(b);d||m(Error("Cannot find template with ID "+b));return new a.l.i(d)}if(1==
b.nodeType||8==b.nodeType)return new a.l.M(b);m(Error("Unknown template type: "+b))};a.t.prototype.renderTemplate=function(a,c,d,f){return this.renderTemplateSource(this.makeTemplateSource(a,f),c,d)};a.t.prototype.isTemplateRewritten=function(a,c){return this.allowTemplateRewriting===t||!(c&&c!=document)&&this.V&&this.V[a]?p:this.makeTemplateSource(a,c).data("isRewritten")};a.t.prototype.rewriteTemplate=function(a,c,d){var f=this.makeTemplateSource(a,d),c=c(f.text());f.text(c);f.data("isRewritten",
p);!(d&&d!=document)&&"string"==typeof a&&(this.V=this.V||{},this.V[a]=p)};a.b("templateEngine",a.t);a.Z=function(){function b(b,c,e){for(var b=a.g.W(b),d=a.g.D,j=0;j<b.length;j++){var k=b[j].key;if(d.hasOwnProperty(k)){var i=d[k];"function"===typeof i?(k=i(b[j].value))&&m(Error(k)):i||m(Error("This template engine does not support the '"+k+"' binding within its templates"))}}b="ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() {             return (function() { return { "+a.g.ka(b)+
" } })()         })";return e.createJavaScriptEvaluatorBlock(b)+c}var c=/(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi,d=/<\!--\s*ko\b\s*([\s\S]*?)\s*--\>/g;return{mb:function(b,c,e){c.isTemplateRewritten(b,e)||c.rewriteTemplate(b,function(b){return a.Z.zb(b,c)},e)},zb:function(a,g){return a.replace(c,function(a,c,d,f,i,l,q){return b(q,c,g)}).replace(d,function(a,c){return b(c,"<\!-- ko --\>",g)})},Za:function(b){return a.s.na(function(c,
e){c.nextSibling&&a.ya(c.nextSibling,b,e)})}}}();a.b("templateRewriting",a.Z);a.b("templateRewriting.applyMemoizedBindingsToNextSibling",a.Z.Za);(function(){a.l={};a.l.i=function(a){this.i=a};a.l.i.prototype.text=function(){var b=a.a.o(this.i),b="script"===b?"text":"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.i[b];var c=arguments[0];"innerHTML"===b?a.a.Y(this.i,c):this.i[b]=c};a.l.i.prototype.data=function(b){if(1===arguments.length)return a.a.f.get(this.i,"templateSourceData_"+
b);a.a.f.set(this.i,"templateSourceData_"+b,arguments[1])};a.l.M=function(a){this.i=a};a.l.M.prototype=new a.l.i;a.l.M.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.i,"__ko_anon_template__")||{};b.ua===n&&b.da&&(b.ua=b.da.innerHTML);return b.ua}a.a.f.set(this.i,"__ko_anon_template__",{ua:arguments[0]})};a.l.i.prototype.nodes=function(){if(0==arguments.length)return(a.a.f.get(this.i,"__ko_anon_template__")||{}).da;a.a.f.set(this.i,"__ko_anon_template__",{da:arguments[0]})};
a.b("templateSources",a.l);a.b("templateSources.domElement",a.l.i);a.b("templateSources.anonymousTemplate",a.l.M)})();(function(){function b(b,c,d){for(var f,c=a.e.nextSibling(c);b&&(f=b)!==c;)b=a.e.nextSibling(f),(1===f.nodeType||8===f.nodeType)&&d(f)}function c(c,d){if(c.length){var f=c[0],g=c[c.length-1];b(f,g,function(b){a.xa(d,b)});b(f,g,function(b){a.s.Wa(b,[d])})}}function d(a){return a.nodeType?a:0<a.length?a[0]:s}function f(b,f,j,k,i){var i=i||{},l=b&&d(b),l=l&&l.ownerDocument,q=i.templateEngine||
g;a.Z.mb(j,q,l);j=q.renderTemplate(j,k,i,l);("number"!=typeof j.length||0<j.length&&"number"!=typeof j[0].nodeType)&&m(Error("Template engine must return an array of DOM nodes"));l=t;switch(f){case "replaceChildren":a.e.X(b,j);l=p;break;case "replaceNode":a.a.Na(b,j);l=p;break;case "ignoreTargetNode":break;default:m(Error("Unknown renderMode: "+f))}l&&(c(j,k),i.afterRender&&i.afterRender(j,k.$data));return j}var g;a.ra=function(b){b!=n&&!(b instanceof a.t)&&m(Error("templateEngine must inherit from ko.templateEngine"));
g=b};a.qa=function(b,c,j,k,i){j=j||{};(j.templateEngine||g)==n&&m(Error("Set a template engine before calling renderTemplate"));i=i||"replaceChildren";if(k){var l=d(k);return a.h(function(){var g=c&&c instanceof a.z?c:new a.z(a.a.d(c)),o="function"==typeof b?b(g.$data):b,g=f(k,i,o,g,j);"replaceNode"==i&&(k=g,l=d(k))},s,{disposeWhen:function(){return!l||!a.a.fa(l)},disposeWhenNodeIsRemoved:l&&"replaceNode"==i?l.parentNode:l})}return a.s.na(function(d){a.qa(b,c,j,d,"replaceNode")})};a.Fb=function(b,
d,g,k,i){function l(a,b){c(b,o);g.afterRender&&g.afterRender(b,a)}function q(c,d){var h="function"==typeof b?b(c):b;o=i.createChildContext(a.a.d(c));o.$index=d;return f(s,"ignoreTargetNode",h,o,g)}var o;return a.h(function(){var b=a.a.d(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.aa(b,function(b){return g.includeDestroyed||b===n||b===s||!a.a.d(b._destroy)});a.a.Oa(k,b,q,g,l)},s,{disposeWhenNodeIsRemoved:k})};a.c.template={init:function(b,c){var d=a.a.d(c());if("string"!=typeof d&&!d.name&&
(1==b.nodeType||8==b.nodeType))d=1==b.nodeType?b.childNodes:a.e.childNodes(b),d=a.a.Ab(d),(new a.l.M(b)).nodes(d);return{controlsDescendantBindings:p}},update:function(b,c,d,f,g){c=a.a.d(c());f=p;"string"==typeof c?d=c:(d=c.name,"if"in c&&(f=f&&a.a.d(c["if"])),"ifnot"in c&&(f=f&&!a.a.d(c.ifnot)));var l=s;"object"===typeof c&&"foreach"in c?l=a.Fb(d||b,f&&c.foreach||[],c,b,g):f?(g="object"==typeof c&&"data"in c?g.createChildContext(a.a.d(c.data)):g,l=a.qa(d||b,g,c,b)):a.e.ha(b);g=l;(c=a.a.f.get(b,"__ko__templateSubscriptionDomDataKey__"))&&
"function"==typeof c.A&&c.A();a.a.f.set(b,"__ko__templateSubscriptionDomDataKey__",g)}};a.g.D.template=function(b){b=a.g.W(b);return 1==b.length&&b[0].unknown||a.g.wb(b,"name")?s:"This template engine does not support anonymous templates nested within its templates"};a.e.C.template=p})();a.b("setTemplateEngine",a.ra);a.b("renderTemplate",a.qa);(function(){a.a.O=function(b,c,d){if(d===n)return a.a.O(b,c,1)||a.a.O(b,c,10)||a.a.O(b,c,Number.MAX_VALUE);for(var b=b||[],c=c||[],f=b,g=c,e=[],h=0;h<=g.length;h++)e[h]=
[];for(var h=0,j=Math.min(f.length,d);h<=j;h++)e[0][h]=h;h=1;for(j=Math.min(g.length,d);h<=j;h++)e[h][0]=h;for(var j=f.length,k,i=g.length,h=1;h<=j;h++){k=Math.max(1,h-d);for(var l=Math.min(i,h+d);k<=l;k++)e[k][h]=f[h-1]===g[k-1]?e[k-1][h-1]:Math.min(e[k-1][h]===n?Number.MAX_VALUE:e[k-1][h]+1,e[k][h-1]===n?Number.MAX_VALUE:e[k][h-1]+1)}d=b.length;f=c.length;g=[];h=e[f][d];if(h===n)e=s;else{for(;0<d||0<f;){j=e[f][d];i=0<f?e[f-1][d]:h+1;l=0<d?e[f][d-1]:h+1;k=0<f&&0<d?e[f-1][d-1]:h+1;if(i===n||i<j-1)i=
h+1;if(l===n||l<j-1)l=h+1;k<j-1&&(k=h+1);i<=l&&i<k?(g.push({status:"added",value:c[f-1]}),f--):(l<i&&l<k?g.push({status:"deleted",value:b[d-1]}):(g.push({status:"retained",value:b[d-1]}),f--),d--)}e=g.reverse()}return e}})();a.b("utils.compareArrays",a.a.O);(function(){function b(a){if(2<a.length){for(var b=a[0],c=a[a.length-1],e=[b];b!==c;){b=b.nextSibling;if(!b)return;e.push(b)}Array.prototype.splice.apply(a,[0,a.length].concat(e))}}function c(c,f,g,e,h){var j=[],c=a.h(function(){var c=f(g,h)||
[];0<j.length&&(b(j),a.a.Na(j,c),e&&e(g,c));j.splice(0,j.length);a.a.N(j,c)},s,{disposeWhenNodeIsRemoved:c,disposeWhen:function(){return 0==j.length||!a.a.fa(j[0])}});return{xb:j,h:c}}a.a.Oa=function(d,f,g,e,h){for(var f=f||[],e=e||{},j=a.a.f.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===n,k=a.a.f.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],i=a.a.T(k,function(a){return a.$a}),l=a.a.O(i,f),f=[],q=0,o=[],v=0,i=[],u=s,r=0,w=l.length;r<w;r++)switch(l[r].status){case "retained":var y=
k[q];y.qb(v);v=f.push(y);0<y.P.length&&(u=y.P[y.P.length-1]);q++;break;case "deleted":k[q].h.A();b(k[q].P);a.a.v(k[q].P,function(a){o.push({element:a,index:r,value:l[r].value});u=a});q++;break;case "added":for(var y=l[r].value,x=a.m(v),v=c(d,g,y,h,x),C=v.xb,v=f.push({$a:l[r].value,P:C,h:v.h,qb:x}),z=0,B=C.length;z<B;z++){var D=C[z];i.push({element:D,index:r,value:l[r].value});u==s?a.e.Ka(d,D):a.e.Fa(d,D,u);u=D}h&&h(y,C,x)}a.a.v(o,function(b){a.F(b.element)});g=t;if(!j){if(e.afterAdd)for(r=0;r<i.length;r++)e.afterAdd(i[r].element,
i[r].index,i[r].value);if(e.beforeRemove){for(r=0;r<o.length;r++)e.beforeRemove(o[r].element,o[r].index,o[r].value);g=p}}if(!g&&o.length)for(r=0;r<o.length;r++)e=o[r].element,e.parentNode&&e.parentNode.removeChild(e);a.a.f.set(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult",f)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Oa);a.q=function(){this.allowTemplateRewriting=t};a.q.prototype=new a.t;a.q.prototype.renderTemplateSource=function(b){var c=!(9>a.a.ja)&&b.nodes?b.nodes():s;
if(c)return a.a.L(c.cloneNode(p).childNodes);b=b.text();return a.a.pa(b)};a.q.K=new a.q;a.ra(a.q.K);a.b("nativeTemplateEngine",a.q);(function(){a.ma=function(){var a=this.vb=function(){if("undefined"==typeof jQuery||!jQuery.tmpl)return 0;try{if(0<=jQuery.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,f,g){g=g||{};2>a&&m(Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."));var e=b.data("precompiled");
e||(e=b.text()||"",e=jQuery.template(s,"{{ko_with $item.koBindingContext}}"+e+"{{/ko_with}}"),b.data("precompiled",e));b=[f.$data];f=jQuery.extend({koBindingContext:f},g.templateOptions);f=jQuery.tmpl(e,b,f);f.appendTo(document.createElement("div"));jQuery.fragments={};return f};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){document.write("<script type='text/html' id='"+a+"'>"+b+"<\/script>")};0<a&&(jQuery.tmpl.tag.ko_code=
{open:"__.push($1 || '');"},jQuery.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.ma.prototype=new a.t;var b=new a.ma;0<b.vb&&a.ra(b);a.b("jqueryTmplTemplateEngine",a.ma)})()}"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?E(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],E):E(window.ko={});p;
})(window,document,navigator);
;/// Knockout Mapping plugin v2.3.2
/// (c) 2012 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
/// License: MIT (http://www.opensource.org/licenses/mit-license.php)
(function (factory) {
	// Module systems magic dance.

	if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
		// CommonJS or Node: hard-coded dependency on "knockout"
		factory(require("knockout"), exports);
	} else if (typeof define === "function" && define["amd"]) {
		// AMD anonymous module with hard-coded dependency on "knockout"
		define(["knockout", "exports"], factory);
	} else {
		// <script> tag: use the global `ko` object, attaching a `mapping` property
		factory(ko, ko.mapping = {});
	}
}(function (ko, exports) {
	var DEBUG=true;
	var mappingProperty = "__ko_mapping__";
	var realKoDependentObservable = ko.dependentObservable;
	var mappingNesting = 0;
	var dependentObservables;
	var visitedObjects;
	var recognizedRootProperties = ["create", "update", "key", "arrayChanged"];
	var emptyReturn = {};

	var _defaultOptions = {
		include: ["_destroy"],
		ignore: [],
		copy: []
	};
	var defaultOptions = _defaultOptions;

	// Author: KennyTM @ StackOverflow
	function unionArrays (x, y) {
		var obj = {};
		for (var i = x.length - 1; i >= 0; -- i) obj[x[i]] = x[i];
		for (var i = y.length - 1; i >= 0; -- i) obj[y[i]] = y[i];
		var res = [];

		for (var k in obj) {
			res.push(obj[k]);
		};

		return res;
	}

	function extendObject(destination, source) {
		for (var key in source) {
			if (source.hasOwnProperty(key) && source[key]) {
				if (key && destination[key] && !(exports.getType(destination[key]) === "array")) {
					extendObject(destination[key], source[key]);
				} else {
					var bothArrays = exports.getType(destination[key]) === "array" && exports.getType(source[key]) === "array";
					if (bothArrays) {
						destination[key] = unionArrays(destination[key], source[key]);
					} else {
						destination[key] = source[key];
					}
				}
			}
		}
	}

	function merge(obj1, obj2) {
		var merged = {};
		extendObject(merged, obj1);
		extendObject(merged, obj2);

		return merged;
	}

	exports.isMapped = function (viewModel) {
		var unwrapped = ko.utils.unwrapObservable(viewModel);
		return unwrapped && unwrapped[mappingProperty];
	}

	exports.fromJS = function (jsObject /*, inputOptions, target*/ ) {
		if (arguments.length == 0) throw new Error("When calling ko.fromJS, pass the object you want to convert.");

		// When mapping is completed, even with an exception, reset the nesting level
		window.setTimeout(function () {
			mappingNesting = 0;
		}, 0);

		if (!mappingNesting++) {
			dependentObservables = [];
			visitedObjects = new objectLookup();
		}

		var options;
		var target;

		if (arguments.length == 2) {
			if (arguments[1][mappingProperty]) {
				target = arguments[1];
			} else {
				options = arguments[1];
			}
		}
		if (arguments.length == 3) {
			options = arguments[1];
			target = arguments[2];
		}

		if (target) {
			options = merge(options, target[mappingProperty]);
		}
		options = fillOptions(options);

		var result = updateViewModel(target, jsObject, options);
		if (target) {
			result = target;
		}

		// Evaluate any dependent observables that were proxied.
		// Do this in a timeout to defer execution. Basically, any user code that explicitly looks up the DO will perform the first evaluation. Otherwise,
		// it will be done by this code.
		if (!--mappingNesting) {
			window.setTimeout(function () {
				while (dependentObservables.length) {
					var DO = dependentObservables.pop();
					if (DO) DO();
				}
			}, 0);
		}

		// Save any new mapping options in the view model, so that updateFromJS can use them later.
		result[mappingProperty] = merge(result[mappingProperty], options);

		return result;
	};

	exports.fromJSON = function (jsonString /*, options, target*/ ) {
		var parsed = ko.utils.parseJson(jsonString);
		arguments[0] = parsed;
		return exports.fromJS.apply(this, arguments);
	};

	exports.updateFromJS = function (viewModel) {
		throw new Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");
	};

	exports.updateFromJSON = function (viewModel) {
		throw new Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");
	};

	exports.toJS = function (rootObject, options) {
		if (!defaultOptions) exports.resetDefaultOptions();

		if (arguments.length == 0) throw new Error("When calling ko.mapping.toJS, pass the object you want to convert.");
		if (exports.getType(defaultOptions.ignore) !== "array") throw new Error("ko.mapping.defaultOptions().ignore should be an array.");
		if (exports.getType(defaultOptions.include) !== "array") throw new Error("ko.mapping.defaultOptions().include should be an array.");
		if (exports.getType(defaultOptions.copy) !== "array") throw new Error("ko.mapping.defaultOptions().copy should be an array.");

		// Merge in the options used in fromJS
		options = fillOptions(options, rootObject[mappingProperty]);

		// We just unwrap everything at every level in the object graph
		return exports.visitModel(rootObject, function (x) {
			return ko.utils.unwrapObservable(x)
		}, options);
	};

	exports.toJSON = function (rootObject, options) {
		var plainJavaScriptObject = exports.toJS(rootObject, options);
		return ko.utils.stringifyJson(plainJavaScriptObject);
	};

	exports.defaultOptions = function () {
		if (arguments.length > 0) {
			defaultOptions = arguments[0];
		} else {
			return defaultOptions;
		}
	};

	exports.resetDefaultOptions = function () {
		defaultOptions = {
			include: _defaultOptions.include.slice(0),
			ignore: _defaultOptions.ignore.slice(0),
			copy: _defaultOptions.copy.slice(0)
		};
	};

	exports.getType = function(x) {
		if ((x) && (typeof (x) === "object")) {
			if (x.constructor == (new Date).constructor) return "date";
			if (Object.prototype.toString.call(x) === "[object Array]") return "array";
		}
		return typeof x;
	}

	function fillOptions(rawOptions, otherOptions) {
		var options = merge({}, rawOptions);

		// Move recognized root-level properties into a root namespace
		for (var i = recognizedRootProperties.length - 1; i >= 0; i--) {
			var property = recognizedRootProperties[i];
			
			// Carry on, unless this property is present
			if (!options[property]) continue;
			
			// Move the property into the root namespace
			if (!(options[""] instanceof Object)) options[""] = {};
			options[""][property] = options[property];
			delete options[property];
		}

		if (otherOptions) {
			options.ignore = mergeArrays(otherOptions.ignore, options.ignore);
			options.include = mergeArrays(otherOptions.include, options.include);
			options.copy = mergeArrays(otherOptions.copy, options.copy);
		}
		options.ignore = mergeArrays(options.ignore, defaultOptions.ignore);
		options.include = mergeArrays(options.include, defaultOptions.include);
		options.copy = mergeArrays(options.copy, defaultOptions.copy);

		options.mappedProperties = options.mappedProperties || {};
		return options;
	}

	function mergeArrays(a, b) {
		if (exports.getType(a) !== "array") {
			if (exports.getType(a) === "undefined") a = [];
			else a = [a];
		}
		if (exports.getType(b) !== "array") {
			if (exports.getType(b) === "undefined") b = [];
			else b = [b];
		}

		return ko.utils.arrayGetDistinctValues(a.concat(b));
	}

	// When using a 'create' callback, we proxy the dependent observable so that it doesn't immediately evaluate on creation.
	// The reason is that the dependent observables in the user-specified callback may contain references to properties that have not been mapped yet.
	function withProxyDependentObservable(dependentObservables, callback) {
		var localDO = ko.dependentObservable;
		ko.dependentObservable = function (read, owner, options) {
			options = options || {};

			if (read && typeof read == "object") { // mirrors condition in knockout implementation of DO's
				options = read;
			}

			var realDeferEvaluation = options.deferEvaluation;

			var isRemoved = false;

			// We wrap the original dependent observable so that we can remove it from the 'dependentObservables' list we need to evaluate after mapping has
			// completed if the user already evaluated the DO themselves in the meantime.
			var wrap = function (DO) {
				// Temporarily revert ko.dependentObservable, since it is used in ko.isWriteableObservable
				var tmp = ko.dependentObservable;
				ko.dependentObservable = realKoDependentObservable;
				var isWriteable = ko.isWriteableObservable(DO);
				ko.dependentObservable = tmp;

				var wrapped = realKoDependentObservable({
					read: function () {
						if (!isRemoved) {
							ko.utils.arrayRemoveItem(dependentObservables, DO);
							isRemoved = true;
						}
						return DO.apply(DO, arguments);
					},
					write: isWriteable && function (val) {
						return DO(val);
					},
					deferEvaluation: true
				});
				if (DEBUG) wrapped._wrapper = true;
				return wrapped;
			};
			
			options.deferEvaluation = true; // will either set for just options, or both read/options.
			var realDependentObservable = new realKoDependentObservable(read, owner, options);

			if (!realDeferEvaluation) {
				realDependentObservable = wrap(realDependentObservable);
				dependentObservables.push(realDependentObservable);
			}

			return realDependentObservable;
		}
		ko.dependentObservable.fn = realKoDependentObservable.fn;
		ko.computed = ko.dependentObservable;
		var result = callback();
		ko.dependentObservable = localDO;
		ko.computed = ko.dependentObservable;
		return result;
	}

	function updateViewModel(mappedRootObject, rootObject, options, parentName, parent, parentPropertyName, mappedParent) {
		var isArray = exports.getType(ko.utils.unwrapObservable(rootObject)) === "array";

		parentPropertyName = parentPropertyName || "";

		// If this object was already mapped previously, take the options from there and merge them with our existing ones.
		if (exports.isMapped(mappedRootObject)) {
			var previousMapping = ko.utils.unwrapObservable(mappedRootObject)[mappingProperty];
			options = merge(previousMapping, options);
		}

		var callbackParams = {
			data: rootObject,
			parent: mappedParent
		};

		var hasCreateCallback = function () {
			return options[parentName] && options[parentName].create instanceof Function;
		};

		var createCallback = function (data) {
			return withProxyDependentObservable(dependentObservables, function () {
				
				if (ko.utils.unwrapObservable(parent) instanceof Array) {
					return options[parentName].create({
						data: data || callbackParams.data,
						parent: callbackParams.parent,
						skip: emptyReturn
					});
				} else {
					return options[parentName].create({
						data: data || callbackParams.data,
						parent: callbackParams.parent
					});
				}				
			});
		};

		var hasUpdateCallback = function () {
			return options[parentName] && options[parentName].update instanceof Function;
		};

		var updateCallback = function (obj, data) {
			var params = {
				data: data || callbackParams.data,
				parent: callbackParams.parent,
				target: ko.utils.unwrapObservable(obj)
			};

			if (ko.isWriteableObservable(obj)) {
				params.observable = obj;
			}

			return options[parentName].update(params);
		}

		var alreadyMapped = visitedObjects.get(rootObject);
		if (alreadyMapped) {
			return alreadyMapped;
		}

		parentName = parentName || "";

		if (!isArray) {
			// For atomic types, do a direct update on the observable
			if (!canHaveProperties(rootObject)) {
				switch (exports.getType(rootObject)) {
				case "function":
					if (hasUpdateCallback()) {
						if (ko.isWriteableObservable(rootObject)) {
							rootObject(updateCallback(rootObject));
							mappedRootObject = rootObject;
						} else {
							mappedRootObject = updateCallback(rootObject);
						}
					} else {
						mappedRootObject = rootObject;
					}
					break;
				default:
					if (ko.isWriteableObservable(mappedRootObject)) {
						if (hasUpdateCallback()) {
							var valueToWrite = updateCallback(mappedRootObject);
							mappedRootObject(valueToWrite);
							return valueToWrite;
						} else {
							var valueToWrite = ko.utils.unwrapObservable(rootObject);
							mappedRootObject(valueToWrite);
							return valueToWrite;
						}
					} else {
						if (hasCreateCallback()) {
							mappedRootObject = createCallback();
							return mappedRootObject;
						} else {
							mappedRootObject = ko.observable(ko.utils.unwrapObservable(rootObject));
							return mappedRootObject;
						}

						if (hasUpdateCallback()) {
							mappedRootObject(updateCallback(mappedRootObject));
							return mappedRootObject;
						}
					}
				}

			} else {
				mappedRootObject = ko.utils.unwrapObservable(mappedRootObject);
				if (!mappedRootObject) {
					if (hasCreateCallback()) {
						var result = createCallback();

						if (hasUpdateCallback()) {
							result = updateCallback(result);
						}

						return result;
					} else {
						if (hasUpdateCallback()) {
							return updateCallback(result);
						}

						mappedRootObject = {};
					}
				}

				if (hasUpdateCallback()) {
					mappedRootObject = updateCallback(mappedRootObject);
				}

				visitedObjects.save(rootObject, mappedRootObject);
				if (hasUpdateCallback()) return mappedRootObject;

				// For non-atomic types, visit all properties and update recursively
				visitPropertiesOrArrayEntries(rootObject, function (indexer) {
				    var fullPropertyName = parentPropertyName.length ? parentPropertyName + "." + indexer : indexer;

				    if (ko.utils.arrayIndexOf(options.ignore, fullPropertyName) != -1) {
						return;
					}

					if (ko.utils.arrayIndexOf(options.copy, fullPropertyName) != -1) {
						mappedRootObject[indexer] = rootObject[indexer];
						return;
					}
				    
                    // CVS: When a model is composed of other models with mapping options, use the mapping options from the child property
					if (exports.isMapped(mappedRootObject[indexer])) {
					    exports.fromJS(rootObject[indexer], {}, mappedRootObject[indexer]);
					    return;
					}
				    
					// In case we are adding an already mapped property, fill it with the previously mapped property value to prevent recursion.
					// If this is a property that was generated by fromJS, we should use the options specified there
					var prevMappedProperty = visitedObjects.get(rootObject[indexer]);
					var retval = updateViewModel(mappedRootObject[indexer], rootObject[indexer], options, indexer, mappedRootObject, fullPropertyName, mappedRootObject);
					var value = prevMappedProperty || retval;

					if (ko.isWriteableObservable(mappedRootObject[indexer])) {
						mappedRootObject[indexer](ko.utils.unwrapObservable(value));
					} else {
						mappedRootObject[indexer] = value;
					}

					options.mappedProperties[fullPropertyName] = true;
				});
			}
		} else { //mappedRootObject is an array
			var changes = [];

			var hasKeyCallback = false;
			var keyCallback = function (x) {
				return x;
			}
			if (options[parentName] && options[parentName].key) {
				keyCallback = options[parentName].key;
				hasKeyCallback = true;
			}

			if (!ko.isObservable(mappedRootObject)) {
				// When creating the new observable array, also add a bunch of utility functions that take the 'key' of the array items into account.
				mappedRootObject = ko.observableArray([]);

				mappedRootObject.mappedRemove = function (valueOrPredicate) {
					var predicate = typeof valueOrPredicate == "function" ? valueOrPredicate : function (value) {
							return value === keyCallback(valueOrPredicate);
						};
					return mappedRootObject.remove(function (item) {
						return predicate(keyCallback(item));
					});
				}

				mappedRootObject.mappedRemoveAll = function (arrayOfValues) {
					var arrayOfKeys = filterArrayByKey(arrayOfValues, keyCallback);
					return mappedRootObject.remove(function (item) {
						return ko.utils.arrayIndexOf(arrayOfKeys, keyCallback(item)) != -1;
					});
				}

				mappedRootObject.mappedDestroy = function (valueOrPredicate) {
					var predicate = typeof valueOrPredicate == "function" ? valueOrPredicate : function (value) {
							return value === keyCallback(valueOrPredicate);
						};
					return mappedRootObject.destroy(function (item) {
						return predicate(keyCallback(item));
					});
				}

				mappedRootObject.mappedDestroyAll = function (arrayOfValues) {
					var arrayOfKeys = filterArrayByKey(arrayOfValues, keyCallback);
					return mappedRootObject.destroy(function (item) {
						return ko.utils.arrayIndexOf(arrayOfKeys, keyCallback(item)) != -1;
					});
				}

				mappedRootObject.mappedIndexOf = function (item) {
					var keys = filterArrayByKey(mappedRootObject(), keyCallback);
					var key = keyCallback(item);
					return ko.utils.arrayIndexOf(keys, key);
				}

				mappedRootObject.mappedCreate = function (value) {
					if (mappedRootObject.mappedIndexOf(value) !== -1) {
						throw new Error("There already is an object with the key that you specified.");
					}

					var item = hasCreateCallback() ? createCallback(value) : value;
					if (hasUpdateCallback()) {
						var newValue = updateCallback(item, value);
						if (ko.isWriteableObservable(item)) {
							item(newValue);
						} else {
							item = newValue;
						}
					}
					mappedRootObject.push(item);
					return item;
				}
			}

			var currentArrayKeys = filterArrayByKey(ko.utils.unwrapObservable(mappedRootObject), keyCallback).sort();
			var newArrayKeys = filterArrayByKey(rootObject, keyCallback);
			if (hasKeyCallback) newArrayKeys.sort();
			var editScript = ko.utils.compareArrays(currentArrayKeys, newArrayKeys);

			var ignoreIndexOf = {};
			
			var i, j;

			var unwrappedRootObject = ko.utils.unwrapObservable(rootObject);
			var itemsByKey = {};
			var optimizedKeys = true;
			for (i = 0, j = unwrappedRootObject.length; i < j; i++) {
				var key = keyCallback(unwrappedRootObject[i]);
				if (key === undefined || key instanceof Object) {
					optimizedKeys = false;
					break;
				}
				itemsByKey[key] = unwrappedRootObject[i];
			}

			var newContents = [];
			var passedOver = 0;
			for (i = 0, j = editScript.length; i < j; i++) {
				var key = editScript[i];
				var mappedItem;
				var fullPropertyName = parentPropertyName + "[" + i + "]";
				switch (key.status) {
				case "added":
					var item = optimizedKeys ? itemsByKey[key.value] : getItemByKey(ko.utils.unwrapObservable(rootObject), key.value, keyCallback);
					mappedItem = updateViewModel(undefined, item, options, parentName, mappedRootObject, fullPropertyName, parent);
					if(!hasCreateCallback()) {
						mappedItem = ko.utils.unwrapObservable(mappedItem);
					}

					var index = ignorableIndexOf(ko.utils.unwrapObservable(rootObject), item, ignoreIndexOf);
					
					if (mappedItem === emptyReturn) {
						passedOver++;
					} else {
						newContents[index - passedOver] = mappedItem;
					}
						
					ignoreIndexOf[index] = true;
					break;
				case "retained":
					var item = optimizedKeys ? itemsByKey[key.value] : getItemByKey(ko.utils.unwrapObservable(rootObject), key.value, keyCallback);
					mappedItem = getItemByKey(mappedRootObject, key.value, keyCallback);
					updateViewModel(mappedItem, item, options, parentName, mappedRootObject, fullPropertyName, parent);

					var index = ignorableIndexOf(ko.utils.unwrapObservable(rootObject), item, ignoreIndexOf);
					newContents[index] = mappedItem;
					ignoreIndexOf[index] = true;
					break;
				case "deleted":
					mappedItem = getItemByKey(mappedRootObject, key.value, keyCallback);
					break;
				}

				changes.push({
					event: key.status,
					item: mappedItem
				});
			}

			mappedRootObject(newContents);

			if (options[parentName] && options[parentName].arrayChanged) {
				ko.utils.arrayForEach(changes, function (change) {
					options[parentName].arrayChanged(change.event, change.item);
				});
			}
		}

		return mappedRootObject;
	}

	function ignorableIndexOf(array, item, ignoreIndices) {
		for (var i = 0, j = array.length; i < j; i++) {
			if (ignoreIndices[i] === true) continue;
			if (array[i] === item) return i;
		}
		return null;
	}

	function mapKey(item, callback) {
		var mappedItem;
		if (callback) mappedItem = callback(item);
		if (exports.getType(mappedItem) === "undefined") mappedItem = item;

		return ko.utils.unwrapObservable(mappedItem);
	}

	function getItemByKey(array, key, callback) {
		array = ko.utils.unwrapObservable(array);
		for (var i = 0, j = array.length; i < j; i++) {
			var item = array[i];
			if (mapKey(item, callback) === key) return item;
		}

		throw new Error("When calling ko.update*, the key '" + key + "' was not found!");
	}

	function filterArrayByKey(array, callback) {
		return ko.utils.arrayMap(ko.utils.unwrapObservable(array), function (item) {
			if (callback) {
				return mapKey(item, callback);
			} else {
				return item;
			}
		});
	}

	function visitPropertiesOrArrayEntries(rootObject, visitorCallback) {
		if (exports.getType(rootObject) === "array") {
			for (var i = 0; i < rootObject.length; i++)
			visitorCallback(i);
		} else {
			for (var propertyName in rootObject)
			visitorCallback(propertyName);
		}
	};

	function canHaveProperties(object) {
		var type = exports.getType(object);
		return ((type === "object") || (type === "array")) && (object !== null);
	}

	// Based on the parentName, this creates a fully classified name of a property

	function getPropertyName(parentName, parent, indexer) {
		var propertyName = parentName || "";
		if (exports.getType(parent) === "array") {
			if (parentName) {
				propertyName += "[" + indexer + "]";
			}
		} else {
			if (parentName) {
				propertyName += ".";
			}
			propertyName += indexer;
		}
		return propertyName;
	}

	exports.visitModel = function (rootObject, callback, options) {
		options = options || {};
		options.visitedObjects = options.visitedObjects || new objectLookup();

		var mappedRootObject;
		var unwrappedRootObject = ko.utils.unwrapObservable(rootObject);

		if (!canHaveProperties(unwrappedRootObject)) {
			return callback(rootObject, options.parentName);
		} else {
			options = fillOptions(options, unwrappedRootObject[mappingProperty]);

			// Only do a callback, but ignore the results
			callback(rootObject, options.parentName);
			mappedRootObject = exports.getType(unwrappedRootObject) === "array" ? [] : {};
		}

		options.visitedObjects.save(rootObject, mappedRootObject);

		var parentName = options.parentName;
		visitPropertiesOrArrayEntries(unwrappedRootObject, function (indexer) {
			if (options.ignore && ko.utils.arrayIndexOf(options.ignore, indexer) != -1) return;

			var propertyValue = unwrappedRootObject[indexer];
			options.parentName = getPropertyName(parentName, unwrappedRootObject, indexer);

			// If we don't want to explicitly copy the unmapped property...
			if (ko.utils.arrayIndexOf(options.copy, indexer) === -1) {
				// ...find out if it's a property we want to explicitly include
				if (ko.utils.arrayIndexOf(options.include, indexer) === -1) {
					// The mapped properties object contains all the properties that were part of the original object.
					// If a property does not exist, and it is not because it is part of an array (e.g. "myProp[3]"), then it should not be unmapped.
					if (unwrappedRootObject[mappingProperty] && unwrappedRootObject[mappingProperty].mappedProperties && !unwrappedRootObject[mappingProperty].mappedProperties[indexer] && !(exports.getType(unwrappedRootObject) === "array")) {
						return;
					}
				}
			}

			var outputProperty;
			switch (exports.getType(ko.utils.unwrapObservable(propertyValue))) {
			case "object":
			case "array":
			case "undefined":
				var previouslyMappedValue = options.visitedObjects.get(propertyValue);
				mappedRootObject[indexer] = (exports.getType(previouslyMappedValue) !== "undefined") ? previouslyMappedValue : exports.visitModel(propertyValue, callback, options);
				break;
			default:
				mappedRootObject[indexer] = callback(propertyValue, options.parentName);
			}
		});

		return mappedRootObject;
	}

	function simpleObjectLookup() {
		var keys = [];
		var values = [];
		this.save = function (key, value) {
			var existingIndex = ko.utils.arrayIndexOf(keys, key);
			if (existingIndex >= 0) values[existingIndex] = value;
			else {
				keys.push(key);
				values.push(value);
			}
		};
		this.get = function (key) {
			var existingIndex = ko.utils.arrayIndexOf(keys, key);
			var value = (existingIndex >= 0) ? values[existingIndex] : undefined;
			return value;
		};
	};
	
	function objectLookup() {
		var buckets = {};
		
		var findBucket = function(key) {
			var bucketKey;
			try {
				bucketKey = key;//JSON.stringify(key);
			}
			catch (e) {
				bucketKey = "$$$";
			}

			var bucket = buckets[bucketKey];
			if (bucket === undefined) {
				bucket = new simpleObjectLookup();
				buckets[bucketKey] = bucket;
			}
			return bucket;
		};
		
		this.save = function (key, value) {
			findBucket(key).save(key, value);
		};
		this.get = function (key) {
			return findBucket(key).get(key);
		};
	};
}));
;/*
Copyright 2012 Igor Vaynberg
 
Version: 3.3.0 Timestamp: Tue Feb  5 18:33:54 PST 2013

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU 
General Public License version 2 (the "GPL License"). You may choose either license to govern your 
use of this software only upon the condition that you accept all of the terms of either the Apache 
License or the GPL License. 

You may obtain a copy of the Apache License and the GPL License at:

http://www.apache.org/licenses/LICENSE-2.0
http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the Apache License 
or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, 
either express or implied. See the Apache License and the GPL License for the specific language governing 
permissions and limitations under the Apache License and the GPL License.

LICENSE #1: Apache License, Version 2.0

LICENSE #2: GPL v2

************************************************************

LICENSE #1:

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

************************************************************

LICENSE #2:

                    GNU GENERAL PUBLIC LICENSE
                       Version 2, June 1991

 Copyright (C) 1989, 1991 Free Software Foundation, Inc.,
 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

                            Preamble

  The licenses for most software are designed to take away your
freedom to share and change it.  By contrast, the GNU General Public
License is intended to guarantee your freedom to share and change free
software--to make sure the software is free for all its users.  This
General Public License applies to most of the Free Software
Foundation's software and to any other program whose authors commit to
using it.  (Some other Free Software Foundation software is covered by
the GNU Lesser General Public License instead.)  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
this service if you wish), that you receive source code or can get it
if you want it, that you can change the software or use pieces of it
in new free programs; and that you know you can do these things.

  To protect your rights, we need to make restrictions that forbid
anyone to deny you these rights or to ask you to surrender the rights.
These restrictions translate to certain responsibilities for you if you
distribute copies of the software, or if you modify it.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must give the recipients all the rights that
you have.  You must make sure that they, too, receive or can get the
source code.  And you must show them these terms so they know their
rights.

  We protect your rights with two steps: (1) copyright the software, and
(2) offer you this license which gives you legal permission to copy,
distribute and/or modify the software.

  Also, for each author's protection and ours, we want to make certain
that everyone understands that there is no warranty for this free
software.  If the software is modified by someone else and passed on, we
want its recipients to know that what they have is not the original, so
that any problems introduced by others will not reflect on the original
authors' reputations.

  Finally, any free program is threatened constantly by software
patents.  We wish to avoid the danger that redistributors of a free
program will individually obtain patent licenses, in effect making the
program proprietary.  To prevent this, we have made it clear that any
patent must be licensed for everyone's free use or not licensed at all.

  The precise terms and conditions for copying, distribution and
modification follow.

                    GNU GENERAL PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. This License applies to any program or other work which contains
a notice placed by the copyright holder saying it may be distributed
under the terms of this General Public License.  The "Program", below,
refers to any such program or work, and a "work based on the Program"
means either the Program or any derivative work under copyright law:
that is to say, a work containing the Program or a portion of it,
either verbatim or with modifications and/or translated into another
language.  (Hereinafter, translation is included without limitation in
the term "modification".)  Each licensee is addressed as "you".

Activities other than copying, distribution and modification are not
covered by this License; they are outside its scope.  The act of
running the Program is not restricted, and the output from the Program
is covered only if its contents constitute a work based on the
Program (independent of having been made by running the Program).
Whether that is true depends on what the Program does.

  1. You may copy and distribute verbatim copies of the Program's
source code as you receive it, in any medium, provided that you
conspicuously and appropriately publish on each copy an appropriate
copyright notice and disclaimer of warranty; keep intact all the
notices that refer to this License and to the absence of any warranty;
and give any other recipients of the Program a copy of this License
along with the Program.

You may charge a fee for the physical act of transferring a copy, and
you may at your option offer warranty protection in exchange for a fee.

  2. You may modify your copy or copies of the Program or any portion
of it, thus forming a work based on the Program, and copy and
distribute such modifications or work under the terms of Section 1
above, provided that you also meet all of these conditions:

    a) You must cause the modified files to carry prominent notices
    stating that you changed the files and the date of any change.

    b) You must cause any work that you distribute or publish, that in
    whole or in part contains or is derived from the Program or any
    part thereof, to be licensed as a whole at no charge to all third
    parties under the terms of this License.

    c) If the modified program normally reads commands interactively
    when run, you must cause it, when started running for such
    interactive use in the most ordinary way, to print or display an
    announcement including an appropriate copyright notice and a
    notice that there is no warranty (or else, saying that you provide
    a warranty) and that users may redistribute the program under
    these conditions, and telling the user how to view a copy of this
    License.  (Exception: if the Program itself is interactive but
    does not normally print such an announcement, your work based on
    the Program is not required to print an announcement.)

These requirements apply to the modified work as a whole.  If
identifiable sections of that work are not derived from the Program,
and can be reasonably considered independent and separate works in
themselves, then this License, and its terms, do not apply to those
sections when you distribute them as separate works.  But when you
distribute the same sections as part of a whole which is a work based
on the Program, the distribution of the whole must be on the terms of
this License, whose permissions for other licensees extend to the
entire whole, and thus to each and every part regardless of who wrote it.

Thus, it is not the intent of this section to claim rights or contest
your rights to work written entirely by you; rather, the intent is to
exercise the right to control the distribution of derivative or
collective works based on the Program.

In addition, mere aggregation of another work not based on the Program
with the Program (or with a work based on the Program) on a volume of
a storage or distribution medium does not bring the other work under
the scope of this License.

  3. You may copy and distribute the Program (or a work based on it,
under Section 2) in object code or executable form under the terms of
Sections 1 and 2 above provided that you also do one of the following:

    a) Accompany it with the complete corresponding machine-readable
    source code, which must be distributed under the terms of Sections
    1 and 2 above on a medium customarily used for software interchange; or,

    b) Accompany it with a written offer, valid for at least three
    years, to give any third party, for a charge no more than your
    cost of physically performing source distribution, a complete
    machine-readable copy of the corresponding source code, to be
    distributed under the terms of Sections 1 and 2 above on a medium
    customarily used for software interchange; or,

    c) Accompany it with the information you received as to the offer
    to distribute corresponding source code.  (This alternative is
    allowed only for noncommercial distribution and only if you
    received the program in object code or executable form with such
    an offer, in accord with Subsection b above.)

The source code for a work means the preferred form of the work for
making modifications to it.  For an executable work, complete source
code means all the source code for all modules it contains, plus any
associated interface definition files, plus the scripts used to
control compilation and installation of the executable.  However, as a
special exception, the source code distributed need not include
anything that is normally distributed (in either source or binary
form) with the major components (compiler, kernel, and so on) of the
operating system on which the executable runs, unless that component
itself accompanies the executable.

If distribution of executable or object code is made by offering
access to copy from a designated place, then offering equivalent
access to copy the source code from the same place counts as
distribution of the source code, even though third parties are not
compelled to copy the source along with the object code.

  4. You may not copy, modify, sublicense, or distribute the Program
except as expressly provided under this License.  Any attempt
otherwise to copy, modify, sublicense or distribute the Program is
void, and will automatically terminate your rights under this License.
However, parties who have received copies, or rights, from you under
this License will not have their licenses terminated so long as such
parties remain in full compliance.

  5. You are not required to accept this License, since you have not
signed it.  However, nothing else grants you permission to modify or
distribute the Program or its derivative works.  These actions are
prohibited by law if you do not accept this License.  Therefore, by
modifying or distributing the Program (or any work based on the
Program), you indicate your acceptance of this License to do so, and
all its terms and conditions for copying, distributing or modifying
the Program or works based on it.

  6. Each time you redistribute the Program (or any work based on the
Program), the recipient automatically receives a license from the
original licensor to copy, distribute or modify the Program subject to
these terms and conditions.  You may not impose any further
restrictions on the recipients' exercise of the rights granted herein.
You are not responsible for enforcing compliance by third parties to
this License.

  7. If, as a consequence of a court judgment or allegation of patent
infringement or for any other reason (not limited to patent issues),
conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot
distribute so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you
may not distribute the Program at all.  For example, if a patent
license would not permit royalty-free redistribution of the Program by
all those who receive copies directly or indirectly through you, then
the only way you could satisfy both it and this License would be to
refrain entirely from distribution of the Program.

If any portion of this section is held invalid or unenforceable under
any particular circumstance, the balance of the section is intended to
apply and the section as a whole is intended to apply in other
circumstances.

It is not the purpose of this section to induce you to infringe any
patents or other property right claims or to contest validity of any
such claims; this section has the sole purpose of protecting the
integrity of the free software distribution system, which is
implemented by public license practices.  Many people have made
generous contributions to the wide range of software distributed
through that system in reliance on consistent application of that
system; it is up to the author/donor to decide if he or she is willing
to distribute software through any other system and a licensee cannot
impose that choice.

This section is intended to make thoroughly clear what is believed to
be a consequence of the rest of this License.

  8. If the distribution and/or use of the Program is restricted in
certain countries either by patents or by copyrighted interfaces, the
original copyright holder who places the Program under this License
may add an explicit geographical distribution limitation excluding
those countries, so that distribution is permitted only in or among
countries not thus excluded.  In such case, this License incorporates
the limitation as if written in the body of this License.

  9. The Free Software Foundation may publish revised and/or new versions
of the General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

Each version is given a distinguishing version number.  If the Program
specifies a version number of this License which applies to it and "any
later version", you have the option of following the terms and conditions
either of that version or of any later version published by the Free
Software Foundation.  If the Program does not specify a version number of
this License, you may choose any version ever published by the Free Software
Foundation.

  10. If you wish to incorporate parts of the Program into other free
programs whose distribution conditions are different, write to the author
to ask for permission.  For software which is copyrighted by the Free
Software Foundation, write to the Free Software Foundation; we sometimes
make exceptions for this.  Our decision will be guided by the two goals
of preserving the free status of all derivatives of our free software and
of promoting the sharing and reuse of software generally.

                            NO WARRANTY

  11. BECAUSE THE PROGRAM IS LICENSED FREE OF CHARGE, THERE IS NO WARRANTY
FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW.  EXCEPT WHEN
OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES
PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED
OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.  THE ENTIRE RISK AS
TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU.  SHOULD THE
PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING,
REPAIR OR CORRECTION.

  12. IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR
REDISTRIBUTE THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES,
INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING
OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED
TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY
YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER
PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE
POSSIBILITY OF SUCH DAMAGES.

*/
(function(f){"undefined"==typeof f.fn.each2&&f.fn.extend({each2:function(g){for(var j=f([0]),m=-1,v=this.length;++m<v&&(j.context=j[0]=this[m])&&!1!==g.call(j[0],m,j););return this}})})(jQuery);
(function(f,g){function j(a,b){for(var c=0,d=b.length;c<d;c+=1)if(a===b[c])return c;return-1}function m(a,b){return a===b}function v(a,b){var c,d,h;if(null===a||1>a.length)return[];c=a.split(b);d=0;for(h=c.length;d<h;d+=1)c[d]=f.trim(c[d]);return c}function C(a,b,c){c=c||g;var d;return function(){var h=arguments;window.clearTimeout(d);d=window.setTimeout(function(){b.apply(c,h)},a)}}function n(a){a.preventDefault();a.stopPropagation()}function D(a,b,c,d){var h=a.toUpperCase().indexOf(b.toUpperCase());
b=b.length;0>h?c.push(d(a)):(c.push(d(a.substring(0,h))),c.push("<span class='select2-match'>"),c.push(d(a.substring(h,h+b))),c.push("</span>"),c.push(d(a.substring(h+b,a.length))))}function E(a){var b,c=0,d=null,h=a.quietMillis||100;return function(q){window.clearTimeout(b);b=window.setTimeout(function(){var b=c+=1,h=a.data,l=a.url,p=a.transport||f.ajax,e=a.traditional||!1,g=a.type||"GET",h=h?h.call(this,q.term,q.page,q.context):null,l="function"===typeof l?l.call(this,q.term,q.page,q.context):l;
null!==d&&d.abort();d=p.call(null,{url:l,dataType:a.dataType,data:h,type:g,traditional:e,success:function(d){b<c||(d=a.results(d,q.page),q.callback(d))}})},h)}}function F(a){var b=a,c,d=function(a){return""+a.text};f.isArray(b)||(d=b.text,f.isFunction(d)||(c=b.text,d=function(a){return a[c]}),b=b.results);return function(a){var c=a.term,k={results:[]},e;""===c?a.callback({results:b}):(e=function(b,k){var g,x;b=b[0];if(b.children){g={};for(x in b)b.hasOwnProperty(x)&&(g[x]=b[x]);g.children=[];f(b.children).each2(function(a,
b){e(b,g.children)});(g.children.length||a.matcher(c,d(g),b))&&k.push(g)}else a.matcher(c,d(b),b)&&k.push(b)},f(b).each2(function(a,b){e(b,k.results)}),a.callback(k))}}function G(a){var b=f.isFunction(a);return function(c){var d=c.term,h={results:[]};f(b?a():a).each(function(){var a=this.text!==g,b=a?this.text:this;if(""===d||c.matcher(d,b))h.results.push(a?this:{id:this,text:this})});c.callback(h)}}function w(a){if(f.isFunction(a))return!0;if(!a)return!1;throw Error("formatterName must be a function or a falsy value");
}function y(a){return f.isFunction(a)?a():a}function H(a){var b=0;f.each(a,function(a,d){d.children?b+=H(d.children):b++});return b}function L(a,b,c,d){var h=a,f=!1,k,e,l,p;if(!d.createSearchChoice||!d.tokenSeparators||1>d.tokenSeparators.length)return g;for(;;){f=-1;e=0;for(l=d.tokenSeparators.length;e<l&&!(p=d.tokenSeparators[e],f=a.indexOf(p),0<=f);e++);if(0>f)break;k=a.substring(0,f);a=a.substring(f+p.length);if(0<k.length&&(k=d.createSearchChoice(k,b),k!==g&&null!==k&&d.id(k)!==g&&null!==d.id(k))){f=
!1;e=0;for(l=b.length;e<l;e++)if(m(d.id(k),d.id(b[e]))){f=!0;break}f||c(k)}}if(h!==a)return a}function z(a,b){var c=function(){};c.prototype=new a;c.prototype.constructor=c;c.prototype.parent=a.prototype;c.prototype=f.extend(c.prototype,b);return c}if(window.Select2===g){var e,r,A,B,I,u,J;e={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(a){a=a.which?a.which:a;switch(a){case e.LEFT:case e.RIGHT:case e.UP:case e.DOWN:return!0}return!1},
isControl:function(a){switch(a.which){case e.SHIFT:case e.CTRL:case e.ALT:return!0}return a.metaKey?!0:!1},isFunctionKey:function(a){a=a.which?a.which:a;return 112<=a&&123>=a}};r=f(document);var M=1;I=function(){return M++};r.bind("mousemove",function(a){J={x:a.pageX,y:a.pageY}});r=z(Object,{bind:function(a){var b=this;return function(){a.apply(b,arguments)}},init:function(a){var b,c,d;this.opts=a=this.prepareOpts(a);this.id=a.id;a.element.data("select2")!==g&&null!==a.element.data("select2")&&this.destroy();
this.enabled=!0;this.container=this.createContainer();this.containerId="s2id_"+(a.element.attr("id")||"autogen"+I());this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1");this.container.attr("id",this.containerId);var h=!1,q;this.body=function(){!1===h&&(q=a.element.closest("body"),h=!0);return q};d=f("#select2-drop-mask");0==d.length&&(d=f(document.createElement("div")),d.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),d.hide(),d.appendTo(this.body()),
d.bind("mousedown touchstart",function(){var a=f("#select2-drop");0<a.length&&(a=a.data("select2"),a.opts.selectOnBlur&&a.selectHighlighted({noFocus:!0}),a.close())}));a.element.attr("class")!==g&&this.container.addClass(a.element.attr("class").replace(/validate\[[\S ]+] ?/,""));this.container.css(y(a.containerCss));this.container.addClass(y(a.containerCssClass));this.elementTabIndex=this.opts.element.attr("tabIndex");this.opts.element.data("select2",this).addClass("select2-offscreen").bind("focus.select2",
function(){f(this).select2("focus")}).attr("tabIndex","-1").before(this.container);this.container.data("select2",this);this.dropdown=this.container.find(".select2-drop");this.dropdown.addClass(y(a.dropdownCssClass));this.dropdown.data("select2",this);this.results=b=this.container.find(".select2-results");this.search=c=this.container.find("input.select2-input");c.attr("tabIndex",this.elementTabIndex);this.resultsPage=0;this.context=null;this.initContainer();this.initContainerWidth();this.results.bind("mousemove",
function(a){var b=J;(b===g||b.x!==a.pageX||b.y!==a.pageY)&&f(a.target).trigger("mousemove-filtered",a)});this.dropdown.delegate(".select2-results","mousemove-filtered",this.bind(this.highlightUnderEvent));var e=this.results,K=C(80,function(a){e.trigger("scroll-debounced",a)});e.bind("scroll",function(a){0<=j(a.target,e.get())&&K(a)});this.dropdown.delegate(".select2-results","scroll-debounced",this.bind(this.loadMoreIfNeeded));f.fn.mousewheel&&b.mousewheel(function(a,c,d,h){c=b.scrollTop();0<h&&0>=
c-h?(b.scrollTop(0),n(a)):0>h&&b.get(0).scrollHeight-b.scrollTop()+h<=b.height()&&(b.scrollTop(b.get(0).scrollHeight-b.height()),n(a))});c.bind("keydown",function(){f.data(c,"keyup-change-value")===g&&f.data(c,"keyup-change-value",c.val())});c.bind("keyup",function(){var a=f.data(c,"keyup-change-value");a!==g&&c.val()!==a&&(f.removeData(c,"keyup-change-value"),c.trigger("keyup-change"))});c.bind("keyup-change",this.bind(this.updateResults));c.bind("focus",function(){c.addClass("select2-focused");
" "===c.val()&&c.val("")});c.bind("blur",function(){c.removeClass("select2-focused")});this.dropdown.delegate(".select2-results","mouseup",this.bind(function(a){0<f(a.target).closest(".select2-result-selectable").length?(this.highlightUnderEvent(a),this.selectHighlighted(a)):this.focusSearch();n(a)}));this.dropdown.bind("click mouseup mousedown",function(a){a.stopPropagation()});f.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource());(a.element.is(":disabled")||a.element.is("[readonly='readonly']"))&&
this.disable()},destroy:function(){var a=this.opts.element.data("select2");this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null);a!==g&&(a.container.remove(),a.dropdown.remove(),a.opts.element.removeData("select2").unbind(".select2").attr("tabIndex",this.elementTabIndex).show())},prepareOpts:function(a){var b,c,d;b=a.element;"select"===b.get(0).tagName.toLowerCase()&&(this.select=c=a.element);c&&f.each("id multiple ajax query createSearchChoice initSelection data tags".split(" "),
function(){if(this in a)throw Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.");});a=f.extend({},{populateResults:function(b,c,d){var e,l=this.opts.id,p=this;e=function(b,c,h){var q,n,j,m,r,t,s;b=a.sortResults(b,c,d);q=0;for(n=b.length;q<n;q+=1)j=b[q],r=!0===j.disabled,m=!r&&l(j)!==g,t=j.children&&0<j.children.length,s=f("<li></li>"),s.addClass("select2-results-dept-"+h),s.addClass("select2-result"),s.addClass(m?"select2-result-selectable":"select2-result-unselectable"),
r&&s.addClass("select2-disabled"),t&&s.addClass("select2-result-with-children"),s.addClass(p.opts.formatResultCssClass(j)),m=f(document.createElement("div")),m.addClass("select2-result-label"),r=a.formatResult(j,m,d,p.opts.escapeMarkup),r!==g&&m.html(r),s.append(m),t&&(t=f("<ul></ul>"),t.addClass("select2-result-sub"),e(j.children,t,h+1),s.append(t)),s.data("select2-data",j),c.append(s)};e(c,b,0)}},f.fn.select2.defaults,a);"function"!==typeof a.id&&(d=a.id,a.id=function(a){return a[d]});if(f.isArray(a.element.data("select2Tags"))){if("tags"in
a)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+a.element.attr("id");a.tags=a.element.attr("data-select2-tags")}if(c)a.query=this.bind(function(a){var c={results:[],more:!1},d=a.term,e,l,p;p=function(b,c){var f;b.is("option")?a.matcher(d,b.text(),b)&&c.push({id:b.attr("value"),text:b.text(),element:b.get(),css:b.attr("class"),disabled:m(b.attr("disabled"),"disabled")}):b.is("optgroup")&&(f={text:b.attr("label"),children:[],element:b.get(),css:b.attr("class")},
b.children().each2(function(a,b){p(b,f.children)}),0<f.children.length&&c.push(f))};e=b.children();this.getPlaceholder()!==g&&0<e.length&&(l=e[0],""===f(l).text()&&(e=e.not(l)));e.each2(function(a,b){p(b,c.results)});a.callback(c)}),a.id=function(a){return a.id},a.formatResultCssClass=function(a){return a.css};else if(!("query"in a))if("ajax"in a){if((c=a.element.data("ajax-url"))&&0<c.length)a.ajax.url=c;a.query=E(a.ajax)}else"data"in a?a.query=F(a.data):"tags"in a&&(a.query=G(a.tags),a.createSearchChoice===
g&&(a.createSearchChoice=function(a){return{id:a,text:a}}),a.initSelection=function(b,c){var d=[];f(v(b.val(),a.separator)).each(function(){var b=this,c=this,h=a.tags;f.isFunction(h)&&(h=h());f(h).each(function(){if(this.id===b)return c=this.text,!1});d.push({id:b,text:c})});c(d)});if("function"!==typeof a.query)throw"query function not defined for Select2 "+a.element.attr("id");return a},monitorSource:function(){var a=this.opts.element,b;a.bind("change.select2",this.bind(function(){!0!==this.opts.element.data("select2-change-triggered")&&
this.initSelection()}));b=this.bind(function(){var a="disabled"!==this.opts.element.attr("disabled"),b="readonly"===this.opts.element.attr("readonly"),a=a&&!b;this.enabled!==a&&(a?this.enable():this.disable())});a.bind("propertychange.select2 DOMAttrModified.select2",b);"undefined"!==typeof WebKitMutationObserver&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new WebKitMutationObserver(function(a){a.forEach(b)}),this.propertyObserver.observe(a.get(0),
{attributes:!0,subtree:!1}))},triggerChange:function(a){a=a||{};a=f.extend({},a,{type:"change",val:this.val()});this.opts.element.data("select2-change-triggered",!0);this.opts.element.trigger(a);this.opts.element.data("select2-change-triggered",!1);this.opts.element.click();this.opts.blurOnChange&&this.opts.element.blur()},enable:function(){this.enabled||(this.enabled=!0,this.container.removeClass("select2-container-disabled"),this.opts.element.removeAttr("disabled"))},disable:function(){this.enabled&&
(this.close(),this.enabled=!1,this.container.addClass("select2-container-disabled"),this.opts.element.attr("disabled","disabled"))},opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var a=this.container.offset(),b=this.container.outerHeight(!1),c=this.container.outerWidth(!1),d=this.dropdown.outerHeight(!1),h=f(window).scrollLeft()+document.documentElement.clientWidth,e=f(window).scrollTop()+document.documentElement.clientHeight,b=a.top+b,g=a.left,
e=b+d<=e,j=a.top-d>=this.body().scrollTop(),l=this.dropdown.outerWidth(!1),h=g+l<=h,p=this.dropdown.hasClass("select2-drop-above"),m;"static"!==this.body().css("position")&&(m=this.body().offset(),b-=m.top,g-=m.left);p?(p=!0,!j&&e&&(p=!1)):(p=!1,!e&&j&&(p=!0));h||(g=a.left+c-l);p?(b=a.top-d,this.container.addClass("select2-drop-above"),this.dropdown.addClass("select2-drop-above")):(this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above"));a=f.extend({top:b,
left:g,width:c},y(this.opts.dropdownCss));this.dropdown.css(a)},shouldOpen:function(){var a;if(this.opened())return!1;a=f.Event("open");this.opts.element.trigger(a);return!a.isDefaultPrevented()},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above");this.dropdown.removeClass("select2-drop-above")},open:function(){if(!this.shouldOpen())return!1;window.setTimeout(this.bind(this.opening),1);return!0},opening:function(){var a=this.containerId,b="scroll."+a,c="resize."+
a,d="orientationchange."+a;this.clearDropdownAlignmentPreference();" "===this.search.val()&&this.search.val("");this.container.addClass("select2-dropdown-open").addClass("select2-container-active");this.dropdown[0]!==this.body().children().last()[0]&&this.dropdown.detach().appendTo(this.body());this.updateResults(!0);a=f("#select2-drop-mask");this.dropdown.prev()[0]!==a[0]&&this.dropdown.before(a);f("#select2-drop").removeAttr("id");this.dropdown.attr("id","select2-drop");a.css({width:document.documentElement.scrollWidth,
height:document.documentElement.scrollHeight});a.show();this.dropdown.show();this.positionDropdown();this.dropdown.addClass("select2-drop-active");this.ensureHighlightVisible();this.container.parents().add(window).each(function(){f(this).bind(c+" "+b+" "+d,function(){f("#select2-drop-mask").css({width:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight});f("#select2-drop").data("select2").positionDropdown()})});this.focusSearch()},close:function(){if(this.opened()){var a=
this.containerId,b="scroll."+a,c="resize."+a,d="orientationchange."+a;this.container.parents().add(window).each(function(){f(this).unbind(b).unbind(c).unbind(d)});this.clearDropdownAlignmentPreference();f("#select2-drop-mask").hide();this.dropdown.removeAttr("id");this.dropdown.hide();this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");this.results.empty();this.clearSearch();this.opts.element.trigger(f.Event("close"))}},clearSearch:function(){},ensureHighlightVisible:function(){var a=
this.results,b,c,d,h;c=this.highlight();0>c||(0==c?a.scrollTop(0):(b=this.findHighlightableChoices(),d=f(b[c]),h=d.offset().top+d.outerHeight(!0),c===b.length-1&&(b=a.find("li.select2-more-results"),0<b.length&&(h=b.offset().top+b.outerHeight(!0))),b=a.offset().top+a.outerHeight(!0),h>b&&a.scrollTop(a.scrollTop()+(h-b)),h=d.offset().top-a.offset().top,0>h&&"none"!=d.css("display")&&a.scrollTop(a.scrollTop()+h)))},findHighlightableChoices:function(){this.results.find(".select2-result-selectable:not(.select2-selected):not(.select2-disabled)");
return this.results.find(".select2-result-selectable:not(.select2-selected):not(.select2-disabled)")},moveHighlight:function(a){for(var b=this.findHighlightableChoices(),c=this.highlight();-1<c&&c<b.length;){var c=c+a,d=f(b[c]);if(d.hasClass("select2-result-selectable")&&!d.hasClass("select2-disabled")&&!d.hasClass("select2-selected")){this.highlight(c);break}}},highlight:function(a){var b=this.findHighlightableChoices();if(0===arguments.length)return j(b.filter(".select2-highlighted")[0],b.get());
a>=b.length&&(a=b.length-1);0>a&&(a=0);this.results.find(".select2-highlighted").removeClass("select2-highlighted");f(b[a]).addClass("select2-highlighted");this.ensureHighlightVisible()},countSelectableResults:function(){return this.findHighlightableChoices().length},highlightUnderEvent:function(a){a=f(a.target).closest(".select2-result-selectable");if(0<a.length&&!a.is(".select2-highlighted")){var b=this.findHighlightableChoices();this.highlight(b.index(a))}else 0==a.length&&this.results.find(".select2-highlighted").removeClass("select2-highlighted")},
loadMoreIfNeeded:function(){var a=this.results,b=a.find("li.select2-more-results"),c,d=this.resultsPage+1,f=this,e=this.search.val(),g=this.context;0!==b.length&&(c=b.offset().top-a.offset().top-a.height(),c<=this.opts.loadMorePadding&&(b.addClass("select2-active"),this.opts.query({term:e,page:d,context:g,matcher:this.opts.matcher,callback:this.bind(function(c){f.opened()&&(f.opts.populateResults.call(this,a,c.results,{term:e,page:d,context:g}),!0===c.more?(b.detach().appendTo(a).text(f.opts.formatLoadMore(d+
1)),window.setTimeout(function(){f.loadMoreIfNeeded()},10)):b.remove(),f.positionDropdown(),f.resultsPage=d)})})))},tokenize:function(){},updateResults:function(a){function b(){h.scrollTop(0);d.removeClass("select2-active");j.positionDropdown()}function c(a){h.html(a);b()}var d=this.search,h=this.results,e=this.opts,k,j=this;if(!(!0!==a&&(!1===this.showSearchInput||!this.opened()))){d.addClass("select2-active");var l=f.isFunction(e.maximumSelectionSize)?e.maximumSelectionSize():e.maximumSelectionSize;
if(1<=l&&(k=this.data(),f.isArray(k)&&k.length>=l&&w(e.formatSelectionTooBig,"formatSelectionTooBig"))){c("<li class='select2-selection-limit'>"+e.formatSelectionTooBig(l)+"</li>");return}d.val().length<e.minimumInputLength?w(e.formatInputTooShort,"formatInputTooShort")?c("<li class='select2-no-results'>"+e.formatInputTooShort(d.val(),e.minimumInputLength)+"</li>"):c(""):(e.formatSearching()&&!0===a&&c("<li class='select2-searching'>"+e.formatSearching()+"</li>"),e.maximumInputLength&&d.val().length>
e.maximumInputLength?w(e.formatInputTooLong,"formatInputTooLong")?c("<li class='select2-no-results'>"+e.formatInputTooLong(d.val(),e.maximumInputLength)+"</li>"):c(""):(k=this.tokenize(),k!=g&&null!=k&&d.val(k),this.resultsPage=1,e.query({term:d.val(),page:this.resultsPage,context:null,matcher:e.matcher,callback:this.bind(function(k){var l;this.opened()&&(this.context=k.context===g?null:k.context,this.opts.createSearchChoice&&""!==d.val()&&(l=this.opts.createSearchChoice.call(null,d.val(),k.results),
l!==g&&null!==l&&j.id(l)!==g&&null!==j.id(l)&&0===f(k.results).filter(function(){return m(j.id(this),j.id(l))}).length&&k.results.unshift(l)),0===k.results.length&&w(e.formatNoMatches,"formatNoMatches")?c("<li class='select2-no-results'>"+e.formatNoMatches(d.val())+"</li>"):(h.empty(),j.opts.populateResults.call(this,h,k.results,{term:d.val(),page:this.resultsPage,context:null}),!0===k.more&&w(e.formatLoadMore,"formatLoadMore")&&(h.append("<li class='select2-more-results'>"+j.opts.escapeMarkup(e.formatLoadMore(this.resultsPage))+
"</li>"),window.setTimeout(function(){j.loadMoreIfNeeded()},10)),this.postprocessResults(k,a),b()))})})))}},cancel:function(){this.close()},blur:function(){this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0});this.close();this.container.removeClass("select2-container-active");this.dropdown.removeClass("select2-drop-active");this.search[0]===document.activeElement&&this.search.blur();this.clearSearch();this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
this.opts.element.triggerHandler("blur")},focusSearch:function(){this.search.show();this.search.focus();window.setTimeout(this.bind(function(){this.search.show();this.search.focus();this.search.val(this.search.val())}),10)},selectHighlighted:function(a){var b=this.highlight(),c=this.results.find(".select2-highlighted").closest(".select2-result").data("select2-data");c&&(this.highlight(b),this.onSelect(c,a))},getPlaceholder:function(){return this.select&&""!==this.select.find("option").first().text()?
g:this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder},initContainerWidth:function(){var a=function(){var a,c,d,e;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px";if("copy"===this.opts.width||"resolve"===this.opts.width){a=this.opts.element.attr("style");if(a!==g){a=a.split(";");d=0;for(e=a.length;d<
e;d+=1)if(c=a[d].replace(/\s/g,"").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/),null!==c&&1<=c.length)return c[1]}return"resolve"===this.opts.width?(a=this.opts.element.css("width"),0<a.indexOf("%")?a:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px"):null}return f.isFunction(this.opts.width)?this.opts.width():this.opts.width}.call(this);null!==a&&this.container.attr("style","width: "+a)}});A=z(r,{createContainer:function(){return f(document.createElement("div")).attr({"class":"select2-container"}).html("    <a href='javascript:void(0)' onclick='return false;' class='select2-choice'>   <span></span><abbr class='select2-search-choice-close' style='display:none;'></abbr>   <div><b></b></div></a>    <div class='select2-drop select2-offscreen'>   <div class='select2-search'>       <input type='text' autocomplete='off' class='select2-input'/>   </div>   <ul class='select2-results'>   </ul></div>")},
disable:function(){this.enabled&&(this.parent.disable.apply(this,arguments),this.selection.attr("tabIndex","-1"),this.search.attr("tabIndex","-1"))},enable:function(){this.enabled||(this.parent.enable.apply(this,arguments),this.elementTabIndex?this.selection.attr("tabIndex",this.elementTabIndex):this.selection.removeAttr("tabIndex"),this.search.removeAttr("tabIndex"))},opening:function(){this.search.show();this.parent.opening.apply(this,arguments);this.dropdown.removeClass("select2-offscreen")},close:function(){this.opened()&&
(this.parent.close.apply(this,arguments),this.dropdown.removeAttr("style").addClass("select2-offscreen").insertAfter(this.selection).show())},focus:function(){this.close();this.selection.focus();this.opts.element.triggerHandler("focus")},isFocused:function(){return this.selection[0]===document.activeElement},cancel:function(){this.parent.cancel.apply(this,arguments);this.selection.focus()},initContainer:function(){var a,b=this.dropdown;this.selection=a=this.container.find(".select2-choice");this.search.bind("keydown",
this.bind(function(a){if(this.enabled)if(a.which===e.PAGE_UP||a.which===e.PAGE_DOWN)n(a);else if(this.opened())switch(a.which){case e.UP:case e.DOWN:this.moveHighlight(a.which===e.UP?-1:1);n(a);break;case e.TAB:case e.ENTER:this.selectHighlighted();n(a);break;case e.ESC:this.cancel(a),n(a)}else a.which===e.TAB||e.isControl(a)||e.isFunctionKey(a)||a.which===e.ESC||!1===this.opts.openOnEnter&&a.which===e.ENTER||this.open()}));this.search.bind("focus",this.bind(function(){this.selection.attr("tabIndex",
"-1")}));this.search.bind("blur",this.bind(function(){this.opened()||this.container.removeClass("select2-container-active");window.setTimeout(this.bind(function(){var a=this.elementTabIndex||0;a?this.selection.attr("tabIndex",a):this.selection.removeAttr("tabIndex")}),10)}));a.delegate("abbr","mousedown",this.bind(function(a){this.enabled&&(this.clear(),a.preventDefault(),a.stopImmediatePropagation(),this.close(),this.triggerChange(),this.selection.focus())}));a.bind("mousedown",this.bind(function(){this.opened()?
(this.close(),this.selection.focus()):this.enabled&&this.open()}));b.bind("mousedown",this.bind(function(){this.search.focus()}));a.bind("focus",this.bind(function(){this.enabled&&(this.container.addClass("select2-container-active"),this.search.attr("tabIndex","-1"))}));a.bind("blur",this.bind(function(){this.opened()||this.container.removeClass("select2-container-active");window.setTimeout(this.bind(function(){this.search.attr("tabIndex",this.elementTabIndex||0)}),10)}));a.bind("keydown",this.bind(function(a){if(this.enabled)if(a.which==
e.DOWN||a.which==e.UP||a.which==e.ENTER&&this.opts.openOnEnter)this.open(),n(a);else if(a.which==e.DELETE||a.which==e.BACKSPACE)this.opts.allowClear&&this.clear(),n(a)}));a.bind("keypress",this.bind(function(a){a.which==e.DELETE||(a.which==e.BACKSPACE||a.which==e.TAB||a.which==e.ENTER||0==a.which)||(a=String.fromCharCode(a.which),this.search.val(a),this.open())}));this.setPlaceholder();this.search.bind("focus",this.bind(function(){this.container.addClass("select2-container-active")}))},clear:function(){this.opts.element.val("");
this.selection.find("span").empty();this.selection.removeData("select2-data");this.setPlaceholder()},initSelection:function(){if(""===this.opts.element.val()&&""===this.opts.element.text())this.close(),this.setPlaceholder();else{var a=this;this.opts.initSelection.call(null,this.opts.element,function(b){b!==g&&null!==b&&(a.updateSelection(b),a.close(),a.setPlaceholder())})}},prepareOpts:function(){var a=this.parent.prepareOpts.apply(this,arguments);"select"===a.element.get(0).tagName.toLowerCase()?
a.initSelection=function(a,c){var d=a.find(":selected");f.isFunction(c)&&c({id:d.attr("value"),text:d.text(),element:d})}:"data"in a&&(a.initSelection=a.initSelection||function(b,c){var d=b.val();a.query({matcher:function(b,c,f){return m(d,a.id(f))},callback:!f.isFunction(c)?f.noop:function(a){c(a.results.length?a.results[0]:null)}})});return a},setPlaceholder:function(){var a=this.getPlaceholder();""===this.opts.element.val()&&a!==g&&!(this.select&&""!==this.select.find("option:first").text())&&
(this.selection.find("span").html(this.opts.escapeMarkup(a)),this.selection.addClass("select2-default"),this.selection.find("abbr").hide())},postprocessResults:function(a,b){var c=0,d=this,e=!0;this.findHighlightableChoices().each2(function(a,b){if(m(d.id(b.data("select2-data")),d.opts.element.val()))return c=a,!1});this.highlight(c);!0===b&&(e=this.showSearchInput=H(a.results)>=this.opts.minimumResultsForSearch,this.dropdown.find(".select2-search")[e?"removeClass":"addClass"]("select2-search-hidden"),
f(this.dropdown,this.container)[e?"addClass":"removeClass"]("select2-with-searchbox"))},onSelect:function(a,b){var c=this.opts.element.val();this.opts.element.val(this.id(a));this.updateSelection(a);this.close();(!b||!b.noFocus)&&this.selection.focus();m(c,this.id(a))||this.triggerChange()},updateSelection:function(a){var b=this.selection.find("span");this.selection.data("select2-data",a);b.empty();a=this.opts.formatSelection(a,b);a!==g&&b.append(this.opts.escapeMarkup(a));this.selection.removeClass("select2-default");
this.opts.allowClear&&this.getPlaceholder()!==g&&this.selection.find("abbr").show()},val:function(){var a,b=!1,c=null,d=this;if(0===arguments.length)return this.opts.element.val();a=arguments[0];1<arguments.length&&(b=arguments[1]);if(this.select)this.select.val(a).find(":selected").each2(function(a,b){c={id:b.attr("value"),text:b.text()};return!1}),this.updateSelection(c),this.setPlaceholder(),b&&this.triggerChange();else{if(this.opts.initSelection===g)throw Error("cannot call val() if initSelection() is not defined");
!a&&0!==a?(this.clear(),b&&this.triggerChange()):(this.opts.element.val(a),this.opts.initSelection(this.opts.element,function(a){d.opts.element.val(!a?"":d.id(a));d.updateSelection(a);d.setPlaceholder();d.triggerChange()}))}},clearSearch:function(){this.search.val("")},data:function(a){var b;if(0===arguments.length)return b=this.selection.data("select2-data"),b==g&&(b=null),b;!a||""===a?this.clear():(this.opts.element.val(!a?"":this.id(a)),this.updateSelection(a))}});B=z(r,{createContainer:function(){return f(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html("    <ul class='select2-choices'>  <li class='select2-search-field'>    <input type='text' autocomplete='off' class='select2-input'>  </li></ul><div class='select2-drop select2-drop-multi' style='display:none;'>   <ul class='select2-results'>   </ul></div>")},
prepareOpts:function(){var a=this.parent.prepareOpts.apply(this,arguments);"select"===a.element.get(0).tagName.toLowerCase()?a.initSelection=function(a,c){var d=[];a.find(":selected").each2(function(a,b){d.push({id:b.attr("value"),text:b.text(),element:b})});f.isFunction(c)&&c(d)}:"data"in a&&(a.initSelection=a.initSelection||function(b,c){var d=v(b.val(),a.separator);a.query({matcher:function(b,c,e){return f.grep(d,function(b){return m(b,a.id(e))}).length},callback:!f.isFunction(c)?f.noop:function(a){c(a.results)}})});
return a},initContainer:function(){var a;this.searchContainer=this.container.find(".select2-search-field");this.selection=a=this.container.find(".select2-choices");this.search.bind("keydown",this.bind(function(b){if(this.enabled){if(b.which===e.BACKSPACE&&""===this.search.val()){this.close();var c;c=a.find(".select2-search-choice-focus");if(0<c.length){this.unselect(c.first());this.search.width(10);n(b);return}c=a.find(".select2-search-choice:not(.select2-locked)");0<c.length&&c.last().addClass("select2-search-choice-focus")}else a.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
if(this.opened())switch(b.which){case e.UP:case e.DOWN:this.moveHighlight(b.which===e.UP?-1:1);n(b);return;case e.ENTER:case e.TAB:this.selectHighlighted();n(b);return;case e.ESC:this.cancel(b);n(b);return}if(!(b.which===e.TAB||e.isControl(b)||e.isFunctionKey(b)||b.which===e.BACKSPACE||b.which===e.ESC)&&!(!1===this.opts.openOnEnter&&b.which===e.ENTER))this.open(),(b.which===e.PAGE_UP||b.which===e.PAGE_DOWN)&&n(b)}}));this.search.bind("keyup",this.bind(this.resizeSearch));this.search.bind("blur",this.bind(function(a){this.container.removeClass("select2-container-active");
this.search.removeClass("select2-focused");this.opened()||this.clearSearch();a.stopImmediatePropagation()}));this.container.delegate(".select2-choices","mousedown",this.bind(function(a){this.enabled&&!(0<f(a.target).closest(".select2-search-choice").length)&&(this.clearPlaceholder(),this.open(),this.focusSearch(),a.preventDefault())}));this.container.delegate(".select2-choices","focus",this.bind(function(){this.enabled&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),
this.clearPlaceholder())}));this.clearSearch()},enable:function(){this.enabled||(this.parent.enable.apply(this,arguments),this.search.removeAttr("disabled"))},disable:function(){this.enabled&&(this.parent.disable.apply(this,arguments),this.search.attr("disabled",!0))},initSelection:function(){""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch());if(this.select||""!==this.opts.element.val()){var a=this;this.opts.initSelection.call(null,
this.opts.element,function(b){b!==g&&null!==b&&(a.updateSelection(b),a.close(),a.clearSearch())})}},clearSearch:function(){var a=this.getPlaceholder();a!==g&&0===this.getVal().length&&!1===this.search.hasClass("select2-focused")?(this.search.val(a).addClass("select2-default"),this.resizeSearch()):this.search.val(" ").width(10)},clearPlaceholder:function(){this.search.hasClass("select2-default")?this.search.val("").removeClass("select2-default"):" "===this.search.val()&&this.search.val("")},opening:function(){this.parent.opening.apply(this,
arguments);this.clearPlaceholder();this.resizeSearch();this.focusSearch()},close:function(){this.opened()&&this.parent.close.apply(this,arguments)},focus:function(){this.close();this.search.focus();this.opts.element.triggerHandler("focus")},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(a){var b=[],c=[],d=this;f(a).each(function(){0>j(d.id(this),b)&&(b.push(d.id(this)),c.push(this))});a=c;this.selection.find(".select2-search-choice").remove();f(a).each(function(){d.addSelectedChoice(this)});
d.postprocessResults()},tokenize:function(){var a=this.search.val(),a=this.opts.tokenizer(a,this.data(),this.bind(this.onSelect),this.opts);null!=a&&a!=g&&(this.search.val(a),0<a.length&&this.open())},onSelect:function(a,b){this.addSelectedChoice(a);(this.select||!this.opts.closeOnSelect)&&this.postprocessResults();this.opts.closeOnSelect?(this.close(),this.search.width(10)):0<this.countSelectableResults()?(this.search.width(10),this.resizeSearch(),this.positionDropdown()):this.close();this.triggerChange({added:a});
(!b||!b.noFocus)&&this.focusSearch()},cancel:function(){this.close();this.focusSearch()},addSelectedChoice:function(a){var b=!a.locked,c=f("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),d=f("<li class='select2-search-choice select2-locked'><div></div></li>"),c=b?c:d,d=this.id(a),e=this.getVal(),j;j=this.opts.formatSelection(a,c.find("div"));j!=g&&c.find("div").replaceWith("<div>"+this.opts.escapeMarkup(j)+
"</div>");b&&c.find(".select2-search-choice-close").bind("mousedown",n).bind("click dblclick",this.bind(function(a){this.enabled&&(f(a.target).closest(".select2-search-choice").fadeOut("fast",this.bind(function(){this.unselect(f(a.target));this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");this.close();this.focusSearch()})).dequeue(),n(a))})).bind("focus",this.bind(function(){this.enabled&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))}));
c.data("select2-data",a);c.insertBefore(this.searchContainer);e.push(d);this.setVal(e)},unselect:function(a){var b=this.getVal(),c,d;a=a.closest(".select2-search-choice");if(0===a.length)throw"Invalid argument: "+a+". Must be .select2-search-choice";if(c=a.data("select2-data"))d=j(this.id(c),b),0<=d&&(b.splice(d,1),this.setVal(b),this.select&&this.postprocessResults()),a.remove(),this.triggerChange({removed:c})},postprocessResults:function(){var a=this.getVal(),b=this.results.find(".select2-result"),
c=this.results.find(".select2-result-with-children"),d=this;b.each2(function(b,c){var e=d.id(c.data("select2-data"));0<=j(e,a)&&(c.addClass("select2-selected"),c.find(".select2-result-selectable").addClass("select2-selected"))});c.each2(function(a,b){!b.is(".select2-result-selectable")&&0===b.find(".select2-result-selectable:not(.select2-selected)").length&&b.addClass("select2-selected")});-1==this.highlight()&&d.highlight(0)},resizeSearch:function(){var a,b,c,d,e=this.search.outerWidth(!1)-this.search.width();
a=this.search;u||(c=a[0].currentStyle||window.getComputedStyle(a[0],null),u=f(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:c.fontSize,fontFamily:c.fontFamily,fontStyle:c.fontStyle,fontWeight:c.fontWeight,letterSpacing:c.letterSpacing,textTransform:c.textTransform,whiteSpace:"nowrap"}),u.attr("class","select2-sizer"),f("body").append(u));u.text(a.val());a=u.width()+10;b=this.search.offset().left;c=this.selection.width();d=this.selection.offset().left;
b=c-(b-d)-e;b<a&&(b=c-e);40>b&&(b=c-e);0>=b&&(b=a);this.search.width(b)},getVal:function(){var a;if(this.select)return a=this.select.val(),null===a?[]:a;a=this.opts.element.val();return v(a,this.opts.separator)},setVal:function(a){var b;this.select?this.select.val(a):(b=[],f(a).each(function(){0>j(this,b)&&b.push(this)}),this.opts.element.val(0===b.length?"":b.join(this.opts.separator)))},val:function(){var a,b=!1,c=[],d=this;if(0===arguments.length)return this.getVal();a=arguments[0];1<arguments.length&&
(b=arguments[1]);if(!a&&0!==a)this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),b&&this.triggerChange();else{this.setVal(a);if(this.select)this.select.find(":selected").each(function(){c.push({id:f(this).attr("value"),text:f(this).text()})}),this.updateSelection(c),b&&this.triggerChange();else{if(this.opts.initSelection===g)throw Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(a){var c=f(a).map(d.id);d.setVal(c);
d.updateSelection(a);d.clearSearch();b&&d.triggerChange()})}this.clearSearch()}},onSortStart:function(){if(this.select)throw Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0);this.searchContainer.hide()},onSortEnd:function(){var a=[],b=this;this.searchContainer.show();this.searchContainer.appendTo(this.searchContainer.parent());this.resizeSearch();this.selection.find(".select2-search-choice").each(function(){a.push(b.opts.id(f(this).data("select2-data")))});
this.setVal(a);this.triggerChange()},data:function(a){var b=this,c;if(0===arguments.length)return this.selection.find(".select2-search-choice").map(function(){return f(this).data("select2-data")}).get();a||(a=[]);c=f.map(a,function(a){return b.opts.id(a)});this.setVal(c);this.updateSelection(a);this.clearSearch()}});f.fn.select2=function(){var a=Array.prototype.slice.call(arguments,0),b,c,d,e,m="val destroy opened open close focus isFocused container onSortStart onSortEnd enable disable positionDropdown data".split(" ");
this.each(function(){if(0===a.length||"object"===typeof a[0])b=0===a.length?{}:f.extend({},a[0]),b.element=f(this),"select"===b.element.get(0).tagName.toLowerCase()?e=b.element.attr("multiple"):(e=b.multiple||!1,"tags"in b&&(b.multiple=e=!0)),c=e?new B:new A,c.init(b);else if("string"===typeof a[0]){if(0>j(a[0],m))throw"Unknown method: "+a[0];d=g;c=f(this).data("select2");if(c!==g&&(d="container"===a[0]?c.container:c[a[0]].apply(c,a.slice(1)),d!==g))return!1}else throw"Invalid arguments to select2 plugin: "+
a;});return d===g?this:d};f.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(a,b,c,d){b=[];D(a.text,c.term,b,d);return b.join("")},formatSelection:function(a){return a?a.text:g},sortResults:function(a){return a},formatResultCssClass:function(){return g},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(a,b){var c=b-a.length;return"Please enter "+
c+" more character"+(1==c?"":"s")},formatInputTooLong:function(a,b){var c=a.length-b;return"Please enter "+c+" less character"+(1==c?"":"s")},formatSelectionTooBig:function(a){return"You can only select "+a+" item"+(1==a?"":"s")},formatLoadMore:function(){return"Loading more results..."},formatSearching:function(){return"Searching..."},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(a){return a.id},matcher:function(a,b){return 0<=b.toUpperCase().indexOf(a.toUpperCase())},
separator:",",tokenSeparators:[],tokenizer:L,escapeMarkup:function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","/":"&#47;"};return String(a).replace(/[&<>"'/\\]/g,function(a){return b[a[0]]})},blurOnChange:!1,selectOnBlur:!1};window.Select2={query:{ajax:E,local:F,tags:G},util:{debounce:C,markMatch:D},"class":{"abstract":r,single:A,multi:B}}}})(jQuery);
;/*

 FullCalendar v1.5.4
 http://arshaw.com/fullcalendar/

 Use fullcalendar.css for basic styling.
 For event drag & drop, requires jQuery UI draggable.
 For event resizing, requires jQuery UI resizable.

 Copyright (c) 2011 Adam Shaw
 Dual licensed under the MIT and GPL licenses, located in
 MIT-LICENSE.txt and GPL-LICENSE.txt respectively.

 Date: Tue Sep 4 23:38:33 2012 -0700

*/
(function(m,ma){function wb(a){m.extend(true,Ya,a)}function Yb(a,b,e){function d(k){if(E){u();q();na();S(k)}else f()}function f(){B=b.theme?"ui":"fc";a.addClass("fc");b.isRTL&&a.addClass("fc-rtl");b.theme&&a.addClass("ui-widget");E=m("<div class='fc-content' style='position:relative'/>").prependTo(a);C=new Zb(X,b);(P=C.render())&&a.prepend(P);y(b.defaultView);m(window).resize(oa);t()||g()}function g(){setTimeout(function(){!n.start&&t()&&S()},0)}function l(){m(window).unbind("resize",oa);C.destroy();
E.remove();a.removeClass("fc fc-rtl ui-widget")}function j(){return i.offsetWidth!==0}function t(){return m("body")[0].offsetWidth!==0}function y(k){if(!n||k!=n.name){F++;pa();var D=n,Z;if(D){(D.beforeHide||xb)();Za(E,E.height());D.element.hide()}else Za(E,1);E.css("overflow","hidden");if(n=Y[k])n.element.show();else n=Y[k]=new Ja[k](Z=s=m("<div class='fc-view fc-view-"+k+"' style='position:absolute'/>").appendTo(E),X);D&&C.deactivateButton(D.name);C.activateButton(k);S();E.css("overflow","");D&&
Za(E,1);Z||(n.afterShow||xb)();F--}}function S(k){if(j()){F++;pa();o===ma&&u();var D=false;if(!n.start||k||r<n.start||r>=n.end){n.render(r,k||0);fa(true);D=true}else if(n.sizeDirty){n.clearEvents();fa();D=true}else if(n.eventsDirty){n.clearEvents();D=true}n.sizeDirty=false;n.eventsDirty=false;ga(D);W=a.outerWidth();C.updateTitle(n.title);k=new Date;k>=n.start&&k<n.end?C.disableButton("today"):C.enableButton("today");F--;n.trigger("viewDisplay",i)}}function Q(){q();if(j()){u();fa();pa();n.clearEvents();
n.renderEvents(J);n.sizeDirty=false}}function q(){m.each(Y,function(k,D){D.sizeDirty=true})}function u(){o=b.contentHeight?b.contentHeight:b.height?b.height-(P?P.height():0)-Sa(E):Math.round(E.width()/Math.max(b.aspectRatio,0.5))}function fa(k){F++;n.setHeight(o,k);if(s){s.css("position","relative");s=null}n.setWidth(E.width(),k);F--}function oa(){if(!F)if(n.start){var k=++v;setTimeout(function(){if(k==v&&!F&&j())if(W!=(W=a.outerWidth())){F++;Q();n.trigger("windowResize",i);F--}},200)}else g()}function ga(k){if(!b.lazyFetching||
ya(n.visStart,n.visEnd))ra();else k&&da()}function ra(){K(n.visStart,n.visEnd)}function sa(k){J=k;da()}function ha(k){da(k)}function da(k){na();if(j()){n.clearEvents();n.renderEvents(J,k);n.eventsDirty=false}}function na(){m.each(Y,function(k,D){D.eventsDirty=true})}function ua(k,D,Z){n.select(k,D,Z===ma?true:Z)}function pa(){n&&n.unselect()}function U(){S(-1)}function ca(){S(1)}function ka(){gb(r,-1);S()}function qa(){gb(r,1);S()}function G(){r=new Date;S()}function p(k,D,Z){if(k instanceof Date)r=
N(k);else yb(r,k,D,Z);S()}function L(k,D,Z){k!==ma&&gb(r,k);D!==ma&&hb(r,D);Z!==ma&&ba(r,Z);S()}function c(){return N(r)}function z(){return n}function H(k,D){if(D===ma)return b[k];if(k=="height"||k=="contentHeight"||k=="aspectRatio"){b[k]=D;Q()}}function T(k,D){if(b[k])return b[k].apply(D||i,Array.prototype.slice.call(arguments,2))}var X=this;X.options=b;X.render=d;X.destroy=l;X.refetchEvents=ra;X.reportEvents=sa;X.reportEventChange=ha;X.rerenderEvents=da;X.changeView=y;X.select=ua;X.unselect=pa;
X.prev=U;X.next=ca;X.prevYear=ka;X.nextYear=qa;X.today=G;X.gotoDate=p;X.incrementDate=L;X.formatDate=function(k,D){return Oa(k,D,b)};X.formatDates=function(k,D,Z){return ib(k,D,Z,b)};X.getDate=c;X.getView=z;X.option=H;X.trigger=T;$b.call(X,b,e);var ya=X.isFetchNeeded,K=X.fetchEvents,i=a[0],C,P,E,B,n,Y={},W,o,s,v=0,F=0,r=new Date,J=[],M;yb(r,b.year,b.month,b.date);b.droppable&&m(document).bind("dragstart",function(k,D){var Z=k.target,ja=m(Z);if(!ja.parents(".fc").length){var ia=b.dropAccept;if(m.isFunction(ia)?
ia.call(Z,ja):ja.is(ia)){M=Z;n.dragStart(M,k,D)}}}).bind("dragstop",function(k,D){if(M){n.dragStop(M,k,D);M=null}})}function Zb(a,b){function e(){q=b.theme?"ui":"fc";if(b.header)return Q=m("<table class='fc-header' style='width:100%'/>").append(m("<tr/>").append(f("left")).append(f("center")).append(f("right")))}function d(){Q.remove()}function f(u){var fa=m("<td class='fc-header-"+u+"'/>");(u=b.header[u])&&m.each(u.split(" "),function(oa){oa>0&&fa.append("<span class='fc-header-space'/>");var ga;
m.each(this.split(","),function(ra,sa){if(sa=="title"){fa.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>");ga&&ga.addClass(q+"-corner-right");ga=null}else{var ha;if(a[sa])ha=a[sa];else if(Ja[sa])ha=function(){na.removeClass(q+"-state-hover");a.changeView(sa)};if(ha){ra=b.theme?jb(b.buttonIcons,sa):null;var da=jb(b.buttonText,sa),na=m("<span class='fc-button fc-button-"+sa+" "+q+"-state-default'><span class='fc-button-inner'><span class='fc-button-content'>"+(ra?"<span class='fc-icon-wrap'><span class='ui-icon ui-icon-"+
ra+"'/></span>":da)+"</span><span class='fc-button-effect'><span></span></span></span></span>");if(na){na.click(function(){na.hasClass(q+"-state-disabled")||ha()}).mousedown(function(){na.not("."+q+"-state-active").not("."+q+"-state-disabled").addClass(q+"-state-down")}).mouseup(function(){na.removeClass(q+"-state-down")}).hover(function(){na.not("."+q+"-state-active").not("."+q+"-state-disabled").addClass(q+"-state-hover")},function(){na.removeClass(q+"-state-hover").removeClass(q+"-state-down")}).appendTo(fa);
ga||na.addClass(q+"-corner-left");ga=na}}}});ga&&ga.addClass(q+"-corner-right")});return fa}function g(u){Q.find("h2").html(u)}function l(u){Q.find("span.fc-button-"+u).addClass(q+"-state-active")}function j(u){Q.find("span.fc-button-"+u).removeClass(q+"-state-active")}function t(u){Q.find("span.fc-button-"+u).addClass(q+"-state-disabled")}function y(u){Q.find("span.fc-button-"+u).removeClass(q+"-state-disabled")}var S=this;S.render=e;S.destroy=d;S.updateTitle=g;S.activateButton=l;S.deactivateButton=
j;S.disableButton=t;S.enableButton=y;var Q=m([]),q}function $b(a,b){function e(c,z){return!ca||c<ca||z>ka}function d(c,z){ca=c;ka=z;L=[];c=++qa;G=z=U.length;for(var H=0;H<z;H++)f(U[H],c)}function f(c,z){g(c,function(H){if(z==qa){if(H){for(var T=0;T<H.length;T++){H[T].source=c;oa(H[T])}L=L.concat(H)}G--;G||ua(L)}})}function g(c,z){var H,T=Aa.sourceFetchers,X;for(H=0;H<T.length;H++){X=T[H](c,ca,ka,z);if(X===true)return;else if(typeof X=="object"){g(X,z);return}}if(H=c.events)if(m.isFunction(H)){u();
H(N(ca),N(ka),function(C){z(C);fa()})}else m.isArray(H)?z(H):z();else if(c.url){var ya=c.success,K=c.error,i=c.complete;H=m.extend({},c.data||{});T=Ta(c.startParam,a.startParam);X=Ta(c.endParam,a.endParam);if(T)H[T]=Math.round(+ca/1E3);if(X)H[X]=Math.round(+ka/1E3);u();m.ajax(m.extend({},ac,c,{data:H,success:function(C){C=C||[];var P=$a(ya,this,arguments);if(m.isArray(P))C=P;z(C)},error:function(){$a(K,this,arguments);z()},complete:function(){$a(i,this,arguments);fa()}}))}else z()}function l(c){if(c=
j(c)){G++;f(c,qa)}}function j(c){if(m.isFunction(c)||m.isArray(c))c={events:c};else if(typeof c=="string")c={url:c};if(typeof c=="object"){ga(c);U.push(c);return c}}function t(c){U=m.grep(U,function(z){return!ra(z,c)});L=m.grep(L,function(z){return!ra(z.source,c)});ua(L)}function y(c){var z,H=L.length,T,X=na().defaultEventEnd,ya=c.start-c._start,K=c.end?c.end-(c._end||X(c)):0;for(z=0;z<H;z++){T=L[z];if(T._id==c._id&&T!=c){T.start=new Date(+T.start+ya);T.end=c.end?T.end?new Date(+T.end+K):new Date(+X(T)+
K):null;T.title=c.title;T.url=c.url;T.allDay=c.allDay;T.className=c.className;T.editable=c.editable;T.color=c.color;T.backgroudColor=c.backgroudColor;T.borderColor=c.borderColor;T.textColor=c.textColor;oa(T)}}oa(c);ua(L)}function S(c,z){oa(c);if(!c.source){if(z){pa.events.push(c);c.source=pa}L.push(c)}ua(L)}function Q(c){if(c){if(!m.isFunction(c)){var z=c+"";c=function(T){return T._id==z}}L=m.grep(L,c,true);for(H=0;H<U.length;H++)if(m.isArray(U[H].events))U[H].events=m.grep(U[H].events,c,true)}else{L=
[];for(var H=0;H<U.length;H++)if(m.isArray(U[H].events))U[H].events=[]}ua(L)}function q(c){if(m.isFunction(c))return m.grep(L,c);else if(c){c+="";return m.grep(L,function(z){return z._id==c})}return L}function u(){p++||da("loading",null,true)}function fa(){--p||da("loading",null,false)}function oa(c){var z=c.source||{},H=Ta(z.ignoreTimezone,a.ignoreTimezone);c._id=c._id||(c.id===ma?"_fc"+bc++:c.id+"");if(c.date){if(!c.start)c.start=c.date;delete c.date}c._start=N(c.start=kb(c.start,H));c.end=kb(c.end,
H);if(c.end&&c.end<=c.start)c.end=null;c._end=c.end?N(c.end):null;if(c.allDay===ma)c.allDay=Ta(z.allDayDefault,a.allDayDefault);if(c.className){if(typeof c.className=="string")c.className=c.className.split(/\s+/)}else c.className=[]}function ga(c){if(c.className){if(typeof c.className=="string")c.className=c.className.split(/\s+/)}else c.className=[];for(var z=Aa.sourceNormalizers,H=0;H<z.length;H++)z[H](c)}function ra(c,z){return c&&z&&sa(c)==sa(z)}function sa(c){return(typeof c=="object"?c.events||
c.url:"")||c}var ha=this;ha.isFetchNeeded=e;ha.fetchEvents=d;ha.addEventSource=l;ha.removeEventSource=t;ha.updateEvent=y;ha.renderEvent=S;ha.removeEvents=Q;ha.clientEvents=q;ha.normalizeEvent=oa;var da=ha.trigger,na=ha.getView,ua=ha.reportEvents,pa={events:[]},U=[pa],ca,ka,qa=0,G=0,p=0,L=[];for(ha=0;ha<b.length;ha++)j(b[ha])}function gb(a,b,e){a.setFullYear(a.getFullYear()+b);e||Ka(a);return a}function hb(a,b,e){if(+a){b=a.getMonth()+b;var d=N(a);d.setDate(1);d.setMonth(b);a.setMonth(b);for(e||Ka(a);a.getMonth()!=
d.getMonth();)a.setDate(a.getDate()+(a<d?1:-1))}return a}function ba(a,b,e){if(+a){b=a.getDate()+b;var d=N(a);d.setHours(9);d.setDate(b);a.setDate(b);e||Ka(a);lb(a,d)}return a}function lb(a,b){if(+a)for(;a.getDate()!=b.getDate();)a.setTime(+a+(a<b?1:-1)*cc)}function xa(a,b){a.setMinutes(a.getMinutes()+b);return a}function Ka(a){a.setHours(0);a.setMinutes(0);a.setSeconds(0);a.setMilliseconds(0);return a}function N(a,b){if(b)return Ka(new Date(+a));return new Date(+a)}function zb(){var a=0,b;do b=new Date(1970,
a++,1);while(b.getHours());return b}function Fa(a,b,e){for(b=b||1;!a.getDay()||e&&a.getDay()==1||!e&&a.getDay()==6;)ba(a,b);return a}function Ca(a,b){return Math.round((N(a,true)-N(b,true))/Ab)}function yb(a,b,e,d){if(b!==ma&&b!=a.getFullYear()){a.setDate(1);a.setMonth(0);a.setFullYear(b)}if(e!==ma&&e!=a.getMonth()){a.setDate(1);a.setMonth(e)}d!==ma&&a.setDate(d)}function kb(a,b){if(typeof a=="object")return a;if(typeof a=="number")return new Date(a*1E3);if(typeof a=="string"){if(a.match(/^\d+(\.\d+)?$/))return new Date(parseFloat(a)*
1E3);if(b===ma)b=true;return Bb(a,b)||(a?new Date(a):null)}return null}function Bb(a,b){a=a.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);if(!a)return null;var e=new Date(a[1],0,1);if(b||!a[13]){b=new Date(a[1],0,1,9,0);if(a[3]){e.setMonth(a[3]-1);b.setMonth(a[3]-1)}if(a[5]){e.setDate(a[5]);b.setDate(a[5])}lb(e,b);a[7]&&e.setHours(a[7]);a[8]&&e.setMinutes(a[8]);a[10]&&e.setSeconds(a[10]);a[12]&&e.setMilliseconds(Number("0."+
a[12])*1E3);lb(e,b)}else{e.setUTCFullYear(a[1],a[3]?a[3]-1:0,a[5]||1);e.setUTCHours(a[7]||0,a[8]||0,a[10]||0,a[12]?Number("0."+a[12])*1E3:0);if(a[14]){b=Number(a[16])*60+(a[18]?Number(a[18]):0);b*=a[15]=="-"?1:-1;e=new Date(+e+b*60*1E3)}}return e}function mb(a){if(typeof a=="number")return a*60;if(typeof a=="object")return a.getHours()*60+a.getMinutes();if(a=a.match(/(\d+)(?::(\d+))?\s*(\w+)?/)){var b=parseInt(a[1],10);if(a[3]){b%=12;if(a[3].toLowerCase().charAt(0)=="p")b+=12}return b*60+(a[2]?parseInt(a[2],
10):0)}}function Oa(a,b,e){return ib(a,null,b,e)}function ib(a,b,e,d){d=d||Ya;var f=a,g=b,l,j=e.length,t,y,S,Q="";for(l=0;l<j;l++){t=e.charAt(l);if(t=="'")for(y=l+1;y<j;y++){if(e.charAt(y)=="'"){if(f){Q+=y==l+1?"'":e.substring(l+1,y);l=y}break}}else if(t=="(")for(y=l+1;y<j;y++){if(e.charAt(y)==")"){l=Oa(f,e.substring(l+1,y),d);if(parseInt(l.replace(/\D/,""),10))Q+=l;l=y;break}}else if(t=="[")for(y=l+1;y<j;y++){if(e.charAt(y)=="]"){t=e.substring(l+1,y);l=Oa(f,t,d);if(l!=Oa(g,t,d))Q+=l;l=y;break}}else if(t==
"{"){f=b;g=a}else if(t=="}"){f=a;g=b}else{for(y=j;y>l;y--)if(S=dc[e.substring(l,y)]){if(f)Q+=S(f,d);l=y-1;break}if(y==l)if(f)Q+=t}}return Q}function Ua(a){return a.end?ec(a.end,a.allDay):ba(N(a.start),1)}function ec(a,b){a=N(a);return b||a.getHours()||a.getMinutes()?ba(a,1):Ka(a)}function fc(a,b){return(b.msLength-a.msLength)*100+(a.event.start-b.event.start)}function Cb(a,b){return a.end>b.start&&a.start<b.end}function nb(a,b,e,d){var f=[],g,l=a.length,j,t,y,S,Q;for(g=0;g<l;g++){j=a[g];t=j.start;
y=b[g];if(y>e&&t<d){if(t<e){t=N(e);S=false}else{t=t;S=true}if(y>d){y=N(d);Q=false}else{y=y;Q=true}f.push({event:j,start:t,end:y,isStart:S,isEnd:Q,msLength:y-t})}}return f.sort(fc)}function ob(a){var b=[],e,d=a.length,f,g,l,j;for(e=0;e<d;e++){f=a[e];for(g=0;;){l=false;if(b[g])for(j=0;j<b[g].length;j++)if(Cb(b[g][j],f)){l=true;break}if(l)g++;else break}if(b[g])b[g].push(f);else b[g]=[f]}return b}function Db(a,b,e){a.unbind("mouseover").mouseover(function(d){for(var f=d.target,g;f!=this;){g=f;f=f.parentNode}if((f=
g._fci)!==ma){g._fci=ma;g=b[f];e(g.event,g.element,g);m(d.target).trigger(d)}d.stopPropagation()})}function Va(a,b,e){for(var d=0,f;d<a.length;d++){f=m(a[d]);f.width(Math.max(0,b-pb(f,e)))}}function Eb(a,b,e){for(var d=0,f;d<a.length;d++){f=m(a[d]);f.height(Math.max(0,b-Sa(f,e)))}}function pb(a,b){return gc(a)+hc(a)+(b?ic(a):0)}function gc(a){return(parseFloat(m.css(a[0],"paddingLeft",true))||0)+(parseFloat(m.css(a[0],"paddingRight",true))||0)}function ic(a){return(parseFloat(m.css(a[0],"marginLeft",
true))||0)+(parseFloat(m.css(a[0],"marginRight",true))||0)}function hc(a){return(parseFloat(m.css(a[0],"borderLeftWidth",true))||0)+(parseFloat(m.css(a[0],"borderRightWidth",true))||0)}function Sa(a,b){return jc(a)+kc(a)+(b?Fb(a):0)}function jc(a){return(parseFloat(m.css(a[0],"paddingTop",true))||0)+(parseFloat(m.css(a[0],"paddingBottom",true))||0)}function Fb(a){return(parseFloat(m.css(a[0],"marginTop",true))||0)+(parseFloat(m.css(a[0],"marginBottom",true))||0)}function kc(a){return(parseFloat(m.css(a[0],
"borderTopWidth",true))||0)+(parseFloat(m.css(a[0],"borderBottomWidth",true))||0)}function Za(a,b){b=typeof b=="number"?b+"px":b;a.each(function(e,d){d.style.cssText+=";min-height:"+b+";_height:"+b})}function xb(){}function Gb(a,b){return a-b}function Hb(a){return Math.max.apply(Math,a)}function Pa(a){return(a<10?"0":"")+a}function jb(a,b){if(a[b]!==ma)return a[b];b=b.split(/(?=[A-Z])/);for(var e=b.length-1,d;e>=0;e--){d=a[b[e].toLowerCase()];if(d!==ma)return d}return a[""]}function Qa(a){return a.replace(/&/g,
"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function Ib(a){return a.id+"/"+a.className+"/"+a.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/ig,"")}function qb(a){a.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})}function ab(a){a.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")}
function rb(a,b){a.each(function(e,d){d.className=d.className.replace(/^fc-\w*/,"fc-"+lc[b.getDay()])})}function Jb(a,b){var e=a.source||{},d=a.color,f=e.color,g=b("eventColor"),l=a.backgroundColor||d||e.backgroundColor||f||b("eventBackgroundColor")||g;d=a.borderColor||d||e.borderColor||f||b("eventBorderColor")||g;a=a.textColor||e.textColor||b("eventTextColor");b=[];l&&b.push("background-color:"+l);d&&b.push("border-color:"+d);a&&b.push("color:"+a);return b.join(";")}function $a(a,b,e){if(m.isFunction(a))a=
[a];if(a){var d,f;for(d=0;d<a.length;d++)f=a[d].apply(b,e)||f;return f}}function Ta(){for(var a=0;a<arguments.length;a++)if(arguments[a]!==ma)return arguments[a]}function mc(a,b){function e(j,t){if(t){hb(j,t);j.setDate(1)}j=N(j,true);j.setDate(1);t=hb(N(j),1);var y=N(j),S=N(t),Q=f("firstDay"),q=f("weekends")?0:1;if(q){Fa(y);Fa(S,-1,true)}ba(y,-((y.getDay()-Math.max(Q,q)+7)%7));ba(S,(7-S.getDay()+Math.max(Q,q))%7);Q=Math.round((S-y)/(Ab*7));if(f("weekMode")=="fixed"){ba(S,(6-Q)*7);Q=6}d.title=l(j,
f("titleFormat"));d.start=j;d.end=t;d.visStart=y;d.visEnd=S;g(6,Q,q?5:7,true)}var d=this;d.render=e;sb.call(d,a,b,"month");var f=d.opt,g=d.renderBasic,l=b.formatDate}function nc(a,b){function e(j,t){t&&ba(j,t*7);j=ba(N(j),-((j.getDay()-f("firstDay")+7)%7));t=ba(N(j),7);var y=N(j),S=N(t),Q=f("weekends");if(!Q){Fa(y);Fa(S,-1,true)}d.title=l(y,ba(N(S),-1),f("titleFormat"));d.start=j;d.end=t;d.visStart=y;d.visEnd=S;g(1,1,Q?7:5,false)}var d=this;d.render=e;sb.call(d,a,b,"basicWeek");var f=d.opt,g=d.renderBasic,
l=b.formatDates}function oc(a,b){function e(j,t){if(t){ba(j,t);f("weekends")||Fa(j,t<0?-1:1)}d.title=l(j,f("titleFormat"));d.start=d.visStart=N(j,true);d.end=d.visEnd=ba(N(d.start),1);g(1,1,1,false)}var d=this;d.render=e;sb.call(d,a,b,"basicDay");var f=d.opt,g=d.renderBasic,l=b.formatDate}function sb(a,b,e){function d(w,I,R,V){v=I;F=R;f();(I=!C)?g(w,V):z();l(I)}function f(){if(k=L("isRTL")){D=-1;Z=F-1}else{D=1;Z=0}ja=L("firstDay");ia=L("weekends")?0:1;la=L("theme")?"ui":"fc";$=L("columnFormat")}function g(w,
I){var R,V=la+"-widget-header",ea=la+"-widget-content",aa;R="<table class='fc-border-separate' style='width:100%' cellspacing='0'><thead><tr>";for(aa=0;aa<F;aa++)R+="<th class='fc- "+V+"'/>";R+="</tr></thead><tbody>";for(aa=0;aa<w;aa++){R+="<tr class='fc-week"+aa+"'>";for(V=0;V<F;V++)R+="<td class='fc- "+ea+" fc-day"+(aa*F+V)+"'><div>"+(I?"<div class='fc-day-number'/>":"")+"<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";R+="</tr>"}R+="</tbody></table>";w=
m(R).appendTo(a);K=w.find("thead");i=K.find("th");C=w.find("tbody");P=C.find("tr");E=C.find("td");B=E.filter(":first-child");n=P.eq(0).find("div.fc-day-content div");ab(K.add(K.find("tr")));ab(P);P.eq(0).addClass("fc-first");y(E);Y=m("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(a)}function l(w){var I=w||v==1,R=p.start.getMonth(),V=Ka(new Date),ea,aa,va;I&&i.each(function(wa,Ga){ea=m(Ga);aa=ca(wa);ea.html(ya(aa,$));rb(ea,aa)});E.each(function(wa,Ga){ea=m(Ga);aa=ca(wa);aa.getMonth()==
R?ea.removeClass("fc-other-month"):ea.addClass("fc-other-month");+aa==+V?ea.addClass(la+"-state-highlight fc-today"):ea.removeClass(la+"-state-highlight fc-today");ea.find("div.fc-day-number").text(aa.getDate());I&&rb(ea,aa)});P.each(function(wa,Ga){va=m(Ga);if(wa<v){va.show();wa==v-1?va.addClass("fc-last"):va.removeClass("fc-last")}else va.hide()})}function j(w){o=w;w=o-K.height();var I,R,V;if(L("weekMode")=="variable")I=R=Math.floor(w/(v==1?2:6));else{I=Math.floor(w/v);R=w-I*(v-1)}B.each(function(ea,
aa){if(ea<v){V=m(aa);Za(V.find("> div"),(ea==v-1?R:I)-Sa(V))}})}function t(w){W=w;M.clear();s=Math.floor(W/F);Va(i.slice(0,-1),s)}function y(w){w.click(S).mousedown(X)}function S(w){if(!L("selectable")){var I=parseInt(this.className.match(/fc\-day(\d+)/)[1]);I=ca(I);c("dayClick",this,I,true,w)}}function Q(w,I,R){R&&r.build();R=N(p.visStart);for(var V=ba(N(R),F),ea=0;ea<v;ea++){var aa=new Date(Math.max(R,w)),va=new Date(Math.min(V,I));if(aa<va){var wa;if(k){wa=Ca(va,R)*D+Z+1;aa=Ca(aa,R)*D+Z+1}else{wa=
Ca(aa,R);aa=Ca(va,R)}y(q(ea,wa,ea,aa-1))}ba(R,7);ba(V,7)}}function q(w,I,R,V){w=r.rect(w,I,R,V,a);return H(w,a)}function u(w){return N(w)}function fa(w,I){Q(w,ba(N(I),1),true)}function oa(){T()}function ga(w,I,R){var V=ua(w);c("dayClick",E[V.row*F+V.col],w,I,R)}function ra(w,I){J.start(function(R){T();R&&q(R.row,R.col,R.row,R.col)},I)}function sa(w,I,R){var V=J.stop();T();if(V){V=pa(V);c("drop",w,V,true,I,R)}}function ha(w){return N(w.start)}function da(w){return M.left(w)}function na(w){return M.right(w)}
function ua(w){return{row:Math.floor(Ca(w,p.visStart)/7),col:ka(w.getDay())}}function pa(w){return U(w.row,w.col)}function U(w,I){return ba(N(p.visStart),w*7+I*D+Z)}function ca(w){return U(Math.floor(w/F),w%F)}function ka(w){return(w-Math.max(ja,ia)+F)%F*D+Z}function qa(w){return P.eq(w)}function G(){return{left:0,right:W}}var p=this;p.renderBasic=d;p.setHeight=j;p.setWidth=t;p.renderDayOverlay=Q;p.defaultSelectionEnd=u;p.renderSelection=fa;p.clearSelection=oa;p.reportDayClick=ga;p.dragStart=ra;p.dragStop=
sa;p.defaultEventEnd=ha;p.getHoverListener=function(){return J};p.colContentLeft=da;p.colContentRight=na;p.dayOfWeekCol=ka;p.dateCell=ua;p.cellDate=pa;p.cellIsAllDay=function(){return true};p.allDayRow=qa;p.allDayBounds=G;p.getRowCnt=function(){return v};p.getColCnt=function(){return F};p.getColWidth=function(){return s};p.getDaySegmentContainer=function(){return Y};Kb.call(p,a,b,e);Lb.call(p);Mb.call(p);pc.call(p);var L=p.opt,c=p.trigger,z=p.clearEvents,H=p.renderOverlay,T=p.clearOverlays,X=p.daySelectionMousedown,
ya=b.formatDate,K,i,C,P,E,B,n,Y,W,o,s,v,F,r,J,M,k,D,Z,ja,ia,la,$;qb(a.addClass("fc-grid"));r=new Nb(function(w,I){var R,V,ea;i.each(function(aa,va){R=m(va);V=R.offset().left;if(aa)ea[1]=V;ea=[V];I[aa]=ea});ea[1]=V+R.outerWidth();P.each(function(aa,va){if(aa<v){R=m(va);V=R.offset().top;if(aa)ea[1]=V;ea=[V];w[aa]=ea}});ea[1]=V+R.outerHeight()});J=new Ob(r);M=new Pb(function(w){return n.eq(w)})}function pc(){function a(U,ca){S(U);ua(e(U),ca)}function b(){Q();ga().empty()}function e(U){var ca=da(),ka=
na(),qa=N(g.visStart);ka=ba(N(qa),ka);var G=m.map(U,Ua),p,L,c,z,H,T,X=[];for(p=0;p<ca;p++){L=ob(nb(U,G,qa,ka));for(c=0;c<L.length;c++){z=L[c];for(H=0;H<z.length;H++){T=z[H];T.row=p;T.level=c;X.push(T)}}ba(qa,7);ba(ka,7)}return X}function d(U,ca,ka){t(U)&&f(U,ca);ka.isEnd&&y(U)&&pa(U,ca,ka);q(U,ca)}function f(U,ca){var ka=ra(),qa;ca.draggable({zIndex:9,delay:50,opacity:l("dragOpacity"),revertDuration:l("dragRevertDuration"),start:function(G,p){j("eventDragStart",ca,U,G,p);fa(U,ca);ka.start(function(L,
c,z,H){ca.draggable("option","revert",!L||!z&&!H);ha();if(L){qa=z*7+H*(l("isRTL")?-1:1);sa(ba(N(U.start),qa),ba(Ua(U),qa))}else qa=0},G,"drag")},stop:function(G,p){ka.stop();ha();j("eventDragStop",ca,U,G,p);if(qa)oa(this,U,qa,0,U.allDay,G,p);else{ca.css("filter","");u(U,ca)}}})}var g=this;g.renderEvents=a;g.compileDaySegs=e;g.clearEvents=b;g.bindDaySeg=d;Qb.call(g);var l=g.opt,j=g.trigger,t=g.isEventDraggable,y=g.isEventResizable,S=g.reportEvents,Q=g.reportEventClear,q=g.eventElementHandlers,u=g.showEvents,
fa=g.hideEvents,oa=g.eventDrop,ga=g.getDaySegmentContainer,ra=g.getHoverListener,sa=g.renderDayOverlay,ha=g.clearOverlays,da=g.getRowCnt,na=g.getColCnt,ua=g.renderDaySegs,pa=g.resizableDayEvent}function qc(a,b){function e(j,t){t&&ba(j,t*7);j=ba(N(j),-((j.getDay()-f("firstDay")+7)%7));t=ba(N(j),7);var y=N(j),S=N(t),Q=f("weekends");if(!Q){Fa(y);Fa(S,-1,true)}d.title=l(y,ba(N(S),-1),f("titleFormat"));d.start=j;d.end=t;d.visStart=y;d.visEnd=S;g(Q?7:5)}var d=this;d.render=e;Rb.call(d,a,b,"agendaWeek");
var f=d.opt,g=d.renderAgenda,l=b.formatDates}function rc(a,b){function e(j,t){if(t){ba(j,t);f("weekends")||Fa(j,t<0?-1:1)}t=N(j,true);var y=ba(N(t),1);d.title=l(j,f("titleFormat"));d.start=d.visStart=t;d.end=d.visEnd=y;g(1)}var d=this;d.render=e;Rb.call(d,a,b,"agendaDay");var f=d.opt,g=d.renderAgenda,l=b.formatDate}function Rb(a,b,e){function d(h){Ba=h;f();v?P():g();l()}function f(){Wa=i("theme")?"ui":"fc";Sb=i("weekends")?0:1;Tb=i("firstDay");if(Ub=i("isRTL")){Ha=-1;Ia=Ba-1}else{Ha=1;Ia=0}La=mb(i("minTime"));
bb=mb(i("maxTime"));Vb=i("columnFormat")}function g(){var h=Wa+"-widget-header",O=Wa+"-widget-content",x,A,ta,za,Da,Ea=i("slotMinutes")%15==0;x="<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'><thead><tr><th class='fc-agenda-axis "+h+"'>&nbsp;</th>";for(A=0;A<Ba;A++)x+="<th class='fc- fc-col"+A+" "+h+"'/>";x+="<th class='fc-agenda-gutter "+h+"'>&nbsp;</th></tr></thead><tbody><tr><th class='fc-agenda-axis "+h+"'>&nbsp;</th>";for(A=0;A<Ba;A++)x+="<td class='fc- fc-col"+
A+" "+O+"'><div><div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";x+="<td class='fc-agenda-gutter "+O+"'>&nbsp;</td></tr></tbody></table>";v=m(x).appendTo(a);F=v.find("thead");r=F.find("th").slice(1,-1);J=v.find("tbody");M=J.find("td").slice(0,-1);k=M.find("div.fc-day-content div");D=M.eq(0);Z=D.find("> div");ab(F.add(F.find("tr")));ab(J.add(J.find("tr")));aa=F.find("th:first");va=v.find(".fc-agenda-gutter");ja=m("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(a);
if(i("allDaySlot")){ia=m("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(ja);x="<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='"+h+" fc-agenda-axis'>"+i("allDayText")+"</th><td><div class='fc-day-content'><div style='position:relative'/></div></td><th class='"+h+" fc-agenda-gutter'>&nbsp;</th></tr></table>";la=m(x).appendTo(ja);$=la.find("tr");q($.find("td"));aa=aa.add(la.find("th:first"));va=va.add(la.find("th.fc-agenda-gutter"));ja.append("<div class='fc-agenda-divider "+
h+"'><div class='fc-agenda-divider-inner'/></div>")}else ia=m([]);w=m("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(ja);I=m("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(w);R=m("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(I);x="<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>";ta=zb();za=xa(N(ta),bb);xa(ta,La);for(A=tb=0;ta<za;A++){Da=ta.getMinutes();x+="<tr class='fc-slot"+A+" "+
(!Da?"":"fc-minor")+"'><th class='fc-agenda-axis "+h+"'>"+(!Ea||!Da?s(ta,i("axisFormat")):"&nbsp;")+"</th><td class='"+O+"'><div style='position:relative'>&nbsp;</div></td></tr>";xa(ta,i("slotMinutes"));tb++}x+="</tbody></table>";V=m(x).appendTo(I);ea=V.find("div:first");u(V.find("td"));aa=aa.add(V.find("th:first"))}function l(){var h,O,x,A,ta=Ka(new Date);for(h=0;h<Ba;h++){A=ua(h);O=r.eq(h);O.html(s(A,Vb));x=M.eq(h);+A==+ta?x.addClass(Wa+"-state-highlight fc-today"):x.removeClass(Wa+"-state-highlight fc-today");
rb(O.add(x),A)}}function j(h,O){if(h===ma)h=Wb;Wb=h;ub={};var x=J.position().top,A=w.position().top;h=Math.min(h-x,V.height()+A+1);Z.height(h-Sa(D));ja.css("top",x);w.height(h-A-1);Xa=ea.height()+1;O&&y()}function t(h){Ga=h;cb.clear();Ma=0;Va(aa.width("").each(function(O,x){Ma=Math.max(Ma,m(x).outerWidth())}),Ma);h=w[0].clientWidth;if(vb=w.width()-h){Va(va,vb);va.show().prev().removeClass("fc-last")}else va.hide().prev().addClass("fc-last");db=Math.floor((h-Ma)/Ba);Va(r.slice(0,-1),db)}function y(){function h(){w.scrollTop(A)}
var O=zb(),x=N(O);x.setHours(i("firstHour"));var A=ca(O,x)+1;h();setTimeout(h,0)}function S(){Xb=w.scrollTop()}function Q(){w.scrollTop(Xb)}function q(h){h.click(fa).mousedown(W)}function u(h){h.click(fa).mousedown(H)}function fa(h){if(!i("selectable")){var O=Math.min(Ba-1,Math.floor((h.pageX-v.offset().left-Ma)/db)),x=ua(O),A=this.parentNode.className.match(/fc-slot(\d+)/);if(A){A=parseInt(A[1])*i("slotMinutes");var ta=Math.floor(A/60);x.setHours(ta);x.setMinutes(A%60+La);C("dayClick",M[O],x,false,
h)}else C("dayClick",M[O],x,true,h)}}function oa(h,O,x){x&&Na.build();var A=N(K.visStart);if(Ub){x=Ca(O,A)*Ha+Ia+1;h=Ca(h,A)*Ha+Ia+1}else{x=Ca(h,A);h=Ca(O,A)}x=Math.max(0,x);h=Math.min(Ba,h);x<h&&q(ga(0,x,0,h-1))}function ga(h,O,x,A){h=Na.rect(h,O,x,A,ja);return E(h,ja)}function ra(h,O){for(var x=N(K.visStart),A=ba(N(x),1),ta=0;ta<Ba;ta++){var za=new Date(Math.max(x,h)),Da=new Date(Math.min(A,O));if(za<Da){var Ea=ta*Ha+Ia;Ea=Na.rect(0,Ea,0,Ea,I);za=ca(x,za);Da=ca(x,Da);Ea.top=za;Ea.height=Da-za;u(E(Ea,
I))}ba(x,1);ba(A,1)}}function sa(h){return cb.left(h)}function ha(h){return cb.right(h)}function da(h){return{row:Math.floor(Ca(h,K.visStart)/7),col:U(h.getDay())}}function na(h){var O=ua(h.col);h=h.row;i("allDaySlot")&&h--;h>=0&&xa(O,La+h*i("slotMinutes"));return O}function ua(h){return ba(N(K.visStart),h*Ha+Ia)}function pa(h){return i("allDaySlot")&&!h.row}function U(h){return(h-Math.max(Tb,Sb)+Ba)%Ba*Ha+Ia}function ca(h,O){h=N(h,true);if(O<xa(N(h),La))return 0;if(O>=xa(N(h),bb))return V.height();
h=i("slotMinutes");O=O.getHours()*60+O.getMinutes()-La;var x=Math.floor(O/h),A=ub[x];if(A===ma)A=ub[x]=V.find("tr:eq("+x+") td div")[0].offsetTop;return Math.max(0,Math.round(A-1+Xa*(O%h/h)))}function ka(){return{left:Ma,right:Ga-vb}}function qa(){return $}function G(h){var O=N(h.start);if(h.allDay)return O;return xa(O,i("defaultEventMinutes"))}function p(h,O){if(O)return N(h);return xa(N(h),i("slotMinutes"))}function L(h,O,x){if(x)i("allDaySlot")&&oa(h,ba(N(O),1),true);else c(h,O)}function c(h,O){var x=
i("selectHelper");Na.build();if(x){var A=Ca(h,K.visStart)*Ha+Ia;if(A>=0&&A<Ba){A=Na.rect(0,A,0,A,I);var ta=ca(h,h),za=ca(h,O);if(za>ta){A.top=ta;A.height=za-ta;A.left+=2;A.width-=5;if(m.isFunction(x)){if(h=x(h,O)){A.position="absolute";A.zIndex=8;wa=m(h).css(A).appendTo(I)}}else{A.isStart=true;A.isEnd=true;wa=m(o({title:"",start:h,end:O,className:["fc-select-helper"],editable:false},A));wa.css("opacity",i("dragOpacity"))}if(wa){u(wa);I.append(wa);Va(wa,A.width,true);Eb(wa,A.height,true)}}}}else ra(h,
O)}function z(){B();if(wa){wa.remove();wa=null}}function H(h){if(h.which==1&&i("selectable")){Y(h);var O;Ra.start(function(x,A){z();if(x&&x.col==A.col&&!pa(x)){A=na(A);x=na(x);O=[A,xa(N(A),i("slotMinutes")),x,xa(N(x),i("slotMinutes"))].sort(Gb);c(O[0],O[3])}else O=null},h);m(document).one("mouseup",function(x){Ra.stop();if(O){+O[0]==+O[1]&&T(O[0],false,x);n(O[0],O[3],false,x)}})}}function T(h,O,x){C("dayClick",M[U(h.getDay())],h,O,x)}function X(h,O){Ra.start(function(x){B();if(x)if(pa(x))ga(x.row,
x.col,x.row,x.col);else{x=na(x);var A=xa(N(x),i("defaultEventMinutes"));ra(x,A)}},O)}function ya(h,O,x){var A=Ra.stop();B();A&&C("drop",h,na(A),pa(A),O,x)}var K=this;K.renderAgenda=d;K.setWidth=t;K.setHeight=j;K.beforeHide=S;K.afterShow=Q;K.defaultEventEnd=G;K.timePosition=ca;K.dayOfWeekCol=U;K.dateCell=da;K.cellDate=na;K.cellIsAllDay=pa;K.allDayRow=qa;K.allDayBounds=ka;K.getHoverListener=function(){return Ra};K.colContentLeft=sa;K.colContentRight=ha;K.getDaySegmentContainer=function(){return ia};
K.getSlotSegmentContainer=function(){return R};K.getMinMinute=function(){return La};K.getMaxMinute=function(){return bb};K.getBodyContent=function(){return I};K.getRowCnt=function(){return 1};K.getColCnt=function(){return Ba};K.getColWidth=function(){return db};K.getSlotHeight=function(){return Xa};K.defaultSelectionEnd=p;K.renderDayOverlay=oa;K.renderSelection=L;K.clearSelection=z;K.reportDayClick=T;K.dragStart=X;K.dragStop=ya;Kb.call(K,a,b,e);Lb.call(K);Mb.call(K);sc.call(K);var i=K.opt,C=K.trigger,
P=K.clearEvents,E=K.renderOverlay,B=K.clearOverlays,n=K.reportSelection,Y=K.unselect,W=K.daySelectionMousedown,o=K.slotSegHtml,s=b.formatDate,v,F,r,J,M,k,D,Z,ja,ia,la,$,w,I,R,V,ea,aa,va,wa,Ga,Wb,Ma,db,vb,Xa,Xb,Ba,tb,Na,Ra,cb,ub={},Wa,Tb,Sb,Ub,Ha,Ia,La,bb,Vb;qb(a.addClass("fc-agenda"));Na=new Nb(function(h,O){function x(eb){return Math.max(Ea,Math.min(tc,eb))}var A,ta,za;r.each(function(eb,uc){A=m(uc);ta=A.offset().left;if(eb)za[1]=ta;za=[ta];O[eb]=za});za[1]=ta+A.outerWidth();if(i("allDaySlot")){A=
$;ta=A.offset().top;h[0]=[ta,ta+A.outerHeight()]}for(var Da=I.offset().top,Ea=w.offset().top,tc=Ea+w.outerHeight(),fb=0;fb<tb;fb++)h.push([x(Da+Xa*fb),x(Da+Xa*(fb+1))])});Ra=new Ob(Na);cb=new Pb(function(h){return k.eq(h)})}function sc(){function a(o,s){sa(o);var v,F=o.length,r=[],J=[];for(v=0;v<F;v++)o[v].allDay?r.push(o[v]):J.push(o[v]);if(u("allDaySlot")){L(e(r),s);na()}g(d(J),s)}function b(){ha();ua().empty();pa().empty()}function e(o){o=ob(nb(o,m.map(o,Ua),q.visStart,q.visEnd));var s,v=o.length,
F,r,J,M=[];for(s=0;s<v;s++){F=o[s];for(r=0;r<F.length;r++){J=F[r];J.row=0;J.level=s;M.push(J)}}return M}function d(o){var s=z(),v=ka(),F=ca(),r=xa(N(q.visStart),v),J=m.map(o,f),M,k,D,Z,ja,ia,la=[];for(M=0;M<s;M++){k=ob(nb(o,J,r,xa(N(r),F-v)));vc(k);for(D=0;D<k.length;D++){Z=k[D];for(ja=0;ja<Z.length;ja++){ia=Z[ja];ia.col=M;ia.level=D;la.push(ia)}}ba(r,1,true)}return la}function f(o){return o.end?N(o.end):xa(N(o.start),u("defaultEventMinutes"))}function g(o,s){var v,F=o.length,r,J,M,k,D,Z,ja,ia,la,
$="",w,I,R={},V={},ea=pa(),aa;v=z();if(w=u("isRTL")){I=-1;aa=v-1}else{I=1;aa=0}for(v=0;v<F;v++){r=o[v];J=r.event;M=qa(r.start,r.start);k=qa(r.start,r.end);D=r.col;Z=r.level;ja=r.forward||0;ia=G(D*I+aa);la=p(D*I+aa)-ia;la=Math.min(la-6,la*0.95);D=Z?la/(Z+ja+1):ja?(la/(ja+1)-6)*2:la;Z=ia+la/(Z+ja+1)*Z*I+(w?la-D:0);r.top=M;r.left=Z;r.outerWidth=D;r.outerHeight=k-M;$+=l(J,r)}ea[0].innerHTML=$;w=ea.children();for(v=0;v<F;v++){r=o[v];J=r.event;$=m(w[v]);I=fa("eventRender",J,J,$);if(I===false)$.remove();
else{if(I&&I!==true){$.remove();$=m(I).css({position:"absolute",top:r.top,left:r.left}).appendTo(ea)}r.element=$;if(J._id===s)t(J,$,r);else $[0]._fci=v;ya(J,$)}}Db(ea,o,t);for(v=0;v<F;v++){r=o[v];if($=r.element){J=R[s=r.key=Ib($[0])];r.vsides=J===ma?(R[s]=Sa($,true)):J;J=V[s];r.hsides=J===ma?(V[s]=pb($,true)):J;s=$.find("div.fc-event-content");if(s.length)r.contentTop=s[0].offsetTop}}for(v=0;v<F;v++){r=o[v];if($=r.element){$[0].style.width=Math.max(0,r.outerWidth-r.hsides)+"px";R=Math.max(0,r.outerHeight-
r.vsides);$[0].style.height=R+"px";J=r.event;if(r.contentTop!==ma&&R-r.contentTop<10){$.find("div.fc-event-time").text(Y(J.start,u("timeFormat"))+" - "+J.title);$.find("div.fc-event-title").remove()}fa("eventAfterRender",J,J,$)}}}function l(o,s){var v="<",F=o.url,r=Jb(o,u),J=r?" style='"+r+"'":"",M=["fc-event","fc-event-skin","fc-event-vert"];oa(o)&&M.push("fc-event-draggable");s.isStart&&M.push("fc-corner-top");s.isEnd&&M.push("fc-corner-bottom");M=M.concat(o.className);if(o.source)M=M.concat(o.source.className||
[]);v+=F?"a href='"+Qa(o.url)+"'":"div";v+=" class='"+M.join(" ")+"' style='position:absolute;z-index:8;top:"+s.top+"px;left:"+s.left+"px;"+r+"'><div class='fc-event-inner fc-event-skin'"+J+"><div class='fc-event-head fc-event-skin'"+J+"><div class='fc-event-time'>"+Qa(W(o.start,o.end,u("timeFormat")))+"</div></div><div class='fc-event-content'><div class='fc-event-title'>"+Qa(o.title)+"</div></div><div class='fc-event-bg'></div></div>";if(s.isEnd&&ga(o))v+="<div class='ui-resizable-handle ui-resizable-s'>=</div>";
v+="</"+(F?"a":"div")+">";return v}function j(o,s,v){oa(o)&&y(o,s,v.isStart);v.isEnd&&ga(o)&&c(o,s,v);da(o,s)}function t(o,s,v){var F=s.find("div.fc-event-time");oa(o)&&S(o,s,F);v.isEnd&&ga(o)&&Q(o,s,F);da(o,s)}function y(o,s,v){function F(){if(!M){s.width(r).height("").draggable("option","grid",null);M=true}}var r,J,M=true,k,D=u("isRTL")?-1:1,Z=U(),ja=H(),ia=T(),la=ka();s.draggable({zIndex:9,opacity:u("dragOpacity","month"),revertDuration:u("dragRevertDuration"),start:function($,w){fa("eventDragStart",
s,o,$,w);i(o,s);r=s.width();Z.start(function(I,R,V,ea){B();if(I){J=false;k=ea*D;if(I.row)if(v){if(M){s.width(ja-10);Eb(s,ia*Math.round((o.end?(o.end-o.start)/wc:u("defaultEventMinutes"))/u("slotMinutes")));s.draggable("option","grid",[ja,1]);M=false}}else J=true;else{E(ba(N(o.start),k),ba(Ua(o),k));F()}J=J||M&&!k}else{F();J=true}s.draggable("option","revert",J)},$,"drag")},stop:function($,w){Z.stop();B();fa("eventDragStop",s,o,$,w);if(J){F();s.css("filter","");K(o,s)}else{var I=0;M||(I=Math.round((s.offset().top-
X().offset().top)/ia)*u("slotMinutes")+la-(o.start.getHours()*60+o.start.getMinutes()));C(this,o,k,I,M,$,w)}}})}function S(o,s,v){function F(I){var R=xa(N(o.start),I),V;if(o.end)V=xa(N(o.end),I);v.text(W(R,V,u("timeFormat")))}function r(){if(M){v.css("display","");s.draggable("option","grid",[$,w]);M=false}}var J,M=false,k,D,Z,ja=u("isRTL")?-1:1,ia=U(),la=z(),$=H(),w=T();s.draggable({zIndex:9,scroll:false,grid:[$,w],axis:la==1?"y":false,opacity:u("dragOpacity"),revertDuration:u("dragRevertDuration"),
start:function(I,R){fa("eventDragStart",s,o,I,R);i(o,s);J=s.position();D=Z=0;ia.start(function(V,ea,aa,va){s.draggable("option","revert",!V);B();if(V){k=va*ja;if(u("allDaySlot")&&!V.row){if(!M){M=true;v.hide();s.draggable("option","grid",null)}E(ba(N(o.start),k),ba(Ua(o),k))}else r()}},I,"drag")},drag:function(I,R){D=Math.round((R.position.top-J.top)/w)*u("slotMinutes");if(D!=Z){M||F(D);Z=D}},stop:function(I,R){var V=ia.stop();B();fa("eventDragStop",s,o,I,R);if(V&&(k||D||M))C(this,o,k,M?0:D,M,I,R);
else{r();s.css("filter","");s.css(J);F(0);K(o,s)}}})}function Q(o,s,v){var F,r,J=T();s.resizable({handles:{s:"div.ui-resizable-s"},grid:J,start:function(M,k){F=r=0;i(o,s);s.css("z-index",9);fa("eventResizeStart",this,o,M,k)},resize:function(M,k){F=Math.round((Math.max(J,s.height())-k.originalSize.height)/J);if(F!=r){v.text(W(o.start,!F&&!o.end?null:xa(ra(o),u("slotMinutes")*F),u("timeFormat")));r=F}},stop:function(M,k){fa("eventResizeStop",this,o,M,k);if(F)P(this,o,0,u("slotMinutes")*F,M,k);else{s.css("z-index",
8);K(o,s)}}})}var q=this;q.renderEvents=a;q.compileDaySegs=e;q.clearEvents=b;q.slotSegHtml=l;q.bindDaySeg=j;Qb.call(q);var u=q.opt,fa=q.trigger,oa=q.isEventDraggable,ga=q.isEventResizable,ra=q.eventEnd,sa=q.reportEvents,ha=q.reportEventClear,da=q.eventElementHandlers,na=q.setHeight,ua=q.getDaySegmentContainer,pa=q.getSlotSegmentContainer,U=q.getHoverListener,ca=q.getMaxMinute,ka=q.getMinMinute,qa=q.timePosition,G=q.colContentLeft,p=q.colContentRight,L=q.renderDaySegs,c=q.resizableDayEvent,z=q.getColCnt,
H=q.getColWidth,T=q.getSlotHeight,X=q.getBodyContent,ya=q.reportEventElement,K=q.showEvents,i=q.hideEvents,C=q.eventDrop,P=q.eventResize,E=q.renderDayOverlay,B=q.clearOverlays,n=q.calendar,Y=n.formatDate,W=n.formatDates}function vc(a){var b,e,d,f,g,l;for(b=a.length-1;b>0;b--){f=a[b];for(e=0;e<f.length;e++){g=f[e];for(d=0;d<a[b-1].length;d++){l=a[b-1][d];if(Cb(g,l))l.forward=Math.max(l.forward||0,(g.forward||0)+1)}}}}function Kb(a,b,e){function d(G,p){G=qa[G];if(typeof G=="object")return jb(G,p||e);
return G}function f(G,p){return b.trigger.apply(b,[G,p||da].concat(Array.prototype.slice.call(arguments,2),[da]))}function g(G){return j(G)&&!d("disableDragging")}function l(G){return j(G)&&!d("disableResizing")}function j(G){return Ta(G.editable,(G.source||{}).editable,d("editable"))}function t(G){U={};var p,L=G.length,c;for(p=0;p<L;p++){c=G[p];if(U[c._id])U[c._id].push(c);else U[c._id]=[c]}}function y(G){return G.end?N(G.end):na(G)}function S(G,p){ca.push(p);if(ka[G._id])ka[G._id].push(p);else ka[G._id]=
[p]}function Q(){ca=[];ka={}}function q(G,p){p.click(function(L){if(!p.hasClass("ui-draggable-dragging")&&!p.hasClass("ui-resizable-resizing"))return f("eventClick",this,G,L)}).hover(function(L){f("eventMouseover",this,G,L)},function(L){f("eventMouseout",this,G,L)})}function u(G,p){oa(G,p,"show")}function fa(G,p){oa(G,p,"hide")}function oa(G,p,L){G=ka[G._id];var c,z=G.length;for(c=0;c<z;c++)if(!p||G[c][0]!=p[0])G[c][L]()}function ga(G,p,L,c,z,H,T){var X=p.allDay,ya=p._id;sa(U[ya],L,c,z);f("eventDrop",
G,p,L,c,z,function(){sa(U[ya],-L,-c,X);pa(ya)},H,T);pa(ya)}function ra(G,p,L,c,z,H){var T=p._id;ha(U[T],L,c);f("eventResize",G,p,L,c,function(){ha(U[T],-L,-c);pa(T)},z,H);pa(T)}function sa(G,p,L,c){L=L||0;for(var z,H=G.length,T=0;T<H;T++){z=G[T];if(c!==ma)z.allDay=c;xa(ba(z.start,p,true),L);if(z.end)z.end=xa(ba(z.end,p,true),L);ua(z,qa)}}function ha(G,p,L){L=L||0;for(var c,z=G.length,H=0;H<z;H++){c=G[H];c.end=xa(ba(y(c),p,true),L);ua(c,qa)}}var da=this;da.element=a;da.calendar=b;da.name=e;da.opt=
d;da.trigger=f;da.isEventDraggable=g;da.isEventResizable=l;da.reportEvents=t;da.eventEnd=y;da.reportEventElement=S;da.reportEventClear=Q;da.eventElementHandlers=q;da.showEvents=u;da.hideEvents=fa;da.eventDrop=ga;da.eventResize=ra;var na=da.defaultEventEnd,ua=b.normalizeEvent,pa=b.reportEventChange,U={},ca=[],ka={},qa=b.options}function Qb(){function a(i,C){var P=z(),E=pa(),B=U(),n=0,Y,W,o=i.length,s,v;P[0].innerHTML=e(i);d(i,P.children());f(i);g(i,P,C);l(i);j(i);t(i);C=y();for(P=0;P<E;P++){Y=[];for(W=
0;W<B;W++)Y[W]=0;for(;n<o&&(s=i[n]).row==P;){W=Hb(Y.slice(s.startCol,s.endCol));s.top=W;W+=s.outerHeight;for(v=s.startCol;v<s.endCol;v++)Y[v]=W;n++}C[P].height(Hb(Y))}Q(i,S(C))}function b(i,C,P){var E=m("<div/>"),B=z(),n=i.length,Y;E[0].innerHTML=e(i);E=E.children();B.append(E);d(i,E);l(i);j(i);t(i);Q(i,S(y()));E=[];for(B=0;B<n;B++)if(Y=i[B].element){i[B].row===C&&Y.css("top",P);E.push(Y[0])}return m(E)}function e(i){var C=fa("isRTL"),P,E=i.length,B,n,Y,W;P=ka();var o=P.left,s=P.right,v,F,r,J,M,k=
"";for(P=0;P<E;P++){B=i[P];n=B.event;W=["fc-event","fc-event-skin","fc-event-hori"];ga(n)&&W.push("fc-event-draggable");if(C){B.isStart&&W.push("fc-corner-right");B.isEnd&&W.push("fc-corner-left");v=p(B.end.getDay()-1);F=p(B.start.getDay());r=B.isEnd?qa(v):o;J=B.isStart?G(F):s}else{B.isStart&&W.push("fc-corner-left");B.isEnd&&W.push("fc-corner-right");v=p(B.start.getDay());F=p(B.end.getDay()-1);r=B.isStart?qa(v):o;J=B.isEnd?G(F):s}W=W.concat(n.className);if(n.source)W=W.concat(n.source.className||
[]);Y=n.url;M=Jb(n,fa);k+=Y?"<a href='"+Qa(Y)+"'":"<div";k+=" class='"+W.join(" ")+"' style='position:absolute;z-index:8;left:"+r+"px;"+M+"'><div class='fc-event-inner fc-event-skin'"+(M?" style='"+M+"'":"")+">";if(!n.allDay&&B.isStart)k+="<span class='fc-event-time'>"+Qa(T(n.start,n.end,fa("timeFormat")))+"</span>";k+="<span class='fc-event-title'>"+Qa(n.title)+"</span></div>";if(B.isEnd&&ra(n))k+="<div class='ui-resizable-handle ui-resizable-"+(C?"w":"e")+"'>&nbsp;&nbsp;&nbsp;</div>";k+="</"+(Y?
"a":"div")+">";B.left=r;B.outerWidth=J-r;B.startCol=v;B.endCol=F+1}return k}function d(i,C){var P,E=i.length,B,n,Y;for(P=0;P<E;P++){B=i[P];n=B.event;Y=m(C[P]);n=oa("eventRender",n,n,Y);if(n===false)Y.remove();else{if(n&&n!==true){n=m(n).css({position:"absolute",left:B.left});Y.replaceWith(n);Y=n}B.element=Y}}}function f(i){var C,P=i.length,E,B;for(C=0;C<P;C++){E=i[C];(B=E.element)&&ha(E.event,B)}}function g(i,C,P){var E,B=i.length,n,Y,W;for(E=0;E<B;E++){n=i[E];if(Y=n.element){W=n.event;if(W._id===
P)H(W,Y,n);else Y[0]._fci=E}}Db(C,i,H)}function l(i){var C,P=i.length,E,B,n,Y,W={};for(C=0;C<P;C++){E=i[C];if(B=E.element){n=E.key=Ib(B[0]);Y=W[n];if(Y===ma)Y=W[n]=pb(B,true);E.hsides=Y}}}function j(i){var C,P=i.length,E,B;for(C=0;C<P;C++){E=i[C];if(B=E.element)B[0].style.width=Math.max(0,E.outerWidth-E.hsides)+"px"}}function t(i){var C,P=i.length,E,B,n,Y,W={};for(C=0;C<P;C++){E=i[C];if(B=E.element){n=E.key;Y=W[n];if(Y===ma)Y=W[n]=Fb(B);E.outerHeight=B[0].offsetHeight+Y}}}function y(){var i,C=pa(),
P=[];for(i=0;i<C;i++)P[i]=ca(i).find("td:first div.fc-day-content > div");return P}function S(i){var C,P=i.length,E=[];for(C=0;C<P;C++)E[C]=i[C][0].offsetTop;return E}function Q(i,C){var P,E=i.length,B,n;for(P=0;P<E;P++){B=i[P];if(n=B.element){n[0].style.top=C[B.row]+(B.top||0)+"px";B=B.event;oa("eventAfterRender",B,B,n)}}}function q(i,C,P){var E=fa("isRTL"),B=E?"w":"e",n=C.find("div.ui-resizable-"+B),Y=false;qb(C);C.mousedown(function(W){W.preventDefault()}).click(function(W){if(Y){W.preventDefault();
W.stopImmediatePropagation()}});n.mousedown(function(W){function o(ia){oa("eventResizeStop",this,i,ia);m("body").css("cursor","");s.stop();ya();k&&ua(this,i,k,0,ia);setTimeout(function(){Y=false},0)}if(W.which==1){Y=true;var s=u.getHoverListener(),v=pa(),F=U(),r=E?-1:1,J=E?F-1:0,M=C.css("top"),k,D,Z=m.extend({},i),ja=L(i.start);K();m("body").css("cursor",B+"-resize").one("mouseup",o);oa("eventResizeStart",this,i,W);s.start(function(ia,la){if(ia){var $=Math.max(ja.row,ia.row);ia=ia.col;if(v==1)$=0;
if($==ja.row)ia=E?Math.min(ja.col,ia):Math.max(ja.col,ia);k=$*7+ia*r+J-(la.row*7+la.col*r+J);la=ba(sa(i),k,true);if(k){Z.end=la;$=D;D=b(c([Z]),P.row,M);D.find("*").css("cursor",B+"-resize");$&&$.remove();na(i)}else if(D){da(i);D.remove();D=null}ya();X(i.start,ba(N(la),1))}},W)}})}var u=this;u.renderDaySegs=a;u.resizableDayEvent=q;var fa=u.opt,oa=u.trigger,ga=u.isEventDraggable,ra=u.isEventResizable,sa=u.eventEnd,ha=u.reportEventElement,da=u.showEvents,na=u.hideEvents,ua=u.eventResize,pa=u.getRowCnt,
U=u.getColCnt,ca=u.allDayRow,ka=u.allDayBounds,qa=u.colContentLeft,G=u.colContentRight,p=u.dayOfWeekCol,L=u.dateCell,c=u.compileDaySegs,z=u.getDaySegmentContainer,H=u.bindDaySeg,T=u.calendar.formatDates,X=u.renderDayOverlay,ya=u.clearOverlays,K=u.clearSelection}function Mb(){function a(Q,q,u){b();q||(q=j(Q,u));t(Q,q,u);e(Q,q,u)}function b(Q){if(S){S=false;y();l("unselect",null,Q)}}function e(Q,q,u,fa){S=true;l("select",null,Q,q,u,fa)}function d(Q){var q=f.cellDate,u=f.cellIsAllDay,fa=f.getHoverListener(),
oa=f.reportDayClick;if(Q.which==1&&g("selectable")){b(Q);var ga;fa.start(function(ra,sa){y();if(ra&&u(ra)){ga=[q(sa),q(ra)].sort(Gb);t(ga[0],ga[1],true)}else ga=null},Q);m(document).one("mouseup",function(ra){fa.stop();if(ga){+ga[0]==+ga[1]&&oa(ga[0],true,ra);e(ga[0],ga[1],true,ra)}})}}var f=this;f.select=a;f.unselect=b;f.reportSelection=e;f.daySelectionMousedown=d;var g=f.opt,l=f.trigger,j=f.defaultSelectionEnd,t=f.renderSelection,y=f.clearSelection,S=false;g("selectable")&&g("unselectAuto")&&m(document).mousedown(function(Q){var q=
g("unselectCancel");if(q)if(m(Q.target).parents(q).length)return;b(Q)})}function Lb(){function a(g,l){var j=f.shift();j||(j=m("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>"));j[0].parentNode!=l[0]&&j.appendTo(l);d.push(j.css(g).show());return j}function b(){for(var g;g=d.shift();)f.push(g.hide().unbind())}var e=this;e.renderOverlay=a;e.clearOverlays=b;var d=[],f=[]}function Nb(a){var b=this,e,d;b.build=function(){e=[];d=[];a(e,d)};b.cell=function(f,g){var l=e.length,j=d.length,
t,y=-1,S=-1;for(t=0;t<l;t++)if(g>=e[t][0]&&g<e[t][1]){y=t;break}for(t=0;t<j;t++)if(f>=d[t][0]&&f<d[t][1]){S=t;break}return y>=0&&S>=0?{row:y,col:S}:null};b.rect=function(f,g,l,j,t){t=t.offset();return{top:e[f][0]-t.top,left:d[g][0]-t.left,width:d[j][1]-d[g][0],height:e[l][1]-e[f][0]}}}function Ob(a){function b(j){xc(j);j=a.cell(j.pageX,j.pageY);if(!j!=!l||j&&(j.row!=l.row||j.col!=l.col)){if(j){g||(g=j);f(j,g,j.row-g.row,j.col-g.col)}else f(j,g);l=j}}var e=this,d,f,g,l;e.start=function(j,t,y){f=j;
g=l=null;a.build();b(t);d=y||"mousemove";m(document).bind(d,b)};e.stop=function(){m(document).unbind(d,b);return l}}function xc(a){if(a.pageX===ma){a.pageX=a.originalEvent.pageX;a.pageY=a.originalEvent.pageY}}function Pb(a){function b(l){return d[l]=d[l]||a(l)}var e=this,d={},f={},g={};e.left=function(l){return f[l]=f[l]===ma?b(l).position().left:f[l]};e.right=function(l){return g[l]=g[l]===ma?e.left(l)+b(l).width():g[l]};e.clear=function(){d={};f={};g={}}}var Ya={defaultView:"month",aspectRatio:1.35,
header:{left:"title",center:"",right:"today prev,next"},weekends:true,allDayDefault:true,ignoreTimezone:true,lazyFetching:true,startParam:"start",endParam:"end",titleFormat:{month:"MMMM yyyy",week:"MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",day:"dddd, MMM d, yyyy"},columnFormat:{month:"ddd",week:"ddd M/d",day:"dddd M/d"},timeFormat:{"":"h(:mm)t"},isRTL:false,firstDay:0,monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan",
"Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],buttonText:{prev:"&nbsp;&#9668;&nbsp;",next:"&nbsp;&#9658;&nbsp;",prevYear:"&nbsp;&lt;&lt;&nbsp;",nextYear:"&nbsp;&gt;&gt;&nbsp;",today:"today",month:"month",week:"week",day:"day"},theme:false,buttonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e"},unselectAuto:true,dropAccept:"*"},yc=
{header:{left:"next,prev today",center:"",right:"title"},buttonText:{prev:"&nbsp;&#9658;&nbsp;",next:"&nbsp;&#9668;&nbsp;",prevYear:"&nbsp;&gt;&gt;&nbsp;",nextYear:"&nbsp;&lt;&lt;&nbsp;"},buttonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w"}},Aa=m.fullCalendar={version:"1.5.4"},Ja=Aa.views={};m.fn.fullCalendar=function(a){if(typeof a=="string"){var b=Array.prototype.slice.call(arguments,1),e;this.each(function(){var f=m.data(this,"fullCalendar");if(f&&m.isFunction(f[a])){f=f[a].apply(f,
b);if(e===ma)e=f;a=="destroy"&&m.removeData(this,"fullCalendar")}});if(e!==ma)return e;return this}var d=a.eventSources||[];delete a.eventSources;if(a.events){d.push(a.events);delete a.events}a=m.extend(true,{},Ya,a.isRTL||a.isRTL===ma&&Ya.isRTL?yc:{},a);this.each(function(f,g){f=m(g);g=new Yb(f,a,d);f.data("fullCalendar",g);g.render()});return this};Aa.sourceNormalizers=[];Aa.sourceFetchers=[];var ac={dataType:"json",cache:false},bc=1;Aa.addDays=ba;Aa.cloneDate=N;Aa.parseDate=kb;Aa.parseISO8601=
Bb;Aa.parseTime=mb;Aa.formatDate=Oa;Aa.formatDates=ib;var lc=["sun","mon","tue","wed","thu","fri","sat"],Ab=864E5,cc=36E5,wc=6E4,dc={s:function(a){return a.getSeconds()},ss:function(a){return Pa(a.getSeconds())},m:function(a){return a.getMinutes()},mm:function(a){return Pa(a.getMinutes())},h:function(a){return a.getHours()%12||12},hh:function(a){return Pa(a.getHours()%12||12)},H:function(a){return a.getHours()},HH:function(a){return Pa(a.getHours())},d:function(a){return a.getDate()},dd:function(a){return Pa(a.getDate())},
ddd:function(a,b){return b.dayNamesShort[a.getDay()]},dddd:function(a,b){return b.dayNames[a.getDay()]},M:function(a){return a.getMonth()+1},MM:function(a){return Pa(a.getMonth()+1)},MMM:function(a,b){return b.monthNamesShort[a.getMonth()]},MMMM:function(a,b){return b.monthNames[a.getMonth()]},yy:function(a){return(a.getFullYear()+"").substring(2)},yyyy:function(a){return a.getFullYear()},t:function(a){return a.getHours()<12?"a":"p"},tt:function(a){return a.getHours()<12?"am":"pm"},T:function(a){return a.getHours()<
12?"A":"P"},TT:function(a){return a.getHours()<12?"AM":"PM"},u:function(a){return Oa(a,"yyyy-MM-dd'T'HH:mm:ss'Z'")},S:function(a){a=a.getDate();if(a>10&&a<20)return"th";return["st","nd","rd"][a%10-1]||"th"}};Aa.applyAll=$a;Ja.month=mc;Ja.basicWeek=nc;Ja.basicDay=oc;wb({weekMode:"fixed"});Ja.agendaWeek=qc;Ja.agendaDay=rc;wb({allDaySlot:true,allDayText:"all-day",firstHour:6,slotMinutes:30,defaultEventMinutes:120,axisFormat:"h(:mm)tt",timeFormat:{agenda:"h:mm{ - h:mm}"},dragOpacity:{agenda:0.5},minTime:0,
maxTime:24})})(jQuery);
;// See additional plugins in Scripts/plugins

//
// exists, checks if the DOM element is present
//
(function ($) {
    $.fn.extend({
        exists: function () {
            return $(this).length > 0;
        }
    });
}(jQuery));;(function($) {
    var requests = {};
    function Cache() {
        var pageCache = {};
        var hasLocalStorage = Modernizr.localstorage;
        var localCacheType = "local";
        var isDisabled = false;
        
        this.getItem = function (key, cacheType) {
            if (isDisabled) return null;
            
            if (hasLocalStorage && cacheType === localCacheType)
                return localStorage.getItem(key);

            return pageCache[key];
        };

        this.setItem = function (key, value, cacheType) {
            if (isDisabled) return;

            if (hasLocalStorage && cacheType === localCacheType) {
                localStorage.setItem(key, value);
            }
            else {
                pageCache[key] = value;
            }
        };

        this.removeItem = function (key, cacheType) {
            if (isDisabled) return;

            if (hasLocalStorage && cacheType === localCacheType) {
                localStorage.removeItem(key);
            }
            else {
                delete pageCache[key];
            }
        };

        this.clear = function () {
            pageCache = {};
            if (hasLocalStorage) {
                localStorage.clear();
            }
        };
    }

    var cache = new Cache();

    $.extend({ getCachedJSON: getCachedJSON });

    $.extend({
        removeCachedJSON: function (url, cacheType) {
            cacheType = cacheType || "local";
            
            cache.removeItem(url, cacheType);
            cache.removeItem(url + 'cachettl', cacheType);
        }
    });

    $.extend({
        clearCachedJSON: function () {
            cache.clear();
        }
    });

    function getCachedJSON(url, success, cacheType) {
        var request = buildRequest({
            url: url,
            dataType: 'json',
            cache: false,
            cacheType: cacheType || "local",
            cacheKey: url,
            cacheTTL: 1
        });
        request.done(success);
        return request;
    }

    function buildRequest(options) {
        var cacheKey = options.cacheKey;
        var cachedValue = getCachedValue(options);
        if (cachedValue) {
            var cachedRequest = new $.Deferred();
            cachedRequest.resolve(cachedValue);
            return cachedRequest;
        }

        var activeRequest = requests[cacheKey];
        if (activeRequest) {
            return activeRequest;
        }
        
        var request = $.ajax(options);
        requests[cacheKey] = request;
        request.done(function (data) { setCachedValue(options, data); });
        request.done(function() { delete requests[cacheKey]; });
        return request;
    }

    function getCachedValue(options) {
        var cacheKey = options.cacheKey;
        var cacheType = options.cacheType;

        // if there's a TTL that's expired, flush this item
        var ttl = cache.getItem(cacheKey + 'cachettl', cacheType);
        if (ttl && ttl < +new Date()) {
            cache.removeItem(cacheKey, cacheType);
            cache.removeItem(cacheKey + 'cachettl', cacheType);
        }

        var value = cache.getItem(cacheKey, cacheType);
        if (!piecharts.isUndefined(value)) {
            try {
                // If it is json, hydrate it
                if (options.dataType.indexOf('json') === 0) {
                    return JSON.parse(value);
                }
            } catch(parseError) {
                console.log("localStorage['" + cacheKey + "'] had corrupt json");
            }
        }

        return value;
    }

    function setCachedValue(options, data) {
        var cacheKey = options.cacheKey;
        var hourstl = options.cacheTTL || 5;
        var strdata = JSON.stringify(data);

        // Save the data to localStorage catching exceptions (possibly QUOTA_EXCEEDED_ERR)
        try {
            cache.setItem(cacheKey, strdata, options.cacheType);
            cache.setItem(cacheKey + 'cachettl', +new Date() + 1000 * 60 * 60 * hourstl, options.cacheType);
        } catch(cacheError) {
            // Remove any incomplete data that may have been saved before the exception was caught
            cache.removeItem(cacheKey, options.cacheType);
            cache.removeItem(cacheKey + 'cachettl', options.cacheType);

            if (options.cacheError) {
                options.cacheError(cacheError, cacheKey, strdata);
            }
        }
    }
}(jQuery));;(function($) {
    $.extend({
        sendJSON: function (type, url, data) {
            return $.ajax({
                type: type,
                url: url,
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            });
        }
    });
}(jQuery));;//
// errorMessage, jQuery plug-in, errorMessage(options) that will style a div using the jQuery UI error theme
//
(function ($) {
    $.fn.errorMessage = function (options) {
        var defaults = {
            css: ""
        };
        options = $.extend(defaults, options);

        return this.each(function() {

            var input = $(this);

            var contents = input.contents();
            
            input.addClass("ui-widget jquery-message");
            input.addClass(options.css);

            var container = $('<div class="ui-state-error ui-corner-all"></div>');
            input.prepend(container);

            var message = $('<p><span class="ui-icon ui-icon-alert"></span></p>');
            container.append(message);
            message.append(contents);
        });
    };
})(jQuery);

//
// highlightMessage, jQuery plug-in, highlightMessage(options) that will style a div using the jQuery UI highlight theme
//
(function ($) {
    $.fn.highlightMessage = function (options) {
        var defaults = {
            css: ""
        };
        options = $.extend(defaults, options);

        return this.each(function () {

            var input = $(this);

            var contents = input.contents();

            input.addClass("ui-widget jquery-message");
            input.addClass(options.css);

            var container = $('<div class="ui-state-highlight ui-corner-all"></div>');
            input.prepend(container);

            var message = $('<p><span class="ui-icon ui-icon-alert"></span></p>');
            container.append(message);
            message.append(contents);
        });
    };
})(jQuery);

//(function ($) {
//    $.fn.highlightMessage = function (options) {
//        var defaults = {
//            css: ""
//        };
//        options = $.extend(defaults, options);

//        return this.each(function () {

//            var input = $(this);
//            input.addClass(options.css);

//            input.addClass('ui-state-highlight ui-corner-all');
//            input.html('<p><span class="ui-icon ui-icon-alert" style="float: left; margin-right:.3em;"></span>' + input.html() + '</p>');
//        });
//    };
//})(jQuery);;//
// styleTable, jQuery plug-in, styleTable(options) that will style an HTML table using the jQuery UI theme
//
(function ($) {
    $.fn.styleTable = function (options) {
        var defaults = {
            css: "jquery-table jquery-ui-table",
            rowHover: true
        };
        options = $.extend(defaults, options);

        return this.each(function () {

            var input = $(this);
            input.addClass(options.css);

            if (options.rowHover) {
                input.find("tr").live('mouseover mouseout', function(event) {
                    if (event.type === 'mouseover') {
                        $(this).children("td").addClass("ui-state-hover");
                    } else {
                        $(this).children("td").removeClass("ui-state-hover");
                    }
                });
            }
            
            input.find("th").addClass("ui-state-default");
            input.find(".group td").addClass("ui-state-active");
            input.find("td").addClass("ui-widget-content");

            input.find("tr").each(function () {
                $(this).children("td:not(:first)").addClass("first");
                $(this).children("th:not(:first)").addClass("first");
            });
        });
    };
})(jQuery);;// http://stackoverflow.com/questions/10337429/cant-disable-jqueryui-button-with-knockoutjs-in-chrome
ko.bindingHandlers.button = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var button = $(element);
        var options = valueAccessor();
        if (button.hasClass("ui-button")) {
            button.button("destroy");
        }

        button.button(options);
    },
    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var value = ko.utils.unwrapObservable(valueAccessor());

        if (typeof value.disabled !== "undefined") {
            var disabled = ko.utils.unwrapObservable(value.disabled);
            $(element).button("option", "disabled", disabled);
        }
    }
};;// https://github.com/SteveSanderson/knockout/wiki/Bindings---class
ko.bindingHandlers['class'] = {
    'update': function (element, valueAccessor) {
        if (element['__ko__previousClassValue__']) {
            $(element).removeClass(element['__ko__previousClassValue__']);
        }
        var value = ko.utils.unwrapObservable(valueAccessor());
        $(element).addClass(value);
        element['__ko__previousClassValue__'] = value;
    }
};;//
// combobox select list binding: Knockout.js / Select2
// https://github.com/ivaynberg/select2/wiki/Knockout.js-Integration
//
ko.bindingHandlers.combobox = {
    init: function (element, valueAccessor) {
        var options = {
            width: "resolve",
            placeholder: "Select...",
            id: function(option) { return option.Id; },
            createSearchChoice: addInvalidOption,
            initSelection: mapIdToObject // Allows setting the value of the select box programmatically
        };
        $.extend(options, valueAccessor());
        $(element).select2(options);
        
        if (valueAccessor().value) {
            ko.utils.registerEventHandler(element, "change", updateObservable);
        }
        
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            $(element).select2("destroy");
        });

        function updateObservable() {
            var target = valueAccessor().value;
            var value = $(element).select2("val");
            value = parseId(value);
                
            target(value);
        }
        
        function addInvalidOption(term, data) {
            var isInvalidOption = $(data).filter(function() { return this.text.localeCompare(term) === 0; }).length === 0;
            if (isInvalidOption) {
                return { Id: term, text: term };
            }
        }

        function mapIdToObject(element, callback) {
            var data = valueAccessor().data;
            var value = $(element).val();
            var result = ko.utils.arrayFirst(data, function (item) { return item.Id === parseId(value); });
            
            callback(result);
        }
        
        function parseId(id) {
            return parseInt(id) || id || null;
        }
    },
    update: function (element, valueAccessor) {
        if (valueAccessor().value) {
            var value = valueAccessor().value();
            value = (value || "").toString();
            
            var currentValue = $(element).select2("val");

            if (currentValue !== value) {
                $(element).select2("val", value);
            }
        } else {
            $(element).trigger("change");
        }
    }
};

//
// tag list binding: Knockout.js / Select2
// https://github.com/ivaynberg/select2/wiki/Knockout.js-Integration
//
ko.bindingHandlers.tags = {
    init: function (element, valueAccessor) {
        var options = {
            width: "resolve",
            placeholder: "Enter a tag...",
            tags: [],
            separator: "|",
            tokenSeparators: ["|"]
        };
        $.extend(options, valueAccessor());
        $(element).select2(options);

        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            $(element).select2("destroy");
        });
    },
    update: function (element) {
        $(element).trigger("change");
    }
};;//
// datepicker binding: Knockout.js / jQuery UI DatePicker databinding
//
ko.bindingHandlers.datepicker = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        //initialize datepicker with some optional options
        var options = allBindingsAccessor().datepickerOptions || {};
        if (!$(element).hasClass("hasDatepicker")) {
            $(element).datepicker(options);
        }

        //handle the field changing
        ko.utils.registerEventHandler(element, "change", function () {
            var observable = valueAccessor();
            var dateStr = $(element).val();
            var date = Date.parse(dateStr) || new Date();
            observable(date);
            if (observable() !== date)
                console.log("Could not save date");
        });

        //handle disposal (if KO removes by the template binding)
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            $(element).datepicker("destroy");
        });
    },
    update: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        var date = value || new Date();
        date = date.toString("M/d/yyyy");
        $(element).val(date);
        $(element).datepicker("setDate", date);
    }
};;//
// dialog binding: Knockout.js
// Allows binding a div to a jQuery UI Dialog
//
ko.bindingHandlers.dialog = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var dialog = $(element);
        var dialogId = dialog.prop("id");
        
        var value = ko.utils.unwrapObservable(valueAccessor());

        var dialogButtons = {};
        
        if (value.remove) {
            // wrap calls to control the arguments passed, i.e. I don't want any passed to these methods
            
            dialogButtons["Delete"] = { id: dialogId + "-dialog-delete", text: "Delete", click: function() { value.remove(); } };
        }

        dialogButtons.Save = { id: dialogId + "-dialog-save", text: "Save", click: function () { value.save(); } };
        dialogButtons.Cancel = { id: dialogId + "-dialog-cancel", text: "Cancel", click: function () { value.cancel(); } };

        dialog.dialog({
            autoOpen: false,
            width: "auto",
            modal: true,
            buttons: dialogButtons,
            close: function () {
                value.isOpen(false); // keep the observable state in-sync when the user force closes the dialog
            }
        });

        value.isOpen.subscribe(function (open) {
            if(open) {
                dialog.dialog("open");
            }else {
                dialog.dialog("close");
            }
        });
        
        ko.bindingHandlers.value.init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
    }
};;//
// toJSWith : Knockout.Mapping.js
//
ko.mapping.toJSWith = function (item, include) {
    var unpacked = new Lookup();
    
    var js = unpackModel(item, {});

    if (include) {
        for (var jsProp in js) {
            if (include.indexOf(jsProp) < 0) {
                delete js[jsProp];
            }
        }
    }
    
    return js;
    
    function unpackModel(source, target) {
        if (source instanceof Array) {
            for (var i = 0; i < source.length; i++) {
                unpackProperty(source, i, target);
            }
        } else if(typeof source === "object") {
            for (var prop in source) {
                unpackProperty(source, prop, target);
            }
        }

        return target;
    }
    
    function unpackProperty(source, prop, target) {
        var sourceProp = source[prop];

        var existingMapping = unpacked.get(sourceProp);
        if (existingMapping) {
            targetValue = existingMapping;
        } else {
            var sourceValue = ko.utils.unwrapObservable(sourceProp);
            var targetValue;

            if (!sourceValue) {
                targetValue = null;
            } else if (sourceValue instanceof Date) {
                targetValue = sourceValue.toLocalISOString();
            } else if (typeof sourceValue.toJSON === "function") {
                targetValue = sourceValue.toJSON();
            } else {
                if (sourceValue instanceof Array) {
                    targetValue = [];
                } else if (typeof sourceValue === "object") {
                    targetValue = {};
                } else {
                    targetValue = sourceValue;
                }

                unpackModel(sourceValue, targetValue);
            }
        }

        target[prop] = targetValue;
        unpacked.set(sourceProp, targetValue);
    }
    
    function Lookup() {
        var keys = [];
        var values = [];

        this.get = function(key) {
            var i = keys.indexOf(key);
            return values[i];
        };

        this.set = function(key, value) {
            var i = keys.indexOf(key);
            if (i < 0) {
                keys.push(key);
                values.push(value);
            } else {
                values[i] = value;
            }
        };
    }
};

;// https://groups.google.com/forum/?fromgroups=#!topic/knockoutjs/747ftD1FxMw
ko.bindingHandlers.stopBinding = {
    init: function () {
        return { 'controlsDescendantBindings': true };
    }
};

ko.virtualElements.allowedBindings.stopBinding = true;
;ko.utils.contains = function(items, predicate) {
    var item = ko.utils.arrayFirst(items, function (x) {
        return predicate(x);
    });

    return item !== null;
};;window.piecharts = window.piecharts || {};
window.piecharts.context = window.piecharts.context || {};
window.piecharts.templates = window.piecharts.templates || {};;piecharts.ErrorService = function ErrorService() {
    var self = this;

    window.onerror = reportUncaughtError;

    function reportUncaughtError(error, script, line) {
        if (!shouldReportError(script))
            return false;

        var errorReport = {
            Message: error,
            Script: script,
            Line: line,
            Page: window.location.href,
            Browser: {
                Name: window.navigator.appCodeName,
                Version: $.browser.version,
                UserAgent: window.navigator.userAgent,
                JavascriptVersion: window.javascriptVersion,
                IsSupported: window.isBrowserSupported
            }
        };

        self.reportError(errorReport);
        return false;
    }

    function shouldReportError(error, script) {
        if (script) {
            // Ignore firebug errors
            if (script.indexOf("firebug") !== -1)
                return false;

            // Ignore errors from firefox plugins
            if (script.indexOf("resource://") !== -1)
                return false;
        }
        return true;
    }

    this.reportError = function(errorReport) {
        console.log("Sending error report:");
        console.log(errorReport);

        return $.sendJSON("POST", "/api/ReportError", errorReport);
    };
};

piecharts.errorService = new piecharts.ErrorService();;piecharts.ConsumableAutocomplete = function ConsumableAutocomplete() {

    this.autocomplete = function(textbox, consumableSelectedCallback, minLength, autoFocus) {
        if (!$(textbox).exists())
            return;
        
        minLength = piecharts.isUndefined(minLength) ? 2 : minLength;
        autoFocus = piecharts.isUndefined(autoFocus) ? false : autoFocus;

        // when any matching element which does not already have an autocomplete applied is focused, add the autocomplete
        $(document).on("focus", textbox + ":not(.ui-autocomplete-input)", function() {
            var textbox = $(this);
            textbox.autocomplete({
                source: function(request, callback) { retrieveConsumables(request, callback, textbox); },
                select: function(event, ui) { consumableSelected(event, ui.item, textbox, consumableSelectedCallback); },
                minLength: minLength,
                autoFocus: autoFocus,
                delay: 1000
            }).data("autocomplete")._renderItem = renderOption;
        });
    };

    function renderOption(ul, item) {
        var mineIcon = '<div class="ui-icon ui-icon-star my-food-icon" title="This is a food that you created"></div>';
        var loggedIcon = '<div class="ui-icon ui-icon-heart logged-food-icon" title="This is a food that you have logged before"></div>';
        
        var result = item.label;

        if (item.isMine)
            result += mineIcon;

        if (item.hasLogged)
            result += loggedIcon;

        return $("<li>")
            .data("item.autocomplete", item)
            .append("<a>" + result + "</a>")
            .appendTo(ul);
    }

    function retrieveConsumables(request, callback, textbox) {
        textbox.removeClass("ui-autocomplete-selected");
        
        var url = "/api/Consumable/Search?name=" + request.term.trim();

        $.getCachedJSON(url, function (json) { buildConsumablesList(callback, json); }, "page");
    }

    function buildConsumablesList(callback, json) {
        var consumables = [];
        for (var i = 0; i < json.length; i++) {
            var consumable = { value: json[i].Uri, label: json[i].DisplayName, hasLogged: json[i].HasLogged, isMine: json[i].IsMine };
            consumables.push(consumable);
        }
        callback(consumables);
    }

    function consumableSelected(event, item, textbox, consumableSelectedCallback) {
        // Retrieve the definition
        var url = item.value;

        var request = $.getCachedJSON(url, null, "page")
            .pipe(piecharts.Consumable.fromJSON);
        
        request.done(function (consumable) {
            textbox.addClass("ui-autocomplete-selected");
            consumableSelectedCallback(textbox, consumable);
        });

        // Do not update the textbox value with the id
        event.preventDefault();

        return false;
    }
};

piecharts.FoodLogConsumableSelector = function FoodLogConsumableSelector() {
    var input;
    var selectConsumable;
    var selectFoodLog;
    
    this.bind = function (inputSelector, consumableSelectedCallback, foodLogSelectedCallback) {
        if (!$(inputSelector).exists())
            return;
        
        selectConsumable = consumableSelectedCallback;
        selectFoodLog = foodLogSelectedCallback;

        $(document).ready(function() {
            input = $(inputSelector);

            input.autocomplete({
                source: function(request, callback) { retrieveOptions(request, callback); },
                select: function(event, ui) { itemSelected(event, ui.item); },
                minLength: 0,
                delay: 1000
            }).data("autocomplete")._renderItem = renderOption;
        });
    };

    this.showFoodLogSuggestions = function () {
        input.autocomplete("search", "");
    };
    
    function renderOption(ul, item) {
        var mineIcon = '<div class="ui-icon ui-icon-star my-food-icon" title="This is a food that you created"></div>';
        var loggedIcon = '<div class="ui-icon ui-icon-heart logged-food-icon" title="This is a food that you have logged before"></div>';

        var result = item.label;

        if (item.isMine)
            result += mineIcon;

        if (item.hasLogged)
            result += loggedIcon;

        return $("<li>")
            .data("item.autocomplete", item)
            .append("<a>" + result + "</a>")
            .appendTo(ul);
    }

    function retrieveOptions(request, callback) {
        input.removeClass("ui-autocomplete-selected");

        var query = request.term.trim();
        if (query) {
            retrieveConsumables(query, callback);
        } else {
            retrieveSuggestedFoodLogs(callback);
        }
    }

    function retrieveConsumables(query, callback) {
        var url = "/api/Consumable/Search?name=" + query;
        $.getCachedJSON(url, function(json) { buildConsumablesList(callback, json); }, "page");
    }

    function retrieveSuggestedFoodLogs(callback) {
        var url = "/api/FoodLog/Suggestions";

        $.getCachedJSON(url, function(json) { buildFoodLogList(callback, json); }, "page");
    }

    function buildConsumablesList(callback, json) {
        var consumables = [];
        for (var i = 0; i < json.length; i++) {
            var consumable = { type: 'Consumable', value: json[i].Uri, label: json[i].DisplayName, hasLogged: json[i].HasLogged, isMine: json[i].IsMine };
            consumables.push(consumable);
        }
        callback(consumables);
    }

    function buildFoodLogList(callback, json) {
        var logs = [];
        for (var i = 0; i < json.length; i++) {
            var log = { type: 'Log', value: json[i].Id, label: json[i].Consumable.DisplayName, log: json[i], hasLogged: json[i].HasLogged, isMine: json[i].IsMine };
            logs.push(log);
        }
        callback(logs);
    }

    function itemSelected(event, item) {
        switch (item.type) {
            case "Consumable":
                consumableSelected(event, item);
                break;
            case "Log":
                foodLogSelected(event, item);
                break;
        }
    }

    function consumableSelected(event, item) {
        // Retrieve the definition
        var url = item.value;

        var request = $.getCachedJSON(url, null, "page")
            .pipe(piecharts.Consumable.fromJSON);

        request.done(function (consumable) {
            input.addClass("ui-autocomplete-selected");
            selectConsumable(input, consumable);
        });

        // Do not update the textbox value with the id
        event.preventDefault();

        return false;
    }
    
    function foodLogSelected(event, item) {
        // Retrieve the definition
        var log = piecharts.FoodLog.fromJSON(item.log);

        input.addClass("ui-autocomplete-selected");
        selectFoodLog(log);

        // Do not update the textbox value with the id
        event.preventDefault();

        return false;
    }
};;piecharts.displayMacronutrientPieChart = function (piechart, protein, fat, carb) {
    piechart.show();
    var data = [
        { label: "Protein", data: protein, color: '#6D7E51' },
        { label: "Fat", data: fat, color: '#3C4258' },
        { label: "Carb", data: carb, color: '#775153' }];

    var backgroundColor = $("html").css("background-color");
    var transparent = piecharts.RgbToHex(backgroundColor);
    
    $.plot(piechart, data,
        {
            series:
                {
                    pie:
                        {
                            show: true,
                            radius: 1,
                            startAngle: 2,
                            stroke: { color: transparent, width: '4' },
                            label: {
                                show: true,
                                radius: .8,
                                formatter: function(label, series) {
                                    return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;white-space:nowrap">' + label + ': ' + Math.round(series.percent) + '%</div>';
                                },
                                background: { opacity: 0.5, color: '#2D2D2D' }
                            }
                        }
                },
            legend: { show: false }
        });
};$(document).ready(function () {   
    $(".toggleNextOnClick").click(function () {
        $(this).next().toggle();
    });

    $("input:submit").button();
    $("button").button();
    $("a.button").button();
    $(".date").datepicker({
        dateFormat: "m/d/yy",
        showOtherMonths: true,
        selectOtherMonths: true
    });
    $(".jquery-table").not(".jquery-ui-table").styleTable();
    $(".jquery-error").errorMessage();
    $(".jquery-highlight").highlightMessage();
    $(".tabs").tabs();
    $(".combobox").select2({ width: "resolve" });
    $(document).tooltip();
    
    // Select the entire text when focusing in a textbox
    $(document).on("focus", "input:text", function() {
        $(this).select().one("mouseup", function(e) {
            e.preventDefault();
        });
    });
    
    // Binds the click action of an element to showing a jQuery UI dialog
    $.each($("*[data-dialog]"), function (i, element) {
        var clickElement = $(element);
        var dialogElement = $(clickElement.data("dialog"));
        if (!dialogElement.exists())
            return true; // skip this element
        
        // create the dialog if it doesn't exist already
        if (!dialogElement.hasClass("ui-dialog")) {
            dialogElement.dialog({
                autoOpen: false,
                width: "auto",
                modal: true
            });
        }
        
        clickElement.click(function () {
            dialogElement.dialog("open");
        });
    });
});

piecharts.RgbToHex = function(rgbString) {
    var parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    // parts now should be ["rgb(0, 70, 255", "0", "70", "255"]

    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i], 10).toString(16);
        if (parts[i].length === 1) parts[i] = '0' + parts[i];
    }
    var hexString = '#' + parts.join('').toUpperCase(); // "#0070FF"
    return hexString;
};

piecharts.isNullOrUndefined = function(x) {
    return x === null || piecharts.isUndefined(x);
};

piecharts.isUndefined = function (x) {
    return typeof x === "undefined";
};

piecharts.readJsonDate = function (date) {
    if (piecharts.isNullOrUndefined(date)) {
        return null;
    }

    return new Date(date);
};

piecharts.isValidDate = function (date) {
    if (!(date instanceof Date)) {
        return false;
    }
    
    if (isNaN(date.getTime())) {
        return false;
    }
    
    return true;
};

piecharts.buildDateTime = function (date, time) {
    time = Date.parse(time) || new Date().clearTime();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
};

piecharts.convertDateToTimeString = function (date) {
    if (!piecharts.isValidDate(date)) {
        return null;
    }

    return date.toString("h:mm tt");
};

piecharts.isDateEqual = function (a, b) {
    if (!(a instanceof Date && b instanceof Date)) {
        return false;
    }
    return a.clearTime().getTime() === b.clearTime().getTime();
};

piecharts.isToday = function (date) {
    return piecharts.isDateEqual(date, Date.today());
};

piecharts.clone = function (original) {
    if (original instanceof Date) {
        return new Date(original);
    }
    return $.extend(true, { }, original);
};

piecharts.formatDateForUrl = function(date) {
    return date.toString("M-d-yyyy");
};

piecharts.useModel = function (getModel) {
    return {
        create: getModel,
        update: getModel
    };
};

piecharts.useDateModel = function() {
    return {
        create: function(options) {
            return new ko.observable(new Date(options.data));
        },
        update: function(options) {
            return new Date(options.data);
        }
    };
};

piecharts.applyCurvedLines = function(data) {
    for (var i = 0; i < data.length; i = i + 2) {
        var series = data[i];
        series.points = { show: true };
        series.lines = { show: false };

        var curvedSeries = {
            data: series.data,
            curvedLines: { apply: true },
            lines: { show: true }
        };

        data.splice(i, 0, curvedSeries);
    }
};

piecharts.buildFlotData = function(data) {
    return data.map(mapSeries);

    function mapSeries(series) {
        return series.DataPoints.map(mapDataPoint);
    }

    function mapDataPoint(dataPoint) {
        return [dataPoint.TimeValue, dataPoint.Value];
    }
};

piecharts.buildFlotSeries = function(data) {
    return { data: data };
};

Date.prototype.toLocalISOString = function() {
    return this.toString("yyyy-MM-ddTHH:mm");
};

Date.prototype.toShortTimeString = function() {
    return this.toString("h:mm tt");
};

Array.prototype.distinct = function() {
    return this.filter(function (item, index, array) {
        return index == array.indexOf(item);
    });
};;