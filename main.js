import {a as fe, b as pe, c as he} from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-U654ZQRN.mjs";
import {a as ye} from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-4PLI5XDM.mjs";
import {a as ue} from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-Y4RV7FRP.mjs";
import {a as mt, b as ft, c as pt} from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-KAWT63UV.mjs";
import "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-42U43NKG.mjs";
import {A as Ie, B as Ze, C as Q, D as Xe, F as q, G as Ke, H as $e, I as w, J as et, L as A, M as ke, O as tt, S as re, T as rt, U as Y, V as g, W as ae, X as T, Y as at, Z as ot, b as P, ba as nt, c as V, ca as C, d as i, ea as it, ia as st, j as ze, ja as ct, k as We, ka as dt, l as _e, m as y, n as He, na as Z, o as Oe, qa as me, r as Me, ra as G, s as Je, t as N, u as Qe, ua as U, v as qe, va as z, wa as D, x as Ye, xa as oe, y as Ce, ya as lt} from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-3GPPV2JX.mjs";
import {A as _, d as b, e as je, h as R, i as B, k as Be, l as Ee, m as Re, n as Ve, o as M, p as Ae, q as E, t as J, v as k, w as Ge, z as e} from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-5F744S32.mjs";
import "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-HZL4YIMB.mjs";
import {b as W, c as m} from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-A3IIQ6X3.mjs";
var Lt = "default"in _e ? ze : _e
  , ge = {}
  , ht = Lt;
ge.createRoot = ht.createRoot;
ge.hydrateRoot = ht.hydrateRoot;
var Ne = ge.createRoot
  , ut = ge.hydrateRoot;
