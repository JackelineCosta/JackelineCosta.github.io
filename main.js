import {a as pe, b as ue, c as he} from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-5GIJA7RB.mjs";
import {a as ye} from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-HW5V2T27.mjs";
import {a as ge} from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-BAR4VTW2.mjs";
import "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-42U43NKG.mjs";
import {A as Ne, B as Qe, C as J, D as $e, F as Y, G as et, H as tt, I as w, J as rt, L as S, M as Te, O as at, S as oe, T as ot, U as K, V as y, W as ne, X as T, Y as nt, Z as it, b as P, ba as st, c as j, ca as Z, d as l, ea as ct, fa as Pe, ia as dt, j as Oe, ja as lt, k as He, ka as mt, l as Ie, m as g, n as le, na as X, o as qe, qa as me, r as Je, ra as z, s as Ye, t as N, u as Ke, ua as U, v as Ze, va as E, wa as A, x as Xe, xa as fe, y as ke, ya as ft} from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-LOBV7XEK.mjs";
import {A as F, d as R, e as Se, h as _, i as D, k as Ee, l as Ge, m as Ce, n as Me, o as H, p as We, q as V, t as q, v as k, w as ze, z as e} from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-5F744S32.mjs";
import "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-HZL4YIMB.mjs";
import {b as W, c as m} from "https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/chunk-A3IIQ6X3.mjs";
var Tt = "default"in Ie ? Oe : Ie
  , we = {}
  , pt = Tt;
we.createRoot = pt.createRoot;
we.hydrateRoot = pt.hydrateRoot;
var Ue = we.createRoot
  , ut = we.hydrateRoot;
