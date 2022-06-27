"use strict";
exports.id = 4370;
exports.ids = [4370];
exports.modules = {

/***/ 729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Page_header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./public/assets/img/pg2.jpg
/* harmony default export */ const pg2 = ({"src":"/_next/static/media/pg2.66da38ef.jpg","height":824,"width":1400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAJCb/8QAHRAAAQIHAAAAAAAAAAAAAAAAAQIDAAQFEiIyM//aAAgBAQABPwBdan3nVcQoDA2ax//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhJR/9oACAECAQE/ALS1n//EABcRAAMBAAAAAAAAAAAAAAAAAAABEVH/2gAIAQMBAT8Aiw//2Q=="});
;// CONCATENATED MODULE: ./src/components/Page-header/index.jsx






const PageHeader = ({ title , fullPath , image  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "pages-header bg-img valign parallaxie",
        "data-overlay-dark": "5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: "/assets/img/bg-004-free-img.png",
                alt: "alt",
                layout: "fill",
                objectFit: "cover",
                quality: 100
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cont text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "path",
                                    children: fullPath.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: item.url,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: router.pathname == item.url ? "active" : "",
                                                        children: item.name
                                                    })
                                                }),
                                                index != fullPath.length - 1 ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "/"
                                                }) : ""
                                            ]
                                        }, item.id)
                                    )
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Page_header = (PageHeader);


/***/ }),

/***/ 9334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const IconFork = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "74",
        height: "90",
        viewBox: "0 0 405 432",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                clipPath: "url(#clip0_0_1)",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M404.403 248.326V91.7613C404.403 69.5144 386.421 51.533 364.174 51.533H221.577C199.33 51.533 181.349 69.5144 181.349 91.7613V248.326H404.403Z",
                        fill: "url(#paint0_linear_0_1)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M181.349 286.965V340.491C181.349 362.738 199.33 380.719 221.577 380.719H364.174C386.421 380.719 404.403 362.738 404.403 340.491V286.965H181.349ZM292.248 349.106C281.627 349.106 272.929 340.491 272.929 329.786C272.929 319.164 281.543 310.466 292.248 310.466C302.87 310.466 311.568 319.081 311.568 329.786C311.568 340.491 302.954 349.106 292.248 349.106Z",
                        fill: "url(#paint1_linear_0_1)"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                filter: "url(#filter0_b_0_1)",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        x: "11.2114",
                        y: "118.308",
                        width: "247.314",
                        height: "329.187",
                        rx: "45.2668",
                        transform: "rotate(-24.7139 11.2114 118.308)",
                        fill: "url(#paint2_linear_0_1)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        x: "16.6156",
                        y: "120.306",
                        width: "239.166",
                        height: "321.039",
                        rx: "41.1928",
                        transform: "rotate(-24.7139 16.6156 120.306)",
                        stroke: "url(#paint3_linear_0_1)",
                        strokeOpacity: "0.5",
                        strokeWidth: "8.14803"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "244.445",
                cy: "311.344",
                r: "25.2199",
                transform: "rotate(-10.2198 244.445 311.344)",
                fill: "url(#paint4_linear_0_1)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "253.692",
                cy: "265.918",
                r: "6.78173",
                transform: "rotate(-10.2198 253.692 265.918)",
                fill: "url(#paint5_linear_0_1)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                x1: "9.05336",
                y1: "-9.05336",
                x2: "148.005",
                y2: "-9.05336",
                transform: "matrix(0.907925 -0.419132 0.462824 0.88645 85.1768 168.014)",
                stroke: "url(#paint6_linear_0_1)",
                strokeWidth: "18.1067",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                x1: "9.05336",
                y1: "-9.05336",
                x2: "148.005",
                y2: "-9.05336",
                transform: "matrix(0.907925 -0.419132 0.462824 0.88645 100.006 200.466)",
                stroke: "url(#paint7_linear_0_1)",
                strokeWidth: "18.1067",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                x1: "9.05336",
                y1: "-9.05336",
                x2: "106.885",
                y2: "-9.05336",
                transform: "matrix(0.907925 -0.419132 0.462824 0.88645 114.268 237.355)",
                stroke: "url(#paint8_linear_0_1)",
                strokeWidth: "18.1067",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                        id: "filter0_b_0_1",
                        x: "-36.4882",
                        y: "-32.7902",
                        width: "457.69",
                        height: "497.834",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feGaussianBlur", {
                                in: "BackgroundImage",
                                stdDeviation: "31.2341"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feComposite", {
                                in2: "SourceAlpha",
                                operator: "in",
                                result: "effect1_backgroundBlur_0_1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_backgroundBlur_0_1",
                                result: "shape"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint0_linear_0_1",
                        x1: "368.426",
                        y1: "248.326",
                        x2: "201.898",
                        y2: "104.951",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "#006EF8"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "#69ACFF"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint1_linear_0_1",
                        x1: "322.591",
                        y1: "348.457",
                        x2: "232.628",
                        y2: "333.842",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "#006EF8"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "#69ACFF"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint2_linear_0_1",
                        x1: "99.3545",
                        y1: "141.173",
                        x2: "219.161",
                        y2: "417.583",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "white",
                                stopOpacity: "0.49"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0.04"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint3_linear_0_1",
                        x1: "134.868",
                        y1: "118.308",
                        x2: "134.868",
                        y2: "447.495",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint4_linear_0_1",
                        x1: "244.445",
                        y1: "286.124",
                        x2: "244.445",
                        y2: "336.564",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "white",
                                stopOpacity: "0.32"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0.75"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint5_linear_0_1",
                        x1: "253.692",
                        y1: "259.136",
                        x2: "253.692",
                        y2: "272.7",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0.75"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint6_linear_0_1",
                        x1: "-17.4999",
                        y1: "0",
                        x2: "178.616",
                        y2: "0",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "white",
                                stopOpacity: "0.67"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint7_linear_0_1",
                        x1: "-17.4999",
                        y1: "0",
                        x2: "178.616",
                        y2: "0",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "white",
                                stopOpacity: "0.67"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint8_linear_0_1",
                        x1: "-12.9182",
                        y1: "0",
                        x2: "131.852",
                        y2: "0",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "white",
                                stopOpacity: "0.67"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                        id: "clip0_0_1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                            width: "223.054",
                            height: "329.187",
                            fill: "white",
                            transform: "translate(181.349 51.533)"
                        })
                    })
                ]
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconFork);


