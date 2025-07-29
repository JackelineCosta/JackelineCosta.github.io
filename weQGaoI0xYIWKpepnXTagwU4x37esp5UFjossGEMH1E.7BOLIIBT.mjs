import { a as nr, b as or, c as ir } from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-TLEAHTA6.mjs";
import {
  a as Gr,
  b as Xr,
  c as Zr,
  d as an,
  e as on,
  f as sn,
} from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-L6WS7Q6Y.mjs";
import { g as Hr, h as Yr, i as Nt, j as pt } from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-QRYWGLC6.mjs";
import { a as Et, b as Tt, c as Mt } from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-RCVO6TFR.mjs";
import { a as Jr, b as Qr, c as $r } from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-AT3DGYKQ.mjs";
import { a as St, b as jt, c as At } from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-U654ZQRN.mjs";
import { a as rr } from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-4PLI5XDM.mjs";
import { a as ln } from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-N3AK2SIM.mjs";
import { a as ar } from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-JPJJ42LG.mjs";
import "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-OHVI6WPL.mjs";
import { a as en } from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-ENT5MM6Y.mjs";
import "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-RRSWYNOB.mjs";
import "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-T5AAQNQC.mjs";
import "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-WKHCMCJL.mjs";
import { a as tn, b as rn, c as nn } from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-WHPARFDK.mjs";
import { a as tr } from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-Y4RV7FRP.mjs";
import "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-KAWT63UV.mjs";
import { a as Rt, b as Dt, c as kt } from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-5MLOFHAA.mjs";
import "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-42U43NKG.mjs";
import {
  $ as Br,
  A as Ke,
  C as c,
  F as oe,
  G as Nr,
  I as Y,
  J as Pr,
  L as ge,
  M as R,
  S as It,
  U as ye,
  V as M,
  W as $,
  X as _e,
  Y as Or,
  _ as Lr,
  a as $t,
  b as ne,
  ba as Vr,
  c as Z,
  ca as zr,
  d as _,
  e as Ae,
  f as ae,
  g as Ut,
  h as er,
  i as Tr,
  ja as Wr,
  la as Kr,
  na as De,
  oa as qr,
  p as Re,
  qa as G,
  ra as D,
  t as he,
  ua as tt,
  va as xe,
  wa as z,
  xa as X,
  z as Mr,
} from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-3GPPV2JX.mjs";
import {
  A as b,
  b as We,
  d as U,
  f as dt,
  i as pe,
  m as kr,
  n as et,
  o as je,
  p as Ce,
  q as ue,
  s as Ft,
  t as re,
  v,
  w as mt,
  y as Er,
  z as t,
} from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-5F744S32.mjs";
import "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-HZL4YIMB.mjs";
import { c as I } from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-A3IIQ6X3.mjs";
var cn = (e, r, n) => Math.min(Math.max(n, e), r);
var Pt = (e) => typeof e == "number",
  sr = (e) => Array.isArray(e) && !Pt(e[0]),
  Yn = (e, r, n) => {
    let a = r - e;
    return ((((n - e) % a) + a) % a) + e;
  };
function fn(e, r) {
  return sr(e) ? e[Yn(0, e.length, r)] : e;
}
var lr = (e, r, n) => -n * e + n * r + e;
var qe = (e) => e,
  Ot = (e, r, n) => (r - e === 0 ? 1 : (n - e) / (r - e));
function cr(e, r) {
  let n = e[e.length - 1];
  for (let a = 1; a <= r; a++) {
    let o = Ot(0, r, a);
    e.push(lr(n, 1, o));
  }
}
function fr(e) {
  let r = [0];
  return cr(r, e - 1), r;
}
function dr(e, r = fr(e.length), n = qe) {
  let a = e.length,
    o = a - r.length;
  return (
    o > 0 && cr(r, o),
    (s) => {
      let l = 0;
      for (; l < a - 2 && !(s < r[l + 1]); l++);
      let i = cn(0, 1, Ot(r[l], r[l + 1], s));
      return (i = fn(n, l)(i)), lr(e[l], e[l + 1], i);
    }
  );
}
var mr = (e) => typeof e == "string",
  Lt = { ms: (e) => 1e3 * e, s: (e) => e / 1e3 };
function Bt(e, r) {
  return r ? e * (1e3 / r) : 0;
}
var dn = (e, r, n) =>
    (((1 - 3 * n + 3 * r) * e + (3 * n - 6 * r)) * e + 3 * r) * e,
  Gn = 1e-7,
  Xn = 12;
function Zn(e, r, n, a, o) {
  let s,
    l,
    i = 0;
  do (l = r + (n - r) / 2), (s = dn(l, a, o) - e), s > 0 ? (n = l) : (r = l);
  while (Math.abs(s) > Gn && ++i < Xn);
  return l;
}
function ut(e, r, n, a) {
  if (e === r && n === a) return qe;
  let o = (s) => Zn(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : dn(o(s), r, a));
}
var Bi = {
  ease: ut(0.25, 0.1, 0.25, 1),
  "ease-in": ut(0.42, 0, 1, 1),
  "ease-in-out": ut(0.42, 0, 0.58, 1),
  "ease-out": ut(0, 0, 0.58, 1),
};
function pr(e, r) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) &&
      r.indexOf(a) < 0 &&
      (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var o = 0;
    for (a = Object.getOwnPropertySymbols(e); o < a.length; o++)
      r.indexOf(a[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[o]) &&
        (n[a[o]] = e[a[o]]);
  }
  return n;
}
var rt = {};
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.warning = function () {};
rt.invariant = function () {};
var qi = rt.__esModule,
  Hi = rt.warning,
  $n = rt.invariant;
var ea = 5;
function Vt(e, r, n) {
  let a = Math.max(r - ea, 0);
  return Bt(n - e(a), r - a);
}
var nt = { stiffness: 100, damping: 10, mass: 1 },
  ta = (e = nt.stiffness, r = nt.damping, n = nt.mass) =>
    r / (2 * Math.sqrt(e * n));
function ra(e, r, n) {
  return (e < r && n >= r) || (e > r && n <= r);
}
var hr = ({
    stiffness: e = nt.stiffness,
    damping: r = nt.damping,
    mass: n = nt.mass,
    from: a = 0,
    to: o = 1,
    velocity: s = 0,
    restSpeed: l = 2,
    restDistance: i = 0.5,
  } = {}) => {
    s = s ? Lt.s(s) : 0;
    let u = { done: !1, hasReachedTarget: !1, current: a, target: o },
      m = o - a,
      f = Math.sqrt(e / n) / 1e3,
      d = ta(e, r, n),
      h;
    if (d < 1) {
      let x = f * Math.sqrt(1 - d * d);
      h = (w) =>
        o -
        Math.exp(-d * f * w) *
          (((d * f * m - s) / x) * Math.sin(x * w) + m * Math.cos(x * w));
    } else h = (x) => o - Math.exp(-f * x) * (m + (f * m - s) * x);
    return (x) => {
      u.current = h(x);
      let w = x === 0 ? s : Vt(h, x, u.current),
        k = Math.abs(w) <= l,
        j = Math.abs(o - u.current) <= i;
      return (u.done = k && j), (u.hasReachedTarget = ra(a, o, u.current)), u;
    };
  },
  mn = ({
    from: e = 0,
    velocity: r = 0,
    power: n = 0.8,
    decay: a = 0.325,
    bounceDamping: o,
    bounceStiffness: s,
    changeTarget: l,
    min: i,
    max: u,
    restDistance: m = 0.5,
    restSpeed: f,
  }) => {
    a = Lt.ms(a);
    let d = { hasReachedTarget: !1, done: !1, current: e, target: e },
      h = (g) => (i !== void 0 && g < i) || (u !== void 0 && g > u),
      x = (g) =>
        i === void 0
          ? u
          : u === void 0 || Math.abs(i - g) < Math.abs(u - g)
          ? i
          : u,
      w = n * r,
      k = e + w,
      j = l === void 0 ? k : l(k);
    (d.target = j), j !== k && (w = j - e);
    let O = (g) => -w * Math.exp(-g / a),
      V = (g) => j + O(g),
      E = (g) => {
        let N = O(g),
          A = V(g);
        (d.done = Math.abs(N) <= m), (d.current = d.done ? j : A);
      },
      S,
      p,
      C = (g) => {
        h(d.current) &&
          ((S = g),
          (p = hr({
            from: d.current,
            to: x(d.current),
            velocity: Vt(V, g, d.current),
            damping: o,
            stiffness: s,
            restDistance: m,
            restSpeed: f,
          })));
      };
    return (
      C(0),
      (g) => {
        let N = !1;
        return (
          !p && S === void 0 && ((N = !0), E(g), C(g)),
          S !== void 0 && g > S
            ? ((d.hasReachedTarget = !0), p(g - S))
            : ((d.hasReachedTarget = !1), !N && E(g), d)
        );
      }
    );
  },
  ur = 10,
  na = 1e4;
function pn(e) {
  let r,
    n = ur,
    a = e(0),
    o = [a.current];
  for (; !a.done && n < na; )
    (a = e(n)),
      o.push(a.done ? a.target : a.current),
      r === void 0 && a.hasReachedTarget && (r = n),
      (n += ur);
  let s = n - ur;
  return (
    o.length === 1 && o.push(a.current),
    { keyframes: o, duration: s / 1e3, overshootDuration: (r ?? s) / 1e3 }
  );
}
var aa = ["", "X", "Y", "Z"],
  oa = ["translate", "scale", "rotate", "skew"];
var un = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (e) => e + "deg",
  },
  ia = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (e) => e + "px",
    },
    rotate: un,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: qe },
    skew: un,
  },
  sa = new Map(),
  la = (e) => `--motion-${e}`,
  Fn = ["x", "y", "z"];
