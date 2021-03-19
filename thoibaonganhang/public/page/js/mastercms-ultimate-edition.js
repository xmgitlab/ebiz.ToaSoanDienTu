/*
1.JQUERY - 1
2.JQUERY UI - 26
3.MENU - 330

/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function (e, t) {
	var n, r, i = typeof t,
		o = e.document,
		a = e.location,
		s = e.jQuery,
		u = e.$,
		l = {},
		c = [],
		p = "1.9.1",
		f = c.concat,
		d = c.push,
		h = c.slice,
		g = c.indexOf,
		m = l.toString,
		y = l.hasOwnProperty,
		v = p.trim,
		b = function (e, t) {
			return new b.fn.init(e, t, r)
		},
		x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		w = /\S+/g,
		T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		k = /^[\],:{}\s]*$/,
		E = /(?:^|:|,)(?:\s*\[)+/g,
		S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		j = /^-ms-/,
		D = /-([\da-z])/gi,
		L = function (e, t) {
			return t.toUpperCase()
		},
		H = function (e) {
			(o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready())
		},
		q = function () {
			o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
		};
	b.fn = b.prototype = {
		jquery: p,
		constructor: b,
		init: function (e, n, r) {
			var i, a;
			if (!e) return this;
			if ("string" == typeof e) {
				if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
				if (i[1]) {
					if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n))
						for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
					return this
				}
				if (a = o.getElementById(i[2]), a && a.parentNode) {
					if (a.id !== i[2]) return r.find(e);
					this.length = 1, this[0] = a
				}
				return this.context = o, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
		},
		selector: "",
		length: 0,
		size: function () {
			return this.length
		},
		toArray: function () {
			return h.call(this)
		},
		get: function (e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		},
		pushStack: function (e) {
			var t = b.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function (e, t) {
			return b.each(this, e, t)
		},
		ready: function (e) {
			return b.ready.promise().done(e), this
		},
		slice: function () {
			return this.pushStack(h.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		map: function (e) {
			return this.pushStack(b.map(this, function (t, n) {
				return e.call(t, n, t)
			}))
		},
		end: function () {
			return this.prevObject || this.constructor(null)
		},
		push: d,
		sort: [].sort,
		splice: [].splice
	}, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function () {
		var e, n, r, i, o, a, s = arguments[0] || {},
			u = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)
			if (null != (o = arguments[u]))
				for (i in o) e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r));
		return s
	}, b.extend({
		noConflict: function (t) {
			return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function (e) {
			e ? b.readyWait++ : b.ready(!0)
		},
		ready: function (e) {
			if (e === !0 ? !--b.readyWait : !b.isReady) {
				if (!o.body) return setTimeout(b.ready);
				b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"))
			}
		},
		isFunction: function (e) {
			return "function" === b.type(e)
		},
		isArray: Array.isArray || function (e) {
			return "array" === b.type(e)
		},
		isWindow: function (e) {
			return null != e && e == e.window
		},
		isNumeric: function (e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		type: function (e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
		},
		isPlainObject: function (e) {
			if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
			try {
				if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (n) {
				return !1
			}
			var r;
			for (r in e);
			return r === t || y.call(e, r)
		},
		isEmptyObject: function (e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		error: function (e) {
			throw Error(e)
		},
		parseHTML: function (e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || o;
			var r = C.exec(e),
				i = !n && [];
			return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
		},
		parseJSON: function (n) {
			return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t)
		},
		parseXML: function (n) {
			var r, i;
			if (!n || "string" != typeof n) return null;
			try {
				e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
			} catch (o) {
				r = t
			}
			return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r
		},
		noop: function () {},
		globalEval: function (t) {
			t && b.trim(t) && (e.execScript || function (t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function (e) {
			return e.replace(j, "ms-").replace(D, L)
		},
		nodeName: function (e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function (e, t, n) {
			var r, i = 0,
				o = e.length,
				a = M(e);
			if (n) {
				if (a) {
					for (; o > i; i++)
						if (r = t.apply(e[i], n), r === !1) break
				} else
					for (i in e)
						if (r = t.apply(e[i], n), r === !1) break
			} else if (a) {
				for (; o > i; i++)
					if (r = t.call(e[i], i, e[i]), r === !1) break
			} else
				for (i in e)
					if (r = t.call(e[i], i, e[i]), r === !1) break; return e
		},
		trim: v && !v.call("\ufeff\u00a0") ? function (e) {
			return null == e ? "" : v.call(e)
		} : function (e) {
			return null == e ? "" : (e + "").replace(T, "")
		},
		makeArray: function (e, t) {
			var n = t || [];
			return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
		},
		inArray: function (e, t, n) {
			var r;
			if (t) {
				if (g) return g.call(t, e, n);
				for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
					if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function (e, n) {
			var r = n.length,
				i = e.length,
				o = 0;
			if ("number" == typeof r)
				for (; r > o; o++) e[i++] = n[o];
			else
				while (n[o] !== t) e[i++] = n[o++];
			return e.length = i, e
		},
		grep: function (e, t, n) {
			var r, i = [],
				o = 0,
				a = e.length;
			for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
			return i
		},
		map: function (e, t, n) {
			var r, i = 0,
				o = e.length,
				a = M(e),
				s = [];
			if (a)
				for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
			else
				for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
			return f.apply([], s)
		},
		guid: 1,
		proxy: function (e, n) {
			var r, i, o;
			return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function () {
				return e.apply(n || this, r.concat(h.call(arguments)))
			}, i.guid = e.guid = e.guid || b.guid++, i) : t
		},
		access: function (e, n, r, i, o, a, s) {
			var u = 0,
				l = e.length,
				c = null == r;
			if ("object" === b.type(r)) {
				o = !0;
				for (u in r) b.access(e, n, u, r[u], !0, a, s)
			} else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
					return c.call(b(e), n)
				})), n))
				for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
			return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
		},
		now: function () {
			return (new Date).getTime()
		}
	}), b.ready.promise = function (t) {
		if (!n)
			if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready);
			else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1);
		else {
			o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
			var r = !1;
			try {
				r = null == e.frameElement && o.documentElement
			} catch (i) {}
			r && r.doScroll && function a() {
				if (!b.isReady) {
					try {
						r.doScroll("left")
					} catch (e) {
						return setTimeout(a, 50)
					}
					q(), b.ready()
				}
			}()
		}
		return n.promise(t)
	}, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
		l["[object " + t + "]"] = t.toLowerCase()
	});

	function M(e) {
		var t = e.length,
			n = b.type(e);
		return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	r = b(o);
	var _ = {};

	function F(e) {
		var t = _[e] = {};
		return b.each(e.match(w) || [], function (e, n) {
			t[n] = !0
		}), t
	}
	b.Callbacks = function (e) {
		e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
		var n, r, i, o, a, s, u = [],
			l = !e.once && [],
			c = function (t) {
				for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++)
					if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
						r = !1;
						break
					}
				n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable())
			},
			p = {
				add: function () {
					if (u) {
						var t = u.length;
						(function i(t) {
							b.each(t, function (t, n) {
								var r = b.type(n);
								"function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
							})
						})(arguments), n ? o = u.length : r && (s = t, c(r))
					}
					return this
				},
				remove: function () {
					return u && b.each(arguments, function (e, t) {
						var r;
						while ((r = b.inArray(t, u, r)) > -1) u.splice(r, 1), n && (o >= r && o--, a >= r && a--)
					}), this
				},
				has: function (e) {
					return e ? b.inArray(e, u) > -1 : !(!u || !u.length)
				},
				empty: function () {
					return u = [], this
				},
				disable: function () {
					return u = l = r = t, this
				},
				disabled: function () {
					return !u
				},
				lock: function () {
					return l = t, r || p.disable(), this
				},
				locked: function () {
					return !l
				},
				fireWith: function (e, t) {
					return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this
				},
				fire: function () {
					return p.fireWith(this, arguments), this
				},
				fired: function () {
					return !!i
				}
			};
		return p
	}, b.extend({
		Deferred: function (e) {
			var t = [
					["resolve", "done", b.Callbacks("once memory"), "resolved"],
					["reject", "fail", b.Callbacks("once memory"), "rejected"],
					["notify", "progress", b.Callbacks("memory")]
				],
				n = "pending",
				r = {
					state: function () {
						return n
					},
					always: function () {
						return i.done(arguments).fail(arguments), this
					},
					then: function () {
						var e = arguments;
						return b.Deferred(function (n) {
							b.each(t, function (t, o) {
								var a = o[0],
									s = b.isFunction(e[t]) && e[t];
								i[o[1]](function () {
									var e = s && s.apply(this, arguments);
									e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function (e) {
						return null != e ? b.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, b.each(t, function (e, o) {
				var a = o[2],
					s = o[3];
				r[o[1]] = a.add, s && a.add(function () {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function (e) {
			var t = 0,
				n = h.call(arguments),
				r = n.length,
				i = 1 !== r || e && b.isFunction(e.promise) ? r : 0,
				o = 1 === i ? e : b.Deferred(),
				a = function (e, t, n) {
					return function (r) {
						t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
					}
				},
				s, u, l;
			if (r > 1)
				for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
			return i || o.resolveWith(l, n), o.promise()
		}
	}), b.support = function () {
		var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
		if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
		s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
			getSetAttribute: "t" !== d.className,
			leadingWhitespace: 3 === d.firstChild.nodeType,
			tbody: !d.getElementsByTagName("tbody").length,
			htmlSerialize: !!d.getElementsByTagName("link").length,
			style: /top/.test(r.getAttribute("style")),
			hrefNormalized: "/a" === r.getAttribute("href"),
			opacity: /^0.5/.test(r.style.opacity),
			cssFloat: !!r.style.cssFloat,
			checkOn: !!a.value,
			optSelected: l.selected,
			enctype: !!o.createElement("form").enctype,
			html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
			boxModel: "CSS1Compat" === o.compatMode,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			boxSizingReliable: !0,
			pixelPosition: !1
		}, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled;
		try {
			delete d.test
		} catch (h) {
			t.deleteExpando = !1
		}
		a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
			t.noCloneEvent = !1
		}), d.cloneNode(!0).click());
		for (f in {
				submit: !0,
				change: !0,
				focusin: !0
			}) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
		return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function () {
			var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				u = o.getElementsByTagName("body")[0];
			u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
				width: "4px"
			}).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null)
		}), n = s = u = l = r = a = null, t
	}();
	var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		B = /([A-Z])/g;

	function P(e, n, r, i) {
		if (b.acceptData(e)) {
			var o, a, s = b.expando,
				u = "string" == typeof n,
				l = e.nodeType,
				p = l ? b.cache : e,
				f = l ? e[s] : e[s] && s;
			if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a
		}
	}

	function R(e, t, n) {
		if (b.acceptData(e)) {
			var r, i, o, a = e.nodeType,
				s = a ? b.cache : e,
				u = a ? e[b.expando] : b.expando;
			if (s[u]) {
				if (t && (o = n ? s[u] : s[u].data)) {
					b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" "));
					for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
					if (!(n ? $ : b.isEmptyObject)(o)) return
				}(n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
			}
		}
	}
	b.extend({
		cache: {},
		expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function (e) {
			return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !!e && !$(e)
		},
		data: function (e, t, n) {
			return P(e, t, n)
		},
		removeData: function (e, t) {
			return R(e, t)
		},
		_data: function (e, t, n) {
			return P(e, t, n, !0)
		},
		_removeData: function (e, t) {
			return R(e, t, !0)
		},
		acceptData: function (e) {
			if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
			var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
			return !t || t !== !0 && e.getAttribute("classid") === t
		}
	}), b.fn.extend({
		data: function (e, n) {
			var r, i, o = this[0],
				a = 0,
				s = null;
			if (e === t) {
				if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
					for (r = o.attributes; r.length > a; a++) i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i]));
					b._data(o, "parsedAttrs", !0)
				}
				return s
			}
			return "object" == typeof e ? this.each(function () {
				b.data(this, e)
			}) : b.access(this, function (n) {
				return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function () {
					b.data(this, e, n)
				}), t)
			}, null, n, arguments.length > 1, null, !0)
		},
		removeData: function (e) {
			return this.each(function () {
				b.removeData(this, e)
			})
		}
	});

	function W(e, n, r) {
		if (r === t && 1 === e.nodeType) {
			var i = "data-" + n.replace(B, "-$1").toLowerCase();
			if (r = e.getAttribute(i), "string" == typeof r) {
				try {
					r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r
				} catch (o) {}
				b.data(e, n, r)
			} else r = t
		}
		return r
	}

	function $(e) {
		var t;
		for (t in e)
			if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}
	b.extend({
		queue: function (e, n, r) {
			var i;
			return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t
		},
		dequeue: function (e, t) {
			t = t || "fx";
			var n = b.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = b._queueHooks(e, t),
				a = function () {
					b.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function (e, t) {
			var n = t + "queueHooks";
			return b._data(e, n) || b._data(e, n, {
				empty: b.Callbacks("once memory").add(function () {
					b._removeData(e, t + "queue"), b._removeData(e, n)
				})
			})
		}
	}), b.fn.extend({
		queue: function (e, n) {
			var r = 2;
			return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function () {
				var t = b.queue(this, e, n);
				b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
			})
		},
		dequeue: function (e) {
			return this.each(function () {
				b.dequeue(this, e)
			})
		},
		delay: function (e, t) {
			return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
				var r = setTimeout(t, e);
				n.stop = function () {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function (e) {
			return this.queue(e || "fx", [])
		},
		promise: function (e, n) {
			var r, i = 1,
				o = b.Deferred(),
				a = this,
				s = this.length,
				u = function () {
					--i || o.resolveWith(a, [a])
				};
			"string" != typeof e && (n = e, e = t), e = e || "fx";
			while (s--) r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
			return u(), o.promise(n)
		}
	});
	var I, z, X = /[\t\r\n]/g,
		U = /\r/g,
		V = /^(?:input|select|textarea|button|object)$/i,
		Y = /^(?:a|area)$/i,
		J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
		G = /^(?:checked|selected)$/i,
		Q = b.support.getSetAttribute,
		K = b.support.input;
	b.fn.extend({
		attr: function (e, t) {
			return b.access(this, b.attr, e, t, arguments.length > 1)
		},
		removeAttr: function (e) {
			return this.each(function () {
				b.removeAttr(this, e)
			})
		},
		prop: function (e, t) {
			return b.access(this, b.prop, e, t, arguments.length > 1)
		},
		removeProp: function (e) {
			return e = b.propFix[e] || e, this.each(function () {
				try {
					this[e] = t, delete this[e]
				} catch (n) {}
			})
		},
		addClass: function (e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				u = "string" == typeof e && e;
			if (b.isFunction(e)) return this.each(function (t) {
				b(this).addClass(e.call(this, t, this.className))
			});
			if (u)
				for (t = (e || "").match(w) || []; s > a; a++)
					if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
						o = 0;
						while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
						n.className = b.trim(r)
					}
			return this
		},
		removeClass: function (e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				u = 0 === arguments.length || "string" == typeof e && e;
			if (b.isFunction(e)) return this.each(function (t) {
				b(this).removeClass(e.call(this, t, this.className))
			});
			if (u)
				for (t = (e || "").match(w) || []; s > a; a++)
					if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
						o = 0;
						while (i = t[o++])
							while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
						n.className = e ? b.trim(r) : ""
					}
			return this
		},
		toggleClass: function (e, t) {
			var n = typeof e,
				r = "boolean" == typeof t;
			return b.isFunction(e) ? this.each(function (n) {
				b(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function () {
				if ("string" === n) {
					var o, a = 0,
						s = b(this),
						u = t,
						l = e.match(w) || [];
					while (o = l[a++]) u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o)
				} else(n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
			})
		},
		hasClass: function (e) {
			var t = " " + e + " ",
				n = 0,
				r = this.length;
			for (; r > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
			return !1
		},
		val: function (e) {
			var n, r, i, o = this[0]; {
				if (arguments.length) return i = b.isFunction(e), this.each(function (n) {
					var o, a = b(this);
					1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function (e) {
						return null == e ? "" : e + ""
					})), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
				});
				if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n)
			}
		}
	}), b.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = e.attributes.value;
					return !t || t.specified ? e.value : e.text
				}
			},
			select: {
				get: function (e) {
					var t, n, r = e.options,
						i = e.selectedIndex,
						o = "select-one" === e.type || 0 > i,
						a = o ? null : [],
						s = o ? i + 1 : r.length,
						u = 0 > i ? s : o ? i : 0;
					for (; s > u; u++)
						if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
							if (t = b(n).val(), o) return t;
							a.push(t)
						}
					return a
				},
				set: function (e, t) {
					var n = b.makeArray(t);
					return b(e).find("option").each(function () {
						this.selected = b.inArray(b(this).val(), n) >= 0
					}), n.length || (e.selectedIndex = -1), n
				}
			}
		},
		attr: function (e, n, r) {
			var o, a, s, u = e.nodeType;
			if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t))
		},
		removeAttr: function (e, t) {
			var n, r, i = 0,
				o = t && t.match(w);
			if (o && 1 === e.nodeType)
				while (n = o[i++]) r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r)
		},
		attrHooks: {
			type: {
				set: function (e, t) {
					if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function (e, n, r) {
			var i, o, a, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
		},
		propHooks: {
			tabIndex: {
				get: function (e) {
					var n = e.getAttributeNode("tabindex");
					return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
				}
			}
		}
	}), z = {
		get: function (e, n) {
			var r = b.prop(e, n),
				i = "boolean" == typeof r && e.getAttribute(n),
				o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
			return o && o.value !== !1 ? n.toLowerCase() : t
		},
		set: function (e, t, n) {
			return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, K && Q || (b.attrHooks.value = {
		get: function (e, n) {
			var r = e.getAttributeNode(n);
			return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
		},
		set: function (e, n, r) {
			return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r)
		}
	}), Q || (I = b.valHooks.button = {
		get: function (e, n) {
			var r = e.getAttributeNode(n);
			return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
		},
		set: function (e, n, r) {
			var i = e.getAttributeNode(r);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
		}
	}, b.attrHooks.contenteditable = {
		get: I.get,
		set: function (e, t, n) {
			I.set(e, "" === t ? !1 : t, n)
		}
	}, b.each(["width", "height"], function (e, n) {
		b.attrHooks[n] = b.extend(b.attrHooks[n], {
			set: function (e, r) {
				return "" === r ? (e.setAttribute(n, "auto"), r) : t
			}
		})
	})), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function (e, n) {
		b.attrHooks[n] = b.extend(b.attrHooks[n], {
			get: function (e) {
				var r = e.getAttribute(n, 2);
				return null == r ? t : r
			}
		})
	}), b.each(["href", "src"], function (e, t) {
		b.propHooks[t] = {
			get: function (e) {
				return e.getAttribute(t, 4)
			}
		}
	})), b.support.style || (b.attrHooks.style = {
		get: function (e) {
			return e.style.cssText || t
		},
		set: function (e, t) {
			return e.style.cssText = t + ""
		}
	}), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
		get: function (e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	})), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function () {
		b.valHooks[this] = {
			get: function (e) {
				return null === e.getAttribute("value") ? "on" : e.value
			}
		}
	}), b.each(["radio", "checkbox"], function () {
		b.valHooks[this] = b.extend(b.valHooks[this], {
			set: function (e, n) {
				return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
			}
		})
	});
	var Z = /^(?:input|select|textarea)$/i,
		et = /^key/,
		tt = /^(?:mouse|contextmenu)|click/,
		nt = /^(?:focusinfocus|focusoutblur)$/,
		rt = /^([^.]*)(?:\.(.+)|)$/;

	function it() {
		return !0
	}

	function ot() {
		return !1
	}
	b.event = {
			global: {},
			add: function (e, n, r, o, a) {
				var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
				if (v) {
					r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
						return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments)
					}, f.elem = e), n = (n || "").match(w) || [""], l = n.length;
					while (l--) s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({
						type: g,
						origType: y,
						data: o,
						handler: r,
						guid: r.guid,
						selector: a,
						needsContext: a && b.expr.match.needsContext.test(a),
						namespace: m.join(".")
					}, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0;
					e = null
				}
			},
			remove: function (e, t, n, r, i) {
				var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
				if (m && (c = m.events)) {
					t = (t || "").match(w) || [""], l = t.length;
					while (l--)
						if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
							p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;
							while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
							u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d])
						} else
							for (d in c) b.event.remove(e, d + t[l], n, r, !0);
					b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"))
				}
			},
			trigger: function (n, r, i, a) {
				var s, u, l, c, p, f, d, h = [i || o],
					g = y.call(n, "type") ? n.type : n,
					m = y.call(n, "namespace") ? n.namespace.split(".") : [];
				if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
					if (!a && !p.noBubble && !b.isWindow(i)) {
						for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) h.push(l), f = l;
						f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e)
					}
					d = 0;
					while ((l = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
					if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
						f = i[u], f && (i[u] = null), b.event.triggered = g;
						try {
							i[g]()
						} catch (v) {}
						b.event.triggered = t, f && (i[u] = f)
					}
					return n.result
				}
			},
			dispatch: function (e) {
				e = b.event.fix(e);
				var n, r, i, o, a, s = [],
					u = h.call(arguments),
					l = (b._data(this, "events") || {})[e.type] || [],
					c = b.event.special[e.type] || {};
				if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
					s = b.event.handlers.call(this, e, l), n = 0;
					while ((o = s[n++]) && !e.isPropagationStopped()) {
						e.currentTarget = o.elem, a = 0;
						while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
					}
					return c.postDispatch && c.postDispatch.call(this, e), e.result
				}
			},
			handlers: function (e, n) {
				var r, i, o, a, s = [],
					u = n.delegateCount,
					l = e.target;
				if (u && l.nodeType && (!e.button || "click" !== e.type))
					for (; l != this; l = l.parentNode || this)
						if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
							for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i);
							o.length && s.push({
								elem: l,
								handlers: o
							})
						}
				return n.length > u && s.push({
					elem: this,
					handlers: n.slice(u)
				}), s
			},
			fix: function (e) {
				if (e[b.expando]) return e;
				var t, n, r, i = e.type,
					a = e,
					s = this.fixHooks[i];
				s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length;
				while (t--) n = r[t], e[n] = a[n];
				return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function (e, t) {
					return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function (e, n) {
					var r, i, a, s = n.button,
						u = n.fromElement;
					return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
				}
			},
			special: {
				load: {
					noBubble: !0
				},
				click: {
					trigger: function () {
						return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
					}
				},
				focus: {
					trigger: function () {
						if (this !== o.activeElement && this.focus) try {
							return this.focus(), !1
						} catch (e) {}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function () {
						return this === o.activeElement && this.blur ? (this.blur(), !1) : t
					},
					delegateType: "focusout"
				},
				beforeunload: {
					postDispatch: function (e) {
						e.result !== t && (e.originalEvent.returnValue = e.result)
					}
				}
			},
			simulate: function (e, t, n, r) {
				var i = b.extend(new b.Event, n, {
					type: e,
					isSimulated: !0,
					originalEvent: {}
				});
				r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
			}
		}, b.removeEvent = o.removeEventListener ? function (e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n, !1)
		} : function (e, t, n) {
			var r = "on" + t;
			e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
		}, b.Event = function (e, n) {
			return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n)
		}, b.Event.prototype = {
			isDefaultPrevented: ot,
			isPropagationStopped: ot,
			isImmediatePropagationStopped: ot,
			preventDefault: function () {
				var e = this.originalEvent;
				this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
			},
			stopPropagation: function () {
				var e = this.originalEvent;
				this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
			},
			stopImmediatePropagation: function () {
				this.isImmediatePropagationStopped = it, this.stopPropagation()
			}
		}, b.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}, function (e, t) {
			b.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function (e) {
					var n, r = this,
						i = e.relatedTarget,
						o = e.handleObj;
					return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
				}
			}
		}), b.support.submitBubbles || (b.event.special.submit = {
			setup: function () {
				return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function (e) {
					var n = e.target,
						r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
					r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function (e) {
						e._submit_bubble = !0
					}), b._data(r, "submitBubbles", !0))
				}), t)
			},
			postDispatch: function (e) {
				e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
			},
			teardown: function () {
				return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t)
			}
		}), b.support.changeBubbles || (b.event.special.change = {
			setup: function () {
				return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function (e) {
					"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
				}), b.event.add(this, "click._change", function (e) {
					this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
				})), !1) : (b.event.add(this, "beforeactivate._change", function (e) {
					var t = e.target;
					Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function (e) {
						!this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
					}), b._data(t, "changeBubbles", !0))
				}), t)
			},
			handle: function (e) {
				var n = e.target;
				return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
			},
			teardown: function () {
				return b.event.remove(this, "._change"), !Z.test(this.nodeName)
			}
		}), b.support.focusinBubbles || b.each({
			focus: "focusin",
			blur: "focusout"
		}, function (e, t) {
			var n = 0,
				r = function (e) {
					b.event.simulate(t, e.target, b.event.fix(e), !0)
				};
			b.event.special[t] = {
				setup: function () {
					0 === n++ && o.addEventListener(e, r, !0)
				},
				teardown: function () {
					0 === --n && o.removeEventListener(e, r, !0)
				}
			}
		}), b.fn.extend({
			on: function (e, n, r, i, o) {
				var a, s;
				if ("object" == typeof e) {
					"string" != typeof n && (r = r || n, n = t);
					for (a in e) this.on(a, n, r, e[a], o);
					return this
				}
				if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
				else if (!i) return this;
				return 1 === o && (s = i, i = function (e) {
					return b().off(e), s.apply(this, arguments)
				}, i.guid = s.guid || (s.guid = b.guid++)), this.each(function () {
					b.event.add(this, e, i, r, n)
				})
			},
			one: function (e, t, n, r) {
				return this.on(e, t, n, r, 1)
			},
			off: function (e, n, r) {
				var i, o;
				if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
				if ("object" == typeof e) {
					for (o in e) this.off(o, n, e[o]);
					return this
				}
				return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
					b.event.remove(this, e, r, n)
				})
			},
			bind: function (e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function (e, t) {
				return this.off(e, null, t)
			},
			delegate: function (e, t, n, r) {
				return this.on(t, e, n, r)
			},
			undelegate: function (e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			},
			trigger: function (e, t) {
				return this.each(function () {
					b.event.trigger(e, t, this)
				})
			},
			triggerHandler: function (e, n) {
				var r = this[0];
				return r ? b.event.trigger(e, n, r, !0) : t
			}
		}),
		function (e, t) {
			var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date,
				w = e.document,
				T = {},
				N = 0,
				C = 0,
				k = it(),
				E = it(),
				S = it(),
				A = typeof t,
				j = 1 << 31,
				D = [],
				L = D.pop,
				H = D.push,
				q = D.slice,
				M = D.indexOf || function (e) {
					var t = 0,
						n = this.length;
					for (; n > t; t++)
						if (this[t] === e) return t;
					return -1
				},
				_ = "[\\x20\\t\\r\\n\\f]",
				F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				O = F.replace("w", "w#"),
				B = "([*^$|!~]?=)",
				P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]",
				R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)",
				W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
				$ = RegExp("^" + _ + "*," + _ + "*"),
				I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"),
				z = RegExp(R),
				X = RegExp("^" + O + "$"),
				U = {
					ID: RegExp("^#(" + F + ")"),
					CLASS: RegExp("^\\.(" + F + ")"),
					NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
					TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
					ATTR: RegExp("^" + P),
					PSEUDO: RegExp("^" + R),
					CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
					needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
				},
				V = /[\x20\t\r\n\f]*[+~]/,
				Y = /^[^{]+\{\s*\[native code/,
				J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				G = /^(?:input|select|textarea|button)$/i,
				Q = /^h\d$/i,
				K = /'|\\/g,
				Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
				et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
				tt = function (e, t) {
					var n = "0x" + t - 65536;
					return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
				};
			try {
				q.call(w.documentElement.childNodes, 0)[0].nodeType
			} catch (nt) {
				q = function (e) {
					var t, n = [];
					while (t = this[e++]) n.push(t);
					return n
				}
			}

			function rt(e) {
				return Y.test(e + "")
			}

			function it() {
				var e, t = [];
				return e = function (n, r) {
					return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
				}
			}

			function ot(e) {
				return e[x] = !0, e
			}

			function at(e) {
				var t = p.createElement("div");
				try {
					return e(t)
				} catch (n) {
					return !1
				} finally {
					t = null
				}
			}

			function st(e, t, n, r) {
				var i, o, a, s, u, l, f, g, m, v;
				if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n;
				if (1 !== (s = t.nodeType) && 9 !== s) return [];
				if (!d && !r) {
					if (i = J.exec(e))
						if (a = i[1]) {
							if (9 === s) {
								if (o = t.getElementById(a), !o || !o.parentNode) return n;
								if (o.id === a) return n.push(o), n
							} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n
						} else {
							if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n;
							if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n
						}
					if (T.qsa && !h.test(e)) {
						if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
							l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length;
							while (u--) l[u] = g + dt(l[u]);
							m = V.test(e) && t.parentNode || t, v = l.join(",")
						}
						if (v) try {
							return H.apply(n, q.call(m.querySelectorAll(v), 0)), n
						} catch (b) {} finally {
							f || t.removeAttribute("id")
						}
					}
				}
				return wt(e.replace(W, "$1"), t, n, r)
			}
			a = st.isXML = function (e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return t ? "HTML" !== t.nodeName : !1
			}, c = st.setDocument = function (e) {
				var n = e ? e.ownerDocument || e : w;
				return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function (e) {
					return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
				}), T.attributes = at(function (e) {
					e.innerHTML = "<select></select>";
					var t = typeof e.lastChild.getAttribute("multiple");
					return "boolean" !== t && "string" !== t
				}), T.getByClassName = at(function (e) {
					return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
				}), T.getByName = at(function (e) {
					e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild);
					var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
					return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t
				}), i.attrHandle = at(function (e) {
					return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
				}) ? {} : {
					href: function (e) {
						return e.getAttribute("href", 2)
					},
					type: function (e) {
						return e.getAttribute("type")
					}
				}, T.getIdNotName ? (i.find.ID = function (e, t) {
					if (typeof t.getElementById !== A && !d) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, i.filter.ID = function (e) {
					var t = e.replace(et, tt);
					return function (e) {
						return e.getAttribute("id") === t
					}
				}) : (i.find.ID = function (e, n) {
					if (typeof n.getElementById !== A && !d) {
						var r = n.getElementById(e);
						return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : []
					}
				}, i.filter.ID = function (e) {
					var t = e.replace(et, tt);
					return function (e) {
						var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), i.find.TAG = T.tagNameNoComments ? function (e, n) {
					return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
				} : function (e, t) {
					var n, r = [],
						i = 0,
						o = t.getElementsByTagName(e);
					if ("*" === e) {
						while (n = o[i++]) 1 === n.nodeType && r.push(n);
						return r
					}
					return o
				}, i.find.NAME = T.getByName && function (e, n) {
					return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t
				}, i.find.CLASS = T.getByClassName && function (e, n) {
					return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e)
				}, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function (e) {
					e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked")
				}), at(function (e) {
					e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
				})), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function (e) {
					T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R)
				}), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ? function (e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function (e, t) {
					if (t)
						while (t = t.parentNode)
							if (t === e) return !0;
					return !1
				}, v = f.compareDocumentPosition ? function (e, t) {
					var r;
					return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
				} : function (e, t) {
					var r, i = 0,
						o = e.parentNode,
						a = t.parentNode,
						s = [e],
						l = [t];
					if (e === t) return u = !0, 0;
					if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0;
					if (o === a) return ut(e, t);
					r = e;
					while (r = r.parentNode) s.unshift(r);
					r = t;
					while (r = r.parentNode) l.unshift(r);
					while (s[i] === l[i]) i++;
					return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
				}, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p
			}, st.matches = function (e, t) {
				return st(e, null, null, t)
			}, st.matchesSelector = function (e, t) {
				if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try {
					var n = m.call(e, t);
					if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (r) {}
				return st(t, p, null, [e]).length > 0
			}, st.contains = function (e, t) {
				return (e.ownerDocument || e) !== p && c(e), y(e, t)
			}, st.attr = function (e, t) {
				var n;
				return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
			}, st.error = function (e) {
				throw Error("Syntax error, unrecognized expression: " + e)
			}, st.uniqueSort = function (e) {
				var t, n = [],
					r = 1,
					i = 0;
				if (u = !T.detectDuplicates, e.sort(v), u) {
					for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
					while (i--) e.splice(n[i], 1)
				}
				return e
			};

			function ut(e, t) {
				var n = t && e,
					r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
				if (r) return r;
				if (n)
					while (n = n.nextSibling)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function lt(e) {
				return function (t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}

			function ct(e) {
				return function (t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}

			function pt(e) {
				return ot(function (t) {
					return t = +t, ot(function (n, r) {
						var i, o = e([], n.length, t),
							a = o.length;
						while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
					})
				})
			}
			o = st.getText = function (e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else
					for (; t = e[r]; r++) n += o(t);
				return n
			}, i = st.selectors = {
				cacheLength: 50,
				createPseudo: ot,
				match: U,
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
					ATTR: function (e) {
						return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function (e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e
					},
					PSEUDO: function (e) {
						var t, n = !e[5] && e[2];
						return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function (e) {
						return "*" === e ? function () {
							return !0
						} : (e = e.replace(et, tt).toLowerCase(), function (t) {
							return t.nodeName && t.nodeName.toLowerCase() === e
						})
					},
					CLASS: function (e) {
						var t = k[e + " "];
						return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function (e) {
							return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
						})
					},
					ATTR: function (e, t, n) {
						return function (r) {
							var i = st.attr(r, e);
							return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
						}
					},
					CHILD: function (e, t, n, r, i) {
						var o = "nth" !== e.slice(0, 3),
							a = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === r && 0 === i ? function (e) {
							return !!e.parentNode
						} : function (t, n, u) {
							var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
								m = t.parentNode,
								y = s && t.nodeName.toLowerCase(),
								v = !u && !s;
							if (m) {
								if (o) {
									while (g) {
										p = t;
										while (p = p[g])
											if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
										h = g = "only" === e && !h && "nextSibling"
									}
									return !0
								}
								if (h = [a ? m.firstChild : m.lastChild], a && v) {
									c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d];
									while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
										if (1 === p.nodeType && ++f && p === t) {
											c[e] = [N, d, f];
											break
										}
								} else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1];
								else
									while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
										if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0
							}
						}
					},
					PSEUDO: function (e, t) {
						var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
						return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function (e, n) {
							var i, o = r(e, t),
								a = o.length;
							while (a--) i = M.call(e, o[a]), e[i] = !(n[i] = o[a])
						}) : function (e) {
							return r(e, 0, n)
						}) : r
					}
				},
				pseudos: {
					not: ot(function (e) {
						var t = [],
							n = [],
							r = s(e.replace(W, "$1"));
						return r[x] ? ot(function (e, t, n, i) {
							var o, a = r(e, null, i, []),
								s = e.length;
							while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
						}) : function (e, i, o) {
							return t[0] = e, r(t, null, o, n), !n.pop()
						}
					}),
					has: ot(function (e) {
						return function (t) {
							return st(e, t).length > 0
						}
					}),
					contains: ot(function (e) {
						return function (t) {
							return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
						}
					}),
					lang: ot(function (e) {
						return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
							function (t) {
								var n;
								do
									if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
								while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function (t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function (e) {
						return e === f
					},
					focus: function (e) {
						return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function (e) {
						return e.disabled === !1
					},
					disabled: function (e) {
						return e.disabled === !0
					},
					checked: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function (e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					empty: function (e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
						return !0
					},
					parent: function (e) {
						return !i.pseudos.empty(e)
					},
					header: function (e) {
						return Q.test(e.nodeName)
					},
					input: function (e) {
						return G.test(e.nodeName)
					},
					button: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function (e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
					},
					first: pt(function () {
						return [0]
					}),
					last: pt(function (e, t) {
						return [t - 1]
					}),
					eq: pt(function (e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: pt(function (e, t) {
						var n = 0;
						for (; t > n; n += 2) e.push(n);
						return e
					}),
					odd: pt(function (e, t) {
						var n = 1;
						for (; t > n; n += 2) e.push(n);
						return e
					}),
					lt: pt(function (e, t, n) {
						var r = 0 > n ? n + t : n;
						for (; --r >= 0;) e.push(r);
						return e
					}),
					gt: pt(function (e, t, n) {
						var r = 0 > n ? n + t : n;
						for (; t > ++r;) e.push(r);
						return e
					})
				}
			};
			for (n in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) i.pseudos[n] = lt(n);
			for (n in {
					submit: !0,
					reset: !0
				}) i.pseudos[n] = ct(n);

			function ft(e, t) {
				var n, r, o, a, s, u, l, c = E[e + " "];
				if (c) return t ? 0 : c.slice(0);
				s = e, u = [], l = i.preFilter;
				while (s) {
					(!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({
						value: n,
						type: r[0].replace(W, " ")
					}), s = s.slice(n.length));
					for (a in i.filter) !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({
						value: n,
						type: a,
						matches: r
					}), s = s.slice(n.length));
					if (!n) break
				}
				return t ? s.length : s ? st.error(e) : E(e, u).slice(0)
			}

			function dt(e) {
				var t = 0,
					n = e.length,
					r = "";
				for (; n > t; t++) r += e[t].value;
				return r
			}

			function ht(e, t, n) {
				var i = t.dir,
					o = n && "parentNode" === i,
					a = C++;
				return t.first ? function (t, n, r) {
					while (t = t[i])
						if (1 === t.nodeType || o) return e(t, n, r)
				} : function (t, n, s) {
					var u, l, c, p = N + " " + a;
					if (s) {
						while (t = t[i])
							if ((1 === t.nodeType || o) && e(t, n, s)) return !0
					} else
						while (t = t[i])
							if (1 === t.nodeType || o)
								if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
									if ((u = l[1]) === !0 || u === r) return u === !0
								} else if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) return !0
				}
			}

			function gt(e) {
				return e.length > 1 ? function (t, n, r) {
					var i = e.length;
					while (i--)
						if (!e[i](t, n, r)) return !1;
					return !0
				} : e[0]
			}

			function mt(e, t, n, r, i) {
				var o, a = [],
					s = 0,
					u = e.length,
					l = null != t;
				for (; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
				return a
			}

			function yt(e, t, n, r, i, o) {
				return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function (o, a, s, u) {
					var l, c, p, f = [],
						d = [],
						h = a.length,
						g = o || xt(t || "*", s.nodeType ? [s] : s, []),
						m = !e || !o && t ? g : mt(g, f, e, s, u),
						y = n ? i || (o ? e : h || r) ? [] : a : m;
					if (n && n(m, y, s, u), r) {
						l = mt(y, d), r(l, [], s, u), c = l.length;
						while (c--)(p = l[c]) && (y[d[c]] = !(m[d[c]] = p))
					}
					if (o) {
						if (i || e) {
							if (i) {
								l = [], c = y.length;
								while (c--)(p = y[c]) && l.push(m[c] = p);
								i(null, y = [], l, u)
							}
							c = y.length;
							while (c--)(p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
						}
					} else y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
				})
			}

			function vt(e) {
				var t, n, r, o = e.length,
					a = i.relative[e[0].type],
					s = a || i.relative[" "],
					u = a ? 1 : 0,
					c = ht(function (e) {
						return e === t
					}, s, !0),
					p = ht(function (e) {
						return M.call(t, e) > -1
					}, s, !0),
					f = [function (e, n, r) {
						return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
					}];
				for (; o > u; u++)
					if (n = i.relative[e[u].type]) f = [ht(gt(f), n)];
					else {
						if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
							for (r = ++u; o > r; r++)
								if (i.relative[e[r].type]) break;
							return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e))
						}
						f.push(n)
					}
				return gt(f)
			}

			function bt(e, t) {
				var n = 0,
					o = t.length > 0,
					a = e.length > 0,
					s = function (s, u, c, f, d) {
						var h, g, m, y = [],
							v = 0,
							b = "0",
							x = s && [],
							w = null != d,
							T = l,
							C = s || a && i.find.TAG("*", d && u.parentNode || u),
							k = N += null == T ? 1 : Math.random() || .1;
						for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
							if (a && h) {
								g = 0;
								while (m = e[g++])
									if (m(h, u, c)) {
										f.push(h);
										break
									}
								w && (N = k, r = ++n)
							}
							o && ((h = !m && h) && v--, s && x.push(h))
						}
						if (v += b, o && b !== v) {
							g = 0;
							while (m = t[g++]) m(x, y, u, c);
							if (s) {
								if (v > 0)
									while (b--) x[b] || y[b] || (y[b] = L.call(f));
								y = mt(y)
							}
							H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f)
						}
						return w && (N = k, l = T), x
					};
				return o ? ot(s) : s
			}
			s = st.compile = function (e, t) {
				var n, r = [],
					i = [],
					o = S[e + " "];
				if (!o) {
					t || (t = ft(e)), n = t.length;
					while (n--) o = vt(t[n]), o[x] ? r.push(o) : i.push(o);
					o = S(e, bt(i, r))
				}
				return o
			};

			function xt(e, t, n) {
				var r = 0,
					i = t.length;
				for (; i > r; r++) st(e, t[r], n);
				return n
			}

			function wt(e, t, n, r) {
				var o, a, u, l, c, p = ft(e);
				if (!r && 1 === p.length) {
					if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
						if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n;
						e = e.slice(a.shift().value.length)
					}
					o = U.needsContext.test(e) ? 0 : a.length;
					while (o--) {
						if (u = a[o], i.relative[l = u.type]) break;
						if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
							if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), n;
							break
						}
					}
				}
				return s(e, p)(r, t, d, n, V.test(e)), n
			}
			i.pseudos.nth = i.pseudos.eq;

			function Tt() {}
			i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains
		}(e);
	var at = /Until$/,
		st = /^(?:parents|prev(?:Until|All))/,
		ut = /^.[^:#\[\.,]*$/,
		lt = b.expr.match.needsContext,
		ct = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	b.fn.extend({
		find: function (e) {
			var t, n, r, i = this.length;
			if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function () {
				for (t = 0; i > t; t++)
					if (b.contains(r[t], this)) return !0
			}));
			for (n = [], t = 0; i > t; t++) b.find(e, this[t], n);
			return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
		},
		has: function (e) {
			var t, n = b(e, this),
				r = n.length;
			return this.filter(function () {
				for (t = 0; r > t; t++)
					if (b.contains(this, n[t])) return !0
			})
		},
		not: function (e) {
			return this.pushStack(ft(this, e, !1))
		},
		filter: function (e) {
			return this.pushStack(ft(this, e, !0))
		},
		is: function (e) {
			return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
		},
		closest: function (e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
			for (; i > r; r++) {
				n = this[r];
				while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
					if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
						o.push(n);
						break
					}
					n = n.parentNode
				}
			}
			return this.pushStack(o.length > 1 ? b.unique(o) : o)
		},
		index: function (e) {
			return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (e, t) {
			var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
				r = b.merge(this.get(), n);
			return this.pushStack(b.unique(r))
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), b.fn.andSelf = b.fn.addBack;

	function pt(e, t) {
		do e = e[t]; while (e && 1 !== e.nodeType);
		return e
	}
	b.each({
		parent: function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function (e) {
			return b.dir(e, "parentNode")
		},
		parentsUntil: function (e, t, n) {
			return b.dir(e, "parentNode", n)
		},
		next: function (e) {
			return pt(e, "nextSibling")
		},
		prev: function (e) {
			return pt(e, "previousSibling")
		},
		nextAll: function (e) {
			return b.dir(e, "nextSibling")
		},
		prevAll: function (e) {
			return b.dir(e, "previousSibling")
		},
		nextUntil: function (e, t, n) {
			return b.dir(e, "nextSibling", n)
		},
		prevUntil: function (e, t, n) {
			return b.dir(e, "previousSibling", n)
		},
		siblings: function (e) {
			return b.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function (e) {
			return b.sibling(e.firstChild)
		},
		contents: function (e) {
			return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
		}
	}, function (e, t) {
		b.fn[e] = function (n, r) {
			var i = b.map(this, t, n);
			return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i)
		}
	}), b.extend({
		filter: function (e, t, n) {
			return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
		},
		dir: function (e, n, r) {
			var i = [],
				o = e[n];
			while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
			return i
		},
		sibling: function (e, t) {
			var n = [];
			for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});

	function ft(e, t, n) {
		if (t = t || 0, b.isFunction(t)) return b.grep(e, function (e, r) {
			var i = !!t.call(e, r, e);
			return i === n
		});
		if (t.nodeType) return b.grep(e, function (e) {
			return e === t === n
		});
		if ("string" == typeof t) {
			var r = b.grep(e, function (e) {
				return 1 === e.nodeType
			});
			if (ut.test(t)) return b.filter(t, r, !n);
			t = b.filter(t, r)
		}
		return b.grep(e, function (e) {
			return b.inArray(e, t) >= 0 === n
		})
	}

	function dt(e) {
		var t = ht.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement)
			while (t.length) n.createElement(t.pop());
		return n
	}
	var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		gt = / jQuery\d+="(?:null|\d+)"/g,
		mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
		yt = /^\s+/,
		vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		bt = /<([\w:]+)/,
		xt = /<tbody/i,
		wt = /<|&#?\w+;/,
		Tt = /<(?:script|style|link)/i,
		Nt = /^(?:checkbox|radio)$/i,
		Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
		kt = /^$|\/(?:java|ecma)script/i,
		Et = /^true\/(.*)/,
		St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		At = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		jt = dt(o),
		Dt = jt.appendChild(o.createElement("div"));
	At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({
		text: function (e) {
			return b.access(this, function (e) {
				return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
			}, null, e, arguments.length)
		},
		wrapAll: function (e) {
			if (b.isFunction(e)) return this.each(function (t) {
				b(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
					var e = this;
					while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function (e) {
			return b.isFunction(e) ? this.each(function (t) {
				b(this).wrapInner(e.call(this, t))
			}) : this.each(function () {
				var t = b(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function (e) {
			var t = b.isFunction(e);
			return this.each(function (n) {
				b(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function () {
			return this.domManip(arguments, !0, function (e) {
				(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
			})
		},
		prepend: function () {
			return this.domManip(arguments, !0, function (e) {
				(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
			})
		},
		before: function () {
			return this.domManip(arguments, !1, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function () {
			return this.domManip(arguments, !1, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function (e, t) {
			var n, r = 0;
			for (; null != (n = this[r]); r++)(!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)));
			return this
		},
		empty: function () {
			var e, t = 0;
			for (; null != (e = this[t]); t++) {
				1 === e.nodeType && b.cleanData(Ot(e, !1));
				while (e.firstChild) e.removeChild(e.firstChild);
				e.options && b.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function (e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
				return b.clone(this, e, t)
			})
		},
		html: function (e) {
			return b.access(this, function (e) {
				var n = this[0] || {},
					r = 0,
					i = this.length;
				if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
				if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(vt, "<$1></$2>");
					try {
						for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e);
						n = 0
					} catch (o) {}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function (e) {
			var t = b.isFunction(e);
			return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function (e) {
				var t = this.nextSibling,
					n = this.parentNode;
				n && (b(this).remove(), n.insertBefore(e, t))
			})
		},
		detach: function (e) {
			return this.remove(e, !0)
		},
		domManip: function (e, n, r) {
			e = f.apply([], e);
			var i, o, a, s, u, l, c = 0,
				p = this.length,
				d = this,
				h = p - 1,
				g = e[0],
				m = b.isFunction(g);
			if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function (i) {
				var o = d.eq(i);
				m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
			});
			if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
				for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c);
				if (a)
					for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
						url: o.src,
						type: "GET",
						dataType: "script",
						async: !1,
						global: !1,
						"throws": !0
					}) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
				l = i = null
			}
			return this
		}
	});

	function Lt(e, t) {
		return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
	}

	function Ht(e) {
		var t = e.getAttributeNode("type");
		return e.type = (t && t.specified) + "/" + e.type, e
	}

	function qt(e) {
		var t = Et.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function Mt(e, t) {
		var n, r = 0;
		for (; null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
	}

	function _t(e, t) {
		if (1 === t.nodeType && b.hasData(e)) {
			var n, r, i, o = b._data(e),
				a = b._data(t, o),
				s = o.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s)
					for (r = 0, i = s[n].length; i > r; r++) b.event.add(t, n, s[n][r])
			}
			a.data && (a.data = b.extend({}, a.data))
		}
	}

	function Ft(e, t) {
		var n, r, i;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
				i = b._data(t);
				for (r in i.events) b.removeEvent(t, r, i.handle);
				t.removeAttribute(b.expando)
			}
			"script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}
	b.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (e, t) {
		b.fn[e] = function (e) {
			var n, r = 0,
				i = [],
				o = b(e),
				a = o.length - 1;
			for (; a >= r; r++) n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get());
			return this.pushStack(i)
		}
	});

	function Ot(e, n) {
		var r, o, a = 0,
			s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
		if (!s)
			for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n));
		return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s
	}

	function Bt(e) {
		Nt.test(e.type) && (e.defaultChecked = e.checked)
	}
	b.extend({
		clone: function (e, t, n) {
			var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
			if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
				for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) r[a] && Ft(i, r[a]);
			if (t)
				if (n)
					for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) _t(i, r[a]);
				else _t(e, o);
			return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o
		},
		buildFragment: function (e, t, n, r) {
			var i, o, a, s, u, l, c, p = e.length,
				f = dt(t),
				d = [],
				h = 0;
			for (; p > h; h++)
				if (o = e[h], o || 0 === o)
					if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o);
					else if (wt.test(o)) {
				s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
				while (i--) s = s.lastChild;
				if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
					o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
					while (i--) b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
				}
				b.merge(d, s.childNodes), s.textContent = "";
				while (s.firstChild) s.removeChild(s.firstChild);
				s = f.lastChild
			} else d.push(t.createTextNode(o));
			s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0;
			while (o = d[h++])
				if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
					i = 0;
					while (o = s[i++]) kt.test(o.type || "") && n.push(o)
				}
			return s = null, f
		},
		cleanData: function (e, t) {
			var n, r, o, a, s = 0,
				u = b.expando,
				l = b.cache,
				p = b.support.deleteExpando,
				f = b.event.special;
			for (; null != (n = e[s]); s++)
				if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
					if (a.events)
						for (r in a.events) f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle);
					l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o))
				}
		}
	});
	var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
		It = /opacity\s*=\s*([^)]*)/,
		zt = /^(top|right|bottom|left)$/,
		Xt = /^(none|table(?!-c[ea]).+)/,
		Ut = /^margin/,
		Vt = RegExp("^(" + x + ")(.*)$", "i"),
		Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
		Jt = RegExp("^([+-])=(" + x + ")", "i"),
		Gt = {
			BODY: "block"
		},
		Qt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Kt = {
			letterSpacing: 0,
			fontWeight: 400
		},
		Zt = ["Top", "Right", "Bottom", "Left"],
		en = ["Webkit", "O", "Moz", "ms"];

	function tn(e, t) {
		if (t in e) return t;
		var n = t.charAt(0).toUpperCase() + t.slice(1),
			r = t,
			i = en.length;
		while (i--)
			if (t = en[i] + n, t in e) return t;
		return r
	}

	function nn(e, t) {
		return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
	}

	function rn(e, t) {
		var n, r, i, o = [],
			a = 0,
			s = e.length;
		for (; s > a; a++) r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
		for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
		return e
	}
	b.fn.extend({
		css: function (e, n) {
			return b.access(this, function (e, n, r) {
				var i, o, a = {},
					s = 0;
				if (b.isArray(n)) {
					for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = b.css(e, n[s], !1, o);
					return a
				}
				return r !== t ? b.style(e, n, r) : b.css(e, n)
			}, e, n, arguments.length > 1)
		},
		show: function () {
			return rn(this, !0)
		},
		hide: function () {
			return rn(this)
		},
		toggle: function (e) {
			var t = "boolean" == typeof e;
			return this.each(function () {
				(t ? e : nn(this)) ? b(this).show(): b(this).hide()
			})
		}
	}), b.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = Wt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": b.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function (e, n, r, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, a, s, u = b.camelCase(n),
					l = e.style;
				if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
				if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
					l[n] = r
				} catch (c) {}
			}
		},
		css: function (e, n, r, i) {
			var o, a, s, u = b.camelCase(n);
			return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a
		},
		swap: function (e, t, n, r) {
			var i, o, a = {};
			for (o in t) a[o] = e.style[o], e.style[o] = t[o];
			i = n.apply(e, r || []);
			for (o in t) e.style[o] = a[o];
			return i
		}
	}), e.getComputedStyle ? (Rt = function (t) {
		return e.getComputedStyle(t, null)
	}, Wt = function (e, n, r) {
		var i, o, a, s = r || Rt(e),
			u = s ? s.getPropertyValue(n) || s[n] : t,
			l = e.style;
		return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
	}) : o.documentElement.currentStyle && (Rt = function (e) {
		return e.currentStyle
	}, Wt = function (e, n, r) {
		var i, o, a, s = r || Rt(e),
			u = s ? s[n] : t,
			l = e.style;
		return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
	});

	function on(e, t, n) {
		var r = Vt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function an(e, t, n, r, i) {
		var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
			a = 0;
		for (; 4 > o; o += 2) "margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)));
		return a
	}

	function sn(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = Rt(e),
			a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
			r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}

	function un(e) {
		var t = o,
			n = Gt[e];
		return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n
	}

	function ln(e, t) {
		var n = b(t.createElement(e)).appendTo(t.body),
			r = b.css(n[0], "display");
		return n.remove(), r
	}
	b.each(["height", "width"], function (e, n) {
		b.cssHooks[n] = {
			get: function (e, r, i) {
				return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function () {
					return sn(e, n, i)
				}) : sn(e, n, i) : t
			},
			set: function (e, t, r) {
				var i = r && Rt(e);
				return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), b.support.opacity || (b.cssHooks.opacity = {
		get: function (e, t) {
			return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function (e, t) {
			var n = e.style,
				r = e.currentStyle,
				i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = r && r.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
		}
	}), b(function () {
		b.support.reliableMarginRight || (b.cssHooks.marginRight = {
			get: function (e, n) {
				return n ? b.swap(e, {
					display: "inline-block"
				}, Wt, [e, "marginRight"]) : t
			}
		}), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function (e, n) {
			b.cssHooks[n] = {
				get: function (e, r) {
					return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t
				}
			}
		})
	}), b.expr && b.expr.filters && (b.expr.filters.hidden = function (e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
	}, b.expr.filters.visible = function (e) {
		return !b.expr.filters.hidden(e)
	}), b.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (e, t) {
		b.cssHooks[e + t] = {
			expand: function (n) {
				var r = 0,
					i = {},
					o = "string" == typeof n ? n.split(" ") : [n];
				for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, Ut.test(e) || (b.cssHooks[e + t].set = on)
	});
	var cn = /%20/g,
		pn = /\[\]$/,
		fn = /\r?\n/g,
		dn = /^(?:submit|button|image|reset|file)$/i,
		hn = /^(?:input|select|textarea|keygen)/i;
	b.fn.extend({
		serialize: function () {
			return b.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var e = b.prop(this, "elements");
				return e ? b.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e))
			}).map(function (e, t) {
				var n = b(this).val();
				return null == n ? null : b.isArray(n) ? b.map(n, function (e) {
					return {
						name: t.name,
						value: e.replace(fn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(fn, "\r\n")
				}
			}).get()
		}
	}), b.param = function (e, n) {
		var r, i = [],
			o = function (e, t) {
				t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function () {
			o(this.name, this.value)
		});
		else
			for (r in e) gn(r, e[r], n, o);
		return i.join("&").replace(cn, "+")
	};

	function gn(e, t, n, r) {
		var i;
		if (b.isArray(t)) b.each(t, function (t, i) {
			n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== b.type(t)) r(e, t);
		else
			for (i in t) gn(e + "[" + i + "]", t[i], n, r)
	}
	b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
		b.fn[t] = function (e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), b.fn.hover = function (e, t) {
		return this.mouseenter(e).mouseleave(t || e)
	};
	var mn, yn, vn = b.now(),
		bn = /\?/,
		xn = /#.*$/,
		wn = /([?&])_=[^&]*/,
		Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Cn = /^(?:GET|HEAD)$/,
		kn = /^\/\//,
		En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		Sn = b.fn.load,
		An = {},
		jn = {},
		Dn = "*/".concat("*");
	try {
		yn = a.href
	} catch (Ln) {
		yn = o.createElement("a"), yn.href = "", yn = yn.href
	}
	mn = En.exec(yn.toLowerCase()) || [];

	function Hn(e) {
		return function (t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(w) || [];
			if (b.isFunction(n))
				while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function qn(e, n, r, i) {
		var o = {},
			a = e === jn;

		function s(u) {
			var l;
			return o[u] = !0, b.each(e[u] || [], function (e, u) {
				var c = u(n, r, i);
				return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1)
			}), l
		}
		return s(n.dataTypes[0]) || !o["*"] && s("*")
	}

	function Mn(e, n) {
		var r, i, o = b.ajaxSettings.flatOptions || {};
		for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
		return r && b.extend(!0, e, r), e
	}
	b.fn.load = function (e, n, r) {
		if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
		var i, o, a, s = this,
			u = e.indexOf(" ");
		return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({
			url: e,
			type: a,
			dataType: "html",
			data: n
		}).done(function (e) {
			o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
		}).complete(r && function (e, t) {
			s.each(r, o || [e.responseText, t, e])
		}), this
	}, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		b.fn[t] = function (e) {
			return this.on(t, e)
		}
	}), b.each(["get", "post"], function (e, n) {
		b[n] = function (e, r, i, o) {
			return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({
				url: e,
				type: n,
				dataType: o,
				data: r,
				success: i
			})
		}
	}), b.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: yn,
			type: "GET",
			isLocal: Nn.test(mn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Dn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": e.String,
				"text html": !0,
				"text json": b.parseJSON,
				"text xml": b.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (e, t) {
			return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e)
		},
		ajaxPrefilter: Hn(An),
		ajaxTransport: Hn(jn),
		ajax: function (e, n) {
			"object" == typeof e && (n = e, e = t), n = n || {};
			var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n),
				f = p.context || p,
				d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event,
				h = b.Deferred(),
				g = b.Callbacks("once memory"),
				m = p.statusCode || {},
				y = {},
				v = {},
				x = 0,
				T = "canceled",
				N = {
					readyState: 0,
					getResponseHeader: function (e) {
						var t;
						if (2 === x) {
							if (!c) {
								c = {};
								while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
							}
							t = c[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function () {
						return 2 === x ? a : null
					},
					setRequestHeader: function (e, t) {
						var n = e.toLowerCase();
						return x || (e = v[n] = v[n] || e, y[e] = t), this
					},
					overrideMimeType: function (e) {
						return x || (p.mimeType = e), this
					},
					statusCode: function (e) {
						var t;
						if (e)
							if (2 > x)
								for (t in e) m[t] = [m[t], e[t]];
							else N.always(e[N.status]);
						return this
					},
					abort: function (e) {
						var t = e || T;
						return l && l.abort(t), k(0, t), this
					}
				};
			if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) return N;
			u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
			for (i in p.headers) N.setRequestHeader(i, p.headers[i]);
			if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort();
			T = "abort";
			for (i in {
					success: 1,
					error: 1,
					complete: 1
				}) N[i](p[i]);
			if (l = qn(jn, p, n, N)) {
				N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
					N.abort("timeout")
				}, p.timeout));
				try {
					x = 1, l.send(y, k)
				} catch (C) {
					if (!(2 > x)) throw C;
					k(-1, C)
				}
			} else k(-1, "No Transport");

			function k(e, n, r, i) {
				var c, y, v, w, T, C = n;
				2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")))
			}
			return N
		},
		getScript: function (e, n) {
			return b.get(e, t, n, "script")
		},
		getJSON: function (e, t, n) {
			return b.get(e, t, n, "json")
		}
	});

	function _n(e, n, r) {
		var i, o, a, s, u = e.contents,
			l = e.dataTypes,
			c = e.responseFields;
		for (s in c) s in r && (n[c[s]] = r[s]);
		while ("*" === l[0]) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
		if (o)
			for (s in u)
				if (u[s] && u[s].test(o)) {
					l.unshift(s);
					break
				}
		if (l[0] in r) a = l[0];
		else {
			for (s in r) {
				if (!l[0] || e.converters[s + " " + l[0]]) {
					a = s;
					break
				}
				i || (i = s)
			}
			a = a || i
		}
		return a ? (a !== l[0] && l.unshift(a), r[a]) : t
	}

	function Fn(e, t) {
		var n, r, i, o, a = {},
			s = 0,
			u = e.dataTypes.slice(),
			l = u[0];
		if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])
			for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
		for (; r = u[++s];)
			if ("*" !== r) {
				if ("*" !== l && l !== r) {
					if (i = a[l + " " + r] || a["* " + r], !i)
						for (n in a)
							if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
								i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
								break
							}
					if (i !== !0)
						if (i && e["throws"]) t = i(t);
						else try {
							t = i(t)
						} catch (c) {
							return {
								state: "parsererror",
								error: i ? c : "No conversion from " + l + " to " + r
							}
						}
				}
				l = r
			}
		return {
			state: "success",
			data: t
		}
	}
	b.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function (e) {
				return b.globalEval(e), e
			}
		}
	}), b.ajaxPrefilter("script", function (e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), b.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var n, r = o.head || b("head")[0] || o.documentElement;
			return {
				send: function (t, i) {
					n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
						(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
					}, r.insertBefore(n, r.firstChild)
				},
				abort: function () {
					n && n.onload(t, !0)
				}
			}
		}
	});
	var On = [],
		Bn = /(=)\?(?=&|$)|\?\?/;
	b.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var e = On.pop() || b.expando + "_" + vn++;
			return this[e] = !0, e
		}
	}), b.ajaxPrefilter("json jsonp", function (n, r, i) {
		var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
		return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
			return s || b.error(o + " was not called"), s[0]
		}, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
			s = arguments
		}, i.always(function () {
			e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t
		}), "script") : t
	});
	var Pn, Rn, Wn = 0,
		$n = e.ActiveXObject && function () {
			var e;
			for (e in Pn) Pn[e](t, !0)
		};

	function In() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}

	function zn() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}
	b.ajaxSettings.xhr = e.ActiveXObject ? function () {
		return !this.isLocal && In() || zn()
	} : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !!Rn && "withCredentials" in Rn, Rn = b.support.ajax = !!Rn, Rn && b.ajaxTransport(function (n) {
		if (!n.crossDomain || b.support.cors) {
			var r;
			return {
				send: function (i, o) {
					var a, s, u = n.xhr();
					if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
						for (s in n.xhrFields) u[s] = n.xhrFields[s];
					n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (s in i) u.setRequestHeader(s, i[s])
					} catch (l) {}
					u.send(n.hasContent && n.data || null), r = function (e, i) {
						var s, l, c, p;
						try {
							if (r && (i || 4 === u.readyState))
								if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) 4 !== u.readyState && u.abort();
								else {
									p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
									try {
										c = u.statusText
									} catch (f) {
										c = ""
									}
									s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
								}
						} catch (d) {
							i || o(-1, d)
						}
						p && o(s, c, p, l)
					}, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r()
				},
				abort: function () {
					r && r(t, !0)
				}
			}
		}
	});
	var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
		Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
		Jn = /queueHooks$/,
		Gn = [nr],
		Qn = {
			"*": [function (e, t) {
				var n, r, i = this.createTween(e, t),
					o = Yn.exec(t),
					a = i.cur(),
					s = +a || 0,
					u = 1,
					l = 20;
				if (o) {
					if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) {
						s = b.css(i.elem, e, !0) || n || 1;
						do u = u || ".5", s /= u, b.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
					}
					i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
				}
				return i
			}]
		};

	function Kn() {
		return setTimeout(function () {
			Xn = t
		}), Xn = b.now()
	}

	function Zn(e, t) {
		b.each(t, function (t, n) {
			var r = (Qn[t] || []).concat(Qn["*"]),
				i = 0,
				o = r.length;
			for (; o > i; i++)
				if (r[i].call(e, t, n)) return
		})
	}

	function er(e, t, n) {
		var r, i, o = 0,
			a = Gn.length,
			s = b.Deferred().always(function () {
				delete u.elem
			}),
			u = function () {
				if (i) return !1;
				var t = Xn || Kn(),
					n = Math.max(0, l.startTime + l.duration - t),
					r = n / l.duration || 0,
					o = 1 - r,
					a = 0,
					u = l.tweens.length;
				for (; u > a; a++) l.tweens[a].run(o);
				return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
			},
			l = s.promise({
				elem: e,
				props: b.extend({}, t),
				opts: b.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Xn || Kn(),
				duration: n.duration,
				tweens: [],
				createTween: function (t, n) {
					var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r
				},
				stop: function (t) {
					var n = 0,
						r = t ? l.tweens.length : 0;
					if (i) return this;
					for (i = !0; r > n; n++) l.tweens[n].run(1);
					return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
				}
			}),
			c = l.props;
		for (tr(c, l.opts.specialEasing); a > o; o++)
			if (r = Gn[o].call(l, e, c, l.opts)) return r;
		return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {
			elem: e,
			anim: l,
			queue: l.opts.queue
		})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}

	function tr(e, t) {
		var n, r, i, o, a;
		for (i in e)
			if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) {
				n = a.expand(n), delete e[r];
				for (i in n) i in e || (e[i] = n[i], t[i] = o)
			} else t[r] = o
	}
	b.Animation = b.extend(er, {
		tweener: function (e, t) {
			b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			var n, r = 0,
				i = e.length;
			for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
		},
		prefilter: function (e, t) {
			t ? Gn.unshift(e) : Gn.push(e)
		}
	});

	function nr(e, t, n) {
		var r, i, o, a, s, u, l, c, p, f = this,
			d = e.style,
			h = {},
			g = [],
			m = e.nodeType && nn(e);
		n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function () {
			c.unqueued || p()
		}), c.unqueued++, f.always(function () {
			f.always(function () {
				c.unqueued--, b.queue(e, "fx").length || c.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function () {
			d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
		}));
		for (i in t)
			if (a = t[i], Vn.exec(a)) {
				if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
				g.push(i)
			}
		if (o = g.length) {
			s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function () {
				b(e).hide()
			}), f.done(function () {
				var t;
				b._removeData(e, "fxshow");
				for (t in h) b.style(e, t, h[t])
			});
			for (i = 0; o > i; i++) r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
		}
	}

	function rr(e, t, n, r, i) {
		return new rr.prototype.init(e, t, n, r, i)
	}
	b.Tween = rr, rr.prototype = {
		constructor: rr,
		init: function (e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px")
		},
		cur: function () {
			var e = rr.propHooks[this.prop];
			return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
		},
		run: function (e) {
			var t, n = rr.propHooks[this.prop];
			return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
		}
	}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
		_default: {
			get: function (e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function (e) {
				b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, b.each(["toggle", "show", "hide"], function (e, t) {
		var n = b.fn[t];
		b.fn[t] = function (e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
		}
	}), b.fn.extend({
		fadeTo: function (e, t, n, r) {
			return this.filter(nn).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function (e, t, n, r) {
			var i = b.isEmptyObject(e),
				o = b.speed(t, n, r),
				a = function () {
					var t = er(this, b.extend({}, e), o);
					a.finish = function () {
						t.stop(!0)
					}, (i || b._data(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function (e, n, r) {
			var i = function (e) {
				var t = e.stop;
				delete e.stop, t(r)
			};
			return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
				var t = !0,
					n = null != e && e + "queueHooks",
					o = b.timers,
					a = b._data(this);
				if (n) a[n] && a[n].stop && i(a[n]);
				else
					for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
				for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
				(t || !r) && b.dequeue(this, e)
			})
		},
		finish: function (e) {
			return e !== !1 && (e = e || "fx"), this.each(function () {
				var t, n = b._data(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = b.timers,
					a = r ? r.length : 0;
				for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	});

	function ir(e, t) {
		var n, r = {
				height: e
			},
			i = 0;
		for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}
	b.each({
		slideDown: ir("show"),
		slideUp: ir("hide"),
		slideToggle: ir("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function (e, t) {
		b.fn[e] = function (e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), b.speed = function (e, t, n) {
		var r = e && "object" == typeof e ? b.extend({}, e) : {
			complete: n || !n && t || b.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !b.isFunction(t) && t
		};
		return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
			b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
		}, r
	}, b.easing = {
		linear: function (e) {
			return e
		},
		swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function () {
		var e, n = b.timers,
			r = 0;
		for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
		n.length || b.fx.stop(), Xn = t
	}, b.fx.timer = function (e) {
		e() && b.timers.push(e) && b.fx.start()
	}, b.fx.interval = 13, b.fx.start = function () {
		Un || (Un = setInterval(b.fx.tick, b.fx.interval))
	}, b.fx.stop = function () {
		clearInterval(Un), Un = null
	}, b.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function (e) {
		return b.grep(b.timers, function (t) {
			return e === t.elem
		}).length
	}), b.fn.offset = function (e) {
		if (arguments.length) return e === t ? this : this.each(function (t) {
			b.offset.setOffset(this, e, t)
		});
		var n, r, o = {
				top: 0,
				left: 0
			},
			a = this[0],
			s = a && a.ownerDocument;
		if (s) return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
			top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : o
	}, b.offset = {
		setOffset: function (e, t, n) {
			var r = b.css(e, "position");
			"static" === r && (e.style.position = "relative");
			var i = b(e),
				o = i.offset(),
				a = b.css(e, "top"),
				s = b.css(e, "left"),
				u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1,
				l = {},
				c = {},
				p, f;
			u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l)
		}
	}, b.fn.extend({
		position: function () {
			if (this[0]) {
				var e, t, n = {
						top: 0,
						left: 0
					},
					r = this[0];
				return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - b.css(r, "marginTop", !0),
					left: t.left - n.left - b.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				var e = this.offsetParent || o.documentElement;
				while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent;
				return e || o.documentElement
			})
		}
	}), b.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (e, n) {
		var r = /Y/.test(n);
		b.fn[e] = function (i) {
			return b.access(this, function (e, i, o) {
				var a = or(e);
				return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t)
			}, e, i, arguments.length, null)
		}
	});

	function or(e) {
		return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	b.each({
		Height: "height",
		Width: "width"
	}, function (e, n) {
		b.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		}, function (r, i) {
			b.fn[i] = function (i, o) {
				var a = arguments.length && (r || "boolean" != typeof i),
					s = r || (i === !0 || o === !0 ? "margin" : "border");
				return b.access(this, function (n, r, i) {
					var o;
					return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s)
				}, n, a ? i : t, a, null)
			}
		})
	}), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
		return b
	})
})(window);

/*! jQuery UI - v1.9.2 - 2013-09-18
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */

(function (e, t) {
	function i(t, i) {
		var s, a, o, r = t.nodeName.toLowerCase();
		return "area" === r ? (s = t.parentNode, a = s.name, t.href && a && "map" === s.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && n(t)
	}

	function n(t) {
		return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function () {
			return "hidden" === e.css(this, "visibility")
		}).length
	}
	var s = 0,
		a = /^ui-id-\d+$/;
	e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {
		version: "1.9.2",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), e.fn.extend({
		_focus: e.fn.focus,
		focus: function (t, i) {
			return "number" == typeof t ? this.each(function () {
				var n = this;
				setTimeout(function () {
					e(n).focus(), i && i.call(n)
				}, t)
			}) : this._focus.apply(this, arguments)
		},
		scrollParent: function () {
			var t;
			return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
				return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0) : this.parents().filter(function () {
				return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
		},
		zIndex: function (i) {
			if (i !== t) return this.css("zIndex", i);
			if (this.length)
				for (var n, s, a = e(this[0]); a.length && a[0] !== document;) {
					if (n = a.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
					a = a.parent()
				}
			return 0
		},
		uniqueId: function () {
			return this.each(function () {
				this.id || (this.id = "ui-id-" + ++s)
			})
		},
		removeUniqueId: function () {
			return this.each(function () {
				a.test(this.id) && e(this).removeAttr("id")
			})
		}
	}), e.extend(e.expr[":"], {
		data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
			return function (i) {
				return !!e.data(i, t)
			}
		}) : function (t, i, n) {
			return !!e.data(t, n[3])
		},
		focusable: function (t) {
			return i(t, !isNaN(e.attr(t, "tabindex")))
		},
		tabbable: function (t) {
			var n = e.attr(t, "tabindex"),
				s = isNaN(n);
			return (s || n >= 0) && i(t, !s)
		}
	}), e(function () {
		var t = document.body,
			i = t.appendChild(i = document.createElement("div"));
		i.offsetHeight, e.extend(i.style, {
			minHeight: "100px",
			height: "auto",
			padding: 0,
			borderWidth: 0
		}), e.support.minHeight = 100 === i.offsetHeight, e.support.selectstart = "onselectstart" in i, t.removeChild(i).style.display = "none"
	}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, n) {
		function s(t, i, n, s) {
			return e.each(a, function () {
				i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
			}), i
		}
		var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
			o = n.toLowerCase(),
			r = {
				innerWidth: e.fn.innerWidth,
				innerHeight: e.fn.innerHeight,
				outerWidth: e.fn.outerWidth,
				outerHeight: e.fn.outerHeight
			};
		e.fn["inner" + n] = function (i) {
			return i === t ? r["inner" + n].call(this) : this.each(function () {
				e(this).css(o, s(this, i) + "px")
			})
		}, e.fn["outer" + n] = function (t, i) {
			return "number" != typeof t ? r["outer" + n].call(this, t) : this.each(function () {
				e(this).css(o, s(this, t, !0, i) + "px")
			})
		}
	}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
		return function (i) {
			return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
		}
	}(e.fn.removeData)), function () {
		var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
		e.ui.ie = t.length ? !0 : !1, e.ui.ie6 = 6 === parseFloat(t[1], 10)
	}(), e.fn.extend({
		disableSelection: function () {
			return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
				e.preventDefault()
			})
		},
		enableSelection: function () {
			return this.unbind(".ui-disableSelection")
		}
	}), e.extend(e.ui, {
		plugin: {
			add: function (t, i, n) {
				var s, a = e.ui[t].prototype;
				for (s in n) a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]])
			},
			call: function (e, t, i) {
				var n, s = e.plugins[t];
				if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
					for (n = 0; s.length > n; n++) e.options[s[n][0]] && s[n][1].apply(e.element, i)
			}
		},
		contains: e.contains,
		hasScroll: function (t, i) {
			if ("hidden" === e(t).css("overflow")) return !1;
			var n = i && "left" === i ? "scrollLeft" : "scrollTop",
				s = !1;
			return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
		},
		isOverAxis: function (e, t, i) {
			return e > t && t + i > e
		},
		isOver: function (t, i, n, s, a, o) {
			return e.ui.isOverAxis(t, n, a) && e.ui.isOverAxis(i, s, o)
		}
	}))
})(jQuery);
(function (t, e) {
	var i = 0,
		s = Array.prototype.slice,
		n = t.cleanData;
	t.cleanData = function (e) {
		for (var i, s = 0; null != (i = e[s]); s++) try {
			t(i).triggerHandler("remove")
		} catch (a) {}
		n(e)
	}, t.widget = function (i, s, n) {
		var a, o, r, h, l = i.split(".")[0];
		i = i.split(".")[1], a = l + "-" + i, n || (n = s, s = t.Widget), t.expr[":"][a.toLowerCase()] = function (e) {
			return !!t.data(e, a)
		}, t[l] = t[l] || {}, o = t[l][i], r = t[l][i] = function (t, i) {
			return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i)
		}, t.extend(r, o, {
			version: n.version,
			_proto: t.extend({}, n),
			_childConstructors: []
		}), h = new s, h.options = t.widget.extend({}, h.options), t.each(n, function (e, i) {
			t.isFunction(i) && (n[e] = function () {
				var t = function () {
						return s.prototype[e].apply(this, arguments)
					},
					n = function (t) {
						return s.prototype[e].apply(this, t)
					};
				return function () {
					var e, s = this._super,
						a = this._superApply;
					return this._super = t, this._superApply = n, e = i.apply(this, arguments), this._super = s, this._superApply = a, e
				}
			}())
		}), r.prototype = t.widget.extend(h, {
			widgetEventPrefix: o ? h.widgetEventPrefix : i
		}, n, {
			constructor: r,
			namespace: l,
			widgetName: i,
			widgetBaseClass: a,
			widgetFullName: a
		}), o ? (t.each(o._childConstructors, function (e, i) {
			var s = i.prototype;
			t.widget(s.namespace + "." + s.widgetName, r, i._proto)
		}), delete o._childConstructors) : s._childConstructors.push(r), t.widget.bridge(i, r)
	}, t.widget.extend = function (i) {
		for (var n, a, o = s.call(arguments, 1), r = 0, h = o.length; h > r; r++)
			for (n in o[r]) a = o[r][n], o[r].hasOwnProperty(n) && a !== e && (i[n] = t.isPlainObject(a) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], a) : t.widget.extend({}, a) : a);
		return i
	}, t.widget.bridge = function (i, n) {
		var a = n.prototype.widgetFullName || i;
		t.fn[i] = function (o) {
			var r = "string" == typeof o,
				h = s.call(arguments, 1),
				l = this;
			return o = !r && h.length ? t.widget.extend.apply(null, [o].concat(h)) : o, r ? this.each(function () {
				var s, n = t.data(this, a);
				return n ? t.isFunction(n[o]) && "_" !== o.charAt(0) ? (s = n[o].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error("no such method '" + o + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + o + "'")
			}) : this.each(function () {
				var e = t.data(this, a);
				e ? e.option(o || {})._init() : t.data(this, a, new n(o, this))
			}), l
		}
	}, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function (e, s) {
			s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetName, this), t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function (t) {
					t.target === s && this.destroy()
				}
			}), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: t.noop,
		_getCreateEventData: t.noop,
		_create: t.noop,
		_init: t.noop,
		destroy: function () {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: t.noop,
		widget: function () {
			return this.element
		},
		option: function (i, s) {
			var n, a, o, r = i;
			if (0 === arguments.length) return t.widget.extend({}, this.options);
			if ("string" == typeof i)
				if (r = {}, n = i.split("."), i = n.shift(), n.length) {
					for (a = r[i] = t.widget.extend({}, this.options[i]), o = 0; n.length - 1 > o; o++) a[n[o]] = a[n[o]] || {}, a = a[n[o]];
					if (i = n.pop(), s === e) return a[i] === e ? null : a[i];
					a[i] = s
				} else {
					if (s === e) return this.options[i] === e ? null : this.options[i];
					r[i] = s
				}
			return this._setOptions(r), this
		},
		_setOptions: function (t) {
			var e;
			for (e in t) this._setOption(e, t[e]);
			return this
		},
		_setOption: function (t, e) {
			return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
		},
		enable: function () {
			return this._setOption("disabled", !1)
		},
		disable: function () {
			return this._setOption("disabled", !0)
		},
		_on: function (i, s, n) {
			var a, o = this;
			"boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = a = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, a = this.widget()), t.each(n, function (n, r) {
				function h() {
					return i || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : e
				}
				"string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
				var l = n.match(/^(\w+)\s*(.*)$/),
					c = l[1] + o.eventNamespace,
					u = l[2];
				u ? a.delegate(u, c, h) : s.bind(c, h)
			})
		},
		_off: function (t, e) {
			e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
		},
		_delay: function (t, e) {
			function i() {
				return ("string" == typeof t ? s[t] : t).apply(s, arguments)
			}
			var s = this;
			return setTimeout(i, e || 0)
		},
		_hoverable: function (e) {
			this.hoverable = this.hoverable.add(e), this._on(e, {
				mouseenter: function (e) {
					t(e.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function (e) {
					t(e.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function (e) {
			this.focusable = this.focusable.add(e), this._on(e, {
				focusin: function (e) {
					t(e.currentTarget).addClass("ui-state-focus")
				},
				focusout: function (e) {
					t(e.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function (e, i, s) {
			var n, a, o = this.options[e];
			if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
				for (n in a) n in i || (i[n] = a[n]);
			return this.element.trigger(i, s), !(t.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
		}
	}, t.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function (e, i) {
		t.Widget.prototype["_" + e] = function (s, n, a) {
			"string" == typeof n && (n = {
				effect: n
			});
			var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
			n = n || {}, "number" == typeof n && (n = {
				duration: n
			}), o = !t.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && t.effects && (t.effects.effect[r] || t.uiBackCompat !== !1 && t.effects[r]) ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {
				t(this)[e](), a && a.call(s[0]), i()
			})
		}
	}), t.uiBackCompat !== !1 && (t.Widget.prototype._getCreateOptions = function () {
		return t.metadata && t.metadata.get(this.element[0])[this.widgetName]
	})
})(jQuery);
(function (e) {
	var t = !1;
	e(document).mouseup(function () {
		t = !1
	}), e.widget("ui.mouse", {
		version: "1.9.2",
		options: {
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function () {
			var t = this;
			this.element.bind("mousedown." + this.widgetName, function (e) {
				return t._mouseDown(e)
			}).bind("click." + this.widgetName, function (i) {
				return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
			}), this.started = !1
		},
		_mouseDestroy: function () {
			this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function (i) {
			if (!t) {
				this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
				var s = this,
					n = 1 === i.which,
					a = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
				return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
					s.mouseDelayMet = !0
				}, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
					return s._mouseMove(e)
				}, this._mouseUpDelegate = function (e) {
					return s._mouseUp(e)
				}, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
			}
		},
		_mouseMove: function (t) {
			return !e.ui.ie || document.documentMode >= 9 || t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
		},
		_mouseUp: function (t) {
			return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
		},
		_mouseDistanceMet: function (e) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function () {
			return this.mouseDelayMet
		},
		_mouseStart: function () {},
		_mouseDrag: function () {},
		_mouseStop: function () {},
		_mouseCapture: function () {
			return !0
		}
	})
})(jQuery);
(function (t, e) {
	function i(t, e, i) {
		return [parseInt(t[0], 10) * (d.test(t[0]) ? e / 100 : 1), parseInt(t[1], 10) * (d.test(t[1]) ? i / 100 : 1)]
	}

	function s(e, i) {
		return parseInt(t.css(e, i), 10) || 0
	}
	t.ui = t.ui || {};
	var n, a = Math.max,
		o = Math.abs,
		r = Math.round,
		l = /left|center|right/,
		h = /top|center|bottom/,
		c = /[\+\-]\d+%?/,
		u = /^\w+/,
		d = /%$/,
		p = t.fn.position;
	t.position = {
			scrollbarWidth: function () {
				if (n !== e) return n;
				var i, s, a = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
					o = a.children()[0];
				return t("body").append(a), i = o.offsetWidth, a.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = a[0].clientWidth), a.remove(), n = i - s
			},
			getScrollInfo: function (e) {
				var i = e.isWindow ? "" : e.element.css("overflow-x"),
					s = e.isWindow ? "" : e.element.css("overflow-y"),
					n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
					a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
				return {
					width: n ? t.position.scrollbarWidth() : 0,
					height: a ? t.position.scrollbarWidth() : 0
				}
			},
			getWithinInfo: function (e) {
				var i = t(e || window),
					s = t.isWindow(i[0]);
				return {
					element: i,
					isWindow: s,
					offset: i.offset() || {
						left: 0,
						top: 0
					},
					scrollLeft: i.scrollLeft(),
					scrollTop: i.scrollTop(),
					width: s ? i.width() : i.outerWidth(),
					height: s ? i.height() : i.outerHeight()
				}
			}
		}, t.fn.position = function (e) {
			if (!e || !e.of) return p.apply(this, arguments);
			e = t.extend({}, e);
			var n, d, f, g, m, v = t(e.of),
				_ = t.position.getWithinInfo(e.within),
				b = t.position.getScrollInfo(_),
				y = v[0],
				w = (e.collision || "flip").split(" "),
				k = {};
			return 9 === y.nodeType ? (d = v.width(), f = v.height(), g = {
				top: 0,
				left: 0
			}) : t.isWindow(y) ? (d = v.width(), f = v.height(), g = {
				top: v.scrollTop(),
				left: v.scrollLeft()
			}) : y.preventDefault ? (e.at = "left top", d = f = 0, g = {
				top: y.pageY,
				left: y.pageX
			}) : (d = v.outerWidth(), f = v.outerHeight(), g = v.offset()), m = t.extend({}, g), t.each(["my", "at"], function () {
				var t, i, s = (e[this] || "").split(" ");
				1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : h.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = l.test(s[0]) ? s[0] : "center", s[1] = h.test(s[1]) ? s[1] : "center", t = c.exec(s[0]), i = c.exec(s[1]), k[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [u.exec(s[0])[0], u.exec(s[1])[0]]
			}), 1 === w.length && (w[1] = w[0]), "right" === e.at[0] ? m.left += d : "center" === e.at[0] && (m.left += d / 2), "bottom" === e.at[1] ? m.top += f : "center" === e.at[1] && (m.top += f / 2), n = i(k.at, d, f), m.left += n[0], m.top += n[1], this.each(function () {
				var l, h, c = t(this),
					u = c.outerWidth(),
					p = c.outerHeight(),
					y = s(this, "marginLeft"),
					D = s(this, "marginTop"),
					x = u + y + s(this, "marginRight") + b.width,
					C = p + D + s(this, "marginBottom") + b.height,
					M = t.extend({}, m),
					I = i(k.my, c.outerWidth(), c.outerHeight());
				"right" === e.my[0] ? M.left -= u : "center" === e.my[0] && (M.left -= u / 2), "bottom" === e.my[1] ? M.top -= p : "center" === e.my[1] && (M.top -= p / 2), M.left += I[0], M.top += I[1], t.support.offsetFractions || (M.left = r(M.left), M.top = r(M.top)), l = {
					marginLeft: y,
					marginTop: D
				}, t.each(["left", "top"], function (i, s) {
					t.ui.position[w[i]] && t.ui.position[w[i]][s](M, {
						targetWidth: d,
						targetHeight: f,
						elemWidth: u,
						elemHeight: p,
						collisionPosition: l,
						collisionWidth: x,
						collisionHeight: C,
						offset: [n[0] + I[0], n[1] + I[1]],
						my: e.my,
						at: e.at,
						within: _,
						elem: c
					})
				}), t.fn.bgiframe && c.bgiframe(), e.using && (h = function (t) {
					var i = g.left - M.left,
						s = i + d - u,
						n = g.top - M.top,
						r = n + f - p,
						l = {
							target: {
								element: v,
								left: g.left,
								top: g.top,
								width: d,
								height: f
							},
							element: {
								element: c,
								left: M.left,
								top: M.top,
								width: u,
								height: p
							},
							horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
							vertical: 0 > r ? "top" : n > 0 ? "bottom" : "middle"
						};
					u > d && d > o(i + s) && (l.horizontal = "center"), p > f && f > o(n + r) && (l.vertical = "middle"), l.important = a(o(i), o(s)) > a(o(n), o(r)) ? "horizontal" : "vertical", e.using.call(this, t, l)
				}), c.offset(t.extend(M, {
					using: h
				}))
			})
		}, t.ui.position = {
			fit: {
				left: function (t, e) {
					var i, s = e.within,
						n = s.isWindow ? s.scrollLeft : s.offset.left,
						o = s.width,
						r = t.left - e.collisionPosition.marginLeft,
						l = n - r,
						h = r + e.collisionWidth - o - n;
					e.collisionWidth > o ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - o - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + o - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = a(t.left - r, t.left)
				},
				top: function (t, e) {
					var i, s = e.within,
						n = s.isWindow ? s.scrollTop : s.offset.top,
						o = e.within.height,
						r = t.top - e.collisionPosition.marginTop,
						l = n - r,
						h = r + e.collisionHeight - o - n;
					e.collisionHeight > o ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - o - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + o - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = a(t.top - r, t.top)
				}
			},
			flip: {
				left: function (t, e) {
					var i, s, n = e.within,
						a = n.offset.left + n.scrollLeft,
						r = n.width,
						l = n.isWindow ? n.scrollLeft : n.offset.left,
						h = t.left - e.collisionPosition.marginLeft,
						c = h - l,
						u = h + e.collisionWidth - r - l,
						d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
						p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
						f = -2 * e.offset[0];
					0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - a, (0 > i || o(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l, (s > 0 || u > o(s)) && (t.left += d + p + f))
				},
				top: function (t, e) {
					var i, s, n = e.within,
						a = n.offset.top + n.scrollTop,
						r = n.height,
						l = n.isWindow ? n.scrollTop : n.offset.top,
						h = t.top - e.collisionPosition.marginTop,
						c = h - l,
						u = h + e.collisionHeight - r - l,
						d = "top" === e.my[1],
						p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
						f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
						g = -2 * e.offset[1];
					0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - a, t.top + p + f + g > c && (0 > s || o(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > u && (i > 0 || u > o(i)) && (t.top += p + f + g))
				}
			},
			flipfit: {
				left: function () {
					t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
				},
				top: function () {
					t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
				}
			}
		},
		function () {
			var e, i, s, n, a, o = document.getElementsByTagName("body")[0],
				r = document.createElement("div");
			e = document.createElement(o ? "div" : "body"), s = {
				visibility: "hidden",
				width: 0,
				height: 0,
				border: 0,
				margin: 0,
				background: "none"
			}, o && t.extend(s, {
				position: "absolute",
				left: "-1000px",
				top: "-1000px"
			});
			for (a in s) e.style[a] = s[a];
			e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
		}(), t.uiBackCompat !== !1 && function (t) {
			var i = t.fn.position;
			t.fn.position = function (s) {
				if (!s || !s.offset) return i.call(this, s);
				var n = s.offset.split(" "),
					a = s.at.split(" ");
				return 1 === n.length && (n[1] = n[0]), /^\d/.test(n[0]) && (n[0] = "+" + n[0]), /^\d/.test(n[1]) && (n[1] = "+" + n[1]), 1 === a.length && (/left|center|right/.test(a[0]) ? a[1] = "center" : (a[1] = a[0], a[0] = "center")), i.call(this, t.extend(s, {
					at: a[0] + n[0] + " " + a[1] + n[1],
					offset: e
				}))
			}
		}(jQuery)
})(jQuery);
(function (t) {
	t.widget("ui.draggable", t.ui.mouse, {
		version: "1.9.2",
		widgetEventPrefix: "drag",
		options: {
			addClasses: !0,
			appendTo: "parent",
			axis: !1,
			connectToSortable: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			iframeFix: !1,
			opacity: !1,
			refreshPositions: !1,
			revert: !1,
			revertDuration: 500,
			scope: "default",
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: !1,
			snapMode: "both",
			snapTolerance: 20,
			stack: !1,
			zIndex: !1
		},
		_create: function () {
			"original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
		},
		_destroy: function () {
			this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
		},
		_mouseCapture: function (e) {
			var i = this.options;
			return this.helper || i.disabled || t(e.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
				t('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
					width: this.offsetWidth + "px",
					height: this.offsetHeight + "px",
					position: "absolute",
					opacity: "0.001",
					zIndex: 1e3
				}).css(t(this).offset()).appendTo("body")
			}), !0) : !1)
		},
		_mouseStart: function (e) {
			var i = this.options;
			return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			}, t.extend(this.offset, {
				click: {
					left: e.pageX - this.offset.left,
					top: e.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), i.containment && this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
		},
		_mouseDrag: function (e, i) {
			if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
				var s = this._uiHash();
				if (this._trigger("drag", e, s) === !1) return this._mouseUp({}), !1;
				this.position = s.position
			}
			return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
		},
		_mouseStop: function (e) {
			var i = !1;
			t.ui.ddmanager && !this.options.dropBehaviour && (i = t.ui.ddmanager.drop(this, e)), this.dropped && (i = this.dropped, this.dropped = !1);
			for (var s = this.element[0], a = !1; s && (s = s.parentNode);) s == document && (a = !0);
			if (!a && "original" === this.options.helper) return !1;
			if ("invalid" == this.options.revert && !i || "valid" == this.options.revert && i || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, i)) {
				var n = this;
				t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
					n._trigger("stop", e) !== !1 && n._clear()
				})
			} else this._trigger("stop", e) !== !1 && this._clear();
			return !1
		},
		_mouseUp: function (e) {
			return t("div.ui-draggable-iframeFix").each(function () {
				this.parentNode.removeChild(this)
			}), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
		},
		cancel: function () {
			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
		},
		_getHandle: function (e) {
			var i = this.options.handle && t(this.options.handle, this.element).length ? !1 : !0;
			return t(this.options.handle, this.element).find("*").andSelf().each(function () {
				this == e.target && (i = !0)
			}), i
		},
		_createHelper: function (e) {
			var i = this.options,
				s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" == i.helper ? this.element.clone().removeAttr("id") : this.element;
			return s.parents("body").length || s.appendTo("parent" == i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] == this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
		},
		_adjustOffsetFromHelper: function (e) {
			"string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
				left: +e[0],
				top: +e[1] || 0
			}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_getParentOffset: function () {
			this.offsetParent = this.helper.offsetParent();
			var e = this.offsetParent.offset();
			return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
				top: 0,
				left: 0
			}), {
				top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function () {
			if ("relative" == this.cssPosition) {
				var t = this.element.position();
				return {
					top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function () {
			this.margins = {
				left: parseInt(this.element.css("marginLeft"), 10) || 0,
				top: parseInt(this.element.css("marginTop"), 10) || 0,
				right: parseInt(this.element.css("marginRight"), 10) || 0,
				bottom: parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions: function () {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function () {
			var e = this.options;
			if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = ["document" == e.containment ? 0 : t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == e.containment ? 0 : t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == e.containment ? 0 : t(window).scrollLeft()) + t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == e.containment ? 0 : t(window).scrollTop()) + (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || e.containment.constructor == Array) e.containment.constructor == Array && (this.containment = e.containment);
			else {
				var i = t(e.containment),
					s = i[0];
				if (!s) return;
				i.offset();
				var a = "hidden" != t(s).css("overflow");
				this.containment = [(parseInt(t(s).css("borderLeftWidth"), 10) || 0) + (parseInt(t(s).css("paddingLeft"), 10) || 0), (parseInt(t(s).css("borderTopWidth"), 10) || 0) + (parseInt(t(s).css("paddingTop"), 10) || 0), (a ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(t(s).css("borderLeftWidth"), 10) || 0) - (parseInt(t(s).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (a ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(t(s).css("borderTopWidth"), 10) || 0) - (parseInt(t(s).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i
			}
		},
		_convertPositionTo: function (e, i) {
			i || (i = this.position);
			var s = "absolute" == e ? 1 : -1,
				a = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
				n = /(html|body)/i.test(a[0].tagName);
			return {
				top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : a.scrollTop()) * s,
				left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : a.scrollLeft()) * s
			}
		},
		_generatePosition: function (e) {
			var i = this.options,
				s = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				a = /(html|body)/i.test(s[0].tagName),
				n = e.pageX,
				r = e.pageY;
			if (this.originalPosition) {
				var o;
				if (this.containment) {
					if (this.relative_container) {
						var l = this.relative_container.offset();
						o = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]
					} else o = this.containment;
					e.pageX - this.offset.click.left < o[0] && (n = o[0] + this.offset.click.left), e.pageY - this.offset.click.top < o[1] && (r = o[1] + this.offset.click.top), e.pageX - this.offset.click.left > o[2] && (n = o[2] + this.offset.click.left), e.pageY - this.offset.click.top > o[3] && (r = o[3] + this.offset.click.top)
				}
				if (i.grid) {
					var h = i.grid[1] ? this.originalPageY + Math.round((r - this.originalPageY) / i.grid[1]) * i.grid[1] : this.originalPageY;
					r = o ? h - this.offset.click.top < o[1] || h - this.offset.click.top > o[3] ? h - this.offset.click.top < o[1] ? h + i.grid[1] : h - i.grid[1] : h : h;
					var c = i.grid[0] ? this.originalPageX + Math.round((n - this.originalPageX) / i.grid[0]) * i.grid[0] : this.originalPageX;
					n = o ? c - this.offset.click.left < o[0] || c - this.offset.click.left > o[2] ? c - this.offset.click.left < o[0] ? c + i.grid[0] : c - i.grid[0] : c : c
				}
			}
			return {
				top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : s.scrollTop()),
				left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : s.scrollLeft())
			}
		},
		_clear: function () {
			this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
		},
		_trigger: function (e, i, s) {
			return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" == e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s)
		},
		plugins: {},
		_uiHash: function () {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	}), t.ui.plugin.add("draggable", "connectToSortable", {
		start: function (e, i) {
			var s = t(this).data("draggable"),
				a = s.options,
				n = t.extend({}, i, {
					item: s.element
				});
			s.sortables = [], t(a.connectToSortable).each(function () {
				var i = t.data(this, "sortable");
				i && !i.options.disabled && (s.sortables.push({
					instance: i,
					shouldRevert: i.options.revert
				}), i.refreshPositions(), i._trigger("activate", e, n))
			})
		},
		stop: function (e, i) {
			var s = t(this).data("draggable"),
				a = t.extend({}, i, {
					item: s.element
				});
			t.each(s.sortables, function () {
				this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" == s.options.helper && this.instance.currentItem.css({
					top: "auto",
					left: "auto"
				})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, a))
			})
		},
		drag: function (e, i) {
			var s = t(this).data("draggable"),
				a = this;
			t.each(s.sortables, function () {
				var n = !1,
					r = this;
				this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (n = !0, t.each(s.sortables, function () {
					return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this != r && this.instance._intersectsWith(this.instance.containerCache) && t.ui.contains(r.instance.element[0], this.instance.element[0]) && (n = !1), n
				})), n ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(a).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
					return i.helper[0]
				}, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
			})
		}
	}), t.ui.plugin.add("draggable", "cursor", {
		start: function () {
			var e = t("body"),
				i = t(this).data("draggable").options;
			e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
		},
		stop: function () {
			var e = t(this).data("draggable").options;
			e._cursor && t("body").css("cursor", e._cursor)
		}
	}), t.ui.plugin.add("draggable", "opacity", {
		start: function (e, i) {
			var s = t(i.helper),
				a = t(this).data("draggable").options;
			s.css("opacity") && (a._opacity = s.css("opacity")), s.css("opacity", a.opacity)
		},
		stop: function (e, i) {
			var s = t(this).data("draggable").options;
			s._opacity && t(i.helper).css("opacity", s._opacity)
		}
	}), t.ui.plugin.add("draggable", "scroll", {
		start: function () {
			var e = t(this).data("draggable");
			e.scrollParent[0] != document && "HTML" != e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
		},
		drag: function (e) {
			var i = t(this).data("draggable"),
				s = i.options,
				a = !1;
			i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName ? (s.axis && "x" == s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = a = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = a = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" == s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = a = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = a = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" == s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? a = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (a = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && "y" == s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? a = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (a = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))), a !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
		}
	}), t.ui.plugin.add("draggable", "snap", {
		start: function () {
			var e = t(this).data("draggable"),
				i = e.options;
			e.snapElements = [], t(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function () {
				var i = t(this),
					s = i.offset();
				this != e.element[0] && e.snapElements.push({
					item: this,
					width: i.outerWidth(),
					height: i.outerHeight(),
					top: s.top,
					left: s.left
				})
			})
		},
		drag: function (e, i) {
			for (var s = t(this).data("draggable"), a = s.options, n = a.snapTolerance, r = i.offset.left, o = r + s.helperProportions.width, l = i.offset.top, h = l + s.helperProportions.height, c = s.snapElements.length - 1; c >= 0; c--) {
				var d = s.snapElements[c].left,
					u = d + s.snapElements[c].width,
					p = s.snapElements[c].top,
					g = p + s.snapElements[c].height;
				if (r > d - n && u + n > r && l > p - n && g + n > l || r > d - n && u + n > r && h > p - n && g + n > h || o > d - n && u + n > o && l > p - n && g + n > l || o > d - n && u + n > o && h > p - n && g + n > h) {
					if ("inner" != a.snapMode) {
						var f = n >= Math.abs(p - h),
							m = n >= Math.abs(g - l),
							v = n >= Math.abs(d - o),
							_ = n >= Math.abs(u - r);
						f && (i.position.top = s._convertPositionTo("relative", {
							top: p - s.helperProportions.height,
							left: 0
						}).top - s.margins.top), m && (i.position.top = s._convertPositionTo("relative", {
							top: g,
							left: 0
						}).top - s.margins.top), v && (i.position.left = s._convertPositionTo("relative", {
							top: 0,
							left: d - s.helperProportions.width
						}).left - s.margins.left), _ && (i.position.left = s._convertPositionTo("relative", {
							top: 0,
							left: u
						}).left - s.margins.left)
					}
					var b = f || m || v || _;
					if ("outer" != a.snapMode) {
						var f = n >= Math.abs(p - l),
							m = n >= Math.abs(g - h),
							v = n >= Math.abs(d - r),
							_ = n >= Math.abs(u - o);
						f && (i.position.top = s._convertPositionTo("relative", {
							top: p,
							left: 0
						}).top - s.margins.top), m && (i.position.top = s._convertPositionTo("relative", {
							top: g - s.helperProportions.height,
							left: 0
						}).top - s.margins.top), v && (i.position.left = s._convertPositionTo("relative", {
							top: 0,
							left: d
						}).left - s.margins.left), _ && (i.position.left = s._convertPositionTo("relative", {
							top: 0,
							left: u - s.helperProportions.width
						}).left - s.margins.left)
					}!s.snapElements[c].snapping && (f || m || v || _ || b) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
						snapItem: s.snapElements[c].item
					})), s.snapElements[c].snapping = f || m || v || _ || b
				} else s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
					snapItem: s.snapElements[c].item
				})), s.snapElements[c].snapping = !1
			}
		}
	}), t.ui.plugin.add("draggable", "stack", {
		start: function () {
			var e = t(this).data("draggable").options,
				i = t.makeArray(t(e.stack)).sort(function (e, i) {
					return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
				});
			if (i.length) {
				var s = parseInt(i[0].style.zIndex) || 0;
				t(i).each(function (t) {
					this.style.zIndex = s + t
				}), this[0].style.zIndex = s + i.length
			}
		}
	}), t.ui.plugin.add("draggable", "zIndex", {
		start: function (e, i) {
			var s = t(i.helper),
				a = t(this).data("draggable").options;
			s.css("zIndex") && (a._zIndex = s.css("zIndex")), s.css("zIndex", a.zIndex)
		},
		stop: function (e, i) {
			var s = t(this).data("draggable").options;
			s._zIndex && t(i.helper).css("zIndex", s._zIndex)
		}
	})
})(jQuery);
(function (t) {
	t.widget("ui.droppable", {
		version: "1.9.2",
		widgetEventPrefix: "drop",
		options: {
			accept: "*",
			activeClass: !1,
			addClasses: !0,
			greedy: !1,
			hoverClass: !1,
			scope: "default",
			tolerance: "intersect"
		},
		_create: function () {
			var e = this.options,
				i = e.accept;
			this.isover = 0, this.isout = 1, this.accept = t.isFunction(i) ? i : function (t) {
				return t.is(i)
			}, this.proportions = {
				width: this.element[0].offsetWidth,
				height: this.element[0].offsetHeight
			}, t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [], t.ui.ddmanager.droppables[e.scope].push(this), e.addClasses && this.element.addClass("ui-droppable")
		},
		_destroy: function () {
			for (var e = t.ui.ddmanager.droppables[this.options.scope], i = 0; e.length > i; i++) e[i] == this && e.splice(i, 1);
			this.element.removeClass("ui-droppable ui-droppable-disabled")
		},
		_setOption: function (e, i) {
			"accept" == e && (this.accept = t.isFunction(i) ? i : function (t) {
				return t.is(i)
			}), t.Widget.prototype._setOption.apply(this, arguments)
		},
		_activate: function (e) {
			var i = t.ui.ddmanager.current;
			this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
		},
		_deactivate: function (e) {
			var i = t.ui.ddmanager.current;
			this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
		},
		_over: function (e) {
			var i = t.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
		},
		_out: function (e) {
			var i = t.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
		},
		_drop: function (e, i) {
			var s = i || t.ui.ddmanager.current;
			if (!s || (s.currentItem || s.element)[0] == this.element[0]) return !1;
			var n = !1;
			return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
				var e = t.data(this, "droppable");
				return e.options.greedy && !e.options.disabled && e.options.scope == s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, {
					offset: e.element.offset()
				}), e.options.tolerance) ? (n = !0, !1) : undefined
			}), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element) : !1
		},
		ui: function (t) {
			return {
				draggable: t.currentItem || t.element,
				helper: t.helper,
				position: t.position,
				offset: t.positionAbs
			}
		}
	}), t.ui.intersect = function (e, i, s) {
		if (!i.offset) return !1;
		var n = (e.positionAbs || e.position.absolute).left,
			a = n + e.helperProportions.width,
			o = (e.positionAbs || e.position.absolute).top,
			r = o + e.helperProportions.height,
			l = i.offset.left,
			h = l + i.proportions.width,
			c = i.offset.top,
			d = c + i.proportions.height;
		switch (s) {
			case "fit":
				return n >= l && h >= a && o >= c && d >= r;
			case "intersect":
				return n + e.helperProportions.width / 2 > l && h > a - e.helperProportions.width / 2 && o + e.helperProportions.height / 2 > c && d > r - e.helperProportions.height / 2;
			case "pointer":
				var u = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left,
					p = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top,
					g = t.ui.isOver(p, u, c, l, i.proportions.height, i.proportions.width);
				return g;
			case "touch":
				return (o >= c && d >= o || r >= c && d >= r || c > o && r > d) && (n >= l && h >= n || a >= l && h >= a || l > n && a > h);
			default:
				return !1
		}
	}, t.ui.ddmanager = {
		current: null,
		droppables: {
			"default": []
		},
		prepareOffsets: function (e, i) {
			var s = t.ui.ddmanager.droppables[e.options.scope] || [],
				n = i ? i.type : null,
				a = (e.currentItem || e.element).find(":data(droppable)").andSelf();
			t: for (var o = 0; s.length > o; o++)
				if (!(s[o].options.disabled || e && !s[o].accept.call(s[o].element[0], e.currentItem || e.element))) {
					for (var r = 0; a.length > r; r++)
						if (a[r] == s[o].element[0]) {
							s[o].proportions.height = 0;
							continue t
						}
					s[o].visible = "none" != s[o].element.css("display"), s[o].visible && ("mousedown" == n && s[o]._activate.call(s[o], i), s[o].offset = s[o].element.offset(), s[o].proportions = {
						width: s[o].element[0].offsetWidth,
						height: s[o].element[0].offsetHeight
					})
				}
		},
		drop: function (e, i) {
			var s = !1;
			return t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
				this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, i)))
			}), s
		},
		dragStart: function (e, i) {
			e.element.parentsUntil("body").bind("scroll.droppable", function () {
				e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
			})
		},
		drag: function (e, i) {
			e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
				if (!this.options.disabled && !this.greedyChild && this.visible) {
					var s = t.ui.intersect(e, this, this.options.tolerance),
						n = s || 1 != this.isover ? s && 0 == this.isover ? "isover" : null : "isout";
					if (n) {
						var a;
						if (this.options.greedy) {
							var o = this.options.scope,
								r = this.element.parents(":data(droppable)").filter(function () {
									return t.data(this, "droppable").options.scope === o
								});
							r.length && (a = t.data(r[0], "droppable"), a.greedyChild = "isover" == n ? 1 : 0)
						}
						a && "isover" == n && (a.isover = 0, a.isout = 1, a._out.call(a, i)), this[n] = 1, this["isout" == n ? "isover" : "isout"] = 0, this["isover" == n ? "_over" : "_out"].call(this, i), a && "isout" == n && (a.isout = 0, a.isover = 1, a._over.call(a, i))
					}
				}
			})
		},
		dragStop: function (e, i) {
			e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
		}
	}
})(jQuery);
(function (t) {
	t.widget("ui.resizable", t.ui.mouse, {
		version: "1.9.2",
		widgetEventPrefix: "resize",
		options: {
			alsoResize: !1,
			animate: !1,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: !1,
			autoHide: !1,
			containment: !1,
			ghost: !1,
			grid: !1,
			handles: "e,s,se",
			helper: !1,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 1e3
		},
		_create: function () {
			var e = this,
				i = this.options;
			if (this.element.addClass("ui-resizable"), t.extend(this, {
					_aspectRatio: !!i.aspectRatio,
					aspectRatio: i.aspectRatio,
					originalElement: this.element,
					_proportionallyResizeElements: [],
					_helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
				}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
					position: this.element.css("position"),
					width: this.element.outerWidth(),
					height: this.element.outerHeight(),
					top: this.element.css("top"),
					left: this.element.css("left")
				})), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
					marginLeft: this.originalElement.css("marginLeft"),
					marginTop: this.originalElement.css("marginTop"),
					marginRight: this.originalElement.css("marginRight"),
					marginBottom: this.originalElement.css("marginBottom")
				}), this.originalElement.css({
					marginLeft: 0,
					marginTop: 0,
					marginRight: 0,
					marginBottom: 0
				}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
					position: "static",
					zoom: 1,
					display: "block"
				})), this.originalElement.css({
					margin: this.originalElement.css("margin")
				}), this._proportionallyResize()), this.handles = i.handles || (t(".ui-resizable-handle", this.element).length ? {
					n: ".ui-resizable-n",
					e: ".ui-resizable-e",
					s: ".ui-resizable-s",
					w: ".ui-resizable-w",
					se: ".ui-resizable-se",
					sw: ".ui-resizable-sw",
					ne: ".ui-resizable-ne",
					nw: ".ui-resizable-nw"
				} : "e,s,se"), this.handles.constructor == String) {
				"all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
				var s = this.handles.split(",");
				this.handles = {};
				for (var n = 0; s.length > n; n++) {
					var a = t.trim(s[n]),
						o = "ui-resizable-" + a,
						r = t('<div class="ui-resizable-handle ' + o + '"></div>');
					r.css({
						zIndex: i.zIndex
					}), "se" == a && r.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[a] = ".ui-resizable-" + a, this.element.append(r)
				}
			}
			this._renderAxis = function (e) {
				e = e || this.element;
				for (var i in this.handles) {
					if (this.handles[i].constructor == String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
						var s = t(this.handles[i], this.element),
							n = 0;
						n = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth();
						var a = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
						e.css(a, n), this._proportionallyResize()
					}
					t(this.handles[i]).length
				}
			}, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
				if (!e.resizing) {
					if (this.className) var t = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
					e.axis = t && t[1] ? t[1] : "se"
				}
			}), i.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
				i.disabled || (t(this).removeClass("ui-resizable-autohide"), e._handles.show())
			}).mouseleave(function () {
				i.disabled || e.resizing || (t(this).addClass("ui-resizable-autohide"), e._handles.hide())
			})), this._mouseInit()
		},
		_destroy: function () {
			this._mouseDestroy();
			var e = function (e) {
				t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
			};
			if (this.elementIsWrapper) {
				e(this.element);
				var i = this.element;
				this.originalElement.css({
					position: i.css("position"),
					width: i.outerWidth(),
					height: i.outerHeight(),
					top: i.css("top"),
					left: i.css("left")
				}).insertAfter(i), i.remove()
			}
			return this.originalElement.css("resize", this.originalResizeStyle), e(this.originalElement), this
		},
		_mouseCapture: function (e) {
			var i = !1;
			for (var s in this.handles) t(this.handles[s])[0] == e.target && (i = !0);
			return !this.options.disabled && i
		},
		_mouseStart: function (i) {
			var s = this.options,
				n = this.element.position(),
				a = this.element;
			this.resizing = !0, this.documentScroll = {
				top: t(document).scrollTop(),
				left: t(document).scrollLeft()
			}, (a.is(".ui-draggable") || /absolute/.test(a.css("position"))) && a.css({
				position: "absolute",
				top: n.top,
				left: n.left
			}), this._renderProxy();
			var o = e(this.helper.css("left")),
				r = e(this.helper.css("top"));
			s.containment && (o += t(s.containment).scrollLeft() || 0, r += t(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
				left: o,
				top: r
			}, this.size = this._helper ? {
				width: a.outerWidth(),
				height: a.outerHeight()
			} : {
				width: a.width(),
				height: a.height()
			}, this.originalSize = this._helper ? {
				width: a.outerWidth(),
				height: a.outerHeight()
			} : {
				width: a.width(),
				height: a.height()
			}, this.originalPosition = {
				left: o,
				top: r
			}, this.sizeDiff = {
				width: a.outerWidth() - a.width(),
				height: a.outerHeight() - a.height()
			}, this.originalMousePosition = {
				left: i.pageX,
				top: i.pageY
			}, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
			var h = t(".ui-resizable-" + this.axis).css("cursor");
			return t("body").css("cursor", "auto" == h ? this.axis + "-resize" : h), a.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
		},
		_mouseDrag: function (t) {
			var e = this.helper,
				i = (this.options, this.originalMousePosition),
				s = this.axis,
				n = t.pageX - i.left || 0,
				a = t.pageY - i.top || 0,
				o = this._change[s];
			if (!o) return !1;
			var r = o.apply(this, [t, n, a]);
			return this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (r = this._updateRatio(r, t)), r = this._respectSize(r, t), this._propagate("resize", t), e.css({
				top: this.position.top + "px",
				left: this.position.left + "px",
				width: this.size.width + "px",
				height: this.size.height + "px"
			}), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(r), this._trigger("resize", t, this.ui()), !1
		},
		_mouseStop: function (e) {
			this.resizing = !1;
			var i = this.options,
				s = this;
			if (this._helper) {
				var n = this._proportionallyResizeElements,
					a = n.length && /textarea/i.test(n[0].nodeName),
					o = a && t.ui.hasScroll(n[0], "left") ? 0 : s.sizeDiff.height,
					r = a ? 0 : s.sizeDiff.width,
					h = {
						width: s.helper.width() - r,
						height: s.helper.height() - o
					},
					l = parseInt(s.element.css("left"), 10) + (s.position.left - s.originalPosition.left) || null,
					c = parseInt(s.element.css("top"), 10) + (s.position.top - s.originalPosition.top) || null;
				i.animate || this.element.css(t.extend(h, {
					top: c,
					left: l
				})), s.helper.height(s.size.height), s.helper.width(s.size.width), this._helper && !i.animate && this._proportionallyResize()
			}
			return t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
		},
		_updateVirtualBoundaries: function (t) {
			var e, s, n, a, o, r = this.options;
			o = {
				minWidth: i(r.minWidth) ? r.minWidth : 0,
				maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,
				minHeight: i(r.minHeight) ? r.minHeight : 0,
				maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0
			}, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o
		},
		_updateCache: function (t) {
			this.options, this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width)
		},
		_updateRatio: function (t) {
			var e = (this.options, this.position),
				s = this.size,
				n = this.axis;
			return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), "sw" == n && (t.left = e.left + (s.width - t.width), t.top = null), "nw" == n && (t.top = e.top + (s.height - t.height), t.left = e.left + (s.width - t.width)), t
		},
		_respectSize: function (t, e) {
			var s = (this.helper, this._vBoundaries),
				n = (this._aspectRatio || e.shiftKey, this.axis),
				a = i(t.width) && s.maxWidth && s.maxWidth < t.width,
				o = i(t.height) && s.maxHeight && s.maxHeight < t.height,
				r = i(t.width) && s.minWidth && s.minWidth > t.width,
				h = i(t.height) && s.minHeight && s.minHeight > t.height;
			r && (t.width = s.minWidth), h && (t.height = s.minHeight), a && (t.width = s.maxWidth), o && (t.height = s.maxHeight);
			var l = this.originalPosition.left + this.originalSize.width,
				c = this.position.top + this.size.height,
				u = /sw|nw|w/.test(n),
				d = /nw|ne|n/.test(n);
			r && u && (t.left = l - s.minWidth), a && u && (t.left = l - s.maxWidth), h && d && (t.top = c - s.minHeight), o && d && (t.top = c - s.maxHeight);
			var p = !t.width && !t.height;
			return p && !t.left && t.top ? t.top = null : p && !t.top && t.left && (t.left = null), t
		},
		_proportionallyResize: function () {
			if (this.options, this._proportionallyResizeElements.length)
				for (var e = this.helper || this.element, i = 0; this._proportionallyResizeElements.length > i; i++) {
					var s = this._proportionallyResizeElements[i];
					if (!this.borderDif) {
						var n = [s.css("borderTopWidth"), s.css("borderRightWidth"), s.css("borderBottomWidth"), s.css("borderLeftWidth")],
							a = [s.css("paddingTop"), s.css("paddingRight"), s.css("paddingBottom"), s.css("paddingLeft")];
						this.borderDif = t.map(n, function (t, e) {
							var i = parseInt(t, 10) || 0,
								s = parseInt(a[e], 10) || 0;
							return i + s
						})
					}
					s.css({
						height: e.height() - this.borderDif[0] - this.borderDif[2] || 0,
						width: e.width() - this.borderDif[1] - this.borderDif[3] || 0
					})
				}
		},
		_renderProxy: function () {
			var e = this.element,
				i = this.options;
			if (this.elementOffset = e.offset(), this._helper) {
				this.helper = this.helper || t('<div style="overflow:hidden;"></div>');
				var s = t.ui.ie6 ? 1 : 0,
					n = t.ui.ie6 ? 2 : -1;
				this.helper.addClass(this._helper).css({
					width: this.element.outerWidth() + n,
					height: this.element.outerHeight() + n,
					position: "absolute",
					left: this.elementOffset.left - s + "px",
					top: this.elementOffset.top - s + "px",
					zIndex: ++i.zIndex
				}), this.helper.appendTo("body").disableSelection()
			} else this.helper = this.element
		},
		_change: {
			e: function (t, e) {
				return {
					width: this.originalSize.width + e
				}
			},
			w: function (t, e) {
				var i = (this.options, this.originalSize),
					s = this.originalPosition;
				return {
					left: s.left + e,
					width: i.width - e
				}
			},
			n: function (t, e, i) {
				var s = (this.options, this.originalSize),
					n = this.originalPosition;
				return {
					top: n.top + i,
					height: s.height - i
				}
			},
			s: function (t, e, i) {
				return {
					height: this.originalSize.height + i
				}
			},
			se: function (e, i, s) {
				return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
			},
			sw: function (e, i, s) {
				return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
			},
			ne: function (e, i, s) {
				return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
			},
			nw: function (e, i, s) {
				return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
			}
		},
		_propagate: function (e, i) {
			t.ui.plugin.call(this, e, [i, this.ui()]), "resize" != e && this._trigger(e, i, this.ui())
		},
		plugins: {},
		ui: function () {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			}
		}
	}), t.ui.plugin.add("resizable", "alsoResize", {
		start: function () {
			var e = t(this).data("resizable"),
				i = e.options,
				s = function (e) {
					t(e).each(function () {
						var e = t(this);
						e.data("resizable-alsoresize", {
							width: parseInt(e.width(), 10),
							height: parseInt(e.height(), 10),
							left: parseInt(e.css("left"), 10),
							top: parseInt(e.css("top"), 10)
						})
					})
				};
			"object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : t.each(i.alsoResize, function (t) {
				s(t)
			})
		},
		resize: function (e, i) {
			var s = t(this).data("resizable"),
				n = s.options,
				a = s.originalSize,
				o = s.originalPosition,
				r = {
					height: s.size.height - a.height || 0,
					width: s.size.width - a.width || 0,
					top: s.position.top - o.top || 0,
					left: s.position.left - o.left || 0
				},
				h = function (e, s) {
					t(e).each(function () {
						var e = t(this),
							n = t(this).data("resizable-alsoresize"),
							a = {},
							o = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
						t.each(o, function (t, e) {
							var i = (n[e] || 0) + (r[e] || 0);
							i && i >= 0 && (a[e] = i || null)
						}), e.css(a)
					})
				};
			"object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : t.each(n.alsoResize, function (t, e) {
				h(t, e)
			})
		},
		stop: function () {
			t(this).removeData("resizable-alsoresize")
		}
	}), t.ui.plugin.add("resizable", "animate", {
		stop: function (e) {
			var i = t(this).data("resizable"),
				s = i.options,
				n = i._proportionallyResizeElements,
				a = n.length && /textarea/i.test(n[0].nodeName),
				o = a && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
				r = a ? 0 : i.sizeDiff.width,
				h = {
					width: i.size.width - r,
					height: i.size.height - o
				},
				l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
				c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
			i.element.animate(t.extend(h, c && l ? {
				top: c,
				left: l
			} : {}), {
				duration: s.animateDuration,
				easing: s.animateEasing,
				step: function () {
					var s = {
						width: parseInt(i.element.css("width"), 10),
						height: parseInt(i.element.css("height"), 10),
						top: parseInt(i.element.css("top"), 10),
						left: parseInt(i.element.css("left"), 10)
					};
					n && n.length && t(n[0]).css({
						width: s.width,
						height: s.height
					}), i._updateCache(s), i._propagate("resize", e)
				}
			})
		}
	}), t.ui.plugin.add("resizable", "containment", {
		start: function () {
			var i = t(this).data("resizable"),
				s = i.options,
				n = i.element,
				a = s.containment,
				o = a instanceof t ? a.get(0) : /parent/.test(a) ? n.parent().get(0) : a;
			if (o)
				if (i.containerElement = t(o), /document/.test(a) || a == document) i.containerOffset = {
					left: 0,
					top: 0
				}, i.containerPosition = {
					left: 0,
					top: 0
				}, i.parentData = {
					element: t(document),
					left: 0,
					top: 0,
					width: t(document).width(),
					height: t(document).height() || document.body.parentNode.scrollHeight
				};
				else {
					var r = t(o),
						h = [];
					t(["Top", "Right", "Left", "Bottom"]).each(function (t, i) {
						h[t] = e(r.css("padding" + i))
					}), i.containerOffset = r.offset(), i.containerPosition = r.position(), i.containerSize = {
						height: r.innerHeight() - h[3],
						width: r.innerWidth() - h[1]
					};
					var l = i.containerOffset,
						c = i.containerSize.height,
						u = i.containerSize.width,
						d = t.ui.hasScroll(o, "left") ? o.scrollWidth : u,
						p = t.ui.hasScroll(o) ? o.scrollHeight : c;
					i.parentData = {
						element: o,
						left: l.left,
						top: l.top,
						width: d,
						height: p
					}
				}
		},
		resize: function (e) {
			var i = t(this).data("resizable"),
				s = i.options,
				n = (i.containerSize, i.containerOffset),
				a = (i.size, i.position),
				o = i._aspectRatio || e.shiftKey,
				r = {
					top: 0,
					left: 0
				},
				h = i.containerElement;
			h[0] != document && /static/.test(h.css("position")) && (r = n), a.left < (i._helper ? n.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - n.left : i.position.left - r.left), o && (i.size.height = i.size.width / i.aspectRatio), i.position.left = s.helper ? n.left : 0), a.top < (i._helper ? n.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - n.top : i.position.top), o && (i.size.width = i.size.height * i.aspectRatio), i.position.top = i._helper ? n.top : 0), i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top;
			var l = Math.abs((i._helper ? i.offset.left - r.left : i.offset.left - r.left) + i.sizeDiff.width),
				c = Math.abs((i._helper ? i.offset.top - r.top : i.offset.top - n.top) + i.sizeDiff.height),
				u = i.containerElement.get(0) == i.element.parent().get(0),
				d = /relative|absolute/.test(i.containerElement.css("position"));
			u && d && (l -= i.parentData.left), l + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - l, o && (i.size.height = i.size.width / i.aspectRatio)), c + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - c, o && (i.size.width = i.size.height * i.aspectRatio))
		},
		stop: function () {
			var e = t(this).data("resizable"),
				i = e.options,
				s = (e.position, e.containerOffset),
				n = e.containerPosition,
				a = e.containerElement,
				o = t(e.helper),
				r = o.offset(),
				h = o.outerWidth() - e.sizeDiff.width,
				l = o.outerHeight() - e.sizeDiff.height;
			e._helper && !i.animate && /relative/.test(a.css("position")) && t(this).css({
				left: r.left - n.left - s.left,
				width: h,
				height: l
			}), e._helper && !i.animate && /static/.test(a.css("position")) && t(this).css({
				left: r.left - n.left - s.left,
				width: h,
				height: l
			})
		}
	}), t.ui.plugin.add("resizable", "ghost", {
		start: function () {
			var e = t(this).data("resizable"),
				i = e.options,
				s = e.size;
			e.ghost = e.originalElement.clone(), e.ghost.css({
				opacity: .25,
				display: "block",
				position: "relative",
				height: s.height,
				width: s.width,
				margin: 0,
				left: 0,
				top: 0
			}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
		},
		resize: function () {
			var e = t(this).data("resizable");
			e.options, e.ghost && e.ghost.css({
				position: "relative",
				height: e.size.height,
				width: e.size.width
			})
		},
		stop: function () {
			var e = t(this).data("resizable");
			e.options, e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
		}
	}), t.ui.plugin.add("resizable", "grid", {
		resize: function (e) {
			var i = t(this).data("resizable"),
				s = i.options,
				n = i.size,
				a = i.originalSize,
				o = i.originalPosition,
				r = i.axis;
			s._aspectRatio || e.shiftKey, s.grid = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid;
			var h = Math.round((n.width - a.width) / (s.grid[0] || 1)) * (s.grid[0] || 1),
				l = Math.round((n.height - a.height) / (s.grid[1] || 1)) * (s.grid[1] || 1);
			/^(se|s|e)$/.test(r) ? (i.size.width = a.width + h, i.size.height = a.height + l) : /^(ne)$/.test(r) ? (i.size.width = a.width + h, i.size.height = a.height + l, i.position.top = o.top - l) : /^(sw)$/.test(r) ? (i.size.width = a.width + h, i.size.height = a.height + l, i.position.left = o.left - h) : (i.size.width = a.width + h, i.size.height = a.height + l, i.position.top = o.top - l, i.position.left = o.left - h)
		}
	});
	var e = function (t) {
			return parseInt(t, 10) || 0
		},
		i = function (t) {
			return !isNaN(parseInt(t, 10))
		}
})(jQuery);
(function (e) {
	e.widget("ui.selectable", e.ui.mouse, {
		version: "1.9.2",
		options: {
			appendTo: "body",
			autoRefresh: !0,
			distance: 0,
			filter: "*",
			tolerance: "touch"
		},
		_create: function () {
			var t = this;
			this.element.addClass("ui-selectable"), this.dragged = !1;
			var i;
			this.refresh = function () {
				i = e(t.options.filter, t.element[0]), i.addClass("ui-selectee"), i.each(function () {
					var t = e(this),
						i = t.offset();
					e.data(this, "selectable-item", {
						element: this,
						$element: t,
						left: i.left,
						top: i.top,
						right: i.left + t.outerWidth(),
						bottom: i.top + t.outerHeight(),
						startselected: !1,
						selected: t.hasClass("ui-selected"),
						selecting: t.hasClass("ui-selecting"),
						unselecting: t.hasClass("ui-unselecting")
					})
				})
			}, this.refresh(), this.selectees = i.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
		},
		_destroy: function () {
			this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
		},
		_mouseStart: function (t) {
			var i = this;
			if (this.opos = [t.pageX, t.pageY], !this.options.disabled) {
				var s = this.options;
				this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({
					left: t.clientX,
					top: t.clientY,
					width: 0,
					height: 0
				}), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
					var s = e.data(this, "selectable-item");
					s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, {
						unselecting: s.element
					}))
				}), e(t.target).parents().andSelf().each(function () {
					var s = e.data(this, "selectable-item");
					if (s) {
						var n = !t.metaKey && !t.ctrlKey || !s.$element.hasClass("ui-selected");
						return s.$element.removeClass(n ? "ui-unselecting" : "ui-selected").addClass(n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", t, {
							selecting: s.element
						}) : i._trigger("unselecting", t, {
							unselecting: s.element
						}), !1
					}
				})
			}
		},
		_mouseDrag: function (t) {
			var i = this;
			if (this.dragged = !0, !this.options.disabled) {
				var s = this.options,
					n = this.opos[0],
					a = this.opos[1],
					o = t.pageX,
					r = t.pageY;
				if (n > o) {
					var l = o;
					o = n, n = l
				}
				if (a > r) {
					var l = r;
					r = a, a = l
				}
				return this.helper.css({
					left: n,
					top: a,
					width: o - n,
					height: r - a
				}), this.selectees.each(function () {
					var l = e.data(this, "selectable-item");
					if (l && l.element != i.element[0]) {
						var h = !1;
						"touch" == s.tolerance ? h = !(l.left > o || n > l.right || l.top > r || a > l.bottom) : "fit" == s.tolerance && (h = l.left > n && o > l.right && l.top > a && r > l.bottom), h ? (l.selected && (l.$element.removeClass("ui-selected"), l.selected = !1), l.unselecting && (l.$element.removeClass("ui-unselecting"), l.unselecting = !1), l.selecting || (l.$element.addClass("ui-selecting"), l.selecting = !0, i._trigger("selecting", t, {
							selecting: l.element
						}))) : (l.selecting && ((t.metaKey || t.ctrlKey) && l.startselected ? (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.$element.addClass("ui-selected"), l.selected = !0) : (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.startselected && (l.$element.addClass("ui-unselecting"), l.unselecting = !0), i._trigger("unselecting", t, {
							unselecting: l.element
						}))), l.selected && (t.metaKey || t.ctrlKey || l.startselected || (l.$element.removeClass("ui-selected"), l.selected = !1, l.$element.addClass("ui-unselecting"), l.unselecting = !0, i._trigger("unselecting", t, {
							unselecting: l.element
						}))))
					}
				}), !1
			}
		},
		_mouseStop: function (t) {
			var i = this;
			return this.dragged = !1, this.options, e(".ui-unselecting", this.element[0]).each(function () {
				var s = e.data(this, "selectable-item");
				s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, {
					unselected: s.element
				})
			}), e(".ui-selecting", this.element[0]).each(function () {
				var s = e.data(this, "selectable-item");
				s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", t, {
					selected: s.element
				})
			}), this._trigger("stop", t), this.helper.remove(), !1
		}
	})
})(jQuery);
(function (t) {
	t.widget("ui.sortable", t.ui.mouse, {
		version: "1.9.2",
		widgetEventPrefix: "sort",
		ready: !1,
		options: {
			appendTo: "parent",
			axis: !1,
			connectWith: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			dropOnEmpty: !0,
			forcePlaceholderSize: !1,
			forceHelperSize: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			items: "> *",
			opacity: !1,
			placeholder: !1,
			revert: !1,
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1e3
		},
		_create: function () {
			var t = this.options;
			this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
		},
		_destroy: function () {
			this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
			for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
			return this
		},
		_setOption: function (e, i) {
			"disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
		},
		_mouseCapture: function (e, i) {
			var s = this;
			if (this.reverting) return !1;
			if (this.options.disabled || "static" == this.options.type) return !1;
			this._refreshItems(e);
			var n = null;
			if (t(e.target).parents().each(function () {
					return t.data(this, s.widgetName + "-item") == s ? (n = t(this), !1) : undefined
				}), t.data(e.target, s.widgetName + "-item") == s && (n = t(e.target)), !n) return !1;
			if (this.options.handle && !i) {
				var a = !1;
				if (t(this.options.handle, n).find("*").andSelf().each(function () {
						this == e.target && (a = !0)
					}), !a) return !1
			}
			return this.currentItem = n, this._removeCurrentsFromItems(), !0
		},
		_mouseStart: function (e, i, s) {
			var n = this.options;
			if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
					top: this.offset.top - this.margins.top,
					left: this.offset.left - this.margins.left
				}, t.extend(this.offset, {
					click: {
						left: e.pageX - this.offset.left,
						top: e.pageY - this.offset.top
					},
					parent: this._getParentOffset(),
					relative: this._getRelativeOffset()
				}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this.domPosition = {
					prev: this.currentItem.prev()[0],
					parent: this.currentItem.parent()[0]
				}, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), n.containment && this._setContainment(), n.cursor && (t("body").css("cursor") && (this._storedCursor = t("body").css("cursor")), t("body").css("cursor", n.cursor)), n.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", n.opacity)), n.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", n.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
				for (var a = this.containers.length - 1; a >= 0; a--) this.containers[a]._trigger("activate", e, this._uiHash(this));
			return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
		},
		_mouseDrag: function (e) {
			if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
				var i = this.options,
					s = !1;
				this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop + i.scrollSpeed : e.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft + i.scrollSpeed : e.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (e.pageY - t(document).scrollTop() < i.scrollSensitivity ? s = t(document).scrollTop(t(document).scrollTop() - i.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < i.scrollSensitivity && (s = t(document).scrollTop(t(document).scrollTop() + i.scrollSpeed)), e.pageX - t(document).scrollLeft() < i.scrollSensitivity ? s = t(document).scrollLeft(t(document).scrollLeft() - i.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < i.scrollSensitivity && (s = t(document).scrollLeft(t(document).scrollLeft() + i.scrollSpeed))), s !== !1 && t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)
			}
			this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
			for (var n = this.items.length - 1; n >= 0; n--) {
				var a = this.items[n],
					o = a.item[0],
					r = this._intersectsWithPointer(a);
				if (r && a.instance === this.currentContainer && o != this.currentItem[0] && this.placeholder[1 == r ? "next" : "prev"]()[0] != o && !t.contains(this.placeholder[0], o) && ("semi-dynamic" == this.options.type ? !t.contains(this.element[0], o) : !0)) {
					if (this.direction = 1 == r ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(a)) break;
					this._rearrange(e, a), this._trigger("change", e, this._uiHash());
					break
				}
			}
			return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
		},
		_mouseStop: function (e, i) {
			if (e) {
				if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
					var s = this,
						n = this.placeholder.offset();
					this.reverting = !0, t(this.helper).animate({
						left: n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
						top: n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
					}, parseInt(this.options.revert, 10) || 500, function () {
						s._clear(e)
					})
				} else this._clear(e, i);
				return !1
			}
		},
		cancel: function () {
			if (this.dragging) {
				this._mouseUp({
					target: null
				}), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
				for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
			}
			return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
				helper: null,
				dragging: !1,
				reverting: !1,
				_noFinalSort: null
			}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
		},
		serialize: function (e) {
			var i = this._getItemsAsjQuery(e && e.connected),
				s = [];
			return e = e || {}, t(i).each(function () {
				var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[-=_](.+)/);
				i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
			}), !s.length && e.key && s.push(e.key + "="), s.join("&")
		},
		toArray: function (e) {
			var i = this._getItemsAsjQuery(e && e.connected),
				s = [];
			return e = e || {}, i.each(function () {
				s.push(t(e.item || this).attr(e.attribute || "id") || "")
			}), s
		},
		_intersectsWith: function (t) {
			var e = this.positionAbs.left,
				i = e + this.helperProportions.width,
				s = this.positionAbs.top,
				n = s + this.helperProportions.height,
				a = t.left,
				o = a + t.width,
				r = t.top,
				h = r + t.height,
				l = this.offset.click.top,
				c = this.offset.click.left,
				u = s + l > r && h > s + l && e + c > a && o > e + c;
			return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? u : e + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
		},
		_intersectsWithPointer: function (e) {
			var i = "x" === this.options.axis || t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
				s = "y" === this.options.axis || t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
				n = i && s,
				a = this._getDragVerticalDirection(),
				o = this._getDragHorizontalDirection();
			return n ? this.floating ? o && "right" == o || "down" == a ? 2 : 1 : a && ("down" == a ? 2 : 1) : !1
		},
		_intersectsWithSides: function (e) {
			var i = t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
				s = t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
				n = this._getDragVerticalDirection(),
				a = this._getDragHorizontalDirection();
			return this.floating && a ? "right" == a && s || "left" == a && !s : n && ("down" == n && i || "up" == n && !i)
		},
		_getDragVerticalDirection: function () {
			var t = this.positionAbs.top - this.lastPositionAbs.top;
			return 0 != t && (t > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection: function () {
			var t = this.positionAbs.left - this.lastPositionAbs.left;
			return 0 != t && (t > 0 ? "right" : "left")
		},
		refresh: function (t) {
			return this._refreshItems(t), this.refreshPositions(), this
		},
		_connectWith: function () {
			var t = this.options;
			return t.connectWith.constructor == String ? [t.connectWith] : t.connectWith
		},
		_getItemsAsjQuery: function (e) {
			var i = [],
				s = [],
				n = this._connectWith();
			if (n && e)
				for (var a = n.length - 1; a >= 0; a--)
					for (var o = t(n[a]), r = o.length - 1; r >= 0; r--) {
						var h = t.data(o[r], this.widgetName);
						h && h != this && !h.options.disabled && s.push([t.isFunction(h.options.items) ? h.options.items.call(h.element) : t(h.options.items, h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), h])
					}
			s.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
				options: this.options,
				item: this.currentItem
			}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
			for (var a = s.length - 1; a >= 0; a--) s[a][0].each(function () {
				i.push(this)
			});
			return t(i)
		},
		_removeCurrentsFromItems: function () {
			var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = t.grep(this.items, function (t) {
				for (var i = 0; e.length > i; i++)
					if (e[i] == t.item[0]) return !1;
				return !0
			})
		},
		_refreshItems: function (e) {
			this.items = [], this.containers = [this];
			var i = this.items,
				s = [
					[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
						item: this.currentItem
					}) : t(this.options.items, this.element), this]
				],
				n = this._connectWith();
			if (n && this.ready)
				for (var a = n.length - 1; a >= 0; a--)
					for (var o = t(n[a]), r = o.length - 1; r >= 0; r--) {
						var h = t.data(o[r], this.widgetName);
						h && h != this && !h.options.disabled && (s.push([t.isFunction(h.options.items) ? h.options.items.call(h.element[0], e, {
							item: this.currentItem
						}) : t(h.options.items, h.element), h]), this.containers.push(h))
					}
			for (var a = s.length - 1; a >= 0; a--)
				for (var l = s[a][1], c = s[a][0], r = 0, u = c.length; u > r; r++) {
					var d = t(c[r]);
					d.data(this.widgetName + "-item", l), i.push({
						item: d,
						instance: l,
						width: 0,
						height: 0,
						left: 0,
						top: 0
					})
				}
		},
		refreshPositions: function (e) {
			this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
			for (var i = this.items.length - 1; i >= 0; i--) {
				var s = this.items[i];
				if (s.instance == this.currentContainer || !this.currentContainer || s.item[0] == this.currentItem[0]) {
					var n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item;
					e || (s.width = n.outerWidth(), s.height = n.outerHeight());
					var a = n.offset();
					s.left = a.left, s.top = a.top
				}
			}
			if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
			else
				for (var i = this.containers.length - 1; i >= 0; i--) {
					var a = this.containers[i].element.offset();
					this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight()
				}
			return this
		},
		_createPlaceholder: function (e) {
			e = e || this;
			var i = e.options;
			if (!i.placeholder || i.placeholder.constructor == String) {
				var s = i.placeholder;
				i.placeholder = {
					element: function () {
						var i = t(document.createElement(e.currentItem[0].nodeName)).addClass(s || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
						return s || (i.style.visibility = "hidden"), i
					},
					update: function (t, n) {
						(!s || i.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
					}
				}
			}
			e.placeholder = t(i.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), i.placeholder.update(e, e.placeholder)
		},
		_contactContainers: function (e) {
			for (var i = null, s = null, n = this.containers.length - 1; n >= 0; n--)
				if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
					if (this._intersectsWith(this.containers[n].containerCache)) {
						if (i && t.contains(this.containers[n].element[0], i.element[0])) continue;
						i = this.containers[n], s = n
					} else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", e, this._uiHash(this)), this.containers[n].containerCache.over = 0);
			if (i)
				if (1 === this.containers.length) this.containers[s]._trigger("over", e, this._uiHash(this)), this.containers[s].containerCache.over = 1;
				else {
					for (var a = 1e4, o = null, r = this.containers[s].floating ? "left" : "top", h = this.containers[s].floating ? "width" : "height", l = this.positionAbs[r] + this.offset.click[r], c = this.items.length - 1; c >= 0; c--)
						if (t.contains(this.containers[s].element[0], this.items[c].item[0]) && this.items[c].item[0] != this.currentItem[0]) {
							var u = this.items[c].item.offset()[r],
								d = !1;
							Math.abs(u - l) > Math.abs(u + this.items[c][h] - l) && (d = !0, u += this.items[c][h]), a > Math.abs(u - l) && (a = Math.abs(u - l), o = this.items[c], this.direction = d ? "up" : "down")
						}
					if (!o && !this.options.dropOnEmpty) return;
					this.currentContainer = this.containers[s], o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[s].element, !0), this._trigger("change", e, this._uiHash()), this.containers[s]._trigger("change", e, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[s]._trigger("over", e, this._uiHash(this)), this.containers[s].containerCache.over = 1
				}
		},
		_createHelper: function (e) {
			var i = this.options,
				s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" == i.helper ? this.currentItem.clone() : this.currentItem;
			return s.parents("body").length || t("parent" != i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] == this.currentItem[0] && (this._storedCSS = {
				width: this.currentItem[0].style.width,
				height: this.currentItem[0].style.height,
				position: this.currentItem.css("position"),
				top: this.currentItem.css("top"),
				left: this.currentItem.css("left")
			}), ("" == s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), ("" == s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
		},
		_adjustOffsetFromHelper: function (e) {
			"string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
				left: +e[0],
				top: +e[1] || 0
			}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_getParentOffset: function () {
			this.offsetParent = this.helper.offsetParent();
			var e = this.offsetParent.offset();
			return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
				top: 0,
				left: 0
			}), {
				top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function () {
			if ("relative" == this.cssPosition) {
				var t = this.currentItem.position();
				return {
					top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function () {
			this.margins = {
				left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top: parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions: function () {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function () {
			var e = this.options;
			if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(e.containment)) {
				var i = t(e.containment)[0],
					s = t(e.containment).offset(),
					n = "hidden" != t(i).css("overflow");
				this.containment = [s.left + (parseInt(t(i).css("borderLeftWidth"), 10) || 0) + (parseInt(t(i).css("paddingLeft"), 10) || 0) - this.margins.left, s.top + (parseInt(t(i).css("borderTopWidth"), 10) || 0) + (parseInt(t(i).css("paddingTop"), 10) || 0) - this.margins.top, s.left + (n ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t(i).css("borderLeftWidth"), 10) || 0) - (parseInt(t(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, s.top + (n ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t(i).css("borderTopWidth"), 10) || 0) - (parseInt(t(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
			}
		},
		_convertPositionTo: function (e, i) {
			i || (i = this.position);
			var s = "absolute" == e ? 1 : -1,
				n = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
				a = /(html|body)/i.test(n[0].tagName);
			return {
				top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
				left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
			}
		},
		_generatePosition: function (e) {
			var i = this.options,
				s = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				n = /(html|body)/i.test(s[0].tagName);
			"relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
			var a = e.pageX,
				o = e.pageY;
			if (this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), i.grid)) {
				var r = this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1];
				o = this.containment ? r - this.offset.click.top < this.containment[1] || r - this.offset.click.top > this.containment[3] ? r - this.offset.click.top < this.containment[1] ? r + i.grid[1] : r - i.grid[1] : r : r;
				var h = this.originalPageX + Math.round((a - this.originalPageX) / i.grid[0]) * i.grid[0];
				a = this.containment ? h - this.offset.click.left < this.containment[0] || h - this.offset.click.left > this.containment[2] ? h - this.offset.click.left < this.containment[0] ? h + i.grid[0] : h - i.grid[0] : h : h
			}
			return {
				top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()),
				left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft())
			}
		},
		_rearrange: function (t, e, i, s) {
			i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
			var n = this.counter;
			this._delay(function () {
				n == this.counter && this.refreshPositions(!s)
			})
		},
		_clear: function (e, i) {
			this.reverting = !1;
			var s = [];
			if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
				for (var n in this._storedCSS)("auto" == this._storedCSS[n] || "static" == this._storedCSS[n]) && (this._storedCSS[n] = "");
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
			} else this.currentItem.show();
			this.fromOutside && !i && s.push(function (t) {
				this._trigger("receive", t, this._uiHash(this.fromOutside))
			}), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || i || s.push(function (t) {
				this._trigger("update", t, this._uiHash())
			}), this !== this.currentContainer && (i || (s.push(function (t) {
				this._trigger("remove", t, this._uiHash())
			}), s.push(function (t) {
				return function (e) {
					t._trigger("receive", e, this._uiHash(this))
				}
			}.call(this, this.currentContainer)), s.push(function (t) {
				return function (e) {
					t._trigger("update", e, this._uiHash(this))
				}
			}.call(this, this.currentContainer))));
			for (var n = this.containers.length - 1; n >= 0; n--) i || s.push(function (t) {
				return function (e) {
					t._trigger("deactivate", e, this._uiHash(this))
				}
			}.call(this, this.containers[n])), this.containers[n].containerCache.over && (s.push(function (t) {
				return function (e) {
					t._trigger("out", e, this._uiHash(this))
				}
			}.call(this, this.containers[n])), this.containers[n].containerCache.over = 0);
			if (this._storedCursor && t("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
				if (!i) {
					this._trigger("beforeStop", e, this._uiHash());
					for (var n = 0; s.length > n; n++) s[n].call(this, e);
					this._trigger("stop", e, this._uiHash())
				}
				return this.fromOutside = !1, !1
			}
			if (i || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
				for (var n = 0; s.length > n; n++) s[n].call(this, e);
				this._trigger("stop", e, this._uiHash())
			}
			return this.fromOutside = !1, !0
		},
		_trigger: function () {
			t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
		},
		_uiHash: function (e) {
			var i = e || this;
			return {
				helper: i.helper,
				placeholder: i.placeholder || t([]),
				position: i.position,
				originalPosition: i.originalPosition,
				offset: i.positionAbs,
				item: i.currentItem,
				sender: e ? e.element : null
			}
		}
	})
})(jQuery);
(function (e) {
	var t = 0,
		i = {},
		a = {};
	i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", a.height = a.paddingTop = a.paddingBottom = a.borderTopWidth = a.borderBottomWidth = "show", e.widget("ui.accordion", {
		version: "1.9.2",
		options: {
			active: 0,
			animate: {},
			collapsible: !1,
			event: "click",
			header: "> li > :first-child,> :not(li):even",
			heightStyle: "auto",
			icons: {
				activeHeader: "ui-icon-triangle-1-s",
				header: "ui-icon-triangle-1-e"
			},
			activate: null,
			beforeActivate: null
		},
		_create: function () {
			var i = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++t),
				a = this.options;
			this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset"), this.headers = this.element.find(a.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this._hoverable(this.headers), this._focusable(this.headers), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), a.collapsible || a.active !== !1 && null != a.active || (a.active = 0), 0 > a.active && (a.active += this.headers.length), this.active = this._findActive(a.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"), this.active.next().addClass("ui-accordion-content-active").show(), this._createIcons(), this.refresh(), this.element.attr("role", "tablist"), this.headers.attr("role", "tab").each(function (t) {
				var a = e(this),
					n = a.attr("id"),
					r = a.next(),
					o = r.attr("id");
				n || (n = i + "-header-" + t, a.attr("id", n)), o || (o = i + "-panel-" + t, r.attr("id", o)), a.attr("aria-controls", o), r.attr("aria-labelledby", n)
			}).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
				"aria-selected": "false",
				tabIndex: -1
			}).next().attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}).hide(), this.active.length ? this.active.attr({
				"aria-selected": "true",
				tabIndex: 0
			}).next().attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}) : this.headers.eq(0).attr("tabIndex", 0), this._on(this.headers, {
				keydown: "_keydown"
			}), this._on(this.headers.next(), {
				keydown: "_panelKeyDown"
			}), this._setupEvents(a.event)
		},
		_getCreateEventData: function () {
			return {
				header: this.active,
				content: this.active.length ? this.active.next() : e()
			}
		},
		_createIcons: function () {
			var t = this.options.icons;
			t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
		},
		_destroyIcons: function () {
			this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
		},
		_destroy: function () {
			var e;
			this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
				/^ui-accordion/.test(this.id) && this.removeAttribute("id")
			}), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
				/^ui-accordion/.test(this.id) && this.removeAttribute("id")
			}), "content" !== this.options.heightStyle && e.css("height", "")
		},
		_setOption: function (e, t) {
			return "active" === e ? (this._activate(t), undefined) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t), undefined)
		},
		_keydown: function (t) {
			if (!t.altKey && !t.ctrlKey) {
				var i = e.ui.keyCode,
					a = this.headers.length,
					n = this.headers.index(t.target),
					r = !1;
				switch (t.keyCode) {
					case i.RIGHT:
					case i.DOWN:
						r = this.headers[(n + 1) % a];
						break;
					case i.LEFT:
					case i.UP:
						r = this.headers[(n - 1 + a) % a];
						break;
					case i.SPACE:
					case i.ENTER:
						this._eventHandler(t);
						break;
					case i.HOME:
						r = this.headers[0];
						break;
					case i.END:
						r = this.headers[a - 1]
				}
				r && (e(t.target).attr("tabIndex", -1), e(r).attr("tabIndex", 0), r.focus(), t.preventDefault())
			}
		},
		_panelKeyDown: function (t) {
			t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
		},
		refresh: function () {
			var t, i, a = this.options.heightStyle,
				n = this.element.parent();
			"fill" === a ? (e.support.minHeight || (i = n.css("overflow"), n.css("overflow", "hidden")), t = n.height(), this.element.siblings(":visible").each(function () {
				var i = e(this),
					a = i.css("position");
				"absolute" !== a && "fixed" !== a && (t -= i.outerHeight(!0))
			}), i && n.css("overflow", i), this.headers.each(function () {
				t -= e(this).outerHeight(!0)
			}), this.headers.next().each(function () {
				e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
			}).css("overflow", "auto")) : "auto" === a && (t = 0, this.headers.next().each(function () {
				t = Math.max(t, e(this).css("height", "").height())
			}).height(t))
		},
		_activate: function (t) {
			var i = this._findActive(t)[0];
			i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: e.noop
			}))
		},
		_findActive: function (t) {
			return "number" == typeof t ? this.headers.eq(t) : e()
		},
		_setupEvents: function (t) {
			var i = {};
			t && (e.each(t.split(" "), function (e, t) {
				i[t] = "_eventHandler"
			}), this._on(this.headers, i))
		},
		_eventHandler: function (t) {
			var i = this.options,
				a = this.active,
				n = e(t.currentTarget),
				r = n[0] === a[0],
				o = r && i.collapsible,
				s = o ? e() : n.next(),
				c = a.next(),
				d = {
					oldHeader: a,
					oldPanel: c,
					newHeader: o ? e() : n,
					newPanel: s
				};
			t.preventDefault(), r && !i.collapsible || this._trigger("beforeActivate", t, d) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = r ? e() : n, this._toggle(d), a.removeClass("ui-accordion-header-active ui-state-active"), i.icons && a.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), r || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
		},
		_toggle: function (t) {
			var i = t.newPanel,
				a = this.prevShow.length ? this.prevShow : t.oldPanel;
			this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = a, this.options.animate ? this._animate(i, a, t) : (a.hide(), i.show(), this._toggleComplete(t)), a.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}), a.prev().attr("aria-selected", "false"), i.length && a.length ? a.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function () {
				return 0 === e(this).attr("tabIndex")
			}).attr("tabIndex", -1), i.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}).prev().attr({
				"aria-selected": "true",
				tabIndex: 0
			})
		},
		_animate: function (e, t, n) {
			var r, o, s, c = this,
				d = 0,
				h = e.length && (!t.length || e.index() < t.index()),
				l = this.options.animate || {},
				u = h && l.down || l,
				v = function () {
					c._toggleComplete(n)
				};
			return "number" == typeof u && (s = u), "string" == typeof u && (o = u), o = o || u.easing || l.easing, s = s || u.duration || l.duration, t.length ? e.length ? (r = e.show().outerHeight(), t.animate(i, {
				duration: s,
				easing: o,
				step: function (e, t) {
					t.now = Math.round(e)
				}
			}), e.hide().animate(a, {
				duration: s,
				easing: o,
				complete: v,
				step: function (e, i) {
					i.now = Math.round(e), "height" !== i.prop ? d += i.now : "content" !== c.options.heightStyle && (i.now = Math.round(r - t.outerHeight() - d), d = 0)
				}
			}), undefined) : t.animate(i, s, o, v) : e.animate(a, s, o, v)
		},
		_toggleComplete: function (e) {
			var t = e.oldPanel;
			t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
		}
	}), e.uiBackCompat !== !1 && (function (e, t) {
		e.extend(t.options, {
			navigation: !1,
			navigationFilter: function () {
				return this.href.toLowerCase() === location.href.toLowerCase()
			}
		});
		var i = t._create;
		t._create = function () {
			if (this.options.navigation) {
				var t = this,
					a = this.element.find(this.options.header),
					n = a.next(),
					r = a.add(n).find("a").filter(this.options.navigationFilter)[0];
				r && a.add(n).each(function (i) {
					return e.contains(this, r) ? (t.options.active = Math.floor(i / 2), !1) : undefined
				})
			}
			i.call(this)
		}
	}(jQuery, jQuery.ui.accordion.prototype), function (e, t) {
		e.extend(t.options, {
			heightStyle: null,
			autoHeight: !0,
			clearStyle: !1,
			fillSpace: !1
		});
		var i = t._create,
			a = t._setOption;
		e.extend(t, {
			_create: function () {
				this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(), i.call(this)
			},
			_setOption: function (e) {
				("autoHeight" === e || "clearStyle" === e || "fillSpace" === e) && (this.options.heightStyle = this._mergeHeightStyle()), a.apply(this, arguments)
			},
			_mergeHeightStyle: function () {
				var e = this.options;
				return e.fillSpace ? "fill" : e.clearStyle ? "content" : e.autoHeight ? "auto" : undefined
			}
		})
	}(jQuery, jQuery.ui.accordion.prototype), function (e, t) {
		e.extend(t.options.icons, {
			activeHeader: null,
			headerSelected: "ui-icon-triangle-1-s"
		});
		var i = t._createIcons;
		t._createIcons = function () {
			this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected), i.call(this)
		}
	}(jQuery, jQuery.ui.accordion.prototype), function (e, t) {
		t.activate = t._activate;
		var i = t._findActive;
		t._findActive = function (e) {
			return -1 === e && (e = !1), e && "number" != typeof e && (e = this.headers.index(this.headers.filter(e)), -1 === e && (e = !1)), i.call(this, e)
		}
	}(jQuery, jQuery.ui.accordion.prototype), jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh, function (e, t) {
		e.extend(t.options, {
			change: null,
			changestart: null
		});
		var i = t._trigger;
		t._trigger = function (e, t, a) {
			var n = i.apply(this, arguments);
			return n ? ("beforeActivate" === e ? n = i.call(this, "changestart", t, {
				oldHeader: a.oldHeader,
				oldContent: a.oldPanel,
				newHeader: a.newHeader,
				newContent: a.newPanel
			}) : "activate" === e && (n = i.call(this, "change", t, {
				oldHeader: a.oldHeader,
				oldContent: a.oldPanel,
				newHeader: a.newHeader,
				newContent: a.newPanel
			})), n) : !1
		}
	}(jQuery, jQuery.ui.accordion.prototype), function (e, t) {
		e.extend(t.options, {
			animate: null,
			animated: "slide"
		});
		var i = t._create;
		t._create = function () {
			var e = this.options;
			null === e.animate && (e.animate = e.animated ? "slide" === e.animated ? 300 : "bounceslide" === e.animated ? {
				duration: 200,
				down: {
					easing: "easeOutBounce",
					duration: 1e3
				}
			} : e.animated : !1), i.call(this)
		}
	}(jQuery, jQuery.ui.accordion.prototype))
})(jQuery);
(function (e) {
	var t = 0;
	e.widget("ui.autocomplete", {
		version: "1.9.2",
		defaultElement: "<input>",
		options: {
			appendTo: "body",
			autoFocus: !1,
			delay: 300,
			minLength: 1,
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			response: null,
			search: null,
			select: null
		},
		pending: 0,
		_create: function () {
			var t, i, n;
			this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
				keydown: function (s) {
					if (this.element.prop("readOnly")) return t = !0, n = !0, i = !0, undefined;
					t = !1, n = !1, i = !1;
					var a = e.ui.keyCode;
					switch (s.keyCode) {
						case a.PAGE_UP:
							t = !0, this._move("previousPage", s);
							break;
						case a.PAGE_DOWN:
							t = !0, this._move("nextPage", s);
							break;
						case a.UP:
							t = !0, this._keyEvent("previous", s);
							break;
						case a.DOWN:
							t = !0, this._keyEvent("next", s);
							break;
						case a.ENTER:
						case a.NUMPAD_ENTER:
							this.menu.active && (t = !0, s.preventDefault(), this.menu.select(s));
							break;
						case a.TAB:
							this.menu.active && this.menu.select(s);
							break;
						case a.ESCAPE:
							this.menu.element.is(":visible") && (this._value(this.term), this.close(s), s.preventDefault());
							break;
						default:
							i = !0, this._searchTimeout(s)
					}
				},
				keypress: function (n) {
					if (t) return t = !1, n.preventDefault(), undefined;
					if (!i) {
						var s = e.ui.keyCode;
						switch (n.keyCode) {
							case s.PAGE_UP:
								this._move("previousPage", n);
								break;
							case s.PAGE_DOWN:
								this._move("nextPage", n);
								break;
							case s.UP:
								this._keyEvent("previous", n);
								break;
							case s.DOWN:
								this._keyEvent("next", n)
						}
					}
				},
				input: function (e) {
					return n ? (n = !1, e.preventDefault(), undefined) : (this._searchTimeout(e), undefined)
				},
				focus: function () {
					this.selectedItem = null, this.previous = this._value()
				},
				blur: function (e) {
					return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(e), this._change(e), undefined)
				}
			}), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
				input: e(),
				role: null
			}).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {
				mousedown: function (t) {
					t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
						delete this.cancelBlur
					});
					var i = this.menu.element[0];
					e(t.target).closest(".ui-menu-item").length || this._delay(function () {
						var t = this;
						this.document.one("mousedown", function (n) {
							n.target === t.element[0] || n.target === i || e.contains(i, n.target) || t.close()
						})
					})
				},
				menufocus: function (t, i) {
					if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), this.document.one("mousemove", function () {
						e(t.target).trigger(t.originalEvent)
					}), undefined;
					var n = i.item.data("ui-autocomplete-item") || i.item.data("item.autocomplete");
					!1 !== this._trigger("focus", t, {
						item: n
					}) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value) : this.liveRegion.text(n.value)
				},
				menuselect: function (e, t) {
					var i = t.item.data("ui-autocomplete-item") || t.item.data("item.autocomplete"),
						n = this.previous;
					this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function () {
						this.previous = n, this.selectedItem = i
					})), !1 !== this._trigger("select", e, {
						item: i
					}) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
				}
			}), this.liveRegion = e("<span>", {
				role: "status",
				"aria-live": "polite"
			}).addClass("ui-helper-hidden-accessible").insertAfter(this.element), e.fn.bgiframe && this.menu.element.bgiframe(), this._on(this.window, {
				beforeunload: function () {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_destroy: function () {
			clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
		},
		_setOption: function (e, t) {
			this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this.document.find(t || "body")[0]), "disabled" === e && t && this.xhr && this.xhr.abort()
		},
		_isMultiLine: function () {
			return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
		},
		_initSource: function () {
			var t, i, n = this;
			e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, n) {
				n(e.ui.autocomplete.filter(t, i.term))
			}) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, s) {
				n.xhr && n.xhr.abort(), n.xhr = e.ajax({
					url: i,
					data: t,
					dataType: "json",
					success: function (e) {
						s(e)
					},
					error: function () {
						s([])
					}
				})
			}) : this.source = this.options.source
		},
		_searchTimeout: function (e) {
			clearTimeout(this.searching), this.searching = this._delay(function () {
				this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
			}, this.options.delay)
		},
		search: function (e, t) {
			return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : undefined
		},
		_search: function (e) {
			this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
				term: e
			}, this._response())
		},
		_response: function () {
			var e = this,
				i = ++t;
			return function (n) {
				i === t && e.__response(n), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading")
			}
		},
		__response: function (e) {
			e && (e = this._normalize(e)), this._trigger("response", null, {
				content: e
			}), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
		},
		close: function (e) {
			this.cancelSearch = !0, this._close(e)
		},
		_close: function (e) {
			this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
		},
		_change: function (e) {
			this.previous !== this._value() && this._trigger("change", e, {
				item: this.selectedItem
			})
		},
		_normalize: function (t) {
			return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
				return "string" == typeof t ? {
					label: t,
					value: t
				} : e.extend({
					label: t.label || t.value,
					value: t.value || t.label
				}, t)
			})
		},
		_suggest: function (t) {
			var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
			this._renderMenu(i, t), this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({
				of: this.element
			}, this.options.position)), this.options.autoFocus && this.menu.next()
		},
		_resizeMenu: function () {
			var e = this.menu.element;
			e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
		},
		_renderMenu: function (t, i) {
			var n = this;
			e.each(i, function (e, i) {
				n._renderItemData(t, i)
			})
		},
		_renderItemData: function (e, t) {
			return this._renderItem(e, t).data("ui-autocomplete-item", t)
		},
		_renderItem: function (t, i) {
			return e("<li>").append(e("<a>").text(i.label)).appendTo(t)
		},
		_move: function (e, t) {
			return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[e](t), undefined) : (this.search(null, t), undefined)
		},
		widget: function () {
			return this.menu.element
		},
		_value: function () {
			return this.valueMethod.apply(this.element, arguments)
		},
		_keyEvent: function (e, t) {
			(!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
		}
	}), e.extend(e.ui.autocomplete, {
		escapeRegex: function (e) {
			return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
		},
		filter: function (t, i) {
			var n = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
			return e.grep(t, function (e) {
				return n.test(e.label || e.value || e)
			})
		}
	}), e.widget("ui.autocomplete", e.ui.autocomplete, {
		options: {
			messages: {
				noResults: "No search results.",
				results: function (e) {
					return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
				}
			}
		},
		__response: function (e) {
			var t;
			this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
		}
	})
})(jQuery);
(function (e) {
	var t, i, n, s, a = "ui-button ui-widget ui-state-default ui-corner-all",
		o = "ui-state-hover ui-state-active ",
		r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
		u = function () {
			var t = e(this).find(":ui-button");
			setTimeout(function () {
				t.button("refresh")
			}, 1)
		},
		h = function (t) {
			var i = t.name,
				n = t.form,
				s = e([]);
			return i && (s = n ? e(n).find("[name='" + i + "']") : e("[name='" + i + "']", t.ownerDocument).filter(function () {
				return !this.form
			})), s
		};
	e.widget("ui.button", {
		version: "1.9.2",
		defaultElement: "<button>",
		options: {
			disabled: null,
			text: !0,
			label: null,
			icons: {
				primary: null,
				secondary: null
			}
		},
		_create: function () {
			this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, u), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
			var o = this,
				r = this.options,
				l = "checkbox" === this.type || "radio" === this.type,
				c = l ? "" : "ui-state-active",
				d = "ui-state-focus";
			null === r.label && (r.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(a).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
				r.disabled || this === t && e(this).addClass("ui-state-active")
			}).bind("mouseleave" + this.eventNamespace, function () {
				r.disabled || e(this).removeClass(c)
			}).bind("click" + this.eventNamespace, function (e) {
				r.disabled && (e.preventDefault(), e.stopImmediatePropagation())
			}), this.element.bind("focus" + this.eventNamespace, function () {
				o.buttonElement.addClass(d)
			}).bind("blur" + this.eventNamespace, function () {
				o.buttonElement.removeClass(d)
			}), l && (this.element.bind("change" + this.eventNamespace, function () {
				s || o.refresh()
			}), this.buttonElement.bind("mousedown" + this.eventNamespace, function (e) {
				r.disabled || (s = !1, i = e.pageX, n = e.pageY)
			}).bind("mouseup" + this.eventNamespace, function (e) {
				r.disabled || (i !== e.pageX || n !== e.pageY) && (s = !0)
			})), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
				return r.disabled || s ? !1 : (e(this).toggleClass("ui-state-active"), o.buttonElement.attr("aria-pressed", o.element[0].checked), undefined)
			}) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
				if (r.disabled || s) return !1;
				e(this).addClass("ui-state-active"), o.buttonElement.attr("aria-pressed", "true");
				var t = o.element[0];
				h(t).not(t).map(function () {
					return e(this).button("widget")[0]
				}).removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
				return r.disabled ? !1 : (e(this).addClass("ui-state-active"), t = this, o.document.one("mouseup", function () {
					t = null
				}), undefined)
			}).bind("mouseup" + this.eventNamespace, function () {
				return r.disabled ? !1 : (e(this).removeClass("ui-state-active"), undefined)
			}).bind("keydown" + this.eventNamespace, function (t) {
				return r.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), undefined)
			}).bind("keyup" + this.eventNamespace, function () {
				e(this).removeClass("ui-state-active")
			}), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
				t.keyCode === e.ui.keyCode.SPACE && e(this).click()
			})), this._setOption("disabled", r.disabled), this._resetButton()
		},
		_determineButtonType: function () {
			var e, t, i;
			this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
		},
		widget: function () {
			return this.buttonElement
		},
		_destroy: function () {
			this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(a + " " + o + " " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
		},
		_setOption: function (e, t) {
			return this._super(e, t), "disabled" === e ? (t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), undefined) : (this._resetButton(), undefined)
		},
		refresh: function () {
			var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
			t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? h(this.element[0]).each(function () {
				e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
		},
		_resetButton: function () {
			if ("input" === this.type) return this.options.label && this.element.val(this.options.label), undefined;
			var t = this.buttonElement.removeClass(r),
				i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
				n = this.options.icons,
				s = n.primary && n.secondary,
				a = [];
			n.primary || n.secondary ? (this.options.text && a.push("ui-button-text-icon" + (s ? "s" : n.primary ? "-primary" : "-secondary")), n.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), n.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), this.options.text || (a.push(s ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : a.push("ui-button-text-only"), t.addClass(a.join(" "))
		}
	}), e.widget("ui.buttonset", {
		version: "1.9.2",
		options: {
			items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
		},
		_create: function () {
			this.element.addClass("ui-buttonset")
		},
		_init: function () {
			this.refresh()
		},
		_setOption: function (e, t) {
			"disabled" === e && this.buttons.button("option", e, t), this._super(e, t)
		},
		refresh: function () {
			var t = "rtl" === this.element.css("direction");
			this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
				return e(this).button("widget")[0]
			}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
		},
		_destroy: function () {
			this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
				return e(this).button("widget")[0]
			}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
		}
	})
})(jQuery);
(function ($, undefined) {
	function Datepicker() {
		this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: !1,
			showMonthAfterYear: !1,
			yearSuffix: ""
		}, this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: !1,
			hideIfNoPrevNext: !1,
			navigationAsDateFormat: !1,
			gotoCurrent: !1,
			changeMonth: !1,
			changeYear: !1,
			yearRange: "c-10:c+10",
			showOtherMonths: !1,
			selectOtherMonths: !1,
			showWeek: !1,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: !0,
			showButtonPanel: !1,
			autoSize: !1,
			disabled: !1
		}, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
	}

	function bindHover(e) {
		var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return e.delegate(t, "mouseout", function () {
			$(this).removeClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover")
		}).delegate(t, "mouseover", function () {
			$.datepicker._isDisabledDatepicker(instActive.inline ? e.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"))
		})
	}

	function extendRemove(e, t) {
		$.extend(e, t);
		for (var i in t)(null == t[i] || t[i] == undefined) && (e[i] = t[i]);
		return e
	}
	$.extend($.ui, {
		datepicker: {
			version: "1.9.2"
		}
	});
	var PROP_NAME = "datepicker",
		dpuuid = (new Date).getTime(),
		instActive;
	$.extend(Datepicker.prototype, {
		markerClassName: "hasDatepicker",
		maxRows: 4,
		log: function () {
			this.debug && console.log.apply("", arguments)
		},
		_widgetDatepicker: function () {
			return this.dpDiv
		},
		setDefaults: function (e) {
			return extendRemove(this._defaults, e || {}), this
		},
		_attachDatepicker: function (target, settings) {
			var inlineSettings = null;
			for (var attrName in this._defaults) {
				var attrValue = target.getAttribute("date:" + attrName);
				if (attrValue) {
					inlineSettings = inlineSettings || {};
					try {
						inlineSettings[attrName] = eval(attrValue)
					} catch (err) {
						inlineSettings[attrName] = attrValue
					}
				}
			}
			var nodeName = target.nodeName.toLowerCase(),
				inline = "div" == nodeName || "span" == nodeName;
			target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
			var inst = this._newInst($(target), inline);
			inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
		},
		_newInst: function (e, t) {
			var i = e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
			return {
				id: i,
				input: e,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: t,
				dpDiv: t ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
			}
		},
		_connectDatepicker: function (e, t) {
			var i = $(e);
			t.append = $([]), t.trigger = $([]), i.hasClass(this.markerClassName) || (this._attachments(i, t), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (e, i, a) {
				t.settings[i] = a
			}).bind("getData.datepicker", function (e, i) {
				return this._get(t, i)
			}), this._autoSize(t), $.data(e, PROP_NAME, t), t.settings.disabled && this._disableDatepicker(e))
		},
		_attachments: function (e, t) {
			var i = this._get(t, "appendText"),
				a = this._get(t, "isRTL");
			t.append && t.append.remove(), i && (t.append = $('<span class="' + this._appendClass + '">' + i + "</span>"), e[a ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove();
			var n = this._get(t, "showOn");
			if (("focus" == n || "both" == n) && e.focus(this._showDatepicker), "button" == n || "both" == n) {
				var s = this._get(t, "buttonText"),
					r = this._get(t, "buttonImage");
				t.trigger = $(this._get(t, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
					src: r,
					alt: s,
					title: s
				}) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == r ? s : $("<img/>").attr({
					src: r,
					alt: s,
					title: s
				}))), e[a ? "before" : "after"](t.trigger), t.trigger.click(function () {
					return $.datepicker._datepickerShowing && $.datepicker._lastInput == e[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != e[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(e[0])) : $.datepicker._showDatepicker(e[0]), !1
				})
			}
		},
		_autoSize: function (e) {
			if (this._get(e, "autoSize") && !e.inline) {
				var t = new Date(2009, 11, 20),
					i = this._get(e, "dateFormat");
				if (i.match(/[DM]/)) {
					var a = function (e) {
						for (var t = 0, i = 0, a = 0; e.length > a; a++) e[a].length > t && (t = e[a].length, i = a);
						return i
					};
					t.setMonth(a(this._get(e, i.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(a(this._get(e, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
				}
				e.input.attr("size", this._formatDate(e, t).length)
			}
		},
		_inlineDatepicker: function (e, t) {
			var i = $(e);
			i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker", function (e, i, a) {
				t.settings[i] = a
			}).bind("getData.datepicker", function (e, i) {
				return this._get(t, i)
			}), $.data(e, PROP_NAME, t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block"))
		},
		_dialogDatepicker: function (e, t, i, a, n) {
			var s = this._dialogInst;
			if (!s) {
				this.uuid += 1;
				var r = "dp" + this.uuid;
				this._dialogInput = $('<input type="text" id="' + r + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), s = this._dialogInst = this._newInst(this._dialogInput, !1), s.settings = {}, $.data(this._dialogInput[0], PROP_NAME, s)
			}
			if (extendRemove(s.settings, a || {}), t = t && t.constructor == Date ? this._formatDate(s, t) : t, this._dialogInput.val(t), this._pos = n ? n.length ? n : [n.pageX, n.pageY] : null, !this._pos) {
				var o = document.documentElement.clientWidth,
					u = document.documentElement.clientHeight,
					d = document.documentElement.scrollLeft || document.body.scrollLeft,
					c = document.documentElement.scrollTop || document.body.scrollTop;
				this._pos = [o / 2 - 100 + d, u / 2 - 150 + c]
			}
			return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, s), this
		},
		_destroyDatepicker: function (e) {
			var t = $(e),
				i = $.data(e, PROP_NAME);
			if (t.hasClass(this.markerClassName)) {
				var a = e.nodeName.toLowerCase();
				$.removeData(e, PROP_NAME), "input" == a ? (i.append.remove(), i.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == a || "span" == a) && t.removeClass(this.markerClassName).empty()
			}
		},
		_enableDatepicker: function (e) {
			var t = $(e),
				i = $.data(e, PROP_NAME);
			if (t.hasClass(this.markerClassName)) {
				var a = e.nodeName.toLowerCase();
				if ("input" == a) e.disabled = !1, i.trigger.filter("button").each(function () {
					this.disabled = !1
				}).end().filter("img").css({
					opacity: "1.0",
					cursor: ""
				});
				else if ("div" == a || "span" == a) {
					var n = t.children("." + this._inlineClass);
					n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
				}
				this._disabledInputs = $.map(this._disabledInputs, function (t) {
					return t == e ? null : t
				})
			}
		},
		_disableDatepicker: function (e) {
			var t = $(e),
				i = $.data(e, PROP_NAME);
			if (t.hasClass(this.markerClassName)) {
				var a = e.nodeName.toLowerCase();
				if ("input" == a) e.disabled = !0, i.trigger.filter("button").each(function () {
					this.disabled = !0
				}).end().filter("img").css({
					opacity: "0.5",
					cursor: "default"
				});
				else if ("div" == a || "span" == a) {
					var n = t.children("." + this._inlineClass);
					n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
				}
				this._disabledInputs = $.map(this._disabledInputs, function (t) {
					return t == e ? null : t
				}), this._disabledInputs[this._disabledInputs.length] = e
			}
		},
		_isDisabledDatepicker: function (e) {
			if (!e) return !1;
			for (var t = 0; this._disabledInputs.length > t; t++)
				if (this._disabledInputs[t] == e) return !0;
			return !1
		},
		_getInst: function (e) {
			try {
				return $.data(e, PROP_NAME)
			} catch (t) {
				throw "Missing instance data for this datepicker"
			}
		},
		_optionDatepicker: function (e, t, i) {
			var a = this._getInst(e);
			if (2 == arguments.length && "string" == typeof t) return "defaults" == t ? $.extend({}, $.datepicker._defaults) : a ? "all" == t ? $.extend({}, a.settings) : this._get(a, t) : null;
			var n = t || {};
			if ("string" == typeof t && (n = {}, n[t] = i), a) {
				this._curInst == a && this._hideDatepicker();
				var s = this._getDateDatepicker(e, !0),
					r = this._getMinMaxDate(a, "min"),
					o = this._getMinMaxDate(a, "max");
				extendRemove(a.settings, n), null !== r && n.dateFormat !== undefined && n.minDate === undefined && (a.settings.minDate = this._formatDate(a, r)), null !== o && n.dateFormat !== undefined && n.maxDate === undefined && (a.settings.maxDate = this._formatDate(a, o)), this._attachments($(e), a), this._autoSize(a), this._setDate(a, s), this._updateAlternate(a), this._updateDatepicker(a)
			}
		},
		_changeDatepicker: function (e, t, i) {
			this._optionDatepicker(e, t, i)
		},
		_refreshDatepicker: function (e) {
			var t = this._getInst(e);
			t && this._updateDatepicker(t)
		},
		_setDateDatepicker: function (e, t) {
			var i = this._getInst(e);
			i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
		},
		_getDateDatepicker: function (e, t) {
			var i = this._getInst(e);
			return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
		},
		_doKeyDown: function (e) {
			var t = $.datepicker._getInst(e.target),
				i = !0,
				a = t.dpDiv.is(".ui-datepicker-rtl");
			if (t._keyEvent = !0, $.datepicker._datepickerShowing) switch (e.keyCode) {
				case 9:
					$.datepicker._hideDatepicker(), i = !1;
					break;
				case 13:
					var n = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t.dpDiv);
					n[0] && $.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, n[0]);
					var s = $.datepicker._get(t, "onSelect");
					if (s) {
						var r = $.datepicker._formatDate(t);
						s.apply(t.input ? t.input[0] : null, [r, t])
					} else $.datepicker._hideDatepicker();
					return !1;
				case 27:
					$.datepicker._hideDatepicker();
					break;
				case 33:
					$.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
					break;
				case 34:
					$.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
					break;
				case 35:
					(e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target), i = e.ctrlKey || e.metaKey;
					break;
				case 36:
					(e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target), i = e.ctrlKey || e.metaKey;
					break;
				case 37:
					(e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
					break;
				case 38:
					(e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, -7, "D"), i = e.ctrlKey || e.metaKey;
					break;
				case 39:
					(e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
					break;
				case 40:
					(e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, 7, "D"), i = e.ctrlKey || e.metaKey;
					break;
				default:
					i = !1
			} else 36 == e.keyCode && e.ctrlKey ? $.datepicker._showDatepicker(this) : i = !1;
			i && (e.preventDefault(), e.stopPropagation())
		},
		_doKeyPress: function (e) {
			var t = $.datepicker._getInst(e.target);
			if ($.datepicker._get(t, "constrainInput")) {
				var i = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
					a = String.fromCharCode(e.charCode == undefined ? e.keyCode : e.charCode);
				return e.ctrlKey || e.metaKey || " " > a || !i || i.indexOf(a) > -1
			}
		},
		_doKeyUp: function (e) {
			var t = $.datepicker._getInst(e.target);
			if (t.input.val() != t.lastVal) try {
				var i = $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, $.datepicker._getFormatConfig(t));
				i && ($.datepicker._setDateFromField(t), $.datepicker._updateAlternate(t), $.datepicker._updateDatepicker(t))
			} catch (a) {
				$.datepicker.log(a)
			}
			return !0
		},
		_showDatepicker: function (e) {
			if (e = e.target || e, "input" != e.nodeName.toLowerCase() && (e = $("input", e.parentNode)[0]), !$.datepicker._isDisabledDatepicker(e) && $.datepicker._lastInput != e) {
				var t = $.datepicker._getInst(e);
				$.datepicker._curInst && $.datepicker._curInst != t && ($.datepicker._curInst.dpDiv.stop(!0, !0), t && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
				var i = $.datepicker._get(t, "beforeShow"),
					a = i ? i.apply(e, [e, t]) : {};
				if (a !== !1) {
					extendRemove(t.settings, a), t.lastVal = null, $.datepicker._lastInput = e, $.datepicker._setDateFromField(t), $.datepicker._inDialog && (e.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e), $.datepicker._pos[1] += e.offsetHeight);
					var n = !1;
					$(e).parents().each(function () {
						return n |= "fixed" == $(this).css("position"), !n
					});
					var s = {
						left: $.datepicker._pos[0],
						top: $.datepicker._pos[1]
					};
					if ($.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({
							position: "absolute",
							display: "block",
							top: "-1000px"
						}), $.datepicker._updateDatepicker(t), s = $.datepicker._checkOffset(t, s, n), t.dpDiv.css({
							position: $.datepicker._inDialog && $.blockUI ? "static" : n ? "fixed" : "absolute",
							display: "none",
							left: s.left + "px",
							top: s.top + "px"
						}), !t.inline) {
						var r = $.datepicker._get(t, "showAnim"),
							o = $.datepicker._get(t, "duration"),
							u = function () {
								var e = t.dpDiv.find("iframe.ui-datepicker-cover");
								if (e.length) {
									var i = $.datepicker._getBorders(t.dpDiv);
									e.css({
										left: -i[0],
										top: -i[1],
										width: t.dpDiv.outerWidth(),
										height: t.dpDiv.outerHeight()
									})
								}
							};
						t.dpDiv.zIndex($(e).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[r] || $.effects[r]) ? t.dpDiv.show(r, $.datepicker._get(t, "showOptions"), o, u) : t.dpDiv[r || "show"](r ? o : null, u), r && o || u(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), $.datepicker._curInst = t
					}
				}
			}
		},
		_updateDatepicker: function (e) {
			this.maxRows = 4;
			var t = $.datepicker._getBorders(e.dpDiv);
			instActive = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
			var i = e.dpDiv.find("iframe.ui-datepicker-cover");
			i.length && i.css({
				left: -t[0],
				top: -t[1],
				width: e.dpDiv.outerWidth(),
				height: e.dpDiv.outerHeight()
			}), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
			var a = this._getNumberOfMonths(e),
				n = a[1],
				s = 17;
			if (e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", s * n + "em"), e.dpDiv[(1 != a[0] || 1 != a[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == $.datepicker._curInst && $.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus(), e.yearshtml) {
				var r = e.yearshtml;
				setTimeout(function () {
					r === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), r = e.yearshtml = null
				}, 0)
			}
		},
		_getBorders: function (e) {
			var t = function (e) {
				return {
					thin: 1,
					medium: 2,
					thick: 3
				}[e] || e
			};
			return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
		},
		_checkOffset: function (e, t, i) {
			var a = e.dpDiv.outerWidth(),
				n = e.dpDiv.outerHeight(),
				s = e.input ? e.input.outerWidth() : 0,
				r = e.input ? e.input.outerHeight() : 0,
				o = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft()),
				u = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
			return t.left -= this._get(e, "isRTL") ? a - s : 0, t.left -= i && t.left == e.input.offset().left ? $(document).scrollLeft() : 0, t.top -= i && t.top == e.input.offset().top + r ? $(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + a > o && o > a ? Math.abs(t.left + a - o) : 0), t.top -= Math.min(t.top, t.top + n > u && u > n ? Math.abs(n + r) : 0), t
		},
		_findPos: function (e) {
			for (var t = this._getInst(e), i = this._get(t, "isRTL"); e && ("hidden" == e.type || 1 != e.nodeType || $.expr.filters.hidden(e));) e = e[i ? "previousSibling" : "nextSibling"];
			var a = $(e).offset();
			return [a.left, a.top]
		},
		_hideDatepicker: function (e) {
			var t = this._curInst;
			if (t && (!e || t == $.data(e, PROP_NAME)) && this._datepickerShowing) {
				var i = this._get(t, "showAnim"),
					a = this._get(t, "duration"),
					n = function () {
						$.datepicker._tidyDialog(t)
					};
				$.effects && ($.effects.effect[i] || $.effects[i]) ? t.dpDiv.hide(i, $.datepicker._get(t, "showOptions"), a, n) : t.dpDiv["slideDown" == i ? "slideUp" : "fadeIn" == i ? "fadeOut" : "hide"](i ? a : null, n), i || n(), this._datepickerShowing = !1;
				var s = this._get(t, "onClose");
				s && s.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
					position: "absolute",
					left: "0",
					top: "-100px"
				}), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
			}
		},
		_tidyDialog: function (e) {
			e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
		},
		_checkExternalClick: function (e) {
			if ($.datepicker._curInst) {
				var t = $(e.target),
					i = $.datepicker._getInst(t[0]);
				(t[0].id != $.datepicker._mainDivId && 0 == t.parents("#" + $.datepicker._mainDivId).length && !t.hasClass($.datepicker.markerClassName) && !t.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || t.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != i) && $.datepicker._hideDatepicker()
			}
		},
		_adjustDate: function (e, t, i) {
			var a = $(e),
				n = this._getInst(a[0]);
			this._isDisabledDatepicker(a[0]) || (this._adjustInstDate(n, t + ("M" == i ? this._get(n, "showCurrentAtPos") : 0), i), this._updateDatepicker(n))
		},
		_gotoToday: function (e) {
			var t = $(e),
				i = this._getInst(t[0]);
			if (this._get(i, "gotoCurrent") && i.currentDay) i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear;
			else {
				var a = new Date;
				i.selectedDay = a.getDate(), i.drawMonth = i.selectedMonth = a.getMonth(), i.drawYear = i.selectedYear = a.getFullYear()
			}
			this._notifyChange(i), this._adjustDate(t)
		},
		_selectMonthYear: function (e, t, i) {
			var a = $(e),
				n = this._getInst(a[0]);
			n["selected" + ("M" == i ? "Month" : "Year")] = n["draw" + ("M" == i ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(a)
		},
		_selectDay: function (e, t, i, a) {
			var n = $(e);
			if (!$(a).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(n[0])) {
				var s = this._getInst(n[0]);
				s.selectedDay = s.currentDay = $("a", a).html(), s.selectedMonth = s.currentMonth = t, s.selectedYear = s.currentYear = i, this._selectDate(e, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
			}
		},
		_clearDate: function (e) {
			var t = $(e);
			this._getInst(t[0]), this._selectDate(t, "")
		},
		_selectDate: function (e, t) {
			var i = $(e),
				a = this._getInst(i[0]);
			t = null != t ? t : this._formatDate(a), a.input && a.input.val(t), this._updateAlternate(a);
			var n = this._get(a, "onSelect");
			n ? n.apply(a.input ? a.input[0] : null, [t, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
		},
		_updateAlternate: function (e) {
			var t = this._get(e, "altField");
			if (t) {
				var i = this._get(e, "altFormat") || this._get(e, "dateFormat"),
					a = this._getDate(e),
					n = this.formatDate(i, a, this._getFormatConfig(e));
				$(t).each(function () {
					$(this).val(n)
				})
			}
		},
		noWeekends: function (e) {
			var t = e.getDay();
			return [t > 0 && 6 > t, ""]
		},
		iso8601Week: function (e) {
			var t = new Date(e.getTime());
			t.setDate(t.getDate() + 4 - (t.getDay() || 7));
			var i = t.getTime();
			return t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
		},
		parseDate: function (e, t, i) {
			if (null == e || null == t) throw "Invalid arguments";
			if (t = "object" == typeof t ? "" + t : t + "", "" == t) return null;
			var a = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
			a = "string" != typeof a ? a : (new Date).getFullYear() % 100 + parseInt(a, 10);
			for (var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, s = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, o = (i ? i.monthNames : null) || this._defaults.monthNames, u = -1, d = -1, c = -1, l = -1, h = !1, p = function (t) {
					var i = e.length > _ + 1 && e.charAt(_ + 1) == t;
					return i && _++, i
				}, g = function (e) {
					var i = p(e),
						a = "@" == e ? 14 : "!" == e ? 20 : "y" == e && i ? 4 : "o" == e ? 3 : 2,
						n = RegExp("^\\d{1," + a + "}"),
						s = t.substring(v).match(n);
					if (!s) throw "Missing number at position " + v;
					return v += s[0].length, parseInt(s[0], 10)
				}, f = function (e, i, a) {
					var n = $.map(p(e) ? a : i, function (e, t) {
							return [
								[t, e]
							]
						}).sort(function (e, t) {
							return -(e[1].length - t[1].length)
						}),
						s = -1;
					if ($.each(n, function (e, i) {
							var a = i[1];
							return t.substr(v, a.length).toLowerCase() == a.toLowerCase() ? (s = i[0], v += a.length, !1) : undefined
						}), -1 != s) return s + 1;
					throw "Unknown name at position " + v
				}, m = function () {
					if (t.charAt(v) != e.charAt(_)) throw "Unexpected literal at position " + v;
					v++
				}, v = 0, _ = 0; e.length > _; _++)
				if (h) "'" != e.charAt(_) || p("'") ? m() : h = !1;
				else switch (e.charAt(_)) {
					case "d":
						c = g("d");
						break;
					case "D":
						f("D", n, s);
						break;
					case "o":
						l = g("o");
						break;
					case "m":
						d = g("m");
						break;
					case "M":
						d = f("M", r, o);
						break;
					case "y":
						u = g("y");
						break;
					case "@":
						var y = new Date(g("@"));
						u = y.getFullYear(), d = y.getMonth() + 1, c = y.getDate();
						break;
					case "!":
						var y = new Date((g("!") - this._ticksTo1970) / 1e4);
						u = y.getFullYear(), d = y.getMonth() + 1, c = y.getDate();
						break;
					case "'":
						p("'") ? m() : h = !0;
						break;
					default:
						m()
				}
				if (t.length > v) {
					var b = t.substr(v);
					if (!/^\s+/.test(b)) throw "Extra/unparsed characters found in date: " + b
				}
			if (-1 == u ? u = (new Date).getFullYear() : 100 > u && (u += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (a >= u ? 0 : -100)), l > -1)
				for (d = 1, c = l;;) {
					var k = this._getDaysInMonth(u, d - 1);
					if (k >= c) break;
					d++, c -= k
				}
			var y = this._daylightSavingAdjust(new Date(u, d - 1, c));
			if (y.getFullYear() != u || y.getMonth() + 1 != d || y.getDate() != c) throw "Invalid date";
			return y
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
		formatDate: function (e, t, i) {
			if (!t) return "";
			var a = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
				n = (i ? i.dayNames : null) || this._defaults.dayNames,
				s = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
				r = (i ? i.monthNames : null) || this._defaults.monthNames,
				o = function (t) {
					var i = e.length > h + 1 && e.charAt(h + 1) == t;
					return i && h++, i
				},
				u = function (e, t, i) {
					var a = "" + t;
					if (o(e))
						for (; i > a.length;) a = "0" + a;
					return a
				},
				d = function (e, t, i, a) {
					return o(e) ? a[t] : i[t]
				},
				c = "",
				l = !1;
			if (t)
				for (var h = 0; e.length > h; h++)
					if (l) "'" != e.charAt(h) || o("'") ? c += e.charAt(h) : l = !1;
					else switch (e.charAt(h)) {
						case "d":
							c += u("d", t.getDate(), 2);
							break;
						case "D":
							c += d("D", t.getDay(), a, n);
							break;
						case "o":
							c += u("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
							break;
						case "m":
							c += u("m", t.getMonth() + 1, 2);
							break;
						case "M":
							c += d("M", t.getMonth(), s, r);
							break;
						case "y":
							c += o("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
							break;
						case "@":
							c += t.getTime();
							break;
						case "!":
							c += 1e4 * t.getTime() + this._ticksTo1970;
							break;
						case "'":
							o("'") ? c += "'" : l = !0;
							break;
						default:
							c += e.charAt(h)
					}
					return c
		},
		_possibleChars: function (e) {
			for (var t = "", i = !1, a = function (t) {
					var i = e.length > n + 1 && e.charAt(n + 1) == t;
					return i && n++, i
				}, n = 0; e.length > n; n++)
				if (i) "'" != e.charAt(n) || a("'") ? t += e.charAt(n) : i = !1;
				else switch (e.charAt(n)) {
					case "d":
					case "m":
					case "y":
					case "@":
						t += "0123456789";
						break;
					case "D":
					case "M":
						return null;
					case "'":
						a("'") ? t += "'" : i = !0;
						break;
					default:
						t += e.charAt(n)
				}
				return t
		},
		_get: function (e, t) {
			return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
		},
		_setDateFromField: function (e, t) {
			if (e.input.val() != e.lastVal) {
				var i, a, n = this._get(e, "dateFormat"),
					s = e.lastVal = e.input ? e.input.val() : null;
				i = a = this._getDefaultDate(e);
				var r = this._getFormatConfig(e);
				try {
					i = this.parseDate(n, s, r) || a
				} catch (o) {
					this.log(o), s = t ? "" : s
				}
				e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = s ? i.getDate() : 0, e.currentMonth = s ? i.getMonth() : 0, e.currentYear = s ? i.getFullYear() : 0, this._adjustInstDate(e)
			}
		},
		_getDefaultDate: function (e) {
			return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
		},
		_determineDate: function (e, t, i) {
			var a = function (e) {
					var t = new Date;
					return t.setDate(t.getDate() + e), t
				},
				n = function (t) {
					try {
						return $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), t, $.datepicker._getFormatConfig(e))
					} catch (i) {}
					for (var a = (t.toLowerCase().match(/^c/) ? $.datepicker._getDate(e) : null) || new Date, n = a.getFullYear(), s = a.getMonth(), r = a.getDate(), o = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = o.exec(t); u;) {
						switch (u[2] || "d") {
							case "d":
							case "D":
								r += parseInt(u[1], 10);
								break;
							case "w":
							case "W":
								r += 7 * parseInt(u[1], 10);
								break;
							case "m":
							case "M":
								s += parseInt(u[1], 10), r = Math.min(r, $.datepicker._getDaysInMonth(n, s));
								break;
							case "y":
							case "Y":
								n += parseInt(u[1], 10), r = Math.min(r, $.datepicker._getDaysInMonth(n, s))
						}
						u = o.exec(t)
					}
					return new Date(n, s, r)
				},
				s = null == t || "" === t ? i : "string" == typeof t ? n(t) : "number" == typeof t ? isNaN(t) ? i : a(t) : new Date(t.getTime());
			return s = s && "Invalid Date" == "" + s ? i : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
		},
		_daylightSavingAdjust: function (e) {
			return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
		},
		_setDate: function (e, t, i) {
			var a = !t,
				n = e.selectedMonth,
				s = e.selectedYear,
				r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
			e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), n == e.selectedMonth && s == e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(a ? "" : this._formatDate(e))
		},
		_getDate: function (e) {
			var t = !e.currentYear || e.input && "" == e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
			return t
		},
		_attachHandlers: function (e) {
			var t = this._get(e, "stepMonths"),
				i = "#" + e.id.replace(/\\\\/g, "\\");
			e.dpDiv.find("[data-handler]").map(function () {
				var e = {
					prev: function () {
						window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, -t, "M")
					},
					next: function () {
						window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, +t, "M")
					},
					hide: function () {
						window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
					},
					today: function () {
						window["DP_jQuery_" + dpuuid].datepicker._gotoToday(i)
					},
					selectDay: function () {
						return window["DP_jQuery_" + dpuuid].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
					},
					selectMonth: function () {
						return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "M"), !1
					},
					selectYear: function () {
						return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "Y"), !1
					}
				};
				$(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
			})
		},
		_generateHTML: function (e) {
			var t = new Date;
			t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
			var i = this._get(e, "isRTL"),
				a = this._get(e, "showButtonPanel"),
				n = this._get(e, "hideIfNoPrevNext"),
				s = this._get(e, "navigationAsDateFormat"),
				r = this._getNumberOfMonths(e),
				o = this._get(e, "showCurrentAtPos"),
				u = this._get(e, "stepMonths"),
				d = 1 != r[0] || 1 != r[1],
				c = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
				l = this._getMinMaxDate(e, "min"),
				h = this._getMinMaxDate(e, "max"),
				p = e.drawMonth - o,
				g = e.drawYear;
			if (0 > p && (p += 12, g--), h) {
				var f = this._daylightSavingAdjust(new Date(h.getFullYear(), h.getMonth() - r[0] * r[1] + 1, h.getDate()));
				for (f = l && l > f ? l : f; this._daylightSavingAdjust(new Date(g, p, 1)) > f;) p--, 0 > p && (p = 11, g--)
			}
			e.drawMonth = p, e.drawYear = g;
			var m = this._get(e, "prevText");
			m = s ? this.formatDate(m, this._daylightSavingAdjust(new Date(g, p - u, 1)), this._getFormatConfig(e)) : m;
			var v = this._canAdjustMonth(e, -1, g, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>" : n ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>",
				_ = this._get(e, "nextText");
			_ = s ? this.formatDate(_, this._daylightSavingAdjust(new Date(g, p + u, 1)), this._getFormatConfig(e)) : _;
			var y = this._canAdjustMonth(e, 1, g, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + _ + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + _ + "</span></a>" : n ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + _ + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + _ + "</span></a>",
				b = this._get(e, "currentText"),
				k = this._get(e, "gotoCurrent") && e.currentDay ? c : t;
			b = s ? this.formatDate(b, k, this._getFormatConfig(e)) : b;
			var D = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(e, "closeText") + "</button>",
				w = a ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (i ? D : "") + (this._isInRange(e, k) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + b + "</button>" : "") + (i ? "" : D) + "</div>" : "",
				M = parseInt(this._get(e, "firstDay"), 10);
			M = isNaN(M) ? 0 : M;
			var C = this._get(e, "showWeek"),
				x = this._get(e, "dayNames");
			this._get(e, "dayNamesShort");
			var I = this._get(e, "dayNamesMin"),
				N = this._get(e, "monthNames"),
				A = this._get(e, "monthNamesShort"),
				S = this._get(e, "beforeShowDay"),
				E = this._get(e, "showOtherMonths"),
				T = this._get(e, "selectOtherMonths");
			this._get(e, "calculateWeek") || this.iso8601Week;
			for (var P = this._getDefaultDate(e), Y = "", F = 0; r[0] > F; F++) {
				var j = "";
				this.maxRows = 4;
				for (var O = 0; r[1] > O; O++) {
					var H = this._daylightSavingAdjust(new Date(g, p, e.selectedDay)),
						R = " ui-corner-all",
						K = "";
					if (d) {
						if (K += '<div class="ui-datepicker-group', r[1] > 1) switch (O) {
							case 0:
								K += " ui-datepicker-group-first", R = " ui-corner-" + (i ? "right" : "left");
								break;
							case r[1] - 1:
								K += " ui-datepicker-group-last", R = " ui-corner-" + (i ? "left" : "right");
								break;
							default:
								K += " ui-datepicker-group-middle", R = ""
						}
						K += '">'
					}
					K += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + R + '">' + (/all|left/.test(R) && 0 == F ? i ? y : v : "") + (/all|right/.test(R) && 0 == F ? i ? v : y : "") + this._generateMonthYearHeader(e, p, g, l, h, F > 0 || O > 0, N, A) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
					for (var W = C ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "", L = 0; 7 > L; L++) {
						var B = (L + M) % 7;
						W += "<th" + ((L + M + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + x[B] + '">' + I[B] + "</span></th>"
					}
					K += W + "</tr></thead><tbody>";
					var U = this._getDaysInMonth(g, p);
					g == e.selectedYear && p == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, U));
					var Q = (this._getFirstDayOfMonth(g, p) - M + 7) % 7,
						z = Math.ceil((Q + U) / 7),
						V = d ? this.maxRows > z ? this.maxRows : z : z;
					this.maxRows = V;
					for (var G = this._daylightSavingAdjust(new Date(g, p, 1 - Q)), q = 0; V > q; q++) {
						K += "<tr>";
						for (var J = C ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(G) + "</td>" : "", L = 0; 7 > L; L++) {
							var X = S ? S.apply(e.input ? e.input[0] : null, [G]) : [!0, ""],
								Z = G.getMonth() != p,
								et = Z && !T || !X[0] || l && l > G || h && G > h;
							J += '<td class="' + ((L + M + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (Z ? " ui-datepicker-other-month" : "") + (G.getTime() == H.getTime() && p == e.selectedMonth && e._keyEvent || P.getTime() == G.getTime() && P.getTime() == H.getTime() ? " " + this._dayOverClass : "") + (et ? " " + this._unselectableClass + " ui-state-disabled" : "") + (Z && !E ? "" : " " + X[1] + (G.getTime() == c.getTime() ? " " + this._currentClass : "") + (G.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + (Z && !E || !X[2] ? "" : ' title="' + X[2] + '"') + (et ? "" : ' data-handler="selectDay" data-event="click" data-month="' + G.getMonth() + '" data-year="' + G.getFullYear() + '"') + ">" + (Z && !E ? "&#xa0;" : et ? '<span class="ui-state-default">' + G.getDate() + "</span>" : '<a class="ui-state-default' + (G.getTime() == t.getTime() ? " ui-state-highlight" : "") + (G.getTime() == c.getTime() ? " ui-state-active" : "") + (Z ? " ui-priority-secondary" : "") + '" href="#">' + G.getDate() + "</a>") + "</td>", G.setDate(G.getDate() + 1), G = this._daylightSavingAdjust(G)
						}
						K += J + "</tr>"
					}
					p++, p > 11 && (p = 0, g++), K += "</tbody></table>" + (d ? "</div>" + (r[0] > 0 && O == r[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), j += K
				}
				Y += j
			}
			return Y += w + ($.ui.ie6 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, Y
		},
		_generateMonthYearHeader: function (e, t, i, a, n, s, r, o) {
			var u = this._get(e, "changeMonth"),
				d = this._get(e, "changeYear"),
				c = this._get(e, "showMonthAfterYear"),
				l = '<div class="ui-datepicker-title">',
				h = "";
			if (s || !u) h += '<span class="ui-datepicker-month">' + r[t] + "</span>";
			else {
				var p = a && a.getFullYear() == i,
					g = n && n.getFullYear() == i;
				h += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
				for (var f = 0; 12 > f; f++)(!p || f >= a.getMonth()) && (!g || n.getMonth() >= f) && (h += '<option value="' + f + '"' + (f == t ? ' selected="selected"' : "") + ">" + o[f] + "</option>");
				h += "</select>"
			}
			if (c || (l += h + (!s && u && d ? "" : "&#xa0;")), !e.yearshtml)
				if (e.yearshtml = "", s || !d) l += '<span class="ui-datepicker-year">' + i + "</span>";
				else {
					var m = this._get(e, "yearRange").split(":"),
						v = (new Date).getFullYear(),
						_ = function (e) {
							var t = e.match(/c[+-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? v + parseInt(e, 10) : parseInt(e, 10);
							return isNaN(t) ? v : t
						},
						y = _(m[0]),
						b = Math.max(y, _(m[1] || ""));
					for (y = a ? Math.max(y, a.getFullYear()) : y, b = n ? Math.min(b, n.getFullYear()) : b, e.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; b >= y; y++) e.yearshtml += '<option value="' + y + '"' + (y == i ? ' selected="selected"' : "") + ">" + y + "</option>";
					e.yearshtml += "</select>", l += e.yearshtml, e.yearshtml = null
				}
			return l += this._get(e, "yearSuffix"), c && (l += (!s && u && d ? "" : "&#xa0;") + h), l += "</div>"
		},
		_adjustInstDate: function (e, t, i) {
			var a = e.drawYear + ("Y" == i ? t : 0),
				n = e.drawMonth + ("M" == i ? t : 0),
				s = Math.min(e.selectedDay, this._getDaysInMonth(a, n)) + ("D" == i ? t : 0),
				r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(a, n, s)));
			e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" == i || "Y" == i) && this._notifyChange(e)
		},
		_restrictMinMax: function (e, t) {
			var i = this._getMinMaxDate(e, "min"),
				a = this._getMinMaxDate(e, "max"),
				n = i && i > t ? i : t;
			return n = a && n > a ? a : n
		},
		_notifyChange: function (e) {
			var t = this._get(e, "onChangeMonthYear");
			t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
		},
		_getNumberOfMonths: function (e) {
			var t = this._get(e, "numberOfMonths");
			return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
		},
		_getMinMaxDate: function (e, t) {
			return this._determineDate(e, this._get(e, t + "Date"), null)
		},
		_getDaysInMonth: function (e, t) {
			return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
		},
		_getFirstDayOfMonth: function (e, t) {
			return new Date(e, t, 1).getDay()
		},
		_canAdjustMonth: function (e, t, i, a) {
			var n = this._getNumberOfMonths(e),
				s = this._daylightSavingAdjust(new Date(i, a + (0 > t ? t : n[0] * n[1]), 1));
			return 0 > t && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
		},
		_isInRange: function (e, t) {
			var i = this._getMinMaxDate(e, "min"),
				a = this._getMinMaxDate(e, "max");
			return (!i || t.getTime() >= i.getTime()) && (!a || t.getTime() <= a.getTime())
		},
		_getFormatConfig: function (e) {
			var t = this._get(e, "shortYearCutoff");
			return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
				shortYearCutoff: t,
				dayNamesShort: this._get(e, "dayNamesShort"),
				dayNames: this._get(e, "dayNames"),
				monthNamesShort: this._get(e, "monthNamesShort"),
				monthNames: this._get(e, "monthNames")
			}
		},
		_formatDate: function (e, t, i, a) {
			t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
			var n = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(a, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
			return this.formatDate(this._get(e, "dateFormat"), n, this._getFormatConfig(e))
		}
	}), $.fn.datepicker = function (e) {
		if (!this.length) return this;
		$.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
		var t = Array.prototype.slice.call(arguments, 1);
		return "string" != typeof e || "isDisabled" != e && "getDate" != e && "widget" != e ? "option" == e && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t)) : this.each(function () {
			"string" == typeof e ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this].concat(t)) : $.datepicker._attachDatepicker(this, e)
		}) : $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t))
	}, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.9.2", window["DP_jQuery_" + dpuuid] = $
})(jQuery);
(function (e, t) {
	var i = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
		a = {
			buttons: !0,
			height: !0,
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0,
			width: !0
		},
		n = {
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0
		};
	e.widget("ui.dialog", {
		version: "1.9.2",
		options: {
			autoOpen: !0,
			buttons: {},
			closeOnEscape: !0,
			closeText: "close",
			dialogClass: "",
			draggable: !0,
			hide: null,
			height: "auto",
			maxHeight: !1,
			maxWidth: !1,
			minHeight: 150,
			minWidth: 150,
			modal: !1,
			position: {
				my: "center",
				at: "center",
				of: window,
				collision: "fit",
				using: function (t) {
					var i = e(this).css(t).offset().top;
					0 > i && e(this).css("top", t.top - i)
				}
			},
			resizable: !0,
			show: null,
			stack: !0,
			title: "",
			width: 300,
			zIndex: 1e3
		},
		_create: function () {
			this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), this.oldPosition = {
				parent: this.element.parent(),
				index: this.element.parent().children().index(this.element)
			}, this.options.title = this.options.title || this.originalTitle;
			var a, n, s, r, o, l = this,
				u = this.options,
				d = u.title || "&#160;";
			a = (this.uiDialog = e("<div>")).addClass(i + u.dialogClass).css({
				display: "none",
				outline: 0,
				zIndex: u.zIndex
			}).attr("tabIndex", -1).keydown(function (t) {
				u.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE && (l.close(t), t.preventDefault())
			}).mousedown(function (e) {
				l.moveToTop(!1, e)
			}).appendTo("body"), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(a), n = (this.uiDialogTitlebar = e("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function () {
				a.focus()
			}).prependTo(a), s = e("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function (e) {
				e.preventDefault(), l.close(e)
			}).appendTo(n), (this.uiDialogTitlebarCloseText = e("<span>")).addClass("ui-icon ui-icon-closethick").text(u.closeText).appendTo(s), r = e("<span>").uniqueId().addClass("ui-dialog-title").html(d).prependTo(n), o = (this.uiDialogButtonPane = e("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), (this.uiButtonSet = e("<div>")).addClass("ui-dialog-buttonset").appendTo(o), a.attr({
				role: "dialog",
				"aria-labelledby": r.attr("id")
			}), n.find("*").add(n).disableSelection(), this._hoverable(s), this._focusable(s), u.draggable && e.fn.draggable && this._makeDraggable(), u.resizable && e.fn.resizable && this._makeResizable(), this._createButtons(u.buttons), this._isOpen = !1, e.fn.bgiframe && a.bgiframe(), this._on(a, {
				keydown: function (i) {
					if (u.modal && i.keyCode === e.ui.keyCode.TAB) {
						var n = e(":tabbable", a),
							s = n.filter(":first"),
							r = n.filter(":last");
						return i.target !== r[0] || i.shiftKey ? i.target === s[0] && i.shiftKey ? (r.focus(1), !1) : t : (s.focus(1), !1)
					}
				}
			})
		},
		_init: function () {
			this.options.autoOpen && this.open()
		},
		_destroy: function () {
			var e, t = this.oldPosition;
			this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
		},
		widget: function () {
			return this.uiDialog
		},
		close: function (t) {
			var i, a, n = this;
			if (this._isOpen && !1 !== this._trigger("beforeClose", t)) return this._isOpen = !1, this.overlay && this.overlay.destroy(), this.options.hide ? this._hide(this.uiDialog, this.options.hide, function () {
				n._trigger("close", t)
			}) : (this.uiDialog.hide(), this._trigger("close", t)), e.ui.dialog.overlay.resize(), this.options.modal && (i = 0, e(".ui-dialog").each(function () {
				this !== n.uiDialog[0] && (a = e(this).css("z-index"), isNaN(a) || (i = Math.max(i, a)))
			}), e.ui.dialog.maxZ = i), this
		},
		isOpen: function () {
			return this._isOpen
		},
		moveToTop: function (t, i) {
			var a, n = this.options;
			return n.modal && !t || !n.stack && !n.modal ? this._trigger("focus", i) : (n.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = n.zIndex), this.overlay && (e.ui.dialog.maxZ += 1, e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ, this.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ)), a = {
				scrollTop: this.element.scrollTop(),
				scrollLeft: this.element.scrollLeft()
			}, e.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", e.ui.dialog.maxZ), this.element.attr(a), this._trigger("focus", i), this)
		},
		open: function () {
			if (!this._isOpen) {
				var t, i = this.options,
					a = this.uiDialog;
				return this._size(), this._position(i.position), a.show(i.show), this.overlay = i.modal ? new e.ui.dialog.overlay(this) : null, this.moveToTop(!0), t = this.element.find(":tabbable"), t.length || (t = this.uiDialogButtonPane.find(":tabbable"), t.length || (t = a)), t.eq(0).focus(), this._isOpen = !0, this._trigger("open"), this
			}
		},
		_createButtons: function (t) {
			var i = this,
				a = !1;
			this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), "object" == typeof t && null !== t && e.each(t, function () {
				return !(a = !0)
			}), a ? (e.each(t, function (t, a) {
				var n, s;
				a = e.isFunction(a) ? {
					click: a,
					text: t
				} : a, a = e.extend({
					type: "button"
				}, a), s = a.click, a.click = function () {
					s.apply(i.element[0], arguments)
				}, n = e("<button></button>", a).appendTo(i.uiButtonSet), e.fn.button && n.button()
			}), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
		},
		_makeDraggable: function () {
			function t(e) {
				return {
					position: e.position,
					offset: e.offset
				}
			}
			var i = this,
				a = this.options;
			this.uiDialog.draggable({
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function (a, n) {
					e(this).addClass("ui-dialog-dragging"), i._trigger("dragStart", a, t(n))
				},
				drag: function (e, a) {
					i._trigger("drag", e, t(a))
				},
				stop: function (n, s) {
					a.position = [s.position.left - i.document.scrollLeft(), s.position.top - i.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), i._trigger("dragStop", n, t(s)), e.ui.dialog.overlay.resize()
				}
			})
		},
		_makeResizable: function (i) {
			function a(e) {
				return {
					originalPosition: e.originalPosition,
					originalSize: e.originalSize,
					position: e.position,
					size: e.size
				}
			}
			i = i === t ? this.options.resizable : i;
			var n = this,
				s = this.options,
				r = this.uiDialog.css("position"),
				o = "string" == typeof i ? i : "n,e,s,w,se,sw,ne,nw";
			this.uiDialog.resizable({
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: this.element,
				maxWidth: s.maxWidth,
				maxHeight: s.maxHeight,
				minWidth: s.minWidth,
				minHeight: this._minHeight(),
				handles: o,
				start: function (t, i) {
					e(this).addClass("ui-dialog-resizing"), n._trigger("resizeStart", t, a(i))
				},
				resize: function (e, t) {
					n._trigger("resize", e, a(t))
				},
				stop: function (t, i) {
					e(this).removeClass("ui-dialog-resizing"), s.height = e(this).height(), s.width = e(this).width(), n._trigger("resizeStop", t, a(i)), e.ui.dialog.overlay.resize()
				}
			}).css("position", r).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
		},
		_minHeight: function () {
			var e = this.options;
			return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
		},
		_position: function (t) {
			var i, a = [],
				n = [0, 0];
			t ? (("string" == typeof t || "object" == typeof t && "0" in t) && (a = t.split ? t.split(" ") : [t[0], t[1]], 1 === a.length && (a[1] = a[0]), e.each(["left", "top"], function (e, t) {
				+a[e] === a[e] && (n[e] = a[e], a[e] = t)
			}), t = {
				my: a[0] + (0 > n[0] ? n[0] : "+" + n[0]) + " " + a[1] + (0 > n[1] ? n[1] : "+" + n[1]),
				at: a.join(" ")
			}), t = e.extend({}, e.ui.dialog.prototype.options.position, t)) : t = e.ui.dialog.prototype.options.position, i = this.uiDialog.is(":visible"), i || this.uiDialog.show(), this.uiDialog.position(t), i || this.uiDialog.hide()
		},
		_setOptions: function (t) {
			var i = this,
				s = {},
				r = !1;
			e.each(t, function (e, t) {
				i._setOption(e, t), e in a && (r = !0), e in n && (s[e] = t)
			}), r && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", s)
		},
		_setOption: function (t, a) {
			var n, s, r = this.uiDialog;
			switch (t) {
				case "buttons":
					this._createButtons(a);
					break;
				case "closeText":
					this.uiDialogTitlebarCloseText.text("" + a);
					break;
				case "dialogClass":
					r.removeClass(this.options.dialogClass).addClass(i + a);
					break;
				case "disabled":
					a ? r.addClass("ui-dialog-disabled") : r.removeClass("ui-dialog-disabled");
					break;
				case "draggable":
					n = r.is(":data(draggable)"), n && !a && r.draggable("destroy"), !n && a && this._makeDraggable();
					break;
				case "position":
					this._position(a);
					break;
				case "resizable":
					s = r.is(":data(resizable)"), s && !a && r.resizable("destroy"), s && "string" == typeof a && r.resizable("option", "handles", a), s || a === !1 || this._makeResizable(a);
					break;
				case "title":
					e(".ui-dialog-title", this.uiDialogTitlebar).html("" + (a || "&#160;"))
			}
			this._super(t, a)
		},
		_size: function () {
			var t, i, a, n = this.options,
				s = this.uiDialog.is(":visible");
			this.element.show().css({
				width: "auto",
				minHeight: 0,
				height: 0
			}), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
				height: "auto",
				width: n.width
			}).outerHeight(), i = Math.max(0, n.minHeight - t), "auto" === n.height ? e.support.minHeight ? this.element.css({
				minHeight: i,
				height: "auto"
			}) : (this.uiDialog.show(), a = this.element.css("height", "auto").height(), s || this.uiDialog.hide(), this.element.height(Math.max(a, i))) : this.element.height(Math.max(n.height - t, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
		}
	}), e.extend(e.ui.dialog, {
		uuid: 0,
		maxZ: 0,
		getTitleId: function (e) {
			var t = e.attr("id");
			return t || (this.uuid += 1, t = this.uuid), "ui-dialog-title-" + t
		},
		overlay: function (t) {
			this.$el = e.ui.dialog.overlay.create(t)
		}
	}), e.extend(e.ui.dialog.overlay, {
		instances: [],
		oldInstances: [],
		maxZ: 0,
		events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (e) {
			return e + ".dialog-overlay"
		}).join(" "),
		create: function (i) {
			0 === this.instances.length && (setTimeout(function () {
				e.ui.dialog.overlay.instances.length && e(document).bind(e.ui.dialog.overlay.events, function (i) {
					return e(i.target).zIndex() < e.ui.dialog.overlay.maxZ ? !1 : t
				})
			}, 1), e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize));
			var a = this.oldInstances.pop() || e("<div>").addClass("ui-widget-overlay");
			return e(document).bind("keydown.dialog-overlay", function (t) {
				var n = e.ui.dialog.overlay.instances;
				0 !== n.length && n[n.length - 1] === a && i.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE && (i.close(t), t.preventDefault())
			}), a.appendTo(document.body).css({
				width: this.width(),
				height: this.height()
			}), e.fn.bgiframe && a.bgiframe(), this.instances.push(a), a
		},
		destroy: function (t) {
			var i = e.inArray(t, this.instances),
				a = 0; - 1 !== i && this.oldInstances.push(this.instances.splice(i, 1)[0]), 0 === this.instances.length && e([document, window]).unbind(".dialog-overlay"), t.height(0).width(0).remove(), e.each(this.instances, function () {
				a = Math.max(a, this.css("z-index"))
			}), this.maxZ = a
		},
		height: function () {
			var t, i;
			return e.ui.ie ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), i > t ? e(window).height() + "px" : t + "px") : e(document).height() + "px"
		},
		width: function () {
			var t, i;
			return e.ui.ie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), i > t ? e(window).width() + "px" : t + "px") : e(document).width() + "px"
		},
		resize: function () {
			var t = e([]);
			e.each(e.ui.dialog.overlay.instances, function () {
				t = t.add(this)
			}), t.css({
				width: 0,
				height: 0
			}).css({
				width: e.ui.dialog.overlay.width(),
				height: e.ui.dialog.overlay.height()
			})
		}
	}), e.extend(e.ui.dialog.overlay.prototype, {
		destroy: function () {
			e.ui.dialog.overlay.destroy(this.$el)
		}
	})
})(jQuery);
(function (e) {
	var t = !1;
	e.widget("ui.menu", {
		version: "1.9.2",
		defaultElement: "<ul>",
		delay: 300,
		options: {
			icons: {
				submenu: "ui-icon-carat-1-e"
			},
			menus: "ul",
			position: {
				my: "left top",
				at: "right top"
			},
			role: "menu",
			blur: null,
			focus: null,
			select: null
		},
		_create: function () {
			this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
				role: this.options.role,
				tabIndex: 0
			}).bind("click" + this.eventNamespace, e.proxy(function (e) {
				this.options.disabled && e.preventDefault()
			}, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
				"mousedown .ui-menu-item > a": function (e) {
					e.preventDefault()
				},
				"click .ui-state-disabled > a": function (e) {
					e.preventDefault()
				},
				"click .ui-menu-item:has(a)": function (i) {
					var s = e(i.target).closest(".ui-menu-item");
					!t && s.not(".ui-state-disabled").length && (t = !0, this.select(i), s.has(".ui-menu").length ? this.expand(i) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
				},
				"mouseenter .ui-menu-item": function (t) {
					var i = e(t.currentTarget);
					i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
				},
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function (e, t) {
					var i = this.active || this.element.children(".ui-menu-item").eq(0);
					t || this.focus(e, i)
				},
				blur: function (t) {
					this._delay(function () {
						e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
					})
				},
				keydown: "_keydown"
			}), this.refresh(), this._on(this.document, {
				click: function (i) {
					e(i.target).closest(".ui-menu").length || this.collapseAll(i), t = !1
				}
			})
		},
		_destroy: function () {
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
				var t = e(this);
				t.data("ui-menu-submenu-carat") && t.remove()
			}), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
		},
		_keydown: function (t) {
			function i(e) {
				return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
			}
			var s, n, a, o, r, l = !0;
			switch (t.keyCode) {
				case e.ui.keyCode.PAGE_UP:
					this.previousPage(t);
					break;
				case e.ui.keyCode.PAGE_DOWN:
					this.nextPage(t);
					break;
				case e.ui.keyCode.HOME:
					this._move("first", "first", t);
					break;
				case e.ui.keyCode.END:
					this._move("last", "last", t);
					break;
				case e.ui.keyCode.UP:
					this.previous(t);
					break;
				case e.ui.keyCode.DOWN:
					this.next(t);
					break;
				case e.ui.keyCode.LEFT:
					this.collapse(t);
					break;
				case e.ui.keyCode.RIGHT:
					this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
					break;
				case e.ui.keyCode.ENTER:
				case e.ui.keyCode.SPACE:
					this._activate(t);
					break;
				case e.ui.keyCode.ESCAPE:
					this.collapse(t);
					break;
				default:
					l = !1, n = this.previousFilter || "", a = String.fromCharCode(t.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
						return r.test(e(this).children("a").text())
					}), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (a = String.fromCharCode(t.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
						return r.test(e(this).children("a").text())
					})), s.length ? (this.focus(t, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function () {
						delete this.previousFilter
					}, 1e3)) : delete this.previousFilter) : delete this.previousFilter
			}
			l && t.preventDefault()
		},
		_activate: function (e) {
			this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
		},
		refresh: function () {
			var t, i = this.options.icons.submenu,
				s = this.element.find(this.options.menus);
			s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			}).each(function () {
				var t = e(this),
					s = t.prev("a"),
					n = e("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
				s.attr("aria-haspopup", "true").prepend(n), t.attr("aria-labelledby", s.attr("id"))
			}), t = s.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
				tabIndex: -1,
				role: this._itemRole()
			}), t.children(":not(.ui-menu-item)").each(function () {
				var t = e(this);
				/[^\-—–\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
			}), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
		},
		_itemRole: function () {
			return {
				menu: "menuitem",
				listbox: "option"
			}[this.options.role]
		},
		focus: function (e, t) {
			var i, s;
			this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () {
				this._close()
			}, this.delay), i = t.children(".ui-menu"), i.length && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {
				item: t
			})
		},
		_scrollIntoView: function (t) {
			var i, s, n, a, o, r;
			this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
		},
		blur: function (e, t) {
			t || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
				item: this.active
			}))
		},
		_startOpening: function (e) {
			clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () {
				this._close(), this._open(e)
			}, this.delay))
		},
		_open: function (t) {
			var i = e.extend({
				of: this.active
			}, this.options.position);
			clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
		},
		collapseAll: function (t, i) {
			clearTimeout(this.timer), this.timer = this._delay(function () {
				var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
				s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s
			}, this.delay)
		},
		_close: function (e) {
			e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
		},
		collapse: function (e) {
			var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
			t && t.length && (this._close(), this.focus(e, t))
		},
		expand: function (e) {
			var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
			t && t.length && (this._open(t.parent()), this._delay(function () {
				this.focus(e, t)
			}))
		},
		next: function (e) {
			this._move("next", "first", e)
		},
		previous: function (e) {
			this._move("prev", "last", e)
		},
		isFirstItem: function () {
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		isLastItem: function () {
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		_move: function (e, t, i) {
			var s;
			this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[t]()), this.focus(i, s)
		},
		nextPage: function (t) {
			var i, s, n;
			return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
				return i = e(this), 0 > i.offset().top - s - n
			}), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(t), undefined)
		},
		previousPage: function (t) {
			var i, s, n;
			return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
				return i = e(this), i.offset().top - s + n > 0
			}), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(t), undefined)
		},
		_hasScroll: function () {
			return this.element.outerHeight() < this.element.prop("scrollHeight")
		},
		select: function (t) {
			this.active = this.active || e(t.target).closest(".ui-menu-item");
			var i = {
				item: this.active
			};
			this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
		}
	})
})(jQuery);
(function (t, e) {
	t.widget("ui.progressbar", {
		version: "1.9.2",
		options: {
			value: 0,
			max: 100
		},
		min: 0,
		_create: function () {
			this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
				role: "progressbar",
				"aria-valuemin": this.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._value()
			}), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
		},
		_destroy: function () {
			this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
		},
		value: function (t) {
			return t === e ? this._value() : (this._setOption("value", t), this)
		},
		_setOption: function (t, e) {
			"value" === t && (this.options.value = e, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), this._super(t, e)
		},
		_value: function () {
			var t = this.options.value;
			return "number" != typeof t && (t = 0), Math.min(this.options.max, Math.max(this.min, t))
		},
		_percentage: function () {
			return 100 * this._value() / this.options.max
		},
		_refreshValue: function () {
			var t = this.value(),
				e = this._percentage();
			this.oldValue !== t && (this.oldValue = t, this._trigger("change")), this.valueDiv.toggle(t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(e.toFixed(0) + "%"), this.element.attr("aria-valuenow", t)
		}
	})
})(jQuery);
(function (e) {
	var t = 5;
	e.widget("ui.slider", e.ui.mouse, {
		version: "1.9.2",
		widgetEventPrefix: "slide",
		options: {
			animate: !1,
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: !1,
			step: 1,
			value: 0,
			values: null
		},
		_create: function () {
			var i, s, n = this.options,
				a = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
				o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
				r = [];
			for (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (n.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e([]), n.range && (n.range === !0 && (n.values || (n.values = [this._valueMin(), this._valueMin()]), n.values.length && 2 !== n.values.length && (n.values = [n.values[0], n.values[0]])), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === n.range || "max" === n.range ? " ui-slider-range-" + n.range : ""))), s = n.values && n.values.length || 1, i = a.length; s > i; i++) r.push(o);
			this.handles = a.add(e(r.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (e) {
				e.preventDefault()
			}).mouseenter(function () {
				n.disabled || e(this).addClass("ui-state-hover")
			}).mouseleave(function () {
				e(this).removeClass("ui-state-hover")
			}).focus(function () {
				n.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
			}).blur(function () {
				e(this).removeClass("ui-state-focus")
			}), this.handles.each(function (t) {
				e(this).data("ui-slider-handle-index", t)
			}), this._on(this.handles, {
				keydown: function (i) {
					var s, n, a, o, r = e(i.target).data("ui-slider-handle-index");
					switch (i.keyCode) {
						case e.ui.keyCode.HOME:
						case e.ui.keyCode.END:
						case e.ui.keyCode.PAGE_UP:
						case e.ui.keyCode.PAGE_DOWN:
						case e.ui.keyCode.UP:
						case e.ui.keyCode.RIGHT:
						case e.ui.keyCode.DOWN:
						case e.ui.keyCode.LEFT:
							if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, e(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1)) return
					}
					switch (o = this.options.step, n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
						case e.ui.keyCode.HOME:
							a = this._valueMin();
							break;
						case e.ui.keyCode.END:
							a = this._valueMax();
							break;
						case e.ui.keyCode.PAGE_UP:
							a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / t);
							break;
						case e.ui.keyCode.PAGE_DOWN:
							a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / t);
							break;
						case e.ui.keyCode.UP:
						case e.ui.keyCode.RIGHT:
							if (n === this._valueMax()) return;
							a = this._trimAlignValue(n + o);
							break;
						case e.ui.keyCode.DOWN:
						case e.ui.keyCode.LEFT:
							if (n === this._valueMin()) return;
							a = this._trimAlignValue(n - o)
					}
					this._slide(i, r, a)
				},
				keyup: function (t) {
					var i = e(t.target).data("ui-slider-handle-index");
					this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
				}
			}), this._refreshValue(), this._animateOff = !1
		},
		_destroy: function () {
			this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
		},
		_mouseCapture: function (t) {
			var i, s, n, a, o, r, l, h, u = this,
				c = this.options;
			return c.disabled ? !1 : (this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			}, this.elementOffset = this.element.offset(), i = {
				x: t.pageX,
				y: t.pageY
			}, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
				var i = Math.abs(s - u.values(t));
				n > i && (n = i, a = e(this), o = t)
			}), c.range === !0 && this.values(1) === c.min && (o += 1, a = e(this.handles[o])), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), l = a.offset(), h = !e(t.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = h ? {
				left: 0,
				top: 0
			} : {
				left: t.pageX - l.left - a.width() / 2,
				top: t.pageY - l.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
			}, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0))
		},
		_mouseStart: function () {
			return !0
		},
		_mouseDrag: function (e) {
			var t = {
					x: e.pageX,
					y: e.pageY
				},
				i = this._normValueFromMouse(t);
			return this._slide(e, this._handleIndex, i), !1
		},
		_mouseStop: function (e) {
			return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
		},
		_detectOrientation: function () {
			this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
		},
		_normValueFromMouse: function (e) {
			var t, i, s, n, a;
			return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
		},
		_start: function (e, t) {
			var i = {
				handle: this.handles[t],
				value: this.value()
			};
			return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
		},
		_slide: function (e, t, i) {
			var s, n, a;
			this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, {
				handle: this.handles[t],
				value: i,
				values: n
			}), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i, !0))) : i !== this.value() && (a = this._trigger("slide", e, {
				handle: this.handles[t],
				value: i
			}), a !== !1 && this.value(i))
		},
		_stop: function (e, t) {
			var i = {
				handle: this.handles[t],
				value: this.value()
			};
			this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
		},
		_change: function (e, t) {
			if (!this._keySliding && !this._mouseSliding) {
				var i = {
					handle: this.handles[t],
					value: this.value()
				};
				this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("change", e, i)
			}
		},
		value: function (e) {
			return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), undefined) : this._value()
		},
		values: function (t, i) {
			var s, n, a;
			if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), undefined;
			if (!arguments.length) return this._values();
			if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
			for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
			this._refreshValue()
		},
		_setOption: function (t, i) {
			var s, n = 0;
			switch (e.isArray(this.options.values) && (n = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments), t) {
				case "disabled":
					i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
					break;
				case "orientation":
					this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
					break;
				case "value":
					this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
					break;
				case "values":
					for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
					this._animateOff = !1;
					break;
				case "min":
				case "max":
					this._animateOff = !0, this._refreshValue(), this._animateOff = !1
			}
		},
		_value: function () {
			var e = this.options.value;
			return e = this._trimAlignValue(e)
		},
		_values: function (e) {
			var t, i, s;
			if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
			for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
			return i
		},
		_trimAlignValue: function (e) {
			if (this._valueMin() >= e) return this._valueMin();
			if (e >= this._valueMax()) return this._valueMax();
			var t = this.options.step > 0 ? this.options.step : 1,
				i = (e - this._valueMin()) % t,
				s = e - i;
			return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
		},
		_valueMin: function () {
			return this.options.min
		},
		_valueMax: function () {
			return this.options.max
		},
		_refreshValue: function () {
			var t, i, s, n, a, o = this.options.range,
				r = this.options,
				l = this,
				h = this._animateOff ? !1 : r.animate,
				u = {};
			this.options.values && this.options.values.length ? this.handles.each(function (s) {
				i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[h ? "animate" : "css"](u, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
					left: i + "%"
				}, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
					width: i - t + "%"
				}, {
					queue: !1,
					duration: r.animate
				})) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
					bottom: i + "%"
				}, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
					height: i - t + "%"
				}, {
					queue: !1,
					duration: r.animate
				}))), t = i
			}) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
				width: i + "%"
			}, r.animate), "max" === o && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
				width: 100 - i + "%"
			}, {
				queue: !1,
				duration: r.animate
			}), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
				height: i + "%"
			}, r.animate), "max" === o && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
				height: 100 - i + "%"
			}, {
				queue: !1,
				duration: r.animate
			}))
		}
	})
})(jQuery);
(function (t) {
	function e(t) {
		return function () {
			var e = this.element.val();
			t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
		}
	}
	t.widget("ui.spinner", {
		version: "1.9.2",
		defaultElement: "<input>",
		widgetEventPrefix: "spin",
		options: {
			culture: null,
			icons: {
				down: "ui-icon-triangle-1-s",
				up: "ui-icon-triangle-1-n"
			},
			incremental: !0,
			max: null,
			min: null,
			numberFormat: null,
			page: 10,
			step: 1,
			change: null,
			spin: null,
			start: null,
			stop: null
		},
		_create: function () {
			this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
				beforeunload: function () {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_getCreateOptions: function () {
			var e = {},
				i = this.element;
			return t.each(["min", "max", "step"], function (t, s) {
				var n = i.attr(s);
				void 0 !== n && n.length && (e[s] = n)
			}), e
		},
		_events: {
			keydown: function (t) {
				this._start(t) && this._keydown(t) && t.preventDefault()
			},
			keyup: "_stop",
			focus: function () {
				this.previous = this.element.val()
			},
			blur: function (t) {
				return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
			},
			mousewheel: function (t, e) {
				if (e) {
					if (!this.spinning && !this._start(t)) return !1;
					this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
						this.spinning && this._stop(t)
					}, 100), t.preventDefault()
				}
			},
			"mousedown .ui-spinner-button": function (e) {
				function i() {
					var t = this.element[0] === this.document[0].activeElement;
					t || (this.element.focus(), this.previous = s, this._delay(function () {
						this.previous = s
					}))
				}
				var s;
				s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
					delete this.cancelBlur, i.call(this)
				}), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
			},
			"mouseup .ui-spinner-button": "_stop",
			"mouseenter .ui-spinner-button": function (e) {
				return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
			},
			"mouseleave .ui-spinner-button": "_stop"
		},
		_draw: function () {
			var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
			this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
		},
		_keydown: function (e) {
			var i = this.options,
				s = t.ui.keyCode;
			switch (e.keyCode) {
				case s.UP:
					return this._repeat(null, 1, e), !0;
				case s.DOWN:
					return this._repeat(null, -1, e), !0;
				case s.PAGE_UP:
					return this._repeat(null, i.page, e), !0;
				case s.PAGE_DOWN:
					return this._repeat(null, -i.page, e), !0
			}
			return !1
		},
		_uiSpinnerHtml: function () {
			return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
		},
		_buttonHtml: function () {
			return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
		},
		_start: function (t) {
			return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
		},
		_repeat: function (t, e, i) {
			t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
				this._repeat(40, e, i)
			}, t), this._spin(e * this.options.step, i)
		},
		_spin: function (t, e) {
			var i = this.value() || 0;
			this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
				value: i
			}) === !1 || (this._value(i), this.counter++)
		},
		_increment: function (e) {
			var i = this.options.incremental;
			return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
		},
		_precision: function () {
			var t = this._precisionOf(this.options.step);
			return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
		},
		_precisionOf: function (t) {
			var e = "" + t,
				i = e.indexOf(".");
			return -1 === i ? 0 : e.length - i - 1
		},
		_adjustValue: function (t) {
			var e, i, s = this.options;
			return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
		},
		_stop: function (t) {
			this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
		},
		_setOption: function (t, e) {
			if ("culture" === t || "numberFormat" === t) {
				var i = this._parse(this.element.val());
				return this.options[t] = e, this.element.val(this._format(i)), void 0
			}("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
		},
		_setOptions: e(function (t) {
			this._super(t), this._value(this.element.val())
		}),
		_parse: function (t) {
			return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
		},
		_format: function (t) {
			return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
		},
		_refresh: function () {
			this.element.attr({
				"aria-valuemin": this.options.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._parse(this.element.val())
			})
		},
		_value: function (t, e) {
			var i;
			"" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
		},
		_destroy: function () {
			this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
		},
		stepUp: e(function (t) {
			this._stepUp(t)
		}),
		_stepUp: function (t) {
			this._spin((t || 1) * this.options.step)
		},
		stepDown: e(function (t) {
			this._stepDown(t)
		}),
		_stepDown: function (t) {
			this._spin((t || 1) * -this.options.step)
		},
		pageUp: e(function (t) {
			this._stepUp((t || 1) * this.options.page)
		}),
		pageDown: e(function (t) {
			this._stepDown((t || 1) * this.options.page)
		}),
		value: function (t) {
			return arguments.length ? (e(this._value).call(this, t), void 0) : this._parse(this.element.val())
		},
		widget: function () {
			return this.uiSpinner
		}
	})
})(jQuery);
(function (t, e) {
	function i() {
		return ++n
	}

	function s(t) {
		return t.hash.length > 1 && t.href.replace(a, "") === location.href.replace(a, "").replace(/\s/g, "%20")
	}
	var n = 0,
		a = /#.*$/;
	t.widget("ui.tabs", {
		version: "1.9.2",
		delay: 300,
		options: {
			active: null,
			collapsible: !1,
			event: "click",
			heightStyle: "content",
			hide: null,
			show: null,
			activate: null,
			beforeActivate: null,
			beforeLoad: null,
			load: null
		},
		_create: function () {
			var i = this,
				s = this.options,
				n = s.active,
				a = location.hash.substring(1);
			this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", s.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (e) {
				t(this).is(".ui-state-disabled") && e.preventDefault()
			}).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
				t(this).closest("li").is(".ui-state-disabled") && this.blur()
			}), this._processTabs(), null === n && (a && this.tabs.each(function (i, s) {
				return t(s).attr("aria-controls") === a ? (n = i, !1) : e
			}), null === n && (n = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === n || -1 === n) && (n = this.tabs.length ? 0 : !1)), n !== !1 && (n = this.tabs.index(this.tabs.eq(n)), -1 === n && (n = s.collapsible ? !1 : 0)), s.active = n, !s.collapsible && s.active === !1 && this.anchors.length && (s.active = 0), t.isArray(s.disabled) && (s.disabled = t.unique(s.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
				return i.tabs.index(t)
			}))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(this.options.active) : t(), this._refresh(), this.active.length && this.load(s.active)
		},
		_getCreateEventData: function () {
			return {
				tab: this.active,
				panel: this.active.length ? this._getPanelForTab(this.active) : t()
			}
		},
		_tabKeydown: function (i) {
			var s = t(this.document[0].activeElement).closest("li"),
				n = this.tabs.index(s),
				a = !0;
			if (!this._handlePageNav(i)) {
				switch (i.keyCode) {
					case t.ui.keyCode.RIGHT:
					case t.ui.keyCode.DOWN:
						n++;
						break;
					case t.ui.keyCode.UP:
					case t.ui.keyCode.LEFT:
						a = !1, n--;
						break;
					case t.ui.keyCode.END:
						n = this.anchors.length - 1;
						break;
					case t.ui.keyCode.HOME:
						n = 0;
						break;
					case t.ui.keyCode.SPACE:
						return i.preventDefault(), clearTimeout(this.activating), this._activate(n), e;
					case t.ui.keyCode.ENTER:
						return i.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), e;
					default:
						return
				}
				i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, a), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
					this.option("active", n)
				}, this.delay))
			}
		},
		_panelKeydown: function (e) {
			this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
		},
		_handlePageNav: function (i) {
			return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
		},
		_findNextTab: function (e, i) {
			function s() {
				return e > n && (e = 0), 0 > e && (e = n), e
			}
			for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
			return e
		},
		_focusNextTab: function (t, e) {
			return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
		},
		_setOption: function (t, i) {
			return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
		},
		_tabId: function (t) {
			return t.attr("aria-controls") || "ui-tabs-" + i()
		},
		_sanitizeSelector: function (t) {
			return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
		},
		refresh: function () {
			var e = this.options,
				i = this.tablist.children(":has(a[href])");
			e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
				return i.index(t)
			}), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
		},
		_refresh: function () {
			this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
				"aria-selected": "false",
				tabIndex: -1
			}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
				"aria-selected": "true",
				tabIndex: 0
			}), this._getPanelForTab(this.active).show().attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			})) : this.tabs.eq(0).attr("tabIndex", 0)
		},
		_processTabs: function () {
			var e = this;
			this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
				role: "tab",
				tabIndex: -1
			}), this.anchors = this.tabs.map(function () {
				return t("a", this)[0]
			}).addClass("ui-tabs-anchor").attr({
				role: "presentation",
				tabIndex: -1
			}), this.panels = t(), this.anchors.each(function (i, n) {
				var a, o, r, h = t(n).uniqueId().attr("id"),
					l = t(n).closest("li"),
					c = l.attr("aria-controls");
				s(n) ? (a = n.hash, o = e.element.find(e._sanitizeSelector(a))) : (r = e._tabId(l), a = "#" + r, o = e.element.find(a), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), c && l.data("ui-tabs-aria-controls", c), l.attr({
					"aria-controls": a.substring(1),
					"aria-labelledby": h
				}), o.attr("aria-labelledby", h)
			}), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
		},
		_getList: function () {
			return this.element.find("ol,ul").eq(0)
		},
		_createPanel: function (e) {
			return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
		},
		_setupDisabled: function (e) {
			t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
			for (var i, s = 0; i = this.tabs[s]; s++) e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
			this.options.disabled = e
		},
		_setupEvents: function (e) {
			var i = {
				click: function (t) {
					t.preventDefault()
				}
			};
			e && t.each(e.split(" "), function (t, e) {
				i[e] = "_eventHandler"
			}), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
				keydown: "_tabKeydown"
			}), this._on(this.panels, {
				keydown: "_panelKeydown"
			}), this._focusable(this.tabs), this._hoverable(this.tabs)
		},
		_setupHeightStyle: function (e) {
			var i, s, n = this.element.parent();
			"fill" === e ? (t.support.minHeight || (s = n.css("overflow"), n.css("overflow", "hidden")), i = n.height(), this.element.siblings(":visible").each(function () {
				var e = t(this),
					s = e.css("position");
				"absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
			}), s && n.css("overflow", s), this.element.children().not(this.panels).each(function () {
				i -= t(this).outerHeight(!0)
			}), this.panels.each(function () {
				t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
			}).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
				i = Math.max(i, t(this).height("").height())
			}).height(i))
		},
		_eventHandler: function (e) {
			var i = this.options,
				s = this.active,
				n = t(e.currentTarget),
				a = n.closest("li"),
				o = a[0] === s[0],
				r = o && i.collapsible,
				h = r ? t() : this._getPanelForTab(a),
				l = s.length ? this._getPanelForTab(s) : t(),
				c = {
					oldTab: s,
					oldPanel: l,
					newTab: r ? t() : a,
					newPanel: h
				};
			e.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? t() : a, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), e), this._toggle(e, c))
		},
		_toggle: function (e, i) {
			function s() {
				a.running = !1, a._trigger("activate", e, i)
			}

			function n() {
				i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
			}
			var a = this,
				o = i.newPanel,
				r = i.oldPanel;
			this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
				i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
			}) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}), i.oldTab.attr("aria-selected", "false"), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
				return 0 === t(this).attr("tabIndex")
			}).attr("tabIndex", -1), o.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}), i.newTab.attr({
				"aria-selected": "true",
				tabIndex: 0
			})
		},
		_activate: function (e) {
			var i, s = this._findActive(e);
			s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: t.noop
			}))
		},
		_findActive: function (e) {
			return e === !1 ? t() : this.tabs.eq(e)
		},
		_getIndex: function (t) {
			return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
		},
		_destroy: function () {
			this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(), this.tabs.add(this.panels).each(function () {
				t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
			}), this.tabs.each(function () {
				var e = t(this),
					i = e.data("ui-tabs-aria-controls");
				i ? e.attr("aria-controls", i) : e.removeAttr("aria-controls")
			}), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
		},
		enable: function (i) {
			var s = this.options.disabled;
			s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function (t) {
				return t !== i ? t : null
			}) : t.map(this.tabs, function (t, e) {
				return e !== i ? e : null
			})), this._setupDisabled(s))
		},
		disable: function (i) {
			var s = this.options.disabled;
			if (s !== !0) {
				if (i === e) s = !0;
				else {
					if (i = this._getIndex(i), -1 !== t.inArray(i, s)) return;
					s = t.isArray(s) ? t.merge([i], s).sort() : [i]
				}
				this._setupDisabled(s)
			}
		},
		load: function (e, i) {
			e = this._getIndex(e);
			var n = this,
				a = this.tabs.eq(e),
				o = a.find(".ui-tabs-anchor"),
				r = this._getPanelForTab(a),
				h = {
					tab: a,
					panel: r
				};
			s(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (a.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function (t) {
				setTimeout(function () {
					r.html(t), n._trigger("load", i, h)
				}, 1)
			}).complete(function (t, e) {
				setTimeout(function () {
					"abort" === e && n.panels.stop(!1, !0), a.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
				}, 1)
			})))
		},
		_ajaxSettings: function (e, i, s) {
			var n = this;
			return {
				url: e.attr("href"),
				beforeSend: function (e, a) {
					return n._trigger("beforeLoad", i, t.extend({
						jqXHR: e,
						ajaxSettings: a
					}, s))
				}
			}
		},
		_getPanelForTab: function (e) {
			var i = t(e).attr("aria-controls");
			return this.element.find(this._sanitizeSelector("#" + i))
		}
	}), t.uiBackCompat !== !1 && (t.ui.tabs.prototype._ui = function (t, e) {
		return {
			tab: t,
			panel: e,
			index: this.anchors.index(t)
		}
	}, t.widget("ui.tabs", t.ui.tabs, {
		url: function (t, e) {
			this.anchors.eq(t).attr("href", e)
		}
	}), t.widget("ui.tabs", t.ui.tabs, {
		options: {
			ajaxOptions: null,
			cache: !1
		},
		_create: function () {
			this._super();
			var i = this;
			this._on({
				tabsbeforeload: function (s, n) {
					return t.data(n.tab[0], "cache.tabs") ? (s.preventDefault(), e) : (n.jqXHR.success(function () {
						i.options.cache && t.data(n.tab[0], "cache.tabs", !0)
					}), e)
				}
			})
		},
		_ajaxSettings: function (e, i, s) {
			var n = this.options.ajaxOptions;
			return t.extend({}, n, {
				error: function (t, e) {
					try {
						n.error(t, e, s.tab.closest("li").index(), s.tab[0])
					} catch (i) {}
				}
			}, this._superApply(arguments))
		},
		_setOption: function (t, e) {
			"cache" === t && e === !1 && this.anchors.removeData("cache.tabs"), this._super(t, e)
		},
		_destroy: function () {
			this.anchors.removeData("cache.tabs"), this._super()
		},
		url: function (t) {
			this.anchors.eq(t).removeData("cache.tabs"), this._superApply(arguments)
		}
	}), t.widget("ui.tabs", t.ui.tabs, {
		abort: function () {
			this.xhr && this.xhr.abort()
		}
	}), t.widget("ui.tabs", t.ui.tabs, {
		options: {
			spinner: "<em>Loading&#8230;</em>"
		},
		_create: function () {
			this._super(), this._on({
				tabsbeforeload: function (t, e) {
					if (t.target === this.element[0] && this.options.spinner) {
						var i = e.tab.find("span"),
							s = i.html();
						i.html(this.options.spinner), e.jqXHR.complete(function () {
							i.html(s)
						})
					}
				}
			})
		}
	}), t.widget("ui.tabs", t.ui.tabs, {
		options: {
			enable: null,
			disable: null
		},
		enable: function (e) {
			var i, s = this.options;
			(e && s.disabled === !0 || t.isArray(s.disabled) && -1 !== t.inArray(e, s.disabled)) && (i = !0), this._superApply(arguments), i && this._trigger("enable", null, this._ui(this.anchors[e], this.panels[e]))
		},
		disable: function (e) {
			var i, s = this.options;
			(e && s.disabled === !1 || t.isArray(s.disabled) && -1 === t.inArray(e, s.disabled)) && (i = !0), this._superApply(arguments), i && this._trigger("disable", null, this._ui(this.anchors[e], this.panels[e]))
		}
	}), t.widget("ui.tabs", t.ui.tabs, {
		options: {
			add: null,
			remove: null,
			tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
		},
		add: function (i, s, n) {
			n === e && (n = this.anchors.length);
			var a, o, r = this.options,
				h = t(r.tabTemplate.replace(/#\{href\}/g, i).replace(/#\{label\}/g, s)),
				l = i.indexOf("#") ? this._tabId(h) : i.replace("#", "");
			return h.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0), h.attr("aria-controls", l), a = n >= this.tabs.length, o = this.element.find("#" + l), o.length || (o = this._createPanel(l), a ? n > 0 ? o.insertAfter(this.panels.eq(-1)) : o.appendTo(this.element) : o.insertBefore(this.panels[n])), o.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(), a ? h.appendTo(this.tablist) : h.insertBefore(this.tabs[n]), r.disabled = t.map(r.disabled, function (t) {
				return t >= n ? ++t : t
			}), this.refresh(), 1 === this.tabs.length && r.active === !1 && this.option("active", 0), this._trigger("add", null, this._ui(this.anchors[n], this.panels[n])), this
		},
		remove: function (e) {
			e = this._getIndex(e);
			var i = this.options,
				s = this.tabs.eq(e).remove(),
				n = this._getPanelForTab(s).remove();
			return s.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(e + (this.anchors.length > e + 1 ? 1 : -1)), i.disabled = t.map(t.grep(i.disabled, function (t) {
				return t !== e
			}), function (t) {
				return t >= e ? --t : t
			}), this.refresh(), this._trigger("remove", null, this._ui(s.find("a")[0], n[0])), this
		}
	}), t.widget("ui.tabs", t.ui.tabs, {
		length: function () {
			return this.anchors.length
		}
	}), t.widget("ui.tabs", t.ui.tabs, {
		options: {
			idPrefix: "ui-tabs-"
		},
		_tabId: function (e) {
			var s = e.is("li") ? e.find("a[href]") : e;
			return s = s[0], t(s).closest("li").attr("aria-controls") || s.title && s.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + i()
		}
	}), t.widget("ui.tabs", t.ui.tabs, {
		options: {
			panelTemplate: "<div></div>"
		},
		_createPanel: function (e) {
			return t(this.options.panelTemplate).attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
		}
	}), t.widget("ui.tabs", t.ui.tabs, {
		_create: function () {
			var t = this.options;
			null === t.active && t.selected !== e && (t.active = -1 === t.selected ? !1 : t.selected), this._super(), t.selected = t.active, t.selected === !1 && (t.selected = -1)
		},
		_setOption: function (t, e) {
			if ("selected" !== t) return this._super(t, e);
			var i = this.options;
			this._super("active", -1 === e ? !1 : e), i.selected = i.active, i.selected === !1 && (i.selected = -1)
		},
		_eventHandler: function () {
			this._superApply(arguments), this.options.selected = this.options.active, this.options.selected === !1 && (this.options.selected = -1)
		}
	}), t.widget("ui.tabs", t.ui.tabs, {
		options: {
			show: null,
			select: null
		},
		_create: function () {
			this._super(), this.options.active !== !1 && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
		},
		_trigger: function (t, e, i) {
			var s, n, a = this._superApply(arguments);
			return a ? ("beforeActivate" === t ? (s = i.newTab.length ? i.newTab : i.oldTab, n = i.newPanel.length ? i.newPanel : i.oldPanel, a = this._super("select", e, {
				tab: s.find(".ui-tabs-anchor")[0],
				panel: n[0],
				index: s.closest("li").index()
			})) : "activate" === t && i.newTab.length && (a = this._super("show", e, {
				tab: i.newTab.find(".ui-tabs-anchor")[0],
				panel: i.newPanel[0],
				index: i.newTab.closest("li").index()
			})), a) : !1
		}
	}), t.widget("ui.tabs", t.ui.tabs, {
		select: function (t) {
			if (t = this._getIndex(t), -1 === t) {
				if (!this.options.collapsible || -1 === this.options.selected) return;
				t = this.options.selected
			}
			this.anchors.eq(t).trigger(this.options.event + this.eventNamespace)
		}
	}), function () {
		var e = 0;
		t.widget("ui.tabs", t.ui.tabs, {
			options: {
				cookie: null
			},
			_create: function () {
				var t, e = this.options;
				null == e.active && e.cookie && (t = parseInt(this._cookie(), 10), -1 === t && (t = !1), e.active = t), this._super()
			},
			_cookie: function (i) {
				var s = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++e)];
				return arguments.length && (s.push(i === !1 ? -1 : i), s.push(this.options.cookie)), t.cookie.apply(null, s)
			},
			_refresh: function () {
				this._super(), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
			},
			_eventHandler: function () {
				this._superApply(arguments), this.options.cookie && this._cookie(this.options.active, this.options.cookie)
			},
			_destroy: function () {
				this._super(), this.options.cookie && this._cookie(null, this.options.cookie)
			}
		})
	}(), t.widget("ui.tabs", t.ui.tabs, {
		_trigger: function (e, i, s) {
			var n = t.extend({}, s);
			return "load" === e && (n.panel = n.panel[0], n.tab = n.tab.find(".ui-tabs-anchor")[0]), this._super(e, i, n)
		}
	}), t.widget("ui.tabs", t.ui.tabs, {
		options: {
			fx: null
		},
		_getFx: function () {
			var e, i, s = this.options.fx;
			return s && (t.isArray(s) ? (e = s[0], i = s[1]) : e = i = s), s ? {
				show: i,
				hide: e
			} : null
		},
		_toggle: function (t, i) {
			function s() {
				a.running = !1, a._trigger("activate", t, i)
			}

			function n() {
				i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && h.show ? o.animate(h.show, h.show.duration, function () {
					s()
				}) : (o.show(), s())
			}
			var a = this,
				o = i.newPanel,
				r = i.oldPanel,
				h = this._getFx();
			return h ? (a.running = !0, r.length && h.hide ? r.animate(h.hide, h.hide.duration, function () {
				i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
			}) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), e) : this._super(t, i)
		}
	}))
})(jQuery);
(function (t) {
	function e(e, i) {
		var s = (e.attr("aria-describedby") || "").split(/\s+/);
		s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
	}

	function i(e) {
		var i = e.data("ui-tooltip-id"),
			s = (e.attr("aria-describedby") || "").split(/\s+/),
			n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
	}
	var s = 0;
	t.widget("ui.tooltip", {
		version: "1.9.2",
		options: {
			content: function () {
				return t(this).attr("title")
			},
			hide: !0,
			items: "[title]:not([disabled])",
			position: {
				my: "left top+15",
				at: "left bottom",
				collision: "flipfit flip"
			},
			show: !0,
			tooltipClass: null,
			track: !1,
			close: null,
			open: null
		},
		_create: function () {
			this._on({
				mouseover: "open",
				focusin: "open"
			}), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
		},
		_setOption: function (e, i) {
			var s = this;
			return "disabled" === e ? (this[i ? "_disable" : "_enable"](), this.options[e] = i, void 0) : (this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
				s._updateContent(e)
			}), void 0)
		},
		_disable: function () {
			var e = this;
			t.each(this.tooltips, function (i, s) {
				var n = t.Event("blur");
				n.target = n.currentTarget = s[0], e.close(n, !0)
			}), this.element.find(this.options.items).andSelf().each(function () {
				var e = t(this);
				e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
			})
		},
		_enable: function () {
			this.element.find(this.options.items).andSelf().each(function () {
				var e = t(this);
				e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
			})
		},
		open: function (e) {
			var i = this,
				s = t(e ? e.target : this.element).closest(this.options.items);
			s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () {
				var e, s = t(this);
				s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
					element: this,
					title: s.attr("title")
				}, s.attr("title", ""))
			}), this._updateContent(s, e))
		},
		_updateContent: function (t, e) {
			var i, s = this.options.content,
				n = this,
				a = e ? e.type : null;
			return "string" == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function (i) {
				t.data("ui-tooltip-open") && n._delay(function () {
					e && (e.type = a), this._open(e, t, i)
				})
			}), i && this._open(e, t, i), void 0)
		},
		_open: function (i, s, n) {
			function a(t) {
				l.of = t, o.is(":hidden") || o.position(l)
			}
			var o, r, h, l = t.extend({}, this.options.position);
			if (n) {
				if (o = this._find(s), o.length) return o.find(".ui-tooltip-content").html(n), void 0;
				s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")), o = this._tooltip(s), e(s, o.attr("id")), o.find(".ui-tooltip-content").html(n), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
					mousemove: a
				}), a(i)) : o.position(t.extend({
					of: s
				}, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (h = setInterval(function () {
					o.is(":visible") && (a(l.of), clearInterval(h))
				}, t.fx.interval)), this._trigger("open", i, {
					tooltip: o
				}), r = {
					keyup: function (e) {
						if (e.keyCode === t.ui.keyCode.ESCAPE) {
							var i = t.Event(e);
							i.currentTarget = s[0], this.close(i, !0)
						}
					},
					remove: function () {
						this._removeTooltip(o)
					}
				}, i && "mouseover" !== i.type || (r.mouseleave = "close"), i && "focusin" !== i.type || (r.focusout = "close"), this._on(!0, s, r)
			}
		},
		close: function (e) {
			var s = this,
				n = t(e ? e.currentTarget : this.element),
				a = this._find(n);
			this.closing || (n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), i(n), a.stop(!0), this._hide(a, this.options.hide, function () {
				s._removeTooltip(t(this))
			}), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
				t(i.element).attr("title", i.title), delete s.parents[e]
			}), this.closing = !0, this._trigger("close", e, {
				tooltip: a
			}), this.closing = !1)
		},
		_tooltip: function (e) {
			var i = "ui-tooltip-" + s++,
				n = t("<div>").attr({
					id: i,
					role: "tooltip"
				}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
			return t("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), t.fn.bgiframe && n.bgiframe(), this.tooltips[i] = e, n
		},
		_find: function (e) {
			var i = e.data("ui-tooltip-id");
			return i ? t("#" + i) : t()
		},
		_removeTooltip: function (t) {
			t.remove(), delete this.tooltips[t.attr("id")]
		},
		_destroy: function () {
			var e = this;
			t.each(this.tooltips, function (i, s) {
				var n = t.Event("blur");
				n.target = n.currentTarget = s[0], e.close(n, !0), t("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
			})
		}
	})
})(jQuery);
jQuery.effects || function (t, e) {
	var i = t.uiBackCompat !== !1,
		s = "ui-effects-";
	t.effects = {
			effect: {}
		},
		function (e, i) {
			function s(t, e, i) {
				var s = u[e.type] || {};
				return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
			}

			function n(t) {
				var s = h(),
					n = s._rgba = [];
				return t = t.toLowerCase(), g(c, function (e, a) {
					var o, r = a.re.exec(t),
						l = r && a.parse(r),
						c = a.space || "rgba";
					return l ? (o = s[c](l), s[d[c].cache] = o[d[c].cache], n = s._rgba = o._rgba, !1) : i
				}), n.length ? ("0,0,0,0" === n.join() && e.extend(n, o.transparent), s) : o[t]
			}

			function a(t, e, i) {
				return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
			}
			var o, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
				l = /^([\-+])=\s*(\d+\.?\d*)/,
				c = [{
					re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
					parse: function (t) {
						return [t[1], t[2], t[3], t[4]]
					}
				}, {
					re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
					parse: function (t) {
						return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
					}
				}, {
					re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
					parse: function (t) {
						return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
					}
				}, {
					re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
					parse: function (t) {
						return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
					}
				}, {
					re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
					space: "hsla",
					parse: function (t) {
						return [t[1], t[2] / 100, t[3] / 100, t[4]]
					}
				}],
				h = e.Color = function (t, i, s, n) {
					return new e.Color.fn.parse(t, i, s, n)
				},
				d = {
					rgba: {
						props: {
							red: {
								idx: 0,
								type: "byte"
							},
							green: {
								idx: 1,
								type: "byte"
							},
							blue: {
								idx: 2,
								type: "byte"
							}
						}
					},
					hsla: {
						props: {
							hue: {
								idx: 0,
								type: "degrees"
							},
							saturation: {
								idx: 1,
								type: "percent"
							},
							lightness: {
								idx: 2,
								type: "percent"
							}
						}
					}
				},
				u = {
					"byte": {
						floor: !0,
						max: 255
					},
					percent: {
						max: 1
					},
					degrees: {
						mod: 360,
						floor: !0
					}
				},
				p = h.support = {},
				f = e("<p>")[0],
				g = e.each;
			f.style.cssText = "background-color:rgba(1,1,1,.5)", p.rgba = f.style.backgroundColor.indexOf("rgba") > -1, g(d, function (t, e) {
				e.cache = "_" + t, e.props.alpha = {
					idx: 3,
					type: "percent",
					def: 1
				}
			}), h.fn = e.extend(h.prototype, {
				parse: function (a, r, l, c) {
					if (a === i) return this._rgba = [null, null, null, null], this;
					(a.jquery || a.nodeType) && (a = e(a).css(r), r = i);
					var u = this,
						p = e.type(a),
						f = this._rgba = [];
					return r !== i && (a = [a, r, l, c], p = "array"), "string" === p ? this.parse(n(a) || o._default) : "array" === p ? (g(d.rgba.props, function (t, e) {
						f[e.idx] = s(a[e.idx], e)
					}), this) : "object" === p ? (a instanceof h ? g(d, function (t, e) {
						a[e.cache] && (u[e.cache] = a[e.cache].slice())
					}) : g(d, function (e, i) {
						var n = i.cache;
						g(i.props, function (t, e) {
							if (!u[n] && i.to) {
								if ("alpha" === t || null == a[t]) return;
								u[n] = i.to(u._rgba)
							}
							u[n][e.idx] = s(a[t], e, !0)
						}), u[n] && 0 > t.inArray(null, u[n].slice(0, 3)) && (u[n][3] = 1, i.from && (u._rgba = i.from(u[n])))
					}), this) : i
				},
				is: function (t) {
					var e = h(t),
						s = !0,
						n = this;
					return g(d, function (t, a) {
						var o, r = e[a.cache];
						return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], g(a.props, function (t, e) {
							return null != r[e.idx] ? s = r[e.idx] === o[e.idx] : i
						})), s
					}), s
				},
				_space: function () {
					var t = [],
						e = this;
					return g(d, function (i, s) {
						e[s.cache] && t.push(i)
					}), t.pop()
				},
				transition: function (t, e) {
					var i = h(t),
						n = i._space(),
						a = d[n],
						o = 0 === this.alpha() ? h("transparent") : this,
						r = o[a.cache] || a.to(o._rgba),
						l = r.slice();
					return i = i[a.cache], g(a.props, function (t, n) {
						var a = n.idx,
							o = r[a],
							c = i[a],
							h = u[n.type] || {};
						null !== c && (null === o ? l[a] = c : (h.mod && (c - o > h.mod / 2 ? o += h.mod : o - c > h.mod / 2 && (o -= h.mod)), l[a] = s((c - o) * e + o, n)))
					}), this[n](l)
				},
				blend: function (t) {
					if (1 === this._rgba[3]) return this;
					var i = this._rgba.slice(),
						s = i.pop(),
						n = h(t)._rgba;
					return h(e.map(i, function (t, e) {
						return (1 - s) * n[e] + s * t
					}))
				},
				toRgbaString: function () {
					var t = "rgba(",
						i = e.map(this._rgba, function (t, e) {
							return null == t ? e > 2 ? 1 : 0 : t
						});
					return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
				},
				toHslaString: function () {
					var t = "hsla(",
						i = e.map(this.hsla(), function (t, e) {
							return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
						});
					return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
				},
				toHexString: function (t) {
					var i = this._rgba.slice(),
						s = i.pop();
					return t && i.push(~~(255 * s)), "#" + e.map(i, function (t) {
						return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
					}).join("")
				},
				toString: function () {
					return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
				}
			}), h.fn.parse.prototype = h.fn, d.hsla.to = function (t) {
				if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
				var e, i, s = t[0] / 255,
					n = t[1] / 255,
					a = t[2] / 255,
					o = t[3],
					r = Math.max(s, n, a),
					l = Math.min(s, n, a),
					c = r - l,
					h = r + l,
					d = .5 * h;
				return e = l === r ? 0 : s === r ? 60 * (n - a) / c + 360 : n === r ? 60 * (a - s) / c + 120 : 60 * (s - n) / c + 240, i = 0 === d || 1 === d ? d : .5 >= d ? c / h : c / (2 - h), [Math.round(e) % 360, i, d, null == o ? 1 : o]
			}, d.hsla.from = function (t) {
				if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
				var e = t[0] / 360,
					i = t[1],
					s = t[2],
					n = t[3],
					o = .5 >= s ? s * (1 + i) : s + i - s * i,
					r = 2 * s - o;
				return [Math.round(255 * a(r, o, e + 1 / 3)), Math.round(255 * a(r, o, e)), Math.round(255 * a(r, o, e - 1 / 3)), n]
			}, g(d, function (t, n) {
				var a = n.props,
					o = n.cache,
					r = n.to,
					c = n.from;
				h.fn[t] = function (t) {
					if (r && !this[o] && (this[o] = r(this._rgba)), t === i) return this[o].slice();
					var n, l = e.type(t),
						d = "array" === l || "object" === l ? t : arguments,
						u = this[o].slice();
					return g(a, function (t, e) {
						var i = d["object" === l ? t : e.idx];
						null == i && (i = u[e.idx]), u[e.idx] = s(i, e)
					}), c ? (n = h(c(u)), n[o] = u, n) : h(u)
				}, g(a, function (i, s) {
					h.fn[i] || (h.fn[i] = function (n) {
						var a, o = e.type(n),
							r = "alpha" === i ? this._hsla ? "hsla" : "rgba" : t,
							c = this[r](),
							h = c[s.idx];
						return "undefined" === o ? h : ("function" === o && (n = n.call(this, h), o = e.type(n)), null == n && s.empty ? this : ("string" === o && (a = l.exec(n), a && (n = h + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), c[s.idx] = n, this[r](c)))
					})
				})
			}), g(r, function (t, i) {
				e.cssHooks[i] = {
					set: function (t, s) {
						var a, o, r = "";
						if ("string" !== e.type(s) || (a = n(s))) {
							if (s = h(a || s), !p.rgba && 1 !== s._rgba[3]) {
								for (o = "backgroundColor" === i ? t.parentNode : t;
									("" === r || "transparent" === r) && o && o.style;) try {
									r = e.css(o, "backgroundColor"), o = o.parentNode
								} catch (l) {}
								s = s.blend(r && "transparent" !== r ? r : "_default")
							}
							s = s.toRgbaString()
						}
						try {
							t.style[i] = s
						} catch (c) {}
					}
				}, e.fx.step[i] = function (t) {
					t.colorInit || (t.start = h(t.elem, i), t.end = h(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
				}
			}), e.cssHooks.borderColor = {
				expand: function (t) {
					var e = {};
					return g(["Top", "Right", "Bottom", "Left"], function (i, s) {
						e["border" + s + "Color"] = t
					}), e
				}
			}, o = e.Color.names = {
				aqua: "#00ffff",
				black: "#000000",
				blue: "#0000ff",
				fuchsia: "#ff00ff",
				gray: "#808080",
				green: "#008000",
				lime: "#00ff00",
				maroon: "#800000",
				navy: "#000080",
				olive: "#808000",
				purple: "#800080",
				red: "#ff0000",
				silver: "#c0c0c0",
				teal: "#008080",
				white: "#ffffff",
				yellow: "#ffff00",
				transparent: [null, null, null, 0],
				_default: "#ffffff"
			}
		}(jQuery),
		function () {
			function i() {
				var e, i, s = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
					n = {};
				if (s && s.length && s[0] && s[s[0]])
					for (i = s.length; i--;) e = s[i], "string" == typeof s[e] && (n[t.camelCase(e)] = s[e]);
				else
					for (e in s) "string" == typeof s[e] && (n[e] = s[e]);
				return n
			}

			function s(e, i) {
				var s, n, o = {};
				for (s in i) n = i[s], e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
				return o
			}
			var n = ["add", "remove", "toggle"],
				a = {
					border: 1,
					borderBottom: 1,
					borderColor: 1,
					borderLeft: 1,
					borderRight: 1,
					borderTop: 1,
					borderWidth: 1,
					margin: 1,
					padding: 1
				};
			t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
				t.fx.step[i] = function (t) {
					("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
				}
			}), t.effects.animateClass = function (e, a, o, r) {
				var l = t.speed(a, o, r);
				return this.queue(function () {
					var a, o = t(this),
						r = o.attr("class") || "",
						c = l.children ? o.find("*").andSelf() : o;
					c = c.map(function () {
						var e = t(this);
						return {
							el: e,
							start: i.call(this)
						}
					}), a = function () {
						t.each(n, function (t, i) {
							e[i] && o[i + "Class"](e[i])
						})
					}, a(), c = c.map(function () {
						return this.end = i.call(this.el[0]), this.diff = s(this.start, this.end), this
					}), o.attr("class", r), c = c.map(function () {
						var e = this,
							i = t.Deferred(),
							s = jQuery.extend({}, l, {
								queue: !1,
								complete: function () {
									i.resolve(e)
								}
							});
						return this.el.animate(this.diff, s), i.promise()
					}), t.when.apply(t, c.get()).done(function () {
						a(), t.each(arguments, function () {
							var e = this.el;
							t.each(this.diff, function (t) {
								e.css(t, "")
							})
						}), l.complete.call(o[0])
					})
				})
			}, t.fn.extend({
				_addClass: t.fn.addClass,
				addClass: function (e, i, s, n) {
					return i ? t.effects.animateClass.call(this, {
						add: e
					}, i, s, n) : this._addClass(e)
				},
				_removeClass: t.fn.removeClass,
				removeClass: function (e, i, s, n) {
					return i ? t.effects.animateClass.call(this, {
						remove: e
					}, i, s, n) : this._removeClass(e)
				},
				_toggleClass: t.fn.toggleClass,
				toggleClass: function (i, s, n, a, o) {
					return "boolean" == typeof s || s === e ? n ? t.effects.animateClass.call(this, s ? {
						add: i
					} : {
						remove: i
					}, n, a, o) : this._toggleClass(i, s) : t.effects.animateClass.call(this, {
						toggle: i
					}, s, n, a)
				},
				switchClass: function (e, i, s, n, a) {
					return t.effects.animateClass.call(this, {
						add: i,
						remove: e
					}, s, n, a)
				}
			})
		}(),
		function () {
			function n(e, i, s, n) {
				return t.isPlainObject(e) && (i = e, e = e.effect), e = {
					effect: e
				}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
			}

			function a(e) {
				return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? !1 : i && t.effects[e] ? !1 : !0
			}
			t.extend(t.effects, {
				version: "1.9.2",
				save: function (t, e) {
					for (var i = 0; e.length > i; i++) null !== e[i] && t.data(s + e[i], t[0].style[e[i]])
				},
				restore: function (t, i) {
					var n, a;
					for (a = 0; i.length > a; a++) null !== i[a] && (n = t.data(s + i[a]), n === e && (n = ""), t.css(i[a], n))
				},
				setMode: function (t, e) {
					return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
				},
				getBaseline: function (t, e) {
					var i, s;
					switch (t[0]) {
						case "top":
							i = 0;
							break;
						case "middle":
							i = .5;
							break;
						case "bottom":
							i = 1;
							break;
						default:
							i = t[0] / e.height
					}
					switch (t[1]) {
						case "left":
							s = 0;
							break;
						case "center":
							s = .5;
							break;
						case "right":
							s = 1;
							break;
						default:
							s = t[1] / e.width
					}
					return {
						x: s,
						y: i
					}
				},
				createWrapper: function (e) {
					if (e.parent().is(".ui-effects-wrapper")) return e.parent();
					var i = {
							width: e.outerWidth(!0),
							height: e.outerHeight(!0),
							"float": e.css("float")
						},
						s = t("<div></div>").addClass("ui-effects-wrapper").css({
							fontSize: "100%",
							background: "transparent",
							border: "none",
							margin: 0,
							padding: 0
						}),
						n = {
							width: e.width(),
							height: e.height()
						},
						a = document.activeElement;
					try {
						a.id
					} catch (o) {
						a = document.body
					}
					return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({
						position: "relative"
					}), e.css({
						position: "relative"
					})) : (t.extend(i, {
						position: e.css("position"),
						zIndex: e.css("z-index")
					}), t.each(["top", "left", "bottom", "right"], function (t, s) {
						i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
					}), e.css({
						position: "relative",
						top: 0,
						left: 0,
						right: "auto",
						bottom: "auto"
					})), e.css(n), s.css(i).show()
				},
				removeWrapper: function (e) {
					var i = document.activeElement;
					return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
				},
				setTransition: function (e, i, s, n) {
					return n = n || {}, t.each(i, function (t, i) {
						var a = e.cssUnit(i);
						a[0] > 0 && (n[i] = a[0] * s + a[1])
					}), n
				}
			}), t.fn.extend({
				effect: function () {
					function e(e) {
						function i() {
							t.isFunction(a) && a.call(n[0]), t.isFunction(e) && e()
						}
						var n = t(this),
							a = s.complete,
							o = s.mode;
						(n.is(":hidden") ? "hide" === o : "show" === o) ? i(): r.call(n[0], s, i)
					}
					var s = n.apply(this, arguments),
						a = s.mode,
						o = s.queue,
						r = t.effects.effect[s.effect],
						l = !r && i && t.effects[s.effect];
					return t.fx.off || !r && !l ? a ? this[a](s.duration, s.complete) : this.each(function () {
						s.complete && s.complete.call(this)
					}) : r ? o === !1 ? this.each(e) : this.queue(o || "fx", e) : l.call(this, {
						options: s,
						duration: s.duration,
						callback: s.complete,
						mode: s.mode
					})
				},
				_show: t.fn.show,
				show: function (t) {
					if (a(t)) return this._show.apply(this, arguments);
					var e = n.apply(this, arguments);
					return e.mode = "show", this.effect.call(this, e)
				},
				_hide: t.fn.hide,
				hide: function (t) {
					if (a(t)) return this._hide.apply(this, arguments);
					var e = n.apply(this, arguments);
					return e.mode = "hide", this.effect.call(this, e)
				},
				__toggle: t.fn.toggle,
				toggle: function (e) {
					if (a(e) || "boolean" == typeof e || t.isFunction(e)) return this.__toggle.apply(this, arguments);
					var i = n.apply(this, arguments);
					return i.mode = "toggle", this.effect.call(this, i)
				},
				cssUnit: function (e) {
					var i = this.css(e),
						s = [];
					return t.each(["em", "px", "%", "pt"], function (t, e) {
						i.indexOf(e) > 0 && (s = [parseFloat(i), e])
					}), s
				}
			})
		}(),
		function () {
			var e = {};
			t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
				e[i] = function (e) {
					return Math.pow(e, t + 2)
				}
			}), t.extend(e, {
				Sine: function (t) {
					return 1 - Math.cos(t * Math.PI / 2)
				},
				Circ: function (t) {
					return 1 - Math.sqrt(1 - t * t)
				},
				Elastic: function (t) {
					return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
				},
				Back: function (t) {
					return t * t * (3 * t - 2)
				},
				Bounce: function (t) {
					for (var e, i = 4;
						((e = Math.pow(2, --i)) - 1) / 11 > t;);
					return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
				}
			}), t.each(e, function (e, i) {
				t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
					return 1 - i(1 - t)
				}, t.easing["easeInOut" + e] = function (t) {
					return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
				}
			})
		}()
}(jQuery);
(function (t) {
	var e = /up|down|vertical/,
		i = /up|left|vertical|horizontal/;
	t.effects.effect.blind = function (s, n) {
		var a, o, r, l = t(this),
			h = ["position", "top", "bottom", "left", "right", "height", "width"],
			c = t.effects.setMode(l, s.mode || "hide"),
			d = s.direction || "up",
			u = e.test(d),
			p = u ? "height" : "width",
			f = u ? "top" : "left",
			g = i.test(d),
			m = {},
			v = "show" === c;
		l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), h) : t.effects.save(l, h), l.show(), a = t.effects.createWrapper(l).css({
			overflow: "hidden"
		}), o = a[p](), r = parseFloat(a.css(f)) || 0, m[p] = v ? o : 0, g || (l.css(u ? "bottom" : "right", 0).css(u ? "top" : "left", "auto").css({
			position: "absolute"
		}), m[f] = v ? r : o + r), v && (a.css(p, 0), g || a.css(f, r + o)), a.animate(m, {
			duration: s.duration,
			easing: s.easing,
			queue: !1,
			complete: function () {
				"hide" === c && l.hide(), t.effects.restore(l, h), t.effects.removeWrapper(l), n()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.bounce = function (e, i) {
		var s, n, a, o = t(this),
			r = ["position", "top", "bottom", "left", "right", "height", "width"],
			l = t.effects.setMode(o, e.mode || "effect"),
			h = "hide" === l,
			c = "show" === l,
			d = e.direction || "up",
			u = e.distance,
			p = e.times || 5,
			f = 2 * p + (c || h ? 1 : 0),
			g = e.duration / f,
			m = e.easing,
			v = "up" === d || "down" === d ? "top" : "left",
			_ = "up" === d || "left" === d,
			b = o.queue(),
			y = b.length;
		for ((c || h) && r.push("opacity"), t.effects.save(o, r), o.show(), t.effects.createWrapper(o), u || (u = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (a = {
				opacity: 1
			}, a[v] = 0, o.css("opacity", 0).css(v, _ ? 2 * -u : 2 * u).animate(a, g, m)), h && (u /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++) n = {}, n[v] = (_ ? "-=" : "+=") + u, o.animate(n, g, m).animate(a, g, m), u = h ? 2 * u : u / 2;
		h && (n = {
			opacity: 0
		}, n[v] = (_ ? "-=" : "+=") + u, o.animate(n, g, m)), o.queue(function () {
			h && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
		}), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), o.dequeue()
	}
})(jQuery);
(function (t) {
	t.effects.effect.clip = function (e, i) {
		var s, n, a, o = t(this),
			r = ["position", "top", "bottom", "left", "right", "height", "width"],
			l = t.effects.setMode(o, e.mode || "hide"),
			h = "show" === l,
			c = e.direction || "vertical",
			d = "vertical" === c,
			u = d ? "height" : "width",
			p = d ? "top" : "left",
			f = {};
		t.effects.save(o, r), o.show(), s = t.effects.createWrapper(o).css({
			overflow: "hidden"
		}), n = "IMG" === o[0].tagName ? s : o, a = n[u](), h && (n.css(u, 0), n.css(p, a / 2)), f[u] = h ? a : 0, f[p] = h ? 0 : a / 2, n.animate(f, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				h || o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
			}
		})
	}
})(jQuery);
(function (e) {
	e.effects.effect.drop = function (t, i) {
		var s, n = e(this),
			a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
			o = e.effects.setMode(n, t.mode || "hide"),
			r = "show" === o,
			l = t.direction || "left",
			h = "up" === l || "down" === l ? "top" : "left",
			c = "up" === l || "left" === l ? "pos" : "neg",
			d = {
				opacity: r ? 1 : 0
			};
		e.effects.save(n, a), n.show(), e.effects.createWrapper(n), s = t.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(h, "pos" === c ? -s : s), d[h] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(d, {
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: function () {
				"hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
			}
		})
	}
})(jQuery);
(function (e) {
	e.effects.effect.explode = function (t, i) {
		function s() {
			b.push(this), b.length === d * u && n()
		}

		function n() {
			p.css({
				visibility: "visible"
			}), e(b).remove(), g || p.hide(), i()
		}
		var a, o, r, l, h, c, d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
			u = d,
			p = e(this),
			f = e.effects.setMode(p, t.mode || "hide"),
			g = "show" === f,
			m = p.show().css("visibility", "hidden").offset(),
			v = Math.ceil(p.outerWidth() / u),
			_ = Math.ceil(p.outerHeight() / d),
			b = [];
		for (a = 0; d > a; a++)
			for (l = m.top + a * _, c = a - (d - 1) / 2, o = 0; u > o; o++) r = m.left + o * v, h = o - (u - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
				position: "absolute",
				visibility: "visible",
				left: -o * v,
				top: -a * _
			}).parent().addClass("ui-effects-explode").css({
				position: "absolute",
				overflow: "hidden",
				width: v,
				height: _,
				left: r + (g ? h * v : 0),
				top: l + (g ? c * _ : 0),
				opacity: g ? 0 : 1
			}).animate({
				left: r + (g ? 0 : h * v),
				top: l + (g ? 0 : c * _),
				opacity: g ? 1 : 0
			}, t.duration || 500, t.easing, s)
	}
})(jQuery);
(function (e) {
	e.effects.effect.fade = function (t, i) {
		var s = e(this),
			n = e.effects.setMode(s, t.mode || "toggle");
		s.animate({
			opacity: n
		}, {
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: i
		})
	}
})(jQuery);
(function (e) {
	e.effects.effect.fold = function (t, i) {
		var s, n, a = e(this),
			o = ["position", "top", "bottom", "left", "right", "height", "width"],
			r = e.effects.setMode(a, t.mode || "hide"),
			l = "show" === r,
			h = "hide" === r,
			c = t.size || 15,
			d = /([0-9]+)%/.exec(c),
			u = !!t.horizFirst,
			p = l !== u,
			f = p ? ["width", "height"] : ["height", "width"],
			g = t.duration / 2,
			m = {},
			v = {};
		e.effects.save(a, o), a.show(), s = e.effects.createWrapper(a).css({
			overflow: "hidden"
		}), n = p ? [s.width(), s.height()] : [s.height(), s.width()], d && (c = parseInt(d[1], 10) / 100 * n[h ? 0 : 1]), l && s.css(u ? {
			height: 0,
			width: c
		} : {
			height: c,
			width: 0
		}), m[f[0]] = l ? n[0] : c, v[f[1]] = l ? n[1] : 0, s.animate(m, g, t.easing).animate(v, g, t.easing, function () {
			h && a.hide(), e.effects.restore(a, o), e.effects.removeWrapper(a), i()
		})
	}
})(jQuery);
(function (e) {
	e.effects.effect.highlight = function (t, i) {
		var s = e(this),
			n = ["backgroundImage", "backgroundColor", "opacity"],
			a = e.effects.setMode(s, t.mode || "show"),
			o = {
				backgroundColor: s.css("backgroundColor")
			};
		"hide" === a && (o.opacity = 0), e.effects.save(s, n), s.show().css({
			backgroundImage: "none",
			backgroundColor: t.color || "#ffff99"
		}).animate(o, {
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: function () {
				"hide" === a && s.hide(), e.effects.restore(s, n), i()
			}
		})
	}
})(jQuery);
(function (e) {
	e.effects.effect.pulsate = function (t, i) {
		var s, n = e(this),
			a = e.effects.setMode(n, t.mode || "show"),
			o = "show" === a,
			r = "hide" === a,
			l = o || "hide" === a,
			h = 2 * (t.times || 5) + (l ? 1 : 0),
			c = t.duration / h,
			d = 0,
			u = n.queue(),
			p = u.length;
		for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), d = 1), s = 1; h > s; s++) n.animate({
			opacity: d
		}, c, t.easing), d = 1 - d;
		n.animate({
			opacity: d
		}, c, t.easing), n.queue(function () {
			r && n.hide(), i()
		}), p > 1 && u.splice.apply(u, [1, 0].concat(u.splice(p, h + 1))), n.dequeue()
	}
})(jQuery);
(function (t) {
	t.effects.effect.puff = function (e, i) {
		var s = t(this),
			n = t.effects.setMode(s, e.mode || "hide"),
			a = "hide" === n,
			o = parseInt(e.percent, 10) || 150,
			r = o / 100,
			l = {
				height: s.height(),
				width: s.width(),
				outerHeight: s.outerHeight(),
				outerWidth: s.outerWidth()
			};
		t.extend(e, {
			effect: "scale",
			queue: !1,
			fade: !0,
			mode: n,
			complete: i,
			percent: a ? o : 100,
			from: a ? l : {
				height: l.height * r,
				width: l.width * r,
				outerHeight: l.outerHeight * r,
				outerWidth: l.outerWidth * r
			}
		}), s.effect(e)
	}, t.effects.effect.scale = function (e, i) {
		var s = t(this),
			n = t.extend(!0, {}, e),
			a = t.effects.setMode(s, e.mode || "effect"),
			o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === a ? 0 : 100),
			r = e.direction || "both",
			l = e.origin,
			h = {
				height: s.height(),
				width: s.width(),
				outerHeight: s.outerHeight(),
				outerWidth: s.outerWidth()
			},
			c = {
				y: "horizontal" !== r ? o / 100 : 1,
				x: "vertical" !== r ? o / 100 : 1
			};
		n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = l || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === a ? {
			height: 0,
			width: 0,
			outerHeight: 0,
			outerWidth: 0
		} : h), n.to = {
			height: h.height * c.y,
			width: h.width * c.x,
			outerHeight: h.outerHeight * c.y,
			outerWidth: h.outerWidth * c.x
		}, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
	}, t.effects.effect.size = function (e, i) {
		var s, n, a, o = t(this),
			r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
			l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
			h = ["width", "height", "overflow"],
			c = ["fontSize"],
			d = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
			u = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
			p = t.effects.setMode(o, e.mode || "effect"),
			f = e.restore || "effect" !== p,
			g = e.scale || "both",
			m = e.origin || ["middle", "center"],
			v = o.css("position"),
			_ = f ? r : l,
			b = {
				height: 0,
				width: 0,
				outerHeight: 0,
				outerWidth: 0
			};
		"show" === p && o.show(), s = {
			height: o.height(),
			width: o.width(),
			outerHeight: o.outerHeight(),
			outerWidth: o.outerWidth()
		}, "toggle" === e.mode && "show" === p ? (o.from = e.to || b, o.to = e.from || s) : (o.from = e.from || ("show" === p ? b : s), o.to = e.to || ("hide" === p ? b : s)), a = {
			from: {
				y: o.from.height / s.height,
				x: o.from.width / s.width
			},
			to: {
				y: o.to.height / s.height,
				x: o.to.width / s.width
			}
		}, ("box" === g || "both" === g) && (a.from.y !== a.to.y && (_ = _.concat(d), o.from = t.effects.setTransition(o, d, a.from.y, o.from), o.to = t.effects.setTransition(o, d, a.to.y, o.to)), a.from.x !== a.to.x && (_ = _.concat(u), o.from = t.effects.setTransition(o, u, a.from.x, o.from), o.to = t.effects.setTransition(o, u, a.to.x, o.to))), ("content" === g || "both" === g) && a.from.y !== a.to.y && (_ = _.concat(c).concat(h), o.from = t.effects.setTransition(o, c, a.from.y, o.from), o.to = t.effects.setTransition(o, c, a.to.y, o.to)), t.effects.save(o, _), o.show(), t.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (n = t.effects.getBaseline(m, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === g || "both" === g) && (d = d.concat(["marginTop", "marginBottom"]).concat(c), u = u.concat(["marginLeft", "marginRight"]), h = r.concat(d).concat(u), o.find("*[width]").each(function () {
			var i = t(this),
				s = {
					height: i.height(),
					width: i.width(),
					outerHeight: i.outerHeight(),
					outerWidth: i.outerWidth()
				};
			f && t.effects.save(i, h), i.from = {
				height: s.height * a.from.y,
				width: s.width * a.from.x,
				outerHeight: s.outerHeight * a.from.y,
				outerWidth: s.outerWidth * a.from.x
			}, i.to = {
				height: s.height * a.to.y,
				width: s.width * a.to.x,
				outerHeight: s.height * a.to.y,
				outerWidth: s.width * a.to.x
			}, a.from.y !== a.to.y && (i.from = t.effects.setTransition(i, d, a.from.y, i.from), i.to = t.effects.setTransition(i, d, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = t.effects.setTransition(i, u, a.from.x, i.from), i.to = t.effects.setTransition(i, u, a.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function () {
				f && t.effects.restore(i, h)
			})
		})), o.animate(o.to, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), t.effects.restore(o, _), f || ("static" === v ? o.css({
					position: "relative",
					top: o.to.top,
					left: o.to.left
				}) : t.each(["top", "left"], function (t, e) {
					o.css(e, function (e, i) {
						var s = parseInt(i, 10),
							n = t ? o.to.left : o.to.top;
						return "auto" === i ? n + "px" : s + n + "px"
					})
				})), t.effects.removeWrapper(o), i()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.shake = function (e, i) {
		var s, n = t(this),
			a = ["position", "top", "bottom", "left", "right", "height", "width"],
			o = t.effects.setMode(n, e.mode || "effect"),
			r = e.direction || "left",
			l = e.distance || 20,
			h = e.times || 3,
			c = 2 * h + 1,
			d = Math.round(e.duration / c),
			u = "up" === r || "down" === r ? "top" : "left",
			p = "up" === r || "left" === r,
			f = {},
			g = {},
			m = {},
			v = n.queue(),
			_ = v.length;
		for (t.effects.save(n, a), n.show(), t.effects.createWrapper(n), f[u] = (p ? "-=" : "+=") + l, g[u] = (p ? "+=" : "-=") + 2 * l, m[u] = (p ? "-=" : "+=") + 2 * l, n.animate(f, d, e.easing), s = 1; h > s; s++) n.animate(g, d, e.easing).animate(m, d, e.easing);
		n.animate(g, d, e.easing).animate(f, d / 2, e.easing).queue(function () {
			"hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
		}), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), n.dequeue()
	}
})(jQuery);
(function (e) {
	e.effects.effect.slide = function (t, i) {
		var s, n = e(this),
			a = ["position", "top", "bottom", "left", "right", "width", "height"],
			o = e.effects.setMode(n, t.mode || "show"),
			r = "show" === o,
			l = t.direction || "left",
			h = "up" === l || "down" === l ? "top" : "left",
			c = "up" === l || "left" === l,
			d = {};
		e.effects.save(n, a), n.show(), s = t.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(n).css({
			overflow: "hidden"
		}), r && n.css(h, c ? isNaN(s) ? "-" + s : -s : s), d[h] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(d, {
			queue: !1,
			duration: t.duration,
			easing: t.easing,
			complete: function () {
				"hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
			}
		})
	}
})(jQuery);
(function (e) {
	e.effects.effect.transfer = function (t, i) {
		var s = e(this),
			n = e(t.to),
			a = "fixed" === n.css("position"),
			o = e("body"),
			r = a ? o.scrollTop() : 0,
			l = a ? o.scrollLeft() : 0,
			h = n.offset(),
			c = {
				top: h.top - r,
				left: h.left - l,
				height: n.innerHeight(),
				width: n.innerWidth()
			},
			d = s.offset(),
			u = e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.className).css({
				top: d.top - r,
				left: d.left - l,
				height: s.innerHeight(),
				width: s.innerWidth(),
				position: a ? "fixed" : "absolute"
			}).animate(c, t.duration, t.easing, function () {
				u.remove(), i()
			})
	}
})(jQuery);

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
eval(function (p, a, c, k, e, d) {
	e = function (c) {
		return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
	};
	if (!''.replace(/^/, String)) {
		while (c--) {
			d[e(c)] = k[c] || e(c)
		}
		k = [function (e) {
			return d[e]
		}];
		e = function () {
			return '\\w+'
		};
		c = 1
	};
	while (c--) {
		if (k[c]) {
			p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
		}
	}
	return p
}('o.5=B(9,b,2){6(h b!=\'E\'){2=2||{};6(b===n){b=\'\';2.3=-1}4 3=\'\';6(2.3&&(h 2.3==\'j\'||2.3.k)){4 7;6(h 2.3==\'j\'){7=w u();7.t(7.q()+(2.3*r*l*l*x))}m{7=2.3}3=\'; 3=\'+7.k()}4 8=2.8?\'; 8=\'+(2.8):\'\';4 a=2.a?\'; a=\'+(2.a):\'\';4 c=2.c?\'; c\':\'\';d.5=[9,\'=\',C(b),3,8,a,c].y(\'\')}m{4 e=n;6(d.5&&d.5!=\'\'){4 g=d.5.A(\';\');s(4 i=0;i<g.f;i++){4 5=o.z(g[i]);6(5.p(0,9.f+1)==(9+\'=\')){e=D(5.p(9.f+1));v}}}F e}};', 42, 42, '||options|expires|var|cookie|if|date|path|name|domain|value|secure|document|cookieValue|length|cookies|typeof||number|toUTCString|60|else|null|jQuery|substring|getTime|24|for|setTime|Date|break|new|1000|join|trim|split|function|encodeURIComponent|decodeURIComponent|undefined|return'.split('|'), 0, {}))

/* Jquery UI End*/

/*
 * jQuery Form Plugin
 * version: 2.28 (10-MAY-2009)
 * @requires jQuery v1.2.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
;
(function ($) {

	/*
	Usage Note:
	-----------
	Do not use both ajaxSubmit and ajaxForm on the same form. These
	functions are intended to be exclusive. Use ajaxSubmit if you want
	to bind your own submit handler to the form. For example,
	 
	$(document).ready(function() {
	$('#myForm').bind('submit', function() {
	$(this).ajaxSubmit({
	target: '#output'
	});
	return false; // <-- important!
	});
	});
	 
	Use ajaxForm when you want the plugin to manage all the event binding
	for you. For example,
	 
	$(document).ready(function() {
	$('#myForm').ajaxForm({
	target: '#output'
	});
	});
	 
	When using ajaxForm, the ajaxSubmit function will be invoked for you
	at the appropriate time.
	*/

	/**
	 * ajaxSubmit() provides a mechanism for immediately submitting
	 * an HTML form using AJAX.
	 */
	$.fn.ajaxSubmit = function (options) {
		// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
		if (!this.length) {
			log('ajaxSubmit: skipping submit process - no element selected');
			return this;
		}

		if (typeof options == 'function')
			options = {
				success: options
			};

		var url = $.trim(this.attr('action'));
		if (url) {
			// clean url (don't include hash vaue)
			url = (url.match(/^([^#]+)/) || [])[1];
		}
		url = url || window.location.href || ''

		options = $.extend({
			url: url,
			type: this.attr('method') || 'GET'
		}, options || {});

		// hook for manipulating the form data before it is extracted;
		// convenient for use with rich editors like tinyMCE or FCKEditor
		var veto = {};
		this.trigger('form-pre-serialize', [this, options, veto]);
		if (veto.veto) {
			log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
			return this;
		}

		// provide opportunity to alter form data before it is serialized
		if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
			log('ajaxSubmit: submit aborted via beforeSerialize callback');
			return this;
		}

		var a = this.formToArray(options.semantic);
		if (options.data) {
			options.extraData = options.data;
			for (var n in options.data) {
				if (options.data[n] instanceof Array) {
					for (var k in options.data[n])
						a.push({
							name: n,
							value: options.data[n][k]
						});
				} else
					a.push({
						name: n,
						value: options.data[n]
					});
			}
		}

		// give pre-submit callback an opportunity to abort the submit
		if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
			log('ajaxSubmit: submit aborted via beforeSubmit callback');
			return this;
		}

		// fire vetoable 'validate' event
		this.trigger('form-submit-validate', [a, this, options, veto]);
		if (veto.veto) {
			log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
			return this;
		}

		var q = $.param(a);

		if (options.type.toUpperCase() == 'GET') {
			options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
			options.data = null; // data is null for 'get'
		} else
			options.data = q; // data is the query string for 'post'

		var $form = this,
			callbacks = [];
		if (options.resetForm) callbacks.push(function () {
			$form.resetForm();
		});
		if (options.clearForm) callbacks.push(function () {
			$form.clearForm();
		});

		// perform a load on the target only if dataType is not provided
		if (!options.dataType && options.target) {
			var oldSuccess = options.success || function () {};
			callbacks.push(function (data) {
				$(options.target).html(data).each(oldSuccess, arguments);
			});
		} else if (options.success)
			callbacks.push(options.success);

		options.success = function (data, status) {
			for (var i = 0, max = callbacks.length; i < max; i++)
				callbacks[i].apply(options, [data, status, $form]);
		};

		// are there files to upload?
		var files = $('input:file', this).fieldValue();
		var found = false;
		for (var j = 0; j < files.length; j++)
			if (files[j])
				found = true;

		var multipart = false;
		// var mp = 'multipart/form-data';
		// multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

		// options.iframe allows user to force iframe mode
		if (options.iframe || found || multipart) {
			// hack to fix Safari hang (thanks to Tim Molendijk for this)
			// see: http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
			if (options.closeKeepAlive)
				$.get(options.closeKeepAlive, fileUpload);
			else
				fileUpload();
		} else
			$.ajax(options);

		// fire 'notify' event
		this.trigger('form-submit-notify', [this, options]);
		return this;


		// private function for handling file uploads (hat tip to YAHOO!)
		function fileUpload() {
			var form = $form[0];

			if ($(':input[name=submit]', form).length) {
				alert('Error: Form elements must not be named "submit".');
				return;
			}

			var opts = $.extend({}, $.ajaxSettings, options);
			var s = $.extend(true, {}, $.extend(true, {}, $.ajaxSettings), opts);

			var id = 'jqFormIO' + (new Date().getTime());
			var $io = $('<iframe id="' + id + '" name="' + id + '" src="about:blank" />');
			var io = $io[0];

			$io.css({
				position: 'absolute',
				top: '-1000px',
				left: '-1000px'
			});

			var xhr = { // mock object
				aborted: 0,
				responseText: null,
				responseXML: null,
				status: 0,
				statusText: 'n/a',
				getAllResponseHeaders: function () {},
				getResponseHeader: function () {},
				setRequestHeader: function () {},
				abort: function () {
					this.aborted = 1;
					$io.attr('src', 'about:blank'); // abort op in progress
				}
			};

			var g = opts.global;
			// trigger ajax global events so that activity/block indicators work like normal
			if (g && !$.active++) $.event.trigger("ajaxStart");
			if (g) $.event.trigger("ajaxSend", [xhr, opts]);

			if (s.beforeSend && s.beforeSend(xhr, s) === false) {
				s.global && $.active--;
				return;
			}
			if (xhr.aborted)
				return;

			var cbInvoked = 0;
			var timedOut = 0;

			// add submitting element to data if we know it
			var sub = form.clk;
			if (sub) {
				var n = sub.name;
				if (n && !sub.disabled) {
					options.extraData = options.extraData || {};
					options.extraData[n] = sub.value;
					if (sub.type == "image") {
						options.extraData[name + '.x'] = form.clk_x;
						options.extraData[name + '.y'] = form.clk_y;
					}
				}
			}

			// take a breath so that pending repaints get some cpu time before the upload starts
			setTimeout(function () {
				// make sure form attrs are set
				var t = $form.attr('target'),
					a = $form.attr('action');

				// update form attrs in IE friendly way
				form.setAttribute('target', id);
				if (form.getAttribute('method') != 'POST')
					form.setAttribute('method', 'POST');
				if (form.getAttribute('action') != opts.url)
					form.setAttribute('action', opts.url);

				// ie borks in some cases when setting encoding
				if (!options.skipEncodingOverride) {
					$form.attr({
						encoding: 'multipart/form-data',
						enctype: 'multipart/form-data'
					});
				}

				// support timout
				if (opts.timeout)
					setTimeout(function () {
						timedOut = true;
						cb();
					}, opts.timeout);

				// add "extra" data to form if provided in options
				var extraInputs = [];
				try {
					if (options.extraData)
						for (var n in options.extraData)
							extraInputs.push(
								$('<input type="hidden" name="' + n + '" value="' + options.extraData[n] + '" />')
								.appendTo(form)[0]);

					// add iframe to doc and submit the form
					$io.appendTo('body');
					io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
					form.submit();
				} finally {
					// reset attrs and remove "extra" input elements
					form.setAttribute('action', a);
					t ? form.setAttribute('target', t) : $form.removeAttr('target');
					$(extraInputs).remove();
				}
			}, 10);

			var nullCheckFlag = 0;

			function cb() {
				if (cbInvoked++) return;

				io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

				var ok = true;
				try {
					if (timedOut) throw 'timeout';
					// extract the server response from the iframe
					var data, doc;

					doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;

					if ((doc.body == null || doc.body.innerHTML == '') && !nullCheckFlag) {
						// in some browsers (cough, Opera 9.2.x) the iframe DOM is not always traversable when
						// the onload callback fires, so we give them a 2nd chance
						nullCheckFlag = 1;
						cbInvoked--;
						setTimeout(cb, 100);
						return;
					}

					xhr.responseText = doc.body ? doc.body.innerHTML : null;
					xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
					xhr.getResponseHeader = function (header) {
						var headers = {
							'content-type': opts.dataType
						};
						return headers[header];
					};

					if (opts.dataType == 'json' || opts.dataType == 'script') {
						var ta = doc.getElementsByTagName('textarea')[0];
						xhr.responseText = ta ? ta.value : xhr.responseText;
					} else if (opts.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
						xhr.responseXML = toXml(xhr.responseText);
					}
					data = $.httpData(xhr, opts.dataType);
				} catch (e) {
					ok = false;
					$.handleError(opts, xhr, 'error', e);
				}

				// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
				if (ok) {
					opts.success(data, 'success');
					if (g) $.event.trigger("ajaxSuccess", [xhr, opts]);
				}
				if (g) $.event.trigger("ajaxComplete", [xhr, opts]);
				if (g && !--$.active) $.event.trigger("ajaxStop");
				if (opts.complete) opts.complete(xhr, ok ? 'success' : 'error');

				// clean up
				setTimeout(function () {
					$io.remove();
					xhr.responseXML = null;
				}, 100);
			};

			function toXml(s, doc) {
				if (window.ActiveXObject) {
					doc = new ActiveXObject('Microsoft.XMLDOM');
					doc.async = 'false';
					doc.loadXML(s);
				} else
					doc = (new DOMParser()).parseFromString(s, 'text/xml');
				return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null;
			};
		};
	};

	/**
	 * ajaxForm() provides a mechanism for fully automating form submission.
	 *
	 * The advantages of using this method instead of ajaxSubmit() are:
	 *
	 * 1: This method will include coordinates for <input type="image" /> elements (if the element
	 * is used to submit the form).
	 * 2. This method will include the submit element's name/value data (for the element that was
	 * used to submit the form).
	 * 3. This method binds the submit() method to the form for you.
	 *
	 * The options argument for ajaxForm works exactly as it does for ajaxSubmit. ajaxForm merely
	 * passes the options argument along after properly binding events for submit elements and
	 * the form itself.
	 */
	$.fn.ajaxForm = function (options) {
		return this.ajaxFormUnbind().bind('submit.form-plugin', function () {
			$(this).ajaxSubmit(options);
			return false;
		}).each(function () {
			// store options in hash
			$(":submit,input:image", this).bind('click.form-plugin', function (e) {
				var form = this.form;
				form.clk = this;
				if (this.type == 'image') {
					if (e.offsetX != undefined) {
						form.clk_x = e.offsetX;
						form.clk_y = e.offsetY;
					} else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
						var offset = $(this).offset();
						form.clk_x = e.pageX - offset.left;
						form.clk_y = e.pageY - offset.top;
					} else {
						form.clk_x = e.pageX - this.offsetLeft;
						form.clk_y = e.pageY - this.offsetTop;
					}
				}
				// clear form vars
				setTimeout(function () {
					form.clk = form.clk_x = form.clk_y = null;
				}, 10);
			});
		});
	};

	// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
	$.fn.ajaxFormUnbind = function () {
		this.unbind('submit.form-plugin');
		return this.each(function () {
			$(":submit,input:image", this).unbind('click.form-plugin');
		});

	};

	/**
	 * formToArray() gathers form element data into an array of objects that can
	 * be passed to any of the following ajax functions: $.get, $.post, or load.
	 * Each object in the array has both a 'name' and 'value' property. An example of
	 * an array for a simple login form might be:
	 *
	 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
	 *
	 * It is this array that is passed to pre-submit callback functions provided to the
	 * ajaxSubmit() and ajaxForm() methods.
	 */
	$.fn.formToArray = function (semantic) {
		var a = [];
		if (this.length == 0) return a;

		var form = this[0];
		var els = semantic ? form.getElementsByTagName('*') : form.elements;
		if (!els) return a;
		for (var i = 0, max = els.length; i < max; i++) {
			var el = els[i];
			var n = el.name;
			if (!n) continue;

			if (semantic && form.clk && el.type == "image") {
				// handle image inputs on the fly when semantic == true
				if (!el.disabled && form.clk == el) {
					a.push({
						name: n,
						value: $(el).val()
					});
					a.push({
						name: n + '.x',
						value: form.clk_x
					}, {
						name: n + '.y',
						value: form.clk_y
					});
				}
				continue;
			}

			var v = $.fieldValue(el, true);
			if (v && v.constructor == Array) {
				for (var j = 0, jmax = v.length; j < jmax; j++)
					a.push({
						name: n,
						value: v[j]
					});
			} else if (v !== null && typeof v != 'undefined')
				a.push({
					name: n,
					value: v
				});
		}

		if (!semantic && form.clk) {
			// input type=='image' are not found in elements array! handle it here
			var $input = $(form.clk),
				input = $input[0],
				n = input.name;
			if (n && !input.disabled && input.type == 'image') {
				a.push({
					name: n,
					value: $input.val()
				});
				a.push({
					name: n + '.x',
					value: form.clk_x
				}, {
					name: n + '.y',
					value: form.clk_y
				});
			}
		}
		return a;
	};

	/**
	 * Serializes form data into a 'submittable' string. This method will return a string
	 * in the format: name1=value1&amp;name2=value2
	 */
	$.fn.formSerialize = function (semantic) {
		//hand off to jQuery.param for proper encoding
		return $.param(this.formToArray(semantic));
	};

	/**
	 * Serializes all field elements in the jQuery object into a query string.
	 * This method will return a string in the format: name1=value1&amp;name2=value2
	 */
	$.fn.fieldSerialize = function (successful) {
		var a = [];
		this.each(function () {
			var n = this.name;
			if (!n) return;
			var v = $.fieldValue(this, successful);
			if (v && v.constructor == Array) {
				for (var i = 0, max = v.length; i < max; i++)
					a.push({
						name: n,
						value: v[i]
					});
			} else if (v !== null && typeof v != 'undefined')
				a.push({
					name: this.name,
					value: v
				});
		});
		//hand off to jQuery.param for proper encoding
		return $.param(a);
	};

	/**
	 * Returns the value(s) of the element in the matched set. For example, consider the following form:
	 *
	 * <form><fieldset>
	 * <input name="A" type="text" />
	 * <input name="A" type="text" />
	 * <input name="B" type="checkbox" value="B1" />
	 * <input name="B" type="checkbox" value="B2"/>
	 * <input name="C" type="radio" value="C1" />
	 * <input name="C" type="radio" value="C2" />
	 * </fieldset></form>
	 *
	 * var v = $(':text').fieldValue();
	 * // if no values are entered into the text inputs
	 * v == ['','']
	 * // if values entered into the text inputs are 'foo' and 'bar'
	 * v == ['foo','bar']
	 *
	 * var v = $(':checkbox').fieldValue();
	 * // if neither checkbox is checked
	 * v === undefined
	 * // if both checkboxes are checked
	 * v == ['B1', 'B2']
	 *
	 * var v = $(':radio').fieldValue();
	 * // if neither radio is checked
	 * v === undefined
	 * // if first radio is checked
	 * v == ['C1']
	 *
	 * The successful argument controls whether or not the field element must be 'successful'
	 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
	 * The default value of the successful argument is true. If this value is false the value(s)
	 * for each element is returned.
	 *
	 * Note: This method *always* returns an array. If no valid value can be determined the
	 * array will be empty, otherwise it will contain one or more values.
	 */
	$.fn.fieldValue = function (successful) {
		for (var val = [], i = 0, max = this.length; i < max; i++) {
			var el = this[i];
			var v = $.fieldValue(el, successful);
			if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length))
				continue;
			v.constructor == Array ? $.merge(val, v) : val.push(v);
		}
		return val;
	};

	/**
	 * Returns the value of the field element.
	 */
	$.fieldValue = function (el, successful) {
		var n = el.name,
			t = el.type,
			tag = el.tagName.toLowerCase();
		if (typeof successful == 'undefined') successful = true;

		if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
				(t == 'checkbox' || t == 'radio') && !el.checked ||
				(t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
				tag == 'select' && el.selectedIndex == -1))
			return null;

		if (tag == 'select') {
			var index = el.selectedIndex;
			if (index < 0) return null;
			var a = [],
				ops = el.options;
			var one = (t == 'select-one');
			var max = (one ? index + 1 : ops.length);
			for (var i = (one ? index : 0); i < max; i++) {
				var op = ops[i];
				if (op.selected) {
					var v = op.value;
					if (!v) // extra pain for IE...
						v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
					if (one) return v;
					a.push(v);
				}
			}
			return a;
		}
		return el.value;
	};

	/**
	 * Clears the form data. Takes the following actions on the form's input fields:
	 * - input text fields will have their 'value' property set to the empty string
	 * - select elements will have their 'selectedIndex' property set to -1
	 * - checkbox and radio inputs will have their 'checked' property set to false
	 * - inputs of type submit, button, reset, and hidden will *not* be effected
	 * - button elements will *not* be effected
	 */
	$.fn.clearForm = function () {
		return this.each(function () {
			$('input,select,textarea', this).clearFields();
		});
	};

	/**
	 * Clears the selected form elements.
	 */
	$.fn.clearFields = $.fn.clearInputs = function () {
		return this.each(function () {
			var t = this.type,
				tag = this.tagName.toLowerCase();
			if (t == 'text' || t == 'password' || tag == 'textarea')
				this.value = '';
			else if (t == 'checkbox' || t == 'radio')
				this.checked = false;
			else if (tag == 'select')
				this.selectedIndex = -1;
		});
	};

	/**
	 * Resets the form data. Causes all form elements to be reset to their original value.
	 */
	$.fn.resetForm = function () {
		return this.each(function () {
			// guard against an input with the name of 'reset'
			// note that IE reports the reset function as an 'object'
			if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType))
				this.reset();
		});
	};

	/**
	 * Enables or disables any matching elements.
	 */
	$.fn.enable = function (b) {
		if (b == undefined) b = true;
		return this.each(function () {
			this.disabled = !b;
		});
	};

	/**
	 * Checks/unchecks any matching checkboxes or radio buttons and
	 * selects/deselects and matching option elements.
	 */
	$.fn.selected = function (select) {
		if (select == undefined) select = true;
		return this.each(function () {
			var t = this.type;
			if (t == 'checkbox' || t == 'radio')
				this.checked = select;
			else if (this.tagName.toLowerCase() == 'option') {
				var $sel = $(this).parent('select');
				if (select && $sel[0] && $sel[0].type == 'select-one') {
					// deselect all other options
					$sel.find('option').selected(false);
				}
				this.selected = select;
			}
		});
	};

	// helper fn for console logging
	// set $.fn.ajaxSubmit.debug to true to enable debug logging
	function log() {
		if ($.fn.ajaxSubmit.debug && window.console && window.console.log)
			window.console.log('[jquery.form] ' + Array.prototype.join.call(arguments, ''));
	};

})(jQuery);

jQuery.fn.popupwindow = function (p) {

	var profiles = p || {};

	return this.each(function (index) {
		var settings, parameters, mysettings, b, a;

		// for overrideing the default settings
		mysettings = (jQuery(this).attr("rel") || "").split(",");


		settings = {
			height: 600, // sets the height in pixels of the window.
			width: 600, // sets the width in pixels of the window.
			toolbar: 0, // determines whether a toolbar (includes the forward and back buttons) is displayed {1 (YES) or 0 (NO)}.
			scrollbars: 0, // determines whether scrollbars appear on the window {1 (YES) or 0 (NO)}.
			status: 0, // whether a status line appears at the bottom of the window {1 (YES) or 0 (NO)}.
			resizable: 1, // whether the window can be resized {1 (YES) or 0 (NO)}. Can also be overloaded using resizable.
			left: 0, // left position when the window appears.
			top: 0, // top position when the window appears.
			center: 0, // should we center the window? {1 (YES) or 0 (NO)}. overrides top and left
			createnew: 1, // should we create a new window for each occurance {1 (YES) or 0 (NO)}.
			location: 0, // determines whether the address bar is displayed {1 (YES) or 0 (NO)}.
			menubar: 0 // determines whether the menu bar is displayed {1 (YES) or 0 (NO)}.
		};

		// if mysettings length is 1 and not a value pair then assume it is a profile declaration
		// and see if the profile settings exists

		if (mysettings.length == 1 && mysettings[0].split(":").length == 1) {
			a = mysettings[0];
			// see if a profile has been defined
			if (typeof profiles[a] != "undefined") {
				settings = jQuery.extend(settings, profiles[a]);
			}
		} else {
			// overrides the settings with parameter passed in using the rel tag.
			for (var i = 0; i < mysettings.length; i++) {
				b = mysettings[i].split(":");
				if (typeof settings[b[0]] != "undefined" && b.length == 2) {
					settings[b[0]] = b[1];
				}
			}
		}

		// center the window
		if (settings.center == 1) {
			settings.top = (screen.height - (settings.height + 110)) / 2;
			settings.left = (screen.width - settings.width) / 2;
		}

		parameters = "location=" + settings.location + ",menubar=" + settings.menubar + ",height=" + settings.height + ",width=" + settings.width + ",toolbar=" + settings.toolbar + ",scrollbars=" + settings.scrollbars + ",status=" + settings.status + ",resizable=" + settings.resizable + ",left=" + settings.left + ",screenX=" + settings.left + ",top=" + settings.top + ",screenY=" + settings.top;

		jQuery(this).bind("click", function () {
			var name = settings.createnew ? "PopUpWindow" + index : "PopUpWindow";
			window.open(this.href, name, parameters).focus();
			return false;
		});
	});

};




var data = "0123456789";

//set to 1 if not decrypting, set to 0 if decrypting
var done = 1;



function statusIn(text) {
	decrypt(text, 2, 1);
}

function statusOut() {
	self.status = '';
	done = 1;
}

//-------------------------\\
//decrypt(string, int, int)\\
//-------------------------\\
//
//text(string): the text to be decrypted on 
//the status bar.
//

//max(int): the number of times a random string
//is displayed before the next character is
//'decrypted'.
//
//delay(int): the number of milliseconds between
//each display of a random string
//
//Example:
//decrypt('Enter my site.',10,10);
//
//text = 'Enter my site.' :: 'Enter my site.' is 
//eventually decrypted
//
//max = 10 :: a different random string is dis-
//played 10 times before a new character is
//decrypted

function decrypt(text, max, delay) {
	if (done) {
		done = 0;
		decrypt_helper(text, max, delay, 0, max);
	}

}

function decrypt_helper(text, runs_left, delay, charvar, max) {
	if (!done) {
		runs_left = runs_left - 1;
		var status = text.substring(0, charvar);
		for (var current_char = charvar; current_char < text.length; current_char++) {
			status += data.charAt(Math.round(Math.random() * data.length));
		}
		window.status = status;
		var rerun = "decrypt_helper('" + text + "'," + runs_left + "," + delay + "," + charvar + "," + max + ");"
		var new_char = charvar + 1;
		var next_char = "decrypt_helper('" + text + "'," + max + "," + delay + "," + new_char + "," + max + ");"
		if (runs_left > 0) {
			setTimeout(rerun, delay);
		} else {
			if (charvar < text.length) {
				setTimeout(next_char, Math.round(delay * (charvar + 3) / (charvar + 1)));
			} else {
				done = 1;
			}
		}
	}
}


/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
eval(function (p, a, c, k, e, d) {
		e = function (c) {
			return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
		};
		if (!''.replace(/^/, String)) {
			while (c--) {
				d[e(c)] = k[c] || e(c)
			}
			k = [function (e) {
				return d[e]
			}];
			e = function () {
				return '\\w+'
			};
			c = 1
		};
		while (c--) {
			if (k[c]) {
				p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
			}
		}
		return p
	}('o.5=B(9,b,2){6(h b!=\'E\'){2=2||{};6(b===n){b=\'\';2.3=-1}4 3=\'\';6(2.3&&(h 2.3==\'j\'||2.3.k)){4 7;6(h 2.3==\'j\'){7=w u();7.t(7.q()+(2.3*r*l*l*x))}m{7=2.3}3=\'; 3=\'+7.k()}4 8=2.8?\'; 8=\'+(2.8):\'\';4 a=2.a?\'; a=\'+(2.a):\'\';4 c=2.c?\'; c\':\'\';d.5=[9,\'=\',C(b),3,8,a,c].y(\'\')}m{4 e=n;6(d.5&&d.5!=\'\'){4 g=d.5.A(\';\');s(4 i=0;i<g.f;i++){4 5=o.z(g[i]);6(5.p(0,9.f+1)==(9+\'=\')){e=D(5.p(9.f+1));v}}}F e}};', 42, 42, '||options|expires|var|cookie|if|date|path|name|domain|value|secure|document|cookieValue|length|cookies|typeof||number|toUTCString|60|else|null|jQuery|substring|getTime|24|for|setTime|Date|break|new|1000|join|trim|split|function|encodeURIComponent|decodeURIComponent|undefined|return'.split('|'), 0, {}))
	/*

	highlight v3

	Highlights arbitrary terms.

	<http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html>

	MIT license.

	Johann Burkard
	<http://johannburkard.de>
	<mailto:jb@eaio.com>

	*/

jQuery.fn.highlight = function (pat) {
	function innerHighlight(node, pat) {
		var skip = 0;
		if (node.nodeType == 3) {
			var pos = node.data.toUpperCase().indexOf(pat);
			if (pos >= 0) {
				var spannode = document.createElement('span');
				spannode.className = 'highlight';
				var middlebit = node.splitText(pos);
				var endbit = middlebit.splitText(pat.length);
				var middleclone = middlebit.cloneNode(true);
				spannode.appendChild(middleclone);
				middlebit.parentNode.replaceChild(spannode, middlebit);
				skip = 1;
			}
		} else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
			for (var i = 0; i < node.childNodes.length; ++i) {
				i += innerHighlight(node.childNodes[i], pat);
			}
		}
		return skip;
	}
	return this.each(function () {
		innerHighlight(this, pat.toUpperCase());
	});
};

jQuery.fn.removeHighlight = function () {
	return this.find("span.highlight").each(function () {
		this.parentNode.firstChild.nodeName;
		with(this.parentNode) {
			replaceChild(this.firstChild, this);
			normalize();
		}
	}).end();
};

function mastercms_confirmation_box(url_params, width_value, height_value, closeBtnValue, title_holder_value, title_value, txt_holder, txtData) {
	$.fancybox.open({
		href: url_params + '&randTime=' + genTime(),
		modal: closeBtnValue,
		type: 'ajax',
		autoSize: true,
		fitToView: true,
		padding: 0,
		autoWidth: true,
		autoHeight: true,
		autoResize: true,
		//width			: 	width_value,
		//height			: 	height_value,
		beforeShow: function () {
			$(title_holder_value).html(title_value);
			$(txt_holder).html(txtData);
			$(txt_holder).val(txtData);
		},
		afterClose: function () {

		}
	});
	return false;
}

function alert_new_content_for_live_article() {
	var api_widgets_live_update = $('.__MB_LIVE_AUTO_LOAD').size();
	var api_widgets_live_update_url = $('.__MB_LIVE_AUTO_LOAD').attr('data-url');
	var api_widgets_live_update_size = $('.__MB_LIVE_AUTO_LOAD').attr('data-size');
	var api_widgets_live_auto_load = $('.__MB_LIVE_AUTO_LOAD').attr('auto-load');
	if (api_widgets_live_update != 0) {

		$('#__MB_LIVE_AUTO_LOAD_FOR_CONTENT').load(api_widgets_live_update_url + '&type=1&data-size=' + api_widgets_live_update_size + '&randTime=' + genTime(), '', function () {
			$('.__MB_LIVE_UPDATE_ALERT').hide();
			api_widgets_video_embed();
			api_widgets_slideshow_embed();
			api_widgets_autoLoad();
		});
	}
}

function api_widgets_live_update() {
	var t = setTimeout("api_widgets_live_update()", 15000);
	var api_widgets_live_update = $('.__MB_LIVE_AUTO_LOAD').size();
	var api_widgets_live_update_url = $('.__MB_LIVE_AUTO_LOAD').attr('data-url');
	var api_widgets_live_update_size = $('.__MB_LIVE_AUTO_LOAD').attr('data-size');
	var api_widgets_live_auto_load = $('.__MB_LIVE_AUTO_LOAD').attr('auto-load');
	if (api_widgets_live_update != 0 && api_widgets_live_auto_load == 1) {
		$.getJSON(api_widgets_live_update_url + '&data-size=' + api_widgets_live_update_size + '&randTime=' + genTime(), function (data) {
			if (data.status == 0) {
				$('.__MB_LIVE_UPDATE_ALERT').show();
				//$('.__MB_LIVE_AUTO_LOAD').attr('data-size',data.filesize);
				$('.__MB_LIVE_UPDATE_ALERT').attr('dataurllive', data.dataurllive);

			} else {
				$('.__MB_LIVE_UPDATE_ALERT').hide();
			}
		});
	} else {
		$('.__MB_LIVE_UPDATE_ALERT').remove();
	}
}

function api_widgets_video_embed() {
	var widget_video_article = $('.___widget_video_article').size();
	if (widget_video_article != 0) {
		$('.___widget_video_article').each(function () {
			var checkDataLoaded = $(this).html();
			if (checkDataLoaded === '') {
				var video_streaming_id = $(this).attr('item-id');
				if (video_streaming_id !== '') {
					var video_streaming_url = $(this).attr('data-url');
					$(this).load(video_streaming_url + 'apiservice@/article_player&play_now=yes&i=' + video_streaming_id, '', function () {});
				}
			}

		});
	}
}

function api_widgets_slideshow_embed() {
	var ___widget_slideshow_article = $('.___widget_slideshow_article').size();
	if (___widget_slideshow_article != 0) {
		$('.___widget_slideshow_article').each(function () {
			var checkDataLoaded = $(this).html();
			if (checkDataLoaded === '') {
				var slideshow_embed_url = $(this).attr('data-url');
				$(this).load(slideshow_embed_url, '', function () {});
			}

		});
	}
}

function api_widgets_vote_embed() {
	var ___widget_vote_article = $('.___widget_vote_article').size();
	if (___widget_vote_article != 0) {
		$('.___widget_vote_article').each(function () {
			var checkDataLoaded = $(this).html();
			if (checkDataLoaded === '') {
				var vote_embed_url = $(this).attr('data-url');
				$(this).load(vote_embed_url, '', function () {});
			}

		});
	}
}

function api_widgets_autoLoadAPIComment() {
	var checkValidApiWidgets = $('.__API_WIDGET_CM').size();
	if (checkValidApiWidgets > 0) {
		$('.__API_WIDGET_CM').each(function () {
			var checkDataLoaded = $(this).html();

			var widget_data_url = $(this).attr('data-url');
			var widget_data_type = $(this).attr('data-type');
			var set_data_url_meta = '';
			if (widget_data_url !== '') {
				$(this).load(widget_data_url + set_data_url_meta + '&randTime=' + genTime(), '', function () {});
			}


		});
	}
}

function api_widgets_autoLoad() {
	var checkValidApiWidgets = $('.__API_WIDGET').size();
	var checkValidApiParamsWidgets = $('input[name="__PARAMS_ID_WIDGET"]').size();
	if (checkValidApiWidgets > 0) {
		var setValidApiParamsWidgets = '';
		if (checkValidApiParamsWidgets > 0) {
			$('input[name="__PARAMS_ID_WIDGET"]').each(function (index, element) {
				setValidApiParamsWidgets = '&params[' + $(this).attr('data-type') + ']=' + $(this).val();
			});
		}
		$('.__API_WIDGET').each(function () {
			var checkDataLoaded = $(this).html();
			if (checkDataLoaded === '') {
				var widget_data_url = $(this).attr('data-url');
				var widget_data_type = $(this).attr('data-type');
				var set_data_url_meta = '';
				if (widget_data_type != undefined) {
					if (widget_data_type == 'weather_widget') {
						var getcityremember = $.cookie('__weather_remember');
						if (getcityremember != undefined && getcityremember != null) {
							set_data_url_meta = '&key_index=' + getcityremember;
						}
					}
				}
				if (widget_data_url !== '') {
					$(this).load(widget_data_url + set_data_url_meta + setValidApiParamsWidgets + '&randTime=' + genTime(), '', function () {});
				}
			}

		});
	}
}

function api_widgets_autoLoadPage() {
	var checkInfiniteWidget = $('.__MB_INFINITE_ITEM_WIDGET').size();
	if (checkInfiniteWidget > 0) {
		var infinite = new Waypoint.Infinite({
			element: $('.infinite-container')[0],
			onBeforePageLoad: function () {

			},
			onAfterPageLoad: function () {
				api_widgets_video_embed();
				api_widgets_autoLoad();
				api_widgets_vote_embed();
				api_widgets_autoLoadAPIComment();
				push_detail_url();
				saveClickVideoHtml5();
				api_widgets_slideshow_embed();
			}
		});
	}
}

/*----------------------- MASTER CMS JS--------------------------------*/
$(document).ready(function () {

	alert_new_content_for_live_article();

	api_widgets_live_update();

	api_widgets_video_embed();

	api_widgets_autoLoad();

	api_widgets_vote_embed();

	api_widgets_autoLoadPage();
	push_detail_url();

	saveClickVideoHtml5();

	api_widgets_slideshow_embed();

	// BO SUNG CONG CU TINH TRUY CAP VIDEO YOUTUBE EMBED		
	var checkHaveEmbedVideo = $('.__MB_YOUTUBE_VIDEO_EMBED').size();
	if (checkHaveEmbedVideo > 0) {
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/player_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}

	$('.__MB_LIVE_UPDATE_ALERT').click(function () {
		var getUrl = $(this).attr('dataurllive');
		if (getUrl != undefined && getUrl !== '') {
			$.getJSON(getUrl + '&randTime=' + genTime(), function (data) {
				if (data.status == 0) {
					if (data.status !== '') {
						$('.__MB_LIVE_UPDATE_ALERT').hide();
						$('.__MB_LIVE_AUTO_LOAD').attr('data-size', data.filesize);
						//$('.detail_info,.__MASTERCMS_CONTENTS_INFO').html(data.datalive);									
					}
					api_widgets_video_embed();
					api_widgets_slideshow_embed();
					api_widgets_autoLoad();
				} else {
					//$('.__MB_LIVE_UPDATE_ALERT').hide();
				}
			});
		}

		alert_new_content_for_live_article();

	});

});



function saveClickVideoHtml5() {
	//THONG KE LUOT XEM VIDEO FILE
	$(".__MB_VIDEO_JS_STATS").bind("play", function () {
		var getVideoId = $(this).attr('video-id');
		$.getJSON($(this).attr('data-save') + "&vid=" + getVideoId, function (data) {});
		//alert(getVideoId);
	});
}


var player;

function onYouTubePlayerAPIReady() {
	player = new YT.Player('youtubeplayer', {
		events: {
			'onStateChange': function (event) {
				if (event.data == YT.PlayerState.PLAYING) {
					saveClickVideo($('.__MB_VIDEO_JS_STATS').attr('data-save'));
				}
			}
		}

	});
}

function saveClickVideo(save_url_act) {
	var getVideoId = $('.__MB_YOUTUBE_VIDEO_EMBED').attr('video-id');
	$.getJSON(save_url_act + "&vid=" + getVideoId, function (data) {

	});
}



function push_detail_url() {
	var checkPushURLElement = $('.mastercms-data-scroll').size();
	if (checkPushURLElement > 0) {
		var discreteElements = document.getElementsByClassName('mastercms-data-scroll')
		for (var i = 0; i < discreteElements.length; i++) {
			new Waypoint({
				element: discreteElements[i],
				handler: function () {
					History.pushState(null, this.element.innerHTML, this.element.getAttribute('mastercms-data-href-scroll'));
					//alert(this.element.getAttribute('mastercms-data-href-scroll') + ' hit')
				},
				continuous: false
			})
		}

	}


}

function paging_mastercms(clonePaging) {
	$('.__MB_PAGING').each(function (index, element) {
		var getLink = $(this).find('a');
		var getDeactiveLink = $(this).find('span');
		//if (getDeactiveLink.hasClass('current')==true){
		getDeactiveLink.addClass('ui-button ui-widget ui-state-active ui-corner-all').css({
			'padding': '5'
		});
		//}else{
		getLink.addClass('ui-button ui-widget ui-state-default ui-corner-all').css({
			'padding': '5'
		});
		//}

	});
	if (clonePaging != undefined && clonePaging == 1) {
		$(".__MB_PAGING_TOP").html('');
		$(".__MB_PAGING").clone().prependTo(".__MB_PAGING_TOP");
	}
}

function submit_comments_social_form(__this, __form, __type) {
	var getParamValue = '';
	var thisButton = $(__this);
	if ($(thisButton).attr('href') !== 'javascript:;') {
		$('input[name="__PARAMS_ID_WIDGET"]').each(function (index, element) {
			getParamValue = '&params[' + $(this).attr('data-type') + ']=' + $(this).val();
		});


		var __historySocialActivities = $.cookie('__historySocialActivities');
		$(__form).ajaxSubmit({
			url: $(thisButton).attr('href') + getParamValue + '&randTime=' + genTime(),
			type: 'POST',
			dataType: 'json',
			success: function (data) {
				if (data.status == 1) {

				} else {
					var getCurrSize = $(__this).find('span').text();
					var setCountSize = '';
					if (getCurrSize !== '') {
						setCountSize = parseInt(getCurrSize) + 1;
					} else {
						setCountSize = 1;
					}
					$(__this).find('span').text(setCountSize);
					var set__historySocialActivities = '';
					if (__historySocialActivities != null) {
						set__historySocialActivities = __historySocialActivities + ',' + data.icm + ':' + __type;
					} else {
						set__historySocialActivities = data.icm + ':' + __type;
					}
					if (set__historySocialActivities !== '') {
						$.cookie('__historySocialActivities', set__historySocialActivities, {
							expires: 365,
							path: '/'
						});
					} else {
						$.cookie('__historySocialActivities', null, {
							expires: 365,
							path: '/'
						});
					}

					$(this).addClass('ui-state-disabled').attr('href', 'javascript:;');
					check_socialitem();
				}
			}
		});

	}
}

function check_socialitem() {
	var __historySocialActivities = $.cookie('__historySocialActivities');
	//
	if (__historySocialActivities != null) {
		var arrSocialItem = __historySocialActivities.split(",");
		for (var i in arrSocialItem) {
			var arrSocialItemType = arrSocialItem[i].split(":");
			if (arrSocialItemType[1] == 1) {
				$('a.__SOCIAL_ITEM[data-item="' + arrSocialItemType[0] + '"][data-type="1"]').addClass('ui-state-disabled').attr('href', 'javascript:;');
			}
			if (arrSocialItemType[1] == 2) {
				$('a.__SOCIAL_ITEM[data-item="' + arrSocialItemType[0] + '"][data-type="2"]').addClass('ui-state-disabled').attr('href', 'javascript:;');
			}
		}
	}
}

function submit_comments_form(__this, __form, __msg_element, __calBackFunction) {
	var thisButton = $(__this);
	$(thisButton).button({
		label: "Đang cập nhật..."
	});
	$(thisButton).button("disable");

	$(__form).attr('disabled', true).addClass('ui-state-disabled');
	$(__form).ajaxSubmit({
		url: $(thisButton).attr('href') + '&randTime=' + genTime(),
		type: 'POST',
		dataType: 'json',
		success: function (data) {
			if (data.status == 1) {
				//$('form.__MB_ARTICLE_COMMENTS_FORM_'+getThisCommnet+' .msgText').html(data.message);																		
				$(thisButton).button({
					label: 'Gửi ý kiến'
				});
			} else {
				//$('.thank_you_'+getThisCommnet).show('highlight','',500,'');																							
				$(thisButton).button({
					label: 'Đã gửi thành công!'
				});
				$('textarea[name="__comment"]').val('');
				if (typeof __calBackFunction == 'function') {
					__calBackFunction();
				} else {
					location.reload();
				}
			}
			if (__msg_element != undefined) {
				$(__msg_element).html(data.message);
			}
			$(thisButton).button("enable");
			$(__form).attr('disabled', false).removeClass('ui-state-disabled');
		}
	});

}

function doFollowArticle(__href, __form) {
	$('.__ARTICLE_FOLLOW').click(function () {
		$(this).attr('disabled', true).addClass('ui-state-disabled');
		var getMemberIdentify = $('meta[name="member_identity"]').attr('content');
		var __historyDofollowArticle = $.cookie('__historyDofollowArticle' + getMemberIdentify);
		var getDataItem = $(this).attr('item-data');
		var followed = $(this).attr('followed');
		var __this = $(this);
		$(__form).ajaxSubmit({
			url: __href + '&i=' + getDataItem + '&followed=' + followed + '&modu=followarticle&remember_url=' + window.location.href,
			type: 'POST',
			dataType: 'json',
			success: function (data) {
				if (data.status == 1) {
					if (data.forward_page != '1' && data.forward_page != undefined) {
						window.location = data.forward_page + '&verifying=1';
					}
				}
				if (data.status == 2) {
					remove_dofollowitem(data.i);
					$('span[item-data="' + data.i + '"]').removeClass('ui-icon-check').addClass('ui-icon-star');
					$('a[item-data="' + data.i + '"]').attr('followed', 0);
				}
				if (data.status == 0) {
					var setRememberFollow = '';
					if (__historyDofollowArticle != null) {
						setRememberFollow = data.i + ',' + __historyDofollowArticle;
					} else {
						setRememberFollow = data.i;
					}
					$.cookie('__historyDofollowArticle' + getMemberIdentify, setRememberFollow, {
						expires: 365,
						path: '/'
					});
					$(__this).find('span').removeClass('ui-icon-star').addClass('ui-icon-check');
					$(this).attr('disabled', false).removeClass('ui-state-disabled');
					check_dofollowitem();
				}
				return false;
			}
		});
		return false;
	});

	check_dofollowitem();
}

function remove_dofollowitem(__item) {
	var getMemberIdentify = $('meta[name="member_identity"]').attr('content');
	if (getMemberIdentify == undefined) getMemberIdentify = '';
	var __historyDofollowArticle = $.cookie('__historyDofollowArticle' + getMemberIdentify);
	if (__historyDofollowArticle != null) {
		var setRememberFollow = '';
		var arrFollowItem = __historyDofollowArticle.split(",");
		for (var i in arrFollowItem) {
			if (arrFollowItem[i] == __item) continue;
			setRememberFollow = arrFollowItem[i] + ',' + setRememberFollow;
		}
		if (setRememberFollow !== '') {
			$.cookie('__historyDofollowArticle' + getMemberIdentify, setRememberFollow, {
				expires: 365,
				path: '/'
			});
		} else {
			$.cookie('__historyDofollowArticle' + getMemberIdentify, null, {
				expires: 365,
				path: '/'
			});
		}
	}
	check_dofollowitem();
}

function check_dofollowitem() {
	var getMemberIdentify = $('meta[name="member_identity"]').attr('content');
	if (getMemberIdentify == undefined) getMemberIdentify = '';
	var __historyDofollowArticle = $.cookie('__historyDofollowArticle' + getMemberIdentify);
	if (__historyDofollowArticle != null) {
		var arrFollowItem = __historyDofollowArticle.split(",");
		for (var i in arrFollowItem) {
			$('span[item-data="' + arrFollowItem[i] + '"]').removeClass('ui-icon-star').addClass('ui-icon-check');
			$('a[item-data="' + arrFollowItem[i] + '"]').attr('followed', 1);
		}
	}
}

function doFriends(__href, __form) {
	//$.cookie('__historyMakeFriend', null,{ expires: 365, path: '/'});
	$('.__MAKE_FRIEND').click(function () {
		$(this).attr('disabled', true).addClass('ui-state-disabled');
		if ($(this).attr('friended') == 1) return false;
		var __historyMakeFriend = $.cookie('__historyMakeFriend');
		var getDataItem = $(this).attr('item-data');
		var __this = $(this);
		$(__form).ajaxSubmit({
			url: __href + '&i=' + getDataItem,
			type: 'POST',
			dataType: 'json',
			success: function (data) {
				if (data.status == 1) {
					if (data.forward_page != '1' && data.forward_page != undefined) {
						window.location = data.forward_page + '&verifying=1';
					}
				}
				if (data.status == 0) {
					var setRememberFriend = '';
					if (__historyMakeFriend != null) {
						setRememberFriend = data.i + ',' + __historyMakeFriend;
					} else {
						setRememberFriend = data.i;
					}
					$.cookie('__historyMakeFriend', setRememberFriend, {
						expires: 365,
						path: '/'
					});
					$(__this).find('span').removeClass('ui-icon-transferthick-e-w').addClass('ui-icon-check');
					$(this).attr('disabled', false).removeClass('ui-state-disabled');
					//check_dofrienditem();					
				}
				return false;
			}
		});
		return false;
	});

	check_dofrienditem();
}

function check_dofrienditem() {
	var __historyMakeFriend = $.cookie('__historyMakeFriend');
	if (__historyMakeFriend != null) {
		var arrFriendItem = __historyMakeFriend.split(",");
		for (var i in arrFriendItem) {
			$('a[item-data="' + arrFriendItem[i] + '"] span').removeClass('ui-icon-transferthick-e-w').addClass('ui-icon-check');
			$('a[item-data="' + arrFriendItem[i] + '"]').addClass('ui-state-disabled').attr('friended', 1);
		}
	}
}

function genTime() {
	var d = new Date();
	var c_hour = d.getHours();
	var c_min = d.getMinutes();
	var c_sec = d.getSeconds();
	var m_sec = d.getMilliseconds();
	var t = c_hour + 1 + c_min + 2 + c_sec + 3 + m_sec;
	var randomnumber = new Date().getTime();
	return randomnumber;
}

function mastercms_message_box(type, txtHeader, txtMsg) {
	var msgHTML = '';
	if (type != undefined) {
		switch (type) {
			case 'info':
				msgHTML = '<div class="ui-widget"><div style="margin-top: 5px; padding: 5px;" class="ui-state-highlight ui-corner-all"><div style="padding: 5px;" ><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-info"></span><strong>' + txtHeader + '</strong> ' + txtMsg + '</div></div></div>';
				break;
			case 'error':
				msgHTML = '<div class="ui-widget"><div style="margin-top: 5px; padding: 5px;" class="ui-state-error ui-corner-all"><div style="padding: 5px;" ><span style="float: left; margin-right: .3em;" class="ui-icon ui-icon-alert"></span><strong>' + txtHeader + '</strong> ' + txtMsg + '</div></div></div>';
				break;
		}
	}
	return msgHTML;
}

function widgetsFloatCheck() {
	var ___widget_float_check = $('div[name=___widget_float]').length;
	if (___widget_float_check != 0) {
		var place_holder_id = '';
		$('div[name=___widget_float]').each(function (index, value) {
			place_holder_id = $(this).attr('id');
			var place_holder_url = $(this).attr('lang');
			if (place_holder_id != '') {
				var placeHolderPlus = '&pl=' + place_holder_id;
			}
			$(this).load(place_holder_url + placeHolderPlus, '', function () {
				//if (index==0){

				//}	
			});
		});

	}
}

function enter_search_q(e) {
	var key;
	if (window.event)
		key = window.event.keyCode; //IE
	else
		key = e.which; //firefox     

	if (key == 13) {
		var act = $('form[name=frmSearch]').attr('class');
		var q = $('input[name=q]').val();
		if (q == '') {
			return false
		}
		document.location = act + '&q=' + encodeURIComponent(q);
		//document.frmSearch.submit();			
		return false
	}
}

function submit_search_q() {
	var act = $('form[name=frmSearch]').attr('class');
	var q = $('input[name=q]').val();
	if (q == '') {
		return false
	}
	document.location = act + '&q=' + encodeURIComponent(q);
	//document.frmSearch.submit();	
	return false;
}

// jquery.event.move
//
// 1.3.6
//
// Stephen Band
//
// Triggers 'movestart', 'move' and 'moveend' events after
// mousemoves following a mousedown cross a distance threshold,
// similar to the native 'dragstart', 'drag' and 'dragend' events.
// Move events are throttled to animation frames. Move event objects
// have the properties:
//
// pageX:
// pageY:   Page coordinates of pointer.
// startX:
// startY:  Page coordinates of pointer at movestart.
// distX:
// distY:  Distance the pointer has moved since movestart.
// deltaX:
// deltaY:  Distance the finger has moved since last event.
// velocityX:
// velocityY:  Average velocity over last few events.

! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a, b) {
	function k(a) {
		function e(a) {
			c ? (b(), g(e), d = !0, c = !1) : d = !1
		}
		var b = a,
			c = !1,
			d = !1;
		this.kick = function (a) {
			c = !0, d || e()
		}, this.end = function (a) {
			var e = b;
			a && (d ? (b = c ? function () {
				e(), a()
			} : a, c = !0) : a())
		}
	}

	function l() {
		return !0
	}

	function m() {
		return !1
	}

	function n(a) {
		a.preventDefault()
	}

	function o(a) {
		h[a.target.tagName.toLowerCase()] || a.preventDefault()
	}

	function p(a) {
		return 1 === a.which && !a.ctrlKey && !a.altKey
	}

	function q(a, b) {
		var c, d;
		if (a.identifiedTouch) return a.identifiedTouch(b);
		for (c = -1, d = a.length; ++c < d;)
			if (a[c].identifier === b) return a[c]
	}

	function r(a, b) {
		var c = q(a.changedTouches, b.identifier);
		if (c && (c.pageX !== b.pageX || c.pageY !== b.pageY)) return c
	}

	function s(a) {
		var b;
		p(a) && (b = {
			target: a.target,
			startX: a.pageX,
			startY: a.pageY,
			timeStamp: a.timeStamp
		}, d(document, i.move, t, b), d(document, i.cancel, u, b))
	}

	function t(a) {
		var b = a.data;
		A(a, b, a, v)
	}

	function u(a) {
		v()
	}

	function v() {
		e(document, i.move, t), e(document, i.cancel, u)
	}

	function w(a) {
		var b, c;
		h[a.target.tagName.toLowerCase()] || (b = a.changedTouches[0], c = {
			target: b.target,
			startX: b.pageX,
			startY: b.pageY,
			timeStamp: a.timeStamp,
			identifier: b.identifier
		}, d(document, j.move + "." + b.identifier, x, c), d(document, j.cancel + "." + b.identifier, y, c))
	}

	function x(a) {
		var b = a.data,
			c = r(a, b);
		c && A(a, b, c, z)
	}

	function y(a) {
		var b = a.data,
			c = q(a.changedTouches, b.identifier);
		c && z(b.identifier)
	}

	function z(a) {
		e(document, "." + a, x), e(document, "." + a, y)
	}

	function A(a, b, d, e) {
		var f = d.pageX - b.startX,
			g = d.pageY - b.startY;
		f * f + g * g < c * c || D(a, b, d, f, g, e)
	}

	function B() {
		return this._handled = l, !1
	}

	function C(a) {
		a._handled()
	}

	function D(a, b, c, d, e, g) {
		var i, j;
		b.target;
		i = a.targetTouches, j = a.timeStamp - b.timeStamp, b.type = "movestart", b.distX = d, b.distY = e, b.deltaX = d, b.deltaY = e, b.pageX = c.pageX, b.pageY = c.pageY, b.velocityX = d / j, b.velocityY = e / j, b.targetTouches = i, b.finger = i ? i.length : 1, b._handled = B, b._preventTouchmoveDefault = function () {
			a.preventDefault()
		}, f(b.target, b), g(b.identifier)
	}

	function E(a) {
		var b = a.data.timer;
		a.data.touch = a, a.data.timeStamp = a.timeStamp, b.kick()
	}

	function F(a) {
		var b = a.data.event,
			c = a.data.timer;
		G(), L(b, c, function () {
			setTimeout(function () {
				e(b.target, "click", m)
			}, 0)
		})
	}

	function G(a) {
		e(document, i.move, E), e(document, i.end, F)
	}

	function H(a) {
		var b = a.data.event,
			c = a.data.timer,
			d = r(a, b);
		d && (a.preventDefault(), b.targetTouches = a.targetTouches, a.data.touch = d, a.data.timeStamp = a.timeStamp, c.kick())
	}

	function I(a) {
		var b = a.data.event,
			c = a.data.timer,
			d = q(a.changedTouches, b.identifier);
		d && (J(b), L(b, c))
	}

	function J(a) {
		e(document, "." + a.identifier, H), e(document, "." + a.identifier, I)
	}

	function K(a, b, c, d) {
		var e = c - a.timeStamp;
		a.type = "move", a.distX = b.pageX - a.startX, a.distY = b.pageY - a.startY, a.deltaX = b.pageX - a.pageX, a.deltaY = b.pageY - a.pageY, a.velocityX = .3 * a.velocityX + .7 * a.deltaX / e, a.velocityY = .3 * a.velocityY + .7 * a.deltaY / e, a.pageX = b.pageX, a.pageY = b.pageY
	}

	function L(a, b, c) {
		b.end(function () {
			return a.type = "moveend", f(a.target, a), c && c()
		})
	}

	function M(a, b, c) {
		return d(this, "movestart.move", C), !0
	}

	function N(a) {
		return e(this, "dragstart drag", n), e(this, "mousedown touchstart", o), e(this, "movestart", C), !0
	}

	function O(a) {
		"move" !== a.namespace && "moveend" !== a.namespace && (d(this, "dragstart." + a.guid + " drag." + a.guid, n, b, a.selector), d(this, "mousedown." + a.guid, o, b, a.selector))
	}

	function P(a) {
		"move" !== a.namespace && "moveend" !== a.namespace && (e(this, "dragstart." + a.guid + " drag." + a.guid), e(this, "mousedown." + a.guid))
	}
	var c = 6,
		d = a.event.add,
		e = a.event.remove,
		f = function (b, c, d) {
			a.event.trigger(c, d, b)
		},
		g = function () {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a, b) {
				return window.setTimeout(function () {
					a()
				}, 25)
			}
		}(),
		h = {
			textarea: !0,
			input: !0,
			select: !0,
			button: !0
		},
		i = {
			move: "mousemove",
			cancel: "mouseup dragstart",
			end: "mouseup"
		},
		j = {
			move: "touchmove",
			cancel: "touchend",
			end: "touchend"
		};
	a.event.special.movestart = {
		setup: M,
		teardown: N,
		add: O,
		remove: P,
		_default: function (a) {
			function g(b) {
				K(c, e.touch, e.timeStamp), f(a.target, c)
			}
			var c, e;
			a._handled() && (c = {
				target: a.target,
				startX: a.startX,
				startY: a.startY,
				pageX: a.pageX,
				pageY: a.pageY,
				distX: a.distX,
				distY: a.distY,
				deltaX: a.deltaX,
				deltaY: a.deltaY,
				velocityX: a.velocityX,
				velocityY: a.velocityY,
				timeStamp: a.timeStamp,
				identifier: a.identifier,
				targetTouches: a.targetTouches,
				finger: a.finger
			}, e = {
				event: c,
				timer: new k(g),
				touch: b,
				timeStamp: b
			}, a.identifier === b ? (d(a.target, "click", m), d(document, i.move, E, e), d(document, i.end, F, e)) : (a._preventTouchmoveDefault(), d(document, j.move + "." + a.identifier, H, e), d(document, j.end + "." + a.identifier, I, e)))
		}
	}, a.event.special.move = {
		setup: function () {
			d(this, "movestart.move", a.noop)
		},
		teardown: function () {
			e(this, "movestart.move", a.noop)
		}
	}, a.event.special.moveend = {
		setup: function () {
			d(this, "movestart.moveend", a.noop)
		},
		teardown: function () {
			e(this, "movestart.moveend", a.noop)
		}
	}, d(document, "mousedown.move", s), d(document, "touchstart.move", w), "function" == typeof Array.prototype.indexOf && ! function (a, b) {
		for (var c = ["changedTouches", "targetTouches"], d = c.length; d--;) a.event.props.indexOf(c[d]) === -1 && a.event.props.push(c[d])
	}(a)
});

! function (a) {
	a.fn.twentytwenty = function (b) {
		var b = a.extend({
			default_offset_pct: .5,
			orientation: "horizontal"
		}, b);
		return this.each(function () {
			var c = b.default_offset_pct,
				d = a(this),
				e = b.orientation,
				f = "vertical" === e ? "down" : "left",
				g = "vertical" === e ? "up" : "right";
			d.wrap("<div class='twentytwenty-wrapper twentytwenty-" + e + "'></div>"), d.append("<div class='twentytwenty-overlay'></div>");
			var h = d.find("img:first"),
				i = d.find("img:last");
			d.append("<div class='twentytwenty-handle'></div>");
			var j = d.find(".twentytwenty-handle");
			j.append("<span class='twentytwenty-" + f + "-arrow'></span>"), j.append("<span class='twentytwenty-" + g + "-arrow'></span>"), d.addClass("twentytwenty-container"), h.addClass("twentytwenty-before"), i.addClass("twentytwenty-after");
			var k = d.find(".twentytwenty-overlay");
			k.append("<div class='twentytwenty-before-label'></div>"), k.append("<div class='twentytwenty-after-label'></div>");
			var l = function (a) {
					var b = h.width(),
						c = h.height();
					return {
						w: b + "px",
						h: c + "px",
						cw: a * b + "px",
						ch: a * c + "px"
					}
				},
				m = function (a) {
					"vertical" === e ? h.css("clip", "rect(0," + a.w + "," + a.ch + ",0)") : h.css("clip", "rect(0," + a.cw + "," + a.h + ",0)"), d.css("height", a.h)
				},
				n = function (a) {
					var b = l(a);
					j.css("vertical" === e ? "top" : "left", "vertical" === e ? b.ch : b.cw), m(b)
				};
			a(window).on("resize.twentytwenty", function (a) {
				n(c)
			});
			var o = 0,
				p = 0,
				q = 0,
				r = 0;
			j.on("movestart", function (a) {
				(a.distX > a.distY && a.distX < -a.distY || a.distX < a.distY && a.distX > -a.distY) && "vertical" !== e ? a.preventDefault() : (a.distX < a.distY && a.distX < -a.distY || a.distX > a.distY && a.distX > -a.distY) && "vertical" === e && a.preventDefault(), d.addClass("active"), o = d.offset().left, p = d.offset().top, q = h.width(), r = h.height()
			}), j.on("moveend", function (a) {
				d.removeClass("active")
			}), j.on("move", function (a) {
				d.hasClass("active") && (c = "vertical" === e ? (a.pageY - p) / r : (a.pageX - o) / q, c < 0 && (c = 0), c > 1 && (c = 1), n(c))
			}), d.find("img").on("mousedown", function (a) {
				a.preventDefault()
			}), a(window).trigger("resize.twentytwenty")
		})
	}
}(jQuery);



/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function (r, G, f, v) {
	var J = f("html"),
		n = f(r),
		p = f(G),
		b = f.fancybox = function () {
			b.open.apply(this, arguments)
		},
		I = navigator.userAgent.match(/msie/i),
		B = null,
		s = G.createTouch !== v,
		t = function (a) {
			return a && a.hasOwnProperty && a instanceof f
		},
		q = function (a) {
			return a && "string" === f.type(a)
		},
		E = function (a) {
			return q(a) && 0 < a.indexOf("%")
		},
		l = function (a, d) {
			var e = parseInt(a, 10) || 0;
			d && E(a) && (e *= b.getViewport()[d] / 100);
			return Math.ceil(e)
		},
		w = function (a, b) {
			return l(a, b) + "px"
		};
	f.extend(b, {
		version: "2.1.5",
		defaults: {
			padding: 15,
			margin: 20,
			width: 800,
			height: 600,
			minWidth: 100,
			minHeight: 100,
			maxWidth: 9999,
			maxHeight: 9999,
			pixelRatio: 1,
			autoSize: !0,
			autoHeight: !1,
			autoWidth: !1,
			autoResize: !0,
			autoCenter: !s,
			fitToView: !0,
			aspectRatio: !1,
			topRatio: 0.5,
			leftRatio: 0.5,
			scrolling: "auto",
			wrapCSS: "",
			arrows: !0,
			closeBtn: !0,
			closeClick: !1,
			nextClick: !1,
			mouseWheel: !0,
			autoPlay: !1,
			playSpeed: 3E3,
			preload: 3,
			modal: !1,
			loop: !0,
			ajax: {
				dataType: "html",
				headers: {
					"X-fancyBox": !0
				}
			},
			iframe: {
				scrolling: "auto",
				preload: !0
			},
			swf: {
				wmode: "transparent",
				allowfullscreen: "true",
				allowscriptaccess: "always"
			},
			keys: {
				next: {
					13: "left",
					34: "up",
					39: "left",
					40: "up"
				},
				prev: {
					8: "right",
					33: "down",
					37: "right",
					38: "down"
				},
				close: [27],
				play: [32],
				toggle: [70]
			},
			direction: {
				next: "left",
				prev: "right"
			},
			scrollOutside: !0,
			index: 0,
			type: null,
			href: null,
			content: null,
			title: null,
			tpl: {
				wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image: '<img class="fancybox-image" src="{href}" alt="" />',
				iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
					(I ? ' allowtransparency="true"' : "") + "></iframe>",
				error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},
			openEffect: "fade",
			openSpeed: 250,
			openEasing: "swing",
			openOpacity: !0,
			openMethod: "zoomIn",
			closeEffect: "fade",
			closeSpeed: 250,
			closeEasing: "swing",
			closeOpacity: !0,
			closeMethod: "zoomOut",
			nextEffect: "elastic",
			nextSpeed: 250,
			nextEasing: "swing",
			nextMethod: "changeIn",
			prevEffect: "elastic",
			prevSpeed: 250,
			prevEasing: "swing",
			prevMethod: "changeOut",
			helpers: {
				overlay: !0,
				title: !0
			},
			onCancel: f.noop,
			beforeLoad: f.noop,
			afterLoad: f.noop,
			beforeShow: f.noop,
			afterShow: f.noop,
			beforeChange: f.noop,
			beforeClose: f.noop,
			afterClose: f.noop
		},
		group: {},
		opts: {},
		previous: null,
		coming: null,
		current: null,
		isActive: !1,
		isOpen: !1,
		isOpened: !1,
		wrap: null,
		skin: null,
		outer: null,
		inner: null,
		player: {
			timer: null,
			isActive: !1
		},
		ajaxLoad: null,
		imgPreload: null,
		transitions: {},
		helpers: {},
		open: function (a, d) {
			if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
				var k = {},
					g, h, j, m, l;
				"object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {
					href: c.data("fancybox-href") || c.attr("href"),
					title: c.data("fancybox-title") || c.attr("title"),
					isDom: !0,
					element: c
				}, f.metadata && f.extend(!0, k,
					c.metadata())) : k = c);
				g = d.href || k.href || (q(c) ? c : null);
				h = d.title !== v ? d.title : k.title || "";
				m = (j = d.content || k.content) ? "html" : d.type || k.type;
				!m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
				q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
				j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g &&
					k.isDom) && (m = "inline", j = c));
				f.extend(k, {
					href: g,
					type: m,
					content: j,
					title: h,
					selector: l
				});
				a[e] = k
			}), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
		},
		cancel: function () {
			var a = b.coming;
			a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current ||
				b._afterZoomOut(a))
		},
		close: function (a) {
			b.cancel();
			!1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
		},
		play: function (a) {
			var d = function () {
					clearTimeout(b.player.timer)
				},
				e = function () {
					d();
					b.current && b.player.isActive && (b.player.timer =
						setTimeout(b.next, b.current.playSpeed))
				},
				c = function () {
					d();
					p.unbind(".player");
					b.player.isActive = !1;
					b.trigger("onPlayEnd")
				};
			if (!0 === a || !b.player.isActive && !1 !== a) {
				if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, p.bind({
					"onCancel.player beforeClose.player": c,
					"onUpdate.player": e,
					"beforeLoad.player": d
				}), e(), b.trigger("onPlayStart")
			} else c()
		},
		next: function (a) {
			var d = b.current;
			d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
		},
		prev: function (a) {
			var d = b.current;
			d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
		},
		jumpto: function (a, d, e) {
			var c = b.current;
			c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a)))
		},
		reposition: function (a, d) {
			var e = b.current,
				c = e ? e.wrap : null,
				k;
			c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)))
		},
		update: function (a) {
			var d =
				a && a.type,
				e = !d || "orientationchange" === d;
			e && (clearTimeout(B), B = null);
			b.isOpen && !B && (B = setTimeout(function () {
				var c = b.current;
				c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null)
			}, e && !s ? 0 : 300))
		},
		toggle: function (a) {
			b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")),
				b.update())
		},
		hideLoading: function () {
			p.unbind(".loading");
			f("#fancybox-loading").remove()
		},
		showLoading: function () {
			var a, d;
			b.hideLoading();
			a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
			p.bind("keydown.loading", function (a) {
				if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel()
			});
			b.defaults.fixed || (d = b.getViewport(), a.css({
				position: "absolute",
				top: 0.5 * d.h + d.y,
				left: 0.5 * d.w + d.x
			}))
		},
		getViewport: function () {
			var a = b.current && b.current.locked || !1,
				d = {
					x: n.scrollLeft(),
					y: n.scrollTop()
				};
			a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());
			return d
		},
		unbindEvents: function () {
			b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
			p.unbind(".fb");
			n.unbind(".fb")
		},
		bindEvents: function () {
			var a = b.current,
				d;
			a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function (e) {
				var c = e.which || e.keyCode,
					k = e.target || e.srcElement;
				if (27 === c && b.coming) return !1;
				!e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function (d, k) {
					if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1;
					if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1
				})
			}), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, k, g) {
				for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) &&
					(h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
				if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
					if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");
					else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");
					d.preventDefault()
				}
			}))
		},
		trigger: function (a, d) {
			var e, c = d || b.coming || b.current;
			if (c) {
				f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
				if (!1 === e) return !1;
				c.helpers && f.each(c.helpers, function (d, e) {
					if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
				});
				p.trigger(a)
			}
		},
		isImage: function (a) {
			return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
		},
		isSWF: function (a) {
			return q(a) && a.match(/\.(swf)((\?|#).*)?$/i)
		},
		_start: function (a) {
			var d = {},
				e, c;
			a = l(a);
			e = b.group[a] || null;
			if (!e) return !1;
			d = f.extend(!0, {}, b.opts, e);
			e = d.margin;
			c = d.padding;
			"number" === f.type(e) && (d.margin = [e, e, e, e]);
			"number" === f.type(c) && (d.padding = [c, c, c, c]);
			d.modal && f.extend(!0, d, {
				closeBtn: !1,
				closeClick: !1,
				nextClick: !1,
				arrows: !1,
				mouseWheel: !1,
				keys: null,
				helpers: {
					overlay: {
						closeClick: !1
					}
				}
			});
			d.autoSize && (d.autoWidth = d.autoHeight = !0);
			"auto" === d.width && (d.autoWidth = !0);
			"auto" === d.height && (d.autoHeight = !0);
			d.group = b.group;
			d.index = a;
			b.coming = d;
			if (!1 === b.trigger("beforeLoad")) b.coming = null;
			else {
				c = d.type;
				e = d.href;
				if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
				b.isActive = !0;
				if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
				"image" === c && (d.aspectRatio = !0);
				"iframe" === c && s && (d.scrolling = "scroll");
				d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
				f.extend(d, {
					skin: f(".fancybox-skin", d.wrap),
					outer: f(".fancybox-outer", d.wrap),
					inner: f(".fancybox-inner", d.wrap)
				});
				f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
					d.skin.css("padding" + b, w(d.padding[a]))
				});
				b.trigger("onReady");
				if ("inline" === c || "html" === c) {
					if (!d.content || !d.content.length) return b._error("content")
				} else if (!e) return b._error("href");
				"image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
			}
		},
		_error: function (a) {
			f.extend(b.coming, {
				type: "html",
				autoWidth: !0,
				autoHeight: !0,
				minWidth: 0,
				minHeight: 0,
				scrolling: "no",
				hasError: a,
				content: b.coming.tpl.error
			});
			b._afterLoad()
		},
		_loadImage: function () {
			var a = b.imgPreload = new Image;
			a.onload = function () {
				this.onload = this.onerror = null;
				b.coming.width = this.width / b.opts.pixelRatio;
				b.coming.height = this.height / b.opts.pixelRatio;
				b._afterLoad()
			};
			a.onerror = function () {
				this.onload =
					this.onerror = null;
				b._error("image")
			};
			a.src = b.coming.href;
			!0 !== a.complete && b.showLoading()
		},
		_loadAjax: function () {
			var a = b.coming;
			b.showLoading();
			b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
				url: a.href,
				error: function (a, e) {
					b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
				},
				success: function (d, e) {
					"success" === e && (a.content = d, b._afterLoad())
				}
			}))
		},
		_loadIframe: function () {
			var a = b.coming,
				d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
			f(a.wrap).bind("onReset", function () {
				try {
					f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
				} catch (a) {}
			});
			a.iframe.preload && (b.showLoading(), d.one("load", function () {
				f(this).data("ready", 1);
				s || f(this).bind("load.fb", b.update);
				f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
				b._afterLoad()
			}));
			a.content = d.appendTo(a.inner);
			a.iframe.preload || b._afterLoad()
		},
		_preloadImages: function () {
			var a = b.group,
				d = b.current,
				e = a.length,
				c = d.preload ? Math.min(d.preload,
					e - 1) : 0,
				f, g;
			for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
		},
		_afterLoad: function () {
			var a = b.coming,
				d = b.current,
				e, c, k, g, h;
			b.hideLoading();
			if (a && !1 !== b.isActive)
				if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
				else {
					d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
					b.unbindEvents();
					e = a.content;
					c = a.type;
					k = a.scrolling;
					f.extend(b, {
						wrap: a.wrap,
						skin: a.skin,
						outer: a.outer,
						inner: a.inner,
						current: a,
						previous: d
					});
					g = a.href;
					switch (c) {
						case "inline":
						case "ajax":
						case "html":
							a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
								f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
							}));
							break;
						case "image":
							e = a.tpl.image.replace("{href}",
								g);
							break;
						case "swf":
							e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) {
								e += '<param name="' + a + '" value="' + b + '"></param>';
								h += " " + a + '="' + b + '"'
							}), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
					}(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
					b.trigger("beforeShow");
					a.inner.css("overflow", "yes" === k ? "scroll" :
						"no" === k ? "hidden" : k);
					b._setDimension();
					b.reposition();
					b.isOpen = !1;
					b.coming = null;
					b.bindEvents();
					if (b.isOpened) {
						if (d.prevMethod) b.transitions[d.prevMethod]()
					} else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
					b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
					b._preloadImages()
				}
		},
		_setDimension: function () {
			var a = b.getViewport(),
				d = 0,
				e = !1,
				c = !1,
				e = b.wrap,
				k = b.skin,
				g = b.inner,
				h = b.current,
				c = h.width,
				j = h.height,
				m = h.minWidth,
				u = h.minHeight,
				n = h.maxWidth,
				p = h.maxHeight,
				s = h.scrolling,
				q = h.scrollOutside ?
				h.scrollbarWidth : 0,
				x = h.margin,
				y = l(x[1] + x[3]),
				r = l(x[0] + x[2]),
				v, z, t, C, A, F, B, D, H;
			e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
			x = l(k.outerWidth(!0) - k.width());
			v = l(k.outerHeight(!0) - k.height());
			z = y + x;
			t = r + v;
			C = E(c) ? (a.w - z) * l(c) / 100 : c;
			A = E(j) ? (a.h - t) * l(j) / 100 : j;
			if ("iframe" === h.type) {
				if (H = h.content, h.autoHeight && 1 === H.data("ready")) try {
					H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0))
				} catch (G) {}
			} else if (h.autoWidth ||
				h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
			c = l(C);
			j = l(A);
			D = C / A;
			m = l(E(m) ? l(m, "w") - z : m);
			n = l(E(n) ? l(n, "w") - z : n);
			u = l(E(u) ? l(u, "h") - t : u);
			p = l(E(p) ? l(p, "h") - t : p);
			F = n;
			B = p;
			h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));
			z = a.w - y;
			r = a.h - r;
			h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight &&
				"iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));
			if (h.fitToView)
				if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio)
					for (;
						(a > z || y > r) && (c > m && j > u) && !(19 < d++);) j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height();
				else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
			q && ("auto" === s && j < A && c + x + q < z) && (c += q);
			g.width(c).height(j);
			e.width(c + x);
			a = e.width();
			y = e.height();
			e = (a > z || y > r) && c > m && j > u;
			c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
			f.extend(h, {
				dim: {
					width: w(a),
					height: w(y)
				},
				origWidth: C,
				origHeight: A,
				canShrink: e,
				canExpand: c,
				wPadding: x,
				hPadding: v,
				wrapSpace: y - k.outerHeight(!0),
				skinSpace: k.height() - j
			});
			!H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
		},
		_getPosition: function (a) {
			var d = b.current,
				e = b.getViewport(),
				c = d.margin,
				f = b.wrap.width() + c[1] + c[3],
				g = b.wrap.height() + c[0] + c[2],
				c = {
					position: "absolute",
					top: c[0],
					left: c[3]
				};
			d.autoCenter && d.fixed &&
				!a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
			c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
			c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
			return c
		},
		_afterZoomIn: function () {
			var a = b.current;
			a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
				!f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(),
					b[a.closeClick ? "close" : "next"]())
			}), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) {
				a.preventDefault();
				b.close()
			}), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
		},
		_afterZoomOut: function (a) {
			a =
				a || b.current;
			f(".fancybox-wrap").trigger("onReset").remove();
			f.extend(b, {
				group: {},
				opts: {},
				router: !1,
				current: null,
				isActive: !1,
				isOpened: !1,
				isOpen: !1,
				isClosing: !1,
				wrap: null,
				skin: null,
				outer: null,
				inner: null
			});
			b.trigger("afterClose", a)
		}
	});
	b.transitions = {
		getOrigPosition: function () {
			var a = b.current,
				d = a.element,
				e = a.orig,
				c = {},
				f = 50,
				g = 50,
				h = a.hPadding,
				j = a.wPadding,
				m = b.getViewport();
			!e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
			t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) :
				(c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
			if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x;
			return c = {
				top: w(c.top - h * a.topRatio),
				left: w(c.left - j * a.leftRatio),
				width: w(f + j),
				height: w(g + h)
			}
		},
		step: function (a, d) {
			var e, c, f = d.prop;
			c = b.current;
			var g = c.wrapSpace,
				h = c.skinSpace;
			if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" ===
				f ? c : c - g * e - h * e))
		},
		zoomIn: function () {
			var a = b.current,
				d = a.pos,
				e = a.openEffect,
				c = "elastic" === e,
				k = f.extend({
					opacity: 1
				}, d);
			delete k.position;
			c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
			b.wrap.css(d).animate(k, {
				duration: "none" === e ? 0 : a.openSpeed,
				easing: a.openEasing,
				step: c ? this.step : null,
				complete: b._afterZoomIn
			})
		},
		zoomOut: function () {
			var a = b.current,
				d = a.closeEffect,
				e = "elastic" === d,
				c = {
					opacity: 0.1
				};
			e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
			b.wrap.animate(c, {
				duration: "none" === d ? 0 : a.closeSpeed,
				easing: a.closeEasing,
				step: e ? this.step : null,
				complete: b._afterZoomOut
			})
		},
		changeIn: function () {
			var a = b.current,
				d = a.nextEffect,
				e = a.pos,
				c = {
					opacity: 1
				},
				f = b.direction,
				g;
			e.opacity = 0.1;
			"elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px"));
			"none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
				duration: a.nextSpeed,
				easing: a.nextEasing,
				complete: b._afterZoomIn
			})
		},
		changeOut: function () {
			var a =
				b.previous,
				d = a.prevEffect,
				e = {
					opacity: 0.1
				},
				c = b.direction;
			"elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
			a.wrap.animate(e, {
				duration: "none" === d ? 0 : a.prevSpeed,
				easing: a.prevEasing,
				complete: function () {
					f(this).trigger("onReset").remove()
				}
			})
		}
	};
	b.helpers.overlay = {
		defaults: {
			closeClick: !0,
			speedOut: 200,
			showEarly: !0,
			css: {},
			locked: !s,
			fixed: !0
		},
		overlay: null,
		fixed: !1,
		el: f("html"),
		create: function (a) {
			a = f.extend({}, this.defaults, a);
			this.overlay && this.close();
			this.overlay =
				f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
			this.fixed = !1;
			a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
		},
		open: function (a) {
			var d = this;
			a = f.extend({}, this.defaults, a);
			this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
			this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
			a.closeClick && this.overlay.bind("click.overlay", function (a) {
				if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ?
					b.close() : d.close(), !1
			});
			this.overlay.css(a.css).show()
		},
		close: function () {
			var a, b;
			n.unbind("resize.overlay");
			this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
			f(".fancybox-overlay").remove().hide();
			f.extend(this, {
				overlay: null,
				fixed: !1
			})
		},
		update: function () {
			var a = "100%",
				b;
			this.overlay.width(a).height("100%");
			I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth),
				p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
			this.overlay.width(a).height(p.height())
		},
		onReady: function (a, b) {
			var e = this.overlay;
			f(".fancybox-overlay").stop(!0, !0);
			e || this.create(a);
			a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);
			!0 === a.showEarly && this.beforeShow.apply(this, arguments)
		},
		beforeShow: function (a, b) {
			var e, c;
			b.locked && (!1 !== this.margin && (f("*").filter(function () {
				return "fixed" ===
					f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
			}).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
			this.open(a)
		},
		onUpdate: function () {
			this.fixed || this.update()
		},
		afterClose: function (a) {
			this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
		}
	};
	b.helpers.title = {
		defaults: {
			type: "float",
			position: "bottom"
		},
		beforeShow: function (a) {
			var d =
				b.current,
				e = d.title,
				c = a.type;
			f.isFunction(e) && (e = e.call(d.element, d));
			if (q(e) && "" !== f.trim(e)) {
				d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
				switch (c) {
					case "inside":
						c = b.skin;
						break;
					case "outside":
						c = b.wrap;
						break;
					case "over":
						c = b.inner;
						break;
					default:
						c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
				}
				d["top" === a.position ? "prependTo" : "appendTo"](c)
			}
		}
	};
	f.fn.fancybox = function (a) {
		var d,
			e = f(this),
			c = this.selector || "",
			k = function (g) {
				var h = f(this).blur(),
					j = d,
					k, l;
				!g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault())
			};
		a = a || {};
		d = a.index || 0;
		!c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c +
			":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
		this.filter("[data-fancybox-start=1]").trigger("click");
		return this
	};
	p.ready(function () {
		var a, d;
		f.scrollbarWidth === v && (f.scrollbarWidth = function () {
			var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
				b = a.children(),
				b = b.innerWidth() - b.height(99).innerWidth();
			a.remove();
			return b
		});
		if (f.support.fixedPosition === v) {
			a = f.support;
			d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
			var e = 20 ===
				d[0].offsetTop || 15 === d[0].offsetTop;
			d.remove();
			a.fixedPosition = e
		}
		f.extend(b.defaults, {
			scrollbarWidth: f.scrollbarWidth(),
			fixed: f.support.fixedPosition,
			parent: f("body")
		});
		a = f(r).width();
		J.addClass("fancybox-lock-test");
		d = f(r).width();
		J.removeClass("fancybox-lock-test");
		f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
	})
})(window, document, jQuery);
/*=================================================================*/
/*! Video.js v4.12.7 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */
(function () {
	var b = void 0,
		f = !0,
		j = null,
		l = !1;

	function m() {
		return function () {}
	}

	function n(a) {
		return function () {
			return this[a]
		}
	}

	function q(a) {
		return function () {
			return a
		}
	}
	var s;
	document.createElement("video");
	document.createElement("audio");
	document.createElement("track");

	function t(a, c, d) {
		if ("string" === typeof a) {
			0 === a.indexOf("#") && (a = a.slice(1));
			if (t.Aa[a]) return c && t.log.warn('Player "' + a + '" is already initialised. Options will not be applied.'), d && t.Aa[a].I(d), t.Aa[a];
			a = t.m(a)
		}
		if (!a || !a.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
		return a.player || new t.Player(a, c, d)
	}
	var videojs = window.videojs = t;
	t.ic = "4.12";
	t.vd = "https:" == document.location.protocol ? "https://" : "http://";
	t.VERSION = "4.12.7";
	t.options = {
		techOrder: ["html5", "flash"],
		html5: {},
		flash: {},
		width: 300,
		height: 150,
		defaultVolume: 0,
		playbackRates: [],
		inactivityTimeout: 2E3,
		children: {
			mediaLoader: {},
			posterImage: {},
			loadingSpinner: {},
			textTrackDisplay: {},
			bigPlayButton: {},
			controlBar: {},
			errorDisplay: {},
			textTrackSettings: {}
		},
		language: document.getElementsByTagName("html")[0].getAttribute("lang") || navigator.languages && navigator.languages[0] || navigator.If || navigator.language || "en",
		languages: {},
		notSupportedMessage: "No compatible source was found for this video."
	};
	"GENERATED_CDN_VSN" !== t.ic && (videojs.options.flash.swf = t.vd + "vjs.zencdn.net/" + t.ic + "/video-js.swf");
	t.Jd = function (a, c) {
		t.options.languages[a] = t.options.languages[a] !== b ? t.$.ya(t.options.languages[a], c) : c;
		return t.options.languages
	};
	t.Aa = {};
	"function" === typeof define && define.amd ? define("videojs", [], function () {
		return videojs
	}) : "object" === typeof exports && "object" === typeof module && (module.exports = videojs);
	t.Ea = t.CoreObject = m();
	t.Ea.extend = function (a) {
		var c, d;
		a = a || {};
		c = a.init || a.l || this.prototype.init || this.prototype.l || m();
		d = function () {
			c.apply(this, arguments)
		};
		d.prototype = t.i.create(this.prototype);
		d.prototype.constructor = d;
		d.extend = t.Ea.extend;
		d.create = t.Ea.create;
		for (var e in a) a.hasOwnProperty(e) && (d.prototype[e] = a[e]);
		return d
	};
	t.Ea.create = function () {
		var a = t.i.create(this.prototype);
		this.apply(a, arguments);
		return a
	};
	t.b = function (a, c, d) {
		if (t.i.isArray(c)) return v(t.b, a, c, d);
		var e = t.getData(a);
		e.G || (e.G = {});
		e.G[c] || (e.G[c] = []);
		d.s || (d.s = t.s++);
		e.G[c].push(d);
		e.ca || (e.disabled = l, e.ca = function (c) {
			if (!e.disabled) {
				c = t.Pb(c);
				var d = e.G[c.type];
				if (d)
					for (var d = d.slice(0), k = 0, p = d.length; k < p && !c.Rc(); k++) d[k].call(a, c)
			}
		});
		1 == e.G[c].length && (a.addEventListener ? a.addEventListener(c, e.ca, l) : a.attachEvent && a.attachEvent("on" + c, e.ca))
	};
	t.n = function (a, c, d) {
		if (t.Mc(a)) {
			var e = t.getData(a);
			if (e.G) {
				if (t.i.isArray(c)) return v(t.n, a, c, d);
				if (c) {
					var g = e.G[c];
					if (g) {
						if (d) {
							if (d.s)
								for (e = 0; e < g.length; e++) g[e].s === d.s && g.splice(e--, 1)
						} else e.G[c] = [];
						t.Ac(a, c)
					}
				} else
					for (g in e.G) c = g, e.G[c] = [], t.Ac(a, c)
			}
		}
	};
	t.Ac = function (a, c) {
		var d = t.getData(a);
		0 === d.G[c].length && (delete d.G[c], a.removeEventListener ? a.removeEventListener(c, d.ca, l) : a.detachEvent && a.detachEvent("on" + c, d.ca));
		t.ib(d.G) && (delete d.G, delete d.ca, delete d.disabled);
		t.ib(d) && t.cd(a)
	};
	t.Pb = function (a) {
		function c() {
			return f
		}

		function d() {
			return l
		}
		if (!a || !a.Vb) {
			var e = a || window.event;
			a = {};
			for (var g in e) "layerX" !== g && ("layerY" !== g && "keyLocation" !== g) && ("returnValue" == g && e.preventDefault || (a[g] = e[g]));
			a.target || (a.target = a.srcElement || document);
			a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
			a.preventDefault = function () {
				e.preventDefault && e.preventDefault();
				a.returnValue = l;
				a.ie = c;
				a.defaultPrevented = f
			};
			a.ie = d;
			a.defaultPrevented = l;
			a.stopPropagation = function () {
				e.stopPropagation &&
					e.stopPropagation();
				a.cancelBubble = f;
				a.Vb = c
			};
			a.Vb = d;
			a.stopImmediatePropagation = function () {
				e.stopImmediatePropagation && e.stopImmediatePropagation();
				a.Rc = c;
				a.stopPropagation()
			};
			a.Rc = d;
			if (a.clientX != j) {
				g = document.documentElement;
				var h = document.body;
				a.pageX = a.clientX + (g && g.scrollLeft || h && h.scrollLeft || 0) - (g && g.clientLeft || h && h.clientLeft || 0);
				a.pageY = a.clientY + (g && g.scrollTop || h && h.scrollTop || 0) - (g && g.clientTop || h && h.clientTop || 0)
			}
			a.which = a.charCode || a.keyCode;
			a.button != j && (a.button = a.button & 1 ? 0 : a.button &
				4 ? 1 : a.button & 2 ? 2 : 0)
		}
		return a
	};
	t.o = function (a, c) {
		var d = t.Mc(a) ? t.getData(a) : {},
			e = a.parentNode || a.ownerDocument;
		"string" === typeof c && (c = {
			type: c,
			target: a
		});
		c = t.Pb(c);
		d.ca && d.ca.call(a, c);
		if (e && !c.Vb() && c.bubbles !== l) t.o(e, c);
		else if (!e && !c.defaultPrevented && (d = t.getData(c.target), c.target[c.type])) {
			d.disabled = f;
			if ("function" === typeof c.target[c.type]) c.target[c.type]();
			d.disabled = l
		}
		return !c.defaultPrevented
	};
	t.N = function (a, c, d) {
		function e() {
			t.n(a, c, e);
			d.apply(this, arguments)
		}
		if (t.i.isArray(c)) return v(t.N, a, c, d);
		e.s = d.s = d.s || t.s++;
		t.b(a, c, e)
	};

	function v(a, c, d, e) {
		t.wc.forEach(d, function (d) {
			a(c, d, e)
		})
	}
	var w = Object.prototype.hasOwnProperty;
	t.e = function (a, c) {
		var d;
		c = c || {};
		d = document.createElement(a || "div");
		t.i.da(c, function (a, c) {
			-1 !== a.indexOf("aria-") || "role" == a ? d.setAttribute(a, c) : d[a] = c
		});
		return d
	};
	t.ua = function (a) {
		return a.charAt(0).toUpperCase() + a.slice(1)
	};
	t.i = {};
	t.i.create = Object.create || function (a) {
		function c() {}
		c.prototype = a;
		return new c
	};
	t.i.da = function (a, c, d) {
		for (var e in a) w.call(a, e) && c.call(d || this, e, a[e])
	};
	t.i.D = function (a, c) {
		if (!c) return a;
		for (var d in c) w.call(c, d) && (a[d] = c[d]);
		return a
	};
	t.i.Rd = function (a, c) {
		var d, e, g;
		a = t.i.copy(a);
		for (d in c) w.call(c, d) && (e = a[d], g = c[d], a[d] = t.i.jb(e) && t.i.jb(g) ? t.i.Rd(e, g) : c[d]);
		return a
	};
	t.i.copy = function (a) {
		return t.i.D({}, a)
	};
	t.i.jb = function (a) {
		return !!a && "object" === typeof a && "[object Object]" === a.toString() && a.constructor === Object
	};
	t.i.isArray = Array.isArray || function (a) {
		return "[object Array]" === Object.prototype.toString.call(a)
	};
	t.ke = function (a) {
		return a !== a
	};
	t.bind = function (a, c, d) {
		function e() {
			return c.apply(a, arguments)
		}
		c.s || (c.s = t.s++);
		e.s = d ? d + "_" + c.s : c.s;
		return e
	};
	t.ta = {};
	t.s = 1;
	t.expando = "vdata" + (new Date).getTime();
	t.getData = function (a) {
		var c = a[t.expando];
		c || (c = a[t.expando] = t.s++);
		t.ta[c] || (t.ta[c] = {});
		return t.ta[c]
	};
	t.Mc = function (a) {
		a = a[t.expando];
		return !(!a || t.ib(t.ta[a]))
	};
	t.cd = function (a) {
		var c = a[t.expando];
		if (c) {
			delete t.ta[c];
			try {
				delete a[t.expando]
			} catch (d) {
				a.removeAttribute ? a.removeAttribute(t.expando) : a[t.expando] = j
			}
		}
	};
	t.ib = function (a) {
		for (var c in a)
			if (a[c] !== j) return l;
		return f
	};
	t.Oa = function (a, c) {
		return -1 !== (" " + a.className + " ").indexOf(" " + c + " ")
	};
	t.p = function (a, c) {
		t.Oa(a, c) || (a.className = "" === a.className ? c : a.className + " " + c)
	};
	t.r = function (a, c) {
		var d, e;
		if (t.Oa(a, c)) {
			d = a.className.split(" ");
			for (e = d.length - 1; 0 <= e; e--) d[e] === c && d.splice(e, 1);
			a.className = d.join(" ")
		}
	};
	t.A = t.e("video");
	var x = document.createElement("track");
	x.Wb = "captions";
	x.hd = "en";
	x.label = "English";
	t.A.appendChild(x);
	t.P = navigator.userAgent;
	t.Cd = /iPhone/i.test(t.P);
	t.Bd = /iPad/i.test(t.P);
	t.Dd = /iPod/i.test(t.P);
	t.Ad = t.Cd || t.Bd || t.Dd;
	var aa = t,
		y;
	var z = t.P.match(/OS (\d+)_/i);
	y = z && z[1] ? z[1] : b;
	aa.kf = y;
	t.zd = /Android/i.test(t.P);
	var ba = t,
		B;
	var C = t.P.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
		D, E;
	C ? (D = C[1] && parseFloat(C[1]), E = C[2] && parseFloat(C[2]), B = D && E ? parseFloat(C[1] + "." + C[2]) : D ? D : j) : B = j;
	ba.hc = B;
	t.Ed = t.zd && /webkit/i.test(t.P) && 2.3 > t.hc;
	t.jc = /Firefox/i.test(t.P);
	t.lf = /Chrome/i.test(t.P);
	t.oa = /MSIE\s8\.0/.test(t.P);
	t.Eb = !!("ontouchstart" in window || window.xd && document instanceof window.xd);
	t.wd = "backgroundSize" in t.A.style;
	t.ed = function (a, c) {
		t.i.da(c, function (c, e) {
			e === j || "undefined" === typeof e || e === l ? a.removeAttribute(c) : a.setAttribute(c, e === f ? "" : e)
		})
	};
	t.Na = function (a) {
		var c, d, e, g;
		c = {};
		if (a && a.attributes && 0 < a.attributes.length) {
			d = a.attributes;
			for (var h = d.length - 1; 0 <= h; h--) {
				e = d[h].name;
				g = d[h].value;
				if ("boolean" === typeof a[e] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + e + ",")) g = g !== j ? f : l;
				c[e] = g
			}
		}
		return c
	};
	t.vf = function (a, c) {
		var d = "";
		document.defaultView && document.defaultView.getComputedStyle ? d = document.defaultView.getComputedStyle(a, "").getPropertyValue(c) : a.currentStyle && (d = a["client" + c.substr(0, 1).toUpperCase() + c.substr(1)] + "px");
		return d
	};
	t.Ub = function (a, c) {
		c.firstChild ? c.insertBefore(a, c.firstChild) : c.appendChild(a)
	};
	t.cb = {};
	t.m = function (a) {
		0 === a.indexOf("#") && (a = a.slice(1));
		return document.getElementById(a)
	};
	t.Ma = function (a, c) {
		c = c || a;
		var d = Math.floor(a % 60),
			e = Math.floor(a / 60 % 60),
			g = Math.floor(a / 3600),
			h = Math.floor(c / 60 % 60),
			k = Math.floor(c / 3600);
		if (isNaN(a) || Infinity === a) g = e = d = "-";
		g = 0 < g || 0 < k ? g + ":" : "";
		return g + (((g || 10 <= h) && 10 > e ? "0" + e : e) + ":") + (10 > d ? "0" + d : d)
	};
	t.Ld = function () {
		document.body.focus();
		document.onselectstart = q(l)
	};
	t.af = function () {
		document.onselectstart = q(f)
	};
	t.trim = function (a) {
		return (a + "").replace(/^\s+|\s+$/g, "")
	};
	t.round = function (a, c) {
		c || (c = 0);
		return Math.round(a * Math.pow(10, c)) / Math.pow(10, c)
	};
	t.Lb = function (a, c) {
		return {
			length: 1,
			start: function () {
				return a
			},
			end: function () {
				return c
			}
		}
	};
	t.Me = function (a) {
		try {
			var c = window.localStorage || l;
			c && (c.volume = a)
		} catch (d) {
			22 == d.code || 1014 == d.code ? t.log("LocalStorage Full (VideoJS)", d) : 18 == d.code ? t.log("LocalStorage not allowed (VideoJS)", d) : t.log("LocalStorage Error (VideoJS)", d)
		}
	};
	t.$d = function (a) {
		a.match(/^https?:\/\//) || (a = t.e("div", {
			innerHTML: '<a href="' + a + '">x</a>'
		}).firstChild.href);
		return a
	};
	t.Ee = function (a) {
		var c, d, e, g;
		g = "protocol hostname port pathname search hash host".split(" ");
		d = t.e("a", {
			href: a
		});
		if (e = "" === d.host && "file:" !== d.protocol) c = t.e("div"), c.innerHTML = '<a href="' + a + '"></a>', d = c.firstChild, c.setAttribute("style", "display:none; position:absolute;"), document.body.appendChild(c);
		a = {};
		for (var h = 0; h < g.length; h++) a[g[h]] = d[g[h]];
		"http:" === a.protocol && (a.host = a.host.replace(/:80$/, ""));
		"https:" === a.protocol && (a.host = a.host.replace(/:443$/, ""));
		e && document.body.removeChild(c);
		return a
	};

	function F(a, c) {
		var d, e;
		d = Array.prototype.slice.call(c);
		e = m();
		e = window.console || {
			log: e,
			warn: e,
			error: e
		};
		a ? d.unshift(a.toUpperCase() + ":") : a = "log";
		t.log.history.push(d);
		d.unshift("VIDEOJS:");
		if (e[a].apply) e[a].apply(e, d);
		else e[a](d.join(" "))
	}
	t.log = function () {
		F(j, arguments)
	};
	t.log.history = [];
	t.log.error = function () {
		F("error", arguments)
	};
	t.log.warn = function () {
		F("warn", arguments)
	};
	t.Yd = function (a) {
		var c, d;
		a.getBoundingClientRect && a.parentNode && (c = a.getBoundingClientRect());
		if (!c) return {
			left: 0,
			top: 0
		};
		a = document.documentElement;
		d = document.body;
		return {
			left: t.round(c.left + (window.pageXOffset || d.scrollLeft) - (a.clientLeft || d.clientLeft || 0)),
			top: t.round(c.top + (window.pageYOffset || d.scrollTop) - (a.clientTop || d.clientTop || 0))
		}
	};
	t.wc = {};
	t.wc.forEach = function (a, c, d) {
		if (t.i.isArray(a) && c instanceof Function)
			for (var e = 0, g = a.length; e < g; ++e) c.call(d || t, a[e], e, a);
		return a
	};
	t.ff = function (a, c) {
		var d, e, g, h, k, p, r;
		"string" === typeof a && (a = {
			uri: a
		});
		videojs.$.ya({
			method: "GET",
			timeout: 45E3
		}, a);
		c = c || m();
		p = function () {
			window.clearTimeout(k);
			c(j, e, e.response || e.responseText)
		};
		r = function (a) {
			window.clearTimeout(k);
			if (!a || "string" === typeof a) a = Error(a);
			c(a, e)
		};
		d = window.XMLHttpRequest;
		"undefined" === typeof d && (d = function () {
			try {
				return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
			} catch (a) {}
			try {
				return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
			} catch (c) {}
			try {
				return new window.ActiveXObject("Msxml2.XMLHTTP")
			} catch (d) {}
			throw Error("This browser does not support XMLHttpRequest.");
		});
		e = new d;
		e.uri = a.uri;
		d = t.Ee(a.uri);
		g = window.location;
		d.protocol + d.host !== g.protocol + g.host && window.XDomainRequest && !("withCredentials" in e) ? (e = new window.XDomainRequest, e.onload = p, e.onerror = r, e.onprogress = m(), e.ontimeout = m()) : (h = "file:" == d.protocol || "file:" == g.protocol, e.onreadystatechange = function () {
			if (4 === e.readyState) {
				if (e.Ye) return r("timeout");
				200 === e.status || h && 0 === e.status ? p() : r()
			}
		}, a.timeout && (k = window.setTimeout(function () {
			4 !== e.readyState && (e.Ye = f, e.abort())
		}, a.timeout)));
		try {
			e.open(a.method ||
				"GET", a.uri, f)
		} catch (u) {
			r(u);
			return
		}
		a.withCredentials && (e.withCredentials = f);
		a.responseType && (e.responseType = a.responseType);
		try {
			e.send()
		} catch (A) {
			r(A)
		}
	};
	t.$ = {};
	t.$.ya = function (a, c) {
		var d, e, g;
		a = t.i.copy(a);
		for (d in c) c.hasOwnProperty(d) && (e = a[d], g = c[d], a[d] = t.i.jb(e) && t.i.jb(g) ? t.$.ya(e, g) : c[d]);
		return a
	};
	t.z = m();
	s = t.z.prototype;
	s.bb = {};
	s.b = function (a, c) {
		var d = this.addEventListener;
		this.addEventListener = Function.prototype;
		t.b(this, a, c);
		this.addEventListener = d
	};
	s.addEventListener = t.z.prototype.b;
	s.n = function (a, c) {
		t.n(this, a, c)
	};
	s.removeEventListener = t.z.prototype.n;
	s.N = function (a, c) {
		t.N(this, a, c)
	};
	s.o = function (a) {
		var c = a.type || a;
		"string" === typeof a && (a = {
			type: c
		});
		a = t.Pb(a);
		if (this.bb[c] && this["on" + c]) this["on" + c](a);
		t.o(this, a)
	};
	s.dispatchEvent = t.z.prototype.o;
	t.a = t.Ea.extend({
		l: function (a, c, d) {
			this.d = a;
			this.q = t.i.copy(this.q);
			c = this.options(c);
			this.Pa = c.id || c.el && c.el.id;
			this.Pa || (this.Pa = (a.id && a.id() || "no_player") + "_component_" + t.s++);
			this.te = c.name || j;
			this.c = c.el || this.e();
			this.R = [];
			this.fb = {};
			this.gb = {};
			this.Oc();
			this.I(d);
			if (c.dd !== l) {
				var e, g;
				this.k().reportUserActivity && (e = t.bind(this.k(), this.k().reportUserActivity), this.b("touchstart", function () {
					e();
					this.clearInterval(g);
					g = this.setInterval(e, 250)
				}), a = function () {
					e();
					this.clearInterval(g)
				}, this.b("touchmove",
					e), this.b("touchend", a), this.b("touchcancel", a))
			}
		}
	});
	s = t.a.prototype;
	s.dispose = function () {
		this.o({
			type: "dispose",
			bubbles: l
		});
		if (this.R)
			for (var a = this.R.length - 1; 0 <= a; a--) this.R[a].dispose && this.R[a].dispose();
		this.gb = this.fb = this.R = j;
		this.n();
		this.c.parentNode && this.c.parentNode.removeChild(this.c);
		t.cd(this.c);
		this.c = j
	};
	s.d = f;
	s.k = n("d");
	s.options = function (a) {
		return a === b ? this.q : this.q = t.$.ya(this.q, a)
	};
	s.e = function (a, c) {
		return t.e(a, c)
	};
	s.v = function (a) {
		var c = this.d.language(),
			d = this.d.languages();
		return d && d[c] && d[c][a] ? d[c][a] : a
	};
	s.m = n("c");
	s.va = function () {
		return this.B || this.c
	};
	s.id = n("Pa");
	s.name = n("te");
	s.children = n("R");
	s.ae = function (a) {
		return this.fb[a]
	};
	s.ea = function (a) {
		return this.gb[a]
	};
	s.ba = function (a, c) {
		var d, e;
		"string" === typeof a ? (e = a, c = c || {}, d = c.componentClass || t.ua(e), c.name = e, d = new window.videojs[d](this.d || this, c)) : d = a;
		this.R.push(d);
		"function" === typeof d.id && (this.fb[d.id()] = d);
		(e = e || d.name && d.name()) && (this.gb[e] = d);
		"function" === typeof d.el && d.el() && this.va().appendChild(d.el());
		return d
	};
	s.removeChild = function (a) {
		"string" === typeof a && (a = this.ea(a));
		if (a && this.R) {
			for (var c = l, d = this.R.length - 1; 0 <= d; d--)
				if (this.R[d] === a) {
					c = f;
					this.R.splice(d, 1);
					break
				}
			c && (this.fb[a.id()] = j, this.gb[a.name()] = j, (c = a.m()) && c.parentNode === this.va() && this.va().removeChild(a.m()))
		}
	};
	s.Oc = function () {
		var a, c, d, e, g, h;
		a = this;
		c = a.options();
		if (d = c.children)
			if (h = function (d, e) {
					c[d] !== b && (e = c[d]);
					e !== l && (a[d] = a.ba(d, e))
				}, t.i.isArray(d))
				for (var k = 0; k < d.length; k++) e = d[k], "string" == typeof e ? (g = e, e = {}) : g = e.name, h(g, e);
			else t.i.da(d, h)
	};
	s.V = q("");
	s.b = function (a, c, d) {
		var e, g, h;
		"string" === typeof a || t.i.isArray(a) ? t.b(this.c, a, t.bind(this, c)) : (e = t.bind(this, d), h = this, g = function () {
			h.n(a, c, e)
		}, g.s = e.s, this.b("dispose", g), d = function () {
			h.n("dispose", g)
		}, d.s = e.s, a.nodeName ? (t.b(a, c, e), t.b(a, "dispose", d)) : "function" === typeof a.b && (a.b(c, e), a.b("dispose", d)));
		return this
	};
	s.n = function (a, c, d) {
		!a || "string" === typeof a || t.i.isArray(a) ? t.n(this.c, a, c) : (d = t.bind(this, d), this.n("dispose", d), a.nodeName ? (t.n(a, c, d), t.n(a, "dispose", d)) : (a.n(c, d), a.n("dispose", d)));
		return this
	};
	s.N = function (a, c, d) {
		var e, g, h;
		"string" === typeof a || t.i.isArray(a) ? t.N(this.c, a, t.bind(this, c)) : (e = t.bind(this, d), g = this, h = function () {
			g.n(a, c, h);
			e.apply(this, arguments)
		}, h.s = e.s, this.b(a, c, h));
		return this
	};
	s.o = function (a) {
		t.o(this.c, a);
		return this
	};
	s.I = function (a) {
		a && (this.wa ? a.call(this) : (this.nb === b && (this.nb = []), this.nb.push(a)));
		return this
	};
	s.Wa = function () {
		this.wa = f;
		var a = this.nb;
		if (a && 0 < a.length) {
			for (var c = 0, d = a.length; c < d; c++) a[c].call(this);
			this.nb = [];
			this.o("ready")
		}
	};
	s.Oa = function (a) {
		return t.Oa(this.c, a)
	};
	s.p = function (a) {
		t.p(this.c, a);
		return this
	};
	s.r = function (a) {
		t.r(this.c, a);
		return this
	};
	s.show = function () {
		this.r("vjs-hidden");
		return this
	};
	s.Y = function () {
		this.p("vjs-hidden");
		return this
	};

	function G(a) {
		a.r("vjs-lock-showing")
	}
	s.width = function (a, c) {
		return ca(this, "width", a, c)
	};
	s.height = function (a, c) {
		return ca(this, "height", a, c)
	};
	s.Td = function (a, c) {
		return this.width(a, f).height(c)
	};

	function ca(a, c, d, e) {
		if (d !== b) {
			if (d === j || t.ke(d)) d = 0;
			a.c.style[c] = -1 !== ("" + d).indexOf("%") || -1 !== ("" + d).indexOf("px") ? d : "auto" === d ? "" : d + "px";
			e || a.o("resize");
			return a
		}
		if (!a.c) return 0;
		d = a.c.style[c];
		e = d.indexOf("px");
		return -1 !== e ? parseInt(d.slice(0, e), 10) : parseInt(a.c["offset" + t.ua(c)], 10)
	}

	function da(a) {
		var c, d, e, g, h, k, p, r;
		c = 0;
		d = j;
		a.b("touchstart", function (a) {
			1 === a.touches.length && (d = t.i.copy(a.touches[0]), c = (new Date).getTime(), g = f)
		});
		a.b("touchmove", function (a) {
			1 < a.touches.length ? g = l : d && (k = a.touches[0].pageX - d.pageX, p = a.touches[0].pageY - d.pageY, r = Math.sqrt(k * k + p * p), 10 < r && (g = l))
		});
		h = function () {
			g = l
		};
		a.b("touchleave", h);
		a.b("touchcancel", h);
		a.b("touchend", function (a) {
			d = j;
			g === f && (e = (new Date).getTime() - c, 200 > e && (a.preventDefault(), this.o("tap")))
		})
	}
	s.setTimeout = function (a, c) {
		function d() {
			this.clearTimeout(e)
		}
		a = t.bind(this, a);
		var e = setTimeout(a, c);
		d.s = "vjs-timeout-" + e;
		this.b("dispose", d);
		return e
	};
	s.clearTimeout = function (a) {
		function c() {}
		clearTimeout(a);
		c.s = "vjs-timeout-" + a;
		this.n("dispose", c);
		return a
	};
	s.setInterval = function (a, c) {
		function d() {
			this.clearInterval(e)
		}
		a = t.bind(this, a);
		var e = setInterval(a, c);
		d.s = "vjs-interval-" + e;
		this.b("dispose", d);
		return e
	};
	s.clearInterval = function (a) {
		function c() {}
		clearInterval(a);
		c.s = "vjs-interval-" + a;
		this.n("dispose", c);
		return a
	};
	t.w = t.a.extend({
		l: function (a, c) {
			t.a.call(this, a, c);
			da(this);
			this.b("tap", this.u);
			this.b("click", this.u);
			this.b("focus", this.lb);
			this.b("blur", this.kb)
		}
	});
	s = t.w.prototype;
	s.e = function (a, c) {
		var d;
		c = t.i.D({
			className: this.V(),
			role: "button",
			"aria-live": "polite",
			tabIndex: 0
		}, c);
		d = t.a.prototype.e.call(this, a, c);
		c.innerHTML || (this.B = t.e("div", {
			className: "vjs-control-content"
		}), this.Jb = t.e("span", {
			className: "vjs-control-text",
			innerHTML: this.v(this.sa) || "Need Text"
		}), this.B.appendChild(this.Jb), d.appendChild(this.B));
		return d
	};
	s.V = function () {
		return "vjs-control " + t.a.prototype.V.call(this)
	};
	s.u = m();
	s.lb = function () {
		t.b(document, "keydown", t.bind(this, this.ka))
	};
	s.ka = function (a) {
		if (32 == a.which || 13 == a.which) a.preventDefault(), this.u()
	};
	s.kb = function () {
		t.n(document, "keydown", t.bind(this, this.ka))
	};
	t.U = t.a.extend({
		l: function (a, c) {
			t.a.call(this, a, c);
			this.Kd = this.ea(this.q.barName);
			this.handle = this.ea(this.q.handleName);
			this.b("mousedown", this.mb);
			this.b("touchstart", this.mb);
			this.b("focus", this.lb);
			this.b("blur", this.kb);
			this.b("click", this.u);
			this.b(a, "controlsvisible", this.update);
			this.b(a, this.Yc, this.update)
		}
	});
	s = t.U.prototype;
	s.e = function (a, c) {
		c = c || {};
		c.className += " vjs-slider";
		c = t.i.D({
			role: "slider",
			"aria-valuenow": 0,
			"aria-valuemin": 0,
			"aria-valuemax": 100,
			tabIndex: 0
		}, c);
		return t.a.prototype.e.call(this, a, c)
	};
	s.mb = function (a) {
		a.preventDefault();
		t.Ld();
		this.p("vjs-sliding");
		this.b(document, "mousemove", this.la);
		this.b(document, "mouseup", this.za);
		this.b(document, "touchmove", this.la);
		this.b(document, "touchend", this.za);
		this.la(a)
	};
	s.la = m();
	s.za = function () {
		t.af();
		this.r("vjs-sliding");
		this.n(document, "mousemove", this.la);
		this.n(document, "mouseup", this.za);
		this.n(document, "touchmove", this.la);
		this.n(document, "touchend", this.za);
		this.update()
	};
	s.update = function () {
		if (this.c) {
			var a, c = this.Sb(),
				d = this.handle,
				e = this.Kd;
			if ("number" !== typeof c || c !== c || 0 > c || Infinity === c) c = 0;
			a = c;
			if (d) {
				a = this.c.offsetWidth;
				var g = d.m().offsetWidth;
				a = g ? g / a : 0;
				c *= 1 - a;
				a = c + a / 2;
				d.m().style.left = t.round(100 * c, 2) + "%"
			}
			e && (e.m().style.width = t.round(100 * a, 2) + "%")
		}
	};

	function ea(a, c) {
		var d, e, g, h;
		d = a.c;
		e = t.Yd(d);
		h = g = d.offsetWidth;
		d = a.handle;
		if (a.options().vertical) return h = e.top, e = c.changedTouches ? c.changedTouches[0].pageY : c.pageY, d && (d = d.m().offsetHeight, h += d / 2, g -= d), Math.max(0, Math.min(1, (h - e + g) / g));
		g = e.left;
		e = c.changedTouches ? c.changedTouches[0].pageX : c.pageX;
		d && (d = d.m().offsetWidth, g += d / 2, h -= d);
		return Math.max(0, Math.min(1, (e - g) / h))
	}
	s.lb = function () {
		this.b(document, "keydown", this.ka)
	};
	s.ka = function (a) {
		if (37 == a.which || 40 == a.which) a.preventDefault(), this.jd();
		else if (38 == a.which || 39 == a.which) a.preventDefault(), this.kd()
	};
	s.kb = function () {
		this.n(document, "keydown", this.ka)
	};
	s.u = function (a) {
		a.stopImmediatePropagation();
		a.preventDefault()
	};
	t.ha = t.a.extend();
	t.ha.prototype.defaultValue = 0;
	t.ha.prototype.e = function (a, c) {
		c = c || {};
		c.className += " vjs-slider-handle";
		c = t.i.D({
			innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
		}, c);
		return t.a.prototype.e.call(this, "div", c)
	};
	t.pa = t.a.extend();

	function fa(a, c) {
		a.ba(c);
		c.b("click", t.bind(a, function () {
			G(this)
		}))
	}
	t.pa.prototype.e = function () {
		var a = this.options().Cc || "ul";
		this.B = t.e(a, {
			className: "vjs-menu-content"
		});
		a = t.a.prototype.e.call(this, "div", {
			append: this.B,
			className: "vjs-menu"
		});
		a.appendChild(this.B);
		t.b(a, "click", function (a) {
			a.preventDefault();
			a.stopImmediatePropagation()
		});
		return a
	};
	t.M = t.w.extend({
		l: function (a, c) {
			t.w.call(this, a, c);
			this.selected(c.selected)
		}
	});
	t.M.prototype.e = function (a, c) {
		return t.w.prototype.e.call(this, "li", t.i.D({
			className: "vjs-menu-item",
			innerHTML: this.v(this.q.label)
		}, c))
	};
	t.M.prototype.u = function () {
		this.selected(f)
	};
	t.M.prototype.selected = function (a) {
		a ? (this.p("vjs-selected"), this.c.setAttribute("aria-selected", f)) : (this.r("vjs-selected"), this.c.setAttribute("aria-selected", l))
	};
	t.O = t.w.extend({
		l: function (a, c) {
			t.w.call(this, a, c);
			this.update();
			this.b("keydown", this.ka);
			this.c.setAttribute("aria-haspopup", f);
			this.c.setAttribute("role", "button")
		}
	});
	s = t.O.prototype;
	s.update = function () {
		var a = this.Ja();
		this.xa && this.removeChild(this.xa);
		this.xa = a;
		this.ba(a);
		this.H && 0 === this.H.length ? this.Y() : this.H && 1 < this.H.length && this.show()
	};
	s.Ha = l;
	s.Ja = function () {
		var a = new t.pa(this.d);
		this.options().title && a.va().appendChild(t.e("li", {
			className: "vjs-menu-title",
			innerHTML: t.ua(this.options().title),
			We: -1
		}));
		if (this.H = this.createItems())
			for (var c = 0; c < this.H.length; c++) fa(a, this.H[c]);
		return a
	};
	s.Ia = m();
	s.V = function () {
		return this.className + " vjs-menu-button " + t.w.prototype.V.call(this)
	};
	s.lb = m();
	s.kb = m();
	s.u = function () {
		this.N("mouseout", t.bind(this, function () {
			G(this.xa);
			this.c.blur()
		}));
		this.Ha ? H(this) : ga(this)
	};
	s.ka = function (a) {
		32 == a.which || 13 == a.which ? (this.Ha ? H(this) : ga(this), a.preventDefault()) : 27 == a.which && (this.Ha && H(this), a.preventDefault())
	};

	function ga(a) {
		a.Ha = f;
		a.xa.p("vjs-lock-showing");
		a.c.setAttribute("aria-pressed", f);
		a.H && 0 < a.H.length && a.H[0].m().focus()
	}

	function H(a) {
		a.Ha = l;
		G(a.xa);
		a.c.setAttribute("aria-pressed", l)
	}
	t.J = function (a) {
		"number" === typeof a ? this.code = a : "string" === typeof a ? this.message = a : "object" === typeof a && t.i.D(this, a);
		this.message || (this.message = t.J.Sd[this.code] || "")
	};
	t.J.prototype.code = 0;
	t.J.prototype.message = "";
	t.J.prototype.status = j;
	t.J.hb = "MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" ");
	t.J.Sd = {
		1: "You aborted the video playback",
		2: "A network error caused the video download to fail part-way.",
		3: "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",
		4: "The video could not be loaded, either because the server or network failed or because the format is not supported.",
		5: "The video is encrypted and we do not have the keys to decrypt it."
	};
	for (var I = 0; I < t.J.hb.length; I++) t.J[t.J.hb[I]] = I, t.J.prototype[t.J.hb[I]] = I;
	var J, ha, K, L;
	J = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")];
	ha = J[0];
	for (L = 0; L < J.length; L++)
		if (J[L][1] in document) {
			K = J[L];
			break
		}
	if (K) {
		t.cb.Rb = {};
		for (L = 0; L < K.length; L++) t.cb.Rb[ha[L]] = K[L]
	}
	t.Player = t.a.extend({
		l: function (a, c, d) {
			this.L = a;
			a.id = a.id || "vjs_video_" + t.s++;
			this.Xe = a && t.Na(a);
			c = t.i.D(ia(a), c);
			this.Tc = c.language || t.options.language;
			this.ne = c.languages || t.options.languages;
			this.K = {};
			this.Zc = c.poster || "";
			this.Kb = !!c.controls;
			a.controls = l;
			c.dd = l;
			ja(this, "audio" === this.L.nodeName.toLowerCase());
			t.a.call(this, this, c, d);
			this.controls() ? this.p("vjs-controls-enabled") : this.p("vjs-controls-disabled");
			ja(this) && this.p("vjs-audio");
			t.Aa[this.Pa] = this;
			c.plugins && t.i.da(c.plugins, function (a,
				c) {
				this[a](c)
			}, this);
			var e, g, h, k, p;
			e = t.bind(this, this.reportUserActivity);
			this.b("mousedown", function () {
				e();
				this.clearInterval(g);
				g = this.setInterval(e, 250)
			});
			this.b("mousemove", function (a) {
				if (a.screenX != k || a.screenY != p) k = a.screenX, p = a.screenY, e()
			});
			this.b("mouseup", function () {
				e();
				this.clearInterval(g)
			});
			this.b("keydown", e);
			this.b("keyup", e);
			this.setInterval(function () {
				if (this.Da) {
					this.Da = l;
					this.userActive(f);
					this.clearTimeout(h);
					var a = this.options().inactivityTimeout;
					0 < a && (h = this.setTimeout(function () {
						this.Da ||
							this.userActive(l)
					}, a))
				}
			}, 250)
		}
	});
	s = t.Player.prototype;
	s.language = function (a) {
		if (a === b) return this.Tc;
		this.Tc = a;
		return this
	};
	s.languages = n("ne");
	s.q = t.options;
	s.dispose = function () {
		this.o("dispose");
		this.n("dispose");
		t.Aa[this.Pa] = j;
		this.L && this.L.player && (this.L.player = j);
		this.c && this.c.player && (this.c.player = j);
		this.h && this.h.dispose();
		t.a.prototype.dispose.call(this)
	};

	function ia(a) {
		var c, d, e = {
			sources: [],
			tracks: []
		};
		c = t.Na(a);
		d = c["data-setup"];
		d !== j && t.i.D(c, t.JSON.parse(d || "{}"));
		t.i.D(e, c);
		if (a.hasChildNodes()) {
			var g, h;
			a = a.childNodes;
			g = 0;
			for (h = a.length; g < h; g++) c = a[g], d = c.nodeName.toLowerCase(), "source" === d ? e.sources.push(t.Na(c)) : "track" === d && e.tracks.push(t.Na(c))
		}
		return e
	}
	s.e = function () {
		var a = this.c = t.a.prototype.e.call(this, "div"),
			c = this.L,
			d;
		c.removeAttribute("width");
		c.removeAttribute("height");
		d = t.Na(c);
		t.i.da(d, function (c) {
			"class" == c ? a.className = d[c] : a.setAttribute(c, d[c])
		});
		c.id += "_html5_api";
		c.className = "vjs-tech";
		c.player = a.player = this;
		this.p("vjs-paused");
		this.width(this.q.width, f);
		this.height(this.q.height, f);
		c.ge = c.networkState;
		c.parentNode && c.parentNode.insertBefore(a, c);
		t.Ub(c, a);
		this.c = a;
		this.b("loadstart", this.xe);
		this.b("waiting", this.De);
		this.b(["canplay",
			"canplaythrough", "playing", "ended"
		], this.Ce);
		this.b("seeking", this.Ae);
		this.b("seeked", this.ze);
		this.b("ended", this.ue);
		this.b("play", this.$b);
		this.b("firstplay", this.ve);
		this.b("pause", this.Zb);
		this.b("progress", this.ye);
		this.b("durationchange", this.Wc);
		this.b("fullscreenchange", this.we);
		return a
	};

	function ka(a, c, d) {
		a.h && (a.wa = l, a.h.dispose(), a.h = l);
		"Html5" !== c && a.L && (t.f.Mb(a.L), a.L = j);
		a.Ua = c;
		a.wa = l;
		var e = t.i.D({
			source: d,
			parentEl: a.c
		}, a.q[c.toLowerCase()]);
		d && (a.Gc = d.type, d.src == a.K.src && 0 < a.K.currentTime && (e.startTime = a.K.currentTime), a.K.src = d.src);
		a.h = new window.videojs[c](a, e);
		a.h.I(function () {
			this.d.Wa()
		})
	}
	s.xe = function () {
		this.r("vjs-ended");
		this.error(j);
		this.paused() ? la(this, l) : this.o("firstplay")
	};
	s.Nc = l;

	function la(a, c) {
		c !== b && a.Nc !== c && ((a.Nc = c) ? (a.p("vjs-has-started"), a.o("firstplay")) : a.r("vjs-has-started"))
	}
	s.$b = function () {
		this.r("vjs-ended");
		this.r("vjs-paused");
		this.p("vjs-playing");
		la(this, f)
	};
	s.De = function () {
		this.p("vjs-waiting")
	};
	s.Ce = function () {
		this.r("vjs-waiting")
	};
	s.Ae = function () {
		this.p("vjs-seeking")
	};
	s.ze = function () {
		this.r("vjs-seeking")
	};
	s.ve = function () {
		this.q.starttime && this.currentTime(this.q.starttime);
		this.p("vjs-has-started")
	};
	s.Zb = function () {
		this.r("vjs-playing");
		this.p("vjs-paused")
	};
	s.ye = function () {
		1 == this.bufferedPercent() && this.o("loadedalldata")
	};
	s.ue = function () {
		this.p("vjs-ended");
		this.q.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause()
	};
	s.Wc = function () {
		var a = M(this, "duration");
		a && (0 > a && (a = Infinity), this.duration(a), Infinity === a ? this.p("vjs-live") : this.r("vjs-live"))
	};
	s.we = function () {
		this.isFullscreen() ? this.p("vjs-fullscreen") : this.r("vjs-fullscreen")
	};

	function N(a, c, d) {
		if (a.h && !a.h.wa) a.h.I(function () {
			this[c](d)
		});
		else try {
			a.h[c](d)
		} catch (e) {
			throw t.log(e), e;
		}
	}

	function M(a, c) {
		if (a.h && a.h.wa) try {
			return a.h[c]()
		} catch (d) {
			throw a.h[c] === b ? t.log("Video.js: " + c + " method not defined for " + a.Ua + " playback technology.", d) : "TypeError" == d.name ? (t.log("Video.js: " + c + " unavailable on " + a.Ua + " playback technology element.", d), a.h.wa = l) : t.log(d), d;
		}
	}
	s.play = function () {
		N(this, "play");
		return this
	};
	s.pause = function () {
		N(this, "pause");
		return this
	};
	s.paused = function () {
		return M(this, "paused") === l ? l : f
	};
	s.currentTime = function (a) {
		return a !== b ? (N(this, "setCurrentTime", a), this) : this.K.currentTime = M(this, "currentTime") || 0
	};
	s.duration = function (a) {
		if (a !== b) return this.K.duration = parseFloat(a), this;
		this.K.duration === b && this.Wc();
		return this.K.duration || 0
	};
	s.remainingTime = function () {
		return this.duration() - this.currentTime()
	};
	s.buffered = function () {
		var a = M(this, "buffered");
		if (!a || !a.length) a = t.Lb(0, 0);
		return a
	};
	s.bufferedPercent = function () {
		var a = this.duration(),
			c = this.buffered(),
			d = 0,
			e, g;
		if (!a) return 0;
		for (var h = 0; h < c.length; h++) e = c.start(h), g = c.end(h), g > a && (g = a), d += g - e;
		return d / a
	};
	s.volume = function (a) {
		if (a !== b) return a = Math.max(0, Math.min(1, parseFloat(a))), this.K.volume = a, N(this, "setVolume", a), t.Me(a), this;
		a = parseFloat(M(this, "volume"));
		return isNaN(a) ? 1 : a
	};
	s.muted = function (a) {
		return a !== b ? (N(this, "setMuted", a), this) : M(this, "muted") || l
	};
	s.Ta = function () {
		return M(this, "supportsFullScreen") || l
	};
	s.Qc = l;
	s.isFullscreen = function (a) {
		return a !== b ? (this.Qc = !!a, this) : this.Qc
	};
	s.isFullScreen = function (a) {
		t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")');
		return this.isFullscreen(a)
	};
	s.requestFullscreen = function () {
		var a = t.cb.Rb;
		this.isFullscreen(f);
		a ? (t.b(document, a.fullscreenchange, t.bind(this, function (c) {
			this.isFullscreen(document[a.fullscreenElement]);
			this.isFullscreen() === l && t.n(document, a.fullscreenchange, arguments.callee);
			this.o("fullscreenchange")
		})), this.c[a.requestFullscreen]()) : this.h.Ta() ? N(this, "enterFullScreen") : (this.Jc(), this.o("fullscreenchange"));
		return this
	};
	s.requestFullScreen = function () {
		t.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")');
		return this.requestFullscreen()
	};
	s.exitFullscreen = function () {
		var a = t.cb.Rb;
		this.isFullscreen(l);
		if (a) document[a.exitFullscreen]();
		else this.h.Ta() ? N(this, "exitFullScreen") : (this.Nb(), this.o("fullscreenchange"));
		return this
	};
	s.cancelFullScreen = function () {
		t.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()");
		return this.exitFullscreen()
	};
	s.Jc = function () {
		this.je = f;
		this.Ud = document.documentElement.style.overflow;
		t.b(document, "keydown", t.bind(this, this.Kc));
		document.documentElement.style.overflow = "hidden";
		t.p(document.body, "vjs-full-window");
		this.o("enterFullWindow")
	};
	s.Kc = function (a) {
		27 === a.keyCode && (this.isFullscreen() === f ? this.exitFullscreen() : this.Nb())
	};
	s.Nb = function () {
		this.je = l;
		t.n(document, "keydown", this.Kc);
		document.documentElement.style.overflow = this.Ud;
		t.r(document.body, "vjs-full-window");
		this.o("exitFullWindow")
	};
	s.selectSource = function (a) {
		for (var c = 0, d = this.q.techOrder; c < d.length; c++) {
			var e = t.ua(d[c]),
				g = window.videojs[e];
			if (g) {
				if (g.isSupported())
					for (var h = 0, k = a; h < k.length; h++) {
						var p = k[h];
						if (g.canPlaySource(p)) return {
							source: p,
							h: e
						}
					}
			} else t.log.error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.')
		}
		return l
	};
	s.src = function (a) {
		if (a === b) return M(this, "src");
		t.i.isArray(a) ? ma(this, a) : "string" === typeof a ? this.src({
			src: a
		}) : a instanceof Object && (a.type && !window.videojs[this.Ua].canPlaySource(a) ? ma(this, [a]) : (this.K.src = a.src, this.Gc = a.type || "", this.I(function () {
			window.videojs[this.Ua].prototype.hasOwnProperty("setSource") ? N(this, "setSource", a) : N(this, "src", a.src);
			"auto" == this.q.preload && this.load();
			this.q.autoplay && this.play()
		})));
		return this
	};

	function ma(a, c) {
		var d = a.selectSource(c);
		d ? d.h === a.Ua ? a.src(d.source) : ka(a, d.h, d.source) : (a.setTimeout(function () {
			this.error({
				code: 4,
				message: this.v(this.options().notSupportedMessage)
			})
		}, 0), a.Wa())
	}
	s.load = function () {
		N(this, "load");
		return this
	};
	s.currentSrc = function () {
		return M(this, "currentSrc") || this.K.src || ""
	};
	s.Qd = function () {
		return this.Gc || ""
	};
	s.Qa = function (a) {
		return a !== b ? (N(this, "setPreload", a), this.q.preload = a, this) : M(this, "preload")
	};
	s.autoplay = function (a) {
		return a !== b ? (N(this, "setAutoplay", a), this.q.autoplay = a, this) : M(this, "autoplay")
	};
	s.loop = function (a) {
		return a !== b ? (N(this, "setLoop", a), this.q.loop = a, this) : M(this, "loop")
	};
	s.poster = function (a) {
		if (a === b) return this.Zc;
		a || (a = "");
		this.Zc = a;
		N(this, "setPoster", a);
		this.o("posterchange");
		return this
	};
	s.controls = function (a) {
		return a !== b ? (a = !!a, this.Kb !== a && ((this.Kb = a) ? (this.r("vjs-controls-disabled"), this.p("vjs-controls-enabled"), this.o("controlsenabled")) : (this.r("vjs-controls-enabled"), this.p("vjs-controls-disabled"), this.o("controlsdisabled"))), this) : this.Kb
	};
	t.Player.prototype.ec;
	s = t.Player.prototype;
	s.usingNativeControls = function (a) {
		return a !== b ? (a = !!a, this.ec !== a && ((this.ec = a) ? (this.p("vjs-using-native-controls"), this.o("usingnativecontrols")) : (this.r("vjs-using-native-controls"), this.o("usingcustomcontrols"))), this) : this.ec
	};
	s.ja = j;
	s.error = function (a) {
		if (a === b) return this.ja;
		if (a === j) return this.ja = a, this.r("vjs-error"), this;
		this.ja = a instanceof t.J ? a : new t.J(a);
		this.o("error");
		this.p("vjs-error");
		t.log.error("(CODE:" + this.ja.code + " " + t.J.hb[this.ja.code] + ")", this.ja.message, this.ja);
		return this
	};
	s.ended = function () {
		return M(this, "ended")
	};
	s.seeking = function () {
		return M(this, "seeking")
	};
	s.Da = f;
	s.reportUserActivity = function () {
		this.Da = f
	};
	s.dc = f;
	s.userActive = function (a) {
		return a !== b ? (a = !!a, a !== this.dc && ((this.dc = a) ? (this.Da = f, this.r("vjs-user-inactive"), this.p("vjs-user-active"), this.o("useractive")) : (this.Da = l, this.h && this.h.N("mousemove", function (a) {
			a.stopPropagation();
			a.preventDefault()
		}), this.r("vjs-user-active"), this.p("vjs-user-inactive"), this.o("userinactive"))), this) : this.dc
	};
	s.playbackRate = function (a) {
		return a !== b ? (N(this, "setPlaybackRate", a), this) : this.h && this.h.featuresPlaybackRate ? M(this, "playbackRate") : 1
	};
	s.Pc = l;

	function ja(a, c) {
		return c !== b ? (a.Pc = !!c, a) : a.Pc
	}
	s.networkState = function () {
		return M(this, "networkState")
	};
	s.readyState = function () {
		return M(this, "readyState")
	};
	s.textTracks = function () {
		return this.h && this.h.textTracks()
	};
	s.Z = function () {
		return this.h && this.h.remoteTextTracks()
	};
	s.addTextTrack = function (a, c, d) {
		return this.h && this.h.addTextTrack(a, c, d)
	};
	s.ia = function (a) {
		return this.h && this.h.addRemoteTextTrack(a)
	};
	s.Ba = function (a) {
		this.h && this.h.removeRemoteTextTrack(a)
	};
	t.ub = t.a.extend();
	t.ub.prototype.q = {
		wf: "play",
		children: {
			playToggle: {},
			currentTimeDisplay: {},
			timeDivider: {},
			durationDisplay: {},
			remainingTimeDisplay: {},
			liveDisplay: {},
			progressControl: {},
			fullscreenToggle: {},
			volumeControl: {},
			muteToggle: {},
			playbackRateMenuButton: {},
			subtitlesButton: {},
			captionsButton: {},
			chaptersButton: {}
		}
	};
	t.ub.prototype.e = function () {
		return t.e("div", {
			className: "vjs-control-bar"
		})
	};
	t.kc = t.a.extend({
		l: function (a, c) {
			t.a.call(this, a, c)
		}
	});
	t.kc.prototype.e = function () {
		var a = t.a.prototype.e.call(this, "div", {
			className: "vjs-live-controls vjs-control"
		});
		this.B = t.e("div", {
			className: "vjs-live-display",
			innerHTML: '<span class="vjs-control-text">' + this.v("Stream Type") + "</span>" + this.v("LIVE"),
			"aria-live": "off"
		});
		a.appendChild(this.B);
		return a
	};
	t.nc = t.w.extend({
		l: function (a, c) {
			t.w.call(this, a, c);
			this.b(a, "play", this.$b);
			this.b(a, "pause", this.Zb)
		}
	});
	s = t.nc.prototype;
	s.sa = "Play";
	s.V = function () {
		return "vjs-play-control " + t.w.prototype.V.call(this)
	};
	s.u = function () {
		this.d.paused() ? this.d.play() : this.d.pause()
	};
	s.$b = function () {
		this.r("vjs-paused");
		this.p("vjs-playing");
		this.c.children[0].children[0].innerHTML = this.v("Pause")
	};
	s.Zb = function () {
		this.r("vjs-playing");
		this.p("vjs-paused");
		this.c.children[0].children[0].innerHTML = this.v("Play")
	};
	t.vb = t.a.extend({
		l: function (a, c) {
			t.a.call(this, a, c);
			this.b(a, "timeupdate", this.ga)
		}
	});
	t.vb.prototype.e = function () {
		var a = t.a.prototype.e.call(this, "div", {
			className: "vjs-current-time vjs-time-controls vjs-control"
		});
		this.B = t.e("div", {
			className: "vjs-current-time-display",
			innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
			"aria-live": "off"
		});
		a.appendChild(this.B);
		return a
	};
	t.vb.prototype.ga = function () {
		var a = this.d.ob ? this.d.K.currentTime : this.d.currentTime();
		this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Current Time") + "</span> " + t.Ma(a, this.d.duration())
	};
	t.wb = t.a.extend({
		l: function (a, c) {
			t.a.call(this, a, c);
			this.b(a, "timeupdate", this.ga);
			this.b(a, "loadedmetadata", this.ga)
		}
	});
	t.wb.prototype.e = function () {
		var a = t.a.prototype.e.call(this, "div", {
			className: "vjs-duration vjs-time-controls vjs-control"
		});
		this.B = t.e("div", {
			className: "vjs-duration-display",
			innerHTML: '<span class="vjs-control-text">' + this.v("Duration Time") + "</span> 0:00",
			"aria-live": "off"
		});
		a.appendChild(this.B);
		return a
	};
	t.wb.prototype.ga = function () {
		var a = this.d.duration();
		a && (this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Duration Time") + "</span> " + t.Ma(a))
	};
	t.tc = t.a.extend({
		l: function (a, c) {
			t.a.call(this, a, c)
		}
	});
	t.tc.prototype.e = function () {
		return t.a.prototype.e.call(this, "div", {
			className: "vjs-time-divider",
			innerHTML: "<div><span>/</span></div>"
		})
	};
	t.Db = t.a.extend({
		l: function (a, c) {
			t.a.call(this, a, c);
			this.b(a, "timeupdate", this.ga)
		}
	});
	t.Db.prototype.e = function () {
		var a = t.a.prototype.e.call(this, "div", {
			className: "vjs-remaining-time vjs-time-controls vjs-control"
		});
		this.B = t.e("div", {
			className: "vjs-remaining-time-display",
			innerHTML: '<span class="vjs-control-text">' + this.v("Remaining Time") + "</span> -0:00",
			"aria-live": "off"
		});
		a.appendChild(this.B);
		return a
	};
	t.Db.prototype.ga = function () {
		this.d.duration() && (this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Remaining Time") + "</span> -" + t.Ma(this.d.remainingTime()))
	};
	t.Za = t.w.extend({
		l: function (a, c) {
			t.w.call(this, a, c)
		}
	});
	t.Za.prototype.sa = "Fullscreen";
	t.Za.prototype.V = function () {
		return "vjs-fullscreen-control " + t.w.prototype.V.call(this)
	};
	t.Za.prototype.u = function () {
		this.d.isFullscreen() ? (this.d.exitFullscreen(), this.Jb.innerHTML = this.v("Fullscreen")) : (this.d.requestFullscreen(), this.Jb.innerHTML = this.v("Non-Fullscreen"))
	};
	t.Cb = t.a.extend({
		l: function (a, c) {
			t.a.call(this, a, c)
		}
	});
	t.Cb.prototype.q = {
		children: {
			seekBar: {}
		}
	};
	t.Cb.prototype.e = function () {
		return t.a.prototype.e.call(this, "div", {
			className: "vjs-progress-control vjs-control"
		})
	};
	t.qc = t.U.extend({
		l: function (a, c) {
			t.U.call(this, a, c);
			this.b(a, "timeupdate", this.Ca);
			a.I(t.bind(this, this.Ca))
		}
	});
	s = t.qc.prototype;
	s.q = {
		children: {
			loadProgressBar: {},
			playProgressBar: {},
			seekHandle: {}
		},
		barName: "playProgressBar",
		handleName: "seekHandle"
	};
	s.Yc = "timeupdate";
	s.e = function () {
		return t.U.prototype.e.call(this, "div", {
			className: "vjs-progress-holder",
			"aria-label": "video progress bar"
		})
	};
	s.Ca = function () {
		var a = this.d.ob ? this.d.K.currentTime : this.d.currentTime();
		this.c.setAttribute("aria-valuenow", t.round(100 * this.Sb(), 2));
		this.c.setAttribute("aria-valuetext", t.Ma(a, this.d.duration()))
	};
	s.Sb = function () {
		return this.d.currentTime() / this.d.duration()
	};
	s.mb = function (a) {
		t.U.prototype.mb.call(this, a);
		this.d.ob = f;
		this.d.p("vjs-scrubbing");
		this.df = !this.d.paused();
		this.d.pause()
	};
	s.la = function (a) {
		a = ea(this, a) * this.d.duration();
		a == this.d.duration() && (a -= 0.1);
		this.d.currentTime(a)
	};
	s.za = function (a) {
		t.U.prototype.za.call(this, a);
		this.d.ob = l;
		this.d.r("vjs-scrubbing");
		this.df && this.d.play()
	};
	s.kd = function () {
		this.d.currentTime(this.d.currentTime() + 5)
	};
	s.jd = function () {
		this.d.currentTime(this.d.currentTime() - 5)
	};
	t.zb = t.a.extend({
		l: function (a, c) {
			t.a.call(this, a, c);
			this.b(a, "progress", this.update)
		}
	});
	t.zb.prototype.e = function () {
		return t.a.prototype.e.call(this, "div", {
			className: "vjs-load-progress",
			innerHTML: '<span class="vjs-control-text"><span>' + this.v("Loaded") + "</span>: 0%</span>"
		})
	};
	t.zb.prototype.update = function () {
		var a, c, d, e, g = this.d.buffered();
		a = this.d.duration();
		var h, k = this.d;
		h = k.buffered();
		k = k.duration();
		h = h.end(h.length - 1);
		h > k && (h = k);
		k = this.c.children;
		this.c.style.width = 100 * (h / a || 0) + "%";
		for (a = 0; a < g.length; a++) c = g.start(a), d = g.end(a), (e = k[a]) || (e = this.c.appendChild(t.e())), e.style.left = 100 * (c / h || 0) + "%", e.style.width = 100 * ((d - c) / h || 0) + "%";
		for (a = k.length; a > g.length; a--) this.c.removeChild(k[a - 1])
	};
	t.mc = t.a.extend({
		l: function (a, c) {
			t.a.call(this, a, c)
		}
	});
	t.mc.prototype.e = function () {
		return t.a.prototype.e.call(this, "div", {
			className: "vjs-play-progress",
			innerHTML: '<span class="vjs-control-text"><span>' + this.v("Progress") + "</span>: 0%</span>"
		})
	};
	t.$a = t.ha.extend({
		l: function (a, c) {
			t.ha.call(this, a, c);
			this.b(a, "timeupdate", this.ga)
		}
	});
	t.$a.prototype.defaultValue = "00:00";
	t.$a.prototype.e = function () {
		return t.ha.prototype.e.call(this, "div", {
			className: "vjs-seek-handle",
			"aria-live": "off"
		})
	};
	t.$a.prototype.ga = function () {
		var a = this.d.ob ? this.d.K.currentTime : this.d.currentTime();
		this.c.innerHTML = '<span class="vjs-control-text">' + t.Ma(a, this.d.duration()) + "</span>"
	};
	t.Gb = t.a.extend({
		l: function (a, c) {
			t.a.call(this, a, c);
			a.h && a.h.featuresVolumeControl === l && this.p("vjs-hidden");
			this.b(a, "loadstart", function () {
				a.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
			})
		}
	});
	t.Gb.prototype.q = {
		children: {
			volumeBar: {}
		}
	};
	t.Gb.prototype.e = function () {
		return t.a.prototype.e.call(this, "div", {
			className: "vjs-volume-control vjs-control"
		})
	};
	t.Fb = t.U.extend({
		l: function (a, c) {
			t.U.call(this, a, c);
			this.b(a, "volumechange", this.Ca);
			a.I(t.bind(this, this.Ca))
		}
	});
	s = t.Fb.prototype;
	s.Ca = function () {
		this.c.setAttribute("aria-valuenow", t.round(100 * this.d.volume(), 2));
		this.c.setAttribute("aria-valuetext", t.round(100 * this.d.volume(), 2) + "%")
	};
	s.q = {
		children: {
			volumeLevel: {},
			volumeHandle: {}
		},
		barName: "volumeLevel",
		handleName: "volumeHandle"
	};
	s.Yc = "volumechange";
	s.e = function () {
		return t.U.prototype.e.call(this, "div", {
			className: "vjs-volume-bar",
			"aria-label": "volume level"
		})
	};
	s.la = function (a) {
		this.d.muted() && this.d.muted(l);
		this.d.volume(ea(this, a))
	};
	s.Sb = function () {
		return this.d.muted() ? 0 : this.d.volume()
	};
	s.kd = function () {
		this.d.volume(this.d.volume() + 0.1)
	};
	s.jd = function () {
		this.d.volume(this.d.volume() - 0.1)
	};
	t.uc = t.a.extend({
		l: function (a, c) {
			t.a.call(this, a, c)
		}
	});
	t.uc.prototype.e = function () {
		return t.a.prototype.e.call(this, "div", {
			className: "vjs-volume-level",
			innerHTML: '<span class="vjs-control-text"></span>'
		})
	};
	t.Hb = t.ha.extend();
	t.Hb.prototype.defaultValue = "00:00";
	t.Hb.prototype.e = function () {
		return t.ha.prototype.e.call(this, "div", {
			className: "vjs-volume-handle"
		})
	};
	t.qa = t.w.extend({
		l: function (a, c) {
			t.w.call(this, a, c);
			this.b(a, "volumechange", this.update);
			a.h && a.h.featuresVolumeControl === l && this.p("vjs-hidden");
			this.b(a, "loadstart", function () {
				a.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
			})
		}
	});
	t.qa.prototype.e = function () {
		return t.w.prototype.e.call(this, "div", {
			className: "vjs-mute-control vjs-control",
			innerHTML: '<div><span class="vjs-control-text">' + this.v("Mute") + "</span></div>"
		})
	};
	t.qa.prototype.u = function () {
		this.d.muted(this.d.muted() ? l : f)
	};
	t.qa.prototype.update = function () {
		var a = this.d.volume(),
			c = 3;
		0 === a || this.d.muted() ? c = 0 : 0.33 > a ? c = 1 : 0.67 > a && (c = 2);
		this.d.muted() ? this.c.children[0].children[0].innerHTML != this.v("Unmute") && (this.c.children[0].children[0].innerHTML = this.v("Unmute")) : this.c.children[0].children[0].innerHTML != this.v("Mute") && (this.c.children[0].children[0].innerHTML = this.v("Mute"));
		for (a = 0; 4 > a; a++) t.r(this.c, "vjs-vol-" + a);
		t.p(this.c, "vjs-vol-" + c)
	};
	t.Fa = t.O.extend({
		l: function (a, c) {
			t.O.call(this, a, c);
			this.b(a, "volumechange", this.ef);
			a.h && a.h.featuresVolumeControl === l && this.p("vjs-hidden");
			this.b(a, "loadstart", function () {
				a.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
			});
			this.p("vjs-menu-button")
		}
	});
	t.Fa.prototype.Ja = function () {
		var a = new t.pa(this.d, {
				Cc: "div"
			}),
			c = new t.Fb(this.d, this.q.volumeBar);
		c.b("focus", function () {
			a.p("vjs-lock-showing")
		});
		c.b("blur", function () {
			G(a)
		});
		a.ba(c);
		return a
	};
	t.Fa.prototype.u = function () {
		t.qa.prototype.u.call(this);
		t.O.prototype.u.call(this)
	};
	t.Fa.prototype.e = function () {
		return t.w.prototype.e.call(this, "div", {
			className: "vjs-volume-menu-button vjs-menu-button vjs-control",
			innerHTML: '<div><span class="vjs-control-text">' + this.v("Mute") + "</span></div>"
		})
	};
	t.Fa.prototype.ef = t.qa.prototype.update;
	t.oc = t.O.extend({
		l: function (a, c) {
			t.O.call(this, a, c);
			this.sd();
			this.rd();
			this.b(a, "loadstart", this.sd);
			this.b(a, "ratechange", this.rd)
		}
	});
	s = t.oc.prototype;
	s.sa = "Playback Rate";
	s.className = "vjs-playback-rate";
	s.e = function () {
		var a = t.O.prototype.e.call(this);
		this.Sc = t.e("div", {
			className: "vjs-playback-rate-value",
			innerHTML: 1
		});
		a.appendChild(this.Sc);
		return a
	};
	s.Ja = function () {
		var a = new t.pa(this.k()),
			c = this.k().options().playbackRates;
		if (c)
			for (var d = c.length - 1; 0 <= d; d--) a.ba(new t.Bb(this.k(), {
				rate: c[d] + "x"
			}));
		return a
	};
	s.Ca = function () {
		this.m().setAttribute("aria-valuenow", this.k().playbackRate())
	};
	s.u = function () {
		for (var a = this.k().playbackRate(), c = this.k().options().playbackRates, d = c[0], e = 0; e < c.length; e++)
			if (c[e] > a) {
				d = c[e];
				break
			}
		this.k().playbackRate(d)
	};

	function na(a) {
		return a.k().h && a.k().h.featuresPlaybackRate && a.k().options().playbackRates && 0 < a.k().options().playbackRates.length
	}
	s.sd = function () {
		na(this) ? this.r("vjs-hidden") : this.p("vjs-hidden")
	};
	s.rd = function () {
		na(this) && (this.Sc.innerHTML = this.k().playbackRate() + "x")
	};
	t.Bb = t.M.extend({
		Cc: "button",
		l: function (a, c) {
			var d = this.label = c.rate,
				e = this.$c = parseFloat(d, 10);
			c.label = d;
			c.selected = 1 === e;
			t.M.call(this, a, c);
			this.b(a, "ratechange", this.update)
		}
	});
	t.Bb.prototype.u = function () {
		t.M.prototype.u.call(this);
		this.k().playbackRate(this.$c)
	};
	t.Bb.prototype.update = function () {
		this.selected(this.k().playbackRate() == this.$c)
	};
	t.pc = t.w.extend({
		l: function (a, c) {
			t.w.call(this, a, c);
			this.update();
			a.b("posterchange", t.bind(this, this.update))
		}
	});
	s = t.pc.prototype;
	s.dispose = function () {
		this.k().n("posterchange", this.update);
		t.w.prototype.dispose.call(this)
	};
	s.e = function () {
		var a = t.e("div", {
			className: "vjs-poster",
			tabIndex: -1
		});
		t.wd || (this.Ob = t.e("img"), a.appendChild(this.Ob));
		return a
	};
	s.update = function () {
		var a = this.k().poster();
		this.ma(a);
		a ? this.show() : this.Y()
	};
	s.ma = function (a) {
		var c;
		this.Ob ? this.Ob.src = a : (c = "", a && (c = 'url("' + a + '")'), this.c.style.backgroundImage = c)
	};
	s.u = function () {
		this.d.play()
	};
	t.lc = t.a.extend({
		l: function (a, c) {
			t.a.call(this, a, c)
		}
	});
	t.lc.prototype.e = function () {
		return t.a.prototype.e.call(this, "div", {
			className: "vjs-loading-spinner"
		})
	};
	t.sb = t.w.extend();
	t.sb.prototype.e = function () {
		return t.w.prototype.e.call(this, "div", {
			className: "vjs-big-play-button",
			innerHTML: '<span aria-hidden="true"></span>',
			"aria-label": "play video"
		})
	};
	t.sb.prototype.u = function () {
		this.d.play()
	};
	t.xb = t.a.extend({
		l: function (a, c) {
			t.a.call(this, a, c);
			this.update();
			this.b(a, "error", this.update)
		}
	});
	t.xb.prototype.e = function () {
		var a = t.a.prototype.e.call(this, "div", {
			className: "vjs-error-display"
		});
		this.B = t.e("div");
		a.appendChild(this.B);
		return a
	};
	t.xb.prototype.update = function () {
		this.k().error() && (this.B.innerHTML = this.v(this.k().error().message))
	};
	var O;
	t.j = t.a.extend({
		l: function (a, c, d) {
			c = c || {};
			c.dd = l;
			t.a.call(this, a, c, d);
			this.featuresProgressEvents || this.re();
			this.featuresTimeupdateEvents || this.se();
			this.fe();
			this.featuresNativeTextTracks || this.Vd();
			this.he()
		}
	});
	s = t.j.prototype;
	s.fe = function () {
		var a, c;
		a = this.k();
		c = function () {
			a.controls() && !a.usingNativeControls() && this.Id()
		};
		this.I(c);
		this.b(a, "controlsenabled", c);
		this.b(a, "controlsdisabled", this.He);
		this.I(function () {
			this.networkState && 0 < this.networkState() && this.k().o("loadstart")
		})
	};
	s.Id = function () {
		var a;
		this.b("mousedown", this.u);
		this.b("touchstart", function () {
			a = this.d.userActive()
		});
		this.b("touchmove", function () {
			a && this.k().reportUserActivity()
		});
		this.b("touchend", function (a) {
			a.preventDefault()
		});
		da(this);
		this.b("tap", this.Be)
	};
	s.He = function () {
		this.n("tap");
		this.n("touchstart");
		this.n("touchmove");
		this.n("touchleave");
		this.n("touchcancel");
		this.n("touchend");
		this.n("click");
		this.n("mousedown")
	};
	s.u = function (a) {
		0 === a.button && this.k().controls() && (this.k().paused() ? this.k().play() : this.k().pause())
	};
	s.Be = function () {
		this.k().userActive(!this.k().userActive())
	};
	s.re = function () {
		this.Uc = f;
		this.$e()
	};
	s.qe = function () {
		this.Uc = l;
		this.ld()
	};
	s.$e = function () {
		this.Ge = this.setInterval(function () {
			var a = this.k().bufferedPercent();
			this.Md != a && this.k().o("progress");
			this.Md = a;
			1 === a && this.ld()
		}, 500)
	};
	s.ld = function () {
		this.clearInterval(this.Ge)
	};
	s.se = function () {
		var a = this.d;
		this.Yb = f;
		this.b(a, "play", this.pd);
		this.b(a, "pause", this.rb);
		this.N("timeupdate", function () {
			this.featuresTimeupdateEvents = f;
			this.Vc()
		})
	};
	s.Vc = function () {
		var a = this.d;
		this.Yb = l;
		this.rb();
		this.n(a, "play", this.pd);
		this.n(a, "pause", this.rb)
	};
	s.pd = function () {
		this.Fc && this.rb();
		this.Fc = this.setInterval(function () {
			this.k().o("timeupdate")
		}, 250)
	};
	s.rb = function () {
		this.clearInterval(this.Fc);
		this.k().o("timeupdate")
	};
	s.dispose = function () {
		this.Uc && this.qe();
		this.Yb && this.Vc();
		t.a.prototype.dispose.call(this)
	};
	s.bc = function () {
		this.Yb && this.k().o("timeupdate")
	};
	s.he = function () {
		function a() {
			var a = c.ea("textTrackDisplay");
			a && a.C()
		}
		var c = this.d,
			d;
		if (d = this.textTracks()) d.addEventListener("removetrack", a), d.addEventListener("addtrack", a), this.b("dispose", t.bind(this, function () {
			d.removeEventListener("removetrack", a);
			d.removeEventListener("addtrack", a)
		}))
	};
	s.Vd = function () {
		var a = this.d,
			c, d, e;
		window.WebVTT || (e = document.createElement("script"), e.src = a.options()["vtt.js"] || "../node_modules/vtt.js/dist/vtt.js", a.m().appendChild(e), window.WebVTT = f);
		if (d = this.textTracks()) c = function () {
			var c, d, e;
			e = a.ea("textTrackDisplay");
			e.C();
			for (c = 0; c < this.length; c++) d = this[c], d.removeEventListener("cuechange", t.bind(e, e.C)), "showing" === d.mode && d.addEventListener("cuechange", t.bind(e, e.C))
		}, d.addEventListener("change", c), this.b("dispose", t.bind(this, function () {
			d.removeEventListener("change",
				c)
		}))
	};
	s.textTracks = function () {
		this.d.od = this.d.od || new t.F;
		return this.d.od
	};
	s.Z = function () {
		this.d.ad = this.d.ad || new t.F;
		return this.d.ad
	};
	O = function (a, c, d, e, g) {
		var h = a.textTracks();
		g = g || {};
		g.kind = c;
		d && (g.label = d);
		e && (g.language = e);
		g.player = a.d;
		a = new t.t(g);
		P(h, a);
		return a
	};
	t.j.prototype.addTextTrack = function (a, c, d) {
		if (!a) throw Error("TextTrack kind is required but was not provided");
		return O(this, a, c, d)
	};
	t.j.prototype.ia = function (a) {
		a = O(this, a.kind, a.label, a.language, a);
		P(this.Z(), a);
		return {
			T: a
		}
	};
	t.j.prototype.Ba = function (a) {
		Q(this.textTracks(), a);
		Q(this.Z(), a)
	};
	t.j.prototype.fd = m();
	t.j.prototype.featuresVolumeControl = f;
	t.j.prototype.featuresFullscreenResize = l;
	t.j.prototype.featuresPlaybackRate = l;
	t.j.prototype.featuresProgressEvents = l;
	t.j.prototype.featuresTimeupdateEvents = l;
	t.j.prototype.featuresNativeTextTracks = l;
	t.j.gc = function (a) {
		a.Ra = function (c, d) {
			var e = a.gd;
			e || (e = a.gd = []);
			d === b && (d = e.length);
			e.splice(d, 0, c)
		};
		a.pb = function (c) {
			for (var d = a.gd || [], e, g = 0; g < d.length; g++)
				if (e = d[g].eb(c)) return d[g];
			return j
		};
		a.zc = function (c) {
			var d = a.pb(c);
			return d ? d.eb(c) : ""
		};
		a.prototype.Sa = function (c) {
			var d = a.pb(c);
			d || (a.S ? d = a.S : t.log.error("No source hander found for the current source."));
			this.Ka();
			this.n("dispose", this.Ka);
			this.Ec = c;
			this.cc = d.Tb(c, this);
			this.b("dispose", this.Ka);
			return this
		};
		a.prototype.Ka = function () {
			this.cc &&
				this.cc.dispose && this.cc.dispose()
		}
	};
	t.media = {};
	t.f = t.j.extend({
		l: function (a, c, d) {
			var e, g, h;
			if (c.nativeCaptions === l || c.nativeTextTracks === l) this.featuresNativeTextTracks = l;
			t.j.call(this, a, c, d);
			for (d = t.f.yb.length - 1; 0 <= d; d--) this.b(t.f.yb[d], this.Wd);
			(c = c.source) && (this.c.currentSrc !== c.src || a.L && 3 === a.L.ge) && this.Sa(c);
			if (this.c.hasChildNodes()) {
				d = this.c.childNodes;
				e = d.length;
				for (c = []; e--;) g = d[e], h = g.nodeName.toLowerCase(), "track" === h && (this.featuresNativeTextTracks ? P(this.Z(), g.track) : c.push(g));
				for (d = 0; d < c.length; d++) this.c.removeChild(c[d])
			}
			this.featuresNativeTextTracks &&
				this.b("loadstart", t.bind(this, this.ee));
			if (t.Eb && a.options().nativeControlsForTouch === f) {
				var k, p, r, u;
				k = this;
				p = this.k();
				c = p.controls();
				k.c.controls = !!c;
				r = function () {
					k.c.controls = f
				};
				u = function () {
					k.c.controls = l
				};
				p.b("controlsenabled", r);
				p.b("controlsdisabled", u);
				c = function () {
					p.n("controlsenabled", r);
					p.n("controlsdisabled", u)
				};
				k.b("dispose", c);
				p.b("usingcustomcontrols", c);
				p.usingNativeControls(f)
			}
			a.I(function () {
				this.src() && (this.L && this.q.autoplay && this.paused()) && (delete this.L.poster, this.play())
			});
			this.Wa()
		}
	});
	s = t.f.prototype;
	s.dispose = function () {
		t.f.Mb(this.c);
		t.j.prototype.dispose.call(this)
	};
	s.e = function () {
		var a = this.d,
			c, d, e, g = a.L;
		if (!g || this.movingMediaElementInDOM === l) {
			g ? (e = g.cloneNode(l), t.f.Mb(g), g = e, a.L = j) : (g = t.e("video"), e = videojs.$.ya({}, a.Xe), (!t.Eb || a.options().nativeControlsForTouch !== f) && delete e.controls, t.ed(g, t.i.D(e, {
				id: a.id() + "_html5_api",
				"class": "vjs-tech"
			})));
			g.player = a;
			if (a.q.qd)
				for (e = 0; e < a.q.qd.length; e++) c = a.q.qd[e], d = document.createElement("track"), d.Wb = c.Wb, d.label = c.label, d.hd = c.hd, d.src = c.src, "default" in c && d.setAttribute("default", "default"), g.appendChild(d);
			t.Ub(g, a.m())
		}
		c = ["autoplay", "preload", "loop", "muted"];
		for (e = c.length - 1; 0 <= e; e--) {
			d = c[e];
			var h = {};
			"undefined" !== typeof a.q[d] && (h[d] = a.q[d]);
			t.ed(g, h)
		}
		return g
	};
	s.ee = function () {
		for (var a = this.c.querySelectorAll("track"), c, d = a.length, e = {
				captions: 1,
				subtitles: 1
			}; d--;)
			if ((c = a[d].T) && c.kind in e && !a[d]["default"]) c.mode = "disabled"
	};
	s.Wd = function (a) {
		"error" == a.type && this.error() ? this.k().error(this.error().code) : (a.bubbles = l, this.k().o(a))
	};
	s.play = function () {
		this.c.play()
	};
	s.pause = function () {
		this.c.pause()
	};
	s.paused = function () {
		return this.c.paused
	};
	s.currentTime = function () {
		return this.c.currentTime
	};
	s.bc = function (a) {
		try {
			this.c.currentTime = a
		} catch (c) {
			t.log(c, "Video is not ready. (Video.js)")
		}
	};
	s.duration = function () {
		return this.c.duration || 0
	};
	s.buffered = function () {
		return this.c.buffered
	};
	s.volume = function () {
		return this.c.volume
	};
	s.Se = function (a) {
		this.c.volume = a
	};
	s.muted = function () {
		return this.c.muted
	};
	s.Oe = function (a) {
		this.c.muted = a
	};
	s.width = function () {
		return this.c.offsetWidth
	};
	s.height = function () {
		return this.c.offsetHeight
	};
	s.Ta = function () {
		return "function" == typeof this.c.webkitEnterFullScreen && (/Android/.test(t.P) || !/Chrome|Mac OS X 10.5/.test(t.P)) ? f : l
	};
	s.Ic = function () {
		var a = this.c;
		"webkitDisplayingFullscreen" in a && this.N("webkitbeginfullscreen", function () {
			this.d.isFullscreen(f);
			this.N("webkitendfullscreen", function () {
				this.d.isFullscreen(l);
				this.d.o("fullscreenchange")
			});
			this.d.o("fullscreenchange")
		});
		a.paused && a.networkState <= a.jf ? (this.c.play(), this.setTimeout(function () {
			a.pause();
			a.webkitEnterFullScreen()
		}, 0)) : a.webkitEnterFullScreen()
	};
	s.Xd = function () {
		this.c.webkitExitFullScreen()
	};
	s.src = function (a) {
		if (a === b) return this.c.src;
		this.ma(a)
	};
	s.ma = function (a) {
		this.c.src = a
	};
	s.load = function () {
		this.c.load()
	};
	s.currentSrc = function () {
		return this.c.currentSrc
	};
	s.poster = function () {
		return this.c.poster
	};
	s.fd = function (a) {
		this.c.poster = a
	};
	s.Qa = function () {
		return this.c.Qa
	};
	s.Qe = function (a) {
		this.c.Qa = a
	};
	s.autoplay = function () {
		return this.c.autoplay
	};
	s.Le = function (a) {
		this.c.autoplay = a
	};
	s.controls = function () {
		return this.c.controls
	};
	s.loop = function () {
		return this.c.loop
	};
	s.Ne = function (a) {
		this.c.loop = a
	};
	s.error = function () {
		return this.c.error
	};
	s.seeking = function () {
		return this.c.seeking
	};
	s.ended = function () {
		return this.c.ended
	};
	s.playbackRate = function () {
		return this.c.playbackRate
	};
	s.Pe = function (a) {
		this.c.playbackRate = a
	};
	s.networkState = function () {
		return this.c.networkState
	};
	s.readyState = function () {
		return this.c.readyState
	};
	s.textTracks = function () {
		return !this.featuresNativeTextTracks ? t.j.prototype.textTracks.call(this) : this.c.textTracks
	};
	s.addTextTrack = function (a, c, d) {
		return !this.featuresNativeTextTracks ? t.j.prototype.addTextTrack.call(this, a, c, d) : this.c.addTextTrack(a, c, d)
	};
	s.ia = function (a) {
		if (!this.featuresNativeTextTracks) return t.j.prototype.ia.call(this, a);
		var c = document.createElement("track");
		a = a || {};
		a.kind && (c.kind = a.kind);
		a.label && (c.label = a.label);
		if (a.language || a.srclang) c.srclang = a.language || a.srclang;
		a["default"] && (c["default"] = a["default"]);
		a.id && (c.id = a.id);
		a.src && (c.src = a.src);
		this.m().appendChild(c);
		c.track.mode = "metadata" === c.T.kind ? "hidden" : "disabled";
		c.onload = function () {
			var a = c.track;
			2 <= c.readyState && ("metadata" === a.kind && "hidden" !== a.mode ? a.mode = "hidden" :
				"metadata" !== a.kind && "disabled" !== a.mode && (a.mode = "disabled"), c.onload = j)
		};
		P(this.Z(), c.T);
		return c
	};
	s.Ba = function (a) {
		if (!this.featuresNativeTextTracks) return t.j.prototype.Ba.call(this, a);
		var c, d;
		Q(this.Z(), a);
		c = this.m().querySelectorAll("track");
		for (d = 0; d < c.length; d++)
			if (c[d] === a || c[d].track === a) {
				c[d].parentNode.removeChild(c[d]);
				break
			}
	};
	t.f.isSupported = function () {
		try {
			t.A.volume = 0.5
		} catch (a) {
			return l
		}
		return !!t.A.canPlayType
	};
	t.j.gc(t.f);
	t.f.S = {};
	t.f.S.eb = function (a) {
		function c(a) {
			try {
				return t.A.canPlayType(a)
			} catch (c) {
				return ""
			}
		}
		return a.type ? c(a.type) : a.src ? (a = (a = a.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i)) && a[1], c("video/" + a)) : ""
	};
	t.f.S.Tb = function (a, c) {
		c.ma(a.src)
	};
	t.f.S.dispose = m();
	t.f.Ra(t.f.S);
	t.f.Od = function () {
		var a = t.A.volume;
		t.A.volume = a / 2 + 0.1;
		return a !== t.A.volume
	};
	t.f.Nd = function () {
		var a = t.A.playbackRate;
		t.A.playbackRate = a / 2 + 0.1;
		return a !== t.A.playbackRate
	};
	t.f.Ve = function () {
		var a;
		(a = !!t.A.textTracks) && 0 < t.A.textTracks.length && (a = "number" !== typeof t.A.textTracks[0].mode);
		a && t.jc && (a = l);
		return a
	};
	t.f.prototype.featuresVolumeControl = t.f.Od();
	t.f.prototype.featuresPlaybackRate = t.f.Nd();
	t.f.prototype.movingMediaElementInDOM = !t.Ad;
	t.f.prototype.featuresFullscreenResize = f;
	t.f.prototype.featuresProgressEvents = f;
	t.f.prototype.featuresNativeTextTracks = t.f.Ve();
	var S, oa = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
		pa = /^video\/mp4/i;
	t.f.Xc = function () {
		4 <= t.hc && (S || (S = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function (a) {
			return a && oa.test(a) ? "maybe" : S.call(this, a)
		});
		t.Ed && (S || (S = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function (a) {
			return a && pa.test(a) ? "maybe" : S.call(this, a)
		})
	};
	t.f.bf = function () {
		var a = t.A.constructor.prototype.canPlayType;
		t.A.constructor.prototype.canPlayType = S;
		S = j;
		return a
	};
	t.f.Xc();
	t.f.yb = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
	t.f.Mb = function (a) {
		if (a) {
			a.player = j;
			for (a.parentNode && a.parentNode.removeChild(a); a.hasChildNodes();) a.removeChild(a.firstChild);
			a.removeAttribute("src");
			if ("function" === typeof a.load) try {
				a.load()
			} catch (c) {}
		}
	};
	t.g = t.j.extend({
		l: function (a, c, d) {
			t.j.call(this, a, c, d);
			var e = c.source;
			d = a.id() + "_flash_api";
			var g = a.q,
				g = t.i.D({
					readyFunction: "videojs.Flash.onReady",
					eventProxyFunction: "videojs.Flash.onEvent",
					errorEventProxyFunction: "videojs.Flash.onError",
					autoplay: g.autoplay,
					preload: g.Qa,
					loop: g.loop,
					muted: g.muted
				}, c.flashVars),
				h = t.i.D({
					wmode: "opaque",
					bgcolor: "#000000"
				}, c.params);
			d = t.i.D({
				id: d,
				name: d,
				"class": "vjs-tech"
			}, c.attributes);
			e && this.I(function () {
				this.Sa(e)
			});
			t.Ub(this.c, c.parentEl);
			c.startTime && this.I(function () {
				this.load();
				this.play();
				this.currentTime(c.startTime)
			});
			t.jc && this.I(function () {
				this.b("mousemove", function () {
					this.k().o({
						type: "mousemove",
						bubbles: l
					})
				})
			});
			a.b("stageclick", a.reportUserActivity);
			this.c = t.g.Hc(c.swf, this.c, g, h, d)
		}
	});
	s = t.g.prototype;
	s.dispose = function () {
		t.j.prototype.dispose.call(this)
	};
	s.play = function () {
		this.c.vjs_play()
	};
	s.pause = function () {
		this.c.vjs_pause()
	};
	s.src = function (a) {
		return a === b ? this.currentSrc() : this.ma(a)
	};
	s.ma = function (a) {
		a = t.$d(a);
		this.c.vjs_src(a);
		if (this.d.autoplay()) {
			var c = this;
			this.setTimeout(function () {
				c.play()
			}, 0)
		}
	};
	t.g.prototype.setCurrentTime = function (a) {
		this.oe = a;
		this.c.vjs_setProperty("currentTime", a);
		t.j.prototype.bc.call(this)
	};
	t.g.prototype.currentTime = function () {
		return this.seeking() ? this.oe || 0 : this.c.vjs_getProperty("currentTime")
	};
	t.g.prototype.currentSrc = function () {
		return this.Ec ? this.Ec.src : this.c.vjs_getProperty("currentSrc")
	};
	t.g.prototype.load = function () {
		this.c.vjs_load()
	};
	t.g.prototype.poster = function () {
		this.c.vjs_getProperty("poster")
	};
	t.g.prototype.setPoster = m();
	t.g.prototype.buffered = function () {
		return t.Lb(0, this.c.vjs_getProperty("buffered"))
	};
	t.g.prototype.Ta = q(l);
	t.g.prototype.Ic = q(l);

	function qa() {
		var a = T[U],
			c = a.charAt(0).toUpperCase() + a.slice(1);
		ra["set" + c] = function (c) {
			return this.c.vjs_setProperty(a, c)
		}
	}

	function sa(a) {
		ra[a] = function () {
			return this.c.vjs_getProperty(a)
		}
	}
	var ra = t.g.prototype,
		T = "rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
		ta = "error networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight".split(" "),
		U;
	for (U = 0; U < T.length; U++) sa(T[U]), qa();
	for (U = 0; U < ta.length; U++) sa(ta[U]);
	t.g.isSupported = function () {
		return 10 <= t.g.version()[0]
	};
	t.j.gc(t.g);
	t.g.S = {};
	t.g.S.eb = function (a) {
		return !a.type ? "" : a.type.replace(/;.*/, "").toLowerCase() in t.g.Zd ? "maybe" : ""
	};
	t.g.S.Tb = function (a, c) {
		c.ma(a.src)
	};
	t.g.S.dispose = m();
	t.g.Ra(t.g.S);
	t.g.Zd = {
		"video/flv": "FLV",
		"video/x-flv": "FLV",
		"video/mp4": "MP4",
		"video/m4v": "MP4"
	};
	t.g.onReady = function (a) {
		var c;
		if (c = (a = t.m(a)) && a.parentNode && a.parentNode.player) a.player = c, t.g.checkReady(c.h)
	};
	t.g.checkReady = function (a) {
		a.m() && (a.m().vjs_getProperty ? a.Wa() : this.setTimeout(function () {
			t.g.checkReady(a)
		}, 50))
	};
	t.g.onEvent = function (a, c) {
		t.m(a).player.o(c)
	};
	t.g.onError = function (a, c) {
		var d = t.m(a).player,
			e = "FLASH: " + c;
		"srcnotfound" == c ? d.error({
			code: 4,
			message: e
		}) : d.error(e)
	};
	t.g.version = function () {
		var a = "0,0,0";
		try {
			a = (new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
		} catch (c) {
			try {
				navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (a = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
			} catch (d) {}
		}
		return a.split(",")
	};
	t.g.Hc = function (a, c, d, e, g) {
		a = t.g.ce(a, d, e, g);
		a = t.e("div", {
			innerHTML: a
		}).childNodes[0];
		d = c.parentNode;
		c.parentNode.replaceChild(a, c);
		a[t.expando] = c[t.expando];
		var h = d.childNodes[0];
		setTimeout(function () {
			h.style.display = "block"
		}, 1E3);
		return a
	};
	t.g.ce = function (a, c, d, e) {
		var g = "",
			h = "",
			k = "";
		c && t.i.da(c, function (a, c) {
			g += a + "=" + c + "&amp;"
		});
		d = t.i.D({
			movie: a,
			flashvars: g,
			allowScriptAccess: "always",
			allowNetworking: "all"
		}, d);
		t.i.da(d, function (a, c) {
			h += '<param name="' + a + '" value="' + c + '" />'
		});
		e = t.i.D({
			data: a,
			width: "100%",
			height: "100%"
		}, e);
		t.i.da(e, function (a, c) {
			k += a + '="' + c + '" '
		});
		return '<object type="application/x-shockwave-flash" ' + k + ">" + h + "</object>"
	};
	t.g.Ue = {
		"rtmp/mp4": "MP4",
		"rtmp/flv": "FLV"
	};
	t.g.Hf = function (a, c) {
		return a + "&" + c
	};
	t.g.Te = function (a) {
		var c = {
			Bc: "",
			md: ""
		};
		if (!a) return c;
		var d = a.indexOf("&"),
			e; - 1 !== d ? e = d + 1 : (d = e = a.lastIndexOf("/") + 1, 0 === d && (d = e = a.length));
		c.Bc = a.substring(0, d);
		c.md = a.substring(e, a.length);
		return c
	};
	t.g.me = function (a) {
		return a in t.g.Ue
	};
	t.g.Gd = /^rtmp[set]?:\/\//i;
	t.g.le = function (a) {
		return t.g.Gd.test(a)
	};
	t.g.ac = {};
	t.g.ac.eb = function (a) {
		return t.g.me(a.type) || t.g.le(a.src) ? "maybe" : ""
	};
	t.g.ac.Tb = function (a, c) {
		var d = t.g.Te(a.src);
		c.setRtmpConnection(d.Bc);
		c.setRtmpStream(d.md)
	};
	t.g.Ra(t.g.ac);
	t.Fd = t.a.extend({
		l: function (a, c, d) {
			t.a.call(this, a, c, d);
			if (!a.q.sources || 0 === a.q.sources.length) {
				c = 0;
				for (d = a.q.techOrder; c < d.length; c++) {
					var e = t.ua(d[c]),
						g = window.videojs[e];
					if (g && g.isSupported()) {
						ka(a, e);
						break
					}
				}
			} else a.src(a.q.sources)
		}
	});
	t.rc = {
		disabled: "disabled",
		hidden: "hidden",
		showing: "showing"
	};
	t.Hd = {
		subtitles: "subtitles",
		captions: "captions",
		descriptions: "descriptions",
		chapters: "chapters",
		metadata: "metadata"
	};
	t.t = function (a) {
		var c, d, e, g, h, k, p, r, u, A, R;
		a = a || {};
		if (!a.player) throw Error("A player was not provided.");
		c = this;
		if (t.oa)
			for (R in c = document.createElement("custom"), t.t.prototype) c[R] = t.t.prototype[R];
		c.d = a.player;
		e = t.rc[a.mode] || "disabled";
		g = t.Hd[a.kind] || "subtitles";
		h = a.label || "";
		k = a.language || a.srclang || "";
		d = a.id || "vjs_text_track_" + t.s++;
		if ("metadata" === g || "chapters" === g) e = "hidden";
		c.X = [];
		c.Ga = [];
		p = new t.W(c.X);
		r = new t.W(c.Ga);
		A = l;
		u = t.bind(c, function () {
			this.activeCues;
			A && (this.trigger("cuechange"),
				A = l)
		});
		"disabled" !== e && c.d.b("timeupdate", u);
		Object.defineProperty(c, "kind", {
			get: function () {
				return g
			},
			set: Function.prototype
		});
		Object.defineProperty(c, "label", {
			get: function () {
				return h
			},
			set: Function.prototype
		});
		Object.defineProperty(c, "language", {
			get: function () {
				return k
			},
			set: Function.prototype
		});
		Object.defineProperty(c, "id", {
			get: function () {
				return d
			},
			set: Function.prototype
		});
		Object.defineProperty(c, "mode", {
			get: function () {
				return e
			},
			set: function (a) {
				t.rc[a] && (e = a, "showing" === e && this.d.b("timeupdate", u),
					this.o("modechange"))
			}
		});
		Object.defineProperty(c, "cues", {
			get: function () {
				return !this.Xb ? j : p
			},
			set: Function.prototype
		});
		Object.defineProperty(c, "activeCues", {
			get: function () {
				var a, c, d, e, g;
				if (!this.Xb) return j;
				if (0 === this.cues.length) return r;
				e = this.d.currentTime();
				a = 0;
				c = this.cues.length;
				for (d = []; a < c; a++) g = this.cues[a], g.startTime <= e && g.endTime >= e ? d.push(g) : g.startTime === g.endTime && (g.startTime <= e && g.startTime + 0.5 >= e) && d.push(g);
				A = l;
				if (d.length !== this.Ga.length) A = f;
				else
					for (a = 0; a < d.length; a++) - 1 === ua.call(this.Ga,
						d[a]) && (A = f);
				this.Ga = d;
				r.qb(this.Ga);
				return r
			},
			set: Function.prototype
		});
		a.src ? va(a.src, c) : c.Xb = f;
		if (t.oa) return c
	};
	t.t.prototype = t.i.create(t.z.prototype);
	t.t.prototype.constructor = t.t;
	t.t.prototype.bb = {
		cuechange: "cuechange"
	};
	t.t.prototype.vc = function (a) {
		var c = this.d.textTracks(),
			d = 0;
		if (c)
			for (; d < c.length; d++) c[d] !== this && c[d].bd(a);
		this.X.push(a);
		this.cues.qb(this.X)
	};
	t.t.prototype.bd = function (a) {
		for (var c = 0, d = this.X.length, e, g = l; c < d; c++) e = this.X[c], e === a && (this.X.splice(c, 1), g = f);
		g && this.Dc.qb(this.X)
	};
	var va, V, ua;
	va = function (a, c) {
		t.ff(a, t.bind(this, function (a, e, g) {
			if (a) return t.log.error(a);
			c.Xb = f;
			V(g, c)
		}))
	};
	V = function (a, c) {
		if ("function" !== typeof window.WebVTT) window.setTimeout(function () {
			V(a, c)
		}, 25);
		else {
			var d = new window.WebVTT.Parser(window, window.vttjs, window.WebVTT.StringDecoder());
			d.oncue = function (a) {
				c.vc(a)
			};
			d.onparsingerror = function (a) {
				t.log.error(a)
			};
			d.parse(a);
			d.flush()
		}
	};
	ua = function (a, c) {
		var d;
		if (this == j) throw new TypeError('"this" is null or not defined');
		var e = Object(this),
			g = e.length >>> 0;
		if (0 === g) return -1;
		d = +c || 0;
		Infinity === Math.abs(d) && (d = 0);
		if (d >= g) return -1;
		for (d = Math.max(0 <= d ? d : g - Math.abs(d), 0); d < g;) {
			if (d in e && e[d] === a) return d;
			d++
		}
		return -1
	};
	t.F = function (a) {
		var c = this,
			d, e = 0;
		if (t.oa)
			for (d in c = document.createElement("custom"), t.F.prototype) c[d] = t.F.prototype[d];
		a = a || [];
		c.Va = [];
		for (Object.defineProperty(c, "length", {
				get: function () {
					return this.Va.length
				}
			}); e < a.length; e++) P(c, a[e]);
		if (t.oa) return c
	};
	t.F.prototype = t.i.create(t.z.prototype);
	t.F.prototype.constructor = t.F;
	t.F.prototype.bb = {
		change: "change",
		addtrack: "addtrack",
		removetrack: "removetrack"
	};
	for (var wa in t.F.prototype.bb) t.F.prototype["on" + wa] = j;

	function P(a, c) {
		var d = a.Va.length;
		"" + d in a || Object.defineProperty(a, d, {
			get: function () {
				return this.Va[d]
			}
		});
		c.addEventListener("modechange", t.bind(a, function () {
			this.o("change")
		}));
		a.Va.push(c);
		a.o({
			type: "addtrack",
			T: c
		})
	}

	function Q(a, c) {
		for (var d = 0, e = a.length, g; d < e; d++)
			if (g = a[d], g === c) {
				a.Va.splice(d, 1);
				break
			}
		a.o({
			type: "removetrack",
			T: c
		})
	}
	t.F.prototype.de = function (a) {
		for (var c = 0, d = this.length, e = j, g; c < d; c++)
			if (g = this[c], g.id === a) {
				e = g;
				break
			}
		return e
	};
	t.W = function (a) {
		var c = this,
			d;
		if (t.oa)
			for (d in c = document.createElement("custom"), t.W.prototype) c[d] = t.W.prototype[d];
		t.W.prototype.qb.call(c, a);
		Object.defineProperty(c, "length", {
			get: n("pe")
		});
		if (t.oa) return c
	};
	t.W.prototype.qb = function (a) {
		var c = this.length || 0,
			d = 0,
			e = a.length;
		this.X = a;
		this.pe = a.length;
		a = function (a) {
			"" + a in this || Object.defineProperty(this, "" + a, {
				get: function () {
					return this.X[a]
				}
			})
		};
		if (c < e)
			for (d = c; d < e; d++) a.call(this, d)
	};
	t.W.prototype.be = function (a) {
		for (var c = 0, d = this.length, e = j, g; c < d; c++)
			if (g = this[c], g.id === a) {
				e = g;
				break
			}
		return e
	};
	t.ra = t.a.extend({
		l: function (a, c, d) {
			t.a.call(this, a, c, d);
			a.b("loadstart", t.bind(this, this.Ze));
			a.I(t.bind(this, function () {
				if (a.h && a.h.featuresNativeTextTracks) this.Y();
				else {
					var c, d, h;
					a.b("fullscreenchange", t.bind(this, this.C));
					d = a.q.tracks || [];
					for (c = 0; c < d.length; c++) h = d[c], this.d.ia(h)
				}
			}))
		}
	});
	t.ra.prototype.Ze = function () {
		this.d.h && this.d.h.featuresNativeTextTracks ? this.Y() : this.show()
	};
	t.ra.prototype.e = function () {
		return t.a.prototype.e.call(this, "div", {
			className: "vjs-text-track-display"
		})
	};
	t.ra.prototype.Pd = function () {
		"function" === typeof window.WebVTT && window.WebVTT.processCues(window, [], this.c)
	};

	function W(a, c) {
		return "rgba(" + parseInt(a[1] + a[1], 16) + "," + parseInt(a[2] + a[2], 16) + "," + parseInt(a[3] + a[3], 16) + "," + c + ")"
	}
	var xa = {
		xf: "monospace",
		Df: "sans-serif",
		Ff: "serif",
		yf: '"Andale Mono", "Lucida Console", monospace',
		zf: '"Courier New", monospace',
		Bf: "sans-serif",
		Cf: "serif",
		of: '"Comic Sans MS", Impact, fantasy',
		Ef: '"Monotype Corsiva", cursive',
		Gf: '"Andale Mono", "Lucida Console", monospace, sans-serif'
	};
	t.ra.prototype.C = function () {
		var a = this.d.textTracks(),
			c = 0,
			d;
		this.Pd();
		if (a)
			for (; c < a.length; c++) d = a[c], "showing" === d.mode && this.cf(d)
	};
	t.ra.prototype.cf = function (a) {
		if ("function" === typeof window.WebVTT && a.activeCues) {
			for (var c = 0, d = this.d.textTrackSettings.Lc(), e, g = []; c < a.activeCues.length; c++) g.push(a.activeCues[c]);
			window.WebVTT.processCues(window, a.activeCues, this.c);
			for (c = g.length; c--;) {
				a = g[c].pf;
				d.color && (a.firstChild.style.color = d.color);
				if (d.nd) try {
					a.firstChild.style.color = W(d.color || "#fff", d.nd)
				} catch (h) {}
				d.backgroundColor && (a.firstChild.style.backgroundColor = d.backgroundColor);
				if (d.yc) try {
					a.firstChild.style.backgroundColor =
						W(d.backgroundColor || "#000", d.yc)
				} catch (k) {}
				if (d.fc)
					if (d.ud) try {
						a.style.backgroundColor = W(d.fc, d.ud)
					} catch (p) {} else a.style.backgroundColor = d.fc;
				d.La && ("dropshadow" === d.La ? a.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === d.La ? a.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === d.La ? a.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === d.La && (a.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222"));
				d.Qb && 1 !== d.Qb && (e = window.Af(a.style.fontSize), a.style.fontSize = e * d.Qb + "px", a.style.height = "auto", a.style.top = "auto", a.style.bottom = "2px");
				d.fontFamily && "default" !== d.fontFamily && ("small-caps" === d.fontFamily ? a.firstChild.style.fontVariant = "small-caps" : a.firstChild.style.fontFamily = xa[d.fontFamily])
			}
		}
	};
	t.aa = t.M.extend({
		l: function (a, c) {
			var d = this.T = c.track,
				e = a.textTracks(),
				g, h;
			e && (g = t.bind(this, function () {
				var a = "showing" === this.T.mode,
					c, d, g;
				if (this instanceof t.Ab) {
					a = f;
					d = 0;
					for (g = e.length; d < g; d++)
						if (c = e[d], c.kind === this.T.kind && "showing" === c.mode) {
							a = l;
							break
						}
				}
				this.selected(a)
			}), e.addEventListener("change", g), a.b("dispose", function () {
				e.removeEventListener("change", g)
			}));
			c.label = d.label || d.language || "Unknown";
			c.selected = d["default"] || "showing" === d.mode;
			t.M.call(this, a, c);
			e && e.onchange === b && this.b(["tap",
				"click"
			], function () {
				if ("object" !== typeof window.yd) try {
					h = new window.yd("change")
				} catch (a) {}
				h || (h = document.createEvent("Event"), h.initEvent("change", f, f));
				e.dispatchEvent(h)
			})
		}
	});
	t.aa.prototype.u = function () {
		var a = this.T.kind,
			c = this.d.textTracks(),
			d, e = 0;
		t.M.prototype.u.call(this);
		if (c)
			for (; e < c.length; e++) d = c[e], d.kind === a && (d.mode = d === this.T ? "showing" : "disabled")
	};
	t.Ab = t.aa.extend({
		l: function (a, c) {
			c.track = {
				kind: c.kind,
				player: a,
				label: c.kind + " off",
				"default": l,
				mode: "disabled"
			};
			t.aa.call(this, a, c);
			this.selected(f)
		}
	});
	t.tb = t.aa.extend({
		l: function (a, c) {
			c.track = {
				kind: c.kind,
				player: a,
				label: c.kind + " settings",
				"default": l,
				mode: "disabled"
			};
			t.aa.call(this, a, c);
			this.p("vjs-texttrack-settings")
		}
	});
	t.tb.prototype.u = function () {
		this.k().ea("textTrackSettings").show()
	};
	t.Q = t.O.extend({
		l: function (a, c) {
			var d, e;
			t.O.call(this, a, c);
			d = this.d.textTracks();
			1 >= this.H.length && this.Y();
			d && (e = t.bind(this, this.update), d.addEventListener("removetrack", e), d.addEventListener("addtrack", e), this.d.b("dispose", function () {
				d.removeEventListener("removetrack", e);
				d.removeEventListener("addtrack", e)
			}))
		}
	});
	t.Q.prototype.Ia = function () {
		var a = [],
			c, d;
		this instanceof t.na && (!this.k().h || !this.k().h.featuresNativeTextTracks) && a.push(new t.tb(this.d, {
			kind: this.fa
		}));
		a.push(new t.Ab(this.d, {
			kind: this.fa
		}));
		d = this.d.textTracks();
		if (!d) return a;
		for (var e = 0; e < d.length; e++) c = d[e], c.kind === this.fa && a.push(new t.aa(this.d, {
			track: c
		}));
		return a
	};
	t.na = t.Q.extend({
		l: function (a, c, d) {
			t.Q.call(this, a, c, d);
			this.c.setAttribute("aria-label", "Captions Menu")
		}
	});
	t.na.prototype.fa = "captions";
	t.na.prototype.sa = "Captions";
	t.na.prototype.className = "vjs-captions-button";
	t.na.prototype.update = function () {
		var a = 2;
		t.Q.prototype.update.call(this);
		this.k().h && this.k().h.featuresNativeTextTracks && (a = 1);
		this.H && this.H.length > a ? this.show() : this.Y()
	};
	t.ab = t.Q.extend({
		l: function (a, c, d) {
			t.Q.call(this, a, c, d);
			this.c.setAttribute("aria-label", "Subtitles Menu")
		}
	});
	t.ab.prototype.fa = "subtitles";
	t.ab.prototype.sa = "Subtitles";
	t.ab.prototype.className = "vjs-subtitles-button";
	t.Xa = t.Q.extend({
		l: function (a, c, d) {
			t.Q.call(this, a, c, d);
			this.c.setAttribute("aria-label", "Chapters Menu")
		}
	});
	s = t.Xa.prototype;
	s.fa = "chapters";
	s.sa = "Chapters";
	s.className = "vjs-chapters-button";
	s.Ia = function () {
		var a = [],
			c, d;
		d = this.d.textTracks();
		if (!d) return a;
		for (var e = 0; e < d.length; e++) c = d[e], c.kind === this.fa && a.push(new t.aa(this.d, {
			track: c
		}));
		return a
	};
	s.Ja = function () {
		for (var a = this.d.textTracks() || [], c = 0, d = a.length, e, g, h = this.H = []; c < d; c++)
			if (e = a[c], e.kind == this.fa)
				if (e.Dc) {
					g = e;
					break
				} else e.mode = "hidden", window.setTimeout(t.bind(this, function () {
					this.Ja()
				}), 100);
		a = this.xa;
		a === b && (a = new t.pa(this.d), a.va().appendChild(t.e("li", {
			className: "vjs-menu-title",
			innerHTML: t.ua(this.fa),
			We: -1
		})));
		if (g) {
			e = g.cues;
			for (var k, c = 0, d = e.length; c < d; c++) k = e[c], k = new t.Ya(this.d, {
				track: g,
				cue: k
			}), h.push(k), a.ba(k);
			this.ba(a)
		}
		0 < this.H.length && this.show();
		return a
	};
	t.Ya = t.M.extend({
		l: function (a, c) {
			var d = this.T = c.track,
				e = this.cue = c.cue,
				g = a.currentTime();
			c.label = e.text;
			c.selected = e.startTime <= g && g < e.endTime;
			t.M.call(this, a, c);
			d.addEventListener("cuechange", t.bind(this, this.update))
		}
	});
	t.Ya.prototype.u = function () {
		t.M.prototype.u.call(this);
		this.d.currentTime(this.cue.startTime);
		this.update(this.cue.startTime)
	};
	t.Ya.prototype.update = function () {
		var a = this.cue,
			c = this.d.currentTime();
		this.selected(a.startTime <= c && c < a.endTime)
	};

	function X(a) {
		var c;
		a.Ke ? c = a.Ke[0] : a.options && (c = a.options[a.options.selectedIndex]);
		return c.value
	}

	function Y(a, c) {
		var d, e;
		if (c) {
			for (d = 0; d < a.options.length && !(e = a.options[d], e.value === c); d++);
			a.selectedIndex = d
		}
	}
	t.sc = t.a.extend({
		l: function (a, c) {
			t.a.call(this, a, c);
			this.Y();
			t.b(this.m().querySelector(".vjs-done-button"), "click", t.bind(this, function () {
				this.Je();
				this.Y()
			}));
			t.b(this.m().querySelector(".vjs-default-button"), "click", t.bind(this, function () {
				this.m().querySelector(".vjs-fg-color > select").selectedIndex = 0;
				this.m().querySelector(".vjs-bg-color > select").selectedIndex = 0;
				this.m().querySelector(".window-color > select").selectedIndex = 0;
				this.m().querySelector(".vjs-text-opacity > select").selectedIndex =
					0;
				this.m().querySelector(".vjs-bg-opacity > select").selectedIndex = 0;
				this.m().querySelector(".vjs-window-opacity > select").selectedIndex = 0;
				this.m().querySelector(".vjs-edge-style select").selectedIndex = 0;
				this.m().querySelector(".vjs-font-family select").selectedIndex = 0;
				this.m().querySelector(".vjs-font-percent select").selectedIndex = 2;
				this.C()
			}));
			t.b(this.m().querySelector(".vjs-fg-color > select"), "change", t.bind(this, this.C));
			t.b(this.m().querySelector(".vjs-bg-color > select"), "change", t.bind(this,
				this.C));
			t.b(this.m().querySelector(".window-color > select"), "change", t.bind(this, this.C));
			t.b(this.m().querySelector(".vjs-text-opacity > select"), "change", t.bind(this, this.C));
			t.b(this.m().querySelector(".vjs-bg-opacity > select"), "change", t.bind(this, this.C));
			t.b(this.m().querySelector(".vjs-window-opacity > select"), "change", t.bind(this, this.C));
			t.b(this.m().querySelector(".vjs-font-percent select"), "change", t.bind(this, this.C));
			t.b(this.m().querySelector(".vjs-edge-style select"), "change", t.bind(this,
				this.C));
			t.b(this.m().querySelector(".vjs-font-family select"), "change", t.bind(this, this.C));
			a.options().persistTextTrackSettings && this.Ie()
		}
	});
	s = t.sc.prototype;
	s.e = function () {
		return t.a.prototype.e.call(this, "div", {
			className: "vjs-caption-settings vjs-modal-overlay",
			innerHTML: '<div class="vjs-tracksettings"><div class="vjs-tracksettings-colors"><div class="vjs-fg-color vjs-tracksetting"><label class="vjs-label">Foreground</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Opaque</option></select></span></div><div class="vjs-bg-color vjs-tracksetting"><label class="vjs-label">Background</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div><div class="window-color vjs-tracksetting"><label class="vjs-label">Window</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div></div><div class="vjs-tracksettings-font"><div class="vjs-font-percent vjs-tracksetting"><label class="vjs-label">Font Size</label><select><option value="0.50">50%</option><option value="0.75">75%</option><option value="1.00" selected>100%</option><option value="1.25">125%</option><option value="1.50">150%</option><option value="1.75">175%</option><option value="2.00">200%</option><option value="3.00">300%</option><option value="4.00">400%</option></select></div><div class="vjs-edge-style vjs-tracksetting"><label class="vjs-label">Text Edge Style</label><select><option value="none">None</option><option value="raised">Raised</option><option value="depressed">Depressed</option><option value="uniform">Uniform</option><option value="dropshadow">Dropshadow</option></select></div><div class="vjs-font-family vjs-tracksetting"><label class="vjs-label">Font Family</label><select><option value="">Default</option><option value="monospaceSerif">Monospace Serif</option><option value="proportionalSerif">Proportional Serif</option><option value="monospaceSansSerif">Monospace Sans-Serif</option><option value="proportionalSansSerif">Proportional Sans-Serif</option><option value="casual">Casual</option><option value="script">Script</option><option value="small-caps">Small Caps</option></select></div></div></div><div class="vjs-tracksettings-controls"><button class="vjs-default-button">Defaults</button><button class="vjs-done-button">Done</button></div>'
		})
	};
	s.Lc = function () {
		var a, c, d, e, g, h, k, p, r, u;
		a = this.m();
		g = X(a.querySelector(".vjs-edge-style select"));
		h = X(a.querySelector(".vjs-font-family select"));
		k = X(a.querySelector(".vjs-fg-color > select"));
		d = X(a.querySelector(".vjs-text-opacity > select"));
		p = X(a.querySelector(".vjs-bg-color > select"));
		c = X(a.querySelector(".vjs-bg-opacity > select"));
		r = X(a.querySelector(".window-color > select"));
		e = X(a.querySelector(".vjs-window-opacity > select"));
		a = window.parseFloat(X(a.querySelector(".vjs-font-percent > select")));
		c = {
			backgroundOpacity: c,
			textOpacity: d,
			windowOpacity: e,
			edgeStyle: g,
			fontFamily: h,
			color: k,
			backgroundColor: p,
			windowColor: r,
			fontPercent: a
		};
		for (u in c)("" === c[u] || "none" === c[u] || "fontPercent" === u && 1 === c[u]) && delete c[u];
		return c
	};
	s.Re = function (a) {
		var c = this.m();
		Y(c.querySelector(".vjs-edge-style select"), a.La);
		Y(c.querySelector(".vjs-font-family select"), a.fontFamily);
		Y(c.querySelector(".vjs-fg-color > select"), a.color);
		Y(c.querySelector(".vjs-text-opacity > select"), a.nd);
		Y(c.querySelector(".vjs-bg-color > select"), a.backgroundColor);
		Y(c.querySelector(".vjs-bg-opacity > select"), a.yc);
		Y(c.querySelector(".window-color > select"), a.fc);
		Y(c.querySelector(".vjs-window-opacity > select"), a.ud);
		(a = a.Qb) && (a = a.toFixed(2));
		Y(c.querySelector(".vjs-font-percent > select"),
			a)
	};
	s.Ie = function () {
		var a;
		try {
			a = JSON.parse(window.localStorage.getItem("vjs-text-track-settings"))
		} catch (c) {}
		a && this.Re(a)
	};
	s.Je = function () {
		var a;
		if (this.d.options().persistTextTrackSettings) {
			a = this.Lc();
			try {
				t.ib(a) ? window.localStorage.removeItem("vjs-text-track-settings") : window.localStorage.setItem("vjs-text-track-settings", JSON.stringify(a))
			} catch (c) {}
		}
	};
	s.C = function () {
		var a = this.d.ea("textTrackDisplay");
		a && a.C()
	};
	if ("undefined" !== typeof window.JSON && "function" === typeof window.JSON.parse) t.JSON = window.JSON;
	else {
		t.JSON = {};
		var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
		t.JSON.parse = function (a, c) {
			function d(a, e) {
				var k, p, r = a[e];
				if (r && "object" === typeof r)
					for (k in r) Object.prototype.hasOwnProperty.call(r, k) && (p = d(r, k), p !== b ? r[k] = p : delete r[k]);
				return c.call(a, e, r)
			}
			var e;
			a = String(a);
			Z.lastIndex = 0;
			Z.test(a) && (a = a.replace(Z, function (a) {
				return "\\u" + ("0000" +
					a.charCodeAt(0).toString(16)).slice(-4)
			}));
			if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" === typeof c ? d({
				"": e
			}, "") : e;
			throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");
		}
	}
	t.xc = function () {
		var a, c, d, e;
		a = document.getElementsByTagName("video");
		c = document.getElementsByTagName("audio");
		var g = [];
		if (a && 0 < a.length) {
			d = 0;
			for (e = a.length; d < e; d++) g.push(a[d])
		}
		if (c && 0 < c.length) {
			d = 0;
			for (e = c.length; d < e; d++) g.push(c[d])
		}
		if (g && 0 < g.length) {
			d = 0;
			for (e = g.length; d < e; d++)
				if ((c = g[d]) && c.getAttribute) c.player === b && (a = c.getAttribute("data-setup"), a !== j && videojs(c));
				else {
					t.Ib();
					break
				}
		} else t.td || t.Ib()
	};
	t.Ib = function () {
		setTimeout(t.xc, 1)
	};
	"complete" === document.readyState ? t.td = f : t.N(window, "load", function () {
		t.td = f
	});
	t.Ib();
	t.Fe = function (a, c) {
		t.Player.prototype[a] = c
	};
	var ya = this;

	function $(a, c) {
		var d = a.split("."),
			e = ya;
		!(d[0] in e) && e.execScript && e.execScript("var " + d[0]);
		for (var g; d.length && (g = d.shift());) !d.length && c !== b ? e[g] = c : e = e[g] ? e[g] : e[g] = {}
	};
	$("videojs", t);
	$("_V_", t);
	$("videojs.options", t.options);
	$("videojs.players", t.Aa);
	$("videojs.TOUCH_ENABLED", t.Eb);
	$("videojs.cache", t.ta);
	$("videojs.Component", t.a);
	t.a.prototype.player = t.a.prototype.k;
	t.a.prototype.options = t.a.prototype.options;
	t.a.prototype.init = t.a.prototype.l;
	t.a.prototype.dispose = t.a.prototype.dispose;
	t.a.prototype.createEl = t.a.prototype.e;
	t.a.prototype.contentEl = t.a.prototype.va;
	t.a.prototype.el = t.a.prototype.m;
	t.a.prototype.addChild = t.a.prototype.ba;
	t.a.prototype.getChild = t.a.prototype.ea;
	t.a.prototype.getChildById = t.a.prototype.ae;
	t.a.prototype.children = t.a.prototype.children;
	t.a.prototype.initChildren = t.a.prototype.Oc;
	t.a.prototype.removeChild = t.a.prototype.removeChild;
	t.a.prototype.on = t.a.prototype.b;
	t.a.prototype.off = t.a.prototype.n;
	t.a.prototype.one = t.a.prototype.N;
	t.a.prototype.trigger = t.a.prototype.o;
	t.a.prototype.triggerReady = t.a.prototype.Wa;
	t.a.prototype.show = t.a.prototype.show;
	t.a.prototype.hide = t.a.prototype.Y;
	t.a.prototype.width = t.a.prototype.width;
	t.a.prototype.height = t.a.prototype.height;
	t.a.prototype.dimensions = t.a.prototype.Td;
	t.a.prototype.ready = t.a.prototype.I;
	t.a.prototype.addClass = t.a.prototype.p;
	t.a.prototype.removeClass = t.a.prototype.r;
	t.a.prototype.hasClass = t.a.prototype.Oa;
	t.a.prototype.buildCSSClass = t.a.prototype.V;
	t.a.prototype.localize = t.a.prototype.v;
	t.a.prototype.setInterval = t.a.prototype.setInterval;
	t.a.prototype.setTimeout = t.a.prototype.setTimeout;
	$("videojs.EventEmitter", t.z);
	t.z.prototype.on = t.z.prototype.b;
	t.z.prototype.addEventListener = t.z.prototype.addEventListener;
	t.z.prototype.off = t.z.prototype.n;
	t.z.prototype.removeEventListener = t.z.prototype.removeEventListener;
	t.z.prototype.one = t.z.prototype.N;
	t.z.prototype.trigger = t.z.prototype.o;
	t.z.prototype.dispatchEvent = t.z.prototype.dispatchEvent;
	t.Player.prototype.ended = t.Player.prototype.ended;
	t.Player.prototype.enterFullWindow = t.Player.prototype.Jc;
	t.Player.prototype.exitFullWindow = t.Player.prototype.Nb;
	t.Player.prototype.preload = t.Player.prototype.Qa;
	t.Player.prototype.remainingTime = t.Player.prototype.remainingTime;
	t.Player.prototype.supportsFullScreen = t.Player.prototype.Ta;
	t.Player.prototype.currentType = t.Player.prototype.Qd;
	t.Player.prototype.requestFullScreen = t.Player.prototype.requestFullScreen;
	t.Player.prototype.requestFullscreen = t.Player.prototype.requestFullscreen;
	t.Player.prototype.cancelFullScreen = t.Player.prototype.cancelFullScreen;
	t.Player.prototype.exitFullscreen = t.Player.prototype.exitFullscreen;
	t.Player.prototype.isFullScreen = t.Player.prototype.isFullScreen;
	t.Player.prototype.isFullscreen = t.Player.prototype.isFullscreen;
	t.Player.prototype.textTracks = t.Player.prototype.textTracks;
	t.Player.prototype.remoteTextTracks = t.Player.prototype.Z;
	t.Player.prototype.addTextTrack = t.Player.prototype.addTextTrack;
	t.Player.prototype.addRemoteTextTrack = t.Player.prototype.ia;
	t.Player.prototype.removeRemoteTextTrack = t.Player.prototype.Ba;
	$("videojs.MediaLoader", t.Fd);
	$("videojs.TextTrackDisplay", t.ra);
	$("videojs.ControlBar", t.ub);
	$("videojs.Button", t.w);
	$("videojs.PlayToggle", t.nc);
	$("videojs.FullscreenToggle", t.Za);
	$("videojs.BigPlayButton", t.sb);
	$("videojs.LoadingSpinner", t.lc);
	$("videojs.CurrentTimeDisplay", t.vb);
	$("videojs.DurationDisplay", t.wb);
	$("videojs.TimeDivider", t.tc);
	$("videojs.RemainingTimeDisplay", t.Db);
	$("videojs.LiveDisplay", t.kc);
	$("videojs.ErrorDisplay", t.xb);
	$("videojs.Slider", t.U);
	$("videojs.ProgressControl", t.Cb);
	$("videojs.SeekBar", t.qc);
	$("videojs.LoadProgressBar", t.zb);
	$("videojs.PlayProgressBar", t.mc);
	$("videojs.SeekHandle", t.$a);
	$("videojs.VolumeControl", t.Gb);
	$("videojs.VolumeBar", t.Fb);
	$("videojs.VolumeLevel", t.uc);
	$("videojs.VolumeMenuButton", t.Fa);
	$("videojs.VolumeHandle", t.Hb);
	$("videojs.MuteToggle", t.qa);
	$("videojs.PosterImage", t.pc);
	$("videojs.Menu", t.pa);
	$("videojs.MenuItem", t.M);
	$("videojs.MenuButton", t.O);
	$("videojs.PlaybackRateMenuButton", t.oc);
	$("videojs.ChaptersTrackMenuItem", t.Ya);
	$("videojs.TextTrackButton", t.Q);
	$("videojs.TextTrackMenuItem", t.aa);
	$("videojs.OffTextTrackMenuItem", t.Ab);
	$("videojs.CaptionSettingsMenuItem", t.tb);
	t.O.prototype.createItems = t.O.prototype.Ia;
	t.Q.prototype.createItems = t.Q.prototype.Ia;
	t.Xa.prototype.createItems = t.Xa.prototype.Ia;
	$("videojs.SubtitlesButton", t.ab);
	$("videojs.CaptionsButton", t.na);
	$("videojs.ChaptersButton", t.Xa);
	$("videojs.MediaTechController", t.j);
	t.j.withSourceHandlers = t.j.gc;
	t.j.prototype.featuresVolumeControl = t.j.prototype.uf;
	t.j.prototype.featuresFullscreenResize = t.j.prototype.qf;
	t.j.prototype.featuresPlaybackRate = t.j.prototype.rf;
	t.j.prototype.featuresProgressEvents = t.j.prototype.sf;
	t.j.prototype.featuresTimeupdateEvents = t.j.prototype.tf;
	t.j.prototype.setPoster = t.j.prototype.fd;
	t.j.prototype.textTracks = t.j.prototype.textTracks;
	t.j.prototype.remoteTextTracks = t.j.prototype.Z;
	t.j.prototype.addTextTrack = t.j.prototype.addTextTrack;
	t.j.prototype.addRemoteTextTrack = t.j.prototype.ia;
	t.j.prototype.removeRemoteTextTrack = t.j.prototype.Ba;
	$("videojs.Html5", t.f);
	t.f.Events = t.f.yb;
	t.f.isSupported = t.f.isSupported;
	t.f.canPlaySource = t.f.zc;
	t.f.patchCanPlayType = t.f.Xc;
	t.f.unpatchCanPlayType = t.f.bf;
	t.f.prototype.setCurrentTime = t.f.prototype.bc;
	t.f.prototype.setVolume = t.f.prototype.Se;
	t.f.prototype.setMuted = t.f.prototype.Oe;
	t.f.prototype.setPreload = t.f.prototype.Qe;
	t.f.prototype.setAutoplay = t.f.prototype.Le;
	t.f.prototype.setLoop = t.f.prototype.Ne;
	t.f.prototype.enterFullScreen = t.f.prototype.Ic;
	t.f.prototype.exitFullScreen = t.f.prototype.Xd;
	t.f.prototype.playbackRate = t.f.prototype.playbackRate;
	t.f.prototype.setPlaybackRate = t.f.prototype.Pe;
	t.f.registerSourceHandler = t.f.Ra;
	t.f.selectSourceHandler = t.f.pb;
	t.f.prototype.setSource = t.f.prototype.Sa;
	t.f.prototype.disposeSourceHandler = t.f.prototype.Ka;
	t.f.prototype.textTracks = t.f.prototype.textTracks;
	t.f.prototype.remoteTextTracks = t.f.prototype.Z;
	t.f.prototype.addTextTrack = t.f.prototype.addTextTrack;
	t.f.prototype.addRemoteTextTrack = t.f.prototype.ia;
	t.f.prototype.removeRemoteTextTrack = t.f.prototype.Ba;
	$("videojs.Flash", t.g);
	t.g.isSupported = t.g.isSupported;
	t.g.canPlaySource = t.g.zc;
	t.g.onReady = t.g.onReady;
	t.g.embed = t.g.Hc;
	t.g.version = t.g.version;
	t.g.prototype.setSource = t.g.prototype.Sa;
	t.g.registerSourceHandler = t.g.Ra;
	t.g.selectSourceHandler = t.g.pb;
	t.g.prototype.setSource = t.g.prototype.Sa;
	t.g.prototype.disposeSourceHandler = t.g.prototype.Ka;
	$("videojs.TextTrack", t.t);
	$("videojs.TextTrackList", t.F);
	$("videojs.TextTrackCueList", t.W);
	$("videojs.TextTrackSettings", t.sc);
	t.t.prototype.id = t.t.prototype.id;
	t.t.prototype.label = t.t.prototype.label;
	t.t.prototype.kind = t.t.prototype.Wb;
	t.t.prototype.mode = t.t.prototype.mode;
	t.t.prototype.cues = t.t.prototype.Dc;
	t.t.prototype.activeCues = t.t.prototype.nf;
	t.t.prototype.addCue = t.t.prototype.vc;
	t.t.prototype.removeCue = t.t.prototype.bd;
	t.F.prototype.getTrackById = t.F.prototype.de;
	t.W.prototype.getCueById = t.F.prototype.be;
	$("videojs.CaptionsTrack", t.gf);
	$("videojs.SubtitlesTrack", t.mf);
	$("videojs.ChaptersTrack", t.hf);
	$("videojs.autoSetup", t.xc);
	$("videojs.plugin", t.Fe);
	$("videojs.createTimeRange", t.Lb);
	$("videojs.util", t.$);
	t.$.mergeOptions = t.$.ya;
	t.addLanguage = t.Jd;
})();

/* vtt.js - v0.11.11 (https://github.com/mozilla/vtt.js) built on 22-01-2015 */
! function (a) {
	var b = a.vttjs = {},
		c = b.VTTCue,
		d = b.VTTRegion,
		e = a.VTTCue,
		f = a.VTTRegion;
	b.shim = function () {
		b.VTTCue = c, b.VTTRegion = d
	}, b.restore = function () {
		b.VTTCue = e, b.VTTRegion = f
	}
}(this),
function (a, b) {
	function c(a) {
		if ("string" != typeof a) return !1;
		var b = h[a.toLowerCase()];
		return b ? a.toLowerCase() : !1
	}

	function d(a) {
		if ("string" != typeof a) return !1;
		var b = i[a.toLowerCase()];
		return b ? a.toLowerCase() : !1
	}

	function e(a) {
		for (var b = 1; b < arguments.length; b++) {
			var c = arguments[b];
			for (var d in c) a[d] = c[d]
		}
		return a
	}

	function f(a, b, f) {
		var h = this,
			i = /MSIE\s8\.0/.test(navigator.userAgent),
			j = {};
		i ? h = document.createElement("custom") : j.enumerable = !0, h.hasBeenReset = !1;
		var k = "",
			l = !1,
			m = a,
			n = b,
			o = f,
			p = null,
			q = "",
			r = !0,
			s = "auto",
			t = "start",
			u = 50,
			v = "middle",
			w = 50,
			x = "middle";
		return Object.defineProperty(h, "id", e({}, j, {
			get: function () {
				return k
			},
			set: function (a) {
				k = "" + a
			}
		})), Object.defineProperty(h, "pauseOnExit", e({}, j, {
			get: function () {
				return l
			},
			set: function (a) {
				l = !!a
			}
		})), Object.defineProperty(h, "startTime", e({}, j, {
			get: function () {
				return m
			},
			set: function (a) {
				if ("number" != typeof a) throw new TypeError("Start time must be set to a number.");
				m = a, this.hasBeenReset = !0
			}
		})), Object.defineProperty(h, "endTime", e({}, j, {
			get: function () {
				return n
			},
			set: function (a) {
				if ("number" != typeof a) throw new TypeError("End time must be set to a number.");
				n = a, this.hasBeenReset = !0
			}
		})), Object.defineProperty(h, "text", e({}, j, {
			get: function () {
				return o
			},
			set: function (a) {
				o = "" + a, this.hasBeenReset = !0
			}
		})), Object.defineProperty(h, "region", e({}, j, {
			get: function () {
				return p
			},
			set: function (a) {
				p = a, this.hasBeenReset = !0
			}
		})), Object.defineProperty(h, "vertical", e({}, j, {
			get: function () {
				return q
			},
			set: function (a) {
				var b = c(a);
				if (b === !1) throw new SyntaxError("An invalid or illegal string was specified.");
				q = b, this.hasBeenReset = !0
			}
		})), Object.defineProperty(h, "snapToLines", e({}, j, {
			get: function () {
				return r
			},
			set: function (a) {
				r = !!a, this.hasBeenReset = !0
			}
		})), Object.defineProperty(h, "line", e({}, j, {
			get: function () {
				return s
			},
			set: function (a) {
				if ("number" != typeof a && a !== g) throw new SyntaxError("An invalid number or illegal string was specified.");
				s = a, this.hasBeenReset = !0
			}
		})), Object.defineProperty(h, "lineAlign", e({}, j, {
			get: function () {
				return t
			},
			set: function (a) {
				var b = d(a);
				if (!b) throw new SyntaxError("An invalid or illegal string was specified.");
				t = b, this.hasBeenReset = !0
			}
		})), Object.defineProperty(h, "position", e({}, j, {
			get: function () {
				return u
			},
			set: function (a) {
				if (0 > a || a > 100) throw new Error("Position must be between 0 and 100.");
				u = a, this.hasBeenReset = !0
			}
		})), Object.defineProperty(h, "positionAlign", e({}, j, {
			get: function () {
				return v
			},
			set: function (a) {
				var b = d(a);
				if (!b) throw new SyntaxError("An invalid or illegal string was specified.");
				v = b, this.hasBeenReset = !0
			}
		})), Object.defineProperty(h, "size", e({}, j, {
			get: function () {
				return w
			},
			set: function (a) {
				if (0 > a || a > 100) throw new Error("Size must be between 0 and 100.");
				w = a, this.hasBeenReset = !0
			}
		})), Object.defineProperty(h, "align", e({}, j, {
			get: function () {
				return x
			},
			set: function (a) {
				var b = d(a);
				if (!b) throw new SyntaxError("An invalid or illegal string was specified.");
				x = b, this.hasBeenReset = !0
			}
		})), h.displayState = void 0, i ? h : void 0
	}
	var g = "auto",
		h = {
			"": !0,
			lr: !0,
			rl: !0
		},
		i = {
			start: !0,
			middle: !0,
			end: !0,
			left: !0,
			right: !0
		};
	f.prototype.getCueAsHTML = function () {
		return WebVTT.convertCueToDOMTree(window, this.text)
	}, a.VTTCue = a.VTTCue || f, b.VTTCue = f
}(this, this.vttjs || {}),
function (a, b) {
	function c(a) {
		if ("string" != typeof a) return !1;
		var b = f[a.toLowerCase()];
		return b ? a.toLowerCase() : !1
	}

	function d(a) {
		return "number" == typeof a && a >= 0 && 100 >= a
	}

	function e() {
		var a = 100,
			b = 3,
			e = 0,
			f = 100,
			g = 0,
			h = 100,
			i = "";
		Object.defineProperties(this, {
			width: {
				enumerable: !0,
				get: function () {
					return a
				},
				set: function (b) {
					if (!d(b)) throw new Error("Width must be between 0 and 100.");
					a = b
				}
			},
			lines: {
				enumerable: !0,
				get: function () {
					return b
				},
				set: function (a) {
					if ("number" != typeof a) throw new TypeError("Lines must be set to a number.");
					b = a
				}
			},
			regionAnchorY: {
				enumerable: !0,
				get: function () {
					return f
				},
				set: function (a) {
					if (!d(a)) throw new Error("RegionAnchorX must be between 0 and 100.");
					f = a
				}
			},
			regionAnchorX: {
				enumerable: !0,
				get: function () {
					return e
				},
				set: function (a) {
					if (!d(a)) throw new Error("RegionAnchorY must be between 0 and 100.");
					e = a
				}
			},
			viewportAnchorY: {
				enumerable: !0,
				get: function () {
					return h
				},
				set: function (a) {
					if (!d(a)) throw new Error("ViewportAnchorY must be between 0 and 100.");
					h = a
				}
			},
			viewportAnchorX: {
				enumerable: !0,
				get: function () {
					return g
				},
				set: function (a) {
					if (!d(a)) throw new Error("ViewportAnchorX must be between 0 and 100.");
					g = a
				}
			},
			scroll: {
				enumerable: !0,
				get: function () {
					return i
				},
				set: function (a) {
					var b = c(a);
					if (b === !1) throw new SyntaxError("An invalid or illegal string was specified.");
					i = b
				}
			}
		})
	}
	var f = {
		"": !0,
		up: !0
	};
	a.VTTRegion = a.VTTRegion || e, b.VTTRegion = e
}(this, this.vttjs || {}),
function (a) {
	function b(a, b) {
		this.name = "ParsingError", this.code = a.code, this.message = b || a.message
	}

	function c(a) {
		function b(a, b, c, d) {
			return 3600 * (0 | a) + 60 * (0 | b) + (0 | c) + (0 | d) / 1e3
		}
		var c = a.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
		return c ? c[3] ? b(c[1], c[2], c[3].replace(":", ""), c[4]) : c[1] > 59 ? b(c[1], c[2], 0, c[4]) : b(0, c[1], c[2], c[4]) : null
	}

	function d() {
		this.values = o(null)
	}

	function e(a, b, c, d) {
		var e = d ? a.split(d) : [a];
		for (var f in e)
			if ("string" == typeof e[f]) {
				var g = e[f].split(c);
				if (2 === g.length) {
					var h = g[0],
						i = g[1];
					b(h, i)
				}
			}
	}

	function f(a, f, g) {
		function h() {
			var d = c(a);
			if (null === d) throw new b(b.Errors.BadTimeStamp, "Malformed timestamp: " + k);
			return a = a.replace(/^[^\sa-zA-Z-]+/, ""), d
		}

		function i(a, b) {
			var c = new d;
			e(a, function (a, b) {
				switch (a) {
					case "region":
						for (var d = g.length - 1; d >= 0; d--)
							if (g[d].id === b) {
								c.set(a, g[d].region);
								break
							}
						break;
					case "vertical":
						c.alt(a, b, ["rl", "lr"]);
						break;
					case "line":
						var e = b.split(","),
							f = e[0];
						c.integer(a, f), c.percent(a, f) ? c.set("snapToLines", !1) : null, c.alt(a, f, ["auto"]), 2 === e.length && c.alt("lineAlign", e[1], ["start", "middle", "end"]);
						break;
					case "position":
						e = b.split(","), c.percent(a, e[0]), 2 === e.length && c.alt("positionAlign", e[1], ["start", "middle", "end"]);
						break;
					case "size":
						c.percent(a, b);
						break;
					case "align":
						c.alt(a, b, ["start", "middle", "end", "left", "right"])
				}
			}, /:/, /\s/), b.region = c.get("region", null), b.vertical = c.get("vertical", ""), b.line = c.get("line", "auto"), b.lineAlign = c.get("lineAlign", "start"), b.snapToLines = c.get("snapToLines", !0), b.size = c.get("size", 100), b.align = c.get("align", "middle"), b.position = c.get("position", {
				start: 0,
				left: 0,
				middle: 50,
				end: 100,
				right: 100
			}, b.align), b.positionAlign = c.get("positionAlign", {
				start: "start",
				left: "start",
				middle: "middle",
				end: "end",
				right: "end"
			}, b.align)
		}

		function j() {
			a = a.replace(/^\s+/, "")
		}
		var k = a;
		if (j(), f.startTime = h(), j(), "-->" !== a.substr(0, 3)) throw new b(b.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + k);
		a = a.substr(3), j(), f.endTime = h(), j(), i(a, f)
	}

	function g(a, b) {
		function d() {
			function a(a) {
				return b = b.substr(a.length), a
			}
			if (!b) return null;
			var c = b.match(/^([^<]*)(<[^>]+>?)?/);
			return a(c[1] ? c[1] : c[2])
		}

		function e(a) {
			return p[a]
		}

		function f(a) {
			for (; o = a.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) a = a.replace(o[0], e);
			return a
		}

		function g(a, b) {
			return !s[b.localName] || s[b.localName] === a.localName
		}

		function h(b, c) {
			var d = q[b];
			if (!d) return null;
			var e = a.document.createElement(d);
			e.localName = d;
			var f = r[b];
			return f && c && (e[f] = c.trim()), e
		}
		for (var i, j = a.document.createElement("div"), k = j, l = []; null !== (i = d());)
			if ("<" !== i[0]) k.appendChild(a.document.createTextNode(f(i)));
			else {
				if ("/" === i[1]) {
					l.length && l[l.length - 1] === i.substr(2).replace(">", "") && (l.pop(), k = k.parentNode);
					continue
				}
				var m, n = c(i.substr(1, i.length - 2));
				if (n) {
					m = a.document.createProcessingInstruction("timestamp", n), k.appendChild(m);
					continue
				}
				var o = i.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
				if (!o) continue;
				if (m = h(o[1], o[3]), !m) continue;
				if (!g(k, m)) continue;
				o[2] && (m.className = o[2].substr(1).replace(".", " ")), l.push(o[1]), k.appendChild(m), k = m
			}
		return j
	}

	function h(a) {
		function b(a, b) {
			for (var c = b.childNodes.length - 1; c >= 0; c--) a.push(b.childNodes[c])
		}

		function c(a) {
			if (!a || !a.length) return null;
			var d = a.pop(),
				e = d.textContent || d.innerText;
			if (e) {
				var f = e.match(/^.*(\n|\r)/);
				return f ? (a.length = 0, f[0]) : e
			}
			return "ruby" === d.tagName ? c(a) : d.childNodes ? (b(a, d), c(a)) : void 0
		}
		var d, e = [],
			f = "";
		if (!a || !a.childNodes) return "ltr";
		for (b(e, a); f = c(e);)
			for (var g = 0; g < f.length; g++) {
				d = f.charCodeAt(g);
				for (var h = 0; h < t.length; h++)
					if (t[h] === d) return "rtl"
			}
		return "ltr"
	}

	function i(a) {
		if ("number" == typeof a.line && (a.snapToLines || a.line >= 0 && a.line <= 100)) return a.line;
		if (!a.track || !a.track.textTrackList || !a.track.textTrackList.mediaElement) return -1;
		for (var b = a.track, c = b.textTrackList, d = 0, e = 0; e < c.length && c[e] !== b; e++) "showing" === c[e].mode && d++;
		return -1 * ++d
	}

	function j() {}

	function k(a, b, c) {
		var d = /MSIE\s8\.0/.test(navigator.userAgent),
			e = "rgba(255, 255, 255, 1)",
			f = "rgba(0, 0, 0, 0.8)";
		d && (e = "rgb(255, 255, 255)", f = "rgb(0, 0, 0)"), j.call(this), this.cue = b, this.cueDiv = g(a, b.text);
		var i = {
			color: e,
			backgroundColor: f,
			position: "relative",
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			display: "inline"
		};
		d || (i.writingMode = "" === b.vertical ? "horizontal-tb" : "lr" === b.vertical ? "vertical-lr" : "vertical-rl", i.unicodeBidi = "plaintext"), this.applyStyles(i, this.cueDiv), this.div = a.document.createElement("div"), i = {
			textAlign: "middle" === b.align ? "center" : b.align,
			font: c.font,
			whiteSpace: "pre-line",
			position: "absolute"
		}, d || (i.direction = h(this.cueDiv), i.writingMode = "" === b.vertical ? "horizontal-tb" : "lr" === b.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(i), this.div.appendChild(this.cueDiv);
		var k = 0;
		switch (b.positionAlign) {
			case "start":
				k = b.position;
				break;
			case "middle":
				k = b.position - b.size / 2;
				break;
			case "end":
				k = b.position - b.size
		}
		this.applyStyles("" === b.vertical ? {
			left: this.formatStyle(k, "%"),
			width: this.formatStyle(b.size, "%")
		} : {
			top: this.formatStyle(k, "%"),
			height: this.formatStyle(b.size, "%")
		}), this.move = function (a) {
			this.applyStyles({
				top: this.formatStyle(a.top, "px"),
				bottom: this.formatStyle(a.bottom, "px"),
				left: this.formatStyle(a.left, "px"),
				right: this.formatStyle(a.right, "px"),
				height: this.formatStyle(a.height, "px"),
				width: this.formatStyle(a.width, "px")
			})
		}
	}

	function l(a) {
		var b, c, d, e, f = /MSIE\s8\.0/.test(navigator.userAgent);
		if (a.div) {
			c = a.div.offsetHeight, d = a.div.offsetWidth, e = a.div.offsetTop;
			var g = (g = a.div.childNodes) && (g = g[0]) && g.getClientRects && g.getClientRects();
			a = a.div.getBoundingClientRect(), b = g ? Math.max(g[0] && g[0].height || 0, a.height / g.length) : 0
		}
		this.left = a.left, this.right = a.right, this.top = a.top || e, this.height = a.height || c, this.bottom = a.bottom || e + (a.height || c), this.width = a.width || d, this.lineHeight = void 0 !== b ? b : a.lineHeight, f && !this.lineHeight && (this.lineHeight = 13)
	}

	function m(a, b, c, d) {
		function e(a, b) {
			for (var e, f = new l(a), g = 1, h = 0; h < b.length; h++) {
				for (; a.overlapsOppositeAxis(c, b[h]) || a.within(c) && a.overlapsAny(d);) a.move(b[h]);
				if (a.within(c)) return a;
				var i = a.intersectPercentage(c);
				g > i && (e = new l(a), g = i), a = new l(f)
			}
			return e || f
		}
		var f = new l(b),
			g = b.cue,
			h = i(g),
			j = [];
		if (g.snapToLines) {
			var k;
			switch (g.vertical) {
				case "":
					j = ["+y", "-y"], k = "height";
					break;
				case "rl":
					j = ["+x", "-x"], k = "width";
					break;
				case "lr":
					j = ["-x", "+x"], k = "width"
			}
			var m = f.lineHeight,
				n = m * Math.round(h),
				o = c[k] + m,
				p = j[0];
			Math.abs(n) > o && (n = 0 > n ? -1 : 1, n *= Math.ceil(o / m) * m), 0 > h && (n += "" === g.vertical ? c.height : c.width, j = j.reverse()), f.move(p, n)
		} else {
			var q = f.lineHeight / c.height * 100;
			switch (g.lineAlign) {
				case "middle":
					h -= q / 2;
					break;
				case "end":
					h -= q
			}
			switch (g.vertical) {
				case "":
					b.applyStyles({
						top: b.formatStyle(h, "%")
					});
					break;
				case "rl":
					b.applyStyles({
						left: b.formatStyle(h, "%")
					});
					break;
				case "lr":
					b.applyStyles({
						right: b.formatStyle(h, "%")
					})
			}
			j = ["+y", "-x", "+x", "-y"], f = new l(b)
		}
		var r = e(f, j);
		b.move(r.toCSSCompatValues(c))
	}

	function n() {}
	var o = Object.create || function () {
		function a() {}
		return function (b) {
			if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
			return a.prototype = b, new a
		}
	}();
	b.prototype = o(Error.prototype), b.prototype.constructor = b, b.Errors = {
		BadSignature: {
			code: 0,
			message: "Malformed WebVTT signature."
		},
		BadTimeStamp: {
			code: 1,
			message: "Malformed time stamp."
		}
	}, d.prototype = {
		set: function (a, b) {
			this.get(a) || "" === b || (this.values[a] = b)
		},
		get: function (a, b, c) {
			return c ? this.has(a) ? this.values[a] : b[c] : this.has(a) ? this.values[a] : b
		},
		has: function (a) {
			return a in this.values
		},
		alt: function (a, b, c) {
			for (var d = 0; d < c.length; ++d)
				if (b === c[d]) {
					this.set(a, b);
					break
				}
		},
		integer: function (a, b) {
			/^-?\d+$/.test(b) && this.set(a, parseInt(b, 10))
		},
		percent: function (a, b) {
			var c;
			return (c = b.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (b = parseFloat(b), b >= 0 && 100 >= b) ? (this.set(a, b), !0) : !1
		}
	};
	var p = {
			"&amp;": "&",
			"&lt;": "<",
			"&gt;": ">",
			"&lrm;": "‎",
			"&rlm;": "‏",
			"&nbsp;": " "
		},
		q = {
			c: "span",
			i: "i",
			b: "b",
			u: "u",
			ruby: "ruby",
			rt: "rt",
			v: "span",
			lang: "span"
		},
		r = {
			v: "title",
			lang: "lang"
		},
		s = {
			rt: "ruby"
		},
		t = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];
	j.prototype.applyStyles = function (a, b) {
		b = b || this.div;
		for (var c in a) a.hasOwnProperty(c) && (b.style[c] = a[c])
	}, j.prototype.formatStyle = function (a, b) {
		return 0 === a ? 0 : a + b
	}, k.prototype = o(j.prototype), k.prototype.constructor = k, l.prototype.move = function (a, b) {
		switch (b = void 0 !== b ? b : this.lineHeight, a) {
			case "+x":
				this.left += b, this.right += b;
				break;
			case "-x":
				this.left -= b, this.right -= b;
				break;
			case "+y":
				this.top += b, this.bottom += b;
				break;
			case "-y":
				this.top -= b, this.bottom -= b
		}
	}, l.prototype.overlaps = function (a) {
		return this.left < a.right && this.right > a.left && this.top < a.bottom && this.bottom > a.top
	}, l.prototype.overlapsAny = function (a) {
		for (var b = 0; b < a.length; b++)
			if (this.overlaps(a[b])) return !0;
		return !1
	}, l.prototype.within = function (a) {
		return this.top >= a.top && this.bottom <= a.bottom && this.left >= a.left && this.right <= a.right
	}, l.prototype.overlapsOppositeAxis = function (a, b) {
		switch (b) {
			case "+x":
				return this.left < a.left;
			case "-x":
				return this.right > a.right;
			case "+y":
				return this.top < a.top;
			case "-y":
				return this.bottom > a.bottom
		}
	}, l.prototype.intersectPercentage = function (a) {
		var b = Math.max(0, Math.min(this.right, a.right) - Math.max(this.left, a.left)),
			c = Math.max(0, Math.min(this.bottom, a.bottom) - Math.max(this.top, a.top)),
			d = b * c;
		return d / (this.height * this.width)
	}, l.prototype.toCSSCompatValues = function (a) {
		return {
			top: this.top - a.top,
			bottom: a.bottom - this.bottom,
			left: this.left - a.left,
			right: a.right - this.right,
			height: this.height,
			width: this.width
		}
	}, l.getSimpleBoxPosition = function (a) {
		var b = a.div ? a.div.offsetHeight : a.tagName ? a.offsetHeight : 0,
			c = a.div ? a.div.offsetWidth : a.tagName ? a.offsetWidth : 0,
			d = a.div ? a.div.offsetTop : a.tagName ? a.offsetTop : 0;
		a = a.div ? a.div.getBoundingClientRect() : a.tagName ? a.getBoundingClientRect() : a;
		var e = {
			left: a.left,
			right: a.right,
			top: a.top || d,
			height: a.height || b,
			bottom: a.bottom || d + (a.height || b),
			width: a.width || c
		};
		return e
	}, n.StringDecoder = function () {
		return {
			decode: function (a) {
				if (!a) return "";
				if ("string" != typeof a) throw new Error("Error - expected string data.");
				return decodeURIComponent(encodeURIComponent(a))
			}
		}
	}, n.convertCueToDOMTree = function (a, b) {
		return a && b ? g(a, b) : null
	};
	var u = .05,
		v = "sans-serif",
		w = "1.5%";
	n.processCues = function (a, b, c) {
		function d(a) {
			for (var b = 0; b < a.length; b++)
				if (a[b].hasBeenReset || !a[b].displayState) return !0;
			return !1
		}
		if (!a || !b || !c) return null;
		for (; c.firstChild;) c.removeChild(c.firstChild);
		var e = a.document.createElement("div");
		if (e.style.position = "absolute", e.style.left = "0", e.style.right = "0", e.style.top = "0", e.style.bottom = "0", e.style.margin = w, c.appendChild(e), d(b)) {
			var f = [],
				g = l.getSimpleBoxPosition(e),
				h = Math.round(g.height * u * 100) / 100,
				i = {
					font: h + "px " + v
				};
			! function () {
				for (var c, d, h = 0; h < b.length; h++) d = b[h], c = new k(a, d, i), e.appendChild(c.div), m(a, c, g, f), d.displayState = c.div, f.push(l.getSimpleBoxPosition(c))
			}()
		} else
			for (var j = 0; j < b.length; j++) e.appendChild(b[j].displayState)
	}, n.Parser = function (a, b, c) {
		c || (c = b, b = {}), b || (b = {}), this.window = a, this.vttjs = b, this.state = "INITIAL", this.buffer = "", this.decoder = c || new TextDecoder("utf8"), this.regionList = []
	}, n.Parser.prototype = {
		reportOrThrowError: function (a) {
			if (!(a instanceof b)) throw a;
			this.onparsingerror && this.onparsingerror(a)
		},
		parse: function (a) {
			function c() {
				for (var a = i.buffer, b = 0; b < a.length && "\r" !== a[b] && "\n" !== a[b];) ++b;
				var c = a.substr(0, b);
				return "\r" === a[b] && ++b, "\n" === a[b] && ++b, i.buffer = a.substr(b), c
			}

			function g(a) {
				var b = new d;
				if (e(a, function (a, c) {
						switch (a) {
							case "id":
								b.set(a, c);
								break;
							case "width":
								b.percent(a, c);
								break;
							case "lines":
								b.integer(a, c);
								break;
							case "regionanchor":
							case "viewportanchor":
								var e = c.split(",");
								if (2 !== e.length) break;
								var f = new d;
								if (f.percent("x", e[0]), f.percent("y", e[1]), !f.has("x") || !f.has("y")) break;
								b.set(a + "X", f.get("x")), b.set(a + "Y", f.get("y"));
								break;
							case "scroll":
								b.alt(a, c, ["up"])
						}
					}, /=/, /\s/), b.has("id")) {
					var c = new(i.vttjs.VTTRegion || i.window.VTTRegion);
					c.width = b.get("width", 100), c.lines = b.get("lines", 3), c.regionAnchorX = b.get("regionanchorX", 0), c.regionAnchorY = b.get("regionanchorY", 100), c.viewportAnchorX = b.get("viewportanchorX", 0), c.viewportAnchorY = b.get("viewportanchorY", 100), c.scroll = b.get("scroll", ""), i.onregion && i.onregion(c), i.regionList.push({
						id: b.get("id"),
						region: c
					})
				}
			}

			function h(a) {
				e(a, function (a, b) {
					switch (a) {
						case "Region":
							g(b)
					}
				}, /:/)
			}
			var i = this;
			a && (i.buffer += i.decoder.decode(a, {
				stream: !0
			}));
			try {
				var j;
				if ("INITIAL" === i.state) {
					if (!/\r\n|\n/.test(i.buffer)) return this;
					j = c();
					var k = j.match(/^WEBVTT([ \t].*)?$/);
					if (!k || !k[0]) throw new b(b.Errors.BadSignature);
					i.state = "HEADER"
				}
				for (var l = !1; i.buffer;) {
					if (!/\r\n|\n/.test(i.buffer)) return this;
					switch (l ? l = !1 : j = c(), i.state) {
						case "HEADER":
							/:/.test(j) ? h(j) : j || (i.state = "ID");
							continue;
						case "NOTE":
							j || (i.state = "ID");
							continue;
						case "ID":
							if (/^NOTE($|[ \t])/.test(j)) {
								i.state = "NOTE";
								break
							}
							if (!j) continue;
							if (i.cue = new(i.vttjs.VTTCue || i.window.VTTCue)(0, 0, ""), i.state = "CUE", -1 === j.indexOf("-->")) {
								i.cue.id = j;
								continue
							}
						case "CUE":
							try {
								f(j, i.cue, i.regionList)
							} catch (m) {
								i.reportOrThrowError(m), i.cue = null, i.state = "BADCUE";
								continue
							}
							i.state = "CUETEXT";
							continue;
						case "CUETEXT":
							var n = -1 !== j.indexOf("-->");
							if (!j || n && (l = !0)) {
								i.oncue && i.oncue(i.cue), i.cue = null, i.state = "ID";
								continue
							}
							i.cue.text && (i.cue.text += "\n"), i.cue.text += j;
							continue;
						case "BADCUE":
							j || (i.state = "ID");
							continue
					}
				}
			} catch (m) {
				i.reportOrThrowError(m), "CUETEXT" === i.state && i.cue && i.oncue && i.oncue(i.cue), i.cue = null, i.state = "INITIAL" === i.state ? "BADWEBVTT" : "BADCUE"
			}
			return this
		},
		flush: function () {
			var a = this;
			try {
				if (a.buffer += a.decoder.decode(), (a.cue || "HEADER" === a.state) && (a.buffer += "\n\n", a.parse()), "INITIAL" === a.state) throw new b(b.Errors.BadSignature)
			} catch (c) {
				a.reportOrThrowError(c)
			}
			return a.onflush && a.onflush(), this
		}
	}, a.WebVTT = n
}(this, this.vttjs || {});

/*=================================================================*/
/*!
 * jQuery QueryString v0.9.0 (Beta version)
 *
 * http://www.darlesson.com/
 *
 * Copyright 2010, Darlesson Oliveira
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @requires jQuery v1.3.2 or above
 *
 * Reporting bugs, comments or suggestions: http://darlesson.com/contact/
 * Documentation and other jQuery plug-ins: http://darlesson.com/jquery/
 * Donations are welcome: http://darlesson.com/donate/
 */


(function ($) {
	$.QueryString = function (queryString, options) {
		var defaults = {
				href: window.location.href,
				index: null,
				isCaseSensitive: true
			},
			settings = $.extend({}, defaults, options);
		var isCaseSensitive = settings.isCaseSensitive,
			queryString = (queryString == null) ? null : (isCaseSensitive) ? queryString.toString() : queryString.toString().toLowerCase(),
			href = settings.href.toString(),
			href = (href.lastIndexOf("?") > -1) ? href.substring(href.lastIndexOf("?") + 1, href.length) : null;
		this.size = 0;
		if (href && !queryString) {
			var arr = href.split("&"),
				arrValue = "",
				thisObject = "";
			this.size = arr.length;
			for (var x = 0; x < arr.length; x++) {
				var query = (isCaseSensitive) ? arr[x].split("=")[0] : arr[x].split("=")[0].toLowerCase(),
					value = arr[x].split("=")[1],
					insertComma = (arrValue == "") ? "[{" : ", ";
				arrValue += (insertComma + "" + query + " : '" + value + "'");
				thisObject += ("this." + query + " = '" + value + "';");
			}
			arrValue = eval(arrValue + "}]")[0];
			eval(thisObject);
			return this;
		} else if (href && queryString && href.indexOf(queryString + "=") > -1) {
			var arr = href.split("&"),
				firstItemValue = null,
				count = 0,
				arrValue = new Array();
			for (var x = 0; x < arr.length; x++) {
				var query = (isCaseSensitive) ? arr[x].split("=")[0] : arr[x].split("=")[0].toLowerCase(),
					value = arr[x].split("=")[1];
				if (isNaN(settings.index) || settings.index > arr.length) {
					return null;
				} else if (query == queryString && settings.index === x) {
					return value;
				} else if (query == queryString) {
					if (!firstItemValue) {
						firstItemValue = value;
					};
					arrValue[count] = value;
					count += 1;
				};
			};
			if (arrValue.length > 1) {
				return arrValue;
			} else {
				return firstItemValue;
			};
		} else if (href && queryString && href.indexOf(queryString + "=") == -1) {
			return null;
		};
		return null;
	};
})(jQuery);
/* =========================================================


/*breakingNews*/
! function () {
	$.fn.breakingNews = function (l) {
		var n = {
				width: "100%",
				modul: "breakingnews",
				color: "default",
				border: !1,
				effect: "fade",
				fontstyle: "normal",
				autoplay: !1,
				timer: 4e3,
				feed: !1,
				feedlabels: !1,
				feedcount: 5
			},
			e = [],
			d = [],
			l = $.extend(n, l);
		return this.each(function () {
			function n() {
				l.modul.width() < 480 ? (l.modul.find(".bn-title h2")
					.css({
						display: "none"
					}), l.modul.find(".bn-title")
					.css({
						width: 10
					}), l.modul.find("ul")
					.css({
						left: 30
					})) : (l.modul.find(".bn-title h2")
					.css({
						display: "inline-block"
					}), l.modul.find(".bn-title")
					.css({
						width: "auto"
					}), l.modul.find("ul")
					.css({
						left: $(l.modul)
							.find(".bn-title")
							.width() + 30
					}))
			}

			function i() {
				u++, u == s && (u = 0), o()
			}

			function o() {
				"fade" == l.effect ? (l.modul.find("ul li")
						.css({
							display: "none"
						}), l.modul.find("ul li")
						.eq(u)
						.fadeIn("normal", function () {
							c = !0
						})) : "slide-h" == l.effect ? l.modul.find("ul li")
					.eq(f)
					.animate({
						width: 0
					}, function () {
						$(this)
							.css({
								display: "none",
								width: "100%"
							}), l.modul.find("ul li")
							.eq(u)
							.css({
								width: 0,
								display: "block"
							}), l.modul.find("ul li")
							.eq(u)
							.animate({
								width: "100%"
							}, function () {
								c = !0, f = u
							})
					}) : "slide-v" == l.effect && (u >= f ? (l.modul.find("ul li")
						.eq(f)
						.animate({
							top: -60
						}), l.modul.find("ul li")
						.eq(u)
						.css({
							top: 60,
							display: "block"
						}), l.modul.find("ul li")
						.eq(u)
						.animate({
							top: 0
						}, function () {
							f = u, c = !0
						})) : (l.modul.find("ul li")
						.eq(f)
						.animate({
							top: 60
						}), l.modul.find("ul li")
						.eq(u)
						.css({
							top: -60,
							display: "block"
						}), l.modul.find("ul li")
						.eq(u)
						.animate({
							top: 0
						}, function () {
							f = u, c = !0
						})))
			}

			function t() {
				for (e = l.feed.split(","), d = l.feedlabels.split(","), s = 0, l.modul.find("ul")
					.html(""), xx = 0, k = 0; k < e.length; k++) $.ajax({
					type: "GET",
					url: document.location.protocol + "//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + l.feedcount + "&callback=?&q=" + encodeURIComponent(e[k].trim()),
					dataType: "json",
					success: function (n) {
						feeddata = n.responseData.feed.entries, $(feeddata)
							.each(function (n) {
								s++, l.modul.find("ul")
									.append('<li><a target="_blank" href="' + feeddata[n].link + '"><span>' + d[xx] + "</span> - " + feeddata[n].title + "</a></li>")
							}), 0 == xx && l.modul.find("ul li")
							.eq(0)
							.fadeIn(), xx++
					},
					error: function () {
						l.modul.find("ul")
							.append("RSS Feed Error!")
					}
				})
			}
			l.modul = $("#" + $(this)
				.attr("id"));
			var a = l.modul,
				u = 0,
				f = 0,
				s = l.modul.find("ul li")
				.length,
				c = !0;
			0 != l.feed ? t() : l.modul.find("ul li")
				.eq(u)
				.fadeIn(), n(), l.autoplay ? (a = setInterval(function () {
						i()
					}, l.timer), $(l.modul)
					.on("mouseenter", function () {
						clearInterval(a)
					}), $(l.modul)
					.on("mouseleave", function () {
						a = setInterval(function () {
							i()
						}, l.timer)
					})) : clearInterval(a), l.border || l.modul.addClass("bn-bordernone"), "italic" == l.fontstyle && l.modul.addClass("bn-italic"), "bold" == l.fontstyle && l.modul.addClass("bn-bold"), "bold-italic" == l.fontstyle && l.modul.addClass("bn-bold bn-italic"), l.modul.addClass("bn-" + l.color), $(window)
				.on("resize", function () {
					n()
				}), l.modul.find(".bn-navi span")
				.on("click", function () {
					c && (c = !1, 0 == $(this)
						.index() ? (u--, 0 > u && (u = s - 1), o()) : (u++, u == s && (u = 0), o()))
				})
		})
	}
}(jQuery);
/*!
 * Buttons helper for fancyBox
 * version: 1.0.5 (Mon, 15 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             buttons: {
 *                 position : 'top'
 *             }
 *         }
 *     });
 *
 */
;
(function ($) {
	//Shortcut for fancyBox object
	var F = $.fancybox;

	//Add helper object
	F.helpers.buttons = {
		defaults: {
			skipSingle: false, // disables if gallery contains single image
			position: 'top', // 'top' or 'bottom'
			tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'
		},

		list: null,
		buttons: null,

		beforeLoad: function (opts, obj) {
			//Remove self if gallery do not have at least two items

			if (opts.skipSingle && obj.group.length < 2) {
				obj.helpers.buttons = false;
				obj.closeBtn = true;

				return;
			}

			//Increase top margin to give space for buttons
			obj.margin[opts.position === 'bottom' ? 2 : 0] += 30;
		},

		onPlayStart: function () {
			if (this.buttons) {
				this.buttons.play.attr('title', 'Pause slideshow').addClass('btnPlayOn');
			}
		},

		onPlayEnd: function () {
			if (this.buttons) {
				this.buttons.play.attr('title', 'Start slideshow').removeClass('btnPlayOn');
			}
		},

		afterShow: function (opts, obj) {
			var buttons = this.buttons;

			if (!buttons) {
				this.list = $(opts.tpl).addClass(opts.position).appendTo('body');

				buttons = {
					prev: this.list.find('.btnPrev').click(F.prev),
					next: this.list.find('.btnNext').click(F.next),
					play: this.list.find('.btnPlay').click(F.play),
					toggle: this.list.find('.btnToggle').click(F.toggle),
					close: this.list.find('.btnClose').click(F.close)
				}
			}

			//Prev
			if (obj.index > 0 || obj.loop) {
				buttons.prev.removeClass('btnDisabled');
			} else {
				buttons.prev.addClass('btnDisabled');
			}

			//Next / Play
			if (obj.loop || obj.index < obj.group.length - 1) {
				buttons.next.removeClass('btnDisabled');
				buttons.play.removeClass('btnDisabled');

			} else {
				buttons.next.addClass('btnDisabled');
				buttons.play.addClass('btnDisabled');
			}

			this.buttons = buttons;

			this.onUpdate(opts, obj);
		},

		onUpdate: function (opts, obj) {
			var toggle;

			if (!this.buttons) {
				return;
			}

			toggle = this.buttons.toggle.removeClass('btnDisabled btnToggleOn');

			//Size toggle button
			if (obj.canShrink) {
				toggle.addClass('btnToggleOn');

			} else if (!obj.canExpand) {
				toggle.addClass('btnDisabled');
			}
		},

		beforeClose: function () {
			if (this.list) {
				this.list.remove();
			}

			this.list = null;
			this.buttons = null;
		}
	};

}(jQuery));