/***/ }),

/***/ 8935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const IconStar = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "35.546",
        height: "13.501",
        viewBox: "0 0 35.546 13.501",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            id: "Icon_ionic-ios-arrow-round-forward",
            "data-name": "Icon ionic-ios-arrow-round-forward",
            d: "M20.784,11.51a.919.919,0,0,0-.007,1.294l4.275,4.282H-6.521A.911.911,0,0,0-7.428,18a.911.911,0,0,0,.907.914H25.045L20.77,23.2a.925.925,0,0,0,.007,1.294.91.91,0,0,0,1.287-.007l5.794-5.836h0a1.026,1.026,0,0,0,.19-.288.872.872,0,0,0,.07-.352.916.916,0,0,0-.26-.64l-5.794-5.836A.9.9,0,0,0,20.784,11.51Z",
            transform: "translate(7.428 -11.252)",
            fill: "#fede31"
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconStar);


/***/ }),

/***/ 3457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const IconFork = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "74",
        height: "82",
        viewBox: "0 0 370 410",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                clipPath: "url(#clip0_0_1)",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M235.607 177.737C275.516 177.737 307.869 145.388 307.869 105.482C307.869 65.5773 275.516 33.2278 235.607 33.2278C195.698 33.2278 163.345 65.5773 163.345 105.482C163.345 145.388 195.698 177.737 235.607 177.737Z",
                        fill: "url(#paint0_linear_0_1)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M235.606 207.822C161.605 207.822 101.604 267.817 101.604 341.81C101.604 361.2 117.343 376.938 136.735 376.938H334.478C353.87 376.938 369.696 361.2 369.696 341.81C369.696 267.817 309.695 207.822 235.606 207.822Z",
                        fill: "url(#paint1_linear_0_1)"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                filter: "url(#filter0_b_0_1)",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    clipPath: "url(#clip1_0_1)",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M171.844 179.028C209.892 166.983 230.973 126.377 218.929 88.3329C206.885 50.2887 166.277 29.2122 128.229 41.2574C90.1806 53.3026 69.1 93.9081 81.1439 131.952C93.1878 169.997 133.795 191.073 171.844 179.028Z",
                            fill: "url(#paint2_linear_0_1)"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M215.045 89.5625C226.409 125.461 206.518 163.778 170.614 175.144C134.711 186.51 96.3926 166.622 85.0279 130.723C73.6632 94.824 93.5549 56.5077 129.458 45.1415C165.362 33.7752 203.68 53.6637 215.045 89.5625Z",
                            stroke: "url(#paint3_linear_0_1)",
                            strokeOpacity: "0.4",
                            strokeWidth: "8.14803"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M157.432 133.505C170.336 129.42 177.485 115.649 173.401 102.746C169.316 89.8438 155.544 82.6959 142.641 86.7809C129.737 90.8659 122.588 104.637 126.672 117.539C130.757 130.442 144.529 137.59 157.432 133.505Z",
                            fill: "url(#paint4_linear_0_1)"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M180.923 207.709C110.373 230.043 71.2772 305.35 93.6095 375.893C99.4615 394.378 119.217 404.632 137.704 398.779L326.226 339.098C344.713 333.245 355.051 313.464 349.199 294.979C326.867 224.436 251.557 185.348 180.923 207.709Z",
                            fill: "url(#paint5_linear_0_1)"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M97.4935 374.663C75.8404 306.266 113.747 233.249 182.153 211.593C250.643 189.91 323.663 227.813 345.315 296.209C350.484 312.536 341.351 330.036 324.996 335.214L136.475 394.895C120.132 400.069 102.666 391.003 97.4935 374.663Z",
                            stroke: "url(#paint6_linear_0_1)",
                            strokeOpacity: "0.6",
                            strokeWidth: "8.14803"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                            x1: "9.05336",
                            y1: "-9.05336",
                            x2: "101.635",
                            y2: "-9.05336",
                            transform: "matrix(0.944497 -0.328519 0.374099 0.927389 154.213 320.406)",
                            stroke: "url(#paint7_linear_0_1)",
                            strokeWidth: "18.1067",
                            strokeLinecap: "round"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                        id: "filter0_b_0_1",
                        x: "-56.5606",
                        y: "-56.2488",
                        width: "473.425",
                        height: "522.75",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feGaussianBlur", {
                                in: "BackgroundImage",
                                stdDeviation: "28.5181"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feComposite", {
                                in2: "SourceAlpha",
                                operator: "in",
                                result: "effect1_backgroundBlur_0_1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_backgroundBlur_0_1",
                                result: "shape"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint0_linear_0_1",
                        x1: "235.607",
                        y1: "33.2278",
                        x2: "235.607",
                        y2: "177.737",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "#FF9900"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "#FFBC58"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint1_linear_0_1",
                        x1: "235.65",
                        y1: "207.822",
                        x2: "235.65",
                        y2: "376.938",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "#FF9900"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "#FFBC58"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint2_linear_0_1",
                        x1: "79.3354",
                        y1: "192.031",
                        x2: "209.602",
                        y2: "112.423",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "white",
                                stopOpacity: "0.1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0.23"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint3_linear_0_1",
                        x1: "128.229",
                        y1: "41.2574",
                        x2: "171.844",
                        y2: "179.028",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint4_linear_0_1",
                        x1: "142.641",
                        y1: "86.7809",
                        x2: "157.432",
                        y2: "133.505",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "white",
                                stopOpacity: "0.67"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint5_linear_0_1",
                        x1: "266.697",
                        y1: "352.27",
                        x2: "125.261",
                        y2: "235.059",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "white",
                                stopOpacity: "0.1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0.23"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint6_linear_0_1",
                        x1: "180.965",
                        y1: "207.696",
                        x2: "232.006",
                        y2: "368.925",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint7_linear_0_1",
                        x1: "-12.3332",
                        y1: "0",
                        x2: "125.881",
                        y2: "0",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "white",
                                stopOpacity: "0.67"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                        id: "clip0_0_1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                            width: "268.092",
                            height: "343.797",
                            fill: "white",
                            transform: "translate(101.605 33.228)"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                        id: "clip1_0_1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                            width: "268.092",
                            height: "343.797",
                            fill: "white",
                            transform: "translate(0.475586 81.7012) rotate(-17.5666)"
                        })
                    })
                ]
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconFork);


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