var At = A(ge)
  , Bt = at(oe(l.nav))
  , Lt = oe(l.header)
  , Dt = ["mhccxAjh7", "KucBey5jS", "n8U2N_bw8", "GPC2iTHiT"]
  , Vt = "framer-0RApw"
  , jt = {
    GPC2iTHiT: "framer-v-1hcftmc",
    KucBey5jS: "framer-v-e972vi",
    mhccxAjh7: "framer-v-fcezbk",
    n8U2N_bw8: "framer-v-1s6ubd7"
};
function C(r, ...o) {
    let n = {};
    return o?.forEach(t => t && Object.assign(n, r[t])),
    n
}
var St = {
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
  , ht = {
    delay: 0,
    duration: .8,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , Et = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ht,
    x: 0,
    y: 0
}
  , Gt = {
    damping: 60,
    delay: 0,
    mass: 1,
    stiffness: 500,
    type: "spring"
}
  , Mt = {
    bounce: .2,
    delay: 0,
    duration: .4,
    type: "spring"
}
  , Wt = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Mt,
    x: 0,
    y: 0
}
  , zt = {
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
  , Ot = {
    bounce: .25,
    delay: 0,
    duration: .45,
    type: "spring"
}
  , xe = {
    opacity: .5,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: Ot
}
  , Ht = ({value: r, children: o}) => {
    let n = H(P)
      , t = r ?? n.transition
      , s = q( () => ({
        ...n,
        transition: t
    }), [JSON.stringify(t)]);
    return e(P.Provider, {
        value: s,
        children: o
    })
}
  , qt = l.create(R)
  , Jt = {
    "Phone: Open": "GPC2iTHiT",
    Desktop: "mhccxAjh7",
    Phone: "n8U2N_bw8",
    Tablet: "KucBey5jS"
}
  , Yt = ({height: r, id: o, width: n, ...t}) => ({
    ...t,
    variant: Jt[t.variant] ?? t.variant ?? "mhccxAjh7"
})
  , Kt = (r, o) => r.layoutDependency ? o.join("-") + r.layoutDependency : o.join("-")
  , Zt = D(function(r, o) {
    let n = k(null)
      , t = o ?? n
      , s = V()
      , {activeLocale: p, setLocale: h} = N()
      , a = K()
      , {style: x, className: d, layoutId: b, variant: v, ...I} = Yt(r)
      , {baseVariant: i, classNames: B, clearLoadingGesture: te, gestureHandlers: u, gestureVariant: f, isLoading: _e, setGestureState: je, setVariant: re, variants: O} = X({
        cycleOrder: Dt,
        defaultVariant: "mhccxAjh7",
        ref: t,
        variant: v,
        variantClassNames: jt
    })
      , c = Kt(r, O)
      , {activeVariantCallback: G, delay: ae} = dt(i)
      , M = G(async (...L) => {
        re("n8U2N_bw8")
    }
    )
      , Fe = G(async (...L) => {
        re("GPC2iTHiT")
    }
    )
      , _t = G(async (...L) => {
        re("n8U2N_bw8")
    }
    )
      , Ft = w(Vt, ...[he])
      , Ct = () => !!["n8U2N_bw8", "GPC2iTHiT"].includes(i)
      , It = () => i !== "n8U2N_bw8"
      , kt = () => i === "GPC2iTHiT"
      , Sr = le()
      , Nt = () => !["n8U2N_bw8", "GPC2iTHiT"].includes(i);
    return e(j, {
        id: b ?? s,
        children: e(qt, {
            animate: O,
            initial: !1,
            children: e(Ht, {
                value: Gt,
                children: e(Lt, {
                    ...I,
                    ...u,
                    __framer__animate: {
                        transition: ht
                    },
                    __framer__animateOnce: !0,
                    __framer__enter: St,
                    __framer__exit: Et,
                    __framer__styleAppearEffectEnabled: !0,
                    __framer__threshold: 0,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: w(Ft, "framer-fcezbk", d, B),
                    "data-framer-name": "Desktop",
                    layoutDependency: c,
                    layoutId: "mhccxAjh7",
                    ref: t,
                    style: {
                        ...x
                    },
                    ...C({
                        GPC2iTHiT: {
                            "data-framer-name": "Phone: Open"
                        },
                        KucBey5jS: {
                            "data-framer-name": "Tablet"
                        },
                        n8U2N_bw8: {
                            "data-framer-name": "Phone"
                        }
                    }, i, f),
                    children: e(l.div, {
                        className: "framer-15wmymh",
                        "data-framer-name": "Container",
                        layoutDependency: c,
                        layoutId: "JvMkphIHa",
                        children: F(l.div, {
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
                            children: [e(Z, {
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
                                    ...C({
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
                                            onTap: M
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
                                    }, i, f)
                                })
                            }), Ct() && F(l.div, {
                                className: "framer-e5ehj1",
                                "data-framer-name": "Phone Nav Icon",
                                layoutDependency: c,
                                layoutId: "JaaoxOolF",
                                ...C({
                                    GPC2iTHiT: {
                                        "data-highlight": !0,
                                        onTap: M
                                    },
                                    n8U2N_bw8: {
                                        "data-highlight": !0,
                                        onTap: Fe
                                    }
                                }, i, f),
                                children: [e(l.div, {
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
                                }), e(l.div, {
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
                            }), It() && F(Bt, {
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
                                ...C({
                                    GPC2iTHiT: {
                                        __perspectiveFX: !1,
                                        __smartComponentFX: !0,
                                        __targetOpacity: 1,
                                        "data-border": !0,
                                        animate: Wt,
                                        initial: zt,
                                        optimized: !0
                                    }
                                }, i, f),
                                children: [e(z, {
                                    __fromCanvasComponent: !0,
                                    children: e(R, {
                                        children: e(l.p, {
                                            className: "framer-styles-preset-1bxrctr",
                                            "data-styles-preset": "IUIZL68H9",
                                            style: {
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255)))"
                                            },
                                            children: "In\xEDcio"
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
                                    whileHover: xe,
                                    withExternalLayout: !0,
                                    ...C({
                                        GPC2iTHiT: {
                                            "data-highlight": !0,
                                            onTap: M
                                        }
                                    }, i, f)
                                }), e(z, {
                                    __fromCanvasComponent: !0,
                                    children: e(R, {
                                        children: e(l.p, {
                                            className: "framer-styles-preset-1bxrctr",
                                            "data-styles-preset": "IUIZL68H9",
                                            style: {
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255)))"
                                            },
                                            children: "Sobre mim"
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
                                    whileHover: xe,
                                    withExternalLayout: !0,
                                    ...C({
                                        GPC2iTHiT: {
                                            "data-highlight": !0,
                                            onTap: M
                                        }
                                    }, i, f)
                                }), e(z, {
                                    __fromCanvasComponent: !0,
                                    children: e(R, {
                                        children: e(l.p, {
                                            className: "framer-styles-preset-1bxrctr",
                                            "data-styles-preset": "IUIZL68H9",
                                            style: {
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255)))"
                                            },
                                            children: "Projetos"
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
                                    whileHover: xe,
                                    withExternalLayout: !0,
                                    ...C({
                                        GPC2iTHiT: {
                                            "data-highlight": !0,
                                            onTap: M
                                        }
                                    }, i, f)
                                }), e(z, {
                                    __fromCanvasComponent: !0,
                                    children: e(R, {
                                        children: e(l.p, {
                                            className: "framer-styles-preset-1bxrctr",
                                            "data-styles-preset": "IUIZL68H9",
                                            style: {
                                                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20688f72-4014-4fdd-8f45-83cd36cc544b, rgb(255, 255, 255)))"
                                            },
                                            children: "Habilidades"
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
                                    whileHover: xe,
                                    withExternalLayout: !0,
                                    ...C({
                                        GPC2iTHiT: {
                                            "data-highlight": !0,
                                            onTap: M
                                        }
                                    }, i, f)
                                }), kt() && e(Pe, {
                                    links: [{
                                        href: {
                                            webPageId: "xIBnPR7GQ"
                                        },
                                        implicitPathVariables: void 0
                                    }, {
                                        href: {
                                            webPageId: "xIBnPR7GQ"
                                        },
                                        implicitPathVariables: void 0
                                    }],
                                    children: L => e(y, {
                                        ...C({
                                            GPC2iTHiT: {
                                                height: 52,
                                                y: (a?.y || 0) + 20 + (((a?.height || 97) - 40 - 57) / 2 + 0 + 0) + 0 + 0 + 70 + 50 + 235.2
                                            }
                                        }, i, f),
                                        children: e(T, {
                                            className: "framer-fnr3sj-container",
                                            "data-framer-name": "Contact",
                                            layoutDependency: c,
                                            layoutId: "gJzCG1xvg-container",
                                            name: "Contact",
                                            nodeId: "gJzCG1xvg",
                                            rendersWithMotion: !0,
                                            scopeId: "vjF7Ur2KS",
                                            children: e(ge, {
                                                BBQTntNpF: _t,
                                                c8KKo7_K6: L[0],
                                                cO5PVor7Z: "Contact us",
                                                height: "100%",
                                                id: "gJzCG1xvg",
                                                layoutId: "gJzCG1xvg",
                                                name: "Contact",
                                                variant: "Gqi2UrvU6",
                                                width: "100%",
                                                ...C({
                                                    GPC2iTHiT: {
                                                        c8KKo7_K6: L[1]
                                                    }
                                                }, i, f)
                                            })
                                        })
                                    })
                                })]
                            }), Nt() && e(Pe, {
                                links: [{
                                    href: {
                                        webPageId: "xIBnPR7GQ"
                                    },
                                    implicitPathVariables: void 0
                                }, {
                                    href: {
                                        webPageId: "xIBnPR7GQ"
                                    },
                                    implicitPathVariables: void 0
                                }],
                                children: L => e(y, {
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
                                        children: e(ge, {
                                            c8KKo7_K6: L[0],
                                            cO5PVor7Z: "Contato",
                                            height: "100%",
                                            id: "cktqV1Sxk",
                                            layoutId: "cktqV1Sxk",
                                            name: "Contact",
                                            variant: "Gqi2UrvU6",
                                            width: "100%",
                                            ...C({
                                                KucBey5jS: {
                                                    c8KKo7_K6: L[1]
                                                }
                                            }, i, f)
                                        })
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
  , Xt = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-0RApw.framer-1l4u80b, .framer-0RApw .framer-1l4u80b { display: block; }", ".framer-0RApw.framer-fcezbk { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 30px; position: relative; width: 1200px; }", ".framer-0RApw .framer-15wmymh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-0RApw .framer-fzi6qf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 15px 15px 15px 30px; position: relative; width: 100%; }", ".framer-0RApw .framer-dxyxwo { aspect-ratio: 4.722222222222222 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: visible; position: relative; text-decoration: none; width: 151px; }", ".framer-0RApw .framer-e5ehj1 { flex: none; height: 27px; overflow: hidden; position: relative; width: 18px; }", ".framer-0RApw .framer-12bfuim { flex: none; height: 2px; overflow: hidden; position: absolute; right: 0px; top: calc(62.96296296296299% - 2px / 2); width: 18px; }", ".framer-0RApw .framer-1ozstlz { flex: none; height: 2px; overflow: hidden; position: absolute; right: 0px; top: calc(37.03703703703706% - 2px / 2); width: 13px; }", ".framer-0RApw .framer-mxp8p6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-0RApw .framer-12afj0v, .framer-0RApw .framer-18kz2vn, .framer-0RApw .framer-ocdf9r, .framer-0RApw .framer-1fl5ujf { flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }", ".framer-0RApw .framer-fnr3sj-container, .framer-0RApw .framer-1brru4f-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-0RApw.framer-v-e972vi.framer-fcezbk { width: 810px; }", ".framer-0RApw.framer-v-e972vi .framer-15wmymh { max-width: 850px; }", ".framer-0RApw.framer-v-e972vi .framer-fzi6qf, .framer-0RApw.framer-v-1s6ubd7 .framer-fzi6qf, .framer-0RApw.framer-v-1hcftmc .framer-fzi6qf { padding: 15px 15px 15px 20px; }", ".framer-0RApw.framer-v-e972vi .framer-dxyxwo, .framer-0RApw.framer-v-1s6ubd7 .framer-dxyxwo { height: var(--framer-aspect-ratio-supported, 25px); width: 118px; }", ".framer-0RApw.framer-v-e972vi .framer-mxp8p6 { gap: 20px; }", ".framer-0RApw.framer-v-1s6ubd7.framer-fcezbk, .framer-0RApw.framer-v-1hcftmc.framer-fcezbk { padding: 20px; width: 390px; }", ".framer-0RApw.framer-v-1s6ubd7 .framer-15wmymh, .framer-0RApw.framer-v-1hcftmc .framer-15wmymh { max-width: 600px; }", ".framer-0RApw.framer-v-1s6ubd7 .framer-e5ehj1, .framer-0RApw.framer-v-1hcftmc .framer-e5ehj1 { cursor: pointer; }", ".framer-0RApw.framer-v-1hcftmc .framer-dxyxwo { cursor: pointer; height: var(--framer-aspect-ratio-supported, 25px); width: 118px; }", ".framer-0RApw.framer-v-1hcftmc .framer-12bfuim { top: calc(55.55555555555558% - 2px / 2); }", ".framer-0RApw.framer-v-1hcftmc .framer-1ozstlz { top: calc(55.55555555555558% - 2px / 2); width: 18px; }", ".framer-0RApw.framer-v-1hcftmc .framer-mxp8p6 { flex-direction: column; gap: 30px; left: 0px; padding: 50px; position: absolute; right: 0px; top: 70px; width: unset; z-index: 10; }", ".framer-0RApw.framer-v-1hcftmc .framer-12afj0v { cursor: pointer; order: 0; }", ".framer-0RApw.framer-v-1hcftmc .framer-18kz2vn { cursor: pointer; order: 2; }", ".framer-0RApw.framer-v-1hcftmc .framer-ocdf9r { cursor: pointer; order: 1; }", ".framer-0RApw.framer-v-1hcftmc .framer-1fl5ujf { cursor: pointer; order: 3; }", ".framer-0RApw.framer-v-1hcftmc .framer-fnr3sj-container { order: 4; }", ...ue, '.framer-0RApw[data-border="true"]::after, .framer-0RApw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
  , se = S(Zt, Xt, "framer-0RApw")
  , Ae = se;
se.displayName = "Header";
se.defaultProps = {
    height: 142,
    width: 1200
};
Y(se, {
    variant: {
        options: ["mhccxAjh7", "KucBey5jS", "n8U2N_bw8", "GPC2iTHiT"],
        optionTitles: ["Desktop", "Tablet", "Phone", "Phone: Open"],
        title: "Variant",
        type: J.Enum
    }
});
E(se, [{
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
}, ...At, ...fe(pe)], {
    supportsExplicitInterCodegen: !0
});
var Qt = A(ye)
  , gt = et(ye)
  , $t = "framer-GlTLx"
  , er = {
    WLPj3DArl: "framer-v-ml2wmh"
};
var tr = {
    bounce: .2,
    delay: 0,
    duration: .4,
    type: "spring"
}
  , rr = ({value: r, children: o}) => {
    let n = H(P)
      , t = r ?? n.transition
      , s = q( () => ({
        ...n,
        transition: t
    }), [JSON.stringify(t)]);
    return e(P.Provider, {
        value: s,
        children: o
    })
}
  , ar = l.create(R)
  , or = ({height: r, icon: o, id: n, link: t, width: s, ...p}) => ({
    ...p,
    F_RbgehG4: o ?? p.F_RbgehG4 ?? "XLogo",
    WmPjYLEK9: t ?? p.WmPjYLEK9
})
  , nr = (r, o) => r.layoutDependency ? o.join("-") + r.layoutDependency : o.join("-")
  , ir = D(function(r, o) {
    let n = k(null)
      , t = o ?? n
      , s = V()
      , {activeLocale: p, setLocale: h} = N()
      , a = K()
      , {style: x, className: d, layoutId: b, variant: v, F_RbgehG4: I, WmPjYLEK9: i, ...B} = or(r)
      , {baseVariant: te, classNames: u, clearLoadingGesture: f, gestureHandlers: _e, gestureVariant: je, isLoading: re, setGestureState: O, setVariant: c, variants: G} = X({
        defaultVariant: "WLPj3DArl",
        ref: t,
        variant: v,
        variantClassNames: er
    })
      , ae = nr(r, G)
      , Fe = w($t, ...[]);
    return e(j, {
        id: b ?? s,
        children: e(ar, {
            animate: G,
            initial: !1,
            children: e(rr, {
                value: tr,
                children: e(Z, {
                    href: i,
                    motionChild: !0,
                    nodeId: "WLPj3DArl",
                    scopeId: "EvwZiEMUD",
                    children: e(l.a, {
                        ...B,
                        ..._e,
                        className: `${w(Fe, "framer-ml2wmh", d, u)} framer-5q6ht1`,
                        "data-border": !0,
                        "data-framer-name": "Desktop",
                        layoutDependency: ae,
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
                        children: e(y, {
                            children: e(T, {
                                className: "framer-1quwp7r-container",
                                "data-framer-name": "Icon",
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                layoutDependency: ae,
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
  , sr = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-GlTLx.framer-5q6ht1, .framer-GlTLx .framer-5q6ht1 { display: block; }", ".framer-GlTLx.framer-ml2wmh { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 10px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-GlTLx .framer-1quwp7r-container { flex: none; height: 20px; position: relative; width: 20px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-GlTLx.framer-ml2wmh { gap: 0px; } .framer-GlTLx.framer-ml2wmh > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-GlTLx.framer-ml2wmh > :first-child { margin-top: 0px; } .framer-GlTLx.framer-ml2wmh > :last-child { margin-bottom: 0px; } }", '.framer-GlTLx[data-border="true"]::after, .framer-GlTLx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
  , ce = S(ir, sr, "framer-GlTLx")
  , Q = ce;
ce.displayName = "Social Icon";
ce.defaultProps = {
    height: 40,
    width: 40
};
Y(ce, {
    F_RbgehG4: gt?.iconSelection && {
        ...gt.iconSelection,
        defaultValue: "XLogo",
        description: void 0,
        hidden: void 0,
        title: "Icon"
    },
    WmPjYLEK9: {
        title: "Link",
        type: J.Link
    }
});
E(ce, [{
    explicitInter: !0,
    fonts: []
}, ...Qt], {
    supportsExplicitInterCodegen: !0
});
var cr = A(Q)
  , dr = oe(l.footer)
  , lr = ["LWt03mMwT", "bf0eFeJ1G", "DsN8w9WBb"]
  , mr = "framer-cqMNV"
  , fr = {
    bf0eFeJ1G: "framer-v-57zyg0",
    DsN8w9WBb: "framer-v-5aktjl",
    LWt03mMwT: "framer-v-1564x9i"
};
function $(r, ...o) {
    let n = {};
    return o?.forEach(t => t && Object.assign(n, r[t])),
    n
}
var pr = {
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
    transition: yt,
    x: 0,
    y: 0
}
  , hr = {
    bounce: .2,
    delay: 0,
    duration: .4,
    type: "spring"
}
  , gr = ({value: r, children: o}) => {
    let n = H(P)
      , t = r ?? n.transition
      , s = q( () => ({
        ...n,
        transition: t
    }), [JSON.stringify(t)]);
    return e(P.Provider, {
        value: s,
        children: o
    })
}
  , yr = l.create(R)
  , wr = {
    Desktop: "LWt03mMwT",
    Phone: "DsN8w9WBb",
    Tablet: "bf0eFeJ1G"
}
  , xr = ({height: r, id: o, width: n, ...t}) => ({
    ...t,
    variant: wr[t.variant] ?? t.variant ?? "LWt03mMwT"
})
  , br = (r, o) => r.layoutDependency ? o.join("-") + r.layoutDependency : o.join("-")
  , vr = D(function(r, o) {
    let n = k(null)
      , t = o ?? n
      , s = V()
      , {activeLocale: p, setLocale: h} = N()
      , a = K()
      , {style: x, className: d, layoutId: b, variant: v, ...I} = xr(r)
      , {baseVariant: i, classNames: B, clearLoadingGesture: te, gestureHandlers: u, gestureVariant: f, isLoading: _e, setGestureState: je, setVariant: re, variants: O} = X({
        cycleOrder: lr,
        defaultVariant: "LWt03mMwT",
        ref: t,
        variant: v,
        variantClassNames: fr
    })
      , c = br(r, O)
      , ae = w(mr, ...[he]);
    return e(j, {
        id: b ?? s,
        children: e(yr, {
            animate: O,
            initial: !1,
            children: e(gr, {
                value: hr,
                children: e(dr, {
                    ...I,
                    ...u,
                    __framer__animate: {
                        transition: yt
                    },
                    __framer__animateOnce: !0,
                    __framer__enter: pr,
                    __framer__exit: ur,
                    __framer__styleAppearEffectEnabled: !0,
                    __framer__threshold: 0,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: w(ae, "framer-1564x9i", d, B),
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
                    ...$({
                        bf0eFeJ1G: {
                            "data-framer-name": "Tablet"
                        },
                        DsN8w9WBb: {
                            "data-framer-name": "Phone"
                        }
                    }, i, f),
                    children: e(l.div, {
                        className: "framer-fu8l55",
                        "data-framer-name": "Container",
                        layoutDependency: c,
                        layoutId: "xQJZ4zZVu",
                        children: F(l.div, {
                            className: "framer-1efg3c5",
                            layoutDependency: c,
                            layoutId: "dgNGXhSbt",
                            children: [F(l.div, {
                                className: "framer-hkoqll",
                                "data-framer-name": "Logo",
                                layoutDependency: c,
                                layoutId: "nx5f5elVX",
                                children: [e(Z, {
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
                                            loading: U((a?.y || 0) + 100 + (((a?.height || 301) - 200 - 216) / 2 + 0 + 0) + 0 + 0 + 0 + 0 + 0 + 0),
                                            pixelHeight: 100,
                                            pixelWidth: 432,
                                            src: "https://framerusercontent.com/images/B3FJ5BBWhsGmSOUVwPewj0TpWo.svg"
                                        },
                                        className: "framer-juk08n framer-1cvxpcf",
                                        "data-framer-name": "Designfast-logo",
                                        layoutDependency: c,
                                        layoutId: "ApEl4Ev1N",
                                        ...$({
                                            bf0eFeJ1G: {
                                                background: {
                                                    alt: "Designfast Logo",
                                                    fit: "fill",
                                                    intrinsicHeight: 36,
                                                    intrinsicWidth: 170,
                                                    loading: U((a?.y || 0) + 100 + (((a?.height || 375) - 200 - 216) / 2 + 0 + 0) + 0 + 0 + 0 + 0 + 0 + 0),
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
                                                    loading: U((a?.y || 0) + 75 + (((a?.height || 712) - 150 - 306) / 2 + 0 + 0) + 0 + 0 + 0 + 0 + 0 + 0),
                                                    pixelHeight: 100,
                                                    pixelWidth: 432,
                                                    src: "https://framerusercontent.com/images/B3FJ5BBWhsGmSOUVwPewj0TpWo.svg"
                                                }
                                            }
                                        }, i, f)
                                    })
                                }), e(z, {
                                    __fromCanvasComponent: !0,
                                    children: e(R, {
                                        children: e(l.p, {
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
                            }), F(l.div, {
                                className: "framer-ydh9u",
                                "data-framer-name": "Social Icons",
                                layoutDependency: c,
                                layoutId: "pRTNL63K0",
                                children: [e(y, {
                                    height: 40,
                                    y: (a?.y || 0) + 100 + (((a?.height || 301) - 200 - 216) / 2 + 0 + 0) + 0 + 0 + 0 + 0 + 0,
                                    ...$({
                                        bf0eFeJ1G: {
                                            y: (a?.y || 0) + 100 + (((a?.height || 375) - 200 - 216) / 2 + 0 + 0) + 0 + 0 + 0 + 0 + 0 + 0
                                        },
                                        DsN8w9WBb: {
                                            y: (a?.y || 0) + 75 + (((a?.height || 712) - 150 - 306) / 2 + 0 + 0) + 0 + 0 + 0 + 266 + 0
                                        }
                                    }, i, f),
                                    children: e(T, {
                                        className: "framer-sfqdmj-container",
                                        layoutDependency: c,
                                        layoutId: "MTcPty19r-container",
                                        nodeId: "MTcPty19r",
                                        rendersWithMotion: !0,
                                        scopeId: "w07Ymg6Id",
                                        children: e(Q, {
                                            F_RbgehG4: "MediumLogo",
                                            height: "100%",
                                            id: "MTcPty19r",
                                            layoutId: "MTcPty19r",
                                            width: "100%",
                                            WmPjYLEK9: "https://medium.com/@jackeline.costa51"
                                        })
                                    })
                                }), e(y, {
                                    height: 40,
                                    y: (a?.y || 0) + 100 + (((a?.height || 301) - 200 - 216) / 2 + 0 + 0) + 0 + 0 + 0 + 0 + 0,
                                    ...$({
                                        bf0eFeJ1G: {
                                            y: (a?.y || 0) + 100 + (((a?.height || 375) - 200 - 216) / 2 + 0 + 0) + 0 + 0 + 0 + 0 + 0 + 45
                                        },
                                        DsN8w9WBb: {
                                            y: (a?.y || 0) + 75 + (((a?.height || 712) - 150 - 306) / 2 + 0 + 0) + 0 + 0 + 0 + 266 + 0
                                        }
                                    }, i, f),
                                    children: e(T, {
                                        className: "framer-16u8aml-container",
                                        layoutDependency: c,
                                        layoutId: "aJtWWjJz2-container",
                                        nodeId: "aJtWWjJz2",
                                        rendersWithMotion: !0,
                                        scopeId: "w07Ymg6Id",
                                        children: e(Q, {
                                            F_RbgehG4: "Envelope",
                                            height: "100%",
                                            id: "aJtWWjJz2",
                                            layoutId: "aJtWWjJz2",
                                            width: "100%",
                                            WmPjYLEK9: "jackeline.costa51@gmail.com"
                                        })
                                    })
                                }), e(y, {
                                    height: 40,
                                    y: (a?.y || 0) + 100 + (((a?.height || 301) - 200 - 216) / 2 + 0 + 0) + 0 + 0 + 0 + 0 + 0,
                                    ...$({
                                        bf0eFeJ1G: {
                                            y: (a?.y || 0) + 100 + (((a?.height || 375) - 200 - 216) / 2 + 0 + 0) + 0 + 0 + 0 + 0 + 0 + 90
                                        },
                                        DsN8w9WBb: {
                                            y: (a?.y || 0) + 75 + (((a?.height || 712) - 150 - 306) / 2 + 0 + 0) + 0 + 0 + 0 + 266 + 0
                                        }
                                    }, i, f),
                                    children: e(T, {
                                        className: "framer-5e5sbp-container",
                                        layoutDependency: c,
                                        layoutId: "znbKONB9C-container",
                                        nodeId: "znbKONB9C",
                                        rendersWithMotion: !0,
                                        scopeId: "w07Ymg6Id",
                                        children: e(Q, {
                                            F_RbgehG4: "BehanceLogo",
                                            height: "100%",
                                            id: "znbKONB9C",
                                            layoutId: "znbKONB9C",
                                            width: "100%",
                                            WmPjYLEK9: "https://www.behance.net/jackelineluana"
                                        })
                                    })
                                }), e(y, {
                                    height: 40,
                                    y: (a?.y || 0) + 100 + (((a?.height || 301) - 200 - 216) / 2 + 0 + 0) + 0 + 0 + 0 + 0 + 0,
                                    ...$({
                                        bf0eFeJ1G: {
                                            y: (a?.y || 0) + 100 + (((a?.height || 375) - 200 - 216) / 2 + 0 + 0) + 0 + 0 + 0 + 0 + 0 + 135
                                        },
                                        DsN8w9WBb: {
                                            y: (a?.y || 0) + 75 + (((a?.height || 712) - 150 - 306) / 2 + 0 + 0) + 0 + 0 + 0 + 266 + 0
                                        }
                                    }, i, f),
                                    children: e(T, {
                                        className: "framer-1o5w26a-container",
                                        layoutDependency: c,
                                        layoutId: "VV_vbZenZ-container",
                                        nodeId: "VV_vbZenZ",
                                        rendersWithMotion: !0,
                                        scopeId: "w07Ymg6Id",
                                        children: e(Q, {
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
  , Rr = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-cqMNV.framer-1cvxpcf, .framer-cqMNV .framer-1cvxpcf { display: block; }", ".framer-cqMNV.framer-1564x9i { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 30px 100px 30px; position: relative; width: 1200px; }", ".framer-cqMNV .framer-fu8l55 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-cqMNV .framer-1efg3c5 { display: grid; flex: none; gap: 50px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(5, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-cqMNV .framer-hkoqll { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: min-content; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-cqMNV .framer-juk08n { aspect-ratio: 4.722222222222222 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 62px); overflow: visible; position: relative; text-decoration: none; width: 293px; }", ".framer-cqMNV .framer-dizqqr { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-cqMNV .framer-ydh9u { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-end; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-cqMNV .framer-sfqdmj-container, .framer-cqMNV .framer-16u8aml-container, .framer-cqMNV .framer-5e5sbp-container, .framer-cqMNV .framer-1o5w26a-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-cqMNV.framer-v-57zyg0.framer-1564x9i { width: 810px; }", ".framer-cqMNV.framer-v-57zyg0 .framer-fu8l55 { max-width: 850px; }", ".framer-cqMNV.framer-v-57zyg0 .framer-1efg3c5 { gap: 30px; }", ".framer-cqMNV.framer-v-57zyg0 .framer-ydh9u { align-content: flex-end; align-items: flex-end; flex-direction: column; }", ".framer-cqMNV.framer-v-5aktjl.framer-1564x9i { padding: 75px 20px 75px 20px; width: 390px; }", ".framer-cqMNV.framer-v-5aktjl .framer-fu8l55 { max-width: 600px; }", ".framer-cqMNV.framer-v-5aktjl .framer-1efg3c5 { grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); }", ".framer-cqMNV.framer-v-5aktjl .framer-hkoqll { grid-column: span 1; }", ".framer-cqMNV.framer-v-5aktjl .framer-juk08n { height: var(--framer-aspect-ratio-supported, 37px); }", ".framer-cqMNV.framer-v-5aktjl .framer-ydh9u { justify-content: flex-start; }", ...ue, '.framer-cqMNV[data-border="true"]::after, .framer-cqMNV [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
  , de = S(vr, Rr, "framer-cqMNV")
  , Be = de;
de.displayName = "Footer";
de.defaultProps = {
    height: 301,
    width: 1200
};
Y(de, {
    variant: {
        options: ["LWt03mMwT", "bf0eFeJ1G", "DsN8w9WBb"],
        optionTitles: ["Desktop", "Tablet", "Phone"],
        title: "Variant",
        type: J.Enum
    }
});
E(de, [{
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
}, ...cr, ...fe(pe)], {
    supportsExplicitInterCodegen: !0
});
var _r = A(Ae)
  , Fr = A(Be)
  , Cr = {
    d6iefAT9F: "(min-width: 1200px)",
    gcwdOAbO7: "(min-width: 810px) and (max-width: 1199px)",
    v9CGJR08M: "(max-width: 809px)"
};
var Ir = "framer-O9kRe"
  , kr = {
    d6iefAT9F: "framer-v-dd529j",
    gcwdOAbO7: "framer-v-14qfqz3",
    v9CGJR08M: "framer-v-ln3rja"
}
  , ve = {}
  , wt = Object.keys(ve)
  , xt = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-O9kRe.framer-zzjyxi, .framer-O9kRe .framer-zzjyxi { display: block; }", ".framer-O9kRe.framer-dd529j { align-content: center; align-items: center; background-color: var(--token-386acb33-32fd-46b6-b159-e9a3c15f8f38, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-O9kRe .framer-q397vq-container { flex: none; height: auto; left: 0px; position: absolute; top: 0px; width: 100%; z-index: 10; }", ".framer-O9kRe .framer-1i79fa5 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }", ".framer-O9kRe .framer-u4oqg7-container { flex: none; height: auto; order: 1002; position: relative; width: 100%; }", '[data-layout-template="true"] > #overlay { margin-bottom: -0px; }']
  , Nr = {
    d6iefAT9F: "(min-width: 1200px)",
    gcwdOAbO7: "(min-width: 810px) and (max-width: 1199px)",
    v9CGJR08M: "(max-width: 809px)"
}
  , Tr = ({value: r}) => st() ? null : e("style", {
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
  , Ar = D(function(r, o) {
    let n = k(null)
      , t = o ?? n
      , s = V()
      , {activeLocale: p, setLocale: h} = N()
      , {style: a, className: x, layoutId: d, variant: b, children: v, ...I} = Ur(r)
      , [i,B] = lt(b, Cr, !1)
      , te = void 0
      , f = w(Ir, ...[]);
    return nt({}),
    e(rt.Provider, {
        value: {
            isLayoutTemplate: !0,
            primaryVariantId: "d6iefAT9F",
            variantClassNames: kr
        },
        children: F(j, {
            id: d ?? s,
            children: [e(Tr, {
                value: ":root body { background: var(--token-386acb33-32fd-46b6-b159-e9a3c15f8f38, rgb(0, 0, 0)); }"
            }), F(l.div, {
                ...I,
                className: w(f, "framer-dd529j", x),
                "data-layout-template": !0,
                ref: t,
                style: {
                    ...a
                },
                children: [e(y, {
                    height: 142,
                    width: "100vw",
                    y: 0,
                    children: e(ne, {
                        className: "framer-q397vq-container",
                        nodeId: "fw1TRs7r8",
                        scopeId: "MEBSJeLFi",
                        children: e(Te, {
                            breakpoint: i,
                            overrides: {
                                gcwdOAbO7: {
                                    variant: "KucBey5jS"
                                },
                                v9CGJR08M: {
                                    variant: "n8U2N_bw8"
                                }
                            },
                            children: e(Ae, {
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
                }), v, e("div", {
                    className: "framer-1i79fa5"
                }), e(y, {
                    height: 348,
                    width: "100vw",
                    y: 1e3,
                    children: e(ne, {
                        className: "framer-u4oqg7-container",
                        nodeId: "vvACWudVd",
                        scopeId: "MEBSJeLFi",
                        children: e(Te, {
                            breakpoint: i,
                            overrides: {
                                gcwdOAbO7: {
                                    variant: "bf0eFeJ1G"
                                },
                                v9CGJR08M: {
                                    variant: "DsN8w9WBb"
                                }
                            },
                            children: e(Be, {
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
  , Br = r => r === Ne.canvas || r === Ne.export ? [...xt, ...wt.flatMap(n => {
    let t = ve[n];
    return ve[n].map(s => `${t} {${s}}`)
}
)] : [...xt, ...wt.map(n => `@media ${Nr[n]} { ${ve[n].join(" ")} }`)]
  , Re = S(Ar, Br, "framer-O9kRe")
  , bt = Re;
Re.displayName = "Main";
Re.defaultProps = {
    height: 1600,
    width: 1200
};
E(Re, [{
    explicitInter: !0,
    fonts: []
}, ..._r, ...Fr], {
    supportsExplicitInterCodegen: !0
});
var ee = {
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
        page: g( () => import("https://framerusercontent.com/sites/5sB41yXA0S5ICx1Qx95K7l/z6s_iEVgfka_gqXClgQxvRMgVVJMAE_YUibbJC-yYn4.ZIQCO4HP.mjs")),
        path: "/"
    },
    XO8mqcZA9: {
        elements: {
            NNrqzAvKn: "hero",
            zp9ctSZ9P: "case-studies"
        },
        page: g( () => import("./EJFO5RfnPbHQ5jvyy58Wx1axjFETv86d3BsSS4mUxuU.3XMWCDZI.mjs")),
        path: "/case-studies"
    },
    G752yomo0: {
        elements: {
            uNIermDHD: "hero"
        },
        page: g( () => import("./1S_qGeSGDbD_Lg_B9L6j7dNiRL_zmWhSHyHVQmcLLx4.X6G4ZMSC.mjs")),
        path: "/404"
    },
    ujPTyfrW0: {
        elements: {
            aMysLDzCI: "hero",
            nrc2mT5hB: "our-studio",
            pXVa5beSW: "our-team",
            YwRktO7lp: "our-mission"
        },
        page: g( () => import("./aSBvoMalDgfJ2kPmSP4i7lzvZaf-X9xX2UMZCvg0du8.GQAJACBZ.mjs")),
        path: "/about-us"
    },
    oM7rOtzBh: {
        elements: {
            QmC8tpQ9F: "pages",
            rvN7JREl6: "hero"
        },
        page: g( () => import("./r7Yngm5vXKhHQL-DV-MiZPITSmqgrE7nS7zaBYOGkvg.TGOAFOUC.mjs")),
        path: "/legal"
    },
    n0rSazviK: {
        elements: {
            dNjp9V51c: "hero",
            N4A6kij_4: "list"
        },
        page: g( () => import("./2EybSYYBrAOxa6JgxBbBDQnKVqZ0WS1XqGbaPMDToxg.CJSRJIBC.mjs")),
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
        page: g( () => import("./8z6lCOosjP4a6g70ySvmSeTKNUZa9o25BlbXQVcBfSs.SP2QMZMZ.mjs")),
        path: "/case-studies/:yZKde_430"
    },
    JEEkFh6Ff: {
        collectionId: "JWH1ve5K2",
        elements: {
            HiMcMX2Vj: "content"
        },
        page: g( () => import("./HpByvp7NHqDQQMNkF2JQDor86iKxZPDkW2kmj_kCDdM.VQDLNJCS.mjs")),
        path: "/legal/:uTsuKCnFC"
    },
    fBUEUnN7p: {
        collectionId: "Y5sZttdqc",
        elements: {
            DVni6f0tL: "hero",
            nWweUawHk: "details"
        },
        page: g( () => import("./BHoYIWA2EIxAeR0O5qKPksg2Pg6yna2DhEX_nH_wEE4.DBTKKR4R.mjs")),
        path: "/services/:pxSuQ4QZL"
    }
}
  , Le = [{
    code: "en",
    id: "default",
    name: "English",
    slug: ""
}]
  , De = {
    JWH1ve5K2: async () => (await import("./6EwOGdRceh15bm13a-xeTHJZKStejxf8xzAU1ngBz6M.4UWOLW56.mjs"))?.utils,
    LOH4qa1jU: async () => (await import("./AkdAbCD5b7OjT4Ib33LNFG8KtVojSCjco75WMf172Rw.BXDW6ZCY.mjs"))?.utils,
    Y5sZttdqc: async () => (await import("./wclo5ZEpCvpwTQsJGrNCUX7oNGps_9IWDTbd7Xwr1Bk.TOS5SPD3.mjs"))?.utils
}
  , Rt = "88a1a84bcd0db189d5aef35f765ee0433d41f6d23fcb376dc9f6893fab8c77d7";
function Lr({routeId: r, children: o, style: n, ...t}) {
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
        return _(bt, {
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
async function Dr({routeId: r, pathVariables: o, localeId: n}) {
    let t = ee[r].page.preload()
      , s = _(ct, {
        isWebsite: !0,
        routeId: r,
        pathVariables: o,
        routes: ee,
        collectionUtils: De,
        framerSiteId: Rt,
        notFoundPage: g( () => import("./1S_qGeSGDbD_Lg_B9L6j7dNiRL_zmWhSHyHVQmcLLx4.X6G4ZMSC.mjs")),
        isReducedMotion: void 0,
        localeId: n,
        locales: Le,
        preserveQueryParams: void 0,
        siteCanonicalURL: void 0,
        EditorBar: typeof m < "u" ? ( () => {
            if (!/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(W.userAgent))
                return g(async () => {
                    let d = {
                        __version: 1,
                        framer: {
                            useCurrentRoute: qe,
                            useLocaleInfo: N,
                            useRouter: le
                        },
                        react: {
                            createElement: _,
                            memo: Ge,
                            useCallback: Me,
                            useEffect: We,
                            useRef: k,
                            useState: ze
                        },
                        "react-dom": {
                            createPortal: He
                        }
                    };
                    m.__framer_editorBarDependencies = d;
                    let {createEditorBar: b} = await import("https://edit.framer.com/init.mjs");
                    return {
                        default: b({
                            dependencies: d
                        })
                    }
                }
                )
        }
        )() : void 0,
        LayoutTemplate: Lr
    })
      , p = _(tt, {
        children: s,
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
      , h = _(it, {
        children: p
    })
      , a = _(Ye, {
        children: h,
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
var Ve = typeof document < "u";
if (Ve) {
    m.__framer_importFromPackage = (o, n) => () => _(Qe, {
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
m.__framer_events.push = () => {};
    $e();
    let r = document.getElementById("main");
    "framerHydrateV2"in r.dataset ? vt(!0, r) : vt(!1, r)
}
function Vr() {
    // Framer events disabled
}
async function vt(r, o) {
    function n(t, s, p=!0) {
        if (t.caught || m.__framer_hadFatalError)
            return;
        let h = s?.componentStack;
        if (p) {
            if (console.warn(`Recoverable error has happened. Please check any custom code or code overrides to fix server/client mismatches:
`, t, h),
            Math.random() > .01)
                return
        } else
            console.error(`Fatal crash has happened. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/:
`, t, h);
        Vr(p ? "published_site_load_recoverable_error" : "published_site_load_error", {
            message: String(t),
            componentStack: h,
            stack: h ? void 0 : t instanceof Error && typeof t.stack == "string" ? t.stack : null
        })
    }
    try {
        let t, s, p, h;
        if (r) {
            let d = JSON.parse(o.dataset.framerHydrateV2);
            t = d.routeId,
            s = d.localeId,
            p = d.pathVariables,
            h = d.breakpoints,
            t = ke(ee, t)
        } else {
            ke(ee, void 0);
            let d = Xe(ee, decodeURIComponent(location.pathname), !0, Le);
            t = d.routeId,
            s = d.localeId,
            p = d.pathVariables
        }
        let a = Dr({
            routeId: t,
            localeId: s,
            pathVariables: p
        });
        typeof m < "u" && (async () => {
            let d = ee[t]
              , b = "default"
              , v = Le.find( ({id: u}) => s ? u === s : u === b).code
              , I = null;
            if (d?.collectionId && De) {
                let u = await De[d.collectionId]?.()
                  , [f] = Object.values(p);
                u && typeof f == "string" && (I = await u.getRecordIdBySlug(f, v || void 0) ?? null)
            }
            let i = Intl.DateTimeFormat().resolvedOptions()
              , B = i.timeZone
              , te = i.locale;
            await new Promise(u => {
                document.prerendering ? document.addEventListener("prerenderingchange", u, {
                    once: !0
                }) : u()
            }
            ),
//             m.__framer_events.push(["published_site_pageview", {
//                 framerSiteId: Rt ?? null,
//                 routePath: d?.path || "/",
//                 collectionItemId: I,
//                 framerLocale: v || null,
//                 webPageId: d?.abTestingVariantId ?? t,
//                 abTestId: d?.abTestId,
//                 referrer: document.referrer || null,
//                 url: m.location.href,
//                 hostname: m.location.hostname || null,
//                 pathname: m.location.pathname || null,
//                 hash: m.location.hash || null,
//                 search: m.location.search || null,
//                 timezone: B,
//                 locale: te
//             }, "eager"]),
            await Je({
                priority: "background",
                ensureContinueBeforeUnload: !0,
                continueAfter: "paint"
            }),
//             document.dispatchEvent(new CustomEvent("framer:pageview",{
//                 detail: {
//                     framerLocale: v || null
//                 }
//             }))
        }
        )();
        let x = await a;
        r ? (ft("framer-rewrite-breakpoints", () => {
            mt(h),
            m.__framer_onRewriteBreakpoints?.(h)
        }
        ),
        Ce( () => {
            Ze(),
            Ke(),
            ut(o, x, {
                onRecoverableError: n
            })
        }
        )) : Ue(o, {
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
export {wa as getLayoutTemplateBreakpoints, Dr as getPageRoot};
//# sourceMappingURL=script_main.CGWDA4F2.mjs.map
