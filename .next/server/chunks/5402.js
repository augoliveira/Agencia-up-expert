"use strict";
exports.id = 5402;
exports.ids = [5402];
exports.modules = {

/***/ 3756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ thumparallax),
/* harmony export */   "D": () => (/* binding */ thumparallaxDown)
/* harmony export */ });
const thumparallax = ()=>{
    var imageUp = document.getElementsByClassName("thumparallax");
    if (imageUp) {
        new simpleParallax(imageUp, {
            delay: 1,
            scale: 1.1
        });
    }
};
const thumparallaxDown = ()=>{
    var imageDown = document.getElementsByClassName("thumparallax-down");
    if (imageDown) {
        new simpleParallax(imageDown, {
            orientation: "down",
            delay: 1,
            scale: 1.1
        });
    }
};


/***/ }),

/***/ 3289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const AboutHeader = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "pages-header bg-img valign parallaxie",
        "data-overlay-dark": "5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    width: 2746,
                    height: 4681,
                    layout: "fill",
                    alt: "water_portrait",
                    src: "/img/slid/bg-05-free-img.jpg" //image saved in public/home
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "cont text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: "Sobre | Up.expert"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "path",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#0",
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "/"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#0",
                                            className: "active",
                                            children: "Ag\xeancia"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutHeader);


/***/ }),

/***/ 1332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8028);



const AboutIntro = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "intro-section section-padding pb-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "htit sm-mb30",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Nossa miss\xe3o \xe9 clara"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Somos uma Assessoria de Marketing especialmente desenvolvida para aprimorar os processos de vendas da sua empresa."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Ag\xeancia de Marketing Digital Full Service! Com uma combina\xe7\xe3o \xfanica de talentos criados para a era digital. Geramos ideias e estrat\xe9gias impulsionadas pela percep\xe7\xe3o do consumidor e ampliadas por um dom\xednio sem precedentes da tecnologia."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6 offset-lg-1 col-md-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "wow txt words chars splitting",
                                    "data-splitting": true,
                                    children: "Hoje em dia uma marca que n\xe3o est\xe1 presente online fica invis\xedvel. E estar presente online significa muito mais que ter um site funcionando \u2013 significa ter todo um trabalho digital que engloba v\xe1rios itens. \xc9 preciso, entre muitas coisas, ter um \xf3timo site que mostre seus servi\xe7os ou produtos de forma f\xe1cil, m\xeddias sociais ativas e que conversem com o seu p\xfablico, campanhas para engajar a venda e dar suporte na p\xf3s-venda, entre outras."
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutIntro);


/***/ }),

/***/ 6695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Minimal_area)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/common/customFunctions.js
var customFunctions = __webpack_require__(6383);
;// CONCATENATED MODULE: ./src/common/featuresEffect.js

const featuresEffect = ()=>{
    var featuresitems = document.querySelectorAll(".feat .items");
    if (featuresitems) {
        featuresitems.forEach((item)=>{
            item.onmouseover = function(event) {
                item.classList.add("active");
                let siblings = (0,customFunctions/* getSiblings */.m7)(item), siblingEl = siblings.map((e)=>e.classList.remove("active")
                );
            };
        });
    }
};
/* harmony default export */ const common_featuresEffect = (featuresEffect);

// EXTERNAL MODULE: ./src/common/thumparallax.js
var thumparallax = __webpack_require__(3756);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8028);
;// CONCATENATED MODULE: ./src/components/Minimal-area/index.jsx

/* eslint-disable @next/next/no-img-element */ 




const MinimalArea = ()=>{
    external_react_default().useEffect(()=>{
        common_featuresEffect();
        setTimeout(()=>{
            (0,thumparallax/* thumparallaxDown */.D)();
        }, 1000);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "min-area sub-bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: "thumparallax-down",
                                src: "/img/min-area.jpg",
                                alt: "",
                                width: 800,
                                height: 969
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "wow custom-font words chars splitting",
                                        "data-splitting": true,
                                        children: "A Ag\xeancia."
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "wow txt words chars splitting",
                                        "data-splitting": true,
                                        children: [
                                            "A ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "Ag\xeancia full service UP.EXPERT"
                                            }),
                                            " sempre trabalha para ficar por dentro das \xfaltimas tend\xeancias e melhores pr\xe1ticas para aplicar aos projetos de sua empresa."
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "feat",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "wow fadeInUp",
                                            "data-wow-delay": ".2s",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "1"
                                                        }),
                                                        " Nossa miss\xe3o"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "luctus massa ipsum at tempus eleifend congue lectus bibendum"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "wow fadeInUp",
                                            "data-wow-delay": ".4s",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "2"
                                                        }),
                                                        " Nossos objetivos"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "luctus massa ipsum at tempus eleifend congue lectus bibendum"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "wow fadeInUp",
                                            "data-wow-delay": ".6s",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "3"
                                                        }),
                                                        " Por que n\xf3s?"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "luctus massa ipsum at tempus eleifend congue lectus bibendum"
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
    });
};
/* harmony default export */ const Minimal_area = (MinimalArea);


