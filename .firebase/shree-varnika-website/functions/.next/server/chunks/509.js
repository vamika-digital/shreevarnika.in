exports.id = 509;
exports.ids = [509];
exports.modules = {

/***/ 3072:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8631))

/***/ }),

/***/ 8631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TopNavigation)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/popover/popover.js
var popover = __webpack_require__(2513);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 4 modules
var transition = __webpack_require__(6235);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var Bars3Icon = __webpack_require__(4832);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js
var MagnifyingGlassIcon = __webpack_require__(2523);
;// CONCATENATED MODULE: ./src/data/navigation.json
const navigation_namespaceObject = JSON.parse('{"b":[{"name":"Products","featured":[{"name":"New Arrivals","href":"#","imageSrc":"/images/categories/herbs-spices/herbs-spices.jpg","imageAlt":"Models sitting back to back, wearing Basic Tee in black and bone."},{"name":"Basic Tees","href":"#","imageSrc":"/images/categories/herbs-spices/herbs-spices.jpg","imageAlt":"Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."},{"name":"Accessories","href":"#","imageSrc":"/images/categories/herbs-spices/herbs-spices.jpg","imageAlt":"Model wearing minimalist watch with black wristband and white watch face."},{"name":"Carry","href":"#","imageSrc":"/images/categories/herbs-spices/herbs-spices.jpg","imageAlt":"Model opening tan leather long wallet with credit card pockets and cash pouch."}]}],"L":[{"name":"About Us","href":"/about-us"},{"name":"What We Do","href":"/what-we-do"},{"name":"Contact Us","href":"/contact-us"}]}');
;// CONCATENATED MODULE: ./src/utils/helper.js
const classNames = (...classes)=>{
    return classes.filter(Boolean).join(" ");
};

;// CONCATENATED MODULE: ./src/components/layout/main-header.jsx







function MainHeader({ setMobileMenuOpen }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "relative z-10",
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            "aria-label": "Top",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-white bg-opacity-10 backdrop-blur-md backdrop-filter",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex h-16 items-center justify-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hidden lg:flex lg:flex-1 lg:items-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "/",
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                alt: "Shree Varnika Royal Products Pvt. Ltd.",
                                                src: "/logo.png",
                                                width: "96",
                                                height: "96",
                                                className: "h-14 w-auto"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "ml-3 w-52 text-sm font-bold text-primary",
                                                children: "Shree Varnika Royal Products Pvt. Ltd."
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hidden h-full lg:flex",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J.Group, {
                                        className: "inset-x-0 bottom-0 px-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex h-full justify-center space-x-8",
                                            children: [
                                                navigation_namespaceObject.b.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx(popover/* Popover */.J, {
                                                        className: "flex",
                                                        children: ({ open })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "relative flex",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(popover/* Popover */.J.Button, {
                                                                            className: "relative z-10 flex items-center justify-center text-sm font-bold text-gray-500 transition-colors duration-200 ease-out",
                                                                            children: [
                                                                                category.name,
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: classNames(open ? "bg-white" : "", "absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out"),
                                                                                    "aria-hidden": "true"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                                                                        as: react_.Fragment,
                                                                        enter: "transition ease-out duration-200",
                                                                        enterFrom: "opacity-0",
                                                                        enterTo: "opacity-100",
                                                                        leave: "transition ease-in duration-150",
                                                                        leaveFrom: "opacity-100",
                                                                        leaveTo: "opacity-0",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(popover/* Popover */.J.Panel, {
                                                                            className: "absolute inset-x-0 top-full text-sm text-gray-500",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "absolute inset-0 top-1/2 bg-white shadow",
                                                                                    "aria-hidden": "true"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                    className: "relative bg-white",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                            className: "grid grid-cols-4 gap-x-8 gap-y-10 py-16",
                                                                                            children: category.featured.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                                    className: "group relative",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                                            className: "aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75",
                                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                                                                src: item.imageSrc,
                                                                                                                alt: item.imageAlt,
                                                                                                                className: "object-cover object-center",
                                                                                                                width: "280",
                                                                                                                height: "340"
                                                                                                            })
                                                                                                        }),
                                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                                            href: item.href,
                                                                                                            className: "mt-4 block font-medium text-gray-900",
                                                                                                            children: [
                                                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                                    className: "absolute inset-0 z-10",
                                                                                                                    "aria-hidden": "true"
                                                                                                                }),
                                                                                                                item.name
                                                                                                            ]
                                                                                                        }),
                                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                                                            "aria-hidden": "true",
                                                                                                            className: "mt-1",
                                                                                                            children: "Shop now"
                                                                                                        })
                                                                                                    ]
                                                                                                }, item.name))
                                                                                        })
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                    }, category.name)),
                                                navigation_namespaceObject.L.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: page.href,
                                                        className: "flex items-center text-sm font-bold text-gray-500",
                                                        children: page.name
                                                    }, page.name))
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-1 items-center lg:hidden",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            type: "button",
                                            className: "-ml-2 p-2 text-gray-500",
                                            onClick: ()=>setMobileMenuOpen(true),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Open menu"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Bars3Icon/* default */.Z, {
                                                    className: "h-6 w-6",
                                                    "aria-hidden": "true"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            className: "ml-2 p-2 text-sm font-bold text-gray-500",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Search"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(MagnifyingGlassIcon/* default */.Z, {
                                                    className: "h-6 w-6",
                                                    "aria-hidden": "true"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "/",
                                    className: "lg:hidden",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sr-only",
                                            children: "Shree Varnika Royal Products Pvt. Ltd."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            alt: "Shree Varnika Royal Products Pvt. Ltd.",
                                            src: "/logo.png",
                                            width: "96",
                                            height: "96",
                                            className: "h-14 w-auto"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/dialog/dialog.js + 17 modules
