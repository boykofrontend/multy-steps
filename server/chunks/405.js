"use strict";
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7444);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(156);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_paths__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1246);
/* harmony import */ var _utils_cookiesManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1164);
/* __next_internal_client_entry_do_not_use__  auto */ 







const Steps = ({ currentStep  })=>{
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const [isExistProject, setIsExistProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const cachedProject = (0,_utils_cookiesManager__WEBPACK_IMPORTED_MODULE_7__/* .cookiesGetCompletedForm */ .ed)();
        if (!!cachedProject) {
            setIsExistProject(true);
        }
    }, []);
    const getClassName = (stepNumber)=>{
        if (stepNumber === currentStep) {
            return "active";
        }
        if (stepNumber < currentStep) {
            return "completed";
        }
        return "";
    };
    const redirectToDetails = ()=>{
        router.push(_utils_paths__WEBPACK_IMPORTED_MODULE_6__/* .PAGES_PATHS.details */ .c.details);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "steps",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "details-btn",
                name: "Existing project",
                onClick: redirectToDetails,
                isDisabled: !isExistProject
            }),
            _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .mockData.STEPS.map */ .c4.STEPS.map((step, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `step-container ${getClassName(index + 1)}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "step-title",
                            children: step
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "step-dot"
                        })
                    ]
                }, step)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: "steps-image",
                width: "260",
                height: "160",
                src: "/rainbow.png",
                alt: "background image"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Steps);


/***/ }),

/***/ 3700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_StepsForm)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: ./src/utils/constants.ts
var constants = __webpack_require__(7444);
;// CONCATENATED MODULE: ./src/components/Input.tsx



const Input = ({ onChange , label , className ="" , defaultValue , name , value ="" , type ="text" , required =false  })=>{
    if (!label) {
        return /*#__PURE__*/ jsx_runtime_.jsx("input", {
            className: `custom-input ${className}`,
            name: name,
            type: name,
            onChange: onChange,
            value: value,
            required: required,
            pattern: constants/* RegExps.email */.VF.email
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
        className: `custom-input-wrapper ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "custom-input-label",
                children: label
            }),
            defaultValue && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "custom-input-placeholder",
                children: defaultValue
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: type,
                value: value,
                className: `custom-input ${defaultValue ? "default-value" : ""}`,
                name: name,
                required: required,
                onChange: onChange
            })
        ]
    });
};
/* harmony default export */ const components_Input = (Input);

;// CONCATENATED MODULE: ./src/components/RadioTag/index.tsx


const Tag = ({ name , onChange  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "radio-tag-wrapper",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    name: "radioTag",
                    type: "radio",
                    onChange: onChange(name, "radioTag")
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "radio-tag",
                    children: name
                })
            ]
        })
    });
/* harmony default export */ const RadioTag = (Tag);

;// CONCATENATED MODULE: ./src/components/Tags/index.tsx




const Tags = ({ onChange  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "tags-component",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                className: "tags-component-title",
                children: [
                    "Project Category ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    " (It cannot be changed after creation)"
                ]
            }),
            constants/* mockData.TAGS.map */.c4.TAGS.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx(RadioTag, {
                    name: tag,
                    onChange: onChange
                }, tag))
        ]
    });
/* harmony default export */ const components_Tags = (Tags);

// EXTERNAL MODULE: ./src/components/Button.tsx
var Button = __webpack_require__(156);
// EXTERNAL MODULE: ./src/utils/paths.ts
var paths = __webpack_require__(1246);
;// CONCATENATED MODULE: ./src/components/StepsForm/Steps/FirstStep.tsx






const FirstStep = ({ onInputChange , formValues , onRadioButtonChange , handleNextStep  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "form-step-first",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Input, {
                label: "Project Name (It can be changed later)",
                onChange: onInputChange,
                name: "projectName",
                value: formValues["projectName"],
                className: "first-step"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Input, {
                label: "Project URL (It cannot be changed after creation)",
                onChange: onInputChange,
                name: "projectUrl",
                defaultValue: paths/* DEFAULT_URL */.y,
                value: formValues["projectUrl"],
                className: "first-step"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Tags, {
                onChange: onRadioButtonChange
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                name: "Add Project",
                isDisabled: !formValues.radioTag || !formValues.projectUrl || !formValues.projectName,
                type: "button",
                onClick: handleNextStep
            })
        ]
    });
/* harmony default export */ const Steps_FirstStep = (FirstStep);

