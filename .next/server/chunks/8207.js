"use strict";
exports.id = 8207;
exports.ids = [8207];
exports.modules = {

/***/ 5176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Clients1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/clients1.json
const clients1_namespaceObject = JSON.parse('[{"id":1,"lightImage":"/img/clients/brands/light/1.png","darkImage":"/img/clients/brands/dark/01.png","url":"www.splay.com.br"},{"id":2,"lightImage":"/img/clients/brands/light/2.png","darkImage":"/img/clients/brands/dark/02.png","url":"www.cliente.com.br"},{"id":3,"lightImage":"/img/clients/brands/light/3.png","darkImage":"/img/clients/brands/dark/03.png","url":"Balaiodacriação.com.br"},{"id":4,"lightImage":"/img/clients/brands/light/4.png","darkImage":"/img/clients/brands/dark/04.png","url":"cliente.com.br"},{"id":5,"lightImage":"/img/clients/brands/light/5.png","darkImage":"/img/clients/brands/dark/05.png","url":"www.cliente.com.br"},{"id":6,"lightImage":"/img/clients/brands/light/6.png","darkImage":"/img/clients/brands/dark/06.png","url":"www.cliente.com.br"},{"id":7,"lightImage":"/img/clients/brands/light/7.png","darkImage":"/img/clients/brands/dark/07.png","url":"i4comunicacao.com.br"},{"id":8,"lightImage":"/img/clients/brands/light/8.png","darkImage":"/img/clients/brands/dark/08.png","url":"livrecv.com.br"}]');
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8028);
;// CONCATENATED MODULE: ./src/components/Clients1/index.jsx

/* eslint-disable @next/next/no-img-element */ 


const Clients1 = ({ theme , subBG  })=>{
    var first = clients1_namespaceObject.slice(0, clients1_namespaceObject.length / 2);
    var second = clients1_namespaceObject.slice(4, clients1_namespaceObject.length);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `clients section-padding ${subBG ? "sub-bg" : ""}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-4 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "sec-head custom-font mb-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    children: "Clientes"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    children: [
                                        "Nossos ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        " Clientes"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row bord",
                                    children: first.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-md-3 col-6 brands",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": `${item.id == 1 ? ".3" : item.id == 2 ? ".6" : item.id == 3 ? ".8" : item.id == 4 ? ".3" : ""}s`,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "img",
                                                    children: [
                                                        theme === "light" ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item.lightImage,
                                                            alt: ""
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item.darkImage,
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#0",
                                                                className: "link words chars splitting",
                                                                "data-splitting": true,
                                                                children: item.url
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }, item.id)
                                    )
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row",
                                    children: second.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${item.id == 5 ? "col-md-3 col-6 brands sm-mb30" : item.id == 6 ? "col-md-3 col-6 brands sm-mb30" : item.id == 7 ? "col-md-3 col-6 brands" : item.id == 8 ? "col-md-3 col-6 brands" : ""}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": `${item.id == 1 ? ".4" : item.id == 2 ? ".7" : item.id == 3 ? ".5" : item.id == 4 ? ".3" : ""}s`,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "img",
                                                    children: [
                                                        theme === "light" ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item.lightImage,
                                                            alt: ""
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item.darkImage,
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#0",
                                                                className: "link words chars splitting",
                                                                "data-splitting": true,
                                                                children: item.url
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }, item.id)
                                    )
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_Clients1 = (Clients1);


/***/ }),

/***/ 4715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1400);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__);




const SkillsCircle = ({ subBG , theme  })=>{
    const cpStyle = {
        path: {
            stroke: "#8457e5"
        },
        trail: {
            stroke: theme ? theme == "dark" ? "#0f1218" : "#e5e5e5" : ""
        },
        text: {
            fill: theme ? theme == "dark" ? "#ffffff" : "#4e4e4e" : "",
            fontSize: "16px"
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `skills-circle pt-50 pb-50 ${subBG ? "sub-bg" : ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-7",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "item wow fadeInLeft",
                                        "data-wow-delay": ".6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "skill",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__.CircularProgressbar, {
                                                    value: 90,
                                                    strokeWidth: 2,
                                                    text: `${90}%`,
                                                    styles: cpStyle
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "cont",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Projetos"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        children: "Consultoria"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-md-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "item wow fadeInLeft",
                                        "data-wow-delay": ".3",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "skill",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__.CircularProgressbar, {
                                                    value: 75,
                                                    strokeWidth: 2,
                                                    text: `${75}%`,
                                                    styles: cpStyle
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "cont",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Produ\xe7\xe3o"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                        children: "Conte\xfado"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkillsCircle);


/***/ }),

/***/ 4130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_3__);

/* eslint-disable @next/next/no-img-element */ 





const VideoWithTestimonials = ()=>{
    const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        console.clear();
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "block-sec",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "background bg-img section-padding pb-0",
            style: {
                backgroundImage: `url(/img/slid/1.jpg)`
            },
            "data-overlay-dark": "8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "vid-area",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "vid-icon",
                                        children: [
                                             false && /*#__PURE__*/ 0,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "vid",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    setOpen(true);
                                                },
                                                href: "https://vimeo.com/127203262",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "vid-butn",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "fas fa-play"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "cont",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                            className: "wow",
                                            "data-splitting": true,
                                            children: [
                                                "Venha  ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                    children: "Nos conhecer!"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-5 offset-lg-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "testim-box",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "head-box",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                className: "wow fadeIn",
                                                "data-wow-delay": ".5s",
                                                children: "Nossos clientes"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: "wow fadeInLeft",
                                                "data-wow-delay": ".5s",
                                                children: "O que diz sobre nos?"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        ...settings,
                                        className: "slic-item wow fadeInUp",
                                        "data-wow-delay": ".5s",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Empresa alto capacitada, caprichosos e criteriosos nos processos de cria\xe7\xe3o e eficientes gostei muito recomendo!"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "info",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "img",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "img-box",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "/img/clients/1.jpg",
                                                                        alt: ""
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "cont",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "author",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                            className: "author-name custom-font",
                                                                            children: "Juliano Ferreira"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "author-details",
                                                                            children: "Cozinha e marmit\xe1ria"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "A up.expert e uma ecexlente ag\xeancia! consultoria que nos ajudou muito."
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "info",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "img",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "img-box",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: "/img/clients/3.jpg",
                                                                        alt: ""
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "cont",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "author",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                            className: "author-name custom-font",
                                                                            children: "Fabiana"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "author-details",
                                                                            children: "Pizzaria Donas"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoWithTestimonials);


/***/ })

};
;