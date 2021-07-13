function loadCamera(){


/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = "".trim, l = {}, m = "1.11.0", n = function (a, b) { return new n.fn.init(a, b) }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) { return b.toUpperCase() }; n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function () { return d.call(this) }, get: function (a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this) }, pushStack: function (a) { var b = n.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function (a, b) { return n.each(this, a, b) }, map: function (a) { return this.pushStack(n.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(d.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length, c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function () { return this.prevObject || this.constructor(null) }, push: f, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c)); return g }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a) }, noop: function () { }, isFunction: function (a) { return "function" === n.type(a) }, isArray: Array.isArray || function (a) { return "array" === n.type(a) }, isWindow: function (a) { return null != a && a == a.window }, isNumeric: function (a) { return a - parseFloat(a) >= 0 }, isEmptyObject: function (a) { var b; for (b in a) return !1; return !0 }, isPlainObject: function (a) { var b; if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1; try { if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 } if (l.ownLast) for (b in a) return j.call(a, b); for (b in a); return void 0 === b || j.call(a, b) }, type: function (a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a }, globalEval: function (b) { b && n.trim(b) && (a.execScript || function (b) { a.eval.call(a, b) })(b) }, camelCase: function (a) { return a.replace(p, "ms-").replace(q, r) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function (a, b, c) { var d, e = 0, f = a.length, g = s(a); if (c) { if (g) { for (; f > e; e++)if (d = b.apply(a[e], c), d === !1) break } else for (e in a) if (d = b.apply(a[e], c), d === !1) break } else if (g) { for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1) break } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break; return a }, trim: k && !k.call("\ufeff\xa0") ? function (a) { return null == a ? "" : k.call(a) } : function (a) { return null == a ? "" : (a + "").replace(o, "") }, makeArray: function (a, b) { var c = b || []; return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c }, inArray: function (a, b, c) { var d; if (b) { if (g) return g.call(b, a, c); for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a) return c } return -1 }, merge: function (a, b) { var c = +b.length, d = 0, e = a.length; while (c > d) a[e++] = b[d++]; if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++]; return a.length = e, a }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function (a, b, c) { var d, f = 0, g = a.length, h = s(a), i = []; if (h) for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), null != d && i.push(d); return e.apply([], i) }, guid: 1, proxy: function (a, b) { var c, e, f; return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = d.call(arguments, 2), e = function () { return a.apply(b || this, c.concat(d.call(arguments))) }, e.guid = a.guid = a.guid || n.guid++, e) : void 0 }, now: function () { return +new Date }, support: l }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) { h["[object " + b + "]"] = b.toLowerCase() }); function s(a) { var b = a.length, c = n.type(a); return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a } var t = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date, t = a.document, u = 0, v = 0, w = eb(), x = eb(), y = eb(), z = function (a, b) { return a === b && (j = !0), 0 }, A = "undefined", B = 1 << 31, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = D.indexOf || function (a) { for (var b = 0, c = this.length; c > b; b++)if (this[b] === a) return b; return -1 }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", M = L.replace("w", "w#"), N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]", O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)", P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(O), U = new RegExp("^" + M + "$"), V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L.replace("w", "w*") + ")"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = /'|\\/g, ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), bb = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }; try { G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType } catch (cb) { G = { apply: D.length ? function (a, b) { F.apply(a, H.call(b)) } : function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++]); a.length = c - 1 } } } function db(a, b, d, e) { var f, g, h, i, j, m, p, q, u, v; if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) return d; if (1 !== (i = b.nodeType) && 9 !== i) return []; if (n && !e) { if (f = Z.exec(a)) if (h = f[1]) { if (9 === i) { if (g = b.getElementById(h), !g || !g.parentNode) return d; if (g.id === h) return d.push(g), d } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) return d.push(g), d } else { if (f[2]) return G.apply(d, b.getElementsByTagName(a)), d; if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(h)), d } if (c.qsa && (!o || !o.test(a))) { if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) { m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length; while (j--) m[j] = q + pb(m[j]); u = $.test(a) && mb(b.parentNode) || b, v = m.join(",") } if (v) try { return G.apply(d, u.querySelectorAll(v)), d } catch (w) { } finally { p || b.removeAttribute("id") } } } return xb(a.replace(P, "$1"), b, d, e) } function eb() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b } function fb(a) { return a[s] = !0, a } function gb(a) { var b = l.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } } function hb(a, b) { var c = a.split("|"), e = a.length; while (e--) d.attrHandle[c[e]] = b } function ib(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B); if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1 : -1 } function jb(a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } } function kb(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function lb(a) { return fb(function (b) { return b = +b, fb(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) } function mb(a) { return a && typeof a.getElementsByTagName !== A && a } c = db.support = {}, f = db.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, k = db.setDocument = function (a) { var b, e = a ? a.ownerDocument || a : t, g = e.defaultView; return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () { k() }, !1) : g.attachEvent && g.attachEvent("onunload", function () { k() })), c.attributes = gb(function (a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = gb(function (a) { return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function (a) { return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length }), c.getById = gb(function (a) { return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length }), c.getById ? (d.find.ID = function (a, b) { if (typeof b.getElementById !== A && n) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, d.filter.ID = function (a) { var b = a.replace(ab, bb); return function (a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function (a) { var b = a.replace(ab, bb); return function (a) { var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0 } : function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function (a, b) { return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0 }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function (a) { a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked") }), gb(function (a) { var b = e.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:") })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function (a) { c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O) }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function (a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1 }, z = b ? function (a, b) { if (a === b) return j = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1) } : function (a, b) { if (a === b) return j = !0, 0; var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], k = [b]; if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0; if (f === g) return ib(a, b); c = a; while (c = c.parentNode) h.unshift(c); c = b; while (c = c.parentNode) k.unshift(c); while (h[d] === k[d]) d++; return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0 }, e) : l }, db.matches = function (a, b) { return db(a, null, null, b) }, db.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try { var d = q.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) { } return db(b, l, null, [a]).length > 0 }, db.contains = function (a, b) { return (a.ownerDocument || a) !== l && k(a), r(a, b) }, db.attr = function (a, b) { (a.ownerDocument || a) !== l && k(a); var e = d.attrHandle[b.toLowerCase()], f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0; return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, db.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a) }, db.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return i = null, a }, e = db.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling)c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else while (b = a[d++]) c += e(b); return c }, d = db.selectors = { cacheLength: 50, createPseudo: fb, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) { return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a }, PSEUDO: function (a) { var b, c = !a[5] && a[2]; return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function (a) { var b = a.replace(ab, bb).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) { var b = w[a + " "]; return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function (a) { return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "") }) }, ATTR: function (a, b, c) { return function (d) { var e = db.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode } : function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), t = !i && !h; if (q) { if (f) { while (p) { l = b; while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1; o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && t) { k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n]; while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) { k[a] = [u, n, m]; break } } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0 } } }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a); return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function (a, c) { var d, f = e(a, b), g = f.length; while (g--) d = I.call(a, f[g]), a[d] = !(c[d] = f[g]) }) : function (a) { return e(a, 0, c) }) : e } }, pseudos: { not: fb(function (a) { var b = [], c = [], d = g(a.replace(P, "$1")); return d[s] ? fb(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--) (f = g[h]) && (a[h] = !(b[h] = f)) }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), !c.pop() } }), has: fb(function (a) { return function (b) { return db(a, b).length > 0 } }), contains: fb(function (a) { return function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: fb(function (a) { return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(), function (b) { var c; do if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function (a) { return a === m }, focus: function (a) { return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function (a) { return a.disabled === !1 }, disabled: function (a) { return a.disabled === !0 }, checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6) return !1; return !0 }, parent: function (a) { return !d.pseudos.empty(a) }, header: function (a) { return X.test(a.nodeName) }, input: function (a) { return W.test(a.nodeName) }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: lb(function () { return [0] }), last: lb(function (a, b) { return [b - 1] }), eq: lb(function (a, b, c) { return [0 > c ? c + b : c] }), even: lb(function (a, b) { for (var c = 0; b > c; c += 2)a.push(c); return a }), odd: lb(function (a, b) { for (var c = 1; b > c; c += 2)a.push(c); return a }), lt: lb(function (a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d); return a }), gt: lb(function (a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = jb(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = kb(b); function nb() { } nb.prototype = d.filters = d.pseudos, d.setFilters = new nb; function ob(a, b) { var c, e, f, g, h, i, j, k = x[a + " "]; if (k) return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) { (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? db.error(a) : x(a, i).slice(0) } function pb(a) { for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value; return d } function qb(a, b, c) { var d = b.dir, e = c && "parentNode" === d, f = v++; return b.first ? function (b, c, f) { while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f) } : function (b, c, g) { var h, i, j = [u, f]; if (g) { while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else while (b = b[d]) if (1 === b.nodeType || e) { if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 } } } function rb(a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0 } : a[0] } function sb(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g } function tb(a, b, c, d, e, f) { return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || wb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : sb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = sb(r, n), d(j, [], h, i), k = j.length; while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--) (l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i) } k = r.length; while (k--) (l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r) }) } function ub(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function (a) { return a === b }, i, !0), l = qb(function (a) { return I.call(b, a) > -1 }, i, !0), m = [function (a, c, d) { return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)) }]; f > j; j++)if (c = d.relative[a[j].type]) m = [qb(rb(m), c)]; else { if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) { for (e = ++j; f > e; e++)if (d.relative[a[e].type]) break; return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({ value: " " === a[j - 2].type ? "*" : "" })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a)) } m.push(c) } return rb(m) } function vb(a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, i, j, k) { var m, n, o, p = 0, q = "0", r = f && [], s = [], t = h, v = f || e && d.find.TAG("*", k), w = u += null == t ? 1 : Math.random() || .1, x = v.length; for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) { if (e && m) { n = 0; while (o = a[n++]) if (o(m, g, i)) { j.push(m); break } k && (u = w) } c && ((m = !o && m) && p--, f && r.push(m)) } if (p += q, c && q !== p) { n = 0; while (o = b[n++]) o(r, s, g, i); if (f) { if (p > 0) while (q--) r[q] || s[q] || (s[q] = E.call(j)); s = sb(s) } G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j) } return k && (u = w, h = t), r }; return c ? fb(f) : f } g = db.compile = function (a, b) { var c, d = [], e = [], f = y[a + " "]; if (!f) { b || (b = ob(a)), c = b.length; while (c--) f = ub(b[c]), f[s] ? d.push(f) : e.push(f); f = y(a, vb(e, d)) } return f }; function wb(a, b, c) { for (var d = 0, e = b.length; e > d; d++)db(a, b[d], c); return c } function xb(a, b, e, f) { var h, i, j, k, l, m = ob(a); if (!f && 1 === m.length) { if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) { if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) return e; a = a.slice(i.shift().value.length) } h = V.needsContext.test(a) ? 0 : i.length; while (h--) { if (j = i[h], d.relative[k = j.type]) break; if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) { if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f), e; break } } } return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e } return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function (a) { return 1 & a.compareDocumentPosition(l.createElement("div")) }), gb(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || hb("type|href|height|width", function (a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && gb(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || hb("value", function (a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), gb(function (a) { return null == a.getAttribute("disabled") }) || hb(J, function (a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), db }(a); n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains; var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/; function x(a, b, c) { if (n.isFunction(b)) return n.grep(a, function (a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return n.grep(a, function (a) { return a === b !== c }); if ("string" == typeof b) { if (w.test(b)) return n.filter(b, a, c); b = n.filter(b, a) } return n.grep(a, function (a) { return n.inArray(a, b) >= 0 !== c }) } n.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) { return 1 === a.nodeType })) }, n.fn.extend({ find: function (a) { var b, c = [], d = this, e = d.length; if ("string" != typeof a) return this.pushStack(n(a).filter(function () { for (b = 0; e > b; b++)if (n.contains(d[b], this)) return !0 })); for (b = 0; e > b; b++)n.find(a, d[b], c); return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c }, filter: function (a) { return this.pushStack(x(this, a || [], !1)) }, not: function (a) { return this.pushStack(x(this, a || [], !0)) }, is: function (a) { return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length } }); var y, z = a.document, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, B = n.fn.init = function (a, b) { var c, d; if (!a) return this; if ("string" == typeof a) { if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : A.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a); if (c[1]) { if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]); return this } if (d = z.getElementById(c[2]), d && d.parentNode) { if (d.id !== c[2]) return y.find(a); this.length = 1, this[0] = d } return this.context = z, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this)) }; B.prototype = n.fn, y = n(z); var C = /^(?:parents|prev(?:Until|All))/, D = { children: !0, contents: !0, next: !0, prev: !0 }; n.extend({ dir: function (a, b, c) { var d = [], e = a[b]; while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !n(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b]; return d }, sibling: function (a, b) { for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a); return c } }), n.fn.extend({ has: function (a) { var b, c = n(a, this), d = c.length; return this.filter(function () { for (b = 0; d > b; b++)if (n.contains(this, c[b])) return !0 }) }, closest: function (a, b) { for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? n.unique(f) : f) }, index: function (a) { return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (a, b) { return this.pushStack(n.unique(n.merge(this.get(), n(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }); function E(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a } n.each({ parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function (a) { return n.dir(a, "parentNode") }, parentsUntil: function (a, b, c) { return n.dir(a, "parentNode", c) }, next: function (a) { return E(a, "nextSibling") }, prev: function (a) { return E(a, "previousSibling") }, nextAll: function (a) { return n.dir(a, "nextSibling") }, prevAll: function (a) { return n.dir(a, "previousSibling") }, nextUntil: function (a, b, c) { return n.dir(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return n.dir(a, "previousSibling", c) }, siblings: function (a) { return n.sibling((a.parentNode || {}).firstChild, a) }, children: function (a) { return n.sibling(a.firstChild) }, contents: function (a) { return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes) } }, function (a, b) { n.fn[a] = function (c, d) { var e = n.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.unique(e)), C.test(a) && (e = e.reverse())), this.pushStack(e) } }); var F = /\S+/g, G = {}; function H(a) { var b = G[a] = {}; return n.each(a.match(F) || [], function (a, c) { b[c] = !0 }), b } n.Callbacks = function (a) { a = "string" == typeof a ? G[a] || H(a) : n.extend({}, a); var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) { for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) { c = !1; break } b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable()) }, k = { add: function () { if (h) { var d = h.length; !function f(b) { n.each(b, function (b, c) { var d = n.type(c); "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c) }) }(arguments), b ? e = h.length : c && (g = d, j(c)) } return this }, remove: function () { return h && n.each(arguments, function (a, c) { var d; while ((d = n.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--) }), this }, has: function (a) { return a ? n.inArray(a, h) > -1 : !(!h || !h.length) }, empty: function () { return h = [], e = 0, this }, disable: function () { return h = i = c = void 0, this }, disabled: function () { return !h }, lock: function () { return i = void 0, c || k.disable(), this }, locked: function () { return !i }, fireWith: function (a, c) { return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this }, fire: function () { return k.fireWith(this, arguments), this }, fired: function () { return !!d } }; return k }, n.extend({ Deferred: function (a) { var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = { state: function () { return c }, always: function () { return e.done(arguments).fail(arguments), this }, then: function () { var a = arguments; return n.Deferred(function (c) { n.each(b, function (b, f) { var g = n.isFunction(a[b]) && a[b]; e[f[1]](function () { var a = g && g.apply(this, arguments); a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function (a) { return null != a ? n.extend(a, d) : d } }, e = {}; return d.pipe = d.then, n.each(b, function (a, f) { var g = f[2], h = f[3]; d[f[1]] = g.add, h && g.add(function () { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function (a) { var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) { return function (e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } }, i, j, k; if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f; return f || g.resolveWith(k, c), g.promise() } }); var I; n.fn.ready = function (a) { return n.ready.promise().done(a), this }, n.extend({ isReady: !1, readyWait: 1, holdReady: function (a) { a ? n.readyWait++ : n.ready(!0) }, ready: function (a) { if (a === !0 ? !--n.readyWait : !n.isReady) { if (!z.body) return setTimeout(n.ready); n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(z, [n]), n.fn.trigger && n(z).trigger("ready").off("ready")) } } }); function J() { z.addEventListener ? (z.removeEventListener("DOMContentLoaded", K, !1), a.removeEventListener("load", K, !1)) : (z.detachEvent("onreadystatechange", K), a.detachEvent("onload", K)) } function K() { (z.addEventListener || "load" === event.type || "complete" === z.readyState) && (J(), n.ready()) } n.ready.promise = function (b) { if (!I) if (I = n.Deferred(), "complete" === z.readyState) setTimeout(n.ready); else if (z.addEventListener) z.addEventListener("DOMContentLoaded", K, !1), a.addEventListener("load", K, !1); else { z.attachEvent("onreadystatechange", K), a.attachEvent("onload", K); var c = !1; try { c = null == a.frameElement && z.documentElement } catch (d) { } c && c.doScroll && !function e() { if (!n.isReady) { try { c.doScroll("left") } catch (a) { return setTimeout(e, 50) } J(), n.ready() } }() } return I.promise(b) }; var L = "undefined", M; for (M in n(l)) break; l.ownLast = "0" !== M, l.inlineBlockNeedsLayout = !1, n(function () { var a, b, c = z.getElementsByTagName("body")[0]; c && (a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = z.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== L && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (l.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null) }), function () { var a = z.createElement("div"); if (null == l.deleteExpando) { l.deleteExpando = !0; try { delete a.test } catch (b) { l.deleteExpando = !1 } } a = null }(), n.acceptData = function (a) { var b = n.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1; return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b }; var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g; function P(a, b, c) { if (void 0 === c && 1 === a.nodeType) { var d = "data-" + b.replace(O, "-$1").toLowerCase(); if (c = a.getAttribute(d), "string" == typeof c) { try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c } catch (e) { } n.data(a, b, c) } else c = void 0 } return c } function Q(a) { var b; for (b in a) if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1; return !0 } function R(a, b, d, e) {
        if (n.acceptData(a)) {
            var f, g, h = n.expando, i = a.nodeType, j = i ? n.cache : a, k = i ? a[h] : a[h] && h; if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: n.noop }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    } function S(a, b, c) { if (n.acceptData(a)) { var d, e, f = a.nodeType, g = f ? n.cache : a, h = f ? a[n.expando] : n.expando; if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; while (e--) delete d[b[e]]; if (c ? !Q(d) : !n.isEmptyObject(d)) return } (c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = null) } } } n.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (a) { return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a) }, data: function (a, b, c) { return R(a, b, c) }, removeData: function (a, b) { return S(a, b) }, _data: function (a, b, c) { return R(a, b, c, !0) }, _removeData: function (a, b) { return S(a, b, !0) } }), n.fn.extend({ data: function (a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) { if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) { c = g.length; while (c--) d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])); n._data(f, "parsedAttrs", !0) } return e } return "object" == typeof a ? this.each(function () { n.data(this, a) }) : arguments.length > 1 ? this.each(function () { n.data(this, a, b) }) : f ? P(f, a, n.data(f, a)) : void 0 }, removeData: function (a) { return this.each(function () { n.removeData(this, a) }) } }), n.extend({ queue: function (a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function (a, b) { b = b || "fx"; var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () { n.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return n._data(a, c) || n._data(a, c, { empty: n.Callbacks("once memory").add(function () { n._removeData(a, b + "queue"), n._removeData(a, c) }) }) } }), n.fn.extend({ queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = n.queue(this, a, b); n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { n.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) { var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } }); var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, U = ["Top", "Right", "Bottom", "Left"], V = function (a, b) { return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a) }, W = n.access = function (a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ("object" === n.type(c)) { e = !0; for (h in c) n.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(n(a), c) })), b)) for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f }, X = /^(?:checkbox|radio)$/i; !function () { var a = z.createDocumentFragment(), b = z.createElement("div"), c = z.createElement("input"); if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", l.leadingWhitespace = 3 === b.firstChild.nodeType, l.tbody = !b.getElementsByTagName("tbody").length, l.htmlSerialize = !!b.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), l.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () { l.noCloneEvent = !1 }), b.cloneNode(!0).click()), null == l.deleteExpando) { l.deleteExpando = !0; try { delete b.test } catch (d) { l.deleteExpando = !1 } } a = b = c = null }(), function () { var b, c, d = z.createElement("div"); for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (l[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), l[b + "Bubbles"] = d.attributes[c].expando === !1); d = null }(); var Y = /^(?:input|select|textarea)$/i, Z = /^key/, $ = /^(?:mouse|contextmenu)|click/, _ = /^(?:focusinfocus|focusoutblur)$/, ab = /^([^.]*)(?:\.(.+)|)$/; function bb() { return !0 } function cb() { return !1 } function db() { try { return z.activeElement } catch (a) { } } n.event = { global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a); if (r) { c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) { return typeof n === L || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(F) || [""], h = b.length; while (h--) f = ab.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0); a = null } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a); if (r && (k = r.events)) { b = (b || "").match(F) || [""], j = b.length; while (j--) if (h = ab.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g)); i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o]) } else for (o in k) n.event.remove(a, o + b[j], c, d, !0); n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events")) } }, trigger: function (b, c, d, e) { var f, g, h, i, k, l, m, o = [d || z], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : []; if (h = l = d = d || z, 3 !== d.nodeType && 8 !== d.nodeType && !_.test(p + n.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[n.expando] ? b : new n.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), k = n.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) { if (!e && !k.noBubble && !n.isWindow(d)) { for (i = k.delegateType || p, _.test(i + p) || (h = h.parentNode); h; h = h.parentNode)o.push(h), l = h; l === (d.ownerDocument || z) && o.push(l.defaultView || l.parentWindow || a) } m = 0; while ((h = o[m++]) && !b.isPropagationStopped()) b.type = m > 1 ? i : k.bindType || p, f = (n._data(h, "events") || {})[b.type] && n._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && n.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault()); if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && n.acceptData(d) && g && d[p] && !n.isWindow(d)) { l = d[g], l && (d[g] = null), n.event.triggered = p; try { d[p]() } catch (r) { } n.event.triggered = void 0, l && (d[g] = l) } return b.result } }, dispatch: function (a) { a = n.event.fix(a); var b, c, e, f, g, h = [], i = d.call(arguments), j = (n._data(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = n.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, g = 0; while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((n.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function (a, b) { var c, d, e, f, g = [], h = b.delegateCount, i = a.target; if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) { for (e = [], f = 0; h > f; f++)d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? n(c, this).index(i) >= 0 : n.find(c, this, null, [i]).length), e[c] && e.push(d); e.length && g.push({ elem: i, handlers: e }) } return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, fix: function (a) { if (a[n.expando]) return a; var b, c, d, e = a.type, f = a, g = this.fixHooks[e]; g || (this.fixHooks[e] = g = $.test(e) ? this.mouseHooks : Z.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length; while (b--) c = d[b], a[c] = f[c]; return a.target || (a.target = f.srcElement || z), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) { var c, d, e, f = b.button, g = b.fromElement; return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || z, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== db() && this.focus) try { return this.focus(), !1 } catch (a) { } }, delegateType: "focusin" }, blur: { trigger: function () { return this === db() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function () { return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function (a) { return n.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && (a.originalEvent.returnValue = a.result) } } }, simulate: function (a, b, c, d) { var e = n.extend(new n.Event, c, { type: a, isSimulated: !0, originalEvent: {} }); d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, n.removeEvent = z.removeEventListener ? function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function (a, b, c) { var d = "on" + b; a.detachEvent && (typeof a[d] === L && (a[d] = null), a.detachEvent(d, c)) }, n.Event = function (a, b) { return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? bb : cb) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b) }, n.Event.prototype = { isDefaultPrevented: cb, isPropagationStopped: cb, isImmediatePropagationStopped: cb, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = bb, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = bb, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = bb, this.stopPropagation() } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (a, b) { n.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), l.submitBubbles || (n.event.special.submit = { setup: function () { return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) { var b = a.target, c = n.nodeName(b, "input") || n.nodeName(b, "button") ? b.form : void 0; c && !n._data(c, "submitBubbles") && (n.event.add(c, "submit._submit", function (a) { a._submit_bubble = !0 }), n._data(c, "submitBubbles", !0)) }) }, postDispatch: function (a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0)) }, teardown: function () { return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit") } }), l.changeBubbles || (n.event.special.change = { setup: function () { return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function (a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), n.event.add(this, "click._change", function (a) { this._just_changed && !a.isTrigger && (this._just_changed = !1), n.event.simulate("change", this, a, !0) })), !1) : void n.event.add(this, "beforeactivate._change", function (a) { var b = a.target; Y.test(b.nodeName) && !n._data(b, "changeBubbles") && (n.event.add(b, "change._change", function (a) { !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0) }), n._data(b, "changeBubbles", !0)) }) }, handle: function (a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function () { return n.event.remove(this, "._change"), !Y.test(this.nodeName) } }), l.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var c = function (a) { n.event.simulate(b, a.target, n.event.fix(a), !0) }; n.event.special[b] = { setup: function () { var d = this.ownerDocument || this, e = n._data(d, b); e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1) }, teardown: function () { var d = this.ownerDocument || this, e = n._data(d, b) - 1; e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b)) } } }), n.fn.extend({ on: function (a, b, c, d, e) { var f, g; if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (f in a) this.on(f, b, c, a[f], e); return this } if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = cb; else if (!d) return this; return 1 === e && (g = d, d = function (a) { return n().off(a), g.apply(this, arguments) }, d.guid = g.guid || (g.guid = n.guid++)), this.each(function () { n.event.add(this, a, d, c, b) }) }, one: function (a, b, c, d) { return this.on(a, b, c, d, 1) }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = cb), this.each(function () { n.event.remove(this, a, c, b) }) }, trigger: function (a, b) { return this.each(function () { n.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; return c ? n.event.trigger(a, b, c, !0) : void 0 } }); function eb(a) { var b = fb.split("|"), c = a.createDocumentFragment(); if (c.createElement) while (b.length) c.createElement(b.pop()); return c } var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gb = / jQuery\d+="(?:null|\d+)"/g, hb = new RegExp("<(?:" + fb + ")[\\s/>]", "i"), ib = /^\s+/, jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, kb = /<([\w:]+)/, lb = /<tbody/i, mb = /<|&#?\w+;/, nb = /<(?:script|style|link)/i, ob = /checked\s*(?:[^=]|=\s*.checked.)/i, pb = /^$|\/(?:java|ecma)script/i, qb = /^true\/(.*)/, rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, sb = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, tb = eb(z), ub = tb.appendChild(z.createElement("div")); sb.optgroup = sb.option, sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead, sb.th = sb.td; function vb(a, b) { var c, d, e = 0, f = typeof a.getElementsByTagName !== L ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== L ? a.querySelectorAll(b || "*") : void 0; if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || n.nodeName(d, b) ? f.push(d) : n.merge(f, vb(d, b)); return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f } function wb(a) { X.test(a.type) && (a.defaultChecked = a.checked) } function xb(a, b) { return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a } function yb(a) { return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a } function zb(a) { var b = qb.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a } function Ab(a, b) { for (var c, d = 0; null != (c = a[d]); d++)n._data(c, "globalEval", !b || n._data(b[d], "globalEval")) } function Bb(a, b) { if (1 === b.nodeType && n.hasData(a)) { var c, d, e, f = n._data(a), g = n._data(b, f), h = f.events; if (h) { delete g.handle, g.events = {}; for (c in h) for (d = 0, e = h[c].length; e > d; d++)n.event.add(b, c, h[c][d]) } g.data && (g.data = n.extend({}, g.data)) } } function Cb(a, b) { var c, d, e; if (1 === b.nodeType) { if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) { e = n._data(b); for (d in e.events) n.removeEvent(b, d, e.handle); b.removeAttribute(n.expando) } "script" === c && b.text !== a.text ? (yb(b).text = a.text, zb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && X.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) } } n.extend({ clone: function (a, b, c) { var d, e, f, g, h, i = n.contains(a.ownerDocument, a); if (l.html5Clone || n.isXMLDoc(a) || !hb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ub.innerHTML = a.outerHTML, ub.removeChild(f = ub.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = vb(f), h = vb(a), g = 0; null != (e = h[g]); ++g)d[g] && Cb(e, d[g]); if (b) if (c) for (h = h || vb(a), d = d || vb(f), g = 0; null != (e = h[g]); g++)Bb(e, d[g]); else Bb(a, f); return d = vb(f, "script"), d.length > 0 && Ab(d, !i && vb(a, "script")), d = h = e = null, f }, buildFragment: function (a, b, c, d) { for (var e, f, g, h, i, j, k, m = a.length, o = eb(b), p = [], q = 0; m > q; q++)if (f = a[q], f || 0 === f) if ("object" === n.type(f)) n.merge(p, f.nodeType ? [f] : f); else if (mb.test(f)) { h = h || o.appendChild(b.createElement("div")), i = (kb.exec(f) || ["", ""])[1].toLowerCase(), k = sb[i] || sb._default, h.innerHTML = k[1] + f.replace(jb, "<$1></$2>") + k[2], e = k[0]; while (e--) h = h.lastChild; if (!l.leadingWhitespace && ib.test(f) && p.push(b.createTextNode(ib.exec(f)[0])), !l.tbody) { f = "table" !== i || lb.test(f) ? "<table>" !== k[1] || lb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; while (e--) n.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j) } n.merge(p, h.childNodes), h.textContent = ""; while (h.firstChild) h.removeChild(h.firstChild); h = o.lastChild } else p.push(b.createTextNode(f)); h && o.removeChild(h), l.appendChecked || n.grep(vb(p, "input"), wb), q = 0; while (f = p[q++]) if ((!d || -1 === n.inArray(f, d)) && (g = n.contains(f.ownerDocument, f), h = vb(o.appendChild(f), "script"), g && Ab(h), c)) { e = 0; while (f = h[e++]) pb.test(f.type || "") && c.push(f) } return h = null, o }, cleanData: function (a, b) { for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.deleteExpando, m = n.event.special; null != (d = a[h]); h++)if ((b || n.acceptData(d)) && (f = d[i], g = f && j[f])) { if (g.events) for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle); j[f] && (delete j[f], k ? delete d[i] : typeof d.removeAttribute !== L ? d.removeAttribute(i) : d[i] = null, c.push(f)) } } }), n.fn.extend({ text: function (a) { return W(this, function (a) { return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a)) }, null, a, arguments.length) }, append: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = xb(this, a); b.appendChild(a) } }) }, prepend: function () { return this.domManip(arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = xb(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return this.domManip(arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, remove: function (a, b) { for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || n.cleanData(vb(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && Ab(vb(c, "script")), c.parentNode.removeChild(c)); return this }, empty: function () { for (var a, b = 0; null != (a = this[b]); b++) { 1 === a.nodeType && n.cleanData(vb(a, !1)); while (a.firstChild) a.removeChild(a.firstChild); a.options && n.nodeName(a, "select") && (a.options.length = 0) } return this }, clone: function (a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () { return n.clone(this, a, b) }) }, html: function (a) { return W(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(gb, "") : void 0; if (!("string" != typeof a || nb.test(a) || !l.htmlSerialize && hb.test(a) || !l.leadingWhitespace && ib.test(a) || sb[(kb.exec(a) || ["", ""])[1].toLowerCase()])) { a = a.replace(jb, "<$1></$2>"); try { for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (n.cleanData(vb(b, !1)), b.innerHTML = a); b = 0 } catch (e) { } } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function () { var a = arguments[0]; return this.domManip(arguments, function (b) { a = this.parentNode, n.cleanData(vb(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() }, detach: function (a) { return this.remove(a, !0) }, domManip: function (a, b) { a = e.apply([], a); var c, d, f, g, h, i, j = 0, k = this.length, m = this, o = k - 1, p = a[0], q = n.isFunction(p); if (q || k > 1 && "string" == typeof p && !l.checkClone && ob.test(p)) return this.each(function (c) { var d = m.eq(c); q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b) }); if (k && (i = n.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) { for (g = n.map(vb(i, "script"), yb), f = g.length; k > j; j++)d = i, j !== o && (d = n.clone(d, !0, !0), f && n.merge(g, vb(d, "script"))), b.call(this[j], d, j); if (f) for (h = g[g.length - 1].ownerDocument, n.map(g, zb), j = 0; f > j; j++)d = g[j], pb.test(d.type || "") && !n._data(d, "globalEval") && n.contains(h, d) && (d.src ? n._evalUrl && n._evalUrl(d.src) : n.globalEval((d.text || d.textContent || d.innerHTML || "").replace(rb, ""))); i = c = null } return this } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { n.fn[a] = function (a) { for (var c, d = 0, e = [], g = n(a), h = g.length - 1; h >= d; d++)c = d === h ? this : this.clone(!0), n(g[d])[b](c), f.apply(e, c.get()); return this.pushStack(e) } }); var Db, Eb = {}; function Fb(b, c) { var d = n(c.createElement(b)).appendTo(c.body), e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : n.css(d[0], "display"); return d.detach(), e } function Gb(a) { var b = z, c = Eb[a]; return c || (c = Fb(a, b), "none" !== c && c || (Db = (Db || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Db[0].contentWindow || Db[0].contentDocument).document, b.write(), b.close(), c = Fb(a, b), Db.detach()), Eb[a] = c), c } !function () { var a, b, c = z.createElement("div"), d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0"; c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(a.style.opacity), l.cssFloat = !!a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, l.shrinkWrapBlocks = function () { var a, c, e, f; if (null == b) { if (a = z.getElementsByTagName("body")[0], !a) return; f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = z.createElement("div"), e = z.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== L && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null } return b } }(); var Hb = /^margin/, Ib = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"), Jb, Kb, Lb = /^(top|right|bottom|left)$/; a.getComputedStyle ? (Jb = function (a) { return a.ownerDocument.defaultView.getComputedStyle(a, null) }, Kb = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Jb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), Ib.test(g) && Hb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "" }) : z.documentElement.currentStyle && (Jb = function (a) { return a.currentStyle }, Kb = function (a, b, c) { var d, e, f, g, h = a.style; return c = c || Jb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ib.test(g) && !Lb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" }); function Mb(a, b) { return { get: function () { var c = a(); if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments) } } } !function () { var b, c, d, e, f, g, h = z.createElement("div"), i = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", j = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0"; h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = h.getElementsByTagName("a")[0], b.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(b.style.opacity), l.cssFloat = !!b.style.cssFloat, h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, b = h = null, n.extend(l, { reliableHiddenOffsets: function () { if (null != c) return c; var a, b, d, e = z.createElement("div"), f = z.getElementsByTagName("body")[0]; if (f) return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = z.createElement("div"), a.style.cssText = i, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", c = d && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, c }, boxSizing: function () { return null == d && k(), d }, boxSizingReliable: function () { return null == e && k(), e }, pixelPosition: function () { return null == f && k(), f }, reliableMarginRight: function () { var b, c, d, e; if (null == g && a.getComputedStyle) { if (b = z.getElementsByTagName("body")[0], !b) return; c = z.createElement("div"), d = z.createElement("div"), c.style.cssText = i, b.appendChild(c).appendChild(d), e = d.appendChild(z.createElement("div")), e.style.cssText = d.style.cssText = j, e.style.marginRight = e.style.width = "0", d.style.width = "1px", g = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c) } return g } }); function k() { var b, c, h = z.getElementsByTagName("body")[0]; h && (b = z.createElement("div"), c = z.createElement("div"), b.style.cssText = i, h.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", n.swap(h, null != h.style.zoom ? { zoom: 1 } : {}, function () { d = 4 === c.offsetWidth }), e = !0, f = !1, g = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(c, null) || {}).top, e = "4px" === (a.getComputedStyle(c, null) || { width: "4px" }).width), h.removeChild(b), c = h = null) } }(), n.swap = function (a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e }; var Nb = /alpha\([^)]*\)/i, Ob = /opacity\s*=\s*([^)]*)/, Pb = /^(none|table(?!-c[ea]).+)/, Qb = new RegExp("^(" + T + ")(.*)$", "i"), Rb = new RegExp("^([+-])=(" + T + ")", "i"), Sb = { position: "absolute", visibility: "hidden", display: "block" }, Tb = { letterSpacing: 0, fontWeight: 400 }, Ub = ["Webkit", "O", "Moz", "ms"]; function Vb(a, b) { if (b in a) return b; var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Ub.length; while (e--) if (b = Ub[e] + c, b in a) return b; return d } function Wb(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", Gb(d.nodeName)))) : f[g] || (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display")))); for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a } function Xb(a, b, c) { var d = Qb.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b } function Yb(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e))); return g } function Zb(a, b, c) { var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Jb(a), g = l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, f); if (0 >= e || null == e) { if (e = Kb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ib.test(e)) return e; d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 } return e + Yb(a, b, c || (g ? "border" : "content"), d, f) + "px" } n.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = Kb(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": l.cssFloat ? "cssFloat" : "styleFloat" }, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = n.camelCase(b), i = a.style; if (b = n.cssProps[h] || (n.cssProps[h] = Vb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]; if (f = typeof c, "string" === f && (e = Rb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = "", i[b] = c } catch (j) { } } }, css: function (a, b, c, d) { var e, f, g, h = n.camelCase(b); return b = n.cssProps[h] || (n.cssProps[h] = Vb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Kb(a, b, d)), "normal" === f && b in Tb && (f = Tb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || n.isNumeric(e) ? e || 0 : f) : f } }), n.each(["height", "width"], function (a, b) { n.cssHooks[b] = { get: function (a, c, d) { return c ? 0 === a.offsetWidth && Pb.test(n.css(a, "display")) ? n.swap(a, Sb, function () { return Zb(a, b, d) }) : Zb(a, b, d) : void 0 }, set: function (a, c, d) { var e = d && Jb(a); return Xb(a, c, d ? Yb(a, b, d, l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0) } } }), l.opacity || (n.cssHooks.opacity = { get: function (a, b) { return Ob.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" }, set: function (a, b) { var c = a.style, d = a.currentStyle, e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || ""; c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Nb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e) } }), n.cssHooks.marginRight = Mb(l.reliableMarginRight, function (a, b) { return b ? n.swap(a, { display: "inline-block" }, Kb, [a, "marginRight"]) : void 0 }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) { n.cssHooks[a + b] = { expand: function (c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + U[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Hb.test(a) || (n.cssHooks[a + b].set = Xb) }), n.fn.extend({
        css: function (a, b) {
            return W(this, function (a, b, c) {
                var d, e, f = {}, g = 0; if (n.isArray(b)) { for (d = Jb(a), e = b.length; e > g; g++)f[b[g]] = n.css(a, b[g], !1, d); return f } return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () { return Wb(this, !0) }, hide: function () { return Wb(this) }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { V(this) ? n(this).show() : n(this).hide() }) }
    }); function $b(a, b, c, d, e) { return new $b.prototype.init(a, b, c, d, e) } n.Tween = $b, $b.prototype = { constructor: $b, init: function (a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px") }, cur: function () { var a = $b.propHooks[this.prop]; return a && a.get ? a.get(this) : $b.propHooks._default.get(this) }, run: function (a) { var b, c = $b.propHooks[this.prop]; return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : $b.propHooks._default.set(this), this } }, $b.prototype.init.prototype = $b.prototype, $b.propHooks = { _default: { get: function (a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function (a) { n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, $b.propHooks.scrollTop = $b.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, n.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 } }, n.fx = $b.prototype.init, n.fx.step = {}; var _b, ac, bc = /^(?:toggle|show|hide)$/, cc = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"), dc = /queueHooks$/, ec = [jc], fc = { "*": [function (a, b) { var c = this.createTween(a, b), d = c.cur(), e = cc.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && cc.exec(n.css(c.elem, a)), h = 1, i = 20; if (g && g[3] !== f) { f = f || g[3], e = e || [], g = +d || 1; do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i) } return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c }] }; function gc() { return setTimeout(function () { _b = void 0 }), _b = n.now() } function hc(a, b) { var c, d = { height: a }, e = 0; for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = U[e], d["margin" + c] = d["padding" + c] = a; return b && (d.opacity = d.width = a), d } function ic(a, b, c) { for (var d, e = (fc[b] || []).concat(fc["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a)) return d } function jc(a, b, c) { var d, e, f, g, h, i, j, k, m = this, o = {}, p = a.style, q = a.nodeType && V(a), r = n._data(a, "fxshow"); c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () { h.unqueued || i() }), h.unqueued++, m.always(function () { m.always(function () { h.unqueued--, n.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = Gb(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== k ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2] })); for (d in b) if (e = b[d], bc.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) { if ("show" !== e || !r || void 0 === r[d]) continue; q = !0 } o[d] = r && r[d] || n.style(a, d) } if (!n.isEmptyObject(o)) { r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () { n(a).hide() }), m.done(function () { var b; n._removeData(a, "fxshow"); for (b in o) n.style(a, b, o[b]) }); for (d in o) g = ic(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } } function kc(a, b) { var c, d, e, f, g; for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } function lc(a, b, c) { var d, e, f = 0, g = ec.length, h = n.Deferred().always(function () { delete i.elem }), i = function () { if (e) return !1; for (var b = _b || gc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) }, j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: _b || gc(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function (b) { var c = 0, d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++)j.tweens[c].run(1); return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this } }), k = j.props; for (kc(k, j.opts.specialEasing); g > f; f++)if (d = ec[f].call(j, a, k, j.opts)) return d; return n.map(k, ic, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) } n.Animation = n.extend(lc, { tweener: function (a, b) { n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++)c = a[d], fc[c] = fc[c] || [], fc[c].unshift(b) }, prefilter: function (a, b) { b ? ec.unshift(a) : ec.push(a) } }), n.speed = function (a, b, c) { var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b }; return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () { n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue) }, d }, n.fn.extend({ fadeTo: function (a, b, c, d) { return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () { var b = lc(this, n.extend({}, a), f); (e || n._data(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = n._data(this); if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && dc.test(e) && d(g[e]); for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); (b || !c) && n.dequeue(this, a) }) }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = n._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0; for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this); delete c.finish }) } }), n.each(["toggle", "show", "hide"], function (a, b) { var c = n.fn[b]; n.fn[b] = function (a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(hc(b, !0), a, d, e) } }), n.each({ slideDown: hc("show"), slideUp: hc("hide"), slideToggle: hc("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { n.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), n.timers = [], n.fx.tick = function () { var a, b = n.timers, c = 0; for (_b = n.now(); c < b.length; c++)a = b[c], a() || b[c] !== a || b.splice(c--, 1); b.length || n.fx.stop(), _b = void 0 }, n.fx.timer = function (a) { n.timers.push(a), a() ? n.fx.start() : n.timers.pop() }, n.fx.interval = 13, n.fx.start = function () { ac || (ac = setInterval(n.fx.tick, n.fx.interval)) }, n.fx.stop = function () { clearInterval(ac), ac = null }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (a, b) { return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) { var d = setTimeout(b, a); c.stop = function () { clearTimeout(d) } }) }, function () { var a, b, c, d, e = z.createElement("div"); e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = z.createElement("select"), d = c.appendChild(z.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== e.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = d.selected, l.enctype = !!z.createElement("form").enctype, c.disabled = !0, l.optDisabled = !d.disabled, b = z.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value, a = b = c = d = e = null }(); var mc = /\r/g; n.fn.extend({ val: function (a) { var b, c, d, e = this[0]; { if (arguments.length) return d = n.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) { return null == a ? "" : a + "" })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(mc, "") : null == c ? "" : c) } } }), n.extend({ valHooks: { option: { get: function (a) { var b = n.find.attr(a, "value"); return null != b ? b : n.text(a) } }, select: { get: function (a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) { if (b = n(c).val(), f) return b; g.push(b) } return g }, set: function (a, b) { var c, d, e = a.options, f = n.makeArray(b), g = e.length; while (g--) if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1; return c || (a.selectedIndex = -1), e } } } }), n.each(["radio", "checkbox"], function () { n.valHooks[this] = { set: function (a, b) { return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0 } }, l.checkOn || (n.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var nc, oc, pc = n.expr.attrHandle, qc = /^(?:checked|selected)$/i, rc = l.getSetAttribute, sc = l.input; n.fn.extend({ attr: function (a, b) { return W(this, n.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { n.removeAttr(this, a) }) } }), n.extend({ attr: function (a, b, c) { var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === L ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? oc : nc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b)) }, removeAttr: function (a, b) { var c, d, e = 0, f = b && b.match(F); if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? sc && rc || !qc.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(rc ? c : d) }, attrHooks: { type: { set: function (a, b) { if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } } }), oc = { set: function (a, b, c) { return b === !1 ? n.removeAttr(a, c) : sc && rc || !qc.test(c) ? a.setAttribute(!rc && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = pc[b] || n.find.attr; pc[b] = sc && rc || !qc.test(b) ? function (a, b, d) { var e, f; return d || (f = pc[b], pc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, pc[b] = f), e } : function (a, b, c) { return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null } }), sc && rc || (n.attrHooks.value = { set: function (a, b, c) { return n.nodeName(a, "input") ? void (a.defaultValue = b) : nc && nc.set(a, b, c) } }), rc || (nc = { set: function (a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, pc.id = pc.name = pc.coords = function (a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, n.valHooks.button = { get: function (a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0 }, set: nc.set }, n.attrHooks.contenteditable = { set: function (a, b, c) { nc.set(a, "" === b ? !1 : b, c) } }, n.each(["width", "height"], function (a, b) { n.attrHooks[b] = { set: function (a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), l.style || (n.attrHooks.style = { get: function (a) { return a.style.cssText || void 0 }, set: function (a, b) { return a.style.cssText = b + "" } }); var tc = /^(?:input|select|textarea|button|object)$/i, uc = /^(?:a|area)$/i; n.fn.extend({ prop: function (a, b) { return W(this, n.prop, a, b, arguments.length > 1) }, removeProp: function (a) { return a = n.propFix[a] || a, this.each(function () { try { this[a] = void 0, delete this[a] } catch (b) { } }) } }), n.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function (a, b, c) { var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function (a) { var b = n.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : tc.test(a.nodeName) || uc.test(a.nodeName) && a.href ? 0 : -1 } } } }), l.hrefNormalized || n.each(["href", "src"], function (a, b) { n.propHooks[b] = { get: function (a) { return a.getAttribute(b, 4) } } }), l.optSelected || (n.propHooks.selected = { get: function (a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { n.propFix[this.toLowerCase()] = this }), l.enctype || (n.propFix.enctype = "encoding"); var vc = /[\t\r\n\f]/g; n.fn.extend({ addClass: function (a) { var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a; if (n.isFunction(a)) return this.each(function (b) { n(this).addClass(a.call(this, b, this.className)) }); if (j) for (b = (a || "").match(F) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : " ")) { f = 0; while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " "); g = n.trim(d), c.className !== g && (c.className = g) } return this }, removeClass: function (a) { var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a; if (n.isFunction(a)) return this.each(function (b) { n(this).removeClass(a.call(this, b, this.className)) }); if (j) for (b = (a || "").match(F) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : "")) { f = 0; while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " "); g = a ? n.trim(d) : "", c.className !== g && (c.className = g) } return this }, toggleClass: function (a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) { n(this).toggleClass(a.call(this, c, this.className, b), b) } : function () { if ("string" === c) { var b, d = 0, e = n(this), f = a.match(F) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else (c === L || "boolean" === c) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : n._data(this, "__className__") || "") }) }, hasClass: function (a) { for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vc, " ").indexOf(b) >= 0) return !0; return !1 } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) { n.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), n.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }); var wc = n.now(), xc = /\?/, yc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g; n.parseJSON = function (b) { if (a.JSON && a.JSON.parse) return a.JSON.parse(b + ""); var c, d = null, e = n.trim(b + ""); return e && !n.trim(e.replace(yc, function (a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : n.error("Invalid JSON: " + b) }, n.parseXML = function (b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c }; var zc, Ac, Bc = /#.*$/, Cc = /([?&])_=[^&]*/, Dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ec = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Fc = /^(?:GET|HEAD)$/, Gc = /^\/\//, Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ic = {}, Jc = {}, Kc = "*/".concat("*"); try { Ac = location.href } catch (Lc) { Ac = z.createElement("a"), Ac.href = "", Ac = Ac.href } zc = Hc.exec(Ac.toLowerCase()) || []; function Mc(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(F) || []; if (n.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } } function Nc(a, b, c, d) { var e = {}, f = a === Jc; function g(h) { var i; return e[h] = !0, n.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") } function Oc(a, b) { var c, d, e = n.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && n.extend(!0, a, c), a } function Pc(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type")); if (e) for (g in h) if (h[g] && h[g].test(e)) { i.unshift(g); break } if (i[0] in c) f = i[0]; else { for (g in c) { if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break } d || (d = g) } f = f || d } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 } function Qc(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0) if (g && a["throws"]) b = g(b); else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } } n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ac, type: "GET", isLocal: Ec.test(zc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) { return b ? Oc(Oc(a, n.ajaxSettings), b) : Oc(n.ajaxSettings, a) }, ajaxPrefilter: Mc(Ic), ajaxTransport: Mc(Jc), ajax: function (a, b) { "object" == typeof a && (b = a, a = void 0), b = b || {}; var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = { readyState: 0, getResponseHeader: function (a) { var b; if (2 === t) { if (!j) { j = {}; while (b = Dc.exec(f)) j[b[1].toLowerCase()] = b[2] } b = j[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return 2 === t ? f : null }, setRequestHeader: function (a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this }, overrideMimeType: function (a) { return t || (k.mimeType = a), this }, statusCode: function (a) { var b; if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]); return this }, abort: function (a) { var b = a || u; return i && i.abort(b), x(0, b), this } }; if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ac) + "").replace(Bc, "").replace(Gc, zc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(F) || [""], null == k.crossDomain && (c = Hc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === zc[1] && c[2] === zc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (zc[3] || ("http:" === zc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), Nc(Ic, k, b, v), 2 === t) return v; h = k.global, h && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Fc.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (xc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Cc.test(e) ? e.replace(Cc, "$1_=" + wc++) : e + (xc.test(e) ? "&" : "?") + "_=" + wc++)), k.ifModified && (n.lastModified[e] && v.setRequestHeader("If-Modified-Since", n.lastModified[e]), n.etag[e] && v.setRequestHeader("If-None-Match", n.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Kc + "; q=0.01" : "") : k.accepts["*"]); for (d in k.headers) v.setRequestHeader(d, k.headers[d]); if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort(); u = "abort"; for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]); if (i = Nc(Jc, k, b, v)) { v.readyState = 1, h && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () { v.abort("timeout") }, k.timeout)); try { t = 1, i.send(r, x) } catch (w) { if (!(2 > t)) throw w; x(-1, w) } } else x(-1, "No Transport"); function x(a, b, c, d) { var j, r, s, u, w, x = b; 2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Pc(k, v, c)), u = Qc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (n.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop"))) } return v }, getJSON: function (a, b, c) { return n.get(a, b, c, "json") }, getScript: function (a, b) { return n.get(a, void 0, b, "script") } }), n.each(["get", "post"], function (a, b) { n[b] = function (a, c, d, e) { return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { n.fn[b] = function (a) { return this.on(b, a) } }), n._evalUrl = function (a) { return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, n.fn.extend({ wrapAll: function (a) { if (n.isFunction(a)) return this.each(function (b) { n(this).wrapAll(a.call(this, b)) }); if (this[0]) { var b = n(a, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild; return a }).append(this) } return this }, wrapInner: function (a) { return this.each(n.isFunction(a) ? function (b) { n(this).wrapInner(a.call(this, b)) } : function () { var b = n(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = n.isFunction(a); return this.each(function (c) { n(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function () { return this.parent().each(function () { n.nodeName(this, "body") || n(this).replaceWith(this.childNodes) }).end() } }), n.expr.filters.hidden = function (a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (a.style && a.style.display || n.css(a, "display")) }, n.expr.filters.visible = function (a) { return !n.expr.filters.hidden(a) }; var Rc = /%20/g, Sc = /\[\]$/, Tc = /\r?\n/g, Uc = /^(?:submit|button|image|reset|file)$/i, Vc = /^(?:input|select|textarea|keygen)/i; function Wc(a, b, c, d) { var e; if (n.isArray(b)) n.each(b, function (b, e) { c || Sc.test(a) ? d(a, e) : Wc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Wc(a + "[" + e + "]", b[e], c, d) } n.param = function (a, b) { var c, d = [], e = function (a, b) { b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () { e(this.name, this.value) }); else for (c in a) Wc(c, a[c], b, e); return d.join("&").replace(Rc, "+") }, n.fn.extend({ serialize: function () { return n.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var a = n.prop(this, "elements"); return a ? n.makeArray(a) : this }).filter(function () { var a = this.type; return this.name && !n(this).is(":disabled") && Vc.test(this.nodeName) && !Uc.test(a) && (this.checked || !X.test(a)) }).map(function (a, b) { var c = n(this).val(); return null == c ? null : n.isArray(c) ? n.map(c, function (a) { return { name: b.name, value: a.replace(Tc, "\r\n") } }) : { name: b.name, value: c.replace(Tc, "\r\n") } }).get() } }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $c() || _c() } : $c; var Xc = 0, Yc = {}, Zc = n.ajaxSettings.xhr(); a.ActiveXObject && n(a).on("unload", function () { for (var a in Yc) Yc[a](void 0, !0) }), l.cors = !!Zc && "withCredentials" in Zc, Zc = l.ajax = !!Zc, Zc && n.ajaxTransport(function (a) { if (!a.crossDomain || l.cors) { var b; return { send: function (c, d) { var e, f = a.xhr(), g = ++Xc; if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e]; a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"); for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + ""); f.send(a.hasContent && a.data || null), b = function (c, e) { var h, i, j; if (b && (e || 4 === f.readyState)) if (delete Yc[g], b = void 0, f.onreadystatechange = n.noop, e) 4 !== f.readyState && f.abort(); else { j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText); try { i = f.statusText } catch (k) { i = "" } h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404 } j && d(h, i, j, f.getAllResponseHeaders()) }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Yc[g] = b : b() }, abort: function () { b && b(void 0, !0) } } } }); function $c() { try { return new a.XMLHttpRequest } catch (b) { } } function _c() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) { } } n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (a) { return n.globalEval(a), a } } }), n.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), n.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, c = z.head || n("head")[0] || z.documentElement; return { send: function (d, e) { b = z.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) { (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success")) }, c.insertBefore(b, c.firstChild) }, abort: function () { b && b.onload(void 0, !0) } } } }); var ad = [], bd = /(=)\?(?=&|$)|\?\?/; n.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = ad.pop() || n.expando + "_" + wc++; return this[a] = !0, a } }), n.ajaxPrefilter("json jsonp", function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (bd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (xc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () { return g || n.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments }, d.always(function () { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), n.parseHTML = function (a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || z; var d = v.exec(a), e = !c && []; return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes)) }; var cd = n.fn.load; n.fn.load = function (a, b, c) { if ("string" != typeof a && cd) return cd.apply(this, arguments); var d, e, f, g = this, h = a.indexOf(" "); return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && n.ajax({ url: a, type: f, dataType: "html", data: b }).done(function (a) { e = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a) }).complete(c && function (a, b) { g.each(c, e || [a.responseText, b, a]) }), this }, n.expr.filters.animated = function (a) { return n.grep(n.timers, function (b) { return a === b.elem }).length }; var dd = a.document.documentElement; function ed(a) { return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 } n.offset = { setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, n.fn.extend({ offset: function (a) { if (arguments.length) return void 0 === a ? this : this.each(function (b) { n.offset.setOffset(this, a, b) }); var b, c, d = { top: 0, left: 0 }, e = this[0], f = e && e.ownerDocument; if (f) return b = f.documentElement, n.contains(b, e) ? (typeof e.getBoundingClientRect !== L && (d = e.getBoundingClientRect()), c = ed(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d }, position: function () { if (this[0]) { var a, b, c = { top: 0, left: 0 }, d = this[0]; return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - n.css(d, "marginTop", !0), left: b.left - c.left - n.css(d, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent || dd; while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent; return a || dd }) } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var c = /Y/.test(b); n.fn[a] = function (d) { return W(this, function (a, d, e) { var f = ed(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) } }), n.each(["top", "left"], function (a, b) { n.cssHooks[b] = Mb(l.pixelPosition, function (a, c) { return c ? (c = Kb(a, b), Ib.test(c) ? n(a).position()[b] + "px" : c) : void 0 }) }), n.each({ Height: "height", Width: "width" }, function (a, b) { n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) { n.fn[d] = function (d, e) { var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border"); return W(this, function (b, c, d) { var e; return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), n.fn.size = function () { return this.length }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () { return n }); var fd = a.jQuery, gd = a.$; return n.noConflict = function (b) { return a.$ === n && (a.$ = gd), b && a.jQuery === n && (a.jQuery = fd), n }, typeof b === L && (a.jQuery = a.$ = n), n
});


(function (f) { if (typeof exports === "object" && typeof module !== "undefined") { module.exports = f() } else if (typeof define === "function" && define.amd) { define([], f) } else { var g; if (typeof window !== "undefined") { g = window } else if (typeof global !== "undefined") { g = global } else if (typeof self !== "undefined") { g = self } else { g = this } g.adapter = f() } })(function () {
    var define, module, exports; return (function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
        1: [function (require, module, exports) {
            /*
             *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
             *
             *  Use of this source code is governed by a BSD-style license
             *  that can be found in the LICENSE file in the root of the source
             *  tree.
             */
            /* eslint-env node */

            'use strict';

            var _adapter_factory = require('./adapter_factory.js');

            var adapter = (0, _adapter_factory.adapterFactory)({ window: typeof window === 'undefined' ? undefined : window });
            module.exports = adapter; // this is the difference from adapter_core.

        }, { "./adapter_factory.js": 2 }], 2: [function (require, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.adapterFactory = adapterFactory;

            var _utils = require('./utils');

            var utils = _interopRequireWildcard(_utils);

            var _chrome_shim = require('./chrome/chrome_shim');

            var chromeShim = _interopRequireWildcard(_chrome_shim);

            var _edge_shim = require('./edge/edge_shim');

            var edgeShim = _interopRequireWildcard(_edge_shim);

            var _firefox_shim = require('./firefox/firefox_shim');

            var firefoxShim = _interopRequireWildcard(_firefox_shim);

            var _safari_shim = require('./safari/safari_shim');

            var safariShim = _interopRequireWildcard(_safari_shim);

            var _common_shim = require('./common_shim');

            var commonShim = _interopRequireWildcard(_common_shim);

            function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

            // Shimming starts here.
            /*
             *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
             *
             *  Use of this source code is governed by a BSD-style license
             *  that can be found in the LICENSE file in the root of the source
             *  tree.
             */
            function adapterFactory() {
                var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    window = _ref.window;

                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                    shimChrome: true,
                    shimFirefox: true,
                    shimEdge: true,
                    shimSafari: true
                };

                // Utils.
                var logging = utils.log;
                var browserDetails = utils.detectBrowser(window);

                var adapter = {
                    browserDetails: browserDetails,
                    commonShim: commonShim,
                    extractVersion: utils.extractVersion,
                    disableLog: utils.disableLog,
                    disableWarnings: utils.disableWarnings
                };

                // Shim browser if found.
                switch (browserDetails.browser) {
                    case 'chrome':
                        if (!chromeShim || !chromeShim.shimPeerConnection || !options.shimChrome) {
                            logging('Chrome shim is not included in this adapter release.');
                            return adapter;
                        }
                        if (browserDetails.version === null) {
                            logging('Chrome shim can not determine version, not shimming.');
                            return adapter;
                        }
                        logging('adapter.js shimming chrome.');
                        // Export to the adapter global object visible in the browser.
                        adapter.browserShim = chromeShim;

                        chromeShim.shimGetUserMedia(window);
                        chromeShim.shimMediaStream(window);
                        chromeShim.shimPeerConnection(window);
                        chromeShim.shimOnTrack(window);
                        chromeShim.shimAddTrackRemoveTrack(window);
                        chromeShim.shimGetSendersWithDtmf(window);
                        chromeShim.shimGetStats(window);
                        chromeShim.shimSenderReceiverGetStats(window);
                        chromeShim.fixNegotiationNeeded(window);

                        commonShim.shimRTCIceCandidate(window);
                        commonShim.shimConnectionState(window);
                        commonShim.shimMaxMessageSize(window);
                        commonShim.shimSendThrowTypeError(window);
                        commonShim.removeAllowExtmapMixed(window);
                        break;
                    case 'firefox':
                        if (!firefoxShim || !firefoxShim.shimPeerConnection || !options.shimFirefox) {
                            logging('Firefox shim is not included in this adapter release.');
                            return adapter;
                        }
                        logging('adapter.js shimming firefox.');
                        // Export to the adapter global object visible in the browser.
                        adapter.browserShim = firefoxShim;

                        firefoxShim.shimGetUserMedia(window);
                        firefoxShim.shimPeerConnection(window);
                        firefoxShim.shimOnTrack(window);
                        firefoxShim.shimRemoveStream(window);
                        firefoxShim.shimSenderGetStats(window);
                        firefoxShim.shimReceiverGetStats(window);
                        firefoxShim.shimRTCDataChannel(window);
                        firefoxShim.shimAddTransceiver(window);
                        firefoxShim.shimGetParameters(window);
                        firefoxShim.shimCreateOffer(window);
                        firefoxShim.shimCreateAnswer(window);

                        commonShim.shimRTCIceCandidate(window);
                        commonShim.shimConnectionState(window);
                        commonShim.shimMaxMessageSize(window);
                        commonShim.shimSendThrowTypeError(window);
                        break;
                    case 'edge':
                        if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
                            logging('MS edge shim is not included in this adapter release.');
                            return adapter;
                        }
                        logging('adapter.js shimming edge.');
                        // Export to the adapter global object visible in the browser.
                        adapter.browserShim = edgeShim;

                        edgeShim.shimGetUserMedia(window);
                        edgeShim.shimGetDisplayMedia(window);
                        edgeShim.shimPeerConnection(window);
                        edgeShim.shimReplaceTrack(window);

                        // the edge shim implements the full RTCIceCandidate object.

                        commonShim.shimMaxMessageSize(window);
                        commonShim.shimSendThrowTypeError(window);
                        break;
                    case 'safari':
                        if (!safariShim || !options.shimSafari) {
                            logging('Safari shim is not included in this adapter release.');
                            return adapter;
                        }
                        logging('adapter.js shimming safari.');
                        // Export to the adapter global object visible in the browser.
                        adapter.browserShim = safariShim;

                        safariShim.shimRTCIceServerUrls(window);
                        safariShim.shimCreateOfferLegacy(window);
                        safariShim.shimCallbacksAPI(window);
                        safariShim.shimLocalStreamsAPI(window);
                        safariShim.shimRemoteStreamsAPI(window);
                        safariShim.shimTrackEventTransceiver(window);
                        safariShim.shimGetUserMedia(window);
                        safariShim.shimAudioContext(window);

                        commonShim.shimRTCIceCandidate(window);
                        commonShim.shimMaxMessageSize(window);
                        commonShim.shimSendThrowTypeError(window);
                        commonShim.removeAllowExtmapMixed(window);
                        break;
                    default:
                        logging('Unsupported browser!');
                        break;
                }

                return adapter;
            }

            // Browser shims.

        }, { "./chrome/chrome_shim": 3, "./common_shim": 6, "./edge/edge_shim": 7, "./firefox/firefox_shim": 11, "./safari/safari_shim": 14, "./utils": 15 }], 3: [function (require, module, exports) {
            /*
             *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
             *
             *  Use of this source code is governed by a BSD-style license
             *  that can be found in the LICENSE file in the root of the source
             *  tree.
             */
            /* eslint-env node */
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            var _getusermedia = require('./getusermedia');

            Object.defineProperty(exports, 'shimGetUserMedia', {
                enumerable: true,
                get: function get() {
                    return _getusermedia.shimGetUserMedia;
                }
            });

            var _getdisplaymedia = require('./getdisplaymedia');

            Object.defineProperty(exports, 'shimGetDisplayMedia', {
                enumerable: true,
                get: function get() {
                    return _getdisplaymedia.shimGetDisplayMedia;
                }
            });
            exports.shimMediaStream = shimMediaStream;
            exports.shimOnTrack = shimOnTrack;
            exports.shimGetSendersWithDtmf = shimGetSendersWithDtmf;
            exports.shimGetStats = shimGetStats;
            exports.shimSenderReceiverGetStats = shimSenderReceiverGetStats;
            exports.shimAddTrackRemoveTrackWithNative = shimAddTrackRemoveTrackWithNative;
            exports.shimAddTrackRemoveTrack = shimAddTrackRemoveTrack;
            exports.shimPeerConnection = shimPeerConnection;
            exports.fixNegotiationNeeded = fixNegotiationNeeded;

            var _utils = require('../utils.js');

            var utils = _interopRequireWildcard(_utils);

            function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

            function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

            function shimMediaStream(window) {
                window.MediaStream = window.MediaStream || window.webkitMediaStream;
            }

            function shimOnTrack(window) {
                if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
                    Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
                        get: function get() {
                            return this._ontrack;
                        },
                        set: function set(f) {
                            if (this._ontrack) {
                                this.removeEventListener('track', this._ontrack);
                            }
                            this.addEventListener('track', this._ontrack = f);
                        },

                        enumerable: true,
                        configurable: true
                    });
                    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
                    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
                        var _this = this;

                        if (!this._ontrackpoly) {
                            this._ontrackpoly = function (e) {
                                // onaddstream does not fire when a track is added to an existing
                                // stream. But stream.onaddtrack is implemented so we use that.
                                e.stream.addEventListener('addtrack', function (te) {
                                    var receiver = void 0;
                                    if (window.RTCPeerConnection.prototype.getReceivers) {
                                        receiver = _this.getReceivers().find(function (r) {
                                            return r.track && r.track.id === te.track.id;
                                        });
                                    } else {
                                        receiver = { track: te.track };
                                    }

                                    var event = new Event('track');
                                    event.track = te.track;
                                    event.receiver = receiver;
                                    event.transceiver = { receiver: receiver };
                                    event.streams = [e.stream];
                                    _this.dispatchEvent(event);
                                });
                                e.stream.getTracks().forEach(function (track) {
                                    var receiver = void 0;
                                    if (window.RTCPeerConnection.prototype.getReceivers) {
                                        receiver = _this.getReceivers().find(function (r) {
                                            return r.track && r.track.id === track.id;
                                        });
                                    } else {
                                        receiver = { track: track };
                                    }
                                    var event = new Event('track');
                                    event.track = track;
                                    event.receiver = receiver;
                                    event.transceiver = { receiver: receiver };
                                    event.streams = [e.stream];
                                    _this.dispatchEvent(event);
                                });
                            };
                            this.addEventListener('addstream', this._ontrackpoly);
                        }
                        return origSetRemoteDescription.apply(this, arguments);
                    };
                } else {
                    // even if RTCRtpTransceiver is in window, it is only used and
                    // emitted in unified-plan. Unfortunately this means we need
                    // to unconditionally wrap the event.
                    utils.wrapPeerConnectionEvent(window, 'track', function (e) {
                        if (!e.transceiver) {
                            Object.defineProperty(e, 'transceiver', { value: { receiver: e.receiver } });
                        }
                        return e;
                    });
                }
            }

            function shimGetSendersWithDtmf(window) {
                // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
                if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
                    var shimSenderWithDtmf = function shimSenderWithDtmf(pc, track) {
                        return {
                            track: track,
                            get dtmf() {
                                if (this._dtmf === undefined) {
                                    if (track.kind === 'audio') {
                                        this._dtmf = pc.createDTMFSender(track);
                                    } else {
                                        this._dtmf = null;
                                    }
                                }
                                return this._dtmf;
                            },
                            _pc: pc
                        };
                    };

                    // augment addTrack when getSenders is not available.
                    if (!window.RTCPeerConnection.prototype.getSenders) {
                        window.RTCPeerConnection.prototype.getSenders = function getSenders() {
                            this._senders = this._senders || [];
                            return this._senders.slice(); // return a copy of the internal state.
                        };
                        var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
                        window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
                            var sender = origAddTrack.apply(this, arguments);
                            if (!sender) {
                                sender = shimSenderWithDtmf(this, track);
                                this._senders.push(sender);
                            }
                            return sender;
                        };

                        var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
                        window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
                            origRemoveTrack.apply(this, arguments);
                            var idx = this._senders.indexOf(sender);
                            if (idx !== -1) {
                                this._senders.splice(idx, 1);
                            }
                        };
                    }
                    var origAddStream = window.RTCPeerConnection.prototype.addStream;
                    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
                        var _this2 = this;

                        this._senders = this._senders || [];
                        origAddStream.apply(this, [stream]);
                        stream.getTracks().forEach(function (track) {
                            _this2._senders.push(shimSenderWithDtmf(_this2, track));
                        });
                    };

                    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
                    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
                        var _this3 = this;

                        this._senders = this._senders || [];
                        origRemoveStream.apply(this, [stream]);

                        stream.getTracks().forEach(function (track) {
                            var sender = _this3._senders.find(function (s) {
                                return s.track === track;
                            });
                            if (sender) {
                                // remove sender
                                _this3._senders.splice(_this3._senders.indexOf(sender), 1);
                            }
                        });
                    };
                } else if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
                    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
                    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
                        var _this4 = this;

                        var senders = origGetSenders.apply(this, []);
                        senders.forEach(function (sender) {
                            return sender._pc = _this4;
                        });
                        return senders;
                    };

                    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
                        get: function get() {
                            if (this._dtmf === undefined) {
                                if (this.track.kind === 'audio') {
                                    this._dtmf = this._pc.createDTMFSender(this.track);
                                } else {
                                    this._dtmf = null;
                                }
                            }
                            return this._dtmf;
                        }
                    });
                }
            }

            function shimGetStats(window) {
                if (!window.RTCPeerConnection) {
                    return;
                }

                var origGetStats = window.RTCPeerConnection.prototype.getStats;
                window.RTCPeerConnection.prototype.getStats = function getStats() {
                    var _this5 = this;

                    var _arguments = Array.prototype.slice.call(arguments),
                        selector = _arguments[0],
                        onSucc = _arguments[1],
                        onErr = _arguments[2];

                    // If selector is a function then we are in the old style stats so just
                    // pass back the original getStats format to avoid breaking old users.


                    if (arguments.length > 0 && typeof selector === 'function') {
                        return origGetStats.apply(this, arguments);
                    }

                    // When spec-style getStats is supported, return those when called with
                    // either no arguments or the selector argument is null.
                    if (origGetStats.length === 0 && (arguments.length === 0 || typeof selector !== 'function')) {
                        return origGetStats.apply(this, []);
                    }

                    var fixChromeStats_ = function fixChromeStats_(response) {
                        var standardReport = {};
                        var reports = response.result();
                        reports.forEach(function (report) {
                            var standardStats = {
                                id: report.id,
                                timestamp: report.timestamp,
                                type: {
                                    localcandidate: 'local-candidate',
                                    remotecandidate: 'remote-candidate'
                                }[report.type] || report.type
                            };
                            report.names().forEach(function (name) {
                                standardStats[name] = report.stat(name);
                            });
                            standardReport[standardStats.id] = standardStats;
                        });

                        return standardReport;
                    };

                    // shim getStats with maplike support
                    var makeMapStats = function makeMapStats(stats) {
                        return new Map(Object.keys(stats).map(function (key) {
                            return [key, stats[key]];
                        }));
                    };

                    if (arguments.length >= 2) {
                        var successCallbackWrapper_ = function successCallbackWrapper_(response) {
                            onSucc(makeMapStats(fixChromeStats_(response)));
                        };

                        return origGetStats.apply(this, [successCallbackWrapper_, selector]);
                    }

                    // promise-support
                    return new Promise(function (resolve, reject) {
                        origGetStats.apply(_this5, [function (response) {
                            resolve(makeMapStats(fixChromeStats_(response)));
                        }, reject]);
                    }).then(onSucc, onErr);
                };
            }

            function shimSenderReceiverGetStats(window) {
                if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) {
                    return;
                }

                // shim sender stats.
                if (!('getStats' in window.RTCRtpSender.prototype)) {
                    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
                    if (origGetSenders) {
                        window.RTCPeerConnection.prototype.getSenders = function getSenders() {
                            var _this6 = this;

                            var senders = origGetSenders.apply(this, []);
                            senders.forEach(function (sender) {
                                return sender._pc = _this6;
                            });
                            return senders;
                        };
                    }

                    var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
                    if (origAddTrack) {
                        window.RTCPeerConnection.prototype.addTrack = function addTrack() {
                            var sender = origAddTrack.apply(this, arguments);
                            sender._pc = this;
                            return sender;
                        };
                    }
                    window.RTCRtpSender.prototype.getStats = function getStats() {
                        var sender = this;
                        return this._pc.getStats().then(function (result) {
                            return (
                                /* Note: this will include stats of all senders that
                                 *   send a track with the same id as sender.track as
                                 *   it is not possible to identify the RTCRtpSender.
                                 */
                                utils.filterStats(result, sender.track, true)
                            );
                        });
                    };
                }

                // shim receiver stats.
                if (!('getStats' in window.RTCRtpReceiver.prototype)) {
                    var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
                    if (origGetReceivers) {
                        window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
                            var _this7 = this;

                            var receivers = origGetReceivers.apply(this, []);
                            receivers.forEach(function (receiver) {
                                return receiver._pc = _this7;
                            });
                            return receivers;
                        };
                    }
                    utils.wrapPeerConnectionEvent(window, 'track', function (e) {
                        e.receiver._pc = e.srcElement;
                        return e;
                    });
                    window.RTCRtpReceiver.prototype.getStats = function getStats() {
                        var receiver = this;
                        return this._pc.getStats().then(function (result) {
                            return utils.filterStats(result, receiver.track, false);
                        });
                    };
                }

                if (!('getStats' in window.RTCRtpSender.prototype && 'getStats' in window.RTCRtpReceiver.prototype)) {
                    return;
                }

                // shim RTCPeerConnection.getStats(track).
                var origGetStats = window.RTCPeerConnection.prototype.getStats;
                window.RTCPeerConnection.prototype.getStats = function getStats() {
                    if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
                        var track = arguments[0];
                        var sender = void 0;
                        var receiver = void 0;
                        var err = void 0;
                        this.getSenders().forEach(function (s) {
                            if (s.track === track) {
                                if (sender) {
                                    err = true;
                                } else {
                                    sender = s;
                                }
                            }
                        });
                        this.getReceivers().forEach(function (r) {
                            if (r.track === track) {
                                if (receiver) {
                                    err = true;
                                } else {
                                    receiver = r;
                                }
                            }
                            return r.track === track;
                        });
                        if (err || sender && receiver) {
                            return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
                        } else if (sender) {
                            return sender.getStats();
                        } else if (receiver) {
                            return receiver.getStats();
                        }
                        return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
                    }
                    return origGetStats.apply(this, arguments);
                };
            }

            function shimAddTrackRemoveTrackWithNative(window) {
                // shim addTrack/removeTrack with native variants in order to make
                // the interactions with legacy getLocalStreams behave as in other browsers.
                // Keeps a mapping stream.id => [stream, rtpsenders...]
                window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
                    var _this8 = this;

                    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                    return Object.keys(this._shimmedLocalStreams).map(function (streamId) {
                        return _this8._shimmedLocalStreams[streamId][0];
                    });
                };

                var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
                window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
                    if (!stream) {
                        return origAddTrack.apply(this, arguments);
                    }
                    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

                    var sender = origAddTrack.apply(this, arguments);
                    if (!this._shimmedLocalStreams[stream.id]) {
                        this._shimmedLocalStreams[stream.id] = [stream, sender];
                    } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
                        this._shimmedLocalStreams[stream.id].push(sender);
                    }
                    return sender;
                };

                var origAddStream = window.RTCPeerConnection.prototype.addStream;
                window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
                    var _this9 = this;

                    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

                    stream.getTracks().forEach(function (track) {
                        var alreadyExists = _this9.getSenders().find(function (s) {
                            return s.track === track;
                        });
                        if (alreadyExists) {
                            throw new DOMException('Track already exists.', 'InvalidAccessError');
                        }
                    });
                    var existingSenders = this.getSenders();
                    origAddStream.apply(this, arguments);
                    var newSenders = this.getSenders().filter(function (newSender) {
                        return existingSenders.indexOf(newSender) === -1;
                    });
                    this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
                };

                var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
                window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
                    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                    delete this._shimmedLocalStreams[stream.id];
                    return origRemoveStream.apply(this, arguments);
                };

                var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
                window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
                    var _this10 = this;

                    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                    if (sender) {
                        Object.keys(this._shimmedLocalStreams).forEach(function (streamId) {
                            var idx = _this10._shimmedLocalStreams[streamId].indexOf(sender);
                            if (idx !== -1) {
                                _this10._shimmedLocalStreams[streamId].splice(idx, 1);
                            }
                            if (_this10._shimmedLocalStreams[streamId].length === 1) {
                                delete _this10._shimmedLocalStreams[streamId];
                            }
                        });
                    }
                    return origRemoveTrack.apply(this, arguments);
                };
            }

            function shimAddTrackRemoveTrack(window) {
                if (!window.RTCPeerConnection) {
                    return;
                }
                var browserDetails = utils.detectBrowser(window);
                // shim addTrack and removeTrack.
                if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
                    return shimAddTrackRemoveTrackWithNative(window);
                }

                // also shim pc.getLocalStreams when addTrack is shimmed
                // to return the original streams.
                var origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
                window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
                    var _this11 = this;

                    var nativeStreams = origGetLocalStreams.apply(this);
                    this._reverseStreams = this._reverseStreams || {};
                    return nativeStreams.map(function (stream) {
                        return _this11._reverseStreams[stream.id];
                    });
                };

                var origAddStream = window.RTCPeerConnection.prototype.addStream;
                window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
                    var _this12 = this;

                    this._streams = this._streams || {};
                    this._reverseStreams = this._reverseStreams || {};

                    stream.getTracks().forEach(function (track) {
                        var alreadyExists = _this12.getSenders().find(function (s) {
                            return s.track === track;
                        });
                        if (alreadyExists) {
                            throw new DOMException('Track already exists.', 'InvalidAccessError');
                        }
                    });
                    // Add identity mapping for consistency with addTrack.
                    // Unless this is being used with a stream from addTrack.
                    if (!this._reverseStreams[stream.id]) {
                        var newStream = new window.MediaStream(stream.getTracks());
                        this._streams[stream.id] = newStream;
                        this._reverseStreams[newStream.id] = stream;
                        stream = newStream;
                    }
                    origAddStream.apply(this, [stream]);
                };

                var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
                window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
                    this._streams = this._streams || {};
                    this._reverseStreams = this._reverseStreams || {};

                    origRemoveStream.apply(this, [this._streams[stream.id] || stream]);
                    delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
                    delete this._streams[stream.id];
                };

                window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
                    var _this13 = this;

                    if (this.signalingState === 'closed') {
                        throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
                    }
                    var streams = [].slice.call(arguments, 1);
                    if (streams.length !== 1 || !streams[0].getTracks().find(function (t) {
                        return t === track;
                    })) {
                        // this is not fully correct but all we can manage without
                        // [[associated MediaStreams]] internal slot.
                        throw new DOMException('The adapter.js addTrack polyfill only supports a single ' + ' stream which is associated with the specified track.', 'NotSupportedError');
                    }

                    var alreadyExists = this.getSenders().find(function (s) {
                        return s.track === track;
                    });
                    if (alreadyExists) {
                        throw new DOMException('Track already exists.', 'InvalidAccessError');
                    }

                    this._streams = this._streams || {};
                    this._reverseStreams = this._reverseStreams || {};
                    var oldStream = this._streams[stream.id];
                    if (oldStream) {
                        // this is using odd Chrome behaviour, use with caution:
                        // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
                        // Note: we rely on the high-level addTrack/dtmf shim to
                        // create the sender with a dtmf sender.
                        oldStream.addTrack(track);

                        // Trigger ONN async.
                        Promise.resolve().then(function () {
                            _this13.dispatchEvent(new Event('negotiationneeded'));
                        });
                    } else {
                        var newStream = new window.MediaStream([track]);
                        this._streams[stream.id] = newStream;
                        this._reverseStreams[newStream.id] = stream;
                        this.addStream(newStream);
                    }
                    return this.getSenders().find(function (s) {
                        return s.track === track;
                    });
                };

                // replace the internal stream id with the external one and
                // vice versa.
                function replaceInternalStreamId(pc, description) {
                    var sdp = description.sdp;
                    Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
                        var externalStream = pc._reverseStreams[internalId];
                        var internalStream = pc._streams[externalStream.id];
                        sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
                    });
                    return new RTCSessionDescription({
                        type: description.type,
                        sdp: sdp
                    });
                }
                function replaceExternalStreamId(pc, description) {
                    var sdp = description.sdp;
                    Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
                        var externalStream = pc._reverseStreams[internalId];
                        var internalStream = pc._streams[externalStream.id];
                        sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
                    });
                    return new RTCSessionDescription({
                        type: description.type,
                        sdp: sdp
                    });
                }
                ['createOffer', 'createAnswer'].forEach(function (method) {
                    var nativeMethod = window.RTCPeerConnection.prototype[method];
                    var methodObj = _defineProperty({}, method, function () {
                        var _this14 = this;

                        var args = arguments;
                        var isLegacyCall = arguments.length && typeof arguments[0] === 'function';
                        if (isLegacyCall) {
                            return nativeMethod.apply(this, [function (description) {
                                var desc = replaceInternalStreamId(_this14, description);
                                args[0].apply(null, [desc]);
                            }, function (err) {
                                if (args[1]) {
                                    args[1].apply(null, err);
                                }
                            }, arguments[2]]);
                        }
                        return nativeMethod.apply(this, arguments).then(function (description) {
                            return replaceInternalStreamId(_this14, description);
                        });
                    });
                    window.RTCPeerConnection.prototype[method] = methodObj[method];
                });

                var origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
                window.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
                    if (!arguments.length || !arguments[0].type) {
                        return origSetLocalDescription.apply(this, arguments);
                    }
                    arguments[0] = replaceExternalStreamId(this, arguments[0]);
                    return origSetLocalDescription.apply(this, arguments);
                };

                // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

                var origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
                Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
                    get: function get() {
                        var description = origLocalDescription.get.apply(this);
                        if (description.type === '') {
                            return description;
                        }
                        return replaceInternalStreamId(this, description);
                    }
                });

                window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
                    var _this15 = this;

                    if (this.signalingState === 'closed') {
                        throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
                    }
                    // We can not yet check for sender instanceof RTCRtpSender
                    // since we shim RTPSender. So we check if sender._pc is set.
                    if (!sender._pc) {
                        throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
                    }
                    var isLocal = sender._pc === this;
                    if (!isLocal) {
                        throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
                    }

                    // Search for the native stream the senders track belongs to.
                    this._streams = this._streams || {};
                    var stream = void 0;
                    Object.keys(this._streams).forEach(function (streamid) {
                        var hasTrack = _this15._streams[streamid].getTracks().find(function (track) {
                            return sender.track === track;
                        });
                        if (hasTrack) {
                            stream = _this15._streams[streamid];
                        }
                    });

                    if (stream) {
                        if (stream.getTracks().length === 1) {
                            // if this is the last track of the stream, remove the stream. This
                            // takes care of any shimmed _senders.
                            this.removeStream(this._reverseStreams[stream.id]);
                        } else {
                            // relying on the same odd chrome behaviour as above.
                            stream.removeTrack(sender.track);
                        }
                        this.dispatchEvent(new Event('negotiationneeded'));
                    }
                };
            }

            function shimPeerConnection(window) {
                var browserDetails = utils.detectBrowser(window);

                if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
                    // very basic support for old versions.
                    window.RTCPeerConnection = window.webkitRTCPeerConnection;
                }
                if (!window.RTCPeerConnection) {
                    return;
                }

                var addIceCandidateNullSupported = window.RTCPeerConnection.prototype.addIceCandidate.length === 0;

                // shim implicit creation of RTCSessionDescription/RTCIceCandidate
                if (browserDetails.version < 53) {
                    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
                        var nativeMethod = window.RTCPeerConnection.prototype[method];
                        var methodObj = _defineProperty({}, method, function () {
                            arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                            return nativeMethod.apply(this, arguments);
                        });
                        window.RTCPeerConnection.prototype[method] = methodObj[method];
                    });
                }

                // support for addIceCandidate(null or undefined)
                var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
                window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
                    if (!addIceCandidateNullSupported && !arguments[0]) {
                        if (arguments[1]) {
                            arguments[1].apply(null);
                        }
                        return Promise.resolve();
                    }
                    // Firefox 68+ emits and processes {candidate: "", ...}, ignore
                    // in older versions. Native support planned for Chrome M77.
                    if (browserDetails.version < 78 && arguments[0] && arguments[0].candidate === '') {
                        return Promise.resolve();
                    }
                    return nativeAddIceCandidate.apply(this, arguments);
                };
            }

            // Attempt to fix ONN in plan-b mode.
            function fixNegotiationNeeded(window) {
                var browserDetails = utils.detectBrowser(window);
                utils.wrapPeerConnectionEvent(window, 'negotiationneeded', function (e) {
                    var pc = e.target;
                    if (browserDetails.version < 72 || pc.getConfiguration && pc.getConfiguration().sdpSemantics === 'plan-b') {
                        if (pc.signalingState !== 'stable') {
                            return;
                        }
                    }
                    return e;
                });
            }

        }, { "../utils.js": 15, "./getdisplaymedia": 4, "./getusermedia": 5 }], 4: [function (require, module, exports) {
            /*
             *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
             *
             *  Use of this source code is governed by a BSD-style license
             *  that can be found in the LICENSE file in the root of the source
             *  tree.
             */
            /* eslint-env node */
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.shimGetDisplayMedia = shimGetDisplayMedia;
            function shimGetDisplayMedia(window, getSourceId) {
                if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
                    return;
                }
                if (!window.navigator.mediaDevices) {
                    return;
                }
                // getSourceId is a function that returns a promise resolving with
                // the sourceId of the screen/window/tab to be shared.
                if (typeof getSourceId !== 'function') {
                    console.error('shimGetDisplayMedia: getSourceId argument is not ' + 'a function');
                    return;
                }
                window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
                    return getSourceId(constraints).then(function (sourceId) {
                        var widthSpecified = constraints.video && constraints.video.width;
                        var heightSpecified = constraints.video && constraints.video.height;
                        var frameRateSpecified = constraints.video && constraints.video.frameRate;
                        constraints.video = {
                            mandatory: {
                                chromeMediaSource: 'desktop',
                                chromeMediaSourceId: sourceId,
                                maxFrameRate: frameRateSpecified || 3
                            }
                        };
                        if (widthSpecified) {
                            constraints.video.mandatory.maxWidth = widthSpecified;
                        }
                        if (heightSpecified) {
                            constraints.video.mandatory.maxHeight = heightSpecified;
                        }
                        return window.navigator.mediaDevices.getUserMedia(constraints);
                    });
                };
            }

        }, {}], 5: [function (require, module, exports) {
            /*
             *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
             *
             *  Use of this source code is governed by a BSD-style license
             *  that can be found in the LICENSE file in the root of the source
             *  tree.
             */
            /* eslint-env node */
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            exports.shimGetUserMedia = shimGetUserMedia;

            var _utils = require('../utils.js');

            var utils = _interopRequireWildcard(_utils);

            function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

            var logging = utils.log;

            function shimGetUserMedia(window) {
                var navigator = window && window.navigator;

                if (!navigator.mediaDevices) {
                    return;
                }

                var browserDetails = utils.detectBrowser(window);

                var constraintsToChrome_ = function constraintsToChrome_(c) {
                    if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) !== 'object' || c.mandatory || c.optional) {
                        return c;
                    }
                    var cc = {};
                    Object.keys(c).forEach(function (key) {
                        if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
                            return;
                        }
                        var r = _typeof(c[key]) === 'object' ? c[key] : { ideal: c[key] };
                        if (r.exact !== undefined && typeof r.exact === 'number') {
                            r.min = r.max = r.exact;
                        }
                        var oldname_ = function oldname_(prefix, name) {
                            if (prefix) {
                                return prefix + name.charAt(0).toUpperCase() + name.slice(1);
                            }
                            return name === 'deviceId' ? 'sourceId' : name;
                        };
                        if (r.ideal !== undefined) {
                            cc.optional = cc.optional || [];
                            var oc = {};
                            if (typeof r.ideal === 'number') {
                                oc[oldname_('min', key)] = r.ideal;
                                cc.optional.push(oc);
                                oc = {};
                                oc[oldname_('max', key)] = r.ideal;
                                cc.optional.push(oc);
                            } else {
                                oc[oldname_('', key)] = r.ideal;
                                cc.optional.push(oc);
                            }
                        }
                        if (r.exact !== undefined && typeof r.exact !== 'number') {
                            cc.mandatory = cc.mandatory || {};
                            cc.mandatory[oldname_('', key)] = r.exact;
                        } else {
                            ['min', 'max'].forEach(function (mix) {
                                if (r[mix] !== undefined) {
                                    cc.mandatory = cc.mandatory || {};
                                    cc.mandatory[oldname_(mix, key)] = r[mix];
                                }
                            });
                        }
                    });
                    if (c.advanced) {
                        cc.optional = (cc.optional || []).concat(c.advanced);
                    }
                    return cc;
                };

                var shimConstraints_ = function shimConstraints_(constraints, func) {
                    if (browserDetails.version >= 61) {
                        return func(constraints);
                    }
                    constraints = JSON.parse(JSON.stringify(constraints));
                    if (constraints && _typeof(constraints.audio) === 'object') {
                        var remap = function remap(obj, a, b) {
                            if (a in obj && !(b in obj)) {
                                obj[b] = obj[a];
                                delete obj[a];
                            }
                        };
                        constraints = JSON.parse(JSON.stringify(constraints));
                        remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
                        remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
                        constraints.audio = constraintsToChrome_(constraints.audio);
                    }
                    if (constraints && _typeof(constraints.video) === 'object') {
                        // Shim facingMode for mobile & surface pro.
                        var face = constraints.video.facingMode;
                        face = face && ((typeof face === 'undefined' ? 'undefined' : _typeof(face)) === 'object' ? face : { ideal: face });
                        var getSupportedFacingModeLies = browserDetails.version < 66;

                        if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
                            delete constraints.video.facingMode;
                            var matches = void 0;
                            if (face.exact === 'environment' || face.ideal === 'environment') {
                                matches = ['back', 'rear'];
                            } else if (face.exact === 'user' || face.ideal === 'user') {
                                matches = ['front'];
                            }
                            if (matches) {
                                // Look for matches in label, or use last cam for back (typical).
                                return navigator.mediaDevices.enumerateDevices().then(function (devices) {
                                    devices = devices.filter(function (d) {
                                        return d.kind === 'videoinput';
                                    });
                                    var dev = devices.find(function (d) {
                                        return matches.some(function (match) {
                                            return d.label.toLowerCase().includes(match);
                                        });
                                    });
                                    if (!dev && devices.length && matches.includes('back')) {
                                        dev = devices[devices.length - 1]; // more likely the back cam
                                    }
                                    if (dev) {
                                        constraints.video.deviceId = face.exact ? { exact: dev.deviceId } : { ideal: dev.deviceId };
                                    }
                                    constraints.video = constraintsToChrome_(constraints.video);
                                    logging('chrome: ' + JSON.stringify(constraints));
                                    return func(constraints);
                                });
                            }
                        }
                        constraints.video = constraintsToChrome_(constraints.video);
                    }
                    logging('chrome: ' + JSON.stringify(constraints));
                    return func(constraints);
                };

                var shimError_ = function shimError_(e) {
                    if (browserDetails.version >= 64) {
                        return e;
                    }
                    return {
                        name: {
                            PermissionDeniedError: 'NotAllowedError',
                            PermissionDismissedError: 'NotAllowedError',
                            InvalidStateError: 'NotAllowedError',
                            DevicesNotFoundError: 'NotFoundError',
                            ConstraintNotSatisfiedError: 'OverconstrainedError',
                            TrackStartError: 'NotReadableError',
                            MediaDeviceFailedDueToShutdown: 'NotAllowedError',
                            MediaDeviceKillSwitchOn: 'NotAllowedError',
                            TabCaptureError: 'AbortError',
                            ScreenCaptureError: 'AbortError',
                            DeviceCaptureError: 'AbortError'
                        }[e.name] || e.name,
                        message: e.message,
                        constraint: e.constraint || e.constraintName,
                        toString: function toString() {
                            return this.name + (this.message && ': ') + this.message;
                        }
                    };
                };

                var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
                    shimConstraints_(constraints, function (c) {
                        navigator.webkitGetUserMedia(c, onSuccess, function (e) {
                            if (onError) {
                                onError(shimError_(e));
                            }
                        });
                    });
                };
                navigator.getUserMedia = getUserMedia_.bind(navigator);

                // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
                // function which returns a Promise, it does not accept spec-style
                // constraints.
                if (navigator.mediaDevices.getUserMedia) {
                    var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
                    navigator.mediaDevices.getUserMedia = function (cs) {
                        return shimConstraints_(cs, function (c) {
                            return origGetUserMedia(c).then(function (stream) {
                                if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
                                    stream.getTracks().forEach(function (track) {
                                        track.stop();
                                    });
                                    throw new DOMException('', 'NotFoundError');
                                }
                                return stream;
                            }, function (e) {
                                return Promise.reject(shimError_(e));
                            });
                        });
                    };
                }
            }

        }, { "../utils.js": 15 }], 6: [function (require, module, exports) {
            /*
             *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
             *
             *  Use of this source code is governed by a BSD-style license
             *  that can be found in the LICENSE file in the root of the source
             *  tree.
             */
            /* eslint-env node */
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            exports.shimRTCIceCandidate = shimRTCIceCandidate;
            exports.shimMaxMessageSize = shimMaxMessageSize;
            exports.shimSendThrowTypeError = shimSendThrowTypeError;
            exports.shimConnectionState = shimConnectionState;
            exports.removeAllowExtmapMixed = removeAllowExtmapMixed;

            var _sdp = require('sdp');

            var _sdp2 = _interopRequireDefault(_sdp);

            var _utils = require('./utils');

            var utils = _interopRequireWildcard(_utils);

            function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            function shimRTCIceCandidate(window) {
                // foundation is arbitrarily chosen as an indicator for full support for
                // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
                if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) {
                    return;
                }

                var NativeRTCIceCandidate = window.RTCIceCandidate;
                window.RTCIceCandidate = function RTCIceCandidate(args) {
                    // Remove the a= which shouldn't be part of the candidate string.
                    if ((typeof args === 'undefined' ? 'undefined' : _typeof(args)) === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
                        args = JSON.parse(JSON.stringify(args));
                        args.candidate = args.candidate.substr(2);
                    }

                    if (args.candidate && args.candidate.length) {
                        // Augment the native candidate with the parsed fields.
                        var nativeCandidate = new NativeRTCIceCandidate(args);
                        var parsedCandidate = _sdp2.default.parseCandidate(args.candidate);
                        var augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate);

                        // Add a serializer that does not serialize the extra attributes.
                        augmentedCandidate.toJSON = function toJSON() {
                            return {
                                candidate: augmentedCandidate.candidate,
                                sdpMid: augmentedCandidate.sdpMid,
                                sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
                                usernameFragment: augmentedCandidate.usernameFragment
                            };
                        };
                        return augmentedCandidate;
                    }
                    return new NativeRTCIceCandidate(args);
                };
                window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

                // Hook up the augmented candidate in onicecandidate and
                // addEventListener('icecandidate', ...)
                utils.wrapPeerConnectionEvent(window, 'icecandidate', function (e) {
                    if (e.candidate) {
                        Object.defineProperty(e, 'candidate', {
                            value: new window.RTCIceCandidate(e.candidate),
                            writable: 'false'
                        });
                    }
                    return e;
                });
            }

            function shimMaxMessageSize(window) {
                if (!window.RTCPeerConnection) {
                    return;
                }
                var browserDetails = utils.detectBrowser(window);

                if (!('sctp' in window.RTCPeerConnection.prototype)) {
                    Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
                        get: function get() {
                            return typeof this._sctp === 'undefined' ? null : this._sctp;
                        }
                    });
                }

                var sctpInDescription = function sctpInDescription(description) {
                    if (!description || !description.sdp) {
                        return false;
                    }
                    var sections = _sdp2.default.splitSections(description.sdp);
                    sections.shift();
                    return sections.some(function (mediaSection) {
                        var mLine = _sdp2.default.parseMLine(mediaSection);
                        return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
                    });
                };

                var getRemoteFirefoxVersion = function getRemoteFirefoxVersion(description) {
                    // TODO: Is there a better solution for detecting Firefox?
                    var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                    if (match === null || match.length < 2) {
                        return -1;
                    }
                    var version = parseInt(match[1], 10);
                    // Test for NaN (yes, this is ugly)
                    return version !== version ? -1 : version;
                };

                var getCanSendMaxMessageSize = function getCanSendMaxMessageSize(remoteIsFirefox) {
                    // Every implementation we know can send at least 64 KiB.
                    // Note: Although Chrome is technically able to send up to 256 KiB, the
                    //       data does not reach the other peer reliably.
                    //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
                    var canSendMaxMessageSize = 65536;
                    if (browserDetails.browser === 'firefox') {
                        if (browserDetails.version < 57) {
                            if (remoteIsFirefox === -1) {
                                // FF < 57 will send in 16 KiB chunks using the deprecated PPID
                                // fragmentation.
                                canSendMaxMessageSize = 16384;
                            } else {
                                // However, other FF (and RAWRTC) can reassemble PPID-fragmented
                                // messages. Thus, supporting ~2 GiB when sending.
                                canSendMaxMessageSize = 2147483637;
                            }
                        } else if (browserDetails.version < 60) {
                            // Currently, all FF >= 57 will reset the remote maximum message size
                            // to the default value when a data channel is created at a later
                            // stage. :(
                            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
                            canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
                        } else {
                            // FF >= 60 supports sending ~2 GiB
                            canSendMaxMessageSize = 2147483637;
                        }
                    }
                    return canSendMaxMessageSize;
                };

                var getMaxMessageSize = function getMaxMessageSize(description, remoteIsFirefox) {
                    // Note: 65536 bytes is the default value from the SDP spec. Also,
                    //       every implementation we know supports receiving 65536 bytes.
                    var maxMessageSize = 65536;

                    // FF 57 has a slightly incorrect default remote max message size, so
                    // we need to adjust it here to avoid a failure when sending.
                    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
                    if (browserDetails.browser === 'firefox' && browserDetails.version === 57) {
                        maxMessageSize = 65535;
                    }

                    var match = _sdp2.default.matchPrefix(description.sdp, 'a=max-message-size:');
                    if (match.length > 0) {
                        maxMessageSize = parseInt(match[0].substr(19), 10);
                    } else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) {
                        // If the maximum message size is not present in the remote SDP and
                        // both local and remote are Firefox, the remote peer can receive
                        // ~2 GiB.
                        maxMessageSize = 2147483637;
                    }
                    return maxMessageSize;
                };

                var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
                window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
                    this._sctp = null;
                    // Chrome decided to not expose .sctp in plan-b mode.
                    // As usual, adapter.js has to do an 'ugly worakaround'
                    // to cover up the mess.
                    if (browserDetails.browser === 'chrome' && browserDetails.version >= 76) {
                        var _getConfiguration = this.getConfiguration(),
                            sdpSemantics = _getConfiguration.sdpSemantics;

                        if (sdpSemantics === 'plan-b') {
                            Object.defineProperty(this, 'sctp', {
                                get: function get() {
                                    return typeof this._sctp === 'undefined' ? null : this._sctp;
                                },

                                enumerable: true,
                                configurable: true
                            });
                        }
                    }

                    if (sctpInDescription(arguments[0])) {
                        // Check if the remote is FF.
                        var isFirefox = getRemoteFirefoxVersion(arguments[0]);

                        // Get the maximum message size the local peer is capable of sending
                        var canSendMMS = getCanSendMaxMessageSize(isFirefox);

                        // Get the maximum message size of the remote peer.
                        var remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

                        // Determine final maximum message size
                        var maxMessageSize = void 0;
                        if (canSendMMS === 0 && remoteMMS === 0) {
                            maxMessageSize = Number.POSITIVE_INFINITY;
                        } else if (canSendMMS === 0 || remoteMMS === 0) {
                            maxMessageSize = Math.max(canSendMMS, remoteMMS);
                        } else {
                            maxMessageSize = Math.min(canSendMMS, remoteMMS);
                        }

                        // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
                        // attribute.
                        var sctp = {};
                        Object.defineProperty(sctp, 'maxMessageSize', {
                            get: function get() {
                                return maxMessageSize;
                            }
                        });
                        this._sctp = sctp;
                    }

                    return origSetRemoteDescription.apply(this, arguments);
                };
            }

            function shimSendThrowTypeError(window) {
                if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) {
                    return;
                }

                // Note: Although Firefox >= 57 has a native implementation, the maximum
                //       message size can be reset for all data channels at a later stage.
                //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

                function wrapDcSend(dc, pc) {
                    var origDataChannelSend = dc.send;
                    dc.send = function send() {
                        var data = arguments[0];
                        var length = data.length || data.size || data.byteLength;
                        if (dc.readyState === 'open' && pc.sctp && length > pc.sctp.maxMessageSize) {
                            throw new TypeError('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)');
                        }
                        return origDataChannelSend.apply(dc, arguments);
                    };
                }
                var origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
                window.RTCPeerConnection.prototype.createDataChannel = function createDataChannel() {
                    var dataChannel = origCreateDataChannel.apply(this, arguments);
                    wrapDcSend(dataChannel, this);
                    return dataChannel;
                };
                utils.wrapPeerConnectionEvent(window, 'datachannel', function (e) {
                    wrapDcSend(e.channel, e.target);
                    return e;
                });
            }

            /* shims RTCConnectionState by pretending it is the same as iceConnectionState.
             * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
             * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
             * since DTLS failures would be hidden. See
             * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
             * for the Firefox tracking bug.
             */
            function shimConnectionState(window) {
                if (!window.RTCPeerConnection || 'connectionState' in window.RTCPeerConnection.prototype) {
                    return;
                }
                var proto = window.RTCPeerConnection.prototype;
                Object.defineProperty(proto, 'connectionState', {
                    get: function get() {
                        return {
                            completed: 'connected',
                            checking: 'connecting'
                        }[this.iceConnectionState] || this.iceConnectionState;
                    },

                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(proto, 'onconnectionstatechange', {
                    get: function get() {
                        return this._onconnectionstatechange || null;
                    },
                    set: function set(cb) {
                        if (this._onconnectionstatechange) {
                            this.removeEventListener('connectionstatechange', this._onconnectionstatechange);
                            delete this._onconnectionstatechange;
                        }
                        if (cb) {
                            this.addEventListener('connectionstatechange', this._onconnectionstatechange = cb);
                        }
                    },

                    enumerable: true,
                    configurable: true
                });

                ['setLocalDescription', 'setRemoteDescription'].forEach(function (method) {
                    var origMethod = proto[method];
                    proto[method] = function () {
                        if (!this._connectionstatechangepoly) {
                            this._connectionstatechangepoly = function (e) {
                                var pc = e.target;
                                if (pc._lastConnectionState !== pc.connectionState) {
                                    pc._lastConnectionState = pc.connectionState;
                                    var newEvent = new Event('connectionstatechange', e);
                                    pc.dispatchEvent(newEvent);
                                }
                                return e;
                            };
                            this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly);
                        }
                        return origMethod.apply(this, arguments);
                    };
                });
            }

            function removeAllowExtmapMixed(window) {
                /* remove a=extmap-allow-mixed for webrtc.org < M71 */
                if (!window.RTCPeerConnection) {
                    return;
                }
                var browserDetails = utils.detectBrowser(window);
                if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
                    return;
                }
                if (browserDetails.browser === 'safari' && browserDetails.version >= 605) {
                    return;
                }
                var nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
                window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription(desc) {
                    if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
                        desc.sdp = desc.sdp.split('\n').filter(function (line) {
                            return line.trim() !== 'a=extmap-allow-mixed';
                        }).join('\n');
                    }
                    return nativeSRD.apply(this, arguments);
                };
            }

        }, { "./utils": 15, "sdp": 17 }], 7: [function (require, module, exports) {
            /*
             *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
             *
             *  Use of this source code is governed by a BSD-style license
             *  that can be found in the LICENSE file in the root of the source
             *  tree.
             */
            /* eslint-env node */
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

            var _getusermedia = require('./getusermedia');

            Object.defineProperty(exports, 'shimGetUserMedia', {
                enumerable: true,
                get: function get() {
                    return _getusermedia.shimGetUserMedia;
                }
            });

            var _getdisplaymedia = require('./getdisplaymedia');

            Object.defineProperty(exports, 'shimGetDisplayMedia', {
                enumerable: true,
                get: function get() {
                    return _getdisplaymedia.shimGetDisplayMedia;
                }
            });
            exports.shimPeerConnection = shimPeerConnection;
            exports.shimReplaceTrack = shimReplaceTrack;

            var _utils = require('../utils');

            var utils = _interopRequireWildcard(_utils);

            var _filtericeservers = require('./filtericeservers');

            var _rtcpeerconnectionShim = require('rtcpeerconnection-shim');

            var _rtcpeerconnectionShim2 = _interopRequireDefault(_rtcpeerconnectionShim);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

            function shimPeerConnection(window) {
                var browserDetails = utils.detectBrowser(window);

                if (window.RTCIceGatherer) {
                    if (!window.RTCIceCandidate) {
                        window.RTCIceCandidate = function RTCIceCandidate(args) {
                            return args;
                        };
                    }
                    if (!window.RTCSessionDescription) {
                        window.RTCSessionDescription = function RTCSessionDescription(args) {
                            return args;
                        };
                    }
                    // this adds an additional event listener to MediaStrackTrack that signals
                    // when a tracks enabled property was changed. Workaround for a bug in
                    // addStream, see below. No longer required in 15025+
                    if (browserDetails.version < 15025) {
                        var origMSTEnabled = Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype, 'enabled');
                        Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
                            set: function set(value) {
                                origMSTEnabled.set.call(this, value);
                                var ev = new Event('enabled');
                                ev.enabled = value;
                                this.dispatchEvent(ev);
                            }
                        });
                    }
                }

                // ORTC defines the DTMF sender a bit different.
                // https://github.com/w3c/ortc/issues/714
                if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
                    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
                        get: function get() {
                            if (this._dtmf === undefined) {
                                if (this.track.kind === 'audio') {
                                    this._dtmf = new window.RTCDtmfSender(this);
                                } else if (this.track.kind === 'video') {
                                    this._dtmf = null;
                                }
                            }
                            return this._dtmf;
                        }
                    });
                }
                // Edge currently only implements the RTCDtmfSender, not the
                // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*
                if (window.RTCDtmfSender && !window.RTCDTMFSender) {
                    window.RTCDTMFSender = window.RTCDtmfSender;
                }

                var RTCPeerConnectionShim = (0, _rtcpeerconnectionShim2.default)(window, browserDetails.version);
                window.RTCPeerConnection = function RTCPeerConnection(config) {
                    if (config && config.iceServers) {
                        config.iceServers = (0, _filtericeservers.filterIceServers)(config.iceServers, browserDetails.version);
                        utils.log('ICE servers after filtering:', config.iceServers);
                    }
                    return new RTCPeerConnectionShim(config);
                };
                window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
            }

            function shimReplaceTrack(window) {
                // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
                if (window.RTCRtpSender && !('replaceTrack' in window.RTCRtpSender.prototype)) {
                    window.RTCRtpSender.prototype.replaceTrack = window.RTCRtpSender.prototype.setTrack;
                }
            }

        }, { "../utils": 15, "./filtericeservers": 8, "./getdisplaymedia": 9, "./getusermedia": 10, "rtcpeerconnection-shim": 16 }], 8: [function (require, module, exports) {
            /*
             *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
             *
             *  Use of this source code is governed by a BSD-style license
             *  that can be found in the LICENSE file in the root of the source
             *  tree.
             */
            /* eslint-env node */
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.filterIceServers = filterIceServers;

            var _utils = require('../utils');

            var utils = _interopRequireWildcard(_utils);

            function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

            // Edge does not like
            // 1) stun: filtered after 14393 unless ?transport=udp is present
            // 2) turn: that does not have all of turn:host:port?transport=udp
            // 3) turn: with ipv6 addresses
            // 4) turn: occurring muliple times
            function filterIceServers(iceServers, edgeVersion) {
                var hasTurn = false;
                iceServers = JSON.parse(JSON.stringify(iceServers));
                return iceServers.filter(function (server) {
                    if (server && (server.urls || server.url)) {
                        var urls = server.urls || server.url;
                        if (server.url && !server.urls) {
                            utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                        }
                        var isString = typeof urls === 'string';
                        if (isString) {
                            urls = [urls];
                        }
                        urls = urls.filter(function (url) {
                            // filter STUN unconditionally.
                            if (url.indexOf('stun:') === 0) {
                                return false;
                            }

                            var validTurn = url.startsWith('turn') && !url.startsWith('turn:[') && url.includes('transport=udp');
                            if (validTurn && !hasTurn) {
                                hasTurn = true;
                                return true;
                            }
                            return validTurn && !hasTurn;
                        });

                        delete server.url;
                        server.urls = isString ? urls[0] : urls;
                        return !!urls.length;
                    }
                });
            }

        }, { "../utils": 15 }], 9: [function (require, module, exports) {
            /*
             *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
             *
             *  Use of this source code is governed by a BSD-style license
             *  that can be found in the LICENSE file in the root of the source
             *  tree.
             */
            /* eslint-env node */
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.shimGetDisplayMedia = shimGetDisplayMedia;
            function shimGetDisplayMedia(window) {
                if (!('getDisplayMedia' in window.navigator)) {
                    return;
                }
                if (!window.navigator.mediaDevices) {
                    return;
                }
                if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
                    return;
                }
                window.navigator.mediaDevices.getDisplayMedia = window.navigator.getDisplayMedia.bind(window.navigator);
            }

        }, {}], 10: [function (require, module, exports) {
            /*
             *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
             *
             *  Use of this source code is governed by a BSD-style license
             *  that can be found in the LICENSE file in the root of the source
             *  tree.
             */
            /* eslint-env node */
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.shimGetUserMedia = shimGetUserMedia;
            function shimGetUserMedia(window) {
                var navigator = window && window.navigator;

                var shimError_ = function shimError_(e) {
                    return {
                        name: { PermissionDeniedError: 'NotAllowedError' }[e.name] || e.name,
                        message: e.message,
                        constraint: e.constraint,
                        toString: function toString() {
                            return this.name;
                        }
                    };
                };

                // getUserMedia error shim.
                var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
                navigator.mediaDevices.getUserMedia = function (c) {
                    return origGetUserMedia(c).catch(function (e) {
                        return Promise.reject(shimError_(e));
                    });
                };
            }

        }, {}], 11: [function (require, module, exports) {
            /*
             *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
             *
             *  Use of this source code is governed by a BSD-style license
             *  that can be found in the LICENSE file in the root of the source
             *  tree.
             */
            /* eslint-env node */
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            var _getusermedia = require('./getusermedia');

            Object.defineProperty(exports, 'shimGetUserMedia', {
                enumerable: true,
                get: function get() {
                    return _getusermedia.shimGetUserMedia;
                }
            });

            var _getdisplaymedia = require('./getdisplaymedia');

            Object.defineProperty(exports, 'shimGetDisplayMedia', {
                enumerable: true,
                get: function get() {
                    return _getdisplaymedia.shimGetDisplayMedia;
                }
            });
            exports.shimOnTrack = shimOnTrack;
            exports.shimPeerConnection = shimPeerConnection;
            exports.shimSenderGetStats = shimSenderGetStats;
            exports.shimReceiverGetStats = shimReceiverGetStats;
            exports.shimRemoveStream = shimRemoveStream;
            exports.shimRTCDataChannel = shimRTCDataChannel;
            exports.shimAddTransceiver = shimAddTransceiver;
            exports.shimGetParameters = shimGetParameters;
            exports.shimCreateOffer = shimCreateOffer;
            exports.shimCreateAnswer = shimCreateAnswer;

            var _utils = require('../utils');

            var utils = _interopRequireWildcard(_utils);

            function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

            function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

            function shimOnTrack(window) {
                if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
                    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
                        get: function get() {
                            return { receiver: this.receiver };
                        }
                    });
                }
            }

            function shimPeerConnection(window) {
                var browserDetails = utils.detectBrowser(window);

                if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
                    return; // probably media.peerconnection.enabled=false in about:config
                }
                if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
                    // very basic support for old versions.
                    window.RTCPeerConnection = window.mozRTCPeerConnection;
                }

                if (browserDetails.version < 53) {
                    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
                    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
                        var nativeMethod = window.RTCPeerConnection.prototype[method];
                        var methodObj = _defineProperty({}, method, function () {
                            arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
                            return nativeMethod.apply(this, arguments);
                        });
                        window.RTCPeerConnection.prototype[method] = methodObj[method];
                    });
                }

                // support for addIceCandidate(null or undefined)
                // as well as ignoring {sdpMid, candidate: ""}
                if (browserDetails.version < 68) {
                    var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
                    window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
                        if (!arguments[0]) {
                            if (arguments[1]) {
                                arguments[1].apply(null);
                            }
                            return Promise.resolve();
                        }
                        // Firefox 68+ emits and processes {candidate: "", ...}, ignore
                        // in older versions.
                        if (arguments[0] && arguments[0].candidate === '') {
                            return Promise.resolve();
                        }
                        return nativeAddIceCandidate.apply(this, arguments);
                    };
                }

                var modernStatsTypes = {
                    inboundrtp: 'inbound-rtp',
                    outboundrtp: 'outbound-rtp',
                    candidatepair: 'candidate-pair',
                    localcandidate: 'local-candidate',
                    remotecandidate: 'remote-candidate'
                };

                var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
                window.RTCPeerConnection.prototype.getStats = function getStats() {
                    var _arguments = Array.prototype.slice.call(arguments),
                        selector = _arguments[0],
                        onSucc = _arguments[1],
                        onErr = _arguments[2];

                    return nativeGetStats.apply(this, [selector || null]).then(function (stats) {
                        if (browserDetails.version < 53 && !onSucc) {
                            // Shim only promise getStats with spec-hyphens in type names
                            // Leave callback version alone; misc old uses of forEach before Map
                            try {
                                stats.forEach(function (stat) {
                                    stat.type = modernStatsTypes[stat.type] || stat.type;
                                });
                            } catch (e) {
                                if (e.name !== 'TypeError') {
                                    throw e;
                                }
                                // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
                                stats.forEach(function (stat, i) {
                                    stats.set(i, Object.assign({}, stat, {
                                        type: modernStatsTypes[stat.type] || stat.type
                                    }));
                                });
                            }
                        }
                        return stats;
                    }).then(onSucc, onErr);
                };
            }

            function shimSenderGetStats(window) {
                if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
                    return;
                }
                if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
                    return;
                }
                var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
                if (origGetSenders) {
                    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
                        var _this = this;

                        var senders = origGetSenders.apply(this, []);
                        senders.forEach(function (sender) {
                            return sender._pc = _this;
                        });
                        return senders;
                    };
                }

                var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
                if (origAddTrack) {
                    window.RTCPeerConnection.prototype.addTrack = function addTrack() {
                        var sender = origAddTrack.apply(this, arguments);
                        sender._pc = this;
                        return sender;
                    };
                }
                window.RTCRtpSender.prototype.getStats = function getStats() {
                    return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
                };
            }

            function shimReceiverGetStats(window) {
                if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
                    return;
                }
                if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
                    return;
                }
                var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
                if (origGetReceivers) {
                    window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
                        var _this2 = this;

                        var receivers = origGetReceivers.apply(this, []);
                        receivers.forEach(function (receiver) {
                            return receiver._pc = _this2;
                        });
                        return receivers;
                    };
                }
                utils.wrapPeerConnectionEvent(window, 'track', function (e) {
                    e.receiver._pc = e.srcElement;
                    return e;
                });
                window.RTCRtpReceiver.prototype.getStats = function getStats() {
                    return this._pc.getStats(this.track);
                };
            }

            function shimRemoveStream(window) {
                if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) {
                    return;
                }
                window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
                    var _this3 = this;

                    utils.deprecated('removeStream', 'removeTrack');
                    this.getSenders().forEach(function (sender) {
                        if (sender.track && stream.getTracks().includes(sender.track)) {
                            _this3.removeTrack(sender);
                        }
                    });
                };
            }

            function shimRTCDataChannel(window) {
                // rename DataChannel to RTCDataChannel (native fix in FF60):
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
                if (window.DataChannel && !window.RTCDataChannel) {
                    window.RTCDataChannel = window.DataChannel;
                }
            }

            function shimAddTransceiver(window) {
                // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
                // Firefox ignores the init sendEncodings options passed to addTransceiver
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
                if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection)) {
                    return;
                }
                var origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;
                if (origAddTransceiver) {
                    window.RTCPeerConnection.prototype.addTransceiver = function addTransceiver() {
                        this.setParametersPromises = [];
                        var initParameters = arguments[1];
                        var shouldPerformCheck = initParameters && 'sendEncodings' in initParameters;
                        if (shouldPerformCheck) {
                            // If sendEncodings params are provided, validate grammar
                            initParameters.sendEncodings.forEach(function (encodingParam) {
                                if ('rid' in encodingParam) {
                                    var ridRegex = /^[a-z0-9]{0,16}$/i;
                                    if (!ridRegex.test(encodingParam.rid)) {
                                        throw new TypeError('Invalid RID value provided.');
                                    }
                                }
                                if ('scaleResolutionDownBy' in encodingParam) {
                                    if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1.0)) {
                                        throw new RangeError('scale_resolution_down_by must be >= 1.0');
                                    }
                                }
                                if ('maxFramerate' in encodingParam) {
                                    if (!(parseFloat(encodingParam.maxFramerate) >= 0)) {
                                        throw new RangeError('max_framerate must be >= 0.0');
                                    }
                                }
                            });
                        }
                        var transceiver = origAddTransceiver.apply(this, arguments);
                        if (shouldPerformCheck) {
                            // Check if the init options were applied. If not we do this in an
                            // asynchronous way and save the promise reference in a global object.
                            // This is an ugly hack, but at the same time is way more robust than
                            // checking the sender parameters before and after the createOffer
                            // Also note that after the createoffer we are not 100% sure that
                            // the params were asynchronously applied so we might miss the
                            // opportunity to recreate offer.
                            var sender = transceiver.sender;

                            var params = sender.getParameters();
                            if (!('encodings' in params) ||
                                // Avoid being fooled by patched getParameters() below.
                                params.encodings.length === 1 && Object.keys(params.encodings[0]).length === 0) {
                                params.encodings = initParameters.sendEncodings;
                                sender.sendEncodings = initParameters.sendEncodings;
                                this.setParametersPromises.push(sender.setParameters(params).then(function () {
                                    delete sender.sendEncodings;
                                }).catch(function () {
                                    delete sender.sendEncodings;
                                }));
                            }
                        }
                        return transceiver;
                    };
                }
            }

            function shimGetParameters(window) {
                if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCRtpSender)) {
                    return;
                }
                var origGetParameters = window.RTCRtpSender.prototype.getParameters;
                if (origGetParameters) {
                    window.RTCRtpSender.prototype.getParameters = function getParameters() {
                        var params = origGetParameters.apply(this, arguments);
                        if (!('encodings' in params)) {
                            params.encodings = [].concat(this.sendEncodings || [{}]);
                        }
                        return params;
                    };
                }
            }

            function shimCreateOffer(window) {
                // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
                // Firefox ignores the init sendEncodings options passed to addTransceiver
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
                if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection)) {
                    return;
                }
                var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
                window.RTCPeerConnection.prototype.createOffer = function createOffer() {
                    var _this4 = this,
                        _arguments2 = arguments;

                    if (this.setParametersPromises && this.setParametersPromises.length) {
                        return Promise.all(this.setParametersPromises).then(function () {
                            return origCreateOffer.apply(_this4, _arguments2);
                        }).finally(function () {
                            _this4.setParametersPromises = [];
                        });
                    }
                    return origCreateOffer.apply(this, arguments);
                };
            }

            function shimCreateAnswer(window) {
                // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
                // Firefox ignores the init sendEncodings options passed to addTransceiver
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
                if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection)) {
                    return;
                }
                var origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;
                window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
                    var _this5 = this,
                        _arguments3 = arguments;

                    if (this.setParametersPromises && this.setParametersPromises.length) {
                        return Promise.all(this.setParametersPromises).then(function () {
                            return origCreateAnswer.apply(_this5, _arguments3);
                        }).finally(function () {
                            _this5.setParametersPromises = [];
                        });
                    }
                    return origCreateAnswer.apply(this, arguments);
                };
            }

        }, { "../utils": 15, "./getdisplaymedia": 12, "./getusermedia": 13 }], 12: [function (require, module, exports) {
            /*
             *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
             *
             *  Use of this source code is governed by a BSD-style license
             *  that can be found in the LICENSE file in the root of the source
             *  tree.
             */
            /* eslint-env node */
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.shimGetDisplayMedia = shimGetDisplayMedia;
            function shimGetDisplayMedia(window, preferredMediaSource) {
                if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
                    return;
                }
                if (!window.navigator.mediaDevices) {
                    return;
                }
                window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
                    if (!(constraints && constraints.video)) {
                        var err = new DOMException('getDisplayMedia without video ' + 'constraints is undefined');
                        err.name = 'NotFoundError';
                        // from https://heycam.github.io/webidl/#idl-DOMException-error-names
                        err.code = 8;
                        return Promise.reject(err);
                    }
                    if (constraints.video === true) {
                        constraints.video = { mediaSource: preferredMediaSource };
                    } else {
                        constraints.video.mediaSource = preferredMediaSource;
                    }
                    return window.navigator.mediaDevices.getUserMedia(constraints);
                };
            }

        }, {}], 13: [function (require, module, exports) {
            /*
             *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
             *
             *  Use of this source code is governed by a BSD-style license
             *  that can be found in the LICENSE file in the root of the source
             *  tree.
             */
            /* eslint-env node */
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            exports.shimGetUserMedia = shimGetUserMedia;

            var _utils = require('../utils');

            var utils = _interopRequireWildcard(_utils);

            function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

            function shimGetUserMedia(window) {
                var browserDetails = utils.detectBrowser(window);
                var navigator = window && window.navigator;
                var MediaStreamTrack = window && window.MediaStreamTrack;

                navigator.getUserMedia = function (constraints, onSuccess, onError) {
                    // Replace Firefox 44+'s deprecation warning with unprefixed version.
                    utils.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
                    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
                };

                if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
                    var remap = function remap(obj, a, b) {
                        if (a in obj && !(b in obj)) {
                            obj[b] = obj[a];
                            delete obj[a];
                        }
                    };

                    var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
                    navigator.mediaDevices.getUserMedia = function (c) {
                        if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object' && _typeof(c.audio) === 'object') {
                            c = JSON.parse(JSON.stringify(c));
                            remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
                            remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
                        }
                        return nativeGetUserMedia(c);
                    };

                    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
                        var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
                        MediaStreamTrack.prototype.getSettings = function () {
                            var obj = nativeGetSettings.apply(this, arguments);
                            remap(obj, 'mozAutoGainControl', 'autoGainControl');
                            remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
                            return obj;
                        };
                    }

                    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
                        var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
                        MediaStreamTrack.prototype.applyConstraints = function (c) {
                            if (this.kind === 'audio' && (typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object') {
                                c = JSON.parse(JSON.stringify(c));
                                remap(c, 'autoGainControl', 'mozAutoGainControl');
                                remap(c, 'noiseSuppression', 'mozNoiseSuppression');
                            }
                            return nativeApplyConstraints.apply(this, [c]);
                        };
                    }
                }
            }

        }, { "../utils": 15 }], 14: [function (require, module, exports) {
            /*
             *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
             *
             *  Use of this source code is governed by a BSD-style license
             *  that can be found in the LICENSE file in the root of the source
             *  tree.
             */
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            exports.shimLocalStreamsAPI = shimLocalStreamsAPI;
            exports.shimRemoteStreamsAPI = shimRemoteStreamsAPI;
            exports.shimCallbacksAPI = shimCallbacksAPI;
            exports.shimGetUserMedia = shimGetUserMedia;
            exports.shimConstraints = shimConstraints;
            exports.shimRTCIceServerUrls = shimRTCIceServerUrls;
            exports.shimTrackEventTransceiver = shimTrackEventTransceiver;
            exports.shimCreateOfferLegacy = shimCreateOfferLegacy;
            exports.shimAudioContext = shimAudioContext;

            var _utils = require('../utils');

            var utils = _interopRequireWildcard(_utils);

            function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

            function shimLocalStreamsAPI(window) {
                if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
                    return;
                }
                if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
                    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
                        if (!this._localStreams) {
                            this._localStreams = [];
                        }
                        return this._localStreams;
                    };
                }
                if (!('addStream' in window.RTCPeerConnection.prototype)) {
                    var _addTrack = window.RTCPeerConnection.prototype.addTrack;
                    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
                        var _this = this;

                        if (!this._localStreams) {
                            this._localStreams = [];
                        }
                        if (!this._localStreams.includes(stream)) {
                            this._localStreams.push(stream);
                        }
                        // Try to emulate Chrome's behaviour of adding in audio-video order.
                        // Safari orders by track id.
                        stream.getAudioTracks().forEach(function (track) {
                            return _addTrack.call(_this, track, stream);
                        });
                        stream.getVideoTracks().forEach(function (track) {
                            return _addTrack.call(_this, track, stream);
                        });
                    };

                    window.RTCPeerConnection.prototype.addTrack = function addTrack(track) {
                        var _this2 = this;

                        for (var _len = arguments.length, streams = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            streams[_key - 1] = arguments[_key];
                        }

                        if (streams) {
                            streams.forEach(function (stream) {
                                if (!_this2._localStreams) {
                                    _this2._localStreams = [stream];
                                } else if (!_this2._localStreams.includes(stream)) {
                                    _this2._localStreams.push(stream);
                                }
                            });
                        }
                        return _addTrack.apply(this, arguments);
                    };
                }
                if (!('removeStream' in window.RTCPeerConnection.prototype)) {
                    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
                        var _this3 = this;

                        if (!this._localStreams) {
                            this._localStreams = [];
                        }
                        var index = this._localStreams.indexOf(stream);
                        if (index === -1) {
                            return;
                        }
                        this._localStreams.splice(index, 1);
                        var tracks = stream.getTracks();
                        this.getSenders().forEach(function (sender) {
                            if (tracks.includes(sender.track)) {
                                _this3.removeTrack(sender);
                            }
                        });
                    };
                }
            }

            function shimRemoteStreamsAPI(window) {
                if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
                    return;
                }
                if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
                    window.RTCPeerConnection.prototype.getRemoteStreams = function getRemoteStreams() {
                        return this._remoteStreams ? this._remoteStreams : [];
                    };
                }
                if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
                    Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
                        get: function get() {
                            return this._onaddstream;
                        },
                        set: function set(f) {
                            var _this4 = this;

                            if (this._onaddstream) {
                                this.removeEventListener('addstream', this._onaddstream);
                                this.removeEventListener('track', this._onaddstreampoly);
                            }
                            this.addEventListener('addstream', this._onaddstream = f);
                            this.addEventListener('track', this._onaddstreampoly = function (e) {
                                e.streams.forEach(function (stream) {
                                    if (!_this4._remoteStreams) {
                                        _this4._remoteStreams = [];
                                    }
                                    if (_this4._remoteStreams.includes(stream)) {
                                        return;
                                    }
                                    _this4._remoteStreams.push(stream);
                                    var event = new Event('addstream');
                                    event.stream = stream;
                                    _this4.dispatchEvent(event);
                                });
                            });
                        }
                    });
                    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
                    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
                        var pc = this;
                        if (!this._onaddstreampoly) {
                            this.addEventListener('track', this._onaddstreampoly = function (e) {
                                e.streams.forEach(function (stream) {
                                    if (!pc._remoteStreams) {
                                        pc._remoteStreams = [];
                                    }
                                    if (pc._remoteStreams.indexOf(stream) >= 0) {
                                        return;
                                    }
                                    pc._remoteStreams.push(stream);
                                    var event = new Event('addstream');
                                    event.stream = stream;
                                    pc.dispatchEvent(event);
                                });
                            });
                        }
                        return origSetRemoteDescription.apply(pc, arguments);
                    };
                }
            }

            function shimCallbacksAPI(window) {
                if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
                    return;
                }
                var prototype = window.RTCPeerConnection.prototype;
                var origCreateOffer = prototype.createOffer;
                var origCreateAnswer = prototype.createAnswer;
                var setLocalDescription = prototype.setLocalDescription;
                var setRemoteDescription = prototype.setRemoteDescription;
                var addIceCandidate = prototype.addIceCandidate;

                prototype.createOffer = function createOffer(successCallback, failureCallback) {
                    var options = arguments.length >= 2 ? arguments[2] : arguments[0];
                    var promise = origCreateOffer.apply(this, [options]);
                    if (!failureCallback) {
                        return promise;
                    }
                    promise.then(successCallback, failureCallback);
                    return Promise.resolve();
                };

                prototype.createAnswer = function createAnswer(successCallback, failureCallback) {
                    var options = arguments.length >= 2 ? arguments[2] : arguments[0];
                    var promise = origCreateAnswer.apply(this, [options]);
                    if (!failureCallback) {
                        return promise;
                    }
                    promise.then(successCallback, failureCallback);
                    return Promise.resolve();
                };

                var withCallback = function withCallback(description, successCallback, failureCallback) {
                    var promise = setLocalDescription.apply(this, [description]);
                    if (!failureCallback) {
                        return promise;
                    }
                    promise.then(successCallback, failureCallback);
                    return Promise.resolve();
                };
                prototype.setLocalDescription = withCallback;

                withCallback = function withCallback(description, successCallback, failureCallback) {
                    var promise = setRemoteDescription.apply(this, [description]);
                    if (!failureCallback) {
                        return promise;
                    }
                    promise.then(successCallback, failureCallback);
                    return Promise.resolve();
                };
                prototype.setRemoteDescription = withCallback;

                withCallback = function withCallback(candidate, successCallback, failureCallback) {
                    var promise = addIceCandidate.apply(this, [candidate]);
                    if (!failureCallback) {
                        return promise;
                    }
                    promise.then(successCallback, failureCallback);
                    return Promise.resolve();
                };
                prototype.addIceCandidate = withCallback;
            }

            function shimGetUserMedia(window) {
                var navigator = window && window.navigator;

                if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    // shim not needed in Safari 12.1
                    var mediaDevices = navigator.mediaDevices;
                    var _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
                    navigator.mediaDevices.getUserMedia = function (constraints) {
                        return _getUserMedia(shimConstraints(constraints));
                    };
                }

                if (!navigator.getUserMedia && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    navigator.getUserMedia = function getUserMedia(constraints, cb, errcb) {
                        navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
                    }.bind(navigator);
                }
            }

            function shimConstraints(constraints) {
                if (constraints && constraints.video !== undefined) {
                    return Object.assign({}, constraints, { video: utils.compactObject(constraints.video) });
                }

                return constraints;
            }

            function shimRTCIceServerUrls(window) {
                if (!window.RTCPeerConnection) {
                    return;
                }
                // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
                var OrigPeerConnection = window.RTCPeerConnection;
                window.RTCPeerConnection = function RTCPeerConnection(pcConfig, pcConstraints) {
                    if (pcConfig && pcConfig.iceServers) {
                        var newIceServers = [];
                        for (var i = 0; i < pcConfig.iceServers.length; i++) {
                            var server = pcConfig.iceServers[i];
                            if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
                                utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                                server = JSON.parse(JSON.stringify(server));
                                server.urls = server.url;
                                delete server.url;
                                newIceServers.push(server);
                            } else {
                                newIceServers.push(pcConfig.iceServers[i]);
                            }
                        }
                        pcConfig.iceServers = newIceServers;
                    }
                    return new OrigPeerConnection(pcConfig, pcConstraints);
                };
                window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
                // wrap static methods. Currently just generateCertificate.
                if ('generateCertificate' in OrigPeerConnection) {
                    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
                        get: function get() {
                            return OrigPeerConnection.generateCertificate;
                        }
                    });
                }
            }

            function shimTrackEventTransceiver(window) {
                // Add event.transceiver member over deprecated event.receiver
                if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
                    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
                        get: function get() {
                            return { receiver: this.receiver };
                        }
                    });
                }
            }

            function shimCreateOfferLegacy(window) {
                var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
                window.RTCPeerConnection.prototype.createOffer = function createOffer(offerOptions) {
                    if (offerOptions) {
                        if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
                            // support bit values
                            offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
                        }
                        var audioTransceiver = this.getTransceivers().find(function (transceiver) {
                            return transceiver.receiver.track.kind === 'audio';
                        });
                        if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
                            if (audioTransceiver.direction === 'sendrecv') {
                                if (audioTransceiver.setDirection) {
                                    audioTransceiver.setDirection('sendonly');
                                } else {
                                    audioTransceiver.direction = 'sendonly';
                                }
                            } else if (audioTransceiver.direction === 'recvonly') {
                                if (audioTransceiver.setDirection) {
                                    audioTransceiver.setDirection('inactive');
                                } else {
                                    audioTransceiver.direction = 'inactive';
                                }
                            }
                        } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
                            this.addTransceiver('audio');
                        }

                        if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
                            // support bit values
                            offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
                        }
                        var videoTransceiver = this.getTransceivers().find(function (transceiver) {
                            return transceiver.receiver.track.kind === 'video';
                        });
                        if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
                            if (videoTransceiver.direction === 'sendrecv') {
                                if (videoTransceiver.setDirection) {
                                    videoTransceiver.setDirection('sendonly');
                                } else {
                                    videoTransceiver.direction = 'sendonly';
                                }
                            } else if (videoTransceiver.direction === 'recvonly') {
                                if (videoTransceiver.setDirection) {
                                    videoTransceiver.setDirection('inactive');
                                } else {
                                    videoTransceiver.direction = 'inactive';
                                }
                            }
                        } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
                            this.addTransceiver('video');
                        }
                    }
                    return origCreateOffer.apply(this, arguments);
                };
            }

            function shimAudioContext(window) {
                if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || window.AudioContext) {
                    return;
                }
                window.AudioContext = window.webkitAudioContext;
            }

        }, { "../utils": 15 }], 15: [function (require, module, exports) {
            /*
             *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
             *
             *  Use of this source code is governed by a BSD-style license
             *  that can be found in the LICENSE file in the root of the source
             *  tree.
             */
            /* eslint-env node */
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            exports.extractVersion = extractVersion;
            exports.wrapPeerConnectionEvent = wrapPeerConnectionEvent;
            exports.disableLog = disableLog;
            exports.disableWarnings = disableWarnings;
            exports.log = log;
            exports.deprecated = deprecated;
            exports.detectBrowser = detectBrowser;
            exports.compactObject = compactObject;
            exports.walkStats = walkStats;
            exports.filterStats = filterStats;

            function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

            var logDisabled_ = true;
            var deprecationWarnings_ = true;

            /**
             * Extract browser version out of the provided user agent string.
             *
             * @param {!string} uastring userAgent string.
             * @param {!string} expr Regular expression used as match criteria.
             * @param {!number} pos position in the version string to be returned.
             * @return {!number} browser version.
             */
            function extractVersion(uastring, expr, pos) {
                var match = uastring.match(expr);
                return match && match.length >= pos && parseInt(match[pos], 10);
            }

            // Wraps the peerconnection event eventNameToWrap in a function
            // which returns the modified event object (or false to prevent
            // the event).
            function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
                if (!window.RTCPeerConnection) {
                    return;
                }
                var proto = window.RTCPeerConnection.prototype;
                var nativeAddEventListener = proto.addEventListener;
                proto.addEventListener = function (nativeEventName, cb) {
                    if (nativeEventName !== eventNameToWrap) {
                        return nativeAddEventListener.apply(this, arguments);
                    }
                    var wrappedCallback = function wrappedCallback(e) {
                        var modifiedEvent = wrapper(e);
                        if (modifiedEvent) {
                            if (cb.handleEvent) {
                                cb.handleEvent(modifiedEvent);
                            } else {
                                cb(modifiedEvent);
                            }
                        }
                    };
                    this._eventMap = this._eventMap || {};
                    if (!this._eventMap[eventNameToWrap]) {
                        this._eventMap[eventNameToWrap] = new Map();
                    }
                    this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
                    return nativeAddEventListener.apply(this, [nativeEventName, wrappedCallback]);
                };

                var nativeRemoveEventListener = proto.removeEventListener;
                proto.removeEventListener = function (nativeEventName, cb) {
                    if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[eventNameToWrap]) {
                        return nativeRemoveEventListener.apply(this, arguments);
                    }
                    if (!this._eventMap[eventNameToWrap].has(cb)) {
                        return nativeRemoveEventListener.apply(this, arguments);
                    }
                    var unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
                    this._eventMap[eventNameToWrap].delete(cb);
                    if (this._eventMap[eventNameToWrap].size === 0) {
                        delete this._eventMap[eventNameToWrap];
                    }
                    if (Object.keys(this._eventMap).length === 0) {
                        delete this._eventMap;
                    }
                    return nativeRemoveEventListener.apply(this, [nativeEventName, unwrappedCb]);
                };

                Object.defineProperty(proto, 'on' + eventNameToWrap, {
                    get: function get() {
                        return this['_on' + eventNameToWrap];
                    },
                    set: function set(cb) {
                        if (this['_on' + eventNameToWrap]) {
                            this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
                            delete this['_on' + eventNameToWrap];
                        }
                        if (cb) {
                            this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
                        }
                    },

                    enumerable: true,
                    configurable: true
                });
            }

            function disableLog(bool) {
                if (typeof bool !== 'boolean') {
                    return new Error('Argument type: ' + (typeof bool === 'undefined' ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
                }
                logDisabled_ = bool;
                return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
            }

            /**
             * Disable or enable deprecation warnings
             * @param {!boolean} bool set to true to disable warnings.
             */
            function disableWarnings(bool) {
                if (typeof bool !== 'boolean') {
                    return new Error('Argument type: ' + (typeof bool === 'undefined' ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
                }
                deprecationWarnings_ = !bool;
                return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
            }

            function log() {
                if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
                    if (logDisabled_) {
                        return;
                    }
                    if (typeof console !== 'undefined' && typeof console.log === 'function') {
                        console.log.apply(console, arguments);
                    }
                }
            }

            /**
             * Shows a deprecation warning suggesting the modern and spec-compatible API.
             */
            function deprecated(oldMethod, newMethod) {
                if (!deprecationWarnings_) {
                    return;
                }
                console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
            }

            /**
             * Browser detector.
             *
             * @return {object} result containing browser and version
             *     properties.
             */
            function detectBrowser(window) {
                // Returned result object.
                var result = { browser: null, version: null };

                // Fail early if it's not a browser
                if (typeof window === 'undefined' || !window.navigator) {
                    result.browser = 'Not a browser.';
                    return result;
                }

                var navigator = window.navigator;


                if (navigator.mozGetUserMedia) {
                    // Firefox.
                    result.browser = 'firefox';
                    result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
                } else if (navigator.webkitGetUserMedia || window.isSecureContext === false && window.webkitRTCPeerConnection && !window.RTCIceGatherer) {
                    // Chrome, Chromium, Webview, Opera.
                    // Version matches Chrome/WebRTC version.
                    // Chrome 74 removed webkitGetUserMedia on http as well so we need the
                    // more complicated fallback to webkitRTCPeerConnection.
                    result.browser = 'chrome';
                    result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
                } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
                    // Edge.
                    result.browser = 'edge';
                    result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
                } else if (window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
                    // Safari.
                    result.browser = 'safari';
                    result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
                    result.supportsUnifiedPlan = window.RTCRtpTransceiver && 'currentDirection' in window.RTCRtpTransceiver.prototype;
                } else {
                    // Default fallthrough: not supported.
                    result.browser = 'Not a supported browser.';
                    return result;
                }

                return result;
            }

            /**
             * Checks if something is an object.
             *
             * @param {*} val The something you want to check.
             * @return true if val is an object, false otherwise.
             */
            function isObject(val) {
                return Object.prototype.toString.call(val) === '[object Object]';
            }

            /**
             * Remove all empty objects and undefined values
             * from a nested object -- an enhanced and vanilla version
             * of Lodash's `compact`.
             */
            function compactObject(data) {
                if (!isObject(data)) {
                    return data;
                }

                return Object.keys(data).reduce(function (accumulator, key) {
                    var isObj = isObject(data[key]);
                    var value = isObj ? compactObject(data[key]) : data[key];
                    var isEmptyObject = isObj && !Object.keys(value).length;
                    if (value === undefined || isEmptyObject) {
                        return accumulator;
                    }
                    return Object.assign(accumulator, _defineProperty({}, key, value));
                }, {});
            }

            /* iterates the stats graph recursively. */
            function walkStats(stats, base, resultSet) {
                if (!base || resultSet.has(base.id)) {
                    return;
                }
                resultSet.set(base.id, base);
                Object.keys(base).forEach(function (name) {
                    if (name.endsWith('Id')) {
                        walkStats(stats, stats.get(base[name]), resultSet);
                    } else if (name.endsWith('Ids')) {
                        base[name].forEach(function (id) {
                            walkStats(stats, stats.get(id), resultSet);
                        });
                    }
                });
            }

            /* filter getStats for a sender/receiver track. */
            function filterStats(result, track, outbound) {
                var streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
                var filteredResult = new Map();
                if (track === null) {
                    return filteredResult;
                }
                var trackStats = [];
                result.forEach(function (value) {
                    if (value.type === 'track' && value.trackIdentifier === track.id) {
                        trackStats.push(value);
                    }
                });
                trackStats.forEach(function (trackStat) {
                    result.forEach(function (stats) {
                        if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
                            walkStats(result, stats, filteredResult);
                        }
                    });
                });
                return filteredResult;
            }

        }, {}], 16: [function (require, module, exports) {
            /*
             *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
             *
             *  Use of this source code is governed by a BSD-style license
             *  that can be found in the LICENSE file in the root of the source
             *  tree.
             */
            /* eslint-env node */
            'use strict';

            var SDPUtils = require('sdp');

            function fixStatsType(stat) {
                return {
                    inboundrtp: 'inbound-rtp',
                    outboundrtp: 'outbound-rtp',
                    candidatepair: 'candidate-pair',
                    localcandidate: 'local-candidate',
                    remotecandidate: 'remote-candidate'
                }[stat.type] || stat.type;
            }

            function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
                var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

                // Map ICE parameters (ufrag, pwd) to SDP.
                sdp += SDPUtils.writeIceParameters(
                    transceiver.iceGatherer.getLocalParameters());

                // Map DTLS parameters to SDP.
                sdp += SDPUtils.writeDtlsParameters(
                    transceiver.dtlsTransport.getLocalParameters(),
                    type === 'offer' ? 'actpass' : dtlsRole || 'active');

                sdp += 'a=mid:' + transceiver.mid + '\r\n';

                if (transceiver.rtpSender && transceiver.rtpReceiver) {
                    sdp += 'a=sendrecv\r\n';
                } else if (transceiver.rtpSender) {
                    sdp += 'a=sendonly\r\n';
                } else if (transceiver.rtpReceiver) {
                    sdp += 'a=recvonly\r\n';
                } else {
                    sdp += 'a=inactive\r\n';
                }

                if (transceiver.rtpSender) {
                    var trackId = transceiver.rtpSender._initialTrackId ||
                        transceiver.rtpSender.track.id;
                    transceiver.rtpSender._initialTrackId = trackId;
                    // spec.
                    var msid = 'msid:' + (stream ? stream.id : '-') + ' ' +
                        trackId + '\r\n';
                    sdp += 'a=' + msid;
                    // for Chrome. Legacy should no longer be required.
                    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
                        ' ' + msid;

                    // RTX
                    if (transceiver.sendEncodingParameters[0].rtx) {
                        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
                            ' ' + msid;
                        sdp += 'a=ssrc-group:FID ' +
                            transceiver.sendEncodingParameters[0].ssrc + ' ' +
                            transceiver.sendEncodingParameters[0].rtx.ssrc +
                            '\r\n';
                    }
                }
                // FIXME: this should be written by writeRtpDescription.
                sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
                    ' cname:' + SDPUtils.localCName + '\r\n';
                if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
                    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
                        ' cname:' + SDPUtils.localCName + '\r\n';
                }
                return sdp;
            }

            // Edge does not like
            // 1) stun: filtered after 14393 unless ?transport=udp is present
            // 2) turn: that does not have all of turn:host:port?transport=udp
            // 3) turn: with ipv6 addresses
            // 4) turn: occurring muliple times
            function filterIceServers(iceServers, edgeVersion) {
                var hasTurn = false;
                iceServers = JSON.parse(JSON.stringify(iceServers));
                return iceServers.filter(function (server) {
                    if (server && (server.urls || server.url)) {
                        var urls = server.urls || server.url;
                        if (server.url && !server.urls) {
                            console.warn('RTCIceServer.url is deprecated! Use urls instead.');
                        }
                        var isString = typeof urls === 'string';
                        if (isString) {
                            urls = [urls];
                        }
                        urls = urls.filter(function (url) {
                            var validTurn = url.indexOf('turn:') === 0 &&
                                url.indexOf('transport=udp') !== -1 &&
                                url.indexOf('turn:[') === -1 &&
                                !hasTurn;

                            if (validTurn) {
                                hasTurn = true;
                                return true;
                            }
                            return url.indexOf('stun:') === 0 && edgeVersion >= 14393 &&
                                url.indexOf('?transport=udp') === -1;
                        });

                        delete server.url;
                        server.urls = isString ? urls[0] : urls;
                        return !!urls.length;
                    }
                });
            }

            // Determines the intersection of local and remote capabilities.
            function getCommonCapabilities(localCapabilities, remoteCapabilities) {
                var commonCapabilities = {
                    codecs: [],
                    headerExtensions: [],
                    fecMechanisms: []
                };

                var findCodecByPayloadType = function (pt, codecs) {
                    pt = parseInt(pt, 10);
                    for (var i = 0; i < codecs.length; i++) {
                        if (codecs[i].payloadType === pt ||
                            codecs[i].preferredPayloadType === pt) {
                            return codecs[i];
                        }
                    }
                };

                var rtxCapabilityMatches = function (lRtx, rRtx, lCodecs, rCodecs) {
                    var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
                    var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
                    return lCodec && rCodec &&
                        lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
                };

                localCapabilities.codecs.forEach(function (lCodec) {
                    for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
                        var rCodec = remoteCapabilities.codecs[i];
                        if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
                            lCodec.clockRate === rCodec.clockRate) {
                            if (lCodec.name.toLowerCase() === 'rtx' &&
                                lCodec.parameters && rCodec.parameters.apt) {
                                // for RTX we need to find the local rtx that has a apt
                                // which points to the same local codec as the remote one.
                                if (!rtxCapabilityMatches(lCodec, rCodec,
                                    localCapabilities.codecs, remoteCapabilities.codecs)) {
                                    continue;
                                }
                            }
                            rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
                            // number of channels is the highest common number of channels
                            rCodec.numChannels = Math.min(lCodec.numChannels,
                                rCodec.numChannels);
                            // push rCodec so we reply with offerer payload type
                            commonCapabilities.codecs.push(rCodec);

                            // determine common feedback mechanisms
                            rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function (fb) {
                                for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
                                    if (lCodec.rtcpFeedback[j].type === fb.type &&
                                        lCodec.rtcpFeedback[j].parameter === fb.parameter) {
                                        return true;
                                    }
                                }
                                return false;
                            });
                            // FIXME: also need to determine .parameters
                            //  see https://github.com/openpeer/ortc/issues/569
                            break;
                        }
                    }
                });

                localCapabilities.headerExtensions.forEach(function (lHeaderExtension) {
                    for (var i = 0; i < remoteCapabilities.headerExtensions.length;
                        i++) {
                        var rHeaderExtension = remoteCapabilities.headerExtensions[i];
                        if (lHeaderExtension.uri === rHeaderExtension.uri) {
                            commonCapabilities.headerExtensions.push(rHeaderExtension);
                            break;
                        }
                    }
                });

                // FIXME: fecMechanisms
                return commonCapabilities;
            }

            // is action=setLocalDescription with type allowed in signalingState
            function isActionAllowedInSignalingState(action, type, signalingState) {
                return {
                    offer: {
                        setLocalDescription: ['stable', 'have-local-offer'],
                        setRemoteDescription: ['stable', 'have-remote-offer']
                    },
                    answer: {
                        setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
                        setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
                    }
                }[type][action].indexOf(signalingState) !== -1;
            }

            function maybeAddCandidate(iceTransport, candidate) {
                // Edge's internal representation adds some fields therefore
                // not all fieldѕ are taken into account.
                var alreadyAdded = iceTransport.getRemoteCandidates()
                    .find(function (remoteCandidate) {
                        return candidate.foundation === remoteCandidate.foundation &&
                            candidate.ip === remoteCandidate.ip &&
                            candidate.port === remoteCandidate.port &&
                            candidate.priority === remoteCandidate.priority &&
                            candidate.protocol === remoteCandidate.protocol &&
                            candidate.type === remoteCandidate.type;
                    });
                if (!alreadyAdded) {
                    iceTransport.addRemoteCandidate(candidate);
                }
                return !alreadyAdded;
            }


            function makeError(name, description) {
                var e = new Error(description);
                e.name = name;
                // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names
                e.code = {
                    NotSupportedError: 9,
                    InvalidStateError: 11,
                    InvalidAccessError: 15,
                    TypeError: undefined,
                    OperationError: undefined
                }[name];
                return e;
            }

            module.exports = function (window, edgeVersion) {
                // https://w3c.github.io/mediacapture-main/#mediastream
                // Helper function to add the track to the stream and
                // dispatch the event ourselves.
                function addTrackToStreamAndFireEvent(track, stream) {
                    stream.addTrack(track);
                    stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack',
                        { track: track }));
                }

                function removeTrackFromStreamAndFireEvent(track, stream) {
                    stream.removeTrack(track);
                    stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack',
                        { track: track }));
                }

                function fireAddTrack(pc, track, receiver, streams) {
                    var trackEvent = new Event('track');
                    trackEvent.track = track;
                    trackEvent.receiver = receiver;
                    trackEvent.transceiver = { receiver: receiver };
                    trackEvent.streams = streams;
                    window.setTimeout(function () {
                        pc._dispatchEvent('track', trackEvent);
                    });
                }

                var RTCPeerConnection = function (config) {
                    var pc = this;

                    var _eventTarget = document.createDocumentFragment();
                    ['addEventListener', 'removeEventListener', 'dispatchEvent']
                        .forEach(function (method) {
                            pc[method] = _eventTarget[method].bind(_eventTarget);
                        });

                    this.canTrickleIceCandidates = null;

                    this.needNegotiation = false;

                    this.localStreams = [];
                    this.remoteStreams = [];

                    this._localDescription = null;
                    this._remoteDescription = null;

                    this.signalingState = 'stable';
                    this.iceConnectionState = 'new';
                    this.connectionState = 'new';
                    this.iceGatheringState = 'new';

                    config = JSON.parse(JSON.stringify(config || {}));

                    this.usingBundle = config.bundlePolicy === 'max-bundle';
                    if (config.rtcpMuxPolicy === 'negotiate') {
                        throw (makeError('NotSupportedError',
                            'rtcpMuxPolicy \'negotiate\' is not supported'));
                    } else if (!config.rtcpMuxPolicy) {
                        config.rtcpMuxPolicy = 'require';
                    }

                    switch (config.iceTransportPolicy) {
                        case 'all':
                        case 'relay':
                            break;
                        default:
                            config.iceTransportPolicy = 'all';
                            break;
                    }

                    switch (config.bundlePolicy) {
                        case 'balanced':
                        case 'max-compat':
                        case 'max-bundle':
                            break;
                        default:
                            config.bundlePolicy = 'balanced';
                            break;
                    }

                    config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);

                    this._iceGatherers = [];
                    if (config.iceCandidatePoolSize) {
                        for (var i = config.iceCandidatePoolSize; i > 0; i--) {
                            this._iceGatherers.push(new window.RTCIceGatherer({
                                iceServers: config.iceServers,
                                gatherPolicy: config.iceTransportPolicy
                            }));
                        }
                    } else {
                        config.iceCandidatePoolSize = 0;
                    }

                    this._config = config;

                    // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
                    // everything that is needed to describe a SDP m-line.
                    this.transceivers = [];

                    this._sdpSessionId = SDPUtils.generateSessionId();
                    this._sdpSessionVersion = 0;

                    this._dtlsRole = undefined; // role for a=setup to use in answers.

                    this._isClosed = false;
                };

                Object.defineProperty(RTCPeerConnection.prototype, 'localDescription', {
                    configurable: true,
                    get: function () {
                        return this._localDescription;
                    }
                });
                Object.defineProperty(RTCPeerConnection.prototype, 'remoteDescription', {
                    configurable: true,
                    get: function () {
                        return this._remoteDescription;
                    }
                });

                // set up event handlers on prototype
                RTCPeerConnection.prototype.onicecandidate = null;
                RTCPeerConnection.prototype.onaddstream = null;
                RTCPeerConnection.prototype.ontrack = null;
                RTCPeerConnection.prototype.onremovestream = null;
                RTCPeerConnection.prototype.onsignalingstatechange = null;
                RTCPeerConnection.prototype.oniceconnectionstatechange = null;
                RTCPeerConnection.prototype.onconnectionstatechange = null;
                RTCPeerConnection.prototype.onicegatheringstatechange = null;
                RTCPeerConnection.prototype.onnegotiationneeded = null;
                RTCPeerConnection.prototype.ondatachannel = null;

                RTCPeerConnection.prototype._dispatchEvent = function (name, event) {
                    if (this._isClosed) {
                        return;
                    }
                    this.dispatchEvent(event);
                    if (typeof this['on' + name] === 'function') {
                        this['on' + name](event);
                    }
                };

                RTCPeerConnection.prototype._emitGatheringStateChange = function () {
                    var event = new Event('icegatheringstatechange');
                    this._dispatchEvent('icegatheringstatechange', event);
                };

                RTCPeerConnection.prototype.getConfiguration = function () {
                    return this._config;
                };

                RTCPeerConnection.prototype.getLocalStreams = function () {
                    return this.localStreams;
                };

                RTCPeerConnection.prototype.getRemoteStreams = function () {
                    return this.remoteStreams;
                };

                // internal helper to create a transceiver object.
                // (which is not yet the same as the WebRTC 1.0 transceiver)
                RTCPeerConnection.prototype._createTransceiver = function (kind, doNotAdd) {
                    var hasBundleTransport = this.transceivers.length > 0;
                    var transceiver = {
                        track: null,
                        iceGatherer: null,
                        iceTransport: null,
                        dtlsTransport: null,
                        localCapabilities: null,
                        remoteCapabilities: null,
                        rtpSender: null,
                        rtpReceiver: null,
                        kind: kind,
                        mid: null,
                        sendEncodingParameters: null,
                        recvEncodingParameters: null,
                        stream: null,
                        associatedRemoteMediaStreams: [],
                        wantReceive: true
                    };
                    if (this.usingBundle && hasBundleTransport) {
                        transceiver.iceTransport = this.transceivers[0].iceTransport;
                        transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
                    } else {
                        var transports = this._createIceAndDtlsTransports();
                        transceiver.iceTransport = transports.iceTransport;
                        transceiver.dtlsTransport = transports.dtlsTransport;
                    }
                    if (!doNotAdd) {
                        this.transceivers.push(transceiver);
                    }
                    return transceiver;
                };

                RTCPeerConnection.prototype.addTrack = function (track, stream) {
                    if (this._isClosed) {
                        throw makeError('InvalidStateError',
                            'Attempted to call addTrack on a closed peerconnection.');
                    }

                    var alreadyExists = this.transceivers.find(function (s) {
                        return s.track === track;
                    });

                    if (alreadyExists) {
                        throw makeError('InvalidAccessError', 'Track already exists.');
                    }

                    var transceiver;
                    for (var i = 0; i < this.transceivers.length; i++) {
                        if (!this.transceivers[i].track &&
                            this.transceivers[i].kind === track.kind) {
                            transceiver = this.transceivers[i];
                        }
                    }
                    if (!transceiver) {
                        transceiver = this._createTransceiver(track.kind);
                    }

                    this._maybeFireNegotiationNeeded();

                    if (this.localStreams.indexOf(stream) === -1) {
                        this.localStreams.push(stream);
                    }

                    transceiver.track = track;
                    transceiver.stream = stream;
                    transceiver.rtpSender = new window.RTCRtpSender(track,
                        transceiver.dtlsTransport);
                    return transceiver.rtpSender;
                };

                RTCPeerConnection.prototype.addStream = function (stream) {
                    var pc = this;
                    if (edgeVersion >= 15025) {
                        stream.getTracks().forEach(function (track) {
                            pc.addTrack(track, stream);
                        });
                    } else {
                        // Clone is necessary for local demos mostly, attaching directly
                        // to two different senders does not work (build 10547).
                        // Fixed in 15025 (or earlier)
                        var clonedStream = stream.clone();
                        stream.getTracks().forEach(function (track, idx) {
                            var clonedTrack = clonedStream.getTracks()[idx];
                            track.addEventListener('enabled', function (event) {
                                clonedTrack.enabled = event.enabled;
                            });
                        });
                        clonedStream.getTracks().forEach(function (track) {
                            pc.addTrack(track, clonedStream);
                        });
                    }
                };

                RTCPeerConnection.prototype.removeTrack = function (sender) {
                    if (this._isClosed) {
                        throw makeError('InvalidStateError',
                            'Attempted to call removeTrack on a closed peerconnection.');
                    }

                    if (!(sender instanceof window.RTCRtpSender)) {
                        throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' +
                            'does not implement interface RTCRtpSender.');
                    }

                    var transceiver = this.transceivers.find(function (t) {
                        return t.rtpSender === sender;
                    });

                    if (!transceiver) {
                        throw makeError('InvalidAccessError',
                            'Sender was not created by this connection.');
                    }
                    var stream = transceiver.stream;

                    transceiver.rtpSender.stop();
                    transceiver.rtpSender = null;
                    transceiver.track = null;
                    transceiver.stream = null;

                    // remove the stream from the set of local streams
                    var localStreams = this.transceivers.map(function (t) {
                        return t.stream;
                    });
                    if (localStreams.indexOf(stream) === -1 &&
                        this.localStreams.indexOf(stream) > -1) {
                        this.localStreams.splice(this.localStreams.indexOf(stream), 1);
                    }

                    this._maybeFireNegotiationNeeded();
                };

                RTCPeerConnection.prototype.removeStream = function (stream) {
                    var pc = this;
                    stream.getTracks().forEach(function (track) {
                        var sender = pc.getSenders().find(function (s) {
                            return s.track === track;
                        });
                        if (sender) {
                            pc.removeTrack(sender);
                        }
                    });
                };

                RTCPeerConnection.prototype.getSenders = function () {
                    return this.transceivers.filter(function (transceiver) {
                        return !!transceiver.rtpSender;
                    })
                        .map(function (transceiver) {
                            return transceiver.rtpSender;
                        });
                };

                RTCPeerConnection.prototype.getReceivers = function () {
                    return this.transceivers.filter(function (transceiver) {
                        return !!transceiver.rtpReceiver;
                    })
                        .map(function (transceiver) {
                            return transceiver.rtpReceiver;
                        });
                };


                RTCPeerConnection.prototype._createIceGatherer = function (sdpMLineIndex,
                    usingBundle) {
                    var pc = this;
                    if (usingBundle && sdpMLineIndex > 0) {
                        return this.transceivers[0].iceGatherer;
                    } else if (this._iceGatherers.length) {
                        return this._iceGatherers.shift();
                    }
                    var iceGatherer = new window.RTCIceGatherer({
                        iceServers: this._config.iceServers,
                        gatherPolicy: this._config.iceTransportPolicy
                    });
                    Object.defineProperty(iceGatherer, 'state',
                        { value: 'new', writable: true }
                    );

                    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
                    this.transceivers[sdpMLineIndex].bufferCandidates = function (event) {
                        var end = !event.candidate || Object.keys(event.candidate).length === 0;
                        // polyfill since RTCIceGatherer.state is not implemented in
                        // Edge 10547 yet.
                        iceGatherer.state = end ? 'completed' : 'gathering';
                        if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
                            pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
                        }
                    };
                    iceGatherer.addEventListener('localcandidate',
                        this.transceivers[sdpMLineIndex].bufferCandidates);
                    return iceGatherer;
                };

                // start gathering from an RTCIceGatherer.
                RTCPeerConnection.prototype._gather = function (mid, sdpMLineIndex) {
                    var pc = this;
                    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
                    if (iceGatherer.onlocalcandidate) {
                        return;
                    }
                    var bufferedCandidateEvents =
                        this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
                    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
                    iceGatherer.removeEventListener('localcandidate',
                        this.transceivers[sdpMLineIndex].bufferCandidates);
                    iceGatherer.onlocalcandidate = function (evt) {
                        if (pc.usingBundle && sdpMLineIndex > 0) {
                            // if we know that we use bundle we can drop candidates with
                            // ѕdpMLineIndex > 0. If we don't do this then our state gets
                            // confused since we dispose the extra ice gatherer.
                            return;
                        }
                        var event = new Event('icecandidate');
                        event.candidate = { sdpMid: mid, sdpMLineIndex: sdpMLineIndex };

                        var cand = evt.candidate;
                        // Edge emits an empty object for RTCIceCandidateComplete‥
                        var end = !cand || Object.keys(cand).length === 0;
                        if (end) {
                            // polyfill since RTCIceGatherer.state is not implemented in
                            // Edge 10547 yet.
                            if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
                                iceGatherer.state = 'completed';
                            }
                        } else {
                            if (iceGatherer.state === 'new') {
                                iceGatherer.state = 'gathering';
                            }
                            // RTCIceCandidate doesn't have a component, needs to be added
                            cand.component = 1;
                            // also the usernameFragment. TODO: update SDP to take both variants.
                            cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;

                            var serializedCandidate = SDPUtils.writeCandidate(cand);
                            event.candidate = Object.assign(event.candidate,
                                SDPUtils.parseCandidate(serializedCandidate));

                            event.candidate.candidate = serializedCandidate;
                            event.candidate.toJSON = function () {
                                return {
                                    candidate: event.candidate.candidate,
                                    sdpMid: event.candidate.sdpMid,
                                    sdpMLineIndex: event.candidate.sdpMLineIndex,
                                    usernameFragment: event.candidate.usernameFragment
                                };
                            };
                        }

                        // update local description.
                        var sections = SDPUtils.getMediaSections(pc._localDescription.sdp);
                        if (!end) {
                            sections[event.candidate.sdpMLineIndex] +=
                                'a=' + event.candidate.candidate + '\r\n';
                        } else {
                            sections[event.candidate.sdpMLineIndex] +=
                                'a=end-of-candidates\r\n';
                        }
                        pc._localDescription.sdp =
                            SDPUtils.getDescription(pc._localDescription.sdp) +
                            sections.join('');
                        var complete = pc.transceivers.every(function (transceiver) {
                            return transceiver.iceGatherer &&
                                transceiver.iceGatherer.state === 'completed';
                        });

                        if (pc.iceGatheringState !== 'gathering') {
                            pc.iceGatheringState = 'gathering';
                            pc._emitGatheringStateChange();
                        }

                        // Emit candidate. Also emit null candidate when all gatherers are
                        // complete.
                        if (!end) {
                            pc._dispatchEvent('icecandidate', event);
                        }
                        if (complete) {
                            pc._dispatchEvent('icecandidate', new Event('icecandidate'));
                            pc.iceGatheringState = 'complete';
                            pc._emitGatheringStateChange();
                        }
                    };

                    // emit already gathered candidates.
                    window.setTimeout(function () {
                        bufferedCandidateEvents.forEach(function (e) {
                            iceGatherer.onlocalcandidate(e);
                        });
                    }, 0);
                };

                // Create ICE transport and DTLS transport.
                RTCPeerConnection.prototype._createIceAndDtlsTransports = function () {
                    var pc = this;
                    var iceTransport = new window.RTCIceTransport(null);
                    iceTransport.onicestatechange = function () {
                        pc._updateIceConnectionState();
                        pc._updateConnectionState();
                    };

                    var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
                    dtlsTransport.ondtlsstatechange = function () {
                        pc._updateConnectionState();
                    };
                    dtlsTransport.onerror = function () {
                        // onerror does not set state to failed by itself.
                        Object.defineProperty(dtlsTransport, 'state',
                            { value: 'failed', writable: true });
                        pc._updateConnectionState();
                    };

                    return {
                        iceTransport: iceTransport,
                        dtlsTransport: dtlsTransport
                    };
                };

                // Destroy ICE gatherer, ICE transport and DTLS transport.
                // Without triggering the callbacks.
                RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function (
                    sdpMLineIndex) {
                    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
                    if (iceGatherer) {
                        delete iceGatherer.onlocalcandidate;
                        delete this.transceivers[sdpMLineIndex].iceGatherer;
                    }
                    var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
                    if (iceTransport) {
                        delete iceTransport.onicestatechange;
                        delete this.transceivers[sdpMLineIndex].iceTransport;
                    }
                    var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
                    if (dtlsTransport) {
                        delete dtlsTransport.ondtlsstatechange;
                        delete dtlsTransport.onerror;
                        delete this.transceivers[sdpMLineIndex].dtlsTransport;
                    }
                };

                // Start the RTP Sender and Receiver for a transceiver.
                RTCPeerConnection.prototype._transceive = function (transceiver,
                    send, recv) {
                    var params = getCommonCapabilities(transceiver.localCapabilities,
                        transceiver.remoteCapabilities);
                    if (send && transceiver.rtpSender) {
                        params.encodings = transceiver.sendEncodingParameters;
                        params.rtcp = {
                            cname: SDPUtils.localCName,
                            compound: transceiver.rtcpParameters.compound
                        };
                        if (transceiver.recvEncodingParameters.length) {
                            params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
                        }
                        transceiver.rtpSender.send(params);
                    }
                    if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
                        // remove RTX field in Edge 14942
                        if (transceiver.kind === 'video'
                            && transceiver.recvEncodingParameters
                            && edgeVersion < 15019) {
                            transceiver.recvEncodingParameters.forEach(function (p) {
                                delete p.rtx;
                            });
                        }
                        if (transceiver.recvEncodingParameters.length) {
                            params.encodings = transceiver.recvEncodingParameters;
                        } else {
                            params.encodings = [{}];
                        }
                        params.rtcp = {
                            compound: transceiver.rtcpParameters.compound
                        };
                        if (transceiver.rtcpParameters.cname) {
                            params.rtcp.cname = transceiver.rtcpParameters.cname;
                        }
                        if (transceiver.sendEncodingParameters.length) {
                            params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
                        }
                        transceiver.rtpReceiver.receive(params);
                    }
                };

                RTCPeerConnection.prototype.setLocalDescription = function (description) {
                    var pc = this;

                    // Note: pranswer is not supported.
                    if (['offer', 'answer'].indexOf(description.type) === -1) {
                        return Promise.reject(makeError('TypeError',
                            'Unsupported type "' + description.type + '"'));
                    }

                    if (!isActionAllowedInSignalingState('setLocalDescription',
                        description.type, pc.signalingState) || pc._isClosed) {
                        return Promise.reject(makeError('InvalidStateError',
                            'Can not set local ' + description.type +
                            ' in state ' + pc.signalingState));
                    }

                    var sections;
                    var sessionpart;
                    if (description.type === 'offer') {
                        // VERY limited support for SDP munging. Limited to:
                        // * changing the order of codecs
                        sections = SDPUtils.splitSections(description.sdp);
                        sessionpart = sections.shift();
                        sections.forEach(function (mediaSection, sdpMLineIndex) {
                            var caps = SDPUtils.parseRtpParameters(mediaSection);
                            pc.transceivers[sdpMLineIndex].localCapabilities = caps;
                        });

                        pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
                            pc._gather(transceiver.mid, sdpMLineIndex);
                        });
                    } else if (description.type === 'answer') {
                        sections = SDPUtils.splitSections(pc._remoteDescription.sdp);
                        sessionpart = sections.shift();
                        var isIceLite = SDPUtils.matchPrefix(sessionpart,
                            'a=ice-lite').length > 0;
                        sections.forEach(function (mediaSection, sdpMLineIndex) {
                            var transceiver = pc.transceivers[sdpMLineIndex];
                            var iceGatherer = transceiver.iceGatherer;
                            var iceTransport = transceiver.iceTransport;
                            var dtlsTransport = transceiver.dtlsTransport;
                            var localCapabilities = transceiver.localCapabilities;
                            var remoteCapabilities = transceiver.remoteCapabilities;

                            // treat bundle-only as not-rejected.
                            var rejected = SDPUtils.isRejected(mediaSection) &&
                                SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;

                            if (!rejected && !transceiver.rejected) {
                                var remoteIceParameters = SDPUtils.getIceParameters(
                                    mediaSection, sessionpart);
                                var remoteDtlsParameters = SDPUtils.getDtlsParameters(
                                    mediaSection, sessionpart);
                                if (isIceLite) {
                                    remoteDtlsParameters.role = 'server';
                                }

                                if (!pc.usingBundle || sdpMLineIndex === 0) {
                                    pc._gather(transceiver.mid, sdpMLineIndex);
                                    if (iceTransport.state === 'new') {
                                        iceTransport.start(iceGatherer, remoteIceParameters,
                                            isIceLite ? 'controlling' : 'controlled');
                                    }
                                    if (dtlsTransport.state === 'new') {
                                        dtlsTransport.start(remoteDtlsParameters);
                                    }
                                }

                                // Calculate intersection of capabilities.
                                var params = getCommonCapabilities(localCapabilities,
                                    remoteCapabilities);

                                // Start the RTCRtpSender. The RTCRtpReceiver for this
                                // transceiver has already been started in setRemoteDescription.
                                pc._transceive(transceiver,
                                    params.codecs.length > 0,
                                    false);
                            }
                        });
                    }

                    pc._localDescription = {
                        type: description.type,
                        sdp: description.sdp
                    };
                    if (description.type === 'offer') {
                        pc._updateSignalingState('have-local-offer');
                    } else {
                        pc._updateSignalingState('stable');
                    }

                    return Promise.resolve();
                };

                RTCPeerConnection.prototype.setRemoteDescription = function (description) {
                    var pc = this;

                    // Note: pranswer is not supported.
                    if (['offer', 'answer'].indexOf(description.type) === -1) {
                        return Promise.reject(makeError('TypeError',
                            'Unsupported type "' + description.type + '"'));
                    }

                    if (!isActionAllowedInSignalingState('setRemoteDescription',
                        description.type, pc.signalingState) || pc._isClosed) {
                        return Promise.reject(makeError('InvalidStateError',
                            'Can not set remote ' + description.type +
                            ' in state ' + pc.signalingState));
                    }

                    var streams = {};
                    pc.remoteStreams.forEach(function (stream) {
                        streams[stream.id] = stream;
                    });
                    var receiverList = [];
                    var sections = SDPUtils.splitSections(description.sdp);
                    var sessionpart = sections.shift();
                    var isIceLite = SDPUtils.matchPrefix(sessionpart,
                        'a=ice-lite').length > 0;
                    var usingBundle = SDPUtils.matchPrefix(sessionpart,
                        'a=group:BUNDLE ').length > 0;
                    pc.usingBundle = usingBundle;
                    var iceOptions = SDPUtils.matchPrefix(sessionpart,
                        'a=ice-options:')[0];
                    if (iceOptions) {
                        pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ')
                            .indexOf('trickle') >= 0;
                    } else {
                        pc.canTrickleIceCandidates = false;
                    }

                    sections.forEach(function (mediaSection, sdpMLineIndex) {
                        var lines = SDPUtils.splitLines(mediaSection);
                        var kind = SDPUtils.getKind(mediaSection);
                        // treat bundle-only as not-rejected.
                        var rejected = SDPUtils.isRejected(mediaSection) &&
                            SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
                        var protocol = lines[0].substr(2).split(' ')[2];

                        var direction = SDPUtils.getDirection(mediaSection, sessionpart);
                        var remoteMsid = SDPUtils.parseMsid(mediaSection);

                        var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();

                        // Reject datachannels which are not implemented yet.
                        if (rejected || (kind === 'application' && (protocol === 'DTLS/SCTP' ||
                            protocol === 'UDP/DTLS/SCTP'))) {
                            // TODO: this is dangerous in the case where a non-rejected m-line
                            //     becomes rejected.
                            pc.transceivers[sdpMLineIndex] = {
                                mid: mid,
                                kind: kind,
                                protocol: protocol,
                                rejected: true
                            };
                            return;
                        }

                        if (!rejected && pc.transceivers[sdpMLineIndex] &&
                            pc.transceivers[sdpMLineIndex].rejected) {
                            // recycle a rejected transceiver.
                            pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
                        }

                        var transceiver;
                        var iceGatherer;
                        var iceTransport;
                        var dtlsTransport;
                        var rtpReceiver;
                        var sendEncodingParameters;
                        var recvEncodingParameters;
                        var localCapabilities;

                        var track;
                        // FIXME: ensure the mediaSection has rtcp-mux set.
                        var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
                        var remoteIceParameters;
                        var remoteDtlsParameters;
                        if (!rejected) {
                            remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
                                sessionpart);
                            remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
                                sessionpart);
                            remoteDtlsParameters.role = 'client';
                        }
                        recvEncodingParameters =
                            SDPUtils.parseRtpEncodingParameters(mediaSection);

                        var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);

                        var isComplete = SDPUtils.matchPrefix(mediaSection,
                            'a=end-of-candidates', sessionpart).length > 0;
                        var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
                            .map(function (cand) {
                                return SDPUtils.parseCandidate(cand);
                            })
                            .filter(function (cand) {
                                return cand.component === 1;
                            });

                        // Check if we can use BUNDLE and dispose transports.
                        if ((description.type === 'offer' || description.type === 'answer') &&
                            !rejected && usingBundle && sdpMLineIndex > 0 &&
                            pc.transceivers[sdpMLineIndex]) {
                            pc._disposeIceAndDtlsTransports(sdpMLineIndex);
                            pc.transceivers[sdpMLineIndex].iceGatherer =
                                pc.transceivers[0].iceGatherer;
                            pc.transceivers[sdpMLineIndex].iceTransport =
                                pc.transceivers[0].iceTransport;
                            pc.transceivers[sdpMLineIndex].dtlsTransport =
                                pc.transceivers[0].dtlsTransport;
                            if (pc.transceivers[sdpMLineIndex].rtpSender) {
                                pc.transceivers[sdpMLineIndex].rtpSender.setTransport(
                                    pc.transceivers[0].dtlsTransport);
                            }
                            if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
                                pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(
                                    pc.transceivers[0].dtlsTransport);
                            }
                        }
                        if (description.type === 'offer' && !rejected) {
                            transceiver = pc.transceivers[sdpMLineIndex] ||
                                pc._createTransceiver(kind);
                            transceiver.mid = mid;

                            if (!transceiver.iceGatherer) {
                                transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
                                    usingBundle);
                            }

                            if (cands.length && transceiver.iceTransport.state === 'new') {
                                if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
                                    transceiver.iceTransport.setRemoteCandidates(cands);
                                } else {
                                    cands.forEach(function (candidate) {
                                        maybeAddCandidate(transceiver.iceTransport, candidate);
                                    });
                                }
                            }

                            localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);

                            // filter RTX until additional stuff needed for RTX is implemented
                            // in adapter.js
                            if (edgeVersion < 15019) {
                                localCapabilities.codecs = localCapabilities.codecs.filter(
                                    function (codec) {
                                        return codec.name !== 'rtx';
                                    });
                            }

                            sendEncodingParameters = transceiver.sendEncodingParameters || [{
                                ssrc: (2 * sdpMLineIndex + 2) * 1001
                            }];

                            // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
                            var isNewTrack = false;
                            if (direction === 'sendrecv' || direction === 'sendonly') {
                                isNewTrack = !transceiver.rtpReceiver;
                                rtpReceiver = transceiver.rtpReceiver ||
                                    new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);

                                if (isNewTrack) {
                                    var stream;
                                    track = rtpReceiver.track;
                                    // FIXME: does not work with Plan B.
                                    if (remoteMsid && remoteMsid.stream === '-') {
                                        // no-op. a stream id of '-' means: no associated stream.
                                    } else if (remoteMsid) {
                                        if (!streams[remoteMsid.stream]) {
                                            streams[remoteMsid.stream] = new window.MediaStream();
                                            Object.defineProperty(streams[remoteMsid.stream], 'id', {
                                                get: function () {
                                                    return remoteMsid.stream;
                                                }
                                            });
                                        }
                                        Object.defineProperty(track, 'id', {
                                            get: function () {
                                                return remoteMsid.track;
                                            }
                                        });
                                        stream = streams[remoteMsid.stream];
                                    } else {
                                        if (!streams.default) {
                                            streams.default = new window.MediaStream();
                                        }
                                        stream = streams.default;
                                    }
                                    if (stream) {
                                        addTrackToStreamAndFireEvent(track, stream);
                                        transceiver.associatedRemoteMediaStreams.push(stream);
                                    }
                                    receiverList.push([track, rtpReceiver, stream]);
                                }
                            } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
                                transceiver.associatedRemoteMediaStreams.forEach(function (s) {
                                    var nativeTrack = s.getTracks().find(function (t) {
                                        return t.id === transceiver.rtpReceiver.track.id;
                                    });
                                    if (nativeTrack) {
                                        removeTrackFromStreamAndFireEvent(nativeTrack, s);
                                    }
                                });
                                transceiver.associatedRemoteMediaStreams = [];
                            }

                            transceiver.localCapabilities = localCapabilities;
                            transceiver.remoteCapabilities = remoteCapabilities;
                            transceiver.rtpReceiver = rtpReceiver;
                            transceiver.rtcpParameters = rtcpParameters;
                            transceiver.sendEncodingParameters = sendEncodingParameters;
                            transceiver.recvEncodingParameters = recvEncodingParameters;

                            // Start the RTCRtpReceiver now. The RTPSender is started in
                            // setLocalDescription.
                            pc._transceive(pc.transceivers[sdpMLineIndex],
                                false,
                                isNewTrack);
                        } else if (description.type === 'answer' && !rejected) {
                            transceiver = pc.transceivers[sdpMLineIndex];
                            iceGatherer = transceiver.iceGatherer;
                            iceTransport = transceiver.iceTransport;
                            dtlsTransport = transceiver.dtlsTransport;
                            rtpReceiver = transceiver.rtpReceiver;
                            sendEncodingParameters = transceiver.sendEncodingParameters;
                            localCapabilities = transceiver.localCapabilities;

                            pc.transceivers[sdpMLineIndex].recvEncodingParameters =
                                recvEncodingParameters;
                            pc.transceivers[sdpMLineIndex].remoteCapabilities =
                                remoteCapabilities;
                            pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

                            if (cands.length && iceTransport.state === 'new') {
                                if ((isIceLite || isComplete) &&
                                    (!usingBundle || sdpMLineIndex === 0)) {
                                    iceTransport.setRemoteCandidates(cands);
                                } else {
                                    cands.forEach(function (candidate) {
                                        maybeAddCandidate(transceiver.iceTransport, candidate);
                                    });
                                }
                            }

                            if (!usingBundle || sdpMLineIndex === 0) {
                                if (iceTransport.state === 'new') {
                                    iceTransport.start(iceGatherer, remoteIceParameters,
                                        'controlling');
                                }
                                if (dtlsTransport.state === 'new') {
                                    dtlsTransport.start(remoteDtlsParameters);
                                }
                            }

                            // If the offer contained RTX but the answer did not,
                            // remove RTX from sendEncodingParameters.
                            var commonCapabilities = getCommonCapabilities(
                                transceiver.localCapabilities,
                                transceiver.remoteCapabilities);

                            var hasRtx = commonCapabilities.codecs.filter(function (c) {
                                return c.name.toLowerCase() === 'rtx';
                            }).length;
                            if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
                                delete transceiver.sendEncodingParameters[0].rtx;
                            }

                            pc._transceive(transceiver,
                                direction === 'sendrecv' || direction === 'recvonly',
                                direction === 'sendrecv' || direction === 'sendonly');

                            // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
                            if (rtpReceiver &&
                                (direction === 'sendrecv' || direction === 'sendonly')) {
                                track = rtpReceiver.track;
                                if (remoteMsid) {
                                    if (!streams[remoteMsid.stream]) {
                                        streams[remoteMsid.stream] = new window.MediaStream();
                                    }
                                    addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
                                    receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
                                } else {
                                    if (!streams.default) {
                                        streams.default = new window.MediaStream();
                                    }
                                    addTrackToStreamAndFireEvent(track, streams.default);
                                    receiverList.push([track, rtpReceiver, streams.default]);
                                }
                            } else {
                                // FIXME: actually the receiver should be created later.
                                delete transceiver.rtpReceiver;
                            }
                        }
                    });

                    if (pc._dtlsRole === undefined) {
                        pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
                    }

                    pc._remoteDescription = {
                        type: description.type,
                        sdp: description.sdp
                    };
                    if (description.type === 'offer') {
                        pc._updateSignalingState('have-remote-offer');
                    } else {
                        pc._updateSignalingState('stable');
                    }
                    Object.keys(streams).forEach(function (sid) {
                        var stream = streams[sid];
                        if (stream.getTracks().length) {
                            if (pc.remoteStreams.indexOf(stream) === -1) {
                                pc.remoteStreams.push(stream);
                                var event = new Event('addstream');
                                event.stream = stream;
                                window.setTimeout(function () {
                                    pc._dispatchEvent('addstream', event);
                                });
                            }

                            receiverList.forEach(function (item) {
                                var track = item[0];
                                var receiver = item[1];
                                if (stream.id !== item[2].id) {
                                    return;
                                }
                                fireAddTrack(pc, track, receiver, [stream]);
                            });
                        }
                    });
                    receiverList.forEach(function (item) {
                        if (item[2]) {
                            return;
                        }
                        fireAddTrack(pc, item[0], item[1], []);
                    });

                    // check whether addIceCandidate({}) was called within four seconds after
                    // setRemoteDescription.
                    window.setTimeout(function () {
                        if (!(pc && pc.transceivers)) {
                            return;
                        }
                        pc.transceivers.forEach(function (transceiver) {
                            if (transceiver.iceTransport &&
                                transceiver.iceTransport.state === 'new' &&
                                transceiver.iceTransport.getRemoteCandidates().length > 0) {
                                console.warn('Timeout for addRemoteCandidate. Consider sending ' +
                                    'an end-of-candidates notification');
                                transceiver.iceTransport.addRemoteCandidate({});
                            }
                        });
                    }, 4000);

                    return Promise.resolve();
                };

                RTCPeerConnection.prototype.close = function () {
                    this.transceivers.forEach(function (transceiver) {
                        /* not yet
                        if (transceiver.iceGatherer) {
                          transceiver.iceGatherer.close();
                        }
                        */
                        if (transceiver.iceTransport) {
                            transceiver.iceTransport.stop();
                        }
                        if (transceiver.dtlsTransport) {
                            transceiver.dtlsTransport.stop();
                        }
                        if (transceiver.rtpSender) {
                            transceiver.rtpSender.stop();
                        }
                        if (transceiver.rtpReceiver) {
                            transceiver.rtpReceiver.stop();
                        }
                    });
                    // FIXME: clean up tracks, local streams, remote streams, etc
                    this._isClosed = true;
                    this._updateSignalingState('closed');
                };

                // Update the signaling state.
                RTCPeerConnection.prototype._updateSignalingState = function (newState) {
                    this.signalingState = newState;
                    var event = new Event('signalingstatechange');
                    this._dispatchEvent('signalingstatechange', event);
                };

                // Determine whether to fire the negotiationneeded event.
                RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function () {
                    var pc = this;
                    if (this.signalingState !== 'stable' || this.needNegotiation === true) {
                        return;
                    }
                    this.needNegotiation = true;
                    window.setTimeout(function () {
                        if (pc.needNegotiation) {
                            pc.needNegotiation = false;
                            var event = new Event('negotiationneeded');
                            pc._dispatchEvent('negotiationneeded', event);
                        }
                    }, 0);
                };

                // Update the ice connection state.
                RTCPeerConnection.prototype._updateIceConnectionState = function () {
                    var newState;
                    var states = {
                        'new': 0,
                        closed: 0,
                        checking: 0,
                        connected: 0,
                        completed: 0,
                        disconnected: 0,
                        failed: 0
                    };
                    this.transceivers.forEach(function (transceiver) {
                        if (transceiver.iceTransport && !transceiver.rejected) {
                            states[transceiver.iceTransport.state]++;
                        }
                    });

                    newState = 'new';
                    if (states.failed > 0) {
                        newState = 'failed';
                    } else if (states.checking > 0) {
                        newState = 'checking';
                    } else if (states.disconnected > 0) {
                        newState = 'disconnected';
                    } else if (states.new > 0) {
                        newState = 'new';
                    } else if (states.connected > 0) {
                        newState = 'connected';
                    } else if (states.completed > 0) {
                        newState = 'completed';
                    }

                    if (newState !== this.iceConnectionState) {
                        this.iceConnectionState = newState;
                        var event = new Event('iceconnectionstatechange');
                        this._dispatchEvent('iceconnectionstatechange', event);
                    }
                };

                // Update the connection state.
                RTCPeerConnection.prototype._updateConnectionState = function () {
                    var newState;
                    var states = {
                        'new': 0,
                        closed: 0,
                        connecting: 0,
                        connected: 0,
                        completed: 0,
                        disconnected: 0,
                        failed: 0
                    };
                    this.transceivers.forEach(function (transceiver) {
                        if (transceiver.iceTransport && transceiver.dtlsTransport &&
                            !transceiver.rejected) {
                            states[transceiver.iceTransport.state]++;
                            states[transceiver.dtlsTransport.state]++;
                        }
                    });
                    // ICETransport.completed and connected are the same for this purpose.
                    states.connected += states.completed;

                    newState = 'new';
                    if (states.failed > 0) {
                        newState = 'failed';
                    } else if (states.connecting > 0) {
                        newState = 'connecting';
                    } else if (states.disconnected > 0) {
                        newState = 'disconnected';
                    } else if (states.new > 0) {
                        newState = 'new';
                    } else if (states.connected > 0) {
                        newState = 'connected';
                    }

                    if (newState !== this.connectionState) {
                        this.connectionState = newState;
                        var event = new Event('connectionstatechange');
                        this._dispatchEvent('connectionstatechange', event);
                    }
                };

                RTCPeerConnection.prototype.createOffer = function () {
                    var pc = this;

                    if (pc._isClosed) {
                        return Promise.reject(makeError('InvalidStateError',
                            'Can not call createOffer after close'));
                    }

                    var numAudioTracks = pc.transceivers.filter(function (t) {
                        return t.kind === 'audio';
                    }).length;
                    var numVideoTracks = pc.transceivers.filter(function (t) {
                        return t.kind === 'video';
                    }).length;

                    // Determine number of audio and video tracks we need to send/recv.
                    var offerOptions = arguments[0];
                    if (offerOptions) {
                        // Reject Chrome legacy constraints.
                        if (offerOptions.mandatory || offerOptions.optional) {
                            throw new TypeError(
                                'Legacy mandatory/optional constraints not supported.');
                        }
                        if (offerOptions.offerToReceiveAudio !== undefined) {
                            if (offerOptions.offerToReceiveAudio === true) {
                                numAudioTracks = 1;
                            } else if (offerOptions.offerToReceiveAudio === false) {
                                numAudioTracks = 0;
                            } else {
                                numAudioTracks = offerOptions.offerToReceiveAudio;
                            }
                        }
                        if (offerOptions.offerToReceiveVideo !== undefined) {
                            if (offerOptions.offerToReceiveVideo === true) {
                                numVideoTracks = 1;
                            } else if (offerOptions.offerToReceiveVideo === false) {
                                numVideoTracks = 0;
                            } else {
                                numVideoTracks = offerOptions.offerToReceiveVideo;
                            }
                        }
                    }

                    pc.transceivers.forEach(function (transceiver) {
                        if (transceiver.kind === 'audio') {
                            numAudioTracks--;
                            if (numAudioTracks < 0) {
                                transceiver.wantReceive = false;
                            }
                        } else if (transceiver.kind === 'video') {
                            numVideoTracks--;
                            if (numVideoTracks < 0) {
                                transceiver.wantReceive = false;
                            }
                        }
                    });

                    // Create M-lines for recvonly streams.
                    while (numAudioTracks > 0 || numVideoTracks > 0) {
                        if (numAudioTracks > 0) {
                            pc._createTransceiver('audio');
                            numAudioTracks--;
                        }
                        if (numVideoTracks > 0) {
                            pc._createTransceiver('video');
                            numVideoTracks--;
                        }
                    }

                    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
                        pc._sdpSessionVersion++);
                    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
                        // For each track, create an ice gatherer, ice transport,
                        // dtls transport, potentially rtpsender and rtpreceiver.
                        var track = transceiver.track;
                        var kind = transceiver.kind;
                        var mid = transceiver.mid || SDPUtils.generateIdentifier();
                        transceiver.mid = mid;

                        if (!transceiver.iceGatherer) {
                            transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
                                pc.usingBundle);
                        }

                        var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
                        // filter RTX until additional stuff needed for RTX is implemented
                        // in adapter.js
                        if (edgeVersion < 15019) {
                            localCapabilities.codecs = localCapabilities.codecs.filter(
                                function (codec) {
                                    return codec.name !== 'rtx';
                                });
                        }
                        localCapabilities.codecs.forEach(function (codec) {
                            // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
                            // by adding level-asymmetry-allowed=1
                            if (codec.name === 'H264' &&
                                codec.parameters['level-asymmetry-allowed'] === undefined) {
                                codec.parameters['level-asymmetry-allowed'] = '1';
                            }

                            // for subsequent offers, we might have to re-use the payload
                            // type of the last offer.
                            if (transceiver.remoteCapabilities &&
                                transceiver.remoteCapabilities.codecs) {
                                transceiver.remoteCapabilities.codecs.forEach(function (remoteCodec) {
                                    if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() &&
                                        codec.clockRate === remoteCodec.clockRate) {
                                        codec.preferredPayloadType = remoteCodec.payloadType;
                                    }
                                });
                            }
                        });
                        localCapabilities.headerExtensions.forEach(function (hdrExt) {
                            var remoteExtensions = transceiver.remoteCapabilities &&
                                transceiver.remoteCapabilities.headerExtensions || [];
                            remoteExtensions.forEach(function (rHdrExt) {
                                if (hdrExt.uri === rHdrExt.uri) {
                                    hdrExt.id = rHdrExt.id;
                                }
                            });
                        });

                        // generate an ssrc now, to be used later in rtpSender.send
                        var sendEncodingParameters = transceiver.sendEncodingParameters || [{
                            ssrc: (2 * sdpMLineIndex + 1) * 1001
                        }];
                        if (track) {
                            // add RTX
                            if (edgeVersion >= 15019 && kind === 'video' &&
                                !sendEncodingParameters[0].rtx) {
                                sendEncodingParameters[0].rtx = {
                                    ssrc: sendEncodingParameters[0].ssrc + 1
                                };
                            }
                        }

                        if (transceiver.wantReceive) {
                            transceiver.rtpReceiver = new window.RTCRtpReceiver(
                                transceiver.dtlsTransport, kind);
                        }

                        transceiver.localCapabilities = localCapabilities;
                        transceiver.sendEncodingParameters = sendEncodingParameters;
                    });

                    // always offer BUNDLE and dispose on return if not supported.
                    if (pc._config.bundlePolicy !== 'max-compat') {
                        sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function (t) {
                            return t.mid;
                        }).join(' ') + '\r\n';
                    }
                    sdp += 'a=ice-options:trickle\r\n';

                    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
                        sdp += writeMediaSection(transceiver, transceiver.localCapabilities,
                            'offer', transceiver.stream, pc._dtlsRole);
                        sdp += 'a=rtcp-rsize\r\n';

                        if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' &&
                            (sdpMLineIndex === 0 || !pc.usingBundle)) {
                            transceiver.iceGatherer.getLocalCandidates().forEach(function (cand) {
                                cand.component = 1;
                                sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
                            });

                            if (transceiver.iceGatherer.state === 'completed') {
                                sdp += 'a=end-of-candidates\r\n';
                            }
                        }
                    });

                    var desc = new window.RTCSessionDescription({
                        type: 'offer',
                        sdp: sdp
                    });
                    return Promise.resolve(desc);
                };

                RTCPeerConnection.prototype.createAnswer = function () {
                    var pc = this;

                    if (pc._isClosed) {
                        return Promise.reject(makeError('InvalidStateError',
                            'Can not call createAnswer after close'));
                    }

                    if (!(pc.signalingState === 'have-remote-offer' ||
                        pc.signalingState === 'have-local-pranswer')) {
                        return Promise.reject(makeError('InvalidStateError',
                            'Can not call createAnswer in signalingState ' + pc.signalingState));
                    }

                    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
                        pc._sdpSessionVersion++);
                    if (pc.usingBundle) {
                        sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function (t) {
                            return t.mid;
                        }).join(' ') + '\r\n';
                    }
                    sdp += 'a=ice-options:trickle\r\n';

                    var mediaSectionsInOffer = SDPUtils.getMediaSections(
                        pc._remoteDescription.sdp).length;
                    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
                        if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
                            return;
                        }
                        if (transceiver.rejected) {
                            if (transceiver.kind === 'application') {
                                if (transceiver.protocol === 'DTLS/SCTP') { // legacy fmt
                                    sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
                                } else {
                                    sdp += 'm=application 0 ' + transceiver.protocol +
                                        ' webrtc-datachannel\r\n';
                                }
                            } else if (transceiver.kind === 'audio') {
                                sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' +
                                    'a=rtpmap:0 PCMU/8000\r\n';
                            } else if (transceiver.kind === 'video') {
                                sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' +
                                    'a=rtpmap:120 VP8/90000\r\n';
                            }
                            sdp += 'c=IN IP4 0.0.0.0\r\n' +
                                'a=inactive\r\n' +
                                'a=mid:' + transceiver.mid + '\r\n';
                            return;
                        }

                        // FIXME: look at direction.
                        if (transceiver.stream) {
                            var localTrack;
                            if (transceiver.kind === 'audio') {
                                localTrack = transceiver.stream.getAudioTracks()[0];
                            } else if (transceiver.kind === 'video') {
                                localTrack = transceiver.stream.getVideoTracks()[0];
                            }
                            if (localTrack) {
                                // add RTX
                                if (edgeVersion >= 15019 && transceiver.kind === 'video' &&
                                    !transceiver.sendEncodingParameters[0].rtx) {
                                    transceiver.sendEncodingParameters[0].rtx = {
                                        ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
                                    };
                                }
                            }
                        }

                        // Calculate intersection of capabilities.
                        var commonCapabilities = getCommonCapabilities(
                            transceiver.localCapabilities,
                            transceiver.remoteCapabilities);

                        var hasRtx = commonCapabilities.codecs.filter(function (c) {
                            return c.name.toLowerCase() === 'rtx';
                        }).length;
                        if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
                            delete transceiver.sendEncodingParameters[0].rtx;
                        }

                        sdp += writeMediaSection(transceiver, commonCapabilities,
                            'answer', transceiver.stream, pc._dtlsRole);
                        if (transceiver.rtcpParameters &&
                            transceiver.rtcpParameters.reducedSize) {
                            sdp += 'a=rtcp-rsize\r\n';
                        }
                    });

                    var desc = new window.RTCSessionDescription({
                        type: 'answer',
                        sdp: sdp
                    });
                    return Promise.resolve(desc);
                };

                RTCPeerConnection.prototype.addIceCandidate = function (candidate) {
                    var pc = this;
                    var sections;
                    if (candidate && !(candidate.sdpMLineIndex !== undefined ||
                        candidate.sdpMid)) {
                        return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
                    }

                    // TODO: needs to go into ops queue.
                    return new Promise(function (resolve, reject) {
                        if (!pc._remoteDescription) {
                            return reject(makeError('InvalidStateError',
                                'Can not add ICE candidate without a remote description'));
                        } else if (!candidate || candidate.candidate === '') {
                            for (var j = 0; j < pc.transceivers.length; j++) {
                                if (pc.transceivers[j].rejected) {
                                    continue;
                                }
                                pc.transceivers[j].iceTransport.addRemoteCandidate({});
                                sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
                                sections[j] += 'a=end-of-candidates\r\n';
                                pc._remoteDescription.sdp =
                                    SDPUtils.getDescription(pc._remoteDescription.sdp) +
                                    sections.join('');
                                if (pc.usingBundle) {
                                    break;
                                }
                            }
                        } else {
                            var sdpMLineIndex = candidate.sdpMLineIndex;
                            if (candidate.sdpMid) {
                                for (var i = 0; i < pc.transceivers.length; i++) {
                                    if (pc.transceivers[i].mid === candidate.sdpMid) {
                                        sdpMLineIndex = i;
                                        break;
                                    }
                                }
                            }
                            var transceiver = pc.transceivers[sdpMLineIndex];
                            if (transceiver) {
                                if (transceiver.rejected) {
                                    return resolve();
                                }
                                var cand = Object.keys(candidate.candidate).length > 0 ?
                                    SDPUtils.parseCandidate(candidate.candidate) : {};
                                // Ignore Chrome's invalid candidates since Edge does not like them.
                                if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
                                    return resolve();
                                }
                                // Ignore RTCP candidates, we assume RTCP-MUX.
                                if (cand.component && cand.component !== 1) {
                                    return resolve();
                                }
                                // when using bundle, avoid adding candidates to the wrong
                                // ice transport. And avoid adding candidates added in the SDP.
                                if (sdpMLineIndex === 0 || (sdpMLineIndex > 0 &&
                                    transceiver.iceTransport !== pc.transceivers[0].iceTransport)) {
                                    if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
                                        return reject(makeError('OperationError',
                                            'Can not add ICE candidate'));
                                    }
                                }

                                // update the remoteDescription.
                                var candidateString = candidate.candidate.trim();
                                if (candidateString.indexOf('a=') === 0) {
                                    candidateString = candidateString.substr(2);
                                }
                                sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
                                sections[sdpMLineIndex] += 'a=' +
                                    (cand.type ? candidateString : 'end-of-candidates')
                                    + '\r\n';
                                pc._remoteDescription.sdp =
                                    SDPUtils.getDescription(pc._remoteDescription.sdp) +
                                    sections.join('');
                            } else {
                                return reject(makeError('OperationError',
                                    'Can not add ICE candidate'));
                            }
                        }
                        resolve();
                    });
                };

                RTCPeerConnection.prototype.getStats = function (selector) {
                    if (selector && selector instanceof window.MediaStreamTrack) {
                        var senderOrReceiver = null;
                        this.transceivers.forEach(function (transceiver) {
                            if (transceiver.rtpSender &&
                                transceiver.rtpSender.track === selector) {
                                senderOrReceiver = transceiver.rtpSender;
                            } else if (transceiver.rtpReceiver &&
                                transceiver.rtpReceiver.track === selector) {
                                senderOrReceiver = transceiver.rtpReceiver;
                            }
                        });
                        if (!senderOrReceiver) {
                            throw makeError('InvalidAccessError', 'Invalid selector.');
                        }
                        return senderOrReceiver.getStats();
                    }

                    var promises = [];
                    this.transceivers.forEach(function (transceiver) {
                        ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
                            'dtlsTransport'].forEach(function (method) {
                                if (transceiver[method]) {
                                    promises.push(transceiver[method].getStats());
                                }
                            });
                    });
                    return Promise.all(promises).then(function (allStats) {
                        var results = new Map();
                        allStats.forEach(function (stats) {
                            stats.forEach(function (stat) {
                                results.set(stat.id, stat);
                            });
                        });
                        return results;
                    });
                };

                // fix low-level stat names and return Map instead of object.
                var ortcObjects = ['RTCRtpSender', 'RTCRtpReceiver', 'RTCIceGatherer',
                    'RTCIceTransport', 'RTCDtlsTransport'];
                ortcObjects.forEach(function (ortcObjectName) {
                    var obj = window[ortcObjectName];
                    if (obj && obj.prototype && obj.prototype.getStats) {
                        var nativeGetstats = obj.prototype.getStats;
                        obj.prototype.getStats = function () {
                            return nativeGetstats.apply(this)
                                .then(function (nativeStats) {
                                    var mapStats = new Map();
                                    Object.keys(nativeStats).forEach(function (id) {
                                        nativeStats[id].type = fixStatsType(nativeStats[id]);
                                        mapStats.set(id, nativeStats[id]);
                                    });
                                    return mapStats;
                                });
                        };
                    }
                });

                // legacy callback shims. Should be moved to adapter.js some days.
                var methods = ['createOffer', 'createAnswer'];
                methods.forEach(function (method) {
                    var nativeMethod = RTCPeerConnection.prototype[method];
                    RTCPeerConnection.prototype[method] = function () {
                        var args = arguments;
                        if (typeof args[0] === 'function' ||
                            typeof args[1] === 'function') { // legacy
                            return nativeMethod.apply(this, [arguments[2]])
                                .then(function (description) {
                                    if (typeof args[0] === 'function') {
                                        args[0].apply(null, [description]);
                                    }
                                }, function (error) {
                                    if (typeof args[1] === 'function') {
                                        args[1].apply(null, [error]);
                                    }
                                });
                        }
                        return nativeMethod.apply(this, arguments);
                    };
                });

                methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
                methods.forEach(function (method) {
                    var nativeMethod = RTCPeerConnection.prototype[method];
                    RTCPeerConnection.prototype[method] = function () {
                        var args = arguments;
                        if (typeof args[1] === 'function' ||
                            typeof args[2] === 'function') { // legacy
                            return nativeMethod.apply(this, arguments)
                                .then(function () {
                                    if (typeof args[1] === 'function') {
                                        args[1].apply(null);
                                    }
                                }, function (error) {
                                    if (typeof args[2] === 'function') {
                                        args[2].apply(null, [error]);
                                    }
                                });
                        }
                        return nativeMethod.apply(this, arguments);
                    };
                });

                // getStats is special. It doesn't have a spec legacy method yet we support
                // getStats(something, cb) without error callbacks.
                ['getStats'].forEach(function (method) {
                    var nativeMethod = RTCPeerConnection.prototype[method];
                    RTCPeerConnection.prototype[method] = function () {
                        var args = arguments;
                        if (typeof args[1] === 'function') {
                            return nativeMethod.apply(this, arguments)
                                .then(function () {
                                    if (typeof args[1] === 'function') {
                                        args[1].apply(null);
                                    }
                                });
                        }
                        return nativeMethod.apply(this, arguments);
                    };
                });

                return RTCPeerConnection;
            };

        }, { "sdp": 17 }], 17: [function (require, module, exports) {
            /* eslint-env node */
            'use strict';

            // SDP helpers.
            var SDPUtils = {};

            // Generate an alphanumeric identifier for cname or mids.
            // TODO: use UUIDs instead? https://gist.github.com/jed/982883
            SDPUtils.generateIdentifier = function () {
                return Math.random().toString(36).substr(2, 10);
            };

            // The RTCP CNAME used by all peerconnections from the same JS.
            SDPUtils.localCName = SDPUtils.generateIdentifier();

            // Splits SDP into lines, dealing with both CRLF and LF.
            SDPUtils.splitLines = function (blob) {
                return blob.trim().split('\n').map(function (line) {
                    return line.trim();
                });
            };
            // Splits SDP into sessionpart and mediasections. Ensures CRLF.
            SDPUtils.splitSections = function (blob) {
                var parts = blob.split('\nm=');
                return parts.map(function (part, index) {
                    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
                });
            };

            // returns the session description.
            SDPUtils.getDescription = function (blob) {
                var sections = SDPUtils.splitSections(blob);
                return sections && sections[0];
            };

            // returns the individual media sections.
            SDPUtils.getMediaSections = function (blob) {
                var sections = SDPUtils.splitSections(blob);
                sections.shift();
                return sections;
            };

            // Returns lines that start with a certain prefix.
            SDPUtils.matchPrefix = function (blob, prefix) {
                return SDPUtils.splitLines(blob).filter(function (line) {
                    return line.indexOf(prefix) === 0;
                });
            };

            // Parses an ICE candidate line. Sample input:
            // candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
            // rport 55996"
            SDPUtils.parseCandidate = function (line) {
                var parts;
                // Parse both variants.
                if (line.indexOf('a=candidate:') === 0) {
                    parts = line.substring(12).split(' ');
                } else {
                    parts = line.substring(10).split(' ');
                }

                var candidate = {
                    foundation: parts[0],
                    component: parseInt(parts[1], 10),
                    protocol: parts[2].toLowerCase(),
                    priority: parseInt(parts[3], 10),
                    ip: parts[4],
                    address: parts[4], // address is an alias for ip.
                    port: parseInt(parts[5], 10),
                    // skip parts[6] == 'typ'
                    type: parts[7]
                };

                for (var i = 8; i < parts.length; i += 2) {
                    switch (parts[i]) {
                        case 'raddr':
                            candidate.relatedAddress = parts[i + 1];
                            break;
                        case 'rport':
                            candidate.relatedPort = parseInt(parts[i + 1], 10);
                            break;
                        case 'tcptype':
                            candidate.tcpType = parts[i + 1];
                            break;
                        case 'ufrag':
                            candidate.ufrag = parts[i + 1]; // for backward compability.
                            candidate.usernameFragment = parts[i + 1];
                            break;
                        default: // extension handling, in particular ufrag
                            candidate[parts[i]] = parts[i + 1];
                            break;
                    }
                }
                return candidate;
            };

            // Translates a candidate object into SDP candidate attribute.
            SDPUtils.writeCandidate = function (candidate) {
                var sdp = [];
                sdp.push(candidate.foundation);
                sdp.push(candidate.component);
                sdp.push(candidate.protocol.toUpperCase());
                sdp.push(candidate.priority);
                sdp.push(candidate.address || candidate.ip);
                sdp.push(candidate.port);

                var type = candidate.type;
                sdp.push('typ');
                sdp.push(type);
                if (type !== 'host' && candidate.relatedAddress &&
                    candidate.relatedPort) {
                    sdp.push('raddr');
                    sdp.push(candidate.relatedAddress);
                    sdp.push('rport');
                    sdp.push(candidate.relatedPort);
                }
                if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
                    sdp.push('tcptype');
                    sdp.push(candidate.tcpType);
                }
                if (candidate.usernameFragment || candidate.ufrag) {
                    sdp.push('ufrag');
                    sdp.push(candidate.usernameFragment || candidate.ufrag);
                }
                return 'candidate:' + sdp.join(' ');
            };

            // Parses an ice-options line, returns an array of option tags.
            // a=ice-options:foo bar
            SDPUtils.parseIceOptions = function (line) {
                return line.substr(14).split(' ');
            };

            // Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
            // a=rtpmap:111 opus/48000/2
            SDPUtils.parseRtpMap = function (line) {
                var parts = line.substr(9).split(' ');
                var parsed = {
                    payloadType: parseInt(parts.shift(), 10) // was: id
                };

                parts = parts[0].split('/');

                parsed.name = parts[0];
                parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
                parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
                // legacy alias, got renamed back to channels in ORTC.
                parsed.numChannels = parsed.channels;
                return parsed;
            };

            // Generate an a=rtpmap line from RTCRtpCodecCapability or
            // RTCRtpCodecParameters.
            SDPUtils.writeRtpMap = function (codec) {
                var pt = codec.payloadType;
                if (codec.preferredPayloadType !== undefined) {
                    pt = codec.preferredPayloadType;
                }
                var channels = codec.channels || codec.numChannels || 1;
                return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
                    (channels !== 1 ? '/' + channels : '') + '\r\n';
            };

            // Parses an a=extmap line (headerextension from RFC 5285). Sample input:
            // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
            // a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
            SDPUtils.parseExtmap = function (line) {
                var parts = line.substr(9).split(' ');
                return {
                    id: parseInt(parts[0], 10),
                    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
                    uri: parts[1]
                };
            };

            // Generates a=extmap line from RTCRtpHeaderExtensionParameters or
            // RTCRtpHeaderExtension.
            SDPUtils.writeExtmap = function (headerExtension) {
                return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
                    (headerExtension.direction && headerExtension.direction !== 'sendrecv'
                        ? '/' + headerExtension.direction
                        : '') +
                    ' ' + headerExtension.uri + '\r\n';
            };

            // Parses an ftmp line, returns dictionary. Sample input:
            // a=fmtp:96 vbr=on;cng=on
            // Also deals with vbr=on; cng=on
            SDPUtils.parseFmtp = function (line) {
                var parsed = {};
                var kv;
                var parts = line.substr(line.indexOf(' ') + 1).split(';');
                for (var j = 0; j < parts.length; j++) {
                    kv = parts[j].trim().split('=');
                    parsed[kv[0].trim()] = kv[1];
                }
                return parsed;
            };

            // Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
            SDPUtils.writeFmtp = function (codec) {
                var line = '';
                var pt = codec.payloadType;
                if (codec.preferredPayloadType !== undefined) {
                    pt = codec.preferredPayloadType;
                }
                if (codec.parameters && Object.keys(codec.parameters).length) {
                    var params = [];
                    Object.keys(codec.parameters).forEach(function (param) {
                        if (codec.parameters[param]) {
                            params.push(param + '=' + codec.parameters[param]);
                        } else {
                            params.push(param);
                        }
                    });
                    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
                }
                return line;
            };

            // Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
            // a=rtcp-fb:98 nack rpsi
            SDPUtils.parseRtcpFb = function (line) {
                var parts = line.substr(line.indexOf(' ') + 1).split(' ');
                return {
                    type: parts.shift(),
                    parameter: parts.join(' ')
                };
            };
            // Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
            SDPUtils.writeRtcpFb = function (codec) {
                var lines = '';
                var pt = codec.payloadType;
                if (codec.preferredPayloadType !== undefined) {
                    pt = codec.preferredPayloadType;
                }
                if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
                    // FIXME: special handling for trr-int?
                    codec.rtcpFeedback.forEach(function (fb) {
                        lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
                            (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
                            '\r\n';
                    });
                }
                return lines;
            };

            // Parses an RFC 5576 ssrc media attribute. Sample input:
            // a=ssrc:3735928559 cname:something
            SDPUtils.parseSsrcMedia = function (line) {
                var sp = line.indexOf(' ');
                var parts = {
                    ssrc: parseInt(line.substr(7, sp - 7), 10)
                };
                var colon = line.indexOf(':', sp);
                if (colon > -1) {
                    parts.attribute = line.substr(sp + 1, colon - sp - 1);
                    parts.value = line.substr(colon + 1);
                } else {
                    parts.attribute = line.substr(sp + 1);
                }
                return parts;
            };

            SDPUtils.parseSsrcGroup = function (line) {
                var parts = line.substr(13).split(' ');
                return {
                    semantics: parts.shift(),
                    ssrcs: parts.map(function (ssrc) {
                        return parseInt(ssrc, 10);
                    })
                };
            };

            // Extracts the MID (RFC 5888) from a media section.
            // returns the MID or undefined if no mid line was found.
            SDPUtils.getMid = function (mediaSection) {
                var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
                if (mid) {
                    return mid.substr(6);
                }
            };

            SDPUtils.parseFingerprint = function (line) {
                var parts = line.substr(14).split(' ');
                return {
                    algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
                    value: parts[1]
                };
            };

            // Extracts DTLS parameters from SDP media section or sessionpart.
            // FIXME: for consistency with other functions this should only
            //   get the fingerprint line as input. See also getIceParameters.
            SDPUtils.getDtlsParameters = function (mediaSection, sessionpart) {
                var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
                    'a=fingerprint:');
                // Note: a=setup line is ignored since we use the 'auto' role.
                // Note2: 'algorithm' is not case sensitive except in Edge.
                return {
                    role: 'auto',
                    fingerprints: lines.map(SDPUtils.parseFingerprint)
                };
            };

            // Serializes DTLS parameters to SDP.
            SDPUtils.writeDtlsParameters = function (params, setupType) {
                var sdp = 'a=setup:' + setupType + '\r\n';
                params.fingerprints.forEach(function (fp) {
                    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
                });
                return sdp;
            };

            // Parses a=crypto lines into
            //   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members
            SDPUtils.parseCryptoLine = function (line) {
                var parts = line.substr(9).split(' ');
                return {
                    tag: parseInt(parts[0], 10),
                    cryptoSuite: parts[1],
                    keyParams: parts[2],
                    sessionParams: parts.slice(3),
                };
            };

            SDPUtils.writeCryptoLine = function (parameters) {
                return 'a=crypto:' + parameters.tag + ' ' +
                    parameters.cryptoSuite + ' ' +
                    (typeof parameters.keyParams === 'object'
                        ? SDPUtils.writeCryptoKeyParams(parameters.keyParams)
                        : parameters.keyParams) +
                    (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') +
                    '\r\n';
            };

            // Parses the crypto key parameters into
            //   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*
            SDPUtils.parseCryptoKeyParams = function (keyParams) {
                if (keyParams.indexOf('inline:') !== 0) {
                    return null;
                }
                var parts = keyParams.substr(7).split('|');
                return {
                    keyMethod: 'inline',
                    keySalt: parts[0],
                    lifeTime: parts[1],
                    mkiValue: parts[2] ? parts[2].split(':')[0] : undefined,
                    mkiLength: parts[2] ? parts[2].split(':')[1] : undefined,
                };
            };

            SDPUtils.writeCryptoKeyParams = function (keyParams) {
                return keyParams.keyMethod + ':'
                    + keyParams.keySalt +
                    (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') +
                    (keyParams.mkiValue && keyParams.mkiLength
                        ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength
                        : '');
            };

            // Extracts all SDES paramters.
            SDPUtils.getCryptoParameters = function (mediaSection, sessionpart) {
                var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
                    'a=crypto:');
                return lines.map(SDPUtils.parseCryptoLine);
            };

            // Parses ICE information from SDP media section or sessionpart.
            // FIXME: for consistency with other functions this should only
            //   get the ice-ufrag and ice-pwd lines as input.
            SDPUtils.getIceParameters = function (mediaSection, sessionpart) {
                var ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart,
                    'a=ice-ufrag:')[0];
                var pwd = SDPUtils.matchPrefix(mediaSection + sessionpart,
                    'a=ice-pwd:')[0];
                if (!(ufrag && pwd)) {
                    return null;
                }
                return {
                    usernameFragment: ufrag.substr(12),
                    password: pwd.substr(10),
                };
            };

            // Serializes ICE parameters to SDP.
            SDPUtils.writeIceParameters = function (params) {
                return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
                    'a=ice-pwd:' + params.password + '\r\n';
            };

            // Parses the SDP media section and returns RTCRtpParameters.
            SDPUtils.parseRtpParameters = function (mediaSection) {
                var description = {
                    codecs: [],
                    headerExtensions: [],
                    fecMechanisms: [],
                    rtcp: []
                };
                var lines = SDPUtils.splitLines(mediaSection);
                var mline = lines[0].split(' ');
                for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
                    var pt = mline[i];
                    var rtpmapline = SDPUtils.matchPrefix(
                        mediaSection, 'a=rtpmap:' + pt + ' ')[0];
                    if (rtpmapline) {
                        var codec = SDPUtils.parseRtpMap(rtpmapline);
                        var fmtps = SDPUtils.matchPrefix(
                            mediaSection, 'a=fmtp:' + pt + ' ');
                        // Only the first a=fmtp:<pt> is considered.
                        codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
                        codec.rtcpFeedback = SDPUtils.matchPrefix(
                            mediaSection, 'a=rtcp-fb:' + pt + ' ')
                            .map(SDPUtils.parseRtcpFb);
                        description.codecs.push(codec);
                        // parse FEC mechanisms from rtpmap lines.
                        switch (codec.name.toUpperCase()) {
                            case 'RED':
                            case 'ULPFEC':
                                description.fecMechanisms.push(codec.name.toUpperCase());
                                break;
                            default: // only RED and ULPFEC are recognized as FEC mechanisms.
                                break;
                        }
                    }
                }
                SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function (line) {
                    description.headerExtensions.push(SDPUtils.parseExtmap(line));
                });
                // FIXME: parse rtcp.
                return description;
            };

            // Generates parts of the SDP media section describing the capabilities /
            // parameters.
            SDPUtils.writeRtpDescription = function (kind, caps) {
                var sdp = '';

                // Build the mline.
                sdp += 'm=' + kind + ' ';
                sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
                sdp += ' UDP/TLS/RTP/SAVPF ';
                sdp += caps.codecs.map(function (codec) {
                    if (codec.preferredPayloadType !== undefined) {
                        return codec.preferredPayloadType;
                    }
                    return codec.payloadType;
                }).join(' ') + '\r\n';

                sdp += 'c=IN IP4 0.0.0.0\r\n';
                sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

                // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
                caps.codecs.forEach(function (codec) {
                    sdp += SDPUtils.writeRtpMap(codec);
                    sdp += SDPUtils.writeFmtp(codec);
                    sdp += SDPUtils.writeRtcpFb(codec);
                });
                var maxptime = 0;
                caps.codecs.forEach(function (codec) {
                    if (codec.maxptime > maxptime) {
                        maxptime = codec.maxptime;
                    }
                });
                if (maxptime > 0) {
                    sdp += 'a=maxptime:' + maxptime + '\r\n';
                }
                sdp += 'a=rtcp-mux\r\n';

                if (caps.headerExtensions) {
                    caps.headerExtensions.forEach(function (extension) {
                        sdp += SDPUtils.writeExtmap(extension);
                    });
                }
                // FIXME: write fecMechanisms.
                return sdp;
            };

            // Parses the SDP media section and returns an array of
            // RTCRtpEncodingParameters.
            SDPUtils.parseRtpEncodingParameters = function (mediaSection) {
                var encodingParameters = [];
                var description = SDPUtils.parseRtpParameters(mediaSection);
                var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
                var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

                // filter a=ssrc:... cname:, ignore PlanB-msid
                var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
                    .map(function (line) {
                        return SDPUtils.parseSsrcMedia(line);
                    })
                    .filter(function (parts) {
                        return parts.attribute === 'cname';
                    });
                var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
                var secondarySsrc;

                var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
                    .map(function (line) {
                        var parts = line.substr(17).split(' ');
                        return parts.map(function (part) {
                            return parseInt(part, 10);
                        });
                    });
                if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
                    secondarySsrc = flows[0][1];
                }

                description.codecs.forEach(function (codec) {
                    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
                        var encParam = {
                            ssrc: primarySsrc,
                            codecPayloadType: parseInt(codec.parameters.apt, 10)
                        };
                        if (primarySsrc && secondarySsrc) {
                            encParam.rtx = { ssrc: secondarySsrc };
                        }
                        encodingParameters.push(encParam);
                        if (hasRed) {
                            encParam = JSON.parse(JSON.stringify(encParam));
                            encParam.fec = {
                                ssrc: primarySsrc,
                                mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
                            };
                            encodingParameters.push(encParam);
                        }
                    }
                });
                if (encodingParameters.length === 0 && primarySsrc) {
                    encodingParameters.push({
                        ssrc: primarySsrc
                    });
                }

                // we support both b=AS and b=TIAS but interpret AS as TIAS.
                var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
                if (bandwidth.length) {
                    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
                        bandwidth = parseInt(bandwidth[0].substr(7), 10);
                    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
                        // use formula from JSEP to convert b=AS to TIAS value.
                        bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95
                            - (50 * 40 * 8);
                    } else {
                        bandwidth = undefined;
                    }
                    encodingParameters.forEach(function (params) {
                        params.maxBitrate = bandwidth;
                    });
                }
                return encodingParameters;
            };

            // parses http://draft.ortc.org/#rtcrtcpparameters*
            SDPUtils.parseRtcpParameters = function (mediaSection) {
                var rtcpParameters = {};

                // Gets the first SSRC. Note tha with RTX there might be multiple
                // SSRCs.
                var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
                    .map(function (line) {
                        return SDPUtils.parseSsrcMedia(line);
                    })
                    .filter(function (obj) {
                        return obj.attribute === 'cname';
                    })[0];
                if (remoteSsrc) {
                    rtcpParameters.cname = remoteSsrc.value;
                    rtcpParameters.ssrc = remoteSsrc.ssrc;
                }

                // Edge uses the compound attribute instead of reducedSize
                // compound is !reducedSize
                var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
                rtcpParameters.reducedSize = rsize.length > 0;
                rtcpParameters.compound = rsize.length === 0;

                // parses the rtcp-mux attrіbute.
                // Note that Edge does not support unmuxed RTCP.
                var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
                rtcpParameters.mux = mux.length > 0;

                return rtcpParameters;
            };

            // parses either a=msid: or a=ssrc:... msid lines and returns
            // the id of the MediaStream and MediaStreamTrack.
            SDPUtils.parseMsid = function (mediaSection) {
                var parts;
                var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
                if (spec.length === 1) {
                    parts = spec[0].substr(7).split(' ');
                    return { stream: parts[0], track: parts[1] };
                }
                var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
                    .map(function (line) {
                        return SDPUtils.parseSsrcMedia(line);
                    })
                    .filter(function (msidParts) {
                        return msidParts.attribute === 'msid';
                    });
                if (planB.length > 0) {
                    parts = planB[0].value.split(' ');
                    return { stream: parts[0], track: parts[1] };
                }
            };

            // SCTP
            // parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
            // to draft-ietf-mmusic-sctp-sdp-05
            SDPUtils.parseSctpDescription = function (mediaSection) {
                var mline = SDPUtils.parseMLine(mediaSection);
                var maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:');
                var maxMessageSize;
                if (maxSizeLine.length > 0) {
                    maxMessageSize = parseInt(maxSizeLine[0].substr(19), 10);
                }
                if (isNaN(maxMessageSize)) {
                    maxMessageSize = 65536;
                }
                var sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:');
                if (sctpPort.length > 0) {
                    return {
                        port: parseInt(sctpPort[0].substr(12), 10),
                        protocol: mline.fmt,
                        maxMessageSize: maxMessageSize
                    };
                }
                var sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:');
                if (sctpMapLines.length > 0) {
                    var parts = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:')[0]
                        .substr(10)
                        .split(' ');
                    return {
                        port: parseInt(parts[0], 10),
                        protocol: parts[1],
                        maxMessageSize: maxMessageSize
                    };
                }
            };

            // SCTP
            // outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
            // support by now receiving in this format, unless we originally parsed
            // as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
            // protocol of DTLS/SCTP -- without UDP/ or TCP/)
            SDPUtils.writeSctpDescription = function (media, sctp) {
                var output = [];
                if (media.protocol !== 'DTLS/SCTP') {
                    output = [
                        'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n',
                        'c=IN IP4 0.0.0.0\r\n',
                        'a=sctp-port:' + sctp.port + '\r\n'
                    ];
                } else {
                    output = [
                        'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n',
                        'c=IN IP4 0.0.0.0\r\n',
                        'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n'
                    ];
                }
                if (sctp.maxMessageSize !== undefined) {
                    output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
                }
                return output.join('');
            };

            // Generate a session ID for SDP.
            // https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
            // recommends using a cryptographically random +ve 64-bit value
            // but right now this should be acceptable and within the right range
            SDPUtils.generateSessionId = function () {
                return Math.random().toString().substr(2, 21);
            };

            // Write boilder plate for start of SDP
            // sessId argument is optional - if not supplied it will
            // be generated randomly
            // sessVersion is optional and defaults to 2
            // sessUser is optional and defaults to 'thisisadapterortc'
            SDPUtils.writeSessionBoilerplate = function (sessId, sessVer, sessUser) {
                var sessionId;
                var version = sessVer !== undefined ? sessVer : 2;
                if (sessId) {
                    sessionId = sessId;
                } else {
                    sessionId = SDPUtils.generateSessionId();
                }
                var user = sessUser || 'thisisadapterortc';
                // FIXME: sess-id should be an NTP timestamp.
                return 'v=0\r\n' +
                    'o=' + user + ' ' + sessionId + ' ' + version +
                    ' IN IP4 127.0.0.1\r\n' +
                    's=-\r\n' +
                    't=0 0\r\n';
            };

            SDPUtils.writeMediaSection = function (transceiver, caps, type, stream) {
                var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

                // Map ICE parameters (ufrag, pwd) to SDP.
                sdp += SDPUtils.writeIceParameters(
                    transceiver.iceGatherer.getLocalParameters());

                // Map DTLS parameters to SDP.
                sdp += SDPUtils.writeDtlsParameters(
                    transceiver.dtlsTransport.getLocalParameters(),
                    type === 'offer' ? 'actpass' : 'active');

                sdp += 'a=mid:' + transceiver.mid + '\r\n';

                if (transceiver.direction) {
                    sdp += 'a=' + transceiver.direction + '\r\n';
                } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
                    sdp += 'a=sendrecv\r\n';
                } else if (transceiver.rtpSender) {
                    sdp += 'a=sendonly\r\n';
                } else if (transceiver.rtpReceiver) {
                    sdp += 'a=recvonly\r\n';
                } else {
                    sdp += 'a=inactive\r\n';
                }

                if (transceiver.rtpSender) {
                    // spec.
                    var msid = 'msid:' + stream.id + ' ' +
                        transceiver.rtpSender.track.id + '\r\n';
                    sdp += 'a=' + msid;

                    // for Chrome.
                    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
                        ' ' + msid;
                    if (transceiver.sendEncodingParameters[0].rtx) {
                        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
                            ' ' + msid;
                        sdp += 'a=ssrc-group:FID ' +
                            transceiver.sendEncodingParameters[0].ssrc + ' ' +
                            transceiver.sendEncodingParameters[0].rtx.ssrc +
                            '\r\n';
                    }
                }
                // FIXME: this should be written by writeRtpDescription.
                sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
                    ' cname:' + SDPUtils.localCName + '\r\n';
                if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
                    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
                        ' cname:' + SDPUtils.localCName + '\r\n';
                }
                return sdp;
            };

            // Gets the direction from the mediaSection or the sessionpart.
            SDPUtils.getDirection = function (mediaSection, sessionpart) {
                // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
                var lines = SDPUtils.splitLines(mediaSection);
                for (var i = 0; i < lines.length; i++) {
                    switch (lines[i]) {
                        case 'a=sendrecv':
                        case 'a=sendonly':
                        case 'a=recvonly':
                        case 'a=inactive':
                            return lines[i].substr(2);
                        default:
                        // FIXME: What should happen here?
                    }
                }
                if (sessionpart) {
                    return SDPUtils.getDirection(sessionpart);
                }
                return 'sendrecv';
            };

            SDPUtils.getKind = function (mediaSection) {
                var lines = SDPUtils.splitLines(mediaSection);
                var mline = lines[0].split(' ');
                return mline[0].substr(2);
            };

            SDPUtils.isRejected = function (mediaSection) {
                return mediaSection.split(' ', 2)[1] === '0';
            };

            SDPUtils.parseMLine = function (mediaSection) {
                var lines = SDPUtils.splitLines(mediaSection);
                var parts = lines[0].substr(2).split(' ');
                return {
                    kind: parts[0],
                    port: parseInt(parts[1], 10),
                    protocol: parts[2],
                    fmt: parts.slice(3).join(' ')
                };
            };

            SDPUtils.parseOLine = function (mediaSection) {
                var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
                var parts = line.substr(2).split(' ');
                return {
                    username: parts[0],
                    sessionId: parts[1],
                    sessionVersion: parseInt(parts[2], 10),
                    netType: parts[3],
                    addressType: parts[4],
                    address: parts[5]
                };
            };

            // a very naive interpretation of a valid SDP.
            SDPUtils.isValidSDP = function (blob) {
                if (typeof blob !== 'string' || blob.length === 0) {
                    return false;
                }
                var lines = SDPUtils.splitLines(blob);
                for (var i = 0; i < lines.length; i++) {
                    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
                        return false;
                    }
                    // TODO: check the modifier a bit more.
                }
                return true;
            };

            // Expose public methods.
            if (typeof module === 'object') {
                module.exports = SDPUtils;
            }

        }, {}]
    }, {}, [1])(1)
});



!function (t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e(e.toString()).default : "object" == typeof exports ? exports.Quagga = e(e.toString()).default : t.Quagga = e(e.toString()).default }(this, function (t) { return function (t) { function e(r) { if (n[r]) return n[r].exports; var o = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports } var n = {}; return e.m = t, e.c = n, e.i = function (t) { return t }, e.d = function (t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r }) }, e.n = function (t) { var n = t && t.__esModule ? function () { return t.default } : function () { return t }; return e.d(n, "a", n), n }, e.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "/", e(e.s = 166) }([function (t, e) { function n(t) { var e = typeof t; return null != t && ("object" == e || "function" == e) } t.exports = n }, function (t, e, n) { "use strict"; function r(t, e) { return this._row = [], this.config = t || {}, this.supplements = e, this } var o = n(3); r.prototype._nextUnset = function (t, e) { var n; for (void 0 === e && (e = 0), n = e; n < t.length; n++)if (!t[n]) return n; return t.length }, r.prototype._matchPattern = function (t, e, n) { var r, o, i, a, u = 0, c = 0, s = 0, f = 0; for (n = n || this.SINGLE_CODE_ERROR || 1, r = 0; r < t.length; r++)s += t[r], f += e[r]; if (s < f) return Number.MAX_VALUE; for (o = s / f, n *= o, r = 0; r < t.length; r++) { if (i = t[r], a = e[r] * o, (c = Math.abs(i - a) / a) > n) return Number.MAX_VALUE; u += c } return u / f }, r.prototype._nextSet = function (t, e) { var n; for (e = e || 0, n = e; n < t.length; n++)if (t[n]) return n; return t.length }, r.prototype._correctBars = function (t, e, n) { for (var r = n.length, o = 0; r--;)(o = t[n[r]] * (1 - (1 - e) / 2)) > 1 && (t[n[r]] = o) }, r.prototype._matchTrace = function (t, e) { var n, r, o = [], i = this, a = i._nextSet(i._row), u = !i._row[a], c = 0, s = { error: Number.MAX_VALUE, code: -1, start: 0 }; if (t) { for (n = 0; n < t.length; n++)o.push(0); for (n = a; n < i._row.length; n++)if (i._row[n] ^ u) o[c]++; else { if (c === o.length - 1) return r = i._matchPattern(o, t), r < e ? (s.start = n - a, s.end = n, s.counter = o, s) : null; c++, o[c] = 1, u = !u } } else for (o.push(0), n = a; n < i._row.length; n++)i._row[n] ^ u ? o[c]++ : (c++, o.push(0), o[c] = 1, u = !u); return s.start = a, s.end = i._row.length - 1, s.counter = o, s }, r.prototype.decodePattern = function (t) { var e, n = this; return n._row = t, e = n._decode(), null === e ? (n._row.reverse(), (e = n._decode()) && (e.direction = r.DIRECTION.REVERSE, e.start = n._row.length - e.start, e.end = n._row.length - e.end)) : e.direction = r.DIRECTION.FORWARD, e && (e.format = n.FORMAT), e }, r.prototype._matchRange = function (t, e, n) { var r; for (t = t < 0 ? 0 : t, r = t; r < e; r++)if (this._row[r] !== n) return !1; return !0 }, r.prototype._fillCounters = function (t, e, n) { var r, o = this, i = 0, a = []; for (n = void 0 === n || n, t = void 0 !== t ? t : o._nextUnset(o._row), e = e || o._row.length, a[i] = 0, r = t; r < e; r++)o._row[r] ^ n ? a[i]++ : (i++, a[i] = 1, n = !n); return a }, r.prototype._toCounters = function (t, e) { var n, r = this, i = e.length, a = r._row.length, u = !r._row[t], c = 0; for (o.a.init(e, 0), n = t; n < a; n++)if (r._row[n] ^ u) e[c]++; else { if (++c === i) break; e[c] = 1, u = !u } return e }, Object.defineProperty(r.prototype, "FORMAT", { value: "unknown", writeable: !1 }), r.DIRECTION = { FORWARD: 1, REVERSE: -1 }, r.Exception = { StartNotFoundException: "Start-Info was not found!", CodeNotFoundException: "Code could not be found!", PatternNotFoundException: "Pattern could not be found!" }, r.CONFIG_KEYS = {}, e.a = r }, function (t, e) { var n = Array.isArray; t.exports = n }, function (t, e, n) { "use strict"; e.a = { init: function (t, e) { for (var n = t.length; n--;)t[n] = e }, shuffle: function (t) { var e, n, r = t.length - 1; for (r; r >= 0; r--)e = Math.floor(Math.random() * r), n = t[r], t[r] = t[e], t[e] = n; return t }, toPointList: function (t) { var e, n, r = [], o = []; for (e = 0; e < t.length; e++) { for (r = [], n = 0; n < t[e].length; n++)r[n] = t[e][n]; o[e] = "[" + r.join(",") + "]" } return "[" + o.join(",\r\n") + "]" }, threshold: function (t, e, n) { var r, o = []; for (r = 0; r < t.length; r++)n.apply(t, [t[r]]) >= e && o.push(t[r]); return o }, maxIndex: function (t) { var e, n = 0; for (e = 0; e < t.length; e++)t[e] > t[n] && (n = e); return n }, max: function t(e) { var n, t = 0; for (n = 0; n < e.length; n++)e[n] > t && (t = e[n]); return t }, sum: function t(e) { for (var n = e.length, t = 0; n--;)t += e[n]; return t } } }, function (t, e, n) { "use strict"; function r(t, e) { t = a()(o(), t), u.a.call(this, t, e) } function o() { var t = {}; return Object.keys(r.CONFIG_KEYS).forEach(function (e) { t[e] = r.CONFIG_KEYS[e].default }), t } var i = n(28), a = n.n(i), u = n(1), c = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, s = { CODE_L_START: { value: 0 }, CODE_G_START: { value: 10 }, START_PATTERN: { value: [1, 1, 1] }, STOP_PATTERN: { value: [1, 1, 1] }, MIDDLE_PATTERN: { value: [1, 1, 1, 1, 1] }, EXTENSION_START_PATTERN: { value: [1, 1, 2] }, CODE_PATTERN: { value: [[3, 2, 1, 1], [2, 2, 2, 1], [2, 1, 2, 2], [1, 4, 1, 1], [1, 1, 3, 2], [1, 2, 3, 1], [1, 1, 1, 4], [1, 3, 1, 2], [1, 2, 1, 3], [3, 1, 1, 2], [1, 1, 2, 3], [1, 2, 2, 2], [2, 2, 1, 2], [1, 1, 4, 1], [2, 3, 1, 1], [1, 3, 2, 1], [4, 1, 1, 1], [2, 1, 3, 1], [3, 1, 2, 1], [2, 1, 1, 3]] }, CODE_FREQUENCY: { value: [0, 11, 13, 14, 19, 25, 28, 21, 22, 26] }, SINGLE_CODE_ERROR: { value: .7 }, AVG_CODE_ERROR: { value: .48 }, FORMAT: { value: "ean_13", writeable: !1 } }; r.prototype = Object.create(u.a.prototype, s), r.prototype.constructor = r, r.prototype._decodeCode = function (t, e) { var n, r, o, i = [0, 0, 0, 0], a = this, u = t, c = !a._row[u], s = 0, f = { error: Number.MAX_VALUE, code: -1, start: t, end: t }; for (e || (e = a.CODE_PATTERN.length), n = u; n < a._row.length; n++)if (a._row[n] ^ c) i[s]++; else { if (s === i.length - 1) { for (r = 0; r < e; r++)(o = a._matchPattern(i, a.CODE_PATTERN[r])) < f.error && (f.code = r, f.error = o); return f.end = n, f.error > a.AVG_CODE_ERROR ? null : f } s++, i[s] = 1, c = !c } return null }, r.prototype._findPattern = function (t, e, n, r, o) { var i, a, u, c, s = [], f = this, l = 0, d = { error: Number.MAX_VALUE, code: -1, start: 0, end: 0 }; for (e || (e = f._nextSet(f._row)), void 0 === n && (n = !1), void 0 === r && (r = !0), void 0 === o && (o = f.AVG_CODE_ERROR), i = 0; i < t.length; i++)s[i] = 0; for (i = e; i < f._row.length; i++)if (f._row[i] ^ n) s[l]++; else { if (l === s.length - 1) { for (c = 0, u = 0; u < s.length; u++)c += s[u]; if ((a = f._matchPattern(s, t)) < o) return d.error = a, d.start = i - c, d.end = i, d; if (!r) return null; for (u = 0; u < s.length - 2; u++)s[u] = s[u + 2]; s[s.length - 2] = 0, s[s.length - 1] = 0, l-- } else l++; s[l] = 1, n = !n } return null }, r.prototype._findStart = function () { for (var t, e, n = this, r = n._nextSet(n._row); !e;) { if (!(e = n._findPattern(n.START_PATTERN, r))) return null; if ((t = e.start - (e.end - e.start)) >= 0 && n._matchRange(t, e.start, 0)) return e; r = e.end, e = null } }, r.prototype._verifyTrailingWhitespace = function (t) { var e, n = this; return e = t.end + (t.end - t.start), e < n._row.length && n._matchRange(t.end, e, 0) ? t : null }, r.prototype._findEnd = function (t, e) { var n = this, r = n._findPattern(n.STOP_PATTERN, t, e, !1); return null !== r ? n._verifyTrailingWhitespace(r) : null }, r.prototype._calculateFirstDigit = function (t) { var e, n = this; for (e = 0; e < n.CODE_FREQUENCY.length; e++)if (t === n.CODE_FREQUENCY[e]) return e; return null }, r.prototype._decodePayload = function (t, e, n) { var r, o, i = this, a = 0; for (r = 0; r < 6; r++) { if (!(t = i._decodeCode(t.end))) return null; t.code >= i.CODE_G_START ? (t.code = t.code - i.CODE_G_START, a |= 1 << 5 - r) : a |= 0 << 5 - r, e.push(t.code), n.push(t) } if (null === (o = i._calculateFirstDigit(a))) return null; if (e.unshift(o), null === (t = i._findPattern(i.MIDDLE_PATTERN, t.end, !0, !1))) return null; for (n.push(t), r = 0; r < 6; r++) { if (!(t = i._decodeCode(t.end, i.CODE_G_START))) return null; n.push(t), e.push(t.code) } return t }, r.prototype._decode = function () { var t, e, n = this, r = [], o = [], i = {}; if (!(t = n._findStart())) return null; if (e = { code: t.code, start: t.start, end: t.end }, o.push(e), !(e = n._decodePayload(e, r, o))) return null; if (!(e = n._findEnd(e.end, !1))) return null; if (o.push(e), !n._checksum(r)) return null; if (this.supplements.length > 0) { var a = this._decodeExtensions(e.end); if (!a) return null; var u = a.decodedCodes[a.decodedCodes.length - 1], s = { start: u.start + ((u.end - u.start) / 2 | 0), end: u.end }; if (!n._verifyTrailingWhitespace(s)) return null; i = { supplement: a, code: r.join("") + a.code } } return c({ code: r.join(""), start: t.start, end: e.end, codeset: "", startInfo: t, decodedCodes: o }, i) }, r.prototype._decodeExtensions = function (t) { var e, n, r = this._nextSet(this._row, t), o = this._findPattern(this.EXTENSION_START_PATTERN, r, !1, !1); if (null === o) return null; for (e = 0; e < this.supplements.length; e++)if (null !== (n = this.supplements[e].decode(this._row, o.end))) return { code: n.code, start: r, startInfo: o, end: n.end, codeset: "", decodedCodes: n.decodedCodes }; return null }, r.prototype._checksum = function (t) { var e, n = 0; for (e = t.length - 2; e >= 0; e -= 2)n += t[e]; for (n *= 3, e = t.length - 1; e >= 0; e -= 2)n += t[e]; return n % 10 == 0 }, r.CONFIG_KEYS = { supplements: { type: "arrayOf(string)", default: [], description: "Allowed extensions to be decoded (2 and/or 5)" } }, e.a = r }, function (t, e, n) { var r = n(38), o = "object" == typeof self && self && self.Object === Object && self, i = r || o || Function("return this")(); t.exports = i }, function (t, e) { function n(t) { return null != t && "object" == typeof t } t.exports = n }, function (t, e) { function n(t) { var e = new Float32Array(2); return e[0] = t[0], e[1] = t[1], e } t.exports = n }, function (t, e, n) { function r(t) { return null == t ? void 0 === t ? c : u : s && s in Object(t) ? i(t) : a(t) } var o = n(11), i = n(119), a = n(146), u = "[object Null]", c = "[object Undefined]", s = o ? o.toStringTag : void 0; t.exports = r }, function (t, e, n) { "use strict"; e.a = { drawRect: function (t, e, n, r) { n.strokeStyle = r.color, n.fillStyle = r.color, n.lineWidth = 1, n.beginPath(), n.strokeRect(t.x, t.y, e.x, e.y) }, drawPath: function (t, e, n, r) { n.strokeStyle = r.color, n.fillStyle = r.color, n.lineWidth = r.lineWidth, n.beginPath(), n.moveTo(t[0][e.x], t[0][e.y]); for (var o = 1; o < t.length; o++)n.lineTo(t[o][e.x], t[o][e.y]); n.closePath(), n.stroke() }, drawImage: function (t, e, n) { var r, o = n.getImageData(0, 0, e.x, e.y), i = o.data, a = t.length, u = i.length; if (u / a != 4) return !1; for (; a--;)r = t[a], i[--u] = 255, i[--u] = r, i[--u] = r, i[--u] = r; return n.putImageData(o, 0, 0), !0 } } }, function (t, e, n) { function r(t) { var e = -1, n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var r = t[e]; this.set(r[0], r[1]) } } var o = n(133), i = n(134), a = n(135), u = n(136), c = n(137); r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r }, function (t, e, n) { var r = n(5), o = r.Symbol; t.exports = o }, function (t, e, n) { function r(t, e) { for (var n = t.length; n--;)if (o(t[n][0], e)) return n; return -1 } var o = n(17); t.exports = r }, function (t, e, n) { function r(t, e) { return o(t) ? t : i(t, e) ? [t] : a(u(t)) } var o = n(2), i = n(130), a = n(154), u = n(165); t.exports = r }, function (t, e, n) { function r(t, e) { var n = t.__data__; return o(e) ? n["string" == typeof e ? "string" : "hash"] : n.map } var o = n(131); t.exports = r }, function (t, e) { function n(t, e) { return !!(e = null == e ? r : e) && ("number" == typeof t || o.test(t)) && t > -1 && t % 1 == 0 && t < e } var r = 9007199254740991, o = /^(?:0|[1-9]\d*)$/; t.exports = n }, function (t, e, n) { var r = n(22), o = r(Object, "create"); t.exports = o }, function (t, e) { function n(t, e) { return t === e || t !== t && e !== e } t.exports = n }, function (t, e, n) { var r = n(96), o = n(6), i = Object.prototype, a = i.hasOwnProperty, u = i.propertyIsEnumerable, c = r(function () { return arguments }()) ? r : function (t) { return o(t) && a.call(t, "callee") && !u.call(t, "callee") }; t.exports = c }, function (t, e, n) { "use strict"; function r(t, e) { return { x: t, y: e, toVec2: function () { return b.clone([this.x, this.y]) }, toVec3: function () { return E.clone([this.x, this.y, 1]) }, round: function () { return this.x = this.x > 0 ? Math.floor(this.x + .5) : Math.floor(this.x - .5), this.y = this.y > 0 ? Math.floor(this.y + .5) : Math.floor(this.y - .5), this } } } function o(t, e, n) { n || (n = t); for (var r = t.data, o = r.length, i = n.data; o--;)i[o] = r[o] < e ? 1 : 0 } function i(t, e) { e || (e = 8); for (var n = t.data, r = n.length, o = 8 - e, i = 1 << e, a = new Int32Array(i); r--;)a[n[r] >> o]++; return a } function a(t, e) { function n(t, e) { var n, r = 0; for (n = t; n <= e; n++)r += a[n]; return r } function r(t, e) { var n, r = 0; for (n = t; n <= e; n++)r += n * a[n]; return r } function o() { var o, u, c, s, f, l, d, h = [0], p = (1 << e) - 1; for (a = i(t, e), s = 1; s < p; s++)o = n(0, s), u = n(s + 1, p), c = o * u, 0 === c && (c = 1), f = r(0, s) * u, l = r(s + 1, p) * o, d = f - l, h[s] = d * d / c; return x.a.maxIndex(h) } e || (e = 8); var a, u = 8 - e; return o() << u } function u(t, e) { var n = a(t); return o(t, n, e), n } function c(t, e, n) { function r(t) { var e = !1; for (i = 0; i < c.length; i++)a = c[i], a.fits(t) && (a.add(t), e = !0); return e } var o, i, a, u, c = []; for (n || (n = "rad"), o = 0; o < t.length; o++)u = m.a.createPoint(t[o], o, n), r(u) || c.push(m.a.create(u, e)); return c } function s(t, e, n) { var r, o, i, a, u = 0, c = 0, s = []; for (r = 0; r < e; r++)s[r] = { score: 0, item: null }; for (r = 0; r < t.length; r++)if ((o = n.apply(this, [t[r]])) > c) for (i = s[u], i.score = o, i.item = t[r], c = Number.MAX_VALUE, a = 0; a < e; a++)s[a].score < c && (c = s[a].score, u = a); return s } function f(t, e, n) { for (var r, o = 0, i = e.x, a = Math.floor(t.length / 4), u = e.x / 2, c = 0, s = e.x; i < a;) { for (r = 0; r < u; r++)n[c] = (.299 * t[4 * o + 0] + .587 * t[4 * o + 1] + .114 * t[4 * o + 2] + (.299 * t[4 * (o + 1) + 0] + .587 * t[4 * (o + 1) + 1] + .114 * t[4 * (o + 1) + 2]) + (.299 * t[4 * i + 0] + .587 * t[4 * i + 1] + .114 * t[4 * i + 2]) + (.299 * t[4 * (i + 1) + 0] + .587 * t[4 * (i + 1) + 1] + .114 * t[4 * (i + 1) + 2])) / 4, c++, o += 2, i += 2; o += s, i += s } } function l(t, e, n) { var r, o = t.length / 4 | 0; if (n && n.singleChannel === !0) for (r = 0; r < o; r++)e[r] = t[4 * r + 0]; else for (r = 0; r < o; r++)e[r] = .299 * t[4 * r + 0] + .587 * t[4 * r + 1] + .114 * t[4 * r + 2] } function d(t, e) { for (var n = t.data, r = t.size.x, o = e.data, i = 0, a = r, u = n.length, c = r / 2, s = 0; a < u;) { for (var f = 0; f < c; f++)o[s] = Math.floor((n[i] + n[i + 1] + n[a] + n[a + 1]) / 4), s++, i += 2, a += 2; i += r, a += r } } function h(t, e) { var n = t[0], r = t[1], o = t[2], i = o * r, a = i * (1 - Math.abs(n / 60 % 2 - 1)), u = o - i, c = 0, s = 0, f = 0; return e = e || [0, 0, 0], n < 60 ? (c = i, s = a) : n < 120 ? (c = a, s = i) : n < 180 ? (s = i, f = a) : n < 240 ? (s = a, f = i) : n < 300 ? (c = a, f = i) : n < 360 && (c = i, f = a), e[0] = 255 * (c + u) | 0, e[1] = 255 * (s + u) | 0, e[2] = 255 * (f + u) | 0, e } function p(t) { var e, n = [], r = []; for (e = 1; e < Math.sqrt(t) + 1; e++)t % e == 0 && (r.push(e), e !== t / e && n.unshift(Math.floor(t / e))); return r.concat(n) } function v(t, e) { for (var n = 0, r = 0, o = []; n < t.length && r < e.length;)t[n] === e[r] ? (o.push(t[n]), n++, r++) : t[n] > e[r] ? r++ : n++; return o } function _(t, e) { function n(t) { for (var e = 0, n = t[Math.floor(t.length / 2)]; e < t.length - 1 && t[e] < d;)e++; return e > 0 && (n = Math.abs(t[e] - d) > Math.abs(t[e - 1] - d) ? t[e - 1] : t[e]), d / n < c[f + 1] / c[f] && d / n > c[f - 1] / c[f] ? { x: n, y: n } : null } var r, o = p(e.x), i = p(e.y), a = Math.max(e.x, e.y), u = v(o, i), c = [8, 10, 15, 20, 32, 60, 80], s = { "x-small": 5, small: 4, medium: 3, large: 2, "x-large": 1 }, f = s[t] || s.medium, l = c[f], d = Math.floor(a / l); return r = n(u), r || (r = n(p(a))) || (r = n(p(d * l))), r } function g(t) { return { value: parseFloat(t), unit: (t.indexOf("%"), t.length, "%") } } function y(t, e, n) { var r = { width: t, height: e }, o = Object.keys(n).reduce(function (t, e) { var o = n[e], i = g(o), a = C[e](i, r); return t[e] = a, t }, {}); return { sx: o.left, sy: o.top, sw: o.right - o.left, sh: o.bottom - o.top } } var m = n(50), x = n(3); e.b = r, e.f = u, e.g = c, e.h = s, e.c = f, e.d = l, e.i = d, e.a = h, e.e = _, e.j = y; var b = { clone: n(7) }, E = { clone: n(83) }, C = { top: function (t, e) { if ("%" === t.unit) return Math.floor(e.height * (t.value / 100)) }, right: function (t, e) { if ("%" === t.unit) return Math.floor(e.width - e.width * (t.value / 100)) }, bottom: function (t, e) { if ("%" === t.unit) return Math.floor(e.height - e.height * (t.value / 100)) }, left: function (t, e) { if ("%" === t.unit) return Math.floor(e.width * (t.value / 100)) } } }, function (t, e, n) { "use strict"; function r(t, e, n, r) { e ? this.data = e : n ? (this.data = new n(t.x * t.y), n === Array && r && a.a.init(this.data, 0)) : (this.data = new Uint8Array(t.x * t.y), Uint8Array === Array && r && a.a.init(this.data, 0)), this.size = t } var o = n(53), i = n(19), a = n(3), u = { clone: n(7) }; r.prototype.inImageWithBorder = function (t, e) { return t.x >= e && t.y >= e && t.x < this.size.x - e && t.y < this.size.y - e }, r.sample = function (t, e, n) { var r = Math.floor(e), o = Math.floor(n), i = t.size.x, a = o * t.size.x + r, u = t.data[a + 0], c = t.data[a + 1], s = t.data[a + i], f = t.data[a + i + 1], l = u - c; return e -= r, n -= o, Math.floor(e * (n * (l - s + f) - l) + n * (s - u) + u) }, r.clearArray = function (t) { for (var e = t.length; e--;)t[e] = 0 }, r.prototype.subImage = function (t, e) { return new o.a(t, e, this) }, r.prototype.subImageAsCopy = function (t, e) { var n, r, o = t.size.y, i = t.size.x; for (n = 0; n < i; n++)for (r = 0; r < o; r++)t.data[r * i + n] = this.data[(e.y + r) * this.size.x + e.x + n] }, r.prototype.copyTo = function (t) { for (var e = this.data.length, n = this.data, r = t.data; e--;)r[e] = n[e] }, r.prototype.get = function (t, e) { return this.data[e * this.size.x + t] }, r.prototype.getSafe = function (t, e) { var n; if (!this.indexMapping) { for (this.indexMapping = { x: [], y: [] }, n = 0; n < this.size.x; n++)this.indexMapping.x[n] = n, this.indexMapping.x[n + this.size.x] = n; for (n = 0; n < this.size.y; n++)this.indexMapping.y[n] = n, this.indexMapping.y[n + this.size.y] = n } return this.data[this.indexMapping.y[e + this.size.y] * this.size.x + this.indexMapping.x[t + this.size.x]] }, r.prototype.set = function (t, e, n) { return this.data[e * this.size.x + t] = n, this }, r.prototype.zeroBorder = function () { var t, e = this.size.x, n = this.size.y, r = this.data; for (t = 0; t < e; t++)r[t] = r[(n - 1) * e + t] = 0; for (t = 1; t < n - 1; t++)r[t * e] = r[t * e + (e - 1)] = 0 }, r.prototype.invert = function () { for (var t = this.data, e = t.length; e--;)t[e] = t[e] ? 0 : 1 }, r.prototype.convolve = function (t) { var e, n, r, o, i = t.length / 2 | 0, a = 0; for (n = 0; n < this.size.y; n++)for (e = 0; e < this.size.x; e++) { for (a = 0, o = -i; o <= i; o++)for (r = -i; r <= i; r++)a += t[o + i][r + i] * this.getSafe(e + r, n + o); this.data[n * this.size.x + e] = a } }, r.prototype.moments = function (t) { var e, n, r, o, i, a, c, s, f, l, d, h, p = this.data, v = this.size.y, _ = this.size.x, g = [], y = [], m = Math.PI, x = m / 4; if (t <= 0) return y; for (i = 0; i < t; i++)g[i] = { m00: 0, m01: 0, m10: 0, m11: 0, m02: 0, m20: 0, theta: 0, rad: 0 }; for (n = 0; n < v; n++)for (o = n * n, e = 0; e < _; e++)(r = p[n * _ + e]) > 0 && (a = g[r - 1], a.m00 += 1, a.m01 += n, a.m10 += e, a.m11 += e * n, a.m02 += o, a.m20 += e * e); for (i = 0; i < t; i++)a = g[i], isNaN(a.m00) || 0 === a.m00 || (l = a.m10 / a.m00, d = a.m01 / a.m00, c = a.m11 / a.m00 - l * d, s = a.m02 / a.m00 - d * d, f = a.m20 / a.m00 - l * l, h = (s - f) / (2 * c), h = .5 * Math.atan(h) + (c >= 0 ? x : -x) + m, a.theta = (180 * h / m + 90) % 180 - 90, a.theta < 0 && (a.theta += 180), a.rad = h > m ? h - m : h, a.vec = u.clone([Math.cos(h), Math.sin(h)]), y.push(a)); return y }, r.prototype.show = function (t, e) { var n, r, o, i, a, u, c; for (e || (e = 1), n = t.getContext("2d"), t.width = this.size.x, t.height = this.size.y, r = n.getImageData(0, 0, t.width, t.height), o = r.data, i = 0, c = 0; c < this.size.y; c++)for (u = 0; u < this.size.x; u++)a = c * this.size.x + u, i = this.get(u, c) * e, o[4 * a + 0] = i, o[4 * a + 1] = i, o[4 * a + 2] = i, o[4 * a + 3] = 255; n.putImageData(r, 0, 0) }, r.prototype.overlay = function (t, e, r) { (!e || e < 0 || e > 360) && (e = 360); for (var o = [0, 1, 1], a = [0, 0, 0], u = [255, 255, 255], c = [0, 0, 0], s = [], f = t.getContext("2d"), l = f.getImageData(r.x, r.y, this.size.x, this.size.y), d = l.data, h = this.data.length; h--;)o[0] = this.data[h] * e, s = o[0] <= 0 ? u : o[0] >= 360 ? c : n.i(i.a)(o, a), d[4 * h + 0] = s[0], d[4 * h + 1] = s[1], d[4 * h + 2] = s[2], d[4 * h + 3] = 255; f.putImageData(l, r.x, r.y) }, e.a = r }, function (t, e, n) { function r(t, e, n) { "__proto__" == e && o ? o(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : t[e] = n } var o = n(37); t.exports = r }, function (t, e, n) { function r(t, e) { var n = i(t, e); return o(n) ? n : void 0 } var o = n(97), i = n(120); t.exports = r }, function (t, e, n) { function r(t) { if ("string" == typeof t || o(t)) return t; var e = t + ""; return "0" == e && 1 / t == -i ? "-0" : e } var o = n(27), i = 1 / 0; t.exports = r }, function (t, e, n) { function r(t) { return null != t && i(t.length) && !o(t) } var o = n(25), i = n(26); t.exports = r }, function (t, e, n) { function r(t) { if (!i(t)) return !1; var e = o(t); return e == u || e == c || e == a || e == s } var o = n(8), i = n(0), a = "[object AsyncFunction]", u = "[object Function]", c = "[object GeneratorFunction]", s = "[object Proxy]"; t.exports = r }, function (t, e) { function n(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r } var r = 9007199254740991; t.exports = n }, function (t, e, n) { function r(t) { return "symbol" == typeof t || i(t) && o(t) == a } var o = n(8), i = n(6), a = "[object Symbol]"; t.exports = r }, function (t, e, n) { var r = n(100), o = n(116), i = o(function (t, e, n) { r(t, e, n) }); t.exports = i }, function (t, e) { t.exports = function (t) { return t.webpackPolyfill || (t.deprecate = function () { }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function () { return t.l } }), Object.defineProperty(t, "id", { enumerable: !0, get: function () { return t.i } }), t.webpackPolyfill = 1), t } }, function (t, e, n) { "use strict"; var r = { searchDirections: [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]], create: function (t, e) { function n(t, e, n, r) { var o, f, l; for (o = 0; o < 7; o++) { if (f = t.cy + c[t.dir][0], l = t.cx + c[t.dir][1], i = f * s + l, a[i] === e && (0 === u[i] || u[i] === n)) return u[i] = n, t.cy = f, t.cx = l, !0; 0 === u[i] && (u[i] = r), t.dir = (t.dir + 1) % 8 } return !1 } function r(t, e, n) { return { dir: n, x: t, y: e, next: null, prev: null } } function o(t, e, o, i, a) { var u, c, s, f = null, l = { cx: e, cy: t, dir: 0 }; if (n(l, i, o, a)) { f = r(e, t, l.dir), u = f, s = l.dir, c = r(l.cx, l.cy, 0), c.prev = u, u.next = c, c.next = null, u = c; do l.dir = (l.dir + 6) % 8, n(l, i, o, a), s !== l.dir ? (u.dir = l.dir, c = r(l.cx, l.cy, 0), c.prev = u, u.next = c, c.next = null, u = c) : (u.dir = s, u.x = l.cx, u.y = l.cy), s = l.dir; while (l.cx !== e || l.cy !== t); f.prev = u.prev, u.prev.next = f } return f } var i, a = t.data, u = e.data, c = this.searchDirections, s = t.size.x; return { trace: function (t, e, r, o) { return n(t, e, r, o) }, contourTracing: function (t, e, n, r, i) { return o(t, e, n, r, i) } } } }; e.a = r }, function (t, e, n) { "use strict"; function r() { o.a.call(this) } var o = n(1), i = n(3), a = { ALPHABETH_STRING: { value: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%" }, ALPHABET: { value: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 45, 46, 32, 42, 36, 47, 43, 37] }, CHARACTER_ENCODINGS: { value: [52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 148, 168, 162, 138, 42] }, ASTERISK: { value: 148 }, FORMAT: { value: "code_39", writeable: !1 } }; r.prototype = Object.create(o.a.prototype, a), r.prototype.constructor = r, r.prototype._decode = function () { var t, e, n, r, o = this, a = [0, 0, 0, 0, 0, 0, 0, 0, 0], u = [], c = o._findStart(); if (!c) return null; r = o._nextSet(o._row, c.end); do { if (a = o._toCounters(r, a), (n = o._toPattern(a)) < 0) return null; if ((t = o._patternToChar(n)) < 0) return null; u.push(t), e = r, r += i.a.sum(a), r = o._nextSet(o._row, r) } while ("*" !== t); return u.pop(), u.length && o._verifyTrailingWhitespace(e, r, a) ? { code: u.join(""), start: c.start, end: r, startInfo: c, decodedCodes: u } : null }, r.prototype._verifyTrailingWhitespace = function (t, e, n) { var r = i.a.sum(n); return 3 * (e - t - r) >= r }, r.prototype._patternToChar = function (t) { var e, n = this; for (e = 0; e < n.CHARACTER_ENCODINGS.length; e++)if (n.CHARACTER_ENCODINGS[e] === t) return String.fromCharCode(n.ALPHABET[e]); return -1 }, r.prototype._findNextWidth = function (t, e) { var n, r = Number.MAX_VALUE; for (n = 0; n < t.length; n++)t[n] < r && t[n] > e && (r = t[n]); return r }, r.prototype._toPattern = function (t) { for (var e, n, r = t.length, o = 0, i = r, a = 0, u = this; i > 3;) { for (o = u._findNextWidth(t, o), i = 0, e = 0, n = 0; n < r; n++)t[n] > o && (e |= 1 << r - 1 - n, i++, a += t[n]); if (3 === i) { for (n = 0; n < r && i > 0; n++)if (t[n] > o && (i--, 2 * t[n] >= a)) return -1; return e } } return -1 }, r.prototype._findStart = function () { var t, e, n, r = this, o = r._nextSet(r._row), i = o, a = [0, 0, 0, 0, 0, 0, 0, 0, 0], u = 0, c = !1; for (t = o; t < r._row.length; t++)if (r._row[t] ^ c) a[u]++; else { if (u === a.length - 1) { if (r._toPattern(a) === r.ASTERISK && (n = Math.floor(Math.max(0, i - (t - i) / 4)), r._matchRange(n, i, 0))) return { start: i, end: t }; for (i += a[0] + a[1], e = 0; e < 7; e++)a[e] = a[e + 2]; a[7] = 0, a[8] = 0, u-- } else u++; a[u] = 1, c = !c } return null }, e.a = r }, function (t, e) { function n(t, e) { return t[0] * e[0] + t[1] * e[1] } t.exports = n }, function (t, e, n) { var r = n(22), o = n(5), i = r(o, "Map"); t.exports = i }, function (t, e, n) { function r(t) { var e = -1, n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var r = t[e]; this.set(r[0], r[1]) } } var o = n(138), i = n(139), a = n(140), u = n(141), c = n(142); r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r }, function (t, e, n) { function r(t, e, n) { (void 0 === n || i(t[e], n)) && (void 0 !== n || e in t) || o(t, e, n) } var o = n(21), i = n(17); t.exports = r }, function (t, e, n) { function r(t, e, n) { var r = t[e]; u.call(t, e) && i(r, n) && (void 0 !== n || e in t) || o(t, e, n) } var o = n(21), i = n(17), a = Object.prototype, u = a.hasOwnProperty; t.exports = r }, function (t, e, n) { var r = n(22), o = function () { try { var t = r(Object, "defineProperty"); return t({}, "", {}), t } catch (t) { } }(); t.exports = o }, function (t, e, n) { (function (e) { var n = "object" == typeof e && e && e.Object === Object && e; t.exports = n }).call(e, n(47)) }, function (t, e, n) { var r = n(147), o = r(Object.getPrototypeOf, Object); t.exports = o }, function (t, e) { function n(t) { var e = t && t.constructor; return t === ("function" == typeof e && e.prototype || r) } var r = Object.prototype; t.exports = n }, function (t, e, n) { function r(t, e, n) { return e = i(void 0 === e ? t.length - 1 : e, 0), function () { for (var r = arguments, a = -1, u = i(r.length - e, 0), c = Array(u); ++a < u;)c[a] = r[e + a]; a = -1; for (var s = Array(e + 1); ++a < e;)s[a] = r[a]; return s[e] = n(c), o(t, this, s) } } var o = n(87), i = Math.max; t.exports = r }, function (t, e, n) { var r = n(106), o = n(148), i = o(r); t.exports = i }, function (t, e) { function n(t) { return t } t.exports = n }, function (t, e, n) { (function (t) { var r = n(5), o = n(163), i = "object" == typeof e && e && !e.nodeType && e, a = i && "object" == typeof t && t && !t.nodeType && t, u = a && a.exports === i, c = u ? r.Buffer : void 0, s = c ? c.isBuffer : void 0, f = s || o; t.exports = f }).call(e, n(29)(t)) }, function (t, e, n) { var r = n(98), o = n(109), i = n(145), a = i && i.isTypedArray, u = a ? o(a) : r; t.exports = u }, function (t, e, n) { function r(t) { return a(t) ? o(t, !0) : i(t) } var o = n(88), i = n(99), a = n(24); t.exports = r }, function (t, e) { var n; n = function () { return this }(); try { n = n || Function("return this")() || (0, eval)("this") } catch (t) { "object" == typeof window && (n = window) } t.exports = n }, function (e, n, r) { "use strict"; function o(t) { f(t), P = k.a.create($.decoder, S) } function i(t) { var e; if ("VideoStream" === $.inputStream.type) e = document.createElement("video"), R = H.a.createVideoStream(e); else if ("ImageStream" === $.inputStream.type) R = H.a.createImageStream(); else if ("LiveStream" === $.inputStream.type) { var n = a(); n && ((e = n.querySelector("video")) || (e = document.createElement("video"), n.appendChild(e))), R = H.a.createLiveStream(e), F.a.request(e, $.inputStream.constraints).then(function () { R.trigger("canrecord") }).catch(function (e) { return t(e) }) } R.setAttribute("preload", "auto"), R.setInputStream($.inputStream), R.addEventListener("canrecord", u.bind(void 0, t)) } function a() { var t = $.inputStream.target; if (t && t.nodeName && 1 === t.nodeType) return t; var e = "string" == typeof t ? t : "#interactive.viewport"; return document.querySelector(e) } function u(t) { U.a.checkImageConstraints(R, $.locator), s($), w = V.a.create(R, K.dom.image), A($.numOfWorkers, function () { 0 === $.numOfWorkers && o(), c(t) }) } function c(t) { R.play(), t() } function s() { if ("undefined" != typeof document) { var t = a(); if (K.dom.image = document.querySelector("canvas.imgBuffer"), K.dom.image || (K.dom.image = document.createElement("canvas"), K.dom.image.className = "imgBuffer", t && "ImageStream" === $.inputStream.type && t.appendChild(K.dom.image)), K.ctx.image = K.dom.image.getContext("2d"), K.dom.image.width = R.getCanvasSize().x, K.dom.image.height = R.getCanvasSize().y, K.dom.overlay = document.querySelector("canvas.drawingBuffer"), !K.dom.overlay) { K.dom.overlay = document.createElement("canvas"), K.dom.overlay.className = "drawingBuffer", t && t.appendChild(K.dom.overlay); var e = document.createElement("br"); e.setAttribute("clear", "all"), t && t.appendChild(e) } K.ctx.overlay = K.dom.overlay.getContext("2d"), K.dom.overlay.width = R.getCanvasSize().x, K.dom.overlay.height = R.getCanvasSize().y } } function f(t) { S = t ? t : new j.a({ x: R.getWidth(), y: R.getHeight() }), D = [q.clone([0, 0]), q.clone([0, S.size.y]), q.clone([S.size.x, S.size.y]), q.clone([S.size.x, 0])], U.a.init(S, $.locator) } function l() { return $.locate ? U.a.locate() : [[q.clone(D[0]), q.clone(D[1]), q.clone(D[2]), q.clone(D[3])]] } function d(t) { function e(t) { for (var e = t.length; e--;)t[e][0] += i, t[e][1] += a } function n(t) { t[0].x += i, t[0].y += a, t[1].x += i, t[1].y += a } var r, o = R.getTopRight(), i = o.x, a = o.y; if (0 !== i || 0 !== a) { if (t.barcodes) for (r = 0; r < t.barcodes.length; r++)d(t.barcodes[r]); if (t.line && 2 === t.line.length && n(t.line), t.box && e(t.box), t.boxes && t.boxes.length > 0) for (r = 0; r < t.boxes.length; r++)e(t.boxes[r]) } } function h(t, e) { e && I && (t.barcodes ? t.barcodes.filter(function (t) { return t.codeResult }).forEach(function (t) { return h(t, e) }) : t.codeResult && I.addResult(e, R.getCanvasSize(), t.codeResult)) } function p(t) { return t && (t.barcodes ? t.barcodes.some(function (t) { return t.codeResult }) : t.codeResult) } function v(t, e) { var n = t; t && Q && (d(t), h(t, e), n = t.barcodes || t), L.a.publish("processed", n), p(t) && L.a.publish("detected", n) } function _() { var t, e; e = l(), e ? (t = P.decodeFromBoundingBoxes(e), t = t || {}, t.boxes = e, v(t, S.data)) : v() } function g() { var t; if (Q) { if (Y.length > 0) { if (!(t = Y.filter(function (t) { return !t.busy })[0])) return; w.attachData(t.imageData) } else w.attachData(S.data); w.grab() && (t ? (t.busy = !0, t.worker.postMessage({ cmd: "process", imageData: t.imageData }, [t.imageData.buffer])) : _()) } else _() } function y() { var t = null, e = 1e3 / ($.frequency || 60); T = !1, function n(r) { t = t || r, T || (r >= t && (t += e, g()), window.requestAnimFrame(n)) }(performance.now()) } function m() { Q && "LiveStream" === $.inputStream.type ? y() : g() } function x(t) { var e, n = { worker: void 0, imageData: new Uint8Array(R.getWidth() * R.getHeight()), busy: !0 }; e = C(), n.worker = new Worker(e), n.worker.onmessage = function (r) { if ("initialized" === r.data.event) return URL.revokeObjectURL(e), n.busy = !1, n.imageData = new Uint8Array(r.data.imageData), t(n); "processed" === r.data.event ? (n.imageData = new Uint8Array(r.data.imageData), n.busy = !1, v(r.data.result, n.imageData)) : r.data.event }, n.worker.postMessage({ cmd: "init", size: { x: R.getWidth(), y: R.getHeight() }, imageData: n.imageData, config: b($) }, [n.imageData.buffer]) } function b(t) { return X({}, t, { inputStream: X({}, t.inputStream, { target: null }) }) } function E(t) { function e(t) { self.postMessage({ event: "processed", imageData: o.data, result: t }, [o.data.buffer]) } function n() { self.postMessage({ event: "initialized", imageData: o.data }, [o.data.buffer]) } if (t) { var r = t().default; if (!r) return void self.postMessage({ event: "error", message: "Quagga could not be created" }) } var o; self.onmessage = function (t) { if ("init" === t.data.cmd) { var i = t.data.config; i.numOfWorkers = 0, o = new r.ImageWrapper({ x: t.data.size.x, y: t.data.size.y }, new Uint8Array(t.data.imageData)), r.init(i, n, o), r.onProcessed(e) } else "process" === t.data.cmd ? (o.data = new Uint8Array(t.data.imageData), r.start()) : "setReaders" === t.data.cmd && r.setReaders(t.data.readers) } } function C() { var e, n; return void 0 !== t && (n = t), e = new Blob(["(" + E.toString() + ")(" + n + ");"], { type: "text/javascript" }), window.URL.createObjectURL(e) } function O(t) { P ? P.setReaders(t) : Q && Y.length > 0 && Y.forEach(function (e) { e.worker.postMessage({ cmd: "setReaders", readers: t }) }) } function A(t, e) { var n = t - Y.length; if (0 === n) return e && e(); if (n < 0) { return Y.slice(n).forEach(function (t) { t.worker.terminate() }), Y = Y.slice(0, n), e && e() } for (var r = function (n) { Y.push(n), Y.length >= t && e && e() }, o = 0; o < n; o++)x(r) } Object.defineProperty(n, "__esModule", { value: !0 }); var R, w, T, S, D, P, I, M = r(28), N = r.n(M), z = r(54), j = (r.n(z), r(20)), U = r(64), k = r(57), L = r(51), F = r(59), W = r(9), B = r(49), G = r(55), H = r(63), V = r(61), X = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, q = { clone: r(7) }, K = { ctx: { image: null, overlay: null }, dom: { image: null, overlay: null } }, Y = [], Q = !0, $ = {}; n.default = { init: function (t, e, n) { if ($ = N()({}, G.a, t), n) return Q = !1, o(n), e(); i(e) }, start: function () { m() }, stop: function () { T = !0, A(0), "LiveStream" === $.inputStream.type && (F.a.release(), R.clearEventHandlers()) }, pause: function () { T = !0 }, onDetected: function (t) { L.a.subscribe("detected", t) }, offDetected: function (t) { L.a.unsubscribe("detected", t) }, onProcessed: function (t) { L.a.subscribe("processed", t) }, offProcessed: function (t) { L.a.unsubscribe("processed", t) }, setReaders: function (t) { O(t) }, registerResultCollector: function (t) { t && "function" == typeof t.addResult && (I = t) }, canvas: K, decodeSingle: function (t, e) { var n = this; t = N()({ inputStream: { type: "ImageStream", sequence: !1, size: 800, src: t.src }, numOfWorkers: 1, locator: { halfSample: !1 } }, t), this.init(t, function () { L.a.once("processed", function (t) { n.stop(), e.call(null, t) }, !0), m() }) }, ImageWrapper: j.a, ImageDebug: W.a, ResultCollector: B.a, CameraAccess: F.a } }, function (t, e, n) { "use strict"; function r(t, e) { return !!e && e.some(function (e) { return Object.keys(e).every(function (n) { return e[n] === t[n] }) }) } function o(t, e) { return "function" != typeof e || e(t) } var i = n(9); e.a = { create: function (t) { function e(e) { return c && e && !r(e, t.blacklist) && o(e, t.filter) } var n = document.createElement("canvas"), a = n.getContext("2d"), u = [], c = t.capacity || 20, s = t.capture === !0; return { addResult: function (t, r, o) { var f = {}; e(o) && (c--, f.codeResult = o, s && (n.width = r.x, n.height = r.y, i.a.drawImage(t, r, a), f.frame = n.toDataURL()), u.push(f)) }, getResults: function () { return u } } } } }, function (t, e, n) { "use strict"; var r = { clone: n(7), dot: n(32) }; e.a = { create: function (t, e) { function n() { o(t), i() } function o(t) { c[t.id] = t, a.push(t) } function i() { var t, e = 0; for (t = 0; t < a.length; t++)e += a[t].rad; u.rad = e / a.length, u.vec = r.clone([Math.cos(u.rad), Math.sin(u.rad)]) } var a = [], u = { rad: 0, vec: r.clone([0, 0]) }, c = {}; return n(), { add: function (t) { c[t.id] || (o(t), i()) }, fits: function (t) { return Math.abs(r.dot(t.point.vec, u.vec)) > e }, getPoints: function () { return a }, getCenter: function () { return u } } }, createPoint: function (t, e, n) { return { rad: t[n], point: t, id: e } } } }, function (t, e, n) { "use strict"; e.a = function () { function t(t) { return o[t] || (o[t] = { subscribers: [] }), o[t] } function e() { o = {} } function n(t, e) { t.async ? setTimeout(function () { t.callback(e) }, 4) : t.callback(e) } function r(e, n, r) { var o; if ("function" == typeof n) o = { callback: n, async: r }; else if (o = n, !o.callback) throw "Callback was not specified on options"; t(e).subscribers.push(o) } var o = {}; return { subscribe: function (t, e, n) { return r(t, e, n) }, publish: function (e, r) { var o = t(e), i = o.subscribers; i.filter(function (t) { return !!t.once }).forEach(function (t) { n(t, r) }), o.subscribers = i.filter(function (t) { return !t.once }), o.subscribers.forEach(function (t) { n(t, r) }) }, once: function (t, e, n) { r(t, { callback: e, async: n, once: !0 }) }, unsubscribe: function (n, r) { var o; n ? (o = t(n), o.subscribers = o && r ? o.subscribers.filter(function (t) { return t.callback !== r }) : []) : e() } } }() }, function (t, e, n) { "use strict"; function r() { return navigator.mediaDevices && "function" == typeof navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices() : Promise.reject(new Error("enumerateDevices is not defined")) } function o(t) { return navigator.mediaDevices && "function" == typeof navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia(t) : Promise.reject(new Error("getUserMedia is not defined")) } e.b = r, e.a = o }, function (t, e, n) { "use strict"; function r(t, e, n) { n || (n = { data: null, size: e }), this.data = n.data, this.originalSize = n.size, this.I = n, this.from = t, this.size = e } r.prototype.show = function (t, e) { var n, r, o, i, a, u, c; for (e || (e = 1), n = t.getContext("2d"), t.width = this.size.x, t.height = this.size.y, r = n.getImageData(0, 0, t.width, t.height), o = r.data, i = 0, a = 0; a < this.size.y; a++)for (u = 0; u < this.size.x; u++)c = a * this.size.x + u, i = this.get(u, a) * e, o[4 * c + 0] = i, o[4 * c + 1] = i, o[4 * c + 2] = i, o[4 * c + 3] = 255; r.data = o, n.putImageData(r, 0, 0) }, r.prototype.get = function (t, e) { return this.data[(this.from.y + e) * this.originalSize.x + this.from.x + t] }, r.prototype.updateData = function (t) { this.originalSize = t.size, this.data = t.data }, r.prototype.updateFrom = function (t) { return this.from = t, this }, e.a = r }, function (t, e) { "undefined" != typeof window && (window.requestAnimFrame = function () { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) { window.setTimeout(t, 1e3 / 60) } }()), Math.imul = Math.imul || function (t, e) { var n = t >>> 16 & 65535, r = 65535 & t, o = e >>> 16 & 65535, i = 65535 & e; return r * i + (n * i + r * o << 16 >>> 0) | 0 }, "function" != typeof Object.assign && (Object.assign = function (t) { "use strict"; if (null === t) throw new TypeError("Cannot convert undefined or null to object"); for (var e = Object(t), n = 1; n < arguments.length; n++) { var r = arguments[n]; if (null !== r) for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]) } return e }) }, function (t, e, n) { "use strict"; var r = void 0; r = n(56), e.a = r }, function (t, e) { t.exports = { inputStream: { name: "Live", type: "LiveStream", constraints: { width: 640, height: 480, facingMode: "environment" }, area: { top: "0%", right: "0%", left: "0%", bottom: "0%" }, singleChannel: !1 }, locate: !0, numOfWorkers: 4, decoder: { readers: ["code_128_reader"] }, locator: { halfSample: !0, patchSize: "medium" } } }, function (t, e, n) { "use strict"; var r = n(58), o = (n(9), n(69)), i = n(4), a = n(31), u = n(70), c = n(68), s = n(77), f = n(74), l = n(72), d = n(73), h = n(76), p = n(75), v = n(67), _ = n(71), g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, y = { code_128_reader: o.a, ean_reader: i.a, ean_5_reader: d.a, ean_2_reader: l.a, ean_8_reader: f.a, code_39_reader: a.a, code_39_vin_reader: u.a, codabar_reader: c.a, upc_reader: s.a, upc_e_reader: h.a, i2of5_reader: p.a, "2of5_reader": v.a, code_93_reader: _.a }; e.a = { create: function (t, e) { function n() { } function o() { t.readers.forEach(function (t) { var e, n = {}, r = []; "object" === (void 0 === t ? "undefined" : g(t)) ? (e = t.format, n = t.config) : "string" == typeof t && (e = t), n.supplements && (r = n.supplements.map(function (t) { return new y[t] })), h.push(new y[e](n, r)) }) } function i() { } function a(t, n, r) { function o(e) { var r = { y: e * Math.sin(n), x: e * Math.cos(n) }; t[0].y -= r.y, t[0].x -= r.x, t[1].y += r.y, t[1].x += r.x } for (o(r); r > 1 && (!e.inImageWithBorder(t[0], 0) || !e.inImageWithBorder(t[1], 0));)r -= Math.ceil(r / 2), o(-r); return t } function u(t) { return [{ x: (t[1][0] - t[0][0]) / 2 + t[0][0], y: (t[1][1] - t[0][1]) / 2 + t[0][1] }, { x: (t[3][0] - t[2][0]) / 2 + t[2][0], y: (t[3][1] - t[2][1]) / 2 + t[2][1] }] } function c(t) { var n, o = null, i = r.a.getBarcodeLine(e, t[0], t[1]); for (r.a.toBinaryLine(i), n = 0; n < h.length && null === o; n++)o = h[n].decodePattern(i.line); return null === o ? null : { codeResult: o, barcodeLine: i } } function s(t, e, n) { var r, o, i, a = Math.sqrt(Math.pow(t[1][0] - t[0][0], 2) + Math.pow(t[1][1] - t[0][1], 2)), u = 16, s = null, f = Math.sin(n), l = Math.cos(n); for (r = 1; r < u && null === s; r++)o = a / u * r * (r % 2 == 0 ? -1 : 1), i = { y: o * f, x: o * l }, e[0].y += i.x, e[0].x -= i.y, e[1].y += i.x, e[1].x -= i.y, s = c(e); return s } function f(t) { return Math.sqrt(Math.pow(Math.abs(t[1].y - t[0].y), 2) + Math.pow(Math.abs(t[1].x - t[0].x), 2)) } function l(t) { var e, n, r, o; d.ctx.overlay; return e = u(t), o = f(e), n = Math.atan2(e[1].y - e[0].y, e[1].x - e[0].x), null === (e = a(e, n, Math.floor(.1 * o))) ? null : (r = c(e), null === r && (r = s(t, e, n)), null === r ? null : { codeResult: r.codeResult, line: e, angle: n, pattern: r.barcodeLine.line, threshold: r.barcodeLine.threshold }) } var d = { ctx: { frequency: null, pattern: null, overlay: null }, dom: { frequency: null, pattern: null, overlay: null } }, h = []; return n(), o(), i(), { decodeFromBoundingBox: function (t) { return l(t) }, decodeFromBoundingBoxes: function (e) { var n, r, o = [], i = t.multiple; for (n = 0; n < e.length; n++) { var a = e[n]; if (r = l(a) || {}, r.box = a, i) o.push(r); else if (r.codeResult) return r } if (i) return { barcodes: o } }, setReaders: function (e) { t.readers = e, h.length = 0, o() } } } } }, function (t, e, n) { "use strict"; var r = (n(20), {}), o = { DIR: { UP: 1, DOWN: -1 } }; r.getBarcodeLine = function (t, e, n) { function r(t, e) { l = y[e * m + t], x += l, b = l < b ? l : b, E = l > E ? l : E, g.push(l) } var o, i, a, u, c, s, f, l, d = 0 | e.x, h = 0 | e.y, p = 0 | n.x, v = 0 | n.y, _ = Math.abs(v - h) > Math.abs(p - d), g = [], y = t.data, m = t.size.x, x = 0, b = 255, E = 0; for (_ && (s = d, d = h, h = s, s = p, p = v, v = s), d > p && (s = d, d = p, p = s, s = h, h = v, v = s), o = p - d, i = Math.abs(v - h), a = o / 2 | 0, c = h, u = h < v ? 1 : -1, f = d; f < p; f++)_ ? r(c, f) : r(f, c), (a -= i) < 0 && (c += u, a += o); return { line: g, min: b, max: E } }, r.toBinaryLine = function (t) { var e, n, r, i, a, u, c = t.min, s = t.max, f = t.line, l = c + (s - c) / 2, d = [], h = (s - c) / 12, p = -h; for (r = f[0] > l ? o.DIR.UP : o.DIR.DOWN, d.push({ pos: 0, val: f[0] }), a = 0; a < f.length - 2; a++)e = f[a + 1] - f[a], n = f[a + 2] - f[a + 1], i = e + n < p && f[a + 1] < 1.5 * l ? o.DIR.DOWN : e + n > h && f[a + 1] > .5 * l ? o.DIR.UP : r, r !== i && (d.push({ pos: a, val: f[a] }), r = i); for (d.push({ pos: f.length, val: f[f.length - 1] }), u = d[0].pos; u < d[1].pos; u++)f[u] = f[u] > l ? 0 : 1; for (a = 1; a < d.length - 1; a++)for (h = d[a + 1].val > d[a].val ? d[a].val + (d[a + 1].val - d[a].val) / 3 * 2 | 0 : d[a + 1].val + (d[a].val - d[a + 1].val) / 3 | 0, u = d[a].pos; u < d[a + 1].pos; u++)f[u] = f[u] > h ? 0 : 1; return { line: f, threshold: h } }, r.debug = { printFrequency: function (t, e) { var n, r = e.getContext("2d"); for (e.width = t.length, e.height = 256, r.beginPath(), r.strokeStyle = "blue", n = 0; n < t.length; n++)r.moveTo(n, 255), r.lineTo(n, 255 - t[n]); r.stroke(), r.closePath() }, printPattern: function (t, e) { var n, r = e.getContext("2d"); for (e.width = t.length, r.fillColor = "black", n = 0; n < t.length; n++)1 === t[n] && r.fillRect(n, 0, 1, 100) } }, e.a = r }, function (t, e, n) { "use strict"; function r(t) { return new Promise(function (e, n) { function r() { o > 0 ? t.videoWidth > 10 && t.videoHeight > 10 ? e() : window.setTimeout(r, 500) : n("Unable to play video stream. Is webcam working?"), o-- } var o = 10; r() }) } function o(t, e) { return n.i(d.a)(e).then(function (e) { return new Promise(function (n) { s = e, t.setAttribute("autoplay", !0), t.setAttribute("muted", !0), t.setAttribute("playsinline", !0), t.srcObject = e, t.addEventListener("loadedmetadata", function () { t.play(), n() }) }) }).then(r.bind(null, t)) } function i(t) { var e = l()(t, ["width", "height", "facingMode", "aspectRatio", "deviceId"]); return void 0 !== t.minAspectRatio && t.minAspectRatio > 0 && (e.aspectRatio = t.minAspectRatio, console.log("WARNING: Constraint 'minAspectRatio' is deprecated; Use 'aspectRatio' instead")), void 0 !== t.facing && (e.facingMode = t.facing, console.log("WARNING: Constraint 'facing' is deprecated. Use 'facingMode' instead'")), e } function a(t) { var e = { audio: !1, video: i(t) }; return e.video.deviceId && e.video.facingMode && delete e.video.facingMode, Promise.resolve(e) } function u() { return n.i(d.b)().then(function (t) { return t.filter(function (t) { return "videoinput" === t.kind }) }) } function c() { if (s) { var t = s.getVideoTracks(); if (t && t.length) return t[0] } } var s, f = n(162), l = n.n(f), d = n(52); e.a = { request: function (t, e) { return a(e).then(o.bind(null, t)) }, release: function () { var t = s && s.getVideoTracks(); t && t.length && t[0].stop(), s = null }, enumerateVideoDevices: u, getActiveStreamLabel: function () { var t = c(); return t ? t.label : "" }, getActiveTrack: c } }, function (t, e, n) { "use strict"; function r(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d; return /^blob\:/i.test(t) ? i(t).then(o).then(function (t) { return a(t, e) }) : Promise.resolve(null) } function o(t) { return new Promise(function (e) { var n = new FileReader; n.onload = function (t) { return e(t.target.result) }, n.readAsArrayBuffer(t) }) } function i(t) { return new Promise(function (e, n) { var r = new XMLHttpRequest; r.open("GET", t, !0), r.responseType = "blob", r.onreadystatechange = function () { r.readyState !== XMLHttpRequest.DONE || 200 !== r.status && 0 !== r.status || e(this.response) }, r.onerror = n, r.send() }) } function a(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d, n = new DataView(t), r = t.byteLength, o = e.reduce(function (t, e) { var n = Object.keys(l).filter(function (t) { return l[t] === e })[0]; return n && (t[n] = e), t }, {}), i = 2; if (255 !== n.getUint8(0) || 216 !== n.getUint8(1)) return !1; for (; i < r;) { if (255 !== n.getUint8(i)) return !1; if (225 === n.getUint8(i + 1)) return u(n, i + 4, o); i += 2 + n.getUint16(i + 2) } } function u(t, e, n) { if ("Exif" !== f(t, e, 4)) return !1; var r = e + 6, o = void 0; if (18761 === t.getUint16(r)) o = !1; else { if (19789 !== t.getUint16(r)) return !1; o = !0 } if (42 !== t.getUint16(r + 2, !o)) return !1; var i = t.getUint32(r + 4, !o); return !(i < 8) && c(t, r, r + i, n, o) } function c(t, e, n, r, o) { for (var i = t.getUint16(n, !o), a = {}, u = 0; u < i; u++) { var c = n + 12 * u + 2, f = r[t.getUint16(c, !o)]; f && (a[f] = s(t, c, e, n, o)) } return a } function s(t, e, n, r, o) { var i = t.getUint16(e + 2, !o), a = t.getUint32(e + 4, !o); switch (i) { case 3: if (1 === a) return t.getUint16(e + 8, !o) } } function f(t, e, n) { for (var r = "", o = e; o < e + n; o++)r += String.fromCharCode(t.getUint8(o)); return r } e.a = r; var l = { 274: "orientation" }, d = Object.keys(l).map(function (t) { return l[t] }) }, function (t, e, n) { "use strict"; function r(t, e) { t.width !== e.x && (t.width = e.x), t.height !== e.y && (t.height = e.y) } var o = n(19), i = Math.PI / 180, a = {}; a.create = function (t, e) { var a, u = {}, c = t.getConfig(), s = (n.i(o.b)(t.getRealWidth(), t.getRealHeight()), t.getCanvasSize()), f = n.i(o.b)(t.getWidth(), t.getHeight()), l = t.getTopRight(), d = l.x, h = l.y, p = null, v = null; return a = e ? e : document.createElement("canvas"), a.width = s.x, a.height = s.y, p = a.getContext("2d"), v = new Uint8Array(f.x * f.y), u.attachData = function (t) { v = t }, u.getData = function () { return v }, u.grab = function () { var e, u = c.halfSample, l = t.getFrame(), _ = l, g = 0; if (_) { if (r(a, s), "ImageStream" === c.type && (_ = l.img, l.tags && l.tags.orientation)) switch (l.tags.orientation) { case 6: g = 90 * i; break; case 8: g = -90 * i }return 0 !== g ? (p.translate(s.x / 2, s.y / 2), p.rotate(g), p.drawImage(_, -s.y / 2, -s.x / 2, s.y, s.x), p.rotate(-g), p.translate(-s.x / 2, -s.y / 2)) : p.drawImage(_, 0, 0, s.x, s.y), e = p.getImageData(d, h, f.x, f.y).data, u ? n.i(o.c)(e, f, v) : n.i(o.d)(e, v, c), !0 } return !1 }, u.getSize = function () { return f }, u }, e.a = a }, function (t, e, n) { "use strict"; function r(t, e) { t.onload = function () { e.loaded(this) } } var o = n(60), i = {}; i.load = function (t, e, i, a, u) { var c, s, f, l = new Array(a), d = new Array(l.length); if (u === !1) l[0] = t; else for (c = 0; c < l.length; c++)f = i + c, l[c] = t + "image-" + ("00" + f).slice(-3) + ".jpg"; for (d.notLoaded = [], d.addImage = function (t) { d.notLoaded.push(t) }, d.loaded = function (r) { for (var i = d.notLoaded, a = 0; a < i.length; a++)if (i[a] === r) { i.splice(a, 1); for (var c = 0; c < l.length; c++) { var s = l[c].substr(l[c].lastIndexOf("/")); if (r.src.lastIndexOf(s) !== -1) { d[c] = { img: r }; break } } break } 0 === i.length && (u === !1 ? n.i(o.a)(t, ["orientation"]).then(function (t) { d[0].tags = t, e(d) }).catch(function (t) { console.log(t), e(d) }) : e(d)) }, c = 0; c < l.length; c++)s = new Image, d.addImage(s), r(s, d), s.src = l[c] }, e.a = i }, function (t, e, n) { "use strict"; var r = n(62), o = {}; o.createVideoStream = function (t) { function e() { var e = t.videoWidth, o = t.videoHeight; n = i.size ? e / o > 1 ? i.size : Math.floor(e / o * i.size) : e, r = i.size ? e / o > 1 ? Math.floor(o / e * i.size) : i.size : o, s.x = n, s.y = r } var n, r, o = {}, i = null, a = ["canrecord", "ended"], u = {}, c = { x: 0, y: 0 }, s = { x: 0, y: 0 }; return o.getRealWidth = function () { return t.videoWidth }, o.getRealHeight = function () { return t.videoHeight }, o.getWidth = function () { return n }, o.getHeight = function () { return r }, o.setWidth = function (t) { n = t }, o.setHeight = function (t) { r = t }, o.setInputStream = function (e) { i = e, t.src = void 0 !== e.src ? e.src : "" }, o.ended = function () { return t.ended }, o.getConfig = function () { return i }, o.setAttribute = function (e, n) { t.setAttribute(e, n) }, o.pause = function () { t.pause() }, o.play = function () { t.play() }, o.setCurrentTime = function (e) { "LiveStream" !== i.type && (t.currentTime = e) }, o.addEventListener = function (e, n, r) { a.indexOf(e) !== -1 ? (u[e] || (u[e] = []), u[e].push(n)) : t.addEventListener(e, n, r) }, o.clearEventHandlers = function () { a.forEach(function (e) { var n = u[e]; n && n.length > 0 && n.forEach(function (n) { t.removeEventListener(e, n) }) }) }, o.trigger = function (t, n) { var r, i = u[t]; if ("canrecord" === t && e(), i && i.length > 0) for (r = 0; r < i.length; r++)i[r].apply(o, n) }, o.setTopRight = function (t) { c.x = t.x, c.y = t.y }, o.getTopRight = function () { return c }, o.setCanvasSize = function (t) { s.x = t.x, s.y = t.y }, o.getCanvasSize = function () { return s }, o.getFrame = function () { return t }, o }, o.createLiveStream = function (t) { t.setAttribute("autoplay", !0); var e = o.createVideoStream(t); return e.ended = function () { return !1 }, e }, o.createImageStream = function () { function t() { l = !1, r.a.load(v, function (t) { if (d = t, t[0].tags && t[0].tags.orientation) switch (t[0].tags.orientation) { case 6: case 8: u = t[0].img.height, c = t[0].img.width; break; default: u = t[0].img.width, c = t[0].img.height } else u = t[0].img.width, c = t[0].img.height; n = a.size ? u / c > 1 ? a.size : Math.floor(u / c * a.size) : u, o = a.size ? u / c > 1 ? Math.floor(c / u * a.size) : a.size : c, x.x = n, x.y = o, l = !0, s = 0, setTimeout(function () { e("canrecord", []) }, 0) }, p, h, a.sequence) } function e(t, e) { var n, r = y[t]; if (r && r.length > 0) for (n = 0; n < r.length; n++)r[n].apply(i, e) } var n, o, i = {}, a = null, u = 0, c = 0, s = 0, f = !0, l = !1, d = null, h = 0, p = 1, v = null, _ = !1, g = ["canrecord", "ended"], y = {}, m = { x: 0, y: 0 }, x = { x: 0, y: 0 }; return i.trigger = e, i.getWidth = function () { return n }, i.getHeight = function () { return o }, i.setWidth = function (t) { n = t }, i.setHeight = function (t) { o = t }, i.getRealWidth = function () { return u }, i.getRealHeight = function () { return c }, i.setInputStream = function (e) { a = e, e.sequence === !1 ? (v = e.src, h = 1) : (v = e.src, h = e.length), t() }, i.ended = function () { return _ }, i.setAttribute = function () { }, i.getConfig = function () { return a }, i.pause = function () { f = !0 }, i.play = function () { f = !1 }, i.setCurrentTime = function (t) { s = t }, i.addEventListener = function (t, e) { g.indexOf(t) !== -1 && (y[t] || (y[t] = []), y[t].push(e)) }, i.setTopRight = function (t) { m.x = t.x, m.y = t.y }, i.getTopRight = function () { return m }, i.setCanvasSize = function (t) { x.x = t.x, x.y = t.y }, i.getCanvasSize = function () { return x }, i.getFrame = function () { var t; return l ? (f || (t = d[s], s < h - 1 ? s++ : setTimeout(function () { _ = !0, e("ended", []) }, 0)), t) : null }, i }, e.a = o }, function (t, e, n) { "use strict"; (function (t) { function r() { var e; v = p.halfSample ? new R.a({ x: O.size.x / 2 | 0, y: O.size.y / 2 | 0 }) : O, C = n.i(w.e)(p.patchSize, v.size), z.x = v.size.x / C.x | 0, z.y = v.size.y / C.y | 0, E = new R.a(v.size, void 0, Uint8Array, !1), y = new R.a(C, void 0, Array, !0), e = new ArrayBuffer(65536), g = new R.a(C, new Uint8Array(e, 0, C.x * C.y)), _ = new R.a(C, new Uint8Array(e, C.x * C.y * 3, C.x * C.y), void 0, !0), A = n.i(P.a)("undefined" != typeof window ? window : "undefined" != typeof self ? self : t, { size: C.x }, e), b = new R.a({ x: v.size.x / g.size.x | 0, y: v.size.y / g.size.y | 0 }, void 0, Array, !0), m = new R.a(b.size, void 0, void 0, !0), x = new R.a(b.size, void 0, Int32Array, !0) } function o() { p.useWorker || "undefined" == typeof document || (N.dom.binary = document.createElement("canvas"), N.dom.binary.className = "binaryBuffer", N.ctx.binary = N.dom.binary.getContext("2d"), N.dom.binary.width = E.size.x, N.dom.binary.height = E.size.y) } function i(t) { var e, n, r, o, i, a, u, c = E.size.x, s = E.size.y, f = -E.size.x, l = -E.size.y; for (e = 0, n = 0; n < t.length; n++)o = t[n], e += o.rad; for (e /= t.length, e = (180 * e / Math.PI + 90) % 180 - 90, e < 0 && (e += 180), e = (180 - e) * Math.PI / 180, i = M.copy(M.create(), [Math.cos(e), Math.sin(e), -Math.sin(e), Math.cos(e)]), n = 0; n < t.length; n++)for (o = t[n], r = 0; r < 4; r++)I.transformMat2(o.box[r], o.box[r], i); for (n = 0; n < t.length; n++)for (o = t[n], r = 0; r < 4; r++)o.box[r][0] < c && (c = o.box[r][0]), o.box[r][0] > f && (f = o.box[r][0]), o.box[r][1] < s && (s = o.box[r][1]), o.box[r][1] > l && (l = o.box[r][1]); for (a = [[c, s], [f, s], [f, l], [c, l]], u = p.halfSample ? 2 : 1, i = M.invert(i, i), r = 0; r < 4; r++)I.transformMat2(a[r], a[r], i); for (r = 0; r < 4; r++)I.scale(a[r], a[r], u); return a } function a() { n.i(w.f)(v, E), E.zeroBorder() } function u() { var t, e, n, r, o, i, a, u = []; for (t = 0; t < z.x; t++)for (e = 0; e < z.y; e++)n = g.size.x * t, r = g.size.y * e, l(n, r), _.zeroBorder(), T.a.init(y.data, 0), i = S.a.create(_, y), a = i.rasterize(0), o = y.moments(a.count), u = u.concat(d(o, [t, e], n, r)); return u } function c(t) { var e, n, r = []; for (e = 0; e < t; e++)r.push(0); for (n = x.data.length; n--;)x.data[n] > 0 && r[x.data[n] - 1]++; return r = r.map(function (t, e) { return { val: t, label: e + 1 } }), r.sort(function (t, e) { return e.val - t.val }), r.filter(function (t) { return t.val >= 5 }) } function s(t, e) { var n, r, o, a, u = [], c = []; for (n = 0; n < t.length; n++) { for (r = x.data.length, u.length = 0; r--;)x.data[r] === t[n].label && (o = b.data[r], u.push(o)); a = i(u), a && c.push(a) } return c } function f(t) { var e = n.i(w.g)(t, .9), r = n.i(w.h)(e, 1, function (t) { return t.getPoints().length }), o = [], i = []; if (1 === r.length) { o = r[0].item.getPoints(); for (var a = 0; a < o.length; a++)i.push(o[a].point) } return i } function l(t, e) { E.subImageAsCopy(g, n.i(w.b)(t, e)), A.skeletonize() } function d(t, e, n, r) { var o, i, a, u, c = [], s = [], l = Math.ceil(C.x / 3); if (t.length >= 2) { for (o = 0; o < t.length; o++)t[o].m00 > l && c.push(t[o]); if (c.length >= 2) { for (a = f(c), i = 0, o = 0; o < a.length; o++)i += a[o].rad; a.length > 1 && a.length >= c.length / 4 * 3 && a.length > t.length / 4 && (i /= a.length, u = { index: e[1] * z.x + e[0], pos: { x: n, y: r }, box: [I.clone([n, r]), I.clone([n + g.size.x, r]), I.clone([n + g.size.x, r + g.size.y]), I.clone([n, r + g.size.y])], moments: a, rad: i, vec: I.clone([Math.cos(i), Math.sin(i)]) }, s.push(u)) } } return s } function h(t) { function e() { var t; for (t = 0; t < x.data.length; t++)if (0 === x.data[t] && 1 === m.data[t]) return t; return x.length } function n(t) { var e, r, o, u, c, s = { x: t % x.size.x, y: t / x.size.x | 0 }; if (t < x.data.length) for (o = b.data[t], x.data[t] = i, c = 0; c < D.a.searchDirections.length; c++)r = s.y + D.a.searchDirections[c][0], e = s.x + D.a.searchDirections[c][1], u = r * x.size.x + e, 0 !== m.data[u] ? 0 === x.data[u] && Math.abs(I.dot(b.data[u].vec, o.vec)) > a && n(u) : x.data[u] = Number.MAX_VALUE } var r, o, i = 0, a = .95, u = 0; for (T.a.init(m.data, 0), T.a.init(x.data, 0), T.a.init(b.data, null), r = 0; r < t.length; r++)o = t[r], b.data[o.index] = o, m.data[o.index] = 1; for (m.zeroBorder(); (u = e()) < x.data.length;)i++, n(u); return i } var p, v, _, g, y, m, x, b, E, C, O, A, R = n(20), w = n(19), T = n(3), S = (n(9), n(65)), D = n(30), P = n(66), I = { clone: n(7), dot: n(32), scale: n(81), transformMat2: n(82) }, M = { copy: n(78), create: n(79), invert: n(80) }, N = { ctx: { binary: null }, dom: { binary: null } }, z = { x: 0, y: 0 }; e.a = { init: function (t, e) { p = e, O = t, r(), o() }, locate: function () { var t, e; if (p.halfSample && n.i(w.i)(O, v), a(), t = u(), t.length < z.x * z.y * .05) return null; var r = h(t); return r < 1 ? null : (e = c(r), 0 === e.length ? null : s(e, r)) }, checkImageConstraints: function (t, e) { var r, o, i, a = t.getWidth(), u = t.getHeight(), c = e.halfSample ? .5 : 1; if (t.getConfig().area && (i = n.i(w.j)(a, u, t.getConfig().area), t.setTopRight({ x: i.sx, y: i.sy }), t.setCanvasSize({ x: a, y: u }), a = i.sw, u = i.sh), o = { x: Math.floor(a * c), y: Math.floor(u * c) }, r = n.i(w.e)(e.patchSize, o), t.setWidth(Math.floor(Math.floor(o.x / r.x) * (1 / c) * r.x)), t.setHeight(Math.floor(Math.floor(o.y / r.y) * (1 / c) * r.y)), t.getWidth() % r.x == 0 && t.getHeight() % r.y == 0) return !0; throw new Error("Image dimensions do not comply with the current settings: Width (" + a + " )and height (" + u + ") must a multiple of " + r.x) } } }).call(e, n(47)) }, function (t, e, n) { "use strict"; var r = n(30), o = { createContour2D: function () { return { dir: null, index: null, firstVertex: null, insideContours: null, nextpeer: null, prevpeer: null } }, CONTOUR_DIR: { CW_DIR: 0, CCW_DIR: 1, UNKNOWN_DIR: 2 }, DIR: { OUTSIDE_EDGE: -32767, INSIDE_EDGE: -32766 }, create: function (t, e) { var n = t.data, i = e.data, a = t.size.x, u = t.size.y, c = r.a.create(t, e); return { rasterize: function (t) { var e, r, s, f, l, d, h, p, v, _, g, y, m = [], x = 0; for (y = 0; y < 400; y++)m[y] = 0; for (m[0] = n[0], v = null, d = 1; d < u - 1; d++)for (f = 0, r = m[0], l = 1; l < a - 1; l++)if (g = d * a + l, 0 === i[g]) if ((e = n[g]) !== r) { if (0 === f) s = x + 1, m[s] = e, r = e, null !== (h = c.contourTracing(d, l, s, e, o.DIR.OUTSIDE_EDGE)) && (x++, f = s, p = o.createContour2D(), p.dir = o.CONTOUR_DIR.CW_DIR, p.index = f, p.firstVertex = h, p.nextpeer = v, p.insideContours = null, null !== v && (v.prevpeer = p), v = p); else if (null !== (h = c.contourTracing(d, l, o.DIR.INSIDE_EDGE, e, f))) { for (p = o.createContour2D(), p.firstVertex = h, p.insideContours = null, p.dir = 0 === t ? o.CONTOUR_DIR.CCW_DIR : o.CONTOUR_DIR.CW_DIR, p.index = t, _ = v; null !== _ && _.index !== f;)_ = _.nextpeer; null !== _ && (p.nextpeer = _.insideContours, null !== _.insideContours && (_.insideContours.prevpeer = p), _.insideContours = p) } } else i[g] = f; else i[g] === o.DIR.OUTSIDE_EDGE || i[g] === o.DIR.INSIDE_EDGE ? (f = 0, r = i[g] === o.DIR.INSIDE_EDGE ? n[g] : m[0]) : (f = i[g], r = m[f]); for (_ = v; null !== _;)_.index = t, _ = _.nextpeer; return { cc: v, count: x } }, debug: { drawContour: function (t, e) { var n, r, i, a = t.getContext("2d"), u = e; for (a.strokeStyle = "red", a.fillStyle = "red", a.lineWidth = 1, n = null !== u ? u.insideContours : null; null !== u;) { switch (null !== n ? (r = n, n = n.nextpeer) : (r = u, u = u.nextpeer, n = null !== u ? u.insideContours : null), r.dir) { case o.CONTOUR_DIR.CW_DIR: a.strokeStyle = "red"; break; case o.CONTOUR_DIR.CCW_DIR: a.strokeStyle = "blue"; break; case o.CONTOUR_DIR.UNKNOWN_DIR: a.strokeStyle = "green" }i = r.firstVertex, a.beginPath(), a.moveTo(i.x, i.y); do i = i.next, a.lineTo(i.x, i.y); while (i !== r.firstVertex); a.stroke() } } } } } }; e.a = o }, function (module, __webpack_exports__, __webpack_require__) { "use strict"; function Skeletonizer(stdlib, foreign, buffer) { "use asm"; var images = new stdlib.Uint8Array(buffer), size = foreign.size | 0, imul = stdlib.Math.imul; function erode(inImagePtr, outImagePtr) { inImagePtr = inImagePtr | 0; outImagePtr = outImagePtr | 0; var v = 0, u = 0, sum = 0, yStart1 = 0, yStart2 = 0, xStart1 = 0, xStart2 = 0, offset = 0; for (v = 1; (v | 0) < (size - 1 | 0); v = v + 1 | 0) { offset = offset + size | 0; for (u = 1; (u | 0) < (size - 1 | 0); u = u + 1 | 0) { yStart1 = offset - size | 0; yStart2 = offset + size | 0; xStart1 = u - 1 | 0; xStart2 = u + 1 | 0; sum = (images[inImagePtr + yStart1 + xStart1 | 0] | 0) + (images[inImagePtr + yStart1 + xStart2 | 0] | 0) + (images[inImagePtr + offset + u | 0] | 0) + (images[inImagePtr + yStart2 + xStart1 | 0] | 0) + (images[inImagePtr + yStart2 + xStart2 | 0] | 0) | 0; if ((sum | 0) == (5 | 0)) { images[outImagePtr + offset + u | 0] = 1; } else { images[outImagePtr + offset + u | 0] = 0; } } } return; } function subtract(aImagePtr, bImagePtr, outImagePtr) { aImagePtr = aImagePtr | 0; bImagePtr = bImagePtr | 0; outImagePtr = outImagePtr | 0; var length = 0; length = imul(size, size) | 0; while ((length | 0) > 0) { length = length - 1 | 0; images[outImagePtr + length | 0] = (images[aImagePtr + length | 0] | 0) - (images[bImagePtr + length | 0] | 0) | 0; } } function bitwiseOr(aImagePtr, bImagePtr, outImagePtr) { aImagePtr = aImagePtr | 0; bImagePtr = bImagePtr | 0; outImagePtr = outImagePtr | 0; var length = 0; length = imul(size, size) | 0; while ((length | 0) > 0) { length = length - 1 | 0; images[outImagePtr + length | 0] = images[aImagePtr + length | 0] | 0 | (images[bImagePtr + length | 0] | 0) | 0; } } function countNonZero(imagePtr) { imagePtr = imagePtr | 0; var sum = 0, length = 0; length = imul(size, size) | 0; while ((length | 0) > 0) { length = length - 1 | 0; sum = (sum | 0) + (images[imagePtr + length | 0] | 0) | 0; } return sum | 0; } function init(imagePtr, value) { imagePtr = imagePtr | 0; value = value | 0; var length = 0; length = imul(size, size) | 0; while ((length | 0) > 0) { length = length - 1 | 0; images[imagePtr + length | 0] = value; } } function dilate(inImagePtr, outImagePtr) { inImagePtr = inImagePtr | 0; outImagePtr = outImagePtr | 0; var v = 0, u = 0, sum = 0, yStart1 = 0, yStart2 = 0, xStart1 = 0, xStart2 = 0, offset = 0; for (v = 1; (v | 0) < (size - 1 | 0); v = v + 1 | 0) { offset = offset + size | 0; for (u = 1; (u | 0) < (size - 1 | 0); u = u + 1 | 0) { yStart1 = offset - size | 0; yStart2 = offset + size | 0; xStart1 = u - 1 | 0; xStart2 = u + 1 | 0; sum = (images[inImagePtr + yStart1 + xStart1 | 0] | 0) + (images[inImagePtr + yStart1 + xStart2 | 0] | 0) + (images[inImagePtr + offset + u | 0] | 0) + (images[inImagePtr + yStart2 + xStart1 | 0] | 0) + (images[inImagePtr + yStart2 + xStart2 | 0] | 0) | 0; if ((sum | 0) > (0 | 0)) { images[outImagePtr + offset + u | 0] = 1; } else { images[outImagePtr + offset + u | 0] = 0; } } } return; } function memcpy(srcImagePtr, dstImagePtr) { srcImagePtr = srcImagePtr | 0; dstImagePtr = dstImagePtr | 0; var length = 0; length = imul(size, size) | 0; while ((length | 0) > 0) { length = length - 1 | 0; images[dstImagePtr + length | 0] = images[srcImagePtr + length | 0] | 0; } } function zeroBorder(imagePtr) { imagePtr = imagePtr | 0; var x = 0, y = 0; for (x = 0; (x | 0) < (size - 1 | 0); x = x + 1 | 0) { images[imagePtr + x | 0] = 0; images[imagePtr + y | 0] = 0; y = y + size - 1 | 0; images[imagePtr + y | 0] = 0; y = y + 1 | 0; } for (x = 0; (x | 0) < (size | 0); x = x + 1 | 0) { images[imagePtr + y | 0] = 0; y = y + 1 | 0; } } function skeletonize() { var subImagePtr = 0, erodedImagePtr = 0, tempImagePtr = 0, skelImagePtr = 0, sum = 0, done = 0; erodedImagePtr = imul(size, size) | 0; tempImagePtr = erodedImagePtr + erodedImagePtr | 0; skelImagePtr = tempImagePtr + erodedImagePtr | 0; init(skelImagePtr, 0); zeroBorder(subImagePtr); do { erode(subImagePtr, erodedImagePtr); dilate(erodedImagePtr, tempImagePtr); subtract(subImagePtr, tempImagePtr, tempImagePtr); bitwiseOr(skelImagePtr, tempImagePtr, skelImagePtr); memcpy(erodedImagePtr, subImagePtr); sum = countNonZero(subImagePtr) | 0; done = (sum | 0) == 0 | 0; } while (!done); } return { skeletonize: skeletonize }; } __webpack_exports__["a"] = Skeletonizer; }, function (t, e, n) { "use strict"; function r(t) { o.a.call(this, t), this.barSpaceRatio = [1, 1] } var o = n(1), i = 1, a = 3, u = { START_PATTERN: { value: [a, i, a, i, i, i] }, STOP_PATTERN: { value: [a, i, i, i, a] }, CODE_PATTERN: { value: [[i, i, a, a, i], [a, i, i, i, a], [i, a, i, i, a], [a, a, i, i, i], [i, i, a, i, a], [a, i, a, i, i], [i, a, a, i, i], [i, i, i, a, a], [a, i, i, a, i], [i, a, i, a, i]] }, SINGLE_CODE_ERROR: { value: .78, writable: !0 }, AVG_CODE_ERROR: { value: .3, writable: !0 }, FORMAT: { value: "2of5" } }, c = u.START_PATTERN.value.reduce(function (t, e) { return t + e }, 0); r.prototype = Object.create(o.a.prototype, u), r.prototype.constructor = r, r.prototype._findPattern = function (t, e, n, r) { var o, i, a, u, c = [], s = this, f = 0, l = { error: Number.MAX_VALUE, code: -1, start: 0, end: 0 }, d = s.AVG_CODE_ERROR; for (n = n || !1, r = r || !1, e || (e = s._nextSet(s._row)), o = 0; o < t.length; o++)c[o] = 0; for (o = e; o < s._row.length; o++)if (s._row[o] ^ n) c[f]++; else { if (f === c.length - 1) { for (u = 0, a = 0; a < c.length; a++)u += c[a]; if ((i = s._matchPattern(c, t)) < d) return l.error = i, l.start = o - u, l.end = o, l; if (!r) return null; for (a = 0; a < c.length - 2; a++)c[a] = c[a + 2]; c[c.length - 2] = 0, c[c.length - 1] = 0, f-- } else f++; c[f] = 1, n = !n } return null }, r.prototype._findStart = function () { for (var t, e, n = this, r = n._nextSet(n._row), o = 1; !e;) { if (!(e = n._findPattern(n.START_PATTERN, r, !1, !0))) return null; if (o = Math.floor((e.end - e.start) / c), (t = e.start - 5 * o) >= 0 && n._matchRange(t, e.start, 0)) return e; r = e.end, e = null } }, r.prototype._verifyTrailingWhitespace = function (t) { var e, n = this; return e = t.end + (t.end - t.start) / 2, e < n._row.length && n._matchRange(t.end, e, 0) ? t : null }, r.prototype._findEnd = function () { var t, e, n, r = this; return r._row.reverse(), n = r._nextSet(r._row), t = r._findPattern(r.STOP_PATTERN, n, !1, !0), r._row.reverse(), null === t ? null : (e = t.start, t.start = r._row.length - t.end, t.end = r._row.length - e, null !== t ? r._verifyTrailingWhitespace(t) : null) }, r.prototype._decodeCode = function (t) { var e, n, r, o = this, i = 0, a = o.AVG_CODE_ERROR, u = { error: Number.MAX_VALUE, code: -1, start: 0, end: 0 }; for (e = 0; e < t.length; e++)i += t[e]; for (r = 0; r < o.CODE_PATTERN.length; r++)(n = o._matchPattern(t, o.CODE_PATTERN[r])) < u.error && (u.code = r, u.error = n); if (u.error < a) return u }, r.prototype._decodePayload = function (t, e, n) { for (var r, o, i = this, a = 0, u = t.length, c = [0, 0, 0, 0, 0]; a < u;) { for (r = 0; r < 5; r++)c[r] = t[a] * this.barSpaceRatio[0], a += 2; if (!(o = i._decodeCode(c))) return null; e.push(o.code + ""), n.push(o) } return o }, r.prototype._verifyCounterLength = function (t) { return t.length % 10 == 0 }, r.prototype._decode = function () { var t, e, n, r = this, o = [], i = []; return (t = r._findStart()) ? (i.push(t), (e = r._findEnd()) ? (n = r._fillCounters(t.end, e.start, !1), r._verifyCounterLength(n) && r._decodePayload(n, o, i) ? o.length < 5 ? null : (i.push(e), { code: o.join(""), start: t.start, end: e.end, startInfo: t, decodedCodes: i }) : null) : null) : null }, e.a = r }, function (t, e, n) { "use strict"; function r() { o.a.call(this), this._counters = [] } var o = n(1), i = { ALPHABETH_STRING: { value: "0123456789-$:/.+ABCD" }, ALPHABET: { value: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 36, 58, 47, 46, 43, 65, 66, 67, 68] }, CHARACTER_ENCODINGS: { value: [3, 6, 9, 96, 18, 66, 33, 36, 48, 72, 12, 24, 69, 81, 84, 21, 26, 41, 11, 14] }, START_END: { value: [26, 41, 11, 14] }, MIN_ENCODED_CHARS: { value: 4 }, MAX_ACCEPTABLE: { value: 2 }, PADDING: { value: 1.5 }, FORMAT: { value: "codabar", writeable: !1 } }; r.prototype = Object.create(o.a.prototype, i), r.prototype.constructor = r, r.prototype._decode = function () { var t, e, n, r, o, i = this, a = []; if (this._counters = i._fillCounters(), !(t = i._findStart())) return null; r = t.startCounter; do { if ((n = i._toPattern(r)) < 0) return null; if ((e = i._patternToChar(n)) < 0) return null; if (a.push(e), r += 8, a.length > 1 && i._isStartEnd(n)) break } while (r < i._counters.length); return a.length - 2 < i.MIN_ENCODED_CHARS || !i._isStartEnd(n) ? null : i._verifyWhitespace(t.startCounter, r - 8) && i._validateResult(a, t.startCounter) ? (r = r > i._counters.length ? i._counters.length : r, o = t.start + i._sumCounters(t.startCounter, r - 8), { code: a.join(""), start: t.start, end: o, startInfo: t, decodedCodes: a }) : null }, r.prototype._verifyWhitespace = function (t, e) { return (t - 1 <= 0 || this._counters[t - 1] >= this._calculatePatternLength(t) / 2) && (e + 8 >= this._counters.length || this._counters[e + 7] >= this._calculatePatternLength(e) / 2) }, r.prototype._calculatePatternLength = function (t) { var e, n = 0; for (e = t; e < t + 7; e++)n += this._counters[e]; return n }, r.prototype._thresholdResultPattern = function (t, e) { var n, r, o, i, a, u = this, c = { space: { narrow: { size: 0, counts: 0, min: 0, max: Number.MAX_VALUE }, wide: { size: 0, counts: 0, min: 0, max: Number.MAX_VALUE } }, bar: { narrow: { size: 0, counts: 0, min: 0, max: Number.MAX_VALUE }, wide: { size: 0, counts: 0, min: 0, max: Number.MAX_VALUE } } }, s = e; for (o = 0; o < t.length; o++) { for (a = u._charToPattern(t[o]), i = 6; i >= 0; i--)n = 2 == (1 & i) ? c.bar : c.space, r = 1 == (1 & a) ? n.wide : n.narrow, r.size += u._counters[s + i], r.counts++, a >>= 1; s += 8 } return ["space", "bar"].forEach(function (t) { var e = c[t]; e.wide.min = Math.floor((e.narrow.size / e.narrow.counts + e.wide.size / e.wide.counts) / 2), e.narrow.max = Math.ceil(e.wide.min), e.wide.max = Math.ceil((e.wide.size * u.MAX_ACCEPTABLE + u.PADDING) / e.wide.counts) }), c }, r.prototype._charToPattern = function (t) { var e, n = this, r = t.charCodeAt(0); for (e = 0; e < n.ALPHABET.length; e++)if (n.ALPHABET[e] === r) return n.CHARACTER_ENCODINGS[e]; return 0 }, r.prototype._validateResult = function (t, e) { var n, r, o, i, a, u, c = this, s = c._thresholdResultPattern(t, e), f = e; for (n = 0; n < t.length; n++) { for (u = c._charToPattern(t[n]), r = 6; r >= 0; r--) { if (o = 0 == (1 & r) ? s.bar : s.space, i = 1 == (1 & u) ? o.wide : o.narrow, (a = c._counters[f + r]) < i.min || a > i.max) return !1; u >>= 1 } f += 8 } return !0 }, r.prototype._patternToChar = function (t) { var e, n = this; for (e = 0; e < n.CHARACTER_ENCODINGS.length; e++)if (n.CHARACTER_ENCODINGS[e] === t) return String.fromCharCode(n.ALPHABET[e]); return -1 }, r.prototype._computeAlternatingThreshold = function (t, e) { var n, r, o = Number.MAX_VALUE, i = 0; for (n = t; n < e; n += 2)r = this._counters[n], r > i && (i = r), r < o && (o = r); return (o + i) / 2 | 0 }, r.prototype._toPattern = function (t) { var e, n, r, o, i = 7, a = t + i, u = 1 << i - 1, c = 0; if (a > this._counters.length) return -1; for (e = this._computeAlternatingThreshold(t, a), n = this._computeAlternatingThreshold(t + 1, a), r = 0; r < i; r++)o = 0 == (1 & r) ? e : n, this._counters[t + r] > o && (c |= u), u >>= 1; return c }, r.prototype._isStartEnd = function (t) { var e; for (e = 0; e < this.START_END.length; e++)if (this.START_END[e] === t) return !0; return !1 }, r.prototype._sumCounters = function (t, e) { var n, r = 0; for (n = t; n < e; n++)r += this._counters[n]; return r }, r.prototype._findStart = function () { var t, e, n, r = this, o = r._nextUnset(r._row); for (t = 1; t < this._counters.length; t++)if ((e = r._toPattern(t)) !== -1 && r._isStartEnd(e)) return o += r._sumCounters(0, t), n = o + r._sumCounters(t, t + 8), { start: o, end: n, startCounter: t, endCounter: t + 8 } }, e.a = r }, function (t, e, n) { "use strict"; function r() { i.a.call(this) } function o(t, e, n) { for (var r = n.length, o = 0, i = 0; r--;)i += t[n[r]], o += e[n[r]]; return i / o } var i = n(1), a = { CODE_SHIFT: { value: 98 }, CODE_C: { value: 99 }, CODE_B: { value: 100 }, CODE_A: { value: 101 }, START_CODE_A: { value: 103 }, START_CODE_B: { value: 104 }, START_CODE_C: { value: 105 }, STOP_CODE: { value: 106 }, CODE_PATTERN: { value: [[2, 1, 2, 2, 2, 2], [2, 2, 2, 1, 2, 2], [2, 2, 2, 2, 2, 1], [1, 2, 1, 2, 2, 3], [1, 2, 1, 3, 2, 2], [1, 3, 1, 2, 2, 2], [1, 2, 2, 2, 1, 3], [1, 2, 2, 3, 1, 2], [1, 3, 2, 2, 1, 2], [2, 2, 1, 2, 1, 3], [2, 2, 1, 3, 1, 2], [2, 3, 1, 2, 1, 2], [1, 1, 2, 2, 3, 2], [1, 2, 2, 1, 3, 2], [1, 2, 2, 2, 3, 1], [1, 1, 3, 2, 2, 2], [1, 2, 3, 1, 2, 2], [1, 2, 3, 2, 2, 1], [2, 2, 3, 2, 1, 1], [2, 2, 1, 1, 3, 2], [2, 2, 1, 2, 3, 1], [2, 1, 3, 2, 1, 2], [2, 2, 3, 1, 1, 2], [3, 1, 2, 1, 3, 1], [3, 1, 1, 2, 2, 2], [3, 2, 1, 1, 2, 2], [3, 2, 1, 2, 2, 1], [3, 1, 2, 2, 1, 2], [3, 2, 2, 1, 1, 2], [3, 2, 2, 2, 1, 1], [2, 1, 2, 1, 2, 3], [2, 1, 2, 3, 2, 1], [2, 3, 2, 1, 2, 1], [1, 1, 1, 3, 2, 3], [1, 3, 1, 1, 2, 3], [1, 3, 1, 3, 2, 1], [1, 1, 2, 3, 1, 3], [1, 3, 2, 1, 1, 3], [1, 3, 2, 3, 1, 1], [2, 1, 1, 3, 1, 3], [2, 3, 1, 1, 1, 3], [2, 3, 1, 3, 1, 1], [1, 1, 2, 1, 3, 3], [1, 1, 2, 3, 3, 1], [1, 3, 2, 1, 3, 1], [1, 1, 3, 1, 2, 3], [1, 1, 3, 3, 2, 1], [1, 3, 3, 1, 2, 1], [3, 1, 3, 1, 2, 1], [2, 1, 1, 3, 3, 1], [2, 3, 1, 1, 3, 1], [2, 1, 3, 1, 1, 3], [2, 1, 3, 3, 1, 1], [2, 1, 3, 1, 3, 1], [3, 1, 1, 1, 2, 3], [3, 1, 1, 3, 2, 1], [3, 3, 1, 1, 2, 1], [3, 1, 2, 1, 1, 3], [3, 1, 2, 3, 1, 1], [3, 3, 2, 1, 1, 1], [3, 1, 4, 1, 1, 1], [2, 2, 1, 4, 1, 1], [4, 3, 1, 1, 1, 1], [1, 1, 1, 2, 2, 4], [1, 1, 1, 4, 2, 2], [1, 2, 1, 1, 2, 4], [1, 2, 1, 4, 2, 1], [1, 4, 1, 1, 2, 2], [1, 4, 1, 2, 2, 1], [1, 1, 2, 2, 1, 4], [1, 1, 2, 4, 1, 2], [1, 2, 2, 1, 1, 4], [1, 2, 2, 4, 1, 1], [1, 4, 2, 1, 1, 2], [1, 4, 2, 2, 1, 1], [2, 4, 1, 2, 1, 1], [2, 2, 1, 1, 1, 4], [4, 1, 3, 1, 1, 1], [2, 4, 1, 1, 1, 2], [1, 3, 4, 1, 1, 1], [1, 1, 1, 2, 4, 2], [1, 2, 1, 1, 4, 2], [1, 2, 1, 2, 4, 1], [1, 1, 4, 2, 1, 2], [1, 2, 4, 1, 1, 2], [1, 2, 4, 2, 1, 1], [4, 1, 1, 2, 1, 2], [4, 2, 1, 1, 1, 2], [4, 2, 1, 2, 1, 1], [2, 1, 2, 1, 4, 1], [2, 1, 4, 1, 2, 1], [4, 1, 2, 1, 2, 1], [1, 1, 1, 1, 4, 3], [1, 1, 1, 3, 4, 1], [1, 3, 1, 1, 4, 1], [1, 1, 4, 1, 1, 3], [1, 1, 4, 3, 1, 1], [4, 1, 1, 1, 1, 3], [4, 1, 1, 3, 1, 1], [1, 1, 3, 1, 4, 1], [1, 1, 4, 1, 3, 1], [3, 1, 1, 1, 4, 1], [4, 1, 1, 1, 3, 1], [2, 1, 1, 4, 1, 2], [2, 1, 1, 2, 1, 4], [2, 1, 1, 2, 3, 2], [2, 3, 3, 1, 1, 1, 2]] }, SINGLE_CODE_ERROR: { value: .64 }, AVG_CODE_ERROR: { value: .3 }, FORMAT: { value: "code_128", writeable: !1 }, MODULE_INDICES: { value: { bar: [0, 2, 4], space: [1, 3, 5] } } }; r.prototype = Object.create(i.a.prototype, a), r.prototype.constructor = r, r.prototype._decodeCode = function (t, e) { var n, r, i, a = [0, 0, 0, 0, 0, 0], u = this, c = t, s = !u._row[c], f = 0, l = { error: Number.MAX_VALUE, code: -1, start: t, end: t, correction: { bar: 1, space: 1 } }; for (n = c; n < u._row.length; n++)if (u._row[n] ^ s) a[f]++; else { if (f === a.length - 1) { for (e && u._correct(a, e), r = 0; r < u.CODE_PATTERN.length; r++)(i = u._matchPattern(a, u.CODE_PATTERN[r])) < l.error && (l.code = r, l.error = i); return l.end = n, l.code === -1 || l.error > u.AVG_CODE_ERROR ? null : (u.CODE_PATTERN[l.code] && (l.correction.bar = o(u.CODE_PATTERN[l.code], a, this.MODULE_INDICES.bar), l.correction.space = o(u.CODE_PATTERN[l.code], a, this.MODULE_INDICES.space)), l) } f++, a[f] = 1, s = !s } return null }, r.prototype._correct = function (t, e) { this._correctBars(t, e.bar, this.MODULE_INDICES.bar), this._correctBars(t, e.space, this.MODULE_INDICES.space) }, r.prototype._findStart = function () { var t, e, n, r, i, a = [0, 0, 0, 0, 0, 0], u = this, c = u._nextSet(u._row), s = !1, f = 0, l = { error: Number.MAX_VALUE, code: -1, start: 0, end: 0, correction: { bar: 1, space: 1 } }; for (t = c; t < u._row.length; t++)if (u._row[t] ^ s) a[f]++; else { if (f === a.length - 1) { for (i = 0, r = 0; r < a.length; r++)i += a[r]; for (e = u.START_CODE_A; e <= u.START_CODE_C; e++)(n = u._matchPattern(a, u.CODE_PATTERN[e])) < l.error && (l.code = e, l.error = n); if (l.error < u.AVG_CODE_ERROR) return l.start = t - i, l.end = t, l.correction.bar = o(u.CODE_PATTERN[l.code], a, this.MODULE_INDICES.bar), l.correction.space = o(u.CODE_PATTERN[l.code], a, this.MODULE_INDICES.space), l; for (r = 0; r < 4; r++)a[r] = a[r + 2]; a[4] = 0, a[5] = 0, f-- } else f++; a[f] = 1, s = !s } return null }, r.prototype._decode = function () { var t, e, n = this, r = n._findStart(), o = null, i = !1, a = [], u = 0, c = 0, s = [], f = [], l = !1, d = !0; if (null === r) return null; switch (o = { code: r.code, start: r.start, end: r.end, correction: { bar: r.correction.bar, space: r.correction.space } }, f.push(o), c = o.code, o.code) { case n.START_CODE_A: t = n.CODE_A; break; case n.START_CODE_B: t = n.CODE_B; break; case n.START_CODE_C: t = n.CODE_C; break; default: return null }for (; !i;) { if (e = l, l = !1, null !== (o = n._decodeCode(o.end, o.correction))) switch (o.code !== n.STOP_CODE && (d = !0), o.code !== n.STOP_CODE && (s.push(o.code), u++, c += u * o.code), f.push(o), t) { case n.CODE_A: if (o.code < 64) a.push(String.fromCharCode(32 + o.code)); else if (o.code < 96) a.push(String.fromCharCode(o.code - 64)); else switch (o.code !== n.STOP_CODE && (d = !1), o.code) { case n.CODE_SHIFT: l = !0, t = n.CODE_B; break; case n.CODE_B: t = n.CODE_B; break; case n.CODE_C: t = n.CODE_C; break; case n.STOP_CODE: i = !0 }break; case n.CODE_B: if (o.code < 96) a.push(String.fromCharCode(32 + o.code)); else switch (o.code !== n.STOP_CODE && (d = !1), o.code) { case n.CODE_SHIFT: l = !0, t = n.CODE_A; break; case n.CODE_A: t = n.CODE_A; break; case n.CODE_C: t = n.CODE_C; break; case n.STOP_CODE: i = !0 }break; case n.CODE_C: if (o.code < 100) a.push(o.code < 10 ? "0" + o.code : o.code); else switch (o.code !== n.STOP_CODE && (d = !1), o.code) { case n.CODE_A: t = n.CODE_A; break; case n.CODE_B: t = n.CODE_B; break; case n.STOP_CODE: i = !0 } } else i = !0; e && (t = t === n.CODE_A ? n.CODE_B : n.CODE_A) } return null === o ? null : (o.end = n._nextUnset(n._row, o.end), n._verifyTrailingWhitespace(o) ? (c -= u * s[s.length - 1]) % 103 !== s[s.length - 1] ? null : a.length ? (d && a.splice(a.length - 1, 1), { code: a.join(""), start: r.start, end: o.end, codeset: t, startInfo: r, decodedCodes: f, endInfo: o }) : null : null) }, i.a.prototype._verifyTrailingWhitespace = function (t) { var e, n = this; return e = t.end + (t.end - t.start) / 2, e < n._row.length && n._matchRange(t.end, e, 0) ? t : null }, e.a = r }, function (t, e, n) { "use strict"; function r() { o.a.call(this) } var o = n(31), i = { IOQ: /[IOQ]/g, AZ09: /[A-Z0-9]{17}/ }; r.prototype = Object.create(o.a.prototype), r.prototype.constructor = r, r.prototype._decode = function () { var t = o.a.prototype._decode.apply(this); if (!t) return null; var e = t.code; return e ? (e = e.replace(i.IOQ, ""), e.match(i.AZ09) && this._checkChecksum(e) ? (t.code = e, t) : null) : null }, r.prototype._checkChecksum = function (t) { return !!t }, e.a = r }, function (t, e, n) { "use strict"; function r() { o.a.call(this) } var o = n(1), i = n(3), a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*", u = { ALPHABETH_STRING: { value: a }, ALPHABET: { value: a.split("").map(function (t) { return t.charCodeAt(0) }) }, CHARACTER_ENCODINGS: { value: [276, 328, 324, 322, 296, 292, 290, 336, 274, 266, 424, 420, 418, 404, 402, 394, 360, 356, 354, 308, 282, 344, 332, 326, 300, 278, 436, 434, 428, 422, 406, 410, 364, 358, 310, 314, 302, 468, 466, 458, 366, 374, 430, 294, 474, 470, 306, 350] }, ASTERISK: { value: 350 }, FORMAT: { value: "code_93", writeable: !1 } }; r.prototype = Object.create(o.a.prototype, u), r.prototype.constructor = r, r.prototype._decode = function () { var t, e, n, r, o = this, a = [0, 0, 0, 0, 0, 0], u = [], c = o._findStart(); if (!c) return null; r = o._nextSet(o._row, c.end); do { if (a = o._toCounters(r, a), (n = o._toPattern(a)) < 0) return null; if ((t = o._patternToChar(n)) < 0) return null; u.push(t), e = r, r += i.a.sum(a), r = o._nextSet(o._row, r) } while ("*" !== t); return u.pop(), u.length && o._verifyEnd(e, r, a) && o._verifyChecksums(u) ? (u = u.slice(0, u.length - 2), null === (u = o._decodeExtended(u)) ? null : { code: u.join(""), start: c.start, end: r, startInfo: c, decodedCodes: u }) : null }, r.prototype._verifyEnd = function (t, e) { return !(t === e || !this._row[e]) }, r.prototype._patternToChar = function (t) { var e, n = this; for (e = 0; e < n.CHARACTER_ENCODINGS.length; e++)if (n.CHARACTER_ENCODINGS[e] === t) return String.fromCharCode(n.ALPHABET[e]); return -1 }, r.prototype._toPattern = function (t) { for (var e = t.length, n = 0, r = 0, o = 0; o < e; o++)r += t[o]; for (var i = 0; i < e; i++) { var a = Math.round(9 * t[i] / r); if (a < 1 || a > 4) return -1; if (0 == (1 & i)) for (var u = 0; u < a; u++)n = n << 1 | 1; else n <<= a } return n }, r.prototype._findStart = function () { var t, e, n, r = this, o = r._nextSet(r._row), i = o, a = [0, 0, 0, 0, 0, 0], u = 0, c = !1; for (t = o; t < r._row.length; t++)if (r._row[t] ^ c) a[u]++; else { if (u === a.length - 1) { if (r._toPattern(a) === r.ASTERISK && (n = Math.floor(Math.max(0, i - (t - i) / 4)), r._matchRange(n, i, 0))) return { start: i, end: t }; for (i += a[0] + a[1], e = 0; e < 4; e++)a[e] = a[e + 2]; a[4] = 0, a[5] = 0, u-- } else u++; a[u] = 1, c = !c } return null }, r.prototype._decodeExtended = function (t) { for (var e = t.length, n = [], r = 0; r < e; r++) { var o = t[r]; if (o >= "a" && o <= "d") { if (r > e - 2) return null; var i = t[++r], a = i.charCodeAt(0), u = void 0; switch (o) { case "a": if (!(i >= "A" && i <= "Z")) return null; u = String.fromCharCode(a - 64); break; case "b": if (i >= "A" && i <= "E") u = String.fromCharCode(a - 38); else if (i >= "F" && i <= "J") u = String.fromCharCode(a - 11); else if (i >= "K" && i <= "O") u = String.fromCharCode(a + 16); else if (i >= "P" && i <= "S") u = String.fromCharCode(a + 43); else { if (!(i >= "T" && i <= "Z")) return null; u = String.fromCharCode(127) } break; case "c": if (i >= "A" && i <= "O") u = String.fromCharCode(a - 32); else { if ("Z" !== i) return null; u = ":" } break; case "d": if (!(i >= "A" && i <= "Z")) return null; u = String.fromCharCode(a + 32) }n.push(u) } else n.push(o) } return n }, r.prototype._verifyChecksums = function (t) { return this._matchCheckChar(t, t.length - 2, 20) && this._matchCheckChar(t, t.length - 1, 15) }, r.prototype._matchCheckChar = function (t, e, n) { var r = this, o = t.slice(0, e), i = o.length, a = o.reduce(function (t, e, o) { return t + ((o * -1 + (i - 1)) % n + 1) * r.ALPHABET.indexOf(e.charCodeAt(0)) }, 0); return this.ALPHABET[a % 47] === t[e].charCodeAt(0) }, e.a = r }, function (t, e, n) { "use strict"; function r() { o.a.call(this) } var o = n(4), i = { FORMAT: { value: "ean_2", writeable: !1 } }; r.prototype = Object.create(o.a.prototype, i), r.prototype.constructor = r, r.prototype.decode = function (t, e) { this._row = t; var n, r = 0, o = 0, i = e, a = this._row.length, u = [], c = []; for (o = 0; o < 2 && i < a; o++) { if (!(n = this._decodeCode(i))) return null; c.push(n), u.push(n.code % 10), n.code >= this.CODE_G_START && (r |= 1 << 1 - o), 1 != o && (i = this._nextSet(this._row, n.end), i = this._nextUnset(this._row, i)) } return 2 != u.length || parseInt(u.join("")) % 4 !== r ? null : { code: u.join(""), decodedCodes: c, end: n.end } }, e.a = r }, function (t, e, n) { "use strict"; function r() { a.a.call(this) } function o(t) { var e; for (e = 0; e < 10; e++)if (t === c[e]) return e; return null } function i(t) { var e, n = t.length, r = 0; for (e = n - 2; e >= 0; e -= 2)r += t[e]; for (r *= 3, e = n - 1; e >= 0; e -= 2)r += t[e]; return (r *= 3) % 10 } var a = n(4), u = { FORMAT: { value: "ean_5", writeable: !1 } }, c = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5]; r.prototype = Object.create(a.a.prototype, u), r.prototype.constructor = r, r.prototype.decode = function (t, e) { this._row = t; var n, r = 0, a = 0, u = e, c = this._row.length, s = [], f = []; for (a = 0; a < 5 && u < c; a++) { if (!(n = this._decodeCode(u))) return null; f.push(n), s.push(n.code % 10), n.code >= this.CODE_G_START && (r |= 1 << 4 - a), 4 != a && (u = this._nextSet(this._row, n.end), u = this._nextUnset(this._row, u)) } return 5 != s.length ? null : i(s) !== o(r) ? null : { code: s.join(""), decodedCodes: f, end: n.end } }, e.a = r }, function (t, e, n) { "use strict"; function r(t, e) { o.a.call(this, t, e) } var o = n(4), i = { FORMAT: { value: "ean_8", writeable: !1 } }; r.prototype = Object.create(o.a.prototype, i), r.prototype.constructor = r, r.prototype._decodePayload = function (t, e, n) { var r, o = this; for (r = 0; r < 4; r++) { if (!(t = o._decodeCode(t.end, o.CODE_G_START))) return null; e.push(t.code), n.push(t) } if (null === (t = o._findPattern(o.MIDDLE_PATTERN, t.end, !0, !1))) return null; for (n.push(t), r = 0; r < 4; r++) { if (!(t = o._decodeCode(t.end, o.CODE_G_START))) return null; n.push(t), e.push(t.code) } return t }, e.a = r }, function (t, e, n) { "use strict"; function r(t) { t = a()(o(), t), u.a.call(this, t), this.barSpaceRatio = [1, 1], t.normalizeBarSpaceWidth && (this.SINGLE_CODE_ERROR = .38, this.AVG_CODE_ERROR = .09) } function o() { var t = {}; return Object.keys(r.CONFIG_KEYS).forEach(function (e) { t[e] = r.CONFIG_KEYS[e].default }), t } var i = n(28), a = n.n(i), u = n(1), c = 1, s = 3, f = { START_PATTERN: { value: [c, c, c, c] }, STOP_PATTERN: { value: [c, c, s] }, CODE_PATTERN: { value: [[c, c, s, s, c], [s, c, c, c, s], [c, s, c, c, s], [s, s, c, c, c], [c, c, s, c, s], [s, c, s, c, c], [c, s, s, c, c], [c, c, c, s, s], [s, c, c, s, c], [c, s, c, s, c]] }, SINGLE_CODE_ERROR: { value: .78, writable: !0 }, AVG_CODE_ERROR: { value: .38, writable: !0 }, MAX_CORRECTION_FACTOR: { value: 5 }, FORMAT: { value: "i2of5" } }; r.prototype = Object.create(u.a.prototype, f), r.prototype.constructor = r, r.prototype._matchPattern = function (t, e) { if (this.config.normalizeBarSpaceWidth) { var n, r = [0, 0], o = [0, 0], i = [0, 0], a = this.MAX_CORRECTION_FACTOR, c = 1 / a; for (n = 0; n < t.length; n++)r[n % 2] += t[n], o[n % 2] += e[n]; for (i[0] = o[0] / r[0], i[1] = o[1] / r[1], i[0] = Math.max(Math.min(i[0], a), c), i[1] = Math.max(Math.min(i[1], a), c), this.barSpaceRatio = i, n = 0; n < t.length; n++)t[n] *= this.barSpaceRatio[n % 2] } return u.a.prototype._matchPattern.call(this, t, e) }, r.prototype._findPattern = function (t, e, n, r) { var o, i, a, u, c = [], s = this, f = 0, l = { error: Number.MAX_VALUE, code: -1, start: 0, end: 0 }, d = s.AVG_CODE_ERROR; for (n = n || !1, r = r || !1, e || (e = s._nextSet(s._row)), o = 0; o < t.length; o++)c[o] = 0; for (o = e; o < s._row.length; o++)if (s._row[o] ^ n) c[f]++; else { if (f === c.length - 1) { for (u = 0, a = 0; a < c.length; a++)u += c[a]; if ((i = s._matchPattern(c, t)) < d) return l.error = i, l.start = o - u, l.end = o, l; if (!r) return null; for (a = 0; a < c.length - 2; a++)c[a] = c[a + 2]; c[c.length - 2] = 0, c[c.length - 1] = 0, f-- } else f++; c[f] = 1, n = !n } return null }, r.prototype._findStart = function () { for (var t, e, n = this, r = n._nextSet(n._row), o = 1; !e;) { if (!(e = n._findPattern(n.START_PATTERN, r, !1, !0))) return null; if (o = Math.floor((e.end - e.start) / 4), (t = e.start - 10 * o) >= 0 && n._matchRange(t, e.start, 0)) return e; r = e.end, e = null } }, r.prototype._verifyTrailingWhitespace = function (t) { var e, n = this; return e = t.end + (t.end - t.start) / 2, e < n._row.length && n._matchRange(t.end, e, 0) ? t : null }, r.prototype._findEnd = function () { var t, e, n = this; return n._row.reverse(), t = n._findPattern(n.STOP_PATTERN), n._row.reverse(), null === t ? null : (e = t.start, t.start = n._row.length - t.end, t.end = n._row.length - e, null !== t ? n._verifyTrailingWhitespace(t) : null) }, r.prototype._decodePair = function (t) { var e, n, r = [], o = this; for (e = 0; e < t.length; e++) { if (!(n = o._decodeCode(t[e]))) return null; r.push(n) } return r }, r.prototype._decodeCode = function (t) { var e, n, r, o = this, i = 0, a = o.AVG_CODE_ERROR, u = { error: Number.MAX_VALUE, code: -1, start: 0, end: 0 }; for (e = 0; e < t.length; e++)i += t[e]; for (r = 0; r < o.CODE_PATTERN.length; r++)(n = o._matchPattern(t, o.CODE_PATTERN[r])) < u.error && (u.code = r, u.error = n); if (u.error < a) return u }, r.prototype._decodePayload = function (t, e, n) { for (var r, o, i = this, a = 0, u = t.length, c = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]; a < u;) { for (r = 0; r < 5; r++)c[0][r] = t[a] * this.barSpaceRatio[0], c[1][r] = t[a + 1] * this.barSpaceRatio[1], a += 2; if (!(o = i._decodePair(c))) return null; for (r = 0; r < o.length; r++)e.push(o[r].code + ""), n.push(o[r]) } return o }, r.prototype._verifyCounterLength = function (t) { return t.length % 10 == 0 }, r.prototype._decode = function () { var t, e, n, r = this, o = [], i = []; return (t = r._findStart()) ? (i.push(t), (e = r._findEnd()) ? (n = r._fillCounters(t.end, e.start, !1), r._verifyCounterLength(n) && r._decodePayload(n, o, i) ? o.length % 2 != 0 || o.length < 6 ? null : (i.push(e), { code: o.join(""), start: t.start, end: e.end, startInfo: t, decodedCodes: i }) : null) : null) : null }, r.CONFIG_KEYS = { normalizeBarSpaceWidth: { type: "boolean", default: !1, description: "If true, the reader tries to normalize thewidth-difference between bars and spaces" } }, e.a = r }, function (t, e, n) { "use strict"; function r(t, e) { o.a.call(this, t, e) } var o = n(4), i = { CODE_FREQUENCY: { value: [[56, 52, 50, 49, 44, 38, 35, 42, 41, 37], [7, 11, 13, 14, 19, 25, 28, 21, 22, 26]] }, STOP_PATTERN: { value: [1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7] }, FORMAT: { value: "upc_e", writeable: !1 } }; r.prototype = Object.create(o.a.prototype, i), r.prototype.constructor = r, r.prototype._decodePayload = function (t, e, n) { var r, o = this, i = 0; for (r = 0; r < 6; r++) { if (!(t = o._decodeCode(t.end))) return null; t.code >= o.CODE_G_START && (t.code = t.code - o.CODE_G_START, i |= 1 << 5 - r), e.push(t.code), n.push(t) } return o._determineParity(i, e) ? t : null }, r.prototype._determineParity = function (t, e) { var n, r; for (r = 0; r < this.CODE_FREQUENCY.length; r++)for (n = 0; n < this.CODE_FREQUENCY[r].length; n++)if (t === this.CODE_FREQUENCY[r][n]) return e.unshift(r), e.push(n), !0; return !1 }, r.prototype._convertToUPCA = function (t) { var e = [t[0]], n = t[t.length - 2]; return e = n <= 2 ? e.concat(t.slice(1, 3)).concat([n, 0, 0, 0, 0]).concat(t.slice(3, 6)) : 3 === n ? e.concat(t.slice(1, 4)).concat([0, 0, 0, 0, 0]).concat(t.slice(4, 6)) : 4 === n ? e.concat(t.slice(1, 5)).concat([0, 0, 0, 0, 0, t[5]]) : e.concat(t.slice(1, 6)).concat([0, 0, 0, 0, n]), e.push(t[t.length - 1]), e }, r.prototype._checksum = function (t) { return o.a.prototype._checksum.call(this, this._convertToUPCA(t)) }, r.prototype._findEnd = function (t, e) { return e = !0, o.a.prototype._findEnd.call(this, t, e) }, r.prototype._verifyTrailingWhitespace = function (t) { var e, n = this; if ((e = t.end + (t.end - t.start) / 2) < n._row.length && n._matchRange(t.end, e, 0)) return t }, e.a = r }, function (t, e, n) { "use strict"; function r(t, e) { o.a.call(this, t, e) } var o = n(4), i = { FORMAT: { value: "upc_a", writeable: !1 } }; r.prototype = Object.create(o.a.prototype, i), r.prototype.constructor = r, r.prototype._decode = function () { var t = o.a.prototype._decode.call(this); return t && t.code && 13 === t.code.length && "0" === t.code.charAt(0) ? (t.code = t.code.substring(1), t) : null }, e.a = r }, function (t, e) { function n(t, e) { return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t } t.exports = n }, function (t, e) { function n() { var t = new Float32Array(4); return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t } t.exports = n }, function (t, e) { function n(t, e) { var n = e[0], r = e[1], o = e[2], i = e[3], a = n * i - o * r; return a ? (a = 1 / a, t[0] = i * a, t[1] = -r * a, t[2] = -o * a, t[3] = n * a, t) : null } t.exports = n }, function (t, e) { function n(t, e, n) { return t[0] = e[0] * n, t[1] = e[1] * n, t } t.exports = n }, function (t, e) { function n(t, e, n) { var r = e[0], o = e[1]; return t[0] = n[0] * r + n[2] * o, t[1] = n[1] * r + n[3] * o, t } t.exports = n }, function (t, e) { function n(t) { var e = new Float32Array(3); return e[0] = t[0], e[1] = t[1], e[2] = t[2], e } t.exports = n }, function (t, e, n) { function r(t) { var e = -1, n = null == t ? 0 : t.length; for (this.clear(); ++e < n;) { var r = t[e]; this.set(r[0], r[1]) } } var o = n(122), i = n(123), a = n(124), u = n(125), c = n(126); r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r }, function (t, e, n) { function r(t) { var e = this.__data__ = new o(t); this.size = e.size } var o = n(10), i = n(149), a = n(150), u = n(151), c = n(152), s = n(153); r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = u, r.prototype.has = c, r.prototype.set = s, t.exports = r }, function (t, e, n) { var r = n(5), o = r.Uint8Array; t.exports = o }, function (t, e) { function n(t, e, n) { switch (n.length) { case 0: return t.call(e); case 1: return t.call(e, n[0]); case 2: return t.call(e, n[0], n[1]); case 3: return t.call(e, n[0], n[1], n[2]) }return t.apply(e, n) } t.exports = n }, function (t, e, n) { function r(t, e) { var n = a(t), r = !n && i(t), f = !n && !r && u(t), d = !n && !r && !f && s(t), h = n || r || f || d, p = h ? o(t.length, String) : [], v = p.length; for (var _ in t) !e && !l.call(t, _) || h && ("length" == _ || f && ("offset" == _ || "parent" == _) || d && ("buffer" == _ || "byteLength" == _ || "byteOffset" == _) || c(_, v)) || p.push(_); return p } var o = n(107), i = n(18), a = n(2), u = n(44), c = n(15), s = n(45), f = Object.prototype, l = f.hasOwnProperty; t.exports = r }, function (t, e) { function n(t, e) { for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;)o[n] = e(t[n], n, t); return o } t.exports = n }, function (t, e) { function n(t, e) { for (var n = -1, r = e.length, o = t.length; ++n < r;)t[o + n] = e[n]; return t } t.exports = n }, function (t, e, n) { var r = n(0), o = Object.create, i = function () { function t() { } return function (e) { if (!r(e)) return {}; if (o) return o(e); t.prototype = e; var n = new t; return t.prototype = void 0, n } }(); t.exports = i }, function (t, e, n) { function r(t, e, n, a, u) { var c = -1, s = t.length; for (n || (n = i), u || (u = []); ++c < s;) { var f = t[c]; e > 0 && n(f) ? e > 1 ? r(f, e - 1, n, a, u) : o(u, f) : a || (u[u.length] = f) } return u } var o = n(90), i = n(128); t.exports = r }, function (t, e, n) { var r = n(117), o = r(); t.exports = o }, function (t, e, n) { function r(t, e) { e = o(e, t); for (var n = 0, r = e.length; null != t && n < r;)t = t[i(e[n++])]; return n && n == r ? t : void 0 } var o = n(13), i = n(23); t.exports = r }, function (t, e) { function n(t, e) { return null != t && e in Object(t) } t.exports = n }, function (t, e, n) { function r(t) { return i(t) && o(t) == a } var o = n(8), i = n(6), a = "[object Arguments]"; t.exports = r }, function (t, e, n) { function r(t) { return !(!a(t) || i(t)) && (o(t) ? p : s).test(u(t)) } var o = n(25), i = n(132), a = n(0), u = n(155), c = /[\\^$.*+?()[\]{}|]/g, s = /^\[object .+?Constructor\]$/, f = Function.prototype, l = Object.prototype, d = f.toString, h = l.hasOwnProperty, p = RegExp("^" + d.call(h).replace(c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"); t.exports = r }, function (t, e, n) { function r(t) { return a(t) && i(t.length) && !!u[o(t)] } var o = n(8), i = n(26), a = n(6), u = {}; u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1, t.exports = r }, function (t, e, n) { function r(t) { if (!o(t)) return a(t); var e = i(t), n = []; for (var r in t) ("constructor" != r || !e && c.call(t, r)) && n.push(r); return n } var o = n(0), i = n(40), a = n(144), u = Object.prototype, c = u.hasOwnProperty; t.exports = r }, function (t, e, n) { function r(t, e, n, f, l) { t !== e && a(e, function (a, s) { if (c(a)) l || (l = new o), u(t, e, s, n, r, f, l); else { var d = f ? f(t[s], a, s + "", t, e, l) : void 0; void 0 === d && (d = a), i(t, s, d) } }, s) } var o = n(85), i = n(35), a = n(93), u = n(101), c = n(0), s = n(46); t.exports = r }, function (t, e, n) { function r(t, e, n, r, y, m, x) { var b = t[n], E = e[n], C = x.get(E); if (C) return void o(t, n, C); var O = m ? m(b, E, n + "", t, e, x) : void 0, A = void 0 === O; if (A) { var R = f(E), w = !R && d(E), T = !R && !w && _(E); O = E, R || w || T ? f(b) ? O = b : l(b) ? O = u(b) : w ? (A = !1, O = i(E, !0)) : T ? (A = !1, O = a(E, !0)) : O = [] : v(E) || s(E) ? (O = b, s(b) ? O = g(b) : (!p(b) || r && h(b)) && (O = c(E))) : A = !1 } A && (x.set(E, O), y(O, E, r, m, x), x.delete(E)), o(t, n, O) } var o = n(35), i = n(111), a = n(112), u = n(113), c = n(127), s = n(18), f = n(2), l = n(159), d = n(44), h = n(25), p = n(0), v = n(160), _ = n(45), g = n(164); t.exports = r }, function (t, e, n) { function r(t, e) { return o(t, e, function (e, n) { return i(t, n) }) } var o = n(103), i = n(158); t.exports = r }, function (t, e, n) { function r(t, e, n) { for (var r = -1, u = e.length, c = {}; ++r < u;) { var s = e[r], f = o(t, s); n(f, s) && i(c, a(s, t), f) } return c } var o = n(94), i = n(105), a = n(13); t.exports = r }, function (t, e, n) { function r(t, e) { return a(i(t, e, o), t + "") } var o = n(43), i = n(41), a = n(42); t.exports = r }, function (t, e, n) { function r(t, e, n, r) { if (!u(t)) return t; e = i(e, t); for (var s = -1, f = e.length, l = f - 1, d = t; null != d && ++s < f;) { var h = c(e[s]), p = n; if (s != l) { var v = d[h]; p = r ? r(v, h, d) : void 0, void 0 === p && (p = u(v) ? v : a(e[s + 1]) ? [] : {}) } o(d, h, p), d = d[h] } return t } var o = n(36), i = n(13), a = n(15), u = n(0), c = n(23); t.exports = r }, function (t, e, n) { var r = n(156), o = n(37), i = n(43), a = o ? function (t, e) { return o(t, "toString", { configurable: !0, enumerable: !1, value: r(e), writable: !0 }) } : i; t.exports = a }, function (t, e) { function n(t, e) { for (var n = -1, r = Array(t); ++n < t;)r[n] = e(n); return r } t.exports = n }, function (t, e, n) { function r(t) { if ("string" == typeof t) return t; if (a(t)) return i(t, r) + ""; if (u(t)) return f ? f.call(t) : ""; var e = t + ""; return "0" == e && 1 / t == -c ? "-0" : e } var o = n(11), i = n(89), a = n(2), u = n(27), c = 1 / 0, s = o ? o.prototype : void 0, f = s ? s.toString : void 0; t.exports = r }, function (t, e) { function n(t) { return function (e) { return t(e) } } t.exports = n }, function (t, e, n) { function r(t) { var e = new t.constructor(t.byteLength); return new o(e).set(new o(t)), e } var o = n(86); t.exports = r }, function (t, e, n) { (function (t) { function r(t, e) { if (e) return t.slice(); var n = t.length, r = s ? s(n) : new t.constructor(n); return t.copy(r), r } var o = n(5), i = "object" == typeof e && e && !e.nodeType && e, a = i && "object" == typeof t && t && !t.nodeType && t, u = a && a.exports === i, c = u ? o.Buffer : void 0, s = c ? c.allocUnsafe : void 0; t.exports = r }).call(e, n(29)(t)) }, function (t, e, n) { function r(t, e) { var n = e ? o(t.buffer) : t.buffer; return new t.constructor(n, t.byteOffset, t.length) } var o = n(110); t.exports = r }, function (t, e) { function n(t, e) { var n = -1, r = t.length; for (e || (e = Array(r)); ++n < r;)e[n] = t[n]; return e } t.exports = n }, function (t, e, n) { function r(t, e, n, r) { var a = !n; n || (n = {}); for (var u = -1, c = e.length; ++u < c;) { var s = e[u], f = r ? r(n[s], t[s], s, n, t) : void 0; void 0 === f && (f = t[s]), a ? i(n, s, f) : o(n, s, f) } return n } var o = n(36), i = n(21); t.exports = r }, function (t, e, n) { var r = n(5), o = r["__core-js_shared__"]; t.exports = o }, function (t, e, n) { function r(t) { return o(function (e, n) { var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, u = o > 2 ? n[2] : void 0; for (a = t.length > 3 && "function" == typeof a ? (o--, a) : void 0, u && i(n[0], n[1], u) && (a = o < 3 ? void 0 : a, o = 1), e = Object(e); ++r < o;) { var c = n[r]; c && t(e, c, r, a) } return e }) } var o = n(104), i = n(129); t.exports = r }, function (t, e) { function n(t) { return function (e, n, r) { for (var o = -1, i = Object(e), a = r(e), u = a.length; u--;) { var c = a[t ? u : ++o]; if (n(i[c], c, i) === !1) break } return e } } t.exports = n }, function (t, e, n) { function r(t) { return a(i(t, void 0, o), t + "") } var o = n(157), i = n(41), a = n(42); t.exports = r }, function (t, e, n) { function r(t) { var e = a.call(t, c), n = t[c]; try { t[c] = void 0; var r = !0 } catch (t) { } var o = u.call(t); return r && (e ? t[c] = n : delete t[c]), o } var o = n(11), i = Object.prototype, a = i.hasOwnProperty, u = i.toString, c = o ? o.toStringTag : void 0; t.exports = r }, function (t, e) { function n(t, e) { return null == t ? void 0 : t[e] } t.exports = n }, function (t, e, n) { function r(t, e, n) { e = o(e, t); for (var r = -1, f = e.length, l = !1; ++r < f;) { var d = s(e[r]); if (!(l = null != t && n(t, d))) break; t = t[d] } return l || ++r != f ? l : !!(f = null == t ? 0 : t.length) && c(f) && u(d, f) && (a(t) || i(t)) } var o = n(13), i = n(18), a = n(2), u = n(15), c = n(26), s = n(23); t.exports = r }, function (t, e, n) { function r() { this.__data__ = o ? o(null) : {}, this.size = 0 } var o = n(16); t.exports = r }, function (t, e) { function n(t) { var e = this.has(t) && delete this.__data__[t]; return this.size -= e ? 1 : 0, e } t.exports = n }, function (t, e, n) { function r(t) { var e = this.__data__; if (o) { var n = e[t]; return n === i ? void 0 : n } return u.call(e, t) ? e[t] : void 0 } var o = n(16), i = "__lodash_hash_undefined__", a = Object.prototype, u = a.hasOwnProperty; t.exports = r }, function (t, e, n) { function r(t) { var e = this.__data__; return o ? void 0 !== e[t] : a.call(e, t) } var o = n(16), i = Object.prototype, a = i.hasOwnProperty; t.exports = r }, function (t, e, n) { function r(t, e) { var n = this.__data__; return this.size += this.has(t) ? 0 : 1, n[t] = o && void 0 === e ? i : e, this } var o = n(16), i = "__lodash_hash_undefined__"; t.exports = r }, function (t, e, n) { function r(t) { return "function" != typeof t.constructor || a(t) ? {} : o(i(t)) } var o = n(91), i = n(39), a = n(40); t.exports = r }, function (t, e, n) { function r(t) { return a(t) || i(t) || !!(u && t && t[u]) } var o = n(11), i = n(18), a = n(2), u = o ? o.isConcatSpreadable : void 0; t.exports = r }, function (t, e, n) { function r(t, e, n) { if (!u(n)) return !1; var r = typeof e; return !!("number" == r ? i(n) && a(e, n.length) : "string" == r && e in n) && o(n[e], t) } var o = n(17), i = n(24), a = n(15), u = n(0); t.exports = r }, function (t, e, n) { function r(t, e) { if (o(t)) return !1; var n = typeof t; return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || (u.test(t) || !a.test(t) || null != e && t in Object(e)) } var o = n(2), i = n(27), a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, u = /^\w*$/; t.exports = r }, function (t, e) { function n(t) { var e = typeof t; return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t } t.exports = n }, function (t, e, n) { function r(t) { return !!i && i in t } var o = n(115), i = function () { var t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || ""); return t ? "Symbol(src)_1." + t : "" }(); t.exports = r }, function (t, e) { function n() { this.__data__ = [], this.size = 0 } t.exports = n }, function (t, e, n) { function r(t) { var e = this.__data__, n = o(e, t); return !(n < 0) && (n == e.length - 1 ? e.pop() : a.call(e, n, 1), --this.size, !0) } var o = n(12), i = Array.prototype, a = i.splice; t.exports = r }, function (t, e, n) { function r(t) { var e = this.__data__, n = o(e, t); return n < 0 ? void 0 : e[n][1] } var o = n(12); t.exports = r }, function (t, e, n) { function r(t) { return o(this.__data__, t) > -1 } var o = n(12); t.exports = r }, function (t, e, n) { function r(t, e) { var n = this.__data__, r = o(n, t); return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this } var o = n(12); t.exports = r }, function (t, e, n) { function r() { this.size = 0, this.__data__ = { hash: new o, map: new (a || i), string: new o } } var o = n(84), i = n(10), a = n(33); t.exports = r }, function (t, e, n) { function r(t) { var e = o(this, t).delete(t); return this.size -= e ? 1 : 0, e } var o = n(14); t.exports = r }, function (t, e, n) { function r(t) { return o(this, t).get(t) } var o = n(14); t.exports = r }, function (t, e, n) { function r(t) { return o(this, t).has(t) } var o = n(14); t.exports = r }, function (t, e, n) { function r(t, e) { var n = o(this, t), r = n.size; return n.set(t, e), this.size += n.size == r ? 0 : 1, this } var o = n(14); t.exports = r }, function (t, e, n) { function r(t) { var e = o(t, function (t) { return n.size === i && n.clear(), t }), n = e.cache; return e } var o = n(161), i = 500; t.exports = r }, function (t, e) { function n(t) { var e = []; if (null != t) for (var n in Object(t)) e.push(n); return e } t.exports = n }, function (t, e, n) { (function (t) { var r = n(38), o = "object" == typeof e && e && !e.nodeType && e, i = o && "object" == typeof t && t && !t.nodeType && t, a = i && i.exports === o, u = a && r.process, c = function () { try { return u && u.binding && u.binding("util") } catch (t) { } }(); t.exports = c }).call(e, n(29)(t)) }, function (t, e) { function n(t) { return o.call(t) } var r = Object.prototype, o = r.toString; t.exports = n }, function (t, e) { function n(t, e) { return function (n) { return t(e(n)) } } t.exports = n }, function (t, e) { function n(t) { var e = 0, n = 0; return function () { var a = i(), u = o - (a - n); if (n = a, u > 0) { if (++e >= r) return arguments[0] } else e = 0; return t.apply(void 0, arguments) } } var r = 800, o = 16, i = Date.now; t.exports = n }, function (t, e, n) { function r() { this.__data__ = new o, this.size = 0 } var o = n(10); t.exports = r }, function (t, e) { function n(t) { var e = this.__data__, n = e.delete(t); return this.size = e.size, n } t.exports = n }, function (t, e) { function n(t) { return this.__data__.get(t) } t.exports = n }, function (t, e) { function n(t) { return this.__data__.has(t) } t.exports = n }, function (t, e, n) { function r(t, e) { var n = this.__data__; if (n instanceof o) { var r = n.__data__; if (!i || r.length < u - 1) return r.push([t, e]), this.size = ++n.size, this; n = this.__data__ = new a(r) } return n.set(t, e), this.size = n.size, this } var o = n(10), i = n(33), a = n(34), u = 200; t.exports = r }, function (t, e, n) { var r = n(143), o = /^\./, i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, a = /\\(\\)?/g, u = r(function (t) { var e = []; return o.test(t) && e.push(""), t.replace(i, function (t, n, r, o) { e.push(r ? o.replace(a, "$1") : n || t) }), e }); t.exports = u }, function (t, e) { function n(t) { if (null != t) { try { return o.call(t) } catch (t) { } try { return t + "" } catch (t) { } } return "" } var r = Function.prototype, o = r.toString; t.exports = n }, function (t, e) { function n(t) { return function () { return t } } t.exports = n }, function (t, e, n) { function r(t) { return (null == t ? 0 : t.length) ? o(t, 1) : [] } var o = n(92); t.exports = r }, function (t, e, n) { function r(t, e) { return null != t && i(t, e, o) } var o = n(95), i = n(121); t.exports = r }, function (t, e, n) { function r(t) { return i(t) && o(t) } var o = n(24), i = n(6); t.exports = r }, function (t, e, n) { function r(t) { if (!a(t) || o(t) != u) return !1; var e = i(t); if (null === e) return !0; var n = l.call(e, "constructor") && e.constructor; return "function" == typeof n && n instanceof n && f.call(n) == d } var o = n(8), i = n(39), a = n(6), u = "[object Object]", c = Function.prototype, s = Object.prototype, f = c.toString, l = s.hasOwnProperty, d = f.call(Object); t.exports = r }, function (t, e, n) { function r(t, e) { if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i); var n = function () { var r = arguments, o = e ? e.apply(this, r) : r[0], i = n.cache; if (i.has(o)) return i.get(o); var a = t.apply(this, r); return n.cache = i.set(o, a) || i, a }; return n.cache = new (r.Cache || o), n } var o = n(34), i = "Expected a function"; r.Cache = o, t.exports = r }, function (t, e, n) { var r = n(102), o = n(118), i = o(function (t, e) { return null == t ? {} : r(t, e) }); t.exports = i }, function (t, e) { function n() { return !1 } t.exports = n }, function (t, e, n) { function r(t) { return o(t, i(t)) } var o = n(114), i = n(46); t.exports = r }, function (t, e, n) { function r(t) { return null == t ? "" : o(t) } var o = n(108); t.exports = r }, function (t, e, n) { t.exports = n(48) }]) });





$(function () {
    var App = {
        init: function () {
            Quagga.init(this.state, function (err) {
                if (err) {
                    console.log(err);
                    return;
                }
                App.attachListeners();
                App.checkCapabilities();
                Quagga.start();
            });
        },
        checkCapabilities: function () {
            var track = Quagga.CameraAccess.getActiveTrack();
            var capabilities = {};
            if (typeof track.getCapabilities === 'function') {
                capabilities = track.getCapabilities();
            }
            this.applySettingsVisibility('zoom', capabilities.zoom);
            this.applySettingsVisibility('torch', capabilities.torch);
        },
        updateOptionsForMediaRange: function (node, range) {
            console.log('updateOptionsForMediaRange', node, range);
            var NUM_STEPS = 6;
            var stepSize = (range.max - range.min) / NUM_STEPS;
            var option;
            var value;
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
            for (var i = 0; i <= NUM_STEPS; i++) {
                value = range.min + (stepSize * i);
                option = document.createElement('option');
                option.value = value;
                option.innerHTML = value;
                node.appendChild(option);
            }
        },
        applySettingsVisibility: function (setting, capability) {
            // depending on type of capability
            if (typeof capability === 'boolean') {
                var node = document.querySelector('input[name="settings_' + setting + '"]');
                if (node) {
                    node.parentNode.style.display = capability ? 'block' : 'none';
                }
                return;
            }
            if (window.MediaSettingsRange && capability instanceof window.MediaSettingsRange) {
                var node = document.querySelector('select[name="settings_' + setting + '"]');
                if (node) {
                    this.updateOptionsForMediaRange(node, capability);
                    node.parentNode.style.display = 'block';
                }
                return;
            }
        },
        initCameraSelection: function () {
            var streamLabel = Quagga.CameraAccess.getActiveStreamLabel();

            return Quagga.CameraAccess.enumerateVideoDevices()
                .then(function (devices) {
                    function pruneText(text) {
                        return text.length > 30 ? text.substr(0, 30) : text;
                    }
                    var $deviceSelection = document.getElementById("deviceSelection");
                    while ($deviceSelection.firstChild) {
                        $deviceSelection.removeChild($deviceSelection.firstChild);
                    }
                    devices.forEach(function (device) {
                        var $option = document.createElement("option");
                        $option.value = device.deviceId || device.id;
                        $option.appendChild(document.createTextNode(pruneText(device.label || device.deviceId || device.id)));
                        $option.selected = streamLabel === device.label;
                        $deviceSelection.appendChild($option);
                    });
                });
        },
        attachListeners: function () {
            var self = this;

            self.initCameraSelection();
            $(".controls").on("click", "button.stop", function (e) {
                e.preventDefault();
                Quagga.stop();
            });

            $(".controls .reader-config-group").on("change", "input, select", function (e) {
                e.preventDefault();
                var $target = $(e.target),
                    value = $target.attr("type") === "checkbox" ? $target.prop("checked") : $target.val(),
                    name = $target.attr("name"),
                    state = self._convertNameToState(name);

                console.log("Value of " + state + " changed to " + value);
                self.setState(state, value);
            });
        },
        _accessByPath: function (obj, path, val) {
            var parts = path.split('.'),
                depth = parts.length,
                setter = (typeof val !== "undefined") ? true : false;

            return parts.reduce(function (o, key, i) {
                if (setter && (i + 1) === depth) {
                    if (typeof o[key] === "object" && typeof val === "object") {
                        Object.assign(o[key], val);
                    } else {
                        o[key] = val;
                    }
                }
                return key in o ? o[key] : {};
            }, obj);
        },
        _convertNameToState: function (name) {
            return name.replace("_", ".").split("-").reduce(function (result, value) {
                return result + value.charAt(0).toUpperCase() + value.substring(1);
            });
        },
        detachListeners: function () {
            $(".controls").off("click", "button.stop");
            $(".controls .reader-config-group").off("change", "input, select");
        },
        applySetting: function (setting, value) {
            var track = Quagga.CameraAccess.getActiveTrack();
            if (track && typeof track.getCapabilities === 'function') {
                switch (setting) {
                    case 'zoom':
                        return track.applyConstraints({ advanced: [{ zoom: parseFloat(value) }] });
                    case 'torch':
                        return track.applyConstraints({ advanced: [{ torch: !!value }] });
                }
            }
        },
        setState: function (path, value) {
            var self = this;

            if (typeof self._accessByPath(self.inputMapper, path) === "function") {
                value = self._accessByPath(self.inputMapper, path)(value);
            }

            if (path.startsWith('settings.')) {
                var setting = path.substring(9);
                return self.applySetting(setting, value);
            }
            self._accessByPath(self.state, path, value);

            console.log(JSON.stringify(self.state));
            App.detachListeners();
            Quagga.stop();
            App.init();
        },
        inputMapper: {
            inputStream: {
                constraints: function (value) {
                    if (/^(\d+)x(\d+)$/.test(value)) {
                        var values = value.split('x');
                        return {
                            width: { min: parseInt(values[0]) },
                            height: { min: parseInt(values[1]) }
                        };
                    }
                    return {
                        deviceId: value
                    };
                }
            },
            numOfWorkers: function (value) {
                return parseInt(value);
            },
            decoder: {
                readers: function (value) {
                    if (value === 'ean_extended') {
                        return [{
                            format: "ean_reader",
                            config: {
                                supplements: [
                                    'ean_5_reader', 'ean_2_reader'
                                ]
                            }
                        }];
                    }
                    return [{
                        format: value + "_reader",
                        config: {}
                    }];
                }
            }
        },
        state: {
            inputStream: {
                type: "LiveStream",
                constraints: {
                    width: { min: 640 },
                    height: { min: 480 },
                    aspectRatio: { min: 1, max: 100 },
                    facingMode: "environment" // or user
                }
            },
            locator: {
                patchSize: "medium",
                halfSample: true
            },
            numOfWorkers: 2,
            frequency: 10,
            decoder: {
                readers: [{
                    format: "code_128_reader",
                    config: {}
                }]
            },
            locate: true
        },
        lastResult: null
    };

    App.init();

    Quagga.onProcessed(function (result) {
        var drawingCtx = Quagga.canvas.ctx.overlay,
            drawingCanvas = Quagga.canvas.dom.overlay;

        if (result) {
            if (result.boxes) {
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                result.boxes.filter(function (box) {
                    return box !== result.box;
                }).forEach(function (box) {
                    Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
                });
            }

            if (result.box) {
                Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
            }

            if (result.codeResult && result.codeResult.code) {
                Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
            }
        }
    });

    Quagga.onDetected(function (result) {
        var code = result.codeResult.code;

        if (App.lastResult !== code) {
            App.lastResult = code;
            var $node = null, canvas = Quagga.canvas.dom.image;

            $node = $('<li><div class="thumbnail"><div class="imgWrapper"><img /></div><div class="caption"><h4 class="code"></h4></div></div></li>');
            $node.find("img").attr("src", canvas.toDataURL());
            $node.find("h4.code").html(code);
            $("#result_strip ul.thumbnails").prepend($node);

            console.log(code);
            $("#codeContainer").empty();
            $("#codeContainer").prepend(code);
        }
    });
});

}