var dialog = __webpack_require__(1061);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/tabs/tabs.js + 2 modules
var tabs = __webpack_require__(502);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(1966);
;// CONCATENATED MODULE: ./src/components/layout/main-mobile-header.jsx







function MainMobileHeader({ mobileMenuOpen, setMobileMenuOpen }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Root, {
        show: mobileMenuOpen,
        as: react_.Fragment,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dialog/* Dialog */.V, {
            as: "div",
            className: "relative z-40 lg:hidden",
            onClose: setMobileMenuOpen,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                    as: react_.Fragment,
                    enter: "transition-opacity ease-linear duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "transition-opacity ease-linear duration-300",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fixed inset-0 bg-black bg-opacity-25"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "fixed inset-0 z-40 flex",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                        as: react_.Fragment,
                        enter: "transition ease-in-out duration-300 transform",
                        enterFrom: "-translate-x-full",
                        enterTo: "translate-x-0",
                        leave: "transition ease-in-out duration-300 transform",
                        leaveFrom: "translate-x-0",
                        leaveTo: "-translate-x-full",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dialog/* Dialog */.V.Panel, {
                            className: "relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex px-4 pb-2 pt-5",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        type: "button",
                                        className: "-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-500",
                                        onClick: ()=>setMobileMenuOpen(false),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "sr-only",
                                                children: "Close menu"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon/* default */.Z, {
                                                className: "h-6 w-6",
                                                "aria-hidden": "true"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(tabs/* Tab */.O.Group, {
                                    as: "div",
                                    className: "mt-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "border-b border-gray-200",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(tabs/* Tab */.O.List, {
                                                className: "-mb-px flex space-x-8 px-4",
                                                children: navigation_namespaceObject.b.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx(tabs/* Tab */.O, {
                                                        className: ({ selected })=>classNames(selected ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-900", "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"),
                                                        children: category.name
                                                    }, category.name))
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(tabs/* Tab */.O.Panels, {
                                            as: react_.Fragment,
                                            children: navigation_namespaceObject.b.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx(tabs/* Tab */.O.Panel, {
                                                    className: "space-y-12 px-4 py-6",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "grid grid-cols-2 gap-x-4 gap-y-10",
                                                        children: category.featured.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "group relative",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                            src: item.imageSrc,
                                                                            alt: item.imageAlt,
                                                                            className: "object-cover object-center",
                                                                            width: "136",
                                                                            height: "136"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: item.href,
                                                                        className: "mt-6 block text-sm font-medium text-gray-900",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "absolute inset-0 z-10",
                                                                                "aria-hidden": "true"
                                                                            }),
                                                                            item.name
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        "aria-hidden": "true",
                                                                        className: "mt-1 text-sm text-gray-500",
                                                                        children: "Shop now"
                                                                    })
                                                                ]
                                                            }, item.name))
                                                    })
                                                }, category.name))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "space-y-6 border-t border-gray-200 px-4 py-6",
                                    children: navigation_namespaceObject.L.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flow-root",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: page.href,
                                                className: "-m-2 block p-2 font-medium text-gray-900",
                                                children: page.name
                                            })
                                        }, page.name))
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/layout/top-navigation.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function TopNavigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MainMobileHeader, {
                mobileMenuOpen: mobileMenuOpen,
                setMobileMenuOpen: setMobileMenuOpen
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MainHeader, {
                setMobileMenuOpen: setMobileMenuOpen
            })
        ]
    });
}


