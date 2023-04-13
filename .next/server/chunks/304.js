"use strict";
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 6429:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_Intro_with_horizontal_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3614);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8636);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3877);
/* harmony import */ var _common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5850);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_6__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











swiper__WEBPACK_IMPORTED_MODULE_6__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_6__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_6__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_6__.Parallax
]);
const IntroWithHorizontal = ()=>{
    const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setTimeout(()=>{
            setLoad(false);
        });
        setTimeout(()=>{
            (0,_common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
        }, 1000);
    }, []);
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const paginationRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "slider",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "swiper-container parallax-slider",
            children: [
                !load ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                    speed: 1000,
                    parallax: true,
                    navigation: {
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    },
                    pagination: {
                        type: "fraction",
                        clickable: true,
                        el: paginationRef.current
                    },
                    onBeforeInit: (swiper)=>{
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                        swiper.params.pagination.el = paginationRef.current;
                    },
                    onSwiper: (swiper)=>{
                        setTimeout(()=>{
                            for(var i = 0; i < swiper.slides.length; i++){
                                swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                            }
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.params.pagination.el = paginationRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                            swiper.pagination.destroy();
                            swiper.pagination.init();
                            swiper.pagination.update();
                        });
                    },
                    className: "swiper-wrapper",
                    slidesPerView: 1,
                    children: _data_Intro_with_horizontal_json__WEBPACK_IMPORTED_MODULE_2__.map((slide)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-img valign",
                                style: {
                                    backgroundImage: `url(${slide.image})`
                                },
                                "data-overlay-dark": "6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-lg-8 col-md-10",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "caption hmone mt-100",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        className: "thin",
                                                        children: slide.title.first
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            "data-splitting": true,
                                                            className: "words chars splitting",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                                href: "#",
                                                                children: slide.title.second
                                                            })
                                                        })
                                                    }),
                                                    (slide === null || slide === void 0 ? void 0 : slide.content) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "mt-10",
                                                        children: [
                                                            slide.content.first,
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                            }),
                                                            slide.content.second
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                        href: "/#",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "btn-curve btn-bord btn-lit mt-30",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Read More"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        }, slide.id));
                    })
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "setone",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: navigationNextRef,
                            className: "swiper-button-next swiper-nav-ctrl next-ctrl",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-chevron-right"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: navigationPrevRef,
                            className: "swiper-button-prev swiper-nav-ctrl prev-ctrl",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-chevron-left"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: paginationRef,
                    className: "swiper-pagination top playfont"
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroWithHorizontal);

});

/***/ }),

/***/ 3534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Portfolio1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/data/portfolio1.json
const portfolio1_namespaceObject = JSON.parse('{"H":[{"id":1,"name":"Bodega","filterClass":".bodega"},{"id":2,"name":"Recámara","filterClass":".recamara"},{"id":3,"name":"Bunker","filterClass":".bunker"},{"id":4,"name":"Loft","filterClass":".loft"},{"id":5,"name":"Bar","filterClass":".bar"}],"c":[{"id":1,"image":"/assets/img/portfolio/portadas/bodega-portada.jpg","title":"Bodega con Contenedor","tag":"Bodega","filterClass":"bodega","url":"/Bodega_Contenedor"},{"id":2,"image":"/assets/img/portfolio/portadas/infantil-portada.jpg","title":"Recamara Infantil","tag":"Recamara","filterClass":"recamara","url":"/Recamara_Infantil"},{"id":3,"image":"/assets/img/portfolio/portadas/loft-portada.jpg","title":"Loft con contenedor","tag":"Loft","filterClass":"loft","url":"/Loft_Contenedor"},{"id":4,"image":"/assets/img/portfolio/portadas/bunker-portada.jpg","title":"Búnker para 4 personas","tag":"Búnker","filterClass":"bunker","url":"/Bunker"},{"id":5,"image":"/assets/img/portfolio/portadas/portada.jpeg","title":"Bar Tematico","tag":"Bar","filterClass":"bar","url":"/Bar_Tematico"}]}');
// EXTERNAL MODULE: ./src/common/initIsotope.js
var initIsotope = __webpack_require__(8063);
;// CONCATENATED MODULE: ./src/components/Portfolio1/index.jsx