var Dt = D(ue)
  , St = tt(re(i.nav))
  , jt = re(i.header)
  , Bt = ["mhccxAjh7", "KucBey5jS", "n8U2N_bw8", "GPC2iTHiT"]
  , Et = "framer-swoQ2"
  , Vt = {
    GPC2iTHiT: "framer-v-1hcftmc",
    KucBey5jS: "framer-v-e972vi",
    mhccxAjh7: "framer-v-fcezbk",
    n8U2N_bw8: "framer-v-1s6ubd7"
};
function L(r, ...o) {
    let n = {};
    return o?.forEach(t => t && Object.assign(n, r[t])),
    n
}
var At = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0
}
  , yt = {
    delay: 0,
    duration: .8,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , Gt = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: yt,
    x: 0,
    y: 0
}
  , zt = {
    damping: 60,
    delay: 0,
    mass: 1,
    stiffness: 500,
    type: "spring"
}
  , Wt = {
    bounce: .2,
    delay: 0,
    duration: .4,
    type: "spring"
}
  , Ht = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Wt,
    x: 0,
    y: 0
}
  , Ot = {
    opacity: .001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0
}
  , Mt = {
    bounce: .25,
    delay: 0,
    duration: .45,
    type: "spring"
}
  , ie = {
    opacity: .5,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Mt
}
  , Jt = ({value: r, children: o}) => {
    let n = M(P)
      , t = r ?? n.transition
      , d = J( () => ({
        ...n,
        transition: t
    }), [JSON.stringify(t)]);
    return e(P.Provider, {
        value: d,
        children: o
    })
}
  , Qt = i.create(b)
  , qt = {
    "Phone: Open": "GPC2iTHiT",
    Desktop: "mhccxAjh7",
    Phone: "n8U2N_bw8",
    Tablet: "KucBey5jS"
}
  , Yt = ({height: r, id: o, width: n, ...t}) => ({
    ...t,
    variant: qt[t.variant] ?? t.variant ?? "mhccxAjh7"
})
  , Zt = (r, o) => r.layoutDependency ? o.join("-") + r.layoutDependency : o.join("-")
  , Xt = B(function(r, o) {
    let n = k(null)
      , t = o ?? n
      , d = E()
      , {activeLocale: p, setLocale: u} = N()
      , a = Y()
      , {style: x, className: l, layoutId: v, variant: F, ...I} = Yt(r)
      , {baseVariant: s, classNames: S, clearLoadingGesture: ee, gestureHandlers: h, gestureVariant: f, isLoading: ve, setGestureState: Se, setVariant: le, variants: H} = Z({
        cycleOrder: Bt,
        defaultVariant: "mhccxAjh7",
        ref: t,
        variant: F,
        variantClassNames: Vt
    })
      , c = Zt(r, H)
      , {activeVariantCallback: O, delay: te} = st(s)
      , j = O(async (...Tt) => {
        le("n8U2N_bw8")
    }
    )
      , Fe = O(async (...Tt) => {
        le("GPC2iTHiT")
    }
    )
      , _t = w(Et, ...[he, pt])
      , Ct = () => !!["n8U2N_bw8", "GPC2iTHiT"].includes(s)
      , It = () => s !== "n8U2N_bw8"
      , kt = () => s === "GPC2iTHiT"
      , Nt = () => !["n8U2N_bw8", "GPC2iTHiT"].includes(s);
    return e(V, {
        id: v ?? d,
        children: e(Qt, {
            animate: H,
            initial: !1,
            children: e(Jt, {
                value: zt,
                children: e(jt, {
                    ...I,
                    ...h,
                    __framer__animate: {
                        transition: yt
                    },
                    __framer__animateOnce: !0,
                    __framer__enter: At,
                    __framer__exit: Gt,
                    __framer__styleAppearEffectEnabled: !0,
                    __framer__threshold: 0,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: w(_t, "framer-fcezbk", l, S),
                    "data-framer-name": "Desktop",
                    layoutDependency: c,
                    layoutId: "mhccxAjh7",
                    ref: t,
                    style: {
                        ...x
                    },
                    ...L({
                        GPC2iTHiT: {
                            "data-framer-name": "Phone: Open"
                        },
                        KucBey5jS: {
                            "data-framer-name": "Tablet"
                        },
                        n8U2N_bw8: {
                            "data-framer-name": "Phone"
                        }
                    }, s, f),
                    children: e(i.div, {
                        className: "framer-15wmymh",
                        "data-framer-name": "Container",
                        layoutDependency: c,
                        layoutId: "JvMkphIHa",
                        children: _(i.div, {
                            className: "framer-fzi6qf",
                            "data-border": !0,
                            "data-framer-name": "Box",
                            layoutDependency: c,
                            layoutId: "bGINWrXnO",
                            style: {
                                "--border-bottom-width": "1px",
                                "--border-color": "var(--token-3c8398c6-894e-4918-ace6-437d6e9600f0, rgba(38, 38, 38, 0.5))",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backdropFilter: "blur(20px)",
                                backgroundColor: "var(--token-5bc48278-14a8-4953-b980-6953d047ffcd, rgb(17, 17, 17))",
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                boxShadow: "0px 0.3010936508871964px 1.0237184130164678px -0.6666666666666666px rgba(0, 0, 0, 0.05), 0px 1.1442666516217286px 3.890506615513877px -1.3333333333333333px rgba(0, 0, 0, 0.05), 0px 5px 17px -2px rgba(0, 0, 0, 0.07)",
                                WebkitBackdropFilter: "blur(20px)"
                            },
                            variants: {
                                GPC2iTHiT: {
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10
                                },
                                n8U2N_bw8: {
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10
                                }
                            },
                            children: [e(C, {
                                href: {
                                    webPageId: "YRMRDNPuz"
                                },
                                motionChild: !0,
                                nodeId: "EFUn1SAS6",
                                scopeId: "vjF7Ur2KS",
                                children: e(me, {
                                    as: "a",
                                    background: {
                                        alt: "Designfast Logo",
                                        fit: "fill",
                                        intrinsicHeight: 36,
                                        intrinsicWidth: 170,
                                        loading: U((a?.y || 0) + 30 + (((a?.height || 142) - 60 - 82) / 2 + 0 + 0) + 0 + 0 + 25),
                                        pixelHeight: 100,
                                        pixelWidth: 432,
                                        src: "https://framerusercontent.com/images/B3FJ5BBWhsGmSOUVwPewj0TpWo.svg"
                                    },
                                    className: "framer-dxyxwo framer-1l4u80b",
                                    "data-framer-name": "Designfast-logo",
                                    layoutDependency: c,
                                    layoutId: "EFUn1SAS6",
                                    ...L({
                                        GPC2iTHiT: {
                                            "data-highlight": !0,
                                            background: {
                                                alt: "Designfast Logo",
                                                fit: "fill",
                                                intrinsicHeight: 36,
                                                intrinsicWidth: 170,
                                                loading: U((a?.y || 0) + 20 + (((a?.height || 97) - 40 - 57) / 2 + 0 + 0) + 0 + 0 + 16),
                                                pixelHeight: 100,
                                                pixelWidth: 432,
                                                src: "https://framerusercontent.com/images/B3FJ5BBWhsGmSOUVwPewj0TpWo.svg"
                                            },
                                            onTap: j
                                        },
                                        KucBey5jS: {
                                            background: {
                                                alt: "Designfast Logo",
                                                fit: "fill",
                                                intrinsicHeight: 36,
                                                intrinsicWidth: 170,
                                                loading: U((a?.y || 0) + 30 + (((a?.height || 142) - 60 - 82) / 2 + 0 + 0) + 0 + 0 + 28.5),
                                                pixelHeight: 100,
                                                pixelWidth: 432,
                                                src: "https://framerusercontent.com/images/B3FJ5BBWhsGmSOUVwPewj0TpWo.svg"
                                            }
                                        },
                                        n8U2N_bw8: {
                                            background: {
                                                alt: "Designfast Logo",
                                                fit: "fill",
                                                intrinsicHeight: 36,
                                                intrinsicWidth: 170,
                                                loading: U((a?.y || 0) + 20 + (((a?.height || 97) - 40 - 57) / 2 + 0 + 0) + 0 + 0 + 16),
                                                pixelHeight: 100,
                                                pixelWidth: 432,
                                                src: "https://framerusercontent.com/images/B3FJ5BBWhsGmSOUVwPewj0TpWo.svg"
                                            }
                                        }
                                    }, s, f)
                                })
                            }), Ct() && _(i.div, {
                                className: "framer-e5ehj1",
                                "data-framer-name": "Phone Nav Icon",
                                layoutDependency: c,
                                layoutId: "JaaoxOolF",
                                ...L({
                                    GPC2iTHiT: {
                                        "data-highlight": !0,
                                        onTap: j
                                    },
                                    n8U2N_bw8: {
                                        "data-highlight": !0,
                                        onTap: Fe
                                    }
                                }, s, f),
                                children: [e(i.div, {
                                    className: "framer-12bfuim",
                                    "data-framer-name": "Bottom",
                                    layoutDependency: c,
                                    layoutId: "kfTfJd__a",
                                    style: {
                                        backgroundColor: "var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255))",
                                        rotate: 0
                                    },
                                    variants: {
                                        GPC2iTHiT: {
                                            rotate: -45
                                        }
                                    }
                                }), e(i.div, {
                                    className: "framer-1ozstlz",
                                    "data-framer-name": "Top",
                                    layoutDependency: c,
                                    layoutId: "Ks9qrk824",
                                    style: {
                                        backgroundColor: "var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255))",
                                        rotate: 0
                                    },
                                    variants: {
                                        GPC2iTHiT: {
                                            rotate: 45
                                        }
                                    }
                                })]
                            }), It() && _(St, {
                                className: "framer-mxp8p6",
                                "data-framer-appear-id": "mxp8p6",
                                "data-framer-name": "Links",
                                layoutDependency: c,
                                layoutId: "S62G8E0AB",
                                style: {
                                    "--border-bottom-width": "0px",
                                    "--border-color": "rgba(0, 0, 0, 0)",
                                    "--border-left-width": "0px",
                                    "--border-right-width": "0px",
                                    "--border-style": "solid",
                                    "--border-top-width": "0px",
                                    backgroundColor: "rgba(0, 0, 0, 0)",
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0,
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 0
                                },
                                variants: {
                                    GPC2iTHiT: {
                                        "--border-bottom-width": "1px",
                                        "--border-color": "var(--token-3c8398c6-894e-4918-ace6-437d6e9600f0, rgba(255, 255, 255, 0.1))",
                                        "--border-left-width": "1px",
                                        "--border-right-width": "1px",
                                        "--border-style": "solid",
                                        "--border-top-width": "1px",
                                        backgroundColor: "var(--token-5bc48278-14a8-4953-b980-6953d047ffcd, rgb(17, 17, 17))",
                                        borderBottomLeftRadius: 10,
                                        borderBottomRightRadius: 10,
                                        borderTopLeftRadius: 10,
                                        borderTopRightRadius: 10
                                    }
                                },
                                ...L({
                                    GPC2iTHiT: {
                                        __perspectiveFX: !1,
                                        __smartComponentFX: !0,
                                        __targetOpacity: 1,
                                        "data-border": !0,
                                        animate: Ht,
                                        initial: Ot,
                                        optimized: !0
                                    }
                                }, s, f),
                                children: [e(G, {
                                    __fromCanvasComponent: !0,
                                    children: e(b, {
                                        children: e(i.p, {
                                            className: "framer-styles-preset-1bxrctr",
                                            "data-styles-preset": "IUIZL68H9",
                                            style: {
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255)))"
                                            },
                                            children: e(C, {
                                                href: {
                                                    webPageId: "YRMRDNPuz"
                                                },
                                                motionChild: !0,
                                                nodeId: "SdrfdVNsa",
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: "vjF7Ur2KS",
                                                smoothScroll: !1,
                                                children: e(i.a, {
                                                    className: "framer-styles-preset-1ysybhb",
                                                    "data-styles-preset": "FoAA9VRJg",
                                                    children: "In\xEDcio"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-12afj0v",
                                    fonts: ["Inter"],
                                    layoutDependency: c,
                                    layoutId: "SdrfdVNsa",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255))"
                                    },
                                    verticalAlignment: "top",
                                    whileHover: ie,
                                    withExternalLayout: !0,
                                    ...L({
                                        GPC2iTHiT: {
                                            "data-highlight": !0,
                                            onTap: j
                                        }
                                    }, s, f)
                                }), e(G, {
                                    __fromCanvasComponent: !0,
                                    children: e(b, {
                                        children: e(i.p, {
                                            className: "framer-styles-preset-1bxrctr",
                                            "data-styles-preset": "IUIZL68H9",
                                            style: {
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255)))"
                                            },
                                            children: e(C, {
                                                href: {
                                                    hash: ":xJN2mZXcm",
                                                    webPageId: "YRMRDNPuz"
                                                },
                                                motionChild: !0,
                                                nodeId: "DnP7DycL6",
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: "vjF7Ur2KS",
                                                smoothScroll: !1,
                                                children: e(i.a, {
                                                    className: "framer-styles-preset-1ysybhb",
                                                    "data-styles-preset": "FoAA9VRJg",
                                                    children: "Sobre mim"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-18kz2vn",
                                    fonts: ["Inter"],
                                    layoutDependency: c,
                                    layoutId: "DnP7DycL6",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255))"
                                    },
                                    verticalAlignment: "top",
                                    whileHover: ie,
                                    withExternalLayout: !0,
                                    ...L({
                                        GPC2iTHiT: {
                                            "data-highlight": !0,
                                            onTap: j
                                        }
                                    }, s, f)
                                }), e(G, {
                                    __fromCanvasComponent: !0,
                                    children: e(b, {
                                        children: e(i.p, {
                                            className: "framer-styles-preset-1bxrctr",
                                            "data-styles-preset": "IUIZL68H9",
                                            style: {
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255)))"
                                            },
                                            children: e(C, {
                                                href: {
                                                    hash: ":wP830aGSA",
                                                    webPageId: "YRMRDNPuz"
                                                },
                                                motionChild: !0,
                                                nodeId: "trx3m2TV3",
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: "vjF7Ur2KS",
                                                smoothScroll: !1,
                                                children: e(i.a, {
                                                    className: "framer-styles-preset-1ysybhb",
                                                    "data-styles-preset": "FoAA9VRJg",
                                                    children: "Projetos"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-ocdf9r",
                                    fonts: ["Inter"],
                                    layoutDependency: c,
                                    layoutId: "trx3m2TV3",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255))"
                                    },
                                    verticalAlignment: "top",
                                    whileHover: ie,
                                    withExternalLayout: !0,
                                    ...L({
                                        GPC2iTHiT: {
                                            "data-highlight": !0,
                                            onTap: j
                                        }
                                    }, s, f)
                                }), e(G, {
                                    __fromCanvasComponent: !0,
                                    children: e(b, {
                                        children: e(i.p, {
                                            className: "framer-styles-preset-1bxrctr",
                                            "data-styles-preset": "IUIZL68H9",
                                            style: {
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255)))"
                                            },
                                            children: e(C, {
                                                href: {
                                                    hash: ":nXSzhqWRq",
                                                    webPageId: "YRMRDNPuz"
                                                },
                                                motionChild: !0,
                                                nodeId: "ZdZJESNjr",
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: "vjF7Ur2KS",
                                                smoothScroll: !0,
                                                children: e(i.a, {
                                                    className: "framer-styles-preset-1ysybhb",
                                                    "data-styles-preset": "FoAA9VRJg",
                                                    children: "Viv\xEAncias"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-1fl5ujf",
                                    fonts: ["Inter"],
                                    layoutDependency: c,
                                    layoutId: "ZdZJESNjr",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255))"
                                    },
                                    verticalAlignment: "top",
                                    whileHover: ie,
                                    withExternalLayout: !0,
                                    ...L({
                                        GPC2iTHiT: {
                                            "data-highlight": !0,
                                            onTap: j
                                        }
                                    }, s, f)
                                }), e(G, {
                                    __fromCanvasComponent: !0,
                                    children: e(b, {
                                        children: e(i.p, {
                                            className: "framer-styles-preset-1bxrctr",
                                            "data-styles-preset": "IUIZL68H9",
                                            style: {
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255)))"
                                            },
                                            children: e(C, {
                                                href: {
                                                    hash: ":NT7YHkrER",
                                                    webPageId: "YRMRDNPuz"
                                                },
                                                motionChild: !0,
                                                nodeId: "YL0IxHU60",
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: "vjF7Ur2KS",
                                                smoothScroll: !1,
                                                children: e(i.a, {
                                                    className: "framer-styles-preset-1ysybhb",
                                                    "data-styles-preset": "FoAA9VRJg",
                                                    children: "Habilidades"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-1hc6fq1",
                                    fonts: ["Inter"],
                                    layoutDependency: c,
                                    layoutId: "YL0IxHU60",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255))"
                                    },
                                    verticalAlignment: "top",
                                    whileHover: ie,
                                    withExternalLayout: !0,
                                    ...L({
                                        GPC2iTHiT: {
                                            "data-highlight": !0,
                                            onTap: j
                                        }
                                    }, s, f)
                                }), kt() && e(g, {
                                    ...L({
                                        GPC2iTHiT: {
                                            height: 52,
                                            y: (a?.y || 0) + 20 + (((a?.height || 97) - 40 - 57) / 2 + 0 + 0) + 0 + 0 + 70 + 50 + 294
                                        }
                                    }, s, f),
                                    children: e(T, {
                                        className: "framer-fnr3sj-container",
                                        "data-framer-name": "Contact",
                                        layoutDependency: c,
                                        layoutId: "gJzCG1xvg-container",
                                        name: "Contact",
                                        nodeId: "gJzCG1xvg",
                                        rendersWithMotion: !0,
                                        scopeId: "vjF7Ur2KS",
                                        children: e(ue, {
                                            cO5PVor7Z: "Curr\xEDculo CV",
                                            height: "100%",
                                            id: "gJzCG1xvg",
                                            layoutId: "gJzCG1xvg",
                                            name: "Contact",
                                            variant: "P8pbJIsXC",
                                            width: "100%"
                                        })
                                    })
                                })]
                            }), Nt() && e(g, {
                                height: 52,
                                y: (a?.y || 0) + 30 + (((a?.height || 142) - 60 - 82) / 2 + 0 + 0) + 0 + 0 + 15,
                                children: e(T, {
                                    className: "framer-1brru4f-container",
                                    "data-framer-name": "Contact",
                                    layoutDependency: c,
                                    layoutId: "cktqV1Sxk-container",
                                    name: "Contact",
                                    nodeId: "cktqV1Sxk",
                                    rendersWithMotion: !0,
                                    scopeId: "vjF7Ur2KS",
                                    children: e(ue, {
                                        cO5PVor7Z: "Curr\xEDculo CV",
                                        height: "100%",
                                        id: "cktqV1Sxk",
                                        layoutId: "cktqV1Sxk",
                                        name: "Contact",
                                        variant: "P8pbJIsXC",
                                        width: "100%"
                                    })
                                })
                            })]
                        })
                    })
                })
            })
        })
    })
})
  , Kt = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-swoQ2.framer-1l4u80b, .framer-swoQ2 .framer-1l4u80b { display: block; }", ".framer-swoQ2.framer-fcezbk { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 30px; position: relative; width: 1200px; }", ".framer-swoQ2 .framer-15wmymh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-swoQ2 .framer-fzi6qf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 15px 15px 15px 30px; position: relative; width: 100%; }", ".framer-swoQ2 .framer-dxyxwo { aspect-ratio: 4.722222222222222 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: visible; position: relative; text-decoration: none; width: 151px; }", ".framer-swoQ2 .framer-e5ehj1 { flex: none; height: 27px; overflow: hidden; position: relative; width: 18px; }", ".framer-swoQ2 .framer-12bfuim { flex: none; height: 2px; overflow: hidden; position: absolute; right: 0px; top: calc(62.96296296296299% - 2px / 2); width: 18px; }", ".framer-swoQ2 .framer-1ozstlz { flex: none; height: 2px; overflow: hidden; position: absolute; right: 0px; top: calc(37.03703703703706% - 2px / 2); width: 13px; }", ".framer-swoQ2 .framer-mxp8p6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-swoQ2 .framer-12afj0v, .framer-swoQ2 .framer-18kz2vn, .framer-swoQ2 .framer-ocdf9r, .framer-swoQ2 .framer-1fl5ujf, .framer-swoQ2 .framer-1hc6fq1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }", ".framer-swoQ2 .framer-fnr3sj-container, .framer-swoQ2 .framer-1brru4f-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-swoQ2.framer-v-e972vi.framer-fcezbk { width: 810px; }", ".framer-swoQ2.framer-v-e972vi .framer-15wmymh { max-width: 850px; }", ".framer-swoQ2.framer-v-e972vi .framer-fzi6qf, .framer-swoQ2.framer-v-1s6ubd7 .framer-fzi6qf, .framer-swoQ2.framer-v-1hcftmc .framer-fzi6qf { padding: 15px 15px 15px 20px; }", ".framer-swoQ2.framer-v-e972vi .framer-dxyxwo, .framer-swoQ2.framer-v-1s6ubd7 .framer-dxyxwo { height: var(--framer-aspect-ratio-supported, 25px); width: 118px; }", ".framer-swoQ2.framer-v-e972vi .framer-mxp8p6 { gap: 20px; }", ".framer-swoQ2.framer-v-1s6ubd7.framer-fcezbk, .framer-swoQ2.framer-v-1hcftmc.framer-fcezbk { padding: 20px; width: 390px; }", ".framer-swoQ2.framer-v-1s6ubd7 .framer-15wmymh, .framer-swoQ2.framer-v-1hcftmc .framer-15wmymh { max-width: 600px; }", ".framer-swoQ2.framer-v-1s6ubd7 .framer-e5ehj1, .framer-swoQ2.framer-v-1hcftmc .framer-e5ehj1 { cursor: pointer; }", ".framer-swoQ2.framer-v-1hcftmc .framer-dxyxwo { cursor: pointer; height: var(--framer-aspect-ratio-supported, 25px); width: 118px; }", ".framer-swoQ2.framer-v-1hcftmc .framer-12bfuim { top: calc(55.55555555555558% - 2px / 2); }", ".framer-swoQ2.framer-v-1hcftmc .framer-1ozstlz { top: calc(55.55555555555558% - 2px / 2); width: 18px; }", ".framer-swoQ2.framer-v-1hcftmc .framer-mxp8p6 { flex-direction: column; gap: 30px; left: 0px; padding: 50px; position: absolute; right: 0px; top: 70px; width: unset; z-index: 10; }", ".framer-swoQ2.framer-v-1hcftmc .framer-12afj0v { cursor: pointer; order: 0; }", ".framer-swoQ2.framer-v-1hcftmc .framer-18kz2vn { cursor: pointer; order: 2; }", ".framer-swoQ2.framer-v-1hcftmc .framer-ocdf9r { cursor: pointer; order: 1; }", ".framer-swoQ2.framer-v-1hcftmc .framer-1fl5ujf { cursor: pointer; order: 3; }", ".framer-swoQ2.framer-v-1hcftmc .framer-1hc6fq1 { cursor: pointer; order: 4; }", ".framer-swoQ2.framer-v-1hcftmc .framer-fnr3sj-container { order: 5; }", ...pe, ...ft, '.framer-swoQ2[data-border="true"]::after, .framer-swoQ2 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
  , se = A(Xt, Kt, "framer-swoQ2")
  , Te = se;
se.displayName = "Header";
se.defaultProps = {
    height: 142,
    width: 1200
};
q(se, {
    variant: {
        options: ["mhccxAjh7", "KucBey5jS", "n8U2N_bw8", "GPC2iTHiT"],
        optionTitles: ["Desktop", "Tablet", "Phone", "Phone: Open"],
        title: "Variant",
        type: Q.Enum
    }
});
z(se, [{
    explicitInter: !0,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
        weight: "400"
    }]
}, ...Dt, ...oe(fe), ...oe(mt)], {
    supportsExplicitInterCodegen: !0
});
var $t = D(ye)
  , gt = Ke(ye)
  , er = "framer-GlTLx"
  , tr = {
    WLPj3DArl: "framer-v-ml2wmh"
};
var rr = {
    bounce: .2,
    delay: 0,
    duration: .4,
    type: "spring"
}
  , ar = ({value: r, children: o}) => {
    let n = M(P)
      , t = r ?? n.transition
      , d = J( () => ({
        ...n,
        transition: t
    }), [JSON.stringify(t)]);
    return e(P.Provider, {
        value: d,
        children: o
    })
}
  , or = i.create(b)
  , nr = ({height: r, icon: o, id: n, link: t, width: d, ...p}) => ({
    ...p,
    F_RbgehG4: o ?? p.F_RbgehG4 ?? "XLogo",
    WmPjYLEK9: t ?? p.WmPjYLEK9
})
  , ir = (r, o) => r.layoutDependency ? o.join("-") + r.layoutDependency : o.join("-")
  , sr = B(function(r, o) {
    let n = k(null)
      , t = o ?? n
      , d = E()
      , {activeLocale: p, setLocale: u} = N()
      , a = Y()
      , {style: x, className: l, layoutId: v, variant: F, F_RbgehG4: I, WmPjYLEK9: s, ...S} = nr(r)
      , {baseVariant: ee, classNames: h, clearLoadingGesture: f, gestureHandlers: ve, gestureVariant: Se, isLoading: le, setGestureState: H, setVariant: c, variants: O} = Z({
        defaultVariant: "WLPj3DArl",
        ref: t,
        variant: F,
        variantClassNames: tr
    })
      , te = ir(r, O)
      , Fe = w(er, ...[]);
    return e(V, {
        id: v ?? d,
        children: e(or, {
            animate: O,
            initial: !1,
            children: e(ar, {
                value: rr,
                children: e(C, {
                    href: s,
                    motionChild: !0,
                    nodeId: "WLPj3DArl",
                    scopeId: "EvwZiEMUD",
                    children: e(i.a, {
                        ...S,
                        ...ve,
                        className: `${w(Fe, "framer-ml2wmh", l, h)} framer-5q6ht1`,
                        "data-border": !0,
                        "data-framer-name": "Desktop",
                        layoutDependency: te,
                        layoutId: "WLPj3DArl",
                        ref: t,
                        style: {
                            "--border-bottom-width": "1px",
                            "--border-color": "var(--token-3c8398c6-894e-4918-ace6-437d6e9600f0, rgba(255, 255, 255, 0.1))",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "var(--token-5bc48278-14a8-4953-b980-6953d047ffcd, rgb(17, 17, 17))",
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5,
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                            ...x
                        },
                        children: e(g, {
                            children: e(T, {
                                className: "framer-1quwp7r-container",
                                "data-framer-name": "Icon",
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                layoutDependency: te,
                                layoutId: "B8Pb68ZGt-container",
                                name: "Icon",
                                nodeId: "B8Pb68ZGt",
                                rendersWithMotion: !0,
                                scopeId: "EvwZiEMUD",
                                children: e(ye, {
                                    color: "var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255))",
                                    height: "100%",
                                    iconSearch: "House",
                                    iconSelection: I,
                                    id: "B8Pb68ZGt",
                                    layoutId: "B8Pb68ZGt",
                                    mirrored: !1,
                                    name: "Icon",
                                    selectByList: !0,
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    weight: "regular",
                                    width: "100%"
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
  , cr = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-GlTLx.framer-5q6ht1, .framer-GlTLx .framer-5q6ht1 { display: block; }", ".framer-GlTLx.framer-ml2wmh { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 10px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-GlTLx .framer-1quwp7r-container { flex: none; height: 20px; position: relative; width: 20px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-GlTLx.framer-ml2wmh { gap: 0px; } .framer-GlTLx.framer-ml2wmh > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-GlTLx.framer-ml2wmh > :first-child { margin-top: 0px; } .framer-GlTLx.framer-ml2wmh > :last-child { margin-bottom: 0px; } }", '.framer-GlTLx[data-border="true"]::after, .framer-GlTLx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
  , ce = A(sr, cr, "framer-GlTLx")
  , X = ce;
ce.displayName = "Social Icon";
ce.defaultProps = {
    height: 40,
    width: 40
};
q(ce, {
    F_RbgehG4: gt?.iconSelection && {
        ...gt.iconSelection,
        defaultValue: "XLogo",
        description: void 0,
        hidden: void 0,
        title: "Icon"
    },
    WmPjYLEK9: {
        title: "Link",
        type: Q.Link
    }
});
z(ce, [{
    explicitInter: !0,
    fonts: []
}, ...$t], {
    supportsExplicitInterCodegen: !0
});
var dr = D(X)
  , lr = re(i.footer)
  , mr = ["LWt03mMwT", "bf0eFeJ1G", "DsN8w9WBb"]
  , fr = "framer-bRLNk"
  , pr = {
    bf0eFeJ1G: "framer-v-57zyg0",
    DsN8w9WBb: "framer-v-5aktjl",
    LWt03mMwT: "framer-v-1564x9i"
};
function K(r, ...o) {
    let n = {};
    return o?.forEach(t => t && Object.assign(n, r[t])),
    n
}
var hr = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0
}
  , bt = {
    delay: .2,
    duration: .8,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , ur = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: bt,
    x: 0,
    y: 0
}
  , yr = {
    bounce: .2,
    delay: 0,
    duration: .4,
    type: "spring"
}
  , gr = ({value: r, children: o}) => {
    let n = M(P)
      , t = r ?? n.transition
      , d = J( () => ({
        ...n,
        transition: t
    }), [JSON.stringify(t)]);
    return e(P.Provider, {
        value: d,
        children: o
    })
}
  , br = i.create(b)
  , wr = {
    Desktop: "LWt03mMwT",
    Phone: "DsN8w9WBb",
    Tablet: "bf0eFeJ1G"
}
  , xr = ({height: r, id: o, width: n, ...t}) => ({
    ...t,
    variant: wr[t.variant] ?? t.variant ?? "LWt03mMwT"
})
  , vr = (r, o) => r.layoutDependency ? o.join("-") + r.layoutDependency : o.join("-")
  , Fr = B(function(r, o) {
    let n = k(null)
      , t = o ?? n
      , d = E()
      , {activeLocale: p, setLocale: u} = N()
      , a = Y()
      , {style: x, className: l, layoutId: v, variant: F, ...I} = xr(r)
      , {baseVariant: s, classNames: S, clearLoadingGesture: ee, gestureHandlers: h, gestureVariant: f, isLoading: ve, setGestureState: Se, setVariant: le, variants: H} = Z({
        cycleOrder: mr,
        defaultVariant: "LWt03mMwT",
        ref: t,
        variant: F,
        variantClassNames: pr
    })
      , c = vr(r, H)
      , te = w(fr, ...[he]);
    return e(V, {
        id: v ?? d,
        children: e(br, {
            animate: H,
            initial: !1,
            children: e(gr, {
                value: yr,
                children: e(lr, {
                    ...I,
                    ...h,
                    __framer__animate: {
                        transition: bt
                    },
                    __framer__animateOnce: !0,
                    __framer__enter: hr,
                    __framer__exit: ur,
                    __framer__styleAppearEffectEnabled: !0,
                    __framer__threshold: 0,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: w(te, "framer-1564x9i", l, S),
                    "data-border": !0,
                    "data-framer-name": "Desktop",
                    layoutDependency: c,
                    layoutId: "LWt03mMwT",
                    ref: t,
                    style: {
                        "--border-bottom-width": "0px",
                        "--border-color": "var(--token-3c8398c6-894e-4918-ace6-437d6e9600f0, rgba(255, 255, 255, 0.1))",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        ...x
                    },
                    ...K({
                        bf0eFeJ1G: {
                            "data-framer-name": "Tablet"
                        },
                        DsN8w9WBb: {
                            "data-framer-name": "Phone"
                        }
                    }, s, f),
                    children: e(i.div, {
                        className: "framer-fu8l55",
                        "data-framer-name": "Container",
                        layoutDependency: c,
                        layoutId: "xQJZ4zZVu",
                        children: _(i.div, {
                            className: "framer-1efg3c5",
                            layoutDependency: c,
                            layoutId: "dgNGXhSbt",
                            children: [_(i.div, {
                                className: "framer-hkoqll",
                                "data-framer-name": "Logo",
                                layoutDependency: c,
                                layoutId: "nx5f5elVX",
                                children: [e(C, {
                                    href: {
                                        webPageId: "YRMRDNPuz"
                                    },
                                    motionChild: !0,
                                    nodeId: "ApEl4Ev1N",
                                    scopeId: "w07Ymg6Id",
                                    children: e(me, {
                                        as: "a",
                                        background: {
                                            alt: "Designfast Logo",
                                            fit: "fill",
                                            intrinsicHeight: 36,
                                            intrinsicWidth: 170,
                                            loading: U((a?.y || 0) + 32 + (((a?.height || 203) - 64 - 254) / 2 + 0 + 0) + 0 + 0 + 0 + 19 + 0),
                                            pixelHeight: 100,
                                            pixelWidth: 432,
                                            src: "https://framerusercontent.com/images/B3FJ5BBWhsGmSOUVwPewj0TpWo.svg"
                                        },
                                        className: "framer-juk08n framer-1cvxpcf",
                                        "data-framer-name": "Designfast-logo",
                                        layoutDependency: c,
                                        layoutId: "ApEl4Ev1N",
                                        ...K({
                                            bf0eFeJ1G: {
                                                background: {
                                                    alt: "Designfast Logo",
                                                    fit: "fill",
                                                    intrinsicHeight: 36,
                                                    intrinsicWidth: 170,
                                                    loading: U((a?.y || 0) + 32 + (((a?.height || 239) - 64 - 254) / 2 + 0 + 0) + 0 + 0 + 0 + 19 + 0),
                                                    pixelHeight: 100,
                                                    pixelWidth: 432,
                                                    src: "https://framerusercontent.com/images/B3FJ5BBWhsGmSOUVwPewj0TpWo.svg"
                                                }
                                            },
                                            DsN8w9WBb: {
                                                background: {
                                                    alt: "Designfast Logo",
                                                    fit: "fill",
                                                    intrinsicHeight: 36,
                                                    intrinsicWidth: 170,
                                                    loading: U((a?.y || 0) + 75 + (((a?.height || 329) - 150 - 294) / 2 + 0 + 0) + 0 + 0 + 0 + 0 + 19 + 0),
                                                    pixelHeight: 100,
                                                    pixelWidth: 432,
                                                    src: "https://framerusercontent.com/images/B3FJ5BBWhsGmSOUVwPewj0TpWo.svg"
                                                }
                                            }
                                        }, s, f)
                                    })
                                }), e(G, {
                                    __fromCanvasComponent: !0,
                                    children: e(b, {
                                        children: e(i.p, {
                                            className: "framer-styles-preset-1bxrctr",
                                            "data-styles-preset": "IUIZL68H9",
                                            style: {
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6092e8de-e9de-429e-a8c7-16bd375a7699, rgb(84, 84, 84)))"
                                            },
                                            children: "\xA9 2025. Todos os direitos reservados."
                                        })
                                    }),
                                    className: "framer-dizqqr",
                                    fonts: ["Inter"],
                                    layoutDependency: c,
                                    layoutId: "zJGCb2R54",
                                    style: {
                                        "--extracted-r6o4lv": "var(--token-6092e8de-e9de-429e-a8c7-16bd375a7699, rgb(84, 84, 84))",
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })]
                            }), _(i.div, {
                                className: "framer-ydh9u",
                                "data-framer-name": "Social Icons",
                                layoutDependency: c,
                                layoutId: "pRTNL63K0",
                                children: [e(g, {
                                    height: 40,
                                    y: (a?.y || 0) + 32 + (((a?.height || 203) - 64 - 254) / 2 + 0 + 0) + 0 + 0 + 107 + 0,
                                    ...K({
                                        bf0eFeJ1G: {
                                            y: (a?.y || 0) + 32 + (((a?.height || 239) - 64 - 254) / 2 + 0 + 0) + 0 + 0 + 39.5 + 0 + 0
                                        },
                                        DsN8w9WBb: {
                                            y: (a?.y || 0) + 75 + (((a?.height || 329) - 150 - 294) / 2 + 0 + 0) + 0 + 0 + 0 + 254 + 0
                                        }
                                    }, s, f),
                                    children: e(T, {
                                        className: "framer-sfqdmj-container",
                                        layoutDependency: c,
                                        layoutId: "MTcPty19r-container",
                                        nodeId: "MTcPty19r",
                                        rendersWithMotion: !0,
                                        scopeId: "w07Ymg6Id",
                                        children: e(X, {
                                            F_RbgehG4: "MediumLogo",
                                            height: "100%",
                                            id: "MTcPty19r",
                                            layoutId: "MTcPty19r",
                                            width: "100%",
                                            WmPjYLEK9: "https://medium.com/@jackeline.costa51"
                                        })
                                    })
                                }), e(g, {
                                    height: 40,
                                    y: (a?.y || 0) + 32 + (((a?.height || 203) - 64 - 254) / 2 + 0 + 0) + 0 + 0 + 107 + 0,
                                    ...K({
                                        bf0eFeJ1G: {
                                            y: (a?.y || 0) + 32 + (((a?.height || 239) - 64 - 254) / 2 + 0 + 0) + 0 + 0 + 39.5 + 0 + 45
                                        },
                                        DsN8w9WBb: {
                                            y: (a?.y || 0) + 75 + (((a?.height || 329) - 150 - 294) / 2 + 0 + 0) + 0 + 0 + 0 + 254 + 0
                                        }
                                    }, s, f),
                                    children: e(T, {
                                        className: "framer-16u8aml-container",
                                        layoutDependency: c,
                                        layoutId: "aJtWWjJz2-container",
                                        nodeId: "aJtWWjJz2",
                                        rendersWithMotion: !0,
                                        scopeId: "w07Ymg6Id",
                                        children: e(X, {
                                            F_RbgehG4: "Envelope",
                                            height: "100%",
                                            id: "aJtWWjJz2",
                                            layoutId: "aJtWWjJz2",
                                            width: "100%",
                                            WmPjYLEK9: "mailto:jackeline.costa51@gmail.com"
                                        })
                                    })
                                }), e(g, {
                                    height: 40,
                                    y: (a?.y || 0) + 32 + (((a?.height || 203) - 64 - 254) / 2 + 0 + 0) + 0 + 0 + 107 + 0,
                                    ...K({
                                        bf0eFeJ1G: {
                                            y: (a?.y || 0) + 32 + (((a?.height || 239) - 64 - 254) / 2 + 0 + 0) + 0 + 0 + 39.5 + 0 + 90
                                        },
                                        DsN8w9WBb: {
                                            y: (a?.y || 0) + 75 + (((a?.height || 329) - 150 - 294) / 2 + 0 + 0) + 0 + 0 + 0 + 254 + 0
                                        }
                                    }, s, f),
                                    children: e(T, {
                                        className: "framer-5e5sbp-container",
                                        layoutDependency: c,
                                        layoutId: "znbKONB9C-container",
                                        nodeId: "znbKONB9C",
                                        rendersWithMotion: !0,
                                        scopeId: "w07Ymg6Id",
                                        children: e(X, {
                                            F_RbgehG4: "BehanceLogo",
                                            height: "100%",
                                            id: "znbKONB9C",
                                            layoutId: "znbKONB9C",
                                            width: "100%",
                                            WmPjYLEK9: "https://www.behance.net/jackelineluana"
                                        })
                                    })
                                }), e(g, {
                                    height: 40,
                                    y: (a?.y || 0) + 32 + (((a?.height || 203) - 64 - 254) / 2 + 0 + 0) + 0 + 0 + 107 + 0,
                                    ...K({
                                        bf0eFeJ1G: {
                                            y: (a?.y || 0) + 32 + (((a?.height || 239) - 64 - 254) / 2 + 0 + 0) + 0 + 0 + 39.5 + 0 + 135
                                        },
                                        DsN8w9WBb: {
                                            y: (a?.y || 0) + 75 + (((a?.height || 329) - 150 - 294) / 2 + 0 + 0) + 0 + 0 + 0 + 254 + 0
                                        }
                                    }, s, f),
                                    children: e(T, {
                                        className: "framer-1o5w26a-container",
                                        layoutDependency: c,
                                        layoutId: "VV_vbZenZ-container",
                                        nodeId: "VV_vbZenZ",
                                        rendersWithMotion: !0,
                                        scopeId: "w07Ymg6Id",
                                        children: e(X, {
                                            F_RbgehG4: "LinkedinLogo",
                                            height: "100%",
                                            id: "VV_vbZenZ",
                                            layoutId: "VV_vbZenZ",
                                            width: "100%",
                                            WmPjYLEK9: "https://www.linkedin.com/in/jackeline-costa-1a2308268/"
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                })
            })
        })
    })
})
  , Rr = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-bRLNk.framer-1cvxpcf, .framer-bRLNk .framer-1cvxpcf { display: block; }", ".framer-bRLNk.framer-1564x9i { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 32px 30px 32px 30px; position: relative; width: 1200px; }", ".framer-bRLNk .framer-fu8l55 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-bRLNk .framer-1efg3c5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-bRLNk .framer-hkoqll { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 19px 0px 19px 0px; position: relative; width: 296px; }", ".framer-bRLNk .framer-juk08n { aspect-ratio: 4.722222222222222 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 62px); overflow: visible; position: relative; text-decoration: none; width: 293px; }", ".framer-bRLNk .framer-dizqqr { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-bRLNk .framer-ydh9u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 180px; }", ".framer-bRLNk .framer-sfqdmj-container, .framer-bRLNk .framer-16u8aml-container, .framer-bRLNk .framer-5e5sbp-container, .framer-bRLNk .framer-1o5w26a-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-bRLNk.framer-v-57zyg0.framer-1564x9i { width: 810px; }", ".framer-bRLNk.framer-v-57zyg0 .framer-fu8l55 { max-width: 850px; }", ".framer-bRLNk.framer-v-57zyg0 .framer-hkoqll { width: 305px; }", ".framer-bRLNk.framer-v-57zyg0 .framer-ydh9u { align-content: flex-end; align-items: flex-end; flex-direction: column; }", ".framer-bRLNk.framer-v-5aktjl.framer-1564x9i { padding: 75px 20px 75px 20px; width: 390px; }", ".framer-bRLNk.framer-v-5aktjl .framer-fu8l55 { max-width: 600px; }", ".framer-bRLNk.framer-v-5aktjl .framer-1efg3c5 { flex-direction: column; }", ".framer-bRLNk.framer-v-5aktjl .framer-hkoqll { width: 311px; }", ".framer-bRLNk.framer-v-5aktjl .framer-ydh9u { justify-content: flex-start; }", ...pe, '.framer-bRLNk[data-border="true"]::after, .framer-bRLNk [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
  , de = A(Fr, Rr, "framer-bRLNk")
  , Le = de;
de.displayName = "Footer";
de.defaultProps = {
    height: 203,
    width: 1200
};
q(de, {
    variant: {
        options: ["LWt03mMwT", "bf0eFeJ1G", "DsN8w9WBb"],
        optionTitles: ["Desktop", "Tablet", "Phone"],
        title: "Variant",
        type: Q.Enum
    }
});
z(de, [{
    explicitInter: !0,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
        weight: "400"
    }]
}, ...dr, ...oe(fe)], {
    supportsExplicitInterCodegen: !0
});
var _r = D(Te)
  , Cr = D(Le)
  , Ir = {
    d6iefAT9F: "(min-width: 1200px)",
    gcwdOAbO7: "(min-width: 810px) and (max-width: 1199px)",
    v9CGJR08M: "(max-width: 809px)"
};
var kr = "framer-O9kRe"
  , Nr = {
    d6iefAT9F: "framer-v-dd529j",
    gcwdOAbO7: "framer-v-14qfqz3",
    v9CGJR08M: "framer-v-ln3rja"
}
  , we = {}
  , wt = Object.keys(we)
  , xt = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-O9kRe.framer-zzjyxi, .framer-O9kRe .framer-zzjyxi { display: block; }", ".framer-O9kRe.framer-dd529j { align-content: center; align-items: center; background-color: var(--token-386acb33-32fd-46b6-b159-e9a3c15f8f38, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-O9kRe .framer-q397vq-container { flex: none; height: auto; left: 0px; position: absolute; top: 0px; width: 100%; z-index: 10; }", ".framer-O9kRe .framer-1i79fa5 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }", ".framer-O9kRe .framer-u4oqg7-container { flex: none; height: auto; order: 1002; position: relative; width: 100%; }", '[data-layout-template="true"] > #overlay { margin-bottom: -0px; }']
  , Tr = {
    d6iefAT9F: "(min-width: 1200px)",
    gcwdOAbO7: "(min-width: 810px) and (max-width: 1199px)",
    v9CGJR08M: "(max-width: 809px)"
}
  , Lr = ({value: r}) => nt() ? null : e("style", {
    dangerouslySetInnerHTML: {
        __html: r
    },
    "data-framer-html-style": ""
})
  , Pr = {
    Desktop: "d6iefAT9F",
    Phone: "v9CGJR08M",
    Tablet: "gcwdOAbO7"
}
  , Ur = ({height: r, id: o, width: n, ...t}) => ({
    ...t,
    variant: Pr[t.variant] ?? t.variant ?? "d6iefAT9F"
})
  , Dr = B(function(r, o) {
    let n = k(null)
      , t = o ?? n
      , d = E()
      , {activeLocale: p, setLocale: u} = N()
      , {style: a, className: x, layoutId: l, variant: v, children: F, ...I} = Ur(r)
      , [s,S] = ct(v, Ir, !1)
      , ee = void 0
      , f = w(kr, ...[]);
    return at({}),
    e(et.Provider, {
        value: {
            isLayoutTemplate: !0,
            primaryVariantId: "d6iefAT9F",
            variantClassNames: Nr
        },
        children: _(V, {
            id: l ?? d,
            children: [e(Lr, {
                value: ":root body { background: var(--token-386acb33-32fd-46b6-b159-e9a3c15f8f38, rgb(0, 0, 0)); }"
            }), _(i.div, {
                ...I,
                className: w(f, "framer-dd529j", x),
                "data-layout-template": !0,
                ref: t,
                style: {
                    ...a
                },
                children: [e(g, {
                    height: 142,
                    width: "100vw",
                    y: 0,
                    children: e(ae, {
                        className: "framer-q397vq-container",
                        nodeId: "fw1TRs7r8",
                        scopeId: "MEBSJeLFi",
                        children: e(ke, {
                            breakpoint: s,
                            overrides: {
                                gcwdOAbO7: {
                                    variant: "KucBey5jS"
                                },
                                v9CGJR08M: {
                                    variant: "n8U2N_bw8"
                                }
                            },
                            children: e(Te, {
                                height: "100%",
                                id: "fw1TRs7r8",
                                layoutId: "fw1TRs7r8",
                                style: {
                                    width: "100%"
                                },
                                variant: "mhccxAjh7",
                                width: "100%"
                            })
                        })
                    })
                }), F, e("div", {
                    className: "framer-1i79fa5"
                }), e(g, {
                    height: 348,
                    width: "100vw",
                    y: 1e3,
                    children: e(ae, {
                        className: "framer-u4oqg7-container",
                        nodeId: "vvACWudVd",
                        scopeId: "MEBSJeLFi",
                        children: e(ke, {
                            breakpoint: s,
                            overrides: {
                                gcwdOAbO7: {
                                    variant: "bf0eFeJ1G"
                                },
                                v9CGJR08M: {
                                    variant: "DsN8w9WBb"
                                }
                            },
                            children: e(Le, {
                                height: "100%",
                                id: "vvACWudVd",
                                layoutId: "vvACWudVd",
                                style: {
                                    width: "100%"
                                },
                                variant: "LWt03mMwT",
                                width: "100%"
                            })
                        })
                    })
                })]
            }), e("div", {
                id: "template-overlay"
            })]
        })
    })
})
  , Sr = r => r === Ie.canvas || r === Ie.export ? [...xt, ...wt.flatMap(n => {
    let t = we[n];
    return we[n].map(d => `${t} {${d}}`)
}
)] : [...xt, ...wt.map(n => `@media ${Tr[n]} { ${we[n].join(" ")} }`)]
  , xe = A(Dr, Sr, "framer-O9kRe")
  , vt = xe;
xe.displayName = "Main";
xe.defaultProps = {
    height: 1600,
    width: 1200
};
z(xe, [{
    explicitInter: !0,
    fonts: []
}, ..._r, ...Cr], {
    supportsExplicitInterCodegen: !0
});
var $ = {
    YRMRDNPuz: {
        elements: {
            Bv9wdXPdR: "hero",
            FGUEmH9P2: "testimonials",
            NT7YHkrER: "pricing",
            nXSzhqWRq: "services",
            wP830aGSA: "gallery",
            wpN7nZHkO: "why-choose-us",
            xJN2mZXcm: "benefits"
        },
        page: y( () => import("https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/weQGaoI0xYIWKpepnXTagwU4x37esp5UFjossGEMH1E.7BOLIIBT.mjs")),
        path: "/"
    },
    XO8mqcZA9: {
        elements: {
            NNrqzAvKn: "hero",
            zp9ctSZ9P: "case-studies"
        },
        page: y( () => import("https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/c3qUb8T48SvPGXk3GIpsRwXF-BejIAMe-xcFbnS3yvk.SGCDUPWK.mjs")),
        path: "/case-studies"
    },
    G752yomo0: {
        elements: {
            uNIermDHD: "hero"
        },
        page: y( () => import("./1S_qGeSGDbD_Lg_B9L6j7dNiRL_zmWhSHyHVQmcLLx4.UOWCJU6Q.mjs")),
        path: "/404"
    },
    ujPTyfrW0: {
        elements: {
            aMysLDzCI: "hero",
            nrc2mT5hB: "our-studio",
            pXVa5beSW: "our-team",
            YwRktO7lp: "our-mission"
        },
        page: y( () => import("./aSBvoMalDgfJ2kPmSP4i7lzvZaf-X9xX2UMZCvg0du8.HAM3PATG.mjs")),
        path: "/about-us"
    },
    xIBnPR7GQ: {
        elements: {
            Kk8hqhEMT: "hero",
            RNOWshLpF: "contact-form"
        },
        page: y( () => import("./s9Ywdo2hwpmJmCKiALHKrjautrUCZm2wg3rAvgprGx4.NA7KMWJQ.mjs")),
        path: "/contact"
    },
    oM7rOtzBh: {
        elements: {
            QmC8tpQ9F: "pages",
            rvN7JREl6: "hero"
        },
        page: y( () => import("./r7Yngm5vXKhHQL-DV-MiZPITSmqgrE7nS7zaBYOGkvg.H7O3MAF2.mjs")),
        path: "/legal"
    },
    n0rSazviK: {
        elements: {
            dNjp9V51c: "hero",
            N4A6kij_4: "list"
        },
        page: y( () => import("./2EybSYYBrAOxa6JgxBbBDQnKVqZ0WS1XqGbaPMDToxg.WMZMK622.mjs")),
        path: "/services"
    },
    zcG_ZMAmU: {
        collectionId: "LOH4qa1jU",
        elements: {
            cFtctYsEk: "hero",
            GakKpounF: "content",
            hLWlbK2eX: "call-to-action",
            MJQRCrz2w: "info",
            QHJ9wuUDs: "image"
        },
        page: y( () => import("./8z6lCOosjP4a6g70ySvmSeTKNUZa9o25BlbXQVcBfSs.O2CXTIJ5.mjs")),
        path: "/case-studies/:yZKde_430"
    },
    JEEkFh6Ff: {
        collectionId: "JWH1ve5K2",
        elements: {
            HiMcMX2Vj: "content"
        },
        page: y( () => import("./HpByvp7NHqDQQMNkF2JQDor86iKxZPDkW2kmj_kCDdM.74YV6XYR.mjs")),
        path: "/legal/:uTsuKCnFC"
    },
    fBUEUnN7p: {
        collectionId: "Y5sZttdqc",
        elements: {
            DVni6f0tL: "hero",
            nWweUawHk: "details"
        },
        page: y( () => import("./BHoYIWA2EIxAeR0O5qKPksg2Pg6yna2DhEX_nH_wEE4.YHEODKNB.mjs")),
        path: "/services/:pxSuQ4QZL"
    }
}
  , Pe = [{
    code: "en",
    id: "default",
    name: "English",
    slug: ""
}]
  , Ue = {
    JWH1ve5K2: async () => (await import("./6EwOGdRceh15bm13a-xeTHJZKStejxf8xzAU1ngBz6M.WILDQZYW.mjs"))?.utils,
    LOH4qa1jU: async () => (await import("./o9kkyT4iY9Lm20x6Q0rzY0-cvU8jJLhkwPtJqu1pkDw.UFCPJCKQ.mjs"))?.utils,
    Y5sZttdqc: async () => (await import("./wclo5ZEpCvpwTQsJGrNCUX7oNGps_9IWDTbd7Xwr1Bk.IKOBLGKQ.mjs"))?.utils
}
  , Rt = "88a1a84bcd0db189d5aef35f765ee0433d41f6d23fcb376dc9f6893fab8c77d7";
function jr({routeId: r, children: o, style: n, ...t}) {
    let p = {}[r] ?? {};
    switch (r) {
    case "YRMRDNPuz":
    case "XO8mqcZA9":
    case "G752yomo0":
    case "ujPTyfrW0":
    case "xIBnPR7GQ":
    case "oM7rOtzBh":
    case "n0rSazviK":
    case "zcG_ZMAmU":
    case "JEEkFh6Ff":
    case "fBUEUnN7p":
        return R(vt, {
            ...p,
            key: "Main",
            routeId: r,
            style: n
        }, o(!0));
    default:
        return o(!1)
    }
}
function wa(r) {
    switch (r) {
    case "YRMRDNPuz":
    case "XO8mqcZA9":
    case "G752yomo0":
    case "ujPTyfrW0":
    case "xIBnPR7GQ":
    case "oM7rOtzBh":
    case "n0rSazviK":
    case "zcG_ZMAmU":
    case "JEEkFh6Ff":
    case "fBUEUnN7p":
        return [{
            hash: "dd529j",
            mediaQuery: "(min-width: 1200px)"
        }, {
            hash: "14qfqz3",
            mediaQuery: "(min-width: 810px) and (max-width: 1199px)"
        }, {
            hash: "ln3rja",
            mediaQuery: "(max-width: 809px)"
        }];
    default:
        return
    }
}
async function Br({routeId: r, pathVariables: o, localeId: n}) {
    let t = $[r].page.preload()
      , d = R(it, {
        isWebsite: !0,
        routeId: r,
        pathVariables: o,
        routes: $,
        collectionUtils: Ue,
        framerSiteId: Rt,
        notFoundPage: y( () => import("./1S_qGeSGDbD_Lg_B9L6j7dNiRL_zmWhSHyHVQmcLLx4.UOWCJU6Q.mjs")),
        isReducedMotion: void 0,
        localeId: n,
        locales: Pe,
        preserveQueryParams: void 0,
        siteCanonicalURL: "https://energetic-purpose-504160.framer.app",
        EditorBar: typeof m < "u" ? ( () => {
            if (!/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(W.userAgent))
                return y(async () => {
                    let l = {
                        __version: 1,
                        framer: {
                            useCurrentRoute: Oe,
                            useLocaleInfo: N,
                            useRouter: He
                        },
                        react: {
                            createElement: R,
                            memo: Ee,
                            useCallback: Ve,
                            useEffect: Ae,
                            useRef: k,
                            useState: Ge
                        },
                        "react-dom": {
                            createPortal: We
                        }
                    };
                    m.__framer_editorBarDependencies = l;
                    let {createEditorBar: v} = await import("https://edit.framer.com/init.mjs");
                    return {
                        default: v({
                            dependencies: l
                        })
                    }
                }
                )
        }
        )() : void 0,
        LayoutTemplate: jr
    })
      , p = R($e, {
        children: d,
        value: {
            editorBarDisableFrameAncestorsSecurity: !1,
            editorBarOnPageEditing: !1,
            motionDivToDiv: !1,
            motionDivToDivBackgroundImage: !1,
            pauseOffscreen: !0,
            replaceNestedLinks: !0,
            yieldOnTap: !1
        }
    })
      , u = R(ot, {
        children: p
    })
      , a = R(Je, {
        children: u,
        value: {
            global: {
                enter: {
                    opacity: 0,
                    rotate: 0,
                    rotate3d: !1,
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    transition: {
                        damping: 30,
                        delay: 0,
                        duration: .2,
                        ease: [.27, 0, .51, 1],
                        mass: 1,
                        stiffness: 400,
                        type: "tween"
                    },
                    x: "0px",
                    y: "0px"
                }
            },
            routes: {}
        }
    });
    return await t,
    a
}
var De = typeof document < "u";
if (De) {
    m.__framer_importFromPackage = (o, n) => () => R(Ze, {
        error: 'Package component not supported: "' + n + '" in "' + o + '"'
    }),
    m.process = {
        ...m.process,
        env: {
            ...m.process ? m.process.env : void 0,
            NODE_ENV: "production"
        }
    },
    m.__framer_events = m.__framer_events || [],
    Xe();
    let r = document.getElementById("main");
    "framerHydrateV2"in r.dataset ? Ft(!0, r) : Ft(!1, r)
}
function Er() {
    De && m.__framer_events.push(arguments)
}
async function Ft(r, o) {
    function n(t, d, p=!0) {
        if (t.caught || m.__framer_hadFatalError)
            return;
        let u = d?.componentStack;
        if (p) {
            if (console.warn(),
            Math.random() > .01)
                return
        } else
            console.error();
        Er(p ? "published_site_load_recoverable_error" : "published_site_load_error", {
            message: String(t),
            componentStack: u,
            stack: u ? void 0 : t instanceof Error && typeof t.stack == "string" ? t.stack : null
        })
    }
    try {
        let t, d, p, u;
        if (r) {
            let l = JSON.parse(o.dataset.framerHydrateV2);
            t = l.routeId,
            d = l.localeId,
            p = l.pathVariables,
            u = l.breakpoints,
            t = Ce($, t)
        } else {
            Ce($, void 0);
            let l = Ye($, decodeURIComponent(location.pathname), !0, Pe);
            t = l.routeId,
            d = l.localeId,
            p = l.pathVariables
        }
        let a = Br({
            routeId: t,
            localeId: d,
            pathVariables: p
        });
        typeof m < "u" && (async () => {
            let l = $[t]
              , v = "default"
              , F = Pe.find( ({id: h}) => d ? h === d : h === v).code
              , I = null;
            if (l?.collectionId && Ue) {
                let h = await Ue[l.collectionId]?.()
                  , [f] = Object.values(p);
                h && typeof f == "string" && (I = await h.getRecordIdBySlug(f, F || void 0) ?? null)
            }
            let s = Intl.DateTimeFormat().resolvedOptions()
              , S = s.timeZone
              , ee = s.locale;
            await new Promise(h => {
                document.prerendering ? document.addEventListener("prerenderingchange", h, {
                    once: !0
                }) : h()
            }
            ),
            m.__framer_events.push(["published_site_pageview", {
                framerSiteId: Rt ?? null,
                routePath: l?.path || "/",
                collectionItemId: I,
                framerLocale: F || null,
                webPageId: l?.abTestingVariantId ?? t,
                abTestId: l?.abTestId,
                referrer: document.referrer || null,
                url: m.location.href,
                hostname: m.location.hostname || null,
                pathname: m.location.pathname || null,
                hash: m.location.hash || null,
                search: m.location.search || null,
                timezone: S,
                locale: ee
            }, "eager"]),
            await Me({
                priority: "background",
                ensureContinueBeforeUnload: !0,
                continueAfter: "paint"
            }),
            document.dispatchEvent(new CustomEvent("framer:pageview",{
                detail: {
                    framerLocale: F || null
                }
            }))
        }
        )();
        let x = await a;
        r ? (lt("framer-rewrite-breakpoints", () => {
            dt(u),
            m.__framer_onRewriteBreakpoints?.(u)
        }
        ),
        Re( () => {
            qe(),
            Qe(),
            ut(o, x, {
                onRecoverableError: n
            })
        }
        )) : Ne(o, {
            onRecoverableError: n
        }).render(x)
    } catch (t) {
        throw n(t, void 0, !1),
        t
    }
}
(function() {
}
)();
export {wa as getLayoutTemplateBreakpoints, Br as getPageRoot};
//# sourceMappingURL=script_main.3YJ7G6WI.mjs.map