/***/ }),

/***/ 2385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.jsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_jsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(2247);
var layout_jsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_jsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5553);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./src/components/layout/top-navigation.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/viveksingh/development/projects/shreevarnika.in/src/components/layout/top-navigation.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const top_navigation = (__default__);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7887);
;// CONCATENATED MODULE: ./src/data/footer-navigation.json
const footer_navigation_namespaceObject = JSON.parse('{"Ri":[{"name":"Bags","href":"#"},{"name":"Tees","href":"#"},{"name":"Objects","href":"#"},{"name":"Home Goods","href":"#"},{"name":"Accessories","href":"#"}],"S9":[{"name":"About Us","href":"/about-us"},{"name":"What We Do","href":"/what-we-do"},{"name":"How We Work","href":"/how-we-work"},{"name":"Press","href":"/press"},{"name":"Careers","href":"/careers"},{"name":"Terms & Conditions","href":"/terms-and-conditions"},{"name":"Privacy","href":"/privacy"}],"$j":[{"name":"Contact Us","href":"/contact-us"},{"name":"Twitter","href":"#"},{"name":"Instagram","href":"#"},{"name":"Pinterest","href":"#"}]}');
;// CONCATENATED MODULE: ./src/components/layout/main-footer.jsx



function MainFooter() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        "aria-labelledby": "footer-heading",
        className: "bg-gray-900",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                id: "footer-heading",
                className: "sr-only",
                children: "Footer"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "py-20 xs:grid xl:grid-cols-5 xl:gap-4 md:grid md:grid-cols-5 md:gap-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-sm font-medium text-white",
                                        children: "Shop"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        role: "list",
                                        className: "mt-6 space-y-6",
                                        children: footer_navigation_namespaceObject.Ri.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "text-sm",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: item.href,
                                                    className: "text-gray-300 hover:text-white",
                                                    children: item.name
                                                })
                                            }, item.name))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "md:mt-0 mt-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-sm font-medium text-white",
                                        children: "Company"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        role: "list",
                                        className: "mt-6 space-y-6",
                                        children: footer_navigation_namespaceObject.S9.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "text-sm",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: item.href,
                                                    className: "text-gray-300 hover:text-white",
                                                    children: item.name
                                                })
                                            }, item.name))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "md:mt-0 mt-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-sm font-medium text-white",
                                        children: "Connect"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        role: "list",
                                        className: "mt-6 space-y-6",
                                        children: footer_navigation_namespaceObject.$j.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "text-sm",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: item.href,
                                                    className: "text-gray-300 hover:text-white",
                                                    children: item.name
                                                })
                                            }, item.name))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-span-2 md:mt-0 mt-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-sm font-medium text-white",
                                        children: "Sign up for our newsletter"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mt-6 text-sm text-gray-300",
                                        children: "The latest deals and savings, sent to your inbox weekly."
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        className: "mt-2 flex sm:max-w-md",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "email-address",
                                                className: "sr-only",
                                                children: "Email address"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                id: "email-address",
                                                type: "text",
                                                autoComplete: "email",
                                                required: true,
                                                className: "w-full min-w-0 appearance-none rounded-md border border-white bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "ml-4 flex-shrink-0",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "submit",
                                                    className: "flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900",
                                                    children: "Sign up"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "border-t border-gray-800 py-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "Copyright \xa9 2023 Shree Varnika Royal Products Pvt. Ltd., Inc."
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/layout.jsx





const metadata = {
    title: "Shree Varnika Royal Products Private Limited",
    description: "Shree Varnika Royal Products Private Limited"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon-32x32.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon-16x16.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "manifest",
                        href: "/site.webmanifest"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "mask-icon",
                        href: "/safari-pinned-tab.svg",
                        color: "#000000"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "msapplication-TileColor",
                        content: "#000000"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        content: "#000000"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                className: (layout_jsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "bg-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(top_navigation, {}),
                        children,
                        /*#__PURE__*/ jsx_runtime_.jsx(MainFooter, {})
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 5926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8922);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function Container({ className, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className),
        ...props
    });
}


/***/ }),

/***/ 2819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;