;// CONCATENATED MODULE: ./src/components/RadioButtonsGroup.tsx


const RadioButtonsGroup = ({ data , onChange , inputName , activeButton , title  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "radio-buttons-wrapper",
        children: [
            title && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "radio-button-title",
                children: title
            }),
            data.map((name)=>/*#__PURE__*/ jsx_runtime_.jsx((react_default()).Fragment, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: "radio-button",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "label",
                                children: name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                checked: name === activeButton,
                                type: "radio",
                                name: inputName,
                                onChange: onChange(name, inputName)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "radio"
                            })
                        ]
                    })
                }, name))
        ]
    });
/* harmony default export */ const components_RadioButtonsGroup = (RadioButtonsGroup);

;// CONCATENATED MODULE: ./src/components/StepsForm/Steps/SecondStep.tsx





const SecondStep = ({ radioGoalValue , onRadioButtonChange , handlePrevStep , handleNextStep  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "form-step-second",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_RadioButtonsGroup, {
                data: constants/* mockData.SECOND_STEP_BUTTONS */.c4.SECOND_STEP_BUTTONS,
                inputName: "radioGoal",
                activeButton: radioGoalValue,
                onChange: onRadioButtonChange
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "buttons-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        name: "Back",
                        className: "back-btn",
                        type: "button",
                        onClick: handlePrevStep
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        name: "Continue",
                        className: "next-btn",
                        isDisabled: !radioGoalValue,
                        type: "button",
                        onClick: handleNextStep
                    })
                ]
            })
        ]
    });
/* harmony default export */ const Steps_SecondStep = (SecondStep);

;// CONCATENATED MODULE: ./src/components/QuantityInput.tsx



