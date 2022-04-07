"use strict";
exports.id = 126;
exports.ids = [126];
exports.modules = {

/***/ 5850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeSlashFromPagination = ()=>{
    let swiperPagination = document.querySelector(".swiper-pagination");
    if (swiperPagination) {
        swiperPagination.innerHTML = swiperPagination.innerHTML.replace(" / ", "");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeSlashFromPagination);


/***/ }),

/***/ 4272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Blogs2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/blogs1.json
const blogs1_namespaceObject = JSON.parse('[{"id":1,"image":"/assets/img/blog/1.jpg","title":"In Good Taste: Mark Finlay Architects and Interiors","by":"ALEX SMITH","date":"Aug 06 2022"},{"id":2,"image":"/assets/img/blog/2.jpg","title":"Five Things You Should Know About Modern Furniture.","by":"ALEX SMITH","date":"Aug 06 2022"},{"id":3,"image":"/assets/img/blog/3.jpg","title":"What it\'s like to be an interior designer?","by":"ALEX SMITH","date":"Aug 06 2022"}]');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Blogs2/index.jsx

/* eslint-disable @next/next/no-img-element */ 


const Blogs2 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "blog-grid center bg-white section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "section-head text-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-6 col-md-8 col-sm-10",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "custom-font wow fadeInDown",
                                    "data-wow-delay": ".3s",
                                    style: {
                                        color: "black"
                                    },
                                    children: "\xdaltimas novedades"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "playfont wow flipInX",
                                    "data-wow-delay": ".5s",
                                    children: "Art\xedculos Relacionados"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: blogs1_namespaceObject.slice(0, 3).map((blog, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item wow fadeInUp md-mb50",
                                "data-wow-delay": index == 0 ? ".3s" : index == 1 ? ".1s" : ".5s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "post-img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: blog.image,
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/blog-details",
                                                        children: blog.by
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "/blog-details",
                                                        children: blog.date
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "playfont",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/blog-details",
                                                    children: blog.title
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/blog-details",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "more",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "custom-font",
                                                        children: "Read More"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, blog.id)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Blogs2 = (Blogs2);


/***/ }),

/***/ 8636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Split extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    target = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: this.target,
            children: this.props.children
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);


/***/ }),

/***/ 6172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1696);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1690);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2806);

/* eslint-disable @next/next/no-css-tags */ 




const LightLayout = ({ children , footerClass  })=>{
    const navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const logoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        var navbar = navbarRef.current, logo = logoRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
                logo.setAttribute("src", _data_app_json__WEBPACK_IMPORTED_MODULE_5__/* .darkLogo */ .Q1);
            } else {
                navbar.classList.remove("nav-scroll");
                logo.setAttribute("src", _data_app_json__WEBPACK_IMPORTED_MODULE_5__/* .lightLogo */ .E8);
            }
        });
    }, [
        navbarRef
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "stylesheet",
                    href: "/assets/css/style-light.css"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                navbarRef: navbarRef,
                logoRef: logoRef
            }),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                classText: footerClass
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LightLayout);


/***/ })

};
;