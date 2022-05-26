"use strict";
exports.id = 6268;
exports.ids = [6268];
exports.modules = {

/***/ 8621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/bg-slide.5e078408.jpg","height":969,"width":2079,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAJGKf//EABoQAQEAAgMAAAAAAAAAAAAAAAECABESIrH/2gAIAQEAAT8Ai2eZo7Sj7n//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});

/***/ }),

/***/ 9797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addParlx = ()=>{
    window.addEventListener("scroll", ()=>{
        var scrolled = window.pageYOffset;
        if (document.querySelector(".fixed-slider .capt .parlx")) {
            document.querySelector(".fixed-slider .capt .parlx").style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
            document.querySelector(".fixed-slider .capt .parlx").style.opacity = 1 - scrolled / 600;
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addParlx);


/***/ }),

/***/ 6268:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8028);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(151);
/* harmony import */ var _common_addParlx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9797);
/* harmony import */ var _components_Services03_services3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6500);
/* harmony import */ var _components_Showcases_one_center_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1584);
/* harmony import */ var _common_initIsotope__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4902);
/* harmony import */ var _public_img_demos_bg_slide_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8621);
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2589);
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Showcases_one_center_index__WEBPACK_IMPORTED_MODULE_8__]);
_components_Showcases_one_center_index__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const Demos = ()=>{
    const fixedHeader = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);
    const MainContent = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);
    const myLoader = ({ src , width , quality  })=>{
        return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
    };
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        setInterval(()=>{
            if (fixedHeader.current) {
                var slidHeight = fixedHeader.current.offsetHeight;
            }
            if (MainContent.current) {
                MainContent.current.style.marginTop = slidHeight + "px";
            }
        }, 1000);
    }, [
        fixedHeader,
        MainContent
    ]);
    const [pageLoaded, setPageLoaded] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{
        setPageLoaded(true);
        if (pageLoaded) {
            setTimeout(()=>{
                (0,_common_initIsotope__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
            }, 1000);
            (0,_common_addParlx__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
            document.querySelector("body").style.backgroundColor = "#181b21";
        }
    }, [
        pageLoaded
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "d5eda1a11cb3fc7a",
                children: '.masonery.jsx-d5eda1a11cb3fc7a .item-img.jsx-d5eda1a11cb3fc7a{position:relative;overflow:hidden}.masonery.jsx-d5eda1a11cb3fc7a .gallery.jsx-d5eda1a11cb3fc7a .items.jsx-d5eda1a11cb3fc7a{padding:0 40px;margin-top:80px;text-align:center}.masonery.jsx-d5eda1a11cb3fc7a .gallery.jsx-d5eda1a11cb3fc7a .items.jsx-d5eda1a11cb3fc7a h6.jsx-d5eda1a11cb3fc7a{margin-top:25px;font-size:17px;font-weight:400;font-family:"Barlow Condensed",sans-serif;text-align:center;text-transform:uppercase;letter-spacing:3px}.masonery.jsx-d5eda1a11cb3fc7a .gallery.jsx-d5eda1a11cb3fc7a .items.jsx-d5eda1a11cb3fc7a .item-img.jsx-d5eda1a11cb3fc7a:hover img.jsx-d5eda1a11cb3fc7a{}.masonery.jsx-d5eda1a11cb3fc7a .item-img.jsx-d5eda1a11cb3fc7a:hover .tlinks.jsx-d5eda1a11cb3fc7a{opacity:1}.masonery.jsx-d5eda1a11cb3fc7a .item-img.jsx-d5eda1a11cb3fc7a .tlinks.jsx-d5eda1a11cb3fc7a{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transition:all.4s;-moz-transition:all.4s;-o-transition:all.4s;transition:all.4s;background:rgba(0,0,0,.5);opacity:0;padding:0 40px}.masonery.jsx-d5eda1a11cb3fc7a .item-img.jsx-d5eda1a11cb3fc7a .tlinks.jsx-d5eda1a11cb3fc7a a.jsx-d5eda1a11cb3fc7a{padding:14px 20px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background:#32363e;color:#fff;font-size:14px;font-weight:500;margin:5px 0}.masonery.jsx-d5eda1a11cb3fc7a .item-img.jsx-d5eda1a11cb3fc7a .tlinks.jsx-d5eda1a11cb3fc7a a.jsx-d5eda1a11cb3fc7a:last-of-type{background:#75dab4;color:#181b21;margin-left:5px}.masonery.jsx-d5eda1a11cb3fc7a .item-img.jsx-d5eda1a11cb3fc7a .new.jsx-d5eda1a11cb3fc7a{padding:10px 30px;background:#75dab4;position:absolute;top:0;left:-60px;width:200px;-webkit-transform:rotate(-30deg);-moz-transform:rotate(-30deg);-ms-transform:rotate(-30deg);-o-transform:rotate(-30deg);transform:rotate(-30deg);font-size:13px}'
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                ref: fixedHeader,
                "data-overlay-dark": "4",
                className: "jsx-d5eda1a11cb3fc7a" + " " + "works-header fixed-slider hfixd valign bg-img",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-d5eda1a11cb3fc7a" + " " + "image-container",
                        /*#__PURE__*/ children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            src: _public_img_demos_bg_slide_jpg__WEBPACK_IMPORTED_MODULE_9__/* ["default"].src */ .Z.src,
                            layout: "fill",
                            objectFit: "cover",
                            quality: 100,
                            alt: "image"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-d5eda1a11cb3fc7a" + " " + "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-d5eda1a11cb3fc7a" + " " + "row justify-content-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-d5eda1a11cb3fc7a" + " " + "col-lg-9 col-md-11 static",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-d5eda1a11cb3fc7a" + " " + "capt mt-50",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-d5eda1a11cb3fc7a" + " " + "parlx",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    style: {
                                                        fontFamily: `Montserrat, sans-serif;`
                                                    },
                                                    className: "jsx-d5eda1a11cb3fc7a" + " " + "cta-5-title",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("font", {
                                                        style: {
                                                            color: `#8257e5; };`
                                                        },
                                                        className: "jsx-d5eda1a11cb3fc7a" + " " + "klickart-font",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                className: "jsx-d5eda1a11cb3fc7a" + " " + "medium-b",
                                                                children: "O que a "
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("font", {
                                                                style: {
                                                                    color: `rgb(255, 255, 255);`
                                                                },
                                                                className: "jsx-d5eda1a11cb3fc7a" + " " + "klickart-font",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                    className: "jsx-d5eda1a11cb3fc7a" + " " + "medium-b",
                                                                    children: "UP"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                                className: "jsx-d5eda1a11cb3fc7a" + " " + "medium-b",
                                                                children: " faz?"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "jsx-d5eda1a11cb3fc7a",
                                                    children: "N\xf3s cuidamos do seu futuro, para caminharmos juntos sempre."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((typewriter_effect__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                    options: {
                                                        wrapperClassName: "color-font fw-600",
                                                        strings: [
                                                            "Marca",
                                                            "Campanha",
                                                            "Impressos",
                                                            "Sites e aplicativos", 
                                                        ],
                                                        autoStart: true,
                                                        loop: true
                                                    },
                                                    loop: true,
                                                    onInit: (typewriter)=>{
                                                        typewriter;
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/home/home2-dark",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "jsx-d5eda1a11cb3fc7a" + " " + "btn-curve btn-bord btn-lit mt-30",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "jsx-d5eda1a11cb3fc7a",
                                                            children: "Ag\xeancia de conte\xfado"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-d5eda1a11cb3fc7a" + " " + "bactxt custom-font valign",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    color: "transparent"
                                                },
                                                className: "jsx-d5eda1a11cb3fc7a" + " " + "full-width",
                                                children: "dev"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: MainContent,
                className: "jsx-d5eda1a11cb3fc7a" + " " + "main-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "jsx-d5eda1a11cb3fc7a" + " " + "masonery section-padding sub-bg",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-d5eda1a11cb3fc7a" + " " + "container-fluid",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-d5eda1a11cb3fc7a" + " " + "sec-head custom-font text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Split__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                "data-splitting": true,
                                                className: "jsx-d5eda1a11cb3fc7a" + " " + "wow words chars splitting",
                                                children: "Ag\xeancia criativa"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-d5eda1a11cb3fc7a" + " " + "tbg",
                                            children: "O que fazemos?"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services03_services3__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        style: {
                            background: "#181b21"
                        },
                        className: "jsx-d5eda1a11cb3fc7a" + " " + "masonery section-padding pb-70",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-d5eda1a11cb3fc7a" + " " + "container-fluid",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "jsx-d5eda1a11cb3fc7a" + " " + "sec-head custom-font text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Split__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                "data-splitting": true,
                                                className: "jsx-d5eda1a11cb3fc7a" + " " + "wow words chars splitting",
                                                children: "Portfolio."
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "jsx-d5eda1a11cb3fc7a" + " " + "tbg",
                                            children: "Case website"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                    className: "jsx-d5eda1a11cb3fc7a",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Showcases_one_center_index__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "jsx-d5eda1a11cb3fc7a" + " " + "services bords lficon section-padding position-re",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-d5eda1a11cb3fc7a" + " " + "container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-d5eda1a11cb3fc7a" + " " + "row justify-content-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-d5eda1a11cb3fc7a" + " " + "container-fluid",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-d5eda1a11cb3fc7a" + " " + "sec-head custom-font text-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Split__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            "data-splitting": true,
                                                            className: "jsx-d5eda1a11cb3fc7a" + " " + "wow words chars splitting",
                                                            children: "Ag\xeancia criativa"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "jsx-d5eda1a11cb3fc7a" + " " + "tbg",
                                                        children: "Solu\xe7\xf5es?"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "jsx-d5eda1a11cb3fc7a" + " " + "row",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                "data-wow-delay": ".5s",
                                                className: "jsx-d5eda1a11cb3fc7a" + " " + "col-lg-6 wow fadeInLeft",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-d5eda1a11cb3fc7a" + " " + "item-box",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-d5eda1a11cb3fc7a",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-d5eda1a11cb3fc7a" + " " + "icon pe-7s-paint-bucket"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-d5eda1a11cb3fc7a" + " " + "cont",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "jsx-d5eda1a11cb3fc7a",
                                                                    children: "UI/UX Design"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "jsx-d5eda1a11cb3fc7a",
                                                                    children: "Nosso processo de design \xe9 baseado em metodologias centradas no usu\xe1rio, com itera\xe7\xf5es incrementais e entregas cont\xednuas, para garantir que as interfaces funcionais sejam elaboradas com um alto n\xedvel de detalhe, resultando em produtos com uma excelente experi\xeancia do usu\xe1rio."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                "data-wow-delay": ".7s",
                                                className: "jsx-d5eda1a11cb3fc7a" + " " + "col-lg-6 wow fadeInLeft",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-d5eda1a11cb3fc7a" + " " + "item-box",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-d5eda1a11cb3fc7a",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-d5eda1a11cb3fc7a" + " " + "icon pe-7s-phone"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-d5eda1a11cb3fc7a" + " " + "cont",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "jsx-d5eda1a11cb3fc7a",
                                                                    children: "Atingir o seu p\xfablico-alvo"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "jsx-d5eda1a11cb3fc7a",
                                                                    children: "Atrav\xe9s do tr\xe1fego e performance, voc\xea conhece reconhecer a sua persona e com a segmenta\xe7\xe3o ideal voc\xea direciona o seu conte\xfado ou a sua oferta para os leads mais qualificados com menor custo para o cliente."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                "data-wow-delay": ".9s",
                                                className: "jsx-d5eda1a11cb3fc7a" + " " + "col-lg-6 wow fadeInLeft",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-d5eda1a11cb3fc7a" + " " + "item-box",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-d5eda1a11cb3fc7a",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-d5eda1a11cb3fc7a" + " " + "icon pe-7s-display1"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-d5eda1a11cb3fc7a" + " " + "cont",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "jsx-d5eda1a11cb3fc7a",
                                                                    children: "Analisando o seu desempenho"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "jsx-d5eda1a11cb3fc7a",
                                                                    children: "N\xe3o basta criar o an\xfancio, \xe9 necess\xe1rio saber o que est\xe1 funcionando ou n\xe3o. Por isso, acompanhamos e analisamos suas campanhas para que as adapta\xe7\xf5es sejam feitas at\xe9 alcan\xe7ar o objetivo da campanha sem ter que estourar o or\xe7amento."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                "data-wow-delay": ".5s",
                                                className: "jsx-d5eda1a11cb3fc7a" + " " + "col-lg-6 wow fadeInLeft",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-d5eda1a11cb3fc7a" + " " + "item-box",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-d5eda1a11cb3fc7a",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "jsx-d5eda1a11cb3fc7a" + " " + "icon pe-7s-diskette"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "jsx-d5eda1a11cb3fc7a" + " " + "cont",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "jsx-d5eda1a11cb3fc7a",
                                                                    children: "Atrair sua persona em diferentes est\xe1gios"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "jsx-d5eda1a11cb3fc7a",
                                                                    children: "Com os conhecidos funis de vendas, no caso do facebook ads, voc\xea pode atrair o seu p\xfablico quando ele ainda nem se deu conta de que precisa de algo. Em diferentes est\xe1gios \xe9 poss\xedvel vender."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-d5eda1a11cb3fc7a" + " " + "line top right"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                        className: "jsx-d5eda1a11cb3fc7a" + " " + "footer-half sub-bg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-d5eda1a11cb3fc7a" + " " + "container",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-d5eda1a11cb3fc7a" + " " + "copyrights text-center mt-0",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "jsx-d5eda1a11cb3fc7a",
                                    children: [
                                        "COPYRIGHT \xa9 2022 UP EXPERT | DESENVOLVIDO POR |",
                                        " ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "https://upexpert.com.br/",
                                            className: "jsx-d5eda1a11cb3fc7a",
                                            children: [
                                                " ",
                                                "Ag\xeancia full service up.expert"
                                            ]
                                        }),
                                        "."
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Demos);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;