const QuantityInput = ({ onChange  })=>{
    const [inputValue, setInputValue] = (0,react_.useState)(0);
    const handleDecrement = ()=>{
        setInputValue(inputValue - 1);
        onChange("quantityCount", `${inputValue - 1}`);
    };
    const handleIncrement = ()=>{
        setInputValue(inputValue + 1);
        onChange("quantityCount", `${inputValue + 1}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "quantity-input-wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                className: "quantity-decrement",
                onClick: handleDecrement,
                isDisabled: inputValue === 0,
                name: "-"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                value: inputValue,
                className: "quantity-input",
                min: 0,
                name: "quantityCount"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                className: "quantity-increment",
                onClick: handleIncrement,
                name: "+"
            })
        ]
    });
};
/* harmony default export */ const components_QuantityInput = (QuantityInput);

;// CONCATENATED MODULE: ./src/components/StepsForm/Steps/ThirdStep.tsx








const ThirdStep = ({ formValues , onRadioButtonChange , onInputChange , handlePrevStep , onCountChange  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "form-step-third",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_QuantityInput, {
                onChange: onCountChange
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_RadioButtonsGroup, {
                data: constants/* mockData.THIRD_STEP_BUTTONS */.c4.THIRD_STEP_BUTTONS,
                inputName: "radioProject",
                activeButton: formValues.radioProject,
                onChange: onRadioButtonChange,
                title: constants/* mockData.THIRD_STEP_MIDDLE_TITLE */.c4.THIRD_STEP_MIDDLE_TITLE
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "email-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "email-title",
                        children: "Contact Email"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Input, {
                        type: "email",
                        onChange: onInputChange,
                        name: "email",
                        defaultValue: paths/* DEFAULT_URL */.y,
                        value: formValues["email"],
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "buttons-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        name: "Back",
                        className: "back-btn",
                        type: "button",
                        onClick: handlePrevStep
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        name: "Create Project",
                        className: "next-btn",
                        isDisabled: !formValues.radioProject || !formValues.email,
                        type: "submit"
                    })
                ]
            })
        ]
    });
/* harmony default export */ const Steps_ThirdStep = (ThirdStep);

// EXTERNAL MODULE: ./src/utils/cookiesManager.ts
var cookiesManager = __webpack_require__(1164);
;// CONCATENATED MODULE: ./src/components/StepsForm/index.tsx
/* __next_internal_client_entry_do_not_use__  auto */ 









const StepsForm = ({ step , setCurrentStep  })=>{
    const router = (0,navigation.useRouter)();
    const [formValues, setFormValues] = (0,react_.useState)({});
    const cachedFormData = (0,cookiesManager/* cookiesGetFormData */.iU)() || {};
    (0,react_.useEffect)(()=>{
        if (!formValues.projectName) {
            setFormValues(cachedFormData);
        }
    }, [
        step
    ]);
    const redirectToDetails = ()=>{
        router.push(paths/* PAGES_PATHS.details */.c.details);
    };
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        if (step === 3 && formValues.quantityCount) {
            (0,cookiesManager/* cookiesSetCompletedForm */.Pe)(formValues);
            (0,cookiesManager/* cookiesRemoveFormData */.dW)();
            redirectToDetails();
        }
    };
    const handleNextStep = ()=>{
        setCurrentStep(step + 1);
        (0,cookiesManager/* cookiesSetFormData */.Zl)({
            ...formValues,
            step: step + 1
        });
    };
    const handlePrevStep = ()=>{
        setCurrentStep(step - 1);
    };
    const onInputChange = (e)=>{
        setFormValues({
            ...formValues,
            [e.currentTarget.name]: e.currentTarget.value
        });
    };
    const onCountChange = (name, count)=>{
        console.log("here", count);
        setFormValues({
            ...formValues,
            [name]: count
        });
    };
    const onRadioButtonChange = (name, type)=>()=>{
            setFormValues({
                ...formValues,
                [type]: name
            });
        };
    console.log("form", formValues);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: "form",
        onSubmit: handleFormSubmit,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "form-subtitle",
                children: constants/* StepSubtitles */.ZM[step]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: `form-title ${step === 3 ? "third-step" : ""}`,
                children: constants/* StepTitles */.j2[step]
            }),
            step === 1 && /*#__PURE__*/ jsx_runtime_.jsx(Steps_FirstStep, {
                formValues: {
                    projectName: formValues.projectName,
                    projectUrl: formValues.projectUrl,
                    radioTag: formValues.radioTag
                },
                onInputChange: onInputChange,
                onRadioButtonChange: onRadioButtonChange,
                handleNextStep: handleNextStep
            }),
            step === 2 && /*#__PURE__*/ jsx_runtime_.jsx(Steps_SecondStep, {
                handlePrevStep: handlePrevStep,
                handleNextStep: handleNextStep,
                onRadioButtonChange: onRadioButtonChange,
                radioGoalValue: formValues.radioGoal
            }),
            step === 3 && /*#__PURE__*/ jsx_runtime_.jsx(Steps_ThirdStep, {
                formValues: {
                    radioProject: formValues.radioProject,
                    email: formValues.email
                },
                onRadioButtonChange: onRadioButtonChange,
                onInputChange: onInputChange,
                onCountChange: onCountChange,
                handlePrevStep: handlePrevStep
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                className: "details-btn",
                name: "Existing project",
                onClick: redirectToDetails
            })
        ]
    });
};
/* harmony default export */ const components_StepsForm = (StepsForm);


/***/ }),

/***/ 7444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VF": () => (/* binding */ RegExps),
/* harmony export */   "ZM": () => (/* binding */ StepSubtitles),
/* harmony export */   "c4": () => (/* binding */ mockData),
/* harmony export */   "j2": () => (/* binding */ StepTitles)
/* harmony export */ });
/* unused harmony export DESKTOP_WIDTH */
const mockData = {
    TAGS: [
        "NFT",
        "GameFi",
        "DeFi",
        "DAO",
        "Ecosystem",
        "Others",
        "SocialFi",
        "Metaverse",
        "Tools"
    ],
    STEPS: [
        "Start First Project",
        "Project Details",
        "Create Project"
    ],
    SECOND_STEP_BUTTONS: [
        "Grow My Community",
        "Activate Existing Members",
        "Understand My Members",
        "Other"
    ],
    THIRD_STEP_BUTTONS: [
        "Pre Product",
        "Post Product"
    ],
    THIRD_STEP_MIDDLE_TITLE: "Are you pre or post product launch?"
};
const StepSubtitles = {
    1: "To Create Quest you need firstly create Project",
    2: "Project Details",
    3: "Create Project"
};
const StepTitles = {
    1: "Add New Project",
    2: "What is your main goal with AlphaQuest?",
    3: "How many full-time workers on project?"
};
const DESKTOP_WIDTH = 1440;
const RegExps = {
    email: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$"
};


/***/ }),

/***/ 1246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ PAGES_PATHS),
/* harmony export */   "y": () => (/* binding */ DEFAULT_URL)
/* harmony export */ });
const DEFAULT_URL = "Alphaguilty.io/";
const PAGES_PATHS = {
    details: "multy-steps/details"
};


/***/ })

};
;