/***/ }),

/***/ 9125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Services4)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8028);
;// CONCATENATED MODULE: ./src/data/sections/services4.json
const services4_namespaceObject = JSON.parse('[{"id":1,"title":"Digital Marketing","icon":"pe-7s-gleam","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."},{"id":2,"title":"Web & App Development","icon":"pe-7s-phone","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."},{"id":3,"title":"Graphic Design","icon":"pe-7s-magic-wand","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."}]');
;// CONCATENATED MODULE: ./src/components/Services4/index.jsx




const Services4 = ({ withBG , withPadding , halfBG , withOutTitle  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: `services ${withPadding ? "section-padding" : ""} ${withBG ? "sub-bg" : ""}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    !withOutTitle && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sec-head custom-font text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "wow fadeIn",
                                "data-wow-delay": ".5s",
                                children: "Best Features"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "wow words chars splitting",
                                    "data-splitting": true,
                                    children: "Services."
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "tbg",
                                children: "Services"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: services4_namespaceObject.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `item ${index != services4_namespaceObject.length - 1 ? "md-mb50" : ""} wow fadeInUp`,
                                    "data-wow-delay": item.id == 1 ? ".5s" : item.id == 2 ? ".3s" : ".8s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: `icon ${item.icon}`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: item.content
                                        })
                                    ]
                                })
                            }, item.id)
                        )
                    })
                ]
            }),
            halfBG && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "half-bg bottom"
            })
        ]
    });
};
/* harmony default export */ const components_Services4 = (Services4);


/***/ }),

/***/ 3322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Team1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/data/sections/team1.json
const team1_namespaceObject = JSON.parse('[{"id":1,"image":"/img/team/01.jpg","name":"Hasib sharif","title":"General Manager"},{"id":2,"image":"/img/team/02.jpg","name":"Jonson Leo","title":"Founder"},{"id":3,"image":"/img/team/03.jpg","name":"Leio Man","title":"Founder"},{"id":4,"image":"/img/team/4.jpg","name":"Robert Front","title":"CEO Founder"},{"id":5,"image":"/img/team/5.jpg","name":"Legender Mao","title":"3D Visualization"},{"id":6,"image":"/img/team/6.jpg","name":"Matt Huk","title":"3D Visualization"}]');
;// CONCATENATED MODULE: ./src/components/Team1/index.jsx

/* eslint-disable @next/next/no-img-element */ 




class Team1 extends (external_react_default()).Component {
    constructor(props){
        super(props);
    }
    renderArrows = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "navs mt-30 wow fadeInUp",
            "data-wow-delay": ".3s",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "prev cursor-pointer",
                    onClick: ()=>this.slider.slickPrev()
                    ,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-chevron-left"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "next cursor-pointer",
                    onClick: ()=>this.slider.slickNext()
                    ,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-chevron-right"
                    })
                })
            ]
        });
    };
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "team section-padding",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 valign",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "full-width",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "sec-head custom-font mb-0",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                children: "Employees"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Our Team."
                                            })
                                        ]
                                    }),
                                    this.renderArrows()
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                                className: "team-container",
                                ref: (c)=>this.slider = c
                                ,
                                dots: false,
                                infinite: true,
                                arrows: true,
                                autoplay: true,
                                slidesToScroll: 1,
                                slidesToShow: 4,
                                responsive: [
                                    {
                                        breakpoint: 1024,
                                        settings: {
                                            slidesToShow: 4
                                        }
                                    },
                                    {
                                        breakpoint: 767,
                                        settings: {
                                            slidesToShow: 2
                                        }
                                    },
                                    {
                                        breakpoint: 480,
                                        settings: {
                                            slidesToShow: 1
                                        }
                                    }, 
                                ],
                                children: team1_namespaceObject.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "item wow fadeInUp",
                                        "data-wow-delay": ".3s",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img wow imago",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: item.image,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: item.name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "social",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#0",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-facebook-f"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#0",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-twitter"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#0",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-behance"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#0",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-linkedin-in"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, item.id)
                                )
                            })
                        })
                    ]
                })
            })
        });
    }
}
/* harmony default export */ const components_Team1 = (Team1);


/***/ })

};
;