oa.forEach((e) => {
  aa.forEach((r) => {
    Fn.push(e + r), sa.set(la(e + r), ia[e]);
  });
});
var ds = new Set(Fn);
var hn = (e) => document.createElement("div").animate(e, { duration: 0.001 }),
  gn = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        hn({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!hn({ opacity: [0, 1] }).finished,
  },
  gr = {},
  ca = {};
for (let e in gn) ca[e] = () => (gr[e] === void 0 && (gr[e] = gn[e]()), gr[e]);
function Un(e, r) {
  var n;
  return (
    typeof e == "string"
      ? r
        ? (((n = r[e]) !== null && n !== void 0) ||
            (r[e] = document.querySelectorAll(e)),
          (e = r[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function In(e) {
  let r = new WeakMap();
  return (n = {}) => {
    let a = new Map(),
      o = (l = 0, i = 100, u = 0, m = !1) => {
        let f = `${l}-${i}-${u}-${m}`;
        return (
          a.has(f) ||
            a.set(
              f,
              e(
                Object.assign(
                  {
                    from: l,
                    to: i,
                    velocity: u,
                    restSpeed: m ? 0.05 : 2,
                    restDistance: m ? 0.01 : 0.5,
                  },
                  n
                )
              )
            ),
          a.get(f)
        );
      },
      s = (l) => (r.has(l) || r.set(l, pn(l)), r.get(l));
    return {
      createAnimation: (l, i, u, m, f) => {
        var d, h;
        let x,
          w = l.length;
        if (u && w <= 2 && l.every(fa)) {
          let j = l[w - 1],
            O = w === 1 ? null : l[0],
            V = 0,
            E = 0,
            S = f?.generator;
          if (S) {
            let { animation: g, generatorStartTime: N } = f,
              A = g?.startTime || N || 0,
              P = g?.currentTime || performance.now() - A,
              J = S(P).current;
            (E = (d = O) !== null && d !== void 0 ? d : J),
              (w === 1 || (w === 2 && l[0] === null)) &&
                (V = Vt((Q) => S(Q).current, P, J));
          } else E = (h = O) !== null && h !== void 0 ? h : parseFloat(i());
          let p = o(E, j, V, m?.includes("scale")),
            C = s(p);
          (x = Object.assign(Object.assign({}, C), { easing: "linear" })),
            f &&
              ((f.generator = p), (f.generatorStartTime = performance.now()));
        } else x = { easing: "ease", duration: s(o(0, 100)).overshootDuration };
        return x;
      },
    };
  };
}
var fa = (e) => typeof e != "string",
  ms = In(hr),
  ps = In(mn),
  da = { any: 0, all: 1 };
function ma(e, r, { root: n, margin: a, amount: o = "any" } = {}) {
  if (typeof IntersectionObserver > "u") return () => {};
  let s = Un(e),
    l = new WeakMap(),
    i = (m) => {
      m.forEach((f) => {
        let d = l.get(f.target);
        if (f.isIntersecting !== !!d)
          if (f.isIntersecting) {
            let h = r(f);
            typeof h == "function" ? l.set(f.target, h) : u.unobserve(f.target);
          } else d && (d(f), l.delete(f.target));
      });
    },
    u = new IntersectionObserver(i, {
      root: n,
      rootMargin: a,
      threshold: typeof o == "number" ? o : da[o],
    });
  return s.forEach((m) => u.observe(m)), () => u.disconnect();
}
var zt = new WeakMap(),
  ke;
function pa(e, r) {
  if (r) {
    let { inlineSize: n, blockSize: a } = r[0];
    return { width: n, height: a };
  }
  return e instanceof SVGElement && "getBBox" in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function ua({ target: e, contentRect: r, borderBoxSize: n }) {
  var a;
  (a = zt.get(e)) === null ||
    a === void 0 ||
    a.forEach((o) => {
      o({
        target: e,
        contentSize: r,
        get size() {
          return pa(e, n);
        },
      });
    });
}
function ha(e) {
  e.forEach(ua);
}
function ga() {
  typeof ResizeObserver < "u" && (ke = new ResizeObserver(ha));
}
function ya(e, r) {
  ke || ga();
  let n = Un(e);
  return (
    n.forEach((a) => {
      let o = zt.get(a);
      o || ((o = new Set()), zt.set(a, o)), o.add(r), ke?.observe(a);
    }),
    () => {
      n.forEach((a) => {
        let o = zt.get(a);
        o?.delete(r), o?.size || ke?.unobserve(a);
      });
    }
  );
}
var Wt = new Set(),
  gt;
function xa() {
  (gt = () => {
    let e = { width: I.innerWidth, height: I.innerHeight },
      r = { target: I, size: e, contentSize: e };
    Wt.forEach((n) => n(r));
  }),
    I.addEventListener("resize", gt);
}
function wa(e) {
  return (
    Wt.add(e),
    gt || xa(),
    () => {
      Wt.delete(e), !Wt.size && gt && (gt = void 0);
    }
  );
}
function yt(e, r) {
  return typeof e == "function" ? wa(e) : ya(e, r);
}
var va = 50,
  yn = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  ba = () => ({ time: 0, x: yn(), y: yn() }),
  Ca = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function xn(e, r, n, a) {
  let o = n[r],
    { length: s, position: l } = Ca[r],
    i = o.current,
    u = n.time;
  (o.current = e["scroll" + l]),
    (o.scrollLength = e["scroll" + s] - e["client" + s]),
    (o.offset.length = 0),
    (o.offset[0] = 0),
    (o.offset[1] = o.scrollLength),
    (o.progress = Ot(0, o.scrollLength, o.current));
  let m = a - u;
  o.velocity = m > va ? 0 : Bt(o.current - i, m);
}
function _a(e, r, n) {
  xn(e, "x", r, n), xn(e, "y", r, n), (r.time = n);
}
function Fa(e, r) {
  let n = { x: 0, y: 0 },
    a = e;
  for (; a && a !== r; )
    if (a instanceof HTMLElement)
      (n.x += a.offsetLeft), (n.y += a.offsetTop), (a = a.offsetParent);
    else if (a instanceof SVGGraphicsElement && "getBBox" in a) {
      let { top: o, left: s } = a.getBBox();
      for (n.x += s, n.y += o; a && a.tagName !== "svg"; ) a = a.parentNode;
    }
  return n;
}
var Ua = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  xr = { start: 0, center: 0.5, end: 1 };
function wn(e, r, n = 0) {
  let a = 0;
  if ((xr[e] !== void 0 && (e = xr[e]), mr(e))) {
    let o = parseFloat(e);
    e.endsWith("px")
      ? (a = o)
      : e.endsWith("%")
      ? (e = o / 100)
      : e.endsWith("vw")
      ? (a = (o / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (a = (o / 100) * document.documentElement.clientHeight)
      : (e = o);
  }
  return Pt(e) && (a = r * e), n + a;
}
var Ia = [0, 0];
function Sa(e, r, n, a) {
  let o = Array.isArray(e) ? e : Ia,
    s = 0,
    l = 0;
  return (
    Pt(e)
      ? (o = [e, e])
      : mr(e) &&
        ((e = e.trim()),
        (o = e.includes(" ") ? e.split(" ") : [e, xr[e] ? e : "0"])),
    (s = wn(o[0], n, a)),
    (l = wn(o[1], r)),
    s - l
  );
}
var ja = { x: 0, y: 0 };
function Aa(e, r, n) {
  let { offset: a = Ua.All } = n,
    { target: o = e, axis: s = "y" } = n,
    l = s === "y" ? "height" : "width",
    i = o !== e ? Fa(o, e) : ja,
    u =
      o === e
        ? { width: e.scrollWidth, height: e.scrollHeight }
        : { width: o.clientWidth, height: o.clientHeight },
    m = { width: e.clientWidth, height: e.clientHeight };
  r[s].offset.length = 0;
  let f = !r[s].interpolate,
    d = a.length;
  for (let h = 0; h < d; h++) {
    let x = Sa(a[h], m[l], u[l], i[s]);
    f || x === r[s].interpolatorOffsets[h] || (f = !0), (r[s].offset[h] = x);
  }
  f &&
    ((r[s].interpolate = dr(fr(d), r[s].offset)),
    (r[s].interpolatorOffsets = [...r[s].offset])),
    (r[s].progress = r[s].interpolate(r[s].current));
}
function Ra(e, r = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), r !== e)) {
    let a = r;
    for (; a && a != e; )
      (n.x.targetOffset += a.offsetLeft),
        (n.y.targetOffset += a.offsetTop),
        (a = a.offsetParent);
  }
  (n.x.targetLength = r === e ? r.scrollWidth : r.clientWidth),
    (n.y.targetLength = r === e ? r.scrollHeight : r.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function Da(e, r, n, a = {}) {
  let o = a.axis || "y";
  return {
    measure: () => Ra(e, a.target, n),
    update: (s) => {
      _a(e, n, s), (a.offset || a.target) && Aa(e, n, a);
    },
    notify: typeof r == "function" ? () => r(n) : ka(r, n[o]),
  };
}
function ka(e, r) {
  return (
    e.pause(),
    e.forEachNative((n, { easing: a }) => {
      var o, s;
      if (n.updateDuration) a || (n.easing = qe), n.updateDuration(1);
      else {
        let l = { duration: 1e3 };
        a || (l.easing = "linear"),
          (s =
            (o = n.effect) === null || o === void 0
              ? void 0
              : o.updateTiming) === null ||
            s === void 0 ||
            s.call(o, l);
      }
    }),
    () => {
      e.currentTime = r.progress;
    }
  );
}
var ht = new WeakMap(),
  vn = new WeakMap(),
  yr = new WeakMap(),
  bn = (e) => (e === document.documentElement ? I : e);
function Sn(e, r = {}) {
  var { container: n = document.documentElement } = r,
    a = pr(r, ["container"]);
  let o = yr.get(n);
  o || ((o = new Set()), yr.set(n, o));
  let s = ba(),
    l = Da(n, e, s, a);
  if ((o.add(l), !ht.has(n))) {
    let m = () => {
      let d = performance.now();
      for (let h of o) h.measure();
      for (let h of o) h.update(d);
      for (let h of o) h.notify();
    };
    ht.set(n, m);
    let f = bn(n);
    I.addEventListener("resize", m, { passive: !0 }),
      n !== document.documentElement && vn.set(n, yt(n, m)),
      f.addEventListener("scroll", m, { passive: !0 });
  }
  let i = ht.get(n),
    u = requestAnimationFrame(i);
  return () => {
    var m;
    typeof e != "function" && e.stop(), cancelAnimationFrame(u);
    let f = yr.get(n);
    if (!f || (f.delete(l), f.size)) return;
    let d = ht.get(n);
    ht.delete(n),
      d &&
        (bn(n).removeEventListener("scroll", d),
        (m = vn.get(n)) === null || m === void 0 || m(),
        I.removeEventListener("resize", d));
  };
}
function wr(e, r, n) {
  e.dispatchEvent(new CustomEvent(r, { detail: { originalEvent: n } }));
}
function Cn(e, r, n) {
  e.dispatchEvent(new CustomEvent(r, { detail: { originalEntry: n } }));
}
var Ea = {
    isActive: (e) => !!e.inView,
    subscribe: (e, { enable: r, disable: n }, { inViewOptions: a = {} }) => {
      let { once: o } = a,
        s = pr(a, ["once"]);
      return ma(
        e,
        (l) => {
          if ((r(), Cn(e, "viewenter", l), !o))
            return (i) => {
              n(), Cn(e, "viewleave", i);
            };
        },
        s
      );
    },
  },
  _n = (e, r, n) => (a) => {
    (!a.pointerType || a.pointerType === "mouse") && (n(), wr(e, r, a));
  },
  Ta = {
    isActive: (e) => !!e.hover,
    subscribe: (e, { enable: r, disable: n }) => {
      let a = _n(e, "hoverstart", r),
        o = _n(e, "hoverend", n);
      return (
        e.addEventListener("pointerenter", a),
        e.addEventListener("pointerleave", o),
        () => {
          e.removeEventListener("pointerenter", a),
            e.removeEventListener("pointerleave", o);
        }
      );
    },
  },
  Ma = {
    isActive: (e) => !!e.press,
    subscribe: (e, { enable: r, disable: n }) => {
      let a = (s) => {
          n(), wr(e, "pressend", s), I.removeEventListener("pointerup", a);
        },
        o = (s) => {
          r(), wr(e, "pressstart", s), I.addEventListener("pointerup", a);
        };
      return (
        e.addEventListener("pointerdown", o),
        () => {
          e.removeEventListener("pointerdown", o),
            I.removeEventListener("pointerup", a);
        }
      );
    },
  },
  Na = { inView: Ea, hover: Ta, press: Ma },
  us = ["initial", "animate", ...Object.keys(Na), "exit"];
var Pa = 100,
  Oa = {
    left: (e) => `translateX(-${e}px)`,
    right: (e) => `translateX(${e}px)`,
    top: (e) => `translateY(-${e}px)`,
    bottom: (e) => `translateY(${e}px)`,
  };
function at(e) {
  let {
      slots: r = [],
      gap: n,
      padding: a,
      paddingPerSide: o,
      paddingTop: s,
      paddingRight: l,
      paddingBottom: i,
      paddingLeft: u,
      speed: m,
      hoverFactor: f,
      direction: d,
      alignment: h,
      sizingOptions: x,
      fadeOptions: w,
      style: k,
    } = e,
    {
      fadeContent: j,
      overflow: O,
      fadeWidth: V,
      fadeInset: E,
      fadeAlpha: S,
    } = w,
    { widthType: p, heightType: C } = x,
    g = o ? `${s}px ${l}px ${i}px ${u}px` : `${a}px`,
    N = Ke.current(),
    A = N === Ke.canvas || N === Ke.export,
    P = r.filter(Boolean),
    J = We.count(P),
    Q = J > 0;
  d === !0 && (d = "left");
  let fe = d === "left" || d === "right",
    it = Ae(0),
    we = Oa[d],
    st = ae(it, we),
    de = v(null),
    W = re(() => [{ current: null }, { current: null }], []),
    [ee, lt] = mt({ parent: null, children: null }),
    He = null,
    Te = [],
    ve = 0,
    Me = 0;
  A && ((ve = J ? Math.floor(10 / J) : 0), (Me = 1)),
    !A &&
      Q &&
      ee.parent &&
      ((ve = Math.round((ee.parent / ee.children) * 2) + 1),
      (ve = Math.min(ve, Pa)),
      (Me = 1));
  let Ye = et(() => {
      if (Q && de.current) {
        let F = fe ? de.current.offsetWidth : de.current.offsetHeight,
          T = W[0].current
            ? fe
              ? W[0].current.offsetLeft
              : W[0].current.offsetTop
            : 0,
          be =
            (W[1].current
              ? fe
                ? W[1].current.offsetLeft + W[1].current.offsetWidth
                : W[1].current.offsetTop + W[1].current.offsetHeight
              : 0) -
            T +
            n;
        lt({ parent: F, children: be });
      }
    }, []),
    ct = A ? { contentVisibility: "auto" } : {};
  if (Q) {
    if (!A) {
      let F = v(!0);
      Ft(
        () => (
          $t.read(Ye, !1, !0),
          yt(de.current, ({ contentSize: T }) => {
            !F.current && (T.width || T.height) && $t.read(Ye, !1, !0),
              (F.current = !1);
          })
        ),
        []
      );
    }
    He = We.map(P, (F, T) => {
      let se;
      T === 0 && (se = W[0]), T === P.length - 1 && (se = W[1]);
      let be = {
        width: p ? F.props?.width : "100%",
        height: C ? F.props?.height : "100%",
      };
      return t(Z, {
        inherit: "id",
        children: t("li", {
          ref: se,
          style: be,
          children: dt(
            F,
            {
              style: { ...F.props?.style, ...be, flexShrink: 0, ...ct },
              layoutId: F.props.layoutId
                ? F.props.layoutId + "-original-" + T
                : void 0,
            },
            F.props?.children
          ),
        }),
      });
    });
  }
  let me = A ? !0 : Tr(de);
  if (!A)
    for (let F = 0; F < ve; F++)
      Te = Te.concat(
        We.map(P, (T, se) => {
          let be = {
            width: p ? T.props?.width : "100%",
            height: C ? T.props?.height : "100%",
            willChange: me ? "transform" : void 0,
          };
          return t(
            Z,
            {
              inherit: "id",
              children: t(
                "li",
                {
                  style: be,
                  "aria-hidden": !0,
                  children: dt(
                    T,
                    {
                      key: F + " " + se,
                      style: {
                        ...T.props?.style,
                        width: p ? T.props?.width : "100%",
                        height: C ? T.props?.height : "100%",
                        flexShrink: 0,
                        ...ct,
                      },
                      layoutId: T.props.layoutId
                        ? T.props.layoutId + "-dupe-" + F
                        : void 0,
                    },
                    T.props?.children
                  ),
                },
                F + "li" + se
              ),
            },
            F + "lg" + se
          );
        })
      );
  let K = ee.children + ee.children * Math.round(ee.parent / ee.children),
    te = v(null),
    Ge = v(null),
    Xe = v(0),
    Ne = v(!1),
    Ze = Ut(),
    Pe = v(null),
    L = v(null);
  if (!A) {
    Ce(() => {
      if (!(Ze || !K || !m))
        return (
          (L.current = Pe.current.animate(
            { transform: [we(0), we(K)] },
            {
              duration: (Math.abs(K) / m) * 1e3,
              iterations: 1 / 0,
              easing: "linear",
            }
          )),
          () => L.current.cancel()
        );
    }, [f, K, m]);
    let F = et(() => {
      if (!L.current) return;
      let T = document.hidden;
      me && !T && L.current.playState === "paused"
        ? L.current.play()
        : (!me || T) && L.current.playState === "running" && L.current.pause();
    }, [me]);
    Ce(() => {
      F();
    }, [me, f, K, m]),
      Ce(
        () => (
          document.addEventListener("visibilitychange", F),
          () => {
            document.removeEventListener("visibilitychange", F);
          }
        ),
        [F]
      );
  }
  let Oe = fe ? "to right" : "to bottom",
    Le = V / 2,
    Xt = 100 - V / 2,
    _t = Wa(E, 0, Le),
    Be = 100 - E,
    Fe = `linear-gradient(${Oe}, rgba(0, 0, 0, ${S}) ${_t}%, rgba(0, 0, 0, 1) ${Le}%, rgba(0, 0, 0, 1) ${Xt}%, rgba(0, 0, 0, ${S}) ${Be}%)`;
  return Q
    ? t("section", {
        style: {
          ...jn,
          opacity: Me,
          WebkitMaskImage: j ? Fe : void 0,
          maskImage: j ? Fe : void 0,
          overflow: O ? "visible" : "hidden",
          padding: g,
        },
        ref: de,
        children: b(_.ul, {
          ref: Pe,
          style: {
            ...jn,
            gap: n,
            top: d === "bottom" && An(K) ? -K : void 0,
            left: d === "right" && An(K) ? -K : void 0,
            placeItems: h,
            position: "relative",
            flexDirection: fe ? "row" : "column",
            ...k,
            willChange: A || !me ? "auto" : "transform",
            transform: we(0),
          },
          onMouseEnter: () => {
            (Ne.current = !0), L.current && (L.current.playbackRate = f);
          },
          onMouseLeave: () => {
            (Ne.current = !1), L.current && (L.current.playbackRate = 1);
          },
          children: [He, Te],
        }),
      })
    : b("section", {
        style: La,
        children: [
          t("div", { style: Ba, children: "\u2728" }),
          t("p", { style: Va, children: "Connect to Content" }),
          t("p", {
            style: za,
            children:
              "Add layers or components to infinitely loop on your page.",
          }),
        ],
      });
}
at.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
oe(at, {
  slots: {
    type: c.Array,
    title: "Children",
    control: { type: c.ComponentInstance },
  },
  speed: {
    type: c.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: c.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: !0,
  },
  alignment: {
    type: c.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: c.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: c.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: c.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: c.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
      heightType: {
        type: c.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: c.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: c.Boolean, title: "Fade", defaultValue: !0 },
      overflow: {
        type: c.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(e) {
          return e.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: c.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeInset: {
        type: c.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: c.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: c.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: "Slows down the speed while you are hovering.",
  },
});
var jn = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  La = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  Ba = { fontSize: 32, marginBottom: 10 },
  Va = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  za = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  },
  Wa = (e, r, n) => Math.min(Math.max(e, r), n),
  An = (e) => typeof e == "number" && !isNaN(e);
var Ha = z(at),
  Ya = ["ryYOo9aA7", "bTpj6OBDJ", "XmFryAt7M"],
  Ga = "framer-gjDMc",
  Xa = {
    bTpj6OBDJ: "framer-v-tqnv78",
    ryYOo9aA7: "framer-v-t5t6jd",
    XmFryAt7M: "framer-v-10kkxj",
  };
function Za(e, ...r) {
  let n = {};
  return r?.forEach((a) => a && Object.assign(n, e[a])), n;
}
var Ja = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Qa = ({ value: e, children: r }) => {
    let n = je(ne),
      a = e ?? n.transition,
      o = re(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return t(ne.Provider, { value: o, children: r });
  },
  $a = _.create(U),
  eo = { Desktop: "ryYOo9aA7", Phone: "XmFryAt7M", Tablet: "bTpj6OBDJ" },
  to = ({ height: e, id: r, width: n, ...a }) => ({
    ...a,
    variant: eo[a.variant] ?? a.variant ?? "ryYOo9aA7",
  }),
  ro = (e, r) =>
    e.layoutDependency ? r.join("-") + e.layoutDependency : r.join("-"),
  no = pe(function (e, r) {
    let n = v(null),
      a = r ?? n,
      o = ue(),
      { activeLocale: s, setLocale: l } = he(),
      i = ye(),
      { style: u, className: m, layoutId: f, variant: d, ...h } = to(e),
      {
        baseVariant: x,
        classNames: w,
        clearLoadingGesture: k,
        gestureHandlers: j,
        gestureVariant: O,
        isLoading: V,
        setGestureState: E,
        setVariant: S,
        variants: p,
      } = De({
        cycleOrder: Ya,
        defaultVariant: "ryYOo9aA7",
        ref: a,
        variant: d,
        variantClassNames: Xa,
      }),
      C = ro(e, p),
      N = Y(Ga, ...[Mt, kt]);
    return t(Z, {
      id: f ?? o,
      children: t($a, {
        animate: p,
        initial: !1,
        children: t(Qa, {
          value: Ja,
          children: b(_.section, {
            ...h,
            ...j,
            className: Y(N, "framer-t5t6jd", m, w),
            "data-framer-name": "Desktop",
            layoutDependency: C,
            layoutId: "ryYOo9aA7",
            ref: a,
            style: { ...u },
            ...Za(
              {
                bTpj6OBDJ: { "data-framer-name": "Tablet" },
                XmFryAt7M: { "data-framer-name": "Phone" },
              },
              x,
              O
            ),
            children: [
              t(D, {
                __fromCanvasComponent: !0,
                children: t(U, {
                  children: t(_.h2, {
                    className: "framer-styles-preset-3pg9x0",
                    "data-styles-preset": "Lc6nJbsaq",
                    style: { "--framer-text-alignment": "left" },
                    children: "Projetos",
                  }),
                }),
                className: "framer-17uq5z9",
                fonts: ["Inter"],
                layoutDependency: C,
                layoutId: "tCrD6IiKx",
                style: {
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
              }),
              t(D, {
                __fromCanvasComponent: !0,
                children: t(U, {
                  children: t(_.p, {
                    className: "framer-styles-preset-1qiv7jj",
                    "data-styles-preset": "FgV7KPQav",
                    style: { "--framer-text-alignment": "center" },
                    children:
                      "Esses s\xE3o alguns dos projetos que j\xE1 conclu\xED e integram minha trajet\xF3ria at\xE9 aqui. No momento, estou desenvolvendo novas ideias e experi\xEAncias, que em breve tamb\xE9m estar\xE3o por aqui.",
                  }),
                }),
                className: "framer-1m8q3rs",
                fonts: ["Inter"],
                layoutDependency: C,
                layoutId: "svsEnwTnR",
                style: {
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
              }),
              t(M, {
                children: t(_e, {
                  className: "framer-1nw9c21-container",
                  isAuthoredByUser: !0,
                  isModuleExternal: !0,
                  layoutDependency: C,
                  layoutId: "vFZkzxUeA-container",
                  nodeId: "vFZkzxUeA",
                  rendersWithMotion: !0,
                  scopeId: "GwMxRMeC2",
                  children: t(at, {
                    alignment: "center",
                    direction: "left",
                    fadeOptions: {
                      fadeAlpha: 0,
                      fadeContent: !0,
                      fadeInset: 0,
                      fadeWidth: 25,
                      overflow: !1,
                    },
                    gap: 30,
                    height: "100%",
                    hoverFactor: 1,
                    id: "vFZkzxUeA",
                    layoutId: "vFZkzxUeA",
                    padding: 10,
                    paddingBottom: 10,
                    paddingLeft: 10,
                    paddingPerSide: !1,
                    paddingRight: 10,
                    paddingTop: 10,
                    sizingOptions: { heightType: !1, widthType: !1 },
                    slots: [
                      t(G, {
                        background: {
                          alt: "Website Design",
                          fit: "fill",
                          pixelHeight: 925,
                          pixelWidth: 971,
                          positionX: "center",
                          positionY: "top",
                          sizes: "375px",
                          src: "https://framerusercontent.com/images/SvdOaFyL5bDmnTteUi3TVrZgMYc.png",
                          srcSet:
                            "https://framerusercontent.com/images/SvdOaFyL5bDmnTteUi3TVrZgMYc.png?scale-down-to=512 512w,https://framerusercontent.com/images/SvdOaFyL5bDmnTteUi3TVrZgMYc.png 971w",
                        },
                        className: "framer-17beeyu",
                        layoutDependency: C,
                        layoutId: "onSWGSRkI",
                        style: {
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                        children: t(zr, {
                          href: "https://www.behance.net/gallery/225778623/Equilibre-se-UIUX-Plataforma-de-Terapia-Online",
                          motionChild: !0,
                          nodeId: "VF2GjB7NO",
                          openInNewTab: !0,
                          scopeId: "GwMxRMeC2",
                          children: t(G, {
                            as: "a",
                            background: {
                              alt: "Website Design",
                              fit: "fill",
                              pixelHeight: 668,
                              pixelWidth: 324,
                              positionX: "center",
                              positionY: "top",
                              sizes: "375px",
                              src: "https://framerusercontent.com/images/xKLrazC6M5aLrO32Yl40wfns6kc.png",
                              srcSet:
                                "https://framerusercontent.com/images/xKLrazC6M5aLrO32Yl40wfns6kc.png 324w",
                            },
                            className: "framer-qwahc5 framer-7ddbpu",
                            layoutDependency: C,
                            layoutId: "VF2GjB7NO",
                            style: {
                              borderBottomLeftRadius: 10,
                              borderBottomRightRadius: 10,
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10,
                            },
                          }),
                        }),
                      }),
                      t(G, {
                        background: {
                          alt: "Website Design",
                          fit: "fill",
                          pixelHeight: 925,
                          pixelWidth: 971,
                          positionX: "center",
                          positionY: "top",
                          sizes: "375px",
                          src: "https://framerusercontent.com/images/SvdOaFyL5bDmnTteUi3TVrZgMYc.png",
                          srcSet:
                            "https://framerusercontent.com/images/SvdOaFyL5bDmnTteUi3TVrZgMYc.png?scale-down-to=512 512w,https://framerusercontent.com/images/SvdOaFyL5bDmnTteUi3TVrZgMYc.png 971w",
                        },
                        className: "framer-lokupi",
                        layoutDependency: C,
                        layoutId: "BllTu4b28",
                        style: {
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                      }),
                      t(G, {
                        background: {
                          alt: "Website Design",
                          fit: "fill",
                          pixelHeight: 925,
                          pixelWidth: 971,
                          positionX: "center",
                          positionY: "top",
                          sizes: "375px",
                          src: "https://framerusercontent.com/images/SvdOaFyL5bDmnTteUi3TVrZgMYc.png",
                          srcSet:
                            "https://framerusercontent.com/images/SvdOaFyL5bDmnTteUi3TVrZgMYc.png?scale-down-to=512 512w,https://framerusercontent.com/images/SvdOaFyL5bDmnTteUi3TVrZgMYc.png 971w",
                        },
                        className: "framer-k9d6qp",
                        layoutDependency: C,
                        layoutId: "uN6IbCKAu",
                        style: {
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                      }),
                      t(G, {
                        background: {
                          alt: "Website Design",
                          fit: "fill",
                          pixelHeight: 668,
                          pixelWidth: 324,
                          positionX: "center",
                          positionY: "top",
                          sizes: "375px",
                          src: "https://framerusercontent.com/images/xKLrazC6M5aLrO32Yl40wfns6kc.png",
                          srcSet:
                            "https://framerusercontent.com/images/xKLrazC6M5aLrO32Yl40wfns6kc.png 324w",
                        },
                        className: "framer-30jiv2",
                        layoutDependency: C,
                        layoutId: "uh89KF_Mh",
                        style: {
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                        children: t(G, {
                          background: {
                            alt: "Website Design",
                            fit: "fill",
                            pixelHeight: 925,
                            pixelWidth: 971,
                            positionX: "center",
                            positionY: "top",
                            sizes: "375px",
                            src: "https://framerusercontent.com/images/SvdOaFyL5bDmnTteUi3TVrZgMYc.png",
                            srcSet:
                              "https://framerusercontent.com/images/SvdOaFyL5bDmnTteUi3TVrZgMYc.png?scale-down-to=512 512w,https://framerusercontent.com/images/SvdOaFyL5bDmnTteUi3TVrZgMYc.png 971w",
                          },
                          className: "framer-lde83f",
                          layoutDependency: C,
                          layoutId: "q0iABpogk",
                          style: {
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                          },
                        }),
                      }),
                      t(G, {
                        background: {
                          alt: "Website Design",
                          fit: "fill",
                          pixelHeight: 668,
                          pixelWidth: 324,
                          positionX: "center",
                          positionY: "top",
                          sizes: "375px",
                          src: "https://framerusercontent.com/images/xKLrazC6M5aLrO32Yl40wfns6kc.png",
                          srcSet:
                            "https://framerusercontent.com/images/xKLrazC6M5aLrO32Yl40wfns6kc.png 324w",
                        },
                        className: "framer-1ko8el4",
                        "data-framer-name": "FF",
                        layoutDependency: C,
                        layoutId: "jZCmYsKmr",
                        style: {
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                        children: t(G, {
                          background: {
                            alt: "Website Design",
                            fit: "fill",
                            pixelHeight: 925,
                            pixelWidth: 971,
                            positionX: "center",
                            positionY: "top",
                            sizes: "375px",
                            src: "https://framerusercontent.com/images/SvdOaFyL5bDmnTteUi3TVrZgMYc.png",
                            srcSet:
                              "https://framerusercontent.com/images/SvdOaFyL5bDmnTteUi3TVrZgMYc.png?scale-down-to=512 512w,https://framerusercontent.com/images/SvdOaFyL5bDmnTteUi3TVrZgMYc.png 971w",
                          },
                          className: "framer-1xx7t7n",
                          layoutDependency: C,
                          layoutId: "rxjgFSfhK",
                          style: {
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                          },
                        }),
                      }),
                    ],
                    speed: 20,
                    style: { height: "100%", maxWidth: "100%", width: "100%" },
                    width: "100%",
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  ao = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-gjDMc.framer-7ddbpu, .framer-gjDMc .framer-7ddbpu { display: block; }",
    ".framer-gjDMc.framer-t5t6jd { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 83px 0px 83px 0px; position: relative; width: 1200px; }",
    ".framer-gjDMc .framer-17uq5z9 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-gjDMc .framer-1m8q3rs { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-gjDMc .framer-1nw9c21-container { flex: none; height: 400px; max-width: 1600px; position: relative; width: 100%; }",
    ".framer-gjDMc .framer-17beeyu, .framer-gjDMc .framer-lokupi, .framer-gjDMc .framer-k9d6qp, .framer-gjDMc .framer-30jiv2, .framer-gjDMc .framer-1ko8el4 { aspect-ratio: 0.9361702127659575 / 1; height: var(--framer-aspect-ratio-supported, 401px); overflow: hidden; position: relative; width: 375px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-gjDMc .framer-qwahc5 { aspect-ratio: 0.9361702127659575 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 401px); left: 0px; overflow: hidden; position: absolute; text-decoration: none; top: 0px; width: 375px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-gjDMc .framer-lde83f, .framer-gjDMc .framer-1xx7t7n { aspect-ratio: 0.9361702127659575 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 401px); left: 0px; overflow: hidden; position: absolute; top: 0px; width: 375px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-gjDMc.framer-v-tqnv78.framer-t5t6jd { width: 810px; }",
    ".framer-gjDMc.framer-v-10kkxj.framer-t5t6jd { padding: 83px 20px 83px 20px; width: 390px; }",
    ".framer-gjDMc.framer-v-10kkxj .framer-1nw9c21-container { height: 300px; }",
    ...Tt,
    ...Dt,
  ],
  xt = ge(no, ao, "framer-gjDMc"),
  vr = xt;
xt.displayName = "Gallery";
xt.defaultProps = { height: 778, width: 1200 };
oe(xt, {
  variant: {
    options: ["ryYOo9aA7", "bTpj6OBDJ", "XmFryAt7M"],
    optionTitles: ["Desktop", "Tablet", "Phone"],
    title: "Variant",
    type: c.Enum,
  },
});
xe(
  xt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...Ha,
    ...X(Et),
    ...X(Rt),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Rn = (e, r, n) => Math.min(Math.max(n, e), r);
function oo([e, r]) {
  return e + (100 - e) * (r / 100) * 0.5;
}
function io() {
  let [e, r] = mt(!1);
  return (
    Ft(() => {
      r(I.matchMedia("(pointer:fine)").matches);
    }, []),
    e
  );
}
function qt(e, r, { edgeOpacity: n, moreItems: a, buttonRef: o }, s) {
  a.current && e === r
    ? ((a.current = !1), er(n, 1, s), o.current.setAttribute("disabled", ""))
    : !a.current &&
      e !== r &&
      ((a.current = !0), er(n, 0, s), o.current.removeAttribute("disabled"));
}
function Dn(e, r) {
  let n = v(e),
    a = Ae(n.current ? 0 : 1),
    o = ae(a, [0, 1], [r || 0, 1]),
    s = ae(a, (f) => 1 - f),
    l = v(null),
    i = ae(s, (f) => (f > 0.2 ? "auto" : "none")),
    u = ae(i, (f) => (f === "auto" ? "pointer" : "default")),
    m = { ...kn, opacity: s, pointerEvents: i, cursor: u };
  return {
    moreItems: n,
    fadeOpacity: o,
    edgeOpacity: a,
    buttonStyle: m,
    buttonRef: l,
  };
}
function so({ element: e }) {
  e.setAttribute("aria-hidden", !1);
}
function lo(e, r, n, a, o, s, l) {
  Ce(() => {
    if (!e.current) return;
    let u = Sn(
        (f) => {
          (n.current = f[r]),
            f[r].current === o.current && (o.current = void 0),
            a(f[r].current),
            s();
        },
        { container: e.current, axis: r }
      ),
      m = yt(e.current, () => {
        l(), s();
      });
    return () => {
      u(), m();
    };
  }, [s, l]);
}
function ot({
  slots: e,
  gap: r,
  axis: n,
  align: a,
  sizingObject: o,
  fadeObject: s,
  arrowObject: l,
  snapObject: i,
  progressObject: u,
  ariaLabel: m,
  borderRadius: f,
  effectsObject: d,
  ...h
}) {
  let x = e.filter(Boolean),
    w = We.count(x),
    k = Ke.current() === Ke.canvas,
    j = Hr(h),
    O = n ? "x" : "y",
    {
      fadeContent: V,
      fadeWidth: E,
      fadeInset: S,
      fadeTransition: p,
      fadeAlpha: C,
    } = s,
    { snap: g, snapEdge: N, fluid: A } = i,
    {
      widthType: P,
      widthInset: J,
      widthColumns: Q,
      heightType: fe,
      heightInset: it,
      heightRows: we,
    } = o,
    {
      showScrollbar: st,
      showProgressDots: de,
      dotSize: W,
      dotsInset: ee,
      dotsRadius: lt,
      dotsPadding: He,
      dotsGap: Te,
      dotsFill: ve,
      dotsBackground: Me,
      dotsActiveOpacity: Ye,
      dotsOpacity: ct,
      dotsBlur: me,
    } = u,
    {
      showMouseControls: K,
      arrowSize: te,
      arrowRadius: Ge,
      arrowFill: Xe,
      leftArrow: Ne,
      rightArrow: Ze,
      arrowPadding: Pe,
    } = l,
    L = v(void 0),
    Oe = v(void 0),
    Le = Ae(0),
    Xt = (y) => {
      Le.set(Oe.current !== void 0 ? Oe.current : y);
    },
    _t = io(),
    Be = Dn(!1, C),
    Fe = Dn(!0, C),
    F = Ae(S * 0.5),
    T = ae(F, (y) => 100 - y),
    se = Ae(E),
    be = ae([F, se], oo),
    Ln = ae(be, (y) => 100 - y),
    Ur = Ae(n ? "right" : "bottom"),
    Ir = ae(
      [Ur, Be.fadeOpacity, F, be, Fe.fadeOpacity, T, Ln],
      (y) =>
        `linear-gradient(to ${y[0]}, rgb(0, 0, 0, ${y[1]}) ${y[2]}%, rgb(0, 0, 0, 1) ${y[3]}%, rgba(0, 0, 0, 1) ${y[6]}%, rgb(0, 0, 0, ${y[4]}) ${y[5]}%)`
    ),
    ft = v(null),
    [Ue, Bn] = mt(k ? 4 : 1),
    Ie = { scrollSnapAlign: N, flexShrink: 0 },
    Ve = {};
  a === "stretch" &&
    (n
      ? ((Ve.height = "100%"), (Ie.height = "auto"))
      : ((Ve.width = "100%"), (Ie.width = "auto"))),
    A || (Ie.scrollSnapStop = "always"),
    P === "stretch"
      ? ((Ie.width = `calc(100% - ${J || 0}px)`), (Ve.width = "100%"))
      : P === "columns" &&
        ((Ie.width = `calc(${100 / Q}% - ${r}px + ${r / Q}px)`),
        (Ve.width = "100%")),
    fe === "stretch"
      ? ((Ie.height = `calc(100% - ${it || 0}px)`), (Ve.height = "100%"))
      : fe === "rows" &&
        ((Ie.height = `calc(${100 / we}% - ${r}px + ${r / we}px)`),
        (Ve.height = "100%"));
  let Sr = k ? "hidden" : "auto",
    Vn = { ...yo, padding: j },
    zn = {
      ...xo,
      gap: r,
      alignItems: a,
      flexDirection: n ? "row" : "column",
      overflowX: n ? Sr : "hidden",
      overflowY: n ? "hidden" : Sr,
      scrollSnapType: g ? `${O} mandatory` : void 0,
      WebkitOverflowScrolling: "touch",
      WebkitMaskImage: V ? Ir : void 0,
      maskImage: V ? Ir : void 0,
      borderRadius: f,
    },
    jr = { "aria-roledescription": "carousel" };
  m && (jr["aria-title"] = m);
  let Zt = {};
  if (
    (a === "stretch" &&
      ((Zt["aria-role"] = "group"), (Zt["aria-roledescription"] = "slide")),
    !k)
  ) {
    let y = v([]);
    lo(
      ft,
      O,
      L,
      Xt,
      Oe,
      et(() => {
        if (!L.current) return;
        let {
            targetLength: B,
            containerLength: Se,
            scrollLength: Je,
          } = L.current,
          Qe = Le.get();
        if (!B && !Se) return;
        if (B > Se) {
          qt(Qe, 0, Be, p), qt(Qe, Je, Fe, p);
          for (let $e = 0; $e < y.current.length; $e++) {
            let { element: Dr, start: qn, end: Hn } = y.current[$e];
            Hn < Qe || qn > Qe + Se
              ? Dr.setAttribute("aria-hidden", !0)
              : Dr.setAttribute("aria-hidden", !1);
          }
        } else qt(0, 0, Be, p), qt(1, 1, Fe, p), y.current.forEach(so);
        let ze = Math.ceil(B / Se);
        isNaN(ze) || (ze / w > 0.65 && (ze = w), ze !== Ue && Bn(ze));
      }, [Ue]),
      et(() => {
        ft.current &&
          (y.current = Array.from(ft.current.children).map((B) =>
            n
              ? {
                  element: B,
                  start: B.offsetLeft,
                  end: B.offsetLeft + B.offsetWidth,
                }
              : {
                  element: B,
                  start: B.offsetTop,
                  end: B.offsetTop + B.offsetHeight,
                }
          ));
      }, [])
    );
  }
  k &&
    (Ce(() => {
      se.set(E);
    }, [E]),
    Ce(() => {
      F.set(S * 0.5);
    }, [S]),
    Ce(() => {
      Ur.set(n ? "right" : "bottom");
    }, [n]));
  let Wn = Ut(),
    Kn = (y) => {
      Oe.current = y;
      let B = n ? { left: y } : { top: y };
      ft.current.scrollTo({ ...B, behavior: Wn ? "auto" : "smooth" });
    },
    Ar = (y, B = 0) => {
      if (!L.current) return;
      let { scrollLength: Se } = L.current,
        Je = Se / (Ue - 1);
      Kn(y * Je + B * Je);
    },
    Rr = (y) => () => {
      if (!L.current) return;
      let { containerLength: B, scrollLength: Se } = L.current,
        Je = Le.get(),
        Qe = Se / Ue,
        ze = Rn(0, Ue - 1, Math.floor(Je / Qe)),
        $e = 0;
      g && (N === "start" || N === "end") && y >= 1 && ($e = 0.4),
        Ar(ze + y, $e);
    };
  if (w === 0) return t(fo, {});
  let Jt = [],
    Qt = {};
  if (Ue > 1 && de && !st) {
    for (let y = 0; y < Ue; y++) {
      let B = (k && !y) || !1;
      Jt.push(
        t(co, {
          dotStyle: { ...bo, width: W, height: W, backgroundColor: ve },
          buttonStyle: kn,
          isSelected: B,
          selectedOpacity: Ye,
          opacity: ct,
          onClick: () => kr(() => Ar(y)),
          currentScroll: Le,
          scrollInfo: L,
          total: Ue,
          index: y,
          gap: Te,
          padding: He,
          axis: n,
        })
      );
    }
    me && (Qt.backdropFilter = Qt.WebkitBackdropFilter = `blur(${me}px)`);
  }
  return b("section", {
    style: Vn,
    ...jr,
    children: [
      t(_.ul, {
        ref: ft,
        style: zn,
        className: "framer--carousel",
        "data-show-scrollbar": st,
        "aria-atomic": "false",
        "aria-live": "polite",
        onWheel: () => (Oe.current = void 0),
        children: We.map(x, (y, B) =>
          t("li", {
            style: Ie,
            ...Zt,
            "aria-label": `${B + 1} of ${w}`,
            children: dt(y, {
              ...y.props,
              style: { ...y.props?.style, ...Ve },
            }),
          })
        ),
      }),
      b("fieldset", {
        style: {
          ...wo,
          padding: Pe,
          display: "flex",
          flexDirection: n ? "row" : "column",
        },
        "aria-label": "Carousel pagination controls",
        className: "framer--carousel-controls",
        "data-show-mouse-controls": K,
        children: [
          _t &&
            t(_.button, {
              ref: Be.buttonRef,
              type: "button",
              style: {
                ...Be.buttonStyle,
                backgroundColor: Xe,
                width: te,
                height: te,
                borderRadius: Ge,
                rotate: n ? 0 : 90,
                display: K ? "block" : "none",
              },
              onClick: Rr(-1),
              "aria-label": "Previous",
              whileTap: { scale: 0.9 },
              transition: { duration: 0.05 },
              children: t("img", {
                decoding: "async",
                alt: "",
                width: te,
                height: te,
                src:
                  Ne ||
                  "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
              }),
            }),
          _t &&
            t(_.button, {
              ref: Fe.buttonRef,
              type: "button",
              style: {
                ...Fe.buttonStyle,
                backgroundColor: Xe,
                width: te,
                height: te,
                borderRadius: Ge,
                rotate: n ? 0 : 90,
                display: K ? "block" : "none",
              },
              onClick: Rr(1),
              "aria-label": "Next",
              whileTap: { scale: 0.9 },
              transition: { duration: 0.05 },
              children: t("img", {
                decoding: "async",
                alt: "",
                width: te,
                height: te,
                src:
                  Ze ||
                  "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
              }),
            }),
          Jt.length > 1
            ? t("div", {
                style: {
                  ...vo,
                  left: n ? "50%" : ee,
                  top: n ? "unset" : "50%",
                  transform: n ? "translateX(-50%)" : "translateY(-50%)",
                  flexDirection: n ? "row" : "column",
                  bottom: n ? ee : "unset",
                  borderRadius: lt,
                  backgroundColor: Me,
                  ...Qt,
                },
                children: Jt,
              })
            : null,
        ],
      }),
      t(mo, {}),
    ],
  });
}
ot.defaultProps = {
  gap: 10,
  padding: 10,
  progressObject: { showScrollbar: !1, showProgressDots: !1 },
  sizingObject: {
    widthType: "auto",
    widthOffset: 0,
    widthColumns: 2,
    heightType: "auto",
    heightOffset: 0,
    heightRows: 2,
  },
  borderRadius: 0,
};
oe(ot, {
  slots: {
    type: c.Array,
    title: "Children",
    control: { type: c.ComponentInstance },
  },
  axis: {
    type: c.Enum,
    title: "Direction",
    options: [!0, !1],
    optionIcons: ["direction-horizontal", "direction-vertical"],
    displaySegmentedControl: !0,
  },
  align: {
    type: c.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      axis: {
        true: ["align-top", "align-middle", "align-bottom"],
        false: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: c.Number, title: "Gap" },
  ...Yr,
  sizingObject: {
    type: c.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: c.Enum,
        title: "Width",
        options: ["auto", "stretch", "columns"],
        optionTitles: ["Auto", "Stretch", "Columns"],
        defaultValue: "auto",
      },
      widthInset: {
        type: c.Number,
        title: "Inset",
        min: 0,
        max: 500,
        defaultValue: 0,
        hidden: (e) => e.widthType !== "stretch",
      },
      widthColumns: {
        type: c.Number,
        title: "Columns",
        min: 1,
        max: 10,
        defaultValue: 2,
        displayStepper: !0,
        hidden: (e) => e.widthType !== "columns",
      },
      heightType: {
        type: c.Enum,
        title: "Height",
        options: ["auto", "stretch", "rows"],
        optionTitles: ["Auto", "Stretch", "Rows"],
        defaultValue: "auto",
      },
      heightInset: {
        type: c.Number,
        title: "Inset",
        min: 0,
        max: 500,
        defaultValue: 0,
        hidden: (e) => e.heightType !== "stretch",
      },
      heightRows: {
        type: c.Number,
        title: "Rows",
        min: 1,
        max: 10,
        defaultValue: 2,
        displayStepper: !0,
        hidden: (e) => e.heightType !== "rows",
      },
    },
  },
  snapObject: {
    type: c.Object,
    title: "Snapping",
    controls: {
      snap: { type: c.Boolean, title: "Enable" },
      snapEdge: {
        type: c.Enum,
        title: "Edge",
        options: ["start", "center", "end"],
        optionTitles: ["Left", "Center", "Right"],
        defaultValue: "center",
        hidden: (e) => !e.snap,
      },
      fluid: {
        type: c.Boolean,
        title: "Fluid",
        defaultValue: !1,
        hidden: (e) => !e.snap,
      },
    },
  },
  fadeObject: {
    type: c.Object,
    title: "Fading",
    controls: {
      fadeContent: { type: c.Boolean, title: "Enable", defaultValue: !1 },
      fadeWidth: {
        type: c.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden: (e) => !e.fadeContent,
      },
      fadeInset: {
        type: c.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden: (e) => !e.fadeContent,
      },
      fadeAlpha: {
        type: c.Number,
        title: "Opacity",
        hidden: (e) => !e.fadeContent,
        min: 0,
        max: 1,
        step: 0.05,
        defaultValue: 0,
      },
      fadeTransition: {
        type: c.Transition,
        title: "Transition",
        hidden: (e) => !e.fadeContent,
      },
    },
  },
  progressObject: {
    type: c.Object,
    title: "Progress",
    controls: {
      showScrollbar: { type: c.Boolean, title: "Scroll Bar", defaultValue: !1 },
      showProgressDots: {
        type: c.Boolean,
        title: "Dots",
        defaultValue: !1,
        hidden: (e) => e.showScrollbar,
      },
      dotSize: {
        type: c.Number,
        title: "Size",
        min: 1,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsInset: {
        type: c.Number,
        title: "Inset",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsGap: {
        type: c.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsPadding: {
        type: c.Number,
        title: "Padding",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsFill: {
        type: c.Color,
        title: "Fill",
        defaultValue: "#fff",
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsBackground: {
        type: c.Color,
        title: "Backdrop",
        defaultValue: "rgba(0,0,0,0.2)",
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsRadius: {
        type: c.Number,
        title: "Radius",
        min: 0,
        max: 200,
        defaultValue: 50,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsOpacity: {
        type: c.Number,
        title: "Opacity",
        min: 0,
        max: 1,
        defaultValue: 0.5,
        step: 0.1,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsActiveOpacity: {
        type: c.Number,
        title: "Current",
        min: 0,
        max: 1,
        defaultValue: 1,
        step: 0.1,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsBlur: {
        type: c.Number,
        title: "Blur",
        min: 0,
        max: 50,
        defaultValue: 4,
        step: 1,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
    },
  },
  arrowObject: {
    type: c.Object,
    title: "Arrows",
    controls: {
      showMouseControls: { type: c.Boolean, title: "Show", defaultValue: !0 },
      arrowFill: {
        type: c.Color,
        title: "Fill",
        defaultValue: "rgba(0,0,0,0.2)",
        hidden: (e) => !e.showMouseControls,
      },
      leftArrow: {
        type: c.Image,
        title: "Previous",
        hidden: (e) => !e.showMouseControls,
      },
      rightArrow: {
        type: c.Image,
        title: "Next",
        hidden: (e) => !e.showMouseControls,
      },
      arrowSize: {
        type: c.Number,
        title: "Size",
        min: 0,
        max: 200,
        displayStepper: !0,
        defaultValue: 40,
        hidden: (e) => !e.showMouseControls,
      },
      arrowRadius: {
        type: c.Number,
        title: "Radius",
        min: 0,
        max: 500,
        defaultValue: 40,
        hidden: (e) => !e.showMouseControls,
      },
      arrowPadding: {
        type: c.Number,
        title: "Inset",
        min: 0,
        max: 100,
        defaultValue: 20,
        displayStepper: !0,
        hidden: (e) => !e.showMouseControls,
      },
    },
  },
  ariaLabel: { type: c.String, title: "Aria Label", placeholder: "Movies..." },
  borderRadius: {
    type: c.Number,
    title: "Radius",
    min: 0,
    max: 500,
    displayStepper: !0,
    defaultValue: 0,
  },
});
function co({
  currentScroll: e,
  scrollInfo: r,
  isSelected: n,
  selectedOpacity: a,
  opacity: o,
  total: s,
  index: l,
  dotStyle: i,
  buttonStyle: u,
  gap: m,
  padding: f,
  axis: d,
  ...h
}) {
  let x = ae(e, (E) => {
      if (!r.current?.scrollLength) return l === 0 ? a : o;
      let S = r.current?.scrollLength / s,
        p = S * l,
        C = p + S;
      return E >= p && (l < s - 1 ? E < C : l === s - 1) ? a : o;
    }),
    w = m / 2,
    k = !d && l > 0 ? w : f,
    j = !d && l !== s - 1 ? w : f,
    O = d && l !== s - 1 ? w : f,
    V = d && l > 0 ? w : f;
  return t("button", {
    "aria-label": `Scroll to page ${l + 1}`,
    type: "button",
    ...h,
    style: { ...u, padding: `${k}px ${O}px ${j}px ${V}px` },
    children: t(_.div, { style: { ...i, opacity: x } }),
  });
}
function fo() {
  return b("section", {
    style: po,
    children: [
      t("div", { style: uo, children: "\u2728" }),
      t("p", { style: ho, children: "Connect to Content" }),
      t("p", {
        style: go,
        children: "Add layers or components to swipe between.",
      }),
    ],
  });
}
function mo() {
  return t("div", {
    dangerouslySetInnerHTML: {
      __html: `<style>@media (pointer: fine) {
                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar {
                    display: none;
                    -webkit-appearance: none;
                    width: 0;
                    height: 0;
                }

                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar-thumb {
                    display: none;
                }

                .framer--carousel[data-show-scrollbar="false"] {
                    scrollbar-width: none;
                    scrollbar-height: none;
                }
            }</style>`,
    },
  });
}
var po = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  uo = { fontSize: 32, marginBottom: 10 },
  ho = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  go = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 130,
    lineHeight: 1.5,
    textAlign: "center",
  };
var yo = {
    display: "flex",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  xo = {
    padding: 0,
    margin: 0,
    listStyle: "none",
    position: "relative",
    display: "flex",
    flex: "1 1 100%",
    width: "100%",
    height: "100%",
  },
  kn = {
    border: "none",
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    background: "transparent",
    cursor: "pointer",
    margin: 0,
    padding: 0,
  },
  wo = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
    border: 0,
    padding: 0,
    margin: 0,
  },
  vo = {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    position: "absolute",
    pointerEvents: "auto",
  },
  bo = {
    borderRadius: "50%",
    background: "white",
    cursor: "pointer",
    border: "none",
    placeContent: "center",
    placeItems: "center",
    padding: 0,
  };
qr.loadFonts([
  "Inter-Medium",
  "Inter-Bold",
  "Inter-BoldItalic",
  "Inter-MediumItalic",
]);
var En = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/khkJkwSL66WFg8SX6Wa726c.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/0E7IMbDzcGABpBwwqNEt60wU0w.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/NTJ0nQgIF0gcDelS14zQ9NR9Q.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/QrcNhgEPfRl0LS8qz5Ln8olanl8.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JEXmejW8mXOYMtt0hyRg811kHac.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/ksvR4VsLksjpSwnC2fPgHRNMw.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/uy9s0iWuxiNnVt8EpTI3gzohpwo.woff2",
          weight: "500",
        },
      ],
    },
  ],
  Tn = [
    '.framer-B3Lez .framer-styles-preset-15txmne:not(.rich-text-wrapper), .framer-B3Lez .framer-styles-preset-15txmne.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.03em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, #464e4f); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-B3Lez .framer-styles-preset-15txmne:not(.rich-text-wrapper), .framer-B3Lez .framer-styles-preset-15txmne.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 29px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.03em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, #464e4f); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-B3Lez .framer-styles-preset-15txmne:not(.rich-text-wrapper), .framer-B3Lez .framer-styles-preset-15txmne.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 23px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.03em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, #464e4f); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }',
  ],
  Mn = "framer-B3Lez";
var Fo = z(rr),
  Uo = "framer-scPnn",
  Io = { a8Lvc4Vcf: "framer-v-1f2uj4j" };
var So = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  jo = { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 },
  Ao = { bounce: 0, delay: 0.075, duration: 0.4, type: "spring" },
  Ro = {
    effect: jo,
    startDelay: 0.2,
    threshold: 0.5,
    tokenization: "word",
    transition: Ao,
    trigger: "onInView",
    type: "appear",
  },
  Do = (e) =>
    typeof e == "object" && e !== null && typeof e.src == "string"
      ? e
      : typeof e == "string"
      ? { src: e }
      : void 0,
  ko = ({ value: e, children: r }) => {
    let n = je(ne),
      a = e ?? n.transition,
      o = re(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return t(ne.Provider, { value: o, children: r });
  },
  Eo = _.create(U),
  To = ({
    authorImage: e,
    authorJob: r,
    authorName: n,
    height: a,
    id: o,
    text: s,
    width: l,
    ...i
  }) => ({
    ...i,
    DjFWzJz7I: n ?? i.DjFWzJz7I ?? "Ricky Stokes",
    VaGjjhLdY: e ??
      i.VaGjjhLdY ?? {
        alt: "",
        pixelHeight: 3993,
        pixelWidth: 5990,
        src: "https://framerusercontent.com/images/aXm7l3DIpRNKp23wuPRMMWGFCxc.jpg?scale-down-to=1024",
        srcSet:
          "https://framerusercontent.com/images/aXm7l3DIpRNKp23wuPRMMWGFCxc.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/aXm7l3DIpRNKp23wuPRMMWGFCxc.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/aXm7l3DIpRNKp23wuPRMMWGFCxc.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/aXm7l3DIpRNKp23wuPRMMWGFCxc.jpg?scale-down-to=4096 4096w,https://framerusercontent.com/images/aXm7l3DIpRNKp23wuPRMMWGFCxc.jpg 5990w",
      },
    VjKuHDqv5:
      s ??
      i.VjKuHDqv5 ??
      "Their team took the time to truly understand our vision and delivered a brand identity that exceeded our expectations.",
    WkXIBdPb0: r ?? i.WkXIBdPb0 ?? "Design Partner",
  }),
  Mo = (e, r) =>
    e.layoutDependency ? r.join("-") + e.layoutDependency : r.join("-"),
  No = pe(function (e, r) {
    let n = v(null),
      a = r ?? n,
      o = ue(),
      { activeLocale: s, setLocale: l } = he(),
      i = ye(),
      {
        style: u,
        className: m,
        layoutId: f,
        variant: d,
        VjKuHDqv5: h,
        DjFWzJz7I: x,
        WkXIBdPb0: w,
        VaGjjhLdY: k,
        ...j
      } = To(e),
      {
        baseVariant: O,
        classNames: V,
        clearLoadingGesture: E,
        gestureHandlers: S,
        gestureVariant: p,
        isLoading: C,
        setGestureState: g,
        setVariant: N,
        variants: A,
      } = De({
        defaultVariant: "a8Lvc4Vcf",
        ref: a,
        variant: d,
        variantClassNames: Io,
      }),
      P = Mo(e, A),
      Q = Y(Uo, ...[Mn, Zr, At]);
    return t(Z, {
      id: f ?? o,
      children: t(Eo, {
        animate: A,
        initial: !1,
        children: t(ko, {
          value: So,
          children: b(_.div, {
            ...j,
            ...S,
            className: Y(Q, "framer-1f2uj4j", m, V),
            "data-framer-name": "Desktop",
            layoutDependency: P,
            layoutId: "a8Lvc4Vcf",
            ref: a,
            style: { ...u },
            children: [
              t(M, {
                children: t(_e, {
                  className: "framer-1ehuj09-container",
                  "data-framer-name": "Quotes",
                  isAuthoredByUser: !0,
                  isModuleExternal: !0,
                  layoutDependency: P,
                  layoutId: "gIY1h9RXU-container",
                  name: "Quotes",
                  nodeId: "gIY1h9RXU",
                  rendersWithMotion: !0,
                  scopeId: "RLBkA_EHL",
                  children: t(rr, {
                    color:
                      "var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255))",
                    height: "100%",
                    iconSearch: "House",
                    iconSelection: "Quotes",
                    id: "gIY1h9RXU",
                    layoutId: "gIY1h9RXU",
                    mirrored: !1,
                    name: "Quotes",
                    selectByList: !0,
                    style: { height: "100%", width: "100%" },
                    weight: "fill",
                    width: "100%",
                  }),
                }),
              }),
              t(D, {
                __fromCanvasComponent: !0,
                children: t(U, {
                  children: t(_.p, {
                    className: "framer-styles-preset-15txmne",
                    "data-styles-preset": "Ww0q41PbS",
                    children:
                      "Their team took the time to truly understand our vision and delivered a brand identity that exceeded our expectations.",
                  }),
                }),
                className: "framer-11i2l0t",
                "data-framer-name": "Text",
                effect: Ro,
                fonts: ["Inter"],
                layoutDependency: P,
                layoutId: "R5ZeRIo4a",
                style: {
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                text: h,
                verticalAlignment: "top",
                withExternalLayout: !0,
              }),
              b(_.div, {
                className: "framer-jo2zhk",
                "data-framer-name": "Author",
                layoutDependency: P,
                layoutId: "KAdj5xdyd",
                children: [
                  t(G, {
                    background: {
                      alt: "",
                      fit: "fill",
                      loading: tt(
                        (i?.y || 0) +
                          0 +
                          (((i?.height || 321) - 0 - 407.2) / 2 + 276 + 80) +
                          0.6
                      ),
                      pixelHeight: 3993,
                      pixelWidth: 5990,
                      sizes: "50px",
                      ...Do(k),
                    },
                    className: "framer-i4p5g0",
                    "data-framer-name": "Image",
                    layoutDependency: P,
                    layoutId: "geqYgnZtG",
                    style: {
                      borderBottomLeftRadius: 99,
                      borderBottomRightRadius: 99,
                      borderTopLeftRadius: 99,
                      borderTopRightRadius: 99,
                    },
                  }),
                  b(_.div, {
                    className: "framer-3q22ty",
                    "data-framer-name": "Name + Job",
                    layoutDependency: P,
                    layoutId: "AQaVSR7iM",
                    children: [
                      t(D, {
                        __fromCanvasComponent: !0,
                        children: t(U, {
                          children: t(_.h6, {
                            className: "framer-styles-preset-1v92s4",
                            "data-styles-preset": "FUEoZBHBh",
                            children: "Ricky Stokes",
                          }),
                        }),
                        className: "framer-1u6uj9a",
                        "data-framer-name": "Name",
                        fonts: ["Inter"],
                        layoutDependency: P,
                        layoutId: "tcgHzxr5G",
                        style: {
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: x,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      t(D, {
                        __fromCanvasComponent: !0,
                        children: t(U, {
                          children: t(_.p, {
                            className: "framer-styles-preset-1bxrctr",
                            "data-styles-preset": "IUIZL68H9",
                            children: "Design Partner",
                          }),
                        }),
                        className: "framer-1ylgbcg",
                        "data-framer-name": "Job",
                        fonts: ["Inter"],
                        layoutDependency: P,
                        layoutId: "Vn0_9dRZi",
                        style: {
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: w,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Po = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-scPnn.framer-10ihd5f, .framer-scPnn .framer-10ihd5f { display: block; }",
    ".framer-scPnn.framer-1f2uj4j { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 778px; }",
    ".framer-scPnn .framer-1ehuj09-container { flex: none; height: 60px; position: relative; width: 60px; }",
    ".framer-scPnn .framer-11i2l0t { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-scPnn .framer-jo2zhk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-scPnn .framer-i4p5g0 { flex: none; height: 50px; overflow: hidden; position: relative; width: 50px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-scPnn .framer-3q22ty { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-scPnn .framer-1u6uj9a, .framer-scPnn .framer-1ylgbcg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ...Tn,
    ...Xr,
    ...jt,
  ],
  wt = ge(No, Po, "framer-scPnn"),
  br = wt;
wt.displayName = "Testimonial";
wt.defaultProps = { height: 321, width: 778 };
oe(wt, {
  VjKuHDqv5: {
    defaultValue:
      "Their team took the time to truly understand our vision and delivered a brand identity that exceeded our expectations.",
    displayTextArea: !0,
    title: "Text",
    type: c.String,
  },
  DjFWzJz7I: {
    defaultValue: "Ricky Stokes",
    displayTextArea: !1,
    title: "Author Name",
    type: c.String,
  },
  WkXIBdPb0: {
    defaultValue: "Design Partner",
    displayTextArea: !1,
    title: "Author Job",
    type: c.String,
  },
  VaGjjhLdY: {
    __defaultAssetReference:
      "data:framer/asset-reference,aXm7l3DIpRNKp23wuPRMMWGFCxc.jpg?originalFilename=photo-1521566652839-697aa473761a%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHw4fHxwZXJzb258ZW58MHx8fHwxNzMzNTU0MDkzfDA%26ixlib%3Drb-4.0.jpg&preferredSize=auto",
    __vekterDefault: {
      alt: "",
      assetReference:
        "data:framer/asset-reference,aXm7l3DIpRNKp23wuPRMMWGFCxc.jpg?originalFilename=photo-1521566652839-697aa473761a%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHw4fHxwZXJzb258ZW58MHx8fHwxNzMzNTU0MDkzfDA%26ixlib%3Drb-4.0.jpg&preferredSize=auto",
    },
    title: "Author Image",
    type: c.ResponsiveImage,
  },
});
xe(
  wt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...Fo,
    ...X(En),
    ...X(Gr),
    ...X(St),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Oo = z(br),
  Lo = z(ot),
  Bo = ["r44DS4wTP", "V2xWQv697", "pkUkkEir6"],
  Vo = "framer-Pfc3c",
  zo = {
    pkUkkEir6: "framer-v-9snxoe",
    r44DS4wTP: "framer-v-152o1hp",
    V2xWQv697: "framer-v-33wlgb",
  };
function Nn(e, ...r) {
  let n = {};
  return r?.forEach((a) => a && Object.assign(n, e[a])), n;
}
var Wo = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Ko = (e, r) => {
    if (!(!e || typeof e != "object")) return { ...e, alt: r };
  },
  qo = ({ value: e, children: r }) => {
    let n = je(ne),
      a = e ?? n.transition,
      o = re(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return t(ne.Provider, { value: o, children: r });
  },
  Ho = _.create(U),
  Yo = { Desktop: "r44DS4wTP", Phone: "pkUkkEir6", Tablet: "V2xWQv697" },
  Go = ({ height: e, id: r, width: n, ...a }) => ({
    ...a,
    variant: Yo[a.variant] ?? a.variant ?? "r44DS4wTP",
  }),
  Xo = (e, r) =>
    e.layoutDependency ? r.join("-") + e.layoutDependency : r.join("-"),
  Zo = pe(function (e, r) {
    let n = v(null),
      a = r ?? n,
      o = ue(),
      { activeLocale: s, setLocale: l } = he(),
      i = ye(),
      { style: u, className: m, layoutId: f, variant: d, ...h } = Go(e),
      {
        baseVariant: x,
        classNames: w,
        clearLoadingGesture: k,
        gestureHandlers: j,
        gestureVariant: O,
        isLoading: V,
        setGestureState: E,
        setVariant: S,
        variants: p,
      } = De({
        cycleOrder: Bo,
        defaultVariant: "r44DS4wTP",
        ref: a,
        variant: d,
        variantClassNames: zo,
      }),
      C = Xo(e, p),
      N = Y(Vo, ...[]);
    return t(Z, {
      id: f ?? o,
      children: t(Ho, {
        animate: p,
        initial: !1,
        children: t(qo, {
          value: Wo,
          children: t(_.div, {
            ...h,
            ...j,
            className: Y(N, "framer-152o1hp", m, w),
            "data-border": !0,
            "data-framer-name": "Desktop",
            layoutDependency: C,
            layoutId: "r44DS4wTP",
            ref: a,
            style: {
              "--border-bottom-width": "1px",
              "--border-color":
                "var(--token-3c8398c6-894e-4918-ace6-437d6e9600f0, rgba(38, 38, 38, 0.5))",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor:
                "var(--token-5bc48278-14a8-4953-b980-6953d047ffcd, rgb(17, 17, 17))",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              ...u,
            },
            ...Nn(
              {
                pkUkkEir6: { "data-framer-name": "Phone" },
                V2xWQv697: { "data-framer-name": "Tablet" },
              },
              x,
              O
            ),
            children: t(M, {
              children: t(_e, {
                className: "framer-7baskj-container",
                isAuthoredByUser: !0,
                isModuleExternal: !0,
                layoutDependency: C,
                layoutId: "IbVCO8VvC-container",
                nodeId: "IbVCO8VvC",
                rendersWithMotion: !0,
                scopeId: "JSJMNZseH",
                children: t(ot, {
                  align: "center",
                  ariaLabel: "",
                  arrowObject: {
                    arrowFill: "rgba(255, 255, 255, 0.03)",
                    arrowPadding: 0,
                    arrowRadius: 5,
                    arrowSize: 40,
                    showMouseControls: !0,
                  },
                  axis: !0,
                  borderRadius: 0,
                  fadeObject: {
                    fadeAlpha: 0,
                    fadeContent: !1,
                    fadeInset: 0,
                    fadeTransition: {
                      damping: 60,
                      delay: 0,
                      mass: 1,
                      stiffness: 500,
                      type: "spring",
                    },
                    fadeWidth: 25,
                  },
                  gap: 10,
                  height: "100%",
                  id: "IbVCO8VvC",
                  layoutId: "IbVCO8VvC",
                  padding: 10,
                  paddingBottom: 0,
                  paddingLeft: 75,
                  paddingPerSide: !0,
                  paddingRight: 75,
                  paddingTop: 0,
                  progressObject: {
                    dotsActiveOpacity: 1,
                    dotsBackground: "rgba(0, 0, 0, 0.2)",
                    dotsBlur: 4,
                    dotsFill: "rgb(255, 255, 255)",
                    dotsGap: 10,
                    dotsInset: 10,
                    dotSize: 10,
                    dotsOpacity: 0.5,
                    dotsPadding: 10,
                    dotsRadius: 50,
                    showProgressDots: !1,
                    showScrollbar: !1,
                  },
                  sizingObject: {
                    heightInset: 0,
                    heightRows: 2,
                    heightType: "auto",
                    widthColumns: 2,
                    widthInset: 0,
                    widthType: "stretch",
                  },
                  slots: [
                    t(M, {
                      height: 321,
                      width: "840px",
                      children: t(_e, {
                        className: "framer-17pek25-container",
                        inComponentSlot: !0,
                        layoutDependency: C,
                        layoutId: "AHW_feyqk-container",
                        nodeId: "AHW_feyqk",
                        rendersWithMotion: !0,
                        scopeId: "JSJMNZseH",
                        children: t(br, {
                          DjFWzJz7I: "Jackeline Costa",
                          height: "100%",
                          id: "AHW_feyqk",
                          layoutId: "AHW_feyqk",
                          style: { width: "100%" },
                          VaGjjhLdY: Ko(
                            {
                              pixelHeight: 641,
                              pixelWidth: 640,
                              src: "https://framerusercontent.com/images/sFXpalqCDz4dxrhsKqt7YUOJ9s.jpg",
                              srcSet:
                                "https://framerusercontent.com/images/sFXpalqCDz4dxrhsKqt7YUOJ9s.jpg 640w",
                            },
                            "David Miller"
                          ),
                          VjKuHDqv5:
                            "Essa se\xE7\xE3o representa como depoimentos reais poder\xE3o ser inseridos no futuro. Em breve, espero contar hist\xF3rias de projetos que fizeram diferen\xE7a.",
                          width: "100%",
                          WkXIBdPb0: "Designer UI/UX",
                        }),
                      }),
                    }),
                  ],
                  snapObject: { fluid: !1, snap: !0, snapEdge: "center" },
                  style: { width: "100%" },
                  width: "100%",
                  ...Nn(
                    {
                      pkUkkEir6: {
                        arrowObject: {
                          arrowFill: "rgba(255, 255, 255, 0.03)",
                          arrowPadding: 0,
                          arrowRadius: 5,
                          arrowSize: 40,
                          showMouseControls: !1,
                        },
                        paddingBottom: 75,
                        paddingLeft: 0,
                        paddingRight: 0,
                        progressObject: {
                          dotsActiveOpacity: 1,
                          dotsBackground: "rgba(0, 0, 0, 0.2)",
                          dotsBlur: 4,
                          dotsFill: "rgb(255, 255, 255)",
                          dotsGap: 10,
                          dotsInset: 10,
                          dotSize: 10,
                          dotsOpacity: 0.5,
                          dotsPadding: 10,
                          dotsRadius: 50,
                          showProgressDots: !0,
                          showScrollbar: !1,
                        },
                      },
                      V2xWQv697: { paddingLeft: 50, paddingRight: 50 },
                    },
                    x,
                    O
                  ),
                }),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Jo = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Pfc3c.framer-5wt1cu, .framer-Pfc3c .framer-5wt1cu { display: block; }",
    ".framer-Pfc3c.framer-152o1hp { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 75px 100px 75px 100px; position: relative; width: 1140px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Pfc3c .framer-7baskj-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-Pfc3c .framer-17pek25-container { height: auto; position: relative; width: 840px; }",
    ".framer-Pfc3c.framer-v-33wlgb.framer-152o1hp { padding: 50px; width: 810px; }",
    ".framer-Pfc3c.framer-v-9snxoe.framer-152o1hp { padding: 30px; width: 390px; }",
    '.framer-Pfc3c[data-border="true"]::after, .framer-Pfc3c [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  vt = ge(Zo, Jo, "framer-Pfc3c"),
  Cr = vt;
vt.displayName = "Testimonials";
vt.defaultProps = { height: 514, width: 1140 };
oe(vt, {
  variant: {
    options: ["r44DS4wTP", "V2xWQv697", "pkUkkEir6"],
    optionTitles: ["Desktop", "Tablet", "Phone"],
    title: "Variant",
    type: c.Enum,
  },
});
xe(vt, [{ explicitInter: !0, fonts: [] }, ...Oo, ...Lo], {
  supportsExplicitInterCodegen: !0,
});
var Qo = z(Nt),
  Pn = Nr(Nt),
  $o = "framer-AnilE",
  ei = { hsKR3vSGm: "framer-v-jgt84y" };
var ti = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  ri = ({ value: e, children: r }) => {
    let n = je(ne),
      a = e ?? n.transition,
      o = re(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return t(ne.Provider, { value: o, children: r });
  },
  ni = _.create(U),
  ai = ({
    description: e,
    height: r,
    icon: n,
    id: a,
    title: o,
    width: s,
    ...l
  }) => ({
    ...l,
    gjsL8WG0e: o ?? l.gjsL8WG0e ?? "No contracts",
    P3U0AkMC3: n ?? l.P3U0AkMC3 ?? "Note",
    uGjgFM1Bx:
      e ??
      l.uGjgFM1Bx ??
      "Valorizo o trabalho em equipe e sei a import\xE2ncia de uma boa comunica\xE7\xE3o entre \xE1reas. Gosto de ouvir, propor e construir junto.",
  }),
  oi = (e, r) =>
    e.layoutDependency ? r.join("-") + e.layoutDependency : r.join("-"),
  ii = pe(function (e, r) {
    let n = v(null),
      a = r ?? n,
      o = ue(),
      { activeLocale: s, setLocale: l } = he(),
      i = ye(),
      {
        style: u,
        className: m,
        layoutId: f,
        variant: d,
        P3U0AkMC3: h,
        gjsL8WG0e: x,
        uGjgFM1Bx: w,
        ...k
      } = ai(e),
      {
        baseVariant: j,
        classNames: O,
        clearLoadingGesture: V,
        gestureHandlers: E,
        gestureVariant: S,
        isLoading: p,
        setGestureState: C,
        setVariant: g,
        variants: N,
      } = De({
        defaultVariant: "hsKR3vSGm",
        ref: a,
        variant: d,
        variantClassNames: ei,
      }),
      A = oi(e, N),
      J = Y($o, ...[$r, At]);
    return t(Z, {
      id: f ?? o,
      children: t(ni, {
        animate: N,
        initial: !1,
        children: t(ri, {
          value: ti,
          children: b(_.div, {
            ...k,
            ...E,
            className: Y(J, "framer-jgt84y", m, O),
            "data-framer-name": "Desktop",
            layoutDependency: A,
            layoutId: "hsKR3vSGm",
            ref: a,
            style: {
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              ...u,
            },
            children: [
              t(M, {
                height: 100,
                width: "100px",
                y:
                  (i?.y || 0) +
                  0 +
                  (((i?.height || 286) - 0 - 314.8) / 2 + 0 + 0),
                children: t(_e, {
                  className: "framer-1vox27g-container",
                  layoutDependency: A,
                  layoutId: "tXarRG7BM-container",
                  nodeId: "tXarRG7BM",
                  rendersWithMotion: !0,
                  scopeId: "qvGguXdHq",
                  children: t(Nt, {
                    height: "100%",
                    id: "tXarRG7BM",
                    layoutId: "tXarRG7BM",
                    m1ajXwbxE: h,
                    style: { height: "100%", width: "100%" },
                    variant: "x1wcHT2Sh",
                    width: "100%",
                  }),
                }),
              }),
              b(_.div, {
                className: "framer-1pxk5m6",
                "data-framer-name": "Texts",
                layoutDependency: A,
                layoutId: "J2gedjE4b",
                children: [
                  t(D, {
                    __fromCanvasComponent: !0,
                    children: t(U, {
                      children: t(_.h4, {
                        className: "framer-styles-preset-1c8pf2x",
                        "data-styles-preset": "LF7giT8sa",
                        style: { "--framer-text-alignment": "center" },
                        children: "No contracts",
                      }),
                    }),
                    className: "framer-1t1hlmy",
                    "data-framer-name": "Title",
                    fonts: ["Inter"],
                    layoutDependency: A,
                    layoutId: "N_l9ManZS",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    text: x,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  t(D, {
                    __fromCanvasComponent: !0,
                    children: t(U, {
                      children: t(_.p, {
                        className: "framer-styles-preset-1bxrctr",
                        "data-styles-preset": "IUIZL68H9",
                        style: { "--framer-text-alignment": "center" },
                        children:
                          "Pause or cancel anytime\u2014flexibility for your business.",
                      }),
                    }),
                    className: "framer-1i79nfc",
                    "data-framer-name": "Description",
                    fonts: ["Inter"],
                    layoutDependency: A,
                    layoutId: "aB9P9kFeo",
                    style: {
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    text: w,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  si = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-AnilE.framer-178kmh5, .framer-AnilE .framer-178kmh5 { display: block; }",
    ".framer-AnilE.framer-jgt84y { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 320px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-AnilE .framer-1vox27g-container { flex: none; height: 100px; position: relative; width: 100px; }",
    ".framer-AnilE .framer-1pxk5m6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-AnilE .framer-1t1hlmy, .framer-AnilE .framer-1i79nfc { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ...Qr,
    ...jt,
  ],
  bt = ge(ii, si, "framer-AnilE"),
  Ct = bt;
bt.displayName = "Icon Card Vertical";
bt.defaultProps = { height: 286, width: 320 };
oe(bt, {
  P3U0AkMC3: Pn?.m1ajXwbxE && {
    ...Pn.m1ajXwbxE,
    defaultValue: "Note",
    description: void 0,
    hidden: void 0,
    title: "Icon",
  },
  gjsL8WG0e: {
    defaultValue: "No contracts",
    displayTextArea: !1,
    title: "Title",
    type: c.String,
  },
  uGjgFM1Bx: {
    defaultValue:
      "Valorizo o trabalho em equipe e sei a import\xE2ncia de uma boa comunica\xE7\xE3o entre \xE1reas. Gosto de ouvir, propor e construir junto.",
    displayTextArea: !0,
    title: "Description",
    type: c.String,
  },
});
xe(
  bt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...Qo,
    ...X(Jr),
    ...X(St),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var li = z(or),
  ci = z(nr),
  fi = z(tr),
  Ee = It(_.div),
  di = z(vr),
  On = It($),
  mi = z(Ct),
  pi = It(G),
  ui = z(pt),
  hi = z(ar),
  gi = z(Cr),
  yi = z(ir),
  xi = {
    Ah44eAAp_: "(min-width: 1200px)",
    gai0wjojf: "(min-width: 810px) and (max-width: 1199px)",
    ynD0yq589: "(max-width: 809px)",
  },
  wi = () => typeof document < "u",
  vi = "framer-KCvs0",
  bi = {
    Ah44eAAp_: "framer-v-onhfbr",
    gai0wjojf: "framer-v-768i0e",
    ynD0yq589: "framer-v-ovhf8m",
  },
  le = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  ie = { delay: 0.2, duration: 0.8, ease: [0.44, 0, 0.56, 1], type: "tween" },
  ce = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ie,
    x: 0,
    y: 0,
  },
  Ht = { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 },
  Yt = { bounce: 0, delay: 0.075, duration: 0.4, type: "spring" },
  _r = {
    effect: Ht,
    startDelay: 0.4,
    threshold: 0.5,
    tokenization: "word",
    transition: Yt,
    trigger: "onInView",
    type: "appear",
  },
  Ci = {
    effect: Ht,
    repeat: !1,
    startDelay: 0.4,
    threshold: 0.5,
    tokenization: "word",
    transition: Yt,
    trigger: "onInView",
    type: "appear",
  },
  Fr = {
    effect: Ht,
    startDelay: 0.4,
    tokenization: "word",
    transition: Yt,
    trigger: "onInView",
    type: "appear",
  },
  _i = ({ query: e, pageSize: r, children: n }) => {
    let a = Kr(e);
    return n(a);
  },
  Fi = {
    effect: Ht,
    startDelay: 0.1,
    tokenization: "word",
    transition: Yt,
    trigger: "onInView",
    type: "appear",
  },
  Ui = ({ value: e }) =>
    Vr()
      ? null
      : t("style", {
          dangerouslySetInnerHTML: { __html: e },
          "data-framer-html-style": "",
        }),
  Ii = { Desktop: "Ah44eAAp_", Phone: "ynD0yq589", Tablet: "gai0wjojf" },
  Si = ({ height: e, id: r, width: n, ...a }) => ({
    ...a,
    variant: Ii[a.variant] ?? a.variant ?? "Ah44eAAp_",
  }),
  ji = pe(function (e, r) {
    let n = v(null),
      a = r ?? n,
      o = ue(),
      { activeLocale: s, setLocale: l } = he(),
      i = ye(),
      {
        style: u,
        className: m,
        layoutId: f,
        variant: d,
        q6aRLk5yAMO0P_gFHI: h,
        ErHX0zRviMO0P_gFHI: x,
        SXySg5i1jMO0P_gFHI: w,
        oaAZY2iYjMO0P_gFHI: k,
        Yo_0fB8WNMO0P_gFHI: j,
        yZKde_430MO0P_gFHI: O,
        idMO0P_gFHI: V,
        ...E
      } = Si(e),
      S = re(() => ln(void 0, s), [void 0, s]);
    Mr(S);
    let [p, C] = Wr(d, xi, !1),
      g = void 0,
      A = Y(vi, ...[nn, kt, Mt, sn]),
      P = Re("Bv9wdXPdR"),
      J = v(null),
      Q = Re("xJN2mZXcm"),
      fe = v(null),
      it = Re("wP830aGSA"),
      we = v(null),
      st = Re("wpN7nZHkO"),
      de = v(null),
      W = () => (wi() ? p !== "ynD0yq589" : !0),
      ee = Re("nXSzhqWRq"),
      lt = v(null),
      He = Re("FGUEmH9P2"),
      Te = v(null),
      ve = Re("NT7YHkrER"),
      Me = v(null);
    return (
      Or({}),
      t(Pr.Provider, {
        value: { primaryVariantId: "Ah44eAAp_", variantClassNames: bi },
        children: b(Z, {
          id: f ?? o,
          children: [
            t(Ui, {
              value:
                "html body { background: var(--token-386acb33-32fd-46b6-b159-e9a3c15f8f38, rgb(255, 255, 255)); }",
            }),
            b(_.div, {
              ...E,
              className: Y(A, "framer-onhfbr", m),
              ref: a,
              style: { ...u },
              children: [
                b("section", {
                  className: "framer-tcovm7",
                  "data-framer-name": "Hero",
                  id: P,
                  ref: J,
                  children: [
                    t(R, {
                      breakpoint: p,
                      overrides: {
                        ynD0yq589: {
                          height: 1129.4,
                          y: (i?.y || 0) + 0 + 0 + 0,
                        },
                      },
                      children: t(M, {
                        height: 1234.4,
                        width: i?.width || "100vw",
                        children: t($, {
                          className: "framer-1yfg7pu-container",
                          nodeId: "XsEPCObdV",
                          scopeId: "YRMRDNPuz",
                          children: t(or, {
                            height: "100%",
                            id: "XsEPCObdV",
                            layoutId: "XsEPCObdV",
                            style: { height: "100%", width: "100%" },
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    t("div", {
                      className: "framer-rjrehv",
                      "data-framer-name": "Container",
                      children: b(Ee, {
                        __framer__animate: { transition: ie },
                        __framer__animateOnce: !0,
                        __framer__enter: le,
                        __framer__exit: ce,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-1x7bcda",
                        "data-framer-name": "Texts",
                        children: [
                          t(R, {
                            breakpoint: p,
                            overrides: {
                              ynD0yq589: {
                                background: {
                                  alt: "",
                                  backgroundSize: 0.73,
                                  fit: "tile",
                                  loading: tt(
                                    (i?.y || 0) +
                                      0 +
                                      0 +
                                      48 +
                                      0 +
                                      129 +
                                      0 +
                                      0 +
                                      0
                                  ),
                                  pixelHeight: 641,
                                  pixelWidth: 640,
                                  positionX: "center",
                                  positionY: "top",
                                  src: "https://framerusercontent.com/images/sFXpalqCDz4dxrhsKqt7YUOJ9s.jpg",
                                },
                              },
                            },
                            children: t(G, {
                              background: {
                                alt: "",
                                backgroundSize: 0.73,
                                fit: "tile",
                                pixelHeight: 641,
                                pixelWidth: 640,
                                positionX: "center",
                                positionY: "top",
                                src: "https://framerusercontent.com/images/sFXpalqCDz4dxrhsKqt7YUOJ9s.jpg",
                              },
                              className: "framer-1h1f4wh",
                              "data-framer-name": "Image",
                            }),
                          }),
                          t(D, {
                            __fromCanvasComponent: !0,
                            children: t(U, {
                              children: t("h1", {
                                className: "framer-styles-preset-n7dvse",
                                "data-styles-preset": "TqxDEtTDS",
                                style: { "--framer-text-alignment": "center" },
                                children: "Jackeline Costa",
                              }),
                            }),
                            className: "framer-1t1xldh",
                            effect: _r,
                            fonts: ["Inter"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          t(D, {
                            __fromCanvasComponent: !0,
                            children: t(U, {
                              children: t("p", {
                                className: "framer-styles-preset-1qiv7jj",
                                "data-styles-preset": "FgV7KPQav",
                                style: { "--framer-text-alignment": "center" },
                                children:
                                  "Product Designer | Gest\xE3o de Projetos | UI/UX Designer",
                              }),
                            }),
                            className: "framer-czy88x",
                            fonts: ["Inter"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          t(R, {
                            breakpoint: p,
                            overrides: {
                              ynD0yq589: {
                                y:
                                  (i?.y || 0) +
                                  0 +
                                  0 +
                                  48 +
                                  0 +
                                  129 +
                                  0 +
                                  0 +
                                  491.4,
                              },
                            },
                            children: t(M, {
                              height: 39,
                              children: t($, {
                                className: "framer-1jyz54m-container",
                                nodeId: "ohuYqScJZ",
                                scopeId: "YRMRDNPuz",
                                children: t(nr, {
                                  height: "100%",
                                  id: "ohuYqScJZ",
                                  layoutId: "ohuYqScJZ",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                          t("div", {
                            className: "framer-ozc1dh",
                            "data-framer-name": "Spacer",
                          }),
                          t("div", {
                            className: "framer-puce0i",
                            children: t(R, {
                              breakpoint: p,
                              overrides: {
                                ynD0yq589: {
                                  y:
                                    (i?.y || 0) +
                                    0 +
                                    0 +
                                    48 +
                                    0 +
                                    129 +
                                    0 +
                                    0 +
                                    571.4 +
                                    0 +
                                    0,
                                },
                              },
                              children: t(M, {
                                height: 52,
                                children: t($, {
                                  className: "framer-vz0vd2-container",
                                  nodeId: "JQo2Iol1y",
                                  scopeId: "YRMRDNPuz",
                                  children: t(tr, {
                                    cO5PVor7Z: "Falar comigo",
                                    height: "100%",
                                    id: "JQo2Iol1y",
                                    layoutId: "JQo2Iol1y",
                                    variant: "Gqi2UrvU6",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                t("section", {
                  className: "framer-iretjr",
                  "data-framer-name": "Benefits",
                  id: Q,
                  ref: fe,
                  children: t("div", {
                    className: "framer-1jzkti7",
                    "data-framer-name": "Container",
                    children: b(Ee, {
                      __framer__animate: { transition: ie },
                      __framer__animateOnce: !0,
                      __framer__enter: le,
                      __framer__exit: ce,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: "framer-1iyspu3",
                      "data-framer-name": "Our Mission",
                      children: [
                        b("div", {
                          className: "framer-o0sa9m",
                          "data-framer-name": "Texts",
                          children: [
                            t(D, {
                              __fromCanvasComponent: !0,
                              children: t(U, {
                                children: t("h2", {
                                  className: "framer-styles-preset-3pg9x0",
                                  "data-styles-preset": "Lc6nJbsaq",
                                  children: "Sobre mim",
                                }),
                              }),
                              className: "framer-nrju7b",
                              effect: Ci,
                              fonts: ["Inter"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            t(D, {
                              __fromCanvasComponent: !0,
                              children: b(U, {
                                children: [
                                  t("p", {
                                    className: "framer-styles-preset-1qiv7jj",
                                    "data-styles-preset": "FgV7KPQav",
                                    children: 
                                    "Sou graduanda em Administração pela Faculdade Sebrae, no último ano da graduação, com foco em gestão de projetos, pesquisa e desenvolvimento. Atuei no Sebrae-SP por três anos, onde colaborei na organização de eventos como a Feira do Empreendedor, desenvolvi materiais institucionais e participei do mapeamento de fluxos com base em experiências reais de atendimento. Essa vivência me aproximou da jornada do usuário e despertou um forte interesse por soluções mais humanas, acessíveis e estratégicas, o que me motivou a migrar para o design de interfaces.",
                                  }),
                                  t("p", {
                                    className: "framer-styles-preset-1qiv7jj",
                                    "data-styles-preset": "FgV7KPQav",
                                    children:
                                    "Desde então, venho me aprofundando em UI/UX Design por meio de formações técnicas e experiências práticas. Atualmente curso o programa profissionalizante da EBAC, além de complementações como o Google UX Design Certificate, Introdução ao Design System (Alura), Fundamentos de Acessibilidade (W3C/EdX) e práticas com Figma na Udemy. Minhas áreas de domínio incluem arquitetura da informação, heurísticas de Nielsen, design responsivo, acessibilidade, testes de usabilidade, handoff para devs, além de ciclos completos de discovery e delivery.",
                                }),
                                  t("p", {
                                    className: "framer-styles-preset-1qiv7jj",
                                    "data-styles-preset": "FgV7KPQav",
                                    children:
                                    "Como freelancer, desenvolvo projetos de landing pages e sites institucionais para diferentes segmentos, como saúde, cultura e direito. Em cada entrega, atuo desde a definição do escopo até o protótipo navegável, realizando entrevistas com clientes, organização de conteúdos e criação de interfaces que priorizam clareza, estética, responsividade e usabilidade. Entre os projetos mais relevantes estão a plataforma cultural MacuCultura, uma landing page para massoterapia com foco em acolhimento, e um site jurídico institucional.",
                                }),
                                t("p", {
                                    className: "framer-styles-preset-1qiv7jj",
                                    "data-styles-preset": "FgV7KPQav",
                                    children:
                                    "Minha trajetória une gestão, planejamento e comunicação com metodologias ágeis, escuta ativa e visão sistêmica. Acredito que o design não está apenas na estética, mas na forma como algo é compreendido, usado e sentido. É nessa intersecção entre propósito, estratégia e experiência que me posiciono como designer.",
                                }),
                                ],
                              }),
                              className: "framer-1jrkevp",
                              fonts: ["Inter"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        t(R, {
                          breakpoint: p,
                          overrides: {
                            gai0wjojf: {
                              background: {
                                alt: "Agency Workspace Setup",
                                fit: "fill",
                                pixelHeight: 953,
                                pixelWidth: 635,
                                sizes: "350px",
                                src: "https://framerusercontent.com/images/A7jsLQHTT9q1214UMaa6gIDfxkY.jpg?lossless=1",
                                srcSet:
                                  "https://framerusercontent.com/images/A7jsLQHTT9q1214UMaa6gIDfxkY.jpg?lossless=1 635w",
                              },
                            },
                            ynD0yq589: {
                              background: {
                                alt: "Agency Workspace Setup",
                                fit: "fill",
                                loading: tt(
                                  (i?.y || 0) +
                                    0 +
                                    929.4 +
                                    45 +
                                    0 +
                                    0 +
                                    0 +
                                    661.7
                                ),
                                pixelHeight: 953,
                                pixelWidth: 635,
                                sizes: "363px",
                                src: "https://framerusercontent.com/images/A7jsLQHTT9q1214UMaa6gIDfxkY.jpg?lossless=1",
                                srcSet:
                                  "https://framerusercontent.com/images/A7jsLQHTT9q1214UMaa6gIDfxkY.jpg?lossless=1 635w",
                              },
                            },
                          },
                          children: t(G, {
                            background: {
                              alt: "Agency Workspace Setup",
                              fit: "fill",
                              pixelHeight: 953,
                              pixelWidth: 635,
                              sizes: "547.5px",
                              src: "https://framerusercontent.com/images/A7jsLQHTT9q1214UMaa6gIDfxkY.jpg?lossless=1",
                              srcSet:
                                "https://framerusercontent.com/images/A7jsLQHTT9q1214UMaa6gIDfxkY.jpg?lossless=1 635w",
                            },
                            className: "framer-1gr4y5g",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                t("section", {
                  className: "framer-3xanzb",
                  "data-framer-name": "Gallery",
                  id: it,
                  ref: we,
                  children: t(R, {
                    breakpoint: p,
                    overrides: {
                      ynD0yq589: { y: (i?.y || 0) + 0 + 2081.1 + 0 + 0 },
                    },
                    children: t(M, {
                      height: 778,
                      width: i?.width || "100vw",
                      children: t(On, {
                        __framer__animate: { transition: ie },
                        __framer__animateOnce: !0,
                        __framer__enter: le,
                        __framer__exit: ce,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-1jlivyn-container",
                        nodeId: "RXFmgkiFA",
                        rendersWithMotion: !0,
                        scopeId: "YRMRDNPuz",
                        children: t(R, {
                          breakpoint: p,
                          overrides: {
                            gai0wjojf: { variant: "bTpj6OBDJ" },
                            ynD0yq589: { variant: "XmFryAt7M" },
                          },
                          children: t(vr, {
                            height: "100%",
                            id: "RXFmgkiFA",
                            layoutId: "RXFmgkiFA",
                            style: { width: "100%" },
                            variant: "ryYOo9aA7",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                t("section", {
                  className: "framer-gdf7y1",
                  "data-framer-name": "Why Choose Us",
                  id: st,
                  ref: de,
                  children: b("div", {
                    className: "framer-o0msdg",
                    "data-framer-name": "Container",
                    children: [
                      b(Ee, {
                        __framer__animate: { transition: ie },
                        __framer__animateOnce: !0,
                        __framer__enter: le,
                        __framer__exit: ce,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-1ec62p3",
                        "data-framer-name": "Title",
                        children: [
                          t(D, {
                            __fromCanvasComponent: !0,
                            children: t(U, {
                              children: t("h2", {
                                className: "framer-styles-preset-3pg9x0",
                                "data-styles-preset": "Lc6nJbsaq",
                                style: { "--framer-text-alignment": "center" },
                                children: "Por que trabalhar comigo?",
                              }),
                            }),
                            className: "framer-5owoo",
                            effect: Fr,
                            fonts: ["Inter"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          t(D, {
                            __fromCanvasComponent: !0,
                            children: t(U, {
                              children: t("p", {
                                className: "framer-styles-preset-1qiv7jj",
                                "data-styles-preset": "FgV7KPQav",
                                style: { "--framer-text-alignment": "center" },
                                children:
                                  "Acredito em processos colaborativos, em aprender com cada projeto e em evoluir junto com as pessoas com quem trabalho. Meu foco est\xE1 em entregar solu\xE7\xF5es funcionais e bem pensadas, com empatia, organiza\xE7\xE3o e disposi\xE7\xE3o para ajustar o que for preciso.",
                              }),
                            }),
                            className: "framer-11tjmjx",
                            fonts: ["Inter"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      b(Ee, {
                        __framer__animate: { transition: ie },
                        __framer__animateOnce: !0,
                        __framer__enter: le,
                        __framer__exit: ce,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-kxpc9e",
                        "data-framer-name": "Icon Cards",
                        children: [
                          t(R, {
                            breakpoint: p,
                            overrides: {
                              gai0wjojf: {
                                width: `max((min(${
                                  i?.width || "100vw"
                                } - 60px, 850px) - 82px) / 3, 1px)`,
                              },
                              ynD0yq589: {
                                width: `min(${
                                  i?.width || "100vw"
                                } - 40px, 600px)`,
                                y:
                                  (i?.y || 0) +
                                  0 +
                                  2859.1 +
                                  0 +
                                  0 +
                                  82 +
                                  298.7 +
                                  23 +
                                  0,
                              },
                            },
                            children: t(M, {
                              height: 286,
                              width: `max((min(${
                                i?.width || "100vw"
                              } - 60px, 1200px) - 200px) / 3, 1px)`,
                              children: t($, {
                                className: "framer-ugfmgs-container",
                                nodeId: "n1Rh12Q4l",
                                scopeId: "YRMRDNPuz",
                                children: t(Ct, {
                                  gjsL8WG0e: "Trabalho em equipe",
                                  height: "100%",
                                  id: "n1Rh12Q4l",
                                  layoutId: "n1Rh12Q4l",
                                  P3U0AkMC3: "Note",
                                  style: { width: "100%" },
                                  uGjgFM1Bx:
                                    "Gosto de colaborar, ouvir diferentes pontos de vista e construir em conjunto. Acredito que boas solu\xE7\xF5es nascem do di\xE1logo.",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                          W() &&
                            t("div", {
                              className: "framer-i70ykr hidden-ovhf8m",
                              "data-framer-name": "Spacer + Line",
                              children: t("div", {
                                className: "framer-3b7dzi",
                                "data-framer-name": "Line",
                              }),
                            }),
                          t(R, {
                            breakpoint: p,
                            overrides: {
                              gai0wjojf: {
                                width: `max((min(${
                                  i?.width || "100vw"
                                } - 60px, 850px) - 82px) / 3, 1px)`,
                              },
                              ynD0yq589: {
                                width: `min(${
                                  i?.width || "100vw"
                                } - 40px, 600px)`,
                                y:
                                  (i?.y || 0) +
                                  0 +
                                  2859.1 +
                                  0 +
                                  0 +
                                  82 +
                                  298.7 +
                                  23 +
                                  336,
                              },
                            },
                            children: t(M, {
                              height: 286,
                              width: `max((min(${
                                i?.width || "100vw"
                              } - 60px, 1200px) - 200px) / 3, 1px)`,
                              children: t($, {
                                className: "framer-w54owf-container",
                                nodeId: "GThnWWA0o",
                                scopeId: "YRMRDNPuz",
                                children: t(Ct, {
                                  gjsL8WG0e:
                                    "Processos organizados e adapt\xE1veis",
                                  height: "100%",
                                  id: "GThnWWA0o",
                                  layoutId: "GThnWWA0o",
                                  P3U0AkMC3: "UserSwitch",
                                  style: { width: "100%" },
                                  uGjgFM1Bx:
                                    "Tenho afinidade com ferramentas como Figma, Notion e ClickUp, mas me adapto r\xE1pido a novos fluxos. Estou sempre buscando aprender e melhorar.",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                          W() &&
                            t("div", {
                              className: "framer-1rffwrf hidden-ovhf8m",
                              "data-framer-name": "Spacer + Line",
                              children: t("div", {
                                className: "framer-mx0o2d",
                                "data-framer-name": "Line",
                              }),
                            }),
                          t(R, {
                            breakpoint: p,
                            overrides: {
                              gai0wjojf: {
                                width: `max((min(${
                                  i?.width || "100vw"
                                } - 60px, 850px) - 82px) / 3, 1px)`,
                              },
                              ynD0yq589: {
                                width: `min(${
                                  i?.width || "100vw"
                                } - 40px, 600px)`,
                                y:
                                  (i?.y || 0) +
                                  0 +
                                  2859.1 +
                                  0 +
                                  0 +
                                  82 +
                                  298.7 +
                                  23 +
                                  672,
                              },
                            },
                            children: t(M, {
                              height: 286,
                              width: `max((min(${
                                i?.width || "100vw"
                              } - 60px, 1200px) - 200px) / 3, 1px)`,
                              children: t($, {
                                className: "framer-3cf4im-container",
                                nodeId: "ZaOZEZouO",
                                scopeId: "YRMRDNPuz",
                                children: t(Ct, {
                                  gjsL8WG0e: "Agilidade",
                                  height: "100%",
                                  id: "ZaOZEZouO",
                                  layoutId: "ZaOZEZouO",
                                  P3U0AkMC3: "Lightning",
                                  style: { width: "100%" },
                                  uGjgFM1Bx:
                                    "Prezo por entregas objetivas e bem feitas, equilibrando ritmo e qualidade de forma realista e respeitosa com todos os envolvidos.",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                t("section", {
                  className: "framer-16wk279",
                  "data-framer-name": "Services",
                  id: ee,
                  ref: lt,
                  children: b("div", {
                    className: "framer-3rhwpr",
                    "data-framer-name": "Container",
                    children: [
                      b(Ee, {
                        __framer__animate: { transition: ie },
                        __framer__animateOnce: !0,
                        __framer__enter: le,
                        __framer__exit: ce,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-1y29byj",
                        "data-framer-name": "Title",
                        children: [
                          t(D, {
                            __fromCanvasComponent: !0,
                            children: t(U, {
                              children: t("h2", {
                                className: "framer-styles-preset-3pg9x0",
                                "data-styles-preset": "Lc6nJbsaq",
                                style: { "--framer-text-alignment": "center" },
                                children:
                                  "Crio com prop\xF3sito, clareza e foco nas pessoas.",
                              }),
                            }),
                            className: "framer-72xmnd",
                            effect: _r,
                            fonts: ["Inter"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          t(D, {
                            __fromCanvasComponent: !0,
                            children: t(U, {
                              children: t("p", {
                                className: "framer-styles-preset-1qiv7jj",
                                "data-styles-preset": "FgV7KPQav",
                                style: { "--framer-text-alignment": "center" },
                                children:
                                  "De estrutura \xE0 est\xE9tica, desenvolvo experi\xEAncias digitais intuitivas, funcionais e centradas no usu\xE1rio, unindo estrat\xE9gia, usabilidade e impacto visual.",
                              }),
                            }),
                            className: "framer-19c7771",
                            fonts: ["Inter"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      b("div", {
                        className: "framer-1fqmmn5",
                        "data-framer-name": "Content",
                        children: [
                          t(R, {
                            breakpoint: p,
                            overrides: {
                              gai0wjojf: {
                                background: {
                                  alt: "Agency Workspace",
                                  fit: "fill",
                                  pixelHeight: 3375,
                                  pixelWidth: 5063,
                                  sizes: `min(${
                                    i?.width || "100vw"
                                  } - 60px, 850px)`,
                                  src: "https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?lossless=1",
                                  srcSet:
                                    "https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?scale-down-to=512&lossless=1 512w,https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?scale-down-to=1024&lossless=1 1024w,https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?scale-down-to=2048&lossless=1 2048w,https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?scale-down-to=4096&lossless=1 4096w,https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?lossless=1 5063w",
                                },
                              },
                              ynD0yq589: {
                                background: {
                                  alt: "Agency Workspace",
                                  fit: "fill",
                                  loading: tt(
                                    (i?.y || 0) +
                                      0 +
                                      4329.8 +
                                      25 +
                                      0 +
                                      0 +
                                      298.7 +
                                      41 +
                                      0
                                  ),
                                  pixelHeight: 3375,
                                  pixelWidth: 5063,
                                  sizes: `min(${
                                    i?.width || "100vw"
                                  } - 40px, 600px)`,
                                  src: "https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?lossless=1",
                                  srcSet:
                                    "https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?scale-down-to=512&lossless=1 512w,https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?scale-down-to=1024&lossless=1 1024w,https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?scale-down-to=2048&lossless=1 2048w,https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?scale-down-to=4096&lossless=1 4096w,https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?lossless=1 5063w",
                                },
                              },
                            },
                            children: t(pi, {
                              __framer__animate: { transition: ie },
                              __framer__animateOnce: !0,
                              __framer__enter: le,
                              __framer__exit: ce,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              background: {
                                alt: "Agency Workspace",
                                fit: "fill",
                                pixelHeight: 3375,
                                pixelWidth: 5063,
                                sizes: `min(${
                                  i?.width || "100vw"
                                } - 60px, 1200px)`,
                                src: "https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?lossless=1",
                                srcSet:
                                  "https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?scale-down-to=512&lossless=1 512w,https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?scale-down-to=1024&lossless=1 1024w,https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?scale-down-to=2048&lossless=1 2048w,https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?scale-down-to=4096&lossless=1 4096w,https://framerusercontent.com/images/louExSaxpGa3LZhQadfzTMyhJi8.png?lossless=1 5063w",
                              },
                              className: "framer-1839nel",
                            }),
                          }),
                          b(Ee, {
                            __framer__animate: { transition: ie },
                            __framer__animateOnce: !0,
                            __framer__enter: le,
                            __framer__exit: ce,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-fwjxj6",
                            "data-framer-name": "Icon Cards",
                            children: [
                              t(R, {
                                breakpoint: p,
                                overrides: {
                                  gai0wjojf: {
                                    width: `max((min(${
                                      i?.width || "100vw"
                                    } - 60px, 850px) - 40px) / 3, 1px)`,
                                  },
                                  ynD0yq589: {
                                    width: `min(${
                                      i?.width || "100vw"
                                    } - 40px, 600px)`,
                                    y:
                                      (i?.y || 0) +
                                      0 +
                                      4329.8 +
                                      25 +
                                      0 +
                                      0 +
                                      298.7 +
                                      41 +
                                      522 +
                                      0 +
                                      0,
                                  },
                                },
                                children: t(M, {
                                  height: 100,
                                  width: `max((min(${
                                    i?.width || "100vw"
                                  } - 60px, 1200px) - 40px) / 3, 1px)`,
                                  children: t($, {
                                    className: "framer-4nzxx3-container",
                                    nodeId: "FhUsuNGBe",
                                    scopeId: "YRMRDNPuz",
                                    children: t(R, {
                                      breakpoint: p,
                                      overrides: {
                                        gai0wjojf: { variant: "g9qU7JiBc" },
                                        ynD0yq589: { variant: "g9qU7JiBc" },
                                      },
                                      children: t(pt, {
                                        gYcx9jH_3: "ChartLineUp",
                                        height: "100%",
                                        id: "FhUsuNGBe",
                                        layoutId: "FhUsuNGBe",
                                        style: { width: "100%" },
                                        variant: "KOuBXi5wq",
                                        width: "100%",
                                        XmYUjr3Eg:
                                          "Estudo diariamente UX/UI, prototipa\xE7\xE3o e design centrado no usu\xE1rio.",
                                        xUO8FSwjC: "Aprendizado cont\xEDnuo",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              t(R, {
                                breakpoint: p,
                                overrides: {
                                  gai0wjojf: {
                                    width: `max((min(${
                                      i?.width || "100vw"
                                    } - 60px, 850px) - 40px) / 3, 1px)`,
                                  },
                                  ynD0yq589: {
                                    width: `min(${
                                      i?.width || "100vw"
                                    } - 40px, 600px)`,
                                    y:
                                      (i?.y || 0) +
                                      0 +
                                      4329.8 +
                                      25 +
                                      0 +
                                      0 +
                                      298.7 +
                                      41 +
                                      522 +
                                      0 +
                                      150,
                                  },
                                },
                                children: t(M, {
                                  height: 100,
                                  width: `max((min(${
                                    i?.width || "100vw"
                                  } - 60px, 1200px) - 40px) / 3, 1px)`,
                                  children: t($, {
                                    className: "framer-1aooavw-container",
                                    nodeId: "zgUG2qyjW",
                                    scopeId: "YRMRDNPuz",
                                    children: t(R, {
                                      breakpoint: p,
                                      overrides: {
                                        gai0wjojf: { variant: "g9qU7JiBc" },
                                        ynD0yq589: { variant: "g9qU7JiBc" },
                                      },
                                      children: t(pt, {
                                        gYcx9jH_3: "CursorClick",
                                        height: "100%",
                                        id: "zgUG2qyjW",
                                        layoutId: "zgUG2qyjW",
                                        style: { width: "100%" },
                                        variant: "KOuBXi5wq",
                                        width: "100%",
                                        XmYUjr3Eg:
                                          "Me desafio criando solu\xE7\xF5es que resolvem problemas reais, mesmo que ainda n\xE3o sejam para clientes.",
                                        xUO8FSwjC:
                                          "Projetos autorais com prop\xF3sito",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              t(R, {
                                breakpoint: p,
                                overrides: {
                                  gai0wjojf: {
                                    width: `max((min(${
                                      i?.width || "100vw"
                                    } - 60px, 850px) - 40px) / 3, 1px)`,
                                  },
                                  ynD0yq589: {
                                    width: `min(${
                                      i?.width || "100vw"
                                    } - 40px, 600px)`,
                                    y:
                                      (i?.y || 0) +
                                      0 +
                                      4329.8 +
                                      25 +
                                      0 +
                                      0 +
                                      298.7 +
                                      41 +
                                      522 +
                                      0 +
                                      300,
                                  },
                                },
                                children: t(M, {
                                  height: 100,
                                  width: `max((min(${
                                    i?.width || "100vw"
                                  } - 60px, 1200px) - 40px) / 3, 1px)`,
                                  children: t($, {
                                    className: "framer-1p0v9yn-container",
                                    nodeId: "VqAeCpqnv",
                                    scopeId: "YRMRDNPuz",
                                    children: t(R, {
                                      breakpoint: p,
                                      overrides: {
                                        gai0wjojf: { variant: "g9qU7JiBc" },
                                        ynD0yq589: { variant: "g9qU7JiBc" },
                                      },
                                      children: t(pt, {
                                        gYcx9jH_3: "CursorClick",
                                        height: "100%",
                                        id: "VqAeCpqnv",
                                        layoutId: "VqAeCpqnv",
                                        style: { width: "100%" },
                                        variant: "KOuBXi5wq",
                                        width: "100%",
                                        XmYUjr3Eg:
                                          "Planejamento visual e ferramentas de gest\xE3o fazem parte da minha rotina.",
                                        xUO8FSwjC:
                                          "Organiza\xE7\xE3o como aliada",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t(D, {
                        __fromCanvasComponent: !0,
                        children: t(U, {
                          children: t("h1", {
                            className: "framer-styles-preset-n7dvse",
                            "data-styles-preset": "TqxDEtTDS",
                            style: { "--framer-text-alignment": "center" },
                            children: "Viv\xEAncias profissionais",
                          }),
                        }),
                        className: "framer-12rz3t6",
                        effect: _r,
                        fonts: ["Inter"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      t("div", {
                        className: "framer-a262oe",
                        children: t(Lr, {
                          children: t(_i, {
                            query: {
                              from: {
                                alias: "MO0P_gFHI",
                                data: en,
                                type: "Collection",
                              },
                              select: [
                                {
                                  collection: "MO0P_gFHI",
                                  name: "q6aRLk5yA",
                                  type: "Identifier",
                                },
                                {
                                  collection: "MO0P_gFHI",
                                  name: "ErHX0zRvi",
                                  type: "Identifier",
                                },
                                {
                                  collection: "MO0P_gFHI",
                                  name: "SXySg5i1j",
                                  type: "Identifier",
                                },
                                {
                                  collection: "MO0P_gFHI",
                                  name: "oaAZY2iYj",
                                  type: "Identifier",
                                },
                                {
                                  collection: "MO0P_gFHI",
                                  name: "Yo_0fB8WN",
                                  type: "Identifier",
                                },
                                {
                                  collection: "MO0P_gFHI",
                                  name: "yZKde_430",
                                  type: "Identifier",
                                },
                                {
                                  collection: "MO0P_gFHI",
                                  name: "id",
                                  type: "Identifier",
                                },
                              ],
                            },
                            children: (Ye, ct, me) =>
                              t(Er, {
                                children: Ye?.map(
                                  (
                                    {
                                      ErHX0zRvi: K,
                                      id: te,
                                      oaAZY2iYj: Ge,
                                      q6aRLk5yA: Xe,
                                      SXySg5i1j: Ne,
                                      Yo_0fB8WN: Ze,
                                      yZKde_430: Pe,
                                    },
                                    L
                                  ) => (
                                    (Xe ??= ""),
                                    (K ??= ""),
                                    (Ne ??= ""),
                                    (Ge ??= ""),
                                    (Ze ??= ""),
                                    (Pe ??= ""),
                                    t(
                                      Z,
                                      {
                                        id: `MO0P_gFHI-${te}`,
                                        children: t(Br.Provider, {
                                          value: { yZKde_430: Pe },
                                          children: t("div", {
                                            className: "framer-1gck73n",
                                            children: t(R, {
                                              breakpoint: p,
                                              overrides: {
                                                gai0wjojf: {
                                                  width: `max(min(${
                                                    i?.width || "100vw"
                                                  } - 60px, 850px), 50px)`,
                                                },
                                                ynD0yq589: {
                                                  width: `min(${
                                                    i?.width || "100vw"
                                                  } - 40px, 600px)`,
                                                  y:
                                                    (i?.y || 0) +
                                                    0 +
                                                    4329.8 +
                                                    25 +
                                                    0 +
                                                    0 +
                                                    1478.6 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0,
                                                },
                                              },
                                              children: t(M, {
                                                height: 258,
                                                width: `max(min(${
                                                  i?.width || "100vw"
                                                } - 60px, 1200px), 50px)`,
                                                children: t($, {
                                                  className:
                                                    "framer-vn6h1o-container",
                                                  nodeId: "I5sZNf5n7",
                                                  scopeId: "YRMRDNPuz",
                                                  children: t(R, {
                                                    breakpoint: p,
                                                    overrides: {
                                                      gai0wjojf: {
                                                        variant: "pAe7YEYuB",
                                                      },
                                                      ynD0yq589: {
                                                        variant: "sUH8P5ewN",
                                                      },
                                                    },
                                                    children: t(ar, {
                                                      cYhlDPTLP: Ne,
                                                      D1lt0CAG5: Ge,
                                                      grvrGoOt0: Ze,
                                                      height: "100%",
                                                      id: "I5sZNf5n7",
                                                      layoutId: "I5sZNf5n7",
                                                      mjJbbixmI: Xe,
                                                      style: { width: "100%" },
                                                      variant: "XzeznuyTU",
                                                      width: "100%",
                                                      Y30eQXjtp: K,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      },
                                      te
                                    )
                                  )
                                ),
                              }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                t("section", {
                  className: "framer-we7bvh",
                  "data-framer-name": "Testimonials",
                  id: He,
                  ref: Te,
                  children: b("div", {
                    className: "framer-1mi83g2",
                    "data-framer-name": "Container",
                    children: [
                      b(Ee, {
                        __framer__animate: { transition: ie },
                        __framer__animateOnce: !0,
                        __framer__enter: le,
                        __framer__exit: ce,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-1lus3b2",
                        "data-framer-name": "Title",
                        children: [
                          t(D, {
                            __fromCanvasComponent: !0,
                            children: t(U, {
                              children: t("h2", {
                                className: "framer-styles-preset-3pg9x0",
                                "data-styles-preset": "Lc6nJbsaq",
                                style: { "--framer-text-alignment": "center" },
                                children:
                                  "Cada projeto \xE9 uma oportunidade de aprender e evoluir.",
                              }),
                            }),
                            className: "framer-q3pw7v",
                            effect: Fr,
                            fonts: ["Inter"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          t(D, {
                            __fromCanvasComponent: !0,
                            children: t(U, {
                              children: t("p", {
                                className: "framer-styles-preset-1qiv7jj",
                                "data-styles-preset": "FgV7KPQav",
                                style: { "--framer-text-alignment": "center" },
                                children:
                                  "E cada conex\xE3o nova pode ser o come\xE7o de algo que transforma.",
                              }),
                            }),
                            className: "framer-kstlb0",
                            fonts: ["Inter"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      t("div", {
                        className: "framer-6i5cxv",
                        "data-framer-name": "Testimonials + Partners",
                        children: t(R, {
                          breakpoint: p,
                          overrides: {
                            gai0wjojf: {
                              width: `min(${
                                i?.width || "100vw"
                              } - 60px, 850px)`,
                            },
                            ynD0yq589: {
                              width: `min(${
                                i?.width || "100vw"
                              } - 40px, 600px)`,
                              y:
                                (i?.y || 0) +
                                0 +
                                6191.4 +
                                0 +
                                0 +
                                0 +
                                298.7 +
                                0 +
                                0,
                            },
                          },
                          children: t(M, {
                            height: 514,
                            width: `min(${i?.width || "100vw"} - 60px, 1200px)`,
                            children: t(On, {
                              __framer__animate: { transition: ie },
                              __framer__animateOnce: !0,
                              __framer__enter: le,
                              __framer__exit: ce,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-pem7xe-container",
                              nodeId: "tEoNOO3oS",
                              rendersWithMotion: !0,
                              scopeId: "YRMRDNPuz",
                              children: t(R, {
                                breakpoint: p,
                                overrides: {
                                  gai0wjojf: { variant: "V2xWQv697" },
                                  ynD0yq589: { variant: "pkUkkEir6" },
                                },
                                children: t(Cr, {
                                  height: "100%",
                                  id: "tEoNOO3oS",
                                  layoutId: "tEoNOO3oS",
                                  style: { width: "100%" },
                                  variant: "r44DS4wTP",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                b("section", {
                  className: "framer-15ba7v7",
                  "data-framer-name": "Pricing",
                  id: ve,
                  ref: Me,
                  children: [
                    t("div", {
                      className: "framer-1jnepb7",
                      "data-framer-name": "Container",
                      children: t(Ee, {
                        __framer__animate: { transition: ie },
                        __framer__animateOnce: !0,
                        __framer__enter: le,
                        __framer__exit: ce,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-1byru3i",
                        "data-framer-name": "Title",
                        children: t(D, {
                          __fromCanvasComponent: !0,
                          children: t(U, {
                            children: t("h2", {
                              className: "framer-styles-preset-3pg9x0",
                              "data-styles-preset": "Lc6nJbsaq",
                              style: { "--framer-text-alignment": "center" },
                              children: "Habilidades e Conhecimentos",
                            }),
                          }),
                          className: "framer-1vr52ai",
                          effect: Fr,
                          fonts: ["Inter"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    t(D, {
                      __fromCanvasComponent: !0,
                      children: t(U, {
                        children: t("h5", {
                          className: "framer-styles-preset-168gzqw",
                          "data-styles-preset": "wm_KUcvyE",
                          style: { "--framer-text-alignment": "center" },
                          children:
                            "Figma    Framer    Miro    UI/UX Designer    Gest\xE3o de Projetos    Wireframes   Notion    Prototipa\xE7\xE3o    Canva    Organiza\xE7\xE3o    Metodologias \xC1geis Arquitetura da Informa\xE7\xE3o    Acessibilidade Digital    Design Responsivo    Design Centrado no Usu\xE1rio    Cria\xE7\xE3o de Interfaces    Testes com usu\xE1rios",
                        }),
                      }),
                      className: "framer-sdim70",
                      effect: Fi,
                      fonts: ["Inter"],
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    t(R, {
                      breakpoint: p,
                      overrides: {
                        ynD0yq589: {
                          width: `calc(${i?.width || "100vw"} - 40px)`,
                          y: (i?.y || 0) + 0 + 7104.1 + 25 + 207.8,
                        },
                      },
                      children: t(M, {
                        height: 488,
                        width: `calc(${i?.width || "100vw"} - 60px)`,
                        children: t($, {
                          className: "framer-2c10ne-container",
                          nodeId: "rahMAZrJV",
                          scopeId: "YRMRDNPuz",
                          children: t(R, {
                            breakpoint: p,
                            overrides: {
                              gai0wjojf: { variant: "kiDmlmTzw" },
                              ynD0yq589: { variant: "TZIhOgxje" },
                            },
                            children: t(ir, {
                              height: "100%",
                              id: "rahMAZrJV",
                              layoutId: "rahMAZrJV",
                              style: { width: "100%" },
                              variant: "nJNIcNU5P",
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            t("div", { id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Ai = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-KCvs0.framer-1a6wkwz, .framer-KCvs0 .framer-1a6wkwz { display: block; }",
    ".framer-KCvs0.framer-onhfbr { align-content: center; align-items: center; background-color: var(--token-386acb33-32fd-46b6-b159-e9a3c15f8f38, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",
    ".framer-KCvs0 .framer-tcovm7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 186px 30px 13px 30px; position: relative; width: 100%; }",
    ".framer-KCvs0 .framer-1yfg7pu-container { bottom: -200px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    ".framer-KCvs0 .framer-rjrehv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 106px 0px 106px 0px; position: relative; width: 100%; z-index: 2; }",
    ".framer-KCvs0 .framer-1x7bcda { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 60%; }",
    ".framer-KCvs0 .framer-1h1f4wh { border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; flex: none; height: 194px; overflow: hidden; position: relative; width: 183px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-KCvs0 .framer-1t1xldh, .framer-KCvs0 .framer-5owoo, .framer-KCvs0 .framer-72xmnd, .framer-KCvs0 .framer-12rz3t6, .framer-KCvs0 .framer-q3pw7v, .framer-KCvs0 .framer-1vr52ai { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0,0,0,1) 100%) add; flex: none; height: auto; mask: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0,0,0,1) 100%) add; position: relative; width: 100%; }",
    ".framer-KCvs0 .framer-czy88x, .framer-KCvs0 .framer-11tjmjx, .framer-KCvs0 .framer-19c7771, .framer-KCvs0 .framer-kstlb0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-KCvs0 .framer-1jyz54m-container, .framer-KCvs0 .framer-vz0vd2-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-KCvs0 .framer-ozc1dh { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }",
    ".framer-KCvs0 .framer-puce0i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-KCvs0 .framer-iretjr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 30px; position: relative; scroll-margin-top: 50px; width: 100%; }",
    ".framer-KCvs0 .framer-1jzkti7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 1134px; z-index: 1; }",
    ".framer-KCvs0 .framer-1iyspu3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 39px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-KCvs0 .framer-o0sa9m { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-KCvs0 .framer-nrju7b { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0,0,0,1) 100%) add; flex: none; height: auto; mask: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0,0,0,1) 100%) add; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-KCvs0 .framer-1jrkevp { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-KCvs0 .framer-1gr4y5g { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: 1 0 0px; height: 646px; overflow: hidden; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-KCvs0 .framer-3xanzb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; scroll-margin-top: 50px; width: 100%; }",
    ".framer-KCvs0 .framer-1jlivyn-container, .framer-KCvs0 .framer-pem7xe-container, .framer-KCvs0 .framer-2c10ne-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-KCvs0 .framer-gdf7y1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: visible; padding: 0px 30px 0px 30px; position: relative; scroll-margin-top: 50px; width: 100%; }",
    ".framer-KCvs0 .framer-o0msdg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 49px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 82px 0px 82px 0px; position: relative; width: 100%; }",
    ".framer-KCvs0 .framer-1ec62p3, .framer-KCvs0 .framer-1lus3b2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 60%; }",
    ".framer-KCvs0 .framer-kxpc9e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 23px 0px 23px 0px; position: relative; width: 100%; }",
    ".framer-KCvs0 .framer-ugfmgs-container, .framer-KCvs0 .framer-w54owf-container, .framer-KCvs0 .framer-3cf4im-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; z-index: 1; }",
    ".framer-KCvs0 .framer-i70ykr, .framer-KCvs0 .framer-1rffwrf { align-self: stretch; flex: none; height: auto; overflow: visible; position: relative; width: 100px; z-index: 0; }",
    ".framer-KCvs0 .framer-3b7dzi, .framer-KCvs0 .framer-mx0o2d { -webkit-mask: radial-gradient(50% 50% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0.9) 6.4629082207207205%, rgba(0, 0, 0, 0) 100%) add; background-color: var(--token-3c8398c6-894e-4918-ace6-437d6e9600f0, rgba(255, 255, 255, 0.1)); flex: none; height: 5px; left: -100px; mask: radial-gradient(50% 50% at 50% 50%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 6.4629082207207205%, rgba(0, 0, 0, 0) 100%) add; overflow: hidden; position: absolute; right: -100px; top: 50px; }",
    ".framer-KCvs0 .framer-16wk279 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px 30px 68px 30px; position: relative; scroll-margin-top: 50px; width: 100%; }",
    ".framer-KCvs0 .framer-3rhwpr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-KCvs0 .framer-1y29byj, .framer-KCvs0 .framer-1byru3i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 60%; }",
    ".framer-KCvs0 .framer-1fqmmn5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: center; overflow: hidden; padding: 41px 0px 41px 0px; position: relative; width: 100%; }",
    ".framer-KCvs0 .framer-1839nel { border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25); flex: none; height: 600px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-KCvs0 .framer-fwjxj6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-KCvs0 .framer-4nzxx3-container, .framer-KCvs0 .framer-1aooavw-container, .framer-KCvs0 .framer-1p0v9yn-container, .framer-KCvs0 .framer-vn6h1o-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }",
    ".framer-KCvs0 .framer-a262oe { display: grid; flex: none; gap: 50px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(1, minmax(50px, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-KCvs0 .framer-1gck73n { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 40px; height: 100%; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }",
    ".framer-KCvs0 .framer-we7bvh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px 30px 76px 30px; position: relative; scroll-margin-top: 50px; width: 100%; }",
    ".framer-KCvs0 .framer-1mi83g2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-KCvs0 .framer-6i5cxv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-KCvs0 .framer-15ba7v7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 57px; height: min-content; justify-content: center; overflow: visible; padding: 0px 30px 45px 30px; position: relative; scroll-margin-top: 50px; width: 100%; }",
    ".framer-KCvs0 .framer-1jnepb7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 75px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-KCvs0 .framer-sdim70 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0,0,0,1) 100%) add; flex: none; height: auto; mask: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0,0,0,1) 100%) add; position: relative; width: auto; }",
    ...rn,
    ...Dt,
    ...Tt,
    ...on,
    "@media (min-width: 810px) and (max-width: 1199px) { .framer-KCvs0.framer-onhfbr { width: 810px; } .framer-KCvs0 .framer-rjrehv, .framer-KCvs0 .framer-1jnepb7 { max-width: 850px; } .framer-KCvs0 .framer-1x7bcda, .framer-KCvs0 .framer-1ec62p3, .framer-KCvs0 .framer-1y29byj, .framer-KCvs0 .framer-1lus3b2, .framer-KCvs0 .framer-1byru3i { width: 70%; } .framer-KCvs0 .framer-1jzkti7 { gap: 75px; max-width: 850px; width: 750px; } .framer-KCvs0 .framer-1iyspu3 { gap: 50px; } .framer-KCvs0 .framer-1gr4y5g { height: 400px; } .framer-KCvs0 .framer-o0msdg, .framer-KCvs0 .framer-3rhwpr, .framer-KCvs0 .framer-1mi83g2 { gap: 75px; max-width: 850px; } .framer-KCvs0 .framer-kxpc9e { align-content: flex-start; align-items: flex-start; gap: 20px; } .framer-KCvs0 .framer-i70ykr, .framer-KCvs0 .framer-1rffwrf { width: 1px; } .framer-KCvs0 .framer-1839nel { height: 450px; } .framer-KCvs0 .framer-a262oe { gap: 40px; }}",
    "@media (max-width: 809px) { .framer-KCvs0.framer-onhfbr { width: 390px; } .framer-KCvs0 .framer-tcovm7 { order: 0; padding: 48px 20px 0px 20px; } .framer-KCvs0 .framer-rjrehv { max-width: 600px; padding: 129px 0px 129px 0px; } .framer-KCvs0 .framer-1x7bcda, .framer-KCvs0 .framer-1ec62p3, .framer-KCvs0 .framer-1y29byj, .framer-KCvs0 .framer-1lus3b2, .framer-KCvs0 .framer-1byru3i { width: 100%; } .framer-KCvs0 .framer-puce0i { flex-direction: column; } .framer-KCvs0 .framer-iretjr { order: 1; padding: 45px 20px 45px 20px; } .framer-KCvs0 .framer-1jzkti7 { gap: 50px; max-width: 600px; width: 363px; } .framer-KCvs0 .framer-1iyspu3, .framer-KCvs0 .framer-kxpc9e, .framer-KCvs0 .framer-fwjxj6 { flex-direction: column; gap: 50px; } .framer-KCvs0 .framer-o0sa9m, .framer-KCvs0 .framer-ugfmgs-container, .framer-KCvs0 .framer-w54owf-container, .framer-KCvs0 .framer-3cf4im-container, .framer-KCvs0 .framer-4nzxx3-container, .framer-KCvs0 .framer-1aooavw-container, .framer-KCvs0 .framer-1p0v9yn-container, .framer-KCvs0 .framer-vn6h1o-container { flex: none; width: 100%; } .framer-KCvs0 .framer-1gr4y5g { flex: none; height: 400px; width: 100%; } .framer-KCvs0 .framer-3xanzb { order: 2; } .framer-KCvs0 .framer-1jlivyn-container { order: 0; } .framer-KCvs0 .framer-gdf7y1 { order: 3; padding: 0px 20px 4px 20px; } .framer-KCvs0 .framer-o0msdg, .framer-KCvs0 .framer-3rhwpr, .framer-KCvs0 .framer-1mi83g2, .framer-KCvs0 .framer-1jnepb7 { gap: 50px; max-width: 600px; } .framer-KCvs0 .framer-16wk279 { order: 4; padding: 25px 20px 100px 20px; } .framer-KCvs0 .framer-1839nel { height: 450px; } .framer-KCvs0 .framer-a262oe { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; justify-content: flex-start; } .framer-KCvs0 .framer-1gck73n { align-self: unset; flex-direction: column; height: min-content; } .framer-KCvs0 .framer-we7bvh { order: 5; padding: 0px 20px 100px 20px; } .framer-KCvs0 .framer-15ba7v7 { order: 6; padding: 25px 20px 100px 20px; }}",
  ],
  Gt = ge(ji, Ai, "framer-KCvs0"),
  Dl = Gt;
Gt.displayName = "Page";
Gt.defaultProps = { height: 8487, width: 1200 };
xe(
  Gt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...li,
    ...ci,
    ...fi,
    ...di,
    ...mi,
    ...ui,
    ...hi,
    ...gi,
    ...yi,
    ...X(tn),
    ...X(Rt),
    ...X(Et),
    ...X(an),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var kl = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerYRMRDNPuz",
      slots: [],
      annotations: {
        framerIntrinsicHeight: "8487",
        framerContractVersion: "1",
        framerAcceptsLayoutTemplate: "true",
        framerAutoSizeImages: "true",
        framerDisplayContentsDiv: "false",
        framerScrollSections:
          '{"Bv9wdXPdR":{"pattern":":Bv9wdXPdR","name":"hero"},"xJN2mZXcm":{"pattern":":xJN2mZXcm","name":"benefits"},"wP830aGSA":{"pattern":":wP830aGSA","name":"gallery"},"wpN7nZHkO":{"pattern":":wpN7nZHkO","name":"why-choose-us"},"nXSzhqWRq":{"pattern":":nXSzhqWRq","name":"services"},"FGUEmH9P2":{"pattern":":FGUEmH9P2","name":"testimonials"},"NT7YHkrER":{"pattern":":NT7YHkrER","name":"pricing"}}',
        framerIntrinsicWidth: "1200",
        framerColorSyntax: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"gai0wjojf":{"layout":["fixed","auto"]},"ynD0yq589":{"layout":["fixed","auto"]}}}',
        framerResponsiveScreen: "",
        framerComponentViewportWidth: "true",
        framerImmutableVariables: "true",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { kl as __FramerMetadata__, Dl as default };
//# sourceMappingURL=weQGaoI0xYIWKpepnXTagwU4x37esp5UFjossGEMH1E.7BOLIIBT.mjs.map