const Portfolio1 = ()=>{
    external_react_default().useEffect(()=>{
        setTimeout(()=>{
            if (window.Isotope) (0,initIsotope/* default */.Z)();
        }, 1000);
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            id: "portafolio",
            className: "portfolio section-padding",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container-fluid",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "section-head text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row justify-content-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-lg-6 col-md-8 col-sm-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            id: "introduciendo",
                                            className: "wow fadeInDown",
                                            "data-wow-delay": ".3s",
                                            children: "Experiencia"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "playfont wow flipInX",
                                            "data-wow-delay": ".5s",
                                            children: "Nuestro Trabajo"
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "filtering text-center col-12 wow fadeInUp",
                                "data-wow-delay": ".3s",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "filter bg-img bg-repeat",
                                    style: {
                                        backgroundImage: "url(/assets/img/line-pattern1.png"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            "data-filter": "*",
                                            className: "active",
                                            children: "Todos"
                                        }),
                                        portfolio1_namespaceObject.H.map((filter)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                "data-filter": filter.filterClass,
                                                children: filter.name
                                            }, filter.id)
                                        )
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "gallery twsty full-width",
                                children: portfolio1_namespaceObject.c.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: `items ${item.filterClass} mt-50 wow fadeInUp`,
                                        "data-wow-delay": ".3s",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "item-img bg-img wow imago",
                                                style: {
                                                    backgroundImage: `url(${item.image})`
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "item-img-overlay valign"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "info mt-10",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: item.tag
                                                    })
                                                ]
                                            })
                                        ]
                                    }, item.id)
                                )
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const components_Portfolio1 = (Portfolio1);


/***/ }),

/***/ 1643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Services1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/services1.json
const services1_namespaceObject = JSON.parse('{"u":[{"id":"01","title":"Diseño libre","content":"Los contenedores tienen la flexibilidad para adecuarse a los requerimientos de cada obra, ya que pueden apilarse, cortarse y equiparse con todo tipo de aditamentos."},{"id":"02","title":"Económico","content":"El diseño y construcción con contenedores permite la reducción de costos por el reciclaje de materiales. Además son anticiclónicos y muy seguros."},{"id":"03","title":"Movible","content":"Los espacios construidos con contenedores tienen la posibilidad de ser transportados de un lugar a otro, elevando su valor práctico."},{"id":"04","title":"Ecológico","content":"Este modelo de construcción no genera alteraciones permanentes en el terreno, siendo una opción responsable al medio ambiente."}]}');
;// CONCATENATED MODULE: ./src/components/Services1/index.jsx



const Services1 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "espacios",
        className: "services section-padding bg-gray",
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
                                    className: "wow fadeInDown",
                                    "data-wow-delay": ".3s",
                                    children: "Introduciendo"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    id: "playfont",
                                    className: "playfont wow flipInX",
                                    "data-wow-delay": ".5s",
                                    children: "Nuestros Espacios"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row bord-box bg-img wow fadeInUp",
                    "data-wow-delay": ".3s",
                    style: {
                        background: "white"
                    },
                    children: services1_namespaceObject.u.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-lg-3 col-md-6 item-bx",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "numb",
                                    children: item.id
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "mb-20",
                                    children: item.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: item.content
                                })
                            ]
                        }, item.id)
                    )
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Services1 = (Services1);


/***/ }),

/***/ 3304:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6429);
/* harmony import */ var _components_Services2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9533);
/* harmony import */ var _components_About_Us2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8991);
/* harmony import */ var _components_Services1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1643);
/* harmony import */ var _components_Portfolio1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3534);
/* harmony import */ var _layouts_light__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6172);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_2__]);
_components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

/* eslint-disable @next/next/no-img-element */ 






const Home1 = ()=>{
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        document.querySelector("body").classList.add("homepage");
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_light__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        footerClass: "mt-30",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About_Us2__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services1__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Portfolio1__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home1);

});

/***/ }),

/***/ 3614:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":{"first":"¡Bienvenido a prismatic!","second":"Arquitectura Innovadora"},"content":{"first":"Diseño, construcción y comercialización de espacios ","second":"libres con contenedores."},"image":"/assets/img/slid/n/Recurso-44-20.jpg"}]');

/***/ })

};
;