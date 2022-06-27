"use strict";
exports.id = 6297;
exports.ids = [6297];
exports.modules = {

/***/ 6297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);



const ContactWithMap = ()=>{
    const messageRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    function validateEmail(value) {
        let error;
        if (!value) {
            error = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = "Invalid email address";
        }
        return error;
    }
    const sendMessage = (ms)=>new Promise((r)=>setTimeout(r, ms)
        )
    ;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "contact section-padding",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "form md-mb50",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "extra-title mb-50",
                                            children: "Entrar em contato."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
                                            initialValues: {
                                                Nome: "",
                                                Email: "",
                                                Mensagem: ""
                                            },
                                            onSubmit: async (values)=>{
                                                await sendMessage(500);
                                                alert(JSON.stringify(values, null, 2));
                                                // show message
                                                messageRef.current.innerText = "Sua mensagem foi enviada com sucesso. Entrarei em contato com voc\xea em breve.";
                                                // Reset the values
                                                values.Nome = "";
                                                values.Email = "";
                                                values.Mensagem = "";
                                                // clear message
                                                setTimeout(()=>{
                                                    messageRef.current.innerText = "";
                                                }, 2000);
                                            },
                                            children: ({ errors , touched  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {
                                                    id: "contact-form",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "messages",
                                                            ref: messageRef
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "controls",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "form-group",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                                                                        id: "form_name",
                                                                        type: "text",
                                                                        name: "name",
                                                                        placeholder: "Name",
                                                                        required: "required"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "form-group",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                                                                            validate: validateEmail,
                                                                            id: "form_email",
                                                                            type: "email",
                                                                            name: "email",
                                                                            placeholder: "Email",
                                                                            required: "required"
                                                                        }),
                                                                        errors.Email && touched.Email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            children: errors.Email
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "form-group",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Field, {
                                                                        as: "textarea",
                                                                        id: "form_message",
                                                                        name: "message",
                                                                        placeholder: "Message",
                                                                        rows: "4",
                                                                        required: "required"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    type: "submit",
                                                                    className: "btn-curve btn-lit",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "Enviar mensagem"
                                                                    })
                                                                })
                                                            ]
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
                                    className: "cont-info",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            className: "extra-title mb-50",
                                            children: "Informa\xe7\xe3o de contato."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "custom-font wow",
                                            "data-splitting": true,
                                            children: "Vamos conversar."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item mb-40",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#0",
                                                        children: "contato@upexpert.com.br"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                    children: "(61) 9 8669-2775)"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "custom-font wow",
                                            "data-splitting": true,
                                            children: "Local."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                                children: [
                                                    "BLOCO A - SHS QUADRA 6, SALA 501,",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    "Asa sul, Brasilia-DF"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "social mt-50",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#0",
                                                    className: "icon",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-facebook-f"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#0",
                                                    className: "icon",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#0",
                                                    className: "icon",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-pinterest"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#0",
                                                    className: "icon",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fab fa-behance"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "map",
                id: "ieatmaps",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.9015747563835!2d-47.89049398518106!3d-15.80914302752947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b802b49f51d%3A0xfb4614fe89c36a4!2sAg%C3%AAncia%20full%20service%20up.expert!5e0!3m2!1sen!2sbr!4v1652962296060!5m2!1sen!2sbr",
                    style: {
                        border: 0
                    },
                    allowFullScreen: "",
                    loading: "lazy",
                    width: "1920",
                    height: "600"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                className: "footer-half sub-bg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "copyrights text-center mt-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "COPYRIGHT \xa9 2022 UP EXPERT | DESENVOLVIDO POR |",
                                " ",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "https://upexpert.com.br/",
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
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactWithMap);


/***/ })

};
;