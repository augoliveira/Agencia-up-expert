"use strict";
exports.id = 9625;
exports.ids = [9625];
exports.modules = {

/***/ 6500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services3)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/common/getSiblings.js
const getSiblings = (e)=>{
    const siblings = [];
    if (!e.parentNode) {
        return siblings;
    }
    let sibling = e.parentNode.firstChild;
    while(sibling){
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};
/* harmony default export */ const common_getSiblings = (getSiblings);

;// CONCATENATED MODULE: ./src/common/cardMouseEffect.js

const cardMouseEffect = (featureEl)=>{
    var featuresitems = featureEl;
    if (featuresitems) {
        featuresitems.forEach((item)=>{
            item.onmouseover = function(event) {
                item.classList.add("active");
                const siblings = common_getSiblings(item);
                const siblingEl = siblings.map((e)=>e.classList.remove("active")
                );
            };
        });
    }
};
/* harmony default export */ const common_cardMouseEffect = (cardMouseEffect);

;// CONCATENATED MODULE: ./src/components/Services03/services3.jsx




const Services3 = ()=>{
    external_react_default().useEffect(()=>{
        common_cardMouseEffect(document.querySelectorAll(".feat .items"));
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "feat sub-bg section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12 col-md-12"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6 items md-mb30",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item wow fadeIn",
                                "data-wow-delay": ".3s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "ion-ios-monitor"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "Engajamento"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Depois de conquistar seu espa\xe7o no concorrido mercado das lojas virtuais \xe9 hora de trazer engajamento para o seu produto. P\xfablico que compra \xe9 p\xfablico engajado! \u2022 Web Design \u2022 Landing pages \u2022 Implementa\xe7\xe3o de loja virtual \u2022 Design e UX \u2022 Inbound Marketing"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about/about-dark",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "more-stroke",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6 items active md-mb30",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item wow fadeIn",
                                "data-wow-delay": ".3s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "ion-ios-bolt-outline"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "Convers\xe3o"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "A convers\xe3o \xe9 o momento da venda, quando o p\xfablico engajado finalmente faz a t\xe3o esperada compra. \u2022 Desenvolvimento de oferta (Copywriting) \u2022 C.R.O (Conversion Rate Optmization) \u2022 Controle de Vendas Omni-Channel \u2022 Program\xe1tica \u2022 Inbound Marketing"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about/about-dark",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "more-stroke",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6 items sm-mb30",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item wow fadeIn",
                                "data-wow-delay": ".3s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "ion-cube"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "Reten\xe7\xe3o"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Ap\xf3s a convers\xe3o o processo n\xe3o termina. Precisamos encontrar maneiras de manter o cliente conectado com o seu neg\xf3cio e assim aumentar o consumo por usu\xe1rio, reduzindo seus custos para aquisi\xe7\xe3o de novos clientes. \u2022 E-mail Marketing \u2022 Remarketing \u2022 Social Media \u2022 CRM \u2022 Obter Membro"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about/about-dark",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "more-stroke",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const services3 = (Services3);


/***/ }),

/***/ 151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/* eslint-disable @next/next/no-css-tags */ 
const DarkTheme = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkTheme);


/***/ })

};
;